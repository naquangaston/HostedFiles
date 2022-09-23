// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://downvideo.quora-wiki.com/*
// @match        *://converter.quora-wiki.com/*
// @include      /https?:\/{2}(r\d+\-+)([\-\w]+)\.googlevideo\.com\/videoplayback/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=downvideo.quora-wiki.com
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// ==/UserScript==
window.addE=addEventListener
addEventListener=function(...d){
    console.log({d})
    return addE(...d)
}
if(location.href.match(/https?:\/{2}(r\d+\-+)([\-\w]+)\.googlevideo\.com\/videoplayback/)){
    var a=document.createElement('a')
    a.href=location.href
    a.download='e.mp3'
    document.body.append(a)
    a.click(a.remove())
    setTimeout(()=>{
        opener.postMessage({href:location.href},'*')
    },3000)
    return
}
function post(){
    if(!document.getElementById('send')){
        location.href=videoID.src
    }
    send.click();
    var Porigin='https://www.youtube.com'
    var host=window.opener
    onmessage=function(e){
        if(e.origin==Porigin){
            console.log('Hnadled',e.data,e)
            const {data,data:{id}}=e;
            if(id){
                console.log('Got id')
                var _=setInterval(()=>{
                    try{
                        opener.postMessage({title:document.getElementsByClassName('lead')[0].innerText,data:[...document.getElementsByClassName('video-links')[0].children].map(e=>({
                            type:e.innerText.split('\n')[2],
                            size:e.innerText.split('\n').pop(),
                            res:e.innerText.split('\n')[1],
                            url:e.href
                        }))},'*')
                        clearInterval(_)
                    }catch(err){}
                })}

        }else console.log('Unhandled Post',e)
    }
    function s(){
        document.createElement=function(...d){
            let _=document.cE(...d)
            console.log({d})
            if(d[0]=='a'){
                _.click=function (){
                    console.log('get url',_.href,_.hasAttribute('download'))
                }
            }
            return _
        }
    }
    host.postMessage(location.hash,'*')
}
document.readyState=='complete'?post():onload=post;return