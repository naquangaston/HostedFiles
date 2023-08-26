// ==UserScript==
// @name         Auto download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         *://www.youtube.com/*
// @match         *://onlymp3.to/*
// @match         *://en.onlymp3.to/*
// @match         *://www.yt2conv.com/*
// @match         *://en2.onlinevideoconverter.pro/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    //'use strict';
    class element {
        static get br() {
            return new element("br");
        }
        constructor(name, obj) {
            this.element = (function () {
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
        append(target) {
            this.element.append(target.element || target);
            return this;
        }
        appendTo(target) {
            (target.element || target).append(this.element);
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
    function getIds(){
        var list=[...document.getElementsByTagName('ytd-playlist-panel-renderer')].filter(isElementInViewport).filter(e=>!isHidden(e))[0]
        var ids=findhref2(list,'span').filter(e=>!isHidden(e)).filter(isElementInViewport).filter(e=>e.id=='video-title').map(parent).map(parent).map(e=>({id:setElement(findhref2(parent(e))[0].href),e}))
        return ids
    }
    _getIds=getIds
    info={}
    downloadT=function(id,force=false,useT=false,mp4=false){
        let _=id+(mp4?"mp4":"mp3") + useT
        if((info[id]||localStorage[_])&&!force)return;
        var video={}
        var hash=`#url=https://www.youtube.com/watch?v=${id}`
        ad('unload',function(){info[id].close()},true)
        onmessage=function(e){
            if(e.origin==Porigin||e.origin.match(/https?:\/{2}onlymp3\.to/)||e.origin.match(/https?:\/{2}en\.onlymp3\.to/)||e.origin.match(/https?:\/{2}en(\d)\.onlinevideoconverter\.pro/)){
                const {data:{href,title,length,id}}=e
                console.log('Handled',{href,title,length,id},e)
                //info[id].close()
                if(useT){
                    var a=document.createElement('a')
                    a.download=title+'.mp4'
                    a.href=href
                    document.body.appendChild(a)
                    a.click()
                    a.remove();
                }
                else open(href);
                localStorage[_]=href
            }else console.log('Unhandled Post',e)
        }
        //`https://downvideo.quora-wiki.com/tiktok-video-downloader#url=https://www.youtube.com/watch?v=${id}`
        var o=new URL(location.href)
        o.host=o.host.replace('.com','mz.com');
        //open([o.protocol,'//',o.host,o.pathname,'?v=',setElement(location.href)].join(''))
        return info[id]=mp4?
            open('https://en1.onlinevideoconverter.pro/112Ei/youtube-downloader-mp4',[id,location.pathname.startsWith('/shorts/')?1:0],`width=400,height=500`)
        :open([o.protocol,'//',o.host,o.pathname,'?v=',id].join(''),[id,location.pathname.startsWith('/shorts/')?1:0],`width=400,height=500`)
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
    function WIP(hmpd,mp4,force){
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
                    if(window[b].closed){window[b]=null;clearInterval(rr);console.log(b,'isclosed')}
                },300);
            })
        })
    }
    window.WIP=WIP
    var button = (new element('button')).set("innerText","Get MP3").on('click',function(e){downloadT(setElement(location.href),false,true)})
    var button2 = (new element('button')).set("innerText","Get MP4").on('click',function(e){downloadT(setElement(location.href),false,true,true)})
    function appendButtons(){
        button.appendTo($("#end")[0])
        button2.appendTo($("#end")[0])
    }
    tF(function(){
        if(!$("#end")[0]) throw "Cant append buttons yet"
        return true
    },{callback:appendButtons})
    if(location.href.includes('onlymp3.to')){
        setInterval(()=>{
            if(document.getElementById('error-text').innerText.length>5)location.reload();
        },20000)
        console.log('Getting MP3')
        tF(function(f=function(){}){
            var [id,shorts]=name.split(',')
            txtUrl.value=`https://www.youtube.com/${shorts=="1"?"shorts/":"watch?v="}/${id}`
            getListFormats();
        },{callback:function(){}})
        tF(function(f=function(){}){var a=videoTitle.innerText.split('\n'),l=a[1].match(/[:\d]+/gi)[1],t=a[0].split('Title: ')[1],h=findhref2(videoTitle.parentNode)[0].href,f={id:setElement(location.href),href:h,title:t,length:l};(opener||window).postMessage(f,'*')},{callback:close});
        return
    }
    if(location.href.includes("www.yt2conv.com")){
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
    if(location.href.includes("en2.onlinevideoconverter.pro")){
        let [id,shorts]=name.split(',')
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
            var{title,href}=$('#download-720-MP4')[0]
            var f={id,href,title,length:{}};
            console.log('Posted')
            ;(opener||window).postMessage(f,'*')
        },{callback:close})

    }
    setInterval(e=>{
        document.getElementsByClassName("ytp-ad-button-icon")[0]&&!didmute&&(console.log('muted ad'),didmute=1,Mute());
        !document.getElementsByClassName("ytp-ad-button-icon")[0]&&didmute&&(console.log('unmuted video'),!function(){try{Unmute()}catch(err){console.warn('Failed unmuting')}}(),didmute=0);
        if(document.getElementsByClassName('ytp-ad-skip-button ytp-button').length==1){document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();;console.log('Skipped ad')}
        document.getElementsByClassName('ytp-ad-overlay-close-button')[2]&&(document.getElementsByClassName('ytp-ad-overlay-close-button')[2].click(),console.log('Close ad card'))
        // ad skipping ^^
    },10)
})();
