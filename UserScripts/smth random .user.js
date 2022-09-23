// ==UserScript==
// @name         smth random
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autoclose the zoom page when zoom in launched
// @author       You
// @match        *://zoom.us/*
// @match        *://*/*
// @match        https://zoom.us/
// @require      https://pastebin.com/raw/sWTJEUs1
// @grant        none
// ==/UserScript==

window.triggerMouseEvent=this.triggerMouseEvent=function triggerMouseEvent(node, eventType) {var clickEvent = document.createEvent ('MouseEvents');clickEvent.initEvent (eventType, true, true);node.dispatchEvent (clickEvent);}
window.click=function c(et){triggerMouseEvent (et, "mouseover");triggerMouseEvent (et, "mousedown");triggerMouseEvent (et, "mouseup");triggerMouseEvent (et, "click");};
setTimeout(()=>{
    var con=1;
function b(d=0){
console.log(d)
var a=getElementByAttribute("answers--mc",'class').children
var c;try{c=a.length}catch(err){setTimeout(b,1000);return;}
a[d].click();
setTimeout(()=>{
getElementByAttribute('Check my work')[1].click();
},200);
setTimeout(e=>{
if(!a[d].innerText.includes('Incorrect')){next()}
else{getElementByAttribute('button--return-to-question','class').click();setTimeout(e=>{b(d+1)},100)};
},350)
}
function next(){
try{getElementByAttribute('Score answer')[1].click();}catch(err){}
setTimeout(e=>{
try{getElementByAttribute('modal--score-each__button--confirm--warning button--has-arrow ember-view ic-modal-trigger','class').click();}catch(err){};
setTimeout(e=>{getElementByAttribute('Next')[1].click()
if(con){setTimeout(b,200)}
try{if(getElementByAttribute('footer__progress__heading','class').innerText.split(' of ')[0]==getElementByAttribute('footer__progress__heading','class').innerText.split(' of ')[1]){getElementByAttribute('header__exit header__exit--submit ember-view ic-modal-trigger','class').click();setTimeout(e=>{getElementByAttribute('modal--submit-activity__button--confirm ember-view ic-modal-trigger','class').click()},200)}}catch(err){};
},200)
},200)
}
document.domain=='mheducation.com'&&b();
    if(localStorage.yes=='1'){
        try{javascript:clickOnBegin()}catch(err){};
        try{click(document.querySelector("#containerdiv > div.attemptNavigation > a:nth-child(3)"))}catch(err){};
        if(!localStorage.link){localStorage.link=prompt('link restart')};
        findhref=function (a,b){
            var res=[];

            function part2(e){
                if(e.tagName.toLowerCase()==(b||'a')){
                    res.push(e);
                    if(e.children.length){
                        e=e.children;
                        e.forEach=[].forEach;
                        e.forEach(e2=>{
                            part2(e2);
                        })
                    }
                }else{
                    if(e.children.length){
                        e=e.children;
                        e.forEach=[].forEach;
                        e.forEach(e2=>{
                            part2(e2);
                        })
                    }
                }
            };
            part2(a);
            return res
        }
        console.clear();
        let a=(document.querySelector("#dataCollectionContainer > div:nth-child(3)")||document.querySelector("#dataCollectionContainer > div:nth-child(5)"));
        a.v='saveAnswerSubmitId';
        a.q=a.children[1].children[1].children[0].innerText
        a.o=findhref(a,'input');
        var chooses=[];
        var info2={};
        a.o.forEach(e=>{
            if(e.id!=a.v){chooses.push(e)}
        })
        a.f=0;
        var op=chooses[Math.floor(Math.random()*chooses.length)];
        chooses.forEach(e=>{
            if(e.parentElement.parentElement.innerText.split('\n').pop()==localStorage[a.q].startsWith(' ')?localStorage[a.q].replace(' ',''):localStorage[a.q]){a.f=1;op=e;};
        })
        console.log(a.f?"Found":"not Found")
        a.f&&(()=>{
            if(!op.checked)click(op);;
            console.log(a.q,localStorage[a.q])
            setTimeout(()=>{
                try{localStorage['yes']=0;localStorage['yes']=1;getElementByAttribute('Next Question','title')[1].click();}catch(err){
                    localStorage['yes']=2;
                    console.log('submitting');
                    getElementByAttribute('top_Save and Submit','name')[0].click();
                }
            },500)
        })()
    }
    if(localStorage.yes==2){
        try{click(findhref(document.body).pop());localStorage.yes=3}catch(err){}
    }
    if(localStorage.yes==3){
        if((document.querySelector("#bbNG\\.receiptTag\\.content > div > table > tbody > tr:nth-child(7) > td").innerText.split(' out of ')[0]*1)!=(document.querySelector("#bbNG\\.receiptTag\\.content > div > table > tbody > tr:nth-child(7) > td").innerText.split(' out of ')[1].split(' ')[0]*1)){
            console.log('logging')
            for(let i=0;i<getElementByAttribute('incorrectAnswerFlag','class').length;i++){
                var a=getElementByAttribute('incorrectAnswerFlag','class')[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].innerText.split('\n').pop()
                var b=getElementByAttribute('correctAnswerFlag','class',getElementByAttribute('incorrectAnswerFlag','class')[i].parentNode.parentNode.parentNode.parentNode).parentNode.innerText
                localStorage[a]=b
                console.log(a,b)
            };
            localStorage.yes=1;
            if(confirm('restart?')){location.href=localStorage.link;}
        }else{location.removeItem('link');localStorage.yes=5;};
    }
},1000)
if(location.href.includes('docs.google.com')){return}
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
window.getBase64Image=getBase64Image;
window.DLAmc=function(num=eval(prompt('how many pages of mods are there'))){var ct=document.title

    var a=[];
    for(let i=1;i<num;i++){
        getWin(['w1','win11']).then(b=>{
            document.title='Page:'+i+' Mods'+localStorage.D.split('\n').length;
            window[b]=open(`https://www.curseforge.com/minecraft/mc-mods/world-gen?page=${i}#D=1&t="mc"`,'D',`width:${window.innerWidth/2},height=${window.innerHeight/2}`);
            var rr = setInterval(e => {
                document.title=ct;
                if (window[b].closed) {window[b] = null; clearInterval(rr); console.log(b, 'isclosed') }
            }, 300);
        })
    }
}
function Dmc(sd=20) {
    var list=[]
    for(let i=0;i<sd;i++){
        list.push(['w'+i,'win'+i])
    }
    var d = 0;
    var c = getElementByAttribute('button button--hollow', 'class').length
    getElementByAttribute('button button--hollow', 'class').forEach(a => {
        getWin(list).then(b => {
            console.log('opening', findhref(a)[0].href.split('/downl')[0].split('/').pop())
            window[b] = open(findhref(a)[0].href.split('/download').join("#F=mcD&plus=[localStorage,'D']"), findhref(a)[0].href.split('/downl')[0].split('/').pop(), `width:${window.innerWidth / 2},height=${window.innerHeight / 2}`)
            var rr = setInterval(e => {
                if (window[b].closed) { d++; if (d == c) {setTimeout(close,1000)}; window[b] = null; clearInterval(rr); console.log(b, 'isclosed') }
            }, 300);
        })
    })
}
function ch3(i){
    if(!i){
        return false
    }else{
        if(!i.closed){
            return true
        }else{
            return false
        }
    }
}
async function getWin(list=[
    ['w1','win1'],
    ['w2','win2'],
    ['w3','win3'],
    ['w4','win4']
]){
    var e=false;
    var f
    await new Promise((g,h)=>{
        var i=setInterval(j=>{
            list.forEach(k=>{
                this[k[0]]=ch3(window[k[1]])
                if(!window[k[1]]&&!e){e=true;f=k[1];console.log(k)}
            })
            if(f){
                g(f);
                clearInterval(i)
            }
        },500);
    });
    return f
};
window.getWin=getWin
window.getElementByAttribute=function getElementByAttribute(label,item='aria-label',doc=document.body){
    var res=[];
    function part2(e){
        if(e.getAttribute(item)==label){
            res.push(e);
        }else{
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }
    };
    part2(doc);
    return res.length==1?res[0]:res||false;
};
findhref=function (a,b){
    var res=[];

    function part2(e){
        if(e.tagName.toLowerCase()==(b||'a')){
            res.push(e);
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }else{
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }
    };
    part2(a);
    return res
}
var Base64 = {
// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
        Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = Base64._keyStr.indexOf(input.charAt(i++));
        enc2 = Base64._keyStr.indexOf(input.charAt(i++));
        enc3 = Base64._keyStr.indexOf(input.charAt(i++));
        enc4 = Base64._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }
    return string;
}
}
window.Base64=Base64
window.pfplist=[];
if(localStorage.Theme){var setup}
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function ready(){
    var i=0;
    var reaDY=
        setInterval(function(){
            (i<pfplist.length&&(win1.document.write(pfplist[i]),i++),!(i<pfplist.length)&&(clearInterval(reaDY),win1.focus(),pfplist=[]))
        },100)
    }
