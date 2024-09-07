// ==UserScript==
// @name Auto Download for Beamng
// @namespace http://tampermonkey.net/
// @version 1.0
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
    async function t(t, o = 3e4) {
        return await new Promise(((e, n) => {
            let i = performance.now();
            ! function a() {
                document.querySelector(t) ? e(document.querySelector(t)) : performance.now() - i >= o ? n(new Error("Timeout waiting for selector")) : requestAnimationFrame(a)
            }()
        }))
    }
    let o = location.pathname.split("/");
    "download" == o[1] ? (await async function() {
        try {
            const t = await navigator.permissions.query({
                name: "notifications"
            });
            "granted" === t.state ? console.log("Notification permission granted.") : "prompt" === t.state ? console.log("Notification permission is pending. You might need to request it.") : console.log("Notification permission denied.")
        } catch (t) {
            console.error("Error checking notification permission:", t)
        }
    }(), await t("#dl_btn").then((t => {
        let o = t.getAttribute("data-attach-id");
        console.log("Got link:"), open(o), history.back()
    })), await t("#external-button").then((async t => {
        t.getAttribute("data-attach-id");
        var o;
        console.log("Got link:"), t.click(), await (o = 200, new Promise((t => setTimeout(t, o)))), history.back()
    }))) : o[1]
})().catch((t => (alert(t), console.warn(t))));