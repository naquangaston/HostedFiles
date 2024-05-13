// @name MooMoo styles
// @namespace http://tampermonkey.net/
// @version 2024-04-23
// @description try to take over the world!
// @author You
// @match *://moomoo.io/*
// @match *://dev.moomoo.io/*
// @match *://sploop.io/*
// @match *://sandbox.moomoo.io/*
// @match *://tjmoomoo.ml/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @require https://ksw2-center.glitch.me/users/fzb/antiinvis_1
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @require https://raw.githubusercontent.com/naquangaston/HostedFiles/main/UserScripts/Updater.js
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addValueChangeListener
function isHidden(a) {
    return null === a[a8(151)]
}

function random(a) {
    var e = a8;
    return a[Math[e(519)](Math[e(1292)]() * a[e(1234)])]
}

function dispatchAllMouseEvents(a) {
    var e = a8;
    [e(1055), e(554), e(730), e(812), e(794), e(550), "mouseout", e(430)].forEach((e => {
        let t = new Event(e, {
            bubbles: !0,
            isTrusted: !0
        });
        a["on" + e] && a["on" + e](t), a.dispatchEvent(t)
    }))
}

function dispatchAllInputEvents(a, e) {
    var t = a8;
    [t(1092), t(743), t(652), t(371)].forEach((r => {
        var n = t;
        let o = new Event(r, {
            bubbles: !0,
            isTrusted: !0
        });
        a["on" + r] && a["on" + r](o), r === n(743) && (a[n(996)] = e), a.dispatchEvent(o)
    }))
}

