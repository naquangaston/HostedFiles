function REMOVE_SPACEfINAL(s){
    while(s.match(/(.)\n+([\s]+)?(.)/gi)){
    [...s.match(/(.)\n+([\s]+)?(.)/gi)].forEach(e=>{
    var test=(str,a,b)=>{
        try{eval(`function a(){${str.replace(a,b)}}`);return true}catch{return false}
    }
    var[a,b,c,d]=[...e.match(/(.)\n+([\s]+)?(.)/)]
    var joiners=['',';',',']
    for(let i=0;i<joiners.length;i++){
        let j=joiners[i]
        if(test(s,a,`${b}${j}${d}`)){
            s=s.replace(a,`${b}${j}${d}`)
        }
    }
    console.log({a,b,c})
})
};return s
}
/**
 * Represents a permutation index.
 * @extends Array
 */
class PermIndex extends Array {
    /**
     * Private field to store generated permutations.
     * @private
     */
    #items = [];

    /**
     * Creates an instance of PermIndex.
     * @param {number} length - The length of permutations to generate.
     */
    constructor(length) {
        super();
        this.#generatePermutations(length);
        this.push(...this.#items);
        this.used=new Set();
    }

    /**
     * Generates permutations of given length.
     * @param {number} length - The length of permutations to generate.
     * @param {string} [prefix=''] - The prefix for permutations.
     * @private
     */
    #generatePermutations(length, prefix = '') {
        if (length === 0) {
            this.#items.push(prefix);
            return;
        }

        for (let i = 0; i < 26; i++) {
            const char = String.fromCharCode(97 + i); // 'a' to 'z'
            this.#generatePermutations(length - 1, prefix + char);
        }
    }

    /**
     * Get a random permutation from the list.
     * @returns {string} A random permutation.
     */
    getRandom() {
        let a=this.#items.filter(e=>![...this.used].includes(e))
        if(!a.length)return false;
        const randomIndex = Math.floor(Math.random() * a.length);
        this.used.add(a[randomIndex])
        return a[randomIndex];
    }
}

/**
 * Represents a variable name generator.
 */
class Variable {
  /**
   * Creates an instance of Variable.
   * @param {number} maxLength - The maximum length of variable names.
   * @throws {Error} If maxLength is not between 1 and 26.
   */
  constructor(maxLength) {
  	if(maxLength==undefined||maxLength==null)maxLength=26;
    if (Number.isNaN(maxLength)) {
      throw new Error("Maximum length must be Number.");
    }

    this.maxLength = maxLength;
    this.permutations = [];
    this.generatePermutations();
    this.used = new Set();
  }

  /**
   * Generate permutations for each length up to maxLength.
   */
  generatePermutations() {
    for (let length = 1; length <= this.maxLength; length++) {
      const permutations = new PermIndex(length);
      this.permutations.push(permutations);
    }
  }

  /**
   * Get a permutation generator for a specific length.
   * @returns {PermIndex} A permutation generator for the specified length.
   */
  get length() {
    const self = this;
    return new Proxy({}, {
      get(target, prop) {
        const index = parseInt(prop);
        if (isNaN(index) || index < 1 || index > self.maxLength) {
          throw new Error(`Invalid index: ${prop}`);
        }
        return self.permutations[index - 1];
      },
    });
  }
}


