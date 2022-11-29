// ==UserScript==
// @name         Auto download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://www.youtube.com/*
// @match         *://onlymp3.to/*
// @match         *://ytmp3.plus/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    //'use strict';

    function sk(){
        get_aria_label('Why this ad?').click();
        setTimeout(()=>{
            document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click();
            setTimeout(()=>{document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click();},1000)
        },1000)
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

    var Porigin='https://onlymp3.to'
    var Ppath='/watch?='
    function ad(listener,f,autoDelete=false){
        var _=addEventListener(listener,(...__)=>{f(...__);if(autoDelete)removeEventListener(_)},true)
        return _
    }
    function isElementInViewport(el) {

        // Special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 - (((window.innerHeight || document.documentElement.clientHeight) / 2)) &&
            rect.left >= 0 &&
            rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + ((window.innerHeight || document.documentElement.clientHeight) / 2)) && /* or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
        );
    }
    function tF(f,{callback,int}){
        !callback&&(callback=function(){});!int&&(int=100)
        console.log({f,callback,int})
        try{f();callback();return}catch(err){}
        var _=setInterval(()=>{try{f();callback();clearInterval(_)}catch(err){}},int||100)
        return _
    }
    function isHidden(el) {
        return (el.offsetParent === null)
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
    function parent(node){return node.parentNode}
    function getIds(){
        var list=[...document.getElementsByTagName('ytd-playlist-panel-renderer')].filter(isElementInViewport).filter(e=>!isHidden(e))[0]
        var ids=findhref2(list,'span').filter(e=>!isHidden(e)).filter(isElementInViewport).filter(e=>e.id=='video-title').map(parent).map(parent).map(e=>({id:setElement(findhref2(parent(e))[0].href),e}))
        return ids
    }
    _getIds=getIds
    info={}
    downloadT=async function(id,force=false,type=1){
        if((info[id]||localStorage[id])&&!force)return;
        var video={}
        var hash=`#url=https://www.youtube.com/watch?v=${id}`
        ad('unload',function(){info[id].close()},true)
        onmessage=function(e){
            if(e.origin==Porigin||e.origin.match(/https?:\/{2}onlymp3\.to/)||e.origin=='https://ytmp3.plus'){
                const {data:{href,title,length,id}}=e
                console.log('Handled',{href,title,length,id},e)
                //info[id].close()
                open(href)
                localStorage[id]=href
            }else console.log('Unhandled Post',e)
        }
        //`https://downvideo.quora-wiki.com/tiktok-video-downloader#url=https://www.youtube.com/watch?v=${id}`
        var o=new URL(location.href)
        o.host=o.host.replace('.com','mz.com');
        //open([o.protocol,'//',o.host,o.pathname,'?v=',setElement(location.href)].join(''))
        return info[id]=type?open([o.protocol,'//',o.host,o.pathname,'?v=',id,type?'#getmp3':'#getmp4'].join(''),id,`width=400,height=500`):open(['https://ytmp3.plus/103-youtube-to-mp4/#',id].join(''),id,`width=400,height=500`)
    }
    function abc(label, item = 'aria-label', doc = document.body) {
        var res = [];
        function part2(e) {
            var found=false
            if (!item) {
                [...e.attributes].map(e => {
                    const { name, value } = e;
                    return { name, value }
                }).filter(e => e.value == label).length ? (res.push(e),found=1) : null
            } else if (e.getAttribute(item) == label) {
                res.push(e);found=1;
            }
            if (e.children.length&&!found) {
                e = e.children;
                e.forEach = [].forEach;
                e.forEach(e2 => {
                    part2(e2);
                })
            }
        };
        part2(doc);
        return res.length == 1 ? res[0] : res || false;
    }
    function getElementByAttribute(label,item='aria-label',doc=document.body){
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
    function mtoggle(){document.querySelector('.ytp-volume-area > .ytp-mute-button').click()}
    function Mute(){abc('Mute (m)','title').click()}
    function Unmute(){abc('Unmute (m)','title').click()}
    M=Mute
    Um=Unmute
    var didmute=0
    function WIP(type){
    var list=[]
    for(let i=0;i<hmpd;i++){
        list.push(['w'+i,'win'+i])
    }
    getWin(
        list
    ).then(b=>{
        console.log('download',tittle,vid,a.index)
        window[b]=downloadT(id,0,type)
        window.addEventListener('unload',function(e){window[b].close()})
        var rr=setInterval(e=>{
            if(window[b].closed){window[b]=null;clearInterval(rr);console.log(b,'isclosed')}
        },300);
    })
    }
    if(location.href.includes('onlymp3.to')){
        ;(console.log('Getting MP3'),tF(function(f=function(){}){var a=videoTitle.innerText.split('\n'),l=a[1].match(/[:\d]+/gi)[1],t=a[0].split('Title: ')[1],h=findhref2(videoTitle.parentNode)[0].href,f={id:setElement(location.href),href:h,title:t,length:l};(opener||window).postMessage(f,'*')},{callback:close}))
        //(console.log('Getting MP4'),tF(function(f=function(){}){var a=videoTitle.innerText.split('\n'),l=a[1].match(/[:\d]+/gi)[1],t=a[0].split('Title: ')[1],h=findhref2(videoTitle.parentNode)[0].href,f={id:setElement(location.href),href:h,title:t,length:l};(opener||window).postMessage(f,'*')},{callback:close}))
        return
    }
    else if(location.href.includes('ytmp3.plus')){
        console.log('Getting MP4')
        var videoTitle=title.innerText
        onload=function(){input.value=['https://www.youtube.com/watch?v=',location.hash.slice(1)].join('');submit.click()}
        if(videoTitle=='Please insert a YouTube video URL')throw 'e'
        var href=buttons.children[0].href
        ;(console.log('Getting MP3'),tF(function(f=function(){}){var a=videoTitle.innerText.split('\n'),l=a[1].match(/[:\d]+/gi)[1],t=a[0].split('Title: ')[1],h=findhref2(videoTitle.parentNode)[0].href,f={id:setElement(location.href),href:h,title:t,length:l};(opener||window).postMessage(f,'*')},{callback:close}))
    }
    setInterval(e=>{
        document.getElementsByClassName("ytp-ad-button-icon")[0]&&!didmute&&(console.log('muted ad'),didmute=1,Mute());
        !document.getElementsByClassName("ytp-ad-button-icon")[0]&&didmute&&(console.log('unmuted video'),!function(){try{Unmute()}catch(err){console.warn('Failed unmuting')}}(),didmute=0);
        if(document.getElementsByClassName('ytp-ad-skip-button ytp-button').length==1){document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();;console.log('Skipped ad')}
        document.getElementsByClassName('ytp-ad-overlay-close-button')[2]&&(document.getElementsByClassName('ytp-ad-overlay-close-button')[2].click(),console.log('Close ad card'))
        // ad skipping ^^
    },10)
})();
