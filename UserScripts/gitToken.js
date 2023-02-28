// ==UserScript==
// @name         New github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @grant        GM_info
// ==/UserScript==

(function() {
    'use strict';
    unsafeWindow.unsafeWindow=unsafeWindow;
    unsafeWindow.triggerMouseEvent=function triggerMouseEvent(node, eventType) {var clickEvent = document.createEvent ('MouseEvents');clickEvent.initEvent (eventType, true, true);node.dispatchEvent (clickEvent);}
    unsafeWindow.click=function c(et){triggerMouseEvent (et, "mouseover");triggerMouseEvent (et, "mousedown");triggerMouseEvent (et, "mouseup");triggerMouseEvent (et, "click");};
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
    };unsafeWindow.getElementByAttribute=getElementByAttribute
    function createToken(name){
        GM_setValue('makeToken',true)
        GM_setValue('token_name',name)
    }
    function open_(){
        GM_setValue('opened',true);location.href!='https://github.com/settings/tokens'&&(open('https://github.com/settings/tokens'))
    }
    const findhref=function (a,b){
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
    unsafeWindow.findhref=findhref
    unsafeWindow.cT=createToken;
    if(GM_getValue('makeToken')){
        console.log('making token')
        if(!GM_getValue('opened'))open_();
        else if(location.href=='https://github.com/settings/tokens/new'){
            console.log('on new')
            document.getElementById('oauth_access_description').value=GM_getValue('token_name')||'someTokenName'
            var expireList=[...oauth_access_default_expires_at.children].splice(1,4)
            var scopes=[...$('.listgroup').children[0].children]
            var info={}
            scopes.forEach(e=>{
                var control=e.children[0].innerText.split(/[\n]+/gi)
                info[control[0]]=new(class extends Object{
                    constructor(name,input){
                        super()
                    }
                })()
            })
        }
        else{
            click(getElementByAttribute('button','role').filter(ele=>[...ele.classList].includes('select-menu-button')).pop())
            findhref((getElementByAttribute('menu','role').filter(ele=>[...ele.classList].includes('SelectMenu')).pop())).pop().click()
        }
    }
    // Your code here...
})();
