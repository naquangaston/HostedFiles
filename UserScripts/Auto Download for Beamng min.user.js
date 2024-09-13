// ==UserScript==
// @name Auto Download for Beamng
// @namespace http://tampermonkey.net/
// @version 1.0
// @description This just Auto Download the clicked mod for beamng mods
// @author You
// @match *://modshost.net/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @description:nl Hallo wereld
// @description:en Hello World
// @description:fr Bonjour le monde
// @description:da Hej verden
// @description:fi Hei maailma
// @description:cs Ahoj svět
// @description:zh Hello World
// @description:az Salam Dünya
// @description:ar مرحبا بالعالم
marhaban bialealam
// @description:eo Saluton Mondo
// @description:el Γεια σας κόσμος
Geia sas kósmos
// @description:de Hallo Welt
// @description:ga Dia duit Domhan
// @description:ko 안녕하세요 세계
annyeonghaseyo segye
// @description:it Ciao mondo
// @description:id Halo dunia
// @description:ja こんにちは世界
Kon'nichiwa sekai
// @description:he שלום עולם
// @description:hi हैलो वर्ल्ड
hailo varld
// @description:hu Helló Világ
// @description:ru Привет, мир
Privet, mir
// @description:fa سلام جهان
// @description:pl Witaj świat
// @description:tr Selam Dünya
// @description:pt Olá mundo
// @description:sv Hello World
// @description:es Hola Mundo
// @description:sk Ahoj svet
// @description:uk Привіт Світ
Pryvit Svit
// @description:vi Xin chào thế giới
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @license MIT
// ==/UserScript==
function P(t, n) {
    const e = K();
    return P = function(n, r) {
        let o = e[n -= 426];
        if (void 0 === P.CqeDKH) {
            const n = function(t, n) {
                let e, r, o = [],
                    i = 0,
                    u = "";
                for (t = function(t) {
                        let n = "",
                            e = "";
                        for (let e, r, o = 0, i = 0; r = t.charAt(i++); ~r && (e = o % 4 ? 64 * e + r : r, o++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * o & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
                        for (let t = 0, r = n.length; t < r; t++) e += "%" + ("00" + n.charCodeAt(t).toString(16)).slice(-2);
                        return decodeURIComponent(e)
                    }(t), r = 0; r < 256; r++) o[r] = r;
                for (r = 0; r < 256; r++) i = (i + o[r] + n.charCodeAt(r % n.length)) % 256, e = o[r], o[r] = o[i], o[i] = e;
                r = 0, i = 0;
                for (let n = 0; n < t.length; n++) r = (r + 1) % 256, i = (i + o[r]) % 256, e = o[r], o[r] = o[i], o[i] = e, u += String.fromCharCode(t.charCodeAt(n) ^ o[(o[r] + o[i]) % 256]);
                return u
            };
            P.WWdtiR = n, t = arguments, P.CqeDKH = !0
        }
        const i = n + e[0],
            u = t[i];
        return u ? o = u : (void 0 === P.QvvQwp && (P.QvvQwp = !0), o = P.WWdtiR(o, r), t[i] = o), o
    }, P(t, n)
}

function l(t, n) {
    const e = K();
    return l = function(n, r) {
        let o = e[n -= 426];
        if (void 0 === l.iBGeTu) {
            l.WuhvBa = function(t) {
                let n = "",
                    e = "";
                for (let e, r, o = 0, i = 0; r = t.charAt(i++); ~r && (e = o % 4 ? 64 * e + r : r, o++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * o & 6)) : 0) r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);
                for (let t = 0, r = n.length; t < r; t++) e += "%" + ("00" + n.charCodeAt(t).toString(16)).slice(-2);
                return decodeURIComponent(e)
            }, t = arguments, l.iBGeTu = !0
        }
        const i = n + e[0],
            u = t[i];
        return u ? o = u : (o = l.WuhvBa(o), t[i] = o), o
    }, l(t, n)
}

