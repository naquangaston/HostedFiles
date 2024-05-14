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
var b7 = z;
(function(aj, ak) {
    var b4 = z,
        al = aj();
    while (!![]) {
        try {
            var am = parseInt(b4(0x3d8)) / 0x1 + -parseInt(b4(0x265)) / 0x2 + parseInt(b4(0x3d5)) / 0x3 + -parseInt(b4(0x2f2)) / 0x4 + -parseInt(b4(0x517)) / 0x5 * (parseInt(b4(0x304)) / 0x6) + parseInt(b4(0x3f4)) / 0x7 * (-parseInt(b4(0x2e0)) / 0x8) + parseInt(b4(0x23a)) / 0x9;
            if (am === ak) break;
            else al['push'](al['shift']());
        } catch (an) {
            al['push'](al['shift']());
        }
    }
}(q, 0xbbf1f));

function G(aj) {
    return new Promise(ak => setTimeout(ak, aj));
}

function H() {
    var b5 = z;
    return [...document[b5(0x2c8) + 'sByTagName'](b5(0x2a6))][b5(0x223)](aj => aj['remove']());
}

function I(aj = this['t']) {
    return !!aj && !aj['closed'];
}

function J(aj, ak = null, al, am) {
    var b6 = z,
        an;
    null == ak && (ak = aj);
    try {
        al && window[aj][b6(0x3f3)]();
    } catch (ao) {
        window[aj] = null;
    }
    try {
        I(window[aj]) ? (globalRoot[ak] = open('', b6(0x27a), 'width=256,' + b6(0x2ba)), globalRoot[ak]['window']['document'][b6(0x3e6)][b6(0x48d)] = '', globalRoot[ak][b6(0x378)][b6(0x21c)][b6(0x3b9)][b6(0x48d)] = '') : (window[aj] = an = open(am, b6(0x27a), b6(0x3b7) + b6(0x2ba)), an['document'][b6(0x33a)](ag[b6(0x456)]['outerHTML']));
    } catch (ap) {}
    return globalRoot[ak] = globalRoot[aj], an;
}

function K(aj, ak = document[b7(0x3e6)]) {
    var b8 = b7;
    if (ak['id'] === aj) return ak;
    if (ak['shadowRoot']) {
        const al = K(aj, ak[b8(0x496)]);
        if (al) return al;
    }
    for (const am of ak[b8(0x2d8)]) {
        const an = K(aj, am);
        if (an) return an;
    }
    return null;
}

function L(aj, ak) {
    var b9 = b7;
    new CustomLog(aj)[b9(0x4f9)](ak);
}

function M() {
    var ba = b7;
    L(ba(0x338), a6[ba(0x43f)]), P['update'] && P['update'](a6[ba(0x43f)]);
}
const O = GM_getValue(b7(0x329)) || {},
    P = {
        'update': function(aj) {}
    };
