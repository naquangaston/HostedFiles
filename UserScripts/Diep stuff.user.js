// @name Diep stuff
// @namespace http://tampermonkey.net/
// @version 2024-05-13
// @description try to take over the world!
// @author You
// @match https://diep.io/
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
var b8 = q;
(function(ah, ai) {
    var b2 = q,
        aj = ah();
    while (!![]) {
        try {
            var ak = parseInt(b2(0x105)) / 0x1 + parseInt(b2(0xae)) / 0x2 + -parseInt(b2(0x1ed)) / 0x3 + -parseInt(b2(0x379)) / 0x4 * (parseInt(b2(0x36c)) / 0x5) + -parseInt(b2(0x3e8)) / 0x6 * (-parseInt(b2(0x23d)) / 0x7) + -parseInt(b2(0x343)) / 0x8 * (-parseInt(b2(0x10e)) / 0x9) + parseInt(b2(0x31b)) / 0xa * (-parseInt(b2(0x357)) / 0xb);
            if (ak === ai) break;
            else aj['push'](aj['shift']());
        } catch (al) {
            aj['push'](aj['shift']());
        }
    }
}(j, 0x78568));

function z(ah) {
    return new Promise(ai => setTimeout(ai, ah));
}

function G() {
    var b3 = q;
    return [...document['getElement' + b3(0x102)](b3(0x2f3))][b3(0x2f9)](ah => ah[b3(0x364)]());
}

function H(ah = this['t']) {
    var b4 = q;
    return !!ah && !ah[b4(0x38b)];
}

function I(ah, ai = null, aj, ak) {
    var b5 = q,
        al;
    null == ai && (ai = ah);
    try {
        aj && window[ah]['close']();
    } catch (am) {
        window[ah] = null;
    }
    try {
        H(window[ah]) ? (globalRoot[ai] = open('', 'PROFILES', b5(0x2cc) + b5(0x35a)), globalRoot[ai][b5(0x238)][b5(0x1ef)][b5(0x17b)][b5(0x28a)] = '', globalRoot[ai][b5(0x238)][b5(0x1ef)][b5(0x121)][b5(0x28a)] = '') : (window[ah] = al = open(ak, b5(0x232), 'width=256,' + b5(0x35a)), al[b5(0x1ef)]['write'](ae[b5(0x185)][b5(0x148)]));
    } catch (an) {}
    return globalRoot[ai] = globalRoot[ah], al;
}

function J(ah, ai) {
    var b6 = q;
    new CustomLog(ah)[b6(0xea)](ai);
}

function K() {
    var b7 = q;
    J(b7(0x256), a4[b7(0x12b)]), M['update'] && M['update'](a4[b7(0x12b)]);
}

function q(a, b) {
    var c = j();
    return q = function(d, e) {
        d = d - 0x96;
        var f = c[d];
        return f;
    }, q(a, b);
}
const L = GM_getValue(b8(0xd6)) || {},
    M = {
        'update': function(ah) {}
    };
