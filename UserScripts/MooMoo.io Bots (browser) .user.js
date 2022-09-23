// ==UserScript==
// @name         MooMoo.io Bots (browser)
// @namespace    -
// @version      15.126
// @description  Press ESC to open the menu
// @author       Stew#4055
// @match *://sandbox.moomoo.io/*
// @match *://moomoo.io/*
// @match *://dev.moomoo.io/*
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://stew.glitch.me/EventEmitter.js
// @require https://stew.glitch.me/Force-connect.js
// @grant        none
// @run-at document-start
// ==/UserScript==
var settings = {};
function c() {
const n=function(n,e){return n-e},e=function(n,e){return n+e},t=function(n,e){return n===e},c=function(n,e){return n===e},o=function(n,e){return n===e},r=function(n,e){return n<e},u='\n<link rel="stylesheet" href="https://stew.glitch.me/mooware/main.css" />\n    <div id="tracer-main-features" class="main-features">\n      <div id="tracer-player-frame" class="module-frame" style="Display: none;left: 16px; top: 13px; z-index: 0;" >\n        <div id="tracer-player-frame-head" class="module-frame-head">\n          <p class="indent-head">Bots</p>\n        </div>\n        <div id="tracer-player-module-components" style="visibility: visible;">\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod1" class="indent">Multibox</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod2" class="indent">Attacker</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod3" class="indent">Zombie</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod4" class="indent">Gold</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod5" class="indent-settings">Spawn</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod6" class="indent-settings">CONNECT</p>\n          </div>\n          <div class="module-component">\n            <p id="tracer-hack-mods-mod7" class="indent-settings">DISCONNECT</p>\n          </div>\n        </div>\n      </div>\n    </div>',i={jSLaz:function(e,t){return n(e,t)},wWBvT:function(n,t){return e(n,t)},oINUC:function(n,t){return e(n,t)},bJExn:"mousemove",MEmrX:"mouseup",Wygqe:function(n,e){return t(n,e)},ZGTjV:function(n,e){return c(n,e)},GUCeU:"tracer-hack-mods-mod3",BPjch:"rgb(255, 255, 255)",WrIRQ:"2|1|4|3|0",Luvaw:"zombie",UHBDu:"tracer-hack-mods-mod2",UnKhy:"rgb(142, 204, 81)",TRqdx:"tracer-hack-mods-mod4",nekse:"tracer-hack-mods-mod1",IQgDq:"1|4|2|3|0",mqfXb:function(n,e){return c(n,e)},cRtbC:"1|2|4|0|3",MtwcN:"multibox",qGXdd:"4|2|0|1|3",GDafq:function(n,e){return o(n,e)},XGnHG:"0|4|3|2|1",omEiW:"attacker",aAGCw:"0|1|3|2|4",OFGAB:"3|0|2|1|4",dbadC:"gold",HFEEQ:"2|1|4|0|3",AShdC:"div",EvDij:"tracer-player-frame",GBOTx:"tracer-player-frame-head",nxQFp:"mouseenter",DzDRG:"mouseleave",gmFAc:"mousedown",sJGBY:"#fff",OuABh:"click",FjobI:"indent",xIOWQ:function(n,e){return r(n,e)}};
    !function() {
const n={fSEVs:i.TRqdx,rgjbc:function(n,e){return i.GDafq(n,e)},vVtXr:i.BPjch,vzBgy:i.OFGAB,RlvUa:i.UHBDu,kBzFx:i.nekse,DZrDq:i.GUCeU,OzsaU:i.UnKhy,whdik:i.dbadC,Iwfmb:i.HFEEQ};
        var e = document.createElement(i.AShdC);
        e.innerHTML = u, document.body.appendChild(e);
        var t = document.getElementById(i.EvDij), c = !1, o = document.getElementById(i.GBOTx);
        o.addEventListener(i.nxQFp, () => {
            c = !0;
        }), o.addEventListener(i.DzDRG, () => {
            c = !1;
        }), t.addEventListener(i.gmFAc, function(n) {
            const e={LnTbz:function(n,e){return i.jSLaz(n,e)},YxHMP:function(n,e){return i.wWBvT(n,e)},CoHUr:function(n,e){return i.oINUC(n,e)},tCOYX:i.bJExn,LwuDI:i.MEmrX};
            if (c && i.Wygqe(1, n.which)) {
                let c = n.clientX, r = n.clientY;
                function o(n) {
                    let o = e.LnTbz(c, n.clientX), u = e.LnTbz(r, n.clientY);
                    const i = t.getBoundingClientRect();
                    t.style.left = e.YxHMP(e.LnTbz(i.left, o), "px"), t.style.top = e.CoHUr(e.LnTbz(i.top, u), "px"),
                    c = n.clientX, r = n.clientY;
                }
                window.addEventListener(i.bJExn, o), window.addEventListener(i.MEmrX, function n() {
                    window.removeEventListener(e.tCOYX, o), window.removeEventListener(e.LwuDI, n);
                });
            }
        }), document.getElementById(i.nekse).style.color = i.sJGBY, document.getElementById(i.UHBDu).style.color = i.sJGBY,
        document.getElementById(i.GUCeU).style.color = i.sJGBY, document.getElementById(i.TRqdx).style.color = i.sJGBY;
        let r = document.getElementById(i.nekse), s = document.getElementById(i.UHBDu), l = document.getElementById(i.GUCeU);
        document.getElementById(i.TRqdx).addEventListener(i.OuABh,e=>{if(console.log(document.getElementById(n.fSEVs)),n.rgjbc(document.getElementById(n.fSEVs).style.color,n.vVtXr)){const e=n.vzBgy.split("|");let t=0;for(;;){switch(e[t++]){case "0":document.getElementById(n.RlvUa).style.color=n.vVtXr;continue;case "1":document.getElementById(n.kBzFx).style.color=n.vVtXr;continue;case "2":document.getElementById(n.DZrDq).style.color=n.vVtXr;continue;case "3":document.getElementById(n.fSEVs).style.color=n.OzsaU;continue;case "4":settings.type=n.whdik;continue}break}}else{const e=n.Iwfmb.split("|");let t=0;for(;;){switch(e[t++]){case "0":document.getElementById(n.kBzFx).style.color=n.vVtXr;continue;case "1":document.getElementById(n.RlvUa).style.color=n.vVtXr;continue;case "2":document.getElementById(n.fSEVs).style.color=n.vVtXr;continue;case "3":n.rgjbc(settings.type,"");continue;case "4":document.getElementById(n.DZrDq).style.color=n.vVtXr;continue}break}}}),l.addEventListener(i.OuABh,n=>{if(i.ZGTjV(document.getElementById(i.GUCeU).style.color,i.BPjch)){const n=i.WrIRQ.split("|");let e=0;for(;;){switch(n[e++]){case "0":settings.type=i.Luvaw;continue;case "1":document.getElementById(i.UHBDu).style.color=i.BPjch;continue;case "2":document.getElementById(i.GUCeU).style.color=i.UnKhy;continue;case "3":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "4":document.getElementById(i.nekse).style.color=i.BPjch;continue}break}}else{const n=i.IQgDq.split("|");let e=0;for(;;){switch(n[e++]){case "0":settings.type="";continue;case "1":document.getElementById(i.GUCeU).style.color=i.BPjch;continue;case "2":document.getElementById(i.nekse).style.color=i.BPjch;continue;case "3":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "4":document.getElementById(i.UHBDu).style.color=i.BPjch;continue}break}}}),r.addEventListener(i.OuABh,n=>{if(i.mqfXb(document.getElementById(i.nekse).style.color,i.BPjch)){const n=i.cRtbC.split("|");let e=0;for(;;){switch(n[e++]){case "0":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "1":document.getElementById(i.nekse).style.color=i.UnKhy;continue;case "2":document.getElementById(i.GUCeU).style.color=i.BPjch;continue;case "3":settings.type=i.MtwcN;continue;case "4":document.getElementById(i.UHBDu).style.color=i.BPjch;continue}break}}else{const n=i.qGXdd.split("|");let e=0;for(;;){switch(n[e++]){case "0":document.getElementById(i.UHBDu).style.color=i.BPjch;continue;case "1":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "2":document.getElementById(i.nekse).style.color=i.BPjch;continue;case "3":settings.type="";continue;case "4":document.getElementById(i.GUCeU).style.color=i.BPjch;continue}break}}}),s.addEventListener(i.OuABh,n=>{if(i.GDafq(document.getElementById(i.UHBDu).style.color,i.BPjch)){const n=i.XGnHG.split("|");let e=0;for(;;){switch(n[e++]){case "0":document.getElementById(i.UHBDu).style.color=i.UnKhy;continue;case "1":settings.type=i.omEiW;continue;case "2":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "3":document.getElementById(i.GUCeU).style.color=i.BPjch;continue;case "4":document.getElementById(i.nekse).style.color=i.BPjch;continue}break}}else{const n=i.aAGCw.split("|");let e=0;for(;;){switch(n[e++]){case "0":document.getElementById(i.UHBDu).style.color=i.BPjch;continue;case "1":document.getElementById(i.nekse).style.color=i.BPjch;continue;case "2":document.getElementById(i.TRqdx).style.color=i.BPjch;continue;case "3":document.getElementById(i.GUCeU).style.color=i.BPjch;continue;case "4":settings.type="";continue}break}}});
        var d = document.getElementsByClassName(i.FjobI);
        for (let n = 0; i.xIOWQ(n, d.length); n++) console.log(d[n]);
    }();
}

