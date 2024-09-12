// ==UserScript==
// @name         Gaston's - Video/Image Downloader
// @namespace    http://tampermonkey.net/
// @version      5.7
// @description  Instagram/Twitch/Youtube/tiktok Video/Audio Downloader alwayts updated
// @author       gaston1799
// @match         *://www.youtube.com/*
// @match         *://www.instagram.com/*
// @match         *://music.youtube.com/*
// @match         *://y2mate.nu/*
// @match         *://www.twitch.tv/*
// @match         *://loader.to/*
// @match         *://onlymp3.app/*
// @match         *://qdownloader.cc/*
// @match         *://tubemp4.is/*
// @match         *://snapsave.io/*
// @match         *://clips.twitch.tv/*
// @match         *://onlymp3.to/*
// @match         *://fastdl.app/*
// @match         *://en.onlymp3.app/*
// @match         *://clipr.xyz/*
// @match         *://studio.youtube.com/*
// @match         *://www.yt2conv.com/*
// @match         *://soundcloud.com/*
// @match         *://sclouddownloader.net/*
// @match         *://www.tiktok.com/*
// @match         *://en3.onlinevideoconverter.pro/*
// @match         *://savetik.co/*
// @match         *://yt5s.biz/*
// @match         *://sss.instasaverpro.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_deleteValue
// @grant   GM_addValueChangeListener
// @grant   GM_removeValueChangeListener
// @run-at document-start
// ==/UserScript==
(function(){
    class CustomLogging {
        constructor(title) {
            this.title = {
                body: title || "---",
                color: "darkgrey",
                size: "1rem"
            }
            this.body = {
                color: "#008f68",
                size: "1rem"
            };
        }

        setTitleBody(title) {
            this.title.body = title;
            return this;
        }

        setTitleStyle({ color, size }) {
            if (color !== undefined) this.title.color = color;
            if (size !== undefined) this.title.size = size;
            return this;
        }

        setBodyStyle({ color, size }) {
            if (color !== undefined) this.body.color = color;
            if (size !== undefined) this.body.size = size;
            return this;
        }

        log(body = "") {
            console.log(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size};`,
                `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size}; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
            );
        }
    }
    Object.assign(this || arguments[0], { CustomLog: CustomLogging })
})(globalThis);

const logger = new CustomLog("Script Logger");
function downloadFileAsTitle(url, filename) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
var sleep=ms=>new Promise(a=>setTimeout(a,ms))
console.log('ok')
var CurrentPlayingSymbol='▶'
function getV(a,v){return GM_getValue(a)||(GM_setValue(a,v),v)}
function setV(a,v){GM_setValue(a,v)}