!(function() {
    var b9 = b8;
    Object[b9(0x3c0)](this || arguments[0x0], {
        'o': class {
            constructor(ah) {
                var ba = b9;
                this[ba(0x34b)] = {
                    'body': ah || ba(0x224),
                    'color': ba(0xec),
                    'size': '1rem'
                }, this[ba(0x17b)] = {
                    'color': ba(0x1ba),
                    'size': ba(0x33c)
                };
            }['i'](ah) {
                var bb = b9;
                this['title'][bb(0x17b)] = ah;
            }['l']({
                color: ah,
                size: ai
            }) {
                var bc = b9;
                ah !== undefined && (this[bc(0x34b)][bc(0x16c)] = ah), ai !== undefined && (this[bc(0x34b)][bc(0x3c6)] = ai);
            }['u']({
                color: ah,
                size: ai
            }) {
                var bd = b9;
                ah !== undefined && (this['body'][bd(0x16c)] = ah), ai !== undefined && (this[bd(0x17b)]['size'] = ai);
            }[b9(0xea)](ah = '') {}
        }
    });
}(window[b8(0x2e6)] || window)), set_convar = window[b8(0xbb)] = function(ah, ai) {
    var be = b8;
    input[be(0xbb)](ah, ai);
}, execute = window[b8(0x37a)] = function(ah) {
    var bf = b8,
        ai = (ah[bf(0x11d)](/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i) || {
            'groups': {}
        })[bf(0x26d)],
        aj = (ah[bf(0x1a9)]('\x20'), function(ak) {
            var bg = bf;
            const al = ak[bg(0x23b)],
                am = ak[bg(0x283)];
            for (let an = 0x0; an < otherStuff[bg(0x367)][bg(0x18c)]; an++) {
                let {
                    index: ao,
                    name: ap
                } = otherStuff['colors'][an];
                if (ao == al && am == ap) return an;
            }
        }(ai));
    null != aj && (colors[otherStuff[bf(0x367)][aj][bf(0x226)]] = '#' + ai[bf(0x3da)][bf(0x11d)](/(0x|#)(?<hex>[\w]+)/i)['groups']['p'], otherStuff[bf(0x367)][aj][bf(0x16a)] = otherStuff[bf(0x367)][aj]['m'] || otherStuff[bf(0x367)][aj]['default'], otherStuff[bf(0x367)][aj]['m'] = ai[bf(0x3da)][bf(0x2fb) + 'e'](), otherStuff[bf(0x367)][aj]), input[bf(0x37a)](ah);
};
class O {
    ['h'](ah) {
        var bh = b8,
            ai, aj, ak, al, am, an, ao, ap, aq;
        this['_'] = ah, ai = 0x0, this['v'] = '', aj = ah['F'], ak = ah['k'], al = ah['body'], am = ah['S'], an = ah['B'], ao = ah['T'], ap = ah['D'], aq = ah[bh(0x3c3)];
        for (let ar = 0x0; ar <= 0x7; ar++) {
            ar < ao && ai < 0x22 && (this['v'] += '6', ai++), ar < am && ai < 0x22 && (this['v'] += '4', ai++), ar < an && ai < 0x22 && (this['v'] += '5', ai++), ar < ap && ai < 0x22 && (this['v'] += '7', ai++);
        }
        for (let as = 0x0; as <= 0x7; as++) {
            as < aq && ai < 0x22 && (this['v'] += '8', ai++);
        }
        for (let at = 0x0; at <= 0x7; at++) {
            at < aj && ai < 0x22 && (this['v'] += '1', ai++), at < ak && ai < 0x22 && (this['v'] += '2', ai++), at < al && ai < 0x22 && (this['v'] += '3', ai++);
        }
    }
}
class P {
    constructor(ah) {
        var bi = b8;
        ah && this[bi(0x173)]();
    }#
    e = !0x1;
    ['toggle']() {
        this.#e = !this.#e;
    }
    get[b8(0x118)]() {
        return this.#e;
    }
    set[b8(0x118)](ah) {
        this.#e = !!ah;
    }
}
class Q {
    static get['N']() {
        return new Q('br');
    }
    constructor(ah, ai) {
        var bj = b8;
        this[bj(0x185)] = ah['constructo' + 'r'][bj(0x283)][bj(0x305)](bj(0x3eb)) && ah || (function() {
            var bk = bj;
            for (let aj in arguments[0x1]) {
                arguments[0x0][bk(0x1e9) + 'te'](aj, arguments[0x1][aj]);
            }
            return arguments[0x0];
        }(document['createElem' + 'ent'](ah), ai));
    }[b8(0x189)](ah) {
        var bl = b8;
        for (let ai in ah) {
            this[bl(0x185)][bl(0x189)][ai] = ah[ai];
        }
        return this;
    }[b8(0x1fe)](ah, ...ai) {
        var bm = b8;
        this[bm(0x185)][bm(0x1fe)](ah[bm(0x185)] || ah);
        for (let aj = 0x0; aj < ai['length']; aj++) {
            let ak = ai[aj];
            this[bm(0x185)][bm(0x1fe)](ak[bm(0x185)] || ak);
        }
        return this;
    }['A'](ah) {
        var bn = b8;
        return (ah[bn(0x185)] || bn(0xe4) == typeof ah ? document[bn(0x1db) + bn(0xee)](ah) : ah)[bn(0x1fe)](this[bn(0x185)]), this;
    }['on'](ah, ai) {
        return this['element']['on' + ah] = ai, this;
    }['set'](ah, ai) {
        var bo = b8;
        return this[bo(0x185)][ah] = ai, this;
    }[b8(0x364)]() {
        var bp = b8;
        return this[bp(0x185)][bp(0x364)](), this;
    }['get']() {
        var bq = b8;
        return this[bq(0x185)][arguments[0x0]];
    }
    get[b8(0x15d)]() {
        var bt = b8;
        return new class {
            constructor(ah) {
                var br = q;
                for (var ai = 0x0; ai < ah[br(0x18c)]; ai += 0x1) {
                    this[ai] = ah[ai];
                }
                Object[br(0x199) + br(0x12f)](this, br(0x18c), {
                    'get': function() {
                        var bs = br;
                        return ah[bs(0x18c)];
                    }
                }), Object['freeze'](this);
            }[bt(0x3b3)](ah) {
                return null != this[ah] ? this[ah] : null;
            }[bt(0x271)](ah) {
                var bu = bt;
                for (var ai = 0x0; ai < this[bu(0x18c)]; ai += 0x1) {
                    if (this[ai]['id'] === ah || this[ai]['name'] === ah) return this[ai];
                }
                return null;
            }
            get[bt(0x2a9)]() {
                return [...this];
            }
        }([...this[bt(0x185)][bt(0x15d)]]);
    }
}
const {
    t: U,
    C: V,
    R: W,
    j: X,
    P: Y,
    O: Z,
    L: a0
} = [null, null, null, null, function(ah, ai) {
    var bv = b8;
    localStorage[bv(0x202)](ah, ai);
}, function(ah) {
    var bw = b8;
    return localStorage[bw(0x30d)](ah);
}, function(ah) {
    var bx = b8;
    let ai = {};
    return ah[bx(0x2f9)](function(aj) {
        ai[aj] || (ai[aj] = !0x0);
    }), Object['keys'](ai);
}], a1 = new P(0x1), a2 = new P(), a3 = new P(), a4 = document['querySelec' + 'tor']('d-base'), a5 = new Q(b8(0x1c9))[b8(0x134)](b8(0xd7), b8(0x3dc))[b8(0x134)](b8(0xc5), b8(0x180) + 'xcdn.boots' + b8(0xd3) + b8(0x35b) + 'p/3.3.7/cs' + b8(0x175) + b8(0x2f0)), a6 = new Q(b8(0x1c9))[b8(0x134)](b8(0xd7), 'stylesheet')[b8(0x134)]('href', 'https://cd' + b8(0x27c) + b8(0x25e) + b8(0x2a3) + b8(0x2f2) + '12.1/jquer' + b8(0x138)), a7 = new Q(b8(0xa7), {
    'integrity': b8(0x2e2) + b8(0x177) + 'NKxN+CfCh+' + b8(0x32e) + 'NZ0TciWLP4' + '=',
    'crossorigin': b8(0x292)
})[b8(0x134)](b8(0x3a3), b8(0x1ab) + b8(0x2ff) + 'com/jquery' + b8(0x16b)), a8 = new Q(b8(0xa7))['set'](b8(0x3a3), b8(0x1ab) + b8(0x2ff) + b8(0x2c2) + b8(0x2be) + '-ui.js'), a9 = new Q(b8(0xa7))[b8(0x134)](b8(0x3a3), 'https://ma' + b8(0x2b3) + b8(0xd3) + b8(0x35b) + b8(0x30e) + b8(0x31a) + b8(0x21c)), aa = new Q(b8(0xa7))[b8(0x134)](b8(0x3a3), b8(0xa2) + b8(0xab) + b8(0x38c) + b8(0x326) + b8(0x2fd) + b8(0x221) + 'n.js'), ab = new Q('style')[b8(0x134)](b8(0x28a), b8(0x37d) + 't\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20heig' + 'ht:\x20100%;\x0a' + b8(0x287) + '\x20\x20width:\x201' + b8(0xc4) + b8(0x218) + ':width\x202s\x0a' + b8(0x3d0) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.' + 'stats\x20{\x0a\x20\x20' + b8(0x287) + 'height:\x2010' + b8(0x153) + b8(0x1cb) + b8(0x2ea) + b8(0x298) + b8(0x209) + b8(0x386) + b8(0x155) + b8(0x1ec) + b8(0x287) + '\x20\x20-ms-over' + 'flow-style' + ':\x20none;\x0a\x20\x20' + b8(0x287) + '/*\x20IE\x20and\x20' + b8(0x13c) + b8(0x287) + b8(0x18d) + b8(0x2b9) + b8(0x278) + '\x20\x20\x20\x20\x20/*\x20Fi' + b8(0x373) + b8(0x287) + b8(0x3c5) + b8(0xcc) + b8(0x39c) + b8(0x1c7) + b8(0x158) + b8(0x225) + b8(0x1cc) + b8(0x298) + '\x20\x20\x20\x20\x20\x20\x20img' + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x16f) + b8(0x26e) + b8(0x30f) + b8(0x3ea) + b8(0x2eb) + b8(0x3b4) + b8(0x287) + '\x20border-ra' + b8(0x104) + b8(0x14e) + b8(0x2e5) + b8(0x284) + b8(0x3ed) + b8(0x3ea) + b8(0x172) + b8(0x214) + b8(0x298) + b8(0x269) + b8(0xc8) + b8(0x3f1) + b8(0xf8) + b8(0x1e5) + b8(0x2c3) + b8(0x275) + 'input\x20{\x0a\x20\x20' + b8(0x287) + b8(0x127) + 'idth:\x201px;' + b8(0x1ee) + '\x20\x20\x20\x20\x20borde' + b8(0x2e7) + 'hed\x20rgb(87' + b8(0x29d) + b8(0x31c) + '\x20\x20\x20\x20color:' + b8(0x1a0) + b8(0x287) + b8(0xa1) + b8(0x247) + b8(0x235) + b8(0x212) + b8(0x28d) + b8(0x9d) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + b8(0x289) + b8(0x212) + b8(0x13e) + b8(0x10b) + b8(0x287) + b8(0x3b9) + b8(0x1c4) + b8(0x1d7) + '\x20.server_n' + b8(0x327) + (b8(0x3f1) + b8(0x31d) + b8(0x2c3) + b8(0x275) + b8(0xdd) + 'kit-scroll' + b8(0xb9) + b8(0x274) + 'splay:\x20non' + b8(0x278) + b8(0x1c3) + b8(0x156) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0xd0) + b8(0x124) + b8(0x212) + b8(0x288) + b8(0x12e) + b8(0x287) + '\x20\x20display:' + b8(0x353) + b8(0x216) + b8(0x1b5) + b8(0x39a) + b8(0x1a4) + b8(0x176) + b8(0x31e) + 'gs_2\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + b8(0x34c) + b8(0x2e8) + b8(0x298) + b8(0x1a3) + b8(0x37f) + b8(0x287) + 'position:\x20' + 'fixed;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'op:\x2010px;\x0a' + b8(0x287) + '\x20\x20left:\x2010' + b8(0x153) + b8(0x385) + b8(0x111) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + b8(0x15c) + 'canvas\x20{\x0a\x20' + b8(0x287) + b8(0x36d) + b8(0x344) + b8(0x287) + 'left:\x200;\x0a\x20' + b8(0x287) + b8(0x1c8) + b8(0x287) + '\x20width:\x2010' + b8(0xe2) + '\x20\x20\x20\x20\x20\x20heig' + 'ht:\x20100%;\x0a' + b8(0x287) + b8(0xe7) + b8(0x3d1) + b8(0x32a) + b8(0x1c0) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x208) + b8(0x1fa) + b8(0x14e) + b8(0x1f6) + b8(0x372) + b8(0xeb) + b8(0x321) + b8(0x14e) + b8(0x20d) + b8(0x2ef) + b8(0xc6) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + b8(0x280) + b8(0x12a) + b8(0x287) + 'width:\x20100' + b8(0x384) + b8(0x1e1) + b8(0x210) + b8(0x169) + b8(0x1d5) + b8(0xb8) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + b8(0x1be) + b8(0x391) + 'button]\x20{\x0a' + b8(0x287) + b8(0x1da) + b8(0xd9) + 'rgb(255,\x202' + '55,\x20255);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x245) + 'hite;\x0a\x20\x20\x20\x20' + b8(0x1d8)) + ('\x20\x20\x20\x20\x20*\x20{\x0a\x20' + b8(0x287) + '\x20box-sizin' + b8(0xe9) + b8(0x2b4) + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + b8(0x27f) + b8(0x3bd) + '\x20\x20\x20\x20\x20\x20\x20bac' + 'kground-im' + b8(0x1b6) + '/css/searc' + 'hicon.png\x27' + b8(0x3a8) + '\x20\x20\x20\x20\x20backg' + b8(0xef) + 'tion:\x2010px' + b8(0xa5) + b8(0x2bb) + 'ackground-' + b8(0xf1) + b8(0x36f) + b8(0x287) + b8(0x2e4) + b8(0xe2) + b8(0x165) + b8(0x23c) + b8(0x3ae) + b8(0x236) + b8(0x17f) + b8(0x1e2) + b8(0x372) + '\x20\x20\x20\x20\x20\x20\x20bor' + b8(0x179) + b8(0x145) + b8(0x14e) + b8(0x2c4) + b8(0x309) + b8(0x153) + b8(0x98) + b8(0x11c) + b8(0x14e) + b8(0x2cb) + b8(0x97) + b8(0x24b) + b8(0x383) + b8(0x14a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0xf5) + b8(0x3c8) + b8(0x1c3) + '\x20\x20#myUL\x20li' + b8(0x34e) + b8(0x2bb) + b8(0x2df) + b8(0x361) + 'd;\x0a\x20\x20\x20\x20\x20\x20\x20' + b8(0x263) + 'n-top:\x20-1p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + b8(0xad) + b8(0x15e) + b8(0x215) + b8(0x3b5) + b8(0x368) + b8(0x273) + b8(0x249) + '38,\x20238,\x202' + '38,\x200.192)' + b8(0x31c) + b8(0x241) + b8(0x383) + b8(0x22f) + b8(0x3ae) + b8(0x3df) + 'decoration' + b8(0x166) + b8(0x287) + b8(0xb0) + b8(0x323) + b8(0x126) + b8(0xdc) + b8(0x378) + b8(0x38a) + b8(0x3ec) + b8(0x3d0) + b8(0x15c) + b8(0x1e3) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x387) + b8(0x3a9) + b8(0x135) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'margin-top' + b8(0x26f) + b8(0x287) + b8(0x279) + '\x20double\x20bo' + 'rders\x20*/\x0a\x20' + b8(0x287)) + (b8(0x3c5) + 'd-color:\x20r' + 'gba(238,\x202' + b8(0x21b) + b8(0x36b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20;' + b8(0x14e) + b8(0x296) + b8(0x2f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'text-decor' + b8(0x1e8) + b8(0x278) + b8(0x182) + b8(0x22a) + b8(0x31c) + b8(0x2f1) + '\x20black;\x0a\x20\x20' + b8(0x287) + b8(0x377) + b8(0x27e) + b8(0x32a) + b8(0x100) + b8(0x2db) + b8(0x287) + b8(0xf0) + b8(0x2ee) + b8(0x287) + 'border:\x201p' + b8(0xf4) + b8(0x2fe) + b8(0x223) + 'in-top:\x20-1' + b8(0x153) + b8(0x345) + 'revent\x20dou' + b8(0x314) + b8(0x1bc) + b8(0x1cd) + b8(0xdf) + 'lor:\x20rgba(' + b8(0xa8) + b8(0x272) + b8(0x3a8) + b8(0x110) + b8(0x362) + b8(0x340) + b8(0x153) + b8(0x1bd) + '-decoratio' + b8(0x24c) + b8(0x287) + '\x20font-size' + b8(0x302) + b8(0x287) + b8(0x28c) + 'ck;\x0a\x20\x20\x20\x20\x20\x20' + b8(0x2d4) + b8(0x1af) + b8(0x2c3) + b8(0x275) + b8(0xb4) + b8(0x178) + b8(0x331) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x3be) + b8(0x334) + b8(0x306) + '\x20238,\x20238)' + b8(0x31c) + b8(0x3cb) + '#myUL\x20li\x20d' + b8(0xb5) + b8(0xd5) + b8(0x15a) + 'r:not(.hea' + 'der)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + b8(0x26b) + b8(0x303) + '(238,\x20238,' + b8(0x246) + b8(0x126) + b8(0x14d) + b8(0x31c) + '}\x0a')), ac = new Q(b8(0x3e3))['set'](b8(0xd4), b8(0x33d) + 'ntainer')[b8(0x1fe)](new Q('a')[b8(0x134)]('innerText', '\x20'), new Q('h2')[b8(0x134)](b8(0x25c), 'play\x20custo' + b8(0x380)), new Q('input')[b8(0x134)](b8(0x1de), b8(0x242))[b8(0x134)](b8(0x355), '')[b8(0x134)]('id', b8(0x2f7)), new Q('br'), new Q('br'), new Q('div')[b8(0x134)]('id', b8(0xc7))['append'](new Q(b8(0x3e3))[b8(0x134)]('id', b8(0x21e))[b8(0x1fe)](new Q(b8(0x3a2))['set']('id', b8(0x2c8)))), new Q('br'), new Q(b8(0x3e3))[b8(0x134)]('id', b8(0x14c)), new Q(b8(0x3e3))[b8(0x134)]('id', b8(0x1a1)), new Q(b8(0x3e3))[b8(0x134)]('id', b8(0xaf)), new Q(b8(0x360))[b8(0x134)]('id', b8(0x360)), new Q('hr'), new Q(b8(0x3e3))['set'](b8(0xd4), b8(0x1df))[b8(0x134)]('id', 'menu')[b8(0x1fe)](new Q('h2')[b8(0x134)]('innerText', b8(0x20f))), new Q('br'), new Q('hr'), new Q('br'), new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), b8(0x1df))['set']('id', 'Builds_')[b8(0x1fe)](new Q(b8(0x189))[b8(0x134)]('innerHTML', b8(0x14e) + '\x20\x20\x20/*\x20CSS\x20' + b8(0x28e) + b8(0x395) + b8(0xf2) + b8(0x1f9) + '*/\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20.reg' + b8(0x1f0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x3c5) + b8(0x370) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x13f) + b8(0x1aa) + b8(0x3af) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x2a2) + b8(0x15b) + b8(0x24d) + b8(0x3d0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20.body\x20{' + b8(0x14e) + b8(0x1cd) + b8(0x3a6) + b8(0x37b) + b8(0x287) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x15f) + b8(0x396) + b8(0x287) + b8(0x3c5) + b8(0x11f) + b8(0x31c) + b8(0x13f) + b8(0x1aa) + b8(0xbf) + b8(0x287) + '\x20\x20backgrou' + b8(0x254) + b8(0x149) + b8(0x2cd) + b8(0x287) + b8(0x397) + b8(0x287) + b8(0x266) + b8(0x393) + '6C;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + b8(0x287) + '\x20.reloads\x20' + b8(0xa0) + b8(0x351) + 'ckground:\x20' + b8(0x101) + b8(0x28f) + b8(0x287) + b8(0x335) + b8(0x1ad) + b8(0x13d) + b8(0x287) + b8(0x3e1) + 'nd:\x20#6CF0E' + b8(0x149) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20'), new Q('h2')['set']('innerText', b8(0x31f)), new Q('div')[b8(0x134)]('id', 'stats_show')[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x1fe)](new Q('span')[b8(0x134)](b8(0x25c), b8(0xbd)), new Q(b8(0x3a2))['set'](b8(0xd4), b8(0x157)))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), 'stats')[b8(0x1fe)](new Q(b8(0x3e3))['set']('className', b8(0x304)))), new Q(b8(0x3e3))[b8(0x1fe)](new Q('span')['set']('innerText', b8(0x1c6)), new Q(b8(0x3a2))['set'](b8(0xd4), 'health_'))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)]('className', b8(0x35d))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), 'stat\x20healt' + 'h'))), new Q(b8(0x3e3))[b8(0x1fe)](new Q(b8(0x3a2))[b8(0x134)](b8(0x25c), b8(0x267)), new Q(b8(0x3a2))[b8(0x134)](b8(0xd4), b8(0x3de)))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)]('className', b8(0x35d))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)]('className', 'stat\x20body'))), new Q(b8(0x3e3))['append'](new Q('span')[b8(0x134)](b8(0x25c), b8(0x1d2)), new Q('span')[b8(0x134)](b8(0xd4), 'bspeed_'))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), 'stats')[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)]('className', 'stat\x20bspee' + 'd'))), new Q(b8(0x3e3))[b8(0x1fe)](new Q(b8(0x3a2))[b8(0x134)]('innerText', b8(0x3db)), new Q(b8(0x3a2))[b8(0x134)](b8(0xd4), b8(0x1e4)))[b8(0x1fe)](new Q(b8(0x3e3))['set'](b8(0xd4), b8(0x35d))[b8(0x1fe)](new Q(b8(0x3e3))['set'](b8(0xd4), b8(0x291)))), new Q(b8(0x3e3))[b8(0x1fe)](new Q(b8(0x3a2))[b8(0x134)](b8(0x25c), 'Dmg:'), new Q('span')[b8(0x134)]('className', b8(0x10f)))['append'](new Q(b8(0x3e3))[b8(0x134)]('className', b8(0x35d))['append'](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), 'stat\x20dmg'))), new Q(b8(0x3e3))[b8(0x1fe)](new Q(b8(0x3a2))[b8(0x134)](b8(0x25c), b8(0x354)), new Q(b8(0x3a2))[b8(0x134)](b8(0xd4), b8(0x39d)))[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), b8(0x35d))['append'](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), 'stat\x20reloa' + 'ds'))), new Q(b8(0x3e3))[b8(0x1fe)](new Q(b8(0x3a2))[b8(0x134)](b8(0x25c), b8(0x2c7)), new Q(b8(0x3a2))['set'](b8(0xd4), b8(0xf7)))[b8(0x1fe)](new Q(b8(0x3e3))['set']('className', 'stats')[b8(0x1fe)](new Q(b8(0x3e3))[b8(0x134)](b8(0xd4), b8(0x2aa))))), new Q('hr'), new Q(b8(0xed))[b8(0x134)]('id', b8(0x39e))['set'](b8(0x1b3) + 'r', 'Search\x20for' + b8(0x33e))[b8(0x134)](b8(0x34b), b8(0xc1) + b8(0x283)), new Q('br'), new Q('br'), new Q('ul')[b8(0x134)]('id', 'myUL'))), ad = new Q(b8(0xa7))[b8(0x134)](b8(0x28a), b8(0x198) + b8(0xf6) + b8(0x2d7) + b8(0x2f5) + 'ment.getEl' + b8(0x17a) + b8(0x19b) + b8(0xf9) + b8(0x228) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20//\x20Your\x20f' + b8(0x3c4) + b8(0x119) + b8(0x1ac) + b8(0x190) + b8(0x369) + b8(0x3ee) + 'xtValue;\x0a\x20' + b8(0x32c) + b8(0x322) + b8(0x231) + 'mentById(\x22' + b8(0xca) + b8(0x3b2) + b8(0xbc) + 'put.value.' + b8(0x2fb) + b8(0x2ec) + b8(0x3b0) + b8(0x39f) + b8(0x164) + b8(0x12c) + b8(0x32f) + b8(0x183) + b8(0x188) + b8(0x295) + b8(0x29c) + b8(0x2a5) + b8(0x339) + b8(0x201) + b8(0x3a7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'ry{\x0a\x20\x20\x20\x20\x20\x20' + b8(0x287) + b8(0x3e0) + b8(0x162) + b8(0x102) + b8(0x3d3) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x136) + b8(0xa9) + '.textConte' + b8(0x32d) + b8(0x14b) + b8(0x287) + b8(0x21f) + b8(0xa4) + b8(0x336) + ').indexOf(' + b8(0x26a) + b8(0x342) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x195) + b8(0x268) + 'splay\x20=\x20\x22\x22' + b8(0x31c) + b8(0x227) + b8(0x18f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b8(0x359) + b8(0xd2) + b8(0x2a4) + b8(0xfa) + b8(0x287) + b8(0x1a7) + b8(0x2bf) + 'tch(err){c' + b8(0x2ad) + b8(0x251) + b8(0x35f) + ';\x0a'), ae = new Q(b8(0x3cd))[b8(0x1fe)](new Q('head')[b8(0x1fe)](a5, a6, a7, a8, a9, aa, ab), new Q('body')[b8(0x1fe)](ac, ad, new Q(b8(0xa7))['set'](b8(0x28a), function() {
    var bP = b8;

    function ah(ax) {
        return !!(ax || this)[ao(0xe9)](/[A-Z_$a-z]/gi);
    }

    function ai(ax) {
        return !!(ax || this)[ao(0xe9)](/[\(\{\[]/gi);
    }

    function aj(ax) {
        return !!(ax || this)[ao(0xe9)](/[\]\}\)]/gi);
    }

    function ak(ax) {
        return !!(ax || this)[ao(0xe9)](/[0-9]/gi);
    }

    function al(ax) {
        var by = q;
        return !!(ax || this)[by(0x11d)](/[\r\n]/gi);
    }

    function ah(ax) {
        return !!(ax || this)[ao(0xe9)](/[A-Z_$a-z]/gi);
    }

    function am(ax) {
        return !!(ax || this)[ao(0xe9)](/ /gi);
    }

    function an() {
        var ax = ao,
            ay = as[aq];
        aw[ax(0xe1)] = ay['t'], document[ax(0xfb)] = ay['name'], aw[ax(0x108)] = function() {
            var bz = q,
                az = ax;
            aw[az(0xe1)] = null, aq++, ay = as[aq], aw[bz(0x3a3)] = ay['t'], document[bz(0x34b)] = ay[az(0xc9)];
        };
    }

    function ao(ax, ay) {
        var az = ap();
        return (ao = function(aA, aB) {
            return az[aA -= 0xaf];
        })(ax, ay);
    }

    function ap() {
        var bA = q,
            ax = [bA(0x2ba), bA(0x3ca), 'split', bA(0x28a), bA(0x1de), bA(0x234), 'repeat', 'URL', bA(0x25b), bA(0x184), 'Skip', bA(0x3c0), bA(0xd4), bA(0x2f7), 'Enter\x20volu', bA(0x265), 'rgb(', 'fillStyle', bA(0x282), 'currentTim', bA(0x242), 'isAsync', bA(0x3a0) + bA(0x9f), 'stener', 'abort', 'AsyncFunct', bA(0x319), bA(0x22b), bA(0x192), 'size', bA(0x2f9), bA(0x1dc), 'Shuffle', bA(0xf3), bA(0x33a), bA(0x305), bA(0x376), bA(0x211), bA(0x1bf), bA(0xba), bA(0x2c9), '2239692OFl' + bA(0x338), bA(0x290), bA(0x283), bA(0x181), bA(0x3ba), bA(0x10d), bA(0x381), '3228507JKS' + bA(0x399), bA(0x348), bA(0x21a), bA(0x341), bA(0x2c8), bA(0x2f4), bA(0x1fe), bA(0x19a), 'result', bA(0x3bc), bA(0x3ce), bA(0x35e), bA(0x2b7), bA(0x33f), bA(0x200), 'createMedi', bA(0x10c), bA(0x193), bA(0x113), bA(0x3a3), bA(0x30c), bA(0xdb), 'change', bA(0x28b), bA(0x2f8), bA(0x197), bA(0xb7), bA(0x11d), 'quencyData', 'input', bA(0x2c6), bA(0x23e), bA(0x3e4), 'length', bA(0x388), 'getElement', bA(0x3a2), bA(0x19d), 'createElem', bA(0x356), bA(0x122), bA(0xc5), bA(0x2e0), bA(0xe0), 'toFixed', bA(0x34b), 'isArray', 'ntsion:\x0a\x22', bA(0x220), '87969ZAwmK' + 'G', bA(0x374), bA(0xff), bA(0x366), 'style', bA(0x25f), bA(0x171), bA(0x151), 'canvas', bA(0x1fd), bA(0x34f), bA(0x168), 'myBar', bA(0x1ae), bA(0x1f8), bA(0x1ca), bA(0x143), bA(0x25c), bA(0x352), bA(0x260) + bA(0x1f4), bA(0x222) + bA(0x294), bA(0x10a), '201188lJwZ' + 'XE', bA(0x258), 'split_repl'];
        return (ap = function() {
            return ax;
        })();
    }
    var aq, ar, as, at, au = ao;
    ! function(ax, ay) {
        var bB = q;
        for (var az = ao, aA = ax();;) {
            try {
                if (0xa3444 === parseInt(az(0x115)) / 0x1 + parseInt(az(0xc7)) / 0x2 + -parseInt(az(0xff)) / 0x3 * (-parseInt(az(0x127)) / 0x4) + -parseInt(az(0xbf)) / 0x5 * (parseInt(az(0x113)) / 0x6) + -parseInt(az(0xb4)) / 0x7 + parseInt(az(0x112)) / 0x8 + -parseInt(az(0xce)) / 0x9) break;
                aA['push'](aA[bB(0xc9)]());
            } catch (aB) {
                aA[bB(0x1dc)](aA[bB(0xc9)]());
            }
        }
    }(ap), at = 0x64,
        function() {
            var bI = q;

            function ax(aF, aG) {
                var bC = q,
                    aH, aI = ao,
                    aJ = 0x0,
                    aK = '',
                    aL = [typeof String(), aI(0x105), aI(0x105)];
                if (![aL[aI(0x109)](typeof this), aL[aI(0x109)](typeof aF)]['filter'](aM => !(aM < 0x0))[aI(0xef)]) throw aI(0xf8) + aI(0x111) + 'de';
                (aH = (Array[aI(0xfc)](aF || this) ? (aF || this)[aI(0x10d)](aG) : (aL[bC(0x34f)](typeof aF) < 0x0 ? this : aF)[aI(0xf5)]()[aI(0x11a)]('\x20\x20')[aI(0x10d)]('')[bC(0x1a9)]('{')[bC(0x1f8)]('{\x0a')[aI(0x11a)]('}')[bC(0x1f8)]('\x0a}')[aI(0x11a)]('\x0a\x0a')[aI(0x10d)]('\x0a'))[aI(0x11a)](''))[aI(0xef)];
                for (let aM = 0x0; aM < aH[aI(0xef)]; aM++) {
                    const aN = aH[aM],
                        aO = aH[aM + 0x1],
                        aP = aH[aM - 0x1];
                    Number((aM / aH[aI(0xef)] * 0x64)[aI(0xfa)](0x2)), '\x5c' != aP && ('{' == aN && aJ++, '}' == aN && aJ--), aJ < 0x0 && (aJ = 0x0), aK += '\x0a' == aN ? '}' == aO ? aN + '\x20' [bC(0x2e9)](aJ ? aJ - 0x1 : aJ) : aN + '\x20' [aI(0x11e)](aJ) : aN;
                }
                return aK;
            }

            function ay(aF) {
                var bD = q,
                    aG = ao;
                return (aF || this)[bD(0xb7) + 'r'][aG(0xc9)][aG(0xc1)](aG(0xb7) + bD(0x2ab));
            }

            function az(aF, aG = null, aH = '') {
                var bE = q,
                    aI = ao;
                return this[bE(0x1a9)](...(function() {
                    return arguments[0x0] ? [aF, aG] : [aF];
                }(aG)))[aI(0x10d)](aH);
            }

            function aA() {
                var bF = q;
                return !this[ao(0xf5)]()[bF(0x305)]('.');
            }

            function aB(aF = []) {
                var bG = q,
                    aG = ao;
                return (aF[aG(0xef)] ? aF : this)[Math[aG(0xe7)](Math[aG(0xd7)]() * (aF[bG(0x18c)] ? aF : this)[bG(0x18c)])];
            }

            function aC(aF = []) {
                var bH = q,
                    aG = ao;
                for (let aH = (aF[aG(0xef)] ? aF : this)[aG(0xef)] - 0x1; aH > 0x0; aH--) {
                    const aI = Math[aG(0xe7)](Math[bH(0x3bc)]() * (aH + 0x1)),
                        aJ = (aF[bH(0x18c)] ? aF : this)[aH];
                    (aF[bH(0x18c)] ? aF : this)[aH] = (aF[aG(0xef)] ? aF : this)[aI], (aF[bH(0x18c)] ? aF : this)[aI] = aJ;
                }
                return aF[aG(0xef)] ? aF : this;
            }
            var aD = ao,
                aE = (function() {
                    const aF = arguments;
                    return function(aG) {
                        return (aG || this)[aF[0x2][0x0]][aF[0x2][0x1]][aF[0x2][0x2]](aF[0x2][0x3]);
                    };
                }([], [''], [aD(0xe8) + 'r', aD(0xc9), aD(0xc1), aD(0xb7) + bI(0x2ab)], [''], [], {}));
            Function[aD(0x101)][aD(0x118)] = ax, Function[aD(0x101)][aD(0xb3)] = ay, Function[aD(0x101)][aD(0xb3)] = aE, Number[aD(0x101)][bI(0x1f3)] = aA, Array[aD(0x101)][aD(0xd7)] = aB, Array[aD(0x101)][aD(0xe5)] = aC, String[bI(0xff)][aD(0x117) + aD(0xe6)] = az, Object[aD(0x123)](Object[bI(0xff)], {
                'isNumber': ak,
                'isLetter': ah,
                'isOpen': ai,
                'isClose': aj,
                'isBlank': am,
                'isLine': al,
                'getType': function(aF) {
                    var aG = aD;
                    return null == typeof(aF || this) ? aG(0xdb) : (aF || this)[aG(0xe8) + 'r'][aG(0xc9)];
                },
                'type_': function() {
                    var aF, aG = aD;
                    const aH = arguments[0x0] || this;
                    return (aF = [ah, ak, ai, aj, am])[aG(0xcd)](aI => !!aI(aH))[aG(0xc3)](aI => aF[aG(0xc3)](aJ => aJ[aG(0xc9)])[aG(0x109)](aI[aG(0xc9)]))[0x0];
                }
            }), Object[bI(0x3c0)](this, {
                'formate': ax,
                'isAsync': ay,
                'isWhole': aA,
                'random': aB,
                'shuffle': aC,
                'split_replace': az,
                'getError': function(aF, ...aG) {
                    try {
                        aF(...aG);
                    } catch (aH) {
                        return aH;
                    }
                }
            }), Object[aD(0x123)](this, {
                'debug': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'error': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'info': function(...aF) {
                    var bJ = bI;
                    Date()[bJ(0x11d)](/[\d:]+/gi)[0x2];
                },
                'log': function(...aF) {
                    var bK = bI;
                    Date()[bK(0x11d)](/[\d:]+/gi)[0x2];
                },
                'warn': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dir': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dirxml': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'table': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'trace': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'group': function(...aF) {
                    var bL = bI;
                    Date()[bL(0x11d)](/[\d:]+/gi)[0x2];
                },
                'groupCollapsed': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'groupEnd': function(...aF) {
                    var bM = bI;
                    Date()[bM(0x11d)](/[\d:]+/gi)[0x2];
                },
                'clear': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'count': function(...aF) {
                    var bN = bI;
                    Date()[bN(0x11d)](/[\d:]+/gi)[0x2];
                },
                'countReset': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'assert': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profile': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profileEnd': function(...aF) {
                    var bO = bI;
                    Date()[bO(0x11d)](/[\d:]+/gi)[0x2];
                },
                'time': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeLog': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeEnd': function(...aF) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'timeStamp': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'context': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                }
            });
        }[bP(0x316)](au(0xdb) == typeof exports ? this['i'] ? exports : au(0xdb) == typeof window ? this : globalThis || self || window || top : this);
    const av = document['getElement' + bP(0x33a)](au(0x125));
    Array[au(0x101)][au(0xc5) + 'nc'] = async function(ax = function() {}) {
        var ay = au;
        for (let az = 0x0; az < this[ay(0xef)]; az++) {
            await ax(this[az], az, this[ay(0xef)]);
        }
        return null;
    }, Array[au(0x101)][au(0x120)] = async function(ax = function() {}) {
        var ay = au,
            az = this;
        for (let aA = 0x0; aA < az[ay(0xef)]; aA++) {
            az[aA] = await ax(az[aA], aA, az[ay(0xef)]);
        }
        return az;
    }, aq = 0x0, ar = document[bP(0x162) + bP(0x33a)](bP(0x1a1));
    const aw = new Audio();
    as = [], aw[au(0xd0)] = 0.3, [
        [au(0xbe), () => (as[au(0xe5)](), aw[bP(0x30c)](), an())],
        [bP(0x2a8), an],
        [au(0x122), () => {
            var bQ = bP;
            aw[bQ(0x9b) + 'e'] = aw['duration'] - 0.1;
        }],
        [au(0x106), () => {
            var ax = au;
            aq -= 0x2, aw[ax(0xb1) + 'e'] = aw[ax(0x11d)] - 0.1;
        }],
        [au(0x10a), () => aw[bP(0x168)]()],
        [bP(0x30c), () => aw[au(0xe2)]()],
        [bP(0x143), function(ax) {
            var bR = bP,
                ay = au;
            aw[ay(0x10f)] = !aw['loop'], ax[bR(0x25c)] = ay(0xe0) + (aw[ay(0x10f)] ? 'on' : ay(0xcb));
        }],
        [au(0xd0), () => {
            var ax = au;
            aw[ax(0xd0)] = prompt(ax(0x126) + 'me', '50') / 0x64;
        }]
    ][au(0xbc)](ax => {
        var ay = au,
            az = ay(0x105) == typeof ax[0x1] ? ax[0x1] : function() {
                var bS = q,
                    aB = ay;
                alert(aB(0x100) + ax[0x0] + (aB(0xfe) + bS(0xfe)));
            },
            aA = document['createElem' + ay(0x102)](ay(0xd9));
        aA[ay(0x110)] = ax[0x0], aA[ay(0xee)] = az, ar[ay(0xd4)](aA);
    }), aw[au(0x116) + au(0xe3)] = ax => {
        var bT = bP,
            ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK = au;
        aw[aK(0x10a)]();
        let aL = aw;
        az = (ay = new AudioContext())[aK(0xdd) + aK(0xdf) + bT(0x307)](aL), aA = ay[aK(0xf9) + aK(0x114)](), (aB = document[aK(0xf1) + bT(0x33a)](aK(0x107)))[aK(0xc6)] = window[aK(0xb0)], aB[aK(0xb9)] = window[aK(0xdc) + 't'], aC = aB[aK(0xc8)]('2d'), az[aK(0x10c)](aA), aA[aK(0x10c)](ay[aK(0xed) + 'n']), aA[aK(0xc2)] = 0x100, aD = aA[aK(0xda) + aK(0xcf)], aE = new Uint8Array(aD), aF = aB[aK(0xc6)], aG = aB[aK(0xb9)], aH = aF / aD * 2.5, aJ = 0x0, aL[aK(0x10a)](),
            function aM() {
                var bU = bT,
                    aN, aO, aP, aQ = aK;
                for (requestAnimationFrame(aM), aJ = 0x0, aA[aQ(0xd8) + aQ(0xea)](aE), aC[aQ(0xaf)] = bU(0x318), aC[aQ(0xc4)](0x0, 0x0, aF, aG), aN = 0x0; aN < aD; aN++) {
                    aO = (aI = aE[aN]) + aN / aD * 0x19 - at, aP = aN / aD * 0xfa, 0x32, aC[aQ(0xaf)] = aQ(0x128) + aO + ',' + aP + bU(0x3ad), aC[aQ(0xc4)](aJ, aG - aI, aH, aI), aJ += aH + 0x1;
                }
            }();
    }, av[au(0xba) + au(0xb5)](au(0xe4), ax => {
        var ay = au;
        (async function(az, aA, aB = function() {
            return !0x0;
        }) {
            var aC = ao,
                aD = new class {
                    constructor() {
                        this[ao(0xd3)] = [];
                    }[aC(0xbd)](...aF) {
                        var aG = aC;
                        this[aG(0xd3)][aG(0xbd)](...aF);
                    }
                }();
            const aE = (aF => {
                var bV = q,
                    aG = aC,
                    aH = [];
                for (const aI of aF) {
                    const aJ = aI[aG(0xc9)] ? aI[bV(0x283)] : aG(0xb8) + aG(0x119),
                        aK = aI[aG(0x11c)] ? aI['type'] : 'NOT\x20SUPPOR' + aG(0x119),
                        aL = aI[aG(0xbb)] ? aI[bV(0x3c6)] : aG(0xb8) + aG(0x119);
                    aH[aG(0xbd)]({
                        'file': aI,
                        'name': aJ,
                        'type': aK,
                        'size': aL
                    });
                }
                return aH;
            })([...(az && az[aC(0xd3)] ? az[aC(0xd3)] : 0x0) || av['files']]);
            return aD[aC(0xd3)] = await aE[aC(0xcd)](aB)[aC(0x120)](async(aF, aG, aH) => {
                var bY = q,
                    aI, aJ, aK, aL, aM = aC;
                const {
                    file: aN,
                    name: aO,
                    type: aP,
                    size: aQ
                } = aF, aR = new FileReader();
                return aJ = (aI = await new Promise(aS => {
                    var bX = q;

                    function aT(aY) {
                        var bW = q,
                            aZ, b0 = ao,
                            b1 = [aO, aY[b0(0x11c)] + ':', (aY['loaded'] / aY[b0(0xde)] * 0x64)[b0(0xfa)](0x2) + '%'];
                        document[b0(0xf1) + b0(0xc0)](b0(0xd2))[b0(0x11b)] = b1[0x0], document[b0(0xf1) + bW(0x33a)](b0(0x10b))[b0(0x103)][bW(0x2c9)] = b1[0x2], aY[b0(0x11c)], b0(0xf3) === aY[bW(0x1de)] && (aZ = aR[b0(0xd6)], aS(aZ));
                    }
                    var aU, aV, aW = ao,
                        aX = document[aW(0xf4) + aW(0x102)](aW(0xf2));
                    aX['className'] = aW(0xb2), aX[bX(0x28a)] = aO, aX['id'] = aO, (aU = document[aW(0xf4) + aW(0x102)](aW(0xf2)))[aW(0x124)] = 'progress', aU[bX(0x28a)] = '0%', aU['id'] = aO + '%', (aV = aR)[aW(0xba) + aW(0xb5)](bX(0x250), aT), aV[aW(0xba) + aW(0xb5)](aW(0xf3), aT), aV[aW(0xba) + aW(0xb5)](aW(0xca), aT), aV[aW(0xba) + aW(0xb5)](aW(0xcc), aT), aV[aW(0xba) + bX(0x237)](aW(0xd5), aT), aV[aW(0xba) + aW(0xb5)](aW(0xb6), aT), aR[aW(0x104) + aW(0x11f)](aN);
                }))[aM(0x11a)](','), aK = aI[bY(0x11d)](/(data):([-\w]+\/[-\w]+);(\w+)/), dt = aJ, 'NOT\x20SUPPOR' + aM(0x119) == aP && (aL = aO[aM(0x11a)]('.')[aM(0xd1)]()[aM(0x11a)]('(')[0x0], new Error(aP + (aM(0xec) + aM(0xfd)) + aL + (aM(0xf0) + aM(0x10e) + (bY(0x2c6) + 'ntsion')))['name'] = aP), {
                    'file': aN,
                    'name': aO,
                    'type': aP,
                    'size': aQ,
                    'data': dt,
                    'o': aK,
                    'b': aF
                };
            }), aC(0x105) == typeof aA && aA(aD), {
                'files': aD
            };
        }(!0x1, !0x1, az => az[ay(0x11c)][ay(0xc1)](ay(0x121)))[ay(0xf6)](az => {
            var aA = ay;
            az[aA(0xd3)][aA(0xd3)][aA(0xbc)](aB => {
                var bZ = q,
                    aC = aA,
                    aD = document[aC(0xf4) + aC(0x102)](aC(0xf2));
                aD[bZ(0x28a)] = aB[aC(0xc9)], aD[aC(0xf7)] = '', aD[aC(0xee)] = function(aE) {
                    var c0 = bZ,
                        aF = aC;
                    aw[c0(0x30c)](), aw[c0(0x3a3)] = aB['o'][aF(0xeb)];
                }, as[aC(0xbd)]({
                    'name': aB[aC(0xc9)],
                    't': aB['o']['input']
                });
            });
        }, console[ay(0xd5)]));
    });
}[b8(0x356)]() + b8(0x2d8)))), af = I('myWin_');