add=function(e){pfplist.push(e)}
function checkWin(myWindow=this.win1) {return !myWindow?false:myWindow.closed?false:true}
function startwin(){
    try{if(!checkWin(this.win1))(this.win1=open('','PROFILES',`width=500,height=500`),
                            setTimeout(function(){
    win1.resizeTo(305,'1000')
        win1.document.write(`
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
    },500));
    else (win1=open('','PROFILES',`width=256,height=305`),win1.document.body.innerHTML='')}catch(err){}
}
function addprofile(name,url){win1.document.write(`<div id='Profile'><img src="${url}" alt="${name}" title="${name}"><br><br></div>`)}
window.win1=null;
function Gi(types=[],all=1){
    startwin();
    setTimeout(()=>{
        (win1.resizeTo(305,'1000'),
        win1.document.head.innerHTML=`
<style>
    body {
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    background-color: rgb(54, 57, 63);
overflow-x: hidden;
    }
    img {
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

</style>`);
    let def=['png','jpg','gif'];all&&(def.forEach(e=>{types.push(e)}))
    var item=document.getElementsByTagName('*');item.forEach=[].forEach;item.forEach(e=>{
        if(e.src){
            var type=e.src.split('.').pop().split('?')[0].split('/')[0];
            var con=0;
            types.forEach(e2=>{if(type==e2)con=1})
            if(con){
                console.log('was',type);
                var wl
                var name=e.src.split('.')[e.src.split('.').length-2].split('/').pop();
                var url=e.src
                var Base=url.includes('data:image')?Base64.decode(url):null
                var info={name:name,type:type,split:e.src.split('/').pop().split('.'),Base:Base}
                if(document.domain.includes('wallpaper')){wl=1;if(!type&&w1){return}if(typeof eval(name)!='number'&&w1){return}}
                console.log(info)
                add((wl?`<a download="${name}.${type}" href="${url}" title="${name}">
<img alt="${name}.${type}" src="${url}" >
</a> width=100%`:`<a download="${name}.${type}" href="${url}" title="${name}">
<img alt="${name}.${type}" src="${url}" >
</a>`))
            }else console.log('not',type)
        }
    })
        ready();
    },500)
}
window.Gi=Gi
window.Getimg=function(otherdtags){
    startwin();
   setTimeout(e=>{
    (win1.resizeTo(305,'1000'),
        win1.document.head.innerHTML=`
<style>
    body {
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    background-color: rgb(54, 57, 63);
overflow-x: hidden;
    }
    img {
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

</style>`);
       var img=document.getElementsByTagName('img')
       img.forEach=[].forEach
       img.forEach(e=>{
           try{
               var type=e.src.split('.').pop().split('?')[0].split('/')[0];
               var wl
               var name=e.src.split('.')[e.src.split('.').length-2].split('/').pop();
               var url=e.src
               var Base=url.includes('data:image')?Base64.decode(url):null
               var info={name:name,type:type,split:e.src.split('/').pop().split('.'),Base:Base}
               if(document.domain.includes('wallpaper')){wl=1;if(!type&&w1){return}if(typeof eval(name)!='number'&&w1){return}}
               console.log(info)
               add((wl?`<a download="${name}.${type}" href="${url}" title="${name}">
<img alt="${name}.${type}" src="${url}" >
</a> width=100%`:`<a download="${name}.${type}" href="${url}" title="${name}">
<img alt="${name}.${type}" src="${url}" >
</a>`))
           }catch(err){console.warn({src:e.src,e:e})}
       })
       window.onunload=function(){win1.close();}
       ready();
   },500)
}
if(location.hash&&location.href.includes('https://ads.google.com/home/')){
    var domain=decodeURIComponent(location.hash).split('#')[3]
    var a=localStorage.getItem('domains')
    localStorage.getItem('domains')==null?a='':a;
    a=a.split('{mysep}')
    a.push(domain)
    a.join('{mysep}');
    localStorage['domains']=a;
    window.close();
}
var d=window.location.hostname
console.log(d);
window.addAd=function(){document.domain!="www.google.com"&&(window.open('https://ads.google.com/home/#'+document.domain));}
if(window.location.hash.includes('ss'))window.close();
var path=location.pathname.split('/');
window.getElementByAttribute=function getElementByAttribute(label,item='aria-label',doc=document.body){
    var res=[];
    function part2(e){
        if(!label){
            if(e.getAttribute(item)!=null){
                if(e.getAttribute(item).length)
                res.push(e);
            }
            else
                if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }
        else
            if(e.getAttribute(item)==label){
            res.push(e);
        }else{
            if(e.children.length){
                e=e.children;
                e.forEach=[].forEach;
                e.forEach(e2=>{
                    part2(e2);
                })
            }
        }
    };
    part2(doc);
    return res.length==1?res[0]:res||false;
}
window.cite=function(){
    window.nwin=open(`https://www.easybib.com/mla8/website-citation/search?q=${location.href}`,'cite',`width=500,height=500`);
    window.onmessage=function(e){
        console.warn(e)
        if(e.data.progress){console.log(e.data.progress)}
        if(e.data.msg){
            window.nwin.close();
            window.nwin=undefined
            console.log('u may close this window')
        }
    }
}
var data='data-test'
if(location.href.includes('easybib')){
    (
        a=setInterval(e=>{
        try{
            getElementByAttribute('cite-button',data).click();
            document.title='Citting'
            window.opener.postMessage({msg:0,progress:document.title})
            clearInterval(a);
        }catch(err){};
    },100),
        b=setInterval(e=>{
                try{
                    getElementByAttribute('submit-eval',data).click();
                    document.title='evaling'
                    window.opener.postMessage({msg:0,progress:document.title})
                    clearInterval(b);
                    clearInterval(a);
                }catch(err){}
            },100),
        c=setInterval(e=>{
                        try{
                            getElementByAttribute('form-next-button',data).click();
                            document.title='forimg text'
                            localStorage.setItem('Done',1);
                            window.Done=1;
                            window.opener.postMessage({msg:1,progress:document.title})
                            clearInterval(a);
                            clearInterval(b);
                            clearInterval(c);
                        }catch(err){}
                    },100),
        d=setInterval(e=>{
            try{
            location.href.includes('easybib')&&location.pathname.split('/')[1]=='project'&&localStorage.Done==1&&([a,b,c,d].forEach(clearInterval),setTimeout(e=>{window.close()},1000));
                document.title='closing'
        }catch(err){}
        },100)
    )
}
if(location.hash.includes('F')){
    window.mcD=function mcD(){
        var a=document.getElementsByTagName('header')[0].innerText.split('\n');
        return {name:a[0],update:a[3],ver:a[4],Download:document.getElementsByClassName('button button--hollow')[0].href,desc:(function(){try{return document.getElementsByClassName('flex flex-col')[7].children[2].children[0].children[0].children[0].children[1].innerText}catch(err){return "no desc"}})()}
    }
    decodeURI(location.hash.split('#')[1]).split('&').forEach(eval);
    !plus[0][plus[1]]?plus[0][plus[1]]='':null;
    !plus[0][plus[1]].includes(JSON.stringify(F()))?plus[0][plus[1]]+=JSON.stringify(F())+'\n':(console.log('already in'));
    close();
}
if(location.hash.includes('D')){
    decodeURI(location.hash.split('#')[1]).split('&').forEach(eval);
    if(D){Dmc()}
}