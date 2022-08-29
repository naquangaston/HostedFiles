const globalRoot = (typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this : (globalThis || self || window || top)) : exports : this);
globalRoot.urlreg = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
globalRoot.Http = /http(s)?:[^\s^\n'"`]+[a-zA-Z0-9_]/gi;
globalRoot.Http_ = /http(s)?:[^\s^\n'"`^<^>]+/gi;


function imageRipper(node = document.body) {
    var types = ["png", "jpg", "jpeg", "jfif", "img", "picture", "source", "a"]
    var list = [];
    function part2() {
        var nodes = [...this.children];
        nodes.forEach((..._) => {
            const element = _[0];
            const index = types.indexOf(element.tagName.toLowerCase())
            var xedni = -1;
            if (element.src || element.href) {
                let url = element.src || element.href;
                let type = url.split('/').pop().split('.')[1]
                xedni = types.indexOf(type)
            }
            if (index > -1 && xedni > -1) { list.push(element) }
            else if (element.children.length) { part2.apply(element) }
        })
    }
    part2.apply(node)
    var _ = {}
    list = list.filter(__ => !_[__.src || _.href] ? (_[__.src || _.href] = 1, true) : 0).map(__ => [{ node: __, url: __.src || _.href }].pop())
    return list;
}
globalRoot.impRipper = imageRipper

/**
 * 
 * @param {String} e:URL the string to be tested
 * @returns {Boolean} true/false telling if the url is valid
 */
const tester = async e => {
    var no
    const Http = new XMLHttpRequest();
    if (!e) throw "TypeError:\n1 argument required, but only 0 present."
    else try { new URL(e) } catch (err) { throw "1 argument required is not a valid url" }
    const url = e;
    await new Promise((a) => {
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (ec) => {
            !Http.responseText.length && ec.target.readyState == 4 && (no = true)
            ec.target.readyState == 4 && (a())
        }
    })
    return !!no;
}


function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    var ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;

}
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
async function loadScript(src) {
    await new Promise(async (a, b) => {
        if ((typeof $ == "undefined") || (typeof $.get == "undefined")) {
            await new Promise((a, b) => {
                loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () {
                    eval(arguments[0])
                    a()
                })
            }); return loadScript(...arguments)
        }
        $.get(src, function (e) {
            a(e)
            res = e
        })
            .done(function (e) { res = e })
            .fail(function (e) {
                console.log("error")
                b(e)
                res = e
            })
            .always(function (e) { res = e })
    })
    return res
}
async function get(src) {
    await new Promise((a, b) => {
        $.get(src, function (e) {
            a(e)
            res = e
        })
            .done(function (e) { res = e })
            .fail(function (e) {
                b(e)
                res = e
            })
            .always(function (e) { res = e })
    })
    return res
}
/**
* @description Search greasyfork with this script
* @param {string} q Search query
* @param {number} p page index
* @param {{}[]} r ignore this arg
* @returns
*/
async function getSrcs(q = 'gaston', p = 1, cb, r = []) {
    if (p < 1) { throw "page number cant be less than 1" }
    r.length ? console.log('Page:' + p, '\nScript found:' + r.length, "Units:", ByteArray(r.map(JSON.stringify).join(',')).unit) : console.log("Search:" + q, '\nPage:' + p);
    const loader = new Loader()
    var srcs="";
    await new Promise(a=>loader.loadScriptAsync("https://greasyfork.org/en/scripts.json?q=" + q + "&page=" + p,res=>{log(typeof res)}))
    log(srcs,"srcs")
    if (srcs.length) {
        if (typeof cb == typeof function e() { } || typeof cb == typeof async function name() { }) { r = []; cb(srcs) }
        return await getSrcs(q, p + 1, cb, [...r, ...srcs])
    } else return (console.log('Fnished:', r.length, 'Scripts found', "Units:", ByteArray(r.map(JSON.stringify).join(',')).unit), r)
}
function Loader() {
    var res;
    async function loadScript(src) {
        await new Promise(async (a, b) => {
            if ((typeof $ != "undefined") && (typeof $.get != "undefined")) {
                $.get(src, function (e) {
                    a(e); res = e
                })
                    .done(function (e) {
                        res = e
                    })
                    .fail(function (e) {
                        console.log("error"); b(e); res = e
                    })
                    .always(function (e) {
                        res = e
                    })
            } else {
                const Http = new XMLHttpRequest();
                Http.open("GET", src);
                Http.send();

                Http.onreadystatechange = (e) => {
                    res = Http.responseText;a(Http.responseText);
                }
            }
        }); return res
    }
    async function get(src) {
        await new Promise((a, b) => {
            $.get(src, function (e) {
                a(e); res = e
            })
                .done(function (e) {
                    res = e
                })
                .fail(function (e) {
                    b(e); res = e
                })
                .always(function (e) {
                    res = e
                });
        }); return res
    }
    function loadScriptAsync(src, cb) { if (typeof cb != typeof function () { }) { throw "Callback must be defined to run async" }; var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function () { if (this.readyState == 4 && this.status == 200) { cb.apply(xhttp.responseText, [xhttp.responseText]) } }; xhttp.open("GET", src, true); xhttp.send() }
    Object.assign(this, { loadScript, loadScriptAsync, get })
    return { loadScript, loadScriptAsync, get }
}
; !(function (base) { if ((typeof $ == "undefined") || (typeof $.get == "undefined")) { Loader.apply(base); base.loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () { eval(arguments[0]); console.log('Loaded missing') }); } })(this);
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
            console.log("No semicolon needed")
            r = ""
        } else if (isClose(p) && (isLetter(n) || isNumber(n)) && p != ";") {
            r = ","
            console.log("add semicolon")

        }
        else if (isClose(p) && (isLetter(n) || isNumber(n))) {
            r = ","
            console.log("add semicolon")
        }
        else if (isClose(p) && n == '.') {
            console.log("No semicolon needed")
            r = ""
        }
        else if ((isLetter(p) || (p != ";" && isClose(p))) && (isLetter(n) || isNumber(n))) {
            console.log("add semicolon")
            r = ";"
        }
        _this = _this.replace(e, split.join(r))
    }
    try {
        ; (_this.match(reg2) || []).forEach(f)
    } catch (err) { log(err) }

    return ignore.join(_this)
}

