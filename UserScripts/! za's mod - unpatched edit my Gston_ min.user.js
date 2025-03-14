// ==UserScript==
// @name ! za's mod - unpatched edit my Gston_
// @author .za Gsaston_
// @description yeah nah no desc needed
// @version final
// @match *://*.moomoo.io/*
// @match *://dev.moomoo.io/*
// @icon https://moomoo.io/img/animals/cow_1.png
// @grant none
// @namespace https://greasyfork.org/users/1404332
// @downloadURL https://update.greasyfork.org/scripts/519513/%21%20za%27s%20mod%20-%20unpatched.user.js
// @updateURL https://update.greasyfork.org/scripts/519513/%21%20za%27s%20mod%20-%20unpatched.meta.js
// @name:en ! za's mod - unpatched edit my Gston_
// @name:de ! Zas Mod - Unpatched bearbeiten mein gston_ Explain More actions
// @name:ru ! Мод ZA - непрерывное редактирование моего gston_
// @name:hi तू ZA'S MOD - Unpatched संपादित करें मेरे GSTON_
// @name:ar ! ZA's Mod - تحرير غير محدد GSTON_
// @name:pt ! Mod de Za - editar meu Gston_
// @name:ja ！ ZAのmod-未満の編集私のgston_
// @name:zh ! za's mod - unpatched edit my Gston_
// @name:es ! Mod de ZA - sin parches editar mi gston_
// @name:fr ! Za's Mod - Éditer non lus mon gston_
// @name:id Lai Za's Mod - edit gston_ saya yang tidak tertandingi
// @name:uk ! ZA's Mod - Unpatced Edit My Gston_
// @name:it ! ZA's Mod - senza patch modifica my gston_
// @name:pl ! ZA MOD - Unpatched Edit My Gston_
// @name:ko ! ZA 's MOD- 방치되지 않은 편집 내 gston_
// @name:vi !! ZA's Mod - Chỉnh sửa Chỉnh sửa GSton_ của tôi
// @name:ro ! Za's Mod - NEPATAT EDITĂ -MI GSTON_
// @name:tr ! ZA'nın MOD - Patched Letted Gston'umu Düzenle_
// @name:nl ! ZA's mod - ongecontroleerd bewerken mijn gston_
// @name:th - za's mod - unpatched แก้ไข gston_ ของฉัน
// @name:fi Vasiksi Za's Mod - Unpatchery Muokkaa GSTON_
// @name:sv ! za's mod - opatched redigera min gston_
// @name:hu ! ZA's Mod - Uncatched szerkesztés a gston_
// @name:no ! ZAs mod - uopplagt rediger min gston_
// @name:bg ! Za's Mod - Независимо редактиране на моя GSTON_
// @name:sk ! ZA's Mod - Nepreškred edit môj gston_
// @name:el ! Mod της Za - μη εξαντλημένη επεξεργασία μου gston_ More actions
// @name:cs ! ZA's MOD - UNCHED EDIT MY GSTON_
// @name:da ! ZA'S MOD - UNCHED Rediger min gston_
// @name:he ! המוד של ZA - לא נתפס לערוך את ה- GSTON שלי
// @description:zh yeah nah no desc needed
// @description:en yeah nah no desc needed
// @description:fr ouais non pas de desc besoin
// @description:pt sim nah não precisava
// @description:de Ja, nah kein Desc brauchte
// @description:ru да нет, не нужно, что не нужно
// @description:hi हाँ नाह नहीं डेस की जरूरत है
// @description:ja ええ、descは必要ありません
// @description:ar نعم لا تحتاج ديسك More actions
// @description:es sí, no se necesitaba descartarse
// @description:ko 네, DESC가 필요하지 않습니다
// @description:id ya nah no desc dibutuhkan
// @description:vi vâng nah không cần desc
// @description:ro Da, nu este nevoie de descendent
// @description:th ใช่ไม่จำเป็นต้องใช้ desc
// @description:nl ja nee nee desc nodig
// @description:tr evet hayır desc gerekmez
// @description:it sì nah no no desc sia necessario
// @description:pl tak, nie potrzebne jest desc
// @description:uk так, ні, не потрібно було
// @description:cs jo, není potřeba žádný desc
// @description:he כן לא אין צורך
// @description:no ja nah ingen desc nødvendig
// @description:hu igen nah nincs szükség descre
// @description:fi joo ei Desc tarvitsi
// @description:el ναι, όχι χρειάζονται desc More actions
// @description:bg да, не, не е необходимо
// @description:sk Áno, nie je potrebný Desc
// @description:da ja nah ingen desc havde brug for
// @description:sv ja nej ingen desc behövs
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@main/UserScripts/Updater.js
// @license MIT
// ==/UserScript==
! function() {
    let millDone = !1;

    function isInShieldDist(e, t, i = 168) {
        const a = t.x - e.x,
            n = t.y - e.y;
        let s = Math.atan2(n, a) * (180 / Math.PI);
        const o = (e.facingAngle % 360 + 360) % 360;
        s = (s % 360 + 360) % 360;
        const l = i / 2,
            r = (o - l + 360) % 360,
            c = (o + l) % 360;
        return r <= c ? s >= r && s <= c : s >= r || s <= c
    }
    let gameLoopState = {
            isMovingAuto: 0,
            targetPos: null,
            obss: [],
            canRun: !0,
            step: 0,
            rubyAttempts: 0,
            maxRubyAttempts: 50,
            rubyIndex: 0
        },
        toMove = [],
        nearspiker = !1,
        info = {},
        autos = {},
        aimSpike = 0;

    function isInsideArena(e, t) {
        const i = 7230,
            a = 13200;
        return Math.sqrt(Math.pow(e.x - i, 2) + Math.pow(e.y - a, 2)) <= 300
    }
    window.can = 1, setInterval((() => {
        !altcha_checkbox.checked && altcha_checkbox.click()
    }), 2e3);
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
                let i = t[e];
                console.log("Appending:", {
                    element: i,
                    target: this
                }), this.element.append(i.element || i)
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
    }, "sandbox.moomoo.io" == location.hostname && (document.getElementById("foodDisplay").style.display = "none", document.getElementById("woodDisplay").style.display = "none", document.getElementById("stoneDisplay").style.display = "none");
    let safewalking = !1,
        antispiketicked = !1,
        autoOneFrameToggled = !1;
    const {
        sin: sin,
        cos: cos,
        sqrt: sqrt,
        min: min
    } = Math;
    let whereverifybutton = document.querySelector("#altcha_checkbox");

    function clicktheverify() {
        whereverifybutton && whereverifybutton.click()
    }
    setInterval(clicktheverify, 1e3);
    let RealPush = !1,
        useHack = !0,
        log = console.log,
        testMode = "127.0.0.1" == window.location.hostname,
        imueheua = !1;

    function getEl(e) {
        return document.getElementById(e)
    }
    var EasyStar = function(e) {
        var t = {};

        function i(a) {
            if (t[a]) return t[a].exports;
            var n = t[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        return i.m = e, i.c = t, i.d = function(e, t, a) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) i.d(a, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return a
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "9", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "/bin/", i(i.s = 0)
    }([function(e, t, i) {
        var a = {},
            n = i(1),
            s = i(2),
            o = i(3);
        e.exports = a;
        var l = 1;
        a.js = function() {
            var e, t, i, r = 1.4,
                c = !1,
                d = {},
                h = {},
                u = {},
                p = {},
                m = !0,
                f = {},
                g = [],
                y = Number.MAX_VALUE,
                w = !1;
            this.setAcceptableTiles = function(e) {
                e instanceof Array ? i = e : !isNaN(parseFloat(e)) && isFinite(e) && (i = [e])
            }, this.enableSync = function() {
                c = !0
            }, this.disableSync = function() {
                c = !1
            }, this.enableDiagonals = function() {
                w = !0
            }, this.disableDiagonals = function() {
                w = !1
            }, this.setGrid = function(t) {
                e = t;
                for (var i = 0; i < e.length; i++)
                    for (var a = 0; a < e[0].length; a++) h[e[i][a]] || (h[e[i][a]] = 1)
            }, this.setTileCost = function(e, t) {
                h[e] = t
            }, this.setAdditionalPointCost = function(e, t, i) {
                void 0 === u[t] && (u[t] = {}), u[t][e] = i
            }, this.removeAdditionalPointCost = function(e, t) {
                void 0 !== u[t] && delete u[t][e]
            }, this.removeAllAdditionalPointCosts = function() {
                u = {}
            }, this.setDirectionalCondition = function(e, t, i) {
                void 0 === p[t] && (p[t] = {}), p[t][e] = i
            }, this.removeAllDirectionalConditions = function() {
                p = {}
            }, this.setIterationsPerCalculation = function(e) {
                y = e
            }, this.avoidAdditionalPoint = function(e, t) {
                void 0 === d[t] && (d[t] = {}), d[t][e] = 1
            }, this.stopAvoidingAdditionalPoint = function(e, t) {
                void 0 !== d[t] && delete d[t][e]
            }, this.enableCornerCutting = function() {
                m = !0
            }, this.disableCornerCutting = function() {
                m = !1
            }, this.stopAvoidingAllAdditionalPoints = function() {
                d = {}
            }, this.findPath = function(t, a, s, r, d) {
                function h(e) {
                    c ? d(e) : setTimeout((function() {
                        d(e)
                    }))
                }
                if (void 0 === i) throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
                if (void 0 === e) throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
                if (t < 0 || a < 0 || s < 0 || r < 0 || t > e[0].length - 1 || a > e.length - 1 || s > e[0].length - 1 || r > e.length - 1) throw new Error("Your start or end point is outside the scope of your grid.");
                if (t !== s || a !== r) {
                    for (var u = e[r][s], p = !1, m = 0; m < i.length; m++)
                        if (u === i[m]) {
                            p = !0;
                            break
                        }
                    if (!1 !== p) {
                        var y = new n;
                        return y.openList = new o((function(e, t) {
                            return e.bestGuessDistance() - t.bestGuessDistance()
                        })), y.isDoneCalculating = !1, y.nodeHash = {}, y.startX = t, y.startY = a, y.endX = s, y.endY = r, y.callback = h, y.openList.push(T(y, y.startX, y.startY, null, 1)), r = l++, f[r] = y, g.push(r), r
                    }
                    h(null)
                } else h([])
            }, this.cancelPath = function(e) {
                return e in f && (delete f[e], !0)
            }, this.calculate = function() {
                if (0 !== g.length && void 0 !== e && void 0 !== i)
                    for (t = 0; t < y; t++) {
                        if (0 === g.length) return;
                        c && (t = 0);
                        var a = g[0],
                            n = f[a];
                        if (void 0 !== n)
                            if (0 !== n.openList.size()) {
                                var s = n.openList.pop();
                                if (n.endX !== s.x || n.endY !== s.y)(s.list = 0) < s.y && k(n, s, 0, -1, +v(s.x, s.y - 1)), s.x < e[0].length - 1 && k(n, s, 1, 0, +v(s.x + 1, s.y)), s.y < e.length - 1 && k(n, s, 0, 1, +v(s.x, s.y + 1)), 0 < s.x && k(n, s, -1, 0, +v(s.x - 1, s.y)), w && (0 < s.x && 0 < s.y && (m || x(e, i, s.x, s.y - 1, s) && x(e, i, s.x - 1, s.y, s)) && k(n, s, -1, -1, r * v(s.x - 1, s.y - 1)), s.x < e[0].length - 1 && s.y < e.length - 1 && (m || x(e, i, s.x, s.y + 1, s) && x(e, i, s.x + 1, s.y, s)) && k(n, s, 1, 1, r * v(s.x + 1, s.y + 1)), s.x < e[0].length - 1 && 0 < s.y && (m || x(e, i, s.x, s.y - 1, s) && x(e, i, s.x + 1, s.y, s)) && k(n, s, 1, -1, r * v(s.x + 1, s.y - 1)), 0 < s.x && s.y < e.length - 1 && (m || x(e, i, s.x, s.y + 1, s) && x(e, i, s.x - 1, s.y, s)) && k(n, s, -1, 1, r * v(s.x - 1, s.y + 1)));
                                else {
                                    var o = [];
                                    o.push({
                                        x: s.x,
                                        y: s.y
                                    });
                                    for (var l = s.parent; null != l;) o.push({
                                        x: l.x,
                                        y: l.y
                                    }), l = l.parent;
                                    o.reverse(), n.callback(o), delete f[a], g.shift()
                                }
                            } else n.callback(null), delete f[a], g.shift();
                        else g.shift()
                    }
            };
            var k = function(t, a, n, s, o) {
                    n = a.x + n, s = a.y + s, void 0 !== d[s] && void 0 !== d[s][n] || !x(e, i, n, s, a) || (void 0 === (s = T(t, n, s, a, o)).list ? (s.list = 1, t.openList.push(s)) : a.costSoFar + o < s.costSoFar && (s.costSoFar = a.costSoFar + o, s.parent = a, t.openList.updateItem(s)))
                },
                x = function(e, t, i, a, n) {
                    var s = p[a] && p[a][i];
                    if (s) {
                        var o = b(n.x - i, n.y - a);
                        if (! function() {
                                for (var e = 0; e < s.length; e++)
                                    if (s[e] === o) return !0;
                                return !1
                            }()) return !1
                    }
                    for (var l = 0; l < t.length; l++)
                        if (e[a][i] === t[l]) return !0;
                    return !1
                },
                b = function(e, t) {
                    if (0 === e && -1 === t) return a.TOP;
                    if (1 === e && -1 === t) return a.TOP_RIGHT;
                    if (1 === e && 0 === t) return a.RIGHT;
                    if (1 === e && 1 === t) return a.BOTTOM_RIGHT;
                    if (0 === e && 1 === t) return a.BOTTOM;
                    if (-1 === e && 1 === t) return a.BOTTOM_LEFT;
                    if (-1 === e && 0 === t) return a.LEFT;
                    if (-1 === e && -1 === t) return a.TOP_LEFT;
                    throw new Error("These differences are not valid: " + e + ", " + t)
                },
                v = function(t, i) {
                    return u[i] && u[i][t] || h[e[i][t]]
                },
                T = function(e, t, i, a, n) {
                    if (void 0 !== e.nodeHash[i]) {
                        if (void 0 !== e.nodeHash[i][t]) return e.nodeHash[i][t]
                    } else e.nodeHash[i] = {};
                    var o = S(t, i, e.endX, e.endY);
                    n = null !== a ? a.costSoFar + n : 0, o = new s(a, t, i, n, o);
                    return e.nodeHash[i][t] = o
                },
                S = function(e, t, i, a) {
                    var n, s;
                    return w ? (n = Math.abs(e - i)) < (s = Math.abs(t - a)) ? r * n + s : r * s + n : (n = Math.abs(e - i)) + (s = Math.abs(t - a))
                }
        }, a.TOP = "TOP", a.TOP_RIGHT = "TOP_RIGHT", a.RIGHT = "RIGHT", a.BOTTOM_RIGHT = "BOTTOM_RIGHT", a.BOTTOM = "BOTTOM", a.BOTTOM_LEFT = "BOTTOM_LEFT", a.LEFT = "LEFT", a.TOP_LEFT = "TOP_LEFT"
    }, function(e, t) {
        e.exports = function() {
            this.pointsToAvoid = {}, this.startX, this.callback, this.startY, this.endX, this.endY, this.nodeHash = {}, this.openList
        }
    }, function(e, t) {
        e.exports = function(e, t, i, a, n) {
            this.parent = e, this.x = t, this.y = i, this.costSoFar = a, this.simpleDistanceToTarget = n, this.bestGuessDistance = function() {
                return this.costSoFar + this.simpleDistanceToTarget
            }
        }
    }, function(e, t, i) {
        e.exports = i(4)
    }, function(e, t, i) {
        var a, n;
        (function() {
            var i, s, o, l, r, c, d, h, u, p, m, f, g, y, w;

            function k(e) {
                this.cmp = null != e ? e : s, this.nodes = []
            }
            o = Math.floor, p = Math.min, s = function(e, t) {
                return e < t ? -1 : t < e ? 1 : 0
            }, u = function(e, t, i, a, n) {
                var l;
                if (null == i && (i = 0), null == n && (n = s), i < 0) throw new Error("lo must be non-negative");
                for (null == a && (a = e.length); i < a;) n(t, e[l = o((i + a) / 2)]) < 0 ? a = l : i = l + 1;
                return [].splice.apply(e, [i, i - i].concat(t)), t
            }, c = function(e, t, i) {
                return null == i && (i = s), e.push(t), y(e, 0, e.length - 1, i)
            }, r = function(e, t) {
                var i, a;
                return null == t && (t = s), i = e.pop(), e.length ? (a = e[0], e[0] = i, w(e, 0, t)) : a = i, a
            }, h = function(e, t, i) {
                var a;
                return null == i && (i = s), a = e[0], e[0] = t, w(e, 0, i), a
            }, d = function(e, t, i) {
                var a;
                return null == i && (i = s), e.length && i(e[0], t) < 0 && (t = (a = [e[0], t])[0], e[0] = a[1], w(e, 0, i)), t
            }, l = function(e, t) {
                var i, a, n, l, r, c;
                for (null == t && (t = s), r = [], a = 0, n = (l = function() {
                        c = [];
                        for (var t = 0, i = o(e.length / 2); 0 <= i ? t < i : i < t; 0 <= i ? t++ : t--) c.push(t);
                        return c
                    }.apply(this).reverse()).length; a < n; a++) i = l[a], r.push(w(e, i, t));
                return r
            }, g = function(e, t, i) {
                if (null == i && (i = s), -1 !== (t = e.indexOf(t))) return y(e, 0, t, i), w(e, t, i)
            }, m = function(e, t, i) {
                var a, n, o, r, c;
                if (null == i && (i = s), !(n = e.slice(0, t)).length) return n;
                for (l(n, i), o = 0, r = (c = e.slice(t)).length; o < r; o++) a = c[o], d(n, a, i);
                return n.sort(i).reverse()
            }, f = function(e, t, i) {
                var a, n, o, c, d, h, m, f, g;
                if (null == i && (i = s), 10 * t <= e.length) {
                    if (!(o = e.slice(0, t).sort(i)).length) return o;
                    for (n = o[o.length - 1], c = 0, h = (m = e.slice(t)).length; c < h; c++) i(a = m[c], n) < 0 && (u(o, a, 0, null, i), o.pop(), n = o[o.length - 1]);
                    return o
                }
                for (l(e, i), g = [], d = 0, f = p(t, e.length); 0 <= f ? d < f : f < d; 0 <= f ? ++d : --d) g.push(r(e, i));
                return g
            }, y = function(e, t, i, a) {
                var n, o, l;
                for (null == a && (a = s), n = e[i]; t < i && a(n, o = e[l = i - 1 >> 1]) < 0;) e[i] = o, i = l;
                return e[i] = n
            }, w = function(e, t, i) {
                var a, n, o, l, r;
                for (null == i && (i = s), n = e.length, o = e[r = t], a = 2 * t + 1; a < n;)(l = a + 1) < n && !(i(e[a], e[l]) < 0) && (a = l), e[t] = e[a], a = 2 * (t = a) + 1;
                return e[t] = o, y(e, r, t, i)
            }, k.push = c, k.pop = r, k.replace = h, k.pushpop = d, k.heapify = l, k.updateItem = g, k.nlargest = m, k.nsmallest = f, k.prototype.push = function(e) {
                return c(this.nodes, e, this.cmp)
            }, k.prototype.pop = function() {
                return r(this.nodes, this.cmp)
            }, k.prototype.peek = function() {
                return this.nodes[0]
            }, k.prototype.contains = function(e) {
                return -1 !== this.nodes.indexOf(e)
            }, k.prototype.replace = function(e) {
                return h(this.nodes, e, this.cmp)
            }, k.prototype.pushpop = function(e) {
                return d(this.nodes, e, this.cmp)
            }, k.prototype.heapify = function() {
                return l(this.nodes, this.cmp)
            }, k.prototype.updateItem = function(e) {
                return g(this.nodes, e, this.cmp)
            }, k.prototype.clear = function() {
                return this.nodes = []
            }, k.prototype.empty = function() {
                return 0 === this.nodes.length
            }, k.prototype.size = function() {
                return this.nodes.length
            }, k.prototype.clone = function() {
                var e = new k;
                return e.nodes = this.nodes.slice(0), e
            }, k.prototype.toArray = function() {
                return this.nodes.slice(0)
            }, k.prototype.insert = k.prototype.push, k.prototype.top = k.prototype.peek, k.prototype.front = k.prototype.peek, k.prototype.has = k.prototype.contains, k.prototype.copy = k.prototype.clone, i = k, a = [], void 0 === (n = "function" == typeof(n = function() {
                return i
            }) ? n.apply(t, a) : n) || (e.exports = n)
        }).call(this)
    }]);
    let easystar = new EasyStar.js,
        {
            maxScreenWidth: maxScreenWidth,
            maxScreenHeight: maxScreenHeight
        } = config,
        {
            moveTo: moveTo,
            lineTo: lineTo
        } = CanvasRenderingContext2D.prototype;
    CanvasRenderingContext2D.prototype.moveTo = function(e, t) {
            if (.06 !== this.globalAlpha) return moveTo.call(this, e, t)
        }, CanvasRenderingContext2D.prototype.lineTo = function(e, t) {
            if (.06 !== this.globalAlpha) return lineTo.call(this, e, t)
        },
        function(e) {
            let t = {
                setup: () => {
                    "use strict";
                    let e = document.createElement("link");
                    e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css?family=Ubuntu:700", e.type = "text/css", document.body.append(e);
                    let t = document.createElement("script");
                    t.src = "https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js", document.body.append(t)
                },
                main: () => {
                    window.oncontextmenu = function() {
                        return !1
                    };
                    let e = window.config;
                    autoRubyOnSpawn = "bot" == name, autoRubyOnSpawn && (l.autoRespawn = 1), e.clientSendRate = 0, e.serverUpdateRate = 9, e.deathFadeout = 0, e.isSandbox = "sandbox.moomoo.io" == window.location.hostname, e.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373", "#91b2db"], e.weaponVariants = [{
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
                    }], e.anotherVisual = !0, e.useWebGl = !1, e.resetRender = !1;
                    let t, i = [];

                    function a(e, i) {
                        t && localStorage.setItem(e, i)
                    }

                    function n(e) {
                        t && localStorage.removeItem(e)
                    }
                    "undefined" != typeof Storage && (t = !0);
                    let s = function(e, i) {
                        try {
                            let a = JSON.parse(function(e) {
                                return t ? localStorage.getItem(e) : null
                            }(e));
                            return "object" == typeof a ? i : a
                        } catch (e) {
                            return alert("dieskid"), i
                        }
                    };
                    let o = {
                            help: {
                                desc: "Show Commands",
                                action: function(e) {
                                    for (let e in o) y("/" + e, o[e].desc, "lime", 1)
                                }
                            },
                            clear: {
                                desc: "Clear Chats",
                                action: function(e) {
                                    w()
                                }
                            },
                            debug: {
                                desc: "Debug Mod For Development",
                                action: function(e) {
                                    Pi(R), y("Debug", "Done", "#99ee99", 1)
                                }
                            },
                            play: {
                                desc: "Play Music ( /play [link] )",
                                action: function(e) {
                                    let t = e.split(" ");
                                    t[1] ? new Audio(t[1]).play() : y("Warn", "Enter Link ( /play [link] )", "#99ee99", 1)
                                }
                            },
                            bye: {
                                desc: "Leave Game",
                                action: function(e) {
                                    window.leave()
                                }
                            }
                        },
                        l = {
                            stackedText: !0,
                            HKH: !0,
                            names: !0,
                            adxtick: !0,
                            autoOneFrame: !0,
                            smartAutoInsta: !0,
                            autobullspam: !1,
                            safeWalk: !0,
                            killChat: !0,
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
                            noDir: !0,
                            showDir: !0,
                            autoRespawn: !0
                        };
                    window.removeConfigs = function() {
                        for (let e in l) n(e, l[e])
                    };
                    for (let e in l) l[e] = s(e, l[e]);
                    window.changeMenu = function() {}, window.debug = function() {}, window.toggleNight = function() {}, window.wasdMode = function() {}, window.startGrind = function() {}, window.connectFillBots = function() {}, window.destroyFillBots = function() {}, window.tryConnectBots = function() {}, window.destroyBots = function() {}, window.resBuild = function() {}, window.toggleBotsCircle = function() {}, window.toggleVisual = function() {}, window.prepareUI = function() {}, window.leave = function() {}, window.ping = imueheua ? 86 : 0;
                    class r {
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
                                for (let i = 0; i < e; i++) t += "<br>"
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
                            for (let i in e.option) t += `<option value = ${e.option[i].id}`, e.option[i].selected && (t += " selected"), t += `>${i}</option>`;
                            t += "</select>", this.add(t)
                        }
                        button(e) {
                            let t = "<button";
                            e.id && (t += ` id = ${e.id}`), e.style && (t += ` style = ${e.style.replaceAll(" ","")}`), e.class && (t += ` class = ${e.class}`), e.onclick && (t += ` onclick = ${e.onclick}`), t += ">", e.innerHTML && (t += e.innerHTML), t += "</button>", this.add(t)
                        }
                        selectMenu(e) {
                            let t, i = "<select";
                            if (!e.id) return void alert("please put id skid");
                            window[e.id + "Func"] = function() {}, e.id && (i += ` id = ${e.id}`), e.style && (i += ` style = ${e.style.replaceAll(" ","")}`), e.class && (i += ` class = ${e.class}`), i += ` onchange = window.${e.id+"Func"}()`, i += ">";
                            let n = 0;
                            for (let t in e.menu) i += `<option value = ${"option_"+t} id = ${"O_"+t}`, e.menu[t] && (i += " checked"), i += ` style = "color: ${e.menu[t]?"#000":"#fff"}; background: ${e.menu[t]?"#8ecc51":"#cc5151"};">${t}</option>`, n++;
                            i += "</select>", this.add(i), n = 0;
                            for (let t in e.menu) window[t + "Func"] = function() {
                                e.menu[t] = !!getEl("check_" + t).checked, a(t, e.menu[t]), getEl("O_" + t).style.color = e.menu[t] ? "#000" : "#fff", getEl("O_" + t).style.background = e.menu[t] ? "#8ecc51" : "#cc5151"
                            }, this.checkBox({
                                id: "check_" + t,
                                style: `display: ${0==n?"inline-block":"none"};`,
                                class: "checkB",
                                onclick: `window.${t+"Func"}()`,
                                checked: e.menu[t]
                            }), n++;
                            t = "check_" + getEl(e.id).value.split("_")[1], window[e.id + "Func"] = function() {
                                getEl(t).style.display = "none", t = "check_" + getEl(e.id).value.split("_")[1], getEl(t).style.display = "inline-block"
                            }
                        }
                    }
                    let c = new class {
                            constructor() {
                                this.element = null, this.action = null, this.divElement = null, this.startDiv = function(e, t) {
                                    let i = document.createElement("div");
                                    e.id && (i.id = e.id), e.style && (i.style = e.style), e.class && (i.className = e.class), this.element.appendChild(i), this.divElement = i;
                                    let a = new r(i);
                                    "function" == typeof t && t(a)
                                }, this.addDiv = function(e, t) {
                                    let i = document.createElement("div");
                                    e.id && (i.id = e.id), e.style && (i.style = e.style), e.class && (i.className = e.class), e.appendID && getEl(e.appendID).appendChild(i), this.divElement = i;
                                    let a = new r(i);
                                    "function" == typeof t && t(a)
                                }
                            }
                            set(e) {
                                this.element = getEl(e), this.action = new r(this.element)
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
                        d = document.createElement("div");
                    d.id = "nightMode", document.body.appendChild(d), c.set("nightMode"), c.setStyle("\n            display: none;\n            position: absolute;\n            pointer-events: none;\n            background-color: rgb(0, 0, 100);\n            opacity: 0;\n            top: 0%;\n            width: 100%;\n            height: 100%;\n            animation-duration: 5s;\n            animation-name: night2;\n            "), c.resetHTML(), c.setCSS("\n            @keyframes night1 {\n                from {opacity: 0;}\n                to {opacity: 0.35;}\n            }\n            @keyframes night2 {\n                from {opacity: 0.35;}\n                to {opacity: 0;}\n            }\n            ");
                    let h = document.createElement("div");
                    h.id = "menuDiv", document.body.appendChild(h), c.set("menuDiv"), c.setStyle("\n            position: absolute;\n            left: 20px;\n            top: 20px;\n            "), c.resetHTML(), c.setCSS('\n            .menuClass{\n                color: #fff;\n                font-size: 31px;\n                text-align: left;\n                padding: 10px;\n                padding-top: 7px;\n                padding-bottom: 5px;\n                width: 300px;\n                background-color: rgba(0, 0, 0, 0.25);\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n            }\n            .menuC {\n                display: none;\n                font-family: "Hammersmith One";\n                font-size: 12px;\n                max-height: 180px;\n                overflow-y: scroll;\n                -webkit-touch-callout: none;\n                -webkit-user-select: none;\n                -khtml-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n            .menuB {\n                text-align: center;\n                background-color: rgb(25, 25, 25);\n                color: #fff;\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n                border: 2px solid #000;\n                cursor: pointer;\n            }\n            .menuB:hover {\n                border: 2px solid #fff;\n            }\n            .menuB:active {\n                color: rgb(25, 25, 25);\n                background-color: rgb(200, 200, 200);\n            }\n            .customText {\n                color: #000;\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n                border: 2px solid #000;\n            }\n            .customText:focus {\n                background-color: yellow;\n            }\n            .checkB {\n                position: relative;\n                top: 2px;\n                accent-color: #888;\n                cursor: pointer;\n            }\n            .Cselect {\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n                background-color: rgb(75, 75, 75);\n                color: #fff;\n                border: 1px solid #000;\n            }\n            #menuChanger {\n                position: absolute;\n                right: 10px;\n                top: 10px;\n                background-color: rgba(0, 0, 0, 0);\n                color: #fff;\n                border: none;\n                cursor: pointer;\n            }\n            #menuChanger:hover {\n                color: #000;\n            }\n            ::-webkit-scrollbar {\n                width: 10px;\n            }\n            ::-webkit-scrollbar-track {\n                opacity: 0;\n            }\n            ::-webkit-scrollbar-thumb {\n                background-color: rgb(25, 25, 25);\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n            }\n            ::-webkit-scrollbar-thumb:active {\n                background-color: rgb(230, 230, 230);\n            }\n            '), c.startDiv({
                        id: "menuHeadLine",
                        class: "menuClass"
                    }, (e => {
                        e.add("Mod:"), e.button({
                            id: "menuChanger",
                            class: "material-icons",
                            innerHTML: "sync",
                            onclick: "window.changeMenu()"
                        }), c.addDiv({
                            id: "menuButtons",
                            style: "display: block; overflow-y: visible;",
                            class: "menuC",
                            appendID: "menuHeadLine"
                        }, (e => {
                            e.button({
                                class: "menuB",
                                innerHTML: "Debug",
                                onclick: "window.debug()"
                            }), e.button({
                                class: "menuB",
                                innerHTML: "Night Mode",
                                onclick: "window.toggleNight()"
                            })
                        })), c.addDiv({
                            id: "menuMain",
                            style: "display: block",
                            class: "menuC",
                            appendID: "menuHeadLine"
                        }, (e => {
                            e.button({
                                class: "menuB",
                                innerHTML: "Toggle Wasd Mode",
                                onclick: "window.wasdMode()"
                            }), e.newLine(), e.add("Weapon Grinder: "), e.checkBox({
                                id: "weaponGrind",
                                class: "checkB",
                                onclick: "window.startGrind()"
                            }), e.newLine(2), c.addDiv({
                                style: "font-size: 20px; color: #99ee99;",
                                appendID: "menuMain"
                            }, (e => {
                                e.add("Developing Settings:")
                            })), e.add("New Healing Beta:"), e.checkBox({
                                id: "healingBeta",
                                class: "checkB",
                                checked: !0
                            }), e.newLine()
                        })), c.addDiv({
                            id: "menuConfig",
                            class: "menuC",
                            appendID: "menuHeadLine"
                        }, (e => {
                            e.add("AutoPlacer Placement Tick: "), e.text({
                                id: "autoPlaceTick",
                                class: "customText",
                                value: "2",
                                size: "2em",
                                maxLength: "1"
                            }), e.newLine(), e.add("Configs: "), e.selectMenu({
                                id: "configsChanger",
                                class: "Cselect",
                                menu: l
                            }), e.newLine(), e.add("InstaKill Type: "), e.select({
                                id: "instaType",
                                class: "Cselect",
                                option: {
                                    OneShot: {
                                        id: "oneShot",
                                        selected: !0
                                    },
                                    Spammer: {
                                        id: "spammer"
                                    }
                                }
                            }), e.newLine(), e.add("AntiBull Type: "), e.select({
                                id: "antiBullType",
                                class: "Cselect",
                                option: {
                                    "Disable AntiBull": {
                                        id: "noab",
                                        selected: !0
                                    },
                                    "When Reloaded": {
                                        id: "abreload"
                                    },
                                    "Primary Reloaded": {
                                        id: "abalway"
                                    }
                                }
                            }), e.newLine(), e.add("Backup Nobull Insta: "), e.checkBox({
                                id: "backupNobull",
                                class: "checkB",
                                checked: !0
                            }), e.newLine(), e.add("Turret Gear Combat Assistance: "), e.checkBox({
                                id: "turretCombat",
                                class: "checkB",
                                checked: !0
                            }), e.newLine(), e.add("Safe AntiSpikeTick: "), e.checkBox({
                                id: "safeAntiSpikeTick",
                                class: "checkB",
                                checked: !0
                            }), e.newLine()
                        })), c.addDiv({
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
                            }), e.newLine(), e.button({
                                class: "menuB",
                                innerHTML: "Connect FBots",
                                onclick: "window.connectFillBots()"
                            }), e.button({
                                class: "menuB",
                                innerHTML: "Disconnect FBots",
                                onclick: "window.destroyFillBots()"
                            }), e.newLine(), e.button({
                                class: "menuB",
                                innerHTML: "Reset Break Objects",
                                onclick: "window.resBuild()"
                            }), e.newLine(), e.add("Break Objects Range: "), e.text({
                                id: "breakRange",
                                class: "customText",
                                value: "700",
                                size: "3em",
                                maxLength: "4"
                            }), e.newLine(), e.add("Predict Movement Type: "), e.select({
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
                                class: "checkB",
                                checked: !0
                            }), e.newLine(), e.add("Visuals: "), e.select({
                                id: "visualType",
                                class: "Cselect",
                                option: {
                                    "Old Shit": {
                                        id: "ueh1"
                                    },
                                    "New shit": {
                                        id: "ueh2",
                                        selected: !0
                                    }
                                }
                            }), e.newLine(2), e.button({
                                class: "menuB",
                                innerHTML: "Toggle Fbots Circle",
                                onclick: "window.toggleBotsCircle()"
                            }), e.newLine(), e.add("Circle Rad: "), e.text({
                                id: "circleRad",
                                class: "customText",
                                value: "200",
                                size: "3em",
                                maxLength: "4"
                            }), e.newLine(), e.add("Rad Speed: "), e.text({
                                id: "radSpeed",
                                class: "customText",
                                value: "0.1",
                                size: "2em",
                                maxLength: "3"
                            }), e.newLine(2), e.add("Cross World: "), e.checkBox({
                                id: "funni",
                                class: "checkB"
                            }), e.newLine(), e.button({
                                class: "menuB",
                                innerHTML: "Toggle Another Visual",
                                onclick: "window.toggleVisual()"
                            }), e.newLine()
                        }))
                    }));
                    let u = document.createElement("div");
                    u.id = "menuChatDiv", document.body.appendChild(u), c.set("menuChatDiv"), c.setStyle("\n            position: absolute;\n            display: none;\n            left: 0px;\n            top: 0px;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.65);\n            "), c.resetHTML(), c.setCSS('\n            .chDiv{\n                color: #fff;\n                padding: 5px;\n                width: 340px;\n                height: 280px;\n                background-color: rgba(0, 0, 0, 0.35);\n            }\n            .chMainDiv{\n                font-family: "Ubuntu";\n                font-size: 12px;\n                max-height: 235px;\n                overflow-y: scroll;\n                -webkit-touch-callout: none;\n                -webkit-user-select: none;\n                -khtml-user-select: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;\n            }\n            .chMainBox{\n                position: absolute;\n                left: 5px;\n                bottom: 10px;\n                width: 335px;\n                height: 30px;\n                background-color: rgb(128, 128, 128, 0.35);\n                -webkit-border-radius: 4px;\n                -moz-border-radius: 4px;\n                border-radius: 4px;\n                color: #fff;\n                font-family: "Ubuntu";\n                font-size: 12px;\n                border: none;\n                outline: none;\n            }\n            '), c.startDiv({
                        id: "mChDiv",
                        class: "chDiv"
                    }, (e => {
                        c.addDiv({
                            id: "mChMain",
                            class: "chMainDiv",
                            appendID: "mChDiv"
                        }, (e => {})), e.text({
                            id: "mChBox",
                            class: "chMainBox",
                            placeHolder: 'To chat click here or press "Enter" key'
                        })
                    }));
                    let p = getEl("mChMain"),
                        m = getEl("mChBox"),
                        f = !1,
                        g = 0;

                    function y(e, t, i, a) {
                        c.set("menuChatDiv"), i = i || "white";
                        let n = new Date,
                            s = (n.getMinutes(), n.getHours(), "");
                        e && (s += "" + ((a ? "" : " - ") + e)), t && (s += (e ? ": " : a ? "" : " - ") + t + "\n"), c.addDiv({
                            id: "menuChDisp" + g,
                            style: `color: ${i}`,
                            appendID: "mChMain"
                        }, (e => {
                            e.add(s)
                        })), p.scrollTop = p.scrollHeight, g++
                    }

                    function w() {
                        p.innerHTML = "", g = 0, y(null, "Chat '/help' for a list of chat commands.", "white", 1)
                    }
                    m.value = "", m.addEventListener("focus", (() => {
                        f = !0
                    })), m.addEventListener("blur", (() => {
                        f = !1
                    })), w();
                    let k = 0,
                        x = ["menuMain", "menuConfig", "menuOther"];
                    window.changeMenu = function() {
                        getEl(x[k % x.length]).style.display = "none", k++, getEl(x[k % x.length]).style.display = "block"
                    };
                    let b = document.createElement("div");
                    b.id = "status", getEl("gameUI").appendChild(b), c.set("status"), c.setStyle("\n            display: block;\n            position: absolute;\n            color: #ddd;\n            font: 15px Hammersmith One;\n            bottom: 215px;\n            left: 20px;\n            "), c.resetHTML(), c.setCSS("\n            .sizing {\n                font-size: 15px;\n            }\n            .mod {\n                font-size: 15px;\n                display: inline-block;\n            }\n            "), c.startDiv({
                        id: "uehmod",
                        class: "sizing"
                    }, (e => {
                        e.add("Ping: "), c.addDiv({
                            id: "pingFps",
                            class: "mod",
                            appendID: "uehmod"
                        }, (e => {
                            e.add("None")
                        })), e.newLine(), e.add("Packet: "), c.addDiv({
                            id: "packetStatus",
                            class: "mod",
                            appendID: "uehmod"
                        }, (e => {
                            e.add("None")
                        }))
                    }));
                    let v, T, S, I = !1,
                        M = !1,
                        D = 0,
                        P = {
                            sec: !1
                        },
                        A = {
                            tick: 0,
                            tickQueue: [],
                            tickBase: function(e, t) {
                                this.tickQueue[this.tick + t] ? this.tickQueue[this.tick + t].push(e) : this.tickQueue[this.tick + t] = [e]
                            },
                            tickRate: 1e3 / e.serverUpdateRate,
                            tickSpeed: 0,
                            lastTick: performance.now()
                        },
                        O = !1,
                        C = {
                            last: 0,
                            time: 0,
                            ltime: 0
                        },
                        _ = ["cc", 1, "__proto__"];

                    function E(e) {
                        let t = Array.prototype.slice.call(arguments, 1),
                            i = window.msgpack.encode([e, t]);
                        v.send(i)
                    }
                    WebSocket.prototype.nsend = WebSocket.prototype.send, WebSocket.prototype.send = function(e) {
                        if (v || (v = this, v.addEventListener("message", (function(e) {
                                ! function(e) {
                                    let t = new Uint8Array(e.data),
                                        i = window.msgpack.decode(t),
                                        a = i[0];
                                    t = i[1];
                                    let n = {
                                        A: Ai,
                                        C: Oi,
                                        D: Ci,
                                        E: _i,
                                        a: Ui,
                                        G: Yi,
                                        H: Ki,
                                        I: Xi,
                                        J: Ji,
                                        K: Qi,
                                        L: Zi,
                                        M: ea,
                                        N: ta,
                                        O: Ei,
                                        P: Bi,
                                        Q: Fi,
                                        R: ji,
                                        S: Ri,
                                        T: Hi,
                                        U: Li,
                                        V: ia,
                                        X: aa,
                                        2: na,
                                        3: sa,
                                        4: oa,
                                        5: la,
                                        6: ra,
                                        7: ca,
                                        8: da,
                                        9: Xa
                                    };
                                    "io-init" == a ? T = t[0] : n[a] && n[a].apply(void 0, t)
                                }(e)
                            })), v.addEventListener("close", (e => {
                                4001 == e.code && window.location.reload()
                            }))), v == this) {
                            O = !1;
                            let t = new Uint8Array(e),
                                i = window.msgpack.decode(t),
                                a = i[0];
                            if (t = i[1], "6" == a) {
                                if (t[0]) {
                                    let e;
                                    [].forEach((i => {
                                        if (t[0].indexOf(i) > -1) {
                                            e = "";
                                            for (let t = 0; t < i.length; ++t) 1 == t && (e += String.fromCharCode(0)), e += i[t];
                                            let a = new RegExp(i, "g");
                                            t[0] = t[0].replace(a, e)
                                        }
                                    })), t[0] = t[0].slice(0, 30)
                                }
                            } else "L" == a ? (t[0] = t[0] + String.fromCharCode(0).repeat(7), t[0] = t[0].slice(0, 7)) : "M" == a ? (t[0].name = "" == t[0].name ? "unknown" : t[0].name, t[0].moofoll = !0, t[0].skin = 10 == t[0].skin ? "__proto__" : t[0].skin, _ = [t[0].name, t[0].moofoll, t[0].skin]) : "D" == a ? Z.lastDir == t[0] || [null, void 0].includes(t[0]) ? O = !0 : Z.lastDir = t[0] : "d" == a ? t[2] ? [null, void 0].includes(t[1]) || (Z.lastDir = t[1]) : O = !0 : "K" == a ? t[1] || (O = !0) : "14" == a ? (Et.wait = !Et.wait, O = !0) : "9" == a && (t[1] ? (R.moveDir == t[0] && (O = !0), R.moveDir = t[0]) : O = !0);
                            if (!O) {
                                let e = window.msgpack.encode([a, t]);
                                this.nsend(e), P.sec || (P.sec = !0, setTimeout((() => {
                                    P.sec = !1, D = 0
                                }), 1e3)), D++
                            }
                        } else this.nsend(e)
                    }, window.leave = function() {
                        ! function(e) {
                            let t = Array.prototype.slice.call(arguments, 1),
                                i = window.msgpack.encode([e, t]);
                            v.nsend(i)
                        }("kys", {
                            "frvr is so bad": !0,
                            "sidney is too good": !0,
                            "dev are too weak": !0
                        })
                    };
                    let B = {
                        send: E
                    };
                    Math.lerpAngle = function(e, t, i) {
                        Math.abs(t - e) > Math.PI && (e > t ? t += 2 * Math.PI : e += 2 * Math.PI);
                        let a = t + (e - t) * i;
                        return a >= 0 && a <= 2 * Math.PI ? a : a % (2 * Math.PI)
                    }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, i, a, n) {
                        return i < 2 * n && (n = i / 2), a < 2 * n && (n = a / 2), n < 0 && (n = 0), this.beginPath(), this.moveTo(e + n, t), this.arcTo(e + i, t, e + i, t + a, n), this.arcTo(e + i, t + a, e, t + a, n), this.arcTo(e, t + a, e, t, n), this.arcTo(e, t, e + i, t, n), this.closePath(), this
                    };
                    let R, H, L, F = [],
                        j = [],
                        z = [],
                        G = [],
                        W = [],
                        q = [],
                        V = [],
                        N = [],
                        U = [],
                        Y = [],
                        K = [],
                        X = [],
                        J = [],
                        Q = [],
                        Z = {
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

                    function ee(e, t) {
                        return e.find((e => e.id == t))
                    }

                    function te(e, t) {
                        return e.find((e => e.sid == t))
                    }

                    function ie(e) {
                        return te(G, e)
                    }

                    function ae(e) {
                        return te(z, e)
                    }

                    function ne(e) {
                        return te(V, e)
                    }
                    getEl("gameName").innerText = "hacker";
                    getEl("adCard"), getEl("promoImgHolder");
                    getEl("chatButton").remove();
                    let se = getEl("gameCanvas"),
                        oe = se.getContext("2d"),
                        le = getEl("mapDisplay"),
                        re = le.getContext("2d");
                    le.width = 300, le.height = 300;
                    let ce = getEl("storeMenu"),
                        de = (getEl("storeHolder"), getEl("upgradeHolder")),
                        he = getEl("upgradeCounter"),
                        ue = getEl("chatBox");
                    ue.autocomplete = "off", ue.style.textAlign = "center", ue.style.width = "18em";
                    let pe, me, fe, ge, ye, we, ke, xe, be = getEl("chatHolder"),
                        ve = getEl("actionBar"),
                        Te = (getEl("leaderboardData"), getEl("itemInfoHolder")),
                        Se = (getEl("menuCardHolder"), getEl("mainMenu"), getEl("diedText"), e.maxScreenWidth),
                        Ie = e.maxScreenHeight,
                        Me = performance.now(),
                        De = 0,
                        Pe = 0,
                        Ae = getEl("allianceMenu"),
                        Oe = 1,
                        Ce = 0,
                        _e = "#525252",
                        Ee = "#3d3f42",
                        Be = 5.5,
                        Re = !1,
                        He = !0,
                        Le = {},
                        Fe = {
                            87: [0, -1],
                            38: [0, -1],
                            83: [0, 1],
                            40: [0, 1],
                            65: [-1, 0],
                            37: [-1, 0],
                            68: [1, 0],
                            39: [1, 0]
                        },
                        je = 0,
                        ze = !1,
                        Ge = {},
                        We = {
                            placeSpawnPads: 0
                        },
                        qe = [],
                        Ve = !0;
                    window.onblur = function() {
                        Ve = !1
                    }, window.onfocus = function() {
                        Ve = !0, R && R.alive
                    };
                    let Ne = [];
                    class $e {
                        constructor() {
                            this.init = function(e, t, i, a, n, s, o) {
                                this.x = e, this.y = t, this.color = o, this.scale = i, this.startScale = this.scale, this.maxScale = 1.5 * i, this.scaleSpeed = .7, this.speed = a, this.life = n, this.text = s, this.acc = 1, this.alpha = 0, this.maxLife = n, this.ranX = Tt.randFloat(-1, 1)
                            }, this.update = function(t) {
                                this.life && (this.life -= t, e.anotherVisual ? (this.y -= this.speed * t * this.acc, this.acc -= t / (this.maxLife / 2.5), this.life <= 200 ? this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - t / 300)) : this.alpha < 1 && (this.alpha = Math.min(1, this.alpha + t / 100)), this.x += this.ranX) : this.y -= this.speed * t, this.scale += this.scaleSpeed * t, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
                            }, this.render = function(t, i, a) {
                                t.lineWidth = 10, t.fillStyle = this.color, t.font = this.scale + "px " + (e.anotherVisual ? "Ubuntu" : "Hammersmith One"), e.anotherVisual && (t.globalAlpha = this.alpha, t.strokeStyle = Ee, t.strokeText(this.text, this.x - i, this.y - a)), t.fillText(this.text, this.x - i, this.y - a), t.globalAlpha = 1
                            }
                        }
                    }
                    class Ue {
                        constructor(e, t) {
                            this.x = e, this.y = t, this.damage = 10, this.health = 10, this.maxHealth = this.health, this.active = !1, this.alive = !1, this.timer = 1500, this.time = 0, this.damaged = 0, this.alpha = 1, this.scale = 9, this.visScale = this.scale
                        }
                    }
                    class Ye {
                        constructor(e, t, i, a) {
                            this.x = e, this.y = t, this.alpha = 0, this.active = !0, this.alive = !1, this.chat = i, this.owner = a
                        }
                    }
                    class Ke {
                        constructor(e, t, i, a, n, s, o, l, r) {
                            this.x = e, this.y = t, this.lastDir = i, this.dir = i + Math.PI, this.buildIndex = a, this.weaponIndex = n, this.weaponVariant = s, this.skinColor = o, this.scale = l, this.visScale = 0, this.name = r, this.alpha = 1, this.active = !0, this.animate = function(e) {
                                let t = Tt.getAngleDist(this.lastDir, this.dir);
                                t > .01 ? this.dir += t / 20 : this.dir = this.lastDir, this.visScale < this.scale && (this.visScale += e / (this.scale / 2), this.visScale >= this.scale && (this.visScale = this.scale)), this.alpha -= e / 3e4, this.alpha <= 0 && (this.alpha = 0, this.active = !1)
                            }
                        }
                    }
                    class Xe {
                        constructor(e, t, i, a, n, s, o, l, r, c, d, h, u, p) {
                            this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.latestSkin = 0, this.oldSkinIndex = 0, this.skinIndex = 0, this.latestTail = 0, this.oldTailIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.lastHit = 0, this.tails = {};
                            for (let e = 0; e < d.length; ++e) d[e].price <= 0 && (this.tails[d[e].id] = 1);
                            this.skins = {};
                            for (let e = 0; e < c.length; ++e) c[e].price <= 0 && (this.skins[c[e].id] = 1);
                            this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.dist2 = 0, this.aim2 = 0, this.maxSpeed = 1, this.chat = {
                                message: null,
                                count: 0
                            }, this.backupNobull = !0, this.circle = !1, this.circleRad = 200, this.circleRadSpd = .1, this.cAngle = 0, this.spawn = function(e) {
                                this.attacked = !1, this.death = !1, this.spinDir = 0, this.sync = !1, this.antiBull = 0, this.bullTimer = 0, this.poisonTimer = 0, this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.gatherIndex = 0, this.shooting = {}, this.shootIndex = 9, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.weaponCode = 0, this.weaponVariant = 0, this.primaryIndex = void 0, this.secondaryIndex = void 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.oldXY = {
                                    x: 0,
                                    y: 0
                                }, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.oldHealth = this.maxHealth, this.damaged = 0, this.scale = i.playerScale, this.speed = i.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {
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
                                for (let t = 0; t < i.resourceTypes.length; ++t) this[i.resourceTypes[t]] = e ? 100 : 0
                            }, this.getItemType = function(e) {
                                let t = this.items.findIndex((t => t == e));
                                return -1 != t ? t : r.checkItem.index(e, this.items)
                            }, this.setData = function(e) {
                                this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
                            }, this.updateTimer = function() {
                                this.bullTimer -= 1, this.bullTimer <= 0 && (this.setBullTick = !1, this.bullTick = A.tick - 1, this.bullTimer = i.serverUpdateRate), this.poisonTimer -= 1, this.poisonTimer <= 0 && (this.setPoisonTick = !1, this.poisonTick = A.tick - 1, this.poisonTimer = i.serverUpdateRate)
                            }, this.update = function(e) {
                                if (this.sid == H && (this.circleRad = parseInt(getEl("circleRad").value) || 0, this.circleRadSpd = parseFloat(getEl("radSpeed").value) || 0, this.cAngle += this.circleRadSpd), this.active) {
                                    let e = {
                                            skin: ee(c, this.skinIndex),
                                            tail: ee(d, this.tailIndex)
                                        },
                                        t = (this.buildIndex >= 0 ? .5 : 1) * (r.weapons[this.weaponIndex].spdMult || 1) * (e.skin && e.skin.spdMult || 1) * (e.tail && e.tail.spdMult || 1) * (this.y <= i.snowBiomeTop ? e.skin && e.skin.coldM ? 1 : i.snowSpeed : 1) * this.slowMult;
                                    this.maxSpeed = t
                                }
                            };
                            let m = 0,
                                f = 0;
                            this.animate = function(e) {
                                this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, m = 0, f = 0) : 0 == f ? (m += e / (this.animSpeed * i.hitReturnRatio), this.dirPlus = a.lerp(0, this.targetAngle, Math.min(1, m)), m >= 1 && (m = 1, f = 1)) : (m -= e / (this.animSpeed * (1 - i.hitReturnRatio)), this.dirPlus = a.lerp(0, this.targetAngle, Math.max(0, m))))
                            }, this.startAnim = function(e, t) {
                                this.animTime = this.animSpeed = r.weapons[t].speed, this.targetAngle = e ? -i.hitAngle : -Math.PI, m = 0, f = 0
                            }, this.canSee = function(e) {
                                if (!e) return !1;
                                let t = Math.abs(e.x - this.x) - e.scale,
                                    a = Math.abs(e.y - this.y) - e.scale;
                                return t <= i.maxScreenWidth / 2 * 1.3 && a <= i.maxScreenHeight / 2 * 1.3
                            }, this.judgeShame = function() {
                                if (this.oldHealth < this.health) {
                                    if (this.hitTime) {
                                        let e = A.tick - this.hitTime;
                                        this.lastHit = A.tick, this.hitTime = 0, e < 2 ? this.shameCount++ : this.shameCount = Math.max(0, this.shameCount - 2)
                                    }
                                } else this.oldHealth > this.health && (this.hitTime = A.tick)
                            }, this.addShameTimer = function() {
                                this.shameCount = 0, this.shameTimer = 30;
                                let e = setInterval((() => {
                                    this.shameTimer--, this.shameTimer <= 0 && clearInterval(e)
                                }), 1e3)
                            }, this.isTeam = function(e) {
                                return this == e || this.team && this.team == e.team
                            }, this.findAllianceBySid = function(e) {
                                return this.team ? q.find((t => t === e)) : null
                            }, this.checkCanInsta = function(e) {
                                let t = 0;
                                if (this.alive && ze) {
                                    let a = {
                                            weapon: this.weapons[0],
                                            variant: this.primaryVariant,
                                            dmg: null == this.weapons[0] ? 0 : r.weapons[this.weapons[0]].dmg
                                        },
                                        n = {
                                            weapon: this.weapons[1],
                                            variant: this.secondaryVariant,
                                            dmg: null == this.weapons[1] ? 0 : r.weapons[this.weapons[1]].Pdmg
                                        },
                                        s = this.skins[7] && !e ? 1.5 : 1,
                                        o = null != a.variant ? i.weaponVariants[a.variant].val : 1;
                                    return null != a.weapon && 0 == this.reloads[a.weapon] && (t += a.dmg * o * s), null != n.weapon && 0 == this.reloads[n.weapon] && (t += n.dmg), this.skins[53] && this.reloads[53] <= (10 == R.weapons[1] ? 0 : A.tickRate) && 22 != Q.skinIndex && (t += 25), t *= 6 == Q.skinIndex ? .75 : 1, t
                                }
                                return 0
                            }, this.manageReload = function() {
                                if (this.shooting[53] ? (this.shooting[53] = 0, this.reloads[53] = 2500 - A.tickRate) : this.reloads[53] > 0 && (this.reloads[53] = Math.max(0, this.reloads[53] - A.tickRate)), this.gathering || this.shooting[1]) this.gathering && (this.gathering = 0, this.reloads[this.gatherIndex] = r.weapons[this.gatherIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0), this.shooting[1] && (this.shooting[1] = 0, this.reloads[this.shootIndex] = r.weapons[this.shootIndex].speed * (20 == this.skinIndex ? .78 : 1), this.attacked = !0);
                                else if (this.attacked = !1, this.buildIndex < 0 && this.reloads[this.weaponIndex] > 0) {
                                    if (this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - A.tickRate), this == R && getEl("weaponGrind").checked)
                                        for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) rt(R.getItemType(22), e);
                                    0 == this.reloads[this.primaryIndex] && 0 == this.reloads[this.weaponIndex] && (this.antiBull++, A.tickBase((() => {
                                        this.antiBull = 0
                                    }), 1))
                                }
                            }, this.addDamageThreat = function(e) {
                                let t = {
                                    weapon: this.primaryIndex,
                                    variant: this.primaryVariant
                                };
                                t.dmg = null == t.weapon ? 45 : r.weapons[t.weapon].dmg;
                                let a = {
                                    weapon: this.secondaryIndex,
                                    variant: this.secondaryVariant
                                };
                                a.dmg = null == a.weapon ? 50 : r.weapons[a.weapon].Pdmg;
                                let n = null != t.variant ? i.weaponVariants[t.variant].val : 1.18,
                                    s = null != a.variant ? [9, 12, 13, 15].includes(a.weapon) ? 1 : i.weaponVariants[a.variant].val : 1.18;
                                null != t.weapon && 0 != this.reloads[t.weapon] || (this.damageThreat += t.dmg * n * 1.5), null != a.weapon && 0 != this.reloads[a.weapon] || (this.damageThreat += a.dmg * s), this.reloads[53] <= A.tickRate && (this.damageThreat += 25), this.damageThreat *= 6 == e.skinIndex ? .75 : 1, this.isTeam(e) || this.dist2 <= 300 && (e.damageThreat += this.damageThreat)
                            }
                        }
                    }

                    function Je(e, t, i, a) {
                        return Math.sqrt(Math.pow(i - e, 2) + Math.pow(a - t, 2))
                    }

                    function Qe(e, t, i) {
                        let a = null,
                            n = 1 / 0;
                        return i.forEach((i => {
                            {
                                const s = Je(e, t, i.x, i.y);
                                s < n && (n = s, a = i)
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
                    }], window.activeObjects = [{
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

                    function Ze(e, t) {
                        const i = t.x - e.x,
                            a = t.y - e.y;
                        return (Math.atan2(a, i) + 2 * Math.PI) % (2 * Math.PI)
                    }

                    function et(e) {
                        E("6", e)
                    }

                    function tt(e) {
                        R.reloads[e] = 0, E("H", e)
                    }

                    function it(e, t) {
                        let i = R.skins[6] ? 6 : 0;
                        if (R.alive && ze)
                            if (0 == t)
                                if (R.skins[e]) R.latestSkin != e && E("c", 0, e, 0);
                                else if (l.autoBuyEquip) {
                            let t = ee(Dt, e);
                            t && R.points >= t.price ? (E("c", 1, e, 0), E("c", 0, e, 0)) : R.latestSkin != i && E("c", 0, i, 0)
                        } else R.latestSkin != i && E("c", 0, i, 0);
                        else if (1 == t) {
                            if (M && 11 != e && 0 != e) return void(0 != R.latestTail && E("c", 0, 0, 1));
                            if (R.tails[e]) R.latestTail != e && E("c", 0, e, 1);
                            else if (l.autoBuyEquip) {
                                let t = ee(Pt, e);
                                t && R.points >= t.price ? (E("c", 1, e, 1), E("c", 0, e, 1)) : 0 != R.latestTail && E("c", 0, 0, 1)
                            } else 0 != R.latestTail && E("c", 0, 0, 1)
                        }
                    }

                    function at(e, t) {
                        E("z", e, t)
                    }

                    function nt(e, t) {
                        t || (R.weaponCode = e), E("z", e, 1)
                    }

                    function st() {
                        E("K", 1, 1)
                    }
                    let ot = [];

                    function lt(t, i, a) {
                        try {
                            if (null == t) return;
                            let n = St.list[R.items[t]],
                                s = R.scale + n.scale + (n.placeOffset || 0),
                                o = R.x2 + s * Math.cos(i),
                                l = R.y2 + s * Math.sin(i);
                            (R.alive && ze && null == R.itemCounts[n.group.id] || R.itemCounts[n.group.id] < (e.isSandbox ? 299 : n.group.limit ? n.group.limit : 99)) && (at(R.items[t]), function(e, t) {
                                E("F", e, t, 1)
                            }(1, i), nt(R.weaponCode, 1), (a && getEl("placeVis").checked || gt) && (Ne.push({
                                x: o,
                                y: l,
                                name: n.name,
                                scale: n.scale,
                                dir: i
                            }), A.tickBase((() => {
                                Ne.shift()
                            }), 1)))
                        } catch (e) {}
                    }

                    function rt(e, t) {
                        try {
                            if (null == e) return;
                            let i = St.list[R.items[e]],
                                a = R.scale + i.scale + (i.placeOffset || 0),
                                n = R.x2 + a * Math.cos(t),
                                s = R.y2 + a * Math.sin(t);
                            It.checkItemLocation(n, s, i.scale, .6, i.id, !1, R) && lt(e, t, 1)
                        } catch (e) {}
                    }

                    function ct() {
                        return 6 == R.latestSkin ? .75 : 1
                    }

                    function dt(e) {
                        return X.filter((e => ({
                            three: e.attacked
                        }.three)))
                    }

                    function ht() {
                        for (let e = 0; e < (100 == R.health ? 0 : 45 != R.skinIndex && 56 != R.skinIndex ? Math.ceil((100 - R.health) / St.list[R.items[0]].healing) : 0); e++) lt(0, fi())
                    }

                    function ut(e) {
                        Z.antiSync = !0;
                        let t = setInterval((() => {
                            R.shameCount < 5 && lt(0, fi())
                        }), 75);
                        setTimeout((() => {
                            clearInterval(t), setTimeout((() => {
                                Z.antiSync = !1
                            }), A.tickRate)
                        }), A.tickRate)
                    }

                    function pt(t, i) {
                        if (R.y2 >= e.mapScale / 2 - e.riverWidth / 2 && R.y2 <= e.mapScale / 2 + e.riverWidth / 2) {
                            if (i) return 31;
                            it(31, 0)
                        } else if (R.y2 <= e.snowBiomeTop) {
                            if (i) return t && null == _things.player.moveDir && !isMovingAuto ? 22 : 15;
                            it(t && null == _things.player.moveDir && !isMovingAuto ? 22 : 15, 0)
                        } else {
                            if (i) return t && null == _things.player.moveDir && !isMovingAuto ? 22 : 12;
                            it(t && null == _things.player.moveDir && !isMovingAuto ? 22 : 12, 0)
                        }
                        if (i) return 0
                    }

                    function mt(e, t) {
                        try {
                            return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x))
                        } catch (e) {
                            return 1 / 0
                        }
                    }

                    function ft() {
                        let e = !1;
                        if (V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 15)).sort((function(e, t) {
                                return Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)
                            }))[0] && (e = !0), l.autoOneFrame) {
                            let t = window.pingTime,
                                i = t > 140 ? 230 : t > 110 ? 210 : t > 85 ? 190 : 170;
                            Q.dist2 > i && Q.dist2 <= 245 && !_t.inTrap && 0 == R.reloads[R.weapons[0]] && 0 == R.reloads[53] && 5 == R.weapons[0] && (!e && 6 != Q.skinIndex || e) && (y("Dev", "Auto One Tick", "lightblue"), B.send("6", Q.dist2.toString()), E("9", void 0, 1), A.tickBase((() => {
                                E("9", Q.aim2, 1)
                            }), 1), Z.autoAim = !0, it(53, 0), nt(R.weapons[0]), A.tickBase((() => {
                                it(7, 0), st(), A.tickBase((() => {
                                    nt(R.weapons[0]), st(), Z.autoAim = !1
                                }), 1)
                            }), 1))
                        }
                    }
                    let gt = !1;
                    let yt = [];
                    let wt, kt, xt, bt = [],
                        vt = !1,
                        Tt = new class {
                            constructor() {
                                let e = Math.abs,
                                    t = (Math.cos, Math.sin, Math.pow, Math.sqrt),
                                    i = Math.atan2,
                                    a = Math.PI,
                                    n = this;
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
                                }, this.lerp = function(e, t, i) {
                                    return e + (t - e) * i
                                }, this.decel = function(e, t) {
                                    return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
                                }, this.getDistance = function(e, i, a, n) {
                                    return t((a -= e) * a + (n -= i) * n)
                                }, this.getDist = function(e, i, a, n) {
                                    let s = 0 == a ? e.x : 1 == a ? e.x1 : 2 == a ? e.x2 : 3 == a && e.x3,
                                        o = 0 == a ? e.y : 1 == a ? e.y1 : 2 == a ? e.y2 : 3 == a && e.y3,
                                        l = {
                                            x: 0 == n ? i.x : 1 == n ? i.x1 : 2 == n ? i.x2 : 3 == n && i.x3,
                                            y: 0 == n ? i.y : 1 == n ? i.y1 : 2 == n ? i.y2 : 3 == n && i.y3
                                        };
                                    return t((l.x -= s) * l.x + (l.y -= o) * l.y)
                                }, this.getDirection = function(e, t, a, n) {
                                    return i(t - n, e - a)
                                }, this.getDirect = function(e, t, a, n) {
                                    let s = 0 == a ? e.x : 1 == a ? e.x1 : 2 == a ? e.x2 : 3 == a && e.x3,
                                        o = 0 == a ? e.y : 1 == a ? e.y1 : 2 == a ? e.y2 : 3 == a && e.y3,
                                        l = 0 == n ? t.x : 1 == n ? t.x1 : 2 == n ? t.x2 : 3 == n && t.x3,
                                        r = 0 == n ? t.y : 1 == n ? t.y1 : 2 == n ? t.y2 : 3 == n && t.y3;
                                    return i(o - r, s - l)
                                }, this.getAngleDist = function(t, i) {
                                    let n = e(i - t) % (2 * a);
                                    return n > a ? 2 * a - n : n
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
                                }, this.lineInRect = function(e, t, i, a, n, s, o, l) {
                                    let r = n,
                                        c = o;
                                    if (n > o && (r = o, c = n), c > i && (c = i), r < e && (r = e), r > c) return !1;
                                    let d = s,
                                        h = l,
                                        u = o - n;
                                    if (Math.abs(u) > 1e-7) {
                                        let e = (l - s) / u,
                                            t = s - e * n;
                                        d = e * r + t, h = e * c + t
                                    }
                                    if (d > h) {
                                        let e = h;
                                        h = d, d = e
                                    }
                                    return h > a && (h = a), d < t && (d = t), !(d > h)
                                }, this.containsPoint = function(e, t, i) {
                                    let a = e.getBoundingClientRect(),
                                        n = a.left + window.scrollX,
                                        s = a.top + window.scrollY,
                                        o = a.width,
                                        l = a.height;
                                    return t > n && t < n + o && (i > s && i < s + l)
                                }, this.mousifyTouchEvent = function(e) {
                                    let t = e.changedTouches[0];
                                    e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
                                }, this.hookTouchEvents = function(e, t) {
                                    let i = !t,
                                        a = !1,
                                        s = !1;

                                    function o(t) {
                                        n.mousifyTouchEvent(t), window.setUsingTouch(!0), i && (t.preventDefault(), t.stopPropagation()), a && (e.onclick && e.onclick(t), e.onmouseout && e.onmouseout(t), a = !1)
                                    }
                                    e.addEventListener("touchstart", this.checkTrusted((function(t) {
                                        n.mousifyTouchEvent(t), window.setUsingTouch(!0), i && (t.preventDefault(), t.stopPropagation());
                                        e.onmouseover && e.onmouseover(t);
                                        a = !0
                                    })), s), e.addEventListener("touchmove", this.checkTrusted((function(t) {
                                        n.mousifyTouchEvent(t), window.setUsingTouch(!0), i && (t.preventDefault(), t.stopPropagation());
                                        n.containsPoint(e, t.pageX, t.pageY) ? a || (e.onmouseover && e.onmouseover(t), a = !0) : a && (e.onmouseout && e.onmouseout(t), a = !1)
                                    })), s), e.addEventListener("touchend", this.checkTrusted(o), s), e.addEventListener("touchcancel", this.checkTrusted(o), s), e.addEventListener("touchleave", this.checkTrusted(o), s)
                                }, this.removeAllChildren = function(e) {
                                    for (; e.hasChildNodes();) e.removeChild(e.lastChild)
                                }, this.generateElement = function(e) {
                                    let t = document.createElement(e.tag || "div");

                                    function i(i, a) {
                                        e[i] && (t[a] = e[i])
                                    }
                                    i("text", "textContent"), i("html", "innerHTML"), i("class", "className");
                                    for (let i in e) {
                                        switch (i) {
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
                                        t[i] = e[i]
                                    }
                                    if (t.onclick && (t.onclick = this.checkTrusted(t.onclick)), t.onmouseover && (t.onmouseover = this.checkTrusted(t.onmouseover)), t.onmouseout && (t.onmouseout = this.checkTrusted(t.onmouseout)), e.style && (t.style.cssText = e.style), e.hookTouch && this.hookTouchEvents(t), e.parent && e.parent.appendChild(t), e.children)
                                        for (let i = 0; i < e.children.length; i++) t.appendChild(e.children[i]);
                                    return t
                                }, this.checkTrusted = function(e) {
                                    return function(t) {
                                        t && t instanceof Event && (!t || "boolean" != typeof t.isTrusted || t.isTrusted) && e(t)
                                    }
                                }, this.randomString = function(e) {
                                    let t = "",
                                        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                                    for (let a = 0; a < e; a++) t += i.charAt(Math.floor(62 * Math.random()));
                                    return t
                                }, this.countInArray = function(e, t) {
                                    let i = 0;
                                    for (let a = 0; a < e.length; a++) e[a] === t && i++;
                                    return i
                                }, this.hexToRgb = function(e) {
                                    return e.slice(1).match(/.{1,2}/g).map((e => parseInt(e, 16)))
                                }, this.getRgb = function(e, t, i) {
                                    return [e / 255, t / 255, i / 255].join(", ")
                                }
                            }
                        },
                        St = new class {
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
                                    placeOffset: -5,
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
                                    itemAID: 22
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
                        It = new class {
                            constructor(e, t, i, a, n, s) {
                                let o;
                                Math.floor, Math.abs, Math.cos, Math.sin, Math.pow, Math.sqrt;
                                this.ignoreAdd = !1, this.hitObj = [], this.disableObj = function(e) {
                                    e.active = !1, a.anotherVisual || (e.alive = !1)
                                }, this.add = function(i, a, n, s, l, r, c, d, h) {
                                    o = ne(i), o || (o = t.find((e => !e.active)), o || (o = new e(i), t.push(o))), d && (o.sid = i), o.init(a, n, s, l, r, c, h)
                                }, this.disableBySid = function(e) {
                                    let t = ne(e);
                                    t && this.disableObj(t)
                                }, this.removeAllItems = function(e, i) {
                                    t.filter((t => t.active && t.owner && t.owner.sid == e)).forEach((e => this.disableObj(e)))
                                }, this.checkItemLocation = function(e, n, s, o, l, r, c) {
                                    return !t.find((t => t.active && i.getDistance(e, n, t.x, t.y) < s + (t.blocker ? t.blocker : t.getScale(o, t.isItem)))) && !(!r && 18 != l && n >= a.mapScale / 2 - a.riverWidth / 2 && n <= a.mapScale / 2 + a.riverWidth / 2)
                                }, this.customCheckItemLocation = (e, t, i, a, n, s, o, l, r, c, d) => !r.find((n => n.active && n.x !== l.x && n.y !== l.y && n.id !== l.id && c.getDistance(e, t, n.x, n.y) < i + (n.blocker ? n.blocker : n.getScale(a, n.isItem)))) && !(!s && 18 != n && t >= d.mapScale / 2 - d.riverWidth / 2 && t <= d.mapScale / 2 + d.riverWidth / 2)
                            }
                        }(class {
                            constructor(t) {
                                this.sid = t, this.init = function(t, i, a, n, s, o, l) {
                                    o = o || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.alive = !0, this.doUpdate = o.doUpdate, this.x = t, this.y = i, e.anotherVisual ? this.dir = a + Math.PI : this.dir = a, this.lastDir = a, this.xWiggle = 0, this.yWiggle = 0, this.visScale = n, this.scale = n, this.type = s, this.id = o.id, this.owner = l, this.name = o.name, this.isItem = null != this.id, this.group = o.group, this.maxHealth = o.health, this.health = this.maxHealth, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = o.colDiv || 1, this.blocker = o.blocker, this.ignoreCollision = o.ignoreCollision, this.dontGather = o.dontGather, this.hideFromEnemy = o.hideFromEnemy, this.friction = o.friction, this.projDmg = o.projDmg, this.dmg = o.dmg, this.pDmg = o.pDmg, this.pps = o.pps, this.zIndex = o.zIndex || 0, this.turnSpeed = o.turnSpeed, this.req = o.req, this.trap = o.trap, this.healCol = o.healCol, this.teleport = o.teleport, this.boostSpeed = o.boostSpeed, this.projectile = o.projectile, this.shootRange = o.shootRange, this.shootRate = o.shootRate, this.shootCount = this.shootRate, this.spawnPoint = o.spawnPoint, this.onNear = 0, this.breakObj = !1, this.alpha = o.alpha || 1, this.maxAlpha = o.alpha || 1, this.damaged = 0
                                }, this.changeHealth = function(e, t) {
                                    return this.health += e, this.health <= 0
                                }, this.getScale = function(e, t) {
                                    return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
                                }, this.visibleToPlayer = function(e) {
                                    return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
                                }, this.update = function(t) {
                                    if (this.active)
                                        if (this.xWiggle && (this.xWiggle *= Math.pow(.99, t)), this.yWiggle && (this.yWiggle *= Math.pow(.99, t)), e.anotherVisual) {
                                            let e = Tt.getAngleDist(this.lastDir, this.dir);
                                            e > .01 ? this.dir += e / 5 : this.dir = this.lastDir
                                        } else this.turnSpeed && this.dmg && (this.dir += this.turnSpeed * t);
                                    else this.alive && (this.alpha -= t / (200 / this.maxAlpha), this.visScale += t / (this.scale / 2.5), this.alpha <= 0 && (this.alpha = 0, this.alive = !1))
                                }, this.isTeamObject = function(e) {
                                    return null == this.owner || (this.owner && e.sid == this.owner.sid || e.findAllianceBySid(this.owner.sid))
                                }
                            }
                        }, V, Tt, e),
                        Mt = new class {
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
                        Dt = Mt.hats,
                        Pt = Mt.accessories,
                        At = new class {
                            constructor(e, t, i, a, n, s, o, l, r) {
                                this.addProjectile = function(c, d, h, u, p, m, f, g, y, w) {
                                    let k, x = s.projectiles[m];
                                    for (let e = 0; e < t.length; ++e)
                                        if (!t[e].active) {
                                            k = t[e];
                                            break
                                        }
                                    return k || (k = new e(i, a, n, s, o, l, r), k.sid = t.length, t.push(k)), k.init(m, c, d, h, p, x.dmg, u, x.scale, f), k.ignoreObj = g, k.layer = y || x.layer, k.inWindow = w, k.src = x.src, k
                                }
                            }
                        }(class {
                            constructor(e, t, i, a, n, s, o) {
                                this.init = function(e, t, i, a, n, s, o, l, r) {
                                    this.active = !0, this.tickActive = !0, this.indx = e, this.x = t, this.y = i, this.x2 = t, this.y2 = i, this.dir = a, this.skipMov = !0, this.speed = n, this.dmg = s, this.scale = l, this.range = o, this.r2 = o, this.owner = r
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
                        }, U, G, z, It, St, e, Tt),
                        Ot = new class {
                            constructor(e, t, i, a, n, s, o, l, r) {
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
                                }], this.spawn = function(c, d, h, u) {
                                    let p = e.find((e => !e.active));
                                    return p || (p = new t(e.length, n, i, a, o, s, l, r), e.push(p)), p.init(c, d, h, u, this.aiTypes[u]), p
                                }
                            }
                        }(z, class {
                            constructor(e, t, i, a, n, s, o, l) {
                                this.sid = e, this.isAI = !0, this.nameIndex = n.randInt(0, s.cowNames.length - 1), this.init = function(e, t, i, a, n) {
                                    this.x = e, this.y = t, this.startX = n.fixedSpawn ? e : null, this.startY = n.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = i, this.dirPlus = 0, this.index = a, this.src = n.src, n.name && (this.name = n.name), this.weightM = n.weightM, this.speed = n.speed, this.killScore = n.killScore, this.turnSpeed = n.turnSpeed, this.scale = n.scale, this.maxHealth = n.health, this.leapForce = n.leapForce, this.health = this.maxHealth, this.chargePlayer = n.chargePlayer, this.viewRange = n.viewRange, this.drop = n.drop, this.dmg = n.dmg, this.hostile = n.hostile, this.dontRun = n.dontRun, this.hitRange = n.hitRange, this.hitDelay = n.hitDelay, this.hitScare = n.hitScare, this.spriteMlt = n.spriteMlt, this.nameScale = n.nameScale, this.colDmg = n.colDmg, this.noTrap = n.noTrap, this.spawnDelay = n.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
                                };
                                let r = 0,
                                    c = 0;
                                this.animate = function(e) {
                                    this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, r = 0, c = 0) : 0 == c ? (r += e / (this.animSpeed * s.hitReturnRatio), this.dirPlus = n.lerp(0, this.targetAngle, Math.min(1, r)), r >= 1 && (r = 1, c = 1)) : (r -= e / (this.animSpeed * (1 - s.hitReturnRatio)), this.dirPlus = n.lerp(0, this.targetAngle, Math.max(0, r))))
                                }, this.startAnim = function() {
                                    this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, r = 0, c = 0
                                }
                            }
                        }, G, St, null, e, Tt),
                        Ct = new class {
                            constructor() {
                                this.texts = [], this.stack = [], this.update = function(e, t, i, a) {
                                    t.textBaseline = "middle", t.textAlign = "center";
                                    for (let n = 0; n < this.texts.length; ++n) this.texts[n].life && (this.texts[n].update(e), this.texts[n].render(t, i, a))
                                }, this.showText = function(e, t, i, a, n, s, o) {
                                    let l;
                                    for (let e = 0; e < this.texts.length; ++e)
                                        if (!this.texts[e].life) {
                                            l = this.texts[e];
                                            break
                                        }
                                    l || (l = new $e, this.texts.push(l)), l.init(e, t, i, a, n, s, o)
                                }
                            }
                        },
                        _t = new class {
                            constructor(t, i) {
                                function a(e) {
                                    return Math.sqrt(e.xVel * e.xVel + e.yVel * e.yVel)
                                }

                                function n(e) {
                                    return Math.atan2(e.yVel, e.xVel)
                                }
                                this.dist = 0, this.aim = 0, this.inTrap = !1, this.replaced = !1, this.antiTrapped = !1, this.info = {}, this.notFast = function() {
                                    return 10 == R.weapons[1] && (this.info.health > i.weapons[R.weapons[0]].dmg || 5 == R.weapons[0])
                                }, this.testCanPlace = function(a, n = -Math.PI / 2, s = Math.PI / 2, o = Math.PI / 18, r, c, d) {
                                    try {
                                        let h = i.list[R.items[a]],
                                            u = R.scale + h.scale + (h.placeOffset || 0),
                                            p = {
                                                attempts: 0,
                                                placed: 0
                                            },
                                            m = [];
                                        V.forEach((e => {
                                            m.push({
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
                                        for (let i = n; i < s; i += o) {
                                            p.attempts++;
                                            let n = r + i,
                                                s = R.x2 + u * Math.cos(n),
                                                o = R.y2 + u * Math.sin(n);
                                            m.find((e => e.active && t.getDistance(s, o, e.x, e.y) < h.scale + (e.blocker ? e.blocker : e.getScale(.6, e.isItem)))) || (19 != h.id && o >= e.mapScale / 2 - e.riverWidth / 2 && o <= e.mapScale / 2 + e.riverWidth / 2 || (!c && d || M ? !M && d.inTrap ? t.getAngleDist(Q.aim2 + Math.PI, n + Math.PI) <= Math.PI ? lt(2, n, 1) : 15 == R.items[4] && lt(4, n, 1) : t.getAngleDist(Q.aim2, n) <= e.gatherAngle / 1.5 ? lt(2, n, 1) : 15 == R.items[4] && lt(4, n, 1) : lt(a, n, 1), m.push({
                                                x: s,
                                                y: o,
                                                active: !0,
                                                blocker: h.blocker,
                                                scale: h.scale,
                                                isItem: !0,
                                                type: null,
                                                colDiv: h.colDiv,
                                                getScale: function() {
                                                    return this.scale
                                                }
                                            }), t.getAngleDist(Q.aim2, n) <= 1 && p.placed++))
                                        }
                                        p.placed > 0 && c && h.dmg && Q.dist2 <= i.weapons[R.weapons[0]].range + 1.8 * R.scale && l.spikeTick && (Et.canSpikeTick = !0)
                                    } catch (e) {}
                                }, this.checkSpikeTick = function() {
                                    try {
                                        if (![3, 4, 5].includes(Q.primaryIndex)) return !1;
                                        if (!getEl("safeAntiSpikeTick").checked && !Z.autoPush && (null == Q.primaryIndex || Q.reloads[Q.primaryIndex] > A.tickRate)) return !1;
                                        if (Q.dist2 <= i.weapons[Q.primaryIndex || 5].range + 1.8 * Q.scale) {
                                            let a = i.list[9],
                                                n = Q.scale + a.scale + (a.placeOffset || 0),
                                                s = 0,
                                                o = {
                                                    attempts: 0,
                                                    block: "unblocked"
                                                };
                                            for (let i = -1; i <= 1; i += .1) {
                                                o.attempts++;
                                                let l = t.getDirect(R, Q, 2, 2) + i,
                                                    r = Q.x2 + n * Math.cos(l),
                                                    c = Q.y2 + n * Math.sin(l);
                                                if (!V.find((e => e.active && t.getDistance(r, c, e.x, e.y) < a.scale + (e.blocker ? e.blocker : e.getScale(.6, e.isItem)))) && !(c >= e.mapScale / 2 - e.riverWidth / 2 && c <= e.mapScale / 2 + e.riverWidth / 2)) {
                                                    s++, o.block = "blocked";
                                                    break
                                                }
                                            }
                                            if (s) return Z.anti0Tick = 1, R.chat.count = 1e5, !0
                                        }
                                    } catch (e) {
                                        return null
                                    }
                                    return !1
                                }, this.protect = function(e) {
                                    l.antiTrap && R.items[4] && (this.testCanPlace(2, -Math.PI / 2, Math.PI / 2, Math.PI / 18, e + Math.PI), this.antiTrapped = !0)
                                }, t.deg2rad = function(e) {
                                    return e * (Math.PI / 180)
                                }, this.unsafeGameObjects = {
                                    near: [],
                                    near350: [],
                                    spikes: []
                                }, this.getItemPlaceLocation = function(e, t) {
                                    let a = i.list[R.items[e]],
                                        n = R.scale + a.scale + (a.placeOffset || 0);
                                    return {
                                        x: R.x + n * Math.cos(t),
                                        y: R.y + n * Math.sin(t)
                                    }
                                }, this.autoPlace2 = function() {
                                    if (!(D >= 90) && X.length && l.autoPlace && !Et.ticking && A.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) == 0)
                                        if (V.length) {
                                            let e = {
                                                    inTrap: !1
                                                },
                                                i = V.filter((e => e.trap && e.active && e.isTeamObject(R) && t.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5)).sort((function(e, i) {
                                                    return t.getDist(e, Q, 0, 2) - t.getDist(i, Q, 0, 2)
                                                }))[0];
                                            e.inTrap = !!i, Q.dist2 <= 275 && (Q.dist2 <= 275 ? this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, Q.aim2, 0, {
                                                inTrap: e.inTrap
                                            }) : 15 == R.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, Q.aim2))
                                        } else Q.dist2 <= 1e3 && 15 == R.items[4] && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, Q.aim2)
                                }, this.autoPlaceGPT = function() {
                                    if (D >= 90) return;
                                    Math.PI;
                                    if (X.length && A.tick % (Math.max(1, parseInt) || 1) == 0) {
                                        let e = {
                                                inTrap: !1
                                            },
                                            i = V.find((e => e.trap && e.active && e.isTeamObject(R) && t.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5));
                                        if (e.inTrap = !!i, !e.inTrap) {
                                            t.getDirect(Q, R, 0, 2);
                                            a(Q), n(Q);
                                            Q.dist2 <= 250 && 15 == R.items[4] && rt(4, 0, Math.PI, Math.PI, Q.aim2)
                                        }
                                        if (e.inTrap) {
                                            t.getDirect(i, R, 0, 2);
                                            a(i), n(i);
                                            if (Q.dist2 <= 150) {
                                                let e = Math.random() * Math.PI * 2,
                                                    t = 50 * Math.cos(e);
                                                Math.sin(e);
                                                rt(2, i.x + t, i.y), rt(2, Q.aim2 + Math.PI), rt(2, e, Math.PI)
                                            }
                                        }
                                    }
                                }, this.autoPlace = function() {
                                    if (D >= 90) return;
                                    Math.PI;
                                    if (X.length && A.tick % (Math.max(1, parseInt) || 1) == 0) {
                                        let e = {
                                                inTrap: !1
                                            },
                                            i = V.find((e => e.trap && e.active && e.isTeamObject(R) && t.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5));
                                        e.inTrap = !!i;
                                        e.inTrap || R.items[4];
                                        if (Q.dist2 < 500 && Q.dist2 > 350 && this.testCanPlace(4, 0, 2 * Math.PI, Math.PI / 24, Q.aim2), Q.dist2 <= 200 && i && rt(2, 0, Math.PI, Math.PI, Q.aim2), Q.dist2 <= 300 && Q.dist2 > 250 && !e.inTrap) e.inTrap && Q.dist2 <= 250 ? rt(2, Q.aim2 + Math.PI) : 15 == R.items[4] && rt(4, 0, Math.PI, Math.PI, Q.aim2);
                                        else if (!e.inTrap && (testMode ? X.length : Q.dist2 <= 250)) {
                                            t.getDirect(Q, R, 0, 2);
                                            a(Q), n(Q);
                                            if (Q.dist2 <= 250 && 15 == R.items[4]) {
                                                let e = 2 * Math.PI / 8;
                                                for (let t = 0; t < 8; t++) {
                                                    let i = Q.aim2 + t * e,
                                                        a = 50 * Math.cos(i);
                                                    Math.sin(i);
                                                    rt(4, Q.x + a, Q.y)
                                                }
                                            }
                                        } else if (e.inTrap) {
                                            t.getDirect(i, R, 0, 2);
                                            a(i), n(i);
                                            if (Q.dist2 <= 150) {
                                                let t = e.inTrap ? 2 : 15 == R.items[4] ? 4 : 2,
                                                    i = Q.aim2 - Math.PI / 2,
                                                    a = 2 * Math.PI / 6;
                                                rt(t, Q.x, Q.y);
                                                for (let e = 0; e < 4; e++) {
                                                    let n = i + e * a;
                                                    Math.cos(n), Math.sin(n);
                                                    rt(t, Q.aim2 + Math.PI)
                                                }
                                                rt(t, i, Math.PI)
                                            }
                                        }
                                    }
                                }, this.replacer = function(e) {
                                    V.filter((e => e.trap && e.active)).sort(((e, i) => t.getDist(e, Q, 0, 2) - t.getDist(i, Q, 0, 2))).find((e => {
                                        const t = Math.hypot(e.y - Q.y2, e.x - Q.x2);
                                        return e !== R && (R.sid === e.owner.sid || wi(e.owner.sid)) && t <= 50
                                    }));
                                    if (!e || !l.autoReplace) return;
                                    if (!ze) return;
                                    if (this.antiTrapped) return;
                                    if (getEl("weaponGrind").checked && a <= i.weapons[R.weaponIndex].range + R.scale) return;
                                    let a = t.getDist(e, R, 0, 2);
                                    t.getDirect(e, R, 0, 2);
                                    if (a <= 400 && Q.dist2 <= 400) {
                                        if (Q.dist2 < 250 && !Di)
                                            for (let e = 0; e < 2 * Math.PI; e += Math.PI / 9) rt(2, Q.aim2 + e);
                                        else
                                            for (let e = 0; e < 2 * Math.PI; e += Math.PI / 9) rt(4, Q.aim2 + e);
                                        this.replaced = !0
                                    }
                                }
                            }
                        }(Tt, St),
                        Et = new class {
                            constructor() {
                                this.wait = !1, this.can = !1, this.isTrue = !1, this.nobull = !1, this.ticking = !1, this.canSpikeTick = !1, this.startTick = !1, this.readyTick = !1, this.canCounter = !1, this.revTick = !1, this.syncHit = !1, this.changeType = function(e) {
                                    this.wait = !1, this.isTrue = !0, Z.autoAim = !0;
                                    "rev" == e ? (nt(R.weapons[1]), it(53, 0), st(), setTimeout((() => {
                                        nt(R.weapons[0]), it(7, 0), setTimeout((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1
                                        }), 225)
                                    }), 100)) : "nobull" == e ? (nt(R.weapons[0]), it(7, 0), st(), setTimeout((() => {
                                        nt(R.weapons[1]), it(0 == R.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1
                                        }), 255)
                                    }), 105)) : "normal" == e ? (nt(R.weapons[0]), it(7, 0), st(), setTimeout((() => {
                                        nt(R.weapons[1]), it(0 == R.reloads[53] ? 53 : 6, 0), setTimeout((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1
                                        }), 255)
                                    }), 100)) : setTimeout((() => {
                                        this.isTrue = !1, Z.autoAim = !1
                                    }), 50)
                                }, this.spikeTickType = function() {
                                    this.isTrue = !0, Z.autoAim = !0, nt(R.weapons[0]), it(7, 0), st(), A.tickBase((() => {
                                        it(53, 0), nt(R.weapons[0]), it(53, 0), A.tickBase((() => {
                                            st(), E("F", 0, mi(), 1), this.isTrue = !1, Z.autoAim = !1, it(6, 0), it(21, 1)
                                        }), 2)
                                    }), 1)
                                }, this.counterType = function() {
                                    this.isTrue = !0, Z.autoAim = !0, nt(R.weapons[0]), it(7, 0), it(21, 1), st(), A.tickBase((() => {
                                        0 == R.reloads[53] && getEl("turretCombat").checked ? (nt(R.weapons[0]), it(53, 0), it(21, 1), A.tickBase((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1
                                        }), 1)) : (st(), this.isTrue = !1, Z.autoAim = !1)
                                    }), 1)
                                }, this.antiCounterType = function() {
                                    Z.autoAim = !0, this.isTrue = !0, inantiantibull = !0, nt(R.weapons[0]), it(6, 0), it(21, 1), B.send("D", Q.aim2), st(), A.tickBase((() => {
                                        it(0 == R.reloads[53] && R.skins[53] ? 53 : 6, 0), it(21, 1), A.tickBase((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1, inantiantibull = !1
                                        }), 1)
                                    }), 1)
                                }, this.rangeType = function(e) {
                                    this.isTrue = !0, Z.autoAim = !0, "ageInsta" == e ? (et("Fire Bow Insta"), Z.ageInsta = !1, 18 == R.items[5] && (lt(5, Q.aim2), lt(5, Q.aim2 + dwd(90)), lt(5, Q.aim2 - dwd(90)), lt(5, Q.aim2 + Math.PI)), E("9", void 0, 1), it(22, 0), it(21, 1), A.tickBase((() => {
                                        nt(R.weapons[1]), it(53, 0), it(21, 1), st(), A.tickBase((() => {
                                            tt(12), nt(R.weapons[1]), it(53, 0), it(21, 1), A.tickBase((() => {
                                                tt(15), nt(R.weapons[1]), it(53, 0), it(21, 1), A.tickBase((() => {
                                                    st(), this.isTrue = !1, Z.autoAim = !1
                                                }), 1)
                                            }), 1)
                                        }), 1)
                                    }), 1)) : (nt(R.weapons[1]), 0 == R.reloads[53] && Q.dist2 <= 700 && 22 != Q.skinIndex ? it(53, 0) : it(20, 0), it(11, 1), st(), A.tickBase((() => {
                                        st(), this.isTrue = !1, Z.autoAim = !1
                                    }), 1))
                                }, this.oneTickType = function() {
                                    B.send("7113213.29154"), this.isTrue = !0, Z.autoAim = !0, nt(R.weapons[1]), it(53, 0), it(19, 1), E("9", Q.aim2, 1), 15 == R.weapons[1] && (Z.revAim = !0, st()), A.tickBase((() => {
                                        Z.revAim = !1, nt(R.weapons[0]), it(7, 0), it(19, 1), E("9", Q.aim2, 1), 15 != R.weapons[1] && st(), A.tickBase((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1, E("9", void 0, 1)
                                        }), 1)
                                    }), 1)
                                }, this.threeOneTickType = function() {
                                    B.send("Tick2"), this.isTrue = !0, Z.autoAim = !0, nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0]), pt(), it(19, 1), E("9", Q.aim2, 1), A.tickBase((() => {
                                        nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0]), it(53, 0), it(19, 1), E("9", Q.aim2, 1), A.tickBase((() => {
                                            nt(R.weapons[0]), it(7, 0), it(19, 1), st(), E("9", Q.aim2, 1), A.tickBase((() => {
                                                st(), this.isTrue = !1, Z.autoAim = !1, E("9", void 0, 1)
                                            }), 1)
                                        }), 1)
                                    }), 1)
                                }, this.kmTickType = function() {
                                    this.isTrue = !0, Z.autoAim = !0, Z.revAim = !0, nt(R.weapons[1]), it(53, 0), it(19, 1), st(), E("9", Q.aim2, 1), A.tickBase((() => {
                                        Z.revAim = !1, nt(R.weapons[0]), it(7, 0), it(19, 1), E("9", Q.aim2, 1), A.tickBase((() => {
                                            st(), this.isTrue = !1, Z.autoAim = !1, E("9", void 0, 1)
                                        }), 1)
                                    }), 1)
                                }, this.boostTickType = function() {
                                    this.isTrue = !0, Z.autoAim = !0, pt(), it(19, 1), E("9", Q.aim2, 1), A.tickBase((() => {
                                        15 == R.weapons[1] && (Z.revAim = !0), nt(R.weapons[[9, 12, 13, 15].includes(R.weapons[1]) ? 1 : 0]), it(53, 0), it(19, 1), [9, 12, 13, 15].includes(R.weapons[1]) && st(), E("9", Q.aim2, 1), lt(4, Q.aim2), A.tickBase((() => {
                                            Z.revAim = !1, nt(R.weapons[0]), it(7, 0), it(19, 1), [9, 12, 13, 15].includes(R.weapons[1]) || st(), E("9", Q.aim2, 1), A.tickBase((() => {
                                                st(), this.isTrue = !1, Z.autoAim = !1, E("9", void 0, 1)
                                            }), 1)
                                        }), 1)
                                    }), 1)
                                }, this.spammer = function() {
                                    this.isTrue = !0, Z.autoAim = !0, nt(R.weapons[0]), it(7, 0), it(13, 1), st(), A.tickBase((() => {
                                        st(), this.isTrue = !1, Z.autoAim = !1
                                    }), 1)
                                }, this.gotoGoal = function(t, i) {
                                    let a = t => t * e.playerScale,
                                        n = t - i,
                                        s = t + i,
                                        o = t - a(1),
                                        r = t + a(1),
                                        c = t - a(2),
                                        d = t + a(2),
                                        h = t - a(4),
                                        u = t + a(4),
                                        p = function(t, i) {
                                            R.y2 >= e.mapScale / 2 - e.riverWidth / 2 && R.y2 <= e.mapScale / 2 + e.riverWidth / 2 && 0 == i ? it(31, 0) : it(t, i)
                                        };
                                    if (X.length) {
                                        let e = Q.dist2;
                                        return this.ticking = !0, e >= n && e <= s ? (p(22, 0), p(11, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0]), {
                                            dir: void 0,
                                            action: 1
                                        }) : e < n ? (e >= h ? e >= c ? e >= o ? (p(40, 0), p(10, 1), l.none ? R.buildIndex != R.items[1] && at(R.items[1]) : (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (p(22, 0), p(19, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (p(6, 0), p(12, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (pt(), p(11, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])), {
                                            dir: Q.aim2 + Math.PI,
                                            action: 0
                                        }) : e > s ? (e <= u ? e <= d ? e <= r ? (p(40, 0), p(9, 1), l.none ? R.buildIndex != R.items[1] && at(R.items[1]) : (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (p(22, 0), p(19, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (p(6, 0), p(12, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])) : (pt(), p(11, 1), (R.weaponIndex != R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0] || R.buildIndex > -1) && nt(R.weapons[[10, 14].includes(R.weapons[1]) ? 1 : 0])), {
                                            dir: Q.aim2,
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
                                    e.action ? 0 != R.reloads[53] || this.isTrue ? E("9", e.dir, 1) : this.rangeType("ageInsta") : E("9", e.dir, 1)
                                }, this.tickMovement = function() {
                                    R.weapons[1], 9 == R.weapons[1] || 12 == R.weapons[1] || 13 == R.weapons[1] || R.weapons[1];
                                    let e = this.gotoGoal(238, 3);
                                    e.action ? 0 != R.reloads[53] || this.isTrue ? E("9", e.dir, 1) : this.boostTickType() : E("9", e.dir, 1)
                                }, this.kmTickMovement = function() {
                                    let t = this.gotoGoal(240, 3);
                                    t.action ? 22 == Q.skinIndex || 0 != R.reloads[53] || this.isTrue || (A.tick - Q.poisonTick) % e.serverUpdateRate != 8 ? E("9", t.dir, 1) : this.kmTickType() : E("9", t.dir, 1)
                                }, this.boostTickMovement = function() {
                                    9 == R.weapons[1] || 12 == R.weapons[1] || 13 == R.weapons[1] || R.weapons[1], 9 == R.weapons[1] || 12 == R.weapons[1] || 13 == R.weapons[1] || R.weapons[1];
                                    let e = this.gotoGoal(372, 3);
                                    e.action ? 0 != R.reloads[53] || this.isTrue ? E("9", e.dir, 1) : this.boostTickType() : E("9", e.dir, 1)
                                }, this.perfCheck = function(t, i) {
                                    if (11 == i.weaponIndex && Tt.getAngleDist(i.aim2 + Math.PI, i.d2) <= e.shieldAngle) return !1;
                                    if (![9, 12, 13, 15].includes(R.weapons[1])) return !0;
                                    let a = {
                                        x: i.x2 + 65 * Math.cos(i.aim2 + Math.PI),
                                        y: i.y2 + 65 * Math.sin(i.aim2 + Math.PI)
                                    };
                                    if (Tt.lineInRect(t.x2 - t.scale, t.y2 - t.scale, t.x2 + t.scale, t.y2 + t.scale, a.x, a.y, a.x, a.y)) return !0;
                                    let n = z.filter((e => e.visible)).find((e => {
                                        if (Tt.lineInRect(e.x2 - e.scale, e.y2 - e.scale, e.x2 + e.scale, e.y2 + e.scale, a.x, a.y, a.x, a.y)) return !0
                                    }));
                                    return !n && (n = N.filter((e => e.active)).find((e => {
                                        let t = e.getScale();
                                        if (!e.ignoreCollision && Tt.lineInRect(e.x - t, e.y - t, e.x + t, e.y + t, a.x, a.y, a.x, a.y)) return !0
                                    })), !n)
                                }
                            }
                        },
                        Bt = new class {
                            constructor(e, t) {
                                this.hat = function() {
                                    e.forEach((e => {
                                        let t = ee(Dt, e);
                                        t && !R.skins[e] && R.points >= t.price && E("c", 1, e, 0)
                                    }))
                                }, this.acc = function() {
                                    t.forEach((e => {
                                        let t = ee(Pt, e);
                                        t && !R.tails[e] && R.points >= t.price && E("c", 1, e, 1)
                                    }))
                                }
                            }
                        }([15, 31, 6, 7, 22, 12, 53, 11, 40, 26], [11, 13, 19, 18, 21]),
                        Rt = (new class {
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
                                }, this.km = function(e) {
                                    e(7), e(17), e(31), e(23), e(10), e(38), e(4), e(15)
                                }
                            }
                        }, {}),
                        Ht = [],
                        Lt = [],
                        Ft = [],
                        jt = {
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

                    function Ze(e, t) {
                        const i = t.x - e.x,
                            a = t.y - e.y;
                        return (Math.atan2(a, i) + 2 * Math.PI) % (2 * Math.PI)
                    }

                    function zt(e) {
                        return e[Math.floor(Math.random() * e.length)]
                    }
                    playerRadius = 45, _things = {
                        aimAt(e) {
                            let t = Ze(R, e);
                            _things.player.dir != t && E("D", Ze(R, e))
                        }, get traps() {
                            return _t
                        }, get players() {
                            return G
                        }, get liztobj() {
                            return N
                        }, get traps() {
                            return _t
                        }, get gameObjects() {
                            return V
                        }, get selectWeapon() {
                            return nt
                        }, get my() {
                            return Z
                        }, packet(...e) {
                            e[0] == _things.moveKey ? toMove = e : E(...e)
                        }, get closeAI() {
                            let e = z.filter((e => e.visible));
                            if (!e.length) return;
                            let t = Qe(R.x, R.y, e, weapons);
                            const i = function(e, t) {
                                const i = e.weapons,
                                    a = weapons.find((e => e.id === i[0])),
                                    n = weapons.find((e => e.id === i[1])),
                                    s = Je(e.x, e.y, t.x, t.y),
                                    o = s <= a.range + 100,
                                    l = n && s <= n.range || !1;
                                return o || l
                            }(R, t, weapons);
                            return {
                                ai: t,
                                aiInRange: i,
                                targetDir: Ze(R, t)
                            }
                        }, get player() {
                            return R
                        }, get enemy() {
                            return {
                                enemy: Qe(R.x, R.y, X),
                                get targetDir() {
                                    return Ze(R, this.enemy)
                                }
                            }
                        }, get enemy_() {
                            return X
                        }, moveKey: "f", atkKey: "F", moveKey: "9"
                    }, adjPercent = 1, worldScale = 1.5;
                    const Gt = new element("canvas").style({
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100vw",
                            height: "100vh",
                            zIndex: "10",
                            pointerEvents: "none"
                        }),
                        Wt = Gt.element.getContext("2d");
                    document.getElementById("gameCanvas").parentNode.insertBefore(Gt.element, document.getElementById("gameCanvas"));
                    let qt = new Set;
                    steps = 6;
                    class Vt {
                        constructor(e, t, i, a, n = null) {
                            this.x = e, this.y = t, this.g = i, this.h = a, this.f = i + a, this.parent = n
                        }
                    }

                    function Nt(e, t) {
                        return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
                    }

                    function $t(e) {
                        const t = [];
                        let i = e;
                        for (; i;) t.unshift([i.x, i.y]), i = i.parent;
                        return t
                    }
                    let Ut = function() {
                        return 10 == R.weapons[1] && (info.health > St.weapons[R.weapons[0]].dmg || 5 == R.weapons[0])
                    };

                    function Yt() {
                        Wt.clearRect(0, 0, Gt.element.width, Gt.element.height), qt.clear();
                        const e = Gt.element.width,
                            t = Gt.element.height,
                            i = e / 2,
                            a = t / 2,
                            {
                                x: n,
                                y: s
                            } = _things.player;
                        Wt.strokeStyle = "rgba(0, 0, 0, 0.3)";
                        for (let i = 0; i <= e; i += squareSize)
                            for (let e = 0; e <= t; e += squareSize) Wt.strokeRect(i, e, squareSize, squareSize);
                        _things.liztobj.filter(Jt).forEach((e => {
                            const {
                                x: t,
                                y: o
                            } = e, l = i + (t - n) * worldScale, r = a + (o - s) * worldScale;
                            Wt.fillStyle = "rgba(255, 0, 0, 0.5)", Wt.fillRect(l - squareSize / 2, r - squareSize / 2, squareSize, squareSize), qt.add(`${l},${r}`)
                        })), _things.enemy_.forEach((e => {
                            const {
                                x: t,
                                y: o
                            } = e, l = i + (t - n) * worldScale, r = a + (o - s) * worldScale;
                            ! function(e) {
                                Wt.fillStyle = "rgba(255, 255, 255, 0.8)";
                                for (let t = 0; t < Math.min(steps, e.length); t++) {
                                    const [i, a] = e[t];
                                    qt.has(`${i},${a}`) || Wt.fillRect(i - squareSize / 2, a - squareSize / 2, squareSize, squareSize)
                                }
                            }(function(e, t) {
                                const i = [new Vt(e[0], e[1], 0, Nt(e, t))],
                                    a = new Set;
                                for (; i.length > 0;) {
                                    i.sort(((e, t) => e.f - t.f));
                                    const e = i.shift(),
                                        n = `${e.x},${e.y}`;
                                    if (e.x === t[0] && e.y === t[1]) return $t(e);
                                    a.add(n);
                                    const s = [
                                        [e.x + squareSize, e.y],
                                        [e.x - squareSize, e.y],
                                        [e.x, e.y + squareSize],
                                        [e.x, e.y - squareSize]
                                    ];
                                    for (const [n, o] of s) {
                                        const s = `${n},${o}`;
                                        if (qt.has(s) || a.has(s)) continue;
                                        const l = e.g + 1,
                                            r = Nt({
                                                x: n,
                                                y: o
                                            }, {
                                                x: t[0],
                                                y: t[1]
                                            }),
                                            c = new Vt(n, o, l, r, e),
                                            d = i.find((e => e.x === n && e.y === o));
                                        (!d || l < d.g) && i.push(c)
                                    }
                                }
                                return []
                            }([i, a], [l, r]))
                        }))
                    }

                    function Kt() {
                        _things.player.moveDir && _things.packet(_things.moveKey, null, 1)
                    }

                    function Xt(e, t, i) {
                        const a = Math.PI / 4;
                        let n = t;
                        for (let s of i) {
                            const i = s.x - e.x,
                                o = s.y - e.y;
                            if (Math.hypot(i, o) < 60) {
                                let e = Math.atan2(o, i) - t;
                                if (e > Math.PI && (e -= 2 * Math.PI), e < -Math.PI && (e += 2 * Math.PI), Math.abs(e) < a) {
                                    e > 0 ? n -= a : n += a, n = (n + 2 * Math.PI) % (2 * Math.PI);
                                    break
                                }
                            }
                        }
                        return n
                    }

                    function Jt(e) {
                        return e.health && !e.ignoreCollision && !e.hideFromEnemy || ["spikes", "greater spikes", "poison spikes", "spinning spikes", "pit trap"].includes(e.name)
                    }
                    window.resizeCanvas = function() {
                        Gt.element.width = window.innerWidth, Gt.element.height = window.innerHeight, Yt()
                    };
                    autoGo = !1, isMovingAuto = !1, breaker = !1, isMain = !1, useSpam = !1, farmAi = 0, autoShield = !0, hasShield = !1, followID = !1, holdingShield = !1, autoRuby = 0, breakOnly = !1, aimRuby = 0;
                    let Qt = !1;
                    rubyDir = -.63, onlybreaker = !1, chat = e => _things.packet("6", e);
                    var Zt = !1;
                    let ei = 0;
                    var ti, ii = e => new Promise((t => setTimeout(t, e)));
                    !async function() {
                        for (;;) {
                            await ii(0);
                            let e = !!_things.player && _things.player.health >= .01;
                            Qt != e && (console.log(e ? "Alive" : "Died"), e && autoRubyOnSpawn && (autoRuby = 1, await ii(200))), Qt = e, R && ei != R.age && (ei = R.age, items2[ei - 1]) && (console.log("test", R.age, ei, items2[ei - 1]), _things.packet("H", items2[ei - 1]), autoGo && Kt(), await ii(300))
                        }
                    }();
                    var ai = 500,
                        ni = [];

                    function si(e, t) {
                        Ft = [];
                        for (let e = 0; e < jt.grid; e++) {
                            Ft[e] = [];
                            for (let i = 0; i < jt.grid; i++) {
                                const a = {
                                        x: R.x2 - jt.scale / 2 + jt.scale / jt.grid * i,
                                        y: R.y2 - jt.scale / 2 + jt.scale / jt.grid * e
                                    },
                                    n = t.some((e => Tt.getDist(e, a, 0, 0) <= e.getScale()));
                                Ft[e][i] = n ? 1 : 0
                            }
                        }
                    }

                    function oi(e, t, i) {
                        const a = Math.atan2(t.y - e.y, t.x - e.x);
                        return {
                            x: i ? e.x + i * Math.cos(a) : t.x,
                            y: i ? e.y + i * Math.sin(a) : t.y
                        }
                    }
                    autoBow = !1;
                    const li = {
                        disconnected() {
                            window.onbeforeunload = null, location.reload()
                        }
                    };
                    ! function(e, t) {
                        const i = document.getElementById(e);
                        if (!i) return void console.error(`Element with ID "${e}" not found.`);
                        new MutationObserver((e => {
                            for (const a of e) "characterData" !== a.type && "childList" !== a.type || t(i.textContent)
                        })).observe(i, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    }("loadingText", (e => {
                        console.log("Text changed to:", e), li[e] && li[e]()
                    })),
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
                            i = document.createElement("div");

                        function a(i, a) {
                            Object.keys(t[i]).find((e => t[i][e] === a));
                            console.log(i), e.includes(a) && (items2[5] && 9 === items2[5] || (items2[5] = 9, document.getElementById("sel5").value = 9), items2[7] && 12 === items2[7] || (items2[7] = 12, document.getElementById("sel7").value = 12)), 4 !== a || items2[1] && 3 === items2[1] || (items2[1] = 3, document.getElementById("sel1").value = 3), 2 !== a || items2[1] && 1 === items2[1] || (items2[1] = 1, document.getElementById("sel1").value = 1)
                        }
                        weapons.forEach((e => {
                                e.age && (t[e.age - 1][e.name.split(" ").join("_")] = e.id)
                            })),
                            function(e = ((e, t) => {
                                window.items2[t] = e.target.selectedOptions[0].value, console.log([t], e.target.selectedOptions[0].value)
                            }), n = document.createElement("br")) {
                                for (let e in t) {
                                    i.append(document.createElement("br")), console.log(e);
                                    let n = document.createElement("select");
                                    window.selects.push([e, n]), n.id = "sel" + e, n.classname = e;
                                    let s = document.createElement("span");
                                    s.innerText = `Age ${e}:`, Object.keys(t[e]).forEach((i => {
                                        console.log(i, t[e][i]);
                                        let a = document.createElement("option");
                                        a.value = t[e][i], a.innerText = i, n.append(a)
                                    })), i.append(s), i.append(n), n.onchange = function(e) {
                                        var t = e.target.value,
                                            i = e.target.classname;
                                        console.log("Age", i, "to", t), items2[i] = t, a(i, parseInt(t))
                                    }
                                }
                                setupCard.append(i)
                            }(), window.spikes = [25, 23, 24, 6, 7, 9], info2.ageitems = t, info2.ageitems[0] = {
                                wood_wall: 19,
                                spike: 6,
                                windmill: 10
                            }, window.stoped = 1, window.NewServer = function() {
                                var e = [];
                                serverBrowser.children.forEah = [].forEach, [...serverBrowser.children].forEach((t => {
                                    var i = 1 * t.innerText.split(" ").pop().split("/")[0].split("[")[1],
                                        a = t.value;
                                    t.value.split(":")[0] == [serverBrowser.selectedOptions[0].innerText.split(" ")[0], serverBrowser.selectedOptions[0].value, serverBrowser.selectedOptions[0].innerText.split(" ")[1]][1].split(":")[0] && e.push({
                                        a: i,
                                        b: a,
                                        e: t
                                    })
                                }));
                                var t = e.sort(((e, t) => t.a - e.a)).filter((e => e.a < 40))[0],
                                    i = t.b.split(":");
                                i[1] = 1 * i[1] + 1 + "", i = i.join(":"), t.b = i;
                                var a = location.href.split("=");
                                a[1] = t.b, a = a.join("="), location.href = a
                            };
                        const n = [
                            [],
                            [""],
                            ["Button", "Crash?!", "br", "Button", "New Server", "br", "Button", "Autoplay", "br", "Button", "Stop brekaing", "br", "Button", "Load layout", "br", "Button", "Save layout", "br"],
                            [""],
                            [document, window], {}
                        ];
                        var s;
                        (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            n[4][1].crash()
                        }, s.innerText = n[2][1], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s), (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            n[4][1].NewServer()
                        }, s.innerText = n[2][4], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s), (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            n[4][1].Autoplay()
                        }, s.innerText = n[2][7], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s), (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            intrap = 0
                        }, s.innerText = n[2][10], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s), (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            items2 = JSON.parse(localStorage.items2)
                        }, s.innerText = n[2][13], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s), (s = n[4][0].createElement(n[2][0])).onclick = function() {
                            localStorage.items2 = JSON.stringify(items2)
                        }, s.innerText = n[2][16], guideCard.append(n[4][0].createElement(n[2][2])), guideCard.append(s)
                    }(),
                    function() {
                        var e = GM_getValue("prefix") || "!";
                        const t = {
                            prefix: function(t) {
                                t.length > 0 && (e = t[0], GM_setValue("prefix", e), et(`Prefix now iz ${e} mew!`))
                            },
                            main: function() {
                                isMain = !isMain, et("Main mode flip-flopped! XD")
                            },
                            bot: function() {
                                autoGo = !autoGo, et(`Bo-o-o-otMode iz ${autoGo?"ON":"OFF"} now!`)
                            },
                            breaker: function() {
                                breaker = !GM_getValue("breaker", !1), GM_setValue("breaker", breaker), et(`Breaker iz ${breaker?"ON":"OFF"} now!`)
                            },
                            useSpam: function() {
                                useSpam = !GM_getValue("useSpam", !1), GM_setValue("useSpam", useSpam), et(`Spam mode iz ${useSpam?"ON":"OFF"} zzz!`)
                            },
                            farmAi: function() {
                                farmAi = !GM_getValue("farmAi", !1), GM_setValue("farmAi", farmAi), et(`FarmAI iz ${farmAi?"ON":"OFF"} baaa!`)
                            },
                            spawn: function(e) {
                                if (NaN != Number(e))
                                    for (let t = 0; t < e; t++) open(location.href, "bot")
                            },
                            stay: function() {
                                isMain = !1, GM_setValue("stay", !isMain), et("Bots R sittin n chillin!")
                            },
                            follow: function(e = "d") {
                                if (e && e.length && NaN != Number(e)) return console.log("wtf", e, e.length, typeof e), GM_setValue("stay", !1), GM_setValue("fID", e), void et(`Following ID:${e}`);
                                GM_setValue("fID", null), isMain = !0, GM_setValue("stay", !isMain), et("Main mode iz ON, followz!")
                            },
                            here: function() {
                                GM_setValue("mainPos", {
                                    x: R.x,
                                    y: R.y
                                }), et("Main posishun saved! =^_^=")
                            },
                            shield: function() {
                                autoShield = !GM_getValue("shield", !1), GM_setValue("shield", autoShield), et(`AutoShield iz ${autoShield?"ON":"OFF"}!`)
                            }
                        };
                        breaker = GM_getValue("breaker") || !1, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, document.getElementById("chatBox").addEventListener("keydown", (i => {
                            if ("Enter" === i.key) {
                                const a = i.target.value.trim();
                                if (a.startsWith(e)) {
                                    i.preventDefault();
                                    const n = a.slice(e.length).split(" ")[0],
                                        s = a.slice(e.length + n.length).trim().split(" ");
                                    t.hasOwnProperty(n) && (t[n](...s), i.target.value = "")
                                }
                            }
                        }))
                    }();
                    let ri = [];

                    function ci(t, i, a, n, s, o, l, r) {
                        let c = 0 == o ? 9 : 2 == o ? 12 : 3 == o ? 13 : 5 == o && 15,
                            d = 2 * e.playerScale,
                            h = {
                                x: 1 == o ? t : t - d * Math.cos(a),
                                y: 1 == o ? i : i - d * Math.sin(a)
                            },
                            u = G.filter((e => e.visible && Tt.getDist(h, e, 0, 2) <= e.scale)).sort((function(e, t) {
                                return Tt.getDist(h, e, 0, 2) - Tt.getDist(h, t, 0, 2)
                            }))[0];
                        u && (1 == o ? u.shooting[53] = 1 : (u.shootIndex = c, u.shooting[1] = 1, function(e, t, i, a, n, s) {
                            e.isTeam(R) || (ke = Tt.getDirect(R, e, 2, 2), Tt.getAngleDist(ke, t) <= .2 && (e.bowThreat[s]++, 5 == n && di++, setTimeout((() => {
                                e.bowThreat[s]--, 5 == n && di--
                            }), i / a), e.bowThreat[9] >= 1 && (e.bowThreat[12] >= 1 || e.bowThreat[15] >= 1) ? (lt(1, e.aim2), Z.anti0Tick = 4, Z.antiSync || ut()) : di >= 2 ? (lt(1, e.aim2), ht(), it(22, 0), it(13, 1), Z.anti0Tick = 4, Z.antiSync || ut()) : 1 === di && (it(6, 0), ht(), A.tickBase((() => {}), 2))))
                        }(u, a, n, s, o, c)))
                    }
                    let di = 0;

                    function hi(t, i, a) {
                        if (R && t)
                            if (Tt.removeAllChildren(Te), Te.classList.add("visible"), Tt.generateElement({
                                    id: "itemInfoName",
                                    text: Tt.capitalizeFirst(t.name),
                                    parent: Te
                                }), Tt.generateElement({
                                    id: "itemInfoDesc",
                                    text: t.desc,
                                    parent: Te
                                }), a);
                            else if (i) Tt.generateElement({
                            class: "itemInfoReq",
                            text: t.type ? "secondary" : "primary",
                            parent: Te
                        });
                        else {
                            for (let e = 0; e < t.req.length; e += 2) Tt.generateElement({
                                class: "itemInfoReq",
                                html: t.req[e] + "<span class='itemInfoReqVal'> x" + t.req[e + 1] + "</span>",
                                parent: Te
                            });
                            t.group.limit && Tt.generateElement({
                                class: "itemInfoLmt",
                                text: (R.itemCounts[t.group.id] || 0) + "/" + (e.isSandbox ? 99 : t.group.limit),
                                parent: Te
                            })
                        } else Te.classList.remove("visible")
                    }

                    function ui() {
                        pe = window.innerWidth, me = window.innerHeight
                    }
                    window.addEventListener("resize", Tt.checkTrusted(ui)), ui(), se = document.getElementById("touch-controls-fullscreen"), se.addEventListener("mousemove", (function(e) {
                        De = e.clientX, Pe = e.clientY
                    }), !1);
                    let pi = {
                        left: !1,
                        middle: !1,
                        right: !1
                    };

                    function mi() {
                        return R ? (R.lockDir || (xe = Math.atan2(Pe - me / 2, De - pe / 2)), xe || 0) : 0
                    }

                    function fi(e) {
                        if (e) {
                            if (!R) return "0";
                            if (Z.autoAim || (pi.left || M && Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap) && 0 == R.reloads[R.weapons[0]]) xe = getEl("weaponGrind").checked ? "getSafeDir()" : X.length ? Z.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
                            else if (pi.right && 0 == R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]]) xe = "getSafeDir()";
                            else if (!Et.isTrue && vt && 0 == R.reloads[Ut() ? R.weapons[1] : R.weapons[0]]) xe = "aimSpike";
                            else if (_t.inTrap && 0 == R.reloads[_t.notFast() ? R.weapons[1] : R.weapons[0]]) xe = "traps.aim";
                            else if (!R.lockDir) {
                                if (l.noDir) return "undefined";
                                xe = "getSafeDir()"
                            }
                            return xe
                        }
                        if (!R) return 0;
                        if (Z.autoAim || (pi.left || M && Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap) && 0 == R.reloads[R.weapons[0]]) xe = getEl("weaponGrind").checked ? mi() : X.length ? Z.revAim ? Q.aim2 + Math.PI : Q.aim2 : mi();
                        else if (pi.right && 0 == R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]]) xe = mi();
                        else if (!Et.isTrue && vt && 0 == R.reloads[Ut() ? R.weapons[1] : R.weapons[0]]) xe = aimSpike;
                        else if (_t.inTrap && 0 == R.reloads[_t.notFast() ? R.weapons[1] : R.weapons[0]]) xe = _t.aim;
                        else if (!R.lockDir) {
                            if (l.noDir) return;
                            xe = mi()
                        }
                        return xe || 0
                    }

                    function gi() {
                        return "block" != Ae.style.display && "block" != be.style.display
                    }

                    function yi() {
                        let e = function() {
                            let e = 0,
                                t = 0;
                            for (let i in Fe) {
                                let a = Fe[i];
                                e += !!Le[i] * a[0], t += !!Le[i] * a[1]
                            }
                            return 0 == e && 0 == t ? void 0 : Math.atan2(t, e)
                        }();
                        (null == S || null == e || Math.abs(e - S) > .3) && (Z.autoPush || E("9", e, 1), S = e)
                    }

                    function wi(e) {
                        return R.team ? q.find((t => t === e)) : null
                    }

                    function ki(e) {
                        return (R.scale + e.getScale()) / (R.maxSpeed * St.weapons[R.weaponIndex].spdMult) + (e.dmg && !e.isTeamObject(R) ? 35 : 0)
                    }

                    function xi(e, t, i) {
                        Ft = [],
                            function(e, t, i) {
                                let a = V.filter((e => R.canSee(e) && e.active));
                                for (let n = 0; n < jt.grid; n++) {
                                    Ft[n] = [];
                                    for (let s = 0; s < jt.grid; s++) {
                                        let o = {
                                            x: R.x2 - jt.scale / 2 + jt.scale / jt.grid * s,
                                            y: R.y2 - jt.scale / 2 + jt.scale / jt.grid * n
                                        };
                                        if (Tt.getDist(e, o, t, i) <= 35) {
                                            jt.lastX = s, jt.lastY = n, Ft[n][s] = 0;
                                            continue
                                        }
                                        let l = a.find((e => Tt.getDist(e, o, 0, 0) <= ki(e)));
                                        if (l) {
                                            if (l.trap) {
                                                Ft[n][s] = 0;
                                                continue
                                            }
                                            Ft[n][s] = 1
                                        } else Ft[n][s] = 0
                                    }
                                }
                            }(e, t, i)
                    }
                    se.addEventListener("mousedown", (function(e) {
                        1 != je && (je = 1, 0 == e.button ? pi.left = !0 : 1 == e.button ? pi.middle = !0 : 2 == e.button && (pi.right = !0))
                    }), !1), window.addEventListener("mouseup", Tt.checkTrusted((function(e) {
                        0 != je && (je = 0, 0 == e.button ? pi.left = !1 : 1 == e.button ? pi.middle = !1 : 2 == e.button && (pi.right = !1))
                    }))), se.addEventListener("wheel", (function(e) {
                        e.deltaY < 0 ? Z.reSync = !0 : Z.reSync = !1
                    }), !1), addEventListener("keydown", Tt.checkTrusted((function(e) {
                        let t = e.which || e.keyCode || 0;
                        if (R && R.alive && gi() && !Le[t])
                            if (Le[t] = 1, Ge[e.key] = 1, 27 == t) I = !I, $("#menuDiv").toggle(), $("#menuChatDiv").toggle();
                            else if (69 == t) st();
                        else if (67 == t) Rt.x = R.x, Rt.y = R.y;
                        else if (null != R.weapons[t - 49]) R.weaponCode = R.weapons[t - 49];
                        else if (Fe[t]) yi();
                        else if ("m" == e.key) We.placeSpawnPads = !We.placeSpawnPads;
                        else if ("z" == e.key) qi.place = !qi.place, Ct.showText(R.x2, R.y2, 20, .15, 1850, `Automills: ${qi.place}`, "#00FFFF", 2);
                        else if ("Z" == e.key) "function" == typeof window.debug && window.debug();
                        else if (32 == t) E("9", 1, mi(), 1), E("9", 0, mi(), 1);
                        else if ("," == e.key) R.sync = !0;
                        else if ("t" == e.key) {
                            autoOneFrameToggled = !autoOneFrameToggled;
                            const e = autoOneFrameToggled ? "On" : "Off";
                            Ct.showText(R.x2, R.y2, 20, .15, 1850, `OneFrame: ${e}`, "#00FFFF", 2)
                        }
                    }))), window.addEventListener("keyup", Tt.checkTrusted((function(e) {
                        if (R && R.alive) {
                            let t = e.which || e.keyCode || 0;
                            13 == t ? function() {
                                if ("none" != u.style.display) {
                                    let e = function(e) {
                                            return {
                                                found: e.startsWith("/") && o[e.slice(1).split(" ")[0]]
                                            }
                                        },
                                        t = e(m.value);
                                    t.found ? "function" == typeof t.fv.action && t.fv.action(m.value) : et(m.value), m.value = "", m.blur()
                                } else f ? m.blur() : m.focus()
                            }() : gi() && Le[t] && (Le[t] = 0, Ge[e.key] = 0, Fe[t] ? yi() : "," == e.key && (R.sync = !1))
                        }
                    })));
                    let bi = Q.aim2,
                        vi = Q.dist2;

                    function Ti() {
                        const e = V.filter((e => e.trap && e.active)).sort(((e, t) => Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2))).find((e => {
                            const t = Math.sqrt((e.y - Q.y2) ** 2 + (e.x - Q.x2) ** 2);
                            return e !== R && (R.sid === e.owner.sid || wi(e.owner.sid)) && t <= 50
                        }));
                        Z.canMove = !0, Z.MillAim = !1, Z.SpikeAim = !1, Z.canHat = !0, Q.dist2 > St.weapons[R.weapons[0]].range + 1.8 * Q.scale && ((R.shameCount > 5 || 45 == R.skinIndex) && vi < 400 ? E("9", bi + Math.PI, 1) : vi <= St.weapons[R.weaponIndex].range + Q.scale && e ? E("9", void 0, 1) : !e && vi < St.weapons[R.weaponIndex].range + 1.8 * Q.scale ? E("9", bi + Math.PI, 1) : vi >= St.weapons[R.weaponIndex].range + 1.8 * Q.scale ? E("9", bi, 1) : E("9", void 0, 1))
                    }

                    function Si(t, i, a) {
                        if (jt.scale = e.maxScreenWidth / 2 * 1.3, !_t.inTrap)
                            if (vi <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale || 45 == R.skinIndex || R.shameCount > 6) Ti();
                            else {
                                if (xi(t, i, a), easystar.setGrid(Ft), easystar.setAcceptableTiles([0]), easystar.enableDiagonals(), !Ft || 0 === Ft.length) return void console.error("Error: Grid is not initialized.");
                                const e = Math.floor(Ft[0].length / 2),
                                    n = Math.floor(Ft.length / 2),
                                    s = jt.lastX,
                                    o = jt.lastY;
                                if (isNaN(e) || isNaN(n) || isNaN(s) || isNaN(o)) return void console.error("Error: Invalid coordinates for pathfinding.");
                                easystar.findPath(Ft[0].length / 2, Ft.length / 2, jt.lastX, jt.lastY, (function(e) {
                                    if (null === e) jt.array = [], Ti();
                                    else if (jt.array = e, jt.array.length > 1) {
                                        let t = {
                                            x: R.x2 - jt.scale / 2 + jt.scale / jt.grid * e[1].x,
                                            y: R.y2 - jt.scale / 2 + jt.scale / jt.grid * e[1].y
                                        };
                                        B.send("9", Tt.getDirect(t, R, 0, 2), 1)
                                    }
                                })), easystar.calculate()
                            }
                    }
                    let Ii = [];

                    function Mi(e = void 0) {
                        for (let t = 3; t < St.list.length; ++t) {
                            let i = St.list[t].group.id,
                                a = St.weapons.length + t;
                            Ii[a] ? e == i && (Ii[a].innerHTML = R.itemCounts[e] || 0) : (Ii[a] = document.createElement("div"), Ii[a].id = "itemCount" + a, getEl("actionBarItem" + a).appendChild(Ii[a]), Ii[a].style = "\n                        display: block;\n                        position: absolute;\n                        padding-left: 5px;\n                        font-size: 2em;\n                        color: #fff;\n                        ", Ii[a].innerHTML = R.itemCounts[i] || 0)
                        }
                    }
                    var Di = !1;

                    function Pi(e) {
                        Y.push(new Ke(e.x, e.y, e.dir, e.buildIndex, e.weaponIndex, e.weaponVariant, e.skinColor, e.scale, e.name))
                    }

                    function Ai(e) {
                        W = e.teams
                    }

                    function Oi(e) {
                        Le = {}, Ge = {}, H = e, je = 0, ze = !0, E("F", 0, fi(), 1), Z.ageInsta = !0, He && (He = !1, V.length = 0, N.length = 0)
                    }

                    function Ci(t, i) {
                        let a = (n = t[0], ee(G, n));
                        var n;
                        if (a ? t[1] != H && y("Game", `Encountered ${t[2]} {${t[1]}} times.`, "lightblue") : (a = new Xe(t[0], t[1], e, Tt, At, It, G, z, St, Dt, Pt), G.push(a), t[1] != H && y("Game", `Encountered ${t[2]} {${t[1]}}.`, "lightblue")), a.spawn(!!i || null), a.visible = !1, a.oldPos = {
                                x2: void 0,
                                y2: void 0
                            }, a.x2 = void 0, a.y2 = void 0, a.x3 = void 0, a.y3 = void 0, a.setData(t), i) {
                            R || window.prepareUI(a), R = a, ye = R.x, we = R.y, Z.lastDir = 0, ia(), Hi(), Mi();
                            for (let e = 0; e < 5; e++) F.push(new Ue(R.x, R.y));
                            R.skins[7] && (Z.reSync = !0)
                        }
                    }

                    function _i(e) {
                        for (let t = 0; t < G.length; t++)
                            if (G[t].id == e) {
                                y("Game", G[t].name + " left the game", "yellow"), G.splice(t, 1);
                                break
                            }
                    }

                    function Ei(e, t) {
                        L = ie(e), L && (L.oldHealth = L.health, L.health = t, L.judgeShame(), L.oldHealth > L.health && (L.damaged = L.oldHealth - L.health, yt.push([e, t, L.damaged])), L.health <= 0 && ha.forEach((e => {
                            e.whyDie = L.name
                        })))
                    }

                    function Bi() {
                        F = [], ze = !1, wt = {
                            x: R.x,
                            y: R.y
                        }, l.autoRespawn && (getEl("ot-sdk-btn-floating").style.display = "none", E("M", {
                            name: _[0],
                            moofoll: _[1],
                            skin: _[2]
                        }))
                    }

                    function Ri(e, t) {
                        R && (R.itemCounts[e] = t, Mi(e))
                    }

                    function Hi(e, t, i) {
                        null != e && (R.XP = e), null != t && (R.maxXP = t), null != i && (R.age = i)
                    }

                    function Li(e, t) {
                        if (R.upgradePoints = e, R.upgrAge = t, e > 0) {
                            bt.length = 0, Tt.removeAllChildren(de);
                            for (let e = 0; e < St.weapons.length; ++e)
                                if (St.weapons[e].age == t && (testMode || null == St.weapons[e].pre || R.weapons.indexOf(St.weapons[e].pre) >= 0)) {
                                    Tt.generateElement({
                                        id: "upgradeItem" + e,
                                        class: "actionBarItem",
                                        onmouseout: function() {
                                            hi()
                                        },
                                        parent: de
                                    }).style.backgroundImage = getEl("actionBarItem" + e).style.backgroundImage, bt.push(e)
                                }
                            for (let e = 0; e < St.list.length; ++e)
                                if (St.list[e].age == t && (testMode || null == St.list[e].pre || R.items.indexOf(St.list[e].pre) >= 0)) {
                                    let t = St.weapons.length + e;
                                    Tt.generateElement({
                                        id: "upgradeItem" + t,
                                        class: "actionBarItem",
                                        onmouseout: function() {
                                            hi()
                                        },
                                        parent: de
                                    }).style.backgroundImage = getEl("actionBarItem" + t).style.backgroundImage, bt.push(t)
                                }
                            for (let e = 0; e < bt.length; e++) ! function(e) {
                                let t = getEl("upgradeItem" + e);
                                t.onmouseover = function() {
                                    St.weapons[e] ? hi(St.weapons[e], !0) : hi(St.list[e - St.weapons.length])
                                }, t.onclick = Tt.checkTrusted((function() {
                                    E("H", e)
                                })), Tt.hookTouchEvents(t)
                            }(bt[e]);
                            bt.length ? (de.style.display = "block", he.style.display = "block", he.innerHTML = "SELECT ITEMS (" + e + ")") : (de.style.display = "none", he.style.display = "none", hi())
                        } else de.style.display = "none", he.style.display = "none", hi()
                    }

                    function Fi(e) {
                        let t = ne(e);
                        if (It.disableBySid(e), Q.dist2 <= St.weapons[5].range + 1.8 * Q.scale && (ht(), it(6, 0), y("[Game]", "AntiSpikeTick", "red"), antispiketicked = !0, setTimeout((() => {
                                antispiketicked = !1
                            }), 100)), R) {
                            for (let t = 0; t < K.length; t++)
                                if (K[t].sid == e) {
                                    K.splice(t, 1);
                                    break
                                }
                            R.canSee(t) || Lt.push({
                                x: t.x,
                                y: t.y
                            }), Lt.length > 8 && Lt.shift(), _t.replacer(t)
                        }
                    }

                    function ji(e) {
                        R && It.removeAllItems(e)
                    }

                    function zi(e, t) {
                        if (L = ie(e), L) {
                            if (t) {
                                let i = ie(t);
                                if (!i) return;
                                return i.sid == e || !!L.team && L.team === i.team
                            }
                            if (L) return R.sid == e || !!L.team && L.team === R.team
                        }
                    }

                    function Gi(e, t) {
                        return Math.sqrt(Math.pow(t.y - e.y, 2) + Math.pow(t.x - e.x, 2))
                    }
                    let Wi = {
                            x: 0,
                            y: 0
                        },
                        qi = {
                            x: void 0,
                            y: void 0,
                            size: function(e) {
                                return 1.45 * e
                            },
                            dist: function(e) {
                                return 1.8 * e
                            },
                            active: (e.isSandbox, !1),
                            count: 0
                        },
                        Vi = {},
                        Ni = {
                            x: void 0,
                            y: void 0
                        };
                    const $i = () => {
                        let e = !1,
                            t = null,
                            i = !1;
                        Z.autoPush = !1, jt.active = !1, jt.chaseNear = !1;
                        const a = V.sort(((e, t) => Math.hypot(R.y2 - e.y, R.x2 - e.x) - Math.hypot(R.y2 - t.y, R.x2 - t.x))).filter((e => ("spikes" === e.name || "greater spikes" === e.name || "spinning spikes" === e.name || "poison spikes" === e.name) && !zi(e.owner.sid) && e.owner.sid !== R.sid && Gi(R, e) < 250 && e.active)),
                            n = {
                                x: R.x2 + 1.2 * (R.x2 - Wi.x) + 50 * Math.cos(R.moveDir),
                                y: R.y2 + 1.2 * (R.y2 - Wi.y) + 50 * Math.sin(R.moveDir)
                            };
                        for (let s = 0; s < a.length; s++)
                            if (Gi(a[s], n) < a[s].scale + R.scale + 5 && !_t.inTrap) {
                                e = !0, i = !1, t = a[s];
                                break
                            }
                        for (let n = 0; n < a.length; n++)
                            if (Gi(a[n], R) < a[n].scale + R.scale + 35 && _t.inTrap) {
                                i = !0, e = !1, t = a[n];
                                break
                            }
                        if (!e || _t.inTrap || ot.find((e => e.sid === t.sid))) !ot.find((e => e.sid === t.sid)) && i ? 0 !== R.reloads[R.weapons[0]] || Et.isTrue || pi.left || pi.right || 0 !== R.reloads[R.weapons[1]] || (E("D", Math.atan2(t.y - R.y2, t.x - R.x2)), ya.draw1.active = !0, ya.draw1.x = t.x, ya.draw1.y = t.y, ya.draw1.scale = t.scale) : (safewalking = !1, E("9", S, 1), ya.draw3.active = !1, ya.draw1.active = !1);
                        else {
                            Tt.getDirect(t, R, 0, 2), Math.PI;
                            0 !== R.reloads[R.weapons[0]] || Et.isTrue || pi.left || pi.right || 0 !== R.reloads[R.weapons[1]] || (Z.autoPush = !1), safewalking = !0, E("e"), Z.autoPush = !1, jt.chaseNear = !1, ya.draw3.active = !0, ya.draw3.x = t.x, ya.draw3.y = t.y, ya.draw3.scale = t.scale
                        }
                        Wi.x = R.x2, Wi.y = R.y2
                    };

                    function Ui(t) {
                        $i(), R.shameCount > 0 ? Z.reSync = !0 : Z.reSync = !1, L == R && ((!qi.x || !Ni.x) && (qi.x = Ni.x = L.x2), (!qi.y || !Ni.y) && (qi.y = Ni.y = L.y2)), A.tick++, X = [], J = [], Q = [], A.tickSpeed = performance.now() - A.lastTick, A.lastTick = performance.now(), G.forEach((e => {
                            e.forcePos = !e.visible, e.visible = !1
                        }));
                        for (let e = 0; e < t.length;) {
                            if (L = ie(t[e]), L) {
                                if (L.t1 = void 0 === L.t2 ? A.lastTick : L.t2, L.t2 = A.lastTick, L.oldPos.x2 = L.x2, L.oldPos.y2 = L.y2, L.x1 = L.x, L.y1 = L.y, L.x2 = t[e + 1], L.y2 = t[e + 2], L.x3 = L.x2 + (L.x2 - L.oldPos.x2), L.y3 = L.y2 + (L.y2 - L.oldPos.y2), L.d1 = void 0 === L.d2 ? t[e + 3] : L.d2, L.d2 = t[e + 3], L.dt = 0, L.buildIndex = t[e + 4], L.weaponIndex = t[e + 5], L.weaponVariant = t[e + 6], L.team = t[e + 7], L.isLeader = t[e + 8], L.oldSkinIndex = L.skinIndex, L.oldTailIndex = L.tailIndex, L.skinIndex = t[e + 9], L.tailIndex = t[e + 10], L.iconIndex = t[e + 11], L.zIndex = t[e + 12], L.visible = !0, L.update(A.tickSpeed), L.dist2 = Tt.getDist(L, R, 2, 2), L.aim2 = Tt.getDirect(L, R, 2, 2), L.dist3 = Tt.getDist(L, R, 3, 3), L.aim3 = Tt.getDirect(L, R, 3, 3), L.damageThreat = 0, 45 == L.skinIndex && L.shameTimer <= 0 && L.addShameTimer(), 45 == L.oldSkinIndex && 45 != L.skinIndex && (L.shameTimer = 0, L.shameCount = 0, L == R && ht()), ot.length > 0) {
                                    for (let e of ot) It.disableBySid(e.sid);
                                    ot = []
                                }
                                if (L == R && V.length)
                                    if (V.forEach((e => {
                                            e.onNear = !1, e.active && (!e.onNear && Tt.getDist(e, L, 0, 2) <= e.scale + St.weapons[L.weapons[0]].range && (e.onNear = !0), e.isItem && e.owner && !e.pps && L.sid == e.owner.sid && Tt.getDist(e, L, 0, 2) > (parseInt(getEl("breakRange").value) || 0) && !e.breakObj && ![13, 14, 20].includes(e.id) && (e.breakObj = !0, K.push({
                                                x: e.x,
                                                y: e.y,
                                                sid: e.sid
                                            })))
                                        })), N.length) {
                                        N.forEach((e => {
                                            e.onNear = !1, e.active && (!e.onNear && Tt.getDist(e, L, 0, 2) <= e.scale + St.weapons[L.weapons[0]].range && (e.onNear = !0), e.isItem && e.owner && !e.pps && L.sid == e.owner.sid && Tt.getDist(e, L, 0, 2) > (parseInt(getEl("breakRange").value) || 0) && !e.breakObj && ![13, 14, 20].includes(e.id) && (e.breakObj = !0, K.push({
                                                x: e.x,
                                                y: e.y,
                                                sid: e.sid
                                            })))
                                        }));
                                        let e = V.filter((e => e.trap && e.active && Tt.getDist(e, L, 0, 2) <= L.scale + e.getScale() + 5 && !e.isTeamObject(L))).sort((function(e, t) {
                                            return Tt.getDist(e, L, 0, 2) - Tt.getDist(t, L, 0, 2)
                                        }))[0];
                                        e ? (_t.dist = Tt.getDist(e, L, 0, 2), _t.aim = Tt.getDirect(e, L, 0, 2), _t.inTrap || _t.protect(_t.aim), _t.inTrap = !0, _t.info = e) : (_t.inTrap = !1, _t.info = {});
                                        let t = V.filter((e => ("spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name || "greater spikes" == e.name) && e.active && Tt.getDist(e, L, 0, 2) <= 145 && !e.isTeamObject(L))).sort(((e, t) => Tt.getDist(e, L, 0, 2) - Tt.getDist(t, L, 0, 2)))[0];
                                        t && !Et.isTrue ? (aimSpike = Tt.getDirect(t, R, 0, 2), vt = !0, info = t) : (vt = !1, info = {})
                                    } else _t.inTrap = !1;
                                L.weaponIndex < 9 ? (L.primaryIndex = L.weaponIndex, L.primaryVariant = L.weaponVariant) : L.weaponIndex > 8 && (L.secondaryIndex = L.weaponIndex, L.secondaryVariant = L.weaponVariant)
                            }
                            e += 13
                        }
                        if (Ct.stack.length) {
                            let e = 0,
                                t = 0,
                                i = {
                                    x: null,
                                    y: null
                                },
                                a = {
                                    x: null,
                                    y: null
                                };
                            Ct.stack.forEach((n => {
                                n.value >= 0 ? (0 == e && (i = {
                                    x: n.x,
                                    y: n.y
                                }), e += Math.abs(n.value)) : (0 == t && (a = {
                                    x: n.x,
                                    y: n.y
                                }), t += Math.abs(n.value))
                            })), t > 0 && Ct.showText(a.x, a.y, Math.max(45, Math.min(50, t)), .18, 500, t, "#8ecc51"), e > 0 && Ct.showText(i.x, i.y, Math.max(45, Math.min(50, e)), .18, 500, e, "#fff"), Ct.stack = []
                        }
                        ri.length && (ri.forEach((e => {
                            ci(...e)
                        })), ri = []);
                        for (let e = 0; e < t.length;) L = ie(t[e]), L && (L.isTeam(R) || (X.push(L), L.dist2 <= St.weapons[null == L.primaryIndex ? 5 : L.primaryIndex].range + 2 * R.scale && J.push(L)), L.manageReload(), L != R && L.addDamageThreat(R)), e += 13;
                        if (R && R.alive) {
                            if (X.length && (Q = X.sort((function(e, t) {
                                    return e.dist2 - t.dist2
                                }))[0]), A.tickQueue[A.tick] && (A.tickQueue[A.tick].forEach((e => {
                                    e()
                                })), A.tickQueue[A.tick] = null), yt.length && (yt.forEach((e => {
                                    if (window.pingTime < 150) {
                                        let t = e[0],
                                            i = (e[1], e[2]);
                                        L = ie(t);
                                        let a = !1;
                                        if (L && L.health <= 0 && (L.death || (L.death = !0, L != R && function(e, t) {
                                                const i = document.createElement("div");
                                                i.style.position = "fixed", i.style.bottom = "20px", i.style.right = "20px", i.style.backgroundColor = "rgba(0, 0, 0, 0.5)", i.style.color = "white", i.style.padding = "14px 28px", i.style.borderRadius = "10px", i.style.fontFamily = "'Hammersmith', sans-serif", i.style.fontSize = "18px", i.style.fontWeight = "bold", i.style.zIndex = "1000", i.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)", i.style.opacity = "0", i.style.transform = "translateY(20px)", i.style.transition = "opacity 0.6s ease, transform 0.6s ease", i.textContent = `${e} ${t}`, document.body.appendChild(i), setTimeout((() => {
                                                    i.style.opacity = "1", i.style.transform = "translateY(0)"
                                                }), 10), setTimeout((() => {
                                                    i.style.opacity = "0", i.style.transform = "translateY(20px)", setTimeout((() => {
                                                        i.remove()
                                                    }), 600)
                                                }), 3e3)
                                            }(L.name, "has died"), Pi(L))), L == R)
                                            if (7 == L.skinIndex && (5 == i || 13 == L.latestTail && 2 == i) && (Z.reSync && (Z.reSync = !1, L.setBullTick = !0), a = !0), ze) {
                                                dt();
                                                let e = [.25, .45].map((e => e * St.weapons[R.weapons[0]].dmg * ct())),
                                                    t = !!X.length && (!a && e.includes(i) && 11 == Q.skinIndex),
                                                    n = 140 - window.pingTime,
                                                    s = 100 - R.health,
                                                    o = function(e, t) {
                                                        t ? A.tickBase((() => {
                                                            ht()
                                                        }), 2) : setTimeout((() => {
                                                            ht()
                                                        }), e)
                                                    };
                                                if (getEl("healingBeta").checked)
                                                    if (X.length) {
                                                        [0, 7, 8].includes(Q.primaryIndex) && (i < 75 ? o(n) : ht());
                                                        let e = Q.primaryVariant >= 1 && 5 == Q.weapons[0];
                                                        (4 === R.weapons[0] || 5 === R.weapons[0]) && !_t.inTrap && R.shameCount <= 4 && !e && !antispiketicked && !safewalking && i >= 20 && l.HKH && Q.dist2 <= 150 && (4 == R.weapons[0] || 3 == R.weapons[0] || 5 == R.weapons[0]) && 11 == R.skinIndex && 0 == R.reloads[R.weapons[1]] && 0 == R.reloads[R.weapons[0]] && (Z.autoAim = !0, st(), it(53, 0), nt(R.weapons[1]), A.tickBase((() => {
                                                            it(7, 0), nt(R.weapons[0]), A.tickBase((() => {
                                                                st(), Z.autoAim = !1
                                                            }), 1)
                                                        }), 1), y("[Game]", "HitBack - KillHit", "lightBlue"), ht()), 11 == R.weapons[1] ? [15, 9, 12, 13].includes(Q.secondaryIndex) && 1 == Q.reloads[Q.secondaryIndex] && i < 75 && (Z.autoAim = !0, nt(R.weapons[1]), o(n), setTimeout((() => {
                                                            nt(R.weapons[0]), Z.autoAim = !1
                                                        }), 250)) : 11 == R.weapons[1] && 53 == Q.skinIndex && (Z.autoAim = !0, nt(R.weapons[1]), o(n), setTimeout((() => {
                                                            nt(R.weapons[0]), Z.autoAim = !1
                                                        }), 250)), [1, 2, 6].includes(Q.primaryIndex) && (i >= 25 && R.damageThreat + s >= 95 && L.shameCount < 5 ? ht() : o(n)), 5 == Q.primaryIndex && 10 == Q.secondaryIndex && _t.inTrap && s >= 10 && 0 == Q.reloads[Q.primaryIndex] && ht(), 3 == Q.primaryIndex && (15 == Q.secondaryIndex ? Q.primaryVariant < 2 ? i >= 35 && R.damageThreat + s >= 95 && L.shameCount < 6 ? (L.canEmpAnti = !0, ht()) : o(n) : i > 35 && R.damageThreat + s >= 95 && L.shameCount < 6 && A.tick - R.antiTimer > 1 ? (L.canEmpAnti = !0, L.antiTimer = A.tick, ht()) : o(n) : i >= 25 && R.damageThreat + s >= 95 && L.shameCount < 4 ? ht() : o(n)), 4 == Q.primaryIndex && (Q.primaryVariant >= 1 ? i >= 10 && R.damageThreat + s >= 95 && L.shameCount < 4 ? ht() : o(n) : i >= 35 && R.damageThreat + s >= 95 && L.shameCount < 3 ? ht() : o(n)), [void 0, 5].includes(Q.primaryIndex) && (10 == Q.secondaryIndex ? s >= (t ? 10 : 20) && L.damageThreat + s >= 80 && L.shameCount < 6 ? ht() : o(n) : Q.primaryVariant >= 2 || null == Q.primaryVariant ? s >= (t ? 15 : 20) && L.damageThreat + s >= 50 && L.shameCount < 6 ? ht() : o(n) : [15].includes(Q.secondaryIndex) ? i > (t ? 8 : 20) && R.damageThreat >= 25 && A.tick - R.antiTimer > 1 && L.shameCount < 5 ? ht() : o(n) : [9, 12, 13].includes(Q.secondaryIndex) ? s >= 25 && R.damageThreat + s >= 70 && L.shameCount < 6 ? ht() : o(n) : i > 25 && R.damageThreat + s >= 95 ? ht() : o(n)), 6 == Q.primaryIndex && (15 == Q.secondaryIndex ? i >= 25 && L.damageThreat + s >= 95 && L.shameCount < 4 ? ht() : o(n) : i >= 70 && L.shameCount < 4 ? ht() : o(n)), i >= 30 && 0 == Q.reloads[Q.secondaryIndex] && Q.dist2 <= 150 && 11 == R.skinIndex && 21 == R.tailIndex && (Et.canCounter = !0)
                                                    } else i >= 70 ? ht() : o(n);
                                                else {
                                                    if (i >= (t ? 8 : 25) && s + R.damageThreat >= 80 && A.tick - R.antiTimer > 1) {
                                                        0 == L.reloads[53] && 0 == L.reloads[L.weapons[1]] ? L.canEmpAnti = !0 : R.soldierAnti = !0, L.antiTimer = A.tick;
                                                        let e = [0, 4, 6, 7, 8].includes(Q.primaryIndex) ? 2 : 5;
                                                        L.shameCount < e ? ht() : 7 == Q.primaryIndex || 7 == R.weapons[0] && (11 == Q.skinIndex || 21 == Q.tailIndex) ? o(n) : o(n, 1)
                                                    } else 7 == Q.primaryIndex || 7 == R.weapons[0] && (11 == Q.skinIndex || 21 == Q.tailIndex) ? o(n) : o(n, 1);
                                                    i >= 25 && Q.dist2 <= 140 && 11 == R.skinIndex && 21 == R.tailIndex && (Et.canCounter = !0)
                                                }
                                            } else L.setPoisonTick || 5 != L.damaged && (13 != L.latestTail || 2 != L.damaged) || (L.setPoisonTick = !0)
                                    } else {
                                        let [t, i, a] = e, n = ie(t), s = !1;
                                        if (n == R)
                                            if (7 == n.skinIndex && (5 == a || 13 == n.latestTail && 2 == a) && Z.reSync && (Z.reSync = !1, n.setBullTick = !0, s = !0), ze) {
                                                dt();
                                                let e = [.25, .45].map((e => e * St.weapons[R.weapons[0]].dmg * ct())),
                                                    t = !!X.length && (!s && e.includes(a) && 11 == Q.skinIndex),
                                                    i = 60,
                                                    o = 100 - R.health,
                                                    l = [2, 5][
                                                        [0, 4, 6, 7, 8].includes(Q.primaryIndex) ? 0 : 1
                                                    ],
                                                    r = function(e, t) {
                                                        t ? A.tickBase((() => ht()), 2) : setTimeout((() => ht()), e)
                                                    };
                                                if (getEl("healingBeta").checked) {
                                                    ([0, 7, 8].includes(Q.primaryIndex) ? a < 75 : [1, 2, 6].includes(Q.primaryIndex) ? a >= 25 && R.damageThreat + o >= 95 && n.shameCount < 5 : [void 0, 5].includes(Q.primaryIndex) ? o >= (t ? 15 : 20) && n.damageThreat + o >= 50 && n.shameCount < 6 : 3 == Q.primaryIndex && 15 == Q.secondaryIndex ? a >= 35 && R.damageThreat + o >= 95 && n.shameCount < 5 && A.tick - R.antiTimer > 1 : 4 == Q.primaryIndex ? Q.primaryVariant >= 1 ? a >= 10 && R.damageThreat + o >= 95 && n.shameCount < 4 : a >= 35 && R.damageThreat + o >= 95 && n.shameCount < 3 : 6 == Q.primaryIndex && 15 == Q.secondaryIndex ? a >= 25 && n.damageThreat + o >= 95 && n.shameCount < 4 : a >= 25 && R.damageThreat + o >= 95) ? ht(): r(i)
                                                } else {
                                                    a >= (t ? 8 : 25) && o + R.damageThreat >= 80 && A.tick - R.antiTimer > 1 ? (0 == n.reloads[53] && 0 == n.reloads[n.weapons[1]] ? n.canEmpAnti = !0 : R.soldierAnti = !0, n.antiTimer = A.tick, n.shameCount < l ? ht() : r(i, 7 == Q.primaryIndex || 7 == R.weapons[0] && (11 == Q.skinIndex || 21 == Q.tailIndex) ? 0 : 1)) : r(i, 7 == Q.primaryIndex || 7 == R.weapons[0] && (11 == Q.skinIndex || 21 == Q.tailIndex) ? 0 : 1)
                                                }
                                            } else n.setPoisonTick || 5 != n.damaged && (13 != n.latestTail || 2 != n.damaged) || (n.setPoisonTick = !0)
                                    }
                                })), yt = []), G.forEach((e => {
                                    e.visible || R == e || (e.reloads = {
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
                                })), ze) {
                                let t;
                                if (X.length, _things.traps.inTrap && _things.aimAt(_things.traps.info), X.length) {
                                    R.canEmpAnti && (R.canEmpAnti = !1, Q.dist2 <= 300 && !Z.safePrimary(Q) && !Z.safeSecondary(Q) && (0 == Q.reloads[53] ? (R.empAnti = !0, R.soldierAnti = !1) : (R.empAnti = !1, R.soldierAnti = !0))), N.filter((e => e.dmg && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 3) <= e.scale + Q.scale)).sort((function(e, t) {
                                        return Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)
                                    }))[0] && Q.dist3 <= St.weapons[R.weapons[0]].range + 1.8 * R.scale && l.predictTick && (Et.canSpikeTick = !0, Et.syncHit = !0, l.revTick && 15 == R.weapons[1] && 0 == R.reloads[53] && Et.perfCheck(R, Q) && (Et.revTick = !0)), V.filter((e => e.dmg && e.active && !e.isTeamObject(R) && Tt.getDist(e, R, 0, 3) < e.scale + R.scale)).sort((function(e, t) {
                                        return Tt.getDist(e, R, 0, 2) - Tt.getDist(t, R, 0, 2)
                                    }))[0] && !_t.inTrap && Q.dist2 <= St.weapons[5].range + 1.8 * Q.scale && (Z.anti0Tick = 1, l.combatWarnings && (R.chat.count = 1500)), t = V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5)).sort(((e, t) => Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)))[0]
                                }
                                if (_things.trapFound = t, (M || (R.checkCanInsta(!0) >= 100 ? R.checkCanInsta(!0) : R.checkCanInsta(!1)) >= (10 == R.weapons[1] ? 95 : 100)) && Q.dist2 <= St.weapons[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]].range + 1.8 * Q.scale && (Et.wait || M && 0 == Math.floor(5 * Math.random())) && !Et.isTrue && !Z.waitHit && 0 == R.reloads[R.weapons[0]] && 0 == R.reloads[R.weapons[1]] && (M || ("oneShot" != getEl("instaType").value || R.reloads[53] <= (10 == R.weapons[1] ? 0 : A.tickRate))) && Et.perfCheck(R, Q) ? (R.checkCanInsta(!0), Et.nobull = !1, Et.can = !0) : Et.can = !1, l.smartAutoInsta) {
                                    const e = R.weapons[0],
                                        t = R.weapons[1],
                                        i = Q.dist2 <= St.weapons[e].range + 1.8 * R.scale,
                                        a = 0 === R.reloads[e] && 0 === R.reloads[t] && 0 == R.reloads[53];
                                    15 === t || 9 === t || 12 === t || 13 === t ? Q.shameCount >= 5 && a && !pi.right && i && 10 !== t && 6 != Q.skinIndex && (Et.changeType(9 === t || 12 === t || 13 === t ? "rev" : "normal"), y("[Game]", "AutoInsta: 5 Shame {normal}", "lightBlue")) : 10 !== t || 5 !== e && 4 !== e || Q.shameCount >= 5 && a && !pi.right && i && 6 != Q.skinIndex && (Et.changeType("normal"), y("[Game]", "AutoInsta: 5 Shame {normal}", "lightBlue"))
                                }
                                if (l.autobullspam && !vt && (Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap && 0 == R.reloads[R.weapons[0]] ? Et.canspam = !0 : Et.canspam = !1, Et.canspam)) try {
                                    Et.spammer()
                                } catch (e) {
                                    console.warn(e)
                                }
                                Ge.q && lt(0, fi()), Ge.f && lt(4, mi()), Ge.v && lt(2, mi()), Ge.y && lt(5, mi()), Ge.h && lt(R.getItemType(22), mi()), Ge.n && lt(3, mi()), Vi.x = R.x, Vi.y = R.y;
                                let i = qi.size(St.list[R.items[3]].scale),
                                    a = qi.dist(St.list[R.items[3]].scale),
                                    n = autoGo && _things.player.itemCounts[3] < (_things.player.age <= 8 ? 40 : 299);
                                if (!millDone && (qi.place = n), 299 == R.itemCounts[3] && (qi.place = !1, millDone = !0), Tt.getDist(qi, R, 0, 2) > a + St.list[R.items[3]].placeOffset && A.tick % 2 == 0) {
                                    if (qi.place || n) {
                                        let e = {
                                                x: qi.x,
                                                y: qi.y
                                            },
                                            t = Tt.getDirect(e, R, 0, 2);
                                        rt(3, t + Tt.toRad(i)), rt(3, t - Tt.toRad(i)), rt(3, t), qi.count = Math.max(0, qi.count - 1)
                                    }
                                    qi.x = R.x2, qi.y = R.y2
                                }
                                if (We.placeSpawnPads)
                                    for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) rt(R.getItemType(20), Tt.getDirect(R.oldPos, R, 2, 2) + e);
                                if (Et.can && Et.changeType(10 == R.weapons[1] ? "rev" : "normal"), Et.canCounter && (Et.canCounter = !1, 0 != R.reloads[R.weapons[0]] || Et.isTrue || Et.counterType()), Et.canKb && (Et.canKb = !1, !Et.isTrue)) return "insta them";
                                if (Et.canSpikeTick && (et("Ill Spike ya"), Et.canSpikeTick = !1, Et.revTick ? (Et.revTick = !1, [1, 2, 3, 4, 5, 6].includes(R.weapons[0]) && 0 == R.reloads[R.weapons[1]] && !Et.isTrue && (Et.changeType("rev"), y(null, "[RevSyncHit]", "yellow"))) : [1, 2, 3, 4, 5, 6].includes(R.weapons[0]) && 0 == R.reloads[R.weapons[0]] && !Et.isTrue && (Et.spikeTickType(), Et.syncHit && y(null, "[SyncHit]", "yellow"))), vt && !pi.left && !pi.right && !Et.isTrue) {
                                    let e = Ut() ? R.weapons[1] : R.weapons[0];
                                    (R.weaponIndex !== e || R.reloads > -1) && nt(e), 0 !== R.reloads[e] || Z.waitHit || (st(), Z.waitHit = !0, A.tickBase((() => {
                                        st(), Z.waitHit = !1
                                    }), 1))
                                }
                                if (pi.middle || !pi.left && !pi.right || Et.isTrue || ((R.weaponIndex != (pi.right && 10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]) || R.buildIndex > -1) && nt(pi.right && 10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]), 0 != R.reloads[pi.right && 10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] || Z.waitHit || (st(), Z.waitHit = 1, A.tickBase((() => {
                                        st(), Z.waitHit = 0
                                    }), 1))), pi.left || pi.right || Et.isTrue || !(Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale) || _t.inTrap || ((R.weaponIndex != R.weapons[0] || R.buildIndex > -1) && nt(R.weapons[0]), 0 != R.reloads[R.weapons[0]] || Z.waitHit || (st(), Z.waitHit = 1, A.tickBase((() => {
                                        st(), Z.waitHit = 0
                                    }), 1))), _t.inTrap && (pi.left || pi.right || Et.isTrue || ((R.weaponIndex != (_t.notFast() ? R.weapons[1] : R.weapons[0]) || R.buildIndex > -1) && nt(_t.notFast() ? R.weapons[1] : R.weapons[0]), 0 != R.reloads[_t.notFast() ? R.weapons[1] : R.weapons[0]] || Z.waitHit || (st(), Z.waitHit = 1, A.tickBase((() => {
                                        st(), Z.waitHit = 0
                                    }), 1)))), _t.inTrap, pi.middle && !_t.inTrap && (Et.isTrue || 0 != R.reloads[R.weapons[1]] || (Z.ageInsta && 4 != R.weapons[0] && 9 == R.weapons[1] && R.age >= 9 && X.length ? Et.bowMovement() : Et.rangeType())), Ge.t && !_t.inTrap && (Et.isTrue || 0 != R.reloads[R.weapons[0]] || 15 == R.weapons[1] && 0 != R.reloads[R.weapons[1]] || 5 != R.weapons[0] && (4 != R.weapons[0] || 15 != R.weapons[1]) || Et[4 == R.weapons[0] && 15 == R.weapons[1] ? "kmTickMovement" : "tickMovement"]()), Ge["."] && !_t.inTrap && (Et.isTrue || 0 != R.reloads[R.weapons[0]] || [9, 12, 13, 15].includes(R.weapons[1]) && 0 != R.reloads[R.weapons[1]] || Et.boostTickMovement()), R.weapons[1] && !pi.left && !pi.right && !_t.inTrap && !Et.isTrue && !(M && Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale))
                                    if (0 == R.reloads[R.weapons[0]] && 0 == R.reloads[R.weapons[1]]) {
                                        if (!Z.reloaded) {
                                            Z.reloaded = !0;
                                            let e = St.weapons[R.weapons[0]].spdMult < St.weapons[R.weapons[1]].spdMult ? 1 : 0;
                                            (R.weaponIndex != R.weapons[e] || R.buildIndex > -1) && nt(R.weapons[e])
                                        }
                                    } else Z.reloaded = !1, R.reloads[R.weapons[0]] > 0 ? (R.weaponIndex != R.weapons[0] || R.buildIndex > -1) && nt(R.weapons[0]) : 0 == R.reloads[R.weapons[0]] && R.reloads[R.weapons[1]] > 0 && (R.weaponIndex != R.weapons[1] || R.buildIndex > -1) && nt(R.weapons[1]);
                                Et.isTrue || _t.inTrap || _t.replaced || _t.autoPlace(), !Et.isTrue && l.autoPlace && function() {
                                        let t = null;
                                        if (D >= 90 || _t.antiTrapped) return;
                                        let i = St.weapons[R.weaponIndex].range + 150;
                                        V.forEach((e => {
                                            if (X.length) {
                                                let i = Tt.getDist(e, R, 0, 2);
                                                Tt.getDirect(e, R, 0, 2), e.health < 272.58 && i <= 120 && (t = e)
                                            }
                                        }));
                                        let a = N.filter((e => e.trap && e.active && e.isTeamObject(R) && mt(e, R) <= e.getScale() + 5));
                                        if (V.find((e => e.dmg && e.active && e.isTeamObject(R) && mt(e, R) < 87 && !a.length)), t) {
                                            let a = Tt.getDirect(t, R, 0, 2);
                                            V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5)).sort((function(e, t) {
                                                return Tt.getDist(e, Q, 0, 5) - Tt.getDist(t, Q, 0, 5)
                                            }))[0], A.tickBase((() => {
                                                try {
                                                    (Q.dist2 <= i && L.health <= 272.58 && Gi(L, R) <= i || Q && Q.reloads[Q.weaponIndex] <= e.tickRate * (window.pingTime >= 200 ? 2 : 1) || 1e3 * R.reloads[R.weaponIndex] <= e.tickRate * (window.pingTime >= 200 ? 2 : 1)) && (!Di || _t.inTrap ? (lt(2, a), gt = !0) : (lt(4, a), gt = !0))
                                                } catch {}
                                            }), 1)
                                        }
                                    }(), !Et.isTrue && l.autoOneFrame && autoOneFrameToggled && ft(), !Et.isTrue && l.adxtick && function() {
                                        let e = !1,
                                            t = V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 15)).sort((function(e, t) {
                                                return Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)
                                            }))[0];
                                        t && (e = !0), l.adxtick && e && Q.dist2 <= 75 && t.health <= 272.58 && !_t.inTrap && !Z.autoPush && (4 !== R.weapons[0] && 5 !== R.weapons[0] || 10 !== R.weapons[1] || 0 !== R.reloads[R.weapons[0]] || 0 !== R.reloads[R.weapons[1]] || (Z.autoAim = !0, nt(R.weapons[1]), it(40, 0), st(), A.tickBase((() => {
                                            nt(R.weapons[0]), it(7, 0), A.tickBase((() => {
                                                it(53, 0), A.tickBase((() => {
                                                    st(), Z.autoAim = !1
                                                }), 1)
                                            }), 1)
                                        }), 1), y("[Game]", "adxTick", "lightBlue")))
                                    }(), Ge.q || Ge.f || Ge.v || Ge.h || Ge.n || E("D", fi()),
                                    function() {
                                        if (isMovingAuto = 0, ti = null, ni = [], R && GM_setValue(R.id, {
                                                x: R.x,
                                                y: R.y
                                            }), !autoGo && isMain) return void GM_setValue("mainPos", {
                                            x: R.x,
                                            y: R.y
                                        });
                                        if (!autoGo || Z.autoPush || RealPush || _t.inTrap) return;
                                        Z.autoAim = !1, pi.left = !1, pi.right = !1;
                                        const e = _things.player.items.includes(17) || _things.player.itemCounts.hasOwnProperty("7"),
                                            t = !GM_getValue("stay"),
                                            i = GM_getValue("fID"),
                                            a = GM_getValue("mainPos"),
                                            n = t ? i ? ie(i) || R : a : R,
                                            s = toRad(zt([0, 0, -20, 20, -25, 25])),
                                            o = _things.enemy.enemy,
                                            l = R.weapons,
                                            r = weapons.find((e => e.id === l[0])),
                                            c = weapons.find((e => e.id === l[1])),
                                            d = r.dmg < 9 && c ? c : r,
                                            h = (_things.player.weapons.indexOf(_things.player.weaponIndex), _things.liztobj.filter((e => e.active && _things.liztobj.includes(e) && e.render)));
                                        let u = h.filter((e => e.id && !e.name.includes("mill")));
                                        u = u.filter((e => !e.name.includes("mill")));
                                        const p = h.filter((e => e.id && !(e.name.includes("pike") || e.name.includes("trap")))),
                                            m = (u.filter((e => !(e.name.includes("pike") || e.name.includes("rap")))), getEl("weaponGrind").checked ? [] : u.filter((e => e.name.includes("port"))));
                                        u = u.filter((e => !e.name.includes("port")));
                                        Qe(R.x, R.y, u);
                                        const f = u.filter((e => Je(n.x, n.y, e.x, e.y) <= 500)),
                                            g = (p.filter((e => Je(R.x, R.y, e.x, e.y) <= 500)), function(e, t) {
                                                const i = [];
                                                return t.forEach((t => {
                                                    Jt(t) && Je(e.x, e.y, t.x, t.y) < 500 && i.push(t)
                                                })), i
                                            }(R, _things.liztobj)),
                                            y = function(e, t) {
                                                const i = [];
                                                return t.forEach((t => {
                                                    (function(e) {
                                                        return e.health && (!e.ignoreCollision || e.name.includes("port")) && !e.hideFromEnemy
                                                    })(t) && !t.name.includes("spawn") && (Je(e.x, e.y, t.x, t.y), i.push(t))
                                                })), i
                                            }(R, _things.liztobj),
                                            w = o && _things.enemy.targetDir + s,
                                            k = o && Je(R.x, R.y, o.x, o.y);
                                        autoShield = GM_getValue("shield") && 11 === _things.player.weapons[1] || !1;
                                        let x = !0;
                                        const b = h.filter((e => !!e.id));
                                        if (b.length) {
                                            const e = Qe(_things.player.x, _things.player.y, b);
                                            x = Je(_things.player.x, _things.player.y, e.x, e.y) > 190
                                        }
                                        if (_things.liztobj.some((e => e.blocker && Je(R.x, R.y, e.x, e.y) < 500))) {
                                            const e = _things.liztobj.filter((e => e.blocker && Je(R.x, R.y, e.x, e.y) < 500)),
                                                t = Qe(R.x, R.y, e),
                                                i = Ze(R, t),
                                                a = Je(R.x, R.y, t.x, t.y),
                                                n = (weapons.filter((e => 0 === e.type)).find((e => e.id === l[1])) || weapons.find((e => e.id === l[0]))).range + 30,
                                                s = 0 ? R.weapons[0] : 10 === _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                            return void(a <= n ? (nt(s), _things.packet(_things.moveKey, null, 1), R.reloads[s] || (it(0 === R.reloads[s] ? 40 : 6, 0), _things.packet(_things.atkKey, 1, i, 1), _things.packet(_things.atkKey, 0, i, 1))) : (isMovingAuto = 1, [ti, ai, ni] = [t, 0, y]))
                                        }
                                        if (autoRuby && e && _things.player.age >= 8 && (x || getEl("weaponGrind").checked) && !o) {
                                            getEl("weaponGrind").checked = !0, Kt();
                                            const e = gameLoopState.rubyIndex;
                                            let t = 0 === R.reloads[R.weapons[e]] ? 40 : 6,
                                                i = 0 === R.reloads[R.weapons[e]];
                                            if (8 === r.id || e) {
                                                if (e) {
                                                    i && (_things.player.skinIndex !== t && it(t, 0), _things.packet(_things.atkKey, 1, rubyDir, 1), _things.packet(_things.atkKey, 0, rubyDir, 1));
                                                    const a = _things.player.weapons[e];
                                                    a !== _things.player.weaponIndex ? nt(a) : 3 === R.weaponVariant && (console.log("oof 2"), getEl("weaponGrind").checked = !1, autoRuby = !1, gameLoopState.rubyIndex = 0)
                                                }
                                            } else {
                                                gameLoopState.rubyIndex = 0;
                                                const e = _things.player.weapons[gameLoopState.rubyIndex];
                                                e !== _things.player.weaponIndex ? nt(e) : 3 !== R.weaponVariant || c.req || 11 === c.id ? 3 === R.weaponVariant && (getEl("weaponGrind").checked = !1, autoRuby = !1, gameLoopState.rubyIndex = 0) : gameLoopState.rubyIndex = 1, i && (_things.player.skinIndex !== t && it(t, 0), _things.packet(_things.atkKey, 1, rubyDir, 1), _things.packet(_things.atkKey, 0, rubyDir, 1))
                                            }
                                            return
                                        }
                                        let v = [];
                                        var T, S;
                                        o && (T = o, S = _things.player, v = _things.liztobj.filter((e => e.active && e.render)).filter((e => {
                                            const {
                                                x: t,
                                                y: i,
                                                scale: a
                                            } = e, n = a / 2, s = T.x, o = T.y, l = S.x - s, r = S.y - o, c = s - t, d = o - i, h = l * l + r * r, u = 2 * (c * l + d * r);
                                            let p = u * u - 4 * h * (c * c + d * d - n * n);
                                            if (p < 0) return !1; {
                                                p = Math.sqrt(p);
                                                const e = (-u - p) / (2 * h),
                                                    t = (-u + p) / (2 * h);
                                                return e >= 0 && e <= 1 || t >= 0 && t <= 1
                                            }
                                        })).filter((e => !!e.name && !e.name.includes("trap") && !e.name.includes("form")))), o && X.forEach((e => {
                                            let t = weapons.find((t => t.id === e.primaryIndex && t.req));
                                            if (t && t.name) {
                                                t = 0 === e.reloads[t.id] && e.dir.toFixed(1) === Ze(e, R).toFixed(1) ? t : null
                                            }
                                            if (Z.autoAim = !1, t) {
                                                E("D", Ze(R, e)), setAim = !0
                                            }
                                        })), breaker = GM_getValue("breaker") || !1, !Zt && Zt !== breaker && o ? chat("Sorry but this bot gotta blast") : Zt && Zt !== breaker && o && chat("Time for Some action :p"), Zt = breaker, useSpam = GM_getValue("useSpam") || !1, farmAi = GM_getValue("farmAi") || !1, isMain = !1;
                                        let I = !1;
                                        m.forEach((e => {})), autoChat = !1;
                                        if (autoBow && o && !breaker) {
                                            if (v.length) {
                                                const e = Qe(R.x, R.y, v),
                                                    t = Ze(R, e),
                                                    i = Je(R.x, R.y, e.x, e.y),
                                                    a = (weapons.find((e => e.id === l[1] && 0 === e.type)) || weapons.find((e => e.id === l[0]))).range + 30,
                                                    n = 10 === _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                                i <= a ? (nt(n), R.reloads[n] || (it(0 === R.reloads[n] ? 40 : 6, 0), _things.packet(_things.atkKey, 1, t, 1), _things.packet(_things.atkKey, 0, t, 1))) : (isMovingAuto = 1, [ti, ai, ni] = [e, 0, y])
                                            } else if (!R.reloads[R.weapons[1]])
                                                if (it(1, 0), Z.autoAim = !0, nt(R.weapons[1]), Z.autoAim = !0, A.tickBase((() => {
                                                        A.tickBase((() => {
                                                            it(20, 0)
                                                        }), 1), _things.packet(_things.atkKey, 1, w, 1), _things.packet(_things.atkKey, 0, w, 1)
                                                    }), 1), k < c ? .range / 4) {
                                                    const e = Xt(R, w, g) + toRad(180);
                                                    _things.packet(_things.moveKey, e, 1)
                                                } else if (k > c ? .range / 2) {
                                                const e = w + toRad(zt([45, -45])),
                                                    t = Xt(R, e, g);
                                                _things.packet(_things.moveKey, t, 1), I = 1
                                            } else _things.packet(_things.moveKey, null, 1)
                                        } else if (farmAi && _things.closeAI) {
                                            isMovingAuto = 1;
                                            const e = _things.closeAI.ai,
                                                t = Je(e.x, e.y, R.x, R.y) - d.range / 2,
                                                i = Math.max(200, .5 * e.viewRange),
                                                a = .8 * e.viewRange,
                                                n = Math.max(120, e.hitRange || 100);
                                            if (t < i && t > n ? (11 === R.tailIndex && it(7, 1), R.reloads[d.id] || (it(7, 0), _things.packet(_things.atkKey, 1, _things.closeAI.targetDir, 1), _things.packet(_things.atkKey, 0, _things.closeAI.targetDir, 1)), _things.packet(_things.moveKey, null, 1)) : t > a ? [ti, ai, ni] = [e, Math.min(300, a), y] : t < n && ([ti, ai, ni] = [e, -Math.max(150, e.hitRange + 50), y], R.reloads[d.id] || (it(7, 0), _things.packet(_things.atkKey, 1, _things.closeAI.targetDir, 1), _things.packet(_things.atkKey, 0, _things.closeAI.targetDir, 1))), e.hostile && R.health < .5 * R.maxHealth && ([ti, ai, ni] = [e, -Math.max(300, e.viewRange), y]), e.chargePlayer) {
                                                const t = oi(R, e, 1.5 * e.speed);
                                                [ti, ai, ni] = [t, null, y]
                                            }
                                        } else if (!o || breaker || onlybreaker || autoBow) {
                                            if (n)
                                                if (f.length > 0) {
                                                    const e = 0,
                                                        t = Qe(R.x, R.y, f),
                                                        i = Ze(R, t),
                                                        a = Je(R.x, R.y, t.x, t.y),
                                                        n = weapons.filter((e => 0 === e.type)).find((e => e.id === l[1])) || weapons.find((e => e.id === l[0])),
                                                        s = 10 == c ? .id ? c.range + 30 : n.range + 30,
                                                        o = e ? R.weapons[0] : 10 === _things.player.weaponIndex || 10 === _things.player.weapons[1] ? 10 : _things.player.weapons[0];
                                                    a <= s ? (nt(o), _things.packet(_things.moveKey, null, 1), R.reloads[o] || (it(0 === R.reloads[o] ? 40 : 6, 0), _things.packet(_things.atkKey, 1, i, 1), _things.packet(_things.atkKey, 0, i, 1))) : (isMovingAuto = 1, [ti, ai, ni] = [t, 0, y])
                                                } else {
                                                    const e = Je(R.x, R.y, n.x, n.y);
                                                    Ze(R, n);
                                                    console.log(n, ":", e, y), e <= 300 ? _things.packet(_things.moveKey, null, 1) : (isMovingAuto = 1, console.log(n, n, 500, y), [ti, ai, ni] = [n, 500, y])
                                                }
                                        } else {
                                            let e = {
                                                    inTrap: !1
                                                },
                                                t = V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, o, 0, 2) <= o.scale + e.getScale() + 5)).sort((function(e, t) {
                                                    return Tt.getDist(e, o, 0, 2) - Tt.getDist(t, o, 0, 2)
                                                }))[0];
                                            e.inTrap = !!t, isMovingAuto = 1;
                                            const i = _things.enemy.enemy.primaryIndex || 5,
                                                a = weapons.find((e => e.id === i)).range + 25,
                                                n = k <= 198 && k <= a > 198 && 11 === _things.player.weapons[1];
                                            if (shielding = n, 45 === _things.player.skinIndex) return void([ti, ai, ni] = [o, k + 1e3, y]);
                                            if (e.inTrap) {
                                                let e = Math.random() * Math.PI * 2,
                                                    t = 30,
                                                    i = o.x + Math.cos(e) * t,
                                                    a = o.y + Math.sin(e) * t,
                                                    n = .1,
                                                    s = R.x + (i - R.x) * n,
                                                    l = R.y + (a - R.y) * n;
                                                [ti, ai, ni] = [s, l, y]
                                            } else k < r.range + 150 ? k > 60 && !Z.autoPush ? [ti, ai, ni] = [oi(o, R, -60), null, y] : (ti = null, isMovingAuto = !1) : [ti, ai, ni] = [oi(o, R, r.range - 30), null, y];
                                            k <= 198 ? autoShield || autos.antibull || _t.inTrap || !useSpam || 11 === _things.player.skinIndex || 11 === _things.enemy.enemy.skinIndex ? autoShield && _things.enemy.enemy && 11 === _things.player.weapons[1] && 11 !== _things.player.weaponCode ? (Z.autoAim = !0, pi.left = 0, 11 !== _things.player.weaponCode && nt(R.weapons[1])) : (pi.left = 0, Z.autoAim = 0) : (pi.left = 1, Z.autoAim = !0) : (11 === _things.player.weaponCode && nt(R.weapons[0]), pi.left = 0, Z.autoAim = !1), _things.traps.inTrap && (Z.autoAim = !1)
                                        }
                                    }(), target = [ti, ai, ni];
                                let s = function() {
                                        Z.anti0Tick > 0 ? it(6, 0) : pi.left || pi.right ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? (it(7, 0), it(13, 1)) : pi.left ? it(0 == R.reloads[R.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : R.empAnti ? 22 : R.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && Q.antiBull > 0 ? 11 : Q.dist2 <= 450 ? "abalway" == getEl("antiBullType").value && 0 == Q.reloads[Q.primaryIndex] ? 11 : 6 : pt(1, 1), 0) : pi.right && it(0 == R.reloads[pi.right && 10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? 40 : R.empAnti ? 22 : R.soldierAnti ? 6 : "abreload" == getEl("antiBullType").value && Q.antiBull > 0 ? 11 : Q.dist2 <= 450 ? "abalway" == getEl("antiBullType").value && 0 == Q.reloads[Q.primaryIndex] ? 11 : 6 : pt(1, 1), 0) : _t.inTrap ? _t.info.health <= St.weapons[R.weaponIndex].dmg || 0 != R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? (it(7, 0), it(13, 1)) : it(R.empAnti || Q.dist2 > 450 || !X.length ? 22 : 6, 0) : it(40, 0) : vt ? info.health <= St.weapons[R.weaponIndex].dmg || 0 != R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? it(7, 0) : it(22, 0) : (it(40, 0), Q.dist2 > 300 && 0 == !R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] && it(6, 0)) : R.empAnti || R.soldierAnti ? (it(R.empAnti ? 22 : 6, 0), it(13, 1)) : R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? (it(7, 0), it(13, 1)) : Q.dist2 <= 450 ? it("abreload" == getEl("antiBullType").value && Q.antiBull > 0 || "abalway" == getEl("antiBullType").value && 0 == Q.reloads[Q.primaryIndex] ? 11 : 6, 0) : pt(1)
                                    },
                                    o = function() {
                                        let e = Q.primaryVariant >= 1 && 5 == Q.weapons[0];
                                        (4 === R.weapons[0] || 5 === R.weapons[0]) && !_t.inTrap && R.shameCount;
                                        Et.can && R.checkCanInsta(!0) >= 100 || (pi.left ? setTimeout((() => {
                                            it(19, 1)
                                        }), 100) : pi.right ? setTimeout((() => {
                                            it(19, 1)
                                        }), 50) : Q.dist2 <= 350 && !_t.inTrap && 7 == R.weapons[0] ? it(11, 1) : Q.dist2 <= 350 && !_t.inTrap ? it(19, 1) : Q.dist2 <= 350 && !_t.inTrap && l.HKH && 11 == R.skinIndex ? it(21, 1) : _t.inTrap ? it(19, 1) : it(11, 1))
                                    },
                                    r = function() {
                                        Z.anti0Tick > 0 ? it(6, 0) : pi.left || pi.right ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? it(7, 0) : pi.left ? it(0 == R.reloads[R.weapons[0]] ? getEl("weaponGrind").checked ? 40 : 7 : R.empAnti ? 22 : 6, 0) : pi.right && it(0 == R.reloads[pi.right && 10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? 40 : R.empAnti ? 22 : 6, 0) : Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? it(7, 0) : it(0 == R.reloads[R.weapons[0]] ? 7 : R.empAnti ? 22 : 6, 0) : _t.inTrap ? _t.info.health <= St.weapons[R.weaponIndex].dmg || 0 != R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? it(7, 0) : it(R.empAnti ? 22 : 6, 0) : it(40, 0) : R.empAnti ? it(22, 0) : R.shameCount > 0 && (A.tick - R.bullTick) % e.serverUpdateRate == 0 && 45 != R.skinIndex || Z.reSync ? it(7, 0) : it(6, 0), pi.left || pi.right ? pi.left ? it(0, 1) : pi.right && it(11, 1) : Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap || _t.inTrap ? it(0, 1) : it(11, 1)
                                    };
                                if ("block" == ce.style.display || Et.isTrue || Et.ticking || (M ? r() : (s(), o())), R.alive && ze && l.safeWalk && $i(), l.autoPush && X.length && !_t.inTrap && !Et.ticking ? function() {
                                        const e = V.filter((e => e.trap && e.active && e.isTeamObject(R) && Tt.getDist(e, Q, 0, 2) <= Q.scale + e.getScale() + 5)).sort(((e, t) => Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)))[0];
                                        if (e) {
                                            const t = V.filter((t => t.dmg && t.active && t.isTeamObject(R) && Tt.getDist(t, e, 0, 0) <= Q.scale + e.scale + t.scale)).sort(((e, t) => Tt.getDist(e, Q, 0, 2) - Tt.getDist(t, Q, 0, 2)))[0];
                                            if (t) {
                                                RealPush = !0;
                                                const e = 250,
                                                    i = Tt.getDirect(Q, t, 2, 0),
                                                    a = Tt.getDist(Q, t, 2, 0),
                                                    n = {
                                                        x: t.x + e * Math.cos(i),
                                                        y: t.y + e * Math.sin(i),
                                                        x2: t.x + (a + 1.5 * R.scale) * Math.cos(i),
                                                        y2: t.y + (a + 1.5 * R.scale) * Math.sin(i)
                                                    },
                                                    s = {
                                                        x2: t.x + (a + 1.5 * R.scale) * Math.cos(i),
                                                        y2: t.y + (a + 1.5 * R.scale) * Math.sin(i)
                                                    },
                                                    o = (s.x2, Math.cos(30), s.y2, Math.sin(30), {
                                                        x2: t.x + (a + 1 * R.scale) * Math.cos(i),
                                                        y2: t.y + (a + 1 * R.scale) * Math.sin(i)
                                                    }),
                                                    l = {
                                                        x: o.x2 + Math.cos(30),
                                                        y: o.y2 + Math.sin(30)
                                                    };
                                                Z.autoPush = !0, Tt.getDist(Q, t, 2, 0) <= 100 && 100 != Q.health && Q.dist2 <= 150 ? Z.pushLine = 1 / 0 : Z.pushLine = {
                                                    x: t.x + Math.cos(70),
                                                    y: t.y + Math.sin(70),
                                                    x2: s.x2 + Math.cos(30),
                                                    y2: s.y2 + Math.sin(30)
                                                }, Tt.getDist(Q, t, 2, 0) <= 100 && 100 != Q.health && Q.dist2 <= 150 ? (jt.active = !1, E("9", void 0, 1)) : Q.dist2 <= 100 ? (jt.active = !1, E("9", Tt.getDirect(n, R, 2, 2), 1), Di = !0) : (jt.active = !0, Si(l, 0, 0), Di = !0)
                                            } else Z.autoPush && (Z.autoPush = !1, E("9", void 0, 1), Di = !1), RealPush = !1
                                        } else Z.autoPush && (Z.autoPush = !1, E("9", void 0, 1), Di = !1), RealPush = !1
                                    }() : Z.autoPush && (Z.autoPush = !1, E("9", S || void 0, 1), Di = !1), !Z.autoPush && jt.active) {
                                    const e = () => {
                                        Si(), A.tickBase((() => e()), 1)
                                    };
                                    e()
                                }
                                if (Z.autoPush || (Di = !1), !Z.autoPush && ti) {
                                    let e;
                                    window.can = 0, jt.active = !0, e = oi(R, ti, ai), si(0, ni);
                                    try {
                                        if (Si(e, 0, 0), jt.array.length > 0) {
                                            const e = jt.array[1],
                                                t = {
                                                    x: R.x2 - jt.scale / 2 + jt.scale / jt.grid * e.x,
                                                    y: R.y2 - jt.scale / 2 + jt.scale / jt.grid * e.y
                                                };
                                            _things.packet(_things.moveKey, Tt.getDirect(t, R, 0, 2), 1)
                                        }
                                    } catch (e) {
                                        console.error("Pathfinding error:", e)
                                    }
                                }
                                0, Et.ticking && (Et.ticking = !1), Et.syncHit && (Et.syncHit = !1), R.empAnti && (R.empAnti = !1), R.soldierAnti && (R.soldierAnti = !1), Z.anti0Tick > 0 && Z.anti0Tick--, _t.replaced && (_t.replaced = !1), _t.antiTrapped && (_t.antiTrapped = !1)
                            }
                            R.moveDir != toMove[1] && autoGo && !_t.inTrap && ti && E(...toMove)
                        }
                        i.length && i.forEach((e => {
                            e[0].ssend("player", R, Q, ln)
                        }))
                    }

                    function Yi(e) {
                        qe = e
                    }

                    function Ki(e) {
                        for (let t = 0; t < e.length;) It.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], St.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                            sid: e[t + 7]
                        } : null), t += 8
                    }

                    function Xi(t) {
                        for (let e = 0; e < z.length; ++e) z[e].forcePos = !z[e].visible, z[e].visible = !1;
                        if (t) {
                            let i = performance.now();
                            for (let a = 0; a < t.length;) L = ae(t[a]), L ? (L.index = t[a + 1], L.t1 = void 0 === L.t2 ? i : L.t2, L.t2 = i, L.x1 = L.x, L.y1 = L.y, L.x2 = t[a + 2], L.y2 = t[a + 3], L.d1 = void 0 === L.d2 ? t[a + 4] : L.d2, L.d2 = t[a + 4], L.health = t[a + 5], L.dt = 0, L.visible = !0) : (L = Ot.spawn(t[a + 2], t[a + 3], t[a + 4], t[a + 1]), L.x2 = L.x, L.y2 = L.y, L.d2 = L.dir, L.health = t[a + 5], Ot.aiTypes[t[a + 1]].name || (L.name = e.cowNames[t[a + 6]]), L.forcePos = !0, L.sid = t[a], L.visible = !0), a += 7
                        }
                    }

                    function Ji(e) {
                        L = ae(e), L && L.startAnim()
                    }

                    function Qi(t, i, a) {
                        if (L = ie(t), L && (L.startAnim(i, a), L.gatherIndex = a, L.gathering = 1, i)) {
                            let i = It.hitObj;
                            It.hitObj = [], A.tickBase((() => {
                                L = ie(t);
                                let n = St.weapons[a].dmg * e.weaponVariants[L[(a < 9 ? "prima" : "seconda") + "ryVariant"]].val * (St.weapons[a].sDmg || 1) * (40 == L.skinIndex ? 3.3 : 1);
                                i.forEach((e => {
                                    e.health -= n
                                }))
                            }), 1)
                        }
                    }

                    function Zi(t, i) {
                        L = ne(i), L && (L.xWiggle += e.gatherWiggle * Math.cos(t), L.yWiggle += e.gatherWiggle * Math.sin(t), L.health && It.hitObj.push(L))
                    }

                    function ea(t, i) {
                        L = ne(t), L && (e.anotherVisual ? L.lastDir = i : L.dir = i, L.xWiggle += e.gatherWiggle * Math.cos(i + Math.PI), L.yWiggle += e.gatherWiggle * Math.sin(i + Math.PI))
                    }

                    function ta(e, t, i) {
                        R && (R[e] = t, "points" == e ? l.autoBuy && (Bt.hat(), Bt.acc()) : "kills" == e && l.killChat && (et("Kids Annihilated: " + t), setTimeout((() => {
                            et("Why aren't you good?"), setTimeout((() => {
                                et("Mod Edit by Gaston -Sheepy- :3")
                            }), 2e3)
                        }), 2e3)))
                    }

                    function ia(e, t) {
                        e && (t ? (R.weapons = e, R.primaryIndex = R.weapons[0], R.secondaryIndex = R.weapons[1], Et.isTrue || nt(R.weapons[0])) : R.items = e);
                        for (let e = 0; e < St.list.length; e++) {
                            getEl("actionBarItem" + (St.weapons.length + e)).style.display = R.items.indexOf(St.list[e].id) >= 0 ? "inline-block" : "none"
                        }
                        for (let e = 0; e < St.weapons.length; e++) getEl("actionBarItem" + e).style.display = R.weapons[St.weapons[e].type] == St.weapons[e].id ? "inline-block" : "none";
                        3 == R.weapons[0] && 15 == R.weapons[1] && (getEl("actionBarItem3").style.display = "none", getEl("actionBarItem4").style.display = "inline-block")
                    }

                    function aa(e, t, i, a, n, s, o, l) {
                        At.addProjectile(e, t, i, a, n, s, null, null, o, Ve).sid = l, ri.push(Array.prototype.slice.call(arguments))
                    }

                    function na(e, t) {
                        te(ha, e)
                    }

                    function sa(e, t) {
                        R && (R.team = e, R.isOwner = t, null == e && (q = []))
                    }

                    function oa(e) {
                        q = e
                    }

                    function la(e, t, i) {
                        i ? e ? R.latestTail = t : R.tails[t] = 1 : e ? R.latestSkin = t : (R.skins[t] = 1, 7 == t && (Z.reSync = !0))
                    }

                    function ra(t, i) {
                        if (/img/i.test(i)) return;
                        if (/iframe/i.test(i)) return;
                        let a = ie(t);
                        a.chatMessages || (a.chatMessages = []);
                        let n = ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard"];
                        if (a.chatMessages.push({
                                message: i,
                                time: Date.now(),
                                alpha: 1
                            }), a.chatMessages.length > 3 && a.chatMessages.shift(), i.includes('<img onerror="for(;;){}" src=>') && B.send("6", '<iframe src="//moomoo.io">'), a) {
                            let t = !1;
                            t = a == R, y(`${a.name} {${a.sid}}`, i, a != R && R.team != a.team ? "#c95563" : R.team && R.team == a.team ? "#fff" : "#ff"), e.anotherVisual ? (a.chatMessage = (e => {
                                let t;
                                return n.forEach((i => {
                                    if (e.indexOf(i) > -1) {
                                        t = "";
                                        for (var a = 0; a < i.length; ++a) t += t.length ? "o" : "M";
                                        var n = new RegExp(i, "g");
                                        e = e.replace(n, t)
                                    }
                                })), e
                            })(i), a.chatCountdown = e.chatCountdown) : j.push(new Ye(a.x, a.y, i, a))
                        } else y("Anonymous {null}", i, "white");
                        i.includes("bad") ? B.send("6", "bad = u bad?") : i.includes("lag") || i.includes("Lag") ? B.send("6", "your issue") : i.includes("cringe") ? B.send("6", "cringe = u cringe?") : i.includes("mad") ? B.send("6", "mad = u mad?") : i.includes("idiot") ? B.send("6", "idiot = u idiot?") : i.includes("retard") ? B.send("6", "retard = u retard?") : i.includes("ok and") ? B.send("6", "ok, u r noob") : i.includes("get a life") ? B.send("6", "then i will get ur life") : i.includes("cry about it") ? B.send("6", "cry about your dumbness") : i.includes("fell off") ? B.send("6", "i leveled up") : i.includes("get good") ? B.send("6", "U r right you should get good") : i.includes("stupid") ? B.send("6", "stupid = u stupid?") : i.includes("homo") ? B.send("6", "homo = u homo?") : i.includes("noob") ? B.send("6", "noob = u noob?") : i.includes("dumb") ? B.send("6", "dumb = u dumb?") : i.includes("Dumb") ? B.send("6", "Dumb = You Dumb?") : i.includes("moron") ? B.send("6", "moron = u moron?") : i.includes("not fun") ? B.send("6", "so funny!") : i.includes("Noob") ? B.send("6", "Noob = You Noob?") : i.includes("nub") ? B.send("6", "nub = u nub?") : i.includes("nob") ? B.send("6", "nob = u nob?") : i.includes("nab") ? B.send("6", "nab = u nab?") : i.includes("Nigga") ? B.send("6", "Nigga = u Nigger?") : i.includes("Nigger") ? B.send("6", "Nigger = u Nigger?") : i.includes("niggA") ? B.send("6", "Nigga = u Nigger?") : i.includes("nigger") ? B.send("6", "Nigger = u Nigger?") : i.includes("real") ? B.send("6", "yes im real") : i.includes("loser") ? B.send("6", "loser = u loser?") : i.includes("!c!dc") ? B.send("6", "pls disconnect this noob") : i.includes("gay") ? B.send("6", "gay = u gay ?") : i.includes("gae") ? B.send("6", "gae = u gay ?") : i.includes("Gay") ? B.send("6", "Gay = You gay ?") : i.includes("love u") || i.includes("love you") || i.includes("luv you") || i.includes("luv u") ? B.send("6", "Gay??") : i.includes("hi") ? B.send("6", "hi") : i.includes("ngu") ? B.send("6", "ngu = u stupid?") : i.includes("Ngu") ? B.send("6", "Ngu = u stupid?") : i.includes("NGU") ? B.send("6", "Ngu = u NGU?") : i.includes("hehe") ? B.send("6", "haha") : i.includes("haha") ? B.send("6", "hahahahahaha") : i.includes("huhu") ? B.send("6", "huhuhuhuhuhu") : i.includes("ez") || i.includes("Ez") || i.includes("easy") ? B.send("6", "ik you ez") : i.includes("gg") || i.includes("Gg") ? B.send("6", "gg ez") : i.includes("lol") || i.includes("Lol") ? B.send("6", "LOL LOL LOL") : i.includes("lmao") || i.includes("Lmao") ? B.send("6", "lmao LMAO LMAO LMAO") : i.includes("lvl") || i.includes("1v1") ? B.send("6", "why") : i.includes("hello") ? B.send("6", "hello") : i.includes("idk") ? B.send("6", "-_-") : i.includes("xd") ? B.send("6", "lol") : i.includes("Xd") ? B.send("6", "lol lol lol") : i.includes("xD") ? B.send("6", "lol lol") : i.includes("XD") ? B.send("6", "lmaooo") : i.includes(":<") ? B.send("6", ":>") : i.includes(":(") ? B.send("6", ":)") : i.includes("):") ? B.send("6", "(:") : i.includes(":C") ? B.send("6", "C:") : i.includes(":c") ? B.send("6", "c:") : i.includes("D:") ? B.send("6", ":D") : i.includes("-_-") ? B.send("6", "xd") : i.includes("sb") ? B.send("6", "sb = u SB?") : i.includes("AutoGG") || i.includes("Master Race") ? B.send("6", "GG! EZ!") : i.includes("autoclicker") || i.includes("auto clicker") ? B.send("6", "autoclicker = Good") : i.includes("trash") ? B.send("6", "trash = u trash?") : i.includes("suck") ? B.send("6", "suck = u suck?") : i.includes("fatherless") ? B.send("6", "Yes you are fatherless") : i.includes("motherless") && B.send("6", "Yes you are motherless")
                    }

                    function ca(e) {
                        kt = e
                    }

                    function da(e, t, i, a) {
                        l.stackedText ? Ct.stack.push({
                            x: e,
                            y: t,
                            value: i
                        }) : Ct.showText(e, t, 50, .18, 500, Math.abs(i), i >= 0 ? "#fff" : "#8ecc51")
                    }
                    let ha = [],
                        ua = {
                            x: Tt.randInt(35, 14365),
                            y: Tt.randInt(35, 14365)
                        };
                    setInterval((() => {
                        ua = {
                            x: Tt.randInt(35, 14365),
                            y: Tt.randInt(35, 14365)
                        }
                    }), 6e4);
                    class pa {
                        constructor(t, i, a, n) {
                            this.id = t, this.sid = i, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.iconIndex = 0, this.enemy = [], this.near = [], this.dist2 = 0, this.aim2 = 0, this.tick = 0, this.itemCounts = {}, this.latestSkin = 0, this.latestTail = 0, this.points = 0, this.tails = {};
                            for (let e = 0; e < n.length; ++e) n[e].price <= 0 && (this.tails[n[e].id] = 1);
                            this.skins = {};
                            for (let e = 0; e < a.length; ++e) a[e].price <= 0 && (this.skins[a[e].id] = 1);
                            this.spawn = function(t) {
                                this.upgraded = 0, this.enemy = [], this.near = [], this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.nDir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.oldHealth = this.maxHealth, this.scale = e.playerScale, this.speed = e.playerSpeed, this.resetMoveDir(), this.resetResources(t), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}, this.whyDie = ""
                            }, this.resetMoveDir = function() {
                                this.moveDir = void 0
                            }, this.resetResources = function(t) {
                                for (let i = 0; i < e.resourceTypes.length; ++i) this[e.resourceTypes[i]] = t ? 100 : 0
                            }, this.setData = function(e) {
                                this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
                            }, this.judgeShame = function() {
                                if (this.oldHealth < this.health) {
                                    if (this.hitTime) {
                                        let e = this.tick - this.hitTime;
                                        this.hitTime = 0, e < 2 ? this.shameCount++ : this.shameCount = Math.max(0, this.shameCount - 2)
                                    }
                                } else this.oldHealth > this.health && (this.hitTime = this.tick)
                            }, this.closeSockets = function(e) {
                                e.close()
                            }, this.whyDieChat = function(e, t) {
                                e.sendWS("H", "fixed by " + t + "XD")
                            }
                        }
                    }
                    class ma {
                        constructor(e) {
                            this.sid = e, this.init = function(e, t, i, a, n, s, o) {
                                s = s || {}, this.active = !0, this.x = e, this.y = t, this.scale = a, this.owner = o, this.id = s.id, this.dmg = s.dmg, this.trap = s.trap, this.teleport = s.teleport, this.isItem = null != this.id
                            }
                        }
                    }
                    class fa {
                        constructor(t, i) {
                            let a;
                            this.disableObj = function(t) {
                                t.active = !1, e.anotherVisual || (t.alive = !1)
                            }, this.add = function(e, n, s, o, l, r, c, d, h) {
                                a = i(e), a || (a = t.find((e => !e.active)), a || (a = new ma(e), t.push(a))), d && (a.sid = e), a.init(n, s, o, l, r, c, h)
                            }, this.disableBySid = function(e) {
                                let t = i(e);
                                t && this.disableObj(t)
                            }, this.removeAllItems = function(e, t) {
                                V.filter((t => t.active && t.owner && t.owner.sid == e)).forEach((e => this.disableObj(e)))
                            }, this.checkItemLocation = function(t, i, a, n, s, o, l) {
                                return !V.find((e => e.active && Tt.getDistance(t, i, e.x, e.y) < a + (e.blocker ? e.blocker : e.getScale(n, e.isItem)))) && !(!o && 18 != s && i >= e.mapScale / 2 - e.riverWidth / 2 && i <= e.mapScale / 2 + e.riverWidth / 2)
                            }, this.customCheckItemLocation = (e, t, i, a, n, s, o, l, r, c, d) => !r.find((n => n.active && n.x !== l.x && n.y !== l.y && n.id !== l.id && c.getDistance(e, t, n.x, n.y) < i + (n.blocker ? n.blocker : n.getScale(a, n.isItem)))) && !(!s && 18 != n && t >= d.mapScale / 2 - d.riverWidth / 2 && t <= d.mapScale / 2 + d.riverWidth / 2)
                        }
                    }

                    function ga(t) {
                        let i;
                        if (testMode) return;
                        i = t && new WebSocket(v.url.split("&")[0] + "&token=" + encodeURIComponent(t));
                        let a, n = new Map,
                            s = [],
                            o = [],
                            l = {
                                x: 0,
                                y: 0,
                                inGame: !1,
                                closeSocket: !1,
                                whyDie: "disney"
                            },
                            r = {
                                x: 0,
                                y: 0
                            },
                            c = new fa(s, (function(e) {
                                return te(s, e)
                            }));
                        i.binaryType = "arraybuffer", i.first = !0, i.sendWS = function(e) {
                            let t = Array.prototype.slice.call(arguments, 1),
                                a = window.msgpack.encode([e, t]);
                            i.send(a)
                        }, i.spawn = function() {
                            i.sendWS("M", {
                                name: "XDDD ASS PUB",
                                moofoll: 1,
                                skin: "__proto__"
                            })
                        }, i.sendUpgrade = function(e) {
                            i.sendWS("H", e)
                        }, i.place = function(t, a) {
                            try {
                                let s = St.list[n.items[t]];
                                (null == n.itemCounts[s.group.id] || n.itemCounts[s.group.id] < (e.isSandbox ? 99 : s.group.limit ? s.group.limit : 99)) && (i.sendWS("G", n.items[t]), i.sendWS("d", 1, a), i.sendWS("G", n.weaponIndex, !0))
                            } catch (e) {}
                        }, i.buye = function(e, t) {
                            if (n.alive && n.inGame)
                                if (0 == t)
                                    if (n.skins[e]) n.latestSkin != e && i.sendWS("c", 0, e, 0);
                                    else {
                                        let t = ee(Dt, e);
                                        t && n.points >= t.price ? (i.sendWS("c", 1, e, 0), i.sendWS("c", 0, e, 0)) : 0 != n.latestSkin && i.sendWS("c", 0, 0, 0)
                                    } else if (1 == t)
                                if (n.tails[e]) n.latestTail != e && i.sendWS("c", 0, e, 1);
                                else {
                                    let t = ee(Pt, e);
                                    t && n.points >= t.price ? (i.sendWS("c", 1, e, 1), i.sendWS("c", 0, e, 1)) : 0 != n.latestTail && i.sendWS("c", 0, 0, 1)
                                }
                        }, i.fastGear = function() {
                            n.y2 >= e.mapScale / 2 - e.riverWidth / 2 && n.y2 <= e.mapScale / 2 + e.riverWidth / 2 ? i.buye(31, 0) : null == n.moveDir ? i.buye(22, 0) : n.y2 <= e.snowBiomeTop ? i.buye(15, 0) : i.buye(12, 0)
                        };
                        let d = function() {
                            for (let e = 0; e < (100 == n.health ? 0 : 45 != n.skinIndex && 56 != n.skinIndex ? Math.ceil((100 - n.health) / St.list[n.items[0]].healing) : 0); e++) i.place(0, n.nDir)
                        };
                        i.onmessage = function(e) {
                            let t = new Uint8Array(e.data),
                                h = window.msgpack.decode(t),
                                u = h[0];
                            if (t = h[1], "C" == u && i.spawn(), "C" == u && (a = t[0]), "D" == u && t[1] && (n = new pa(t[0][0], t[0][1], Dt, Pt), n.setData(t[0]), n.inGame = !0, n.alive = !0, n.x2 = void 0, n.y2 = void 0, n.spawn(1), r = {
                                    x: t[0][3],
                                    y: t[0][4]
                                }, l.inGame = !0, i.sendWS("K", 1), i.first && (i.first = !1, ha.push(l))), "P" == u && (i.spawn(), n.inGame = !1, l.inGame = !1), "9" == u) {
                                let e = t[0];
                                n.tick++, n.enemy = [], n.near = [], o = [];
                                for (let t = 0; t < e.length;) e[t] == n.sid && (n.x2 = e[t + 1], n.y2 = e[t + 2], n.d2 = e[t + 3], n.buildIndex = e[t + 4], n.weaponIndex = e[t + 5], n.weaponVariant = e[t + 6], n.team = e[t + 7], n.isLeader = e[t + 8], n.skinIndex = e[t + 9], n.tailIndex = e[t + 10], n.iconIndex = e[t + 11], n.zIndex = e[t + 12], n.visible = !0, l.x2 = n.x2, l.y2 = n.y2), t += 13;
                                if (l.closeSocket && n.closeSockets(i), "" != l.whyDie && (n.whyDieChat(i, l.whyDie), l.whyDie = ""), n.alive && (R.team && n.team != R.team && n.tick % 9 == 0 && (n.team && i.sendWS("N"), i.sendWS("10", R.team)), n.inGame))
                                    if (s.length > 0)
                                        if (K.length > 0) {
                                            let e = Tt.getDist(K[0], n, 0, 2),
                                                t = Tt.getDirect(K[0], n, 0, 2);
                                            if (o = s.filter((e => e.active && (!!te(K, e.sid) || !(e.trap && (R.sid == e.owner.sid || R.findAllianceBySid(e.owner.sid)))) && e.isItem && Tt.getDist(e, n, 0, 2) <= St.weapons[n.weaponIndex].range + e.scale)).sort((function(e, t) {
                                                    return Tt.getDist(e, n, 0, 2) - Tt.getDist(t, n, 0, 2)
                                                }))[0], o) {
                                                e - Tt.getDist(K[0], o, 0, 0) > 0 ? (te(K, o.sid) || (o.dmg || o.trap || o.teleport) ? null != n.moveDir && (n.moveDir = void 0, i.sendWS("9", n.moveDir)) : (n.moveDir = t, i.sendWS("9", n.moveDir)), n.nDir != Tt.getDirect(o, n, 0, 2) && (n.nDir = Tt.getDirect(o, n, 0, 2), i.sendWS("D", n.nDir)), i.buye(40, 0), i.buye(11, 1)) : (n.moveDir = t, i.sendWS("9", n.moveDir), i.fastGear(), i.buye(11, 1))
                                            } else n.moveDir = t, i.sendWS("9", n.moveDir), i.fastGear(), i.buye(11, 1);
                                            if (e > 300 && Tt.getDist(r, n, 0, 2) > 90) {
                                                let e = Tt.getDirect(r, n, 0, 2);
                                                i.place(3, e + Math.PI / 2.3), i.place(3, e - Math.PI / 2.3), i.place(3, e), r = {
                                                    x: n.x2,
                                                    y: n.y2
                                                }
                                            }
                                        } else null != n.moveDir && (n.moveDir = void 0, i.sendWS("9", n.moveDir)), o = s.filter((e => e.active && (!!te(K, e.sid) || !(e.trap && (R.sid == e.owner.sid || R.findAllianceBySid(e.owner.sid)))) && e.isItem && Tt.getDist(e, n, 0, 2) <= St.weapons[n.weaponIndex].range + e.scale)).sort((function(e, t) {
                                            return Tt.getDist(e, n, 0, 2) - Tt.getDist(t, n, 0, 2)
                                        }))[0], o ? (n.nDir != Tt.getDirect(o, n, 0, 2) && (n.nDir = Tt.getDirect(o, n, 0, 2), i.sendWS("D", n.nDir)), i.buye(40, 0), i.buye(11, 1)) : (i.fastGear(), i.buye(11, 1));
                                else null != n.moveDir && (n.moveDir = void 0, i.sendWS("9", n.moveDir))
                            }
                            if ("H" == u) {
                                let e = t[0];
                                for (let t = 0; t < e.length;) c.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], St.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                                    sid: e[t + 7]
                                } : null), t += 8
                            }
                            if ("N" == u) {
                                let e = t[0],
                                    i = t[1];
                                n && (n[e] = i)
                            }
                            if ("O" == u && t[0] == a && (n.oldHealth = n.health, n.health = t[1], n.judgeShame(), n.oldHealth > n.health && (n.shameCount < 5 ? d() : setTimeout((() => {
                                    d()
                                }), 70))), "Q" == u) {
                                let e = t[0];
                                c.disableBySid(e)
                            }
                            if ("R" == u) {
                                let e = t[0];
                                n.alive && c.removeAllItems(e)
                            }
                            if ("14" == u) {
                                let e = t[0],
                                    i = t[1];
                                n && (n.itemCounts[e] = i)
                            }
                            if ("U" == u && t[0] > 0 && (0 == n.upgraded ? i.sendUpgrade(3) : 1 == n.upgraded ? i.sendUpgrade(17) : 2 == n.upgraded ? i.sendUpgrade(31) : 3 == n.upgraded ? i.sendUpgrade(27) : 4 == n.upgraded ? i.sendUpgrade(9) : 5 == n.upgraded ? i.sendUpgrade(38) : 6 == n.upgraded ? i.sendUpgrade(4) : 7 == n.upgraded && i.sendUpgrade(25), n.upgraded++), "V" == u) {
                                let e = t[0],
                                    a = t[1];
                                e && (a ? n.weapons = e : n.items = e), i.sendWS("G", n.weapons[0], !0)
                            }
                            if ("5" == u) {
                                let e = t[0],
                                    i = t[1];
                                t[2] ? e ? n.latestTail = i : n.tails[i] = 1 : e ? n.latestSkin = i : n.skins[i] = 1
                            }
                        }, i.onclose = function() {
                            n.inGame = !1, l.inGame = !1
                        }
                    }
                    let ya = {
                        draw4: {
                            active: !1,
                            x: 0,
                            y: 0,
                            scale: 0
                        },
                        draw3: {
                            active: !1,
                            x: 0,
                            y: 0,
                            scale: 0
                        },
                        draw2: {
                            active: !1,
                            x: 0,
                            y: 0,
                            scale: 0
                        },
                        draw1: {
                            active: !1,
                            x: 0,
                            y: 0,
                            scale: 0
                        },
                        moveDir: void 0,
                        lastPos: {
                            x: 0,
                            y: 0
                        }
                    };

                    function wa(e, t, i, a, n) {
                        let s = e + i * Math.cos(a),
                            o = t + i * Math.sin(a),
                            l = .4 * i;
                        n.moveTo(e, t), n.beginPath(), n.quadraticCurveTo((e + s) / 2 + l * Math.cos(a + Math.PI / 2), (t + o) / 2 + l * Math.sin(a + Math.PI / 2), s, o), n.quadraticCurveTo((e + s) / 2 - l * Math.cos(a + Math.PI / 2), (t + o) / 2 - l * Math.sin(a + Math.PI / 2), e, t), n.closePath(), n.fill(), n.stroke()
                    }

                    function ka(e, t, i, a, n, s) {
                        (a = a || oe).beginPath(), a.arc(e, t, i, 0, 2 * Math.PI), s || a.fill(), n || a.stroke()
                    }

                    function xa(e, t, i, a) {
                        let n, s, o = Math.PI / 2 * 3,
                            l = Math.PI / t;
                        e.beginPath(), e.moveTo(0, -i);
                        for (let r = 0; r < t; r++) n = Math.cos(o) * i, s = Math.sin(o) * i, e.lineTo(n, s), o += l, n = Math.cos(o) * a, s = Math.sin(o) * a, e.lineTo(n, s), o += l;
                        e.lineTo(0, -i), e.closePath()
                    }

                    function ba(e, t, i, a, n, s, o) {
                        o || n.fillRect(e - i / 2, t - a / 2, i, a), s || n.strokeRect(e - i / 2, t - a / 2, i, a)
                    }

                    function va(e, t, i, a, n, s, o, l) {
                        s.save(), s.translate(e, t), n = Math.ceil(n / 2);
                        for (let e = 0; e < n; e++) ba(0, 0, 2 * i, a, s, o, l), s.rotate(Math.PI / n);
                        s.restore()
                    }

                    function Ta(e, t) {
                        t = t || oe;
                        let i = e * (Math.sqrt(3) / 2);
                        t.beginPath(), t.moveTo(0, -i / 2), t.lineTo(-e / 2, i / 2), t.lineTo(e / 2, i / 2), t.lineTo(0, -i / 2), t.fill(), t.closePath()
                    }

                    function Sa(t, i) {
                        oe.fillStyle = "#91b2db";
                        const a = Date.now();
                        Y.filter((e => e.active)).forEach((n => {
                            n.startTime || (n.startTime = a, n.angle = 0, n.radius = .1, n.fallSpeed = .5);
                            const s = a - n.startTime;
                            n.alpha = Math.max(0, 1 - s / 3e3), n.animate(fe), oe.globalAlpha = n.alpha, oe.strokeStyle = _e, oe.save(), oe.translate(n.x - t, n.y - i), n.fallSpeed += .05, n.y += n.fallSpeed, n.angle += .05, oe.rotate(n.angle),
                                function(t, i) {
                                    (i = i || oe).lineWidth = Be, i.lineJoin = "miter";
                                    let a = Math.PI / 4 * (St.weapons[t.weaponIndex].armS || 1),
                                        n = t.buildIndex < 0 && St.weapons[t.weaponIndex].hndS || 1,
                                        s = t.buildIndex < 0 && St.weapons[t.weaponIndex].hndD || 1;
                                    t.buildIndex < 0 && !St.weapons[t.weaponIndex].aboveHand && (Ba(St.weapons[t.weaponIndex], e.weaponVariants[t.weaponVariant].src, t.scale, 0, i), null == St.weapons[t.weaponIndex].projectile || St.weapons[t.weaponIndex].hideProjectile || La(t.scale, 0, St.projectiles[St.weapons[t.weaponIndex].projectile], oe));
                                    i.fillStyle = e.skinColors[t.skinColor], ka(t.scale * Math.cos(a), t.scale * Math.sin(a), 14), ka(t.scale * s * Math.cos(-a * n), t.scale * s * Math.sin(-a * n), 14), t.buildIndex < 0 && St.weapons[t.weaponIndex].aboveHand && (Ba(St.weapons[t.weaponIndex], e.weaponVariants[t.weaponVariant].src, t.scale, 0, i), null == St.weapons[t.weaponIndex].projectile || St.weapons[t.weaponIndex].hideProjectile || La(t.scale, 0, St.projectiles[St.weapons[t.weaponIndex].projectile], oe));
                                    if (t.buildIndex >= 0) {
                                        var o = Va(St.list[t.buildIndex]);
                                        i.drawImage(o, t.scale - St.list[t.buildIndex].holdOffset, -o.width / 2)
                                    }
                                    ka(0, 0, t.scale, i), i.lineWidth = 2, i.fillStyle = "#555", i.font = "35px Hammersmith One", i.textBaseline = "middle", i.textAlign = "center", i.fillText("(", 20, 5), i.rotate(Math.PI / 2), i.font = "30px Hammersmith One", i.fillText("E", -15, 7.5), i.fillText("Z", 15, 7.5)
                                }(n, oe), oe.restore(), oe.fillStyle = "#91b2db", s >= 3e3 && (n.active = !1, n.startTime = null)
                        }))
                    }

                    function Ia(e, t, i) {
                        oe.globalAlpha = 1, oe.fillStyle = "#91b2db";
                        for (var a = 0; a < G.length; ++a) L = G[a], L.zIndex == i && (L.animate(fe), L.visible && (L.skinRot += .002 * fe, ke = l.showDir || M || L != R ? L.dir || 0 : l.attackDir ? R ? (Z.autoAim || (pi.left || M && Q.dist2 <= St.weapons[R.weapons[0]].range + 1.8 * Q.scale && !_t.inTrap) && 0 == R.reloads[R.weapons[0]] ? xe = getEl("weaponGrind").checked ? mi() : X.length ? Z.revAim ? Q.aim2 + Math.PI : Q.aim2 : mi() : pi.right && 0 == R.reloads[10 == R.weapons[1] ? R.weapons[1] : R.weapons[0]] ? xe = mi() : !Et.isTrue && vt && 0 == R.reloads[Ut() ? R.weapons[1] : R.weapons[0]] ? xe = aimSpike : _t.inTrap && 0 == R.reloads[_t.notFast() ? R.weapons[1] : R.weapons[0]] ? xe = _t.aim : R.lockDir || (xe = mi()), xe || 0) : 0 : mi(), oe.save(), oe.translate(L.x - e, L.y - t), oe.rotate(ke + L.dirPlus), Ma(L, oe), oe.restore()))
                    }

                    function Ma(t, i) {
                        (i = i || oe).lineWidth = Be, i.lineJoin = "miter";
                        let a = Math.PI / 4 * (St.weapons[t.weaponIndex].armS || 1),
                            n = t.buildIndex < 0 && St.weapons[t.weaponIndex].hndS || 1,
                            s = t.buildIndex < 0 && St.weapons[t.weaponIndex].hndD || 1,
                            o = t == R && 3 == t.weapons[0] && 15 == t.weapons[1];
                        if (t.tailIndex > 0 && function(e, t, i) {
                                if (Da = Ca[e], !Da) {
                                    let t = new Image;
                                    t.onload = function() {
                                        this.isLoaded = !0, this.onload = null
                                    }, t.src = "https://moomoo.io/img/accessories/access_" + e + ".png", Ca[e] = t, Da = t
                                }
                                let a = _a[e];
                                if (!a) {
                                    for (let t = 0; t < Pt.length; ++t)
                                        if (Pt[t].id == e) {
                                            a = Pt[t];
                                            break
                                        }
                                    _a[e] = a
                                }
                                Da.isLoaded && (t.save(), t.translate(-20 - (a.xOff || 0), 0), a.spin && t.rotate(i.skinRot), t.drawImage(Da, -a.scale / 2, -a.scale / 2, a.scale, a.scale), t.restore())
                            }(t.tailIndex, i, t), t.buildIndex < 0 && !St.weapons[t.weaponIndex].aboveHand && (Ba(St.weapons[o ? 4 : t.weaponIndex], e.weaponVariants[t.weaponVariant].src, t.scale, 0, i), null == St.weapons[t.weaponIndex].projectile || St.weapons[t.weaponIndex].hideProjectile || La(t.scale, 0, St.projectiles[St.weapons[t.weaponIndex].projectile], oe)), i.fillStyle = e.skinColors[t.skinColor], ka(t.scale * Math.cos(a), t.scale * Math.sin(a), 14), ka(t.scale * s * Math.cos(-a * n), t.scale * s * Math.sin(-a * n), 14), t.buildIndex < 0 && St.weapons[t.weaponIndex].aboveHand && (Ba(St.weapons[t.weaponIndex], e.weaponVariants[t.weaponVariant].src, t.scale, 0, i), null == St.weapons[t.weaponIndex].projectile || St.weapons[t.weaponIndex].hideProjectile || La(t.scale, 0, St.projectiles[St.weapons[t.weaponIndex].projectile], oe)), t.buildIndex >= 0) {
                            var l = Va(St.list[t.buildIndex]);
                            i.drawImage(l, t.scale - St.list[t.buildIndex].holdOffset, -l.width / 2)
                        }
                        ka(0, 0, t.scale, i), t.skinIndex > 0 && (i.rotate(Math.PI / 2), Oa(t.skinIndex, i, null, t))
                    }
                    let Da, Pa = {},
                        Aa = {};

                    function Oa(e, t, i, a) {
                        if (Da = Pa[e], !Da) {
                            let t = new Image;
                            t.onload = function() {
                                this.isLoaded = !0, this.onload = null
                            }, t.src = "https://moomoo.io/img/hats/hat_" + e + ".png", Pa[e] = t, Da = t
                        }
                        let n = i || Aa[e];
                        if (!n) {
                            for (let t = 0; t < Dt.length; ++t)
                                if (Dt[t].id == e) {
                                    n = Dt[t];
                                    break
                                }
                            Aa[e] = n
                        }
                        Da.isLoaded && t.drawImage(Da, -n.scale / 2, -n.scale / 2, n.scale, n.scale), !i && n.topSprite && (t.save(), t.rotate(a.skinRot), Oa(e + "_top", t, n, a), t.restore())
                    }
                    let Ca = {},
                        _a = {};
                    let Ea = {};

                    function Ba(e, t, i, a, n) {
                        let s = e.src + (t || ""),
                            o = Ea[s];
                        o || (o = new Image, o.onload = function() {
                            this.isLoaded = !0
                        }, o.src = "https://moomoo.io/img/weapons/" + s + ".png", Ea[s] = o), o.isLoaded && n.drawImage(o, i + e.xOff - e.length / 2, a + e.yOff - e.width / 2, e.length, e.width)
                    }

                    function Ra(e, t, i) {
                        for (let a = 0; a < U.length; a++) L = U[a], L.active && L.layer == e && L.inWindow && (L.update(fe), L.active && Ua(L.x - t, L.y - i, L.scale) && (oe.save(), oe.translate(L.x - t, L.y - i), oe.rotate(L.dir), La(0, 0, L, oe, 1), oe.restore()))
                    }
                    let Ha = {};

                    function La(e, t, i, a, n) {
                        if (i.src) {
                            let n = St.projectiles[i.indx].src,
                                s = Ha[n];
                            s || (s = new Image, s.onload = function() {
                                this.isLoaded = !0
                            }, s.src = "https://moomoo.io/img/weapons/" + n + ".png", Ha[n] = s), s.isLoaded && a.drawImage(s, e - i.scale / 2, t - i.scale / 2, i.scale, i.scale)
                        } else 1 == i.indx && (a.fillStyle = "#939393", ka(e, t, i.scale, a))
                    }
                    let Fa = {};

                    function ja(e, t) {
                        let i = e.index,
                            a = Fa[i];
                        if (!a) {
                            let t = new Image;
                            t.onload = function() {
                                this.isLoaded = !0, this.onload = null
                            }, t.src = "https://moomoo.io/img/animals/" + e.src + ".png", a = t, Fa[i] = a
                        }
                        if (a.isLoaded) {
                            let i = 1.2 * e.scale * (e.spriteMlt || 1);
                            t.drawImage(a, -i, -i, 2 * i, 2 * i)
                        }
                    }

                    function za(t, i, a, n) {
                        let s = e.riverWidth + n,
                            o = e.mapScale / 2 - i - s / 2;
                        o < Ie && o + s > 0 && a.fillRect(0, o, Se, s)
                    }
                    let Ga = {};

                    function Wa(t) {
                        let i = t.y >= e.mapScale - e.snowBiomeTop ? 2 : t.y <= e.snowBiomeTop ? 1 : 0,
                            a = t.type + "_" + t.scale + "_" + i,
                            n = Ga[a];
                        if (!n) {
                            let e = 15,
                                s = document.createElement("canvas");
                            s.width = s.height = 2.1 * t.scale + Be;
                            let o = s.getContext("2d");
                            if (o.translate(s.width / 2, s.height / 2), o.rotate(Tt.randFloat(0, Math.PI)), o.strokeStyle = _e, o.lineWidth = Be, Re && (o.shadowBlur = e, o.shadowColor = `rgba(0, 0, 0, ${t.alpha})`), 0 == t.type) {
                                let e, t = Tt.randInt(5, 7);
                                o.globalAlpha = Re ? .6 : .8;
                                for (let a = 0; a < 2; ++a) e = L.scale * (a ? .5 : 1), xa(o, t, e, .7 * e), o.fillStyle = i ? a ? "#fff" : "#e3f1f4" : a ? "#b4db62" : "#9ebf57", o.fill(), a || (o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.globalAlpha = 1)
                            } else if (1 == t.type)
                                if (2 == i) o.fillStyle = "#606060", xa(o, 6, .3 * t.scale, .71 * t.scale), o.fill(), o.stroke(), o.fillStyle = "#89a54c", ka(0, 0, .55 * t.scale, o), o.fillStyle = "#a5c65b", ka(0, 0, .3 * t.scale, o, !0);
                                else {
                                    let e;
                                    ! function(e, t, i, a) {
                                        let n, s = Math.PI / 2 * 3,
                                            o = Math.PI / t;
                                        e.beginPath(), e.moveTo(0, -a);
                                        for (let l = 0; l < t; l++) n = Tt.randInt(i + .9, 1.2 * i), e.quadraticCurveTo(Math.cos(s + o) * n, Math.sin(s + o) * n, Math.cos(s + 2 * o) * a, Math.sin(s + 2 * o) * a), s += 2 * o;
                                        e.lineTo(0, -a), e.closePath()
                                    }(o, 6, L.scale, .7 * L.scale), o.fillStyle = i ? "#e3f1f4" : "#89a54c", o.fill(), o.stroke(), o.fillStyle = i ? "#6a64af" : "#c15555";
                                    let t = 4,
                                        a = 2 * Math.PI / t;
                                    for (let i = 0; i < t; ++i) e = Tt.randInt(L.scale / 3.5, L.scale / 2.3), ka(e * Math.cos(a * i), e * Math.sin(a * i), Tt.randInt(10, 12), o)
                                } else 2 != t.type && 3 != t.type || (o.fillStyle = 2 == t.type ? 2 == i ? "#938d77" : "#939393" : "#e0c655", xa(o, 3, t.scale, t.scale), o.fill(), o.stroke(), o.shadowBlur = null, o.shadowColor = null, o.fillStyle = 2 == t.type ? 2 == i ? "#b2ab90" : "#bcbcbc" : "#ebdca3", xa(o, 3, .55 * t.scale, .65 * t.scale), o.fill());
                            n = s, Ga[a] = n
                        }
                        return n
                    }
                    let qa = [];

                    function Va(t, i) {
                        let a = qa[t.id];
                        if (!a || i) {
                            let l = !i && Re ? 15 : 0,
                                r = document.createElement("canvas"),
                                c = i || "windmill" != t.name ? t.scale : St.list[4].scale;
                            if (r.width = r.height = 2.5 * c + Be + (St.list[t.id].spritePadding || 0) + l, e.useWebGl) {
                                let d = r.getContext("webgl");
                                d.clearColor(0, 0, 0, 0), d.clear(d.COLOR_BUFFER_BIT);
                                let h = d.createBuffer();

                                function n(e, t, i, a) {
                                    let n = d.createShader(d.VERTEX_SHADER);
                                    d.shaderSource(n, e), d.compileShader(n), d.getShaderParameter(n, d.COMPILE_STATUS);
                                    let s = d.createShader(d.FRAGMENT_SHADER);
                                    d.shaderSource(s, t), d.compileShader(s), d.getShaderParameter(s, d.COMPILE_STATUS);
                                    let o = d.createProgram();
                                    d.attachShader(o, n), d.attachShader(o, s), d.linkProgram(o), d.getProgramParameter(o, d.LINK_STATUS), d.useProgram(o);
                                    let l = d.getAttribLocation(o, "vertex");
                                    d.enableVertexAttribArray(l), d.vertexAttribPointer(l, 2, d.FLOAT, !1, 0, 0);
                                    let r = i.length / 2;
                                    d.bufferData(d.ARRAY_BUFFER, new Float32Array(i), d.DYNAMIC_DRAW), d.drawArrays(a, 0, r)
                                }

                                function s(e, t, i) {
                                    return [e / 255, t / 255, i / 255].join(", ")
                                }
                                d.bindBuffer(d.ARRAY_BUFFER, h);
                                let u = 100;
                                for (let p = 0; p < u; p++) {
                                    let m = Math.PI * (p / (u / 2));
                                    n("\n                            precision mediump float;\n                            attribute vec2 vertex;\n                            void main(void) {\n                                gl_Position = vec4(vertex, 0, 1);\n                            }\n                            ", `\n                            precision mediump float;\n                            void main(void) {\n                                gl_FragColor = vec4(${s(...(o="#fff",o.slice(1).match(/.{1,2}/g).map((e=>parseInt(e,16)))))}, 1);\n                            }\n                            `, [0 + .5 * Math.cos(m), 0 + .5 * Math.sin(m), 0, 0], d.LINE_LOOP)
                                }
                            } else {
                                let f = r.getContext("2d");
                                if (f.translate(r.width / 2, r.height / 2), f.rotate(i ? 0 : Math.PI / 2), f.strokeStyle = _e, f.lineWidth = Be * (i ? r.width / 81 : 1), Re && !i && (f.shadowBlur = l, f.shadowColor = `rgba(0, 0, 0, ${Math.min("pit trap"==t.name?.6:.3,t.alpha)})`), "apple" == t.name) {
                                    f.fillStyle = "#c15555", ka(0, 0, t.scale, f), f.fillStyle = "#89a54c";
                                    let g = -Math.PI / 2;
                                    wa(t.scale * Math.cos(g), t.scale * Math.sin(g), 25, g + Math.PI / 2, f)
                                } else if ("cookie" == t.name) {
                                    f.fillStyle = "#cca861", ka(0, 0, t.scale, f), f.fillStyle = "#937c4b";
                                    let y, w = 4,
                                        k = 2 * Math.PI / w;
                                    for (let x = 0; x < w; ++x) y = Tt.randInt(t.scale / 2.5, t.scale / 1.7), ka(y * Math.cos(k * x), y * Math.sin(k * x), Tt.randInt(4, 5), f, !0)
                                } else if ("cheese" == t.name) {
                                    f.fillStyle = "#f4f3ac", ka(0, 0, t.scale, f), f.fillStyle = "#c3c28b";
                                    let b, v = 4,
                                        T = 2 * Math.PI / v;
                                    for (let S = 0; S < v; ++S) b = Tt.randInt(t.scale / 2.5, t.scale / 1.7), ka(b * Math.cos(T * S), b * Math.sin(T * S), Tt.randInt(4, 5), f, !0)
                                } else if ("wood wall" == t.name || "stone wall" == t.name || "castle wall" == t.name) {
                                    f.fillStyle = "castle wall" == t.name ? "#83898e" : "wood wall" == t.name ? "#a5974c" : "#939393";
                                    let I = "castle wall" == t.name ? 4 : 3;
                                    xa(f, I, 1.1 * t.scale, 1.1 * t.scale), f.fill(), f.stroke(), f.fillStyle = "castle wall" == t.name ? "#9da4aa" : "wood wall" == t.name ? "#c9b758" : "#bcbcbc", xa(f, I, .65 * t.scale, .65 * t.scale), f.fill()
                                } else if ("spikes" == t.name || "greater spikes" == t.name || "poison spikes" == t.name || "spinning spikes" == t.name) {
                                    f.fillStyle = "poison spikes" == t.name ? "#7b935d" : "#939393";
                                    let M = .6 * t.scale;
                                    xa(f, "spikes" == t.name ? 5 : 6, t.scale, M), f.fill(), f.stroke(), f.fillStyle = "#a5974c", ka(0, 0, M, f), f.fillStyle = "#c9b758", ka(0, 0, M / 2, f, !0)
                                } else if ("windmill" == t.name || "faster windmill" == t.name || "power mill" == t.name) f.fillStyle = "#a5974c", ka(0, 0, c, f), f.fillStyle = "#c9b758", va(0, 0, 1.5 * c, 29, 4, f), f.fillStyle = "#a5974c", ka(0, 0, .5 * c, f);
                                else if ("mine" == t.name) f.fillStyle = "#939393", xa(f, 3, t.scale, t.scale), f.fill(), f.stroke(), f.fillStyle = "#bcbcbc", xa(f, 3, .55 * t.scale, .65 * t.scale), f.fill();
                                else if ("sapling" == t.name)
                                    for (let D = 0; D < 2; ++D) {
                                        let P = t.scale * (D ? .5 : 1);
                                        xa(f, 7, P, .7 * P), f.fillStyle = D ? "#b4db62" : "#9ebf57", f.fill(), D || f.stroke()
                                    } else if ("pit trap" == t.name) f.fillStyle = "#a5974c", xa(f, 3, 1.1 * t.scale, 1.1 * t.scale), f.fill(), f.stroke(), f.fillStyle = _e, xa(f, 3, .65 * t.scale, .65 * t.scale), f.fill();
                                    else if ("boost pad" == t.name) f.fillStyle = "#7e7f82", ba(0, 0, 2 * t.scale, 2 * t.scale, f), f.fill(), f.stroke(), f.fillStyle = "#dbd97d", Ta(1 * t.scale, f);
                                else if ("turret" == t.name) {
                                    f.fillStyle = "#a5974c", ka(0, 0, t.scale, f), f.fill(), f.stroke(), f.fillStyle = "#939393";
                                    let A = 50;
                                    ba(0, -A / 2, .9 * t.scale, A, f), ka(0, 0, .6 * t.scale, f), f.fill(), f.stroke()
                                } else if ("platform" == t.name) {
                                    f.fillStyle = "#cebd5f";
                                    let O = 4,
                                        C = 2 * t.scale,
                                        _ = C / O,
                                        E = -t.scale / 2;
                                    for (let B = 0; B < O; ++B) ba(E - _ / 2, 0, _, 2 * t.scale, f), f.fill(), f.stroke(), E += C / O
                                } else "healing pad" == t.name ? (f.fillStyle = "#7e7f82", ba(0, 0, 2 * t.scale, 2 * t.scale, f), f.fill(), f.stroke(), f.fillStyle = "#db6e6e", va(0, 0, .65 * t.scale, 20, 4, f, !0)) : "spawn pad" == t.name ? (f.fillStyle = "#7e7f82", ba(0, 0, 2 * t.scale, 2 * t.scale, f), f.fill(), f.stroke(), f.fillStyle = "#71aad6", ka(0, 0, .6 * t.scale, f)) : "blocker" == t.name ? (f.fillStyle = "#7e7f82", ka(0, 0, t.scale, f), f.fill(), f.stroke(), f.rotate(Math.PI / 4), f.fillStyle = "#db6e6e", va(0, 0, .65 * t.scale, 20, 4, f, !0)) : "teleporter" == t.name && (f.fillStyle = "#7e7f82", ka(0, 0, t.scale, f), f.fill(), f.stroke(), f.rotate(Math.PI / 4), f.fillStyle = "#d76edb", ka(0, 0, .5 * t.scale, f, !0))
                            }
                            a = r, i || (qa[t.id] = a)
                        }
                        var o;
                        return a
                    }
                    let Na = [];

                    function $a(e, t, i, a, n, s) {
                        if (t.lineWidth = Be, oe.globalAlpha = .275, t.strokeStyle = _e, t.save(), t.translate(i, a), t.rotate(e.dir || fi()), "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                            t.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                            var o = .6 * e.scale;
                            xa(t, "spikes" == e.name ? 5 : 6, e.scale, o), t.fill(), t.stroke(), t.fillStyle = "#a5974c", ka(0, 0, o, t), R && e.owner && R.sid != e.owner.sid && !L.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = "#c9b758", ka(0, 0, o / 2, t, !0)
                        } else if ("turret" == e.name) {
                            ka(0, 0, e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#939393";
                            let i = 50;
                            ba(0, -i / 2, .9 * e.scale, i, t), ka(0, 0, .6 * e.scale, t), t.fill(), t.stroke()
                        } else if ("teleporter" == e.name) t.fillStyle = "#7e7f82", ka(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#d76edb", ka(0, 0, .5 * e.scale, t, !0);
                        else if ("platform" == e.name) {
                            t.fillStyle = "#cebd5f";
                            let i = 4,
                                a = 2 * e.scale,
                                n = a / i,
                                s = -e.scale / 2;
                            for (let o = 0; o < i; ++o) ba(s - n / 2, 0, n, 2 * e.scale, t), t.fill(), t.stroke(), s += a / i
                        } else "healing pad" == e.name ? (t.fillStyle = "#7e7f82", ba(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#db6e6e", va(0, 0, .65 * e.scale, 20, 4, t, !0)) : "spawn pad" == e.name ? (t.fillStyle = "#7e7f82", ba(0, 0, 2 * e.scale, 2 * e.scale, t), t.fill(), t.stroke(), t.fillStyle = "#71aad6", ka(0, 0, .6 * e.scale, t)) : "blocker" == e.name ? (t.fillStyle = "#7e7f82", ka(0, 0, e.scale, t), t.fill(), t.stroke(), t.rotate(Math.PI / 4), t.fillStyle = "#db6e6e", va(0, 0, .65 * e.scale, 20, 4, t, !0)) : "windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name ? (t.fillStyle = "#a5974c", ka(0, 0, e.scale, t), t.fillStyle = "#c9b758", va(0, 0, 1.5 * e.scale, 29, 4, t), t.fillStyle = "#a5974c", ka(0, 0, .5 * e.scale, t)) : "pit trap" == e.name && (t.fillStyle = "#a5974c", xa(t, 3, 1.1 * e.scale, 1.1 * e.scale), t.fill(), t.stroke(), R && e.owner && R.sid != e.owner.sid && !L.findAllianceBySid(e.owner.sid) ? t.fillStyle = "#a34040" : t.fillStyle = _e, xa(t, 3, .65 * e.scale, .65 * e.scale), t.fill());
                        t.restore()
                    }

                    function Ua(e, t, i) {
                        return e + i >= 0 && e - i <= Se && t + i >= 0 && Ie
                    }

                    function Ya(e, t, i) {
                        let a, n, s;
                        V.forEach((o => {
                            if (L = o, L.alive && (n = L.x + L.xWiggle - t, s = L.y + L.yWiggle - i, 0 == e && L.update(fe), oe.globalAlpha = L.alpha, L.layer == e && Ua(n, s, L.scale + (L.blocker || 0)) && (L.isItem ? (a = !L.dmg && !L.trap || L.isTeamObject(R) ? Va(L) : function(e) {
                                    let t = Na[e.id];
                                    if (!t) {
                                        let i = Re ? 15 : 0,
                                            a = document.createElement("canvas");
                                        a.width = a.height = 2.5 * e.scale + Be + (St.list[e.id].spritePadding || 0) + i;
                                        let n = a.getContext("2d");
                                        if (n.translate(a.width / 2, a.height / 2), n.rotate(Math.PI / 2), n.strokeStyle = _e, n.lineWidth = Be, Re && (n.shadowBlur = i, n.shadowColor = `rgba(0, 0, 0, ${Math.min(.3,e.alpha)})`), "spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                                            n.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                                            let t = .6 * e.scale;
                                            xa(n, "spikes" == e.name ? 5 : 6, e.scale, t), n.fill(), n.stroke(), n.fillStyle = "#a5974c", ka(0, 0, t, n), n.fillStyle = "#cc5151", ka(0, 0, t / 2, n, !0)
                                        } else "pit trap" == e.name && (n.fillStyle = "#a5974c", xa(n, 3, 1.1 * e.scale, 1.1 * e.scale), n.fill(), n.stroke(), n.fillStyle = "#cc5151", xa(n, 3, .65 * e.scale, .65 * e.scale), n.fill());
                                        t = a, Na[e.id] = t
                                    }
                                    return t
                                }(L), oe.save(), oe.translate(n, s), oe.rotate(L.dir), L.active || oe.scale(L.visScale / L.scale, L.visScale / L.scale), oe.drawImage(a, -a.width / 2, -a.height / 2), L.blocker && (oe.strokeStyle = "#db6e6e", oe.globalAlpha = .3, oe.lineWidth = 6, ka(0, 0, L.blocker, oe, !1, !0)), oe.restore()) : (a = Wa(L), oe.drawImage(a, n - a.width / 2, s - a.height / 2))), 3 == e && !M && L.health < L.maxHealth)) {
                                const e = L.health / L.maxHealth * 360 * (Math.PI / 180),
                                    t = 22;
                                oe.save(), oe.lineWidth = 9, oe.lineCap = "round", oe.translate(n, s), oe.beginPath(), oe.arc(0, 0, t, 0, e), oe.stroke(), oe.restore(), oe.save(), oe.strokeStyle = L.isTeamObject(R) ? "#8ecc51" : "#cc5151", oe.lineCap = "round", oe.translate(n, s), oe.beginPath(), oe.arc(0, 0, t, 0, e), oe.stroke(), oe.restore()
                            }
                        })), 0 == e && Ne.length && Ne.forEach((e => {
                            n = e.x - t, s = e.y - i,
                                function(e, t, i) {
                                    $a(e, oe, t, i)
                                }(e, n, s)
                        }))
                    }
                    class Ka {
                        constructor(t, i) {
                            this.init = function(e, t) {
                                this.scale = 0, this.x = e, this.y = t, this.active = !0
                            }, this.update = function(t, a) {
                                this.active && (this.scale += .05 * a, this.scale >= i ? this.active = !1 : (t.globalAlpha = 1 - Math.max(0, this.scale / i), t.beginPath(), t.arc(this.x / e.mapScale * le.width, this.y / e.mapScale * le.width, this.scale, 0, 2 * Math.PI), t.stroke()))
                            }, this.color = t
                        }
                    }

                    function Xa(t, i) {
                        xt = Ht.find((e => !e.active)), xt || (xt = new Ka("#fff", e.mapPingScale), Ht.push(xt)), xt.init(t, i)
                    }
                    let Ja = ["https://cdn.discordapp.com/attachments/1001384433078779927/1149285738412769300/newawwddd.png", "https://cdn.discordapp.com/attachments/1001384433078779927/1149285168780165170/100px-Crosshairs_Red.png"],
                        Qa = {},
                        Za = {},
                        en = ["crown", "skull"];

                    function tn() {
                        V.length && ze && V.forEach((e => {
                            if (Tt.getDistance(e.x, e.y, R.x, R.y) <= 1200) N.includes(e) || (N.push(e), e.render = !0);
                            else if (N.includes(e)) {
                                if (Tt.getDistance(e.x, e.y, R.x, R.y) >= 1200) {
                                    e.render = !1;
                                    const t = N.indexOf(e);
                                    t > -1 && N.splice(t, 1)
                                }
                            } else if (Tt.getDistance(e.x, e.y, R.x, R.y) >= 1200) {
                                e.render = !1;
                                const t = N.indexOf(e);
                                t > -1 && N.splice(t, 1)
                            } else {
                                e.render = !1;
                                const t = N.indexOf(e);
                                t > -1 && N.splice(t, 1)
                            }
                        })), e.resetRender && (oe.clearRect(0, 0, se.width, se.height), oe.beginPath()); {
                            if (R) {
                                let e = .0325;
                                ye += (R.x - ye) * e, we += (R.y - we) * e
                            } else ye = e.mapScale / 2, we = e.mapScale / 2;
                            let t, i = ge - 1e3 / e.serverUpdateRate;
                            for (let a = 0; a < G.length + z.length; ++a)
                                if (L = G[a] || z[a - G.length], L && L.visible)
                                    if (L.forcePos) L.x = L.x2, L.y = L.y2, L.dir = L.d2;
                                    else {
                                        let a = L.t2 - L.t1,
                                            n = (i - L.t1) / a,
                                            s = 170;
                                        L.dt += fe;
                                        let o = Math.min(1.7, L.dt / s);
                                        t = L.x2 - L.x1, L.x = L.x1 + t * o, t = L.y2 - L.y1, L.y = L.y1 + t * o, e.anotherVisual, L.dir = Math.lerpAngle(L.d2, L.d1, Math.min(1.2, n))
                                    }
                            let a = ye - Se / 2,
                                n = we - Ie / 2;
                            if (e.snowBiomeTop - n <= 0 && e.mapScale - e.snowBiomeTop - n >= Ie ? (oe.fillStyle = "#b6db66", oe.fillRect(0, 0, Se, Ie)) : e.mapScale - e.snowBiomeTop - n <= 0 ? (oe.fillStyle = "#dbc666", oe.fillRect(0, 0, Se, Ie)) : e.snowBiomeTop - n >= Ie ? (oe.fillStyle = "#fff", oe.fillRect(0, 0, Se, Ie)) : e.snowBiomeTop - n >= 0 ? (oe.fillStyle = "#fff", oe.fillRect(0, 0, Se, e.snowBiomeTop - n), oe.fillStyle = "#b6db66", oe.fillRect(0, e.snowBiomeTop - n, Se, Ie - (e.snowBiomeTop - n))) : (oe.fillStyle = "#b6db66", oe.fillRect(0, 0, Se, e.mapScale - e.snowBiomeTop - n), oe.fillStyle = "#dbc666", oe.fillRect(0, e.mapScale - e.snowBiomeTop - n, Se, Ie - (e.mapScale - e.snowBiomeTop - n))), He || (Oe += Ce * e.waveSpeed * fe, Oe >= e.waveMax ? (Oe = e.waveMax, Ce = -1) : Oe <= 1 && (Oe = Ce = 1), oe.globalAlpha = 1, oe.fillStyle = "#dbc666", za(0, n, oe, e.riverPadding), oe.fillStyle = "#91b2db", za(0, n, oe, 250 * (Oe - 1))), "ueh1" != getEl("visualType").value) {
                                oe.lineWidth = 4, oe.strokeStyle = "#000", oe.globalAlpha = .06, oe.beginPath();
                                for (let e = -ye; e < Se; e += M ? 60 : 120) e > 0 && (oe.moveTo(e, 0), oe.lineTo(e, Ie));
                                for (let e = -we; e < Ie; e += M ? 60 : 120) e > 0 && (oe.moveTo(0, e), oe.lineTo(Se, e));
                                oe.stroke()
                            }
                            R && wt && (oe.globalAlpha = 1, oe.fillStyle = "#fc5553", oe.font = "100px Hammersmith One", oe.textBaseline = "middle", oe.textAlign = "center", oe.fillText("x", wt.x - a, wt.y - n)), oe.globalAlpha = 1, oe.strokeStyle = _e, Sa(a, n), oe.globalAlpha = 1, oe.strokeStyle = _e, Ya(-1, a, n), oe.globalAlpha = 1, oe.lineWidth = Be, Ra(0, a, n), Ia(a, n, 0), oe.globalAlpha = 1;
                            for (let e = 0; e < z.length; ++e) L = z[e], L.active && L.visible && (L.animate(fe), oe.save(), oe.translate(L.x - a, L.y - n), oe.rotate(L.dir + L.dirPlus - Math.PI / 2), ja(L, oe), oe.restore());
                            if (Ya(0, a, n), Ra(1, a, n), Ya(1, a, n), Ia(a, n, 1), Ya(2, a, n), Ya(3, a, n), oe.fillStyle = "#000", oe.globalAlpha = .09, a <= 0 && oe.fillRect(0, 0, -a, Ie), e.mapScale - a <= Se) {
                                let t = Math.max(0, -n);
                                oe.fillRect(e.mapScale - a, t, Se - (e.mapScale - a), Ie - t)
                            }
                            if (n <= 0 && oe.fillRect(-a, 0, Se + a, -n), e.mapScale - n <= Ie) {
                                let t = Math.max(0, -a),
                                    i = 0;
                                e.mapScale - a <= Se && (i = Se - (e.mapScale - a)), oe.fillRect(t, e.mapScale - n, Se - t - i, Ie - (e.mapScale - n))
                            }
                            if (ya.draw4.active) {
                                oe.globalAlpha = 1;
                                ya.draw4.x, ya.draw4.y, ya.draw4.scale;
                                oe.strokeStyle = "#00FFFF", oe.beginPath(), oe.arc(Q.x2, Q.y2, Q.scale, 0, 2 * Math.PI), oe.stroke()
                            }
                            if (ya.draw3.active) {
                                oe.globalAlpha = .35;
                                let e = {
                                    x: ya.draw3.x - a,
                                    y: ya.draw3.y - n,
                                    scale: ya.draw3.scale
                                };
                                oe.strokeStyle = "#FF0000", oe.fillStyle = "#FF0000", oe.beginPath(), oe.arc(e.x, e.y, e.scale, 0, 2 * Math.PI), oe.fill()
                            }
                            if (ya.draw2.active) {
                                oe.globalAlpha = 1;
                                let e = {
                                    x: ya.draw2.x - a,
                                    y: ya.draw2.y - n,
                                    scale: ya.draw2.scale
                                };
                                oe.strokeStyle = "#ffff00", oe.beginPath(), oe.arc(e.x, e.y, e.scale, 0, 2 * Math.PI), oe.stroke()
                            }
                            if (ya.draw1.active) {
                                oe.globalAlpha = 1;
                                let e = {
                                    x: ya.draw1.x - a,
                                    y: ya.draw1.y - n,
                                    scale: 5
                                };
                                oe.fillStyle = "#00FFFF", oe.beginPath(), oe.arc(e.x, e.y, e.scale, 0, 2 * Math.PI), oe.fill()
                            }
                            oe.globalAlpha = 1, oe.fillStyle = "rgba(0, 0, 70, 0.35)", oe.fillRect(0, 0, Se, Ie), oe.strokeStyle = Ee, oe.globalAlpha = 1;
                            for (let t = 0; t < G.length + z.length; ++t)
                                if (L = G[t] || z[t - G.length], L.visible && (oe.strokeStyle = Ee, 10 != L.skinIndex || L == R || L.team && L.team == R.team)) {
                                    let t = (L.team ? "[" + L.team + "] " : "") + (L.name || "") + (L.isPlayer ? " {" + L.sid + "}" : "");
                                    if (l.names) {
                                        if (oe.font = (L.nameScale || 30) + "px Hammersmith One", oe.fillStyle = "#fff", oe.textBaseline = "middle", oe.textAlign = "center", oe.lineWidth = L.nameScale ? 11 : 8, oe.lineJoin = "round", oe.strokeText(t, L.x - a, L.y - n - L.scale - e.nameY), oe.fillText(t, L.x - a, L.y - n - L.scale - e.nameY), L.isLeader && Za.crown.isLoaded) {
                                            let i = e.crownIconScale,
                                                s = L.x - a - i / 2 - oe.measureText(t).width / 2 - e.crownPad;
                                            oe.drawImage(Za.crown, s, L.y - n - L.scale - e.nameY - i / 2 - 5, i, i)
                                        }
                                        if (1 == L.iconIndex && Za.skull.isLoaded) {
                                            let i = e.crownIconScale,
                                                s = L.x - a - i / 2 + oe.measureText(t).width / 2 + e.crownPad;
                                            oe.drawImage(Za.skull, s, L.y - n - L.scale - e.nameY - i / 2 - 5, i, i)
                                        }
                                        if (L.isPlayer && Et.wait && Q == L && (L.backupNobull ? Qa[1].isLoaded : Qa[0].isLoaded) && X.length && !M) {
                                            let e = 2.2 * L.scale;
                                            oe.drawImage(L.backupNobull ? Qa[1] : Qa[0], L.x - a - e / 2, L.y - n - e / 2, e, e)
                                        }
                                    }
                                    if (L.health > 0 && (oe.fillStyle = Ee, oe.roundRect(L.x - a - e.healthBarWidth - e.healthBarPad, L.y - n + L.scale + e.nameY, 2 * e.healthBarWidth + 2 * e.healthBarPad, 17, 8), oe.fill(), oe.fillStyle = L == R || L.team && L.team == R.team ? "#8ecc51" : "#cc5151", oe.roundRect(L.x - a - e.healthBarWidth, L.y - n + L.scale + e.nameY + e.healthBarPad, 2 * e.healthBarWidth * (L.health / L.maxHealth), 17 - 2 * e.healthBarPad, 7), oe.fill(), L.isPlayer)) {
                                        if (l.names) {
                                            oe.globalAlpha = 1, oe.font = "30px Hammersmith One", oe.fillStyle = "#fff", oe.strokeStyle = Ee, oe.textBaseline = "middle", oe.textAlign = "center", oe.lineWidth = 8, oe.lineJoin = "round";
                                            let i = e.crownIconScale,
                                                s = L.x - a - i / 2 + oe.measureText(t).width / 2 + e.crownPad + (1 == L.iconIndex ? 82.5 : 30);
                                            oe.strokeText(45 == L.skinIndex && L.shameTimer > 0 ? L.shameTimer : L.shameCount, s, L.y - n - L.scale - e.nameY), oe.fillText(45 == L.skinIndex && L.shameTimer > 0 ? L.shameTimer : L.shameCount, s, L.y - n - L.scale - e.nameY)
                                        }
                                        if (l.autoOneFrame && autoOneFrameToggled) {
                                            let e = window.pingTime,
                                                t = e > 140 ? 230 : e > 110 ? 210 : e > 85 ? 190 : 170;
                                            oe.save(), oe.globalAlpha = .1, oe.strokeStyle = "black", oe.lineWidth = 2, oe.translate(R.x - a, R.y - n), oe.beginPath(), oe.arc(0, 0, t, 0, 2 * Math.PI), oe.stroke(), oe.restore()
                                        }
                                        if (!L.isTeam(R)) {
                                            let t = Tt.getDistance(R.x, R.y, L.x, L.y),
                                                i = Math.min(1, 100 * t / (e.maxScreenHeight / 2) / (me / 2)),
                                                s = t / 2,
                                                o = t + 100,
                                                l = Math.max(s, o - t * (o - s) / e.maxScreenHeight),
                                                r = Tt.getDirect(L, R, 0, 0),
                                                c = l * Math.cos(r),
                                                d = l * Math.sin(r);
                                            oe.save(), oe.translate(R.x - a + c, R.y - n + d);
                                            let h = L.dir || 0;
                                            oe.rotate(h + L.dirPlus), oe.globalAlpha = .5 * i, Ma(L, oe), oe.restore()
                                        }
                                        if ("pre2" == getEl("predictType").value) {
                                            oe.lineWidth = 3, oe.strokeStyle = "#cc5151", oe.globalAlpha = 1, oe.beginPath();
                                            let e = {
                                                x: L.x2 - a,
                                                y: L.y2 - n
                                            };
                                            oe.moveTo(L.x - a, L.y - n), oe.lineTo(e.x, e.y), oe.stroke()
                                        } else if ("pre3" == getEl("predictType").value) {
                                            oe.lineWidth = 3, oe.strokeStyle = "#cc5151", oe.globalAlpha = 1, oe.beginPath();
                                            let e = {
                                                x: L.x3 - a,
                                                y: L.y3 - n
                                            };
                                            oe.moveTo(L.x - a, L.y - n), oe.lineTo(e.x, e.y), oe.stroke()
                                        }
                                    }
                                }
                            if (R && (oe.globalAlpha = 1, Z.autoPush && (oe.lineWidth = 4.5, oe.strokeStyle = "#fff", oe.beginPath(), oe.lineTo(Z.pushLine.x2 - a, Z.pushLine.y2 - n), oe.lineTo(Z.pushLine.x - a, Z.pushLine.y - n), oe.stroke()), jt.active && jt.array && (!jt.chaseNear || X.length) && (oe.lineWidth = 4.5, oe.strokeStyle = "cyan", oe.beginPath(), jt.array.forEach(((e, t) => {
                                    let i = jt.scale / jt.grid * e.x,
                                        s = jt.scale / jt.grid * e.y,
                                        o = {
                                            x: R.x2 - jt.scale / 2 + i - a,
                                            y: R.y2 - jt.scale / 2 + s - n
                                        };
                                    0 == t ? oe.moveTo(o.x, o.y) : oe.lineTo(o.x, o.y)
                                })), oe.stroke()), F.length && getEl("funni").checked)) {
                                R.spinDir += 2.5 / 60;
                                let e = 0;
                                e = pi.left ? 100 : pi.right ? 15 : 40, e += R.scale, F.forEach(((t, i) => {
                                    if (t.active) {
                                        let a = Math.PI * (i / (F.length / 2)),
                                            n = {
                                                x: R.x + e * Math.cos(R.spinDir + a),
                                                y: R.y + e * Math.sin(R.spinDir + a)
                                            },
                                            s = Tt.getDirect(n, t, 0, 0),
                                            o = Tt.getDist(n, t, 0, 0);
                                        t.x += o / 7 * Math.cos(s), t.y += o / 7 * Math.sin(s), G.filter((e => e.visible && e != R)).forEach((e => {
                                            let i = Tt.getDirect(t, e, 0, 0),
                                                a = Tt.getDist(t, e, 0, 0),
                                                n = t.scale + e.scale;
                                            if (a <= n) {
                                                let e = -(a - n);
                                                t.x += e * Math.cos(i), t.y += e * Math.sin(i), t.health -= 10, t.damaged += 125, t.health <= 0 && (t.active = !1)
                                            }
                                        }))
                                    } else t.time += fe, t.alive && (t.alpha -= fe / 200, t.visScale += fe / (2 * t.scale), t.alpha <= 0 && (t.alpha = 0, t.alive = !1)), t.time >= t.timer && (t.time = 0, t.active = !0, t.alive = !0, t.x = R.x, t.y = R.y, t.health = t.maxHealth, t.damaged = 0, t.alpha = 1, t.visScale = t.scale);
                                    if (t.alive) {
                                        let e = function(e, t, i, a) {
                                            return `rgb(${Math.min(255,e+Math.floor(a))}, ${Math.max(0,t-Math.floor(a))}, ${Math.max(0,i-Math.floor(a))})`
                                        };
                                        oe.globalAlpha = t.alpha, oe.lineWidth = 3, oe.fillStyle = e(255, 255, 255, t.damaged), oe.strokeStyle = e(200, 200, 200, t.damaged), oe.beginPath(), oe.arc(t.x - a, t.y - n, t.visScale, 0, 2 * Math.PI), oe.fill(), oe.stroke(), t.damaged = Math.max(0, t.damaged - fe / 2)
                                    }
                                }))
                            }
                            oe.globalAlpha = 1, Ct.update(fe, oe, a, n);
                            let s = {
                                joy: "😂",
                                sob: "😭",
                                sus: "🤨",
                                kiss: "😘",
                                omg: "😲",
                                "500IQ": "🤯",
                                pls: "🥺",
                                horny: "🥵",
                                cold: "🥶",
                                cry: "😢",
                                sorry: "😓",
                                yummy: "😋",
                                angry: "😡",
                                skull: "💀",
                                dizzy: "🥴",
                                party: "🥳",
                                ez: "😎",
                                wink: "😉",
                                flushed: "😳",
                                thumbsup: "👍"
                            };
                            for (let e = 0; e < G.length; ++e) {
                                let t = G[e];
                                if (t.visible && t.chatMessages && t.chatMessages.length > 0) {
                                    let e = t.x - a,
                                        i = t.y - t.scale - n - 90,
                                        o = 50;
                                    for (let a = 0; a < t.chatMessages.length; a++) {
                                        let n = t.chatMessages[a],
                                            l = n.message,
                                            r = i - (t.chatMessages.length - 1 - a) * o;
                                        if (Date.now() - n.time > 5e3) {
                                            t.chatMessages.splice(a, 1), a--;
                                            continue
                                        }
                                        oe.font = "32px Hammersmith One";
                                        let c = oe.measureText(l);
                                        oe.textBaseline = "middle", oe.textAlign = "center";
                                        let d = 47,
                                            h = c.width + 17;
                                        oe.fillStyle = "rgba(0,0,0,0.2)", oe.roundRect(e - h / 2, r - d / 2, h, d, 6), oe.fill(), oe.fillStyle = "#e3e3e3";
                                        for (let e in s) l = l.replaceAll(":" + e + ":", s[e]);
                                        oe.fillText(l, e, r)
                                    }
                                }
                            }
                            let o = [];
                            o.length && o.filter((e => e.active && e.owner.isPlayer)).forEach((e => {
                                if (e.alive ? (e.alpha -= fe / 5e3, e.alpha <= 0 && (e.alpha = 0, e.active = !1)) : e.alpha <= 1 && (e.alpha += fe / 250, e.alpha >= 1 && (e.alpha = 1, e.alive = !0)), e.active) {
                                    oe.font = "20px Ubuntu";
                                    let t = oe.measureText(e.chat);
                                    oe.textBaseline = "middle", oe.textAlign = "center";
                                    let i = e.owner.x - a,
                                        s = e.owner.y - e.owner.scale - n - 90,
                                        o = 40,
                                        l = t.width + 15;
                                    oe.globalAlpha = e.alpha, oe.fillStyle = e.owner.isTeam(R) ? "#8ecc51" : "#cc5151", oe.strokeStyle = "rgb(25, 25, 25)", oe.strokeText(e.owner.name, i, s - 45), oe.fillText(e.owner.name, i, s - 45), oe.lineWidth = 5, oe.fillStyle = "#ccc", oe.strokeStyle = "rgb(25, 25, 25)", oe.roundRect(i - l / 2, s - o / 2, l, o, 6), oe.stroke(), oe.fill(), oe.fillStyle = "#fff", oe.strokeStyle = "#000", oe.strokeText(e.chat, i, s), oe.fillText(e.chat, i, s), e.y -= fe / 100
                                }
                            })), oe.globalAlpha = 1
                        }! function(t) {
                            if (R && R.alive) {
                                re.clearRect(0, 0, le.width, le.height), re.lineWidth = 4;
                                for (let e = 0; e < Ht.length; ++e) xt = Ht[e], re.strokeStyle = xt.color, xt.update(re, t);
                                if (re.globalAlpha = 1, re.fillStyle = "#ff0000", Lt.length) {
                                    re.fillStyle = "#abcdef", re.font = "34px Hammersmith One", re.textBaseline = "middle", re.textAlign = "center";
                                    for (let t = 0; t < Lt.length;) re.fillText("!", Lt[t].x / e.mapScale * le.width, Lt[t].y / e.mapScale * le.height), t += 2
                                }
                                if (re.globalAlpha = 1, re.fillStyle = "#fff", ka(R.x / e.mapScale * le.width, R.y / e.mapScale * le.height, 7, re, !0), re.fillStyle = "rgba(255,255,255,0.35)", R.team && kt)
                                    for (let t = 0; t < kt.length;) ka(kt[t] / e.mapScale * le.width, kt[t + 1] / e.mapScale * le.height, 7, re, !0), t += 2;
                                ha.length && ha.forEach((t => {
                                    t.inGame && (re.globalAlpha = 1, re.strokeStyle = "#cc5151", ka(t.x2 / e.mapScale * le.width, t.y2 / e.mapScale * le.height, 7, re, !1, !0))
                                })), wt && (re.fillStyle = "#fc5553", re.font = "34px Hammersmith One", re.textBaseline = "middle", re.textAlign = "center", re.fillText("x", wt.x / e.mapScale * le.width, wt.y / e.mapScale * le.height)), Rt && (re.fillStyle = "#fff", re.font = "34px Hammersmith One", re.textBaseline = "middle", re.textAlign = "center", re.fillText("x", Rt.x / e.mapScale * le.width, Rt.y / e.mapScale * le.height))
                            }
                        }(fe)
                    }
                    var an;

                    function nn(e) {
                        getEl("instaType").disabled = e, getEl("antiBullType").disabled = e, getEl("predictType").disabled = e, getEl("visualType").disabled = e
                    }! function() {
                        for (let e = 0; e < en.length; ++e) {
                            let t = new Image;
                            t.onload = function() {
                                this.isLoaded = !0
                            }, t.src = "./../img/icons/" + en[e] + ".png", Za[en[e]] = t
                        }
                        for (let e = 0; e < Ja.length; ++e) {
                            let t = new Image;
                            t.onload = function() {
                                this.isLoaded = !0
                            }, t.src = Ja[e], Qa[e] = t
                        }
                    }(), window.requestAnimFrame = function() {
                            return null
                        }, window.rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                            window.setTimeout(e, 1e3 / 60)
                        }, an = e.mapScale / 2, It.add(0, an, an + 200, 0, e.treeScales[3], 0), It.add(1, an, an - 480, 0, e.treeScales[3], 0), It.add(2, an + 300, an + 450, 0, e.treeScales[3], 0), It.add(3, an - 950, an - 130, 0, e.treeScales[2], 0), It.add(4, an - 750, an - 400, 0, e.treeScales[3], 0), It.add(5, an - 700, an + 400, 0, e.treeScales[2], 0), It.add(6, an + 800, an - 200, 0, e.treeScales[3], 0), It.add(7, an - 260, an + 340, 0, e.bushScales[3], 1), It.add(8, an + 760, an + 310, 0, e.bushScales[3], 1), It.add(9, an - 800, an + 100, 0, e.bushScales[3], 1), It.add(10, an - 800, an + 300, 0, St.list[4].scale, St.list[4].id, St.list[10]), It.add(11, an + 650, an - 390, 0, St.list[4].scale, St.list[4].id, St.list[10]), It.add(12, an - 400, an - 450, 0, e.rockScales[2], 2),
                        function e() {
                            ge = performance.now(), fe = ge - Me, Me = ge;
                            let t = performance.now(),
                                i = t - C.last;
                            i >= 1e3 && (C.ltime = C.time * (1e3 / i), C.last = t, C.time = 0), C.time++, getEl("pingFps").innerHTML = `${window.pingTime}ms | Fps: ${Tt.round(C.ltime,10)}`, getEl("packetStatus").innerHTML = D, tn(), rAF(e)
                        }(), nn(M);
                    let sn = {};
                    window.debug = function() {
                        w(), Z.waitHit = 0, Z.autoAim = !1, Et.isTrue = !1, _t.inTrap = !1, qa = [], Na = [], Ga = []
                    }, window.toggleNight = function() {
                        clearTimeout(sn), "night1" == d.style.animationName ? (d.style.animationName = "night2", d.style.opacity = 0, sn = setTimeout((() => {
                            d.style.display = "none"
                        }), 1e3 * parseFloat(d.style.animationDuration))) : (d.style.animationName = "night1", d.style.opacity = .35, d.style.display = "block"), Re = !Re, qa = [], Na = [], Ga = []
                    }, window.wasdMode = function() {
                        M = !M, nn(M)
                    }, window.startGrind = function() {
                        if (getEl("weaponGrind").checked)
                            for (let e = 0; e < 2 * Math.PI; e += Math.PI / 2) rt(R.getItemType(22), e)
                    };
                    let on = [],
                        ln = 0;
                    window.connectFillBots = function() {
                        i = [], ln = 0;
                        for (let e = 0; e < on.length; e++) {
                            let t = new WebSocket(`wss://${on[e]}.glitch.me`);
                            t.binaryType = "arraybuffer", t.onopen = function() {
                                t.ssend = function(e) {
                                    let i = Array.prototype.slice.call(arguments, 1),
                                        a = window.msgpack.encode([e, i]);
                                    t.send(a)
                                };
                                for (let e = 0; e < 4; e++) window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
                                    action: "homepage"
                                }).then((function(e) {
                                    t.ssend("bots", v.url.split("&")[0] + "&token=" + encodeURIComponent(e), ln), i.push([t]), ln++
                                }))
                            }, t.onmessage = function(e) {
                                let t = new Uint8Array(e.data),
                                    i = window.msgpack.decode(t);
                                i[0];
                                t = i[1]
                            }
                        }
                    }, window.destroyFillBots = function() {
                        i.forEach((e => {
                            e[0].close()
                        })), i = []
                    }, window.tryConnectBots = function() {
                        for (let e = 0; e < (ha.length < 3 ? 3 : 4); e++) window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
                            action: "homepage"
                        }).then((function(e) {
                            ga(e)
                        }))
                    }, window.destroyBots = function() {
                        ha.forEach((e => {
                            e.closeSocket = !0
                        })), ha = []
                    }, window.resBuild = function() {
                        V.length && (V.forEach((e => {
                            e.breakObj = !1
                        })), K = [])
                    }, window.toggleBotsCircle = function() {
                        R.circle = !R.circle
                    }, window.toggleVisual = function() {
                        e.anotherVisual = !e.anotherVisual, V.forEach((e => {
                            e.active && (e.dir = e.lastDir)
                        }))
                    }, window.prepareUI = function(t) {
                        ui(), Tt.removeAllChildren(ve);
                        for (let e = 0; e < St.weapons.length + St.list.length; ++e) ! function(e) {
                            Tt.generateElement({
                                id: "actionBarItem" + e,
                                class: "actionBarItem",
                                style: "display:none",
                                onmouseout: function() {
                                    hi()
                                },
                                parent: ve
                            })
                        }(e);
                        for (let i = 0; i < St.list.length + St.weapons.length; ++i) ! function(i) {
                            let a = document.createElement("canvas");
                            a.width = a.height = 66;
                            let n = a.getContext("2d");
                            if (n.translate(a.width / 2, a.height / 2), n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, St.weapons[i]) {
                                n.rotate(Math.PI / 4 + Math.PI);
                                let s = new Image;
                                Ea[St.weapons[i].src] = s, s.onload = function() {
                                    this.isLoaded = !0;
                                    let t = 1 / (this.height / this.width),
                                        s = St.weapons[i].iPad || 1;
                                    n.drawImage(this, -a.width * s * e.iconPad * t / 2, -a.height * s * e.iconPad / 2, a.width * s * t * e.iconPad, a.height * s * e.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-a.width / 2, -a.height / 2, a.width, a.height), getEl("actionBarItem" + i).style.backgroundImage = "url(" + a.toDataURL() + ")"
                                }, s.src = "./../img/weapons/" + St.weapons[i].src + ".png";
                                let o = getEl("actionBarItem" + i);
                                o.onmouseover = Tt.checkTrusted((function() {
                                    hi(St.weapons[i], !0)
                                })), o.onclick = Tt.checkTrusted((function() {
                                    nt(t.weapons[St.weapons[i].type])
                                })), Tt.hookTouchEvents(o)
                            } else {
                                let s = Va(St.list[i - St.weapons.length], !0),
                                    o = Math.min(a.width - e.iconPadding, s.width);
                                n.globalAlpha = 1, n.drawImage(s, -o / 2, -o / 2, o, o), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-o / 2, -o / 2, o, o), getEl("actionBarItem" + i).style.backgroundImage = "url(" + a.toDataURL() + ")";
                                let l = getEl("actionBarItem" + i);
                                l.onmouseover = Tt.checkTrusted((function() {
                                    hi(St.list[i - St.weapons.length])
                                })), l.onclick = Tt.checkTrusted((function() {
                                    at(t.items[t.getItemType(i - St.weapons.length)])
                                })), Tt.hookTouchEvents(l)
                            }
                        }(i)
                    }, window.profineTest = function(t) {
                        if (t) {
                            let i = "unknown",
                                a = t + "";
                            a = a.slice(0, e.maxNameLength), a = a.replace(/[^\w:\(\)\/? -]+/gim, " "), a = a.replace(/[^\x00-\x7F]/g, " "), a = a.trim();
                            let n = {
                                    list: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa"],
                                    exclude: [],
                                    placeHolder: "*",
                                    regex: {},
                                    replaceRegex: {}
                                },
                                s = !1,
                                o = a.toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
                            for (let e of n.list)
                                if (-1 != o.indexOf(e)) {
                                    s = !0;
                                    break
                                }
                            return a.length > 0 && !s && (i = a), i
                        }
                    }, window.toggleNight()
                },
                webgl_test: () => {}
            };
            if (t) {
                for (let e in t) {
                    let i = t[e];
                    "function" == typeof i && i()
                }
                window.enableHack = function() {
                    useHack || (useHack = !0, t.main())
                }
            }
        }()
}();