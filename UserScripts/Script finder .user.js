// ==UserScript==
// @name         Script finder
// @namespace    http://tampermonkey.net/
// @version      1
// @description  press ctrl+shift+q to find scripts made for ther current site
// @author       You
// @match        *://*/*
// @icon         https://cdn.discordapp.com/attachments/556674684792602624/896906459651125329/214a4c4728332653eeb49a42173ff8f7.png
// @grant        none
// ==/UserScript==
const globalRoot = (typeof exports == "undefined" ? !this.Device ? (typeof window == "undefined" ? this : (globalThis || self || window || top)) : exports : this);
(async function() {
    'use strict';
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    function ByteArray(str) {
        var bytes = []; // char codes
        var bytesv2 = []; // char codes

        for (var i = 0; i < str.length; ++i) {
            var code = str.charCodeAt(i);

            bytes = bytes.concat([code]);

            bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
        }
        const byteSize = str => new Blob([str]).size;
        var size = byteSize(str)
        var unit = bytesToSize(size)
        try{Object.assign(this, { bytes, bytesv2, size, unit })}catch(err){}
        return { bytes, bytesv2, size, unit }
    }
    async function loadScript(src) {
        await new Promise(async (a, b) => {
            if ((typeof $ == "undefined") || (typeof $.get == "undefined")) {
                await new Promise((a, b) => {
                    loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () {
                        eval(arguments[0])
                        a()
                    })
                }); return loadScript(...arguments)
            }
            $.get(src, function (e) {
                a(e)
                res = e
            })
                .done(function (e) { res = e })
                .fail(function (e) {
                console.log("error")
                b(e)
                res = e
            })
                .always(function (e) { res = e })
        })
        return res
    }
    async function get(src) {
        await new Promise((a, b) => {
            $.get(src, function (e) {
                a(e)
                res = e
            })
                .done(function (e) { res = e })
                .fail(function (e) {
                b(e)
                res = e
            })
                .always(function (e) { res = e })
        })
        return res
    }
    /**
 * @description Search greasyfork with this script
 * @param {string} q Search query
 * @param {number} p page index
 * @param {{}[]} r ignore this arg
 * @returns
 */
    async function getSrcs(q = '', p = 1, cb, r = []) {
        if (p < 1) { throw "page number cant be less than 1" }
        r.length ? console.log('Page:' + p, '\nScript found:' + r.length, "Units:", ByteArray(r.map(JSON.stringify).join(',')).unit) : console.log("Search:" + q, '\nPage:' + p);
        const loader = new Loader()
        var srcs = await loader.loadScript("https://greasyfork.org/en/scripts.json?q=" + q + "&page=" + p)
        if (srcs.length) {
            if (typeof cb == typeof function e() { } || typeof cb == typeof async function name() { }) { cb(srcs) }
            return await getSrcs(q, p + 1, cb, [...r, ...srcs])
        } else return (console.log('Fnished:', r.length, 'Scripts found', "Units:", ByteArray(r.map(JSON.stringify).join(',')).unit), r)
    }
    function Loader() {
        var res;
        async function loadScript(src) {
            await new Promise(async (a, b) => {
                $.get(src, function (e) {
                    a(e); res = e
                })
                    .done(function (e) {
                    res = e
                })
                    .fail(function (e) {
                    console.log("error"); b(e); res = e
                })
                    .always(function (e) {
                    res = e
                });
            }); return res
        }
        async function get(src) {
            await new Promise((a, b) => {
                $.get(src, function (e) {
                    a(e); res = e
                })
                    .done(function (e) {
                    res = e
                })
                    .fail(function (e) {
                    b(e); res = e
                })
                    .always(function (e) {
                    res = e
                });
            }); return res
        }
        function loadScriptAsync(src, cb) { if (typeof cb != typeof function () { }) { throw "Callback must be defined to run async" }; var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function () { if (this.readyState == 4 && this.status == 200) { cb.apply(xhttp.responseText, [xhttp.responseText]) } }; xhttp.open("GET", src, true); xhttp.send() }
        Object.assign(this, { loadScript, loadScriptAsync, get })
        return { loadScript, loadScriptAsync, get }
    }
    ; !(function (base) { if ((typeof $ == "undefined") || (typeof $.get == "undefined")) { Loader.apply(base); base.loadScriptAsync("https://code.jquery.com/jquery-3.6.0.min.js", function () { eval(arguments[0]); }); } })(globalRoot);
    onkeydown = async function (ev) {
        var is = ev.key.match(/(q)|Q/g) && ev.ctrlKey && ev.shiftKey;
        if(!is){return}
        var w=open('','Mywin',"width:100");
    (function () {
        var css = [
            "  #twitterFollow, ",
            "  #youtubeFollow, ",
            "  #downloadButtonContainer, ",
            "  #followText, ",
            "  #promoImg {",
            "    display: none;",
            "  }",
            "",
            "  #featuredYoutube > a.ytLink, ",
            "  a {",
            "    color: #FFFF00 !important;",
            "    font-size: 20px;",
            "    margin-top: 0px;",
            "    transition: 0.5s;",
            "  }",
            "  a:hover {",
            "    color: #51FF00 !important;",
            "  }",
            "",
            "  #featuredYoutube {",
            "  margin-top: 30px;",
            "  }",
            "",
            "  #linksContainer2, ",
            "  .partyWrap {",
            "    background: rgba(0,0,0,0.6);",
            "    border: 3px solid rgba(0,0,0,0.9);",
            "    border-radius: 10px;",
            "    padding: 10px;",
            "    font-size: 20px;",
            "    position: absolute;",
            "    color: #fff;",
            "  }",
            "",
            "  .partyWrap {",
            "    min-height: 80px;",
            "    min-width: 160px;",
            "    top: 10px;",
            "    right: 10px;",
            "  }",
            "",
            "  #followText {",
            "    min-height: 200px;",
            "    bottom: 10px;",
            "    left: 10px;",
            "  }",
            "",
            "  #linksContainer2 {",
            "    bottom: 10px;",
            "    right: 10px;",
            "    color: transparent;",
            "  }",
            "",
            "  .menuCard {",
            "    background: rgba(0,0,0,0.6);",
            "    border-radius: 10px;",
            "    border: 10px solid rgba(0,0,0,0.9);",
            "    box-shadow: none;",
            "    overflow:auto;",
            "    height:180px;",
            "  }",
            "",
            "  ::-webkit-scrollbar {",
            "    width: 10px;",
            "    border-right: 2px solid #ec0e0ed6;",
            "  }",
            "",
            "  ::-webkit-scrollbar-thumb {",
            "    border: 2px solid #ffeb3b;",
            "  }",
            "",
            "  ::-webkit-scrollbar-thumb:hover {",
            "    background: #ec0e0ed6;",
            "  }",
            "",
            "  ::-webkit-scrollbar-thumb:active {",
            "    background: black;",
            "    border: 2px solid #000000;",
            "  }",
            "",
            "  .menuHeader {",
            "    font-size: 24px;",
            "    color: #eeeeee;",
            "    margin-bottom: 3px;",
            "    border-bottom: 3px solid #eee;",
            "  }",
            "",
            "  .menuHeader:first-child {",
            "    margin-bottom: 30px;",
            "  }",
            "",
            "  .menuText {",
            "    font-size: 18px;",
            "    color: #ccc;",
            "    margin-bottom: 10px;",
            "  }",
            "",
            "  .ytLink {",
            "    color: #FF8C00;",
            "    font-size: 24px;",
            "    text-decoration: none;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  .menuButton {",
            "    color: #fff;",
            "    background-color: transparent;",
            "    border: 5px solid #ffe600;",
            "    position: relative;",
            "    display: inline-flex;",
            "    padding: 0px 70px;",
            "    font-family: fantasy;",
            "    transition: color .5s;",
            "    overflow: hidden;",
            "    width: 100%;",
            "    justify-content: center;",
            "  }",
            "",
            "  .menuButton:hover {",
            "    font-family: monospace;",
            "    color: #FFFFFF !important;",
            "    border: 5px solid #ff0000;",
            "    cursor: pointer;",
            "    background-color: transparent;",
            "  }",
            "",
            "  .menuButton:before {",
            "    content: \'\';",
            "    position: absolute;",
            "    top: 0;",
            "    left: 0;",
            "    width: 130%; ",
            "    height: 10000%;",
            "    background: #2dff00;",
            "    border-right: 20px solid #FF0000;",
            "    z-index: -1;",
            "    transform-origin:0 0 ;",
            "    transform:translateX(-112%) skewX(45deg);",
            "    transition: transform .5s;",
            "  }",
            "",
            "  .menuButton:hover:before {",
            "    color: #FFFFFF !important;",
            "    transform: translateX(-20%) skewX(45deg);",
            "  }",
            "",
            "  .menuCard span {",
            "    margin: 10px;",
            "  }",
            "",
            "  #promoHolderImg > img {",
            "    width: 300px;",
            "    height: 94px;",
            "  }",
            "",
            "  #guideCard {",
            "    max-height: 282px;",
            "  }",
            "",
            "  .skinColorItem {",
            "    transition: 1s;",
            "    width: 23px;",
            "    height: 23px;",
            "    border: 3px solid #000;",
            "  }",
            "",
            "  select {",
            "    background: #000000;",
            "    border-radius: 5px;",
            "    border: 3px solid #006EC4;",
            "    margin-bottom: 10px;",
            "    color: #fff;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  select:hover {",
            "    background: #ff8007;",
            "    border: 3px solid #B20E0E;",
            "  }",
            "",
            "  #pre-content-container {",
            "    display: none!important;",
            "  }",
            "",
            "  .actionBarItem {",
            "    background-color: rgba(0,0,0,0.6) !important;",
            "    border: 3px solid rgba(255,235,59,1);",
            "    border-radius: 15px !important;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  .actionBarItem:hover {",
            "    background-color: rgba(0,0,0,0.5) !important;",
            "    border: 3px solid rgba(255,136,0,1);",
            "    border-radius: 50px !important;",
            "  }",
            "",
            "  .uiElement {",
            "    background-color: rgba(0,0,0,0.6) !important;",
            "    border: 3px solid rgba(234,0,255,1);",
            "    border-radius: 50px !important;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  .uiElement:hover {",
            "    background-color: rgba(0,0,0,0.5) !important;",
            "    border: 3px solid rgba(0,95,255,1);",
            "    border-radius: 0px !important;",
            "  }",
            "",
            "  .resourceDisplay {",
            "    background-color: rgba(0,0,0,0.6) !important;",
            "    border: 3px solid rgba(255,255,0,0.9);",
            "    border-radius: 50px !important;",
            "    color: #A200FF;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
            "    background-color: rgba(0,0,0,0.6) !important;",
            "    border: 3px solid rgba(0,0,0,0.9);",
            "    border-radius: 10px !important;",
            "    color: #FF0000;",
            "  }",
            "",
            "  #itemInfoHolder { ",
            "    -webkit-text-stroke: transparent;",
            "  }",
            "",
            "  .material-icons { ",
            "    color: #000000;",
            "    font-size: 31px;",
            "    -webkit-text-stroke: 0.3px #fff;",
            "  }",
            "",
            "  #altServer > a > i {",
            "    font-size: 30px !important;",
            "    -webkit-text-stroke: transparent !important;",
            "  }",
            "",
            "  #ageBarBody {",
            "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');",
            "    border: 1px solid #fff",
            "  }",
            "",
            "  #ageBar {",
            "    background-color: rgba(0,0,0,0.6) !important;",
            "    border: 1px solid rgba(0,0,0,0.9);",
            "    height: 5px;",
            "    padding-bottom: 10px;",
            "  }",
            "",
            "  .actionBarItem {",
            "    width: 65px;",
            "    height: 65px;",
            "    background-position: center; ",
            "    background-size: 55px 55px;",
            "  }",
            "",
            "  #aBox {",
            "    color: #FF8C00!important;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  #chatBox::placeholder {",
            "    color: #17FF00!important;",
            "  }",
            "",
            "  #chatBox:hover {",
            "    background: rgba(0,0,0,0.5)!important;",
            "  }",
            "",
            "  #chatBox:hover::placeholder {",
            "    color: #00FFFF!important;",
            "  }",
            "",
            "  .ytLink:hover {",
            "    color: #cc0000;",
            "  }",
            "",
            "  #nameInput {",
            "    background: #fff;",
            "    border: 5px solid #00FF9E;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  #nameInput::placeholder {",
            "    color: #00FF9E;",
            "    transition: 0.5s;",
            "  }",
            "",
            "  #nameInput:hover {",
            "    background: #4ACA1A;",
            "    color: #fff;",
            "  }",
            "",
            "  #nameInput:hover::placeholder {",
            "    background: #4ACA1A;",
            "    color: #fff;",
            "  }",
            "",
            "  #linksContainer2 {",
            "    max-height: 500px;",
            "    width: 250px;",
            "  }",
            "",
            "  #linksContainer2 > * {",
            "    display:table-cell;",
            "    vertical-align:middle;",
            "    text-align: center;",
            "    width:700px;",
            "  }",
            "  ",
            "  .storeTab, ",
            "  #storeHolder, ",
            "  #allianceHolder, ",
            "  #allianceInput, ",
            "  .allianceButtonM {",
            "    background: rgba(0,0,0,0.6);",
            "    border: 3px solid rgba(0,0,0,0.9);",
            "  }",
            "",
            "  .storeItem, ",
            "  .storeTab, ",
            "  .allianceButtonM, ",
            "  #allianceInput::placeholder, ",
            "  .allianceItem {",
            "    color: #FF8C00 !important;",
            "  }",
            "",
            "  .storeItem, ",
            "  .storeTab, ",
            "  .allianceButtonM, ",
            "  #allianceInput::placeholder, ",
            "  .allianceItem, ",
            "  .joinAlBtn {",
            "    color: #FFF700 !important;",
            "  }",
            "",
            "  .storeItem:hover, ",
            "  .storeTab:hover, ",
            "  .allianceButtonM:hover,",
            "  .allianceItem:hover, ",
            "  .joinAlBtn:hover {",
            "    color: #F1F41D !important;",
            "  }",
            "",
            "  #allianceInput, ",
            "    color: #FF8C00;",
            "  }",
            "  ",
            "  #allianceInput:hover {",
            "    background: rgba(0,0,0,0.5);",
            "    color: #fc9f9f;",
            "  }",
            "",
            "  #allianceInput:hover::placeholder{",
            "    color: #fc9f9f;",
            "  }",
            "",
            "  #linksContainer2 > *:first-child {",
            "    border-bottom: 3px solid #8B00FF;",
            "  }",
            "",
            "  #moddedMenu {",
            "    position: absolute;",
            "    top: 30.25%;",
            "    left: 0px;",
            "    width: 3%;",
            "    height: 45.0%;",
            "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);",
            "    border: 3px solid rgba(100,0,255,0.9);",
            "    border-top-right-radius: 30px;",
            "    border-bottom-right-radius: 0px;",
            "    transition: 1s;",
            "    z-index: 999;",
            "  }",
            "",
            "  #moddedMenu:hover {",
            "    width: 22%;",
            "  }",
            "",
            "  .titleMM {",
            "    color: #A20000;",
            "    border-bottom: 3px solid #0030ff;",
            "    font-size: 32px;",
            "    transform: rotate(90deg);",
            "    white-space: nowrap;",
            "    margin-top: 250%;",
            "    transition: 1s;",
            "  }",
            "",
            "  #moddedMenu:hover > .titleMM {",
            "    transform: rotate(0deg) translate(0,-1580%)",
            "  }",
            "",
            "",
            "  .text {",
            "    bottom: 76%;",
            "    position: absolute;",
            "    color: #eee;",
            "    font-size: 20px;",
            "    left: 0%;",
            "    display: none;",
            "    transition: 1s;",
            "  }",
            "",
            "  .text > b { ",
            "    font-size: 20px;",
            "    color: #ff6500;",
            "  }",
            "",
            "  b:hover { ",
            "    color: #ff0000;",
            "  }",
            "",
            "  .one > .text {",
            "    top: 5.5%;",
            "  }",
            "",
            "  .two > .text {",
            "    top: 10.7%;",
            "  }",
            "",
            "  .three > .text {",
            "    top: 37.5%;",
            "  }",
            "",
            "  .four > .text {",
            "    top: 47.5%;",
            "  }",
            "",
            "  .five > .text {",
            "    top: 57.5%;",
            "  }",
            "",
            "  .six > .text {",
            "    top: 67.5%;",
            "  }",
            "",
            "  .seven > .text {",
            "    top: 77.5%;",
            "  }",
            "",
            "  .eight > .text {",
            "    top: 87.5%;",
            "  }",
            "",
            "",
            "",
            "  #moddedMenu:hover .switch {",
            "    opacity: 1;",
            "  }",
            "",
            "  #moddedMenu:hover .text {",
            "    display: block;",
            "  }",
            "",
            "",
            "  .slider {",
            "    position: absolute;",
            "    cursor: pointer;",
            "    background-color: #888;",
            "    -webkit-transition: .4s;",
            "    transition: .4s;",
            "  }",
            "",
            "  .slider:before {",
            "    position: absolute;",
            "    background-color: orange;",
            "    -webkit-transition: .4s;",
            "    transition: .4s;",
            "  }",
            "",
            "  input:checked + .slider {",
            "    background-color: #FF8C00;",
            "  }",
            "  ",
            "  input:focus + .slider {",
            "    box-shadow: 0 0 1px #FF8C00;",
            "  }",
            "",
            "  input:checked + .slider:before {",
            "    -webkit-transform: translateX(26px);",
            "    -ms-transform: translateX(26px);",
            "    transform: translateX(10px);",
            "  }",
            "",
            "  .slider.round {",
            "    border-radius: 34px;",
            "  }",
            "",
            "  .slider.round:before {",
            "    border-radius: 50%;",
            "  }",
            ...(`\nbody {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            background-color: rgb(54, 57, 63);
            overflow-x: hidden;
              margin: 0;
            }
            img{
            color:white;
            border: 2px solid red;
            border-radius: 8px;
            border-style: solid;
            border-width: medium;
            }
            button {
            border: 2px solid red;
            border-radius: 8px;
            border-style: solid;
            border-width: medium;
            }
            input,span{
            border-width:0px;
            border:none;
            color:white;
            background: rgba(0, 0, 0, 0)
            }
            body::-webkit-scrollbar {
            display: none;
            }
            .channelName{
            color:blue;
            }
            .Status{
            color:blue
            }
.flex-container {
  display: flex;
  flex-direction: column;
  man-height: 100vh;
}

header {
  background-color: #3F51B5;
  color: #fff;
}

section.content {
  flex: 1;
}

footer {
  background-color: #FFC107;
  color: #333;
}`.split('\n'))
        ].join("\n");
        if (typeof GM_addStyle != "undefined") {
            GM_addStyle(css);
        } else if (typeof PRO_addStyle != "undefined") {
            PRO_addStyle(css);
        } else if (typeof addStyle != "undefined") {
            addStyle(css);
        } else {
            var node = w.document.createElement("style");
            node.type = "text/css";
            node.appendChild(w.document.createTextNode(css));
            var heads = w.document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node);
            } else {
                w.document.documentElement.appendChild(node);
            }
        }
    })();
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', filename);
        element.setAttribute('target', '_blank');
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
        await getSrcs(document.domain,1,function(scripts){
            Object.assign(w.window,{scripts,download})
            w.console.log("loaded")
            w.eval(`scripts.forEach(file=>{
    var section =document.createElement('section');section.className="content"
    var header=document.createElement("header");
    var footer=document.createElement("footer")
    var div=document.createElement("div");div.className="flex-container"
    var h1=document.createElement("h1");h1.innerText=file.name
    var h4=document.createElement("h4");h4.innerHTML='By:'+file.users.map(user=>{var a=document.createElement("a");a.href=user.url,a.innerText=user.name;return a.outerHTML}).join(',');
    var desc=document.createElement('span');desc.innerText='\\n'+file.description+'\\nV:'+file.verion
    var button=document.createElement('input');button.type='button';button.value='Download';
    var button2=document.createElement('input');button2.type='button';button2.value='Install';
    button.onclick=function(){download(code_url)}
    button2.onclick=function(){open(file.code_url)}
    var br=document.createElement('br')
    header.append(h1);
    section.append(desc);section.append(br);section.append(button);section.append(button2)
    footer.appendChild(h4);
    div.append(header)
    div.append(section)
    div.append(footer);div.append(br);div.append(br);div.append(br)
    document.body.appendChild(div);document.body.appendChild(br);
})`)
        });
        w.focus()
    }
    // Your code here...
})();