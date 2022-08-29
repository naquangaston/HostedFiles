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
    function getType(item) { return typeof (item || this) == undefined ? "undefined" : (typeof (item) != undefined ? item : this).constructor.name }
    Function.prototype.formate = formate;
    Function.prototype.isAsync = isAsync;
    Number.prototype.isWhole = isWhole;
    Array.prototype.random = random;
    Array.prototype.shuffle = shuffle;
    String.prototype.split_replace = split_replace;
    Object.assign(Object.prototype, {
        isNumber,
        isLetter, getType,
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
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
function ByteArray(str) {
    var bytes = []; // char codes
    var bytesv2 = []; // char codes
    //str.split('').map(char=>[char.charCodeAt(0),bytes = bytes.concat([char.charCodeAt(0)]),bytesv2 = bytesv2.concat([char.charCodeAt(0) & 0xff, char.charCodeAt(0) / 256 >>> 0])])
    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);

        bytes = bytes.concat([code]);

        bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
    }
    const byteSize = str => new Blob([str]).size;
    var size = byteSize(str)
    var unit = bytesToSize(size)
    Object.assign(this, { bytes, bytesv2, size, unit })
    return { bytes, bytesv2, size, unit }
}
console.newLine = function () { log('') }
function heheha(str, idkok) {
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

    function generateVar() {
        var c = "_0x" + makeid2(1) + makeid1(2) + makeid2(2)
        return !used[c] ? (used[c] = c) : generateVar()
    }
    var replaced = {}
    String.prototype.rm = function (left = -1, right = -1) {
        var arr = this.split("")
        var arr2 = []
        var result = []
        arr.forEach((a, b) => { if (b >= left) { arr2.push(a) } })
        arr2.reverse().forEach((a, b) => { if (b >= left) { result.push(a) } }); result.reverse(); return result.join("")
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
    ty.match(/\/{2}[^\n]+/gi).forEach(e => { ty = ty.replace(e, '') })
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
    _rt ?
        (ty = (Object.keys(methods).length ? ('var [' + Object.keys(methods).map(e => [methods[e]]).join(',') + ']=["' + Object.keys(methods).map(e => e.replace("_", "").split("").map(Ecode).join("")).join('","') + '"];') : "") + "\n" + ty) :
        (ty = `const[${arguments[0].name}]=[(function(){
${('var [' + Object.keys(methods).map(e => [methods[e]]).join(',') + ']=["' + Object.keys(methods).map(e => e.replace("_", "").split("").map(Ecode).join("")).join('","') + '"];')};
return ${ty}
})()]`
        );
    console.newLine()
    console.newLine()
    var part_ = RemoveSpacing(ty.format_(ty))
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
    return { result: new String(part_), size: ByteArray(part_) }
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
        this.playlist = playlistl
    }
    update_url(stuff = {}) {
        const array = Object.keys(stuff).map(e => { e, stuff[e] });
        console.log(stuff)
        var search = [];
        for (let item in stuff) {
            if (['v', 'id'].includes(item)) { this.id = stuff[item] } else { search.push(`${item}=${stuff[item]}`) }
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
        var _ = new URL(url)
        url.split('/').pop().split('?').pop().split('&').forEach(element => {
            var __ = element.split('=')
            info[__[0]] = [__[1]][0];
        });
        console.log(info);
        this.update_url(info)
    }
}
function name(params) {

    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    function ByteArray(str) {
        var bytes = []; // char codes
        var bytesv2 = []; // char codes

        for (var i = 0; i < str.length; ++i) {
            var code = str.charCodeAt(i);

            bytes = bytes.concat([code]);

            bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
        }
        const byteSize = str => new Blob([str]).size;
        var size = byteSize(str)
        var unit = bytesToSize(size)
        Object.assign(this, { bytes, bytesv2, size, unit })
        return { bytes, bytesv2, size, unit }
    }
    async function sc(site, meta, r = [], p = 1) {
        var limit = 20
        var url = `https://${site}.net/posts.json?page=${p}&tags=${meta.map(e => e['split'](' ')['join']('_')).join('+')}&limit=${limit}`
        console.log(url)
        var posts = (await $.get(url)).posts
        var str = JSON.stringify({ posts: [...r, ...posts] })
        var current_size = ByteArray(str).unit
        console.log("Found:" + posts.length, "Page:" + p, current_size)
        if (posts.length) {
            return await sc(site, meta, [...r, ...posts], p + 1)
        } else return [...r, ...posts]
    }

    var t = await sc("e926", ["inflation"])
    t = t.sort((a, b) => a.file.size - b.file.size)
    function checkWin(myWindow = this.win1) { return !myWindow ? false : myWindow.closed ? false : true }
    function startwin(win, name = null, reopen, c) {
        name == null && (name = win);
        console.log('attemp the close', win)
        try { if (reopen) window[win].close() } catch
        (err) { window[win] = null; console.warn('attemp the close', win, 'Fail') }
        try {
            if (!checkWin(window[win])) (window[win] = open(c, 'PROFILES', `width=256,height=305`), console.log('Making', win, 'in', name),
                setTimeout(function () {
                    console.log(window[win])
                    console.log('writing defalt styles', 'to', win, name)
                    window[win].document.write(`
<head>
<style>
    body {
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    background-color: rgb(54, 57, 63);
overflow-x: hidden;
    }
    img,button{
       border: 2px solid red;
       border-radius: 8px;
       border-style: solid;
       border-width: medium;
    }
    input{
        border-width:0px;
        border:none;
        color:white;
        background: rgba(0, 0, 0, 0)
    }
.name{
color:red
}
.Status{
color:blue
}
.server_nick{
color:white
}
body::-webkit-scrollbar {
    display: none;
}
 
</style>
</head>
<body>Loading Details pls w8</body>
`)
                }, 500));
            else (window[name] = open('', 'PROFILES', `width=256,height=305`), window[name].window.document.body.innerHTML = '',
                window[name].window.document.head.innerHTML = '')
        } catch (err) { }
        window[name] = window[win];
        console.log('complete win')
        return window[name];
    }
    startwin("win1", "heheha")
    win1.document.head.innerHTML = `
<style>
    .left {
width:50%;
float:left;
}
.right {
margin-left:50%
}
    body {
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    background-color: rgb(54, 57, 63);
overflow-x: hidden;
    }
    img {
width:47%;
       border: 2px solid red;
       border-radius: 8px;
       border-style: solid;
       border-width: medium;
    }
    input{
        border-width:0px;
        border:none;
        color:white;
        background: rgba(0, 0, 0, 0)
    }
 
body::-webkit-scrollbar {
    display: none;
}
.Profile {
width:276px;
display: inline-block;
}
 
</style>
`
    const download = (path, filename) => {
        // Create a new link
        const anchor = document.createElement('a');
        anchor.href = path;
        anchor.download = filename;

        // Append to the DOM
        document.body.appendChild(anchor);

        // Trigger `click` event
        anchor.click();

        // Remove element from DOM
        document.body.removeChild(anchor);
    };
    function db(url, name, alt) {
        `<a href="/images/myw3schoolsimage.jpg" download="w3logo">
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
</a>`
        var a = document.createElement('a')
        a.href = url, a.setAttribute('downlaod', name)
        var img = document.createElement('img')
        img.alt = alt
        img.src = url;
        a.appendChild(img)
        win1.document.body.appendChild(a)
    }
    t.forEach(e => {
        var file = e.file.url
        var name = e.id + e.file.ext
        e.file.ext.match(/(png|jpg|jpeg|gif)/gi) ?
            (console.log("not flash"), db(file, name,
                e.description.length ? e.description : e.pools.length ? e.pools : e.id
            )) :
            (console.log("is flash"))
    })
    fetch(t[0].file.url, { mode: "no-cors" })
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
            // Here's where you get access to the blob
            // And you can use it for whatever you want
            // Like calling ref().put(blob)

            // Here, I use it to make an image appear on the page
            console.log(blob)
            let objectURL = URL.createObjectURL(blob);
            let myImage = new Image();
            myImage.src = objectURL;
            console.log(objectURL)
            //document.getElementById('myImg').appendChild(myImage)
        });
}