/*console.log('Removing line Breaks')
string = nt; nt = '';
for (let i = 0; i < string.length; i++) {
    var c = string[i]
    var n = string[i + 1]
    var p = string[i - 1]
    if (wl && !isBlank(c) && !isLine(c)) {
        //for line checks
        wl = false;
        if (
            (isLetter(lc) && isLetter(n)) ||
            (isLetter(lc) && (isOpen(n) && n != '{')) ||
            (isClose(lc) && isLetter(n))
        ) {
            nt += ';'; console.log('added semicolon at after', [lc, n])
        }
        else if (!isLetter(lc) && !isLetter(n) && !isNumber(p) && !isNumber(lc)) { }
        else if (!isOpen(lc)) { }
        else (nt += '\n', console.log('no line break removal needed at after ', [p, n, lc]));;
    }
    else if (isLine(c)) {
        if (isBlank(n) || isLine(n)) {
            wl = true
        }
        //also for line checks
        else {
            if ((isLetter(p) && isLetter(n)) || (isLetter(p) && (isOpen(n) && n != '{')) || (isClose(p) && isLetter(n))) { nt += ';'; console.log('added semicolon at', [p, n]) }
            else if (!isLetter(p) && !isLetter(n) && !isNumber(p) && !isNumber(n)) { }
            else if (isOpen(p)) { }
            else (nt += '\n', console.log('no line break removal needed at ', [p, n, lc]));;
            if (
                !!0
            ) { nt += ';'; console.log('added semicolon 2: at', [p, n]) }
        }
    }
    if (isBlank(c)) {
        //if ((isLetter(p) && isLetter(n)) || isStr(n) || isStr(p)) { nt += ' '; console.log('added spacing') }
    }

    //ignore
    if (!isLine(c)) { nt += c; !isBlank && (lc = c) }
}
document.body.innerText = nt
*/
var findhref = function (a, b) {
    var res = [];

    function part2(e) {
        if (e.tagName.toLowerCase() == (b || 'a')) {
            res.push(e);
        } else {
            if (e.children.length) {
                e = e.children;
                e.forEach = [].forEach;
                e.forEach(e2 => {
                    part2(e2);
                })
            }
        }
    };
    part2(a);
    return res
}
var keywords = `await
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
let
new
return
super
switch
this
throw
try
typeof
var
void
while
async
with
yield`.split('\n')
function RemoveSpacing(string) {
    function isLetter(e) { return !!e.match(/[A-Z_$a-z]/gi) }
    function isOpen(e) { return !!e.match(/[\(\{\[]/gi) }
    function isClose(e) { return !!e.match(/[\]\}\)]/gi) }
    function isNumber(e) { return !!e.match(/[0-9]/gi) }
    function isLine(e) { return !!e.match(/[\r\n]/gi) }
    function isLetter(e) { return !!e.match(/[A-Z_$a-z]/gi) }
    function isBlank(e) { return !!e.match(/ /gi) }
    function isSyn(e) { return !!e.match(/[\+\*=%&\-]/gi) }
    function isStr(e) { return !!e.match(/[`'"]/gi) }
    var nt = ''
    var ignoreline = false//wip
    var lc, wl = false
    string = string.split(';').join('\n')
    console.log("Removing uneeded spacing")
    for (let i = 0; i < string.length; i++) {
        var c = string[i]
        var n = string[i + 1]
        var p = string[i - 1]
        if (isBlank(c)) {
            if ((isLetter(p) && isLetter(n)) || isStr(n) || isStr(p)) { nt += ' '; console.log('added spacing') }
        }
        //if(p)if(c==';'&&isClose(p)){console.log('ignored semicolon')};;
        //ignore
        if (!isBlank(c)) { nt += c; lc = c }
    }
    return nt
}
function faken() {
    console.warn("document doesnt exist")
    console.log("Created fake node")
    function wasync(f, arg, cb) {
        f(...arg).then(e => cb(e))
    }
    document = {}
    console.debug = console.log
    performance = Date;
    window = {}
    clearTimeout = function (timer) {
        timer.invalidate()
    }
    clearInterval = clearTimeout;
    setInterval = function (f, ms, ...args) {
        var time = new Timer()
        time.repeats = true
        time.timeInterval = ms
        time.schedule(function () {
            f(...args)
        })
        return time
    }
    setTimeout = function (f, ms, ...args) {
        var time = new Timer()
        time.repeats = false
        time.timeInterval = ms
        time.schedule(function () {
            f(...args)
        })
        return time
    }
    console.clear = function () { }
    console.dir = console.log
}
function dec2hexString(dec) {
    return '0x' + (dec + 0x10000).toString(16).substr(-4).toUpperCase();
}
function mkreg() {
    let conv = typeof this == typeof String() ? this : arguments[0];
    return conv.split("").map(l => (/[^A-Z^a-z^0-9]/g.test(l) ? ("\\" + l) : l)).join("")
}
const splitMultiple = (str, ...separator) => {
    const res = [];
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        if (!separator.includes(str[i])) {
            continue;
        };
        res.push(str.substring(start, i));
        start = i + 1;
    };
    return res;
};
function Ncode(num) {
    if (!num.isWhole() || num > 10 || 2) { return dec2hexString(num) }
    var ev
    if (!num) { return "!![]-!![]" }
    var d = [0]
    var d2 = [0, 1]
    var arr = []
    var ex = '!'
    var ups = ["[]", "true", '1']
    var downs = ['0', 'false', '![]']
    while (num != ev) {
        var enclose = [!0, !1].random()
        let push = ex.repeat(d2.random()) + (enclose ? '(' : '') + (ev < num ? ups : downs).random() + (enclose ? ')' : '');
        var r = d.random()
        for (let i = -1; i < r; i++) {
            arr.push(
                push
            )
        }

        ev = eval(arr.join("+"))

    }
    return '!!(' + arr.join("+") + ')'
}
async function Ncode2(boolen) {
    var ev
    var d = [0]
    var d2 = [0, 1]
    var arr = []
    var ex = '!!'
    var ups = ["[]", "true", '1']
    var downs = ['0', 'false', '![]']
    while (boolen != ev) {
        await w8(10)
        var enclose = [!0, !1].random()
        ex.repeat(d2.random()) + '' + (enclose ? '(' : '') + '' + (enclose ? ')' : '');
        let push = (!ev ? ups : downs).random()
        var r = d.random()
        var va = []
        for (let i = -1; i < r; i++) {
            va.push(
                push
            )
        }
        arr.push(va.join(!ev ? "+" : '-'))
        ev = !!eval(arr.join('+')); console.log('!!(' + arr.join("+") + ')', ev)

    }
    return '!!(' + arr.join("+") + ')'
}
if (typeof document == "undefined") {
    faken()
} else {
    try {
        /*console.log = function (...c) {
            var objDiv = document.getElementById("log")
            objDiv.scrollTop = objDiv.scrollHeight;
            objDiv.value += c.join(" ") + '\n'
        };*/
    } catch (err) { }
}
globalRoot.log = console.log;
async function sleep(ms) { await new Promise((a, _b) => { setTimeout(() => { a() }, ms) }) }
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}
function Ecode(str) {
    return (/[A-Za-z0-9]+/g).test(str) ? ('\\u00' + str.charCodeAt(0).toString(16).slice(-4)) : str
}
var used = {};
const characters = '_$qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

function makeid(mk, length = 1) {
    try {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        if (used[result]) { return makeid(mk, length) }
        used[result] = 1;
        return result;
    } catch (err) {
        return makeid(mk, length + 1)
    }
}
var myfunct = function () {
    console.log("working")
    function reverseGeocodingWithGoogle(latitude, longitude) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?
 latlng=${latitude},${longitude}&key={GOOGLE_MAP_KEY}`)
            .then(res => res.json())
            .then(response => {
                console.log("User's Location Info: ", response)
            })
            .catch(status => {
                console.log('Request failed.  Returned status of', status)
            })
    }
    function geoFindMe() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return;
        }
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            reverseGeocodingWithGoogle(longitude, latitude)
        }
        function error() {
            console.log("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }
    fetch('https://extreme-ip-lookup.com/json/')
        .then(res => res.json())
        .then(response => {
            console.log(response)
            console.log("Country: ", response.country);
        })
        .catch((_data, _status) => {
            console.log('Request failed');
        })
}
async function stringify(ignore, rt = false) {
    console.clear()
    console.dir(arguments[0] || this);
    var itemTC = (arguments[0] || this);
    var or = (arguments[0] || this).toString()
    var isA = false;
    if (typeof or == typeof Function.format) {
        isA = itemTC.isAsync();
    }
    var types = [typeof String(), typeof function () { }, typeof async function () { }]
    var bool
    var reals = []
    var time = performance.now()
    var ct = 0
    var raps2 = []
    const timer = setInterval(() => {
        document.title = secondsToHms((performance.now() - time) / 1000) + ' Elapsed'
    }, 1000);
    var start = makeid(1)
    var ns = [start + "[0]", start + "[1]", start + "[2]", start + "[3]", start + "[4]"];
    var beging_ = "(" + (isA ? "async " : "") + `function(){const ${start}=arguments;${itemTC.hasOwnProperty("name") && itemTC.name ? "return " : ""}`;
    var beging = `const ${start}=[`
    var beg2 = `];\n${itemTC.hasOwnProperty("name") && itemTC.name ? "return " : ""}`
    var instr = 0;
    var ab = 0;
    var code = "";
    var whitch
    var cancel, cancel2
    var strings = [];
    var strTypes = ['\'', "\"", "`", "/"];
    var regs = [...new Set(or.match(/[^\<^\*^0-9^A-z_^:^\/]\/[^\*][^\n]+\/(\w+)?/gi) || [])].shuffle();
    regs.forEach((reg, ind) => or = or.replace(reg, ns[0] + "[" + ind + "]"));
    var urls_ = (or.match(/http(s)?:[^ ^\n'"`]+[a-zA-Z0-9_]/gi) || []).filter(e => !e.includes('$'))
    urls_.length && (urls_ = urls_.map(e => [e, e.split('.').join('[dot]')]));
    var nocom = '';
    var clin = 0;
    var incomment;
    var firstletter = or[0] + "";
    await new Promise((done) => {
        var codes = [], code = "";
        var true_one = 0;
        var whitch, one
        var in_one = false;
        var c = or.split('');
        c.forEach((a, b) => {
            setTimeout(() => {
                if (c[b - 1] != '\\') {
                    if (!in_one && !true_one) {
                        if (a == "'" || a == '"') {
                            whitch = a;
                            in_one = 1;
                        }
                    }
                    if (a == '`' && !in_one && !true_one) { one = 1; true_one = 1 } else
                        if (a == '`' && true_one) { true_one = 0; codes.push(['`', code, code.split("").join("")]); code = ''; }
                    if (in_one && (a == '\n' || (a == whitch && c[b - 1] != '\\'))) { in_one = 0; whitch = null }
                }
                if (true_one && !one) { code += a }
                one && (one = 0);
                if (b == c.length - 1) {
                    console.debug('\n' + codes + '\n')
                    strings = codes;
                    done();
                }
            }, b)
        })
    })
    var arr = or
    console.log(["Post", 1])
    or = arr;
    console.log(strings)
    var idk = strings.filter(string => string[0] != "`").map(e => e[1]);
    strings.filter(string => string[0] != "`").forEach(d => {
        or = or.replace(d[0] + d[1] + d[0], ns[1] + "[" + idk.indexOf(d[1]) + "]")
    }); console.log(["Post", 2], strings)
    var lits = []
    strings.filter(e => e[0] == '`').forEach(e => {
        var t = e[1]
        var wtf = [];
        var lit
        var lvl = 0;
        var done
        var code = ""
        t.split("").forEach((f, b) => {
            let a = f
            if (lit) {
                if (a == "{") {
                    lvl++
                } else if (a == "}") { lvl-- }
            }
            if (f == "$" && t[b + 1] == "{" && !lit) {
                lit = 1
                done = 0;
            } else if (lit && a == "}") {
                if (!lvl) {
                    lit = 0;
                    wtf.push(code.replace("${", ""))
                    code = "";
                }
            }

            if (lit) {
                code += f;
            }

        })
        lits.push([...e, wtf])
    }); strings = [];
    console.log(["Post", 2.5])
    console.log(lits)
    for (let targets = 0; targets < lits.length; targets++) {
        await sleep(10)
        const e = lits[targets];
        let ggs = e[3];
        var rp = e[1]
        rp = rp.split("\"").join("\\\"")
        rp = rp.split("\n").join('\\n"+\n"')
        e[3].forEach(gg => {
            rp = rp.replace("${" + gg + "}", "'+(" + gg + ")+'")
        });
        var rps = rp;
        console.log(rps.split)
        var spls = []
        ggs.forEach(ee2 => {

            var r = new RegExp(
                ".\\(" + ee2 + "\\).", "g"
            )
            var m = rps.match(r) || [];
            m.forEach(ee3 => {
                spls.push(ee3)
            })

        })
        rp = '\'' + rp + '\'';
        var l = [rp]
        var snr = new RegExp("(" + spls.map(mkreg).join("|") + ")", "gi")
        rp.split(snr).filter(s => {
            return !ggs.filter(st => {
                st = "+(" + st + ")+"
                return st == s
            }).length
        }).forEach(e => {
            //e=e.split('\n').join("\\n");
            reals.push(e)
            rp = rp.replace(e, ns[3] + "[" +
                reals.indexOf(e)
                + "]")
        })
        l.push(rp)
        console.log(ggs, l)
        or = or.replace(e[0] + e[1] + e[0], rp)

    }
    await new Promise((done) => {
        var codes = [], code = "";
        var true_one = 0;
        var whitch, one
        var in_one = false;
        var c = or.split('');
        c.forEach((a, b) => {
            setTimeout(() => {
                if (c[b - 1] != '\\') {
                    if (!in_one && !true_one) {
                        if (a == '\'' || a == '"') {
                            whitch = a;
                            in_one = 1;
                        }
                    }
                    if (a == '`' && !in_one && !true_one) { one = 1; true_one = 1 } else
                        if (a == '`' && true_one) { true_one = 0; codes.push(['`', code, code.split("").map(Ecode).join("")]); code = ''; }
                    if (in_one && (a == '\n' || (a == whitch && c[b - 1] != '\\'))) { in_one = 0; whitch = null }
                }
                if (true_one && !one) { code += a }
                one && (one = 0);
                if (b == c.length - 1) {
                    console.debug('\n' + codes + '\n')
                    strings = codes;
                    done();
                }
            }, b)
        })
    })
    console.log("strings:", strings)
    var idk = strings.filter(string => string[0] != "`").map(e => e[1]);
    strings.filter(string => string[0] != "`").forEach(d => {
        or = or.replace(d[0] + d[1] + d[0], ns[1] + "[" + idk.indexOf(d[1]) + "]")
    });
    await new Promise((done, _notdone) => {
        or.split("").forEach((a, b) => {
            if (!b) { return }
            setTimeout(() => {
                var mi = strTypes.indexOf(a);
                if (!clin || a == '\n') {
                    console.log('Line:' + clin + '-' + or.split('\n')[clin])
                    clin++
                }
                if (a == '\n') null;
                if (a == '/' && or[b + 1] == '/' && !instr) { cancel = 1 }
                if (a == '\n') { cancel = 0; }
                if (a == '/' && or[b + 1] == '*' && !instr) { cancel2 = 1 }
                if (a == '*' && or[b - 1] != '\\' && or[b + 1] == '/') { cancel2 = 0; }
                if (cancel || cancel2) return;
                else {
                    nocom += a;
                    //console.log(nocom)
                    if (strTypes.indexOf(a) < 4 || instr) {
                        if (whitch == a && instr && or.toString()[b - 1] != "\\") {
                            console.log(code.length)
                            // console.log(or.toString()[b - 1], or.toString()[b - 2])
                            strings.push([whitch, code, code.split("").map(Ecode).join("")])
                            instr = 0; code = ""; whitch = null
                        } else
                            if (
                                (instr && a == "\n" && whitch != "`")
                            ) {
                                // console.log([a, or[b + 1], code])
                                code = "";
                                instr = 0;
                                whitch = null
                            } else
                                if (strTypes.indexOf(a) > -1 && !instr) {
                                    instr = !instr; whitch = a;
                                } else if (instr) { code += a }
                    }
                }
                if (b == (or.split("").length - 1)) {
                    done()
                }
            }, b)
        })
    });
    console.log(nocom)
    console.log("strings:", strings)
    or = nocom;
    console.log("Post", 3)
    console.log("Post", 4)
    arr = or;
    var defins = []

    bruv = ([...new Set((arr.match(/(var|const|let|class|function)[\s]+[\w_]+/gi)))].shuffle() || []);
    bruv.forEach(e => {

        var spits = e.split(/[\s]+/gi)
        var name = e.split(/[\s]+/gi).pop()
        var trp = spits[0].match(/class/gi)
        var newName = makeid(5)
        //spits[0]!="function"?arr = arr.replace(e, ((e.replace(name, newName)).replace(spits[0], ""))):null;
        var tt = RegExp(`.${name}(.)?`, "g");
        ; (arr.match(tt) || []).filter(gg => !gg.replace(name, '').match(/[A-Za-z0-9_'`"]+/gi)).forEach(ee => {
            var rp = (spits[0] == 'function' ? `/*${name}*/` : '') + ee.replace(name, newName)
            arr = arr.replace(ee, rp)
        })
    })
    or = arr;
    strings = []
    or.toString().split("").forEach((a, b) => {
        var mi = strTypes.indexOf(a);
        if (strTypes.indexOf(a) < 3 || instr) {
            if (whitch == a && instr && this.toString()[b - 1] != "\\") {
                if (code.includes(".")) {
                    strings.includes('.') ? null : strings.push([whitch, '.', '.'.split("").map(Ecode).join("")])
                    let t = code.split('.').join('+' + whitch + '+' + whitch + '+')
                    console.log("code:", t)
                    or = or.replace(code, code.split('.').join(whitch + '+' + whitch + '.' + whitch + '+' + whitch), t)
                    code.split('.').forEach((h, g) => {
                        strings.push([whitch, h, h.split("").map(Ecode).join("")])
                    })
                }
                else strings.push([whitch, code, code.split("").map(Ecode).join("")])
                instr = 0; code = ""; whitch = null
            } else
                if (
                    (instr && a == "\n" && whitch != "`")
                ) {
                    console.log([a, or[b + 1], code])
                    code = "";
                    instr = 0;
                    whitch = null
                } else
                    if (strTypes.indexOf(a) > -1 && !instr) {
                        instr = !instr; whitch = a;
                    } else if (instr) { code += a }
        }
    })
    console.log("Post", 5, strings)
    var idk2 = strings.filter(string => string[0] != "`").map(e => e[1]);
    strings.filter(string => (string[0] != "`" && string[1].split('.').join('').length)).forEach(d => {
        or = or.replace(d[0] + d[1] + d[0], ns[2] + "[" + idk2.indexOf(d[1]) + "]")
    }); console.log("Post", 6)
        ; (or.match(/[^\w^_^\d][\s]+?\n([\s]+)?../gi) || []).forEach(_e => {
            //line breaks test or=or.replace(e,e.split(/[\s\n]+/gi).join('; '))
        }); console.log("Post", 7)
    var arr = or;
    ; (arr.match(/[^.]\.[\.\w]+/gi) || []).shuffle().filter(e => e.match(/\.+/).sort((a, b) => b.length - a.length)[0].length < 2).map(method => {
        //console.log(method.match(/\.+/g).filter(e=>e.length>2))
        //if(method.match(/\.+/g).filter(e=>e.length>2))return;
        var name = method.split(".")[0];
        try {
            if (typeof eval(name) == typeof 1) {
                return
            }
        } catch (err) { }
        var me = method.split(name + ".")[1];
        var ch = '["' + me.split(".").join('"]["') + '"]'
        arr = arr.replace(method, name + ch)
        console.log([method, name, ch])
    });
    console.log("Done")
    console.log("Post", 8)
    var fu = (arr.match(/function[\s]+\(/g) || [])[0];
    (fu && typeof this == "function") && (
        !arr.indexOf(fu) && (
            arr = arr.replace(fu, "function " + this.name + "(")
        ));
    console.log("Post", 10)
    regs = "/* RegEx */[" + regs.join() + "]";
    idk = `/* strings1 */[\"${idk.map(e => ((e.match(/\\u\w+/gi) || ['_________']).filter(e => e.length < 5).length ? e = e.replace("\\", '\\') : e).split('"').join("\\").split("").map(Ecode).join("")).join("\",\"")}\"]`;
    idk2 = `/* string2 */['${idk2.map(e => e.split("").join("")).join("','")}']`
    var bb = [...(new Set(arr.match(/[A-Z0-9a-z_]+\[/gi) || []))];
    var globs_s = 0
    var globs = bb.filter(e => {
        var name = e.match(/[_A-Za-z0-9]+/gi)[0] + ''
        if (globalRoot[name] != undefined && !name.startsWith('on') && globalRoot[name].nodeType != 1) {
            console.log(name + ":is real")
            arr = arr.split(name).join(ns[4] + "[" + globs_s + "]")
            globs_s++;
            return name != "args" && name != "arguments" ? !!1 : !!0
        }
        else {
            console.warn(name + ":not real")
            return !!0
        }
    })
    globs = "/* GlobalObjs */[" + globs.map(f => f.match(/[_A-Za-z0-9]+/gi)[0]) + "]"
    var res

    arr = arr.split(/[\n]{2,}/gi).join('');
    (arr.match(/[^\[^\(^\{ ]\n[^A-z^0-9 ]/gi) || []).forEach(line => {
        var sp = line.split("\n").join("").match(/[\}\]\)][A-Za-z_]/gi)
        let tp = sp ? ";" : ""
        //arr = arr.replace(line, line.split('\n').join(''))
    });
    (arr.match(/[^\[^\(^\{^;]\n[A-z0-9_$]/gi) || []).forEach(line => {
        //arr = arr.replace(line, line.split('\n').join(';'))
    });
    (arr.match(/[^A-z^0-9^\( ]\n[A-z0-9_$ ]/gi) || []).forEach(line => {
        //arr = arr.replace(line, line.split('\n').join(''))
    })
        ; (arr.match(/[^\[^\(^\{^\n] [^\n^0-9^\{^\}^\[^\]^\(^\)]/gi) || []).forEach(line => {
            var sp = (line.split(" ").join("").match(/[\}\]\)][A-Za-z_]/gi));
            let tp = sp ? ";" : ""
            //arr = arr.replace(line, line.split(' ').join(tp))
        });
    arr = arr.split(')!').join(');!')
    arr = arr.split('};else').join('}else')
    arr = arr.split('else;if').join('else if')
    arr = arr.split(',;').join(',')
    arr.split(/;[\)\]\}]/).forEach(line => {
        //         arr = arr.replace(line, line.split(';').join(''))
    })
        //     console.l([res, arr])
        ;[...(new Set(arr.match(/[^_^A-Z^a-z][x\d]+(\.\d+)?([^_^A-Z^a-z])?/gi) || []))].filter(test => /\d+([x\d]+)?(\.\d+)?/g.test(test)).map(e => [e, e.match(/\d+([x\d]+)?(\.\d+)?/g)[0]]).forEach(num => {

            //arr = arr.split(num[0]).join(num[0].replace(num[1], Ncode(eval(num[1]))))
        });
    console.log('Formating code')
    arr = await Function.formate(arr)
    console.log('Finish in:' + ((performance.now() - time).toFixed(2) * 1) + "ms")
    console.log("Done", 10)
    clearInterval(timer);
    var an = [... new Set(arr.match(/..([\n\s])+?[\*=\+\!\%\-]+([\n\s])+?../gi) || [])];
    an.forEach(sign => {

        var string = sign.match(/[\*=\+\!\%\-]+/gi)[0];
        console.debug(sign, sign.replace(string, " " + string + " "))
        //arr = arr.split_replace(sign,null,sign.replace(string, " " + string + " "))
    })
    var p = (
        arr.match(/.[\n\s]+./gi) || []).filter(e => {
            const e2 = e.split(/[\s\n]/).join("");
            var test = [
                !(/[\]\)]\w/).test(e2) &&
                !(/[\w$_]{2}/).test(e2),
                (/[;][^\)^\]]/).test(e2),
                (/[^a-z^A-Z^0-9_$]{2}/).test(e2),
                (/[^\]^\)^\}^\w^\d$_]\w/).test(e2),
                (/[\w\d][:\?\=\+\-\/\*%<>]/).test(e2),
                (/[:\?\=\+\-\/\*%<>][\w\d]/).test(e2)
            ]
            var test1 = test.filter(d => !!d);
            if (test1.length) {
                console.log([e, e2, ...test])
                return true
            }
            return false;
        })
    console.warn(
        p
    )
    p.forEach(d => {
        const pattern = d
        const replace = d.split(/[\n\s]/).join("")
        //arr = arr.split(pattern).join(replace)
    })
    console.warn(
        arr.match(/.[\n\s]+./gi)
    )
    reals = "/*idk*/['" + reals.join("") + "']"
    var ending = "";
    //arr = arr.split(';').join('\n')
    var ops = new RegExp("[" +
        [..."/:;}{[(".split(""), "&-"]
            .map(mkreg).join("") + "][\\s\\n]+.{,2}")
    !arr.startsWith(firstletter) ? arr = firstletter + arr : null;
    return rt ? [arr, (itemTC.name && itemTC.name != "Function" ? "const " + itemTC.name + "=" : "") +
        beging, ending] : (itemTC.name && itemTC.name != "Function" ? "const " + itemTC.name + "=" : "") +
        beging + "\n" + regs + ",\n" + idk + ",\n" + idk2 + ",\n" + reals + ",\n" + globs + ",\n/*idk*/{}\n]\n" + arr + ending;
};
Function.prototype.stringify = stringify
async function loadScript(src) {
    await new Promise(async (a, b) => {
        if ((typeof $ == "undefined") || (typeof $.get == "undefined")) {
            await new Promise((a, b) => {
                loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () {
                    eval(arguments[0])
                    a()
                })
            }); return loadScript(...arguments)
        }
        $.get(src, function (e) {
            a(e)
            res = e
        })
            .done(function (e) { res = e })
            .fail(function (e) {
                console.log("error")
                b(e)
                res = e
            })
            .always(function (e) { res = e })
    })
    return res
}
async function get(src) {
    await new Promise((a, b) => {
        $.get(src, function (e) {
            a(e)
            res = e
        })
            .done(function (e) { res = e })
            .fail(function (e) {
                b(e)
                res = e
            })
            .always(function (e) { res = e })
    })
    return res
}
function Format2(str) {
    var keywords = `async await	break	case	catch	class
    const	continue	debugger	default	delete
    do	else	enum	export	extends
    false	finally	for	function	if
    implements	import	in	instanceof	interface
    let	new	null	package	private
    protected	public	return	super	switch
    static	this	throw	try	true
    typeof	var	void	while	with
    yield`.match(/[a-z]+/gi)

    var ignore
    var st2 = ""
    str = str.split("  ").join("").split("\n\n").join("\n")
    var word = ""
    var ignoreworrd = false;
    for (let i = 0; i < str.length; i++) {
        var p = str[i - 1] || ""
        var c = str[i]
        var n = str[i + 1] || ""
        var STR = function (e) { return e.match(/["'`]/gi) }
        var number = function (e) { return e.match(/\d/gi) }
        var blank = function (e) { return e.match(/[ ]/gi) }
        var close = function (e) { return e.match(/[\}\]\)]/gi) }
        var open = function (e) { return e.match(/[\{\[\(]/gi) }
        var line = function (e) { return e.match(/[\r\n]/gi) }
        var letter = function (e) { return e.match(/[a-zA-Z_$]/gi) }
        if (!ignoreworrd) {
            if (letter(c) || number(c)) {
                word += c
            } else {
                if (word == "var" || word == 'const' || word == "let") {
                    ignoreworrd = 1
                    console.log(word)
                }
            }
        }
        if (p == "/" && c == "/" && !ignore) {
            c = "*"
            ignore = true
        } else
            if (line(c) && ignore) { st2 += "*/"; ignore = false }
        if (line(c)) {
            //commas
            if ((letter(p) || number(p)) && (letter(n) || number(n))) {
                if (ignoreworrd) { str += ';'; ignoreworrd = false }
                st2 += ","
            } else
                if (
                    (close(p) || STR(p)) && (letter(n) || number(n))
                ) { st2 += ";" }

        } else st2 += c
    }
    keywords.forEach(e => (
        st2 = st2.split("," + e).join(";" + e),
        st2 = st2.split(e + ",").join(e + " ")
    ))
    return st2
}

function Stacker() {
    console.log("Arguments given:", arguments)
    const ignore = [...arguments]
    var __this = this.split("  ").join('').split(';').join('\n').split_replace(/[\n\r]{2,}/, null, '\n')
    var _this = RemoveSpacing(__this)
    var reg1 = /.[\r\n]+[\}\]\)]/gi
    var reg2 = /..[\r\n]+./gi
    var reg3 = /.[\r\n]+./gi
    function f(e, b) {
        var split = e.split(/[\n\r]+/gi)
        var pp = b != 'yes' ? split[0][0] : null;
        var p = b != 'yes' ? split[0][1] : split[0]
        var n = split[1]
        console.log([p, n])
        var r = "\n"
        if ((p == '.' || (isClose(p) && isClose(n)) || (isClose(n) || isOpen(p))) || (isClose(p) && isClose(n))) {
            console.log("No semicolon needed")
            r = ""
        } else if (isClose(p) && (isLetter(n) || isNumber(n)) && p != ";") {
            p != '}' ? (r = ",", console.log("add comma")) : (r = ";", console.log("add semi"))

        }
        else if (isClose(p) && (isLetter(n) || isNumber(n))) {
            p != '}' ? (r = ",", console.log("add comma")) : (r = ";", console.log("add semi"))
        }
        else if ((isLetter(p) || isNumber(p)) && ((isLetter(p) || isNumber(p)))) {
            r = ","
            console.log("add comma")
        }
        else if ((isClose(p) || isOpen(p)) && ((isClose(p) || isOpen(p)))) {
            r = ""
            console.log("No sep required")
        }
        else if (isClose(p) && n == '.') {
            console.log("No semicolon needed")
            r = ""
        }
        else if ((isLetter(p) || (p != ";" && isClose(p))) && (isLetter(n) || isNumber(n))) {
            console.log("add semicolon")
            r = ";"
        } else if (isSyn(pp) && isSyn(p)) { r = ','; console.log("add comma") } else {
            function nosep() { r = ""; console.log('no sep req') }
            function camma() { r = ","; console.log('added comma') }
            function semicolon() { r = ";"; console.log('added semi') }
            if ((isClose(p) && isClose(n))) { nosep() }
            else if (isClose(p) && (isLetter(n) || isNumber(n))) { semicolon() }
            else console.log('cant stack', [p, n])
        }
        _this = _this.replace(e, split.join(r))
    }
    try {
        ; (_this.match(reg2) || []).forEach(f)
    } catch (err) { log(err) }
    try {
        ; (_this.match(reg3) || []).forEach(e => { f(e, 'yes') })
    } catch (err) { log(err) }
    _this.match(/,[A-Za-z]+/gi).map(e => e.replace(',', '')).filter(word => keywords.indexOf(word) > -1).forEach(e => { console.log('Fixed keyword', e), _this = _this.replace(',' + e, ';' + e) })

    return ignore.join(_this)
}
/**
 * @description Search greasyfork with this script
 * @param {string} q Search query
 * @param {number} p page index
 * @param {{}[]} r ignore this arg
 * @returns 
 */
