// ==UserScript==
// @name Auto Download for Beamng
// @namespace http://tampermonkey.net/
// @version 2024-08-09
// @description This just Auto Download the clicked mod for beamng mods
// @author You
// @match *://modshost.net/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @license MIT
// ==/UserScript==
(async function() {
    "use strict";
    async function t(t, e = 3e4) {
        return await new Promise(((n, o) => {
            let a = performance.now();
            ! function r() {
                document.querySelector(t) ? n(document.querySelector(t)) : performance.now() - a >= e ? o(new Error("Timeout waiting for selector")) : requestAnimationFrame(r)
            }()
        }))
    }
    let e = location.pathname.split("/");
    "download" == e[1] ? (await t("#dl_btn").then((t => {
        let e = t.getAttribute("data-attach-id");
        console.log("Got link:"), open(e), history.back()
    })), await t("#external-button").then((async t => {
        t.getAttribute("data-attach-id");
        var e;
        console.log("Got link:"), t.click(), await (e = 200, new Promise((t => setTimeout(t, e)))), history.back()
    }))) : e[1]
})().catch((t => (alert(t), console.warn(t))));