function j() {
    var cF = ['box;\x0a\x20\x20\x20\x20\x20', 'ren_grid_c', 'e_color\x201\x20', 'frequencyB', 'label', 'width:\x20non', 'formate', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', '0xFFFF00', 'layer', '2.1/jquery', '\x20\x20\x20\x20\x20\x20\x20}ca', 'nput', 'or\x20movemen', 'com/ui/1.1', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}', '\x20\x20\x20margin-', '_backgroun', '\x20file\x20exte', 'Speed:', 'TextAl', 'width', 'Build', '\x20\x20\x20list-st', 'width=256,', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', '\x20(Making\x20G', 'removeItem', 'message', 'lization', 'ui_prevent', 'oard', '\x20\x20\x20\x20\x20\x20disp', 'ts\x20Vary,\x20s', '\x200x8B0000', 'st\x20Passed\x27', '\x0aMySrc();', '0x555555', 'o\x20the\x20game', 'li\x20div\x20{\x0a\x20', 'Render\x20FPS', 'ze\x20context', 'checkbox', 'order:\x201px', 'Cant\x20forma', 'Base\x20color', 'sha256-eKh', 'build', '\x20width:\x2010', '\x20\x20\x20border-', 'globalRoot', 'r:\x202px\x20das', '\x20444px;\x0a\x20\x20', 'repeat', 'h:\x2050%;\x0a\x20\x20', 'er:\x202px\x20so', 'e();\x0a\x20\x20\x20\x20\x20', 'Enable\x20cli', 'ointer;\x0a\x20\x20', 'calc(100%\x20', 'p.min.css', '\x20\x20\x20\x20color:', 'queryui/1.', 'iframe', 'files', ')\x0a\x20\x20\x20\x20docu', ':\x2012px;\x0a\x20\x20', 'chooseFile', 'ace', 'forEach', 'onds)', 'toUpperCas', 'ing', 'uery/3.6.0', 'dd;\x0a\x20\x20\x20\x20\x20\x20', 'de.jquery.', 'e_color\x2016', 'round', ':\x2018px;\x0a\x20\x20', 'color:\x20rgb', 'stat\x20regen', 'includes', ':\x20rgb(238,', 'urce', '0xCDCDCD', 'bottom:\x2012', 'n\x20Pentagon', 'e_color\x202\x20', 'pause', 'getItem', 'p/3.3.7/js', 'u\x20{\x0a\x20\x20\x20\x20\x20\x20', '\x20for\x20the\x20b', 'Health\x20Bar', 'Renders\x20st', 'nd_color\x200', 'ble\x20border', 'Others\x20(FF', 'apply', 'toggles', '#000', 'NOT\x20SUPPOR', '/bootstrap', '1498870syecsx', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'lor:\x20white', '\x20\x20\x20\x20\x20\x20#Son', 'Builds-', '\x200x333231', 'tom:\x2010px;', 'ut\x20=\x20docum', '\x2018px;\x0a\x20\x20\x20', 'nt\x20for\x20eac', '0xBBBBBB', 'ax/libs/jq', 'ick\x20{\x0a\x20\x20\x20\x20', '0x43FF91', 'rokes\x20as\x20a', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', 'loading', '\x20\x20\x20\x20\x20\x20\x20inp', 'nt\x20||\x20a.in', '3qOVUtJn3Q', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20l', '0x000000', '(.header)\x20', 'r_intensit', 'bar_fill_c', 'ound-color', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'UpperCase(', 'false', 'ANm', '=\x200;\x20i\x20<\x20l', 'ById', 'gons\x20(Gree', '1rem', 'my-game-co', '\x20names..', 'undefined', 'adding:\x2012', 'pop', '-1)\x20{\x0a\x20\x20\x20\x20', '8qPhrZf', '\x20fixed;\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20/*\x20P', 'Remove-Ads', 'e_color\x207\x20', 'inCount', 'ediction\x20f', 'oard_names', 'title', 'ax-height:', 'color\x20fals', '\x20div\x20{\x0a\x20\x20\x20', 'indexOf', 'object', '\x20\x20\x20\x20\x20\x20\x20\x20ba', 't\x20given\x20co', '\x20inline-bl', 'Reload:', 'multiple', 'toString', '11mxvXZj', '\x20(Note:\x20Ac', '\x20\x20\x20\x20\x20\x20\x20li[', 'height=305', 'm/bootstra', 'Pentagon', 'stats', 'button', '\x20\x20\x20}\x0a\x20\x20\x20\x20}', 'canvas', '\x20solid\x20#dd', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', 't_reinitia', 'remove', 'For\x20ren_st', 'ent', 'colors', '\x20\x20\x20\x20\x20\x20back', 'ter,\x20ul,\x20l', 'pawners,\x20L', '.192);\x0a\x20\x20\x20', '5FjBoEV', '\x20position:', 'w.githubus', '-repeat;\x0a\x20', 'd:\x20#EEB690', '0x050505', '0px;\x0a\x20\x20\x20\x20\x20', 'refox\x20*/\x0a\x20', 'The\x20\x22', 'ievements', 'fftSize', 'display:\x20b', 'k;\x0a\x20\x20\x20\x20\x20\x20\x20', '2761980QBGUwe', 'execute', '9A6CF0;\x0a\x20\x20', 'at\x20may\x20cau', '\x0a\x20\x20\x20\x20\x20.sta', '\x20on\x20separa', 'efile\x20{\x0a\x20\x20', 'm\x20songs', 'filter', '\x20spawn\x20int', '\x20\x20\x20\x20\x20\x20\x20\x20pa', '%;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20z-in', 'y\x20{\x0a\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20border', '\x22\x20is\x20not\x20a', '0xFF77DC', '\x20\x20\x20\x20\x20displ', 'closed', 'pis.com/aj', 'game', 'createElem', 't\x20the\x20grid', 'dropDown_', 'nput[type=', 'ain/builds', 'und:\x20#F06C', 'Prevent\x20ri', '\x20.regen,\x20.', 'ed\x20{\x0a\x20\x20\x20\x20\x20', '.dmg\x20{\x0a\x20\x20\x20', 'eload\x20in\x205', 'aSR', 'ition:\x20rel', 'olor', 'gb(54,\x2057,', 'reloads_', 'search_', 'cument.get', '2873052ihh', 'map_', 'span', 'src', 'PlayerStat', 'Green\x20Team', 'kground:\x20#', 'i++)\x20{\x0a\x20\x20\x20', ');\x0a\x20\x20\x20\x20\x20\x20\x20', ':\x201px\x20soli', 'Render\x20hea', '_myWin', 'd_color\x200x', ',50)', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', 'health\x20{\x0a\x20', '\x20\x20\x20ul\x20=\x20do', 'Render\x20cla', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20f', 'item', 'lid\x20red;\x0a\x20', '\x20*/\x0a\x20\x20\x20\x20\x20\x20', 'Render\x20som', '_right_cli', 'reen\x20Team\x20', 'color:\x20blu', 'off', 'ghtly\x20wors', 'random', 'ut\x20{\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20backgr', 'Green\x20Tria', 'assign', 's\x20too\x20low[', 't_movement', 'speed', 'unction\x20co', '\x20backgroun', 'size', 'close', '0;\x0a\x20\x20\x20\x20\x20\x20\x20', 'EXP/Score\x20', 'TED', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'nsparent)', 'html', 'getByteFre', '\x20loading\x20t', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', '\x20-1;\x0a\x20\x20\x20\x20\x20', '0xFC7677', '(\x22div\x22)[0]', 'ering\x20cont', 'e_color', 'oad\x20requri', 'e_color\x2010', 'username-i', 'tern\x20for\x20g', 'value', 'Pen:', 'stylesheet', 'beforeunlo', 'body_', '\x20\x20\x20\x20\x20text-', 'a\x20=\x20li[i].', '\x20\x20backgrou', 'Render\x20sco', 'div', 'onclick', 'r\x20values', 'Render\x20raw', '0xFFFFFF', '1841622DJCyTE', '\x20looks\x20sli', '\x20\x20\x20\x20\x20\x20bord', 'HTML', 'ay:\x20block\x0a', 'id;\x0a\x20\x20\x20\x20\x20\x20', 'i,\x20a,\x20i,\x20t', 'e_color\x206\x20', 'Toggles', '\x20\x20\x20\x20\x20\x20\x20\x20co', '\x200xFF69B4', 'myUL', 'yle-type:\x20', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'Minimap\x20Bo', 'ngle,\x20Gree', 'currentTim', 'Spawning\x20i', 'ame\x20{\x0a\x20\x20\x20\x20', 'ren_health', 'gmG', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'background', 'https://aj', 'y\x20.5', 'xtValue.to', '\x2012px;\x0a\x20\x20\x20', 'is\x20differe', 'script', '238,\x20238,\x20', 'tValue\x20=\x20a', 'Error', 'ax.googlea', 'ren_stats', '\x20\x20\x20\x20\x20/*\x20Pr', '683798BHtyVY', 'Songs_2', 'font-size:', 'tion.', 'op\x20of\x20the\x20', 'clear', '#myUL\x20li\x20a', 'iv\x20div\x20inp', 'checked', 'constructo', ':\x20center;\x0a', 'bar\x20{\x0a\x20\x20\x20\x20', 'forEachAsy', 'set_convar', 'ilter\x20=\x20in', 'Regen:', 'rder', 'pen\x20{\x0a\x20\x20\x20\x20', 'Just\x20auto\x20', 'Type\x20in\x20a\x20', 'ren_solid_', 'itor\x20bulle', '0%;\x0a\x09\x09\x09\x09\x09\x09', 'href', '-\x2020px);\x0a\x20', 'myProgress', 'ton\x20{\x0a\x20\x20\x20\x20', 'shift', 'search_\x22);', 'xFFFFFF', 'd-color:\x20r', 'try_spawn', 's\x20when\x20you', 'nd\x20Auto\x20Tu', '\x20\x20\x20\x20displa', 'bug\x20info[8', 'i].style.d', 'trapcdn.co', 'className', 'ut[type=bu', 'Settings', 'rel', 'e\x20it\x20was\x20f', '2px\x20solid\x20', 'Grid\x20Lines', 'hrough', 'olor:\x20blac', 'body::-web', 'MAX', 'kground-co', 'createAnal', 'ckground_c', '0%;\x0a\x20\x20\x20\x20\x20\x20', 'from\x20trigg', 'string', '0x0000FF', 'net_force_', '\x20\x20z-index:', 'checkWin_', 'g:\x20border-', 'log', '\x20\x20\x20\x20\x20\x20\x20bot', 'darkgrey', 'input', 'tor', 'round-posi', '\x20cursor:\x20p', 'repeat:\x20no', 'health,\x20.b', '5BXcMlF', 'x\x20solid\x20#d', '\x20\x20margin:\x20', 'le.log(\x27Te', 'speed_', 'lor:\x20rgb(2', '.onkeyup=f', 'none\x22;\x0a\x20\x20\x20', 'Auto\x20reloa', '0xFFBBBB', 'e_color\x2013', 's\x20W.I.P', 'prototype', '\x20\x20\x20\x20#myUL\x20', 'rgb(152,\x202', 'sByTagName', '8c8c8c', 'dius:\x208px;', '38077jnKIcc', '_soft_colo', '\x20map\x20(over', '0xF14E54', 'AutoSpawn', 'yser', 'tatus\x20{\x0a\x20\x20', 'total', 'progress', '6954723iCkoLc', 'dmg_', '\x20\x20\x20\x20\x20;\x0a\x20\x20\x20', 'dex:\x20100;\x0a', 'ren_debug_', 'loop:', 'upgrade', 'tedFiles/m', 'ren_bar_ba', 'quares\x20(Ne', 'status', 'de\x20here\x0a\x20\x20', '\x20health\x20ba', 'ses', '\x20\x20\x20#myUL\x20{', 'match', 'Summoned\x20S', 'd:\x20#6C96F0', 'e_color\x209\x20', 'head', 'then', ',\x20semi-tra', 'y:\x20none;\x0a\x20', 'Scoreboard', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', '/*border-w', '\x20solid\x20col', 'Shiny\x20Poly', 'enter\x20{\x0a\x20\x20', 'screen', 'd(\x22myUL\x22);', 'nt\x20load.', 'ropdown\x20{\x0a', 'erty', '\x0aDesc:', 'lth\x20bars', 'ren_score_', 'e_color\x2014', 'set', 'd\x20#ddd;\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20tx', 'he\x20border\x20', 'y-ui.css', 'Select\x20Bui', 'd\x20is\x20on\x0a\x20p', 'EXP\x20Bar', 'Edge\x20*/\x0a\x20\x20', 'eed\x20{\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20.S', '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', '\x20seconds', 'ove\x20ads\x20th', 'Render\x20nam', 'loop', 'ren_minima', 'olid\x20#ddd;', 'ren_names', 'classBuild', 'outerHTML', 'C;\x0a\x20\x20\x20\x20\x20\x20\x20', 'dding:\x200;\x0a', 'nerText;\x0a\x20', 'Files_', 'olor:black', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x200xCCCCFF', 'Bar/Scoreb', 'Previous', 'myWin_', 'px;\x0a\x20\x20\x20\x20\x20\x20', '0xC0C0C0', '\x20\x20\x20\x20\x20\x20colo', '\x20\x20.hidden\x20', 'regen_', '\x20\x20\x20\x20\x20\x20\x20\x20ov', 'AutoUpgrad', 'tton]:hove', 'round:\x20#EC', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#', 'children', 'event\x20doub', '\x20\x20\x20\x20\x20.bspe', '\x20darker\x20sh', 'ext\x20menu', 'getElement', 'c8c', 'ElementByI', '\x20\x20\x20\x20\x20\x20font', ':\x20none;\x0a\x20\x20', 'Cache\x20grid', 'play', '\x20\x20\x20\x20\x20\x20\x20\x20\x20a', 'prev', '-3.7.1.js', 'color', 'Maze\x20Walls', 'server\x20sta', 'button,\x0a\x20\x20', 'ements', 'function', 'er-width:\x20', 'toggle', 'p_border_c', 's/bootstra', '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20', 'ayi8LEQwp4', ':hover:not', 'der:\x201px\x20s', 'ementById(', 'body', 'gaston/Hos', '0x89FF69', 'captcha', 'ng:\x2012px\x202', 'https://ma', 'loadend', '\x20\x20\x20\x20\x20font-', 'i\x20=\x20ul.get', 'audio', 'element', 'Arena\x20Clos', 'ss\x20upgrade', 'ElementsBy', 'style', 'ren_stroke', '#dropDown_', 'length', 'scrollbar-', 'e_color\x2012', 'else\x20{\x0a\x20\x20\x20', 'input,\x20fil', 'key_down', 'addEventLi', 'aElementSo', 'entside\x20pr', '\x20\x20\x20\x20\x20\x20li[i', '\x20game\x20does', 'floor', '\x0a\x20\x20\x20\x20conso', 'defineProp', 'error', '\x27search_\x27)', 'info', 'load', 'kground\x20as', 'home', '\x20white;\x0a\x20\x20', 'Songs_', 'Name:', '\x20\x20\x20\x20\x20\x20\x20#th', 'ative;\x0a\x20\x20\x20', 'ren_contex', 'Auto\x20Reloa', '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20', '0x44FFA0', 'split', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'https://co', '\x20\x20\x20\x20\x20\x20var\x20', '\x20\x20\x20\x20\x20\x20\x20.sp', 'connect', 'lay:\x20block', 'ackground', 'ercontent.', 'olor\x200x8c8', 'placeholde', 'ren_backgr', '\x20\x20\x20\x20\x20\x20\x20pos', 'age:\x20url(\x27', '\x200xFFFFFF', 'grid', 'AutoSpawn:', '#008f68', '_solid_col', 's\x20*/\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20text', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20i', 'fillRect', '\x20\x20\x20\x20audio\x20', '0xFFDE43', 'Reinitiali', '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20', 'e\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '0x00B1DE', 'Health:', '\x2063);\x0a\x20\x20\x20\x20', '\x20top:\x200;\x0a\x20', 'link', '\x20supported', '\x20\x20\x20\x20\x20\x20widt', 'hidden;\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20bac', '0xFBC477', '\x200x888888', '_bars', '\x200x777777', 'BSpeed:', 'ound', 'or\x200xFFFFF', 'lign-items', 'warn', '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20', 'charCodeAt', '\x20\x20border:\x20', 'querySelec', 'push', 'l\x20Dominato', 'type', 'menu', 'sByClassNa', '\x20\x20\x20\x20\x20color', '0px\x2012px\x204', 'myUL\x20li\x20a\x20', 'pen_', '7,\x2051,\x2099)', 'hasFocus', 'fo\x20on\x20the\x20', 'ation:\x20non', 'setAttribu', 'ren_xp_bar', 'ng.(10\x20Sec', 'r:\x20white;\x0a', '1299933LOLGyM', '*/\x0a\x20\x20\x20\x20\x20\x20\x20', 'document', 'en\x20{\x0a\x20\x20\x20\x20\x20', 'menuDesc', 'true', 'isWhole', 'Plh', 'Render\x20ach', '\x20\x20\x20left:\x201', 'e_color\x208\x20', 'join', 'ody,\x20etc.\x20', 'on:\x20fixed;', 'Render\x20UI\x20', 'stack\x20pred', 'onended', 'append', 'isNaN', 'innerHeigh', 'i.length;\x20', 'setItem', 'send', '0x00FF00', 'secure\x20tru', '0x999999', 'inside\x20the', '\x20\x20\x20\x20positi', '\x20\x20\x20\x20\x20\x20\x20bod', 'Outlines\x20(', 'ren_fps', 'ren_ui', '\x20\x20\x20width:\x20', 'cromancer)', 'Menu-', ':\x20red;\x0a\x20\x20\x20', 'map', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', 'net_predic', 'medium;\x0a\x20\x20', 'le\x20borders', 'ock;\x0a\x20\x20\x20\x20\x20', '.json', 'transition', '0x768DFC', 'volume', '38,\x20238,\x200', '.min.js', 'ren_border', 'myBar', '\x20\x20\x20\x20\x20if\x20(t', '\x22\x20button\x20i', '/jquery.mi', '3011772XUi', '\x20\x20\x20\x20\x20\x20marg', '---', 'erflow-x:\x20', 'for', '\x20\x20\x20\x20\x20\x20\x20\x20}\x20', 'unction\x20()', 'rid,\x20it\x27s\x20', 'size:\x2018px', 'height', '_div', 'Fix\x20Game', 'AutoReload', 'dding:\x2012p', 'Square', 'ent.getEle', 'PROFILES', '_color', 'duration', '0,\x200,\x200)\x0a\x20', '\x20\x20\x20\x20\x20paddi', 'stener', 'window', 'ren_raw_he', 'key_up', 'index', '-size:\x2016p', '14trJCuO', 'destinatio', 'Brown,\x20lik', '_fill_colo', '\x20\x20\x20\x20;\x0a\x20\x20\x20\x20', 'file', 'Use\x20canvas', 'se\x20gae\x20lag', '\x20\x20color:\x20w', '\x20238);\x0a\x20\x20\x20', ':\x20rgba(0,\x20', 'or,\x20withou', 'or:\x20rgba(2', '_color\x200xf', 'none;\x0a\x20\x20\x20\x20', 'n:\x20none;\x0a\x20', '6CF0;\x0a\x20\x20\x20\x20', 'ormerly)', 'startwin_', 'loadstart', '(a)}\x0a\x20\x20\x20\x20\x20', 'n_grid', 'func\x20must\x20', 'nd:\x20#F0D96', 'No\x20descrip', 'Screen:', '\x20Backgroun', 'oncanplayt', '0xFFE869', 'me\x20reloads', 'mapAsync', 'innerText', 'y\x20of\x20objec', 'lare.com/a', 'readAsData', '2604776rdq', 'respawn', '0x85E37D', '\x20\x20\x20\x20\x20margi', 'r\x20Ammo', '40ZrktiR', '\x20\x20\x20backgro', 'Body:', '].style.di', '\x20\x20\x20\x20\x20\x20\x20but', 'filter)\x20>\x20', 'ackground-', '0x00F46C', 'groups', '\x20\x20\x20\x20\x20\x20.men', ':\x20-1px;\x0a\x20\x20', 'ds\x20page\x20is', 'namedItem', '238,\x200.192', 'ground-col', '\x20\x20\x20\x20\x20\x20\x20\x20di', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'te\x20canvas', 'faster\x20but', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', '/*\x20Prevent', 'target', 'default', 'njs.cloudf', 'e_color\x205\x20', 'lock\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20#myInp', '\x20\x20\x20\x20\x20\x20\x20\x20.c', 'ts\x20test', 'innerWidth', 'name', 'style:\x20sol', 'ound_color', 'reload', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20.d', 'lor:\x20red\x0a\x20', 'innerHTML', 'shuffle', 'color:\x20bla', '\x20\x20\x20\x20\x20\x20\x20\x20.n', 'styles\x20for', '40,\x20108);\x0a', 'getContext', 'stat\x20pen', 'anonymous', '0xBE7FF5', 'hlc', 'TagName(\x22l', '\x20\x20\x20padding', 'ake\x20too\x20lo', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', 'Score\x20Bar', 'Barrels,\x20S', 'roke_soft_', 'i\x22);\x0a\x20\x20\x20\x20\x20', ',\x20167,\x2012)', 'alth_value', 'keys', 'be\x20propert', '\x20map\x20color', '\x20\x20\x20\x20\x20backg', 'jax/libs/j', 'isplay\x20=\x20\x22', '\x20\x20\x20for\x20(i\x20', 'e_color\x200\x20', 'Crashers', 'play\x20all', 'toArray', 'stat\x20speed', 'ion', 'tual\x20Resul', 'onsole.log', 'ts\x20max\x20rel', 't\x20upgrades', 'rrets', 'reboard\x20na', 'net_replac', 'xcdn.boots'];
    j = function() {
        return cF;
    };
    return j();
}
globalRoot[b8(0x3ab)] = af, addEventListener(b8(0x3dd) + 'ad', function() {
    var c1 = b8;
    af[c1(0x3c7)]();
}), globalRoot[b8(0x24f)] = I, globalRoot[b8(0xe8)] = H, (function() {
    let ah = '';
    ! function ai() {
        var c2 = q;
        const aj = a4[c2(0x12b)];
        aj !== ah && (K(), ah = aj), requestAnimationFrame(ai);
    }();
}()), K();
class ag {
    static get['U']() {
        var c3 = b8;
        return document['querySelec' + c3(0xee)]('d-base');
    }
    static['send'](ah) {
        var c4 = b8;
        input[c4(0x191)](ah), input[c4(0x23a)](ah);
    }
    static get['nickname']() {
        var c5 = b8;
        return get(c5(0x3d8) + c5(0x2c0))[c5(0x3da)];
    }
    static get['M']() {
        var c6 = b8;
        return c6(0x38d) == this['U'][c6(0x12b)];
    }
    static get['q']() {
        var c7 = b8;
        return c7(0x35d) == this['U']['screen'];
    }
    static get['$']() {
        var c8 = b8;
        return c8(0x19f) == this['U'][c8(0x12b)];
    }
    static get[b8(0x12b)]() {
        var c9 = b8;
        return this['U'][c9(0x12b)];
    }
    static['G'](ah) {
        let ai = () => this['screen'];
        return ai == ah || new Promise(aj => {
            let ak = setInterval(() => {
                ai() == ah && (aj(!0x0), clearInterval(ak));
            }, 0x1);
        });
    }
    static async ['H'](ah) {
        var ca = b8;
        return this['q'] && (this[ca(0x203)](0xd), await this['G'](ca(0x19f))), input[ca(0xcd)](this['nickname']), await this['G'](ca(0x38d)), !0x0;
    }
}
_Player = ag, document[b8(0x162) + 'sByClassNa' + 'me']('aa\x20left')[0x0][b8(0x364)](), document[b8(0x162) + b8(0x1e0) + 'me']('aa\x20bottom')[0x0]['remove'](), otherStuff = {
    'toggles': [{
        'name': b8(0x213) + b8(0x3c2),
        'bool': b8(0x1f2),
        'for': b8(0x2ed) + b8(0x194) + b8(0x349) + b8(0x2c1) + 't'
    }, {
        'name': 'ren_achiev' + b8(0x170),
        'bool': b8(0x1f2),
        'for': b8(0x1f5) + b8(0x375)
    }, {
        'name': 'ren_backgr' + b8(0x1d3),
        'bool': b8(0x1f2),
        'for': 'Render\x20bac' + 'kground[6]'
    }, {
        'name': 'ren_cache_' + b8(0x1b8),
        'bool': b8(0x1f2),
        'for': b8(0x167) + b8(0x37e) + b8(0x276)
    }, {
        'name': b8(0x1a5) + b8(0x363) + b8(0x2d1),
        'bool': b8(0x1f2),
        'for': b8(0x1c2) + b8(0x2dd) + 's\x20if\x20FPS\x20i' + b8(0x3c1) + '7]'
    }, {
        'name': b8(0x112) + 'collisions',
        'bool': b8(0x337),
        'for': 'Render\x20col' + 'lidable\x20de' + b8(0xd1) + ']'
    }, {
        'name': b8(0x112) + b8(0x19c),
        'bool': b8(0x337),
        'for': b8(0x3b6) + 'e\x20debug\x20in' + b8(0x1e7) + b8(0x16e) + b8(0x281)
    }, {
        'name': b8(0x20b),
        'bool': b8(0x337),
        'for': b8(0x2dc)
    }, {
        'name': b8(0x9e) + b8(0x1d0),
        'bool': b8(0x1f2),
        'for': b8(0x3aa) + b8(0x131)
    }, {
        'name': b8(0x146),
        'bool': 'true',
        'for': b8(0x142) + 'es'
    }, {
        'name': 'ren_patter' + b8(0x252),
        'bool': 'true',
        'for': b8(0x243) + '\x20createPat' + b8(0x3d9) + b8(0x229) + b8(0x277) + b8(0x3e9) + b8(0x3bb) + 'e'
    }, {
        'name': b8(0x239) + b8(0x29e) + 's',
        'bool': 'false',
        'for': b8(0x3e6) + b8(0x11a) + b8(0x3e5)
    }, {
        'name': 'ren_scoreb' + b8(0x2d3),
        'bool': b8(0x1f2),
        'for': b8(0x3e2) + 'reboard'
    }, {
        'name': 'ren_scoreb' + b8(0x34a),
        'bool': b8(0x1f2),
        'for': b8(0x3e2) + b8(0x2b1) + 'mes'
    }, {
        'name': b8(0xc2) + b8(0xa1),
        'bool': b8(0x1f2),
        'for': 'Render\x20bac' + b8(0x19e) + b8(0x128) + b8(0x248) + b8(0x38f)
    }, {
        'name': b8(0xac),
        'bool': 'true',
        'for': 'Render\x20sta' + b8(0x2af)
    }, {
        'name': b8(0x18a) + b8(0x106) + 'r',
        'bool': 'true',
        'for': b8(0x312) + b8(0x329) + b8(0x160) + 'ade\x20of\x20fil' + 'l\x20color'
    }, {
        'name': b8(0x20c),
        'bool': 'true',
        'for': b8(0x1fb) + b8(0x2bd)
    }, {
        'name': 'ren_upgrad' + 'es',
        'bool': b8(0x1f2),
        'for': b8(0x3b1) + b8(0x187) + 's'
    }, {
        'name': b8(0x2d2) + b8(0x3b7) + 'ck',
        'bool': b8(0x1f2),
        'for': b8(0x394) + 'ght\x20click\x20' + b8(0xe3) + b8(0x3d4) + b8(0x161)
    }],
    'colors': [{
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '0',
        'default': b8(0x2d9),
        'for': 'Smasher\x20an' + 'd\x20Dominato' + 'r\x20Bases'
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '1',
        'default': b8(0x206),
        'for': b8(0x29a) + b8(0x36a) + 'aunchers\x20a' + b8(0xcf) + b8(0x2b0)
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '2',
        'default': '0x00B1DE',
        'for': 'Body\x20(You)'
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '3',
        'default': b8(0x1c5),
        'for': 'Blue\x20Team'
    }, {
        'name': b8(0x2b2) + 'e_color',
        'index': '4',
        'default': b8(0x108),
        'for': 'Red\x20Team'
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '5',
        'default': b8(0x293),
        'for': 'Purple\x20Tea' + 'm'
    }, {
        'name': b8(0x2b2) + 'e_color',
        'index': '6',
        'default': b8(0x26c),
        'for': 'Green\x20Team'
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '6',
        'default': '0xD68163',
        'for': b8(0x3a5) + b8(0x2ce) + b8(0x3b8) + b8(0x23f) + b8(0xd8) + b8(0x24e)
    }, {
        'name': b8(0x2b2) + 'e_color',
        'index': '7',
        'default': b8(0x17d),
        'for': b8(0x129) + b8(0x33b) + 'n\x20Square,\x20' + b8(0x3bf) + b8(0x9a) + b8(0x30a) + ')'
    }, {
        'name': b8(0x2b2) + 'e_color',
        'index': '8',
        'default': b8(0x259),
        'for': b8(0x230)
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '9',
        'default': b8(0x3d2),
        'for': 'Triangle'
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '10',
        'default': b8(0x219),
        'for': b8(0x35c)
    }, {
        'name': 'net_replac' + b8(0x3d5),
        'index': '11',
        'default': b8(0x389),
        'for': b8(0x2a7)
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '12',
        'default': b8(0x259),
        'for': b8(0x186) + 'ers/Neutra' + b8(0x1dd) + 'rs/Defende' + b8(0x264)
    }, {
        'name': 'net_replac' + b8(0x3d5),
        'index': '13',
        'default': b8(0x1a8),
        'for': b8(0x125)
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '14',
        'default': b8(0x325),
        'for': b8(0x16d)
    }, {
        'name': 'net_replac' + b8(0x3d5),
        'index': '15',
        'default': b8(0x108),
        'for': b8(0x315) + 'A)'
    }, {
        'name': b8(0x2b2) + 'e_color',
        'index': '16',
        'default': b8(0x1ce),
        'for': b8(0x11e) + b8(0x117) + b8(0x20e)
    }, {
        'name': b8(0x2b2) + b8(0x3d5),
        'index': '17',
        'default': b8(0x154),
        'for': 'Fallen\x20Bos' + b8(0x11b)
    }, {
        'name': b8(0x1b4) + b8(0x285),
        'default': b8(0x308),
        'for': b8(0x2e1) + b8(0x310) + b8(0x1b0)
    }, {
        'name': b8(0x21d) + b8(0x233),
        'default': '0x000000',
        'for': 'The\x20area\x20o' + 'utside\x20the' + b8(0x107) + 'layed\x20on\x20t' + b8(0xb2) + b8(0x207) + b8(0x2a1) + b8(0x123) + b8(0x3cc)
    }, {
        'name': b8(0x144) + 'p_backgrou' + 'nd_color',
        'default': b8(0x308),
        'for': 'Minimap'
    }, {
        'name': b8(0x144) + b8(0x174) + 'olor',
        'default': '0x555555',
        'for': b8(0x99) + b8(0xbe)
    }, {
        'name': b8(0x9e) + b8(0x240) + 'r',
        'default': b8(0x262),
        'for': b8(0x311)
    }, {
        'name': 'ren_health' + b8(0x2c5) + 'd_color',
        'default': b8(0x2d9),
        'for': b8(0x311) + b8(0x257) + 'd'
    }, {
        'name': b8(0x1ea) + '_fill_colo' + 'r',
        'default': b8(0x1c1),
        'for': b8(0x13b)
    }, {
        'name': b8(0x132) + b8(0x333) + b8(0x39b),
        'default': b8(0x328),
        'for': b8(0x299)
    }, {
        'name': b8(0x116) + 'ckground_c' + b8(0x39b),
        'default': b8(0x330),
        'for': b8(0x3c9) + b8(0x150) + 'oard\x20Backg' + b8(0x301)
    }, {
        'name': b8(0x18a) + b8(0x1bb) + 'or',
        'default': b8(0x2d9),
        'for': b8(0x20a) + b8(0x365) + b8(0x29b) + b8(0x34d) + 'e)'
    }, {
        'name': b8(0x2b5) + b8(0x39b),
        'default': b8(0x330),
        'for': b8(0xda) + b8(0x358) + b8(0x2ac) + b8(0x2d5) + 'eeing\x20as\x20t' + b8(0x137) + b8(0xa6) + b8(0x324) + 'h\x20section)'
    }]
}, colors = {}, otherStuff['colors'][b8(0x2f9)](ah => {
    var cb = b8;
    colors[ah[cb(0x226)]] = '#' + ah[cb(0x27b)][cb(0x1a9)]('0x')[cb(0x341)]();
}), async function() {
    var cj = b8;

    function ah(as = {}) {
        var cc = q,
            at, au, av, aw, ax, ay;
        let az = as;
        at = 0x21, au = 0x0, av = [];
        for (let aA in az) {
            cc(0xde) == az[aA] && (az[aA] = '7'), Number['isNaN'](0x1 * az[aA]) ? av[cc(0x1dc)](aA) : au += 0x1 * az[aA];
        }
        aw = at - au, ax = Math['floor'](aw / av[cc(0x18c)]), av['forEach'](aB => {
            az[aB] = ax;
        }), au = 0x0;
        for (let aB in az) {
            Number[cc(0x1ff)](0x1 * az[aB]) || (au += 0x1 * az[aB]);
        }
        if (0x0 != (aw = at - au))
            for (let aC = 0x0; aC < aw; aC++) {
                for (let aD = 0x0; aD < Object[cc(0x29f)](az)[cc(0x18c)]; aD++) {
                    aw = at - au, ay = Object[cc(0x29f)](az)[aD], az[ay] < 0x7 && aw && av[cc(0x305)](ay) && (au += 0x1, az[ay] += 0x1);
                }
            }
        return Object[cc(0x29f)](az)['forEach'](aE => {
            az[aE] = 0x1 * az[aE];
        }), az;
    }

    function ai(as, at, {
        V: au,
        line: av,
        W: aw,
        Z: ax,
        X: ay
    }) {
        var cd = q,
            az, aA, aB = document[cd(0x38e) + cd(0x366)]('button');
        aB[cd(0x25c)] = as, aB[cd(0x3e4)] = at, aA = cd(0x3a2), (az = document[cd(0x38e) + 'ent'](aA))['innerText'] = au || cd(0x255) + cd(0xb1), az[cd(0xd4)] = cd(0x1f1), av && al[cd(0x1fe)](document[cd(0x38e) + cd(0x366)]('br')), al[cd(0x1fe)](aB), al['append'](az);
    }

    function aj(as, at) {
        setTimeout(function() {
            var ce = q;
            input[ce(0x191)](0x20);
        }, 0x3e8 * as), setTimeout(function() {
            var cf = q;
            input[cf(0x23a)](0x20);
        }, 0x3e8 * as + at);
    }

    function ak(as, at, {
        J: au,
        V: av,
        line: aw,
        W: ax,
        Z: ay,
        X: az
    }) {
        var cg = q,
            aA, aB, aC, aD = document[cg(0x38e) + cg(0x366)]('label');
        aD[cg(0x25c)] = as, aD[cg(0x226)] = as, (aA = document[cg(0x38e) + cg(0x366)](cg(0xed)))[cg(0x1de)] = cg(0x2de), aA[cg(0x283)] = as, aA[cg(0x3e4)] = at, aA[cg(0xb6)] = !!au, aC = cg(0x3a2), (aB = document[cg(0x38e) + cg(0x366)](aC))['innerText'] = av || cg(0x255) + cg(0xb1), aB['className'] = 'menuDesc', aw && al[cg(0x1fe)](document['createElem' + 'ent']('br')), al[cg(0x1fe)](aD), al[cg(0x1fe)](aA), al[cg(0x1fe)](aB);
    }
    var al, am, an, ao = class {
        constructor({
            type: as,
            K: at,
            name: au,
            command: av
        }) {
            var ch = q,
                aw, ax, ay;
            switch (at = L[au] || at, aw = '', as) {
                case ch(0x173):
                    aw = ch(0x2de);
                    break;
                case 'color':
                    aw = ch(0x16c);
            }
            ax = new Q(ch(0x2b8))[ch(0x134)]('for', au)[ch(0x134)](ch(0x25c), au + ':\x20'), ay = new Q(ch(0xed), {
                'type': aw,
                'id': au,
                'name': av
            })[ch(0x134)]('onchange', function(az) {
                var ci = ch,
                    aA = az[ci(0x27a)],
                    aB = 'checkbox' == aw ? aA[ci(0xb6)] : az[ci(0x27a)][ci(0x3da)];
                L[au] = {
                    'value': aB
                }, execute(av + '\x20' + aB);
            }), at && (ch(0x2de) == aw && ay[ch(0x134)](ch(0xb6), at), ay[ch(0x134)]('value', at)), this[ch(0xed)] = ay, this[ch(0x2b8)] = ax;
        }
    };
    const ap = await fetch('https://ra' + cj(0x36e) + cj(0x1b1) + 'com/naquan' + cj(0x17c) + cj(0x115) + cj(0x392) + cj(0x217))[cj(0x122)](as => as['json']());
    Object[cj(0x29f)](ap)[cj(0x211)](as => [...new Set(Object[cj(0x29f)](ap[as]['Y'])['map'](at => ap[as]['Y'][at]['ee']))]), !(function() {
        var ck = cj,
            as, [at, au] = [ck(0x211), ck(0x2e3)];
        for (let av in ap) {
            as = ap[av];
            for (let aw in as) {
                ck(0x350) == typeof ap[av][aw] && (ap[av][aw] = ap[av][aw][at](ax => (ax[au] = ah(ax[au]), ax)));
            }
        }
    }());
    let aq = af;
    al = aq[cj(0x238)]['document']['getElement' + cj(0x33a)](cj(0x1df)), (function() {
        var cl = cj,
            as, at;
        Array[cl(0xff)][cl(0x3a1)] = function(au) {
            var cm = cl;
            const av = [cm(0x18c)],
                aw = this;
            for (let ax = 0x0; ax < this[av[0x0]]; ax++) {
                aw[ax] = au(this[ax], ax);
            }
            return aw;
        }, addEventListener(cl(0x3dd) + 'ad', function() {
            var cn = cl;
            GM_setValue(cn(0xd6), L);
        }), as = new Q(cl(0x3e3), {
            'id': cl(0x317)
        })[cl(0x1fe)](new Q('h1')['set'](cl(0x25c), cl(0x3f0)))['append'](Q['N']), otherStuff[cl(0x317)][cl(0x211)](au => new ao({
            'name': au[cl(0x226)],
            'type': 'toggle',
            'K': cl(0x1f2) == au['ne'],
            'command': au[cl(0x283)] + '\x20'
        }))[cl(0x2f9)](au => {
            var co = cl;
            as[co(0x1fe)](au['label'])[co(0x1fe)](au[co(0xed)])[co(0x1fe)](Q['N']);
        }), at = new Q(cl(0x3e3), {
            'id': cl(0x367)
        })[cl(0x1fe)](new Q('h1')[cl(0x134)]('innerText', 'Styles'))[cl(0x1fe)](Q['N']), otherStuff[cl(0x367)][cl(0x211)](au => new ao({
            'name': au[cl(0x226)],
            'type': 'color',
            'K': '#' + (au['m'] || au[cl(0x27b)])['match'](/0x(?<o>.+)/i)[cl(0x26d)]['te'],
            'command': '' + au[cl(0x283)] + (au[cl(0x23b)] ? '\x20' + au['index'] : '\x20')
        }))['forEach'](au => {
            var cp = cl;
            at[cp(0x1fe)](au['label'])['append'](au[cp(0xed)])['append'](Q['N']);
        }), as['A'](al), at['A'](al);
    }()), ai(cj(0x22d), function() {
        var cq = cj,
            as = function({
                oe: at,
                name: au
            }) {
                return {
                    'oe': at,
                    'name': au
                };
            }(localStorage);
        for (let at in localStorage) {
            localStorage[cq(0x2cf)](at);
        }
        localStorage[cq(0xb3)]();
        for (let au in as) {
            localStorage[cq(0x202)](au, as[au]);
        }
        location['href'] = location['href'];
    }, {
        'V': 'Only\x20use\x20i' + 'f\x20your\x20(ga' + cj(0x25a) + '\x20without\x20f' + 'inish\x20load' + 'ing)\x20or\x20if' + cj(0x196) + cj(0x12d)
    }), ai(cj(0x346), G, {
        'line': !0x0,
        'V': 'Use\x20to\x20rem' + cj(0x141) + cj(0x37c) + cj(0x244)
    }), ai('Stack', function() {
        aj(0x0, 0x64), aj(0.75, 0xc8), aj(1.5, 0x2ee), setTimeout(function() {
            var cr = q;
            input[cr(0x191)](0x45);
        }, 0x7d0);
    }, {
        'line': !0x0,
        'V': cj(0x1fc) + cj(0xc3) + cj(0x2ae) + cj(0x3d6) + 'ed'
    }), ak(cj(0x22e), function() {
        var cs = cj;
        a2[cs(0x173)](), J(cs(0x22e) + 's:' + a2[cs(0x118)]);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cj(0x1a6) + cj(0x270) + cj(0x3cf) + cj(0x297) + cj(0x1eb) + cj(0x2fa)
    }), ak('AutoUpgrad' + 'e', function() {
        var ct = cj;
        a1[ct(0x173)](), J(ct(0x159) + 'e:' + a1['status']);
    }, {
        'J': !0x0,
        'line': !0x0,
        'V': cj(0x159) + 'e\x20you\x20stat' + cj(0xce) + cj(0x382) + cj(0x2da)
    }), ak(cj(0x109), function() {
        var cu = cj;
        a3[cu(0x173)](), J(cu(0x1b9) + a3['status']);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cj(0xc0) + cj(0x261)
    }), setInterval(() => {
        var cv = cj;
        a2[cv(0x118)] && [cv(0x32b), cv(0x17e)][cv(0x305)](ag[cv(0x12b)]) && (alert(cv(0xfb) + cv(0x13a) + 'age\x20will\x20r' + cv(0x398) + cv(0x140)), setTimeout(() => {
            var cw = cv;
            location[cw(0x286)];
        }, 0x1388));
    }, 0x2710), await ag['G']('home');
    const ar = new Object();
    for (let as in ap) {
        try {
            ap[as]['Y'][cj(0x2f9)](at => {
                var cx = cj,
                    au = at['ee'];
                const {
                    name: av,
                    V: aw,
                    re: ax
                } = at;
                ar[au] || (ar[au] = []), ar[au][cx(0x1dc)]({
                    'name': av,
                    'V': aw,
                    're': ax
                });
            });
        } catch (at) {}
    }
    return am = window[cj(0x152)][cj(0x1ef)]['getElement' + 'ById'](cj(0x96)), (function({
        ae: au,
        ie: av = function() {}
    }) {
        var cy = cj;
        if (!av) throw cy(0x253) + cy(0x2a0) + cy(0x25d) + 't';
        for (let aw in au || this) {
            av((au || this)[aw], aw);
        }
    }({
        'ae': ar,
        'ie': function(au, av) {
            var cA = cj,
                aw, ax, ay, az, aA;
            try {
                function aB(aD) {
                    var cz = q;
                    return document[cz(0x38e) + 'ent'](aD);
                }
                let aC = aq[cA(0x238)]['se'];
                (aw = aB(cA(0x3a2)))['id'] = cA(0x390) + av, aw['className'] = cA(0x147), aw[cA(0x25c)] = av, ax = 'dropDown_' + av['split']('\x20')[cA(0x1f8)]('_') + '_div', aw[cA(0x3e4)] = function() {
                    var cB = cA;
                    aq[cB(0x238)]['se'](cB(0x18b) + av[cB(0x1a9)]('\x20')[cB(0x1f8)]('_') + cB(0x22c))[cB(0x173)](0x7d0, 'swing');
                }, (ay = aB('div'))['id'] = ax, au[cA(0x2f9)](aD => {
                    var cC = cA,
                        aE, aF, aG, {
                            name: aH,
                            re: aI,
                            V: aJ
                        } = aD;
                    aE = aB('div'), (aF = aB(cC(0xed)))[cC(0x1de)] = cC(0x35e), aF[cC(0x3da)] = cC(0x139) + 'ld', (aG = aB(cC(0x3a2)))[cC(0x25c)] = cC(0x1a2) + aH + cC(0x130) + aJ, aE[cC(0x1fe)](aF), aE[cC(0x1fe)](aB('br')), aD['ee'] = av, aF[cC(0x3e4)] = function() {
                        ! function(aK) {
                            var cD = q,
                                aL, aM = new O();
                            aM['h'](aK['re']), aK['ee'], aM['v'], aK[cD(0x283)], Object[cD(0x29f)](aK['re'])[cD(0x211)](aN => aK['re'][aN])[cD(0x1f8)]('\x20/\x20'), aK['V'], upgrade = window[cD(0x114)] = aM['v'], _upgrade = aM['v'];
                            for (let aN in aK['re']) {
                                try {
                                    aL = aK['re'][aN] / 0x7, aL *= 0x64, aq[cD(0x1ef)][cD(0x162) + cD(0x1e0) + 'me'](aN + '_')[0x0]['innerText'] = aK['re'][aN], aq[cD(0x1ef)][cD(0x162) + cD(0x1e0) + 'me'](aN)[0x0][cD(0x189)]['width'] = aL + '%';
                                } catch (aO) {
                                    J(cD(0xaa), aO[cD(0x2d0)]);
                                }
                            }
                        }(aD);
                    }, aE[cC(0x1fe)](aG), ay[cC(0x1fe)](aE), ay[cC(0x1fe)](aB('br'));
                }), az = aB('li'), (aA = aB(cA(0x3e3)))[cA(0x1fe)](aw), az[cA(0x1fe)](aA), az[cA(0x1fe)](ay), am[cA(0x1fe)](az), aC(cA(0x18b) + av[cA(0x1a9)]('\x20')[cA(0x1f8)]('_') + cA(0x22c))[cA(0x173)]();
            } catch (aD) {
                J('Warning', aD[cA(0x2d0)]);
            }
        }
    }), set_convar(cj(0x9e) + '_bars', !0x0), set_convar(cj(0x239) + cj(0x29e) + 's', !0x0), set_convar('ren_stroke' + cj(0x106) + 'r', !0x1), set_convar(cj(0xc2) + 'background', !0x1), execute('net_replac' + cj(0x2a6) + cj(0x330)), execute(cj(0xe6) + cj(0x205) + 'e'), execute(cj(0x2b2) + cj(0x2b6) + cj(0x206)), execute('net_replac' + cj(0x30b) + cj(0x371)), execute(cj(0x2b2) + 'e_color\x203\x20' + cj(0xe5)), execute(cj(0x2b2) + 'e_color\x204\x20' + '0xFF0000'), execute('net_replac' + cj(0x27d) + '0x990099'), execute(cj(0x2b2) + cj(0x3ef) + cj(0x204)), execute(cj(0x2b2) + cj(0x347) + cj(0x3e7)), execute('net_replac' + cj(0x1f7) + cj(0x2bc)), execute(cj(0x2b2) + cj(0x120) + cj(0xfc)), execute('net_replac' + cj(0x3d7) + cj(0x14f)), execute(cj(0x2b2) + 'e_color\x2011' + cj(0x3f2)), execute(cj(0x2b2) + cj(0x18e) + '\x200xFFFF00'), execute(cj(0x2b2) + cj(0xfd) + cj(0x1b7)), execute('net_replac' + cj(0x133) + cj(0x1cf)), execute(cj(0x2b2) + cj(0x300) + '\x200xBBBB00'), execute(cj(0x2b2) + 'e_color\x2017' + cj(0x1d1)), execute('ren_stroke' + '_solid_col' + 'or\x200xFFFFF' + 'F'), execute(cj(0x18a) + cj(0x106) + cj(0x332) + cj(0xa3)), execute(cj(0x9e) + cj(0x2c5) + cj(0x3ac) + cj(0x103)), execute(cj(0x144) + 'p_backgrou' + cj(0x313) + cj(0xcb)), execute(cj(0x1b4) + cj(0x285) + cj(0x320)), execute(cj(0x21d) + cj(0x24a) + 'fffff'), execute(cj(0x116) + cj(0xe1) + cj(0x1b2) + cj(0x163)), execute(cj(0x2b2) + 'e_color\x2014' + '\x200x595959'), execute(cj(0x18a) + cj(0x1bb) + cj(0x1d4) + 'F'), execute(cj(0x2b2) + 'e_color\x2015' + cj(0x2d6)), M['update'] = async function(au) {
        var cE = cj,
            av, aw;
        if ('game' == au && a1[cE(0x118)]) {
            if (an || !upgrade || !upgrade[cE(0x18c)]) return;
            an = !0x0, J(cE(0x2ca), cE(0x159) + cE(0x2fc)), input['key_up'](0x55), av = document[cE(0x1e6)](), await z(0x64), input[cE(0x191)](0x55), aw = _upgrade['split']('')[cE(0x211)](ax => ax[cE(0x1d9)](0x0));
            for (let ax in aw) {
                av != document[cE(0x1e6)]() && input[cE(0x191)](0x55);
                let ay = aw[ax];
                input[cE(0x191)](ay), input['key_up'](ay), await z(0x64), av = document[cE(0x1e6)]();
            }
            input['key_up'](0x55), an = !0x1;
        }
        'stats' == au && a3['status'] && (J(cE(0x3a4) + 'us', cE(0x9c) + 'nto\x20game'), await z(0x1388), await ag['H']());
    }, 'EZ');
}()[b8(0x122)](console[b8(0xea)], console[b8(0x1d6)]), window['s'] = a4;