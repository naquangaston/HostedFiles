function getTag(str) {
    return function(tagsReg, metaTag, getT) {
	console.log({tagsReg,metaTag,getT})
        return (function(info, str) {
		console.log({info,str})
            return str.forEach(tag => {
                !info[tag[1]] && (info[tag[1]] = []), info[tag[1]].push(tag[2])
            }), info
        })({}, (console.log({m:str.match(/\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+/gi)}),str.match(metaTag)[0].match(tagsReg).map(e => e.match(getT))))
    }(/(\/{2}[ ]+@(\w+)[ ]+([^\n]+))/gi, /\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+\/{2} ={2}\/UserScript={2}/gi, /\/{2}[ ]+@(\w+)[ ]+([^\n]+)/)
}
function log(t,i){document.getElementById(`log${i||1}`).innerText=t}
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
    constructor() {
        var onload = null
        Object.assign(this, {
            get onload() {
                return onload
            },
            set onload(f) {
                return onload = f
            },
        })
    }
	async script(id){return await this.#fetScript(id)}
    async search(q) {
        return await this.#fetSearch({q})
    }
	async user(id){return await this.#fetUser(id)}
	async code(id){return await this.#fetCode(id)}
}
var f = new Fork()
Array.prototype.async=async function(func,method){
var supported=['map','forEach','filter'];
if(!supported.includes(method))throw (`${method} is not supported:\n[${supported.join(' - ')}] are supported`);
if(method=='map'){var a=Array.from(this);for(let i=0;i<a.length;i++){a[i]=await func(a[i],i)}return a}
if(method=='forEach'){for(let i=0;i<this.length;i++){await func(this[i])}}
if(method=='filter'){let r=[];for(let i=0;i<this.length;i++){if(await func(this[i]))r.push(this[i])}return r}
}
async function after(e){

var scripts=e instanceof Array?e:e.all_listable_scripts
//console.log(scripts)
var res=await scripts.async(async function(script){
var p=document.createElement('p')
var br=document.createElement('br')
var ta=document.createElement('textarea');
document.body.append(p)
document.body.append(ta)
document.body.append(br)
var time=(Date||performance);
var {name,namespace,version,locale,license,id,description}=script
log(script.name)
log('Getting code:'+id,2)
var t=time.now()
var src=await f.script(id)
var code=await f.code(id);log(`got code in:${time.now()-t}ms`,3)
ta.value=code;
var inf={}
try{inf=getTag(code)}catch(err){}
var {users}=src
p.innerText=`${name} by [${users.map(user=>user.name).join(' - ')}]`
},'forEach')
console.log({res})
}


f.search('diep').then(after,console.log).then(a=>{},b=>console.log(b.message||b))
