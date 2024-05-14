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
function q(a, b) {
    var c = j();
    return q = function(d, e) {
        d = d - 0x114;
        var f = c[d];
        return f;
    }, q(a, b);
}
var b6 = q;
(function(ah, ai) {
    var b2 = q,
        aj = ah();
    while (!![]) {
        try {
            var ak = parseInt(b2(0x3aa)) / 0x1 + -parseInt(b2(0x3a4)) / 0x2 * (parseInt(b2(0x217)) / 0x3) + parseInt(b2(0x124)) / 0x4 * (-parseInt(b2(0x1ff)) / 0x5) + parseInt(b2(0x19a)) / 0x6 + -parseInt(b2(0x401)) / 0x7 * (-parseInt(b2(0x3eb)) / 0x8) + parseInt(b2(0x250)) / 0x9 + parseInt(b2(0x315)) / 0xa;
            if (ak === ai) break;
            else aj['push'](aj['shift']());
        } catch (al) {
            aj['push'](aj['shift']());
        }
    }
}(j, 0xac68d));

function z(ah) {
    return new Promise(ai => setTimeout(ai, ah));
}

function G() {
    var b3 = q;
    return [...document['getElement' + b3(0x28b)](b3(0x378))][b3(0x39e)](ah => ah[b3(0x1cd)]());
}

function H(ah = this['t']) {
    return !!ah && !ah['closed'];
}

function I(ah, ai = null, aj, ak) {
    var b4 = q,
        al;
    null == ai && (ai = ah);
    try {
        aj && window[ah][b4(0x187)]();
    } catch (am) {
        window[ah] = null;
    }
    try {
        H(window[ah]) ? (globalRoot[ai] = open('', b4(0x184), 'width=256,' + b4(0x210)), globalRoot[ai][b4(0x114)]['document'][b4(0x2e5)]['innerHTML'] = '', globalRoot[ai][b4(0x114)][b4(0x2c8)][b4(0x319)][b4(0x16f)] = '') : (window[ah] = al = open(ak, b4(0x184), b4(0x1db) + b4(0x210)), al['document'][b4(0x1b3)](ae[b4(0x41c)]['outerHTML']));
    } catch (an) {}
    return globalRoot[ai] = globalRoot[ah], al;
}

function J(ah, ai) {
    new CustomLog(ah)['log'](ai);
}

function K() {
    var b5 = q;
    J(b5(0x137), a4['screen']), M['update'] && M[b5(0x435)](a4['screen']);
}
const L = GM_getValue(b6(0x1d9)) || {},
    M = {
        'update': function(ah) {}
    };