async function getFinalUrlFromServer(url) {
    try {
        const response = await fetch('http://localhost:3000/get-final-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch final URL');
        }

        const data = await response.json();
        return data.finalUrl;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

_getV=getV
_setV=setV
//wip for soundcload
/*
async function wfs(s,t){
    let sleep=(ms)=>new Promise(a=>setTimeout(a,ms));
    return await new Promise(async (a,b)=>{
        var d=!1
        var c=()=>(d=0,b())
        let _=setTimeout(c,t)
        while(!document.querySelector(s)){
            await sleep()
            if(d){b();break}
        }
        return a()
    }).then(e=>true,e=>false)
}
if(location.pathname=='/download-sound-track'){
    document.querySelector('.btn.sc-btn').click()
        close()
}
else{
var input1='#urlInput'
var button1='#submitBtn'
await wfs(input1,2000)
if(await wfs(input1,2000)){
    document.querySelector(input1).value=url
    document.querySelector(button1).click()
}
}*/
Number.prototype.decimal=function(places){
    return Number(this.toFixed(places))
}
getSoundCloudUrl=()=>{
    try{return findhref2(document.querySelector("#app > div.playControls.g-z-index-control-bar.m-visible > section > div > div.playControls__elements > div.playControls__soundBadge.sc-ml-3x > div"))[0].href}catch{return void 0}
}
function getCurrentVideoID(){
    var id
    [...document.getElementsByClassName('ytp-video-menu-item ytp-button')].forEach((e,t)=>{
        e.innerText.startsWith(CurrentPlayingSymbol)&&(
            id=new URL(e.href).searchParams.get('v')
        )
    })
    if(!id&&document.getElementsByClassName('ytp-playlist-menu-button ytp-button')[0]){
        console.log('Opening')
        document.getElementsByClassName('ytp-playlist-menu-button ytp-button')[0].click();
        return getCurrentVideoID()

    }else return id?(console.log('Closiung'),document.getElementsByClassName('ytp-playlist-menu-button ytp-button')[0].click(),id):console.warn('Not Found!')
}

!async function(){
    async function wfs(s,tm=30000){
        var b
        sleep(tm).then(e=>b=true)
        while(!document.querySelector(s)){
            await sleep(0)
            if(b)break;
        }
        return document.querySelector(s)
    }
    if(location.href.includes('/embed/')){
        console.log('Attaching to embeder >:]')
        return wfs('.ytp-right-controls').then(async e=>{
            let a=new _e('button',{id:"embedMP3"}).appendTo(e).set('innerText','MP3').on('click',function(){
                let id=getCurrentVideoID()||setElement(location.href)
                downloadT(id,false,true,false,true)
            }).style({
                position:'fixed',
                right:'50%',
                top:'80%'
            })
            while(!document.getElementById('embedMP3')&&document.querySelector('.ytp-right-controls')){
                console.log('Appended')
                a.appendTo('.ytp-right-controls')
            }
        })
    }
    document.querySelector('.ytp-right-controls')
    return await wfs('.playbackSoundBadge__actions',5000).then(async e=>{
        let a=new _e('button',{id:"GetAudio"}).appendTo(e).set('innerText','Download MP3').on('click',function(){
            downloadSC()
        },e=>e)
        while(true){
            if(!document.getElementById('GetAudio') && await wfs('.playbackSoundBadge__actions',5000)){
                await wfs('.playbackSoundBadge__actions',5000).then( e=>{
                    a.appendTo(e)
                    console.log('Added Button')
                })
            }
            await sleep(0)
        }
    })
}().then(console.log,console.warn)
var adev,set_
downloadSC=function(){
    GM_setValue('SCinfo',null)
    GM_setValue('sc',getSoundCloudUrl())
    !set_?(set_=1,GM_addValueChangeListener('SCinfo',function(a,b,c,d){
        console.log({a,b,c,d})
        if(c&&c.name){
            _downloadFileAsTitle(c.href,c.name)
        }
    })):null
    open('https://sclouddownloader.net/')
}
function sleep(ms){return new Promise(a=>setTimeout(a,ms))}
GM_setValue_=GM_setValue
GM_getValue_=GM_getValue
GM_info_=GM_info
var UnmutePath='M3.15,3.85l4.17,4.17L6.16,9H3v6h3.16L12,19.93v-7.22l2.45,2.45c-0.15,0.07-0.3,0.13-0.45,0.18v1.04 c0.43-0.1,0.83-0.27,1.2-0.48l1.81,1.81c-0.88,0.62-1.9,1.04-3.01,1.2v1.01c1.39-0.17,2.66-0.71,3.73-1.49l2.42,2.42l0.71-0.71 l-17-17L3.15,3.85z M11,11.71v6.07L6.52,14H4v-4h2.52l1.5-1.27L11,11.71z M10.33,6.79L9.62,6.08L12,4.07v4.39l-1-1V6.22L10.33,6.79 z M14,8.66V7.62c2,0.46,3.5,2.24,3.5,4.38c0,0.58-0.13,1.13-0.33,1.64l-0.79-0.79c0.07-0.27,0.12-0.55,0.12-0.85 C16.5,10.42,15.44,9.1,14,8.66z M14,5.08V4.07c3.95,0.49,7,3.85,7,7.93c0,1.56-0.46,3.01-1.23,4.24l-0.73-0.73 C19.65,14.48,20,13.28,20,12C20,8.48,17.39,5.57,14,5.08z'
var mutePath='M17.5,12c0,2.14-1.5,3.92-3.5,4.38v-1.04c1.44-0.43,2.5-1.76,2.5-3.34c0-1.58-1.06-2.9-2.5-3.34V7.62 C16,8.08,17.5,9.86,17.5,12z M12,4.07v15.86L6.16,15H3V9h3.16L12,4.07z M11,6.22L6.52,10H4v4h2.52L11,17.78V6.22z M21,12 c0,4.08-3.05,7.44-7,7.93v-1.01c3.39-0.49,6-3.4,6-6.92s-2.61-6.43-6-6.92V4.07C17.95,4.56,21,7.92,21,12z'
_downloadFileAsTitle=async function (url, title,win,cb) {
    // Create a hidden anchor element
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    // Fetch the file data
    return fetch(url)
        .then(response => response.blob())
        .then(blob => {
        // Create an object URL from the blob
        const objectUrl = URL.createObjectURL(blob);

        // Set anchor attributes
        anchor.href = objectUrl;
        anchor.download = title;
        anchor.target = '_blank';
        // Programmatically click the anchor element to trigger download
        anchor.click();

        // Clean up the object URL
        URL.revokeObjectURL(objectUrl);

        ;(win||opener||window).postMessage({url,title,s:true},'*');
        (typeof cb).includes('function')&&(cb());
    })
        .catch(error => {

        console.error('Error downloading file:', error);
        ;(win||opener||window).postMessage({url,title,s:false},'*')

    });
}
function downloadFile_(url, name) {
    // Create an 'a' element
    const a = document.createElement('a');

    // Set the 'href' attribute to the provided URL
    a.href = url;

    // Set the 'download' attribute to the provided name
    a.download = name;

    // Append the 'a' element to the document body
    document.body.appendChild(a);

    // Programmatically click the 'a' element to trigger the download
    a.click();

    // Remove the 'a' element from the document body
    document.body.removeChild(a);
}
_downloadFile_=downloadFile_
query=function(a,d){
    try{
        let c=typeof $!='undefined'?$:document.querySelectorAll
        return !d?((b)=>Object.keys(b).length?b:null)(c(a)?c(a).length?c(a)[0]:c(a):null):[...document.querySelectorAll(a)].filter(e=>!(el.offsetParent === null))[0]
    }catch{}
}
getElementByAttribute=function getElementByAttribute(label,item='aria-label',doc=document.body){
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
get_aria_label=function(label,doc=document.body){
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
getClass=function(name_){
    return document.getElementsByClassName("ehlq8k34")[0]
}
async function downloadVideo(url,title) {
    try {
        // Fetch the URL, allowing fetch to follow redirects
        const response = await fetch(url);

        // Check if the response is okay (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Get the final URL after following redirects
        const finalUrl = response.url;

        // Create a blob from the response
        const blob = await response.blob();

        // Create a URL for the blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a link element and set its href to the blob URL
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download =title; // Set the desired file name

        // Append the link to the document body and click it to start download
        document.body.appendChild(link);
        link.click();

        // Clean up and revoke the object URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);

        console.log(`Video downloaded from: ${finalUrl}`);
    } catch (error) {
        console.error('Failed to download video:', error);
    }
}

;(function() {
    //'use strict';
    class element {
        static get br() {
            return new element("br");
        }
        constructor(name, obj) {
            //findhref2(id('skin-message'))[0].constructor.name

            this.element = name.constructor.name.includes('HTML')&&(name)||(function () {
                for (let i in arguments[1]) {
                    arguments[0].setAttribute(i, arguments[1][i]);
                }
                return arguments[0];
            })(document.createElement(arguments[0]), arguments[1]);
        }
        style(obj) {
            for (let i in obj) {
                this.element.style[i] = obj[i];
            }
            return this;
        }
        append(target,...targets) {
            this.element.append(target.element || target);
            console.log("T:",{targets,fe:targets&&targets.forEach})
            for(let i=0;i<targets.length;i++){
                let a=targets[i];
                console.log('Appending:',{element:a,target:this})
                this.element.append(a.element || a);
            }
            return this;
        }
        appendTo(target) {
            (target.element || typeof target=='string'?document.querySelector(target):target).append(this.element);
            return this;
        }
        on(event, a) {
            this.element[`on${event}`] = a;
            return this;
        }
        set(prop, value) {
            this.element[prop] = value;
            return this;
        }
        remove() {
            this.element.remove();
            return this;
        }
        get() {
            return this.element[arguments[0]];
        }
        get children() {
            return new (class $ {
                constructor(arr) {
                    for (var i = 0; i < arr.length; i += 1) {
                        this[i] = arr[i];
                    }

                    // length is readonly
                    Object.defineProperty(this, "length", {
                        get: function () {
                            return arr.length;
                        }
                    });

                    // a HTMLCollection is immutable
                    Object.freeze(this);
                }
                item(i) {
                    return this[i] != null ? this[i] : null;
                }
                namedItem(name) {
                    for (var i = 0; i < this.length; i += 1) {
                        if (this[i].id === name || this[i].name === name) {
                            return this[i];
                        }
                    }
                    return null;
                }
                get toArray() {
                    return [...this];
                }
            })([...this.element.children]);
        }
    }
    _element=_e=element
    function getTikTokTittle(){
        try{
            return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > div.css-1d7krfw-DivOverflowContainer.e1mzilcj5 > h1").innerText.replace('Replying to ','')
        }catch{
            try{
                return document.querySelector("#app > div.css-14dcx2q-DivBodyContainer.e1irlpdw0 > div:nth-child(4) > div > div.css-1qjw4dg-DivContentContainer.e1mecfx00 > div.css-1stfops-DivCommentContainer.ekjxngi0 > div > div.css-1xlna7p-DivProfileWrapper.ekjxngi4 > div.css-1u3jkat-DivDescriptionContentWrapper.e1mecfx011 > div.css-1nst91u-DivMainContent.e1mecfx01 > div.css-bs495z-DivWrapper.e1mzilcj0").innerText.replace('Replying to ','')
            }catch(err){
                return abc('browse-video-desc','data-e2e')?abc('browse-video-desc','data-e2e').innerText:document.querySelector("#main-content-video_detail > div > div.css-12kupwv-DivContentContainer.ege8lhx2 > div.css-1senhbu-DivLeftContainer.ege8lhx3 > div.css-1sb4dwc-DivPlayerContainer.eqrezik4 > div.css-3lfoqn-DivDescriptionContentWrapper-StyledDetailContentWrapper.eqrezik15 > div.css-r4nwrj-DivVideoInfoContainer.eqrezik3 > div.css-bs495z-DivWrapper.e1mzilcj0 > div > h1").innerText.replace('Replying to ','')
            }
        }
    }
    function sk(){
        get_aria_label('Why this ad?').click();
        setTimeout(()=>{
            document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(2) > div.LLEp8b > div > div.rTq3hb > div:nth-child(1) > div > div.ofmULb > div:nth-child(2) > div > button").click();
            setTimeout(()=>{document.querySelector("#VGHGFf > div > div.Eddif > div:nth-child(2) > button > div.VfPpkd-RLmnJb").click();},1000)
        },1000)
    }
    setElement2=function (string){return string.match(/(?<host>https?\:\/\/www\.tiktok\.com)\/(?<username>@[^\/]+)\/video\/(?<videoID>\d+)/i).groups}
    var Porigin='https://onlymp3.app'
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
        var _=setInterval(()=>{try{f();callback();clearInterval(_);}catch(err){}},int||100)
        return _
    }
    function isHidden(el) {
        return (el.offsetParent === null)
    }
    setElement = function(url) {
        return (String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)&&String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8].length==11)? String(url).match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(shorts\/))\??v?=?([^#\&\?]*).*/)[8]: false;
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
    getInstalImages=function(){
        return document.querySelectorAll('._acaz')
    }
    getInstaVideo=function(){
        return document.querySelector('video.x1lliihq')
    }
    function GP(){
        return get_aria_label('Go back')?get_aria_label('Go back').click?get_aria_label('Go back'):document.querySelector('._afxv'):document.querySelector('._afxv')
    }
    function GN(){
        return get_aria_label('Next')?get_aria_label('Next').click?get_aria_label('Next'):document.querySelector('._afxw'):document.querySelector('._afxw')
    }
    function getTitle(){
        try{return document.querySelector("div.x78zum5.xdt5ytf.x1iyjqo2.xs83m0k.x2lwn1j.x1odjw0f.x1n2onr6.x9ek82g.x6ikm8r.xdj266r.x11i5rnm.x4ii5y1.x1mh8g0r.xexx8yu.x1pi30zi.x18d9i69.x1swvt13 > ul > div:nth-child(3) > div > div").children[0].innerText.split('\n')[1]}catch{
            return [...document.querySelectorAll('.xt0psk2.xvs91rp.xo1l8bm.x5n08af.x18hxmgj')].pop().innerText.split('\n')[0]
        }
    }
    downloadVideoFromBlob=function (videoElement,title) {
        if (videoElement && videoElement.src && videoElement.src.startsWith('blob:')) {
            // Create a MediaStream from the video element
            const stream = videoElement.captureStream();
            const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];

            // Capture data when available
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    chunks.push(event.data);
                    console.log(event.data)
                }
            };

            // When the recording stops, create a download link
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/mp4' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = title+'.mp4';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };

            // Start recording
            mediaRecorder.start();

            // Stop recording after the video duration
            setTimeout(() => {
                mediaRecorder.stop();
            }, videoElement.duration * 1000);
        } else {
            console.error('Invalid video element or source.');
        }
    }
    function DIV(){
        if(location.href.includes('reel')){
            let _=open('https://fastdl.app/en',location.href,`width=400,height=500`)
            var listener=GM_addValueChangeListener('instaURL',function(a,b,c,d){
                if(!!c){
                    console.log('Got',{a,b,c,d})
                    _.close()
                    GM_removeValueChangeListener(listener)
                    downloadFile_(c,document.title+'.mp4')
                    GM_setValue('instaURL',null)
                }
            })
            }
        //downloadVideoFromBlob(getInstaVideo(),getTitle())
    }
    async function DII_(){
        var sleep=(a)=>new Promise(b=>setTimeout(b,a))
        var srcs=new Set(),obj={}
        while(GP()){
            await sleep(100)
            if(GP())GP().click()
            else {
                await sleep(1000)
                break;
            };
        }
        var length=[...srcs].length
        ;[...getInstalImages()].forEach(e=>{
            let a=findhref2(e,'img')[0]
            srcs.add([a.src,a.getAttribute('alt')])
        })
        GN().click()
        try{GN().click()}catch(err){}

        while(GN()){
            await sleep(300)
            ;;[...getInstalImages()].forEach(e=>{
                let a=findhref2(e,'img')[0]
                srcs.add([a.src,a.getAttribute('alt')])
            })
            try{GN().click()}catch(err){}
            length=[...srcs].length
        }
        while(true){
            await sleep(100)
            if(GP())GP().click()
            else break;
        }
        ;[...srcs].forEach(e=>{
            obj[e[0]]=e[1]
        });
        srcs=Object.keys(obj).map(e=>({src:e,name:obj[e]}));
        srcs.forEach(e=>{
            var ext=new URL(e.src).pathname.split('.').pop()
            downloadFileAsTitle(e.src,`${e.name}.${ext}`)
        })
        console.log('done',srcs)
    }
    function DII(){
        DII_().then(console.log,console.warn)
    }
    console.log('A?')
    const sleep=ms=>new Promise(a=>setTimeout(a,ms))
    if(document.domain=='fastdl.app'){
        onload=async function(){
            async function wfs(a){
                while(!document.querySelector(a))await sleep(0);
                return document.querySelector(a)
            }
            function DAIE(target, value) {
                const inputEvents = ['focus', 'input', 'change', 'blur'];

                inputEvents.forEach(eventName => {
                    let ev=new Event(eventName, { bubbles: true, isTrusted: true })
                    if(target[`on${eventName}`])target[`on${eventName}`](ev)

                    if (eventName === 'input') {
                        target.value = value;
                    }
                    target.dispatchEvent(ev);
                });
            }
            const info={
                url:name,
                input:null
            }
            var cancel=false
            var timeOut=setTimeout(()=>{
                cancel=true
            },20000)
            while(!document.querySelector('#search-form-input')){
                await sleep(0)
                if(cancel)throw "Cant find input"
            }
            info.input=document.querySelector('#search-form-input')
            console.log('Found a')
            DAIE(info.input,info.url);
            document.querySelector('.search-form__button').click()
            GM_setValue('instaURL',await wfs('.button--filled').then(e=>e.href))
        }
    }
    else if(document.domain=='soundcloud.com'){
        getSoundCloadI=function(){
            _setV('SC',getSoundCloudUrl())
            var b_=open('https://sclouddownloader.net/','SC')
            b_.onclose=function(r){
                console.log('Win closed')
            }

        }
        return
    }
    else if(document.domain=='studio.youtube.com'){
        return void function(){
            var item
            var list
            var forB
            var __;
            var loop=setInterval(()=>{
                var l
                try{
                    var item = [...document.querySelectorAll('#video-list')].map(e=>[e, [...e.classList]]).filter(e=>e[1].includes("ytcp-video-section"))[0][0];
                    var list = [...item.children[1].children].map(e=>[e, [...e.classList], e.tagName]).filter(e=>e[2] == 'YTCP-VIDEO-ROW')


                    list.filter(e=>{
                        return e[0].children[0].querySelectorAll('.cell-body.tablecell-visibility.style-scope.ytcp-video-row')[0].innerText=='Public'
                    }).map(e=>e[0].children[0].querySelectorAll('.cell-body.tablecell-visibility.style-scope.ytcp-video-row')[0]).forEach(e=>{
                        console.log(e)
                        e.append(new _e('br').element)
                        var b=new _e('button').set('innerText','Get').on('click',function(e){
                            alert('Doesnt work yet')
                            const {id,href,isShort}=findhref2(e.target.parentElement.parentElement).map(e=>({href:e.href,short:e.href.includes('/short'),id:setElement(e.href)})).filter(e=>e.id)[0]
                            downloadT(id,false,true,false,false,isShort?new URL(href):null)
                        })
                        e.append(b.element)
                    })
                    l=true
                }catch{l=false}
                if(__!=l)__=l,console.log('Change?',l?"Found":"Not FOund")
            },0)
            //forB[0].innerText.incluides('Public')
            }()
    }
    else if(document.domain=='www.instagram.com'){
        var int;
        function setButtons(){
            console.log('Appended buttons man')
            var container=new element(document.querySelectorAll('.xh8yej3.x1iyjqo2')[0])
            var button=new element('button',{id:"MediaButton"}).set('innerText','Get Images').on('click',DII)
            var button2=new element('button',{id:"MediaButton2"}).set('innerText','Get Videos').on('click',DIV)
            container.append(button,button2)
        }
        function setButtons2(){
            var container=new element(document.querySelector('._aaqy'))
            var button=new element('button',{id:"MediaButton"}).set('innerText','Get Images').on('click',DII)
            var button2=new element('button',{id:"MediaButton2"}).set('innerText','Get Videos').on('click',DIV)
            container.append(button,button2)
        }
        tF(function(){
            document.querySelectorAll('.xh8yej3.x1iyjqo2')[0].children
        },{callback:function(){
            setButtons();
            setInterval(()=>{
                if(!document.querySelector('#MediaButton'))setButtons()
                if(document.querySelector('._aaqy')&&!document.querySelector('._aaqy').querySelector('#MediaButton'))setButtons2();
            })
        }})
        console.log('Insta ballz')
        return
    }
    else if(document.domain=='sclouddownloader.net'){
        (async function (){
            var url=_getV('sc')
            async function wfs(s,t){
                let sleep=(ms)=>new Promise(a=>setTimeout(a,ms));
                return await new Promise(async (a,b)=>{
                    var d=!1
                    var c=()=>(d=0,b())
                    let _=setTimeout(c,t)
                    while(!document.querySelector(s)){
                        await sleep()
                        if(d){b();break}
                    }
                    return a()
                }).then(e=>true,e=>false)
            }
            if(location.pathname=='/download-sound-track'){
                await wfs('#trackTitle')
                while(!trackTitle.innerText.length)await sleep(0)
                await wfs('#trackLink')
                while(!trackLink.href.length)await sleep(0)
                var info={
                    name:trackTitle.innerText,
                    href:trackLink.href
                }
                console.log(info)
                _setV('SCinfo',info)
                close()
            }
            else{

                if(!_getV('SC'))throw "Bruv"
                var input1='#urlInput'
                var button1='#submitBtn'
                await wfs(input1,2000)
                if(await wfs(input1,2000)){
                    document.querySelector(input1).value=url
                    console.log('EZ url',!!window.formSubmit)
                    while(typeof formSubmit=='undefined'){
                        try{await sleep(0),console.log('EZ url',formSubmit);}catch{}
                    }
                    console.log('EZ url',formSubmit)
                    formSubmit()
                    console.warn('Got')
                    setInterval(formSubmit,1000)
                }
            }
        })().then(console.log,console.warn)
    }
    else if (document.domain == 'y2mate.nu') {
        location.pathname.split('/')[1]!=GM_getValue('y2mate.nu')&&(GM_setValue('y2mate.nu',location.pathname.split('/')[1]),console.warn('updated'))
        let id_ = new URL(location.href).searchParams.get('v');
        let IsShort = new URL(location.href).searchParams.get('s') == 1;
        let mp4 = new URL(location.href).searchParams.get('mp4')
        let useT = new URL(location.href).searchParams.get('useT')
        let _=id_+mp4 + useT
        const sleep=ms=>new Promise(a=>setTimeout(a,ms))
        async function wfs(a, ms = 5000) {
            let o = false;
            setTimeout(() => {
                console.log('TimeOut for', a);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                console.log('_', a, o);
                await sleep(500);
                if (o) break;
            };

            console.log(a, o);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }

        !async function() {
            while (document.readyState != 'complete') await sleep(0);
            if (id_) {
                let post = async (a) => {
                    console.log('a', a);
                    var href = findhref2(document.forms[0])[0].href;
                    var title = findhref2(document.forms[0], 'div')[0].innerText;
                    var f = {_, id: id_, href, title, length: {} };
                    console.log('Posted',f);
                    (opener || window.parent).postMessage(f, '*');
                    close()
                }

                try {
                    await wfs('#url').then(e => {
                        console.log('e', e);
                        e.value = IsShort ? `https://www.youtube.com/watch?v=${id_}` : `https://www.youtube.com/shorts/${id_}`;
                        e.parentElement.children[1].click();
                    }).catch(post);

                    console.log('after url');

                    await wfs('#progress').then(async e => {
                        while (document.querySelector(`#${e.id}`)) { await sleep(0); }
                        console.log('a_');
                    }).catch(post);

                    console.log('b');
                } catch (error) {
                    console.warn('Error:', error);
                }
            } else {
                console.warn('No id Found');
            }
        }().then(console.log, console.warn);
        return;
    }
    else if (document.domain == 'qdownloader.cc'){
        const sleep=ms=>new Promise(a=>setTimeout(a,ms))
        async function wfs(a, ms = 20000) {
            let o = false;
            setTimeout(() => {
                console.log('TimeOut for', a);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                console.log('_', a, o);
                await sleep(500);
                if (o) break;
            };

            console.log(a, o);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }
        function dispatchAllInputEvents(target, value) {
            const inputEvents = ['focus', 'input', 'change', 'blur'];

            inputEvents.forEach(eventName => {
                let ev=new Event(eventName, { bubbles: true, isTrusted: true })
                if(target[`on${eventName}`])target[`on${eventName}`](ev)

                if (eventName === 'input') {
                    target.value = value;
                }
                target.dispatchEvent(ev);
            });
        }
        let cr = document.createElement;
        document._createElement = function(tagName, options) {
            let r = cr.call(document, tagName, options); // Ensure correct context
            r._click = r.click;
            r.click = function() {

                console.log(r, 'was clicked', r.tagName);
                if('A'==r.tagName){
                    console.log('Caught',r)
                    let title=r.download
                    let href=r.href
                    f={
                        id:new URL(location.href).searchParams.get('v'),
                        href,
                        title
                    };
                    //(opener||window).postMessage(f,'*');
                    //close()
                }
                else r._click.apply(r); // Ensure correct context
            };
            console.log(r, 'was created', r.tagName);
            return r;
        };
        !async function(){
            if(location.href.includes('vidbutton'))throw 'vidbutton'
            GM_setValue('dlbutton','')
            GM_addValueChangeListener('dlbutton',async function(a,b,c,d){
                console.log({a,b,c,d})
                if(c.includes('video download successful\ncheck downloads folder')){
                    await sleep(1000)
                    close()
                }
            })
            let url=await wfs('#url')
            let button=await wfs('#downloadBtn')
            id_=new URL(location.href).searchParams.get('v')
            let v=`https://www.youtube.com/watch?v=${id_}`
            dispatchAllInputEvents(url,v)
            button.click();
        }().then(console.log,async e=>{
            if(e=='vidbutton'){
                console.log('Best Quality Video')
                await wfs('#height').then(e=>{
                    height.selectedIndex=height.options.length-1
                    dlbutton.click()
                    open=window.open
                    window.open=function(a,b,c){
                        console.log({a,b,c})
                    }
                    wfs('#dlbutton').then(dlbutton=>{
                        var text='';
                        var loop=setInterval(e=>{
                            if(text!=dlbutton.innerText){
                                text=dlbutton.innerText
                                GM_setValue('dlbutton',text)
                            }
                        })
                        })
                })
            }
        })
    }
    else if (document.domain == 'snapsave.io'){
        async function wfs(a, ms = 20000) {
            let o = false;
            setTimeout(() => {
                console.log('TimeOut for', a);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                console.log('_', a, o);
                await sleep(500);
                if (o) break;
            };

            console.log(a, o);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }
        _wfs=wfs
        !async function(){
            var input=await wfs('#s_input',30000)
            if(input){
                console.log('Converting')
                id_=new URL(location.href).searchParams.get('v')
                input.value=`https://www.youtube.com/watch?v=${id_}`
                ksearchvideo()
                setTimeout(ksearchvideo(),1000)
                var formatSelect=await wfs('#formatSelect')
                var btn_action=await wfs('#btn-action')
                formatSelect.selectedIndex=0
                formatSelect.options[0].selected=true
                var asuccess=await wfs('#asuccess')
                while(!(asuccess=await wfs('#asuccess')))await sleep(0)
                convertFile(0)
                while(asuccess.getAttribute('href')=='#')(await sleep(0),asuccess=await wfs('#asuccess'))
                console.log(asuccess.href)
                var title=(await _wfs('.clearfix')).querySelector('h3').innerText
                var f = { id: id_, href:asuccess.href, title, length: {} };
                console.log('Posted',f);
                (opener || window).postMessage(f, '*');
                //close()
            }else{
                alert('Input was not Found')
                console.warn('?!!')
            }
        }().then(console.log).catch(console.warn)
        return
    }
    else if (document.domain == 'clips.twitch.tv'){
        const sleep=ms=>new Promise(a=>setTimeout(a,ms))
        async function wfs(a, ms = 20000) {
            let o = false;
            setTimeout(() => {
                console.log('TimeOut for', a);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                console.log('_', a, o);
                await sleep(500);
                if (o) break;
            };

            console.log(a, o);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }
        _wfs=wfs
        function copyElm(element) {
            if (!(element instanceof Element)) {
                throw new Error("Provided argument is not a DOM element.");
            }

            // Create a new element of the same type
            const newElement = document.createElement(element.tagName);

            // Copy all attributes
            for (let attr of element.attributes) {
                newElement.setAttribute(attr.name, attr.value);
            }

            // Copy all styles
            newElement.style.cssText = element.style.cssText;

            // Copy class list
            newElement.className = element.className;

            // Copy inner HTML content
            newElement.innerHTML = element.innerHTML;

            return newElement;
        }
        _copyElm=copyElm
        ;(async function(){
            let l=location.href
            let origin=(await _wfs('.ScCoreButtonLabel-sc-s7h2b7-0')).parentElement.parentElement.parentElement.parentElement
            let p1080=new _e(_copyElm(origin)).on('click',function(){
                open((o=>o.href)((o=>(o.host='clipr.xyz',o))(new URL(location.href))),'1080')
            }).appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='1080P'
            let p720=new _e(_copyElm(origin)).on('click',function(){
                open((o=>o.href)((o=>(o.host='clipr.xyz',o))(new URL(location.href))),'720')
            }).appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='720P'
            let p480=new _e(_copyElm(origin)).on('click',function(){
                open((o=>o.href)((o=>(o.host='clipr.xyz',o))(new URL(location.href))),'480')
            }).appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='480P'
            let p4360=new _e(_copyElm(origin)).on('click',function(){
                open((o=>o.href)((o=>(o.host='clipr.xyz',o))(new URL(location.href))),'360')
            }).appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='360P'
            let pvod=new _e(_copyElm(origin)).on('click',function(){
                open((o=>o.href)((o=>(o.host='clipr.xyz',o))(new URL(location.href))),'VOD')
            })
            .appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='VOD'
            })().catch(console.warn)
    }
    else if(document.domain == 'www.twitch.tv'){
        let [None,user,clip,clipID]=location.pathname.split('/')
        if(clip!='clip') return console.warn('User isnt wathcing a clip')
        console.log('User is Watching a CLip')
        const sleep=ms=>new Promise(a=>setTimeout(a,ms))
        async function wfs(a, ms = 20000) {
            let o = false;
            setTimeout(() => {
                console.log('TimeOut for', a);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                console.log('_', a, o);
                await sleep(500);
                if (o) break;
            };

            console.log(a, o);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }
        _wfs=wfs
        _wfs_=wfs
        function copyElm(element) {
            if (!(element instanceof Element)) {
                throw new Error("Provided argument is not a DOM element.");
            }

            // Create a new element of the same type
            const newElement = document.createElement(element.tagName);

            // Copy all attributes
            for (let attr of element.attributes) {
                newElement.setAttribute(attr.name, attr.value);
            }

            // Copy all styles
            newElement.style.cssText = element.style.cssText;

            // Copy class list
            newElement.className = element.className;

            // Copy inner HTML content
            newElement.innerHTML = element.innerHTML;

            return newElement;
        }
        _copyElm=copyElm
        ;(async function(){
            let l=location.href
            await _wfs('.Layout-sc-1xcs6mc-0 .bMOhzu')
            let origin =(document.querySelectorAll('.Layout-sc-1xcs6mc-0 .bMOhzu')[1])
            let qs='a'

            let p1080=new _e(_copyElm(origin)).on('click',function(){
                open((o=>(o.host='clipr.xyz',o.pathname=o.pathname.replace('/'+user+'/clip',''),o.search='',o))(new URL(location.href)).href,'1080')
            }).appendTo(origin.parentNode).element.querySelector(qs).innerText='1080P'
            let p720=new _e(_copyElm(origin)).on('click',function(){
                open((o=>(o.host='clipr.xyz',o.pathname=o.pathname.replace('/'+user+'/clip',''),o.search='',o))(new URL(location.href)).href,'720')
            }).appendTo(origin.parentNode).element.querySelector(qs).innerText='720P'
            let p480=new _e(_copyElm(origin)).on('click',function(){
                open((o=>(o.host='clipr.xyz',o.pathname=o.pathname.replace('/'+user+'/clip',''),o.search='',o))(new URL(location.href)).href,'480')
            }).appendTo(origin.parentNode).element.querySelector(qs).innerText='480P'
            let p4360=new _e(_copyElm(origin)).on('click',function(){
                open((o=>(o.host='clipr.xyz',o.pathname=o.pathname.replace('/'+user+'/clip',''),o.search='',o))(new URL(location.href)).href,'360')
            }).appendTo(origin.parentNode).element.querySelector(qs).innerText='360P'
            let pvod=new _e(_copyElm(origin)).on('click',function(){
                open((o=>(o.host='clipr.xyz',o.pathname=o.pathname.replace('/'+user+'/clip',''),o.search='',o))(new URL(location.href)).href,'VOD')
            })
            .appendTo(origin.parentNode).element.querySelector('.ScCoreButtonLabel-sc-s7h2b7-0').innerText='VOD'
            })().catch(console.warn)
    }
    else if (document.domain == 'clipr.xyz'){

        async function wfs(a, ms = 20000) {
            let o = false;
            setTimeout(() => {
                logger.log(`TimeOut for ${a}`);
                o = true;
            }, ms);

            while (!document.querySelector(a)) {
                logger.log(`_ ${a} ${o}`);
                await sleep(500);
                if (o) break;
            }

            logger.log(`${a} ${o}`);
            if (o) throw 'NotFound';
            return document.querySelector(a);
        }

        async function wfl(){
            while(document.readyState != 'complete'){
                await sleep(0)
            }
            return true;
        }

        const _wfs = wfs;

        (async function(){
            let p = name;
            await wfl();
            logger.log('Loaded');
            let href = ({
                1080: document.querySelector('body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(1) > div:nth-child(3) > a').href,
                720: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(2) > div:nth-child(3) > a").href,
                480: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(3) > div:nth-child(3) > a").href,
                360: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(4) > div:nth-child(3) > a").href,
                VOD: document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.overflow-hidden.bg-white.rounded-xl.shadow > div > div > div:nth-child(2) > ul > div > li:nth-child(5) > div:nth-child(3) > a").href
            })[p];

            logger.log(1);
            let user = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > p > span:nth-child(1)").innerText;
            logger.log(2);
            let title = document.querySelector("body > div.relative.overflow-hidden > main > div > div.px-4.mx-auto.max-w-7xl.sm\\:px-6.lg\\:px-8 > div.mb-6.space-y-3.lg\\:flex.lg\\:items-center.lg\\:justify-between.lg\\:space-y-0 > div.lg\\:flex.lg\\:items-center > h2").innerText;
            logger.log(3);
            let filename = `@${user} on Twitch | ${title} - ${p}P.mp4`;

            logger.log(`Downloading file as: ${filename}`);
            open(href)

            logger.log(4);
            await sleep(4000)
            close();
        })().catch(console.warn);

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function downloadFileAsTitle(url, filename) {
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = filename;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }
        return
    }
    else if(location.href.includes("tubemp4.is")){
        console.log('ok')

        async function wfs(s,tm=30000){
            var b
            sleep(tm).then(e=>b=true)
            while(!document.querySelector(s)){
                await sleep(0)
                if(b)break;
            }
            return document.querySelector(s)
        }
        wfs('#u').then(async u=>{
            u.value=`https://www.youtube.com/watch?v=${new URL(location.href).searchParams.get('v')}`;
            convert.click()
            await sleep(200)
            ;(await wfs('#convert')).click();
            ;(await wfs('.process-button')).click()
            wfs('.download-button').then(e=>{
                let a=null
                let cr = document.createElement;
                document.createElement = function(tagName, options) {
                    let r = cr.call(document, tagName, options); // Ensure correct context
                    r._click = r.click;
                    r.click = function() {

                        console.log(r, 'was clicked', r.tagName);
                        if('A'==r.tagName){
                            console.log('Caught',r)
                            let title=r.download
                            let href=r.href
                            f={
                                id:new URL(location.href).searchParams.get('v'),
                                href,
                                title
                            };
                            (opener||window).postMessage(f,'*');
                            close()
                        }
                        else r._click.apply(r); // Ensure correct context
                    };
                    console.log(r, 'was created', r.tagName);
                    return r;
                };
                e.click()
                console.log('clicked')
                setTimeout(()=>e.click(),1000)
            })
        }).then(console.log,console.warn)
    }
    console.log('B?')
    function getIds(){
        if(document.domain.includes("music")){alert('These button dont work on youtube music yet');throw "."}
        var list=[...document.getElementsByTagName('ytd-playlist-panel-renderer')].filter(isElementInViewport).filter(e=>!isHidden(e))[0]
        var ids=findhref2(list,'span').filter(e=>!isHidden(e)).filter(isElementInViewport).filter(e=>e.id=='video-title').map(parent).map(parent).map(e=>({id:setElement(findhref2(parent(e))[0].href),e}))
        return ids
    }
    _getIds=getIds
    info={}
    function downloadFileAsTitle(url, filename) {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
    var ev
    downloadT=function(id,force=false,useT=true,mp4=false,manual=false,urlOBJ=''){
        let _=id+(mp4?"mp4":"mp3") + useT
        !((a)=>a&&a.remove())(document.getElementById(_))
        if((localStorage[_])&&!force&&(manual?!confirm(`You have already download this video as .${mp4?"mp4":"mp3"}\nStill download?`):true))return;
        let l_=(urlOBJ||location)
        var o=new URL(location.href)
        o.host=o.host.replace('.com','mz.com');
        console.log('o',o)
        let altUrl=['https://y2mate.nu/'+(GM_getValue('y2mate.nu')||'0HzX')+'/','?v=',id,'&s=',o.pathname.startsWith('/shorts/')?1:0,'&mp4=',mp4?"mp4":"mp3",'&useT=',useT]
        console.log(_,altUrl)
        var video={}
        var hash=`#url=https://www.youtube.com/watch?v=${id}`
        ad('unload',function(){info[id].close()},true)
        onmessage=function(e){
            if(e.origin==Porigin||e.origin.match(/https?:\/{2}onlymp3\.to/)||e.origin.match(/https?:\/{2}en\.onlymp3\.to/)||e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)||e.origin=='https://sss.instasaverpro.com'||e.origin=="https://y2mate.nu"||e.origin=="https://snapsave.io"||e.origin=='https://tubemp4.is'){
                const {data:{href,title,length,id,_}}=e
                let n=(title)+(mp4?".mp4":".mp3")
                !((a)=>a&&a.remove())(document.getElementById(_))
                console.log('Handled',{href,title,length,id,_},e)
                //info[id].close()
                button.set("innerText","Get MP3")
                button.set("disabled",false)
                if(useT){
                    //downloadFileAsTitle(href,(title)+(mp4?".mp4":".mp3"))
                    console.log('Getting video')
                    downloadFileAsTitle(href,n)

                }
                else open(href);
                localStorage[_]=href
            }else console.log('Unhandled Post',e)
        }
        //`https://downvideo.quora-wiki.com/tiktok-video-downloader#url=https://www.youtube.com/watch?v=${id}`
        //open([o.protocol,'//',o.host,o.pathname,'?v=',setElement(location.href)].join(''))
        return info[id]=mp4?
            open((l_).pathname.startsWith('/shorts/')?"https://yt5s.biz/enxj100/":`https://qdownloader.cc/youtube-video-downloader.html?v=${id}`,[id,l_.pathname.startsWith('/shorts/')?1:0,mp4+false],`width=400,height=500`)
        :!function(){
            var frame = new _e('iframe', {
                src: altUrl.join(''),
                id: _,
                useT,
                loading: "lazy",
                referrerpolicy: "no-referrer",
                allowfullscreen: true,
                sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                allow: "autoplay; fullscreen; geolocation; microphone; camera"
            }).style({
                border: 0,
                position: 'absolute',
                // Optional: width and height set to 0 to make the iframe visually disappear but still load content
                width: 0,
                height: 0,
                // Optional: move the iframe offscreen if you don't want to set width and height to 0
                // top: '-9999px',
                // left: '-9999px',
                // Ensure the iframe does not capture pointer events
                'pointer-events': 'none',
                // Set maximum opacity
                opacity: 1
            });
            ev=GM_addValueChangeListener('y2mate.nu',function(a,b,c,d){
                altUrl=['https://y2mate.nu/'+(GM_getValue('y2mate.nu')||'0HzX')+'/','?v=',id,'&s=',o.pathname.startsWith('/shorts/')?1:0,'&mp4=',mp4?"mp4":"mp3",'&useT=',useT]
                frame.set('src',altUrl.join(''))
            })
            frame.appendTo(document.body);
            frame.closed=false;
            return frame
        }()
    }
    var tiktikWin
    async function waitTT(){
        while(tiktikWin&&!tiktikWin.closed)await sleep(0);
        return 1
    }

    downloadTikTok=function(a,b){
        (async function(mp4,info){
            await waitTT()
            console.log('ez')
            let id=info.videoID
            let user=info.username
            let title_=getTikTokTittle()
            onmessage=function(e){
                if(e.origin==Porigin||e.origin.match(/https?:\/{2}savetik\.csavetik.coo/)||e.origin.match(/https?:\/{2}en\.onlymp3\.to/)||e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)||e.origin=="https://savetik.co"){
                    var {data:{href,links,title,length,id,mp4,info:{username}}}=e
                    console.log('Handled',{href,title,length,id,links,mp4},e)
                    //info[id].close()
                    if(e.origin=="https://savetik.co"){
                        title=title_
                        downloadFileAsTitle(mp4?links[0]:links.pop(),username+" - "+title+(mp4?'.mp4':".mp3"),tiktikWin)
                    }else{
                        if(useT){
                            let a=document.createElement('a')
                            a.download=title+'.mp3'
                            a.href=href
                            document.body.appendChild(a)
                            a.click()
                            a.remove();
                        }
                        else open(href);
                        localStorage[_]=href
                    }
                }else console.log('Unhandled Post',e)
            }
            tiktikWin=open("https://savetik.co/en",[`https://www.tiktok.com/${user}/video/${id}`,mp4+false],`width=400,height=500`)
        })(a,b).then(console.log,console.warn)
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
        return res.length?res.length == 1 ? res[0] : res || false :null
    }
    abc_=abc
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
    function Mute(){
        (abc('Mute','title')&&(abc('Mute','title')[0])||abc('Mute (m)','title')).click()
    }
    function Unmute(){
        ((query('#right-controls')&&query('#right-controls').querySelectorAll('path')[0].getAttribute('d')==UnmutePath&&(abc('Mute','title')[0]))||abc('Unmute','title')||abc('Unmute (m)','title')).click()
    }
    M=Mute
    Um=Unmute
    var didmute=0
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
    window.ch3=ch3;
    async function getWin(list=[
        ['w1','win1'],
        ['w2','win2'],
        ['w3','win3'],
        ['w4','win4']
    ])
    {
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
    function WIP(hmpd,mp4,force){
        if(!mp4)return alert('This button is corrently broken')
        if(!hmpd);
        var ids=_getIds()
        var list=[]
        for(let i=0;i<hmpd;i++){
            list.push(['w'+i,'win'+i])
        }
        ids.forEach(({id},index)=>{
            getWin(
                list
            ).then(b=>{
                if((info[id]||localStorage[id])&&!force)return;
                console.log('download',id,index)
                window[b]=downloadT(id,force,true,!!mp4)
                window.addEventListener('unload',function(e){window[b].close()})
                var rr=setInterval(e=>{
                    if(!window[b] || window[b].closed){window[b]=null;clearInterval(rr);console.log(b,'isclosed')}
                },300);
            })
        })
    }
    WIP_=WIP
    var button = (new element('button')).set("innerText","Get MP3").on('click',function(e){
        button.set("innerText","Wait...")
        button.set("disabled",true)
        downloadT(setElement(location.href),true,true,false,true)})
    var button2 = (new element('button')).set("innerText","Get MP4").on('click',function(e){downloadT(setElement(location.href),true,true,true,true)})
    var button3 = (new element('button')).set("innerText","PlayList MP3").on('click',function(e){WIP_(2,false,false)})
    var button4 = (new element('button')).set("innerText","PlayList MP4").on('click',function(e){WIP_(2,true,false)})
    var tiktokButton=(new element('button')).set("innerText","Get MP4").on('click',function(e){downloadTikTok(true,setElement2(getClass("ehlq8k34")?getClass("ehlq8k34").innerText:location.href))}).style({color:'white'})
    var tiktokButton3=(new element('button',{id:"tt1"})).set("innerText","Get MP4").on('click',function(e){downloadTikTok(true,setElement2(getClass("ehlq8k34")?getClass("ehlq8k34").innerText:location.href))}).style({color:'white'})
    var tiktokButton2=(new element('button')).set("innerText","Get MP3").on('click',function(e){
        downloadTikTok(false,setElement2(getClass("ehlq8k34")?getClass("ehlq8k34").innerText:location.href))
    }).style({color:'white'})
    function _ex_(){
        return document.querySelector('#end')||document.querySelector('#right-content')
    }
    console.log('bruh')
    function appendButtons(){
        const MainButtonContainer=_ex_()
        console.log(MainButtonContainer)
        button.appendTo(MainButtonContainer)
        button2.appendTo(MainButtonContainer)
        console.log('Posted Buttons')
        function _ex(){
            try{

                if([...document.querySelectorAll('#header-description')].filter(isElementInViewport).filter(e=>!isHidden(e))[0]||query('.autoplay'))//.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0]
                    return [...document.querySelectorAll('#header-description')].filter(isElementInViewport).filter(e=>!isHidden(e))[0]||query('.autoplay')
                else return false
            }
            catch(err){
                return false
            }
        }
        var exist=false
        setInterval(()=>{
            if(exist!=_ex() && _ex()){
                console.log("Added playlist buttons")
                setTimeout(()=>{
                    _ex().append(element.br.element);
                    _ex().append(button3.element);
                    _ex().append(button4.element)
                },100)
            }else
                if(exist!=_ex() && !_ex()){
                    console.log("buttons are gone?!?!")
                }
            exist=_ex()
        },100)
    }
    a1=[
        ["youtube",function(){tF(function(){
            let b=_ex_()
            if(!_ex_()) throw "Cant append buttons yet";
            return (console.log('Posting'),true,appendButtons())
        },{callback:function(){}})}],
        ["tiktok",function(){
            addEventListener("load",function(){
                tF(function(){

                    if(!abc_('browse-copy','data-e2e'))throw "Cant Append";
                    tiktokButton.appendTo(document.querySelectorAll('.e1mecfx011'))
                    tiktokButton2.appendTo(document.querySelectorAll('.e1mecfx011'))
                },{callback:function(){}})
                tF(function(){
                    if(!document.getElementsByClassName("e13wiwn60")[0])throw "Cant Append";
                    tiktokButton.appendTo(document.getElementsByClassName("e13wiwn60")[0])
                    tiktokButton2.appendTo(document.getElementsByClassName("e13wiwn60")[0])
                    console.log('Posted Buttons')
                    function _ex(){
                        try{

                            if(abc_('browse-copy','data-e2e').parentNode)//.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0]
                                return abc_('browse-copy','data-e2e').parentNode
                            else return false
                        }
                        catch(err){
                            return false
                        }
                    }
                    var exist=false
                    setInterval(()=>{
                        if(exist!=_ex() && _ex()){
                            console.log("Added playlist buttons")
                            setTimeout(()=>{
                                _ex().append(element.br.element);
                                _ex().append(tiktokButton.element);
                                _ex().append(tiktokButton2.element)
                            },100)
                        }else
                            if(exist!=_ex() && !_ex()){
                                console.log("buttons are gone?!?!")
                            }
                        exist=_ex()
                    },100)

                },{callback:function(){}})
            })
        }]
    ].filter(e=>location.host.includes(e[0]))[0];a1&&a1[1]&&(a1[1]());
    console.log(a1)
    delete a1;
    __ex_=_ex_
    if(location.href.includes('onlymp3.app')||location.href.includes('onlymp3.to')){
        console.log('onlymp3.app')
        let callback=function(){};
        function b_(){
            var [id,shorts]=name.split(',')
            txtUrl.value=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}${id}`
            getListFormats();
        }
        function a_(){
            var a=videoTitle.innerText.split('\n'),
                l=a.map(e=>e.match(/[:\d]+/gi)).filter(e=>!!e).pop().pop(),
                t=a[0].split('Title: ')[1],
                h=findhref2(videoTitle.parentNode)[0].href,
                f={
                    id:setElement(location.href),
                    href:h,
                    title:t
                    ,length:l
                };
            (opener||window).postMessage(f,'*')
            console.log('Poasted')
        }
        setInterval(()=>{
            if(document.getElementById('error-text').innerText.length>5)location.reload();
        },20000)
        console.log('Getting MP3')
        tF(function(f=function(){}){
            b_()
            tF(function(f=function(){}){
                a_()
            },{callback:close})
        },{callback:function(){}})
        return
    }
    else if(location.href.includes("www.yt2conv.com")){
        console.log('Getting MP4')
        let [id,shorts]=name.split(',')
        tF(function(f=function(){}){
            var input=document.getElementById('search_txt')
            input.value=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}${id}`
            document.getElementById('btn-submit').click()
            console.log(id,shorts)
        },{callback:function(){}})
        tF(function(f=function(){}){
            console.log(result.children.length)
            if(!result.children.length){document.getElementById('btn-submit').click();throw "no there"}
        },{int:1000,callback:function(){}})
        tF(function(){
            document.getElementById('btn-download').click()
        },{callback:function(){}})
        tF(function(){
            var title=$('.media-heading')[0].innerText
            var href=downloadbtn.href
            var f={id,href,title,length:{}};
            console.log('Posted')
            ;(opener||window).postMessage(f,'*')
        },{callback:close})
    }
    else if(location.href.includes('yt5s.biz')){
        async function wfs(s){
            while(!document.querySelector(s)){
                await sleep(0)
            }
            return true
        }
        !async function(){
            let [id,shorts]=name.split(',')
            if(id.length&&shorts.length){}else return console.warn('No info Preset')
            var YTurl=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}${id}`
            await wfs('#txt-url')
            console.log('Input Loaded')
            document.querySelector('#txt-url').value=YTurl
            await wfs('#btn-submit')
            console.log('GEtting res')
            await sleep(100)
            document.querySelector('#btn-submit').click()
            await wfs('#video_title')
            console.log('Got Res')
            var title=document.querySelector('#video_title').innerText
            var maxres=[0]
            ;[...document.querySelector('#result').querySelector('table').querySelectorAll('tr')].forEach(e=>{
                var res=e.innerText.match(/(?<res>\d+)(p|P)/i)||{}
                if(res.groups){
                    res=Number(res.groups.res)
                    if(maxres[0]<res)maxres[0]=res,maxres[1]=findhref2(e)[0].href,maxres[2]=e
                }
            })
            return {id,title,href:maxres[1],mp4:true,res:maxres[0]}
        }().then(function(e){
            ;(opener||window).postMessage(e,'*')
            location.href=e.href
        },console.warn)
    }
    else if(location.href.includes("sss.instasaverpro.com")){
        !async function(){
            async function wfs(s){
                while(!document.querySelector(s)){
                    await sleep(0)
                }
                return true
            }
            await wfs('#A_downloadUrl')
            while(!document.querySelector('#A_downloadUrl').href.length)(await sleep(0));
            console.log('Done')
            var title=document.querySelector('#myModalLabel').innerText
            var e={href:document.querySelector('#A_downloadUrl').href,title}
            ;(opener||window).postMessage(e,'*')
        }().then(close,console.warn)
    }
    else if(location.href.includes("en3.onlinevideoconverter.pro")){
        let [id,shorts]=name.split(',')
        if(id.length&&shorts.length){}else return console.Warn('NO info Preset')
        var YTurl=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}${id}`
        let callback=function(){};
        tF(function(f=function(){}){
            var input=document.getElementById('texturl')
            input.value=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}${id}`
            document.getElementById('convert1').click()
            console.log('Searched')
        },{callback})
        tF(function(){
            if(stepProcess.style.display=='none'){
                document.getElementById('convert1').click()
                throw "this"
            }
            console.log('Searching')
        },{callback})
        tF(function(){
            if(document.getElementById('form-app-root').children.length==0)throw ""
            console.log('loaded')
            var{title,href}=$('#download-720-MP4')?$('#download-720-MP4')[0]?$('#download-720-MP4')[0]:$('#download-720-MP4'):$('#download-720-MP4')
            var f={id,href,title,length:{}};
            console.log('Posted')
            ;(opener||window).postMessage(f,'*')
        },{callback:close})

    }
    else if(location.href.includes("savetik.co")){
        var [id,mp4]=name.split(",")
        addEventListener("load",function(){
            tF(function(){
                s_input.value=id
                ksearchvideo()
                setTimeout(ksearchvideo,1000)
            },{callback(){}})
        })
        function Fin(){
            console.log("Found")
            let title=document.getElementsByClassName("clearfix")[0].innerText
            let links=findhref2(document.getElementsByClassName("tik-video")[0]).map(e=>e.href)
            let f={title,links,mp4:mp4==1,info:setElement2(id)}
            let Porigin='https://www.tiktok.com'
            onmessage=function(e){
                if(e.origin==Porigin){
                    var {data:{s,url,title}}=e
                    console.log('Handled',{s,url,title},e)
                    if(!s){
                        downloadFileAsTitle(url,title,null,close)
                    }else setTimeout(close,100)
                    //info[id].close()
                }else console.log('Unhandled Post',e)
            }
            ;(opener||window).postMessage(f,'*')
            //setTimeout(close,100)
        }

        tF(function(){document.getElementsByClassName("clearfix")[0].innerText;Fin()},{callback(){}})
    }
    else if(document.domain.includes('music')){
        console.log('Added MiniPlayer Toggle with I')
        addEventListener('keypress',function({isTrusted,ctrlKey,shiftKey,code,target,target:{tagName}}){
            if(!['INPUT','TEXTAREA'].includes(tagName)&&!ctrlKey&&!shiftKey&&isTrusted&&code=='KeyI'){
                (abc_('Close player page')||abc_('Open player page')[1]).click()
            }
        })
    }
    else if(document.domain.includes('loader.to')&&location.href.includes('/api/')){
        console.warn('using loader.to api')
    }

    // Create a trusted types policy
    const policy = window.trustedTypes && trustedTypes.createPolicy('trustedHTMLPolicy', {
        createHTML: (input) => input,
        createScriptURL: (input) => input,
    });

    const styleContent = `
    /* Default iframe styles */
    #cardApiIframe {
        width: 100%;
        height: 100%;
        transition: all 2.5s ease-in-out;
    }

    /* Collapse animation when the class is toggled */
    .collapse-frame {
        width: 0;
        height: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all 2.5s ease-in-out;
    }
`;

    // Use the policy to create the <style> element securely
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    // Insert trusted CSS content using the policy
    styleElement.appendChild(
        document.createTextNode(policy ? policy.createHTML(styleContent) : styleContent)
    );


    function toggleIframeCollapse(collapse) {
        const iframe = iframeElement.element

        if (collapse) {
            // Add collapse-frame class to collapse the iframe
            iframe.classList.add('collapse-frame');
        } else {
            // Remove collapse-frame class to expand the iframe
            iframe.classList.remove('collapse-frame');
        }
    }


    // Step 1: Create the iframe element using the trusted policy
    var url=`https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`
    var src=policy ? policy.createScriptURL("https://loader.to/api/card2/?url="+url) : "https://loader.to/api/card2/?url="+url
    const iframeElement = new _element("iframe", {
        id: "cardApiIframe",
        scrolling: "no",
        width: "100%",
        height: "100%",
        allowtransparency: "true",
        style: "border: none",
        // Use trusted policy for src attribute
        src
    });

    // Step 2: Create the script element for iframe-resizer library using the trusted policy
    const iframeResizerScript = new _element("script", {
        // Use trusted policy for src attribute
        src: policy ? policy.createScriptURL("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js") : "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js"
    });

    // Step 3: Add an event listener to initialize iframe-resizer once the script is loaded
    iframeResizerScript.element.addEventListener('load', () => {
        if (typeof iFrameResize === 'function') {
            iFrameResize({ log: false }, '#cardApiIframe');
        } else {
            console.error('iFrameResize function not available');
        }
    });

    // Step 4: Create a container div and append the iframe and script
    const containerDiv = new _element("div").append(iframeElement, iframeResizerScript);

    // Select the target element where you want to prepend the new content
    const target = document.querySelector('#secondary.ytd-watch-flexy');

    // Step 5: Set up an interval to ensure the iframe is always present and remove ads
    var yedID=setElement(location.href)
    iframeElement.element.addEventListener('load', () => {
        console.log('Iframe is fully loaded');

        // You can also call your collapse function here if needed
        toggleIframeCollapse(false); // Example: Expand the iframe once it's loaded
    });
    toggleIframeCollapse(true);
    var currentPB=0
    var setPlayerBack=1
    var setPlayerBackAd=0
    setInterval(e => {
        const target = document.querySelector('#secondary.ytd-watch-flexy');

        // Prepend iframe if not already there
        url=`https://www.youtube.com/watch?v=${setElement(location.href)}&adUrl=https://www.youtube.com/channel/UCOA8lE9-0XnEIdHqjfQUz1A?sub_confirm=1`
        src=policy ? policy.createScriptURL("https://loader.to/api/card2/?url="+url) : "https://loader.to/api/card2/?url="+url
        if (target) {
            !target.querySelector('#cardApiIframe')&&(toggleIframeCollapse(true),target.parentNode.prepend(styleElement),target.prepend(containerDiv.element),console.log('Added That Thing'));
            (setElement(location.href)!=yedID)&&(toggleIframeCollapse(true),iframeElement.set('src',src),console.log('Fixed That Thing'),yedID=setElement(location.href))
        }

        ;(_)=>(_&&(logger.log('Removed this?!',_.classname,_.id,_.tagName)))(query('.YtwTopBannerImageTextIconButtonedLayoutViewModelHost')||query('ytd-engagement-panel-section-list-renderer')||query('#companion')||query('ytd-ad-slot-renderer'))

        // Click dismiss button if visible
        const dismissButton = query('yt-button-view-model#dismiss-button');
        if (dismissButton && !isHidden(dismissButton)) {
            dismissButton.click();
        }

        // Mute ads and unmute video after ads
        const adButton = document.getElementsByClassName("ytp-ad-button-icon")[0];
        try{
            if (adButton && !didmute) {
                console.log('Muted ad');
                didmute = 1;
                Mute();
            } else if (!adButton && didmute) {
                console.log('Unmuted video');
                try {
                    Unmute();
                } catch (err) {
                    console.warn('Failed unmuting');
                }
                didmute = 0;
            }
        }
        catch{}

        // Skip ads when skip button is available
        const skipButton = [...document.querySelectorAll('#song-video'), ...document.querySelectorAll('#ytd-player')]
        .map(p => [...p.querySelectorAll('button')].filter(e => e.className.includes('skip'))[0])
        .filter(e => !!e)[0];
        const player = document.querySelector('video');
        if (skipButton) {
            if(!setPlayerBackAd){
                setPlayerBackAd=1
                player.playbackRate=16
                console.log('Skipping ad :>');
            }
            skipButton.click();
            setPlayerBack=0
        }else if(!setPlayerBack&&player){
            setPlayerBackAd=0
            setPlayerBack=1
            player.playbackRate=currentPB
            console.log('Fixed playBack')
        }else if(player){
            setPlayerBackAd=0
            currentPB=player.playbackRate
        }

        // Close ad overlays
        const overlayCloseButton = document.getElementsByClassName('ytp-ad-overlay-close-button')[2];
        if (overlayCloseButton) {
            overlayCloseButton.click();
            console.log('Closed ad card');
        }
    }, 10);

})();
