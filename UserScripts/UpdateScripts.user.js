// @name UpdateScripts
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author You
// @match *://github.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
! function() {
    "use strict";

    function n(n) {
        const t = n.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    function t() {
        if (function(t) {
                const o = document.querySelectorAll('[aria-label][data-view-component="true"]');
                for (const e of o) {
                    if (e.getAttribute("aria-label") === t && n(e)) {
                        return e
                    }
                }
                return null
            }("Open user account menu").click(), location.pathname.split("/")[1] != document.getElementsByClassName("Overlay-title sr-only")[1].parentNode.children[1].innerText.split("\n")[0]) {
            return alert(`You are not ${location.pathname.split("/")[1]}. Cannot update`)
        }
        setTimeout((() => {
            document.getElementsByTagName("modal-dialog")[5].children[1].children[0].children[1].children[0].click()
        }), 200), o(document.body).filter((n => n.innerText == e)).pop().click()
    }
    var o = function(n, t) {
            var o = [];
            return function e(n) {
                n.tagName.toLowerCase() == (t || "a") ? (o.push(n), n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                    e(n)
                })))) : n.children.length && ((n = n.children).forEach = [].forEach, n.forEach((n => {
                    e(n)
                })))
            }(n), o
        },
        e = decodeURIComponent(location.hash).split("").splice(1).join("");
    addEventListener("load", (function() {
        e && e.includes(".user.js") && setTimeout(t, 200)
    }))
}();