!(function() {
    var bb = b7;
    Object[bb(0x25b)](this || arguments[0x0], {
        'o': class {
            constructor(aj) {
                var bc = bb;
                this[bc(0x472)] = {
                    'body': aj || bc(0x248),
                    'color': 'darkgrey',
                    'size': bc(0x30d)
                }, this['body'] = {
                    'color': bc(0x410),
                    'size': bc(0x30d)
                };
            }['i'](aj) {
                var bd = bb;
                this[bd(0x472)][bd(0x3e6)] = aj;
            }['l']({
                color: aj,
                size: ak
            }) {
                var be = bb;
                aj !== undefined && (this['title'][be(0x45a)] = aj), ak !== undefined && (this['title'][be(0x446)] = ak);
            }['u']({
                color: aj,
                size: ak
            }) {
                var bf = bb;
                aj !== undefined && (this[bf(0x3e6)][bf(0x45a)] = aj), ak !== undefined && (this[bf(0x3e6)][bf(0x446)] = ak);
            }['log'](aj = '') {}
        }
    });
}(window[b7(0x4df)] || window)), set_convar = window[b7(0x228)] = function(aj, ak) {
    var bg = b7;
    input[bg(0x228)](aj, ak);
}, execute = window[b7(0x47a)] = function(aj) {
    var bh = b7,
        ak = (aj[bh(0x431)](/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i) || {
            'groups': {}
        })['groups'],
        al = (aj[bh(0x2cf)]('\x20'), function(am) {
            var bi = bh;
            const an = am[bi(0x500)],
                ao = am[bi(0x426)];
            for (let ap = 0x0; ap < otherStuff[bi(0x281)]['length']; ap++) {
                let {
                    index: aq,
                    name: ar
                } = otherStuff[bi(0x281)][ap];
                if (aq == an && ao == ar) return ap;
            }
        }(ak));
    null != al && (colors[otherStuff[bh(0x281)][al][bh(0x375)]] = '#' + ak[bh(0x526)][bh(0x431)](/(0x|#)(?<hex>[\w]+)/i)['groups']['p'], otherStuff[bh(0x281)][al][bh(0x2fe)] = otherStuff[bh(0x281)][al]['m'] || otherStuff[bh(0x281)][al][bh(0x233)], otherStuff[bh(0x281)][al]['m'] = ak['value'][bh(0x4c3) + 'e'](), otherStuff[bh(0x281)][al]), input[bh(0x47a)](aj);
};
class Q {
    ['h'](aj) {
        var bj = b7,
            ak, al, am, an, ao, ap, aq, ar, as;
        this['_'] = aj, ak = 0x0, this['v'] = '', al = aj['F'], am = aj['k'], an = aj[bj(0x3e6)], ao = aj['S'], ap = aj['B'], aq = aj['T'], ar = aj['D'], as = aj[bj(0x2f8)];
        for (let at = 0x0; at <= 0x7; at++) {
            at < aq && ak < 0x22 && (this['v'] += '6', ak++), at < ao && ak < 0x22 && (this['v'] += '4', ak++), at < ap && ak < 0x22 && (this['v'] += '5', ak++), at < ar && ak < 0x22 && (this['v'] += '7', ak++);
        }
        for (let au = 0x0; au <= 0x7; au++) {
            au < as && ak < 0x22 && (this['v'] += '8', ak++);
        }
        for (let av = 0x0; av <= 0x7; av++) {
            av < al && ak < 0x22 && (this['v'] += '1', ak++), av < am && ak < 0x22 && (this['v'] += '2', ak++), av < an && ak < 0x22 && (this['v'] += '3', ak++);
        }
    }
}

function q() {
    var cF = ['238,\x200.192', 'checked', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'execute', 'input\x20{\x0a\x20\x20', 'aa\x20bottom', 'cument.get', '_bars', 'm/bootstra', 'Render\x20col', 'e();\x0a\x20\x20\x20\x20\x20', 'checkWin_', ':\x20none;\x0a\x20\x20', 'ren_ui', '\x20\x20\x20\x20\x20.bspe', 'button', '\x200x333231', 'chooseFile', '\x200x595959', '2.1/jquery', '\x20\x20\x20\x20\x20;\x0a\x20\x20\x20', 'background', 'innerHTML', '\x20\x20\x20\x20\x20\x20\x20\x20\x20;', 'ts\x20Vary,\x20s', '#myUL\x20li\x20d', 'dmg_', '\x20\x20-ms-over', '\x20loading\x20t', 'EXP\x20Bar', 'd-color:\x20r', 'shadowRoot', 's\x20too\x20low[', 'd:\x20#EEB690', 'unction\x20()', 'then', 'button]\x20{\x0a', 'ter,\x20ul,\x20l', 'rgb(255,\x202', '\x20\x20\x20\x20\x20margi', 'px;\x0a\x20\x20\x20\x20\x20\x20', 'speed_', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20#', 'ing', 'ng:\x2012px\x202', 'rgb(152,\x202', 'setItem', '\x20\x20\x20\x20\x20text-', 'e\x20debug\x20in', 'startwin_', 'ent', 'ax.googlea', '\x20names..', '0x00F46C', ');\x0a\x20\x20\x20\x20\x20\x20\x20', 'button,\x0a\x20\x20', 'lth\x20bars', 'body_', 'stat\x20healt', ':\x20center;\x0a', 'update', 'ove\x20ads\x20th', ':\x20red;\x0a\x20\x20\x20', '\x200x8B0000', 'se\x20gae\x20lag', '\x20backgroun', '\x20\x20\x20\x20\x20\x20\x20\x20\x20m', ',\x20semi-tra', ':\x201px\x20soli', '\x20inline-bl', '\x20\x20\x20\x20\x20\x20widt', 'lidable\x20de', 'ren_fps', '\x20\x20\x20.body\x20{', 'stat\x20regen', 'ntainer', 'toUpperCas', 'a\x20=\x20li[i].', '0x00FF00', 'html', '0xBBBBBB', 't_reinitia', '\x20\x20\x20\x20\x20\x20marg', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x200xBBBB00', '-\x2020px);\x0a\x20', '2239692OFl', 'gb(54,\x2057,', 'Render\x20FPS', 'string', '\x20createPat', '-repeat;\x0a\x20', '\x20\x20\x20}\x0a\x20\x20\x20\x20}', '\x0a\x20\x20\x20\x20conso', '0%;\x0a\x09\x09\x09\x09\x09\x09', 'stat\x20bspee', '\x20\x20\x20\x20#myInp', 'undefined', 'rel', '\x200x777777', '\x27search_\x27)', 'toArray', 's\x20*/\x0a\x20\x20\x20\x20\x20', 'reloads_', 'globalRoot', '\x2063);\x0a\x20\x20\x20\x20', 'gs_2\x20{\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20/*\x20P', 'remove', 'ui_prevent', 'r:not(.hea', 'setAttribu', '\x20\x20#myUL\x20li', 'p/3.3.7/cs', '\x20without\x20f', '_myWin', '0xC0C0C0', ':\x2012px;\x0a\x20\x20', 'onchange', '%;\x0a\x20\x20\x20\x20\x20\x20\x20', 'Render\x20UI\x20', 'tton]:hove', 'https://ra', 'r\x20Ammo', 'yser', '\x20position:', 'https://aj', 'input,\x20fil', '7,\x2051,\x2099)', 'Plh', 'log', 'y:\x20none;\x0a\x20', '\x20\x20border:\x20', '0xFFBBBB', '0xFF77DC', 'isWhole', 'color:\x20blu', 'index', '\x20(Making\x20G', 'st\x20Passed\x27', 'ementById(', 'collisions', '\x20\x20\x20\x20\x20\x20li[i', '/jquery.mi', 'readAsData', 's/bootstra', 'Prevent\x20ri', 'append', 'ren_patter', 'Just\x20auto\x20', 'e_color\x2010', 'nd\x20Auto\x20Tu', 'onclick', 'fillRect', 't_movement', 'com/ui/1.1', 'olid\x20#ddd;', 'eeing\x20as\x20t', 'left:\x200;\x0a\x20', 'Arena\x20Clos', '6347530vZpiUV', '.192);\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20', 'currentTim', 't\x20given\x20co', '6C;\x0a\x20\x20\x20\x20\x20\x20', '2873052ihh', '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20}\x20', 'Render\x20hea', 'my-game-co', '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'Regen:', 'or,\x20withou', 'h\x20section)', 'value', '\x20\x20\x20\x20\x20backg', 'kground\x20as', 'Cache\x20grid', 'checkbox', 'onds)', 'Purple\x20Tea', 'calc(100%\x20', 'ayi8LEQwp4', 'beforeunlo', 'map', '.min.js', 'fillStyle', 'https://co', 'gaston/Hos', 'lare.com/a', 'Use\x20canvas', '0xFFFF00', '\x20\x20\x20\x20backgr', '\x20\x20\x20\x20\x20\x20heig', '3qOVUtJn3Q', '\x20\x20\x20\x20\x20\x20bord', '\x20fixed;\x0a\x20\x20', '0x0000FF', 'server\x20sta', '55,\x20255);\x0a', 'innerText', 'tch(err){c', '0%;\x0a\x20\x20\x20\x20\x20\x20', 'm\x20songs', '\x20\x20\x20\x20\x20\x20\x20.sp', 'search_\x22);', '6CF0;\x0a\x20\x20\x20\x20', 'erty', 'aa\x20left', 'Barrels,\x20S', '\x20map\x20color', 'length', '\x20\x20\x20\x20\x20\x20\x20\x20\x20t', '0px\x2012px\x204', 't\x20{\x0a\x20\x20\x20\x20\x20\x20', 'https://ma', 'nerText;\x0a\x20', 'e_color\x2011', 'e_color\x207\x20', 'pop', 'ievements', 'tual\x20Resul', '(238,\x20238,', 'Edge\x20*/\x0a\x20\x20', 'ren_xp_bar', 'e_color\x2015', 'stat\x20speed', 'ng.(10\x20Sec', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20i', 'hlc', 'placeholde', 'dd;\x0a\x20\x20\x20\x20\x20\x20', 'xFFFFFF', '_div', 'ropdown\x20{\x0a', 'ace', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', '\x20.server_n', '0xFFFFFF', 'volume', 'dropDown_', 'gba(238,\x202', 'faster\x20but', 'getItem', '0x85E37D', 'document', 'href', 'sha256-eKh', 'nput', '\x20\x20\x20list-st', 'NZ0TciWLP4', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', 'forEach', 'splay\x20=\x20\x22\x22', 'x\x20solid\x20#d', 'Songs_', 'forEachAsy', 'set_convar', '0x00B1DE', 'Remove-Ads', 'oard\x20Backg', 'e_color\x209\x20', 'includes', 'r:\x202px\x20das', '/*\x20IE\x20and\x20', 'sByTagName', ':hover:not', 'ements', 'default', '0x000000', 'me\x20reloads', '\x20\x20\x20\x20\x20*\x20{\x0a\x20', 'scrollbar-', '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20', 'ze\x20context', '34780815KHNePv', 'aElementSo', 'json', '\x20looks\x20sli', 'margin-top', 'true', 'ackground-', '\x20\x20\x20\x20\x20borde', 'c8c', 'lign-items', 'ren_raw_he', 'e_color\x2017', 'play', 'd\x20is\x20on\x0a\x20p', '---', 'ts\x20test', '\x20\x20\x20\x20\x20\x20\x20\x20ba', 'de.jquery.', 'ound_color', 'Green\x20Team', 'xtValue;\x0a\x20', '\x20on\x20separa', 'ry{\x0a\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20pos', 'audio', 'ackground', 'stylesheet', '_backgroun', 'querySelec', 'or\x200xFFFFF', 'none;\x0a\x20\x20\x20\x20', 'Shuffle', 'pen\x20{\x0a\x20\x20\x20\x20', 'assign', 'createElem', 'Render\x20ach', 'com/jquery', 'build', '\x20solid\x20col', 'myWin_', 'e_color\x202\x20', 'eed\x20{\x0a\x20\x20\x20\x20', 't\x20the\x20grid', '577074ElpiBp', 'rders\x20*/\x0a\x20', '40,\x20108);\x0a', 'ren_solid_', 'Red\x20Team', 'abort', 'ren_border', 'ade\x20of\x20fil', '\x20\x20\x20\x20\x20/*\x20Pr', 'e_color\x200\x20', 'pause', '/*border-w', 'op:\x2010px;\x0a', 'Render\x20nam', '\x20\x20\x20\x20\x20\x20\x20bac', 'cromancer)', '2px\x20solid\x20', '\x20spawn\x20int', 'key_down', 'refox\x20*/\x0a\x20', 'ren_scoreb', 'PROFILES', '-size:\x2016p', 'or\x20movemen', 'push', 'loop', 'Build', 'olor:black', 'colors', 'innerWidth', 'k;\x0a\x20\x20\x20\x20\x20\x20\x20', 'send', '\x20\x20\x20for\x20(i\x20', '\x20box-sizin', '\x0aDesc:', 'duration', 'URL', ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'p_backgrou', 'stats_show', 'change', 'er-width:\x20', '\x20//\x20Your\x20f', '\x20\x20margin:\x20', 'AutoSpawn', 'h:\x2050%;\x0a\x20\x20', 'Files_', '\x20\x20color:\x20w', 'en\x20{\x0a\x20\x20\x20\x20\x20', 'ANm', 'getByteFre', 'anonymous', 'e_color\x2013', 'g:\x20border-', 'e\x20you\x20stat', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20f', 'aSR', 'none\x22;\x0a\x20\x20\x20', 'Builds_', '0x43FF91', 'file', 'ren_minima', 'reload', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', 'le\x20borders', 'iframe', 'AutoReload', 'menuDesc', 'ntsion', 'nickname', 'myUL', 'e\x20it\x20was\x20f', 'files', '0x89FF69', 'Songs_2', 't\x20upgrades', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', '0x999999', 'target', '\x20black;\x0a\x20\x20', '0x050505', 'off', 'destinatio', 'mes', 'ren_backgr', 'height=305', 'Triangle', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', 'namedItem', '/css/searc', '\x20\x20\x20\x20\x20\x20colo', 'dius:\x208px;', 'indexOf', 'Spawning\x20i', 'lay:\x20block', 'classBuild', '].style.di', 'play\x20all', 'ntsion:\x0a\x22', 'getElement', '0xFFE869', 'body::-web', 'dding:\x2012p', 'Fallen\x20Bos', 'hidden;\x0a\x20\x20', 'le.log(\x27Te', 'split', 'olor', '\x20\x20\x20\x20\x20\x20z-in', '/*\x20Prevent', '0xD68163', 'mentById(\x22', 'Body:', 'e_color\x204\x20', 'pawners,\x20L', 'children', '\x20\x20\x20\x20\x20\x20\x20}ca', ',50)', 'nt\x20for\x20eac', 'key_up', 'Brown,\x20lik', 'i].style.d', 'Green\x20Tria', '24geoGar', 'apply', '#000', 'result', 'der:\x201px\x20s', 'play\x20custo', 'Minimap', 'link', 'kground-im', 'ren_stats', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'he\x20border\x20', 'de\x20here\x0a\x20\x20', 'und:\x20#F06C', 'random', 'Select\x20Bui', 'sByClassNa', 'menu', '4679132hDPKvP', 'prototype', 'ren_health', 'stener', 'total', 'y\x20of\x20objec', 'speed', 'AsyncFunct', '\x20\x20\x20backgro', '\x20\x20\x20\x20\x20\x20\x20bot', '\x20-1;\x0a\x20\x20\x20\x20\x20', 'TextAl', 'prev', 'width:\x20100', 'nd_color', 'i\x20=\x20ul.get', '\x20\x20\x20\x20\x20\x20\x20\x20.n', 'Square', '6RfpnZl', 'https://cd', 'font-size:', 'Smasher\x20an', 'oard', 'ren_bar_ba', 'round:\x20#EC', '\x20\x20\x20\x20\x20\x20\x20\x20tx', 'kground-co', '1rem', 'lor:\x20red\x0a\x20', 'net_replac', '/bootstrap', 'revent\x20dou', '\x20\x20\x20\x20\x20\x20\x20li[', ':width\x202s\x0a', 'Type\x20in\x20a\x20', 'Minimap\x20Bo', 'AutoUpgrad', '.onkeyup=f', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', 'try_spawn', '0xF14E54', '#dropDown_', 'queryui/1.', 'color:\x20bla', 'rgb(', 'quencyData', 'tern\x20for\x20g', '\x20\x20\x20\x20\x20\x20#Son', 'flow-style', 'nd_color\x200', 's\x20if\x20FPS\x20i', 'ren_score_', 'isAsync', 'Pen:', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', 'Settings', '\x20\x20\x20\x20\x20\x20\x20\x20.c', 'y\x20{\x0a\x20\x20\x20\x20\x20\x20', 'isNaN', '\x20\x20\x20\x20\x20\x20.reg', 'Render\x20som', '\x20\x20\x20border-', 'ren_cache_', 's\x20when\x20you', 'keys', 'Render\x20raw', 'd_color', 'be\x20propert', 'der)\x20{\x0a\x20\x20\x20', 'toggle', 'Screen:', 'd;\x0a\x20\x20\x20\x20\x20\x20\x20', 'write', 'ick\x20{\x0a\x20\x20\x20\x20', 'rrets', 'lor:\x20rgb(2', '\x20\x20\x20\x20;\x0a\x20\x20\x20\x20', '\x20\x20display:', '\x20.regen,\x20.', 'toString', 'respawn', 'false', 'item', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', '\x20\x20\x20\x20\x20displ', 'stack\x20pred', '\x2018px;\x0a\x20\x20\x20', 'loadstart', 'order:\x201px', 'ckground:\x20', 'n.js', 'className', '\x20double\x20bo', 'net_predic', ':\x20rgb(238,', '\x20\x20.hidden\x20', 'size:\x2018px', '3011772XUi', '\x20\x20\x20\x20\x20\x20\x20\x20\x20a', 'shift', 'stats', 'Health:', 'type', 'i.length;\x20', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'event\x20doub', 'color:\x20rgb', 'ut[type=bu', 'join', 'Reload:', 'ment.getEl', 'stat\x20body', 'utside\x20the', 'round-posi', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', '\x20\x20\x20\x20border', 'e_color\x205\x20', 'f\x20your\x20(ga', 'ren_grid_c', 'e_color\x203\x20', ':\x20rgba(0,\x20', 'n-top:\x20-1p', 'hrough', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.', '\x20solid\x20#dd', '*/\x0a\x20\x20\x20\x20\x20\x20\x20', 'innerHeigh', 'Base\x20color', 'tion.', '\x20\x20left:\x2010', '0x555555', 'for', 'nt\x20||\x20a.in', 'createAnal', 'window', 'ren_debug_', 'Dmg:', '#myUL\x20li\x20a', '_color', '0,\x200,\x200)\x0a\x20', 'toggles', '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20', 'Render\x20sco', '0xCDCDCD', 'li\x20div\x20{\x0a\x20', 'at\x20may\x20cau', 'r_intensit', 'inCount', 'e_color\x2014', '\x20map\x20(over', '\x0a\x20\x20\x20\x20\x20.sta', 'e_color', 'label', '\x20div\x20{\x0a\x20\x20\x20', 'r\x20Bases', '5BXcMlF', 'gmG', '0;\x0a\x20\x20\x20\x20\x20\x20\x20', 'ton\x20{\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20font-', 'getContext', 'ody,\x20etc.\x20', 'ss\x20upgrade', '\x200xFF69B4', 'myProgress', '\x20\x20\x20\x20\x20\x20\x20inp', 'warn', 'gons\x20(Gree', 'div', '\x20\x20backgrou', 'jax/libs/j', 'Styles', 'Stack', 'lor:\x20white', 'Render\x20bac', 'loadend', '=\x200;\x20i\x20<\x20l', 'o\x20the\x20game', '-1)\x20{\x0a\x20\x20\x20\x20', 'ative;\x0a\x20\x20\x20', 'ock;\x0a\x20\x20\x20\x20\x20', 'load', '_soft_colo', 'xtValue.to', 'yle-type:\x20', '\x20seconds', 'frequencyB', 'y-ui.css', 'progress', 'isArray', 'inside\x20the', 'on:\x20fixed;', 'ering\x20cont', 'e_color\x2016', 'Auto\x20reloa', 'ext\x20menu', 'MAX', 'width=256,', 'tor', 'head', '\x20\x20\x20\x20\x20\x20disp', 'tatus\x20{\x0a\x20\x20', 'n\x20Pentagon', '\x20supported', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', 'hed\x20rgb(87', '\x20file\x20exte', 'kit-scroll', '\x20\x20\x20\x20\x20\x20\x20\x20di', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}', 'span', '\x20\x20\x20\x20\x20\x20\x20bod', 'error', 'formate', '_solid_col', 'er:\x202px\x20so', 'rder', 'function', 'canvas', '\x20\x20width:\x201', 'rs/Defende', 'ren_achiev', '\x20\x20\x20\x20\x20\x20\x20\x20.d', '\x200xCCCCFF', '40ZrktiR', 'hicon.png\x27', 'bar_fill_c', '266118xvZCSo', 'filter', 'e\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '852309UkbKMv', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20l', 'Builds-', 'Previous', 'health,\x20.b', ',\x20167,\x2012)', 'dding:\x200;\x0a', 'map_', 'efile\x20{\x0a\x20\x20', 'TED', 'p/3.3.7/js', 'ngle,\x20Gree', 'Reinitiali', 'src', 'body', 'ercontent.', '\x20\x20\x20\x20\x20\x20\x20bor', 'repeat', '\x20\x20\x20margin-', 'r:\x20white;\x0a', 'tom:\x2010px;', 'net_force_', 'upgrade', 'search_', 'floor', 'onsole.log', 'Auto\x20Reloa', 'close', '3051769aGaRvj', '\x20\x20\x20\x20positi', 'func\x20must\x20', 'UpperCase(', 'erflow-x:\x20', 'Render\x20sta', '\x20\x20\x20\x20\x20/*\x20Fi', 'Enter\x20volu', 'ilter\x20=\x20in', 'decoration', '\x20\x20\x20\x20\x20paddi', 'transition', 'width', 'ax/libs/jq', 'xcdn.boots', 'TagName(\x22l', 'style', '\x20\x20\x20\x20audio\x20', 'te\x20canvas', 'd:\x20#6C96F0', 'ById', 'PlayerStat', 'Enable\x20cli', 'ed\x20{\x0a\x20\x20\x20\x20\x20', 'unction\x20co', 'loading', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', 'status', '#008f68', 'addEventLi', '0xFFDE43', '\x2012px;\x0a\x20\x20\x20', 'health_', '\x20238,\x20238)', '2604776rdq', 'iv\x20div\x20inp', 'reen\x20Team\x20', '0x768DFC', 'roke_soft_', 'game', '\x20\x20\x20width:\x20', '12.1/jquer', '\x20\x20\x20\x20\x20\x20\x20\x20ov', 'ckground_c', '0xFC7677', 'filter)\x20>\x20', 'For\x20ren_st', 'age\x20will\x20r', 'Speed:', 'd\x20Dominato', 'name', 'Only\x20use\x20i', 'Others\x20(FF', 'pen_', 'entside\x20pr', 'Toggles', 'kground:\x20#', 'myUL\x20li\x20a\x20', 'urce', '\x20\x20\x20\x20displa', 'hasFocus', 'match', '9A6CF0;\x0a\x20\x20', 'njs.cloudf', 'olor:\x20blac', 'nsparent)', '3228507JKS', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'l\x20color', '\x20\x20z-index:', 's\x20W.I.P', 'styles\x20for', 'NOT\x20SUPPOR', 'No\x20descrip', 'nput[type=', 'screen', 'home', '0px;\x0a\x20\x20\x20\x20\x20', 'repeat:\x20no', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '.json', 'ame\x20{\x0a\x20\x20\x20\x20', 'size', '\x200x888888', 'tion:\x2010px', 'd\x20#ddd;\x0a\x20\x20', 'Warning', 'adding:\x2012', '_right_cli', 'height', 'onended', '87969ZAwmK', 'op\x20of\x20the\x20', 'e_color\x201\x20', '\x20border-ra', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'ay:\x20block\x0a', '\x20\x20\x20\x20\x20\x20\x20\x20co', 'element', 'height:\x2010', 'e_color\x2012', 'p.min.css', 'color', 'isplay\x20=\x20\x22', 'ElementsBy', ':\x20-1px;\x0a\x20\x20', '\x20Backgroun', 'The\x20area\x20o', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'lor:\x20rgba(', 'createMedi', 'bottom:\x2012', 'ut\x20=\x20docum', 'fftSize', 'idth:\x201px;', 'multiple', 'ble\x20border', 'trapcdn.co', 'ion', 'script', 'set', 'd-base', 'ren_stroke', 'message', 'Maze\x20Walls', '_fill_colo', 'title', '\x20238);\x0a\x20\x20\x20', 'Renders\x20st', 'input', '_color\x200xf'];
    q = function() {
        return cF;
    };
    return q();
}
class U {
    constructor(aj) {
        var bk = b7;
        aj && this[bk(0x337)]();
    }#
    e = !0x1;
    [b7(0x337)]() {
        this.#e = !this.#e;
    }
    get[b7(0x40f)]() {
        return this.#e;
    }
    set[b7(0x40f)](aj) {
        this.#e = !!aj;
    }
}
class V {
    static get['N']() {
        return new V('br');
    }
    constructor(aj, ak) {
        var bl = b7;
        this[bl(0x456)] = aj['constructo' + 'r'][bl(0x426)]['includes']('HTML') && aj || (function() {
            var bm = bl;
            for (let al in arguments[0x1]) {
                arguments[0x0][bm(0x4e6) + 'te'](al, arguments[0x1][al]);
            }
            return arguments[0x0];
        }(document[bl(0x25c) + bl(0x4a9)](aj), ak));
    }[b7(0x404)](aj) {
        for (let ak in aj) {
            this['element']['style'][ak] = aj[ak];
        }
        return this;
    }[b7(0x50a)](aj, ...ak) {
        var bn = b7;
        this[bn(0x456)][bn(0x50a)](aj['element'] || aj);
        for (let al = 0x0; al < ak['length']; al++) {
            let am = ak[al];
            this[bn(0x456)][bn(0x50a)](am[bn(0x456)] || am);
        }
        return this;
    }['A'](aj) {
        var bo = b7;
        return (aj['element'] || bo(0x4d0) == typeof aj ? document['querySelec' + bo(0x3b8)](aj) : aj)['append'](this[bo(0x456)]), this;
    }['on'](aj, ak) {
        var bp = b7;
        return this[bp(0x456)]['on' + aj] = ak, this;
    }['set'](aj, ak) {
        var bq = b7;
        return this[bq(0x456)][aj] = ak, this;
    }[b7(0x4e3)]() {
        var br = b7;
        return this[br(0x456)][br(0x4e3)](), this;
    }['get']() {
        return this['element'][arguments[0x0]];
    }
    get[b7(0x2d8)]() {
        var bu = b7;
        return new class {
            constructor(aj) {
                var bs = z;
                for (var ak = 0x0; ak < aj[bs(0x1fa)]; ak += 0x1) {
                    this[ak] = aj[ak];
                }
                Object['defineProp' + bs(0x1f6)](this, bs(0x1fa), {
                    'get': function() {
                        var bt = bs;
                        return aj[bt(0x1fa)];
                    }
                }), Object['freeze'](this);
            }[bu(0x344)](aj) {
                return null != this[aj] ? this[aj] : null;
            }[bu(0x2bd)](aj) {
                var bv = bu;
                for (var ak = 0x0; ak < this['length']; ak += 0x1) {
                    if (this[ak]['id'] === aj || this[ak][bv(0x426)] === aj) return this[ak];
                }
                return null;
            }
            get[bu(0x4dc)]() {
                return [...this];
            }
        }([...this[bu(0x456)][bu(0x2d8)]]);
    }
}
const {
    t: W,
    C: X,
    R: Y,
    j: Z,
    P: a0,
    O: a1,
    L: a2
} = [null, null, null, null, function(aj, ak) {
    var bw = b7;
    localStorage[bw(0x4a5)](aj, ak);
}, function(aj) {
    var bx = b7;
    return localStorage[bx(0x21a)](aj);
}, function(aj) {
    var by = b7;
    let ak = {};
    return aj[by(0x223)](function(al) {
        ak[al] || (ak[al] = !0x0);
    }), Object[by(0x332)](ak);
}], a3 = new U(0x1), a4 = new U(), a5 = new U(), a6 = document[b7(0x256) + b7(0x3b8)](b7(0x46d)), a7 = new V(b7(0x2e7))[b7(0x46c)](b7(0x4d9), b7(0x254))[b7(0x46c)](b7(0x21d), b7(0x1fe) + 'xcdn.boots' + b7(0x469) + b7(0x47f) + b7(0x4e8) + b7(0x508) + b7(0x459)), a8 = new V('link')[b7(0x46c)](b7(0x4d9), b7(0x254))[b7(0x46c)](b7(0x21d), b7(0x305) + b7(0x433) + b7(0x535) + b7(0x39c) + b7(0x31c) + b7(0x41d) + b7(0x3ad)), a9 = new V(b7(0x46b), {
    'integrity': b7(0x21e) + b7(0x52e) + 'NKxN+CfCh+' + b7(0x53a) + b7(0x221) + '=',
    'crossorigin': b7(0x298)
})[b7(0x46c)](b7(0x3e5), b7(0x533) + 'de.jquery.' + b7(0x25e) + '-3.7.1.js'), aa = new V(b7(0x46b))[b7(0x46c)](b7(0x3e5), b7(0x533) + b7(0x24b) + b7(0x512) + b7(0x48a) + '-ui.js'), ab = new V('script')[b7(0x46c)](b7(0x3e5), b7(0x1fe) + b7(0x402) + 'trapcdn.co' + 'm/bootstra' + b7(0x3e2) + b7(0x310) + b7(0x531)), ac = new V(b7(0x46b))[b7(0x46c)]('src', b7(0x4f5) + b7(0x4aa) + 'pis.com/aj' + b7(0x401) + 'uery/3.6.0' + b7(0x506) + b7(0x34c)), ad = new V('style')[b7(0x46c)](b7(0x48d), b7(0x388) + b7(0x1fd) + b7(0x539) + 'ht:\x20100%;\x0a' + b7(0x453) + b7(0x3cd) + b7(0x4d5) + b7(0x3ff) + b7(0x313) + b7(0x364) + b7(0x36d) + 'stats\x20{\x0a\x20\x20' + b7(0x453) + b7(0x457) + b7(0x49f) + b7(0x4bd) + b7(0x292) + b7(0x2bc) + b7(0x3c5) + b7(0x32b) + b7(0x2bf) + b7(0x3eb) + b7(0x453) + b7(0x492) + b7(0x322) + b7(0x483) + b7(0x453) + b7(0x22f) + b7(0x206) + b7(0x453) + b7(0x237) + 'width:\x20non' + b7(0x318) + b7(0x3fa) + b7(0x278) + b7(0x453) + '\x20backgroun' + b7(0x495) + b7(0x4ce) + b7(0x4e0) + b7(0x41e) + b7(0x3f8) + b7(0x2cd) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20img' + b7(0x28a) + b7(0x4ae) + '\x20\x20\x20\x20\x20\x20.men' + 'u\x20{\x0a\x20\x20\x20\x20\x20\x20' + b7(0x53b) + b7(0x3c9) + 'lid\x20red;\x0a\x20' + b7(0x453) + b7(0x452) + b7(0x2c0) + b7(0x460) + b7(0x32f) + 'style:\x20sol' + 'id;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + b7(0x28e) + 'medium;\x0a\x20\x20' + b7(0x2bc) + '\x20\x20\x20\x20\x20\x20\x20but' + b7(0x390) + b7(0x455) + b7(0x33d) + b7(0x4f7) + b7(0x3c3) + b7(0x2ea) + b7(0x47b) + b7(0x453) + b7(0x270) + b7(0x466) + b7(0x36f) + b7(0x241) + b7(0x22e) + b7(0x3bf) + b7(0x3dd) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20color:' + '\x20white;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x48c) + b7(0x36a) + b7(0x37d) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + b7(0x302) + b7(0x445) + b7(0x455) + b7(0x30e) + b7(0x2b1) + '\x20\x20\x20\x20\x20\x20\x20\x20.S' + b7(0x3bb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x4ff) + b7(0x3d7) + b7(0x238) + b7(0x214) + b7(0x33b) + ('\x20\x20\x20\x20\x20\x20\x20\x20co' + b7(0x39f) + b7(0x3c3) + b7(0x2ea) + b7(0x2ca) + b7(0x3c1) + 'bar\x20{\x0a\x20\x20\x20\x20' + b7(0x3c2) + 'splay:\x20non' + b7(0x318) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + b7(0x351) + b7(0x4ca) + b7(0x42f) + b7(0x4fa) + b7(0x2b1) + b7(0x3d0) + b7(0x211) + b7(0x453) + b7(0x33f) + b7(0x4bc) + b7(0x3a6) + b7(0x251) + 'ition:\x20rel' + b7(0x3a5) + b7(0x519) + b7(0x321) + b7(0x4e1) + b7(0x4b9) + 'ax-height:' + '\x20444px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20#th' + b7(0x3e0) + b7(0x453) + 'position:\x20' + 'fixed;\x0a\x20\x20\x20' + b7(0x1fb) + b7(0x271) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x373) + b7(0x49f) + b7(0x2d1) + 'dex:\x20100;\x0a' + b7(0x364) + b7(0x4a1) + 'canvas\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x4f4) + b7(0x53c) + b7(0x453) + b7(0x515) + b7(0x453) + '\x20top:\x200;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20width:\x2010' + b7(0x1f1) + b7(0x539) + 'ht:\x20100%;\x0a' + b7(0x453) + b7(0x439) + b7(0x2fc) + b7(0x40e) + b7(0x405) + b7(0x4ca) + b7(0x3f5) + b7(0x3b1) + b7(0x460) + '\x20\x20\x20left:\x201' + b7(0x441) + b7(0x2fb) + b7(0x3ec) + b7(0x460) + b7(0x41c) + b7(0x52d) + b7(0x4cc) + b7(0x2b1) + b7(0x32a) + 'enter\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x2ff) + b7(0x4ee) + '\x20\x20\x20\x20\x20color' + b7(0x4b5) + b7(0x354) + b7(0x243) + b7(0x4b2) + b7(0x364) + b7(0x20b) + b7(0x43e) + b7(0x49b) + b7(0x453) + b7(0x4fb) + b7(0x275) + b7(0x49d) + b7(0x53f) + b7(0x453) + b7(0x294) + 'hite;\x0a\x20\x20\x20\x20' + b7(0x51e)) + (b7(0x236) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x286) + b7(0x29a) + 'box;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + b7(0x4d7) + 'ut\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20bac' + b7(0x2e8) + 'age:\x20url(\x27' + b7(0x2be) + b7(0x3d3) + b7(0x4ad) + b7(0x527) + b7(0x363) + b7(0x448) + b7(0x413) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + b7(0x240) + b7(0x442) + b7(0x4d2) + b7(0x453) + '\x20width:\x2010' + b7(0x1f1) + '\x20\x20\x20\x20\x20\x20font' + b7(0x27b) + b7(0x3be) + b7(0x3fe) + b7(0x4a3) + b7(0x1fc) + b7(0x441) + b7(0x3e8) + b7(0x2e4) + b7(0x513) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x3ea) + b7(0x463) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + b7(0x437) + '\x20\x20\x20#myUL\x20{' + b7(0x460) + b7(0x220) + b7(0x3aa) + b7(0x258) + '\x20\x20\x20\x20\x20\x20\x20\x20pa' + b7(0x3de) + b7(0x453) + b7(0x290) + b7(0x38f) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + b7(0x4e7) + b7(0x38b) + b7(0x213) + b7(0x34a) + b7(0x36e) + b7(0x339) + b7(0x49e) + b7(0x36b) + b7(0x3be) + b7(0x26d) + b7(0x35b) + b7(0x2a5) + '\x20*/\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20back' + 'ground-col' + 'or:\x20rgba(2' + '38,\x20238,\x202' + '38,\x200.192)' + b7(0x479) + b7(0x33e) + '\x20\x20\x20\x20\x20\x20\x20\x20pa' + b7(0x2cb) + b7(0x3be) + b7(0x4a6) + b7(0x3fd) + ':\x20none;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x306) + b7(0x348) + b7(0x2a4) + b7(0x434) + b7(0x283) + b7(0x346) + b7(0x454) + b7(0x364) + b7(0x4a1) + b7(0x42d) + b7(0x4ca) + b7(0x365) + b7(0x4bb) + b7(0x449) + b7(0x453) + b7(0x23e) + b7(0x45d) + b7(0x453) + b7(0x2d2) + b7(0x34e) + b7(0x266) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (b7(0x4b8) + 'd-color:\x20r' + b7(0x218) + '38,\x20238,\x200' + b7(0x518) + b7(0x48e) + b7(0x460) + '\x20\x20\x20padding' + b7(0x4ec) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'text-decor' + 'ation:\x20non' + b7(0x318) + b7(0x391) + b7(0x352) + b7(0x479) + '\x20\x20\x20\x20color:' + b7(0x2b4) + b7(0x453) + 'display:\x20b' + 'lock\x0a\x20\x20\x20\x20\x20' + b7(0x40e) + '\x20\x20\x20\x20#myUL\x20' + b7(0x382) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20cursor:\x20p' + 'ointer;\x0a\x20\x20' + b7(0x453) + 'border:\x201p' + b7(0x225) + b7(0x20e) + b7(0x4c9) + 'in-top:\x20-1' + b7(0x49f) + b7(0x4e2) + b7(0x311) + b7(0x468) + b7(0x4dd) + '\x20\x20\x20\x20\x20\x20\x20bac' + b7(0x30c) + b7(0x461) + '238,\x20238,\x20' + b7(0x477) + b7(0x4ad) + b7(0x48b) + b7(0x328) + b7(0x44b) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20text' + '-decoratio' + 'n:\x20none;\x0a\x20' + b7(0x453) + '\x20font-size' + ':\x2018px;\x0a\x20\x20' + b7(0x453) + b7(0x31d) + 'ck;\x0a\x20\x20\x20\x20\x20\x20' + b7(0x3ba) + b7(0x2c3) + b7(0x3c3) + b7(0x2ea) + b7(0x37b) + b7(0x231) + '(.header)\x20' + b7(0x4ca) + b7(0x538) + 'ound-color' + b7(0x350) + b7(0x415) + b7(0x479) + b7(0x443) + b7(0x490) + b7(0x417) + b7(0x35d) + b7(0x4f0) + b7(0x4e5) + b7(0x336) + b7(0x213) + 'ackground-' + b7(0x35c) + b7(0x205) + b7(0x473) + b7(0x2a4) + b7(0x280) + b7(0x479) + '}\x0a')), ae = new V(b7(0x39a))[b7(0x46c)](b7(0x34d), b7(0x521) + b7(0x4c2))[b7(0x50a)](new V('a')[b7(0x46c)](b7(0x1ef), '\x20'), new V('h2')['set'](b7(0x1ef), b7(0x2e5) + b7(0x1f2)), new V(b7(0x475))[b7(0x46c)](b7(0x358), b7(0x2a1))['set'](b7(0x467), '')[b7(0x46c)]('id', 'chooseFile'), new V('br'), new V('br'), new V(b7(0x39a))['set']('id', b7(0x396))[b7(0x50a)](new V('div')['set']('id', 'myBar')[b7(0x50a)](new V(b7(0x3c4))[b7(0x46c)]('id', b7(0x2fd)))), new V('br'), new V(b7(0x39a))[b7(0x46c)]('id', b7(0x293)), new V('div')[b7(0x46c)]('id', b7(0x226)), new V(b7(0x39a))[b7(0x46c)]('id', b7(0x2af)), new V(b7(0x3cc))[b7(0x46c)]('id', b7(0x3cc)), new V('hr'), new V('div')[b7(0x46c)]('className', b7(0x2f1))[b7(0x46c)]('id', b7(0x2f1))[b7(0x50a)](new V('h2')[b7(0x46c)](b7(0x1ef), 'Menu-')), new V('br'), new V('hr'), new V('br'), new V(b7(0x39a))[b7(0x46c)](b7(0x34d), b7(0x2f1))[b7(0x46c)]('id', b7(0x29f))['append'](new V(b7(0x404))[b7(0x46c)]('innerHTML', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20/*\x20CSS\x20' + b7(0x43b) + b7(0x340) + b7(0x3dc) + b7(0x393) + b7(0x36f) + b7(0x32d) + b7(0x295) + b7(0x453) + b7(0x4b8) + b7(0x498) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x522) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'health\x20{\x0a\x20' + b7(0x453) + b7(0x527) + b7(0x30a) + b7(0x1f5) + b7(0x364) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x4c0) + b7(0x460) + b7(0x273) + b7(0x42c) + b7(0x432) + b7(0x453) + b7(0x443) + b7(0x485) + b7(0x40b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x4b8) + b7(0x407) + b7(0x479) + b7(0x522) + b7(0x345) + b7(0x25a) + b7(0x453) + b7(0x39b) + 'nd:\x20#F0D96' + 'C;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + b7(0x453) + '.dmg\x20{\x0a\x20\x20\x20' + b7(0x453) + b7(0x2fa) + b7(0x2ed) + b7(0x51c) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20.reloads\x20' + b7(0x4ca) + b7(0x24a) + b7(0x34b) + b7(0x4a4) + b7(0x267) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + b7(0x35a) + b7(0x1f3) + b7(0x263) + b7(0x453) + b7(0x39b) + 'nd:\x20#6CF0E' + 'C;\x0a\x20\x20\x20\x20\x20\x20\x20' + b7(0x222) + '\x20\x20\x20\x20\x20'), new V('h2')['set'](b7(0x1ef), b7(0x3da)), new V('div')['set']('id', b7(0x28c))[b7(0x50a)](new V(b7(0x39a))[b7(0x50a)](new V(b7(0x3c4))[b7(0x46c)]('innerText', b7(0x523)), new V(b7(0x3c4))[b7(0x46c)](b7(0x34d), 'regen_'))[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), 'stats')[b7(0x50a)](new V(b7(0x39a))['set'](b7(0x34d), b7(0x4c1)))), new V(b7(0x39a))['append'](new V(b7(0x3c4))['set']('innerText', b7(0x357)), new V('span')[b7(0x46c)](b7(0x34d), b7(0x414)))[b7(0x50a)](new V(b7(0x39a))['set'](b7(0x34d), b7(0x356))[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), b7(0x4b1) + 'h'))), new V(b7(0x39a))['append'](new V('span')[b7(0x46c)](b7(0x1ef), b7(0x2d5)), new V('span')[b7(0x46c)](b7(0x34d), b7(0x4b0)))[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)]('className', b7(0x356))['append'](new V('div')[b7(0x46c)](b7(0x34d), b7(0x361)))), new V('div')['append'](new V(b7(0x3c4))[b7(0x46c)](b7(0x1ef), 'BSpeed:'), new V('span')[b7(0x46c)](b7(0x34d), 'bspeed_'))['append'](new V(b7(0x39a))['set'](b7(0x34d), b7(0x356))['append'](new V(b7(0x39a))['set'](b7(0x34d), b7(0x4d6) + 'd'))), new V(b7(0x39a))['append'](new V(b7(0x3c4))[b7(0x46c)]('innerText', b7(0x327)), new V(b7(0x3c4))[b7(0x46c)](b7(0x34d), b7(0x429)))['append'](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), 'stats')[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), 'stat\x20pen'))), new V('div')[b7(0x50a)](new V(b7(0x3c4))[b7(0x46c)](b7(0x1ef), b7(0x37a)), new V(b7(0x3c4))[b7(0x46c)]('className', b7(0x491)))[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), 'stats')['append'](new V(b7(0x39a))['set'](b7(0x34d), 'stat\x20dmg'))), new V(b7(0x39a))[b7(0x50a)](new V(b7(0x3c4))['set'](b7(0x1ef), b7(0x35f)), new V(b7(0x3c4))['set'](b7(0x34d), b7(0x4de)))[b7(0x50a)](new V(b7(0x39a))['set']('className', b7(0x356))[b7(0x50a)](new V('div')['set'](b7(0x34d), 'stat\x20reloa' + 'ds'))), new V('div')[b7(0x50a)](new V(b7(0x3c4))[b7(0x46c)](b7(0x1ef), b7(0x424)), new V(b7(0x3c4))[b7(0x46c)](b7(0x34d), b7(0x4a0)))[b7(0x50a)](new V(b7(0x39a))[b7(0x46c)](b7(0x34d), 'stats')[b7(0x50a)](new V(b7(0x39a))['set'](b7(0x34d), b7(0x209))))), new V('hr'), new V('input')[b7(0x46c)]('id', b7(0x3ef))[b7(0x46c)](b7(0x20d) + 'r', 'Search\x20for' + b7(0x4ab))[b7(0x46c)](b7(0x472), b7(0x314) + b7(0x426)), new V('br'), new V('br'), new V('ul')['set']('id', 'myUL'))), af = new V(b7(0x46b))[b7(0x46c)](b7(0x48d), b7(0x4d4) + b7(0x2ce) + b7(0x502) + ')\x0a\x20\x20\x20\x20docu' + b7(0x360) + b7(0x503) + b7(0x4db) + b7(0x317) + b7(0x499) + b7(0x37f) + b7(0x28f) + b7(0x40c) + b7(0x2ec) + '\x20\x20\x20\x20\x20\x20var\x20' + b7(0x4f6) + b7(0x49c) + 'i,\x20a,\x20i,\x20t' + b7(0x24e) + b7(0x397) + b7(0x464) + 'ent.getEle' + b7(0x2d4) + b7(0x1f4) + b7(0x29c) + b7(0x3fc) + 'put.value.' + 'toUpperCas' + b7(0x481) + '\x20\x20\x20ul\x20=\x20do' + b7(0x47d) + 'ElementByI' + 'd(\x22myUL\x22);' + b7(0x3d9) + b7(0x301) + b7(0x45c) + b7(0x403) + 'i\x22);\x0a\x20\x20\x20\x20\x20' + b7(0x285) + b7(0x3a2) + b7(0x359) + 'i++)\x20{\x0a\x20\x20\x20' + b7(0x1fb) + b7(0x250) + b7(0x453) + b7(0x4c4) + b7(0x2c8) + b7(0x230) + '(\x22div\x22)[0]' + b7(0x479) + b7(0x30b) + 'tValue\x20=\x20a' + '.textConte' + b7(0x376) + b7(0x1ff) + b7(0x453) + '\x20\x20\x20\x20\x20if\x20(t' + b7(0x3a9) + b7(0x3f7) + ').indexOf(' + b7(0x421) + b7(0x3a4) + b7(0x453) + b7(0x505) + b7(0x2c5) + b7(0x224) + b7(0x479) + b7(0x51f) + 'else\x20{\x0a\x20\x20\x20' + b7(0x453) + b7(0x312) + b7(0x2de) + b7(0x45b) + b7(0x29e) + b7(0x453) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + b7(0x2d9) + b7(0x1f0) + b7(0x3f1) + '(a)}\x0a\x20\x20\x20\x20\x20' + b7(0x4d3) + ';\x0a'), ag = new V(b7(0x4c6))[b7(0x50a)](new V('head')['append'](a7, a8, a9, aa, ab, ac, ad), new V(b7(0x3e6))[b7(0x50a)](ae, af, new V(b7(0x46b))['set']('innerHTML', function() {
    var bP = b7;

    function aj(az) {
        return !!(az || this)[aq(0xe9)](/[A-Z_$a-z]/gi);
    }

    function ak(az) {
        return !!(az || this)[aq(0xe9)](/[\(\{\[]/gi);
    }

    function al(az) {
        return !!(az || this)[aq(0xe9)](/[\]\}\)]/gi);
    }

    function am(az) {
        return !!(az || this)[aq(0xe9)](/[0-9]/gi);
    }

    function an(az) {
        var bz = z;
        return !!(az || this)[bz(0x431)](/[\r\n]/gi);
    }

    function aj(az) {
        return !!(az || this)[aq(0xe9)](/[A-Z_$a-z]/gi);
    }

    function ao(az) {
        return !!(az || this)[aq(0xe9)](/ /gi);
    }

    function ap() {
        var bA = z,
            az = aq,
            aA = au[as];
        ay[az(0xe1)] = aA['t'], document[az(0xfb)] = aA[bA(0x426)], ay[az(0x108)] = function() {
            var bB = bA,
                aB = az;
            ay[aB(0xe1)] = null, as++, aA = au[as], ay[bB(0x3e5)] = aA['t'], document[bB(0x472)] = aA[aB(0xc9)];
        };
    }

    function aq(az, aA) {
        var aB = ar();
        return (aq = function(aC, aD) {
            return aB[aC -= 0xaf];
        })(az, aA);
    }

    function ar() {
        var bC = z,
            az = [bC(0x3c7), bC(0x3e1), bC(0x2cf), bC(0x48d), bC(0x358), bC(0x288), bC(0x3e9), bC(0x289), 'mapAsync', bC(0x252), 'Skip', bC(0x25b), bC(0x34d), bC(0x488), bC(0x3fb), bC(0x3d2), bC(0x31e), bC(0x532), bC(0x282), bC(0x51a), bC(0x2a1), bC(0x326), bC(0x51d) + bC(0x38e), bC(0x2f5), bC(0x26a), bC(0x2f9), bC(0x43c), bC(0x44d), bC(0x411), bC(0x446), bC(0x223), bC(0x27d), bC(0x259), bC(0x38d), bC(0x408), 'includes', bC(0x465), 'map', bC(0x510), bC(0x227), bC(0x400), bC(0x4cd) + bC(0x296), bC(0x392), bC(0x426), bC(0x3a1), bC(0x2b6), bC(0x3ae), bC(0x3d6), bC(0x436) + bC(0x29d), bC(0x385), bC(0x216), bC(0x202), bC(0x2fd), bC(0x2ad), bC(0x50a), bC(0x3c6), bC(0x2e3), 'random', bC(0x297), bC(0x486), bC(0x3ac), bC(0x4d8), bC(0x370), bC(0x462), bC(0x2f6), bC(0x23b), 'loop:', 'src', 'pause', bC(0x36c), bC(0x28d), 'shuffle', bC(0x212), 'floor', 'constructo', bC(0x431), bC(0x31f), bC(0x475), '\x20file\x20exte', bC(0x2b7), bC(0x50f), 'length', '\x22\x20is\x20not\x20a', bC(0x2c8), 'span', bC(0x3a7), 'createElem', bC(0x341), bC(0x49a), 'href', 'Cant\x20forma', bC(0x377), 'toFixed', 'title', bC(0x3af), bC(0x2c7), '\x22\x20button\x20i', bC(0x44f) + 'G', 'The\x20\x22', bC(0x2f3), bC(0x4a9), bC(0x404), bC(0x507), bC(0x3cb), bC(0x3db), 'canvas', bC(0x44e), bC(0x2c1), bC(0x246), 'myBar', 'connect', bC(0x35e), bC(0x3bd), 'loop', bC(0x1ef), bC(0x51b), bC(0x416) + bC(0x4f8), bC(0x353) + bC(0x20c), bC(0x4f3), '201188lJwZ' + 'XE', 'oncanplayt', 'split_repl'];
        return (ar = function() {
            return az;
        })();
    }
    var as, at, au, av, aw = aq;
    ! function(az, aA) {
        var bD = z;
        for (var aB = aq, aC = az();;) {
            try {
                if (0xa3444 === parseInt(aB(0x115)) / 0x1 + parseInt(aB(0xc7)) / 0x2 + -parseInt(aB(0xff)) / 0x3 * (-parseInt(aB(0x127)) / 0x4) + -parseInt(aB(0xbf)) / 0x5 * (parseInt(aB(0x113)) / 0x6) + -parseInt(aB(0xb4)) / 0x7 + parseInt(aB(0x112)) / 0x8 + -parseInt(aB(0xce)) / 0x9) break;
                aC[bD(0x27d)](aC[bD(0x355)]());
            } catch (aD) {
                aC['push'](aC[bD(0x355)]());
            }
        }
    }(ar), av = 0x64,
        function() {
            var bK = z;

            function az(aH, aI) {
                var bE = z,
                    aJ, aK = aq,
                    aL = 0x0,
                    aM = '',
                    aN = [typeof String(), aK(0x105), aK(0x105)];
                if (![aN[aK(0x109)](typeof this), aN[aK(0x109)](typeof aH)][bE(0x3d6)](aO => !(aO < 0x0))[aK(0xef)]) throw aK(0xf8) + aK(0x111) + 'de';
                (aJ = (Array[aK(0xfc)](aH || this) ? (aH || this)[aK(0x10d)](aI) : (aN['indexOf'](typeof aH) < 0x0 ? this : aH)[aK(0xf5)]()[aK(0x11a)]('\x20\x20')[aK(0x10d)]('')[bE(0x2cf)]('{')[bE(0x35e)]('{\x0a')[aK(0x11a)]('}')[bE(0x35e)]('\x0a}')[aK(0x11a)]('\x0a\x0a')[aK(0x10d)]('\x0a'))[aK(0x11a)](''))[aK(0xef)];
                for (let aO = 0x0; aO < aJ[aK(0xef)]; aO++) {
                    const aP = aJ[aO],
                        aQ = aJ[aO + 0x1],
                        aR = aJ[aO - 0x1];
                    Number((aO / aJ[aK(0xef)] * 0x64)[aK(0xfa)](0x2)), '\x5c' != aR && ('{' == aP && aL++, '}' == aP && aL--), aL < 0x0 && (aL = 0x0), aM += '\x0a' == aP ? '}' == aQ ? aP + '\x20' [bE(0x3e9)](aL ? aL - 0x1 : aL) : aP + '\x20' [aK(0x11e)](aL) : aP;
                }
                return aM;
            }

            function aA(aH) {
                var bF = z,
                    aI = aq;
                return (aH || this)['constructo' + 'r'][aI(0xc9)][aI(0xc1)](aI(0xb7) + bF(0x46a));
            }

            function aB(aH, aI = null, aJ = '') {
                var bG = z,
                    aK = aq;
                return this[bG(0x2cf)](...(function() {
                    return arguments[0x0] ? [aH, aI] : [aH];
                }(aI)))[aK(0x10d)](aJ);
            }

            function aC() {
                var bH = z;
                return !this[aq(0xf5)]()[bH(0x22d)]('.');
            }

            function aD(aH = []) {
                var bI = z,
                    aI = aq;
                return (aH[aI(0xef)] ? aH : this)[Math[aI(0xe7)](Math[aI(0xd7)]() * (aH[bI(0x1fa)] ? aH : this)['length'])];
            }

            function aE(aH = []) {
                var bJ = z,
                    aI = aq;
                for (let aJ = (aH[aI(0xef)] ? aH : this)[aI(0xef)] - 0x1; aJ > 0x0; aJ--) {
                    const aK = Math[aI(0xe7)](Math[bJ(0x2ee)]() * (aJ + 0x1)),
                        aL = (aH['length'] ? aH : this)[aJ];
                    (aH['length'] ? aH : this)[aJ] = (aH[aI(0xef)] ? aH : this)[aK], (aH['length'] ? aH : this)[aK] = aL;
                }
                return aH[aI(0xef)] ? aH : this;
            }
            var aF = aq,
                aG = (function() {
                    const aH = arguments;
                    return function(aI) {
                        return (aI || this)[aH[0x2][0x0]][aH[0x2][0x1]][aH[0x2][0x2]](aH[0x2][0x3]);
                    };
                }([], [''], [aF(0xe8) + 'r', aF(0xc9), aF(0xc1), aF(0xb7) + 'ion'], [''], [], {}));
            Function[aF(0x101)][aF(0x118)] = az, Function[aF(0x101)][aF(0xb3)] = aA, Function[aF(0x101)][aF(0xb3)] = aG, Number[aF(0x101)][bK(0x4fe)] = aC, Array[aF(0x101)][aF(0xd7)] = aD, Array[aF(0x101)][aF(0xe5)] = aE, String[bK(0x2f3)][aF(0x117) + aF(0xe6)] = aB, Object[aF(0x123)](Object[bK(0x2f3)], {
                'isNumber': am,
                'isLetter': aj,
                'isOpen': ak,
                'isClose': al,
                'isBlank': ao,
                'isLine': an,
                'getType': function(aH) {
                    var aI = aF;
                    return null == typeof(aH || this) ? aI(0xdb) : (aH || this)[aI(0xe8) + 'r'][aI(0xc9)];
                },
                'type_': function() {
                    var aH, aI = aF;
                    const aJ = arguments[0x0] || this;
                    return (aH = [aj, am, ak, al, ao])[aI(0xcd)](aK => !!aK(aJ))[aI(0xc3)](aK => aH[aI(0xc3)](aL => aL[aI(0xc9)])[aI(0x109)](aK[aI(0xc9)]))[0x0];
                }
            }), Object[bK(0x25b)](this, {
                'formate': az,
                'isAsync': aA,
                'isWhole': aC,
                'random': aD,
                'shuffle': aE,
                'split_replace': aB,
                'getError': function(aH, ...aI) {
                    try {
                        aH(...aI);
                    } catch (aJ) {
                        return aJ;
                    }
                }
            }), Object[aF(0x123)](this, {
                'debug': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'error': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'info': function(...aH) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'log': function(...aH) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'warn': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dir': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'dirxml': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'table': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'trace': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'group': function(...aH) {
                    var bL = bK;
                    Date()[bL(0x431)](/[\d:]+/gi)[0x2];
                },
                'groupCollapsed': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'groupEnd': function(...aH) {
                    var bM = bK;
                    Date()[bM(0x431)](/[\d:]+/gi)[0x2];
                },
                'clear': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'count': function(...aH) {
                    Date()['match'](/[\d:]+/gi)[0x2];
                },
                'countReset': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'assert': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profile': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'profileEnd': function(...aH) {
                    var bN = bK;
                    Date()[bN(0x431)](/[\d:]+/gi)[0x2];
                },
                'time': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeLog': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'timeEnd': function(...aH) {
                    var bO = bK;
                    Date()[bO(0x431)](/[\d:]+/gi)[0x2];
                },
                'timeStamp': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                },
                'context': function(...aH) {
                    var aI = aF;
                    Date()[aI(0xe9)](/[\d:]+/gi)[0x2];
                }
            });
        }[bP(0x2e1)](aw(0xdb) == typeof exports ? this['i'] ? exports : aw(0xdb) == typeof window ? this : globalThis || self || window || top : this);
    const ax = document['getElement' + bP(0x408)](aw(0x125));
    Array[aw(0x101)][aw(0xc5) + 'nc'] = async function(az = function() {}) {
        var aA = aw;
        for (let aB = 0x0; aB < this[aA(0xef)]; aB++) {
            await az(this[aB], aB, this[aA(0xef)]);
        }
        return null;
    }, Array[aw(0x101)][aw(0x120)] = async function(az = function() {}) {
        var aA = aw,
            aB = this;
        for (let aC = 0x0; aC < aB[aA(0xef)]; aC++) {
            aB[aC] = await az(aB[aC], aC, aB[aA(0xef)]);
        }
        return aB;
    }, as = 0x0, at = document['getElement' + 'ById'](bP(0x226));
    const ay = new Audio();
    au = [], ay[aw(0xd0)] = 0.3, [
        [aw(0xbe), () => (au[aw(0xe5)](), ay[bP(0x26f)](), ap())],
        [bP(0x2c6), ap],
        [aw(0x122), () => {
            var bQ = bP;
            ay['currentTim' + 'e'] = ay[bQ(0x288)] - 0.1;
        }],
        [aw(0x106), () => {
            var az = aw;
            as -= 0x2, ay[az(0xb1) + 'e'] = ay[az(0x11d)] - 0.1;
        }],
        [aw(0x10a), () => ay[bP(0x246)]()],
        [bP(0x26f), () => ay[aw(0xe2)]()],
        [bP(0x27e), function(az) {
            var bR = bP,
                aA = aw;
            ay[aA(0x10f)] = !ay[bR(0x27e)], az[bR(0x1ef)] = aA(0xe0) + (ay[aA(0x10f)] ? 'on' : aA(0xcb));
        }],
        [aw(0xd0), () => {
            var az = aw;
            ay[az(0xd0)] = prompt(az(0x126) + 'me', '50') / 0x64;
        }]
    ][aw(0xbc)](az => {
        var bT = bP,
            aA = aw,
            aB = aA(0x105) == typeof az[0x1] ? az[0x1] : function() {
                var bS = z,
                    aD = aA;
                alert(aD(0x100) + az[0x0] + (aD(0xfe) + bS(0x43a)));
            },
            aC = document[bT(0x25c) + aA(0x102)](aA(0xd9));
        aC[aA(0x110)] = az[0x0], aC[aA(0xee)] = aB, at[aA(0xd4)](aC);
    }), ay[aw(0x116) + aw(0xe3)] = az => {
        var bU = bP,
            aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM = aw;
        ay[aM(0x10a)]();
        let aN = ay;
        aB = (aA = new AudioContext())[aM(0xdd) + aM(0xdf) + bU(0x42e)](aN), aC = aA[aM(0xf9) + aM(0x114)](), (aD = document[aM(0xf1) + bU(0x408)](aM(0x107)))[aM(0xc6)] = window[aM(0xb0)], aD[aM(0xb9)] = window[aM(0xdc) + 't'], aE = aD[aM(0xc8)]('2d'), aB[aM(0x10c)](aC), aC[aM(0x10c)](aA[aM(0xed) + 'n']), aC[aM(0xc2)] = 0x100, aF = aC[aM(0xda) + aM(0xcf)], aG = new Uint8Array(aF), aH = aD[aM(0xc6)], aI = aD[aM(0xb9)], aJ = aH / aF * 2.5, aL = 0x0, aN[aM(0x10a)](),
            function aO() {
                var bV = bU,
                    aP, aQ, aR, aS = aM;
                for (requestAnimationFrame(aO), aL = 0x0, aC[aS(0xd8) + aS(0xea)](aG), aE[aS(0xaf)] = bV(0x2e2), aE[aS(0xc4)](0x0, 0x0, aH, aI), aP = 0x0; aP < aF; aP++) {
                    aQ = (aK = aG[aP]) + aP / aF * 0x19 - av, aR = aP / aF * 0xfa, 0x32, aE[aS(0xaf)] = aS(0x128) + aQ + ',' + aR + bV(0x2da), aE[aS(0xc4)](aL, aI - aK, aJ, aK), aL += aJ + 0x1;
                }
            }();
    }, ax[aw(0xba) + aw(0xb5)](aw(0xe4), az => {
        var aA = aw;
        (async function(aB, aC, aD = function() {
            return !0x0;
        }) {
            var aE = aq,
                aF = new class {
                    constructor() {
                        this[aq(0xd3)] = [];
                    }[aE(0xbd)](...aH) {
                        var aI = aE;
                        this[aI(0xd3)][aI(0xbd)](...aH);
                    }
                }();
            const aG = (aH => {
                var bW = z,
                    aI = aE,
                    aJ = [];
                for (const aK of aH) {
                    const aL = aK[aI(0xc9)] ? aK['name'] : aI(0xb8) + aI(0x119),
                        aM = aK[aI(0x11c)] ? aK['type'] : 'NOT\x20SUPPOR' + aI(0x119),
                        aN = aK[aI(0xbb)] ? aK[bW(0x446)] : aI(0xb8) + aI(0x119);
                    aJ[aI(0xbd)]({
                        'file': aK,
                        'name': aL,
                        'type': aM,
                        'size': aN
                    });
                }
                return aJ;
            })([...(aB && aB[aE(0xd3)] ? aB[aE(0xd3)] : 0x0) || ax['files']]);
            return aF[aE(0xd3)] = await aG[aE(0xcd)](aD)[aE(0x120)](async(aH, aI, aJ) => {
                var bZ = z,
                    aK, aL, aM, aN, aO = aE;
                const {
                    file: aP,
                    name: aQ,
                    type: aR,
                    size: aS
                } = aH, aT = new FileReader();
                return aL = (aK = await new Promise(aU => {
                    var bY = z;

                    function aV(b0) {
                        var bX = z,
                            b1, b2 = aq,
                            b3 = [aQ, b0[b2(0x11c)] + ':', (b0['loaded'] / b0[b2(0xde)] * 0x64)[b2(0xfa)](0x2) + '%'];
                        document[b2(0xf1) + b2(0xc0)](b2(0xd2))[b2(0x11b)] = b3[0x0], document[b2(0xf1) + bX(0x408)](b2(0x10b))[b2(0x103)]['width'] = b3[0x2], b0[b2(0x11c)], b2(0xf3) === b0[bX(0x358)] && (b1 = aT[b2(0xd6)], aU(b1));
                    }
                    var aW, aX, aY = aq,
                        aZ = document[aY(0xf4) + aY(0x102)](aY(0xf2));
                    aZ[bY(0x34d)] = aY(0xb2), aZ[bY(0x48d)] = aQ, aZ['id'] = aQ, (aW = document[aY(0xf4) + aY(0x102)](aY(0xf2)))[aY(0x124)] = 'progress', aW['innerHTML'] = '0%', aW['id'] = aQ + '%', (aX = aT)[aY(0xba) + aY(0xb5)](bY(0x349), aV), aX[aY(0xba) + aY(0xb5)](aY(0xf3), aV), aX[aY(0xba) + aY(0xb5)](aY(0xca), aV), aX[aY(0xba) + aY(0xb5)](aY(0xcc), aV), aX[aY(0xba) + bY(0x2f5)](aY(0xd5), aV), aX[aY(0xba) + aY(0xb5)](aY(0xb6), aV), aT[aY(0x104) + aY(0x11f)](aP);
                }))[aO(0x11a)](','), aM = aK[bZ(0x431)](/(data):([-\w]+\/[-\w]+);(\w+)/), dt = aL, 'NOT\x20SUPPOR' + aO(0x119) == aR && (aN = aQ[aO(0x11a)]('.')[aO(0xd1)]()[aO(0x11a)]('(')[0x0], new Error(aR + (aO(0xec) + aO(0xfd)) + aN + (aO(0xf0) + aO(0x10e) + (bZ(0x3c0) + bZ(0x2a9))))[bZ(0x426)] = aR), {
                    'file': aP,
                    'name': aQ,
                    'type': aR,
                    'size': aS,
                    'data': dt,
                    'o': aM,
                    'b': aH
                };
            }), aE(0x105) == typeof aC && aC(aF), {
                'files': aF
            };
        }(!0x1, !0x1, aB => aB[aA(0x11c)][aA(0xc1)](aA(0x121)))[aA(0xf6)](aB => {
            var aC = aA;
            aB[aC(0xd3)][aC(0xd3)][aC(0xbc)](aD => {
                var c0 = z,
                    aE = aC,
                    aF = document[aE(0xf4) + aE(0x102)](aE(0xf2));
                aF[c0(0x48d)] = aD[aE(0xc9)], aF[aE(0xf7)] = '', aF[aE(0xee)] = function(aG) {
                    var c1 = c0,
                        aH = aE;
                    ay[c1(0x26f)](), ay['src'] = aD['o'][aH(0xeb)];
                }, au[aE(0xbd)]({
                    'name': aD[aE(0xc9)],
                    't': aD['o']['input']
                });
            });
        }, console[aA(0xd5)]));
    });
}['toString']() + '\x0aMySrc();'))), ah = J(b7(0x261));
globalRoot[b7(0x4ea)] = ah, addEventListener(b7(0x52f) + 'ad', function() {
    ah['close']();
}), globalRoot[b7(0x4a8)] = J, globalRoot[b7(0x482)] = I, (function() {
    let aj = '';
    ! function ak() {
        var c2 = z;
        const al = a6[c2(0x43f)];
        al !== aj && (M(), aj = al), requestAnimationFrame(ak);
    }();
}()), M();

