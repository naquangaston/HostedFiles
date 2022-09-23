// ==UserScript==
// @name  .Discord profile ripper
// @namespace    http://tampermonkey.net/
// @version      0.19
// @description  Allows user to see profile icons of people in dicord server much more clearly. This mod will also resend failed attachments. Only work on the web version of discord
// @author       You
// @match        *://discord.com/*
// @includes        https://greasyfork.org/
// @match       *.greasyfork.org/*
// @grant        none
// ==/UserScript==
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
setInterval(setUser,30000)
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
        window.gname=function(a){return (a.src?a.src:a).split('.').pop().split('?')[0].split('/')[0];}
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
                name=items.name,
                url=test(urls[index].src),
                type=gname(url),
                option=document.createElement('option'),
                res.push({name:name,url:url}),
                option.value=url,
                option.innerText=name,
                Profiles.append(option),
                Mod_log(urls.length+'/'+index,type),
                Mod_log('adding '+name,' avatar '+url),
                open&&(add(`<div class='Profile'>
<br>
<span class='Status'>${items.status}</span><br>
<span class='name'>${items.name}</span><br>
<span class='server_nick'>${items.server_nick}</span><br>
<a title="${name}">
<img dl="${name+'_Discord'}" alt="${name}" src="${url}" width=256 height=256>
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
ta.list=function(id,classname,tag){
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
            (i<pfplist.length&&(win1.document.write(pfplist[i]),i++),!(i<pfplist.length)&&(clearInterval(reaDY),win1.focus(),win1.document.getElementsByTagName('img').forEach=[].forEach,win1.document.getElementsByTagName('img').forEach(e=>{e.onclick=function(e){e=e.path[0];downloadImage(e.getAttribute('dl'),e.src)}})))
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
                    var name=e.alt,type=url.split('/').pop().split('?')[0]
                    add(
                        `<div class='Profile'>
<br>
<span class='name'>${name}</span><br>
<a download="${name}_Discord.${type}" href="${url}" title="${name}">
<img alt="${name}" src="${url}" width=256 height=256>
</a>
<br>
<input size=36 value='${url}'>
<br>
</div>`
                    )});
                re(),ready(),win1.document.body.children[0].remove();
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
async function downloadImage(name,imageSrc) {const _0x2298=['href','createElement','140213fDjNXM','71869ozdfbj','10132fdBgUZ','removeChild','215178KMzgnC','createObjectURL','350873XsDZIv','90125jGbLmg','appendChild','blob','26397EvHSWI','body','2kiKwYB','1MsMPSE','click'];const _0x5918=function(_0x309946,_0x315a80){_0x309946=_0x309946-0xef;let _0x22985b=_0x2298[_0x309946];return _0x22985b;};const _0x300b78=_0x5918;(function(_0x16f780,_0x1ae9fc){const _0x528d39=_0x5918;while(!![]){try{const _0x1a1ede=-parseInt(_0x528d39(0xf9))+parseInt(_0x528d39(0xfb))*parseInt(_0x528d39(0xef))+-parseInt(_0x528d39(0xf3))+-parseInt(_0x528d39(0xf6))+parseInt(_0x528d39(0xf5))*parseInt(_0x528d39(0xfc))+-parseInt(_0x528d39(0xf1))+-parseInt(_0x528d39(0xf0));if(_0x1a1ede===_0x1ae9fc)break;else _0x16f780['push'](_0x16f780['shift']());}catch(_0x4b7349){_0x16f780['push'](_0x16f780['shift']());}}}(_0x2298,0x351fe));const image=await fetch(imageSrc),imageBlog=await image[_0x300b78(0xf8)](),imageURL=URL[_0x300b78(0xf4)](imageBlog),link=document[_0x300b78(0xff)]('a');link[_0x300b78(0xfe)]=imageURL,link['download']=name,document[_0x300b78(0xfa)][_0x300b78(0xf7)](link),link[_0x300b78(0xfd)](),document[_0x300b78(0xfa)][_0x300b78(0xf2)](link);}
window.downloadImage=downloadImage;