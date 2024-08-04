// ==UserScript==
// @name Coinbase Pro Auto Trader
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Automatically trade on Coinbase Pro based on trading indicators
// @author Your Name
// @match https://www.coinbase.com/advanced-trade/spot/BTC-USD
// @match https://public.sandbox.exchange.coinbase.com/trade/BTC-USD
// @require https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ws/7.4.6/ws.min.js
// @require https://cdn.jsdelivr.net/npm/jsonwebtoken@8/dist/jsonwebtoken.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addValueChangeListener
// @license MIT
// ==/UserScript==
if (GM_setValue("coinbase", null), GM_setValue("database", null), GM_setValue("m", null), this.l, location.href.includes("www.coinbase.com") && (GM_setValue("coinbase", !0), GM_addValueChangeListener("m", (function(e, n, t, l) {}))), location.href.includes("sandbox")) {
    GM_setValue("database", !0);
    const e = {
            t: "f6ab186ca2f650802c18af35b0596417",
            o: "kxnX7VDyRV21LWFL8sat38O+E77GYDSor82CWsskKfciLUny/gKr7nch7LM1aypWEZ3w23Py6lwQiabC3fJFFw==",
            u: "hg6o0zxpgr7"
        },
        t = new WebSocket("wss://ws-feed-public.sandbox.exchange.coinbase.com");
    let l = null,
        s = null,
        u = null;
    const o = [50, 100, 200];
    let c = {};
    const a = 14;
    let i = [];

    function n(e) {}
    t.onopen = function() {
        alert("WS opened"), t.send(JSON.stringify({
            type: "subscribe",
            i: [{
                name: "ticker",
                p: ["BTC-USD"]
            }]
        }));
        const n = Date.now() / 1e3,
            l = n + "GET/users/self/verify",
            s = CryptoJS.enc.Base64.parse(e.o),
            u = CryptoJS.HmacSHA256(l, s),
            o = CryptoJS.enc.Base64.stringify(u);
        t.send(JSON.stringify({
            type: "subscribe",
            p: ["BTC-USD"],
            i: ["full"],
            signature: o,
            key: e.t,
            u: e.u,
            timestamp: n
        }))
    }, t.onmessage = function(e) {
        const t = JSON.parse(e.data);
        "ticker" === t.type && "BTC-USD" === t.S ? function(e) {
            (function(e) {
                if (null !== l && (o.forEach((n => {
                        c[n] = function(e, n, t) {
                            return void 0 === t ? e : (e - t) * (2 / (n + 1)) + t
                        }(e, n, c[n])
                    })), c[50] > c[100] && c[100] > c[200] && l < c[200] ? (u = !0, s = null) : c[50] < c[100] && c[100] < c[200] && l > c[200] ? (s = !0, u = null) : (s = null, u = null)), i.push(e), i.length > a && i.shift(), i.length >= a) {
                    const e = function(e) {
                        const n = [],
                            t = [];
                        for (let l = 1; l < e.length; l++) {
                            const s = e[l] - e[l - 1];
                            s > 0 ? (n.push(s), t.push(0)) : (n.push(0), t.push(-s))
                        }
                        const l = n.reduce(((e, n) => e + n), 0) / a,
                            s = t.reduce(((e, n) => e + n), 0) / a;
                        return 100 - 100 / (1 + l / s)
                    }(i);
                    e > 70 ? (s = !0, u = null) : e < 30 ? (u = !0, s = null) : (s = null, u = null)
                }
                l = e
            })(parseFloat(e.h)), u && didSell ? (didBuy = !0, didSell = !1, n("buy")) : s && (n("sell"), didSell = !0, didBuy = !1)
        }(t) : "open" === t.type || "received" === t.type || "done" === t.type || "match" === t.type || "change" === t.type || t.type
    }, t.onerror = function(e) {}
}