function z(a, b) {
    var c = q();
    return z = function(d, e) {
        d = d - 0x1ef;
        var f = c[d];
        return f;
    }, z(a, b);
}
class ai {
    static get['U']() {
        return document['querySelec' + 'tor']('d-base');
    }
    static['send'](aj) {
        var c3 = b7;
        input[c3(0x277)](aj), input['key_up'](aj);
    }
    static get['nickname']() {
        var c4 = b7;
        return K('username-i' + c4(0x21f))['value'];
    }
    static get['M']() {
        var c5 = b7;
        return c5(0x41b) == this['U']['screen'];
    }
    static get['q']() {
        var c6 = b7;
        return c6(0x356) == this['U'][c6(0x43f)];
    }
    static get['$']() {
        var c7 = b7;
        return c7(0x440) == this['U']['screen'];
    }
    static get[b7(0x43f)]() {
        var c8 = b7;
        return this['U'][c8(0x43f)];
    }
    static['G'](aj) {
        var c9 = b7;
        let ak = () => this[c9(0x43f)];
        return ak == aj || new Promise(al => {
            let am = setInterval(() => {
                ak() == aj && (al(!0x0), clearInterval(am));
            }, 0x1);
        });
    }
    static async ['H'](aj) {
        var ca = b7;
        return this['q'] && (this[ca(0x284)](0xd), await this['G'](ca(0x440))), input[ca(0x319)](this[ca(0x2aa)]), await this['G'](ca(0x41b)), !0x0;
    }
}
_Player = ai, document[b7(0x2c8) + b7(0x2f0) + 'me'](b7(0x1f7))[0x0][b7(0x4e3)](), document['getElement' + b7(0x2f0) + 'me'](b7(0x47c))[0x0][b7(0x4e3)](), otherStuff = {
    'toggles': [{
        'name': b7(0x34f) + b7(0x511),
        'bool': 'true',
        'for': b7(0x40a) + b7(0x42a) + 'ediction\x20f' + b7(0x27c) + 't'
    }, {
        'name': b7(0x3cf) + b7(0x232),
        'bool': b7(0x23f),
        'for': b7(0x25d) + b7(0x203)
    }, {
        'name': b7(0x2b9) + 'ound',
        'bool': b7(0x23f),
        'for': b7(0x3a0) + 'kground[6]'
    }, {
        'name': b7(0x330) + 'grid',
        'bool': b7(0x23f),
        'for': b7(0x529) + b7(0x24f) + b7(0x406)
    }, {
        'name': 'ren_contex' + b7(0x4c8) + 'lization',
        'bool': b7(0x23f),
        'for': b7(0x3e4) + b7(0x239) + b7(0x324) + b7(0x497) + '7]'
    }, {
        'name': b7(0x379) + b7(0x504),
        'bool': 'false',
        'for': b7(0x480) + b7(0x4be) + 'bug\x20info[8' + ']'
    }, {
        'name': 'ren_debug_' + 'info',
        'bool': b7(0x343),
        'for': b7(0x32e) + b7(0x4a7) + 'fo\x20on\x20the\x20' + b7(0x53e) + b7(0x249)
    }, {
        'name': b7(0x4bf),
        'bool': b7(0x343),
        'for': b7(0x4cf)
    }, {
        'name': b7(0x2f4) + '_bars',
        'bool': b7(0x23f),
        'for': b7(0x520) + b7(0x4af)
    }, {
        'name': 'ren_names',
        'bool': b7(0x23f),
        'for': b7(0x272) + 'es'
    }, {
        'name': b7(0x50b) + 'n_grid',
        'bool': b7(0x23f),
        'for': b7(0x536) + b7(0x4d1) + b7(0x320) + 'rid,\x20it\x27s\x20' + b7(0x219) + b7(0x23d) + 'ghtly\x20wors' + 'e'
    }, {
        'name': b7(0x244) + 'alth_value' + 's',
        'bool': b7(0x343),
        'for': b7(0x333) + '\x20health\x20ba' + 'r\x20values'
    }, {
        'name': 'ren_scoreb' + b7(0x308),
        'bool': b7(0x23f),
        'for': 'Render\x20sco' + 'reboard'
    }, {
        'name': b7(0x279) + 'oard_names',
        'bool': 'true',
        'for': b7(0x380) + 'reboard\x20na' + b7(0x2b8)
    }, {
        'name': 'ren_solid_' + b7(0x48c),
        'bool': b7(0x23f),
        'for': b7(0x3a0) + b7(0x528) + b7(0x260) + b7(0x524) + b7(0x264)
    }, {
        'name': b7(0x2e9),
        'bool': b7(0x23f),
        'for': b7(0x3f9) + b7(0x2b0)
    }, {
        'name': b7(0x46e) + b7(0x3a8) + 'r',
        'bool': b7(0x23f),
        'for': b7(0x474) + 'rokes\x20as\x20a' + '\x20darker\x20sh' + b7(0x26c) + b7(0x438)
    }, {
        'name': b7(0x484),
        'bool': b7(0x23f),
        'for': b7(0x4ef) + 'layer'
    }, {
        'name': 'ren_upgrad' + 'es',
        'bool': 'true',
        'for': 'Render\x20cla' + b7(0x394) + 's'
    }, {
        'name': b7(0x4e4) + b7(0x44c) + 'ck',
        'bool': b7(0x23f),
        'for': b7(0x509) + 'ght\x20click\x20' + 'from\x20trigg' + b7(0x3b2) + b7(0x3b5)
    }],
    'colors': [{
        'name': b7(0x30f) + b7(0x389),
        'index': '0',
        'default': '0x555555',
        'for': b7(0x307) + b7(0x425) + b7(0x38c)
    }, {
        'name': 'net_replac' + b7(0x389),
        'index': '1',
        'default': b7(0x2b2),
        'for': b7(0x1f8) + b7(0x2d7) + 'aunchers\x20a' + b7(0x50e) + b7(0x33c)
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '2',
        'default': '0x00B1DE',
        'for': 'Body\x20(You)'
    }, {
        'name': 'net_replac' + b7(0x389),
        'index': '3',
        'default': b7(0x229),
        'for': 'Blue\x20Team'
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '4',
        'default': b7(0x31a),
        'for': b7(0x269)
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '5',
        'default': '0xBE7FF5',
        'for': b7(0x52c) + 'm'
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '6',
        'default': b7(0x4ac),
        'for': b7(0x24d)
    }, {
        'name': b7(0x30f) + 'e_color',
        'index': '6',
        'default': b7(0x2d3),
        'for': b7(0x24d) + b7(0x501) + b7(0x418) + b7(0x2dd) + b7(0x2ac) + 'ormerly)'
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '7',
        'default': b7(0x2ae),
        'for': 'Shiny\x20Poly' + b7(0x399) + 'n\x20Square,\x20' + b7(0x2df) + b7(0x3e3) + b7(0x3bc) + ')'
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '8',
        'default': b7(0x2c9),
        'for': b7(0x303)
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '9',
        'default': b7(0x420),
        'for': b7(0x2bb)
    }, {
        'name': b7(0x30f) + 'e_color',
        'index': '10',
        'default': b7(0x419),
        'for': 'Pentagon'
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '11',
        'default': b7(0x4fd),
        'for': 'Crashers'
    }, {
        'name': 'net_replac' + b7(0x389),
        'index': '12',
        'default': b7(0x2c9),
        'for': b7(0x516) + 'ers/Neutra' + 'l\x20Dominato' + b7(0x3ce) + b7(0x4f2)
    }, {
        'name': 'net_replac' + b7(0x389),
        'index': '13',
        'default': '0x44FFA0',
        'for': 'Scoreboard'
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '14',
        'default': b7(0x4c7),
        'for': b7(0x470)
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '15',
        'default': b7(0x31a),
        'for': b7(0x428) + 'A)'
    }, {
        'name': b7(0x30f) + b7(0x389),
        'index': '16',
        'default': '0xFBC477',
        'for': 'Summoned\x20S' + 'quares\x20(Ne' + b7(0x274)
    }, {
        'name': 'net_replac' + 'e_color',
        'index': '17',
        'default': b7(0x4eb),
        'for': b7(0x2cc) + 'ses'
    }, {
        'name': b7(0x2b9) + b7(0x24c),
        'default': b7(0x381),
        'for': b7(0x371) + '\x20for\x20the\x20b' + b7(0x253)
    }, {
        'name': 'ren_border' + b7(0x37c),
        'default': b7(0x234),
        'for': b7(0x45f) + b7(0x362) + b7(0x387) + 'layed\x20on\x20t' + b7(0x450) + b7(0x3b0) + b7(0x1f9) + b7(0x4ba) + b7(0x435)
    }, {
        'name': 'ren_minima' + b7(0x28b) + b7(0x300),
        'default': b7(0x381),
        'for': b7(0x2e6)
    }, {
        'name': b7(0x2a2) + 'p_border_c' + 'olor',
        'default': '0x555555',
        'for': b7(0x315) + b7(0x3ca)
    }, {
        'name': b7(0x2f4) + b7(0x471) + 'r',
        'default': b7(0x21b),
        'for': 'Health\x20Bar'
    }, {
        'name': b7(0x2f4) + b7(0x255) + b7(0x334),
        'default': '0x555555',
        'for': 'Health\x20Bar' + b7(0x45e) + 'd'
    }, {
        'name': b7(0x207) + b7(0x471) + 'r',
        'default': b7(0x412),
        'for': b7(0x494)
    }, {
        'name': b7(0x325) + b7(0x3d4) + b7(0x2d0),
        'default': b7(0x2a0),
        'for': 'Score\x20Bar'
    }, {
        'name': b7(0x309) + 'ckground_c' + 'olor',
        'default': '0x000000',
        'for': 'EXP/Score\x20' + 'Bar/Scoreb' + b7(0x22b) + 'round'
    }, {
        'name': 'ren_stroke' + '_solid_col' + 'or',
        'default': b7(0x374),
        'for': 'Outlines\x20(' + b7(0x422) + b7(0x41a) + 'color\x20fals' + 'e)'
    }, {
        'name': b7(0x368) + 'olor',
        'default': b7(0x234),
        'for': 'Grid\x20Lines' + '\x20(Note:\x20Ac' + b7(0x204) + b7(0x48f) + b7(0x514) + b7(0x2eb) + 'is\x20differe' + b7(0x2db) + b7(0x525)
    }]
}, colors = {}, otherStuff['colors'][b7(0x223)](aj => {
    var cb = b7;
    colors[aj['for']] = '#' + aj[cb(0x233)][cb(0x2cf)]('0x')[cb(0x202)]();
}), async function() {
    var cj = b7;

    function aj(au = {}) {
        var cc = z,
            av, aw, ax, ay, az, aA;
        let aB = au;
        av = 0x21, aw = 0x0, ax = [];
        for (let aC in aB) {
            cc(0x3b6) == aB[aC] && (aB[aC] = '7'), Number[cc(0x32c)](0x1 * aB[aC]) ? ax['push'](aC) : aw += 0x1 * aB[aC];
        }
        ay = av - aw, az = Math[cc(0x3f0)](ay / ax[cc(0x1fa)]), ax[cc(0x223)](aD => {
            aB[aD] = az;
        }), aw = 0x0;
        for (let aD in aB) {
            Number[cc(0x32c)](0x1 * aB[aD]) || (aw += 0x1 * aB[aD]);
        }
        if (0x0 != (ay = av - aw))
            for (let aE = 0x0; aE < ay; aE++) {
                for (let aF = 0x0; aF < Object['keys'](aB)[cc(0x1fa)]; aF++) {
                    ay = av - aw, aA = Object[cc(0x332)](aB)[aF], aB[aA] < 0x7 && ay && ax[cc(0x22d)](aA) && (aw += 0x1, aB[aA] += 0x1);
                }
            }
        return Object[cc(0x332)](aB)['forEach'](aG => {
            aB[aG] = 0x1 * aB[aG];
        }), aB;
    }

    function ak(au, av, {
        V: aw,
        line: ax,
        W: ay,
        Z: az,
        X: aA
    }) {
        var cd = z,
            aB, aC, aD = document[cd(0x25c) + cd(0x4a9)](cd(0x486));
        aD['innerText'] = au, aD['onclick'] = av, aC = 'span', (aB = document[cd(0x25c) + 'ent'](aC))[cd(0x1ef)] = aw || cd(0x43d) + 'tion.', aB[cd(0x34d)] = cd(0x2a8), ax && an[cd(0x50a)](document[cd(0x25c) + 'ent']('br')), an[cd(0x50a)](aD), an[cd(0x50a)](aB);
    }

    function al(au, av) {
        setTimeout(function() {
            var ce = z;
            input[ce(0x277)](0x20);
        }, 0x3e8 * au), setTimeout(function() {
            var cf = z;
            input[cf(0x2dc)](0x20);
        }, 0x3e8 * au + av);
    }

    function am(au, av, {
        J: aw,
        V: ax,
        line: ay,
        W: az,
        Z: aA,
        X: aB
    }) {
        var cg = z,
            aC, aD, aE, aF = document['createElem' + cg(0x4a9)]('label');
        aF['innerText'] = au, aF[cg(0x375)] = au, (aC = document['createElem' + cg(0x4a9)](cg(0x475)))['type'] = cg(0x52a), aC[cg(0x426)] = au, aC[cg(0x50f)] = av, aC[cg(0x478)] = !!aw, aE = cg(0x3c4), (aD = document['createElem' + cg(0x4a9)](aE))[cg(0x1ef)] = ax || cg(0x43d) + cg(0x372), aD['className'] = cg(0x2a8), ay && an[cg(0x50a)](document[cg(0x25c) + cg(0x4a9)]('br')), an[cg(0x50a)](aF), an[cg(0x50a)](aC), an[cg(0x50a)](aD);
    }
    var an, ao, ap, aq = class {
        constructor({
            type: au,
            K: av,
            name: aw,
            command: ax
        }) {
            var ch = z,
                ay, az, aA;
            switch (av = O[aw] || av, ay = '', au) {
                case 'toggle':
                    ay = ch(0x52a);
                    break;
                case 'color':
                    ay = ch(0x45a);
            }
            az = new V(ch(0x38a))[ch(0x46c)](ch(0x375), aw)['set'](ch(0x1ef), aw + ':\x20'), aA = new V('input', {
                'type': ay,
                'id': aw,
                'name': ax
            })[ch(0x46c)](ch(0x4ed), function(aB) {
                var ci = ch,
                    aC = aB[ci(0x2b3)],
                    aD = ci(0x52a) == ay ? aC[ci(0x478)] : aB[ci(0x2b3)]['value'];
                O[aw] = {
                    'value': aD
                }, execute(ax + '\x20' + aD);
            }), av && (ch(0x52a) == ay && aA[ch(0x46c)](ch(0x478), av), aA['set'](ch(0x526), av)), this['input'] = aA, this['label'] = az;
        }
    };
    const ar = await fetch(cj(0x4f1) + 'w.githubus' + cj(0x3e7) + 'com/naquan' + cj(0x534) + 'tedFiles/m' + 'ain/builds' + cj(0x444))[cj(0x49a)](au => au[cj(0x23c)]());
    Object[cj(0x332)](ar)[cj(0x530)](au => [...new Set(Object[cj(0x332)](ar[au]['Y'])['map'](av => ar[au]['Y'][av]['ee']))]), !(function() {
        var ck = cj,
            au, [av, aw] = [ck(0x530), ck(0x25f)];
        for (let ax in ar) {
            au = ar[ax];
            for (let ay in au) {
                'object' == typeof ar[ax][ay] && (ar[ax][ay] = ar[ax][ay][av](az => (az[aw] = aj(az[aw]), az)));
            }
        }
    }());
    let as = ah;
    an = as[cj(0x378)][cj(0x21c)][cj(0x2c8) + cj(0x408)](cj(0x2f1)), (function() {
        var cl = cj,
            au, av;
        Array['prototype'][cl(0x3df)] = function(aw) {
            var cm = cl;
            const ax = [cm(0x1fa)],
                ay = this;
            for (let az = 0x0; az < this[ax[0x0]]; az++) {
                ay[az] = aw(this[az], az);
            }
            return ay;
        }, addEventListener(cl(0x52f) + 'ad', function() {
            var cn = cl;
            GM_setValue(cn(0x329), O);
        }), au = new V(cl(0x39a), {
            'id': cl(0x37e)
        })[cl(0x50a)](new V('h1')['set'](cl(0x1ef), cl(0x42b)))[cl(0x50a)](V['N']), otherStuff['toggles'][cl(0x530)](aw => new aq({
            'name': aw['for'],
            'type': cl(0x337),
            'K': cl(0x23f) == aw['ne'],
            'command': aw[cl(0x426)] + '\x20'
        }))[cl(0x223)](aw => {
            var co = cl;
            au[co(0x50a)](aw['label'])['append'](aw['input'])[co(0x50a)](V['N']);
        }), av = new V(cl(0x39a), {
            'id': 'colors'
        })[cl(0x50a)](new V('h1')[cl(0x46c)](cl(0x1ef), cl(0x39d)))[cl(0x50a)](V['N']), otherStuff[cl(0x281)]['map'](aw => new aq({
            'name': aw['for'],
            'type': cl(0x45a),
            'K': '#' + (aw['m'] || aw[cl(0x233)])[cl(0x431)](/0x(?<o>.+)/i)['groups']['te'],
            'command': '' + aw['name'] + (aw[cl(0x500)] ? '\x20' + aw['index'] : '\x20')
        }))[cl(0x223)](aw => {
            var cp = cl;
            av['append'](aw['label'])[cp(0x50a)](aw[cp(0x475)])[cp(0x50a)](V['N']);
        }), au['A'](an), av['A'](an);
    }()), ak('Fix\x20Game', function() {
        var cq = cj,
            au = function({
                oe: av,
                name: aw
            }) {
                return {
                    'oe': av,
                    'name': aw
                };
            }(localStorage);
        for (let av in localStorage) {
            localStorage['removeItem'](av);
        }
        localStorage['clear']();
        for (let aw in au) {
            localStorage[cq(0x4a5)](aw, au[aw]);
        }
        location[cq(0x21d)] = location[cq(0x21d)];
    }, {
        'V': cj(0x427) + cj(0x367) + cj(0x235) + cj(0x4e9) + 'inish\x20load' + 'ing)\x20or\x20if' + '\x20game\x20does' + 'nt\x20load.'
    }), ak(cj(0x22a), H, {
        'line': !0x0,
        'V': 'Use\x20to\x20rem' + cj(0x4b4) + cj(0x383) + cj(0x4b7)
    }), ak(cj(0x39e), function() {
        al(0x0, 0x64), al(0.75, 0xc8), al(1.5, 0x2ee), setTimeout(function() {
            var cr = z;
            input[cr(0x277)](0x45);
        }, 0x7d0);
    }, {
        'line': !0x0,
        'V': cj(0x347) + 'itor\x20bulle' + 'ts\x20max\x20rel' + 'oad\x20requri' + 'ed'
    }), am(cj(0x2a7), function() {
        var cs = cj;
        a4[cs(0x337)](), L(cs(0x2a7) + 's', a4['status']);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cj(0x3f2) + 'ds\x20page\x20is' + cj(0x493) + 'ake\x20too\x20lo' + cj(0x20a) + cj(0x52b)
    }), am('AutoUpgrad' + 'e', function() {
        var ct = cj;
        a3['toggle'](), L('AutoUpgrad' + 'e', a3[ct(0x40f)]);
    }, {
        'J': !0x0,
        'line': !0x0,
        'V': cj(0x316) + cj(0x29b) + cj(0x331) + cj(0x276) + cj(0x3a3)
    }), am(cj(0x291), function() {
        var cu = cj;
        a5[cu(0x337)](), L(cu(0x291), a5[cu(0x40f)]);
    }, {
        'J': !0x1,
        'line': !0x0,
        'V': cj(0x50c) + cj(0x342)
    }), setInterval(() => {
        var cv = cj;
        a4[cv(0x40f)] && [cv(0x40d), 'captcha'][cv(0x22d)](ai[cv(0x43f)]) && (alert(cv(0x3b4) + cv(0x247) + cv(0x423) + 'eload\x20in\x205' + cv(0x3ab)), setTimeout(() => {
            var cw = cv;
            location[cw(0x2a3)];
        }, 0x1388));
    }, 0x2710), await ai['G'](cj(0x440));
    const at = new Object();
    for (let au in ar) {
        try {
            ar[au]['Y'][cj(0x223)](av => {
                var cx = cj,
                    aw = av['ee'];
                const {
                    name: ax,
                    V: ay,
                    re: az
                } = av;
                at[aw] || (at[aw] = []), at[aw][cx(0x27d)]({
                    'name': ax,
                    'V': ay,
                    're': az
                });
            });
        } catch (av) {}
    }
    return ao = window['myWin_'][cj(0x21c)][cj(0x2c8) + cj(0x408)](cj(0x2ab)), (function({
        ae: aw,
        ie: ax = function() {}
    }) {
        var cy = cj;
        if (!ax) throw cy(0x3f6) + cy(0x335) + cy(0x2f7) + 't';
        for (let ay in aw || this) {
            ax((aw || this)[ay], ay);
        }
    }({
        'ae': at,
        'ie': function(aw, ax) {
            var cA = cj,
                ay, az, aA, aB, aC;
            try {
                function aD(aF) {
                    var cz = z;
                    return document[cz(0x25c) + 'ent'](aF);
                }
                let aE = as[cA(0x378)]['se'];
                (ay = aD(cA(0x3c4)))['id'] = cA(0x217) + ax, ay[cA(0x34d)] = cA(0x2c4), ay[cA(0x1ef)] = ax, az = cA(0x217) + ax[cA(0x2cf)]('\x20')[cA(0x35e)]('_') + '_div', ay[cA(0x50f)] = function() {
                    var cB = cA;
                    as[cB(0x378)]['se'](cB(0x31b) + ax['split']('\x20')[cB(0x35e)]('_') + '_div')['toggle'](0x7d0, 'swing');
                }, (aA = aD(cA(0x39a)))['id'] = az, aw[cA(0x223)](aF => {
                    var cC = cA,
                        aG, aH, aI, {
                            name: aJ,
                            re: aK,
                            V: aL
                        } = aF;
                    aG = aD(cC(0x39a)), (aH = aD('input'))[cC(0x358)] = cC(0x486), aH[cC(0x526)] = cC(0x2ef) + 'ld', (aI = aD(cC(0x3c4)))[cC(0x1ef)] = 'Name:' + aJ + cC(0x287) + aL, aG[cC(0x50a)](aH), aG[cC(0x50a)](aD('br')), aF['ee'] = ax, aH[cC(0x50f)] = function() {
                        ! function(aM) {
                            var cD = z,
                                aN, aO = new Q();
                            aO['h'](aM['re']), aM['ee'], aO['v'], aM[cD(0x426)], Object[cD(0x332)](aM['re'])[cD(0x530)](aP => aM['re'][aP])[cD(0x35e)]('\x20/\x20'), aM['V'], upgrade = window[cD(0x3ee)] = aO['v'], _upgrade = aO['v'];
                            for (let aP in aM['re']) {
                                try {
                                    aN = aM['re'][aP] / 0x7, aN *= 0x64, as['document'][cD(0x2c8) + cD(0x2f0) + 'me'](aP + '_')[0x0][cD(0x1ef)] = aM['re'][aP], as[cD(0x21c)]['getElement' + cD(0x2f0) + 'me'](aP)[0x0][cD(0x404)][cD(0x400)] = aN + '%';
                                } catch (aQ) {
                                    L('Error', aQ['message']);
                                }
                            }
                        }(aF);
                    }, aG[cC(0x50a)](aI), aA['append'](aG), aA[cC(0x50a)](aD('br'));
                }), aB = aD('li'), (aC = aD(cA(0x39a)))[cA(0x50a)](ay), aB[cA(0x50a)](aC), aB[cA(0x50a)](aA), ao[cA(0x50a)](aB), aE(cA(0x31b) + ax[cA(0x2cf)]('\x20')[cA(0x35e)]('_') + cA(0x210))[cA(0x337)]();
            } catch (aF) {
                L(cA(0x44a), aF[cA(0x46f)]), location[cA(0x2a3)]();
            }
        }
    }), set_convar(cj(0x2f4) + cj(0x47e), !0x0), set_convar(cj(0x244) + 'alth_value' + 's', !0x0), set_convar(cj(0x46e) + cj(0x3a8) + 'r', !0x1), set_convar(cj(0x268) + cj(0x48c), !0x1), execute('net_replac' + cj(0x26e) + cj(0x234)), execute(cj(0x3ed) + 'secure\x20tru' + 'e'), execute(cj(0x30f) + cj(0x451) + '0x999999'), execute('net_replac' + cj(0x262) + cj(0x2b5)), execute(cj(0x30f) + cj(0x369) + cj(0x53d)), execute(cj(0x30f) + cj(0x2d6) + '0xFF0000'), execute(cj(0x30f) + cj(0x366) + '0x990099'), execute(cj(0x30f) + 'e_color\x206\x20' + cj(0x4c5)), execute(cj(0x30f) + cj(0x201) + cj(0x215)), execute(cj(0x30f) + 'e_color\x208\x20' + cj(0x537)), execute(cj(0x30f) + cj(0x22c) + cj(0x4fc)), execute(cj(0x30f) + cj(0x50d) + cj(0x3d1)), execute(cj(0x30f) + cj(0x200) + cj(0x395)), execute(cj(0x30f) + cj(0x458) + '\x200xFFFF00'), execute(cj(0x30f) + cj(0x299) + '\x200xFFFFFF'), execute(cj(0x30f) + cj(0x386) + cj(0x447)), execute(cj(0x30f) + cj(0x3b3) + cj(0x4cb)), execute(cj(0x30f) + cj(0x245) + cj(0x4da)), execute(cj(0x46e) + '_solid_col' + cj(0x257) + 'F'), execute(cj(0x46e) + cj(0x3a8) + cj(0x384) + 'y\x20.5'), execute(cj(0x2f4) + cj(0x255) + 'd_color\x200x' + '8c8c8c'), execute(cj(0x2a2) + 'p_backgrou' + cj(0x323) + cj(0x20f)), execute('ren_backgr' + cj(0x24c) + cj(0x487)), execute(cj(0x26b) + cj(0x476) + 'fffff'), execute(cj(0x309) + cj(0x41f) + 'olor\x200x8c8' + cj(0x242)), execute(cj(0x30f) + cj(0x386) + cj(0x489)), execute(cj(0x46e) + cj(0x3c8) + cj(0x257) + 'F'), execute('net_replac' + cj(0x208) + cj(0x4b6)), P[cj(0x4b3)] = async function(aw) {
        var cE = cj,
            ax, ay;
        if (cE(0x41b) == aw && a3[cE(0x40f)]) {
            if (ap || !upgrade || !upgrade[cE(0x1fa)]) return;
            ap = !0x0, L(cE(0x27f), cE(0x316) + cE(0x4a2)), input[cE(0x2dc)](0x55), ax = document['hasFocus'](), await G(0x64), input[cE(0x277)](0x55), ay = _upgrade[cE(0x2cf)]('')[cE(0x530)](az => az['charCodeAt'](0x0));
            for (let az in ay) {
                ax != document[cE(0x430)]() && input[cE(0x277)](0x55);
                let aA = ay[az];
                input['key_down'](aA), input[cE(0x2dc)](aA), await G(0x1f4), ax = document[cE(0x430)]();
            }
            input['key_up'](0x55), ap = !0x1;
        }
        cE(0x356) == aw && a5['status'] && (L(cE(0x409) + 'us', cE(0x2c2) + 'nto\x20game'), await G(0x1388), await ai['H']());
    }, 'EZ');
}()['then'](console[b7(0x4f9)], console[b7(0x398)]), window['s'] = a6;