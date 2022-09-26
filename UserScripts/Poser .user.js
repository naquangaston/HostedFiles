// ==UserScript==
// @name         Poser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://greasyfork.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @run-at document-start
// ==/UserScript==
typeof(globalRoot)=='undefined'&&(globalRoot = (typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this : (globalThis || self || window || top)) : exports : this));
setValue=GM_setValue
getValue=GM_getValue;
var step=getValue('step')||0
var isUpdate=getValue('update')
var info=JSON.parse(decodeURIComponent(location.hash.split('').splice(1).join('')||'{"e":"0"}'))
if(isUpdate){
    if(info){
        if(info.id){

        }
        else console.warn('Cant update script with no script ID present :/.')
    }
    else console.warn('Cant update script with no info present :/.')
}
if(info.action=='getToken'){
    console.log('Retrieving Token')
    async function useCode(_info){
        console.log(_info)
        try{
            var incrument=info.inc||.1
        var {code,id}=_info
        status('Getting resources')
        var Loader=new ResourceLoader()
        //await Loader.loadResource('https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_Formatter.js')
        if(typeof js_beautify=='function'){
            console.log('Got js_')
            var{version}=await Loader.loadResource(`https://greasyfork.org/en/scripts/${id}.json`,true,false);
            var GMinfo = {
                code
            }
            status('Version:',version)
            let lines = code.split('\n')
            var cd = code.split('\n').splice(0, lines.indexOf("// ==/UserScript==") + 1).join('\n')
            var meta = lines.splice(lines.indexOf("// ==UserScript=="), lines.indexOf("// ==/UserScript==")).splice(1)
            var keep = []
            status('analysing code:')
            meta.map(line => {
                try {
                    var m = line.match(/(@)([\w]+)[ ]+(.+)/i);
                    !GMinfo[m[2]] && (GMinfo[m[2]] = [], !keep.includes(m[2]) && (keep.push(m[2])));
                    GMinfo[m[2]].push(m[3])
                } catch (err) { }
            })
            version=(Number(version)+incrument).toFixed(incrument.toString().split('.')[1].length)
            GMinfo.version=[version];
            code = (code.replace(cd, ""));
            status('encryting code:')
            var min = {code:JavaScriptObfuscator.obfuscate(
                code,
                {
                    compact: false,
                    numbersToExpressions: false,
                    stringArrayShuffle: true,
                    splitStrings: false,
                    log:true,
                    identifierNamesGenerator:"mangled",
                    renameGlobals:false
                }
            ).obfuscatedCode}
            status('Formating code:')
            min.code=';'+globalRoot.js_beautify(min.code)
            //console.log({min,keep,GMinfo})
            script_version_code.value=['// ==UserScript==',keep.map(k=>GMinfo[k].map(e=>`// @${k} ${e}`).join('\n')).join('\n'),min.code,'// ==/UserScript=='].join('\n');
            status('Posting-');
            document.getElementById('enable-source-editor-code').click()
            document.getElementsByName('commit')[0].click()
        }
        }catch(err){console.log(err)}
    }
    function status(s){opener.postMessage({status:s},'https://diep.io')}
    function getToken_(){
        const token=[...document.getElementsByName('authenticity_token')].pop().value;
        onmessage=function(e){
            if(e.origin=="https://diep.io"){
                console.log('Hnadled',e.data,e)
                e.data==true&&(opener.postMessage({token},'https://diep.io'))
                e.data.info&&e.data.info.code&&(status('Pending code'),useCode(e.data.info))

            }else console.log('Unhandled Post',e)
        }
        console.log({token})
        opener.postMessage(true,'https://diep.io')
        console.log('Posted')
    }
    function getToken(){
        var _=setInterval(()=>{try{[...document.getElementsByName('authenticity_token')].pop().value;clearInterval(_);getToken_()}catch(err){}},1)
    }
    document.readyState=='complete'?getToken():onload=getToken();return
}