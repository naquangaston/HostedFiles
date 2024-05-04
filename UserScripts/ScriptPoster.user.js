// @name Project NOZO
// @namespace -
// @version 1.2
// @description Made By Gaston#1799
// @author Gaston#1799
// @match *://moomoo.io/*
// @match *://dev.moomoo.io/*
// @match *://sandbox.moomoo.io/*
// @match *://tjmoomoo.ml/*
// @grant none
// @require https://ksw2-center.glitch.me/users/fzb/antiinvis_1
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
function checkArea() {
    try {
        if (neardeath = 0, window.Bots && isCombat) {
            for (let e in myobjs) {
                if (!myobjs[e].resource && myobjs[e].t && myobjs[e].i != myPlayer.id) {
                    let t = info2.EN ? {
                        o: getDistance(myPlayer.x, myPlayer.y, myobjs[e].x, myobjs[e].y) > info2.range,
                        l: getDistance(myPlayer.x, myPlayer.y, myobjs[e].x, myobjs[e].y)
                    } : {
                        u: info2.EN,
                        l: getDistance(myPlayer.x, myPlayer.y, myobjs[e].x, myobjs[e].y)
                    };
                    !info2.h && t.l < info2.range + 20 && (atk(angleRadians(myPlayer, myobjs[e])), hat(40), move(null), Prime(), neardeath = 1)
                }
            }
        }
    } catch (e) {}
}

function changeHue() {
    hue += 1e27 * Math.random()
}

function rnag() {
    autoaim = !0, doNewSend(["5", [secondary, !0]]), doNewSend(["7", [1]]), setTimeout((() => {
        doNewSend(["13c", [0, 53, 0]]), doNewSend(["6", [12]]), doNewSend(["13c", [0, 19, 1]])
    }), 100), setTimeout((() => {
        doNewSend(["6", [15]]), doNewSend(["13c", [0, 21, 1]])
    }), 200), setTimeout((() => {
        doNewSend(["7", [1]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]])), again = 1, setTimeout((() => {
            doNewSend(["5", [primary, !0]])
        }), info2.ss + 100), autoaim = !1
    }), 300)
}

function looper() {
    if (window.again) {
        try {
            eval(localStorage.ranged) && Bots.IsSlave && (setTimeout((() => {
                localStorage.ranged = 0
            }), 100), rnag())
        } catch (rr) {}
    }
    try {
        eval(localStorage.atking) && Bots.IsSlave && (toggles = !toggles, setTimeout((() => {
            localStorage.atking = 0
        }), 100), doNewSend(toggles ? ["c", [1]] : ["c", [null]]))
    } catch (rr) {}
    setTimeout(looper, 0)
}

function gDir(e) {
    var t, n = [-2.9, -2.8, -2.7, -2.6, -2.5, -2.4, -2.3, -2.2, -2.1, -2, -1.9, -1.8, -1.7, -1.6],
        i = [-1.5, -1.4, -1.3, -1.2, -1.1, -1, -.9, -.8, -.7, -.6, -.5, -.4, -.3, -.2, -.1],
        o = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1, 1.1, 1.2, 1.3, 1.4, 1.5],
        a = [1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
    return moveDir.between(1.6, 0) && (t = i), moveDir.between(1.6, 3) && (t = n), moveDir.between(-1.5, -2.9) && (t = a), moveDir.between(-1.5, 0) && (t = o), t
}

function WIPS() {
    var e, t, n, i = [-2.9, -2.8, -2.7, -2.6, -2.5, -2.4, -2.3, -2.2, -2.1, -2, -1.9, -1.8, -1.7, -1.6],
        o = [-1.5, -1.4, -1.3, -1.2, -1.1, -1, -.9, -.8, -.7, -.6, -.5, -.4, -.3, -.2, -.1],
        a = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1, 1.1, 1.2, 1.3, 1.4, 1.5],
        r = [1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9];
    wdone && (t = 0, !(e = [14365 - myPlayer.x, 14365 - myPlayer.y])[1] < 100 && !(e[1] > 14e3) ? (e[0] < 100 && (t = 1, n = gDir(moveDir)), e[0] > 14e3 && (t = 1, n = gDir(moveDir))) : e[0] < 100 || e[0] > 14e3 ? (e[0] < 100 && e[1] < 100 && (t = 0, n = r), e[0] > 14e3 && e[1] > 14e3 && (t = 0, n = i), e[0] < 100 && e[1] > 14e3 && (t = 0, n = o), e[0] > 14e3 && e[1] < 100 && (t = 0, n = a)) : (e[1] < 100 && (t = 1, n = gDir(moveDir)), e[1] > 14e3 && (t = 1, n = gDir(moveDir))), t ? (window.dirs = n, n = random(n), moveDir = n) : moveDir = random(dirs), wdone && (wdone = 0, setTimeout((e => {
        wdone = 1
    }), 1e4)))
}

function fillA(e, t, n = 1) {
    var i = [];
    for (let o = e; o < t; o += n) {
        i.push(o)
    }
    return i
}

function WingSpamFC1() {
    doNewSend(["13c", [0, 21, 1]]), clearTimeout(WingSpam1), WingSpam1 = setTimeout((function() {
        WingSpamFC2()
    }), 100)
}

function WingSpamFC2() {
    doNewSend(["13c", [0, 18, 1]]), clearTimeout(WingSpam2), WingSpam3 = setTimeout((function() {
        WingSpamFC3()
    }), 100)
}

function WingSpamFC3() {
    doNewSend(["13c", [0, 19, 1]]), clearTimeout(WingSpam3), WingSpam4 = setTimeout((function() {
        WingSpamFC4()
    }), 100)
}

function WingSpamFC4() {
    doNewSend(["13c", [0, 13, 1]]), clearTimeout(WingSpam4), WingSpam1 = setTimeout((function() {
        WingSpamFC1()
    }), 100)
}

function HatSpamFC1() {
    doNewSend(["13c", [0, 53, 0]]), clearTimeout(HatSpam1), HatSpam2 = setTimeout((function() {
        HatSpamFC2()
    }), 180)
}

function HatSpamFC2() {
    doNewSend(["13c", [0, 11, 0]]), clearTimeout(HatSpam2), HatSpam3 = setTimeout((function() {
        HatSpamFC3()
    }), 417)
}

function HatSpamFC3() {
    doNewSend(["13c", [0, 7, 0]]), clearTimeout(HatSpam3), HatSpam4 = setTimeout((function() {
        HatSpamFC4()
    }), 417)
}

function HatSpamFC4() {
    doNewSend(["13c", [0, 20, 0]]), clearTimeout(HatSpam4), HatSpam5 = setTimeout((function() {
        HatSpamFC5()
    }), 417)
}

function HatSpamFC5() {
    doNewSend(["13c", [0, 26, 0]]), clearTimeout(HatSpam5), HatSpam6 = setTimeout((function() {
        HatSpamFC6()
    }), 417)
}

function HatSpamFC6() {
    doNewSend(["13c", [0, 55, 0]]), clearTimeout(HatSpam6), HatSpam7 = setTimeout((function() {
        HatSpamFC7()
    }), 417)
}

function HatSpamFC7() {
    doNewSend(["13c", [0, 21, 0]]), clearTimeout(HatSpam7), HatSpam1 = setTimeout((function() {
        HatSpamFC1()
    }), 417)
}

function ClanSpamFC1() {
    doNewSend(["9", [null]]), clearTimeout(ClanSpam1), ClanSpam1 = setTimeout((function() {
        ClanSpamFC2()
    }), 500)
}

function ClanSpamFC2() {
    doNewSend(["8", ["\x05"]]), clearTimeout(ClanSpam2), ClanSpam1 = setTimeout((function() {
        ClanSpamFC1()
    }), 500)
}

function random(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function gmsg() {
    let e = msg[Math.floor(Math.random() * msg.length)];
    return used[e] ? gmsg() : (used[e] = 1, setTimeout((() => {
        used[e] = 0
    }), 5e3), e)
}

function ChatSpamFC1() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam1), ChatSpam1 = setTimeout((function() {
        ChatSpamFC2()
    }), 2e3)
}

function ChatSpamFC2() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam2), ChatSpam3 = setTimeout((function() {
        ChatSpamFC3()
    }), 2e3)
}

function ChatSpamFC3() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam3), ChatSpam4 = setTimeout((function() {
        ChatSpamFC4()
    }), 2e3)
}

function ChatSpamFC4() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam4), ChatSpam5 = setTimeout((function() {
        ChatSpamFC5()
    }), 2e3)
}

function ChatSpamFC5() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam5), ChatSpam6 = setTimeout((function() {
        ChatSpamFC6()
    }), 2e3)
}

function ChatSpamFC6() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam6), ChatSpam7 = setTimeout((function() {
        ChatSpamFC7()
    }), 2e3)
}

function ChatSpamFC7() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam7), ChatSpam8 = setTimeout((function() {
        ChatSpamFC8()
    }), 2e3)
}

function ChatSpamFC8() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam8), ChatSpam9 = setTimeout((function() {
        ChatSpamFC9()
    }), 2e3)
}

function ChatSpamFC9() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam9), ChatSpam10 = setTimeout((function() {
        ChatSpamFC10()
    }), 2e3)
}

function ChatSpamFC10() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam10), ChatSpam11 = setTimeout((function() {
        ChatSpamFC11()
    }), 2e3)
}

function ChatSpamFC11() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam11), ChatSpam12 = setTimeout((function() {
        ChatSpamFC12()
    }), 2e3)
}

function ChatSpamFC12() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam12), ChatSpam13 = setTimeout((function() {
        ChatSpamFC13()
    }), 2e3)
}

function ChatSpamFC13() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam13), ChatSpam14 = setTimeout((function() {
        ChatSpamFC14()
    }), 2e3)
}

function ChatSpamFC14() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam14), ChatSpam15 = setTimeout((function() {
        ChatSpamFC15()
    }), 2e3)
}

function ChatSpamFC15() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam15), ChatSpam16 = setTimeout((function() {
        ChatSpamFC16()
    }), 2e3)
}

function ChatSpamFC16() {
    doNewSend(["ch", [gmsg()]]), clearTimeout(ChatSpam16), ChatSpam1 = setTimeout((function() {
        ChatSpamFC1()
    }), 2e3)
}

function normal() {
    hat(normalHat), acc(normalAcc)
}

function aim(e, t) {
    document.getElementById("gameCanvas").dispatchEvent(new MouseEvent("mousemove", {
        clientX: e,
        clientY: t
    }))
}

function n() {
    this.buffer = new Uint8Array([0]), this.buffer.__proto__ = new Uint8Array, this.type = 0
}

function socketFound(e) {
    e.addEventListener("message", (function(e) {
        handleMessage(e)
    }))
}

function handleMessage(m) {
    var p, isspike, item_, oldhat, hasClown, o, i360, isa;
    let temp = msgpack5.decode(new Uint8Array(m.data)),
        data;
    temp.length > 1 ? (data = [temp[0], ...temp[1]], data[1]) : data = temp;
    let item = data[0];
    if (data) {
        if ("io-init" === item) {
            let e = document.getElementById("gameCanvas");
            width = e.clientWidth, height = e.clientHeight, $(window).resize((function() {
                width = e.clientWidth, height = e.clientHeight
            })), e.addEventListener("mousemove", (e => {
                mouseX = e.clientX, mouseY = e.clientY
            }))
        }
        "1" == item && null == myPlayer.id && (myPlayer.id = data[1], (!localStorage.botids || !localStorage.botids.length) && (localStorage.botids = ""), localStorage.botids.includes(data[1]) || (localStorage.botids += data[1] + "\n", localStorage.botids = localStorage.botids.match(/[0-9]+/).filter((e => host && host.id == e ? 0 : 1)).join("\n")));
        try {
            ids = localStorage.botids.match(/[0-9]+/).map(eval)
        } catch (err) {}
        if ("33" == item) {
            enemiesNear = [];
            for (let e = 0; e < data[1].length / 13; e++) {
                let t = data[1].slice(13 * e, 13 * e + 13);
                t[0] == myPlayer.id ? (myPlayer.x = t[1], myPlayer.y = t[2], myPlayer.dir = t[3], myPlayer.object = t[4], myPlayer.weapon = t[5], myPlayer.clan = t[7], myPlayer.isLeader = t[8], myPlayer.hat = t[9], myPlayer.accessory = t[10], myPlayer.isSkull = t[11], document.BINDS = {
                    BINDINGS: t.join(","),
                    LOCATIONX: myPlayer.x,
                    LOCATIONY: myPlayer.y,
                    DIRECTION: myPlayer.dir,
                    WEAPON: myPlayer.weapon,
                    LEADERSTATUS: myPlayer.isLeader,
                    CLAN_TRIBE: myPlayer.clan,
                    ISSKULL: myPlayer.isSkull,
                    ACCESSORY: myPlayer.acc,
                    HAT: myPlayer.hat,
                    "super": WebSocket,
                    WEBSOCKET: ws
                }) : t[7] == myPlayer.clan && null !== t[7] || enemiesNear.push(t)
            }
        }
        if ("16" == item && autoU && (myPlayer.m = data[1], myPlayer.p = data[2], doNewSend(["6", [items2[myPlayer.p - 1]]])), "9" == item && "kills" == data[1] && (chat(Pname + "-Kills:" + data[2]), 0 == window.stoped && setTimeout(Rec.k, 5e3)), "9" == item && "points" == data[1] && (p = scores.p0 || 0, scores.p0 = data[2], scores.dif = scores.p0 - p, window.NeedGold = 0, scores.dif < 700 && (window.NeedGold = 1), updateHats()), "9" == item && "kills" != window[data[1]] && data[2] < 20 && (window[data[1]] || (window[data[1]] = []), window[data[1]].push(myPlayer)), "18" == item && (1 * angleRadians({
                x: data[1],
                y: data[2]
            }, myPlayer).toFixed(1) == data[3].toFixed(1) && Bots.bt && (hat(22), place(millType, angleRadians(myPlayer, {
                x: data[1],
                y: data[2]
            }))), Bots.sb && 1 * angleRadians({
                x: data[1],
                y: data[2]
            }, myPlayer).toFixed(2) == data[3] && (place(millType, angleRadians(myPlayer, {
                x: data[1],
                y: data[2]
            })), doNewSend(["2", [angleRadians(myPlayer, {
                x: data[1],
                y: data[2]
            })]]), Sec())), "33" == item) {
            enemiesNear = [];
            for (let e = 0; e < data[1].length / 13; e++) {
                let t = data[1].slice(13 * e, 13 * e + 13);
                t[0] == myPlayer.id ? (myPlayer.x = t[1], myPlayer.y = t[2], myPlayer.dir = t[3], myPlayer.object = t[4], myPlayer.weapon = t[5], myPlayer.clan = t[7], myPlayer.isLeader = t[8], myPlayer.hat = t[9], myPlayer.accessory = t[10], myPlayer.isSkull = t[11], document.BINDS = {
                    BINDINGS: t.join(","),
                    LOCATIONX: myPlayer.x,
                    LOCATIONY: myPlayer.y,
                    DIRECTION: myPlayer.dir,
                    WEAPON: myPlayer.weapon,
                    LEADERSTATUS: myPlayer.isLeader,
                    CLAN_TRIBE: myPlayer.clan,
                    ISSKULL: myPlayer.isSkull,
                    ACCESSORY: myPlayer.acc,
                    HAT: myPlayer.hat,
                    "super": WebSocket,
                    WEBSOCKET: ws
                }) : t[7] == myPlayer.clan && null !== t[7] || enemiesNear.push(t)
            }
            window.v = (accessories.filter((e => e.id == myPlayer.S)) || [])[0]
        }
        "ch" == item && data[1] != myPlayer.id && window.chatM && chat(data[2]), isEnemyNear = !1;
        try {
            info2.EN = enemiesNear.length, info2.o = !0, info2.far3 = !0
        } catch (err) {}
        if (enemiesNear && (info2.e = [], "undefined" != typeof food && (food.sort1 = food.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0]), "undefined" != typeof wood && (wood.sort1 = wood.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0]), "undefined" != typeof stone && (stone.sort1 = stone.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0]), nearestEnemy = enemiesNear.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0], enemiesNear.forEach((e => {
                info2.e.push(e[0])
            })), info2.e = info2.e.join("\n"), window.NT = [], window.NTP, window.muskets = [], enemiesNear.forEach((e => {
                (51 == e[9] && myPlayer.P ? e[7] != myPlayer.P : null == [7]) && NT.push(e), 15 == e[5] && muskets.push(e)
            })), NTP = playersort(53), window.npb = playersort(7), nearestEnemy = enemiesNear.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0], window.nearestEnemy = nearestEnemy), Bots.IsSlave && localStorage.enemyN && (window.hostEnm = localStorage.enemyN.split("\n")), nearestEnemy) {
            Bots.IsHost && (localStorage.enemyN = nearestEnemy.join("\n")), window.hostEnm && Bots.IsSlave && (nearestEnemy = window.hostEnm), info2.tank = 0, info2.NED = Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)), info2.NED > 500 && !info2.C && (info2.tank = 1), info2.where = nearestEnemyAngle = Math.atan2(nearestEnemy[2] - myPlayer.y, nearestEnemy[1] - myPlayer.x), Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)) < 300 && (isEnemyNear = !0, 0 == autoaim && 7 != myPlayer.M && 53 != myPlayer.M && (normalHat = 6, 8 != primary && (normalAcc = 19)));
            try {
                info2.autoinsta1 = info2.NED < info2.range - 5, Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)) < 500 ? info2.far2 = 0 : info2.far2 = !0, Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)) < info2.range + 90 && (info2.o = !1), Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)) < info2.range + 111 && (info2.far3 = !1)
            } catch (err) {}
        } else {
            localStorage.enemyN && delete localStorage.enemyN, window.hostEnm && (delete window.hostEnm, delete window.hostEna)
        }
        if ("11" != item || window.norespawn || (failsafe = 1, 1 == intrap && (intrap = !1, info2.h = 0, setTimeout((() => {
                window.caninsta = 1, window.canatk = 1
            }), info2.ps + 100), clearInterval(trapbreaking)), setTimeout((() => {
                failsafe = 1, setTimeout((() => {
                    failsafe = 1
                }), 500), doNewSend(["sp", [{
                    name: window.Pname,
                    T: !0,
                    v: 0
                }]]), setTimeout((async() => {
                    if (failsafe = 1, (Bots.IsSlave || Bots.autoPlay) && !SandBox) {
                        Object.keys(Bots).map((e => [e, Bots[e]])).filter((e => e[1])).map((e => e[0]));
                        await Mine(0, 500), await Mine(1, 500), await Mine(2, 500)
                    }
                }), 1e3)
            }), 3e3)), "6" == item) {
            !info2.o && Bots.upits2 && cbats(0);
            for (let e = 0; e < data[1].length / 8; e++) {
                let t = data[1].slice(8 * e, 8 * e + 8);
                if (isspike = !1, window.spikes && window.spikes.forEach((e => {
                        e == t[6] && (isspike = !0)
                    })), myobjs[t[0]] = {
                        i: t[7],
                        x: t[1],
                        y: t[2],
                        z: t[7] == myPlayer.id,
                        data: ["6", t],
                        t: isspike,
                        resource: t[7] < 0
                    }, 15 == t[6] && t[7] != myPlayer.id && (trap_a = Math.atan2(t[2] - myPlayer.y, t[1] - myPlayer.x), Math.sqrt(Math.pow(myPlayer.y - t[2], 2) + Math.pow(myPlayer.x - t[1], 2)) < 90)) {
                    info2.h = 1;
                    let e = {
                        x: t[1],
                        y: t[2]
                    };
                    intrap = !0, trapid = t[0], hat(40), acc(18), pit_XY = t, info2.si && 10 == info2.si.id && Sec()
                }
            }
        }
        if ("14" == item && (chat(data), pingtoggle = !pingtoggle, pingtoggle && chat(data)), "12" == item) {
            !info2.o && Bots.upits2 && cbats(0), item_ = myobjs[data[1]], Math.sqrt(Math.pow(myPlayer.y - myobjs.y, 2) + Math.pow(myPlayer.x - myobjs.x, 2)), Bots.upits2 && again && Math.sqrt(Math.pow(myPlayer.y - myobjs.y, 2) + Math.pow(myPlayer.x - myobjs.x, 2)) < 150 && cbats(0);
            try {
                delete myobjs[data[1]]
            } catch (err) {}
            if (1 == intrap && trapid == data[1]) {
                Prime(), intrap = !1;
                for (let e = 0; e < 4; e++) {
                    let t = myPlayer.dir + toRad(90 * e)
                }
                info2.h = 0, hat(6), acc(11), setTimeout((() => {
                    window.caninsta = 1, window.canatk = 1
                }), info2.ps + 100), clearInterval(trapbreaking), Prime(), setTimeout((() => {
                    Prime(), setTimeout(Prime, 100)
                }), 100), didreload || (again = 0, weapons.reload())
            }
        }
        if ("c" == item && data[1] == nearestEnemy[0] && (info2.far2 || cbats(0)), "18" == item && data[1] == myPlayer.id && (window.caninsta = 0, setTimeout((() => {
                window.caninsta = 1
            }), info2.ss + 100)), "c" == item && data[1] == myPlayer.id && (canAtk = !1, setTimeout((() => {
                canAtk = !0
            }), info.ps + 50)), "7" == item && data[1] == myPlayer.id) {
            window.caninsta = 0, window.canatk = 0, window.canatk2 = 0;
            try {
                clearTimeout(window.timout)
            } catch (errr) {}
            window.timeout = setTimeout((() => {
                window.caninsta = 1, window.canatk = 1
            }), info2.current.id == primary ? info2.ps : info2.ss), window.timeout = setTimeout((() => {
                window.canatk2 = 1
            }), (info2.current.id == primary ? info2.ps : info2.ss) - 10)
        }
        window.host && data[1] == window.host.id && Bots.IsSlave && "7" == item && !window.Sinsta && atk(host.dir), window.isI && "7" == item && data[1] == myPlayer.id && (window.isI = 0, setTimeout((() => {
            Sec(), hat(53), setTimeout((() => {
                doNewSend(["7", [1]]), weapons.reload(), Cbiome()
            }), 100)
        }), i2));
        try {
            "h" == item && data[1] == nearestEnemy[0] && data[2] < 35 && window.lowT && info2.NED < 700 && (oldhat = myPlayer.M, hat(53), setTimeout((() => {
                hat(oldhat)
            }), 100)), "h" == item && data[1] == nearestEnemy[0] && data[2] < 50 && Bots.ssp && info2.NED < 120 && (place(spikeType, nearestEnemyAngle + toRad(45)), place(spikeType, nearestEnemyAngle - toRad(45)), place(spikeType, nearestEnemyAngle))
        } catch (err) {}
        if (hasClown = 45 == myPlayer.M, "h" != item || data[1] != myPlayer.id || hasClown || (window.B = data[2], window.oldH > data[2] ? (window.hittime = Date.now(), healths.push(window.oldH - data[2]), healths.length >= 10 && (healths = healths.splice(healths.length - 10, healths.length)), window.dps = eval(healths.join("+")) / healths.length, window.dps, !window.tm && clearTimeout(window.tm), window.tm = setTimeout((() => {
                healths = [], dps = NaN, tm = null
            }), 5e3)) : window.hittime && (o = Date.now() - window.hittime, window.hittime = 0, o <= 120 ? (window._++, window._ >= 8 && (window.N = 3e4, window._ = 0)) : (window._ -= 2, window._ <= 0 && (window._ = 0))), window.oldH = data[2]), "h" == item && !hasClown) {
            let e = enemiesNear.sort((e => {
                e[0], data[1]
            }))[0];
            !players[data[1]] && (players[data[1]] = {
                B: 100,
                O: e,
                _: 0
            }), players[data[1]].B < data[2] ? players[data[1]].hittime = Date.now() : players[data[1]].hittime && (o = Date.now() - players[data[1]].hittime, players[data[1]].hittime = 0, o <= 120 ? (players[data[1]]._++, players[data[1]]._ >= 8 && (players[data[1]].N = 3e4, players[data[1]]._ = 0)) : (players[data[1]]._ -= 2, players[data[1]]._ <= 0 && (players[data[1]]._ = 0)), players[data[1]] <= 0 && (players[data[1]].B = 100, players[data[1]]._ = 0)), players[data[1]]._ < 5 ? players[data[1]].mode = "trap" : players[data[1]].mode = "insta", players[data[1]].health = data[2]
        }
        if (!hasClown && "h" == item && data[1] == myPlayer.id && data[2] < (window.ashield ? 99 : 79) && data[2] > 0 && 1 == ab && !info2.o && 11 == myPlayer.M) {
            didHeal = 1, Prime(), window.ab2 ? (hat(22), chat("AB-2"), place(foodType), insta(), setTimeout((e => {
                setTimeout((() => {
                    doNewSend(["13c", [0, 11, 0]]), doNewSend(["13c", [0, 21, 1]]), doNewSend(["c", [0]]), autoaim = !1
                }), 0)
            }), info2.ss / 2)) : window.ab3 ? (place(foodType), stest(), chat("AB-3")) : (Prime(), chat("AB-1"), place(foodType), i360 = hit360, hit360 = 0, isa = autoaim, isa && (autoaim = !0), doNewSend(["5", [primary, !0]]), doNewSend(["13c", [0, 7, 0]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 21, 1]]), place(spikeType, nearestEnemyAngle + toRad(45)), place(spikeType, nearestEnemyAngle - toRad(45)), doNewSend(["c", [1]]), setTimeout((() => {
                doNewSend(["13c", [0, 53, 0]])
            }), 50), setTimeout((() => {
                doNewSend(["13c", [0, 11, 0]]), doNewSend(["13c", [0, 21, 1]]), doNewSend(["c", [0]]), isa && (autoaim = !1), hit360 = i360
            }), 200))
        } else if ("h" == item && data[1] == myPlayer.id) {
            myPlayer.A = 0, info2.B = data[2], weapons.forEach((e => {
                e.id == secondary && e.A && (myPlayer.A = 1)
            }));
            let e = nearestEnemyAngle;
            data[2] < 61 && data[2] > 59 && 6 != myPlayer.M && 4 == info2["new"] ? (hat(26), doNewSend(["ch", ["Nobull? Gaston says nice try!"]]), place(foodType)) : 7 == info2.neh || 11 == info2.neh || 10 == info2.neh || 4 == info2["new"] || 15 == info2["new"] || 5 == info2["new"] ? (didHeal = 1, data[2] < 39 && 1 == OP ? (place(foodType, Number.MAX_VALUE), setTimeout((() => {
                place(foodType, Number.MAX_VALUE)
            }), 100)) : data[2] < 59 && 1 == OP ? (place(foodType, Number.MAX_VALUE), setTimeout((() => {
                place(foodType, Number.MAX_VALUE)
            }), 200)) : data[2] < 100 && 1 == OP && setTimeout((() => {
                place(foodType, Number.MAX_VALUE)
            }), 500)) : (data[2], info2.oldH, didHeal = 0, data[2] < 100 && 1 == OP ? setTimeout((() => {
                didHeal = 1, place(foodType, Number.MAX_VALUE)
            }), 800) : didHeal = 1, data[2] < 90 && 1 == OP && setTimeout((() => {
                didHeal = 1, place(foodType, Number.MAX_VALUE)
            }), 700), data[2] < 80 && 1 == OP && setTimeout((() => {
                didHeal = 1, place(foodType, Number.MAX_VALUE)
            }), 300), data[2] < 70 && 1 == OP && (didHeal = 1, setTimeout((() => {
                didHeal = 1, place(foodType, Number.MAX_VALUE), didHeal = 1
            }), 150)), data[2] < 60 && 1 == OP && didHeal && setTimeout((() => {
                didHeal = 1, place(foodType, e)
            }), 300), data[2] < 50 && 1 == OP && didHeal && (place(foodType, null), setTimeout((() => {
                place(foodType, e), didHeal = 1, place(foodType, e)
            }), 600)), data[2] < 40 && 1 == OP && didHeal && setTimeout((() => {
                place(foodType, e), didHeal = 1, place(foodType, e)
            }), 169), data[2] < 30 && 1 == OP && didHeal && (place(foodType, e), setTimeout((() => {
                place(foodType, e), didHeal = 1, place(foodType, e)
            }), 169)), data[2] < 20 && 1 == OP && didHeal && (place(foodType, null), place(foodType, Number.MAX_VALUE), didHeal = 1, setTimeout((() => {
                place(foodType, Number.MAX_VALUE)
            }), 10)), data[2] < 10 && 1 == OP && didHeal && (place(foodType, e), place(foodType, e), didHeal = 1, setTimeout((() => {
                place(foodType, Number.MAX_VALUE)
            }), 115)))
        } else {
            try {
                "h" == item && data[2] < 96 && data[1] == nearestEnemy[0] && window.instaT && (!info2.o && insta(0), chat("Death by bull helmet"))
            } catch (err) {}
        }
        "h" == item && (40 == info2.B || 45 == info2.B || 50 == info2.B || 37 == info2.B || 47 == info2.B || 7 == info2.neh && info2.NED < 142 || info2.ner && 1 * angleRadians({
            x: nearestEnemy[1],
            y: nearestEnemy[2]
        }, myPlayer).toFixed(1) == nearestEnemy[3].toFixed(1)) && myPlayer.A && (hit360 = 1, window.blocking = 1, atk(), Sec(), hat(22), setTimeout((() => {
            window.blocking = 0, hit360 = 0, Prime()
        }), 200)), update()
    }
}
async function Place2(e, t, n) {}

function Save(display = prompt("1=wood,2=stone,3=food,4=gold")) {
    let b = hit360;
    1 == eval(display) && (localStorage.woodDisplay = JSON.stringify(myPlayer)), 2 == eval(display) && (localStorage.stoneDisplay = JSON.stringify(myPlayer)), 3 == eval(display) && (localStorage.foodDisplay = JSON.stringify(myPlayer)), 4 == eval(display) && (localStorage.scoreDisplay = JSON.stringify(myPlayer))
}

function _doNewSend(e) {
    try {
        ws.send(new Uint8Array(Array.from(msgpack5.encode(e))))
    } catch (t) {}
}

function doNewSend(e) {
    return !1
}

function getHat(e) {
    return window.I.filter((t => t.id == e))[0]
}

function getAcc(e) {
    return window.H.filter((t => t.id == e))[0]
}

function updateHats() {
    storeButton.click(), storeButton.onclick(), changeStoreIndex(0), [...storeHolder.children].forEach((e => {
        var t = e,
            n = 1 * t.children[0].src.match(/hat_(?<id>\d+)/i).groups.id,
            i = "Equip" == t.children[2].innerText;
        window.I.forEach(((e, t) => {
            window.I[t].id == n && (window.I[t].D = i, window.I[t].j = window.I[t].F < scores.p0 && !i && !window.I[t].R, window.I[t].G = window.I[t].F < scores.p0 && !i)
        }))
    })), storeButton.click(), storeButton.onclick(), changeStoreIndex(1), [...storeHolder.children].forEach((e => {
        var t = e,
            n = 1 * t.children[0].src.match(/access_(?<id>\d+)/i).groups.id,
            i = "Equip" == t.children[2].innerText;
        window.H.forEach(((e, t) => {
            window.H[t].id == n && (window.H[t].D = i, window.H[t].G = window.H[t].F < scores.p0 && !i, window.H[t].j = window.H[t].F < scores.p0 && !i && !window.H[t].R)
        }))
    }))
}

function acc(e, t) {
    var n = getAcc(e) || !e && {
        D: !0
    };
    myPlayer.S != e && (n.j && (n.U(), acc(e)), n.D || n.R ? doNewSend(["13c", [0, e, 1]]) : acc(0, !0))
}

function hat(e, t) {
    var n = getHat(e) || !e && {
        D: !0
    };
    myPlayer.M != e && (n.j && (n.U(), hat(e)), (n.D || n.R) && doNewSend(["13c", [0, e, 0]]))
}
async function urmom(e = !window.autoFarm) {
    if (e) {
        return
    }
    let t = 1 * document.getElementById("woodDisplay").innerText,
        n = 1 * document.getElementById("stoneDisplay").innerText,
        i = 1 * document.getElementById("foodDisplay").innerText;
    t < 100 && window.autoFarm && await Mine(1, 500), n < 100 && window.autoFarm && await Mine(1, 500), i < 100 && window.autoFarm && await Mine(1, 500), window.Ismine, setTimeout(urmom, 100)
}

function place(e, t = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [e, null]]), doNewSend(["c", [1, t]]), doNewSend(["c", [0, t]]), doNewSend(["5", [myPlayer.q, !0]])
}

function boostSpike() {
    place(spikeType, (boostDir = nearestEnemyAngle) + toRad(90)), place(spikeType, boostDir - toRad(90)), place(boostType, boostDir), doNewSend(["33", [boostDir]])
}

function isElementVisible(e) {
    return !!e && null !== e.offsetParent
}

function playersort(e) {
    var t = [];
    return enemiesNear.forEach((n => {
        n[9] == e && t.push(n)
    })), t.length ? t.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0] : 0
}

function toRad(e) {
    return .01745329251 * e
}

function dist(e, t) {
    return Math.sqrt(Math.pow(t.y - e[2], 2) + Math.pow(t.x - e[1], 2))
}

function animate(e, t) {
    let n, i = "";
    n = e ? "\x02\x1e\x0f\x7fProject\x07NOZO\x02\x10\x0f\x7f" : "P.G", e && (n = n.padStart((30 - n.length) / 2 + n.length), n = n.padEnd(30));
    let o = 0;
    for (let e = 0; e < n.length; e++) {
        1 == Math.floor(Math.random() * t) && "-" != n.charAt(e) && o < 2 && " " != n.charAt(e) ? (i += "\x11", o++) : i += n.charAt(e)
    }
    return i
}

function buttonPress(e) {
    2 == e.button ? (doNewSend(["13c", [0, 40, 0]]), doNewSend(["13c", [0, 11, 1]]), setTimeout((() => {
        doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]]))
    }), 100)) : localStorage.down = 1
}

function Boost() {
    place(boostType, info2.where)
}

function Cbiome() {
    didchech || (didchech = 1, setTimeout((e => {
        didchech = 0
    }), 200), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 6, 0]])) : info2.NA && info2.AD < info2.range + 100 ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : window.Aspeed ? speed() : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]])))
}

function chat(e) {
    doNewSend(["ch", [e]])
}

function Ball() {
    accessories.forEach((e => {
        buy(e, 1)
    })), hats.forEach((e => {
        buy(e, 1)
    }))
}

function update() {
    window.nearestEnemyAngle = nearestEnemyAngle;
    for (let e = 0; e < 9; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (primary = e)
    }
    for (let e = 9; e < 16; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (secondary = e)
    }
    for (let e = 16; e < 19; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (foodType = e - 16, window.ft = foodType)
    }
    for (let e = 22; e < 26; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (spikeType = e - 16)
    }
    for (let e = 26; e < 29; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (millType = e - 16, window.millType = millType)
    }
    for (let e = 31; e < 33; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && (boostType = e - 16)
    }
    for (let e = 33; e < 39; e++) {
        isElementVisible(document.getElementById("actionBarItem" + e.toString())) && 36 != e && (turretType = e - 16)
    }
    window.primary = primary, window.secondary = secondary, window.turretType = turretType, window.millType = millType, Mymod()
}

function myModLoop(e) {
    intrap && 1 == autobreak && !window.blocking && Math.sqrt(Math.pow(myPlayer.y - pit_XY[2], 2) + Math.pow(myPlayer.x - pit_XY[1], 2)) < 90 && hat(window.caninsta ? (info2.si && 10 == info2.si.id && Sec(), doNewSend(["2", [Math.atan2(pit_XY[2] - myPlayer.y, pit_XY[1] - myPlayer.x)]]), atk(Math.atan2(pit_XY[2] - myPlayer.y, pit_XY[1] - myPlayer.x)), 40) : 6), e = !info2.o, Bots.ainsta && e && insta(0), !info2.o && Bots.aatk && !intrap && (atk(), myPlayer.q != primary && Prime()), localStorage.T = !1, window.allresource = [], window.allnonresource = [];
    for (let e in myobjs) {
        myobjs[e].resource && getDistance(myobjs[e].x, myobjs[e].y, myPlayer.x, myPlayer.y) < 1e3 ? allresource.push([myobjs[e], getDistance(myobjs[e].x, myobjs[e].y, myPlayer.x, myPlayer.y)]) : allnonresource.push([myobjs[e], getDistance(myobjs[e].x, myobjs[e].y, myPlayer.x, myPlayer.y)])
    }
    allresource.length && (allresource.sort(((e, t) => t[1] - e[1])).filter((e => 1 == e[0].data[1][5])).filter((e => {
        var t = !0;
        return foodR.forEach((n => {
            n[0].x == e[0].x && t && e[0].y == n[0].y && (t = !1)
        })), t
    })).forEach((e => {
        foodR.push(e)
    })), allresource.sort(((e, t) => t[1] - e[1])).filter((e => 0 == e[0].data[1][5])).filter((e => {
        var t = !0;
        return woodR.forEach((n => {
            n[0].x == e[0].x && t && e[0].y == n[0].y && (t = !1)
        })), t
    })).forEach((e => {
        woodR.push(e)
    })), allresource.sort(((e, t) => t[1] - e[1])).filter((e => 2 == e[0].data[1][5])).filter((e => {
        var t = !0;
        return stoneR.forEach((n => {
            n[0].x == e[0].x && t && e[0].y == n[0].y && (t = !1)
        })), t
    })).forEach((e => {
        stoneR.push(e)
    })));
    try {
        window.nboj = blocks.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0];
        for (let e in myobjs) {
            let t = info2.EN ? {
                o: getDistance(myPlayer.x, myPlayer.y, nearestEnemy[1], nearestEnemy[2]) > 500
            } : {
                u: info2.EN
            };
            !info2.h && getDistance(myobjs[e].x, myobjs[e].y, myPlayer.x, myPlayer.y) < 150 && window.resb && (0 == t.u || t.o) && (hat(window.caninsta ? 40 : 6), info2.si && 10 == info2.si.id && Sec(), atk(angleRadians(myPlayer, myobjs[e])))
        }
    } catch (t) {}
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
            i = (n[0], n[1]);
        n[2];
        return i ? i[t(453)]("=")[1] : window.default_list
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
            i = "",
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            a = o[n(479)];
        for (t = 0; t < e; t++) {
            i += o[n(439)](Math[n(491)](Math[n(631)]() * a))
        }
        return i
    }
    var llength, default_s, isalready, toadd, allEqual, allEqual2, vcent, canclear, pendto, br, hb, hb2, test3, a, _0x2de4 = ["    top: 10px;", "does", "styleSheet", "    color: #FFF700 !important;", "getElementById", "1fSDlqT", "8zvYNMf", "  .actionBarItem {", "diedText", "    bottom: 10px;", "href", "    width:700px;", "    -webkit-transform: translateX(26px);", "  #followText {", "    color: #ff6500;", "    color: #000000;", "innerText", "YTID", "    color: #A20000;", "    height: 65px;", "    border-radius: 10px !important;", "isplayer", "    margin-top: 250%;", "    background: black;", "    justify-content: center;", "    color: #00FFFF!important;", "  #allianceInput:hover {", "    display: inline-flex;", "#downloadButtonContainer", "match", "error", "    color: #fff;", "  .menuHeader:first-child {", "301967CoSLgV", "frameborder", "  #ageBarBody {", "://www.youtube.com/watch?v=-Mypt378fkc", "#cdm-zone-02", "every", "onkeyup", "block", "  .material-icons { ", "  .uiElement {", "  #pre-content-container {", "6718zqNWBD", "    background: #ff8007;", "  #youtubeFollow, ", "    top: 10.7%;", "    color: #FF8C00;", "  input:focus + .slider {", "  .resourceDisplay {", "parentNode", "home-header", "keys", "    margin-bottom: 3px;", "cent", "greasyfork", "after", "rgba(212, 32, 32, 1)", "test", "#insert", "    vertical-align:middle;", "setup3", "appendChild", "233401ndlDIJ", "    color: #51FF00 !important;", "  .storeItem, ", "log", "  .joinAlBtn {", "    padding: 0px 70px;", "\xc3\xa2\xc2\x9d\xc5\u2019\xc3\u017d\xc2\xa3LIMI\xc3\u017d \xc3\u017d\xe2\u20ac\x9dT\xc3\u017d\xc2\xa3D\xc3\xa2\xc2\x9d\xc5\u2019", "  .menuHeader {", "    transition: color .5s;", "site", "head", "push", "#linksContainer1", ".menuHeader", "surviv", "  #allianceHolder, ", "    background: #4ACA1A;", "    max-height: 500px;", "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);", "offsetParent", "onclick", "  .partyWrap {", "    background: rgba(0,0,0,0.6);", "    color: #FFFFFF !important;", "default_list", "    transition: 1s;", "#linksContainer2 .menuLink", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ", "  #featuredYoutube {", "countReset", "    min-height: 80px;", "    left: 0;", "    background-size: 55px 55px;", "newsboxContent", "charAt", "  #linksContainer2 > * {", "narwhale", "    height: 10000%;", "  #nameInput::placeholder {", "    color: #eee;", "    top: 67.5%;", "    cursor: pointer;", "button", "domain", "    top: 37.5%;", "insert song here", "156px", "  #linksContainer2, ", "split", "H_B2", "    color: #ccc;", "classname", "onsubmit", "createTextNode", "moomoo", "    margin-bottom: 30px;", "  #nameInput {", "    text-align: center;", "    border-bottom-right-radius: 0px;", "    top: 30.25%;", "  #moddedMenu:hover .text {", "  .menuButton:hover:before {", "    color: #cc0000;", "https://www.youtube.com/watch?v=", "    font-size: 31px;", "0 1px 0 rgba(60, 100, 231, 1), 0 2px 0 rgba(60, 100, 231, 1), 0 3px 0 rgba(60, 100, 231, 1), 0 4px 0 rgba(60, 100, 231, 1), 0 5px 0 rgba(57, 149, 171, 1), 0 6px 0 rgba(57, 149, 171, 1), 0 7px 0 rgba(57, 149, 171, 1), 0 8px 0 rgba(57, 149, 171, 1), 0 9px 0 rgba(57, 149, 171, 1)", "bottom", "RDJsG8fl0VfkQ", "roblox", "controls", "    color: #F1F41D !important;", "paper-io", "    width: 65px;", "  .five > .text {", "length", "-30px", "\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc5\xa1\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xcb\u0153\xc6\u2019\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb2 \xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb5\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xba \xc3\xa2\xe2\u20ac\u201c\xc2\xb6 \xc3\xb0\xc5\xb8\xc2\x90\xc2\xb3 a name", "  #featuredYoutube > a.ytLink, ", "#H_B", "  #allianceInput::placeholder, ", "    background-color: transparent;", "#twitterFollow", "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');", "cssText", "    border: 5px solid #ffe600;", "nameInput", "floor", "    transform-origin:0 0 ;", "target", "    margin-bottom: 10px;", "pendto", "starblast", "mainui-ads", "    transform: translateX(-20%) skewX(45deg);", "rgba(0,0,0,0)", "#youtubeFollow", "Toggle player", "    background: #ec0e0ed6;", "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ", "#followText", "clear", "join", "Failed", "home-top-sites", "adCard", "  .six > .text {", "New player list", "#mobileDownloadButtonContainer", "    color: #eeeeee;", "#guideCard", "canclear", "    background-color: rgba(0,0,0,0.5) !important;", "#nameInput", "type", "    width: 22%;", "  #moddedMenu:hover {", "allow", "  ::-webkit-scrollbar-thumb {", "    border-radius: 10px;", "  .skinColorItem {", "  #altServer > a > i {", "string", "    color: #FFFF00 !important;", ".menuHeader:nth-child(5)", "    left: 0%;", "    background-color: #FF8C00;", "    border: 3px solid #006EC4;", "    font-family: fantasy;", "arras", "    -webkit-text-stroke: 0.3px #fff;", "    left: 10px;", "    width: 130%; ", "    border-radius: 50px !important;", "input", "    display: none!important;", "forEach", "innerHTML", "  .allianceItem {", "  #storeHolder, ", "    display: none;", "getElementsByTagName", "red", "now", "    transform: rotate(90deg);", "42630BFWRKS", "autoplay; encrypted-media", "Done setting up", "    color: #FF8C00 !important;", "    -ms-transform: translateX(26px);", "set", "    border-radius: 0px !important;", "  #aBox {", "  .slider {", "undefined", "    right: 10px;", "    margin-top: 0px;", "lid", "    border-bottom: 3px solid #eee;", "documentElement", "\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae\xc3\xb0\xc2\x9d\xc2\x90\xc2\x8f\xc3\xb0\xc2\x9d\xc2\x90\xe2\u20ac\xb9\xc3\xb0\xc2\x9d\xc2\x90\xe2\u201a\xac\xc3\xb0\xc2\x9d\xc2\x90\xcb\u0153\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae", "    padding-bottom: 10px;", "  .ytLink {", "    box-shadow: 0 0 1px #FF8C00;", "    font-size: 20px;", "parent", "    color: transparent;", "  .seven > .text {", "https://www.youtube.com/embed/", "  ::-webkit-scrollbar-thumb:active {", "    left: 0px;", "  .menuButton {", "\niframe.script {\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\n}\nbutton.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nbackground:black;\ncolor:white\n}\ninput.script::placeholder{color:red}\ninput.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nborder-width:0px;\ncolor:black;\nbackground: rgba(0, 0, 0, 0)\n}", "    width: 23px;", "center", "    border: 3px solid rgba(255,136,0,1);", "display", "splix", "    bottom: 76%;", "    border: 3px solid #000;", "    border: 3px solid rgba(0,0,0,0.9);", "#gameName", "none", "  #allianceInput, ", "    transition: .4s;", "  .allianceButtonM {", "script", "count", "  #moddedMenu:hover > .titleMM {", "    transform:translateX(-112%) skewX(45deg);", "  input:checked + .slider {", "H_B", "  #promoImg {", "getElementsByClassName", "    position: absolute;", "  .text > b { ", "css", "    background: #2dff00;", "    height: 45.0%;", "    z-index: -1;", "value", "    transform: translateX(10px);", "    -webkit-text-stroke: transparent;", "    width: 250px;", "warn", "    opacity: 1;", "#diedText", "  a {", "src", "createElement", "    -webkit-text-stroke: transparent !important;", "  #moddedMenu {", "onunload", "    background: #fff;", "  .slider:before {", "  .allianceItem:hover, ", "  margin-top: 30px;", ".menuLink", "    border: 5px solid #00FF9E;", "    border-bottom: 3px solid #8B00FF;", "    border-radius: 5px;", "text/css", "list", "background-color", "waiting", "getItem", "    width: 10px;", "random", "310408aBfTPE", "centy", "    padding: 10px;", "  a:hover {", "    top: 47.5%;", "centy3", "  .allianceButtonM:hover,", "remove", "    display: block;", "  #promoHolderImg > img {", "#serverBrowser", "    top: 87.5%;", "  .allianceButtonM, ", "    font-size: 32px;", "  .ytLink:hover {", "#ad-block-left", "    border-radius: 50%;", "    transition: 0.5s;", "slither", "  #followText, ", "color", "-Mypt378fkc", "enterGame", "setItem", "test4", "includes", "  #downloadButtonContainer, ", "  .joinAlBtn:hover {", "    width: 300px;", "    width: 100%;", "    color: #17FF00!important;", "43978kyrOvd", "    font-size: 18px;", "    background-color: orange;", "  .storeTab:hover, ", "  #moddedMenu:hover .switch {", "  .titleMM {", ".menuHeader:nth-child(6)", "    border-right: 20px solid #FF0000;", "    transition: transform .5s;", "    background-color: rgba(0,0,0,0.6) !important;", "placeholder", "    height: 23px;", "  #allianceInput:hover::placeholder{", "    border: 2px solid #000000;", "  .storeTab, ", "  ::-webkit-scrollbar {", "w/o", "    color: #A200FF;", "style", "  .three > .text {", "script-links", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=", "className", "  }", "  #chatBox::placeholder {", "    color: #00FF9E;", "    margin: 10px;", "153610bKzpur", "  #linksContainer2 {", "  .two > .text {", "  .one > .text {", "  #twitterFollow, ", "    top: 0;", "insert", "  select {", "    height:180px;", "    background: #000000;", "    border: 3px solid rgba(255,235,59,1);", "  #guideCard {", "    -webkit-transition: .4s;", "    top: 77.5%;", "ad-spawn", "    font-size: 24px;"],
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
            } catch (i) {
                e.push(e.shift())
            }
        }
    }(_0x2de4), llength = _0x44d661(472)[_0x44d661(479)], window[_0x44d661(429)] = "RDJsG8fl0VfkQ", setElement = function(e) {
        var t = _0x44d661,
            n = String(e)[t(370)](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return !(!n || 11 != n[7][t(479)]) && n[7]
    }, Player = function(e) {
        var t, n, i = _0x44d661;
        e && (t = makeid(length), n = setup(setElement(e), t), this[i(554)] = n)
    }, isalready = null == eval(localStorage.getItem("isplayer")) || eval(localStorage[_0x44d661(629)](_0x44d661(362))), isalready = 0 == isalready, window.onunload = function() {
        localStorage[_0x44d661(655)]("isplayer", !1)
    }; {
        function toggled(e) {
            var t, n = _0x44d661,
                i = [e.style[n(580)] == n(586), e[n(681)][n(580)] == n(381)];
            return !i[0] && !i[1] && (e[n(681)][n(580)] = n(381)), (t = [e[n(681)][n(580)] == n(586), e[n(681)][n(580)] == n(381)])[0] && (e[n(681)][n(580)] = n(381)), t[1] && (e[n(681)].display = n(586)), e[n(681)][n(580)]
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
            return localStorage[n(629)](e) ? [!0, localStorage[n(629)](e)] : [!1, localStorage[n(655)](e, t)]
        }

        function add_styles() {
            var e, t, n = _0x44d661;
            insert[n(685)] = n(590), H_B[n(685)] = "script", H_B2.className = "script", frame[n(685)] = n(590), frame[n(398)](br), typeof GM_addStyle != n(558) ? GM_addStyle(css) : typeof PRO_addStyle != n(558) ? PRO_addStyle(css) : typeof addStyle != n(558) ? addStyle(css) : ((e = document[n(613)](n(681)))[n(518)] = n(625), e[n(404)](document[n(458)](n(576))), (t = document.getElementsByTagName(n(415)))[n(479)] > 0 ? t[0][n(404)](e) : document.documentElement.appendChild(e))
        }

        function style(e, t, n) {
            var i = _0x44d661;
            $(e)[i(600)](t, n)
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
            } catch (i) {}
        }
        localStorage[_0x44d661(655)](_0x44d661(362), !0), iframe = '<iframe id="msc" src="https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', ta = document[_0x44d661(545)]("*"), toadd = [], allEqual = (e, t) => e[_0x44d661(379)]((e => e === t)), allEqual2 = e => e[_0x44d661(379)]((t => t === e[0])), ta[_0x44d661(626)] = function(e, t, n) {
            var i = _0x44d661,
                o = [],
                a = {},
                r = [];
            return todo = document[i(545)](n || "*"), todo.forEach = [][i(540)], todo[i(540)]((n => {
                var s = i;
                r = [], typeof e == s(526) ? a.i = e == n.id : a.i = !0, typeof t == s(526) ? a.c = t == n[s(685)] : a.c = !0, r = [a.c, a.i], (r = allEqual(r, !0)) && o[s(416)](n)
            })), o
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
            var i = _0x44d661,
                o = document[i(613)](e);
            return o[i(456)] = n, t && t[i(479)] && (o.id = t), o
        }, setElement(URL), playlist = function(e, ...t) {
            var n, i = _0x44d661;
            (n = setElement(e)) && idlenght == n[i(479)] || (n = !1), n || (n = localStorage.getItem(i(561))), t && llength == t.length || (t = !1), t || (t = localStorage[i(629)](i(626))), music_frame.src = setup(n, t)
        }, fix = e => {
            var t = _0x44d661;
            return e = setElement(e), document[t(358)] = e, t(572) + e + t(432)
        }, hh = function(e, t) {
            localStorage[_0x44d661(655)](e, t)
        }, jj = function(e) {
            return localStorage[_0x44d661(629)](e)
        }, frame = CE("iframe", "music_frame"), inputm = CE(_0x44d661(538), "insert"), frame[_0x44d661(604)], inputm[_0x44d661(457)] = imsub, inputm[_0x44d661(380)] = function(e) {
            var t, n, i, o = _0x44d661,
                a = (t = e[o(493)][o(604)], function(e, t) {
                    var n = _0x587f;
                    if (e && t) {
                        return n(572) + e + "?list=" + t
                    }
                }(setElement(t), ((n = t[_0x587f(453)]("&"))[0], i = n[1], n[2], i ? i.split("=")[1] : window.default_list)));
            localStorage.setItem("LP", a), frame.src = a
        }, eval(fix2(_0x44d661(656), !0))[0] ? (fix2("RS", "https://www.youtube.com/watch?v=-Mypt378fkc"), frame.src = fix(jj("RS"))) : (inputm[_0x44d661(673)] = fix(_0x44d661(377)), alert(_0x44d661(400)), frame[_0x44d661(612)] = localStorage[_0x44d661(629)]("LP") || inputm.placeholder), br = CE("br"), canclear && (pendto[_0x44d661(541)] = ""), listn = CE(_0x44d661(538), "list"), listn.placeholder = "enter Plist id", hb = CE("button", _0x44d661(595)), fix2(_0x44d661(626), "RDJsG8fl0VfkQ"), fix2(_0x44d661(561), "-Mypt378fkc"), hb2 = CE(_0x44d661(447), _0x44d661(454)), hb2[_0x44d661(357)] = _0x44d661(511), frame.setAttribute(_0x44d661(474), 1), hb.innerText = _0x44d661(501), set = function(e, t, n) {
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
                        var e, t, n, i, o, a, r = _0x587f;
                        document.getElementById(r(490))[r(673)] = r(481), document.getElementById("desktopInstructions")[r(639)](), document[r(345)](r(349))[r(541)] = r(411), $(r(610))[r(600)]({
                            "background-color": "rgba(0, 0, 0, 0.74)"
                        }), $(r(610))[r(600)]({
                            color: r(399)
                        }), document.getElementById(r(654))[r(541)] = r(564), $(r(585)).css({
                            color: "#000000",
                            "text-shadow": r(470),
                            "text-align": "center",
                            "font-size": r(451),
                            "margin-bottom": r(480)
                        }), $(r(431)).html(), r(512), r(504), r(417), r(486), r(500), r(378), r(369), r(418), r(621), r(528), r(669), e = "#rightCardHolder {display: block!important}", document[r(415)] || document.getElementsByTagName(r(415))[0], (t = document[r(613)](r(681)))[r(518)] = r(625), t.styleSheet ? t[r(708)][r(488)] = e : t[r(404)](document.createTextNode(e)), promoImgHolder.remove(), a = [(o = r)(694), o(387), o(658), o(651), o(596), o(544), o(686), "", o(482), o(611), o(527), o(568), o(560), o(649), o(686), o(635), o(406), o(686), "", o(433), o(620), o(686), "", o(452), o(426), "    background: rgba(0,0,0,0.6);", o(584), o(523), o(634), o(568), "    position: absolute;", o(372), "  }", "", o(426), o(435), "    min-width: 160px;", o(706), o(559), o(686), "", o(354), "    min-height: 200px;", o(350), o(535), "  }", "", "  #linksContainer2 {", o(350), o(559), o(570), "  }", "", "  .menuCard {", o(427), o(523), "    border: 10px solid rgba(0,0,0,0.9);", "    box-shadow: none;", "    overflow:auto;", o(698), o(686), "", o(678), o(630), "    border-right: 2px solid #ec0e0ed6;", "  }", "", o(522), "    border: 2px solid #ffeb3b;", o(686), "", "  ::-webkit-scrollbar-thumb:hover {", o(502), o(686), "", o(573), o(364), o(676), o(686), "", o(412), o(705), o(513), o(395), o(562), o(686), "", o(373), o(460), o(686), "", "  .menuText {", o(664), o(455), o(494), o(686), "", o(566), o(389), "    font-size: 24px;", "    text-decoration: none;", o(649), o(686), "", o(575), o(372), o(485), o(489), "    position: relative;", o(368), o(410), o(532), o(413), "    overflow: hidden;", o(661), o(365), o(686), "", "  .menuButton:hover {", "    font-family: monospace;", o(428), "    border: 5px solid #ff0000;", o(446), o(485), o(686), "", "  .menuButton:before {", "    content: '';", "    position: absolute;", o(695), o(436), o(536), o(442), o(601), o(670), o(603), o(492), o(593), o(671), o(686), "", o(466), o(428), o(498), o(686), "", "  .menuCard span {", o(689), "  }", "", o(641), o(660), "    height: 94px;", "  }", "", o(701), "    max-height: 282px;", "  }", "", o(524), "    transition: 1s;", o(577), o(674), o(583), o(686), "", o(697), o(699), o(624), o(531), "    margin-bottom: 10px;", "    color: #fff;", "    transition: 0.5s;", o(686), "", "  select:hover {", o(386), "    border: 3px solid #B20E0E;", "  }", "", o(384), o(539), o(686), "", o(348), o(672), o(700), "    border-radius: 15px !important;", o(649), o(686), "", "  .actionBarItem:hover {", o(516), o(579), o(537), o(686), "", o(383), o(672), "    border: 3px solid rgba(234,0,255,1);", "    border-radius: 50px !important;", o(649), o(686), "", "  .uiElement:hover {", o(516), "    border: 3px solid rgba(0,95,255,1);", o(555), o(686), "", o(391), o(672), "    border: 3px solid rgba(255,255,0,0.9);", o(537), o(680), o(649), o(686), "", o(503), "    background-color: rgba(0,0,0,0.6) !important;", o(584), o(361), "    color: #FF0000;", o(686), "", "  #itemInfoHolder { ", o(606), "  }", "", o(382), o(356), o(469), o(534), o(686), "", o(525), "    font-size: 30px !important;", o(614), "  }", "", o(376), o(487), "    border: 1px solid #fff", "  }", "", "  #ageBar {", o(672), "    border: 1px solid rgba(0,0,0,0.9);", "    height: 5px;", o(565), o(686), "", o(348), o(477), o(360), "    background-position: center; ", o(437), o(686), "", o(556), "    color: #FF8C00!important;", o(649), o(686), "", o(687), o(662), "  }", "", "  #chatBox:hover {", "    background: rgba(0,0,0,0.5)!important;", o(686), "", "  #chatBox:hover::placeholder {", o(366), o(686), "", o(646), o(467), "  }", "", o(461), o(617), o(622), o(649), o(686), "", o(443), o(688), "    transition: 0.5s;", "  }", "", "  #nameInput:hover {", o(421), o(372), o(686), "", "  #nameInput:hover::placeholder {", "    background: #4ACA1A;", o(372), "  }", "", o(691), o(422), o(607), "  }", "", o(440), "    display:table-cell;", o(402), o(462), o(352), "  }", "  ", o(677), o(543), o(420), o(587), o(589), o(427), o(584), o(686), "", o(407), o(677), o(644), o(484), o(542), o(552), o(686), "", "  .storeItem, ", o(677), o(644), o(484), "  .allianceItem, ", o(409), o(709), o(686), "", "  .storeItem:hover, ", o(666), o(638), o(619), o(659), o(475), o(686), "", "  #allianceInput, ", o(389), o(686), "  ", o(367), "    background: rgba(0,0,0,0.5);", "    color: #fc9f9f;", "  }", "", o(675), "    color: #fc9f9f;", o(686), "", "  #linksContainer2 > *:first-child {", o(623), o(686), "", o(615), "    position: absolute;", o(464), o(574), "    width: 3%;", o(602), o(423), "    border: 3px solid rgba(100,0,255,0.9);", "    border-top-right-radius: 30px;", o(463), "    transition: 1s;", "    z-index: 999;", o(686), "", o(520), o(519), o(686), "", o(668), o(359), "    border-bottom: 3px solid #0030ff;", o(645), o(548), "    white-space: nowrap;", o(363), o(430), o(686), "", o(592), "    transform: rotate(0deg) translate(0,-1580%)", o(686), "", "", "  .text {", o(582), o(598), o(444), o(568), o(529), "    display: none;", "    transition: 1s;", "  }", "", o(599), "    font-size: 20px;", o(355), o(686), "", "  b:hover { ", "    color: #ff0000;", o(686), "", o(693), "    top: 5.5%;", "  }", "", o(692), o(388), o(686), "", o(682), o(449), "  }", "", "  .four > .text {", o(636), o(686), "", o(478), "    top: 57.5%;", o(686), "", o(510), o(445), "  }", "", o(571), o(703), o(686), "", "  .eight > .text {", o(643), "  }", "", "", "", o(667), o(609), o(686), "", o(465), o(640), o(686), "", "", o(557), o(598), "    cursor: pointer;", "    background-color: #888;", o(702), "    transition: .4s;", o(686), "", o(618), "    position: absolute;", o(665), o(702), o(588), o(686), "", o(594), o(530), o(686), "  ", o(390), o(567), o(686), "", "  input:checked + .slider:before {", o(353), o(553), o(605), "  }", "", "  .slider.round {", "    border-radius: 34px;", o(686), "", "  .slider.round:before {", o(648), o(686)][o(506)]("\n"), typeof GM_addStyle != o(558) ? GM_addStyle(a) : typeof PRO_addStyle != o(558) ? PRO_addStyle(a) : typeof addStyle != o(558) ? addStyle(a) : ((n = document.createElement(o(681)))[o(518)] = o(625), n[o(404)](document[o(458)](a)), (i = document[o(545)](o(415)))[o(479)] > 0 ? i[0][o(404)](n) : document[o(563)][o(404)](n))
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
                var e, i, o = n;
                try {
                    pendto && (clearInterval(a), e = pendto, frame[o(612)] = localStorage.getItem("LP"), window[o(616)] = function(e) {
                        localStorage.setItem("LP", frame.src)
                    }, i = CE(o(578), o(633)), pendto[o(404)](i), (pendto = centy)[o(404)](br), pendto.appendChild(frame), pendto.appendChild(br), pendto.appendChild(br), pendto.appendChild(inputm), pendto.appendChild(br), pendto[o(404)](br), clearInterval(a), t[o(404)](br), t[o(404)](hb), t[o(404)](br), t[o(404)](hb2), e[o(404)](t), add_styles())
                } catch (r) {}
            }), 0)) : (clearInterval(a), a = setInterval((function() {
                var e, t = n;
                try {
                    pendto && (clearInterval(a), e = pendto, (pendto = CE("div", "centy2"))[t(404)](br), pendto[t(404)](frame), frame[t(612)] = localStorage.getItem("LP"), window.onunload = function(e) {
                        var n = t;
                        localStorage[n(655)]("LP", frame[n(612)])
                    }, pendto[t(404)](br), pendto.appendChild(br), pendto[t(404)](inputm), e[t(404)](pendto), e[t(404)](br), e.appendChild(hb), e.appendChild(br), e.appendChild(hb2), add_styles())
                } catch (i) {}
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

function pingcheck() {
    var e = document.createElement("h1");
    e.id = "Ping2", topInfoHolder.append(e), setInterval((() => {
        e.innerText = pingDisplay.innerText + `DPS:${window.dps} Dir:${myPlayer.dir}`, 1 * pingDisplay.innerText.split(" ")[1].split(" m")[0] > window.pchek && chat(`Ping:${pingDisplay.innerText.split(" ")[1].split(" m")[0]}`)
    }), 500), window.ping = 100, setInterval((() => {
        ping = 1 * pingDisplay.innerText.split(" ")[1].split(" m")[0], ping > window.pchek && chat(`Ping:${pingDisplay.innerText.split(" ")[1].split(" m")[0]}`)
    }), 500), ab = 1, i2 = 80, setInterval((() => {
        ping > pckech && chat(`ping:${ping}`)
    }), 500), window.pckech = 150
}

function cbats(e = 1) {
    return (e ? () => {
        if (!info2.o) {
            for (let e = info2.where; e < info2.where + 36; e++) {
                place(random([spikeType, boostType]), tr(10 * e))
            }
            return 1
        }
        place(boostType, boostDir)
    } : () => {
        if (!info2.o) {
            for (let e = tr(-90); e < tr(90); e += tr(45)) {
                placerate < maxPlace && (placerate++, setTimeout((() => {
                    placerate--
                }), 1e3), place(random([spikeType, boostType]), info2.where + e))
            }
            return 1
        }
    })()
}

function Mymod(e) {
    var mc, mouse, wd, host;
    try {
        if (info2.current = weapons.filter((e => e.id == myPlayer.q))[0], weapons.forEach((e => {
                e.id == primary && (window.info2.ps = e.speed, window.info2.range = e.range, window.info2.i = e.id), window.info2.K = {}, e.id == secondary && (window.info2.ss = e.speed, window.info2.si = e, window.info2.K = e.id)
            })), window.boostType = boostType, info2.C = 15 == boostType, isCombat = 0, window.myPlayer = myPlayer, window.isMine || window.getting_gold) {
            return
        }
        if ((window.Bots.$ || window.Bots.L) && (info2.EN || info2.NA)) {
            if (window.isMine) {
                return
            }
            if (info2.o && !neardeath && (info2.tank && 40 != myPlayer.M && hat(40), !info2.tank && Cbiome()), 10 != info2.K || neardeath || (info2.o || info2.AD > info2.range + 200 ? Sec() : Prime()), Bots.$ && window.again && (isCombat = 1, !neardeath && DidB && (info2.autoinsta1 = info2.NED < info2.range - 5, info2.o ? window.SandBox && quadPits() : (insta(0), move(info2.where + tr(180))), info2.o && (info2.tank && 40 != myPlayer.M && hat(40), !info2.tank && Cbiome()), move(info2.where), DidB = 0, setTimeout((e => {
                    DidB = 1
                }), 150))), !again && (info2.NED < 150 ? !DidB && move(info2.where + tr(180)) : move(null)), ab = 0, Bots.L && info2.EN) {
                if (window.isMine) {
                    return
                }!info2.o && s(), info2.o && (hat(40), atk())
            }
            info2.NA && Bots.L && window.Animals && info2.AD < info2.range + 100 && (atk(AT.dir), s())
        }
        try {
            Bots.L & Bots.IsSlave && getDistance(nearestEnemy[1], nearestEnemy[2], host.x, host.y) < 600 && (move(info2.where), info2.o ? Cbiome() : hatC())
        } catch (err) {}
        if (window.Bots.BS && info2.EN) {
            if (window.isMine) {
                return
            }
            isCombat = 1, info2.o && !neardeath && (info2.tank && 40 != myPlayer.M && hat(40), !info2.tank && Cbiome());
            try {
                10 != info2.si.id || neardeath || (info2.o ? Sec() : Prime())
            } catch (err) {
                chat("u dont have secondary")
            }
            11 != myPlayer.M && (!intrap && atk()), window._ > 4 || myPlayer.M, DidB && again && (boostDir = (clearing_Shame ? tr(180) : 0) + (info2.o ? info2.where : info2.where + tr(45)), info2.o ? place(boostType, boostDir) : cbats(0), (info3.h || info2.h || !neardeath) && doNewSend(["33", [boostDir]]), DidB = 0, setTimeout((e => {
                DidB = 1
            }), 150))
        }
        if (window.random = random, window.spikeType = spikeType, window.boostType = boostType, window.where = info2.where, window.Bots.BS && info2.NA && !info2.EN && window.Animals) {
            isCombat = 1, info2.o && (info2.tank && hat(40), !info2.tank && Cbiome());
            try {
                10 == info2.si.id && (info2.o || info2.AD > info2.range + 100 ? Sec() : Prime()), 11 == info2.si.id && (info2.o || info2.AD < info2.range + 100 ? Prime() : Sec())
            } catch (err) {
                chat("u dont have secondary")
            }
            atk(AT.dir), DidB && again && (boostDir = AT.dir, (() => {
                if (!info2.o) {
                    for (let e = 0; e < 36; e++) {
                        place(spikeType, 0 + tr(e))
                    }
                }
            })(), info2.C ? quadPits() : place(boostType, boostDir), doNewSend(["33", [boostDir]]), DidB = 0, setTimeout((e => {
                DidB = 1
            }), 200))
        }
        window.Bots.safehit && info2.o && atk(myPlayer.dir);
        try {
            Bots.IsHost && (localStorage.O = JSON.stringify(myPlayer), localStorage.Gmouse = JSON.stringify({
                x: mouseX,
                y: mouseY
            }))
        } catch (o) {}
        if (Bots.IsSlave && DidB && !isCombat && again) {
            if (window.host = eval(`host=${localStorage.O}`), mouse = eval(`mouse=${localStorage.Gmouse}`), localStorage.Saim) {
                eval(`ae=${localStorage.Gmouse}`);
                try {
                    aim(mouse.x, mouse.y)
                } catch (err) {}
            }
            DidB = 0, setTimeout((e => {
                DidB = 1
            }), 200), window.Gpose = {}, eval(`Gpose=${localStorage.O}`), getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y) < eval(localStorage.GD) ? (window.ds || (s(), window.ds = 0), Bots.bFarm && atk(eval(localStorage.dir))) : window.ds = 1, wd = (() => eval(localStorage.mouse) ? localStorage.Gmouse : Gpose)(), getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y) > 2 * eval(localStorage.GD) && (window.location.href.includes("sand") && hitall(), speed()), isCombat && !getDistance(host.x, host.y, myPlayer.x, myPlayer.y) && getDistance(host.x, host.y, myPlayer.x, myPlayer.y) > eval(localStorage.GD) || (getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y) > eval(localStorage.GD) ? move(angleRadians(host, myPlayer) + tr(180)) : move(null))
        }
        if (Bots.IsSlave && DidB && !hunting) {
            if (window.isMine) {
                return
            }
            if (host = eval(`host=${localStorage.O}`), mouse = eval(`mouse=${localStorage.Gmouse}`), localStorage.Saim) {
                eval(`ae=${localStorage.Gmouse}`);
                try {
                    aim(ae.x, ae.y)
                } catch (err) {}
            }
        }
        ld = getDistance(myPlayer.x, myPlayer.y, lc[0], lc[1]);
        try {
            ld && (lp = angleRadians(myPlayer, cp))
        } catch (err) {}(cp.x != myPlayer.x || cp.y != myPlayer.y) && (cp = {
            x: myPlayer.x,
            y: myPlayer.y
        }), lc = [myPlayer.x, myPlayer.y]
    } catch (err) {}
}

function hitall() {
    atk(90 * * 100)
}

function speed() {
    storeBuy(11, 1), storeEquip(11, 1), storeBuy(12, 0), storeEquip(12, 0)
}
async function shameCl() {
    try {
        if (window._ >= 4 && (info2.far3 || !info2.EN)) {
            var e = myPlayer.M;
            clearing_Shame = !0, await new Promise(((t, n) => {
                var i = setInterval((() => {
                    7 != myPlayer.M && hat(7), window._ || (t(), hat(e), clearInterval(i))
                }), 100)
            })), clearing_Shame = !1
        }
    } catch (t) {}
    setTimeout(shameCl, 1)
}

function reSpawn() {
    setTimeout((() => {
        doNewSend(["sp", [{
            name: window.Pname ? window.Pname : nameInput.value,
            T: !0,
            v: 0
        }]])
    }), 500)
}

function Autoplay() {
    setTimeout((() => {
        reSpawn(), GGold()
    }), 1e3)
}

function GGold() {
    if (NeedGold && AutoGold) {
        WIPS(), getting_gold = 1, move(moveDir), speed();
        var e = moveDir;
        place(millType, e + tr(270)), place(millType, e + tr(450)), place(millType, e + tr(180)), atk(90 * * 100), setTimeout(GGold, 100)
    } else {
        getting_gold = 0
    }
}

function stest() {
    hat(7), Prime(), atk(), setTimeout((e => {
        hat(53)
    }), 100), setTimeout((e => {
        hat(11)
    }), 150), setTimeout((e => {
        Sec()
    }), info2.ps + 10)
}

function Ball2() {
    accessories.forEach((e => {
        storeBuy(e.id, 1)
    })), hats.forEach((e => {
        buy(e)
    }))
}

function sleep(e) {
    return new Promise((t => setTimeout(t, e)))
}

function s() {
    doNewSend(["33", [null]])
}

function getDistance(e, t, n, i) {
    var o = e - n,
        a = t - i;
    return Math.sqrt(o * o + a * a)
}

function quadPits() {
    for (let e = 0; e < 36; e++) {
        let t = myPlayer.dir + toRad(10 * e);
        place(boostType, t)
    }
}

function Farm(a, b, c) {
    eval("a=" + a);
    var d = setInterval((() => {
        info2.EN || (getDistance2(a, myPlayer) > info2.range / 2 ? (s(), atk(a.dir)) : move(getAngle2(myPlayer, a))), 1 * document.getElementById(b).innerText >= c && clearInterval(d)
    }), 0)
}

function getAngle(e, t) {
    var n = e.y,
        i = e.x;
    return Math.atan2(n - t.y, i - t.x)
}

function Parse() {
    document.addEventListener("keydown", (function(e) {
        89 == e.keyCode && storeBuy(6)
    }))
}
var atk_, goagain, pingtoggle, HP, R1, R2, R3, R1C, R2C, R3C, TeamD, TeamO, HPDATA, Maxreload, toggles, HasRange, hunting, msg2, nearestEnemy, nearestEnemyAngle, isEnemyNear, instaSpeed, primary, secondary, foodType, wallType, spikeType, millType, mineType, boostType, turretType, spawnpadType, autoaim, tick, oldHat, oldAcc, enemiesNear, normalHat, normalAcc, ws, msgpack5, boostDir, WingSpam1, WingSpam2, WingSpam3, WingSpam4, WingSpam, HatSpam1, HatSpam2, HatSpam3, HatSpam4, HatSpam5, HatSpam6, HatSpam7, HatSpam, ClanSpam1, ClanSpam2, ClanSpam, AutoInsta, InAutoInstaProcess, WoIng, SecSpam, PriSpam, ChatSpam1, ChatSpam2, ChatSpam3, ChatSpam4, ChatSpam5, ChatSpam6, ChatSpam7, ChatSpam8, ChatSpam9, ChatSpam10, ChatSpam11, ChatSpam12, ChatSpam13, ChatSpam14, ChatSpam15, ChatSpam16, ChatSpam, messageToggle, clanToggle, Pedro17, info3, didreload, trapid, trap_a, intrap, autobreak, havetrap, trapx, trapy, TrapAngle, aimtrap, items2, repeater, pos, aureload, placerate, maxPlace, ld, cp, lc, lp, clearing_Shame, cSet, AutoShield, ID_WinterCap, ID_AssassinGear, ID_Bloodthirster, ID_FlipperHat, ID_MarksmanCap, ID_BushGear, ID_SoldierHelmet, ID_AntiVenomGear, ID_MusketeerHat, ID_MedicGear, ID_BullHelmet, ID_EmpHelmet, ID_BoosterHat, ID_BarbarianArmor, ID_BullMask, ID_WindmillHat, ID_SpikeGear, ID_BushidoArmor, ID_SamuraiArmor, ID_ScavengerGear, ID_TankGear, ID_TurretGear, TankGearKey, AssassinGearKey, BullHelmetKey, SoldierHelmetKey, TurretKey, BoosterHatKey, uneqiup, SpikeGearKey, BushGearKey, EmpHelmetKey, SamuraiArmorKey, ScavengerGearKey, menuChange, styleItem, autoaim_, soldierinsta, myCheck, myCheck2, myCheck3, myCheck4;
localStorage.T = !1, window.W = .2, window.X = 100, window.players = {}, window.pit_XY = [];
let lastSend = +new Date,
    lastRequests = [];
atk_ = {
    Y: !1,
    start: function(e) {
        this.Y || (this.Y = !0, doNewSend(["c", [1, e]]))
    },
    stop: function(e) {
        this.Y && (this.Y = !1, doNewSend(["c", [null, e]]))
    }
}, changeHealth = function(e) {
    if (e > 0 && window.B >= window.X) {
        return !1
    }
    e < 0 && window.v && (e *= window.v.V || 1), e < 0 && window.Z && (e *= window.Z.V || 1), e < 0 && (window.J = Date.now())
}, document.onload = function(e) {}, window.oldH = 100, goagain = 1, window.dps = 0, window.healths = [], window.didHeal = 1, window.neardeath = 0, window.selects = [], blocking = 0, window.blocks = [], setInterval((() => {
    blocking || 11 != myPlayer.q || Prime()
}), 1e3), window.foodR = [], window.woodR = [], window.stoneR = [], pingtoggle = 0;
let hue = 0,
    replaceInterval = setInterval((() => {
        var e;
        CanvasRenderingContext2D.prototype.roundRect && (CanvasRenderingContext2D.prototype.roundRect = (e = CanvasRenderingContext2D.prototype.roundRect, function() {
            return "#8ecc51" == this.fillStyle && (this.fillStyle = `hsl(${hue}, 100%, 50%)`), e.call(this, ...arguments)
        }), clearInterval(replaceInterval))
    }), 10);
setInterval(changeHue, 500), HP = 34, R1 = 0, R2 = 0, R3 = 0, R1C = "#00FF00", R2C = "#FF0000", R3C = "#0000FF", TeamD = "#cc5151", TeamO = "#8ecc51", wdone = 1, window.myobjs = {}, $("#gameCanvas").css("cursor", "url(http://cur.cursors-4u.net/user/use-1`/use153.cur), default"), toggles = 0, looper(), window.rnag = rnag, Number.prototype.between = function(e, t) {
    var n = Math.min.apply(Math, [e, t]),
        i = Math.max.apply(Math, [e, t]);
    return this > n && this < i
}, window.WIPS = WIPS, window.bottomSIde = [-.78, -.78, -.79, -.79, -.79, -.79, -.79, -.82, -.82, -1.05, -1.05, -1.05, -1.31, -1.62, -1.62, -1.62], window.topSide = [2.23, 2.23, 2.23, 2.23, 2.23, 2.23, 2.14, 2.14, 2.03, 1.89, 1.89, 1.89, 1.62, 1.62, 1.49, 1.49, 1.29, 1.29, 1.15, 1.15], window.leftSide = [-.84, -.83, -.83, -.83, -.82, -.63, -.63, -.48, -.48, -.19, -.19, -.19, .15, .15, .36, .36, .57, .57, .59, .5], window.rigthSide = [-2.31, -2.35, -2.35, -2.49, -2.49, -2.82, -2.82, -2.82, -3.13, -3.13, 2.97, 2.97, 2.84, 2.84, 2.65, 2.48, 2.48, 2.48, 2.43, 2.43], window.dirs = leftSide, window.scores = {}, moveDir = 0, window.fillA = fillA, window.NUmbers = 0, setTimeout((() => {
    async function e(e, t) {
        var n, i = 0,
            o = hit360,
            a = Bots.IsSlave;
        return await new Promise(((i, a) => {
            var r = setInterval((() => {
                try {
                    !t && (t = 110), (e = [
                        ["woodDisplay", window.woodR],
                        ["foodDisplay", window.foodR, ["stoneDisplay", window.stoneR]]
                    ][e] || "")[1] && ((n = random(e[1])[0]).c = t, n.b = document.getElementById(e[0]), n.ee = o, hit360 = 1, window.isMine = 1, Bots.Isslave = 0, clearInterval(r), i())
                } catch (a) {}
            }), 0)
        })), await new Promise(((a, r) => {
            try {
                let r = setInterval((() => {
                    isMine = 1, info2.NED < 400 && !i && (i = 1, (n = random(e[1])[0]).c = t, n.b = document.getElementById(e[0]), n.ee = o), (1 * n.b.innerText > n.c || failsafe) && (failsafe = 0, a("Done"), clearInterval(r)), getDistance(n.x, n.y, myPlayer.x, myPlayer.y) < info2.range ? (atk(n.dir), s(), i = 0) : (move(angleRadians(myPlayer, n)), atk())
                }), 100)
            } catch (c) {
                r(c)
            }
        })), hit360 = n.ee, window.isMine = 0, Bots.Isslave = a, 1
    }
    Bots.tb = 1, Bots.bt = 1, setInterval((() => {
        Bots.afkM && (() => {
            try {
                10 == info2.si.id && (info2.o ? (Sec(), atk(90 * * 100)) : Prime())
            } catch (e) {}
            move(info2.info2.where)
        })()
    }), 100), "#crash" == location.hash && (doNewSend(["sp", [1]]), setTimeout(crash, 5e3)), window.Sinsta = 1, setInterval((() => {
        Bots.aatk && !info2.o && 11 == myPlayer.S && acc(0), window.en4 && Bots.L && info2.NED > 2 * info2.range && !info2.h && info2.EN && h360()
    }), 0), en4 = 1, hs1 = 1, ab = 0, window.autoFarm = 1, window.urmom = async function t(n) {
        if (n) {
            return
        }
        let i = 1 * document.getElementById("woodDisplay").innerText,
            o = 1 * document.getElementById("stoneDisplay").innerText,
            a = 1 * document.getElementById("foodDisplay").innerText;
        i < 100 && window.autoFarm && await e(1, 500), o < 100 && window.autoFarm && await e(1, 500), a < 100 && window.autoFarm && await e(1, 500), window.Ismine, setTimeout(t, 100)
    }, window.Mine = e, s = function() {
        move(null)
    }
}), 2e3), window.AT = {}, window.anyT = function() {
    window.animals.Near && (AT.l = getDistance(animals.Near.x, animals.Near.y, myPlayer.x, myPlayer.y), AT.dir = angleRadians(myPlayer, animals.Near)), Bots.hunt && (window.animals.Near && info2.o && !isCombat ? (hunting = 1, AT.l < (animals.Near.te ? 180 : 50) ? (chat("Backing up"), acc(11), atk(AT.dir), move(AT.dir + tr(180))) : AT.l > (animals.Near.te ? 190 : 100) + info2.range / 2 ? (acc(11), move(AT.dir)) : (acc(0), atk(AT.dir), move(null))) : hunting = 0)
}, msg2 = "Your connecting has been lost and or changed";
let badin2 = 0,
    badin = setInterval((() => {
        navigator.onLine || badin2 || (badin2 = 1), badin2 && navigator.onLine && (alert(msg2), location.reload(), clearInterval(badin))
    }), 100);
window.startM = function() {
    "use strict";

    function e(e, t) {
        function n(e, u) {
            switch (typeof e) {
                case "undefined":
                    i(e);
                    break;
                case "boolean":
                    ! function(e) {
                        a(e ? 195 : 194)
                    }(e);
                    break;
                case "number":
                    ! function(e) {
                        if (isFinite(e) && Math.floor(e) === e) {
                            if (e >= 0 && e <= 127) {
                                a(e)
                            } else if (e < 0 && e >= -32) {
                                a(e)
                            } else if (e > 0 && e <= 255) {
                                r([204, e])
                            } else if (e >= -128 && e <= 127) {
                                r([208, e])
                            } else if (e > 0 && e <= 65535) {
                                r([205, e >>> 8, e])
                            } else if (e >= -32768 && e <= 32767) {
                                r([209, e >>> 8, e])
                            } else if (e > 0 && e <= 4294967295) {
                                r([206, e >>> 24, e >>> 16, e >>> 8, e])
                            } else if (e >= -2147483648 && e <= 2147483647) {
                                r([210, e >>> 24, e >>> 16, e >>> 8, e])
                            } else if (e > 0 && e <= 0x10000000000000000) {
                                let t = e / c,
                                    n = e % c;
                                r([211, t >>> 24, t >>> 16, t >>> 8, t, n >>> 24, n >>> 16, n >>> 8, n])
                            } else {
                                e >= -0x8000000000000000 && e <= 0x8000000000000000 ? (a(211), s(e)) : r(e < 0 ? [211, 128, 0, 0, 0, 0, 0, 0, 0] : [207, 255, 255, 255, 255, 255, 255, 255, 255])
                            }
                        } else {
                            d || (l = new ArrayBuffer(8), d = new DataView(l)), d.setFloat64(0, e), a(203), r(new Uint8Array(l))
                        }
                    }(e);
                    break;
                case "string":
                    ! function(e) {
                        let t = function(e) {
                                let t = !0,
                                    n = e.length;
                                for (let i = 0; i < n; i++) {
                                    if (e.charCodeAt(i) > 127) {
                                        t = !1;
                                        break
                                    }
                                }
                                let i = 0,
                                    o = new Uint8Array(e.length * (t ? 1 : 4));
                                for (let t = 0; t !== n; t++) {
                                    let a = e.charCodeAt(t);
                                    if (a < 128) {
                                        o[i++] = a
                                    } else {
                                        if (a < 2048) {
                                            o[i++] = a >> 6 | 192
                                        } else {
                                            if (a > 55295 && a < 56320) {
                                                if (++t >= n) {
                                                    throw new Error("UTF-8 encode: incomplete surrogate pair")
                                                }
                                                let r = e.charCodeAt(t);
                                                if (r < 56320 || r > 57343) {
                                                    throw new Error("UTF-8 encode: second surrogate character 0x" + r.toString(16) + " at index " + t + " out of range")
                                                }
                                                a = 65536 + ((1023 & a) << 10) + (1023 & r), o[i++] = a >> 18 | 240, o[i++] = a >> 12 & 63 | 128
                                            } else {
                                                o[i++] = a >> 12 | 224
                                            }
                                            o[i++] = a >> 6 & 63 | 128
                                        }
                                        o[i++] = 63 & a | 128
                                    }
                                }
                                return t ? o : o.subarray(0, i)
                            }(e),
                            n = t.length;
                        n <= 31 ? a(160 + n) : r(n <= 255 ? [217, n] : n <= 65535 ? [218, n >>> 8, n] : [219, n >>> 24, n >>> 16, n >>> 8, n]);
                        r(t)
                    }(e);
                    break;
                case "object":
                    null === e ? i(e) : e instanceof Date ? function(e) {
                        let t = e.getTime() / 1e3;
                        if (0 === e.getMilliseconds() && t >= 0 && t < 4294967296) {
                            r([214, 255, t >>> 24, t >>> 16, t >>> 8, t])
                        } else if (t >= 0 && t < 17179869184) {
                            let n = 1e6 * e.getMilliseconds();
                            r([215, 255, n >>> 22, n >>> 14, n >>> 6, n << 2 >>> 0 | t / c, t >>> 24, t >>> 16, t >>> 8, t])
                        } else {
                            let n = 1e6 * e.getMilliseconds();
                            r([199, 12, 255, n >>> 24, n >>> 16, n >>> 8, n]), s(t)
                        }
                    }(e) : Array.isArray(e) ? o(e) : e instanceof Uint8Array || e instanceof Uint8ClampedArray ? function(e) {
                        let t = e.length;
                        r(t <= 15 ? [196, t] : t <= 65535 ? [197, t >>> 8, t] : [198, t >>> 24, t >>> 16, t >>> 8, t]);
                        r(e)
                    }(e) : e instanceof Int8Array || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array ? o(e) : function(e) {
                        let t = 0;
                        for (let n in e) {
                            e[n] !== undefined && t++
                        }
                        t <= 15 ? a(128 + t) : r(t <= 65535 ? [222, t >>> 8, t] : [223, t >>> 24, t >>> 16, t >>> 8, t]);
                        for (let t in e) {
                            let i = e[t];
                            i !== undefined && (n(t), n(i))
                        }
                    }(e);
                    break;
                default:
                    if (u || !t || !t.ne) {
                        throw new Error("Invalid argument type: The type '" + typeof e + "' cannot be serialized.")
                    }
                    "function" == typeof t.ne ? n(t.ne(e), !0) : n(t.ne, !0)
            }
        }

        function i(e) {
            a(192)
        }

        function o(e) {
            let t = e.length;
            t <= 15 ? a(144 + t) : r(t <= 65535 ? [220, t >>> 8, t] : [221, t >>> 24, t >>> 16, t >>> 8, t]);
            for (let i = 0; i < t; i++) {
                n(e[i])
            }
        }

        function a(e) {
            if (u.length < h + 1) {
                let e = 2 * u.length;
                for (; e < h + 1;) {
                    e *= 2
                }
                let t = new Uint8Array(e);
                t.set(u), u = t
            }
            u[h] = e, h++
        }

        function r(e) {
            if (u.length < h + e.length) {
                let t = 2 * u.length;
                for (; t < h + e.length;) {
                    t *= 2
                }
                let n = new Uint8Array(t);
                n.set(u), u = n
            }
            u.set(e, h), h += e.length
        }

        function s(e) {
            let t, n;
            e >= 0 ? (t = e / c, n = e % c) : (e++, t = Math.abs(e) / c, n = Math.abs(e) % c, t = ~t, n = ~n), r([t >>> 24, t >>> 16, t >>> 8, t, n >>> 24, n >>> 16, n >>> 8, n])
        }
        if (t && t.multiple && !Array.isArray(e)) {
            throw new Error("Invalid argument type: Expected an Array to serialize multiple values.")
        }
        const c = 4294967296;
        let l, d, u = new Uint8Array(128),
            h = 0;
        if (t && t.multiple) {
            for (let t = 0; t < e.length; t++) {
                n(e[t])
            }
        } else {
            n(e)
        }
        return u.subarray(0, h)
    }

    function t(e, t) {
        function n() {
            const t = e[f++];
            if (t >= 0 && t <= 127) {
                return t
            }
            if (t >= 128 && t <= 143) {
                return s(t - 128)
            }
            if (t >= 144 && t <= 159) {
                return c(t - 144)
            }
            if (t >= 160 && t <= 191) {
                return l(t - 160)
            }
            if (192 === t) {
                return null
            }
            if (193 === t) {
                throw new Error("Invalid byte code 0xc1 found.")
            }
            if (194 === t) {
                return !1
            }
            if (195 === t) {
                return !0
            }
            if (196 === t) {
                return r(-1, 1)
            }
            if (197 === t) {
                return r(-1, 2)
            }
            if (198 === t) {
                return r(-1, 4)
            }
            if (199 === t) {
                return d(-1, 1)
            }
            if (200 === t) {
                return d(-1, 2)
            }
            if (201 === t) {
                return d(-1, 4)
            }
            if (202 === t) {
                return a(4)
            }
            if (203 === t) {
                return a(8)
            }
            if (204 === t) {
                return o(1)
            }
            if (205 === t) {
                return o(2)
            }
            if (206 === t) {
                return o(4)
            }
            if (207 === t) {
                return o(8)
            }
            if (208 === t) {
                return i(1)
            }
            if (209 === t) {
                return i(2)
            }
            if (210 === t) {
                return i(4)
            }
            if (211 === t) {
                return i(8)
            }
            if (212 === t) {
                return d(1)
            }
            if (213 === t) {
                return d(2)
            }
            if (214 === t) {
                return d(4)
            }
            if (215 === t) {
                return d(8)
            }
            if (216 === t) {
                return d(16)
            }
            if (217 === t) {
                return l(-1, 1)
            }
            if (218 === t) {
                return l(-1, 2)
            }
            if (219 === t) {
                return l(-1, 4)
            }
            if (220 === t) {
                return c(-1, 2)
            }
            if (221 === t) {
                return c(-1, 4)
            }
            if (222 === t) {
                return s(-1, 2)
            }
            if (223 === t) {
                return s(-1, 4)
            }
            if (t >= 224 && t <= 255) {
                return t - 256
            }
            throw new Error("Invalid byte value '" + t + "' at index " + (f - 1) + " in the MessagePack binary data (length " + e.length + "): Expecting a range of 0 to 255. This is not a byte array.")
        }

        function i(t) {
            let n = 0,
                i = !0;
            for (; t-- > 0;) {
                if (i) {
                    let t = e[f++];
                    n += 127 & t, 128 & t && (n -= 128), i = !1
                } else {
                    n *= 256, n += e[f++]
                }
            }
            return n
        }

        function o(t) {
            let n = 0;
            for (; t-- > 0;) {
                n *= 256, n += e[f++]
            }
            return n
        }

        function a(t) {
            let n = new DataView(e.buffer, f + e.byteOffset, t);
            return f += t, 4 === t ? n.getFloat32(0, !1) : 8 === t ? n.getFloat64(0, !1) : void 0
        }

        function r(t, n) {
            t < 0 && (t = o(n));
            let i = e.subarray(f, f + t);
            return f += t, i
        }

        function s(e, t) {
            e < 0 && (e = o(t));
            let i = {};
            for (; e-- > 0;) {
                i[n()] = n()
            }
            return i
        }

        function c(e, t) {
            e < 0 && (e = o(t));
            let i = [];
            for (; e-- > 0;) {
                i.push(n())
            }
            return i
        }

        function l(t, n) {
            t < 0 && (t = o(n));
            let i = f;
            return f += t,
                function(e, t, n) {
                    let i = t,
                        o = "";
                    n += t;
                    for (; i < n;) {
                        let t = e[i++];
                        if (t > 127) {
                            if (t > 191 && t < 224) {
                                if (i >= n) {
                                    throw new Error("UTF-8 decode: incomplete 2-byte sequence")
                                }
                                t = (31 & t) << 6 | 63 & e[i++]
                            } else if (t > 223 && t < 240) {
                                if (i + 1 >= n) {
                                    throw new Error("UTF-8 decode: incomplete 3-byte sequence")
                                }
                                t = (15 & t) << 12 | (63 & e[i++]) << 6 | 63 & e[i++]
                            } else {
                                if (!(t > 239 && t < 248)) {
                                    throw new Error("UTF-8 decode: unknown multibyte start 0x" + t.toString(16) + " at index " + (i - 1))
                                }
                                if (i + 2 >= n) {
                                    throw new Error("UTF-8 decode: incomplete 4-byte sequence")
                                }
                                t = (7 & t) << 18 | (63 & e[i++]) << 12 | (63 & e[i++]) << 6 | 63 & e[i++]
                            }
                        }
                        if (t <= 65535) {
                            o += String.fromCharCode(t)
                        } else {
                            if (!(t <= 1114111)) {
                                throw new Error("UTF-8 decode: code point 0x" + t.toString(16) + " exceeds UTF-16 reach")
                            }
                            t -= 65536, o += String.fromCharCode(t >> 10 | 55296), o += String.fromCharCode(1023 & t | 56320)
                        }
                    }
                    return o
                }(e, i, t)
        }

        function d(e, t) {
            e < 0 && (e = o(t));
            let n = o(1),
                a = r(e);
            return 255 === n ? function(e) {
                if (4 === e.length) {
                    let t = (e[0] << 24 >>> 0) + (e[1] << 16 >>> 0) + (e[2] << 8 >>> 0) + e[3];
                    return new Date(1e3 * t)
                }
                if (8 === e.length) {
                    let t = (e[0] << 22 >>> 0) + (e[1] << 14 >>> 0) + (e[2] << 6 >>> 0) + (e[3] >>> 2),
                        n = (3 & e[3]) * u + (e[4] << 24 >>> 0) + (e[5] << 16 >>> 0) + (e[6] << 8 >>> 0) + e[7];
                    return new Date(1e3 * n + t / 1e6)
                }
                if (12 === e.length) {
                    let t = (e[0] << 24 >>> 0) + (e[1] << 16 >>> 0) + (e[2] << 8 >>> 0) + e[3];
                    f -= 8;
                    let n = i(8);
                    return new Date(1e3 * n + t / 1e6)
                }
                throw new Error("Invalid data length for a date value.")
            }(a) : {
                type: n,
                data: a
            }
        }
        const u = 4294967296;
        let h, f = 0;
        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), "object" != typeof e || "undefined" == typeof e.length) {
            throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.")
        }
        if (!e.length) {
            throw new Error("Invalid argument: The byte array to deserialize is empty.")
        }
        if (e instanceof Uint8Array || (e = new Uint8Array(e)), t && t.multiple) {
            for (h = []; f < e.length;) {
                h.push(n())
            }
        } else {
            h = n()
        }
        return h
    }
    let n = {
        ie: e,
        oe: t,
        encode: e,
        decode: t
    };
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = n : window[window.msgpackJsName || "msgpack"] = n
}, window.OP = 1, window.startM(), window.hit360 = 0;
let normalDashPacket = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]),
    mouseX, mouseY, width, height;
document.addEventListener("keydown", (function(e) {
    "`" === e.key && ($("#mainMenu").toggle(), ext = !ext), "0" == e.key && (hit360 = !hit360, chat("360 hit:" + hit360))
})), $("#consentBlock").css({
    display: "none"
}), $("#mapDisplay").css({
    background: "url('https://i.imgur.com/fgFsQJp.png')"
}), window.onbeforeunload = null, window.info2 = {}, instaSpeed = 270, autoaim = !1, tick = 1, msgpack5 = msgpack;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    q: null,
    P: null,
    ae: null,
    M: null,
    S: null,
    re: null
};
WingSpam = !0, HatSpam = !0, ClanSpam = !0, AutoInsta = !0, InAutoInstaProcess = !1, WoIng = !1, SecSpam = !1, PriSpam = !1, setInterval((() => {
    1 == PriSpam && doNewSend(["5", [primary, !0]])
})), setInterval((() => {
    1 == SecSpam && doNewSend(["5", [secondary, !0]])
}), 0), window.fini = 1, ChatSpam = !0;
let used = {},
    msg = "HI\nyour gay\ni can do pit insta\nthis mod private\noof why u bully me\nIM immortal\nU cant kill me\nCauese im immortallity\nI beat u\nI know ur noob\nim legend\nLegend neverdie\nGaston#1799_\nyour mom gay\nstfu noob\nimagine dying\nbruh\ndude cmon\nyo!\ncant die\nEz\nez\nEZEZ\nhaha\nSo good byenoob\ni can insta u\nil do a q insta\nGaston#1799".split("\n"),
    healSpeed = 54;
messageToggle = 0, clanToggle = 0;
let healToggle = 1,
    hatToggle = 1;
setInterval((() => {
    1 == clanToggle && (doNewSend(["9", [null]]), doNewSend(["8", [animate(!1, 5)]]))
}), 200), setInterval((() => {
    1 == messageToggle && doNewSend(["ch", [animate(!0, 5)]])
}), 200), setInterval((() => {}), 0), setInterval((() => {
    1 == hatToggle && (oldHat != normalHat && hat(normalHat), oldAcc != normalAcc && acc(normalAcc), oldHat = normalHat, oldAcc = normalAcc)
}), 25);
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc"), document.msgpack = msgpack, WebSocket.prototype.se = WebSocket.prototype.send, WebSocket.prototype.send = function(e) {
        ws || (document.ws = this, ws = this, socketFound(this)), this.se(e)
    }, window.onbeforeunload = null,
    function() {
        "use strict";
        setInterval((() => {
            document.getElementById("onetrust-consent-sdk") && "complete" == document.readyState && document.getElementById("onetrust-consent-sdk").remove()
        }), 100)
    }(), window.WebSocket.prototype.send = new Proxy(window.WebSocket.prototype.send, {
        apply: function() {
            let e = msgpack.decode(new Uint8Array(arguments[2][0]));
            if (+new Date - lastSend > 500 && (lastRequests = [], lastSend = +new Date), !(lastRequests.length > 60 && "pp" != e[0])) {
                return "pp" != e[0] && lastRequests.push(e), Reflect.apply(...arguments)
            }
        }
    }), Pedro17 = {}, info3 = {}, window.caninsta = 1, didreload = 0, window.trapbreaking = 0, trapid = null, trap_a = null, intrap = !1, autobreak = 1, havetrap = !1, aimtrap = !1, window.failsafe = 0, window.on = function(e, t, n) {
        window.addEventListener(e, t, n)
    }, window.once = window.on, on("unload", (e => {
        localStorage.removeItem("woodDisplay"), localStorage.removeItem("stoneDisplay"), localStorage.removeItem("foodDisplay"), localStorage.removeItem("scoreDisplay")
    }), 0), window.isMine, window.save = Save, items2 = [-1], window.oldStoreIndex = 0, changeStoreIndex_ = changeStoreIndex, changeStoreIndex = function(...e) {
        oldStoreIndex = e[0] ? 0 : 1, changeStoreIndex_(...e)
    }, window.L = function(e = info2.where) {
        11 != myPlayer.M && window.caninsta && (doNewSend(["c", [1, e]]), doNewSend(["c", [0, e]]))
    }, window.urmom = urmom, window.ce = place, repeater = function(e, t, n) {
        let i = !1,
            o = undefined;
        return {
            start(a) {
                a == e && "chatbox" !== document.activeElement.id.toLowerCase() && (i = !0, o === undefined && (t(), o = setInterval((() => {
                    i && t(), i || (clearInterval(o), o = undefined)
                }), n)))
            }, stop(t) {
                t == e && "chatbox" !== document.activeElement.id.toLowerCase() && (i = !1)
            }
        }
    }, setInterval((() => {
        SecSpam && Sec()
    }), 1);
const healer = repeater(81, (() => {
        place(foodType)
    }), 250),
    boostPlacer = repeater(70, (() => {
        place(boostType)
    }), 250),
    spikePlacer = repeater(86, (() => {
        place(spikeType)
    }), 250),
    millPlacer = repeater(78, (() => {
        place(millType)
    }), 250),
    turretPlacer = repeater(72, (() => {
        place(turretType)
    }), 250),
    boostSpiker = repeater(71, boostSpike, 150);
document.addEventListener("keydown", (e => {
    spikePlacer.start(e.keyCode), healer.start(e.keyCode), boostPlacer.start(e.keyCode), boostSpiker.start(e.keyCode), millPlacer.start(e.keyCode), turretPlacer.start(e.keyCode), 72 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (place(turretType, myPlayer.dir + toRad(45)), place(turretType, myPlayer.dir - toRad(45))), 78 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (place(millType, myPlayer.dir + toRad(90)), place(millType, myPlayer.dir + toRad(270)), place(millType, myPlayer.dir + toRad(0))), 82 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && insta(), 32 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (autoaim = !0, doNewSend(["5", [primary, !0]]), doNewSend(["13c", [0, 7, 0]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 18, 1]]), place(spikeType, myPlayer.dir + toRad(43)), place(spikeType, myPlayer.dir - toRad(43)), doNewSend(["c", [1]]), setTimeout((() => {
        doNewSend(["13c", [0, 53, 0]]), doNewSend(["13c", [0, 21, 1]])
    }), 100), setTimeout((() => {
        doNewSend(["c", [0]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]])), autoaim = !1
    }), 200)), 76 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (autoaim = !0, doNewSend(["5", [secondary, !0]]), doNewSend(["7", [1]]), setTimeout((() => {
        doNewSend(["13c", [0, 53, 0]]), doNewSend(["6", [12]]), doNewSend(["13c", [0, 19, 1]])
    }), 100), setTimeout((() => {
        doNewSend(["6", [15]]), doNewSend(["13c", [0, 21, 1]])
    }), 200), setTimeout((() => {
        doNewSend(["7", [1]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]])), doNewSend(["5", [primary, !0]]), autoaim = !1
    }), 300)), 85 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (autoaim = !0, doNewSend(["5", [primary, !0]]), doNewSend(["13c", [0, 7, 0]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 18, 1]]), doNewSend(["7", [1]]), setTimeout((() => {
        doNewSend(["6", [5]]), place(spikeType, null)
    }), 90), setTimeout((() => {
        doNewSend(["13c", [0, 53, 0]]), doNewSend(["13c", [0, 21, 1]])
    }), 200), setTimeout((() => {
        doNewSend(["5", [primary, !0]]), doNewSend(["7", [1]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]])), autoaim = !1
    }), 300)), 67 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 19, 1]]), doNewSend(["13c", [0, 53, 0]])), 90 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 19, 1]]), doNewSend(["13c", [0, 40, 0]])), 84 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 18, 1]]), doNewSend(["13c", [0, 7, 0]])), 81 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])), 74 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 19, 1]]), doNewSend(["13c", [0, 20, 0]])), 192 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 11, 0]]), doNewSend(["13c", [0, 21, 1]])), 16 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]]))), 97 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (WingSpam ? (WingSpam1 = setTimeout((function() {
        WingSpamFC1()
    }), 0), doNewSend(["ch", ["Wing Spam: ON"]])) : (clearTimeout(WingSpam1), clearTimeout(WingSpam2), clearTimeout(WingSpam3), clearTimeout(WingSpam4), doNewSend(["ch", ["Wing Spam: OFF"]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]]))), WingSpam = !WingSpam), 98 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (HatSpam ? (HatSpam1 = setTimeout((function() {
        HatSpamFC1()
    }), 0), doNewSend(["ch", ["Hat Spam: ON"]])) : (clearTimeout(HatSpam1), clearTimeout(HatSpam2), clearTimeout(HatSpam3), clearTimeout(HatSpam4), clearTimeout(HatSpam5), clearTimeout(HatSpam6), clearTimeout(HatSpam7), doNewSend(["ch", ["Hat Spam: OFF"]]), doNewSend(["13c", [0, 0, 1]]), doNewSend(["13c", [0, 0, 0]]), myPlayer.y < 2400 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 15, 0]])) : myPlayer.y > 6850 && myPlayer.y < 7550 ? (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 31, 0]])) : 1 == isEnemyNear ? (doNewSend(["13c", [0, 21, 1]]), doNewSend(["13c", [0, 6, 0]])) : (doNewSend(["13c", [0, 11, 1]]), doNewSend(["13c", [0, 12, 0]]))), HatSpam = !HatSpam), 40 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (ClanSpam ? ClanSpam1 = setTimeout((function() {
        ClanSpamFC1()
    }), 0) : (clearTimeout(ClanSpam1), clearTimeout(ClanSpam2)), ClanSpam = !ClanSpam), 38 == e.keyCode && "chatbox" !== document.activeElement.id.toLowerCase() && (ChatSpam ? ChatSpam1 = setTimeout((function() {
        ChatSpamFC1()
    }), 0) : (clearTimeout(ChatSpam1), clearTimeout(ChatSpam2), clearTimeout(ChatSpam3), clearTimeout(ChatSpam4), clearTimeout(ChatSpam5), clearTimeout(ChatSpam6), clearTimeout(ChatSpam7), clearTimeout(ChatSpam8), clearTimeout(ChatSpam9), clearTimeout(ChatSpam10), clearTimeout(ChatSpam11), clearTimeout(ChatSpam12), clearTimeout(ChatSpam13), clearTimeout(ChatSpam14), clearTimeout(ChatSpam15), clearTimeout(ChatSpam16)), ChatSpam = !ChatSpam)
})), document.addEventListener("keyup", (e => {
    spikePlacer.stop(e.keyCode), boostPlacer.stop(e.keyCode), millPlacer.stop(e.keyCode), boostSpiker.stop(e.keyCode), turretPlacer.stop(e.keyCode), healer.stop(e.keyCode)
})), window.crash = function() {
    document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["!Crash"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["!crash2"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["!crash3"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["4"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["5"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["6"]]), document.ws.se(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180])), doNewSend(["ch", ["7"]])
}, document.title = "Project Gaston", window.aim = aim, document.addEventListener("mousedown", buttonPress, !1), document.addEventListener("mouseup", (e => {
    localStorage.down = 0
}), !1), document.addEventListener("mousedown", buttonPress, !1), window.info2 = {}, window.Bots = {
    L: !1,
    le: !1,
    $: !1
}, pos = [1, 0], window.Test2 = function(e = 250) {
    try {
        return Math.sqrt(Math.pow(myPlayer.y - nearestEnemy[2], 2) + Math.pow(myPlayer.x - nearestEnemy[1], 2)) < e
    } catch (t) {
        return 0
    }
}, window.de = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    ue: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    he: -3,
    fe: 18,
    me: 25,
    range: 65,
    pe: 1,
    speed: 300
}, {
    id: 1,
    type: 0,
    m: 2,
    name: "hand axe",
    ue: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    ge: 3,
    fe: 24,
    me: 30,
    we: 1,
    range: 70,
    pe: 2,
    speed: 400
}, {
    id: 2,
    type: 0,
    m: 8,
    ye: 1,
    name: "great axe",
    ue: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    ge: -8,
    fe: 25,
    me: 35,
    we: 1,
    range: 75,
    pe: 4,
    speed: 400
}, {
    id: 3,
    type: 0,
    m: 2,
    name: "short sword",
    ue: "increased attack power but slower move speed",
    src: "sword_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 46,
    me: 35,
    we: .85,
    range: 110,
    pe: 1,
    speed: 300
}, {
    id: 4,
    type: 0,
    m: 8,
    ye: 3,
    name: "katana",
    ue: "greater range and damage",
    src: "samurai_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 59,
    me: 40,
    we: .8,
    range: 118,
    pe: 1,
    speed: 300
}, {
    id: 5,
    type: 0,
    m: 2,
    name: "polearm",
    ue: "long range melee weapon",
    src: "spear_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 53,
    me: 45,
    be: .2,
    we: .82,
    range: 142,
    pe: 1,
    speed: 700
}, {
    id: 6,
    type: 0,
    m: 2,
    name: "bat",
    ue: "fast long range melee weapon",
    src: "bat_1",
    ke: 1.3,
    length: 110,
    width: 180,
    ge: -8,
    fe: 53,
    me: 20,
    be: .7,
    range: 110,
    pe: 1,
    speed: 300
}, {
    id: 7,
    type: 0,
    m: 2,
    name: "daggers",
    ue: "really fast short range weapon",
    src: "dagger_1",
    ke: .8,
    length: 110,
    width: 110,
    ge: 18,
    fe: 0,
    me: 20,
    be: .1,
    range: 65,
    pe: 1,
    ve: .1,
    we: 1.13,
    speed: 100
}, {
    id: 8,
    type: 0,
    m: 2,
    name: "stick",
    ue: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    ge: 3,
    fe: 24,
    me: 1,
    we: 1,
    range: 70,
    pe: 7,
    speed: 400
}, {
    id: 9,
    type: 1,
    m: 6,
    name: "hunting bow",
    ue: "bow used for ranged combat and hunting",
    src: "bow_1",
    Se: ["wood", 4],
    length: 120,
    width: 120,
    ge: -6,
    fe: 0,
    xe: 0,
    we: .75,
    speed: 600
}, {
    id: 10,
    type: 1,
    m: 6,
    name: "great hammer",
    ue: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    ge: -9,
    fe: 25,
    me: 10,
    we: .88,
    range: 75,
    Pe: 7.5,
    pe: 1,
    speed: 400,
    Ce: 40
}, {
    id: 11,
    type: 1,
    m: 6,
    name: "wooden shield",
    ue: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    A: .2,
    ge: 6,
    fe: 0,
    we: .7,
    speed: 0
}, {
    id: 12,
    type: 1,
    m: 8,
    ye: 9,
    name: "crossbow",
    ue: "deals more damage and has greater range",
    src: "crossbow_1",
    Se: ["wood", 5],
    Me: !0,
    Te: .75,
    length: 120,
    width: 120,
    ge: -4,
    fe: 0,
    xe: 2,
    we: .7,
    speed: 700,
    Ce: 20
}, {
    id: 13,
    type: 1,
    m: 9,
    ye: 12,
    name: "repeater crossbow",
    ue: "high firerate crossbow with reduced damage",
    src: "crossbow_2",
    Se: ["wood", 10],
    Me: !0,
    Te: .75,
    length: 120,
    width: 120,
    ge: -4,
    fe: 0,
    xe: 3,
    we: .7,
    speed: 300,
    Ce: 20
}, {
    id: 14,
    type: 1,
    m: 6,
    name: "mc grabby",
    ue: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    ge: -8,
    fe: 53,
    me: 0,
    Be: 250,
    be: .2,
    we: 1.05,
    range: 125,
    pe: 0,
    speed: 700
}, {
    id: 15,
    type: 1,
    m: 9,
    ye: 12,
    name: "musket",
    ue: "slow firerate but high damage and range",
    src: "musket_1",
    Se: ["stone", 10],
    Me: !0,
    _e: .35,
    Te: .6,
    Ne: .3,
    Oe: 1.6,
    length: 205,
    width: 205,
    ge: 25,
    fe: 0,
    xe: 5,
    Ae: !0,
    we: .6,
    speed: 1500,
    Ce: 20
}], activeObjects = [{
    name: "apple",
    ue: "restores 20 health when consumed",
    Se: ["food", 10],
    Ie: function(e) {
        return e.Ee(20, e)
    },
    scale: 22,
    He: 15
}, {
    m: 3,
    name: "cookie",
    ue: "restores 40 health when consumed",
    Se: ["food", 15],
    Ie: function(e) {
        return e.Ee(40, e)
    },
    scale: 27,
    He: 15
}, {
    m: 7,
    name: "pizza",
    ue: "restores 30 health and another 50 over 5 seconds",
    Se: ["food", 30],
    Ie: function(e) {
        return !!(e.Ee(30, e) || e.B < 100) && (e.De.me = -10, e.De.je = e, e.De.time = 5, !0)
    },
    scale: 27,
    He: 15
}, {
    name: "wood wall",
    ue: "provides protection for your village",
    Se: ["wood", 10],
    Fe: !0,
    B: 380,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 3,
    name: "stone wall",
    ue: "provides improved protection for your village",
    Se: ["stone", 25],
    B: 900,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 7,
    ye: 1,
    name: "castle wall",
    ue: "provides powerful protection for your village",
    Se: ["stone", 35],
    B: 1500,
    scale: 52,
    He: 20,
    Re: -5
}, {
    name: "spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 20, "stone", 5],
    B: 400,
    me: 20,
    scale: 49,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 5,
    name: "greater spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 30, "stone", 10],
    B: 500,
    me: 35,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 9,
    ye: 1,
    name: "poison spikes",
    ue: "poisons enemies when they touch them",
    Se: ["wood", 35, "stone", 15],
    B: 600,
    me: 30,
    ze: 5,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 9,
    ye: 2,
    name: "spinning spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 30, "stone", 20],
    B: 500,
    me: 45,
    Ue: .003,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    name: "windmill",
    ue: "generates gold over time",
    Se: ["wood", 50, "stone", 10],
    B: 400,
    qe: 1,
    Ue: .0016,
    Ge: 25,
    Ke: 12,
    scale: 45,
    He: 20,
    Re: 5
}, {
    m: 5,
    ye: 1,
    name: "faster windmill",
    ue: "generates more gold over time",
    Se: ["wood", 60, "stone", 20],
    B: 500,
    qe: 1.5,
    Ue: .0025,
    Ge: 25,
    Ke: 12,
    scale: 47,
    He: 20,
    Re: 5
}, {
    m: 8,
    ye: 1,
    name: "power mill",
    ue: "generates more gold over time",
    Se: ["wood", 100, "stone", 50],
    B: 800,
    qe: 2,
    Ue: .005,
    Ge: 25,
    Ke: 12,
    scale: 47,
    He: 20,
    Re: 5
}, {
    m: 5,
    type: 2,
    name: "mine",
    ue: "allows you to mine stone",
    Se: ["wood", 20, "stone", 100],
    Ke: 12,
    scale: 65,
    He: 20,
    Re: 0
}, {
    m: 5,
    type: 0,
    name: "sapling",
    ue: "allows you to farm wood",
    Se: ["wood", 150],
    Ke: 12,
    $e: .5,
    scale: 110,
    He: 50,
    Re: -15
}, {
    m: 4,
    name: "pit trap",
    ue: "pit that traps enemies if they walk over it",
    Se: ["wood", 30, "stone", 30],
    C: !0,
    Le: !0,
    We: !0,
    B: 500,
    $e: .2,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 4,
    name: "boost pad",
    ue: "provides boost when stepped on",
    Se: ["stone", 20, "wood", 5],
    Le: !0,
    Xe: 1.5,
    B: 150,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    Qe: !0,
    name: "turret",
    ue: "defensive structure that shoots at enemies",
    Se: ["wood", 200, "stone", 150],
    B: 800,
    xe: 1,
    Ye: 700,
    Ve: 2200,
    scale: 43,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "platform",
    ue: "platform to shoot over walls and cross over water",
    Se: ["wood", 20],
    Le: !0,
    zIndex: 1,
    B: 300,
    scale: 43,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "healing pad",
    ue: "standing on it will slowly heal you",
    Se: ["wood", 30, "food", 10],
    Le: !0,
    Ze: 15,
    B: 400,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 9,
    name: "spawn pad",
    ue: "you will spawn here when you die but it will dissapear",
    Se: ["wood", 100, "stone", 100],
    B: 400,
    Le: !0,
    Je: !0,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "blocker",
    ue: "blocks building in radius",
    Se: ["wood", 30, "stone", 25],
    Le: !0,
    et: 300,
    B: 400,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "teleporter",
    ue: "teleports you to a random point on the map",
    Se: ["wood", 60, "stone", 60],
    Le: !0,
    tt: !0,
    B: 200,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}], window.info2 = {};
let Sec = window.Sec = function() {
        myPlayer.q != secondary && doNewSend(["5", [secondary, !0]])
    },
    Prime = window.Prime = function() {
        myPlayer.q != primary && doNewSend(["5", [primary, !0]])
    };
window.DidB = 1, window.didchech = 0, window.doNewSend = doNewSend, window.testI = function() {
    Prime(), autoaim = 1, doNewSend(["13c", [0, 0, 1]]), setTimeout((() => {
        doNewSend(["2", [nearestEnemyAngle]]), doNewSend(["7", [1]]), doNewSend(["13c", [0, 7, 0]]), doNewSend(["13c", [0, 18, 1]])
    }), 20), setTimeout((e => {
        doNewSend(["2", [nearestEnemyAngle]]), Sec(), doNewSend(["13c", [0, 53, 0]]), autoaim = 0;
        for (let e = 0; e < 430; e++) {
            doNewSend(["5", [secondary, !0]])
        }
        setTimeout((e => {
            weapons.reload(), doNewSend(["7", [1]])
        }), 200)
    }))
}, window.itype = 1, window.i2 = 50, window.i3 = 100, window.SandBox = window.location.href.includes("box"), window.catk = 1, window.$ = function(e = 1, t = hit360, n, i = 1, o = autoaim) {
    info2;
    again && (11 != nearestEnemy[9] ? 11 != nearestEnemy[5] ? (again && 1 == !i || !info2.o && !info2.h && window.catk && window.caninsta) && (fin1 = 0, hit360 = 0, didreload = 0, chat("Gaston insta"), again = 0, autoprimary = !0, autosecondary = !1, autoaim = !0, autoprimary = !0, autosecondary = !1, acc(0), Prime(), doNewSend(["7", [1]]), hat(7), acc(21), setTimeout((() => {
        autoprimary = !1, autosecondary = !0, hat(53), Sec()
    }), 100), setTimeout((() => {
        acc(0), doNewSend(["7", [1]]), Sec(), acc(21), myPlayer.y < 2400 ? hat(15) : myPlayer.y > 6850 && myPlayer.y < 7550 ? hat(31) : hat(11), autosecondary = !1, autoaim = !1, fini = 1, hit360 = t, !intrap && setTimeout(weapons.reload, 150)
    }), 215), setTimeout((() => {
        hat(6), acc(11)
    }), 1600)) : chat("Ew shIeld.!?!?!") : chat("Imagine using that hat"))
}, accessories = [{
    id: 12,
    name: "Snowball",
    F: 1e3,
    scale: 105,
    ge: 18,
    ue: "no effect"
}, {
    id: 9,
    name: "Tree Cape",
    F: 1e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 10,
    name: "Stone Cape",
    F: 1e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 3,
    name: "Cookie Cape",
    F: 1500,
    scale: 90,
    ue: "no effect"
}, {
    id: 8,
    name: "Cow Cape",
    F: 2e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 11,
    name: "Monkey Tail",
    F: 2e3,
    scale: 97,
    ge: 25,
    ue: "Super speed but reduced damage",
    we: 1.35,
    V: .2
}, {
    id: 17,
    name: "Apple Basket",
    F: 3e3,
    scale: 80,
    ge: 12,
    ue: "slowly regenerates health over time",
    nt: 1
}, {
    id: 6,
    name: "Winter Cape",
    F: 3e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 4,
    name: "Skull Cape",
    F: 4e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 5,
    name: "Dash Cape",
    F: 5e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 2,
    name: "Dragon Cape",
    F: 6e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 1,
    name: "Super Cape",
    F: 8e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 7,
    name: "Troll Cape",
    F: 8e3,
    scale: 90,
    ue: "no effect"
}, {
    id: 14,
    name: "Thorns",
    F: 1e4,
    scale: 115,
    ge: 20,
    ue: "no effect"
}, {
    id: 15,
    name: "Blockades",
    F: 1e4,
    scale: 95,
    ge: 15,
    ue: "no effect"
}, {
    id: 20,
    name: "Devils Tail",
    F: 1e4,
    scale: 95,
    ge: 20,
    ue: "no effect"
}, {
    id: 16,
    name: "Sawblade",
    F: 12e3,
    scale: 90,
    it: !0,
    ge: 0,
    ue: "deal damage to players that damage you",
    me: .15
}, {
    id: 13,
    name: "Angel Wings",
    F: 15e3,
    scale: 138,
    ge: 22,
    ue: "slowly regenerates health over time",
    nt: 3
}, {
    id: 19,
    name: "Shadow Wings",
    F: 15e3,
    scale: 138,
    ge: 22,
    ue: "increased movement speed",
    we: 1.1
}, {
    id: 18,
    name: "Blood Wings",
    F: 2e4,
    scale: 178,
    ge: 26,
    ue: "restores health when you deal damage",
    ot: .2
}, {
    id: 21,
    name: "Corrupt X Wings",
    F: 2e4,
    scale: 178,
    ge: 26,
    ue: "deal damage to players that damage you",
    me: .25
}], hats = [{
    id: 45,
    name: "Shame!",
    rt: !0,
    F: 0,
    scale: 120,
    ue: "hacks are for losers"
}, {
    id: 51,
    name: "Moo Cap",
    F: 0,
    scale: 120,
    ue: "coolest mooer around"
}, {
    id: 50,
    name: "Apple Cap",
    F: 0,
    scale: 120,
    ue: "apple farms remembers"
}, {
    id: 28,
    name: "Moo Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 29,
    name: "Pig Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 30,
    name: "Fluff Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 36,
    name: "Pandou Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 37,
    name: "Bear Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 38,
    name: "Monkey Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 44,
    name: "Polar Head",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 35,
    name: "Fez Hat",
    F: 0,
    scale: 120,
    ue: "no effect"
}, {
    id: 42,
    name: "Enigma Hat",
    F: 0,
    scale: 120,
    ue: "join the enigma army"
}, {
    id: 43,
    name: "Blitz Hat",
    F: 0,
    scale: 120,
    ue: "hey everybody i'm blitz"
}, {
    id: 49,
    name: "Bob XIII Hat",
    F: 0,
    scale: 120,
    ue: "like and subscribe"
}, {
    id: 8,
    name: "Bummle Hat",
    F: 100,
    scale: 120,
    ue: "no effect"
}, {
    id: 2,
    name: "Straw Hat",
    F: 500,
    scale: 120,
    ue: "no effect"
}, {
    id: 15,
    name: "Winter Cap",
    F: 600,
    scale: 120,
    ue: "allows you to move at normal speed in snow",
    st: 1
}, {
    id: 5,
    name: "Cowboy Hat",
    F: 1e3,
    scale: 120,
    ue: "no effect"
}, {
    id: 4,
    name: "Ranger Hat",
    F: 2e3,
    scale: 120,
    ue: "no effect"
}, {
    id: 18,
    name: "Explorer Hat",
    F: 2e3,
    scale: 120,
    ue: "no effect"
}, {
    id: 31,
    name: "Flipper Hat",
    F: 2500,
    scale: 120,
    ue: "have more control while in water",
    ct: !0
}, {
    id: 1,
    name: "Marksman Cap",
    F: 3e3,
    scale: 120,
    ue: "increases arrow speed and range",
    lt: 1.3
}, {
    id: 10,
    name: "Bush Gear",
    F: 3e3,
    scale: 160,
    ue: "allows you to disguise yourself as a bush"
}, {
    id: 48,
    name: "Halo",
    F: 3e3,
    scale: 120,
    ue: "no effect"
}, {
    id: 6,
    name: "Soldier Helmet",
    F: 4e3,
    scale: 120,
    ue: "reduces damage taken but slows movement",
    we: .94,
    V: .75
}, {
    id: 23,
    name: "Anti Venom Gear",
    F: 4e3,
    scale: 120,
    ue: "makes you immune to poison",
    dt: 1
}, {
    id: 13,
    name: "Medic Gear",
    F: 5e3,
    scale: 110,
    ue: "slowly regenerates health over time",
    nt: 3
}, {
    id: 9,
    name: "Miners Helmet",
    F: 5e3,
    scale: 120,
    ue: "earn 1 extra gold per resource",
    ut: 1
}, {
    id: 32,
    name: "Musketeer Hat",
    F: 5e3,
    scale: 120,
    ue: "reduces cost of projectiles",
    ht: .5
}, {
    id: 7,
    name: "Bull Helmet",
    F: 6e3,
    scale: 120,
    ue: "increases damage done but drains health",
    nt: -5,
    V: 1.5,
    we: .96
}, {
    id: 22,
    name: "Emp Helmet",
    F: 6e3,
    scale: 120,
    ue: "turrets won't attack but you move slower",
    ft: 1,
    we: .7
}, {
    id: 12,
    name: "Booster Hat",
    F: 6e3,
    scale: 120,
    ue: "increases your movement speed",
    we: 1.16
}, {
    id: 26,
    name: "Barbarian Armor",
    F: 8e3,
    scale: 120,
    ue: "knocks back enemies that attack you",
    gt: .6
}, {
    id: 21,
    name: "Plague Mask",
    F: 1e4,
    scale: 120,
    ue: "melee attacks deal poison damage",
    wt: 5,
    yt: 6
}, {
    id: 46,
    name: "Bull Mask",
    F: 1e4,
    scale: 120,
    ue: "bulls won't target you unless you attack them",
    kt: 1
}, {
    id: 14,
    name: "Windmill Hat",
    bt: !0,
    F: 1e4,
    scale: 120,
    ue: "generates points while worn",
    qe: 1.5
}, {
    id: 11,
    name: "Spike Gear",
    bt: !0,
    F: 1e4,
    scale: 120,
    ue: "deal damage to players that damage you",
    me: .45
}, {
    id: 53,
    name: "Turret Gear",
    bt: !0,
    F: 1e4,
    scale: 120,
    ue: "you become a walking turret",
    vt: {
        St: 1,
        range: 700,
        rate: 2500
    },
    we: .5
}, {
    id: 20,
    name: "Samurai Armor",
    F: 12e3,
    scale: 120,
    ue: "increased attack speed and fire rate",
    xt: .78
}, {
    id: 16,
    name: "Bushido Armor",
    F: 12e3,
    scale: 120,
    ue: "restores health when you deal damage",
    ot: .4
}, {
    id: 27,
    name: "Scavenger Gear",
    F: 15e3,
    scale: 120,
    ue: "earn double points for each kill",
    Pt: 2
}, {
    id: 40,
    name: "Tank Gear",
    F: 15e3,
    scale: 120,
    ue: "increased damage to buildings but slower movement",
    we: .3,
    Ct: 3.3
}, {
    id: 52,
    name: "Thief Gear",
    F: 15e3,
    scale: 120,
    ue: "steal half of a players gold when you kill them",
    Mt: .5
}], objects = [{
    id: 0,
    name: "food",
    Tt: 0
}, {
    id: 1,
    name: "walls",
    ce: !0,
    Bt: 30,
    Tt: 0
}, {
    id: 2,
    name: "spikes",
    ce: !0,
    Bt: 15,
    Tt: 0
}, {
    id: 3,
    name: "mill",
    ce: !0,
    Bt: 7,
    Tt: 1
}, {
    id: 4,
    name: "mine",
    ce: !0,
    Bt: 1,
    Tt: 0
}, {
    id: 5,
    name: "trap",
    ce: !0,
    Bt: 6,
    Tt: -1
}, {
    id: 6,
    name: "booster",
    ce: !0,
    Bt: 12,
    Tt: -1
}, {
    id: 7,
    name: "turret",
    ce: !0,
    Bt: 2,
    Tt: 1
}, {
    id: 8,
    name: "watchtower",
    ce: !0,
    Bt: 12,
    Tt: 1
}, {
    id: 9,
    name: "buff",
    ce: !0,
    Bt: 4,
    Tt: -1
}, {
    id: 10,
    name: "spawn",
    ce: !0,
    Bt: 1,
    Tt: -1
}, {
    id: 11,
    name: "sapling",
    ce: !0,
    Bt: 2,
    Tt: 0
}, {
    id: 12,
    name: "blocker",
    ce: !0,
    Bt: 3,
    Tt: -1
}, {
    id: 13,
    name: "teleporter",
    ce: !0,
    Bt: 1,
    Tt: -1
}], weapons = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    ue: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    ge: -3,
    fe: 18,
    me: 25,
    range: 65,
    pe: 1,
    speed: 300
}, {
    id: 1,
    type: 0,
    m: 2,
    name: "hand axe",
    ue: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    ge: 3,
    fe: 24,
    me: 30,
    we: 1,
    range: 70,
    pe: 2,
    speed: 400
}, {
    id: 2,
    type: 0,
    m: 8,
    ye: 1,
    name: "great axe",
    ue: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    ge: -8,
    fe: 25,
    me: 35,
    we: 1,
    range: 75,
    pe: 4,
    speed: 400
}, {
    id: 3,
    type: 0,
    m: 2,
    name: "short sword",
    ue: "increased attack power but slower move speed",
    src: "sword_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 46,
    me: 35,
    we: .85,
    range: 110,
    pe: 1,
    speed: 300
}, {
    id: 4,
    type: 0,
    m: 8,
    ye: 3,
    name: "katana",
    ue: "greater range and damage",
    src: "samurai_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 59,
    me: 40,
    we: .8,
    range: 118,
    pe: 1,
    speed: 300
}, {
    id: 5,
    type: 0,
    m: 2,
    name: "polearm",
    ue: "long range melee weapon",
    src: "spear_1",
    ke: 1.3,
    length: 130,
    width: 210,
    ge: -8,
    fe: 53,
    me: 45,
    be: .2,
    we: .82,
    range: 142,
    pe: 1,
    speed: 700
}, {
    id: 6,
    type: 0,
    m: 2,
    name: "bat",
    ue: "fast long range melee weapon",
    src: "bat_1",
    ke: 1.3,
    length: 110,
    width: 180,
    ge: -8,
    fe: 53,
    me: 20,
    be: .7,
    range: 110,
    pe: 1,
    speed: 300
}, {
    id: 7,
    type: 0,
    m: 2,
    name: "daggers",
    ue: "really fast short range weapon",
    src: "dagger_1",
    ke: .8,
    length: 110,
    width: 110,
    ge: 18,
    fe: 0,
    me: 20,
    be: .1,
    range: 65,
    pe: 1,
    ve: .1,
    we: 1.13,
    speed: 100
}, {
    id: 8,
    type: 0,
    m: 2,
    name: "stick",
    ue: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    ge: 3,
    fe: 24,
    me: 1,
    we: 1,
    range: 70,
    pe: 7,
    speed: 400
}, {
    id: 9,
    type: 1,
    m: 6,
    name: "hunting bow",
    ue: "bow used for ranged combat and hunting",
    src: "bow_1",
    Se: ["wood", 4],
    length: 120,
    width: 120,
    ge: -6,
    fe: 0,
    xe: 0,
    we: .75,
    speed: 600
}, {
    id: 10,
    type: 1,
    m: 6,
    name: "great hammer",
    ue: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    ge: -9,
    fe: 25,
    me: 10,
    we: .88,
    range: 75,
    Pe: 7.5,
    pe: 1,
    speed: 400,
    Ce: 40
}, {
    id: 11,
    type: 1,
    m: 6,
    name: "wooden shield",
    ue: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    A: .2,
    ge: 6,
    fe: 0,
    we: .7
}, {
    id: 12,
    type: 1,
    m: 8,
    ye: 9,
    name: "crossbow",
    ue: "deals more damage and has greater range",
    src: "crossbow_1",
    Se: ["wood", 5],
    Me: !0,
    Te: .75,
    length: 120,
    width: 120,
    ge: -4,
    fe: 0,
    xe: 2,
    we: .7,
    speed: 700,
    Ce: 20
}, {
    id: 13,
    type: 1,
    m: 9,
    ye: 12,
    name: "repeater crossbow",
    ue: "high firerate crossbow with reduced damage",
    src: "crossbow_2",
    Se: ["wood", 10],
    Me: !0,
    Te: .75,
    length: 120,
    width: 120,
    ge: -4,
    fe: 0,
    xe: 3,
    we: .7,
    speed: 300,
    Ce: 20
}, {
    id: 14,
    type: 1,
    m: 6,
    name: "mc grabby",
    ue: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    ge: -8,
    fe: 53,
    me: 0,
    Be: 250,
    be: .2,
    we: 1.05,
    range: 125,
    pe: 0,
    speed: 700
}, {
    id: 15,
    type: 1,
    m: 9,
    ye: 12,
    name: "musket",
    ue: "slow firerate but high damage and range",
    src: "musket_1",
    Se: ["stone", 10],
    Me: !0,
    _e: .35,
    Te: .6,
    Ne: .3,
    Oe: 1.6,
    length: 205,
    width: 205,
    ge: 25,
    fe: 0,
    xe: 5,
    Ae: !0,
    we: .6,
    speed: 1500,
    Ce: 20
}], activeObjects = [{
    name: "apple",
    ue: "restores 20 health when consumed",
    Se: ["food", 10],
    Ie: function(e) {
        return e.Ee(20, e)
    },
    scale: 22,
    He: 15
}, {
    m: 3,
    name: "cookie",
    ue: "restores 40 health when consumed",
    Se: ["food", 15],
    Ie: function(e) {
        return e.Ee(40, e)
    },
    scale: 27,
    He: 15
}, {
    m: 7,
    name: "pizza",
    ue: "restores 30 health and another 50 over 5 seconds",
    Se: ["food", 30],
    Ie: function(e) {
        return !!(e.Ee(30, e) || e.B < 100) && (e.De.me = -10, e.De.je = e, e.De.time = 5, !0)
    },
    scale: 27,
    He: 15
}, {
    name: "wood wall",
    ue: "provides protection for your village",
    Se: ["wood", 10],
    Fe: !0,
    B: 380,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 3,
    name: "stone wall",
    ue: "provides improved protection for your village",
    Se: ["stone", 25],
    B: 900,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 7,
    ye: 1,
    name: "castle wall",
    ue: "provides powerful protection for your village",
    Se: ["stone", 35],
    B: 1500,
    scale: 52,
    He: 20,
    Re: -5
}, {
    name: "spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 20, "stone", 5],
    B: 400,
    me: 20,
    scale: 49,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 5,
    name: "greater spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 30, "stone", 10],
    B: 500,
    me: 35,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 9,
    ye: 1,
    name: "poison spikes",
    ue: "poisons enemies when they touch them",
    Se: ["wood", 35, "stone", 15],
    B: 600,
    me: 30,
    ze: 5,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    m: 9,
    ye: 2,
    name: "spinning spikes",
    ue: "damages enemies when they touch them",
    Se: ["wood", 30, "stone", 20],
    B: 500,
    me: 45,
    Ue: .003,
    scale: 52,
    Ge: -23,
    He: 8,
    Re: -5
}, {
    name: "windmill",
    ue: "generates gold over time",
    Se: ["wood", 50, "stone", 10],
    B: 400,
    qe: 1,
    Ue: .0016,
    Ge: 25,
    Ke: 12,
    scale: 45,
    He: 20,
    Re: 5
}, {
    m: 5,
    ye: 1,
    name: "faster windmill",
    ue: "generates more gold over time",
    Se: ["wood", 60, "stone", 20],
    B: 500,
    qe: 1.5,
    Ue: .0025,
    Ge: 25,
    Ke: 12,
    scale: 47,
    He: 20,
    Re: 5
}, {
    m: 8,
    ye: 1,
    name: "power mill",
    ue: "generates more gold over time",
    Se: ["wood", 100, "stone", 50],
    B: 800,
    qe: 2,
    Ue: .005,
    Ge: 25,
    Ke: 12,
    scale: 47,
    He: 20,
    Re: 5
}, {
    m: 5,
    type: 2,
    name: "mine",
    ue: "allows you to mine stone",
    Se: ["wood", 20, "stone", 100],
    Ke: 12,
    scale: 65,
    He: 20,
    Re: 0
}, {
    m: 5,
    type: 0,
    name: "sapling",
    ue: "allows you to farm wood",
    Se: ["wood", 150],
    Ke: 12,
    $e: .5,
    scale: 110,
    He: 50,
    Re: -15
}, {
    m: 4,
    name: "pit trap",
    ue: "pit that traps enemies if they walk over it",
    Se: ["wood", 30, "stone", 30],
    C: !0,
    Le: !0,
    We: !0,
    B: 500,
    $e: .2,
    scale: 50,
    He: 20,
    Re: -5
}, {
    m: 4,
    name: "boost pad",
    ue: "provides boost when stepped on",
    Se: ["stone", 20, "wood", 5],
    Le: !0,
    Xe: 1.5,
    B: 150,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    Qe: !0,
    name: "turret",
    ue: "defensive structure that shoots at enemies",
    Se: ["wood", 200, "stone", 150],
    B: 800,
    xe: 1,
    Ye: 700,
    Ve: 2200,
    scale: 43,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "platform",
    ue: "platform to shoot over walls and cross over water",
    Se: ["wood", 20],
    Le: !0,
    zIndex: 1,
    B: 300,
    scale: 43,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "healing pad",
    ue: "standing on it will slowly heal you",
    Se: ["wood", 30, "food", 10],
    Le: !0,
    Ze: 15,
    B: 400,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 9,
    name: "spawn pad",
    ue: "you will spawn here when you die but it will dissapear",
    Se: ["wood", 100, "stone", 100],
    B: 400,
    Le: !0,
    Je: !0,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "blocker",
    ue: "blocks building in radius",
    Se: ["wood", 30, "stone", 25],
    Le: !0,
    et: 300,
    B: 400,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}, {
    m: 7,
    name: "teleporter",
    ue: "teleports you to a random point on the map",
    Se: ["wood", 60, "stone", 60],
    Le: !0,
    tt: !0,
    B: 200,
    $e: .7,
    scale: 45,
    He: 20,
    Re: -5
}], window.I.forEach(((e, t) => {
    window.I[t].U = function() {
        this.G && (this.j = !1, this.R = !0, storeBuy(this.id, 0))
    }
})), window.H.forEach(((e, t) => {
    window.H[t].U = function() {
        this.G && (this.j = !1, this.R = !0, storeBuy(this.id, 1))
    }
})), buy = function(e, t = 0) {
    storeBuy(e.id, t)
}, window.chat = chat, window.again = 1, aureload = setInterval((() => {
    try {
        loadingText.innerText.includes("disconnected") && (location.href = location.href, clearInterval(aureload)), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\tLeaderboard\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\xc3\xae\xc2\xa3\xe2\u20ac\u0153\n\n\n\t\t\xc3\xae\xc2\xa3\xe2\u20ac\u02dc\n\n\n\t\t\xc3\xae\xc2\xa2\xc2\xaf\n\n\n\n\n\n\t\t\tHats\n\t\t\tAccessories\n\n\n\n\n\n\n\n\n" == gameUI.innerText && (window.location.href = window.location.href, clearInterval(aureload))
    } catch (e) {}
}), 1e3), weapons.reload = function() {
    Prime(), chat("Gaston#1779 reloading"), !intrap && setTimeout((e => {
        chat("reloading 2"), Sec(), !intrap && setTimeout((e => {
            chat("Done"), Prime(), !intrap && setTimeout((e => {
                didreload = 1, again = 1, window.Inv && doNewSend(["5", ["length", !0]])
            }), 300)
        }), info2.ss + 50)
    }), info2.ps + 50)
}, window._ = 0, setInterval(myModLoop, 20), setTimeout(cSs, 100), setTimeout((() => {
    var e;
    window.lowT = !0;
    const t = ["Pname", "addEventListener", "value"],
        n = [window];
    enterGame[t[1]]("click", (function(e) {
            n[0][t[0]] = nameInput[t[2]]
        })),
        function() {
            pingcheck(), ageBarBody.style.transition = "1s", window.items2 = {};
            let e = {
                    1: {
                        _t: 1,
                        Nt: 3,
                        Ot: 5,
                        At: 7,
                        It: 8,
                        Et: 6
                    },
                    2: {
                        cookie: 17,
                        Ht: 20
                    },
                    3: {
                        C: 31,
                        le: 32
                    },
                    4: {
                        Dt: 23,
                        jt: 29,
                        Ft: 30,
                        Rt: 27
                    },
                    5: {
                        Gt: 0,
                        zt: 10,
                        Ut: 14,
                        qt: 11
                    },
                    6: {
                        Kt: 18,
                        $t: 21,
                        vt: 33,
                        platform: 34,
                        Lt: 35,
                        et: 37,
                        tt: 38
                    },
                    7: {
                        Wt: 2,
                        Xt: 12,
                        Qt: 4,
                        Yt: 28
                    },
                    8: {
                        Vt: 13,
                        Zt: 15,
                        Jt: 24,
                        en: 25,
                        tn: 36
                    }
                },
                t = document.createElement("div");
            ! function(n = ((e, t) => {
                window.items2[t] = e.target.selectedOptions[0].value
            }), i = document.createElement("br")) {
                for (let n in e) {
                    t.append(document.createElement("br"));
                    let i = document.createElement("select");
                    window.selects.push([n, i]), i.id = "sel" + n, i.nn = n;
                    let o = document.createElement("span");
                    o.innerText = `Age ${n}:`, Object.keys(e[n]).forEach((t => {
                        let o = document.createElement("option");
                        o.value = e[n][t], o.innerText = t, i.append(o)
                    })), t.append(o), t.append(i)
                }
                setupCard.append(t), sel1.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel2.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel3.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel4.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel5.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel6.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel7.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }, sel8.onchange = function(e) {
                    var t = e.target.value,
                        n = e.target.nn;
                    items2[n] = t
                }
            }(), window.spikes = [25, 23, 24, 6, 7, 9], info2.ageitems = e, info2.ageitems[0] = {
                an: 19,
                t: 6,
                rn: 10
            };
            let n = document.createElement("input");
            n.value = 150, n.id = "Hspeed", n.style.backgroundColor = "rgb(0,0,0,0)", n.style.color = "white", n.onchange = function(e) {
                window.defH = 1 * n.value, chat("Healspeed " + n.value)
            };
            let i = document.createElement("input");
            i.value = i2, i.id = "instaspeed", i.style.backgroundColor = "rgb(0,0,0,0)", i.style.color = "white";
            let o = document.createElement("span");
            o.innerText = "Insta speed ", o.style.color = "red";
            let a = document.createElement("span");
            a.innerText = "Heal speed ", a.style.color = "red", setupCard.append(document.createElement("br")), setupCard.append(a), setupCard.append(n), setupCard.append(document.createElement("br")), setupCard.append(o), setupCard.append(i), i.onchange = function(e) {
                i2 = 1 * i.value, chat("Insta speed " + i.value)
            }, setupCard.style.overflow = "auto", setupCard.style.height = "180px", window.stoped = 1
        }(), autoU = 1, window.NewServer = function() {
            var e, t, n, i = [];
            serverBrowser.children.forEah = [].forEach, [...serverBrowser.children].forEach((e => {
                var t = 1 * e.innerText.split(" ").pop().split("/")[0].split("[")[1],
                    n = e.value;
                e.value.split(":")[0] == [serverBrowser.selectedOptions[0].innerText.split(" ")[0], serverBrowser.selectedOptions[0].value, serverBrowser.selectedOptions[0].innerText.split(" ")[1]][1].split(":")[0] && i.push({
                    a: t,
                    b: n,
                    e: e
                })
            })), (t = (e = i.sort(((e, t) => t.a - e.a)).filter((e => e.a < 40))[0]).b.split(":"))[1] = 1 * t[1] + 1 + "", t = t.join(":"), e.b = t, (n = location.href.split("="))[1] = e.b, n = n.join("="), location.href = n
        };
    const i = [
        [],
        [""],
        ["Button", "Crash?!", "br", "Button", "New Server", "br", "Button", "Autoplay", "br", "Button", "Stop brekaing", "br", "Button", "Load layout", "br", "Button", "Save layout", "br"],
        [""],
        [document, window], {}
    ];
    (e = i[4][0].createElement(i[2][0])).onclick = function() {
        i[4][1].crash()
    }, e.innerText = i[2][1], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e), (e = i[4][0].createElement(i[2][0])).onclick = function() {
        i[4][1].NewServer()
    }, e.innerText = i[2][4], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e), (e = i[4][0].createElement(i[2][0])).onclick = function() {
        i[4][1].Autoplay()
    }, e.innerText = i[2][7], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e), (e = i[4][0].createElement(i[2][0])).onclick = function() {
        intrap = 0
    }, e.innerText = i[2][10], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e), (e = i[4][0].createElement(i[2][0])).onclick = function() {
        items2 = JSON.parse(localStorage.items2)
    }, e.innerText = i[2][13], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e), (e = i[4][0].createElement(i[2][0])).onclick = function() {
        localStorage.items2 = JSON.stringify(items2)
    }, e.innerText = i[2][16], guideCard.append(i[4][0].createElement(i[2][2])), guideCard.append(e)
}), 250), window.isI = 0, window.M = hat, window.acc = acc, window.ins = 1, setInterval((() => {
    (Bots.$ || Bots.BS) && !info2.EN && window.Tele && (place(turretType, info2.where), move(info2.where), atk()), (Bots.$ || Bots.BS) && !info2.EN && move(random((() => {
        let e = [];
        for (let t = 0; t < 360; t++) {
            e.push(t)
        }
        return e
    })()))
}), 3e3), placerate = 0, maxPlace = 5, ab = 0, setInterval((() => {
    if (myobjs) {
        for (let e in myobjs) {
            window.spikes.forEach((t => {
                try {
                    t == myobjs[e].data[1][6] && (myobjs[e].t = !0)
                } catch (n) {}
            }))
        }
    }
}), 200), cp = {
    x: 0,
    y: 0
}, lc = [0, 0], window.Amills = 0, window.ce = place, window.tr = toRad, clearing_Shame = !1, shameCl(), window.hatC = (e = 1) => {
    if (!intrap) {
        try {
            info2.neh = nearestEnemy[9], info2.ner = 0, info2["new"] = nearestEnemy[5], weapons.forEach((e => {
                e.id != info2["new"] || e.range || 11 == e.id || 10 == e.id || (info2.ner = 1)
            })), weapons.sort(((e, t) => {}))[0], info2.NED < 700 && (53 == info2.neh ? hat(22) : window.Aspeed && !info2.far3 && info2.o ? Cbiome() : info2.far3 || window._ > 6 || 45 == myPlayer.M || !e && !(Bots.smartH || Bots.bs || Bots.BS || Bots.L) || (11 == info2.neh ? (hat(6), acc(21)) : -1 != [11, 7, 26, 20, 53, 6].indexOf(info2.neh) ? (acc(window.canatk2 ? 21 : 13), hat(window.canatk2 ? (Bots.aatk || Bots.BS) && window.ab && -1 != [3, 4, 5, 15].indexOf(info2["new"]) ? 11 : 7 : 6)) : (acc(window.canatk2 ? 21 : 13), hat(window.canatk2 ? 7 : 6))))
        } catch (t) {}
    }
};
let angleRadians = function(e, t) {
    return Math.atan2(t.y - e.y, t.x - e.x)
};
window.angleRadians = angleRadians, lc = [0, 0], ld = 0, lp = 0, lp2 = {}, cp = {}, window.Atank2 = 0, window.Atank = 1, cSet = 0, window.AutoGold = 1, window.NeedGold = 1, window.Autoplay = Autoplay, window.getting_gold = 0, window.GGold = GGold, AutoShield = setInterval((e => {
    var t;
    window.Amills && (t = myPlayer.dir, speed(), move(Math.atan2(mouseY - height / 2, mouseX - width / 2)), t = Math.atan2(mouseY - height / 2, mouseX - width / 2), place(millType, t + toRad(270)), place(millType, t + toRad(450)), place(millType, t + toRad(180))), window.AShield && 11 == info2.K.id && (didHeal || cSet || !info2.EN || info2.o || (Sec(), atk(), cSet = 1), didHeal && (Prime(), cSet = 1, didHeal = 0), cSet && info2.o && (cSet = 0))
}), 200), window.stest = stest, window.Sinsta = 0, window.Satk = 0, onkeypress = function(e) {
    e.sn = "chatbox" !== document.activeElement.id.toLowerCase(), "'" == e.key && e.sn && (chat(`Bot mode:${!Pedro9.checked}`), Pedro9.click()), "i" == e.key && e.sn && (chat(`auto Mills:${!Amills}`), Amills = !Amills), "[" == e.key && e.sn && chat(`Auto smart Insta:${!Bots.ainsta}`, Bots.ainsta = !Bots.ainsta), "]" == e.key && e.sn && (chat(`AutoShield bot:${!window.AShield}`), window.AShield = !window.AShield), "o" == e.key && e.sn && (Bots.aatk = !Bots.aatk, chat(`Auto attack:${Bots.aatk}`)), "\\" == e.key && e.sn && (Bots.upits2 = !Bots.upits2, chat(`Auto placement:${Bots.upits2}`)), "r" == e.key && e.sn && window.Sinsta && (localStorage.binsta = 1), "e" == e.key && e.sn && window.Satk && (localStorage.e = 1), '"' == e.key && e.sn && (Bots.hunt = !Bots.hunt, chat(`Hunting:${Bots.hunt}`)), "-" == e.key && e.sn && Pedro15.onclick({
        checked: !Bots.tinsta
    }), "m" == e.key && e.sn && !Bots.IsSlave && (localStorage.ranged = 1, rnag()), "+" == e.key && e.sn && (window.resb = !window.resb, chat("Item Breaking:" + window.resb))
}, window.gA2 = function(e, t) {
    return Math.atan2(t.y - e.y, t.x - e.x)
}, window.aaa = setInterval((e => {
    window.AI && AI.length > 5 && (window.AT = AI.sort(((e, t) => dist([0, e.x, e.y], myPlayer) - dist([0, t.x, t.y], myPlayer)))[0], AT.dir = gA2(myPlayer, AT._), info2.AD = dist([0, myPlayer.x, myPlayer.y], AT._), AI = [])
}), 0), window.isCombat = 0, window.move = function(e) {
    doNewSend(["33", [e]])
}, window.cn = getDistance, Bots.Upits = 0, setInterval((() => {
    Bots.Upits && again && quadPits()
}), 100), mine = 29, window.Animals = 0, ID_WinterCap = 15, ID_AssassinGear = 56, ID_Bloodthirster = 55, ID_FlipperHat = 31, ID_MarksmanCap = 1, ID_BushGear = 10, ID_SoldierHelmet = 6, ID_AntiVenomGear = 23, ID_MusketeerHat = 32, ID_MedicGear = 13, ID_BullHelmet = 7, ID_EmpHelmet = 22, ID_BoosterHat = 12, ID_BarbarianArmor = 26, ID_BullMask = 46, ID_WindmillHat = 14, ID_SpikeGear = 11, ID_BushidoArmor = 16, ID_SamuraiArmor = 20, ID_ScavengerGear = 27, ID_TankGear = 40, ID_TurretGear = 53, TankGearKey = 18, AssassinGearKey = 107, BullHelmetKey = 84, SoldierHelmetKey = 89, TurretKey = 90, BoosterHatKey = 16, uneqiup = 189, SpikeGearKey = 220, BushGearKey = 186, EmpHelmetKey = 221, SamuraiArmorKey = 75, ScavengerGearKey = 106;
try {
    document.getElementById("moomooio_728x90_home").style.display = "none", $("moomooio728x90_home").parent().css({
        display: "none"
    })
} catch (e) {}
menuChange = document.createElement("div"), menuChange.className = "menuCard", menuChange.id = "mainSettings", menuChange.innerHTML = `\n<div id="simpleModal" class="modal">\n    <div class="modal-content">\n        <div class="modal-header">\n            <span class="closeBtn">&times;</span>\n            <h2 style="font-size: 17px;">Hat Settings</h2>\n        </div>\n        <div class="modal-body" style="font-size: 17px;">\n            <div class="flexControl">\n                <h3 style="color: red; font-size: 17px;"></h3>\n                <h3 class="menuPrompt">Tank: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Bull: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Soldier: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Turret: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Booster: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Spike: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Samurai: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="samuraiArmor" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Emp: </h3> <input value="${String.fromCharCode(EmpHelmetKey)}" id="empHelmet" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Bush: </h3> <input value="${String.fromCharCode(BushGearKey)}" id="bushGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Assassin: </h3> <input value="${String.fromCharCode(AssassinGearKey)}" id="assassinGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Scavenger: </h3> <input value="${String.fromCharCode(ScavengerGearKey)}" id="scavengerGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <hr>\n                <label class="container">Enemy|Radar\n        <input type="checkbox" id="Pedro">\n        <span class="checkmark"></span></label>\n        <label class="container">Animal|Radar\n        <input type="checkbox" id="Pedro1">\n        <span class="checkmark"></span></label>\n        <label class="container">Team|Radar\n        <input type="checkbox" id="Pedro2">\n        <span class="checkmark"></span></label>\n        <label class="container">Reload|Bar\n        <input type="checkbox" id="Pedro3">\n        <span class="checkmark"></span></label>\n        <label class="container">Show|HP\n        <input type="checkbox" id="Pedro4">\n        <span class="checkmark"></span></label>\n        <label class="container">Hit bot\n        <input type="checkbox" id="Pedro5">\n        <span class="checkmark"></span></label>\n        <label class="container">Safe farm\n        <input type="checkbox" id="Pedro6">\n        <span class="checkmark"></span></label>\n        <label class="container">Force boost\n        <input type="checkbox" id="Pedro7">\n        <span class="checkmark"></span></label>\n        <label class="container">Insta bot\n        <input type="checkbox" id="Pedro8">\n        <span class="checkmark"></span></label>\n        <label class="container">Boostspike bot\n        <input type="checkbox" id="Pedro9">\n        <span class="checkmark"></span></label>\n        <label class="container">Slave\n        <input type="checkbox" id="Pedro10">\n        <span class="checkmark"></span></label>\n        <label class="container">Host\n        <input type="checkbox" id="Pedro11">\n        <span class="checkmark"></span></label>\n        <button id="PedroB10">Buy all</button><br>\n        <label class="container">Farming bot\n        <input type="checkbox" id="Pedro13">\n        <span class="checkmark"></span></label>\n        <label class="container">Boostspike bot\n        <input type="checkbox" id="Pedro15">\n        <span class="checkmark"></span></label>\n        <label class="container">ab t\n        <input type="checkbox" id="Pedro14">\n        <span class="checkmark"></span></label>\n        <label class="container">Smart Hats\n        <input type="checkbox" id="Pedro16">\n        <span class="checkmark"></span></label>\n        <button id="PedroB11">Set G</button>\n        <button id="PedroB12">Set F</button>\n                <h3 style="font-size: 17px;"> Map Settings </h3>\n\n                <label class="container"> Biomes\n                    <input type="checkbox" id="myCheck">\n                    <span class="checkmark"></span>\n                </label>\n            </div>\n        </div>\n        <div class="modal-footer">\n            <h3 style="font-size: 17px;">NOZO!</h3>\n            <p>Greasy Fork</p>\n        </div>\n    </div>\n</div>\n`, document.body.appendChild(menuChange), Bots.tinsta, Pedro5.onclick = function() {
        Bots.L = Pedro5.checked
    }, Pedro6.onclick = function() {
        Bots.safehit = Pedro6.checked
    }, Pedro7.onclick = function() {
        Bots.forceBoost = Pedro7.checked
    }, Pedro8.onclick = function() {
        Bots.$ = Pedro8.checked
    }, Pedro9.onclick = function() {
        Bots.BS = Pedro9.checked, simpleModal.style.display = "none"
    }, PedroB10.onclick = function() {
        simpleModal.style.display = "none";
        var e = 0;
        hats.forEach((t => {
            e += t.F
        })), accessories.forEach((t => {
            e += t.F
        })), 1 * scoreDisplay.innerText > e && Ball2(), 1 * scoreDisplay.innerText < e && chat(e - 1 * scoreDisplay.innerText + " for TBA")
    }, Pedro11.onclick = function(e) {
        e.target.checked ? chat("U are now host") : chat("U are no longer host"), Bots.IsHost = e.target.checked
    }, Pedro10.onclick = function(e) {
        e.target.checked ? chat("U are now a slave") : chat("U are no longer a slave"), Bots.IsSlave = e.target.checked
    }, PedroB11.onclick = function() {
        simpleModal.style.display = "none", localStorage.GD = eval(prompt("Enter radius to gaurd in")), localStorage.Gpos = JSON.stringify({
            x: myPlayer.x,
            y: myPlayer.y
        }), chat("location set")
    }, PedroB12.onclick = function() {
        localStorage.dir = myPlayer.dir, simpleModal.style.display = "none"
    }, Pedro13.onclick = function(e) {
        Bots.bFarm = e.target.checked
    }, Pedro14.onclick = function() {}, Pedro15.onclick = e => {
        Bots.tinsta = e.checked, chat(`Trap insta:${e.checked}`)
    }, $("#tankGear").on("input", (() => {
        var e = $("#tankGear").ln();
        e && (TankGearKey = (TankGearKey = e.toUpperCase()).charCodeAt(0))
    })), Pedro16.onclick = function(e) {
        simpleModal.style.display = "none", chat("Auto Hats:" + Pedro16.checked), Bots.smartH = Pedro16.checked
    }, Pedro17.onclick = function(e) {
        window.hs1 = e.target.checked
    }, $("#scavengerGear").on("input", (() => {
        var e = $("#scavengerGear").ln();
        e && (ScavengerGearKey = (ScavengerGearKey = e.toUpperCase()).charCodeAt(0))
    })), $("#assassinGear").on("input", (() => {
        var e = $("#assassinGear").ln();
        e && (AssassinGearKey = (AssassinGearKey = e.toUpperCase()).charCodeAt(0))
    })), $("#empHelmet").on("input", (() => {
        var e = $("#empHelmet").ln();
        e && (EmpHelmetKey = (EmpHelmetKey = e.toUpperCase()).charCodeAt(0))
    })), $("#bullHelm").on("input", (() => {
        var e = $("#bullHelm").ln();
        e && (BullHelmetKey = (BullHelmetKey = e.toUpperCase()).charCodeAt(0))
    })), $("#bushGear").on("input", (() => {
        var e = $("#bushGear").ln();
        e && (BushGearKey = (BushGearKey = e.toUpperCase()).charCodeAt(0))
    })), $("#samuraiArmor").on("input", (() => {
        var e = $("#samuraiArmor").ln();
        e && (SamuraiArmorKey = (SamuraiArmorKey = e.toUpperCase()).charCodeAt(0))
    })), $("#soldier").on("input", (() => {
        var e = $("#soldier").ln();
        e && (SoldierHelmetKey = (SoldierHelmetKey = e.toUpperCase()).charCodeAt(0))
    })), $("#turret").on("input", (() => {
        var e = $("#turret").ln();
        e && (TurretKey = (TurretKey = e.toUpperCase()).charCodeAt(0))
    })), $("#booster").on("input", (() => {
        var e = $("#booster").ln();
        e && (BoosterHatKey = (BoosterHatKey = e.toUpperCase()).charCodeAt(0))
    })), menuChange.remove(), setTimeout((e => {
        function closeModal() {
            modal.style.display = "none"
        }

        function outsideClick(e) {
            e.target == modal && (modal.style.display = "none")
        }
        var modal, closeBtn, menuChange = document.createElement("div");
        menuChange.className = "menuCard", menuChange.id = "mainSettings", menuChange.innerHTML = `\n<div id="simpleModal" class="modal">\n    <div class="modal-content">\n        <div class="modal-header">\n            <span class="closeBtn">&times;</span>\n            <h2 style="font-size: 17px;">Hat Settings</h2>\n        </div>\n        <div class="modal-body" style="font-size: 17px;">\n            <div class="flexControl">\n                <h3 style="color: red; font-size: 17px;"></h3>\n                <h3 class="menuPrompt">Tank: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Bull: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Soldier: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>\n                <h3 class="menuPrompt">Turret: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Booster: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Spike: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Samurai: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="samuraiArmor" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Emp: </h3> <input value="${String.fromCharCode(EmpHelmetKey)}" id="empHelmet" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Bush: </h3> <input value="${String.fromCharCode(BushGearKey)}" id="bushGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Assassin: </h3> <input value="${String.fromCharCode(AssassinGearKey)}" id="assassinGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <h3 class="menuPrompt">Scavenger: </h3> <input value="${String.fromCharCode(ScavengerGearKey)}" id="scavengerGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>\n                <hr>\n                <label class="container">Enemy|Radar\n        <input type="checkbox" id="Pedro">\n        <span class="checkmark"></span></label>\n        <label class="container">Animal|Radar\n        <input type="checkbox" id="Pedro1">\n        <span class="checkmark"></span></label>\n        <label class="container">Team|Radar\n        <input type="checkbox" id="Pedro2">\n        <span class="checkmark"></span></label>\n        <label class="container">Reload|Bar\n        <input type="checkbox" id="Pedro3">\n        <span class="checkmark"></span></label>\n        <label class="container">Show|HP\n        <input type="checkbox" id="Pedro4">\n        <span class="checkmark"></span></label>\n        <label class="container">Hit bot\n        <input type="checkbox" id="Pedro5">\n        <span class="checkmark"></span></label>\n        <label class="container">Safe farm\n        <input type="checkbox" id="Pedro6">\n        <span class="checkmark"></span></label>\n        <label class="container">Force boost\n        <input type="checkbox" id="Pedro7">\n        <span class="checkmark"></span></label>\n        <label class="container">Insta bot\n        <input type="checkbox" id="Pedro8">\n        <span class="checkmark"></span></label>\n        <label class="container">Boostspike bot\n        <input type="checkbox" id="Pedro9">\n        <span class="checkmark"></span></label>\n        <label class="container">Slave\n        <input type="checkbox" id="Pedro10">\n        <span class="checkmark"></span></label>\n        <label class="container">Host\n        <input type="checkbox" id="Pedro11">\n        <span class="checkmark"></span></label>\n        <button id="PedroB10">Buy all</button><br>\n        <label class="container">Farming bot\n        <input type="checkbox" id="Pedro13">\n        <span class="checkmark"></span></label>\n        <label class="container">Boostspike bot\n        <input type="checkbox" id="Pedro15">\n        <span class="checkmark"></span></label>\n        <label class="container">ab t\n        <input type="checkbox" id="Pedro14">\n        <span class="checkmark"></span></label>\n        <label class="container">Smart Hats\n        <input type="checkbox" id="Pedro16">\n        <span class="checkmark"></span></label>\n        <button id="PedroB11">Set G</button>\n        <button id="PedroB12">Set F</button>\n                <h3 style="font-size: 17px;"> Map Settings </h3>\n\n                <label class="container"> Biomes\n                    <input type="checkbox" id="myCheck">\n                    <span class="checkmark"></span>\n                </label>\n            </div>\n        </div>\n        <div class="modal-footer">\n            <h3 style="font-size: 17px;">NOZO!</h3>\n            <p>Greasy Fork</p>\n        </div>\n    </div>\n</div>\n`, document.body.appendChild(menuChange), Bots.tinsta, Pedro5.onclick = function() {
            Bots.L = Pedro5.checked
        }, Pedro6.onclick = function() {
            Bots.safehit = Pedro6.checked
        }, Pedro7.onclick = function() {
            Bots.forceBoost = Pedro7.checked
        }, Pedro8.onclick = function() {
            Bots.$ = Pedro8.checked
        }, Pedro9.onclick = function() {
            Bots.BS = Pedro9.checked, simpleModal.style.display = "none"
        }, PedroB10.onclick = function() {
            simpleModal.style.display = "none";
            var e = 0;
            hats.forEach((t => {
                e += t.F
            })), accessories.forEach((t => {
                e += t.F
            })), 1 * scoreDisplay.innerText > e && Ball2(), 1 * scoreDisplay.innerText < e && chat(e - 1 * scoreDisplay.innerText + " for TBA")
        }, Pedro11.onclick = function(e) {
            e.target.checked ? chat("U are now host") : chat("U are no longer host"), Bots.IsHost = e.target.checked
        }, Pedro10.onclick = function(e) {
            e.target.checked ? chat("U are now a slave") : chat("U are no longer a slave"), Bots.IsSlave = e.target.checked
        }, PedroB11.onclick = function() {
            simpleModal.style.display = "none", localStorage.GD = eval(prompt("Enter radius to gaurd in")), localStorage.Gpos = JSON.stringify({
                x: myPlayer.x,
                y: myPlayer.y
            }), chat("location set")
        }, PedroB12.onclick = function() {
            localStorage.dir = myPlayer.dir, simpleModal.style.display = "none"
        }, Pedro13.onclick = function(e) {
            Bots.bFarm = e.target.checked
        }, Pedro14.onclick = function() {}, Pedro15.onclick = e => {
            Bots.tinsta = e.checked, chat(`Trap insta:${e.checked}`)
        }, $("#tankGear").on("input", (() => {
            var e = $("#tankGear").ln();
            e && (TankGearKey = (TankGearKey = e.toUpperCase()).charCodeAt(0))
        })), Pedro16.onclick = function(e) {
            simpleModal.style.display = "none", chat("Auto Hats:" + Pedro16.checked), Bots.smartH = Pedro16.checked
        }, Pedro17.onclick = function(e) {
            window.hs1 = e.target.checked
        }, $("#scavengerGear").on("input", (() => {
            var e = $("#scavengerGear").ln();
            e && (ScavengerGearKey = (ScavengerGearKey = e.toUpperCase()).charCodeAt(0))
        })), $("#assassinGear").on("input", (() => {
            var e = $("#assassinGear").ln();
            e && (AssassinGearKey = (AssassinGearKey = e.toUpperCase()).charCodeAt(0))
        })), $("#empHelmet").on("input", (() => {
            var e = $("#empHelmet").ln();
            e && (EmpHelmetKey = (EmpHelmetKey = e.toUpperCase()).charCodeAt(0))
        })), $("#bullHelm").on("input", (() => {
            var e = $("#bullHelm").ln();
            e && (BullHelmetKey = (BullHelmetKey = e.toUpperCase()).charCodeAt(0))
        })), $("#bushGear").on("input", (() => {
            var e = $("#bushGear").ln();
            e && (BushGearKey = (BushGearKey = e.toUpperCase()).charCodeAt(0))
        })), $("#samuraiArmor").on("input", (() => {
            var e = $("#samuraiArmor").ln();
            e && (SamuraiArmorKey = (SamuraiArmorKey = e.toUpperCase()).charCodeAt(0))
        })), $("#soldier").on("input", (() => {
            var e = $("#soldier").ln();
            e && (SoldierHelmetKey = (SoldierHelmetKey = e.toUpperCase()).charCodeAt(0))
        })), $("#turret").on("input", (() => {
            var e = $("#turret").ln();
            e && (TurretKey = (TurretKey = e.toUpperCase()).charCodeAt(0))
        })), $("#booster").on("input", (() => {
            var e = $("#booster").ln();
            e && (BoosterHatKey = (BoosterHatKey = e.toUpperCase()).charCodeAt(0))
        })), document.addEventListener("keydown", (function(e) {
            e.keyCode == uneqiup && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(0) : 27 == e.keyCode ? (modal.style.display = "none") ? modal.style.display = "block" : modal.style.display = "none" : e.keyCode == ScavengerGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_ScavengerGearGear) : e.keyCode == AssassinGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_AssassinGear) : e.keyCode == BushGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_BushGear) : e.keyCode == EmpHelmetKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_EmpHelmet) : e.keyCode == TankGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_TankGear) : e.keyCode == SamuraiArmorKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_SamuraiArmor) : e.keyCode == SoldierHelmetKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_SoldierHelmet) : e.keyCode == BullHelmetKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_BullHelmet) : e.keyCode == BoosterHatKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_BoosterHat) : e.keyCode == SpikeGearKey && "chatbox" !== document.activeElement.id.toLowerCase() ? storeEquip(ID_SpikeGear) : e.keyCode == TurretKey && "chatbox" !== document.activeElement.id.toLowerCase() && storeEquip(ID_TurretGear)
        })), modal = document.getElementById("simpleModal"), closeBtn = document.getElementsByClassName("closeBtn")[0], closeBtn.addEventListener("click", closeModal), window.addEventListener("click", outsideClick)
    }), 1e3), styleItem = document.createElement("style"), styleItem.type = "text/css", styleItem.appendChild(document.createTextNode("\n.keyPressLow {\n    margin-left: 8px;\n    font-size: 16px;\n    margin-right: 8px;\n    height: 25px;\n    width: 50px;\n    background-color: #fcfcfc;\n    border-radius: 3.5px;\n    border: none;\n    text-align: center;\n    color: #4a4a4a;\n    border: 0.5px solid #f2f2f2;\n}\n\n.menuPrompt {\n    font-size: 17px;\n    font-family: 'Hammersmith One';\n    color: #4A4A4A;\n    flex: 0.2;\n    text-align: center;\n    margin-top: 10px;\n    display: inline-block;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    overflow: auto;\n    height: 100%;\n    width: 100%;\n}\n\n.modal-content {\n    margin: 10% auto;\n    width: 40%;\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n    font-size: 14px;\n    line-height: 1.6;\n}\n\n.modal-header h2,\n.modal-footer h3 {\n  margin: 0;\n}\n\n.modal-header {\n    background: #00FF00;\n    padding: 15px;\n    color: #fff;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.modal-body {\n    padding: 10px 20px;\n    background: #fff;\n}\n\n.modal-footer {\n    background: #00FF00;\n    padding: 10px;\n    color: #fff;\n    text-align: center;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.closeBtn {\n    color: #ccc;\n    float: right;\n    font-size: 30px;\n    color: #fff;\n}\n\n.closeBtn:hover,\n.closeBtn:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* Customize the label (the container) */\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n}\n\n/* On mouse-over, add a grey background color */\n.container:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n")), document.head.appendChild(styleItem), document.addEventListener("keydown", (function(e) {
        84 == e.keyCode && storeBuy(7)
    })), document.addEventListener("keydown", (function(e) {
        18 == e.keyCode && storeBuy(40)
    })), document.addEventListener("keydown", (function(e) {
        16 == e.keyCode && storeBuy(12)
    })), document.addEventListener("keydown", (function(e) {
        90 == e.keyCode && storeBuy(53)
    })), document.addEventListener("keydown", (function(e) {
        75 == e.keyCode && storeBuy(20)
    })), document.addEventListener("keydown", (function(e) {
        221 == e.keyCode && storeBuy(20)
    })), document.addEventListener("keydown", (function(e) {
        187 == e.keyCode && storeBuy(31)
    })), document.addEventListener("keydown", (function(e) {
        107 == e.keyCode && storeBuy(56)
    })), document.addEventListener("keydown", (function(e) {
        186 == e.keyCode && storeBuy(10)
    })), document.addEventListener("keydown", (function(e) {
        106 == e.keyCode && storeBuy(27)
    })), Parse(), Parse(), document.getElementById("enterGame").innerHTML = "NOZOMod 1.0.", document.getElementById("loadingText").innerHTML = "NOZOModWait", document.getElementById("storeHolder").style = "height: 1500px; width: 450px;", document.getElementById("pingDisplay").style.color = "#88cce3", document.getElementById("gameName").style.color = "#88cce3", document.getElementById("chatBox").placeholder = "Sayonala", document.getElementById("diedText").innerHTML = "NOZO CLAN ON TOP", document.getElementById("gameName").innerHTML = "NOZOMOD IS OP", document.getElementById("promoImg").remove(), $("#mapDisplay").css({
        background: "url('http://i.imgur.com/Qllo1mA.png')"
    }), $("#partyButton, #joinPartyButton").wrapAll('<div class="partyWrap"></div>'), $("#linksContainer2 > a:nth-child(1)").replaceWith('<a href="./docs/versions.txt" target="_blank" class="menuLink">lol.</a>'), $("#partyButton").replaceWith('<span>Empty </span><i class="material-icons" style="font-size:30px;vertical-align:middle">\xee\xa3\u201c</i>'), $("#errorNotification").after('<div id="moddedMenu"><div class="titleMM">NOZOmod</div><div class="one"><label class="switch"></span></label><div class="two"><div class="text"><b>NOZO1.0<br> MadeByMeAls<label class="container">CPSMod<input type="checkbox" id="."><span class="checkmark"></label><label class="container"></b><hr></span></label><label class="container">AutoAim<input type="checkbox" id="autoaim"><span class="checkmark"></label><label class="container">invsible Insta<input type="checkbox" id="soldierinsta"><span class="checkmark"></label><label class="container">Biome Map<input type="checkbox" id="myCheck"><span class="checkmark"></label><label class="container">Anime Map<input type="checkbox" id="myCheck2"><span class="checkmark"></label><label class="container">King Map<input type="checkbox" id="myCheck3"><span class="checkmark"></label><label class="container">AntiClown<input type="checkbox" id="myCheck4"><span class="checkmark"></div></div>'),
    function() {
        var e, t, n = ["  #twitterFollow, ", "  #youtubeFollow, ", "  #downloadButtonContainer, ", "  #followText, ", "  #promoImg {", "    display: none;", "  }", "", "  #featuredYoutube > a.ytLink, ", "  a {", "    color: #88cce3 !important;", "    font-size: 20px;", "    margin-top: 0px;", "    transition: 0.5s;", "  }", "", "  a:hover {", "    color: #88cce3 !important;", "  }", "", "  #youtuberOf, ", "  #linksContainer2, ", "  .partyWrap {", "    background: rgba(0,0,0,0.6);", "    border: 3px solid rgba(0,0,0,0.9);", "    border-radius: 10px;", "    padding: 10px;", "    font-size: 20px;", "    position: absolute;", "    color: #88cce3;", "  }", "", "  .partyWrap {", "    min-height: 80px;", "    min-width: 160px;", "    top: 10px;", "    right: 10px;", "  }", "", "  #youtuberOf {", "    top: 10px;", "    left: 10px;", "  }", "", "  #followText {", "    min-height: 200px;", "    bottom: 10px;", "    left: 10px;", "  }", "", "  #linksContainer2 {", "    bottom: 10px;", "    right: 10px;", "    color: transparent;", "  }", "", "  .menuCard {", "    background: rgba(0,0,0,0.6);", "    border-radius: 10px;", "    border: 10px solid rgba(0,0,0,0.9);", "    box-shadow: none;", "    overflow:auto;", "  }", "", "  ::-webkit-scrollbar {", "    width: 10px;", "    border-right: 2px solid #88cce3;", "  }", "", "  ::-webkit-scrollbar-thumb {", "    border: 2px solid #88cce3;", "  }", "", "  ::-webkit-scrollbar-thumb:hover {", "    background: #88cce3;", "  }", "", "  ::-webkit-scrollbar-thumb:active {", "    background: black;", "    border: 2px solid #88cce3;", "  }", "", "  .menuHeader {", "    font-size: 24px;", "    color: #eeeeee;", "    margin-bottom: 3px;", "    border-bottom: 3px solid #88cce3;", "  }", "", "  .menuHeader:first-child {", "    margin-bottom: 30px;", "  }", "", "  .menuText {", "    font-size: 18px;", "    color: #88cce3;", "    margin-bottom: 10px;", "  }", "", "  .ytLink {", "    color: #88cce3;", "    font-size: 24px;", "    text-decoration: none;", "    transition: 0.5s;", "  }", "", "  .menuButton {", "    color: #88cce3;", "    background-color: transparent;", "    border: 5px solid #d166ff;", "    position: relative;", "    display: inline-flex;", "    padding: 0px 70px;", "    font-family: denk one;", "    transition: color .5s;", "    overflow: hidden;", "    width: 100%;", "    justify-content: center;", "  }", "", "  .menuButton:hover {", "    color: #88cce3 !important;", "    border: 5px solid #d166ff;", "    cursor: pointer;", "    background-color: transparent;", "  }", "", "  .menuButton:before {", "    content: '';", "    position: absolute;", "    top: 0;", "    left: 0;", "    width: 130%; ", "    height: 10000%;", "    background: #88cce3;", "    border-right: 20px solid #b6fe9c;", "    z-index: -1;", "    transform-origin:0 0 ;", "    transform:translateX(-112%) skewX(45deg);", "    transition: transform .5s;", "  }", "", "  .menuButton:hover:before {", "    color: #88cce3 !important;", "    transform: translateX(-20%) skewX(45deg);", "  }", "", "  .menuCard span {", "    margin: 10px;", "  }", "", "  #promoHolderImg > img {", "    width: 300px;", "    height: 94px;", "  }", "", "  #guideCard {", "    max-height: 282px;", "  }", "", "  .skinColorItem {", "    transition: 1s;", "    border: 3px solid #88cce3;", "  }", "", "  select {", "    background: #88cce3;", "    border-radius: 5px;", "    border: 3px solid #d166ff;", "    margin-bottom: 10px;", "    color: #7900a8;", "    transition: 0.5s;", "  }", "", "  select:hover {", "    background: #88cce3;", "    border: 3px solid #d166ff;", "  }", "", "  #pre-content-container {", "    display: none!important;", "  }", "", "  .uiElement, ", "  .resourceDisplay, ", "  .actionBarItem {", "    background-color: rgba(0,0,0,0.6) !important;", "    border: 3px solid rgba(0,0,0,0.9);", "    border-radius: 50px !important;", "    color: #88cce3;", "    transition: 0.5s;", "  }", "", "  .uiElement:hover, ", "  .resourceDisplay:hover, ", "  .actionBarItem:hover {", "    background-color: rgba(0,0,0,0.5) !important;", "    border: 3px solid rgba(0,0,0,0.9);", "    border-radius: 50px !important;", "    color: #88cce3;", "  }", "", "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ", "    background-color: rgba(0,0,0,0.6) !important;", "    border: 3px solid rgba(0,0,0,0.9);", "    border-radius: 10px !important;", "    color: #88cce3;", "  }", "", "  #itemInfoHolder { ", "    -webkit-text-stroke: transparent;", "  }", "", "  .material-icons { ", "    color: #88cce3;", "    font-size: 31px;", "    -webkit-text-stroke: 1.5px #d166ff;", "  }", "", "  #altServer > a > i {", "    font-size: 30px !important;", "    -webkit-text-stroke: transparent !important;", "  }", "", "  #ageText { ", "    font-size: 40px !important;", "    color: #88cce3;", "    -webkit-text-stroke: 1.5px #d166ff;", "    margin-bottom: 30px;", "  }", "", "  #ageBarBody {", "    background-color: #88cce3;", "    border: 3px solid #d166ff", "  }", "", "  #ageBar {", "    background-color: rgba(0,0,0,0.6) !important;", "    border: 3px solid rgba(0,0,0,0.9);", "    height: 10px;", "    padding-bottom: 10px;", "    margin-bottom: 20px;", "  }", "", "  .actionBarItem {", "    width: 65px;", "    height: 65px;", "    background-position: center; ", "    background-size: 55px 55px;", "  }", "", "  #aBox {", "    color:  #88cce3 !important;", "    transition: 0.5s;", "  }", "", "  #chatBox::placeholder {", "    color: #88cce3 !important;", "  }", "", "  #chatBox:hover {", "    background: rgba(0,0,0,0.5)!important;", "  }", "", "  #chatBox:hover::placeholder {", "    color: #88cce3!important;", "  }", "", '  #leaderboard, .leaderboardItem[style*="color: rgb(255, 255, 255);"] {', "    color: #88cce3 !important;", "  }", "", "  .ytLink:hover {", "    color: #88cce3;", "  }", "", "  #nameInput {", "    background: #88cce3;", "    border: 5px solid #d166ff;", "    transition: 0.5s;", "  }", "", "  #nameInput::placeholder {", "    color: #88cce3;", "    transition: 0.5s;", "  }", "", "  #nameInput:hover {", "    background: #88cce3;", "    color: #d166ff;", "  }", "", "  #nameInput:hover::placeholder {", "    background: #88cce3;", "    color: #d166ff;", "  }", "", "  #linksContainer2 {", "    max-height: 500px;", "    width: 250px;", "  }", "", "  #linksContainer2 > * {", "    display:table-cell;", "    vertical-align:middle;", "    text-align: center;", "    width:700px;", "  }", "  ", "  .storeTab, ", "  #storeHolder, ", "  #allianceHolder, ", "  #allianceInput, ", "  .allianceButtonM {", "    background: rgba(0,0,0,0.6);", "    border: 3px solid rgba(0,0,0,0.9);", "  }", "", "  .storeItem, ", "  .storeTab, ", "  .allianceButtonM, ", "  #allianceInput::placeholder, ", "  .allianceItem {", "    color: #88cce3 !important;", "  }", "", "  .storeItem, ", "  .storeTab, ", "  .allianceButtonM, ", "  #allianceInput::placeholder, ", "  .allianceItem, ", "  .joinAlBtn {", "    color: #88cce3 !important;", "  }", "", "  .storeItem:hover, ", "  .storeTab:hover, ", "  .allianceButtonM:hover,", "  .allianceItem:hover, ", "  .joinAlBtn:hover {", "    color: #88cce3 !important;", "  }", "", "  #allianceInput, ", "  #killCounter {", "    color: #88cce3;", "  }", "  ", "  #allianceInput:hover {", "    background: rgba(0,0,0,0.5);", "    color: #88cce3;", "  }", "", "  #allianceInput:hover::placeholder{", "    color: #88cce3;", "  }", "", "  #linksContainer2 > *:first-child {", "    border-bottom: 3px solid #88cce3;", "  }", "", "  #moddedMenu {", "    position: absolute;", "    top: 3.25%;", "    left: 0px;", "    width: 3%;", "    height: 50.5%;", "    background: rgba(0,0,0,0.6);", "    border: 3px solid rgba(0,0,0,0.9);", "    border-top-right-radius: 30px;", "    border-bottom-right-radius: 30px;", "    transition: 1s;", "    z-index: 999;", "  }", "", "  #moddedMenu:hover {", "    width: 20%;", "  }", "", "  #youtuberOf {", "    bottom: 10px;", "    top: auto;", "  }", "", "  .titleMM {", "    color: #88cce3;", "    border-bottom: 3px solid #d166ff;", "    font-size: 32px;", "    transform: rotate(90deg);", "    white-space: nowrap;", "    margin-top: 250%;", "    transition: 1s;", "  }", "", "  #moddedMenu:hover > .titleMM {", "    transform: rotate(0deg) translate(0,-1580%)", "  }", "", "  .switch {", "    margin-top: 5px;", "    margin-left: 10px;", "    position: absolute;", "    width: 60px;", "    height: 34px;", "    transition: opacity 1s;", "    opacity: 0;", "  }", "", "  .text {", "    bottom: 76%;", "    position: absolute;", "    color: #eee;", "    font-size: 20px;", "    left: 0%;", "    display: none;", "    transition: 1s;", "  }", "", "  .text > b { ", "    font-size: 20px;", "    color: #88cce3;", "  }", "", "  b:hover { ", "    color: #88cce3;", "  }", "", "  .one > .text {", "    top: 5.5%;", "  }", "", "  .two > .text {", "    top: 10.7%;", "  }", "", "  .three > .text {", "    top: 37.5%;", "  }", "", "  .four > .text {", "    top: 47.5%;", "  }", "", "  .five > .text {", "    top: 57.5%;", "  }", "", "  .six > .text {", "    top: 67.5%;", "  }", "", "  .seven > .text {", "    top: 77.5%;", "  }", "", "  .eight > .text {", "    top: 87.5%;", "  }", "", "  #moddedMenu:hover .switch {", "    opacity: 1;", "  }", "", "  #moddedMenu:hover .text {", "    display: block;", "  }", "", "  .one > .switch {", "    top: 15%;", "  }", "", "  .two > .switch {", "    top: 25%;", "  }", "", "  .three > .switch {", "    top: 35%;", "  }", "", "  .four > .switch {", "    top: 45%;", "  }", "", "  .five > .switch {", "    top: 55%;", "  }", "", "  .six > .switch {", "    top: 65%;", "  }", "", "  .seven > .switch {", "    top: 75%;", "  }", "", "  .eight > .switch {", "    top: 85%;", "  }", "", "  .switch input {", "    display:none;", "  }", "", "  .slider {", "    position: absolute;", "    cursor: pointer;", "    top: 0;", "    left: 0;", "    right: 0;", "    bottom: 0;", "    background-color: #88cce3;", "    -webkit-transition: .4s;", "    transition: .4s;", "  }", "", "  .slider:before {", "    position: absolute;", '    content: "";', "    height: 26px;", "    width: 26px;", "    left: 4px;", "    bottom: 4px;", "    background-color: white;", "    -webkit-transition: .4s;", "    transition: .4s;", "  }", "", "  input:checked + .slider {", "    background-color: #88cce3;", "  }", "  ", "  input:focus + .slider {", "    box-shadow: 0 0 1px #88cce3;", "  }", "", "  input:checked + .slider:before {", "    -webkit-transform: translateX(26px);", "    -ms-transform: translateX(26px);", "    transform: translateX(26px);", "  }", "", "  .slider.round {", "    border-radius: 34px;", "  }", "", "  .slider.round:before {", "    border-radius: 50%;", "  }"].join("\n");
        "undefined" != typeof GM_addStyle ? GM_addStyle(n) : "undefined" != typeof PRO_addStyle ? PRO_addStyle(n) : "undefined" != typeof addStyle ? addStyle(n) : ((e = document.createElement("style")).type = "text/css", e.appendChild(document.createTextNode(n)), (t = document.getElementsByTagName("head")).length > 0 ? t[0].appendChild(e) : document.documentElement.appendChild(e))
    }(), autoaim_ = document.querySelector("#autoaim"), autoaim_.addEventListener("change", (function() {
        this.checked ? (autoaim = !0, doNewSend(["ch", ["NOZOAutoAim : ON"]])) : (autoaim = !1, doNewSend(["ch", ["NOZOAutoAim : OFF"]]))
    })), soldierinsta = document.querySelector("#soldierinsta"), soldierinsta.addEventListener("change", (function() {
        this.checked ? (soldierinsta = !0, doNewSend(["ch", ["InvsibleInsta: ON"]]), instaSpeed = 85) : (soldierinsta = !1, instaSpeed = 130, doNewSend(["ch", ["InvisibleInsta : OFF"]]))
    })), myCheck = document.querySelector("#myCheck"), myCheck.addEventListener("change", (function() {
        this.checked ? ($("#mapDisplay").css({
            background: "url('http://i.imgur.com/Qllo1mA.png')"
        }), doNewSend(["ch", ["Biome Map : ON"]])) : ($("#mapDisplay").css({
            background: "rgba(0, 0, 0, 0.25)"
        }), doNewSend(["ch", ["Biome Map : OFF"]]))
    })), myCheck2 = document.querySelector("#myCheck2"), myCheck2.addEventListener("change", (function() {
        this.checked ? ($("#mapDisplay").css({
            background: "url('https://cdn.discordapp.com/attachments/525606870250160131/739708564666581103/download_2.jpg')"
        }), doNewSend(["ch", ["Anime Map : ON"]])) : ($("#mapDisplay").css({
            background: "rgba(0, 0, 0, 0.25)"
        }), doNewSend(["ch", ["Anime Map : OFF"]]))
    })), myCheck3 = document.querySelector("#myCheck3"), myCheck3.addEventListener("change", (function() {
        this.checked ? ($("#mapDisplay").css({
            background: "url('https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg')"
        }), doNewSend(["ch", ["KingjonunMap : OFF"]])) : ($("#mapDisplay").css({
            background: "rgba(0, 0, 0, 0.25)"
        }), doNewSend(["ch", ["KingjonunMap : ON"]]))
    })), myCheck4 = document.querySelector("#myCheck4"), myCheck4.addEventListener("change", (function() {
        this.checked ? ($("#mapDisplay").css({
            background: "url('')"
        }), doNewSend(["ch", ["AntiClown:On"]])) : ($("#mapDisplay").css({
            background: "rgba(0, 0, 0, 0.25)"
        }), doNewSend(["ch", ["AntiClown:Off"]]))
    })),
    function(e) {
        function t(i) {
            if (n[i]) {
                return n[i].exports
            }
            var o = n[i] = {
                dn: i,
                un: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.un = !0, o.exports
        }
        var n = {};
        t.hn = e, t.c = n, t.d = function(e, n, i) {
            t.fn(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "mn", {
                value: !0
            })
        }, t.k = function(e, n) {
            var i, o;
            if (1 & n && (e = t(e)), 8 & n) {
                return e
            }
            if (4 & n && "object" == typeof e && e && e.mn) {
                return e
            }
            if (i = Object.create(null), t.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e) {
                for (o in e) {
                    t.d(i, o, function(t) {
                        return e[t]
                    }.bind(null, o))
                }
            }
            return i
        }, t.n = function(e) {
            var n = e && e.mn ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.fn = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.pn = "", t(t.s = 21)
    }([function(e, t, n) {
        function i(e) {
            return o(this).gn(e)
        }

        function o(e) {
            return s(e) ? d : c(e) ? u : w(e) ? l : p ? d : g ? u : l
        }

        function a() {
            return !1
        }

        function r(e, t) {
            return e = "[object " + e + "]",
                function(n) {
                    return null != n && {}.toString.call(t ? n[t] : n) === e
                }
        }
        var s, c, l, d, u, h, f, m = t.global = n(25),
            p = t.wn = m && !!m.isBuffer,
            g = t.yn = "undefined" != typeof ArrayBuffer,
            w = t.isArray = n(5);
        t.kn = g ? function(e) {
            return e instanceof ArrayBuffer || f(e)
        } : a, s = t.isBuffer = p ? m.isBuffer : a, c = t.isView = g ? ArrayBuffer.isView || r("ArrayBuffer", "buffer") : a, t.gn = i, t.concat = function(e, n) {
            n || (n = 0, Array.prototype.forEach.call(e, (function(e) {
                n += e.length
            })));
            var o = this !== t && this || e[0],
                a = i.call(o, n),
                r = 0;
            return Array.prototype.forEach.call(e, (function(e) {
                r += h.bn.call(e, a, r)
            })), a
        }, t.from = function(e) {
            return "string" == typeof e ? function(e) {
                var t = 3 * e.length,
                    n = i.call(this, t),
                    o = h.write.call(n, e);
                return t !== o && (n = h.slice.call(n, 0, o)), n
            }.call(this, e) : o(this).from(e)
        }, l = t.Array = n(28), d = t.vn = n(29), u = t.Uint8Array = n(30), h = t.prototype = n(6), f = r("ArrayBuffer")
    }, function(e, t, n) {
        function i(e) {
            if (!(this instanceof i)) {
                return new i(e)
            }
            this.options = e, this.init()
        }

        function o(e, t) {
            return e && t ? function() {
                return e.apply(this, arguments), t.apply(this, arguments)
            } : e || t
        }

        function a(e) {
            return new i(e)
        }
        var r, s = n(5);
        t.Sn = a, t.xn = function(e) {
            for (var t in e) {
                i.prototype[t] = o(i.prototype[t], e[t])
            }
        }, t.filter = function(e) {
            return s(e) ? function(e) {
                function t(e, t) {
                    return t(e)
                }
                return e = e.slice(),
                    function(n) {
                        return e.reduce(t, n)
                    }
            }(e) : e
        }, r = n(0), i.prototype.init = function() {
            var e = this.options;
            return e && e.Pn && (this.Cn = r.Uint8Array), this
        }, t.Mn = a({
            Mn: !0
        })
    }, function(e, t, n) {
        function i() {
            var e = this.options;
            return this.encode = function(e) {
                var t = r.Tn(e);
                return function(e, n) {
                    var i = t[typeof n];
                    if (!i) {
                        throw new Error('Unsupported type "' + typeof n + '": ' + n)
                    }
                    i(e, n)
                }
            }(e), e && e.Mn && a.Bn(this), this
        }
        var o = n(3)._n,
            a = n(32),
            r = n(33),
            s = n(1);
        s.xn({
            Nn: function(e, t, n) {
                function i(t) {
                    return n && (t = n(t)), new o(t, e)
                }
                n = s.filter(n);
                var a = t.name;
                a && "Object" !== a ? (this.On || (this.On = {}))[a] = i : (this.An || (this.An = [])).unshift([t, i])
            },
            In: function(e) {
                var t, n, i, o, a = this.On || (this.On = {}),
                    r = e.constructor,
                    s = r && r.name && a[r.name];
                if (s) {
                    return s
                }
                for (n = (t = this.An || (this.An = [])).length, i = 0; i < n; i++) {
                    if (r === (o = t[i])[0]) {
                        return o[1]
                    }
                }
            },
            init: i
        }), t.Mn = i.call(s.Mn)
    }, function(e, t, n) {
        t._n = function o(e, t) {
            if (!(this instanceof o)) {
                return new o(e, t)
            }
            this.buffer = i.from(e), this.type = t
        };
        var i = n(0)
    }, function(e, t) {
        t.read = function(e, t, n, i, o) {
            var a, r, s = 8 * o - i - 1,
                c = (1 << s) - 1,
                l = c >> 1,
                d = -7,
                u = n ? o - 1 : 0,
                h = n ? -1 : 1,
                f = e[t + u];
            for (u += h, a = f & (1 << -d) - 1, f >>= -d, d += s; d > 0; a = 256 * a + e[t + u], u += h, d -= 8) {}
            for (r = a & (1 << -d) - 1, a >>= -d, d += i; d > 0; r = 256 * r + e[t + u], u += h, d -= 8) {}
            if (0 === a) {
                a = 1 - l
            } else {
                if (a === c) {
                    return r ? NaN : 1 / 0 * (f ? -1 : 1)
                }
                r += Math.pow(2, i), a -= l
            }
            return (f ? -1 : 1) * r * Math.pow(2, a - i)
        }, t.write = function(e, t, n, i, o, a) {
            var r, s, c, l = 8 * a - o - 1,
                d = (1 << l) - 1,
                u = d >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = i ? 0 : a - 1,
                m = i ? 1 : -1,
                p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = d) : (r = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -r)) < 1 && (r--, c *= 2), (t += r + u >= 1 ? h / c : h * Math.pow(2, 1 - u)) * c >= 2 && (r++, c /= 2), r + u >= d ? (s = 0, r = d) : r + u >= 1 ? (s = (t * c - 1) * Math.pow(2, o), r += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, o), r = 0)); o >= 8; e[n + f] = 255 & s, f += m, s /= 256, o -= 8) {}
            for (r = r << o | s, l += o; l > 0; e[n + f] = 255 & r, f += m, r /= 256, l -= 8) {}
            e[n + f - m] |= 128 * p
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        function i(e, t, n, i) {
            var r, s = a.isBuffer(this),
                d = a.isBuffer(e);
            return s && d ? this.bn(e, t, n, i) : c || s || d || !a.isView(this) || !a.isView(e) ? l.bn.call(this, e, t, n, i) : (r = n || null != i ? o.call(this, n, i) : this, e.set(r, t), r.length)
        }

        function o(e, t) {
            var n, o = this.slice || !c && this.subarray;
            return o ? o.call(this, e, t) : (n = a.gn.call(this, t - e), i.call(this, n, 0, e, t), n)
        }
        var a, r, s, c, l = n(31);
        t.bn = i, t.slice = o, t.toString = function(e, t, n) {
            return (!s && a.isBuffer(this) ? this.toString : l.toString).apply(this, arguments)
        }, t.write = function(e) {
            return function() {
                return (this[e] || l[e]).apply(this, arguments)
            }
        }("write"), r = (a = n(0)).global, s = a.wn && "En" in r, c = s && !r.En
    }, function(e, t, n) {
        (function(e) {
            ! function(t) {
                function n(e, n, k) {
                    function v(e, t, n, i) {
                        return this instanceof v ? function(e, t, n, i, o) {
                            g && w && (t instanceof w && (t = new g(t)), i instanceof w && (i = new g(i))), t || n || i || f ? (r(t, n) || (o = n, i = t, n = 0, t = new(f || Array)(8)), e.buffer = t, e.offset = n |= 0, m !== typeof i && ("string" == typeof i ? function(e, t, n, i) {
                                var o, a, r = 0,
                                    s = n.length,
                                    c = 0,
                                    l = 0;
                                for ("-" === n[0] && r++, o = r; r < s && (a = parseInt(n[r++], i)) >= 0;) {
                                    l = l * i + a, c = c * i + Math.floor(l / b), l %= b
                                }
                                o && (c = ~c, l ? l = b - l : c++), x(e, t + C, c), x(e, t + M, l)
                            }(t, n, i, o || 10) : r(i, o) ? s(t, n, i, o) : "number" == typeof o ? (x(t, n + C, i), x(t, n + M, o)) : i > 0 ? O(t, n, i) : i < 0 ? A(t, n, i) : s(t, n, y, 0))) : e.buffer = c(y, 0)
                        }(this, e, t, n, i) : new v(e, t, n, i)
                    }

                    function S() {
                        var e = this.buffer,
                            t = this.offset,
                            n = P(e, t + C),
                            i = P(e, t + M);
                        return k || (n |= 0), n ? n * b + i : i
                    }

                    function x(e, t, n) {
                        e[t + N] = 255 & n, n >>= 8, e[t + _] = 255 & n, n >>= 8, e[t + B] = 255 & n, n >>= 8, e[t + T] = 255 & n
                    }

                    function P(e, t) {
                        return 16777216 * e[t + T] + (e[t + B] << 16) + (e[t + _] << 8) + e[t + N]
                    }
                    var C = n ? 0 : 4,
                        M = n ? 4 : 0,
                        T = n ? 0 : 3,
                        B = n ? 1 : 2,
                        _ = n ? 2 : 1,
                        N = n ? 3 : 0,
                        O = n ? l : u,
                        A = n ? d : h,
                        I = v.prototype,
                        E = "is" + e,
                        H = "_" + E;
                    return I.buffer = void 0, I.offset = 0, I[H] = !0, I.Hn = S, I.toString = function(e) {
                        var t, n = this.buffer,
                            i = this.offset,
                            o = P(n, i + C),
                            a = P(n, i + M),
                            r = "",
                            s = !k && 2147483648 & o;
                        for (s && (o = ~o, a = b - a), e = e || 10; t = o % e * b + a, o = Math.floor(o / e), a = Math.floor(t / e), r = (t % e).toString(e) + r, o || a;) {}
                        return s && (r = "-" + r), r
                    }, I.toJSON = S, I.toArray = i, p && (I.Dn = o), g && (I.jn = a), v[E] = function(e) {
                        return !(!e || !e[H])
                    }, t[e] = v, v
                }

                function i(e) {
                    var t = this.buffer,
                        n = this.offset;
                    return f = null, !1 !== e && 0 === n && 8 === t.length && k(t) ? t : c(t, n)
                }

                function o(t) {
                    var n, i = this.buffer,
                        o = this.offset;
                    return f = p, !1 !== t && 0 === o && 8 === i.length && e.isBuffer(i) ? i : (s(n = new p(8), 0, i, o), n)
                }

                function a(e) {
                    var t, n = this.buffer,
                        i = this.offset,
                        o = n.buffer;
                    return f = g, !1 !== e && 0 === i && o instanceof w && 8 === o.byteLength ? o : (s(t = new g(8), 0, n, i), t.buffer)
                }

                function r(e, t) {
                    var n = e && e.length;
                    return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
                }

                function s(e, t, n, i) {
                    t |= 0, i |= 0;
                    for (var o = 0; o < 8; o++) {
                        e[t++] = 255 & n[i++]
                    }
                }

                function c(e, t) {
                    return Array.prototype.slice.call(e, t, t + 8)
                }

                function l(e, t, n) {
                    for (var i = t + 8; i > t;) {
                        e[--i] = 255 & n, n /= 256
                    }
                }

                function d(e, t, n) {
                    var i = t + 8;
                    for (n++; i > t;) {
                        e[--i] = 255 & -n ^ 255, n /= 256
                    }
                }

                function u(e, t, n) {
                    for (var i = t + 8; t < i;) {
                        e[t++] = 255 & n, n /= 256
                    }
                }

                function h(e, t, n) {
                    var i = t + 8;
                    for (n++; t < i;) {
                        e[t++] = 255 & -n ^ 255, n /= 256
                    }
                }
                var f, m = "undefined",
                    p = m !== typeof e && e,
                    g = m !== typeof Uint8Array && Uint8Array,
                    w = m !== typeof ArrayBuffer && ArrayBuffer,
                    y = [0, 0, 0, 0, 0, 0, 0, 0],
                    k = Array.isArray || function(e) {
                        return !!e && "[object Array]" == Object.prototype.toString.call(e)
                    },
                    b = 4294967296;
                n("Uint64BE", !0, !0), n("Int64BE", !0, !1), n("Uint64LE", !1, !0), n("Int64LE", !1, !1)
            }("string" != typeof t.nodeName ? t : this || {})
        }).call(this, n(11).vn)
    }, function(e, t, n) {
        function i() {
            var e = this.options;
            return this.decode = function(e) {
                var t = s.Fn(e);
                return function(e) {
                    var n = r(e),
                        i = t[n];
                    if (!i) {
                        throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n))
                    }
                    return i(e)
                }
            }(e), e && e.Mn && a.Rn(this), this
        }
        var o = n(3)._n,
            a = n(35),
            r = n(17).Gn,
            s = n(36),
            c = n(1);
        c.xn({
            zn: function(e, t) {
                (this.Un || (this.Un = []))[e] = c.filter(t)
            },
            qn: function(e) {
                return (this.Un || (this.Un = []))[e] || function(t) {
                    return new o(t, e)
                }
            },
            init: i
        }), t.Mn = i.call(c.Mn)
    }, function(e, t, n) {
        t.encode = function(e, t) {
            var n = new i(t);
            return n.write(e), n.read()
        };
        var i = n(10).Kn
    }, function(e, t, n) {
        function i(e) {
            if (!(this instanceof i)) {
                return new i(e)
            }
            if (e && (this.options = e, e.$n)) {
                var t = this.$n = e.$n;
                t.Cn && (this.Cn = t.Cn)
            }
        }
        t.Kn = i;
        var o = n(2).Mn;
        n(14).Wn.Ln(i.prototype), i.prototype.$n = o, i.prototype.write = function(e) {
            this.$n.encode(this, e)
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            function i() {
                return a.En ? 2147483647 : 1073741823
            }

            function o(e, t) {
                if (i() < t) {
                    throw new RangeError("Invalid typed array length")
                }
                return a.En ? (e = new Uint8Array(t)).__proto__ = a.prototype : (null === e && (e = new a(t)), e.length = t), e
            }

            function a(e, t, n) {
                if (!(a.En || this instanceof a)) {
                    return new a(e, t, n)
                }
                if ("number" == typeof e) {
                    if ("string" == typeof t) {
                        throw new Error("If encoding is specified then the first argument must be a string")
                    }
                    return c(this, e)
                }
                return r(this, e, t, n)
            }

            function r(e, t, n, i) {
                if ("number" == typeof t) {
                    throw new TypeError('"value" argument must not be a number')
                }
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                    if (t.byteLength, n < 0 || t.byteLength < n) {
                        throw new RangeError("'offset' is out of bounds")
                    }
                    if (t.byteLength < n + (i || 0)) {
                        throw new RangeError("'length' is out of bounds")
                    }
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), a.En ? (e = t).__proto__ = a.prototype : e = l(e, t), e
                }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !a.Xn(n)) {
                        throw new TypeError('"encoding" must be a valid string encoding')
                    }
                    var i = 0 | u(t, n),
                        r = (e = o(e, i)).write(t, n);
                    return r !== i && (e = e.slice(0, r)), e
                }(e, t, n) : function(e, t) {
                    if (a.isBuffer(t)) {
                        var n = 0 | d(t.length);
                        return 0 === (e = o(e, n)).length || t.bn(e, 0, 0, n), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) {
                            return "number" != typeof t.length || function(e) {
                                return e != e
                            }(t.length) ? o(e, 0) : l(e, t)
                        }
                        if ("Buffer" === t.type && U(t.data)) {
                            return l(e, t.data)
                        }
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function s(e) {
                if ("number" != typeof e) {
                    throw new TypeError('"size" argument must be a number')
                }
                if (e < 0) {
                    throw new RangeError('"size" argument must not be negative')
                }
            }

            function c(e, t) {
                if (s(t), e = o(e, t < 0 ? 0 : 0 | d(t)), !a.En) {
                    for (var n = 0; n < t; ++n) {
                        e[n] = 0
                    }
                }
                return e
            }

            function l(e, t) {
                var n, i = t.length < 0 ? 0 : 0 | d(t.length);
                for (e = o(e, i), n = 0; n < i; n += 1) {
                    e[n] = 255 & t[n]
                }
                return e
            }

            function d(e) {
                if (e >= i()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes")
                }
                return 0 | e
            }

            function u(e, t) {
                var n, i;
                if (a.isBuffer(e)) {
                    return e.length
                }
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) {
                    return e.byteLength
                }
                if ("string" != typeof e && (e = "" + e), 0 === (n = e.length)) {
                    return 0
                }
                for (i = !1;;) {
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return H(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return D(e).length;
                        default:
                            if (i) {
                                return H(e).length
                            }
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }
            }

            function h(e, t, n) {
                var i = e[t];
                e[t] = e[n], e[n] = i
            }

            function f(e, t, n, i, o) {
                if (0 === e.length) {
                    return -1
                }
                if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) {
                        return -1
                    }
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) {
                        return -1
                    }
                    n = 0
                }
                if ("string" == typeof t && (t = a.from(t, i)), a.isBuffer(t)) {
                    return 0 === t.length ? -1 : m(e, t, n, i, o)
                }
                if ("number" == typeof t) {
                    return t &= 255, a.En && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [t], n, i, o)
                }
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, n, i, o) {
                function a(e, t) {
                    return 1 === d ? e[t] : e.Qn(t * d)
                }
                var r, s, c, l, d = 1,
                    u = e.length,
                    h = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) {
                        return -1
                    }
                    d = 2, u /= 2, h /= 2, n /= 2
                }
                if (o) {
                    for (s = -1, r = n; r < u; r++) {
                        if (a(e, r) === a(t, -1 === s ? 0 : r - s)) {
                            if (-1 === s && (s = r), r - s + 1 === h) {
                                return s * d
                            }
                        } else {
                            -1 !== s && (r -= r - s), s = -1
                        }
                    }
                } else {
                    for (n + h > u && (n = u - h), r = n; r >= 0; r--) {
                        for (c = !0, l = 0; l < h; l++) {
                            if (a(e, r + l) !== a(t, l)) {
                                c = !1;
                                break
                            }
                        }
                        if (c) {
                            return r
                        }
                    }
                }
                return -1
            }

            function p(e, t, n, i) {
                var o, a, r, s;
                if (n = Number(n) || 0, o = e.length - n, i ? (i = Number(i)) > o && (i = o) : i = o, (a = t.length) % 2 != 0) {
                    throw new TypeError("Invalid hex string")
                }
                for (i > a / 2 && (i = a / 2), r = 0; r < i; ++r) {
                    if (s = parseInt(t.substr(2 * r, 2), 16), isNaN(s)) {
                        return r
                    }
                    e[n + r] = s
                }
                return r
            }

            function g(e, t, n, i) {
                return j(H(t, e.length - n), e, n, i)
            }

            function w(e, t, n, i) {
                return j(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) {
                        t.push(255 & e.charCodeAt(n))
                    }
                    return t
                }(t), e, n, i)
            }

            function y(e, t, n, i) {
                return w(e, t, n, i)
            }

            function k(e, t, n, i) {
                return j(D(t), e, n, i)
            }

            function b(e, t, n, i) {
                return j(function(e, t) {
                    for (var n, i, o, a = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) {
                        i = (n = e.charCodeAt(r)) >> 8, o = n % 256, a.push(o), a.push(i)
                    }
                    return a
                }(t, e.length - n), e, n, i)
            }

            function v(e, t, n) {
                return 0 === t && n === e.length ? G.Yn(e) : G.Yn(e.slice(t, n))
            }

            function S(e, t, n) {
                var i, o, a, r, s, c, l, d, u;
                for (n = Math.min(e.length, n), i = [], o = t; o < n;) {
                    if (d = null, o + (u = (l = e[o]) > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1) <= n) {
                        switch (u) {
                            case 1:
                                l < 128 && (d = l);
                                break;
                            case 2:
                                128 == (192 & (a = e[o + 1])) && (c = (31 & l) << 6 | 63 & a) > 127 && (d = c);
                                break;
                            case 3:
                                a = e[o + 1], r = e[o + 2], 128 == (192 & a) && 128 == (192 & r) && (c = (15 & l) << 12 | (63 & a) << 6 | 63 & r) > 2047 && (c < 55296 || c > 57343) && (d = c);
                                break;
                            case 4:
                                a = e[o + 1], r = e[o + 2], s = e[o + 3], 128 == (192 & a) && 128 == (192 & r) && 128 == (192 & s) && (c = (15 & l) << 18 | (63 & a) << 12 | (63 & r) << 6 | 63 & s) > 65535 && c < 1114112 && (d = c)
                        }
                    }
                    null === d ? (d = 65533, u = 1) : d > 65535 && (d -= 65536, i.push(d >>> 10 & 1023 | 55296), d = 56320 | 1023 & d), i.push(d), o += u
                }
                return function(e) {
                    var t, n, i = e.length;
                    if (i <= F) {
                        return String.fromCharCode.apply(String, e)
                    }
                    for (t = "", n = 0; n < i;) {
                        t += String.fromCharCode.apply(String, e.slice(n, n += F))
                    }
                    return t
                }(i)
            }

            function x(e, t, n) {
                var i, o = "";
                for (n = Math.min(e.length, n), i = t; i < n; ++i) {
                    o += String.fromCharCode(127 & e[i])
                }
                return o
            }

            function P(e, t, n) {
                var i, o = "";
                for (n = Math.min(e.length, n), i = t; i < n; ++i) {
                    o += String.fromCharCode(e[i])
                }
                return o
            }

            function C(e, t, n) {
                var i, o, a = e.length;
                for ((!t || t < 0) && (t = 0), (!n || n < 0 || n > a) && (n = a), i = "", o = t; o < n; ++o) {
                    i += E(e[o])
                }
                return i
            }

            function M(e, t, n) {
                for (var i = e.slice(t, n), o = "", a = 0; a < i.length; a += 2) {
                    o += String.fromCharCode(i[a] + 256 * i[a + 1])
                }
                return o
            }

            function T(e, t, n) {
                if (e % 1 != 0 || e < 0) {
                    throw new RangeError("offset is not uint")
                }
                if (e + t > n) {
                    throw new RangeError("Trying to access beyond buffer length")
                }
            }

            function B(e, t, n, i, o, r) {
                if (!a.isBuffer(e)) {
                    throw new TypeError('"buffer" argument must be a Buffer instance')
                }
                if (t > o || t < r) {
                    throw new RangeError('"value" argument is out of bounds')
                }
                if (n + i > e.length) {
                    throw new RangeError("Index out of range")
                }
            }

            function _(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, a = Math.min(e.length - n, 2); o < a; ++o) {
                    e[n + o] = (t & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o)
                }
            }

            function N(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, a = Math.min(e.length - n, 4); o < a; ++o) {
                    e[n + o] = t >>> 8 * (i ? o : 3 - o) & 255
                }
            }

            function O(e, t, n, i, o, a) {
                if (n + i > e.length) {
                    throw new RangeError("Index out of range")
                }
                if (n < 0) {
                    throw new RangeError("Index out of range")
                }
            }

            function A(e, t, n, i, o) {
                return o || O(e, 0, n, 4), z.write(e, t, n, i, 23, 4), n + 4
            }

            function I(e, t, n, i, o) {
                return o || O(e, 0, n, 8), z.write(e, t, n, i, 52, 8), n + 8
            }

            function E(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function H(e, t) {
                var n, i, o, a, r;
                for (t = t || 1 / 0, i = e.length, o = null, a = [], r = 0; r < i; ++r) {
                    if ((n = e.charCodeAt(r)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (r + 1 === i) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else {
                        o && (t -= 3) > -1 && a.push(239, 191, 189)
                    }
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) {
                            break
                        }
                        a.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) {
                            break
                        }
                        a.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) {
                            break
                        }
                        a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) {
                            throw new Error("Invalid code point")
                        }
                        if ((t -= 4) < 0) {
                            break
                        }
                        a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return a
            }

            function D(e) {
                return G.Vn(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(R, "")).length < 2) {
                        return ""
                    }
                    for (; e.length % 4 != 0;) {
                        e += "="
                    }
                    return e
                }(e))
            }

            function j(e, t, n, i) {
                for (var o = 0; o < i && !(o + n >= t.length || o >= e.length); ++o) {
                    t[o + n] = e[o]
                }
                return o
            }
            var F, R, G = n(26),
                z = n(4),
                U = n(27);
            t.vn = a, t.Zn = function(e) {
                return +e != e && (e = 0), a.gn(+e)
            }, t.Jn = 50, a.En = void 0 !== e.En ? e.En : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        ei: function() {
                            return 42
                        }
                    }, 42 === e.ei() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.ti = i(), a.ni = 8192, a.ii = function(e) {
                return e.__proto__ = a.prototype, e
            }, a.from = function(e, t, n) {
                return r(null, e, t, n)
            }, a.En && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                value: null,
                configurable: !0
            })), a.gn = function(e, t, n) {
                return function(e, t, n, i) {
                    return s(t), t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof i ? o(e, t).fill(n, i) : o(e, t).fill(n) : o(e, t)
                }(null, e, t, n)
            }, a.oi = function(e) {
                return c(null, e)
            }, a.ai = function(e) {
                return c(null, e)
            }, a.isBuffer = function(e) {
                return !(null == e || !e.ri)
            }, a.compare = function(e, t) {
                if (!a.isBuffer(e) || !a.isBuffer(t)) {
                    throw new TypeError("Arguments must be Buffers")
                }
                if (e === t) {
                    return 0
                }
                for (var n = e.length, i = t.length, o = 0, r = Math.min(n, i); o < r; ++o) {
                    if (e[o] !== t[o]) {
                        n = e[o], i = t[o];
                        break
                    }
                }
                return n < i ? -1 : i < n ? 1 : 0
            }, a.Xn = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, a.concat = function(e, t) {
                var n, i, o, r;
                if (!U(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers')
                }
                if (0 === e.length) {
                    return a.gn(0)
                }
                if (void 0 === t) {
                    for (t = 0, n = 0; n < e.length; ++n) {
                        t += e[n].length
                    }
                }
                for (i = a.oi(t), o = 0, n = 0; n < e.length; ++n) {
                    if (r = e[n], !a.isBuffer(r)) {
                        throw new TypeError('"list" argument must be an Array of Buffers')
                    }
                    r.bn(i, o), o += r.length
                }
                return i
            }, a.byteLength = u, a.prototype.ri = !0, a.prototype.si = function() {
                var e, t = this.length;
                if (t % 2 != 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits")
                }
                for (e = 0; e < t; e += 2) {
                    h(this, e, e + 1)
                }
                return this
            }, a.prototype.ci = function() {
                var e, t = this.length;
                if (t % 4 != 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits")
                }
                for (e = 0; e < t; e += 4) {
                    h(this, e, e + 3), h(this, e + 1, e + 2)
                }
                return this
            }, a.prototype.li = function() {
                var e, t = this.length;
                if (t % 8 != 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits")
                }
                for (e = 0; e < t; e += 8) {
                    h(this, e, e + 7), h(this, e + 1, e + 6), h(this, e + 2, e + 5), h(this, e + 3, e + 4)
                }
                return this
            }, a.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : function(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) {
                        return ""
                    }
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) {
                        return ""
                    }
                    if ((n >>>= 0) <= (t >>>= 0)) {
                        return ""
                    }
                    for (e || (e = "utf8");;) {
                        switch (e) {
                            case "hex":
                                return C(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return S(this, t, n);
                            case "ascii":
                                return x(this, t, n);
                            case "latin1":
                            case "binary":
                                return P(this, t, n);
                            case "base64":
                                return v(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return M(this, t, n);
                            default:
                                if (i) {
                                    throw new TypeError("Unknown encoding: " + e)
                                }
                                e = (e + "").toLowerCase(), i = !0
                        }
                    }
                }.apply(this, arguments)
            }, a.prototype.equals = function(e) {
                if (!a.isBuffer(e)) {
                    throw new TypeError("Argument must be a Buffer")
                }
                return this === e || 0 === a.compare(this, e)
            }, a.prototype.di = function() {
                var e = "",
                    n = t.Jn;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
            }, a.prototype.compare = function(e, t, n, i, o) {
                if (!a.isBuffer(e)) {
                    throw new TypeError("Argument must be a Buffer")
                }
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length) {
                    throw new RangeError("out of range index")
                }
                if (i >= o && t >= n) {
                    return 0
                }
                if (i >= o) {
                    return -1
                }
                if (t >= n) {
                    return 1
                }
                if (this === e) {
                    return 0
                }
                for (var r = (o >>>= 0) - (i >>>= 0), s = (n >>>= 0) - (t >>>= 0), c = Math.min(r, s), l = this.slice(i, o), d = e.slice(t, n), u = 0; u < c; ++u) {
                    if (l[u] !== d[u]) {
                        r = l[u], s = d[u];
                        break
                    }
                }
                return r < s ? -1 : s < r ? 1 : 0
            }, a.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, a.prototype.indexOf = function(e, t, n) {
                return f(this, e, t, n, !0)
            }, a.prototype.lastIndexOf = function(e, t, n) {
                return f(this, e, t, n, !1)
            }, a.prototype.write = function(e, t, n, i) {
                var o, a;
                if (void 0 === t) {
                    i = "utf8", n = this.length, t = 0
                } else if (void 0 === n && "string" == typeof t) {
                    i = t, n = this.length, t = 0
                } else {
                    if (!isFinite(t)) {
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
                    }
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                }
                if (o = this.length - t, (void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds")
                }
                for (i || (i = "utf8"), a = !1;;) {
                    switch (i) {
                        case "hex":
                            return p(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return g(this, e, t, n);
                        case "ascii":
                            return w(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return y(this, e, t, n);
                        case "base64":
                            return k(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return b(this, e, t, n);
                        default:
                            if (a) {
                                throw new TypeError("Unknown encoding: " + i)
                            }
                            i = ("" + i).toLowerCase(), a = !0
                    }
                }
            }, a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this.ui || this, 0)
                }
            }, F = 4096, a.prototype.slice = function(e, t) {
                var n, i, o, r = this.length;
                if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), a.En) {
                    (n = this.subarray(e, t)).__proto__ = a.prototype
                } else {
                    for (n = new a(i = t - e, void 0), o = 0; o < i; ++o) {
                        n[o] = this[o + e]
                    }
                }
                return n
            }, a.prototype.hi = function(e, t, n) {
                e |= 0, t |= 0, n || T(e, t, this.length);
                for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) {
                    i += this[e + a] * o
                }
                return i
            }, a.prototype.fi = function(e, t, n) {
                e |= 0, t |= 0, n || T(e, t, this.length);
                for (var i = this[e + --t], o = 1; t > 0 && (o *= 256);) {
                    i += this[e + --t] * o
                }
                return i
            }, a.prototype.mi = function(e, t) {
                return t || T(e, 1, this.length), this[e]
            }, a.prototype.pi = function(e, t) {
                return t || T(e, 2, this.length), this[e] | this[e + 1] << 8
            }, a.prototype.Qn = function(e, t) {
                return t || T(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, a.prototype.gi = function(e, t) {
                return t || T(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, a.prototype.wi = function(e, t) {
                return t || T(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, a.prototype.yi = function(e, t, n) {
                e |= 0, t |= 0, n || T(e, t, this.length);
                for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) {
                    i += this[e + a] * o
                }
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, a.prototype.ki = function(e, t, n) {
                e |= 0, t |= 0, n || T(e, t, this.length);
                for (var i = t, o = 1, a = this[e + --i]; i > 0 && (o *= 256);) {
                    a += this[e + --i] * o
                }
                return a >= (o *= 128) && (a -= Math.pow(2, 8 * t)), a
            }, a.prototype.bi = function(e, t) {
                return t || T(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, a.prototype.Si = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, a.prototype.xi = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, a.prototype.Pi = function(e, t) {
                return t || T(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, a.prototype.Ci = function(e, t) {
                return t || T(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, a.prototype.Mi = function(e, t) {
                return t || T(e, 4, this.length), z.read(this, e, !0, 23, 4)
            }, a.prototype.Ti = function(e, t) {
                return t || T(e, 4, this.length), z.read(this, e, !1, 23, 4)
            }, a.prototype.Bi = function(e, t) {
                return t || T(e, 8, this.length), z.read(this, e, !0, 52, 8)
            }, a.prototype._i = function(e, t) {
                return t || T(e, 8, this.length), z.read(this, e, !1, 52, 8)
            }, a.prototype.Ni = function(e, t, n, i) {
                e = +e, t |= 0, n |= 0, i || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < n && (o *= 256);) {
                    this[t + a] = e / o & 255
                }
                return t + n
            }, a.prototype.Oi = function(e, t, n, i) {
                e = +e, t |= 0, n |= 0, i || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                    a = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
                    this[t + o] = e / a & 255
                }
                return t + n
            }, a.prototype.Ai = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 1, 255, 0), a.En || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, a.prototype.Ii = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 65535, 0), a.En ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : _(this, e, t, !0), t + 2
            }, a.prototype.Ei = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 65535, 0), a.En ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : _(this, e, t, !1), t + 2
            }, a.prototype.Hi = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 4294967295, 0), a.En ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : N(this, e, t, !0), t + 4
            }, a.prototype.Di = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 4294967295, 0), a.En ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
            }, a.prototype.ji = function(e, t, n, i) {
                var o, a, r, s;
                for (e = +e, t |= 0, i || B(this, e, t, n, (o = Math.pow(2, 8 * n - 1)) - 1, -o), a = 0, r = 1, s = 0, this[t] = 255 & e; ++a < n && (r *= 256);) {
                    e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / r | 0) - s & 255
                }
                return t + n
            }, a.prototype.Fi = function(e, t, n, i) {
                var o, a, r, s;
                for (e = +e, t |= 0, i || B(this, e, t, n, (o = Math.pow(2, 8 * n - 1)) - 1, -o), r = 1, s = 0, this[t + (a = n - 1)] = 255 & e; --a >= 0 && (r *= 256);) {
                    e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / r | 0) - s & 255
                }
                return t + n
            }, a.prototype.Ri = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 1, 127, -128), a.En || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, a.prototype.Gi = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 32767, -32768), a.En ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : _(this, e, t, !0), t + 2
            }, a.prototype.zi = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 2, 32767, -32768), a.En ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : _(this, e, t, !1), t + 2
            }, a.prototype.Ui = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 2147483647, -2147483648), a.En ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : N(this, e, t, !0), t + 4
            }, a.prototype.qi = function(e, t, n) {
                return e = +e, t |= 0, n || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), a.En ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
            }, a.prototype.Ki = function(e, t, n) {
                return A(this, e, t, !0, n)
            }, a.prototype.$i = function(e, t, n) {
                return A(this, e, t, !1, n)
            }, a.prototype.Li = function(e, t, n) {
                return I(this, e, t, !0, n)
            }, a.prototype.Wi = function(e, t, n) {
                return I(this, e, t, !1, n)
            }, a.prototype.bn = function(e, t, n, i) {
                if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) {
                    return 0
                }
                if (0 === e.length || 0 === this.length) {
                    return 0
                }
                if (t < 0) {
                    throw new RangeError("targetStart out of bounds")
                }
                if (n < 0 || n >= this.length) {
                    throw new RangeError("sourceStart out of bounds")
                }
                if (i < 0) {
                    throw new RangeError("sourceEnd out of bounds")
                }
                i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                var o, r = i - n;
                if (this === e && n < t && t < i) {
                    for (o = r - 1; o >= 0; --o) {
                        e[o + t] = this[o + n]
                    }
                } else if (r < 1e3 || !a.En) {
                    for (o = 0; o < r; ++o) {
                        e[o + t] = this[o + n]
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(n, n + r), t)
                }
                return r
            }, a.prototype.fill = function(e, t, n, i) {
                var o, r, s, c;
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length && (o = e.charCodeAt(0)) < 256 && (e = o), void 0 !== i && "string" != typeof i) {
                        throw new TypeError("encoding must be a string")
                    }
                    if ("string" == typeof i && !a.Xn(i)) {
                        throw new TypeError("Unknown encoding: " + i)
                    }
                } else {
                    "number" == typeof e && (e &= 255)
                }
                if (t < 0 || this.length < t || this.length < n) {
                    throw new RangeError("Out of range index")
                }
                if (n <= t) {
                    return this
                }
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) {
                    for (r = t; r < n; ++r) {
                        this[r] = e
                    }
                } else {
                    for (c = (s = a.isBuffer(e) ? e : H(new a(e, i).toString())).length, r = 0; r < n - t; ++r) {
                        this[r + t] = s[r % c]
                    }
                }
                return this
            }, R = /[^+\/0-9A-Za-z-_]/g
        }).call(this, n(12))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        function n(e) {
            return function(t) {
                var n = t.Xi(1);
                t.buffer[n] = e
            }
        }
        for (var i = t.uint8 = new Array(256), o = 0; o <= 255; o++) {
            i[o] = n(o)
        }
    }, function(e, t, n) {
        function i() {
            if (!(this instanceof i)) {
                return new i
            }
        }

        function o() {
            if (!(this instanceof o)) {
                return new o
            }
        }

        function a() {
            return this.buffers && this.buffers.length ? (this.flush(), this.Qi()) : this.fetch()
        }

        function r(e) {
            (this.buffers || (this.buffers = [])).push(e)
        }

        function s(e) {
            return function(t) {
                for (var n in e) {
                    t[n] = e[n]
                }
                return t
            }
        }
        t.Yi = i, t.Wn = o;
        var c = n(0),
            l = "BUFFER_SHORTAGE";
        i.Ln = s({
            Cn: c,
            write: function(e) {
                var t = this.offset ? c.prototype.slice.call(this.buffer, this.offset) : this.buffer;
                this.buffer = t ? e ? this.Cn.concat([t, e]) : t : e, this.offset = 0
            },
            fetch: function() {
                throw new Error("method not implemented: fetch()")
            },
            flush: function() {
                for (; this.offset < this.buffer.length;) {
                    var e, t = this.offset;
                    try {
                        e = this.fetch()
                    } catch (e) {
                        if (e && e.message != l) {
                            throw e
                        }
                        this.offset = t;
                        break
                    }
                    this.push(e)
                }
            },
            push: r,
            Qi: function() {
                return (this.buffers || (this.buffers = [])).shift()
            },
            read: a,
            Xi: function(e) {
                var t = this.offset,
                    n = t + e;
                if (n > this.buffer.length) {
                    throw new Error(l)
                }
                return this.offset = n, t
            },
            offset: 0
        }), i.Ln(i.prototype), o.Ln = s({
            Cn: c,
            write: function() {
                throw new Error("method not implemented: write()")
            },
            fetch: function() {
                var e, t = this.start;
                if (t < this.offset) {
                    return e = this.start = this.offset, c.prototype.slice.call(this.buffer, t, e)
                }
            },
            flush: function() {
                for (; this.start < this.offset;) {
                    var e = this.fetch();
                    e && this.push(e)
                }
            },
            push: r,
            Qi: function() {
                var e = this.buffers || (this.buffers = []),
                    t = e.length > 1 ? this.Cn.concat(e) : e[0];
                return e.length = 0, t
            },
            read: a,
            Xi: function(e) {
                var t, n, i, o = 0 | e;
                if (this.buffer) {
                    if (t = this.buffer.length, (i = (n = 0 | this.offset) + o) < t) {
                        return this.offset = i, n
                    }
                    this.flush(), e = Math.max(e, Math.min(2 * t, this.maxBufferSize))
                }
                return e = Math.max(e, this.Vi), this.buffer = this.Cn.gn(e), this.start = 0, this.offset = o, 0
            },
            send: function(e) {
                var t, n = e.length;
                n > this.Vi ? (this.flush(), this.push(e)) : (t = this.Xi(n), c.prototype.bn.call(e, this.buffer, t))
            },
            maxBufferSize: 65536,
            Vi: 2048,
            offset: 0,
            start: 0
        }), o.Ln(o.prototype)
    }, function(e, t, n) {
        t.decode = function(e, t) {
            var n = new i(t);
            return n.write(e), n.read()
        };
        var i = n(16).Zi
    }, function(e, t, n) {
        function i(e) {
            if (!(this instanceof i)) {
                return new i(e)
            }
            if (e && (this.options = e, e.$n)) {
                var t = this.$n = e.$n;
                t.Cn && (this.Cn = t.Cn)
            }
        }
        t.Zi = i;
        var o = n(8).Mn;
        n(14).Yi.Ln(i.prototype), i.prototype.$n = o, i.prototype.fetch = function() {
            return this.$n.decode(this)
        }
    }, function(e, t, n) {
        function i(e, t) {
            var n, i = {},
                o = new Array(t),
                a = new Array(t),
                r = e.$n.decode;
            for (n = 0; n < t; n++) {
                o[n] = r(e), a[n] = r(e)
            }
            for (n = 0; n < t; n++) {
                i[o[n]] = a[n]
            }
            return i
        }

        function o(e, t) {
            var n, i = new Map,
                o = new Array(t),
                a = new Array(t),
                r = e.$n.decode;
            for (n = 0; n < t; n++) {
                o[n] = r(e), a[n] = r(e)
            }
            for (n = 0; n < t; n++) {
                i.set(o[n], a[n])
            }
            return i
        }

        function a(e, t) {
            for (var n = new Array(t), i = e.$n.decode, o = 0; o < t; o++) {
                n[o] = i(e)
            }
            return n
        }

        function r(e, t) {
            var n = e.Xi(t),
                i = n + t;
            return P.toString.call(e.buffer, "utf-8", n, i)
        }

        function s(e, t) {
            var n = e.Xi(t),
                i = n + t,
                o = P.slice.call(e.buffer, n, i);
            return x.from(o)
        }

        function c(e, t) {
            var n = e.Xi(t),
                i = n + t,
                o = P.slice.call(e.buffer, n, i);
            return x.Uint8Array.from(o).buffer
        }

        function l(e, t) {
            var n = e.Xi(t + 1),
                i = e.buffer[n++],
                o = n + t,
                a = e.$n.qn(i);
            if (!a) {
                throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i))
            }
            return a(P.slice.call(e.buffer, n, o))
        }

        function d(e) {
            var t = e.Xi(1);
            return e.buffer[t]
        }

        function u(e) {
            var t = e.Xi(1),
                n = e.buffer[t];
            return 128 & n ? n - 256 : n
        }

        function h(e) {
            var t = e.Xi(2),
                n = e.buffer;
            return n[t++] << 8 | n[t]
        }

        function f(e) {
            var t = e.Xi(2),
                n = e.buffer,
                i = n[t++] << 8 | n[t];
            return 32768 & i ? i - 65536 : i
        }

        function m(e) {
            var t = e.Xi(4),
                n = e.buffer;
            return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
        }

        function p(e) {
            var t = e.Xi(4),
                n = e.buffer;
            return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
        }

        function g(e, t) {
            return function(n) {
                var i = n.Xi(e);
                return t.call(n.buffer, i, !0)
            }
        }

        function w(e) {
            return new B(this, e).Hn()
        }

        function y(e) {
            return new _(this, e).Hn()
        }

        function k(e) {
            return new B(this, e)
        }

        function b(e) {
            return new _(this, e)
        }

        function v(e) {
            return M.read(this, e, !1, 23, 4)
        }

        function S(e) {
            return M.read(this, e, !1, 52, 8)
        }
        var x, P, C, M = n(4),
            T = n(7),
            B = T.Ji,
            _ = T.eo;
        t.no = function(e) {
            var t = x.yn && e && e.io,
                n = e && e.oo;
            return {
                map: C && e && e.ao ? o : i,
                ro: a,
                so: r,
                co: t ? c : s,
                lo: l,
                uint8: d,
                uint16: h,
                uint32: m,
                "do": g(8, n ? k : w),
                int8: u,
                int16: f,
                int32: p,
                oo: g(8, n ? b : y),
                float32: g(4, v),
                float64: g(8, S)
            }
        }, t.Gn = d, x = n(0), P = n(6), C = "undefined" != typeof Map
    }, function(e, t, n) {
        ! function(t) {
            function n(e) {
                for (var t in r) {
                    e[t] = r[t]
                }
                return e
            }

            function i(e, t) {
                var n;
                if (arguments.length) {
                    if (t) {
                        if (n = o(this, e, !0)) {
                            if (!(n = n.filter((function(e) {
                                    return e !== t && e.uo !== t
                                }))).length) {
                                return i.call(this, e)
                            }
                            this[a][e] = n
                        }
                    } else if ((n = this[a]) && (delete n[e], !Object.keys(n).length)) {
                        return i.call(this)
                    }
                } else {
                    delete this[a]
                }
                return this
            }

            function o(e, t, n) {
                if (!n || e[a]) {
                    var i = e[a] || (e[a] = {});
                    return i[t] || (i[t] = [])
                }
            }
            e.exports = t;
            var a = "listeners",
                r = {
                    on: function(e, t) {
                        return o(this, e).push(t), this
                    },
                    once: function(e, t) {
                        function n() {
                            i.call(a, e, n), t.apply(this, arguments)
                        }
                        var a = this;
                        return n.uo = t, o(a, e).push(n), a
                    },
                    off: i,
                    emit: function(e, t) {
                        var n, i, a = this,
                            r = o(a, e, !0);
                        return !!r && (1 === (n = arguments.length) ? r.forEach((function(e) {
                            e.call(a)
                        })) : 2 === n ? r.forEach((function(e) {
                            e.call(a, t)
                        })) : (i = Array.prototype.slice.call(arguments, 1), r.forEach((function(e) {
                            e.apply(a, i)
                        }))), !!r.length)
                    }
                };
            n(t.prototype), t.Ln = n
        }((
            /**
             * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
             *
             * @copyright Yusuke Kawasaki
             * @license MIT
             * @constructor
             * @see https://github.com/kawanet/event-lite
             * @see http://kawanet.github.io/event-lite/EventLite.html
             * @example
             * var EventLite = require("event-lite");
             *
             * function MyClass() {...}             // your class
             *
             * EventLite.mixin(MyClass.prototype);  // import event methods
             *
             * var obj = new MyClass();
             * obj.on("foo", function() {...});     // add event listener
             * obj.once("bar", function() {...});   // add one-time event listener
             * obj.emit("foo");                     // dispatch event
             * obj.emit("bar");                     // dispatch another event
             * obj.off("foo");                      // remove event listener
             */
            function i() {
                if (!(this instanceof i)) {
                    return new i
                }
            }))
    }, function(e, t, n) {
        (function(t) {
            e.exports.ho = 1920, e.exports.fo = 1080, e.exports.mo = 9, e.exports.po = 50, e.exports.wo = 50, e.exports.yo = 6, e.exports.ko = 3e3, e.exports.bo = 10, e.exports.vo = 5, e.exports.So = 50, e.exports.xo = 4.5, e.exports.Po = 15, e.exports.Co = .9, e.exports.Mo = 1, e.exports.To = 60, e.exports.Bo = 35, e.exports._o = 3e3, e.exports.No = 0, e.exports.Oo = t && "mm_exp" === t.Io.Ao, e.exports.Eo = 100, e.exports.Ho = Math.PI / 2.6, e.exports.Do = 10, e.exports.jo = .25, e.exports.Fo = Math.PI / 2, e.exports.Ro = 35, e.exports.Go = .0016, e.exports.zo = .993, e.exports.Uo = 34, e.exports.qo = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#9100ff"], e.exports.Ko = 7, e.exports.$o = .06, e.exports.Lo = ["Lovable", "RinZ", "Maple", "KGNoMercy", "MOHela", "Zod", "Wxone", "WaspHype", "XyZ", "ExtinctioN", "GayBoooN", "Ashura", "Arsen", "ArenaSlayer", "CyBeRMeAls", "CyberBlade", "GodSpeed", "Sn1ph3r", "Kikioo", "Kiko", "Yamato", "Sn1ph3r", "Afterneath", "MrSpikes", "PandaClaus", "MKiller", "Accident", "FiShY", "BiRdY", "Tolerate", "DerpyDerp", "Nanityato", "DeStiny", "aQuiVeR", "Slayer69", "PlankTonV", "SoulBreaker", "Pet", "Baki", "UnStoppable", "UnCrushh", "ShellShock", "COLOR", "GodMode", "AndManyMore", "Nigeria"], e.exports.Wo = Math.PI / 3, e.exports.Xo = [{
                id: 0,
                src: "",
                Qo: 0,
                ln: 1
            }, {
                id: 1,
                src: "_g",
                Qo: 3e3,
                ln: 1.1
            }, {
                id: 2,
                src: "_d",
                Qo: 7e3,
                ln: 1.18
            }, {
                id: 3,
                src: "_r",
                Yo: !0,
                Qo: 12e3,
                ln: 1.18
            }], e.exports.Vo = function(t) {
                for (var n = t.Zo[t.Jo] || 0, i = e.exports.Xo.length - 1; i >= 0; --i) {
                    if (n >= e.exports.Xo[i].Qo) {
                        return e.exports.Xo[i]
                    }
                }
            }, e.exports.ea = ["wood", "food", "stone", "points"], e.exports.ta = 7, e.exports.na = 9, e.exports.ia = 3, e.exports.oa = 32, e.exports.aa = 7, e.exports.ra = 724, e.exports.sa = 114, e.exports.ca = .0011, e.exports.la = 1e-4, e.exports.da = 1.3, e.exports.ua = [150, 160, 165, 175], e.exports.ha = [80, 85, 95], e.exports.fa = [80, 85, 90], e.exports.ma = 2400, e.exports.pa = .75, e.exports.ga = 15, e.exports.wa = 14400, e.exports.ya = 40, e.exports.ka = 2200
        }).call(this, n(41))
    }, function(e, t) {
        var n = {
            ba: {
                va: function(e) {
                    return n.co.va(unescape(encodeURIComponent(e)))
                },
                Sa: function(e) {
                    return decodeURIComponent(escape(n.co.Sa(e)))
                }
            },
            co: {
                va: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        t.push(255 & e.charCodeAt(n))
                    }
                    return t
                },
                Sa: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        t.push(String.fromCharCode(e[n]))
                    }
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i() {
            Wn && Xn && (rt = !0, $e ? window.grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {
                action: "homepage"
            }).then((function(e) {
                o(e)
            })) : o(null))
        }

        function o(e) {
            at.start((function(t, n, i) {
                var o = ($e ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + i;
                e && (o += "&token=" + encodeURIComponent(e)), Le.connect(o, (function(e) {
                    Ue(), setInterval((() => Ue()), 2500), e ? c(e) : (Xt.onclick = We.xa((function() {
                        ! function() {
                            var e = ++ei > 1,
                                t = Date.now() - Jn > Zn;
                            e && t ? (Jn = Date.now(), h()) : Z()
                        }()
                    })), We.Pa(Xt), Qt.onclick = We.xa((function() {
                        Ke("https://krunker.io")
                    })), We.Pa(Qt), Vt.onclick = We.xa((function() {
                        setTimeout((function() {
                            ! function() {
                                var e = rn.value,
                                    t = prompt("party key", e);
                                t && (window.onbeforeunload = void 0, window.location.href = "/?server=" + t)
                            }()
                        }), 10)
                    })), We.Pa(Vt), Zt.onclick = We.xa((function() {
                        hn.classList.contains("showing") ? (hn.classList.remove("showing"), Jt.innerText = "Settings") : (hn.classList.add("showing"), Jt.innerText = "Close")
                    })), We.Pa(Zt), en.onclick = We.xa((function() {
                        L(), "block" != Bn.style.display ? v() : Bn.style.display = "none"
                    })), We.Pa(en), tn.onclick = We.xa((function() {
                        "block" != Hn.style.display ? (Hn.style.display = "block", Bn.style.display = "none", R(), N()) : Hn.style.display = "none"
                    })), We.Pa(tn), nn.onclick = We.xa((function() {
                        j()
                    })), We.Pa(nn), On.onclick = We.xa((function() {
                        Y()
                    })), We.Pa(On), function() {
                        var e, t;
                        for (e = 0; e < bi.length; ++e) {
                            (t = new Image).onload = function() {
                                this.Ca = !0
                            }, t.src = ".././img/icons/" + bi[e] + ".png", ki[bi[e]] = t
                        }
                    }(), fn.style.display = "none", un.style.display = "block", Sn.value = r("moo_name") || "", function() {
                        var e, t = r("native_resolution");
                        for (H(t ? "true" == t : "undefined" != typeof cordova), ht = "true" == r("show_ping"), ln.hidden = !ht, r("moo_moosic"), setInterval((function() {
                                window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
                            }), 1e3), D(), We.Ma(pn), e = 0; e < Ve.de.length + Ve.list.length; ++e) {
                            ! function(e) {
                                We.Ta({
                                    id: "actionBarItem" + e,
                                    Ba: "actionBarItem",
                                    style: "display:none",
                                    onmouseout: function() {
                                        m()
                                    },
                                    parent: pn
                                })
                            }(e)
                        }
                        for (e = 0; e < Ve.list.length + Ve.de.length; ++e) {
                            ! function(e) {
                                var t, n, i, o, a = document.createElement("canvas");
                                a.width = a.height = 66, (t = a.getContext("2d")).translate(a.width / 2, a.height / 2), t.imageSmoothingEnabled = !1, t.webkitImageSmoothingEnabled = !1, t.mozImageSmoothingEnabled = !1, Ve.de[e] ? (t.rotate(Math.PI / 4 + Math.PI), n = new Image, Bi[Ve.de[e].src] = n, n.onload = function() {
                                    this.Ca = !0;
                                    var n = 1 / (this.height / this.width),
                                        i = Ve.de[e].ke || 1;
                                    t.drawImage(this, -a.width * i * Qe.Co * n / 2, -a.height * i * Qe.Co / 2, a.width * i * n * Qe.Co, a.height * i * Qe.Co), t.fillStyle = "rgba(0, 0, 70, 0.1)", t.globalCompositeOperation = "source-atop", t.fillRect(-a.width / 2, -a.height / 2, a.width, a.height), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + a.toDataURL() + ")"
                                }, n.src = ".././img/weapons/" + Ve.de[e].src + ".png", (i = document.getElementById("actionBarItem" + e)).onmouseover = We.xa((function() {
                                    m(Ve.de[e], !0)
                                })), i.onclick = We.xa((function() {
                                    V(e, !0)
                                })), We.Pa(i)) : (n = ye(Ve.list[e - Ve.de.length], !0), o = Math.min(a.width - Qe.Po, n.width), t.globalAlpha = 1, t.drawImage(n, -o / 2, -o / 2, o, o), t.fillStyle = "rgba(0, 0, 70, 0.1)", t.globalCompositeOperation = "source-atop", t.fillRect(-o / 2, -o / 2, o, o), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + a.toDataURL() + ")", (i = document.getElementById("actionBarItem" + e)).onmouseover = We.xa((function() {
                                    m(Ve.list[e - Ve.de.length])
                                })), i.onclick = We.xa((function() {
                                    V(e - Ve.de.length)
                                })), We.Pa(i))
                            }(e)
                        }
                        Sn.ontouchstart = We.xa((function(e) {
                            e.preventDefault();
                            var t = prompt("enter name", e.currentTarget.value);
                            e.currentTarget.value = t.slice(0, 15)
                        })), sn.checked = ut, sn.onchange = We.xa((function(e) {
                            H(e.target.checked)
                        })), cn.checked = ht, cn.onchange = We.xa((function(e) {
                            ht = cn.checked, ln.hidden = !ht, a("show_ping", ht ? "true" : "false")
                        }))
                    }())
                }), {
                    id: s,
                    d: c,
                    1: J,
                    2: Ae,
                    4: Ie,
                    33: je,
                    5: se,
                    6: xe,
                    a: _e,
                    _a: Be,
                    7: fe,
                    8: Pe,
                    Na: Ce,
                    9: He,
                    ee: De,
                    11: te,
                    12: ie,
                    13: ne,
                    14: Ee,
                    15: re,
                    16: ae,
                    17: E,
                    18: Me,
                    19: Te,
                    20: qe,
                    Oa: w,
                    Aa: b,
                    Ia: p,
                    Ea: y,
                    Ha: k,
                    Da: _,
                    ch: G,
                    mm: B,
                    k: ee,
                    pn: T,
                    ja: ze
                }), d(), setTimeout((() => u()), 3e3)
            }), (function(e) {
                alert("Error:\n" + e), c("disconnected")
            }))
        }

        function a(e, t) {
            st && localStorage.setItem(e, t)
        }

        function r(e) {
            return st ? localStorage.getItem(e) : null
        }

        function s(e) {
            Nt = e.Fa
        }

        function c(e) {
            Le.close(), l(e)
        }

        function l(e) {
            Wt.style.display = "block", mn.style.display = "none", un.style.display = "none", An.style.display = "none", fn.style.display = "block", fn.innerHTML = e + "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"
        }

        function d() {
            var e, t, n, i, o, a, r, s, c, l, d, u, h, f, m, p = "",
                g = 0;
            for (n in at.Ra) {
                for (i = at.Ra[n], o = 0, a = 0; a < i.length; a++) {
                    for (r = 0; r < i[a].Ga.length; r++) {
                        o += i[a].Ga[r].za
                    }
                }
                for (g += o, p += "<option disabled>" + (s = at.Ua[n].name) + " - " + o + " players</option>", c = 0; c < i.length; c++) {
                    for (l = i[c], d = 0; d < l.Ga.length; d++) {
                        u = l.Ga[d], h = 1 * l.index + d + 1, f = at.qa && at.qa.region === l.region && at.qa.index === l.index && at.Ka == d, m = s + " " + h + " [" + Math.min(u.za, Qe.po) + "/" + Qe.po + "]";
                        let e = at.$a(n) + ":" + c + ":" + d;
                        f && (Yt.getElementsByTagName("span")[0].innerText = e), p += "<option value='" + e + "' " + (f ? "selected" : "") + ">" + m + "</option>"
                    }
                }
                p += "<option disabled></option>"
            }
            p += "<option disabled>All Servers - " + g + " players</option>", rn.innerHTML = p, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t = "//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"), document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
        }

        function u() {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                4 == this.readyState && 200 == this.status && (window.vultr = JSON.parse(this.responseText), at.La(vultr.Ra), d())
            }, e.open("GET", "/serverData", !0), e.send()
        }

        function h() {
            cpmstarAPI && Vn ? ((Yn = new Vn.Xa.Wa("rewardedvideo")).addEventListener("ad_closed", (function(e) {
                f()
            })), Yn.addEventListener("loaded", (function(e) {
                Yn.show()
            })), Yn.addEventListener("load_failed", (function(e) {
                f()
            })), Yn.load(), Qn.style.display = "block") : Z()
        }

        function f() {
            Qn.style.display = "none", Z()
        }

        function m(e, t, n) {
            if (wt && e) {
                if (We.Ma(xn), xn.classList.add("visible"), We.Ta({
                        id: "itemInfoName",
                        text: We.Qa(e.name),
                        parent: xn
                    }), We.Ta({
                        id: "itemInfoDesc",
                        text: e.ue,
                        parent: xn
                    }), n) {} else if (t) {
                    We.Ta({
                        Ba: "itemInfoReq",
                        text: e.type ? "secondary" : "primary",
                        parent: xn
                    })
                } else {
                    for (var i = 0; i < e.Se.length; i += 2) {
                        We.Ta({
                            Ba: "itemInfoReq",
                            Ya: e.Se[i] + "<span class='itemInfoReqVal'> x" + e.Se[i + 1] + "</span>",
                            parent: xn
                        })
                    }
                    e.group.Bt && We.Ta({
                        Ba: "itemInfoLmt",
                        text: (wt.Va[e.group.id] || 0) + "/" + e.group.Bt,
                        parent: xn
                    })
                }
            } else {
                xn.classList.remove("visible")
            }
        }

        function p(e, t) {
            oi.push({
                K: e,
                name: t
            }), g()
        }

        function g() {
            if (oi[0]) {
                var e = oi[0];
                We.Ma(jn), jn.style.display = "block", We.Ta({
                    Ba: "notificationText",
                    text: e.name,
                    parent: jn
                }), We.Ta({
                    Ba: "notifButton",
                    Ya: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
                    parent: jn,
                    onclick: function() {
                        S(0)
                    },
                    Za: !0
                }), We.Ta({
                    Ba: "notifButton",
                    Ya: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
                    parent: jn,
                    onclick: function() {
                        S(1)
                    },
                    Za: !0
                })
            } else {
                jn.style.display = "none"
            }
        }

        function w(e) {
            Nt.push(e), "block" == Bn.style.display && v()
        }

        function y(e, t) {
            wt && (wt.Ja = e, wt.er = t, "block" == Bn.style.display && v())
        }

        function k(e) {
            ai = e, "block" == Bn.style.display && v()
        }

        function b(e) {
            for (var t = Nt.length - 1; t >= 0; t--) {
                Nt[t].K == e && Nt.splice(t, 1)
            }
            "block" == Bn.style.display && v()
        }

        function v() {
            if (wt && wt.tr) {
                if (R(), Hn.style.display = "none", Bn.style.display = "block", We.Ma(_n), wt.Ja) {
                    for (var e = 0; e < ai.length; e += 2) {
                        ! function(e) {
                            var t = We.Ta({
                                Ba: "allianceItem",
                                style: "color:" + (ai[e] == wt.K ? "#fff" : "rgba(255,255,255,0.6)"),
                                text: ai[e + 1],
                                parent: _n
                            });
                            wt.er && ai[e] != wt.K && We.Ta({
                                Ba: "joinAlBtn",
                                text: "Kick",
                                onclick: function() {
                                    x(ai[e])
                                },
                                Za: !0,
                                parent: t
                            })
                        }(e)
                    }
                } else if (Nt.length) {
                    for (e = 0; e < Nt.length; ++e) {
                        ! function(e) {
                            var t = We.Ta({
                                Ba: "allianceItem",
                                style: "color:" + (Nt[e].K == wt.Ja ? "#fff" : "rgba(255,255,255,0.6)"),
                                text: Nt[e].K,
                                parent: _n
                            });
                            We.Ta({
                                Ba: "joinAlBtn",
                                text: "Join",
                                onclick: function() {
                                    P(e)
                                },
                                Za: !0,
                                parent: t
                            })
                        }(e)
                    }
                } else {
                    We.Ta({
                        Ba: "allianceItem",
                        text: "No Tribes Yet",
                        parent: _n
                    })
                }
                We.Ma(Nn), wt.Ja ? We.Ta({
                    Ba: "allianceButtonM",
                    style: "width: 360px",
                    text: wt.er ? "Delete Tribe" : "Leave Tribe",
                    onclick: function() {
                        M()
                    },
                    Za: !0,
                    parent: Nn
                }) : (We.Ta({
                    tag: "input",
                    type: "text",
                    id: "allianceInput",
                    maxLength: 7,
                    placeholder: "unique name",
                    ontouchstart: function(e) {
                        e.preventDefault();
                        var t = prompt("unique name", e.currentTarget.value);
                        e.currentTarget.value = t.slice(0, 7)
                    },
                    parent: Nn
                }), We.Ta({
                    tag: "div",
                    Ba: "allianceButtonM",
                    style: "width: 140px;",
                    text: "Create",
                    onclick: function() {
                        C()
                    },
                    Za: !0,
                    parent: Nn
                }))
            }
        }

        function S(e) {
            Le.send("11", oi[0].K, e), oi.splice(0, 1), g()
        }

        function x(e) {
            Le.send("12", e)
        }

        function P(e) {
            Le.send("10", Nt[e].K)
        }

        function C() {
            Le.send("8", document.getElementById("allianceInput").value)
        }

        function M() {
            oi = [], g(), Le.send("9")
        }

        function T(e, t) {
            for (var n = 0; n < si.length; ++n) {
                if (!si[n].active) {
                    ri = si[n];
                    break
                }
            }
            ri || (ri = new function() {
                this.init = function(e, t) {
                    this.scale = 0, this.x = e, this.y = t, this.active = !0
                }, this.update = function(e, t) {
                    this.active && (this.scale += .05 * t, this.scale >= Qe.ya ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / Qe.ya), e.beginPath(), e.arc(this.x / Qe.wa * On.width, this.y / Qe.wa * On.width, this.scale, 0, 2 * Math.PI), e.stroke()))
                }
            }, si.push(ri)), ri.init(e, t)
        }

        function B(e) {
            ni = e
        }

        function _(e, t, n) {
            n ? e ? wt.nr = t : wt.ir[t] = 1 : e ? wt.ar = t : wt.rr[t] = 1, "block" == Hn.style.display && N()
        }

        function N() {
            if (wt) {
                We.Ma(Dn);
                for (var e = ci, t = e ? Rn : Fn, n = 0; n < t.length; ++n) {
                    t[n].rt || function(n) {
                        var i = We.Ta({
                            id: "storeDisplay" + n,
                            Ba: "storeItem",
                            onmouseout: function() {
                                m()
                            },
                            onmouseover: function() {
                                m(t[n], !1, !0)
                            },
                            parent: Dn
                        });
                        We.Pa(i, !0), We.Ta({
                            tag: "img",
                            Ba: "hatPreview",
                            src: "../img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].bt ? "_p" : "") + ".png",
                            parent: i
                        }), We.Ta({
                            tag: "span",
                            text: t[n].name,
                            parent: i
                        }), (e ? wt.ir[t[n].id] : wt.rr[t[n].id]) ? (e ? wt.nr : wt.ar) == t[n].id ? We.Ta({
                            Ba: "joinAlBtn",
                            style: "margin-top: 5px",
                            text: "Unequip",
                            onclick: function() {
                                O(0, e)
                            },
                            Za: !0,
                            parent: i
                        }) : We.Ta({
                            Ba: "joinAlBtn",
                            style: "margin-top: 5px",
                            text: "Equip",
                            onclick: function() {
                                O(t[n].id, e)
                            },
                            Za: !0,
                            parent: i
                        }) : (We.Ta({
                            Ba: "joinAlBtn",
                            style: "margin-top: 5px",
                            text: "Buy",
                            onclick: function() {
                                A(t[n].id, e)
                            },
                            Za: !0,
                            parent: i
                        }), We.Ta({
                            tag: "span",
                            Ba: "itemPrice",
                            text: t[n].F,
                            parent: i
                        }))
                    }(n)
                }
            }
        }

        function O(e, t) {
            Le.send("13c", 0, e, t)
        }

        function A(e, t) {
            Le.send("13c", 1, e, t)
        }

        function I() {
            Hn.style.display = "none", Bn.style.display = "none", R()
        }

        function E(e, t) {
            var n, i;
            for (e && (t ? wt.de = e : wt.items = e), n = 0; n < Ve.list.length; ++n) {
                i = Ve.de.length + n, document.getElementById("actionBarItem" + i).style.display = wt.items.indexOf(Ve.list[n].id) >= 0 ? "inline-block" : "none"
            }
            for (n = 0; n < Ve.de.length; ++n) {
                document.getElementById("actionBarItem" + n).style.display = wt.de[Ve.de[n].type] == Ve.de[n].id ? "inline-block" : "none"
            }
        }

        function H(e) {
            ut = e, Mt = e && window.devicePixelRatio || 1, sn.checked = e, a("native_resolution", e.toString()), z()
        }

        function D() {
            for (var e = "", t = 0; t < Qe.qo.length; ++t) {
                e += t == qt ? "<div class='skinColorItem activeSkin' style='background-color:" + Qe.qo[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + Qe.qo[t] + "' onclick='selectSkinColor(" + t + ")'></div>"
            }
            In.innerHTML = e
        }

        function j() {
            ui ? setTimeout((function() {
                var e = prompt("chat message");
                e && F(e)
            }), 1) : "block" == di.style.display ? (li.value && F(li.value), R()) : (Hn.style.display = "none", Bn.style.display = "none", di.style.display = "block", li.focus(), L()), li.value = ""
        }

        function F(e) {
            Le.send("ch", e.slice(0, 30))
        }

        function R() {
            li.value = "", di.style.display = "none"
        }

        function G(e, t) {
            var n = Fe(e);
            n && (n.sr = function(e) {
                var t, n, i, o;
                for (n = 0; n < fi.length; ++n) {
                    if (e.indexOf(fi[n]) > -1) {
                        for (t = "", i = 0; i < fi[n].length; ++i) {
                            t += t.length ? "o" : "M"
                        }
                        o = new RegExp(fi[n], "g"), e = e.replace(o, t)
                    }
                }
                return e
            }(t), n._o = Qe._o)
        }

        function z() {
            xt = window.innerWidth, Pt = window.innerHeight;
            var e = Math.max(xt / Kt, Pt / $t) * Mt;
            on.width = xt * Mt, on.height = Pt * Mt, on.style.width = xt + "px", on.style.height = Pt + "px", an.setTransform(e, 0, 0, e, (xt * Mt - Kt * e) / 2, (Pt * Mt - $t * e) / 2)
        }

        function U(e) {
            (ui = e) ? hn.classList.add("touch"): hn.classList.remove("touch")
        }

        function q(e) {
            var t, n;
            for (e.preventDefault(), e.stopPropagation(), U(!0), t = 0; t < e.changedTouches.length; t++) {
                (n = e.changedTouches[t]).identifier == zt.id ? (zt.id = -1, Q()) : n.identifier == Ut.id && (Ut.id = -1, wt.cr >= 0 && (gt = 1, X()), gt = 0, X())
            }
        }

        function K() {
            return wt ? (-1 != Ut.id ? hi = Math.atan2(Ut.lr - Ut.dr, Ut.ur - Ut.hr) : wt.mr || ui || (hi = Math.atan2(Gt - Pt / 2, Rt - xt / 2)), We.pr(hi || 0, 2)) : 0
        }

        function L() {
            mi = {}, Le.send("rmd")
        }

        function W() {
            return "block" != Bn.style.display && "block" != di.style.display
        }

        function X() {
            wt && wt.tr && Le.send("c", gt, wt.cr >= 0 ? K() : null)
        }

        function Q() {
            var e = function() {
                var e, t, n = 0,
                    i = 0;
                if (-1 != zt.id) {
                    n += zt.ur - zt.hr, i += zt.lr - zt.dr
                } else {
                    for (e in pi) {
                        t = pi[e], n += !!mi[e] * t[0], i += !!mi[e] * t[1]
                    }
                }
                return 0 == n && 0 == i ? void 0 : We.pr(Math.atan2(i, n), 2)
            }();
            (null == gi || null == e || Math.abs(e - gi) > .3) && (Le.send("33", e), gi = e)
        }

        function Y() {
            Le.send("14", 1)
        }

        function V(e, t) {
            Le.send("5", e, t)
        }

        function Z() {
            a("moo_name", Sn.value), !Lt && Le.connected && (Lt = !0, ct.stop("menu"), l("Loading..."), Le.send("sp", {
                name: Sn.value,
                T: Ct,
                v: qt
            }))
        }

        function J(e) {
            fn.style.display = "none", un.style.display = "block", Wt.style.display = "none", mi = {}, yt = e, gt = 0, Lt = !0, wi && (wi = !1, Ot.length = 0)
        }

        function ee(e, t, n, i) {
            ot.gr(e, t, 50, .18, 500, Math.abs(n), n >= 0 ? "#fff" : "#8ecc51")
        }

        function te() {
            Lt = !1;
            try {
                factorem.refreshAds([2], !0)
            } catch (e) {}
            mn.style.display = "none", I(), ti = {
                x: wt.x,
                y: wt.y
            }, fn.style.display = "none", An.style.display = "block", An.style.fontSize = "0px", yi = 0, setTimeout((function() {
                un.style.display = "block", Wt.style.display = "block", An.style.display = "none"
            }), Qe.Mo), u()
        }

        function ne(e) {
            wt && Gn.wr(e)
        }

        function ie(e) {
            Gn.yr(e)
        }

        function oe() {
            gn.innerText = wt.points, wn.innerText = wt.kr, yn.innerText = wt.br, kn.innerText = wt.vr, bn.innerText = wt.Sr
        }

        function ae(e, t) {
            var n, i;
            if (wt.Pr = e, wt.Cr = t, e > 0) {
                for (vi.length = 0, We.Ma(Mn), n = 0; n < Ve.de.length; ++n) {
                    Ve.de[n].m == t && (null == Ve.de[n].ye || wt.de.indexOf(Ve.de[n].ye) >= 0) && (We.Ta({
                        id: "upgradeItem" + n,
                        Ba: "actionBarItem",
                        onmouseout: function() {
                            m()
                        },
                        parent: Mn
                    }).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage, vi.push(n))
                }
                for (n = 0; n < Ve.list.length; ++n) {
                    Ve.list[n].m == t && (null == Ve.list[n].ye || wt.items.indexOf(Ve.list[n].ye) >= 0) && (i = Ve.de.length + n, We.Ta({
                        id: "upgradeItem" + i,
                        Ba: "actionBarItem",
                        onmouseout: function() {
                            m()
                        },
                        parent: Mn
                    }).style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage, vi.push(i))
                }
                for (n = 0; n < vi.length; n++) {
                    ! function(e) {
                        var t = document.getElementById("upgradeItem" + e);
                        t.onmouseover = function() {
                            Ve.de[e] ? m(Ve.de[e], !0) : m(Ve.list[e - Ve.de.length])
                        }, t.onclick = We.xa((function() {
                            Le.send("6", e)
                        })), We.Pa(t)
                    }(vi[n])
                }
                vi.length ? (Mn.style.display = "block", Tn.style.display = "block", Tn.innerHTML = "SELECT ITEMS (" + e + ")") : (Mn.style.display = "none", Tn.style.display = "none", m())
            } else {
                Mn.style.display = "none", Tn.style.display = "none", m()
            }
        }

        function re(e, t, n) {
            null != e && (wt.Mr = e), null != t && (wt.Tr = t), null != n && (wt.m = n), n == Qe.Eo ? (Pn.innerHTML = "MAX AGE", Cn.style.width = "100%") : (Pn.innerHTML = "AGE " + wt.m, Cn.style.width = wt.Mr / wt.Tr * 100 + "%")
        }

        function se(e) {
            We.Ma(vn);
            for (var t = 1, n = 0; n < e.length; n += 3) {
                ! function(n) {
                    We.Ta({
                        Ba: "leaderHolder",
                        parent: vn,
                        children: [We.Ta({
                            Ba: "leaderboardItem",
                            style: "color:" + (e[n] == yt ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: t + ". " + ("" != e[n + 1] ? e[n + 1] : "unknown")
                        }), We.Ta({
                            Ba: "leaderScore",
                            text: We.Br(e[n + 2]) || "0"
                        })]
                    })
                }(n), t++
            }
        }

        function ce(e, t, n, i) {
            var o, a, r, s, c;
            an.save(), an.setTransform(1, 0, 0, 1, 0, 0), an.scale(Mt, Mt), o = 50, an.beginPath(), an.arc(e, t, o, 0, 2 * Math.PI, !1), an.closePath(), an.fillStyle = "rgba(255, 255, 255, 0.3)", an.fill(), o = 50, a = n - e, r = i - t, a /= c = (s = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))) > o ? s / o : 1, r /= c, an.beginPath(), an.arc(e + a, t + r, .5 * o, 0, 2 * Math.PI, !1), an.closePath(), an.fillStyle = "white", an.fill(), an.restore()
        }

        function le(e, t, n) {
            for (var i = 0; i < At.length; ++i) {
                (kt = At[i]).active && kt.Tt == e && (kt.update(ft), kt.active && Oe(kt.x - t, kt.y - n, kt.scale) && (an.save(), an.translate(kt.x - t, kt.y - n), an.rotate(kt.dir), de(0, 0, kt, an, 1), an.restore()))
            }
        }

        function de(e, t, n, i, o) {
            if (n.src) {
                var a = Ve._r[n.Nr].src,
                    r = Si[a];
                r || ((r = new Image).onload = function() {
                    this.Ca = !0
                }, r.src = ".././img/weapons/" + a + ".png", Si[a] = r), r.Ca && i.drawImage(r, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
            } else {
                1 == n.Nr && (i.fillStyle = "#939393", ke(e, t, n.scale, i))
            }
        }

        function ue(e, t, n, i) {
            var o = Qe.ra + i,
                a = Qe.wa / 2 - t - o / 2;
            a < $t && a + o > 0 && n.fillRect(0, a, Kt, o)
        }

        function he(e, t, n) {
            for (var i, o, a, r = 0; r < Ot.length; ++r) {
                (kt = Ot[r]).active && (o = kt.x + kt.Or - t, a = kt.y + kt.Ar - n, 0 == e && kt.update(ft), kt.Tt == e && Oe(o, a, kt.scale + (kt.et || 0)) && (an.globalAlpha = kt.We ? .6 : 1, kt.Ir ? (i = ye(kt), an.save(), an.translate(o, a), an.rotate(kt.dir), an.drawImage(i, -i.width / 2, -i.height / 2), kt.et && (an.strokeStyle = "#db6e6e", an.globalAlpha = .3, an.lineWidth = 6, ke(0, 0, kt.et, an, !1, !0)), an.restore()) : (i = we(kt), an.drawImage(i, o - i.width / 2, a - i.height / 2))))
            }
        }

        function fe(e, t, n) {
            (kt = Fe(e)) && kt.Er(t, n)
        }

        function me(e, t, n) {
            an.globalAlpha = 1;
            for (var i = 0; i < _t.length; ++i) {
                (kt = _t[i]).zIndex == n && (kt.animate(ft), kt.visible && (kt.Hr += .002 * ft, St = (kt == wt ? K() : kt.dir) + kt.Dr, an.save(), an.translate(kt.x - e, kt.y - t), an.rotate(St), pe(kt, an), an.restore()))
            }
        }

        function pe(e, t) {
            var n, i, o, a;
            (t = t || an).lineWidth = 5.5, t.lineJoin = "miter", n = Math.PI / 4 * (Ve.de[e.Jo].Te || 1), i = e.cr < 0 && Ve.de[e.Jo].Ne || 1, o = e.cr < 0 && Ve.de[e.Jo].Oe || 1, e.nr > 0 && function(e, t, n) {
                var i, o, a;
                if ((xi = Mi[e]) || ((i = new Image).onload = function() {
                        this.Ca = !0, this.onload = null
                    }, i.src = ".././img/accessories/access_" + e + ".png", Mi[e] = i, xi = i), !(o = Ti[e])) {
                    for (a = 0; a < Rn.length; ++a) {
                        if (Rn[a].id == e) {
                            o = Rn[a];
                            break
                        }
                    }
                    Ti[e] = o
                }
                xi.Ca && (t.save(), t.translate(-20 - (o.ge || 0), 0), o.it && t.rotate(n.Hr), t.drawImage(xi, -o.scale / 2, -o.scale / 2, o.scale, o.scale), t.restore())
            }(e.nr, t, e), e.cr < 0 && !Ve.de[e.Jo].Me && (ge(Ve.de[e.Jo], Qe.Xo[e.jr].src, e.scale, 0, t), null == Ve.de[e.Jo].xe || Ve.de[e.Jo].Ae || de(e.scale, 0, Ve._r[Ve.de[e.Jo].xe], an)), t.fillStyle = Qe.qo[e.Fr], ke(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), ke(e.scale * o * Math.cos(-n * i), e.scale * o * Math.sin(-n * i), 14), e.cr < 0 && Ve.de[e.Jo].Me && (ge(Ve.de[e.Jo], Qe.Xo[e.jr].src, e.scale, 0, t), null == Ve.de[e.Jo].xe || Ve.de[e.Jo].Ae || de(e.scale, 0, Ve._r[Ve.de[e.Jo].xe], an)), e.cr >= 0 && (a = ye(Ve.list[e.cr]), t.drawImage(a, e.scale - Ve.list[e.cr].He, -a.width / 2)), ke(0, 0, e.scale, t), e.ar > 0 && (t.rotate(Math.PI / 2), function r(e, t, n, i) {
                var o, a, s;
                if ((xi = Pi[e]) || ((o = new Image).onload = function() {
                        this.Ca = !0, this.onload = null
                    }, o.src = ".././img/hats/hat_" + e + ".png", Pi[e] = o, xi = o), !(a = n || Ci[e])) {
                    for (s = 0; s < Fn.length; ++s) {
                        if (Fn[s].id == e) {
                            a = Fn[s];
                            break
                        }
                    }
                    Ci[e] = a
                }
                xi.Ca && t.drawImage(xi, -a.scale / 2, -a.scale / 2, a.scale, a.scale), !n && a.bt && (t.save(), t.rotate(i.Hr), r(e + "_top", t, a, i), t.restore())
            }(e.ar, t, null, e))
        }

        function ge(e, t, n, i, o) {
            var a = e.src + (t || ""),
                r = Bi[a];
            r || ((r = new Image).onload = function() {
                this.Ca = !0
            }, r.src = ".././img/weapons/" + a + ".png", Bi[a] = r), r.Ca && o.drawImage(r, n + e.ge - e.length / 2, i + e.fe - e.width / 2, e.length, e.width)
        }

        function we(e) {
            var t, n, i, o, a, r, s = e.y >= Qe.wa - Qe.ma ? 2 : e.y <= Qe.ma ? 1 : 0,
                c = e.type + "_" + e.scale + "_" + s,
                l = _i[c];
            if (!l) {
                if ((t = document.createElement("canvas")).width = t.height = 2.1 * e.scale + 5.5, (n = t.getContext("2d")).translate(t.width / 2, t.height / 2), n.rotate(We.Rr(0, Math.PI)), n.strokeStyle = zn, n.lineWidth = 5.5, 0 == e.type) {
                    for (o = 0; o < 2; ++o) {
                        be(n, 7, i = kt.scale * (o ? .5 : 1), .7 * i), n.fillStyle = s ? o ? "#fff" : "#e3f1f4" : o ? "#b4db62" : "#9ebf57", n.fill(), o || n.stroke()
                    }
                } else if (1 == e.type) {
                    if (2 == s) {
                        n.fillStyle = "#606060", be(n, 6, .3 * e.scale, .71 * e.scale), n.fill(), n.stroke(), n.fillStyle = "#89a54c", ke(0, 0, .55 * e.scale, n), n.fillStyle = "#a5c65b", ke(0, 0, .3 * e.scale, n, !0)
                    } else {
                        for (function(e, t, n, i) {
                                var o, a, r = Math.PI / 2 * 3,
                                    s = Math.PI / 6;
                                for (e.beginPath(), e.moveTo(0, -i), a = 0; a < 6; a++) {
                                    o = We.Gr(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(r + s) * o, Math.sin(r + s) * o, Math.cos(r + 2 * s) * i, Math.sin(r + 2 * s) * i), r += 2 * s
                                }
                                e.lineTo(0, -i), e.closePath()
                            }(n, 0, kt.scale, .7 * kt.scale), n.fillStyle = s ? "#e3f1f4" : "#89a54c", n.fill(), n.stroke(), n.fillStyle = s ? "#6a64af" : "#c15555", r = dt / 4, o = 0; o < 4; ++o) {
                            ke((a = We.Gr(kt.scale / 3.5, kt.scale / 2.3)) * Math.cos(r * o), a * Math.sin(r * o), We.Gr(10, 12), n)
                        }
                    }
                } else {
                    2 != e.type && 3 != e.type || (n.fillStyle = 2 == e.type ? 2 == s ? "#938d77" : "#939393" : "#e0c655", be(n, 3, e.scale, e.scale), n.fill(), n.stroke(), n.fillStyle = 2 == e.type ? 2 == s ? "#b2ab90" : "#bcbcbc" : "#ebdca3", be(n, 3, .55 * e.scale, .65 * e.scale), n.fill())
                }
                l = t, _i[c] = l
            }
            return l
        }

        function ye(e, t) {
            var n, i, o, a, r, s, c, l, d, u, h, f, m = Ni[e.id];
            if (!m || t) {
                if ((n = document.createElement("canvas")).width = n.height = 2.5 * e.scale + 5.5 + (Ve.list[e.id].Ge || 0), (i = n.getContext("2d")).translate(n.width / 2, n.height / 2), i.rotate(t ? 0 : Math.PI / 2), i.strokeStyle = zn, i.lineWidth = 5.5 * (t ? n.width / 81 : 1), "apple" == e.name) {
                    i.fillStyle = "#c15555", ke(0, 0, e.scale, i), i.fillStyle = "#89a54c", o = -Math.PI / 2,
                        function(e, t, n, i, o) {
                            var a = e + 25 * Math.cos(i),
                                r = t + 25 * Math.sin(i);
                            o.moveTo(e, t), o.beginPath(), o.quadraticCurveTo((e + a) / 2 + 10 * Math.cos(i + Math.PI / 2), (t + r) / 2 + 10 * Math.sin(i + Math.PI / 2), a, r), o.quadraticCurveTo((e + a) / 2 - 10 * Math.cos(i + Math.PI / 2), (t + r) / 2 - 10 * Math.sin(i + Math.PI / 2), e, t), o.closePath(), o.fill(), o.stroke()
                        }(e.scale * Math.cos(o), e.scale * Math.sin(o), 0, o + Math.PI / 2, i)
                } else if ("cookie" == e.name) {
                    for (i.fillStyle = "#cca861", ke(0, 0, e.scale, i), i.fillStyle = "#937c4b", a = dt / (s = 4), r = 0; r < s; ++r) {
                        ke((c = We.Gr(e.scale / 2.5, e.scale / 1.7)) * Math.cos(a * r), c * Math.sin(a * r), We.Gr(4, 5), i, !0)
                    }
                } else if ("cheese" == e.name) {
                    for (i.fillStyle = "#f4f3ac", ke(0, 0, e.scale, i), i.fillStyle = "#c3c28b", a = dt / (s = 4), r = 0; r < s; ++r) {
                        ke((c = We.Gr(e.scale / 2.5, e.scale / 1.7)) * Math.cos(a * r), c * Math.sin(a * r), We.Gr(4, 5), i, !0)
                    }
                } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                    i.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393", be(i, l = "castle wall" == e.name ? 4 : 3, 1.1 * e.scale, 1.1 * e.scale), i.fill(), i.stroke(), i.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", be(i, l, .65 * e.scale, .65 * e.scale), i.fill()
                } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                    i.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393", d = .6 * e.scale, be(i, "spikes" == e.name ? 5 : 6, e.scale, d), i.fill(), i.stroke(), i.fillStyle = "#a5974c", ke(0, 0, d, i), i.fillStyle = "#c9b758", ke(0, 0, d / 2, i, !0)
                } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) {
                    i.fillStyle = "#a5974c", ke(0, 0, e.scale, i), i.fillStyle = "#c9b758", Se(0, 0, 1.5 * e.scale, 29, 4, i), i.fillStyle = "#a5974c", ke(0, 0, .5 * e.scale, i)
                } else if ("mine" == e.name) {
                    i.fillStyle = "#939393", be(i, 3, e.scale, e.scale), i.fill(), i.stroke(), i.fillStyle = "#bcbcbc", be(i, 3, .55 * e.scale, .65 * e.scale), i.fill()
                } else if ("sapling" == e.name) {
                    for (r = 0; r < 2; ++r) {
                        be(i, 7, d = e.scale * (r ? .5 : 1), .7 * d), i.fillStyle = r ? "#b4db62" : "#9ebf57", i.fill(), r || i.stroke()
                    }
                } else if ("pit trap" == e.name) {
                    i.fillStyle = "#a5974c", be(i, 3, 1.1 * e.scale, 1.1 * e.scale), i.fill(), i.stroke(), i.fillStyle = zn, be(i, 3, .65 * e.scale, .65 * e.scale), i.fill()
                } else if ("boost pad" == e.name) {
                    i.fillStyle = "#7e7f82", ve(0, 0, 2 * e.scale, 2 * e.scale, i), i.fill(), i.stroke(), i.fillStyle = "#dbd97d",
                        function(e, t) {
                            t = t || an;
                            var n = e * (Math.sqrt(3) / 2);
                            t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
                        }(1 * e.scale, i)
                } else if ("turret" == e.name) {
                    i.fillStyle = "#a5974c", ke(0, 0, e.scale, i), i.fill(), i.stroke(), i.fillStyle = "#939393", ve(0, -25, .9 * e.scale, 50, i), ke(0, 0, .6 * e.scale, i), i.fill(), i.stroke()
                } else if ("platform" == e.name) {
                    for (i.fillStyle = "#cebd5f", h = (u = 2 * e.scale) / 4, f = -e.scale / 2, r = 0; r < 4; ++r) {
                        ve(f - h / 2, 0, h, 2 * e.scale, i), i.fill(), i.stroke(), f += u / 4
                    }
                } else {
                    "healing pad" == e.name ? (i.fillStyle = "#7e7f82", ve(0, 0, 2 * e.scale, 2 * e.scale, i), i.fill(), i.stroke(), i.fillStyle = "#db6e6e", Se(0, 0, .65 * e.scale, 20, 4, i, !0)) : "spawn pad" == e.name ? (i.fillStyle = "#7e7f82", ve(0, 0, 2 * e.scale, 2 * e.scale, i), i.fill(), i.stroke(), i.fillStyle = "#71aad6", ke(0, 0, .6 * e.scale, i)) : "blocker" == e.name ? (i.fillStyle = "#7e7f82", ke(0, 0, e.scale, i), i.fill(), i.stroke(), i.rotate(Math.PI / 4), i.fillStyle = "#db6e6e", Se(0, 0, .65 * e.scale, 20, 4, i, !0)) : "teleporter" == e.name && (i.fillStyle = "#7e7f82", ke(0, 0, e.scale, i), i.fill(), i.stroke(), i.rotate(Math.PI / 4), i.fillStyle = "#d76edb", ke(0, 0, .5 * e.scale, i, !0))
                }
                m = n, t || (Ni[e.id] = m)
            }
            return m
        }

        function ke(e, t, n, i, o, a) {
            (i = i || an).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), a || i.fill(), o || i.stroke()
        }

        function be(e, t, n, i) {
            var o, a, r, s = Math.PI / 2 * 3,
                c = Math.PI / t;
            for (e.beginPath(), e.moveTo(0, -n), r = 0; r < t; r++) {
                o = Math.cos(s) * n, a = Math.sin(s) * n, e.lineTo(o, a), s += c, o = Math.cos(s) * i, a = Math.sin(s) * i, e.lineTo(o, a), s += c
            }
            e.lineTo(0, -n), e.closePath()
        }

        function ve(e, t, n, i, o, a) {
            o.fillRect(e - n / 2, t - i / 2, n, i), a || o.strokeRect(e - n / 2, t - i / 2, n, i)
        }

        function Se(e, t, n, i, o, a, r) {
            a.save(), a.translate(e, t), o = Math.ceil(o / 2);
            for (var s = 0; s < o; s++) {
                ve(0, 0, 2 * n, i, a, r), a.rotate(Math.PI / o)
            }
            a.restore()
        }

        function xe(e) {
            for (var t = 0; t < e.length;) {
                Gn.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], Ve.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
                    K: e[t + 7]
                } : null), t += 8
            }
        }

        function Pe(e, t) {
            (kt = Ge(t)) && (kt.Or += Qe.Do * Math.cos(e), kt.Ar += Qe.Do * Math.sin(e))
        }

        function Ce(e, t) {
            (kt = Ge(e)) && (kt.dir = t, kt.Or += Qe.Do * Math.cos(t + Math.PI), kt.Ar += Qe.Do * Math.sin(t + Math.PI))
        }

        function Me(e, t, n, i, o, a, r, s) {
            Ln && (It.zr(e, t, n, i, o, a, null, null, r).K = s)
        }

        function Te(e, t) {
            for (var n = 0; n < At.length; ++n) {
                At[n].K == e && (At[n].range = t)
            }
        }

        function Be(e) {
            (kt = Re(e)) && kt.Er()
        }

        function _e(e) {
            var t, n;
            for (t = 0; t < Bt.length; ++t) {
                Bt[t].Ur = !Bt[t].visible, Bt[t].visible = !1
            }
            if (e) {
                for (n = Date.now(), t = 0; t < e.length;) {
                    (kt = Re(e[t])) ? (kt.index = e[t + 1], kt.qr = void 0 === kt.Kr ? n : kt.Kr, kt.Kr = n, kt.x1 = kt.x, kt.y1 = kt.y, kt.x2 = e[t + 2], kt.y2 = e[t + 3], kt.$r = void 0 === kt.Lr ? e[t + 4] : kt.Lr, kt.Lr = e[t + 4], kt.B = e[t + 5], kt.Wr = 0, kt.visible = !0) : ((kt = Dt.Xr(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = kt.x, kt.y2 = kt.y, kt.Lr = kt.dir, kt.B = e[t + 5], Dt.Qr[e[t + 1]].name || (kt.name = Qe.Lo[e[t + 6]]), kt.Ur = !0, kt.K = e[t], kt.visible = !0), t += 7
                }
            }
        }

        function Ne(e, t) {
            var n, i, o = e.index,
                a = Oi[o];
            a || ((n = new Image).onload = function() {
                this.Ca = !0, this.onload = null
            }, n.src = ".././img/animals/" + e.src + ".png", a = n, Oi[o] = a), a.Ca && (i = 1.2 * e.scale * (e.Yr || 1), t.drawImage(a, -i, -i, 2 * i, 2 * i))
        }

        function Oe(e, t, n) {
            return e + n >= 0 && e - n <= Kt && t + n >= 0 && t - n <= $t
        }

        function Ae(e, t) {
            var n = function(e) {
                for (var t = 0; t < _t.length; ++t) {
                    if (_t[t].id == e) {
                        return _t[t]
                    }
                }
                return null
            }(e[0]);
            n || (n = new Je(e[0], e[1], Qe, We, It, Gn, _t, Bt, Ve, Fn, Rn), _t.push(n)), n.Xr(t ? Ct : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e), t && (bt = (wt = n).x, vt = wt.y, E(), oe(), re(), ae(0), mn.style.display = "block")
        }

        function Ie(e) {
            for (var t = 0; t < _t.length; t++) {
                if (_t[t].id == e) {
                    _t.splice(t, 1);
                    break
                }
            }
        }

        function Ee(e, t) {
            wt && (wt.Va[e] = t)
        }

        function He(e, t, n) {
            wt && (wt[e] = t, n && oe())
        }

        function De(e, t) {
            (kt = Fe(e)) && (kt.B = t)
        }

        function je(e) {
            for (var t = Date.now(), n = 0; n < _t.length; ++n) {
                _t[n].Ur = !_t[n].visible, _t[n].visible = !1
            }
            for (n = 0; n < e.length;) {
                (kt = Fe(e[n])) && (kt.qr = void 0 === kt.Kr ? t : kt.Kr, kt.Kr = t, kt.x1 = kt.x, kt.y1 = kt.y, kt.x2 = e[n + 1], kt.y2 = e[n + 2], kt.$r = void 0 === kt.Lr ? e[n + 3] : kt.Lr, kt.Lr = e[n + 3], kt.Wr = 0, kt.cr = e[n + 4], kt.Jo = e[n + 5], kt.jr = e[n + 6], kt.Ja = e[n + 7], kt.ae = e[n + 8], kt.ar = e[n + 9], kt.nr = e[n + 10], kt.Vr = e[n + 11], kt.zIndex = e[n + 12], kt.visible = !0), n += 13
            }
        }

        function Fe(e) {
            for (var t = 0; t < _t.length; ++t) {
                if (_t[t].K == e) {
                    return _t[t]
                }
            }
            return null
        }

        function Re(e) {
            for (var t = 0; t < Bt.length; ++t) {
                if (Bt[t].K == e) {
                    return Bt[t]
                }
            }
            return null
        }

        function Ge(e) {
            for (var t = 0; t < Ot.length; ++t) {
                if (Ot[t].K == e) {
                    return Ot[t]
                }
            }
            return null
        }

        function ze() {
            var e = Date.now() - Ai;
            window.pingTime = e, ln.innerText = "Ping: " + e + " ms"
        }

        function Ue() {
            Ai = Date.now(), Le.send("pp")
        }

        function qe(e) {
            if (!(e < 0)) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                n = ("0" + n).slice(-2), dn.innerText = "Server restarting in T-" + t + ":" + n, dn.hidden = !1
            }
        }

        function Ke(e) {
            window.open(e, "_blank")
        }
        var $e, Le, We, Xe, Qe, Ye, Ve, Ze, Je, et, tt, nt, it, ot, at, rt, st, ct, lt, dt, ut, ht, ft, mt, pt, gt, wt, yt, kt, bt, vt, St, xt, Pt, Ct, Mt, Tt, Bt, _t, Nt, Ot, At, It, Et, Ht, Dt, jt, Ft, Rt, Gt, zt, Ut, qt, Kt, $t, Lt, Wt, Xt, Qt, Yt, Vt, Zt, Jt, en, tn, nn, on, an, rn, sn, cn, ln, dn, un, hn, fn, mn, pn, gn, wn, yn, kn, bn, vn, Sn, xn, Pn, Cn, Mn, Tn, Bn, _n, Nn, On, An, In, En, Hn, Dn, jn, Fn, Rn, Gn, zn, Un, qn, Kn, $n, Ln, Wn, Xn, Qn, Yn, Vn, Zn, Jn, ei, ti, ni, ii, oi, ai, ri, si, ci, li, di, ui, hi, fi, mi, pi, gi, wi, yi, ki, bi, vi, Si, xi, Pi, Ci, Mi, Ti, Bi, _i, Ni, Oi, Ai;
        window.loadedScript = !0, $e = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168."), n(22), Le = n(23), We = n(42), Xe = n(43), Qe = n(19), Ye = n(44), Ve = n(45), n(46), Ze = n(47), Je = n(48), et = n(55), tt = n(56), nt = n(57), it = n(58).Zr, ot = new Xe.Jr, (at = new(n(59))("moomoo.io", 3e3, Qe.po, 5, !1)).es = !1, rt = !1, ct = new it(Qe, We), lt = Math.PI, dt = 2 * lt, Math.lerpAngle = function(e, t, n) {
            Math.abs(t - e) > lt && (e > t ? t += dt : e += dt);
            var i = t + (e - t) * n;
            return i >= 0 && i <= dt ? i : i % dt
        }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, o) {
            return n < 2 * o && (o = n / 2), i < 2 * o && (o = i / 2), o < 0 && (o = 0), this.beginPath(), this.moveTo(e + o, t), this.arcTo(e + n, t, e + n, t + i, o), this.arcTo(e + n, t + i, e, t + i, o), this.arcTo(e, t + i, e, t, o), this.arcTo(e, t, e + n, t, o), this.closePath(), this
        }, "undefined" != typeof Storage && (st = !0), r("consent") || (consentBlock.style.display = "block"), window.checkTerms = function(e) {
            e ? (consentBlock.style.display = "none", a("consent", 1)) : $("#consentShake").effect("shake")
        }, Ct = r("moofoll"), Mt = 1, Tt = Date.now(), Nt = [], Ot = [], It = new nt(tt, At = [], _t = [], Bt = [], Gn, Ve, Qe, We), Et = n(70), Ht = n(71), Dt = new Et(Bt, Ht, _t, Ve, null, Qe, We), jt = 1, Ft = 0, Rt = 0, Gt = 0, zt = {
            id: -1,
            hr: 0,
            dr: 0,
            ur: 0,
            lr: 0
        }, Ut = {
            id: -1,
            hr: 0,
            dr: 0,
            ur: 0,
            lr: 0
        }, qt = 0, Kt = Qe.ho, $t = Qe.fo, Lt = !1, document.getElementById("ad-container"), Wt = document.getElementById("mainMenu"), Xt = document.getElementById("enterGame"), Qt = document.getElementById("promoImg"), Yt = document.getElementById("partyButton"), Vt = document.getElementById("joinPartyButton"), Zt = document.getElementById("settingsButton"), Jt = Zt.getElementsByTagName("span")[0], en = document.getElementById("allianceButton"), tn = document.getElementById("storeButton"), nn = document.getElementById("chatButton"), on = document.getElementById("gameCanvas"), an = on.getContext("2d"), rn = document.getElementById("serverBrowser"), sn = document.getElementById("nativeResolution"), cn = document.getElementById("showPing"), document.getElementById("playMusic"), ln = document.getElementById("pingDisplay"), dn = document.getElementById("shutdownDisplay"), un = document.getElementById("menuCardHolder"), hn = document.getElementById("guideCard"), fn = document.getElementById("loadingText"), mn = document.getElementById("gameUI"), pn = document.getElementById("actionBar"), gn = document.getElementById("scoreDisplay"), wn = document.getElementById("foodDisplay"), yn = document.getElementById("woodDisplay"), kn = document.getElementById("stoneDisplay"), bn = document.getElementById("killCounter"), vn = document.getElementById("leaderboardData"), Sn = document.getElementById("nameInput"), xn = document.getElementById("itemInfoHolder"), Pn = document.getElementById("ageText"), Cn = document.getElementById("ageBarBody"), Mn = document.getElementById("upgradeHolder"), Tn = document.getElementById("upgradeCounter"), Bn = document.getElementById("allianceMenu"), _n = document.getElementById("allianceHolder"), Nn = document.getElementById("allianceManager"), On = document.getElementById("mapDisplay"), An = document.getElementById("diedText"), In = document.getElementById("skinColorHolder"), En = On.getContext("2d"), On.width = 300, On.height = 300, Hn = document.getElementById("storeMenu"), Dn = document.getElementById("storeHolder"), jn = document.getElementById("noticationDisplay"), Fn = et.I, Rn = et.H, Gn = new Ze(Ye, Ot, We, Qe), zn = "#525252", Un = "#3d3f42", qn = document.getElementById("featuredYoutube"), $n = (Kn = [{
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }, {
            name: "SweetCakes",
            link: "https://www.youtube.com/channel/UCzQiEmkjApRRskgHKstNgBQ"
        }])[We.Gr(0, Kn.length - 1)], qn.innerHTML = "<a target='_blank' class='ytLink' href='" + $n.link + "'><i class='material-icons' style='vertical-align: top;'>&#xE064;</i> " + $n.name + "</a>", Ln = !0, Wn = !1, Xn = !1, window.onblur = function() {
            Ln = !1
        }, window.onfocus = function() {
            Ln = !0, wt && wt.tr && L()
        }, window.onload = function() {
            Wn = !0, i(), setTimeout((function() {
                rt || (alert("Captcha failed to load"), window.location.reload())
            }), 2e4)
        }, window.captchaCallback = function() {
            Xn = !0, i()
        }, on.oncontextmenu = function() {
            return !1
        }, rn.addEventListener("change", We.xa((function() {
            let e = rn.value.split(":");
            at.ts(e[0], e[1], e[2])
        }))), Qn = document.getElementById("pre-content-container"), Yn = null, Vn = null, window.cpmstarAPI((function(e) {
            e.Xa.ns(Qn), Vn = e
        })), Zn = 3e5, Jn = 0, ei = 0, window.showPreAd = h, oi = [], ai = [], document.onkeydown = function(e) {
            220 == e.keyCode && (alert("The key for enabling auto acceptance into the clan is pressed (enabled by default)"), Ii = (Ii + 1) % 2)
        };
        let Ii = 0;
        setInterval((() => {
                9999999 == Ii && S(1)
            }), 100), document.onkeydown = function(e) {
                999 == e.keyCode && (V(wt.items[0]), Le.send("c", 1), Le.send("c", 0), V(wt.items[0]), Le.send("c", 1), Le.send("c", 0), V(wt.items[0]), Le.send("c", 1), Le.send("c", 0), V(wt.items[0]), Le.send("c", 1), Le.send("c", 0), setTimeout((() => {
                    Le.send("5")
                }), 1))
            }, si = [], ci = 0, li = document.getElementById("chatBox"), di = document.getElementById("chatHolder"), fi = ["motherfucking"], window.addEventListener("resize", We.xa(z)), z(), U(!1), window.setUsingTouch = U, on.addEventListener("touchmove", We.xa((function(e) {
                var t, n;
                for (e.preventDefault(), e.stopPropagation(), U(!0), t = 0; t < e.changedTouches.length; t++) {
                    (n = e.changedTouches[t]).identifier == zt.id ? (zt.ur = n.pageX, zt.lr = n.pageY, Q()) : n.identifier == Ut.id && (Ut.ur = n.pageX, Ut.lr = n.pageY, gt = 1)
                }
            })), !1), on.addEventListener("touchstart", We.xa((function(e) {
                var t, n;
                for (e.preventDefault(), e.stopPropagation(), U(!0), t = 0; t < e.changedTouches.length; t++) {
                    (n = e.changedTouches[t]).pageX < document.body.scrollWidth / 2 && -1 == zt.id ? (zt.id = n.identifier, zt.hr = zt.ur = n.pageX, zt.dr = zt.lr = n.pageY, Q()) : n.pageX > document.body.scrollWidth / 2 && -1 == Ut.id && (Ut.id = n.identifier, Ut.hr = Ut.ur = n.pageX, Ut.dr = Ut.lr = n.pageY, wt.cr < 0 && (gt = 1, X()))
                }
            })), !1), on.addEventListener("touchend", We.xa(q), !1), on.addEventListener("touchcancel", We.xa(q), !1), on.addEventListener("touchleave", We.xa(q), !1), on.addEventListener("mousemove", (function(e) {
                e.preventDefault(), e.stopPropagation(), U(!1), Rt = e.clientX, Gt = e.clientY
            }), !1), on.addEventListener("mousedown", (function(e) {
                U(!1), 1 != gt && (gt = 1, X())
            }), !1), on.addEventListener("mouseup", (function(e) {
                U(!1), 0 != gt && (gt = 0, X())
            }), !1), mi = {}, pi = {
                87: [0, -1],
                38: [0, -1],
                83: [0, 1],
                40: [0, 1],
                65: [-1, 0],
                37: [-1, 0],
                68: [1, 0],
                39: [1, 0]
            }, window.addEventListener("keydown", We.xa((function(e) {
                var t = e.which || e.keyCode || 0;
                27 == t ? I() : wt && wt.tr && W() && (mi[t] || (mi[t] = 1, 69 == t ? Le.send("7", 1) : 67 == t ? (ii || (ii = {}), ii.x = wt.x, ii.y = wt.y) : 88 == t ? (wt.mr = wt.mr ? 0 : 1, Le.send("7", 0)) : null != wt.de[t - 49] ? V(wt.de[t - 49], !0) : null != wt.items[t - 49 - wt.de.length] ? V(wt.items[t - 49 - wt.de.length]) : 81 == t ? V(wt.items[0]) : 82 == t ? Y() : pi[t] ? Q() : 32 == t && (gt = 1, X())))
            }))), window.addEventListener("keyup", We.xa((function(e) {
                if (wt && wt.tr) {
                    var t = e.which || e.keyCode || 0;
                    13 == t ? j() : W() && mi[t] && (mi[t] = 0, pi[t] ? Q() : 32 == t && (gt = 0, X()))
                }
            }))), gi = void 0, wi = !0, yi = 99999, ki = {}, bi = ["crown", "skull"], vi = [], Si = {}, Pi = {}, Ci = {}, Mi = {}, Ti = {}, Bi = {}, _i = {}, Ni = [], Oi = {}, Ai = -1, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            },
            function() {
                var e = Qe.wa / 2;
                Gn.add(0, e, e + 200, 0, Qe.ua[3], 0), Gn.add(1, e, e - 480, 0, Qe.ua[3], 0), Gn.add(2, e + 300, e + 450, 0, Qe.ua[3], 0), Gn.add(3, e - 950, e - 130, 0, Qe.ua[2], 0), Gn.add(4, e - 750, e - 400, 0, Qe.ua[3], 0), Gn.add(5, e - 700, e + 400, 0, Qe.ua[2], 0), Gn.add(6, e + 800, e - 200, 0, Qe.ua[3], 0), Gn.add(7, e - 260, e + 340, 0, Qe.ha[3], 1), Gn.add(8, e + 760, e + 310, 0, Qe.ha[3], 1), Gn.add(9, e - 800, e + 100, 0, Qe.ha[3], 1), Gn.add(10, e - 800, e + 300, 0, Ve.list[4].scale, Ve.list[4].id, Ve.list[10]), Gn.add(11, e + 650, e - 390, 0, Ve.list[4].scale, Ve.list[4].id, Ve.list[10]), Gn.add(12, e - 400, e - 450, 0, Qe.fa[2], 2)
            }(),
            function Ei() {
                mt = Date.now(), ft = mt - Tt, Tt = mt,
                    function() {
                        var e, t, n, i, o, a, r, s, c, l, d, u, h, f, m, p, g, w, y, k;
                        for (wt && (!pt || mt - pt >= 1e3 / Qe.vo) && (pt = mt, Le.send("2", K())), yi < 120 && (yi += .1 * ft, An.style.fontSize = Math.min(Math.round(yi), 120) + "px"), wt ? (e = We.cn(bt, vt, wt.x, wt.y), t = We.os(wt.x, wt.y, bt, vt), n = Math.min(.01 * e * ft, e), e > .05 ? (bt += n * Math.cos(t), vt += n * Math.sin(t)) : (bt = wt.x, vt = wt.y)) : (bt = Qe.wa / 2, vt = Qe.wa / 2), i = mt - 1e3 / Qe.mo, o = 0; o < _t.length + Bt.length; ++o) {
                            (kt = _t[o] || Bt[o - _t.length]) && kt.visible && (kt.Ur ? (kt.x = kt.x2, kt.y = kt.y2, kt.dir = kt.Lr) : (a = kt.Kr - kt.qr, r = (i - kt.qr) / a, kt.Wr += ft, s = Math.min(1.7, kt.Wr / 170), c = kt.x2 - kt.x1, kt.x = kt.x1 + c * s, c = kt.y2 - kt.y1, kt.y = kt.y1 + c * s, kt.dir = Math.lerpAngle(kt.Lr, kt.$r, Math.min(1.2, r))))
                        }
                        for (l = bt - Kt / 2, d = vt - $t / 2, Qe.ma - d <= 0 && Qe.wa - Qe.ma - d >= $t ? (an.fillStyle = "#b6db66", an.fillRect(0, 0, Kt, $t)) : Qe.wa - Qe.ma - d <= 0 ? (an.fillStyle = "#dbc666", an.fillRect(0, 0, Kt, $t)) : Qe.ma - d >= $t ? (an.fillStyle = "#fff", an.fillRect(0, 0, Kt, $t)) : Qe.ma - d >= 0 ? (an.fillStyle = "#fff", an.fillRect(0, 0, Kt, Qe.ma - d), an.fillStyle = "#b6db66", an.fillRect(0, Qe.ma - d, Kt, $t - (Qe.ma - d))) : (an.fillStyle = "#b6db66", an.fillRect(0, 0, Kt, Qe.wa - Qe.ma - d), an.fillStyle = "#dbc666", an.fillRect(0, Qe.wa - Qe.ma - d, Kt, $t - (Qe.wa - Qe.ma - d))), wi || ((jt += Ft * Qe.la * ft) >= Qe.da ? (jt = Qe.da, Ft = -1) : jt <= 1 && (jt = Ft = 1), an.globalAlpha = 1, an.fillStyle = "#dbc666", ue(0, d, an, Qe.sa), an.fillStyle = "#91b2db", ue(0, d, an, 250 * (jt - 1))), an.lineWidth = 4, an.strokeStyle = "#000", an.globalAlpha = .06, an.beginPath(), u = -bt; u < Kt; u += $t / 18) {
                            u > 0 && (an.moveTo(u, 0), an.lineTo(u, $t))
                        }
                        for (h = -vt; h < $t; h += $t / 18) {
                            u > 0 && (an.moveTo(0, h), an.lineTo(Kt, h))
                        }
                        for (an.stroke(), an.globalAlpha = 1, an.strokeStyle = zn, he(-1, l, d), an.globalAlpha = 1, an.lineWidth = 5.5, le(0, l, d), me(l, d, 0), an.globalAlpha = 1, o = 0; o < Bt.length; ++o) {
                            (kt = Bt[o]).active && kt.visible && (kt.animate(ft), an.save(), an.translate(kt.x - l, kt.y - d), an.rotate(kt.dir + kt.Dr - Math.PI / 2), Ne(kt, an), an.restore())
                        }
                        for (he(0, l, d), le(1, l, d), he(1, l, d), me(l, d, 1), he(2, l, d), he(3, l, d), an.fillStyle = "#000", an.globalAlpha = .09, l <= 0 && an.fillRect(0, 0, -l, $t), Qe.wa - l <= Kt && (f = Math.max(0, -d), an.fillRect(Qe.wa - l, f, Kt - (Qe.wa - l), $t - f)), d <= 0 && an.fillRect(-l, 0, Kt + l, -d), Qe.wa - d <= $t && (m = Math.max(0, -l), p = 0, Qe.wa - l <= Kt && (p = Kt - (Qe.wa - l)), an.fillRect(m, Qe.wa - d, Kt - m - p, $t - (Qe.wa - d))), window.animals = [], an.globalAlpha = 1, an.fillStyle = "rgba(0, 0, 70, 0.35)", an.fillRect(0, 0, Kt, $t), an.strokeStyle = Un, o = 0; o < _t.length + Bt.length; ++o) {
                            (kt = _t[o] || Bt[o - _t.length]).visible && (10 != kt.ar || kt == wt || kt.Ja && kt.Ja == wt.Ja) && ("" != (g = (kt.Ja ? "[" + kt.Ja + "] " : "") + (kt.name || "")) && (an.font = (kt.rs || 30) + "px Hammersmith One", an.fillStyle = "#fff", an.textBaseline = "middle", an.textAlign = "center", an.lineWidth = kt.rs ? 11 : 8, an.lineJoin = "round", an.strokeText(g, kt.x - l, kt.y - d - kt.scale - Qe.Uo), an.fillText(g, kt.x - l, kt.y - d - kt.scale - Qe.Uo), kt.ae && ki.ss.Ca && (w = Qe.To, m = kt.x - l - w / 2 - an.measureText(g).width / 2 - Qe.Bo, an.drawImage(ki.ss, m, kt.y - d - kt.scale - Qe.Uo - w / 2 - 5, w, w)), 1 == kt.Vr && ki.cs.Ca && (w = Qe.To, m = kt.x - l - w / 2 + an.measureText(g).width / 2 + Qe.Bo, an.drawImage(ki.cs, m, kt.y - d - kt.scale - Qe.Uo - w / 2 - 5, w, w))), window.items = wt.items, window.w = wt.de, an.textAlign = "center", an.fillStyle = "#fff", an.lineJoin = "round", an.font = "20px Hammersmith One", an.lineWidth = 6, an.strokeText(`\nHP:${kt.B}/${kt.X}`, kt.x - l, kt.y - d + kt.scale + Qe.Uo + 34), an.fillText(`\nHP:${kt.B}/${kt.X}`, kt.x - l, kt.y - d + kt.scale + Qe.Uo + 34), kt.ls && kt != wt && kt.Ja && kt.Ja == wt.Ja && (an.lineCap = "round", an.strokeStyle = "#228b22", an.lineWidth = 3, an.beginPath(), an.moveTo(wt.x - l, wt.y - d), an.lineTo(kt.x - l, kt.y - d), an.stroke(), an.strokeStyle = Gn), !kt.ls || kt == wt || kt.Ja == wt.Ja && kt.Ja || (an.lineCap = "round", an.strokeStyle = "#000000", an.lineWidth = 3, an.beginPath(), an.moveTo(wt.x - l, wt.y - d), an.lineTo(kt.x - l, kt.y - d), an.stroke(), an.strokeStyle = Gn), kt.ls || (animals.push(kt), an.lineCap = "round", an.strokeStyle = "#0000ff", an.lineWidth = 3, an.beginPath(), an.moveTo(wt.x - l, wt.y - d), an.lineTo(kt.x - l, kt.y - d), an.stroke(), an.strokeStyle = Gn), window.Pname = wt.name, kt.B > 0 && (Qe.So, an.fillStyle = Un, an.roundRect(kt.x - l - Qe.So - Qe.xo, kt.y - d + kt.scale + Qe.Uo, 2 * Qe.So + 2 * Qe.xo, 17, 8), an.fill(), an.fillStyle = kt == wt || kt.Ja && kt.Ja == wt.Ja ? "#8ecc51" : "#cc5151", an.roundRect(kt.x - l - Qe.So, kt.y - d + kt.scale + Qe.Uo + Qe.xo, 2 * Qe.So * (kt.B / kt.X), 17 - 2 * Qe.xo, 7), an.fill()))
                        }
                        for (window.animals.Near = animals.sort(((e, t) => dist(e, myPlayer) - dist(t, myPlayer)))[0], window.anyT(), window.hat8C(0), ot.update(ft, an, l, d), o = 0; o < _t.length; ++o) {
                            (kt = _t[o]).visible && kt._o > 0 && (kt._o -= ft, kt._o <= 0 && (kt._o = 0), an.font = "32px Hammersmith One", y = an.measureText(kt.sr), an.textBaseline = "middle", an.textAlign = "center", m = kt.x - l, f = kt.y - kt.scale - d - 90, k = y.width + 17, an.fillStyle = "rgba(0,0,0,0.2)", an.roundRect(m - k / 2, f - 23.5, k, 47, 6), an.fill(), an.fillStyle = "#fff", an.fillText(kt.sr, m, f))
                        }! function(e) {
                            if (wt && wt.tr) {
                                En.clearRect(0, 0, On.width, On.height), En.strokeStyle = "#fff", En.lineWidth = 4;
                                for (var t = 0; t < si.length; ++t) {
                                    (ri = si[t]).update(En, e)
                                }
                                if (En.globalAlpha = 1, En.fillStyle = "#fff", ke(wt.x / Qe.wa * On.width, wt.y / Qe.wa * On.height, 7, En, !0), En.fillStyle = "rgba(255,255,255,0.35)", wt.Ja && ni) {
                                    for (t = 0; t < ni.length;) {
                                        ke(ni[t] / Qe.wa * On.width, ni[t + 1] / Qe.wa * On.height, 7, En, !0), t += 2
                                    }
                                }
                                ti && (En.fillStyle = "#0a0a0a", En.font = "34px Hammersmith One", En.textBaseline = "middle", En.textAlign = "center", En.fillText("x", ti.x / Qe.wa * On.width, ti.y / Qe.wa * On.height)), ii && (En.fillStyle = "#fff", En.font = "34px Hammersmith One", En.textBaseline = "middle", En.textAlign = "center", En.fillText("x", ii.x / Qe.wa * On.width, ii.y / Qe.wa * On.height))
                            }
                        }(ft), -1 !== zt.id && ce(zt.hr, zt.dr, zt.ur, zt.lr), -1 !== Ut.id && ce(Ut.hr, Ut.dr, Ut.ur, Ut.lr)
                    }(), requestAnimFrame(Ei)
            }(), window.openLink = Ke, window.aJoinReq = S, window.follmoo = function() {
                Ct || (Ct = !0, a("moofoll", 1))
            }, window.kickFromClan = x, window.sendJoin = P, window.leaveAlliance = M, window.createAlliance = C, window.storeBuy = A, window.storeEquip = O, window.showItemInfo = m, window.selectSkinColor = function(e) {
                qt = e, D()
            }, window.changeStoreIndex = function(e) {
                ci != e && (ci = e, N())
            }, window.config = Qe
    }, function(e, t) {
        ! function(e, t, n) {
            function i(e, t) {
                return typeof e === t
            }
            var o, a, r, s = [],
                c = [],
                l = {
                    ds: "3.5.0",
                    us: {
                        hs: "",
                        fs: !0,
                        ps: !0,
                        gs: !0
                    },
                    ws: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout((function() {
                            t(n[e])
                        }), 0)
                    },
                    ys: function(e, t, n) {
                        c.push({
                            name: e,
                            ks: t,
                            options: n
                        })
                    },
                    bs: function(e) {
                        c.push({
                            name: null,
                            ks: e
                        })
                    }
                },
                d = function() {};
            for (d.prototype = l, d = new d, o = t.documentElement, a = "svg" === o.nodeName.toLowerCase(), d.ys("passiveeventlisteners", (function() {
                    var t, n = !1;
                    try {
                        t = Object.defineProperty({}, "passive", {
                            get: function() {
                                n = !0
                            }
                        }), e.addEventListener("test", null, t)
                    } catch (e) {}
                    return n
                })), function() {
                    var e, t, n, o, a, r, l;
                    for (l in c) {
                        if (c.hasOwnProperty(l)) {
                            if (e = [], (t = c[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.vs && t.options.vs.length)) {
                                for (n = 0; n < t.options.vs.length; n++) {
                                    e.push(t.options.vs[n].toLowerCase())
                                }
                            }
                            for (o = i(t.ks, "function") ? t.ks() : t.ks, a = 0; a < e.length; a++) {
                                1 === (r = e[a].split(".")).length ? d[r[0]] = o : (!d[r[0]] || d[r[0]] instanceof Boolean || (d[r[0]] = new Boolean(d[r[0]])), d[r[0]][r[1]] = o), s.push((o ? "" : "no-") + r.join("-"))
                            }
                        }
                    }
                }(), function(e) {
                    var t, n = o.className,
                        i = d.us.hs || "";
                    a && (n = n.baseVal), d.us.ps && (t = new RegExp("(^|\\s)" + i + "no-js(\\s|$)"), n = n.replace(t, "$1" + i + "js$2")), d.us.fs && (n += " " + i + e.join(" " + i), a ? o.className.baseVal = n : o.className = n)
                }(s), delete l.ys, delete l.bs, r = 0; r < d.ws.length; r++) {
                d.ws[r]()
            }
            e.Ss = d
        }(window, document)
    }, function(e, t, n) {
        var i = n(24);
        n(19), e.exports = {
            xs: null,
            connected: !1,
            Ps: -1,
            connect: function(e, t, n) {
                var o, a, r;
                if (!this.xs) {
                    o = this;
                    try {
                        a = !1, r = e, this.xs = new WebSocket(r), this.xs.binaryType = "arraybuffer", this.xs.onmessage = function(e) {
                            var t = new Uint8Array(e.data),
                                a = i.decode(t),
                                r = a[0];
                            t = a[1], "io-init" == r ? o.Ps = t[0] : n[r].apply(void 0, t)
                        }, this.xs.onopen = function() {
                            o.connected = !0, t()
                        }, this.xs.onclose = function(e) {
                            o.connected = !1, 4001 == e.code ? t("Invalid Connection") : a || t("disconnected")
                        }, this.xs.onerror = function(e) {
                            this.xs && this.xs.readyState != WebSocket.OPEN && (a = !0, t("Socket error"))
                        }
                    } catch (e) {
                        t(e)
                    }
                }
            },
            send: function(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    n = i.encode([e, t]);
                this.xs.send(n)
            },
            Cs: function() {
                return this.xs && this.connected
            },
            close: function() {
                this.xs && this.xs.close()
            }
        }
    }, function(e, t, n) {
        t.encode = n(9).encode, t.decode = n(15).decode, t.Ms = n(37).Ms, t.Ts = n(38).Ts, t.Sn = n(39).Sn, t.$n = n(40).$n
    }, function(e, t, n) {
        (function(t) {
            function n(e) {
                return e && e.isBuffer && e
            }
            e.exports = n(void 0 !== t && t) || n(this.vn) || n("undefined" != typeof window && window.vn) || this.vn
        }).call(this, n(11).vn)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = e.length;
            if (n % 4 > 0) {
                throw new Error("Invalid string. Length must be a multiple of 4")
            }
            return -1 === (t = e.indexOf("=")) && (t = n), [t, t === n ? 0 : 4 - t % 4]
        }

        function o(e) {
            return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e]
        }

        function a(e, t, n) {
            for (var i, a = [], r = t; r < n; r += 3) {
                i = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]), a.push(o(i))
            }
            return a.join("")
        }
        t.byteLength = function(e) {
            var t = i(e),
                n = t[0],
                o = t[1];
            return 3 * (n + o) / 4 - o
        }, t.Vn = function(e) {
            var t, n, o = i(e),
                a = o[0],
                r = o[1],
                l = new c(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, a, r)),
                d = 0,
                u = r > 0 ? a - 4 : a;
            for (n = 0; n < u; n += 4) {
                t = s[e.charCodeAt(n)] << 18 | s[e.charCodeAt(n + 1)] << 12 | s[e.charCodeAt(n + 2)] << 6 | s[e.charCodeAt(n + 3)], l[d++] = t >> 16 & 255, l[d++] = t >> 8 & 255, l[d++] = 255 & t
            }
            return 2 === r && (t = s[e.charCodeAt(n)] << 2 | s[e.charCodeAt(n + 1)] >> 4, l[d++] = 255 & t), 1 === r && (t = s[e.charCodeAt(n)] << 10 | s[e.charCodeAt(n + 1)] << 4 | s[e.charCodeAt(n + 2)] >> 2, l[d++] = t >> 8 & 255, l[d++] = 255 & t), l
        }, t.Yn = function(e) {
            for (var t, n = e.length, i = n % 3, o = [], s = 0, c = n - i; s < c; s += 16383) {
                o.push(a(e, s, s + 16383 > c ? c : s + 16383))
            }
            return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("")
        };
        for (var r = [], s = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0; d < 64; ++d) {
            r[d] = l[d], s[l.charCodeAt(d)] = d
        }
        s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
    }, function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }, function(e, t, n) {
        function i(e) {
            return new Array(e)
        }
        var o = n(0);
        (t = e.exports = i(0)).gn = i, t.concat = o.concat, t.from = function(e) {
            if (!o.isBuffer(e) && o.isView(e)) {
                e = o.Uint8Array.from(e)
            } else if (o.kn(e)) {
                e = new Uint8Array(e)
            } else {
                if ("string" == typeof e) {
                    return o.from.call(t, e)
                }
                if ("number" == typeof e) {
                    throw new TypeError('"value" argument must not be a number')
                }
            }
            return Array.prototype.slice.call(e)
        }
    }, function(e, t, n) {
        function i(e) {
            return new a(e)
        }
        var o = n(0),
            a = o.global;
        (t = e.exports = o.wn ? i(0) : []).gn = o.wn && a.gn || i, t.concat = o.concat, t.from = function(e) {
            if (!o.isBuffer(e) && o.isView(e)) {
                e = o.Uint8Array.from(e)
            } else if (o.kn(e)) {
                e = new Uint8Array(e)
            } else {
                if ("string" == typeof e) {
                    return o.from.call(t, e)
                }
                if ("number" == typeof e) {
                    throw new TypeError('"value" argument must not be a number')
                }
            }
            return a.from && 1 !== a.from.length ? a.from(e) : new a(e)
        }
    }, function(e, t, n) {
        function i(e) {
            return new Uint8Array(e)
        }
        var o = n(0);
        (t = e.exports = o.yn ? i(0) : []).gn = i, t.concat = o.concat, t.from = function(e) {
            if (o.isView(e)) {
                var n = e.byteOffset,
                    i = e.byteLength;
                (e = e.buffer).byteLength !== i && (e.slice ? e = e.slice(n, n + i) : (e = new Uint8Array(e)).byteLength !== i && (e = Array.prototype.slice.call(e, n, n + i)))
            } else {
                if ("string" == typeof e) {
                    return o.from.call(t, e)
                }
                if ("number" == typeof e) {
                    throw new TypeError('"value" argument must not be a number')
                }
            }
            return new Uint8Array(e)
        }
    }, function(e, t) {
        t.bn = function(e, t, n, i) {
            var o, a;
            if (n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0), a = i - n, e === this && n < t && t < i) {
                for (o = a - 1; o >= 0; o--) {
                    e[o + t] = this[o + n]
                }
            } else {
                for (o = 0; o < a; o++) {
                    e[o + t] = this[o + n]
                }
            }
            return a
        }, t.toString = function(e, t, n) {
            var i, o, a = 0 | t;
            for (n || (n = this.length), i = "", o = 0; a < n;) {
                (o = this[a++]) < 128 ? i += String.fromCharCode(o) : (192 == (224 & o) ? o = (31 & o) << 6 | 63 & this[a++] : 224 == (240 & o) ? o = (15 & o) << 12 | (63 & this[a++]) << 6 | 63 & this[a++] : 240 == (248 & o) && (o = (7 & o) << 18 | (63 & this[a++]) << 12 | (63 & this[a++]) << 6 | 63 & this[a++]), o >= 65536 ? (o -= 65536, i += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : i += String.fromCharCode(o))
            }
            return i
        }, t.write = function(e, t) {
            for (var n = t || (t |= 0), i = e.length, o = 0, a = 0; a < i;) {
                (o = e.charCodeAt(a++)) < 128 ? this[n++] = o : o < 2048 ? (this[n++] = 192 | o >>> 6, this[n++] = 128 | 63 & o) : o < 55296 || o > 57343 ? (this[n++] = 224 | o >>> 12, this[n++] = 128 | o >>> 6 & 63, this[n++] = 128 | 63 & o) : (o = 65536 + (o - 55296 << 10 | e.charCodeAt(a++) - 56320), this[n++] = 240 | o >>> 18, this[n++] = 128 | o >>> 12 & 63, this[n++] = 128 | o >>> 6 & 63, this[n++] = 128 | 63 & o)
            }
            return n - t
        }
    }, function(e, t, n) {
        function i(e) {
            return s || (s = n(9).encode), s(e)
        }

        function o(e) {
            return e.valueOf()
        }

        function a(e) {
            (e = RegExp.prototype.toString.call(e).split("/")).shift();
            var t = [e.pop()];
            return t.unshift(e.join("/")), t
        }

        function r(e) {
            var t, n = {};
            for (t in u) {
                n[t] = e[t]
            }
            return n
        }
        t.Bn = function(e) {
            e.Nn(14, Error, [r, i]), e.Nn(1, EvalError, [r, i]), e.Nn(2, RangeError, [r, i]), e.Nn(3, ReferenceError, [r, i]), e.Nn(4, SyntaxError, [r, i]), e.Nn(5, TypeError, [r, i]), e.Nn(6, URIError, [r, i]), e.Nn(10, RegExp, [a, i]), e.Nn(11, Boolean, [o, i]), e.Nn(12, String, [o, i]), e.Nn(13, Date, [Number, i]), e.Nn(15, Number, [o, i]), "undefined" != typeof Uint8Array && (e.Nn(17, Int8Array, d), e.Nn(18, Uint8Array, d), e.Nn(19, Int16Array, d), e.Nn(20, Uint16Array, d), e.Nn(21, Int32Array, d), e.Nn(22, Uint32Array, d), e.Nn(23, Float32Array, d), "undefined" != typeof Float64Array && e.Nn(24, Float64Array, d), "undefined" != typeof Uint8ClampedArray && e.Nn(25, Uint8ClampedArray, d), e.Nn(26, ArrayBuffer, d), e.Nn(29, DataView, d)), c.wn && e.Nn(27, l, c.from)
        };
        var s, c = n(0),
            l = c.global,
            d = c.Uint8Array.from,
            u = {
                name: 1,
                message: 1,
                stack: 1,
                columnNumber: 1,
                fileName: 1,
                lineNumber: 1
            }
    }, function(e, t, n) {
        var i = n(5),
            o = n(7),
            a = o.Ji,
            r = o.eo,
            s = n(0),
            c = n(6),
            l = n(34),
            d = n(13).uint8,
            u = n(3)._n,
            h = "undefined" != typeof Uint8Array,
            f = "undefined" != typeof Map,
            m = [];
        m[1] = 212, m[2] = 213, m[4] = 214, m[8] = 215, m[16] = 216, t.Tn = function(e) {
            function t(e, t) {
                if (null === t) {
                    return n(e, t)
                }
                if (k(t)) {
                    return b(e, t)
                }
                if (i(t)) {
                    return function(e, t) {
                        var n, i, o = t.length;
                        for (g[o < 16 ? 144 + o : o <= 65535 ? 220 : 221](e, o), n = e.$n.encode, i = 0; i < o; i++) {
                            n(e, t[i])
                        }
                    }(e, t)
                }
                if (a.Bs(t)) {
                    return function(e, t) {
                        g[207](e, t.toArray())
                    }(e, t)
                }
                if (r._s(t)) {
                    return function(e, t) {
                        g[211](e, t.toArray())
                    }(e, t)
                }
                var o = e.$n.In(t);
                if (o && (t = o(t)), t instanceof u) {
                    return function(e, t) {
                        var n = t.buffer,
                            i = n.length,
                            o = m[i] || (i < 255 ? 199 : i <= 65535 ? 200 : 201);
                        g[o](e, i), d[t.type](e), e.send(n)
                    }(e, t)
                }
                v(e, t)
            }

            function n(e, t) {
                g[192](e, t)
            }

            function o(e, t) {
                var n = t.length;
                g[n < 255 ? 196 : n <= 65535 ? 197 : 198](e, n), e.send(t)
            }

            function p(e, t) {
                var n, i = Object.keys(t),
                    o = i.length;
                g[o < 16 ? 128 + o : o <= 65535 ? 222 : 223](e, o), n = e.$n.encode, i.forEach((function(i) {
                    n(e, i), n(e, t[i])
                }))
            }
            var g = l.Ns(e),
                w = e && e.Os,
                y = h && e && e.io,
                k = y ? s.kn : s.isBuffer,
                b = y ? function(e, t) {
                    o(e, new Uint8Array(t))
                } : o,
                v = f && e && e.ao ? function(e, t) {
                    var n, i;
                    if (!(t instanceof Map)) {
                        return p(e, t)
                    }
                    n = t.size, g[n < 16 ? 128 + n : n <= 65535 ? 222 : 223](e, n), i = e.$n.encode, t.forEach((function(t, n, o) {
                        i(e, n), i(e, t)
                    }))
                } : p;
            return {
                As: function(e, t) {
                    g[t ? 195 : 194](e, t)
                },
                Is: n,
                number: function(e, t) {
                    var n = 0 | t;
                    t === n ? g[-32 <= n && n <= 127 ? 255 & n : 0 <= n ? n <= 255 ? 204 : n <= 65535 ? 205 : 206 : -128 <= n ? 208 : -32768 <= n ? 209 : 210](e, n) : g[203](e, t)
                },
                object: w ? function(e, n) {
                    if (k(n)) {
                        return function(e, t) {
                            var n = t.length;
                            g[n < 32 ? 160 + n : n <= 65535 ? 218 : 219](e, n), e.send(t)
                        }(e, n)
                    }
                    t(e, n)
                } : t,
                string: function(e) {
                    return function(t, n) {
                        var i, o, a, r, s, l, d = n.length,
                            u = 5 + 3 * d;
                        t.offset = t.Xi(u), i = t.buffer, o = e(d), a = t.offset + o, d = c.write.call(i, n, a), o !== (r = e(d)) && (s = a + r - o, l = a + d, c.bn.call(i, i, s, a, l)), g[1 === r ? 160 + d : r <= 3 ? 215 + r : 219](t, d), t.offset += d
                    }
                }(w ? function(e) {
                    return e < 32 ? 1 : e <= 65535 ? 3 : 5
                } : function(e) {
                    return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
                }),
                Es: n,
                undefined: n
            }
        }
    }, function(e, t, n) {
        function i() {
            var e = g.slice();
            return e[196] = o(196), e[197] = a(197), e[198] = r(198), e[199] = o(199), e[200] = a(200), e[201] = r(201), e[202] = s(202, 4, b.$i || d, !0), e[203] = s(203, 8, b.Wi || u, !0), e[204] = o(204), e[205] = a(205), e[206] = r(206), e[207] = s(207, 8, c), e[208] = o(208), e[209] = a(209), e[210] = r(210), e[211] = s(211, 8, l), e[217] = o(217), e[218] = a(218), e[219] = r(219), e[220] = a(220), e[221] = r(221), e[222] = a(222), e[223] = r(223), e
        }

        function o(e) {
            return function(t, n) {
                var i = t.Xi(2),
                    o = t.buffer;
                o[i++] = e, o[i] = n
            }
        }

        function a(e) {
            return function(t, n) {
                var i = t.Xi(3),
                    o = t.buffer;
                o[i++] = e, o[i++] = n >>> 8, o[i] = n
            }
        }

        function r(e) {
            return function(t, n) {
                var i = t.Xi(5),
                    o = t.buffer;
                o[i++] = e, o[i++] = n >>> 24, o[i++] = n >>> 16, o[i++] = n >>> 8, o[i] = n
            }
        }

        function s(e, t, n, i) {
            return function(o, a) {
                var r = o.Xi(t + 1);
                o.buffer[r++] = e, n.call(o.buffer, a, r, i)
            }
        }

        function c(e, t) {
            new m(this, t, e)
        }

        function l(e, t) {
            new p(this, t, e)
        }

        function d(e, t) {
            h.write(this, e, t, !1, 23, 4)
        }

        function u(e, t) {
            h.write(this, e, t, !1, 52, 8)
        }
        var h = n(4),
            f = n(7),
            m = f.Ji,
            p = f.eo,
            g = n(13).uint8,
            w = n(0),
            y = w.global,
            k = w.wn && "En" in y && !y.En,
            b = w.wn && y.prototype || {};
        t.Ns = function(e) {
            return e && e.Pn ? function() {
                var e = i();
                return e[202] = s(202, 4, d), e[203] = s(203, 8, u), e
            }() : k || w.wn && e && e.Hs ? function() {
                var e = g.slice();
                return e[196] = s(196, 1, y.prototype.Ai), e[197] = s(197, 2, y.prototype.Ei), e[198] = s(198, 4, y.prototype.Di), e[199] = s(199, 1, y.prototype.Ai), e[200] = s(200, 2, y.prototype.Ei), e[201] = s(201, 4, y.prototype.Di), e[202] = s(202, 4, y.prototype.$i), e[203] = s(203, 8, y.prototype.Wi), e[204] = s(204, 1, y.prototype.Ai), e[205] = s(205, 2, y.prototype.Ei), e[206] = s(206, 4, y.prototype.Di), e[207] = s(207, 8, c), e[208] = s(208, 1, y.prototype.Ri), e[209] = s(209, 2, y.prototype.zi), e[210] = s(210, 4, y.prototype.qi), e[211] = s(211, 8, l), e[217] = s(217, 1, y.prototype.Ai), e[218] = s(218, 2, y.prototype.Ei), e[219] = s(219, 4, y.prototype.Di), e[220] = s(220, 2, y.prototype.Ei), e[221] = s(221, 4, y.prototype.Di), e[222] = s(222, 2, y.prototype.Ei), e[223] = s(223, 4, y.prototype.Di), e
            }() : i()
        }
    }, function(e, t, n) {
        function i(e) {
            return c || (c = n(15).decode), c(e)
        }

        function o(e) {
            return RegExp.apply(null, e)
        }

        function a(e) {
            return function(t) {
                var n, i = new e;
                for (n in u) {
                    i[n] = t[n]
                }
                return i
            }
        }

        function r(e) {
            return function(t) {
                return new e(t)
            }
        }

        function s(e) {
            return new Uint8Array(e).buffer
        }
        t.Rn = function(e) {
            e.zn(14, [i, a(Error)]), e.zn(1, [i, a(EvalError)]), e.zn(2, [i, a(RangeError)]), e.zn(3, [i, a(ReferenceError)]), e.zn(4, [i, a(SyntaxError)]), e.zn(5, [i, a(TypeError)]), e.zn(6, [i, a(URIError)]), e.zn(10, [i, o]), e.zn(11, [i, r(Boolean)]), e.zn(12, [i, r(String)]), e.zn(13, [i, r(Date)]), e.zn(15, [i, r(Number)]), "undefined" != typeof Uint8Array && (e.zn(17, r(Int8Array)), e.zn(18, r(Uint8Array)), e.zn(19, [s, r(Int16Array)]), e.zn(20, [s, r(Uint16Array)]), e.zn(21, [s, r(Int32Array)]), e.zn(22, [s, r(Uint32Array)]), e.zn(23, [s, r(Float32Array)]), "undefined" != typeof Float64Array && e.zn(24, [s, r(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.zn(25, r(Uint8ClampedArray)), e.zn(26, s), e.zn(29, [s, r(DataView)])), l.wn && e.zn(27, r(d))
        };
        var c, l = n(0),
            d = l.global,
            u = {
                name: 1,
                message: 1,
                stack: 1,
                columnNumber: 1,
                fileName: 1,
                lineNumber: 1
            }
    }, function(e, t, n) {
        function i(e) {
            var t, n = new Array(256);
            for (t = 0; t <= 127; t++) {
                n[t] = o(t)
            }
            for (t = 128; t <= 143; t++) {
                n[t] = r(t - 128, e.map)
            }
            for (t = 144; t <= 159; t++) {
                n[t] = r(t - 144, e.ro)
            }
            for (t = 160; t <= 191; t++) {
                n[t] = r(t - 160, e.so)
            }
            for (n[192] = o(null), n[193] = null, n[194] = o(!1), n[195] = o(!0), n[196] = a(e.uint8, e.co), n[197] = a(e.uint16, e.co), n[198] = a(e.uint32, e.co), n[199] = a(e.uint8, e.lo), n[200] = a(e.uint16, e.lo), n[201] = a(e.uint32, e.lo), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e["do"], n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.oo, n[212] = r(1, e.lo), n[213] = r(2, e.lo), n[214] = r(4, e.lo), n[215] = r(8, e.lo), n[216] = r(16, e.lo), n[217] = a(e.uint8, e.so), n[218] = a(e.uint16, e.so), n[219] = a(e.uint32, e.so), n[220] = a(e.uint16, e.ro), n[221] = a(e.uint32, e.ro), n[222] = a(e.uint16, e.map), n[223] = a(e.uint32, e.map), t = 224; t <= 255; t++) {
                n[t] = o(t - 256)
            }
            return n
        }

        function o(e) {
            return function() {
                return e
            }
        }

        function a(e, t) {
            return function(n) {
                var i = e(n);
                return t(n, i)
            }
        }

        function r(e, t) {
            return function(n) {
                return t(n, e)
            }
        }
        var s = n(17);
        t.Fn = function(e) {
            var t = s.no(e);
            return e && e.Os ? function(e) {
                var t, n = i(e).slice();
                for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) {
                    n[t] = r(t - 160, e.co)
                }
                return n
            }(t) : i(t)
        }
    }, function(e, t, n) {
        function i(e) {
            if (!(this instanceof i)) {
                return new i(e)
            }
            a.call(this, e)
        }
        t.Ms = i;
        var o = n(18),
            a = n(10).Kn;
        i.prototype = new a, o.Ln(i.prototype), i.prototype.encode = function(e) {
            this.write(e), this.emit("data", this.read())
        }, i.prototype.end = function(e) {
            arguments.length && this.encode(e), this.flush(), this.emit("end")
        }
    }, function(e, t, n) {
        function i(e) {
            if (!(this instanceof i)) {
                return new i(e)
            }
            a.call(this, e)
        }
        t.Ts = i;
        var o = n(18),
            a = n(16).Zi;
        i.prototype = new a, o.Ln(i.prototype), i.prototype.decode = function(e) {
            arguments.length && this.write(e), this.flush()
        }, i.prototype.push = function(e) {
            this.emit("data", e)
        }, i.prototype.end = function(e) {
            this.decode(e), this.emit("end")
        }
    }, function(e, t, n) {
        n(8), n(2), t.Sn = n(1).Sn
    }, function(e, t, n) {
        n(8), n(2), t.$n = {
            Mn: n(1).Mn
        }
    }, function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (l === setTimeout) {
                return setTimeout(e, 0)
            }
            if ((l === n || !l) && setTimeout) {
                return l = setTimeout, setTimeout(e, 0)
            }
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function a() {
            f && u && (f = !1, u.length ? h = u.concat(h) : m = -1, h.length && r())
        }

        function r() {
            var e, t;
            if (!f) {
                for (e = o(a), f = !0, t = h.length; t;) {
                    for (u = h, h = []; ++m < t;) {
                        u && u[m].run()
                    }
                    m = -1, t = h.length
                }
                u = null, f = !1,
                    function(e) {
                        if (d === clearTimeout) {
                            return clearTimeout(e)
                        }
                        if ((d === i || !d) && clearTimeout) {
                            return d = clearTimeout, clearTimeout(e)
                        }
                        try {
                            d(e)
                        } catch (t) {
                            try {
                                return d.call(null, e)
                            } catch (t) {
                                return d.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function s(e, t) {
            this.Ds = e, this.ro = t
        }

        function c() {}
        var l, d, u, h, f, m, p = e.exports = {};
        ! function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                d = i
            }
        }(), h = [], f = !1, m = -1, p.js = function(e) {
            var t, n = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (t = 1; t < arguments.length; t++) {
                    n[t - 1] = arguments[t]
                }
            }
            h.push(new s(e, n)), 1 !== h.length || f || o(r)
        }, s.prototype.run = function() {
            this.Ds.apply(null, this.ro)
        }, p.title = "browser", p.Fs = !0, p.Io = {}, p.Rs = [], p.version = "", p.Gs = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.zs = c, p.emit = c, p.Us = c, p.qs = c, p.listeners = function(e) {
            return []
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, p.Ks = function() {
            return "/"
        }, p.$s = function(e) {
            throw new Error("process.chdir is not supported")
        }, p.Ls = function() {
            return 0
        }
    }, function(e, t) {
        var n = Math.abs,
            i = (Math.cos, Math.sin, Math.pow, Math.sqrt),
            o = (n = Math.abs, Math.atan2),
            a = Math.PI;
        e.exports.Gr = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }, e.exports.Rr = function(e, t) {
            return Math.random() * (t - e + 1) + e
        }, e.exports.Ws = function(e, t, n) {
            return e + (t - e) * n
        }, e.exports.Xs = function(e, t) {
            return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
        }, e.exports.cn = function(e, t, n, o) {
            return i((n -= e) * n + (o -= t) * o)
        }, e.exports.os = function(e, t, n, i) {
            return o(t - i, e - n)
        }, e.exports.Qs = function(e, t) {
            var i = n(t - e) % (2 * a);
            return i > a ? 2 * a - i : i
        }, e.exports.isNumber = function(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }, e.exports.Ys = function(e) {
            return e && "string" == typeof e
        }, e.exports.Br = function(e) {
            return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
        }, e.exports.Qa = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, e.exports.pr = function(e, t) {
            return parseFloat(e.toFixed(t))
        }, e.exports.Vs = function(e, t) {
            return parseFloat(t.points) - parseFloat(e.points)
        }, e.exports.Zs = function(e, t, n, i, o, a, r, s) {
            var c, l, d, u, h, f, m = o,
                p = r;
            return o > r && (m = r, p = o), p > n && (p = n), m < e && (m = e), !(m > p) && (c = a, l = s, d = r - o, Math.abs(d) > 1e-7 && (c = (u = (s - a) / d) * m + (h = a - u * o), l = u * p + h), c > l && (f = l, l = c, c = f), l > i && (l = i), c < t && (c = t), !(c > l))
        }, e.exports.Js = function(e, t, n) {
            var i = e.getBoundingClientRect(),
                o = i.left + window.scrollX,
                a = i.top + window.scrollY,
                r = i.width,
                s = i.height;
            return t > o && t < o + r && n > a && n < a + s
        }, e.exports.ec = function(e) {
            var t = e.changedTouches[0];
            e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
        }, e.exports.Pa = function(t, n) {
            function i(n) {
                e.exports.ec(n), window.setUsingTouch(!0), o && (n.preventDefault(), n.stopPropagation()), a && (t.onclick && t.onclick(n), t.onmouseout && t.onmouseout(n), a = !1)
            }
            var o = !n,
                a = !1;
            t.addEventListener("touchstart", e.exports.xa((function(n) {
                e.exports.ec(n), window.setUsingTouch(!0), o && (n.preventDefault(), n.stopPropagation()), t.onmouseover && t.onmouseover(n), a = !0
            })), !1), t.addEventListener("touchmove", e.exports.xa((function(n) {
                e.exports.ec(n), window.setUsingTouch(!0), o && (n.preventDefault(), n.stopPropagation()), e.exports.Js(t, n.pageX, n.pageY) ? a || (t.onmouseover && t.onmouseover(n), a = !0) : a && (t.onmouseout && t.onmouseout(n), a = !1)
            })), !1), t.addEventListener("touchend", e.exports.xa(i), !1), t.addEventListener("touchcancel", e.exports.xa(i), !1), t.addEventListener("touchleave", e.exports.xa(i), !1)
        }, e.exports.Ma = function(e) {
            for (; e.hasChildNodes();) {
                e.removeChild(e.lastChild)
            }
        }, e.exports.Ta = function(t) {
            function n(e, n) {
                t[e] && (a[n] = t[e])
            }
            var i, o, a = document.createElement(t.tag || "div");
            for (i in n("text", "textContent"), n("html", "innerHTML"), n("class", "className"), t) {
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
                a[i] = t[i]
            }
            if (a.onclick && (a.onclick = e.exports.xa(a.onclick)), a.onmouseover && (a.onmouseover = e.exports.xa(a.onmouseover)), a.onmouseout && (a.onmouseout = e.exports.xa(a.onmouseout)), t.style && (a.style.cssText = t.style), t.Za && e.exports.Pa(a), t.parent && t.parent.appendChild(a), t.children) {
                for (o = 0; o < t.children.length; o++) {
                    a.appendChild(t.children[o])
                }
            }
            return a
        }, e.exports.tc = function(e) {
            return !e || "boolean" != typeof e.isTrusted || e.isTrusted
        }, e.exports.xa = function(t) {
            return function(n) {
                n && n instanceof Event && e.exports.tc(n) && t(n)
            }
        }, e.exports.nc = function(e) {
            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) {
                t += n.charAt(Math.floor(62 * Math.random()))
            }
            return t
        }, e.exports.oc = function(e, t) {
            for (var n = 0, i = 0; i < e.length; i++) {
                e[i] === t && n++
            }
            return n
        }
    }, function(e, t) {
        e.exports.ac = function() {
            this.init = function(e, t, n, i, o, a, r) {
                this.x = e, this.y = t, this.color = r, this.scale = n, this.rc = this.scale, this.sc = 1.5 * n, this.cc = .7, this.speed = i, this.lc = o, this.text = a
            }, this.update = function(e) {
                this.lc && (this.lc -= e, this.y -= this.speed * e, this.scale += this.cc * e, this.scale >= this.sc ? (this.scale = this.sc, this.cc *= -1) : this.scale <= this.rc && (this.scale = this.rc, this.cc = 0), this.lc <= 0 && (this.lc = 0))
            }, this.dc = function(e, t, n) {
                e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - n)
            }
        }, e.exports.Jr = function() {
            this.uc = [], this.update = function(e, t, n, i) {
                t.textBaseline = "middle", t.textAlign = "center";
                for (var o = 0; o < this.uc.length; ++o) {
                    this.uc[o].lc && (this.uc[o].update(e), this.uc[o].dc(t, n, i))
                }
            }, this.gr = function(t, n, i, o, a, r, s) {
                for (var c, l = 0; l < this.uc.length; ++l) {
                    if (!this.uc[l].lc) {
                        c = this.uc[l];
                        break
                    }
                }
                c || (c = new e.exports.ac, this.uc.push(c)), c.init(t, n, i, o, a, r, s)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            this.K = e, this.init = function(e, t, n, i, o, a, r) {
                a = a || {}, this.hc = {}, this.fc = [], this.active = !0, this.Qe = a.Qe, this.x = e, this.y = t, this.dir = n, this.Or = 0, this.Ar = 0, this.scale = i, this.type = o, this.id = a.id, this.mc = r, this.name = a.name, this.Ir = null != this.id, this.group = a.group, this.B = a.B, this.Tt = 2, null != this.group ? this.Tt = this.group.Tt : 0 == this.type ? this.Tt = 3 : 2 == this.type ? this.Tt = 0 : 4 == this.type && (this.Tt = -1), this.$e = a.$e || 1, this.et = a.et, this.Le = a.Le, this.gc = a.gc, this.We = a.We, this.wc = a.wc, this.Fe = a.Fe, this.me = a.me, this.ze = a.ze, this.qe = a.qe, this.zIndex = a.zIndex || 0, this.Ue = a.Ue, this.Se = a.Se, this.C = a.C, this.Ze = a.Ze, this.tt = a.tt, this.Xe = a.Xe, this.xe = a.xe, this.Ye = a.Ye, this.Ve = a.Ve, this.yc = this.Ve, this.Je = a.Je
            }, this.Ee = function(e, t) {
                return this.B += e, this.B <= 0
            }, this.kc = function(e, t) {
                return e = e || 1, this.scale * (this.Ir || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.$e)
            }, this.bc = function(e) {
                return !this.We || this.mc && (this.mc == e || this.mc.Ja && e.Ja == this.mc.Ja)
            }, this.update = function(e) {
                this.active && (this.Or && (this.Or *= Math.pow(.99, e)), this.Ar && (this.Ar *= Math.pow(.99, e)), this.Ue && (this.dir += this.Ue * e))
            }
        }
    }, function(e, t) {
        e.exports.groups = [{
            id: 0,
            name: "food",
            Tt: 0
        }, {
            id: 1,
            name: "walls",
            ce: !0,
            Bt: 30,
            Tt: 0
        }, {
            id: 2,
            name: "spikes",
            ce: !0,
            Bt: 15,
            Tt: 0
        }, {
            id: 3,
            name: "mill",
            ce: !0,
            Bt: 7,
            Tt: 1
        }, {
            id: 4,
            name: "mine",
            ce: !0,
            Bt: 1,
            Tt: 0
        }, {
            id: 5,
            name: "trap",
            ce: !0,
            Bt: 6,
            Tt: -1
        }, {
            id: 6,
            name: "booster",
            ce: !0,
            Bt: 12,
            Tt: -1
        }, {
            id: 7,
            name: "turret",
            ce: !0,
            Bt: 2,
            Tt: 1
        }, {
            id: 8,
            name: "watchtower",
            ce: !0,
            Bt: 12,
            Tt: 1
        }, {
            id: 9,
            name: "buff",
            ce: !0,
            Bt: 4,
            Tt: -1
        }, {
            id: 10,
            name: "spawn",
            ce: !0,
            Bt: 1,
            Tt: -1
        }, {
            id: 11,
            name: "sapling",
            ce: !0,
            Bt: 2,
            Tt: 0
        }, {
            id: 12,
            name: "blocker",
            ce: !0,
            Bt: 3,
            Tt: -1
        }, {
            id: 13,
            name: "teleporter",
            ce: !0,
            Bt: 2,
            Tt: -1
        }], t._r = [{
            Nr: 0,
            Tt: 0,
            src: "arrow_1",
            me: 25,
            speed: 1.6,
            scale: 103,
            range: 1e3
        }, {
            Nr: 1,
            Tt: 1,
            me: 25,
            scale: 20
        }, {
            Nr: 0,
            Tt: 0,
            src: "arrow_1",
            me: 35,
            speed: 2.5,
            scale: 103,
            range: 1200
        }, {
            Nr: 0,
            Tt: 0,
            src: "arrow_1",
            me: 30,
            speed: 2,
            scale: 103,
            range: 1200
        }, {
            Nr: 1,
            Tt: 1,
            me: 16,
            scale: 20
        }, {
            Nr: 0,
            Tt: 0,
            src: "bullet_1",
            me: 50,
            speed: 3.6,
            scale: 160,
            range: 1400
        }], t.de = [{
            id: 0,
            type: 0,
            name: "tool hammer",
            ue: "tool for gathering all resources",
            src: "hammer_1",
            length: 140,
            width: 140,
            ge: -3,
            fe: 18,
            me: 25,
            range: 65,
            pe: 1,
            speed: 300
        }, {
            id: 1,
            type: 0,
            m: 2,
            name: "hand axe",
            ue: "gathers resources at a higher rate",
            src: "axe_1",
            length: 140,
            width: 140,
            ge: 3,
            fe: 24,
            me: 30,
            we: 1,
            range: 70,
            pe: 2,
            speed: 400
        }, {
            id: 2,
            type: 0,
            m: 8,
            name: "great axe",
            ue: "deal more damage and gather more resources",
            src: "great_axe_1",
            length: 140,
            width: 140,
            ge: -8,
            fe: 25,
            me: 35,
            we: 1,
            range: 75,
            pe: 4,
            speed: 400
        }, {
            id: 3,
            type: 0,
            m: 2,
            name: "short sword",
            ue: "increased attack power but slower move speed",
            src: "sword_1",
            ke: 1.3,
            length: 130,
            width: 210,
            ge: -8,
            fe: 46,
            me: 35,
            we: .85,
            range: 110,
            pe: 1,
            speed: 300
        }, {
            id: 4,
            type: 0,
            m: 8,
            name: "katana",
            ue: "greater range and damage",
            src: "samurai_1",
            ke: 1.3,
            length: 130,
            width: 210,
            ge: -8,
            fe: 59,
            me: 40,
            we: .8,
            range: 118,
            pe: 1,
            speed: 300
        }, {
            id: 5,
            type: 0,
            m: 2,
            name: "polearm",
            ue: "long range melee weapon",
            src: "spear_1",
            ke: 1.3,
            length: 130,
            width: 210,
            ge: -8,
            fe: 53,
            me: 45,
            be: .2,
            we: .82,
            range: 142,
            pe: 1,
            speed: 700
        }, {
            id: 6,
            type: 0,
            m: 2,
            name: "bat",
            ue: "fast long range melee weapon",
            src: "bat_1",
            ke: 1.3,
            length: 110,
            width: 180,
            ge: -8,
            fe: 53,
            me: 20,
            be: .7,
            range: 110,
            pe: 1,
            speed: 300
        }, {
            id: 7,
            type: 0,
            m: 2,
            name: "daggers",
            ue: "really fast short range weapon",
            src: "dagger_1",
            ke: .8,
            length: 110,
            width: 110,
            ge: 18,
            fe: 0,
            me: 20,
            be: .1,
            range: 65,
            pe: 1,
            ve: .1,
            we: 1.13,
            speed: 100
        }, {
            id: 8,
            type: 0,
            m: 2,
            name: "stick",
            ue: "great for gathering but very weak",
            src: "stick_1",
            length: 140,
            width: 140,
            ge: 3,
            fe: 24,
            me: 1,
            we: 1,
            range: 70,
            pe: 7,
            speed: 400
        }, {
            id: 9,
            type: 1,
            m: 6,
            name: "hunting bow",
            ue: "bow used for ranged combat and hunting",
            src: "bow_1",
            Se: ["wood", 4],
            length: 120,
            width: 120,
            ge: -6,
            fe: 0,
            xe: 0,
            we: .75,
            speed: 600
        }, {
            id: 10,
            type: 1,
            m: 6,
            name: "great hammer",
            ue: "hammer used for destroying structures",
            src: "great_hammer_1",
            length: 140,
            width: 140,
            ge: -9,
            fe: 25,
            me: 10,
            we: .88,
            range: 75,
            Pe: 7.5,
            pe: 1,
            speed: 400
        }, {
            id: 11,
            type: 1,
            m: 6,
            name: "wooden shield",
            ue: "blocks projectiles and reduces melee damage",
            src: "shield_1",
            length: 120,
            width: 120,
            A: .2,
            ge: 6,
            fe: 0,
            we: .7
        }, {
            id: 12,
            type: 1,
            m: 8,
            name: "crossbow",
            ue: "deals more damage and has greater range",
            src: "crossbow_1",
            Se: ["wood", 5],
            Me: !0,
            Te: .75,
            length: 120,
            width: 120,
            ge: -4,
            fe: 0,
            xe: 2,
            we: .7,
            speed: 700
        }, {
            id: 13,
            type: 1,
            m: 9,
            name: "repeater crossbow",
            ue: "high firerate crossbow with reduced damage",
            src: "crossbow_2",
            Se: ["wood", 10],
            Me: !0,
            Te: .75,
            length: 120,
            width: 120,
            ge: -4,
            fe: 0,
            xe: 3,
            we: .7,
            speed: 230
        }, {
            id: 14,
            type: 1,
            m: 6,
            name: "mc grabby",
            ue: "steals resources from enemies",
            src: "grab_1",
            length: 130,
            width: 210,
            ge: -8,
            fe: 53,
            me: 0,
            Be: 250,
            be: .2,
            we: 1.05,
            range: 125,
            pe: 0,
            speed: 700
        }, {
            id: 15,
            type: 1,
            m: 9,
            name: "musket",
            ue: "slow firerate but high damage and range",
            src: "musket_1",
            Se: ["stone", 10],
            Me: !0,
            _e: .35,
            Te: .6,
            Ne: .3,
            Oe: 1.6,
            length: 205,
            width: 205,
            ge: 25,
            fe: 0,
            xe: 5,
            Ae: !0,
            we: .6,
            speed: 1500
        }], e.exports.list = [{
            group: e.exports.groups[0],
            name: "apple",
            ue: "restores 20 health when consumed",
            Se: ["food", 10],
            Ie: function(e) {
                return e.Ee(20, e)
            },
            scale: 22,
            He: 15
        }, {
            m: 3,
            group: e.exports.groups[0],
            name: "cookie",
            ue: "restores 40 health when consumed",
            Se: ["food", 15],
            Ie: function(e) {
                return e.Ee(40, e)
            },
            scale: 27,
            He: 15
        }, {
            m: 7,
            group: e.exports.groups[0],
            name: "cheese",
            ue: "restores 30 health and another 50 over 5 seconds",
            Se: ["food", 25],
            Ie: function(e) {
                return !!(e.Ee(30, e) || e.B < 100) && (e.De.me = -10, e.De.je = e, e.De.time = 5, !0)
            },
            scale: 27,
            He: 15
        }, {
            group: e.exports.groups[1],
            name: "wood wall",
            ue: "provides protection for your village",
            Se: ["wood", 10],
            Fe: !0,
            B: 380,
            scale: 50,
            He: 20,
            Re: -5
        }, {
            m: 3,
            group: e.exports.groups[1],
            name: "stone wall",
            ue: "provides improved protection for your village",
            Se: ["stone", 25],
            B: 900,
            scale: 50,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[1],
            name: "castle wall",
            ue: "provides powerful protection for your village",
            Se: ["stone", 35],
            B: 1500,
            scale: 52,
            He: 20,
            Re: -5
        }, {
            group: e.exports.groups[2],
            name: "spikes",
            ue: "damages enemies when they touch them",
            Se: ["wood", 20, "stone", 5],
            B: 400,
            me: 20,
            scale: 49,
            Ge: -23,
            He: 8,
            Re: -5
        }, {
            m: 5,
            group: e.exports.groups[2],
            name: "greater spikes",
            ue: "damages enemies when they touch them",
            Se: ["wood", 30, "stone", 10],
            B: 500,
            me: 35,
            scale: 52,
            Ge: -23,
            He: 8,
            Re: -5
        }, {
            m: 9,
            group: e.exports.groups[2],
            name: "poison spikes",
            ue: "poisons enemies when they touch them",
            Se: ["wood", 35, "stone", 15],
            B: 600,
            me: 30,
            ze: 5,
            scale: 52,
            Ge: -23,
            He: 8,
            Re: -5
        }, {
            m: 9,
            group: e.exports.groups[2],
            name: "spinning spikes",
            ue: "damages enemies when they touch them",
            Se: ["wood", 30, "stone", 20],
            B: 500,
            me: 45,
            Ue: .003,
            scale: 52,
            Ge: -23,
            He: 8,
            Re: -5
        }, {
            group: e.exports.groups[3],
            name: "windmill",
            ue: "generates gold over time",
            Se: ["wood", 50, "stone", 10],
            B: 400,
            qe: 1,
            Ue: .0016,
            Ge: 25,
            Ke: 12,
            scale: 45,
            He: 20,
            Re: 5
        }, {
            m: 5,
            group: e.exports.groups[3],
            name: "faster windmill",
            ue: "generates more gold over time",
            Se: ["wood", 60, "stone", 20],
            B: 500,
            qe: 1.5,
            Ue: .0025,
            Ge: 25,
            Ke: 12,
            scale: 47,
            He: 20,
            Re: 5
        }, {
            m: 8,
            group: e.exports.groups[3],
            name: "power mill",
            ue: "generates more gold over time",
            Se: ["wood", 100, "stone", 50],
            B: 800,
            qe: 2,
            Ue: .005,
            Ge: 25,
            Ke: 12,
            scale: 47,
            He: 20,
            Re: 5
        }, {
            m: 5,
            group: e.exports.groups[4],
            type: 2,
            name: "mine",
            ue: "allows you to mine stone",
            Se: ["wood", 20, "stone", 100],
            Ke: 12,
            scale: 65,
            He: 20,
            Re: 0
        }, {
            m: 5,
            group: e.exports.groups[11],
            type: 0,
            name: "sapling",
            ue: "allows you to farm wood",
            Se: ["wood", 150],
            Ke: 12,
            $e: .5,
            scale: 110,
            He: 50,
            Re: -15
        }, {
            m: 4,
            group: e.exports.groups[5],
            name: "pit trap",
            ue: "pit that traps enemies if they walk over it",
            Se: ["wood", 10, "stone", 10],
            C: !0,
            Le: !0,
            We: !0,
            B: 500,
            $e: .2,
            scale: 50,
            He: 20,
            Re: -5
        }, {
            m: 4,
            group: e.exports.groups[6],
            name: "boost pad",
            ue: "provides boost when stepped on",
            Se: ["stone", 20, "wood", 5],
            Le: !0,
            Xe: 1.5,
            B: 150,
            $e: .7,
            scale: 45,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[7],
            Qe: !0,
            name: "turret",
            ue: "defensive structure that shoots at enemies",
            Se: ["wood", 200, "stone", 150],
            B: 800,
            xe: 1,
            Ye: 700,
            Ve: 2200,
            scale: 43,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[8],
            name: "platform",
            ue: "platform to shoot over walls and cross over water",
            Se: ["wood", 20],
            Le: !0,
            zIndex: 1,
            B: 300,
            scale: 43,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[9],
            name: "healing pad",
            ue: "standing on it will slowly heal you",
            Se: ["wood", 30, "food", 10],
            Le: !0,
            Ze: 15,
            B: 400,
            $e: .7,
            scale: 45,
            He: 20,
            Re: -5
        }, {
            m: 9,
            group: e.exports.groups[10],
            name: "spawn pad",
            ue: "you will spawn here when you die but it will dissapear",
            Se: ["wood", 100, "stone", 100],
            B: 400,
            Le: !0,
            Je: !0,
            scale: 45,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[12],
            name: "blocker",
            ue: "blocks building in radius",
            Se: ["wood", 30, "stone", 25],
            Le: !0,
            et: 300,
            B: 400,
            $e: .7,
            scale: 45,
            He: 20,
            Re: -5
        }, {
            m: 7,
            group: e.exports.groups[13],
            name: "teleporter",
            ue: "teleports you to a random point on the map",
            Se: ["wood", 60, "stone", 60],
            Le: !0,
            tt: !0,
            B: 200,
            $e: .7,
            scale: 45,
            He: 20,
            Re: -5
        }];
        for (var n = 0; n < e.exports.list.length; ++n) {
            e.exports.list[n].id = n, e.exports.list[n].ye && (e.exports.list[n].ye = n - e.exports.list[n].ye)
        }
    }, function(e, t) {
        e.exports = {}
    }, function(e, t) {
        var n = Math.floor,
            i = Math.abs,
            o = Math.cos,
            a = Math.sin,
            r = (Math.pow, Math.sqrt);
        e.exports = function(e, t, s, c, l, d) {
            var u, h, f, m, p, g;
            this.vc = t, this.Sc = {}, this.xc = [], f = c.wa / c.bo, this.Pc = function(e) {
                var t, n, i, o;
                for (t = Math.min(c.wa, Math.max(0, e.x)), n = Math.min(c.wa, Math.max(0, e.y)), i = 0; i < c.bo; ++i) {
                    for (u = i * f, o = 0; o < c.bo; ++o) {
                        h = o * f, t + e.scale >= u && t - e.scale <= u + f && n + e.scale >= h && n - e.scale <= h + f && (this.Sc[i + "_" + o] || (this.Sc[i + "_" + o] = []), this.Sc[i + "_" + o].push(e), e.fc.push(i + "_" + o))
                    }
                }
            }, this.Cc = function(e) {
                for (var t, n = 0; n < e.fc.length; ++n) {
                    (t = this.Sc[e.fc[n]].indexOf(e)) >= 0 && this.Sc[e.fc[n]].splice(t, 1)
                }
            }, this.Mc = function(e) {
                if (e.active = !1, d) {
                    e.mc && e.qe && (e.mc.qe -= e.qe), this.Cc(e);
                    var t = this.xc.indexOf(e);
                    t >= 0 && this.xc.splice(t, 1)
                }
            }, this.Tc = function(e, t) {
                for (var n = 0; n < l.length; ++n) {
                    l[n].active && (e.hc[l[n].id] && (e.active ? l[n].Bc(e) && d.send(l[n].id, "8", s.pr(t, 1), e.K) : d.send(l[n].id, "12", e.K)), e.active || e.mc != l[n] || l[n]._c(e.group.id, -1))
                }
            }, g = [], this.Nc = function(e, t, i) {
                u = n(e / f), h = n(t / f), g.length = 0;
                try {
                    this.Sc[u + "_" + h] && g.push(this.Sc[u + "_" + h]), e + i >= (u + 1) * f && ((m = this.Sc[u + 1 + "_" + h]) && g.push(m), h && t - i <= h * f ? (m = this.Sc[u + 1 + "_" + (h - 1)]) && g.push(m) : t + i >= (h + 1) * f && (m = this.Sc[u + 1 + "_" + (h + 1)]) && g.push(m)), u && e - i <= u * f && ((m = this.Sc[u - 1 + "_" + h]) && g.push(m), h && t - i <= h * f ? (m = this.Sc[u - 1 + "_" + (h - 1)]) && g.push(m) : t + i >= (h + 1) * f && (m = this.Sc[u - 1 + "_" + (h + 1)]) && g.push(m)), t + i >= (h + 1) * f && (m = this.Sc[u + "_" + (h + 1)]) && g.push(m), h && t - i <= h * f && (m = this.Sc[u + "_" + (h - 1)]) && g.push(m)
                } catch (e) {}
                return g
            }, this.add = function(n, i, o, a, r, s, c, l, u) {
                p = null;
                for (var h = 0; h < t.length; ++h) {
                    if (t[h].K == n) {
                        p = t[h];
                        break
                    }
                }
                if (!p) {
                    for (h = 0; h < t.length; ++h) {
                        if (!t[h].active) {
                            p = t[h];
                            break
                        }
                    }
                }
                p || (p = new e(n), t.push(p)), l && (p.K = n), p.init(i, o, a, r, s, c, u), d && (this.Pc(p), p.Qe && this.xc.push(p))
            }, this.yr = function(e) {
                for (var n = 0; n < t.length; ++n) {
                    if (t[n].K == e) {
                        this.Mc(t[n]);
                        break
                    }
                }
            }, this.wr = function(e, n) {
                for (var i = 0; i < t.length; ++i) {
                    t[i].active && t[i].mc && t[i].mc.K == e && this.Mc(t[i])
                }
                n && n.broadcast("13", e)
            }, this.Oc = function(e) {
                for (var n = null, i = 0; i < t.length; ++i) {
                    if ((p = t[i]).active && p.mc && p.mc.K == e && p.Je) {
                        n = [p.x, p.y], this.Mc(p), d.broadcast("12", p.K), p.mc && p.mc._c(p.group.id, -1);
                        break
                    }
                }
                return n
            }, this.Ac = function(e, n, i, o, a, r, l) {
                var d, u;
                for (d = 0; d < t.length; ++d) {
                    if (u = t[d].et ? t[d].et : t[d].kc(o, t[d].Ir), t[d].active && s.cn(e, n, t[d].x, t[d].y) < i + u) {
                        return !1
                    }
                }
                return !(!r && 18 != a && n >= c.wa / 2 - c.ra / 2 && n <= c.wa / 2 + c.ra / 2)
            }, this.zr = function(e, t, n, i, o) {
                for (var a, r = items._r[o], c = 0; c < projectiles.length; ++c) {
                    if (!projectiles[c].active) {
                        a = projectiles[c];
                        break
                    }
                }
                a || (a = new Projectile(l, s), projectiles.push(a)), a.init(o, e, t, n, r.speed, i, r.scale)
            }, this.Ic = function(e, t, n) {
                var l, d, u, h, f, m;
                return n = n || 1, l = e.x - t.x, d = e.y - t.y, u = e.scale + t.scale, (i(l) <= u || i(d) <= u) && (u = e.scale + (t.kc ? t.kc() : t.scale), (h = r(l * l + d * d) - u) <= 0) && (t.Le ? !t.C || e.Ec || t.mc == e || t.mc && t.mc.Ja && t.mc.Ja == e.Ja ? t.Xe ? (e.Hc += n * t.Xe * (t.Dc || 1) * o(t.dir), e.jc += n * t.Xe * (t.Dc || 1) * a(t.dir)) : t.Ze ? e.Ze = t.Ze : t.tt && (e.x = s.Gr(0, c.wa), e.y = s.Gr(0, c.wa)) : (e.Fc = !0, t.We = !1) : (f = s.os(e.x, e.y, t.x, t.y), s.cn(e.x, e.y, t.x, t.y), t.ls ? (h = -1 * h / 2, e.x += h * o(f), e.y += h * a(f), t.x -= h * o(f), t.y -= h * a(f)) : (e.x = t.x + u * o(f), e.y = t.y + u * a(f), e.Hc *= .75, e.jc *= .75), !t.me || t.mc == e || t.mc && t.mc.Ja && t.mc.Ja == e.Ja || (e.Ee(-t.me, t.mc, t), m = 1.5 * (t.Dc || 1), e.Hc += m * o(f), e.jc += m * a(f), !t.ze || e.v && e.v.dt || (e.De.me = t.ze, e.De.time = 5, e.De.je = t.mc), e.Rc && t.B && (t.Ee(-e.Rc) && this.Mc(t), this.Tc(t, s.os(e.x, e.y, t.x, t.y))))), t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0)
            }
        }
    }, function(e, t, n) {
        var i, o, a, r, s, c = new(n(49));
        c.Gc("jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa"), i = Math.abs, o = Math.cos, a = Math.sin, r = Math.pow, s = Math.sqrt, e.exports = function(e, t, n, l, d, u, h, f, m, p, g, w, y, k) {
            var b, v, S, x;
            for (this.id = e, this.K = t, this.zc = 0, this.Ja = null, this.ar = 0, this.nr = 0, this.J = 0, this.ir = {}, b = 0; b < g.length; ++b) {
                g[b].F <= 0 && (this.ir[g[b].id] = 1)
            }
            for (this.rr = {}, b = 0; b < p.length; ++b) {
                p[b].F <= 0 && (this.rr[p[b].id] = 1)
            }
            this.points = 0, this.Wr = 0, this.hidden = !1, this.Va = {}, this.ls = !0, this.qe = 0, this.Uc = void 0, this.Hr = 0, this.qc = 0, this.Vr = 0, this.Fr = 0, this.Xr = function(e) {
                this.active = !0, this.tr = !0, this.Fc = !1, this.mr = !1, this.Kc = 0, this._o = 0, this._ = 0, this.N = 0, this.hc = {}, this.$c = 0, this.Lc = 0, this.Wc = 0, this.Xc = 0, this.Qc = 0, this.cr = -1, this.Jo = 0, this.De = {}, this.Yc = 0, this.Tr = 300, this.Mr = 0, this.m = 1, this.Sr = 0, this.Cr = 2, this.Pr = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.Hc = 0, this.jc = 0, this.Vc = 1, this.dir = 0, this.Dr = 0, this.Zc = 0, this.Jc = 0, this.X = 100, this.B = this.X, this.scale = n.Ro, this.speed = n.Go, this.el(), this.tl(e), this.items = [0, 3, 6, 10], this.de = [0], this.yc = 0, this.Zo = [], this.nl = {}
            }, this.el = function() {
                this.Uc = void 0
            }, this.tl = function(e) {
                for (var t = 0; t < n.ea.length; ++t) {
                    this[n.ea[t]] = e ? 100 : 0
                }
            }, this.il = function(e) {
                var t, n = m.list[e];
                if (n) {
                    for (t = 0; t < this.items.length; ++t) {
                        if (m.list[this.items[t]].group == n.group) {
                            return this.cr == this.items[t] && (this.cr = e), this.items[t] = e, !0
                        }
                    }
                    return this.items.push(e), !0
                }
                return !1
            }, this.ol = function(e) {
                var t, i, o, a;
                if (e) {
                    for (a of(this.name = "unknown", i = !1, o = (t = (t = (t = (t = (t = e.name + "").slice(0, n.ga)).replace(/[^\w:\(\)\/? -]+/gim, " ")).replace(/[^\x00-\x7F]/g, " ")).trim()).toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s"), c.list)) {
                        if (-1 != o.indexOf(a)) {
                            i = !0;
                            break
                        }
                    }
                    t.length > 0 && !i && (this.name = t), this.Fr = 0, n.qo[e.v] && (this.Fr = e.v)
                }
            }, this.getData = function() {
                return [this.id, this.K, this.name, l.pr(this.x, 2), l.pr(this.y, 2), l.pr(this.dir, 3), this.B, this.X, this.scale, this.Fr]
            }, this.setData = function(e) {
                this.id = e[0], this.K = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.B = e[6], this.X = e[7], this.scale = e[8], this.Fr = e[9]
            }, v = 0, this.update = function(e) {
                var t, i, c, f, p, g, w, y, k, b, S, x, P, C, M, T;
                if (this.tr && (this.N > 0 && (this.N -= e, this.N <= 0 && (this.N = 0, this._ = 0)), (v -= e) <= 0 && ((t = (this.v && this.v.nt ? this.v.nt : 0) + (this.Z && this.Z.nt ? this.Z.nt : 0)) && this.Ee(t, this), this.De.me && (this.Ee(-this.De.me, this.De.je), this.De.time -= 1, this.De.time <= 0 && (this.De.me = 0)), this.Ze && this.Ee(this.Ze, this), v = 1e3), this.tr)) {
                    for (this.Vc < 1 && (this.Vc += 8e-4 * e, this.Vc > 1 && (this.Vc = 1)), this.Yc += e, (this.Hc || this.jc) && (this.Yc = 0), this.Fc ? (this.Hc = 0, this.jc = 0) : (i = (this.cr >= 0 ? .5 : 1) * (m.de[this.Jo].we || 1) * (this.v && this.v.we || 1) * (this.Z && this.Z.we || 1) * (this.y <= n.ma ? this.v && this.v.st ? 1 : n.pa : 1) * this.Vc, !this.zIndex && this.y >= n.wa / 2 - n.ra / 2 && this.y <= n.wa / 2 + n.ra / 2 && (this.v && this.v.ct ? (i *= .75, this.Hc += .4 * n.ca * e) : (i *= .33, this.Hc += n.ca * e)), c = null != this.Uc ? o(this.Uc) : 0, f = null != this.Uc ? a(this.Uc) : 0, 0 != (p = s(c * c + f * f)) && (c /= p, f /= p), c && (this.Hc += c * this.speed * i * e), f && (this.jc += f * this.speed * i * e)), this.zIndex = 0, this.Fc = !1, this.Ze = 0, w = l.cn(0, 0, this.Hc * e, this.jc * e), k = 1 / (y = Math.min(4, Math.max(1, Math.round(w / 40)))), b = 0; b < y; ++b) {
                        for (this.Hc && (this.x += this.Hc * e * k), this.jc && (this.y += this.jc * e * k), g = u.Nc(this.x, this.y, this.scale), S = 0; S < g.length; ++S) {
                            for (x = 0; x < g[S].length; ++x) {
                                g[S][x].active && u.Ic(this, g[S][x], k)
                            }
                        }
                    }
                    for (b = (C = h.indexOf(this)) + 1; b < h.length; ++b) {
                        h[b] != this && h[b].tr && u.Ic(this, h[b])
                    }
                    this.Hc && (this.Hc *= r(n.zo, e), this.Hc <= .01 && this.Hc >= -.01 && (this.Hc = 0)), this.jc && (this.jc *= r(n.zo, e), this.jc <= .01 && this.jc >= -.01 && (this.jc = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > n.wa && (this.x = n.wa - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > n.wa && (this.y = n.wa - this.scale), this.cr < 0 && (this.nl[this.Jo] > 0 ? (this.nl[this.Jo] -= e, this.$c = this.Qc) : (this.$c || this.Lc) && (P = !0, null != m.de[this.Jo].pe ? this.pe(h) : null != m.de[this.Jo].xe && this.al(m.de[this.Jo], this.v ? this.v.ht : 0) ? (this.rl(m.de[this.Jo], this.v ? this.v.ht : 0), this.Yc = 0, C = m.de[this.Jo].xe, M = 2 * this.scale, T = this.v && this.v.lt ? this.v.lt : 1, m.de[this.Jo]._e && (this.Hc -= m.de[this.Jo]._e * o(this.dir), this.jc -= m.de[this.Jo]._e * a(this.dir)), d.zr(this.x + M * o(this.dir), this.y + M * a(this.dir), this.dir, m._r[C].range * T, m._r[C].speed * T, C, this, null, this.zIndex)) : P = !1, this.$c = this.Qc, P && (this.nl[this.Jo] = m.de[this.Jo].speed * (this.v && this.v.xt || 1))))
                }
            }, this.sl = function(e) {
                this.Zo[this.Jo] || (this.Zo[this.Jo] = 0), this.Zo[this.Jo] += e
            }, this.cl = function(e) {
                this.m < n.Eo && (this.Mr += e, this.Mr >= this.Tr ? (this.m < n.Eo ? (this.m++, this.Mr = 0, this.Tr *= 1.2) : this.Mr = this.Tr, this.Pr++, w.send(this.id, "16", this.Pr, this.Cr), w.send(this.id, "15", this.Mr, l.pr(this.Tr, 1), this.m)) : w.send(this.id, "15", this.Mr))
            }, this.Ee = function(e, t) {
                if (e > 0 && this.B >= this.X) {
                    return !1
                }
                e < 0 && this.v && (e *= this.v.V || 1), e < 0 && this.Z && (e *= this.Z.V || 1), e < 0 && (this.J = Date.now()), this.B += e, this.B > this.X && (e -= this.B - this.X, this.B = this.X), this.B <= 0 && this.ll(t);
                for (var n = 0; n < h.length; ++n) {
                    this.hc[h[n].id] && w.send(h[n].id, "h", this.K, Math.round(this.B))
                }
                return !t || !t.Bc(this) || t == this && e < 0 || w.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0
            }, this.ll = function(e) {
                e && e.tr && (e.Sr++, e.v && e.v.Mt ? y(e, Math.round(this.points / 2)) : y(e, Math.round(100 * this.m * (e.v && e.v.Pt ? e.v.Pt : 1))), w.send(e.id, "9", "kills", e.Sr, 1)), this.tr = !1, w.send(this.id, "11"), k()
            }, this.dl = function(e, t, i) {
                !i && t > 0 && this.sl(t), 3 == e ? y(this, t, !0) : (this[n.ea[e]] += t, w.send(this.id, "9", n.ea[e], this[n.ea[e]], 1))
            }, this._c = function(e, t) {
                this.Va[e] = this.Va[e] || 0, this.Va[e] += t, w.send(this.id, "14", e, this.Va[e])
            }, this.ul = function(e) {
                var t, n, i = this.scale + e.scale + (e.Re || 0),
                    r = this.x + i * o(this.dir),
                    s = this.y + i * a(this.dir);
                !this.hl(e) || e.Ie && this.v && this.v.fl || !e.Ie && !u.Ac(r, s, e.scale, .6, e.id, !1, this) || (t = !1, e.Ie ? (this.J && (n = Date.now() - this.J, this.J = 0, n <= 120 ? (this._++, this._ >= 8 && (this.N = 3e4, this._ = 0)) : (this._ -= 2, this._ <= 0 && (this._ = 0))), this.N <= 0 && (t = e.Ie(this))) : (t = !0, e.group.Bt && this._c(e.group.id, 1), e.qe && (this.qe += e.qe), u.add(u.vc.length, r, s, this.dir, e.scale, e.type, e, !1, this)), t && (this.rl(e), this.cr = -1))
            }, this.al = function(e, t) {
                for (var n = 0; n < e.Se.length;) {
                    if (this[e.Se[n]] < Math.round(e.Se[n + 1] * (t || 1))) {
                        return !1
                    }
                    n += 2
                }
                return !0
            }, this.rl = function(e, t) {
                if (!n.Oo) {
                    for (var i = 0; i < e.Se.length;) {
                        this.dl(n.ea.indexOf(e.Se[i]), -Math.round(e.Se[i + 1] * (t || 1))), i += 2
                    }
                }
            }, this.hl = function(e) {
                return !!n.Oo || !(e.group.Bt && this.Va[e.group.id] >= e.group.Bt) && this.al(e)
            }, this.pe = function() {
                var e, t, i, r, s, c, d, p, g, w, y, k, b, v, S, x;
                for (this.Yc = 0, this.Vc -= m.de[this.Jo].ve || .3, this.Vc < 0 && (this.Vc = 0), s = (r = n.Vo(this)).Yo, c = r.ln, d = {}, p = u.Nc(this.x, this.y, m.de[this.Jo].range), g = 0; g < p.length; ++g) {
                    for (w = 0; w < p[g].length; ++w) {
                        if ((t = p[g][w]).active && !t.gc && !d[t.K] && t.bc(this) && l.cn(this.x, this.y, t.x, t.y) - t.scale <= m.de[this.Jo].range && (e = l.os(t.x, t.y, this.x, this.y), l.Qs(e, this.dir) <= n.Ho)) {
                            if (d[t.K] = 1, t.B) {
                                if (t.Ee(-m.de[this.Jo].me * c * (m.de[this.Jo].Pe || 1) * (this.v && this.v.Ct ? this.v.Ct : 1), this)) {
                                    for (y = 0; y < t.Se.length;) {
                                        this.dl(n.ea.indexOf(t.Se[y]), t.Se[y + 1]), y += 2
                                    }
                                    u.Mc(t)
                                }
                            } else {
                                this.cl(4 * m.de[this.Jo].pe), k = m.de[this.Jo].pe + (3 == t.type ? 4 : 0), this.v && this.v.ut && this.dl(3, 1), this.dl(t.type, k)
                            }
                            i = !0, u.Tc(t, e)
                        }
                    }
                }
                for (w = 0; w < h.length + f.length; ++w) {
                    (t = h[w] || f[w - h.length]) != this && t.tr && (!t.Ja || t.Ja != this.Ja) && l.cn(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= m.de[this.Jo].range && (e = l.os(t.x, t.y, this.x, this.y), l.Qs(e, this.dir) <= n.Ho) && ((b = m.de[this.Jo].Be) && t.dl && (b = Math.min(t.points || 0, b), this.dl(3, b), t.dl(3, -b)), v = c, null != t.Jo && m.de[t.Jo].A && l.Qs(e + Math.PI, t.dir) <= n.Wo && (v = m.de[t.Jo].A), S = m.de[this.Jo].me * (this.v && this.v.W ? this.v.W : 1) * (this.Z && this.Z.W ? this.Z.W : 1), x = .3 * (t.Dc || 1) + (m.de[this.Jo].be || 0), t.Hc += x * o(e), t.jc += x * a(e), this.v && this.v.ot && this.Ee(S * v * this.v.ot, this), this.Z && this.Z.ot && this.Ee(S * v * this.Z.ot, this), t.v && t.v.me && 1 == v && this.Ee(-S * t.v.me, t), t.Z && t.Z.me && 1 == v && this.Ee(-S * t.Z.me, t), !(t.De && this.v && this.v.wt) || t.v && t.v.dt || (t.De.me = this.v.wt, t.De.time = this.v.yt || 1, t.De.je = this), !t.De || !s || t.v && t.v.dt || (t.De.me = 5, t.De.time = 5, t.De.je = this), t.v && t.v.gt && (this.Hc -= t.v.gt * o(e), this.jc -= t.v.gt * a(e)), t.Ee(-S * v, this, this))
                }
                this.ml(i ? 1 : 0)
            }, this.ml = function(e) {
                for (var t = 0; t < h.length; ++t) {
                    this.hc[h[t].id] && this.Bc(h[t]) && w.send(h[t].id, "7", this.K, e ? 1 : 0, this.Jo)
                }
            }, S = 0, x = 0, this.animate = function(e) {
                this.Wc > 0 && (this.Wc -= e, this.Wc <= 0 ? (this.Wc = 0, this.Dr = 0, S = 0, x = 0) : 0 == x ? (S += e / (this.Xc * n.jo), this.Dr = l.Ws(0, this.Jc, Math.min(1, S)), S >= 1 && (S = 1, x = 1)) : (S -= e / (this.Xc * (1 - n.jo)), this.Dr = l.Ws(0, this.Jc, Math.max(0, S))))
            }, this.Er = function(e, t) {
                this.Wc = this.Xc = m.de[t].speed, this.Jc = e ? -n.Fo : -Math.PI, S = 0, x = 0
            }, this.Bc = function(e) {
                if (!e) {
                    return !1
                }
                if (e.v && e.v.pl && e.Yc >= e.v.pl) {
                    return !1
                }
                var t = i(e.x - this.x) - e.scale,
                    o = i(e.y - this.y) - e.scale;
                return t <= n.ho / 2 * 1.3 && o <= n.fo / 2 * 1.3
            }
        }
    }, function(e, t, n) {
        const i = n(50).gl,
            o = n(51).ro;
        e.exports = class {
            constructor(e = {}) {
                Object.assign(this, {
                    list: e.wl && [] || Array.prototype.concat.apply(i, [o, e.list || []]),
                    yl: e.yl || [],
                    kl: e.kl || "*",
                    bl: e.bl || /[^a-zA-Z0-9|\$|\@]|\^/g,
                    vl: e.vl || /\w/g
                })
            }
            Sl(e) {
                return this.list.filter((t => {
                    const n = new RegExp(`\\b${t.replace(/(\W)/g,"\\$1")}\\b`, "gi");
                    return !this.yl.includes(t.toLowerCase()) && n.test(e)
                })).length > 0 || !1
            }
            xl(e) {
                return e.replace(this.bl, "").replace(this.vl, this.kl)
            }
            Pl(e) {
                return e.split(/\b/).map((e => this.Sl(e) ? this.xl(e) : e)).join("")
            }
            Gc() {
                let e = Array.from(arguments);
                this.list.push(...e), e.map((e => e.toLowerCase())).forEach((e => {
                    this.yl.includes(e) && this.yl.splice(this.yl.indexOf(e), 1)
                }))
            }
            Cl() {
                this.yl.push(...Array.from(arguments).map((e => e.toLowerCase())))
            }
        }
    }, function(e) {
        e.exports = {
            gl: ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "queer", "queers", "queerz", "qweers", "qweerz", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "lesbian", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]
        }
    }, function(e, t, n) {
        e.exports = {
            object: n(52),
            ro: n(53),
            bl: n(54)
        }
    }, function(e, t) {
        e.exports = {
            "4r5e": 1,
            "5h1t": 1,
            "5hit": 1,
            Ml: 1,
            Tl: 1,
            Bl: 1,
            _l: 1,
            Nl: 1,
            Ol: 1,
            Al: 1,
            "ass-fucker": 1,
            Il: 1,
            El: 1,
            Hl: 1,
            Dl: 1,
            jl: 1,
            Fl: 1,
            Rl: 1,
            "b!tch": 1,
            Gl: 1,
            zl: 1,
            Ul: 1,
            ql: 1,
            Kl: 1,
            $l: 1,
            Ll: 1,
            Wl: 1,
            Xl: 1,
            Ql: 1,
            Yl: 1,
            Vl: 1,
            "bi+ch": 1,
            Zl: 1,
            Jl: 1,
            ed: 1,
            td: 1,
            nd: 1,
            od: 1,
            ad: 1,
            rd: 1,
            "blow job": 1,
            sd: 1,
            ld: 1,
            dd: 1,
            ud: 1,
            hd: 1,
            fd: 1,
            md: 1,
            pd: 1,
            gd: 1,
            wd: 1,
            yd: 1,
            kd: 1,
            bd: 1,
            vd: 1,
            Sd: 1,
            xd: 1,
            "bunny fucker": 1,
            Pd: 1,
            Cd: 1,
            Md: 1,
            Td: 1,
            Bd: 1,
            _d: 1,
            "carpet muncher": 1,
            Nd: 1,
            Od: 1,
            Ad: 1,
            Id: 1,
            Ed: 1,
            Hd: 1,
            Dd: 1,
            jd: 1,
            Fd: 1,
            "cock-sucker": 1,
            Rd: 1,
            Gd: 1,
            zd: 1,
            Ud: 1,
            qd: 1,
            Kd: 1,
            $d: 1,
            Ld: 1,
            Wd: 1,
            Xd: 1,
            Qd: 1,
            Yd: 1,
            Vd: 1,
            Zd: 1,
            Jd: 1,
            eu: 1,
            tu: 1,
            nu: 1,
            iu: 1,
            ou: 1,
            au: 1,
            ru: 1,
            su: 1,
            cu: 1,
            lu: 1,
            du: 1,
            uu: 1,
            hu: 1,
            fu: 1,
            mu: 1,
            pu: 1,
            gu: 1,
            wu: 1,
            yu: 1,
            ku: 1,
            bu: 1,
            vu: 1,
            Su: 1,
            xu: 1,
            Pu: 1,
            Cu: 1,
            Mu: 1,
            Tu: 1,
            Bu: 1,
            _u: 1,
            Nu: 1,
            Ou: 1,
            Au: 1,
            "dog-fucker": 1,
            Iu: 1,
            Eu: 1,
            Hu: 1,
            Du: 1,
            ju: 1,
            Fu: 1,
            Ru: 1,
            Gu: 1,
            zu: 1,
            Uu: 1,
            qu: 1,
            Ku: 1,
            $u: 1,
            "f u c k": 1,
            "f u c k e r": 1,
            Lu: 1,
            Wu: 1,
            Xu: 1,
            Qu: 1,
            Yu: 1,
            Vu: 1,
            Zu: 1,
            Ju: 1,
            eh: 1,
            th: 1,
            nh: 1,
            ih: 1,
            oh: 1,
            ah: 1,
            rh: 1,
            sh: 1,
            dh: 1,
            uh: 1,
            hh: 1,
            fh: 1,
            mh: 1,
            ph: 1,
            gh: 1,
            wh: 1,
            yh: 1,
            kh: 1,
            bh: 1,
            Sh: 1,
            xh: 1,
            Ph: 1,
            Ch: 1,
            Mh: 1,
            Th: 1,
            Bh: 1,
            _h: 1,
            Nh: 1,
            Oh: 1,
            Ah: 1,
            Ih: 1,
            Eh: 1,
            Hh: 1,
            Dh: 1,
            jh: 1,
            Fh: 1,
            Rh: 1,
            Gh: 1,
            zh: 1,
            Uh: 1,
            qh: 1,
            Kh: 1,
            $h: 1,
            Lh: 1,
            Wh: 1,
            "fudge packer": 1,
            Xh: 1,
            Qh: 1,
            Yh: 1,
            Vh: 1,
            Zh: 1,
            Jh: 1,
            ef: 1,
            tf: 1,
            nf: 1,
            "if": 1,
            af: 1,
            rf: 1,
            sf: 1,
            cf: 1,
            lf: 1,
            df: 1,
            uf: 1,
            hf: 1,
            "god-dam": 1,
            "god-damned": 1,
            ff: 1,
            mf: 1,
            pf: 1,
            gf: 1,
            wf: 1,
            yf: 1,
            kf: 1,
            bf: 1,
            vf: 1,
            Sf: 1,
            xf: 1,
            Pf: 1,
            Cf: 1,
            "jack-off": 1,
            Mf: 1,
            Tf: 1,
            "jerk-off": 1,
            Bf: 1,
            _f: 1,
            Nf: 1,
            Of: 1,
            Af: 1,
            If: 1,
            Ef: 1,
            Hf: 1,
            Df: 1,
            jf: 1,
            Ff: 1,
            Rf: 1,
            Gf: 1,
            zf: 1,
            Uf: 1,
            qf: 1,
            Kf: 1,
            $f: 1,
            Lf: 1,
            Wf: 1,
            "l3i+ch": 1,
            Xf: 1,
            Qf: 1,
            Yf: 1,
            Vf: 1,
            Zf: 1,
            Jf: 1,
            tm: 1,
            nm: 1,
            im: 1,
            om: 1,
            "master-bate": 1,
            am: 1,
            "masterbat*": 1,
            rm: 1,
            sm: 1,
            lm: 1,
            dm: 1,
            um: 1,
            "mo-fo": 1,
            hm: 1,
            fm: 1,
            pm: 1,
            gm: 1,
            wm: 1,
            ym: 1,
            km: 1,
            bm: 1,
            vm: 1,
            Sm: 1,
            xm: 1,
            Pm: 1,
            Cm: 1,
            "mother fucker": 1,
            Mm: 1,
            Tm: 1,
            Bm: 1,
            _m: 1,
            Nm: 1,
            Om: 1,
            Am: 1,
            Im: 1,
            Em: 1,
            Hm: 1,
            Dm: 1,
            jm: 1,
            Fm: 1,
            Rm: 1,
            Gm: 1,
            zm: 1,
            Um: 1,
            qm: 1,
            Km: 1,
            $m: 1,
            Lm: 1,
            Wm: 1,
            Xm: 1,
            Qm: 1,
            Ym: 1,
            Vm: 1,
            Zm: 1,
            "nob jokey": 1,
            Jm: 1,
            ep: 1,
            tp: 1,
            np: 1,
            ip: 1,
            op: 1,
            ap: 1,
            rp: 1,
            sp: 1,
            cp: 1,
            lp: 1,
            dp: 1,
            up: 1,
            hp: 1,
            fp: 1,
            mp: 1,
            pp: 1,
            gp: 1,
            wp: 1,
            yp: 1,
            kp: 1,
            bp: 1,
            vp: 1,
            Sp: 1,
            xp: 1,
            Pp: 1,
            Cp: 1,
            Mp: 1,
            Tp: 1,
            Bp: 1,
            _p: 1,
            Np: 1,
            Op: 1,
            Ap: 1,
            Ip: 1,
            Ep: 1,
            Hp: 1,
            Dp: 1,
            jp: 1,
            Fp: 1,
            Rp: 1,
            Gp: 1,
            zp: 1,
            Up: 1,
            qp: 1,
            Kp: 1,
            $p: 1,
            Lp: 1,
            Wp: 1,
            Xp: 1,
            Qp: 1,
            Yp: 1,
            "s hit": 1,
            "s.o.b.": 1,
            Vp: 1,
            Zp: 1,
            Jp: 1,
            eg: 1,
            tg: 1,
            ng: 1,
            ig: 1,
            sex: 1,
            "sh!+": 1,
            "sh!t": 1,
            og: 1,
            ag: 1,
            rg: 1,
            sg: 1,
            cg: 1,
            lg: 1,
            "shi+": 1,
            dg: 1,
            ug: 1,
            hg: 1,
            fg: 1,
            mg: 1,
            pg: 1,
            gg: 1,
            wg: 1,
            yg: 1,
            kg: 1,
            bg: 1,
            vg: 1,
            Sg: 1,
            xg: 1,
            Pg: 1,
            Cg: 1,
            Mg: 1,
            Tg: 1,
            Bg: 1,
            _g: 1,
            Ng: 1,
            Og: 1,
            Ag: 1,
            "son-of-a-bitch": 1,
            Ig: 1,
            Eg: 1,
            Hg: 1,
            Dg: 1,
            jg: 1,
            Fg: 1,
            Rg: 1,
            Gg: 1,
            zg: 1,
            Ug: 1,
            qg: 1,
            Kg: 1,
            $g: 1,
            Lg: 1,
            Wg: 1,
            Xg: 1,
            Qg: 1,
            Yg: 1,
            Vg: 1,
            Zg: 1,
            Jg: 1,
            ew: 1,
            tw: 1,
            nw: 1,
            iw: 1,
            ow: 1,
            aw: 1,
            rw: 1,
            sw: 1,
            cw: 1,
            lw: 1,
            dw: 1,
            uw: 1,
            hw: 1,
            fw: 1,
            mw: 1,
            pw: 1,
            gw: 1,
            ww: 1,
            yw: 1,
            kw: 1,
            bw: 1,
            Sw: 1
        }
    }, function(e, t) {
        e.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"]
    }, function(e, t) {
        e.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
    }, function(e, t) {
        e.exports.I = [{
            id: 45,
            name: "Shame!",
            rt: !0,
            F: 0,
            scale: 120,
            ue: "hacks are for losers"
        }, {
            id: 51,
            name: "Moo Cap",
            F: 0,
            scale: 120,
            ue: "coolest mooer around"
        }, {
            id: 50,
            name: "Apple Cap",
            F: 0,
            scale: 120,
            ue: "apple farms remembers"
        }, {
            id: 28,
            name: "Moo Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 29,
            name: "Pig Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 30,
            name: "Fluff Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 36,
            name: "Pandou Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 37,
            name: "Bear Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 38,
            name: "Monkey Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 44,
            name: "Polar Head",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 35,
            name: "Fez Hat",
            F: 0,
            scale: 120,
            ue: "no effect"
        }, {
            id: 42,
            name: "Enigma Hat",
            F: 0,
            scale: 120,
            ue: "join the enigma army"
        }, {
            id: 43,
            name: "Blitz Hat",
            F: 0,
            scale: 120,
            ue: "hey everybody i'm blitz"
        }, {
            id: 49,
            name: "Bob XIII Hat",
            F: 0,
            scale: 120,
            ue: "like and subscribe"
        }, {
            id: 57,
            name: "Pumpkin",
            F: 50,
            scale: 120,
            ue: "Spooooky"
        }, {
            id: 8,
            name: "Bummle Hat",
            F: 100,
            scale: 120,
            ue: "no effect"
        }, {
            id: 2,
            name: "Straw Hat",
            F: 500,
            scale: 120,
            ue: "no effect"
        }, {
            id: 15,
            name: "Winter Cap",
            F: 600,
            scale: 120,
            ue: "allows you to move at normal speed in snow",
            st: 1
        }, {
            id: 5,
            name: "Cowboy Hat",
            F: 1e3,
            scale: 120,
            ue: "no effect"
        }, {
            id: 4,
            name: "Ranger Hat",
            F: 2e3,
            scale: 120,
            ue: "no effect"
        }, {
            id: 18,
            name: "Explorer Hat",
            F: 2e3,
            scale: 120,
            ue: "no effect"
        }, {
            id: 31,
            name: "Flipper Hat",
            F: 2500,
            scale: 120,
            ue: "have more control while in water",
            ct: !0
        }, {
            id: 1,
            name: "Marksman Cap",
            F: 3e3,
            scale: 120,
            ue: "increases arrow speed and range",
            lt: 1.3
        }, {
            id: 10,
            name: "Bush Gear",
            F: 3e3,
            scale: 160,
            ue: "allows you to disguise yourself as a bush"
        }, {
            id: 48,
            name: "Halo",
            F: 3e3,
            scale: 120,
            ue: "no effect"
        }, {
            id: 6,
            name: "Soldier Helmet",
            F: 4e3,
            scale: 120,
            ue: "reduces damage taken but slows movement",
            we: .94,
            V: .75
        }, {
            id: 23,
            name: "Anti Venom Gear",
            F: 4e3,
            scale: 120,
            ue: "makes you immune to poison",
            dt: 1
        }, {
            id: 13,
            name: "Medic Gear",
            F: 5e3,
            scale: 110,
            ue: "slowly regenerates health over time",
            nt: 3
        }, {
            id: 9,
            name: "Miners Helmet",
            F: 5e3,
            scale: 120,
            ue: "earn 1 extra gold per resource",
            ut: 1
        }, {
            id: 32,
            name: "Musketeer Hat",
            F: 5e3,
            scale: 120,
            ue: "reduces cost of projectiles",
            ht: .5
        }, {
            id: 7,
            name: "Bull Helmet",
            F: 6e3,
            scale: 120,
            ue: "increases damage done but drains health",
            nt: -5,
            W: 1.5,
            we: .96
        }, {
            id: 22,
            name: "Emp Helmet",
            F: 6e3,
            scale: 120,
            ue: "turrets won't attack but you move slower",
            ft: 1,
            we: .7
        }, {
            id: 12,
            name: "Booster Hat",
            F: 6e3,
            scale: 120,
            ue: "increases your movement speed",
            we: 1.16
        }, {
            id: 26,
            name: "Barbarian Armor",
            F: 8e3,
            scale: 120,
            ue: "knocks back enemies that attack you",
            gt: .6
        }, {
            id: 21,
            name: "Plague Mask",
            F: 1e4,
            scale: 120,
            ue: "melee attacks deal poison damage",
            wt: 5,
            yt: 6
        }, {
            id: 46,
            name: "Bull Mask",
            F: 1e4,
            scale: 120,
            ue: "bulls won't target you unless you attack them",
            kt: 1
        }, {
            id: 14,
            name: "Windmill Hat",
            bt: !0,
            F: 1e4,
            scale: 120,
            ue: "generates points while worn",
            qe: 1.5
        }, {
            id: 11,
            name: "Spike Gear",
            bt: !0,
            F: 1e4,
            scale: 120,
            ue: "deal damage to players that damage you",
            me: .45
        }, {
            id: 53,
            name: "Turret Gear",
            bt: !0,
            F: 1e4,
            scale: 120,
            ue: "you become a walking turret",
            vt: {
                St: 1,
                range: 700,
                rate: 2500
            },
            we: .7
        }, {
            id: 20,
            name: "Samurai Armor",
            F: 12e3,
            scale: 120,
            ue: "increased attack speed and fire rate",
            xt: .78
        }, {
            id: 58,
            name: "Dark Knight",
            F: 12e3,
            scale: 120,
            ue: "restores health when you deal damage",
            ot: .4
        }, {
            id: 27,
            name: "Scavenger Gear",
            F: 15e3,
            scale: 120,
            ue: "earn double points for each kill",
            Pt: 2
        }, {
            id: 40,
            name: "Tank Gear",
            F: 15e3,
            scale: 120,
            ue: "increased damage to buildings but slower movement",
            we: .3,
            Ct: 3.3
        }, {
            id: 52,
            name: "Thief Gear",
            F: 15e3,
            scale: 120,
            ue: "steal half of a players gold when you kill them",
            Mt: .5
        }, {
            id: 55,
            name: "Bloodthirster",
            F: 2e4,
            scale: 120,
            ue: "Restore Health when dealing damage. And increased damage",
            ot: .25,
            W: 1.2
        }, {
            id: 56,
            name: "Assassin Gear",
            F: 2e4,
            scale: 120,
            ue: "Go invisible when not moving. Can't eat. Increased speed",
            fl: !0,
            we: 1.1,
            pl: 1e3
        }], e.exports.H = [{
            id: 12,
            name: "Snowball",
            F: 1e3,
            scale: 105,
            ge: 18,
            ue: "no effect"
        }, {
            id: 9,
            name: "Tree Cape",
            F: 1e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 10,
            name: "Stone Cape",
            F: 1e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 3,
            name: "Cookie Cape",
            F: 1500,
            scale: 90,
            ue: "no effect"
        }, {
            id: 8,
            name: "Cow Cape",
            F: 2e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 11,
            name: "Monkey Tail",
            F: 2e3,
            scale: 97,
            ge: 25,
            ue: "Super speed but reduced damage",
            we: 1.35,
            W: .2
        }, {
            id: 17,
            name: "Apple Basket",
            F: 3e3,
            scale: 80,
            ge: 12,
            ue: "slowly regenerates health over time",
            nt: 1
        }, {
            id: 6,
            name: "Winter Cape",
            F: 3e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 4,
            name: "Skull Cape",
            F: 4e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 5,
            name: "Dash Cape",
            F: 5e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 2,
            name: "Dragon Cape",
            F: 6e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 1,
            name: "Super Cape",
            F: 8e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 7,
            name: "Troll Cape",
            F: 8e3,
            scale: 90,
            ue: "no effect"
        }, {
            id: 14,
            name: "Thorns",
            F: 1e4,
            scale: 115,
            ge: 20,
            ue: "no effect"
        }, {
            id: 15,
            name: "Blockades",
            F: 1e4,
            scale: 95,
            ge: 15,
            ue: "no effect"
        }, {
            id: 20,
            name: "Devils Tail",
            F: 1e4,
            scale: 95,
            ge: 20,
            ue: "no effect"
        }, {
            id: 16,
            name: "Sawblade",
            F: 12e3,
            scale: 90,
            it: !0,
            ge: 0,
            ue: "deal damage to players that damage you",
            me: .15
        }, {
            id: 13,
            name: "Angel Wings",
            F: 15e3,
            scale: 138,
            ge: 22,
            ue: "slowly regenerates health over time",
            nt: 3
        }, {
            id: 19,
            name: "Shadow Wings",
            F: 15e3,
            scale: 138,
            ge: 22,
            ue: "increased movement speed",
            we: 1.1
        }, {
            id: 18,
            name: "Blood Wings",
            F: 2e4,
            scale: 178,
            ge: 26,
            ue: "restores health when you deal damage",
            ot: .2
        }, {
            id: 21,
            name: "Corrupt X Wings",
            F: 2e4,
            scale: 178,
            ge: 26,
            ue: "deal damage to players that damage you",
            me: .25
        }]
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, a, r) {
            this.init = function(e, t, n, i, o, a, s, c, l) {
                this.active = !0, this.Nr = e, this.x = t, this.y = n, this.dir = i, this.xw = !0, this.speed = o, this.me = a, this.scale = c, this.range = s, this.mc = l, r && (this.hc = {})
            };
            var s, c = [];
            this.update = function(l) {
                var d, u, h, f, m, p, g, w, y, k;
                if (this.active && (u = this.speed * l, this.xw ? this.xw = !1 : (this.x += u * Math.cos(this.dir), this.y += u * Math.sin(this.dir), this.range -= u, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), u = 1, this.range = 0, this.active = !1)), r)) {
                    for (h = 0; h < e.length; ++h) {
                        !this.hc[e[h].id] && e[h].Bc(this) && (this.hc[e[h].id] = 1, r.send(e[h].id, "18", a.pr(this.x, 1), a.pr(this.y, 1), a.pr(this.dir, 2), a.pr(this.range, 1), this.speed, this.Nr, this.Tt, this.K))
                    }
                    for (c.length = 0, h = 0; h < e.length + t.length; ++h) {
                        !(s = e[h] || t[h - e.length]).tr || s == this.mc || this.mc.Ja && s.Ja == this.mc.Ja || a.Zs(s.x - s.scale, s.y - s.scale, s.x + s.scale, s.y + s.scale, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(s)
                    }
                    for (f = n.Nc(this.x, this.y, this.scale), m = 0; m < f.length; ++m) {
                        for (p = 0; p < f[m].length; ++p) {
                            d = (s = f[m][p]).kc(), s.active && this.Pw != s.K && this.Tt <= s.Tt && c.indexOf(s) < 0 && !s.Le && a.Zs(s.x - d, s.y - d, s.x + d, s.y + d, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && c.push(s)
                        }
                    }
                    if (c.length > 0) {
                        for (g = null, w = null, y = null, h = 0; h < c.length; ++h) {
                            y = a.cn(this.x, this.y, c[h].x, c[h].y), (null == w || y < w) && (w = y, g = c[h])
                        }
                        if (g.ls || g.Cw) {
                            k = .3 * (g.Dc || 1), g.Hc += k * Math.cos(this.dir), g.jc += k * Math.sin(this.dir), null != g.Jo && i.de[g.Jo].A && a.Qs(this.dir + Math.PI, g.dir) <= o.Wo || g.Ee(-this.me, this.mc, this.mc)
                        } else {
                            for (g.Fe && g.B && g.Ee(-this.me) && n.Mc(g), h = 0; h < e.length; ++h) {
                                e[h].active && (g.hc[e[h].id] && (g.active ? e[h].Bc(g) && r.send(e[h].id, "8", a.pr(this.dir, 2), g.K) : r.send(e[h].id, "12", g.K)), g.active || g.mc != e[h] || e[h]._c(g.group.id, -1))
                            }
                        }
                        for (this.active = !1, h = 0; h < e.length; ++h) {
                            this.hc[e[h].id] && r.send(e[h].id, "19", this.K, a.pr(w, 1))
                        }
                    }
                }
            }
        }
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, a, r, s, c) {
            this.zr = function(l, d, u, h, f, m, p, g, w) {
                for (var y, k = a._r[m], b = 0; b < t.length; ++b) {
                    if (!t[b].active) {
                        y = t[b];
                        break
                    }
                }
                return y || ((y = new e(n, i, o, a, r, s, c)).K = t.length, t.push(y)), y.init(m, l, d, u, f, k.me, h, k.scale, p), y.Pw = g, y.Tt = w || k.Tt, y.src = k.src, y
            }
        }
    }, function(e, t) {
        e.exports.Zr = function(e, t) {
            var n;
            this.Mw = [], this.active = !0, this.play = function(t, i, o) {
                i && this.active && ((n = this.Mw[t]) || (n = new Howl({
                    src: ".././sound/" + t + ".mp3"
                }), this.Mw[t] = n), o && n.Tw || (n.Tw = !0, n.play(), n.volume((i || 1) * e.Bw), n.loop(o)))
            }, this._w = function(e, t) {
                (n = this.Mw[e]) && n.Nw(t)
            }, this.stop = function(e) {
                (n = this.Mw[e]) && (n.stop(), n.Tw = !1)
            }
        }
    }, function(e, t, n) {
        function i(e, t, n, i, o) {
            "localhost" == location.hostname && (window.location.hostname = "127.0.0.1"), this.es = !1, this.Ow = e, this.Aw = n, this.Iw = t, this.Ew = i, this.Hw = !!o, this.qa = void 0, this.Ka = void 0, this.Dw = void 0, this.jw = void 0, this.La(vultr.Ra)
        }
        var o, a = n(60),
            r = n(67);
        i.prototype.Ua = {
            0: {
                name: "Local",
                latitude: 0,
                longitude: 0
            },
            "vultr:1": {
                name: "New Jersey",
                latitude: 40.1393329,
                longitude: -75.8521818
            },
            "vultr:2": {
                name: "Chicago",
                latitude: 41.8339037,
                longitude: -87.872238
            },
            "vultr:3": {
                name: "Dallas",
                latitude: 32.8208751,
                longitude: -96.8714229
            },
            "vultr:4": {
                name: "Seattle",
                latitude: 47.6149942,
                longitude: -122.4759879
            },
            "vultr:5": {
                name: "Los Angeles",
                latitude: 34.0207504,
                longitude: -118.691914
            },
            "vultr:6": {
                name: "Atlanta",
                latitude: 33.7676334,
                longitude: -84.5610332
            },
            "vultr:7": {
                name: "Amsterdam",
                latitude: 52.3745287,
                longitude: 4.7581878
            },
            "vultr:8": {
                name: "London",
                latitude: 51.5283063,
                longitude: -.382486
            },
            "vultr:9": {
                name: "Frankfurt",
                latitude: 50.1211273,
                longitude: 8.496137
            },
            "vultr:12": {
                name: "Silicon Valley",
                latitude: 37.4024714,
                longitude: -122.3219752
            },
            "vultr:19": {
                name: "Sydney",
                latitude: -33.8479715,
                longitude: 150.651084
            },
            "vultr:24": {
                name: "Paris",
                latitude: 48.8588376,
                longitude: 2.2773454
            },
            "vultr:25": {
                name: "Tokyo",
                latitude: 35.6732615,
                longitude: 139.569959
            },
            "vultr:39": {
                name: "Miami",
                latitude: 25.7823071,
                longitude: -80.3012156
            },
            "vultr:40": {
                name: "Singapore",
                latitude: 1.3147268,
                longitude: 103.7065876
            }
        }, i.prototype.start = function(e, t) {
            this.Dw = e, this.jw = t;
            var n = this.Fw();
            n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.Rw())
        }, i.prototype.Fw = function() {
            var e, t, n, i, o = a.parse(location.href, !0),
                r = o.query.qa;
            if ("string" == typeof r) {
                if (3 == (e = r.split(":")).length) {
                    return t = e[0], n = parseInt(e[1]), i = parseInt(e[2]), "0" == t || t.startsWith("vultr:") || (t = "vultr:" + t), [t, n, i, o.query.password]
                }
                this.jw("Invalid number of server parameters in " + r)
            }
        }, i.prototype.Gw = function(e, t) {
            var n, i, o = this.Ra[e];
            if (Array.isArray(o)) {
                for (n = 0; n < o.length; n++) {
                    if ((i = o[n]).index == t) {
                        return i
                    }
                }
            } else {
                this.jw("No server list for region " + e)
            }
        }, i.prototype.Rw = function() {
            var e, t, n, i = this,
                o = [];
            for (e in this.Ra) {
                this.Ra.hasOwnProperty(e) && null != (n = (t = this.Ra[e])[Math.floor(Math.random() * t.length)]) && function(e, t) {
                    var n, a = new XMLHttpRequest;
                    a.onreadystatechange = function(e) {
                        var n, a, r = e.target;
                        if (4 == r.readyState && 200 == r.status) {
                            for (n = 0; n < o.length; n++) {
                                o[n].abort()
                            }
                            i.log("Connecting to region", t.region), a = i.zw(t.region), i.connect(a[0], a[1], a[2])
                        }
                    }, n = "//" + i.Uw(t.u, !0) + ":" + i.qw(t) + "/ping", a.open("GET", n, !0), a.send(null), i.log("Pinging", n), o.push(a)
                }(0, n)
            }
        }, i.prototype.zw = function(e, t, n) {
            var i, o, a, r, s, c, l, d;
            null == n && (n = "random"), null == t && (t = !1);
            const u = ["random"];
            if (i = this.Aw, o = this.Ew, a = this.Ra[e].flatMap((function(e) {
                    var t = 0;
                    return e.Ga.map((function(n) {
                        var i = t++;
                        return {
                            region: e.region,
                            index: e.index * e.Ga.length + i,
                            Ka: i,
                            Kw: e.Ga.length,
                            za: n.za,
                            $w: n.$w
                        }
                    }))
                })).filter((function(e) {
                    return !e.$w
                })).filter((function(e) {
                    return !t || 0 == e.za && e.Ka >= e.Kw / 2
                })).filter((function(e) {
                    return "random" == n || u[e.index % u.length].key == n
                })).sort((function(e, t) {
                    return t.za - e.za
                })).filter((function(e) {
                    return e.za < i
                })), t && a.reverse(), 0 != a.length) {
                return r = Math.min(o, a.length), s = Math.floor(Math.random() * r), l = (c = a[s = Math.min(s, a.length - 1)]).region, s = Math.floor(c.index / c.Kw), d = c.index % c.Kw, this.log("Found server."), [l, s, d]
            }
            this.jw("No open servers.")
        }, i.prototype.connect = function(e, t, n) {
            if (!this.connected) {
                var i = this.Gw(e, t);
                null != i ? (this.log("Connecting to server", i, "with game index", n), i.Ga[n].za >= this.Aw ? this.jw("Server is already full.") : (window.history.replaceState(document.title, document.title, this.Lw(e, t, n, this.password)), this.qa = i, this.Ka = n, this.log("Calling callback with address", this.Uw(i.u), "on port", this.qw(i), "with game index", n), this.Dw(this.Uw(i.u), this.qw(i), n))) : this.jw("Failed to find server for region " + e + " and index " + t)
            }
        }, i.prototype.ts = function(e, t, n, i) {
            this.Ww = !0, window.location.href = this.Lw(e, t, n, i)
        }, i.prototype.Lw = function(e, t, n, i) {
            var o = "/?server=" + (e = this.$a(e)) + ":" + t + ":" + n;
            return i && (o += "&password=" + encodeURIComponent(i)), o
        }, i.prototype.Uw = function(e, t) {
            return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this.Hw ? t ? "ip_" + this.Xw(e) + "." + this.Ow : e : "ip_" + e + "." + this.Ow
        }, i.prototype.qw = function(e) {
            return 0 == e.region ? this.Iw : location.protocol.startsWith("https") ? 443 : 80
        }, i.prototype.La = function(e) {
            var t, n, i, o, a;
            for (t = {}, n = 0; n < e.length; n++) {
                null == (o = t[(i = e[n]).region]) && (o = [], t[i.region] = o), o.push(i)
            }
            for (a in t) {
                t[a] = t[a].sort((function(e, t) {
                    return e.index - t.index
                }))
            }
            this.Ra = t
        }, i.prototype.Qw = function(e) {
            return e.split(".").map((e => ("00" + parseInt(e).toString(16)).substr(-2))).join("").toLowerCase()
        }, i.prototype.Xw = function(e) {
            return r(this.Qw(e))
        }, i.prototype.log = function() {
            return this.es ? void 0 : void console.verbose
        }, i.prototype.$a = function(e) {
            return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)), e
        }, window.testVultrClient = function() {
            function e(e, t) {
                e = "" + e, t = "" + t
            }
            var t = new i("test.io", -1, 5, 1, !1);
            t.jw = function(e) {}, t.La(function(e) {
                var t, n, i, o = [];
                for (t in e) {
                    for (n = e[t], i = 0; i < n.length; i++) {
                        o.push({
                            u: t + ":" + i,
                            scheme: "testing",
                            region: t,
                            index: i,
                            Ga: n[i].map((e => ({
                                za: e,
                                $w: !1
                            })))
                        })
                    }
                }
                return o
            }({
                1: [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                2: [
                    [5, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                3: [
                    [5, 0, 1, 5],
                    [0, 0, 0, 0]
                ],
                4: [
                    [5, 1, 1, 5],
                    [1, 0, 0, 0]
                ],
                5: [
                    [5, 1, 1, 5],
                    [1, 0, 4, 0]
                ],
                6: [
                    [5, 5, 5, 5],
                    [2, 3, 1, 4]
                ],
                7: [
                    [5, 5, 5, 5],
                    [5, 5, 5, 5]
                ]
            })), e(t.zw(1, !1), [1, 0, 0]), e(t.zw(1, !0), [1, 1, 3]), e(t.zw(2, !1), [2, 0, 1]), e(t.zw(2, !0), [2, 1, 3]), e(t.zw(3, !1), [3, 0, 2]), e(t.zw(3, !0), [3, 1, 3]), e(t.zw(4, !1), [4, 0, 1]), e(t.zw(4, !0), [4, 1, 3]), e(t.zw(5, !1), [5, 1, 2]), e(t.zw(5, !0), [5, 1, 3]), e(t.zw(6, !1), [6, 1, 3]), e(t.zw(6, !0), void 0), e(t.zw(7, !1), void 0), e(t.zw(7, !0), void 0)
        }, o = function(e, t) {
            return e.concat(t)
        }, Array.prototype.flatMap = function(e) {
            return function(e, t) {
                return t.map(e).reduce(o, [])
            }(e, this)
        }, e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i() {
            this.protocol = null, this.Yw = null, this.Vw = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function o(e, t, n) {
            if (e && k.Zw(e) && e instanceof i) {
                return e
            }
            var o = new i;
            return o.parse(e, t, n), o
        }
        var a, r, s, c, l, d, u, h, f, m, p, g, w, y = n(61),
            k = n(63);
        t.parse = o, t.resolve = function(e, t) {
            return o(e, !1, !0).resolve(t)
        }, t.Jw = function(e, t) {
            return e ? o(e, !1, !0).Jw(t) : t
        }, t.format = function(e) {
            return k.Ys(e) && (e = o(e)), e instanceof i ? e.format() : i.prototype.format.call(e)
        }, t.ey = i, a = /^([a-z0-9.+-]+:)/i, r = /:[0-9]*$/, s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), l = ["'"].concat(c), d = ["%", "/", "?", ";", "#"].concat(l), u = ["/", "?", "#"], h = /^[+a-z0-9A-Z_-]{0,63}$/, f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, m = {
            ty: !0,
            "javascript:": !0
        }, p = {
            ty: !0,
            "javascript:": !0
        }, g = {
            ny: !0,
            iy: !0,
            oy: !0,
            sy: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }, w = n(64), i.prototype.parse = function(e, t, n) {
            var i, o, r, c, b, v, S, x, P, C, M, T, B, _, N, O, A, I, E, H, D, j, F, R, G, z, U, q, K, $;
            if (!k.Ys(e)) {
                throw new TypeError("Parameter 'url' must be a string, not " + typeof e)
            }
            if (o = -1 !== (i = e.indexOf("?")) && i < e.indexOf("#") ? "?" : "#", (r = e.split(o))[0] = r[0].replace(/\\/g, "/"), c = (c = e = r.join(o)).trim(), !n && 1 === e.split("#").length && (b = s.exec(c))) {
                return this.path = c, this.href = c, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t ? w.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            if ((v = a.exec(c)) && (S = (v = v[0]).toLowerCase(), this.protocol = S, c = c.substr(v.length)), (n || v || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(x = "//" === c.substr(0, 2)) || v && p[v] || (c = c.substr(2), this.Yw = !0)), !p[v] && (x || v && !g[v])) {
                for (M = -1, T = 0; T < u.length; T++) {
                    -1 !== (B = c.indexOf(u[T])) && (-1 === M || B < M) && (M = B)
                }
                for (-1 !== (C = -1 === M ? c.lastIndexOf("@") : c.lastIndexOf("@", M)) && (P = c.slice(0, C), c = c.slice(C + 1), this.Vw = decodeURIComponent(P)), M = -1, T = 0; T < d.length; T++) {
                    -1 !== (B = c.indexOf(d[T])) && (-1 === M || B < M) && (M = B)
                }
                if (-1 === M && (M = c.length), this.host = c.slice(0, M), c = c.slice(M), this.ly(), this.hostname = this.hostname || "", !(_ = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1])) {
                    for (T = 0, O = (N = this.hostname.split(/\./)).length; T < O; T++) {
                        if ((A = N[T]) && !A.match(h)) {
                            for (I = "", E = 0, H = A.length; E < H; E++) {
                                A.charCodeAt(E) > 127 ? I += "x" : I += A[E]
                            }
                            if (!I.match(h)) {
                                D = N.slice(0, T), j = N.slice(T + 1), (F = A.match(f)) && (D.push(F[1]), j.unshift(F[2])), j.length && (c = "/" + j.join(".") + c), this.hostname = D.join(".");
                                break
                            }
                        }
                    }
                }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), _ || (this.hostname = y.uy(this.hostname)), R = this.port ? ":" + this.port : "", G = this.hostname || "", this.host = G + R, this.href += this.host, _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== c[0] && (c = "/" + c))
            }
            if (!m[S]) {
                for (T = 0, O = l.length; T < O; T++) {
                    z = l[T], -1 !== c.indexOf(z) && ((U = encodeURIComponent(z)) === z && (U = escape(z)), c = c.split(z).join(U))
                }
            }
            return -1 !== (q = c.indexOf("#")) && (this.hash = c.substr(q), c = c.slice(0, q)), -1 !== (K = c.indexOf("?")) ? (this.search = c.substr(K), this.query = c.substr(K + 1), t && (this.query = w.parse(this.query)), c = c.slice(0, K)) : t && (this.search = "", this.query = {}), c && (this.pathname = c), g[S] && this.hostname && !this.pathname && (this.pathname = "/"), (this.pathname || this.search) && (R = this.pathname || "", $ = this.search || "", this.path = R + $), this.href = this.format(), this
        }, i.prototype.format = function() {
            var e, t, n, i, o, a, r = this.Vw || "";
            return r && (r = (r = encodeURIComponent(r)).replace(/%3A/i, ":"), r += "@"), e = this.protocol || "", t = this.pathname || "", n = this.hash || "", i = !1, o = "", this.host ? i = r + this.host : this.hostname && (i = r + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && k.Zw(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query)), a = this.search || o && "?" + o || "", e && ":" !== e.substr(-1) && (e += ":"), this.Yw || (!e || g[e]) && !1 !== i ? (i = "//" + (i || ""), t && "/" !== t.charAt(0) && (t = "/" + t)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), e + i + (t = t.replace(/[?#]/g, (function(e) {
                return encodeURIComponent(e)
            }))) + (a = a.replace("#", "%23")) + n
        }, i.prototype.resolve = function(e) {
            return this.Jw(o(e, !1, !0)).format()
        }, i.prototype.Jw = function(e) {
            var t, n, o, a, r, s, c, l, d, u, h, f, m, w, y, b, v, S, x, P, C, M, T, B, _, N;
            for (k.Ys(e) && ((t = new i).parse(e, !1, !0), e = t), n = new i, o = Object.keys(this), a = 0; a < o.length; a++) {
                n[r = o[a]] = this[r]
            }
            if (n.hash = e.hash, "" === e.href) {
                return n.href = n.format(), n
            }
            if (e.Yw && !e.protocol) {
                for (s = Object.keys(e), c = 0; c < s.length; c++) {
                    "protocol" !== (l = s[c]) && (n[l] = e[l])
                }
                return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!g[e.protocol]) {
                    for (d = Object.keys(e), u = 0; u < d.length; u++) {
                        n[h = d[u]] = e[h]
                    }
                    return n.href = n.format(), n
                }
                if (n.protocol = e.protocol, e.host || p[e.protocol]) {
                    n.pathname = e.pathname
                } else {
                    for (f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift());) {}
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/")
                }
                return n.search = e.search, n.query = e.query, n.host = e.host || "", n.Vw = e.Vw, n.hostname = e.hostname || e.host, n.port = e.port, (n.pathname || n.search) && (m = n.pathname || "", w = n.search || "", n.path = m + w), n.Yw = n.Yw || e.Yw, n.href = n.format(), n
            }
            if (y = n.pathname && "/" === n.pathname.charAt(0), S = v = (b = e.host || e.pathname && "/" === e.pathname.charAt(0)) || y || n.host && e.pathname, x = n.pathname && n.pathname.split("/") || [], f = e.pathname && e.pathname.split("/") || [], (P = n.protocol && !g[n.protocol]) && (n.hostname = "", n.port = null, n.host && ("" === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), v = v && ("" === f[0] || "" === x[0])), b) {
                n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, x = f
            } else if (f.length) {
                x || (x = []), x.pop(), x = x.concat(f), n.search = e.search, n.query = e.query
            } else if (!k.hy(e.search)) {
                return P && (n.hostname = n.host = x.shift(), (_ = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.Vw = _.shift(), n.host = n.hostname = _.shift())), n.search = e.search, n.query = e.query, k.my(n.pathname) && k.my(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!x.length) {
                return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n
            }
            for (C = x.slice(-1)[0], M = (n.host || e.host || x.length > 1) && ("." === C || ".." === C) || "" === C, T = 0, B = x.length; B >= 0; B--) {
                "." === (C = x[B]) ? x.splice(B, 1): ".." === C ? (x.splice(B, 1), T++) : T && (x.splice(B, 1), T--)
            }
            if (!v && !S) {
                for (; T--; T) {
                    x.unshift("..")
                }
            }
            return !v || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), M && "/" !== x.join("/").substr(-1) && x.push(""), N = "" === x[0] || x[0] && "/" === x[0].charAt(0), P && (n.hostname = n.host = N ? "" : x.length ? x.shift() : "", (_ = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.Vw = _.shift(), n.host = n.hostname = _.shift())), (v = v || n.host && x.length) && !N && x.unshift(""), x.length ? n.pathname = x.join("/") : (n.pathname = null, n.path = null), k.my(n.pathname) && k.my(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.Vw = e.Vw || n.Vw, n.Yw = n.Yw || e.Yw, n.href = n.format(), n
        }, i.prototype.ly = function() {
            var e = this.host,
                t = r.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, function(e, t, n) {
        (function(e, i) {
            var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
            ! function(a) {
                function r(e) {
                    throw new RangeError(x[e])
                }

                function s(e, t) {
                    for (var n = e.length, i = []; n--;) {
                        i[n] = t(e[n])
                    }
                    return i
                }

                function c(e, t) {
                    var n = e.split("@"),
                        i = "";
                    return n.length > 1 && (i = n[0] + "@", e = n[1]), i + s((e = e.replace(S, ".")).split("."), t).join(".")
                }

                function l(e) {
                    for (var t, n, i = [], o = 0, a = e.length; o < a;) {
                        (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), o--) : i.push(t)
                    }
                    return i
                }

                function d(e) {
                    return s(e, (function(e) {
                        var t = "";
                        return e > 65535 && (t += C((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + C(e)
                    })).join("")
                }

                function u(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : k
                }

                function h(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function f(e, t, n) {
                    var i = 0;
                    for (e = n ? P(e / 700) : e >> 1, e += P(e / t); e > 455; i += k) {
                        e = P(e / 35)
                    }
                    return P(i + 36 * e / (e + 38))
                }

                function m(e) {
                    var t, n, i, o, a, s, c, l, h, m, p = [],
                        g = e.length,
                        w = 0,
                        b = 128,
                        v = 72;
                    for ((n = e.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) {
                        e.charCodeAt(i) >= 128 && r("not-basic"), p.push(e.charCodeAt(i))
                    }
                    for (o = n > 0 ? n + 1 : 0; o < g;) {
                        for (a = w, s = 1, c = k; o >= g && r("invalid-input"), ((l = u(e.charCodeAt(o++))) >= k || l > P((y - w) / s)) && r("overflow"), w += l * s, !(l < (h = c <= v ? 1 : c >= v + 26 ? 26 : c - v)); c += k) {
                            s > P(y / (m = k - h)) && r("overflow"), s *= m
                        }
                        v = f(w - a, t = p.length + 1, 0 == a), P(w / t) > y - b && r("overflow"), b += P(w / t), w %= t, p.splice(w++, 0, b)
                    }
                    return d(p)
                }

                function p(e) {
                    var t, n, i, o, a, s, c, d, u, m, p, g, w, b, v, S = [];
                    for (g = (e = l(e)).length, t = 128, n = 0, a = 72, s = 0; s < g; ++s) {
                        (p = e[s]) < 128 && S.push(C(p))
                    }
                    for (i = o = S.length, o && S.push("-"); i < g;) {
                        for (c = y, s = 0; s < g; ++s) {
                            (p = e[s]) >= t && p < c && (c = p)
                        }
                        for (c - t > P((y - n) / (w = i + 1)) && r("overflow"), n += (c - t) * w, t = c, s = 0; s < g; ++s) {
                            if ((p = e[s]) < t && ++n > y && r("overflow"), p == t) {
                                for (d = n, u = k; !(d < (m = u <= a ? 1 : u >= a + 26 ? 26 : u - a)); u += k) {
                                    v = d - m, b = k - m, S.push(C(h(m + v % b, 0))), d = P(v / b)
                                }
                                S.push(C(h(d, 0))), a = f(n, w, i == o), n = 0, ++i
                            }
                        }++n, ++t
                    }
                    return S.join("")
                }
                var g, w, y, k, b, v, S, x, P, C;
                t && t.nodeType, e && e.nodeType, (g = "object" == typeof i && i).global !== g && g.window !== g && g.self, y = 2147483647, k = 36, b = /^xn--/, v = /[^\x20-\x7E]/, S = /[\x2E\u3002\uFF0E\uFF61]/g, x = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, P = Math.floor, C = String.fromCharCode, w = {
                    version: "1.4.1",
                    py: {
                        decode: l,
                        encode: d
                    },
                    decode: m,
                    encode: p,
                    uy: function(e) {
                        return c(e, (function(e) {
                            return v.test(e) ? "xn--" + p(e) : e
                        }))
                    },
                    gy: function(e) {
                        return c(e, (function(e) {
                            return b.test(e) ? m(e.slice(4).toLowerCase()) : e
                        }))
                    }
                }, void 0 === (o = function() {
                    return w
                }.call(t, n, t, e)) || (e.exports = o)
            }()
        }).call(this, n(62)(e), n(12))
    }, function(e, t) {
        e.exports = function(e) {
            return e.wy || (e.yy = function() {}, e.ky = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.un
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.dn
                }
            }), e.wy = 1), e
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = {
            Ys: function(e) {
                return "string" == typeof e
            },
            Zw: function(e) {
                return "object" == typeof e && null !== e
            },
            my: function(e) {
                return null === e
            },
            hy: function(e) {
                return null == e
            }
        }
    }, function(e, t, n) {
        "use strict";
        t.decode = t.parse = n(65), t.encode = t.stringify = n(66)
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, n, a) {
            var r, s, c, l, d, u, h, f, m, p, g;
            if (t = t || "&", n = n || "=", r = {}, "string" != typeof e || 0 === e.length) {
                return r
            }
            for (s = /\+/g, e = e.split(t), c = 1e3, a && "number" == typeof a.by && (c = a.by), l = e.length, c > 0 && l > c && (l = c), d = 0; d < l; ++d) {
                (g = (p = e[d].replace(s, "%20")).indexOf(n)) >= 0 ? (u = p.substr(0, g), h = p.substr(g + 1)) : (u = p, h = ""), f = decodeURIComponent(u), m = decodeURIComponent(h), i(r, f) ? o(r[f]) ? r[f].push(m) : r[f] = [r[f], m] : r[f] = m
            }
            return r
        };
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (e.map) {
                return e.map(t)
            }
            for (var n = [], i = 0; i < e.length; i++) {
                n.push(t(e[i], i))
            }
            return n
        }
        var o, a, r = function(e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function(e, t, n, s) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), (function(a) {
                var s = encodeURIComponent(r(a)) + n;
                return o(e[a]) ? i(e[a], (function(e) {
                    return s + encodeURIComponent(r(e))
                })).join(t) : s + encodeURIComponent(r(e[a]))
            })).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
        }, o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, a = Object.keys || function(e) {
            var t, n = [];
            for (t in e) {
                Object.prototype.hasOwnProperty.call(e, t) && n.push(t)
            }
            return n
        }
    }, function(e, t, n) {
        ! function() {
            var t = n(68),
                i = n(20).ba,
                o = n(69),
                a = n(20).co,
                r = function(e, n) {
                    var s, c, l, d, u, h, f, m, p, g, w, y, k, b, v;
                    for (e.constructor == String ? e = n && "binary" === n.encoding ? a.va(e) : i.va(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString()), s = t.vy(e), c = 8 * e.length, l = 1732584193, d = -271733879, u = -1732584194, h = 271733878, f = 0; f < s.length; f++) {
                        s[f] = 16711935 & (s[f] << 8 | s[f] >>> 24) | 4278255360 & (s[f] << 24 | s[f] >>> 8)
                    }
                    for (s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c, m = r.Sy, p = r.xy, g = r.Py, w = r.Cy, f = 0; f < s.length; f += 16) {
                        y = l, k = d, b = u, v = h, d = w(d = w(d = w(d = w(d = g(d = g(d = g(d = g(d = p(d = p(d = p(d = p(d = m(d = m(d = m(d = m(d, u = m(u, h = m(h, l = m(l, d, u, h, s[f + 0], 7, -680876936), d, u, s[f + 1], 12, -389564586), l, d, s[f + 2], 17, 606105819), h, l, s[f + 3], 22, -1044525330), u = m(u, h = m(h, l = m(l, d, u, h, s[f + 4], 7, -176418897), d, u, s[f + 5], 12, 1200080426), l, d, s[f + 6], 17, -1473231341), h, l, s[f + 7], 22, -45705983), u = m(u, h = m(h, l = m(l, d, u, h, s[f + 8], 7, 1770035416), d, u, s[f + 9], 12, -1958414417), l, d, s[f + 10], 17, -42063), h, l, s[f + 11], 22, -1990404162), u = m(u, h = m(h, l = m(l, d, u, h, s[f + 12], 7, 1804603682), d, u, s[f + 13], 12, -40341101), l, d, s[f + 14], 17, -1502002290), h, l, s[f + 15], 22, 1236535329), u = p(u, h = p(h, l = p(l, d, u, h, s[f + 1], 5, -165796510), d, u, s[f + 6], 9, -1069501632), l, d, s[f + 11], 14, 643717713), h, l, s[f + 0], 20, -373897302), u = p(u, h = p(h, l = p(l, d, u, h, s[f + 5], 5, -701558691), d, u, s[f + 10], 9, 38016083), l, d, s[f + 15], 14, -660478335), h, l, s[f + 4], 20, -405537848), u = p(u, h = p(h, l = p(l, d, u, h, s[f + 9], 5, 568446438), d, u, s[f + 14], 9, -1019803690), l, d, s[f + 3], 14, -187363961), h, l, s[f + 8], 20, 1163531501), u = p(u, h = p(h, l = p(l, d, u, h, s[f + 13], 5, -1444681467), d, u, s[f + 2], 9, -51403784), l, d, s[f + 7], 14, 1735328473), h, l, s[f + 12], 20, -1926607734), u = g(u, h = g(h, l = g(l, d, u, h, s[f + 5], 4, -378558), d, u, s[f + 8], 11, -2022574463), l, d, s[f + 11], 16, 1839030562), h, l, s[f + 14], 23, -35309556), u = g(u, h = g(h, l = g(l, d, u, h, s[f + 1], 4, -1530992060), d, u, s[f + 4], 11, 1272893353), l, d, s[f + 7], 16, -155497632), h, l, s[f + 10], 23, -1094730640), u = g(u, h = g(h, l = g(l, d, u, h, s[f + 13], 4, 681279174), d, u, s[f + 0], 11, -358537222), l, d, s[f + 3], 16, -722521979), h, l, s[f + 6], 23, 76029189), u = g(u, h = g(h, l = g(l, d, u, h, s[f + 9], 4, -640364487), d, u, s[f + 12], 11, -421815835), l, d, s[f + 15], 16, 530742520), h, l, s[f + 2], 23, -995338651), u = w(u, h = w(h, l = w(l, d, u, h, s[f + 0], 6, -198630844), d, u, s[f + 7], 10, 1126891415), l, d, s[f + 14], 15, -1416354905), h, l, s[f + 5], 21, -57434055), u = w(u, h = w(h, l = w(l, d, u, h, s[f + 12], 6, 1700485571), d, u, s[f + 3], 10, -1894986606), l, d, s[f + 10], 15, -1051523), h, l, s[f + 1], 21, -2054922799), u = w(u, h = w(h, l = w(l, d, u, h, s[f + 8], 6, 1873313359), d, u, s[f + 15], 10, -30611744), l, d, s[f + 6], 15, -1560198380), h, l, s[f + 13], 21, 1309151649), u = w(u, h = w(h, l = w(l, d, u, h, s[f + 4], 6, -145523070), d, u, s[f + 11], 10, -1120210379), l, d, s[f + 2], 15, 718787259), h, l, s[f + 9], 21, -343485551), l = l + y >>> 0, d = d + k >>> 0, u = u + b >>> 0, h = h + v >>> 0
                    }
                    return t.My([l, d, u, h])
                };
            r.Sy = function(e, t, n, i, o, a, r) {
                var s = e + (t & n | ~t & i) + (o >>> 0) + r;
                return (s << a | s >>> 32 - a) + t
            }, r.xy = function(e, t, n, i, o, a, r) {
                var s = e + (t & i | n & ~i) + (o >>> 0) + r;
                return (s << a | s >>> 32 - a) + t
            }, r.Py = function(e, t, n, i, o, a, r) {
                var s = e + (t ^ n ^ i) + (o >>> 0) + r;
                return (s << a | s >>> 32 - a) + t
            }, r.Cy = function(e, t, n, i, o, a, r) {
                var s = e + (n ^ (t | ~i)) + (o >>> 0) + r;
                return (s << a | s >>> 32 - a) + t
            }, r.Ty = 16, r.By = 16, e.exports = function(e, n) {
                if (null == e) {
                    throw new Error("Illegal argument " + e)
                }
                var i = t._y(r(e, n));
                return n && n.Ny ? i : n && n.Oy ? a.Sa(i) : t.Ay(i)
            }
        }()
    }, function(e, t) {
        ! function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = {
                    Iy: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    Ey: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    My: function(e) {
                        if (e.constructor == Number) {
                            return 16711935 & n.Iy(e, 8) | 4278255360 & n.Iy(e, 24)
                        }
                        for (var t = 0; t < e.length; t++) {
                            e[t] = n.My(e[t])
                        }
                        return e
                    },
                    Hy: function(e) {
                        for (var t = []; e > 0; e--) {
                            t.push(Math.floor(256 * Math.random()))
                        }
                        return t
                    },
                    vy: function(e) {
                        for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) {
                            t[i >>> 5] |= e[n] << 24 - i % 32
                        }
                        return t
                    },
                    _y: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) {
                            t.push(e[n >>> 5] >>> 24 - n % 32 & 255)
                        }
                        return t
                    },
                    Ay: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16))
                        }
                        return t.join("")
                    },
                    Dy: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) {
                            t.push(parseInt(e.substr(n, 2), 16))
                        }
                        return t
                    },
                    jy: function(e) {
                        var n, i, o, a;
                        for (n = [], i = 0; i < e.length; i += 3) {
                            for (o = e[i] << 16 | e[i + 1] << 8 | e[i + 2], a = 0; a < 4; a++) {
                                8 * i + 6 * a <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - a) & 63)) : n.push("=")
                            }
                        }
                        return n.join("")
                    },
                    Fy: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var n = [], i = 0, o = 0; i < e.length; o = ++i % 4) {
                            0 != o && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(i)) >>> 6 - 2 * o)
                        }
                        return n
                    }
                };
            e.exports = n
        }()
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (n(e) || function(e) {
                return "function" == typeof e.Mi && "function" == typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e.ri)
        }
    }, function(e, t) {
        e.exports = function(e, t, n, i, o, a, r, s, c) {
            this.Qr = [{
                id: 0,
                src: "cow_1",
                Ry: 150,
                B: 500,
                Dc: .8,
                speed: 95e-5,
                Ue: .001,
                scale: 72,
                drop: ["food", 50]
            }, {
                id: 1,
                src: "pig_1",
                Ry: 200,
                B: 800,
                Dc: .6,
                speed: 85e-5,
                Ue: .001,
                scale: 72,
                drop: ["food", 80]
            }, {
                id: 2,
                name: "\u239d\u29f9Gaston 1k \u29f8\u23a0",
                src: "bull_2",
                te: !0,
                me: 20,
                Ry: 1e3,
                B: 1800,
                Dc: .5,
                speed: 94e-5,
                Ue: 74e-5,
                scale: 78,
                Gy: 800,
                zy: !0,
                drop: ["food", 100]
            }, {
                id: 3,
                name: "\u239d\u29f9\u03b6\u035c\u0361Gaston 2k \u29f8\u23a0",
                src: "bull_1",
                te: !0,
                me: 20,
                Ry: 2e3,
                B: 2800,
                Dc: .45,
                speed: .001,
                Ue: 8e-4,
                scale: 90,
                Gy: 900,
                zy: !0,
                drop: ["food", 400]
            }, {
                id: 4,
                name: "\u239d\u29f9Gaston 200food 500gold \u29f8\u23a0",
                src: "wolf_1",
                te: !0,
                me: 8,
                Ry: 500,
                B: 300,
                Dc: .45,
                speed: .001,
                Ue: .002,
                scale: 84,
                Gy: 800,
                zy: !0,
                drop: ["food", 200]
            }, {
                id: 5,
                name: "\u239d\u29f9\u03b6\u035c\u0361Gaston GOlden chicken \u29f8\u23a0",
                src: "chicken_1",
                me: 8,
                Ry: 2e3,
                Ec: !0,
                B: 300,
                Dc: .2,
                speed: .0018,
                Ue: .006,
                scale: 70,
                drop: ["food", 100]
            }, {
                id: 6,
                name: "\u239d\u29f9King jon un  \u29f8\u23a0",
                rs: 50,
                src: "enemy",
                te: !0,
                Uy: !0,
                qy: !0,
                Ky: 6e4,
                Ec: !0,
                Rc: 100,
                me: 40,
                Ry: 8e3,
                B: 18e3,
                Dc: .4,
                speed: 7e-4,
                Ue: .01,
                scale: 80,
                Yr: 1.8,
                $y: .9,
                Gy: 1e3,
                Ly: 210,
                Wy: 1e3,
                zy: !0,
                drop: ["food", 100]
            }, {
                id: 7,
                name: "\u239d\u29f9Gaston 5kgold \u29f8\u23a0",
                te: !0,
                rs: 35,
                src: "crate_1",
                qy: !0,
                Ky: 12e4,
                Rc: 200,
                Ry: 5e3,
                B: 2e4,
                Dc: .1,
                speed: 0,
                Ue: 0,
                scale: 70,
                Yr: 1
            }, {
                id: 8,
                name: "\u239d\u29f9\u03b6\u035c\u0361Gaston Wolf \u29f8\u23a0",
                src: "wolf_2",
                te: !0,
                qy: !0,
                Uy: !0,
                Xy: 4,
                Ky: 3e4,
                Ec: !0,
                rs: 35,
                me: 10,
                Rc: 100,
                Ry: 3e3,
                B: 7e3,
                Dc: .45,
                speed: .0015,
                Ue: .002,
                scale: 90,
                Gy: 800,
                zy: !0,
                drop: ["food", 1e3]
            }], this.Xr = function(l, d, u, h) {
                for (var f, m = 0; m < e.length; ++m) {
                    if (!e[m].active) {
                        f = e[m];
                        break
                    }
                }
                return f || (f = new t(e.length, o, n, i, r, a, s, c), e.push(f)), f.init(l, d, u, h, this.Qr[h]), f
            }
        }
    }, function(e, t) {
        var n = 2 * Math.PI;
        e.exports = function(e, t, i, o, a, r, s, c) {
            var l, d, u;
            this.K = e, this.Cw = !0, this.Qy = a.Gr(0, r.Lo.length - 1), this.init = function(e, t, n, i, o) {
                this.x = e, this.y = t, this.hr = o.qy ? e : null, this.dr = o.qy ? t : null, this.Hc = 0, this.jc = 0, this.zIndex = 0, this.dir = n, this.Dr = 0, this.index = i, this.src = o.src, o.name && (this.name = o.name), this.Dc = o.Dc, this.speed = o.speed, this.Ry = o.Ry, this.Ue = o.Ue, this.scale = o.scale, this.X = o.B, this.$y = o.$y, this.B = this.X, this.zy = o.zy, this.Gy = o.Gy, this.drop = o.drop, this.me = o.me, this.te = o.te, this.Uy = o.Uy, this.Ly = o.Ly, this.Wy = o.Wy, this.Xy = o.Xy, this.Yr = o.Yr, this.rs = o.rs, this.Rc = o.Rc, this.Ec = o.Ec, this.Ky = o.Ky, this.Yy = 0, this.Vy = 1e3, this.Zy = 0, this.Zc = 0, this.active = !0, this.tr = !0, this.Jy = null, this.ek = null, this.De = {}
            }, l = 0, this.update = function(e) {
                var o, s, d, u, h, f, m, p, g, w, y, k, b, v, S, x, P, C, M, T, B, _;
                if (this.active) {
                    if (this.tk) {
                        return this.tk -= e, void(this.tk <= 0 && (this.tk = 0, this.x = this.hr || a.Gr(0, r.wa), this.y = this.dr || a.Gr(0, r.wa)))
                    }
                    if ((l -= e) <= 0 && (this.De.me && (this.Ee(-this.De.me, this.De.je), this.De.time -= 1, this.De.time <= 0 && (this.De.me = 0)), l = 1e3), o = !1, s = 1, !this.zIndex && !this.Fc && this.y >= r.wa / 2 - r.ra / 2 && this.y <= r.wa / 2 + r.ra / 2 && (s = .33, this.Hc += r.ca * e), this.Fc) {
                        this.Hc = 0, this.jc = 0
                    } else if (this.Vy > 0) {
                        if (this.Vy -= e, this.Vy <= 0) {
                            if (this.zy) {
                                for (f = 0; f < i.length; ++f) {
                                    !i[f].tr || i[f].v && i[f].v.kt || (h = a.cn(this.x, this.y, i[f].x, i[f].y)) <= this.Gy && (!d || h < u) && (u = h, d = i[f])
                                }
                                d ? (this.ek = d, this.Zy = a.Gr(8e3, 12e3)) : (this.Zy = a.Gr(1e3, 2e3), this.Zc = a.Rr(-Math.PI, Math.PI))
                            } else {
                                this.Zy = a.Gr(4e3, 1e4), this.Zc = a.Rr(-Math.PI, Math.PI)
                            }
                        }
                    } else {
                        this.Zy > 0 && (m = this.speed * s, this.Jy && this.Jy.active && (!this.Jy.ls || this.Jy.tr) ? (this.Zc = a.os(this.x, this.y, this.Jy.x, this.Jy.y), m *= 1.42) : this.ek && this.ek.tr && (this.Zc = a.os(this.ek.x, this.ek.y, this.x, this.y), m *= 1.75, o = !0), this.Yy && (m *= .3), this.dir != this.Zc && (this.dir %= n, p = (this.dir - this.Zc + n) % n, g = Math.min(Math.abs(p - n), p, this.Ue * e), w = p - Math.PI >= 0 ? 1 : -1, this.dir += w * g + n), this.dir %= n, this.Hc += m * e * Math.cos(this.dir), this.jc += m * e * Math.sin(this.dir), this.Zy -= e, this.Zy <= 0 && (this.Jy = null, this.ek = null, this.Vy = this.te ? 1500 : a.Gr(1500, 6e3)))
                    }
                    for (this.zIndex = 0, this.Fc = !1, y = a.cn(0, 0, this.Hc * e, this.jc * e), b = 1 / (k = Math.min(4, Math.max(1, Math.round(y / 40)))), f = 0; f < k; ++f) {
                        for (this.Hc && (this.x += this.Hc * e * b), this.jc && (this.y += this.jc * e * b), T = t.Nc(this.x, this.y, this.scale), v = 0; v < T.length; ++v) {
                            for (S = 0; S < T[v].length; ++S) {
                                T[v][S].active && t.Ic(this, T[v][S], b)
                            }
                        }
                    }
                    if (M = !1, this.Yy > 0 && (this.Yy -= e, this.Yy <= 0)) {
                        for (M = !0, this.Yy = 0, this.$y && !a.Gr(0, 2) && (this.Hc += this.$y * Math.cos(this.dir), this.jc += this.$y * Math.sin(this.dir)), T = t.Nc(this.x, this.y, this.Ly), B = 0; B < T.length; ++B) {
                            for (v = 0; v < T[B].length; ++v) {
                                (x = T[B][v]).B && (P = a.cn(this.x, this.y, x.x, x.y)) < x.scale + this.Ly && (x.Ee(5 * -this.me) && t.Mc(x), t.Tc(x, a.os(this.x, this.y, x.x, x.y)))
                            }
                        }
                        for (v = 0; v < i.length; ++v) {
                            i[v].Bc(this) && c.send(i[v].id, "aa", this.K)
                        }
                    }
                    if (o || M) {
                        for (f = 0; f < i.length; ++f) {
                            (x = i[f]) && x.tr && (P = a.cn(this.x, this.y, x.x, x.y), this.Ly ? !this.Yy && P <= this.Ly + x.scale && (M ? (C = a.os(x.x, x.y, this.x, this.y), x.Ee(-this.me), x.Hc += .6 * Math.cos(C), x.jc += .6 * Math.sin(C), this.Jy = null, this.ek = null, this.Vy = 3e3, this.Yy = a.Gr(0, 2) ? 0 : 600) : this.Yy = this.Wy) : P <= this.scale + x.scale && (C = a.os(x.x, x.y, this.x, this.y), x.Ee(-this.me), x.Hc += .55 * Math.cos(C), x.jc += .55 * Math.sin(C)))
                        }
                    }
                    this.Hc && (this.Hc *= Math.pow(r.zo, e)), this.jc && (this.jc *= Math.pow(r.zo, e)), _ = this.scale, this.x - _ < 0 ? (this.x = _, this.Hc = 0) : this.x + _ > r.wa && (this.x = r.wa - _, this.Hc = 0), this.y - _ < 0 ? (this.y = _, this.jc = 0) : this.y + _ > r.wa && (this.y = r.wa - _, this.jc = 0)
                }
            }, this.Bc = function(e) {
                if (!e) {
                    return !1
                }
                if (e.v && e.v.pl && e.Yc >= e.v.pl) {
                    return !1
                }
                var t = Math.abs(e.x - this.x) - e.scale,
                    n = Math.abs(e.y - this.y) - e.scale;
                return t <= r.ho / 2 * 1.3 && n <= r.fo / 2 * 1.3
            }, d = 0, u = 0, this.animate = function(e) {
                this.Wc > 0 && (this.Wc -= e, this.Wc <= 0 ? (this.Wc = 0, this.Dr = 0, d = 0, u = 0) : 0 == u ? (d += e / (this.Xc * r.jo), this.Dr = a.Ws(0, this.Jc, Math.min(1, d)), d >= 1 && (d = 1, u = 1)) : (d -= e / (this.Xc * (1 - r.jo)), this.Dr = a.Ws(0, this.Jc, Math.max(0, d))))
            }, this.Er = function() {
                this.Wc = this.Xc = 600, this.Jc = .8 * Math.PI, d = 0, u = 0
            }, this.Ee = function(e, t, n) {
                if (this.active && (this.B += e, n && (this.Xy && !a.Gr(0, this.Xy) ? (this.Jy = n, this.Vy = 0, this.Zy = 2e3) : this.te && this.zy && n.ls ? (this.ek = n, this.Vy = 0, this.Zy = 8e3) : this.Uy || (this.Jy = n, this.Vy = 0, this.Zy = 2e3)), e < 0 && this.Ly && a.Gr(0, 1) && (this.Yy = 500), t && t.Bc(this) && e < 0 && c.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), this.B <= 0 && (this.Ky ? (this.tk = this.Ky, this.x = -1e6, this.y = -1e6) : (this.x = this.hr || a.Gr(0, r.wa), this.y = this.dr || a.Gr(0, r.wa)), this.B = this.X, this.Jy = null, t && (s(t, this.Ry), this.drop)))) {
                    for (var i = 0; i < this.drop.length;) {
                        t.dl(r.ea.indexOf(this.drop[i]), this.drop[i + 1]), i += 2
                    }
                }
            }
        }
    }]);