function K() {
    const t = ["mte4mduWmdboBK1oEgS", "mtK4tNfzuMXP", "W5Pvs8kWWQPusuldMSkYBcC", "mZqZoda2EgfWAgn5", "WOaHW6RcG8ksWOmYvSkiW7NdMSo7ia", "WRqsvCo0uSkXW5tdLCosW6VcJmoTbG", "WOtdSmkYWOFdPva6EeTvWRmsW7ul", "WPGTW43cTsxdGCoclfabCdeQ", "ndCWotuZwM1tD1Hu", "ntaZnKfNsxnhvW", "nZa4nZyWogHZDxbzCG", "dvldVSkeWPhcMSkYnhO"];
    return (K = function() {
        return t
    })()
}(function(t, n) {
    const e = 432,
        r = 428,
        o = 426,
        i = "#h!1",
        u = "9GRU",
        c = P,
        f = P,
        a = P,
        s = l,
        d = l,
        h = K();
    for (;;) try {
        if (656720 === parseInt(s(e)) / 1 * (-parseInt(s(r)) / 2) + -parseInt(c(433, "kvgh")) / 3 + -parseInt(f(436, "LkZM")) / 4 + -parseInt(f(o, i)) / 5 + parseInt(a(435, u)) / 6 + -parseInt(d(427)) / 7 + parseInt(d(431)) / 8) break;
        h.push(h.shift())
    } catch (t) {
        h.push(h.shift())
    }
})(), query = function(t, n) {
    const e = {
        mpgIr: "undefined",
        kUvxR: function(t, n) {
            return t(n)
        }
    };
    try {
        let o = typeof $ != e.mpgIr ? $ : document.querySelectorAll;
        return n ? [...document.querySelectorAll(t)].filter((t => !(null === el.offsetParent)))[0] : (r = o(t) ? o(t).length ? e.kUvxR(o, t)[0] : o(t) : null, Object.keys(r).length ? r : null)
    } catch {}
    var r
}, async function() {
    "use strict";
    const t = {
        Gjrpw: function(t, n) {
            return t(n)
        },
        ZNZyD: "Timeout waiting for selector",
        yedkm: "notifications",
        SNpOY: function(t, n) {
            return t === n
        },
        DxLAv: "granted",
        KBzLI: "Notification permission granted.",
        tovwU: "Notification permission is pending. You might need to request it.",
        nhHxc: "bSDiF",
        NSrwF: "Notification permission denied.",
        LtbrT: "wbDIC",
        hWqGv: "bzgVJ",
        YxgFx: "undefined",
        MuRWD: function(t, n) {
            return t(n)
        },
        iNOoo: function(t, n) {
            return t != n
        },
        Jjeuf: function(t, n) {
            return t >= n
        },
        TzxBO: function(t, n) {
            return t - n
        },
        ckeUt: "aafxv",
        KlMjK: function(t, n) {
            return t === n
        },
        MTxsA: function(t) {
            return t()
        },
        RKoTE: "exkHL",
        NFqFZ: "data-attach-id",
        wYJdK: "Got link:",
        yCAdJ: function(t, n) {
            return t(n)
        },
        vPohc: function(t) {
            return t()
        },
        ZdRzQ: function(t, n) {
            return t - n
        },
        fOTDA: function(t, n) {
            return t(n)
        },
        miOap: function(t, n) {
            return t == n
        },
        iZaCu: "download",
        AqmIK: function(t, n) {
            return t !== n
        },
        sPxZs: "CkiWV",
        iPaJo: "eCXyA",
        eNtxV: function(t) {
            return t()
        },
        UWlkT: "#dl_btn",
        eWdlF: function(t, n) {
            return t(n)
        },
        mLviD: "#external-button",
        HrvNP: "beamng",
        hnaWZ: "cars",
        hmNkI: "maps",
        pDmvo: "wzjZb",
        wuTFX: "#downloads"
    };
    var n = t => new Promise((n => setTimeout(n, t)));
    async function r(n, u = 3e4) {
        const c = {
            AgHkz: t.YxgFx,
            BcBgz: function(n, e) {
                return t.MuRWD(n, e)
            },
            vqzHZ: function(t, n) {
                return t(n)
            },
            lOFdQ: function(t, n) {
                return t(n)
            },
            qxtsf: function(n, e) {
                return t.iNOoo(n, e)
            },
            wYwZt: function(t, n) {
                return t(n)
            },
            dynsw: function(n, e) {
                return t.Gjrpw(n, e)
            },
            qraKP: function(n, e) {
                return t.Jjeuf(n, e)
            },
            gkDkR: function(n, e) {
                return t.TzxBO(n, e)
            },
            dHrRp: function(n, e) {
                return t.SNpOY(n, e)
            },
            PeGUM: t.ckeUt,
            pDCfY: function(t, n) {
                return t(n)
            },
            hWQbG: function(n, e) {
                return t.KlMjK(n, e)
            },
            oqWJy: function(n) {
                return t.MTxsA(n)
            }
        };
        if (t.KlMjK(t.RKoTE, "kzzQP")) {
            let t = typeof p != c.AgHkz ? B : n.querySelectorAll;
            return k ? [...G.querySelectorAll(X)].filter((n => !(null === t.offsetParent)))[0] : (n => t.keys(n).length ? n : null)(c.BcBgz(t, v) ? c.vqzHZ(t, Y).length ? c.lOFdQ(t, j)[0] : c.BcBgz(t, W) : null)
        }
        return await new Promise(((t, l) => {
            let f = performance.now();
            c.oqWJy((function a() {
                const s = {
                    CJxYw: function(t, n) {
                        return c.qxtsf(t, n)
                    },
                    RYwVX: c.AgHkz,
                    NyFhn: function(t, n) {
                        return c.wYwZt(t, n)
                    },
                    CMWRM: function(t, n) {
                        return t(n)
                    },
                    NywIf: function(t, n) {
                        return c.BcBgz(t, n)
                    },
                    PyVSi: function(t, n) {
                        return c.dynsw(t, n)
                    }
                };
                if (document.querySelector(n)) t(document.querySelector(n));
                else if (c.qraKP(c.gkDkR(performance.now(), f), u))
                    if (c.dHrRp(c.PeGUM, "EjXWV")) try {
                        let t = s.CJxYw(typeof S, s.RYwVX) ? V : o.querySelectorAll;
                        return e ? [...C.querySelectorAll(q)].filter((n => !(null === t.offsetParent)))[0] : (d = s.NyFhn(t, I) ? s.CMWRM(t, O).length ? s.NywIf(t, R)[0] : s.PyVSi(t, x) : null, t.keys(d).length ? d : null)
                    } catch {} else c.pDCfY(l, new Error("Timeout waiting for selector"));
                    else c.hWQbG("xzvtz", "Abamd") ? r(i.querySelector(n)) : requestAnimationFrame(a);
                var d
            }))
        }))
    }
    let i = location.pathname.split("/");
    t.miOap(i[1], t.iZaCu) ? t.AqmIK(t.sPxZs, t.iPaJo) ? (await t.eNtxV((async function n() {
        const e = {
            SMovy: function(n, e) {
                return t.Gjrpw(n, e)
            }
        };
        try {
            const e = await navigator.permissions.query({
                name: t.yedkm
            });
            t.SNpOY(e.state, t.DxLAv) ? console.log(t.KBzLI) : t.SNpOY(e.state, "prompt") ? console.log(t.tovwU) : t.nhHxc != t.nhHxc ? t.Gjrpw(n, new r(t.ZNZyD)) : console.log(t.NSrwF)
        } catch (o) {
            t.SNpOY(t.LtbrT, t.hWqGv) ? e.SMovy(n, r) : console.error("Error checking notification permission:", o)
        }
    })), await r(t.UWlkT).then((n => {
        let e = n.getAttribute(t.NFqFZ);
        console.log(t.wYJdK), t.Gjrpw(open, e), opener ? close() : history.back()
    })), await t.eWdlF(r, t.mLviD).then((async e => {
        e.getAttribute("data-attach-id");
        console.log(t.wYJdK), e.click(), await t.yCAdJ(n, 200), opener ? t.vPohc(close) : history.back()
    })), name.length && close()) : p.querySelector(B) ? t.yCAdJ(S, V.querySelector(o)) : t.Jjeuf(t.ZdRzQ(v.now(), Y), j) ? t.fOTDA(e, new F("Timeout waiting for selector")) : I(O) : t.miOap(i[1], t.HrvNP) && [t.hnaWZ, t.hmNkI].includes(i[2]) && 1 == history.length && (t.SNpOY(t.pDmvo, "sTHBh") ? n.log(t.tovwU) : (await r(t.wuTFX).then((t => t.querySelector(".mh-local-btn") && open(t.querySelector(".mh-local-btn").href, "yes"))), close()))
}().catch((t => (close(), console.warn(t))));