function a() {
    var e = ["horniest", "Fukken", "pckech", "script-list-sort", "BACK", "piss", "hoore", "  .resourceDisplay {", "  .menuButton:hover:before {", "cipa", "jack-off", "ma5terb8", "Toggled Sploop", "Fukkin", "gangbangs", "append", "penis-breath", "180px", "isNaN", "c0ck", "Spawning into game", "constructor", "splooge", "controls", "assholes", "Got fit", "newsboxContent", "  #youtubeFollow, ", "phuq", "Clit", "215FdgTfc", "Hspeed", "small-waiting", "mothafuckers", "basterdz", "    color: #FF0000;", "ffa-mode", "error", "cox", "semen", "rgb(254, 28, 73)", "orgasms", "setAttribute", "white", "4r5e", "masterbation", "guiena", "goatse", "s hit", "nobhead", "onmouseup", "click", "penisfucker", "packie", "createElement", "  #linksContainer2 > * {", "#nickname-value", "dick", "    border: 3px solid rgba(255,235,59,1);", "boooobs", "    height: 23px;", "Shyty", "  ::-webkit-scrollbar {", "mainui-ads", "beastial", "player-container", "knob", "muie", "    border: 3px solid #000;", "cuntlicker", "pissers", "fingerfucker", "feck", "test", "leave-clan-button", "packi", "vulva", "willies", "lesbo", "cocksucking", "forEach", "Ekto", "orgasim;", "mothafuckaz", "v14gra", "  .five > .text {", "fuckingshitmotherfucker", "duche", "focus", "chink", "cunillingus", "moomoo", "    border-radius: 50%;", "153610bKzpur", "nigg3r", "Skanky", "Healspeed ", "    background: rgba(0,0,0,0.6);", "clan_menu_content", "helvete", "Joining newCLan", "rgba(0,0,0,0)", "  #allianceInput, ", "  #promoHolderImg > img {", "f4nny", "pchek", "  .material-icons { ", "numbnuts", "centy2", "Fukker", "dick*", "master-bate", "Fukin", "fanyy", "  #followText {", "b1tch", "https://www.youtube.com/watch?v=", "suka", "pussi", "asholes", "    content: '';", "className", ".menuHeader:nth-child(5)", "bottom", "fatass", "h0ar", "cock", "assholz", "default_list", "hoar", "puuker", "pigfucker", "kondum", "dog-fucker", "faggitt", "    color: #FF8C00;", "hardcoresex", "content", "blowjob", "wichser", "    font-family: monospace;", "orgasim", "getElementsByTagName", "  #storeHolder, ", "qweir", "    transform:translateX(-112%) skewX(45deg);", "region", "cock-head", ".menuText", "massterbait", "inCLan", "afterend", "mouliewop", "  .six > .text {", "asshole", "niiger;", "kunts", "rectum", "tittywank", "undefined", "fux0r", "Using this script may have consequences, including but not limited to account banning. Use at your own risk. Click to hide.", "toLowerCase", '<iframe id="msc" src="https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>', "ejaculatings", "  .allianceButtonM {", "scheiss*", "masterb8", "clits", "cyberfuc", "399320ooBTeu", "Mother Fuker", "ejaculating", "mothafuckas", "cummer", "Alts", "peinus", "Kurac", "Insta speed ", "match", "cuntlicking", "motherfucked", "bum", "paki", "  .actionBarItem {", "Mutha Fukah", "156px", "butthole", "onunload", "79173MaQSKm", "shited", "pr1ck", "gaylord", "Cant find clan", "spawnFunc", "  .storeItem, ", "shitters", "shitings", "schlong", "    background: #ff8007;", "calle", "w00se", "phuking", "server-select", "  #chatBox:hover {", "cyberfuck", "skanks", "text/css", "greasyfork", "    transition: transform .5s;", "bitcher", "penis", "    width: 300px;", "hore", "nob", "merd*", "sel", "    top: 37.5%;", "rgba(212, 32, 32, 1)", "h4x0r", "    background-color: transparent;", "    -ms-transform: translateX(26px);", "felching", "shitty", "  #promoImg {", "twatty", "    display:table-cell;", "  .storeItem:hover, ", "  .allianceItem, ", "map", "length", "bugger", "fistfucker", "    width: 3%;", "clan-menu-clan-name-input", "dickhead", "fistfucks", "ballbag", "Heal speed ", "    top: 10px;", "wank*", "style", "spikes", "pr1c", "shite", "    margin-top: 0px;", "pussys", "  }", "music_frame", "muschi", "  .allianceItem {", "slither", "toggle", "    vertical-align:middle;", "Fuken", "mibun", "2538351IpdOVk", "muff", "insert song here", "asses", "    border: 2px solid #000000;", "#insert", "d4mn", "push", "\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc5\xa1\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xcb\u0153\xc6\u2019\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb2 \xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb5\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xb6\xc3\xb0\xc2\x9d\xe2\u20ac\u201d\xc2\xba \xc3\xa2\xe2\u20ac\u201c\xc2\xb6 \xc3\xb0\xc5\xb8\xc2\x90\xc2\xb3 a name", "frameborder", "    border-right: 20px solid #FF0000;", "pissin", "Leaving Existing clan", "agar", "Motha Fuker", "cunt", "sandbox-mode", "bloody", "skin-message", "pisser", "310408aBfTPE", "cyberfucked", "Motha Fucker", "  input:focus + .slider {", "cums", "Failed", "item", "keydown", "scroll", "centy", "t1tt1e5", "searchParams", "random", "enculer", "cunts", "timeOut", "  .slider.round:before {", "hoor", "#adCard", "mutha", "cntz", "fuckme", "bitch", "    left: 0px;", "dirsa", "  .slider {", "1px solid #ddd", "    width: 65px;", "jizm", "#game-middle-main", "fucks", "t1tties", "masterbations", "lostworld-io_300x250_2", "niggas", "    color: #A200FF;", "    z-index: 999;", "#linksContainer2 .menuLink", "God", "boffing", "New player list", "fannyflaps", "#H_B", "damn", "w0p", "ma5terbate", "  #featuredYoutube > a.ytLink, ", "    border: 3px solid rgba(100,0,255,0.9);", "dilld0s", "#rightCardHolder {display: block!important}", "mothafuckings", "background-color", "fuckheads", "    bottom: 76%;", "jiz", "pillu*", "login", "pissing", "script", "azzhole", "masokist", "accessory$", "  .slider.round {", "    margin-bottom: 3px;", "jizz", "dziwka", "    color: #ff0000;", "Phukker", "    border: 5px solid #ff0000;", "screw", "test4", "kurwa", "  .skinColorItem {", "OwO", "#youtuberOf", "offsetParent", "hells", "sh!+", "n1gr", "boob", "pube", "sharmuta", "Mother Fucker", "shiting", "booooooobs", "h0re", "fingerfuck", "l3i+ch", "mothafucks", "blowjobs", "knobz", "cnut", "cunt*", "dir", "rimming", "shitfuck", "  .storeTab, ", "dike*", "titfuck", "Shitty", "cawk", "schmuck", "fook", "button-type-1 blue-discord-button text-shadowed-3", "dark-blue-button-3-active", "pawn", "fcuking", "stoped", "scroat", "titt", "muthafecker", "ash0le", "CockSucker", "DPS:", "centy3", "dominatrix", "fukwhit", "doosh", "vullva", "slag", "masterbate", "chraa", "paska*", "w/o", "number", "15SUEYyC", "head", "    color: #00FF9E;", "cockmuncher", "motherfuckin", "  .menuButton {", "tw4t", "    color: #cc0000;", "element", "  .allianceButtonM, ", "    margin-bottom: 30px;", "dildo", "n1gga", "testicle", "wang", " Dir:", "    width: 130%; ", "kunilingus", "sexy", "queer", "    white-space: nowrap;", "    font-size: 18px;", "    border-radius: 5px;", "balls", "ahole", "bollock*", "Automatically join the game and turn on antikick for alts", "    background-color: rgba(0,0,0,0.5) !important;", "butt-pirate", "Toggled MooMoo", "    background: #ec0e0ed6;", "css", "fagging", "mothafucking", "wanky", "alts", "  #moddedMenu:hover .text {", "    font-size: 24px;", "block", "Save Fit", "m45terbate", "    opacity: 1;", "    transform: rotate(0deg) translate(0,-1580%)", "dilld0", "  #linksContainer2 {", "cocksuka", "pule", "Timeout waiting for selector", "cawks", "autoplay; encrypted-media", "fukkin", "  #nameInput:hover::placeholder {", "testicle*", "not", "    border: 3px solid rgba(0,95,255,1);", "    top: 77.5%;", "mother-fucker", "\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae\xc3\xb0\xc2\x9d\xc2\x90\xc2\x8f\xc3\xb0\xc2\x9d\xc2\x90\xe2\u20ac\xb9\xc3\xb0\xc2\x9d\xc2\x90\xe2\u201a\xac\xc3\xb0\xc2\x9d\xc2\x90\xcb\u0153\xc3\xb0\xc5\xb8\xc5\xbd\xc2\xae", "bitchers", "ar5e", "cok", "items2", "    border: 2px solid #ffeb3b;", "cock-sucker", "insert", "fistfuck", "rimjaw", "Carpet Muncher", "whore", "sh1ts", "    transform: rotate(90deg);", "selects", "pussies", "src", "now", "Failed to Skin", "kummer", "ficken", "fagot", "  #ageBarBody {", "defH", "#youtubeFollow", "game-left-content-main", "kuk", "faig", "accessory", "twat", "dego", "fistfucking", "fux", "dupa", "g00k", "classList", "  #pre-content-container {", "  .text > b { ", "remove", "niigr;", "shiz", "peeenus", "shaggin", "asswipe", "Fotze", "ass", "  .allianceItem:hover, ", "da-right", "cocksucked", "*dyke", "boobs", "fagots", "select", "#mapDisplay", "skurwysyn", "fistfuckers", "pusse", "lastError", "pizda", "coon", "    -webkit-text-stroke: 0.3px #fff;", "fellate", "name", "  .menuText {", "fooker", "every", "Implement anti-kick functionality from being AFK", "carpet muncher", "Felcher", "fags", "fanny", "play", "1px solid #f5c6cb", "jackoff", "arse", "#consentBlock", "Fukk", "AntiKick:false", "fukwit", "sh1tz", "shift", "orgasum", "  .four > .text {", "    height: 10000%;", "  .two > .text {", "mothafucka", "jism", "appendTo", "faggot", "gangbanged", "  .titleMM {", "jap", "phuked", "pen1s", "fecker", "&autoplay=1", "#guideCard", "getItem", "xrated", "fingerfucked", "faigs", "    min-height: 200px;", "fuckers", "    color: #ff6500;", "mutherfucker", "vagina", "Ekrem*", "getElementById", "fucking", "slut", "buceta", "#twitterFollow", "masterbat*", "blur", "shitter", "desktopInstructions", "create_clan", "fagz", "cocksuck", "  .eight > .text {", "cyberfucking", "qweerz", "    display: none!important;", "m0f0", "indexOf", "phuck", "StreamerMode:", "foreskin", "l3itch", "bastard", "    transform-origin:0 0 ;", "piss*", "boner", "cyalis", "button", "retard", "m0fo", "booobs", "parent", "shithead", "#gameName", "cent", "    margin-bottom: 10px;", "fuk", "assrammer", "fannyfucker", "pecker", "    transform: translateX(-20%) skewX(45deg);", "parentNode", "    padding: 0px 70px;", "fudgepacker", "dild0s", "children", "    background: url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);", "img", "    border-radius: 34px;", "cl1t", "turd", "flipping the bird", "s_h_i_t", "    border: 1px solid #fff", "    background: #fff;", "keyup", "oriface", "  select {", "fuckwit", "boiolas", "63398PWlTmZ", "chatFilter:", "scank", "ageBarBody", "  #allianceInput:hover {", "mouseleave", "    border-bottom: 3px solid #0030ff;", "#change-username", "b17ch", "asswhole", "fucker", "replace", "lust", "pimpis", "    color: #000000;", "buttmuch", "233401ndlDIJ", "schlampe", "allow", "cockhead", "motherfuckka", "includes", "log", "nazis", "kock", "kanker*", "p0rn", "God-damned", "seen", "info2", "  .three > .text {", "dink", "Huevon", "rgba(0, 0, 0, 0.74)", "knobjocky", "muther", "penas", "innerHTML", "Reset Fit", "Mutha Fukkah", "shi+", "packy", "bestial", "98%", "#player-container", "Fukah", "knobend", "cum", "goddamned", "pissed", "Shytty", "list", "Mutha Fukker", "god-dam", "fucka", "ejaculates", "cocksucker", "canclear", "RDJsG8fl0VfkQ", "instaspeed", "status", "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=", "    min-height: 80px;", "shit", "fanculo", "  select:hover {", "Lipshits", "shits", "  .actionBarItem:hover {", "rgba(0, 0, 0, 0)", "placeholder", "starblast", "sharmute", "fag", "anus", "assfucker", "transition", "hoer*", "Done", "fuckings", "  #linksContainer2, ", "skins-categories", "  a:hover {", "kusi*", "auto", "klootzak", "stop", "penuus", "Generate Random Fit", "flex", "gangbang", "overflow", "*fuck*", "zabourah", "floor", "  #aBox {", "  #downloadButtonContainer, ", "kums", "selectedIndex", "porn", "motherfuckers", "    border-radius: 50px !important;", "    cursor: pointer;", ".menuLink", "clan_", "nigger;", "fuck", "adCard", "H_B", "#000000", "shittings", "    height:180px;", "join", "cocks", "fuckin", "onsubmit", "screwing", "motherfucks", "a55", "gaysex", "phuk", "color", "split", "namedItem", "back", "mouseup", "spunk", "  ::-webkit-scrollbar-thumb {", "sluts", "mouseover", "biatch", "    max-height: 500px;", "count", "    background: rgba(0,0,0,0.5);", "html", "#000", "ayir", "  .menuCard {", "hoare", "absolute", "japs", "isplayer", "gook", "fuckwhit", "    font-size: 30px !important;", "titwank", "    border-right: 2px solid #ec0e0ed6;", "motherfucking", "https://www.youtube.com/watch?v=-Mypt378fkc", "    height: 65px;", "hasFocus", "  #moddedMenu {", "does", "Biatch", "narwhale", "titties", "pron", "bitchin", "son-of-a-bitch", "nigg4h", "buttplug", "mamhoon", "ejaculate", "chatFilter:false", "none", "ping", "fuckhead", "labia", "horny", "  .one > .text {", "b!tch", "mofo", "sadist", "fagg1t", "tosser", "twathead", "wank", "key", "hoer", "set", "n1gger", "anal", "3737608YIIxcP", "  #allianceHolder, ", "get", "#server-select", "shitdick", "    display: block;", "tittie5", "cuntlick", "onchange", "surviv", "whoar", "kum", "fart", "    border-bottom: 3px solid #8B00FF;", "    position: absolute;", "pierdol*", "Include a random fit generator button", "insertAdjacentElement", "niggaz", "shag", "?list=", "bi+ch", "fuks", "cocksucks", "fagg0t", "pointer", "*damn", "puta", "  #chatBox:hover::placeholder {", "qweers", "kumming", "  .uiElement:hover {", "styleSheet", "rgb(0,0,0,0)", "dispatchEvent", "mulkku", "center", "s.o.b.", "    border: 1px solid rgba(0,0,0,0.9);", "bastardz", "bassterds", "dlck", "shitfull", "6718zqNWBD", "preteen", "change", "masterbates", "Flikker", "Poonani", "H_B2", "h00r", "#game-bottom-content", "c0k", "twunt", "querySelector", "https://www.youtube.com/embed/", "flange", "charAt", "blow job", "    transition: 1s;", "create-clan-button", "lesbian", "Ass Monkey", "Sploop.io - Fast Alt", "    top: 67.5%;", "skins-middle-main", "Create alts", "ad-spawn", "  #chatBox::placeholder {", "    font-family: fantasy;", "orospu", "display", "paper-io", "shitted", "teets", "    transition: 0.5s;", "cyberfuckers", "red", "basterds", "    color: #FFF700 !important;", "f u c k", "slutz", "spierdalaj", "shagger", "reset-button", "nazi", "v1gra", "    background-color: orange;", "muthafuckker", "nobjocky", "niggah", "cazzo", "#mainMenu", "b00b*", "buttwipe", "This script can:", "    transition: .4s;", "queef*", "#linksContainer1", "  #altServer > a > i {", "height", "beastiality", "bunny fucker", "keys", "god-damned", "    font-size: 31px;", "poontsee", "perse", "cockface", "cocksukka", "Age", "#followText", "    background: #000000;", "HTML", "jisim", "fuker", "homo", "    -webkit-text-stroke: transparent;", " - ", "    background-color: rgba(0,0,0,0.6) !important;", "    height: 45.0%;", "    color: #00FFFF!important;", "    background: #4ACA1A;", "mouseenter", "wetback*", "    width: 22%;", "cumming", "10NLahUO", "fucked", "classname", "fistfucked", "coksucka", "smegma", "15%", "after", "#nameInput", "input", "domain", "masturbate", "getAttribute", "  #nameInput:hover {", "  .partyWrap {", "    border: 5px solid #ffe600;", "301967CoSLgV", "onkeyup", "    min-width: 160px;", "Motha Fukker", "hotsex", "    font-size: 32px;", "  .seven > .text {", "polac", "cokmuncher", "Phuk", "  #allianceInput::placeholder, ", "pisses", "    color: #eee;", "bellend", "d1ck", "    background-size: 55px 55px;", "1434980sPfeKv", "honkey", "skin", "    background-position: center; ", "hell", "sh1t", "    border-bottom: 3px solid #eee;", "    border: 3px solid #006EC4;", "phukking", "autoSpawn", "skankey", "    color: #ccc;", "string", "#game-right-content-main", "once", "kondums", "skankee", "sh!t*", "target", "masterbat3", "#ad-block-left", "    border: 3px solid rgba(255,255,0,0.9);", "va1jina", "    top: 0;", "streamerMode", "Fukkah", "alt", "toArray", "mousedown", "Mother Fukkah", "assh0le", "clan-menu", "clit", "  #itemInfoHolder { ", "viagra", "f u c k e r", "clan", "hui", "butt", "5hit", "bestiality", "bollok", "tits", "    bottom: 10px;", "bitches", "lusting", "mousemove", "    border: 10px solid rgba(0,0,0,0.9);", "    color: #fff;", "sex", "  .uiElement {", "clitoris", "assfukka", "dominatrics", "nameInput", "innerText", "#smallLinks", "mother fucker", "nob jokey", "fellatio", "goddamn", "    border-radius: 0px !important;", "10px", "    color: #fc9f9f;", "Change the game's look", "fitt*", "    background: rgba(0,0,0,0.5)!important;", "span", "wanker", "replaceAll", "server", "peeenusss", "    border: 3px solid rgba(0,0,0,0.9);", "Shity", "futkretzn", "found", "c0cksucker", "mothafucker", "picka", "rautenberg", "jerk-off", "xxx", "injun", "    border-radius: 10px;", "dominatricks", "Lipshitz", "pendto", "#H_B2", "    border-radius: 10px !important;", "Done setting up", "phonesex", "  .menuButton:hover {", "5h1t", "    border: 3px solid rgba(234,0,255,1);", "donkeyribber", "    border-top-right-radius: 30px;", "://www.youtube.com/watch?v=-Mypt378fkc", "dildos", "createTextNode", "@$$", "type", "schaffer", "porno", "arrse", "knulle", "kuksuger", "  .ytLink:hover {", "pissflaps", "45462NAwkFJ", "pricks", "    color: #F1F41D !important;", "    padding: 10px;", "Set called", "doggin", "enema", "slice", "    width: 250px;", "teez", "  #nameInput::placeholder {", "booooobs", "href", "cockmunch", "ballsack", "ejaculation", "cyberfucker", "div", "shagging", ".menuHeader:nth-child(6)", "wop*", "enter Plist id", "arras-io_336x280", "enterGame", "motherfuck", "setup3", "addEventListener", "paky", "cumshot", "sh!t", "testical", "    color: #FF8C00 !important;", "sh1tter", "title", "ass-fucker", "masochist", "appendChild", "shemale", "pussy", "iframe", "alt:", "    border-bottom-right-radius: 0px;", "nigga", "dps", "warn", "cuntz", "vagiina", "cunilingus", "owo", "  .joinAlBtn {", "orgasims", "    background-color: #888;", "breasts", "Mutha Fuker", "tit", "mothafuck", "fingerfucks", "-30px", "cunnilingus", "qahbeh", "    text-decoration: none;", "ageitems", "    right: 10px;", "spac", "masstrbait", "Mother Fukker", "    -webkit-transform: translateX(26px);", "ejakulate", "pimmel", "prick", "  .storeTab:hover, ", "    top: 5.5%;", "    border-radius: 15px !important;", "dogging", "Blow Job", "keypress", "poop", "vittu", "h0r", "selectedOptions", "smut", "nobjokey", "documentElement", "faggs", "testFunction", "skank", "shitting", "-Mypt378fkc", "motherfucker", "  #moddedMenu:hover .switch {", "width", "sploop", "#721c24", "sh1ter", "scrote", "fuk*", "fudge packer", "masterbaiter", "kawk", "knobead", "onclick", "phuks", "mothafucked", "tittiefucker", "then", "fistfuckings", "orgasm", "kraut", "#setupCard", "    height: 94px;", "ejaculated", "shitey", "pornos", "5px", "tittyfuck", "twunter", "dinks", "pr0n", "phukked", "fcuk", "heshe", "freeze", "value", "crap", "backgroundColor", "filter", "nutsack", "Ping:", "    top: 10.7%;", "pr1k"];
    return (a = function() {
        return e
    })()
}

function add_Style(a) {
    var e = a8,
        [t, r, n, o] = [e(1058), "textContent", e(202), e(910)],
        i = {get k() {
                return document
            }
        },
        s = i.k[t](e(1245));
    s[r] = a, i.k[n][o](s)
}