async function getSrcs(q = 'gaston', p = 1, r = [{}]) {
    if (p < 1) { throw "page number cant be less than 1" }
    r.length ? console.log('Page:' + p, '\nScript found:' + r.length) : console.log("Search:" + q, '\nPage:' + p);
    const loader = new Loader()
    var srcs = await new Promise(a=>loader.loadScriptAsync("https://greasyfork.org/en/scripts.json?q=" + q + "&page=" + p,res=>{a(JSON.parse(res))}))
    if (srcs.length) {
        return await getSrcs(q, p + 1, [...r, ...srcs])
    } else return (console.log('Fnished:', r.length, 'Scripts found'), r)
}
function Loader() {
    var res;
    async function loadScript(src) {
        await new Promise(async (a, b) => {
            if ((typeof $ == "undefined") || (typeof $.get == "undefined")) {
                await new Promise((a, b) => {
                    loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () { eval(arguments[0]); a() });
                });
                return loadScript(...arguments)
            }
            $.get(src, function (e) {
                a(e); res = e
            })
                .done(function (e) {
                    res = e
                })
                .fail(function (e) {
                    console.log("error"); b(e); res = e
                })
                .always(function (e) {
                    res = e
                });
        }); return res
    }
    async function get(src) {
        await new Promise((a, b) => {
            $.get(src, function (e) {
                a(e); res = e
            })
                .done(function (e) {
                    res = e
                })
                .fail(function (e) {
                    b(e); res = e
                })
                .always(function (e) {
                    res = e
                });
        }); return res
    }
    function loadScriptAsync(src, cb) { if (typeof cb != typeof function () { }) { throw "Callback must be defined to run async" }; var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function () { if (this.readyState == 4 && this.status == 200) { cb.apply(xhttp.responseText, [xhttp.responseText]) } }; xhttp.open("GET", src, true); xhttp.send() }
    Object.assign(this, { loadScript, loadScriptAsync, get })
    return { loadScript, loadScriptAsync, get }
}

