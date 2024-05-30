// ==UserScript==
// @name LinkVerse
// @namespace http://tampermonkey.net/
// @version 0.2
// @description Some LinkVerse Script
// @author gaston1779
// @match *://linkvertise.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=linkvertise.com
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_xmlhttpRequest
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @license MIT
// ==/UserScript==
tF = function(e, {
    callback: t,
    int: n
}) {
    !t && (t = function() {}), !n && (n = 100), console.log({
        f: e,
        callback: t,
        int: n
    });
    try {
        return e(), void t()
    } catch (e) {}
    var l = setInterval((() => {
        try {
            e(), t(), clearInterval(l)
        } catch (e) {}
    }), n || 100);
    return l
}, findElementByTagNameAndText = function(e, t) {
    const n = document.getElementsByTagName(e);
    for (const e of n)
        if (e.textContent === t) return e;
    return null
}, steps_ = [
    ["button", " Free Access "],
    [],
    ["button", "Install and Open Opera GX"],
    ["div", " I have already completed this Step "]
], steps = [
    ["button", " Free Access with Ads "],
    ["button", "I'm interested"],
    ["button", "Explore Website & Learn more"],
    ["div", "I have already completed this Step"]
], ogopen = open, step = 0;
var time = performance.now(),
    allow = !1,
    start = setInterval((() => {
        (findElementByTagNameAndText(...steps[0]) || findElementByTagNameAndText(...steps_[0])).click()
    }), 3e3);
open_ = function(...e) {
    return step ? console.log({
        allow: allow,
        step: step,
        a: e
    }) : (alert("Openeing"), clearInterval(start), ogopen(...e))
};
var loop = setInterval((() => {
    window.open = open = function(...e) {
        return step ? console.log({
            allow: allow,
            step: step,
            a: e
        }) : (alert("Openeing:" + step), clearInterval(start), ogopen(...e))
    }
}), 1);
console.log("Step1 in", performance.now() - time), setTimeout((() => {
    (findElementByTagNameAndText(...steps[0]) || findElementByTagNameAndText(...steps_[0])).click()
}), 1e3), tF((function() {
    let e = [...document.querySelectorAll("button.ng-star-inserted")].filter((e => !e.innerText.includes("Access")))[0].click();
    if (e.disabled) throw "";
    e.click(), clearInterval(start)
}), {
    callback: function() {
        step = 2, console.log("Step2 in", performance.now() - time)
    }
}), tF((function() {
    (findElementByTagNameAndText(...steps[2]) || findElementByTagNameAndText(...steps_[2])).click()
}), {
    callback() {
        step = 3, console.log("Step3 in", performance.now() - time)
    }
}), tF((function() {
    (findElementByTagNameAndText(...steps[3]) || findElementByTagNameAndText(...steps_[3])).children[0].click()
}), {
    callback: function() {
        step = 4, console.log("Step4 in", performance.now() - time)
    }
});