// ==UserScript==
// @name         LinkVerse
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://linkvertise.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkvertise.com
// @require      https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// ==/UserScript==
tF=function (f,{callback,int}){
    !callback&&(callback=function(){});!int&&(int=100)
    console.log({f,callback,int})
    try{f();callback();return}catch(err){}
    var _=setInterval(()=>{try{f();callback();clearInterval(_)}catch(err){}},int||100)
    return _
}
findElementByTagNameAndText=function (tagName, searchText) {
    const elements = document.getElementsByTagName(tagName);

    for (const element of elements) {
        if (element.textContent === searchText) {
            return element;
        }
    }

    return null; // Element not found
}
steps_=[
    ["button"," Free Access "],[],
    ["button","Install and Open Opera GX"],
    ["div"," I have already completed this Step "]
]
steps=[
    ["button"," Free Access with Ads "],
    ["button","I'm interested"],
    ["button","Explore Website & Learn more"],
    ["div","I have already completed this Step"]
]
ogopen=open

step=0
var time=performance.now()
var allow=false
var start=setInterval(()=>{
    (findElementByTagNameAndText(...steps[0])||findElementByTagNameAndText(...steps_[0])).click()
},3000)
open_=function(...a){
    return !step?(alert("Openeing"),clearInterval(start),ogopen(...a)):(console.log({allow,step,a}))
}

var loop=setInterval(()=>{
    open=function(...a){
        return !step?(alert("Openeing"),clearInterval(start),ogopen(...a)):(console.log({allow,step,a}))
    }
})

console.log("Step1 in",performance.now()-time)
setTimeout(()=>{(findElementByTagNameAndText(...steps[0])||findElementByTagNameAndText(...steps_[0])).click()},1000)

tF(function(){
    if(findElementByTagNameAndText(...steps[1]).disabled)throw "";
    findElementByTagNameAndText(...steps[1]).click()
    clearInterval(start);
},{callback:function(){
    step=2
     console.log("Step2 in",performance.now()-time)
}})

tF(function(){(findElementByTagNameAndText(...steps[2])||findElementByTagNameAndText(...steps_[2])).click()},{
    callback(){
        step=3
        console.log("Step3 in",performance.now()-time)
    }
})

tF(function(){(findElementByTagNameAndText(...steps[3])||findElementByTagNameAndText(...steps_[3])).children[0].click()},{
    callback:function(){
        step=4
        console.log("Step4 in",performance.now()-time)
    }
})

