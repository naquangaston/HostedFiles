// ==UserScript==
// @name         Auto download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    //'use strict';

    var Porigin='https://downvideo.quora-wiki.com'
    var Ppath='/tiktok-video-downloader'
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
    info={}
    downloadT=async function(id,type='MP4'){
        if(info[id])return;
        var video={}
        var hash=`#url=https://www.youtube.com/watch?v=${id}`
        ad('unload',function(){info[id].close()},true)
        onmessage=function(e){
            if(e.origin==Porigin||e.origin.match(/https?:\/{2}(r\d+\-+)([\-\w]+)\.googlevideo\.com/)){
                const {data:{href,title,data}}=e
                console.log('Handled',data,e)
                e.data==hash&&(info[id].postMessage({id},'*'))
                title!=undefined&&(info[id].close(),(function({title,data}){
                    video.title=title
                    var videoData={}
                    var t=[]
                    data.forEach(({type,res,url,size})=>{
                        !videoData[type]&&(t.push(type),videoData[type]=[]),videoData[type].push({type,res,url,size})
                    })
                    console.log(videoData)
                    function f(_){
                        if(videoData[type]){
                            console.log(videoData[type].pop())
                            return videoData[type].pop()
                        }else if(_) return f(false,type=prompt(`video type not found:\nChose form the following:\n${t.join('|')}`))
                        else return (alert('Not found'),null)
                    }
                    var d=f(true)
                    console.log(d)
                    d!=null?(info[id]=open(d.url,'',`width=400,height=500`),video.data=d):null;
                })(e.data))
                href!=undefined&&(info[id].postMessage(video,'*'))
            }else console.log('Unhandled Post',e)
        }
        //`https://downvideo.quora-wiki.com/tiktok-video-downloader#url=https://www.youtube.com/watch?v=${id}`
        info[id]=open(`${Porigin}${Ppath}${hash}`,'',`width=400,height=500`)
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
    setInterval(e=>{
        document.getElementsByClassName("ytp-ad-button-icon")[0]&&!didmute&&(console.log('muted ad'),didmute=1,Mute());
        !document.getElementsByClassName("ytp-ad-button-icon")[0]&&didmute&&(console.log('unmuted video'),!function(){try{Unmute()}catch(err){console.warn('Failed unmuting')}}(),didmute=0);
        if(document.getElementsByClassName('ytp-ad-skip-button ytp-button').length==1){document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();;console.log('Skipped ad')}
        document.getElementsByClassName('ytp-ad-overlay-close-button')[2]&&(document.getElementsByClassName('ytp-ad-overlay-close-button')[2].click(),console.log('Close ad card'))
        // ad skipping ^^
    },10)
})();