// ==UserScript==
// @name Zoom autoclose
// @namespace http://tampermonkey.net/
// @version 0.32
// @description Autoclose the zoom page when zoom in launched
// @author You
// @match *://zoom.us/*
// @match *://*/*
// @match https://zoom.us/
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// ==/UserScript==
document.domain.includes("zoom") && (window.onhashchange = function(o) {
    window.close()
}), locaction.hash.includes("suc") && window.close();