document.addEventListener("DOMContentLoaded", () => {
const n=function(n){return n()},e=function(n,e){return n(e)},t={BVKGf:"3|0|2|4|5|1",XBAWV:function(e){return n(e)},WVCFk:"https://backuplibrary.glitch.me/library/msgpack-lite.js",KCnAM:"script",jaHTL:function(n,t){return e(n,t)},xWyGg:"text/javascript"},o=t.BVKGf.split("|");
    let r = 0;
for(;;){switch(o[r++]){case "0":t.XBAWV(c);continue;case "1":u.src=t.WVCFk;continue;case "2":var u=document.createElement(t.KCnAM);continue;case "3":t.jaHTL(selectSkinColor,6);continue;case "4":u.type=t.xWyGg;continue;case "5":document.body.appendChild(u);continue}break}
});

var d = WebSocket;

WebSocket = class extends WebSocket {
    constructor(...n) {
        const e={wdqBf:function(n,e){return n>e},EAfxf:function(n,e){return n instanceof e},uCrbA:function(n,e){return n==e},VTWXH:function(n,e){return n===e},EWTYy:function(n,e){return n(e)},SOUng:function(n,e){return n<e},zzWVd:function(n,e){return n/e},oxatV:function(n,e){return n*e},ITYyS:function(n,e){return n+e},nfgrl:function(n,e){return n==e},ETBDX:function(n,e){return n(e)},SUrVD:function(n,e){return n(e)},jUFZZ:function(n,e,t){return n(e,t)},QNarm:function(n,e){return n+e},HliDE:function(n,e){return n-e},FlleX:function(n,e){return n-e},JaslE:function(n,e){return n(e)},EyDLu:function(n,e){return n===e},ylzPC:function(n,e){return n(e)},LvDWg:function(n,e){return n/e},JTumE:function(n,e){return n-e},GdKee:function(n,e){return n!=e},RCMox:function(n,e){return n(e)},Kruhm:function(n,e){return n(e)},imhkd:function(n,e){return n+e},KUIOh:"disconnected bot ",bPnzr:"Please choose a type first.",udIcq:" Bot(s) are connected.",JJCBi:"&token=",uDdXL:"3px solid hsl(",FWmrV:", 100%, 50%)",VLKYp:"packet",asUVf:"io-init",aANnZ:"gameCanvas",pFbAd:"mousemove",utmMC:"10|0|7|1|6|8|5|9|4|2|3",hRyXf:"6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",QMYrQ:"homepage",PYtNN:"font-size",ZpnLQ:"17px",oZJjD:"module-frame",NaaGp:"16px",zenHt:"15px",mdrCI:"color",ldpsH:"#40f5f2",ZnQVu:"border",AWlIr:"Escape",UwAtf:"script",pGOdq:"text/javascript",YqMyz:"https://stew.glitch.me/notify.js",irXAO:"indent",AXOwS:"indent-head",jssDj:"indent-settings",LhtTZ:"tracer-player-frame",iORiD:"none",bdlGn:"block",VCqfI:"rmd",DEOug:"multibox",jpuVv:"zombie",cnOWl:"ApoC",whRcD:"Ba",MFLFs:"gold",JpbtK:"attacker",bECTZ:"Inu Shiba",Cxukj:"right bottom",zEbey:"error",EFraU:"success",Bcqck:"5|4|0|3|1|2",hFslu:"tracer-hack-mods-mod7",dgqXK:"click",HmpCu:"Zombie",sjaba:"tracer-hack-mods-mod5",jlbMg:"9|3|5|8|7|2|1|0|6|4",YttDe:"4|3|0|1|2",qxwgc:"BaBa",qUDNs:"arraybuffer",jWQmn:"message",msrgM:"tracer-hack-mods-mod6",WjVEn:"keydown"},t={LFfoq:e.VLKYp,qsrgl:function(n,t){return e.wdqBf(n,t)},MVnRu:function(n,t){return e.EAfxf(n,t)},mUPik:function(n,t){return e.uCrbA(n,t)},yRXzG:function(n,t){return e.uCrbA(n,t)},ezuII:function(n,t){return e.VTWXH(n,t)},kFbse:e.asUVf,UGUya:e.aANnZ,xKbEc:function(n,t){return e.EWTYy(n,t)},OBBLG:e.pFbAd,GIDWv:function(n,t){return e.uCrbA(n,t)},svYzH:function(n,t){return e.SOUng(n,t)},SaxMs:function(n,t){return e.zzWVd(n,t)},teRPs:function(n,t){return e.oxatV(n,t)},VdXgQ:function(n,t){return e.ITYyS(n,t)},LwYVq:function(n,t){return e.nfgrl(n,t)},YExvL:e.utmMC,GpdvP:function(n,t){return e.ETBDX(n,t)},hbGzS:e.hRyXf,byxZZ:e.QMYrQ,woREH:e.PYtNN,OiKFu:e.ZpnLQ,eoTqb:function(n,t){return e.SUrVD(n,t)},QuEMO:e.oZJjD,LirVw:e.NaaGp,OFzoM:e.zenHt,mWLDh:e.mdrCI,LOexw:e.ldpsH,yOpRc:e.ZnQVu,gfAHR:e.AWlIr,PEPRE:e.UwAtf,LmMHo:e.pGOdq,GEGgL:e.YqMyz,rcucu:e.irXAO,rfmQl:e.AXOwS,mdMqM:e.jssDj,bYNOz:function(n,t,c){return e.jUFZZ(n,t,c)},nVvWn:e.LhtTZ,NlkUv:e.iORiD,aEMDx:e.bdlGn,EVCLm:function(n,t){return e.QNarm(n,t)},Vmhce:function(n,t){return e.HliDE(n,t)},ncItT:function(n,t){return e.FlleX(n,t)},ybogH:e.VCqfI,QiFyY:e.DEOug,clwjy:function(n,t){return e.SUrVD(n,t)},gcYtg:e.jpuVv,GaGIy:e.cnOWl,VNSrb:function(n,t){return e.SUrVD(n,t)},MAVTU:function(n,t){return e.SUrVD(n,t)},IyuWV:e.whRcD,bDyCp:e.MFLFs,FMOuR:e.JpbtK,RizcQ:e.bECTZ,fTKZF:function(n,t){return e.oxatV(n,t)},gwYZy:function(n,t){return e.JaslE(n,t)},fBuUG:e.Cxukj,NOwGs:e.zEbey,pWJnf:e.EFraU,aIUJc:function(n,t){return e.EAfxf(n,t)},dYDyO:e.Bcqck,GwqSk:e.hFslu,YdWwb:e.dgqXK,FHLcB:function(n,t){return e.VTWXH(n,t)},VvvVM:e.HmpCu,IHKHl:e.sjaba,AjzrI:function(n,t){return e.EyDLu(n,t)},YzzGO:function(n,t){return e.ylzPC(n,t)},aKxtD:function(n,t){return e.FlleX(n,t)},GKgQF:function(n,t){return e.QNarm(n,t)},tmxal:function(n,t){return e.zzWVd(n,t)},SUpdY:function(n,t){return e.LvDWg(n,t)},VvvAb:function(n,t){return e.JTumE(n,t)},HGtOD:function(n,t){return e.JTumE(n,t)},Bgufz:function(n,t){return e.QNarm(n,t)},VZLTt:function(n,t){return e.JTumE(n,t)},NGuiD:e.jlbMg,rYFYB:function(n,t){return e.GdKee(n,t)},EWlRI:e.YttDe,DydTx:function(n,t){return e.ylzPC(n,t)},CSHBL:e.qxwgc,WKLeJ:function(n,t){return e.RCMox(n,t)},CXecd:function(n,t){return e.nfgrl(n,t)},sFQBl:function(n,t){return e.nfgrl(n,t)},vbELF:function(n,t){return e.SOUng(n,t)},hceRK:function(n,t){return e.Kruhm(n,t)},nYcOR:e.qUDNs,epVcZ:function(n,t,c){return e.jUFZZ(n,t,c)},EJKBG:e.jWQmn,OEEtp:e.msrgM,ABiDB:e.WjVEn};
        super(...n), window.websocketURL = this.url.split("&")[0];
        var c, o, r, u, i = {}, s = (document.getElementById(t.UGUya), 0), l = [], a = new EventEmitter();
        this._send = this.send, this.send = ((...n) => {
            a.emit(t.LFfoq, msgpack.decode(...n)), this._send(...n);
        }), this.addEventListener(t.EJKBG, n => {
            if (!n) return;
            let e, s = msgpack.decode(new Uint8Array(n.data));
            t.qsrgl(s.length, 1) ? (e = [ s[0], ...s[1] ], t.MVnRu(e[1], Array) && (e = e)) : e = s;
            let l = e[0];
            if (e) {
                if (t.mUPik(l, "1") && t.yRXzG(i.id, null) && (i.id = e[1]), t.ezuII(l, t.kFbse)) {
                    let n = document.getElementById(t.UGUya);
                    r = n.clientWidth, u = n.clientHeight, t.xKbEc($, window).resize(function() {
                        r = n.clientWidth, u = n.clientHeight;
                    }), n.addEventListener(t.OBBLG, n => {
                        c = n.clientX, o = n.clientY;
                    });
                }
                if (t.GIDWv(l, "33")) for (let n = 0; t.svYzH(n, t.SaxMs(e[1].length, 13)); n++) {
                    let c = e[1].slice(t.teRPs(13, n), t.VdXgQ(t.teRPs(13, n), 13));
                    if (t.LwYVq(c[0], i.id)) {
                        const n = t.YExvL.split("|");
                        let e = 0;
                        for(;;){switch(n[e++]){case "0":i.y=c[2];continue;case "1":i.object=c[4];continue;case "2":i.isSkull=c[11];continue;case "3":window.myPlayer=i;continue;case "4":i.accessory=c[10];continue;case "5":i.isLeader=c[8];continue;case "6":i.weapon=c[5];continue;case "7":i.dir=c[3];continue;case "8":i.clan=c[7];continue;case "9":i.hat=c[9];continue;case "10":i.x=c[1];continue}break}
                    }
                }
            }
        });
        let m = !1;
        function f(n) {
            const m={zczbR:function(n,e){return t.ezuII(n,e)},NOABA:function(n,e){return t.ezuII(n,e)},IYAVS:function(n,e){return t.ezuII(n,e)},mgVmQ:function(n,e){return t.ezuII(n,e)},sqmjl:t.ybogH,jRKzw:t.QiFyY,ExcBw:function(n,e){return t.clwjy(n,e)},XaVyA:function(n,e){return t.ezuII(n,e)},kkUFd:t.gcYtg,GsSvK:t.GaGIy,yDHuw:function(n,e){return t.svYzH(n,e)},nKeSk:function(n,e){return t.EVCLm(n,e)},LAHPb:function(n,e){return t.ncItT(n,e)},Biewv:function(n,e){return t.ncItT(n,e)},ROlAv:function(n,e){return t.VNSrb(n,e)},FwWAU:function(n,e){return t.VNSrb(n,e)},qaqRi:function(n,e){return t.MAVTU(n,e)},nKQzF:t.IyuWV,uNlcw:function(n,e){return t.ncItT(n,e)},OFldT:function(n,e){return t.ncItT(n,e)},fgvCd:t.bDyCp,CqgRB:t.FMOuR,WlidQ:t.RizcQ,EQGjh:function(n,e){return t.fTKZF(n,e)},kLiaQ:function(n,e){return t.gwYZy(n,e)},dmDKL:t.fBuUG,UzyLm:t.NOwGs,wHNRm:t.pWJnf,ZQBKU:function(n,e){return t.qsrgl(n,e)},obceA:function(n,e){return t.aIUJc(n,e)},oHXYL:function(n,e){return t.ezuII(n,e)},yVZha:t.kFbse,ALlFD:t.dYDyO,KHbiG:t.GwqSk,iIvSu:t.YdWwb,PVLwj:function(n,e){return t.ezuII(n,e)},kaukM:function(n,e){return t.FHLcB(n,e)},yXmjl:function(n,e){return t.FHLcB(n,e)},UXhyl:function(n,e){return t.gwYZy(n,e)},mxXlm:t.VvvVM,eJfKm:t.IHKHl,obYaP:function(n,e){return t.LwYVq(n,e)},UKAGg:function(n,e){return t.LwYVq(n,e)},FLiDq:function(n,e){return t.AjzrI(n,e)},sszpW:function(n,e){return t.YzzGO(n,e)},vrFWp:function(n,e){return t.aKxtD(n,e)},OXMNZ:function(n,e){return t.GKgQF(n,e)},CKusj:function(n,e){return t.tmxal(n,e)},iFddu:function(n,e){return t.aKxtD(n,e)},buLNC:function(n,e){return t.aKxtD(n,e)},kfQql:function(n,e){return t.SUpdY(n,e)},dziyT:function(n,e){return t.YzzGO(n,e)},OffuN:function(n,e){return t.aKxtD(n,e)},LPjLF:function(n,e){return t.GKgQF(n,e)},OKGOY:function(n,e){return t.VvvAb(n,e)},IvIax:function(n,e){return t.SUpdY(n,e)},ddIEu:function(n,e){return t.HGtOD(n,e)},GqwPG:function(n,e){return t.Bgufz(n,e)},ZgKow:function(n,e){return t.VZLTt(n,e)},FRuaQ:function(n,e){return t.SUpdY(n,e)},mfRvu:function(n,e){return t.YzzGO(n,e)},vXXQZ:function(n,e){return t.SUpdY(n,e)},Nmodo:function(n,e){return t.LwYVq(n,e)},dGzYz:t.NGuiD,HzoYl:function(n,e){return t.rYFYB(n,e)},JfjqL:function(n,e){return t.VZLTt(n,e)},kwnrt:t.EWlRI,fUlsc:function(n,e){return t.DydTx(n,e)},cCVak:function(n,e){return t.DydTx(n,e)},EeMOs:function(n,e){return t.DydTx(n,e)},LBtjf:function(n,e){return t.DydTx(n,e)},kNwko:t.CSHBL,OXBiH:function(n,e){return t.AjzrI(n,e)},MXxEX:function(n,e){return t.WKLeJ(n,e)},EaPwb:function(n,e){return t.CXecd(n,e)},SfcWM:function(n,e){return t.sFQBl(n,e)},TeXPl:function(n,e){return t.vbELF(n,e)},obebn:function(n,e){return t.hceRK(n,e)}};
            function f(n, e) {
                return Math.sqrt(t.EVCLm(Math.pow(t.Vmhce(e.y, n[2]), 2), Math.pow(t.ncItT(e.x, n[1]), 2)));
            }
            let y, g, E, B = new d(n);
            B.binaryType = t.nYcOR, window.lastPacket;
            let p = n => {
                !B.closed && m.zczbR(B.readyState, 1) && B.send(msgpack.encode(n));
            };
            a.on(t.LFfoq, n => {
                m.zczbR(n[0], "33") || m.NOABA(n[0], "2") || m.IYAVS(n[0], "8") || m.IYAVS(n[0], "pp") || m.mgVmQ(n[0], "sp") || m.mgVmQ(n[0], m.sqmjl) || m.mgVmQ(n[0], "11") || m.mgVmQ(settings.type, m.jRKzw) && m.ExcBw(p, n);
            }), t.epVcZ(setInterval, () => {
                m.XaVyA(settings.type, m.kkUFd) && (m.ExcBw(p, [ "10", [ m.GsSvK ] ]), m.yDHuw(Math.sqrt(m.nKeSk(Math.pow(m.LAHPb(i.y, h.y), 2), Math.pow(m.Biewv(i.x, h.x), 2))), 700) ? (y ? (m.ExcBw(p, [ "33", [ y ] ]),
                m.ROlAv(p, [ "2", [ y ] ])) : (m.ROlAv(p, [ "33", [ null ] ]), m.FwWAU(p, [ "2", [ null ] ])),
                m.FwWAU(p, [ "c", [ 1, Number.MAX_VALUE ] ])) : (m.qaqRi(p, [ "ch", [ m.nKQzF ] ]),
                m.qaqRi(p, [ "33", [ Math.atan2(m.uNlcw(i.y, h.y), m.uNlcw(i.x, h.x)) ] ]), m.qaqRi(p, [ "2", [ Math.atan2(m.OFldT(i.y, h.y), m.OFldT(i.x, h.x)) ] ]),
                m.qaqRi(p, [ "c", [ 1 ] ])));
            }, 100);
            let h = {};
            B.onmessage = function(n) {
                const t={Mormo:function(n,t){return e.QNarm(n,t)},YQBLX:function(n,t){return e.imhkd(n,t)},UwITp:e.KUIOh,bGeFd:e.bPnzr},d={orNJb:function(n,e){return m.XaVyA(n,e)},vNCUq:m.jRKzw,LDUuJ:m.fgvCd,RGHFF:function(n,e){return m.XaVyA(n,e)},psgZz:m.CqgRB,xUDeS:function(n,e){return m.XaVyA(n,e)},mugha:m.kkUFd,bLXAV:function(n,e){return m.qaqRi(n,e)},gbmYX:m.WlidQ,bDXCa:function(n,e){return m.EQGjh(n,e)},VuoxD:function(n,e){return m.kLiaQ(n,e)},gqKcC:m.dmDKL,RNisc:m.UzyLm,fkZsm:m.wHNRm};
                let a = msgpack.decode(new Uint8Array(n.data)), w = null;
                m.ZQBKU(a.length, 1) ? (w = [ a[0], ...a[1] ], m.obceA(w[1], Array) && (w = w)) : w = a;
                let I = w[0];
                if (w) {
                    if (m.oHXYL(I, m.yVZha)) {
                        const n = m.ALlFD.split("|");
                        let c = 0;
                        for (;;) {
                            switch (n[c++]) {
                              case "0":
                                document.getElementById(m.KHbiG).addEventListener(m.iIvSu, n => {
                                    B.close(), $.notify(t.Mormo(t.YQBLX(t.UwITp, h.id), "!"), {
                                        position: d.gqKcC,
                                        className: d.fkZsm
                                    });
                                });
                                continue;

                              case "1":
                                s++;
                                continue;

                              case "2":
                                $.notify(e.imhkd(s, e.udIcq), {
                                    position: m.dmDKL,
                                    className: m.wHNRm
                                });
                                continue;

                              case "3":
                                m.oHXYL(settings.type, m.jRKzw) || m.PVLwj(settings.type, m.fgvCd) || m.kaukM(settings.type, m.CqgRB) ? (m.kLiaQ(p, [ "sp", [ {
                                    name: m.WlidQ,
                                    moofoll: "1",
                                    skin: Math.floor(m.EQGjh(Math.random(), 10))
                                } ] ]), m.kLiaQ(p, [ "10", [ i.clan ] ])) : m.yXmjl(settings.type, m.kkUFd) && m.UXhyl(p, [ "sp", [ {
                                    name: m.mxXlm,
                                    moofoll: "1",
                                    skin: 9
                                } ] ]);
                                continue;

                              case "4":
                                document.getElementById(m.eJfKm).addEventListener(m.iIvSu, () => {
                                    d.orNJb(settings.type, d.vNCUq) || d.orNJb(settings.type, d.LDUuJ) || d.RGHFF(settings.type, d.psgZz) || d.xUDeS(settings.type, d.mugha) ? (d.bLXAV(p, [ "sp", [ {
                                        name: d.gbmYX,
                                        moofoll: "1",
                                        skin: Math.floor(d.bDXCa(Math.random(), 10))
                                    } ] ]), d.VuoxD(p, [ "10", [ i.clan ] ])) : $.notify(t.bGeFd, {
                                        position: d.gqKcC,
                                        className: d.RNisc
                                    });
                                });
                                continue;

                              case "5":
                                m.UXhyl(p, [ "10", [ i.clan ] ]);
                                continue;
                            }
                            break;
                        }
                    }
                    if (m.obYaP(I, "1") && m.UKAGg(h.id, null) && (l[h.id] ? (l.delete(h.id), l.push(h.id),
                    console.log(l)) : (h.id = w[1], l.push(h.id), console.log(l))), m.UKAGg(I, "33")) {
                        m.UXhyl(p, [ "10", [ i.clan ] ]), m.FLiDq(settings.type, m.jRKzw) ? (m.sszpW(p, [ "33", [ Math.atan2(m.vrFWp(m.OXMNZ(m.vrFWp(i.y, h.y), o), m.CKusj(u, 2)), m.iFddu(m.OXMNZ(m.buLNC(i.x, h.x), c), m.kfQql(r, 2))) ] ]),
                        m.dziyT(p, [ "2", [ Math.atan2(m.OffuN(m.LPjLF(m.OKGOY(i.y, h.y), o), m.IvIax(u, 2)), m.ddIEu(m.GqwPG(m.ZgKow(i.x, h.x), c), m.FRuaQ(r, 2))) ] ])) : m.FLiDq(settings.type, m.fgvCd) && (m.mfRvu(p, [ "33", [ Math.atan2(m.ZgKow(i.y, h.y), m.ZgKow(i.x, h.x)) ] ]),
                        m.mfRvu(p, [ "2", [ Math.atan2(m.ZgKow(i.y, h.y), m.ZgKow(i.x, h.x)) ] ])), B.players = {},
                        g = [];
                        for (let n = 0; m.yDHuw(n, m.vXXQZ(w[1].length, 13)); n++) {
                            let e = w[1].slice(m.EQGjh(13, n), m.GqwPG(m.EQGjh(13, n), 13));
                            if (m.Nmodo(e[0], h.id)) {
                                const n = m.dGzYz.split("|");
                                let t = 0;
                                for(;;){switch(n[t++]){case "0":h.hat=e[9];continue;case "1":h.isLeader=e[8];continue;case "2":h.clan=e[7];continue;case "3":h.y=e[2];continue;case "4":h.isSkull=e[11];continue;case "5":h.dir=e[3];continue;case "6":h.accessory=e[10];continue;case "7":h.weapon=e[5];continue;case "8":h.object=e[4];continue;case "9":h.x=e[1];continue}break}
                            } else (m.HzoYl(e[7], h.clan) || m.FLiDq(e[7], null)) && g.push(e);
                        }
                    }
                    if (g && (E = g.sort((n, e) => f(n, h) - f(e, h))[0]) && (y = Math.atan2(m.JfjqL(E[2], h.y), m.JfjqL(E[1], h.x)),
                    m.FLiDq(settings.type, m.CqgRB))) {
                        const n = m.kwnrt.split("|");
                        let e = 0;
                        for (;;) {
                            switch(n[e++]){case "0":m.fUlsc(p,["2",[y]]);continue;case "1":m.cCVak(p,["c",[1,Number.MAX_VALUE]]);continue;case "2":m.EeMOs(p,["c",[0,Number.MAX_VALUE]]);continue;case "3":m.LBtjf(p,["33",[y]]);continue;case "4":m.LBtjf(p,["ch",[m.kNwko]]);continue}
                            break;
                        }
                    }
                    !E && (y = h.dir), m.OXBiH(I, "11") && m.MXxEX(p, [ "sp", [ {
                        name: m.WlidQ,
                        moofoll: "1",
                        skin: Math.floor(m.EQGjh(Math.random(), 10))
                    } ] ]), m.EaPwb(I, "h") && m.SfcWM(w[1], h.id) && m.TeXPl(w[2], 100) && m.ZQBKU(w[2], 0) && (m.MXxEX(p, [ "5", [ 0, null ] ]),
                    m.MXxEX(p, [ "c", [ 1 ] ]), m.MXxEX(p, [ "c", [ 0 ] ]), m.obebn(p, [ "5", [ h.weapon, !0 ] ]));
                }
            };
        }
        document.getElementById(t.OEEtp).addEventListener(t.YdWwb, n => {
            const c={fSaPq:function(n,t,c){return e.jUFZZ(n,t,c)},RSDwQ:function(n,t){return e.imhkd(n,t)},pxnQF:e.JJCBi,anMTH:function(n,t,c){return e.jUFZZ(n,t,c)}},o=function(n,e){return t.GpdvP(n,e)};
            grecaptcha.execute(t.hbGzS, {
                action: t.byxZZ
            }).then(function(n) {
                c.fSaPq(o, f, c.RSDwQ(c.RSDwQ(window.websocketURL.split("&")[0], c.pxnQF), c.anMTH(o, encodeURIComponent, n)));
            });
        }), document.addEventListener(t.ABiDB, n => {
            const c={eIVJy:function(n,t){return e.imhkd(n,t)},uTuBw:e.uDdXL,FqXMx:e.FWmrV},o={BuWFV:t.woREH,rJxGx:t.LirVw,QgRKh:t.OFzoM,AUDXD:t.mWLDh,VfLhr:t.LOexw,lCnKA:t.yOpRc};
            if (t.ezuII(n.key, t.gfAHR)) {
                if (!m) {
                    var r = document.createElement(t.PEPRE);
                    r.type = t.LmMHo, document.body.appendChild(r), r.src = t.GEGgL, m = !0, document.getElementsByClassName(t.rcucu).forEach(n => {
                        n.style[o.BuWFV] = o.rJxGx;
                    }), document.getElementsByClassName(t.rfmQl).forEach(n => {
                        n.style[t.woREH] = t.OiKFu;
                    }), document.getElementsByClassName(t.mdMqM).forEach(n => {
                        n.style[o.BuWFV] = o.QgRKh, n.style[o.AUDXD] = o.VfLhr;
                    });
                    var u = 0;
                    function i(n, e = u) {
                        document.getElementsByClassName(n)[0].style[o.lCnKA] = c.eIVJy(c.eIVJy(c.uTuBw, e), c.FqXMx);
                    }
                    t.bYNOz(setInterval, function() {
                        t.eoTqb(i, t.QuEMO), u++;
                    }, 100);
                }
                t.ezuII(document.getElementById(t.nVvWn).style.display, t.NlkUv) ? document.getElementById(t.nVvWn).style.display = t.aEMDx : document.getElementById(t.nVvWn).style.display = t.NlkUv;
            }
        });
    }
};