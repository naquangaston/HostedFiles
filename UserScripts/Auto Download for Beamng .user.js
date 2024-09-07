// ==UserScript==
// @name         Auto Download for Beamng
// @namespace    http://tampermonkey.net/
// @version      2024-08-09
// @description  This just Auto Download the clicked mod for beamng mods
// @author       You
// @match        *://modshost.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    var sleep=(ms)=>new Promise(a=>setTimeout(a,ms));
    async function wfs(s, timeout = 30000) {
        return await new Promise((resolve, reject) => {
            let startTime = performance.now();
            function checkSelector() {
                if (document.querySelector(s)) {
                    resolve(document.querySelector(s));
                } else if (performance.now() - startTime >= timeout) {
                    reject(new Error("Timeout waiting for selector"));
                } else {
                    requestAnimationFrame(checkSelector);
                }
            }
            checkSelector();
        });
    }
    let l=location.pathname.split('/')
    if(l[1]=='download'){
        await wfs('#dl_btn').then(a=>{let l=a.getAttribute('data-attach-id');console.log('Got link:',);open(l);history.back()})
        await wfs('#external-button').then(async a=>{let l=a.getAttribute('data-attach-id');console.log('Got link:',);a.click();await sleep(200);history.back()})
    }
    else if(l[1]=='beamng'){
        
    }
    // Your code here...
})().catch(e=>(alert(e),console.warn(e)))