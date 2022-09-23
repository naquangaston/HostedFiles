// ==UserScript==
// @name         2020-2021 Music player for io games & Dsicrdo profile ripper& youtube download free
// @namespace    http://tampermonkey.net/
// @version      0.46
// @description  Check change log
// @author       You
// @match        *://arras.io/*
// @match        *://*.moomoo.io/*
// @match        *://moomoo.io/*
// @match        *://agar.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://splix.io/*
// @match        *://paper-io.com/*
// @match        *://moomoo.io/*
// @match        *://starblast.io/*
// @match        *://narwhale.io/*
// @match        *://surviv.io/*
// @match        *://www.youtube.com/*
// @match        *://www.factsherald.com/*
// @match        *://www.y2mate.com/*
// @match        *://www.gearedtoyou.com/*
// @match        *://lp.powerapp.download/*
// @match        *://lp.searchmulty.com/*
// @match        https://www.y2mate.com/en19
// @match        https://www.y2mate.com/en49
// @match        *://*.lp.powerapp.download/*
// @match        *://*.fiefionfortes.casa/*
// @match        *://*.inservinea.com/*
// @match        *://*.protection.byguardio.com/*
// @match        *://*.tortsv.gq/*
// @match        *://*.takefr.cf/*
// @match        *://*.toomiplay.com/*
// @match        *://*.deej.almeusciu.site/*
// @match        *://*.upgradecircle.findgreatsourceforupgrade.info/*
// @match        *://*.afew.zoyufo.pw/*
// @match        *://*.upgradebestmaintenancetheclicks.icu/*
// @match        *://*.s3.amazonaws.com/*
// @match        *://*.updatemostrenewedapplication.best/*
// @match        *://*.get.anyconvertersearch.com/*
// @match        *://*.digitaltrends.com/*
// @match        *://*.wildbearads.com/*/
// @match         *://install.globalpdfconvertersearch.com/*
// @match        *://ncs.io/*
// @match        *://*/*
// @match        *://discord.com/*
// @includes        https://greasyfork.org/
// @match       *.greasyfork.org/*
// @grant        none
// ==/UserScript==
//removed ad redirects
`
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require       http://code.jquery.com/jquery-1.11.0.min.js
`;
if(origin=='https://docs.google.com')return;
window.ta=document.getElementsByTagName('*')
var allEqual = (arr,a) => arr.every( v => {return v === a} );
var allEqual2 = (arr) => arr.every( v => v === arr[0] );
window.ta._list=function(id,classname,tag){
    var res=[];
    var put={};
    var array=[];
    todo=document.getElementsByTagName(tag);
    todo.forEach=[].forEach;
    todo.forEach(e=>{
        array=[];
        if(typeof id=='string'){
            put.i=id==e.id;
        }else{put.i=true}
        if(typeof classname=='string'){
            put.c=classname==e.className;
        }else{put.c=true}
        array=[put.c,put.i];
        array=allEqual(array,true);
        if(array){res.push(e);}
    })
    return res;
};
clearInterval
function checkAd(urls){
    var tr=false;
    var item=[];
    urls.forEach(e=>{
        /* if (e=='tpc.googlesyndication.com'){document.write('');console.log('ad loading and hackd')}
        else*/
        if(document.domain.includes(e)){tr=true;item.push(e)}
    })
    return [tr,item]
};
findhref=function (a,b){
    var res=[];

    function part2(e){
        if(e.tagName.toLowerCase()==(b||'a')){
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
    part2(a);
    return res
}
function toggleA(){
    var list=['download','download2','s3','s4','stpb']
    getElementByAttribute('Account profile photo that opens list of alternate accounts').click();
    var a=setInterval(e=>{
        var _items=sections[1].children[1].children.items.children
        _items.forEach(e=>{
            e.innerText.startsWith('Appearance')&&(e.click())
        })
        clearInterval(a);
    },500)
    var b=setInterval(e=>{
        !!sections[2].children[0].children.items.children[2].children[0].children[0].children['content-icon'].children[1].children[0]?(list.forEach(e=>{window[e].style.color='black'}),console.log('Color:white'),sections[2].children[0].children.items.children[3].click()):(list.forEach(e=>{window[e].style.color='white'}),console.log('Color:dark'),sections[2].children[0].children.items.children[2].click());
        clearInterval(b);
    },200)
    }
window.toggleA=toggleA
function Getlobj(a,b=location.href){console.log('Got',a,':',(b).split(a).pop().split('=')[1].split('&')[0]);return (b).split(a).pop().split('=')[1].split('&')[0]};
window.Getlobj=Getlobj
function difinurl(a=window.location.href,b=window.oldurl,c){if(a.includes(c)&&b.includes(c))return false;else return true}
var badUrls=['www.get-express-vpn.online',
             'wildbearads.com',
             'www.propapps.com',
             'www.factsherald.com',
             'www.gearedtoyou.com',
             'lp.searchmulty.com',
             'lp.powerapp.download',
             'toomiplay.com',
             'fiefionfortes.casa',
             'inservinea.com',
             'protection.byguardio.com',
             'tortsv.gq',
             'takefr.cf',
             'digitaltrends.com',
             'get.anyconvertersearch.com',
             'updatemostrenewedapplication.best',
             's3.amazonaws.com',
             'upgradebestmaintenancetheclicks.icu',
             'afew.zoyufo.pw',
             'upgradecircle.findgreatsourceforupgrade.info',
             'deej.almeusciu.site',
             'tpc.googlesyndication.com']
window.modon=!!1;
window.keys=Object.keys
window.keys(this).forEach=[].forEach
findid=function (id,a=document.body){
    var res=[];
    var b=id;
    function part2(e){try{
        if(e.id.includes(b)){
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
        }}catch(err){}
                     };
    part2(a);
    return res
}
function like(){
    try{getElementByAttribute('M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z','d')[5].parentNode.parentNode.parentNode.click();}
    catch(err){}finally{(!getElementByAttribute('M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z','d').length?getElementByAttribute('M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z','d'):getElementByAttribute('M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z','d')[0]).parentNode.parentNode.parentNode.click()
                       }
    setTimeout(e=>{
        btext.includes('Liked')&&!btext.includes('Add')&&like();
    },1000)
}
function removeC(){get(w+'mp3','0');get(w+'mp4','0')}
function addC(type){if(type!='mp3'&&type!='mp4'){return console.warn('Please add a type','like','mp3','or','mp4');}get(w+type,'1')}
function autoD(){get(w+'mp3')=='1'&&eval(get('autoD'))&&(window.download.click());get(w+'mp4')=='1'&&eval(get('autoD'))&&(download2.onclick(0,1));console.log(get('autoD'),get(w+'mp3')?'audtodownloading for mp3':false,get(w+'mp4')?'auto downloading for mp4':false)}
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
}
window.get_aria_label=function (label,doc=document.body){
    var res=[];
    function part2(e){
        if(e.getAttribute('aria-label')==label){
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
    return res[0]||false;
}
setElement = function(url) {
    return (String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)&&String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)[7].length==11)? String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)[7]: false;
};
findhref2=function (a,b){
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
function playlistD(type,howmany,fromi=false,fordiscord=false,hmpd=10,setit=0){
    var loc=location.href
    var oi=[];
    var stop=false;
[...(secondary.length?secondary[0]:secondary).children[0].children.playlist.children[0].children.items.children].forEach(e=>{
        if(stop)return;
        try{var info={
            index:Getlobj('dex',findhref2(e)[0].href),
            id:setElement(findhref2(e)),
            length:findhref2(e,'span')[2].innerText,
            tittle:findhref2(e,'span')[4].innerText,
            e:findhref2(e,'div')[0]
        }
        oi.push(info);
            console.log(info)
            if(howmany){
                if(info.index==(fromi?Getlobj('index')*1:0)+howmany)stop=true;
                if(stop)console.log('stoping');
            }
           }catch(err){}
    })
    setit?oi[oi.length-1].e.click():null;
    oi.forEach(a=>{
        var vid=a.id
        var tittle=a.tittle
        var list=[]
        for(let i=0;i<hmpd;i++){
            list.push(['w'+i,'win'+i])
        }
        getWin(
            list
        ).then(b=>{
            console.log('download',tittle,vid,a.index)
            window[b]=open('https://yt1s.com/en25/#id="'+vid+'"{mysep}type="'+type+'"{mysep}name=`'+tittle+'`{mysep}discord='+!!fordiscord,b,`width:${window.innerWidth/2},height=${window.innerHeight/2}` )
            window.addEventListener('unload',function(e){window[b].close()})
            var rr=setInterval(e=>{
                if(window[b].closed){window[b]=null;clearInterval(rr);console.log(b,'isclosed')}
            },300);
        })
    })
}
window.playlistD1=playlistD
a=null,b=null,c=null,d=null,e=null,f=null,g=null,h=null,i=null,j=null,k=null,l=null,m=null,n=null,o=null,p=null,q=null,r=null,s=null,u=null,v=null,w=null,x=null,y=null,z=null,aa=null,bb=null,cc=null,dd=null,ee=true,gg=true,hh=null,jj=null,kk=null,ll=null,mm=null,oo=false,pp=false,qq=null,rr=null,ss=null,tt=true,uu=null,vv=null,ww=null,xx=null,zz=null,a1=null,b1=null,ii=0,kko=null;
setInterval(e=>{
    track=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,u,v,w,x,y,z,aa,bb,cc,dd,ee,gg,hh,jj,kk,ll,mm,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,zz,a1,b1]
},500)
window.win1=null
window.win2=null
window.win3=null
window.win4=null
hh=function(item,val){localStorage.setItem(item,val)};
jj=function(item){return localStorage.getItem(item)};
dd=function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique);};
function sleep(ms){return new Promise((r,j)=>{setTimeout(r,ms)})}
function checkWin(myWindow=this.win1) {return !myWindow?false:myWindow.closed?false:true}
function startwin(win,name=null,reopen,c){
    name==null&&(name=win);
    console.log('attemp the close',win)
    try{if(reopen)window[win].close()}catch
        (err){window[win]=null;console.warn('attemp the close',win,'Fail')}
    try{if(!checkWin(window[win]))(window[win]=open(c,'PROFILES',`width=256,height=305`),console.log('Making',win,'in',name),
                                   setTimeout(function(){
        console.log(window[win])
        console.log('writing defalt styles','to',win,name)
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
    },500));
        else (window[name]=open('','PROFILES',`width=256,height=305`),window[name].window.document.body.innerHTML='',
              window[name].window.document.head.innerHTML='')}catch(err){}
    window[name]=window[win];
    console.log('complete win')
    return window[name];
}
window.startwin=startwin
window.checkWin=checkWin
function Mute(){getElementByAttribute('Mute (m)').click()}
function Unmute(){getElementByAttribute('Unmute (m)').click()}
function Setupex_window(){
    var keys=Object.keys
    {
        (async ()=>{
            await sleep(200);
            startwin('win2','nwin',0,'https://www.youtube.com/#mywindow');
            await sleep(1000);
            if(nwin.closed){Setupex_window();return}
            nwin.post=nwin.opener.postMessage
            if(!window.location.href.includes('watch')&&!window.location.href.includes('embed')){try{nwin.close()}catch(err){}return}
            nwin.document.head.innerHTML=`<style>
body {
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
background-color: rgb(54, 57, 63);
overflow-x: hidden;
}
img{
color:white;
border: 2px solid red;
border-radius: 8px;
border-style: solid;
border-width: medium;
}
button {
border: 2px solid red;
border-radius: 8px;
border-style: solid;
border-width: medium;
}
input,span{
border-width:0px;
border:none;
color:white;
background: rgba(0, 0, 0, 0)
}
body::-webkit-scrollbar {
display: none;
}
.channelName{
color:blue;
}
.Status{
color:blue
}

</style>`
            keys(video_data).forEach(async e=>{
                console.log(`<br><span class="${e}">${e}:${video_data[e]}</span><br>`,e)
                nwin.document.body.innerHTML+=`<br><span class="${e}">${e}:${video_data[e]}</span><br>`
            })
            nwin.document.body.innerHTML+='<span id="LBDS">Loading buttons</span>'
            await sleep(500);
            nwin.document.getElementById('LBDS').remove();
            nwin.document.body.innerHTML+=`
<button id="Skip1">Previous video</button><button id="Skip2">Next video</button>
<button id="amp3">Auto download channels video as mp3</button><br>
<button id="amp4">Auto download channels video as mp4</button><br>
<button id="ar">reset auto mp3&mp4 for <span class="Status">${video_data['video uploader']}</span></button>
<button id="a50">auto 50x playlist</button>
<button id="askipad">auto skip to next video after downloading mp4:${eval(get('askip4'))}</button>
<button id="askipad2">auto skip to next video after downloading mp3:${eval(get('askip3'))}</button>
<br>
<button id='sub_button'>Show support</button>
<button id="Se">search</button><br>
<input id="ytsearch" placeholder="search"><br>
<span>This search bar is wip but work nearly as intended</span>
<select id="searchselect"></select><br>
<input id="result">
<br><br>
<div id="this" style="-ms-overflow-style: none;  /* IE and Edge */scrollbar-width: none;  /* Firefox */background-color: rgb(54, 57, 63);overflow-x: hidden;">
<span class"Things" style="border-width:0px;border:none;color:white;background: rgba(0, 0, 0, 0);">
This mod includes mp4 and mp3 download, auto playlist saving, video details for dev uses
will be adding playlist saving by video tags
if u have any suggestions dm on
</span><a style="color:blue;" onclick="open('http://discord.com/')">discord</a>
<div>
<span id="" style="color:red;border: 2px solid red;border-radius: 8px;border-style: solid;border-width: medium;background:blue;">
Gaston
</span>
<span style="color:blue;border: 2px solid blue;border-radius: 8px;border-style: solid;border-width: medium;background:red;">
#1799
</span>
</div>
<br>
</div>
`
            function floc(obj,key){var res=[];keys(obj).forEach(e=>{if(e.toLowerCase().includes(key)||e.includes(key)||obj[e].toString().includes(key)||obj[e].toString().toLowerCase().includes(key))res.push(e);});return res}
            window.floc=floc;var mp3downloads=floc(localStorage,'mp3');var mp4downloads=floc(localStorage,'mp4');window.saved={};saved.mp3=mp3downloads;saved.mp4=mp4downloads;saved.search=function(key){return floc(localStorage,key)}
            await sleep(500);
            var waiting=false
            nwin.Skip2.onclick=Vskip
            nwin.Skip1.onclick=Vprev
            nwin.document.getElementById('a50').onclick=(async e=>{
                get('a50',!eval(get('a50')))
                nwin.document.getElementById('a50').innerText='Auto 50 Playlist:'+get('a50')
            });
            nwin.document.getElementById('Se').onclick=(async e=>{
                nwin.console.log('searching')
                nwin.document.getElementById('searchselect').innerHTML=''
                saved.search(nwin.document.getElementById('ytsearch').value).forEach(e=>{
                    var option=document.createElement('option')
                    option.value=localStorage.getItem(e);
                    option.innerText=e.split('\n').join('').split('  ').join('');
                    console.log(option)
                    nwin.document.getElementById('searchselect').append(option)
                })
            });
            window.waiting=false;
            nwin.document.getElementById('sub_button').onclick=(async()=>{
                getWin().then(b=>{
                    window[b]=open("https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?view_as=subscriber#subscribe",'subing',`width=256,height=305`)
                    d=setInterval(c=>{if(window[b].closed){window[b]=null;clearInterval(d)}})
                })
            })
            nwin.document.getElementById('ar').onclick=(async e=>{
                if(!waiting){waitting=true
                             var oldt=nwin.document.getElementById('ar').innerHTML
                             nwin.document.getElementById('ar').innerText='Removed from auto mp3 and mp4';
                             removeC();
                             await sleep(500)
                             waiting=false
                             nwin.document.getElementById('ar').innerHTML=oldt
                            }else return
            });
            nwin.document.getElementById('amp4').onclick=(async e=>{
                addC('mp4')
                var target=e.target
                target.html=target.innerHTML
                target.innerHTML='Added for auto mp4 download'
                await sleep(500);
                target.innerHTML='Auto download channels video as mp4'
            });
            nwin.document.getElementById('askipad').onclick=function(e){
                get('askip4',!eval(get('askip4')))
                nwin.document.getElementById('askipad').innerText=`auto skip to next video after downloading mp4:${eval(get('askip4'))}`
            }
            nwin.document.getElementById('askipad2').onclick=function(e){
                get('askip3',!eval(get('askip3')))
                nwin.document.getElementById('askipad2').innerText=`auto skip to next video after downloading mp3:${eval(get('askip3'))}`
            }
            nwin.document.getElementById('searchselect').onchange=function(e){console.log(nwin.document.getElementById('result').value=e.target.options[e.target.selectedIndex].value)}
            nwin.document.getElementById('amp3').onclick=(async e=>{
                addC('mp3');
                var target=e.target
                target.html=target.innerHTML
                target.innerHTML='Added for auto mp3 download'
                await sleep(500);
                target.innerHTML='Auto download channels video as mp3'
            });
            window.onunload=function(e){console.log('Closing win window is closing');nwin.close();}
            window.id2=function(id){return nwin.document.getElementById(id)}
            try{Play();}catch(err){console.warn('Video already playing',err)}
            autoD()
        })()
    }
}
window.Setupex_window=Setupex_window
window.pld=function pld(){
    document.body.children.forEach=[].forEach
    var findhref=function (a,b){
        var res=[];

        function part2(e){
            if(e.tagName.toLowerCase()==(b||'a')){
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
        part2(a);
        return res
    }
    document.getElementsByClassName('style-scope ytd-playlist-panel-renderer')[0].children[1].children.forEach=[].forEach
    document.getElementsByClassName('style-scope ytd-playlist-panel-renderer')[0].children[1].children.forEach(e=>{
        console.log(findhref(e)[0].href)
    })
}
function Play(){try{getElementByAttribute('Play (k)')[1].click()}catch(err){getElementByAttribute('Play (k)').click();}}
function Pause(){try{getElementByAttribute('Pause (k)')[1].click()}catch(err){getElementByAttribute('Pause (k)').click()}}
function setupimg(){
    var img=document.createElement('img');
    img.src='https://freepngimg.com/thumb/mouse_cursor_click/8-2-click-png-clipart-thumb.png';
    img.id='img01';
    document.body.append(img);
    img=img01;
    var b;
    window.ofx='';
    window.ofy=''
    var imgi=setInterval(e=>{
        try{
            img.style.top=ofy;
            img.style.left=ofx;
        }catch(err){}
    },10)
    function st(a,r){var k=Object.keys(r);k.forEach(e=>{a.style[e]=r[e];});};
    window.onclick=function(e){
        window.lt=e.target
        e.target
        window.lt.scrollIntoViewIfNeeded()
    }
    setInterval(e=>{
        try{var info=lt.getBoundingClientRect()
        window.ofx=info.x+'px';
            window.ofy=info.y+'px';}catch(err){}
    },50)
    var r={'pointer-events:':'none','transition':'top 0.2s,left 0.2s','height':'50px','position':'fixed', /*Sit on top of the page content */'top': 0,'left': 0, 'right': 0,'bottom': 0,'background-color': 'rgba(0,0,0,0)', /* Black background with opacity*/'z-index': 5 /* Specify a stack order in case you're using a different order for other elements*/};
    st(img01,r);
    img01.style.pointerEvents='none'
}
var  didmute=0
async function Start(){
    if(checkAd(badUrls)[0]){/*alert('matches\n'+checkAd(badUrls)[1].join(' '));*/window.close();}
    await sleep(1000)
    if(window.location.href.includes('youtube')&&!window.location.href.includes('yt1s')){
        setupimg();
        setInterval(e=>{
            document.getElementsByClassName("ytp-ad-button-icon")[0]&&!didmute&&(console.log('muted ad'),didmute=1,Mute());
            !document.getElementsByClassName("ytp-ad-button-icon")[0]&&didmute&&(console.log('unmuted video'),Unmute(),didmute=0);
            if(document.getElementsByClassName('ytp-ad-skip-button ytp-button').length==1){document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();;console.log('Skipped ad')}
            document.getElementsByClassName('ytp-ad-overlay-close-button')[2]&&(document.getElementsByClassName('ytp-ad-overlay-close-button')[2].click(),console.log('Close ad card'))
            // ad skipping ^^
        },10)
        ss=eval(jj('download'))
        uu=jj('yts')
        if(ss==null||ss==undefined){
            hh('download','false');
            ss=eval(jj('download'));
        }
        kk=null;id=function(id){return document.getElementById(id)}
        b1 =document.URL;
        if(location.hash=='#subscribe'){
            if(ta._list(undefined,undefined,'paper-button')[1].innerText.includes('BED'))
                setTimeout(e=>{window.close()},500)
            else {
                ta._list(undefined,undefined,'paper-button')[1].click();
                setTimeout(e=>{ta._list(undefined,'style-scope ytd-menu-service-item-renderer','paper-item')[0].click()},300)
            }
            setTimeout(e=>{window.close()},1000)
        }
        function hscontrolls(){
            var is=[ww.style.display=='',vv.style.display=='']
            if(is[0]){ww.style.display='block'}
            if(is[1]){vv.style.display='block'};
            toggled(ww);
            toggled(vv);
        };
        function download(a,b,c){
            fix2('yts','')
            stuff=eval('container[3]').innerText.split('\n');
            this.tofix=[['yts',''],['download','false'],['mute','false'],['next',false]]
            title=stuff[0]
            type=stuff[1]
            views=stuff[2]
            likes={
                likes:stuff[3]*1,
                dislikes:stuff[4]*1,
                total:(stuff[3]*1)+(stuff[4]*1),};
            fix2(stuff[0],false);
            go2=eval(jj(stuff[0]));
            var newname=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            if(window.opener){
                eval(`${newname}=open2(a,b,c);
${newname}.onload=function(e){console.log('done');setTimeout(function(){if(window.opener){window.close()};},1000)}
window.close();
`);
                hh(stuff[0],true)
            }
            else if(!go){
                try{open2(a,b,c)}catch(err){hh(stuff[0],true)};
            }
        }
        topen=[];

        function check2(){
            try{index=eval(location.href.split('&')[2])}catch(err){}
            var it=[];
            if(window.location.href.includes('playlist')){
                titles=_ta._list('video-title',undefined,'span');
                links=_ta._list(undefined,'yt-simple-endpoint style-scope ytd-playlist-video-renderer','a');
                for(let i=0;i<link.length;i++){
                    cand=eval(localStorage.getItem(titles[i].innerText));
                    console.log(cand)
                };
                for(let i=0;i<links.length;i++){
                    cand=eval(localStorage.getItem(titles[i].innerText));
                    cand2=eval(localStorage.getItem(links[i].innerText));
                    if(!cand||!cand2){
                        localStorage.setItem(titles[i].innerText,true);
                        topen.push({
                            URL:links[i].href.split('&')[0]
                        })
                    }
                }
                looping=null;
                clearInterval(looping);
                looping=setInterval(opening,1000);;
                if(ta._list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]=='MP3'||ta._list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]=='MP4'&&ta._list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[0]=='DOWNLOAD'){}else{clearInterval(looping)}
            };'yt1s.com/en25/'
            if(window.opener){n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o);download('https://yt1s.com/en25/#id="'+vid+'"&type=mp3',Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`)};
        }
        function opening(){
            type=ta._list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]
            if(ii<topen.length){
                if (!kko) {
                    "'myWindow' has never been opened!";
                    kko=open('https://yt1s.com/en25/#isopen=true&url="'+topen[ii].URL+'"&type="'+type.toLowerCase(),type+'"',`width:${window.innerWidth},height=${window.innerHeight}`);
                    localStorage.setItem(topen[ii].URL,true);
                    ii++
                }
                else {
                    if (kko.closed) {
                        kk=open('https://yt1s.com/en25/#isopen=true&url="'+topen[ii].URL+'"&type='+type.toLowerCase(),type,`width:${window.innerWidth},height=${window.innerHeight}`);
                        localStorage.setItem(topen[ii].URL,true);
                        ii++
                        "'myWindow' has been closed!";
                    } else {
                        "'myWindow' has not been closed!";
                        console.log('win1')
                    }
                }
            };
        };
        function mute(){document.getElementsByClassName('ytp-mute-button ytp-button')[0].click()};
        mute.desc='Mutes current video';
        function saveyt(){cc=ta._list('container','style-scope ytd-channel-name','div')[0].innerText;bb=localStorage.getItem('yts').split(',');bb.push(cc);bb=dd(bb);localStorage.setItem('yts',bb)};
        saveyt.desc=''
        function skipV(){try{getElementByAttribute('Next (SHIFT+n)')[1].click();getElementByAttribute('Next (SHIFT+n)')[0].click()}catch(err){}}
        function prevV(){try{getElementByAttribute('Previous (SHIFT+p)')[1].click();getElementByAttribute('Previous (SHIFT+p)')[0].click()}catch(err){}}
        window.skipV=skipV
        window.prevV=prevV
        function deletelist(){localStorage.setItem('yts','')};
        function toggle(){var item=eval(jj('download'));hh('download',!item);console.log()};
        function pause(){tp=document.getElementsByClassName('ytp-play-button ytp-button ytp-play-button-playlist')[0]?document.getElementsByClassName('ytp-play-button ytp-button ytp-play-button-playlist')[0].click():document.getElementsByClassName('ytp-play-button ytp-button')[0].click()};
        function next(){document.getElementsByClassName('ytp-next-button ytp-button')[0].click();};
        function prev(){document.getElementsByClassName('ytp-prev-button ytp-button')[0].click();};
        function full(){document.getElementsByClassName('ytp-fullscreen-button ytp-button')[0].click();};
        fullscreen=full;
        function toggled(e){var is=[e.style.display=='none',e.style.display=='block'];console.log(is);if(is[0]){e.style.display='block'};if(is[1]){e.style.display='none'};};
        tasks=[
            {function:hscontrolls,canAuto:false},
            {function:mute,canAuto:true},
            {function:saveyt,canAuto:true},
            {function:deletelist,canAuto:false},
            {function:toggle,canAuto:false},
            {function:pause,canAuto:true},
            {function:next,canAuto:true},
            {function:prev,canAuto:false},
            {function:fullscreen,canAuto:true},
            {function:download,cnaAuto:true},
        ]
        function ch2(i){
            console.log(!i?false:!i.closed?true:false,1)
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
        function open2(a,b,c){
            var iswinopen=false;
            var tr
            this['w1']=ch2(win1);
            this['w2']=ch2(win2);
            this['w3']=ch2(win3);
            this['w4']=ch2(win4);
            if(!this['w1']&&!iswinopen){iswinopen=true;console.log(1);tr= window.win1=open(a,b,c);}else
                if(!this['w2']&&!iswinopen){iswinopen=true;console.log(2);tr= window.win2=open(a,b,c)}else
                    if(!this['w3']&&!iswinopen){iswinopen=true;console.log(3);tr= window.win3=open(a,b,c)}else
                        if(!this['w4']&&!iswinopen){iswinopen=true;console.log(4); tr= (window.win4=open(a,b,c));}else{
                            tr=  false}
            console.log(tr)
            return tr
        };
        findhref2=function (a,b){
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
        function playlistD(type){
            if(eval(get('PD'))){
                var time=performance.now();
                var oi=[]
                playlist[0].children.container.children.items.children.forEach(e=>{
                    var info={
                        index:Getlobj('dex',findhref2(e)[0].href),
                        id:setElement(findhref2(e)),
                        length:findhref2(e,'span')[2].innerText,
                        tittle:findhref2(e,'span')[4].innerText,
                        e:e
                    }
                    oi.push(info);
                    console.log(info)
                })
                oi.forEach(a=>{
                    var vid=a.id
                    var tittle=a.tittle
                    getWin().then(b=>{
                        window.lt=a.e;a.e.scrollIntoView();
                        console.log('download',tittle,'took',performance.now()-time)
                        window[b]=open('https://yt1s.com/en25/#id="'+vid+'"{mysep}type="'+type+'"{mysep}name=`'+tittle+'`',b,`width:${window.innerWidth/2},height=${window.innerHeight/2}` );

                    })
                })
            }
        }
        window.playlistD=playlistD
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
        function open3(a,b,c){
            var iswinopen=false;
            var tr
            this['w1']=ch3(win1);
            this['w2']=ch3(win2);
            this['w3']=ch3(win3);
            this['w4']=ch3(win4);
            if(!this['w1']&&!iswinopen){iswinopen=true;console.log(1);return'win1'}else
                if(!this['w2']&&!iswinopen){iswinopen=true;console.log(2);return'win2'}else
                    if(!this['w3']&&!iswinopen){iswinopen=true;console.log(3);return'win3'}else
                        if(!this['w4']&&!iswinopen){iswinopen=true;console.log(4);return'win4';}else{
                            return false}
        };
        window.ch3=ch3;
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
        function controll(key,e,fn){
            console.log(e.code,"Key"+key,e.ctrlKey);var is=e.code=="Key"+key&&e.ctrlKey;if(fn&&is){fn(is);}else{return is}}
        dd=function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique);};
        function keys(obj,name){
            var key=Object.keys(obj);var r=`{`;var t=[];var k;key.forEach=[].forEach;key.forEach(e=>{try{k=eval(name+'.'+e);console.log([k.length,e,`${name}.${e}`,!k.toString().includes('[native code]')]);if(k.length&&!k.toString().includes('[native code]')){t.push(`${e}:${k}`)}}catch(e){}});r+=t+`}`;return r}
        hh=function(item,val){localStorage.setItem(item,val)};
        jj=function(item){return localStorage.getItem(item)};
        window.ddd=function ddd(){getC('mp3')&&eval(get('autoD'))&&document.getElementById('download').click();;getC('mp4')&&eval(get('autoD'))&&document.getElementById('download2').click();;}
        window.getC=function getC(type){var tr;console.log(get('autoD'),eval(get(e+type))?(tr=true,type,true):false);return tr;}
        window.removeC=function removeC(){get(w+'mp3','0');get(w+'mp4','0')}
        window.addC=function addC(type){if(type!='mp3'&&type!='mp4'){return console.warn('Please add a type','like','mp3','or','mp4');}get(w+type,'1')}
        function check(){
            class Element{
                constructor(tag,id,classname){
                    var e
                    if(tag){e=document.createElement(tag);}else{return}
                    e.classname=classname
                    if(id){e.id=id};
                    return e;
                }
                Delete(e=null){e.remove()}
            };
            stuff=eval('container[3]').innerText.split('\n');
            if(!localStorage.yts)localStorage.yts=''
            this.tofix=[['yts',''],['download','false'],['mute','false'],['next',false]]
            title=stuff[0]
            type=stuff[1]
            views=stuff[2]
            likes={
                likes:stuff[3],
                dislikes:stuff[4],
                total:(stuff[3]*1)+(stuff[4]*1),};
            z=function(a,b){try{a.append(b);return true}catch(x){console.log(x);return false}};
            n=document.URL.split('&');o=n[0];p=n[1];q=n[2];y=true;
            window.Pause=Pause;
            window.Play=Play;
            var s4=new Element('button','Toggle_theme');s4.style.backgroundColor='#ffffff00';s4.style.color='white';s4.innerText='Toggle Theme';s4.onclick=toggleA;
            var s3=new Element('button','auto_Download_this_channel');s3.style.backgroundColor='#ffffff00';s3.style.color='white';s3.innerText=`Auto download:${eval(get('autoD'))?true:false}`;s3.onclick=(e)=>{get('autoD',!eval(get('autoD')));s3.innerText=`Auto download:${eval(get('autoD'))?true:false}`}
            var stpb;!id('savetoplaylist')&&(stpb=new Element('button','savetoplaylist'),stpb.style.backgroundColor='#ffffff00',stpb.style.color='white',stpb.innerText='Save channel',id('meta-contents').children[0].children[0].children[1].append(stpb));!!id('savetoplaylist')&&(stpb=id('savetoplaylist'));stpb.onclick=setupsave;stpb.style.height='20px'
            var s=new Element('button','download');s.style.backgroundColor='#ffffff00';s.style.color='white';s.innerText='Download song [MP3]';s.onclick=function(){
                try{like();}catch(err){};
                try{
                    w=='NoCopyrightSounds'&&((function(){
                    var itemss=[];
                    (description[0]||description).children[0].children.forEach(e=>{
                        itemss.push([e,e.innerText])
                    })
                    var links2=[];
                    for(let i=0;i<itemss.length;i++){
                        if((itemss[i][1].includes('Free')||itemss[i][1].includes('Stream'))&&itemss[i+1][1].startsWith("http://ncs.io/")){
                            links2.push(itemss[i+1])
                        }
                    }
                    links2[0][0].click()})())
                if(w=='NoCopyrightSounds'){return}
                }catch(err){}
                n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o); var mp4open=open2('https://yt1s.com/en25/#id="'+vid+'"{mysep}type="mp3"{mysep}name=`'+video_data.title+'`',Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`);var ee=setInterval(()=>{mp4open.closed&&(clearInterval(ee),eval(get('askip3'))&&(skipV()))})};
            var s2=new Element('button','download2');s2.style.backgroundColor='#ffffff00';s2.style.color='white';s2.innerText='Download video [MP4]';s2.onclick=function(event,discord){try{like()}catch(err){};n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o); var mp4open=open2('https://yt1s.com/en25/#id="'+vid+'"{mysep}type="mp4"{mysep}name=`'+video_data.title+'`{mysep}discord='+(discord?!discord:!!eval(prompt('do u want to download for discord? 1=yes 0=no'))),Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`);Pause(); var ee=setInterval(()=>{mp4open.closed&&(clearInterval(ee),Play(),eval(get('askip4'))&&(skipV()))})};
            var r=document.getElementById('download');
            var r2=document.getElementById('download2');
            if(!r){z(masthead.children.container,s)}else{s=r;};
            if(!r2){z(masthead.children.container,s2);s2.parentNode.append(s3);s2.parentNode.append(s4);}else{s2=r2};
            window.download=s
            window.download2=s2;
            window.stpb=stpb
            window.s3=s3;window.s4=s4;
            u=localStorage.getItem('yts').split(',');
            w=ta._list('container','style-scope ytd-channel-name','div')[0].innerText
            function THIS_is_WIP(t,d){document.getElementsByClassName('ytp-chrome-controls')[0].style.display='none';document.getElementsByClassName('ytp-progress-bar-container')[0].style.display='none';}
            ww=document.getElementsByClassName('ytp-chrome-controls')[0];
            vv=document.getElementsByClassName('ytp-progress-bar-container')[0];
            ss=eval(ss);
            u.forEach(v=>{if(v==w&&y&&ss){s.click();y=false;}});
        };
        window.checkL=check;
        function fix2(item,val){
            localStorage.getItem(item)?localStorage.getItem(item):localStorage.setItem(item,val);
            return localStorage.getItem(item)
        };
        onhrefchange=function(e,b){try{listener(e);console.warn('window is changing',e,b)}catch(err){setTimeout(onhrefchange,500);console.log('trying again',err)}}
        setInterval(function(){
            a1 =document.URL;
            if(a1!==b1){
                var oldurl=b1
                window.oldurl=oldurl
                setTimeout(Pause,500)
                setTimeout(function(){onhrefchange(b1,oldurl);
                                      stopSaves=true},3e3)
            }
            b1=a1;
        },0);
        if(typeof tt==undefined){tt=false}
        document.addEventListener('keydown',function(e){
            if(tt){if(controll('Q',e)){saveyt();tt=false}}
            if(tt){if(controll('B',e)){deletelist();tt=false}}
            if(tt){if(controll('X',e)){toggle();tt=false}}
        })
        document.addEventListener('keyup',function(e){
            if(!tt){tt=!tt}
        });
        testtimer=1600;
        window.stopSaves=false
        window.btext='';
        window.checksave=false
        window.info={};
        window.isSaving=false
        function save(pl=get('LP'),c=true){
            if(!playlists[1].innerText.includes(pl)){return};
            if(window.isSaving||!a)console.warn('already saving to a playlist')
            if(!window.location.href.includes('watch')||playlist==undefined||get(video_data.id)||window.stopSaving||window.isSaving){stopSaves=false;return};
            window.isSaving=true;
            getElementByAttribute('Save to playlist').click()
            setTimeout(e=>{
                if(!playlists[1].innerText.includes(pl)){return};
                playlists[1].children.forEach(e=>{
                    var name=findhref2(e,'yt-formatted-string')[0].innerText
                    var box=findhref2(e,'div')[0]
                    if(name==pl){
                        box.click();
                    }
                });
                getElementByAttribute('Save to playlist').click()
                setTimeout(e=>{
                    window.isSaving=false;
                    btext=='Added to '+pl&&(console.log('Saved'),c&&(like()))
                    btext!='Added to '+pl&&(save(pl),c)
                },1000)
            },1000)
        }
        /*function save(a=get('LP'),c){
            //if(!document.hasFocus()){console.warn('cant save w/o doc');return};
            if(window.isSaving||!a)console.warn('already saving to a playlist');
            if(!window.location.href.includes('watch')||playlist==undefined||get(video_data.id)||window.stopSaving||window.isSaving){stopSaves=false;return};
            window.isSaving=true
            window.checksave=true;
            getElementByAttribute('Save to playlist').click()
            setTimeout(e=>{
                var pl=a;
                window.info.pl=pl;
                var found;var tc,incl
                playlists[1].children.forEach(e=>{console.log(e.innerText,e.innerText==pl&&(found=true,tc=e.children[0]),e.innerText.includes(pl),incl=true)});
                if(!found)return false;
                found&&(tc.click(),setTimeout(e=>{getElementByAttribute('Save to playlist').click();window.isSaving=false;get('LP',pl)},100))
            },1000);
        }*/
        window.save=save;
        window.ontextchange=function(e){var pl=window.info.pl;window.btext=e;console.log(e);window.checksave&&(window.checksave=false,window.isSaving=false,
                                                                                                               (video_data.id&&((console.log('setting save'),get(video_data.id,true)))),
                                                                                                               console.log('Checking is save to right place'),
                                                                                                               console.log(btext=='Added to '+pl,0),
                                                                                                               (function(){
            console.log(btext=='Added to '+pl,btext!='Added to ')
            if(btext=='Added to '+pl){
                like();
                return true}
            else(btext!='Added to '+pl&&(save2(pl,false)));
        }
                                                                                                               )(e)
                                                                                                              )
                                       }
        var oldtext=''
        var newtext='';
        setInterval(function(){
            try{newtext=getElementByAttribute('','allow-click-through')[1].children[0].innerText
                if(oldtext!=newtext)window.ontextchange(newtext)}catch(err){};
            oldtext=newtext;
        },100);
        var urlt='https://www.y2mate.com/en24/'
        get=function(e,v=undefined){return v==undefined?localStorage.getItem(e):localStorage.setItem(e,v);}
        window.didasave=false;
        window.autosave=function (){
            console.log('found video to save')
            channel=[]
            var itemss=document.getElementsByTagName('*');
            itemss.forEach=[].forEach;
            itemss.forEach(e=>{
                (e.id.includes('channel-name')&&(channel.push(e)))
            });
            channel[0];
            channel=channel[0]
            channel_name=channel.innerText
            eval(get('autosave'))/*&&!window.didasave*/&&!!get(channel_name+'playlist')&&(save(get(channel_name+'playlist')))
            /*didasave=true;
            if(didasave)setTimeout(e=>{
            didasave},1000);*/
        }
        function toggle_buton(gitem,text){;get(gitem,!eval(get(gitem)));var newText=get(gitem);console.log(text,newText);return text+':'+newText;}
        function ToggleE(e){get(e,!eval(get(e)));return get(e);}
        window.ToggleE=ToggleE;
        window.onfocus=function(){(Play())}
        function setupsave(e){
            if(e=='yes'){
                eval(get('autosave'))&&!!get(channel_name+'playlist')&&(save(get(channel_name+'playlist')))
                return
            }
            console.log('Saving channel')
            getElementByAttribute('Save to playlist').click();
            setTimeout(function(){
                channel=[];
                var itemss=document.getElementsByTagName('*');
                itemss.forEach=[].forEach;
                itemss.forEach(e=>{
                    (e.id.includes('channel-name')&&(channel.push(e)))
                });
                channel[0];
                channel=channel[0]
                channel_name=channel.innerText
                try{
                    var playl=findid('playlists')[0].innerText.split('Watch later')[1];
                    if(findid('playlists')[0].innerText.split('Watch later')[1].includes('      ')){
                        getElementByAttribute('Save to playlist').click()
                        setTimeout(setupsave,200)
                        return
                    }
                    (getElementByAttribute('Save to playlist').click(),cp=prompt('which playlist do u want to save '+video_data["video uploader"]+' to'+playl,''),cp!=""&&(save(cp)),get((channel_name)+'playlist',cp))
                }catch(e){console.error(e);return setTimeout(setupsave,200)}
            },500)
        }
        function floc(obj,key){
            var res=[];
            var es=keys(obj);
            var e
            for(let i=0;i<es.length;i++){
                e=es[i]
                try{if(e.toLowerCase().includes(key)||e.includes(key)||obj[e].toString().includes(key)||obj[e].toString().toLowerCase().includes(key))res.push(e);}catch(err){}
            }
            return res
        }
        function x50(){
            if(!location.href.includes('list')&&eval(get('a50'))){console.log('looking for 50x playlist')
                                                                  document.getElementsByClassName('style-scope ytd-thumbnail').forEach=[].forEach;
                                                                  document.getElementsByClassName('style-scope ytd-thumbnail').forEach(e=>{
                                                                      var is3=location.href.includes('watch')?location.href.includes('watch'):
                                                                      location.href.includes('embed')?location.href.includes('embed'):false
                                                                      if(e.innerText=='50+'&&!document.URL.includes('list')&&is3){e.click();console.log('looking for 50x playlist')
                                                                                                                                 }
                                                                  })
                                                                 }
        }
        function Vskip(){(getElementByAttribute('Next (SHIFT+n)')[0]?getElementByAttribute('Next (SHIFT+n)')[0]:getElementByAttribute('Next (SHIFT+n)')).click()}
        function Vprev(){(getElementByAttribute('Previous (SHIFT+p)')[0]?getElementByAttribute('Previous (SHIFT+p)')[0]:getElementByAttribute('Previous (SHIFT+p)')).click();}
        window.Vskip=Vskip;
        window.Vprev=Vprev;
        window.upDate=function(){
            var mp3downloads=floc(localStorage,'mp3')
            var mp4downloads=floc(localStorage,'mp4')
            window.saved={};
            window.saved.mp3=mp3downloads
            window.saved.mp4=mp4downloads
            window.saved.search=function(key){return floc(localStorage,key)}
            channel=[]
            chan=[]
            var itemss=document.getElementsByTagName('*');
            itemss.forEach=[].forEach;
            itemss.forEach(e=>{
                (e.id.includes('channel-name')&&(channel.push(e)));;
                (e.id.includes('channel-name')&&(chan.push(e)));;
            });
            chan=chan[0];
            var channel_url=findhref(columns.children[0].children[0].children.meta)[0].href
            channel[0];
            channel=channel[0]
            var hash='';
            channel_name=document.getElementsByClassName('style-scope ytd-video-owner-renderer')[2].innerText.split('\n')[0];
            var subcount=id('owner-sub-count').innerText
            var vt,view=id('info-contents').innerText.split('\n')[1]
            id('info-contents').innerText.split('\n')[0].includes('#')?(hash=id('info-contents').innerText.split('\n')[0],vt=id('info-contents').innerText.split('\n')[1],view=id('info-contents').innerText.split('\n')[2]):(hash='no hash',vt=id('info-contents').innerText.split('\n')[0])
            var vid=Getlobj(' ')
            var playlist=Getlobj('list')
            var n=document.URL.split('&'),o=n[0],p=n[1],q=n[2];
            window.video_data={'video hash':hash,'video id':vid,title:vt,stats:view,'video uploader':channel_name,'sub count':subcount,'channel link':channel_url,playlist:playlist}
            var yt
            if((get(w)+'').includes('{')){
                eval(`yt=${get(w)}`)
            }
            else{

            }
            yt={yt:w,
                auto_download:{
                    mp3:!!eval(get(w+'mp3')),
                    mp4:!!eval(get(w+'mp4'))
                },
                url:video_data["channel link"]
               }
            yt.sub_count=video_data["sub count"];

            get(w,JSON.stringify(yt))
            return video_data;
        }
        var upDate=window.upDate
        function listener(e){
            if(!modon)return;
            var video_data=window.video_data
            var get=window.get
            check2();
            x50();
            check();
            setTimeout(startauto,100)
            if(document.title.split(') ').pop()=='YouTube'){console.log();return}
            video_data=upDate();
            get(video_data.title+':id',video_data['video id']);get(video_data['video id'],video_data.title+' - '+video_data['video uploader']);get(video_data.title+' - '+video_data['video uploader'],video_data['video id'])
            check2();
            console.log('change',e);
            stuff=eval('container[3]').innerText.split('\n');
            title=stuff[0];
            type=stuff[1];
            views=stuff[2];
            likes={likes:stuff[3],
                   dislikes:stuff[4],
                   total:(stuff[3]*1)+(stuff[4]*1),};
            Setupex_window();
        }
        function startauto(){
            channel=[];
            var itemss=document.getElementsByTagName('*');
            itemss.forEach=[].forEach;
            itemss.forEach(e=>{
                (e.id.includes('channel-name')&&(channel.push(e)))
            });
            channel[0];
            channel=channel[0]
            channel_name=channel.innerText
            autosave();
            this.tofix.forEach(e=>{
                fix2(e[0],e[1]);
            });
            tasks.forEach(e=>{
                try{
                    e.name=[e.function.name]
                    fix2(e.name,'false')
                    e.name.push(jj(e.name))
                    go=eval(jj(e.name[0]))
                    if(go){e.function();}
                    stuff=eval('container[3]').innerText.split('\n');
                    this.tofix=[['yts',''],['download','false'],['mute','false'],['next',false]]
                    title=stuff[0]
                    type=stuff[1]
                    views=stuff[2]
                    likes={likes:stuff[3]*1,
                           dislikes:stuff[4]*1,
                           total:(stuff[3]*1)+(stuff[4]*1),};
                }
                catch(e){console.log(window.Error(e))}})
        }
        setTimeout(listener,1000);
        window.listener=listener;
    }
    else if(location.href.startsWith('https://yt1s.com')&&window.location.hash){
        var go=true
        try{decodeURIComponent(location.hash).split('#')[1].split('{mysep}').forEach(eval);}catch(err){location.reload(1)}
        document.title=name
        setupimg();
        if(typeof discord==undefined+''){discord=0;}
        console.info('evaled location.hash')
        "&&!confirm(`you already have downloaded a ${type} version of this ${id} are you sure u want to continue`)";
        localStorage.getItem((id+type+(discord?'Dcord':null)).split('null').join(''))=='true'&&!confirm(`you already have downloaded a ${type} version of this ${id} are you sure u want to continue`)&&(go=false);;
        setInterval(e=>{
            if(location.href.split('#').pop()=='Done'){
                console.log('saved');
                setTimeout(e=>{window.close()},1000)
            }
            if(location.href.split('#').pop()=='Error'){alert('something went wrong with the download video id '+id);window.close()}
        },100)
        if(!go)(window.location.hash='Done')
        if(go){
            s_input.value='https://www.youtube.com/watch?v='+id;document.getElementById('btn-convert').click();
            var _=setInterval((...e)=>{
                //try{findhref(document.getElementById("search-result"))[0].click();clearInterval(_);close()}catch(err){}
            });
            console.dir=function(...c){}
            var _=setInterval(()=>{console.dir=function(...c){}
                                   try{
                                       mp42=[...formatSelect.children[0].children]
                                       mp32=[...(formatSelect.children[2]||formatSelect.children[1]).children];
                                       filesize=mp42.filter(e=>e.innerText.match(/[0-9]+\.[0-9]+/)).map(e=>e.innerText.match(/[0-9]+\.[0-9]+/g)[0]);
                                       filesize3=mp32.filter(e=>e.innerText.match(/[0-9]+\.[0-9]+/)).map(e=>e.innerText.match(/[0-9]+\.[0-9]+/g)[0]);
                                       clearInterval(_);
                                       function convert(){
                                           document.getElementById("btn-action").click();
                                           var _2=setInterval(()=>{
                                               asuccess.click();
                                               clearInterval(_2);
                                               localStorage[((id+type+(discord?'Dcord':null)).split('null').join(''))]=true;
                                               location.hash='Done'
                                           },1000)
                                       }
                                       if(!discord){
                                           window[type+'2'][0].selected=true;
                                           convert();
                                       }else{
                                           let fls=mp42.filter(e=>e.innerText.match(/^(\w)[0-9]/)).map(_=>_= {size:_.innerText.match(/[0-9]+(\.[0-9+])? (mb|kb|gb)/i)[0].split(' ')[0]*1,index:(()=>{
                                               for(let i in mp42){
                                                   if(_.innerText==mp42[i].innerText)return i;
                                               }
                                           })(_)})
                                           window[type+'2'][fls.filter(_=>_.size<8)[0].index].selected=true
                                           convert()
                                       }
                                       console.log('Got video details')
                                   }catch(err){console.dir=function(...c){}
                                               console.log(err)
                   }},5000)
            }
    }
    else if(location.href.includes('discord')||location.href.includes('greasyfork')){
        user={};
        function Mod_log(...data) {
            var temp1;
            console.log(data)
            data.forEach(e => {
                if (typeof e == 'string') { e = { msg: e } };!e.name && (e.name = Mod_log.caller ? Mod_log.caller.name : null);e.srcname='%c.Discord profile ripper'
                e.type!='log'&&e.type!='warn'&&e.type!='error' && (e.type = 'log')
                !e.nstyle && (e.nstyle = `color:white;border: 2px solid red;border-radius: 8px;border-style: solid;border-width: medium;background:black;`)
                !e.style && (e.style = `color:red;border: 2px solid blue;border-radius: 8px;border-style: solid;border-width: medium;`);
                e.srcstyle = `color:red;border: 2px solid blue;border-radius: 8px;border-style: solid;border-width: medium;background:white;`
                temp1 = e;
                console[e.type](temp1.srcname+' %c' + temp1.name + ' Logged ' + '%c' + temp1.msg,temp1.srcstyle, temp1.nstyle, temp1.style);
                console[e.type](e);
            })
        }
        function Mod_log2(msg) {
            var e={msg:msg}
            var temp1;
            if (typeof e == 'string') { e = { msg: e } };!e.name && (e.name = Mod_log.caller ? Mod_log.caller.name : null);e.srcname='%c.Discord profile ripper'
            e.type!='log'&&e.type!='warn'&&e.type!='error' && (e.type = 'log')
            !e.nstyle && (e.nstyle = `color:white;border: 2px solid red;border-radius: 8px;border-style: solid;border-width: medium;background:black;`)
            !e.style && (e.style = `color:red;border: 2px solid blue;border-radius: 8px;border-style: solid;border-width: medium;`);
            e.srcstyle = `color:red;border: 2px solid blue;border-radius: 8px;border-style: solid;border-width: medium;background:white;`
            temp1 = e;
            console[e.type](temp1.srcname+' %c' + temp1.name + ' Logged ' + '%c' + temp1.msg,temp1.srcstyle, temp1.nstyle, temp1.style);
            console[e.type](e);
        }
        window.Mod_log2=Mod_log2
        window.Mod_log=Mod_log
        var must=`M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z`
        var dpath='M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z'
        var cpath=`M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z`
        function setUser(){
            finde();
            Update();
            user={
                Voiceactivity:{}
            }
            try{user.current_server=getElementByAttribute('name-1jkAdW','class').innerText}catch(err){
                c(getElementByAttribute('container-1taM1r clickable-25tGDB','class'))
                user.current_server=getElementByAttribute('container-1taM1r clickable-25tGDB','class').innerText}
            user.Voiceactivity={};
            user.isinChannel=getElementByAttribute('User area').innerText.includes('Voice');
            if(user.isinChannel){
                user.serverIcon=findhref2(selected,'img')[0].src
                user.Voiceactivity={Channel:getElementByAttribute('User area').innerText.split('\n')[1].split(' / ')[0],Server:getElementByAttribute('User area').innerText.split('\n')[1].split(' / ')[1]}
            }
            var st=getElementByAttribute('User area').innerText.split('\n')
            for(let i=0;i<st.length;i++){
                if(st[i].includes('#')&&st[i].length==5)user.id={name:st[i-1],hash:st[i]}
            }
            user.PFP=test(findhref(getElementByAttribute('Set Status'),'img')[0].src)
            user.Voiceactivity.isMuted=getElementByAttribute('Mute').children[0].children[0].children.length>2
            user.Voiceactivity.isDeafen=getElementByAttribute('Deafen').children[0].children[0].children.length>2
            user.chatActivity=document.title
            user.isinserver&&(user.Serverimg=test(findhref(selected,'img')[0]))
            Mod_log(user)
            return user;
        };
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
        function test(e){
            try{
                if(e.includes('avatar'))/*is avatar*/{
                    if(!!httpGet(e.split('png').join('gif'))){/*png to gif*/
                        return e.split('png').join('gif')
                    }
                    else if(!!httpGet(e.split('jpg').join('gif'))){/*jpg to gif*/
                        return e.split('jpg').join('gif')
                    }
                }
                else if(e.includes('icon'))/*is icon*/{
                    if(!!httpGet(e.split('png').join('gif'))){/*png to gif*/
                        return e.split('png').join('gif')
                    }
                    else if(!!httpGet(e.split('jpg').join('gif'))){/*jpg to gif*/
                        return e.split('jpg').join('gif')
                    }
                }else {
                    if(!!httpGet(e.split('png').join('gif'))){/*png to gif*/
                        return e.split('png').join('gif')
                    }
                    else if(!!httpGet(e.split('jpg').join('gif'))){/*jpg to gif*/
                        return e.split('jpg').join('gif')
                    }
                    if(!!httpGet(e.split('PNG').join('GIF'))){/*png to gif*/
                        return e.split('PNG').join('GIF')
                    }
                    else if(!!httpGet(e.split('JPG').join('GIF'))){/*jpg to gif*/
                        return e.split('JPG').join('GIF')
                    }
                    return e;
                    Mod_log('is not custom discord avatar');
                }
                /*return e.includes('avatar')?(!!httpGet(e.split('png').join('gif'))?e.split('png').join('gif'):e):console.warn(e.src,'is not a profile');*/}
            catch(err){return err}
        }
        function httpGet(theUrl){
            try{
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onload=function(e){}
                xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
                xmlHttp.send( null );
                return !xmlHttp.responseText.length==''?xmlHttp.responseText:false;
            }catch(err){return 0;}
        }
        window.httpGet=httpGet
        window.greasy=function greasy(id,text=prompt('Enter msg ')){
            id=id.split('#').join('_')
            var url=`https://greasyfork.org/en/scripts/411490-discord-profile-ripper/feedback#msg='${text.split(' ').join('_')}';id='${id}'`
            this.win2=open(url,'Greasy',`width:256,height=256`);
        }
        window.Post=function Post(){
            if(location.pathname.split('/')[4]=='discussions'&&location.pathname.split('/')[3].includes('411490')){window.close()}
            else
                if(document.domain=='greasyfork.org'&&location.hash.includes('#')){
                    location.hash.split('#')[1].split(';').forEach(eval);
                    id=id.split('_').join('#');
                    c(discussion_rating_4)
                    discussion_comments_attributes_0_text.value=msg.split('_').join(' ')+'\n'+id;
                    document.getElementsByTagName('input')[8].click();
                    setTimeout(function(){getElementByAttribute('commit name').click();},100);
                }
            else greasy(getElementByAttribute('User area').innerText.split('\n').join(''));
        }
        if(document.domain=='greasyfork.org'&&location.hash.includes('#')){Post();return};;
        if(document.domain=='greasyfork.org'){return}
        setInterval(setUser,60000)
        if(location.pathname.split('/')[4]=='discussions'&&location.pathname.split('/')[3].includes('411490')){window.close()}
        window.setCookie=function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        window.getCookie=function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        window.checkCookie=function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 365);
                }
            }
        }
        function da(b){
            $(function(a) {
                $(a).keydown();
                $(a).keypress();
                $(a).keyup();
                $(a).blur();
            })(b);
        }
        function status(msg='test',expire=0,time=1000){
            (getElementByAttribute('Set Status').click(),
             Mod_log('Clicking profile'),
             id('status-picker-custom-status').click(),
             Mod_log('going to status'),
             Mod_log('seting status to',msg),
             setTimeout(function(){
                (text=getElementByAttribute('Support has arrived! placeholder'),c(getElementByAttribute('Support has arrived! placeholder')),da(text),getElementByAttribute('Support has arrived! placeholder').focus(),getElementByAttribute('Support has arrived! placeholder').value=msg)
            },time)
            ),
                setTimeout(function(){
                (c(getElementByAttribute('listbox role')),
                 c(getElementByAttribute('ltr dir')[2].children[expire]),
                 Mod_log('saving status')
                )
            },time*2)
            setTimeout(function(){
                c(clas('button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN')[0])
            },time*2+(time/2))
        }
        window.triggerMouseEvent=this.triggerMouseEvent=function triggerMouseEvent(node, eventType) {var clickEvent = document.createEvent ('MouseEvents');clickEvent.initEvent (eventType, true, true);node.dispatchEvent (clickEvent);}
        window.c=function c(et){triggerMouseEvent (et, "mouseover");triggerMouseEvent (et, "mousedown");triggerMouseEvent (et, "mouseup");triggerMouseEvent (et, "click");};
        window.status=function status(msg='test',expire=0,time=1000){
            c(getElementByAttribute('Set Status'),
              Mod_log('Clicking profile'),
              c(id('status-picker-custom-status')),
              Mod_log('going to status'),
              Mod_log('seting status to',msg),
              setTimeout(function(){
                (c(getElementByAttribute('Support has arrived! placeholder')),getElementByAttribute('Support has arrived! placeholder').focus(),getElementByAttribute('Support has arrived! placeholder').value=msg)
            },time)
             ),
                setTimeout(function(){
                (c(getElementByAttribute('listbox role')),
                 c(getElementByAttribute('ltr dir')[2].children[expire]),
                 Mod_log('saving status')
                )
            },time*2)
            setTimeout(function(){
                c(clas('button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN')[0])
            },time*2+(time/2))
        }
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
        }
        r=null;
        function RD(e){return [...new Set(e)];}
        class Element{
            constructor(tag,id,classname){
                var e
                if(tag){e=document.createElement(tag);}else{return}
                e.classname=classname
                if(id){e.id=id};
                return e;
            }
            remove(e){e.remove()}
        }
        function fixpfp(a){
            Update();
            getElementByAttribute('Channel header').innerHTML+=`<button id='Load_icon'>Load emojis</button><span>  </span><button id='Load_profiles'>Load profiles</button> <span></span><button id='comment'>Post a Comment</button><button id='showpfp'>View pfp </button>Profiles <select id='Profiles'></select><input id='shown'size='4'>`;Profiles=id('Profiles');
            showpfp=id('showpfp');
            comment=id('comment');
            load_icons=id('Load_icon');
            Load_profiles=id('Load_profiles');
            Load_profiles.onclick=function(){
                get_PFP(1);
            }
            comment.onclick=Post;
            Load_profiles.style.backgroundColor='rgb(54,57,63)'
            Load_profiles.style.color='white';
            load_icons.style.backgroundColor='rgb(54,57,63)'
            load_icons.style.color='white';
            comment.style.backgroundColor='rgb(54,57,63)'
            comment.style.color='white';
            Profiles.style.backgroundColor='rgb(54,57,63)'
            Profiles.style.color='white';
            showpfp.style.backgroundColor='rgb(54,57,63)'
            showpfp.style.color='white';
            shown.style.backgroundColor='rgb(54,57,63)'
            shown.style.color='white';
            load_icons.onclick=function(){
                get_icons();
            }
            showpfp.onclick=function(e){
                open(id('shown').value,Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:256,height=256`)
            }
            Profiles.onchange=function(e){
                id('shown').value=Profiles.selectedOptions[0].value
            }
            get_PFP();
        }
        class NElement{
            constructor(tag,id,classname){
                var e
                if(tag){e=document.createElement(tag);}else{return}
                e.classname=classname
                if(id){e.id=id};
                return e;
            }
            Delete(e){try{e.remove()}catch(err){Mod_log({msg:e,type:'error'})}}
        };
        function gc(a){
            var b
            document.cookie.split(';').forEach(c=>{
                if(a==c.split('=')[0])(b=c.split('=')[1])
            })
            return b
        }
        var nvaled=false
        function ev(again){
            if(!eval(gc('dideval'))||again){
                var input=new NElement('input','inputfile'),span=new NElement('span','inputfilespan');span.innerText='Eval javascript';input.name='file';input.type='file';
                setTimeout(e=>{
                    getElementByAttribute('Channel header').append(span);
                    getElementByAttribute('Channel header').append(input);
                    document.getElementById('inputfile').addEventListener('change', function() {
                        var fr=new FileReader();
                        fr.onload=function(){
                            window.fileFr=fr;
                            try { eval(fileFr.result);alert('evaluated successfully');document.getElementById('inputfile').remove();inputfilespan.remove(); alert('eval u want to eval another file go the console and enter "ev();" or reload the page');setCookie('dideval',true)} catch (err) { console.error(err); alert(err) }
                        }
                        fr.readAsText(this.files[0]);
                    })
                },0)
            }
        }
        window.ev=ev;
        window.onhrefchange=function(e){
            try{fixpfp();
                if(eval(get('dideval')))return;;
                ev();
               }catch(err){if(!shown)(setTimeout(onhrefchange,1000),Mod_log('trying again'))}
        };
        var oldhref='';
        var newhref='';
        window.gname=function(a){return a.split('/').pop().split('.')[1];}
        window.onunload=function(e){
            setCookie(user.name,JSON.stringify(user))
            win1.close();
            setCookie('dideval',false);
        }
        setInterval(function(){
            newhref=location.href
            if(newhref!=oldhref)window.onhrefchange(newhref);
            oldhref=newhref
        },100)
        function getinfo(e2,e=document.getElementsByClassName('layerContainer-yqaFcK')[1].innerText){
            e=e.split('\n');
            var tr=[]
            for(let i=0;i<e.length;i++){
                tr=e[(i)]
                if(tr.includes('#')&&tr.length==5){tr=[e[i-2],e[i-1],e[i],e[i+1]];break}
            }
            tr.push(findhref(e2,'img')[0].src)
            return tr;
        }
        window.getinfo=getinfo;
        get_PFP=  async function get_PFP(open=false){
            pfplist=[];
            Profiles.innerHTML=''
            open&&(startwin());
            var res=[];
            var go=[location.pathname.split('/')[2]=='@me', async function inserver(){},function indm(){}
                   ]
            ;
            open&&(win1.resizeTo(305,'1000'),
                   win1.document.head.innerHTML=`
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
`);;
            if(!go[0])await new Promise((resolve,rej)=>{
                Mod_log('is in a server')
                urls=[];
                var last
                var max=0;
                var people=clas('layout-2DM8Md');people.forEach=[].forEach;
                people.forEach(e=>{
                    last=e;c(e);
                    var tt=getinfo(e),fuser={server_nick:tt[0]!="VIEW PROFILE"?tt[0]:'Does not have a server nickname',name_without_tag:tt[1],tag:tt[2],status:tt[3],src:tt[4],name:tt[1]+' '+tt[2]};
                    urls.push(fuser);console.count();max++;
                });
                c(last);
                console.countReset()
                var index=0;
                var name,url,items,type;
                var rr=setInterval(e=>{
                    index<max&&(
                        items=urls[index],
                        console.count(),
                        Mod_log(urls.length+'/'+index),
                        name=items.name,
                        url=test(urls[index].src),
                        type=gname(url),
                        option=document.createElement('option'),
                        res.push({name:name,url:url}),
                        option.value=url,
                        option.innerText=name,
                        Profiles.append(option),
                        Mod_log('adding '+name,' avatar '+url),
                        open&&(add(`<div class='Profile'>
<br>
<span class='Status'>${items.status}</span><br>
<span class='name'>${items.name}</span><br>
<span class='server_nick'>${items.server_nick}</span><br>
<a download="${name}_Discord.${type}" href="${url}" title="${name}">
<img alt="${name}" src="${url}" width=256 height=256>
</a>
<br>
<input size=36 value='${url}'>
<br>
</div>`)),index++
                    )
                    index==max&&(clearInterval(rr),Mod_log('!done'),resolve(),console.countReset(),ready(),win1.document.body.children[0].remove())
                },0)
                })
            else await new Promise((resolve,rej)=>{
                var stuck
                try{var a=clas('membersWrap-2h-GB4')[0].children[0].children
                a.forEach=[].forEach
                    var b=[];
                    a.forEach(e=>{
                        if(e.tagName.toLowerCase()!='div')null;
                        else b.push(e)
                    });
                   }catch(err){
                       b=[0]
                   }
                if(b.length>1)b.forEach(e=>{c(e);stuck=getElementByAttribute('dialog role');
                                            res.push({name:
                                                      (!getElementByAttribute(findhref(e,'span')[0].innerText).length?
                                                       getElementByAttribute(findhref(e,'span')[0].innerText):
                                                       getElementByAttribute(findhref(e,'span')[0].innerText)[1]).innerText.split('VIEW PROFILE')[1].split('\n')[1]+
                                                      (!getElementByAttribute(findhref(e,'span')[0].innerText).length?
                                                       getElementByAttribute(findhref(e,'span')[0].innerText):
                                                       getElementByAttribute(findhref(e,'span')[0].innerText)[1]).innerText.split('VIEW PROFILE')[1].split('\n')[2],
                                                      url:test(test(findhref(e,'img')[0].src))});
                                            var option=document.createElement('option');
                                            var url=res[res.length-1].url
                                            var name=res[res.length-1].name
                                            option.value=url;
                                            option.innerText=name;
                                            Profiles.append(option);
                                            open&&(addprofile(
                                                (!getElementByAttribute(findhref(e,'span')[0].innerText).length?
                                                 getElementByAttribute(findhref(e,'span')[0].innerText):
                                                 getElementByAttribute(findhref(e,'span')[0].innerText)[1]).innerText.split('VIEW PROFILE')[1].split('\n')[1]+
                                                (!getElementByAttribute(findhref(e,'span')[0].innerText).length?
                                                 getElementByAttribute(findhref(e,'span')[0].innerText):
                                                 getElementByAttribute(findhref(e,'span')[0].innerText)[1]).innerText.split('VIEW PROFILE')[1].split('\n')[2],
                                                test(findhref(e,'img')[0].src)))})
                else (open&&(addprofile(findhref(findlocal())[0].innerText.split('\n')[0],test(findhref(findlocal(),'img')[0].src))),res.push({src:test(findhref(findlocal(),'img')[0].src),name:findhref(findlocal())[0].innerText.split('\n')[0],status:findhref(findlocal())[0].innerText.split('\n')[1]}))
                resolve(res)
            });
            return [0,res];
        }
        window.win1=null;
        function checkWin(myWindow=this.win1) {return !myWindow?false:myWindow.closed?false:true}
        function startwin(){
            try{if(!checkWin(this.win1))(this.win1=open('','PROFILES',`width=256,height=305`),
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
.Profile {
width:276px;
display: inline-block;
}

</style>
</head>
<body><span style='color:white'>Loading Details pls w8</span></body>
`)
            },500));
                else (win1=open('','PROFILES',`width=256,height=305`),win1.document.body.innerHTML='')}catch(err){}
        }
        function addprofile(name,url){win1.document.write(`<div id='Profile'><img src="${url}" alt="${name}" title="${name}"><br><br></div>`)}
        get_PFP2=function(){
            var isinserver=false;
            var a=[];
            var i=0;
            var max
            var txt='||'
            var res;
            var ser=[];
            window.colors=[];
            var go=[
                location.pathname.split('/')[2]=='@me',
                function(){Mod_log('is in server');
                           isinserver=true
                           var name=findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'span').length?findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'span'):[findlocal()]
                           res=name;
                           var username=name[i]?name[i].innerText:undefined
                           findlocal()
                           max=findhref(clas('layout-2DM8Md')[0],'img').length;
                           window.max=max
                           findhref(clas('layout-2DM8Md')[0],'img').forEach(e=>{
                               username=name[i]?name[i].innerText:undefined;
                               if(username.includes('ONLINE')||username.includes('OFFLINE')||username.includes('BOT')){i++}
                               username=name[i]?name[i].innerText:undefined;
                               e.src.includes('avatar')?
                                   (cc=name[i].style.color,Mod_log(e.src+i+' out of '+max+` Getting ${username} PFP`),cct=test(e.src),
                                    a.push(cct),ser.push({url:cct,name:username})):console.warn(e.src,'is not a profile');
                               try{cc=name[i].style.color!=''?name[i].style.color:'white';window.colors.push(cc);Mod_log(cc +' '+window.colors.length);}catch(err){console.error(err)}
                               i++})
                           txt='||';
                           a.forEach(e=>{
                               txt+=e+'\n';
                           });
                          },
                function(){
                    Mod_log('is in',"DM's");
                    name=findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'span').length?findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'span'):[findlocal()]
                    max=findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'img').length
                    var username=name[i]?name[i].innerText:undefined;
                    findhref((clas('membersWrap-2h-GB4')[0]||findlocal()),'img').forEach(e=>{
                        r=e.src
                        e.src.includes('avatar')?
                            (Mod_log(e.src+i+'out of '+max+` Getting ${username} PFP`),cct=test(e.src),
                             a.push(cct),ser.push({url:cct,name:username})):console.warn(e.src,'is not a profile');
                        i++})
                    txt='';
                    a.forEach(e=>{
                        txt+=e+';';
                    });
                }
            ];
            (go[0]?go[2]:go[1])()
            ;
            txt=RD(txt.split(';')).join('\n');
            document.getElementsByClassName('markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP')[0].focus();
            var beg=0
            window.loop= setInterval(function(){
                try{if(beg<max&&isinserver)(res[beg].style.color=window.colors[beg],Mod_log(max-beg+' left'),beg++)
                    else clearInterval(window.loop);}catch(err){console.error(err)}
            },0)
            return [txt,ser]
        }
        window.test=test
        sh=function(a,b,cc){
            if(isHidden(a)==!b){c(cc)}
        }
        ta=document.getElementsByTagName('*');
        var toadd=[];
        var allEqual = (arr,a) => arr.every( v => {Mod_log(v === a);return v === a} );
        var allEqual2 = (arr) => arr.every( v => v === arr[0] );
        ta._list=function(id,classname,tag){
            var res=[];
            var put={};
            var array=[];
            todo=document.getElementsByTagName(tag);
            todo.forEach=[].forEach;
            todo.forEach(e=>{array=[];
                             if(typeof id=='string'){
                                 put.i=id==e.id;
                             }else{put.i=true}
                             if(typeof classname=='string'){
                                 put.c=classname==e.className;
                             }else{put.c=true}
                             array=[put.c,put.i];
                             array=allEqual(array,true);
                             if(array){res.push(e);console.count();}
                            })
            console.countReset();
            return res;
        };
        isHidden=function (el) {
            if(el){
                return (el.offsetParent === null)
            }
        }
        id=function(id){
            return document.getElementById(id)
        }
        dd=function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique);};
        clas=function(classname){
            return document.getElementsByClassName(classname)
        };
        rightclick=function (element){
            var evt = element.ownerDocument.createEvent('MouseEvents');

            var RIGHT_CLICK_BUTTON_CODE = 2; // the same for FF and IE

            evt.initMouseEvent('contextmenu', true, true,
                               element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
                               false, false, false, RIGHT_CLICK_BUTTON_CODE, null);

            if (document.createEventObject){
                // dispatch for IE
                return element.fireEvent('onclick', evt)
            }
            else{
                // dispatch for firefox + others
                return !element.dispatchEvent(evt);
            }
        }
        ll=null;
        findlocal=function (a,t,t2){
            var res=[];
            if(!a||t){ll=location.pathname};
            findhref(document.body).forEach(e=>{if(e.href.split('https://discord.com')[1]==(a||location.pathname)){res.push(e);Mod_log('found '+(a||location.pathname))}});
            if(t2){ll=res[1]?res[1]:res[0]};
            return res[1]?res[1]:res[0]
        }
        findat=function (att,tag,b){
            var res=[];tag=document.getElementsByTagName(tag);
            for(let i=0;i<tag.length;i++){if(tag[i].hasAttribute(att)){if(b){if(tag[i].getAttribute(att)==b){res.push(tag[i]);console.count()}}else{res.push(tag[i]);}}}
            console.countReset();
            return res;
        }
        finde=function(){
            select=location.pathname;
            var spans=clas('listItem-2P_4kh');
            selected=null;
            go=[location.pathname.split('/')[2]=='@me',
                function(){c(selected);Mod_log('is in server');},
                function(){c(findlocal(selected));Mod_log('is in',"DM's");}
               ];
            if(location.pathname.split('/')[2]=='@me'){
                selected=findlocal(null,1).href.split('https://discord.com')[1];
            }else{
                for(let i=0;i<spans.length;i++){
                    try{
                        if(spans[i].children[0].children.length){
                            console.log(i,spans[i].children[0].children[0].style.height,spans[i].children[0].children[0].style.height=='40px',spans[i])
                            var is=spans[i].children[0].children[0].style.height=='40px';
                            if(is){console.log('found',i,spans[i]);selected=spans[i];selected=findhref(selected,'svg')[0].children[3].children[0];break}}
                    }
                    catch(err){
                        console.error(err)
                        Mod_log('not selected',i)
                    }
                }
            }
        }
        function Update(){
            Settings=getElementByAttribute('User Settings')
            Avatar_change=getElementByAttribute('Change\nAvatar')
            Close=getElementByAttribute('Close')
        }
        change_PFP=async function (){
            var name=get_aria_label('Click to copy username').innerText.split('\n')[0]
            await new Promise((res,onrejectionhandled)=>{
                c(get_aria_label('User Settings'))
                setTimeout(function(){res(1)},100)
            })
            document.getElementsByTagName('button').forEach=[].forEach
            document.getElementsByTagName('button').forEach(e=>{
                if(e.innerText=='Edit')(c(e))
            });
            await new Promise((res,rej)=>{
                var rr= setInterval(function(){
                    if(get_aria_label('Change\nAvatar'))
                        (
                            res(),
                            c(get_aria_label('Change\nAvatar')),
                            clearInterval(rr)
                        )
                },0)
                })
        }
        function get_aria_label(label,doc=document.body){
            var res=[];
            function part2(e){
                if(e.getAttribute('aria-label')==label){
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
            return res[0]||false;
        }
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
        findhref2=function (a,b){
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
        home=function(){c(clas('listItem-2P_4kh')[0].children[1].children[0].children[0].children[3].children[0]);c(id('private-channels-1'));
                        setTimeout(function(){
                            if(ll){
                                c(findlocal(ll))
                            }},500);
                       };
        gcd=function (a, b) {return (a*100/b)};

        update=async function (e){
            var info={};
            finde();
            findlocal(null,1);
            if(e==1){
                await new Promise((resolve,reject)=>{
                    Mod_log('step '+1+' go home');
                    home();
                    c(id('private-channels-0'))
                    Mod_log('step '+2+' clck friends');
                    var items=clas('tabBar-ZmDY9v topPill-30KHOu')[0].children;
                    items.forEach=[].forEach;
                    Mod_log('step' +3 +' findthe button that includes all and click it');
                    Mod_log('step '+4+' find the button that includes online and click it');
                    items.forEach(e=>{if(e.innerText.includes('All')){c(e);Mod_log('found the button that includes all');friends=clas('title-30qZAO container-2ax-kl')[0].innerText.split(' ')[3]*1;};if(e.innerText.includes('line')){c(e);Mod_log('found the button that includes online');online=clas('title-30qZAO container-2ax-kl')[0].innerText.split(' ')[2]*1;};});
                    Mod_log(gcd(online,friends).toFixed(2)+' are online');
                    Mod_log('step '+5+' Done');
                    (go[0]?go[2]:go[1])();
                    resolve( true );
                })
            }
            if(e==2){
                Mod_log('step '+1+' click toolbar 0 1');
                await new Promise((resolve,reject)=>{
                    var intn=setInterval(function(){
                        var tools=clas('toolbar-1t6TWx')[0].children
                        tools.forEach(e=>{
                            if(e.children[0].tagName=='svg'){
                                if(e.children[0].children[0].getAttribute('d')==must){
                                    if(typeof popout_6=='undefined'){clearInterval(intn);c(e);resolve(true);}
                                }
                            }
                        })
                    },100)
                    })
                Mod_log('step 2 clear servers');
                await new Promise((resolve,reject)=>{
                    setTimeout(function Serverclear(){
                        var rr=setInterval(function(){
                            if(clas('channelHeader-3Gd2xq')[0]){
                                var channel=clas('channelHeader-3Gd2xq')[0].innerText.split('\n')[0];
                                var server=clas('channelHeader-3Gd2xq')[0].innerText.split('\n')[1];
                                c(clas('channelHeader-3Gd2xq')[0].children[3])
                                Mod_log('cleared '+channel+' in '+server);
                            }else{setTimeout(function(){

                                if(clas('container-3u944p')[0]){
                                    Mod_log('step '+3+' close box');
                                    c(getElementByAttribute('Inbox'))
                                    clearInterval(rr);
                                    Mod_log('!done')
                                    resolve(true)
                                    /*var tools=clas('toolbar-1t6TWx')[0].children;tools.forEach(e=>{
                                if(e.children[0].tagName=='svg'){
                                    if(e.children[0].children[0].getAttribute('d')==dpath){
                                        typeof popout_6=='object'?(function(){
                                            getElementByAttribute('Inbox').click()
                                            clearInterval(rr);
                                            console.log('done')
                                            resolve(true)
                                        })():null
                                    }
                                }
                            })*/;
                                }
                            },3000)
                                 }
                        },100)
                        },100)
                })
            }
            return info;
        }
        b=[['opacity',1],['height 56px'],]
        allEqual3 = (arr,b) =>arr.every( v => v === b );
        matchst=function matchst(a,b,e,f='style'){
            b.forEach=[].forEach;
            var canadd
            var res=[];
            var d=[]
            for(let i=0;i<b.length;i++){
                d.push(a[f][b[i][0]]==b[i][1]);
            }
            return allEqual3(d,true)
        }

        function WIP(){
            if(localStorage.getItem('isnew')==null)
            {
                eval(location.hash.split('#')[1]+"'")
                (discussion_comments_attributes_0_text||comment_text).value=Discord;
                c(document.getElementsByTagName('input')[7])
                localStorage.setItem('isnew ')
            }
        }
        window.setCookie=function setCookie(cname, cvalue, exdays=360) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        window.getCookie=function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        eval(getCookie('dideval'))==''&&(setCookie('dideval',false));
        window.checkCookie=function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 365);
                }
            }
        }
        get=function(e,v=undefined){return v==undefined?getCookie(e):setCookie(e,v);}
        function ready(){
            var i=0;
            var reaDY=
                setInterval(function(){
                    (i<pfplist.length&&(win1.document.write(pfplist[i]),i++),!(i<pfplist.length)&&(clearInterval(reaDY),win1.focus()))
                },100)
            }

        add=function(e){pfplist.push(e)}
        async function get_icons(){
            var emojis
            await new Promise((re,rj)=>{
                c(getElementByAttribute('Select emoji'))
                setTimeout(e=>{
                    c(getElementByAttribute(getElementByAttribute('name-1jkAdW','class').innerText,'alt')[1])
                    setTimeout(e=>{
                        startwin()
                        emojis=findhref2(getElementByAttribute(getElementByAttribute('name-1jkAdW','class').innerText,'alt')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,'img');emojis.forEach(e=>{
                            var url=test(e.src);
                            var name=e.alt
                            pfplist.push(
                                `
<span>icon name is ${name}</span>
<img src="${url}" alt="${name}" title="${name}" width="256" height="256">
<br>
<input size=36 value='${url}'>`
                            )});
                        re(),ready();
                    },500)
                },1000)
            })
            return emojis;
        }
        window.get_icons=get_icons
        function Upload(){
            if(!eval(get('AutoU')))return;;
            try{c(clas('footer-3mqk7D hasSpoilers-1IRtQC')[0].children[1].children[2].children[0]);Mod_log2('Sending')}catch(err){}
            try{c(getElementByAttribute('title-2Vtl4y','class')[1].parentNode.children[2].children[0]);Mod_log2('re attempting')}catch(err){}
        }
        var eee=setInterval(Upload,500);
    }
    else if(location.href.includes('ncs.io')){
        document.getElementsByClassName('btn black panel-btn')[0].click();
        go=true;
        setTimeout(e=>{
            (document.getElementsByClassName('inner')[0].innerText.includes('log in')||document.getElementsByClassName('inner')[0].innerText.includes('Sign Up'))&&(alert('You have to be loged in to autodown NCS Songs'),alert('Login and try again'),go=false);
            if(go)(open('https://ncs.io/track/download/'+document.getElementsByClassName('btn black panel-btn')[0]['dataset'].tid),
                   setTimeout(e=>{window.close()},100)
                  )
        },100)
    }
    else if(1==1){
        console.warn(started=performance.now())
        var llength='RDJsG8fl0VfkQ'.length;
        var default_s
        window.default_list='RDJsG8fl0VfkQ'
        function setplayer_(e){var src=e.src;var old=setElement(new Player(src).set);var list=src.split('list')[1];return [old,list,src]
                              }
        function getP(url){var n=url.split('&'),o=n[0],p=n[1],q=n[2];return p?p.split('=')[1]:window.default_list}
        function getlink(url){
            var vid=setElement(url)
            var list=getP(url)
            return setup(vid,list)
        }
        function setup(url,list){if(!url){return}if(!list){return}return`https://www.youtube.com/watch?v=${url}?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=${list}`}
        function setplayer(e){e.src=setup(setElement(new Player(e.src).set),e.src.split('list')[1]);}
        function makeid(length) {var result           = '';var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength = characters.length;for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}return result;}
        setElement = function(url) {var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;var match = String(url).match(regExp);console.log(match);return(match&&match[7].length==11)? match[7]: false;};
        Player = function(oldurl){if(!oldurl){return}var newpid=makeid(length);var newurl=setElement(oldurl);var p=setup(newurl,newpid);this.set=p}
        var isalready=eval(localStorage.getItem('isplayer'))==null?true:eval(localStorage.getItem('isplayer'))
        isalready=isalready==false
        window.onunload=function(){
            localStorage.setItem('isplayer',false);
        }
        if(isalready){
            localStorage.setItem('isplayer',true);
            iframe='<iframe id="msc" src="https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
            function toggled(e){var is2=[e.style.display=='none',e.style.display=='block'];if(!is2[0]&&!is2[1]){e.style.display='block'}var is=[e.style.display=='none',e.style.display=='block'];console.log(is);if(is[0]){e.style.display='block'};if(is[1]){e.style.display='none'};return e.style.display;};
            ta=document.getElementsByTagName('*');
            var toadd=[];
            var allEqual = (arr,a) => arr.every( v => {console.log(v === a);return v === a} );
            var allEqual2 = (arr) => arr.every( v => v === arr[0] );
            ta._list=function(id,classname,tag){
                var res=[];
                var put={};
                var array=[];
                todo=document.getElementsByTagName((tag||'*'));
                todo.forEach=[].forEach;
                todo.forEach(e=>{
                    array=[];
                    if(typeof id=='string'){
                        put.i=id==e.id;
                    }else{put.i=true}
                    if(typeof classname=='string'){
                        put.c=classname==e.className;
                    }else{put.c=true}
                    array=[put.c,put.i];
                    array=allEqual(array,true);
                    if(array){res.push(e);console.count();}
                })
                console.countReset();
                return res;
            };
            function isHidden(el) {
                if(el){
                    return (el.offsetParent === null)
                }
            }
            id=function(id){return document.getElementById(id)}
            dd=function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique);};
            clas=function(classname){return document.getElementsByClassName(classname)};
            var vcent=location.href.includes('moomoo')?false:
            location.href.includes('narwhale')?false:
            location.href.includes('starblast')?false:
            location.href.includes('surviv')?false:
            document.domain.includes('slither')?true:
            document.domain.includes('greasyfork')?false:
            document.domain.includes('agar')?true:
            document.domain.includes('paper-io')?true:
            document.domain.includes('splix')?true:0;
            var canclear,pendto;
            idlenght='-Mypt378fkc'.length;
            CE=function(tag,id,classname){var e=document.createElement(tag);e.classname=classname;if(id){if(id.length){e.id=id;};};return e;}
            setElement(URL);
            playlist=function(url,...list){
                console.log('1',getlink(url))
                var id=setElement(url);
                if(id&&idlenght==id.length)null
                else {id=false;console.log('id','does','not','match','length')}
                if(!id)id=localStorage.getItem('lid');
                if(list &&llength==list.length)null
                else{list =false;console.log('list','does','not','match','length')}
                if(!list)list=localStorage.getItem('list');
                music_frame.src=setup(id,list);
            }
            function imsub(){playlist()};
            ;fix=URL=>{URL=setElement(URL);document['YTID']=URL;return "https://www.youtube.com/embed/"+URL+"?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ";};
            function fix2(item,val){return localStorage.getItem(item)?[true,localStorage.getItem(item)]:[false,localStorage.setItem(item,val)]};hh=function(item,val){localStorage.setItem(item,val)};jj=function(item){return localStorage.getItem(item)};frame=CE('iframe','music_frame');inputm=CE('input','insert');frame.value;inputm.onsubmit=imsub;inputm.onkeyup=function(e){
                function getP(url){var n=url.split('&'),o=n[0],p=n[1],q=n[2];return p?p.split('=')[1]:window.default_list}
                function getlink(url){
                    var vid=setElement(url)
                    var list=getP(url)
                    return setup(vid,list)
                }
                function setup(url,list){if(!url){return}if(!list){return}return `https://www.youtube.com/embed/${url}?list=${list}`;/*`https://www.youtube.com/watch?v=${url}?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=${list}`}*/}
                var new_url=getlink(e.target.value)
                console.log(new_url);
                localStorage.setItem('LP',new_url)
                frame.src=new_url
            };
            if(!eval(fix2('test4',true))[0]){inputm.placeholder=fix('://www.youtube.com/watch?v=-Mypt378fkc');alert('test');frame.src=localStorage.getItem('LP')||inputm.placeholder;}else{fix2('RS','https://www.youtube.com/watch?v=-Mypt378fkc');frame.src=fix(jj('RS'));};var br=CE('br');if(canclear){pendto.innerHTML=''};listn=CE('input','list');listn.placeholder='enter Plist id'
            var hb=CE('button','H_B');
            fix2('list','RDJsG8fl0VfkQ')
            fix2('lid','-Mypt378fkc')
            var hb2=CE('button','H_B2');
            hb2.innerText='New player list'
            frame.setAttribute('controls',1);
            hb.innerText='Toggle player';
            set=function(a,b,c){a.setAttribute(b,c);};
            var test3=[
                {site:location.href.includes('greasyfork'),cent:true,clear:false,parent:function(){return (document.getElementById('home-top-sites')||document.getElementById('script-list-sort')||document.getElementById('script-links')).parentNode}},
                {site:location.href.includes('moomoo'),cent:false,clear:true,parent:function(){setTimeout(function(){setTimeout(function(){
                    let servers,
                        elemSet = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML').set;
                    Object.defineProperty(window, 'vultr', {
                        set: (data) => {
                            data.servers.forEach(server => server.games.forEach(game => game.playerCount = 0 - game.playerCount));
                            servers = data
                        },
                        get: () => servers
                    });
                    Object.defineProperty(Element.prototype, 'innerHTML', {
                        set(data) {
                            this.id === 'serverBrowser' && (data = data.replace(/-(\d)/g, '$1'))
                            return elemSet.call(this, data);
                        }
                    });
                    localStorage.moofoll = !0;
                    document.getElementById('nameInput').placeholder = "𝗚𝗶𝘃𝗲 𝗵𝗶𝗺 ▶ 🐳 a name";
                    document.getElementById('desktopInstructions').remove();
                    document.getElementById('youtuberOf').remove();
                    document.getElementById('diedText').innerHTML = '❌ΣLIMIΠΔTΣD❌';
                    $('#diedText').css({'background-color': 'rgba(0, 0, 0, 0.74)'});
                    $('#diedText').css({'color': 'rgba(212, 32, 32, 1)'});
                    document.getElementById('enterGame').innerHTML = '🎮𝐏𝐋𝐀𝐘🎮';

                    $('#gameName').css({'color': '#000000',
                                        'text-shadow': '0 1px 0 rgba(60, 100, 231, 1), 0 2px 0 rgba(60, 100, 231, 1), 0 3px 0 rgba(60, 100, 231, 1), 0 4px 0 rgba(60, 100, 231, 1), 0 5px 0 rgba(57, 149, 171, 1), 0 6px 0 rgba(57, 149, 171, 1), 0 7px 0 rgba(57, 149, 171, 1), 0 8px 0 rgba(57, 149, 171, 1), 0 9px 0 rgba(57, 149, 171, 1)',
                                        'text-align': 'center',
                                        'font-size': '156px',
                                        'margin-bottom': '-30px'});

                    var moomooVer = $('#linksContainer2 .menuLink').html(),
                        hideSelectors = ['#mobileDownloadButtonContainer',
                                         '#followText',
                                         '#smallLinks',
                                         '#linksContainer1',
                                         '#twitterFollow',
                                         '#youtubeFollow',
                                         '#cdm-zone-02',
                                         '#youtuberOf',
                                         '#promoImg',
                                         '#downloadButtonContainer',
                                         '.menuHeader',
                                         '.menuLink',
                                         '.menuHeader:nth-child(5)',
                                         '.menuHeader:nth-child(6)',
                                         '.menuText'
                                        ],

                        css = '#rightCardHolder {display: block!important}',
                        head = document.head || document.getElementsByTagName('head')[0],
                        style = document.createElement('style');
                    /*var Buy={acc:[],hat:[]}
changeStoreIndex(1)
var items2=document.getElementsByClassName('storeItem')
items2.forEach=[].forEach
items2.forEach(e=>{
try{Buy.acc.push({buy:e.getElementsByClassName('joinAlBtn')[0],price:e.getElementsByClassName('itemPrice')[0].innerText*1})}catch(err){Buy.acc.push({buy:e.getElementsByClassName('joinAlBtn')[0],price:e.getElementsByClassName('itemPrice')[0]})})
});
changeStoreIndex(0)
var items2=document.getElementsByClassName('storeItem')
items2.forEach=[].forEach
items2.forEach(e=>{
try{Buy.hat.push({buy:e.getElementsByClassName('joinAlBtn')[0],price:e.getElementsByClassName('itemPrice')[0].innerText})}catch(e){Buy.hat.push({buy:e.getElementsByClassName('joinAlBtn')[0],price:0})}
})*/

                    style.type = 'text/css';
                    if (style.styleSheet){
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }
                    promoImgHolder.remove();
                    (function() {var css = [
                        "  #twitterFollow, ",
                        "  #youtubeFollow, ",
                        "  #downloadButtonContainer, ",
                        "  #followText, ",
                        "  #promoImg {",
                        "    display: none;",
                        "  }",
                        "",
                        "  #featuredYoutube > a.ytLink, ",
                        "  a {",
                        "    color: #FFFF00 !important;",
                        "    font-size: 20px;",
                        "    margin-top: 0px;",
                        "    transition: 0.5s;",
                        "  }",
                        "  a:hover {",
                        "    color: #51FF00 !important;",
                        "  }",
                        "",
                        "  #featuredYoutube {",
                        "  margin-top: 30px;",
                        "  }",
                        "",
                        "  #linksContainer2, ",
                        "  .partyWrap {",
                        "    background: rgba(0,0,0,0.6);",
                        "    border: 3px solid rgba(0,0,0,0.9);",
                        "    border-radius: 10px;",
                        "    padding: 10px;",
                        "    font-size: 20px;",
                        "    position: absolute;",
                        "    color: #fff;",
                        "  }",
                        "",
                        "  .partyWrap {",
                        "    min-height: 80px;",
                        "    min-width: 160px;",
                        "    top: 10px;",
                        "    right: 10px;",
                        "  }",
                        "",
                        "  #followText {",
                        "    min-height: 200px;",
                        "    bottom: 10px;",
                        "    left: 10px;",
                        "  }",
                        "",
                        "  #linksContainer2 {",
                        "    bottom: 10px;",
                        "    right: 10px;",
                        "    color: transparent;",
                        "  }",
                        "",
                        "  .menuCard {",
                        "    background: rgba(0,0,0,0.6);",
                        "    border-radius: 10px;",
                        "    border: 10px solid rgba(0,0,0,0.9);",
                        "    box-shadow: none;",
                        "    overflow:auto;",
                        "    height:180px;",
                        "  }",
                        "",
                        "  ::-webkit-scrollbar {",
                        "    width: 10px;",
                        "    border-right: 2px solid #ec0e0ed6;",
                        "  }",
                        "",
                        "  ::-webkit-scrollbar-thumb {",
                        "    border: 2px solid #ffeb3b;",
                        "  }",
                        "",
                        "  ::-webkit-scrollbar-thumb:hover {",
                        "    background: #ec0e0ed6;",
                        "  }",
                        "",
                        "  ::-webkit-scrollbar-thumb:active {",
                        "    background: black;",
                        "    border: 2px solid #000000;",
                        "  }",
                        "",
                        "  .menuHeader {",
                        "    font-size: 24px;",
                        "    color: #eeeeee;",
                        "    margin-bottom: 3px;",
                        "    border-bottom: 3px solid #eee;",
                        "  }",
                        "",
                        "  .menuHeader:first-child {",
                        "    margin-bottom: 30px;",
                        "  }",
                        "",
                        "  .menuText {",
                        "    font-size: 18px;",
                        "    color: #ccc;",
                        "    margin-bottom: 10px;",
                        "  }",
                        "",
                        "  .ytLink {",
                        "    color: #FF8C00;",
                        "    font-size: 24px;",
                        "    text-decoration: none;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  .menuButton {",
                        "    color: #fff;",
                        "    background-color: transparent;",
                        "    border: 5px solid #ffe600;",
                        "    position: relative;",
                        "    display: inline-flex;",
                        "    padding: 0px 70px;",
                        "    font-family: fantasy;",
                        "    transition: color .5s;",
                        "    overflow: hidden;",
                        "    width: 100%;",
                        "    justify-content: center;",
                        "  }",
                        "",
                        "  .menuButton:hover {",
                        "    font-family: monospace;",
                        "    color: #FFFFFF !important;",
                        "    border: 5px solid #ff0000;",
                        "    cursor: pointer;",
                        "    background-color: transparent;",
                        "  }",
                        "",
                        "  .menuButton:before {",
                        "    content: \'\';",
                        "    position: absolute;",
                        "    top: 0;",
                        "    left: 0;",
                        "    width: 130%; ",
                        "    height: 10000%;",
                        "    background: #2dff00;",
                        "    border-right: 20px solid #FF0000;",
                        "    z-index: -1;",
                        "    transform-origin:0 0 ;",
                        "    transform:translateX(-112%) skewX(45deg);",
                        "    transition: transform .5s;",
                        "  }",
                        "",
                        "  .menuButton:hover:before {",
                        "    color: #FFFFFF !important;",
                        "    transform: translateX(-20%) skewX(45deg);",
                        "  }",
                        "",
                        "  .menuCard span {",
                        "    margin: 10px;",
                        "  }",
                        "",
                        "  #promoHolderImg > img {",
                        "    width: 300px;",
                        "    height: 94px;",
                        "  }",
                        "",
                        "  #guideCard {",
                        "    max-height: 282px;",
                        "  }",
                        "",
                        "  .skinColorItem {",
                        "    transition: 1s;",
                        "    width: 23px;",
                        "    height: 23px;",
                        "    border: 3px solid #000;",
                        "  }",
                        "",
                        "  select {",
                        "    background: #000000;",
                        "    border-radius: 5px;",
                        "    border: 3px solid #006EC4;",
                        "    margin-bottom: 10px;",
                        "    color: #fff;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  select:hover {",
                        "    background: #ff8007;",
                        "    border: 3px solid #B20E0E;",
                        "  }",
                        "",
                        "  #pre-content-container {",
                        "    display: none!important;",
                        "  }",
                        "",
                        "  .actionBarItem {",
                        "    background-color: rgba(0,0,0,0.6) !important;",
                        "    border: 3px solid rgba(255,235,59,1);",
                        "    border-radius: 15px !important;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  .actionBarItem:hover {",
                        "    background-color: rgba(0,0,0,0.5) !important;",
                        "    border: 3px solid rgba(255,136,0,1);",
                        "    border-radius: 50px !important;",
                        "  }",
                        "",
                        "  .uiElement {",
                        "    background-color: rgba(0,0,0,0.6) !important;",
                        "    border: 3px solid rgba(234,0,255,1);",
                        "    border-radius: 50px !important;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  .uiElement:hover {",
                        "    background-color: rgba(0,0,0,0.5) !important;",
                        "    border: 3px solid rgba(0,95,255,1);",
                        "    border-radius: 0px !important;",
                        "  }",
                        "",
                        "  .resourceDisplay {",
                        "    background-color: rgba(0,0,0,0.6) !important;",
                        "    border: 3px solid rgba(255,255,0,0.9);",
                        "    border-radius: 50px !important;",
                        "    color: #A200FF;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
                        "    background-color: rgba(0,0,0,0.6) !important;",
                        "    border: 3px solid rgba(0,0,0,0.9);",
                        "    border-radius: 10px !important;",
                        "    color: #FF0000;",
                        "  }",
                        "",
                        "  #itemInfoHolder { ",
                        "    -webkit-text-stroke: transparent;",
                        "  }",
                        "",
                        "  .material-icons { ",
                        "    color: #000000;",
                        "    font-size: 31px;",
                        "    -webkit-text-stroke: 0.3px #fff;",
                        "  }",
                        "",
                        "  #altServer > a > i {",
                        "    font-size: 30px !important;",
                        "    -webkit-text-stroke: transparent !important;",
                        "  }",
                        "",
                        "  #ageBarBody {",
                        "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');",
                        "    border: 1px solid #fff",
                        "  }",
                        "",
                        "  #ageBar {",
                        "    background-color: rgba(0,0,0,0.6) !important;",
                        "    border: 1px solid rgba(0,0,0,0.9);",
                        "    height: 5px;",
                        "    padding-bottom: 10px;",
                        "  }",
                        "",
                        "  .actionBarItem {",
                        "    width: 65px;",
                        "    height: 65px;",
                        "    background-position: center; ",
                        "    background-size: 55px 55px;",
                        "  }",
                        "",
                        "  #aBox {",
                        "    color: #FF8C00!important;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  #chatBox::placeholder {",
                        "    color: #17FF00!important;",
                        "  }",
                        "",
                        "  #chatBox:hover {",
                        "    background: rgba(0,0,0,0.5)!important;",
                        "  }",
                        "",
                        "  #chatBox:hover::placeholder {",
                        "    color: #00FFFF!important;",
                        "  }",
                        "",
                        "  .ytLink:hover {",
                        "    color: #cc0000;",
                        "  }",
                        "",
                        "  #nameInput {",
                        "    background: #fff;",
                        "    border: 5px solid #00FF9E;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  #nameInput::placeholder {",
                        "    color: #00FF9E;",
                        "    transition: 0.5s;",
                        "  }",
                        "",
                        "  #nameInput:hover {",
                        "    background: #4ACA1A;",
                        "    color: #fff;",
                        "  }",
                        "",
                        "  #nameInput:hover::placeholder {",
                        "    background: #4ACA1A;",
                        "    color: #fff;",
                        "  }",
                        "",
                        "  #linksContainer2 {",
                        "    max-height: 500px;",
                        "    width: 250px;",
                        "  }",
                        "",
                        "  #linksContainer2 > * {",
                        "    display:table-cell;",
                        "    vertical-align:middle;",
                        "    text-align: center;",
                        "    width:700px;",
                        "  }",
                        "  ",
                        "  .storeTab, ",
                        "  #storeHolder, ",
                        "  #allianceHolder, ",
                        "  #allianceInput, ",
                        "  .allianceButtonM {",
                        "    background: rgba(0,0,0,0.6);",
                        "    border: 3px solid rgba(0,0,0,0.9);",
                        "  }",
                        "",
                        "  .storeItem, ",
                        "  .storeTab, ",
                        "  .allianceButtonM, ",
                        "  #allianceInput::placeholder, ",
                        "  .allianceItem {",
                        "    color: #FF8C00 !important;",
                        "  }",
                        "",
                        "  .storeItem, ",
                        "  .storeTab, ",
                        "  .allianceButtonM, ",
                        "  #allianceInput::placeholder, ",
                        "  .allianceItem, ",
                        "  .joinAlBtn {",
                        "    color: #FFF700 !important;",
                        "  }",
                        "",
                        "  .storeItem:hover, ",
                        "  .storeTab:hover, ",
                        "  .allianceButtonM:hover,",
                        "  .allianceItem:hover, ",
                        "  .joinAlBtn:hover {",
                        "    color: #F1F41D !important;",
                        "  }",
                        "",
                        "  #allianceInput, ",
                        "    color: #FF8C00;",
                        "  }",
                        "  ",
                        "  #allianceInput:hover {",
                        "    background: rgba(0,0,0,0.5);",
                        "    color: #fc9f9f;",
                        "  }",
                        "",
                        "  #allianceInput:hover::placeholder{",
                        "    color: #fc9f9f;",
                        "  }",
                        "",
                        "  #linksContainer2 > *:first-child {",
                        "    border-bottom: 3px solid #8B00FF;",
                        "  }",
                        "",
                        "  #moddedMenu {",
                        "    position: absolute;",
                        "    top: 30.25%;",
                        "    left: 0px;",
                        "    width: 3%;",
                        "    height: 45.0%;",
                        "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);",
                        "    border: 3px solid rgba(100,0,255,0.9);",
                        "    border-top-right-radius: 30px;",
                        "    border-bottom-right-radius: 0px;",
                        "    transition: 1s;",
                        "    z-index: 999;",
                        "  }",
                        "",
                        "  #moddedMenu:hover {",
                        "    width: 22%;",
                        "  }",
                        "",
                        "  .titleMM {",
                        "    color: #A20000;",
                        "    border-bottom: 3px solid #0030ff;",
                        "    font-size: 32px;",
                        "    transform: rotate(90deg);",
                        "    white-space: nowrap;",
                        "    margin-top: 250%;",
                        "    transition: 1s;",
                        "  }",
                        "",
                        "  #moddedMenu:hover > .titleMM {",
                        "    transform: rotate(0deg) translate(0,-1580%)",
                        "  }",
                        "",
                        "",
                        "  .text {",
                        "    bottom: 76%;",
                        "    position: absolute;",
                        "    color: #eee;",
                        "    font-size: 20px;",
                        "    left: 0%;",
                        "    display: none;",
                        "    transition: 1s;",
                        "  }",
                        "",
                        "  .text > b { ",
                        "    font-size: 20px;",
                        "    color: #ff6500;",
                        "  }",
                        "",
                        "  b:hover { ",
                        "    color: #ff0000;",
                        "  }",
                        "",
                        "  .one > .text {",
                        "    top: 5.5%;",
                        "  }",
                        "",
                        "  .two > .text {",
                        "    top: 10.7%;",
                        "  }",
                        "",
                        "  .three > .text {",
                        "    top: 37.5%;",
                        "  }",
                        "",
                        "  .four > .text {",
                        "    top: 47.5%;",
                        "  }",
                        "",
                        "  .five > .text {",
                        "    top: 57.5%;",
                        "  }",
                        "",
                        "  .six > .text {",
                        "    top: 67.5%;",
                        "  }",
                        "",
                        "  .seven > .text {",
                        "    top: 77.5%;",
                        "  }",
                        "",
                        "  .eight > .text {",
                        "    top: 87.5%;",
                        "  }",
                        "",
                        "",
                        "",
                        "  #moddedMenu:hover .switch {",
                        "    opacity: 1;",
                        "  }",
                        "",
                        "  #moddedMenu:hover .text {",
                        "    display: block;",
                        "  }",
                        "",
                        "",
                        "  .slider {",
                        "    position: absolute;",
                        "    cursor: pointer;",
                        "    background-color: #888;",
                        "    -webkit-transition: .4s;",
                        "    transition: .4s;",
                        "  }",
                        "",
                        "  .slider:before {",
                        "    position: absolute;",
                        "    background-color: orange;",
                        "    -webkit-transition: .4s;",
                        "    transition: .4s;",
                        "  }",
                        "",
                        "  input:checked + .slider {",
                        "    background-color: #FF8C00;",
                        "  }",
                        "  ",
                        "  input:focus + .slider {",
                        "    box-shadow: 0 0 1px #FF8C00;",
                        "  }",
                        "",
                        "  input:checked + .slider:before {",
                        "    -webkit-transform: translateX(26px);",
                        "    -ms-transform: translateX(26px);",
                        "    transform: translateX(10px);",
                        "  }",
                        "",
                        "  .slider.round {",
                        "    border-radius: 34px;",
                        "  }",
                        "",
                        "  .slider.round:before {",
                        "    border-radius: 50%;",
                        "  }"
                    ].join("\n");
                                 if (typeof GM_addStyle != "undefined") {
                                     GM_addStyle(css);
                                 } else if (typeof PRO_addStyle != "undefined") {
                                     PRO_addStyle(css);
                                 } else if (typeof addStyle != "undefined") {
                                     addStyle(css);
                                 } else {
                                     var node = document.createElement("style");
                                     node.type = "text/css";
                                     node.appendChild(document.createTextNode(css));
                                     var heads = document.getElementsByTagName("head");
                                     if (heads.length > 0) {
                                         heads[0].appendChild(node);
                                     } else {
                                         document.documentElement.appendChild(node);
                                     }
                                 }
                                })();
                },100)},1000);return id('adCard');},css:[['#adCard','background-color', 'rgba(0,0,0,0)'],['#insert','background-color', 'rgba(0,0,0,0)'],['#H_B','color', 'red'],['#serverBrowser','background-color','rgba(0,0,0,0)'],['#guideCard','background-color','rgba(0,0,0,0)'],['#setupCard','background-color','rgba(0,0,0,0)'],['#nameInput','background-color','rgba(0,0,0,0)'],['#nameInput','color','rgb(254, 28, 73)']]},
                {site:location.href.includes('slither'),cent:true,clear:true,parent:function(){return id('login')}},
                {site:location.href.includes('narwhale'),cent:false,clear:false,parent:function(){return id('adZone')}},
                {site:location.href.includes('starblast'),cent:false,clear:false,parent:function(){return id('content')}},
                {site:location.href.includes('surviv'),cent:true,clear:true,parent:function(){return id('ad-block-left')},css:[['#H_B','background-color', 'rgba(0,0,0,0)'],['#insert','background-color', 'rgba(0,0,0,0)'],['#H_B','color', 'red'],['#ad-block-left','background-color','rgba(0,0,0,0)']]},
                //{site:location.href.includes('roblox'),cent:false,clear:false,parent:function(){return clas('home-header')[0]}},
                {site:location.href.includes('agar'),cent:true,clear:true,parent:function(){return id('mainui-ads')}},
                {site:location.href.includes('paper-io'),cent:true,clear:true,parent:function(){return id('bottom')}},
                {site:location.href.includes('splix'),cent:true,clear:true,parent:function(){return id('newsboxContent')}},
                {site:location.href.includes('arras'),cent:true,clear:true,parent:function(){id('ad-spawn').remove();id('arras-io_336x280').remove();return document.getElementsByClassName('referral')[0]}},
            ];
            var a
            window.br=document.createElement('br')
            hb.onclick=function(){var ei;try{toggled(centy2);}catch(e){console.log('Failed',2,e)};try{toggled(centy)}catch(e){console.log('Failed',1,e)}}
            hb2.onclick=setup2
            function add_styles(){
                insert.className='script'
                H_B.className='script'
                H_B2.className='script'
                frame.className='script'
                frame.after(br)
                if (typeof GM_addStyle != "undefined") {
                    GM_addStyle(css);
                } else if (typeof PRO_addStyle != "undefined") {
                    PRO_addStyle(css);
                } else if (typeof addStyle != "undefined") {
                    addStyle(css);
                } else {
                    var node = document.createElement("style");
                    node.type = "text/css";
                    node.appendChild(document.createTextNode(`
iframe.script {
border: 2px solid red;
border-radius: 8px;
border-style: solid;
border-width: medium;
}
button.script{
border: 2px solid red;
border-radius: 8px;
border-style: solid;
border-width: medium;
background:black;
color:white
}
input.script::placeholder{color:red}
input.script{
border: 2px solid red;
border-radius: 8px;
border-style: solid;
border-width: medium;
border-width:0px;
color:black;
background: rgba(0, 0, 0, 0)
}`));
                    var heads = document.getElementsByTagName("head");
                    if (heads.length > 0) {
                        heads[0].appendChild(node);
                    } else {
                        document.documentElement.appendChild(node);
                    }
                }
            }
            function style(a,b,c){$(a).css(b,c);};
            function setup2(){var info=setplayer_(music_frame);document.getElementById('insert').value=info[0];imsub();}
            function place(a,b){try{a.placeholder=b}catch(err){}}
            window.setup3=function setup3(css){
                set(frame,'allow','autoplay; encrypted-media')
                set(frame,'frameborder','0')
                var bf=pendto
                var xcent=CE('center','centy3');
                if(canclear){pendto.innerHTML='';}
                if(vcent){
                    clearInterval(a);
                    a=setInterval(function(){
                        console.log('waiting')
                        try{
                            if(pendto){
                                clearInterval(a);
                                var p2=pendto
                                frame.src=localStorage.getItem('LP')
                                window.onunload=function(e){localStorage.setItem('LP',frame.src)}
                                console.log(pendto)
                                var cent=CE('center','centy');
                                pendto.appendChild(cent);
                                pendto=centy;
                                pendto.appendChild(br);
                                pendto.appendChild(frame);
                                pendto.appendChild(br);
                                pendto.appendChild(br);
                                pendto.appendChild(inputm);
                                pendto.appendChild(br);
                                pendto.appendChild(br);
                                clearInterval(a);
                                xcent.appendChild(br);
                                xcent.appendChild(hb)
                                xcent.appendChild(br)
                                xcent.appendChild(hb2)
                                p2.appendChild(xcent)
                                console.log('Done setting up')
                                console.log(started-performance.now())
                                add_styles()
                            }
                        }catch(e){console.error(e);}
                    },0)
                }
                else{
                    clearInterval(a);
                    a=setInterval(function(){
                        try{
                            if(pendto){
                                clearInterval(a);
                                var div=pendto;
                                pendto=CE('div','centy2');
                                pendto.appendChild(br);
                                pendto.appendChild(frame);
                                frame.src=localStorage.getItem('LP')
                                window.onunload=function(e){localStorage.setItem('LP',frame.src)}
                                pendto.appendChild(br);
                                pendto.appendChild(br);
                                pendto.appendChild(inputm);
                                div.appendChild(pendto)
                                div.appendChild(br);
                                div.appendChild(hb);
                                div.appendChild(br)
                                div.appendChild(hb2)
                                console.log('Done setting up')
                                alert('done')
                                console.log(started-performance.now());
                                add_styles();
                            }
                        }catch(e){console.error(e)}
                    },0)
                }

                setTimeout(function(){
                    if(css){
                        css.forEach(e=>{
                            style(e[0],e[1],e[2])
                        });
                    }
                    place(id('insert'),'insert song here');
                },1000)};
            test3.forEach(e=>{
                if(e.site){
                    pendto=window.pendto=e.parent();
                    vcent=window.vcent=e.cent
                    canclear=window.canclear=e.clear
                    console.log(e)
                    if(e.css){setup3(e.css);console.log('w/o')}else{setTimeout(window.setup3,100);console.log('found')};
                }
            });
        }
    }
}
Start();