var findhref = function (a, b) {
    var res = [];

    function part2(e) {
        if (e.tagName.toLowerCase() == (b || 'a')) {
            res.push(e);
        } else {
            if (e.children.length) {
                e = e.children;
                e.forEach = [].forEach;
                e.forEach(e2 => {
                    part2(e2);
                })
            }
        }
    };
    part2(a);
    return res
}
function isLetter(e) { return !!(e || this).match(/[A-Z_$a-z]/gi) }
function isOpen(e) { return !!(e || this).match(/[\(\{\[]/gi) }
function isClose(e) { return !!(e || this).match(/[\]\}\)]/gi) }
function isNumber(e) { return !!(e || this).match(/[0-9]/gi) }
function isLine(e) { return !!(e || this).match(/[\r\n]/gi) }
function isLetter(e) { return !!(e || this).match(/[A-Z_$a-z]/gi) }
function isBlank(e) { return !!(e || this).match(/ /gi) }
function isSyn(e) { return !!(e || this).match(/[\+\*=%&\-]/gi) }
function isStr(e) { return !!(e || this).match(/[`'"]/gi) }
!(function () {
    function getError(f, ...args) {
        try { (f(...args)) } catch (err) { return err }
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
        var bruhMom = Array.isArray((code || this)) ? (code || this).join(joiner) : (types.indexOf(typeof code) < 0 ? this : code).toString().split("  ").join("")
            .split('{').join('{\n')
            .split('}').join('\n}')
            .split('\n\n').join('\n')
        var todo = bruhMom.split("");
        const l = todo.length - 1;
        for (let i = 0; i < todo.length; i++) {
            //await sleep(1)
            const d = todo[i]
            const g = todo[i + 1]
            const f = todo[i - 1]
            const per = Number(((i / todo.length) * 100).toFixed((2)))
            if (f != bs) {
                if (d == op) {
                    lvl++
                    console.log(per, '%', lvl)
                }
                if (d == cp) {
                    lvl--
                    console.log(per, '%', lvl)
                }
            }
            if (lvl < 0) lvl = 0;
            if (d == lb) {
                console.log(per, '%', lvl)
                if (g == cp) {
                    res += (d + sp.repeat(lvl ? lvl - 1 : lvl))
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
        return (f || this).constructor.name.includes("AsyncFunction");
    }
    var isAsync2 = (function () { const d = arguments; return function/*isAsync*/ R(f) { return (f || this)[d[2][0]][d[2][1]][d[2][2]](d[2][3]); }; })([], [""], ['\u0063\u006f\u006e\u0073\u0074\u0072\u0075\u0063\u0074\u006f\u0072', '\u006e\u0061\u006d\u0065', '\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073', '\u0041\u0073\u0079\u006e\u0063\u0046\u0075\u006e\u0063\u0074\u0069\u006f\u006e'], [''], [], {})
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
    function type_() {
        const _this = (arguments[0] || this)
        var arr = [isLetter, isNumber, isOpen, isClose, isBlank]
        return arr.filter(e => !!e(_this)).map(func => arr.map(e => e.name).indexOf(func.name))[0]
    }
    function getType(item) { return typeof (item || this) == undefined ? "undefined" : (item || this).constructor.name }
    Function.prototype.formate = formate;
    Function.prototype.isAsync = isAsync;
    Function.prototype.isAsync = isAsync2;
    Number.prototype.isWhole = isWhole;
    Array.prototype.random = random;
    Array.prototype.shuffle = shuffle;
    String.prototype.split_replace = split_replace;
    Object.assign(Object.prototype, {
        isNumber,
        isLetter,
        isOpen,
        isClose,
        isBlank,
        isLine, getType, type_
    })
    Object.assign(this, {
        formate,
        isAsync,
        isWhole,
        random,
        shuffle,
        split_replace,
        getError
    });
    function debug(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.debug('[' + n + ']', ...args) }; function error(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.error('[' + n + ']', ...args) }; function info(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.info('[' + n + ']', ...args) }; function log(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.log('[' + n + ']', ...args) }; function warn(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.warn('[' + n + ']', ...args) }; function dir(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.dir('[' + n + ']', ...args) }; function dirxml(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.dirxml('[' + n + ']', ...args) }; function table(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.table('[' + n + ']', ...args) }; function trace(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.trace('[' + n + ']', ...args) }; function group(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.group('[' + n + ']', ...args) }; function groupCollapsed(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.groupCollapsed('[' + n + ']', ...args) }; function groupEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.groupEnd('[' + n + ']', ...args) }; function clear(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.clear('[' + n + ']', ...args) }; function count(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.count('[' + n + ']', ...args) }; function countReset(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.countReset('[' + n + ']', ...args) }; function assert(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.assert('[' + n + ']', ...args) }; function profile(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.profile('[' + n + ']', ...args) }; function profileEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.profileEnd('[' + n + ']', ...args) }; function time(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.time('[' + n + ']', ...args) }; function timeLog(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeLog('[' + n + ']', ...args) }; function timeEnd(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeEnd('[' + n + ']', ...args) }; function timeStamp(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.timeStamp('[' + n + ']', ...args) }; function context(...args) { var n = Date().match(/[\d:]+/gi)[2]; console.context('[' + n + ']', ...args) };
    Object.assign(this, { debug, error, info, log, warn, dir, dirxml, table, trace, group, groupCollapsed, groupEnd, clear, count, countReset, assert, profile, profileEnd, time, timeLog, timeEnd, timeStamp, context })
    console.log("exteral.js is loaded")
    //const _PyS = ['\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0034.\u006d\u0069\u006e.\u006a\u0073', '\u006c\u006f\u0061\u0064\u0065\u0064', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0032.\u0031.\u0033.\u006d\u0069\u006e.\u006a\u0073#\u0073\u0068\u0061\u0032\u0035\u0036=\u0032\u0033\u0034\u0035\u0036...', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073', '\u0068\u0074\u0074\u0070\u0073://\u0063\u006f\u0064\u0065.\u006a\u0071\u0075\u0065\u0072\u0079.\u0063\u006f\u006d/\u006a\u0071\u0075\u0065\u0072\u0079-\u0033.\u0036.\u0030.\u006d\u0069\u006e.\u006a\u0073']; var toload = [_PyS[0x0000], _PyS[0x0003], _PyS[0x0003], _PyS[0x0002]]; toload['\u0066\u006f\u0072\u0045\u0061\u0063\u0068'](async _ => { await fetch(_, { string: true })['\u0074\u0068\u0065\u006e'](async __ => __['\u0074\u0065\u0078\u0074']())['\u0074\u0068\u0065\u006e'](eval); console['\u006c\u006f\u0067'](_PyS[0x0001], _) });
}).apply((typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this : (globalThis || self || window || top)) : exports : this));
class Dog {
    constructor(name = '', age = (Math.random() * 10).toString() || (Math.random() * 10)) {
        this.name = name; this.age = age * 1;
    }
    SetAge(num) {
        if (!num) { throw "Cant set age to NaN"; }
        if (typeof num == typeof '') {
            if (num.match(/\d+/)) {
                num.match(/\d+/)[0].length == num.length && (num = num * 1);
            } else throw "Cant set age to NaN";
        }
        this.age = num * 1;
    }
    AgeUp() {
        this.age++;
    }
}
const T = [""];
const Q = ["\u004f\u0062\u006a\u0065\u0063\u0074", "\u004c\u006f\u0067\u0067\u0069\u006e\u0067", ".", ".", ":"];
const M = ['\u006b\u0065\u0079\u0073', '\u006c\u006f\u0067', '\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079', '\u0070\u0075\u0073\u0068', '\u006c\u006f\u0067', '\u006a\u006f\u0069\u006e', '\u006c\u0065\u006e\u0067\u0074\u0068', '\u0066\u0069\u006c\u0074\u0065\u0072', '\u006c\u0065\u006e\u0067\u0074\u0068', '\u004c\u006f\u0067\u004b\u0079\u0065\u0073']
var RNydH = [
    console, document, Object[M[0]]
];
function/*LogKyes*/ YkuTy(obj = {}, kl = [], n = Q[0]) {
    console[M[1]](Q[1], JSON[M[2]](obj))
    for (let pIPgJ in obj) {
        kl[M[3]](pIPgJ)
        console[M[1]](n + Q[2] + kl[M[5]](Q[2]) + Q[4] + typeof obj[pIPgJ])
        if (RNydH[2](obj[pIPgJ])[M[6]]) {
            var sxFTz = [
                obj[pIPgJ] == top,
                obj[pIPgJ] == window,
                obj[pIPgJ] == self,
                obj[pIPgJ] == (globalThis, this)
            ][M[7]](e => e);
            if (!sxFTz[M[6]]) {
                /*LogKyes*/ YkuTy(obj[pIPgJ], [], n)
            }
        }
    }
};
window[M[9]]/*LogKyes*/ = YkuTy;
Object.prototype.keys = function () { return Object.keys(arguments[0] || this) }
class DataObj {
    constructor(name, ...presets) {
        this.name = name;
        !presets && (presets = []);
        for (let i = 0; i < presets.length; i++) {
            let preset = presets[i]
            let keys = preset.keys().map(e => [e, preset[e]])
            console.l(keys)
            for (let p = 0; p < keys.length; p++) {
                let stuff = keys[p]
                console.l(stuff)
                this[stuff[0]] = stuff[1]
            }
        }
    }
    getKey(key) { this.hasOwnProperty(key) ? this[key] : console.warn(key + ' doesnt exist on:' + this.name) }
    SetKey(key, value) { this[key] = value }
    Removekey(key) { this.hasOwnProperty(key) ? delete this[key] : console.warn(key + ' doesnt exist on:' + this.name) }
}
Number.prototype.isWhole = function () { return this.toString().includes(".") }
function polyF(points) {
    var mins = [], maxs = [];
    var lastp = points[0]
    var dec, inc
    for (let p = 0; p < points.length; p++) {
        let point = points[p]
        if (p) {
            var dif = point[1] - lastp[1]
            if (dif < 0 && inc) {
                maxs.push(lastp)
                dec = 1
                inc = 0
            } else
                if (dif < 0) { dec = 1 }
            if (dif > 0 && dec) {
                maxs.push(lastp)
                dec = 0
                inc = 1
            }
            else if (dif > 0) { inc = 1 }
            console.log(dif)
            lastp = point
        }
    }
    console.log(mins)
}
function gp() {
    const _ = arguments
    let __ = [
        function zeros() {
            console.log("finding zeros")

        },
        function degree() {

        },
        function horzast() {
            var ndeg = _[0][0][1]
            var ddeg = _[1][0][1]
            var degree = ndeg + "\\" + ddeg;
            var y
            if (ndeg == ddeg) {
                y = _[0][0][0] / _[1][0][0]

            } else if (ddeg > ndeg) {
                y = 0

            } else y = "NOHA";
            console.log({ y })
            var HA = { degree, y }
            var factor = [_[0], _[1]].map(list => {

            })
        },
        function slantasy() {

        }
    ]
    return (function (...arg) {
        if (typeof arg[0] == "function") {
            return _[3] ? arg[0]() : arg[0]
        }
    })
        (__.filter(f => {
            return (f.name == _[2])
        }).length ? __.filter(f => {
            return (f.name == _[2])
        })[0] : console.warn("Cant find function called:" + _[2] + "\nHere is a list of current function:" + __.map(f => f.name)))

};
Number.prototype.multi = (function () { const e = arguments; return function/*Multi*/O() { var I = arguments[0]; var P = this; var a = 0; var L = []; if (this == NaN) { throw e[2][0]; return } while (a != P) { if (a > P) { a-- } else a++; if (!(a % P)) { L[e[2][1]]([a, P / a]) } else { var b = P / a; if (b[e[2][2]]()) { L[e[2][1]]([a, -(P / a)]) } } }; P = -P; while (a != P) { if (a > P) { a-- } else a++; if (!(a % P)) { L[e[2][1]]([a, -(P / a)]) } else { var b = P / a; if (b[e[2][2]]()) { L[e[2][1]]([a, -(P / a)]) } } } L = L[e[2][7]](I => I[e[2][8]](e => !!e)); if (I) { return L[e[2][7]](e => (e[0] + e[1]) == I)[0] } else { return L } } })([], [""], ['\u0063\u0061\u006e\u0074 \u0075\u0073\u0065 \u004e\u0061\u004e \u0068\u0065\u0072\u0065', '\u0070\u0075\u0073\u0068', '\u0069\u0073\u0057\u0068\u006f\u006c\u0065', '\u0070\u0075\u0073\u0068', '\u0070\u0075\u0073\u0068', '\u0069\u0073\u0057\u0068\u006f\u006c\u0065', '\u0070\u0075\u0073\u0068', '\u0066\u0069\u006c\u0074\u0065\u0072', '\u0065\u0076\u0065\u0072\u0079', '\u0066\u0069\u006c\u0074\u0065\u0072'], [''], [], {})
Number.prototype.multi2 = function () {
    var t = arguments[0];
    var b = this
    var ind = 0
    var list = []
    if (this == NaN) { throw "cant use NaN here"; return }

    while (ind != b) {
        if (ind > b) {
            ind--
        } else ind++;
        if (!(ind % b)) {
            list.push([ind, b / ind])
        } else {
            var num = b / ind
            if (num.isWhole()) {
                list.push([ind, -(b / ind)])
            }
        }
    }
    b = -b
    while (ind != b) {
        if (ind > b) {
            ind--
        } else ind++;
        if (!(ind % b)) {
            list.push([ind, -(b / ind)])
        } else {
            var num = b / ind
            if (num.isWhole()) {
                list.push([ind, -(b / ind)])
            }
        }
    }
    list = list.filter(t => t.every(e => !!e))
    if (t) {
        return list.filter(e => (e[0] + e[1]) == t)[0]
    } else { return list }
};
function present(str, fc) {
    QuickLook.present(str, !!fc)
    return
    var w = new WebView()
    var html = "<html>" +
        "<head>" +
        "<style>body{font-size:200%}</style>" +
        "<body><p>" + str + "</p></body>" +
        "</head>" +
        "</html>"
    w.loadHTML(html)
    w.present(!!fc)
}




//present.stringify().then(present,log)







(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Rythm = factory());
}(this, (function () {
    'use strict';

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Analyser = function Analyser() {
        var _this = this;

        classCallCheck(this, Analyser);

        this.initialise = function (analyser) {
            _this.analyser = analyser;
            _this.analyser.fftSize = 2048;
        };

        this.reset = function () {
            _this.hzHistory = [];
            _this.frequences = new Uint8Array(_this.analyser.frequencyBinCount);
        };

        this.analyse = function () {
            _this.analyser.getByteFrequencyData(_this.frequences);
            for (var i = 0; i < _this.frequences.length; i++) {
                if (!_this.hzHistory[i]) {
                    _this.hzHistory[i] = [];
                }
                if (_this.hzHistory[i].length > _this.maxValueHistory) {
                    _this.hzHistory[i].shift();
                }
                _this.hzHistory[i].push(_this.frequences[i]);
            }
        };

        this.getRangeAverageRatio = function (startingValue, nbValue) {
            var total = 0;
            for (var i = startingValue; i < nbValue + startingValue; i++) {
                total += _this.getFrequenceRatio(i);
            }
            return total / nbValue;
        };

        this.getFrequenceRatio = function (index) {
            var min = 255;
            var max = 0;
            _this.hzHistory[index].forEach(function (value) {
                if (value < min) {
                    min = value;
                }
                if (value > max) {
                    max = value;
                }
            });
            var scale = max - min;
            var actualValue = _this.frequences[index] - min;
            var percentage = scale === 0 ? 0 : actualValue / scale;
            return _this.startingScale + _this.pulseRatio * percentage;
        };

        this.startingScale = 0;
        this.pulseRatio = 1;
        this.maxValueHistory = 100;
        this.hzHistory = [];
    };

    var Analyser$1 = new Analyser();

    var Player = function Player(forceAudioContext) {
        var _this = this;

        classCallCheck(this, Player);

        this.createSourceFromAudioElement = function (audioElement) {
            audioElement.setAttribute('rythm-connected', _this.connectedSources.length);
            var source = _this.audioCtx.createMediaElementSource(audioElement);
            _this.connectedSources.push(source);
            return source;
        };

        this.connectExternalAudioElement = function (audioElement) {
            _this.audio = audioElement;
            _this.currentInputType = _this.inputTypeList['EXTERNAL'];
            var connectedIndex = audioElement.getAttribute('rythm-connected');
            if (!connectedIndex) {
                _this.source = _this.createSourceFromAudioElement(_this.audio);
            } else {
                _this.source = _this.connectedSources[connectedIndex];
            }
            _this.connectSource(_this.source);
        };

        this.connectSource = function (source) {
            source.connect(_this.gain);
            _this.gain.connect(Analyser$1.analyser);
            if (_this.currentInputType !== _this.inputTypeList['STREAM']) {
                Analyser$1.analyser.connect(_this.audioCtx.destination);
                _this.audio.addEventListener('ended', _this.stop);
            } else {
                Analyser$1.analyser.disconnect();
            }
        };

        this.setMusic = function (trackUrl) {
            _this.audio = new Audio(trackUrl);
            _this.currentInputType = _this.inputTypeList['TRACK'];
            _this.source = _this.createSourceFromAudioElement(_this.audio);
            _this.connectSource(_this.source);
        };

        this.setGain = function (value) {
            _this.gain.gain.value = value;
        };

        this.plugMicrophone = function () {
            return _this.getMicrophoneStream().then(function (stream) {
                _this.audio = stream;
                _this.currentInputType = _this.inputTypeList['STREAM'];
                _this.source = _this.audioCtx.createMediaStreamSource(stream);
                _this.connectSource(_this.source);
            });
        };

        this.getMicrophoneStream = function () {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            return new Promise(function (resolve, reject) {
                navigator.getUserMedia({ audio: true }, function (medias) {
                    return resolve(medias);
                }, function (error) {
                    return reject(error);
                });
            });
        };

        this.start = function () {
            if (_this.currentInputType === _this.inputTypeList['TRACK']) {
                if (_this.audioCtx.state === 'suspended') {
                    _this.audioCtx.resume().then(function () {
                        return _this.audio.play();
                    });
                } else {
                    try {
                        _this.audio.play();
                    } catch (err) {
                        return false;
                    }
                }
            }
        };

        this.stop = function () {
            if (_this.currentInputType === _this.inputTypeList['TRACK']) {
                _this.audio.pause();
            } else if (_this.currentInputType === _this.inputTypeList['STREAM']) {
                _this.audio.getAudioTracks()[0].enabled = false;
            }
        };

        this.browserAudioCtx = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = forceAudioContext || new this.browserAudioCtx();
        this.connectedSources = [];
        Analyser$1.initialise(this.audioCtx.createAnalyser());
        this.gain = this.audioCtx.createGain();
        this.source = {};
        this.audio = {};
        this.hzHistory = [];
        this.inputTypeList = {
            TRACK: 0,
            STREAM: 1,
            EXTERNAL: 2
        };
    };

    var pulse = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 1.25;
        var min = !isNaN(options.min) ? options.min : 0.75;
        var scale = (max - min) * value;
        elem.style.transform = 'scale(' + (min + scale) + ') translateZ(0)';
        if (elem.className.indexOf("logo-bass") != -1) {
            window.pJSDom[0].pJS.particles.move.speed = 0.2 + (scale) * 3;
        }
    });

    var reset = function reset(elem) {
        elem.style.transform = '';
    };

    var shake = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 15;
        var min = !isNaN(options.min) ? options.min : -15;
        if (options.direction === 'left') {
            max = -max;
            min = -min;
        }
        var twist = (max - min) * value;
        elem.style.transform = 'translate3d(' + (min + twist) + 'px, 0, 0)';
    });

    var reset$1 = function reset(elem) {
        elem.style.transform = '';
    };

    var jump = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 30;
        var min = !isNaN(options.min) ? options.min : 0;
        var jump = (max - min) * value;
        elem.style.transform = 'translate3d(0, ' + -jump + 'px, 0)';
    });

    var reset$2 = function reset(elem) {
        elem.style.transform = '';
    };

    var twist = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 20;
        var min = !isNaN(options.min) ? options.min : -20;
        if (options.direction === 'left') {
            max = -max;
            min = -min;
        }
        var twist = (max - min) * value;
        elem.style.transform = 'rotate(' + (min + twist) + 'deg) translateZ(0)';
    });

    var reset$3 = function reset(elem) {
        elem.style.transform = '';
    };

    var vanish = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 1;
        var min = !isNaN(options.max) ? options.max : 0;
        var vanish = (max - min) * value;
        if (options.reverse) {
            elem.style.opacity = max - vanish;
        } else {
            elem.style.opacity = min + vanish;
        }
    });

    var reset$4 = function reset(elem) {
        elem.style.opacity = '';
    };

    var borderColor = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var from = options.from || [0, 0, 0];
        var to = options.to || [255, 255, 255];
        var scaleR = (to[0] - from[0]) * value;
        var scaleG = (to[1] - from[1]) * value;
        var scaleB = (to[2] - from[2]) * value;
        elem.style.borderColor = 'rgb(' + Math.floor(to[0] - scaleR) + ', ' + Math.floor(to[1] - scaleG) + ', ' + Math.floor(to[2] - scaleB) + ')';
    });

    var reset$5 = function reset(elem) {
        elem.style.borderColor = '';
    };

    var color = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var from = options.from || [0, 0, 0];
        var to = options.to || [255, 255, 255];
        var scaleR = (to[0] - from[0]) * value;
        var scaleG = (to[1] - from[1]) * value;
        var scaleB = (to[2] - from[2]) * value;
        elem.style.backgroundColor = 'rgb(' + Math.floor(to[0] - scaleR) + ', ' + Math.floor(to[1] - scaleG) + ', ' + Math.floor(to[2] - scaleB) + ')';
    });

    var reset$6 = function reset(elem) {
        elem.style.backgroundColor = '';
    };

    var radius = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 25;
        var min = !isNaN(options.min) ? options.min : 0;
        var borderRadius = (max - min) * value;
        if (options.reverse) {
            borderRadius = max - borderRadius;
        } else {
            borderRadius = min + borderRadius;
        }
        elem.style.borderRadius = borderRadius + 'px';
    });

    var reset$7 = function reset(elem) {
        elem.style.borderRadius = '';
    };

    var blur = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 8;
        var min = !isNaN(options.min) ? options.min : 0;
        var blur = (max - min) * value;
        if (options.reverse) {
            blur = max - blur;
        } else {
            blur = min + blur;
        }
        elem.style.filter = 'blur(' + blur + 'px)';
    });

    var reset$8 = function reset(elem) {
        elem.style.filter = '';
    };

    var coefficientMap = {
        up: -1,
        down: 1,
        left: 1,
        right: -1
    };

    var swing = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var radius = !isNaN(options.radius) ? options.radius : 20;
        var direction = Object.keys(coefficientMap).includes(options.direction) ? options.direction : 'right';
        var curve = Object.keys(coefficientMap).includes(options.curve) ? options.curve : 'down';
        var _ref = [coefficientMap[direction], coefficientMap[curve]],
            xCoefficient = _ref[0],
            yCoefficient = _ref[1];

        elem.style.transform = 'translate3d(' + xCoefficient * radius * Math.cos(value * Math.PI) + 'px, ' + yCoefficient * radius * Math.sin(value * Math.PI) + 'px, 0)';
    });

    var reset$9 = function reset(elem) {
        elem.style.transform = '';
    };

    var neon = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var from = options.from || [0, 0, 0];
        var to = options.to || [255, 255, 255];
        var scaleR = (to[0] - from[0]) * value;
        var scaleG = (to[1] - from[1]) * value;
        var scaleB = (to[2] - from[2]) * value;
        elem.style.boxShadow = '0 0 1em rgb(' + Math.floor(to[0] - scaleR) + ', ' + Math.floor(to[1] - scaleG) + ', ' + Math.floor(to[2] - scaleB) + ')';
    });

    var reset$10 = function reset(elem) {
        elem.style.boxShadow = '';
    };

    var textNeon = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var from = options.from || [0, 0, 0];
        var to = options.to || [255, 255, 255];
        var scaleR = (to[0] - from[0]) * value;
        var scaleG = (to[1] - from[1]) * value;
        var scaleB = (to[2] - from[2]) * value;
        elem.style.textShadow = '0 0 40px rgb(' + Math.floor(to[0] - scaleR) + ', ' + Math.floor(to[1] - scaleG) + ', ' + Math.floor(to[2] - scaleB) + ')';
        var r = Math.floor(to[0] - scaleR), g = Math.floor(to[1] - scaleG), b = Math.floor(to[2] - scaleB);

        if (elem.className.indexOf("logo-neon") != -1) {
            window.pJSDom[0].pJS.particles.color.rgb = { r, g, b };
        }
    });

    var reset$11 = function reset(elem) {
        elem.style.textShadow = '';
    };

    var kern = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 25;
        var min = !isNaN(options.min) ? options.min : 0;
        var kern = (max - min) * value;
        if (options.reverse) {
            kern = max - kern;
        } else {
            kern = min + kern;
        }
        elem.style.letterSpacing = kern + 'px';
    });

    var reset$12 = function reset(elem) {
        elem.style.letterSpacing = '';
    };

    var fontSize = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 0.8;
        var min = !isNaN(options.min) ? options.min : 1.2;
        var fontSize = (max - min) * value + min;
        elem.style.fontSize = fontSize + 'em';
    });

    var reset$13 = function reset(elem) {
        elem.style.fontSize = '1em';
    };

    var borderWidth = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 5;
        var min = !isNaN(options.min) ? options.min : 0;
        var borderWidth = (max - min) * value + min;
        elem.style.borderWidth = borderWidth + 'px';
    });

    var reset$14 = function reset(elem) {
        elem.style.borderWidth = '';
    };

    var tilt = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var max = !isNaN(options.max) ? options.max : 25;
        var min = !isNaN(options.min) ? options.min : 20;
        var rotate3d = (max - min) * value;
        if (options.reverse) {
            rotate3d = max - rotate3d;
        }
        elem.style.transform = 'matrix(1, ' + Math.sin(rotate3d) + ', 0, 1 , 0 ,0)';
    });

    var reset$15 = function reset(elem) {
        elem.style.transform = '';
    };

    var fontColor = (function (elem, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var from = options.from || [0, 0, 0];
        var to = options.to || [255, 255, 255];
        var scaleR = (to[0] - from[0]) * value;
        var scaleG = (to[1] - from[1]) * value;
        var scaleB = (to[2] - from[2]) * value;
        elem.style.color = 'rgb(' + Math.floor(to[0] - scaleR) + ', ' + Math.floor(to[1] - scaleG) + ', ' + Math.floor(to[2] - scaleB) + ')';
    });

    var reset$16 = function reset(elem) {
        elem.style.color = '';
    };

    var Dancer = function () {
        function Dancer() {
            classCallCheck(this, Dancer);

            this.resets = {};
            this.dances = {};
            this.registerDance('size', pulse, reset);
            this.registerDance('pulse', pulse, reset);
            this.registerDance('shake', shake, reset$1);
            this.registerDance('jump', jump, reset$2);
            this.registerDance('twist', twist, reset$3);
            this.registerDance('vanish', vanish, reset$4);
            this.registerDance('color', color, reset$6);
            this.registerDance('borderColor', borderColor, reset$5);
            this.registerDance('radius', radius, reset$7);
            this.registerDance('blur', blur, reset$8);
            this.registerDance('swing', swing, reset$9);
            this.registerDance('neon', neon, reset$10);
            this.registerDance('textNeon', textNeon, reset$11);
            this.registerDance('kern', kern, reset$12);
            this.registerDance('borderWidth', borderWidth, reset$14);
            this.registerDance('fontSize', fontSize, reset$13);
            this.registerDance('tilt', tilt, reset$15);
            this.registerDance('fontColor', fontColor, reset$16);
        }

        createClass(Dancer, [{
            key: 'registerDance',
            value: function registerDance(type, dance) {
                var reset$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () { };

                this.dances[type] = dance;
                this.resets[type] = reset$$1;
            }
        }, {
            key: 'dance',
            value: function dance(type, className, ratio, options) {
                var dance = type;
                if (typeof type === 'string') {
                    //In case of a built in dance
                    dance = this.dances[type] || this.dances['pulse'];
                } else {
                    //In case of a custom dance
                    dance = type.dance;
                }
                var elements = document.getElementsByClassName(className);
                Array.from(elements).forEach(function (elem) {
                    return dance(elem, ratio, options);
                });
            }
        }, {
            key: 'reset',
            value: function reset$$1(type, className) {
                var reset$$1 = type;
                if (typeof type === 'string') {
                    //In case of a built in dance
                    reset$$1 = this.resets[type] || this.resets['pulse'];
                } else {
                    //In case of a custom dance
                    reset$$1 = type.reset;
                }
                var elements = document.getElementsByClassName(className);
                Array.from(elements).forEach(function (elem) {
                    return reset$$1(elem);
                });
            }
        }]);
        return Dancer;
    }();

    var dancer = new Dancer();

    var Rythm$1 = function Rythm(forceAudioContext) {
        var _this = this;

        classCallCheck(this, Rythm);

        this.connectExternalAudioElement = function (audioElement) {
            return _this.player.connectExternalAudioElement(audioElement);
        };

        this.setMusic = function (url) {
            return _this.player.setMusic(url);
        };

        this.plugMicrophone = function () {
            return _this.player.plugMicrophone();
        };

        this.setGain = function (value) {
            return _this.player.setGain(value);
        };

        this.connectSource = function (source) {
            return _this.player.connectSource(source);
        };

        this.addRythm = function (elementClass, type, startValue, nbValue, options) {
            _this.rythms.push({
                elementClass: elementClass,
                type: type,
                startValue: startValue,
                nbValue: nbValue,
                options: options
            });
        };

        this.start = function () {
            _this.stopped = false;
            console.log(_this.player.start());
            _this.analyser.reset();
            _this.renderRythm();
        };

        this.renderRythm = function () {
            if (_this.stopped) return;
            _this.analyser.analyse();
            _this.rythms.forEach(function (mappingItem) {
                var type = mappingItem.type,
                    elementClass = mappingItem.elementClass,
                    nbValue = mappingItem.nbValue,
                    startValue = mappingItem.startValue,
                    options = mappingItem.options;

                _this.dancer.dance(type, elementClass, _this.analyser.getRangeAverageRatio(startValue, nbValue), options);
            });
            _this.animationFrameRequest = requestAnimationFrame(_this.renderRythm);
        };

        this.resetRythm = function () {
            _this.rythms.forEach(function (mappingItem) {
                var type = mappingItem.type,
                    elementClass = mappingItem.elementClass,
                    nbValue = mappingItem.nbValue,
                    startValue = mappingItem.startValue,
                    options = mappingItem.options;

                _this.dancer.reset(type, elementClass);
            });
        };

        this.stop = function (freeze) {
            _this.stopped = true;
            _this.player.stop();
            if (_this.animationFrameRequest) cancelAnimationFrame(_this.animationFrameRequest);
            if (!freeze) _this.resetRythm();
        };

        this.player = new Player(forceAudioContext);
        this.analyser = Analyser$1;
        this.maxValueHistory = Analyser$1.maxValueHistory;
        this.dancer = dancer;
        this.rythms = [];
        this.addRythm('rythm-bass', 'pulse', 0, 10);
        this.addRythm('rythm-medium', 'pulse', 150, 40);
        this.addRythm('rythm-high', 'pulse', 400, 200);
        this.animationFrameRequest = void 0;
    };

    return Rythm$1;

})));
async function w8(ms) {
    await new Promise((a, b) => {
        setTimeout(() => { a() }, ms)
    })
    return void 0;
}
function spell(str, ms = 200) {
    var c = str.split('');
    var text = '';
    var cancel = 0;
    async function loop() {
        if (cancel) { return }
        await new Promise(async (a, b) => {
            for (let i = 0; i < c.length; i++) {
                if (cancel) { a(); return }
                text += c[i];
                document.title = text;
                await w8(ms)
            };
            for (let i = c.length; i > 0; i--) {
                if (cancel) { a(); return }
                text = text.split('').splice(0, i).join('');
                document.title = text;
                await w8(ms)
            };
            await w8(ms)
            text = '';
            a()
        });
        loop()
    }
    loop()
    return {
        stop: function () {
            cancel = 1;
            delete this
        }
    }
}

/*
var t=await stringify(polyF,1)
t = [t[0].split_replace(/else[\n ]+if/gi, null, "else if"), [t.splice(1, 2)]]
;!(async function (...other) {
    var lastChar
    var nospacing=false
    var lw=''
    var lastwords=[]
    for(let index=0;index<this.length;index++){
        const char=this[index];
        var letter=!!char.isLetter()
        var close=!!char.isClose()
        var open=!!char.isOpen()
        var number=!!char.isNumber()
        var blank=!!char==' ';
        var line=!!char=='\n';
        if(letter||number){
            lw+=char;
        }else (lastwords.push(lw),lw='');
        if(blank&&!nospacing){nospacing=true;}
        if(!blank&&nospacing){nospacing=false}

    }
}).apply(...t)*/
/**
 * 
 * @param {File} file 
 * @returns {ArrayBuffer}
 */
async function readFile(file) {
    let result
    const reader = new FileReader();
    await new Promise((a, b) => {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            result = event.target.result;
            prog.innerText = "done"
            a()
            // Do something with result
        });
        reader.addEventListener('progress', (event) => {
            event.loaded && event.total && (this.percent = (event.loaded / event.total) * 100, prog.innerText = "Progress: " + Math.round(percent), delete this.percent)
        });
    })
    reader.readAsDataURL(file);
    return result
}
; !(function () {
    class fs {
        constructor() {
            this._ = {}
            Object.assign(this._, new FileReader())
        }
        loadFile(file, cb) {
            if (typeof cb == typeof function () { } || typeof cb == typeof async function () { }) (processFile(file, cb)); else throw "callback must be defined to use non-async"
        }
        async loadFileAsync(file) {
            var res
            await new Promise((a, b) => rocessFile(file, function (e) { res = e, a() }));
            return res;
        }
    }
    const changeStatus = (str) => prog2.innerText = ("Status:" + str);
    const loaded = (e, cd) => {
        const fr = e.target;
        var result = fr.result;

        changeStatus('Finished Loading!');
        cd(result)
    }

    const errorHandler = (e) => {
        changeStatus('Error: ' + e.target.error.name);
    }
    const setProgress = (event) => event.loaded && event.total && (this.percent = (event.loaded / event.total) * 100, prog.innerText = "Progress: " + Math.round(percent), delete this.percent);
    const processFile = (file, cb = function () { }) => {
        const fr = new FileReader();

        fr.readAsDataURL(file);
        fr.addEventListener('loadstart', e => changeStatus('Start Loading'));
        fr.addEventListener('load', e => changeStatus('Loaded'));
        fr.addEventListener('loadend', function (a) { loaded(a, cb) });
        fr.addEventListener('progress', setProgress);
        fr.addEventListener('error', errorHandler);
        fr.addEventListener('abort', e => changeStatus('Interrupted'));
    }
    this.processFile = processFile

}).apply(globalRoot)