function SetUpSploop() {
    function a(a) {
        return /^[0-9a-zA-Z]$/ [b(1077)](a) && 1 == a.length
    }

    function e(a = 0, e = 0, r = 0) {
        var n = k;
        t(0);
        try {
            !Number[n(1022)](a) && findhref2(id(n(672)), n(412))[n(999)]((e => e[n(274)][n(446)](n(768) + a)))[0][n(1055)]()
        } catch (o) {}
        t(1);
        try {
            !Number[n(1022)](e) && findhref2(id("skins-middle-main"), n(412))[n(999)]((a => a.src[n(446)](n(286) + e)))[0].click()
        } catch (i) {}
        t(2), !Number[n(1022)](r) && findhref2(id(n(672)), n(412))[n(999)]((a => a[n(274)][n(446)](n(549) + r)))[0][n(1055)](), t(0)
    }

    function t(a) {
        var e = k;
        findhref2(id(e(506)), e(412))[a][e(1055)]()
    }
    async function r(a, e = 3e3) {
        return await new Promise(((t, r) => {
            var n = b;
            let o = performance[n(275)]();
            ! function i() {
                var s = n;
                document.querySelector(a) ? t(document[s(661)](a)) : performance[s(275)]() - o >= e ? r(new Error(s(248))) : requestAnimationFrame(i)
            }()
        }))
    }

    function n() {
        var a = k;
        dispatchAllInputEvents(nickname, GM_getValue("nn")), t(0), !Number[a(1022)](GM_getValue(a(768))) && findhref2(id(a(672)), "img")[a(999)]((e => e[a(274)][a(446)](a(768) + GM_getValue(a(768)))))[0][a(1055)](), t(1), !Number[a(1022)](GM_getValue(a(286))) && findhref2(id("skins-middle-main"), "img")[a(999)]((e => e[a(274)][a(446)](a(286) + GM_getValue("accessory"))))[0].click(), t(2), !Number[a(1022)](GM_getValue(a(549))) && findhref2(id(a(672)), a(412))[a(999)]((e => e.src[a(446)](a(549) + GM_getValue("back"))))[0][a(1055)](), t(0)
    }
    async function o() {
        var a, e = k;
        await r(e(469)), (a = id(e(1069)))[e(1245)].display = "none", x[e(485)] ? (!u && (u = (await r(e(1060)))[e(821)]), (await r(e(1060)))[e(821)] = e(790), (await r(e(432))).style[e(678)] = e(589)) : u && ((await r(e(1060)))[e(821)] = u, (await r("#change-username"))[e(1245)].display = e(239)), a[e(1245)].display = e(514)
    }
    var i, s, c, l, u, d, m, p, f, k = a8;
    const g = new bool,
        h = new bool,
        w = ({
            target: a
        }) => {
            var e = b;
            g[e(485)] && (a[e(996)] = filter1(a[e(996)]))
        },
        v = ({
            target: a
        }) => {
            var e = b;
            h[e(485)] && (a[e(996)] = filter2(a[e(996)]))
        };
    if (r("#chat").then((e => {
            var t = b;
            e[t(900)](t(949), (({
                target: e,
                key: t
            }) => {
                a(t) && [w].forEach((a => a({
                    target: e
                })))
            })), e[t(900)](t(420), (e => {
                var r = t;
                const {
                    target: n,
                    key: o,
                    code: i
                } = e;
                a(o) && [w, v][r(1084)]((a => a({
                    target: n
                })))
            })), e[t(900)](t(1287), (({
                target: e,
                key: r
            }) => {
                var n = t;
                a(r) && [w][n(1084)]((a => a({
                    target: e
                })))
            }))
        })), alt) {
        typeof GM_getValue(k(236)) == k(200) && GM_setValue("alts", {});
        for (let a = 1;; a++) {
            if (!GM_getValue("alts")[a]) {
                i = a;
                let e = GM_getValue("alts");
                e[a] = !0, GM_setValue(k(236), e);
                break
            }
        }
        addEventListener("unload", (function() {
            var a = k;
            if (alt) {
                let e = GM_getValue(a(236));
                e[i] = !1, GM_setValue(a(236), e)
            }
        }))
    }
    if (s = null, _loadFit = e, _GM_setValue = GM_setValue, _GM_getValue = GM_getValue, new Promise(((a, e) => e = setInterval((() => findhref2(id(k(672)), k(412))[k(1234)] && (clearInterval(e), a())), 100)))[k(978)]((async a => {
            var t = k;
            await c(1e3), !alt && e(GM_getValue(t(768)), GM_getValue(t(137)), GM_getValue(t(1008)))
        })), id(k(283))[k(1245)][k(516)] = k(1288), id("da-right")[k(406)][k(1245)].overflow = k(1288), _setUp) {
        return
    }
    add_Style("\n#log{\n    background-color: rgba(0,0,0,0);\n    color: lightgreen;\n}\n.empty{\n    content: attr(value);\n}\nselect,select:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: none;\n    color: rgb(255, 136, 0);\n}\nbutton{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(208, 255, 0);\n    color: rgb(94, 255, 0);\n}\nbutton:hover,input:focus{\n    background-color: rgba(0,0,0,0);\n    outline: none;\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(0, 132, 255);\n}\n#skin-message{\n\tborder: 2px solid red;\n    background-color: rgba(0,0,0,0);\n}\n.green{border: 2px solid green;}\n.red{border: 2px solid blue;}\n::-webkit-scrollbar{\n    display:none;\n}\nspan.first{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: 1px solid white;\n}\nspan.middle{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\nspan.last{\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\ndel{\n    text-decoration: line-through;\n    color: red;\n    border-radius: 3px;\n    border: 1px solid coral;\n    background-color: rgba(111,8,8,1);\n}\nins{\n    background-color: rgba(7,92,7,1);\n    color: rgba(56,233,56,1);\n    border-radius: 3px;\n    border: 1px solid lightgreen;\n}\ntextarea{\n    text-overflow: clip;\n\n}");
    const y = new bool,
        x = new bool;
    GM_getValue("sm") && x[k(1256)]();
    let _ = id(k(797));
    game_.autoSpawn = !0, game_[k(1295)] = 5e3, game_[k(958)] = function() {
        return !isHidden(play)
    }, game_[k(1198)] = function() {
        var a = k;
        if (alt) {
            dispatchAllInputEvents(nickname, a(914) + i + a(725) + GM_getValue("nn")), randomFit[a(209)].click();
            const {
                t: e,
                back: t,
                o: r
            } = localStorage;
            s = {
                skin: e,
                back: t,
                accessory: r
            }
        } else {
            const {
                t: a,
                back: t,
                o: r
            } = s;
            e(a, r, t)
        }
        play[a(1055)](), setTimeout(n, 200)
    }, c = a => new Promise((e => setTimeout(e, a))), _game_ = game_, _setUp = !0;
    let M = id(k(283)),
        F = ["#game-bottom-content", k(779)];
    ! function() {
        var a = k,
            [e, t, r, n, o, i] = ["map", "forEach", a(447), a(1234), a(410), a(296)],
            s = {get sn() {
                    return console
                }
            };
        F[e]($)[t]((a => {
            s.sn[r]({
                s: a
            }), a[n] && [...a[0][o]][t]((a => a[i]()))
        }))
    }(), l = id(k(305));
    new element(k(891))[k(1245)]({
        padding: k(828),
        backgroundColor: k(494),
        color: k(560),
        border: k(1306),
        marginBottom: k(828)
    }).append(new element("h2").set(k(821), "MooMoo/Sploop styles")).append(new element("p")[k(604)](k(821), k(702)))[k(1019)](new element("ul")[k(1019)](new element("li")[k(604)](k(821), k(830)))[k(1019)](new element("li")[k(604)](k(821), "Add a built-in YouTube embed video player"))[k(1019)](new element("li")[k(604)](k(821), k(623)))[k(1019)](new element("li")[k(604)](k(821), k(324)))[k(1019)](new element("li")[k(604)](k(821), k(673))).append(new element("li")[k(604)]("innerText", k(227))))[k(345)](l);
    const S = new element("div").style({
        padding: k(828),
        backgroundColor: "#f8d7da",
        color: k(966),
        border: k(330),
        borderRadius: k(987),
        cursor: k(632)
    })[k(604)](k(821), k(1165)).on(k(1055), (function() {
        var a = k;
        this[a(296)](), localStorage[a(453)] = 1
    }))[k(345)](k(658));
    if (1 == localStorage[k(453)] && S[k(209)][k(296)](), id(k(109))[k(296)](), new element("br")[k(345)](M), async function() {
            for (;;) {
                await c(0), await o()
            }
        }(), d = new element(k(392))[k(604)](k(821), k(335)).on(k(1055), (function(a) {
            var e = k;
            y[e(1256)](), a[e(784)][e(821)] = "AntiKick:" + y[e(485)], y[e(485)] ? game_.start() : game_[e(511)]()
        })).appendTo(M), new element("button")[k(604)]("innerText", k(588)).on(k(1055), (function(a) {
            var e = k;
            g[e(1256)](), a[e(784)][e(821)] = e(426) + g[e(485)]
        })).appendTo(M), new element("br")[k(345)](M), new element(k(392))[k(604)]("innerText", "lolFilter:false").on("click", (function(a) {
            var e = k;
            h.toggle(), a[e(784)].innerText = "lolFilter:" + h[e(485)]
        }))[k(345)](M), new element(k(392))[k(604)](k(821), k(384) + x.status).on(k(1055), (function(a) {
            var e = k;
            x[e(1256)](), a[e(784)][e(821)] = e(384) + x[e(485)], GM_setValue("sm", x[e(485)]), o()
        }))[k(345)](M), new element("br")[k(345)](M), new element(k(392))[k(604)](k(821), "SpawnAlt").on("click", (function(a) {
            var e, t, r, n = k;
            GM_setValue(n(768), localStorage[n(768)] || 0), GM_setValue(n(286), localStorage[n(286)] || 0), GM_setValue("back", localStorage[n(549)] || 0), GM_setValue(n(836), id(n(1207)).selectedOptions[0][n(746)](n(1150))), GM_setValue("gm", [id(n(1040)), id("sandbox-mode"), id("event-mode")].map((a => [...a[n(293)]][n(446)](n(180))))[n(382)](!0)), e = id(n(374)), id("leave_clan"), id(n(1238)), e.style[n(678)] == n(589) || (t = id(n(667)), (r = id(n(1238)))[n(641)](new Event(n(1092), {
                bubbles: !0
            })), r[n(641)](new Event(n(743), {
                bubbles: !0
            })), r[n(641)](new Event(n(652), {
                bubbles: !0
            })), r[n(996)] = n(1179), r[n(641)](new Event(n(371), {
                bubbles: !0
            })), t.click(), t.dispatchEvent(new Event(n(1055))), new Promise((a => {
                var e = setInterval((() => {
                    var t = b;
                    "Clans" != _[t(410)][0][t(821)] && (clearInterval(e), a())
                }), 200)
            }))[n(978)]((a => {
                var e = n;
                _GM_setValue(e(802), _[e(410)][0][e(821)])
            }))), open(location[n(886)], "alt" + Date[n(275)]())
        })).appendTo(M), new element(findhref2(id(k(1278)))[0]), randomFit = new element("button").appendTo(M).on(k(1055), (function(a) {
            var e = k,
                [t, r] = [e(1084), e(1055)];
            findhref2(id("skins-categories"), e(412))[t](((a, t) => {
                var n = e;
                a[r](), random(findhref2(id(n(672)), n(412)))[r]()
            }))
        }))[k(604)](k(821), k(513)), new element("br")[k(345)](M), function() {
            var a = k,
                [e, t, r, n, o, i] = ["children", a(624), "style", "on", a(604), a(209)];
            id("skin-message")[e][1][t](a(1155), new element(a(392), {
                "class": "button-type-1 blue-discord-button text-shadowed-3"
            })[r]({
                height: "15%",
                position: a(564),
                top: "15%"
            })[n](a(1055), (function(e) {
                var t = a,
                    [r, n] = [t(1084), t(1055)];
                findhref2(id(t(506)), t(412))[r](((a, e) => {
                    var r = t;
                    a[n](), random(findhref2(id(r(672)), "img"))[n]()
                }))
            }))[o](a(821), a(513))[i])
        }(), function() {
            var a = k,
                [e, t, r, o, i, s] = [a(410), a(624), a(1245), "on", a(604), a(209)];
            id(a(1278))[e][1][t](a(1155), new element(a(392), {
                "class": a(179),
                id: a(691)
            })[r]({
                height: "15%",
                left: "8%",
                position: a(564)
            })[o](a(1055), (function(a) {
                n()
            }))[i](a(821), a(463))[s])
        }(), function() {
            var a = k,
                [e, t, r, n, o, i] = ["children", "insertAdjacentElement", a(1245), "on", a(604), a(209)];
            id(a(1278))[e][1][t](a(1155), new element("button", {
                "class": "button-type-1 blue-discord-button text-shadowed-3"
            })[r]({
                height: a(740),
                left: "50%",
                position: "absolute"
            })[n](a(1055), (function(e) {
                var t = a;
                const {
                    t: r,
                    back: n,
                    o: o
                } = localStorage;
                s = {
                    skin: r,
                    back: n,
                    accessory: o
                }, GM_setValue(t(768), localStorage.skin || 0), GM_setValue(t(286), localStorage.accessory || 0), GM_setValue(t(549), localStorage[t(549)] || 0)
            }))[o](a(821), a(240))[i])
        }(), addEventListener("unload", (function() {
            var a = k;
            GM_getValue(a(768)) && (localStorage[a(768)] = GM_getValue(a(768))), GM_getValue(a(286)) && (localStorage[a(286)] = GM_getValue(a(286))), GM_getValue("back") && (localStorage.accessory = GM_getValue("accessory"))
        })), alt) {
        let a = GM_getValue(k(836));
        m = id(k(1207)), new Promise((a => {
            var e = setInterval((() => {
                var t = b;
                id(t(1036))[t(1245)][t(678)] == t(589) && (clearInterval(e), a())
            }), 200)
        }))[k(978)]((e => {
            var t = k;
            [id("ffa-mode"), id(t(1276)), id("event-mode")][GM_getValue("gm")][t(1055)](), new Promise((a => {
                var e = setInterval((() => {
                    var t = b;
                    id(t(1036)).style.display == t(589) && (clearInterval(e), a())
                }), 200)
            }))[t(978)]((e => {
                var r = t;
                let n = m[r(523)] = [...id("server-select").options][r(1233)]((a => a[r(746)]("region"))).indexOf(a);
                m[r(641)](new Event(r(1055))), m.selectedIndex = n, m[r(641)](new Event("change")), d[r(209)][r(641)](new Event(r(1055))), new Promise((a => {
                    var e = setInterval((() => {
                        var t = b;
                        "flex" != document[t(661)](sploopMenu)[t(1245)][t(678)] && (clearInterval(e), a(id("clan-menu")))
                    }), 200)
                })).then((a => {
                    var e = r;
                    a[e(1245)][e(678)] = e(239);
                    GM_getValue(e(802));
                    let t = [...id(e(1102))[e(410)]][e(999)]((a => a.getElementsByTagName("p")[0][e(821)] == _GM_getValue("clan"))),
                        n = (_GM_getValue(e(529)) && _GM_getValue(e(529))[e(320)], [...id(e(1102))[e(410)]].filter((a => a[e(1146)]("p")[0].innerText == _GM_getValue(e(529))[e(320)])));
                    if (t[e(1234)]) {
                        t[0][e(410)][1][e(410)][0].onmouseup({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    } else if (n.length) {
                        n[0][e(410)][1].children[0][e(1054)]({
                            bubbles: !0,
                            isTrusted: !0
                        })
                    }
                    let o = a => new Promise((e => setTimeout(e, a)));
                    GM_addValueChangeListener(e(529), (function(a, t, r) {
                        var n = e;
                        r[n(1154)] && ("block" != id(n(374)).style[n(678)] ? async function() {
                            var a = e;
                            for (dispatchAllMouseEvents(id(a(1078))); id(a(374))[a(1245)][a(678)] != a(239);) {
                                await o(100)
                            }
                            return !0
                        }()[n(978)]((async a => {
                            for (var e = n;
                                "block" == id("create_clan")[e(1245)][e(678)];) {
                                [...id(e(1102))[e(410)]].filter((a => a.getElementsByTagName("p")[0][e(821)] == r[e(320)]))[0][e(410)][1].children[0].onmouseup({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await r(100)
                            }
                        })) : (async a => {
                            for (var e = n;
                                "block" == id("create_clan")[e(1245)][e(678)];) {
                                [...id(e(1102))[e(410)]].filter((a => a[e(1146)]("p")[0][e(821)] == r[e(320)]))[0][e(410)][1][e(410)][0][e(1054)]({
                                    bubbles: !0,
                                    isTrusted: !0
                                }), await r(100)
                            }
                        })())
                    }))
                }))
            }))
        })), id(k(329))[k(900)](k(1055), (function(a) {
            const {
                nickname: t,
                t: r,
                back: n,
                o: o
            } = localStorage;
            !e && (s = {
                skin: r,
                back: n,
                accessory: o
            })
        })), document[k(907)] = k(670)
    } else {
        id(k(329))[k(900)](k(1055), (function(a) {
            var e = k;
            const {
                nickname: t,
                t: r,
                back: n,
                o: o
            } = localStorage;
            GM_setValue("skin", localStorage.skin || 0), GM_setValue("accessory", localStorage[e(286)] || 0), GM_setValue(e(549), localStorage[e(549)] || 0), GM_setValue("nn", localStorage.nickname)
        })), p = "", _loop = setInterval((() => {
            var a = k;
            _[a(410)][0].innerText != p && (p = _[a(410)][0].innerText, GM_setValue(a(529), {
                inCLan: id(a(374))[a(1245)].display != a(239),
                name: _.children[0][a(821)]
            }))
        })), document[k(907)] = "Sploop.io - Fast Main", f = 50, setTimeout((() => {
            var a = k;
            id("nav-skins")[a(1055)](), setTimeout((() => {
                id(a(691)).click(), setTimeout((() => {
                    setTimeout((() => {
                        setTimeout((() => {
                            var a = b;
                            id(a(691))[a(1055)](), id(a(691)).click(), setTimeout((() => {
                                var e = a;
                                id("nav-game")[e(1055)]()
                            }), f / 100 * 500)
                        }), f / 100 * 500)
                    }), f / 100 * 500)
                }), f / 100 * 500)
            }), f / 100 * 500)
        }), f / 100 * 1e3)
    }
}

function pingcheck() {
    var a, e = a8;
    location[e(886)][e(446)](e(965)) || ((a = document[e(1058)]("h1")).id = "Ping2", topInfoHolder[e(1019)](a), setInterval((() => {
        var t = e;
        a[t(821)] = pingDisplay[t(821)] + (t(189) + window[t(917)] + t(216) + myPlayer[t(169)]), 1 * pingDisplay[t(821)][t(547)](" ")[1][t(547)](" m")[0] > window[t(1109)] && chat(t(1001) + pingDisplay[t(821)][t(547)](" ")[1][t(547)](" m")[0])
    }), 500), window[e(590)] = 100, setInterval((() => {
        var a = e;
        ping = 1 * pingDisplay[a(821)][a(547)](" ")[1][a(547)](" m")[0], ping > window[a(1109)] && chat(a(1001) + pingDisplay[a(821)][a(547)](" ")[1][a(547)](" m")[0])
    }), 500), ab = 1, i2 = 80, setInterval((() => {
        ping > pckech && chat("ping:" + ping)
    }), 500), window[e(1006)] = 150)
}

function cSs() {
    function h(a) {
        var t = br,
            r = e,
            n = a[r(612)];
        return [setElement(new Player(n)[r(554)]), n[r(453)](t(476))[1], n]
    }

    function i(a) {
        var t = e,
            r = a[t(453)]("&"),
            n = (r[0], r[1]);
        r[2];
        return n ? n[t(453)]("=")[1] : window.default_list
    }

    function j(a) {
        return k(setElement(a), i(a))
    }

    function k(a, t) {
        var r = e;
        if (a && t) {
            return r(468) + a + r(684) + t
        }
    }

    function l(a) {
        var t = br,
            r = e;
        a[r(612)] = k(setElement(new Player(a[r(612)])[t(604)]), a[t(274)][r(453)](r(626))[1])
    }

    function m(a) {
        var t, r = e,
            n = "",
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            i = o[r(479)];
        for (t = 0; t < a; t++) {
            n += o[r(439)](Math[r(491)](Math[r(631)]() * i))
        }
        return n
    }
    var f, g, n, o, p, q, r, s, t, u, v, w, x, y, br = a8,
        c = [br(1243), br(577), "styleSheet", br(686), br(365), "1fSDlqT", "8zvYNMf", br(1188), "diedText", br(809), br(886), "    width:700px;", br(940), br(1118), br(361), br(439), br(821), "YTID", "    color: #A20000;", br(574), br(854), br(566), "    margin-top: 250%;", "    background: black;", "    justify-content: center;", br(728), br(429), "    display: inline-flex;", "#downloadButtonContainer", br(1183), br(1041), br(814), "  .menuHeader:first-child {", br(750), br(1269), br(280), br(862), "#cdm-zone-02", br(323), br(751), br(239), br(1110), br(816), br(294), br(650), br(1203), br(1031), br(1002), br(1139), br(1283), br(1011), br(406), "home-header", br(710), br(139), br(399), br(1212), br(741), br(1222), br(1077), br(1265), br(1257), br(899), br(910), br(441), "    color: #51FF00 !important;", br(1199), br(447), br(923), br(407), "\xc3\xa2\xc2\x9d\xc5\u2019\xc3\u017d\xc2\xa3LIMI\xc3\u017d \xc3\u017d\xe2\u20ac\x9dT\xc3\u017d\xc2\xa3D\xc3\xa2\xc2\x9d\xc5\u2019", "  .menuHeader {", "    transition: color .5s;", "site", br(202), "push", br(705), ".menuHeader", br(616), br(608), br(729), br(556), br(411), "offsetParent", "onclick", br(748), br(1101), "    color: #FFFFFF !important;", "default_list", br(666), br(113), "?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ", "  #featuredYoutube {", "countReset", br(487), "    left: 0;", br(765), br(1030), br(664), br(1059), br(579), br(341), br(884), br(762), br(671), br(527), br(392), "domain", br(1221), br(1262), br(1190), br(505), "split", br(656), br(777), br(736), br(540), br(864), br(1095), br(211), "  #nameInput {", "    text-align: center;", br(915), "    top: 30.25%;", br(237), br(1012), br(208), br(1120), br(712), "0 1px 0 rgba(60, 100, 231, 1), 0 2px 0 rgba(60, 100, 231, 1), 0 3px 0 rgba(60, 100, 231, 1), 0 4px 0 rgba(60, 100, 231, 1), 0 5px 0 rgba(57, 149, 171, 1), 0 6px 0 rgba(57, 149, 171, 1), 0 7px 0 rgba(57, 149, 171, 1), 0 8px 0 rgba(57, 149, 171, 1), 0 9px 0 rgba(57, 149, 171, 1)", br(1127), br(483), "roblox", br(1027), br(876), br(679), br(1307), br(1089), br(1234), br(931), br(1268), br(122), "#H_B", br(760), br(1224), br(369), "    background: url('https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg');", "cssText", br(749), br(820), "floor", br(388), br(784), "    margin-bottom: 10px;", br(852), br(496), br(1067), br(405), br(1105), br(282), "Toggle player", br(231), "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ", br(718), "clear", br(537), br(1285), "home-top-sites", br(532), br(1157), br(116), "#mobileDownloadButtonContainer", "    color: #eeeeee;", br(354), br(482), br(228), br(742), br(866), br(732), "  #moddedMenu:hover {", br(443), br(552), br(849), br(148), br(706), "string", "    color: #FFFF00 !important;", br(1126), "    left: 0%;", "    background-color: #FF8C00;", br(773), br(676), "arras", br(318), "    left: 10px;", br(217), br(526), "input", br(380), br(1084), br(462), br(1254), br(1147), "    display: none;", "getElementsByTagName", br(684), "now", br(271), "42630BFWRKS", br(250), "Done setting up", br(905), br(1225), br(604), br(827), br(520), br(1305), br(1163), br(936), br(1249), "lid", br(772), br(956), br(258), "    padding-bottom: 10px;", "  .ytLink {", "    box-shadow: 0 0 1px #FF8C00;", "    font-size: 20px;", br(396), "    color: transparent;", br(756), br(662), "  ::-webkit-scrollbar-thumb:active {", br(1303), br(206), "\niframe.script {\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\n}\nbutton.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nbackground:black;\ncolor:white\n}\ninput.script::placeholder{color:red}\ninput.script{\nborder: 2px solid red;\nborder-radius: 8px;\nborder-style: solid;\nborder-width: medium;\nborder-width:0px;\ncolor:black;\nbackground: rgba(0, 0, 0, 0)\n}", "    width: 23px;", br(643), "    border: 3px solid rgba(255,136,0,1);", br(678), "splix", br(129), br(1072), br(838), br(398), br(589), "  #allianceInput, ", br(703), br(1169), br(134), br(557), "  #moddedMenu:hover > .titleMM {", br(1149), "  input:checked + .slider {", br(533), br(1228), "getElementsByClassName", "    position: absolute;", br(295), br(232), "    background: #2dff00;", br(727), "    z-index: -1;", "value", "    transform: translateX(10px);", br(724), br(882), br(918), br(242), "#diedText", "  a {", "src", br(1058), "    -webkit-text-stroke: transparent !important;", br(576), br(1192), br(419), "  .slider:before {", br(304), "  margin-top: 30px;", br(528), "    border: 5px solid #00FF9E;", br(620), br(223), br(1211), br(476), "background-color", "waiting", "getItem", "    width: 10px;", br(1292), br(1280), br(1289), br(877), br(507), "    top: 47.5%;", br(190), "  .allianceButtonM:hover,", br(296), br(612), br(1107), "#serverBrowser", "    top: 87.5%;", br(210), br(755), br(872), br(786), br(1096), br(682), br(1255), "  #followText, ", br(546), "-Mypt378fkc", br(897), "setItem", br(146), "includes", br(521), "  .joinAlBtn:hover {", br(1216), "    width: 100%;", "    color: #17FF00!important;", "43978kyrOvd", br(222), br(694), br(944), br(963), br(348), br(893), br(1270), br(1213), br(726), br(495), br(1064), "  #allianceInput:hover::placeholder{", br(1264), br(172), br(1066), br(199), br(111), br(1245), br(455), "script-links", br(486), br(1125), br(1251), br(675), br(203), "    margin: 10px;", br(1097), br(245), br(342), br(594), "  #twitterFollow, ", br(789), "insert", br(422), br(536), br(719), br(1062), "  #guideCard {", "    -webkit-transition: .4s;", br(256), br(674), br(238)],
        d = function(a, e) {
            return c[a -= 345]
        },
        e = d;
    ! function(a, e) {
        for (var t = br, r = d;;) {
            try {
                if (172968 === -parseInt(r(690)) + parseInt(r(374)) + -parseInt(r(405)) + parseInt(r(632)) + -parseInt(r(346)) * -parseInt(r(663)) + parseInt(r(347)) * -parseInt(r(385)) + -parseInt(r(549))) {
                    break
                }
                a[t(1267)](a.shift())
            } catch (D) {
                a.push(a[t(338)]())
            }
        }
    }(c), f = e(472)[e(479)], window[e(429)] = br(483), setElement = function(a) {
        var t = e,
            r = String(a)[t(370)](/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
        return !(!r || 11 != r[7][t(479)]) && r[7]
    }, Player = function(a) {
        var t, r, n = e;
        a && (t = m(length), r = k(setElement(a), t), this[n(554)] = r)
    }, n = null == eval(localStorage_[br(355)](br(566))) || eval(localStorage_[e(629)](e(362))), n = 0 == n, window[br(1192)] = function() {
        var a = br;
        localStorage_[e(655)](a(566), !1)
    }; {
        function z(a) {
            var t, r = br,
                n = e,
                o = [a[r(1245)][n(580)] == n(586), a[n(681)][n(580)] == n(381)];
            return !o[0] && !o[1] && (a[n(681)][n(580)] = n(381)), (t = [a[n(681)][n(580)] == n(586), a[n(681)][n(580)] == n(381)])[0] && (a[n(681)][n(580)] = n(381)), t[1] && (a[n(681)][r(678)] = n(586)), a[n(681)][n(580)]
        }

        function A(a) {
            if (a) {
                return null === a[e(424)]
            }
        }

        function B() {
            playlist()
        }

        function C(a, t) {
            var r = e;
            return localStorage_[r(629)](a) ? [!0, localStorage_[r(629)](a)] : [!1, localStorage_[r(655)](a, t)]
        }

        function D() {
            var a, t, r = br,
                n = e;
            insert[n(685)] = n(590), H_B[n(685)] = r(134), H_B2.className = r(134), frame[n(685)] = n(590), frame[n(398)](u), typeof GM_addStyle != n(558) ? GM_addStyle(css) : typeof PRO_addStyle != n(558) ? PRO_addStyle(css) : typeof addStyle != n(558) ? addStyle(css) : ((a = document[n(613)](n(681)))[n(518)] = n(625), a[n(404)](document[n(458)](n(576))), (t = document[r(1146)](n(415)))[n(479)] > 0 ? t[0][n(404)](a) : document[r(956)][r(910)](a))
        }

        function E(a, t, r) {
            var n = e;
            $(a)[n(600)](t, r)
        }

        function F() {
            var a = br,
                t = e,
                r = h(music_frame);
            document[a(365)](t(696))[t(604)] = r[0], B()
        }

        function G(a, t) {
            var r = e;
            try {
                a[r(673)] = t
            } catch (n) {}
        }
        localStorage_[e(655)](e(362), !0), iframe = br(1167), ta = document[e(545)]("*"), o = [], p = (a, t) => a[e(379)]((a => a === t)), q = a => a[e(379)]((e => e === a[0])), ta[e(626)] = function(a, t, r) {
            var n = e,
                o = [],
                i = {},
                s = [];
            return todo = document[n(545)](r || "*"), todo.forEach = [][n(540)], todo[n(540)]((e => {
                var r = n;
                s = [], typeof a == r(526) ? i.i = a == e.id : i.i = !0, typeof t == r(526) ? i.c = t == e[r(685)] : i.c = !0, s = [i.c, i.i], (s = p(s, !0)) && o[r(416)](e)
            })), o
        }, id = function(a) {
            return document[e(345)](a)
        }, dd = function(a) {
            var t = e;
            let r = {};
            return a[t(540)]((function(a) {
                !r[a] && (r[a] = !0)
            })), Object[t(394)](r)
        }, clas = function(a) {
            return document[e(597)](a)
        }, r = !location[e(351)][br(446)](e(459)) && (!location[e(351)][br(446)]("narwhale") && (!location[br(886)][e(657)](e(496)) && (!location[e(351)][e(657)](br(616)) && (!location[e(351)][e(657)](e(473)) && (!!document[e(448)][e(657)](br(1255)) || !document[e(448)][br(446)](br(1212)) && (!!document[e(448)][e(657)](br(1273)) || (!!document[e(448)][e(657)](e(476)) || (!!document[br(744)][e(657)](e(581)) || 0)))))))), idlenght = e(653)[e(479)], CE = function(a, t, r) {
            var n = e,
                o = document[n(613)](a);
            return o[n(456)] = r, t && t[n(479)] && (o.id = t), o
        }, setElement(URL), playlist = function(a, ...t) {
            var r, n = br,
                o = e;
            (r = setElement(a)) && idlenght == r[o(479)] || (r = !1), r || (r = localStorage_[n(355)](o(561))), t && f == t.length || (t = !1), t || (t = localStorage_[o(629)](o(626))), music_frame[n(274)] = k(r, t)
        }, fix = a => {
            var t = e;
            return a = setElement(a), document[t(358)] = a, t(572) + a + t(432)
        }, hh = function(a, t) {
            localStorage_[e(655)](a, t)
        }, jj = function(a) {
            return localStorage_[e(629)](a)
        }, frame = CE(br(913), br(1252)), frame[br(1245)][br(964)] = br(468), inputm = CE(e(538), br(265)), frame[e(604)], inputm[e(457)] = B, inputm[e(380)] = function(a) {
            var e = br,
                t = "https://www.youtube.com/embed/" + setElement(id("insert").value) + "?" + [...new URL(id(e(265))[e(996)])[e(1291)]].map((a => a[e(537)]("=")))[e(537)]("&") + e(353);
            localStorage_.setItem("LP", t), frame[e(274)] = t
        }, eval(C(e(656), !0))[0] ? (C("RS", br(573)), frame[br(274)] = fix(jj("RS"))) : (inputm[e(673)] = fix(e(377)), alert(e(400)), frame[e(612)] = localStorage_[e(629)]("LP") || inputm[br(495)]), u = CE("br"), s && (t[e(541)] = ""), listn = CE(e(538), br(476)), listn.placeholder = br(895), v = CE(br(392), e(595)), C(e(626), "RDJsG8fl0VfkQ"), C(e(561), br(961)), w = CE(e(447), e(454)), w[e(357)] = e(511), frame.setAttribute(e(474), 1), v.innerText = e(501), set = function(a, e, t) {
            a.setAttribute(e, t)
        }, x = [{
            site: location[e(351)][e(657)](e(397)),
            cent: !0,
            clear: !1,
            parent: function() {
                var a = br,
                    t = e;
                return (document[a(365)](t(508)) || document[t(345)](a(1007)) || document.getElementById(t(683)))[t(392)]
            }
        }, {
            site: location[e(351)][br(446)](e(459)),
            cent: !1,
            clear: !0,
            parent: function() {
                var a = e;
                return setTimeout((function() {
                    setTimeout((function() {
                        var a, e, t, r, n, o, i, s = b,
                            c = d;
                        document[s(365)](c(490))[c(673)] = c(481), document[s(365)](s(373))[c(639)](), document[c(345)](c(349))[c(541)] = c(411), $(c(610))[c(600)]({
                            "background-color": s(458)
                        }), $(c(610))[c(600)]({
                            color: c(399)
                        }), document[s(365)](c(654))[c(541)] = c(564), $(c(585))[s(232)]({
                            color: s(534),
                            "text-shadow": c(470),
                            "text-align": s(643),
                            "font-size": c(451),
                            "margin-bottom": c(480)
                        }), $(c(431))[s(559)](), c(512), c(504), s(822), c(417), c(486), c(500), c(378), s(150), c(369), c(418), c(621), c(528), c(669), s(1152), a = s(125), document[c(415)] || document[s(1146)](c(415))[0], (e = document[c(613)](c(681)))[c(518)] = c(625), e[s(639)] ? e[c(708)][c(488)] = a : e[c(404)](document[s(864)](a)), promoImgHolder.remove(), n = s, i = [(o = c)(694), o(387), o(658), o(651), o(596), o(544), o(686), "", o(482), o(611), o(527), o(568), o(560), o(649), o(686), o(635), o(406), o(686), "", o(433), o(620), o(686), "", o(452), o(426), n(1101), o(584), o(523), o(634), o(568), "    position: absolute;", o(372), n(1251), "", o(426), o(435), n(752), o(706), o(559), o(686), "", o(354), n(359), o(350), o(535), n(1251), "", n(245), o(350), o(559), o(570), n(1251), "", n(562), o(427), o(523), n(813), "    box-shadow: none;", "    overflow:auto;", o(698), o(686), "", o(678), o(630), n(571), "  }", "", o(522), n(263), o(686), "", "  ::-webkit-scrollbar-thumb:hover {", o(502), o(686), "", o(573), o(364), o(676), o(686), "", o(412), o(705), o(513), o(395), o(562), o(686), "", o(373), o(460), o(686), "", n(321), o(664), o(455), o(494), o(686), "", o(566), o(389), n(238), n(934), o(649), o(686), "", o(575), o(372), o(485), o(489), "    position: relative;", o(368), o(410), o(532), o(413), "    overflow: hidden;", o(661), o(365), o(686), "", n(857), n(1144), o(428), n(144), o(446), o(485), o(686), "", "  .menuButton:before {", n(1124), "    position: absolute;", o(695), o(436), o(536), o(442), o(601), o(670), o(603), o(492), o(593), o(671), o(686), "", o(466), o(428), o(498), o(686), "", "  .menuCard span {", o(689), n(1251), "", o(641), o(660), n(983), n(1251), "", o(701), "    max-height: 282px;", n(1251), "", o(524), "    transition: 1s;", o(577), o(674), o(583), o(686), "", o(697), o(699), o(624), o(531), n(400), n(814), n(682), o(686), "", n(490), o(386), "    border: 3px solid #B20E0E;", n(1251), "", o(384), o(539), o(686), "", o(348), o(672), o(700), n(946), o(649), o(686), "", n(493), o(516), o(579), o(537), o(686), "", o(383), o(672), n(859), n(526), o(649), o(686), "", n(638), o(516), n(255), o(555), o(686), "", o(391), o(672), n(787), o(537), o(680), o(649), o(686), "", o(503), "    background-color: rgba(0,0,0,0.6) !important;", o(584), o(361), n(1039), o(686), "", n(799), o(606), n(1251), "", o(382), o(356), o(469), o(534), o(686), "", o(525), n(569), o(614), n(1251), "", o(376), o(487), n(418), n(1251), "", "  #ageBar {", o(672), n(645), "    height: 5px;", o(565), o(686), "", o(348), o(477), o(360), n(769), o(437), o(686), "", o(556), "    color: #FF8C00!important;", o(649), o(686), "", o(687), o(662), n(1251), "", n(1208), n(832), o(686), "", n(635), o(366), o(686), "", o(646), o(467), n(1251), "", o(461), o(617), o(622), o(649), o(686), "", o(443), o(688), n(682), "  }", "", n(747), o(421), o(372), o(686), "", n(252), n(729), o(372), n(1251), "", o(691), o(422), o(607), "  }", "", o(440), n(1230), o(402), o(462), o(352), "  }", "  ", o(677), o(543), o(420), o(587), o(589), o(427), o(584), o(686), "", o(407), o(677), o(644), o(484), o(542), o(552), o(686), "", n(1199), o(677), o(644), o(484), n(1232), o(409), o(709), o(686), "", n(1231), o(666), o(638), o(619), o(659), o(475), o(686), "", n(1106), o(389), o(686), "  ", o(367), n(558), n(829), "  }", "", o(675), "    color: #fc9f9f;", o(686), "", "  #linksContainer2 > *:first-child {", o(623), o(686), "", o(615), n(621), o(464), o(574), n(1237), o(602), o(423), n(123), n(861), o(463), "    transition: 1s;", n(112), o(686), "", o(520), o(519), o(686), "", o(668), o(359), n(431), o(645), o(548), n(221), o(363), o(430), o(686), "", o(592), n(243), o(686), "", "", "  .text {", o(582), o(598), o(444), o(568), o(529), "    display: none;", n(666), n(1251), "", o(599), "    font-size: 20px;", o(355), o(686), "", "  b:hover { ", n(142), o(686), "", o(693), n(945), n(1251), "", o(692), o(388), o(686), "", o(682), o(449), "  }", "", n(340), o(636), o(686), "", o(478), "    top: 57.5%;", o(686), "", o(510), o(445), n(1251), "", o(571), o(703), o(686), "", n(377), o(643), n(1251), "", "", "", o(667), o(609), o(686), "", o(465), o(640), o(686), "", "", o(557), o(598), n(527), n(925), o(702), "    transition: .4s;", o(686), "", o(618), n(621), o(665), o(702), o(588), o(686), "", o(594), o(530), o(686), "  ", o(390), o(567), o(686), "", "  input:checked + .slider:before {", o(353), o(553), o(605), n(1251), "", n(138), n(413), o(686), "", n(1296), o(648), o(686)][o(506)]("\n"), typeof GM_addStyle != o(558) ? GM_addStyle(i) : typeof PRO_addStyle != o(558) ? PRO_addStyle(i) : typeof addStyle != o(558) ? addStyle(i) : ((t = document[n(1058)](o(681)))[o(518)] = o(625), t[o(404)](document[o(458)](i)), (r = document[o(545)](o(415)))[o(479)] > 0 ? r[0][o(404)](t) : document[o(563)][o(404)](t))
                    }), 100)
                }), 1e3), id(a(509))
            },
            css: [
                [br(1298), e(627), e(499)],
                [br(1265), e(627), e(499)],
                [e(483), e(652), e(546)],
                [e(642), "background-color", e(499)],
                [e(514), e(627), e(499)],
                [br(982), e(627), br(1105)],
                [br(742), e(627), e(499)],
                [e(517), e(652), br(1044)]
            ]
        }, {
            site: location[e(351)][br(446)](e(650)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(br(132))
            }
        }, {
            site: location[e(351)][br(446)]("sploop.io"),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(br(283))
            },
            css: [
                ["#game-bottom-content", e(627), e(499)],
                [br(1265), e(627), e(499)],
                [e(483), e(652), e(546)],
                [br(853), e(652), e(546)],
                [br(610), "background-color", e(499)],
                [e(514), e(627), e(499)],
                [br(1309), e(627), "rgba(0,0,0,0)"],
                ["#nickname", e(627), e(499)],
                ["#nickname", e(652), br(1044)]
            ]
        }, {
            site: location.href[br(446)](e(441)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id("adZone")
            }
        }, {
            site: location[e(351)].includes(e(496)),
            cent: !1,
            clear: !1,
            parent: function() {
                return id(br(1141))
            }
        }, {
            site: location[e(351)][e(657)](e(419)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id("ad-block-left")
            },
            css: [
                [e(483), e(627), e(499)],
                [e(401), br(127), e(499)],
                [br(118), e(652), e(546)],
                [e(647), e(627), e(499)]
            ]
        }, {
            site: location[e(351)][e(657)](e(473)),
            cent: !1,
            clear: !1,
            parent: function() {
                return clas(e(393))[0]
            }
        }, {
            site: location[e(351)][e(657)](br(1273)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(497))
            }
        }, {
            site: location[e(351)][e(657)](e(476)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(471))
            }
        }, {
            site: location[e(351)][e(657)](e(581)),
            cent: !0,
            clear: !0,
            parent: function() {
                return id(e(438))
            }
        }, {
            site: location[e(351)].includes(e(533)),
            cent: !0,
            clear: !0,
            parent: function() {
                var a = br,
                    t = e;
                return id(t(704))[a(296)](), id(a(896))[t(639)](), document[t(597)]("referral")[0]
            }
        }], window.br = document[e(613)]("br"), v[br(974)] = function() {
            try {
                z(centy2)
            } catch (a) {}
            try {
                z(centy)
            } catch (e) {}
        }, w[e(425)] = F, window[e(403)] = function(a) {
            var n, o = e;
            set(frame, o(521), o(550)), set(frame, o(375), "0"), n = CE(o(578), o(637)), s && (t[o(541)] = ""), r ? (clearInterval(y), y = setInterval((function() {
                var a, e, r = b,
                    i = o;
                try {
                    t && (clearInterval(y), a = t, frame[i(612)] = localStorage_.getItem("LP"), window[i(616)] = function(a) {
                        var e = b;
                        localStorage_.setItem("LP", frame[e(274)])
                    }, e = CE(i(578), i(633)), t[i(404)](e), (t = centy)[i(404)](u), t[r(910)](frame), t[r(910)](u), t[r(910)](u), t[r(910)](inputm), t.appendChild(u), t[i(404)](u), clearInterval(y), n[i(404)](u), n[i(404)](v), n[i(404)](u), n[i(404)](w), a[i(404)](n), D(), id(r(329)) && SetUpSploop())
                } catch (s) {
                    window[r(315)] = s
                }
            }), 0)) : (clearInterval(y), y = setInterval((function() {
                var a, e = b,
                    r = o;
                try {
                    t && (clearInterval(y), a = t, (t = CE(e(891), e(1112)))[r(404)](u), t[r(404)](frame), frame[r(612)] = localStorage_[e(355)]("LP"), window[e(1192)] = function(a) {
                        var e = r;
                        localStorage_[e(655)]("LP", frame[e(612)])
                    }, t[r(404)](u), t.appendChild(u), t[r(404)](inputm), a[r(404)](t), a[r(404)](u), a[e(910)](v), a.appendChild(u), a[e(910)](w), D(), id(e(329)) && SetUpSploop())
                } catch (n) {}
            }), 0)), setTimeout((function() {
                var e = o;
                a && a[e(540)]((a => {
                    E(a[0], a[1], a[2])
                })), G(id(e(696)), e(450))
            }), 1e3)
        }, x[e(540)]((a => {
            var n = br,
                o = e;
            a[o(414)] && (t = window[o(495)] = a[o(569)](), r = window.vcent = a[o(396)], s = window[o(515)] = a[o(505)], a[n(232)] ? setup3(a[o(600)]) : setTimeout(window[o(403)], 100))
        }))
    }
}

function b(e, t) {
    var r = a();
    return (b = function(a, e) {
        return r[a -= 108]
    })(e, t)
}

function Csc2() {
    var a = a8;
    if (cSs(), pingcheck(), window[a(428)]) {
        ageBarBody[a(1245)][a(501)] = "1s", window[a(262)] = {};
        let e = {
                1: {
                    hand_axe: 1,
                    short_sword: 3,
                    polearm: 5,
                    daggers: 7,
                    stick: 8,
                    bat: 6
                },
                2: {
                    cookie: 17,
                    stonewall: 20
                },
                3: {
                    trap: 31,
                    boost: 32
                },
                4: {
                    greater_spike: 23,
                    mine: 29,
                    sapling: 30,
                    fast_mill: 27
                },
                5: {
                    hunting_bow: 0,
                    great_hammer: 10,
                    mc_grabby: 14,
                    wooden_shield: 11
                },
                6: {
                    cheese: 18,
                    castle_wall: 21,
                    turret: 33,
                    platform: 34,
                    healing_pad: 35,
                    blocker: 37,
                    teleport: 38
                },
                7: {
                    great_axe: 2,
                    crossbow: 12,
                    katana: 4,
                    power_mill: 28
                },
                8: {
                    repeater_crossbow: 13,
                    musket: 15,
                    poison_spike: 24,
                    spining_spike: 25,
                    spawnpad: 36
                }
            },
            t = document[a(1058)]("div");
        (function(r = ((e, t) => {
            var r = a;
            window.items2[t] = e[r(784)][r(953)][0][r(996)]
        }), n = document.createElement("br")) {
            var o = a;
            for (let a in e) {
                t[o(1019)](document[o(1058)]("br"));
                let r = document.createElement(o(310));
                window[o(272)].push([a, r]), r.id = o(1220) + a, r[o(736)] = a;
                let n = document[o(1058)](o(833));
                n[o(821)] = "Age " + a + ":", Object[o(710)](e[a]).forEach((t => {
                    var n = o;
                    let i = document[n(1058)]("option");
                    i[n(996)] = e[a][t], i[n(821)] = t, r[n(1019)](i)
                })), t[o(1019)](n), t[o(1019)](r)
            }
            setupCard.append(t), sel1[o(615)] = function(a) {
                var e = o,
                    t = a[e(784)][e(996)],
                    r = a[e(784)].classname;
                items2[r] = t
            }, sel2[o(615)] = function(a) {
                var e = o,
                    t = a[e(784)][e(996)],
                    r = a[e(784)][e(736)];
                items2[r] = t
            }, sel3.onchange = function(a) {
                var e = o,
                    t = a[e(784)].value,
                    r = a[e(784)][e(736)];
                items2[r] = t
            }, sel4[o(615)] = function(a) {
                var e = o,
                    t = a[e(784)][e(996)],
                    r = a.target.classname;
                items2[r] = t
            }, sel5[o(615)] = function(a) {
                var e = o,
                    t = a[e(784)][e(996)],
                    r = a[e(784)][e(736)];
                items2[r] = t
            }, sel6[o(615)] = function(a) {
                var e = o,
                    t = a[e(784)].value,
                    r = a[e(784)][e(736)];
                items2[r] = t
            }, sel7.onchange = function(a) {
                var e = o,
                    t = a[e(784)][e(996)],
                    r = a[e(784)][e(736)];
                items2[r] = t
            }, sel8[o(615)] = function(a) {
                var e = o,
                    t = a.target[e(996)],
                    r = a[e(784)].classname;
                items2[r] = t
            }
        })(), window[a(1246)] = [25, 23, 24, 6, 7, 9], info2[a(935)] = e, info2[a(935)][0] = {
            wood_wall: 19,
            spike: 6,
            winddmill: 10
        };
        let r = document[a(1058)](a(743));
        r[a(996)] = 150, r.id = a(1035), r[a(1245)].backgroundColor = a(640), r[a(1245)][a(546)] = a(1047), r[a(615)] = function(e) {
            var t = a;
            window[t(281)] = 1 * r.value, chat(t(1100) + r[t(996)])
        };
        let n = document[a(1058)](a(743));
        n[a(996)] = i2, n.id = a(484), n[a(1245)][a(998)] = a(640), n[a(1245)].color = a(1047);
        let o = document[a(1058)](a(833));
        o[a(821)] = "Insta speed ", o[a(1245)][a(546)] = a(684);
        let i = document[a(1058)]("span");
        i[a(821)] = a(1242), i[a(1245)][a(546)] = "red", setupCard[a(1019)](document[a(1058)]("br")), setupCard[a(1019)](i), setupCard.append(r), setupCard.append(document.createElement("br")), setupCard[a(1019)](o), setupCard[a(1019)](n), n[a(615)] = function(e) {
            var t = a;
            i2 = 1 * n[t(996)], chat(t(1182) + n[t(996)])
        }, setupCard[a(1245)][a(516)] = a(509), setupCard.style[a(707)] = a(1021), window[a(183)] = 1
    }
}
var _setUp, a8 = b;
! function(e, t) {
    for (var r = b, n = a();;) {
        try {
            if (348208 === -parseInt(r(1193)) / 1 + -parseInt(r(425)) / 2 * (-parseInt(r(201)) / 3) + -parseInt(r(766)) / 4 + parseInt(r(1034)) / 5 * (parseInt(r(874)) / 6) + parseInt(r(607)) / 7 + parseInt(r(1174)) / 8 + parseInt(r(1260)) / 9 * (-parseInt(r(734)) / 10)) {
                break
            }
            n.push(n.shift())
        } catch (o) {
            n.push(n.shift())
        }
    }
}();
const badWords = [...new Set([a8(1048), a8(858), a8(805), "fuck", a8(543), a8(606), a8(499), "ar5e", a8(869), a8(332), a8(303), "ass-fucker", a8(1263), a8(500), a8(818), a8(1158), a8(1028), "asswhole", "a_s_s", a8(595), "b00bs", a8(433), a8(1119), a8(1241), a8(224), a8(888), a8(387), a8(1068), a8(708), "bellend", a8(467), a8(806), "bi+ch", a8(555), a8(1302), a8(1214), a8(259), a8(810), "bitchin", "bitching", a8(1277), a8(665), a8(1142), a8(165), a8(424), "bollock", "bollok", a8(390), a8(155), a8(308), a8(395), "boooobs", a8(885), a8(160), a8(926), a8(368), a8(1235), a8(1186), a8(709), a8(804), a8(1191), a8(440), a8(585), a8(1023), a8(842), a8(325), a8(176), a8(1093), a8(1013), a8(414), a8(798), a8(817), a8(1172), a8(167), a8(1130), "cock-sucker", a8(715), a8(444), a8(887), a8(204), a8(538), a8(376), a8(306), a8(481), "cocksucking", a8(630), "cocksuka", a8(716), a8(261), a8(758), a8(738), a8(317), a8(1042), a8(997), a8(472), a8(1178), a8(733), a8(1284), a8(902), a8(921), a8(1094), a8(932), a8(1275), a8(614), a8(1073), a8(1184), a8(1294), a8(391), a8(1173), a8(1209), a8(1281), a8(890), "cyberfuckers", a8(378), a8(764), a8(119), a8(1061), a8(1239), a8(212), a8(863), a8(456), a8(990), a8(1304), a8(648), a8(1137), "doggin", a8(947), a8(860), a8(193), a8(1091), "dyke", "ejaculate", a8(984), a8(480), "ejaculating", a8(1168), a8(889), "ejakulate", "f u c k", a8(801), a8(1108), "fag", "fagging", a8(1138), a8(346), a8(957), a8(279), a8(309), a8(327), a8(328), "fannyflaps", a8(403), a8(1117), a8(1128), a8(993), "fcuker", a8(182), a8(1076), "fecker", a8(1226), a8(319), a8(825), a8(162), "fingerfucked", a8(1075), "fingerfuckers", "fingerfucking", a8(930), a8(266), a8(737), a8(1236), a8(313), a8(289), a8(979), a8(1240), a8(663), "fook", a8(322), a8(531), a8(479), "fucked", a8(435), a8(360), a8(591), "fuckheads", a8(539), a8(366), a8(504), a8(1090), a8(1301), "fucks", "fuckwhit", a8(423), a8(970), a8(408), a8(401), a8(722), "fukker", "fukkin", a8(629), a8(192), a8(336), "fux", a8(1164), "f_u_c_k", a8(515), a8(347), a8(1018), a8(1196), "gaysex", a8(1051), a8(114), a8(478), "god-damned", a8(826), a8(473), "hardcoresex", "hell", a8(994), a8(1133), a8(563), "hoer", a8(723), "hore", a8(1004), "horny", a8(754), a8(1014), a8(331), "jap", "jerk-off", "jism", "jiz", a8(1308), a8(140), a8(972), a8(1070), "knobead", "knobed", a8(471), "knobhead", a8(459), "knobjokey", a8(449), a8(1136), a8(781), a8(618), a8(277), a8(637), a8(522), "kunilingus", "l3i+ch", "l3itch", a8(592), a8(437), a8(811), a8(381), a8(394), a8(241), a8(1015), a8(121), "masochist", a8(1115), a8(1171), a8(370), "masterbat3", a8(196), a8(1049), a8(108), a8(745), "mo-fo", "mof0", a8(596), a8(929), a8(343), a8(1177), a8(1087), a8(976), a8(843), a8(1037), "mothafuckin", a8(234), a8(126), a8(164), a8(823), a8(898), a8(1185), a8(962), "motherfuckers", a8(205), a8(572), "motherfuckings", a8(445), a8(542), a8(1261), a8(1299), a8(186), "muthafuckker", a8(460), a8(362), a8(213), "n1gger", a8(692), a8(1098), a8(584), a8(916), a8(697), a8(110), a8(625), "nigger", "niggers", a8(1218), a8(824), a8(1053), a8(696), "nobjokey", a8(1111), a8(1e3), a8(1145), a8(924), a8(980), a8(1045), a8(451), "pawn", a8(404), a8(1215), a8(1056), a8(856), a8(383), "phuk", a8(350), "phuking", a8(992), a8(774), "phuks", a8(1032), a8(1135), "pimpis", a8(1009), a8(474), a8(1279), a8(1074), a8(761), a8(873), a8(1271), "pissing", "pissoff", a8(950), a8(524), a8(868), "pornography", a8(986), a8(943), a8(875), a8(581), a8(156), "pusse", a8(1122), "pussies", a8(912), a8(1250), a8(1161), a8(393), "rimjaw", "rimming", a8(1052), a8(644), a8(597), a8(1202), a8(541), a8(184), "scrote", "scrotum", "semen", "sex", a8(153), a8(903), "sh1t", a8(626), a8(690), a8(300), a8(892), "shemale", a8(465), a8(488), a8(611), a8(1248), a8(1194), a8(985), a8(171), a8(649), "shithead", "shiting", a8(1201), "shits", a8(680), a8(372), a8(1200), a8(960), a8(535), a8(1227), "skank", a8(367), a8(553), a8(739), a8(954), "snatch", a8(583), a8(937), a8(551), "s_h_i_t", a8(1290), a8(1311), "teets", a8(883), a8(904), a8(214), a8(928), a8(174), "tits", a8(185), a8(613), a8(977), a8(580), a8(988), a8(1162), a8(570), a8(599), a8(415), "tw4t", a8(287), a8(600), "twatty", a8(660), a8(989), a8(1088), a8(693), a8(363), a8(800), a8(1080), a8(1205), a8(215), "wank", a8(834), a8(235), a8(617), a8(269), a8(1081), "willy", a8(356), "xxx", a8(1048), "5h1t", a8(805), "a55", a8(606), a8(499), a8(260), a8(869), a8(332), a8(303), a8(908), a8(1263), a8(500), a8(818), a8(1158), a8(1028), a8(434), "a_s_s", a8(595), "b00bs", a8(433), a8(1119), "ballbag", a8(224), a8(888), "bastard", a8(1068), a8(708), a8(763), "bestial", a8(806), a8(628), "biatch", a8(1302), a8(1214), a8(259), "bitches", a8(582), "bitching", a8(1277), a8(665), a8(1142), a8(165), a8(424), "bollock", a8(807), a8(390), "boob", a8(308), a8(395), a8(1063), a8(885), a8(160), "breasts", "buceta", a8(1235), a8(1186), a8(709), a8(804), a8(1191), a8(440), a8(585), "c0ck", a8(842), "carpet muncher", a8(176), a8(1093), a8(1013), a8(414), a8(798), a8(817), "clits", a8(167), a8(1130), a8(264), a8(715), a8(444), "cockmunch", "cockmuncher", a8(538), "cocksuck", a8(306), "cocksucker", a8(1083), "cocksucks", a8(246), "cocksukka", a8(261), a8(758), a8(738), a8(317), "cox", a8(997), a8(472), "cummer", "cumming", a8(1284), a8(902), a8(921), a8(1094), "cunnilingus", a8(1275), a8(614), a8(1073), "cuntlicking", a8(1294), a8(391), a8(1173), a8(1209), a8(1281), a8(890), a8(683), a8(378), a8(764), a8(119), a8(1061), a8(1239), "dildo", "dildos", "dink", a8(990), a8(1304), a8(648), a8(1137), a8(879), a8(947), "donkeyribber", a8(193), a8(1091), "dyke", a8(587), a8(984), a8(480), a8(1176), "ejaculatings", a8(889), "ejakulate", a8(687), a8(801), a8(1108), a8(498), a8(233), a8(1138), "faggot", a8(957), a8(279), a8(309), a8(327), a8(328), a8(117), "fannyfucker", a8(1117), a8(1128), "fcuk", "fcuker", a8(182), a8(1076), a8(352), a8(1226), a8(319), a8(825), a8(162), a8(357), a8(1075), "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", a8(1236), a8(313), "fistfucking", a8(979), "fistfucks", a8(663), a8(178), a8(322), a8(531), "fucka", a8(735), "fucker", a8(360), a8(591), a8(128), a8(539), a8(366), "fuckings", "fuckingshitmotherfucker", a8(1301), a8(1310), a8(568), a8(423), a8(970), "fudgepacker", a8(401), a8(722), "fukker", a8(251), "fuks", a8(192), a8(336), a8(290), "fux0r", "f_u_c_k", a8(515), "gangbanged", a8(1018), a8(1196), a8(544), "goatse", "God", a8(478), a8(711), a8(826), "goddamned", a8(1140), a8(770), a8(994), a8(1133), a8(563), a8(603), a8(723), a8(1217), "horniest", a8(593), a8(754), "jack-off", a8(331), a8(349), a8(846), a8(344), a8(130), a8(1308), a8(140), a8(972), a8(1070), a8(973), "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", a8(1136), a8(781), "kum", "kummer", a8(637), a8(522), a8(218), a8(163), a8(386), a8(592), a8(437), "lusting", a8(381), a8(394), a8(241), "ma5terb8", a8(121), a8(909), a8(1115), "masterb8", a8(370), a8(785), a8(196), a8(1049), a8(108), "masturbate", "mo-fo", "mof0", a8(596), "mothafuck", a8(343), a8(1177), a8(1087), "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", a8(234), a8(126), a8(164), "mother fucker", a8(898), a8(1185), a8(962), a8(525), a8(205), a8(572), "motherfuckings", a8(445), "motherfucks", a8(1261), a8(1299), a8(186), a8(695), a8(460), a8(362), "n1gga", a8(605), a8(692), "nigg3r", a8(584), a8(916), a8(697), a8(110), a8(625), "nigger", "niggers", a8(1218), a8(824), a8(1053), "nobjocky", a8(955), a8(1111), "nutsack", a8(1145), a8(924), a8(980), "orgasms", a8(451), a8(181), a8(404), a8(1215), a8(1056), "phonesex", "phuck", a8(545), a8(350), a8(1206), a8(992), a8(774), a8(975), a8(1032), a8(1135), a8(438), a8(1009), a8(474), a8(1279), "pissers", a8(761), a8(873), a8(1271), a8(133), "pissoff", a8(950), a8(524), a8(868), "pornography", a8(986), "prick", a8(875), "pron", a8(156), "pusse", "pussi", a8(273), a8(912), a8(1250), "rectum", a8(393), a8(267), a8(170), "s hit", "s.o.b.", a8(597), a8(1202), "screwing", "scroat", a8(968), "scrotum", a8(1043), a8(815), a8(153), "sh!t", a8(771), a8(626), a8(690), a8(300), a8(892), a8(911), a8(465), a8(488), a8(611), a8(1248), a8(1194), "shitey", a8(171), a8(649), a8(397), a8(159), a8(1201), a8(492), a8(680), a8(372), "shitters", "shitting", "shittings", a8(1227), a8(959), "slut", a8(553), a8(739), a8(954), "snatch", a8(583), a8(937), a8(551), a8(417), a8(1290), a8(1311), a8(681), "teez", a8(904), a8(214), a8(928), "titfuck", a8(808), "titt", a8(613), a8(977), "titties", a8(988), "tittywank", a8(570), "tosser", a8(415), a8(207), a8(287), "twathead", a8(1229), a8(660), a8(989), a8(1088), a8(693), a8(363), "viagra", a8(1080), "w00se", a8(215), a8(601), "wanker", a8(235), a8(617), a8(269), "willies", "willy", a8(356), a8(847), a8(225), a8(499), a8(187), "ash0les", a8(1123), a8(303), a8(669), "Assface", a8(796), "assh0lez", a8(1158), "assholes", a8(1131), a8(301), a8(135), a8(647), a8(387), "bastards", a8(646), a8(685), a8(1038), a8(578), a8(1302), a8(810), a8(948), a8(115), a8(1191), a8(701), "c0ck", "c0cks", a8(659), a8(268), "cawk", a8(249), a8(1033), "cnts", a8(1300), a8(1130), "cockhead", a8(1151), a8(538), a8(188), "cock-sucker", a8(997), a8(472), a8(1275), a8(1294), a8(919), a8(1061), "dild0", a8(409), a8(212), "dildos", a8(244), a8(124), a8(850), a8(819), a8(191), "dyke", a8(880), a8(687), "f u c k e r", a8(498), "fag1t", "faget", a8(598), "faggit", a8(346), a8(631), "fagit", a8(327), a8(375), a8(285), a8(358), a8(619), a8(416), a8(531), "fucker", a8(539), a8(366), a8(1310), "Fudge Packer", a8(401), a8(470), a8(1258), a8(722), a8(1116), a8(334), a8(791), a8(1005), a8(1113), a8(1017), a8(292), a8(452), a8(657), a8(1129), a8(161), a8(152), a8(1133), a8(1297), a8(1010), "jackoff", "jap", a8(565), a8(846), a8(721), "jiss", a8(1308), a8(140), a8(1070), "knobs", a8(166), "kunt", a8(1160), "kuntz", "Lezzian", a8(491), a8(851), a8(909), a8(136), a8(1153), a8(938), "masstrbate", a8(971), a8(196), a8(653), a8(1282), a8(1274), "Motha Fukkah", a8(753), a8(158), "Mother Fukah", a8(1175), a8(795), a8(939), a8(257), "Mutha Fucker", a8(1189), a8(927), a8(464), a8(477), a8(154), "nastt", a8(530), "nigur;", a8(1159), a8(297), "orafis", a8(1086), a8(980), a8(339), a8(421), "orifice", "orifiss", a8(1079), a8(1057), a8(466), a8(1187), "pakie", a8(901), a8(404), a8(299), a8(837), "peenus", a8(1180), a8(351), a8(461), a8(1215), a8(1020), "penus", a8(512), "Phuc", "Phuck", a8(759), "Phuker", a8(143), a8(757), "polack", "polak", a8(655), a8(1247), a8(1195), a8(1003), a8(314), "pussee", a8(912), "puuke", a8(1134), a8(220), "queers", "queerz", a8(636), a8(379), a8(1148), "recktum", a8(1161), a8(393), "sadist", a8(427), "schlong", "screwing", "semen", "sex", a8(219), "Sh!t", a8(771), a8(967), a8(270), a8(906), a8(337), "shit", a8(492), a8(372), a8(175), a8(839), "shitz", "Shyt", "Shyte", a8(475), a8(1065), "skanck", a8(959), a8(782), a8(776), a8(1210), a8(1099), a8(195), a8(367), "sluts", "Slutty", a8(688), a8(583), a8(928), "turd", a8(788), "vag1na", a8(920), "vagina", "vaj1na", "vajina", a8(194), a8(1080), a8(120), "wh00r", "wh0re", "whore", a8(356), a8(847), "b!+ch", "bitch", a8(1142), a8(798), "arschloch", a8(531), a8(488), a8(303), a8(1158), a8(595), a8(433), a8(1119), a8(387), "bi+ch", "boiolas", a8(368), a8(1023), a8(176), "chink", a8(1013), a8(1172), a8(1130), a8(472), a8(1275), "dildo", a8(1304), a8(941), a8(1128), a8(993), "fuk", a8(1164), a8(603), a8(1217), a8(344), a8(972), a8(386), a8(163), a8(668), a8(745), a8(370), a8(785), a8(962), a8(644), a8(596), a8(692), a8(916), "nigger", a8(1e3), a8(383), a8(438), a8(314), a8(912), "scrotum", a8(903), a8(911), a8(465), "sh!+", "slut", "smut", "teets", a8(808), a8(308), "b00bs", "teez", "testical", a8(214), a8(185), a8(1205), a8(331), a8(601), a8(617), a8(269), a8(633), a8(307), a8(517), "*shit*", a8(865), "amcik", "andskota", "arse*", a8(402), a8(561), "bi7ch", "bitch*", a8(226), "breasts", a8(229), "cabron", a8(698), a8(197), "chuj", "Cock*", a8(168), a8(1266), "daygo", a8(288), a8(1114), a8(173), a8(291), a8(141), "ejackulate", a8(364), a8(1085), a8(1293), "faen", "fag*", a8(489), "fanny", "feces", "feg", a8(326), a8(278), a8(831), a8(654), a8(385), a8(302), "Fu(*", a8(969), a8(840), a8(567), a8(1050), a8(952), a8(1223), a8(770), a8(1103), a8(502), a8(767), a8(457), a8(803), a8(848), "jizz", a8(450), "kike", a8(510), a8(981), a8(870), a8(284), a8(871), a8(1181), a8(147), a8(508), "kyrpa*", a8(1082), a8(586), "masturbat*", a8(1219), a8(1259), "monkleigh", a8(1156), a8(1071), a8(642), a8(1253), a8(448), "nepesaurio", "nigger*", a8(677), a8(198), a8(714), a8(844), a8(622), a8(131), a8(942), a8(389), a8(316), a8(713), a8(950), a8(524), a8(451), a8(991), a8(651), "pula", a8(247), a8(634), "puto", a8(933), a8(704), a8(845), a8(867), a8(1170), a8(442), a8(177), a8(145), a8(783), a8(157), a8(497), "shipal", a8(298), "skribz", a8(312), "sphencter", "spic", a8(689), a8(1026), a8(1121), a8(700), a8(253), "titt*", "twat", a8(951), a8(1244), a8(731), a8(1143), a8(894), "yed", a8(518)])],
    reg = new RegExp("(" + [...new Set(badWords.join(" ").match(/[\w\d]+/gi))][a8(537)]("|") + ")", "gi"),
    filter1 = a => a[a8(835)](reg, (function(a, e, t) {
        var r = a8;
        return a.length > 1 ? a[r(547)](/[aeiou]+/gi)[r(537)]("*") : a
    })),
    filter2 = a => {
        var e = a8;
        return "oh" === (a = (a = a[e(1166)]())[e(547)]("l").join("w")) ? random([e(922), e(149)]) : a.replaceAll(/l/g, "w")[e(835)](/[le]+/g, (function(a) {
            return {
                l: "w",
                e: "ee"
            }[a[0]] || a
        })).replace(/s/g, "z")[e(436)](/th/g, "d")[e(436)](/e^d/g, (function(a, t, r) {
            return r[e(881)](t - 1, t + 1), "e"
        }))[e(436)](/w{2,}/g, "wl")
    },
    game_ = new class {#
        a = function() {};#
        e = function() {};#
        t = !1;#
        r = 1e3;#
        n = function(a) {
            return new Promise((e => setTimeout(e, a)))
        };#
        o = 0;#
        i = 0;#
        s = async function() {
            for (;;) {
                let a = this.#n,
                    e = this.#e,
                    t = this.#a;
                if (await a(0), this.#i) {
                    break
                }
                e() && (await a(this.#r), t(), await a(this.#r))
            }
            this.#i = !1
        };
        set[a8(1295)](a) {
            return this.#r = Number.isNaN(a) ? 1e3 : Number(a)
        }
        get timeOut() {
            return this.#r
        }
        start() {
            this.#s()
        }[a8(511)]() {
            this.#i = !0
        }
        set[a8(775)](a) {
            return this.#t = !!a
        }
        get[a8(775)]() {
            return this.#t
        }
        set testFunction(a) {
            return this.#e = a
        }
        get[a8(958)]() {
            return this.#e
        }
        set spawnFunc(a) {
            return this.#a = a
        }
        get[a8(1198)]() {
            return this.#a
        }
    };
class bool {#
    c = !1;
    [a8(1256)]() {
        this.#c = !this.#c
    }
    get[a8(485)]() {
        return this.#c
    }
    set[a8(485)](a) {
        this.#c = !!a
    }
}
class element {
    static get br() {
        return new element("br")
    }
    constructor(a, e) {
        var t = a8;
        this[t(209)] = a[t(1025)].name.includes(t(720)) && a || function() {
            var a = t;
            for (let e in arguments[1]) {
                arguments[0][a(1046)](e, arguments[1][e])
            }
            return arguments[0]
        }(document[t(1058)](a), e)
    }[a8(1245)](a) {
        var e = a8;
        for (let t in a) {
            this[e(209)].style[t] = a[t]
        }
        return this
    }[a8(1019)](a) {
        var e = a8;
        return this[e(209)][e(1019)](a[e(209)] || a), this
    }
    appendTo(a) {
        var e = a8;
        return (a[e(209)] || typeof a == e(778) ? document[e(661)](a) : a).append(this.element), this
    }
    on(a, e) {
        return this[a8(209)]["on" + a] = e, this
    }[a8(604)](a, e) {
        return this[a8(209)][a] = e, this
    }[a8(296)]() {
        var a = a8;
        return this.element[a(296)](), this
    }[a8(609)]() {
        return this[a8(209)][arguments[0]]
    }
    get[a8(410)]() {
        var a = a8;
        return new class {
            constructor(a) {
                var e, t = b;
                for (e = 0; e < a.length; e += 1) {
                    this[e] = a[e]
                }
                Object.defineProperty(this, t(1234), {
                    get: function() {
                        return a[t(1234)]
                    }
                }), Object[t(995)](this)
            }[a(1286)](a) {
                return null != this[a] ? this[a] : null
            }[a(548)](e) {
                var t, r = a;
                for (t = 0; t < this.length; t += 1) {
                    if (this[t].id === e || this[t][r(320)] === e) {
                        return this[t]
                    }
                }
                return null
            }
            get[a(793)]() {
                return [...this]
            }
        }([...this[a(209)][a(410)]])
    }
}
const alt = name[a8(446)](a8(792));
_setUp = !1, findhref2 = function(a, e) {
    var t = [];
    return function r(a) {
        var n = b;
        a.tagName[n(1166)]() == (e || "a") ? (t[n(1267)](a), a.children.length && ((a = a[n(410)])[n(1084)] = [][n(1084)], a[n(1084)]((a => {
            r(a)
        })))) : a[n(410)].length && ((a = a[n(410)]).forEach = [][n(1084)], a[n(1084)]((a => {
            r(a)
        })))
    }(a), t
};
const localStorage_ = {
    getItem: a => GM_getValue(a),
    setItem(a, e) {
        var t = a8;
        return GM_setValue(a, e), GM_setValue("LC", this), this[t(355)](a)
    }
};
window[a8(780)] = window.on;
const DefaultDisplay = {};
let moomooMenu = a8(699),
    sploopMenu = "#homepage";
document[a8(900)]("keydown", (function(a) {
    var e = a8;
    "`" === a[e(602)] && ($(moomooMenu) && $(moomooMenu)[e(1256)] && $(moomooMenu).toggle(), $(sploopMenu) && $(sploopMenu)[e(1256)] && (document.querySelector(sploopMenu)[e(1245)][e(678)] = document.querySelector(sploopMenu).style[e(678)] == e(589) ? e(514) : e(589)))
})), $(a8(333))[a8(232)]({
    display: a8(589)
}), $(a8(311))[a8(232)]({
    background: "url('https://i.imgur.com/fgFsQJp.png')"
});
var [info2, myPlayer] = [window[a8(454)] || {}, window.myPlayer || []];
window[a8(272)] = window.selects || [], document[a8(575)]() ? onload = Csc2 : Csc2();