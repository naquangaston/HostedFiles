// @name Diep stuff
// @namespace http://tampermonkey.net/
// @version 2024-05-13
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
function z(a, b) {
    var c = q();
    return z = function(d, e) {
        d = d - 0x187;
        var f = c[d];
        return f;
    }, z(a, b);
}
var be = z;
(function(ap, aq) {
    var ba = z,
        ar = ap();
    while (!![]) {
        try {
            var as = -parseInt(ba(0x19b)) / 0x1 * (parseInt(ba(0x3cb)) / 0x2) + parseInt(ba(0x2d3)) / 0x3 + parseInt(ba(0x276)) / 0x4 * (parseInt(ba(0x216)) / 0x5) + parseInt(ba(0x422)) / 0x6 + parseInt(ba(0x31c)) / 0x7 * (parseInt(ba(0x2eb)) / 0x8) + -parseInt(ba(0x453)) / 0x9 * (-parseInt(ba(0x4f3)) / 0xa) + -parseInt(ba(0x1e1)) / 0xb * (parseInt(ba(0x3a8)) / 0xc);
            if (as === aq) break;
            else ar['push'](ar['shift']());
        } catch (at) {
            ar['push'](ar['shift']());
        }
    }
}(q, 0xbf335));

function G(ap) {
    return new Promise(aq => setTimeout(aq, ap));
}

function H() {
    var bb = z;
    return [...document[bb(0x4ee) + bb(0x23f)](bb(0x292))]['forEach'](ap => ap['remove']());
}

function I(ap = this['t']) {
    var bc = z;
    return !!ap && !ap[bc(0x188)];
}

function J(ap, aq = null, ar, as) {
    var bd = z,
        at;
    null == aq && (aq = ap);
    try {
        ar && window[ap][bd(0x20b)]();
    } catch (au) {
        window[ap] = null;
    }
    try {
        I(window[ap]) ? (globalRoot[aq] = open('', bd(0x1de), 'width=256,' + 'height=305'), globalRoot[aq][bd(0x274)]['document'][bd(0x405)][bd(0x50f)] = '', globalRoot[aq]['window'][bd(0x4c2)][bd(0x1b1)][bd(0x50f)] = '') : (window[ap] = at = open(as, bd(0x1de), bd(0x3f8) + bd(0x386)), at[bd(0x4c2)][bd(0x1f7)](al[bd(0x4af)][bd(0x20f)]));
    } catch (av) {}
    return globalRoot[aq] = globalRoot[ap], at;
}

function K(ap, aq = document[be(0x405)]) {
    var bf = be;
    if (aq['id'] === ap) return aq;
    if (aq[bf(0x4a9)]) {
        const ar = K(ap, aq[bf(0x4a9)]);
        if (ar) return ar;
    }
    for (const as of aq['children']) {
        const at = K(ap, as);
        if (at) return at;
    }
    return null;
}

function M(ap, aq) {
    new CustomLog(ap)['log'](aq);
}

function Q() {
    var bg = be;
    M(bg(0x48c), ab['screen']), V[bg(0x4f8)] && V[bg(0x4f8)](ab[bg(0x450)]);
}
infothingy = {}, inf = {};
const U = GM_getValue(be(0x288)) || {},
    V = {
        'update': function(ap) {}
    },
    W = function(ap, aq) {
        var bh = be;
        return 0x1 != arguments[bh(0x275)] ? (GM_setValue(ap, aq), aq) : GM_getValue(ap);
    };
