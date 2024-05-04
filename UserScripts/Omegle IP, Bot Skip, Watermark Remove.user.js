// @name Omegle IP, Bot Skip, Watermark Remove
// @namespace https://origamitoast.ga/
// @version 0.8
// @description Shows IP, Suspected Proxy Status, Service Provider, and Location in chat window, auto-skips bots, and removes omegle watermark from stranger's video
// @author Origami Toast
// @match https://omegle.com/*
// @match https://www.omegle.com/*
// @grant none
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection, window.RTCPeerConnection = function(...t) {
    document.getElementById("videologo").remove();
    const n = new window.oRTCPeerConnection(...t);
    return n.t = n.addIceCandidate, n.addIceCandidate = function(t, ...o) {
        const i = t.candidate.split(" ");
        if ("srflx" === i[7]) {
            let t = document.getElementsByClassName("logitem")[0],
                n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status) {
                    let n = JSON.parse(this.responseText);
                    t.innerHTML = `IP: ${i[4]}, ${n.o?"proxy":"not proxy"}<br/>Provider: ${n.i}<br/>Region: ${n.city}, ${n.u}<br/>Country: ${n.country}`
                }
            }, n.open("GET", "https://ip.origamitoast.ga/json/" + i[4] + "?fields=country,regionName,city,proxy,isp", !0), n.onerror = function() {
                t.innerHTML = "Error, ask Origami Toast#6079 or check https://origamitoast.ga/"
            }, n.send()
        }
        return n.t(t, ...o)
    }, n
}, document.addEventListener("DOMNodeInserted", (function(t) {
    if (!t.target.children || !t.target.children[0] || "strangermsg" != t.target.children[0].className) {
        return
    }
    if (t.target.innerText.replace("Stranger: ", "").match(new RegExp("^([mf]\\b|[mf]\\d)|\b(dm|snap|subscribe|follow)\b", "gi"))) {
        let t = document.getElementsByClassName("disconnectbtn")[0];
        "Stop\nEsc" == t.innerText && t.click(), "Really?\nEsc" == t.innerText && t.click()
    }
}), !1);