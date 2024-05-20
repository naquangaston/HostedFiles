// ==UserScript==
// @name         Diep stuff
// @namespace    http://tampermonkey.net/
// @version      2024-05-13
// @description  try to take over the world!
// @author       You
// @match        *://diep.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant GM_addStyle
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require http://code.createjs.com/easeljs-0.5.0.min.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_obf.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/ResourceLoader_.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_Formatter_.js
// ==/UserScript==
infothingy={}
inf={}
_upgrade=''
const Settings = GM_getValue("Settings") || {};
const extended={update:function(screen){}}
const getV=function(a,b){
    return arguments.length!=1?(GM_setValue(a,b),b):GM_getValue(a)
}
function setElement(url) {
    return (String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)&&String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length==11)? String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]: false;
};
getClose=function (arr){
    return arr.map(e=>{  e.dist=getDistance(...e._lineTo,canvas.width/2,canvas.height/2);return e;
                      }).sort((a,b)=>a.dist-b.dist)[0]
}
getMid=function (cords=[{x:0,y:0}]){
    var total=cords.length;
    var [x,y]=[0,0];
    cords.forEach(e=>{x+=e.x;y+=e.y})
    return {x:x/total,y:y/total}
}
;(function(){
    class CustomLogging {
        /**
     *
     * @param {String} title Title of the custom log
     */
        constructor(title) {
            this.title = {
                body: title || "---",
                color: "darkgrey",
                size: "1rem"
            };

            this.body = {
                color: "#008f68",
                size: "1rem"
            };
        }
        setTitleBody(title) {
            this.title.body = title
        }

        setTitleStyle({ color, size }) {
            if (color !== undefined) this.title.color = color;
            if (size !== undefined) this.title.size = size;
        }

        setBodyStyle({ color, size }) {
            if (color !== undefined) this.body.color = color;
            if (size !== undefined) this.body.size = size;
        }
        /**
     *
     * @param {String} body the text body of the log
     */
        log(body = "") {
            // the second line is now the body because the first references the content after the first %c for the title
            console.log(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size
                };`,
                `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size
                }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
            );
        }
    }
    Object.assign(this || arguments[0], { CustomLog: CustomLogging})})(window.globalRoot||window)