getClose = function(ap) {
    var bi = be;
    return ap[bi(0x4e8)](aq => (aq['o'] = getDistance(...aq['i'], canvas[bi(0x3b8)] / 0x2, canvas['height'] / 0x2), aq))['sort']((aq, ar) => aq['o'] - ar['o'])[0x0];
}, getMid = function(ap = [{
    'x': 0x0,
    'y': 0x0
}]) {
    var bj = be,
        aq = ap[bj(0x275)],
        [ar, as] = [0x0, 0x0];
    return ap[bj(0x359)](at => {
        ar += at['x'], as += at['y'];
    }), {
        'x': ar / aq,
        'y': as / aq
    };
}, (function() {
    var bk = be;
    Object[bk(0x4f9)](this || arguments[0x0], {
        'l': class {
            constructor(ap) {
                var bl = bk;
                this['title'] = {
                    'body': ap || bl(0x1f4),
                    'color': 'darkgrey',
                    'size': bl(0x2d0)
                }, this[bl(0x405)] = {
                    'color': '#008f68',
                    'size': '1rem'
                };
            }['u'](ap) {
                var bm = bk;
                this[bm(0x26d)]['body'] = ap;
            }['m']({
                color: ap,
                size: aq
            }) {
                var bn = bk;
                ap !== undefined && (this[bn(0x26d)][bn(0x23a)] = ap), aq !== undefined && (this[bn(0x26d)][bn(0x25c)] = aq);
            }['p']({
                color: ap,
                size: aq
            }) {
                var bo = bk;
                ap !== undefined && (this[bo(0x405)][bo(0x23a)] = ap), aq !== undefined && (this[bo(0x405)]['size'] = aq);
            }[bk(0x22b)](ap = '') {}
        }
    });
}(window['globalRoot'] || window)), draw = function(ap) {
    var bp = be,
        aq;
    try {
        if (ap[bp(0x3a2)] && bp(0x25a) != ap['shape'] && !ap['h']) {
            var {
                x: ar,
                y: as
            } = getMid(this['_']['map'](au => ({
                'x': au[0x0],
                'y': au[0x1]
            })));
            let at = canvas['getContext']('2d');
            at[bp(0x500)](), at['h'] = !0x0, (aq = at[bp(0x1e9) + bp(0x223)](0x0, 0x0, 0xaa, 0x0))[bp(0x4cd) + 'op']('0', bp(0x472)), aq[bp(0x4cd) + 'op'](bp(0x3c5), bp(0x308)), aq['addColorSt' + 'op'](bp(0x330), bp(0x1a5)), at['strokeStyl' + 'e'] = aq, at['lineWidth'] = 0x5, at[bp(0x351)](ar, as), at[bp(0x212)](ar, as, 0x32, 0x0, 0x2 * Math['PI']), at[bp(0x43e)](), at['h'] = !0x1;
        }
    } catch (au) {}
}, set_convar = window[be(0x18b)] = function(ap, aq) {
    input['set_convar'](ap, aq);
}, execute = window[be(0x29f)] = function(ap) {
    var bq = be,
        aq = (ap['match'](/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i) || {
            'groups': {}
        })[bq(0x1bb)],
        ar = (ap['split']('\x20'), function(as) {
            var br = bq;
            const at = as['index'],
                au = as[br(0x447)];
            for (let av = 0x0; av < otherStuff[br(0x1d2)][br(0x275)]; av++) {
                let {
                    index: aw,
                    name: ax
                } = otherStuff[br(0x1d2)][av];
                if (aw == at && au == ax) return av;
            }
        }(aq));
    null != ar && (colors[otherStuff[bq(0x1d2)][ar][bq(0x3c9)]] = '#' + aq[bq(0x3d5)][bq(0x4dc)](/(0x|#)(?<hex>[\w]+)/i)[bq(0x1bb)]['v'], otherStuff['colors'][ar][bq(0x38c)] = otherStuff[bq(0x1d2)][ar]['F'] || otherStuff['colors'][ar]['default'], otherStuff[bq(0x1d2)][ar]['F'] = aq[bq(0x3d5)]['toUpperCas' + 'e'](), otherStuff[bq(0x1d2)][ar]), input['execute'](ap);
};
class X {
    ['S'](ap) {
        var bs = be,
            aq, ar, as, at, au, av, aw, ax, ay;
        this['k'] = ap, aq = 0x0, this['T'] = '', ar = ap['B'], as = ap['D'], at = ap[bs(0x405)], au = ap['N'], av = ap['C'], aw = ap['A'], ax = ap['R'], ay = ap[bs(0x40d)];
        for (let az = 0x0; az <= 0x7; az++) {
            az < aw && aq < 0x22 && (this['T'] += '6', aq++), az < au && aq < 0x22 && (this['T'] += '4', aq++), az < av && aq < 0x22 && (this['T'] += '5', aq++), az < ax && aq < 0x22 && (this['T'] += '7', aq++);
        }
        for (let aA = 0x0; aA <= 0x7; aA++) {
            aA < ay && aq < 0x22 && (this['T'] += '8', aq++);
        }
        for (let aB = 0x0; aB <= 0x7; aB++) {
            aB < ar && aq < 0x22 && (this['T'] += '1', aq++), aB < as && aq < 0x22 && (this['T'] += '2', aq++), aB < at && aq < 0x22 && (this['T'] += '3', aq++);
        }
    }
}
class Y {
    constructor(ap) {
        var bt = be;
        ap && this[bt(0x1ca)]();
    }#
    e = !0x1;
    [be(0x1ca)]() {
        this.#e = !this.#e;
    }
    get[be(0x3db)]() {
        return this.#e;
    }
    set[be(0x3db)](ap) {
        this.#e = !!ap;
    }
}
class Z {
    static get['P']() {
        return new Z('br');
    }
    constructor(ap, aq) {
        var bu = be;
        this[bu(0x4af)] = ap[bu(0x344) + 'r'][bu(0x447)][bu(0x271)](bu(0x261)) && ap || (function() {
            var bv = bu;
            for (let ar in arguments[0x1]) {
                arguments[0x0][bv(0x2b9) + 'te'](ar, arguments[0x1][ar]);
            }
            return arguments[0x0];
        }(document[bu(0x50c) + 'ent'](ap), aq));
    }[be(0x2e9)](ap) {
        var bw = be;
        for (let aq in ap) {
            this[bw(0x4af)][bw(0x2e9)][aq] = ap[aq];
        }
        return this;
    }['append'](ap, ...aq) {
        var bx = be;
        this[bx(0x4af)][bx(0x40f)](ap['element'] || ap);
        for (let ar = 0x0; ar < aq[bx(0x275)]; ar++) {
            let as = aq[ar];
            this['element']['append'](as['element'] || as);
        }
        return this;
    }['j'](ap) {
        var by = be;
        return (ap[by(0x4af)] || by(0x473) == typeof ap ? document['querySelec' + by(0x26e)](ap) : ap)[by(0x40f)](this[by(0x4af)]), this;
    }['on'](ap, aq) {
        return this['element']['on' + ap] = aq, this;
    }[be(0x352)](ap, aq) {
        var bz = be;
        return this[bz(0x4af)][ap] = aq, this;
    }[be(0x311)]() {
        var bA = be;
        return this[bA(0x4af)][bA(0x311)](), this;
    }['get']() {
        var bB = be;
        return this[bB(0x4af)][arguments[0x0]];
    }
    get[be(0x30d)]() {
        var bD = be;
        return new class {
            constructor(ap) {
                var bC = z;
                for (var aq = 0x0; aq < ap[bC(0x275)]; aq += 0x1) {
                    this[aq] = ap[aq];
                }
                Object[bC(0x341) + bC(0x3c4)](this, bC(0x275), {
                    'get': function() {
                        return ap['length'];
                    }
                }), Object[bC(0x243)](this);
            }[bD(0x304)](ap) {
                return null != this[ap] ? this[ap] : null;
            }[bD(0x441)](ap) {
                var bE = bD;
                for (var aq = 0x0; aq < this[bE(0x275)]; aq += 0x1) {
                    if (this[aq]['id'] === ap || this[aq][bE(0x447)] === ap) return this[aq];
                }
                return null;
            }
            get['toArray']() {
                return [...this];
            }
        }([...this[bD(0x4af)][bD(0x30d)]]);
    }
}
const {
    t: a0,
    L: a1,
    O: a2,
    I: a3,
    M: a4,
    U: a5,
    q: a6
} = [null, null, null, null, function(ap, aq) {
    var bF = be;
    localStorage[bF(0x44e)](ap, aq);
}, function(ap) {
    var bG = be;
    return localStorage[bG(0x3cf)](ap);
}, function(ap) {
    var bH = be;
    let aq = {};
    return ap[bH(0x359)](function(ar) {
        aq[ar] || (aq[ar] = !0x0);
    }), Object[bH(0x42a)](aq);
}], a7 = new Y(0x1), a8 = new Y(), a9 = new Y(), aa = new Y(), ab = document[be(0x2a5) + 'tor'](be(0x4d8)), ac = new Z(be(0x32b))[be(0x352)](be(0x4f6), be(0x48f))[be(0x352)]('href', be(0x387) + be(0x2f4) + be(0x419) + be(0x2d8) + be(0x257) + be(0x1d8) + be(0x244)), ad = new Z('link')['set'](be(0x4f6), be(0x48f))[be(0x352)](be(0x334), 'https://cd' + be(0x34b) + be(0x200) + be(0x2a6) + be(0x268) + '12.1/jquer' + be(0x215)), ae = new Z(be(0x2f1), {
    'integrity': be(0x1ef) + be(0x4ca) + 'NKxN+CfCh+' + '3qOVUtJn3Q' + 'NZ0TciWLP4' + '=',
    'crossorigin': 'anonymous'
})[be(0x352)]('src', be(0x2cd) + be(0x444) + 'com/jquery' + be(0x2de)), af = new Z(be(0x2f1))['set'](be(0x281), be(0x2cd) + be(0x444) + be(0x2b8) + be(0x523) + be(0x26a)), ag = new Z(be(0x2f1))[be(0x352)](be(0x281), be(0x387) + be(0x2f4) + be(0x419) + 'm/bootstra' + be(0x48a) + be(0x49c) + be(0x24f)), ah = new Z('script')[be(0x352)](be(0x281), 'https://aj' + be(0x36a) + be(0x336) + 'ax/libs/jq' + be(0x46d) + be(0x4d3) + be(0x418)), ai = new Z(be(0x2e9))[be(0x352)](be(0x50f), '\x0a\x20\x20\x20\x20\x20.sta' + be(0x4c7) + be(0x51b) + be(0x1fc) + be(0x4e7) + be(0x469) + be(0x3d4) + be(0x484) + ':width\x202s\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.' + be(0x190) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x1c3) + be(0x2a9) + be(0x3ad) + be(0x51a) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20bod' + be(0x19a) + be(0x265) + be(0x44c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20-ms-over' + be(0x2b7) + be(0x3b0) + be(0x4e7) + be(0x233) + be(0x19d) + be(0x4e7) + be(0x4b7) + 'width:\x20non' + be(0x403) + '\x20\x20\x20\x20\x20/*\x20Fi' + 'refox\x20*/\x0a\x20' + be(0x4e7) + '\x20backgroun' + be(0x454) + be(0x51e) + be(0x2bf) + be(0x49e) + be(0x225) + be(0x2ee) + be(0x499) + be(0x3d7) + be(0x206) + be(0x39f) + be(0x1c6) + be(0x221) + '\x20\x20\x20\x20\x20\x20bord' + be(0x3f3) + 'lid\x20red;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x30f) + 'dius:\x208px;' + be(0x1a9) + be(0x3a9) + be(0x4d6) + be(0x4e4) + be(0x296) + be(0x203) + be(0x1e0) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + be(0x467) + 'icPlayer\x20{' + be(0x1a9) + be(0x3a9) + be(0x245) + be(0x4dd) + '\x20\x20\x20\x20\x20borde' + be(0x329) + be(0x1d0) + be(0x48d) + be(0x3c2) + be(0x3df) + be(0x2e0) + be(0x392) + 'on\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20col' + 'or:\x20rgb(27' + ',\x2051,\x2099)\x0a' + be(0x4c0) + be(0x426) + be(0x50b) + be(0x2cf) + be(0x4bd) + be(0x332) + be(0x1ce) + be(0x20c) + be(0x381) + be(0x303) + be(0x4ff) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x20a) + be(0x3cd) + be(0x2c0) + 'ackground:' + be(0x4db) + be(0x210) + be(0x499) + (be(0x301) + 'me\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20col' + 'or:\x20red\x0a\x20\x20' + be(0x499) + '\x20\x20\x20\x20\x20\x20\x20.St' + be(0x320) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + be(0x3eb) + be(0x278) + be(0x28f) + be(0x189) + be(0x451) + be(0x2a7) + be(0x1f0) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + be(0x3b9) + be(0x2f8) + be(0x1cd) + 'ar\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dis' + be(0x196) + be(0x364) + be(0x435) + '\x20.hidden\x20{' + be(0x1a9) + be(0x50d) + be(0x3b0) + be(0x499) + '\x20\x20\x20\x20\x20\x20\x20.dr' + 'opdown\x20{\x0a\x20' + be(0x4e7) + be(0x394) + be(0x263) + be(0x3bb) + be(0x198) + be(0x44d) + 'tive;\x0a\x20\x20\x20\x20' + be(0x3f5) + be(0x4a6) + 's_2\x20{\x0a\x20\x20\x20\x20' + be(0x389) + 'x-height:\x20' + be(0x2e1) + be(0x46f) + be(0x379) + 'file\x20{\x0a\x20\x20\x20' + be(0x382) + be(0x306) + 'ixed;\x0a\x20\x20\x20\x20' + be(0x267) + be(0x395) + be(0x4e7) + be(0x485) + be(0x4dd) + be(0x517) + 'ex:\x20100;\x0a\x20' + be(0x3bf) + '\x20\x20\x20\x20\x20\x20\x20\x20#c' + be(0x365) + be(0x4e7) + 'position:\x20' + be(0x22d) + be(0x258) + be(0x495) + be(0x4e7) + be(0x4b4) + be(0x4e7) + be(0x350) + be(0x383) + be(0x2a2) + be(0x30c) + be(0x4e7) + be(0x32d) + be(0x1cc) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + be(0x371) + be(0x1a9) + be(0x1e4) + 'n:\x20fixed;\x0a' + be(0x4e7) + be(0x22c) + be(0x2a9) + be(0x2a4) + be(0x42f) + be(0x4e7) + '\x20\x20width:\x20c' + be(0x2ca) + '\x2020px);\x0a\x20\x20' + be(0x499) + be(0x414) + be(0x25b) + be(0x4b3) + be(0x31b) + be(0x364) + be(0x282) + be(0x528) + be(0x2e3) + be(0x231) + be(0x199)) + ('\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20in' + be(0x241) + be(0x1bc) + be(0x4e7) + be(0x46a) + 'px\x20solid\x20r' + be(0x407) + '5,\x20255);\x0a\x20' + be(0x4e7) + '\x20color:\x20wh' + be(0x2b6) + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + be(0x526) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'box-sizing' + be(0x361) + be(0x3a0) + be(0x2f0) + be(0x3c3) + be(0x4c7) + be(0x411) + be(0x393) + be(0x264) + 'css/search' + 'icon.png\x27)' + be(0x364) + be(0x28b) + be(0x44b) + be(0x1d1) + be(0x211) + be(0x425) + be(0x464) + be(0x1fe) + be(0x1ac) + be(0x4e7) + be(0x350) + be(0x383) + be(0x33e) + 'size:\x2016px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x2d5) + 'g:\x2012px\x2020' + 'px\x2012px\x2040' + be(0x2a9) + '\x20\x20\x20\x20\x20\x20bord' + 'er:\x201px\x20so' + be(0x4c6) + be(0x4e7) + be(0x35a) + be(0x1b0) + be(0x4dd) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + be(0x353) + be(0x4e7) + '\x20\x20list-sty' + 'le-type:\x20n' + be(0x1e7) + be(0x226) + 'ding:\x200;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x202) + be(0x364) + be(0x435) + be(0x3da) + 'div\x20{\x0a\x20\x20\x20\x20' + be(0x1c9) + be(0x1ae) + be(0x29d) + be(0x364) + be(0x493) + be(0x423) + be(0x364) + be(0x1f3) + be(0x519) + be(0x1b3) + '*/\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + be(0x1c0) + be(0x2dd) + be(0x3d9) + be(0x45a) + be(0x1a9) + be(0x479) + be(0x226) + be(0x4a2) + be(0x364) + be(0x524) + be(0x33a) + be(0x2bc) + be(0x246) + be(0x439) + be(0x21b) + be(0x43a) + 'lor:\x20black' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20displa' + be(0x3f1) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + be(0x406)) + (be(0x4fb) + be(0x1a9) + be(0x4ad) + be(0x3ef) + '\x20#ddd;\x0a\x20\x20\x20' + be(0x256) + be(0x343) + be(0x31a) + be(0x2cf) + be(0x299) + be(0x3e2) + 'ders\x20*/\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + be(0x260) + be(0x401) + be(0x481) + be(0x18e) + '\x20\x20\x20\x20\x20\x20\x20\x20;\x0a' + be(0x4e7) + be(0x514) + be(0x3d6) + be(0x28e) + be(0x33f) + 'tion:\x20none' + be(0x364) + be(0x218) + be(0x409) + be(0x1a9) + be(0x20a) + 'black;\x0a\x20\x20\x20' + be(0x390) + 'isplay:\x20bl' + be(0x37a) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + be(0x391) + be(0x2e4) + be(0x4e7) + 'cursor:\x20po' + 'inter;\x0a\x20\x20\x20' + be(0x2c0) + be(0x251) + be(0x21f) + be(0x2d1) + be(0x424) + be(0x41f) + be(0x4dd) + be(0x24c) + be(0x235) + be(0x3cc) + be(0x30e) + be(0x411) + be(0x38a) + be(0x4f1) + be(0x354) + be(0x50a) + be(0x364) + be(0x2ed) + be(0x49a) + be(0x51c) + be(0x4dd) + be(0x1c4) + be(0x449) + ':\x20none;\x0a\x20\x20' + be(0x4e7) + 'font-size:' + '\x2018px;\x0a\x20\x20\x20' + be(0x455) + be(0x254) + 'k;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20displ' + be(0x23e) + be(0x4c0) + be(0x2db) + be(0x3ea) + be(0x340) + '.header)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x385) + be(0x525) + be(0x416) + be(0x3c0) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#' + be(0x516) + be(0x240) + be(0x2ab) + 'ton]:hover' + be(0x3f0) + be(0x2d2) + be(0x425) + 'ckground-c' + be(0x250) + be(0x4a5) + be(0x1d3) + be(0x43a) + be(0x37e) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a')), aj = new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x358) + be(0x1c5))[be(0x40f)](new Z(be(0x2e7), {
    'id': be(0x1da) + 'gs'
})[be(0x352)]('className', 'menu')[be(0x40f)](new Z('a')[be(0x352)]('innerText', '\x20'), new Z('h2')[be(0x352)](be(0x47f), be(0x3ca) + be(0x4c5)), new Z(be(0x370))[be(0x352)](be(0x325), be(0x337))[be(0x352)](be(0x2a1), '')[be(0x352)]('id', be(0x45e)), new Z('br'), new Z('br'), new Z(be(0x2e7))[be(0x352)]('id', be(0x45f))[be(0x40f)](new Z('div')[be(0x352)]('id', 'myBar')[be(0x40f)](new Z('span')[be(0x352)]('id', be(0x208)))), new Z('br'), new Z(be(0x2e7))[be(0x352)]('id', be(0x4f0)), new Z(be(0x2e7))[be(0x352)]('id', be(0x2ec)), new Z(be(0x2e7))[be(0x352)]('id', be(0x24d)), new Z(be(0x295))[be(0x352)]('id', be(0x295))), new Z('br'), new Z('hr'), new Z('br'), new Z('div', {
    'id': be(0x1da) + 'gs'
})[be(0x352)]('className', be(0x3c7))[be(0x40f)](new Z('center')['append'](new Z(be(0x292), {
    'id': be(0x38b) + 'r',
    'src': W('LP') || ''
})['set']('allowfulls' + be(0x333), !0x0), Z['P'], Z['P'], new Z(be(0x370), {
    'id': be(0x508) + be(0x29a)
}), new Z(be(0x2f1))['set'](be(0x50f), be(0x1a9) + be(0x4f4) + function(ap) {
    var bI = be;
    return !(!String(ap)['match'](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/) || 0xb != String(ap)['match'](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[0x8][bI(0x275)]) && String(ap)[bI(0x4dc)](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[0x8];
}[be(0x36c)]() + (';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x4ab) + be(0x1bf) + 'mentById(\x27' + be(0x508) + 'put\x27).onch' + 'ange=\x0a\x20\x20\x20\x20' + be(0x246) + be(0x400) + be(0x314) + be(0x487) + be(0x291) + be(0x238) + be(0x32c) + be(0x45c) + be(0x4e7) + be(0x434) + be(0x4fc) + be(0x34a) + be(0x4e7) + be(0x322) + '`https://w' + be(0x40a) + be(0x46e) + be(0x3b7) + 'ent(target' + be(0x31e) + be(0x355) + be(0x279) + be(0x35b) + 'earchParam' + be(0x201) + be(0x442) + ')).join(\x27&' + be(0x49b) + be(0x2c4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x23d) + 't.getEleme' + be(0x298) + be(0x270) + be(0x4eb) + be(0x4e7) + be(0x3fa) + be(0x366) + be(0x521) + be(0x4e7) + be(0x408))))), new Z('hr'), new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x3c7))[be(0x352)]('id', be(0x3c7))[be(0x40f)](new Z('h2')[be(0x352)]('innerText', be(0x1c2))), new Z('br'), new Z('hr'), new Z('br'), new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x3c7))[be(0x352)]('id', be(0x515))[be(0x40f)](new Z(be(0x2e9))[be(0x352)](be(0x50f), be(0x1a9) + be(0x47d) + be(0x19f) + be(0x2f9) + 'health,\x20.b' + 'ody,\x20etc.\x20' + be(0x1bd) + be(0x42e) + be(0x3f2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x1b6) + 'd:\x20#EEB690' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x433) + be(0x2c9) + be(0x3aa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x1a2) + 'round:\x20#EC' + '6CF0;\x0a\x20\x20\x20\x20' + be(0x4c0) + be(0x4e7) + be(0x522) + be(0x1a9) + '\x20\x20\x20\x20\x20\x20\x20bac' + 'kground:\x20#' + be(0x3ed) + be(0x4e7) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x335) + 'ed\x20{\x0a\x20\x20\x20\x20\x20' + be(0x4e7) + be(0x1b6) + be(0x34d) + be(0x364) + be(0x433) + be(0x2c9) + 'pen\x20{\x0a\x20\x20\x20\x20' + be(0x4e7) + be(0x388) + be(0x24b) + be(0x4f2) + be(0x4a8) + be(0x4e7) + be(0x2fd) + be(0x4e7) + be(0x385) + 'und:\x20#F06C' + be(0x3ba) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + be(0x4e7) + be(0x39d) + be(0x2d9) + be(0x425) + 'ckground:\x20' + 'rgb(152,\x202' + '40,\x20108);\x0a' + be(0x4e7) + be(0x1df) + '\x20\x20\x20\x20\x20\x20\x20.sp' + be(0x27c) + be(0x4e7) + be(0x388) + be(0x33d) + 'C;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + be(0x2c2)), new Z('h2')[be(0x352)]('innerText', 'Builds-'), new Z(be(0x2e7))[be(0x352)]('id', 'stats_show')[be(0x40f)](new Z(be(0x2e7))[be(0x40f)](new Z(be(0x287))[be(0x352)](be(0x47f), 'Regen:'), new Z('span')[be(0x352)]('className', be(0x1cf)))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x2cb))['append'](new Z(be(0x2e7))['set']('className', be(0x50e)))), new Z('div')[be(0x40f)](new Z(be(0x287))[be(0x352)](be(0x47f), 'Health:'), new Z(be(0x287))[be(0x352)](be(0x437), 'health_'))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x2cb))[be(0x40f)](new Z('div')['set'](be(0x437), be(0x1c1) + 'h'))), new Z(be(0x2e7))[be(0x40f)](new Z(be(0x287))[be(0x352)](be(0x47f), be(0x194)), new Z(be(0x287))['set'](be(0x437), be(0x346)))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), 'stats')[be(0x40f)](new Z('div')['set'](be(0x437), be(0x34f)))), new Z(be(0x2e7))['append'](new Z('span')['set'](be(0x47f), be(0x39e)), new Z(be(0x287))[be(0x352)](be(0x437), be(0x49d)))[be(0x40f)](new Z(be(0x2e7))[be(0x352)]('className', be(0x2cb))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x191) + 'd'))), new Z(be(0x2e7))[be(0x40f)](new Z(be(0x287))['set'](be(0x47f), 'Pen:'), new Z(be(0x287))[be(0x352)](be(0x437), be(0x2fe)))['append'](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x2cb))['append'](new Z(be(0x2e7))[be(0x352)](be(0x437), 'stat\x20pen'))), new Z(be(0x2e7))[be(0x40f)](new Z(be(0x287))[be(0x352)](be(0x47f), be(0x518)), new Z('span')['set'](be(0x437), be(0x26c)))[be(0x40f)](new Z('div')['set']('className', be(0x2cb))[be(0x40f)](new Z('div')[be(0x352)]('className', be(0x1d6)))), new Z('div')['append'](new Z(be(0x287))[be(0x352)]('innerText', be(0x192)), new Z(be(0x287))[be(0x352)]('className', 'reloads_'))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x2cb))[be(0x40f)](new Z(be(0x2e7))[be(0x352)](be(0x437), be(0x23c) + 'ds'))), new Z(be(0x2e7))[be(0x40f)](new Z(be(0x287))[be(0x352)]('innerText', be(0x375)), new Z(be(0x287))[be(0x352)](be(0x437), be(0x4fa)))[be(0x40f)](new Z(be(0x2e7))[be(0x352)]('className', be(0x2cb))[be(0x40f)](new Z(be(0x2e7))['set']('className', be(0x2f2))))), new Z('hr'), new Z(be(0x370))[be(0x352)]('id', be(0x32e))[be(0x352)](be(0x2fb) + 'r', be(0x38d) + '\x20names..')['set']('title', be(0x2be) + 'name'), new Z('br'), new Z('br'), new Z('ul')[be(0x352)]('id', 'myUL'))), ak = new Z('script')[be(0x352)](be(0x50f), be(0x232) + 'le.log(\x27Te' + be(0x380) + ')\x0a\x20\x20\x20\x20docu' + 'ment.getEl' + be(0x448) + be(0x1d4) + be(0x43b) + be(0x2c5) + be(0x440) + be(0x4d2) + be(0x377) + be(0x19c) + be(0x40e) + 'input,\x20fil' + be(0x345) + be(0x272) + be(0x33c) + '\x20\x20\x20\x20\x20\x20\x20inp' + be(0x413) + be(0x1bf) + be(0x31f) + 'search_\x22);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20f' + be(0x3c6) + be(0x4e5) + be(0x1f8) + be(0x1b9) + '\x20\x20\x20ul\x20=\x20do' + be(0x2ae) + be(0x458) + 'd(\x22myUL\x22);' + be(0x446) + be(0x510) + 'ElementsBy' + 'TagName(\x22l' + 'i\x22);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20for\x20(i\x20' + be(0x3bd) + be(0x349) + be(0x4c9) + be(0x28e) + 'ry{\x0a\x20\x20\x20\x20\x20\x20' + be(0x4e7) + be(0x1e3) + be(0x4ee) + be(0x23f) + be(0x209) + be(0x364) + '\x20\x20\x20\x20\x20\x20\x20\x20tx' + 'tValue\x20=\x20a' + be(0x1eb) + 'nt\x20||\x20a.in' + be(0x2b2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + be(0x44f) + be(0x41c) + be(0x4c4) + ').indexOf(' + 'filter)\x20>\x20' + be(0x3e9) + be(0x4e7) + be(0x4e9) + '].style.di' + be(0x269) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x20' + 'else\x20{\x0a\x20\x20\x20' + be(0x4e7) + be(0x1ea) + be(0x1f1) + 'isplay\x20=\x20\x22' + 'none\x22;\x0a\x20\x20\x20' + be(0x4e7) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + be(0x22e) + be(0x2ea) + be(0x470) + be(0x1db) + be(0x492) + ';\x0a'), al = new Z(be(0x230))['append'](new Z(be(0x1b1))['append'](ac, ad, ae, af, ag, ah, ai), new Z(be(0x405))['append'](aj, ak, new Z(be(0x2f1))[be(0x352)](be(0x50f), function() {
    var bU = be;

    function ap(aF) {
        return !!(aF || this)[aw(0xe9)](/[A-Z_$a-z]/gi);
    }

    function aq(aF) {
        return !!(aF || this)[aw(0xe9)](/[\(\{\[]/gi);
    }

    function ar(aF) {
        return !!(aF || this)[aw(0xe9)](/[\]\}\)]/gi);
    }

    function as(aF) {
        return !!(aF || this)[aw(0xe9)](/[0-9]/gi);
    }

    function at(aF) {
        return !!(aF || this)['match'](/[\r\n]/gi);
    }

    function au(aF) {
        return !!(aF || this)[aw(0xe9)](/ /gi);
    }

    function av() {
        var aF = aw,
            aG = aA[ay];
        aE[aF(0xe1)] = aG['t'], document[aF(0xfb)] = aG['name'], aE[aF(0x108)] = function() {
            var bJ = z,
                aH = aF;
            aE[aH(0xe1)] = null, ay++, aG = aA[ay], aE['src'] = aG['t'], document[bJ(0x26d)] = aG[aH(0xc9)];
        };
    }

    function aw(aF, aG) {
        var aH = ax();
        return (aw = function(aI, aJ) {
            return aH[aI -= 0xaf];
        })(aF, aG);
    }

    function ax() {
        var bK = z,
            aF = [bK(0x305), bK(0x4aa), bK(0x1be), bK(0x50f), 'type', bK(0x35e), bK(0x266), bK(0x4d1), 'mapAsync', bK(0x49f), bK(0x512), 'assign', bK(0x437), bK(0x45e), bK(0x4bc), bK(0x18c), bK(0x360), bK(0x4c1), bK(0x421), bK(0x376), bK(0x337), bK(0x36f), bK(0x369) + bK(0x520), bK(0x457), bK(0x4f7), bK(0x2c1), 'NOT\x20SUPPOR', bK(0x24a), bK(0x331), 'size', bK(0x359), bK(0x378), bK(0x3a1), bK(0x438), bK(0x35d), bK(0x271), 'fftSize', bK(0x4e8), bK(0x3a6), bK(0x490), 'width', bK(0x2e2) + bK(0x445), 'getContext', bK(0x447), 'loadend', bK(0x488), bK(0x18f), bK(0x3a4), '3228507JKS' + bK(0x187), bK(0x415), bK(0x47c), 'pop', bK(0x208), 'files', bK(0x40f), bK(0x18d), bK(0x42c), bK(0x402), bK(0x3a7), bK(0x242), 'frequencyB', bK(0x25a), bK(0x248), bK(0x420), bK(0x2b5), bK(0x491), 'loop:', bK(0x281), bK(0x1b7), bK(0x2f7), bK(0x1dc), bK(0x28d), bK(0x399), bK(0x286), bK(0x344), bK(0x4dc), bK(0x362), bK(0x370), bK(0x4ef), 'destinatio', 'onclick', bK(0x275), bK(0x35f), bK(0x4ee), bK(0x287), 'load', 'createElem', bK(0x36c), bK(0x506), bK(0x334), 'Cant\x20forma', 'createAnal', bK(0x1e5), bK(0x26d), 'isArray', bK(0x227), bK(0x22a), bK(0x4ec) + 'G', 'The\x20\x22', bK(0x1af), 'ent', 'style', 'readAsData', 'function', bK(0x3e5), bK(0x295), bK(0x27b), bK(0x239), 'play', bK(0x1ed), bK(0x4da), bK(0x3e6), bK(0x1f2), bK(0x2b1), bK(0x47f), bK(0x2da), bK(0x3d3) + bK(0x1a3), bK(0x1a6) + bK(0x3b5), bK(0x482), bK(0x27a) + 'XE', bK(0x3b2), bK(0x1e6)];
        return (ax = function() {
            return aF;
        })();
    }
    var ay, az, aA, aB, aC = aw;
    ! function(aF, aG) {
        var bL = z;
        for (var aH = aw, aI = aF();;) {
            try {
                if (0xa3444 === parseInt(aH(0x115)) / 0x1 + parseInt(aH(0xc7)) / 0x2 + -parseInt(aH(0xff)) / 0x3 * (-parseInt(aH(0x127)) / 0x4) + -parseInt(aH(0xbf)) / 0x5 * (parseInt(aH(0x113)) / 0x6) + -parseInt(aH(0xb4)) / 0x7 + parseInt(aH(0x112)) / 0x8 + -parseInt(aH(0xce)) / 0x9) break;
                aI[bL(0x378)](aI[bL(0x277)]());
            } catch (aJ) {
                aI[bL(0x378)](aI['shift']());
            }
        }
    }(ax), aB = 0x64,
        function() {
            var bQ = z;

            function aF(aN, aO) {
                var bM = z,
                    aP, aQ = aw,
                    aR = 0x0,
                    aS = '',
                    aT = [typeof String(), aQ(0x105), aQ(0x105)];
                if (![aT[aQ(0x109)](typeof this), aT[aQ(0x109)](typeof aN)][bM(0x3a4)](aU => !(aU < 0x0))[aQ(0xef)]) throw aQ(0xf8) + aQ(0x111) + 'de';
                (aP = (Array[aQ(0xfc)](aN || this) ? (aN || this)[aQ(0x10d)](aO) : (aT[bM(0x239)](typeof aN) < 0x0 ? this : aN)[aQ(0xf5)]()[aQ(0x11a)]('\x20\x20')[aQ(0x10d)]('')[bM(0x1be)]('{')[bM(0x3e6)]('{\x0a')[aQ(0x11a)]('}')[bM(0x3e6)]('\x0a}')[aQ(0x11a)]('\x0a\x0a')[aQ(0x10d)]('\x0a'))[aQ(0x11a)](''))[aQ(0xef)];
                for (let aU = 0x0; aU < aP[aQ(0xef)]; aU++) {
                    const aV = aP[aU],
                        aW = aP[aU + 0x1],
                        aX = aP[aU - 0x1];
                    Number((aU / aP[aQ(0xef)] * 0x64)[aQ(0xfa)](0x2)), '\x5c' != aX && ('{' == aV && aR++, '}' == aV && aR--), aR < 0x0 && (aR = 0x0), aS += '\x0a' == aV ? '}' == aW ? aV + '\x20' [bM(0x266)](aR ? aR - 0x1 : aR) : aV + '\x20' [aQ(0x11e)](aR) : aV;
                }
                return aS;
            }

            function aG(aN) {
                var bN = z,
                    aO = aw;
                return (aN || this)[bN(0x344) + 'r'][aO(0xc9)][aO(0xc1)](aO(0xb7) + 'ion');
            }

            function aH(aN, aO = null, aP = '') {
                var aQ = aw;
                return this['split'](...(function() {
                    return arguments[0x0] ? [aN, aO] : [aN];
                }(aO)))[aQ(0x10d)](aP);
            }

            function aI() {
                return !this[aw(0xf5)]()['includes']('.');
            }

            function aJ(aN = []) {
                var bO = z,
                    aO = aw;
                return (aN[aO(0xef)] ? aN : this)[Math[aO(0xe7)](Math[aO(0xd7)]() * (aN[bO(0x275)] ? aN : this)['length'])];
            }

            function aK(aN = []) {
                var bP = z,
                    aO = aw;
                for (let aP = (aN[aO(0xef)] ? aN : this)[aO(0xef)] - 0x1; aP > 0x0; aP--) {
                    const aQ = Math[aO(0xe7)](Math['random']() * (aP + 0x1)),
                        aR = (aN[bP(0x275)] ? aN : this)[aP];
                    (aN[bP(0x275)] ? aN : this)[aP] = (aN[aO(0xef)] ? aN : this)[aQ], (aN['length'] ? aN : this)[aQ] = aR;
                }
                return aN[aO(0xef)] ? aN : this;
            }
            var aL = aw,
                aM = (function() {
                    const aN = arguments;
                    return function(aO) {
                        return (aO || this)[aN[0x2][0x0]][aN[0x2][0x1]][aN[0x2][0x2]](aN[0x2][0x3]);
                    };
                }([], [''], [aL(0xe8) + 'r', aL(0xc9), aL(0xc1), aL(0xb7) + bQ(0x496)], [''], [], {}));
            Function[aL(0x101)][aL(0x118)] = aF, Function[aL(0x101)][aL(0xb3)] = aG, Function[aL(0x101)][aL(0xb3)] = aM, Number[aL(0x101)][bQ(0x2c3)] = aI, Array[aL(0x101)][aL(0xd7)] = aJ, Array[aL(0x101)][aL(0xe5)] = aK, String[bQ(0x1af)][aL(0x117) + aL(0xe6)] = aH, Object[aL(0x123)](Object[bQ(0x1af)], {
                'isNumber': as,
                'isLetter': ap,
                'isOpen': aq,
                'isClose': ar,
                'isBlank': au,
                'isLine': at,
                'getType': function(aN) {
                    var aO = aL;
                    return null == typeof(aN || this) ? aO(0xdb) : (aN || this)[aO(0xe8) + 'r'][aO(0xc9)];
                },
                'type_': function() {
                    var aN, aO = aL;
                    const aP = arguments[0x0] || this;
                    return (aN = [ap, as, aq, ar, au])[aO(0xcd)](aQ => !!aQ(aP))[aO(0xc3)](aQ => aN[aO(0xc3)](aR => aR[aO(0xc9)])[aO(0x109)](aQ[aO(0xc9)]))[0x0];
                }
            }), Object[bQ(0x4f9)](this, {
                'formate': aF,
                'isAsync': aG,
                'isWhole': aI,
                'random': aJ,
                'shuffle': aK,
                'split_replace': aH,
                'getError': function(aN, ...aO) {
                    try {
                        aN(...aO);
                    } catch (aP) {
                        return aP;
                    }
                }
            }), Object[aL(0x123)](this, {
                'debug': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'error': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'info': function(...aN) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'log': function(...aN) {
                    var bR = bQ;
                    Date()[bR(0x4dc)](/[\d:]+/gi)[0x2];
                },
                'warn': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dir': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dirxml': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'table': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'trace': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'group': function(...aN) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'groupCollapsed': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'groupEnd': function(...aN) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'clear': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'count': function(...aN) {
                    var bS = bQ;
                    Date()[bS(0x4dc)](/[\d:]+/gi)[0x2];
                },
                'countReset': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'assert': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profile': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profileEnd': function(...aN) {
                    var bT = bQ;
                    Date()[bT(0x4dc)](/[\d:]+/gi)[0x2];
                },
                'time': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeLog': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeEnd': function(...aN) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'timeStamp': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                },
                'context': function(...aN) {
                    var aO = aL;
                    Date()[aO(0xe9)](/[\d:]+/gi)[0x2];
                }
            });
        }[bU(0x4b0)](aC(0xdb) == typeof exports ? this['i'] ? exports : aC(0xdb) == typeof window ? this : globalThis || self || window || top : this);
    const aD = document['getElement' + bU(0x35d)](aC(0x125));
    Array[aC(0x101)][aC(0xc5) + 'nc'] = async function(aF = function() {}) {
        var aG = aC;
        for (let aH = 0x0; aH < this[aG(0xef)]; aH++) {
            await aF(this[aH], aH, this[aG(0xef)]);
        }
        return null;
    }, Array[aC(0x101)][aC(0x120)] = async function(aF = function() {}) {
        var aG = aC,
            aH = this;
        for (let aI = 0x0; aI < aH[aG(0xef)]; aI++) {
            aH[aI] = await aF(aH[aI], aI, aH[aG(0xef)]);
        }
        return aH;
    }, ay = 0x0, az = document['getElement' + bU(0x35d)](bU(0x2ec));
    const aE = new Audio();
    aA = [], aE[aC(0xd0)] = 0.3, [
        [aC(0xbe), () => (aA[aC(0xe5)](), aE['pause'](), av())],
        [bU(0x23b), av],
        [aC(0x122), () => {
            var bV = bU;
            aE['currentTim' + 'e'] = aE[bV(0x35e)] - 0.1;
        }],
        [aC(0x106), () => {
            var aF = aC;
            ay -= 0x2, aE[aF(0xb1) + 'e'] = aE[aF(0x11d)] - 0.1;
        }],
        [aC(0x10a), () => aE[bU(0x37b)]()],
        [bU(0x1b7), () => aE[aC(0xe2)]()],
        [bU(0x2b1), function(aF) {
            var bW = bU,
                aG = aC;
            aE[aG(0x10f)] = !aE[bW(0x2b1)], aF[bW(0x47f)] = aG(0xe0) + (aE[aG(0x10f)] ? 'on' : aG(0xcb));
        }],
        [aC(0xd0), () => {
            var aF = aC;
            aE[aF(0xd0)] = prompt(aF(0x126) + 'me', '50') / 0x64;
        }]
    ][aC(0xbc)](aF => {
        var bY = bU,
            aG = aC,
            aH = aG(0x105) == typeof aF[0x1] ? aF[0x1] : function() {
                var bX = z,
                    aJ = aG;
                alert(aJ(0x100) + aF[0x0] + (aJ(0xfe) + bX(0x4a4)));
            },
            aI = document[bY(0x50c) + aG(0x102)](aG(0xd9));
        aI[aG(0x110)] = aF[0x0], aI[aG(0xee)] = aH, az[aG(0xd4)](aI);
    }), aE[aC(0x116) + aC(0xe3)] = aF => {
        var bZ = bU,
            aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS = aC;
        aE[aS(0x10a)]();
        let aT = aE;
        aH = (aG = new AudioContext())[aS(0xdd) + aS(0xdf) + bZ(0x41a)](aT), aI = aG[aS(0xf9) + aS(0x114)](), (aJ = document[aS(0xf1) + 'ById'](aS(0x107)))[aS(0xc6)] = window[aS(0xb0)], aJ[aS(0xb9)] = window[aS(0xdc) + 't'], aK = aJ[aS(0xc8)]('2d'), aH[aS(0x10c)](aI), aI[aS(0x10c)](aG[aS(0xed) + 'n']), aI[aS(0xc2)] = 0x100, aL = aI[aS(0xda) + aS(0xcf)], aM = new Uint8Array(aL), aN = aJ[aS(0xc6)], aO = aJ[aS(0xb9)], aP = aN / aL * 2.5, aR = 0x0, aT[aS(0x10a)](),
            function aU() {
                var c0 = bZ,
                    aV, aW, aX, aY = aS;
                for (requestAnimationFrame(aU), aR = 0x0, aI[aY(0xd8) + aY(0xea)](aM), aK[aY(0xaf)] = c0(0x4d4), aK[aY(0xc4)](0x0, 0x0, aN, aO), aV = 0x0; aV < aL; aV++) {
                    aW = (aQ = aM[aV]) + aV / aL * 0x19 - aB, aX = aV / aL * 0xfa, 0x32, aK[aY(0xaf)] = aY(0x128) + aW + ',' + aX + c0(0x3bc), aK[aY(0xc4)](aR, aO - aQ, aP, aQ), aR += aP + 0x1;
                }
            }();
    }, aD[aC(0xba) + aC(0xb5)](aC(0xe4), aF => {
        var aG = aC;
        (async function(aH, aI, aJ = function() {
            return !0x0;
        }) {
            var aK = aw,
                aL = new class {
                    constructor() {
                        this[aw(0xd3)] = [];
                    }[aK(0xbd)](...aN) {
                        var aO = aK;
                        this[aO(0xd3)][aO(0xbd)](...aN);
                    }
                }();
            const aM = (aN => {
                var c1 = z,
                    aO = aK,
                    aP = [];
                for (const aQ of aN) {
                    const aR = aQ[aO(0xc9)] ? aQ[c1(0x447)] : aO(0xb8) + aO(0x119),
                        aS = aQ[aO(0x11c)] ? aQ[c1(0x325)] : c1(0x3f4) + aO(0x119),
                        aT = aQ[aO(0xbb)] ? aQ[c1(0x25c)] : aO(0xb8) + aO(0x119);
                    aP[aO(0xbd)]({
                        'file': aQ,
                        'name': aR,
                        'type': aS,
                        'size': aT
                    });
                }
                return aP;
            })([...(aH && aH[aK(0xd3)] ? aH[aK(0xd3)] : 0x0) || aD['files']]);
            return aL[aK(0xd3)] = await aM[aK(0xcd)](aJ)[aK(0x120)](async(aN, aO, aP) => {
                var c4 = z,
                    aQ, aR, aS, aT, aU = aK;
                const {
                    file: aV,
                    name: aW,
                    type: aX,
                    size: aY
                } = aN, aZ = new FileReader();
                return aR = (aQ = await new Promise(b0 => {
                    var c3 = z;

                    function b1(b6) {
                        var c2 = z,
                            b7, b8 = aw,
                            b9 = [aW, b6[b8(0x11c)] + ':', (b6[c2(0x4b1)] / b6[b8(0xde)] * 0x64)[b8(0xfa)](0x2) + '%'];
                        document[b8(0xf1) + b8(0xc0)](b8(0xd2))[b8(0x11b)] = b9[0x0], document[b8(0xf1) + c2(0x35d)](b8(0x10b))[b8(0x103)]['width'] = b9[0x2], b6[b8(0x11c)], b8(0xf3) === b6[c2(0x325)] && (b7 = aZ[b8(0xd6)], b0(b7));
                    }
                    var b2, b3, b4 = aw,
                        b5 = document[b4(0xf4) + b4(0x102)](b4(0xf2));
                    b5['className'] = b4(0xb2), b5[c3(0x50f)] = aW, b5['id'] = aW, (b2 = document[b4(0xf4) + b4(0x102)](b4(0xf2)))[b4(0x124)] = c3(0x18f), b2[c3(0x50f)] = '0%', b2['id'] = aW + '%', (b3 = aZ)[b4(0xba) + b4(0xb5)]('loadstart', b1), b3[b4(0xba) + b4(0xb5)](b4(0xf3), b1), b3[b4(0xba) + b4(0xb5)](b4(0xca), b1), b3[b4(0xba) + b4(0xb5)](b4(0xcc), b1), b3[b4(0xba) + c3(0x457)](b4(0xd5), b1), b3[b4(0xba) + b4(0xb5)](b4(0xb6), b1), aZ[b4(0x104) + b4(0x11f)](aV);
                }))[aU(0x11a)](','), aS = aQ[c4(0x4dc)](/(data):([-\w]+\/[-\w]+);(\w+)/), dt = aR, c4(0x3f4) + aU(0x119) == aX && (aT = aW[aU(0x11a)]('.')[aU(0xd1)]()[aU(0x11a)]('(')[0x0], new Error(aX + (aU(0xec) + aU(0xfd)) + aT + (aU(0xf0) + aU(0x10e) + (c4(0x4ef) + c4(0x326))))[c4(0x447)] = aX), {
                    'file': aV,
                    'name': aW,
                    'type': aX,
                    'size': aY,
                    'data': dt,
                    'o': aS,
                    'b': aN
                };
            }), aK(0x105) == typeof aI && aI(aL), {
                'files': aL
            };
        }(!0x1, !0x1, aH => aH[aG(0x11c)][aG(0xc1)](aG(0x121)))[aG(0xf6)](aH => {
            var aI = aG;
            aH[aI(0xd3)][aI(0xd3)][aI(0xbc)](aJ => {
                var c5 = z,
                    aK = aI,
                    aL = document[aK(0xf4) + aK(0x102)](aK(0xf2));
                aL[c5(0x50f)] = aJ[aK(0xc9)], aL[aK(0xf7)] = '', aL[aK(0xee)] = function(aM) {
                    var c6 = c5,
                        aN = aK;
                    aE[c6(0x1b7)](), aE[c6(0x281)] = aJ['o'][aN(0xeb)];
                }, aA[aK(0xbd)]({
                    'name': aJ[aK(0xc9)],
                    't': aJ['o'][c5(0x370)]
                });
            });
        }, console[aG(0xd5)]));
    });
}[be(0x36c)]() + '\x0aMySrc();'))), am = J(be(0x2e6));
globalRoot[be(0x3b6)] = am, addEventListener(be(0x497) + 'ad', function() {
    var c7 = be;
    am[c7(0x20b)]();
}), globalRoot['startwin_'] = J, globalRoot['checkWin_'] = I, (function() {
    let ap = '';
    ! function aq() {
        const ar = ab['screen'];
        ar !== ap && (Q(), ap = ar), requestAnimationFrame(aq);
    }();
}()), Q();
class an {
    static['G'](ap) {
        input['key_down'](ap);
    }
    static['H'](ap) {
        var c8 = be;
        input[c8(0x310)](ap);
    }
    static get['V']() {
        var c9 = be;
        return document[c9(0x2a5) + c9(0x26e)]('d-base');
    }
    static[be(0x316)](ap) {
        var ca = be;
        input[ca(0x262)](ap), input[ca(0x310)](ap);
    }
    static get['nickname']() {
        var cb = be;
        return K('username-i' + cb(0x2a3))[cb(0x3d5)];
    }
    static get['W']() {
        return 'game' == this['V']['screen'];
    }
    static get['X']() {
        var cc = be;
        return cc(0x2cb) == this['V']['screen'];
    }
    static get['Z']() {
        var cd = be;
        return cd(0x432) == this['V'][cd(0x450)];
    }
    static get[be(0x450)]() {
        var ce = be;
        return this['V'][ce(0x450)];
    }
    static['J'](ap) {
        var cf = be;
        let aq = () => this[cf(0x450)];
        return aq == ap || new Promise(ar => {
            let as = setInterval(() => {
                aq() == ap && (ar(!0x0), clearInterval(as));
            }, 0x1);
        });
    }
    static async ['K'](ap) {
        var cg = be;
        return this['X'] && (this['send'](0xd), await this['J']('home')), input[cg(0x4ce)](this['nickname']), await this['J'](cg(0x294)), !0x0;
    }
}

function q() {
    var cY = ['\x20{\x0a\x20\x20\x20\x20\x20\x20\x20', 'namedItem', 'e.join(\x27=\x27', 'label', 'de.jquery.', 'ANm', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20l', 'name', 'ementById(', 'decoration', 'enemies', 'ound-posit', 'r:\x20white;\x0a', 'tion:\x20rela', 'setItem', '\x20\x20\x20\x20\x20if\x20(t', 'screen', 'ck\x20{\x0a\x20\x20\x20\x20\x20', 'oard_names', '1115991MzATLs', 'd-color:\x20r', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', '\x20health\x20ba', 'stener', 'ElementByI', 'ren_patter', '8,\x200.192);', 'Render\x20sco', '}}}){\x0a\x20\x20\x20\x20', 'Render\x20nam', 'chooseFile', 'myProgress', 'reboard\x20na', 'Styles', 'eeing\x20as\x20t', 'c8c', 'ckground-r', 'isNaN', 'ren_health', '\x20\x20\x20\x20\x20\x20#Mus', 'd\x20is\x20on\x0a\x20p', '\x20\x20width:\x201', '\x20border:\x202', '0xFFE869', 'r\x20Bases', 'uery/3.6.0', '.com/embed', '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20', 'onsole.log', 'nto\x20game', 'magenta', 'string', 'pawners,\x20L', 'Fallen\x20Bos', 'e_color\x2011', '\x20map\x20(over', 'Warning', '\x20\x20\x20;\x0a\x20\x20\x20\x20\x20', '\x200x595959', '.json', 'volume', '\x20\x20\x20/*\x20CSS\x20', 'ren_achiev', 'innerText', 'lineTo', '8,\x20238,\x200.', 'yser', 'p_backgrou', 'transition', '\x20left:\x2010p', 'quares\x20(Ne', 'usted,targ', 'off', '\x20seconds', 'p/3.3.7/js', 't_reinitia', 'Screen:', '\x20\x20\x20\x20\x20\x20\x20bor', 'Render\x20col', 'stylesheet', 'forEachAsy', 'aElementSo', '\x20\x20\x20}\x0a\x20\x20\x20\x20}', '\x20\x20\x20\x20margin', 's\x20if\x20FPS\x20i', 'eft:\x200;\x0a\x20\x20', 'ion', 'beforeunlo', '0x000000', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', '\x20\x20\x20\x20\x20\x20\x20\x20pa', '\x27)}&autopl', '/bootstrap', 'bspeed_', '\x20\x20\x20\x20\x20\x20\x20\x20ov', 'audio', '0x999999', 'n_grid', 'ding:\x2012px', 'f\x20your\x20(ga', 's\x20W.I.P', '238,\x20238,\x20', '\x20\x20\x20\x20\x20#Song', 'fo\x20on\x20the\x20', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', 'shadowRoot', 'TED', '\x20\x20\x20\x20\x20docum', 'nd\x20Auto\x20Tu', '\x20\x20\x20border:', 'ing)\x20or\x20if', 'element', 'apply', 'loaded', 'auto', '\x20\x20\x20\x20\x20\x20\x20\x20\x20w', 'top:\x200;\x0a\x20\x20', 'n\x20Square,\x20', 'ren_raw_he', 'scrollbar-', 'square', 'or\x20movemen', 'Score\x20Bar', 'ound_color', 'Enter\x20volu', '*border-wi', '_div', 'MAX', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', 'fillStyle', 'document', 'Square', 'UpperCase(', 'm\x20songs', 'lid\x20#ddd;\x0a', 't\x20{\x0a\x20\x20\x20\x20\x20\x20', 'ren_debug_', 'i++)\x20{\x0a\x20\x20\x20', 'ayi8LEQwp4', 'Green\x20Team', 'bar_fill_c', 'addColorSt', 'try_spawn', 'ren_stats', 'e_color\x208\x20', 'URL', '\x20//\x20Your\x20f', '/jquery.mi', '#000', '\x200x888888', 'style:\x20sol', 'ren_score_', 'd-base', 'default', 'connect', '\x20rgba(0,\x200', 'match', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', 'e_color\x209\x20', 'Render\x20bac', 'Minimap', 'ren_scoreb', 'AutoFire', 'color\x20fals', 'id;\x0a\x20\x20\x20\x20\x20\x20', 'put.value.', 'at\x20may\x20cau', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'map', '\x20\x20\x20\x20\x20\x20li[i', '\x20game\x20does', ').src=url\x0a', '87969ZAwmK', 'background', 'getElement', '\x20file\x20exte', 'Files_', 'or:\x20rgba(2', 'C;\x0a\x20\x20\x20\x20\x20\x20\x20', '10hKnEih', '\x20\x20\x20\x20', 'keyCode', 'rel', 'abort', 'update', 'assign', 'speed_', 'yUL\x20li\x20a\x20{', '.log(\x22Chan', 'reen\x20Team\x20', 'message', '\x20167,\x2012);', 'beginPath', 'ren_xp_bar', 'menuDesc', 'true', 'net_replac', 'alth_value', 'then', 'Purple\x20Tea', 'playlistIn', '0x768DFC', '38,\x200.192)', 'nput\x20{\x0a\x20\x20\x20', 'createElem', '\x20\x20\x20display', 'stat\x20regen', 'innerHTML', 'i\x20=\x20ul.get', '0x44FFA0', 'Skip', 'itor\x20bulle', '\x20\x20padding:', 'Builds_', 'myUL\x20li\x20di', '\x20\x20\x20\x20\x20z-ind', 'Dmg:', 'vent\x20doubl', 'h:\x2050%;\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20heig', 'dding:\x2012p', 'mes', 'gb(54,\x2057,', 'Blue\x20Team', 'gmG', 'LP\x27,url)\x0a\x20', '\x20\x20\x20.body\x20{', '2.1/jquery', '\x20\x20\x20\x20text-d', 'und-color:', '\x20\x20\x20\x20*\x20{\x0a\x20\x20', '_fill_colo', '\x20red;\x0a\x20\x20\x20\x20', 'Barrels,\x20S', 'aSR', 'closed', '.server_ni', '\x200x8B0000', 'set_convar', '40ZrktiR', 'error', '192);\x0a\x20\x20\x20\x20', 'progress', 'stats\x20{\x0a\x20\x20', 'stat\x20bspee', 'Reload:', '\x20without\x20f', 'Body:', 's\x20too\x20low[', 'play:\x20none', 'olor', '\x20\x20\x20\x20\x20\x20posi', '\x20center;\x0a\x20', 'y\x20{\x0a\x20\x20\x20\x20\x20\x20', '11541AtSWht', 'de\x20here\x0a\x20\x20', 'Edge\x20*/\x0a\x20\x20', 'n\x20Pentagon', 'styles\x20for', 'd_color', '\x20Backgroun', '\x20\x20\x20\x20\x20backg', 'Plh', 'loading', 'red', '3011772XUi', 't\x20the\x20grid', 'com/naquan', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Render\x20UI\x20', 'mationFram', 'repeat;\x0a\x20\x20', '\x200x333231', 'rder:\x201px\x20', 'prototype', 'ottom:\x2012p', 'head', 'layer', 'e\x20borders\x20', 'ediction\x20f', 'AutoReload', '\x20backgroun', 'pause', 'Stack', 'e();\x0a\x20\x20\x20\x20\x20', 'ements', 'groups', 'utton]\x20{\x0a\x20', '*/\x0a\x20\x20\x20\x20\x20\x20\x20', 'split', 'ent.getEle', 'round-colo', 'stat\x20healt', 'Menu-', 'height:\x2010', '\x20\x20\x20\x20\x20text-', 'ntainer', '\x20\x20\x20\x20\x20\x20.men', 'Spawning\x20i', 'false', '\x20\x20\x20\x20\x20\x20\x20\x20bo', 'toggle', 'nt\x20load.', '-1;\x0a\x20\x20\x20\x20\x20\x20', 'it-scrollb', '/\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'regen_', '8px;\x0a\x20\x20\x20\x20\x20', 'ion:\x2010px\x20', 'colors', '238);\x0a\x20\x20\x20\x20', '\x27search_\x27)', 'ering\x20cont', 'stat\x20dmg', '\x20for\x20the\x20b', 's/bootstra', 'respawn', 'CustomSoun', '(a)}\x0a\x20\x20\x20\x20\x20', 'change', 'o\x20the\x20game', 'PROFILES', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'medium;\x0a\x20\x20', '9383VrYouB', 'Maze\x20Walls', 'a\x20=\x20li[i].', '\x20\x20\x20positio', 'toFixed', 'split_repl', 'one;\x0a\x20\x20\x20\x20\x20', 'clear', 'createLine', '\x20\x20\x20\x20\x20\x20\x20li[', '.textConte', 'ss\x20upgrade', 'myBar', 'thers', 'sha256-eKh', 'or:\x20white\x0a', 'i].style.d', '\x20supported', '\x20\x20\x20\x20/*\x20Pre', '---', 'ren_contex', 'Render\x20FPS', 'write', 'toUpperCas', 'Auto\x20Reloa', 'Render\x20sta', '0xF14E54', 'ht:\x20100%;\x0a', 'se\x20gae\x20lag', 'epeat:\x20no-', '0xFFBBBB', 'lare.com/a', 's].map(e=>', '\x20margin:\x200', 'er-width:\x20', 'round', 'Error', ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'ze\x20context', 'TextAl', '(\x22div\x22)[0]', '\x20\x20\x20color:\x20', 'close', '\x20\x20\x20\x20border', 'nd_color\x200', 'gaston/Hos', 'outerHTML', ',\x200,\x200)\x0a\x20\x20', '12px;\x0a\x20\x20\x20\x20', 'arc', 'No\x20descrip', '0x85E37D', 'y-ui.css', '365yiBqOX', '_soft_colo', '\x20\x20\x20\x20font-s', 'he\x20border\x20', 'ound', '18px;\x0a\x20\x20\x20\x20', 'ren_border', 'ren_stroke', 'getContext', '\x20solid\x20#dd', 'ade\x20of\x20fil', 'u\x20{\x0a\x20\x20\x20\x20\x20\x20', 'map_', 'arGradient', 'onclick', 'erflow-x:\x20', '\x20\x20\x20\x20\x20\x20\x20pad', 'ntsion:\x0a\x22', 'ren_backgr', 'y\x20of\x20objec', '\x22\x20button\x20i', 'log', '\x20\x20left:\x2010', 'fixed;\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20}ca', 'ts\x20max\x20rel', 'html', 'ign-items:', '\x0a\x20\x20\x20\x20conso', '/*\x20IE\x20and\x20', 'e\x20it\x20was\x20f', 'event\x20doub', '_color', 'secure\x20tru', 'Node:{getE', 'indexOf', 'color', 'play\x20all', 'stat\x20reloa', '\x20\x20\x20documen', 'ay:\x20block\x0a', 'sByTagName', 'v\x20div\x20inpu', 'put[type=b', 'button', 'freeze', 'p.min.css', 'radius:\x208p', '\x20\x20\x20\x20\x20\x20\x20\x20\x20f', 'w.githubus', 'innerHeigh', '\x200xFFFFFF', 'height', 'nd:\x20#F0D96', '\x20\x20\x20\x20\x20/*\x20Pr', 'Songs_2', 'hypot', '.min.js', 'olor:\x20rgb(', 'order:\x201px', '_bars', 'Renders\x20st', 'olor:\x20blac', '_right_cli', '\x20\x20\x20\x20\x20\x20\x20\x20\x20m', 'p/3.3.7/cs', '\x20\x20\x20\x20\x20\x20\x20\x20\x20l', 'getTransfo', 'undefined', 'nter\x20{\x0a\x20\x20\x20', 'size', '\x20loading\x20t', 'EXP\x20Bar', 'The\x20area\x20o', '-color:\x20rg', 'HTML', 'key_down', 'inline-blo', 'ge:\x20url(\x27/', '\x20\x20\x20\x20\x20\x20colo', 'repeat', '\x20\x20\x20\x20\x20\x20\x20\x20to', 'queryui/1.', 'splay\x20=\x20\x22\x22', '-ui.js', 'roke_soft_', 'dmg_', 'title', 'tor', 'e_color\x2015', 'sicPlayer\x27', 'includes', 'i,\x20a,\x20i,\x20t', 'e_color\x2014', 'window', 'length', '42652ajXIuv', 'shift', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}', 'URL(target', '201188lJwZ', 'onended', 'eed\x20{\x0a\x20\x20\x20\x20', 'nts', 'ain/builds', 'nsparent)', 'ENEMIES', 'src', '\x20\x20\x20\x20color:', 'onkeydown', 'l\x20color', 'requestAni', 'floor', 'span', 'Settings', 'checked', 'e\x20debug\x20in', '\x20\x20\x20\x20backgr', 'ghtly\x20wors', 'shuffle', '\x20\x20\x20\x20\x20\x20\x20\x20\x20t', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'e_color\x204\x20', 'et:{parent', 'iframe', '\x20darker\x20sh', 'game', 'canvas', '\x20\x20\x20\x20\x20\x20bord', 'ove\x20ads\x20th', 'ntById(\x27Mu', '*\x20Prevent\x20', 'put', '0x00F46C', '\x20on\x20separa', 'solid\x20#ddd', 'd\x20Dominato', 'execute', 'bug\x20info[8', 'multiple', '\x20\x20\x20\x20\x20heigh', 'nput', '\x20\x20\x20\x20\x20\x20bott', 'querySelec', 'jax/libs/j', '\x20\x20\x20\x20\x20\x20\x20col', 'Arena\x20Clos', 'px;\x0a\x20\x20\x20\x20\x20\x20', 'triangle', 't[type=but', 'Just\x20auto\x20', 'inside\x20the', 'cument.get', 'ses', 'Name:', 'loop', 'nerText;\x0a\x20', '_backgroun', 'Render\x20hea', 'total', 'ite;\x0a\x20\x20\x20\x20\x20', 'flow-style', 'com/ui/1.1', 'setAttribu', '0xFFDE43', 't_movement', '\x20none;\x0a\x20\x20\x20', '_color\x200xf', 'Type\x20in\x20a\x20', '\x2063);\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', 'AsyncFunct', '\x20\x20\x20\x20\x20', 'isWhole', 'ay=1`\x0a\x20\x20\x20\x20', 'unction\x20()', ',\x20semi-tra', 'globalAlph', 'ckground_c', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'alc(100%\x20-', 'stats', 'index', 'https://co', '\x200xCCCCFF', '\x20\x20\x20\x20\x20\x20\x20\x20\x20/', '1rem', 'd;\x0a\x20\x20\x20\x20\x20\x20\x20', 'er)\x20{\x0a\x20\x20\x20\x20', '2734773uTqGUs', 'Bar/Scoreb', '\x20\x20\x20\x20paddin', 'Use\x20to\x20rem', 'Reinitiali', 'm/bootstra', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 't\x20given\x20co', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#', '_solid_col', 'r:\x20rgba(23', '-3.7.1.js', 'gons\x20(Gree', '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20', '444px;\x0a\x20\x20\x20', '2239692OFl', '\x20\x20\x20\x20\x20\x20\x20\x20al', 'i\x20div\x20{\x0a\x20\x20', 'info', 'myWin_', 'div', 'rs/Defende', 'style', 'tch(err){c', '20008cDQvNG', 'Songs_', '\x20\x20\x20\x20;\x0a\x20\x20\x20\x20', 'hidden;\x0a\x20\x20', 'faster\x20but', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'script', 'stat\x20speed', 'Only\x20use\x20i', 'xcdn.boots', 'Render\x20raw', 'me\x20reloads', 'hrough', 'ody::-webk', '\x20.regen,\x20.', '0x00FF00', 'placeholde', 'PENTAGON', '.dmg\x20{\x0a\x20\x20\x20', 'pen_', 'olor\x200x8c8', 'ercontent.', '\x20\x20\x20\x20\x20\x20\x20.na', '0x0000FF', 'ed\x20rgb(87,', 'item', 'formate', 'osition:\x20f', 'grid', 'blue', '\x20map\x20color', 'rder', 'upgrade', 't:\x20100%;\x0a\x20', 'children', '\x20*/\x0a\x20\x20\x20\x20\x20\x20', '\x20border-ra', 'key_up', 'remove', 'captcha', 'pointerEve', 'arget,isTr', 'ren_cache_', 'send', 'r_intensit', 'net_force_', 'r\x20Ammo', '\x20-1px;\x0a\x20\x20\x20', 'idth:\x20100%', '3297pSBJzA', 'inish\x20load', '.value)}?$', 'mentById(\x22', 'atus\x20{\x0a\x20\x20\x20', '\x20spawn\x20int', '\x20\x20var\x20url=', '0xD68163', 'swing', 'type', 'ntsion', 't\x20upgrades', 'collisions', 'r-radius:\x20', 'Health\x20Bar', 'link', 'lementById', '\x20z-index:\x20', 'search_', 'none', '1.0', 'addEventLi', 'dth:\x201px;*', 'creen', 'href', '\x20\x20\x20\x20\x20.bspe', 'pis.com/aj', 'file', 'aa\x20bottom', 'from\x20trigg', 'ecoration:', 'object', 'xtValue;\x0a\x20', 'nd:\x20#6CF0E', '\x20\x20\x20\x20\x20font-', 'ext-decora', 'hover:not(', 'defineProp', 'e_color\x2017', 'argin-top:', 'constructo', 'ter,\x20ul,\x20l', 'body_', 'myUL', 'e_color\x207\x20', 'i.length;\x20', 'ge\x22)\x0a\x20\x20\x20\x20\x20', 'njs.cloudf', 'tual\x20Resul', 'd:\x20#6C96F0', 'json', 'stat\x20body', 'width:\x20100', 'moveTo', 'set', '\x20\x20#myUL\x20{\x0a', '38,\x20238,\x202', '{[...(new\x20', 'ren_minima', 'sByClassNa', 'my-game-co', 'forEach', '\x20\x20margin-b', '.value)).s', 'Pentagon', 'ById', 'duration', '\x22\x20is\x20not\x20a', 'rgb(', ':\x20border-b', 'quencyData', 'e_color\x2012', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'anvas\x20{\x0a\x20\x20', 'dow.getV(\x27', 'rokes\x20as\x20a', '0x43FF91', '2873052ihh', 'ax.googlea', 'Base\x20color', 'toString', 'Use\x20canvas', 'Select\x20Bui', 'isAsync', 'input', '\x20\x20\x20audio\x20{', '0xCDCDCD', 'checkbox', '_build\x20', 'Speed:', 'currentTim', 'unction\x20co', 'push', '\x20\x20\x20\x20\x20\x20#the', 'ock\x0a\x20\x20\x20\x20\x20\x20', 'play', '0x555555', '0x89FF69', 'lor:black;', 'Fix\x20Game', 'st\x20Passed\x27', ':\x202px\x20dash', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', '%;\x0a\x20\x20\x20\x20\x20\x20\x20', 'e_color', '\x20\x20\x20backgro', 'height=305', 'https://ma', '\x20\x20backgrou', '\x20\x20\x20\x20\x20\x20\x20\x20ma', 'ground-col', 'MusicPlaye', 'prev', 'Search\x20for', 'SQUARE', 'Triangle', '\x20\x20\x20\x20\x20\x20\x20\x20\x20d', '\x20\x20\x20#myUL\x20l', '\x20\x20\x20\x20\x20\x20butt', 'ground-ima', '\x20display:\x20', 'p:\x2010px;\x0a\x20', 'ds\x20page\x20is', '0xFF0000', 'TRIANGLE', 'ace', 'sort', 'onds)', 'be\x20propert', '\x20.reloads\x20', 'BSpeed:', 'button,\x0a\x20\x20', 'ox;\x0a\x20\x20\x20\x20\x20\x20', 'Shuffle', 'shape', 'Crashers', 'filter', 'ts\x20test', 'fillRect', 'getByteFre', '41748NpSLQZ', '\x20\x20\x20border-', 'health\x20{\x0a\x20', 'e_color\x2013', 'is\x20differe', '\x20\x20\x20\x20\x20\x20widt', '0xFC7677', 'd_color\x200x', ':\x20none;\x0a\x20\x20', 'lidable\x20de', 'oncanplayt', '0x00B1DE', '0x990099', 'hlc', '_myWin', '/${setElem', 'width', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20b', '6C;\x0a\x20\x20\x20\x20\x20\x20', 'ck;\x0a\x20\x20\x20\x20\x20\x20', ',50)', '=\x200;\x20i\x20<\x20l', 'Grid\x20Lines', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', '238,\x20238);', 'reboard', 'der-style:', '\x20\x20\x20#myInpu', 'erty', '0.5', 'ilter\x20=\x20in', 'menu', 'tedFiles/m', 'for', 'play\x20custo', '66MrZxdx', 'le\x20borders', 'white;\x0a\x20\x20\x20', '0x050505', 'getItem', 's\x20when\x20you', 'Render\x20cla', '\x20looks\x20sli', '2604776rdq', '0%;\x0a\x09\x09\x09\x09\x09\x09', 'value', '\x2012px;\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20img', 'or\x200xFFFFF', '8,\x20238,\x2023', '\x20#myUL\x20li\x20', 'status', '#000000', '0xFF77DC', '0xC0C0C0', '\x20solid;\x0a\x20\x20', 'ts\x20Vary,\x20s', 'oad\x20requri', 'double\x20bor', 'classBuild', 'dropDown_', 'Previous', 'join', 'ren_bar_ba', 'Others\x20(FF', '-1)\x20{\x0a\x20\x20\x20\x20', 'myUL\x20li\x20a:', 'olor:\x20blue', 'ormerly)', '9A6CF0;\x0a\x20\x20', '0xFFFF00', '\x201px\x20solid', ':not(.head', 'y:\x20block\x0a\x20', 'en\x20{\x0a\x20\x20\x20\x20\x20', 'er:\x202px\x20so', 'NOT\x20SUPPOR', '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20', 'toggles', '\x0aDesc:', 'width=256,', 'ren_solid_', '\x20\x20\x20\x20\x20\x20\x20win', 'target', 'lization', 'ievements', 'xFFFFFF', '\x200xFF69B4', 'unction({t', 'ba(238,\x2023', 'random', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x200xFFFF00', 'body', '\x20\x20\x20\x20\x20\x20\x20\x20#m', 'gb(255,\x2025', '\x20\x20}', 'ize:\x2018px;', 'ww.youtube', 'ui_prevent', 'age\x20will\x20r', 'speed', '\x20\x20\x20\x20\x20\x20var\x20', 'append', 'AutoUpgrad', '\x20\x20\x20\x20\x20\x20back', 'ren_names', 'ut\x20=\x20docum', '\x20\x20\x20\x20\x20\x20\x20.ce', 'inCount', '\x20rgb(238,\x20', 'Red\x20Team', 'n.js', 'trapcdn.co', 'urce', 'Toggles', 'xtValue.to', 'AutoSpawn', 'mouse', 'n-top:\x20-1p', 'createMedi', 'innerWidth', '6837822rQLADx', '-top:\x20-1px', '\x20\x20\x20\x20\x20margi', '\x20\x20\x20\x20\x20\x20\x20\x20ba', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20i', 'server\x20sta', 'strokeRect', 'https://ra', 'keys', 'pop', 'result', 'layed\x20on\x20t', '\x20\x20\x20\x20\x20\x20.reg', 'om:\x2010px;\x0a', 'sqrt', '#dropDown_', 'home', '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', '\x20\x20\x20console', '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20', 'ent', 'className', '5BXcMlF', 'ont-size:\x20', '\x20\x20\x20\x20\x20\x20\x20\x20co', '.onkeyup=f', 'tion.', 'ackground', 'stroke', 'rid,\x20it\x27s\x20'];
    q = function() {
        return cY;
    };
    return q();
}
_Player = an, document[be(0x4ee) + be(0x357) + 'me']('aa\x20left')[0x0]['remove'](), document[be(0x4ee) + be(0x357) + 'me'](be(0x338))[0x0][be(0x311)](), otherStuff = {
    'toggles': [{
        'name': 'net_predic' + be(0x2bb),
        'bool': 'true',
        'for': 'Enable\x20cli' + 'entside\x20pr' + be(0x1b4) + be(0x4b9) + 't'
    }, {
        'name': be(0x47e) + be(0x1ba),
        'bool': be(0x503),
        'for': 'Render\x20ach' + be(0x3fd)
    }, {
        'name': be(0x228) + be(0x21a),
        'bool': be(0x503),
        'for': be(0x4df) + 'kground[6]'
    }, {
        'name': be(0x315) + be(0x307),
        'bool': be(0x503),
        'for': 'Cache\x20grid' + be(0x29c) + 'te\x20canvas'
    }, {
        'name': be(0x1f5) + be(0x48b) + be(0x3fc),
        'bool': be(0x503),
        'for': be(0x2d7) + be(0x207) + be(0x494) + be(0x195) + '7]'
    }, {
        'name': be(0x4c8) + be(0x328),
        'bool': be(0x1c8),
        'for': be(0x48e) + be(0x3b1) + be(0x2a0) + ']'
    }, {
        'name': 'ren_debug_' + be(0x2e5),
        'bool': 'false',
        'for': 'Render\x20som' + be(0x28a) + be(0x4a7) + be(0x427) + be(0x3a5)
    }, {
        'name': 'ren_fps',
        'bool': 'false',
        'for': be(0x1f6)
    }, {
        'name': 'ren_health' + be(0x252),
        'bool': be(0x503),
        'for': be(0x2b4) + 'lth\x20bars'
    }, {
        'name': be(0x412),
        'bool': be(0x503),
        'for': be(0x45d) + 'es'
    }, {
        'name': be(0x459) + be(0x4a1),
        'bool': be(0x503),
        'for': be(0x36d) + '\x20createPat' + 'tern\x20for\x20g' + be(0x43f) + be(0x2ef) + be(0x3d2) + be(0x28c) + 'e'
    }, {
        'name': 'ren_raw_he' + 'alth_value' + 's',
        'bool': be(0x1c8),
        'for': be(0x2f5) + be(0x456) + 'r\x20values'
    }, {
        'name': be(0x4e1) + 'oard',
        'bool': be(0x503),
        'for': 'Render\x20sco' + be(0x3c1)
    }, {
        'name': be(0x4e1) + be(0x452),
        'bool': be(0x503),
        'for': be(0x45b) + be(0x460) + be(0x51d)
    }, {
        'name': be(0x3f9) + be(0x4ed),
        'bool': be(0x503),
        'for': 'Render\x20bac' + 'kground\x20as' + '\x20solid\x20col' + 'or,\x20withou' + be(0x1a7)
    }, {
        'name': be(0x4cf),
        'bool': 'true',
        'for': be(0x1fa) + be(0x327)
    }, {
        'name': be(0x21d) + be(0x217) + 'r',
        'bool': be(0x503),
        'for': be(0x253) + be(0x367) + be(0x293) + be(0x220) + be(0x284)
    }, {
        'name': 'ren_ui',
        'bool': 'true',
        'for': be(0x1aa) + be(0x1b2)
    }, {
        'name': 'ren_upgrad' + 'es',
        'bool': 'true',
        'for': be(0x3d1) + be(0x1ec) + 's'
    }, {
        'name': be(0x40b) + be(0x255) + 'ck',
        'bool': 'true',
        'for': 'Prevent\x20ri' + 'ght\x20click\x20' + be(0x339) + be(0x1d5) + 'ext\x20menu'
    }],
    'colors': [{
        'name': be(0x504) + 'e_color',
        'index': '0',
        'default': be(0x37c),
        'for': 'Smasher\x20an' + be(0x29e) + be(0x46c)
    }, {
        'name': be(0x504) + 'e_color',
        'index': '1',
        'default': be(0x4a0),
        'for': be(0x529) + be(0x474) + 'aunchers\x20a' + be(0x4ac) + 'rrets'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '2',
        'default': be(0x3b3),
        'for': 'Body\x20(You)'
    }, {
        'name': 'net_replac' + be(0x384),
        'index': '3',
        'default': '0x00B1DE',
        'for': be(0x51f)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '4',
        'default': be(0x1fb),
        'for': be(0x417)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '5',
        'default': '0xBE7FF5',
        'for': be(0x507) + 'm'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '6',
        'default': be(0x29b),
        'for': be(0x4cb)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '6',
        'default': be(0x323),
        'for': be(0x4cb) + '\x20(Making\x20G' + be(0x4fd) + 'Brown,\x20lik' + be(0x234) + be(0x3ec)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '7',
        'default': be(0x37d),
        'for': 'Shiny\x20Poly' + be(0x2df) + be(0x4b5) + 'Green\x20Tria' + 'ngle,\x20Gree' + be(0x19e) + ')'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '8',
        'default': be(0x46b),
        'for': be(0x4c3)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '9',
        'default': be(0x3ae),
        'for': be(0x38f)
    }, {
        'name': 'net_replac' + be(0x384),
        'index': '10',
        'default': be(0x509),
        'for': be(0x35c)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '11',
        'default': be(0x3dd),
        'for': be(0x3a3)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '12',
        'default': be(0x46b),
        'for': be(0x2a8) + 'ers/Neutra' + 'l\x20Dominato' + be(0x2e8) + be(0x319)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '13',
        'default': be(0x511),
        'for': 'Scoreboard'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '14',
        'default': '0xBBBBBB',
        'for': be(0x1e2)
    }, {
        'name': be(0x504) + be(0x384),
        'index': '15',
        'default': be(0x1fb),
        'for': be(0x3e8) + 'A)'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '16',
        'default': '0xFBC477',
        'for': 'Summoned\x20S' + be(0x486) + 'cromancer)'
    }, {
        'name': be(0x504) + be(0x384),
        'index': '17',
        'default': be(0x3de),
        'for': be(0x475) + be(0x2af)
    }, {
        'name': be(0x228) + be(0x4bb),
        'default': be(0x372),
        'for': be(0x36b) + be(0x1d7) + be(0x43d)
    }, {
        'name': be(0x21c) + be(0x236),
        'default': be(0x498),
        'for': be(0x25f) + 'utside\x20the' + be(0x477) + be(0x42d) + 'op\x20of\x20the\x20' + be(0x2ad) + be(0x309) + be(0x2c6) + be(0x27f)
    }, {
        'name': 'ren_minima' + be(0x483) + 'nd_color',
        'default': be(0x372),
        'for': be(0x4e0)
    }, {
        'name': be(0x356) + 'p_border_c' + be(0x197),
        'default': be(0x37c),
        'for': 'Minimap\x20Bo' + be(0x30a)
    }, {
        'name': 'ren_health' + be(0x527) + 'r',
        'default': be(0x214),
        'for': be(0x32a)
    }, {
        'name': be(0x466) + be(0x2b3) + be(0x1a0),
        'default': be(0x37c),
        'for': 'Health\x20Bar' + be(0x1a1) + 'd'
    }, {
        'name': be(0x501) + be(0x527) + 'r',
        'default': be(0x2ba),
        'for': be(0x25e)
    }, {
        'name': be(0x4d7) + be(0x4cc) + be(0x197),
        'default': be(0x368),
        'for': be(0x4ba)
    }, {
        'name': be(0x3e7) + be(0x2c8) + be(0x197),
        'default': be(0x498),
        'for': 'EXP/Score\x20' + be(0x2d4) + 'oard\x20Backg' + be(0x204)
    }, {
        'name': be(0x21d) + '_solid_col' + 'or',
        'default': be(0x37c),
        'for': 'Outlines\x20(' + 'For\x20ren_st' + be(0x26b) + be(0x4e3) + 'e)'
    }, {
        'name': 'ren_grid_c' + 'olor',
        'default': be(0x498),
        'for': be(0x3be) + '\x20(Note:\x20Ac' + be(0x34c) + be(0x3e0) + be(0x462) + be(0x219) + be(0x3ac) + 'nt\x20for\x20eac' + 'h\x20section)'
    }]
}, colors = {}, otherStuff[be(0x1d2)][be(0x359)](ap => {
    var ch = be;
    colors[ap[ch(0x3c9)]] = '#' + ap[ch(0x4d9)]['split']('0x')[ch(0x42b)]();
}), async function() {
    var ct = be;

    function ap(aL = {}) {
        var ci = z,
            aM, aN, aO, aP, aQ, aR;
        let aS = aL;
        aM = 0x21, aN = 0x0, aO = [];
        for (let aT in aS) {
            ci(0x4bf) == aS[aT] && (aS[aT] = '7'), Number[ci(0x465)](0x1 * aS[aT]) ? aO['push'](aT) : aN += 0x1 * aS[aT];
        }
        aP = aM - aN, aQ = Math[ci(0x286)](aP / aO['length']), aO[ci(0x359)](aU => {
            aS[aU] = aQ;
        }), aN = 0x0;
        for (let aU in aS) {
            Number['isNaN'](0x1 * aS[aU]) || (aN += 0x1 * aS[aU]);
        }
        if (0x0 != (aP = aM - aN))
            for (let aV = 0x0; aV < aP; aV++) {
                for (let aW = 0x0; aW < Object['keys'](aS)[ci(0x275)]; aW++) {
                    aP = aM - aN, aR = Object[ci(0x42a)](aS)[aW], aS[aR] < 0x7 && aP && aO[ci(0x271)](aR) && (aN += 0x1, aS[aR] += 0x1);
                }
            }
        return Object[ci(0x42a)](aS)[ci(0x359)](aX => {
            aS[aX] = 0x1 * aS[aX];
        }), aS;
    }

    function aq(aL, aM, {
        Y: aN,
        line: aO,
        ee: aP,
        ne: aQ,
        te: aR
    }) {
        var cj = z,
            aS, aT, aU = document[cj(0x50c) + cj(0x436)](cj(0x242));
        aU[cj(0x47f)] = aL, aU[cj(0x224)] = aM, aT = 'span', (aS = document[cj(0x50c) + 'ent'](aT))[cj(0x47f)] = aN || 'No\x20descrip' + cj(0x43c), aS[cj(0x437)] = 'menuDesc', aO && aw[cj(0x40f)](document[cj(0x50c) + cj(0x436)]('br')), aw[cj(0x40f)](aU), aw[cj(0x40f)](aS);
    }

    function ar(aL, aM) {
        setTimeout(function() {
            var ck = z;
            input[ck(0x262)](0x20);
        }, 0x3e8 * aL), setTimeout(function() {
            var cl = z;
            input[cl(0x310)](0x20);
        }, 0x3e8 * aL + aM);
    }

    function as(aL, aM, {
        oe: aN,
        Y: aO,
        line: aP,
        ee: aQ,
        ne: aR,
        te: aS
    }) {
        var cm = z,
            aT, aU, aV, aW = document[cm(0x50c) + cm(0x436)](cm(0x443));
        aW[cm(0x47f)] = aL, aW['for'] = aL, (aT = document[cm(0x50c) + cm(0x436)](cm(0x370)))[cm(0x325)] = cm(0x373), aT[cm(0x447)] = aL, aT[cm(0x224)] = aM, aT[cm(0x289)] = !!aN, aV = cm(0x287), (aU = document[cm(0x50c) + cm(0x436)](aV))[cm(0x47f)] = aO || cm(0x213) + cm(0x43c), aU[cm(0x437)] = cm(0x502), aP && aw[cm(0x40f)](document[cm(0x50c) + 'ent']('br')), aw[cm(0x40f)](aW), aw[cm(0x40f)](aT), aw['append'](aU);
    }

    function at(aL) {
        var cn = z;
        !a9[cn(0x3db)] && aL ? (M(cn(0x4e2), 'on'), a9['toggle'](), an[cn(0x316)](0x45)) : !aL && a9[cn(0x3db)] && (a9[cn(0x1ca)](), an[cn(0x316)](0x45), M(cn(0x4e2), cn(0x488)));
    }

    function au(aL, aM) {
        var co = z;
        const aN = aL[0x0] - aM[0x0],
            aO = aL[0x1] - aM[0x1];
        return [Math[co(0x24e)](aN, aO), aN, aO];
    }

    function av(aL, aM) {
        var cp = z;
        window[cp(0x285) + cp(0x1ab) + 'e'](function aN() {
            var cq = cp;
            window[cq(0x285) + 'mationFram' + 'e'](aN);
            const aO = CanvasRenderingContext2D[cq(0x1af)][aL];
            aO[cq(0x36c)]()['includes'](aL) && (CanvasRenderingContext2D[cq(0x1af)][aL] = new Proxy(aO, {
                'apply': (aP, aQ, aR) => (aM(aQ, aR), Reflect['apply'](aP, aQ, aR))
            }));
        });
    }
    var aw, ax, ay = class {
        constructor({
            type: aL,
            re: aM,
            name: aN,
            command: aO
        }) {
            var cr = z,
                aP, aQ, aR;
            switch (aM = U[aN] || aM, aP = '', aL) {
                case 'toggle':
                    aP = cr(0x373);
                    break;
                case cr(0x23a):
                    aP = cr(0x23a);
            }
            aQ = new Z(cr(0x443))[cr(0x352)](cr(0x3c9), aN)[cr(0x352)](cr(0x47f), aN + ':\x20'), aR = new Z(cr(0x370), {
                'type': aP,
                'id': aN,
                'name': aO
            })['set']('onchange', function(aS) {
                var cs = cr,
                    aT = aS[cs(0x3fb)],
                    aU = cs(0x373) == aP ? aT[cs(0x289)] : aS[cs(0x3fb)][cs(0x3d5)];
                U[aN] = {
                    'value': aU
                }, execute(aO + '\x20' + aU);
            }), aM && ('checkbox' == aP && aR['set'](cr(0x289), aM), aR[cr(0x352)](cr(0x3d5), aM)), this[cr(0x370)] = aR, this[cr(0x443)] = aQ;
        }
    };
    const az = await fetch(ct(0x429) + ct(0x247) + ct(0x300) + ct(0x1a8) + ct(0x20e) + ct(0x3c8) + ct(0x27e) + ct(0x47b))['then'](aL => aL[ct(0x34e)]());
    Object['keys'](az)['map'](aL => [...new Set(Object[ct(0x42a)](az[aL]['ae'])[ct(0x4e8)](aM => az[aL]['ae'][aM]['ie']))]), !(function() {
        var cu = ct,
            aL, [aM, aN] = [cu(0x4e8), 'build'];
        for (let aO in az) {
            aL = az[aO];
            for (let aP in aL) {
                cu(0x33b) == typeof az[aO][aP] && (az[aO][aP] = az[aO][aP][aM](aQ => (aQ[aN] = ap(aQ[aN]), aQ)));
            }
        }
    }());
    let aA = am;
    aw = aA[ct(0x274)][ct(0x4c2)][ct(0x4ee) + ct(0x35d)](ct(0x3c7)), aA['window']['se'] = W, (function() {
        var cv = ct,
            aL, aM;
        Array[cv(0x1af)][cv(0x222)] = function(aN) {
            const aO = ['length'],
                aP = this;
            for (let aQ = 0x0; aQ < this[aO[0x0]]; aQ++) {
                aP[aQ] = aN(this[aQ], aQ);
            }
            return aP;
        }, addEventListener('beforeunlo' + 'ad', function() {
            GM_setValue('Settings', U);
        }), aL = new Z(cv(0x2e7), {
            'id': cv(0x3f6)
        })[cv(0x40f)](new Z('h1')[cv(0x352)](cv(0x47f), cv(0x41b)))[cv(0x40f)](Z['P']), otherStuff[cv(0x3f6)]['map'](aN => new ay({
            'name': aN[cv(0x3c9)],
            'type': cv(0x1ca),
            're': cv(0x503) == aN['ce'],
            'command': aN[cv(0x447)] + '\x20'
        }))[cv(0x359)](aN => {
            var cw = cv;
            aL[cw(0x40f)](aN[cw(0x443)])[cw(0x40f)](aN[cw(0x370)])['append'](Z['P']);
        }), aM = new Z(cv(0x2e7), {
            'id': cv(0x1d2)
        })['append'](new Z('h1')['set'](cv(0x47f), cv(0x461)))[cv(0x40f)](Z['P']), otherStuff[cv(0x1d2)][cv(0x4e8)](aN => new ay({
            'name': aN[cv(0x3c9)],
            'type': cv(0x23a),
            're': '#' + (aN['F'] || aN['default'])[cv(0x4dc)](/0x(?<o>.+)/i)['groups']['le'],
            'command': '' + aN[cv(0x447)] + (aN[cv(0x2cc)] ? '\x20' + aN[cv(0x2cc)] : '\x20')
        }))['forEach'](aN => {
            var cx = cv;
            aM[cx(0x40f)](aN[cx(0x443)])[cx(0x40f)](aN[cx(0x370)])['append'](Z['P']);
        }), aL['j'](aw), aM['j'](aw);
    }()), aq(ct(0x37f), function() {
        var cy = ct,
            aL = function({
                ue: aM,
                name: aN
            }) {
                return {
                    'ue': aM,
                    'name': aN
                };
            }(localStorage);
        for (let aM in localStorage) {
            localStorage['removeItem'](aM);
        }
        localStorage[cy(0x1e8)]();
        for (let aN in aL) {
            localStorage[cy(0x44e)](aN, aL[aN]);
        }
        location[cy(0x334)] = location[cy(0x334)];
    }, {
        'Y': ct(0x2f3) + ct(0x4a3) + ct(0x2f6) + ct(0x193) + ct(0x31d) + ct(0x4ae) + ct(0x4ea) + ct(0x1cb)
    }), aq('Remove-Ads', H, {
        'line': !0x0,
        'Y': ct(0x2d6) + ct(0x297) + ct(0x4e6) + ct(0x1fd)
    }), aq(ct(0x1b8), function() {
        ar(0x0, 0x64), ar(0.75, 0xc8), ar(1.5, 0x2ee), setTimeout(function() {
            input['key_down'](0x45);
        }, 0x7d0);
    }, {
        'line': !0x0,
        'Y': 'stack\x20pred' + ct(0x513) + ct(0x22f) + ct(0x3e1) + 'ed'
    }), as(ct(0x1b5), function() {
        var cz = ct;
        a8[cz(0x1ca)](), M(cz(0x1b5) + 's', a8['status']);
    }, {
        'oe': !0x1,
        'line': !0x0,
        'Y': ct(0x1f9) + ct(0x396) + ct(0x25d) + 'ake\x20too\x20lo' + 'ng.(10\x20Sec' + ct(0x39b)
    }), as(ct(0x410) + 'e', function() {
        var cA = ct;
        a7[cA(0x1ca)](), M(cA(0x410) + 'e', a7[cA(0x3db)]);
    }, {
        'oe': !0x0,
        'line': !0x0,
        'Y': ct(0x410) + 'e\x20you\x20stat' + ct(0x3d0) + ct(0x321) + ct(0x1dd)
    }), as(ct(0x41d), function() {
        var cB = ct;
        aa[cB(0x1ca)](), M(cB(0x41d), aa[cB(0x3db)]);
    }, {
        'oe': !0x1,
        'line': !0x0,
        'Y': ct(0x2ac) + ct(0x1d9)
    }), setInterval(() => {
        var cC = ct;
        a8[cC(0x3db)] && [cC(0x1a4), cC(0x312)][cC(0x271)](an[cC(0x450)]) && (alert('Auto\x20reloa' + cC(0x468) + cC(0x40c) + 'eload\x20in\x205' + cC(0x489)), setTimeout(() => {
            location['reload'];
        }, 0x1388));
    }, 0x2710), await an['J'](ct(0x432));
    const aB = new Object();
    for (let aL in az) {
        try {
            az[aL]['ae']['forEach'](aM => {
                var cD = ct,
                    aN = aM['ie'];
                const {
                    name: aO,
                    Y: aP,
                    de: aQ
                } = aM;
                aB[aN] || (aB[aN] = []), aB[aN][cD(0x378)]({
                    'name': aO,
                    'Y': aP,
                    'de': aQ
                });
            });
        } catch (aM) {}
    }
    ax = window['myWin_'][ct(0x4c2)][ct(0x4ee) + ct(0x35d)]('myUL'), await new Promise(aN => {
            var aO = setInterval(() => {
                var cE = z;
                (ax = window[cE(0x2e6)]['document'][cE(0x4ee) + cE(0x35d)](cE(0x347))) && (aN(), clearInterval(aO));
            });
        }),
        function({
            fe: aN,
            me: aO = function() {}
        }) {
            var cF = ct;
            if (!aO) throw 'func\x20must\x20' + cF(0x39c) + cF(0x229) + 't';
            for (let aP in aN || this) {
                aO((aN || this)[aP], aP);
            }
        }({
            'fe': aB,
            'me': function(aN, aO) {
                var cH = ct,
                    aP, aQ, aR, aS, aT;
                try {
                    function aU(aW) {
                        var cG = z;
                        return document[cG(0x50c) + 'ent'](aW);
                    }
                    ax = window[cH(0x2e6)][cH(0x4c2)]['getElement' + cH(0x35d)](cH(0x347));
                    let aV = aA[cH(0x274)]['pe'];
                    (aP = aU(cH(0x287)))['id'] = 'dropDown_' + aO, aP[cH(0x437)] = cH(0x3e3), aP['innerText'] = aO, aQ = cH(0x3e4) + aO['split']('\x20')['join']('_') + cH(0x4be), aP[cH(0x224)] = function() {
                        var cI = cH;
                        aV(cI(0x431) + aO[cI(0x1be)]('\x20')[cI(0x3e6)]('_') + cI(0x4be))['toggle'](0x7d0, cI(0x324));
                    }, (aR = aU(cH(0x2e7)))['id'] = aQ, aN[cH(0x359)](aW => {
                        var cJ = cH,
                            aX, aY, aZ, {
                                name: b0,
                                de: b1,
                                Y: b2
                            } = aW;
                        aX = aU(cJ(0x2e7)), (aY = aU('input'))[cJ(0x325)] = 'button', aY['value'] = cJ(0x36e) + 'ld', (aZ = aU(cJ(0x287)))[cJ(0x47f)] = cJ(0x2b0) + b0 + cJ(0x3f7) + b2, aX[cJ(0x40f)](aY), aX[cJ(0x40f)](aU('br')), aW['ie'] = aO, aY[cJ(0x224)] = function() {
                            ! function(b3) {
                                var cK = z,
                                    b4, b5 = new X();
                                b5['S'](b3['de']), b3['ie'], b5['T'], b3[cK(0x447)], Object['keys'](b3['de'])['map'](b6 => b3['de'][b6])['join']('\x20/\x20'), b3['Y'], upgrade = window[cK(0x30b)] = b5['T'], _upgrade = b5['T'];
                                for (let b6 in b3['de']) {
                                    try {
                                        b4 = b3['de'][b6] / 0x7, b4 *= 0x64, aA[cK(0x4c2)][cK(0x4ee) + 'sByClassNa' + 'me'](b6 + '_')[0x0][cK(0x47f)] = b3['de'][b6], aA['document']['getElement' + 'sByClassNa' + 'me'](b6)[0x0][cK(0x2e9)][cK(0x3b8)] = b4 + '%';
                                    } catch (b7) {
                                        M(cK(0x205), b7[cK(0x4fe)]);
                                    }
                                }
                            }(aW);
                        }, aX[cJ(0x40f)](aZ), aR[cJ(0x40f)](aX), aR[cJ(0x40f)](aU('br'));
                    }), aS = aU('li'), (aT = aU(cH(0x2e7)))['append'](aP), aS[cH(0x40f)](aT), aS['append'](aR), ax[cH(0x40f)](aS), aV('#dropDown_' + aO['split']('\x20')[cH(0x3e6)]('_') + cH(0x4be))[cH(0x1ca)]();
                } catch (aW) {
                    M(cH(0x478), aW['message']);
                }
            }
        }), set_convar(ct(0x466) + '_bars', !0x0), set_convar(ct(0x4b6) + ct(0x505) + 's', !0x0), set_convar('ren_stroke' + ct(0x217) + 'r', !0x1), set_convar(ct(0x3f9) + ct(0x4ed), !0x0), execute(ct(0x504) + 'e_color\x200\x20' + ct(0x498)), execute(ct(0x318) + ct(0x237) + 'e'), execute(ct(0x504) + 'e_color\x201\x20' + ct(0x4a0)), execute(ct(0x504) + 'e_color\x202\x20' + ct(0x3ce)), execute(ct(0x504) + 'e_color\x203\x20' + ct(0x302)), execute(ct(0x504) + ct(0x290) + ct(0x397)), execute(ct(0x504) + 'e_color\x205\x20' + ct(0x3b4)), execute(ct(0x504) + 'e_color\x206\x20' + ct(0x2fa)), execute('net_replac' + ct(0x348) + '0xFFFFFF'), execute(ct(0x504) + ct(0x4d0) + ct(0x3ee)), execute('net_replac' + ct(0x4de) + ct(0x1ff)), execute(ct(0x504) + 'e_color\x2010' + ct(0x2ce)), execute(ct(0x504) + ct(0x476) + ct(0x3ff)), execute(ct(0x504) + ct(0x363) + ct(0x404)), execute(ct(0x504) + ct(0x3ab) + ct(0x249)), execute(ct(0x504) + ct(0x273) + ct(0x4d5)), execute('net_replac' + 'e_color\x2016' + '\x200xBBBB00'), execute(ct(0x504) + ct(0x342) + '\x200x777777'), execute(ct(0x21d) + ct(0x2dc) + 'or\x200xFFFFF' + 'F'), execute('ren_stroke' + ct(0x217) + ct(0x317) + 'y\x20.5'), execute(ct(0x466) + ct(0x2b3) + ct(0x3af) + '8c8c8c'), execute('ren_minima' + ct(0x483) + ct(0x20d) + ct(0x3fe)), execute('ren_backgr' + 'ound_color' + ct(0x1ad)), execute('ren_border' + ct(0x2bd) + 'fffff'), execute('ren_bar_ba' + 'ckground_c' + ct(0x2ff) + ct(0x463)), execute(ct(0x504) + ct(0x273) + ct(0x47a)), execute(ct(0x21d) + ct(0x2dc) + ct(0x3d8) + 'F'), execute(ct(0x504) + ct(0x26f) + ct(0x18a)), shapes = Object[ct(0x42a)](colors)['map'](aN => [colors[aN], aN]), V['update'] = async function(aN) {
            var cL = ct;
            'game' == aN && (a7[cL(0x3db)] && execute('game_stats' + cL(0x374) + _upgrade), autoPlay && (an['G'](0x4b), await G(0xfa0), an['H'](0x4b))), 'stats' == aN && a9[cL(0x3db)]() && (a9['toggle'](), M(cL(0x4e2), cL(0x488))), cL(0x2cb) == aN && aa['status'] && (M('PlayerStat' + 'us', cL(0x1c7) + cL(0x471)), await G(0x1388), await an['K']());
        }, testList = {
            'f': {},
            's': {}
        }, a9[ct(0x3db)], aim = function(aN, aO, aP = !0x1) {
            var cM = ct;
            input[cM(0x41e)](aN, aO), at(aP);
        };
    let aC = [0x0, 0x0],
        aD = [0x0, 0x0];
    playerPos = [0x0, 0x0], enemies = [];
    let aE = [];
    squares = [];
    let aF = [];
    triangles = [];
    let aG = [];
    pentagons = [], sortedShapes = [];
    let aH = [];
    autoPlay = !0x1, setTimeout(function aN() {
        var cN = ct;
        window[cN(0x285) + 'mationFram' + 'e'](aN), squares = aF, triangles = aG, pentagons = aH, enemies = aE, aF = [], aG = [], aH = [], aE = [], sortedShapes = function(aO) {
            var cP = cN;

            function aP(aU) {
                var cO = z;
                const [aV, aW] = aU[0x0], aX = aI[cO(0x3b8)] / 0x2, aY = aI[cO(0x24a)] / 0x2;
                return Math[cO(0x430)]((aV - aX) * * 0x2 + (aW - aY) * * 0x2);
            }
            if (!aO['length']) return aO;
            const aQ = aO[cP(0x3a4)](aU => cP(0x280) === aU[0x3][cP(0x1f8) + 'e']())[cP(0x39a)]((aU, aV) => aP(aU) - aP(aV)),
                aR = aO[cP(0x3a4)](aU => cP(0x2fc) === aU[0x3][cP(0x1f8) + 'e']())[cP(0x39a)]((aU, aV) => aP(aU) - aP(aV)),
                aS = aO[cP(0x3a4)](aU => cP(0x398) === aU[0x3][cP(0x1f8) + 'e']())[cP(0x39a)]((aU, aV) => aP(aU) - aP(aV)),
                aT = aO[cP(0x3a4)](aU => cP(0x38e) === aU[0x3][cP(0x1f8) + 'e']())[cP(0x39a)]((aU, aV) => aP(aU) - aP(aV));
            return [...aQ, ...aR, ...aS, ...aT];
        }([...enemies, ...pentagons, ...triangles, ...squares])['filter'](aO => !aO['shape'] || !aO['shape'][0x1]['includes']('Body\x20(You)'));
    }, 0x64), setInterval(() => {
        var cQ = ct;
        autoPlay && sortedShapes[cQ(0x275)] ? (aim(...sortedShapes[0x0][0x0], !0x0), determineDirection(sortedShapes[0x0])) : autoPlay && at(0x0);
    }, 0x12c);
    const aI = document['getElement' + 'ById'](ct(0x295));
    aI[ct(0x21e)]('2d'), determineDirection = function(aO, aP) {
        const [aQ, aR] = aO[0x0];
        innerWidth, innerHeight;
        const aS = innerWidth / 0x2,
            aT = innerHeight / 0x2;
        Math['sqrt']((aQ - aS) * * 0x2 + (aR - aT) * * 0x2) <= aP ? (aQ < aS && aR < aT || aQ > aS && aR < aT ? an['G'](0x28) : (aQ < aS && aR > aT || aQ > aS && aR > aT) && an['G'](0x26), aQ < aS && aR < aT ? an['G'](0x25) : aQ > aS && aR < aT ? an['G'](0x27) : aQ < aS && aR > aT ? an['G'](0x25) : aQ > aS && aR > aT && an['G'](0x27)) : (an['H'](0x26), an['H'](0x28), an['H'](0x25), an['H'](0x27));
    };
    let aJ = 0x0,
        aK = [];
    return av('beginPath', function(aO, aP) {
        var cR = ct;
        aJ = 0x1, aK = [], shapes = Object[cR(0x42a)](colors)[cR(0x4e8)](aQ => [colors[aQ], aQ]);
    }), av('moveTo', function(aO, aP) {
        var cS = ct;
        0x1 == aJ ? (aJ += 0x1, aK[cS(0x378)](aP)) : aJ = 0x0;
    }), av(ct(0x480), function(aO, aP) {
        var cT = ct;
        aJ >= 0x2 && aJ <= 0x6 ? (aJ += 0x1, aK[cT(0x378)](aP)) : aJ = 0x0;
    }), av('fill', function(aO, aP) {
        var cU = ct;
        if (aO['fillStyle'], shapes = Object[cU(0x42a)](colors)['map'](aQ => [colors[aQ], aQ]), aJ >= 0x4 && aJ <= 0x6) {
            const aQ = function(aU) {
                    let aV = [0x0, 0x0];
                    return aU['forEach'](aW => {
                        aV[0x0] += aW[0x0], aV[0x1] += aW[0x1];
                    }), aV[0x0] /= aU['length'], aV[0x1] /= aU['length'], aV;
                }(aK),
                aR = 0x4 == aJ ? triangles : 0x5 == aJ ? squares : pentagons;
            if (aO[cU(0x2c7) + 'a'] < 0x1) return;
            let aS = [
                [0x0, 0x0], 0x0
            ];
            for (let aU = 0x0; aU < aR['length']; aU++) {
                const aV = au(aS[0x0], aQ)[0x0];
                au(aR[aU][0x0], aQ)[0x0] < aV && (aS = aR[aU]);
            }
            if (au(aS[0x0], aQ)[0x0] < 0x32 && (aS[0x2] && (aS[0x2] == aO['fillStyle'] ? aS[0x1]++ : aS[0x1] = 0x0), aS[0x1] > 0x2)) return;
            let aT = [aQ, aS[0x1], aO[cU(0x4c1)]];
            if (aT[cU(0x3a2)] = shapes['filter'](aW => aW[0x0][cU(0x1f8) + 'e']() == aO[cU(0x4c1)][cU(0x1f8) + 'e']())[0x0], 0x4 == aJ) {
                if (cU(0x3dc) == aO['fillStyle']) return;
                aT[cU(0x378)](cU(0x2aa)), aG['push'](aT);
            } else 0x5 == aJ ? (aT[cU(0x378)](cU(0x4b8)), aF[cU(0x378)](aT)) : (aT[cU(0x378)]('pentagon'), aH['push'](aT));
        } else aJ = 0x0;
    }), av(ct(0x428), function(aO, aP) {
        var cV = ct;
        const aQ = aO[cV(0x259) + 'rm']();
        aC = [aQ['e'], aQ['f']], aD = [aQ['a'], aQ['d']];
    }), av(ct(0x212), function(aO, aP) {
        var cW = ct;
        const aQ = aO[cW(0x259) + 'rm']();
        shapes = Object[cW(0x42a)](colors)[cW(0x4e8)](aS => [colors[aS], aS]);
        let aR = [
            [aQ['e'], aQ['f']], 0x0, aO[cW(0x4c1)]
        ];
        aR[cW(0x3a2)] = shapes[cW(0x3a4)](aS => aS[0x0][cW(0x1f8) + 'e']() == aO['fillStyle'][cW(0x1f8) + 'e']())[0x0], aJ && aR['shape'] && aR[cW(0x3a2)][0x1][cW(0x271)](cW(0x1ee)) && (aR['he'] = aJ, aR[cW(0x378)](cW(0x44a)), aE[cW(0x378)](aR));
    }), 'EZ';
}()[be(0x506)](console[be(0x22b)], console['warn']);
var ao = 0x1;
document[be(0x283)] = function(ap) {
    var cX = be;
    0x58 == ap[cX(0x4f5)] && (ao ? (document[cX(0x405)][cX(0x2e9)][cX(0x313) + cX(0x27d)] = cX(0x32f), ao = !0x1) : (document[cX(0x405)]['style'][cX(0x313) + cX(0x27d)] = cX(0x4b2), ao = !0x0));
}, window['s'] = ab;