!function(){
  const scriptUrls = [".//JS_Formatter_.js",'.//JS_obf.js'];

  
;(function(_0xe846f4,_0x37ca4a){const _0x25244f=_0x598d,_0x6fd019=_0xe846f4();while(!![]){try{const _0x9b7bc2=-parseInt(_0x25244f(0x178))/0x1+-parseInt(_0x25244f(0x16d))/0x2+-parseInt(_0x25244f(0x171))/0x3+-parseInt(_0x25244f(0x174))/0x4+parseInt(_0x25244f(0x17a))/0x5*(parseInt(_0x25244f(0x16e))/0x6)+parseInt(_0x25244f(0x16f))/0x7+-parseInt(_0x25244f(0x177))/0x8*(-parseInt(_0x25244f(0x172))/0x9);if(_0x9b7bc2===_0x37ca4a)break;else _0x6fd019['push'](_0x6fd019['shift']());}catch(_0x2298a1){_0x6fd019['push'](_0x6fd019['shift']());}}}(_0x2b61,0xed69a));function _0x598d(_0x4830b5,_0x33fcef){const _0x2b6136=_0x2b61();return _0x598d=function(_0x598dd5,_0x227698){_0x598dd5=_0x598dd5-0x16d;let _0x473647=_0x2b6136[_0x598dd5];return _0x473647;},_0x598d(_0x4830b5,_0x33fcef);}function _0x2b61(){const _0x19672d=['5413340DhIjKw','text','\x20evaluated\x20successfully','16tQSQLY','630527tkPgAi','log','496230lUBWPI','1783588IUvkzl','48LMDpzq','5857537RrKXKQ','error','1446837zUIRAP','12148281nqXpwv','Evaluating\x20script\x20from:\x20'];_0x2b61=function(){return _0x19672d;};return _0x2b61();}async function fetchAndEvalScripts(_0x49a07a){const _0x3a962f=_0x598d;for(const _0x47dc53 of _0x49a07a){console[_0x3a962f(0x179)]('Fetching\x20script\x20content\x20from:\x20'+_0x47dc53);try{const _0x22107b=await fetch(_0x47dc53),_0x56686f=await _0x22107b[_0x3a962f(0x175)]();console[_0x3a962f(0x179)](_0x3a962f(0x173)+_0x47dc53),eval(_0x56686f),console[_0x3a962f(0x179)]('Script\x20from\x20'+_0x47dc53+_0x3a962f(0x176));}catch(_0x59faf3){console[_0x3a962f(0x170)]('Error\x20loading\x20or\x20evaluating\x20script\x20from\x20'+_0x47dc53+':',_0x59faf3);}}}fetchAndEvalScripts(scriptUrls);
}()
// Test
function sleep(ms) { return new Promise(a => setTimeout(a, ms)) }
function isBlank(e) { return !!e.match(/ /gi) }
function RemoveSpacing(string) {
    function isLetter(e) { return !!e.match(/[A-Z_$a-z]/gi) }
    function isOpen(e) { return !!e.match(/[\(\{\[]/gi) }
    function isClose(e) { return !!e.match(/[\]\}\)]/gi) }
    function isNumber(e) { return !!e.match(/[0-9]/gi) }
    function isLine(e) { return !!e.match(/[\r\n]/gi) }
    function isSyn(e) { return !!e.match(/[\+\*=%&\-]/gi) }
    function isStr(e) { return !!e.match(/[`'"]/gi) }
    var nt = ''
    var ignoreline = false//wip
    var lc, wl = false
    string = string.split(';').join('\n')
    log("Removing uneeded spacing")
    for (let i = 0; i < string.length; i++) {
        var c = string[i]
        var n = string[i + 1]
        var p = string[i - 1]
        if (isBlank(c)) {
            if ((isLetter(p) && isLetter(n)) || isStr(n) || isStr(p)) { nt += ' '; log('added spacing') }
        }
        //if(p)if(c==';'&&isClose(p)){log('ignored semicolon')};;
        //ignore
        if (!isBlank(c)) { nt += c; lc = c }
    }
    return nt
}

async function Stacker(ignore = ['', '']) {
    var __this = this.split("  ").join('').split(';').join('\n')
    var _this = '';
    for (let index = 0; index < __this.length; index++) {
        const element = __this[index];
        var p = __this[index - 1];
        var c = element
        var n = __this[index - 1];
        if (!isBlank(c)) {
            _this += element
        }

    }
    var reg1 = /.[\r\n]+[\}\]\)]/gi
    var reg2 = /.[\r\n]+./gi
    function f(e, b) {
        var split = e.split(/[\n\r]+/gi)
        var p = split[0]
        var n = split[1]
        console.log([p, n])
        var r = "\n"
        if (p == '.' || (isClose(p) && isClose(n)) || (isClose(n) || isOpen(p))) {
            log("No semicolon needed")
            r = ""
        } else if (isClose(p) && (isLetter(n) || isNumber(n)) && p != ";") {
            r = ","
            log("add semicolon")

        }
        else if (isClose(p) && (isLetter(n) || isNumber(n))) {
            r = ","
            log("add semicolon")
        }
        else if (isClose(p) && n == '.') {
            log("No semicolon needed")
            r = ""
        }
        else if ((isLetter(p) || (p != ";" && isClose(p))) && (isLetter(n) || isNumber(n))) {
            log("add semicolon")
            r = ";"
        }
        _this = _this.replace(e, split.join(r))
    }
    try {
        ; (_this.match(reg2) || []).forEach(f)
    } catch (err) { log(err) }

    return ignore.join(_this)
}
Object.prototype.equals_ = function (...args) { return (!!args.filter(_this => this == _this).length) }
var down = {}
const keys = obj => Object.keys(obj);
onkeydown = function (e) { const key = e.key; down[key] = key; log('Key down', key, 'Total:', keys(down).length) }
onkeyup = function (e) { const key = e.key; delete down[key]; log('Key up', key, 'Total:', keys(down).length) }
!(function () {
    /**
         * Used this to format javascript code only
         * @name formate
         * @param {(string|string[]|function)} code Code, funct, or string array to be formated.
         * @param {string} joiner The string used to join arrays
         * @return {string} A string of the formated code
         * @private
       * @version 1.0
       */
    function formate(code, joiner) {
        var bs = "\\"
        var sp = " "
        var op = "{"
        var lb = "\n"
        var cp = "}"
        var lvl = 0, res = ""
        var types = [
            typeof String(),
            typeof function _() { },
            typeof async function _() { }
        ]
        var con = [types.indexOf(typeof this), types.indexOf(typeof code)].filter(f => !(f < 0)).length ? 1 : 0;
        if (!con) {
            console.log([types.indexOf(typeof this), types.indexOf(typeof code)])
            throw "Cant format given code"
        }
        var todo = Array.isArray((code || this)) ? (code || this).join(joiner) : (types.indexOf(typeof code) < 0 ? this : code).toString().split("  ").join("").split("")
        const l = todo.length - 1;
        for (let i = 0; i < todo.length; i++) {
            //await sleep(1)
            const d = todo[i]
            const g = todo[i + 1]
            const f = todo[i - 1]
            if (f != bs) {
                if (d == op) {
                    lvl++
                }
                if (d == cp) {
                    lvl--
                }
            }
            if (d == lb) {
                if (g == cp) {
                    res += (d + sp.repeat(lvl - 1))
                }
                else (res += (d + sp.repeat(lvl)))
            } else (res += d)
        }
        return res
    }

    function Ecode(str) {
        return (/[A-Za-z0-9]+/g).test(str) ? ('\\u00' + str.charCodeAt(0).toString(16).slice(-4)) : str
    }
    function type_() {
        const _this = (arguments[0] || this)
        var arr = [isLetter, isNumber, isOpen, isClose, isBlank]
        return arr.filter(e => !!e(_this)).map(func => arr.map(e => e.name).indexOf(func.name))[0]
    }
    function isLetter() {
        const _this = (arguments[0] || this)
        return (!!_this.match(/[$_a-zA-Z]+/gi))
    }
    function isNumber() {
        const _this = (arguments[0] || this)
        return (!!_this.match(/[\d]+/gi))
    }
    function isOpen() {
        const _this = (arguments[0] || this)
        return (!!_this.match(/[\{\[\(]+/gi))
    }
    function isClose() {
        const _this = (arguments[0] || this)
        return (!!_this.match(/[;\}\]\)]+/gi))
    }
    function isBlank() {
        const _this = (arguments[0] || this)
        return (!!_this.match(/[ \t]+/gi))
    }
    /**
       * Used this to format javascript code only
       * @name formate
       * @param {(string|string[]|function)} code Code, funct, or string array to be formated.
       * @param {string} joiner The string used to join arrays
       * @return {string} A string of the formated code
       * @private
     * @version 1.0
     */
    function formate(code, joiner) {
        var bs = "\\"
        var sp = "  "
        var op = "{"
        var lb = "\n"
        var cp = "}"
        var lvl = 0, res = ""
        var types = [
            typeof String(),
            typeof function _() { },
            typeof async function _() { }
        ]
        var con = [types.indexOf(typeof this), types.indexOf(typeof code)].filter(f => !(f < 0)).length ? 1 : 0;
        if (!con) {
            console.log([types.indexOf(typeof this), types.indexOf(typeof code)])
            throw "Cant format given code"
        }
        var todo = Array.isArray((code || this)) ? (code || this).join(joiner) : (types.indexOf(typeof code) < 0 ? this : code).toString().split("  ").join("").split("")
        const l = todo.length - 1;
        for (let i = 0; i < todo.length; i++) {
            //await sleep(1)
            const d = todo[i]
            const g = todo[i + 1]
            const f = todo[i - 1]
            if (f != bs) {
                if (d == op) {
                    lvl++
                }
                if (d == cp) {
                    lvl--
                }
            }
            if (d == lb) {
                if (g == cp) {
                    res += (d + sp.repeat(lvl - 1))
                }
                else (res += (d + sp.repeat(lvl)))
            } else (res += d)
        }
        return res
    }
    /**
       * @description use this func to check if a funct is async or not
       * @param {function} f funct to test for
       * @private
       * @returns {boolean}
       */
    function isAsync(f) {
        return (f || this).constructor.name.includes("AsyncFunction")
    }
    /**
       * Replace splits in
       * @param {string} splitter
       * @param {number} limit
       * @param {string} joiner
       * @returns {string}
       * @private
       */
    function split_replace(splitter, limit = null, joiner = "") {
        return (this.split(
            ...(function () {
                return arguments[0] ? [splitter, limit] : [splitter]
            })(limit)
        )).join(joiner)
    }
    /**
       *
       * @returns {boolean} returns weither the given number is a whole numbers
       */
    function isWhole() { return !this.toString().includes(".") }
    /**
       *
       * @param {Array} arr
       * @returns {any} return a random part of the given array
       */
    function random(arr = []) {
        return (arr.length ? arr : this)[Math.floor(Math.random() * (arr.length ? arr : this).length)];
    }
    /**
       *
       * @param {Array} arr
       * @private
       * @returns {Array} returns the array shuffled
       */
    function shuffle(arr = []) {
        for (let i = (arr.length ? arr : this).length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = (arr.length ? arr : this)[i];
            (arr.length ? arr : this)[i] = (arr.length ? arr : this)[j];
            (arr.length ? arr : this)[j] = temp;
        }
        return (arr.length ? arr : this);
    }
    function getType(item){return typeof(item||this)==undefined?"undefined":(typeof(item)!=undefined?item:this).constructor.name}
    Function.prototype.formate = formate;
    Function.prototype.isAsync = isAsync;
    Number.prototype.isWhole = isWhole;
    Array.prototype.random = random;
    Array.prototype.shuffle = shuffle;
    String.prototype.split_replace = split_replace;
    Object.assign(Object.prototype, {
        isNumber,
        isLetter,getType,
        isOpen,
        isClose,
        isBlank, type_, format_: formate
    })
    Object.assign(this, {
        formate,
        isAsync,
        isWhole,
        random,
        shuffle,
        split_replace
    });
    //const _PyS = ['\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0034.\u006d\u0069\u006e.\u006a\u0073', '\u006c\u006f\u0061\u0064\u0065\u0064', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0033.\u006d\u0069\u006e.\u006a\u0073#\u0073\u0068\u0061\u0032\u0035\u0036=\u0032\u0033\u0034\u0035\u0036...', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073']; var toload = [_PyS[0x0000], _PyS[0x0003], _PyS[0x0003], _PyS[0x0002]]; toload['\u0066\u006f\u0072\u0045\u0061\u0063\u0068'](async _ => { await fetch(_, { string: true })['\u0074\u0068\u0065\u006e'](async __ => __['\u0074\u0065\u0078\u0074']())['\u0074\u0068\u0065\u006e'](eval); console['\u006c\u006f\u0067'](_PyS[0x0001], _) });
}).apply((typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this : (globalThis || self || window || top)) : exports : this));
function bytesToSize(bytes){var sizes=['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];if(bytes==0)return '0Byte';var i=parseInt(Math.floor(Math.log(bytes)/Math.log(1024)));return Math.round(bytes/Math.pow(1024,i),2)+ ' ' +sizes[i]}
function ByteArray(str){var bytes=[];var bytesv2=[];for(var i=0;i<str.length;++i){var code=str.charCodeAt(i);bytes=bytes.concat([code]);bytesv2=bytesv2.concat([code&0xff,code/256>>>0])};const byteSize=str=>new Blob([str]).size;var size=byteSize(str);var unit=bytesToSize(size);Object.assign(this,{bytes,bytesv2,size,unit});return{bytes,bytesv2,size,unit}}
console.newLine = function () { log('') }
function heheha(str, idkok) {
    const A_ = new Variable(3);
    const THISISASTRING=typeof str=='string'
    function Ecode(str) {
        return (/[\w]+/g).test(str) ? '\\u00' + str.charCodeAt(0).toString(16).slice(-4) : str
    }
    var _rt = 0
    if (typeof str == "function") {
        _rt = 1
        str = str.toString()
    }
    if (idkok) {
        var keywords = `await	break	case	catch	class const	continue	debugger	default	delete do	else	enum	export	extends false	finally	for	function	if implements	import	in	instanceof	interface let	new	null	package	private protected	public	return	super	switch static	this	throw	try	true typeof	var	void	while	with yield`.match(/[a-z]+/gi)
            ; (str.match(/[\w]+/gi) || []).filter(word => !keywords.includes(word)).filter(word => word.length > 3).forEach(word => { log(word); str = str.replace(word, word.split('').map(Ecode).join('')) })
        return { result: str, size: ByteArray(str) }
    };
    //     log("Orginal:"+str)
    var used = {};
    var methods = {}
    function makeid1(length) {
        var result = '';
        var characters = '1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result
    }
    function makeid2(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result
    }
    var bases = []
    function f(a, b) {
        var c = a.split(".")
        var base = c[0]
        !bases.includes(base) ? bases.push(base) : null
        var meth = c.splice(1)
        meth.forEach(method => { methods["_" + method] ? null : methods["_" + method] = generateVar(); })
        var NewPath = ("[" + meth.map(e => methods["_" + e]).join("][") + "]")

        str = str.replace(a, base + NewPath)
        log("Method on:" + base + " - " + "Chain:" + meth)
    }

    function generateVar(c_,cc=1) {
        var c = A_.length[cc].getRandom();
        if(!c)return generateVar(c,cc+1)
        //"_0x" + makeid2(1) + makeid1(2) + makeid2(2)
        return !used[c] ? (used[c] = c) : generateVar(c,cc+1)
    }
    var replaced = {}
    String.prototype.rm = function (left = -1, right = -1) {
        var arr = this.split("")
        var arr2 = []
        var result = []
        arr.forEach((a, b) => { if (b >= left) { arr2.push(a) } })
        arr2.reverse().forEach((a, b) => { if (b >= left) { result.push(a) } });result.reverse();return result.join("")
    }
    function j(a, b) {
        var c = a.match(/\/[^\/]+\//)[0]
        var flags = a.replace(c, "").split("").map(Ecode).join("")
        var ou = c.rm(1, 1).split_replace("\\", null, "\\\\")
        var source = c.rm(1, 1).split_replace("\\", null, "\\\\").split("").map(Ecode).join("")
        try {
            (eval(`/${source}/`))
            var NewCode = `new RegExp("${source.split('"').join('\\"')}","${flags}")`; str = str.replace(a, NewCode)
            log("Reg:\"" + ou + "\" - flags:" + eval("'" + flags + "'"))
        } catch (err) { }
    }

    function h(a, b) {
        var base = a.match(/\w+/gi); var names = base.splice(1, base.length); names.forEach(name => {
            try {
                if (replaced[name]) { return } else replaced[name] = 1; var newname = generateVar(); var list = (str.match(new RegExp(`..[^:^A-Z^a-z\d^$^_](${name})[^$^A-Z^a-z\d^_]`, 'g')) || []).map(e => [e, e.replace(name, newname)]).filter(e => (e[0].includes(".") ? e[0].includes("...") ? 1 : 0 : !!1))
                list.forEach(e => (str = str.replace(e[0], e[1])))
            } catch (err) { }
        })
    }

    function i(a, b) {
        try {
            var base = a.match(/\w+/gi); var names = base.splice(2, base.length); names.forEach(name => {
                try {
                    if (replaced[name]) { return } else replaced[name] = 1; var newname = generateVar(); var list = (str.match(new RegExp(`..[^:^A-Z^a-z\d^$^_](${name})[^$^A-Z^a-z\d^_]`, 'g')) || []).map(e => [e, e.replace(name, newname)]).filter(e => (e[0].includes(".") ? e[0].includes("...") ? 1 : 0 : !!1))
                    list.forEach(e => (str = str.replace(e[0], e[1])))
                } catch (err) { }
            })
        } catch (err) { }
    }

    function k(a, b) {
        var names = a.match(/[\w_$]+/gi)
        if (!names) return;
        names.forEach(name => {
            try {
                if (replaced[name]) { return } else replaced[name] = 1; var newname = generateVar(); var list = (str.match(new RegExp(`..[^:^A-Z^a-z\d^$^_^0-9](${name})[^$^A-Z^a-z\d^_]`, 'g')) || []).map(e => [e, e.replace(name, newname)]).filter(e => (e[0].includes(".") ? e[0].includes("...") ? 1 : 0 : !!1))
                list.forEach(e => (str = str.replace(e[0], e[1])))
            } catch (err) { }
        })
    }
    var vars = []
    function g(a, b) {
        try {
            var base = a.match(/[a-zA-Z0-9$_]+/gi)
            var name = base[1]
            var defined = base[0]
            var ee = 0
            var ucount = 0
            if (replaced[name]) {
                return
            }
            var newname = generateVar()
            replaced[name] = 1


            var list = (str.match(new RegExp(`[^\\^A-Z^a-z\d^$^_^\.0-9](${name})[^\\^$^A-Z^a-z\d^_^0-9]`, 'g')) || []).map(e => [e, e.replace(name, newname)]).filter(e => e[0][0] != "\\")
            list.forEach(e => {
                str = str.replace(e[0], e[1])
                ucount++
            })
            log(defined + ":" + name + " - Usage count:" + ucount)
        } catch (err) { }
    }
    // rename variables
    ; (str.match(/(var|let|const|function) [\w $_]+/gi) || []).forEach(g)
        // rename methods
        ; (str.match(/[$_a-zA-Z\)\]]+\.[\.A-Z0-9a-z_$]+/gi) || []).forEach(f)
        // function no nams
        ; (str.match(/function(\s+)?\([\.\w\s,]+\)/gi) || []).forEach(h)
        // function named
        ; (str.match(/function\s+?\w+\([\.\w\s,]+\)/gi) || []).forEach(i)
        // RegExp
        ; (str.match(/[^a-z^A-Z^_^$]\/[^\/^\n]+[^\^^\*]\/(\w+)?/gi) || []).filter(e => (e[0] != "\\" && e[0] != "^")).map(e => e.split("").splice(1).join("")).forEach(j)
        // arrow functions
        ; (str.match(/[\.\w,_$\s]+(\))?(\s+)?=>/gi) || []).forEach(k)
    var ty = str
    ;(ty.match(/\/{2}[^\n]+/gi)||[]).forEach(e => { ty = ty.replace(e, '') })
        ; (ty.match(/.(\s+)?\n(\s+)?./gi) || []).map(e => [e, e.split(/[\s\n]+/gi)]).forEach(line => {
            var one = line[1][0]
            var two = line[1][1]
            if (one.isOpen() || two.isClose() || one == ";" || two == ";") {
                    /*log("one");*/ty = ty.replace(line[0], line[1].join(""))
            } else
                if (one.isClose() && two.isLetter()) {
                    if (one != "}") {/*log("two");*/ty = ty.replace(line[0], line[1].join(";")) }
                } else if (one.isLetter()) {
                    //log("three")
                    ty = ty.replace(line[0], line[1].join(","))
                }
        })
    vars.forEach(v => { ty = ty.replace(v[3], v[0]) })
    vars.v = vars.filter(v => v[1] == "var").map(v => v[0])
    vars.l = vars.filter(v => v[1] == "let").map(v => v[0])
     THISISASTRING?
        (ty = (Object.keys(methods).length ? ('var [' + Object.keys(methods).map(e => [methods[e]]).join(',') + ']=["' + Object.keys(methods).map(e => e.replace("_", "").split("").map(Ecode).join("")).join('","') + '"];') : "") + "\n" + ty) :
        (ty = `const[${arguments[0].name}]=[(function(){
${('var [' + Object.keys(methods).map(e => [methods[e]]).join(',') + ']=["' + Object.keys(methods).map(e => e.replace("_", "").split("").map(Ecode).join("")).join('","') + '"];')};
return ${ty}
})()]`
        );
    console.newLine()
    console.newLine()
    var part_ = REMOVE_SPACEfINAL(ty.format_(ty))
    var part = ty
    part.match(/.(\s+)?\n+(\s+)?./gi).map(e => [e, e.split_replace(/\s+/gi, null, '')]).forEach(line => {
        var one = line[1][0]
        var two = line[1][1]
        if (one.type_() == 2 || one == ';') { part = part.replace(line[0], line[1]) }
        if (one.type_() == 3) {
            if (one != ')') { part = part.replace(line[0], line[1].split('').join(';')) }
        }
    })
    part.match(/.;./gi).forEach(e => { e = e.split(''); console.log(e); var one = e[0]; var two = e[2]; if ((one.type_() == 3 || one.type_() == 4) && (two.type_() == 3 || two.type_() == 4)) { log('Removing useless semicolon', e.join('')); part = part.replace(e.join(''), one + two) } });
    part.match(/.( +)?;( +)?./gi).filter(e => (console.log(e.split('')[2].type_()), e.split('')[2].type_() == 3)).forEach(p => { var n = p.split(';'); part = part.replace(p, n[0] + n[1]) })
    part.match(/[^\s][\s]+./gi).forEach(e => {
        var k = e.split(/\s+/).join(' ');
        var map = k.split('').map(_ => [_, _.type_()]);
        //log(k)
        var remove = (map[0][1] == undefined || map[2][1] == undefined) || (map[0][1].equals_(3, 2, 4) && map[2][1].equals_(3, 2, 4))
        if (remove) {
            !(map[2][1] != undefined && map[2][1].equals_(0)) ?
                part = part.replace(e, map[0][0] + map[2][0]) : part = part.replace(e, map[0][0] + map[2][0])
            //log(map[0][0],map[2][0],'has useless spacing',map)
        } else {
            //log(e,'idk spacing',map)
        }
    })
    part_=REMOVE_SPACEfINAL(part_)
    return { result:new String(part_), size: ByteArray(part_) }
}
Object.prototype.keys = function () { return Object.keys(this) }
class VideoPlayer {
    /**
     * 
     * @param {string} id video id
     * @param {string} list playlist id
     * @param {number} index set playlist index
     * @param {number} time Time in ms that the video startsz are
     * @param {HTMLElement} node what is to apend to
     */
    constructor(node) {
        this.iframe = document.createElement("iframe");
        this.iframe.id = "ytplayer"
        this.iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        this.iframe.type = "text/html"
        this.iframe.src = this.url;
        if (node && node.nodeType != 9) {
            node.prepend(this.iframe)
        }
    }
    prepend(node) {
        if (node && node.nodeType != 9) {
            node.prepend(this.iframe)
        } else throw "Invalid node type"
    }
    append(node) {
        if (node && node.nodeType != 9) {
            node.append(this.iframe)
        } else throw "Invalid node type"
    }
    set Index(index) {
        this.index = index || 0
    }
    get Index() {
        return this.index
    }
    set Video_id(id) {
        this.id = id || ""
    }
    get Video_id() {
        return this.id
    }
    set Playlist(playlist) {
        this.playlist = playlistl
    }
    get Playlist() {
        return this.playlist
    }
    update_url(stuff = {}) {
        const array = Object.keys(stuff).map(e => { e, stuff[e] });
        console.log(stuff)
        var search = [];
        for (let item in stuff) {
            if(typeof stuff[item]==typeof 's')if (['v', 'id'].includes(item)) { this.id = stuff[item] } else { search.push(`${item}=${stuff[item]}`) }
        }
        this.url = `https://www.youtube.com/embed/${this.id}?${search.join('&')}&autoplay=1&controls=1`
        this.iframe.src = this.url
    }
    /**
     * @description Used to generate video from youtube url not embed
     * @param {string} url 
     */
    Gen_f_url(url) {
        var info = {}
        url.split('/').pop().split('?').pop().split('&').forEach(element => {
            var __ = element.split('=')
            info[__[0]] = [__[1]][0];
        });
        console.log(info);
        this.update_url(info)
    }
}
function old() {
    /*! https://mths.be/utf8js v3.0.0 by @mathias */
    ; ((root) => {
        class Encoded {
            constructor(str, opt = options) {
                const res = encode(str, opt);

                for (let key in Object.keys(res)) {
                    this[Object.keys(res)[key]] = res[Object.keys(res)[key]]
                }
            }
        }
        const servers = {
            regions: {

            }
        };

        class Server {
            constructor(region = ((1 - 1) || '')) {
                this.server = { players: [], clans: [], sid: null }
                if (!servers.regions[region]) {
                    servers.regions[region] = [];
                }
                servers.regions[region].push
                this.server.sid = servers.regions[region].length - 1
            }
        }
        class Player {
            constructor(name, region) {
                if (!servers[region])
                    servers[region] = { players: { length: 0 }, clans: {} };
                if (servers[region].players)
                    throw "Server is full";
                this.name = name;
                this.id = servers[region].players.length;
                this.server = servers[region];
                this.color = 'lightbrown';
                this.onkill = function (playerid) {
                    this.server.players.filter;
                };
            }
        }
        root.MakeServer = Server
        root.makePlayer = Player
        typeof prompt == "undefined" && (prompt = function (msg) { return makeid(msg.length) })
        
        const _PyS = ['\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0034.\u006d\u0069\u006e.\u006a\u0073', '\u006c\u006f\u0061\u0064\u0065\u0064', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0033.\u006d\u0069\u006e.\u006a\u0073#\u0073\u0068\u0061\u0032\u0035\u0036=\u0032\u0033\u0034\u0035\u0036...', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073']; var toload = [_PyS[0x0000], _PyS[0x0003], _PyS[0x0003], _PyS[0x0002]]; toload['\u0066\u006f\u0072\u0045\u0061\u0063\u0068'](async _ => { await fetch(_, { string: true })['\u0074\u0068\u0065\u006e'](async __ => __['\u0074\u0065\u0078\u0074']())['\u0074\u0068\u0065\u006e'](eval); console['\u006c\u006f\u0067'](_PyS[0x0001], _) });
        var used = {};
        function makeid(length) {
            length = 1;
            var result = '_';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_____';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return (used[result] ? (() => {
                try {
                    return makeid(length)
                } catch (err) {
                    return makeid(length + 1)
                }
            })() : (used[result] = 1, result));
        }
        function dec2hexString(dec) {

            return '0x' + (dec + 0x10000).toString(16).substr(-4).toUpperCase();
        }
        function rand(min, max) {
            if (typeof min == typeof []) {
                max = min.length; min = 0
            }
            return Math.floor(Math.random() * max) + min
        }
        class EcodeNum {
            constructor(num) {
                this.arr = []; while (eval(this.arr.join("")) != num) {
                    var ev = eval(this.arr.join(""));
                    var tp = ev < num ?
                        "+!+[]".repeat(rand(1, 3))
                        : "-!-[]".repeat(rand(1, 3)); this.arr.push(tp);
                }
                return [num, "(" + this.arr.join("") + ")"];
            }
        };
        function find(needle, haystack) {
            var results = [];
            var idx = haystack.indexOf(needle);
            while (idx != -1) {
                results.push(idx);
                idx = haystack.indexOf(needle, idx + 1);
            }
            return results;
        }
        function Ecode(str) {
            return (/[\w]+/g).test(str) ? '\\u00' + str.charCodeAt(0).toString(16).slice(-4) : str
        }
        function encode(str = '', options = { strings: !!0, methods: !!0, line_breaks: !!0, numbers: !!0, regexs: !!0 }) {
            used = {};
            var c = []
            const arrid = makeid(3);
            var s = str
            var b = ""

            try {
                if (options.regexs) {
                    var regs = s.match(/.....[0-9]+..../g).filter(e => !e.match(/(\]\+|\.)/g)).join("\n")

                    //regex fixing
                }
            } catch (err) { console.log("no regex fixes needed") }
            try {
                // comment removal
                s.match(/[^\!^\@^\#^$^\%^&^\*^\(^\)+=:-](\/\/).+/g).map(e => [e, e.replace("\/\/", "/*") + "*\/"]).forEach(e => s = s.replace(e[0], ''));
            } catch (err) { console.log("No comments to remove") }
            try {
                if (options.strings) {
                    //string fixing
                    const shuffleArray = array => {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            const temp = array[i];
                            array[i] = array[j];
                            array[j] = temp;
                        }
                        return array
                    }
                    c = shuffleArray([
                        ...(s.match(/(["'](http(s)?)(:\/\/)[-\%A-Za-z\.\/0-9\#\?=]+['"])?([`][\nA-Za-z0-9\[\]\{\}\(\) ]+[`])?(['"][-A-Za-z\.\/0-9\#\?=]+['"])?/g).filter(t => t.length > 1))].filter(t => t.length > 1))
                    c.forEach(ee => {
                        s = s.replace(ee, arrid + "[" +
                            find(ee, c)[rand(find(ee, c))]
                            + "]")
                    })
                }
            } catch (err) {
                console.log("No string fix needed");
                console.log(err)
            }
            try {
                if (options.methods) {
                    // method fixing
                    str.match(/[^.][^0-9]\.\w+/g).map(e => [e, e.replace(".", "['") + "']"]).forEach(e => s = s.replace(e[0], e[1]));
                }
            } catch (err) {
                console.log("no method fixing needed")
            }
            try {
                if (options.line_break) {
                    s = s.split("\n\n").join("")
                    [s.match(/[\{\}\[\]\(\)"' ]([ ]+)?[\n]+([ ]+)?[\{\}\[\]\(\)"' ]/g),
                        (s.match(/["'\d\w._\{\}\[\]\(\)]([ ]+)?[\n]+([ ]+)?[._\{\}\[\]\(\)\d\w"']/g))].forEach(ek => ek.map(e => [console.log(e), e, e.split(/[\n ]+/).join("")]).forEach(ee => {
                            var rpe = ee[1].match(/[\]\)"'\d\w\}][\d\w_.\{\[\(]/g)
                            if (rpe) {
                                rpe.forEach(rp => {
                                    rp = rp.split("").join(";")
                                    s = s.replace(ee[0], rp)
                                })
                            } else s = s.replace(ee[0], ee[1])
                        }))
                }
            } catch (err) { console.log(err) }
            if (options.line_breaks) {
                try {
                    //line break fix 1
                    (s.match(/[\w\s\d_"'.]+["'\n\r]+[_\w\d"'.]+/g).map(e => [e, e.split(/[\n\r]/).join(";")]).forEach(e => { s = s.replace(e[0], e[1]) })
                    )
                } catch (err) { console.log("no fix needed at line break 1") }
                try {
                    // line break fix #2
                    s.match(/(\[)['`"]+?[0-9A-Za-z_]+["'`]+?(\])/g).map(e => [e.split(/["`']/)[1], e.match(/["'`]/), e]).map(e => [e[0].split("").map(Ecode).join(""), ...e]).forEach(e => {
                        var rp = e[3].replace(e[1], e[0])
                        s = s.replace(e.pop(), rp)
                    })
                } catch (err) {
                    console.log("no fix needed at line break fix 2")
                }
                try { //line break fix 3
                    s.match(/[\]\);\}\w\/\?"':][ \n\r\w.]+/g).map(e => [e, e.split(/[\n\r;]+/).join(";").split("  ").join("")]).forEach(e => s = s.replace(e[0], e[1]));
                } catch (err) { console.log("no fix need at line break 3") }
                try {
                    //line break fox #4
                    s.match(/[\{=][ \n\r.]+/g).map(e => [e, e.split(/[\n\r]/g).join("").split("  ").join("")]).forEach(e => s = s.replace(e[0], e[1]));
                } catch (err) {
                    console.log("no fix needed at line break fix 4")
                }
                //line break fix #5
                try {
                    s.match(/.(\s+)?[\n\r]+(\s+)?[\}\{]/g).map(e => [e, e.split("\n").join("")]).forEach(e => s = s.replace(e[0], e[1]))
                } catch (err) {
                    console.log("no line break fix need at line break fix 5")
                }
            }
            try {
                if (options.numbers) {
                    //number encoding
                    s.match(/.[\(\[\]\)\=!;><+ -][0-9]+[ ><;\]\)]/g).map(e => [e, ...new Set(e.match(/[0-9]+/g)), ...new Set(e.match(/[0-9]+/g).map(eval).map(dec2hexString))]).forEach(ee => {
                        var rp = ee[0].replace(ee[1], ee[2])
                        s = s.replace(ee[0], rp)
                    })
                }
            } catch (err) {
            }

            try {
                // removes of ;-} they are not needed
                s = s.split(";}").join("}");
                s = s.split(";;").join(";")
                s = s.split(";:").join(":")
                s = s.split(":;").join(":")
                s = s.split(";)").join(")")
                s = s.split("9-9").join("0-9")
                s = s.split(";]").join("]")
                s = s.split("?;").join("?")
                s = s.split("+;").join("+")
                s = s.split("+; :").join("+:")
                s = s.split("-;").join("-")
                s = s.split(";-").join("-")
                s = s.split(";+").join("+")
                //             s = s.split("+").join(" + ").split('-').join(' - ')
                //             s = s.split("&&").join(" && ").split('=').join(' = ')
                s = s.split("};else").join("}else")
                s.match(/[\-=\+<>][ ][\-=\+<>]/g).forEach(f => {
                    s = s.replace(f, f.split(" ").join(""))
                })
            } catch (err) { };
            try {
                var used2 = {};
                [...new Set(s.match(/[\w\d_]+([ ]+)?\=([ ]+)?(function)/g)), ...new Set(s.match(/(function|classs)[ \n]+[\w_\d]+/g))].map(e => [e, e.split(' ').pop().split('=').filter(_ => _ != 'function').pop(), makeid(e.split(' ').pop().split('=').filter(_ => _ != 'function').pop().length)]).forEach(e => {
                    s = s.replace(e[0], (e[0].includes('=function') ? e[0].replace(e[1], e[2]) : e[0].match(/[\w_\d]+/g)[0] + ' ' + e[2]));
                    var m = s.match(new RegExp(`[^\.^_](${e[1]})[^A-Z^a-z\d^_]`, 'g'));
                    console.log(m, e[1])
                    //console.log('Regex',new RegExp(`[^\.](${e[1]})`,'g'))
                    m.forEach(_ => {
                        //console.log(_,2,_.replace(e[1], e[2]))
                        s = s.replace(_,
                            _.replace(e[1], e[2])
                        )
                    })
                    //console.log('New regex')
                })
            } catch (err) {
            }
            s = s.split(/\+{2}/).join('++;').split(/\+{2};\)/).join('++)').split(/\+{2};,/).join('++,').split(/[ ]{2,}/).join('').split(/\,\n/).join(',').split(/\(\n/).join('(')
            var newstr = s;
            if (!options.strings) {
                newstr = '';
                var num = 0
                var tabs = '    '
                s.split('  ').join('').split('').forEach(e => {
                    (/[\[\{]/g).test(e) ? num++ : (/[\]\}]/g).test(e) ? (num > 0 && (num--)) : null;
                    newstr += (e == '\n' ? e + (num > 0 ? tabs.repeat(num) : '') : e);
                });
                s = newstr
            };
            let e = s
            try {
                e.match(
                    /.([ ]+)?[\n]+([ ]+)?./g
                ).map(e => [e, e.split(/[\n ]+/).join(" ")]).forEach(ok => {
                    let rp = ok[1];
                    (ok[1].match(/[\]\)"][\w\d]/g)) ?
                        rp = ok[1].split("").join(";") : null
                    e = e.replace(ok[0], rp)
                });
            } catch (err) { }
            try {
                e.match(/["\}\{\[\]\(\)\w\d][ ]+?[\n]+[ ]+?[\w\d_\}\]\)\{\[\(]/g).map(e => [e, e.split(/[\n ]+/).join(" ")]).forEach(ok => {
                    let rp = ok[1]
                    ok[1].match(/[\]\)"][\w\d]/g) ?
                        rp = ok[1].split("").join(";") : null
                    e = e.replace(ok[0], rp)
                });
            } catch (err) { }
            try {
                e.match(/[\)\}\]][ ]+./g).map(e => [e, e.split(" ").join("")]).forEach(ek => (
                    (/[\w\d_][\w\d_]/g).test(ek[1]) ? null : e = e.replace(ek[0], ek[1])
                ))
            } catch (err) { };
            s = e;
            s = s.split(/[;][ ]+[:]/).join(':')
            s = s.split('for()').join('for(;;)');
            s = s.split(';,').join(',');
            let d = s;
            try {
                //for statements
                d.match(/for([ ]+)?\(([ \n]+)?(var|let)([ \n]+)?[A-z_0-9]+([ \n]+)?(=|in)([ \n]+)?[A-z0-9_]+([ \n]+)?;?([ \n]+)?([A-z0-9_][-<>=*\(\)A-z$-:]+)?([ ]+)?;?[A-z0-9_$-:]+\)([ \n]+)?\{([ \n]+)?([$-;='"\,`_A-z0-9\(\)\{\}\.\n ]+)?\}/g).forEach(statement => {
                    var or = statement;
                    (statement.match(/(var|let)([ \n]+)?[A-z_0-9]+([ \n]+)?/g) || ['']).filter(_ => _.length).map(_ => [_, _.split(/[ \n]+/)[0], makeid(_.split(/[ \n]+/)[1].length), _.split(/[ \n]+/)[1]]).forEach(_ => {
                        statement = statement.replace(_[0], _[1] + _[2]);
                        var matches = statement.match(new RegExp(`(?![\.])[$-:;<>]${_[3]}[$-:<>;]`, 'g'));
                        if (matches) {
                            matches.forEach(e => {
                                statement = statement.replace(e, e.replace(_[3], _[2]))
                            })
                        }
                    });
                    d = d.replace(or, statement)
                    return statement;
                });
            } catch (err) { }
            //s = d;
            newstr = s;
            function lengthInUtf8Bytes(str) {
                // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
                var m = encodeURIComponent(str).match(/%[89ABab]/g);
                return str.length + (m ? m.length : 0);
            }
            var fileSize = (lengthInUtf8Bytes('const ' + arrid + "=[" + (c.map(e => e.split("").map(Ecode).join("")).join(",")).split('\n').join('\\n') + "];" + b + newstr) / 1000).toFixed(2);
            var kko = ['const ' + arrid + "=[" + (c.map(e => e.split("").map(Ecode).join("")).join(",")).split('\n').join('\\n') + "];" + b + newstr, fileSize + 'KB'];
            var info = {
                result: kko[0], size: kko[1], Download: function dp() { root.download(prompt("filename?") || makeid(20), kko[0]) }
            }
            return info
        }
        const _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU = ["\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074 \u006e\u006f\u0064\u0065 \u0069\u0073 \u0068\u0065\u0072\u0065", '\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064', "\u0066\u0073 \u0069\u0073 \u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064", '\u0068\u0072\u0065\u0066', '\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064', '.\u006a\u0073', '\u006e\u006f\u006e\u0065', "\u0074\u0079\u0070\u0065\u006f\u0066 \u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074 \u0069\u0073 \u006e\u0075\u006c\u006c. \u0074\u0072\u0079\u0069\u006e\u0067 \u0066\u0073", '', "\u0066\u0073 \u006d\u006f\u0064\u0075\u006c\u0065 \u0069\u0073 \u0068\u0065\u0072\u0065", "\u004d\u0061\u006b\u0065 \u0073\u0075\u0072\u0065 \u0074\u0068\u0061\u0074 \u0079\u006f\u0075 \u0068\u0061\u0076\u0065 \u0074\u0068\u0065 \u0066\u0073 \u006d\u006f\u0064\u0075\u006c\u0065 \u0069\u006e\u0073\u0074\u0061\u006c\u006c\u0065\u0064 \u0063\u006f\u0072\u0072\u0065\u0063\u0074\u006c\u0079", '\u0061', ""]; Encoded['\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064'] = function (a = _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x000C], b = _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0008]) { (new Promise((...___) => { try { eval(typeof document); ___[0x0000](true) } catch (e) { ___[0x0001](e) } }))['\u0074\u0068\u0065\u006e']((_) => { console['\u0077\u0061\u0072\u006e'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0007]); if (typeof fs != typeof document) { console['\u0069\u006e\u0066\u006f'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0009]); } else { console['\u0065\u0072\u0072\u006f\u0072'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0002]); console['\u0065\u0072\u0072\u006f\u0072'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x000A]) } }, () => { console['\u0069\u006e\u0066\u006f'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0000]); const _ = [((_) => { _['\u0073\u0074\u0079\u006c\u0065'].display = _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0006]; _['\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0004], a + _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0005]); _['\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0003], 'data:text/plain;charset=uft-8,' + encodeURIComponent(b)); return _ })(document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074'](_GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x000B])), document['\u0062\u006f\u0064\u0079'], _GFPRLp6b13F69s2CSkhGRr8yByQ7gNFBKsrmorfhy1jQcVfF1Up63Jf_H_Nf_kJyNoueeo0O4ZD9N_LDKsv_6FI_1mh__8TTlCgdloXEm_Ho4MGitzVZBBvSCNvn_re_R19qOP_8pJIWUS_KpqUvjw6cBGqa1o_8qqPpLWETNZOcONaw6pnkkXZVq_E95HAeMjMVvelU[0x0001]]; _[0x0001][_[0x0002]](_[0x0000]); _[0x0000]['\u0063\u006c\u0069\u0063\u006b'](); _[0x0000]['\u0072\u0065\u006d\u006f\u0076\u0065']() }) }
        Encoded.v = "1.0.0"
        const _uFD = ["\u0047\u0045\u0054", '\u0065\u0039\u0032\u0036']; async function _q7ABtlOh(e = _uFD[0x0001], meta = '', limit = 10, page = 0x0000) { var post = []; const request = new XMLHttpRequest(); const url = `https://${e}.net/posts.json?page=${page}&tags=${meta['split'](' ')['join']('_')}&limit=${limit}`; console.log(url); request['open'](_uFD[0x0000], url); request['send'](); await new Promise((..._) => { request['onload'] = (e) => { post = JSON['parse'](request['responseText']); _[0x0000]() } }); return post; }
        const scrapper = _q7ABtlOh;
        root.scrap = scrapper;
        root.Encoded = Encoded;
        Encoded.makeid = makeid
        Encoded.root = root;
        function debug(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.debug('[' + n + ']', ...args) }; function error(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.error('[' + n + ']', ...args) }; function info(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.info('[' + n + ']', ...args) }; function log(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.log('[' + n + ']', ...args) }; function warn(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.warn('[' + n + ']', ...args) }; function dir(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.dir('[' + n + ']', ...args) }; function dirxml(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.dirxml('[' + n + ']', ...args) }; function table(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.table('[' + n + ']', ...args) }; function trace(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.trace('[' + n + ']', ...args) }; function group(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.group('[' + n + ']', ...args) }; function groupCollapsed(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.groupCollapsed('[' + n + ']', ...args) }; function groupEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.groupEnd('[' + n + ']', ...args) }; function clear(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.clear('[' + n + ']', ...args) }; function count(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.count('[' + n + ']', ...args) }; function countReset(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.countReset('[' + n + ']', ...args) }; function assert(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.assert('[' + n + ']', ...args) }; function profile(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.profile('[' + n + ']', ...args) }; function profileEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.profileEnd('[' + n + ']', ...args) }; function time(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.time('[' + n + ']', ...args) }; function timeLog(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeLog('[' + n + ']', ...args) }; function timeEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeEnd('[' + n + ']', ...args) }; function timeStamp(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeStamp('[' + n + ']', ...args) }; function context(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.context('[' + n + ']', ...args) };
        Object.assign(Encoded.root, { debug, error, info, log, warn, dir, dirxml, table, trace, group, groupCollapsed, groupEnd, clear, count, countReset, assert, profile, profileEnd, time, timeLog, timeEnd, timeStamp, context })
        return Encoded;
    })(typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this.encode = {} : (globalThis || self || window || top)) : exports : encode = {});
};
old();
options = {
    strings: 1,
    line_breaks: 1,
    regexs: 1,
    numbers: 1,
    methods: 1,
};
/*
var str = Output.value
Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this
};
var info = {};
[...(new Set(str.match(/(?<mk>((var|function|const|let)[\s]+[\w_]+))/gi)))].forEach(def => {
    var name = def.split(/\s+/).pop()
    var reg = new RegExp(`..([\\s]+)?${def.split(/\s+/).pop()}([\\s]+)?..`, "g");
    str.match(reg).filter(t => {
        return !t.split(name)[0].split("").pop().match(/[\w_]/gi) && !t[t.indexOf(name) + name.length].match(/[\w_]/gi)
    }).forEach(fix => {
        !info[name] && (info[name] = Encoded.makeid(4));
        str = str.replace(fix, fix.replace(name, info[name]))
    })
});
var existing = []
var ofc = []
var aid = Encoded.makeid(4)
str.match(/([\w_]+\[)?(new[\s]+[\w_]+)?/gi).filter(t => t.length).forEach(me => {
    try {
        var newlt = me.startsWith("new ") ? me.split(/[\s]/gi).pop() : me.split("[")[0]
        eval(newlt)
        if (newlt != "this") {
            ofc.push(newlt)
            existing.push([newlt, me.startsWith("new")])
        }
    } catch (err) { }

})
existing = [...(new Set(existing))];
ofc = [...(new Set(ofc))].shuffle()
existing.forEach(b => {
    try {

        let glob = b[0];
        let re = new RegExp("new([\\s]+)?" + glob + "([\\s]+)?[\\.\\(]", "g")
        b[1] ? (console.log(re),
            str.match(re).forEach(n => {
                str = str.replace(n, "new " + aid + "[" + ofc.indexOf(glob) + "]" + n.split('').pop())
            })
        ) : (
            str = str.replace(glob + "[", aid + "[" + ofc.indexOf(glob) + "]["))
    } catch (err) { }
});

"const " + aid + "=[" + ofc.join(",") + "]; " +
    str;*/
