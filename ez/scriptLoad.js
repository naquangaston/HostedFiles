function getTag(str) {
    return function (tagsReg, metaTag, getT) {
        console.log({ tagsReg, metaTag, getT })
        return (function (info, str) {
            console.log({ info, str })
            return str.forEach(tag => {
                !info[tag[1]] && (info[tag[1]] = []), info[tag[1]].push(tag[2])
            }), info
        })({}, (console.log({ m: str.match(/\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+/gi) }), str.match(metaTag)[0].match(tagsReg).map(e => e.match(getT))))
    }(/(\/{2}[ ]+@(\w+)[ ]+([^\n]+))/gi, /\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+\/{2} ={2}\/UserScript={2}/gi, /\/{2}[ ]+@(\w+)[ ]+([^\n]+)/)
}
class Fork {
    #fet = async function(url, maxC=5, c = 0,err) {
        if (c < maxC) {
            return await fetch(url).then(a => a, async b => await this.#fet(url, maxC, c + 1,b))
        } else throw err
    }
    #fetSearch = async function(obj) {
        var q=Object.keys(obj).map(key=>`${key}=${obj[key]}`).join('&');
        return await this.#fet(`https://greasyfork.org/en/scripts.json?${q}`).then(e=>e.json())
    }
    #fetScript=async function(id){
        return await this.#fet(`https://greasyfork.org/en/scripts/${id}.json`).then(r=>r.json())
    }
    #fetUser = async function(id) {
        return await this.#fet(`https://greasyfork.org/en/users/${id}.json`).then(r=>r.json())
    };
    #fetCode = async function(id) {
        return await this.#fet(`https://greasyfork.org/en/scripts/${id}/code.user.js`).then(r=>r.blob()).then(r=>r.text())
    }
    constructor(userID) {
        this.userID=userID
        var onload = null
        Object.assign(this, {
            get onload() {
                return onload
            },
            set onload(f) {
                onload = f
            },
        })
    }
    async script(id){return await this.#fetScript(id)}
    async search(q) {
        return await this.#fetSearch({q})
    }
    async user(id){return await this.#fetUser(id||this.userID)}
    async code(id){return await this.#fetCode(id)}
}
var f = new Fork(472665)
Array.prototype.async=async function async(func,method='map'||'forEach'||'filter'){
    var supported=['map','forEach','filter'];
    if(!supported.includes(method))throw (`${method} is not supported:\n[${supported.join(' - ')}] are supported`);
    if(method=='map'){var a=Array.from(this);for(let i=0;i<a.length;i++){a[i]=await func(a[i],i)}return a}
    if(method=='forEach'){for(let i=0;i<this.length;i++){await func(this[i])}}
    if(method=='filter'){let r=[];for(let i=0;i<this.length;i++){if(await func(this[i]))r.push(this[i])}return r}
}
function id(id){return document.getElementById(id)}
function element(a){return document.createElement(a)}
var Myscrs=id('Myscrs')
function addToTable(all=[]){
    (function(){
    var[_0xm65ue,_0xb56bu,_0xr15lo,_0xn07rt,_0xo33cb,_0xj49wz,_0xb32pj,_0xw51qj,_0xs61ge,_0xo53ju,_0xs12eb,_0xu14nn,_0xd51va,_0xx56oi]=["\u0061\u0073\u0079\u006e\u0063","\u0063\u006f\u0064\u0065\u005f\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u005f\u0061\u0074","\u006e\u0061\u006d\u0065","\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e","\u0063\u006f\u0064\u0065\u005f\u0075\u0072\u006c","\u0069\u0064","\u0073\u0063\u0072\u0069\u0070\u0074","\u006d\u0061\u0074\u0063\u0068","\u0072\u0065\u0076\u0065\u0072\u0073\u0065","\u0069\u006e\u006e\u0065\u0072\u0054\u0065\u0078\u0074","\u0068\u0072\u0065\u0066","\u006a\u006f\u0069\u006e","\u0061\u0070\u0070\u0065\u006e\u0064","\u006c\u006f\u0067"]
    
    
    all[_0xm65ue](async function(_0xm26ro){var _0xb55rm=_0xm26ro[_0xb56bu]
    var _0xv96uo=_0xm26ro[_0xr15lo]
    var _0xm20zc=_0xm26ro[_0xn07rt]
    var _0xl13rj=_0xm26ro[_0xo33cb]
    var _0xu01kp=_0xm26ro[_0xj49wz]
    await f[_0xb32pj](_0xu01kp)
    var _0xw74gd=[...((_0xb55rm)[_0xw51qj](new RegExp("(\\\u0064+)-(\\\u0064+)-(\\\u0064+)","\u0069")))],[day,month,year]=_0xw74gd[_0xs61ge]()
    var _0xn58bv=element('a')
    _0xn58bv[_0xo53ju]=_0xv96uo
    _0xn58bv[_0xs12eb]=_0xl13rj;var _0xf46qg=element('span')
    _0xf46qg[_0xo53ju]=_0xm20zc;var _0xa34sx=element('span')
    _0xa34sx[_0xo53ju]=[day,month,year][_0xu14nn]('/')
    var _0xh44pm=element('td')
    _0xh44pm[_0xd51va](_0xn58bv)
    var _0xi96mw=element('td')
    _0xi96mw[_0xd51va](_0xf46qg)
    var _0xo99br=element('td')
    _0xo99br[_0xd51va](_0xa34sx)
    var _0xf83zt=element('tr')
    Myscrs[_0xd51va](_0xf83zt)
    Myscrs[_0xd51va](_0xh44pm)
    Myscrs[_0xd51va](_0xi96mw)
    Myscrs[_0xd51va](_0xo99br)
    console[_0xx56oi]('Script',_0xu01kp,[_0xh44pm,_0xi96mw,_0xo99br])},'forEach')
    })()
}
f.user().then(({all_listable_scripts})=>all_listable_scripts).then(addToTable)