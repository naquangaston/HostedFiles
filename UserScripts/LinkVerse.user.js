// @name LinkVerse
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author You
// @match *://linkvertise.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=linkvertise.com
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_xmlhttpRequest
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
var e;
tF = function(e, {
    t: t,
    o: n
}) {
    !t && (t = function() {}), !n && (n = 100);
    try {
        return e(), void t()
    } catch (s) {}
    var a = setInterval((() => {
        try {
            e(), t(), clearInterval(a)
        } catch (s) {}
    }), n || 100);
    return a
}, findElementByTagNameAndText = function(e, t) {
    const n = document.getElementsByTagName(e);
    for (const e of n) {
        if (e.textContent === t) {
            return e
        }
    }
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
], ogopen = open, step = 0, performance.now(), e = setInterval((() => {
    (findElementByTagNameAndText(...steps[0]) || findElementByTagNameAndText(...steps_[0])).click()
}), 3e3), open_ = function(...t) {
    return step ? void 0 : (alert("Openeing"), clearInterval(e), ogopen(...t))
}, setInterval((() => {
    window.open = open = function(...t) {
        return step ? void 0 : (alert("Openeing:" + step), clearInterval(e), ogopen(...t))
    }
}), 1), setTimeout((() => {
    (findElementByTagNameAndText(...steps[0]) || findElementByTagNameAndText(...steps_[0])).click()
}), 1e3), tF((function() {
    let t = [...document.querySelectorAll("button.ng-star-inserted")].filter((e => !e.innerText.includes("Access")))[0].click();
    if (t.disabled) {
        throw ""
    }
    t.click(), clearInterval(e)
}), {
    t: function() {
        step = 2
    }
}), tF((function() {
    (findElementByTagNameAndText(...steps[2]) || findElementByTagNameAndText(...steps_[2])).click()
}), {
    t() {
        step = 3
    }
}), tF((function() {
    (findElementByTagNameAndText(...steps[3]) || findElementByTagNameAndText(...steps_[3])).children[0].click()
}), {
    t: function() {
        step = 4
    }
});