!(function() {
    Object['assign'](this || arguments[0x0], {
        'o': class {
            constructor(ah) {
                var b7 = q;
                this[b7(0x203)] = {
                    'body': ah || b7(0x15e),
                    'color': b7(0x22b),
                    'size': '1rem'
                }, this[b7(0x2e5)] = {
                    'color': b7(0x13a),
                    'size': '1rem'
                };
            }['i'](ah) {
                var b8 = q;
                this[b8(0x203)][b8(0x2e5)] = ah;
            }['l']({
                color: ah,
                size: ai
            }) {
                var b9 = q;
                ah !== undefined && (this['title'][b9(0x1b6)] = ah), ai !== undefined && (this[b9(0x203)]['size'] = ai);
            }['u']({
                color: ah,
                size: ai
            }) {
                var ba = q;
                ah !== undefined && (this[ba(0x2e5)]['color'] = ah), ai !== undefined && (this['body']['size'] = ai);
            }['log'](ah = '') {}
        }
    });
}(window[b6(0x35d)] || window)), set_convar = window[b6(0x374)] = function(ah, ai) {
    var bb = b6;
    input[bb(0x374)](ah, ai);
}, execute = window['execute'] = function(ah) {
    var bc = b6,
        ai = (ah['match'](/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i) || {
            'groups': {}
        })[bc(0x1e8)],
        aj = (ah[bc(0x44b)]('\x20'), function(ak) {
            var bd = bc;
            const al = ak[bd(0x3db)],
                am = ak[bd(0x125)];
            for (let an = 0x0; an < otherStuff[bd(0x32c)][bd(0x35a)]; an++) {
                let {
                    index: ao,
                    name: ap
                } = otherStuff[bd(0x32c)][an];
                if (ao == al && am == ap) return an;
            }
        }(ai));
    null != aj && (colors[otherStuff['colors'][aj]['for']] = '#' + ai[bc(0x2c1)]['match'](/(0x|#)(?<hex>[\w]+)/i)[bc(0x1e8)]['p'], otherStuff['colors'][aj][bc(0x1a6)] = otherStuff[bc(0x32c)][aj]['m'] || otherStuff[bc(0x32c)][aj][bc(0x347)], otherStuff['colors'][aj]['m'] = ai[bc(0x2c1)]['toUpperCas' + 'e'](), otherStuff[bc(0x32c)][aj]), input['execute'](ah);
};
class O {
    ['h'](ah) {
        var be = b6,
            ai, aj, ak, al, am, an, ao, ap, aq;
        this['_'] = ah, ai = 0x0, this['v'] = '', aj = ah['F'], ak = ah['k'], al = ah[be(0x2e5)], am = ah['S'], an = ah['B'], ao = ah['T'], ap = ah['D'], aq = ah['speed'];
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
        ah && this['toggle']();
    }#
    e = !0x1;
    ['toggle']() {
        this.#e = !this.#e;
    }
    get[b6(0x1de)]() {
        return this.#e;
    }
    set['status'](ah) {
        this.#e = !!ah;
    }
}
class Q {
    static get['N']() {
        return new Q('br');
    }
    constructor(ah, ai) {
        var bf = b6;
        this[bf(0x41c)] = ah['constructo' + 'r'][bf(0x125)]['includes'](bf(0x294)) && ah || (function() {
            var bg = bf;
            for (let aj in arguments[0x1]) {
                arguments[0x0][bg(0x438) + 'te'](aj, arguments[0x1][aj]);
            }
            return arguments[0x0];
        }(document[bf(0x41e) + bf(0x45c)](ah), ai));
    }[b6(0x211)](ah) {
        var bh = b6;
        for (let ai in ah) {
            this[bh(0x41c)]['style'][ai] = ah[ai];
        }
        return this;
    }[b6(0x381)](ah, ...ai) {
        var bi = b6;
        this[bi(0x41c)]['append'](ah[bi(0x41c)] || ah);
        for (let aj = 0x0; aj < ai[bi(0x35a)]; aj++) {
            let ak = ai[aj];
            this[bi(0x41c)]['append'](ak[bi(0x41c)] || ak);
        }
        return this;
    }['A'](ah) {
        var bj = b6;
        return (ah['element'] || bj(0x216) == typeof ah ? document[bj(0x2c7) + bj(0x265)](ah) : ah)[bj(0x381)](this[bj(0x41c)]), this;
    }['on'](ah, ai) {
        var bk = b6;
        return this[bk(0x41c)]['on' + ah] = ai, this;
    }['set'](ah, ai) {
        var bl = b6;
        return this[bl(0x41c)][ah] = ai, this;
    }[b6(0x1cd)]() {
        var bm = b6;
        return this[bm(0x41c)]['remove'](), this;
    }[b6(0x226)]() {
        var bn = b6;
        return this[bn(0x41c)][arguments[0x0]];
    }
    get['children']() {
        var bp = b6;
        return new class {
            constructor(ah) {
                var bo = q;
                for (var ai = 0x0; ai < ah[bo(0x35a)]; ai += 0x1) {
                    this[ai] = ah[ai];
                }
                Object[bo(0x379) + bo(0x189)](this, 'length', {
                    'get': function() {
                        return ah['length'];
                    }
                }), Object[bo(0x163)](this);
            }[bp(0x1b5)](ah) {
                return null != this[ah] ? this[ah] : null;
            }[bp(0x40f)](ah) {
                var bq = bp;
                for (var ai = 0x0; ai < this[bq(0x35a)]; ai += 0x1) {
                    if (this[ai]['id'] === ah || this[ai][bq(0x125)] === ah) return this[ai];
                }
                return null;
            }
            get['toArray']() {
                return [...this];
            }
        }([...this['element']['children']]);
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
    localStorage['setItem'](ah, ai);
}, function(ah) {
    var br = b6;
    return localStorage[br(0x225)](ah);
}, function(ah) {
    var bs = b6;
    let ai = {};
    return ah[bs(0x39e)](function(aj) {
        ai[aj] || (ai[aj] = !0x0);
    }), Object[bs(0x422)](ai);
}], a1 = new P(0x1), a2 = new P(), a3 = new P(), a4 = document[b6(0x2c7) + b6(0x265)](b6(0x1b4)), a5 = new Q('link')[b6(0x2b5)](b6(0x2f8), b6(0x21d))[b6(0x2b5)](b6(0x152), 'https://ma' + 'xcdn.boots' + 'trapcdn.co' + b6(0x444) + 'p/3.3.7/cs' + b6(0x335) + b6(0x2b0)), a6 = new Q(b6(0x16c))[b6(0x2b5)](b6(0x2f8), 'stylesheet')[b6(0x2b5)]('href', b6(0x2c3) + 'njs.cloudf' + b6(0x232) + b6(0x1f8) + b6(0x3da) + b6(0x41f) + b6(0x2fb)), a7 = new Q(b6(0x2db), {
    'integrity': b6(0x42e) + b6(0x361) + b6(0x3c7) + b6(0x17a) + b6(0x2d4) + '=',
    'crossorigin': b6(0x390)
})[b6(0x2b5)](b6(0x199), b6(0x2c4) + b6(0x384) + 'com/jquery' + b6(0x3af)), a8 = new Q(b6(0x2db))[b6(0x2b5)](b6(0x199), b6(0x2c4) + b6(0x384) + b6(0x3f5) + b6(0x2ff) + b6(0x399)), a9 = new Q(b6(0x2db))[b6(0x2b5)](b6(0x199), 'https://ma' + b6(0x34f) + b6(0x2ac) + b6(0x444) + b6(0x14f) + b6(0x332) + '.min.js'), aa = new Q('script')['set'](b6(0x199), b6(0x29b) + b6(0x411) + b6(0x283) + b6(0x34d) + b6(0x408) + '/jquery.mi' + b6(0x394)), ab = new Q('style')[b6(0x2b5)]('innerHTML', b6(0x21a) + b6(0x42f) + b6(0x391) + b6(0x2f3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x2de) + b6(0x3b5) + 'transition' + b6(0x3c5) + b6(0x367) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.' + b6(0x121) + b6(0x402) + b6(0x1fd) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + b6(0x3a6) + 'h:\x2050%;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + b6(0x2ba) + b6(0x12e) + b6(0x281) + b6(0x409) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x37e) + b6(0x2b8) + b6(0x392) + b6(0x402) + b6(0x356) + 'Edge\x20*/\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x333) + 'width:\x20non' + b6(0x140) + '\x20\x20\x20\x20\x20/*\x20Fi' + b6(0x303) + b6(0x402) + b6(0x27e) + b6(0x418) + b6(0x44f) + b6(0x2d7) + b6(0x2ab) + b6(0x3c9) + b6(0x117) + b6(0x3c2) + '\x20\x20\x20\x20\x20\x20\x20img' + b6(0x164) + b6(0x264) + b6(0x2ec) + b6(0x29e) + b6(0x34b) + b6(0x38a) + 'lid\x20red;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20border-ra' + b6(0x40c) + b6(0x1b7) + b6(0x36c) + b6(0x1cf) + b6(0x19c) + b6(0x34b) + 'er-width:\x20' + b6(0x246) + b6(0x3c2) + '\x20\x20\x20\x20\x20\x20\x20but' + b6(0x44e) + b6(0x122) + b6(0x243) + b6(0x118) + b6(0x1be) + b6(0x3f8) + 'input\x20{\x0a\x20\x20' + b6(0x402) + b6(0x1d4) + 'idth:\x201px;' + b6(0x204) + b6(0x3cf) + b6(0x318) + 'hed\x20rgb(87' + b6(0x3e4) + b6(0x1eb) + b6(0x257) + b6(0x136) + b6(0x402) + b6(0x2eb) + ':\x20rgba(0,\x20' + b6(0x14d) + b6(0x310) + b6(0x24e) + b6(0x161) + b6(0x122) + b6(0x286) + b6(0x310) + b6(0x22d) + b6(0x195) + b6(0x402) + b6(0x443) + b6(0x368) + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20.server_n' + b6(0x261) + (b6(0x122) + b6(0x279) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + 'body::-web' + b6(0x227) + b6(0x2e7) + '\x20\x20\x20\x20\x20\x20\x20\x20di' + b6(0x369) + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + b6(0x1e0) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x366) + b6(0x2a2) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + b6(0x3f3) + b6(0x321) + b6(0x402) + b6(0x393) + b6(0x1c8) + b6(0x316) + b6(0x3e1) + b6(0x343) + b6(0x3b1) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + b6(0x21f) + b6(0x3ef) + b6(0x1d6) + b6(0x304) + '\x20444px;\x0a\x20\x20' + b6(0x3c2) + b6(0x131) + b6(0x134) + b6(0x402) + b6(0x1c0) + b6(0x3d5) + b6(0x31b) + b6(0x256) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x2d5) + b6(0x1f5) + b6(0x2e2) + 'dex:\x20100;\x0a' + b6(0x367) + b6(0x1b2) + b6(0x1ce) + b6(0x402) + b6(0x21e) + b6(0x1dc) + b6(0x402) + b6(0x28d) + b6(0x402) + b6(0x436) + b6(0x402) + b6(0x3f4) + b6(0x3fd) + b6(0x391) + b6(0x2f3) + b6(0x402) + b6(0x3ba) + b6(0x190) + b6(0x3c0) + b6(0x348) + b6(0x19e) + b6(0x3d8) + b6(0x17b) + b6(0x1b7) + b6(0x27d) + b6(0x12d) + '\x20\x20\x20\x20\x20\x20\x20bot' + b6(0x25f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x44a) + 'calc(100%\x20' + b6(0x373) + b6(0x310) + b6(0x12c) + b6(0x305) + b6(0x402) + b6(0x3c3) + '%;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + b6(0x431) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + b6(0x26b) + b6(0x207) + b6(0x367) + b6(0x276) + 'nput[type=' + b6(0x119) + b6(0x402) + b6(0x3d1) + b6(0x15c) + 'rgb(255,\x202' + b6(0x43a) + b6(0x402) + b6(0x11b) + b6(0x32e) + b6(0x1b1)) + (b6(0x1ec) + b6(0x402) + b6(0x459) + 'g:\x20border-' + b6(0x223) + b6(0x3c0) + '\x20\x20\x20\x20#myInp' + b6(0x143) + b6(0x3bb) + b6(0x2f0) + 'age:\x20url(\x27' + '/css/searc' + b6(0x248) + b6(0x461) + b6(0x116) + b6(0x1ba) + b6(0x421) + '\x2012px;\x0a\x20\x20\x20' + b6(0x2ca) + b6(0x239) + b6(0x1aa) + b6(0x33a) + b6(0x402) + b6(0x3f4) + b6(0x3fd) + '\x20\x20\x20\x20\x20\x20font' + b6(0x11d) + b6(0x188) + '\x20\x20\x20\x20\x20paddi' + 'ng:\x2012px\x202' + b6(0x2a0) + b6(0x12d) + '\x20\x20\x20\x20\x20\x20\x20bor' + b6(0x235) + b6(0x3c1) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x266) + b6(0x45e) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + b6(0x2ed) + '\x20\x20\x20#myUL\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x43e) + b6(0x26e) + b6(0x157) + b6(0x26f) + b6(0x1d7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x2a8) + b6(0x437) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + b6(0x197) + b6(0x25b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + b6(0x3bc) + '\x20solid\x20#dd' + b6(0x3a3) + '\x20\x20\x20\x20\x20margi' + b6(0x2d3) + b6(0x188) + b6(0x3f0) + b6(0x181) + b6(0x3d0) + b6(0x3d6) + b6(0x424) + b6(0x162) + b6(0x3fb) + b6(0x337) + '38,\x200.192)' + b6(0x1eb) + b6(0x3e6) + '\x20\x20\x20\x20\x20\x20\x20\x20pa' + b6(0x449) + b6(0x188) + '\x20\x20\x20\x20\x20text-' + b6(0x322) + ':\x20none;\x0a\x20\x20' + b6(0x402) + b6(0x451) + b6(0x205) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + b6(0x132) + 'k;\x0a\x20\x20\x20\x20\x20\x20\x20' + b6(0x341) + b6(0x29a) + b6(0x367) + b6(0x1b2) + b6(0x139) + b6(0x19e) + b6(0x2a4) + ':\x201px\x20soli' + b6(0x295) + b6(0x402) + 'margin-top' + ':\x20-1px;\x0a\x20\x20' + b6(0x402) + b6(0x3ad) + b6(0x35e) + 'rders\x20*/\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (b6(0x27e) + b6(0x418) + b6(0x2b2) + '38,\x20238,\x200' + b6(0x201) + b6(0x3a7) + b6(0x1b7) + b6(0x454) + b6(0x1a2) + b6(0x402) + b6(0x434) + b6(0x159) + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + b6(0x1f0) + 'size:\x2018px' + b6(0x1eb) + '\x20\x20\x20\x20color:' + '\x20black;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'display:\x20b' + b6(0x427) + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20#myUL\x20' + b6(0x34e) + b6(0x402) + b6(0x251) + 'ointer;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x238) + b6(0x357) + 'dd;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20marg' + b6(0x128) + b6(0x1f5) + b6(0x413) + b6(0x179) + b6(0x1e3) + 's\x20*/\x0a\x20\x20\x20\x20\x20' + b6(0x3bb) + 'kground-co' + b6(0x406) + '238,\x20238,\x20' + b6(0x2be) + b6(0x461) + b6(0x149) + b6(0x20a) + b6(0x25d) + b6(0x1f5) + '\x20\x20\x20\x20\x20\x20text' + '-decoratio' + b6(0x3f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20font-size' + b6(0x31e) + b6(0x402) + b6(0x13c) + b6(0x2bd) + b6(0x274) + b6(0x469) + b6(0x1be) + b6(0x3f8) + b6(0x233) + b6(0x2c9) + b6(0x13b) + b6(0x19e) + b6(0x299) + b6(0x383) + b6(0x263) + b6(0x3e8) + b6(0x1eb) + b6(0x468) + b6(0x138) + b6(0x148) + 'ut[type=bu' + 'tton]:hove' + b6(0x1ac) + b6(0x41d) + b6(0x2ca) + b6(0x239) + b6(0x240) + b6(0x405) + '\x20238);\x0a\x20\x20\x20' + b6(0x2a7) + b6(0x3e0) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a')), ac = new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x28c) + 'ntainer')[b6(0x381)](new Q('a')[b6(0x2b5)](b6(0x196), '\x20'), new Q('h2')['set'](b6(0x196), b6(0x3b3) + b6(0x133)), new Q(b6(0x407))[b6(0x2b5)](b6(0x11c), 'file')['set'](b6(0x270), '')[b6(0x2b5)]('id', b6(0x400)), new Q('br'), new Q('br'), new Q(b6(0x175))['set']('id', b6(0x42d))['append'](new Q(b6(0x175))[b6(0x2b5)]('id', b6(0x2b6))[b6(0x381)](new Q(b6(0x28f))[b6(0x2b5)]('id', b6(0x26c)))), new Q('br'), new Q(b6(0x175))[b6(0x2b5)]('id', b6(0x42a)), new Q(b6(0x175))[b6(0x2b5)]('id', b6(0x442)), new Q(b6(0x175))[b6(0x2b5)]('id', b6(0x25c)), new Q(b6(0x22a))[b6(0x2b5)]('id', b6(0x22a)), new Q('hr'), new Q('div')[b6(0x2b5)](b6(0x24b), b6(0x147))['set']('id', 'menu')[b6(0x381)](new Q('h2')[b6(0x2b5)]('innerText', 'Menu-')), new Q('br'), new Q('hr'), new Q('br'), new Q(b6(0x175))[b6(0x2b5)]('className', 'menu')['set']('id', b6(0x18b))[b6(0x381)](new Q(b6(0x211))['set']('innerHTML', b6(0x1b7) + '\x20\x20\x20/*\x20CSS\x20' + b6(0x178) + '\x20.regen,\x20.' + b6(0x463) + b6(0x448) + b6(0x204) + b6(0x160) + b6(0x2f5) + b6(0x402) + b6(0x27e) + 'd:\x20#EEB690' + b6(0x1eb) + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + b6(0x277) + 'health\x20{\x0a\x20' + b6(0x402) + b6(0x116) + b6(0x2dc) + b6(0x45f) + b6(0x367) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x43b) + b6(0x1b7) + b6(0x3bb) + b6(0x2bc) + '9A6CF0;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x293) + b6(0x23f) + b6(0x402) + b6(0x27e) + b6(0x30b) + b6(0x1eb) + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + b6(0x277) + b6(0x3ee) + b6(0x402) + b6(0x1d3) + b6(0x3bf) + 'C;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + b6(0x402) + b6(0x26a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x14a) + 'und:\x20#F06C' + b6(0x2b7) + b6(0x2e9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x377) + b6(0x19e) + b6(0x403) + 'ckground:\x20' + 'rgb(152,\x202' + b6(0x1b0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x460) + '\x20\x20\x20\x20\x20\x20\x20.sp' + b6(0x156) + b6(0x402) + b6(0x1d3) + 'nd:\x20#6CF0E' + b6(0x222) + b6(0x35c) + '\x20\x20\x20\x20\x20'), new Q('h2')['set']('innerText', b6(0x30f)), new Q(b6(0x175))[b6(0x2b5)]('id', b6(0x39c))[b6(0x381)](new Q(b6(0x175))[b6(0x381)](new Q(b6(0x28f))[b6(0x2b5)]('innerText', b6(0x1dd)), new Q(b6(0x28f))['set'](b6(0x24b), b6(0x324)))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), 'stats')[b6(0x381)](new Q('div')[b6(0x2b5)](b6(0x24b), b6(0x312)))), new Q(b6(0x175))[b6(0x381)](new Q('span')['set'](b6(0x196), b6(0x314)), new Q(b6(0x28f))['set']('className', b6(0x180)))[b6(0x381)](new Q('div')[b6(0x2b5)]('className', b6(0x2fd))[b6(0x381)](new Q('div')['set']('className', 'stat\x20healt' + 'h'))), new Q('div')[b6(0x381)](new Q(b6(0x28f))[b6(0x2b5)]('innerText', b6(0x212)), new Q('span')[b6(0x2b5)]('className', b6(0x23e)))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x2fd))[b6(0x381)](new Q('div')[b6(0x2b5)](b6(0x24b), b6(0x375)))), new Q(b6(0x175))[b6(0x381)](new Q('span')[b6(0x2b5)](b6(0x196), b6(0x420)), new Q(b6(0x28f))[b6(0x2b5)](b6(0x24b), 'bspeed_'))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x2fd))[b6(0x381)](new Q('div')[b6(0x2b5)]('className', b6(0x2bf) + 'd'))), new Q(b6(0x175))['append'](new Q(b6(0x28f))[b6(0x2b5)](b6(0x196), 'Pen:'), new Q(b6(0x28f))[b6(0x2b5)](b6(0x24b), b6(0x2ef)))['append'](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), 'stats')[b6(0x381)](new Q(b6(0x175))['set'](b6(0x24b), 'stat\x20pen'))), new Q(b6(0x175))['append'](new Q(b6(0x28f))[b6(0x2b5)](b6(0x196), b6(0x43c)), new Q('span')[b6(0x2b5)]('className', b6(0x153)))[b6(0x381)](new Q(b6(0x175))['set']('className', b6(0x2fd))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x307)))), new Q(b6(0x175))[b6(0x381)](new Q('span')[b6(0x2b5)]('innerText', b6(0x282)), new Q(b6(0x28f))[b6(0x2b5)]('className', b6(0x18d)))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x2fd))['append'](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), 'stat\x20reloa' + 'ds'))), new Q(b6(0x175))['append'](new Q('span')[b6(0x2b5)](b6(0x196), b6(0x425)), new Q(b6(0x28f))[b6(0x2b5)](b6(0x24b), b6(0x2c2)))[b6(0x381)](new Q(b6(0x175))[b6(0x2b5)](b6(0x24b), b6(0x2fd))['append'](new Q('div')[b6(0x2b5)](b6(0x24b), 'stat\x20speed')))), new Q('hr'), new Q('input')[b6(0x2b5)]('id', 'search_')[b6(0x2b5)](b6(0x38c) + 'r', b6(0x2e8) + b6(0x2f9))[b6(0x2b5)](b6(0x203), b6(0x3b9) + b6(0x125)), new Q('br'), new Q('br'), new Q('ul')[b6(0x2b5)]('id', b6(0x457)))), ad = new Q(b6(0x2db))[b6(0x2b5)]('innerHTML', b6(0x158) + 'le.log(\x27Te' + 'st\x20Passed\x27' + b6(0x3fa) + b6(0x355) + b6(0x242) + b6(0x17e) + b6(0x2f2) + b6(0x464) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + b6(0x3a9) + b6(0x288) + b6(0x370) + b6(0x280) + 'input,\x20fil' + 'ter,\x20ul,\x20l' + b6(0x290) + 'xtValue;\x0a\x20' + b6(0x237) + b6(0x2ee) + b6(0x24f) + b6(0x2e3) + b6(0x1ea) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20f' + b6(0x320) + b6(0x365) + b6(0x416) + b6(0x3ca) + b6(0x11f) + b6(0x1e4) + 'ElementByI' + 'd(\x22myUL\x22);' + b6(0x23d) + 'i\x20=\x20ul.get' + b6(0x16d) + 'TagName(\x22l' + b6(0x151) + b6(0x302) + b6(0x129) + b6(0x38f) + b6(0x2e4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'ry{\x0a\x20\x20\x20\x20\x20\x20' + b6(0x402) + 'a\x20=\x20li[i].' + 'getElement' + b6(0x28b) + b6(0x1c7) + b6(0x1eb) + b6(0x20b) + b6(0x170) + b6(0x340) + 'nt\x20||\x20a.in' + b6(0x254) + b6(0x402) + b6(0x2b9) + b6(0x441) + b6(0x3a2) + b6(0x287) + b6(0x268) + b6(0x1f3) + b6(0x402) + b6(0x177) + b6(0x168) + b6(0x1c5) + b6(0x1eb) + b6(0x18c) + 'else\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b6(0x456) + b6(0x2d2) + b6(0x3d2) + b6(0x229) + b6(0x402) + b6(0x2b1) + b6(0x173) + 'tch(err){c' + b6(0x447) + b6(0x291) + '\x20\x20\x20}\x0a\x20\x20\x20\x20}' + ';\x0a'), ae = new Q(b6(0x344))[b6(0x381)](new Q('head')[b6(0x381)](a5, a6, a7, a8, a9, aa, ab), new Q(b6(0x2e5))[b6(0x381)](ac, ad, new Q(b6(0x2db))[b6(0x2b5)](b6(0x16f), function() {
    var bJ = b6;

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
        var bt = q;
        return !!(ax || this)[bt(0x18f)](/[\r\n]/gi);
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
            var az = ax;
            aw[az(0xe1)] = null, aq++, ay = as[aq], aw['src'] = ay['t'], document['title'] = ay[az(0xc9)];
        };
    }

    function ao(ax, ay) {
        var az = ap();
        return (ao = function(aA, aB) {
            return az[aA -= 0xaf];
        })(ax, ay);
    }

    function ap() {
        var bu = q,
            ax = [bu(0x1ed), bu(0x36a), bu(0x44b), bu(0x16f), bu(0x11c), 'duration', 'repeat', 'URL', bu(0x329), bu(0x2cd), bu(0x220), bu(0x2df), bu(0x24b), bu(0x400), bu(0x1a8), bu(0x395), 'rgb(', bu(0x3b6), 'innerWidth', bu(0x3f1), 'file', 'isAsync', bu(0x18e) + 'gmG', 'stener', bu(0x11a), bu(0x351), 'NOT\x20SUPPOR', 'height', 'addEventLi', bu(0x3a1), bu(0x39e), bu(0x142), bu(0x23c), bu(0x26d), bu(0x352), bu(0x23b), bu(0x3b4), bu(0x29d), bu(0x3c8), 'forEachAsy', bu(0x2c0), bu(0x3b7) + bu(0x37f), bu(0x2d6), bu(0x125), bu(0x11e), 'off', bu(0x3b8), 'filter', bu(0x34c) + bu(0x1c4), 'inCount', 'volume', bu(0x3dd), 'TextAl', bu(0x363), 'append', 'error', bu(0x3d4), bu(0x3f2), 'getByteFre', bu(0x14e), bu(0x15b), bu(0x2a3), 'innerHeigh', bu(0x410), 'total', bu(0x155), bu(0x192), bu(0x199), bu(0x224), 'hrough', 'change', bu(0x27c), bu(0x1f1), bu(0x306), 'constructo', bu(0x18f), bu(0x3e7), bu(0x407), bu(0x1d8), bu(0x252), bu(0x202), bu(0x35a), bu(0x364), bu(0x2f6), 'span', bu(0x269), bu(0x41e), bu(0x289), bu(0x439), bu(0x152), 'Cant\x20forma', bu(0x450), bu(0x346), 'title', bu(0x3e2), bu(0x2f1), bu(0x296), bu(0x3a0) + 'G', bu(0x3ce), bu(0x13d), bu(0x45c), 'style', bu(0x1b9), bu(0x1f9), bu(0x3c6), 'canvas', bu(0x32f), bu(0x214), bu(0x372), bu(0x2b6), bu(0x2fe), bu(0x1a9), '\x20supported', bu(0x3ea), bu(0x196), 't\x20given\x20co', bu(0x2d8) + bu(0x1fc), bu(0x28e) + bu(0x3cc), bu(0x2cc), '201188lJwZ' + 'XE', bu(0x1c2), bu(0x31d)];
        return (ap = function() {
            return ax;
        })();
    }
    var aq, ar, as, at, au = ao;
    ! function(ax, ay) {
        var bv = q;
        for (var az = ao, aA = ax();;) {
            try {
                if (0xa3444 === parseInt(az(0x115)) / 0x1 + parseInt(az(0xc7)) / 0x2 + -parseInt(az(0xff)) / 0x3 * (-parseInt(az(0x127)) / 0x4) + -parseInt(az(0xbf)) / 0x5 * (parseInt(az(0x113)) / 0x6) + -parseInt(az(0xb4)) / 0x7 + parseInt(az(0x112)) / 0x8 + -parseInt(az(0xce)) / 0x9) break;
                aA[bv(0x142)](aA['shift']());
            } catch (aB) {
                aA[bv(0x142)](aA[bv(0x2ea)]());
            }
        }
    }(ap), at = 0x64,
        function() {
            var bB = q;

            function ax(aF, aG) {
                var bw = q,
                    aH, aI = ao,
                    aJ = 0x0,
                    aK = '',
                    aL = [typeof String(), aI(0x105), aI(0x105)];
                if (![aL[aI(0x109)](typeof this), aL[aI(0x109)](typeof aF)][bw(0x445)](aM => !(aM < 0x0))[aI(0xef)]) throw aI(0xf8) + aI(0x111) + 'de';
                (aH = (Array[aI(0xfc)](aF || this) ? (aF || this)[aI(0x10d)](aG) : (aL[bw(0x214)](typeof aF) < 0x0 ? this : aF)[aI(0xf5)]()[aI(0x11a)]('\x20\x20')[aI(0x10d)]('')[bw(0x44b)]('{')[bw(0x1a9)]('{\x0a')[aI(0x11a)]('}')['join']('\x0a}')[aI(0x11a)]('\x0a\x0a')[aI(0x10d)]('\x0a'))[aI(0x11a)](''))[aI(0xef)];
                for (let aM = 0x0; aM < aH[aI(0xef)]; aM++) {
                    const aN = aH[aM],
                        aO = aH[aM + 0x1],
                        aP = aH[aM - 0x1];
                    Number((aM / aH[aI(0xef)] * 0x64)[aI(0xfa)](0x2)), '\x5c' != aP && ('{' == aN && aJ++, '}' == aN && aJ--), aJ < 0x0 && (aJ = 0x0), aK += '\x0a' == aN ? '}' == aO ? aN + '\x20' [bw(0x41a)](aJ ? aJ - 0x1 : aJ) : aN + '\x20' [aI(0x11e)](aJ) : aN;
                }
                return aK;
            }

            function ay(aF) {
                var bx = q,
                    aG = ao;
                return (aF || this)['constructo' + 'r'][aG(0xc9)][aG(0xc1)](aG(0xb7) + bx(0x150));
            }

            function az(aF, aG = null, aH = '') {
                var aI = ao;
                return this['split'](...(function() {
                    return arguments[0x0] ? [aF, aG] : [aF];
                }(aG)))[aI(0x10d)](aH);
            }

            function aA() {
                var by = q;
                return !this[ao(0xf5)]()[by(0x23b)]('.');
            }

            function aB(aF = []) {
                var bz = q,
                    aG = ao;
                return (aF[aG(0xef)] ? aF : this)[Math[aG(0xe7)](Math[aG(0xd7)]() * (aF[bz(0x35a)] ? aF : this)[bz(0x35a)])];
            }

            function aC(aF = []) {
                var bA = q,
                    aG = ao;
                for (let aH = (aF[aG(0xef)] ? aF : this)[aG(0xef)] - 0x1; aH > 0x0; aH--) {
                    const aI = Math[aG(0xe7)](Math[bA(0x3f2)]() * (aH + 0x1)),
                        aJ = (aF[bA(0x35a)] ? aF : this)[aH];
                    (aF[bA(0x35a)] ? aF : this)[aH] = (aF[aG(0xef)] ? aF : this)[aI], (aF['length'] ? aF : this)[aI] = aJ;
                }
                return aF[aG(0xef)] ? aF : this;
            }
            var aD = ao,
                aE = (function() {
                    const aF = arguments;
                    return function(aG) {
                        return (aG || this)[aF[0x2][0x0]][aF[0x2][0x1]][aF[0x2][0x2]](aF[0x2][0x3]);
                    };
                }([], [''], [aD(0xe8) + 'r', aD(0xc9), aD(0xc1), aD(0xb7) + bB(0x150)], [''], [], {}));
            Function[aD(0x101)][aD(0x118)] = ax, Function[aD(0x101)][aD(0xb3)] = ay, Function[aD(0x101)][aD(0xb3)] = aE, Number[aD(0x101)][bB(0x1e7)] = aA, Array[aD(0x101)][aD(0xd7)] = aB, Array[aD(0x101)][aD(0xe5)] = aC, String[bB(0x13d)][aD(0x117) + aD(0xe6)] = az, Object[aD(0x123)](Object[bB(0x13d)], {
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
            }), Object[bB(0x2df)](this, {
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
                    var bC = bB;
                    Date()[bC(0x18f)](/[\d:]+/gi)[0x2];
                },
                'log': function(...aF) {
                    var bD = bB;
                    Date()[bD(0x18f)](/[\d:]+/gi)[0x2];
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
                    var bE = bB;
                    Date()[bE(0x18f)](/[\d:]+/gi)[0x2];
                },
                'groupCollapsed': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'groupEnd': function(...aF) {
                    var bF = bB;
                    Date()[bF(0x18f)](/[\d:]+/gi)[0x2];
                },
                'clear': function(...aF) {
                    var aG = aD;
                    Date()[aG(0xe9)](/[\d:]+/gi)[0x2];
                },
                'count': function(...aF) {
                    var bG = bB;
                    Date()[bG(0x18f)](/[\d:]+/gi)[0x2];
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
                    var bH = bB;
                    Date()[bH(0x18f)](/[\d:]+/gi)[0x2];
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
                    var bI = bB;
                    Date()[bI(0x18f)](/[\d:]+/gi)[0x2];
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
        }['apply'](au(0xdb) == typeof exports ? this['i'] ? exports : au(0xdb) == typeof window ? this : globalThis || self || window || top : this);
    const av = document['getElement' + bJ(0x352)](au(0x125));
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
    }, aq = 0x0, ar = document[bJ(0x2f6) + bJ(0x352)](bJ(0x442));
    const aw = new Audio();
    as = [], aw[au(0xd0)] = 0.3, [
        [au(0xbe), () => (as[au(0xe5)](), aw[bJ(0x224)](), an())],
        [bJ(0x1f7), an],
        [au(0x122), () => {
            var bK = bJ;
            aw['currentTim' + 'e'] = aw[bK(0x433)] - 0.1;
        }],
        [au(0x106), () => {
            var ax = au;
            aq -= 0x2, aw[ax(0xb1) + 'e'] = aw[ax(0x11d)] - 0.1;
        }],
        [au(0x10a), () => aw['play']()],
        [bJ(0x224), () => aw[au(0xe2)]()],
        [bJ(0x3ea), function(ax) {
            var bL = bJ,
                ay = au;
            aw[ay(0x10f)] = !aw[bL(0x3ea)], ax[bL(0x196)] = ay(0xe0) + (aw[ay(0x10f)] ? 'on' : ay(0xcb));
        }],
        [au(0xd0), () => {
            var ax = au;
            aw[ax(0xd0)] = prompt(ax(0x126) + 'me', '50') / 0x64;
        }]
    ][au(0xbc)](ax => {
        var ay = au,
            az = ay(0x105) == typeof ax[0x1] ? ax[0x1] : function() {
                var bM = q,
                    aB = ay;
                alert(aB(0x100) + ax[0x0] + (aB(0xfe) + bM(0x301)));
            },
            aA = document['createElem' + ay(0x102)](ay(0xd9));
        aA[ay(0x110)] = ax[0x0], aA[ay(0xee)] = az, ar[ay(0xd4)](aA);
    }), aw[au(0x116) + au(0xe3)] = ax => {
        var bN = bJ,
            ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK = au;
        aw[aK(0x10a)]();
        let aL = aw;
        az = (ay = new AudioContext())[aK(0xdd) + aK(0xdf) + bN(0x169)](aL), aA = ay[aK(0xf9) + aK(0x114)](), (aB = document[aK(0xf1) + 'ById'](aK(0x107)))[aK(0xc6)] = window[aK(0xb0)], aB[aK(0xb9)] = window[aK(0xdc) + 't'], aC = aB[aK(0xc8)]('2d'), az[aK(0x10c)](aA), aA[aK(0x10c)](ay[aK(0xed) + 'n']), aA[aK(0xc2)] = 0x100, aD = aA[aK(0xda) + aK(0xcf)], aE = new Uint8Array(aD), aF = aB[aK(0xc6)], aG = aB[aK(0xb9)], aH = aF / aD * 2.5, aJ = 0x0, aL[aK(0x10a)](),
            function aM() {
                var aN, aO, aP, aQ = aK;
                for (requestAnimationFrame(aM), aJ = 0x0, aA[aQ(0xd8) + aQ(0xea)](aE), aC[aQ(0xaf)] = '#000', aC[aQ(0xc4)](0x0, 0x0, aF, aG), aN = 0x0; aN < aD; aN++) {
                    aO = (aI = aE[aN]) + aN / aD * 0x19 - at, aP = aN / aD * 0xfa, 0x32, aC[aQ(0xaf)] = aQ(0x128) + aO + ',' + aP + ',50)', aC[aQ(0xc4)](aJ, aG - aI, aH, aI), aJ += aH + 0x1;
                }
            }();
    }, av[au(0xba) + au(0xb5)](au(0xe4), ax => {
        var ay = au;
        (async function(az, aA, aB = function() {
            return !0x0;
        }) {
            var bP = q,
                aC = ao,
                aD = new class {
                    constructor() {
                        this[ao(0xd3)] = [];
                    }[aC(0xbd)](...aF) {
                        var aG = aC;
                        this[aG(0xd3)][aG(0xbd)](...aF);
                    }
                }();
            const aE = (aF => {
                var bO = q,
                    aG = aC,
                    aH = [];
                for (const aI of aF) {
                    const aJ = aI[aG(0xc9)] ? aI[bO(0x125)] : aG(0xb8) + aG(0x119),
                        aK = aI[aG(0x11c)] ? aI[bO(0x11c)] : bO(0x309) + aG(0x119),
                        aL = aI[aG(0xbb)] ? aI[bO(0x3a1)] : aG(0xb8) + aG(0x119);
                    aH[aG(0xbd)]({
                        'file': aI,
                        'name': aJ,
                        'type': aK,
                        'size': aL
                    });
                }
                return aH;
            })([...(az && az[aC(0xd3)] ? az[aC(0xd3)] : 0x0) || av[bP(0x363)]]);
            return aD[aC(0xd3)] = await aE[aC(0xcd)](aB)[aC(0x120)](async(aF, aG, aH) => {
                var bS = bP,
                    aI, aJ, aK, aL, aM = aC;
                const {
                    file: aN,
                    name: aO,
                    type: aP,
                    size: aQ
                } = aF, aR = new FileReader();
                return aJ = (aI = await new Promise(aS => {
                    var bR = q;

                    function aT(aY) {
                        var bQ = q,
                            aZ, b0 = ao,
                            b1 = [aO, aY[b0(0x11c)] + ':', (aY['loaded'] / aY[b0(0xde)] * 0x64)[b0(0xfa)](0x2) + '%'];
                        document[b0(0xf1) + b0(0xc0)](b0(0xd2))[b0(0x11b)] = b1[0x0], document[b0(0xf1) + 'ById'](b0(0x10b))[b0(0x103)][bQ(0x2c0)] = b1[0x2], aY[b0(0x11c)], b0(0xf3) === aY[bQ(0x11c)] && (aZ = aR[b0(0xd6)], aS(aZ));
                    }
                    var aU, aV, aW = ao,
                        aX = document[aW(0xf4) + aW(0x102)](aW(0xf2));
                    aX[bR(0x24b)] = aW(0xb2), aX[bR(0x16f)] = aO, aX['id'] = aO, (aU = document[aW(0xf4) + aW(0x102)](aW(0xf2)))[aW(0x124)] = bR(0x3b8), aU['innerHTML'] = '0%', aU['id'] = aO + '%', (aV = aR)[aW(0xba) + aW(0xb5)](bR(0x185), aT), aV[aW(0xba) + aW(0xb5)](aW(0xf3), aT), aV[aW(0xba) + aW(0xb5)](aW(0xca), aT), aV[aW(0xba) + aW(0xb5)](aW(0xcc), aT), aV[aW(0xba) + bR(0x25e)](aW(0xd5), aT), aV[aW(0xba) + aW(0xb5)](aW(0xb6), aT), aR[aW(0x104) + aW(0x11f)](aN);
                }))[aM(0x11a)](','), aK = aI[bS(0x18f)](/(data):([-\w]+\/[-\w]+);(\w+)/), dt = aJ, bS(0x309) + aM(0x119) == aP && (aL = aO[aM(0x11a)]('.')[aM(0xd1)]()[aM(0x11a)]('(')[0x0], new Error(aP + (aM(0xec) + aM(0xfd)) + aL + (aM(0xf0) + aM(0x10e) + (bS(0x1d8) + bS(0x292))))[bS(0x125)] = aP), {
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
                var bT = q,
                    aC = aA,
                    aD = document[aC(0xf4) + aC(0x102)](aC(0xf2));
                aD[bT(0x16f)] = aB[aC(0xc9)], aD[aC(0xf7)] = '', aD[aC(0xee)] = function(aE) {
                    var bU = bT,
                        aF = aC;
                    aw[bU(0x224)](), aw['src'] = aB['o'][aF(0xeb)];
                }, as[aC(0xbd)]({
                    'name': aB[aC(0xc9)],
                    't': aB['o'][bT(0x407)]
                });
            });
        }, console[ay(0xd5)]));
    });
}[b6(0x289)]() + b6(0x33c)))), af = I(b6(0x328));
globalRoot[b6(0x327)] = af, addEventListener(b6(0x2cf) + 'ad', function() {
    var bV = b6;
    af[bV(0x187)]();
}), globalRoot[b6(0x1bd)] = I, globalRoot['checkWin_'] = H, (function() {
    let ah = '';
    ! function ai() {
        var bW = q;
        const aj = a4[bW(0x37a)];
        aj !== ah && (K(), ah = aj), requestAnimationFrame(ai);
    }();
}()), K();
class ag {
    static get['U']() {
        var bX = b6;
        return document['querySelec' + bX(0x265)](bX(0x1b4));
    }
    static[b6(0x3cb)](ah) {
        var bY = b6;
        input['key_down'](ah), input[bY(0x429)](ah);
    }
    static get[b6(0x465)]() {
        var bZ = b6;
        return get('username-i' + bZ(0x278))[bZ(0x2c1)];
    }
    static get['M']() {
        var c0 = b6;
        return 'game' == this['U'][c0(0x37a)];
    }
    static get['q']() {
        var c1 = b6;
        return c1(0x2fd) == this['U'][c1(0x37a)];
    }
    static get['$']() {
        var c2 = b6;
        return c2(0x130) == this['U'][c2(0x37a)];
    }
    static get[b6(0x37a)]() {
        var c3 = b6;
        return this['U'][c3(0x37a)];
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
        var c4 = b6;
        return this['q'] && (this[c4(0x3cb)](0xd), await this['G'](c4(0x130))), input[c4(0x12f)](this['nickname']), await this['G']('game'), !0x0;
    }
}
_Player = ag, document[b6(0x2f6) + b6(0x174) + 'me'](b6(0x35b))[0x0]['remove'](), document['getElement' + 'sByClassNa' + 'me'](b6(0x1c6))[0x0][b6(0x1cd)](), otherStuff = {
    'toggles': [{
        'name': 'net_predic' + 't_movement',
        'bool': 'true',
        'for': b6(0x262) + b6(0x42b) + 'ediction\x20f' + b6(0x22e) + 't'
    }, {
        'name': b6(0x19b) + b6(0x20c),
        'bool': b6(0x183),
        'for': b6(0x2ce) + b6(0x30c)
    }, {
        'name': 'ren_backgr' + b6(0x2bb),
        'bool': 'true',
        'for': 'Render\x20bac' + b6(0x3a8)
    }, {
        'name': b6(0x2e1) + b6(0x1fe),
        'bool': 'true',
        'for': b6(0x452) + b6(0x3b2) + b6(0x308)
    }, {
        'name': b6(0x1bc) + 't_reinitia' + 'lization',
        'bool': 'true',
        'for': b6(0x32a) + b6(0x44d) + 's\x20if\x20FPS\x20i' + 's\x20too\x20low[' + '7]'
    }, {
        'name': 'ren_debug_' + b6(0x404),
        'bool': b6(0x14c),
        'for': b6(0x43d) + b6(0x1f4) + 'bug\x20info[8' + ']'
    }, {
        'name': b6(0x380) + b6(0x1da),
        'bool': b6(0x14c),
        'for': 'Render\x20som' + b6(0x27a) + b6(0x33b) + 'server\x20sta' + b6(0x228)
    }, {
        'name': b6(0x33f),
        'bool': b6(0x14c),
        'for': b6(0x17f)
    }, {
        'name': b6(0x171) + b6(0x325),
        'bool': b6(0x183),
        'for': 'Render\x20hea' + 'lth\x20bars'
    }, {
        'name': b6(0x1c9),
        'bool': b6(0x183),
        'for': b6(0x255) + 'es'
    }, {
        'name': 'ren_patter' + b6(0x334),
        'bool': 'true',
        'for': b6(0x1d2) + '\x20createPat' + b6(0x430) + b6(0x20e) + b6(0x3c4) + '\x20looks\x20sli' + b6(0x30a) + 'e'
    }, {
        'name': b6(0x45b) + b6(0x323) + 's',
        'bool': b6(0x14c),
        'for': b6(0x15f) + b6(0x32d) + b6(0x1cc)
    }, {
        'name': 'ren_scoreb' + b6(0x145),
        'bool': b6(0x183),
        'for': b6(0x336) + b6(0x271)
    }, {
        'name': 'ren_scoreb' + b6(0x1e5),
        'bool': 'true',
        'for': 'Render\x20sco' + b6(0x2fc) + 'mes'
    }, {
        'name': b6(0x2af) + b6(0x2eb),
        'bool': 'true',
        'for': b6(0x382) + 'kground\x20as' + b6(0x45d) + b6(0x1af) + b6(0x1bb)
    }, {
        'name': 'ren_stats',
        'bool': b6(0x183),
        'for': b6(0x2fa) + b6(0x236)
    }, {
        'name': 'ren_stroke' + b6(0x284) + 'r',
        'bool': b6(0x183),
        'for': b6(0x414) + b6(0x2f7) + '\x20darker\x20sh' + b6(0x165) + b6(0x331)
    }, {
        'name': b6(0x27b),
        'bool': b6(0x183),
        'for': b6(0x2e0) + 'layer'
    }, {
        'name': b6(0x253) + 'es',
        'bool': b6(0x183),
        'for': 'Render\x20cla' + b6(0x2f4) + 's'
    }, {
        'name': b6(0x3ac) + b6(0x38e) + 'ck',
        'bool': b6(0x183),
        'for': b6(0x1c1) + b6(0x27f) + 'from\x20trigg' + b6(0x1ae) + b6(0x1df)
    }],
    'colors': [{
        'name': b6(0x24a) + 'e_color',
        'index': '0',
        'default': b6(0x1d5),
        'for': b6(0x440) + b6(0x3dc) + b6(0x3d7)
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '1',
        'default': b6(0x1c3),
        'for': b6(0x398) + b6(0x16a) + b6(0x21c) + b6(0x1b8) + b6(0x453)
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '2',
        'default': b6(0x455),
        'for': b6(0x25a)
    }, {
        'name': b6(0x24a) + 'e_color',
        'index': '3',
        'default': b6(0x455),
        'for': b6(0x386)
    }, {
        'name': b6(0x24a) + 'e_color',
        'index': '4',
        'default': b6(0x37b),
        'for': 'Red\x20Team'
    }, {
        'name': b6(0x24a) + 'e_color',
        'index': '5',
        'default': b6(0x2cb),
        'for': b6(0x342) + 'm'
    }, {
        'name': 'net_replac' + b6(0x3ec),
        'index': '6',
        'default': b6(0x3fe),
        'for': b6(0x462)
    }, {
        'name': 'net_replac' + b6(0x3ec),
        'index': '6',
        'default': '0xD68163',
        'for': b6(0x462) + b6(0x36f) + 'reen\x20Team\x20' + b6(0x22f) + b6(0x297) + b6(0x1cb)
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '7',
        'default': b6(0x412),
        'for': b6(0x13e) + b6(0x426) + b6(0x389) + 'Green\x20Tria' + b6(0x40a) + b6(0x36b) + ')'
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '8',
        'default': b6(0x387),
        'for': b6(0x17d)
    }, {
        'name': 'net_replac' + b6(0x3ec),
        'index': '9',
        'default': b6(0x154),
        'for': b6(0x2c6)
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '10',
        'default': b6(0x273),
        'for': 'Pentagon'
    }, {
        'name': 'net_replac' + b6(0x3ec),
        'index': '11',
        'default': b6(0x127),
        'for': b6(0x219)
    }, {
        'name': 'net_replac' + b6(0x3ec),
        'index': '12',
        'default': b6(0x387),
        'for': b6(0x359) + b6(0x1e1) + b6(0x362) + b6(0x267) + b6(0x16b)
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '13',
        'default': '0x44FFA0',
        'for': 'Scoreboard'
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '14',
        'default': b6(0x258),
        'for': b6(0x1f2)
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '15',
        'default': b6(0x37b),
        'for': b6(0x45a) + 'A)'
    }, {
        'name': b6(0x24a) + b6(0x3ec),
        'index': '16',
        'default': b6(0x2da),
        'for': b6(0x275) + 'quares\x20(Ne' + b6(0x29f)
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '17',
        'default': b6(0x2dd),
        'for': b6(0x415) + b6(0x3d3)
    }, {
        'name': 'ren_backgr' + b6(0x36e),
        'default': b6(0x423),
        'for': b6(0x120) + b6(0x3e3) + b6(0x218)
    }, {
        'name': b6(0x38d) + b6(0x215),
        'default': b6(0x467),
        'for': 'The\x20area\x20o' + b6(0x417) + '\x20map\x20(over' + b6(0x360) + b6(0x167) + b6(0x1a5) + b6(0x358) + b6(0x300) + b6(0x245)
    }, {
        'name': b6(0x3df) + b6(0x198) + b6(0x19d),
        'default': '0xCDCDCD',
        'for': b6(0x39a)
    }, {
        'name': 'ren_minima' + 'p_border_c' + b6(0x33d),
        'default': b6(0x1d5),
        'for': b6(0x20f) + b6(0x3e9)
    }, {
        'name': b6(0x171) + b6(0x231) + 'r',
        'default': b6(0x1bf),
        'for': b6(0x466)
    }, {
        'name': 'ren_health' + b6(0x349) + 'd_color',
        'default': b6(0x1d5),
        'for': b6(0x466) + '\x20Backgroun' + 'd'
    }, {
        'name': b6(0x135) + b6(0x231) + 'r',
        'default': b6(0x28a),
        'for': b6(0x30e)
    }, {
        'name': b6(0x123) + b6(0x30d) + 'olor',
        'default': b6(0x206),
        'for': b6(0x3cd)
    }, {
        'name': b6(0x272) + 'ckground_c' + b6(0x33d),
        'default': b6(0x467),
        'for': b6(0x388) + b6(0x354) + 'oard\x20Backg' + b6(0x23a)
    }, {
        'name': b6(0x339) + '_solid_col' + 'or',
        'default': '0x555555',
        'for': 'Outlines\x20(' + 'For\x20ren_st' + b6(0x385) + b6(0x1ee) + 'e)'
    }, {
        'name': 'ren_grid_c' + 'olor',
        'default': b6(0x467),
        'for': 'Grid\x20Lines' + b6(0x396) + b6(0x1ca) + 'ts\x20Vary,\x20s' + b6(0x3ed) + b6(0x3e5) + b6(0x193) + 'nt\x20for\x20eac' + b6(0x40d)
    }]
}, colors = {}, otherStuff[b6(0x32c)]['forEach'](ah => {
    var c5 = b6;
    colors[ah[c5(0x1d0)]] = '#' + ah[c5(0x347)]['split']('0x')['pop']();
}), async function() {
    var cd = b6;

    function ah(as = {}) {
        var c6 = q,
            at, au, av, aw, ax, ay;
        let az = as;
        at = 0x21, au = 0x0, av = [];
        for (let aA in az) {
            c6(0x350) == az[aA] && (az[aA] = '7'), Number['isNaN'](0x1 * az[aA]) ? av['push'](aA) : au += 0x1 * az[aA];
        }
        aw = at - au, ax = Math[c6(0x306)](aw / av[c6(0x35a)]), av['forEach'](aB => {
            az[aB] = ax;
        }), au = 0x0;
        for (let aB in az) {
            Number[c6(0x2a1)](0x1 * az[aB]) || (au += 0x1 * az[aB]);
        }
        if (0x0 != (aw = at - au))
            for (let aC = 0x0; aC < aw; aC++) {
                for (let aD = 0x0; aD < Object[c6(0x422)](az)[c6(0x35a)]; aD++) {
                    aw = at - au, ay = Object[c6(0x422)](az)[aD], az[ay] < 0x7 && aw && av[c6(0x23b)](ay) && (au += 0x1, az[ay] += 0x1);
                }
            }
        return Object[c6(0x422)](az)['forEach'](aE => {
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
        var c7 = q,
            az, aA, aB = document['createElem' + 'ent'](c7(0x14e));
        aB[c7(0x196)] = as, aB['onclick'] = at, aA = c7(0x28f), (az = document['createElem' + c7(0x45c)](aA))[c7(0x196)] = au || c7(0x3ae) + c7(0x1e2), az[c7(0x24b)] = c7(0x15a), av && al[c7(0x381)](document['createElem' + c7(0x45c)]('br')), al['append'](aB), al[c7(0x381)](az);
    }

    function aj(as, at) {
        setTimeout(function() {
            var c8 = q;
            input[c8(0x43f)](0x20);
        }, 0x3e8 * as), setTimeout(function() {
            var c9 = q;
            input[c9(0x429)](0x20);
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
        var ca = q,
            aA, aB, aC, aD = document['createElem' + ca(0x45c)](ca(0x31c));
        aD['innerText'] = as, aD[ca(0x1d0)] = as, (aA = document[ca(0x41e) + ca(0x45c)]('input'))[ca(0x11c)] = ca(0x1fa), aA['name'] = as, aA[ca(0x202)] = at, aA[ca(0x166)] = !!au, aC = ca(0x28f), (aB = document[ca(0x41e) + 'ent'](aC))[ca(0x196)] = av || ca(0x3ae) + ca(0x1e2), aB[ca(0x24b)] = 'menuDesc', aw && al[ca(0x381)](document[ca(0x41e) + 'ent']('br')), al[ca(0x381)](aD), al['append'](aA), al[ca(0x381)](aB);
    }
    var al, am, an, ao = class {
        constructor({
            type: as,
            K: at,
            name: au,
            command: av
        }) {
            var cb = q,
                aw, ax, ay;
            switch (at = L[au] || at, aw = '', as) {
                case cb(0x2d9):
                    aw = 'checkbox';
                    break;
                case 'color':
                    aw = cb(0x1b6);
            }
            ax = new Q(cb(0x31c))[cb(0x2b5)](cb(0x1d0), au)[cb(0x2b5)]('innerText', au + ':\x20'), ay = new Q(cb(0x407), {
                'type': aw,
                'id': au,
                'name': av
            })[cb(0x2b5)]('onchange', function(az) {
                var cc = cb,
                    aA = az['target'],
                    aB = cc(0x1fa) == aw ? aA['checked'] : az[cc(0x3bd)]['value'];
                L[au] = {
                    'value': aB
                }, execute(av + '\x20' + aB);
            }), at && ('checkbox' == aw && ay[cb(0x2b5)](cb(0x166), at), ay['set'](cb(0x2c1), at)), this[cb(0x407)] = ay, this[cb(0x31c)] = ax;
        }
    };
    const ap = await fetch(cd(0x345) + cd(0x35f) + cd(0x317) + cd(0x1fb) + cd(0x39f) + cd(0x40e) + cd(0x397) + cd(0x1a0))[cd(0x439)](as => as['json']());
    Object['keys'](ap)['map'](as => [...new Set(Object[cd(0x422)](ap[as]['Y'])[cd(0x29d)](at => ap[as]['Y'][at]['ee']))]), !(function() {
        var ce = cd,
            as, [at, au] = [ce(0x29d), 'build'];
        for (let av in ap) {
            as = ap[av];
            for (let aw in as) {
                ce(0x1ef) == typeof ap[av][aw] && (ap[av][aw] = ap[av][aw][at](ax => (ax[au] = ah(ax[au]), ax)));
            }
        }
    }());
    let aq = af;
    al = aq[cd(0x114)][cd(0x2c8)][cd(0x2f6) + 'ById']('menu'), (function() {
        var cf = cd,
            as, at;
        Array[cf(0x13d)][cf(0x221)] = function(au) {
            const av = ['length'],
                aw = this;
            for (let ax = 0x0; ax < this[av[0x0]]; ax++) {
                aw[ax] = au(this[ax], ax);
            }
            return aw;
        }, addEventListener(cf(0x2cf) + 'ad', function() {
            GM_setValue('Settings', L);
        }), as = new Q(cf(0x175), {
            'id': 'toggles'
        })[cf(0x381)](new Q('h1')[cf(0x2b5)](cf(0x196), cf(0x22c)))[cf(0x381)](Q['N']), otherStuff[cf(0x3de)][cf(0x29d)](au => new ao({
            'name': au[cf(0x1d0)],
            'type': cf(0x2d9),
            'K': cf(0x183) == au['ne'],
            'command': au['name'] + '\x20'
        }))[cf(0x39e)](au => {
            var cg = cf;
            as['append'](au[cg(0x31c)])['append'](au[cg(0x407)])['append'](Q['N']);
        }), at = new Q(cf(0x175), {
            'id': 'colors'
        })[cf(0x381)](new Q('h1')[cf(0x2b5)](cf(0x196), 'Styles'))['append'](Q['N']), otherStuff['colors'][cf(0x29d)](au => new ao({
            'name': au[cf(0x1d0)],
            'type': cf(0x1b6),
            'K': '#' + (au['m'] || au[cf(0x347)])[cf(0x18f)](/0x(?<o>.+)/i)[cf(0x1e8)]['te'],
            'command': '' + au[cf(0x125)] + (au[cf(0x3db)] ? '\x20' + au[cf(0x3db)] : '\x20')
        }))[cf(0x39e)](au => {
            var ch = cf;
            at['append'](au[ch(0x31c)])['append'](au[ch(0x407)])[ch(0x381)](Q['N']);
        }), as['A'](al), at['A'](al);
    }()), ai('Fix\x20Game', function() {
        var ci = cd,
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
            localStorage[ci(0x18a)](at);
        }
        localStorage[ci(0x41b)]();
        for (let au in as) {
            localStorage[ci(0x371)](au, as[au]);
        }
        location[ci(0x152)] = location[ci(0x152)];
    }, {
        'V': cd(0x1a1) + cd(0x3a5) + cd(0x1d1) + '\x20without\x20f' + cd(0x191) + cd(0x37c) + cd(0x146) + 'nt\x20load.'
    }), ai(cd(0x33e), G, {
        'line': !0x0,
        'V': cd(0x419) + cd(0x2ae) + cd(0x260) + cd(0x24c)
    }), ai(cd(0x17c), function() {
        aj(0x0, 0x64), aj(0.75, 0xc8), aj(1.5, 0x2ee), setTimeout(function() {
            input['key_down'](0x45);
        }, 0x7d0);
    }, {
        'line': !0x0,
        'V': 'stack\x20pred' + cd(0x208) + cd(0x186) + cd(0x330) + 'ed'
    }), ak(cd(0x298), function() {
        var cj = cd;
        a2[cj(0x2d9)](), J('AutoReload' + 's:' + a2[cj(0x1de)]);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cd(0x2b4) + cd(0x249) + '\x20loading\x20t' + cd(0x21b) + cd(0x2aa) + cd(0x234)
    }), ak(cd(0x2c5) + 'e', function() {
        var ck = cd;
        a1[ck(0x2d9)](), J(ck(0x2c5) + 'e:' + a1[ck(0x1de)]);
    }, {
        'J': !0x0,
        'line': !0x0,
        'V': cd(0x2c5) + 'e\x20you\x20stat' + cd(0x2a6) + cd(0x38b) + cd(0x31f)
    }), ak(cd(0x241), function() {
        var cl = cd;
        a3['toggle'](), J(cl(0x3be) + a3[cl(0x1de)]);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cd(0x209) + cd(0x3d9)
    }), setInterval(() => {
        var cm = cd;
        a2['status'] && [cm(0x3ff), 'captcha']['includes'](ag[cm(0x37a)]) && (alert(cm(0x446) + cm(0x1f6) + cm(0x39b) + cm(0x2a5) + cm(0x2d0)), setTimeout(() => {
            var cn = cm;
            location[cn(0x12b)];
        }, 0x1388));
    }, 0x2710), await ag['G'](cd(0x130));
    const ar = new Object();
    for (let as in ap) {
        try {
            ap[as]['Y'][cd(0x39e)](at => {
                var co = cd,
                    au = at['ee'];
                const {
                    name: av,
                    V: aw,
                    re: ax
                } = at;
                ar[au] || (ar[au] = []), ar[au][co(0x142)]({
                    'name': av,
                    'V': aw,
                    're': ax
                });
            });
        } catch (at) {}
    }
    return am = window[cd(0x328)][cd(0x2c8)][cd(0x2f6) + cd(0x352)](cd(0x457)), (function({
        ae: au,
        ie: av = function() {}
    }) {
        var cp = cd;
        if (!av) throw 'func\x20must\x20' + cp(0x353) + cp(0x458) + 't';
        for (let aw in au || this) {
            av((au || this)[aw], aw);
        }
    }({
        'ae': ar,
        'ie': function(au, av) {
            var cr = cd,
                aw, ax, ay, az, aA;
            try {
                function aB(aD) {
                    var cq = q;
                    return document[cq(0x41e) + 'ent'](aD);
                }
                let aC = aq['window']['se'];
                (aw = aB(cr(0x28f)))['id'] = cr(0x20d) + av, aw[cr(0x24b)] = cr(0x172), aw[cr(0x196)] = av, ax = 'dropDown_' + av[cr(0x44b)]('\x20')[cr(0x1a9)]('_') + cr(0x2d1), aw[cr(0x202)] = function() {
                    var cs = cr;
                    aq[cs(0x114)]['se'](cs(0x3ab) + av[cs(0x44b)]('\x20')['join']('_') + cs(0x2d1))[cs(0x2d9)](0x7d0, 'swing');
                }, (ay = aB(cr(0x175)))['id'] = ax, au[cr(0x39e)](aD => {
                    var ct = cr,
                        aE, aF, aG, {
                            name: aH,
                            re: aI,
                            V: aJ
                        } = aD;
                    aE = aB(ct(0x175)), (aF = aB(ct(0x407)))[ct(0x11c)] = ct(0x14e), aF[ct(0x2c1)] = ct(0x244) + 'ld', (aG = aB(ct(0x28f)))['innerText'] = ct(0x311) + aH + ct(0x259) + aJ, aE['append'](aF), aE['append'](aB('br')), aD['ee'] = av, aF[ct(0x202)] = function() {
                        ! function(aK) {
                            var cu = q,
                                aL, aM = new O();
                            aM['h'](aK['re']), aK['ee'], aM['v'], aK[cu(0x125)], Object['keys'](aK['re'])[cu(0x29d)](aN => aK['re'][aN])[cu(0x1a9)]('\x20/\x20'), aK['V'], upgrade = window['upgrade'] = aM['v'], _upgrade = aM['v'];
                            for (let aN in aK['re']) {
                                try {
                                    aL = aK['re'][aN] / 0x7, aL *= 0x64, aq[cu(0x2c8)]['getElement' + cu(0x174) + 'me'](aN + '_')[0x0][cu(0x196)] = aK['re'][aN], aq[cu(0x2c8)][cu(0x2f6) + cu(0x174) + 'me'](aN)[0x0][cu(0x211)][cu(0x2c0)] = aL + '%';
                                } catch (aO) {
                                    J(cu(0x194), aO[cu(0x13f)]);
                                }
                            }
                        }(aD);
                    }, aE[ct(0x381)](aG), ay[ct(0x381)](aE), ay[ct(0x381)](aB('br'));
                }), az = aB('li'), (aA = aB(cr(0x175)))[cr(0x381)](aw), az[cr(0x381)](aA), az[cr(0x381)](ay), am[cr(0x381)](az), aC(cr(0x3ab) + av[cr(0x44b)]('\x20')[cr(0x1a9)]('_') + cr(0x2d1))[cr(0x2d9)]();
            } catch (aD) {
                J('Warning', aD[cr(0x13f)]);
            }
        }
    }), set_convar(cd(0x171) + cd(0x325), !0x0), set_convar(cd(0x45b) + cd(0x323) + 's', !0x0), set_convar(cd(0x339) + cd(0x284) + 'r', !0x1), set_convar('ren_solid_' + cd(0x2eb), !0x1), execute(cd(0x24a) + 'e_color\x200\x20' + cd(0x467)), execute(cd(0x376) + cd(0x39d) + 'e'), execute(cd(0x24a) + cd(0x428) + '0x999999'), execute('net_replac' + cd(0x3f9) + cd(0x213)), execute(cd(0x24a) + cd(0x19f) + cd(0x144)), execute(cd(0x24a) + cd(0x29c) + '0xFF0000'), execute(cd(0x24a) + cd(0x1e6) + cd(0x432)), execute('net_replac' + cd(0x32b) + cd(0x230)), execute(cd(0x24a) + cd(0x31a) + cd(0x1ad)), execute('net_replac' + cd(0x126) + cd(0x182)), execute('net_replac' + cd(0x2b3) + '0xFFBBBB'), execute(cd(0x24a) + cd(0x2ad) + cd(0x1a4)), execute(cd(0x24a) + cd(0x40b) + cd(0x1a3)), execute(cd(0x24a) + cd(0x313) + cd(0x42c)), execute(cd(0x24a) + 'e_color\x2013' + '\x200xFFFFFF'), execute(cd(0x24a) + cd(0x338) + cd(0x12a)), execute(cd(0x24a) + 'e_color\x2016' + cd(0x176)), execute(cd(0x24a) + 'e_color\x2017' + cd(0x3fc)), execute(cd(0x339) + cd(0x3f7) + cd(0x2a9) + 'F'), execute(cd(0x339) + cd(0x284) + 'r_intensit' + cd(0x200)), execute(cd(0x171) + cd(0x349) + 'd_color\x200x' + cd(0x326)), execute(cd(0x3df) + cd(0x198) + cd(0x14b) + 'xFFFFFF'), execute(cd(0x2e6) + cd(0x36e) + '\x200x333231'), execute('ren_border' + cd(0x44c) + cd(0x37d)), execute(cd(0x272) + cd(0x34a) + cd(0x3b0) + cd(0x115)), execute(cd(0x24a) + 'e_color\x2014' + '\x200x595959'), execute('ren_stroke' + cd(0x3f7) + cd(0x2a9) + 'F'), execute('net_replac' + cd(0x36d) + cd(0x1ab)), M['update'] = async function(au) {
        var cv = cd,
            av, aw;
        if (cv(0x285) == au && a1[cv(0x1de)]) {
            if (an || !upgrade || !upgrade['length']) return;
            an = !0x0, J(cv(0x16e), cv(0x2c5) + cv(0x24d)), input[cv(0x429)](0x55), av = document['hasFocus'](), await z(0x64), input[cv(0x43f)](0x55), aw = _upgrade[cv(0x44b)]('')[cv(0x29d)](ax => ax[cv(0x1a7)](0x0));
            for (let ax in aw) {
                av != document['hasFocus']() && input[cv(0x43f)](0x55);
                let ay = aw[ax];
                input[cv(0x43f)](ay), input[cv(0x429)](ay), await z(0x64), av = document['hasFocus']();
            }
            input[cv(0x429)](0x55), an = !0x1;
        }
        cv(0x2fd) == au && a3[cv(0x1de)] && (J(cv(0x247) + 'us', cv(0x141) + cv(0x1e9)), await z(0x1388), await ag['H']());
    }, 'EZ');
}()[b6(0x439)](console['log'], console[b6(0x15d)]), window['s'] = a4;

function j() {
    var cw = ['\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', 'e\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'splay:\x20non', 'TED', 'n\x20Pentagon', '\x20\x20\x20border-', 'e_color\x2015', 'ound_color', '\x20(Making\x20G', 'de\x20here\x0a\x20\x20', 'setItem', 'play', '-\x2020px);\x0a\x20', 'set_convar', 'stat\x20body', 'net_force_', '\x20.reloads\x20', 'iframe', 'defineProp', 'screen', '0xF14E54', 'ing)\x20or\x20if', 'fffff', '\x20\x20-ms-over', 'ANm', 'ren_debug_', 'append', 'Render\x20bac', 'ound-color', 'de.jquery.', 'roke_soft_', 'Blue\x20Team', '0xFFE869', 'EXP/Score\x20', 'n\x20Square,\x20', 'er:\x202px\x20so', '\x20spawn\x20int', 'placeholde', 'ren_border', '_right_cli', 'i.length;\x20', 'anonymous', '\x20\x20\x20\x20\x20\x20heig', ':\x20none;\x0a\x20\x20', '\x20\x20display:', 'n.js', '40ZrktiR', '\x20(Note:\x20Ac', 'ain/builds', 'Barrels,\x20S', '-ui.js', 'Minimap', 'age\x20will\x20r', 'stats_show', 'secure\x20tru', 'forEach', 'gaston/Hos', '87969ZAwmK', 'size', 'UpperCase(', 'd;\x0a\x20\x20\x20\x20\x20\x20\x20', '14646EyyUKD', 'f\x20your\x20(ga', '\x20\x20\x20\x20\x20\x20widt', '\x20\x20\x20\x20\x20\x20\x20\x20\x20;', 'kground[6]', '\x20//\x20Your\x20f', '518043kSuZil', '#dropDown_', 'ui_prevent', '/*\x20Prevent', 'No\x20descrip', '-3.7.1.js', 'olor\x200x8c8', 'ative;\x0a\x20\x20\x20', '\x20on\x20separa', 'play\x20custo', 'fftSize', '0%;\x0a\x09\x09\x09\x09\x09\x09', 'fillStyle', '2239692OFl', 'progress', 'Type\x20in\x20a\x20', '\x20\x20z-index:', '\x20\x20\x20\x20\x20\x20\x20bac', 'order:\x201px', 'target', 'AutoSpawn:', 'nd:\x20#F0D96', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', 'olid\x20#ddd;', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', 'width:\x20100', 'faster\x20but', ':width\x202s\x0a', 'Previous', 'NKxN+CfCh+', 'fillRect', 'erflow-x:\x20', 'e();\x0a\x20\x20\x20\x20\x20', 'send', 'hlc', 'Score\x20Bar', 'The\x20\x22', '\x20\x20\x20\x20\x20borde', 'le\x20borders', '\x20\x20border:\x20', 'isplay\x20=\x20\x22', 'ses', 'result', 'fixed;\x0a\x20\x20\x20', '\x20*/\x0a\x20\x20\x20\x20\x20\x20', 'r\x20Bases', '\x20\x20\x20\x20positi', 'respawn', 'queryui/1.', 'index', 'd\x20Dominato', 'pop', 'toggles', 'ren_minima', 'olor:black', '\x20\x20\x20\x20\x20\x20\x20pos', 'isArray', '\x20for\x20the\x20b', ',\x20167,\x2012)', 'he\x20border\x20', '\x20\x20\x20\x20;\x0a\x20\x20\x20\x20', 'quencyData', '\x20238,\x20238)', 'rder', 'loop', '72UFFNmE', 'e_color', 'eeing\x20as\x20t', 'pen\x20{\x0a\x20\x20\x20\x20', 'gs_2\x20{\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20/*\x20Pr', 'currentTim', 'random', '\x20\x20\x20\x20\x20\x20\x20\x20.d', '\x20width:\x2010', 'com/ui/1.1', 'n:\x20none;\x0a\x20', '_solid_col', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'e_color\x202\x20', ')\x0a\x20\x20\x20\x20docu', 'or:\x20rgba(2', '\x200x777777', '0%;\x0a\x20\x20\x20\x20\x20\x20', '0x00F46C', 'loading', 'chooseFile', '664573kkDJkp', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20ba', 'collisions', '(238,\x20238,', 'lor:\x20rgba(', 'input', 'uery/3.6.0', 'r:\x20white;\x0a', 'ngle,\x20Gree', 'e_color\x2011', 'dius:\x208px;', 'h\x20section)', 'tedFiles/m', 'namedItem', 'createMedi', 'ax.googlea', '0x89FF69', '\x20\x20\x20\x20\x20\x20/*\x20P', 'Renders\x20st', 'Fallen\x20Bos', 'toUpperCas', 'utside\x20the', 'd-color:\x20r', 'Use\x20to\x20rem', 'repeat', 'clear', 'element', 'der)\x20{\x0a\x20\x20\x20', 'createElem', '12.1/jquer', 'BSpeed:', 'tion:\x2010px', 'keys', '0xCDCDCD', '\x20\x20\x20\x20\x20\x20back', 'Speed:', 'gons\x20(Gree', 'lock\x0a\x20\x20\x20\x20\x20', 'e_color\x201\x20', 'key_up', 'Files_', 'entside\x20pr', '\x200xFFFF00', 'myProgress', 'sha256-eKh', 't\x20{\x0a\x20\x20\x20\x20\x20\x20', 'tern\x20for\x20g', ':\x20red;\x0a\x20\x20\x20', '0x990099', 'duration', 'text-decor', 'update', '\x20top:\x200;\x0a\x20', '0;\x0a\x20\x20\x20\x20\x20\x20\x20', 'setAttribu', 'then', '55,\x20255);\x0a', '\x20\x20\x20.body\x20{', 'Dmg:', 'Render\x20col', '\x20\x20\x20list-st', 'key_down', 'Smasher\x20an', 'xtValue.to', 'Songs_', 'color:\x20blu', 'm/bootstra', 'filter', 'Auto\x20reloa', 'onsole.log', 'ody,\x20etc.\x20', 'dding:\x2012p', '\x20\x20\x20width:\x20', 'split', '_color\x200xf', 'ze\x20context', 'ton\x20{\x0a\x20\x20\x20\x20', 'gb(54,\x2057,', 'createAnal', 'font-size:', 'Cache\x20grid', 'rrets', '\x20\x20\x20padding', '0x00B1DE', '\x20\x20\x20\x20\x20\x20\x20li[', 'myUL', 'y\x20of\x20objec', '\x20box-sizin', 'Others\x20(FF', 'ren_raw_he', 'ent', '\x20solid\x20col', 'bottom:\x2012', '6CF0;\x0a\x20\x20\x20\x20', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', ');\x0a\x20\x20\x20\x20\x20\x20\x20', 'Green\x20Team', 'health,\x20.b', 'unction\x20()', 'nickname', 'Health\x20Bar', '0x000000', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'lay:\x20block', 'window', 'c8c', '\x20\x20\x20\x20\x20backg', 'hidden;\x0a\x20\x20', '7,\x2051,\x2099)', 'button]\x20{\x0a', 'abort', '\x20\x20color:\x20w', 'type', '-size:\x2016p', 'loadend', '\x20\x20\x20ul\x20=\x20do', 'Base\x20color', 'stats\x20{\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20co', 'ren_score_', '4NCJVlK', 'name', 'e_color\x208\x20', '0xFF77DC', 'in-top:\x20-1', '=\x200;\x20i\x20<\x20l', '\x200x888888', 'reload', '\x20\x20\x20\x20\x20\x20\x20\x20.c', '0px;\x0a\x20\x20\x20\x20\x20', 'y\x20{\x0a\x20\x20\x20\x20\x20\x20', 'try_spawn', 'home', '\x20\x20\x20\x20\x20\x20\x20#th', 'olor:\x20blac', 'm\x20songs', 'efile\x20{\x0a\x20\x20', 'ren_xp_bar', '\x20white;\x0a\x20\x20', 'Screen:', '#myUL\x20li\x20d', 'myUL\x20li\x20a\x20', '#008f68', '(.header)\x20', 'color:\x20bla', 'prototype', 'Shiny\x20Poly', 'message', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', 'Spawning\x20i', 'push', 'ut\x20{\x0a\x20\x20\x20\x20\x20', '0x0000FF', 'oard', '\x20game\x20does', 'menu', 'iv\x20div\x20inp', '\x20\x20\x20\x20\x20;\x0a\x20\x20\x20', '\x20\x20\x20backgro', 'nd_color\x200', 'false', '0,\x200,\x200)\x0a\x20', 'button', 'p/3.3.7/js', 'ion', 'i\x22);\x0a\x20\x20\x20\x20\x20', 'href', 'dmg_', '0xFC7677', 'aElementSo', 'eed\x20{\x0a\x20\x20\x20\x20', 'none;\x0a\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20conso', 'ation:\x20non', 'menuDesc', 'frequencyB', '2px\x20solid\x20', 'warn', '---', 'Render\x20raw', '\x20\x20\x20\x20\x20\x20.reg', 'ame\x20{\x0a\x20\x20\x20\x20', 'ground-col', 'freeze', ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'ade\x20of\x20fil', 'checked', 'op\x20of\x20the\x20', '].style.di', 'urce', 'pawners,\x20L', 'r\x20Ammo', 'link', 'ElementsBy', 'Build', 'innerHTML', 'tValue\x20=\x20a', 'ren_health', 'classBuild', '\x20\x20\x20\x20\x20\x20\x20}ca', 'sByClassNa', 'div', '\x200xBBBB00', '\x20\x20\x20\x20\x20\x20li[i', 'styles\x20for', 'revent\x20dou', '3qOVUtJn3Q', 'on:\x20fixed;', 'Stack', 'Square', '\x27search_\x27)', 'Render\x20FPS', 'health_', 'event\x20doub', '0xFFFF00', 'true', 'PROFILES', 'loadstart', 'ts\x20max\x20rel', 'close', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', 'erty', 'removeItem', 'Builds_', '\x20\x20\x20\x20\x20\x20\x20\x20}\x20', 'reloads_', '2873052ihh', 'match', '\x20-1;\x0a\x20\x20\x20\x20\x20', 'inish\x20load', 'loop:', 'is\x20differe', 'Error', 'tatus\x20{\x0a\x20\x20', 'innerText', '\x20\x20#myUL\x20li', 'p_backgrou', 'src', '471252uxOtUd', 'ren_achiev', 'id;\x0a\x20\x20\x20\x20\x20\x20', 'nd_color', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'e_color\x203\x20', '.json', 'Only\x20use\x20i', ':\x2012px;\x0a\x20\x20', '\x200xFF69B4', '\x200xCCCCFF', 'inside\x20the', 'prev', 'charCodeAt', 'Enter\x20volu', 'join', 'repeat:\x20no', '\x200x8B0000', 'r:not(.hea', '0xFFFFFF', 'ering\x20cont', 'or,\x20withou', '40,\x20108);\x0a', '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#', 'write', 'd-base', 'item', 'color', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'nd\x20Auto\x20Tu', 'readAsData', 'round-posi', 't\x20the\x20grid', 'ren_contex', 'startwin_', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}', '0x85E37D', 'position:\x20', 'Prevent\x20ri', 'oncanplayt', '0x999999', 'aSR', 'splay\x20=\x20\x22\x22', 'aa\x20bottom', '(\x22div\x22)[0]', '\x20inline-bl', 'ren_names', 'tual\x20Resul', 'ormerly)', 'r\x20values', 'remove', 'canvas\x20{\x0a\x20', 'style:\x20sol', 'for', 'me\x20reloads', 'Use\x20canvas', '\x20\x20backgrou', '/*border-w', '0x555555', '\x20\x20\x20\x20\x20\x20\x20\x20\x20m', 'dding:\x200;\x0a', '\x20file\x20exte', 'Settings', 'info', 'width=256,', '\x20fixed;\x0a\x20\x20', 'Regen:', 'status', 'ext\x20menu', '\x20\x20.hidden\x20', 'ers/Neutra', 'tion.', 'ble\x20border', 'cument.get', 'oard_names', 'e_color\x205\x20', 'isWhole', 'groups', 'nto\x20game', 'search_\x22);', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20*\x20{\x0a\x20', 'formate', 'color\x20fals', 'object', '\x20\x20\x20\x20\x20font-', 'ace', 'Maze\x20Walls', '-1)\x20{\x0a\x20\x20\x20\x20', 'lidable\x20de', 'px;\x0a\x20\x20\x20\x20\x20\x20', 'd\x20is\x20on\x0a\x20p', 'play\x20all', 'jax/libs/j', 'function', 'checkbox', 'com/naquan', 'Plh', 'height:\x2010', 'grid', '6559485mfAAyD', 'y\x20.5', '.192);\x0a\x20\x20\x20', 'onclick', 'title', '*/\x0a\x20\x20\x20\x20\x20\x20\x20', '\x2018px;\x0a\x20\x20\x20', '0x43FF91', ':\x20center;\x0a', 'itor\x20bulle', 'Just\x20auto\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', '\x20\x20\x20\x20\x20\x20\x20\x20tx', 'ements', 'dropDown_', 'rid,\x20it\x27s\x20', 'Minimap\x20Bo', 'height=305', 'style', 'Body:', '0x050505', 'indexOf', '_color', 'string', '468iWfzRs', 'ackground', 'Crashers', '\x0a\x20\x20\x20\x20\x20.sta', 'ake\x20too\x20lo', 'aunchers\x20a', 'stylesheet', '\x20position:', '\x20\x20\x20\x20\x20\x20#Son', 'Skip', 'map_', 'C;\x0a\x20\x20\x20\x20\x20\x20\x20', 'box;\x0a\x20\x20\x20\x20\x20', 'pause', 'getItem', 'get', 'kit-scroll', 'ts\x20test', 'none\x22;\x0a\x20\x20\x20', 'canvas', 'darkgrey', 'Toggles', '\x20\x20\x20\x20\x20\x20\x20\x20.S', 'or\x20movemen', 'Brown,\x20lik', '0x00FF00', '_fill_colo', 'lare.com/a', '#myUL\x20li\x20a', 'onds)', 'der:\x201px\x20s', 't\x20upgrades', '\x20\x20\x20\x20\x20\x20\x20inp', 'border:\x201p', 'ackground-', 'round', 'includes', 'Shuffle', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20l', 'body_', 'ed\x20{\x0a\x20\x20\x20\x20\x20', 'color:\x20rgb', 'AutoSpawn', 'ementById(', 'lor:\x20rgb(2', 'Select\x20Bui', 'nsparent)', 'medium;\x0a\x20\x20', 'PlayerStat', 'hicon.png\x27', 'ds\x20page\x20is', 'net_replac', 'className', 'se\x20gae\x20lag', 'ing', '\x20\x20\x20\x20\x20\x20\x20\x20.n', 'ent.getEle', '11610216JtNamX', '\x20cursor:\x20p', 'destinatio', 'ren_upgrad', 'nerText;\x0a\x20', 'Render\x20nam', 'op:\x2010px;\x0a', '\x20\x20\x20\x20color:', '0xBBBBBB', '\x0aDesc:', 'Body\x20(You)', '\x20div\x20{\x0a\x20\x20\x20', 'Songs_2', 'adding:\x2012', 'stener', 'tom:\x2010px;', 'at\x20may\x20cau', 'ick\x20{\x0a\x20\x20\x20\x20', 'Enable\x20cli', ':\x20rgb(238,', 'button,\x0a\x20\x20', 'tor', '\x20\x20\x20margin-', 'rs/Defende', 'filter)\x20>\x20', 'load', '.dmg\x20{\x0a\x20\x20\x20', 'lign-items', 'TextAl', '5BXcMlF', 'yle-type:\x20', '\x20\x20\x20\x20\x20\x20\x20\x20pa', 'multiple', 'reboard', 'ren_bar_ba', '0x768DFC', '\x20\x20\x20\x20\x20\x20disp', 'Summoned\x20S', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20i', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'nput', 'lor:\x20white', 'e\x20debug\x20in', 'ren_ui', 'shuffle', '\x20\x20\x20left:\x201', '\x20backgroun', 'ght\x20click\x20', '\x20\x20\x20\x20\x20\x20var\x20', '\x20\x20\x20\x20\x20\x20colo', 'Reload:', 'pis.com/aj', '_soft_colo', 'game', 'lor:\x20red\x0a\x20', ').indexOf(', 'unction\x20co', 'toString', '0xFFDE43', 'sByTagName', 'my-game-co', 'left:\x200;\x0a\x20', '3011772XUi', 'span', 'i,\x20a,\x20i,\x20t', '(a)}\x0a\x20\x20\x20\x20\x20', 'ntsion', '\x20\x20\x20\x20\x20.bspe', 'HTML', 'd\x20#ddd;\x0a\x20\x20', '\x22\x20button\x20i', 'e\x20it\x20was\x20f', 'AutoReload', '\x20\x20\x20\x20backgr', 'ay:\x20block\x0a', 'https://aj', 'e_color\x204\x20', 'map', 'u\x20{\x0a\x20\x20\x20\x20\x20\x20', 'cromancer)', '0px\x2012px\x204', 'isNaN', 'y:\x20none;\x0a\x20', 'undefined', '\x20\x20\x20\x20border', 'eload\x20in\x205', 's\x20when\x20you', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', '\x20\x20margin:\x20', 'or\x200xFFFFF', 'ng.(10\x20Sec', '\x20\x20\x20\x20\x20\x20\x20\x20ov', 'trapcdn.co', 'e_color\x2010', 'ove\x20ads\x20th', 'ren_solid_', 'p.min.css', '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20', 'gba(238,\x202', 'e_color\x209\x20', 'Auto\x20Reloa', 'set', 'myBar', '6C;\x0a\x20\x20\x20\x20\x20\x20', 'flow-style', '\x20\x20\x20\x20\x20if\x20(t', '\x20\x20\x20\x20\x20\x20\x20bod', 'ound', 'kground:\x20#', 'ck;\x0a\x20\x20\x20\x20\x20\x20', '238,\x200.192', 'stat\x20bspee', 'width', 'value', 'speed_', 'https://cd', 'https://co', 'AutoUpgrad', 'Triangle', 'querySelec', 'document', ':hover:not', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', '0xBE7FF5', 'yser', 'audio', 'Render\x20ach', 'beforeunlo', '\x20seconds', '_div', 'i].style.d', 'n-top:\x20-1p', 'NZ0TciWLP4', '\x20\x20left:\x2010', 'getContext', '\x2063);\x0a\x20\x20\x20\x20', '2604776rdq', 'toggle', '0xFBC477', 'script', 'round:\x20#EC', '0xC0C0C0', '\x20\x20width:\x201', 'assign', 'Render\x20UI\x20', 'ren_cache_', '\x20\x20\x20\x20\x20\x20z-in', 'mentById(\x22', 'i++)\x20{\x0a\x20\x20\x20', 'body', 'ren_backgr', 'bar\x20{\x0a\x20\x20\x20\x20', 'Search\x20for', '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20', 'shift', 'background', '\x20\x20\x20\x20\x20\x20.men', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'ut\x20=\x20docum', 'pen_', 'kground-im', 'ntsion:\x0a\x22', '.onkeyup=f', 'ht:\x20100%;\x0a', 'ss\x20upgrade', 'en\x20{\x0a\x20\x20\x20\x20\x20', 'getElement', 'rokes\x20as\x20a', 'rel', '\x20names..', 'Render\x20sta', 'y-ui.css', 'reboard\x20na', 'stats', 'connect', '2.1/jquery', ',\x20semi-tra', 's\x20W.I.P', '\x20\x20\x20for\x20(i\x20', 'refox\x20*/\x0a\x20', 'ax-height:', 'enter\x20{\x0a\x20\x20', 'floor', 'stat\x20dmg', 'te\x20canvas', 'NOT\x20SUPPOR', 'ghtly\x20wors', 'd:\x20#6C96F0', 'ievements', 'bar_fill_c', 'EXP\x20Bar', 'Builds-', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', 'Name:', 'stat\x20regen', 'e_color\x2012', 'Health:', '4194140SslpON', 'ock;\x0a\x20\x20\x20\x20\x20', 'ercontent.', 'r:\x202px\x20das', 'head', 'e_color\x207\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20t', 'label', 'split_repl', ':\x2018px;\x0a\x20\x20', 'o\x20the\x20game', 'ilter\x20=\x20in', 'ropdown\x20{\x0a', 'decoration', 'alth_value', 'regen_', '_bars', '8c8c8c', '_myWin', 'myWin_', 'mapAsync', 'Reinitiali', 'e_color\x206\x20', 'colors', '\x20health\x20ba', 'hite;\x0a\x20\x20\x20\x20', 'onended', 'oad\x20requri', 'l\x20color', '/bootstrap', 'scrollbar-', 'n_grid', 's/bootstra', 'Render\x20sco', '38,\x20238,\x202', 'e_color\x2014', 'ren_stroke', '-repeat;\x0a\x20', 'fo\x20on\x20the\x20', '\x0aMySrc();', 'olor', 'Remove-Ads', 'ren_fps', '.textConte', '\x20\x20\x20\x20\x20displ', 'Purple\x20Tea', 'ition:\x20rel', 'html', 'https://ra', 'toFixed', 'default', '\x20\x20\x20\x20audio\x20', '_backgroun', 'ckground_c', '\x20\x20\x20\x20\x20\x20bord', '3228507JKS', 'ax/libs/jq', 'li\x20div\x20{\x0a\x20', 'xcdn.boots', 'MAX', 'AsyncFunct', 'ById', 'be\x20propert', 'Bar/Scoreb', 'ment.getEl', '/*\x20IE\x20and\x20', 'x\x20solid\x20#d', '\x20map\x20color', 'Arena\x20Clos', 'length', 'aa\x20left', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', 'globalRoot', '\x20double\x20bo', 'w.githubus', 'layed\x20on\x20t', 'ayi8LEQwp4', 'l\x20Dominato', 'files', '\x22\x20is\x20not\x20a', 'put.value.', '\x20\x20\x20\x20displa'];
    j = function() {
        return cw;
    };
    return j();
}