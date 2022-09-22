// ==UserScript==
// @name         Youtube mp3 and mp4 download working 2020-2021
// @namespace    http://tampermonkey.net/
// @version      0.37
// @description  Control q to save yt and control b to reset list of yt's saved.
// @author       You
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
// @match         *://install.globalpdfconvertersearch.com"/*
// @match        *://ncs.io/*
// @grant        none
// ==/UserScript==
//removed ad redirects
`
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require       http://code.jquery.com/jquery-1.11.0.min.js
`;

window.ta=document.getElementsByTagName('*')
    var allEqual = (arr,a) => arr.every( v => {return v === a} );
    var allEqual2 = (arr) => arr.every( v => v === arr[0] );
    window.ta.list=function(id,classname,tag){
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
function checkAd(urls){
    var tr=false;
    var item=[];
    urls.forEach(e=>{
        if(document.domain.includes(e)){tr=true;item.push(e)}
    })
    return [tr,item]
};
function toggleA(){
    var list=['download','download2','s3','s4','stpb']
    getElementByAttribute('Account profile photo that opens list of alternate accounts').click();
    setTimeout(e=>{
        var _items=sections[1].children[1].children.items.children
        _items.forEach(e=>{
            e.innerText.startsWith('Appearance')&&(e.click())
        })
        setTimeout(e=>{
            !!sections[2].children[0].children.items.children[2].children[0].children[0].children['content-icon'].children[1].children[0]?(list.forEach(e=>{window[e].style.color='black'}),console.log('Color:white'),sections[2].children[0].children.items.children[3].click()):(list.forEach(e=>{window[e].style.color='white'}),console.log('Color:dark'),sections[2].children[0].children.items.children[2].click());
        },200)
    },500)
}
function Getlobj(a,b=location.href){console.log('Got',a,':',(b).split(a).pop().split('=')[1].split('&')[0]);return (b).split(a).pop().split('=')[1].split('&')[0]};
window.Getlobj=Getlobj
function difinurl(a=window.location.href,b=window.oldurl,c){if(a.includes(c)&&b.includes(c))return false;else return true}
var badUrls=['www.get-express-vpn.online',
             'wildbearads.com',
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
            'deej.almeusciu.site']
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
var stop=false
playlist[0].children.container.children.items.children.forEach(e=>{
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
window[b]=open('https://y2mate.com/en48/#id="'+vid+'"{mysep}type="'+type+'"{mysep}name=`'+tittle+'`{mysep}discord='+!!fordiscord,b,`width:${window.innerWidth/2},height=${window.innerHeight/2}` )
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
async function Start(){
    if(checkAd(badUrls)[0]){/*alert('matches\n'+checkAd(badUrls)[1].join(' '));*/window.close();}
    await sleep(1000)
    if(window.location.href.includes('youtube')&&!window.location.href.includes('y2mate')){
        setupimg();
        setInterval(e=>{
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
            if(ta.list(undefined,undefined,'paper-button')[1].innerText.includes('BED'))
                setTimeout(e=>{window.close()},500)
            else {
                ta.list(undefined,undefined,'paper-button')[1].click();
                setTimeout(e=>{ta.list(undefined,'style-scope ytd-menu-service-item-renderer','paper-item')[0].click()},300)
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
            titles=ta.list('video-title',undefined,'span');
            links=ta.list(undefined,'yt-simple-endpoint style-scope ytd-playlist-video-renderer','a');
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
            if(ta.list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]=='MP3'||ta.list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]=='MP4'&&ta.list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[0]=='DOWNLOAD'){}else{clearInterval(looping)}
        };'y2mate.com/en48/'
        if(window.opener){n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o);download('https://y2mate.com/en48/#id="'+vid+'"&type=mp3',Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`)};
    }
    function opening(){
        type=ta.list('text-displayed',undefined,'yt-formatted-string')[0].innerText.split(' ')[1]
        if(ii<topen.length){
            if (!kko) {
                "'myWindow' has never been opened!";
                kko=open('https://y2mate.com/en48/#isopen=true&url="'+topen[ii].URL+'"&type="'+type.toLowerCase(),type+'"',`width:${window.innerWidth},height=${window.innerHeight}`);
                localStorage.setItem(topen[ii].URL,true);
                ii++
            }
            else {
                if (kko.closed) {
                    kk=open('https://y2mate.com/en48/#isopen=true&url="'+topen[ii].URL+'"&type='+type.toLowerCase(),type,`width:${window.innerWidth},height=${window.innerHeight}`);
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
        function saveyt(){cc=ta.list('container','style-scope ytd-channel-name','div')[0].innerText;bb=localStorage.getItem('yts').split(',');bb.push(cc);bb=dd(bb);localStorage.setItem('yts',bb)};
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
                        window[b]=open('https://y2mate.com/en48/#id="'+vid+'"{mysep}type="'+type+'"{mysep}name=`'+tittle+'`',b,`width:${window.innerWidth/2},height=${window.innerHeight/2}` );

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
                like();
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
                n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o); var mp4open=open2('https://y2mate.com/en48/#id="'+vid+'"{mysep}type="mp3"{mysep}name=`'+video_data.title+'`',Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`);var ee=setInterval(()=>{mp4open.closed&&(clearInterval(ee),eval(get('askip3'))&&(skipV()))})};
            var s2=new Element('button','download2');s2.style.backgroundColor='#ffffff00';s2.style.color='white';s2.innerText='Download video [MP4]';s2.onclick=function(event,discord){like();n=document.URL.split('&');o=n[0];p=n[1];q=n[2];vid=setElement(o); var mp4open=open2('https://y2mate.com/en48/#id="'+vid+'"{mysep}type="mp4"{mysep}name=`'+video_data.title+'`{mysep}discord='+(discord?!discord:!!eval(prompt('do u want to download for discord? 1=yes 0=no'))),Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),`width:${window.innerWidth},height=${window.innerHeight}`);Pause(); var ee=setInterval(()=>{mp4open.closed&&(clearInterval(ee),Play(),eval(get('askip4'))&&(skipV()))})};
            var r=document.getElementById('download');
            var r2=document.getElementById('download2');
            if(!r){z(document.getElementById('container'),s)}else{s=r;};
            if(!r2){z(document.getElementById('container'),s2);s2.parentNode.append(s3);s2.parentNode.append(s4);}else{s2=r2};
            window.download=s
            window.download2=s2;
            window.stpb=stpb
            window.s3=s3;window.s4=s4;
            u=localStorage.getItem('yts').split(',');
            w=ta.list('container','style-scope ytd-channel-name','div')[0].innerText
            function THIS_is_WIP(t,d){document.getElementsByClassName('ytp-chrome-controls')[0].style.display='none';document.getElementsByClassName('ytp-progress-bar-container')[0].style.display='none';}
            ww=document.getElementsByClassName('ytp-chrome-controls')[0];
            vv=document.getElementsByClassName('ytp-progress-bar-container')[0];
            ss=eval(ss);
            u.forEach(v=>{if(v==w&&y&&ss){s.click();y=false;}});
        };
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
            var channel_url=chan.children[0].children[0].children[0].children[0].href
            channel[0];
            channel=channel[0]
            var hash='';
            channel_name=channel.innerText
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
else if(location.href.startsWith('https://www.y2mate')&&window.location.hash){
    function csize(a,b=8){
        a[1]=a[1]=='MB'?1:a[1]=='KB'?0:null
        if(a[0]>b&&a[1]){
            return 0;
        }
        if(a[0]>b&&!a[1]){
            return 1;
        }
        if(a[0]<b&&a[1]){return 1}
        if(a[0]<b&&!a[1]){return 1}
    }
    function getW(){
        var tc=[]
    if(type=='mp3'){
        document.getElementsByTagName('tbody')[1].children.forEach=[].forEach
        document.getElementsByTagName('tbody')[1].children.forEach(e=>{
            try{var size=(e.children[1].innerText.split(' ')[0]=='MB'||e.children[1].innerText.split(' ')[0]=='KB')?0:e.children[1].innerText.split(' ')[0]*1;
                var size2=e.children[1].innerText.split(' ')[1]==undefined?e.children[1].innerText.split(' ')[0]:e.children[1].innerText.split(' ')[1]
                console.log(size,size2,csize([size,size2]),csize([size,size2])&&(tc.push(e.children[2].children[0])))
               }catch(err){}
        })
    }
    if(type=='mp4'){
        document.getElementsByTagName('tbody')[0].children.forEach=[].forEach
        document.getElementsByTagName('tbody')[0].children.forEach(e=>{
            try{var size=(e.children[1].innerText.split(' ')[0]=='MB'||e.children[1].innerText.split(' ')[0]=='KB')?0:e.children[1].innerText.split(' ')[0]*1;
                var size2=e.children[1].innerText.split(' ')[1]==undefined?e.children[1].innerText.split(' ')[0]:e.children[1].innerText.split(' ')[1]
                console.log(size,size2,csize([size,size2]),csize([size,size2])&&(tc.push(e.children[2].children[0])))
               }catch(err){}
        })
    }
        return tc[0]
    }
    var go=true
    try{decodeURIComponent(location.hash).split('#')[1].split('{mysep}').forEach(eval);}catch(err){location.reload(1)}
    setupimg();
    if(typeof discord==undefined+''){discord=0;}
    console.info('evaled location.hash')
    "&&!confirm(`you already have downloaded a ${type} version of this ${id} are you sure u want to continue`)";
    localStorage.getItem((id+type+(discord?'Dcord':null)).split('null').join(''))=='true'&&(go=false);;
    setInterval(e=>{
        if(location.href.split('#').pop()=='Done'){
            console.log('saved');
            setTimeout(e=>{window.close()},1000)
        }
        if(location.href.split('#').pop()=='Error'){alert('something went wrong with the download video id '+id);window.close()}
    },100)
    if(!go)(window.location.hash='Done')
    if(go){
        try{document.getElementById('txt-url').value=eval(typeof url)?url:typeof id?"https://www.youtube.com/watch?v="+id:window.location.hash='Done'}catch(err){location.reload(1)}
        document.getElementById('btn-submit').click();
        var r=setInterval(function(){
            try{result.innerText.includes('Sorry, we can not convert your video.')&&(window.location.hash='Error')}catch(err){}
            if(process_mp3_a){
                clearInterval(r);console.log('found');
                type=type.toLowerCase()
                if(window.discord&&!getW()){alert('there the no file size small enough for discord so this video will not be mark as already downloaded');window.close()}
                if(window.discord&&getW()){
                    getW().click();
                }else
                    if(type.toLowerCase()=='mp3'){
                        process_mp3_a.click();
                    }else
                    {
                        document.getElementsByClassName('btn btn-success')[0].click();
                    }
                r2=setInterval(function(){
                    try{document.getElementById('process-result').innerText.includes('Sorry, An error')&&(window.location.hash='Error')}catch(err){}
                    if(document.getElementsByClassName('btn btn-success btn-file')[0]){
                        setTimeout(function(){window.location.hash='Done'},2000);
                       try{ var e = window;
                        while (e.frameElement !== null) {e = e.parent;};
                        e.parent.focus();
                        window.opener.focus();                                //while this works occasionally (or momentarily) focus generally return to popup in > 50% of cases
                        window.opener.document.focus();                       //ditto
                        setTimeout(window.opener.focus(), 500);                //ditto
                        setTimeout(window.opener.document.focus(), 1000);     //ditto
                          }catch(err){}
                        localStorage.setItem((id+type+(discord?'Dcord':null)).split('null').join(''),true)
                        localStorage.setItem(name,id)
                        localStorage.setItem(id,name)
                        clearInterval(r2);
                        document.getElementsByClassName('btn btn-success btn-file')[0].click();};
                },100)
            }
        },1000)
        }
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
    else{alert('die');window.close()}
 }
Start();