draw=function (_this) {
    try{if (_this.shape && _this.shape != 'undefined' && !_this.custom) {
        var {x,y}=getMid(this._lineTo_.map(e=>({x:e[0],y:e[1]})))
        let ctx_ = canvas.getContext("2d");
        ctx_.beginPath();
        ctx_.custom = true
        var gradient = ctx_.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx_.strokeStyle = gradient;
        ctx_.lineWidth = 5;
        ctx_.moveTo(x,y);
        ctx_.arc(x,y, 50, 0, 2 * Math.PI);
        ctx_.stroke();
        ctx_.custom = false;
    }}catch(err){}
}
function sleep(ms){return new Promise(a=>setTimeout(a,ms))}
function RemoveAds(){return [...document.getElementsByTagName('iframe')].forEach(frame=>frame.remove())}
function checkWin(myWindow=this.win1) {return !myWindow?false:myWindow.closed?false:true}
function startwin(win,name=null,reopen,c){
    var win_
    name==null&&(name=win);
    console.log('attemp the close',win)
    try{if(reopen)window[win].close()}catch
        (err){window[win]=null;console.warn('attemp the close',win,'Fail')}
    try{if(!checkWin(window[win]))(window[win]=win_=open(c,'PROFILES',`width=256,height=305`),console.log('Making',win,'in',name),console.log(window[win])
                                   ,console.log('writing defalt styles','to',win,name),
                                   win_.document.write(htmlContent.element.outerHTML)
                                  );
        else (globalRoot[name]=open('','PROFILES',`width=256,height=305`),globalRoot[name].window.document.body.innerHTML='',
              globalRoot[name].window.document.head.innerHTML='')}catch(err){
            console.warn(err)
        }
    globalRoot[name]=globalRoot[win];
    console.log('complete win')
    return win_
}
function get(id, base = document.body) {
    // Check if the base element itself has the id
    if (base.id === id) {
        return base;
    }

    // Check if the base element has a shadowRoot
    if (base.shadowRoot) {
        const shadowResult = get(id, base.shadowRoot);
        if (shadowResult) {
            return shadowResult;
        }
    }

    // Loop through the base element's children
    for (const child of base.children) {
        const result = get(id, child);
        if (result) {
            return result;
        }
    }

    // If no element with the id is found, return null
    return null;
}
function MySrc() {
    var aA = g;
    (function(C, D) {
        var a2 = g,
            E = C();
        while (!![]) {
            try {
                var F = parseInt(a2(0x115)) / 0x1 + parseInt(a2(0xc7)) / 0x2 + -parseInt(a2(0xff)) / 0x3 * (-parseInt(a2(0x127)) / 0x4) + -parseInt(a2(0xbf)) / 0x5 * (parseInt(a2(0x113)) / 0x6) + -parseInt(a2(0xb4)) / 0x7 + parseInt(a2(0x112)) / 0x8 + -parseInt(a2(0xce)) / 0x9;
                if (F === D) break;
                else E['push'](E['shift']());
            } catch (G) {
                E['push'](E['shift']());
            }
        }
    }(b, 0xa3444));

    function h(C) {
        var a3 = g;
        return !!(C || this)[a3(0xe9)](/[A-Z_$a-z]/gi);
    }

    function j(C) {
        var a4 = g;
        return !!(C || this)[a4(0xe9)](/[\(\{\[]/gi);
    }

    function k(C) {
        var a5 = g;
        return !!(C || this)[a5(0xe9)](/[\]\}\)]/gi);
    }

    function m(C) {
        var a6 = g;
        return !!(C || this)[a6(0xe9)](/[0-9]/gi);
    }

    function p(C) {
        return !!(C || this)['match'](/[\r\n]/gi);
    }

    function q(C) {
        var a8 = g;
        return !!(C || this)[a8(0xe9)](/ /gi);
    }

    function v() {
        var a9 = g,
            C = y[w];
        B[a9(0xe1)] = C['t'], document[a9(0xfb)] = C['name'], B[a9(0x108)] = function() {
            var aa = a9;
            B[aa(0xe1)] = null, w++, C = y[w], B['src'] = C['t'], document['title'] = C[aa(0xc9)];
        };
    }
    var w, x, y, z = 0x64;

    function g(a, c) {
        var d = b();
        return g = function(e, f) {
            e = e - 0xaf;
            var h = d[e];
            return h;
        }, g(a, c);
    }(function() {
        var ah = g;

        function C(J, K) {
            var ab = g,
                L, M = 0x0,
                N = '',
                O = [typeof String(), ab(0x105), ab(0x105)];
            if (![O[ab(0x109)](typeof this), O[ab(0x109)](typeof J)]['filter'](P => !(P < 0x0))[ab(0xef)]) throw ab(0xf8) + ab(0x111) + 'de';
            (L = (Array[ab(0xfc)](J || this) ? (J || this)[ab(0x10d)](K) : (O['indexOf'](typeof J) < 0x0 ? this : J)[ab(0xf5)]()[ab(0x11a)]('\x20\x20')[ab(0x10d)]('')['split']('{')['join']('{\x0a')[ab(0x11a)]('}')['join']('\x0a}')[ab(0x11a)]('\x0a\x0a')[ab(0x10d)]('\x0a'))[ab(0x11a)](''))[ab(0xef)];
            for (let P = 0x0; P < L[ab(0xef)]; P++) {
                const Q = L[P],
                      R = L[P + 0x1],
                      S = L[P - 0x1];
                Number((P / L[ab(0xef)] * 0x64)[ab(0xfa)](0x2)), ('\x5c' != S && ('{' == Q && M++, '}' == Q && M--), M < 0x0 && (M = 0x0), N += '\x0a' == Q ? '}' == R ? Q + '\x20' ['repeat'](M ? M - 0x1 : M) : Q + '\x20' [ab(0x11e)](M) : Q);
            }
            return N;
        }

        function D(J) {
            var ac = g;
            return (J || this)['constructo' + 'r'][ac(0xc9)][ac(0xc1)](ac(0xb7) + 'ion');
        }

        function E(J, K = null, L = '') {
            var ad = g;
            return this['split'](...(function() {
                return arguments[0x0] ? [J, K] : [J];
            }(K)))[ad(0x10d)](L);
        }

        function F() {
            var ae = g;
            return !this[ae(0xf5)]()['includes']('.');
        }

        function G(J = []) {
            var af = g;
            return (J[af(0xef)] ? J : this)[Math[af(0xe7)](Math[af(0xd7)]() * (J['length'] ? J : this)['length'])];
        }

        function H(J = []) {
            var ag = g;
            for (let K = (J[ag(0xef)] ? J : this)[ag(0xef)] - 0x1; K > 0x0; K--) {
                const L = Math[ag(0xe7)](Math['random']() * (K + 0x1)),
                      M = (J['length'] ? J : this)[K];
                (J['length'] ? J : this)[K] = (J[ag(0xef)] ? J : this)[L], (J['length'] ? J : this)[L] = M;
            }
            return J[ag(0xef)] ? J : this;
        }
        var I = (function() {
            const J = arguments;
            return function(K) {
                return (K || this)[J[0x2][0x0]][J[0x2][0x1]][J[0x2][0x2]](J[0x2][0x3]);
            };
        }([], [''], [ah(0xe8) + 'r', ah(0xc9), ah(0xc1), ah(0xb7) + 'ion'], [''], [], {}));
        Function[ah(0x101)][ah(0x118)] = C, Function[ah(0x101)][ah(0xb3)] = D, Function[ah(0x101)][ah(0xb3)] = I, Number[ah(0x101)]['isWhole'] = F, Array[ah(0x101)][ah(0xd7)] = G, Array[ah(0x101)][ah(0xe5)] = H, String['prototype'][ah(0x117) + ah(0xe6)] = E, Object[ah(0x123)](Object['prototype'], {
            'isNumber': m,
            'isLetter': h,
            'isOpen': j,
            'isClose': k,
            'isBlank': q,
            'isLine': p,
            'getType': function(J) {
                var ai = ah;
                return null == typeof(J || this) ? ai(0xdb) : (J || this)[ai(0xe8) + 'r'][ai(0xc9)];
            },
            'type_': function() {
                var aj = ah;
                const J = arguments[0x0] || this;
                var K = [h, m, j, k, q];
                return K[aj(0xcd)](L => !!L(J))[aj(0xc3)](L => K[aj(0xc3)](M => M[aj(0xc9)])[aj(0x109)](L[aj(0xc9)]))[0x0];
            }
        }), Object['assign'](this, {
            'formate': C,
            'isAsync': D,
            'isWhole': F,
            'random': G,
            'shuffle': H,
            'split_replace': E,
            'getError': function(J, ...K) {
                try {
                    J(...K);
                } catch (L) {
                    return L;
                }
            }
        }), Object[ah(0x123)](this, {
            'debug': function(...J) {
                var ak = ah;
                Date()[ak(0xe9)](/[\d:]+/gi)[0x2];
            },
            'error': function(...J) {
                var al = ah;
                Date()[al(0xe9)](/[\d:]+/gi)[0x2];
            },
            'info': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'log': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'warn': function(...J) {
                var am = ah;
                Date()[am(0xe9)](/[\d:]+/gi)[0x2];
            },
            'dir': function(...J) {
                var an = ah;
                Date()[an(0xe9)](/[\d:]+/gi)[0x2];
            },
            'dirxml': function(...J) {
                var ao = ah;
                Date()[ao(0xe9)](/[\d:]+/gi)[0x2];
            },
            'table': function(...J) {
                var ap = ah;
                Date()[ap(0xe9)](/[\d:]+/gi)[0x2];
            },
            'trace': function(...J) {
                var aq = ah;
                Date()[aq(0xe9)](/[\d:]+/gi)[0x2];
            },
            'group': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'groupCollapsed': function(...J) {
                var ar = ah;
                Date()[ar(0xe9)](/[\d:]+/gi)[0x2];
            },
            'groupEnd': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'clear': function(...J) {
                var as = ah;
                Date()[as(0xe9)](/[\d:]+/gi)[0x2];
            },
            'count': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'countReset': function(...J) {
                var at = ah;
                Date()[at(0xe9)](/[\d:]+/gi)[0x2];
            },
            'assert': function(...J) {
                var au = ah;
                Date()[au(0xe9)](/[\d:]+/gi)[0x2];
            },
            'profile': function(...J) {
                var av = ah;
                Date()[av(0xe9)](/[\d:]+/gi)[0x2];
            },
            'profileEnd': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'time': function(...J) {
                var aw = ah;
                Date()[aw(0xe9)](/[\d:]+/gi)[0x2];
            },
            'timeLog': function(...J) {
                var ax = ah;
                Date()[ax(0xe9)](/[\d:]+/gi)[0x2];
            },
            'timeEnd': function(...J) {
                Date()['match'](/[\d:]+/gi)[0x2];
            },
            'timeStamp': function(...J) {
                var ay = ah;
                Date()[ay(0xe9)](/[\d:]+/gi)[0x2];
            },
            'context': function(...J) {
                var az = ah;
                Date()[az(0xe9)](/[\d:]+/gi)[0x2];
            }
        });
    }['apply'](aA(0xdb) == typeof exports ? this['i'] ? exports : aA(0xdb) == typeof window ? this : globalThis || self || window || top : this));
    const A = document['getElement' + 'ById'](aA(0x125));
    Array[aA(0x101)][aA(0xc5) + 'nc'] = async function(C = function() {}) {
        var aB = aA;
        for (let D = 0x0; D < this[aB(0xef)]; D++) {
            await C(this[D], D, this[aB(0xef)]);
        }
        return null;
    }, Array[aA(0x101)][aA(0x120)] = async function(C = function() {}) {
        var aC = aA,
            D = this;
        for (let E = 0x0; E < D[aC(0xef)]; E++) {
            D[E] = await C(D[E], E, D[aC(0xef)]);
        }
        return D;
    }, w = 0x0, x = document['getElement' + 'ById']('Songs_');
    const B = new Audio();

    function b() {
        var aV = ['formate', 'TED', 'split', 'innerHTML', 'type', 'duration', 'repeat', 'URL', 'mapAsync', 'audio', 'Skip', 'assign', 'className', 'chooseFile', 'Enter\x20volu', '40ZrktiR', 'rgb(', 'fillStyle', 'innerWidth', 'currentTim', 'file', 'isAsync', '2873052ihhgmG', 'stener', 'abort', 'AsyncFunct', 'NOT\x20SUPPOR', 'height', 'addEventLi', 'size', 'forEach', 'push', 'Shuffle', '5BXcMlF', 'ById', 'includes', 'fftSize', 'map', 'fillRect', 'forEachAsy', 'width', '2239692OFlANm', 'getContext', 'name', 'loadend', 'off', 'progress', 'filter', '3228507JKSaSR', 'inCount', 'volume', 'pop', 'TextAl', 'files', 'append', 'error', 'result', 'random', 'getByteFre', 'button', 'frequencyB', 'undefined', 'innerHeigh', 'createMedi', 'total', 'aElementSo', 'loop:', 'src', 'pause', 'hrough', 'change', 'shuffle', 'ace', 'floor', 'constructo', 'match', 'quencyData', 'input', '\x20file\x20exte', 'destinatio', 'onclick', 'length', '\x22\x20is\x20not\x20a', 'getElement', 'span', 'load', 'createElem', 'toString', 'then', 'href', 'Cant\x20forma', 'createAnal', 'toFixed', 'title', 'isArray', 'ntsion:\x0a\x22', '\x22\x20button\x20i', '87969ZAwmKG', 'The\x20\x22', 'prototype', 'ent', 'style', 'readAsData', 'function', 'Previous', 'canvas', 'onended', 'indexOf', 'play', 'myBar', 'connect', 'join', '\x20supported', 'loop', 'innerText', 't\x20given\x20co', '2604776rdqPlh', '3011772XUihlc', 'yser', '201188lJwZXE', 'oncanplayt', 'split_repl'];
        b = function() {
            return aV;
        };
        return b();
    }
    y = [], B[aA(0xd0)] = 0.3, [
        [aA(0xbe), () => (y[aA(0xe5)](), B['pause'](), v())],
        ['play\x20all', v],
        [aA(0x122), () => {
            B['currentTim' + 'e'] = B['duration'] - 0.1;
        }],
        [aA(0x106), () => {
            var aD = aA;
            w -= 0x2, B[aD(0xb1) + 'e'] = B[aD(0x11d)] - 0.1;
        }],
        [aA(0x10a), () => B['play']()],
        ['pause', () => B[aA(0xe2)]()],
        ['loop', function(C) {
            var aE = aA;
            B[aE(0x10f)] = !B['loop'], C['innerText'] = aE(0xe0) + (B[aE(0x10f)] ? 'on' : aE(0xcb));
        }],
        [aA(0xd0), () => {
            var aF = aA;
            B[aF(0xd0)] = prompt(aF(0x126) + 'me', '50') / 0x64;
        }]
    ][aA(0xbc)](C => {
        var aG = aA,
            D = aG(0x105) == typeof C[0x1] ? C[0x1] : function() {
                var aH = aG;
                alert(aH(0x100) + C[0x0] + (aH(0xfe) + 's\x20W.I.P'));
            },
            E = document['createElem' + aG(0x102)](aG(0xd9));
        E[aG(0x110)] = C[0x0], E[aG(0xee)] = D, x[aG(0xd4)](E);
    }), B[aA(0x116) + aA(0xe3)] = C => {
        var aI = aA,
            D, E, F, G, H, I, J, K, L, M, N, O;
        B[aI(0x10a)]();
        let P = B;
        E = (D = new AudioContext())[aI(0xdd) + aI(0xdf) + 'urce'](P), F = D[aI(0xf9) + aI(0x114)](), (G = document[aI(0xf1) + 'ById'](aI(0x107)))[aI(0xc6)] = window[aI(0xb0)], G[aI(0xb9)] = window[aI(0xdc) + 't'], H = G[aI(0xc8)]('2d'), E[aI(0x10c)](F), F[aI(0x10c)](D[aI(0xed) + 'n']), F[aI(0xc2)] = 0x100, I = F[aI(0xda) + aI(0xcf)], J = new Uint8Array(I), K = G[aI(0xc6)], L = G[aI(0xb9)], M = K / I * 2.5, O = 0x0, P[aI(0x10a)](),
            function Q() {
            var aJ = aI,
                R, S, T, U;
            for (requestAnimationFrame(Q), O = 0x0, F[aJ(0xd8) + aJ(0xea)](J), H[aJ(0xaf)] = '#000', H[aJ(0xc4)](0x0, 0x0, K, L), R = 0x0; R < I; R++) {
                S = (N = J[R]) + R / I * 0x19 - z, T = R / I * 0xfa, U = 0x32, H[aJ(0xaf)] = aJ(0x128) + S + ',' + T + ',' + U + ')', H[aJ(0xc4)](O, L - N, M, N), O += M + 0x1;
            }
        }();
    }, A[aA(0xba) + aA(0xb5)](aA(0xe4), C => {
        var aR = aA;
        (async function(D, E, F = function() {
            return !0x0;
        }) {
            var aL = g,
                G = new class {
                    constructor() {
                        var aK = g;
                        this[aK(0xd3)] = [];
                    }[aL(0xbd)](...I) {
                        var aM = aL;
                        this[aM(0xd3)][aM(0xbd)](...I);
                    }
                }();
            const H = (I => {
                var aN = aL,
                    J = [];
                for (const K of I) {
                    const L = K[aN(0xc9)] ? K['name'] : aN(0xb8) + aN(0x119),
                          M = K[aN(0x11c)] ? K['type'] : 'NOT\x20SUPPOR' + aN(0x119),
                          N = K[aN(0xbb)] ? K['size'] : aN(0xb8) + aN(0x119);
                    J[aN(0xbd)]({
                        'file': K,
                        'name': L,
                        'type': M,
                        'size': N
                    });
                }
                return J;
            })([...(D && D[aL(0xd3)] ? D[aL(0xd3)] : 0x0) || A['files']]);
            return G[aL(0xd3)] = await H[aL(0xcd)](F)[aL(0x120)](async(I, J, K) => {
                var aQ = aL,
                    L, M, N, O;
                const {
                    file: P,
                    name: Q,
                    type: R,
                    size: S
                } = I, T = new FileReader();
                return M = (L = await new Promise(U => {
                    var aP = g;

                    function V(Z) {
                        var aO = g,
                            a0, a1 = [Q, Z[aO(0x11c)] + ':', (Z['loaded'] / Z[aO(0xde)] * 0x64)[aO(0xfa)](0x2) + '%'];
                        document[aO(0xf1) + aO(0xc0)](aO(0xd2))[aO(0x11b)] = a1[0x0], document[aO(0xf1) + 'ById'](aO(0x10b))[aO(0x103)]['width'] = a1[0x2], Z[aO(0x11c)], aO(0xf3) === Z['type'] && (a0 = T[aO(0xd6)], U(a0));
                    }
                    var W, X, Y = document[aP(0xf4) + aP(0x102)](aP(0xf2));
                    Y['className'] = aP(0xb2), Y['innerHTML'] = Q, Y['id'] = Q, (W = document[aP(0xf4) + aP(0x102)](aP(0xf2)))[aP(0x124)] = 'progress', W['innerHTML'] = '0%', W['id'] = Q + '%', (X = T)[aP(0xba) + aP(0xb5)]('loadstart', V), X[aP(0xba) + aP(0xb5)](aP(0xf3), V), X[aP(0xba) + aP(0xb5)](aP(0xca), V), X[aP(0xba) + aP(0xb5)](aP(0xcc), V), X[aP(0xba) + 'stener'](aP(0xd5), V), X[aP(0xba) + aP(0xb5)](aP(0xb6), V), T[aP(0x104) + aP(0x11f)](P);
                }))[aQ(0x11a)](','), N = L['match'](/(data):([-\w]+\/[-\w]+);(\w+)/), dt = M, 'NOT\x20SUPPOR' + aQ(0x119) == R && (O = Q[aQ(0x11a)]('.')[aQ(0xd1)]()[aQ(0x11a)]('(')[0x0], new Error(R + (aQ(0xec) + aQ(0xfd)) + O + (aQ(0xf0) + aQ(0x10e) + '\x20file\x20exte' + 'ntsion'))['name'] = R), {
                    'file': P,
                    'name': Q,
                    'type': R,
                    'size': S,
                    'data': dt,
                    'o': N,
                    'b': I
                };
            }), aL(0x105) == typeof E && E(G), {
                'files': G
            };
        }(!0x1, !0x1, D => D[aR(0x11c)][aR(0xc1)](aR(0x121)))[aR(0xf6)](D => {
            var aS = aR;
            D[aS(0xd3)][aS(0xd3)][aS(0xbc)](E => {
                var aT = aS,
                    F = document[aT(0xf4) + aT(0x102)](aT(0xf2));
                F['innerHTML'] = E[aT(0xc9)], F[aT(0xf7)] = '', F[aT(0xee)] = function(G) {
                    var aU = aT;
                    B['pause'](), B['src'] = E['o'][aU(0xeb)];
                }, y[aT(0xbd)]({
                    'name': E[aT(0xc9)],
                    't': E['o']['input']
                });
            });
        }, console[aR(0xd5)]));
    });
}
function log_(title, body) { var l = new CustomLog(title); l.log(body) }
set_convar=function(a,b){
    console.log('Set',a,b)
    input.set_convar(a,b)
}
execute=function(ode){
    var res=(ode.match(/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i)||{groups:{}}).groups
    var s=ode.split(' ')
    var list=[
        'Smasher and Dominator Bases','Barrels','self','Blue Team','Red Team','Purple Team','Green Team','Shiny Polygons','Square','Triangle','Pentagon','Crashers','Arena Closers/Neutral Dominators/Defender Ammo','Maze Walls','Others (FFA)','Summoned Squares (Necromancer)','Fallen Bosses'
    ]
    var found=findColor(res)
    if(found!=null){
        colors[otherStuff.colors[found].for]='#'+res.value.match(/(0x|#)(?<hex>[\w]+)/i).groups.hex
        otherStuff.colors[found].prev=otherStuff.colors[found].new||otherStuff.colors[found].default
        otherStuff.colors[found].new=res.value.toUpperCase();
        let item=otherStuff.colors[found]
        console.log('Set',item.for,"from",item.prev,"To",item.new,{item,res})
    }
    input.execute(ode)
}

class Build {
    buildSet(_build) {
        this.Build = _build
        var count = 0;
        this.BuildPath = "";
        var reg = _build.regen
        var health = _build.health
        var bodydmg = _build.body
        var bspeed = _build.bspeed
        var bpen = _build.pen
        var bdmg = _build.dmg
        var rspeed = _build.reloads
        var speed = _build.speed
        //start with bullet speed dmg and pen reload
        for (let i = 0; i <= 7; i++) {
            if (i < bdmg&&count<34) { this.BuildPath += "6"; count++ }
            if (i < bspeed&&count<34) { this.BuildPath += "4"; count++ }
            if (i < bpen&&count<34) { this.BuildPath += "5"; count++ }
            if (i < rspeed&&count<34) { this.BuildPath += "7"; count++ }
        }
        for (let i = 0; i <= 7; i++) {
            if (i < speed&&count<34) { this.BuildPath += "8"; count++ }
        }
        for (let i = 0; i <= 7; i++) {
            if (i < reg&&count<34) { this.BuildPath += "1"; count++ }
            if (i < health&&count<34) { this.BuildPath += "2"; count++ }
            if (i < bodydmg&&count<34) { this.BuildPath += "3"; count++ }

        }
    }
}
class bool{
    constructor(t){
        t&&(this.toggle())
    }
    #status=false
    toggle(){
        this.#status=!this.#status
    }
    get status(){
        return this.#status
    }
    set status(a){
        this.#status=!!a
    }
}
class element {
    static get br() {
        return new element("br");
    }
    constructor(name, obj) {
        //findhref2(id('skin-message'))[0].constructor.name

        this.element = name.constructor.name.includes('HTML')&&(name)||(function () {
            for (let i in arguments[1]) {
                arguments[0].setAttribute(i, arguments[1][i]);
            }
            return arguments[0];
        })(document.createElement(arguments[0]), arguments[1]);
    }
    style(obj) {
        for (let i in obj) {
            this.element.style[i] = obj[i];
        }
        return this;
    }
    append(target,...targets) {
        this.element.append(target.element || target);
        console.log("T:",{targets,fe:targets&&targets.forEach})
        for(let i=0;i<targets.length;i++){
            let a=targets[i];
            console.log('Appending:',{element:a,target:this})
            this.element.append(a.element || a);
        }
        return this;
    }
    appendTo(target) {
        (target.element || typeof target=='string'?document.querySelector(target):target).append(this.element);
        return this;
    }
    on(event, a) {
        this.element[`on${event}`] = a;
        return this;
    }
    set(prop, value) {
        this.element[prop] = value;
        return this;
    }
    remove() {
        this.element.remove();
        return this;
    }
    get() {
        return this.element[arguments[0]];
    }
    get children() {
        return new (class $ {
            constructor(arr) {
                for (var i = 0; i < arr.length; i += 1) {
                    this[i] = arr[i];
                }

                // length is readonly
                Object.defineProperty(this, "length", {
                    get: function () {
                        return arr.length;
                    }
                });

                // a HTMLCollection is immutable
                Object.freeze(this);
            }
            item(i) {
                return this[i] != null ? this[i] : null;
            }
            namedItem(name) {
                for (var i = 0; i < this.length; i += 1) {
                    if (this[i].id === name || this[i].name === name) {
                        return this[i];
                    }
                }
                return null;
            }
            get toArray() {
                return [...this];
            }
        })([...this.element.children]);
    }
}
const {win1,win2,win3,win4,hh,jj,dd}=[null,null,null,null,function(item,val){localStorage.setItem(item,val)},function(item){return localStorage.getItem(item)},function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique)}]
const AutoUpgrade=new bool(1)
const AutoReload=new bool(1)
const Firing=new bool
const AutoSpawn=new bool
const A=document.querySelector('d-base')
//menu in js
const bootstrapCss = new element('link').set('rel', 'stylesheet').set('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
const jqueryUiCss = new element('link').set('rel', 'stylesheet').set('href', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css');
const jqueryScript = new element('script',{integrity:"sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=","crossorigin":"anonymous"}).set('src', 'https://code.jquery.com/jquery-3.7.1.js');
const jqueryUiScript = new element('script').set('src', 'https://code.jquery.com/ui/1.12.1/jquery-ui.js');
const bootstrapScript = new element('script').set('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
const jqueryMinScript = new element('script').set('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');

const style = new element('style').set('innerHTML', `
     .stat {
            height: 100%;
            width: 10%;
						transition:width 2s
        }

        .stats {
            height: 10px;
            width: 50%;
        }

        body {
            color: white;
            -ms-overflow-style: none;
            /* IE and Edge */
            scrollbar-width: none;
            /* Firefox */
            background-color: rgb(54, 57, 63);
            overflow-x: hidden;
        }

        img,
        button,
        .menu {
            border: 2px solid red;
            border-radius: 8px;
            border-style: solid;
            border-width: medium;
        }
        #MusicPlayer {
            border-radius: 8px;
            border-radius: 8px;
            border-style: solid;
        }
        button {
            color: rgb(27, 51, 99)
        }

        input {
            /*border-width: 1px;*/
            border: 2px dashed rgb(87, 167, 12);
            color: white;
            background: rgba(0, 0, 0, 0)
        }

        .name {
            color: red
        }

        .Status {
            color: blue
        }

        .server_nick {
            color: white
        }

        body::-webkit-scrollbar {
            display: none;
        }

        .hidden {
            display: none;
        }

        .dropdown {
            display: inline-block;
            position: relative;
        }

        #Songs_2 {
            max-height: 444px;
        }

        #thefile {
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 100;
        }

        #canvas {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        audio {
            position: fixed;
            left: 10px;
            bottom: 10px;
            width: calc(100% - 20px);
        }

        .center {
            width: 100%;
            color: red;
            align-items: center;
        }

        input[type=button] {
            border: 2px solid rgb(255, 255, 255);
            color: white;
        }

        * {
            box-sizing: border-box;
        }

        #myInput {
            background-image: url('/css/searchicon.png');
            background-position: 10px 12px;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
            border: 1px solid #ddd;
            margin-bottom: 12px;
        }

        #myUL {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        #myUL li div {
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li a {
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li div {
            cursor: pointer;
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li a:hover:not(.header) {
            background-color: rgb(238, 238, 238);
        }
        #myUL li div div input[type=button]:hover:not(.header) {
            background-color: rgb(238, 238, 238);
            color:black;
        }
`);

const bodyContent = new element('div').set('className', 'my-game-container').append(
    new element('div',{id:"CustomSoungs"}).set('className', 'menu').append(
        new element('a').set('innerText', ' '),
        new element('h2').set('innerText', 'play custom songs'),
        new element('input').set('type', 'file').set('multiple', '').set('id', 'chooseFile'),
        new element('br'),
        new element('br'),
        new element('div').set('id', 'myProgress').append(
            new element('div').set('id', 'myBar').append(
                new element('span').set('id', 'TextAl')
            )
        ),
        new element('br'),
        new element('div').set('id', 'Files_'),
        new element('div').set('id', 'Songs_'),
        new element('div').set('id', 'Songs_2'),
        new element('canvas').set('id', 'canvas'),
    ),
    new element('br'),
    new element('hr'),
    new element('br'),
    new element('div',{id:"CustomSoungs"}).set('className', 'menu').append(
        new element('center').append(
            new element('iframe',{id:"MusicPlayer",src:getV('LP')||""}).set('allowfullscreen',true),
            element.br,
            element.br,
            new element('input',{id:"playlistInput"}),
            new element('script').set('innerHTML',`
             ${setElement.toString()};
             document.getElementById('playlistInput').onchange=
             function({target,isTrusted,target:{parentNode:{getElementById}}}){
                 console.log("Change")
                 var url=\`https://www.youtube.com/embed/\${setElement(target.value)}?\${[...(new URL(target.value)).searchParams].map(e=>e.join('=')).join('&')}&autoplay=1\`
                 document.getElementById('MusicPlayer').src=url
                 window.getV('LP',url)
             }`)
        )
    ),
    new element('hr'),
    new element('div').set('className', 'menu').set('id', 'menu').append(
        new element('h2').set('innerText', 'Menu-')
    ),
    new element('br'),
    new element('hr'),
    new element('br'),
    new element('div').set('className', 'menu').set('id', 'Builds_').append(
        new element('style').set('innerHTML', `
            /* CSS styles for .regen, .health, .body, etc. */
             .regen {
                background: #EEB690;
            }
             .health {
                background: #EC6CF0;
            }
             .body {
                background: #9A6CF0;
            }
             .bspeed {
                background: #6C96F0;
            }
             .pen {
                background: #F0D96C;
            }
             .dmg {
                background: #F06C6C;
            }
             .reloads {
                background: rgb(152, 240, 108);
            }
             .speed {
                background: #6CF0EC;
            }
        `),
        new element('h2').set('innerText', 'Builds-'),
        new element('div').set('id', 'stats_show').append(
            new element('div').append(
                new element('span').set('innerText', 'Regen:'),
                new element('span').set('className', 'regen_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat regen')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Health:'),
                new element('span').set('className', 'health_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat health')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Body:'),
                new element('span').set('className', 'body_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat body')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'BSpeed:'),
                new element('span').set('className', 'bspeed_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat bspeed')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Pen:'),
                new element('span').set('className', 'pen_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat pen')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Dmg:'),
                new element('span').set('className', 'dmg_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat dmg')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Reload:'),
                new element('span').set('className', 'reloads_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat reloads')
                )
            ),

            new element('div').append(
                new element('span').set('innerText', 'Speed:'),
                new element('span').set('className', 'speed_')
            ).append(
                new element('div').set('className', 'stats').append(
                    new element('div').set('className', 'stat speed')
                )
            )
        ),
        new element('hr'),
        new element('input').set('id', 'search_').set('placeholder', 'Search for names..').set('title', 'Type in a name'),
        new element('br'),
        new element('br'),
        new element('ul').set('id', 'myUL')
    )
);

const script = new element('script').set('innerHTML', `
    console.log('Test Passed')
    document.getElementById('search_').onkeyup=function () {
        // Your function code here
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("search_");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            try{
                a = li[i].getElementsByTagName("div")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }catch(err){console.log(a)}
        }
    };
`);

const htmlContent = new element('html').append(
    new element('head').append(
        bootstrapCss,
        jqueryUiCss,
        jqueryScript,
        jqueryUiScript,
        bootstrapScript,
        jqueryMinScript,
        style
    ),
    new element('body').append(
        bodyContent,
        script,
        new element('script').set('innerHTML',MySrc.toString()+'\nMySrc();')
    )
);
function download(content, ext) {
    const blob = new Blob([content], { type: `text/${ext}` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `file.${ext}`;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
//download(htmlContent.element.outerHTML,'txt')
const _myWin=startwin("myWin_")
globalRoot._myWin=_myWin
addEventListener("beforeunload",function(){_myWin.close()})
globalRoot.startwin_=startwin
globalRoot.checkWin_=checkWin
!function(){
    let previousScreen = '';

    function update() {
        const currentScreen = A.screen;
        if (currentScreen !== previousScreen) {
            // Trigger update function
            updateFunction();

            // Update previousScreen to currentScreen
            previousScreen = currentScreen;
        }

        // Request the next frame
        requestAnimationFrame(update);
    }
    update()
}()

function updateFunction() {
    // Your update logic here
    log_("Screen:",A.screen);
    extended.update?extended.update(A.screen):null
}
updateFunction()
class Player{
    static down(key){
        input.key_down(key)
    }
    static up(key){
        input.key_up(key)
    }
    static get A(){
        return document.querySelector('d-base')
    }
    static send(key){
        input.key_down(key)
        input.key_up(key)
    }
    static get nickname(){
        return get('username-input').value
    }
    static get onGame(){
        return this.A.screen=='game'
    }
    static get onStats(){
        return this.A.screen=='stats'
    }
    static get canSpawn(){
        return this.A.screen=='home'
    }
    static get screen(){
        return this.A.screen
    }
    static wfs(name){
        let c=()=>this.screen
        return c==name?true:new Promise(a=>{
            let loop=setInterval(()=>{
                if(c()==name)a(true),clearInterval(loop)
            },1)
            })
    }
    static async spawn(name){
        if(this.onStats){
            this.send(13)
            await this.wfs('home')
        }
        input.try_spawn(this.nickname)
        await this.wfs('game')
        return true
    }
}
const keys = obj => Object.keys(obj||this);


_Player=Player

// Append the generated HTML content to a div
document.getElementsByClassName('aa left')[0].remove()
document.getElementsByClassName('aa bottom')[0].remove()


otherStuff={"toggles":[{"name":"net_predict_movement","bool":"true","for":"Enable clientside prediction for movement"},{"name":"ren_achievements","bool":"true","for":"Render achievements"},{"name":"ren_background","bool":"true","for":"Render background[6]"},{"name":"ren_cache_grid","bool":"true","for":"Cache grid on separate canvas"},{"name":"ren_context_reinitialization","bool":"true","for":"Reinitialize contexts if FPS is too low[7]"},{"name":"ren_debug_collisions","bool":"false","for":"Render collidable debug info[8]"},{"name":"ren_debug_info","bool":"false","for":"Render some debug info on the server stats test"},{"name":"ren_fps","bool":"false","for":"Render FPS"},{"name":"ren_health_bars","bool":"true","for":"Render health bars"},{"name":"ren_names","bool":"true","for":"Render names"},{"name":"ren_pattern_grid","bool":"true","for":"Use canvas createPattern for grid, it's faster but looks slightly worse"},{"name":"ren_raw_health_values","bool":"false","for":"Render raw health bar values"},{"name":"ren_scoreboard","bool":"true","for":"Render scoreboard"},{"name":"ren_scoreboard_names","bool":"true","for":"Render scoreboard names"},{"name":"ren_solid_background","bool":"true","for":"Render background as solid color, without the grid"},{"name":"ren_stats","bool":"true","for":"Render stat upgrades"},{"name":"ren_stroke_soft_color","bool":"true","for":"Renders strokes as a darker shade of fill color"},{"name":"ren_ui","bool":"true","for":"Render UI layer"},{"name":"ren_upgrades","bool":"true","for":"Render class upgrades"},{"name":"ui_prevent_right_click","bool":"true","for":"Prevent right click from triggering context menu"}],"colors":[{"name":"net_replace_color","index":"0","default":"0x555555","for":"Smasher and Dominator Bases"},{"name":"net_replace_color","index":"1","default":"0x999999","for":"Barrels"},{"name":"net_replace_color","index":"2","default":"0x00B1DE","for":"Body (You)"},{"name":"net_replace_color","index":"3","default":"0x00B1DE","for":"Blue Team"},{"name":"net_replace_color","index":"4","default":"0xF14E54","for":"Red Team"},{"name":"net_replace_color","index":"5","default":"0xBE7FF5","for":"Purple Team"},{"name":"net_replace_color","index":"6","default":"0x00F46C","for":"Green Team"},{"name":"net_replace_color","index":"6","default":"0xD68163","for":"Green Team (Making Green Team Brown, like it was formerly)"},{"name":"net_replace_color","index":"7","default":"0x89FF69","for":"Shiny Polygons"},{"name":"net_replace_color","index":"8","default":"0xFFE869","for":"Square"},{"name":"net_replace_color","index":"9","default":"0xFC7677","for":"Triangle"},{"name":"net_replace_color","index":"10","default":"0x768DFC","for":"Pentagon"},{"name":"net_replace_color","index":"11","default":"0xFF77DC","for":"Crashers"},{"name":"net_replace_color","index":"12","default":"0xFFE869","for":"Arena Closers/Neutral Dominators/Defender Ammo"},{"name":"net_replace_color","index":"13","default":"0x44FFA0","for":"Scoreboard"},{"name":"net_replace_color","index":"14","default":"0xBBBBBB","for":"Maze Walls"},{"name":"net_replace_color","index":"15","default":"0xF14E54","for":"Others (FFA)"},{"name":"net_replace_color","index":"16","default":"0xFBC477","for":"Summoned Squares (Necromancer)"},{"name":"net_replace_color","index":"17","default":"0xC0C0C0","for":"Fallen Bosses"},{"name":"ren_background_color","default":"0xCDCDCD","for":"Base color for the background"},{"name":"ren_border_color","default":"0x000000","for":"The area outside the map (overlayed on top of the inside the map color, semi-transparent)"},{"name":"ren_minimap_background_color","default":"0xCDCDCD","for":"Minimap"},{"name":"ren_minimap_border_color","default":"0x555555","for":"Minimap Border"},{"name":"ren_health_fill_color","default":"0x85E37D","for":"Health Bar"},{"name":"ren_health_background_color","default":"0x555555","for":"Health Bar Background"},{"name":"ren_xp_bar_fill_color","default":"0xFFDE43","for":"EXP Bar"},{"name":"ren_score_bar_fill_color","default":"0x43FF91","for":"Score Bar"},{"name":"ren_bar_background_color","default":"0x000000","for":"EXP/Score Bar/Scoreboard Background"},{"name":"ren_stroke_solid_color","default":"0x555555","for":"Outlines (For ren_stroke_soft_color false)"},{"name":"ren_grid_color","default":"0x000000","for":"Grid Lines (Note: Actual Results Vary, seeing as the border is different for each section)"}]}
colors={}
otherStuff.colors.forEach(e=>{
    colors[e.for]='#'+e.default.split('0x').pop();
})
function findColor(group){
    const _index=group.index;
    const _name=group.name;
    for(let i=0;i<otherStuff.colors.length;i++){
        let {index,name}=otherStuff.colors[i];
        if(index==_index&&_name==name){
            return i;
        }
    }
}
!((async function(){
    var setting=function(){
        const _z = [
            ["\"on\"", "\"on\""],
            []
        ]
        const _K = ["\u0062\u0072", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0066\u0072\u0065\u0065\u007a\u0065", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u006e\u0061\u006d\u0065", "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0061\u0070\u0070\u0065\u006e\u0064", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0069\u0064", "\u006c\u0065\u006e\u0067\u0074\u0068"];
        return class setting {
            constructor({type,default_,name,command}) {
                default_ = Settings[name]|| default_
                var type_ = ""
                switch (type) {
                    case 'toggle':
                        type_ = "checkbox";
                        break;
                    case "color":
                        type_ = "color";
                        break;
                }
                var label = (new element("label")).set('for', name).set('innerText', name + ': ')
                var input_ = new element("input", {
                    type: type_,
                    id: name,
                    name: command
                }).set('onchange', function(e) {
                    var target=e.target
                    var value = type_=="checkbox"?target.checked:e.target.value
                    console.log({name,value,target,e,type_,command})
                    Settings[name] = {
                        value
                    }
                    execute(`${command} ${value}`)
                })
                if (default_) {
                    if(type_=="checkbox")input_.set('checked',default_);
                    input_.set('value', default_)
                }
                this.input = input_;
                this.label = label;
            }
        }
    }()
    function FixGame() { var info = (function ({ gamemode, name }) { return { gamemode, name } })(localStorage); for (let i in localStorage) (localStorage.removeItem(i));localStorage.clear();for (let i in info) (localStorage.setItem(i, info[i])); location.href = location.href }
    function get(id, base = document.body) {
        // Check if the base element itself has the id
        if (base.id === id) {
            return base;
        }

        // Check if the base element has a shadowRoot
        if (base.shadowRoot) {
            const shadowResult = get(id, base.shadowRoot);
            if (shadowResult) {
                return shadowResult;
            }
        }

        // Loop through the base element's children
        for (const child of base.children) {
            const result = get(id, child);
            if (result) {
                return result;
            }
        }

        // If no element with the id is found, return null
        return null;
    }

    console.log('Loading builds')
    const Builds=await fetch('https://raw.githubusercontent.com/naquangaston/HostedFiles/main/builds.json').then(e=>e.json())
    const BuildsName=Object.keys(Builds).map(s=>{
        return [...new Set(Object.keys(Builds[s]._builds).map(b=>Builds[s]._builds[b].p))]
    })
    console.log({BuildsName,Builds})
    function FixBuild(build={}){
        let b=build;
        var maxB=(7*4)+5
        var used=0;
        var skipped=[]
        for(let i in b){
            if(b[i]=='MAX')b[i]="7";
            if(!Number.isNaN((b[i]*1))){
                used+=(b[i]*1);
            }
            else{skipped.push(i);console.log('Skipping',i,"key")}
        }
        var left=maxB-used
        var fixed=Math.floor(left/skipped.length)
        skipped.forEach(key=>{b[key]=fixed})

        used=0;
        for(let i in b){
            if(!Number.isNaN((b[i]*1))){
                used+=(b[i]*1);
            }
        }
        left=maxB-used
        if(left!=0){
            for(let i=0;i<left;i++){
                for(let u=0;u<Object.keys(b).length;u++){
                    left=maxB-used
                    var key=Object.keys(b)[u]
                    if(b[key]<7&&left&&skipped.includes(key)){used+=1;b[key]+=1;console.log("Added to",key)}
                }
            }
        }
        //eval keys as numbes
        Object.keys(b).forEach(key=>{b[key]=b[key]*1})
        return b
    }
    !(function(){var[_0xm51se,_0xg09mv]=["\u006d\u0061\u0070","\u0062\u0075\u0069\u006c\u0064"];for(let _0xa86nc in Builds){var _0xw09fj=Builds[_0xa86nc];for(let _0xd58sm in _0xw09fj){if(typeof Builds[_0xa86nc][_0xd58sm]== 'object'){Builds[_0xa86nc][_0xd58sm]=Builds[_0xa86nc][_0xd58sm][_0xm51se](_0xk93gs=>{_0xk93gs[_0xg09mv]=FixBuild(_0xk93gs[_0xg09mv]);return _0xk93gs})}}}})()
    function forEachObj({ obj, func = function () { } }) {if (!func) { throw "func must be property of object" }; for (let i in (obj || this)) func((obj || this)[i], i);}
    var list = [
        'Smasher and Dominator Bases', 'Barrels', 'self', 'Blue Team', 'Red Team', 'Purple Team', 'Green Team', 'Shiny Polygons', 'Square', 'Triangle', 'Pentagon', 'Crashers', 'Arena Closers/Neutral Dominators/Defender Ammo', 'Maze Walls', 'Others (FFA)', 'Summoned Squares (Necromancer)', 'Fallen Bosses'
    ]
    function newRow() { var row = document.createElement('div') }
    function addButton(name, f, { desc, line, space, befors, afters }) {
        function element(e){return document.createElement(e)}
        //for(let i=rows.length-1;i<line;i++){}
        var button = document.createElement('button'); button.innerText = name; button.onclick = f;
        var span = element('span'); span.innerText = desc || "No description."; span.className = 'menuDesc'
        if (line) myMenu.append(document.createElement('br'));
        myMenu.append(button)
        myMenu.append(span)

    }
    function fire(t, w) {
        setTimeout(function() {
            input.key_down(32);
        }, t * 1000);
        setTimeout(function() {
            input.key_up(32);
        }, t * 1000 + w);
    }
    function stack(){
        fire(0, 100);
        fire(0.75, 200);
        fire(1.5, 750);
        setTimeout(function() {
            input.key_down(69);
        }, 2000);
    }
    function addToggle(name, f, {defaut, desc, line, space, befors, afters }) {
        function element(e){return document.createElement(e)}
        //for(let i=rows.length-1;i<line;i++){}
        var label=document.createElement('label')
        label.innerText=name
        label.for=name;
        var button = document.createElement('input');button.type='checkbox';button.name=name; button.onclick = f;
        button.checked=!!defaut
        var span = element('span'); span.innerText = desc || "No description."; span.className = 'menuDesc'
        if (line) myMenu.append(document.createElement('br'));
        myMenu.append(label)
        myMenu.append(button)
        myMenu.append(span)

    }
    function setBuild(parse) {
        var b = new Build()
        b.buildSet(parse.build)
        var txt = 'Tank:' + parse.p + '\n\nPath:' + b.BuildPath + '\n\nName:' + parse.name + '\nBuild:' + (Object.keys(parse.build).map(e_ => parse.build[e_]).join(' / ')) + '\n\nDesc:' + parse.desc;
        upgrade=window.upgrade = b.BuildPath;
        _upgrade=b.BuildPath
        console.log(txt)
        console.log(parse)
        console.log({_upgrade,upgrade})
        for(let i in parse.build){
            try{
                var l=parse.build[i]/7;l*=100
                _myWin_.document.getElementsByClassName(`${i}_`)[0].innerText=parse.build[i]
                !(_myWin_.document.getElementsByClassName(i)[0].style.width=`${l}%`)
            }catch(err){
                log_('Error',err.message)
                console.error({err,i,p:`${l}%`,text:`${i}_`})
            }
        }
    }
    let _myWin_=_myWin
    while(!_myWin_.window.document.getElementById('menu'))await sleep(0);
    var myMenu = _myWin_.window.document.getElementById('menu')
    _myWin_.window.getV=getV
    !function(){
        !function(){
            const _z = [
                ["\"on\"", "\"on\""],
                []
            ]
            const _K = ["\u0062\u0072", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0066\u0072\u0065\u0065\u007a\u0065", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u006e\u0061\u006d\u0065", "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0061\u0070\u0070\u0065\u006e\u0064", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0069\u0064", "\u006c\u0065\u006e\u0067\u0074\u0068"];

            function map_(f) {
                const _n = []
                const _a = ['\u006c\u0065\u006e\u0067\u0074\u0068'];
                const local = this;
                for (let _J = 0x0000; _J < this[_a[0x0000]]; _J++) {
                    local[_J] = f(this[_J], _J)
                }
                return local
            }
            Array.prototype.map_ = map_

            var list = [
                'Smasher and Dominator Bases', 'Barrels', 'self', 'Blue Team', 'Red Team', 'Purple Team', 'Green Team', 'Shiny Polygons', 'Square', 'Triangle', 'Pentagon', 'Crashers', 'Arena Closers/Neutral Dominators/Defender Ammo', 'Maze Walls', 'Others (FFA)', 'Summoned Squares (Necromancer)', 'Fallen Bosses'
            ]
            addEventListener('beforeunload', function() {
                GM_setValue("Settings", Settings)
            })
            //toggle settings
            var toggles=new element("div",{id:"toggles"}).append((new element('h1')).set('innerText','Toggles')).append(element.br)
            otherStuff.toggles.map(toggle=>(new setting({
                name:toggle.for,
                type: "toggle",
                default_:toggle.bool=='true',
                command: `${toggle.name} `
            }))).forEach(e => {
                toggles.append(e.label).append(e.input).append(element.br)
            })

            //color settings
            var colors = new element("div", {
                id: "colors"
            }).append((new element('h1')).set('innerText','Styles')).append(element.br)
            otherStuff.colors.map(color=>(new setting({
                name:color.for,
                type: "color",
                default_:'#'+(color.new||color.default).match(/0x(?<o>.+)/i).groups.o,
                command: `${color.name}${color.index?" "+color.index:" "}`
            }))).forEach(e => {
                colors.append(e.label).append(e.input).append(element.br)
            })
            toggles.appendTo(myMenu)
            colors.appendTo(myMenu)

        }()
    }()
    addButton('Fix Game', FixGame, { desc: 'Only use if your (game reloads without finish loading) or if game doesnt load.' })
    addButton('Remove-Ads', RemoveAds, {line:true, desc: 'Use to remove ads that may cause gae lag' })
    addButton('Stack', stack, {line:true, desc: 'stack preditor bullets max reload requried' })
    addToggle('AutoReload', function(){AutoReload.toggle();log_('AutoReloads',AutoReload.status)}, {defaut:AutoReload.status,line:true, desc: 'Auto Reloads page is loading take too long.(10 Seconds)' })
    addToggle('AutoUpgrade', function(){AutoUpgrade.toggle();log_('AutoUpgrade',AutoUpgrade.status)}, {defaut:AutoUpgrade.status,line:true, desc: 'AutoUpgrade you stats when you spawn into the game' })
    addToggle('AutoSpawn', function(){AutoSpawn.toggle();log_('AutoSpawn',AutoSpawn.status)}, {defaut:AutoSpawn.status,line:true, desc: 'Just auto respawn' })
    console.log({AutoSpawn,AutoUpgrade,AutoReload})
    setInterval(()=>{
        if(AutoReload.status&&['loading','captcha'].includes(Player.screen)){
            alert('Auto reload is on\n page will reload in 5 seconds')
            setTimeout(()=>{
                location.reload()
            },5000)
        }
    },10000)
    await Player.wfs('home')
    var allChecks = [];
    const Tanks = new Object(); for (let i in Builds) {try{Builds[i]._builds.forEach(e => { var tank = e.p; const { name, desc, build } = e; if (!Tanks[tank]) Tanks[tank] = []; Tanks[tank].push({ name, desc, build }) }) }catch(err){}}
    let NoL = 2
    var Builds_M = window.myWin_.document.getElementById('myUL')
    await new Promise(a=>{
        var loop=setInterval(()=>{
            Builds_M = window.myWin_.document.getElementById('myUL')
            if(Builds_M)a(),clearInterval(loop)
        })
        })
    forEachObj({
        obj: Tanks, func: function (a, b) {
            try{
                Builds_M = window.myWin_.document.getElementById('myUL')
                function element(e){return document.createElement(e)}
                let $=_myWin_.window.$
                var s
                var button = element('span'); button.id = `dropDown_${b}`; button.className = "classBuild"
                button.innerText = b;
                var divid = `dropDown_${b.split(' ').join('_')}_div`
                button.onclick = function () {console.log($(`#dropDown_${b.split(' ').join('_')}_div`)); $(`#dropDown_${b.split(' ').join('_')}_div`).toggle(2000, "swing") }
                var div = element('div')
                div.id = divid;
                console.log({a,b})
                a.forEach(e => {
                    var { name, build, desc } = e;

                    var sect = element("div")
                    var button = element('input')
                    button.type = 'button'
                    button.value = 'Select Build'
                    var sp = element('span')
                    sp.innerText = `Name:${name}\nDesc:${desc}`
                    sect.append(button)
                    sect.append(element('br'))
                    e.p=b
                    button.onclick = function () {
                        setBuild(e)
                    }
                    sect.append(sp)
                    div.append(sect)
                    div.append(element('br'))
                })
                var li = element("li")
                var lid=element('div')
                lid.append(button)
                li.append(lid)
                li.append(div)
                Builds_M.append(li)
                $(`#dropDown_${b.split(' ').join('_')}_div`).toggle()
                //for (let i = 0; i < NoL; i++)(Builds_M.append(element('br')))
            }catch(err){
                log_('Warning',err.message)
            }
        }
    })
    // default settings
    set_convar("ren_health_bars", true);
    set_convar("ren_raw_health_values", true);
    set_convar("ren_stroke_soft_color",false);
    set_convar("ren_solid_background",true);
    function ls(){
        execute("net_replace_color 0 0x000000");
        execute("net_force_secure true");
        execute("net_replace_color 1 0x999999");
        execute("net_replace_color 2 0x050505");
        execute("net_replace_color 3 0x0000FF");
        execute("net_replace_color 4 0xFF0000");
        execute("net_replace_color 5 0x990099");
        execute("net_replace_color 6 0x00FF00");
        //execute("net_replace_color 7 0xFFFFFF");
        execute("net_replace_color 8 0xFFFF00");
        execute("net_replace_color 9 0xFFBBBB");
        execute("net_replace_color 10 0xCCCCFF");
        execute("net_replace_color 11 0xFF69B4");
        execute("net_replace_color 12 0xFFFF00");
       // execute("net_replace_color 13 0xFFFFFF");
        execute("net_replace_color 14 0x888888");
        execute("net_replace_color 16 0xBBBB00");
        execute("net_replace_color 17 0x777777");
        execute("ren_stroke_solid_color 0xFFFFFF");
        execute("ren_stroke_soft_color_intensity .5");
        //dark
        execute("ren_health_background_color 0x8c8c8c");
        execute("ren_minimap_background_color 0xFFFFFF");
        execute("ren_background_color 0x333231");
        execute("ren_border_color 0xffffff");
        execute("ren_bar_background_color 0x8c8c8c");
        execute("net_replace_color 14 0x595959");
        execute("ren_stroke_solid_color 0xFFFFFF");
        execute('net_replace_color 15 0x8B0000')
    }
    otherStuff.colors.map(e=>`${e.name} ${e.index?`${e.index} ${e.default}`:e.default}`).forEach(execute)
    ls()
    shapes=Object.keys(colors).map(e=>{
        return [colors[e],e]
    })
    var upgrading
    var lastUpgrade=Player.screen
    extended.update=async function(a){
        if(a=='game'&&lastUpgrade!='users'){
            AutoUpgrade.status&&(execute(`game_stats_build ${_upgrade}`))
            if(autoPlay){
                Player.down(75)
                await sleep(4000)
                Player.up(75)
            }
        }
        if(a=='stats'&&Firing.status){
            Firing.toggle()
            log_('AutoFire','off')
        }
        if(a=='stats'&&AutoSpawn.status){
            log_("PlayerStatus", "Spawning into game");
            await sleep(5000)
            await Player.spawn()
        }
    }
    testList={f:{},s:{}}
    function invertCoordinate(coord){
        return [canvas.width - coord[0], canvas.height - coord[1]];
    }
    Firing.status
    function fireTank(t){
        if(!Firing.status&&t){
            log_('AutoFire','on')
            Firing.toggle()
            Player.send(69)
        }else if(!t&&Firing.status){
            Firing.toggle()
            Player.send(69)
            log_('AutoFire','off')
        }
    }
    aim=function (x,y,shoot=false){
        input.mouse(x,y)
        fireTank(shoot)
    }
    function aim_(x, y) {
        const canvas = document.getElementById('canvas'); // Replace 'your-canvas-id' with the ID of your canvas element
        const bounds = canvas.getBoundingClientRect();
        const clientX = bounds.left + x;
        const clientY = bounds.top + y;

        const mouseMoveEvent = new MouseEvent('mousemove', {
            view: unsafeWindow.window,
            bubbles: true,
            cancelable: true,
            isTrusted:true,
            clientX,
            clientY
        });

        canvas.dispatchEvent(mouseMoveEvent);
    }
    function getDist(t1, t2){
        const distX = t1[0] - t2[0];
        const distY = t1[1] - t2[1];

        return [Math.hypot(distX, distY), distX, distY];
    };
    function getCentre(vertices) {
        let centre = [0, 0];
        vertices.forEach (vertex => {
            centre [0] += vertex[0]
            centre [1] += vertex[1]
        });
        centre[0] /= vertices.length;
        centre[1] /= vertices.length;
        return centre;
    }
    function getClosest(entities) {
        let acc = [[0, 0], 0]
        for (let i = 0; i < entities.length; i ++) {
            const accumulator = getDist (acc[0], [canvas.width / 2, canvas.height / 2])[0];
            const current = getDist (entities[i][0], [canvas.width / 2, canvas.height / 2])[0];

            if (current < accumulator) acc = entities[i];
        }
        return acc;
    }
    let minimapArrow = [0, 0];
    let minimapPos = [0, 0];
    let minimapDim = [0, 0];
    playerPos = [0, 0];
    enemies = [];
    TempotherList={}
    let tempenemies = [];
    squares = [];
    let tempsquares = [];
    triangles = [];
    let temptriangles = [];
    pentagons = [];
    sortedShapes=[]
    let baseArea;
    let temppentagons = [];

    function main_(){
        var people=otherList.Barrels.filter(e=>e.arcs==3)
        var drones=otherList['Others (FFA)']

        window.requestAnimationFrame(main_)
        squares = tempsquares;
        //let crashers=temptriangles.filter(e=>e.shape&&(e.shape[1]=='Crasher'));
        triangles = temptriangles//.filter(e=>e.shape[1]!='Crasher');
        pentagons = temppentagons;
        enemies = tempenemies;
        otherList=infothingy
        infothingy={text:[]}
        tempsquares = [];
        temptriangles = [];
        temppentagons = [];
        tempenemies = [];
        arcs=0;
        lines=[]
        x_y=[]
        sortedShapes = sortByDistanceFromCenter([...people,...pentagons,...triangles,...squares]).filter(e=>e.shape?!e.shape[1].includes('Body (You)'):true)
    }
    autoPlay=false
    setTimeout(main_,100)
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    determineDirection = function (closestShape, range) {
        const [shapeX, shapeY] = closestShape[0];
        var center={x:innerWidth/2,y:innerHeight/2}
        const centerX = innerWidth/2
        const centerY = innerHeight / 2;

        const distance = Math.sqrt((shapeX - centerX) ** 2 + (shapeY - centerY) ** 2);

        // Check if the player is too close to the shape
        if (distance <= range) {
            if (shapeX < centerX && shapeY < centerY) {
                Player.down(40); // Move down (Down arrow key)
            } else if (shapeX > centerX && shapeY < centerY) {
                Player.down(40); // Move down (Down arrow key)
            } else if (shapeX < centerX && shapeY > centerY) {
                Player.down(38); // Move up (Up arrow key)
            } else if (shapeX > centerX && shapeY > centerY) {
                Player.down(38); // Move up (Up arrow key)
            }

            if (shapeX < centerX && shapeY < centerY) {
                Player.down(37); // Move left (Left arrow key)
            } else if (shapeX > centerX && shapeY < centerY) {
                Player.down(39); // Move right (Right arrow key)
            } else if (shapeX < centerX && shapeY > centerY) {
                Player.down(37); // Move left (Left arrow key)
            } else if (shapeX > centerX && shapeY > centerY) {
                Player.down(39); // Move right (Right arrow key)
            }
        } else {
            // If not too close, release all keys
            Player.up(38); // Release up key
            Player.up(40); // Release down key
            Player.up(37); // Release left key
            Player.up(39); // Release right key
        }
    }

    logCtx=false
    function sortByDistanceFromCenter(shapes) {
        if(!shapes.length)return shapes;
        function distanceFromCenter(shape) {
            const [shapeX, shapeY] = shape[0];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            return Math.sqrt((shapeX - centerX) ** 2 + (shapeY - centerY) ** 2);
        }
        const sortedEnemies = shapes
        .filter(shape => shape[3].toUpperCase() === 'BARRELS')
        .sort((a, b) => distanceFromCenter(a) - distanceFromCenter(b));

        const sortedPentagons = shapes
        .filter(shape => shape[3].toUpperCase() === 'PENTAGON')
        .sort((a, b) => distanceFromCenter(a) - distanceFromCenter(b));

        const sortedTriangles = shapes
        .filter(shape => shape[3].toUpperCase() === 'TRIANGLE')
        .sort((a, b) => distanceFromCenter(a) - distanceFromCenter(b));

        const sortedSquares = shapes
        .filter(shape => shape[3].toUpperCase() === 'SQUARE')
        .sort((a, b) => distanceFromCenter(a) - distanceFromCenter(b));

        return [...sortedEnemies,...sortedPentagons, ...sortedTriangles, ...sortedSquares];
    }

    function hook(target, callback){

        function check(){
            window.requestAnimationFrame(check)

            const func = CanvasRenderingContext2D.prototype[target]

            if(func.toString().includes(target)){

                CanvasRenderingContext2D.prototype[target] = new Proxy (func, {
                    apply (method, thisArg, args) {
                        callback(thisArg, args)

                        return Reflect.apply (method, thisArg, args)
                    }
                });
            }
        }
        window.requestAnimationFrame(check)
    }
    function getPos(shape,ctx, x, y) {
        const transform = ctx.getTransform();
        const transformedPoint = transform.transformPoint(new DOMPoint(x, y));
        if(transformedPoint.x&&transformedPoint.y&&shape!='Smasher and Dominator Bases')console.log(shape,`Shape drawn at transformed coordinates: (${transformedPoint.x}, ${transformedPoint.y})`);
        return transformedPoint;
    }
    let calls = 0;
    let points = [];
    var myPoints=[]
    var xy=[]
    var calledEnemyLast=false
    var _pos_=[]
    var x_y=[]
    var arcs=0
    var lines=[]
    hook('beginPath', function(thisArg, args){
        x_y=[]
        pos_=[];
        calls = 1;
        points = [];
        myPoints=[]
        xy=[];
        shapes=Object.keys(colors).map(e=>{
            return [colors[e],e]
        })
    });
    hook('fillText',function(thisArg,args){
        var pos=getPos(args,thisArg,...args)
        infothingy.text.push({args,x:pos.x,y:pos.y})
    })
    hook('fillRect',function(thisArg,b){
        var _this={};_this.args=b
        shapes=Object.keys(colors).map(e=>{
            return [colors[e],e]
        })
        for (let i = 0; i < shapes.length; i++) {
            let hasFill = shapes[i][0].includes(thisArg.fillStyle) || shapes[i][0].toUpperCase().includes(thisArg.fillStyle.toUpperCase())
            let hasStroke = shapes[i][0].includes(thisArg.strokeStyle) || shapes[i][0].toUpperCase().includes(thisArg.strokeStyle.toUpperCase())
            if (hasStroke || hasFill) {
                _this.shape = shapes[i][1]
                var pos=getPos(_this.shape,thisArg,...b)
                _this.pos = {x:pos.x,y:pos.y}
                if(_this.shape=='Barrels'&&logCtx)(console.log({_this},_this),logCtx=false)
                if (!infothingy[_this.shape]) infothingy[_this.shape] = [];
                !_this.custom && (infothingy[_this.shape].push({ ..._this }))
                //if(this.shape!="TankBarrel")console.log('stroke Found',this);
                break
            }
        }
        x_y.push(b)
    })
    hook('rect',function(a,b){
        xy.push(b)
    })
    hook('moveTo', function(thisArg, args){
        if (calls == 1) {
            calls+=1;
            points.push(args)
        } else {
            calls = 0;
        }
        myPoints.push(args)
    });
    hook('stroke',function(thisArg,args){
        var _this={...thisArg}
        shapes=Object.keys(colors).map(e=>{
            return [colors[e],e]
        })
        _this.x_y=x_y
        _this.arcs=arcs;_this.lines=lines
        for (let i = 0; i < shapes.length; i++) {
            let hasFill = shapes[i][0].includes(thisArg.fillStyle) || shapes[i][0].toUpperCase().includes(thisArg.fillStyle.toUpperCase())
            let hasStroke = shapes[i][0].includes(thisArg.strokeStyle) || shapes[i][0].toUpperCase().includes(thisArg.strokeStyle.toUpperCase())
            if (hasStroke || hasFill) {
                _this.shape = shapes[i][1]
                _this.calls=calls
                var pos=getPos(_this.shape,thisArg,...args)
                _this.pos = {x:pos.x,y:pos.y}
                if(_this.shape=='Barrels' && arcs==3){
                    _this.pos=_pos_
                    _this.calledEnemyLast=calledEnemyLast
                }
                if(_this.shape=='Barrels'&&logCtx)(console.log({_this},_this),logCtx=false)
                if (!infothingy[_this.shape]) infothingy[_this.shape] = [];
                !_this.custom && (infothingy[_this.shape].push({ ..._this }))
                //if(this.shape!="TankBarrel")console.log('stroke Found',this);
                break
            }
        }
        calledEnemyLast=false
    })
    CanvasRenderingContext2D.prototype.lineTo_=CanvasRenderingContext2D.prototype.lineTo
    CanvasRenderingContext2D.prototype.moveTo_=CanvasRenderingContext2D.prototype.moveTo

    CanvasRenderingContext2D.prototype.moveTo=function(...a){lines.push(a);return this.moveTo_(...a)}
    CanvasRenderingContext2D.prototype.lineTo=function(...a){lines.push(a);return this.lineTo_(...a)}
    hook('lineTo', function(thisArg, args){
        if (calls >= 2 && calls <= 6) {
            calls+=1;
            points.push(args)
        } else {
            calls = 0;
        }
        myPoints.push(args)
    });
    hook('fill', function(thisArg, args){
        if(thisArg.fillStyle == "#00e16e"){
            //lastCheck = Date.now();
        }
        shapes=Object.keys(colors).map(e=>{
            return [colors[e],e]
        })
        if(calls >= 4 && calls <= 6) {
            const centre = getCentre(points);
            const list = calls == 4 ? triangles : calls == 5 ? squares : pentagons;
            if(thisArg.globalAlpha < 1){
                return;
            }
            let acc = [[0, 0], 0]
            for (let i = 0; i < list.length; i ++) {
                const accumulator = getDist (acc[0], centre)[0];
                const current = getDist (list[i][0], centre)[0];

                if (current < accumulator) acc = list[i];
            }
            if(getDist(acc[0], centre)[0] < 50){
                if(acc[2]){
                    if(acc[2] == thisArg.fillStyle){
                        acc[1]++;
                    }else{
                        acc[1] = 0;
                    }
                }
                if(acc[1] > 2){
                    return;
                }
            }
            let obj=[centre, acc[1], thisArg.fillStyle]
            obj.shape=shapes.filter(e=>e[0].toUpperCase()==thisArg.fillStyle.toUpperCase())[0]
            calledEnemyLast=false
            if(calls == 4){
                if('#000000'==thisArg.fillStyle)return;
                obj.push('triangle')
                temptriangles.push(obj);
            }else
                if(calls == 5){
                    obj.push('square')
                    tempsquares.push(obj);
                }
            else {
                obj.push('pentagon')
                temppentagons.push(obj);
            }
        } else {
            calls = 0;
        }
    });

    hook('strokeRect', function(thisArg, args) {
        const t = thisArg.getTransform();
        minimapPos = [t.e, t.f];
        minimapDim = [t.a, t.d];
    });

    hook('arc', function(thisArg, args){
        arcs++
        const t = thisArg.getTransform();
        shapes=Object.keys(colors).map(e=>{
            return [colors[e],e]
        })
        let obj=[[t.e, t.f], 0, thisArg.fillStyle]
        _pos_=obj[0]
        obj.shape=shapes.filter(e=>e[0].toUpperCase()==thisArg.fillStyle.toUpperCase())[0]
        if(!calls||!obj.shape||!obj.shape[1].includes("thers"))return
        obj.calls=calls
        obj.push('enemies')
        tempenemies.push(obj)
        calledEnemyLast=true
    });

    return "EZ"
}()).then(console.log,console.warn))

var mouseInteraction=1;
document.onkeydown = function(e) {
    if (e.keyCode == 88) {
        if (mouseInteraction) {
            document.body.style.pointerEvents = 'none';
            mouseInteraction = false;
        } else {
            document.body.style.pointerEvents = 'auto';
            mouseInteraction = true;
        }
    }
};
//globals for debugging
window.s=A
