// ==UserScript==
// @name Bypass All Shortlinks
// @namespace Violentmonkey Scripts
// @author Bloggerpemula
// @version 93.2
// @match *://*/*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant window.onurlchange
// @grant GM_registerMenuCommand
// @connect nocaptchaai.com
// @icon https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png
// @require https://update.greasyfork.org/scripts/439099/1203718/MonkeyConfig%20Modern%20Reloaded.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @description Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners , Skip AdFly and No Annoying Ads, Directly to Your Destination, and now Support Auto Downloading Your Files
// @exclude /^(https?:\/\/)(.+)?((advertisingexcel|talkforfitness|rsadnetworkinfo|rsinsuranceinfo|rsfinanceinfo|rssoftwareinfo|rshostinginfo|rseducationinfo|gametechreviewer|vegan4k|phineypet|batmanfactor|techedifier|urlhives|linkhives|gsshort|substitutefor|github|freeoseocheck|greenenez|aliyun|reddit|bing|yahoo|wiki-topia|edonmanor|vrtier|whatsapp|gearsadviser|edonmanor|tunebug|menrealitycalc|amazon|ebay|payoneer|paypal|skrill|stripe|tipalti|wise|discord|tokopedia|taobao|taboola|aliexpress|netflix|citigroup|spotify|bankofamerica|hsbc|accounts.youtube|(cloud|mail|translate|analytics|accounts|myaccount|contacts|clients6|developers|payments|pay|ogs|safety|wallet).google|(login|signup|account|officeapps|api|mail|hotmail).live|basketballsavvy|healthyfollicles|hauntingrealm|pluginmixer|boredboard|boardgamechick|healthyfollicles|atlassian|pinterest|twitter|facebook|tiktok|instagram|linkedin|fastbull|tradingview).com|(coinsvalue|cookinguide|cryptowidgets|webfreetools|carstopia|makeupguide|carsmania|doubleclick|luckydice).net|(linksfly|shortsfly|urlsfly|wefly|blog24).me|(greasyfork|openuserjs|telegram|wikipedia|lichess).org|misterio.ro|insurancegold.in|coinscap.info|chefknives.expert|(gsgames|year21|3zone).xyz|(shopee|lazada|rakuten|maybank|binance).*|(dana|ovo|bca.co|bri.co|bni.co|bankmandiri.co|desa|(.*).go).id|(.*).(edu|gov))(\/.*)/
// @downloadURL https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js
// @updateURL https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.meta.js
// @license MIT
// ==/UserScript==
! function() {
    const e = unsafeWindow,
        t = new MonkeyConfig({
            title: "Bypass Version 93.2 Settings :",
            menuCommand: !0,
            params: {
                Announcements: {
                    type: "text",
                    default: "Add Your ApiKey from nocaptchaai to use Auto Solve Hcaptcha",
                    long: 3
                },
                ApiKey: {
                    label: "noCaptcha Ai KEY",
                    type: "text",
                    default: ""
                },
                SetDelay: {
                    label: "Redirect Delay ",
                    type: "number",
                    default: 5
                },
                BlogDelay: {
                    label: "Use My Blogs For Delays",
                    type: "checkbox",
                    default: !1
                },
                reCAPTCHA: {
                    label: "Auto Open/Solve Recaptcha",
                    type: "checkbox",
                    default: !1
                },
                hCaptcha: {
                    label: "Auto Open/Solve Hcaptcha",
                    type: "checkbox",
                    default: !1
                },
                YTShort: {
                    label: "Disable Youtube Short",
                    type: "checkbox",
                    default: !1
                },
                RightFC: {
                    label: "Enable Context Menu ",
                    type: "checkbox",
                    default: !1
                },
                BlockFC: {
                    label: "Enable Always Ready",
                    type: "checkbox",
                    default: !1
                },
                TimerFC: {
                    label: "Enable Fast Timer ",
                    type: "checkbox",
                    default: !1
                },
                AutoDL: {
                    label: "Auto Download For Supported Sites",
                    type: "checkbox",
                    default: !1
                }
            }
        });
    1 == t.get("TimerFC") && function() {
            const t = e.setTimeout,
                n = e.setInterval;
            Object.defineProperty(e, "setTimeout", {
                value: function(e, n) {
                    return 1e3 === n && (n = 50), t.apply(this, arguments)
                }
            }), Object.defineProperty(e, "setInterval", {
                value: function(e, t) {
                    return 1e3 === t && (t = 50), n.apply(this, arguments)
                }
            })
        }(),
        function() {
            "use strict";
            const n = t.get("ApiKey"),
                o = e => document.querySelector(e),
                a = e => document.querySelectorAll(e),
                i = new URLSearchParams(location.search),
                r = new URLSearchParams(document.location.search),
                l = new RegExp(/^\?([^&]+)/),
                s = e => document.getElementsByTagName(e),
                c = e => null !== o(e);

            function u(e) {
                return new Promise((t => setTimeout(t, e)))
            }

            function h(e, t) {
                setTimeout((function() {
                    c(e) ? t(o(e)) : h(e, t)
                }), 1e3)
            }

            function d(t, n = 1, a = "setTimeout") {
                c(t) && e[a]((function() {
                    o(t).click()
                }), 1e3 * n)
            }

            function p(t, n = 1, a = "setTimeout") {
                c(t) && e[a]((function() {
                    o(t).submit()
                }), 1e3 * n)
            }

            function m(e) {
                return !(!e.offsetHeight && !e.offsetWidth) && "hidden" !== getComputedStyle(e).visibility
            }

            function f(e) {
                document.head.appendChild(Object.assign(document.createElement("meta"), {
                    name: "referrer",
                    content: "origin"
                })), Object.assign(document.createElement("a"), {
                    href: e
                }).click()
            }

            function b(e, t) {
                if (!new RegExp(e).test(location.host)) return;
                const n = a(t);
                for (const e of n) e.remove()
            }

            function g(e, n = !0) {
                location = n && t.get("BlogDelay") ? "https://free4u.nurul-huda.or.id/?BypassResults=" + e : e
            }

            function y(t, n) {
                var o = e[n];
                e[n] = function(...e) {
                    const n = String(e);
                    return new RegExp(t).test(n) && (e[0] = function() {}), o.call(this, ...e)
                }
            }

            function k(e, t = 1) {
                let n = "string" == typeof e ? o(e).closest("form") : e;
                console.log(n), setTimeout((() => {
                    n.submit()
                }), 1e3 * t)
            }

            function w(e) {
                return new Promise((function(t, n) {
                    let a = o(e);
                    a ? t(a) : new MutationObserver((function(n, i) {
                        a = o(e), a && (t(a), i.disconnect())
                    })).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                    })
                }))
            }

            function v(e, t = 0) {
                const n = ["mouseover", "mousedown", "mouseup", "click"],
                    o = e.split(", ");
                return o.length > 1 ? o.forEach(v) : t > 0 ? u(1e3 * t).then((function() {
                    v(e, 0)
                })) : void w(e).then((function(e) {
                    e.removeAttribute("disabled"), e.removeAttribute("target"), n.forEach((t => {
                        const n = new MouseEvent(t, {
                            bubbles: !0
                        });
                        e.dispatchEvent(n)
                    }))
                }))
            }

            function x(e, t, n, o = !1) {
                return o && (e = (e = (e = e.replaceAll(" ", "")).trim()).replaceAll("\n", " ")), e.slice(e.indexOf(t) + t.length, e.indexOf(n, e.indexOf(t) + t.length))
            }

            function I(e, t, n) {
                if (!e.test(location.host)) return;
                if ("function" == typeof t) return t();
                if (Array.isArray(t) && (t = {
                        "/": t
                    }), !(location.pathname in t)) return;
                const [o, a] = t[location.pathname];
                if ("object" == typeof o && o.test(location.search)) return g(a + RegExp.$1, n);
                i.has(o) && g(a + i.get(o), n)
            }

            function z(e, t, n = "", o = !1, a = !1) {
                if ((e => new RegExp(e).test(location.host))(e))
                    if ("string" == typeof t && t.split(",").every((e => i.has(e)))) {
                        const r = t.split(",").at(0);
                        g(n + (a ? i.getAll(r).find((t => new RegExp(e).test(t))) : i.get(r)), o)
                    } else if ("object" == typeof t) {
                    const n = t[location.pathname];
                    if (!n) return;
                    z(e, ...n)
                }
            }

            function j(t, n) {
                if (c(".g-recaptcha")) {
                    let t = setInterval((() => {
                        0 !== e.grecaptcha.getResponse().length && (clearInterval(t), k(".g-recaptcha", 1))
                    }), 1e3)
                } else if (c(".h-captcha")) {
                    let t = setInterval((() => {
                        0 !== e.hcaptcha.getResponse().length && (clearInterval(t), k(".h-captcha", 1))
                    }), 1e3)
                } else if (c(".cf-turnstile")) {
                    let t = setInterval((() => {
                        0 !== e.turnstile.getResponse().length && (clearInterval(t), k(".cf-turnstile", 1))
                    }), 1e3)
                } else c("input[name=_iconcaptcha-token]") ? _(t) : k(t, n)
            }

            function _(t) {
                if (c("iframe[src^='https://newassets.hcaptcha.com']")) return 0 !== e.hcaptcha.getResponse().length;
                if (c("input[name='cf-turnstile-response']")) return 0 !== e.turnstile.getResponse().length;
                if (c("iframe[title='reCAPTCHA']")) return 0 !== e.grecaptcha.getResponse().length;
                if (c("#iconcaptcha")) {
                    let e = setInterval((() => {
                        o(".iconcaptcha-holder.iconcaptcha-theme-light.iconcaptcha-success") && (clearInterval(e), k(t, 1))
                    }), 1e3)
                }
            }

            function T(e, t = {}) {
                return new Promise((function(n, o) {
                    GM_xmlhttpRequest({
                        method: t.method ? ? "GET",
                        url: e,
                        responseType: t.responseType ? ? "json",
                        headers: t.headers,
                        data: t.data,
                        onload: function(e) {
                            n(e.response)
                        }
                    })
                }))
            }

            function S() {
                [].forEach.call(["contextmenu", "visibilitychange", "cut", "paste", "blur", "mouseleave", "keyup", "drag", "dragstart", "hasFocus", "focus", "select", "selectstart", "webkitvisibilitychange", "mozvisibilitychange"], (function(e) {
                    document.addEventListener(e, (function(e) {
                        e.stopPropagation()
                    }), !0)
                }))
            }
            z("gocmod.com", "urls", ""), z("writedroid.in", "token", ""), z("web1s.com", "token,url", ""), z("modmania.eu.org", "token", ""), y("(4d-bl0ck3r|ad-blocker)", "setTimeout"), z("ruwet.us", "link", "https://yo.adlinku.com/"), z("hrpunjab.in", "grey", "https://go.linkco.pro/"), z("autodime.com", "go", "https://go.linkrex.net/"), z("techstudify.com", "link", "https://rplink.in/"), z("zubatecno.com", "link", "https://go.flyzu.icu/"), z("veganab.co", "link", "https://techy.veganab.co/"), z("hiharshit.in", "post", "https://easytoclick.in/"), z("tanytech.com", "link", "https://go.hexlinks.xyz/"), z("healthynepal.in", "post", "https://ez4short.xyz/"), z("vslinks.online", "link", "https://ad.vslinks.in/"), z("1apple.xyz", "link", "https://link.turkdown.com/"), z("recipejaano.com", "link", "https://ads.kbfly.in/"), z("dilmibriva.store", "post", "https://cutplus.xyz/"), z("caraccidants.xyz", "link", "https://shorterx.com/"), z("videolyrics.in", "p", "https://ser3.crazyblog.in/"), z("trendtrove.vip", "post", "https://tinylinker.pro/"), z("blogsward.com", "adlinkfly", "https://linkpay.top/"), z("nisnisin.com", "link", "https://link.ezlinkad.com/"), z("candleoflife.fun", "token", "https://shortsurl.pro/"), z("suntechu.in", "post", "https://web.urllinkshort.in/"), z("market.finclub.in", "link", "https://go.tnshort.net/"), z("bantenexis.com", "link", "https://link.youshort.net/"), z("techkeshri.com", "link", "https://go.paisakamalo.in/"), z("indirasari.com", "link", "https://link.paid4link.com/"), z("wikitraveltips.com", "link", "https://adrinolinks.in/"), z("smallinfo.in", "link", "https://filmypoints.in/?link="), z("pglink.online", "adlinkfly", "https://link.pglink.in/"), z("mvplaylink.in.net", "post", "https://mplaylink.com/s/"), z("ww1.linktrims.com", "link", "https://go.linktrims.com/"), z("healthynepal.in", "link", "https://go.tgshortener.com/"), z("missionhight.in", "link", "https://playdisk.url2go.in/"), z("tech.techwhom.com", "jeton", "https://we.techwhom.com/"), z("encurtaclik.com", "link", "https://go.encurtaclik.com/"), z("appkamods.com", "link", "https://go.shorturllinks.com/"), z("cybertechng.com", "link", "https://go.cybertechng.com/"), z("conghuongtu.net", "adlinkfly", "https://bitlinks.site/"), z("loan.filmypoints.in", "link", "https://link.e2share.in/"), z("cinemapettai.in", "post", "https://getlink.sxslink.com/"), y("(/adblock|/ad-now.php|/bypass|/detected.html)", "setInterval"), z("market.gorating.in", "link", "https://go.onepagelink.in/"), z("videoslyrics.com", "postid", "https://ser3.crazyblog.in/"), z("earn.tensailab.com", "adlinkfly", "https://go.snaply.in/"), z("postazap.com", "link", "https://encurtador.postazap.com/"), z("mamahawa.com", "get", "https://forextrader.site/SkipLink/"), z("prakasheditingtamizhan.com", "link", "https://kpslink.in/"), z("mmdrive.xyz", "link", "https://techleets.xyz/no.php?link="), z("reminimod.co", "land", "https://insurance.techymedies.com/"), z("tech.filmypoints.in", "go", "https://finance.smallinfo.in/"), z("dpbossreal.com", "adlinkfly", "https://short.adslinko.com/"), z("tbhlabsnews.com", "link", "https://getlink.tbhlabsnews.com/"), z("interestingfactsare.com", "link", "https://m.urlbharat.xyz/"), z("dealprice.co", "adlinkfly", "https://cryptorotator.website/"), z("djnonstopmusic.in", "link", "https://gadgets.ishortify.com/"), z("tech.filohappy.in", "link", "https://happyfiles.dtglinks.in/"), z("vietnamtravelguide.top", "post", "https://bestshortlink.top/"), z("earn.hostadviser.net", "token", "https://go.hostadviser.net/"), z("kelasadsense.com", "adlinkfly", "https://link.paid4link.com/"), z("viralsinfo.com", "token", "https://getslinks.online/download/"), z("insuranceinfos.in", "post", "https://tech.smallinfo.in/Gadget/"), z("www.filmypoints.in", "post", "https://tech.filmypoints.in/?go="), z("cafe.warrenrahul.in", "adlinkfly", "https://go.warrenrahul.in/"), z("techurlshort.in", "grey", "https://hrpunjab.in/savise.php?grey="), z("battleroyal.online", "link", "https://zubatecno.com/safe.php?link="), z("rajdhanimaja.com", "grey", "https://techurlshort.in/inuser.php?grey="), z("highkeyfinance.com", "landhere", "https://insurance.techymedies.com/"), z("apasih.my.id|healthydad.my.id", "link", "https://link.get4llink.com/"), z("financeyogi.net", "link", "https://market.finclub.in/safe2.php?link="), z("iphoto.site", "post", "https://vietnamtravelguide.top/token.php?post="), z("(gam3ah|m4cut|soft3arbi|elmokhbir|fatednews|itechmafiia).com", "link", ""), I(/aprovax.com/, {
                "/": [l, "https://paylinnk.com/"]
            }, !1), I(/lootcash.vip/, {
                "/verify/": [l, "http://ads.lootcash.vip/"]
            }, !1), I(/mixrootmods.com/, (function() {
                S(), e.checkStatus = e.off
            })), I(/duplichecke.com/, {
                "/verify/": [l, "http://blog.dclink.site/"]
            }, !1), I(/dreamistore.com/, {
                "/verify/": [l, "http://final.eductin.com/"]
            }, !1), I(/techyadjectives.com/, {
                "/check/": [l, "https://demo.pvidly.in/"]
            }, !1), I(/cyberstockofficial.in/, {
                "/cook.php": [l, "http://cyberurl.in/"]
            }, !1), I(/mkvflix.org/, {
                "/verify/": [l, "http://go.superfastdownloads.net/"]
            }, !1), I(/link.bicolink.net/, (function() {
                location = location.href.replace("link", "go")
            })), I(/link.vipurl.in/, (function() {
                location = location.href.replace("link", "count")
            })), I(/infinityskull.com/, {
                "/safe.php": ["link", "https://go.publicearn.com/"]
            }, !1), I(/sakarnewz.com/, {
                "/multi/": [l, "http://multiquality.xyz/download/"]
            }, !1), I(/link.linksfire.co/, (function() {
                location = location.href.replace("link", "blog")
            })), I(/speedynews.xyz/, {
                "/blog/verify/": [l, "https://links.speedynews.xyz/"]
            }, !1), I(/studyuo.com/, {
                "/pro2/verify/": [l, "https://speedynews.xyz/blog/verify/?"]
            }, !1), I(/go.link4rev.site|go.urlcash.site/, (function() {
                location = location.href.replace("go.", "")
            })), I(/olhonagrana.com/, {
                "/verify/": [l, "http://paylinnk.com/"],
                "/": [l, "https://syflink.com/"]
            }, !1), I(/dutchycorp.space/, (function() {
                i.has("code") && (location = i.getAll("code") + "?verif=0")
            })), I(/link.birdurls.com|link.owllink.net|link.illink.net/, (function() {
                location = location.href.replace("link.", "")
            })), I(/vk.com/, (function() {
                i.has("to") && location.href.includes("/away.php") && (location = decodeURIComponent(i.get("to")))
            })), I(/(teachsansar|technicalatg|foodxor).com/, (() => h("#wpsafegenerate > #wpsafe-link > a[href]", (e => g(e.href, !1))))), I(/ouo.io/, (function() {
                i.has("s") && location.href.includes("link.nevcoins.club") ? location = "https://" + i.getAll("s") : i.has("s") && (location = i.getAll("s"))
            })), I(/linkbox.to/, (function() {
                ! function(e) {
                    const t = XMLHttpRequest.prototype.open;
                    XMLHttpRequest.prototype.open = function(n, o) {
                        this.addEventListener("load", (function() {
                            this.method = n, this.url = o, e(this)
                        })), t.apply(this, arguments)
                    }
                }((function(e) {
                    if (e.url.includes("api/file/detail?itemId")) {
                        console.log(e.responseText);
                        const {
                            data: {
                                itemInfo: t
                            }
                        } = JSON.parse(e.responseText);
                        console.log(t), g(t.url, !1)
                    }
                }))
            })), I(/(desbloquea|drivelinks).me|(acortame-esto|recorta-enlace|enlace-protegido|super-enlace).com|short-info.link/, (function() {
                if (i.has("i")) {
                    g(function(e) {
                        let t = "";
                        for (let n = 0; n < e.length; n++) {
                            let o = e.charCodeAt(n);
                            t += o >= 97 && o <= 122 ? String.fromCharCode((o - 97 - 13 + 26) % 26 + 97) : o >= 65 && o <= 90 ? String.fromCharCode((o - 65 - 13 + 26) % 26 + 65) : e[n]
                        }
                        return t
                    }(function(e, t) {
                        let n = e;
                        for (let e = 0; e < t; e++) n = atob(n);
                        return n
                    }(i.get("i"), 5)).split("|")[0], !1)
                }
            })), I(/adbtc.top/, (function() {
                let t = 0;
                setInterval((function() {
                    o("div.col.s4> a") && !o("div.col.s4> a").className.includes("hide") ? (t = 0, o("div.col.s4> a").click()) : t += 1
                }), 5e3), e.onbeforeunload = function() {
                    if (unsafeWindow.myWindow && unsafeWindow.myWindow.close(), unsafeWindow.coinwin) {
                        let e = unsafeWindow.coinwin;
                        unsafeWindow.coinwin = {}, e.close()
                    }
                }
            })), I(/youtube.com/, (function() {
                if (location.href.includes("/shorts/") && t.get("YTShort") && 1 == t.get("YTShort")) {
                    location = location.href.replace("/shorts/", "/watch?v=");
                    let e = location.href;
                    new MutationObserver((() => {
                        location.href !== e && (e = location.href, location.href.includes("/shorts/") && (location = location.href.replace("/shorts/", "/watch?v=")))
                    })).observe(document, {
                        subtree: !0,
                        childList: !0
                    })
                }
            })), Object.defineProperty(HTMLFormElement.prototype, "submit", {
                writable: !1
            }), Object.defineProperty(document, "querySelector", {
                value: document.querySelector,
                configurable: !1,
                writable: !1
            });
            const A = (t => {
                switch (t.host) {
                    case "multiup.org":
                        if (t.href.includes("/download/")) return t.href.replace("download/", "en/mirror/");
                        break;
                    case "modsfire.com":
                        if (/^\/([^\/]+)/.test(t.pathname)) return "https://modsfire.com/d/" + RegExp.$1;
                        break;
                    case "pixeldrain.com":
                        if (t.href.includes("/u/")) return t.href.replace("u/", "/api/file/") + "?download";
                        break;
                    case "www.google.com":
                        if ("/url" === t.pathname && t.searchParams.has("q")) return t.searchParams.get("q");
                        break;
                    case "social-unlock.com":
                        if (/^\/([^\/]+)/.test(t.pathname)) return "https://social-unlock.com/redirect/" + RegExp.$1;
                        break;
                    case "work.ink":
                        if (/^\/([^\/]+)/.test(t.pathname)) return "https://adbypass.org/bypass?bypass=" + location.href.split("?")[0];
                        break;
                    case "nft.blogyindia.com":
                        if ("/safe.php" === t.pathname && t.searchParams.has("link")) return "https://go.urlpay.in/" + t.searchParams.get("link");
                        break;
                    case "my.dropz.xyz":
                        if (t.href.includes("/checkpoint") && "" === location.search) return "https://my.dropz.xyz/checkpoint?redir=/site-friends";
                        break;
                    case "go.blogyindia.com":
                        if ("/safe.php" === t.pathname && t.searchParams.has("link")) return "https://go.urlblink.com/" + t.searchParams.get("link");
                        break;
                    case "patak.dropz.xyz":
                        if (t.href.includes("/checkpoint") && "" === location.search) return "https://patak.dropz.xyz/checkpoint?redir=/site-friends";
                        break;
                    case "blogyindia.com":
                        if ("/safe.php" === t.pathname && t.searchParams.has("link")) return "https://link.blogyindia.com/" + t.searchParams.get("link");
                        break;
                    case "sub2unlock.com":
                        if (/^\/([^\/]+)/.test(t.pathname) && !location.href.includes("/unlock")) return "https://sub2unlock.com/link/unlock/" + RegExp.$1;
                        break;
                    case "crypto.webseriesreel.in":
                        if ("/safe.php" === t.pathname && t.searchParams.has("link")) return "https://nft.blogyindia.com/safe.php?link=" + t.searchParams.get("link");
                        break;
                    case "adbull.me":
                    case "uii.io":
                    case "shortano.link":
                    case "shortino.link":
                    case "clk.st":
                    case "clks.pro":
                    case "chainfo.xyz":
                    case "clicksfly.com":
                    case "dailytime.store":
                    case "cryptoflare.cc":
                    case "ez4short.com":
                    case "fc.lc":
                    case "cutp.in":
                    case "saly.io":
                    case "earnow.online":
                    case "exe.io":
                    case "gplinks.in":
                    case "linkjust.com":
                    case "sl.btc25.org":
                    case "linkfly.me":
                    case "linksfire.co":
                    case "adlink.click":
                    case "gigafly.me":
                    case "traffic1s.com":
                    case "link4rev.site":
                    case "linkrex.net":
                    case "opli.xyz":
                    case "www.clink2.com":
                    case "linksly.co":
                    case "shortyearn.com":
                    case "upshrink.com":
                    case "tr.link":
                    case "nanolinks.in":
                    case "megaurl.in":
                    case "adshort.co":
                    case "atglinks.comk":
                    case "shrinkforearn.in":
                    case "shorti.io":
                    case "try2link.com":
                    case "terafly.me":
                    case "www.wts.pw":
                    case "web1s.com":
                    case "rocklinks.net":
                    case "megafly.in":
                    case "smartlink.vip":
                    case "usalink.io":
                    case "birdurls.com":
                    case "adrinolinks.in":
                    case "10short.com":
                    case "urlpay.in":
                    case "mdiskshortner.link":
                    case "cbshort.com":
                    case "besturl.link":
                    case "clk.sh":
                    case "droplink.co":
                    case "adpaylink.com":
                    case "botfly.me":
                    case "paid4link.com":
                    case "owllink.net":
                    case "cuty.io":
                    case "octolinkz.com":
                    case "doshrink.com":
                    case "cashando.me":
                    case "revly.click":
                    case "shorterall.com":
                    case "shrinkearn.com":
                    case "shrinkme.io":
                    case "shortox.com":
                    case "linksfly.link":
                    case "oii.io":
                    case "ay.live":
                    case "timeforearn.com":
                    case "urlstox.com":
                    case "lollty.com":
                        var n = t.searchParams.has("api") && t.searchParams.has("url");
                        if (n && t.href.includes("solarchaine.com") || t.href.includes("hr.vikashmewada.com") || t.href.includes("sclick.crazyblog.in") || t.href.includes("ser7.crazyblog.in")) return "https://" + t.searchParams.getAll("url");
                        if (n && t.href.includes("freeltc.top") || t.href.includes("freecrypto.top") || t.href.includes("insfly.pw") || t.href.includes("Insfly.pw") || t.href.includes("mdiskshortner.link") || t.href.includes("clockads.in") || t.href.includes("exashorts.fun") || t.href.includes("videolyrics.in"));
                        else {
                            if (n && t.href.includes("terafly.me")) return "https://" + t.searchParams.getAll("url");
                            if (n && t.href.includes("adnews.me")) return t.searchParams.getAll("url").filter((e => /http(s|):\/\/adnews.me/.test(e)))[0];
                            if (n && t.href.includes("kyshort.xyz")) return t.searchParams.getAll("url").filter((e => /http(s|):\/\/kyshort.xyz/.test(e)))[0];
                            if (n && t.href.includes("eazyurl.xyz")) return t.searchParams.getAll("url").filter((e => /http(s|):\/\/eazyurl.xyz/.test(e)))[0];
                            if (n && t.href.includes("linksfly.top")) return t.searchParams.getAll("url").filter((e => /http(s|):\/\/linksfly.top/.test(e)))[0];
                            if (n && t.href.includes("playstore.pw")) return t.searchParams.getAll("url").filter((e => /http(s|):\/\/playstore.pw/.test(e)))[0];
                            if (n && t.href.includes("#")) return t.searchParams.getAll("url") + e.location.hash;
                            if (t.searchParams.has("api") && t.searchParams.has("url")) return t.searchParams.getAll("url")
                        }
                }
            })(new URL(location.href));

            function P() {
                b("nguyenvanbao.com|nghiencar.com", ".content-area,.site-content"), b("mohtawaa.com", "div.form-group > div,.col-sm-12.col-lg-3.col,li,h3,h4,p,.col-sm-12.col-lg-8.col,h2"), b("btcbitco.in|readbitcoin.org|btcsatoshi.net|wiour.com|manofadan.com|crypto4yu.com", "button[onclick^='window.location']"), b("mdn.lol|kenzo-flowertag.com|homeculina.com|ineedskin.com|lawyex.co|chefslink.org", "form input[value^='Continue'],form[id] div[style^='margin:']"), b("vailonxx.com|fun88.bio", ".page-header,div.col-xl-3.col-lg-3.col-md-4.col-6,.hero-text,#wrapper-navbar,.happy-section,#wrapper-footer,.col-12.d-md-block.d-none,.col-12.d-md-none.d-block,.modal-dialog");
                let l, y = o("input.captcha_code");

                function z(e) {
                    return parseInt(e.style.paddingLeft)
                }
                y && (l = y.parentElement.previousElementSibling.children[0].children, y.value = [].slice.call(l).sort((function(e, t) {
                    return z(e) - z(t)
                })).map((function(e) {
                    return e.textContent
                })).join(""));
                let A = e.jQuery;
                if (["lopteapi.com", "3link.co", "web1s.com", "vuotlink.vip"].includes(location.host)) d("a.btn.btn-success.btn-lg.get-link", 3, "setInterval");
                else if (["ay.live", "aylink.co", "gitlink.pro"].includes(location.host)) {
                    var P = A("form[id=go-link]");
                    A.ajax({
                        type: "POST",
                        async: !0,
                        url: P.attr("action"),
                        data: P.serialize(),
                        dataType: "json",
                        success: function(e) {
                            g(e.url)
                        }
                    })
                } else c("form[id=go-link]") && A("form[id=go-link]").unbind().submit((function(e) {
                    e.preventDefault();
                    var t = A(this),
                        n = t.attr("action");
                    const o = t.find("button"),
                        a = A(".navbar-collapse.collapse"),
                        i = A(".main-header"),
                        r = A(".col-sm-6.hidden-xs");
                    A.ajax({
                        type: "POST",
                        url: n,
                        data: t.serialize(),
                        beforeSend: function(e) {
                            o.attr("disabled", "disabled"), A("a.get-link").text("Bypassed by Bloggerpemula"), a.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>'), i.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>'), r.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>')
                        },
                        success: function(e, t, n) {
                            n.responseText.match("(insfly|Insfly).pw|(freecrypto|freeltc|a-s-cracks).top|mdiskshortner.link|(oscut|exashorts).fun|bigbtc.win|adbitfly.com|slink.bid|clockads.in|(promo-visits|rexlink).site") ? location.href = e.url : g(e.url)
                        }
                    })
                }));
                const C = (e => {
                    const n = "/verify/" === e.pathname && /^\?([^&]+)/.test(e.search),
                        o = {
                            isNotifyNeeded: !1,
                            redirectDelay: 0,
                            link: void 0
                        };
                    switch (e.host) {
                        case "okrzone.com":
                            n && f("https://gtlink.co/" + RegExp.$1);
                            break;
                        case "gamerfang.in":
                            n && f("https://faux.gamerfang.in/tech/" + RegExp.$1);
                            break;
                        case "videolyrics.in":
                            n && f("https://cryptolink.trxking.xyz/" + RegExp.$1);
                            break;
                        case "blog.mphealth.online":
                            n && f("https://techyuth.xyz/blog/" + RegExp.$1);
                            break;
                        case "techrayzer.com":
                            n && f("https://techrayzer.com/insurance/" + RegExp.$1);
                            break;
                        case "economiarelevante.com.br":
                            n && f("https://shrinkgold.com/" + RegExp.$1);
                            break;
                        case "mphealth.online":
                            n && f("https://blog.mphealth.online/verify/?" + RegExp.$1);
                            break;
                        case "shrs.link":
                        case "shareus.io":
                            if (/^\/old\/([^\/]+)/.test(e.pathname)) return "https://jobform.in/?link=" + RegExp.$1;
                            break;
                        case "www.gifans.com":
                            if (/^\/link\/([^\/]+)/.test(e.pathname)) return "https://shortlink.prz.pw/" + RegExp.$1;
                            break;
                        case "zonearn.biz":
                            if (/^\/(.+)/.test(e.pathname) && e.searchParams.has("tok")) return e.searchParams.get("tok");
                            break;
                        case "nulledsafe.com":
                            if (/^\/link\/([^\/]+)/.test(e.pathname)) return "https://golink.nulledsafe.com/" + RegExp.$1;
                            break;
                        case "www.pythondunyasi.com":
                            if ("/p/blog-page_22.html" === e.pathname && e.searchParams.has("url")) return e.searchParams.get("url").substring(1);
                            break;
                        case "free4u.nurul-huda.or.id":
                        case "rotator.nurul-huda.sch.id":
                            if ("/" === e.pathname && e.searchParams.has("BypassResults")) return o.link = decodeURIComponent(location.href.split("BypassResults=")[1].replace("&m=1", "")), o.redirectDelay = t.get("SetDelay"), o.isNotifyNeeded = !0, o;
                            break;
                        case "jrlinks.in":
                            "/safe2.php" === e.pathname && e.searchParams.has("link") && f("https://internet.webhostingtips.club/" + e.searchParams.get("link"));
                            break;
                        case "kiiw.icu":
                            if ("/check.php" === e.pathname && e.searchParams.has("alias") && e.searchParams.has("wis") && e.searchParams.has("siw")) return "https://kiiw.icu/" + e.searchParams.get("alias") + "?wis=" + e.searchParams.get("wis") + "&siw=" + e.searchParams.get("siw")
                    }
                })(new URL(location.href));
                if (C) {
                    const {
                        isNotifyNeeded: e,
                        redirectDelay: n,
                        link: o
                    } = C;
                    e && function(e, n = t.get("SetDelay")) {
                        const o = document.createElement("div");
                        o.style.padding = "1px", o.style.zIndex = 99999999, o.style.position = "fixed", o.style.width = "970px", o.style.top = "275px", o.style.left = innerWidth / 2 - 485 + "px", o.style.font = "normal bold 17px sans-serif", o.style.backgroundColor = "gold", o.style.boxSizing = "border-box", o.innerText = e.replace("@", n), document.documentElement.appendChild(o);
                        const a = setInterval((() => {
                            (n -= 1) <= 0 ? clearInterval(a) : o.innerText = e.replace("@", n)
                        }), 1e3)
                    }("Please Wait in @ Seconds , Tell Amm0ni4 to Delete His Debloated if You Want My Script to be Updated Regularly , Thanks"), setTimeout((() => {
                        location.href = o
                    }), 1e3 * n)
                }
                1 == t.get("AutoDL") && (I(/upload.ee/, (function() {
                    d("#d_l", 2)
                })), I(/appdrive\.*/, (function() {
                    d("#drc", 2)
                })), I(/dddrive.me/, (function() {
                    d(".btn-outline-primary", 2)
                })), I(/uppit.com/, (function() {
                    d(".btn-primary.btn-xl.btn", 2)
                })), I(/krakenfiles.com/, (function() {
                    d(".download-now-text", 2)
                })), I(/gofile.io/, (function() {
                    h("a.me-1", (e => e.click()))
                })), I(/birlink.vip/, (function() {
                    d(".btn-lg.btn-success.btn", 2)
                })), I(/karanpc.com/, (function() {
                    p("#downloadButton > form", 2)
                })), I(/file-upload.net/, (function() {
                    d("#downbild.g-recaptcha", 2)
                })), I(/userscloud.com|dosya.co/, (function() {
                    d("#btn_download", 2)
                })), I(/hexupload.net/, (function() {
                    d(".btn-success.btn-lg.btn", 1)
                })), I(/rapidgator.net/, (function() {
                    d(".btn-free.act-link.link", 2)
                })), I(/dbree.me/, (function() {
                    d(".center-block.btn-default.btn", 2)
                })), I(/megaupto.com/, (function() {
                    d("#direct_link > a:nth-child(1)", 2)
                })), I(/dataupload.net/, (async function() {
                    await u(5e3), v(".downloadbtn")
                })), I(/douploads.net/, (function() {
                    d(".btn-primary.btn-lg.btn-block.btn", 2)
                })), I(/linkerload.com/, (function() {
                    d("#download form input[id='button1']", 2)
                })), I(/buzzheavier.com/, (function() {
                    h("#download-link", (e => e.click()))
                })), I(/filemoon.sx/, (() => h("div.download2 a.button", (e => g(e.href, !1))))), I(/bestfonts.pro/, (() => h(".download-font-button > a:nth-child(1)", (e => g(e.href))))), I(/oyroid.com/, (function() {
                    e.triggerFreeDownload(), v(".py-3.w-100.btn-success.btn", 5)
                })), I(/files.fm/, (() => h("#head_download__all-files > div > div > a:nth-child(1)", (e => e.click())))), I(/megaup.net/, (function() {
                    h("a.btn.btn-default", (e => e.click())), d("#btndownload", 7)
                })), I(/4fnet.org/, (function() {
                    if (location.href.includes("/goto")) {
                        let e = location.href.split("/").slice(-1);
                        g(atob(e), !1)
                    }
                })), I(/oxy\.*/, (function() {
                    if (c("#divdownload")) {
                        g(o(".ocdsf233").getAttribute("data-source_url"), !1)
                    }
                })), I(/gdtot\.*/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), p("form[action='/ondl']"))
                    }), 1e3);
                    location.href.includes("/ondl") && h("#dirdown", (e => g(x(e.onclick.toString(), "myDl('", "')"), !1)))
                })), I(/mp4upload.com/, (function() {
                    d("#todl", 2), p("form[name='F1']", 1)
                })), I(/drop.download/, (function() {
                    d("#method_free", 2), d(".btn-download", 2)
                })), I(/workupload.com/, (function() {
                    c("#download") && d(".btn-prio.btn", 2)
                })), I(/hxfile.co|ex-load.com|megadb.net/, (function() {
                    d(".btn-dow.btn", 2), p("form[name='F1']", 1)
                })), I(/send.cm/, (function() {
                    c("#fileinfo") && d("#downloadbtn", 1)
                })), I(/racaty.io/, (function() {
                    c("#getExtoken") && d("#downloadbtn", 1)
                })), I(/racedepartment.com/, (function() {
                    A("a[target='_blank']").removeAttr("target"), d(".button--cta", 2)
                })), I(/mega4up.org/, (function() {
                    d("input.btn.btn-info.btn-sm", 2), d(".btn-dark.btn", 2)
                })), I(/docs.google.com/, (function() {
                    c("#uc-dl-icon") && p("#downloadForm", 1)
                })), I(/uploadhaven.com/, (function() {
                    d(".alert > a:nth-child(1)", 2), p("#form-download", 1)
                })), I(/novafile.org/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".xbtn-green"))
                    }), 1e3);
                    d("#btnddl", 90), d("a.btn.btn-green", 1)
                })), I(/k2s.cc/, (function() {
                    d(".button-download-slow", 2), h("a.link-to-file", (e => g(e.href, !1)))
                })), I(/ac.totsugeki.com/, (function() {
                    A("a[target='_blank']").removeAttr("target"), d(".btn-lg.btn-success.btn", 2)
                })), I(/mega4upload.com/, (function() {
                    setInterval((function() {
                        _() && d("#downloadbtn")
                    }), 500);
                    d(".btn-sm.btn-info.btn", 1), d(".btn-dark.btn-sm.btn", 1)
                })), I(/uploady.io/, (function() {
                    setInterval((function() {
                        _() && d("#downloadbtn")
                    }), 500);
                    d(".fa-turtle.fas", 2), d(".mb-4.btn-block.btn-primary.btn", 2)
                })), I(/up-load.io|downloadani.me/, (function() {
                    d("input[name='method_free']", 2), d(".btn-dow.btn", 1);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#downloadbtn"))
                    }), 1e3)
                })), I(/anonym.ninja/, (function() {
                    location.href.includes("download/") && g(`https://anonym.ninja/download/file/request/${e.location.href.split("/").slice(-1)[0]}`)
                })), I(/vosan.co/, (function() {
                    o(".elementor-size-lg").removeAttribute("target"), d(".elementor-size-lg", 2), d(".wpdm-download-link", 2)
                })), I(/apkmody.io/, (function() {
                    c("div.wp-block-buttons > div") && (location = location.href + "/download/mod")
                })), I(/mdfx9dc8n.net/, (() => {
                    d(".download-btn", 2), setTimeout((() => {
                        g(o(".download-btn.btn3.btn").href, !1)
                    }), 6e3)
                })), I(/takefile.link/, (function() {
                    c("#F1") && p("div.no-gutter:nth-child(2) > form:nth-child(1)", 1)
                })), I(/chedrives.com/, (function() {
                    d(".downloadbtn", 3, "setInterval"), d(".mngez-free-download", 2), h("span#direct_link a", (e => g(e.href, !1)))
                })), I(/appsblaze.com/, (function() {
                    c("#box-0") && h("input[name='slink']", (e => g(e.href, !1)))
                })), I(/modcombo.com/, (function() {
                    location.href.includes("download/") ? (h("div.item.item-apk a", (e => g(e.href, !1))), d("a.btn.btn-submit", 6)) : d("a.btn.btn-red.btn-icon.btn-download.br-50", 2)
                })), I(/userupload.net/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#downloadbtn"))
                    }), 1e3);
                    h("a.btn.btn-primary.btn-block.mb-4", (e => g(e.href, !1)))
                })), I(/1fichier.com/, (function() {
                    c("#pass") || (d(".btn-orange.btn-general.ok", 1), p(".alc", 1))
                })), I(/upload-4ever.com|up-4ever.net/, (function() {
                    d("input[name='method_free']", 2), d("#downLoadLinkButton", 5);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#downloadbtn"))
                    }), 1e3)
                })), I(/fileresources.net/, (function() {
                    c(".download-timer") && h("a.btn.btn-default", (e => g(e.href, !1)))
                })), I(/3upload.com/, (function() {
                    d(".btn-info.btn", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#downloadbtn"))
                    }), 1e3)
                })), I(/freepreset.net/, (function() {
                    c("#button_download") && h("a#button_download", (e => g(e.href, !1)))
                })), I(/doodrive.com/, (function() {
                    d(".tm-button-download.uk-button-primary.uk-button", 3), h(".uk-container > div > .uk-button-primary.uk-button", (e => g(e.href, !1)))
                })), I(/gocmod.com/, (function() {
                    c(".view-app") && (o("#no-link").removeAttribute("target"), d(".download-line-title", 2))
                })), I(/(uploadrar|fingau|getpczone|wokaz).com|uptomega.me/, (function() {
                    d(".mngez-free-download", 2), d("#direct_link > a:nth-child(1)", 2), A("#downloadbtn").click()
                })), I(/dailyuploads.net/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#downloadBtnClickOrignal"))
                    }), 500);
                    d(".inner > a", 2)
                })), I(/9xupload.asia/, (function() {
                    p("form[name='F1']", 1), d("#container > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)", 2)
                })), I(/mediafire.com/, (function() {
                    var t, n = o(".download_link .input").getAttribute("href");
                    console.log(n), location.replace(n), t = setInterval((function() {
                        e.close(), clearInterval(t)
                    }), 5e3)
                })), I(/qiwi.gg/, (function() {
                    if (c("div [class^='page_DownloadPage']")) {
                        d("button[class^='DownloadButton_ButtonSoScraperCanTakeThisName']", 2);
                        let e = o("a[class^='DownloadButton_DownloadButton']");
                        setTimeout((() => {
                            g(e.href, !1)
                        }), 3e3)
                    }
                })), I(/usersdrive.com|ddownload.com/, (function() {
                    setInterval((function() {
                        _() && d("#downloadbtn")
                    }), 500);
                    d(".btn-download.btn", 1)
                })), I(/sharemods.com/, (function() {
                    p("#dForm", 2), c(".download-file-holder") && h("a#downloadbtn.btn.btn-primary", (e => g(e.href, !1)))
                })), I(/mexa.sh/, (function() {
                    parent.open = 1, d("#Downloadfre", 2), d("#direct_link", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".downloadbtn"))
                    }), 1e3)
                })), I(/(kusonime|oploverz).org|(opinimedia|beritaotaku|caramasak).com|otakudesu.cc|resepkoki.net|neonime\.*/, (function() {
                    h(".bg-gb.dwto.sdw", (e => e.click())), h("a.sdw.dwto.bg-gb", (e => g(e.href, !1)))
                })), I(/pdfcoffee.com/, (function() {
                    d(".btn-block.btn-success.btn", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".my-2.btn-block.btn-primary.btn-lg.btn"))
                    }), 1e3)
                })), I(/adoc.pub/, (function() {
                    d(".btn-block.btn-success.btn", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".mt-15.btn-block.btn-success.btn-lg.btn"))
                    }), 1e3)
                })), I(/clickndownload.org|clicknupload\.*/, (function() {
                    c(".download") && (d("span.downloadbtn", 10), d("#method_free", 2), h("a.downloadbtn", (e => g(e.href, !1))))
                })), I(/leechpub.com/, (function() {
                    c(".text-center.py-6") && h("a.btn.btn-lg.btn-success.mb-1.px-6.lh-10", (e => g(e.href, !1)))
                })), I(/uploadev.org/, (function() {
                    setInterval((function() {
                        _() && d("#downloadbtn")
                    }), 500);
                    d("#dspeed > input:nth-child(3)", 1), d(".directl", 1)
                })), I(/rawlazy.si/, (function() {
                    c("#captcha_form") ? d(".go-to-captcha-form", 2) : h(".color-btn", (e => g(e.href, !1)))
                })), I(/modsbase.com/, (function() {
                    c(".file-panel") && (d(".download-file-btn", 2), h("#downloadbtn > a", (e => g(e.href, !1))))
                })), I(/dropgalaxy.com/, (function() {
                    d("button[id^='method_fre']", 2), d("button[name='fs_download_file']", 3, "setInterval"), h("a.btn.btn-block.btn-lg.btn-primary", (e => g(e.href, !1)))
                })), I(/file-upload.com|file-upload.org/, (function() {
                    d(".m-2.submit-btn.btn-outline-primary.btn", 2), d(".download-btn", 2);
                    let e = setInterval((function() {
                        _() && (clearInterval(e), d("#downloadbtn"))
                    }), 500)
                })), I(/downloader.tips/, (() => {
                    let e = setInterval((() => {
                        _() ? (clearInterval(e), d(".mb-1 > .btn-primary.btn")) : "0" == o("#count").innerText && (clearInterval(e), d(".btn-primary.btn"))
                    }), 1e3)
                })), I(/hitfile.net/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#submit"))
                    }), 1e3);
                    h("a.btn-grey.nopay-btn", (e => g(e.href, !1))), h("#popunder2", (e => g(e.href, !1)))
                })), I(/(thecubexguide|miuiflash).com|(djxmaza|jytechs).in/, (function() {
                    c(".premium") && (v("a#dlbtn.btn.btn-secondary.btn-block.mb-4", 2), d("#downloadbtnf", 3), d("#downloadbtn", 4, "setInterval"))
                })), I(/filedm.com/, (function() {
                    c("#dlbutton") && h("#dlbutton", (e => g("http://cdn.directfiledl.com/getfile?id=" + e.href.split("_")[1], !1)))
                })), I(/gogodl.com/, (() => {
                    h("a.crumina-button.button--green.button--bordered.button--m.w-100", (e => g(e.href, !1))), d(".w-100.button--m.button--bordered.button--green.crumina-button", 5, "setInterval");
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".w50.button--m.button--bordered.button--green.crumina-button"))
                    }), 1e3)
                })), I(/turbobit.net/, (() => {
                    if (c("#turbo-table")) {
                        g(o("#nopay-btn").href, !1)
                    }
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#submit"))
                    }), 500);
                    h("#free-download-file-link", (e => g(e.href, !1)))
                })), I(/drive.google.com/, (function() {
                    var t = e.location.href.split("/").slice(-2)[0];
                    e.location.href.includes("drive.google.com/file/d/") ? g(`https://drive.usercontent.google.com/download?id=${t}&export=download`, !1).replace("<br />", "") : e.location.href.includes("drive.google.com/u/0/uc?id") && p("#download-form", 1)
                })), I(/4shared.com/, (function() {
                    c(".d3topTitle") && A(".premium").text("IMPORTANT TRICKS By BloggerPemula : Updated Feb 2023, Look like now not working ,so Sorry at This Time i Dont have Idea to fix it . Regards..."), d(".jsDownloadButton", 2), c(".freeDownloadButton") && p("form[name^='redirectToD3Form']", 3)
                }))), I(/keeplinks.org/, (function() {
                    d("#btnchange", 2)
                })), I(/1short.io/, (function() {
                    p("#countDownForm", 7)
                })), I(/earnlink.io/, (function() {
                    d(".btn-secondary", 3)
                })), I(/mkomsel.com/, (function() {
                    d("#downloadfile", 12)
                })), I(/onimports.com.br/, (function() {
                    d("#finalLink", 2)
                })), I(/1shortlink.com/, (function() {
                    d("#redirect-link", 3)
                })), I(/1ink.cc|cuturl.cc/, (function() {
                    d("#countingbtn", 1)
                })), I(/jameeltips.us/, (function() {
                    d("#continue_button_1", 1)
                })), I(/post.copydev.com/, (function() {
                    d(".btn-success.btn", 6)
                })), I(/linegee.net/, (function() {
                    d(".btn-xs.btn-primary.btn", 2)
                })), I(/bedrat.xyz|uhtrdr47.online/, (function() {
                    d("#link1112", 5)
                })), I(/pro.sh/, (function() {
                    d(".btn-secondary", 3, "setInterval")
                })), I(/proappapk.com|meclipstudy.in/, (function() {
                    d("#gotolink", 5)
                })), I(/1bitspace.com/, (function() {
                    d(".button-element-verification", 3)
                })), I(/cshort.org/, (function() {
                    d(".timer.redirect", 3, "setInterval")
                })), I(/render-state.to/, (function() {
                    i.has("link") && e.goToLink()
                })), I(/linkpay.cc/, (function() {
                    parent.open = 1, p("#link-view", 1)
                })), I(/cooklike.info|model-tas-terbaru.com/, {
                    "/": ["link", "https://yousm.link/"]
                }, !1), I(/kisalt.digital/, (function() {
                    i.has("u") && f(atob(i.get("u")))
                })), I(/bildirim.in|bildirim.eu|bildirim.link/, (function() {
                    d("#btnPermission", 1)
                })), I(/enlacito.com/, (function() {
                    setTimeout((() => {
                        g(e.DYykkzwP, !1)
                    }), 2e3)
                })), I(/webhostingtips.club/, {
                    "/safe.php": ["link", "https://jrlinks.in/safe2.php?link="]
                }, !1), I(/michaelemad.com|7misr4day.com/, (() => h("a.s-btn-f", (e => g(e.href, !1))))), I(/shareus.io/, (function() {
                    i.has("sid") && v("button.MuiButtonBase-root", 2)
                })), I(/adtival.network/, (function() {
                    i.has("shortid") && f(atob(i.get("shortid")))
                })), I(/gobits.me|zcash.one|clickscoin.com|beycoin.xyz|bitsusdt.com|adsluffa.online/, (function() {
                    d("#mdt", 3)
                })), I(/gameblog.in/, (function() {
                    S(), k("input[type=hidden]", 3), d("div[id^=wpsafe-link] > a", 4)
                })), I(/sharetext.me/, (function() {
                    location.href.includes("/redirect") && i.has("url") && f(atob(i.get("url")))
                })), I(/btcsatoshi.net/, (async function() {
                    S(), e.check2(), e.check3(), d("button.btn.btn-primary.btn-lg")
                })), I(/(cutnet|cutsy|cutlink).net|(cutty|exego|cety).app|gamco.online/, (function() {
                    d("#submit-button", 5, "setInterval")
                })), I(/sfl.gl|moneyblink.com/, (function() {
                    location.href.includes("/ready") && i.has("u") && f(atob(i.get("u")))
                })), I(/comohoy.com/, (function() {
                    location.href.includes("/grab/out.html") && i.has("url") && f(atob(i.get("url")))
                })), I(/apkw.ru/, (function() {
                    if (location.href.includes("/away")) {
                        let e = location.href.split("/").slice(-1);
                        g(atob(e), !1)
                    }
                })), I(/cryptomonitor.in|2the.space|imbb.online/, (function() {
                    S(), p("form[name='dsb']", 3), d("#wpsafe-link > a", 4)
                })), I(/(newsbawa|utkarshonlinetest).com/, (function() {
                    d("#citr-click", 2), d("#citr-click-f", 3), d("#GetLink", 4)
                })), I(/programasvirtualespc.net/, (function() {
                    if (location.href.includes("out/")) {
                        const e = location.href.split("?")[1];
                        g(atob(e), !1)
                    }
                })), I(/horoscop.info|infonerd.org/, (function() {
                    let e = o("input[name=newwpsafelink]");
                    setTimeout((() => {
                        g(JSON.parse(atob(e.value)).linke, !1)
                    }), 3e3)
                })), I(/(blackleadr|shortcuthigh|newztalkies|cybertyrant).com|hubdrive.me|fileroot.net|nzarticles.pro/, (function() {
                    i.has("r") && f(atob(i.get("r")))
                })), I(/bitcrypto.info|offerinfo.net/, (() => {
                    h("div[id^=wpsafe] > a[rel=nofollow]", (e => g(x(e.onclick.toString(), "handleClick('", "', '_self')"), !1)))
                })), I(/bitzite.com|cryptoad.org|article24.online|dailytechz.info/, (function() {
                    let e = o("input[name=newwpsafelink]");
                    setTimeout((() => {
                        g(JSON.parse(atob(e.value)).linkr, !1)
                    }), 3e3)
                })), I(/(tinycmd|tinybc).com/, (() => {
                    h("div[id^=wpsafe] > a[rel=nofollow]", (e => g(x(e.onclick.toString(), "handleClick('", "', '_self')"), !1)))
                })), I(/coingraph.us|eblog.pro|writeprofit.org/, (function() {
                    let e = o("input[name=newwpsafelink]");
                    setTimeout((() => {
                        g(JSON.parse(atob(e.value)).linke, !1)
                    }), 3e3)
                })), I(/techanalyzer.eu|(miner-sim|networkhint|askpaccosi).com/, (function() {
                    let e = o("input[name=newwpsafelink]");
                    setTimeout((() => {
                        g(JSON.parse(atob(e.value)).linkr, !1)
                    }), 3e3)
                })), I(/nullscript.info|freebinance.top/, (function() {
                    h("div#wpsafe-link > a", (function(e) {
                        const t = /redirect=(.*)',/.exec(e.onclick.toString())[1];
                        location.href = JSON.parse(atob(t)).safelink
                    }))
                })), I(/(10short|lollty).pro|mamahawa.com/, (function() {
                    v("center > .btn-success.btn", 3), h("a#makingdifferenttimer", (e => g(e.href, !1))), h("a#proceed", (e => g(e.href, !1)))
                })), I(/(aduzz|tutorialsaya|indobo|baristakesehatan|merekrut).com|deltabtc.xyz|bit4me.info/, (() => {
                    h("div[id^=wpsafe] > a[rel=nofollow]", (e => g(x(e.onclick.toString(), "window.open('", "', '_self')"), !1)))
                })), I(/cryptfaucet.com|izseo.net/, (function() {
                    e.checkTimeRemaining = !0;
                    let t = o("div[id^=wpsafe] > a[rel=nofollow]");
                    setTimeout((() => {
                        g(x(t.onclick.toString(), "window.open('", "', '_self')"), !1)
                    }), 5e3)
                })), I(/(cryptosparatodos|placementsmela|nutrisavors|bgmtelugucreations|soundaudioguru|howtoconcepts).com|(insurancepost|financeandinsurance|tecnotech|healthmedic).xyz|paidinsurance.in/, (() => h("#wpsafe-link a", (e => g(x(e.onclick.toString(), "window.open('", "', '_self')"), !1))))), I(/(netflixrelease|mangareleasedate|freemodapp|zutiza|phixshop|mp4news|uskloans|feedaso|djhindustan).com|(myfirstname|ignoupur).in|(mdsuuniversity|sarkarisahayata).org|(rrbntpc2024|kisannews).net/, (function() {
                    d("#VerifyBtn", 3), d("#NextBtn", 5, "setInterval")
                })), I(/(crypto2u|bestcoinsites).xyz/, (function() {
                    /^\/shortlink\/([^\/]+)/.test(location.pathname) ? h("a#btn.btn.btn-success", (e => g(e.href, !1))) : c(".shadow.card") && h("a.btn.btn-lg.btn-success.px-4", (e => g(e.href, !1)))
                })), I(/fansonlinehub.com/, (async function() {
                    setInterval((() => {
                        e.scrollBy(0, 1), e.scrollTo(0, -1), v(".active.btn > span")
                    }), 3e3)
                })), I(/(howifx|vocalley|financerites|yogablogfit|healthfirstweb|junkyponk|mythvista|blog-myst).com|ss7.info|sololevelingmanga.pics/, (() => {
                    d("#getlink", 3)
                })), I(/(viralxns|uploadsoon).com/, (function() {
                    d("#tp-snp2.tp-blue.tp-btn", 2), d(".tp-white.tp-btn", 3)
                })), I(/ouo.io|ouo.press/, (async function() {
                    await u(4e3), v("button#btn-main.btn.btn-main")
                })), I(/largestpanel.in|earnme.club|usanewstoday.club/, (function() {
                    d("#tp-snp2", 1)
                })), I(/paste1s.com|note1s.com/, (function() {
                    d(".btn-lg.btn-primary.btn", 2)
                })), I(/terabox.fun/, (async function() {
                    await u(3e3), v(".active.btn")
                })), I(/ayelads.com/, (function() {
                    d(".btn-bl.btn-primary.btn", 5, "setInterval")
                })), I(/karyawan.co.id/, (function() {
                    d("button#btn.bg-blue-100.text-blue-600", 3)
                })), I(/icerik.site/, (function() {
                    d("#csubmit", 2), d("#get_link_btn", 2)
                })), I(/ponselharian.com/, (function() {
                    c("#link-view") && e.scrollTo(0, 9999)
                })), I(/assettoworld.com/, (function() {
                    d(".text-capitalize.btn-outline-success.btn", 3)
                })), I(/adfoc.us/, (function() {
                    if (c("#skip")) {
                        g(o(".skip").href)
                    }
                })), I(/yoshare.net|olhonagrana.com/, (function() {
                    p("#yuidea", 2), d("#btn6", 2)
                })), I(/oii.io/, (function() {
                    parent.open = 1, d("button.g-recaptcha.btn.btn-primary", 2)
                })), I(/cpu-miner.leaks.work/, (function() {
                    d(".xbtt.btn-primary.btn-lg.btn", 3, "setInterval")
                })), I(/mrproblogger.com|themezon.net/, (function() {
                    h("#btn2.tp-btn", (e => e.click())), h("div.center-link-items a", (e => g(e.href, !1)))
                })), I(/forex-golds.com|forex-trnd.com/, (function() {
                    parent.open = 1, d(".g-recaptcha", 2)
                })), I(/1link.club/, (function() {
                    A("a[target='_blank']").removeAttr("target"), d("#download", 1)
                })), I(/slink.bid/, (function() {
                    d("#btn-generate", 1), d(".btn-success.btn", 5)
                })), I(/1mlink.vip/, (function() {
                    d("#invisibleCaptchaShortlink", 2), d(".get-link.btn-lg.btn-success.btn", 4)
                })), I(/blog.yurasu.xyz/, (function() {
                    d("#wcGetLink", 2), d("#gotolink", 3)
                })), I(/zegtrends.com/, (function() {
                    p("#cln", 5), d("#bt1", 5), d("#go", 5)
                })), I(/coincroco.com|surflink.tech/, (function() {
                    h(".mb-sm-0.mt-3.btnBgRed", (e => e.click()))
                })), I(/bcvc.xyz|bcvc.ink/, (function() {
                    d(".js-scroll-trigger.btn-xl.btn-outline.btn", 3, "setInterval")
                })), I(/dear-lottery.org|(superheromaniac|spatsify).com/, (function() {
                    d("#tp98", 10), p("form[name='tp']", 11)
                })), I(/bitcoinfaucet.fun|freebitcoin.win/, (function() {
                    d("#continue2", 3, "setInterval"), d("#continue", 4, "setInterval")
                })), I(/bestadvise4u.com/, (function() {
                    d(".rd_btn", 1), h(".rd_btn", (e => g(e.href, !1)))
                })), I(/linkspy.cc/, (function() {
                    if (c(".skipButton")) {
                        g(o(".skipButton").href, !1)
                    }
                })), I(/(webhostingpost|tophostingapp|digitalmarktrend).com/, (function() {
                    p("form.text-center", 3), d("#surl", 5, "setInterval")
                })), I(/(chooyomi|blogmado|kredilerim|insuranceleadsinfo).com/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("button.btn"))
                    }), 1e3);
                    h("a.get-link.disabled a", (e => g(e.href, !1)))
                })), I(/(kiktu|techcyan).com/, (function() {
                    let e = setInterval((() => {
                        m(o(".tick.wgicon")) && (clearInterval(e), v(".bottom_btn"))
                    }), 1e3)
                })), I(/fexkomin.xyz/, (function() {
                    A("a[target='_blank']").removeAttr("target"), d(".btn-captcha.btn-danger.btn", 3)
                })), I(/100puan.com/, (function() {
                    d(".big-text", 3), h("div.bb-sticky-el a", (e => g(e.href, !1)))
                })), I(/sub2get.com/, (function() {
                    if (c("#butunlock")) {
                        g(o("#butunlock > a:nth-child(1)").href)
                    }
                })), I(/(fc-lc|loaninsurehub).com|fc-lc.xyz/, (function() {
                    d("#invisibleCaptchaShortlink", 3), d("#getlink", 3), d("#glink", 4), d("#surl", 5)
                })), I(/mneyvip.com/, (function() {
                    d(".get-link.btn-lg.btn-success.btn", 6), p(".box-main > form:nth-child(1)", 1)
                })), I(/jobform.in/, (function() {
                    d("#scanURL", 1), d("#topClickButton", 1), d("#bottomClickButton", 27)
                })), I(/go.shareus.in/, (function() {
                    i.has("shortid") && i.has("link") && f(atob(i.get("link")))
                })), I(/playpaste.com/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("button.btn"))
                    }), 1e3)
                })), I(/suratresmi.id/, (function() {
                    d("button#hmn.btn-more", 3, "setInterval"), d("a#hmn.btn-more", 3, "setInterval")
                })), I(/examkhata.com|gamelopte.com/, (function() {
                    d("#btn6", 3), h("a.yu-btn.yu-blue", (e => g(e.href, !1)))
                })), I(/rancah.com|menjelajahi.com|shortly.xyz|nyawang.com/, (function() {
                    d(".get-link.btn-lg.btn-success.btn", 5, "setInterval")
                })), I(/cryptotracker.space/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), p("#form-continue"))
                    }), 1e3)
                })), I(/stfly.me/, (function() {
                    c(".g-recaptcha") || d(".form-send.m-2.btn-captcha.btn-outline-primary.btn", 3)
                })), I(/khaddavi.net|contentmenarik.com/, (function() {
                    parent.open = 1, setInterval((function() {
                        _() && d("#slu-btn")
                    }), 500)
                })), I(/leitup.com/, (function() {
                    c("#button_timer") && h("input.form-control", (e => g(e.placeholder, !1)))
                })), I(/offeroc.com/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".mt-2.btn-success.btn"))
                    }), 1e3)
                })), I(/azmath.info/, (() => {
                    c("#megaurl-verified-captcha") ? d("button.h-captcha", 3) : p("#megaurl-banner-page", 2)
                })), I(/www.google.com|recaptcha.net/, (async function() {
                    await u(3e3) && t.get("reCAPTCHA") && t.get("ApiKey"), n || 1 != t.get("reCAPTCHA") || v(".recaptcha-checkbox-border")
                })), I(/newassets.hcaptcha.com/, (async function() {
                    await u(3e3) && t.get("hCaptcha") && t.get("ApiKey"), n || 1 != t.get("hCaptcha") || v("#checkbox")
                })), I(/(ez4mods|tensailab|game5s|supermodsmenus).com|tech5s.co/, (function() {
                    p("div.text-center form", 2), v("#go_d", 1), h("a#go_d.submitBtn.btn.btn-primary", (e => g(e.href, !1))), h("a#go_d2.submitBtn.btn.btn-primary", (e => g(e.href, !1)))
                })), I(/(bnbfree|freeth).in/, (function() {
                    if (c(".h-captcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#free_play_form_button"))
                        }), 1e3)
                    }
                })), I(/freebitco.in/, (function() {
                    if (c("#freeplay_form_cf_turnstile")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#free_play_form_button"))
                        }), 1e3)
                    }
                })), I(/mazen-ve3.com/, (function() {
                    S();
                    let e = setInterval((() => {
                        "Wait 0 s" == o(".filler").innerText && (clearInterval(e), v("#btn6"), v(".btn-success.btn", 1))
                    }), 2e3)
                })), I(/soft3arbi.com/, (function() {
                    S();
                    let e = setInterval((() => {
                        "100%" == o(".progress-done").innerText && (clearInterval(e), v("#continue-button"), v(".btn-success.btn", 1))
                    }), 2e3)
                })), I(/(120898|141989|161989|131989|121989|151989).xyz/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), p(".mt-4"))
                        }), 1e3)
                    }
                })), I(/shortearn.net/, (function() {
                    parent.open = 1, d("#adBtn", 3, "setInterval"), d("#appBtn", 1), d("button.btn.btn-primary.btn-block.btn-lg", 3), d("#extensionBtn", 5, "setInterval")
                })), I(/(coinsward|blogsward).com|imbb.online/, (async function() {
                    if (c(".g-recaptcha")) {
                        var t = o("input[name=newwpsafelink]");
                        g(JSON.parse(atob(t.value)).linkr, !1)
                    } else e.incrementRedirectCount(), await u(2e3), e.handleButtonClick()
                })), I(/1bit.space|mgnet.xyz/, (function() {
                    let e = setInterval((() => {
                            captcha_solved && (v("button.button"), clearInterval(e))
                        }), 2e3),
                        t = setInterval((() => {
                            captcha_solved && o("button.button").innerText.includes("Get Link") && (v("button.button"), clearInterval(t))
                        }), 2e3)
                })), I(/bigbtc.win/, (function() {
                    if (c(".h-captcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), v("#claimbutn"))
                        }), 1e3)
                    } else d("#clickhere", 2)
                })), I(/firefaucet.win/, (function() {
                    if (c("form[method='post']")) {
                        setInterval((() => {
                            _() && d("button[type=submit]")
                        }), 2e3)
                    } else d("#get_reward_button", 1)
                })), I(/uptobhai\.*|uplinkto\.*|shortlinkto\.*/, (function() {
                    d(".btn-block.btn-primary.btn", 2)
                })), I(/tmail.io|(gamezizo|fitdynamos).com/, (function() {
                    c("#next") ? (p("form.text-center", 3), d("#next", 2), d("#glink.button", 15)) : d("#surl", 5, "setInterval")
                })), I(/(exeo|exego).app|(mrgec|emxaw|ijvam|falpus).com|evernia.site/, (function() {
                    d("#invisibleCaptchaShortlink", 2), p("#before-captcha", 3);
                    let e = setInterval((() => {
                        "0" == o(".timer").innerText && (clearInterval(e), v("#submit-button"))
                    }), 2e3)
                })), I(/(on-scroll|diudemy|maqal360).com/, (function() {
                    S();
                    let e = setInterval((() => {
                        "0" == o("#countdown").innerText && (clearInterval(e), v("#append > :nth-child(1)"))
                    }), 2e3)
                })), I(/(forexrw7|forex-articles|3rabsports|fx-22|watchtheeye).com|gold-24.net|(offeergames|todogame).online/, (function() {
                    d(".oto > a:nth-child(1)", 1), h(".oto > a", (e => g(e.href, !1)))
                })), I(/(leaveadvice|mensventure).com/, (function() {
                    let t = setInterval((() => {
                        "0" == o("#timer").innerText && (v("#method_free.free-download-btn.download-btn"), clearInterval(t), c(".h-captcha") || e.openLink())
                    }), 2e3)
                })), I(/itscybertech.com/, (() => {
                    let t = setInterval((() => {
                        _() ? (clearInterval(t), d(".visit.medium.button")) : m(o("#gtbtn2")) && (clearInterval(t), e.fngo())
                    }), 1e3)
                })), I(/jameeltips.us|cryptonworld.space/, (function() {
                    d("#alf_continue", 3, "setInterval")
                })), I(/hynews.biz|chamcuuhoc.com/, (function() {
                    g(atob(`aH${o("#landing [name='go']").value.split("aH").slice(1).join("aH")}`))
                })), I(/tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li/, (function() {
                    if (c("#link-view")) {
                        let e = setInterval((function() {
                            _() && (clearInterval(e), d("#continue"))
                        }), 500)
                    }
                })), I(/skiplink.me/, (function() {
                    d("#alf_continue_captcha", 2), d("#alf_continue", 3, "setInterval")
                })), I(/apanmusic.in/, (function() {
                    h("a#notarobot.button", (e => g(e.href, !1))), d("#getlink", 3, "setInterval"), d("#gotolink", 30)
                })), I(/o-pro.online/, (function() {
                    h("#newbutton > a", (e => g(e.href, !1))), h("a.btn.btn-default.btn-sm", (e => g(e.href, !1)))
                })), I(/(travelironguide|businesssoftwarehere|softwaresolutionshere|freevpshere).com/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), p("#lview > form"))
                        }), 1e3)
                    } else h(".get-link > a", (e => g(e.href, !1)))
                })), I(/easyworldbusiness.com/, (function() {
                    c(".g-recaptcha") ? h("a.yu-btn.yu-blue", (e => g(e.href, !1))) : d(".yu-blue.yu-btn", 15)
                })), I(/getzen.cash/, (function() {
                    if (c("#form-claim-zen")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d(".btn-claim"))
                        }), 1e3)
                    }
                })), I(/(kongutoday|proappapk|hipsonyc|teamtechnews).com|finsurances.co|yotrickslog.tech|animalwallpapers.online/, (function() {
                    i.has("safe") && f(atob(i.get("safe")))
                })), I(/deportealdia.live|noweconomy.live|techgeek.digital/, (function() {
                    p("div.text-center div form", 2), h("a#surl1.btn-main.get-link", (e => g(e.href, !1)))
                })), I(/nishankhatri.xyz|(bebkub|importantclass).com/, (function() {
                    h("#my-btn", (e => g(e.href, !1))), d("#pro-continue", 3), d("#pro-btn", 5, "setInterval")
                })), I(/writedroid.eu.org|modmania.eu.org|writedroid.in|mytop5.club/, (function() {
                    d("#shortPostLink", 3), h("#shortGoToLink", (e => g(e.href, !1)))
                })), I(/linkatla.com/, (function() {
                    let e = x(o("head > script:nth-child(7)").text, '"', '"');
                    c("#redirectButton") && setTimeout((() => {
                        g(atob(e), !1)
                    }), 2e3)
                })), I(/claimfreetrx.online/, (function() {
                    p("#molien", 2), d("#verify > .mb-2.btn-primary.btn-lg.btn", 3)
                })), I(/adclicker\.*|yourihollier.com/, (function() {
                    if (location.href.includes("url/")) {
                        const e = atob(atob(atob(location.hash.slice(1))));
                        g(new URLSearchParams(e).get("url"))
                    }
                })), I(/offers4crypto.xyz|ewall.biz/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#submitBtn"))
                        }), 1e3)
                    }
                })), I(/dl.lk21static.xyz/, (function() {
                    location.href.includes("get/") || "/" == location.pathname || (location = location.href.replace("yz/", "yz/get/"))
                })), I(/easylink.gamingwithtr.com/, (function() {
                    d("#countdown", 2), h("a#pagelinkhref.btn.btn-lg.btn-success.my-4.px-3.text-center", (e => g(e.href, !1)))
                })), I(/copy-paste-fonts.com|cryptednews.space/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("form center button"))
                        }), 1e3)
                    } else setTimeout((() => {
                        d("form center button")
                    }), 11e3)
                })), I(/solarchaine.com/, (function() {
                    if (c("#captchaShortlink")) {
                        d("button.btn:nth-child(4)", 2);
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#invisibleCaptchaShortlink"))
                        }), 1e3)
                    } else p(".box-body > form:nth-child(2)", 1)
                })), I(/(remixsounds|helpdeep|thinksrace).com|uprwssp.org/, (function() {
                    S(), d(".m-2.btn-captcha.btn-outline-primary.btn", 2), d(".tpdev-btn", 3), d("#tp98 button[class^='bt']", 3), p("form[name='tp']", 3), d("#btn6", 4)
                })), I(/stly.link|snaplessons.net|atravan.net/, (() => {
                    d("button[class^=rounded]", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("button[class^=mt-4]"))
                    }), 1e3)
                })), I(/shrinke\.*|shrinkme\.*|(linkvhoriz|paid4link|icashfly).com|bicolink.net|wordcounter.icu|pwrpa.cc|paylinks.cloud/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), v("#invisibleCaptchaShortlink"))
                    }), 1e3)
                })), I(/(computerpedia|techconnection).in|(myprivatejobs|advicefunda|moneymatteronline).com|bestloanoffer.net|bhulekhnaksha.org/, (() => {
                    let e = setInterval((() => {
                        _() ? (clearInterval(e), d("#tp-snp2")) : m(o("#tp-generate")) && !c(".g-recaptcha") && (clearInterval(e), d("#tp-snp2.tp-blue.tp-btn-2", 1))
                    }), 1e3)
                })), I(/revly.click/, (function() {
                    if (c("#link-view")) {
                        setInterval((() => {
                            _() && p("#link-view")
                        }), 1e3)
                    } else p("div.col-md-12 form", 2)
                })), I(/trangchu.news|downfile.site|(techacode|expertvn).com|azmath.info|aztravels.net|top10cafe.se|handydecor.com.vn/, (function() {
                    S();
                    let t = setInterval((() => {
                        "0" == o("#monetiza-time").innerText ? (clearInterval(t), v("#monetiza")) : c("#monetiza-generate") && e.monetizago()
                    }), 1e3)
                })), I(/theconomy.me|(askpaccosi|halosenja|sainny|wellness4live).com|(2the|techbeast).space|(wikiversity|inicerita).online|cryptomonitor.in|break.id/, (function() {
                    var e = o("#landing");
                    g(JSON.parse(atob(e.newwpsafelink.value)).linkr, !1)
                })), I(/(theconomy|nightfaucet).me|(imagenesderopaparaperros|linclik|up4cash|smoner|atglinks).com|happy-living.online|galaxy-link.space|oke.io|forextrader.site|tinygo.co/, (function() {
                    if (c("#link-view")) {
                        setInterval((() => {
                            _() && d("#invisibleCaptchaShortlink")
                        }), 1e3)
                    }
                })), I(/(blogtechh|host2loan|techbixby|wptohost|hosttbuzz|blog-blend|policiesreview|blogmystt|wp2hostt|advertisingcamps).com|clk.wiki|(oko|aii).sh|clk.kim/, (function() {
                    d("button.btn.btn-primary", 2), p("#nextpage", 2), p("#getmylink", 3);
                    let e = setInterval((function() {
                        _() && (clearInterval(e), d(".btn-captcha.btn-primary.btn"))
                    }), 500)
                })), I(/techyreviewx.com|desiupload.co/, (function() {
                    d(".downloadbtn.btn-block.btn-primary.btn", 2), h("a.btn.btn-primary.btn-block.mb-4", (e => g(e.href, !1)))
                })), I(/(calmgram|adbitfly|blogsward|coinjest).com|adbitfly.in/, (function() {
                    h("#continueBtn", (e => e.click())), d("#captcha-btn", 4, "setInterval"), d(".btn-captcha.btn-primary.btn", 8, "setInterval")
                })), I(/shorterall.com/, (function() {
                    if (c("input[name=awnswer]") || c("#link-view") || p("div.col-md-12 form", 3), c("input[name=awnswer]")) {
                        let e = o("input[name=awnswer]").getAttribute("placeholder").split("=")[0];
                        o("input[name=awnswer]").value = (e.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce((function(e, t) {
                            return parseFloat(e) + parseFloat(t)
                        })), p("div.col-md-12 form", 3)
                    }
                    if (c("#link-view")) {
                        setInterval((() => {
                            _() && v("#invisibleCaptchaShortlink")
                        }), 1e3)
                    }
                })), I(/exactpay.online|neverdims.com|videoclip.info|sproutworkers.co|coinsfaucet.fun/, (function() {
                    S(), e.onscroll = 1, e.check2(), c("#verify") && (A(".blog-details").text("Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually"), w('[name="answer"]').then((function(t) {
                        t.addEventListener("change", e.check3)
                    })))
                })), I(/(crypto4yu|manofadan|wiour).com|btcbitco.in|readbitcoin.org/, (async function() {
                    S(), await u(2e3), e.check2(), e.check3(), d("button.btn.btn-primary.btn-lg")
                })), I(/(btcpany|zombiebtc|claimfey|thefastpost).com|(battleroyal|panytourism|statepany).online/, (function() {
                    parent.open = 1, p("#link1s-form", 1), d("#next-step-button", 3)
                })), I(/playnano.online/, (function() {
                    d("#watch-link", 2), d(".watch-next-btn.btn-primary.button", 2), d("button.button.btn-primary.watch-next-btn", 5, "setInterval")
                })), I(/donia2tech.com|blog.techeysub.online|minersim.com/, (function() {
                    var e = document.getElementById("wpsafelink-landing");
                    g(JSON.parse(atob(e.newwpsafelink.value)).linkr)
                })), I(/rekonise.com/, (() => {
                    let e = new XMLHttpRequest;
                    e.onload = () => g(JSON.parse(e.responseText).url), e.open("GET", "https://api.rekonise.com/social-unlocks" + location.pathname, !0), e.send()
                })), I(/acortalink.me/, (() => {
                    let t = setInterval((() => {
                        let n = o("body > script");
                        if (n) {
                            let o = n.text.trim().split("\n"),
                                a = o.findIndex((e => e.includes("acortalink.me"))),
                                i = o[a + 2].trim().split(",")[6].trim();
                            e[i] && (clearInterval(t), g(e[i]))
                        }
                    }), 100)
                })), I(/tutwuri.id|besargaji.com/, (function() {
                    v("#btn-2", 3), v("#verify > a ", 2), v("#verify > button ", 2);
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#btn-3"))
                    }), 1e3)
                })), I(/autodime.com/, (function() {
                    let e = setInterval((function() {
                        _() && (clearInterval(e), d("#button1"))
                    }), 500);
                    h("a.btn-hover.color-1.btn-captcha", (e => g(e.href, !1)))
                })), I(/amritadrino.com/, (function() {
                    c(".g-recaptcha") ? h("body > b:nth-child(10) > center:nth-child(4) > a:nth-child(64)", (e => g(e.href, !1))) : h("#tp-snp2", (e => e.click()))
                })), I(/(youtube|youtube-nocookie).com/, (function() {
                    e.hasOwnProperty("_lact") ? e.setInterval((() => {
                        e._lact = Date.now()
                    }), 5e3) : c("#redirect-main-text") && h("a#invalid-token-redirect-goto-site-button", (e => g(e.href, !1)))
                })), I(/hunterkiller.me|surflink.tech/, (function() {
                    h("div#showw center a.btn.btn-danger.btn-captcha", (e => g(e.href, !1))), h("div#wpsafe-snp center a", (e => g(e.href, !1)))
                })), I(/lyricsbaazaar.com|ezeviral.com/, (function() {
                    let e = setInterval((function() {
                        _() && (clearInterval(e), d("#btn6"))
                    }), 500);
                    h("div.modal-content a", (e => g(e.href, !1)))
                })), I(/(sekilastekno|miuiku|vebma|majalahhewan).com/, (async function() {
                    const t = async() => {
                        let t = e ? .livewire ? .components ? .components()[0];
                        for (; !t;) await u(100), console.log(1), t = e ? .livewire ? .components ? .components()[0];
                        const n = {
                                fingerprint: t.fingerprint,
                                serverMemo: t.serverMemo,
                                updates: [{
                                    payload: {
                                        event: "getData",
                                        id: "whathappen",
                                        params: []
                                    },
                                    type: "fireEvent"
                                }]
                            },
                            o = await fetch(location.origin + "/livewire/message/pages.show", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "X-Livewire": "true",
                                    "X-CSRF-TOKEN": e.livewire_token
                                },
                                method: "POST",
                                body: JSON.stringify(n)
                            }),
                            a = await o.json();
                        g(new URL(a.effects.emits[0].params[0]).href)
                    };
                    if ("wp.sekilastekno.com" !== location.host) c("div[class='max-w-5xl mx-auto']") && (console.log("Executing.."), t());
                    else {
                        if (c("form[method='post']")) {
                            const t = o("form[method='post']");
                            console.log("addRecord...");
                            const n = document.createElement("input");
                            n.value = e.livewire_token, n.name = "_token", n.hidden = !0, t.appendChild(n), t.submit()
                        }
                        c("button[x-text]") && (console.log("getLink.."), t())
                    }
                })), I(/coinsrev.com/, (function() {
                    if (parent.open = 1, c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#wpsafelinkhuman > input"))
                        }), 1e3)
                    } else d("#wpsafe-generate > a > img", 3), d("input#image3", 13)
                })), I(/zubatecno.com/, (function() {
                    if (c("#mdncaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#link1s-snp1"))
                        }), 1e3)
                    } else p("#link1s-form", 3)
                })), I(/(wooseotools|woowebtools).com/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("div form button"))
                        }), 500)
                    } else d("div form button", 3, "setInterval")
                })), I(/adwerty.com/, (function() {
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d("#hidden_btn"))
                    }), 500);
                    h("#hidden_btn", (e => g(x(e.onclick.toString(), "window.open('", "', '_blank')"))))
                })), I(/(pernahsukses|alpinecorporate).com|aoutoqw.xyz/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#alf_continue_captcha"))
                        }), 1e3)
                    } else e.showScrollToGetLinkText(), p("#alf_continue_form_outer", 3)
                })), I(/altechen.com|entutes.com/, (function() {
                    if (parent.open = 1, c(".h-captcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("#cs-btn"))
                        }), 1e3)
                    } else d("button#cs-btn", 3, "setInterval")
                })), I(/socialwolvez.com/, (() => {
                    let e = new XMLHttpRequest;
                    e.onload = () => g(JSON.parse(e.responseText).link.url), e.open("GET", "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7), !0), e.send()
                })), I(/(mobi2c|healthy4pepole|healdad|world2our|mobitaak|te-it|businessnews-nigeria|govaf|fahmysport).com|(hightrip|fx-gd|world-trips|otechno|bluetechno|to-travel).net|(newforex|forexit).online/, (function() {
                    d(".submitBtn", 2), d("#go_d", 3)
                })), I(/bitcotasks.com/, (function() {
                    if (location.href.includes("/shortlink/")) {
                        let t = setInterval((() => {
                            "Verified!" == o(".mb-2").innerText && (clearInterval(t), e.continueClicked())
                        }), 1e3)
                    }
                })), I(/suaurl.com/, (function() {
                    parent.open = 1;
                    let e = setInterval((function() {
                        _() && (o("#comment_form").removeAttribute("target"), clearInterval(e), d("#btn-capcha > .b-b", 1))
                    }), 500);
                    d("#btn > button", 3, "setInterval")
                })), I(/letsboost.net/, (function() {
                    h("body > script", (() => {
                        let e = s("script")[s("script").length - 1].innerHTML,
                            t = JSON.parse(e.match(/stepDat = '(.*)';/)[1]);
                        g(t[t.length - 1].url, !1)
                    }))
                })), I(/web1s.asia/, (function() {
                    if (location.href.includes("api-mode/") || c(".mb-20")) p(".submit-form", 3), d("#submit", 3);
                    else if (r.has("code")) {
                        if (r.has("code")) {
                            d("#submit-button");
                            let e = "input.form-control:nth-child(2)",
                                t = "form.submit-form:nth-child(2) > button:nth-child(16)";
                            o(e) && (o(e).value = decodeURIComponent(r.get("code")), d(t, 2))
                        }
                    } else {
                        let t = ".mb-5.text-center.keyword-image",
                            n = "fun88.info.vn";
                        if (o(t) && (o(t).innerHTML.includes("7TmoFNC") && (n = "hookeaudio.com"), o(t).innerHTML.includes("81EoTp9") && (n = "pennbookcenter.com"), o(t).innerHTML.includes("wYfNKAO") && (n = "publicananker.com"), e.location.assign(`https://${n}?xref=https://google.com/&wsa=${location.href}`)), c(".col-xxl-9 > .text-center")) {
                            let e = setInterval((() => {
                                _() && (clearInterval(e), p("form.text-center"))
                            }), 1e3)
                        }
                        c(".col-xxl-9 > .text-center") && !c(".g-recaptcha") && d("#submit", 3)
                    }
                })), I(/(hookeaudio|pennbookcenter|publicananker|fun88bk).com|fun88.info.vn/, (function() {
                    var t;
                    if (t = "https://google.com", delete document.referrer, document.__defineGetter__("referrer", (() => t)), i.has("xref") && i.has("wsa")) {
                        let t, n = ".textwidget button",
                            a = "li.menu-item > a:nth-child(1)",
                            i = "p > div > div";
                        setTimeout((() => {
                            o(n) && o(n).innerText.includes("CONTINUE") && o(n).click()
                        }), 3e3);
                        let l = setInterval((() => {
                                o(n) && o(n).innerHTML.includes("ANY PAGE TO GET") && (o(a).href = o(a).href + document.location.search, o(a).click(), clearInterval(l))
                            }), 2e3),
                            s = setInterval((() => {
                                o(i) && !o(i).innerText.includes("ontinue after") && (t = x(o(i).parentElement.innerHTML, '!important;">', "<svg", !0), e.location.assign(`${decodeURIComponent(r.get("wsa"))}?code=${t}`), clearInterval(s))
                            }), 2e3)
                    }
                })), I(/stfly.cc|stfly.xyz|techtrendmakers.com|(blogbux|blogesque|exploreera).net/, (function() {
                    if (c(".g-recaptcha") || c(".h-captcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), v(".form-send.m-2.btn-captcha.btn-outline-primary.btn"))
                        }), 500)
                    } else d(".form-send.m-2.btn-captcha.btn-outline-primary.btn", 3, "setInterval")
                })), I(/slinkware.com|aghtas.com|youssefsayed.com|alghtas.xyz|newworldnew.com|tackaway.com/, (function() {
                    S();
                    let e = setInterval((() => {
                        _() && (clearInterval(e), d(".hidden-continue-button"))
                    }), 1e3);
                    h("#yuidea-btmbtn", (e => e.click()))
                })), I(/link.goto.com.np|(appkamods|bankvacency|otomi-games).com/, (() => {
                    h("div#wpsafe-link a", (e => g(e.href, !1))), h("#wpsafe-link input", (e => g(x(e.onclick.toString(), "window.open('", "', '_blank')"), !1)))
                })), I(/hamrolekh.com|(mgame|oncoin).info|lifeinsurancesblog.xyz|nishankhatri.com.np|quanngon.org/, (function() {
                    d("#my-btn", 2), d("#wpsafe-link > .btn-secondary.btn", 2), h("#pro-link", (e => g(e.href, !1))), h("#wpsafe-link a", (e => g(x(e.onclick.toString(), "window.open('", "', '_self')"), !1)))
                })), I(/(lootlinks|onepiecered).co|(loot-links|links-loot|loot-link|mega-guy|utopianleaks|eofmukindwo|realiukzemydre|kmendation|bstlar|tonordersitye|bleleadersto|daughablelea).com|(lootdest|lootlink|best-links).org|lootdest.info|linksloot.net|free-content.pro/, (function() {
                    /^\/([^\/]+)/.test(location.pathname) && g("https://adbypass.org/bypass?bypass=" + location.href, !1)
                })), I(/(homeculina|ionclub777|ineedskin|auntmanny|businessuniqueidea|plumptofit|cookingpumpkin|elishea|audioinspects|celebperson|dreamhomelabs|fishingbreeze).com|(financewrapper|recipes4all|solidcoins).net|(aayurvedshastra|allnewspoint).in|chefslink.org|lawyex.co|mdn.lol/, (() => {
                    if (S(), c(".g-recaptcha")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), j("form[action]", 1))
                        }), 1e3)
                    } else setTimeout((() => {
                        j(function(e) {
                            for (var t = document.forms, n = 0; n < t.length; n++) {
                                if ("mdn" !== e) {
                                    if ("Allin1" === e) {
                                        var o = t[n].action;
                                        if (/bypass.html|adblock.html/.test(o)) continue;
                                        return t[n]
                                    }
                                    return
                                }
                                if (t[n].innerHTML.includes("Step")) return t[n]
                            }
                        }("mdn"))
                    }), 17e3)
                })), I(/playonpc.online|quins.us|retrotechreborn.com/, (function() {
                    if (e.assholeWhoReadsThis = !1, d("#ytcontinueButton", 2), c(".h-captcha") && !o("#cbt").hasAttribute("disabled")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), d("button#cbt.pfbutton-primary", 1), v("button#cbt.pfbutton-primary", 2))
                        }), 3e3)
                    } else {
                        let e = setInterval((() => {
                            c(".h-captcha") || o("#cbt").hasAttribute("disabled") || (clearInterval(e), v("button#cbt.pfbutton-primary", 1))
                        }), 2e3)
                    }
                })), I(/shortit.pw/, (function() {
                    c(".bg-light.container") && A(".text-center.text-muted").text("IMPORTANT Note By BloggerPemula : Please Solve the Hcaptcha for Automatically , Dont Solve the Solvemedia . Regards..."), d(".pulse.btn-primary.btn", 3);
                    let e = setInterval((function() {
                        _() && (clearInterval(e), d("#btn2"))
                    }), 500)
                })), I(/short.croclix.me|adz7short.space/, (function() {
                    setInterval((function() {
                        A("#link").length > 0 && v("#link")
                    }), 500), setInterval((function() {
                        A("input#continue").length > 0 && v("input#continue"), A("a#continue.button").length > 0 && v("a#continue.button")
                    }), 9e3), setTimeout((function() {
                        A("#btn-main").length < 0 || v("#btn-main")
                    }), 5e3)
                })), I(/adshnk.com|adshrink.it/, (() => {
                    let t = setInterval((() => {
                        "object" == typeof e._sharedData && 0 in e._sharedData && "destination" in e._sharedData[0] ? (clearInterval(t), document.write(e._sharedData[0].destination), g(document.body.textContent)) : void 0 !== e.___reactjsD && "object" == typeof e[e.___reactjsD.o] && "string" == typeof e[e.___reactjsD.o].dest && (clearInterval(t), g(e[e.___reactjsD.o].dest))
                    }))
                })), I(/vikashmewada.com|videoslyrics.com|crazysonglyrics.com|videolyrics.in|newsharsh.com|trxking.xyz|crazyblog.in|getdashcoin.io/, (() => {
                    parent.open = 1, h(".py-2.bg-blue-600", (e => e.click())), h("form:nth-child(1) > a:nth-child(3)", (e => e.click())), h("button.py-2:nth-child(3)", (e => e.click())), h("div > a.py-2.bg-blue-600", (e => g(e.href, !1)));
                    let e = setInterval((() => {
                        c("button.py-2") && (clearInterval(e), p("div.rounded > div:nth-child(9) > form:nth-child(1)", 2))
                    }), 500)
                })), I(/ify.ac/, (function() {
                    e.open_href()
                })), I(/lanza.me/, (() => h("a#botonGo", (e => g(e.href, !1))))), I(/lifeezee.com/, (() => h(".get-link", (e => g(e.href))))), I(/lolinez.com/, (() => h("p#url a", (e => g(e.href, !1))))), I(/file-upload.in/, (() => h("#getlink", (e => g(e.href, !1))))), I(/upmienphi.com/, (function() {
                    h(".download-link", (e => e.click()))
                })), I(/linksly.co/, (() => h("div.col-md-12 a", (e => g(e.href, !1))))), I(/cashando.me/, (() => h("#goCoinsTown", (e => g(e.href, !1))))), I(/appsinsta.com/, (function() {
                    h(".yu-blue.yu-btn", (e => e.click()))
                })), I(/apkadmin.com/, (() => h("div.text.text-center a", (e => g(e.href))))), I(/sugarona.com/, (function() {
                    h("a#my-btn", (e => g(e.href, !1)))
                })), I(/cekip.site/, (() => h("a#aGo.badge.bg-success", (e => g(e.href, !1))))), I(/techleets.xyz/, (() => h("#tp-snp2 > center > a", (e => g(e.href, !1))))), I(/amanguides.com/, (() => h("#wpsafe-link > .bt-success", (e => g(e.href, !1))))), I(/mirrored.to/, (() => h("div.col-sm.centered.extra-top a", (e => g(e.href, !1))))), I(/flybid.net/, (() => h("a#continue-button.continue-button", (e => g(e.href, !1))))), I(/8tm.net/, (() => h("a.btn.btn-secondary.btn-block.redirect", (e => g(e.href, !1))))), I(/cpmlink.net/, (() => h("a#btn-main.btn.btn-warning.btn-lg", (e => g(e.href, !1))))), I(/noodlemagazine.com/, (() => h("a#downloadLink.downloadBtn", (e => g(e.href, !1))))), I(/thebloggerspoint.in|ezeviral.com/, (() => h("#wpsafe-snp > a", (e => g(e.href, !1))))), I(/mohtawaa.com/, (() => h("a.btn.btn-success.btn-lg.get-link.enabled", (e => g(e.href, !1))))), I(/sub2unlock.com/, (function() {
                    location.href.includes("/unlock") && h("a#link", (e => g(e.href, !1)))
                })), I(/rockmods.net/, (function() {
                    location.href.includes("/rblink.html") && i.has("url") && f(atob(i.get("url")))
                })), I(/doodjob.com/, (() => h("a.linky.buttonpanel.buttonpanel-block.btn-lg.get-link.disabled", (e => g(e.href, !1))))), I(/xonnews.net|toilaquantri.com|share4u.men|camnangvay.com/, (() => h("div#traffic_result a", (e => g(e.href, !1))))), I(/offrcms.xyz|kooora365.online|tourismtravels4.sbs|5tl.co|mamahawa.com/, (() => h("a#proceed", (e => g(e.href, !1))))), I(/(cricketgurupro|travelkuku).com/, (function() {
                    p("form[name='tp']", 3), h("#page > center > a", (e => g(e.href, !1)))
                })), I(/bluemedialink.online|bluemediafile\.*/, (function() {
                    i.has("url") && h("input#nut[src]", (e => e.parentNode.submit()))
                })), I(/boost.ink/, (() => fetch(location.href).then((e => e.text())).then((e => g(atob(e.split('bufpsvdhmjybvgfncqfa="')[1].split('"')[0])))))), I(/blog.textpage.xyz/, (() => h("#wpsafe-link1 a", (e => g(x(e.onclick.toString(), "window.open('", "', '_blank')"), !1))))), I(/foodupe.com/, (function() {
                    if (c(".containerpanel")) {
                        let e = o("#donead").href;
                        setTimeout((() => {
                            g(e, !1)
                        }), 2e3)
                    }
                })), I(/freethailottery.live/, (function() {
                    if (c(".g-recaptcha")) {
                        let e = function(e) {
                            let t = e + "=",
                                n = decodeURIComponent(document.cookie).split(";");
                            for (var o = 0; o < n.length; o++) {
                                let e = n[o];
                                for (;
                                    " " == e.charAt(0);) e = e.substring(1);
                                if (0 == e.indexOf(t)) return e.substring(t.length, e.length)
                            }
                            return ""
                        }("JSON_fetch");
                        setTimeout((() => {
                            g(e, !1)
                        }), 2e3)
                    }
                })), I(/udrop.com/, (() => h(".responsiveMobileMargin > button:nth-child(1)", (e => g(x(e.onclick.toString(), "openUrl('", "')"), !1))))), I(/sub2unlock.net/, (function() {
                    if (c(".linkDiv_btns.col-xs-12.col-sm-12.col-md-12")) {
                        let e = o("#theLinkID").textContent;
                        setTimeout((() => {
                            g(e, !1)
                        }), 2e3)
                    }
                })), I(/(starxinvestor|hit-films|sevenjournals).com|(iisfvirtual|bookszone|learnmany).in/, (function() {
                    p("form[name='tp']", 3), h("a#btn6", (e => g(e.href, !1)))
                })), I(/(financenube|mixrootmods|pastescript|trimorspacks|mealcold).com|updrop.link/, (() => {
                    h("#wpsafe-link a", (e => g(x(e.onclick.toString(), "window.open('", "', '_self')"), !1)))
                })), I(/mboost.me/, (function() {
                    if (c("#firstsection")) {
                        let e = o("#__NEXT_DATA__"),
                            t = JSON.parse(e.textContent).props.pageProps.data.targeturl;
                        setTimeout((() => {
                            g(t, !1)
                        }), 2e3)
                    }
                })), I(/(disheye|kreatifparenting|phimne|admediaflex|cdrab).com|(gurumu|wpcheap|izseo|adcrypto|daycash).net|(sportweb|ecq|mgame|oncoin).info|savego.org|hbz.us|(djqunjab|alpha-links).in|datacheap.io/, (() => h("#wpsafelink-landing > input", (e => g(JSON.parse(atob(e.value)).linkr, !1))))), I(/mbantul.my.id|videoclip.info|crypto-fi.net|claimcrypto.cc|xtrabits.click|(cempakajaya|web9academy|onlineincoms|allsoftdrivers|tribuncrypto|poketoonworld|bioinflu|pubgquotes|bico8).com|(techleets|ourcoincash|studyis|healthysamy).xyz/, (function() {
                    g(atob(`aH${o("#landing [name='go']").value.split("aH").slice(1).join("aH")}`), !1)
                })), I(/aiimgvlog.fun/, (function() {
                    S(), e.onload = setInterval((() => {
                        c(".h-captcha") && m(o(".h-captcha")) && j("#overlay", 1), c("div[id^='count']") && 0 == o("div[id^='count']").innerHTML && v("input:nth-of-type(3)", 1)
                    }), 1e3), c("input.form-control") && (e.onscroll = 1, e.check2(), A("#clickMessage").text("Please Answer the Maths Questions First ,Wait until Progress bar end, then Click the Red X Manually"), w('[name="answer"]').then((function(t) {
                        t.addEventListener("change", e.check3)
                    })))
                })), I(/dutchycorp.space|dutchycorp.ovh|gtlink.co|seulink.digital|oii.io|hamody.pro|metasafelink.site|(beingtek|fc-lc|10short).com|(zagl|shrinkforearn).in|(kiiw|wordcounter).icu|pwrpa.cc|shurt.pw|(flyad|tapnip).vip|antonimos.de|seulink.online|pahe.plus|tfly.link/, (function() {
                    if (c(".grecaptcha-badge") || c("#captchaShortlink")) var t = setInterval((function() {
                        try {
                            clearInterval(t), e.grecaptcha.execute()
                        } catch (e) {}
                    }), 3e3)
                })), I(/dutchycorp.ovh|beast.ink|ckk.ai|onelinks.nl|(viewfr|shortzon|techsamir|ufacw|gawbne|bitcoinwinco|links.apksvip|namaidani|cutpaid|link1s|postazap|yeifly|kiddyshort|shtfly|cortaly|makemoneywithurl|mtraffics|dz4link|dz-linkk).com|(tmearn|namaidani|cutearn|ccurl|youshort|illink).net|(s2fly|pglink|snaply|megaurl|megafly|linksbanao).in|(wez|shortlinks|wdu).info|(shrink|flyzu).icu|(24payu|vielink).top|(terafly|hatelink|cashando|zumpa|tlin|weezo|adnews|botfly|linkdam|ar-goal).me|(jameeltips|mitly|finish.wlink).us|(forexly|goldly|insurancly).cc|(beycoin|aku2x|moinsider|satoshi-win).xyz|(wedocrypto|yourtechnology|clickmais|flylinks).online|(short1|urlcash|dglinks).site|(shrinkme|tfly).link|(playstore|adsy|clik|shurt).pw|short.express|cryptosh.pro|goo.st|(payskip|shrinkurl).org|cryptotracker.space|shortearn.eu|clicklink.fun|(lootcash|tapnip).vip|addurl.biz/, (function() {
                    if (parent.open = 1, c(".g-recaptcha") || c("#captchaShortlink")) {
                        let e = setInterval((() => {
                            _() && (clearInterval(e), p("#link-view"))
                        }), 1e3)
                    } else {
                        let e = ["#link-view", "#form-continue", ".col-md- > form", "#nextstepform", "#submit-form", ".text-center.row > form", "div.col-md-6 form", "div.col-md-12 form", "div.text-center form", "#before-captcha", "#yuidea", "#exfoary-form", "#submit_first_page", "#hidden form", "#test", "form.text-center"];
                        for (let t = 0; t < e.length; t++) p(e[t], 2)
                    }
                })), I(/autofaucet.dutchycorp.space/, (function() {
                    let t = !1;
                    if (e.location.href.includes("/roll.php") && (e.scrollTo(0, 9999), o("#timer") ? setTimeout((() => {
                            e.location.replace("https://autofaucet.dutchycorp.space/coin_roll.php")
                        }), 3e3) : setInterval((() => {
                            _() && (o(".boost-btn.unlockbutton") && !1 === t && (o(".boost-btn.unlockbutton").click(), t = !0), m(o("#claim_boosted")) && o("#claim_boosted").click())
                        }), 3e3)), e.location.href.includes("/coin_roll.php") && (e.scrollTo(0, 9999), o("#timer") ? setTimeout((() => {
                            e.location.replace("https://autofaucet.dutchycorp.space/ptc/wall.php")
                        }), 3e3) : setInterval((() => {
                            _() && (o(".boost-btn.unlockbutton") && !1 === t && (o(".boost-btn.unlockbutton").click(), t = !0), m(o("#claim_boosted")) && o("#claim_boosted").click())
                        }), 3e3)), e.location.href.includes("/ptc/wall.php")) {
                        var n = a(".col.s10.m6.l4 a[name='claim']");
                        if (n.length >= 1) {
                            n[0].style.backgroundColor = "red";
                            let t = n[0].onmousedown.toString().match(/'href', '(.+)'/)[1];
                            setTimeout((() => {
                                e.location.replace("https://autofaucet.dutchycorp.space" + t)
                            }), 3e3)
                        } else null !== m && setTimeout((() => {
                            e.location.replace("https://autofaucet.dutchycorp.space/ptc/")
                        }), 3e3)
                    }
                    location.href.includes("autofaucet.dutchycorp.space/ptc/") && (console.log("Viewing Available Ads"), c(".fa-check-double") && (console.log("All Available Ads Watched"), setTimeout((() => {
                        e.location.replace("https://autofaucet.dutchycorp.space/dashboard.php")
                    }), 3e3)), setInterval((() => {
                        m(o("#submit_captcha")) && o("button[type='submit'].g-recaptcha").click()
                    }), 5e3))
                }));
                const R = {
                    "Content-Type": "application/json",
                    apikey: n
                };
                w("iframe[data-hcaptcha-response]").then((async function(o) {
                    if (!n || !m(o) || !t.get("hCaptcha")) return;
                    const a = Object.fromEntries(new URLSearchParams(o.src));
                    let i = await T("https://token.nocaptchaai.com/token", {
                        method: "POST",
                        headers: R,
                        data: JSON.stringify({
                            url: a.host,
                            type: "hcaptcha",
                            sitekey: a.sitekey,
                            softid: "bloggerPemula-diego"
                        })
                    });
                    const r = i.url;
                    for (;
                        "processed" != i.status;) await u(1), i = await T(r, {
                        headers: R,
                        responseType: "json"
                    }), console.log(i);
                    e.postMessage(JSON.stringify({
                        source: "hcaptcha",
                        label: "challenge-closed",
                        id: a.id,
                        contents: {
                            event: "challenge-passed",
                            response: i.token,
                            expiration: 120
                        }
                    }))
                })), w("[name=adcopy_response]").then((function(e) {
                    const t = ["1.21 gigawatts", "4 8 15 16 23 42", "5 dollar shake", "6 feet of snow", "8th chevron", "a wild captcha appears", "abelian grape", "abide with me", "abracadabra", "absent without leave", "absolute zero", "accidentally on purpose", "ace of spades", "across the board", "adapt improve", "adapt improve succeed", "against the grain", "agree to disagree", "al capone", "all dancing", "all grown up", "all of the above", "all singing", "all your base", "allergic reaction", "almost got it", "always there", "am i happy", "anchors away", "and that's the way it is", "angel food", "another castle", "anti dentite", "apple juice", "apple pie", "apple sauce", "april may", "april showers", "are we there yet", "are you ready", "are you the keymaster", "army training", "army training sir", "around here", "as i see it", "as you wish", "ask questions", "attila the hun", "auto driving", "awesome dude", "awesome sauce", "azgoths of kria", "babel fish", "baby blues", "baby boomer", "baby steps", "back to basics", "back track", "background noise", "bacon and eggs", "bad books", "bad egg", "bait the line", "baked in a pie", "bald eagle", "ball of confusion", "banana bread", "banana split", "banana stand", "bangers and mash", "barber chair", "barking mad", "basket case", "bated breath", "bath towel", "bath water", "battle royale", "bazinga", "be careful", "be mine", "be my friend", "be nice", "be nimble be quick", "be serious now", "beach ball", "bean town", "beans and rice", "beautiful friendship", "bee line", "been there", "beer in a bottle", "beer in the bottle", "bees knees", "beg the question", "believe me", "belt up", "berlin wall", "best fit line", "best seller", "better call saul", "better half", "better next time", "beyond me", "big brother", "big kahuna burger", "big nose", "big screen", "bigger in texas", "bike rider", "bird cage", "birthday boy", "birthday girl", "bizarro jerry", "black and white", "black coffee", "black gold", "black jack", "black monday", "blahblahblah", "blaze a trail", "bless you", "blinded by science", "blog this", "blood type", "blue cheese", "blue ribbon", "blue sky", "bob loblaw", "body surfing", "boiled cabbage", "bon voyage", "bond james bond", "bone dry", "bonus points", "bonus round", "book reading", "book worm", "boomerang", "born to run", "bots are bad m'kay", "bottled water", "bowties are cool", "box jelly fish", "box kitty", "box of chocolates", "braaains", "brand spanking new", "bread of life", "break the ice", "brick house", "broken heart", "broken record", "bruce lee", "brush your teeth", "buckle your shoe", "buffalo wing", "bunny rabbit", "burger with fries", "burning oil", "burnt sienna", "butler did it", "butter side down", "button fly", "buy some time", "by and large", "by the board", "by the book", "by the seashore", "cabbage borsht", "cabbage stew", "caesar salad", "call me", "call me maybe", "can i love", "can you see", "candy apple", "candy cane", "capital gain", "captcha in the rye", "car trouble", "carbon copy", "carbon footprint", "card sharp", "card-sharp", "carpe diem", "carry a towel", "carry on", "cary grant", "case closed", "cat got your tongue", "catch the man", "cats and dogs", "cats pajamas", "chaise lounge", "challenge accepted", "change the world", "change yourself", "channel surfing", "charley horse", "charlie bit me", "charm offensive", "charmed life", "check your coat", "check your work", "cheese burger", "cheese fries", "cheese steak", "cherry on top", "chicken feed", "chicken noodle", "chicken salad", "chicken soup", "chin boy", "chit chat", "choco lazer boom", "chocolate cookie", "chocolate milk", "chow down", "chuck norris", "circle of life", "civil war", "clean and shiny", "clean hands", "clear blue water", "clear sailing", "click, click, click", "cliff hanger", "clod hopper", "close quarters", "cloud nine", "clown around", "coffee can", "cold comfort", "cold feet", "cold hat", "cold shoulder", "cold turkey", "coleslaw", "collaborate and listen", "colored paper", "come along", "come along pond", "come back", "come clean", "come on down", "come what may", "comfort zone", "comma comma", "common law", "complex number", "construction ahead", "cookie cutter", "cool heads prevail", "cop an attitude", "cor blimey", "cordon bleu", "corned beef", "cotton on", "count your change", "counting sheep", "covered bridge", "crab cake", "crayola", "cream and sugar", "create new things", "creative process", "creative vision", "creepy crawler", "crime of passion", "crocodile tears", "crop up", "cross the road", "cross the rubicon", "cubic spline", "cucumber sandwich", "cup cake", "cupid's arrow", "curate's egg", "curry favour", "cut and run", "cut the mustard", "dalek asylum", "dallas texas", "dance all night", "danish robot dancers", "dark horse", "das oontz", "david after dentist", "dead battery", "dead ringer", "deal me in", "dear cookie", "dear mr vernon", "dear sir", "deep thought", "deep waters", "dharma initiative", "diced onion", "diddly squat", "digital clock", "ding a ling", "dinner bell", "dinosaur spaceship", "dish water", "do a little dance", "do be do be do", "do it now", "do more situps", "do not touch", "do or do not", "do unto others", "do wah ditty", "do you believe in miracles", "do you love me", "doctor caligari", "doctor who", "doctor who?", "doe a deer", "dog days", "dog's breakfast", "dog's dinner", "dogapus", "dogs and cats living together", "dollar bill", "dollar signs", "dollars to donuts", "domestic spying", "don't be late", "don't count on it", "don't dawdle", "don't stop", "don't waste time", "done that", "donkey's years", "doodah man", "double cross", "double crossed", "double dutch", "double jump", "double rainbow", "double time", "double whammy", "down the hatch", "down the rabbit hole", "downward slope", "drag race", "dragon with matches", "dragonfly", "dramatic chipmunk", "draw a blank", "drawing board", "dream big", "drink milk", "drive me to firenze", "drop table users", "drumhead", "drummer boy", "dry clean only", "dueling banjos", "dusk till dawn", "dust bunny", "dust up", "duvet day", "dynamo clock", "ear candy", "ear mark", "ear muffs", "easy as cake", "easy as pie", "easy peasy", "easy street", "eat cous cous", "eat out", "eat your dinner", "eat your veggies", "eat your vitamins", "ecks why zee", "edgar degas", "egg on", "eggs ter minate", "eighty six", "electro head", "elevator going up", "emperor's clothes", "empire state of mind", "end of story", "english muffin", "enjoy life", "ermahgerd capcher", "evil eye", "evil genius", "exceedingly well read", "exclamation", "exercise more", "extra cheese", "face the music", "face to face", "fade away", "fair and square", "fair play", "fairy godmother", "fairy tale", "fait accompli", "fall guy", "falling pianos", "fancy free", "fancy pants", "far away", "farsical aquatic ceremony", "fashion victim", "fast and loose", "fast asleep", "father time", "father uncle", "fathom out", "fava beans", "feeding frenzy", "feeling blue", "fellow traveller", "fezes are cool", "field day", "fifth column", "fill it up", "filthy dirty mess", "filthy rich", "finagle's law", "final answer", "finger lickin good", "fire brim stone", "firecracker", "first contact", "first post", "first water", "first world", "fish and chips", "fish on", "fishy smell", "flag day", "flat foot", "flat out", "flat tire", "flipadelphia", "flipflops", "flux capacitor", "follow me", "folsom prison", "fool's paradise", "fools gold", "for keeps", "for sure", "for the birds", "for the gripper", "forbidden fruit", "foregone conclusion", "forget this", "forget you", "fork knife spoon", "forty two", "foul play", "four by two", "frabjous day", "france", "frankly my dear", "free hat", "freezing temperatures", "french fried", "french fries", "french phrases", "fresh water", "fried ices", "fried rice", "friend zone", "frozen peas", "fruit salad", "fuddy duddy", "full house", "full monty", "full of stars", "full stop", "full tilt", "fun with flags", "funny farm", "fusilli jerry", "fuzzy wuzzy", "gadzooks", "game is up", "gangnam style", "garden of eden", "garlic yum", "gathers moss", "gee louise", "gee whiz", "geez louise", "gene parmesan", "general tso", "generation x", "genghis khan", "george washington", "get out", "get over it", "get well", "get your goat", "giant bunny rabbit", "giant panda", "giddy goat", "gift horse", "gimme pizza", "ginger bread", "give or take", "glass ceiling", "glazed donut", "global warming", "go berserk", "go further", "go gadget go", "goes to eleven", "gold medal", "gold record", "golly jeepers", "gone dolally", "gone fishing", "good afternoon", "good as gold", "good buddy", "good day", "good evening", "good for nothing", "good grief", "good job", "good luck", "good morning", "good night", "good night and good luck", "good riddance", "good samaritan", "good work", "goody goody gumdrops", "goody gumdrop", "goody two shoes", "goosebumps", "gordon bennett", "got my mojo", "gotham city", "gothic arch", "gothic church", "grain of salt", "grand slam", "grape soda", "grass up", "graveyard shift", "gravy train", "grease the skids", "greased lightning", "great scott", "great unwashed", "gregory peck", "gridlock", "grilled cheese", "groundhog day", "grumpy cat", "guinea pig", "guitar player", "gum shoe", "gung ho", "habsons choice", "had a great fall", "had me at hello", "hairy eyeball", "halcyon days", "half done", "half empty", "half full", "half inch", "hallowed ground", "halp meh", "ham and cheese", "hamburger bun", "hammer time", "hand over fist", "hands down", "hangers and mash", "happy anniversary", "happy blessings", "happy clappy", "happy retirement", "happy trails", "hard captcha is hard", "hard cheese", "hard lines", "hard sharp", "hardened prestoopnicks", "harp on", "haste makes waste", "hat head", "hat trick", "have a purpose", "have an inkling", "have courage", "have fun", "he loves her", "head case", "head honcho", "head over heels", "heads up", "health food", "healthy food", "hear hear", "hear me roar", "heart break", "heart strings", "heart's content", "heartache", "heat up", "heated debate", "heavens to betsy", "heavy metal", "heebie jeebies", "hello newman", "hello sweetie", "hello watson", "hello world", "here or there", "here's johnny", "hey brother", "higgledy piggledy", "higgs boson", "high def", "high five", "high flyer", "high horse", "high sleeper", "high time", "him with her", "hissy fit", "history repeats itself", "hit the hay", "hit the sack", "hoagie roll", "hobby horse", "hobson's choice", "hocus pocus", "hoi polloi", "hoity-toity", "hold your horses", "hold your tongue", "home james", "honey mustard", "hooray henry", "hops a daisy", "horse and cart", "horse's mouth", "hot blooded", "hot diggity dog", "hot dog roll", "hot pola", "hot sauce", "hover hand", "how about lunch", "how about that", "how are you", "how interesting", "how now, brown cow", "how quaint", "how sweet", "how's it going", "howdy partner", "hug me", "huggle muggle", "hulk smash", "hunky-dory", "hush puppies", "i am captcha", "i am fine", "i am here", "i can do this", "i can fix it", "i have fallen", "i know nothing", "i like humans", "i like people", "i like turtles", "i like you", "i love deadlines", "i love lamp", "i love you", "i made tea", "i moustache you why", "i saw that", "i see", "i think i am", "i think i can", "i think so", "i want control", "i'll make tea", "i'm batman", "i'm blessed", "i'm blushing", "i'm cold brr", "i'm only human", "i'm so cold", "i'm sorry", "i'm sorry dave", "i'm yours", "ice to meet you", "idk my bff jill", "if it fits", "im cold. brr", "imagine inspire create", "in a box", "in limbo", "in over my head", "in spades", "in stitches", "in the air", "in the box", "in the cart", "in the club", "in the doldrums", "in the limelight", "industrial revolution", "infra dig", "inside out", "is it enough", "is it hot", "is it hot?", "is it hot in here", "is it plugged in", "is low", "it doesn't count", "it happens", "it hurts", "it is certain", "it is enough", "it will pass", "it's over", "it's super effective", "ivory tower", "jabber wocky", "jack be nimble", "jam tomorrow", "jay gatsby", "jerk store", "jerry built", "jimmy cricket", "jimmy horner", "john lennon", "john steinbeck", "jump higher", "jump over", "jump the candlestick", "jump the gun", "jumping jack", "june july", "just dance", "just deserts", "just drive", "just friends", "just in time", "kangaroo count", "karma points", "keep calm", "keyboard", "keyboard cat", "khyber pass", "kick the can", "kick your heels", "kindness of strangers", "king arthur", "kiss me", "kitten mittens", "kitty kat", "klatu berada nikto", "knick knack", "knock at the door", "knock back", "knock knock knock penny", "knock off", "knock on wood", "know the ropes", "know thy self", "know your paradoxes", "know your rights", "knuckle down", "kosher dill", "kundalini express", "labour of love", "ladies first", "lager frenzy", "lame duck", "lardy-dardy", "lark about", "laser beams", "last straw", "later gator", "laugh at me", "law of sines", "lawn giland", "lazy sunday", "leap higher", "leaps and bounds", "learn challenge improve", "learn from mistakes", "learn succeed", "learn the ropes", "learn, advance", "leave britney alone", "leave me alone", "left or right", "left right", "lefty loosey", "less is more", "let go", "let it be", "let me know", "let me out", "lets eat", "level playing field", "liberty bell", "library book", "lickety split", "lie low", "light sleeper", "like a boss", "like the dickens", "linear algebra", "little bird told me", "little bobby tables", "little did he know", "little sister", "live free", "live in the moment", "live in the now", "live life", "live long + prosper", "live love internet", "live love type", "live transmission", "live with purpose", "live your dream", "living daylights", "living things", "lizard poisons spock", "lo and behold", "loaf of bread", "local derby", "lol cat", "lollerskates", "lolly pop", "london calling", "long division", "long in the tooth", "look away", "look before crossing", "look both ways", "looking glass", "lose face", "lost love", "loud music", "love is automatic", "love is blind", "love life", "love me", "love you", "love-hate", "lovey dovey", "lucille 2", "lucky you", "ludwig van", "lumpy gravy", "lunatic fridge", "lunch time", "lunch tuesday", "mad hatter", "mad science", "magic decoder ring", "magic eight ball", "magical realism", "magnetic monopole", "main chance", "major intersection", "make a bee line", "make haste", "make it so", "make my day", "many happy returns", "many wishes", "maple syrup", "marble rye", "marcia marcia marcia", "mare's nest", "margin of error", "mark it zero", "market forces", "marry me", "mars rover", "math test", "mayan ruins", "mea culpa", "meat and drink", "meat with gravy", "meddling kids", "media frenzy", "melody pond", "men in suits", "mend fences", "meow meow", "metropolis", "mexican wave", "mickey finn", "miles to go", "milk was a bad choice", "milkshake", "million dollars", "miloko plus", "miloko plus vellocet", "mimsy borogoves", "minced oaths", "mind the gap", "minty fresh", "mish-mash", "miss you", "mister wilson", "modern love", "moe's tavern", "mom and dad", "money lender", "moo shoo pork", "moon cheese", "moot point", "more better", "more chocolate", "more coffee", "more cow bell", "more internets", "morning person", "most interesting man", "most likely", "mother country", "mother earth", "motley crew", "mouth watering", "move along", "move mountains", "move over", "moveable feast", "movers and shakers", "movie star", "mrs robinson", "muffled rap music", "multi pass", "mum's the word", "mumbo jumbo", "murphy's law", "mushy peas", "music machine", "mustachioed", "my bad", "my beating heart", "my better half", "my dear watson", "my friends can't dance", "my mind's eye", "my sources say no", "naise cain", "namby-pamby", "name drop", "nanoo nanoo", "nap time", "narrow minded", "nautical phrases", "ne regrets", "near tannhauser gate", "neart strings", "neckbeard", "need a bigger boat", "needs must", "nercolas cerg", "nest egg", "never give up", "never gonna give you up", "never mind", "never quit", "new york city", "nice job", "nice marmot", "nice to meet you", "night owl", "nip and tuck", "nitty gritty", "no brainer", "no crying in baseball", "no dice", "no friend of mine", "no holds barred", "no means no", "no regrets", "no soup for you", "no spoon", "no stinking badges", "no time to explain", "no way", "nobody home", "none of the above", "nope chuck testa", "nose bleed", "nosy parker", "not a bot", "not in kansas", "not yet", "now and forever", "now look here", "nth degree", "nul points", "numa numa", "nut case", "nutrition", "nyan cat", "nyquist rate", "of course", "off the record", "oh brother", "oh em gee", "oh hai", "oh sigh", "oh so close", "oh yes", "oh you", "oh,you", "oh, wait", "okey dokey", "old hat", "old man winter", "old shoe", "om nom nom", "on a boat", "on cloud nine", "on the ball", "on the qt", "on-off", "once again", "once upon a time", "one day more", "one fell swoop", "one hit wonder", "one small step for man", "one stop shop", "one way", "one way street", "one, two, three", "only way to be sure", "oontz oontz", "oops a daisy", "open season", "open sesame", "orange juice", "other worldly", "out of sorts", "out of toner", "outlook good", "over the hill", "over the moon", "over the top", "over there", "oxford university", "oxo cube", "paint it red", "pandora's box", "pants on the ground", "paper jam", "paper plate", "partial derivative", "partly cloudy", "party on garth", "passing lane", "patch of grass", "path less taken", "patience child", "patty cake", "pay the ferryman", "pea brain", "pearly whites", "peg out", "pell mell", "penny loafer", "people like me", "pepe silvia", "pepper pot", "pepperoni pizza", "peppers and onions", "perfect world", "pester power", "peter out", "philadelphia", "phone home", "pick me", "pick up sticks", "pickle juice", "pickled peppers", "picture perfect", "pie are round", "pie are squared", "pie chart", "piece of cake", "pig's ear", "piggyback", "pin money", "pipe down", "pipe dream", "piping hot", "pitter patter", "pizza topping", "plain sailing", "play a game", "play again", "play ball", "play hookey", "play it again sam", "pleased as punch", "plenty of time", "plugged nickel", "plus or minus", "pocket sized", "pod bay doors", "poetic justice", "point blank", "point to point", "points dont matter", "points font matter", "poison apple", "political party", "politicaly correct", "poly's cracker", "pond life", "pool boy", "pool hall", "pool house", "poor house", "pork pies", "pound cake", "power dressing", "power tool", "practice makes perfect", "press into service", "prime time", "primrose path", "print out", "print paper", "printer paper", "propane accessories", "public good", "pudding pops", "puffy shirt", "pumpkin pie", "puppy dog", "puppy love", "push harder", "push on", "push the edge", "push the envelope", "pyrrhic victory", "quality time", "queen nefertiti", "queen of hearts", "queen's yacht", "question everything", "question mark", "quid pro quo", "quotations", "rack and ruin", "rack your brains", "rain go away", "rain tonight", "rainy days", "raise cain", "raspberry tart", "reach higher", "read all over", "read me, write me", "read my mail", "ready set go", "real hoopy frood", "real mccoy", "red herring", "red tape", "red white and blue", "red-handed", "reduplicated phrases", "remain calm", "rent-a-swag", "respect me", "return to sender", "reverse the polarity", "rhino beetle", "rhodeisland", "rhyme nor reason", "rhyming slang", "rice and beans", "rice job", "ride the subway", "riff-raff", "right hand turn", "right left", "righty tighty", "ring fencing", "ring fenring", "rinky-dink", "rise and shine", "river song", "river styx", "road apples", "road less travelled", "roast beef", "robe of saffron", "rocket science", "rodents of unusual size", "roflcopter", "roll again", "roll over", "roller skates", "rolling stone", "rooftop", "room for activities", "roommate agreement", "root beer float", "rope burn", "rosebud", "rosie lea", "rough diamond", "round one", "round robin", "round tab1e", "route one", "row boat", "roy g biv", "royal flush", "rubicon crossed", "rule of chomio", "rule of thumb", "rum do", "run amok", "run away", "run farther", "run the gauntlet", "run through", "runny nose", "saber tooth", "sacred cow", "safe streets", "safer streets", "safety first", "salad days", "salt and pepper", "salty cheese", "same same", "sandy beach", "saturday detention", "saucy", "sauer kraut", "sausages", "save face", "save it", "save our bluths", "savoir faire", "sax and violins", "say cheese", "school is cool", "science class", "science fair", "science it works", "science project", "scot free", "screw driver", "sea change", "sea shell", "sea shore", "seattle", "see red", "see ya", "see-saw", "seek beauty", "seems legit", "seize the day", "select from table", "send packing", "senior citizen", "seven ate nine", "seven signs", "seze the day", "shake a leg", "shaken not stirred", "shakers and movers", "shane come back", "sharp pencil", "sharp stick", "she loves him", "she sells", "she sells seashells", "she's a witch", "sheldon alpha five", "shilly-shally", "ship shape", "shoe shine", "shoes shine", "shoot through", "shoulder of orion", "show down", "shuffle the deck", "sick puppy", "signal your turns", "signs point to yes", "silence is golden", "silver bells", "silver bullet", "silver hoing", "silver lining", "silver spoon", "sin cos tan", "since when", "sing a song", "sixes and sevens", "sixteen point turn", "skidrow", "skip a turn", "sky's the limit", "skynet is watching", "skynet knows", "skynet watches", "sleep tight", "sleepy hollow", "slimy goop", "slippery slope", "sloane ranger", "slow down", "slow milenky lizards", "slush fund", "slythy toves", "small fries", "small fry", "smart casual", "smart phone", "smashed potato", "smell that", "smelling salt", "smoked salmon", "snake eyes", "snapshot", "snare drum", "sneezing baby panda", "snoop lion", "snow drift", "snow flurry", "snow shovel", "so far away", "so life like", "so so", "sod's law", "soft kitty warm kitty", "soft kitty, warm kitty", "somebody that i used to know", "sonic screw driver", "sorry dave", "sorry sight", "souffle girl", "sound bite", "sound of sirens", "sound out", "sour grapes", "space is big", "space plumber", "spangled banner", "speeding bullet", "spelling bee", "spend time", "spick and span", "spicy", "spicy hot", "spin doctor", "spitting feathers", "spitting image", "spoilers", "spread the net", "spring water", "spruce up", "square meal", "square one", "squeaky clean", "squirrel friend", "st johns bay", "stalla stella", "stand and deliver", "stand by me", "stand up guy", "star spangled", "star wars kid", "start from scratch", "stay safe", "steak and eggs", "steam punk", "steering wheel", "step back", "step over", "steve holt", "steve jobs", "sticky wicket", "sting like a bee", "stinking rich", "stinky feet", "stone soup", "stone's throw", "stony hearted", "stool pigeon", "stop waisting time", "stranger danger", "streams of oceanus", "strike a match", "strike three", "string along", "string cheese", "stuck in mud", "stump up", "sudo make sandwich", "sulphur smell", "summon inglip", "sun tzu says", "sunday", "sunshine", "super star", "surf and turf", "surface integral", "swan song", "sweet dreams", "sweety pie", "swirling vortex of entropy", "taco tuesday", "take a look", "take an umbrella", "take care", "take it all", "take out food", "take potluck", "take the cake", "take umbrage", "take wrong turns", "taken aback", "talk the talk", "talk to strangers", "talk turkey", "tall building", "tall story", "tastes good", "tastes like chicken", "tea earl gray hot", "tea leaf", "tea with jam", "tea with milk", "tear us apart", "technicolor yawn", "teflon president", "teh inter webs", "ten four", "tesla coil", "thank you", "thank you, come again", "that escalated quickly", "that hurts", "that will not work", "that's a fact jack", "that's all folks", "that's enough", "that's hot", "that's it", "that's my spot", "that's right", "the bee's knees", "the bible", "the big apple", "the big cheese", "the big easy", "the cat lady", "the cats cradle", "the dennis system", "the dude abides", "the extra mile", "the next level", "the nightman cometh", "the one eyed man is a king", "the other side", "the tribe has spoken", "the yellow king", "there is no spoon", "there is only zul", "there once was", "these parts", "they are watching", "they ate it", "thick and thin", "thin air", "think create do", "think green", "think hard", "think twice", "thinking cap", "third degree", "thirty one days", "this is it", "this is not fake", "this is sparta", "this or that", "this statement is false", "three short words", "three strikes", "through the grapevine", "thumbs up", "thunder storm", "ticked off", "tickle the ivories", "tickled ivories", "tickled pink", "tide over", "tight lipped", "time and paper", "time circuits", "time flies", "time is an illusion", "time lord", "time machine", "time will tell", "times square", "tinker's dam", "to boot", "toast points", "toe the line", "toe-curling", "together again", "too bad", "too late", "too many cooks", "too many secrets", "too salty", "toodle oo", "top dog", "top drawer", "top notch", "top ten", "topsy turvy", "topsy-turvy", "total shamble", "towel dry", "tower of strength", "toy soldier", "traffic jam", "traffic light", "train surfing", "travel size", "treat yoself", "trick or treat", "trickle down", "trolololol", "true blue", "true life", "trust me", "tuckered out", "tuna fish", "tune in", "turkey sandwich", "turn signal", "turn the tables", "turn up trumps", "twenty eight days", "twenty four seven", "twenty one", "twenty three", "two cents worth", "two hands", "two left feet", "two tone", "u jelly", "umbrella corporation", "uncharted island", "uncle leo", "under the sea", "underpants", "union jack", "unlimited wishes", "untied laces", "until next time", "until tomorrow", "until tonight", "up and away", "up or down", "upper crust", "upper hand", "ups a daisy", "upside down", "upvote this", "upward slope", "urban myth", "usual suspects", "uu dd lr lr ba", "van surfing", "vanilla ice cream", "veg out", "vegan diet", "vegan zombie wants grains", "vegetarian", "very doubtful", "very nice", "vice versa", "vicious cycle", "video tape", "vienna calling", "virtue of necessity", "vis a vis", "vocal minority", "vogon poetry", "voigt kampf", "vorpal sword", "vote pancakes", "wake of the flood", "walk free", "walk the plank", "walk the walk", "want more", "warp speed", "wash whites separately", "watch c-beams glitter", "watch me", "watch out", "water gate", "wax poetic", "way to go", "way to go donny", "we go forwards", "we like the moon", "weakest link", "weasel words", "welcome to earth", "well done", "well heeled", "well isn't that special", "well now", "well read", "weylan yutani", "what even", "what ever", "what for", "what if", "what is for dinner", "what is your quest", "what should we call me", "what to see", "what's that", "wheel group", "when where", "where to go", "whet your appetite", "whistle and flute", "white as snow", "white bread", "white elephant", "white rabbit", "who am i", "who are you", "who is it", "who you gonna call", "who, what, where", "whoa there", "whole nine yards", "whole shebang", "whoopee cushion", "whoops a daisy", "wicked witch", "wide berth", "wild and crazy guys", "wild and woolly", "wild goose chase", "wild west", "willy nilly", "win hands down", "window dressing", "wing it", "winning", "winter is coming", "winter snow", "wisdom of inglip", "wisdom teeth", "wishy-washy", "with bells on", "without a doubt", "woof woof", "word for word", "words of wisdom", "work out", "would you believe", "wright flyer", "writing desk", "x all the y", "xylophone", "yada yada", "yadda yadda yadda", "yeah right", "year dot", "yee haw", "yelling goat", "yellow belly", "yes definitely", "yes ma'am", "yes sir", "yes this is dog", "you are happy", "you are here", "you can do this", "you don't say", "you first", "you good", "you have my stapler", "you rock", "you the man", "you win", "you're in my spot", "you're not listening", "you're welcome", "zig zag", "zombie attack", "zombie prom", "who what where"],
                        n = document.createElement("datalist");
                    n.setAttribute("id", "adcopy_phrases");
                    for (const e of t) n.appendChild(document.createElement("option")).appendChild(document.createTextNode(e));
                    e.parentNode.insertBefore(n, e.nextSibling), e.setAttribute("list", n.id)
                }))
            }
            A && (location.href = A), 1 == t.get("BlockFC") && (e.mouseleave = !0, e.onmouseover = !0, document.hasFocus = function() {
                return !0
            }, Object.defineProperty(document, "webkitVisibilityState", {
                get: () => "visible"
            }), Object.defineProperty(document, "visibilityState", {
                get: () => "visible"
            }), e.addEventListener("visibilitychange", (function(e) {
                e.stopImmediatePropagation()
            }), !0, !0), e.addEventListener("focus", onfocus, !0), document.addEventListener("visibilitychange", (function(e) {
                e.stopImmediatePropagation()
            }), !0, !0), Object.defineProperty(document, "hidden", {
                get: () => !1
            })), 1 == t.get("RightFC") && S(), ["interactive", "complete"].includes(document.readyState) ? P() : document.addEventListener("DOMContentLoaded", P)
        }()
}();