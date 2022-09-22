// ==UserScript==
// @name         Poser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://greasyfork.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/_ResouceLoader.js
// @run-at document-start
// ==/UserScript==

;(async function() {
    'use strict';
    try{
        if(location.hash){stop();var JSON_=JSON.parse(decodeURIComponent(location.hash.split('').splice(1).join('')));GM_setValue('JSON_',JSON_);localStorage.setItem(JSON_.id,'update');open(`https://greasyfork.org/en/scripts/${JSON_.id}/versions/new`);close();}
        async function get(url) {return new Promise((..._) => {$.get(url, (a, b) => {_['success' == b ? 0 : 1](a)})})}
        var Rl=new _ResourceLoader()
        console.log(Rl)
        }catch(err){
            console.log(err);throw err;
        }
})();