// ==UserScript==
// @name         !!!! bot tracking script
// @version      alpha
// @author       (imaaaaa + snowei) <- my slaves edit by gaston1799
// @description  ~
// @match        *://moomoo.io/*
// @match        *://*.moomoo.io/*
// @icon         https://tse2.mm.bing.net/th?id=OIP.upg0Jgu2ui2oVubfocCBNgHaEK&pid=Api&P=0&h=220
// @grant        GM_getValue
// @grant        GM_setValue
// @grant none
// ==/UserScript==
class element {
        static get br() {
            return new element("br");
        }
        constructor(name, obj) {
            //findhref2(id('skin-message'))[0].constructor.name

            this.element = name.constructor.name.includes('HTML')&&(name)||(function () {
                for (let i in arguments[1]) {
                    arguments[0].setAttribute(i, arguments[1][i]);
                }
                return arguments[0];
            })(document.createElement(arguments[0]), arguments[1]);
        }
        style(obj) {
            for (let i in obj) {
                this.element.style[i] = obj[i];
            }
            return this;
        }
        append(target,...targets) {
            this.element.append(target.element || target);
            console.log("T:",{targets,fe:targets&&targets.forEach})
            for(let i=0;i<targets.length;i++){
                let a=targets[i];
                console.log('Appending:',{element:a,target:this})
                this.element.append(a.element || a);
            }
            return this;
        }
        appendTo(target) {
            (target.element || typeof target=='string'?document.querySelector(target):target).append(this.element);
            return this;
        }
        on(event, a) {
            this.element[`on${event}`] = a;
            return this;
        }
        set(prop, value) {
            this.element[prop] = value;
            return this;
        }
        remove() {
            this.element.remove();
            return this;
        }
        get() {
            return this.element[arguments[0]];
        }
        get children() {
            return new (class $ {
                constructor(arr) {
                    for (var i = 0; i < arr.length; i += 1) {
                        this[i] = arr[i];
                    }

                    // length is readonly
                    Object.defineProperty(this, "length", {
                        get: function () {
                            return arr.length;
                        }
                    });

                    // a HTMLCollection is immutable
                    Object.freeze(this);
                }
                item(i) {
                    return this[i] != null ? this[i] : null;
                }
                namedItem(name) {
                    for (var i = 0; i < this.length; i += 1) {
                        if (this[i].id === name || this[i].name === name) {
                            return this[i];
                        }
                    }
                    return null;
                }
                get toArray() {
                    return [...this];
                }
            })([...this.element.children]);
        }
    }
let used={};
let msg=`HI
ttv/wolfgplayez_
@WolfGamez_ on YT
your gay
i can do pit insta
this mod private
oof why u bully me
IM immortal
U cant kill me
Cauese im immortallity
I beat u
I know ur noob
im legend
Legend neverdie
Gaston1799_
your mom gay
hello im new here :3
hello sheeper
mod?
What mod ya got?
my mdo is better tho >:)
cmon man
stfu noob
imagine dying
bruh
dude cmon
yo!
cant die
Ez
ez
EZEZ
haha
So good byenoob
i can insta u
il do a q insta
Gaston1799`.split('\n');
function random(arr){return arr[Math.floor(Math.random() * arr.length)];}
function gmsg(){
    let a=msg[Math.floor(Math.random() * msg.length)];;if(!used[a]){used[a]=1;setTimeout(()=>{used[a]=0},5000);return a}else{return gmsg();}
}
autoChat=false
setInterval(()=>{
    autoChat&&typeof chat!='undefined'&&(chat(gmsg()))
},2300)
GM_getValue=function(k){
    try{return eval(localStorage[k])}
    catch{return JSON.parse(localStorage[k])}
}
GM_setValue=function(k,v){
    return localStorage[k]=JSON.stringify(v)
}
function toRad(angle) {
    return angle * 0.01745329251;
};
_tr=toRad
_my={}
_set=function(e){
    _my=e
}
;(function() {
    'use strict';
    function clearWebsiteData() {
        if (false) {
            localStorage.clear();
            sessionStorage.clear();
            document.cookie.split(";").forEach(function(c) {
                document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            });
            alert("Clear Data Success");
        }
    }
    clearWebsiteData();
})();

let plc = {
    food: false,
    spike: false,
    trap: false,
    turret: false,
}
let mill = {
    x: undefined,
    y: undefined,
    size: function(size) {
        return size * 2;
    },
    active: config.isSandbox ? true : false
}
let near = {
    enemys: [],
    enemy: [],
    nears: [],
    aim: undefined,
    dist: undefined
}
let autos = {
    insta: {
        todo: false,
        wait: false,
        count: 4
    },
    bull: false,
    antibull: 0,
    reloaded: false,
    stopspin: true
}
let traps = {
    near: [],
    aim: undefined,
    intrap: false
}
let spikes = {
    near: [],
    aim: undefined,
    nearSpike: false,
    nearBreak: false
}
let trapData = {
    sid: undefined,
    hitCount: 0
}

window.alert = null;
function handleImageError(event) {
    const img = event.target;
    if (img.onerror.toString()
        .includes('for(;;){}')) {
        //resetMenuChText();
        //console.warn('ahahaha remove delphi shit');
        img.parentNode.removeChild(img); // removes the image element thing
    }
}
document.querySelectorAll('img')
    .forEach(img => img.onerror = handleImageError);
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
        if (node.nodeName.toLowerCase() === 'img') {
            node.onerror = handleImageError;
        }
    }));
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});

document.getElementById('loadingText').style.color = "#49ceee";
document.getElementById('gameName').style.color = "#a8efff";
document.getElementById("leaderboard").append ('tmt');
document.getElementById("leaderboard").style.color = "#ba69ec";
document.getElementById("mainMenu").style.backgroundImage = "url('https://tenor.com/view/chillbro-cat-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA-%D0%BC%D0%BE%D1%80%D0%B3%D0%B0%D0%B5%D1%82-gif-10925748526361103416')"
document.getElementById("mainMenu").style.backgroundSize = "cover";
document.getElementById('enterGame').innerText = "< go no >";
document.getElementById("enterGame").addEventListener("mouseenter", function() {
    document.getElementById('enterGame').innerText = "<  Play ? >";
    document.getElementById("gameName").style.color = "";
});
document.getElementById("enterGame").addEventListener("mouseleave", function() {
    document.getElementById('enterGame').innerText = "neverlose";
    document.getElementById("gameName").style.color = "";
});



// Test Auto Reply
let founda = false;
let scriptTags = document.getElementsByTagName("script");
for (let i = 0; i < scriptTags.length; i++) {
    if (scriptTags[i].src.includes("index-f3a4c1ad.js") && !founda) {
        scriptTags[i].remove();
        founda = true;
        break;
    }
}
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 45) {
        const chatHolder = document.getElementById("gameUI");
        if (chatHolder) {
            const currentDisplay = chatHolder.style.display;
            chatHolder.style.display = currentDisplay === "none" ? "block" : "none";
        }
    }
});
var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
#suggestBox {
    width: 355px;
    border-radius: 3px;
    background-color: rgba(0,0,0,0.5);
    margin: auto;
    text-align: left;
    z-index: 49;
    pointer-events: auto;
    position: relative;
    bottom: 3.5px;
    overflow-y: auto;
}
#suggestBox div {
    background-color: rgba(255,255,255,0);
    color: rgba(255,255,255,1);
    transition: background-color 0.3s, color 0.3s;
}
#suggestBox div:hover {
    background-color: rgba(255,255,255,0.2);
    color: rgba(0,0,0,1);
}
.suggestBoxHard {
    color: rgba(255,255,255,1);
    font-size: 18px;
}
.suggestBoxLight {
    color: rgba(255,255,255,0.7);
    font-size: 18px;
}
`));
document.head.appendChild(styleItem);

window.addEventListener('load', function() {
    var allianceButton = document.getElementById('allianceButton');
    var storeButton = document.getElementById('storeButton');
    if (storeButton) {
        storeButton.style.right = '26px';
        storeButton.style.top = '420px';
    }
    if (allianceButton) {
        allianceButton.style.right = '26px';
        allianceButton.style.top = '479px';
    }
});

function getEl(id) {
    return document.getElementById(id);
}

!function(run) {

    let newFont = document.createElement("link");
    newFont.rel = "stylesheet";
    newFont.href = "https://fonts.googleapis.com/css?family=Ubuntu:700";
    newFont.type = "text/css";
    document.body.append(newFont);

    let min = document.createElement("script");
    min.src = "https://rawgit.com/kawanet/msgpack-lite/master/dist/msgpack.min.js";
    document.body.append(min);
    window.oncontextmenu = function() {
        return false;
    };

    let config = window.config;

    // CLIENT:
    config.clientSendRate = 9; // Aim Packet Send Rate
    config.serverUpdateRate = 9;

    // UI:
    config.deathFadeout = 0;

    config.playerCapacity = 9999;

    // CHECK IN SANDBOX:
    config.isSandbox = window.location.hostname == "sandbox.moomoo.io";

    // CUSTOMIZATION:
    config.skinColors = ["#fe8ac9", "#cbb091", "#896c4b",
                         "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
                         "#8bc373", "#91b2db"
                        ];
    config.weaponVariants = [{
        id: 0,
        src: "",
        xp: 0,
        val: 1,
    }, {
        id: 1,
        src: "_g",
        xp: 3000,
        val: 1.1,
    }, {
        id: 2,
        src: "_d",
        xp: 7000,
        val: 1.18,
    }, {
        id: 3,
        src: "_r",
        poison: true,
        xp: 12000,
        val: 1.18,
    }, {
        id: 4,
        src: "_e",
        poison: true,
        heal: true,
        xp: 24000,
        val: 1.18,
    }];

    // VISUAL:
    config.anotherVisual = true;
    config.useWebGl = false;
    config.resetRender = true;

    function waitTime(timeout) {
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, timeout);
        });
    }

    let botSkts = [];

    // STORAGE:
    let canStore;
    if (typeof(Storage) !== "undefined") {
        canStore = true;
    }

    function saveVal(name, val) {
        if (canStore)
            localStorage.setItem(name, val);
    }

    function deleteVal(name) {
        if (canStore)
            localStorage.removeItem(name);
    }

    function getSavedVal(name) {
        if (canStore)
            return localStorage.getItem(name);
        return null;
    }

    // CONFIGS:
    let gC = function(a, b) {
        try {
            let res = JSON.parse(getSavedVal(a));
            if (typeof res === "object") {
                return b;
            } else {
                return res;
            }
        } catch (e) {
            alert("dieskid");
            return b;
        }
    };

    function setCommands() {
        return {
            "help": {
                desc: "Show Commands",
                action: function(message) {
                    for (let cmds in commands) {
                        addMenuChText("/" + cmds, commands[cmds].desc, "lime", 1);
                    }
                }
            },
            "clear": {
                desc: "Clear Chats",
                action: function(message) {
                    resetMenuChText();
                }
            },
            "debug": {
                desc: "Debug Mod For Development",
                action: function(message) {
                    addDeadPlayer(player);
                    addMenuChText("Debug", "Done", "#99ee99", 1);
                }
            },
            "play": {
                desc: "Play Music ( /play [link] )",
                action: function(message) {
                    let link = message.split(" ");
                    if (link[1]) {
                        let audio = new Audio(link[1]);
                        audio.play();
                    } else {
                        addMenuChText("Warn", "Enter Link ( /play [link] )", "#99ee99", 1);
                    }
                }
            },
            "bye": {
                desc: "Leave Game",
                action: function(message) {
                    window.leave();
                }
            },
        };
    }

    function setConfigs() {
        return {
            killChat: false,
            alwaysRev: true,
            autoBuy: true,
            autoBuyEquip: true,
            autoPush: true,
            revTick: true,
            spikeTick: true,
            predictTick: true,
            autoPlace: true,
            autoReplace: true,
            antiTrap: true,
            slowOT: false,
            attackDir: false,
            showDir: false,
            noDir: false,
            autoRespawn: false
        };
    };
    let commands = setCommands();
    let configs = setConfigs();
    autoRubyOnSpawn=name=='bot'
    autoRubyOnSpawn&&(configs.autoRespawn=1)
    window.removeConfigs = function() {
        for (let cF in configs) {
            deleteVal(cF, configs[cF]);
        }
    };

    for (let cF in configs) {
        configs[cF] = gC(cF, configs[cF]);
    }

    // MENU FUNCTIONS:
    window.changeMenu = function() {};
    window.debug = function() {};
    window.wasdMode = function() {};

    // PAGE 1:
    window.startGrind = function() {};

    // PAGE 3:
    window.connectFillBots = function() {};
    window.destroyFillBots = function() {};
    window.tryConnectBots = function() {};
    window.destroyBots = function() {};
    window.resBuild = function() {};
    window.toggleBotsCircle = function() {};
    window.toggleVisual = function() {};

    // SOME FUNCTIONS:
    window.prepareUI = function() {};
    window.leave = function() {};

    // nah hahahahahhh why good ping
    window.ping = 0;

    class deadfuturechickenmodrevival {
        constructor(flarez, lore) {
            this.inGame = false;
            this.lover = flarez + lore;
            this.baby = "ae86";
            this.isBlack = 0;
            this.webSocket = undefined;
            this.checkBaby = function() {
                this.baby !== "ae86" ? this.isBlack++ : this.isBlack--;
                if (this.isBlack >= 1) return "bl4cky";
                return "noting for you";
            };
            this.x2 = 0;
            this.y2 = 0;
            this.chat = "Imagine playing this badass game XDDDDD";
            this.summon = function(tmpObj) {
                this.x2 = tmpObj.x;
                this.y2 = tmpObj.y;
                this.chat = tmpObj.name + " ur so bad XDDDD";
            };
            this.commands = function(cmd) {
                cmd == "rv3link" && window.open("https://florr.io/");
                cmd == "woah" && window.open("https://www.youtube.com/watch?v=MO0AGukzj6M");
                return cmd;
            };
            this.dayte = "11yearold";
            this.memeganoob = "69yearold";
            this.startDayteSpawn = function(tmpObj) {
                let ratio = setInterval(() => {
                    this.x2 = tmpObj.x + 20;
                    this.y2 = tmpObj.y - 20;
                    this.chat = "UR SO BAD LOL";
                    if (tmpObj.name == "ae86") {
                        this.chat = "omg ae86 go run";
                        setTimeout(() => {
                            this.inGame = false;
                            clearInterval(ratio);
                        }, 1000);
                    }
                }, 1234);
            };
            this.AntiChickenModV69420 = function(tmpObj) {
                return "!c!dc user " + tmpObj.name;
            };
        }
    };
    class HtmlAction {
        constructor(element) {
            this.element = element;
        };
        add(code) {
            if (!this.element) return undefined;
            this.element.innerHTML += code;
        };
        newLine(amount) {
            let result = `<br>`;
            if (amount > 0) {
                result = ``;
                for (let i = 0; i < amount; i++) {
                    result += `<br>`;
                }
            }
            this.add(result);
        };
        checkBox(setting) {
            let newCheck = `<input type = "checkbox"`;
            setting.id && (newCheck += ` id = ${setting.id}`);
            setting.style && (newCheck += ` style = ${setting.style.replaceAll(" ", "")}`);
            setting.class && (newCheck += ` class = ${setting.class}`);
            setting.checked && (newCheck += ` checked`);
            setting.onclick && (newCheck += ` onclick = ${setting.onclick}`);
            newCheck += `>`;
            this.add(newCheck);
        };
        text(setting) {
            let newText = `<input type = "text"`;
            setting.id && (newText += ` id = ${setting.id}`);
            setting.style && (newText += ` style = ${setting.style.replaceAll(" ", "")}`);
            setting.class && (newText += ` class = ${setting.class}`);
            setting.size && (newText += ` size = ${setting.size}`);
            setting.maxLength && (newText += ` maxLength = ${setting.maxLength}`);
            setting.value && (newText += ` value = ${setting.value}`);
            setting.placeHolder && (newText += ` placeHolder = ${setting.placeHolder.replaceAll(" ", "&nbsp;")}`);
            newText += `>`;
            this.add(newText);
        };
        select(setting) {
            let newSelect = `<select`;
            setting.id && (newSelect += ` id = ${setting.id}`);
            setting.style && (newSelect += ` style = ${setting.style.replaceAll(" ", "")}`);
            setting.class && (newSelect += ` class = ${setting.class}`);
            newSelect += `>`;
            for (let options in setting.option) {
                newSelect += `<option value = ${setting.option[options].id}`
                setting.option[options].selected && (newSelect += ` selected`);
                newSelect += `>${options}</option>`;
            }
            newSelect += `</select>`;
            this.add(newSelect);
        };
        button(setting) {
            let newButton = `<button`;
            setting.id && (newButton += ` id = ${setting.id}`);
            setting.style && (newButton += ` style = ${setting.style.replaceAll(" ", "")}`);
            setting.class && (newButton += ` class = ${setting.class}`);
            setting.onclick && (newButton += ` onclick = ${setting.onclick}`);
            newButton += `>`;
            setting.innerHTML && (newButton += setting.innerHTML);
            newButton += `</button>`;
            this.add(newButton);
        };
        selectMenu(setting) {
            let newSelect = `<select`;
            if (!setting.id) {
                alert("please put id skid");
                return;
            }
            window[setting.id + "Func"] = function() {};
            setting.id && (newSelect += ` id = ${setting.id}`);
            setting.style && (newSelect += ` style = ${setting.style.replaceAll(" ", "")}`);
            setting.class && (newSelect += ` class = ${setting.class}`);
            newSelect += ` onchange = window.${setting.id + "Func"}()`;
            newSelect += `>`;
            let last;
            let i = 0;
            for (let options in setting.menu) {
                newSelect += `<option value = ${"option_" + options} id = ${"O_" + options}`;
                setting.menu[options] && (newSelect += ` checked`);
                newSelect += ` style = "color: ${setting.menu[options] ? "#000" : "#fff"}; background: ${setting.menu[options] ? "#8ecc51" : "#cc5151"};">${options}</option>`;
                i++;
            }
            newSelect += `</select>`;

            this.add(newSelect);

            i = 0;
            for (let options in setting.menu) {
                window[options + "Func"] = function() {
                    setting.menu[options] = getEl("check_" + options).checked ? true : false;
                    saveVal(options, setting.menu[options]);

                    getEl("O_" + options).style.color = setting.menu[options] ? "#000" : "#fff";
                    getEl("O_" + options).style.background = setting.menu[options] ? "#8ecc51" : "#cc5151";

                    //getEl(setting.id).style.color = setting.menu[options] ? "#8ecc51" : "#cc5151";

                };
                this.checkBox({
                    id: "check_" + options,
                    style: `display: ${i == 0 ? "inline-block" : "none"};`,
                    class: "checkB",
                    onclick: `window.${options + "Func"}()`,
                    checked: setting.menu[options]
                });
                i++;
            }

            last = "check_" + getEl(setting.id).value.split("_")[1];
            window[setting.id + "Func"] = function() {
                getEl(last).style.display = "none";
                last = "check_" + getEl(setting.id).value.split("_")[1];
                getEl(last).style.display = "inline-block";

                //getEl(setting.id).style.color = setting.menu[last.split("_")[1]] ? "#8ecc51" : "#fff";

            };
        };
    };
    class Html {
        constructor() {
            this.element = null;
            this.action = null;
            this.divElement = null;
            this.startDiv = function(setting, func) {

                let newDiv = document.createElement("div");
                setting.id && (newDiv.id = setting.id);
                setting.style && (newDiv.style = setting.style);
                setting.class && (newDiv.className = setting.class);
                this.element.appendChild(newDiv);
                this.divElement = newDiv;

                let addRes = new HtmlAction(newDiv);
                typeof func == "function" && func(addRes);

            };
            this.addDiv = function(setting, func) {

                let newDiv = document.createElement("div");
                setting.id && (newDiv.id = setting.id);
                setting.style && (newDiv.style = setting.style);
                setting.class && (newDiv.className = setting.class);
                setting.appendID && getEl(setting.appendID).appendChild(newDiv);
                this.divElement = newDiv;

                let addRes = new HtmlAction(newDiv);
                typeof func == "function" && func(addRes);

            };
        };
        set(id) {
            this.element = getEl(id);
            this.action = new HtmlAction(this.element);
        };
        resetHTML(text) {
            if (text) {
                this.element.innerHTML = ``;
            } else {
                this.element.innerHTML = ``;
            }
        };
        setStyle(style) {
            this.element.style = style;
        };
        setCSS(style) {
            this.action.add(`<style>` + style + `</style>`);
        };
    };

    let HTML = new Html();

    let menuDiv = document.createElement("div");
    menuDiv.id = "menuDiv";
    menuDiv.draggable = true;

    menuDiv.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", "");
    });

    document.addEventListener("dragover", function (e) {
        menuDiv.style.left = e.clientX - menuDiv.offsetWidth / 2 + "px";
        menuDiv.style.top = e.clientY - menuDiv.offsetHeight / 2 + "px";
    });

    document.body.appendChild(menuDiv);
    HTML.set("menuDiv");
    HTML.setStyle(`
            position: absolute;
            left: 20px;
            top: 20px;
            `);
    HTML.resetHTML();
    HTML.setCSS(`
            .menuClass{
                color:#dc61e5;
                font-size: 20px;
                text-align: left;
                padding: 10px;
                padding-top: 7px;
                padding-bottom: 5px;
                width: 300px;
                background-color: rgba(0, 0, 0, 0.25);
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 3px;
            }
            .menuC {
                display: none;
                font-family: "HammerSmith One";
                font-size: 12px;
                max-height: 180px;
                overflow-y: scroll;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .menuB {
                text-align: center;
                background-color: rgb(25, 25, 25);
                color: #e4f9c1;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 3px;
                border: 2px solid #000;
                cursor: pointer;
            }
            .menuB:hover {
                border: 2px solid #fff;
            }
            .menuB:active {
                color: rgb(25, 25, 25);
                background-color: rgb(200, 200, 200);
            }
            .customText {
                color: #ffac79;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 3px;
                border: 2px solid #000;
            }
            .customText:focus {
                background-color: yellow;
            }
            .checkB {
                position: relative;
                top: 2px;
                accent-color:#dc61e5;
                cursor: pointer;
            }
            .Cselect {
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 3px;
                background-color: rgb(75, 75, 75);
                color: #fff;
                border: 1px solid #000;
            }
            #menuChanger {
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: rgba(0, 0, 0, 0);
                color: #dc61e5;
                border: none;
                cursor: pointer;
            }
            #menuChanger:hover {
                color: #000;
            }
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                opacity: 0;
            }
            ::-webkit-scrollbar-thumb {
                background-color: rgb(25, 25, 25);
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 3px;
            }
            ::-webkit-scrollbar-thumb:active {
                background-color: rgb(230, 230, 230);
            }
            `);
    HTML.startDiv({
        id: "menuHeadLine",
        class: "menuClass"
    }, (html) => {
        html.add(`Support`);
        html.button({
            id: "menuChanger",
            class: "material-icons",
            innerHTML: `sync`,
            onclick: "window.changeMenu()"
        });
        HTML.addDiv({
            id: "menuButtons",
            style: "display: block; overflow-y: visible;",
            class: "menuC",
            appendID: "menuHeadLine"
        }, (html) => {
            html.button({
                class: "menuB",
                innerHTML: "Debug",
                onclick: "window.debug()"
            });
        });
        HTML.addDiv({
            id: "menuMain",
            style: "display: block",
            class: "menuC",
            appendID: "menuHeadLine"
        }, (html) => {
            html.button({
                class: "menuB",
                innerHTML: "km mode",
                onclick: "window.wasdMode()"
            });
            html.newLine();
            html.add(`Ruby Farm:`);
            html.checkBox({
                id: "weaponGrind",
                class: "checkB",
                onclick: "window.startGrind()"
            });
            html.newLine(2);
            HTML.addDiv({
                style: "font-size: 20px; color: #99ee99;",
                appendID: "menuMain"
            }, (html) => {
                html.add(`Settings:`);
            });
            html.add(`AntiPush:`);
            html.checkBox({
                id: "antipush",
                class: "checkB",
                checked: true
            });
            html.newLine();
            html.add(`Healings:`);
            html.checkBox({
                id: "healingBeta",
                class: "checkB",
                checked: true
            });
            html.newLine();
        });
        HTML.addDiv({
            id: "menuConfig",
            class: "menuC",
            appendID: "menuHeadLine"
        }, (html) => {
            html.add(`Placement Tick: `);
            html.text({
                id: "autoPlaceTick",
                class: "customText",
                value: "1",
                size: "2em",
                maxLength: "1"
            });
            html.newLine();
            html.add(`Options: `);
            html.selectMenu({
                id: "configsChanger",
                class: "Cselect",
                menu: configs
            });
            html.newLine();
            html.add(`AntiBull: `);
            html.select({
                id: "antiBullType",
                class: "Cselect",
                option: {
                    "Disable": {
                        id: "noab",
                        selected: true,
                    },
                    "When Reloaded": {
                        id: "abreload",
                    },
                    "Always": {
                        id: "abalway",
                    }
                }
            });
        });
        HTML.addDiv({
            id: "menuOther",
            class: "menuC",
            appendID: "menuHeadLine"
        }, (html) => {
            html.button({
                class: "menuB",
                innerHTML: "Connect Bots",
                onclick: "window.tryConnectBots()"
            });
            html.button({
                class: "menuB",
                innerHTML: "Disconnect Bots",
                onclick: "window.destroyBots()"
            });
            html.newLine();
            html.add(`Break Objects Range: `);
            html.text({
                id: "breakRange",
                class: "customText",
                value: "700",
                size: "3em",
                maxLength: "4"
            });
            html.newLine();
            html.add(`Render Movement: `);
            html.select({
                id: "predictType",
                class: "Cselect",
                option: {
                    "Disable Render": {
                        id: "disableRender",
                        selected: true
                    },
                    "X/Y and 2": {
                        id: "pre2",
                    },
                    "X/Y and 3": {
                        id: "pre3"
                    }
                }
            });
            html.newLine();
            html.add(`Render Placers: `);
            html.checkBox({
                id: "placeVis",
                class: "checkB",
            });
            html.newLine();
            html.add(`Bot Mode: `);
            html.select({
                id: "mode",
                class: "Cselect",
                option: {
                    "Clear Building": {
                        id: "clear",
                        selected: true
                    },
                    "Sync": {
                        id: "zync",
                    },
                    "Search": {
                        id: "zearch"
                    },
                    "Clear Everything": {
                        id: "fuckemup"
                    },
                    "Flex": {
                        id: "flex"
                    }
                }
            });
            html.newLine();
            html.add(`Bot Setup: `);
            html.select({
                id: "setup",
                class: "Cselect",
                option: {
                    "Dagger Musket": {
                        id: "dm",
                        selected: true
                    },
                    "Katana Hammer": {
                        id: "kh",
                    },
                    "Dagger Repeater-Crossbow": {
                        id: "dr"
                    },
                    "Sword Muzket": {
                        id: "zd"
                    }
                }
            });
            html.newLine();
            html.button({
                class: "menuB",
                innerHTML: "Toggle Another Visual",
                onclick: "window.toggleVisual()"
            });
            html.newLine();
        });
    });
    function toFancyTimeFormat(time) {
        let minutes = ~~((time % 3600) / 60);
        let seconds = ~~time % 60;
        if (seconds <= 9) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }
    let song ={
        '0:14': 'https://www.youtube.com/watch?v=LsWACxHMWBI',
        '0:0': 'https://www.youtube.com/watch?v=Fvblhv6Eke8&list=RDFvblhv6Eke8&start_radio=1',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
        '0:0': '',
    };
    const songchat1 = new Audio("https://cdn.discordapp.com/attachments/1175772907931176991/1226210664393998346/Muti_Azer_Bulbul_-_Ille_de_Sen_Official_Video.mp3?ex=6623f0ac&is=66117bac&hm=c1cfee9f9083aae11297915714c4b682e0d163b603b5e7e7870d9eeae0acc464&");
    let isPlaying = false;
    let currentPart = '';
    function toggleSong() {
        if (!isPlaying) {
            songchat1.play();
            songchat1.ontimeupdate = function(time) {
                let part = song[toFancyTimeFormat(Math.round(this.currentTime | 0))];
                if (part && part !== currentPart) {
                    currentPart = part;
                    io.send("6", part);
                }
            };
            songchat1.onended = function() {
                if (isPlaying) {
                    songchat1.play();
                }
            };
            isPlaying = true;
        } else {
            songchat1.pause();
            isPlaying = false;
        }
    }
    document.addEventListener("keypress", function(e) {
        if (e.key === "C") {
            toggleSong();
        }
    });

    let menuChatDiv = document.createElement("div");
    menuChatDiv.id = "menuChatDiv";
    document.body.appendChild(menuChatDiv);
    HTML.set("menuChatDiv");
    HTML.setStyle(`
            position: absolute;
            display: none;
            left: 0px;
            top: 25px;
          //  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.65);
            `);
    HTML.resetHTML();
    HTML.setCSS(`
                    .chDiv {
    color: #fff;
    padding: 10px;
    width: 357px;
    height: 217px;
    background-color: rgba(0, 0, 0, 0.2);
    font-family: "HammerSmith One", monospace;
 //   border-radius: 15px;
//    box-shadow: black 1px 2px 19px;
//backdrop-filter: blur(3px);

}
.chMainDiv {
    font-family: "Ubuntu";
    font-size: 16px;
    max-height: 215px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-x: hidden;
}
.chMainDiv::-webkit-scrollbar {
    width: 8px;
}
.chMainDiv::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
}
.chMainDiv::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.7);
}
.chMainBox {
display:none;
     position: absolute;
    left: 15px;
    bottom: 10px;
    width: 400px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.75);
    font-family: "HammerSmith One";
    font-size: 12px;
}
            `);
    HTML.startDiv({
        id: "mChDiv",
        class: "chDiv"
    }, (html) => {
        HTML.addDiv({
            id: "mChMain",
            class: "chMainDiv",
            appendID: "mChDiv"
        }, (html) => {});
        html.text({
            id: "mChBox",
            class: "chMainBox",
            //  placeHolder: `To chat click here or press "Enter" key`
        });
    });

    let menuChats = getEl("mChMain");
    let menuChatBox = getEl("mChBox");
    let menuCBFocus = false;
    let menuChCounts = 0;

    menuChatBox.value = "";
    menuChatBox.addEventListener("focus", () => {
        menuCBFocus = true;
    });
    menuChatBox.addEventListener("blur", () => {
        menuCBFocus = false;
    });

    function addMenuChText(name, message, color, noTimer) {
        HTML.set("menuChatDiv");
        color = color || "white";
        let time = new Date();
        let min = time.getMinutes();
        let hour = time.getHours();
        let text = ``;
        if (!noTimer) text += `${(hour < 10 ? '0' : '') + hour}:${(min < 10 ? '0' : '') + min}`;
        if (name) text += `${(!noTimer ? " - " : "") + name}`;
        if (message) text += `${(name ? ": " : !noTimer ? " - " : "") + message}\n`;
        HTML.addDiv({ id: "menuChDisp", style: `color: ${color}`, appendID: "mChMain" }, (html) => {
            html.add(text);
        });
        menuChats.scrollTop = menuChats.scrollHeight;
        menuChCounts++;
    }
    function chch(name, message, color, noTimer) {
        HTML.set("menuChatDiv");
        color = color || "white";
        let time = new Date();
        let text = ``;
        // if (name) text += `${(!noTimer ? " - " : "") + name}`;
        if (message) text += `${(name ? ": " : !noTimer ? "" : "") + message}\n`;
        HTML.addDiv({ id: "menuChDisp", style: `color: ${color}`, appendID: "mChMain" }, (html) => {
            html.add(text);
        });
        menuChats.scrollTop = menuChats.scrollHeight;
        menuChCounts++;
    }

    function resetMenuChText() {
        menuChats.innerHTML = ``;
        menuChCounts = 0;
        addMenuChText(null, "Chat '/help' for a list of chat commands.", "white", 1)
    }
    resetMenuChText();

    let menuIndex = 0;
    let menus = ["menuMain", "menuConfig", "menuOther"];
    window.changeMenu = function() {
        getEl(menus[menuIndex % menus.length]).style.display = "none";
        menuIndex++;
        getEl(menus[menuIndex % menus.length]).style.display = "block";
    };

    let mStatus = document.createElement("div");
    mStatus.id = "status";
    getEl("gameUI").appendChild(mStatus);
    HTML.set("status");
    HTML.setStyle(`
            display: block;
            position: absolute;
            color: #ddd;
            font: 15px HammerSmith One;
            bottom: 215px;
            left: 20px;
            `);
    HTML.resetHTML();
    HTML.setCSS(`
            .sizing {
                font-size: 15px;
            }
            .mod {
                font-size: 15px;
                display: inline-block;
            }
            `);
    HTML.startDiv({
        id: "uehmod",
        class: "sizing"
    }, (html) => {
        html.add(`Ping: `);
        HTML.addDiv({
            id: "pingFps",
            class: "mod",
            appendID: "uehmod"
        }, (html) => {
            html.add("None");
        });
        html.newLine();
        html.add(`Packet: `);
        HTML.addDiv({
            id: "packetStatus",
            class: "mod",
            appendID: "uehmod"
        }, (html) => {
            html.add("None");
        });
        html.newLine
        html.add(`Shame: `)
    });

    /*function modLog() {
                let logs = [];
                for (let i = 0; i < arguments.length; i++) {
                    logs.push(arguments[i]);
                }
                getEl("modLog").innerHTML = logs;
            }*/

    let openMenu = false;

    let WS = undefined;
    let socketID = undefined;

    let useWasd = false;
    let secPacket = 0;
    let secMax = 150;
    let secTime = 1000;
    let firstSend = {
        sec: false
    };
    let game = {
        tick: 0,
        tickQueue: [],
        tickBase: function(set, tick) {
            if (this.tickQueue[this.tick + tick]) {
                this.tickQueue[this.tick + tick].push(set);
            } else {
                this.tickQueue[this.tick + tick] = [set];
            }
        },
        tickRate: (1000 / config.serverUpdateRate),
        tickSpeed: 0,
        lastTick: performance.now()
    };
    let modConsole = [];

    let dontSend = false;
    let fpsTimer = {
        last: 0,
        time: 0,
        ltime: 0
    }
    let lastMoveDir = undefined;
    let lastsp = ["cc", 1, "__proto__"];

    WebSocket.prototype.nsend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(message) {
        if (!WS) {
            WS = this;
            WS.addEventListener("message", function(msg) {
                getMessage(msg);
            });
            WS.addEventListener("close", (event) => {
                if (event.code == 4001) {
                    window.location.reload();
                }
            });
        }
        if (WS == this) {
            dontSend = false;

            // EXTRACT DATA ARRAY:
            let data = new Uint8Array(message);
            let parsed = window.msgpack.decode(data);
            let type = parsed[0];
            data = parsed[1];
            //packet loggin console.log('#',{type,parsed,data})
            // SEND MESSAGE:
            if (type == "6") {

                if (data[0]) {
                    // ANTI PROFANITY:
                    let profanity = ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard", ];
                    let tmpString;
                    profanity.forEach((profany) => {
                        if (data[0].indexOf(profany) > -1) {
                            tmpString = "";
                            for (let i = 0; i < profany.length; ++i) {
                                if (i == 1) {
                                    tmpString += String.fromCharCode(0);
                                }
                                tmpString += profany[i];
                            }
                            let re = new RegExp(profany, "g");
                            data[0] = data[0].replace(re, tmpString);
                        }
                    });

                    // FIX CHAT:
                    data[0] = data[0].slice(0, 30);
                }

            } else if (type == "L") {
                // MAKE SAME CLAN:
                data[0] = data[0] + (String.fromCharCode(0).repeat(7));
                data[0] = data[0].slice(0, 7);
            } else if (type == "M") {
                // APPLY CYAN COLOR:
                data[0].name = data[0].name == "" ? "unknown" : data[0].name;
                data[0].moofoll = true;
                data[0].skin = data[0].skin == 10 ? "__proto__" : data[0].skin;
                lastsp = [data[0].name, data[0].moofoll, data[0].skin];
            } else if (type == "D") {
                if ((my.lastDir == data[0]) || [null, undefined].includes(data[0])) {
                    dontSend = true;
                } else {
                    my.lastDir = data[0];
                }
            } else if (type == "d") {
                if (!data[2]) {
                    dontSend = true;
                } else {
                    if (![null, undefined].includes(data[1])) {
                        my.lastDir = data[1];
                    }
                }
            } else if (type == "K") {
                if (!data[1]) {
                    dontSend = true;
                }
            } else if (type == "S") {
                instaC.wait = !instaC.wait;
                dontSend = true;
            } else if (type == "a") {
                if (data[1]) {
                    if (player.moveDir == data[0]) {
                        dontSend = true;
                    }
                    player.moveDir = data[0];
                } else {
                    dontSend = true;
                }
            }
            if (!dontSend) {
                let binary = window.msgpack.encode([type, data]);
                this.nsend(binary);

                // START COUNT:
                if (!firstSend.sec) {
                    firstSend.sec = true;
                    setTimeout(() => {
                        firstSend.sec = false;
                        secPacket = 0;
                    }, secTime);
                }

                secPacket++;
            }
        } else {
            this.nsend(message);
        }
    }

    function packet(type) {
        // EXTRACT DATA ARRAY:
        let data = Array.prototype.slice.call(arguments, 1);

        // SEND MESSAGE:
        let binary = window.msgpack.encode([type, data]);
        WS.send(binary);
    }

    function origPacket(type) {
        // EXTRACT DATA ARRAY:
        let data = Array.prototype.slice.call(arguments, 1);

        // SEND MESSAGE:
        let binary = window.msgpack.encode([type, data]);
        WS.nsend(binary);
    }

    window.leave = function() {
        origPacket("kys", {
            "frvr is so bad": true,
            "sidney is too good": true,
            "dev are too weak": true,
        });
    };

    //...lol
    let io = {
        send: packet
    };

    function getMessage(message) {
        let data = new Uint8Array(message.data);
        let parsed = window.msgpack.decode(data);
        let type = parsed[0];
        data = parsed[1];
        let events = {
            A: setInitData, // id: setInitData,
            //B: disconnect,
            C: setupGame, // 1: setupGame,
            D: addPlayer, // 2: addPlayer,
            E: removePlayer, // 4: removePlayer,
            a: updatePlayers, // 33: updatePlayers,
            G: updateLeaderboard, // 5: updateLeaderboard,here
            H: loadGameObject, // 6: loadGameObject,
            I: loadAI, // a: loadAI,
            J: animateAI, // aa: animateAI,
            K: gatherAnimation, // 7: gatherAnimation,
            L: wiggleGameObject, // 8: wiggleGameObject,
            M: shootTurret, // sp: shootTurret,
            N: updatePlayerValue, // 9: updatePlayerValue,
            O: updateHealth, // h: updateHealth,//here
            P: killPlayer, // 11: killPlayer,
            Q: killObject, // 12: killObject,
            R: killObjects, // 13: killObjects,
            S: updateItemCounts, // 14: updateItemCounts,
            T: updateAge, // 15: updateAge,
            U: updateUpgrades, // 16: updateUpgrades,
            V: updateItems, // 17: updateItems,
            X: addProjectile, // 18: addProjectile,
            Y: remProjectile, // 19: remProjectile,
            //Z: serverShutdownNotice,
            //0: addAlliance,
            //1: deleteAlliance,
            2: allianceNotification, // an: allianceNotification,
            3: setPlayerTeam, // st: setPlayerTeam,
            4: setAlliancePlayers, // sa: setAlliancePlayers,
            5: updateStoreItems, // us: updateStoreItems,
            6: receiveChat, // ch: receiveChat,
            7: updateMinimap, // mm: updateMinimap,
            8: showText, // t: showText,
            9: pingMap, // p: pingMap,
            0: pingSocketResponse,
        };
        if (type == "io-init") {
            socketID = data[0];
        } else {
            if (events[type]) {
                events[type].apply(undefined, data);
            }
        }
    }

    // MATHS:
    Math.lerpAngle = function(value1, value2, amount) {
        let difference = Math.abs(value2 - value1);
        if (difference > Math.PI) {
            if (value1 > value2) {
                value2 += Math.PI * 2;
            } else {
                value1 += Math.PI * 2;
            }
        }
        let value = value2 + ((value1 - value2) * amount);
        if (value >= 0 && value <= Math.PI * 2) return value;
        return value % (Math.PI * 2);
    };

    // REOUNDED RECTANGLE:
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        if (r < 0)
            r = 0;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    };

    // GLOBAL VALUES:
    function resetMoveDir() {
        keys = {};
        io.send("e");
    }


    let allChats = [];
    let ticks = {
        tick: 0,
        delay: 0,
        time: [],
        manage: [],
    };
    ais = [];
    let players = [];
    let alliances = [];
    let alliancePlayers = [];
    let allianceNotifications = [];
    let gameObjects = [];
    let liztobj = [];
    let projectiles = [];
    let deadPlayers = [];

    let breakObjects = [];

    let player;
    let playerSID;
    let tmpObj;

    let enemy = [];
    let nears = [];
    let near = [];

    let my = {
        reloaded: false,
        waitHit: 0,
        autoAim: false,
        revAim: false,
        ageInsta: true,
        reSync: false,
        bullTick: 0,
        anti0Tick: 0,
        antiSync: false,
        safePrimary: function(tmpObj) {
            return [0, 8].includes(tmpObj.primaryIndex);
        },
        safeSecondary: function(tmpObj) {
            return [10, 11, 14].includes(tmpObj.secondaryIndex);
        },
        lastDir: 0,
        autoPush: false,
        pushData: {}
    }
    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    window.accessories = [
        {
            id: 12,
            name: "Snowball",
            price: 1000,
            scale: 105,
            xOff: 18,
            desc: "no effect"
        }, {
            id: 9,
            name: "Tree Cape",
            price: 1000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 10,
            name: "Stone Cape",
            price: 1000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 3,
            name: "Cookie Cape",
            price: 1500,
            scale: 90,
            desc: "no effect"
        }, {
            id: 8,
            name: "Cow Cape",
            price: 2000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 11,
            name: "Monkey Tail",
            price: 2000,
            scale: 97,
            xOff: 25,
            desc: "Super speed but reduced damage",
            spdMult: 1.35,
            dmgMultO: 0.2
        }, {
            id: 17,
            name: "Apple Basket",
            price: 3000,
            scale: 80,
            xOff: 12,
            desc: "slowly regenerates health over time",
            healthRegen: 1
        }, {
            id: 6,
            name: "Winter Cape",
            price: 3000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 4,
            name: "Skull Cape",
            price: 4000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 5,
            name: "Dash Cape",
            price: 5000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 2,
            name: "Dragon Cape",
            price: 6000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 1,
            name: "Super Cape",
            price: 8000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 7,
            name: "Troll Cape",
            price: 8000,
            scale: 90,
            desc: "no effect"
        }, {
            id: 14,
            name: "Thorns",
            price: 10000,
            scale: 115,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 15,
            name: "Blockades",
            price: 10000,
            scale: 95,
            xOff: 15,
            desc: "no effect"
        }, {
            id: 20,
            name: "Devils Tail",
            price: 10000,
            scale: 95,
            xOff: 20,
            desc: "no effect"
        }, {
            id: 16,
            name: "Sawblade",
            price: 12000,
            scale: 90,
            spin: true,
            xOff: 0,
            desc: "deal damage to players that damage you",
            dmg: 0.15
        }, {
            id: 13,
            name: "Angel Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "slowly regenerates health over time",
            healthRegen: 3
        }, {
            id: 19,
            name: "Shadow Wings",
            price: 15000,
            scale: 138,
            xOff: 22,
            desc: "increased movement speed",
            spdMult: 1.1
        }, {
            id: 18,
            name: "Blood Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "restores health when you deal damage",
            healD: 0.2
        }, {
            id: 21,
            name: "Corrupt X Wings",
            price: 20000,
            scale: 178,
            xOff: 26,
            desc: "deal damage to players that damage you",
            dmg: 0.25
        }];
    window.weapons = [
        { id: 0, type: 0, name: "tool hammer", desc: "tool for gathering all resources", src: "hammer_1", length: 140, width: 140, xeOff: -3, yOff: 18, dmg: 25, range: 65, gather: 1, speed: 300 }, { id: 1, type: 0, age: 2, name: "hand axe", desc: "gathers resources at a higher rate", src: "axe_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 30, spdMult: 1, range: 70, gather: 2, speed: 400 }, { id: 2, type: 0, age: 8, pre: 1, name: "great axe", desc: "deal more damage and gather more resources", src: "great_axe_1", length: 140, width: 140, xOff: -8, yOff: 25, dmg: 35, spdMult: 1, range: 75, gather: 4, speed: 400 }, { id: 3, type: 0, age: 2, name: "short sword", desc: "increased attack power but slower move speed", src: "sword_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 46, dmg: 35, spdMult: .85, range: 110, gather: 1, speed: 300 }, { id: 4, type: 0, age: 8, pre: 3, name: "katana", desc: "greater range and damage", src: "samurai_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 59, dmg: 40, spdMult: .8, range: 118, gather: 1, speed: 300 }, { id: 5, type: 0, age: 2, name: "polearm", desc: "long range melee weapon", src: "spear_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 53, dmg: 45, knock: .2, spdMult: .82, range: 142, gather: 1, speed: 700 }, { id: 6, type: 0, age: 2, name: "bat", desc: "fast long range melee weapon", src: "bat_1", iPad: 1.3, length: 110, width: 180, xOff: -8, yOff: 53, dmg: 20, knock: .7, range: 110, gather: 1, speed: 300 }, { id: 7, type: 0, age: 2, name: "daggers", desc: "really fast short range weapon", src: "dagger_1", iPad: .8, length: 110, width: 110, xOff: 18, yOff: 0, dmg: 20, knock: .1, range: 65, gather: 1, hitSlow: .1, spdMult: 1.13, speed: 100 }, { id: 8, type: 0, age: 2, name: "stick", desc: "great for gathering but very weak", src: "stick_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 1, spdMult: 1, range: 70, gather: 7, speed: 400 }, { id: 9, type: 1, age: 6, name: "hunting bow", desc: "bow used for ranged combat and hunting", src: "bow_1", req: ["wood", 4], length: 120, width: 120, xOff: -6, yOff: 0, projectile: 0, spdMult: .75, speed: 600 }, { id: 10, type: 1, age: 6, name: "great hammer", desc: "hammer used for destroying structures", src: "great_hammer_1", length: 140, width: 140, xOff: -9, yOff: 25, dmg: 10, spdMult: .88, range: 75, sDmg: 7.5, gather: 1, speed: 400, hatid: 40 }, { id: 11, type: 1, age: 6, name: "wooden shield", desc: "blocks projectiles and reduces melee damage", src: "shield_1", length: 120, width: 120, shield: .2, xOff: 6, yOff: 0, spdMult: .7, speed: 0 }, { id: 12, type: 1, age: 8, pre: 9, name: "crossbow", desc: "deals more damage and has greater range", src: "crossbow_1", req: ["wood", 5], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 2, spdMult: .7, speed: 700, hatid: 20 }, { id: 13, type: 1, age: 9, pre: 12, name: "repeater crossbow", desc: "high firerate crossbow with reduced damage", src: "crossbow_2", req: ["wood", 10], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 3, spdMult: .7, speed: 300, hatid: 20 }, { id: 14, type: 1, age: 6, name: "mc grabby", desc: "steals resources from enemies", src: "grab_1", length: 130, width: 210, xOff: -8, yOff: 53, dmg: 0, steal: 250, knock: .2, spdMult: 1.05, range: 125, gather: 0, speed: 700 }, { id: 15, type: 1, age: 9, pre: 12, name: "musket", desc: "slow firerate but high damage and range", src: "musket_1", req: ["stone", 10], aboveHand: !0, rec: .35, armS: .6, hndS: .3, hndD: 1.6, length: 205, width: 205, xOff: 25, yOff: 0, projectile: 5, hideProjectile: !0, spdMult: .6, speed: 1500, hatid: 20 }],activeObjects = [{ name: "apple", desc: "restores 20 health when consumed", req: ["food", 10], consume: function (e) { return e.changeHealth(20, e) }, scale: 22, holdOffset: 15 }, { age: 3, name: "cookie", desc: "restores 40 health when consumed", req: ["food", 15], consume: function (e) { return e.changeHealth(40, e) }, scale: 27, holdOffset: 15 }, { age: 7, name: "pizza", desc: "restores 30 health and another 50 over 5 seconds", req: ["food", 30], consume: function (e) { return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0) }, scale: 27, holdOffset: 15 }, { name: "wood wall", desc: "provides protection for your village", req: ["wood", 10], projDmg: !0, health: 380, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 3, name: "stone wall", desc: "provides improved protection for your village", req: ["stone", 25], health: 900, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 7, pre: 1, name: "castle wall", desc: "provides powerful protection for your village", req: ["stone", 35], health: 1500, scale: 52, holdOffset: 20, placeOffset: -5 }, { name: "spikes", desc: "damages enemies when they touch them", req: ["wood", 20, "stone", 5], health: 400, dmg: 20, scale: 49, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 5, name: "greater spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 10], health: 500, dmg: 35, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 1, name: "poison spikes", desc: "poisons enemies when they touch them", req: ["wood", 35, "stone", 15], health: 600, dmg: 30, pDmg: 5, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 2, name: "spinning spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 20], health: 500, dmg: 45, turnSpeed: .003, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { name: "windmill", desc: "generates gold over time", req: ["wood", 50, "stone", 10], health: 400, pps: 1, turnSpeed: .0016, spritePadding: 25, iconLineMult: 12, scale: 45, holdOffset: 20, placeOffset: 5 }, { age: 5, pre: 1, name: "faster windmill", desc: "generates more gold over time", req: ["wood", 60, "stone", 20], health: 500, pps: 1.5, turnSpeed: .0025, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 8, pre: 1, name: "power mill", desc: "generates more gold over time", req: ["wood", 100, "stone", 50], health: 800, pps: 2, turnSpeed: .005, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 5, type: 2, name: "mine", desc: "allows you to mine stone", req: ["wood", 20, "stone", 100], iconLineMult: 12, scale: 65, holdOffset: 20, placeOffset: 0 }, { age: 5, type: 0, name: "sapling", desc: "allows you to farm wood", req: ["wood", 150], iconLineMult: 12, colDiv: .5, scale: 110, holdOffset: 50, placeOffset: -15 }, { age: 4, name: "pit trap", desc: "pit that traps enemies if they walk over it", req: ["wood", 30, "stone", 30], trap: !0, ignoreCollision: !0, hideFromEnemy: !0, health: 500, colDiv: .2, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 4, name: "boost pad", desc: "provides boost when stepped on", req: ["stone", 20, "wood", 5], ignoreCollision: !0, boostSpeed: 1.5, health: 150, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, doUpdate: !0, name: "turret", desc: "defensive structure that shoots at enemies", req: ["wood", 200, "stone", 150], health: 800, projectile: 1, shootRange: 700, shootRate: 2200, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "platform", desc: "platform to shoot over walls and cross over water", req: ["wood", 20], ignoreCollision: !0, zIndex: 1, health: 300, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "healing pad", desc: "standing on it will slowly heal you", req: ["wood", 30, "food", 10], ignoreCollision: !0, healCol: 15, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 9, name: "spawn pad", desc: "you will spawn here when you die but it will dissapear", req: ["wood", 100, "stone", 100], health: 400, ignoreCollision: !0, spawnPoint: !0, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "blocker", desc: "blocks building in radius", req: ["wood", 30, "stone", 25], ignoreCollision: !0, blocker: 300, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "teleporter", desc: "teleports you to a random point on the map", req: ["wood", 60, "stone", 60], ignoreCollision: !0, teleport: !0, health: 200, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }];


    function findClosestList(playerX, playerY, aiList) {
        let closestAI = null;
        let closestDistance = Infinity;

        aiList.forEach(ai => {
            if (true) {
                const distance = getDistance(playerX, playerY, ai.x, ai.y);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestAI = ai;
                }
            }
        });

        return closestAI;
    }
    const rangedWeapons = window.weapons.filter(weapon => weapon.projectile !== undefined);
    function hasRangedWeapon(equippedWeapons) {
        return equippedWeapons.some(weaponId =>
                                    rangedWeapons.some(rangedWeapon => rangedWeapon.id === weaponId)
                                   );
    }

    function isAIInRange(player, ai) {
        const playerWeapons = player.weapons; // [primaryWeaponId, secondaryWeaponId]
        const primaryWeapon = weapons.find(w => w.id === playerWeapons[0]);
        const secondaryWeapon = weapons.find(w => w.id === playerWeapons[1]);

        // Calculate distance between player and AI
        const distanceToAI = getDistance(player.x, player.y, ai.x, ai.y);

        // Check if AI is within range of either weapon
        const isInPrimaryRange = distanceToAI <= (primaryWeapon.range + 100);
        const isInSecondaryRange = secondaryWeapon && (distanceToAI <= secondaryWeapon.range) || false;

        return isInPrimaryRange || isInSecondaryRange;
    }

    function getDirection(player, target) {
        // Calculate the difference in x and y coordinates
        const dx = target.x - player.x;
        const dy = target.y - player.y;

        // Calculate the angle in radians
        const angleRad = Math.atan2(dy, dx);

        // Ensure the angle is in the range [0, 2*PI)
        const direction = (angleRad + 2 * Math.PI) % (2 * Math.PI);

        return direction;
    }

    async function waitTill() {
        while (my.autoPush || traps.inTrap) await sleep(0);
    }
    playerRadius=45
    _things = {
        get liztobj() { return liztobj },
        get traps() { return traps },
        get gameObjects() { return gameObjects },
        get selectWeapon() { return selectWeapon },
        get my() {
            return my
        },
        get packet() { return packet },
        get closeAI() {
            let rai=ais.filter(e=>e.visible)
            if (!rai.length) return;
            let ai = findClosestList(player.x, player.y, rai, weapons)
            const aiInRange = isAIInRange(player, ai, weapons);
            return { ai, aiInRange, targetDir: getDirection(player, ai) }
        },
        get player() {
            return player
        },
        get enemy() {
            return {
                enemy: findClosestList(player.x, player.y, enemy),
                get targetDir() {
                    return getDirection(player, this.enemy)
                }
            }
        },
        get enemy_() {
            return enemy
        }
    }

    function random(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function moveInDirection(player, direction, offset) {
        // Calculate the new position
        const dx = Math.cos(direction) * offset;
        const dy = Math.sin(direction) * offset;

        // Update the player's position
        player.x += dx;
        player.y += dy;

        console.log(`Player moved to: (${player.x}, ${player.y})`);
    }
    adjPercent=1
    worldScale = 1.5; //1.6 fullscreen
    let squareSize = 25; // You can change this value to resize squares
    const overlayCanvas = new element('canvas')
    .style({
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '10',
        pointerEvents: 'none'
    });

    const ctx = overlayCanvas.element.getContext('2d');
    document.getElementById('gameCanvas').parentNode.insertBefore(overlayCanvas.element, document.getElementById('gameCanvas'));

    let obstacles = new Set(); // Store coordinates of red squares (obstacles)
const MAX_PATHFINDING_ITERATIONS = 3000




steps = 6; // Number of steps to render for the path
// A* Node Constructor
class Node {
  constructor(x, y, g, h, parent = null) {
    this.x = x;
    this.y = y;
    this.g = g; // Cost from start node
    this.h = h; // Heuristic (estimated cost to end)
    this.f = g + h; // Total cost
    this.parent = parent;
  }
}

// Heuristic function (Manhattan Distance)
function heuristic(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// A* Pathfinding Function
function aStar(start, end) {
  const openSet = [new Node(start[0], start[1], 0, heuristic(start, end))];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Get the node with the lowest `f` value
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift();
    const key = `${current.x},${current.y}`;

    // If we reached the end, reconstruct the path
    if (current.x === end[0] && current.y === end[1]) {
      return reconstructPath(current);
    }

    closedSet.add(key);

    // Check neighbors (up, down, left, right)
    const neighbors = [
      [current.x + squareSize, current.y],
      [current.x - squareSize, current.y],
      [current.x, current.y + squareSize],
      [current.x, current.y - squareSize]
    ];

    for (const [nx, ny] of neighbors) {
      const neighborKey = `${nx},${ny}`;

      if (obstacles.has(neighborKey) || closedSet.has(neighborKey)) continue;

      const gScore = current.g + 1;
      const hScore = heuristic({ x: nx, y: ny }, { x: end[0], y: end[1] });
      const neighbor = new Node(nx, ny, gScore, hScore, current);

      const existing = openSet.find(n => n.x === nx && n.y === ny);

      if (!existing || gScore < existing.g) {
        openSet.push(neighbor);
      }
    }
  }

  return []; // No path found
}

// Reconstruct the Path from End to Start
function reconstructPath(node) {
  const path = [];
  let current = node;

  while (current) {
    path.unshift([current.x, current.y]);
    current = current.parent;
  }

  return path;
}

// Draw the Path Steps in White
function fillFirstPathStep(path) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  for (let i = 0; i < Math.min(steps, path.length); i++) {
    const [x, y] = path[i];
    if (!obstacles.has(`${x},${y}`)) {
      ctx.fillRect(x - squareSize / 2, y - squareSize / 2, squareSize, squareSize);
    }
  }
}

// Integrate A* with the Game Loop
function drawGrid() {
  reset();
  obstacles.clear();

  const width = overlayCanvas.element.width;
  const height = overlayCanvas.element.height;

  const centerX = width / 2;
  const centerY = height / 2;
  const { x: playerX, y: playerY } = _things.player;

  // Draw Grid
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  for (let x = 0; x <= width; x += squareSize) {
    for (let y = 0; y <= height; y += squareSize) {
      ctx.strokeRect(x, y, squareSize, squareSize);
    }
  }

  // Draw Obstacles
  _things.liztobj.filter(isObstacle).forEach(obj => {
    const { x: objX, y: objY } = obj;
    const offsetX = centerX + (objX - playerX) * worldScale;
    const offsetY = centerY + (objY - playerY) * worldScale;

    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(offsetX - squareSize / 2, offsetY - squareSize / 2, squareSize, squareSize);
    obstacles.add(`${offsetX},${offsetY}`);
  });

  // Draw Path to Enemies
  _things.enemy_.forEach(enemy => {
    const { x: enemyX, y: enemyY } = enemy;
    const offsetX = centerX + (enemyX - playerX) * worldScale;
    const offsetY = centerY + (enemyY - playerY) * worldScale;

    const path = aStar([centerX, centerY], [offsetX, offsetY]);
    fillFirstPathStep(path);
  });
}

// Resize Canvas and Redraw
function resizeCanvas() {
  overlayCanvas.element.width = window.innerWidth;
  overlayCanvas.element.height = window.innerHeight;
  drawGrid();
}
    function reset() {
  ctx.clearRect(0, 0, overlayCanvas.element.width, overlayCanvas.element.height);
}



    window.resizeCanvas=resizeCanvas

    function stop() {
        _things.player.moveDir && (
            _things.packet('a', null, 1)
        )
    }

    // Implementing the adjustDirection function
    function adjustDirection(player, desiredDirection, obstacles) {
        const avoidRadius = 60; // Adjust as needed
        const avoidAngle = Math.PI / 4; // 45 degrees

        let adjustedDirection = desiredDirection;

        for (let obstacle of obstacles) {
            // Calculate the distance and angle to the obstacle
            const dx = obstacle.x - player.x;
            const dy = obstacle.y - player.y;
            const distance = Math.hypot(dx, dy);

            if (distance < avoidRadius) {
                const angleToObstacle = Math.atan2(dy, dx);
                let angleDifference = angleToObstacle - desiredDirection;

                // Normalize angleDifference to [-PI, PI]
                if (angleDifference > Math.PI) angleDifference -= 2 * Math.PI;
                if (angleDifference < -Math.PI) angleDifference += 2 * Math.PI;

                if (Math.abs(angleDifference) < avoidAngle) {
                    // Obstacle is directly ahead, adjust direction
                    if (angleDifference > 0) {
                        // Obstacle is to the right, turn left
                        adjustedDirection -= avoidAngle;
                    } else {
                        // Obstacle is to the left, turn right
                        adjustedDirection += avoidAngle;
                    }
                    // Ensure adjustedDirection is within [0, 2*PI]
                    adjustedDirection = (adjustedDirection + 2 * Math.PI) % (2 * Math.PI);
                    // Break since we've adjusted for the nearest obstacle
                    break;
                }
            }
        }

        return adjustedDirection;
    }

    function isObstacle(obj) {
        const hazardousNames = ["spikes", "greater spikes", "poison spikes", "spinning spikes", "pit trap"];
        // Objects that block movement or are hazardous
        return (
            (obj.health && !obj.ignoreCollision && !obj.hideFromEnemy) || // Blocks movement
            hazardousNames.includes(obj.name)                            // Is hazardous
        );
    }

    function getObstaclesNearPlayer(player, gameObjects) {
        const obstacleObjects = [];

        gameObjects.forEach(obj => {
            if (isObstacle(obj)) {
                const distance = getDistance(player.x, player.y, obj.x, obj.y);
                if (distance < 500) { // Adjust the detection radius as needed
                    obstacleObjects.push(obj);
                }
            }
        });

        return obstacleObjects;
    }

    // breaker useSpam farmAi
    let ids = {
        faster_windmill: 11,
        greater_spikes: 7,
        pit_trap: 15,
        power_mill: 12,
        spikes: 6,
        poison_spike: 8,
        spinning_pikes: 9,
        teleporter: 22,
        turret: 17,
        windmill: 10
    };

    autoGo = false
    breaker = false
    isMain = false
    useSpam = false
    farmAi = 0
    autoShield = true
    hasShield = false
    followID = false
    holdingShield = false
    autoRuby = 0
    breakOnly = false
    aimRuby = 0
    let alive = false
    rubyDir = -0.63
    onlybreaker=false
    chat = (msg) => _things.packet("6", msg);
    var breakk = false
    var canAtk = id => player.reloads[id] == 0;
    let oldAge = 0
    var sleep = ms => new Promise(a => setTimeout(a, ms));

    !async function () {
        for (; ;) {
            await sleep(0);
            let aliveNow = _things.player ? _things.player.health >= 0.01 : false
            if (alive != aliveNow) {
                console.log(aliveNow ? "Alive" : "Died")
                if (aliveNow && autoRubyOnSpawn) {
                    autoRuby = 1
                    await sleep(200)
                }
            }
            alive = aliveNow
            if (player && oldAge != player.age) {
                oldAge = player.age
                if (items2[oldAge - 1]) {
                    console.log('test', player.age, oldAge, items2[oldAge - 1])
                    _things.packet('H', items2[oldAge - 1])
                    autoGo && (stop());
                    await sleep(300)
                    continue;
                }
            }
        }
    }()
    function getObjectsInLineOfSight(A, B) {
    return _things.liztobj
        .filter((obj) => obj.active && obj.render) // Filter active and rendered objects
        .filter((obj) => {
            const { x: cx, y: cy, scale } = obj;
            const radius = scale / 2;

            const x1 = A.x;
            const y1 = A.y;
            const x2 = B.x;
            const y2 = B.y;

            const dx = x2 - x1;
            const dy = y2 - y1;

            const fx = x1 - cx;
            const fy = y1 - cy;

            const a = dx * dx + dy * dy;
            const b = 2 * (fx * dx + fy * dy);
            const c = fx * fx + fy * fy - radius * radius;

            let discriminant = b * b - 4 * a * c;

            if (discriminant < 0) {
                // No intersection
                return false;
            } else {
                discriminant = Math.sqrt(discriminant);

                const t1 = (-b - discriminant) / (2 * a);
                const t2 = (-b + discriminant) / (2 * a);

                // Check if at least one of the intersection points is within the segment
                if ((t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1)) {
                    return true;
                }
                return false;
            }
        })
        .filter(e=>e.name?!e.name.includes('trap')&&!e.name.includes('form'):false)
}

    autoBow=false;
    !async function () {
        //return;
        var sleep = ms => new Promise(a => setTimeout(a, ms));
        while (true) {
            try {
                player&&(GM_setValue(player.id, { x: player.x, y: player.y }))
                if (!autoGo && isMain) { (isMain && (GM_setValue('mainPos', { x: player.x, y: player.y })), await sleep(0)); continue };
                if (!autoGo) { await sleep(0); continue };
                my.autoAim = false;
                clicks.left = false
                clicks.right = false
                if (nearspiker) { stop(); await sleep(0); continue }
                let setAim = false
                let hasTurrent = _things.player.items.includes(17) || _things.player.itemCounts.hasOwnProperty('7')
                await waitTill()
                let m = !GM_getValue('stay') ? GM_getValue('mainPos') : player;
                const offset = toRad(random([0, 0, -20, 20, -25, 25]));
                const closestEnemy = _things.enemy.enemy;
                var playerWeapons = player.weapons;
                var primaryWeapon = weapons.find(w => w.id === playerWeapons[0]);
                var secondaryWeapon = weapons.find(w => w.id === playerWeapons[1]);
                var weaponToUse = primaryWeapon.dmg < 9 && secondaryWeapon ? secondaryWeapon : primaryWeapon;
                var currentIndex = _things.player.weapons.indexOf(_things.player.weaponIndex)
                var filtered=_things.liztobj.filter((tmp, tmpObj) => (tmpObj = tmp, tmpObj.active && _things.liztobj.includes(tmp) && tmpObj.render));
                var list_ = filtered.filter(e => e.id && !e.name.includes('mill') && !e.name.includes('mill'));
                var list__ = filtered.filter(targetItem => targetItem.id && !(targetItem.name.includes('pike') || targetItem.name.includes('trap')))
                var anyButTrapAndSpike = list_.filter(e => !(e.name.includes('pike') || e.name.includes('rap')))
                const avoidPort = getEl("weaponGrind").checked ? [] : list_.filter(obj => obj.name.includes('port'));
                list_ = list_.filter(e => !e.name.includes('port'))
                const hasRanged=secondaryWeapon?.projectile !== undefined
                const closeItem = findClosestList(player.x, player.y, list_);
                const itemsToBreak = list_.filter(item => {
                    const distanceToMain = getDistance(m.x, m.y, item.x, item.y);
                    return distanceToMain <= 500;
                });
                const itemsToBreak_ = list__.filter(item => {
                    const distanceToMain = getDistance(player.x, player.y, item.x, item.y);
                    return distanceToMain <= 500;
                });
                const obstacles = getObstaclesNearPlayer(player, _things.liztobj);
                //enemy stuff
                const targetDirEnemy = closestEnemy && (_things.enemy.targetDir + offset);
                const distanceToEnemy = closestEnemy && (getDistance(player.x, player.y, closestEnemy.x, closestEnemy.y));
                const maxWeaponRange = 100 + 98;
                autoShield = GM_getValue('shield') && _things.player.weapons[1] == 11 || false;
                let hasSpace=_things.liztobj.filter((tmp, tmpObj) => (tmpObj = tmp, tmpObj.active && _things.liztobj.includes(tmp) && tmpObj.render)).filter(e => !!e.id ).length?(function(a){return getDistance(_things.player.x, _things.player.y,a.x,a.y)<170})(findClosestList(_things.player.x, _things.player.y, _things.liztobj.filter((tmp, tmpObj) => (tmpObj = tmp, tmpObj.active && _things.liztobj.includes(tmp) && tmpObj.render)).filter(e => !!e.id ))):true
                if (autoRuby && hasTurrent && _things.player.age >= 8 && hasSpace) {
                    getEl("weaponGrind").checked = true;
                    let wI = 0
                    if (primaryWeapon.id != 8) {
                        console.log('Grinding main Weapon');
                        selectWeapon(player.weapons[wI]);
                        await sleep(300);

                        let attempts = 0; // Safety counter to prevent infinite loops
                        const maxAttempts = 50; // Maximum number of attempts

                        while (player.weaponVariant != 3 && attempts < maxAttempts) {
                            selectWeapon(player.weapons[wI]);
                            buyEquip(player.reloads[player.weapons[wI]] == 0 ? 40 : 6, 0);
                            _things.packet("d", 1, rubyDir, 1);
                            _things.packet("d", 0, rubyDir, 1);
                            await sleep(99)
                            stop();
                            while (player.reloads[player.weapons[wI]]) (await sleep(0), waitingFor = 'no !')
                        }

                        // If max attempts are reached, log a message to avoid freezing
                        if (attempts >= maxAttempts) {
                            console.log("Max attempts reached while grinding main weapon");
                        }
                    }
                    wI = 1
                    selectWeapon(player.weapons[1]);
                    await sleep(300);
                    secondaryWeapon = weapons.find(w => w.id === playerWeapons[1]);

                    if (!secondaryWeapon.req) {
                        let attempts = 0; // Reset safety counter for secondary weapon
                        console.log('Doing Secondary :>')
                        while (player.weaponVariant != 3) {
                            selectWeapon(player.weapons[wI]);
                            buyEquip(player.reloads[player.weapons[wI]] == 0 ? (setTimeout(() => { }), 40) : 6, 0);
                            _things.packet("d", 1, rubyDir, 1);
                            _things.packet("d", 0, rubyDir, 1);
                            stop();
                            await sleep(99)
                            while (player.reloads[player.weapons[wI]]) (await sleep(0), waitingFor = 'no !')
                        }
                    }
                    selectWeapon(player.weapons[0]);
                    autoRuby = false;
                    getEl("weaponGrind").checked = false
                    await sleep(300)
                    continue;
                } else if (autoRuby) {
                    console.log('Waiting for Stuff?!', { autoRuby, hasTurrent, age: _things.player.age });
                }
                var closeObjs=closestEnemy?getObjectsInLineOfSight(_things.enemy?.enemy,_things.player):[]
                closestEnemy&&(enemy.forEach(e => {
                    //has ranged weapon
                    let w = weapons.find(weapon => weapon.id == e.primaryIndex && weapon.req)
                    w && w.name && (w = (e.reloads[w.id] == 0 && e.dir.toFixed(1) == getDirection(e, player).toFixed(1)))
                    my.autoAim = false;
                    let shieldDir = getDirection(player, e)
                    w && (packet('D', shieldDir), setAim = true);
                }))
                breaker = GM_getValue('breaker') || false;
                if (!breakk && breakk != breaker && closestEnemy) chat('Sorry but this bot gotta blast');
                else if (breakk && breakk != breaker && closestEnemy) chat('Time for Some action :p');
                breakk = breaker
                useSpam = GM_getValue('useSpam') || false;
                farmAi = GM_getValue('farmAi') || false;
                isMain = false;
                var moved = false
                avoidPort.forEach(portalObj => {
                    const portDist = getDistance(player.x, player.y, portalObj.x, portalObj.y);
                    const portDirection = getDirection(player, portalObj);

                    if (portDist < 300) { // If near "port" object, avoid it
                        const moveDir = _things.player.moveDir; // Current move direction in rads

                        // Calculate the difference between the player's direction and the portal's direction
                        let angleDifference = portDirection - moveDir;

                        // Normalize the angleDifference to the range [-PI, PI]
                        if (angleDifference > Math.PI) {
                            angleDifference -= 2 * Math.PI;
                        } else if (angleDifference < -Math.PI) {
                            angleDifference += 2 * Math.PI;
                        }

                        // Adjust the direction slightly to avoid the portal
                        let escapeDir;
                        if (angleDifference > 0) {
                            // Move slightly to the left
                            escapeDir = moveDir - 0.5; // Adjust this angle as needed
                        } else {
                            // Move slightly to the right
                            escapeDir = moveDir + 0.5; // Adjust this angle as needed
                        }

                        // Ensure escapeDir is within the range [0, 2*PI]
                        escapeDir = (escapeDir + 2 * Math.PI) % (2 * Math.PI);
                        moved = true
                        _things.packet('a', escapeDir, 1); // Move in the adjusted direction
                        return;
                    }
                });
                autoChat = false
                const testing=true

                // If autoBow is enabled and the primary weapon is a bow, activate auto-aim and auto-fire

                if(autoBow&&closestEnemy&&!breaker){
                    console.log({
                        hasRanged,
                        closestEnemy,
                        autoBow,
                        closeObjs
                    })
                    if(closeObjs.length){
                        const targetItem = findClosestList(player.x, player.y, closeObjs);
                        let usePrime = 0
                        if (targetItem.name?.includes('pike') || targetItem.name?.includes('trap') && !primaryWeapon.name.includes('tick')) {
                            usePrime = 1
                        }
                        const dir = getDirection(player, targetItem);
                        const dist = getDistance(player.x, player.y, targetItem.x, targetItem.y);
                        const range = (weapons.filter(e => e.type == 0).find(w => w.id === playerWeapons[1]) || weapons.find(w => w.id === playerWeapons[0])).range + 30;
                        var usedID = usePrime ? player.weapons[0] : _things.player.weaponIndex == 10 ? 10 : _things.player.weapons[1] === 10 ? 10 : _things.player.weapons[0]
                        if (dist <= range) {
                            selectWeapon(usedID);
                            !moved && stop();

                            !player.reloads[usedID] && (buyEquip(player.reloads[usedID] == 0 ? 40 : 6, 0), _things.packet("d", 1, dir, 1), _things.packet("d", 0, dir, 1))
                        } else {
                            moveInDirection(player, dir, 25);
                            if (!moved) {
                                // Adjust direction to avoid obstacles
                                let adjustedDir = adjustDirection(player, dir, obstacles);
                                _things.packet('a', adjustedDir, 1);
                            }
                        }
                    }
                    else if(!player.reloads[player.weapons[1]]){
                        buyEquip(1,0)
                        setTimeout(()=>{
                            buyEquip(20,0)
                        },100)
                        my.autoAim=true
                        selectWeapon(player.weapons[1]);
                        _things.packet("d", 1, targetDirEnemy, 1);
                        _things.packet("d", 0, targetDirEnemy, 1);
                        if(distanceToEnemy<secondaryWeapon?.range/4)_things.packet('a', adjustDirection(player, desiredDir, obstacles)+toRad(180), 1);
                        else if(distanceToEnemy>(secondaryWeapon?.range/2)){
                            let desiredDir = targetDirEnemy + toRad(random([45, -45]));
                            let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                            _things.packet('a', adjustedDir, 1)
                            moved=1
                        }
                        else stop();
                    }
                }else
                if (farmAi && _things.closeAI) {
                    const ai = _things.closeAI.ai;
                    const player = _things.player;

                    const distanceToAI = getDistance(ai.x, ai.y, player.x, player.y) - weaponToUse.range / 2;
                    const minSafeDistance = 250;
                    const minSafeDistance2 = 120;

                    // Get the list of obstacles near the player
                    const obstacles = getObstaclesNearPlayer(player, _things.liztobj);

                    if (distanceToAI < minSafeDistance && distanceToAI > minSafeDistance2) {
                        // Check if the player is using the "Monkey Tail" accessory (ID 11)
                        if (player.tailIndex === 11) {
                            // Switch accessory to none (ID 0)
                            buyEquip(7, 1); // Assuming buyEquip(itemId, itemType), where itemType 1 is accessory
                        }
                        if(!player.reloads[weaponToUse.id]){
                            buyEquip(7, 0)
                            _things.packet("d", 1, _things.closeAI.targetDir, 1);
                            _things.packet("d", 0, _things.closeAI.targetDir, 1);
                        }
                        stop();
                    } else if (distanceToAI > minSafeDistance) {
                        // Move towards the target
                        let desiredDir =getDirection(player,ai);
                        // Adjust direction to avoid obstacles
                        let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                        _things.packet('a', adjustedDir, 1);
                    } else {
                        // Move away from the target
                        let escapeDir = getDirection(player, ai) + Math.PI; // Opposite direction from AI
                        escapeDir = (escapeDir + 2 * Math.PI) % (2 * Math.PI); // Normalize angle
                        // Adjust direction to avoid obstacles
                        let adjustedEscapeDir = adjustDirection(player, escapeDir, obstacles);
                        _things.packet('a', adjustedEscapeDir, 1); // Move away
                        if(!player.reloads[weaponToUse.id]){
                            buyEquip(7, 0)
                            _things.packet("d", 1, _things.closeAI.targetDir, 1);
                            _things.packet("d", 0, _things.closeAI.targetDir, 1);
                        }
                    }
                }
                else
                if (closestEnemy && !breaker&&!onlybreaker &&!autoBow) {
                    autoChat=1
                    let inenemyRange = distanceToEnemy <= weapons.find(e => e.id == (_things.enemy.enemy.primaryIndex || 5)).range + 25;
                    let mustShield = (distanceToEnemy <= maxWeaponRange) && (inenemyRange > maxWeaponRange) && _things.player.weapons[1] == 11;
                    shielding = mustShield;
                    if (distanceToEnemy <= maxWeaponRange - (!autoShield ? 50 : 0)) {
                        if (!autoShield && !autos.antibull && !traps.inTrap && useSpam && _things.player.skinIndex != 11 && _things.enemy.enemy.skinIndex != 11) {
                            clicks.left = 1;
                            my.autoAim = true;
                        } else if (autoShield && _things.enemy.enemy && _things.player.weapons[1] == 11 && _things.player.weaponCode != 11) {
                            my.autoAim = true;
                            clicks.left = 0;
                            selectWeapon(player.weapons[1]);
                            shielding = true;
                            moved = 1
                            // Adjust direction to avoid obstacles
                            let desiredDir = targetDirEnemy + toRad(15);
                            let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                            _things.packet('a', adjustedDir, 1); // Move towards the enemy at an angle
                        } else {
                            clicks.left = 0;
                            my.autoAim = 0;
                        }
                        if (distanceToEnemy < 120) {
                            // Adjust direction to avoid obstacles
                            let desiredDir = targetDirEnemy + toRad(random([45, -45]));
                            let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                            _things.packet('a', adjustedDir, 1)
                        } else {
                            // Adjust direction to avoid obstacles
                            let desiredDir = targetDirEnemy + offset;
                            let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                            _things.packet('a', adjustedDir, 1);
                            _things.packet("d", 1, adjustedDir, 1), _things.packet("d", 0, adjustedDir, 1)
                        }
                    }

                    else {
                        if (filtered.filter(e=>!e.ignoreCollision).length > 0) {
                            const targetItem = findClosestList(player.x, player.y, filtered.filter(e=>!e.ignoreCollision));
                            let usePrime = 0
                            if (targetItem.name.includes('pike') || targetItem.name.includes('trap') && !primaryWeapon.name.includes('tick')) {
                                usePrime = 1
                            }
                            const dir = getDirection(player, targetItem);
                            const dist = getDistance(player.x, player.y, targetItem.x, targetItem.y);
                            const range = 110
                            console.log({ range, dist, dir, targetItem })
                            var usedID = usePrime ? player.weapons[0] : _things.player.weaponIndex == 10 ? 10 : _things.player.weapons[1] === 10 ? 10 : _things.player.weapons[0]
                            if (dist <= range) {
                                selectWeapon(usedID);
                                !player.reloads[usedID] && (buyEquip(player.reloads[usedID] == 0 ? 40 : 6, 0), _things.packet("d", 1, dir, 1), _things.packet("d", 0, dir, 1))
                            }
                        }
                        if (mustShield && _things.player.weapons[1] == 11 && _things.player.weaponCode != 11) {
                            my.autoAim = true
                            selectWeapon(player.weapons[1]);
                        }
                        clicks.left = 0
                        my.autoAim = false
                        // Move towards enemy
                        if (distanceToEnemy > 500 && _things.player.weaponIndex != 10 && _things.player.weapons[1] == 10) {
                            selectWeapon(player.weapons[1]); // Select hammer
                        } else if (_things.player.weaponIndex == 11) { selectWeapon(player.weapons[0]); }
                        //clicks.right=true
                        if (!moved) {
                            // Adjust direction to avoid obstacles
                            let adjustedDir = adjustDirection(player, targetDirEnemy, obstacles);
                            _things.packet('a', adjustedDir, 1);
                        }
                        if (itemsToBreak_.length > 0 && distanceToEnemy > 600) {

                            const targetItem = findClosestList(player.x, player.y, itemsToBreak_);
                            let usePrime = 0
                            if (targetItem.name.includes('pike') || targetItem.name.includes('trap') && !primaryWeapon.name.includes('tick')) {
                                usePrime = 1
                                br = 0
                            }
                            const dir = getDirection(player, targetItem);
                            const dist = getDistance(player.x, player.y, targetItem.x, targetItem.y);
                            const range = 110
                            console.log({ range, dist, dir, targetItem })
                            var usedID = usePrime ? player.weapons[0] : _things.player.weaponIndex == 10 ? 10 : _things.player.weapons[1] === 10 ? 10 : _things.player.weapons[0]
                            if (dist <= range) {
                                selectWeapon(usedID);
                                didHit = 1
                                !player.reloads[usedID] && (buyEquip(player.reloads[usedID] == 0 ? 40 : 6, 0), _things.packet("d", 1, dir, 1), _things.packet("d", 0, dir, 1))
                            }
                        }
                    }
                    _things.traps.inTrap && (my.autoAim = false);
                    let waitTime = _things.traps.inTrap ? 300 : 100
                    }
                //other
                else if (m) {
                    if (itemsToBreak.length > 0) {
                        const targetItem = findClosestList(player.x, player.y, itemsToBreak);
                        let usePrime = 0
                        if (targetItem.name?.includes('pike') || targetItem.name?.includes('trap') && !primaryWeapon.name.includes('tick')) {
                            usePrime = 1
                        }
                        const dir = getDirection(player, targetItem);
                        const dist = getDistance(player.x, player.y, targetItem.x, targetItem.y);
                        const range = (weapons.filter(e => e.type == 0).find(w => w.id === playerWeapons[1]) || weapons.find(w => w.id === playerWeapons[0])).range + 30;
                        var usedID = usePrime ? player.weapons[0] : _things.player.weaponIndex == 10 ? 10 : _things.player.weapons[1] === 10 ? 10 : _things.player.weapons[0]
                        if (dist <= range) {
                            selectWeapon(usedID);
                            !moved && stop();

                            !player.reloads[usedID] && (buyEquip(player.reloads[usedID] == 0 ? 40 : 6, 0), _things.packet("d", 1, dir, 1), _things.packet("d", 0, dir, 1))
                        } else {
                            moveInDirection(player, dir, 25);
                            if (!moved) {
                                // Adjust direction to avoid obstacles
                                let adjustedDir = adjustDirection(player, dir, obstacles);
                                _things.packet('a', adjustedDir, 1);
                            }
                        }
                    }
                    else {
                        const distanceToMain = getDistance(player.x, player.y, m.x, m.y);
                        let desiredDir = getDirection(player, m) + offset;
                        if (distanceToMain <= 300) {
                            stop();
                            await sleep(100)
                        } else {
                            if (itemsToBreak_.length > 0) {
                                const targetItem = findClosestList(player.x, player.y, itemsToBreak_);
                                let usePrime = 0
                                if (targetItem.name.includes('pike') || targetItem.name.includes('trap') && !primaryWeapon.name.includes('tick')) {
                                    usePrime = 1
                                }
                                const dir = getDirection(player, targetItem);
                                const dist = getDistance(player.x, player.y, targetItem.x, targetItem.y);
                                const range = 110
                                console.log({ range, dist, dir, targetItem })
                                var usedID = usePrime ? player.weapons[0] : _things.player.weaponIndex == 10 ? 10 : _things.player.weapons[1] === 10 ? 10 : _things.player.weapons[0]
                                if (dist <= range) {
                                    selectWeapon(usedID);
                                    !player.reloads[usedID] && (buyEquip(player.reloads[usedID] == 0 ? 40 : 6, 0), _things.packet("d", 1, dir, 1), _things.packet("d", 0, dir, 1))
                                }
                            }
                            console.log('Going', { itemsToBreak })
                            if (!moved) {
                                // Adjust direction to avoid obstacles
                                let adjustedDir = adjustDirection(player, desiredDir, obstacles);
                                _things.packet('a', adjustedDir, 1);
                            }
                            let waitTime = _things.traps.inTrap ? 300 : 100
                            }
                    }
                }
                await sleep(_things.traps.inTrap ? 300 : 150)
            } catch (err) {
                console.log('Bot Error:', err)
                await sleep(1000)
            }
        }
    }()
    function sendChat(msg){
        packet("6", msg)
    }
    !function(){
        window.selects = [];
        info2 = {};
        console.log('User is in fact playing moomoo OG');
        ageBarBody.style.transition = '1s';
        items2 = {};

        let teleport = 37,
            hand_axe = 1,
            greater_spike = 23,
            great_axe = 2,
            fast_mill = 28,
            mineT = 29,
            sapling = 30,
            short_sword = 3,
            katana = 4,
            polearm = 5,
            bat = 6,
            daggers = 7,
            stick = 8,
            castle_wall = 21,
            healing_pad = 35,
            turret = 33,
            platform = 34,
            hunting_bow = 9,
            cheese = 18,
            great_hammer = 10,
            wooden_shield = 11,
            crossbow = 12,
            repeater_crossbow = 13,
            mc_grabby = 14,
            stonewall = 20,
            musket = 15,
            cookie = 17,
            trap = 31,
            boost = 32,
            blocker = 37,
            power_mill = 28,
            poison_spike = 24,
            spining_spike = 25,
            spawnpad = 36,
            Age1 = null,
            Age2 = null,
            Age3 = null,
            Age4 = null,
            Age5 = null,
            Age6 = null,
            Age7 = null,
            Age8 = null,
            ranged = [crossbow, repeater_crossbow, musket, hunting_bow],
            age = {
                1: { hand_axe: 1, short_sword: 3, polearm: 5, daggers: 7, stick: 8, bat: 6 },
                2: { cookie: 17, stonewall: 20 },
                3: { trap: 31, boost: 32 },
                4: { greater_spike: 23, mine: 29, sapling: 30, fast_mill: 27 },
                5: { hunting_bow: 9, great_hammer: 10, mc_grabby: 14, wooden_shield: 11 },
                6: { cheese: 18, castle_wall: 21, turret: 33, platform: 34, healing_pad: 35, blocker: 37, teleport: 38 },
                7: { great_axe: 2, crossbow: 12, katana: 4, power_mill: 28 },
                8: { repeater_crossbow: 13, musket: 15, poison_spike: 24, spining_spike: 25, spawnpad: 36 }
            },
            div = document.createElement('div');

        weapons.forEach(e => {
            e.age && (age[e.age - 1][e.name.split(' ').join('_')] = e.id);
        });

        // Function to update the selection path based on dependencies
        function validatePath(ageIndex, selectedId) {
            const selectedName = Object.keys(age[ageIndex]).find(key => age[ageIndex][key] === selectedId);
            console.log(ageIndex)
            // Dependencies for Musket
            if (ranged.includes(selectedId)) {
                if (!items2[5] || items2[5] !== hunting_bow) {
                    items2[5] = hunting_bow;
                    document.getElementById('sel5').value = hunting_bow;
                    //sendChat('Selected Bow for Musket');
                }
                if (!items2[7] || items2[7] !== crossbow) {
                    items2[7] = crossbow;
                    document.getElementById('sel7').value = crossbow;
                    //sendChat('Selected Crossbow for Musket');
                }
            }
            // Dependencies for Katana
            if (selectedId === katana && (!items2[1] || items2[1] !== short_sword)) {
                items2[1] = short_sword;
                document.getElementById('sel1').value = short_sword;
                //sendChat('Selected Short Sword for Katana');
            }
            if (selectedId === great_axe && (!items2[1] || items2[1] !== hand_axe)) {
                items2[1] = hand_axe;
                document.getElementById('sel1').value = hand_axe;
                //sendChat('Selected Short Sword for Katana');
            }
        }

        (function(f = (e, b) => {
            window.items2[b] = e.target.selectedOptions[0].value;
            console.log([b], e.target.selectedOptions[0].value);
        }, br = document.createElement('br')) {
            for (let a in age) {
                div.append(document.createElement('br'));
                console.log(a);
                let s = document.createElement('select');
                window.selects.push([a, s]);
                s.id = 'sel' + a;
                s.classname = a;
                let d = document.createElement('span');
                d.innerText = `Age ${a}:`;
                Object.keys(age[a]).forEach((e) => {
                    console.log(e, age[a][e]);
                    let b = document.createElement('option');
                    b.value = age[a][e];
                    b.innerText = e;
                    s.append(b);
                });
                div.append(d);
                div.append(s);

                s.onchange = function(e) {
                    var svalue = e.target.value;
                    var ageIndex = e.target.classname;
                    console.log('Age', ageIndex, 'to', svalue);
                    items2[ageIndex] = svalue;
                    validatePath(ageIndex, parseInt(svalue));
                };
            }
            setupCard.append(div);
        })();

        window.spikes = [25, 23, 24, 6, 7, 9];
        info2.ageitems = age;
        info2.ageitems['0'] = { wood_wall: 19, spike: 6, windmill: 10 };

        window.stoped = 1;
    }();

    //chat commands
    !function(){
        var _prefix = GM_getValue('prefix') || '!';
        const _commands = {
            "prefix": function(args){
                if (args.length > 0) {
                    _prefix = args[0];
                    GM_setValue('prefix', _prefix);
                    sendChat(`Prefix now iz ${_prefix} mew!`);
                }
            },
            "main": function(){
                isMain = !isMain;
                sendChat(`Main mode flip-flopped! XD`);
            },
            "bot": function(){
                autoGo = !autoGo;
                sendChat(`Bo-o-o-otMode iz ${autoGo ? "ON" : "OFF"} now!`);
            },
            "breaker": function(){
                breaker = !GM_getValue('breaker', false);
                GM_setValue('breaker', breaker);
                sendChat(`Breaker iz ${breaker ? "ON" : "OFF"} now!`);
            },
            "useSpam": function(){
                useSpam = !GM_getValue('useSpam', false);
                GM_setValue('useSpam', useSpam);
                sendChat(`Spam mode iz ${useSpam ? "ON" : "OFF"} zzz!`);
            },
            "farmAi": function(){
                farmAi = !GM_getValue('farmAi', false);
                GM_setValue('farmAi', farmAi);
                sendChat(`FarmAI iz ${farmAi ? "ON" : "OFF"} baaa!`);
            },
            "spawn": function(a){
                if(Number(a)==NaN)return;
                for(let i=0;i<a;i++){open(location.href,'bot')}
            },

            "stay": function(){
                isMain = false;
                GM_setValue('stay', !isMain);
                sendChat(`Bots R sittin n chillin!`);
            },
            "follow": function(id='d'){
                if(id.length&&Number(id)!=NaN){
                    console.log('wtf',id,id.length)
                    //return
                }
                isMain = true;
                GM_setValue('stay', !isMain);
                sendChat(`Main mode iz ON, followz!`);
            },
            "here": function(){
                GM_setValue('mainPos', { x: player.x, y: player.y });
                sendChat(`Main posishun saved! =^_^=`);
            },
            "shield": function(){
                autoShield = !GM_getValue('shield', false);
                GM_setValue('shield', autoShield);
                sendChat(`AutoShield iz ${autoShield ? "ON" : "OFF"}!`);
            }
        };

        // Ensure that the values are loaded when the script runs
        breaker = GM_getValue('breaker')||false;
        useSpam = GM_getValue('useSpam')||false;
        farmAi = GM_getValue('farmAi')||false;

        document.getElementById("chatBox").addEventListener('keydown', e => {
            if (e.key === 'Enter') {  // Check if the Enter key is pressed
                const input = e.target.value.trim();
                if (input.startsWith(_prefix)) {
                    e.preventDefault();  // Prevent the default action if it's a command
                    const command = input.slice(_prefix.length).split(" ")[0];
                    const args = input.slice(_prefix.length + command.length).trim().split(" ");

                    if (_commands.hasOwnProperty(command)) {
                        _commands[command](args);
                        e.target.value = ''; // Clear the chat input after processing
                    }
                }
            }
        });
    }();



    // FIND OBJECTS BY ID/SID:
    function findID(tmpObj, tmp) {
        return tmpObj.find((THIS) => THIS.id == tmp);
    }

    function findSID(tmpObj, tmp) {
        return tmpObj.find((THIS) => THIS.sid == tmp);
    }

    function findPlayerByID(id) {
        return findID(players, id);
    }

    function findPlayerBySID(sid) {
        return findSID(players, sid);
    }

    function findAIBySID(sid) {
        return findSID(ais, sid);
    }

    function findObjectBySid(sid) {
        return findSID(gameObjects, sid);
    }

    function findProjectileBySid(sid) {
        return findSID(gameObjects, sid);
    }

    let adCard = getEl("adCard");
    let promoImageHolder = getEl("promoImgHolder");

    let chatButton = getEl("chatButton");
    chatButton.remove();
    let gameCanvas = getEl("gameCanvas");
    let mainContext = gameCanvas.getContext("2d");
    let mapDisplay = getEl("mapDisplay");
    let mapContext = mapDisplay.getContext("2d");
    mapDisplay.width = 300;
    mapDisplay.height = 300;
    let storeMenu = getEl("storeMenu");
    let storeHolder = getEl("storeHolder");
    let upgradeHolder = getEl("upgradeHolder");
    let upgradeCounter = getEl("upgradeCounter");
    let chatBox = getEl("chatBox");
    chatBox.autocomplete = "off";
    chatBox.style.textAlign = "center";
    chatBox.style.width = "18em";
    let chatHolder = getEl("chatHolder");
    let actionBar = getEl("actionBar");
    let leaderboardData = getEl("leaderboardData");
    let itemInfoHolder = getEl("itemInfoHolder");
    let menuCardHolder = getEl("menuCardHolder");
    let mainMenu = getEl("mainMenu");
    getEl("mainMenu").style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1198742281755316317/1202991399532896347/wallpaper.jpg?ex=65cf780c&is=65bd030c&hm=c6311b336f8438208363736b853fa27c7508a0f76a67834df50dc176812cb14c&')";
    let diedText = getEl("diedText");
    let screenWidth;
    let screenHeight;
    let maxScreenWidth = config.maxScreenWidth;
    let maxScreenHeight = config.maxScreenHeight;
    let pixelDensity = 1;
    let delta;
    let now;
    let lastUpdate = performance.now();
    let camX;
    let camY;
    let tmpDir;
    let mouseX = 0;
    let mouseY = 0;
    let allianceMenu = getEl("allianceMenu");
    let waterMult = 1;
    let waterPlus = 0;

    let outlineColor = "#525252";
    let darkOutlineColor = "#3d3f42";
    let outlineWidth = 5.5;

    let firstSetup = true;
    let keys = {};
    let moveKeys = {
        87: [0, -1],
        38: [0, -1],
        83: [0, 1],
        40: [0, 1],
        65: [-1, 0],
        37: [-1, 0],
        68: [1, 0],
        39: [1, 0],
    };
    let attackState = 0;
    let inGame = false;

    let macro = {};
    let mills = {
        place: 0,
        placeSpawnPads: 0
    };
    let lastDir;

    let lastLeaderboardData = [];

    // ON LOAD:
    let inWindow = true;
    window.onblur = function() {
        inWindow = false;
    };
    window.onfocus = function() {
        inWindow = true;
        if (player && player.alive) {
            // resetMoveDir();
        }
    };
    let ms = {
        avg: 0,
        max: 0,
        min: 0,
        delay: 0
    }
    function pingSocketResponse() {
        let pingTime = window.pingTime;
        const pingDisplay = document.getElementById("pingDisplay")
        pingDisplay.innerText = "Ping: " + pingTime + " ms`";
        if (pingTime > ms.max || isNaN(ms.max)) {
            ms.max = pingTime;
        }
        if (pingTime < ms.min || isNaN(ms.min)) {
            ms.min = pingTime;
        }

        // if (pingTime >= 90) {
        //     doAutoQ = true;
        // } else {
        //     doAutoQ = false;
        // }
    }

    let placeVisible = [];

    /** CLASS CODES */

    class Utils {
        constructor() {

            // MATH UTILS:
            let mathABS = Math.abs,
                mathCOS = Math.cos,
                mathSIN = Math.sin,
                mathPOW = Math.pow,
                mathSQRT = Math.sqrt,
                mathATAN2 = Math.atan2,
                mathPI = Math.PI;

            let _this = this;

            // GLOBAL UTILS:
            this.round = function(n, v) {
                return Math.round(n * v) / v;
            };
            this.toRad = function(angle) {
                return angle * (mathPI / 180);
            };
            this.toAng = function(radian) {
                return radian / (mathPI / 180);
            };
            this.randInt = function(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            this.randFloat = function(min, max) {
                return Math.random() * (max - min + 1) + min;
            };
            this.lerp = function(value1, value2, amount) {
                return value1 + (value2 - value1) * amount;
            };
            this.decel = function(val, cel) {
                if (val > 0)
                    val = Math.max(0, val - cel);
                else if (val < 0)
                    val = Math.min(0, val + cel);
                return val;
            };
            this.getDistance = function(x1, y1, x2, y2) {
                return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
            };
            this.getDist = function(tmp1, tmp2, type1, type2) {
                let tmpXY1 = {
                    x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                    y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
                };
                let tmpXY2 = {
                    x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                    y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
                };
                return mathSQRT((tmpXY2.x -= tmpXY1.x) * tmpXY2.x + (tmpXY2.y -= tmpXY1.y) * tmpXY2.y);
            };
            this.getDirection = function(x1, y1, x2, y2) {
                return mathATAN2(y1 - y2, x1 - x2);
            };
            this.getDirect = function(tmp1, tmp2, type1, type2) {
                let tmpXY1 = {
                    x: type1 == 0 ? tmp1.x : type1 == 1 ? tmp1.x1 : type1 == 2 ? tmp1.x2 : type1 == 3 && tmp1.x3,
                    y: type1 == 0 ? tmp1.y : type1 == 1 ? tmp1.y1 : type1 == 2 ? tmp1.y2 : type1 == 3 && tmp1.y3,
                };
                let tmpXY2 = {
                    x: type2 == 0 ? tmp2.x : type2 == 1 ? tmp2.x1 : type2 == 2 ? tmp2.x2 : type2 == 3 && tmp2.x3,
                    y: type2 == 0 ? tmp2.y : type2 == 1 ? tmp2.y1 : type2 == 2 ? tmp2.y2 : type2 == 3 && tmp2.y3,
                };
                return mathATAN2(tmpXY1.y - tmpXY2.y, tmpXY1.x - tmpXY2.x);
            };
            this.getAngleDist = function(a, b) {
                let p = mathABS(b - a) % (mathPI * 2);
                return (p > mathPI ? (mathPI * 2) - p : p);
            };
            this.isNumber = function(n) {
                return (typeof n == "number" && !isNaN(n) && isFinite(n));
            };
            this.isString = function(s) {
                return (s && typeof s == "string");
            };
            this.kFormat = function(num) {
                return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
            };
            this.sFormat = function(num) {
                let fixs = [{
                    num: 1e3,
                    string: "k"
                },
                            {
                                num: 1e6,
                                string: "m"
                            },
                            {
                                num: 1e9,
                                string: "b"
                            },
                            {
                                num: 1e12,
                                string: "q"
                            }
                           ].reverse();
                let sp = fixs.find(v => num >= v.num);
                if (!sp) return num;
                return (num / sp.num).toFixed(1) + sp.string;
            };
            this.capitalizeFirst = function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            this.fixTo = function(n, v) {
                return parseFloat(n.toFixed(v));
            };
            this.sortByPoints = function(a, b) {
                return parseFloat(b.points) - parseFloat(a.points);
            };
            this.lineInRect = function(recX, recY, recX2, recY2, x1, y1, x2, y2) {
                let minX = x1;
                let maxX = x2;
                if (x1 > x2) {
                    minX = x2;
                    maxX = x1;
                }
                if (maxX > recX2)
                    maxX = recX2;
                if (minX < recX)
                    minX = recX;
                if (minX > maxX)
                    return false;
                let minY = y1;
                let maxY = y2;
                let dx = x2 - x1;
                if (Math.abs(dx) > 0.0000001) {
                    let a = (y2 - y1) / dx;
                    let b = y1 - a * x1;
                    minY = a * minX + b;
                    maxY = a * maxX + b;
                }
                if (minY > maxY) {
                    let tmp = maxY;
                    maxY = minY;
                    minY = tmp;
                }
                if (maxY > recY2)
                    maxY = recY2;
                if (minY < recY)
                    minY = recY;
                if (minY > maxY)
                    return false;
                return true;
            };
            this.containsPoint = function(element, x, y) {
                let bounds = element.getBoundingClientRect();
                let left = bounds.left + window.scrollX;
                let top = bounds.top + window.scrollY;
                let width = bounds.width;
                let height = bounds.height;

                let insideHorizontal = x > left && x < left + width;
                let insideVertical = y > top && y < top + height;
                return insideHorizontal && insideVertical;
            };
            this.mousifyTouchEvent = function(event) {
                let touch = event.changedTouches[0];
                event.screenX = touch.screenX;
                event.screenY = touch.screenY;
                event.clientX = touch.clientX;
                event.clientY = touch.clientY;
                event.pageX = touch.pageX;
                event.pageY = touch.pageY;
            };
            this.hookTouchEvents = function(element, skipPrevent) {
                let preventDefault = !skipPrevent;
                let isHovering = false;
                // let passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
                let passive = false;
                element.addEventListener("touchstart", this.checkTrusted(touchStart), passive);
                element.addEventListener("touchmove", this.checkTrusted(touchMove), passive);
                element.addEventListener("touchend", this.checkTrusted(touchEnd), passive);
                element.addEventListener("touchcancel", this.checkTrusted(touchEnd), passive);
                element.addEventListener("touchleave", this.checkTrusted(touchEnd), passive);

                function touchStart(e) {
                    _this.mousifyTouchEvent(e);
                    window.setUsingTouch(true);
                    if (preventDefault) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (element.onmouseover)
                        element.onmouseover(e);
                    isHovering = true;
                }

                function touchMove(e) {
                    _this.mousifyTouchEvent(e);
                    window.setUsingTouch(true);
                    if (preventDefault) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (_this.containsPoint(element, e.pageX, e.pageY)) {
                        if (!isHovering) {
                            if (element.onmouseover)
                                element.onmouseover(e);
                            isHovering = true;
                        }
                    } else {
                        if (isHovering) {
                            if (element.onmouseout)
                                element.onmouseout(e);
                            isHovering = false;
                        }
                    }
                }

                function touchEnd(e) {
                    _this.mousifyTouchEvent(e);
                    window.setUsingTouch(true);
                    if (preventDefault) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (isHovering) {
                        if (element.onclick)
                            element.onclick(e);
                        if (element.onmouseout)
                            element.onmouseout(e);
                        isHovering = false;
                    }
                }
            };
            this.removeAllChildren = function(element) {
                while (element.hasChildNodes()) {
                    element.removeChild(element.lastChild);
                }
            };
            this.generateElement = function(config) {
                let element = document.createElement(config.tag || "div");

                function bind(configValue, elementValue) {
                    if (config[configValue])
                        element[elementValue] = config[configValue];
                }
                bind("text", "textContent");
                bind("html", "innerHTML");
                bind("class", "className");
                for (let key in config) {
                    switch (key) {
                        case "tag":
                        case "text":
                        case "html":
                        case "class":
                        case "style":
                        case "hookTouch":
                        case "parent":
                        case "children":
                            continue;
                        default:
                            break;
                    }
                    element[key] = config[key];
                }
                if (element.onclick)
                    element.onclick = this.checkTrusted(element.onclick);
                if (element.onmouseover)
                    element.onmouseover = this.checkTrusted(element.onmouseover);
                if (element.onmouseout)
                    element.onmouseout = this.checkTrusted(element.onmouseout);
                if (config.style) {
                    element.style.cssText = config.style;
                }
                if (config.hookTouch) {
                    this.hookTouchEvents(element);
                }
                if (config.parent) {
                    config.parent.appendChild(element);
                }
                if (config.children) {
                    for (let i = 0; i < config.children.length; i++) {
                        element.appendChild(config.children[i]);
                    }
                }
                return element;
            };
            this.checkTrusted = function(callback) {
                return function(ev) {
                    if (ev && ev instanceof Event && (ev && typeof ev.isTrusted == "boolean" ? ev.isTrusted : true)) {
                        callback(ev);
                    } else {
                        //console.error("Event is not trusted.", ev);
                    }
                };
            };
            this.randomString = function(length) {
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            };
            this.countInArray = function(array, val) {
                let count = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === val) count++;
                }
                return count;
            };
            this.hexToRgb = function(hex) {
                return hex.slice(1).match(/.{1,2}/g).map(g => parseInt(g, 16));
            };
            this.getRgb = function(r, g, b) {
                return [r / 255, g / 255, b / 255].join(", ");
            };
        }
    };
    class Animtext {
        // ANIMATED TEXT:
        constructor() {
            // INIT:
            this.init = function(x, y, scale, speed, life, text, color) {
                (this.x = x),
                    (this.y = y),
                    (this.color = color),
                    (this.scale = scale*3.5),
                    (this.weight = 50);
                (this.startScale = this.scale * 1.2),
                    (this.maxScale = 1.5 * scale),
                    (this.minScale = 0.5 * scale),
                    (this.scaleSpeed = 0.7),
                    (this.speed = speed),
                    (this.speedMax = speed),
                    (this.life = life),
                    (this.maxLife = life),
                    (this.text = text),
                    this.movSpeed = speed;
            };

            // UPDATE:
            this.update = function(delta) {
                if(this.life){
                    this.life -= delta;
                    if(this.scaleSpeed != -0.35){
                        this.y -= this.speed * delta;
                        // (this.x += this.speed * delta);
                    } else {
                        this.y -= this.speed * delta;
                    }
                    this.scale -= .8;
                    // this.scale > 0.35 && (this.scale = Math.max(this.scale, this.startScale));
                    // this.speed < this.speedMax && (this.speed -= this.speedMax * .0075);
                    if(this.scale >= this.maxScale){
                        this.scale = this.maxScale;
                        this.scaleSpeed *= -.5;
                        this.speed = this.speed * .75;
                    };
                    this.life <= 0 && (this.life = 0)
                };
            };

            // RENDER:
            this.render = function(ctxt, xOff, yOff) {
                ctxt.lineWidth = 10;
                ctxt.strokeStyle = darkOutlineColor; //"black";
                ctxt.fillStyle = this.color;
                ctxt.globalAlpha = 1;
                ctxt.font = this.scale + "px HammerSmith One";
                ctxt.strokeText(this.text, this.x - xOff, this.y - yOff);
                ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
                ctxt.globalAlpha = 1;
            };
        }
    };
    class Textmanager {
        // TEXT MANAGER:
        constructor() {
            this.texts = [];
            this.stack = [];

            // UPDATE:
            this.update = function(delta, ctxt, xOff, yOff) {
                ctxt.textBaseline = "middle";
                ctxt.textAlign = "center";
                for (let i = 0; i < this.texts.length; ++i) {
                    if (this.texts[i].life) {
                        this.texts[i].update(delta);
                        this.texts[i].render(ctxt, xOff, yOff);
                    }
                }
            };

            // SHOW TEXT:
            this.showText = function(x, y, scale, speed, life, text, color) {
                let tmpText;
                for (let i = 0; i < this.texts.length; ++i) {
                    if (!this.texts[i].life) {
                        tmpText = this.texts[i];
                        break;
                    }
                }
                if (!tmpText) {
                    tmpText = new Animtext();
                    this.texts.push(tmpText);
                }
                tmpText.init(x, y, scale, speed, life, text, color);
            };
        }
    }

    class GameObject {
        constructor(sid) {
            this.sid = sid;

            // INIT:
            this.init = function(x, y, dir, scale, type, data, owner) {
                data = data || {};
                this.sentTo = {};
                this.gridLocations = [];
                this.active = true;
                this.render = true;
                this.doUpdate = data.doUpdate;
                this.x = x;
                this.y = y;
                this.dir = dir;
                this.lastDir = dir;
                this.xWiggle = 0;
                this.yWiggle = 0;
                this.visScale = scale;
                this.scale = scale;
                this.type = type;
                this.id = data.id;
                this.owner = owner;
                this.name = data.name;
                this.isItem = (this.id != undefined);
                this.group = data.group;
                this.maxHealth = data.health;
                this.health = this.maxHealth;
                this.layer = 2;
                if (this.group != undefined) {
                    this.layer = this.group.layer;
                } else if (this.type == 0) {
                    this.layer = 3;
                } else if (this.type == 2) {
                    this.layer = 0;
                } else if (this.type == 4) {
                    this.layer = -1;
                }
                this.colDiv = data.colDiv || 1;
                this.blocker = data.blocker;
                this.ignoreCollision = data.ignoreCollision;
                this.dontGather = data.dontGather;
                this.hideFromEnemy = data.hideFromEnemy;
                this.friction = data.friction;
                this.projDmg = data.projDmg;
                this.dmg = data.dmg;
                this.pDmg = data.pDmg;
                this.pps = data.pps;
                this.zIndex = data.zIndex || 0;
                this.turnSpeed = data.turnSpeed;
                this.req = data.req;
                this.trap = data.trap;
                this.healCol = data.healCol;
                this.teleport = data.teleport;
                this.boostSpeed = data.boostSpeed;
                this.projectile = data.projectile;
                this.shootRange = data.shootRange;
                this.shootRate = data.shootRate;
                this.shootCount = this.shootRate;
                this.spawnPoint = data.spawnPoint;
                this.onNear = 0;
                this.breakObj = false;
                this.alpha = data.alpha || 1;
                this.maxAlpha = data.alpha || 1;
                this.damaged = 0;
            };

            // GET HIT:
            this.changeHealth = function(amount, doer) {
                this.health += amount;
                return (this.health <= 0);
            };

            // GET SCALE:
            this.getScale = function(sM, ig) {
                sM = sM || 1;
                return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ?
                                     1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
            };

            // VISIBLE TO PLAYER:
            this.visibleToPlayer = function(player) {
                return !(this.hideFromEnemy) || (this.owner && (this.owner == player ||
                                                                (this.owner.team && player.team == this.owner.team)));
            };

            // UPDATE:
            this.update = function(delta) {
                if (this.active) {
                    if (this.xWiggle) {
                        this.xWiggle *= Math.pow(0.99, delta);
                    }
                    if (this.yWiggle) {
                        this.yWiggle *= Math.pow(0.99, delta);
                    }
                    let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
                    if (d2 > 0.01) {
                        this.dir += d2 / 5;
                    } else {
                        this.dir = this.lastDir;
                    }
                } else {
                    if (this.alive) {
                        this.alpha -= delta / (200 / this.maxAlpha);
                        this.visScale += delta / (this.scale / 2.5);
                        if (this.alpha <= 0) {
                            this.alpha = 0;
                            this.alive = false;
                        }
                    }
                }
            };

            // CHECK TEAM:
            this.isTeamObject = function(tmpObj) {
                return this.owner == null ? true : (this.owner && tmpObj.sid == this.owner.sid || tmpObj.findAllianceBySid(this.owner.sid));
            };
        }
    }
    class Items {
        constructor() {
            // ITEM GROUPS:
            this.groups = [{
                id: 0,
                name: "food",
                layer: 0
            }, {
                id: 1,
                name: "walls",
                place: true,
                limit: 30,
                layer: 0
            }, {
                id: 2,
                name: "spikes",
                place: true,
                limit: 15,
                layer: 0
            }, {
                id: 3,
                name: "mill",
                place: true,
                limit: 7,
                layer: 1
            }, {
                id: 4,
                name: "mine",
                place: true,
                limit: 1,
                layer: 0
            }, {
                id: 5,
                name: "trap",
                place: true,
                limit: 6,
                layer: -1
            }, {
                id: 6,
                name: "booster",
                place: true,
                limit: 12,
                layer: -1
            }, {
                id: 7,
                name: "turret",
                place: true,
                limit: 2,
                layer: 1
            }, {
                id: 8,
                name: "watchtower",
                place: true,
                limit: 12,
                layer: 1
            }, {
                id: 9,
                name: "buff",
                place: true,
                limit: 4,
                layer: -1
            }, {
                id: 10,
                name: "spawn",
                place: true,
                limit: 1,
                layer: -1
            }, {
                id: 11,
                name: "sapling",
                place: true,
                limit: 2,
                layer: 0
            }, {
                id: 12,
                name: "blocker",
                place: true,
                limit: 3,
                layer: -1
            }, {
                id: 13,
                name: "teleporter",
                place: true,
                limit: 2,
                layer: -1
            }];

            // PROJECTILES:
            this.projectiles = [{
                indx: 0,
                layer: 0,
                src: "arrow_1",
                dmg: 25,
                speed: 1.6,
                scale: 103,
                range: 1000
            }, {
                indx: 1,
                layer: 1,
                dmg: 25,
                scale: 20
            }, {
                indx: 0,
                layer: 0,
                src: "arrow_1",
                dmg: 35,
                speed: 2.5,
                scale: 103,
                range: 1200
            }, {
                indx: 0,
                layer: 0,
                src: "arrow_1",
                dmg: 30,
                speed: 2,
                scale: 103,
                range: 1200
            }, {
                indx: 1,
                layer: 1,
                dmg: 16,
                scale: 20
            }, {
                indx: 0,
                layer: 0,
                src: "bullet_1",
                dmg: 50,
                speed: 3.6,
                scale: 160,
                range: 1400
            }];

            // WEAPONS:
            this.weapons = [{
                id: 0,
                type: 0,
                name: "tool hammer",
                desc: "tool for gathering all resources",
                src: "hammer_1",
                length: 140,
                width: 140,
                xOff: -3,
                yOff: 18,
                dmg: 25,
                range: 65,
                gather: 1,
                speed: 300
            }, {
                id: 1,
                type: 0,
                age: 2,
                name: "hand axe",
                desc: "gathers resources at a higher rate",
                src: "axe_1",
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 30,
                spdMult: 1,
                range: 70,
                gather: 2,
                speed: 400
            }, {
                id: 2,
                type: 0,
                age: 8,
                pre: 1,
                name: "great axe",
                desc: "deal more damage and gather more resources",
                src: "great_axe_1",
                length: 140,
                width: 140,
                xOff: -8,
                yOff: 25,
                dmg: 35,
                spdMult: 1,
                range: 75,
                gather: 4,
                speed: 400
            }, {
                id: 3,
                type: 0,
                age: 2,
                name: "short sword",
                desc: "increased attack power but slower move speed",
                src: "sword_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 46,
                dmg: 35,
                spdMult: 0.85,
                range: 110,
                gather: 1,
                speed: 300
            }, {
                id: 4,
                type: 0,
                age: 8,
                pre: 3,
                name: "katana",
                desc: "greater range and damage",
                src: "samurai_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 59,
                dmg: 40,
                spdMult: 0.8,
                range: 118,
                gather: 1,
                speed: 300
            }, {
                id: 5,
                type: 0,
                age: 2,
                name: "polearm",
                desc: "long range melee weapon",
                src: "spear_1",
                iPad: 1.3,
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 45,
                knock: 0.2,
                spdMult: 0.82,
                range: 142,
                gather: 1,
                speed: 700
            }, {
                id: 6,
                type: 0,
                age: 2,
                name: "bat",
                desc: "fast long range melee weapon",
                src: "bat_1",
                iPad: 1.3,
                length: 110,
                width: 180,
                xOff: -8,
                yOff: 53,
                dmg: 20,
                knock: 0.7,
                range: 110,
                gather: 1,
                speed: 300
            }, {
                id: 7,
                type: 0,
                age: 2,
                name: "daggers",
                desc: "really fast short range weapon",
                src: "dagger_1",
                iPad: 0.8,
                length: 110,
                width: 110,
                xOff: 18,
                yOff: 0,
                dmg: 20,
                knock: 0.1,
                range: 65,
                gather: 1,
                hitSlow: 0.1,
                spdMult: 1.13,
                speed: 100
            }, {
                id: 8,
                type: 0,
                age: 2,
                name: "stick",
                desc: "great for gathering but very weak",
                src: "stick_1",
                length: 140,
                width: 140,
                xOff: 3,
                yOff: 24,
                dmg: 1,
                spdMult: 1,
                range: 70,
                gather: 7,
                speed: 400
            }, {
                id: 9,
                type: 1,
                age: 6,
                name: "hunting bow",
                desc: "bow used for ranged combat and hunting",
                src: "bow_1",
                req: ["wood", 4],
                length: 120,
                width: 120,
                xOff: -6,
                yOff: 0,
                Pdmg: 25,
                projectile: 0,
                spdMult: 0.75,
                speed: 600
            }, {
                id: 10,
                type: 1,
                age: 6,
                name: "great hammer",
                desc: "hammer used for destroying structures",
                src: "great_hammer_1",
                length: 140,
                width: 140,
                xOff: -9,
                yOff: 25,
                dmg: 10,
                Pdmg: 10,
                spdMult: 0.88,
                range: 75,
                sDmg: 7.5,
                gather: 1,
                speed: 400
            }, {
                id: 11,
                type: 1,
                age: 6,
                name: "wooden shield",
                desc: "blocks projectiles and reduces melee damage",
                src: "shield_1",
                length: 120,
                width: 120,
                shield: 0.2,
                xOff: 6,
                yOff: 0,
                Pdmg: 0,
                spdMult: 0.7
            }, {
                id: 12,
                type: 1,
                age: 8,
                pre: 9,
                name: "crossbow",
                desc: "deals more damage and has greater range",
                src: "crossbow_1",
                req: ["wood", 5],
                aboveHand: true,
                armS: 0.75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                Pdmg: 35,
                projectile: 2,
                spdMult: 0.7,
                speed: 700
            }, {
                id: 13,
                type: 1,
                age: 9,
                pre: 12,
                name: "repeater crossbow",
                desc: "high firerate crossbow with reduced damage",
                src: "crossbow_2",
                req: ["wood", 10],
                aboveHand: true,
                armS: 0.75,
                length: 120,
                width: 120,
                xOff: -4,
                yOff: 0,
                Pdmg: 30,
                projectile: 3,
                spdMult: 0.7,
                speed: 230
            }, {
                id: 14,
                type: 1,
                age: 6,
                name: "mc grabby",
                desc: "steals resources from enemies",
                src: "grab_1",
                length: 130,
                width: 210,
                xOff: -8,
                yOff: 53,
                dmg: 0,
                Pdmg: 0,
                steal: 250,
                knock: 0.2,
                spdMult: 1.05,
                range: 125,
                gather: 0,
                speed: 700
            }, {
                id: 15,
                type: 1,
                age: 9,
                pre: 12,
                name: "musket",
                desc: "slow firerate but high damage and range",
                src: "musket_1",
                req: ["stone", 10],
                aboveHand: true,
                rec: 0.35,
                armS: 0.6,
                hndS: 0.3,
                hndD: 1.6,
                length: 205,
                width: 205,
                xOff: 25,
                yOff: 0,
                Pdmg: 50,
                projectile: 5,
                hideProjectile: true,
                spdMult: 0.6,
                speed: 1500
            }];

            // ITEMS:
            this.list = [{
                group: this.groups[0],
                name: "apple",
                desc: "restores 20 health when consumed",
                req: ["food", 10],
                consume: function(doer) {
                    return doer.changeHealth(20, doer);
                },
                scale: 22,
                holdOffset: 15,
                healing: 20,
                itemID: 0,
                itemAID: 16,
            }, {
                age: 3,
                group: this.groups[0],
                name: "cookie",
                desc: "restores 40 health when consumed",
                req: ["food", 15],
                consume: function(doer) {
                    return doer.changeHealth(40, doer);
                },
                scale: 27,
                holdOffset: 15,
                healing: 40,
                itemID: 1,
                itemAID: 17,
            }, {
                age: 7,
                group: this.groups[0],
                name: "cheese",
                desc: "restores 30 health and another 50 over 5 seconds",
                req: ["food", 25],
                consume: function(doer) {
                    if (doer.changeHealth(30, doer) || doer.health < 100) {
                        doer.dmgOverTime.dmg = -10;
                        doer.dmgOverTime.doer = doer;
                        doer.dmgOverTime.time = 5;
                        return true;
                    }
                    return false;
                },
                scale: 27,
                holdOffset: 15,
                healing: 30,
                itemID: 2,
                itemAID: 18,
            }, {
                group: this.groups[1],
                name: "wood wall",
                desc: "provides protection for your village",
                req: ["wood", 10],
                projDmg: true,
                health: 380,
                scale: 50,
                holdOffset: 20,
                placeOffset: 2,
                itemID: 3,
                itemAID: 19,
            }, {
                age: 3,
                group: this.groups[1],
                name: "stone wall",
                desc: "provides improved protection for your village",
                req: ["stone", 25],
                health: 900,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 4,
                itemAID: 20,
            }, {
                age: 7,
                group: this.groups[1],
                name: "castle wall",
                desc: "provides powerful protection for your village",
                req: ["stone", 35],
                health: 1500,
                scale: 52,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 5,
                itemAID: 21,
            }, {
                group: this.groups[2],
                name: "spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 20, "stone", 5],
                health: 400,
                dmg: 20,
                scale: 49,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5,
                itemID: 6,
                itemAID: 22,
                shadow: {
                    offsetX: 5, // Adjust the shadow's X offset as needed
                    offsetY: 5, // Adjust the shadow's Y offset as needed
                    blur: 20,  // Adjust the shadow's blur as needed
                    color: "rgba(0, 0, 0, 0.5)" // Adjust the shadow's color and transparency as needed
                }

            }, {
                age: 5,
                group: this.groups[2],
                name: "greater spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 30, "stone", 10],
                health: 500,
                dmg: 35,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5,
                itemID: 7,
                itemAID: 23,
            }, {
                age: 9,
                group: this.groups[2],
                name: "poison spikes",
                desc: "poisons enemies when they touch them",
                req: ["wood", 35, "stone", 15],
                health: 600,
                dmg: 30,
                pDmg: 5,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5,
                itemID: 8,
                itemAID: 24,
            }, {
                age: 9,
                group: this.groups[2],
                name: "spinning spikes",
                desc: "damages enemies when they touch them",
                req: ["wood", 30, "stone", 20],
                health: 500,
                dmg: 45,
                turnSpeed: 0.003,
                scale: 52,
                spritePadding: -23,
                holdOffset: 8,
                placeOffset: -5,
                itemID: 9,
                itemAID: 25,
            }, {
                group: this.groups[3],
                name: "windmill",
                desc: "generates gold over time",
                req: ["wood", 50, "stone", 10],
                health: 400,
                pps: 1,
                turnSpeed: 0.0016,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 45,
                holdOffset: 20,
                placeOffset: 5,
                itemID: 10,
                itemAID: 26,
            }, {
                age: 5,
                group: this.groups[3],
                name: "faster windmill",
                desc: "generates more gold over time",
                req: ["wood", 60, "stone", 20],
                health: 500,
                pps: 1.5,
                turnSpeed: 0.0025,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5,
                itemID: 11,
                itemAID: 27,
            }, {
                age: 8,
                group: this.groups[3],
                name: "power mill",
                desc: "generates more gold over time",
                req: ["wood", 100, "stone", 50],
                health: 800,
                pps: 2,
                turnSpeed: 0.005,
                spritePadding: 25,
                iconLineMult: 12,
                scale: 47,
                holdOffset: 20,
                placeOffset: 5,
                itemID: 12,
                itemAID: 28,
            }, {
                age: 5,
                group: this.groups[4],
                type: 2,
                name: "mine",
                desc: "allows you to mine stone",
                req: ["wood", 20, "stone", 100],
                iconLineMult: 12,
                scale: 65,
                holdOffset: 20,
                placeOffset: 0,
                itemID: 13,
                itemAID: 29,
            }, {
                age: 5,
                group: this.groups[11],
                type: 0,
                name: "sapling",
                desc: "allows you to farm wood",
                req: ["wood", 150],
                iconLineMult: 12,
                colDiv: 0.5,
                scale: 110,
                holdOffset: 50,
                placeOffset: -15,
                itemID: 14,
                itemAID: 30,
            }, {
                age: 4,
                group: this.groups[5],
                name: "pit trap",
                desc: "pit that traps enemies if they walk over it",
                req: ["wood", 30, "stone", 30],
                trap: true,
                ignoreCollision: true,
                hideFromEnemy: true,
                health: 500,
                colDiv: 0.2,
                scale: 50,
                holdOffset: 20,
                placeOffset: -5,
                alpha: 0.6,
                itemID: 15,
                itemAID: 31,
            }, {
                age: 4,
                group: this.groups[6],
                name: "boost pad",
                desc: "provides boost when stepped on",
                req: ["stone", 20, "wood", 5],
                ignoreCollision: true,
                boostSpeed: 1.5,
                health: 150,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 16,
                itemAID: 32,
            }, {
                age: 7,
                group: this.groups[7],
                doUpdate: true,
                name: "turret",
                desc: "defensive structure that shoots at enemies",
                req: ["wood", 200, "stone", 150],
                health: 800,
                projectile: 1,
                shootRange: 700,
                shootRate: 2200,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 17,
                itemAID: 33,
            }, {
                age: 7,
                group: this.groups[8],
                name: "platform",
                desc: "platform to shoot over walls and cross over water",
                req: ["wood", 20],
                ignoreCollision: true,
                zIndex: 1,
                health: 300,
                scale: 43,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 18,
                itemAID: 34,
            }, {
                age: 7,
                group: this.groups[9],
                name: "healing pad",
                desc: "standing on it will slowly heal you",
                req: ["wood", 30, "food", 10],
                ignoreCollision: true,
                healCol: 15,
                health: 400,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 19,
                itemAID: 35,
            }, {
                age: 9,
                group: this.groups[10],
                name: "spawn pad",
                desc: "you will spawn here when you die but it will dissapear",
                req: ["wood", 100, "stone", 100],
                health: 400,
                ignoreCollision: true,
                spawnPoint: true,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 20,
                itemAID: 36,
            }, {
                age: 7,
                group: this.groups[12],
                name: "blocker",
                desc: "blocks building in radius",
                req: ["wood", 30, "stone", 25],
                ignoreCollision: true,
                blocker: 300,
                health: 400,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 21,
                itemAID: 37,
            }, {
                age: 7,
                group: this.groups[13],
                name: "teleporter",
                desc: "teleports you to a random point on the map",
                req: ["wood", 60, "stone", 60],
                ignoreCollision: true,
                teleport: true,
                health: 200,
                colDiv: 0.7,
                scale: 45,
                holdOffset: 20,
                placeOffset: -5,
                itemID: 22,
                itemAID: 38
            }];

            // CHECK ITEM ID:
            this.checkItem = {
                index: function(id, myItems) {
                    return [0, 1, 2].includes(id) ? 0 : [3, 4, 5].includes(id) ? 1 : [6, 7, 8, 9].includes(id) ? 2 : [10, 11, 12].includes(id) ? 3 : [13, 14].includes(id) ? 5 : [15, 16].includes(id) ? 4 : [17, 18, 19, 21, 22].includes(id) ? [13, 14].includes(myItems) ? 6 :
                    5 :
                    id == 20 ? [13, 14].includes(myItems) ? 7 :
                    6 :
                    undefined;
                }
            }

            // ASSIGN IDS:
            for (let i = 0; i < this.list.length; ++i) {
                this.list[i].id = i;
                if (this.list[i].pre) this.list[i].pre = i - this.list[i].pre;
            }

            // TROLOLOLOL:
            if (typeof window !== "undefined") {
                function shuffle(a) {
                    for (let i = a.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [a[i], a[j]] = [a[j], a[i]];
                    }
                    return a;
                }
                //shuffle(this.list);
            }
        }
    }

    class Objectmanager {
        constructor(GameObject, liztobj, UTILS, config, players, server) {
            let mathFloor = Math.floor,
                mathABS = Math.abs,
                mathCOS = Math.cos,
                mathSIN = Math.sin,
                mathPOW = Math.pow,
                mathSQRT = Math.sqrt;

            this.ignoreAdd = false;
            this.hitObj = [];

            // DISABLE OBJ:
            this.disableObj = function(obj) {
                obj.active = false;
            };

            // ADD NEW:
            let tmpObj;
            this.add = function(sid, x, y, dir, s, type, data, setSID, owner) {
                tmpObj = findObjectBySid(sid);
                if (!tmpObj) {
                    tmpObj = gameObjects.find((tmp) => !tmp.active);
                    if (!tmpObj) {
                        tmpObj = new GameObject(sid);
                        gameObjects.push(tmpObj);
                    }
                }
                if (setSID) {
                    tmpObj.sid = sid;
                }
                tmpObj.init(x, y, dir, s, type, data, owner);
            };

            // DISABLE BY SID:
            this.disableBySid = function(sid) {
                let find = findObjectBySid(sid);
                if (find) {
                    this.disableObj(find);
                }
            };

            // REMOVE ALL FROM PLAYER:
            this.removeAllItems = function(sid, server) {
                gameObjects.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid).forEach((tmp) => this.disableObj(tmp));
            };

            // CHECK IF PLACABLE:
            this.checkItemLocation = function(x, y, s, sM, indx, ignoreWater, placer) {
                let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(x, y, tmp.x, tmp.y) < s + (tmp.blocker ? tmp.blocker : tmp.getScale(sM, tmp.isItem)));
                if (cantPlace) return false;
                if (!ignoreWater && indx != 18 && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2) return false;
                return true;
            };

        }
    }
    class Projectile {
        constructor(players, ais, objectManager, items, config, UTILS, server) {

            // INIT:
            this.init = function(indx, x, y, dir, spd, dmg, rng, scl, owner) {
                this.active = true;
                this.tickActive = true;
                this.indx = indx;
                this.x = x;
                this.y = y;
                this.x2 = x;
                this.y2 = y;
                this.dir = dir;
                this.skipMov = true;
                this.speed = spd;
                this.dmg = dmg;
                this.scale = scl;
                this.range = rng;
                this.r2 = rng;
                this.owner = owner;
            };

            // UPDATE:
            this.update = function(delta) {
                if (this.active) {
                    let tmpSpeed = this.speed * delta;
                    if (!this.skipMov) {
                        this.x += tmpSpeed * Math.cos(this.dir);
                        this.y += tmpSpeed * Math.sin(this.dir);
                        this.range -= tmpSpeed;
                        if (this.range <= 0) {
                            this.x += this.range * Math.cos(this.dir);
                            this.y += this.range * Math.sin(this.dir);
                            tmpSpeed = 1;
                            this.range = 0;
                            this.active = false;
                        }
                    } else {
                        this.skipMov = false;
                    }
                }
            };
            this.tickUpdate = function(delta) {
                if (this.tickActive) {
                    let tmpSpeed = this.speed * delta;
                    if (!this.skipMov) {
                        this.x2 += tmpSpeed * Math.cos(this.dir);
                        this.y2 += tmpSpeed * Math.sin(this.dir);
                        this.r2 -= tmpSpeed;
                        if (this.r2 <= 0) {
                            this.x2 += this.r2 * Math.cos(this.dir);
                            this.y2 += this.r2 * Math.sin(this.dir);
                            tmpSpeed = 1;
                            this.r2 = 0;
                            this.tickActive = false;
                        }
                    } else {
                        this.skipMov = false;
                    }
                }
            };
        }
    };
    class Store {
        constructor() {
            // STORE HATS:
            this.hats = [{
                id: 45,
                name: "Shame!",
                dontSell: true,
                price: 0,
                scale: 120,
                desc: "hacks are for winners"
            }, {
                id: 51,
                name: "Moo Cap",
                price: 0,
                scale: 120,
                desc: "coolest mooer around"
            }, {
                id: 50,
                name: "Apple Cap",
                price: 0,
                scale: 120,
                desc: "apple farms remembers"
            }, {
                id: 28,
                name: "Moo Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 29,
                name: "Pig Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 30,
                name: "Fluff Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 36,
                name: "Pandou Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 37,
                name: "Bear Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 38,
                name: "Monkey Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 44,
                name: "Polar Head",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 35,
                name: "Fez Hat",
                price: 0,
                scale: 120,
                desc: "no effect"
            }, {
                id: 42,
                name: "Enigma Hat",
                price: 0,
                scale: 120,
                desc: "join the enigma army"
            }, {
                id: 43,
                name: "Blitz Hat",
                price: 0,
                scale: 120,
                desc: "hey everybody i'm blitz"
            }, {
                id: 49,
                name: "Bob XIII Hat",
                price: 0,
                scale: 120,
                desc: "like and subscribe"
            }, {
                id: 57,
                name: "Pumpkin",
                price: 50,
                scale: 120,
                desc: "Spooooky"
            }, {
                id: 8,
                name: "Bummle Hat",
                price: 100,
                scale: 120,
                desc: "no effect"
            }, {
                id: 2,
                name: "Straw Hat",
                price: 500,
                scale: 120,
                desc: "no effect"
            }, {
                id: 15,
                name: "Winter Cap",
                price: 600,
                scale: 120,
                desc: "allows you to move at normal speed in snow",
                coldM: 1
            }, {
                id: 5,
                name: "Cowboy Hat",
                price: 1000,
                scale: 120,
                desc: "no effect"
            }, {
                id: 4,
                name: "Ranger Hat",
                price: 2000,
                scale: 120,
                desc: "no effect"
            }, {
                id: 18,
                name: "Explorer Hat",
                price: 2000,
                scale: 120,
                desc: "no effect"
            }, {
                id: 31,
                name: "Flipper Hat",
                price: 2500,
                scale: 120,
                desc: "have more control while in water",
                watrImm: true
            }, {
                id: 1,
                name: "Marksman Cap",
                price: 3000,
                scale: 120,
                desc: "increases arrow speed and range",
                aMlt: 1.3
            }, {
                id: 10,
                name: "Bush Gear",
                price: 3000,
                scale: 160,
                desc: "allows you to disguise yourself as a bush"
            }, {
                id: 48,
                name: "Halo",
                price: 3000,
                scale: 120,
                desc: "no effect"
            }, {
                id: 6,
                name: "Soldier Helmet",
                price: 4000,
                scale: 120,
                desc: "reduces damage taken but slows movement",
                spdMult: 0.94,
                dmgMult: 0.75
            }, {
                id: 23,
                name: "Anti Venom Gear",
                price: 4000,
                scale: 120,
                desc: "makes you immune to poison",
                poisonRes: 1
            }, {
                id: 13,
                name: "Medic Gear",
                price: 5000,
                scale: 110,
                desc: "slowly regenerates health over time",
                healthRegen: 3
            }, {
                id: 9,
                name: "Miners Helmet",
                price: 5000,
                scale: 120,
                desc: "earn 1 extra gold per resource",
                extraGold: 1
            }, {
                id: 32,
                name: "Musketeer Hat",
                price: 5000,
                scale: 120,
                desc: "reduces cost of projectiles",
                projCost: 0.5
            }, {
                id: 7,
                name: "Bull Helmet",
                price: 6000,
                scale: 120,
                desc: "increases damage done but drains health",
                healthRegen: -5,
                dmgMultO: 1.5,
                spdMult: 0.96
            }, {
                id: 22,
                name: "Emp Helmet",
                price: 6000,
                scale: 120,
                desc: "turrets won't attack but you move slower",
                antiTurret: 1,
                spdMult: 0.7
            }, {
                id: 12,
                name: "Booster Hat",
                price: 6000,
                scale: 120,
                desc: "increases your movement speed",
                spdMult: 1.16
            }, {
                id: 26,
                name: "Barbarian Armor",
                price: 8000,
                scale: 120,
                desc: "knocks back enemies that attack you",
                dmgK: 0.6
            }, {
                id: 21,
                name: "Plague Mask",
                price: 10000,
                scale: 120,
                desc: "melee attacks deal poison damage",
                poisonDmg: 5,
                poisonTime: 6
            }, {
                id: 46,
                name: "Bull Mask",
                price: 10000,
                scale: 120,
                desc: "bulls won't target you unless you attack them",
                bullRepel: 1
            }, {
                id: 14,
                name: "Windmill Hat",
                topSprite: true,
                price: 10000,
                scale: 120,
                desc: "generates points while worn",
                pps: 1.5
            }, {
                id: 11,
                name: "Spike Gear",
                topSprite: true,
                price: 10000,
                scale: 120,
                desc: "deal damage to players that damage you",
                dmg: 0.45
            }, {
                id: 53,
                name: "Turret Gear",
                topSprite: true,
                price: 10000,
                scale: 120,
                desc: "you become a walking turret",
                turret: {
                    proj: 1,
                    range: 700,
                    rate: 2500
                },
                spdMult: 0.7
            }, {
                id: 20,
                name: "Samurai Armor",
                price: 12000,
                scale: 120,
                desc: "increased attack speed and fire rate",
                atkSpd: 0.78
            }, {
                id: 58,
                name: "Dark Knight",
                price: 12000,
                scale: 120,
                desc: "restores health when you deal damage",
                healD: 0.4
            }, {
                id: 27,
                name: "Scavenger Gear",
                price: 15000,
                scale: 120,
                desc: "earn double points for each kill",
                kScrM: 2
            }, {
                id: 40,
                name: "Tank Gear",
                price: 15000,
                scale: 120,
                desc: "increased damage to buildings but slower movement",
                spdMult: 0.3,
                bDmg: 3.3
            }, {
                id: 52,
                name: "Thief Gear",
                price: 15000,
                scale: 120,
                desc: "steal half of a players gold when you kill them",
                goldSteal: 0.5
            }, {
                id: 55,
                name: "Bloodthirster",
                price: 20000,
                scale: 120,
                desc: "Restore Health when dealing damage. And increased damage",
                healD: 0.25,
                dmgMultO: 1.2,
            }, {
                id: 56,
                name: "Assassin Gear",
                price: 20000,
                scale: 120,
                desc: "Go invisible when not moving. Can't eat. Increased speed",
                noEat: true,
                spdMult: 1.1,
                invisTimer: 1000
            }];

            // STORE ACCESSORIES:
            this.accessories = [{
                id: 12,
                name: "Snowball",
                price: 1000,
                scale: 105,
                xOff: 18,
                desc: "no effect"
            }, {
                id: 9,
                name: "Tree Cape",
                price: 1000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 10,
                name: "Stone Cape",
                price: 1000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 3,
                name: "Cookie Cape",
                price: 1500,
                scale: 90,
                desc: "no effect"
            }, {
                id: 8,
                name: "Cow Cape",
                price: 2000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 11,
                name: "Monkey Tail",
                price: 2000,
                scale: 97,
                xOff: 25,
                desc: "Super speed but reduced damage",
                spdMult: 1.35,
                dmgMultO: 0.2
            }, {
                id: 17,
                name: "Apple Basket",
                price: 3000,
                scale: 80,
                xOff: 12,
                desc: "slowly regenerates health over time",
                healthRegen: 1
            }, {
                id: 6,
                name: "Winter Cape",
                price: 3000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 4,
                name: "Skull Cape",
                price: 4000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 5,
                name: "Dash Cape",
                price: 5000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 2,
                name: "Dragon Cape",
                price: 6000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 1,
                name: "Super Cape",
                price: 8000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 7,
                name: "Troll Cape",
                price: 8000,
                scale: 90,
                desc: "no effect"
            }, {
                id: 14,
                name: "Thorns",
                price: 10000,
                scale: 115,
                xOff: 20,
                desc: "no effect"
            }, {
                id: 15,
                name: "Blockades",
                price: 10000,
                scale: 95,
                xOff: 15,
                desc: "no effect"
            }, {
                id: 20,
                name: "Devils Tail",
                price: 10000,
                scale: 95,
                xOff: 20,
                desc: "no effect"
            }, {
                id: 16,
                name: "Sawblade",
                price: 12000,
                scale: 90,
                spin: true,
                xOff: 0,
                desc: "deal damage to players that damage you",
                dmg: 0.15
            }, {
                id: 13,
                name: "Angel Wings",
                price: 15000,
                scale: 138,
                xOff: 22,
                desc: "slowly regenerates health over time",
                healthRegen: 3
            }, {
                id: 19,
                name: "Shadow Wings",
                price: 15000,
                scale: 138,
                xOff: 22,
                desc: "increased movement speed",
                spdMult: 1.1
            }, {
                id: 18,
                name: "Blood Wings",
                price: 20000,
                scale: 178,
                xOff: 26,
                desc: "restores health when you deal damage",
                healD: 0.2
            }, {
                id: 21,
                name: "Corrupt X Wings",
                price: 20000,
                scale: 178,
                xOff: 26,
                desc: "deal damage to players that damage you",
                dmg: 0.25
            }];
        }
    };
    class ProjectileManager {
        constructor(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
            this.addProjectile = function(x, y, dir, range, speed, indx, owner, ignoreObj, layer, inWindow) {
                let tmpData = items.projectiles[indx];
                let tmpProj;
                for (let i = 0; i < projectiles.length; ++i) {
                    if (!projectiles[i].active) {
                        tmpProj = projectiles[i];
                        break;
                    }
                }
                if (!tmpProj) {
                    tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server);
                    tmpProj.sid = projectiles.length;
                    projectiles.push(tmpProj);
                }
                tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
                tmpProj.ignoreObj = ignoreObj;
                tmpProj.layer = layer || tmpData.layer;
                tmpProj.inWindow = inWindow;
                tmpProj.src = tmpData.src;
                return tmpProj;
            };
        }
    };
    class AiManager {

        // AI MANAGER:
        constructor(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {

            // AI TYPES:
            this.aiTypes = [{
                id: 0,
                src: "cow_1",
                killScore: 150,
                health: 500,
                weightM: 0.8,
                speed: 0.00095,
                turnSpeed: 0.001,
                scale: 72,
                drop: ["food", 50]
            }, {
                id: 1,
                src: "pig_1",
                killScore: 200,
                health: 800,
                weightM: 0.6,
                speed: 0.00085,
                turnSpeed: 0.001,
                scale: 72,
                drop: ["food", 80]
            }, {
                id: 2,
                name: "Bull",
                src: "bull_2",
                hostile: true,
                dmg: 20,
                killScore: 1000,
                health: 1800,
                weightM: 0.5,
                speed: 0.00094,
                turnSpeed: 0.00074,
                scale: 78,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 100]
            }, {
                id: 3,
                name: "Bully",
                src: "bull_1",
                hostile: true,
                dmg: 20,
                killScore: 2000,
                health: 2800,
                weightM: 0.45,
                speed: 0.001,
                turnSpeed: 0.0008,
                scale: 90,
                viewRange: 900,
                chargePlayer: true,
                drop: ["food", 400]
            }, {
                id: 4,
                name: "Wolf",
                src: "wolf_1",
                hostile: true,
                dmg: 8,
                killScore: 500,
                health: 300,
                weightM: 0.45,
                speed: 0.001,
                turnSpeed: 0.002,
                scale: 84,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 200]
            }, {
                id: 5,
                name: "Quack",
                src: "chicken_1",
                dmg: 8,
                killScore: 2000,
                noTrap: true,
                health: 300,
                weightM: 0.2,
                speed: 0.0018,
                turnSpeed: 0.006,
                scale: 70,
                drop: ["food", 100]
            }, {
                id: 6,
                name: "MOOSTAFA",
                nameScale: 50,
                src: "enemy",
                hostile: true,
                dontRun: true,
                fixedSpawn: true,
                spawnDelay: 60000,
                noTrap: true,
                colDmg: 100,
                dmg: 40,
                killScore: 8000,
                health: 18000,
                weightM: 0.4,
                speed: 0.0007,
                turnSpeed: 0.01,
                scale: 80,
                spriteMlt: 1.8,
                leapForce: 0.9,
                viewRange: 1000,
                hitRange: 210,
                hitDelay: 1000,
                chargePlayer: true,
                drop: ["food", 100]
            }, {
                id: 7,
                name: "Treasure",
                hostile: true,
                nameScale: 35,
                src: "crate_1",
                fixedSpawn: true,
                spawnDelay: 120000,
                colDmg: 200,
                killScore: 5000,
                health: 20000,
                weightM: 0.1,
                speed: 0.0,
                turnSpeed: 0.0,
                scale: 70,
                spriteMlt: 1.0
            }, {
                id: 8,
                name: "MOOFIE",
                src: "wolf_2",
                hostile: true,
                fixedSpawn: true,
                dontRun: true,
                hitScare: 4,
                spawnDelay: 30000,
                noTrap: true,
                nameScale: 35,
                dmg: 10,
                colDmg: 100,
                killScore: 3000,
                health: 7000,
                weightM: 0.45,
                speed: 0.0015,
                turnSpeed: 0.002,
                scale: 90,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 1000]
            }];

            // SPAWN AI:
            this.spawn = function(x, y, dir, index) {
                let tmpObj = ais.find((tmp) => !tmp.active);
                if (!tmpObj) {
                    tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server);
                    ais.push(tmpObj);
                }
                tmpObj.init(x, y, dir, index, this.aiTypes[index]);
                return tmpObj;
            };
        }

    };
    class AI {
        constructor(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
            this.sid = sid;
            this.isAI = true;
            this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1);

            // INIT:
            this.init = function(x, y, dir, index, data) {
                this.x = x;
                this.y = y;
                this.startX = data.fixedSpawn ? x : null;
                this.startY = data.fixedSpawn ? y : null;
                this.xVel = 0;
                this.yVel = 0;
                this.zIndex = 0;
                this.dir = dir;
                this.dirPlus = 0;
                this.showName = 'aaa';
                this.index = index;
                this.src = data.src;
                if (data.name) this.name = data.name;
                this.weightM = data.weightM;
                this.speed = data.speed;
                this.killScore = data.killScore;
                this.turnSpeed = data.turnSpeed;
                this.scale = data.scale;
                this.maxHealth = data.health;
                this.leapForce = data.leapForce;
                this.health = this.maxHealth;
                this.chargePlayer = data.chargePlayer;
                this.viewRange = data.viewRange;
                this.drop = data.drop;
                this.dmg = data.dmg;
                this.hostile = data.hostile;
                this.dontRun = data.dontRun;
                this.hitRange = data.hitRange;
                this.hitDelay = data.hitDelay;
                this.hitScare = data.hitScare;
                this.spriteMlt = data.spriteMlt;
                this.nameScale = data.nameScale;
                this.colDmg = data.colDmg;
                this.noTrap = data.noTrap;
                this.spawnDelay = data.spawnDelay;
                this.hitWait = 0;
                this.waitCount = 1000;
                this.moveCount = 0;
                this.targetDir = 0;
                this.active = true;
                this.alive = true;
                this.runFrom = null;
                this.chargeTarget = null;
                this.dmgOverTime = {};
            };

            let tmpRatio = 0;
            let animIndex = 0;
            this.animate = function(delta) {
                if (this.animTime > 0) {
                    this.animTime -= delta;
                    if (this.animTime <= 0) {
                        this.animTime = 0;
                        this.dirPlus = 0;
                        tmpRatio = 0;
                        animIndex = 0;
                    } else {
                        if (animIndex == 0) {
                            tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                            this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                            if (tmpRatio >= 1) {
                                tmpRatio = 1;
                                animIndex = 1;
                            }
                        } else {
                            tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                            this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                        }
                    }
                }
            };

            // ANIMATION:
            this.startAnim = function() {
                this.animTime = this.animSpeed = 600;
                this.targetAngle = Math.PI * 0.8;
                tmpRatio = 0;
                animIndex = 0;
            };

        };

    };
    class addCh {
        constructor(x, y, chat, tmpObj) {
            this.x = x;
            this.y = y;
            this.alpha = 0;
            this.active = true;
            this.alive = false;
            this.chat = chat;
            this.owner = tmpObj;
        };
    };
    class DeadPlayer {
        constructor(x, y, dir, buildIndex, weaponIndex, weaponVariant, skinColor, scale, name) {
            this.x = x;
            this.y = y;
            this.lastDir = dir;
            this.dir = dir + Math.PI;
            this.buildIndex = buildIndex;
            this.weaponIndex = weaponIndex;
            this.weaponVariant = weaponVariant;
            this.skinColor = skinColor;
            this.scale = scale;
            this.visScale = 0;
            this.name = name;
            this.alpha = 1;
            this.active = true;
            this.animate = function(delta) {
                let d2 = UTILS.getAngleDist(this.lastDir, this.dir);
                if (d2 > 0.01) {
                    this.dir += d2 / 20;
                } else {
                    this.dir = this.lastDir;
                }
                if (this.visScale < this.scale) {
                    this.visScale += delta / (this.scale / 2);
                    if (this.visScale >= this.scale) {
                        this.visScale = this.scale;
                    }
                }
                this.alpha -= delta / 30000;
                if (this.alpha <= 0) {
                    this.alpha = 0;
                    this.active = false;
                }
            }
        }
    };
    class Player {
        constructor(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
            this.id = id;
            this.sid = sid;
            this.tmpScore = 0;
            this.team = null;
            this.latestSkin = 0;
            this.oldSkinIndex = 0;
            this.skinIndex = 0;
            this.latestTail = 0;
            this.oldTailIndex = 0;
            this.tailIndex = 0;
            this.hitTime = 0;
            this.lastHit = 0;
            this.showName = 'NOOO';
            this.tails = {};
            for (let i = 0; i < accessories.length; ++i) {
                if (accessories[i].price <= 0)
                    this.tails[accessories[i].id] = 1;
            }
            this.skins = {};
            for (let i = 0; i < hats.length; ++i) {
                if (hats[i].price <= 0)
                    this.skins[hats[i].id] = 1;
            }
            this.points = 0;
            this.dt = 0;
            this.hidden = false;
            this.itemCounts = {};
            this.isPlayer = true;
            this.pps = 0;
            this.moveDir = undefined;
            this.skinRot = 0;
            this.lastPing = 0;
            this.iconIndex = 0;
            this.skinColor = 0;
            this.dist2 = 0;
            this.aim2 = 0;
            this.maxSpeed = 1;
            this.chat = {
                message: null,
                count: 0
            };
            this.circle = false;
            this.cAngle = 0;
            // SPAWN:
            this.spawn = function(moofoll) {
                this.attacked = false;
                this.timeDamaged = 0;
                this.timeHealed = 0;
                this.pinge = 0;
                this.millPlace = 'NOOO';
                this.lastshamecount = 0;
                this.death = false;
                this.spinDir = 0;
                this.sync = false;
                this.antiBull = 0;
                this.bullTimer = 0;
                this.poisonTimer = 0;
                this.active = true;
                this.alive = true;
                this.lockMove = false;
                this.lockDir = false;
                this.minimapCounter = 0;
                this.chatCountdown = 0;
                this.shameCount = 0;
                this.shameTimer = 0;
                this.sentTo = {};
                this.gathering = 0;
                this.gatherIndex = 0;
                this.shooting = {};
                this.shootIndex = 9;
                this.autoGather = 0;
                this.animTime = 0;
                this.animSpeed = 0;
                this.mouseState = 0;
                this.buildIndex = -1;
                this.weaponIndex = 0;
                this.weaponCode = 0;
                this.weaponVariant = 0;
                this.primaryIndex = undefined;
                this.secondaryIndex = undefined;
                this.dmgOverTime = {};
                this.noMovTimer = 0;
                this.maxXP = 300;
                this.XP = 0;
                this.age = 1;
                this.kills = 0;
                this.upgrAge = 2;
                this.upgradePoints = 0;
                this.x = 0;
                this.y = 0;
                this.oldXY = {
                    x: 0,
                    y: 0
                };
                this.zIndex = 0;
                this.xVel = 0;
                this.yVel = 0;
                this.slowMult = 1;
                this.dir = 0;
                this.dirPlus = 0;
                this.targetDir = 0;
                this.targetAngle = 0;
                this.maxHealth = 100;
                this.health = this.maxHealth;
                this.oldHealth = this.maxHealth;
                this.damaged = 0;
                this.scale = config.playerScale;
                this.speed = config.playerSpeed;
                this.resetMoveDir();
                this.resetResources(moofoll);
                this.items = [0, 3, 6, 10];
                this.weapons = [0];
                this.shootCount = 0;
                this.weaponXP = [];
                this.reloads = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    53: 0,
                };
                this.bowThreat = {
                    9: 0,
                    12: 0,
                    13: 0,
                    15: 0,
                };
                this.damageThreat = 0;
                this.inTrap = false;
                this.canEmpAnti = false;
                this.empAnti = false;
                this.soldierAnti = false;
                this.poisonTick = 0;
                this.bullTick = 0;
                this.setPoisonTick = false;
                this.setBullTick = false;
                this.antiTimer = 2;
            };

            // RESET MOVE DIR:
            this.resetMoveDir = function() {
                this.moveDir = undefined;
            };

            // RESET RESOURCES:
            this.resetResources = function(moofoll) {
                for (let i = 0; i < config.resourceTypes.length; ++i) {
                    this[config.resourceTypes[i]] = moofoll ? 100 : 0;
                }
            };

            // ADD ITEM:
            this.getItemType = function(id) {
                let findindx = this.items.findIndex((ids) => ids == id);
                if (findindx != -1) {
                    return findindx;
                } else {
                    return items.checkItem.index(id, this.items);
                }
            };

            // SET DATA:
            this.setData = function(data) {
                this.id = data[0];
                this.sid = data[1];
                this.name = data[2];
                this.x = data[3];
                this.y = data[4];
                this.dir = data[5];
                this.health = data[6];
                this.maxHealth = data[7];
                this.scale = data[8];
                this.skinColor = data[9];
            };

            // UPDATE POISON TICK:
            this.updateTimer = function() {

                this.bullTimer -= 1;
                if (this.bullTimer <= 0) {
                    this.setBullTick = false;
                    this.bullTick = game.tick - 1;
                    this.bullTimer = config.serverUpdateRate;
                }
                this.poisonTimer -= 1;
                if (this.poisonTimer <= 0) {
                    this.setPoisonTick = false;
                    this.poisonTick = game.tick - 1;
                    this.poisonTimer = config.serverUpdateRate;
                }

            };
            this.update = function(delta) {
                if (this.active) {

                    // MOVE:
                    let gear = {
                        skin: findID(hats, this.skinIndex),
                        tail: findID(accessories, this.tailIndex)
                    }
                    let spdMult = ((this.buildIndex >= 0) ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (gear.skin ? (gear.skin.spdMult || 1) : 1) * (gear.tail ? (gear.tail.spdMult || 1) : 1) * (this.y <= config.snowBiomeTop ? ((gear.skin && gear.skin.coldM) ? 1 : config.snowSpeed) : 1) * this.slowMult;
                    this.maxSpeed = spdMult;

                }
            };

            let tmpRatio = 0;
            let animIndex = 0;
            this.animate = function(delta) {
                if (this.animTime > 0) {
                    this.animTime -= delta;
                    if (this.animTime <= 0) {
                        this.animTime = 0;
                        this.dirPlus = 0;
                        tmpRatio = 0;
                        animIndex = 0;
                    } else {
                        if (animIndex == 0) {
                            tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                            this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                            if (tmpRatio >= 1) {
                                tmpRatio = 1;
                                animIndex = 1;
                            }
                        } else {
                            tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio));
                            this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                        }
                    }
                }
            };

            // GATHER ANIMATION:
            this.startAnim = function(didHit, index) {
                this.animTime = this.animSpeed = items.weapons[index].speed;
                this.targetAngle = (didHit ? -config.hitAngle : -Math.PI);
                tmpRatio = 0;
                animIndex = 0;
            };

            // CAN SEE:
            this.canSee = function(other) {
                if (!other) return false;
                let dx = Math.abs(other.x - this.x) - other.scale;
                let dy = Math.abs(other.y - this.y) - other.scale;
                return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3;
            };

            // SHAME SYSTEM:
            this.judgeShame = function() {
                this.lastshamecount = this.shameCount;
                if (this.oldHealth < this.health) {
                    if (this.hitTime) {
                        let timeSinceHit = game.tick - this.hitTime;
                        this.lastHit = game.tick;
                        this.hitTime = 0;
                        if (timeSinceHit < 2) {
                            this.shameCount++;
                        } else {
                            this.shameCount = Math.max(0, this.shameCount - 2);
                        }
                    }
                } else if (this.oldHealth > this.health) {
                    this.hitTime = game.tick;
                }
            };
            this.addShameTimer = function() {
                this.shameCount = 0;
                this.shameTimer = 30;
                let interval = setInterval(() => {
                    this.shameTimer--;
                    if (this.shameTimer <= 0) {
                        clearInterval(interval);
                    }
                }, 1000);
            };

            // CHECK TEAM:
            this.isTeam = function(tmpObj) {
                return (this == tmpObj || (this.team && this.team == tmpObj.team));
            };

            // FOR THE PLAYER:
            this.findAllianceBySid = function(sid) {
                return this.team ? alliancePlayers.find((THIS) => THIS === sid) : null;
            };
            this.checkCanInsta = function(nobull) {
                let totally = 0;
                if (this.alive && inGame) {
                    let primary = {
                        weapon: this.weapons[0],
                        variant: this.primaryVariant,
                        dmg: this.weapons[0] == undefined ? 0 : items.weapons[this.weapons[0]].dmg,
                    };
                    let secondary = {
                        weapon: this.weapons[1],
                        variant: this.secondaryVariant,
                        dmg: this.weapons[1] == undefined ? 0 : items.weapons[this.weapons[1]].Pdmg,
                    };
                    let bull = this.skins[7] && !nobull ? 1.5 : 1;
                    let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1;
                    if (primary.weapon != undefined && this.reloads[primary.weapon] == 0) {
                        totally += primary.dmg * pV * bull;
                    }
                    if (secondary.weapon != undefined && this.reloads[secondary.weapon] == 0) {
                        totally += secondary.dmg;
                    }
                    if (this.skins[53] && this.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate) && near.skinIndex != 22) {
                        totally += 25;
                    }
                    totally *= near.skinIndex == 6 ? 0.75 : 1;
                    return totally;
                }
                return 0;
            };

            // UPDATE WEAPON RELOAD:
            this.manageReload = function() {
                if (this.shooting[53]) {
                    this.shooting[53] = 0;
                    this.reloads[53] = (2500 - game.tickRate);
                } else {
                    if (this.reloads[53] > 0) {
                        this.reloads[53] = Math.max(0, this.reloads[53] - game.tickRate);
                    }
                }

                // PREPLACER
                if (this.reloads[this.weaponIndex] <= 1000/9) {
                    // place(2, getAttackDir());
                    let index = this.weaponIndex;
                    let nearObja = liztobj.filter((e) => (e.active || e.alive) && e.health < e.maxHealth && e.group !== undefined && UTILS.getDist(e, player, 0, 2) <= (items.weapons[player.weaponIndex].range + e.scale));
                    for(let i = 0; i < nearObja.length; i++) {
                        let aaa = nearObja[i];

                        let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * 3.3;
                        let valaa = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1);
                        if(aaa.health - (valaa) <= 0 && near.length) {
                            place(near.dist2<((near.scale * 1.8) + 50)?4:2, caf(aaa, player) + Math.PI)
                            console.log("preplaced");
                        }
                    }
                }

                if (this.gathering || this.shooting[1]) {
                    if (this.gathering) {
                        this.gathering = 0;
                        this.reloads[this.gatherIndex] = (items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                        this.attacked = true;
                    }
                    if (this.shooting[1]) {
                        this.shooting[1] = 0;
                        this.reloads[this.shootIndex] = (items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                        this.attacked = true;
                    }
                } else {
                    this.attacked = false;
                    if (this.buildIndex < 0) {
                        if (this.reloads[this.weaponIndex] > 0) {
                            // Math.max(0, this.reloads[this.weaponIndex] - game.tickRate)
                            this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - 110);
                            if (this == player) {
                                if (getEl("weaponGrind").checked) {
                                    for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                        checkPlace(player.getItemType(22), i);
                                    }
                                }
                            }
                            if (this.reloads[this.primaryIndex] == 0 && this.reloads[this.weaponIndex] == 0) {
                                this.antiBull++;
                                game.tickBase(() => {
                                    this.antiBull = 0;
                                }, 1);
                            }
                        }
                    }
                }
            };

            // FOR ANTI INSTA:
            this.addDamageThreat = function(tmpObj) {
                let primary = {
                    weapon: this.primaryIndex,
                    variant: this.primaryVariant
                };
                primary.dmg = primary.weapon == undefined ? 45 : items.weapons[primary.weapon].dmg;
                let secondary = {
                    weapon: this.secondaryIndex,
                    variant: this.secondaryVariant
                };
                secondary.dmg = secondary.weapon == undefined ? 75 : items.weapons[secondary.weapon].Pdmg;
                let bull = 1.5;
                let pV = primary.variant != undefined ? config.weaponVariants[primary.variant].val : 1.18;
                let sV = secondary.variant != undefined ? [9, 12, 13, 15].includes(secondary.weapon) ? 1 : config.weaponVariants[secondary.variant].val : 1.18;
                if (primary.weapon == undefined ? true : this.reloads[primary.weapon] == 0) {
                    this.damageThreat += primary.dmg * pV * bull;
                }
                if (secondary.weapon == undefined ? true : this.reloads[secondary.weapon] == 0) {
                    this.damageThreat += secondary.dmg * sV;
                }
                if (this.reloads[53] <= game.tickRate) {
                    this.damageThreat += 25;
                }
                this.damageThreat *= tmpObj.skinIndex == 6 ? 0.75 : 1;
                if (!this.isTeam(tmpObj)) {
                    if (this.dist2 <= 300) {
                        tmpObj.damageThreat += this.damageThreat;
                    }
                }
            };

        }
    };
    // SOME CODES:
    function sendUpgrade(index) {
        player.reloads[index] = 0;
        packet("H", index);
    }

    function storeEquip(id, index) {
        packet("c", 0, id, index);
    }

    function storeBuy(id, index) {
        packet("c", 1, id, index);
    }
    function buyAndEquipItem(isAccessory, itemId) {
        // Determine the store index based on whether it's a hat or accessory
        const storeIndex = isAccessory ? 1 : 0;

        // Find the item in the appropriate array
        const item = isAccessory ? accessories.find(acc => acc.id === itemId) : hats.find(hat => hat.id === itemId);

        if (!item) {
            console.log("Item not found.");
            return;
        }

        // Check if the player has enough points to buy the item
        if (player.points >= item.price) {
            // Purchase and equip the item
            packet("c", 1,item.id, storeIndex);
            packet("c", 0, item.id, storeIndex);
            console.log(`${item.name} purchased and equipped.`);
        } else {
            console.log("Not enough points to purchase this item.");
        }
    }

    function buyEquip(id, index) {
        let nID = player.skins[6] ? 6 : 0;
        if (player.alive && inGame) {
            if (index == 0) {
                if (player.skins[id]) {
                    if (player.latestSkin != id) {
                        packet("c", 0, id, 0);
                    }
                } else {
                    if (configs.autoBuyEquip) {
                        let find = findID(hats, id);
                        if (find) {
                            if (player.points >= find.price) {
                                packet("c", 1, id, 0);
                                packet("c", 0, id, 0);
                            } else {
                                if (player.latestSkin != nID) {
                                    packet("c", 0, nID, 0);
                                }
                            }
                        } else {
                            if (player.latestSkin != nID) {
                                packet("c", 0, nID, 0);
                            }
                        }
                    } else {
                        if (player.latestSkin != nID) {
                            packet("c", 0, nID, 0);
                        }
                    }
                }
            } else if (index == 1) {
                if (useWasd && (id != 11 && id != 0)) {
                    if (player.latestTail != 0) {
                        packet("c", 0, 0, 1);
                    }
                    return;
                }
                if (player.tails[id]) {
                    if (player.latestTail != id) {
                        packet("c", 0, id, 1);
                    }
                } else {
                    if (configs.autoBuyEquip) {
                        let find = findID(accessories, id);
                        if (find) {
                            if (player.points >= find.price) {
                                packet("c", 1, id, 1);
                                packet("c", 0, id, 1);
                            } else {
                                if (player.latestTail != 0) {
                                    packet("c", 0, 0, 1);
                                }
                            }
                        } else {
                            if (player.latestTail != 0) {
                                packet("c", 0, 0, 1);
                            }
                        }
                    } else {
                        if (player.latestTail != 0) {
                            packet("c", 0, 0, 1);
                        }
                    }
                }
            }
        }
    }

    function selectToBuild(index, wpn) {
        packet("G", index, wpn);
    }

    function selectWeapon(index, isPlace) {
        if (!isPlace) {
            player.weaponCode = index;
        }
        packet("G", index, 1);
    }

    function sendAutoGather() {
        packet("K", 1, 1);
    }

    function sendAtck(id, angle) {
        packet("d", id, angle, 1);
    }

    // PLACER:
    function place(id, rad, rmd) {
        try {
            if (id == undefined) return;
            let item = items.list[player.items[id]];
            let tmpS = player.scale + item.scale + (item.placeOffset || 0);
            let tmpX = player.x2 + tmpS * Math.cos(rad);
            let tmpY = player.y2 + tmpS * Math.sin(rad);
            if ((player.alive && inGame && player.itemCounts[item.group.id] == undefined ? true : player.itemCounts[item.group.id] < (config.isSandbox ? 299 : item.group.limit ? item.group.limit : 99))) {
                selectToBuild(player.items[id]);
                sendAtck(1, rad);
                selectWeapon(player.weaponCode, 1);
                if (rmd && getEl("placeVis").checked) {
                    placeVisible.push({
                        x: tmpX,
                        y: tmpY,
                        name: item.name,
                        scale: item.scale,
                        dir: rad
                    });
                    game.tickBase(() => {
                        placeVisible.shift();
                    }, 1)
                }
            }
        } catch (e) {}
    }

    function checkPlace(id, rad) {
        try {
            if (id == undefined) return;
            let item = items.list[player.items[id]];
            let tmpS = player.scale + item.scale + (item.placeOffset || 0);
            let tmpX = player.x2 + tmpS * Math.cos(rad);
            let tmpY = player.y2 + tmpS * Math.sin(rad);
            if (objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, false, player)) {
                place(id, rad, 1);
            }
        } catch (e) {}
    }

    // HEALING:
    function soldierMult() {
        return player.latestSkin == 6 ? 0.75 : 1;
    }

    function healthBased() {
        if (player.health == 100)
            return 0;
        if ((player.skinIndex != 45 && player.skinIndex != 56)) {
            return Math.ceil((100 - player.health) / items.list[player.items[0]].healing);
        }
        return 0;
    }

    function getAttacker(damaged) {
        let attackers = enemy.filter(tmp => {
            //let damages = new Damages(items);
            //let dmg = damages.weapons[tmp.weaponIndex];
            //let by = tmp.weaponIndex < 9 ? [dmg[0], dmg[1], dmg[2], dmg[3]] : [dmg[0], dmg[1]];
            let rule = {
                //one: tmp.dist2 <= 300,
                //two: by.includes(damaged),
                three: tmp.attacked
            }
            return /*rule.one && rule.two && */ rule.three;
        });
        return attackers;
    }

    function healer() {
        for (let i = 0; i < healthBased(); i++) {
            place(0, getAttackDir());
        }
    }

    function antiSyncHealing(timearg) {
        my.antiSync = true;
        let healAnti = setInterval(() => {
            if (player.shameCount < 5) {
                place(0, getAttackDir());
            }
        }, 75);
        setTimeout(() => {
            clearInterval(healAnti);
            setTimeout(() => {
                my.antiSync = false;
            }, game.tickRate);
        }, game.tickRate);
    }
    function applCxC(value) {
        if (player.health == 100)
            return 0;
        if (player.skinIndex != 45 && player.skinIndex != 56) {
            return Math.ceil(value / items.list[player.items[0]].healing);
        }
        return 0;
    }
    function calcDmg(value) {
        return value * player.skinIndex == 6 ? 0.75 : 1;
    }
    function biomeGear(mover, returns) {
        if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
            if (returns) return 31;
            buyEquip(31, 0);
        } else {
            if (player.y2 <= config.snowBiomeTop) {
                if (returns) return mover && player.moveDir == undefined ? 22 : 15;
                buyEquip(mover && player.moveDir == undefined ? 22 : 15, 0);
            } else {
                if (returns) return mover && player.moveDir == undefined ? 22 : 12;
                buyEquip(mover && player.moveDir == undefined ? 22 : 12, 0);
            }
        }
        if (returns) return 0;
    }
    let advHeal = [];
    let info = {};

    let spikeKT = function() {
        return player.weapons[1] == 10 && ((info.health > items.weapons[player.weapons[0]].dmg) || player.weapons[0] == 5);
    }

    let aimSpike = 0;

    let nearspiker = false;

    class Traps {
        constructor(UTILS, items) {
            this.dist = 0;
            this.aim = 0;
            this.inTrap = false;
            this.replaced = false;
            this.antiTrapped = false;
            this.info = {};
            this.notFast = function() {
                return player.weapons[1] == 10 && ((this.info.health > items.weapons[player.weapons[0]].dmg) || player.weapons[0] == 5);
            }
            this.testCanPlace = function(id, first = -(Math.PI / 2), repeat = (Math.PI / 2), plus = (Math.PI / 18), radian, replacer, yaboi) {
                try {
                    let item = items.list[player.items[id]];
                    let tmpS = player.scale + item.scale + (item.placeOffset || 0);
                    let counts = {
                        attempts: 0,
                        placed: 0
                    };
                    let tmpObjects = [];
                    liztobj.forEach((p) => {
                        tmpObjects.push({
                            x: p.x,
                            y: p.y,
                            active: p.active,
                            blocker: p.blocker,
                            scale: p.scale,
                            isItem: p.isItem,
                            type: p.type,
                            colDiv: p.colDiv,
                            getScale: function(sM, ig) {
                                sM = sM || 1;
                                return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4)
                                                     ? 1 : (0.6 * sM)) * (ig ? 1 : this.colDiv);
                            },
                        });
                    });
                    for (let i = first; i < repeat; i += plus) {
                        counts.attempts++;
                        let relAim = radian + i;
                        let tmpX = player.x2 + tmpS * Math.cos(relAim);
                        let tmpY = player.y2 + tmpS * Math.sin(relAim);
                        let cantPlace = tmpObjects.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                        if (cantPlace) continue;
                        if (item.id != 18 && tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                        if ((!replacer && yaboi)) {
                            if (yaboi.inTrap) {
                                if (UTILS.getAngleDist(near.aim2 + Math.PI, relAim + Math.PI) <= Math.PI*1.3) {
                                    place(2, relAim, 1);
                                } else {
                                    player.items[4] == 15 && place(4, relAim, 1);
                                }
                            } else {
                                if (UTILS.getAngleDist(near.aim2, relAim) <= config.gatherAngle / 2.6) {
                                    place(2, relAim, 1);
                                } else {
                                    player.items[4] == 15 && place(4, relAim, 1);
                                }
                            }
                        } else {
                            place(id, relAim, 1);
                        }
                        tmpObjects.push({
                            x: tmpX,
                            y: tmpY,
                            active: true,
                            blocker: item.blocker,
                            scale: item.scale,
                            isItem: true,
                            type: null,
                            colDiv: item.colDiv,
                            getScale: function() {
                                return this.scale;
                            },
                        });
                        if (UTILS.getAngleDist(near.aim2, relAim) <= 1) {
                            counts.placed++;
                        }
                    }
                    if (counts.placed > 0 && replacer && item.dmg) {
                        if (near.dist2 <= items.weapons[player.weapons[0]].range + (player.scale * 1.8) && configs.spikeTick) {
                            instaC.canSpikeTick = true;
                        }
                    }
                } catch (err) {
                }
            };
            this.checkSpikeTick = function() {
                try {
                    if (![3, 4, 5].includes(near.primaryIndex)) return false;
                    if ((my.autoPush) ? false : near.primaryIndex == undefined ? true : (near.reloads[near.primaryIndex] > game.tickRate)) return false;
                    // more range for safe. also testing near.primaryIndex || 5
                    if (near.dist2 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                        let item = items.list[9];
                        let tmpS = near.scale + item.scale + (item.placeOffset || 0);
                        let danger = 0;
                        let counts = {
                            attempts: 0,
                            block: `unblocked`
                        };
                        for (let i = -1; i <= 1; i += 1 / 10) {
                            counts.attempts++;
                            let relAim = UTILS.getDirect(player, near, 2, 2) + i;
                            let tmpX = near.x2 + tmpS * Math.cos(relAim);
                            let tmpY = near.y2 + tmpS * Math.sin(relAim);
                            let cantPlace = liztobj.find((tmp) => tmp.active && UTILS.getDistance(tmpX, tmpY, tmp.x, tmp.y) < item.scale + (tmp.blocker ? tmp.blocker : tmp.getScale(0.6, tmp.isItem)));
                            if (cantPlace) continue;
                            if (tmpY >= config.mapScale / 2 - config.riverWidth / 2 && tmpY <= config.mapScale / 2 + config.riverWidth / 2) continue;
                            danger++;
                            counts.block = `blocked`;
                            break;
                        }
                        if (danger) {
                            my.anti0Tick = 1;
                            // player.chat.message = "Anti SpikeTick " + near.sid;
                            if (spikes.near && getEl("atSpike").checked && !autos.insta.wait && !antispiketick) { // Anti Spike
                                spikes.aim = C.getDirection(spikes.near.x, spikes.near.y, E.x, E.y);
                                spikes.dist = C.getDistance(spikes.near.x, spikes.near.y, E.x, E.y);
                                let nearDist = spikes.dist - 25 < R.weapons[E.weapons[1] == 10 ? E.weapons[1] : E.weapons[0]].range + 100;
                                let breakDist = spikes.dist - 25 < R.weapons[E.weapons[1] == 10 ? E.weapons[1] : E.weapons[0]].range + 35;
                                if (nearDist) {
                                    spikes.nearSpike = true;
                                    if (spikes.nearSpike && (spikes.dist - 20) >= 65 && (Date.now() - stopCD) > 500) {
                                        stopCD = Date.now();
                                        ee.send("a", null);
                                    }
                                    if (breakDist) {
                                        modWrite("anti spike (" + Math.ceil(E.x) + ", " + Math.ceil(E.y) + ")");
                                        spikes.nearBreak = true;
                                    }
                                    else {
                                        spikes.nearBreak = false;
                                    }
                                } else {
                                    spikes.nearSpike = false;
                                    spikes.nearBreak = false;
                                }
                            } else {
                                spikes.nearSpike = false;
                                spikes.nearBreak = false;
                            }
                            //player.chat.count = 2000;
                            return true;
                        }
                    }
                } catch (err) {
                    return null;
                }
                return false;
            }

            function getDist(e, t) {
                try {
                    return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
                } catch (e) {
                    return Infinity;
                }
            }

            this.protect = function(aim) {
                if (!configs.antiTrap) return;
                if(getDist(near, player) > getDist(near, traps.info)) {
                    //behind u
                    for(let i=-(Math.PI / 2);i<(Math.PI / 2);i+=(Math.PI / 18)) {
                        checkPlace(2, near.aim2 + i);
                    }
                } else if(getDist(near, traps.info) > getDist(near, player)) {
                    //infront of u
                    for(let i=-(Math.PI / 2);i<(Math.PI / 2);i+=(Math.PI / 18)) {
                        checkPlace(4, near.aim2 + i);
                    }
                }

                // if (player.items[4]) {
                //     this.testCanPlace(4, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), aim + Math.PI);
                //     this.antiTrapped = true;
                // }
            };
            this.autoPlace = function() {
                if (enemy.length && configs.autoPlace && !instaC.ticking) {
                    if (game.tick % (Math.max(1, parseInt(getEl("autoPlaceTick").value)) || 1) === 0) {
                        if (liztobj.length) {
                            let near2 = {
                                inTrap: false,
                            };
                            let nearTrap = liztobj.filter(e => e.trap && e.active && e.isTeamObject(player) && UTILS.getDist(e, near, 0, 2) <= (near.scale + e.getScale() + 5)).sort(function(a, b) {
                                return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                            })[0];
                            if (nearTrap) {
                                near2.inTrap = true;
                            } else {
                                near2.inTrap = false;
                            }
                            if (near.dist3 <= 450) {
                                if (near.dist2 <= 200) {
                                    this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                                } else {
                                    player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                                }
                            }
                        } else {
                            if (near.dist3 <= 450) {
                                player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), near.aim2);
                            }
                        }
                    }
                }
            };
            this.replacer = function(findObj) {
                if (!findObj || !configs.autoReplace) return;
                if (!inGame) return;
                if (this.antiTrapped) return;
                game.tickBase(() => {
                    let objAim = UTILS.getDirect(findObj, player, 0, 2);
                    let objDst = UTILS.getDist(findObj, player, 0, 2);
                    if (getEl("weaponGrind").checked && objDst <= items.weapons[player.weaponIndex].range + player.scale) return;
                    if (objDst <= 400 && near.dist2 <= 400) {
                        let danger = this.checkSpikeTick();
                        if (!danger && near.dist3 <= items.weapons[near.primaryIndex || 5].range + (near.scale * 1.8)) {
                            this.testCanPlace(2, -(Math.PI / 2), (Math.PI / 2), (Math.PI / 18), objAim, 1);
                            this.testCanPlace(2, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                        } else {
                            player.items[4] == 15 && this.testCanPlace(4, 0, (Math.PI * 2), (Math.PI / 24), objAim, 1);
                        }
                        this.replaced = true;
                    }
                }, 1);
            };
        }
    };

    class Instakill {
        constructor() {
            this.wait = false;
            this.can = false;
            this.isTrue = false;
            this.nobull = false;
            this.ticking = false;
            this.canSpikeTick = false;
            this.startTick = false;
            this.readyTick = false;
            this.canCounter = false;
            this.revTick = false;
            this.syncHit = false;
            this.changeType = function(type) {
                this.wait = false;
                this.isTrue = true;
                my.autoAim = true;
                let instaLog = [type];
                if (type == "rev") {
                    packet("6", 'snoweiv3.1415926535897');
                    selectWeapon(player.weapons[1]);
                    buyEquip(53, 0);
                    buyEquip(21, 1);
                    sendAutoGather();
                    game.tickBase(()=> {
                        selectWeapon(player.weapons[0]);
                        buyEquip(7, 0);
                        buyEquip(18, 1);
                        game.tickBase(()=> {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                        }, 1);
                    }, 1);
                    /*selectWeapon(player.weapons[1]);
                    buyEquip(53, 0);
                    sendAutoGather();
                    setTimeout(() => {
                        selectWeapon(player.weapons[0]);
                        buyEquip(7, 0);
                        setTimeout(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                        }, 225);
                    }, 100);*/
                } else if (type == "nobull") {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    sendAutoGather();
                    setTimeout(() => {
                        selectWeapon(player.weapons[1]);
                        buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                        setTimeout(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                        }, 255);
                    }, 105);
                } else if (type == "normal") {
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    sendAutoGather();
                    setTimeout(() => {
                        selectWeapon(player.weapons[1]);
                        buyEquip(player.reloads[53] == 0 ? 53 : 6, 0);
                        setTimeout(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                        }, 255);
                    }, 100);
                } else {
                    setTimeout(() => {
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 50);
                }
            };
            this.spikeTickType = function() {
                // spike tick
                function _0x4359(_0x2eb17d,_0xc7deca){const _0x1a7207=_0x1a72();return _0x4359=function(_0x43591f,_0x25c28d){_0x43591f=_0x43591f-0x1ac;let _0x47903c=_0x1a7207[_0x43591f];return _0x47903c;},_0x4359(_0x2eb17d,_0xc7deca);}const _0x17acf4=_0x4359;function _0x1a72(){const _0x35d215=['isTrue','457564gCvaSV','10885830MiQKSV','weapons','Project Sheepy','tickBase','5080FVGhcW','2682NqHuOF','3rkOQDg','1960ijtPVr','send','getDirect','986276xcsTAD','11264ueamRE','999429zeDXOx','1503516UpKOdB','25BlUGnX'];_0x1a72=function(){return _0x35d215;};return _0x1a72();}(function(_0x10751a,_0x3e61c0){const _0x4ccd0c=_0x4359,_0x2e0d9f=_0x10751a();while(!![]){try{const _0x85e0e8=-parseInt(_0x4ccd0c(0x1b5))/0x1+parseInt(_0x4ccd0c(0x1b3))/0x2*(parseInt(_0x4ccd0c(0x1af))/0x3)+-parseInt(_0x4ccd0c(0x1b9))/0x4*(parseInt(_0x4ccd0c(0x1b7))/0x5)+parseInt(_0x4ccd0c(0x1ba))/0x6+parseInt(_0x4ccd0c(0x1b6))/0x7+-parseInt(_0x4ccd0c(0x1ad))/0x8*(-parseInt(_0x4ccd0c(0x1ae))/0x9)+-parseInt(_0x4ccd0c(0x1b0))/0xa*(parseInt(_0x4ccd0c(0x1b4))/0xb);if(_0x85e0e8===_0x3e61c0)break;else _0x2e0d9f['push'](_0x2e0d9f['shift']());}catch(_0x410297){_0x2e0d9f['push'](_0x2e0d9f['shift']());}}}(_0x1a72,0xe556d));let perfectAngle=UTILS[_0x17acf4(0x1b2)](tmpObj,player,0x0,0x2),placeCountOMG=0x4;this[_0x17acf4(0x1b8)]=!![],my['autoAim']=!![],io[_0x17acf4(0x1b1)]('6',_0x17acf4(0x1bc)),selectWeapon(player[_0x17acf4(0x1bb)][0x0]),buyEquip(0x7,0x0),buyEquip(0x15,0x1),sendAutoGather(),game[_0x17acf4(0x1ac)](()=>{const _0x318aa9=_0x17acf4;selectWeapon(player[_0x318aa9(0x1bb)][0x0]),buyEquip(0x35,0x0),buyEquip(0x15,0x1),game[_0x318aa9(0x1ac)](()=>{sendAutoGather(),this['isTrue']=![],my['autoAim']=![];},0x1);},0x1);
                /*this.isTrue = true;
                my.autoAim = true;
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(53, 0);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);//retire this*/
            };
            this.counterType = function() {
                this.isTrue = true;
                my.autoAim = true;
                selectWeapon(player.weapons[0]);
                buyEquip(7, 0);
                sendAutoGather();
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(53, 0);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }, 1);
            };
            this.rangeType = function(type) {
                this.isTrue = true;
                my.autoAim = true;
                if (type == "ageInsta") {
                    my.ageInsta = false;
                    if (player.items[5] == 18) {
                        place(5, near.aim2);
                    }
                    packet("a", undefined, 1);
                    buyEquip(22, 0);
                    buyEquip(21, 1);
                    game.tickBase(() => {
                        selectWeapon(player.weapons[1]);
                        buyEquip(53, 0);
                        buyEquip(21, 1);
                        sendAutoGather();
                        game.tickBase(() => {
                            sendUpgrade(12);
                            selectWeapon(player.weapons[1]);
                            buyEquip(53, 0);
                            buyEquip(21, 1);
                            game.tickBase(() => {
                                sendUpgrade(15);
                                selectWeapon(player.weapons[1]);
                                buyEquip(53, 0);
                                buyEquip(21, 1);
                                game.tickBase(() => {
                                    sendAutoGather();
                                    this.isTrue = false;
                                    my.autoAim = false;
                                }, 1);
                            }, 1);
                        }, 1);
                    }, 1);
                } else {
                    selectWeapon(player.weapons[1]);
                    if (player.reloads[53] == 0 && near.dist2 <= 700 && near.skinIndex != 22) {
                        buyEquip(53, 0);
                    } else {
                        buyEquip(20, 0);
                    }
                    buyEquip(11, 1);
                    sendAutoGather();
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                    }, 1);
                }
            };
            this.oneTickType = function() {
                this.tickin = true;
                this.isTrue = true;
                my.autoAim = true;
                biomeGear();
                buyEquip(11, 1);
                packet("a", near.aim2, 1);
                game.tickBase(() => {
                    if (player.weapons[1] == 15) {
                        my.revAim = true;
                    }
                    selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                    buyEquip(53, 0);
                    buyEquip(11, 1);
                    if ([9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("a", near.aim2, 1);
                    place(4, near.aim2);
                    io.send("6", "1 Tick Pass")
                    game.tickBase(() => {
                        my.revAim = false;
                        selectWeapon(player.weapons[0]);
                        buyEquip(7, 0);
                        buyEquip(19, 1);
                        if (![9, 12, 13, 15].includes(player.weapons[1])) {
                            sendAutoGather();
                        }
                        packet("a", near.aim2, 1);
                        game.tickBase(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                            packet("a", undefined, 1);
                            this.tickin = false;
                        }, 1);
                    }, 1);
                }, 1);
            };
            this.threeOneTickType = function () {
                this.isTrue = true;
                my.autoAim = true;
                selectWeapon(player.weapons[0]);
                buyEquip(11, 1);
                packet("a", near.aim2, 1);
                game.tickBase(() => {
                    selectWeapon(player.weapons[0]);
                    buyEquip(53, 0);
                    buyEquip(11, 1);
                    packet("a", near.aim2, 1);
                    game.tickBase(() => {
                        selectWeapon(player.weapons[0]);
                        buyEquip(7, 0);
                        buyEquip(19, 1);
                        sendAutoGather();
                        packet("a", near.aim2, 1);
                        game.tickBase(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                            packet("a", undefined, 1);
                        }, 1);
                    }, 1);
                }, 1);
            };
            this.kmTickType = function() {
                this.isTrue = true;
                my.autoAim = true;
                my.revAim = true;
                selectWeapon(player.weapons[1]);
                buyEquip(53, 0);
                buyEquip(11, 1);
                sendAutoGather();
                packet("a", near.aim2, 1);
                game.tickBase(() => {
                    my.revAim = false;
                    selectWeapon(player.weapons[0]);
                    buyEquip(7, 0);
                    buyEquip(19, 1);
                    packet("a", near.aim2, 1);
                    game.tickBase(() => {
                        sendAutoGather();
                        this.isTrue = false;
                        my.autoAim = false;
                        packet("a", undefined, 1);
                    }, 2);
                }, 2);
            };
            this.boostTickType = function() {
                sendChat("lol");
                /*this.isTrue = true;
                        my.autoAim = true;
                        selectWeapon(player.weapons[0]);
                        buyEquip(53, 0);
                        buyEquip(11, 1);
                        packet("a", near.aim2);
                        game.tickBase(() => {
                            place(4, near.aim2);
                            selectWeapon(player.weapons[1]);
                            biomeGear();
                            buyEquip(11, 1);
                            sendAutoGather();
                            packet("a", near.aim2);
                            game.tickBase(() => {
                                selectWeapon(player.weapons[0]);
                                buyEquip(7, 0);
                                buyEquip(19, 1);
                                packet("a", near.aim2);
                                game.tickBase(() => {
                                    sendAutoGather();
                                    this.isTrue = false;
                                    my.autoAim = false;
                                    packet("a", undefined);
                                }, 1);
                            }, 1);
                        }, 1);*/
                this.isTrue = true;
                my.autoAim = true;
                biomeGear();
                buyEquip(11, 1);
                packet("a", near.aim2, 1);
                game.tickBase(() => {
                    if (player.weapons[1] == 15) {
                        my.revAim = true;
                    }
                    selectWeapon(player.weapons[[9, 12, 13, 15].includes(player.weapons[1]) ? 1 : 0]);
                    buyEquip(53, 0);
                    buyEquip(11, 1);
                    if ([9, 12, 13, 15].includes(player.weapons[1])) {
                        sendAutoGather();
                    }
                    packet("a", near.aim2, 1);
                    place(4, near.aim2);
                    game.tickBase(() => {
                        my.revAim = false;
                        selectWeapon(player.weapons[0]);
                        buyEquip(7, 0);
                        buyEquip(19, 1);
                        if (![9, 12, 13, 15].includes(player.weapons[1])) {
                            sendAutoGather();
                        }
                        packet("a", near.aim2, 1);
                        game.tickBase(() => {
                            sendAutoGather();
                            this.isTrue = false;
                            my.autoAim = false;
                            packet("a", undefined, 1);
                        }, 1);
                    }, 1);
                }, 1);
            };
            this.gotoGoal = function (goto, OT) {
                let slowDists = (weeeee) => weeeee * config.playerScale;
                let goal = {
                    a: goto - OT,
                    b: goto + OT,
                    c: goto - slowDists(1),
                    d: goto + slowDists(1),
                    e: goto - slowDists(2),
                    f: goto + slowDists(2),
                    g: goto - slowDists(4),
                    h: goto + slowDists(4)
                };
                let bQ = function(wwww, awwww) {
                    if (player.y2 >= config.mapScale / 2 - config.riverWidth / 2 && player.y2 <= config.mapScale / 2 + config.riverWidth / 2 && awwww == 0) {
                        buyEquip(31, 0);
                    } else {
                        buyEquip(wwww, awwww);
                    }
                }
                if (enemy.length) {
                    let dst = near.dist2;
                    this.ticking = true;
                    if (dst >= goal.a && dst <= goal.b) {
                        bQ(22, 0);
                        bQ(11, 1);
                        if (player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0] || player.buildIndex > -1) {
                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                        }
                        return {
                            dir: undefined,
                            action: 1
                        };
                    } else {
                        if (dst < goal.a) {
                            if (dst >= goal.g) {
                                if (dst >= goal.e) {
                                    if (dst >= goal.c) {
                                        bQ(40, 0);
                                        bQ(10, 1);
                                        if (configs.slowOT) {
                                            player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                        } else {
                                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                            }
                                        }
                                    } else {
                                        bQ(22, 0);
                                        bQ(19, 1);
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(6, 0);
                                    bQ(12, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                biomeGear();
                                bQ(11, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                            return {
                                dir: near.aim2 + Math.PI,
                                action: 0
                            };
                        } else if (dst > goal.b) {
                            if (dst <= goal.h) {
                                if (dst <= goal.f) {
                                    if (dst <= goal.d) {
                                        bQ(40, 0);
                                        bQ(9, 1);
                                        if (configs.slowOT) {
                                            player.buildIndex != player.items[1] && selectToBuild(player.items[1]);
                                        } else {
                                            if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                                selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                            }
                                        }
                                    } else {
                                        bQ(22, 0);
                                        bQ(19, 1);
                                        if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                            selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                        }
                                    }
                                } else {
                                    bQ(6, 0);
                                    bQ(12, 1);
                                    if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                        selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                    }
                                }
                            } else {
                                biomeGear();
                                bQ(11, 1);
                                if ((player.weaponIndex != player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]) || player.buildIndex > -1) {
                                    selectWeapon(player.weapons[[10, 14].includes(player.weapons[1]) ? 1 : 0]);
                                }
                            }
                            return {
                                dir: near.aim2,
                                action: 0
                            };
                        }
                        return {
                            dir: undefined,
                            action: 0
                        };
                    }
                } else {
                    this.ticking = false;
                    return {
                        dir: undefined,
                        action: 0
                    };
                }
            }
            /** wait 1 tick for better quality */
            this.bowMovement = function() {
                let moveMent = this.gotoGoal(685, 3);
                if (moveMent.action) {
                    if (player.reloads[53] == 0 && !this.isTrue) {
                        this.rangeType("ageInsta");
                    } else {
                        packet("a", moveMent.dir, 1);
                    }
                } else {
                    packet("a", moveMent.dir, 1);
                }
            },
                /*this.tickMovement = function() {
                const trap1 = gameObjects
                .filter((e) => e.trap && e.active)
                .sort((a, b) => UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2))
                .find((trap) => {
                    const trapDist = Math.hypot(trap.y - near.y2, trap.x - near.x2);
                    return (
                        trap !== player &&
                        (player.sid === trap.owner.sid || (trap.owner.sid)) &&
                        trapDist <= 50
                    );
                });
                let moveMent = this.gotoGoal(([10, 14].includes(player.weapons[1]) && player.y2 > config.snowBiomeTop) ? 200 : player.weapons[1] == 15 ? 210 : player.y2 <= config.snowBiomeTop ? [10, 14].includes(player.weapons[1]) ? 230 : 225 : 235, 3);
                if (moveMent.action) {
                    if ((![6, 22].includes(near.skinIndex) || [6, 22].includes(near.skinIndex) && trap1) && player.reloads[53] == 0 && !this.isTrue) {
                        ([10, 14].includes(player.weapons[1]) && player.y2 > config.snowBiomeTop) || (player.weapons[1] == 15) ? this.oneTickType() : this.threeOneTickType();
                        if ([6, 22].includes(near.skinIndex) && trap1) io.send('6', '');
                    } else {
                        packet("a", moveMent.dir, 1);
                    }
                } else {
                    packet("a", moveMent.dir, 1);
                }
            },*/
                this.tickMovement = function() {
                let moveMent = this.gotoGoal(([10, 14].includes(player.weapons[1]) && player.y2 > config.snowBiomeTop) ? 233 : player.weapons[1] == 15 ? 250 : player.y2 <= config.snowBiomeTop ? [10, 14].includes(player.weapons[1]) ? 227 : 235 : 250, 3);
                if (moveMent.action) {
                    if (player.reloads[53] == 0 && !this.isTrue && this.startTick) {
                        // notif("Auto One Tick");
                        addMenuChText("Dev", "One Tick Pass", "lightblue");
                        //io.send("6", near.dist2.toString())
                        this.oneTickType();
                    } else {
                        packet("a", moveMent.dir, 1);
                    }
                } else {
                    packet("a", moveMent.dir, 1);
                }
            },
                this.kmTickMovement = function() {
                let moveMent = this.gotoGoal(240, 3);
                if (moveMent.action) {
                    if (near.skinIndex != 22 && player.reloads[53] == 0 && !this.isTrue && ((game.tick - near.poisonTick) % config.serverUpdateRate == 8)) {
                        this.kmTickType();
                    } else {
                        packet("a", moveMent.dir, 1);
                    }
                } else {
                    packet("a", moveMent.dir, 1);
                }
            },
                this.boostTickMovement = function() {
                let dist = player.weapons[1] == 9 ? 365 : player.weapons[1] == 12 ? 380 : player.weapons[1] == 13 ? 390 : player.weapons[1] == 15 ? 365 : 370;
                let actionDist = player.weapons[1] == 9 ? 2 : player.weapons[1] == 12 ? 1.5 : player.weapons[1] == 13 ? 1.5 : player.weapons[1] == 15 ? 2 : 3;
                let moveMent = this.gotoGoal(dist, actionDist);
                if (moveMent.action) {
                    if (player.reloads[53] == 0 && !this.isTrue) {
                        this.boostTickType();
                    } else {
                        packet("a", moveMent.dir, 1);
                    }
                } else {
                    packet("a", moveMent.dir, 1);
                }
            }
            /** wait 1 tick for better quality */
            this.perfCheck = function(pl, nr) {
                if (nr.weaponIndex == 11 && UTILS.getAngleDist(nr.aim2 + Math.PI, nr.d2) <= config.shieldAngle) return false;
                if (![9, 12, 13, 15].includes(player.weapons[1])) return true;
                let pjs = {
                    x: nr.x2 + (70 * Math.cos(nr.aim2 + Math.PI)),
                    y: nr.y2 + (70 * Math.sin(nr.aim2 + Math.PI))
                };
                if (UTILS.lineInRect(pl.x2 - pl.scale, pl.y2 - pl.scale, pl.x2 + pl.scale, pl.y2 + pl.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                    return true;
                }
                let finds = ais.filter(tmp => tmp.visible).find((tmp) => {
                    if (UTILS.lineInRect(tmp.x2 - tmp.scale, tmp.y2 - tmp.scale, tmp.x2 + tmp.scale, tmp.y2 + tmp.scale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                        return true;
                    }
                });
                if (finds) return false;
                finds = gameObjects.filter(tmp => tmp.active).find((tmp) => {
                    let tmpScale = tmp.getScale();
                    if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, pjs.x, pjs.y, pjs.x, pjs.y)) {
                        return true;
                    }
                });
                if (finds) return false;
                return true;
            }
        }
    };
    class Autobuy {
        constructor(buyHat, buyAcc) {
            this.hat = function() {
                buyHat.forEach((id) => {
                    let find = findID(hats, id);
                    if (find && !player.skins[id] && player.points >= find.price) packet("c", 1, id, 0);
                });
            };
            this.acc = function() {
                buyAcc.forEach((id) => {
                    let find = findID(accessories, id);
                    if (find && !player.tails[id] && player.points >= find.price) packet("c", 1, id, 1);
                });
            };
        }
    };

    class Autoupgrade {
        constructor() {
            this.sb = function(upg) {
                upg(3);
                upg(17);
                upg(31);
                upg(23);
                upg(9);
                upg(38);
            };
            this.kh = function(upg) {
                upg(3);
                upg(17);
                upg(31);
                upg(23);
                upg(10);
                upg(38);
                upg(4);
                upg(25);
            };
            this.pb = function(upg) {
                upg(5);
                upg(17);
                upg(32);
                upg(23);
                upg(9);
                upg(38);
            };
            this.ph = function(upg) {
                upg(5);
                upg(17);
                upg(32);
                upg(23);
                upg(10);
                upg(38);
                upg(28);
                upg(25);
            };
            this.db = function(upg) {
                upg(7);
                upg(17);
                upg(31);
                upg(23);
                upg(9);
                upg(34);
            };
        };
    };

    class Damages {
        constructor(items) {
            // 0.75 1 1.125 1.5
            this.calcDmg = function(dmg, val) {
                return dmg * val;
            };
            this.getAllDamage = function(dmg) {
                return [this.calcDmg(dmg, 0.75), dmg, this.calcDmg(dmg, 1.125), this.calcDmg(dmg, 1.5)];
            };
            this.weapons = [];
            for (let i = 0; i < items.weapons.length; i++) {
                let wp = items.weapons[i];
                let name = wp.name.split(" ").length <= 1 ? wp.name : (wp.name.split(" ")[0] + "_" + wp.name.split(" ")[1]);
                this.weapons.push(this.getAllDamage(i > 8 ? wp.Pdmg : wp.dmg));
                this[name] = this.weapons[i];
            }
        }
    }

    /** CLASS CODES */
    // jumpscare code warn
    let tmpList = [];

    // LOADING:
    let UTILS = new Utils();
    let items = new Items();
    let objectManager = new Objectmanager(GameObject, gameObjects, UTILS, config);
    let store = new Store();
    let hats = store.hats;
    let accessories = store.accessories;
    let projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS);
    let aiManager = new AiManager(ais, AI, players, items, null, config, UTILS);
    let textManager = new Textmanager();

    let traps = new Traps(UTILS, items);
    let instaC = new Instakill();
    let autoBuy = new Autobuy([6, 7, 22, 12, 53, 40, 15, 31, 20], [11, 13, 19, 18, 21]);
    let autoUpgrade = new Autoupgrade();

    let lastDeath;
    let minimapData;
    let mapMarker = {};
    let mapPings = [];
    let tmpPing;

    let breakTrackers = [];

    let pathFindTest = 0;
    let grid = [];
    let pathFind = {
        active: false,
        grid: 40,
        scale: 1440,
        x: 14400,
        y: 14400,
        chaseNear: false,
        array: [],
        lastX: this.grid / 2,
        lastY: this.grid / 2
    };

    function sendChat(message) {
        packet("6", message.slice(0, 30));
    }

    let runAtNextTick = [];

    function checkProjectileHolder(x, y, dir, range, speed, indx, layer, sid) {
        let weaponIndx = indx == 0 ? 9 : indx == 2 ? 12 : indx == 3 ? 13 : indx == 5 && 15;
        let projOffset = config.playerScale * 2;
        let projXY = {
            x: indx == 1 ? x : x - projOffset * Math.cos(dir),
            y: indx == 1 ? y : y - projOffset * Math.sin(dir),
        };
        let nearPlayer = players.filter((e) => e.visible && UTILS.getDist(projXY, e, 0, 2) <= e.scale).sort(function(a, b) {
            return UTILS.getDist(projXY, a, 0, 2) - UTILS.getDist(projXY, b, 0, 2);
        })[0];
        if (nearPlayer) {
            if (indx == 1) {
                nearPlayer.shooting[53] = 1;
            } else {
                nearPlayer.shootIndex = weaponIndx;
                nearPlayer.shooting[1] = 1;
                antiProj(nearPlayer, dir, range, speed, indx, weaponIndx);
            }
        }
    }
    let projectileCount = 0;

    function antiProj(tmpObj, dir, range, speed, index, weaponIndex) {
        if (!tmpObj.isTeam(player)) {
            tmpDir = UTILS.getDirect(player, tmpObj, 2, 2);
            if (UTILS.getAngleDist(tmpDir, dir) <= 0.2) {
                tmpObj.bowThreat[weaponIndex]++;
                if (index == 5) {
                    projectileCount++;
                }
                setTimeout(() => {
                    tmpObj.bowThreat[weaponIndex]--;
                    if (index == 5) {
                        projectileCount--;
                    }
                }, range / speed);
                if (tmpObj.bowThreat[9] >= 1 && (tmpObj.bowThreat[12] >= 1 || tmpObj.bowThreat[15] >= 1)) {
                    place(1, tmpObj.aim2);
                    my.anti0Tick = 4;
                    if (!my.antiSync) {
                        antiSyncHealing(4);
                    }
                } else {
                    if (projectileCount >= 2) {
                        place(1, tmpObj.aim2);
                        my.anti0Tick = 4;
                        if (!my.antiSync) {
                            antiSyncHealing(4);
                        }
                    }
                }
            }
        }
    }

    // SHOW ITEM INFO:
    function showItemInfo(item, isWeapon, isStoreItem) {
        if (player && item) {
            UTILS.removeAllChildren(itemInfoHolder);
            itemInfoHolder.classList.add("visible");
            UTILS.generateElement({
                id: "itemInfoName",
                text: UTILS.capitalizeFirst(item.name),
                parent: itemInfoHolder
            });
            UTILS.generateElement({
                id: "itemInfoDesc",
                text: item.desc,
                parent: itemInfoHolder
            });
            if (isStoreItem) {

            } else if (isWeapon) {
                UTILS.generateElement({
                    class: "itemInfoReq",
                    text: !item.type ? "primary" : "secondary",
                    parent: itemInfoHolder
                });
            } else {
                for (let i = 0; i < item.req.length; i += 2) {
                    UTILS.generateElement({
                        class: "itemInfoReq",
                        html: item.req[i] + "<span class='itemInfoReqVal'> x" + item.req[i + 1] + "</span>",
                        parent: itemInfoHolder
                    });
                }
                if (item.group.limit) {
                    UTILS.generateElement({
                        class: "itemInfoLmt",
                        text: (player.itemCounts[item.group.id] || 0) + "/" + (config.isSandbox ? 99 : item.group.limit),
                        parent: itemInfoHolder
                    });
                }
            }
        } else {
            itemInfoHolder.classList.remove("visible");
        }
    }

    // RESIZE:
    window.addEventListener("resize", UTILS.checkTrusted(resize));

    function resize() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        let scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
        gameCanvas.width = screenWidth * pixelDensity;
        gameCanvas.height = screenHeight * pixelDensity;
        gameCanvas.style.width = screenWidth + "px";
        gameCanvas.style.height = screenHeight + "px";
        mainContext.setTransform(
            scaleFillNative, 0,
            0, scaleFillNative,
            (screenWidth * pixelDensity - (maxScreenWidth * scaleFillNative)) / 2,
            (screenHeight * pixelDensity - (maxScreenHeight * scaleFillNative)) / 2
        );
    }
    resize();

    // MOUSE INPUT:
    var usingTouch;
    const mals = document.getElementById('touch-controls-fullscreen');
    mals.style.display = 'block';
    mals.addEventListener("mousemove", gameInput, false);

    function gameInput(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    let clicks = {
        left: false,
        middle: false,
        right: false,
    };
    mals.addEventListener("mousedown", mouseDown, false);

    function mouseDown(e) {
        if (attackState != 1) {
            attackState = 1;
            if (e.button == 0) {
                clicks.left = true;
            } else if (e.button == 1) {
                clicks.middle = true;
            } else if (e.button == 2) {
                clicks.right = true;
            }
        }
    }
    mals.addEventListener("mouseup", UTILS.checkTrusted(mouseUp));

    function mouseUp(e) {
        if (attackState != 0) {
            attackState = 0;
            if (e.button == 0) {
                clicks.left = false;
            } else if (e.button == 1) {
                clicks.middle = false;
            } else if (e.button == 2) {
                clicks.right = false;
            }
        }
    }
    mals.addEventListener("wheel", wheel, false);

    function wheel(e) {
        if (e.deltaY < 0) {
            wbe += 0.005
            maxScreenWidth = config.maxScreenWidth * wbe;
            maxScreenHeight = config.maxScreenHeight * wbe;
            resize()
        } else {
            wbe -= 0.005
            maxScreenWidth = config.maxScreenWidth * wbe;
            maxScreenHeight = config.maxScreenHeight * wbe;
            resize()
        }
    }

    // INPUT UTILS:
    function getMoveDir() {
        let dx = 0;
        let dy = 0;
        for (let key in moveKeys) {
            let tmpDir = moveKeys[key];
            dx += !!keys[key] * tmpDir[0];
            dy += !!keys[key] * tmpDir[1];
        }
        return dx == 0 && dy == 0 ? undefined : Math.atan2(dy, dx);
    }

    function getSafeDir() {
        if (!player)
            return 0;
        if (!player.lockDir) {
            lastDir = Math.atan2(mouseY - (screenHeight / 2), mouseX - (screenWidth / 2));
        }
        return lastDir || 0;
    }
    let plusDir = 0;
    let lastSpin = Date.now();
    function getAttackDir(debug) {
        if (debug) {
            if (!player)
                return "0";
            if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap)) && player.reloads[player.weapons[0]] == 0))
                lastDir = getEl("weaponGrind").checked ? "getSafeDir()" : enemy.length ? my.revAim ? "(near.aim2 + Math.PI)" : "near.aim2" : "getSafeDir()";
            else
                if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = "getSafeDir()";
            else
                if (traps.inTrap && player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = "traps.aim";

            else
                if (!instaC.isTrue && nearspiker && player.reloads[spikeKT() ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = "aimSpike";
            else
                if (!player.lockDir) {
                    if (configs.noDir) return "undefined";
                    lastDir = "getSafeDir()";
                }
            return lastDir;
        } else {
            if (!player)
                return 0;
            if (my.autoAim || ((clicks.left || (useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap)) && player.reloads[player.weapons[0]] == 0))
                lastDir = getEl("weaponGrind").checked ? getSafeDir() : enemy.length ? my.revAim ? (near.aim2 + Math.PI) : near.aim2 : getSafeDir();
            else
                if (clicks.right && player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = getSafeDir();
            else
                if (traps.inTrap && player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = traps.aim;
            else
                if (!instaC.isTrue && nearspiker && player.reloads[spikeKT() ? player.weapons[1] : player.weapons[0]] == 0)
                    lastDir = aimSpike;
            else
                if (!player.lockDir) {
                    if (configs.noDir) return undefined;
                    lastDir = getSafeDir();
                }
            return lastDir || 0;
        }
    }

    function getVisualDir() {
        if (!player)
            return 0;
        lastDir = getSafeDir();
        return lastDir || 0;
    }

    // KEYS:
    function keysActive() {
        return (allianceMenu.style.display != "block" &&
                chatHolder.style.display != "block" &&
                !menuCBFocus);
    }

    function toggleMenuChat() {
        if (menuChatDiv.style.display != "none") {
            //   chatHolder.style.display = "none";
            // if (menuChatBox.value != "") {
            //commands[command.slice(1)]
            let cmd = function(command) {
                return {
                    found: command.startsWith("/") && commands[command.slice(1).split(" ")[0]],
                    fv: commands[command.slice(1).split(" ")[0]]
                }
            }
            let command = cmd(menuChatBox.value);
            if (command.found) {
                if (typeof command.fv.action === "function") {
                    command.fv.action(menuChatBox.value);
                }
            } else {
                sendChat(menuChatBox.value);
            }
            menuChatBox.value = "";
            menuChatBox.blur();
        } else {
            if (menuCBFocus) {
                menuChatBox.blur();
            } else {
                menuChatBox.focus();
            }
        }
    }

    function keyDown(event) {
        let keyNum = event.which || event.keyCode || 0;
        if (player && player.alive && keysActive()) {
            if (!keys[keyNum]) {
                keys[keyNum] = 1;
                macro[event.key] = 1;
                if (keyNum == 27) {
                    openMenu = !openMenu;
                    $("#menuDiv").toggle();
                    $("#menuChatDiv").toggle();
                } else if (keyNum == 69) {
                    sendAutoGather();
                } else if (keyNum == 66) {
                    instaC.syncTry();
                } else if (keyNum == 67) {
                    updateMapMarker();
                } else if (player.weapons[keyNum - 49] != undefined) {
                    player.weaponCode = player.weapons[keyNum - 49];
                } else if (moveKeys[keyNum]) {
                    sendMoveDir();
                } else if (event.key == "0") {
                    io.send("6", "snoweiv3.1415926535897")
                } else if (event.key == "C") {
                    syncChat(getEl("songs").value);
                } else if (event.key == "/") {
                    resetMenuChText();
                    typeof window.debug == "function" && window.debug();
                    io.send("6", "Success Reset Chat / Debug")
                } else if (event.key == "m") {
                    mills.placeSpawnPads = !mills.placeSpawnPads;
                } else if (event.key == "z") {
                    mills.place = !mills.place;
                } else if (event.key == "Z") {
                    typeof window.debug == "function" && window.debug();
                } else if (keyNum == 32) {
                    packet("d", 1, getSafeDir(), 1);
                    packet("d", 0, getSafeDir(), 1);
                }
            }
        }
    }

    // let xx = canvaz.width/2;
    // let yy = canvaz.height/2;

    // let mouze = {
    //     x: xx - mouzeX,
    //     y: yy - mouzeY
    // }

    // let ingamecoorformodabow = {
    //     x: player.x + mouze.x,
    //     y: player.x + mouze.x
    // }

    addEventListener("keydown", UTILS.checkTrusted(keyDown));

    function keyUp(event) {
        if (player && player.alive) {
            let keyNum = event.which || event.keyCode || 0;
            if (keyNum == 13) {
                toggleMenuChat();
            } else if (keysActive()) {
                if (keys[keyNum]) {
                    keys[keyNum] = 0;
                    macro[event.key] = 0;
                    if (moveKeys[keyNum]) {
                        sendMoveDir();
                    }
                }
            }
        }
    }
    window.addEventListener("keyup", UTILS.checkTrusted(keyUp));

    function sendMoveDir() {
        if(found) {
            packet("a", undefined, 1);
        } else {
            let newMoveDir = getMoveDir();
            if (lastMoveDir == undefined || newMoveDir == undefined || Math.abs(newMoveDir - lastMoveDir) > 0.3) {
                if (!my.autoPush && !found) {
                    packet("a", newMoveDir, 1);
                }
                lastMoveDir = newMoveDir;
            }
        }
    }

    // BUTTON EVENTS:
    function bindEvents() {}
    bindEvents();

    /** PATHFIND TEST */
    function chechPathColl(tmp) {
        return ((player.scale + tmp.getScale()) / (player.maxSpeed * items.weapons[player.weaponIndex].spdMult)) + (tmp.dmg && !tmp.isTeamObject(player) ? 35 : 0);
        return tmp.colDiv == 0.5 ? (tmp.scale * tmp.colDiv) :
            !tmp.isTeamObject(player) && tmp.dmg ? (tmp.scale + player.scale) :
        tmp.isTeamObject(player) && tmp.trap ? 0 : tmp.scale;
    }

    function checkObject() {
        let checkColl = gameObjects.filter(tmp => player.canSee(tmp) && tmp.active);
        for (let y = 0; y < pathFind.grid; y++) {
            grid[y] = [];
            for (let x = 0; x < pathFind.grid; x++) {
                let tmpXY = {
                    x: (player.x2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * x),
                    y: (player.y2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * y)
                }
                if (UTILS.getDist(pathFind.chaseNear ? near : pathFind, tmpXY, pathFind.chaseNear ? 2 : 0, 0) <= (pathFind.chaseNear ? 35 : 60)) {
                    pathFind.lastX = x;
                    pathFind.lastY = y;
                    grid[y][x] = 0;
                    continue;
                }
                let find = checkColl.find(tmp => UTILS.getDist(tmp, tmpXY, 0, 0) <= chechPathColl(tmp));
                if (find) {
                    if (find.trap) {
                        grid[y][x] = 0;
                        continue;
                    }
                    grid[y][x] = 1;
                } else {
                    grid[y][x] = 0;
                }
            }
        }
    }

    function createPath() {
        grid = [];
        checkObject();
    }

    function Pathfinder() {
        pathFind.scale = (config.maxScreenWidth / 2) * 1.3;
        if (!traps.inTrap && (pathFind.chaseNear ? enemy.length : true)) {
            if (near.dist2 <= items.weapons[player.weapons[0]].range) {
                packet("a", undefined, 1);
            } else {
                createPath();
                easystar.setGrid(grid);
                easystar.setAcceptableTiles([0]);
                easystar.enableDiagonals();
                easystar.findPath((grid[0].length / 2), (grid.length / 2), pathFind.lastX, pathFind.lastY, function (path) {
                    if (path === null) {
                        pathFind.array = [];
                        if (near.dist2 <= items.weapons[player.weapons[0]].range) {
                            packet("a", undefined, 1);
                        } else {
                            packet("a", near.aim2, 1);
                        }
                    } else {
                        pathFind.array = path;
                        if (pathFind.array.length > 1) {
                            let tmpXY = {
                                x: (player.x2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * path[1].x),
                                y: (player.y2 - (pathFind.scale / 2)) + ((pathFind.scale / pathFind.grid) * path[1].y)
                            }
                            packet("a", UTILS.getDirect(tmpXY, player, 0, 2), 1);
                        }
                    }
                });
                easystar.calculate();
            }
        }
    }
    /** PATHFIND TEST */

    // ITEM COUNT DISPLAY:
    let isItemSetted = [];

    function updateItemCountDisplay(index = undefined) {
        for (let i = 3; i < items.list.length; ++i) {
            let id = items.list[i].group.id;
            let tmpI = items.weapons.length + i;
            if (!isItemSetted[tmpI]) {
                isItemSetted[tmpI] = document.createElement("div");
                isItemSetted[tmpI].id = "itemCount" + tmpI;
                getEl("actionBarItem" + tmpI).appendChild(isItemSetted[tmpI]);
                isItemSetted[tmpI].style = `
                        display: block;
                        position: absolute;
                        padding-left: 5px;
                        font-size: 2em;
                        color: #fff;
                        `;
                isItemSetted[tmpI].innerHTML = player.itemCounts[id] || 0;
            } else {
                if (index == id) isItemSetted[tmpI].innerHTML = player.itemCounts[index] || 0;
            }
        }
    }

    // AUTOPUSH:
    function autoPush() {
        let nearTrap = gameObjects.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= (near.scale + tmp.getScale() + 5)).sort(function (a, b) {
            return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
        })[0];
        if (nearTrap) {
            let spike = gameObjects.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, nearTrap, 0, 0) <= (near.scale + nearTrap.scale + tmp.scale)).sort(function (a, b) {
                return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
            })[0];
            if (spike) {
                let pos = {
                    x: spike.x + (250 * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                    y: spike.y + (250 * Math.sin(UTILS.getDirect(near, spike, 2, 0))),
                    x2: spike.x + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.cos(UTILS.getDirect(near, spike, 2, 0))),
                    y2: spike.y + ((UTILS.getDist(near, spike, 2, 0) + player.scale) * Math.sin(UTILS.getDirect(near, spike, 2, 0)))
                };
                let finds = gameObjects.filter(tmp => tmp.active).find((tmp) => {
                    let tmpScale = tmp.getScale();
                    if (!tmp.ignoreCollision && UTILS.lineInRect(tmp.x - tmpScale, tmp.y - tmpScale, tmp.x + tmpScale, tmp.y + tmpScale, player.x2, player.y2, pos.x2, pos.y2)) {
                        return true;
                    }
                });
                if (finds) {
                    if (my.autoPush) {
                        my.autoPush = false;
                        packet("a", lastMoveDir||undefined, 1);
                    }
                } else {
                    my.autoPush = true;
                    my.pushData = {
                        x: spike.x,
                        y: spike.y,
                        x2: pos.x2,
                        y2: pos.y2
                    };
                    let scale = (player.scale / 10);
                    if (UTILS.lineInRect(player.x2 - scale, player.y2 - scale, player.x2 + scale, player.y2 + scale, near.x2, near.y2, pos.x, pos.y)) {
                        packet("a", near.aim2, 1);
                    } else {
                        packet("a", UTILS.getDirect(pos, player, 2, 2), 1);
                    }
                }
            } else {
                if (my.autoPush) {
                    my.autoPush = false;
                    packet("a", lastMoveDir||undefined, 1);
                }
            }
        } else {
            if (my.autoPush) {
                my.autoPush = false;
                packet("a", lastMoveDir||undefined, 1);
            }
        }
    }

    // ADD DEAD PLAYER:
    function addDeadPlayer(tmpObj) {
        deadPlayers.push(new DeadPlayer(tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.buildIndex, tmpObj.weaponIndex, tmpObj.weaponVariant, tmpObj.skinColor, tmpObj.scale, tmpObj.name));
    }

    /** APPLY SOCKET CODES */

    // SET INIT DATA:
    function setInitData(data) {
        alliances = data.teams;
    }

    // SETUP GAME:
    function setupGame(yourSID) {
        keys = {};
        macro = {};
        playerSID = yourSID;
        attackState = 0;
        inGame = true;
        packet("d", 0, getAttackDir(), 1);
        my.ageInsta = true;
        if (firstSetup) {
            firstSetup = false;
            gameObjects.length = 0;
            liztobj.length = 0;
        }
    }

    // ADD NEW PLAYER:
    function addPlayer(data, isYou) {
        let tmpPlayer = findPlayerByID(data[0]);
        if (!tmpPlayer) {
            tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager,
                                   objectManager, players, ais, items, hats, accessories);
            players.push(tmpPlayer);
            if (data[1] != playerSID) {
                addMenuChText(null, `Found ${data[2]} {${data[1]}}`, "lime");
            }
        } else {
            if (data[1] != playerSID) {
                addMenuChText(null, `Found ${data[2]} {${data[1]}}`, "lime");
            }
        }
        tmpPlayer.spawn(isYou ? true : null);
        tmpPlayer.visible = false;
        tmpPlayer.oldPos = {
            x2: undefined,
            y2: undefined
        };
        tmpPlayer.x2 = undefined;
        tmpPlayer.y2 = undefined;
        tmpPlayer.x3 = undefined;
        tmpPlayer.y3 = undefined;
        tmpPlayer.setData(data);
        if (isYou) {
            if (!player) {
                window.prepareUI(tmpPlayer);
            }
            player = tmpPlayer;
            camX = player.x;
            camY = player.y;
            my.lastDir = 0;
            updateItems();
            updateAge();
            updateItemCountDisplay();
            if (player.skins[7]) {
                my.reSync = true;
            }
        }
    }

    // REMOVE PLAYER:
    function removePlayer(id) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].id == id) {
                addMenuChText("Game", players[i].name + "[" + players[i].sid + "] left the game", "red");
                players.splice(i, 1);
                break;
            }
        }
    }

    // UPDATE HEALTH:
    function updateHealth(sid, value) {
        tmpObj = findPlayerBySID(sid);
        if (tmpObj) {
            tmpObj.oldHealth = tmpObj.health;
            tmpObj.health = value;
            tmpObj.judgeShame();
            if (tmpObj.oldHealth > tmpObj.health) {
                tmpObj.damaged = tmpObj.oldHealth - tmpObj.health;
                advHeal.push([sid, value, tmpObj.damaged]);
            }
        }
    }
    // KILL PLAYER:
    function killPlayer() {
        inGame = false;
        lastDeath = {
            x: player.x,
            y: player.y,
        };
        if (configs.autoRespawn) {
            getEl("diedText").style.display = "none";
            packet("M", {
                name: lastsp[0],
                moofoll: lastsp[1],
                skin: lastsp[2]
            });
        }
    }

    // UPDATE PLAYER ITEM VALUES:
    function updateItemCounts(index, value) {
        if (player) {
            player.itemCounts[index] = value;
            updateItemCountDisplay(index);
        }
    }

    // UPDATE AGE:
    function updateAge(xp, mxp, age) {
        if (xp != undefined)
            player.XP = xp;
        if (mxp != undefined)
            player.maxXP = mxp;
        if (age != undefined)
            player.age = age;
    }

    // UPDATE UPGRADES:
    function updateUpgrades(points, age) {
        player.upgradePoints = points;
        player.upgrAge = age;
        if (points > 0) {
            tmpList.length = 0;
            UTILS.removeAllChildren(upgradeHolder);
            for (let i = 0; i < items.weapons.length; ++i) {
                if (items.weapons[i].age == age && (items.weapons[i].pre == undefined || player.weapons.indexOf(items.weapons[i].pre) >= 0)) {
                    let e = UTILS.generateElement({
                        id: "upgradeItem" + i,
                        class: "actionBarItem",
                        onmouseout: function() {
                            showItemInfo();
                        },
                        parent: upgradeHolder
                    });
                    e.style.backgroundImage = getEl("actionBarItem" + i).style.backgroundImage;
                    tmpList.push(i);
                }
            }
            for (let i = 0; i < items.list.length; ++i) {
                if (items.list[i].age == age && (items.list[i].pre == undefined || player.items.indexOf(items.list[i].pre) >= 0)) {
                    let tmpI = (items.weapons.length + i);
                    let e = UTILS.generateElement({
                        id: "upgradeItem" + tmpI,
                        class: "actionBarItem",
                        onmouseout: function() {
                            showItemInfo();
                        },
                        parent: upgradeHolder
                    });
                    e.style.backgroundImage = getEl("actionBarItem" + tmpI).style.backgroundImage;
                    tmpList.push(tmpI);
                }
            }
            for (let i = 0; i < tmpList.length; i++) {
                (function(i) {
                    let tmpItem = getEl('upgradeItem' + i);
                    // tmpItem.onmouseover = function() {
                    //     if (items.weapons[i]) {
                    //         showItemInfo(items.weapons[i], true);
                    //     } else {
                    //         showItemInfo(items.list[i - items.weapons.length]);
                    //     }
                    // };
                    tmpItem.onclick = UTILS.checkTrusted(function() {
                        packet("H", i);
                    });
                    UTILS.hookTouchEvents(tmpItem);
                })(tmpList[i]);
            }
            if (tmpList.length) {
                upgradeHolder.style.display = "block";
                upgradeCounter.style.display = "block";
                upgradeCounter.innerHTML = "SELECT ITEMS (" + points + ")";
            } else {
                upgradeHolder.style.display = "none";
                upgradeCounter.style.display = "none";
                showItemInfo();
            }
        } else {
            upgradeHolder.style.display = "none";
            upgradeCounter.style.display = "none";
            showItemInfo();
        }
    }
    // auto spiketick
    function _0x5ee8(_0x86c820,_0x26db66){const _0x1028fc=_0x1028();return _0x5ee8=function(_0x5ee897,_0x3015cf){_0x5ee897=_0x5ee897-0xdf;let _0x26a53a=_0x1028fc[_0x5ee897];return _0x26a53a;},_0x5ee8(_0x86c820,_0x26db66);}(function(_0x3be44e,_0x19bd15){const _0x1e21be=_0x5ee8,_0x1695ce=_0x3be44e();while(!![]){try{const _0x21a0a9=-parseInt(_0x1e21be(0xe1))/0x1+parseInt(_0x1e21be(0xef))/0x2+-parseInt(_0x1e21be(0xe0))/0x3*(-parseInt(_0x1e21be(0xed))/0x4)+parseInt(_0x1e21be(0xe3))/0x5+parseInt(_0x1e21be(0xe5))/0x6+-parseInt(_0x1e21be(0xdf))/0x7*(parseInt(_0x1e21be(0xec))/0x8)+parseInt(_0x1e21be(0xe7))/0x9*(parseInt(_0x1e21be(0xe6))/0xa);if(_0x21a0a9===_0x19bd15)break;else _0x1695ce['push'](_0x1695ce['shift']());}catch(_0x5270e4){_0x1695ce['push'](_0x1695ce['shift']());}}}(_0x1028,0x2397f));function _0x1028(){const _0x19d822=['send','Auto\x20Spike\x20Tick','8YphnCx','527168azlACX','#00ff73','23220HlBCcl','1815317jBsgzR','6DhJSqX','184841nQOhDp','showText','118660MudszC','aim2','267342lmZHhF','23700YNYyAX','936IuVCJX','getDirect','\x20Test\x20Spike\x20Tick\x20'];_0x1028=function(){return _0x19d822;};return _0x1028();}function bianosSpTick(){const _0x5eba68=_0x5ee8;let _0x217382=0x4,_0x425098=UTILS[_0x5eba68(0xe8)](tmpObj,player,0x0,0x2);buyEquip(0x7,0x0),buyEquip(0x12,0x1),selectWeapon(player['weapons'][0x0]),io[_0x5eba68(0xea)]('d',0x1,near[_0x5eba68(0xe4)]),textManager[_0x5eba68(0xe2)](player['x2'],player['y2'],0x1e,0.1,0x73a,_0x5eba68(0xeb),_0x5eba68(0xee),0x2),place(0x2,_0x425098),place(0x2,near[_0x5eba68(0xe4)]);for(let _0x39d344=0x0;_0x39d344<_0x217382;_0x39d344++){io[_0x5eba68(0xea)]('6',_0x5eba68(0xe9)),checkPlace(0x2,near[_0x5eba68(0xe4)]-0x5a+_0x39d344*0x2d);}setTickout(()=>{buyEquip(0x35,0x0),buyEquip(0x15,0x1),setTickout(()=>{const _0x28bfcd=_0x5ee8;io[_0x28bfcd(0xea)]('d',0x0,near[_0x28bfcd(0xe4)]),buyEquip(0x6,0x0);},0x3);},0x1);}

    // preplacer
    (function(_0x1a5fc8,_0x5e68c2){const _0x4703e6=_0x2a67,_0x3247a9=_0x1a5fc8();while(!![]){try{const _0x93ed32=parseInt(_0x4703e6(0x1ef))/0x1*(-parseInt(_0x4703e6(0x1e2))/0x2)+parseInt(_0x4703e6(0x1ea))/0x3+-parseInt(_0x4703e6(0x1f6))/0x4+parseInt(_0x4703e6(0x1e8))/0x5*(-parseInt(_0x4703e6(0x1df))/0x6)+-parseInt(_0x4703e6(0x1db))/0x7*(-parseInt(_0x4703e6(0x1e7))/0x8)+-parseInt(_0x4703e6(0x1eb))/0x9*(-parseInt(_0x4703e6(0x1f4))/0xa)+parseInt(_0x4703e6(0x1f2))/0xb;if(_0x93ed32===_0x5e68c2)break;else _0x3247a9['push'](_0x3247a9['shift']());}catch(_0x3ac207){_0x3247a9['push'](_0x3247a9['shift']());}}}(_0x27bd,0x78de0));const getPotentialDamage=(_0xb7cd8e,_0x57ec5f)=>{const _0x2d8d61=_0x2a67,_0x564b24=_0x57ec5f['weapons'][0x1]===0xa&&!player['reloads'][_0x57ec5f['weapons'][0x1]]?0x1:0x0,_0x353c3c=_0x57ec5f[_0x2d8d61(0x1fa)][_0x564b24];if(player[_0x2d8d61(0x1f7)][_0x353c3c])return 0x0;const _0x2e557a=items[_0x2d8d61(0x1fa)][_0x353c3c],_0x53da86=cdf(_0xb7cd8e,_0x57ec5f)<=_0xb7cd8e[_0x2d8d61(0x1f0)]()+_0x2e557a[_0x2d8d61(0x1f1)];return _0x57ec5f[_0x2d8d61(0x1f8)]&&_0x53da86?_0x2e557a[_0x2d8d61(0x1f3)]*(_0x2e557a[_0x2d8d61(0x1e0)]||0x1)*3.3:0x0;},AutoReplace=()=>{const _0x1dec24=_0x2a67,_0x169b9c=[],_0x2e45bb=player['x'],_0x8d4578=player['y'],_0x430d03=gameObjects[_0x1dec24(0x1ec)];for(let _0x3bf50e=0x0;_0x3bf50e<_0x430d03;_0x3bf50e++){const _0x4e5b0b=gameObjects[_0x3bf50e];if(_0x4e5b0b[_0x1dec24(0x1ed)]&&_0x4e5b0b[_0x1dec24(0x1fc)]&&_0x4e5b0b['health']>0x0){const _0x5d42f2=items[_0x1dec24(0x1f5)][_0x4e5b0b['id']],_0x14a6b9=0x23+_0x5d42f2[_0x1dec24(0x1f9)]+(_0x5d42f2[_0x1dec24(0x1e3)]||0x0),_0x5d8516=cdf(_0x4e5b0b,player)<=_0x14a6b9*0x2;if(_0x5d8516){let _0x51f8d6=0x0;const _0x3b80ba=players[_0x1dec24(0x1ec)];for(let _0x34256e=0x0;_0x34256e<_0x3b80ba;_0x34256e++){_0x51f8d6+=getPotentialDamage(_0x4e5b0b,players[_0x34256e]);}_0x4e5b0b['health']<=_0x51f8d6&&_0x169b9c[_0x1dec24(0x1de)](_0x4e5b0b);}}}const _0x4294cf=(_0x500c9a,_0x4602f9,_0x16943f)=>{const _0x4f5257=_0x1dec24;if(!_0x16943f)return null;const _0x3eea2d=0x2*Math['PI'],_0x428ea3=Math['PI']/0x168,_0x1a68a0=items[_0x4f5257(0x1f5)][_0x500c9a[_0x4f5257(0x1e4)][_0x4602f9]];let _0x26945c=Math['atan2'](_0x16943f['y']-_0x500c9a['y'],_0x16943f['x']-_0x500c9a['x']),_0x40d263=_0x500c9a[_0x4f5257(0x1f9)]+(_0x1a68a0[_0x4f5257(0x1f9)]||0x1)+(_0x1a68a0[_0x4f5257(0x1e3)]||0x0);for(let _0x2ec25d=0x0;_0x2ec25d<_0x3eea2d;_0x2ec25d+=_0x428ea3){let _0x549eff=[(_0x26945c+_0x2ec25d)%_0x3eea2d,(_0x26945c-_0x2ec25d+_0x3eea2d)%_0x3eea2d];for(let _0x1182db of _0x549eff){return _0x1182db;}}return null;},_0x349c48=()=>{const _0x10eb5c=_0x1dec24;let _0x180d2d=liztobj[_0x10eb5c(0x1ee)](_0x400b80=>_0x400b80[_0x10eb5c(0x1e9)]&&_0x400b80[_0x10eb5c(0x1fc)]&&_0x400b80[_0x10eb5c(0x1e1)](player)&&cdf(_0x400b80,player)<=_0x400b80[_0x10eb5c(0x1f0)]()+0x5),_0xe5d2af=gameObjects[_0x10eb5c(0x1dd)](_0x402847=>_0x402847['dmg']&&_0x402847[_0x10eb5c(0x1fc)]&&_0x402847['isTeamObject'](player)&&cdf(_0x402847,player)<0x57&&!_0x180d2d[_0x10eb5c(0x1ec)]);const _0x2b815b=_0xe5d2af?0x4:0x2;_0x169b9c[_0x10eb5c(0x1e5)](_0x1da3d6=>{const _0x23d3de=_0x10eb5c;let _0x1fde5f=_0x4294cf(player,_0x2b815b,_0x1da3d6);if(_0x1fde5f!==null){place(_0x2b815b,_0x1fde5f);if(_0x2b815b==0x4)textManager['showText'](player['x2'],player['y2'],0x1e,0.15,0x73a,'Trap\x20Preplace',_0x23d3de(0x1e6),0x2);else _0x2b815b==0x2&&textManager[_0x23d3de(0x1fb)](player['x2'],player['y2'],0x1e,0.15,0x73a,'Spike\x20Preplace',_0x23d3de(0x1e6),0x2);}});};near&&near[_0x1dec24(0x1dc)]<=0x168&&_0x349c48(),_0x349c48;};function _0x2a67(_0x2d308e,_0x247702){const _0x27bd64=_0x27bd();return _0x2a67=function(_0x2a67e2,_0x37c8e5){_0x2a67e2=_0x2a67e2-0x1db;let _0x32c3c3=_0x27bd64[_0x2a67e2];return _0x32c3c3;},_0x2a67(_0x2d308e,_0x247702);}function _0x27bd(){const _0xa9ce7e=['#fff','136mVzjEH','5dSOfcP','trap','1860297HuBgTp','36rYSJjS','length','isItem','filter','51DpHCEa','getScale','range','450329wOtNEr','dmg','1835530UjnEkx','list','1718844BEDDAB','reloads','visible','scale','weapons','showText','active','100527oZMABi','dist3','find','push','1948866XWDNrH','sDmg','isTeamObject','15286bMiZeV','placeOffset','items','forEach'];_0x27bd=function(){return _0xa9ce7e;};return _0x27bd();}

    // KILL OBJECT:
    function killObject(sid) {
        let findObj = findObjectBySid(sid);
        objectManager.disableBySid(sid);
        AutoReplace();
        if (player) {
            for (let i = 0; i < breakObjects.length; i++) {
                if (breakObjects[i].sid == sid) {
                    breakObjects.splice(i, 1);
                    break;
                }
            }
            if (!player.canSee(findObj)) {
                breakTrackers.push({
                    x: findObj.x,
                    y: findObj.y
                });
            }
            if (breakTrackers.length > 8) {
                breakTrackers.shift();
            }
            traps.replacer(findObj);
        }
        let enemy = near;
        let A = player;
        let dist = cdf(A, enemy);
        let dir = caf(A, enemy);
        //code of bianos
        let objAim = Math.atan2(findObj.y-player.y2, findObj.x-player.x2);
        let objDist = Math.hypot(findObj.y-player.y2, findObj.x-player.x2);
        //
        let ignore = [0, 0];
        let place = function(t, f) {
            checkPlace(t, f);
        }
        //autospiketick
        var _0x33c3eb=_0x584f;(function(_0x18f11f,_0x5ac7a8){var _0x2e8fac=_0x584f,_0x2f7cd4=_0x18f11f();while(!![]){try{var _0x60fa70=-parseInt(_0x2e8fac(0x185))/0x1*(parseInt(_0x2e8fac(0x180))/0x2)+-parseInt(_0x2e8fac(0x182))/0x3*(parseInt(_0x2e8fac(0x187))/0x4)+-parseInt(_0x2e8fac(0x188))/0x5*(parseInt(_0x2e8fac(0x17f))/0x6)+-parseInt(_0x2e8fac(0x186))/0x7*(parseInt(_0x2e8fac(0x183))/0x8)+-parseInt(_0x2e8fac(0x17e))/0x9+parseInt(_0x2e8fac(0x181))/0xa+parseInt(_0x2e8fac(0x189))/0xb;if(_0x60fa70===_0x5ac7a8)break;else _0x2f7cd4['push'](_0x2f7cd4['shift']());}catch(_0x57e320){_0x2f7cd4['push'](_0x2f7cd4['shift']());}}}(_0x599e,0xe6886));function _0x599e(){var _0x549010=['10358290zJMcMn','186OEqAyT','322344OrmXCQ','weapons','1811219cCdovw','259qVCKTe','7120JcioIi','5OmKvjS','58568620sXeFaY','reloads','14137506pNYEUK','2596398FFBWIz','2xnoiVa'];_0x599e=function(){return _0x549010;};return _0x599e();}function _0x584f(_0x416fbc,_0x2392fa){var _0x599e16=_0x599e();return _0x584f=function(_0x584fe6,_0x101de0){_0x584fe6=_0x584fe6-0x17e;var _0x24ee43=_0x599e16[_0x584fe6];return _0x24ee43;},_0x584f(_0x416fbc,_0x2392fa);}objDist<=0xc8&&getDist(player,tmpObj)<=0xa8&&tmpObj!=player&&player[_0x33c3eb(0x18a)][player[_0x33c3eb(0x184)][0x0]]==0x0&&bianosSpTick();
    }

    // KILL ALL OBJECTS BY A PLAYER:
    function killObjects(sid) {
        if (player) objectManager.removeAllItems(sid);
    }
    function setTickout(doo, timeout) {
        if (!ticks.manage[ticks.tick + timeout]) {
            ticks.manage[ticks.tick + timeout] = [doo];
        } else {
            ticks.manage[ticks.tick + timeout].push(doo);
        }
    }

    function caf(e, t) {
        try {
            return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
        } catch (e) {
            return 0;
        }
    }

    let found = false;
    let autoQ = false;

    let autos = {
        insta: {
            todo: false,
            wait: false,
            count: 4,
            shame: 5
        },
        bull: false,
        antibull: 0,
        reloaded: false,
        stopspin: true
    }

    // UPDATE PLAYER DATA:
    function updatePlayers(data) {
        if(player.shameCount > 0) {
            my.reSync = true;
        } else {
            my.reSync = false;
        }

        // let movementPrediction = {
        //     x: player.x2 + (player.oldPos.x2 - player.x2) * -1,
        //     y: player.y2 + (player.oldPos.y2 - player.y2) * -1,
        // }

        //     let potentialzpiketick = liztobj.filter((e) => e.active && e.dmg)

        //     potentialzpiketick.forEach((obj) => {
        //         if(cdf(obj, player) <= 200) {
        //             packet('a', undefined);
        //         }
        //     })

        // let newPos = {
        //     x: player.x2 + (tracker.lastPos.x - player.x2) * -1,
        //     y: player.y2 + (tracker.lastPos.y - player.y2) * -1,
        // }

        function getAngleDifference(angle1, angle2) {
            // Normalize the angles to be between 0 and 2π
            angle1 = angle1 % (2 * Math.PI);
            angle2 = angle2 % (2 * Math.PI);

            // Calculate the absolute difference between the angles
            let diff = Math.abs(angle1 - angle2);

            // Adjust the difference to be between 0 and π
            if (diff > Math.PI) {
                diff = (2 * Math.PI) - diff;
            }

            return diff;
        }

        //     function smartMove(oneTickMove) {
        //         let dir = player.moveDir;

        //         let found = false
        //         let buildings = liztobj.sort((a, b) => Math.hypot(player.y2 - a.y, player.x2 - a.x) - Math.hypot(player.y2 - b.y, player.x2 - b.x))
        //         let spikes = buildings.filter(obj => obj.dmg && cdf(player, obj) < 250 && !obj.isTeamObject(player) && obj.active)

        //         let newPos = {
        //             x: player.x2 + (player.x2 - player.oldPos.x2) * 1.2 + (Math.cos(dir) * 50),
        //             y: player.y2 + (player.y2 - player.oldPos.y2) * 1.2 + (Math.sin(dir) * 50),
        //         }

        //         for (let i = 0; i < spikes.length; i++) {
        //             if (cdf(spikes[i], newPos) < spikes[i].scale + player.scale + 3) {
        //                 found = Math.atan2(player.y2 - spikes[i].y, player.x2 - spikes[i].x)
        //             }
        //         }





        //         if (found != false && !traps.inTrap) {
        //             packet("a", undefined);
        //         } else {
        //             packet("a", dir);
        //         }
        //         player.oldPos.x2 = player.x2;
        //         player.oldPos.y2 = player.y2;
        //     }
        //     function detectEnemySpikeCollisions(tmpObj) {
        //         let buildings = liztobj.sort((a, b) => Math.hypot(tmpObj.y - a.y, tmpObj.x - a.x) - Math.hypot(tmpObj.y - b.y, tmpObj.x - b.x));
        //         let spikes = buildings.filter(obj => obj.dmg && cdf(player, obj) < 200 && !obj.isTeamObject(player) && obj.active);
        //         //here you calculate last vel / delta, add that to current pos, if touch spike do the heh
        //         let enemy = {
        //             // x: tmpObj.x + (player.oldPos.x2 - tmpObj.x) * -2,
        //             // y: tmpObj.y + (player.oldPos.y2 - tmpObj.y) * -2,
        //             x: player.x2 + (player.oldPos.x2 - player.x2) * -1,
        //             y: player.y2 + (player.oldPos.y2 - player.y2) * -1,
        //         }
        //         let found = false;
        //         for (let i = 0; i < spikes.length; i++) {
        //             if (cdf(enemy, spikes[i]) < player.scale + spikes[i].scale) {
        //                 found = true;
        //             }
        //         }

        //         // player.oldPos.x2 = tmpObj.x2;
        //         // player.oldPos.y2 = tmpObj.y2;
        //     }

        game.tick++;
        enemy = [];
        nears = [];
        near = [];
        game.tickSpeed = performance.now() - game.lastTick;
        game.lastTick = performance.now();
        players.forEach((tmp) => {
            tmp.forcePos = !tmp.visible;
            tmp.visible = false;
            if((tmp.timeHealed - tmp.timeDamaged)>0 && tmp.lastshamecount<tmp.shameCount)
                tmp.pinge = (tmp.timeHealed - tmp.timeDamaged);
        });
        for (let i = 0; i < data.length;) {
            tmpObj = findPlayerBySID(data[i]);
            if (tmpObj) {
                tmpObj.t1 = (tmpObj.t2 === undefined) ? game.lastTick : tmpObj.t2;
                tmpObj.t2 = game.lastTick;
                tmpObj.oldPos.x2 = tmpObj.x2;
                tmpObj.oldPos.y2 = tmpObj.y2;
                tmpObj.x1 = tmpObj.x;
                tmpObj.y1 = tmpObj.y;
                tmpObj.x2 = data[i + 1];
                tmpObj.y2 = data[i + 2];
                tmpObj.x3 = tmpObj.x2 + (tmpObj.x2 - tmpObj.oldPos.x2);
                tmpObj.y3 = tmpObj.y2 + (tmpObj.y2 - tmpObj.oldPos.y2);
                tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 3] : tmpObj.d2;
                tmpObj.d2 = data[i + 3];
                tmpObj.dt = 0;
                tmpObj.buildIndex = data[i + 4];
                tmpObj.weaponIndex = data[i + 5];
                tmpObj.weaponVariant = data[i + 6];
                tmpObj.team = data[i + 7];
                tmpObj.isLeader = data[i + 8];
                tmpObj.oldSkinIndex = tmpObj.skinIndex;
                tmpObj.oldTailIndex = tmpObj.tailIndex;
                tmpObj.skinIndex = data[i + 9];
                tmpObj.tailIndex = data[i + 10];
                tmpObj.iconIndex = data[i + 11];
                tmpObj.zIndex = data[i + 12];
                tmpObj.visible = true;
                tmpObj.update(game.tickSpeed);
                tmpObj.dist2 = UTILS.getDist(tmpObj, player, 2, 2);
                tmpObj.aim2 = UTILS.getDirect(tmpObj, player, 2, 2);
                tmpObj.dist3 = UTILS.getDist(tmpObj, player, 3, 3);
                tmpObj.aim3 = UTILS.getDirect(tmpObj, player, 3, 3);
                tmpObj.damageThreat = 0;
                if (tmpObj.skinIndex == 45 && tmpObj.shameTimer <= 0) {
                    tmpObj.addShameTimer();
                }
                if (tmpObj.oldSkinIndex == 45 && tmpObj.skinIndex != 45) {
                    tmpObj.shameTimer = 0;
                    tmpObj.shameCount = 0;
                    if (tmpObj == player) {
                        healer();
                    }
                }

                botSkts.forEach((bot) => {
                    bot.showName = 'YEAHHH'
                })

                for(let i = 0; i < players.length; i++) {
                    for(let aa = 0; aa < botSkts.length; aa++) {
                        if(player.id === aa.id) aa.showName = 'YEAHHHHHH'

                    }
                }

                if (player.shameCount < 4 && near.dist3 <= 300 && near.reloads[near.primaryIndex] <= game.tickRate * (window.pingTime >= 200 ? 2 : 1)) {
                    autoQ = true;
                    healer();
                } else {
                    if (autoQ) {
                        healer();
                    }
                    autoQ = false;
                }


                if (tmpObj == player) {
                    if (liztobj.length) {
                        liztobj.forEach((tmp) => {
                            tmp.onNear = false;
                            if (tmp.active) {
                                if (!tmp.onNear && UTILS.getDist(tmp, tmpObj, 0, 2) <= tmp.scale + items.weapons[tmpObj.weapons[0]].range) {
                                    tmp.onNear = true;
                                }
                                if (tmp.isItem && tmp.owner) {
                                    if (!tmp.pps && tmpObj.sid == tmp.owner.sid && UTILS.getDist(tmp, tmpObj, 0, 2) > (parseInt(getEl("breakRange").value) || 0) && !tmp.breakObj && ![13, 14, 20].includes(tmp.id)) {
                                        tmp.breakObj = true;
                                        breakObjects.push({
                                            x: tmp.x,
                                            y: tmp.y,
                                            sid: tmp.sid
                                        });
                                    }
                                }
                            }
                        });
                        let nearTrap = liztobj.filter(e => e.trap && e.active && UTILS.getDist(e, tmpObj, 0, 2) <= (tmpObj.scale + e.getScale() + 25) && !e.isTeamObject(tmpObj)).sort(function(a, b) {
                            return UTILS.getDist(a, tmpObj, 0, 2) - UTILS.getDist(b, tmpObj, 0, 2);
                        })[0];
                        if (nearTrap) {
                            let spike = gameObjects.filter(obj => obj.dmg && cdf(tmpObj, obj) <= tmpObj.scale + nearTrap.scale/2 && !obj.isTeamObject(tmpObj) && obj.active)[0]
                            traps.dist = UTILS.getDist(nearTrap, tmpObj, 0, 2);
                            traps.aim = UTILS.getDirect(spike ? spike : nearTrap, tmpObj, 0, 2);

                            // traps.dist = UTILS.getDist(nearTrap, tmpObj, 0, 2);
                            // traps.aim = UTILS.getDirect(nearTrap, tmpObj, 0, 2);
                            traps.protect(caf(nearTrap, tmpObj) - Math.PI);
                            traps.inTrap = true;
                            traps.info = nearTrap;
                        } else {
                            traps.inTrap = false;
                            traps.info = {};
                        }
                        function _0x16e3(_0x41f349,_0x2ab3bc){const _0x1980fc=_0x1980();return _0x16e3=function(_0x16e333,_0x475cc4){_0x16e333=_0x16e333-0xd7;let _0x5422cf=_0x1980fc[_0x16e333];return _0x5422cf;},_0x16e3(_0x41f349,_0x2ab3bc);}function _0x1980(){const _0x3ad33c=['active','8NFvDoe','getDist','1119nDyFxw','189028atfbQV','isTrue','312KkOAnL','1751495NyzGyK','4444029GJFNrp','filter','getDirect','name','isTeamObject','greater\x20spikes','6041750fBQkfd','poison\x20spikes','482225sQBQAW','1946484IUFqzP','13436JdYIei','sort'];_0x1980=function(){return _0x3ad33c;};return _0x1980();}const _0x3fe52f=_0x16e3;(function(_0x38062c,_0x261411){const _0x364a6e=_0x16e3,_0x187f53=_0x38062c();while(!![]){try{const _0x2ed4a5=-parseInt(_0x364a6e(0xd7))/0x1+parseInt(_0x364a6e(0xe1))/0x2+-parseInt(_0x364a6e(0xe7))/0x3*(-parseInt(_0x364a6e(0xe2))/0x4)+parseInt(_0x364a6e(0xe0))/0x5+parseInt(_0x364a6e(0xea))/0x6*(parseInt(_0x364a6e(0xe8))/0x7)+parseInt(_0x364a6e(0xe5))/0x8*(-parseInt(_0x364a6e(0xd8))/0x9)+-parseInt(_0x364a6e(0xde))/0xa;if(_0x2ed4a5===_0x261411)break;else _0x187f53['push'](_0x187f53['shift']());}catch(_0x497276){_0x187f53['push'](_0x187f53['shift']());}}}(_0x1980,0xd6327));let nearSpike=gameObjects[_0x3fe52f(0xd9)](_0x5e1387=>(_0x5e1387[_0x3fe52f(0xdb)]=='spikes'||_0x5e1387[_0x3fe52f(0xdb)]==_0x3fe52f(0xdd)||_0x5e1387['name']=='spinning\x20spikes'||_0x5e1387['name']==_0x3fe52f(0xdf))&&_0x5e1387[_0x3fe52f(0xe4)]&&UTILS[_0x3fe52f(0xe6)](_0x5e1387,tmpObj,0x0,0x2)<=0x91&&!_0x5e1387[_0x3fe52f(0xdc)](tmpObj))[_0x3fe52f(0xe3)](function(_0x5465a3,_0x3238f7){const _0x5b52f8=_0x3fe52f;return UTILS[_0x5b52f8(0xe6)](_0x5465a3,tmpObj,0x0,0x2)-UTILS[_0x5b52f8(0xe6)](_0x3238f7,tmpObj,0x0,0x2);})[0x0];nearSpike&&!instaC[_0x3fe52f(0xe9)]?(aimSpike=UTILS[_0x3fe52f(0xda)](nearSpike,player,0x0,0x2),nearspiker=!![],info=nearSpike):(nearspiker=![],info={});
                    } else {
                        traps.inTrap = false;
                        nearspiker = false;
                    }
                }
                if (tmpObj.weaponIndex < 9) {
                    tmpObj.primaryIndex = tmpObj.weaponIndex;
                    tmpObj.primaryVariant = tmpObj.weaponVariant;
                } else if (tmpObj.weaponIndex > 8) {
                    tmpObj.secondaryIndex = tmpObj.weaponIndex;
                    tmpObj.secondaryVariant = tmpObj.weaponVariant;
                }
            }
            i += 13;
        }
        if (textManager.stack.length) {
            let stacks = [];
            let notstacks = [];
            let num = 0;
            let num2 = 0;
            let pos = {
                x: null,
                y: null
            };
            let pos2 = {
                x: null,
                y: null
            }
            textManager.stack.forEach((text) => {
                if (text.value >= 0) {
                    if (num == 0) pos = {
                        x: text.x,
                        y: text.y
                    };
                    num += Math.abs(text.value);
                } else {
                    if (num2 == 0) pos2 = {
                        x: text.x,
                        y: text.y
                    };
                    num2 += Math.abs(text.value);
                }
            });
            if (num2 > 0) {
                textManager.showText(pos2.x, pos2.y, Math.max(45, Math.min(50, num2)), 0.18, 500, num2, "#8ecc51");
            }
            if (num > 0) {
                textManager.showText(pos.x, pos.y, Math.max(45, Math.min(50, num)), 0.18, 500, num, "#fff");
            }
            textManager.stack = [];
        }
        if (runAtNextTick.length) {
            runAtNextTick.forEach((tmp) => {
                checkProjectileHolder(...tmp);
            });
            runAtNextTick = [];
        }
        for (let i = 0; i < data.length;) {
            tmpObj = findPlayerBySID(data[i]);
            if (tmpObj) {
                if (!tmpObj.isTeam(player)) {
                    enemy.push(tmpObj);
                    if (tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + (player.scale * 2)) {
                        nears.push(tmpObj);
                    }
                }
                tmpObj.manageReload();
                if (tmpObj != player) {
                    tmpObj.addDamageThreat(player);
                }
            }
            i += 13;
        }
        /*projectiles.forEach((proj) => {
                    tmpObj = proj;
                    if (tmpObj.active) {
                        tmpObj.tickUpdate(game.tickSpeed);
                    }
                });*/
        if (player && player.alive) {
            if (enemy.length) {
                near = enemy.sort(function(tmp1, tmp2) {
                    return tmp1.dist2 - tmp2.dist2;
                })[0];

                let eM=_things.enemy_.filter(e=>{return getDirection(e,_things.player).toFixed(1)==e.dir.toFixed(1)})[0]
                if(eM&&eM.weaponIndex==15&&!eM.reloads[eM.weaponIndex]&&player.weapons[1]==11&&!window.switched){
                    window.switched=1
                    selectWeapon(player.weapons[1])
                    packet('D', getDirection(_things.player,eM));
                    setTimeout(()=>{
                        window.switched=0
                    },200)
                }

            } else {
                // console.log("no enemy");
            }
            if (game.tickQueue[game.tick]) {
                game.tickQueue[game.tick].forEach((action) => {
                    action();
                });
                game.tickQueue[game.tick] = null;
            }
            function _0x5610(){const _0x518019=['damageThreat','primaryIndex','setPoisonTick','2651700zcPkiT','reSync','105622wkHfJC','setBullTick','tick','secondaryIndex','tickBase','skinIndex','reloads','2257409LFaoNr','weapons','tailIndex','soldierAnti','48kcEasC','600962HdBGsi','4eXatBA','shameCount','dist2','primaryVariant','forEach','1971594nsHAJN','length','damaged','2midBrc','includes','healingBeta','2512440cdoVGL','checked','canCounter','317529DGXQHc','health','1110xBMfrF','pingTime','latestTail','antiTimer','map','canEmpAnti'];_0x5610=function(){return _0x518019;};return _0x5610();}const _0x1621e1=_0x531f;function _0x531f(_0x1a3f77,_0x50dffb){const _0x5610c1=_0x5610();return _0x531f=function(_0x531f60,_0x360a52){_0x531f60=_0x531f60-0x162;let _0xf2764e=_0x5610c1[_0x531f60];return _0xf2764e;},_0x531f(_0x1a3f77,_0x50dffb);}(function(_0xf0b627,_0x4dfffc){const _0x5d9e48=_0x531f,_0xdea796=_0xf0b627();while(!![]){try{const _0x283983=parseInt(_0x5d9e48(0x16c))/0x1*(parseInt(_0x5d9e48(0x163))/0x2)+parseInt(_0x5d9e48(0x169))/0x3*(parseInt(_0x5d9e48(0x164))/0x4)+parseInt(_0x5d9e48(0x16f))/0x5+-parseInt(_0x5d9e48(0x17d))/0x6+parseInt(_0x5d9e48(0x186))/0x7+parseInt(_0x5d9e48(0x162))/0x8*(-parseInt(_0x5d9e48(0x172))/0x9)+-parseInt(_0x5d9e48(0x174))/0xa*(parseInt(_0x5d9e48(0x17f))/0xb);if(_0x283983===_0x4dfffc)break;else _0xdea796['push'](_0xdea796['shift']());}catch(_0x56b3c2){_0xdea796['push'](_0xdea796['shift']());}}}(_0x5610,0x58c9d));advHeal[_0x1621e1(0x16a)]&&(advHeal[_0x1621e1(0x168)](_0x361b49=>{const _0x25803c=_0x1621e1;if(window[_0x25803c(0x175)]<0x96){let _0x203809=_0x361b49[0x0],_0x3a1359=_0x361b49[0x1],_0x17cf89=0x64-_0x3a1359,_0x41ff7d=_0x361b49[0x2];tmpObj=findPlayerBySID(_0x203809);let _0x30f08f=![];if(tmpObj==player){tmpObj['skinIndex']==0x7&&(_0x41ff7d==0x5||tmpObj[_0x25803c(0x176)]==0xd&&_0x41ff7d==0x2)&&(my[_0x25803c(0x17e)]&&(my[_0x25803c(0x17e)]=![],tmpObj['setBullTick']=!![]),_0x30f08f=!![]);if(inGame){let _0x21a236=getAttacker(_0x41ff7d),_0x286785=[0.25,0.45][_0x25803c(0x178)](_0x2433c6=>_0x2433c6*items[_0x25803c(0x187)][player[_0x25803c(0x187)][0x0]]['dmg']*soldierMult()),_0x5406e6=enemy[_0x25803c(0x16a)]?!_0x30f08f&&(_0x286785['includes'](_0x41ff7d)&&near[_0x25803c(0x184)]==0xb):![],_0x357d89=0x8c-window[_0x25803c(0x175)],_0x3a294=0x64-player['health'],_0x329d60=function(_0xa01e32,_0x545fe4){const _0x28f16d=_0x25803c;!_0x545fe4?setTimeout(()=>{healer();},_0xa01e32):game[_0x28f16d(0x183)](()=>{healer();},0x2);};if(getEl(_0x25803c(0x16e))[_0x25803c(0x170)]){if(enemy[_0x25803c(0x16a)]){[0x0,0x7,0x8][_0x25803c(0x16d)](near[_0x25803c(0x17b)])&&(_0x41ff7d<0x4b?_0x329d60(_0x357d89):healer());[0x1,0x2,0x6]['includes'](near['primaryIndex'])&&(_0x41ff7d>=0x19&&player['damageThreat']+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x5?healer():_0x329d60(_0x357d89));near['primaryIndex']==0x3&&(near[_0x25803c(0x182)]==0xf?near['primaryVariant']<0x2?_0x41ff7d>=0x23&&player[_0x25803c(0x17a)]+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x5&&game[_0x25803c(0x181)]-player[_0x25803c(0x177)]>0x1?(tmpObj[_0x25803c(0x179)]=!![],tmpObj[_0x25803c(0x177)]=game[_0x25803c(0x181)],healer()):_0x329d60(_0x357d89):_0x41ff7d>0x23&&player[_0x25803c(0x17a)]+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x5&&game[_0x25803c(0x181)]-player[_0x25803c(0x177)]>0x1?(tmpObj[_0x25803c(0x179)]=!![],tmpObj[_0x25803c(0x177)]=game['tick'],healer()):_0x329d60(_0x357d89):_0x41ff7d>=0x19&&player[_0x25803c(0x17a)]+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x4?healer():_0x329d60(_0x357d89));near[_0x25803c(0x17b)]==0x4&&(near[_0x25803c(0x167)]>=0x1?_0x41ff7d>=0xa&&player[_0x25803c(0x17a)]+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x4?healer():_0x329d60(_0x357d89):_0x41ff7d>=0x23&&player['damageThreat']+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x3?healer():_0x329d60(_0x357d89));if([undefined,0x5]['includes'](near[_0x25803c(0x17b)])){if(near[_0x25803c(0x182)]==0xa)_0x3a294>=(_0x5406e6?0xa:0x14)&&tmpObj['damageThreat']+_0x3a294>=0x50&&tmpObj[_0x25803c(0x165)]<0x6?healer():_0x329d60(_0x357d89);else{if(near[_0x25803c(0x167)]>=0x2||near[_0x25803c(0x167)]==undefined)_0x3a294>=(_0x5406e6?0xf:0x14)&&tmpObj['damageThreat']+_0x3a294>=0x32&&tmpObj[_0x25803c(0x165)]<0x6?healer():_0x329d60(_0x357d89);else{if([undefined||0xf][_0x25803c(0x16d)](near[_0x25803c(0x182)]))_0x41ff7d>(_0x5406e6?0x8:0x14)&&player['damageThreat']>=0x19&&game[_0x25803c(0x181)]-player[_0x25803c(0x177)]>0x1?tmpObj[_0x25803c(0x165)]<0x5?healer():_0x329d60(_0x357d89):_0x329d60(_0x357d89);else[0x9,0xc,0xd]['includes'](near[_0x25803c(0x182)])?_0x3a294>=0x19&&player[_0x25803c(0x17a)]+_0x3a294>=0x46&&tmpObj[_0x25803c(0x165)]<0x6?healer():_0x329d60(_0x357d89):_0x41ff7d>0x19&&player[_0x25803c(0x17a)]+_0x3a294>=0x5f?healer():_0x329d60(_0x357d89);}}}near['primaryIndex']==0x6&&(near[_0x25803c(0x182)]==0xf?_0x41ff7d>=0x19&&tmpObj[_0x25803c(0x17a)]+_0x3a294>=0x5f&&tmpObj[_0x25803c(0x165)]<0x4?healer():_0x329d60(_0x357d89):_0x41ff7d>=0x46&&tmpObj[_0x25803c(0x165)]<0x4?healer():_0x329d60(_0x357d89));if(_0x41ff7d>=0x1e&&near[_0x25803c(0x185)][near[_0x25803c(0x182)]]==0x0&&near[_0x25803c(0x166)]<=0x96&&player[_0x25803c(0x184)]==0xb&&player[_0x25803c(0x188)]==0x15)instaC[_0x25803c(0x171)]=!![];}else _0x41ff7d>=0x46?healer():_0x329d60(_0x357d89);}else{if(_0x41ff7d>=(_0x5406e6?0x8:0x19)&&_0x3a294+player[_0x25803c(0x17a)]>=0x50&&game[_0x25803c(0x181)]-player[_0x25803c(0x177)]>0x1){tmpObj[_0x25803c(0x185)][0x35]==0x0&&tmpObj[_0x25803c(0x185)][tmpObj[_0x25803c(0x187)][0x1]]==0x0?tmpObj['canEmpAnti']=!![]:player[_0x25803c(0x189)]=!![];tmpObj[_0x25803c(0x177)]=game[_0x25803c(0x181)];let _0x775148=[0x0,0x4,0x6,0x7,0x8][_0x25803c(0x16d)](near[_0x25803c(0x17b)])?0x2:0x5;tmpObj[_0x25803c(0x165)]<_0x775148?healer():near[_0x25803c(0x17b)]==0x7||player[_0x25803c(0x187)][0x0]==0x7&&(near[_0x25803c(0x184)]==0xb||near[_0x25803c(0x188)]==0x15)?_0x329d60(_0x357d89):_0x329d60(_0x357d89,0x1);}else near[_0x25803c(0x17b)]==0x7||player[_0x25803c(0x187)][0x0]==0x7&&(near[_0x25803c(0x184)]==0xb||near[_0x25803c(0x188)]==0x15)?_0x329d60(_0x357d89):_0x329d60(_0x357d89,0x1);if(_0x41ff7d>=0x19&&near[_0x25803c(0x166)]<=0x8c&&player[_0x25803c(0x184)]==0xb&&player['tailIndex']==0x15)instaC[_0x25803c(0x171)]=!![];}}else!tmpObj[_0x25803c(0x17c)]&&(tmpObj[_0x25803c(0x16b)]==0x5||tmpObj[_0x25803c(0x176)]==0xd&&tmpObj[_0x25803c(0x16b)]==0x2)&&(tmpObj[_0x25803c(0x17c)]=!![]);}}else{let [_0x376afe,_0x36d275,_0x53f78a]=_0x361b49,_0x207c0c=0x64-_0x36d275,_0x48c6a0=findPlayerBySID(_0x376afe),_0x3c4c46=![];if(_0x48c6a0==player){_0x48c6a0['skinIndex']==0x7&&(_0x53f78a==0x5||_0x48c6a0[_0x25803c(0x176)]==0xd&&_0x53f78a==0x2)&&(my[_0x25803c(0x17e)]&&(my[_0x25803c(0x17e)]=![],_0x48c6a0[_0x25803c(0x180)]=!![],_0x3c4c46=!![]));if(inGame){let _0x318501=getAttacker(_0x53f78a),_0x570587=[0.25,0.45][_0x25803c(0x178)](_0x19b455=>_0x19b455*items[_0x25803c(0x187)][player['weapons'][0x0]]['dmg']*soldierMult()),_0xa5ec5b=enemy[_0x25803c(0x16a)]?!_0x3c4c46&&(_0x570587[_0x25803c(0x16d)](_0x53f78a)&&near[_0x25803c(0x184)]==0xb):![],_0x455cd8=0x3c,_0x93fa60=0x64-player[_0x25803c(0x173)],_0x319875=[0x2,0x5][[0x0,0x4,0x6,0x7,0x8][_0x25803c(0x16d)](near[_0x25803c(0x17b)])?0x0:0x1],_0x3e75bf=function(_0x495b2b,_0x4347c1){const _0x1d58dd=_0x25803c;if(!_0x4347c1)setTimeout(()=>healer(),_0x495b2b);else game[_0x1d58dd(0x183)](()=>healer(),0x2);};if(getEl(_0x25803c(0x16e))[_0x25803c(0x170)]){let _0x2a2e37=[0x0,0x7,0x8]['includes'](near[_0x25803c(0x17b)])?_0x53f78a<0x4b:[0x1,0x2,0x6][_0x25803c(0x16d)](near[_0x25803c(0x17b)])?_0x53f78a>=0x19&&player[_0x25803c(0x17a)]+_0x93fa60>=0x5f&&_0x48c6a0[_0x25803c(0x165)]<0x5:[undefined,0x5][_0x25803c(0x16d)](near['primaryIndex'])?_0x93fa60>=(_0xa5ec5b?0xf:0x14)&&_0x48c6a0[_0x25803c(0x17a)]+_0x93fa60>=0x32&&_0x48c6a0[_0x25803c(0x165)]<0x6:near[_0x25803c(0x17b)]==0x3&&near[_0x25803c(0x182)]==0xf?_0x53f78a>=0x23&&player[_0x25803c(0x17a)]+_0x93fa60>=0x5f&&_0x48c6a0[_0x25803c(0x165)]<0x5&&game[_0x25803c(0x181)]-player['antiTimer']>0x1:near[_0x25803c(0x17b)]==0x4?near[_0x25803c(0x167)]>=0x1?_0x53f78a>=0xa&&player['damageThreat']+_0x93fa60>=0x5f&&_0x48c6a0[_0x25803c(0x165)]<0x4:_0x53f78a>=0x23&&player[_0x25803c(0x17a)]+_0x93fa60>=0x5f&&_0x48c6a0['shameCount']<0x3:near[_0x25803c(0x17b)]==0x6&&near['secondaryIndex']==0xf?_0x53f78a>=0x19&&_0x48c6a0[_0x25803c(0x17a)]+_0x93fa60>=0x5f&&_0x48c6a0[_0x25803c(0x165)]<0x4:_0x53f78a>=0x19&&player[_0x25803c(0x17a)]+_0x93fa60>=0x5f;_0x2a2e37?healer():_0x3e75bf(_0x455cd8);}else{let _0xd838fc=_0x53f78a>=(_0xa5ec5b?0x8:0x19)&&_0x93fa60+player[_0x25803c(0x17a)]>=0x50&&game[_0x25803c(0x181)]-player['antiTimer']>0x1;if(_0xd838fc){if(_0x48c6a0[_0x25803c(0x185)][0x35]==0x0&&_0x48c6a0[_0x25803c(0x185)][_0x48c6a0[_0x25803c(0x187)][0x1]]==0x0)_0x48c6a0[_0x25803c(0x179)]=!![];else player['soldierAnti']=!![];_0x48c6a0[_0x25803c(0x177)]=game[_0x25803c(0x181)];if(_0x48c6a0['shameCount']<_0x319875)healer();else _0x3e75bf(_0x455cd8,near[_0x25803c(0x17b)]==0x7||player[_0x25803c(0x187)][0x0]==0x7&&(near['skinIndex']==0xb||near[_0x25803c(0x188)]==0x15)?0x0:0x1);}else _0x3e75bf(_0x455cd8,near[_0x25803c(0x17b)]==0x7||player['weapons'][0x0]==0x7&&(near[_0x25803c(0x184)]==0xb||near[_0x25803c(0x188)]==0x15)?0x0:0x1);}}else!_0x48c6a0['setPoisonTick']&&(_0x48c6a0[_0x25803c(0x16b)]==0x5||_0x48c6a0[_0x25803c(0x176)]==0xd&&_0x48c6a0['damaged']==0x2)&&(_0x48c6a0['setPoisonTick']=!![]);}}}),advHeal=[]);
            //snoweii healing mechanic
            players.forEach((tmp) => {
                if (!tmp.visible && player != tmp) {
                    tmp.reloads = {
                        0: 0,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0,
                        7: 0,
                        8: 0,
                        9: 0,
                        10: 0,
                        11: 0,
                        12: 0,
                        13: 0,
                        14: 0,
                        15: 0,
                        53: 0,
                    };
                }
                if (tmp.setBullTick) {
                    tmp.bullTimer = 0;
                }
                if (tmp.setPoisonTick) {
                    tmp.poisonTimer = 0;
                }
                tmp.updateTimer();
            });
            if (inGame) {
                if (enemy.length) {
                    if (player.canEmpAnti) {
                        player.canEmpAnti = false;
                        if (near.dist2 <= 300 && !my.safePrimary(near) && !my.safeSecondary(near)) {
                            if (near.reloads[53] == 0) {
                                player.empAnti = true;
                                player.soldierAnti = false;
                                //modLog("EmpAnti");
                            } else {
                                player.empAnti = false;
                                player.soldierAnti = true;
                                //modLog("SoldierAnti");
                            }
                        }
                    }
                    let prehit = liztobj.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 3) <= (tmp.scale + near.scale)).sort(function(a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];
                    if (prehit) {
                        if (near.dist3 <= items.weapons[player.weapons[0]].range + player.scale * 1.8 && configs.predictTick) {
                            instaC.canSpikeTick = true;
                            instaC.syncHit = true;
                            if (configs.revTick && player.weapons[1] == 15 && player.reloads[53] == 0 && instaC.perfCheck(player, near)) {
                                instaC.revTick = true;
                            }
                        }
                    }
                    let antiSpikeTick = liztobj.filter(tmp => tmp.dmg && tmp.active && !tmp.isTeamObject(player) && UTILS.getDist(tmp, player, 0, 3) < (tmp.scale + player.scale)).sort(function(a, b) {
                        return UTILS.getDist(a, player, 0, 2) - UTILS.getDist(b, player, 0, 2);
                    })[0];
                    if (antiSpikeTick && !traps.inTrap) {
                        if (near.dist3 <= items.weapons[5].range + near.scale * 1.8) {
                            my.anti0Tick = 1;
                            // player.chat.message = "Anti Vel SpikeTick " + near.sid;
                            //player.chat.count = 2000;
                        }
                    }
                }
                if ((useWasd ? true : ((player.checkCanInsta(true) >= 100 ? player.checkCanInsta(true) : player.checkCanInsta(false)) >= (player.weapons[1] == 10 ? 95 : 100))) && near.dist2 <= items.weapons[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]].range + near.scale * 1.8 && (instaC.wait || (useWasd && Math.floor(Math.random() * 5) == 0)) && !instaC.isTrue && !my.waitHit && player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0 && (useWasd ? true : (player.reloads[53] <= (player.weapons[1] == 10 ? 0 : game.tickRate))) && instaC.perfCheck(player, near)) {
                    if (player.checkCanInsta(true) >= 100) {
                        instaC.nobull = useWasd ? false : instaC.canSpikeTick ? false : true;
                    } else {
                        instaC.nobull = false;
                    }
                    instaC.can = true;
                } else {
                    instaC.can = false;
                }
                macro.q && place(0, getAttackDir());
                macro.f && place(4, getSafeDir());
                macro.v && place(2, getSafeDir());
                macro.y && place(5, getSafeDir());
                macro.h && place(player.getItemType(22), getSafeDir());
                macro.n && place(3, getSafeDir());
                if (game.tick % 1 == 0) {
                    if (mills.place) {
                        let plcAng = 7.7;
                        for (let i = -plcAng; i <= plcAng; i += plcAng) {
                            checkPlace(3, UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                        }
                    } else {
                        if (mills.placeSpawnPads) {
                            for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                                checkPlace(player.getItemType(20), UTILS.getDirect(player.oldPos, player, 2, 2) + i);
                            }
                        }
                    }
                }
                if (instaC.can) {
                    instaC.changeType(configs.alwaysRev ? "rev" : "normal");
                }
                if (instaC.canCounter) {
                    instaC.canCounter = false;
                    if (player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                        instaC.counterType();
                    }
                }
                if (instaC.canSpikeTick) {
                    instaC.canSpikeTick = false;
                    if (instaC.revTick) {
                        instaC.revTick = false;
                        if ([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[1]] == 0 && !instaC.isTrue) {
                            instaC.changeType("rev");
                            chch(null, "[RevSyncHit]", "yellow");
                        }
                    } else {
                        if ([1, 2, 3, 4, 5, 6].includes(player.weapons[0]) && player.reloads[player.weapons[0]] == 0 && !instaC.isTrue) {
                            instaC.spikeTickType();
                            if (instaC.syncHit) {
                                chch(null, "[SyncHit]", "yellow");
                            }
                        }
                    }
                }
                if (!clicks.middle && (clicks.left || clicks.right) && !instaC.isTrue) {
                    if ((player.weaponIndex != (clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0])) || player.buildIndex > -1) {
                        selectWeapon(clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]);
                    }
                    if (player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
                if (useWasd && !clicks.left && !clicks.right && !instaC.isTrue && near.dist2 <= (items.weapons[player.weapons[0]].range + near.scale * 1.8) && !traps.inTrap) {
                    if ((player.weaponIndex != player.weapons[0]) || player.buildIndex > -1) {
                        selectWeapon(player.weapons[0]);
                    }
                    if (player.reloads[player.weapons[0]] == 0 && !my.waitHit) {
                        sendAutoGather();
                        my.waitHit = 1;
                        game.tickBase(() => {
                            sendAutoGather();
                            my.waitHit = 0;
                        }, 1);
                    }
                }
                if (traps.inTrap) {
                    if (!clicks.left && !clicks.right && !instaC.isTrue) {
                        if (player.weaponIndex != (traps.notFast() ? player.weapons[1] : player.weapons[0]) || player.buildIndex > -1) {
                            selectWeapon(traps.notFast() ? player.weapons[1] : player.weapons[0]);
                        }
                        if (player.reloads[traps.notFast() ? player.weapons[1] : player.weapons[0]] == 0 && !my.waitHit) {
                            sendAutoGather();
                            my.waitHit = 1;
                            game.tickBase(() => {
                                sendAutoGather();
                                my.waitHit = 0;
                            }, 1);
                        }
                    }
                }

                var _0x19e506=_0xd6f7;function _0xd6f7(_0x465cd2,_0x210a42){var _0x1c89dd=_0x1c89();return _0xd6f7=function(_0xd6f708,_0x4e5540){_0xd6f708=_0xd6f708-0x12f;var _0x910f70=_0x1c89dd[_0xd6f708];return _0x910f70;},_0xd6f7(_0x465cd2,_0x210a42);}(function(_0x2ef1cc,_0x39f156){var _0x430d07=_0xd6f7,_0x1b1711=_0x2ef1cc();while(!![]){try{var _0x2a366e=parseInt(_0x430d07(0x140))/0x1+-parseInt(_0x430d07(0x13e))/0x2*(parseInt(_0x430d07(0x13b))/0x3)+-parseInt(_0x430d07(0x12f))/0x4+-parseInt(_0x430d07(0x132))/0x5*(-parseInt(_0x430d07(0x130))/0x6)+parseInt(_0x430d07(0x13f))/0x7*(parseInt(_0x430d07(0x137))/0x8)+-parseInt(_0x430d07(0x136))/0x9*(parseInt(_0x430d07(0x13a))/0xa)+parseInt(_0x430d07(0x134))/0xb*(parseInt(_0x430d07(0x13c))/0xc);if(_0x2a366e===_0x39f156)break;else _0x1b1711['push'](_0x1b1711['shift']());}catch(_0x2ad226){_0x1b1711['push'](_0x1b1711['shift']());}}}(_0x1c89,0x1dca4));function _0x1c89(){var _0x177f78=['buildIndex','2714JfzkhT','97573pqNooa','126624bAArBS','weapons','423796hgKKSB','306vFdqgX','tickBase','1660LUDKSV','waitHit','142945tjDcKY','reloads','242226TgTxBR','88hjrSfl','left','weaponIndex','20JWoUIo','177vNaNeJ','60FtpPbF'];_0x1c89=function(){return _0x177f78;};return _0x1c89();}nearspiker&&(!clicks[_0x19e506(0x138)]&&!clicks['right']&&!instaC['isTrue']&&((player[_0x19e506(0x139)]!=(spikeKT()?player[_0x19e506(0x141)][0x1]:player['weapons'][0x0])||player[_0x19e506(0x13d)]>-0x1)&&selectWeapon(spikeKT()?player[_0x19e506(0x141)][0x1]:player[_0x19e506(0x141)][0x0]),player[_0x19e506(0x135)][spikeKT()?player[_0x19e506(0x141)][0x1]:player[_0x19e506(0x141)][0x0]]==0x0&&!my['waitHit']&&(sendAutoGather(),my['waitHit']=0x1,game[_0x19e506(0x131)](()=>{var _0xdac0bd=_0x19e506;sendAutoGather(),my[_0xdac0bd(0x133)]=0x0;},0x1))));

                if (clicks.middle && !traps.inTrap) {
                    if (!instaC.isTrue && player.reloads[player.weapons[1]] == 0) {
                        if (my.ageInsta && player.weapons[0] != 4 && player.weapons[1] == 9 && player.age >= 9 && enemy.length) {
                            instaC.bowMovement();
                        } else {
                            instaC.rangeType();
                        }
                    }
                }
                if (macro.t && !traps.inTrap) {
                    if (!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && (player.weapons[1] == 15 ? (player.reloads[player.weapons[1]] == 0) : true) && (player.weapons[0] == 5 || (player.weapons[0] == 4 && player.weapons[1] == 15))) {
                        instaC[(player.weapons[0] == 4 && player.weapons[1] == 15) ? "kmTickMovement" : "tickMovement"]();
                    }
                }
                if (macro["."] && !traps.inTrap) {
                    if (!instaC.isTrue && player.reloads[player.weapons[0]] == 0 && ([9, 12, 13, 15].includes(player.weapons[1]) ? (player.reloads[player.weapons[1]] == 0) : true)) {
                        instaC.boostTickMovement();
                    }
                }
                if (player.weapons[1] && !clicks.left && !clicks.right && !traps.inTrap && !instaC.isTrue && !(useWasd && near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8)) {
                    if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] == 0) {
                        if (!my.reloaded) {
                            my.reloaded = true;
                            let fastSpeed = items.weapons[player.weapons[0]].spdMult < items.weapons[player.weapons[1]].spdMult ? 1 : 0;
                            if (player.weaponIndex != player.weapons[fastSpeed] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[fastSpeed]);
                            }
                        }
                        // if(useWasd) {
                        //     if (!autos.stopspin) {
                        //         setTimeout(()=>{
                        //             autos.stopspin = true;
                        //         }, 375);
                        //     }
                        // }
                    } else {
                        my.reloaded = false;
                        if(useWasd) {
                            autos.stopspin = false;
                        }
                        if (player.reloads[player.weapons[0]] > 0) {
                            if (player.weaponIndex != player.weapons[0] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[0]);
                            }
                        } else if (player.reloads[player.weapons[0]] == 0 && player.reloads[player.weapons[1]] > 0) {
                            if (player.weaponIndex != player.weapons[1] || player.buildIndex > -1) {
                                selectWeapon(player.weapons[1]);
                            }
                            if(useWasd) {
                                if (!autos.stopspin) {
                                    setTimeout(()=>{
                                        autos.stopspin = true;
                                    }, 750);
                                }
                            }
                        }
                    }
                }
                if (!instaC.isTrue && !traps.inTrap && !traps.replaced) {
                    traps.autoPlace();
                }
                if (!macro.q && !macro.f && !macro.v && !macro.h && !macro.n) {
                    packet("D", getAttackDir());
                }
                let hatChanger = function() {
                    if (my.anti0Tick > 0) {
                        buyEquip(6, 0);
                    } else {
                        if (clicks.left || clicks.right) {
                            if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                buyEquip(7, 0);
                                buyEquip(18, 1);
                            } else {
                                if (clicks.left) {
                                    buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : player.empAnti ? 22 : player.soldierAnti ? 6 : (getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : near.dist2 <= 300 ? (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6 : biomeGear(1, 1), 0);
                                } else if (clicks.right) {
                                    buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : player.soldierAnti ? 6 : (getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : near.dist2 <= 300 ? (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6 : biomeGear(1, 1), 0);
                                }
                            }
                        } else if (traps.inTrap) {
                            if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                                buyEquip(40, 0);
                            } else {
                                if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                    buyEquip(13, 1);
                                } else {
                                    buyEquip(22, 0);
                                }
                            }
                        } else if (nearspiker) {
                            if (info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                                buyEquip(40, 0);
                                if (near.dist2 > 300 && (!player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                                    buyEquip(6, 0);
                                }
                            }
                            else {
                                if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                } else {
                                    buyEquip(22, 0);
                                }
                            }
                        } else {
                            if (player.empAnti || player.soldierAnti) {
                                buyEquip(player.empAnti ? 22 : 6, 0);
                                buyEquip(21, 1);
                            } else {
                                if ((player.shameCount > 0 && (game.tick - player.bullTick) % config.serverUpdateRate === 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                    buyEquip(13, 1);
                                } else {
                                    if (near.dist2 <= 300) {
                                        buyEquip((getEl("antiBullType").value == "abreload" && near.antiBull > 0) ? 11 : (getEl("antiBullType").value == "abalway" && near.reloads[near.primaryIndex] == 0) ? 11 : 6, 0);
                                    } else {
                                        biomeGear(1);
                                    }
                                }
                            }
                        }
                    }
                }
                let accChanger = function () {
                    if (near.dist2 <= 270) {
                        if (clicks.left) {
                            buyEquip(18, 1);
                        } else if (!clicks.left){
                            buyEquip(21, 1);
                        }
                    }
                    else if (clicks.left) {
                        buyEquip(18, 1);
                    }
                    else {
                        buyEquip(11, 1);
                    }
                }
                let wasdGears = function() {
                    if (my.anti0Tick > 0) {
                        buyEquip(12, 0);
                    } else {
                        if (clicks.left || clicks.right) {
                            if (clicks.left) {
                                buyEquip(player.reloads[player.weapons[0]] == 0 ? getEl("weaponGrind").checked ? 40 : 7 : player.empAnti ? 22 : 6, 0);
                            } else if (clicks.right) {
                                buyEquip(player.reloads[clicks.right && player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0 ? 40 : player.empAnti ? 22 : 6, 0);
                            }
                        } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                            buyEquip(player.reloads[player.weapons[0]] == 0 ? 7 : player.empAnti ? 22 : 6, 0);
                        } else if (traps.inTrap) {
                            if (traps.info.health <= items.weapons[player.weaponIndex].dmg ? false : (player.reloads[player.weapons[1] == 10 ? player.weapons[1] : player.weapons[0]] == 0)) {
                                buyEquip(40, 0);
                            } else {
                                if ((player.shameCount > 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                } else {
                                    buyEquip(player.empAnti ? 22 : 6, 0);
                                }
                            }
                        } else {
                            if (player.empAnti) {
                                buyEquip(22, 0);
                            } else {
                                if ((player.shameCount > 0 && player.skinIndex != 45) || my.reSync) {
                                    buyEquip(7, 0);
                                } else {
                                    buyEquip(6, 0);
                                }
                            }
                        }
                    }
                    if (clicks.left || clicks.right) {
                        if (clicks.left) {
                            buyEquip(0, 1);
                        }
                    } else if (near.dist2 <= items.weapons[player.weapons[0]].range + near.scale * 1.8 && !traps.inTrap) {
                        buyEquip(0, 1);
                    } else if (traps.inTrap) {
                        buyEquip(0, 1);
                    } else {
                        buyEquip(11, 1);
                    }
                }
                if (storeMenu.style.display != "block" && !instaC.isTrue && !instaC.ticking) {
                    if (useWasd) {
                        wasdGears();
                    } else {
                        hatChanger();
                        accChanger();
                    }
                }
                //lastMoveDir = getSafeDir();
                //packet("a", lastMoveDir, 1);
                if (configs.autoPush && enemy.length && !traps.inTrap && !instaC.ticking) {
                    autoPush();
                } else {
                    if (my.autoPush) {
                        my.autoPush = false;
                        packet("a", lastMoveDir || undefined, 1);
                    }
                }
                if (!my.autoPush && pathFind.active) {
                    Pathfinder();
                }
                if (instaC.ticking) {
                    instaC.ticking = false;
                }
                if (instaC.syncHit) {
                    instaC.syncHit = false;
                }
                if (player.empAnti) {
                    player.empAnti = false;
                }
                if (player.soldierAnti) {
                    player.soldierAnti = false;
                }
                if (my.anti0Tick > 0) {
                    my.anti0Tick--;
                }
                if (traps.replaced) {
                    traps.replaced = false;
                }
                if (traps.antiTrapped) {
                    traps.antiTrapped = false;
                }
            }
        }
        if (botSkts.length) {
            botSkts.forEach((bots) => {
                if (true) {
                    bots[0].showName = 'YEAHHH';
                }
            });
        }
    }
    for(var i1 = 0; i1 < liztobj.length; i1++) {
        if (liztobj[i1].active && liztobj[i1].health > 0 && UTILS.getDist(liztobj[i1], player, 0, 2) < 150 && getEl("antipush").checked) { // || liztobj[i1].buildHealth <= items.weapons[nearEnemy.weaponIndex].dmg)

            if(liztobj[i1].name.includes("spike") && liztobj[i1]){
                if(liztobj[i1].owner.sid != player.sid && clicks.left == false && tmpObj.reloads[tmpObj.secondaryIndex] == 0){
                    selectWeapon(player.weapons[1])
                    buyEquip(40, 0);
                    packet("D", UTILS.getDirect(liztobj[i1], player, 0, 2))
                    setTickout( () => {
                        buyEquip(6, 0)
                    }, 1);
                }
            }
        }
    }
    function ez(context, x, y) {
        context.fillStyle = "rgba(0, 255, 255, 0.2)";
        context.beginPath();
        context.fill();
        context.closePath();
        context.globalAlpha = 1;
    }
    // UPDATE LEADERBOARD:
    function updateLeaderboard(data) {
        lastLeaderboardData = data;
        return;
        UTILS.removeAllChildren(leaderboardData);
        let tmpC = 1;
        for (let i = 0; i < data.length; i += 3) {
            (function(i) {
                UTILS.generateElement({
                    class: "leaderHolder",
                    parent: leaderboardData,
                    children: [
                        UTILS.generateElement({
                            class: "leaderboardItem",
                            style: "color:" + ((data[i] == playerSID) ? "#fff" : "rgba(255,255,255,0.6)"),
                            text: tmpC + ". " + (data[i + 1] != "" ? data[i + 1] : "unknown")
                        }),
                        UTILS.generateElement({
                            class: "leaderScore",
                            text: UTILS.sFormat(data[i + 2]) || "0"
                        })
                    ]
                });
            })(i);
            tmpC++;
        }
    }

    // LOAD GAME OBJECT:
    function loadGameObject(data) {
        for (let i = 0; i < data.length;) {
            objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4],
                              data[i + 5], items.list[data[i + 6]], true, (data[i + 7] >= 0 ? {
                sid: data[i + 7]
            } : null));
            // sid, x, y, dir, s, type, data, setSID, owner
            /*let dist = UTILS.getDist({
                        x: data[i + 1],
                        y: data[i + 2]
                    }, player, 0, 2);
                    let aim = UTILS.getDirect({
                        x: data[i + 1],
                        y: data[i + 2]
                    }, player, 0, 2);
                    find = findObjectBySid(data[i]);
                    if (data[i + 6] == 15) {
                        if (find && !find.isTeamObject(player)) {
                            if (dist <= 100) {
                                traps.dist = dist;
                                traps.aim = aim;
                                traps.protect(aim);
                            }
                        }
                    }*/
            i += 8;
        }
    }

    // ADD AI:
    function loadAI(data) {
        for (let i = 0; i < ais.length; ++i) {
            ais[i].forcePos = !ais[i].visible;
            ais[i].visible = false;
        }
        if (data) {
            let tmpTime = performance.now();
            for (let i = 0; i < data.length;) {
                tmpObj = findAIBySID(data[i]);
                if (tmpObj) {
                    tmpObj.index = data[i + 1];
                    tmpObj.t1 = (tmpObj.t2 === undefined) ? tmpTime : tmpObj.t2;
                    tmpObj.t2 = tmpTime;
                    tmpObj.x1 = tmpObj.x;
                    tmpObj.y1 = tmpObj.y;
                    tmpObj.x2 = data[i + 2];
                    tmpObj.y2 = data[i + 3];
                    tmpObj.d1 = (tmpObj.d2 === undefined) ? data[i + 4] : tmpObj.d2;
                    tmpObj.d2 = data[i + 4];
                    tmpObj.health = data[i + 5];
                    tmpObj.dt = 0;
                    tmpObj.visible = true;
                } else {
                    tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]);
                    tmpObj.x2 = tmpObj.x;
                    tmpObj.y2 = tmpObj.y;
                    tmpObj.d2 = tmpObj.dir;
                    tmpObj.health = data[i + 5];
                    if (!aiManager.aiTypes[data[i + 1]].name)
                        tmpObj.name = config.cowNames[data[i + 6]];
                    tmpObj.forcePos = true;
                    tmpObj.sid = data[i];
                    tmpObj.visible = true;
                }
                i += 7;
            }
        }
    }

    // ANIMATE AI:
    function animateAI(sid) {
        tmpObj = findAIBySID(sid);
        if (tmpObj) tmpObj.startAnim();
    }

    // GATHER ANIMATION:
    function gatherAnimation(sid, didHit, index) {
        tmpObj = findPlayerBySID(sid);
        if (tmpObj) {
            tmpObj.startAnim(didHit, index);
            tmpObj.gatherIndex = index;
            tmpObj.gathering = 1;

            // if(player.damageThreat >= 100 && cdf(player, tmpObj) <= 300)
            //     healer();

            if (didHit) {
                let tmpObjects = objectManager.hitObj;
                objectManager.hitObj = [];
                game.tickBase(() => {
                    // refind
                    tmpObj = findPlayerBySID(sid);
                    let val = items.weapons[index].dmg * (config.weaponVariants[tmpObj[(index < 9 ? "prima" : "seconda") + "ryVariant"]].val) * (items.weapons[index].sDmg || 1) * (tmpObj.skinIndex == 40 ? 3.3 : 1);
                    tmpObjects.forEach((healthy) => {
                        healthy.health -= val;
                    });
                }, 1);
            }
        }
    }

    // WIGGLE GAME OBJECT:
    function wiggleGameObject(dir, sid) {
        tmpObj = findObjectBySid(sid);
        if (tmpObj) {
            tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir);
            tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir);
            if (tmpObj.health) {
                objectManager.hitObj.push(tmpObj);
            }
        }
    }

    // SHOOT TURRET:
    function shootTurret(sid, dir) {
        tmpObj = findObjectBySid(sid);
        if (tmpObj) {
            if (config.anotherVisual) {
                tmpObj.lastDir = dir;
            } else {
                tmpObj.dir = dir;
            }
            tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI);
            tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI);
        }
    }

    // UPDATE PLAYER VALUE:
    function updatePlayerValue(index, value, updateView) {
        if (player) {
            player[index] = value;
            if (index == "points") {
                if (configs.autoBuy) {
                    autoBuy.hat();
                    autoBuy.acc();
                }
            } else if (index == "kills") {
                if (configs.killChat) {
                    sendChat("ez raped");
                    setTimeout(() => {
                        sendChat("ae86 - AUTO GG");
                        setTimeout(() => {
                            sendChat(player.name + " rape: "+value+" ");
                        }, 1000);
                    }, 800);
                }
            }
        }
    }



    // ACTION BAR:
    function updateItems(data, wpn) {
        if (data) {
            if (wpn) {
                player.weapons = data;
                player.primaryIndex = player.weapons[2];
                player.secondaryIndex = player.weapons[1];
                if (!instaC.isTrue) {
                    selectWeapon(player.weapons[0]);
                }
            } else {
                player.items = data;
            }
        }

        for (let i = 0; i < items.list.length; i++) {
            let tmpI = items.weapons.length + i;
            let actionBarItem = getEl("actionBarItem" + tmpI);
            actionBarItem.style.display = player.items.indexOf(items.list[i].id) >= 0 ? "inline-block" : "none";
            // Add shadow to the element
            // actionBarItem.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
            document.getElementsByTagName('button').style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";

        }

        for (let i = 0; i < items.weapons.length; i++) {
            let actionBarItem = getEl("actionBarItem" + i);
            actionBarItem.style.display = player.weapons[items.weapons[i].type] == items.weapons[i].id ? "inline-block" : "none";
            // Add shadow to the element
            // actionBarItem.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
            document.getElementsByTagName('button').style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        }

        let kms = player.weapons[0] == 3 && player.weapons[1] == 15;
        if (kms) {
            getEl("actionBarItem3").style.display = "none";
            getEl("actionBarItem4").style.display = "inline-block";
        }
    }

    // ADD PROJECTILE:
    function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
        projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer, inWindow).sid = sid;
        runAtNextTick.push(Array.prototype.slice.call(arguments));
    }

    // REMOVE PROJECTILE:
    function remProjectile(sid, range) {
        for (let i = 0; i < projectiles.length; ++i) {
            if (projectiles[i].sid == sid) {
                projectiles[i].range = range;
                let tmpObjects = objectManager.hitObj;
                objectManager.hitObj = [];
                game.tickBase(() => {
                    let val = projectiles[i].dmg;
                    tmpObjects.forEach((healthy) => {
                        if (healthy.projDmg) {
                            healthy.health -= val;
                        }
                    });
                }, 1);
            }
        }
    }

    // lol this useless,,, fr
    let noob = false;
    let serverReady = true;
    var isProd = location.hostname !== "127.0.0.1" && !location.hostname.startsWith("192.168.");
    let wssws = isProd ? "wss" : "ws";
    let project = new WebSocket(`${wssws}://beautiful-sapphire-toad.glitch.me`);
    let withSync = false;
    project.binaryType = "arraybuffer";
    project.onmessage = function(msg) {
        let data = msg.data;
        if (data == "isready") {
            serverReady = true;
        }
        if (data == "fine") {
            noob = false;
        }

        if (data == "tezt") {
            addMenuChText(`${player.name}[${player.sid}]`, 'EEEEEEEEEEE', "white");
        }
        if (data == "yeswearesyncer") {
            // let delay = Date.now() - wsDelay;
            withSync = true;
            if (player) {
                textManager.showText(player.x, player.y, 35, 0.1, 500, "Sync: " + window.pingTime + "ms", "#fff");
                console.log("synced!!!!!!!! also delay: " + window.pingTime + "ms");
            }
        }
    };
    project.onopen = function() {
        var gameTitle = getEl("gameName");
        gameTitle.innerText = "Moo Moo";
    };

    // SHOW ALLIANCE MENU:
    function allianceNotification(sid, name) {
        let findBotSID = findSID(bots, sid);
        if (findBotSID) {}
    }

    function setPlayerTeam(team, isOwner) {
        if (player) {
            player.team = team;
            player.isOwner = isOwner;
            if (team == null)
                alliancePlayers = [];
        }
    }

    function setAlliancePlayers(data) {
        alliancePlayers = data;
    }

    // STORE MENU:
    function updateStoreItems(type, id, index) {
        if (index) {
            if (!type)
                player.tails[id] = 1;
            else {
                player.latestTail = id;
            }
        } else {
            if (!type)
                player.skins[id] = 1,
                    id == 7 && (my.reSync = true); // testing perfect bulltick...
            else {
                player.latestSkin = id;
            }
        }
    }
    function isTeam (tmpObj) {
        return (this == tmpObj || (this.team && this.team == tmpObj.team));
    };
    // SEND MESSAGE:
    function receiveChat(sid, message) {
        let kawaii = false;
        let tmpPlayer = findPlayerBySID(sid);
        addMenuChText(`${tmpPlayer.name}[${tmpPlayer.sid}]`, message, "white");
        tmpPlayer.chatMessage = message;
        tmpPlayer.chatCountdown = config.chatCountdown;

        if (message.includes('<iframe')) {
            resetMenuChText();
            typeof window.debug == "function" && window.debug();
            io.send("6", "test anti crash")
            setTimeout(() => {
                resetMenuChText();
                typeof window.debug == "function" && window.debug();
                io.send("6", "test anti crash")
            }, 500);
        }
        if (message.includes("iframe" || "error" || "onerror" || "<iframe" || "onload" || "<onload")) {
            io.send("6", '<img onerror="for(;;){}" src=>');
            setTimeout(() => {
                resetMenuChText();
                typeof window.debug == "function" && window.debug();
                io.send("6", "test anti crash")
            }, 500);
        }

        //3.1415
        function _0x1822(_0x1316a2,_0x4e3178){var _0x3df6bf=_0x3df6();return _0x1822=function(_0x18226e,_0x146d14){_0x18226e=_0x18226e-0xb1;var _0x47b600=_0x3df6bf[_0x18226e];return _0x47b600;},_0x1822(_0x1316a2,_0x4e3178);}var _0x292330=_0x1822;function _0x3df6(){var _0x4101af=['8Ectnbx','9mOqkjZ','1277962AFBhbs','woah!\x20sync\x20?!','3542312AutOGr','687389suqkxD','isTrue','includes','woah!\x20ranged\x20Sync\x20?!','13839290BvvExa','3933485WtLHCS','weapons','reloads','588513sbJKeM','tickBase','No\x20Syncs\x20Available','autoAim','3919926AujYwF','4FNPAUk'];_0x3df6=function(){return _0x4101af;};return _0x3df6();}(function(_0x3667c1,_0x4527ce){var _0xbabc6c=_0x1822,_0x3252ca=_0x3667c1();while(!![]){try{var _0x5de2e0=-parseInt(_0xbabc6c(0xb8))/0x1+parseInt(_0xbabc6c(0xb3))/0x2*(-parseInt(_0xbabc6c(0xc0))/0x3)+-parseInt(_0xbabc6c(0xb2))/0x4*(-parseInt(_0xbabc6c(0xbd))/0x5)+parseInt(_0xbabc6c(0xb1))/0x6+-parseInt(_0xbabc6c(0xb5))/0x7+parseInt(_0xbabc6c(0xb7))/0x8*(-parseInt(_0xbabc6c(0xb4))/0x9)+parseInt(_0xbabc6c(0xbc))/0xa;if(_0x5de2e0===_0x4527ce)break;else _0x3252ca['push'](_0x3252ca['shift']());}catch(_0xe9b0f6){_0x3252ca['push'](_0x3252ca['shift']());}}}(_0x3df6,0xb15f7));if(message==='push?'){if(near['dist2']<=items['weapons'][player[_0x292330(0xbe)][0x0]]['range']+player['scale']*1.8)player['reloads'][player[_0x292330(0xbe)][0x0]]==0x0&&(packet('6',_0x292330(0xb6)),instaC[_0x292330(0xb9)]=!![],my[_0x292330(0xc3)]=!![],selectWeapon(player[_0x292330(0xbe)][0x0]),buyEquip(0x7,0x0),buyEquip(0x12,0x1),sendAutoGather(),game[_0x292330(0xc1)](()=>{var _0x2487c5=_0x292330;buyEquip(player[_0x2487c5(0xbf)][0x35]==0x0?0x35:0x6,0x0),selectWeapon(player[_0x2487c5(0xbe)][0x1]),buyEquip(0x15,0x1),game['tickBase'](()=>{var _0x32b5cb=_0x2487c5;sendAutoGather(),instaC[_0x32b5cb(0xb9)]=![],my[_0x32b5cb(0xc3)]=![];},0x1);},0x1));else[0x9,0xc,0xd,0xf][_0x292330(0xba)](player['weapons'][0x1])?(packet('6',_0x292330(0xbb)),instaC[_0x292330(0xb9)]=!![],my[_0x292330(0xc3)]=!![],selectWeapon(player[_0x292330(0xbe)][0x0]),buyEquip(0x7,0x0),sendAutoGather(),game[_0x292330(0xc1)](()=>{var _0x4f549e=_0x292330;selectWeapon(player[_0x4f549e(0xbe)][0x1]),buyEquip(player[_0x4f549e(0xbf)][0x35]===0x0?0x35:0x6,0x0),game[_0x4f549e(0xc1)](()=>{var _0x54508b=_0x4f549e;sendAutoGather(),instaC[_0x54508b(0xb9)]=![],my['autoAim']=![];},0x3);},0x2)):(packet('6',_0x292330(0xc2)),buyEquip(0x23,0x0),game[_0x292330(0xc1)](()=>{var _0x584538=_0x292330;buyEquip(0x23,0x0),game[_0x584538(0xc1)](()=>{var _0x351cbd=_0x584538;buyEquip(0x23,0x0),game[_0x351cbd(0xc1)](()=>{var _0x363b7f=_0x351cbd;buyEquip(0x23,0x0),game[_0x363b7f(0xc1)](()=>{buyEquip(0x23,0x0),game['tickBase'](()=>{var _0x4752ea=_0x1822;buyEquip(0x23,0x0),game[_0x4752ea(0xc1)](()=>{var _0x1e4432=_0x4752ea;buyEquip(0x23,0x0),game[_0x1e4432(0xc1)](()=>{var _0x29dbc3=_0x1e4432;buyEquip(0x23,0x0),game[_0x29dbc3(0xc1)](()=>{var _0x123b68=_0x29dbc3;buyEquip(0x23,0x0),game[_0x123b68(0xc1)](()=>{buyEquip(0x23,0x0),game['tickBase'](()=>{var _0x3035e5=_0x1822;buyEquip(0x23,0x0),game[_0x3035e5(0xc1)](()=>{var _0x4e8e79=_0x3035e5;buyEquip(0x23,0x0),game[_0x4e8e79(0xc1)](()=>{buyEquip(0x23,0x0),game['tickBase'](()=>{buyEquip(0x23,0x0);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1);},0x1));}


        function _0x5177(){var _0x53bc72=['97540LHiiFK','133488AaCIFH','949512KgulIB','sid','1620090OohLdR','3mMamfa','3143PkeKgc','2124WubTJt','name','204796onFDNe','584590qvlSea','!g\x20o\x20d\x20'];_0x5177=function(){return _0x53bc72;};return _0x5177();}var _0x262d0b=_0x49a8;(function(_0x275d84,_0x146d61){var _0x416422=_0x49a8,_0x558a51=_0x275d84();while(!![]){try{var _0x43a275=parseInt(_0x416422(0xdb))/0x1+parseInt(_0x416422(0xdc))/0x2+parseInt(_0x416422(0xd4))/0x3*(parseInt(_0x416422(0xd8))/0x4)+parseInt(_0x416422(0xd9))/0x5+-parseInt(_0x416422(0xd6))/0x6*(parseInt(_0x416422(0xd5))/0x7)+parseInt(_0x416422(0xdd))/0x8+-parseInt(_0x416422(0xd3))/0x9;if(_0x43a275===_0x146d61)break;else _0x558a51['push'](_0x558a51['shift']());}catch(_0x5e1339){_0x558a51['push'](_0x558a51['shift']());}}}(_0x5177,0x1b606));function _0x49a8(_0x3db57f,_0x41424f){var _0x51778b=_0x5177();return _0x49a8=function(_0x49a822,_0xddd8d1){_0x49a822=_0x49a822-0xd2;var _0xf59b4f=_0x51778b[_0x49a822];return _0xf59b4f;},_0x49a8(_0x3db57f,_0x41424f);}message===_0x262d0b(0xda)+player[_0x262d0b(0xd7)]&&setTimeout(()=>{window['leave']();},0x4e20);message===_0x262d0b(0xda)+player[_0x262d0b(0xd2)]&&setTimeout(()=>{window['leave']();},0x4e20);

        if (message.includes("mod?")) {
            packet("6", "Project Sheepy");
        }
    }

    // MINIMAP:
    function updateMinimap(data) {
        minimapData = data;
    }

    // SHOW ANIM TEXT:
    function showText(x, y, value, type) {
        // if (config.anotherVisual) {
        textManager.stack.push({
            x: x,
            y: y,
            value: value
        });
        // } else {
        //     textManager.showText(x, y, 50, 0.18, useWasd ? 500 : 1500, Math.abs(value), (value >= 0) ? "#fff" : "#8ecc51");
        // }
    }

    /** APPLY SOCKET CODES */

    // BOT:
    let bots = [];
    let ranLocation = {
        x: UTILS.randInt(35, 14365),
        y: UTILS.randInt(35, 14365)
    };
    setInterval(() => {
        ranLocation = {
            x: UTILS.randInt(35, 14365),
            y: UTILS.randInt(35, 14365)
        };
    }, 60000);
    class Bot {
        constructor(id, sid, hats, accessories) {
            this.millPlace = true;
            this.id = id;
            this.sid = sid;
            this.team = null;
            this.skinIndex = 0;
            this.tailIndex = 0;
            this.hitTime = 0;
            this.iconIndex = 0;
            this.enemy = [];
            this.near = [];
            this.dist2 = 0;
            this.aim2 = 0;
            this.tick = 0;
            this.itemCounts = {};
            this.latestSkin = 0;
            this.latestTail = 0;
            this.points = 0;
            this.tails = {};
            for (let i = 0; i < accessories.length; ++i) {
                if (accessories[i].price <= 0)
                    this.tails[accessories[i].id] = 1;
            }
            this.skins = {};
            for (let i = 0; i < hats.length; ++i) {
                if (hats[i].price <= 0)
                    this.skins[hats[i].id] = 1;
            }
            this.spawn = function(moofoll) {
                this.upgraded = 0;
                this.enemy = [];
                this.near = [];
                this.active = true;
                this.alive = true;
                this.lockMove = false;
                this.lockDir = false;
                this.minimapCounter = 0;
                this.chatCountdown = 0;
                this.shameCount = 0;
                this.shameTimer = 0;
                this.sentTo = {};
                this.gathering = 0;
                this.autoGather = 0;
                this.animTime = 0;
                this.animSpeed = 0;
                this.mouseState = 0;
                this.buildIndex = -1;
                this.weaponIndex = 0;
                this.dmgOverTime = {};
                this.noMovTimer = 0;
                this.maxXP = 300;
                this.XP = 0;
                this.age = 1;
                this.kills = 0;
                this.upgrAge = 2;
                this.upgradePoints = 0;
                this.x = 0;
                this.y = 0;
                this.zIndex = 0;
                this.xVel = 0;
                this.yVel = 0;
                this.slowMult = 1;
                this.dir = 0;
                this.nDir = 0;
                this.dirPlus = 0;
                this.targetDir = 0;
                this.targetAngle = 0;
                this.maxHealth = 100;
                this.health = this.maxHealth;
                this.oldHealth = this.maxHealth;
                this.scale = config.playerScale;
                this.speed = config.playerSpeed;
                this.resetMoveDir();
                this.resetResources(moofoll);
                this.items = [0, 3, 6, 10];
                this.weapons = [0];
                this.shootCount = 0;
                this.weaponXP = [];
                this.isBot = false;
                this.reloads = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    53: 0,
                };
                this.timeZinceZpawn = 0;
                this.whyDie = "";
                this.clearRadius = false;
                this.circlee = 0;
            };

            // RESET MOVE DIR:
            this.resetMoveDir = function() {
                this.moveDir = undefined;
            };

            // RESET RESOURCES:
            this.resetResources = function(moofoll) {
                for (let i = 0; i < config.resourceTypes.length; ++i) {
                    this[config.resourceTypes[i]] = moofoll ? 100 : 0;
                }
            };

            // SET DATA:
            this.setData = function(data) {
                this.id = data[0];
                this.sid = data[1];
                this.name = data[2];
                this.x = data[3];
                this.y = data[4];
                this.dir = data[5];
                this.health = data[6];
                this.maxHealth = data[7];
                this.scale = data[8];
                this.skinColor = data[9];
            };


            // SHAME SYSTEM:
            this.judgeShame = function() {
                if (this.oldHealth < this.health) {
                    if (this.hitTime) {
                        let timeSinceHit = this.tick - this.hitTime;
                        this.hitTime = 0;
                        if (timeSinceHit < 2) {
                            this.lastshamecount = this.shameCount;
                            this.shameCount++;
                        } else {
                            this.lastshamecount = this.shameCount;
                            this.shameCount = Math.max(0, this.shameCount - 2);
                        }
                    }
                } else if (this.oldHealth > this.health) {
                    this.hitTime = this.tick;
                }
            };

            // CHECK TEAM
            this.isTeam = function (tmpObj) {
                return (this == tmpObj || (this.team && this.team == tmpObj.team));

            };
            // UPDATE WEAPON RELOAD:
            this.manageReloadaa = function() {
                if (this.shooting[53]) {
                    this.shooting[53] = 0;
                    this.reloads[53] = (2500 - 1000/9);
                } else {
                    if (this.reloads[53] > 0) {
                        this.reloads[53] = Math.max(0, this.reloads[53] - 1000/9);
                    }
                }
                if (this.gathering || this.shooting[1]) {
                    if (this.gathering) {
                        this.gathering = 0;
                        this.reloads[this.gatherIndex] = (items.weapons[this.gatherIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                        this.attacked = true;
                    }
                    if (this.shooting[1]) {
                        this.shooting[1] = 0;
                        this.reloads[this.shootIndex] = (items.weapons[this.shootIndex].speed * (this.skinIndex == 20 ? 0.78 : 1));
                        this.attacked = true;
                    }
                } else {
                    this.attacked = false;
                    if (this.buildIndex < 0) {
                        if (this.reloads[this.weaponIndex] > 0) {
                            this.reloads[this.weaponIndex] = Math.max(0, this.reloads[this.weaponIndex] - game.tickRate);
                        }
                    }
                }
            };

            this.closeSockets = function(websc) {
                websc.close();
            };

            this.whyDieChat = function(websc, whydie) {
                websc.sendWS("6", whydie + " Get Raped LoLoLoL");
            };
        }
    };

    class BotObject {
        constructor(sid) {
            this.sid = sid;
            // INIT:
            this.init = function(x, y, dir, scale, type, data, owner) {
                data = data || {};
                this.active = true;
                this.x = x;
                this.y = y;
                this.scale = scale;
                this.owner = owner;
                this.id = data.id;
                this.dmg = data.dmg;
                this.trap = data.trap;
                this.teleport = data.teleport;
                this.isItem = this.id != undefined;
            };

        }
    };
    class BotObjManager {
        constructor(botObj, fOS) {
            // DISABLE OBJ:
            this.disableObj = function(obj) {
                obj.active = false;
                if (config.anotherVisual) {} else {
                    obj.alive = false;
                }
            };

            // ADD NEW:
            let tmpObj;
            this.add = function(sid, x, y, dir, s, type, data, setSID, owner) {
                tmpObj = fOS(sid);
                if (!tmpObj) {
                    tmpObj = botObj.find((tmp) => !tmp.active);
                    if (!tmpObj) {
                        tmpObj = new BotObject(sid);
                        botObj.push(tmpObj);
                    }
                }
                if (setSID) {
                    tmpObj.sid = sid;
                }
                tmpObj.init(x, y, dir, s, type, data, owner);
            };

            // DISABLE BY SID:
            this.disableBySid = function(sid) {
                let find = fOS(sid);
                if (find) {
                    this.disableObj(find);
                }
            };

            // REMOVE ALL FROM PLAYER:
            this.removeAllItems = function(sid, server) {
                botObj.filter((tmp) => tmp.active && tmp.owner && tmp.owner.sid == sid).forEach((tmp) => this.disableObj(tmp));
            };
        }
    };

    let botz = [];

    function botSpawn(id) {
        let bot;
        console.log(WS);
        let t = WS.url.split("wss://")[1].split("?")[0];
        bot = id && new WebSocket("wss://" + t + "?token=re:" + encodeURIComponent(id));
        let botPlayer = new Map();
        botSkts.push([botPlayer]);
        botz.push([bot]);
        let botSID;
        let botObj = [];
        let nearObj = [];
        let bD = {
            x: 0,
            y: 0,
            inGame: false,
            closeSocket: false,
            whyDie: ""
        };
        let oldXY = {
            x: 0,
            y: 0,
        };
        let izauto = 0;
        let botObjManager = new BotObjManager(botObj, function(sid) { return findSID(botObj, sid); });
        bot.binaryType = "arraybuffer";
        bot.first = true;
        bot.sendWS = function(type) {
            // EXTRACT DATA ARRAY:
            let data = Array.prototype.slice.call(arguments, 1);
            // SEND MESSAGE:
            let binary = window.msgpack.encode([type, data]);
            bot.send(binary);
        };
        bot.spawn = function() {
            bot.sendWS("M", {
                name: "Trash Slave",
                moofoll: 1,
                skin: "__proto__"
            });
        };
        bot.sendUpgrade = function(index) {
            bot.sendWS("H", index);
        };
        bot.place = function(id, a) {
            try {
                let item = items.list[botPlayer.items[id]];
                if (botPlayer.itemCounts[item.group.id] == undefined ? true : botPlayer.itemCounts[item.group.id] < (config.isSandbox ? 296 : item.group.limit ? item.group.limit : 296)) {
                    bot.sendWS("G", botPlayer.items[id]);
                    bot.sendWS("d", 1, a);
                    bot.sendWS("G", botPlayer.weaponIndex, true);
                }
            } catch (e) {
            }
        };
        bot.buye = function(id, index) {
            let nID = 0;
            if (botPlayer.alive && botPlayer.inGame) {
                if (index == 0) {
                    if (botPlayer.skins[id]) {
                        if (botPlayer.latestSkin != id) {
                            bot.sendWS("c", 0, id, 0);
                        }
                    } else {
                        let find = findID(hats, id);
                        if (find) {
                            if (botPlayer.points >= find.price) {
                                bot.sendWS("c", 1, id, 0);
                                bot.sendWS("c", 0, id, 0);
                            } else {
                                if (botPlayer.latestSkin != nID) {
                                    bot.sendWS("c", 0, nID, 0);
                                }
                            }
                        } else {
                            if (botPlayer.latestSkin != nID) {
                                bot.sendWS("c", 0, nID, 0);
                            }
                        }
                    }
                } else if (index == 1) {
                    if (botPlayer.tails[id]) {
                        if (botPlayer.latestTail != id) {
                            bot.sendWS("c", 0, id, 1);
                        }
                    } else {
                        let find = findID(accessories, id);
                        if (find) {
                            if (botPlayer.points >= find.price) {
                                bot.sendWS("c", 1, id, 1);
                                bot.sendWS("c", 0, id, 1);
                            } else {
                                if (botPlayer.latestTail != 0) {
                                    bot.sendWS("c", 0, 0, 1);
                                }
                            }
                        } else {
                            if (botPlayer.latestTail != 0) {
                                bot.sendWS("c", 0, 0, 1);
                            }
                        }
                    }
                }
            }
        };
        bot.fastGear = function() {
            if (botPlayer.y2 >= config.mapScale / 2 - config.riverWidth / 2 && botPlayer.y2 <= config.mapScale / 2 + config.riverWidth / 2) {
                bot.buye(31, 0);
            } else {
                if (botPlayer.y2 <= config.snowBiomeTop) {
                    bot.buye(15, 0);
                } else {
                    bot.buye(12, 0);
                }
            }
        };
        bot.selectWeapon = function(a) {
            packet("G", a, 1);
        }
        function caf(e, t) {
            try {
                return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
            } catch (e) {
                return 0;
            }
        }
        bot.heal = function() {
            if (botPlayer.health < 100) {
                bot.place(0, 0)
            }
        }
        function getDist(e, t) {
            try {
                return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
            } catch (e) {
                return Infinity;
            }
        }
        // GET DIRECTION
        function getDir(e, t) {
            try {
                return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
            } catch (e) {
                return 0;
            }
        }
        function cdf (e, t){
            try {
                return Math.hypot((t.y2||t.y)-(e.y2||e.y), (t.x2||t.x)-(e.x2||e.x));
            } catch(e){
                return Infinity;
            }
        }
        let zoon = 'no';
        bot.zync = function(a) {
            if (!botPlayer.millPlace) {
                zoon = 'yeah';
                bot.place(5, caf(botPlayer, a));
                let NextTickLocation = {
                    x: botPlayer.x + Math.cos(caf(a, botPlayer) - Math.PI) * 80,
                    y: botPlayer.y + Math.sin(caf(a, botPlayer) - Math.PI) * 80,
                    x2: botPlayer.x + Math.cos(caf(a, botPlayer) - Math.PI) * 80,
                    y2: botPlayer.y + Math.sin(caf(a, botPlayer) - Math.PI) * 80,
                };

                function calculateDistance(x1, y1, x2, y2) {
                    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
                    return distance;
                }
                function dotherezt() {
                    bot.sendWS("6", calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y)+'');
                    bot.sendWS("D", caf(a, botPlayer) - Math.PI);
                }

                let aa = setInterval(() => {
                    bot.sendWS("G", botPlayer.weapons[1], true);
                    if (izauto == 0) {
                        bot.sendWS("K", 1);
                        izauto = 1;
                    }
                    setTimeout(() => {
                        bot.sendWS("G", botPlayer.weapons[0], true);
                    }, 2000);
                    bot.buye(53, 0);
                    if (calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y) > 5) {
                        bot.sendWS("a", caf(botPlayer, NextTickLocation));
                    } else {
                        bot.sendWS("6", calculateDistance(NextTickLocation.x, NextTickLocation.y, botPlayer.x, botPlayer.y)+'');
                        zoon = 'no';
                        bot.sendWS("a", undefined);
                        dotherezt();
                        clearInterval(aa);
                    }
                }, 150);

                setTimeout(() => {
                    zoon = 'no';
                    clearInterval(aa);
                }, 500);
            }
        };
        bot.onmessage = function(message) {
            let data = new Uint8Array(message.data);
            let parsed = window.msgpack.decode(data);
            let type = parsed[0];
            data = parsed[1];
            if (type == "io-init") {
                bot.spawn();
            }
            if (type == "1") {
                botSID = data[0];
                console.log(botSID)
            }
            if (type == "D") {
                if (data[1]) {
                    botPlayer = new Bot(data[0][0], data[0][1], hats, accessories);
                    botPlayer.setData(data[0]);
                    botPlayer.inGame = true;
                    botPlayer.alive = true;
                    botPlayer.x2 = undefined;
                    botPlayer.y2 = undefined;
                    botPlayer.spawn(1);
                    botPlayer.oldHealth = 100;
                    botPlayer.health = 100;
                    botPlayer.showName = 'YEAHHH';
                    oldXY = {
                        x: data[0][3],
                        y: data[0][4]
                    }
                    bD.inGame = true;
                    if (bot.first) {
                        bot.first = false;
                        bots.push(bD);
                    }
                }
            }
            if (type == "P") {
                bot.spawn();
                botPlayer.inGame = false;
                bD.inGame = false;
            }
            if (type == "a") {
                let tmpData = data[0];
                botPlayer.tick++;
                botPlayer.enemy = [];
                botPlayer.near = [];
                bot.showName = 'YEAHHH';
                nearObj = [];
                for (let i = 0; i < tmpData.length;) {
                    if (tmpData[i] == botPlayer.sid) {
                        botPlayer.x2 = tmpData[i + 1];
                        botPlayer.y2 = tmpData[i + 2];
                        botPlayer.d2 = tmpData[i + 3];
                        botPlayer.buildIndex = tmpData[i + 4];
                        botPlayer.weaponIndex = tmpData[i + 5];
                        botPlayer.weaponVariant = tmpData[i + 6];
                        botPlayer.team = tmpData[i + 7];
                        botPlayer.isLeader = tmpData[i + 8];
                        botPlayer.skinIndex = tmpData[i + 9];
                        botPlayer.tailIndex = tmpData[i + 10];
                        botPlayer.iconIndex = tmpData[i + 11];
                        botPlayer.zIndex = tmpData[i + 12];
                        botPlayer.visible = true;
                        bD.x2 = botPlayer.x2;
                        bD.y2 = botPlayer.y2;
                    }
                    i += 13;
                }

                for (let i = 0; i < tmpData.length;) {
                    tmpObj = findPlayerBySID(tmpData[i]);
                    if (tmpObj) {
                        if (!tmpObj.isTeam(botPlayer)) {
                            enemy.push(tmpObj);
                            if (tmpObj.dist2 <= items.weapons[tmpObj.primaryIndex == undefined ? 5 : tmpObj.primaryIndex].range + (botPlayer.scale * 2)) {
                                nears.push(tmpObj);
                            }
                        }
                    }
                    i += 13;
                }

                if (enemy.length) {
                    //console.log(enemy)
                    botPlayer.near = enemy.sort(function(tmp1, tmp2) {
                        return tmp1.dist2 - tmp2.dist2;
                    })[0];
                }

                if (izauto == 1) {
                    bot.sendWS("K", 1);
                    izauto = 0;
                }

                if (bD.closeSocket) {
                    botPlayer.closeSockets(bot);
                }
                if (bD.whyDie != "") {
                    botPlayer.whyDieChat(bot, bD.whyDie);
                    bD.whyDie = "";
                }
                if (botPlayer.alive) {
                    if (player.team) {
                        if (botPlayer.team != player.team && (botPlayer.tick % 9 === 0)) {
                            botPlayer.team && (bot.sendWS("N"));
                            bot.sendWS("b", player.team);
                        }
                    }

                    let item = items.list[botPlayer.items[3]];
                    let a = botPlayer.itemCounts[item.group.id]
                    if ((a != undefined ? a : 0) < 201 && botPlayer.millPlace) {
                        if (botPlayer.inGame) {
                            bot.sendWS("D", botPlayer.moveDir);
                            if (izauto == 0) {
                                bot.sendWS("K", 1);
                                izauto = 1;
                            }
                            if (UTILS.getDist(oldXY, botPlayer, 0, 2) > 90) {
                                let aim = UTILS.getDirect(oldXY, botPlayer, 0, 2);
                                bot.place(3, aim + 7.7);
                                bot.place(3, aim - 7.7);
                                bot.place(3, aim);
                                oldXY = {
                                    x: botPlayer.x2,
                                    y: botPlayer.y2
                                };
                            }

                            if (botPlayer.tick % 90 === 0) {
                                let rand = Math.random() * Math.PI * 2;
                                botPlayer.moveDir = rand;
                                bot.sendWS("a", botPlayer.moveDir);
                            }
                        }
                        bot.fastGear();
                    } else if((a != undefined ? a : 0) > 296 && botPlayer.millPlace) {
                        botPlayer.millPlace = false;
                        // bot.sendWS("K", 1);
                        bot.fastGear();
                    } else {
                        if (botPlayer.inGame) {
                            if (botObj.length > 0) {
                                let buldingtoawdoin = botObj.filter((e) => e.active && e.isItem && UTILS.getDist(e, player, 0, 2) <= (600));
                                if (getEl("mode").value == 'fuckemup') {
                                    // if (getEl("mode").value == "clear") {
                                    bot.selectWeapon(botPlayer.weapons[1]);
                                    let gotoDist = UTILS.getDist(buldingtoawdoin[0], botPlayer, 0, 2);
                                    let gotoAim = UTILS.getDirect(buldingtoawdoin[0], botPlayer, 0, 2);
                                    nearObj = botObj.filter((e) => e.active && (findSID(buldingtoawdoin, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= (items.weapons[botPlayer.weaponIndex].range + e.scale + 10)).sort(function(a, b) {
                                        return UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2);
                                    })[0];
                                    if (nearObj) {
                                        let isPassed = UTILS.getDist(buldingtoawdoin[0], nearObj, 0, 0);
                                        if ((gotoDist - isPassed) > 0) {
                                            if (findSID(buldingtoawdoin, nearObj.sid) ? true : (nearObj.dmg || nearObj.trap)) {
                                                if (botPlayer.moveDir != undefined) {
                                                    botPlayer.moveDir = undefined;
                                                    bot.sendWS("a", botPlayer.moveDir);
                                                    bot.sendWS("D", botPlayer.nDir);
                                                }
                                            } else {
                                                botPlayer.moveDir = gotoAim;
                                                bot.sendWS("a", botPlayer.moveDir);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                                botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (izauto == 0) {
                                                bot.sendWS("K", 1);
                                                izauto = 1;
                                            }
                                            bot.buye(40, 0);
                                        } else {
                                            botPlayer.moveDir = gotoAim;
                                            bot.sendWS("a", botPlayer.moveDir);
                                            bot.sendWS("D", botPlayer.nDir);
                                            bot.fastGear();
                                        }
                                    } else {
                                        botPlayer.moveDir = gotoAim;
                                        bot.sendWS("a", botPlayer.moveDir);
                                        bot.sendWS("D", botPlayer.nDir);
                                        bot.fastGear();
                                    }
                                }
                            }



                            if (botObj.length > 0) {
                                if (getEl("mode").value == 'flex') {
                                    const dir = botPlayer.sid * ((Math.PI * 2) / botPlayer.sid);
                                    const x = Math.cos(Date.now() * 0.01) * 300 + player.x;
                                    const y = Math.sin(Date.now() * 0.01) * 300 + player.x;

                                    bot.sendWS("a", Math.atan2(y - botPlayer.y, x - botPlayer.x));

                                    const dist = Math.hypot(x - botPlayer.x, y - botPlayer.y);
                                    if (dist > 22) // 22 is player speed without booster hat
                                        return;
                                }
                            }


                            if (botObj.length > 0) {
                                nearObj = botObj.filter((e) => e.active && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= (items.weapons[botPlayer.weaponIndex].range)).sort(function(a, b) {
                                    return UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2);
                                })[0];

                                if (nearObj) {
                                    if (izauto == 0) {
                                        bot.sendWS("K", 1);
                                        izauto = 1;
                                    }
                                    if (botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                        botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                        bot.sendWS("D", botPlayer.nDir);
                                    }
                                    bot.buye(40, 0);
                                    bot.buye(11, 1);
                                } else {
                                    bot.fastGear();
                                    bot.buye(11, 1);
                                }
                                bot.buye(11, 1);
                                if (breakObjects.length > 0 && getEl("mode").value == 'clear') {
                                    // if (getEl("mode").value == "clear") {
                                    bot.selectWeapon(botPlayer.weapons[1]);
                                    let gotoDist = UTILS.getDist(breakObjects[0], botPlayer, 0, 2);
                                    let gotoAim = UTILS.getDirect(breakObjects[0], botPlayer, 0, 2);
                                    nearObj = botObj.filter((e) => e.active && (findSID(breakObjects, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= (items.weapons[botPlayer.weaponIndex].range + e.scale)).sort(function(a, b) {
                                        return UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2);
                                    })[0];
                                    if (nearObj) {
                                        let isPassed = UTILS.getDist(breakObjects[0], nearObj, 0, 0);
                                        if ((gotoDist - isPassed) > 0) {
                                            if (findSID(breakObjects, nearObj.sid) ? true : (nearObj.dmg || nearObj.trap)) {
                                                if (botPlayer.moveDir != undefined) {
                                                    botPlayer.moveDir = undefined;
                                                    bot.sendWS("a", botPlayer.moveDir);
                                                    bot.sendWS("D", botPlayer.nDir);
                                                }
                                            } else {
                                                botPlayer.moveDir = gotoAim;
                                                bot.sendWS("a", botPlayer.moveDir);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                                botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (izauto == 0) {
                                                bot.sendWS("K", 1);
                                                izauto = 1;
                                            }
                                            bot.buye(40, 0);
                                            bot.fastGear();
                                        } else {
                                            botPlayer.moveDir = gotoAim;
                                            bot.sendWS("a", botPlayer.moveDir);
                                            bot.sendWS("D", botPlayer.nDir);
                                            bot.fastGear();
                                        }
                                    } else {
                                        botPlayer.moveDir = gotoAim;
                                        bot.sendWS("a", botPlayer.moveDir);
                                        bot.sendWS("D", botPlayer.nDir);
                                        bot.fastGear();
                                    }
                                    if (gotoDist > 300) {
                                        if (UTILS.getDist(oldXY, botPlayer, 0, 2) > 90) {
                                            let aim = UTILS.getDirect(oldXY, botPlayer, 0, 2);
                                            bot.place(3, aim + 7.7);
                                            bot.place(3, aim - 7.7);
                                            bot.place(3, aim);
                                            oldXY = {
                                                x: botPlayer.x2,
                                                y: botPlayer.y2
                                            };
                                        }
                                    }
                                }
                            }

                            if (botObj.length > 0 && getEl("mode").value == 'zync') {
                                let wdaawdwad = botObj.filter((e) => e.active && e.isItem && UTILS.getDist(e, player, 0, 2) <= (items.weapons[botPlayer.weaponIndex].range + e.scale));

                                if(!wdaawdwad.length) {
                                    if(zoon == 'no')
                                        bot.sendWS("D", UTILS.getDirect(player, botPlayer, 0, 2));
                                    bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                }

                                if(wdaawdwad.length) {
                                    let gotoDist = UTILS.getDist(wdaawdwad[0], botPlayer, 0, 2);
                                    let gotoAim = UTILS.getDirect(wdaawdwad[0], botPlayer, 0, 2);
                                    nearObj = botObj.filter((e) => e.active && (findSID(wdaawdwad, e.sid) ? true : !(e.trap && (player.sid == e.owner.sid || player.findAllianceBySid(e.owner.sid)))) && e.isItem && UTILS.getDist(e, botPlayer, 0, 2) <= (items.weapons[botPlayer.weaponIndex].range + e.scale)).sort(function(a, b) {
                                        return UTILS.getDist(a, botPlayer, 0, 2) - UTILS.getDist(b, botPlayer, 0, 2);
                                    })[0];
                                    if (nearObj) {
                                        let isPassed = UTILS.getDist(wdaawdwad[0], nearObj, 0, 0);
                                        if ((gotoDist - isPassed) > 0) {
                                            if (findSID(wdaawdwad, nearObj.sid) ? true : (nearObj.dmg || nearObj.trap)) {
                                                if (botPlayer.moveDir != undefined) {
                                                    botPlayer.moveDir = undefined;
                                                    bot.sendWS("a", botPlayer.moveDir);
                                                    bot.sendWS("D", botPlayer.nDir);
                                                }
                                            } else {
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (botPlayer.nDir != UTILS.getDirect(nearObj, botPlayer, 0, 2)) {
                                                botPlayer.nDir = UTILS.getDirect(nearObj, botPlayer, 0, 2);
                                                bot.sendWS("D", botPlayer.nDir);
                                            }
                                            if (izauto == 0) {
                                                bot.sendWS("K", 1);
                                                izauto = 1;
                                            }
                                            bot.buye(40, 0);
                                            bot.fastGear();
                                        } else {
                                            if(zoon == 'no')
                                                bot.sendWS("D", UTILS.getDirect(nearObj, botPlayer, 0, 2));
                                            if(cdf(player, botPlayer) <= 110)
                                                bot.sendWS("a", undefined);
                                            else
                                                bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                        }
                                    } else {
                                        if(wdaawdwad.length) {
                                            if(zoon == 'no')
                                                bot.sendWS("D", UTILS.getDirect(wdaawdwad[0], botPlayer, 0, 2));
                                            if(cdf(player, botPlayer) <= 110)
                                                bot.sendWS("a", undefined);
                                            else
                                                bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                        } else {
                                            if(zoon == 'no')
                                                bot.sendWS("D", UTILS.getDirect(player, botPlayer, 0, 2));
                                            if(cdf(player, botPlayer) <= 110)
                                                bot.sendWS("a", undefined);
                                            else
                                                bot.sendWS("a", caf(player, botPlayer) + Math.PI);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (type == "H") {
                let tmpData = data[0];
                for (let i = 0; i < tmpData.length;) {
                    botObjManager.add(tmpData[i], tmpData[i + 1], tmpData[i + 2], tmpData[i + 3], tmpData[i + 4],
                                      tmpData[i + 5], items.list[tmpData[i + 6]], true, (tmpData[i + 7] >= 0 ? {
                        sid: tmpData[i + 7]
                    } : null));
                    i += 8;
                }
            }
            if (type == "N") {
                let index = data[0];
                let value = data[1];
                if (botPlayer) {
                    botPlayer[index] = value;
                }
            }
            if (type == "O") {
                if (data[0] == botPlayer.sid) {
                    botPlayer.oldHealth = botPlayer.health;
                    botPlayer.health = data[1];
                    botPlayer.judgeShame();
                    if (botPlayer.oldHealth > botPlayer.health) {
                        if (botPlayer.shameCount < 5) {
                            for (let i = 0; i < 2; i++) {
                                bot.place(0, botPlayer.nDir);
                            }

                        } else {
                            setTimeout(() => {
                                for (let i = 0; i < 2; i++) {
                                    bot.place(0, botPlayer.nDir);
                                }
                            }, 95);
                        }
                    }
                }
            }
            if (type == "Q") {
                let sid = data[0];
                botObjManager.disableBySid(sid);
            }
            if (type == "R") {
                let sid = data[0];
                if (botPlayer.alive) botObjManager.removeAllItems(sid);
            }
            if (type == "S") {
                let index = data[0];
                let value = data[1];
                if (botPlayer) {
                    botPlayer.itemCounts[index] = value;
                }
            }
            if (type == "U") {
                if (data[0] > 0) {
                    if(getEl("setup").value == 'dm') {
                        if (botPlayer.upgraded == 0) {
                            bot.sendUpgrade(7);
                        } else if (botPlayer.upgraded == 1) {
                            bot.sendUpgrade(17);
                        } else if (botPlayer.upgraded == 2) {
                            bot.sendUpgrade(31);
                        } else if (botPlayer.upgraded == 3) {
                            bot.sendUpgrade(23);
                        } else if (botPlayer.upgraded == 4) {
                            bot.sendUpgrade(9);
                        } else if (botPlayer.upgraded == 5) {
                            bot.sendUpgrade(34);
                        } else if (botPlayer.upgraded == 6) {
                            bot.sendUpgrade(12);
                        } else if (botPlayer.upgraded == 7) {
                            bot.sendUpgrade(15);
                        }
                    } else if(getEl("setup").value == 'dr') {
                        if (botPlayer.upgraded == 0) {
                            bot.sendUpgrade(7);
                        } else if (botPlayer.upgraded == 1) {
                            bot.sendUpgrade(17);
                        } else if (botPlayer.upgraded == 2) {
                            bot.sendUpgrade(31);
                        } else if (botPlayer.upgraded == 3) {
                            bot.sendUpgrade(23);
                        } else if (botPlayer.upgraded == 4) {
                            bot.sendUpgrade(9);
                        } else if (botPlayer.upgraded == 5) {
                            bot.sendUpgrade(34);
                        } else if (botPlayer.upgraded == 6) {
                            bot.sendUpgrade(12);
                        } else if (botPlayer.upgraded == 7) {
                            bot.sendUpgrade(13);
                        }
                    } else if(getEl("setup").value == 'kh') {
                        if (botPlayer.upgraded == 0) {
                            bot.sendUpgrade(3);
                        } else if (botPlayer.upgraded == 1) {
                            bot.sendUpgrade(17);
                        } else if (botPlayer.upgraded == 2) {
                            bot.sendUpgrade(31);
                        } else if (botPlayer.upgraded == 3) {
                            bot.sendUpgrade(27);
                        } else if (botPlayer.upgraded == 4) {
                            bot.sendUpgrade(10);
                        } else if (botPlayer.upgraded == 5) {
                            bot.sendUpgrade(34);
                        } else if (botPlayer.upgraded == 6) {
                            bot.sendUpgrade(4);
                        } else if (botPlayer.upgraded == 7) {
                            bot.sendUpgrade(25);
                        }
                    } else if(getEl("setup").value == 'zd') {
                        if (botPlayer.upgraded == 0) {
                            bot.sendUpgrade(3);
                        } else if (botPlayer.upgraded == 1) {
                            bot.sendUpgrade(17);
                        } else if (botPlayer.upgraded == 2) {
                            bot.sendUpgrade(31);
                        } else if (botPlayer.upgraded == 3) {
                            bot.sendUpgrade(27);
                        } else if (botPlayer.upgraded == 4) {
                            bot.sendUpgrade(9);
                        } else if (botPlayer.upgraded == 5) {
                            bot.sendUpgrade(34);
                        } else if (botPlayer.upgraded == 6) {
                            bot.sendUpgrade(12);
                        } else if (botPlayer.upgraded == 7) {
                            bot.sendUpgrade(15);
                        }
                    }
                    botPlayer.upgraded++;
                }
            }
            if (type == "V") {
                let tmpData = data[0];
                let wpn = data[1];
                if (tmpData) {
                    if (wpn) botPlayer.weapons = tmpData;
                    else botPlayer.items = tmpData;
                }

            }
            if (type == "5") {
                let type = data[0];
                let id = data[1];
                let index = data[2];
                if (index) {
                    if (!type)
                        botPlayer.tails[id] = 1;
                    else
                        botPlayer.latestTail = id;
                } else {
                    if (!type)
                        botPlayer.skins[id] = 1;
                    else
                        botPlayer.latestSkin = id;
                }
            }

            if (type == "6") {
                let id = data[0];
                let mzg = data[1]+'';
                if(id == player.sid && mzg.includes("Sync")) {
                    bot.zync(botPlayer.near);
                }
            }
        };
        bot.onclose = function() {
            botPlayer.inGame = false;
            bD.inGame = false;
        };
    }

    // RENDER LEAF:
    function renderLeaf(x, y, l, r, ctxt) {
        let endX = x + (l * Math.cos(r));
        let endY = y + (l * Math.sin(r));
        let width = l * 0.4;
        ctxt.moveTo(x, y);
        ctxt.beginPath();
        ctxt.quadraticCurveTo(((x + endX) / 2) + (width * Math.cos(r + Math.PI / 2)),
                              ((y + endY) / 2) + (width * Math.sin(r + Math.PI / 2)), endX, endY);
        ctxt.quadraticCurveTo(((x + endX) / 2) - (width * Math.cos(r + Math.PI / 2)),
                              ((y + endY) / 2) - (width * Math.sin(r + Math.PI / 2)), x, y);
        ctxt.closePath();
        ctxt.fill();
        ctxt.stroke();
    }

    // RENDER CIRCLE:
    function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
        tmpContext = tmpContext || mainContext;
        tmpContext.beginPath();
        tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
        if (!dontFill) tmpContext.fill();
        if (!dontStroke) tmpContext.stroke();
    }

    function renderHealthCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
        tmpContext = tmpContext || mainContext;
        tmpContext.beginPath();
        tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
        if (!dontFill) tmpContext.fill();
        if (!dontStroke) tmpContext.stroke();
    }

    // RENDER STAR SHAPE:
    function renderStar(ctxt, spikes, outer, inner) {
        let rot = Math.PI / 2 * 3;
        let x, y;
        let step = Math.PI / spikes;
        ctxt.beginPath();
        ctxt.moveTo(0, -outer);
        for (let i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outer;
            y = Math.sin(rot) * outer;
            ctxt.lineTo(x, y);
            rot += step;
            x = Math.cos(rot) * inner;
            y = Math.sin(rot) * inner;
            ctxt.lineTo(x, y);
            rot += step;
        }
        ctxt.lineTo(0, -outer);
        ctxt.closePath();
    }

    function renderHealthStar(ctxt, spikes, outer, inner) {
        let rot = Math.PI / 2 * 3;
        let x, y;
        let step = Math.PI / spikes;
        ctxt.beginPath();
        ctxt.moveTo(0, -outer);
        for (let i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outer;
            y = Math.sin(rot) * outer;
            ctxt.lineTo(x, y);
            rot += step;
            x = Math.cos(rot) * inner;
            y = Math.sin(rot) * inner;
            ctxt.lineTo(x, y);
            rot += step;
        }
        ctxt.lineTo(0, -outer);
        ctxt.closePath();
    }

    // RENDER RECTANGLE:
    function renderRect(x, y, w, h, ctxt, dontStroke, dontFill) {
        if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
        if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
    }

    function renderHealthRect(x, y, w, h, ctxt, dontStroke, dontFill) {
        if (!dontFill) ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
        if (!dontStroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
    }

    // RENDER RECTCIRCLE:
    function renderRectCircle(x, y, s, sw, seg, ctxt, dontStroke, dontFill) {
        ctxt.save();
        ctxt.translate(x, y);
        seg = Math.ceil(seg / 2);
        for (let i = 0; i < seg; i++) {
            renderRect(0, 0, s * 2, sw, ctxt, dontStroke, dontFill);
            ctxt.rotate(Math.PI / seg);
        }
        ctxt.restore();
    }

    // RENDER BLOB:
    function renderBlob(ctxt, spikes, outer, inner) {
        let rot = Math.PI / 2 * 3;
        let x, y;
        let step = Math.PI / spikes;
        let tmpOuter;
        ctxt.beginPath();
        ctxt.moveTo(0, -inner);
        for (let i = 0; i < spikes; i++) {
            tmpOuter = UTILS.randInt(outer + 0.9, outer * 1.2);
            ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter,
                                  Math.cos(rot + (step * 2)) * inner, Math.sin(rot + (step * 2)) * inner);
            rot += step * 2;
        }
        ctxt.lineTo(0, -inner);
        ctxt.closePath();
    }

    // RENDER TRIANGLE:
    function renderTriangle(s, ctx) {
        ctx = ctx || mainContext;
        let h = s * (Math.sqrt(3) / 2);
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(-s / 2, h / 2);
        ctx.lineTo(s / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.fill();
        ctx.closePath();
    }

    // PREPARE MENU BACKGROUND:
    function prepareMenuBackground() {
        // let tmpMid = config.mapScale / 2;
        // let attempts = 0;
        // for (let i = 0; i < items.list.length * 3;) {
        //     if (attempts >= 1000) break;
        //     attempts++;
        //     let type = items.list[UTILS.randInt(0, items.list.length - 1)];
        //     let data = {
        //         x: tmpMid + UTILS.randFloat(-1000, 1000),
        //         y: tmpMid + UTILS.randFloat(-600, 600),
        //         dir: UTILS.fixTo(Math.random() * (Math.PI * 2), 2)
        //     };
        //     if (objectManager.checkItemLocation(data.x, data.y, type.scale, 0.6, type.id, true)) {
        //         objectManager.add(i, data.x, data.y, data.dir, type.scale, type.id, type);
        //     } else {
        //         continue;
        //     }
        //     i++;
        // }
    }

    const speed = 1;
    // RENDER PLAYERS:
    function renderDeadPlayers(xOffset, yOffset) {
        mainContext.fillStyle = "#91b2db";
        const currentTime = Date.now();
        deadPlayers.filter(dead => dead.active).forEach((dead) => {
            if (!dead.startTime) {
                dead.startTime = currentTime;
                dead.angle = 0;
                dead.radius = 0.1;
            }
            const timeElapsed = currentTime - dead.startTime;
            const maxAlpha = 1;
            dead.alpha = Math.max(0, maxAlpha - (timeElapsed / 3000));
            dead.animate(delta);
            mainContext.globalAlpha = dead.alpha;
            mainContext.strokeStyle = outlineColor;
            mainContext.save();
            mainContext.translate(dead.x - xOffset, dead.y - yOffset);
            dead.radius -= 0.001;
            dead.angle += 0.0174533;
            const moveSpeed = 1;
            const x = dead.radius * Math.cos(dead.angle);
            const y = dead.radius * Math.sin(dead.angle);
            dead.x += x * moveSpeed;
            dead.y += y * moveSpeed;
            mainContext.rotate(dead.angle);
            renderDeadPlayer(dead, mainContext);
            mainContext.restore();
            mainContext.fillStyle = "#91b2db";
            if (timeElapsed >= 3000) {
                dead.active = false;
                dead.startTime = null;
            }
        });
    }
    // RENDER PLAYERS:
    function renderPlayers(xOffset, yOffset, zIndex) {
        mainContext.globalAlpha = 1;
        mainContext.fillStyle = "#91b2db";
        for (var i = 0; i < players.length; ++i) {
            tmpObj = players[i];
            if (tmpObj.zIndex == zIndex) {
                tmpObj.animate(delta);
                if (tmpObj.visible) {
                    tmpObj.skinRot += (0.002 * delta);
                    tmpDir = (!configs.showDir && !useWasd && tmpObj == player) ? configs.attackDir ? getVisualDir() : getSafeDir() : (tmpObj.dir||0);
                    mainContext.save();
                    mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                    // RENDER PLAYER:
                    mainContext.rotate(tmpDir + tmpObj.dirPlus);
                    renderPlayer(tmpObj, mainContext);
                    mainContext.restore();

                }
            }
        }
    }
    // RENDER DEAD PLAYER:
    function renderDeadPlayer(obj, ctxt) {
        ctxt = ctxt || mainContext;
        ctxt.lineWidth = outlineWidth;
        ctxt.lineJoin = "miter";
        let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS||1);
        let oHandAngle = (obj.buildIndex < 0)?(items.weapons[obj.weaponIndex].hndS||1):1;
        let oHandDist = (obj.buildIndex < 0)?(items.weapons[obj.weaponIndex].hndD||1):1;
        // TAIL/CAPE:
        renderTail2(13, ctxt, obj);
        // WEAPON BELLOW HANDS:
        if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
            renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
            if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
                renderProjectile(obj.scale, 0,
                                 items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
            }
        }
        // HANDS:
        ctxt.fillStyle = "#ececec";
        renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
        renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle),
                     (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);
        // WEAPON ABOVE HANDS:
        if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
            renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant || 0].src || "", obj.scale, 0, ctxt);
            if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
                renderProjectile(obj.scale, 0,
                                 items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
            }
        }
        // BUILD ITEM:
        if (obj.buildIndex >= 0) {
            var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
            ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
        }
        // BODY:
        renderCircle(0, 0, obj.scale, ctxt);
        // SKIN
        renderSkin2(48, ctxt, null, obj)
    }

    // RENDER PLAYER:
    function renderPlayer(obj, ctxt) {
        ctxt = ctxt || mainContext;
        ctxt.lineWidth = outlineWidth;
        ctxt.lineJoin = "miter";
        let handAngle = (Math.PI / 4) * (items.weapons[obj.weaponIndex].armS || 1);
        let oHandAngle = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndS || 1) : 1;
        let oHandDist = (obj.buildIndex < 0) ? (items.weapons[obj.weaponIndex].hndD || 1) : 1;

        let katanaMusket = (obj == player && obj.weapons[0] == 3 && obj.weapons[1] == 15);

        // TAIL/CAPE:
        if (obj.tailIndex > 0) {
            renderTailTextureImage(obj.tailIndex, ctxt, obj);
        }

        // WEAPON BELLOW HANDS:
        if (obj.buildIndex < 0 && !items.weapons[obj.weaponIndex].aboveHand) {
            renderTool(items.weapons[katanaMusket ? 4 : obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
            if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
                renderProjectile(obj.scale, 0,
                                 items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
            }
        }

        // HANDS:
        ctxt.fillStyle = config.skinColors[obj.skinColor];
        renderCircle(obj.scale * Math.cos(handAngle), (obj.scale * Math.sin(handAngle)), 14);
        renderCircle((obj.scale * oHandDist) * Math.cos(-handAngle * oHandAngle),
                     (obj.scale * oHandDist) * Math.sin(-handAngle * oHandAngle), 14);

        // WEAPON ABOVE HANDS:
        if (obj.buildIndex < 0 && items.weapons[obj.weaponIndex].aboveHand) {
            renderTool(items.weapons[obj.weaponIndex], config.weaponVariants[obj.weaponVariant].src, obj.scale, 0, ctxt);
            if (items.weapons[obj.weaponIndex].projectile != undefined && !items.weapons[obj.weaponIndex].hideProjectile) {
                renderProjectile(obj.scale, 0,
                                 items.projectiles[items.weapons[obj.weaponIndex].projectile], mainContext);
            }
        }

        // BUILD ITEM:
        if (obj.buildIndex >= 0) {
            var tmpSprite = getItemSprite(items.list[obj.buildIndex]);
            ctxt.drawImage(tmpSprite, obj.scale - items.list[obj.buildIndex].holdOffset, -tmpSprite.width / 2);
        }

        // BODY:
        renderCircle(0, 0, obj.scale, ctxt);

        // SKIN:
        if (obj.skinIndex > 0) {
            ctxt.rotate(Math.PI / 2);
            renderTextureSkin(obj.skinIndex, ctxt, null, obj);
        }

    }

    // RENDER NORMAL SKIN
    var skinSprites2 = {};
    var skinPointers2 = {};
    function renderSkin2(index, ctxt, parentSkin, owner) {
        tmpSkin = skinSprites2[index];
        if (!tmpSkin) {
            var tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true;
                this.onload = null;
            };
            //tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
            tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
            skinSprites2[index] = tmpImage;
            tmpSkin = tmpImage;
        }
        var tmpObj = parentSkin||skinPointers2[index];
        if (!tmpObj) {
            for (var i = 0; i < hats.length; ++i) {
                if (hats[i].id == index) {
                    tmpObj = hats[i];
                    break;
                }
            }
            skinPointers2[index] = tmpObj;
        }
        if (tmpSkin.isLoaded)
            ctxt.drawImage(tmpSkin, -tmpObj.scale/2, -tmpObj.scale/2, tmpObj.scale, tmpObj.scale);
        if (!parentSkin && tmpObj.topSprite) {
            ctxt.save();
            ctxt.rotate(owner.skinRot);
            renderSkin2(index + "_top", ctxt, tmpObj, owner);
            ctxt.restore();
        }
    }

    // RENDER SKIN:
    function renderTextureSkin(index, ctxt, parentSkin, owner) {
        if (!(tmpSkin = skinSprites[index + (txt ? "lol" : 0)])) {
            var tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true,
                    this.onload = null
            }
                ,
                tmpImage.src = setSkinTextureImage(index, "hat", index),
                skinSprites[index + (txt ? "lol" : 0)] = tmpImage,
                tmpSkin = tmpImage
        }
        var tmpObj = parentSkin||skinPointers[index];
        if (!tmpObj) {
            for (var i = 0; i < hats.length; ++i) {
                if (hats[i].id == index) {
                    tmpObj = hats[i];
                    break;
                }
            }
            skinPointers[index] = tmpObj;
        }
        if (tmpSkin.isLoaded)
            ctxt.drawImage(tmpSkin, -tmpObj.scale/2, -tmpObj.scale/2, tmpObj.scale, tmpObj.scale);
        if (!parentSkin && tmpObj.topSprite) {
            ctxt.save();
            ctxt.rotate(owner.skinRot);
            renderSkin(index + "_top", ctxt, tmpObj, owner);
            ctxt.restore();
        }
    }

    var FlareZHat = {
        7: "https://i.imgur.com/vAOzlyY.png",
        15: "https://i.imgur.com/YRQ8Ybq.png",
        40: "https://i.imgur.com/Xzmg27N.png",
        26: "https://i.imgur.com/I0xGtyZ.png",
        55: "https://i.imgur.com/uYgDtcZ.png",
        20: "https://i.imgur.com/f5uhWCk.png",
    };

    function setSkinTextureImage(id, type, id2) {
        if (true) {
            if(FlareZHat[id] && type == "hat") {
                return FlareZHat[id];
            } else {
                if(type == "acc") {
                    return ".././img/accessories/access_" + id + ".png";
                } else if(type == "hat") {
                    return ".././img/hats/hat_" + id + ".png";
                } else {
                    return ".././img/weapons/" + id + ".png";
                }
            }
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    }
    // RENDER SKINS:
    let skinSprites = {};
    let skinPointers = {};
    let tmpSkin;

    function renderSkin(index, ctxt, parentSkin, owner) {
        tmpSkin = skinSprites[index];
        if (!tmpSkin) {
            let tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true;
                this.onload = null;
            };
            tmpImage.src = "https://moomoo.io/img/hats/hat_" + index + ".png";
            skinSprites[index] = tmpImage;
            tmpSkin = tmpImage;
        }
        let tmpObj = parentSkin || skinPointers[index];
        if (!tmpObj) {
            for (let i = 0; i < hats.length; ++i) {
                if (hats[i].id == index) {
                    tmpObj = hats[i];
                    break;
                }
            }
            skinPointers[index] = tmpObj;
        }
        if (tmpSkin.isLoaded)
            ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale);
        if (!parentSkin && tmpObj.topSprite) {
            ctxt.save();
            ctxt.rotate(owner.skinRot);
            renderSkin(index + "_top", ctxt, tmpObj, owner);
            ctxt.restore();
        }
    }

    // RENDER TAIL:
    var FlareZAcc = {
        21: "https://i.imgur.com/4ddZert.png",
        19: "https://i.imgur.com/sULkUZT.png",
    };
    function setTailTextureImage(id, type, id2) {
        if (true) {
            if(FlareZAcc[id] && type == "acc") {
                return FlareZAcc[id];
            } else {
                if(type == "acc") {
                    return ".././img/accessories/access_" + id + ".png";
                } else if(type == "hat") {
                    return ".././img/hats/hat_" + id + ".png";
                } else {
                    return ".././img/weapons/" + id + ".png";
                }
            }
        } else {
            if(type == "acc") {
                return ".././img/accessories/access_" + id + ".png";
            } else if(type == "hat") {
                return ".././img/hats/hat_" + id + ".png";
            } else {
                return ".././img/weapons/" + id + ".png";
            }
        }
    }
    function renderTailTextureImage(index, ctxt, owner) {
        if (!(tmpSkin = accessSprites[index + (txt ? "lol" : 0)])) {
            var tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true,
                    this.onload = null
            }
                ,
                tmpImage.src = setTailTextureImage(index, "acc"),//".././img/accessories/access_" + index + ".png";
                accessSprites[index + (txt ? "lol" : 0)] = tmpImage,
                tmpSkin = tmpImage;
        }
        var tmpObj = accessPointers[index];
        if (!tmpObj) {
            for (var i = 0; i < accessories.length; ++i) {
                if (accessories[i].id == index) {
                    tmpObj = accessories[i];
                    break;
                }
            }
            accessPointers[index] = tmpObj;
        }
        if (tmpSkin.isLoaded) {
            ctxt.save();
            ctxt.translate(-20 - (tmpObj.xOff||0), 0);
            if (tmpObj.spin)
                ctxt.rotate(owner.skinRot);
            ctxt.drawImage(tmpSkin, -(tmpObj.scale/2), -(tmpObj.scale/2), tmpObj.scale, tmpObj.scale);
            ctxt.restore();
        }
    }

    let accessSprites = {};
    let accessPointers = {};
    var txt = true;

    function renderTail(index, ctxt, owner) {
        tmpSkin = accessSprites[index];
        if (!tmpSkin) {
            let tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true;
                this.onload = null;
            };
            tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
            accessSprites[index] = tmpImage;
            tmpSkin = tmpImage;
        }
        let tmpObj = accessPointers[index];
        if (!tmpObj) {
            for (let i = 0; i < accessories.length; ++i) {
                if (accessories[i].id == index) {
                    tmpObj = accessories[i];
                    break;
                }
            }
            accessPointers[index] = tmpObj;
        }
        if (tmpSkin.isLoaded) {
            ctxt.save();
            ctxt.translate(-20 - (tmpObj.xOff || 0), 0);
            if (tmpObj.spin)
                ctxt.rotate(owner.skinRot);
            ctxt.drawImage(tmpSkin, -(tmpObj.scale / 2), -(tmpObj.scale / 2), tmpObj.scale, tmpObj.scale);
            ctxt.restore();
        }
    }

    var accessSprites2 = {};
    var accessPointers2 = {};
    function renderTail2(index, ctxt, owner) {
        tmpSkin = accessSprites2[index];
        if (!tmpSkin) {
            var tmpImage = new Image();
            tmpImage.onload = function() {
                this.isLoaded = true;
                this.onload = null;
            };
            tmpImage.src = "https://moomoo.io/img/accessories/access_" + index + ".png";
            accessSprites2[index] = tmpImage;
            tmpSkin = tmpImage;
        }
        var tmpObj = accessPointers2[index];
        if (!tmpObj) {
            for (var i = 0; i < accessories.length; ++i) {
                if (accessories[i].id == index) {
                    tmpObj = accessories[i];
                    break;
                }
            }
            accessPointers2[index] = tmpObj;
        }
        if (tmpSkin.isLoaded) {
            ctxt.save();
            ctxt.translate(-20 - (tmpObj.xOff||0), 0);
            if (tmpObj.spin)
                ctxt.rotate(owner.skinRot);
            ctxt.drawImage(tmpSkin, -(tmpObj.scale/2), -(tmpObj.scale/2), tmpObj.scale, tmpObj.scale);
            ctxt.restore();
        }
    }

    // RENDER TOOL:
    let toolSprites = {};
    function renderTool(obj, variant, x, y, ctxt) {
        let tmpSrc = obj.src + (variant || "");
        let tmpSprite = toolSprites[tmpSrc];
        if (!tmpSprite) {
            tmpSprite = new Image();
            tmpSprite.onload = function() {
                this.isLoaded = true;
            }
            tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
            toolSprites[tmpSrc] = tmpSprite;
        }
        if (tmpSprite.isLoaded)
            ctxt.drawImage(tmpSprite, x + obj.xOff - (obj.length / 2), y + obj.yOff - (obj.width / 2), obj.length, obj.width);
    }

    // RENDER PROJECTILES:
    function renderProjectiles(layer, xOffset, yOffset) {
        for (let i = 0; i < projectiles.length; i++) {
            tmpObj = projectiles[i];
            if (tmpObj.active && tmpObj.layer == layer && tmpObj.inWindow) {
                tmpObj.update(delta);
                if (tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale)) {
                    mainContext.save();
                    mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                    mainContext.rotate(tmpObj.dir);
                    renderProjectile(0, 0, tmpObj, mainContext, 1);
                    mainContext.restore();
                }
            }
        };
    }

    // RENDER PROJECTILE:
    let projectileSprites = {};//fz iz zexy

    function renderProjectile(x, y, obj, ctxt, debug) {
        if (obj.src) {
            let tmpSrc = items.projectiles[obj.indx].src;
            let tmpSprite = projectileSprites[tmpSrc];
            if (!tmpSprite) {
                tmpSprite = new Image();
                tmpSprite.onload = function() {
                    this.isLoaded = true;
                }
                tmpSprite.src = "https://moomoo.io/img/weapons/" + tmpSrc + ".png";
                projectileSprites[tmpSrc] = tmpSprite;
            }
            if (tmpSprite.isLoaded)
                ctxt.drawImage(tmpSprite, x - (obj.scale / 2), y - (obj.scale / 2), obj.scale, obj.scale);
        } else if (obj.indx == 1) {
            ctxt.fillStyle = "#939393";
            renderCircle(x, y, obj.scale, ctxt);
        }
    }

    // RENDER AI:
    let aiSprites = {};

    function renderAI(obj, ctxt) {
        let tmpIndx = obj.index;
        let tmpSprite = aiSprites[tmpIndx];
        if (!tmpSprite) {
            let tmpImg = new Image();
            tmpImg.onload = function() {
                this.isLoaded = true;
                this.onload = null;
            };
            tmpImg.src = "https://moomoo.io/img/animals/" + obj.src + ".png";
            tmpSprite = tmpImg;
            aiSprites[tmpIndx] = tmpSprite;
        }
        if (tmpSprite.isLoaded) {
            let tmpScale = obj.scale * 1.2 * (obj.spriteMlt || 1);
            ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, tmpScale * 2, tmpScale * 2);
        }
    }

    // RENDER WATER BODIES:
    function renderWaterBodies(xOffset, yOffset, ctxt, padding) {

        // MIDDLE RIVER:
        let tmpW = config.riverWidth + padding;
        let tmpY = (config.mapScale / 2) - yOffset - (tmpW / 2);
        if (tmpY < maxScreenHeight && tmpY + tmpW > 0) {
            ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
        }
    }

    // RENDER GAME OBJECTS:
    let gameObjectSprites = {};

    function getResSprite(obj) {
        let biomeID = (obj.y >= config.mapScale - config.snowBiomeTop) ? 2 : ((obj.y <= config.snowBiomeTop) ? 1 : 0);
        let tmpIndex = (obj.type + "_" + obj.scale + "_" + biomeID);
        let tmpSprite = gameObjectSprites[tmpIndex];
        if (!tmpSprite) {
            let blurScale = 6;
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = (obj.scale * 2.1) + outlineWidth;
            let tmpContext = tmpCanvas.getContext('2d');
            tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            tmpContext.rotate(UTILS.randFloat(0, Math.PI));
            tmpContext.strokeStyle = outlineColor;
            tmpContext.lineWidth = outlineWidth;
            // if (isNight) {
            //     tmpContext.shadowBlur = blurScale;
            //     tmpContext.shadowColor = `rgba(0, 0, 0, ${obj.alpha})`;
            // }
            if (obj.type == 0) {
                let tmpScale;
                let tmpCount = 8;
                tmpContext.globalAlpha = (cdf(obj, player) <= 250 ? 0.6 : 1);
                for (let i = 0; i < 2; ++i) {
                    tmpScale = tmpObj.scale * (!i ? 1 : 0.5);
                    renderStar(tmpContext, tmpCount, tmpScale, tmpScale * 0.7);
                    tmpContext.fillStyle = !biomeID ? (!i ? "#9ebf57" : "#b4db62") : (!i ? "#e3f1f4" : "#fff");
                    tmpContext.fill();
                    if (!i) {
                        tmpContext.stroke();
                        tmpContext.shadowBlur = null;
                        tmpContext.shadowColor = null;
                        tmpContext.globalAlpha = 1;
                    }
                }
            } else if (obj.type == 1) {
                if (biomeID == 2) {
                    tmpContext.fillStyle = "#606060";
                    renderStar(tmpContext, 6, obj.scale * 0.3, obj.scale * 0.71);
                    tmpContext.fill();
                    tmpContext.stroke();

                    //tmpContext.shadowBlur = null;
                    //tmpContext.shadowColor = null;

                    tmpContext.fillStyle = "#89a54c";
                    renderCircle(0, 0, obj.scale * 0.55, tmpContext);
                    tmpContext.fillStyle = "#a5c65b";
                    renderCircle(0, 0, obj.scale * 0.3, tmpContext, true);
                } else {
                    renderBlob(tmpContext, 6, tmpObj.scale, tmpObj.scale * 0.7);
                    tmpContext.fillStyle = biomeID ? "#e3f1f4" : "#89a54c";
                    tmpContext.fill();
                    tmpContext.stroke();

                    //tmpContext.shadowBlur = null;
                    //tmpContext.shadowColor = null;

                    tmpContext.fillStyle = biomeID ? "#6a64af" : "#c15555";
                    let tmpRange;
                    let berries = 4;
                    let rotVal = (Math.PI * 2) / berries;
                    for (let i = 0; i < berries; ++i) {
                        tmpRange = UTILS.randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3);
                        renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                                     UTILS.randInt(10, 12), tmpContext);
                    }
                }
            } else if (obj.type == 2 || obj.type == 3) {
                tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#938d77" : "#939393") : "#e0c655";
                renderStar(tmpContext, 3, obj.scale, obj.scale);
                tmpContext.fill();
                tmpContext.stroke();

                tmpContext.shadowBlur = null;
                tmpContext.shadowColor = null;

                tmpContext.fillStyle = (obj.type == 2) ? (biomeID == 2 ? "#b2ab90" : "#bcbcbc") : "#ebdca3";
                renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
                tmpContext.fill();
            }
            tmpSprite = tmpCanvas;
            gameObjectSprites[tmpIndex] = tmpSprite;
        }
        return tmpSprite;
    }

    // GET ITEM SPRITE:
    let itemSprites = [];

    function getItemSprite(obj, asIcon) {
        let tmpSprite = itemSprites[obj.id];
        if (!tmpSprite || asIcon) {
            let blurScale = !asIcon ? 20 : 5;
            let tmpCanvas = document.createElement("canvas");
            let reScale = ((!asIcon && obj.name == "windmill") ? items.list[4].scale : obj.scale);
            tmpCanvas.width = tmpCanvas.height = (reScale * 2.5) + outlineWidth + (items.list[obj.id].spritePadding || 0) + blurScale;

            let tmpContext = tmpCanvas.getContext("2d");
            tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
            tmpContext.rotate(asIcon ? 0 : (Math.PI / 2));
            tmpContext.strokeStyle = outlineColor;
            tmpContext.lineWidth = outlineWidth * (asIcon ? (tmpCanvas.width / 81) : 1);
            if (!asIcon) {
                tmpContext.shadowBlur = 8;
                tmpContext.shadowColor = `rgba(0, 0, 0, 0.2)`;
            }

            if (obj.name == "apple") {
                tmpContext.fillStyle = "#c15555";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fillStyle = "#89a54c";
                let leafDir = -(Math.PI / 2);
                renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir),
                           25, leafDir + Math.PI / 2, tmpContext);
            } else if (obj.name == "cookie") {
                tmpContext.fillStyle = "#cca861";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fillStyle = "#937c4b";
                let chips = 4;
                let rotVal = (Math.PI * 2) / chips;
                let tmpRange;
                for (let i = 0; i < chips; ++i) {
                    tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                    renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                                 UTILS.randInt(4, 5), tmpContext, true);
                }
            } else if (obj.name == "cheese") {
                tmpContext.fillStyle = "#f4f3ac";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fillStyle = "#c3c28b";
                let chips = 4;
                let rotVal = (Math.PI * 2) / chips;
                let tmpRange;
                for (let i = 0; i < chips; ++i) {
                    tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                    renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                                 UTILS.randInt(4, 5), tmpContext, true);
                }
            } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
                tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
                    "#a5974c" : "#939393";
                let sides = (obj.name == "castle wall") ? 4 : 3;
                renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
                    "#c9b758" : "#bcbcbc";
                renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
                tmpContext.fill();
            } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
                       obj.name == "spinning spikes") {
                tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
                let tmpScale = (obj.scale * 0.6);
                renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#a5974c";
                renderCircle(0, 0, tmpScale, tmpContext);
                tmpContext.fillStyle = "#c9b758";
                renderCircle(0, 0, tmpScale / 2, tmpContext, true);
            } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
                tmpContext.fillStyle = "#a5974c";
                renderCircle(0, 0, reScale, tmpContext);
                tmpContext.fillStyle = "#c9b758";
                renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
                tmpContext.fillStyle = "#a5974c";
                renderCircle(0, 0, reScale * 0.5, tmpContext);
            } else if (obj.name == "mine") {
                tmpContext.fillStyle = "#939393";
                renderStar(tmpContext, 3, obj.scale, obj.scale);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#bcbcbc";
                renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
                tmpContext.fill();
            } else if (obj.name == "sapling") {
                for (let i = 0; i < 2; ++i) {
                    let tmpScale = obj.scale * (!i ? 1 : 0.5);
                    renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
                    tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
                    tmpContext.fill();
                    if (!i) tmpContext.stroke();
                }
            } else if (obj.name == "pit trap") {
                tmpContext.fillStyle = "#a5974c";
                renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = outlineColor;
                renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
                tmpContext.fill();
            } else if (obj.name == "boost pad") {
                tmpContext.fillStyle = "#7e7f82";
                renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#dbd97d";
                renderTriangle(obj.scale * 1, tmpContext);
            } else if (obj.name == "turret") {
                tmpContext.fillStyle = "#a5974c";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#939393";
                let tmpLen = 50;
                renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
                renderCircle(0, 0, obj.scale * 0.6, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
            } else if (obj.name == "platform") {
                tmpContext.fillStyle = "#cebd5f";
                let tmpCount = 4;
                let tmpS = obj.scale * 2;
                let tmpW = tmpS / tmpCount;
                let tmpX = -(obj.scale / 2);
                for (let i = 0; i < tmpCount; ++i) {
                    renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
                    tmpContext.fill();
                    tmpContext.stroke();
                    tmpX += tmpS / tmpCount;
                }
            } else if (obj.name == "healing pad") {
                tmpContext.fillStyle = "#7e7f82";
                renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#db6e6e";
                renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
            } else if (obj.name == "spawn pad") {
                tmpContext.fillStyle = "#7e7f82";
                renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#71aad6";
                renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            } else if (obj.name == "blocker") {
                tmpContext.fillStyle = "#7e7f82";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.rotate(Math.PI / 4);
                tmpContext.fillStyle = "#db6e6e";
                renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
            } else if (obj.name == "teleporter") {
                tmpContext.fillStyle = "#7e7f82";
                renderCircle(0, 0, obj.scale, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.rotate(Math.PI / 4);
                tmpContext.fillStyle = "#d76edb";
                renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
            }
            tmpSprite = tmpCanvas;
            if (!asIcon)
                itemSprites[obj.id] = tmpSprite;
        }
        return tmpSprite;
    }

    function getItemSprite2(obj, tmpX, tmpY) {
        let tmpContext = mainContext;
        let reScale = (obj.name == "windmill" ? items.list[4].scale : obj.scale);
        tmpContext.save();
        tmpContext.translate(tmpX, tmpY);
        tmpContext.rotate(obj.dir);
        tmpContext.strokeStyle = outlineColor;
        tmpContext.lineWidth = outlineWidth;
        if (obj.name == "apple") {
            tmpContext.fillStyle = "#c15555";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#89a54c";
            let leafDir = -(Math.PI / 2);
            renderLeaf(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir),
                       25, leafDir + Math.PI / 2, tmpContext);
        } else if (obj.name == "cookie") {
            tmpContext.fillStyle = "#cca861";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#937c4b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                             UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "cheese") {
            tmpContext.fillStyle = "#f4f3ac";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#c3c28b";
            let chips = 4;
            let rotVal = (Math.PI * 2) / chips;
            let tmpRange;
            for (let i = 0; i < chips; ++i) {
                tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7);
                renderCircle(tmpRange * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i),
                             UTILS.randInt(4, 5), tmpContext, true);
            }
        } else if (obj.name == "wood wall" || obj.name == "stone wall" || obj.name == "castle wall") {
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#83898e" : (obj.name == "wood wall") ?
                "#a5974c" : "#939393";
            let sides = (obj.name == "castle wall") ? 4 : 3;
            renderStar(tmpContext, sides, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = (obj.name == "castle wall") ? "#9da4aa" : (obj.name == "wood wall") ?
                "#c9b758" : "#bcbcbc";
            renderStar(tmpContext, sides, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" ||
                   obj.name == "spinning spikes") {
            tmpContext.fillStyle = (obj.name == "poison spikes") ? "#7b935d" : "#939393";
            let tmpScale = (obj.scale * 0.6);
            renderStar(tmpContext, (obj.name == "spikes") ? 5 : 6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderCircle(0, 0, tmpScale / 2, tmpContext, true);
        } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, reScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderRectCircle(0, 0, reScale * 1.5, 29, 4, tmpContext);
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, reScale * 0.5, tmpContext);
        } else if (obj.name == "mine") {
            tmpContext.fillStyle = "#939393";
            renderStar(tmpContext, 3, obj.scale, obj.scale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#bcbcbc";
            renderStar(tmpContext, 3, obj.scale * 0.55, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "sapling") {
            for (let i = 0; i < 2; ++i) {
                let tmpScale = obj.scale * (!i ? 1 : 0.5);
                renderStar(tmpContext, 7, tmpScale, tmpScale * 0.7);
                tmpContext.fillStyle = (!i ? "#9ebf57" : "#b4db62");
                tmpContext.fill();
                if (!i) tmpContext.stroke();
            }
        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = outlineColor;
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "boost pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#dbd97d";
            renderTriangle(obj.scale * 1, tmpContext);
        } else if (obj.name == "turret") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#939393";
            let tmpLen = 50;
            renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if (obj.name == "platform") {
            tmpContext.fillStyle = "#cebd5f";
            let tmpCount = 4;
            let tmpS = obj.scale * 2;
            let tmpW = tmpS / tmpCount;
            let tmpX = -(obj.scale / 2);
            for (let i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if (obj.name == "healing pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "spawn pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#71aad6";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if (obj.name == "blocker") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "teleporter") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#d76edb";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        }
        tmpContext.restore();
    }

    let objSprites = [];

    function getObjSprite(obj) {
        let tmpSprite = objSprites[obj.id];
        if (!tmpSprite) {
            // let blurScale = isNight ? 20 : 0;
            let tmpCanvas = document.createElement("canvas");
            tmpCanvas.width = tmpCanvas.height = obj.scale * 2.5 + outlineWidth + (items.list[obj.id].spritePadding || 0) + 0;
            let tmpContext = tmpCanvas.getContext("2d");
            tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2);
            tmpContext.rotate(Math.PI / 2);
            tmpContext.strokeStyle = outlineColor;
            tmpContext.lineWidth = outlineWidth;
            // if (isNight) {
            //     tmpContext.shadowBlur = 20;
            //     tmpContext.shadowColor = `rgba(0, 0, 0, ${Math.min(0.3, obj.alpha)})`;
            // }
            if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
                tmpContext.fillStyle = obj.name == "poison spikes" ? "#7b935d" : "#939393";
                let tmpScale = obj.scale * 0.6;
                renderStar(tmpContext, obj.name == "spikes" ? 5 : 6, obj.scale, tmpScale);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#a5974c";
                renderCircle(0, 0, tmpScale, tmpContext);
                tmpContext.fillStyle = "#cc5151";
                renderCircle(0, 0, tmpScale / 2, tmpContext, true);
            } else if (obj.name == "pit trap") {
                tmpContext.fillStyle = "#a5974c";
                renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
                tmpContext.fill();
                tmpContext.stroke();
                tmpContext.fillStyle = "#cc5151";
                renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
                tmpContext.fill();
            }
            tmpSprite = tmpCanvas;
            objSprites[obj.id] = tmpSprite;
        }
        return tmpSprite;
    }

    // GET MARK SPRITE:
    function getMarkSprite(obj, tmpContext, tmpX, tmpY) {
        let center = {
            x: screenWidth / 2,
            y: screenHeight / 2,
        };
        tmpContext.lineWidth = outlineWidth;
        mainContext.globalAlpha = 0.2;
        tmpContext.strokeStyle = outlineColor;
        tmpContext.save();
        tmpContext.translate(tmpX, tmpY);
        tmpContext.rotate(90**10);
        if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes" || obj.name == "spinning spikes") {
            tmpContext.fillStyle = (obj.name == "poison spikes")?"#7b935d":"#939393";
            var tmpScale = (obj.scale);
            renderStar(tmpContext, (obj.name == "spikes")?5:6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
                tmpContext.fillStyle = "#a34040";
            } else {
                tmpContext.fillStyle = "#c9b758";
            }
            renderCircle(0, 0, tmpScale/2, tmpContext, true);
        } else if (obj.name == "turret") {
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#939393";
            let tmpLen = 50;
            renderRect(0, -tmpLen / 2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if (obj.name == "teleporter") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#d76edb";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        } else if (obj.name == "platform") {
            tmpContext.fillStyle = "#cebd5f";
            let tmpCount = 4;
            let tmpS = obj.scale * 2;
            let tmpW = tmpS / tmpCount;
            let tmpX = -(obj.scale / 2);
            for (let i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - (tmpW / 2), 0, tmpW, obj.scale * 2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if (obj.name == "healing pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "spawn pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale * 2, obj.scale * 2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#71aad6";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if (obj.name == "blocker") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderRectCircle(0, 0, obj.scale * 1.5, 29, 4, tmpContext);
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext);

        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            if (player && obj.owner && player.sid != obj.owner.sid && !tmpObj.findAllianceBySid(obj.owner.sid)) {
                tmpContext.fillStyle = "#a34040";
            } else {
                tmpContext.fillStyle = outlineColor;
            }
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        }
        tmpContext.restore();
    }

    // OBJECT ON SCREEN:
    function isOnScreen(x, y, s) {
        return (x + s >= 0 && x - s <= maxScreenWidth && y + s >= 0 && (y,
                                                                        s,
                                                                        maxScreenHeight));
    }

    // RENDER GAME OBJECTS:
    function renderGameObjects(layer, xOffset, yOffset) {
        let tmpSprite;
        let tmpX;
        let tmpY;
        liztobj.forEach((tmp) => {
            tmpObj = tmp;
            if (tmpObj.active && liztobj.includes(tmp) && tmpObj.render) {
                tmpX = tmpObj.x + tmpObj.xWiggle - xOffset;
                tmpY = tmpObj.y + tmpObj.yWiggle - yOffset;
                if (layer == 0) {
                    tmpObj.update(delta);
                }
                mainContext.globalAlpha = tmpObj.alpha;
                if (tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0))) {
                    if (tmpObj.isItem) {
                        if ((tmpObj.dmg || tmpObj.trap) && !tmpObj.isTeamObject(player)) {
                            tmpSprite = getObjSprite(tmpObj);
                        } else {
                            tmpSprite = getItemSprite(tmpObj);
                        }

                        mainContext.save();
                        mainContext.translate(tmpX, tmpY);
                        mainContext.rotate(tmpObj.dir);
                        if (!tmpObj.active) {
                            mainContext.scale(tmpObj.visScale / tmpObj.scale, tmpObj.visScale / tmpObj.scale);
                        }
                        mainContext.drawImage(tmpSprite, -(tmpSprite.width / 2), -(tmpSprite.height / 2));

                        if (tmpObj.blocker) {
                            mainContext.strokeStyle = "#db6e6e";
                            mainContext.globalAlpha = 0.3;
                            mainContext.lineWidth = 6;
                            renderCircle(0, 0, tmpObj.blocker, mainContext, false, true);
                        }
                        mainContext.restore();
                    } else {
                        tmpSprite = getResSprite(tmpObj);
                        mainContext.drawImage(tmpSprite, tmpX - (tmpSprite.width / 2), tmpY - (tmpSprite.height / 2));
                    }
                }
                if (layer == 3 && !useWasd) {
                    if (tmpObj.health < tmpObj.maxHealth) {
                        // HEALTH HOLDER:
                        mainContext.fillStyle = darkOutlineColor;
                        mainContext.roundRect(tmpX - config.healthBarWidth / 2 - config.healthBarPad, tmpY - config.healthBarPad, config.healthBarWidth + config.healthBarPad * 2, 17, 8);
                        mainContext.fill();

                        // HEALTH BAR:
                        mainContext.fillStyle = tmpObj.isTeamObject(player) ? "#8ecc51" : "#cc5151";
                        mainContext.roundRect(tmpX - config.healthBarWidth / 2, tmpY, config.healthBarWidth * (tmpObj.health / tmpObj.maxHealth), 17 - config.healthBarPad * 2, 7);
                        mainContext.fill();
                    }
                }
            }
        });

        // PLACE VISIBLE:
        if (layer == 0) {
            if (placeVisible.length) {
                placeVisible.forEach((places) => {
                    tmpX = places.x - xOffset;
                    tmpY = places.y - yOffset;
                    markObject(places, tmpX, tmpY);
                });
            }
        }
    }

    function markObject(tmpObj, tmpX, tmpY) {
        getMarkSprite(tmpObj, mainContext, tmpX, tmpY);
    }

    // RENDER MINIMAP:
    class MapPing {
        constructor(color, scale) {
            this.init = function(x, y) {
                this.scale = 0;
                this.x = x;
                this.y = y;
                this.active = true;
            };
            this.update = function(ctxt, delta) {
                if (this.active) {
                    this.scale += 0.05 * delta;
                    if (this.scale >= scale) {
                        this.active = false;
                    } else {
                        ctxt.globalAlpha = (1 - Math.max(0, this.scale / scale));
                        ctxt.beginPath();
                        ctxt.arc((this.x / config.mapScale) * mapDisplay.width, (this.y / config.mapScale) *
                                 mapDisplay.width, this.scale, 0, 2 * Math.PI);
                        ctxt.stroke();
                    }
                }
            };
            this.color = color;
        }
    }

    function pingMap(x, y) {
        tmpPing = mapPings.find(pings => !pings.active);
        if (!tmpPing) {
            tmpPing = new MapPing("#fff", config.mapPingScale);
            mapPings.push(tmpPing);
        }
        tmpPing.init(x, y);
    }

    function updateMapMarker() {
        mapMarker.x = player.x;
        mapMarker.y = player.y;
    }

    function renderMinimap(delta) {
        if (player && player.alive) {
            mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height);

            // RENDER PINGS:
            mapContext.lineWidth = 4;
            for (let i = 0; i < mapPings.length; ++i) {
                tmpPing = mapPings[i];
                mapContext.strokeStyle = tmpPing.color;
                tmpPing.update(mapContext, delta);
            }

            // RENDER BREAK TRACKS:
            mapContext.globalAlpha = 1;
            mapContext.fillStyle = "#ff0000";
            if (breakTrackers.length) {
                mapContext.fillStyle = "#abcdef";
                mapContext.font = "34px HammerSmith One";
                mapContext.textBaseline = "middle";
                mapContext.textAlign = "center";
                for (let i = 0; i < breakTrackers.length;) {
                    mapContext.fillText("!", (breakTrackers[i].x / config.mapScale) * mapDisplay.width,
                                        (breakTrackers[i].y / config.mapScale) * mapDisplay.height);
                    i += 2;
                }
            }

            // RENDER PLAYERS:
            mapContext.globalAlpha = 1;
            mapContext.fillStyle = "#fff";
            renderCircle((player.x / config.mapScale) * mapDisplay.width,
                         (player.y / config.mapScale) * mapDisplay.height, 7, mapContext, true);
            mapContext.fillStyle = "rgba(255,255,255,0.35)";
            if (player.team && minimapData) {
                for (let i = 0; i < minimapData.length;) {
                    renderCircle((minimapData[i] / config.mapScale) * mapDisplay.width,
                                 (minimapData[i + 1] / config.mapScale) * mapDisplay.height, 7, mapContext, true);
                    i += 2;
                }
            }

            // RENDER BOTS:
            if (bots.length) {
                bots.forEach((tmp) => {
                    if (tmp.inGame) {
                        mapContext.globalAlpha = 1;
                        mapContext.strokeStyle = "#cc5151";
                        renderCircle((tmp.x2 / config.mapScale) * mapDisplay.width,
                                     (tmp.y2 / config.mapScale) * mapDisplay.height, 7, mapContext, false, true);
                    }
                });
            }

            // DEATH LOCATION:
            if (lastDeath) {
                mapContext.fillStyle = "#fc5553";
                mapContext.font = "34px HammerSmith One";
                mapContext.textBaseline = "middle";
                mapContext.textAlign = "center";
                mapContext.fillText("x", (lastDeath.x / config.mapScale) * mapDisplay.width,
                                    (lastDeath.y / config.mapScale) * mapDisplay.height);
            }

            // MAP MARKER:
            if (mapMarker) {
                mapContext.fillStyle = "#fff";
                mapContext.font = "34px HammerSmith One";
                mapContext.textBaseline = "middle";
                mapContext.textAlign = "center";
                mapContext.fillText("x", (mapMarker.x / config.mapScale) * mapDisplay.width,
                                    (mapMarker.y / config.mapScale) * mapDisplay.height);
            }
        }
    }

    // ICONS:
    let crossHairs = ["https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&","https://cdn.discordapp.com/attachments/1175772907931176991/1226209968051453962/Pngtreeskull_icon_logo_vector_illuatration_7964583.png?ex=6623f006&is=66117b06&hm=d34a6c712d3a3185a4ee966a72d839f54206d72f81a42439800706c9a6069715&"];
    let crossHairSprites = {};
    let iconSprites = {};
    let icons = ["crown", "skull"];

    function loadIcons() {
        for (let i = 0; i < icons.length; ++i) {
            let tmpSprite = new Image();
            tmpSprite.onload = function() {
                this.isLoaded = true;
            };
            tmpSprite.src = "./../img/icons/" + icons[i] + ".png";
            iconSprites[icons[i]] = tmpSprite;
        }
        for (let i = 0; i < crossHairs.length; ++i) {
            let tmpSprite = new Image();
            tmpSprite.onload = function() {
                this.isLoaded = true;
            };
            tmpSprite.src = crossHairs[i];
            crossHairSprites[i] = tmpSprite;
        }
    }
    loadIcons();

    function getDist(e, t) {
        try {
            return Math.hypot((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
        } catch (e) {
            return Infinity;
        }
    }
    // GET DIRECTION
    function getDir(e, t) {
        try {
            return Math.atan2((t.y2 || t.y) - (e.y2 || e.y), (t.x2 || t.x) - (e.x2 || e.x));
        } catch (e) {
            return 0;
        }
    }

    function cdf (e, t){
        try {
            return Math.hypot((t.y2||t.y)-(e.y2||e.y), (t.x2||t.x)-(e.x2||e.x));
        } catch(e){
            return Infinity;
        }
    }

    // UPDATE GAME:
    function updateGame() {
        if(gameObjects.length && inGame) {
            gameObjects.forEach((tmp) => {
                if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) <= 1200) {
                    if(!liztobj.includes(tmp)) {
                        liztobj.push(tmp);
                        tmp.render = true;
                    }
                } else {
                    if(liztobj.includes(tmp)) {
                        if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                            tmp.render = false;
                            const index = liztobj.indexOf(tmp);
                            if (index > -1) { // only splice array when item is found
                                liztobj.splice(index, 1); // 2nd parameter means remove one item only
                            }
                        }
                    } else if(UTILS.getDistance(tmp.x, tmp.y, player.x, player.y) >= 1200) {
                        tmp.render = false;
                        const index = liztobj.indexOf(tmp);
                        if (index > -1) { // only splice array when item is found
                            liztobj.splice(index, 1); // 2nd parameter means remove one item only
                        }
                    } else {
                        tmp.render = false;
                        const index = liztobj.indexOf(tmp);
                        if (index > -1) { // only splice array when item is found
                            liztobj.splice(index, 1); // 2nd parameter means remove one item only
                        }
                    }
                }
            })
            // gameObjects = gameObjects.filter(e => UTILS.getDistance(e.x, e.y, player.x, player.y) <= 1000)
        }

        // if (config.resetRender) {
        mainContext.beginPath();
        mainContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        // }
        mainContext.globalAlpha = 1;

        // MOVE CAMERA:
        if (player) {
            if (false) {
                camX = player.x;
                camY = player.y;
            } else {
                let tmpDist = UTILS.getDistance(camX, camY, player.x, player.y);
                let tmpDir = UTILS.getDirection(player.x, player.y, camX, camY);
                let camSpd = Math.min(tmpDist * 0.0045 * delta, tmpDist);
                if (tmpDist > 0.05) {
                    camX += camSpd * Math.cos(tmpDir);
                    camY += camSpd * Math.sin(tmpDir);
                } else {
                    camX = player.x;
                    camY = player.y;
                }
            }
        } else {
            camX = config.mapScale / 2 + config.riverWidth;
            camY = config.mapScale / 2;
        }
        // PATHFINDER LINE
        if (pathFind.active) {
            if (pathFind.array && (pathFind.chaseNear ? enemy.length : true)) {
                mainContext.lineWidth = player.scale / 5;
                mainContext.globalAlpha = 1;
                mainContext.strokeStyle = "red";
                mainContext.beginPath();
                pathFind.array.forEach((path, i) => {
                    let pathXY = {
                        x: (pathFind.scale / pathFind.grid) * path.x,
                        y: (pathFind.scale / pathFind.grid) * path.y
                    }
                    let render = {
                        x: ((player.x2 - (pathFind.scale / 2)) + pathXY.x) - xOffset,
                        y: ((player.y2 - (pathFind.scale / 2)) + pathXY.y) - yOffset
                    }
                    if (i == 0) {
                        mainContext.moveTo(render.x, render.y);
                    } else {
                        mainContext.lineTo(render.x, render.y);
                    }
                });
                mainContext.stroke();
            }
        }
        // INTERPOLATE PLAYERS AND AI:
        let lastTime = now - (1000 / config.serverUpdateRate);
        let tmpDiff;
        for (let i = 0; i < players.length + ais.length; ++i) {
            tmpObj = players[i] || ais[i - players.length];
            if (tmpObj && tmpObj.visible) {
                if (tmpObj.forcePos) {
                    tmpObj.x = tmpObj.x2;
                    tmpObj.y = tmpObj.y2;
                    tmpObj.dir = tmpObj.d2;
                } else {
                    let total = tmpObj.t2 - tmpObj.t1;
                    let fraction = lastTime - tmpObj.t1;
                    let ratio = (fraction / total);
                    let rate = 170;
                    tmpObj.dt += delta;
                    let tmpRate = Math.min(1.7, tmpObj.dt / rate);
                    tmpDiff = (tmpObj.x2 - tmpObj.x1);
                    tmpObj.x = tmpObj.x1 + (tmpDiff * tmpRate);
                    tmpDiff = (tmpObj.y2 - tmpObj.y1);
                    tmpObj.y = tmpObj.y1 + (tmpDiff * tmpRate);
                    if (config.anotherVisual) {
                        tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                    } else {
                        tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
                    }
                }
            }
        }

        // RENDER CORDS:
        let xOffset = camX - (maxScreenWidth / 2);
        let yOffset = camY - (maxScreenHeight / 2);

        // RENDER BACKGROUND:
        if (config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight) {
            mainContext.fillStyle = "#b6db66";
            mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
        } else if (config.mapScale - config.snowBiomeTop - yOffset <= 0) {
            mainContext.fillStyle = "#dbc666";
            mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
        } else if (config.snowBiomeTop - yOffset >= maxScreenHeight) {
            mainContext.fillStyle = "#fff";
            mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);
        } else if (config.snowBiomeTop - yOffset >= 0) {
            mainContext.fillStyle = "#fff";
            mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset);
            mainContext.fillStyle = "#b6db66";
            mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth,
                                 maxScreenHeight - (config.snowBiomeTop - yOffset));
        } else {
            mainContext.fillStyle = "#b6db66";
            mainContext.fillRect(0, 0, maxScreenWidth,
                                 (config.mapScale - config.snowBiomeTop - yOffset));
            mainContext.fillStyle = "#dbc666";
            mainContext.fillRect(0, (config.mapScale - config.snowBiomeTop - yOffset), maxScreenWidth,
                                 maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset));
        }

        // RENDER WATER AREAS:
        if (!firstSetup) {
            waterMult += waterPlus * config.waveSpeed * delta;
            if (waterMult >= config.waveMax) {
                waterMult = config.waveMax;
                waterPlus = -1;
            } else if (waterMult <= 1) {
                waterMult = waterPlus = 1;
            }
            mainContext.globalAlpha = 1;
            mainContext.fillStyle = "#dbc666";
            renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding);
            mainContext.fillStyle = "#91b2db";
            renderWaterBodies(xOffset, yOffset, mainContext, (waterMult - 1) * 250);
        }

        // RENDER DEAD PLAYERS:
        mainContext.globalAlpha = 1;
        mainContext.strokeStyle = outlineColor;
        renderDeadPlayers(xOffset, yOffset);

        // RENDER BOTTOM LAYER:
        mainContext.globalAlpha = 1;
        mainContext.strokeStyle = outlineColor;
        renderGameObjects(-1, xOffset, yOffset);

        // RENDER PROJECTILES:
        mainContext.globalAlpha = 1;
        mainContext.lineWidth = outlineWidth;
        renderProjectiles(0, xOffset, yOffset);

        // RENDER PLAYERS:
        renderPlayers(xOffset, yOffset, 0);

        // RENDER AI:
        mainContext.globalAlpha = 1;
        for (let i = 0; i < ais.length; ++i) {
            tmpObj = ais[i];
            if (tmpObj.active && tmpObj.visible) {
                tmpObj.animate(delta);
                mainContext.save();
                mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
                mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - (Math.PI / 2));
                renderAI(tmpObj, mainContext);
                mainContext.restore();
            }
        }

        // RENDER GAME OBJECTS (LAYERED):
        renderGameObjects(0, xOffset, yOffset);
        renderProjectiles(1, xOffset, yOffset);
        renderGameObjects(1, xOffset, yOffset);
        renderPlayers(xOffset, yOffset, 1);
        renderGameObjects(2, xOffset, yOffset);
        renderGameObjects(3, xOffset, yOffset);

        // MAP BOUNDARIES:
        mainContext.fillStyle = "#000";
        mainContext.globalAlpha = 0.09;
        if (xOffset <= 0) {
            mainContext.fillRect(0, 0, -xOffset, maxScreenHeight);
        }
        if (config.mapScale - xOffset <= maxScreenWidth) {
            let tmpY = Math.max(0, -yOffset);
            mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
        }
        if (yOffset <= 0) {
            mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset);
        }
        if (config.mapScale - yOffset <= maxScreenHeight) {
            let tmpX = Math.max(0, -xOffset);
            let tmpMin = 0;
            if (config.mapScale - xOffset <= maxScreenWidth)
                tmpMin = maxScreenWidth - (config.mapScale - xOffset);
            mainContext.fillRect(tmpX, config.mapScale - yOffset,
                                 (maxScreenWidth - tmpX) - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
        }

        // RENDER DAY/NIGHT TIME:
        mainContext.globalAlpha = 1;
        mainContext.fillStyle = "rgba(0, 5, 80, 0.55)";
        mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight);

        // RENDER PLAYER AND AI UI:
        mainContext.strokeStyle = darkOutlineColor;
        mainContext.globalAlpha = 1;

        for (let i = 0; i < players.length + ais.length; ++i) {
            tmpObj = players[i] || ais[i - players.length];
            if (tmpObj.visible && tmpObj.showName === 'NOOO') {
                mainContext.strokeStyle = darkOutlineColor;

                // NAME AND HEALTH:

                //                         let izbot = false;

                //                         bots.forEach((bot) => {
                //                             if (tmpObj.sid == bot.sid) izbot = true
                //                             else izbot = false;
                //                         });

                let tmpText = (tmpObj.team ? "[" + tmpObj.team + "] " : "") + (tmpObj.name || ""); + (tmpObj.isPlayer ? " {" + tmpObj.sid + "}" : "");
                if (tmpText != "" && tmpObj.name != "Trash Slave") {


                    mainContext.strokeStyle = darkOutlineColor;
                    // bots.forEach((bot) => {
                    //     if (tmpObj.sid == bot.sid) return;
                    // });

                    mainContext.font = (tmpObj.nameScale || 30) + "px HammerSmith One";
                    mainContext.fillStyle = "#fff";
                    mainContext.textBaseline = "middle";
                    mainContext.textAlign = "center";
                    mainContext.lineWidth = (tmpObj.nameScale ? 11 : 8);
                    mainContext.lineJoin = "round";
                    mainContext.strokeText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY);
                    mainContext.fillText(tmpText, tmpObj.x - xOffset, (tmpObj.y - yOffset - tmpObj.scale) - config.nameY);
                    if (tmpObj.isLeader && iconSprites["crown"].isLoaded) {
                        let tmpS = config.crownIconScale;
                        let tmpX = tmpObj.x - xOffset - (tmpS / 2) - (mainContext.measureText(tmpText).width / 2) - config.crownPad;
                        mainContext.drawImage(iconSprites["crown"], tmpX, (tmpObj.y - yOffset - tmpObj.scale) -
                                              config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                    }
                    if (tmpObj.iconIndex == 1 && iconSprites["skull"].isLoaded) {
                        let tmpS = config.crownIconScale;
                        let tmpX = tmpObj.x - xOffset - (tmpS / 2) + (mainContext.measureText(tmpText).width / 2) + config.crownPad;
                        mainContext.drawImage(iconSprites["skull"], tmpX, (tmpObj.y - yOffset - tmpObj.scale) -
                                              config.nameY - (tmpS / 2) - 5, tmpS, tmpS);
                    }
                    if (tmpObj.isPlayer && instaC.wait && near == tmpObj && (crossHairSprites[1].isLoaded) && enemy.length && !useWasd) {
                        let tmpS = tmpObj.scale * 2.2;
                        mainContext.drawImage((crossHairSprites[1]), tmpObj.x - xOffset - tmpS / 2, tmpObj.y - yOffset - tmpS / 2, tmpS, tmpS);
                    }
                    // izbot = false;
                }
                if (tmpObj.health > 0) {

                    if(tmpObj.name != "Trash Slave") {
                        // HEALTH HOLDER:
                        mainContext.fillStyle = darkOutlineColor;
                        mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY, (config.healthBarWidth * 2) +
                                              (config.healthBarPad * 2), 17, 8);
                        mainContext.fill();

                        // HEALTH BAR:
                        mainContext.fillStyle = (tmpObj == player || (tmpObj.team && tmpObj.team == player.team)) ? "#8ecc51" : "#cc5151";
                        mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY + config.healthBarPad,
                                              ((config.healthBarWidth * 2) * (tmpObj.health / tmpObj.maxHealth)), 17 - config.healthBarPad * 2, 7);
                        mainContext.fill();
                    }

                    // reload lover rv

                    if (tmpObj.isPlayer) {

                        mainContext.globalAlpha = 1;

                        let reloads = {
                            primary: (tmpObj.primaryIndex == undefined ? 1 : ((items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed)),
                            secondary: (tmpObj.secondaryIndex == undefined ? 1 : ((items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed)),
                            turret: (2500 - tmpObj.reloads[53]) / 2500
                        };

                        // SECONDARY RELOAD HOLDER:
                        mainContext.fillStyle = darkOutlineColor;
                        mainContext.roundRect(tmpObj.x - xOffset - config.healthBarPad,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY - 13, config.healthBarWidth +
                                              (config.healthBarPad * 2), 17, 8);
                        mainContext.fill();

                        // SECONDARY RELOAD BAR:
                        mainContext.fillStyle = (tmpObj==player||(tmpObj.team&&tmpObj.team==player.team))?"#DFFF00":"#DFFF00";
                        mainContext.roundRect(tmpObj.x - xOffset,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY - 13 + config.healthBarPad,
                                              (config.healthBarWidth * reloads.secondary), 17 - config.healthBarPad * 2, 7);
                        mainContext.fill();

                        // PRIMARY RELOAD HOLDER:
                        mainContext.fillStyle = darkOutlineColor;
                        mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY - 13, config.healthBarWidth +
                                              (config.healthBarPad * 2), 17, 8);
                        mainContext.fill();

                        // PRIMARY RELOAD BAR:
                        mainContext.fillStyle = (tmpObj==player||(tmpObj.team&&tmpObj.team==player.team))?"#0096FF":"#ff4545";
                        mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth,
                                              (tmpObj.y - yOffset + tmpObj.scale) + config.nameY - 13 + config.healthBarPad,
                                              (config.healthBarWidth * reloads.primary), 17 - config.healthBarPad * 2, 7);
                        mainContext.fill();
                    } else {
                        mainContext.fillStyle = (tmpObj==player||(tmpObj.team&&tmpObj.team==player.team))?"#0096FF":"#ff4545";
                        if (tmpObj.primaryIndex == undefined ? false : (tmpObj.reloads[tmpObj.primaryIndex] > 0)) {
                            // PRIMARY RELOAD BAR:
                            mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth,
                                                  (tmpObj.y - yOffset + tmpObj.scale) + config.nameY + config.healthBarPad,
                                                  (config.healthBarWidth * (tmpObj.reloads[tmpObj.primaryIndex] / items.weapons[tmpObj.primaryIndex].speed)), 17 - config.healthBarPad * 2, 7);
                            mainContext.fill();
                        }
                        if (tmpObj.secondaryIndex == undefined ? false : (tmpObj.reloads[tmpObj.secondaryIndex] > 0)) {
                            // SECONDARY RELOAD BAR:
                            mainContext.roundRect(tmpObj.x - xOffset + (config.healthBarWidth * ((items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed)),
                                                  (tmpObj.y - yOffset + tmpObj.scale) + config.nameY + config.healthBarPad,
                                                  (config.healthBarWidth * (tmpObj.reloads[tmpObj.secondaryIndex] / items.weapons[tmpObj.secondaryIndex].speed)), 17 - config.healthBarPad * 2, 7);
                            mainContext.fill();
                        }

                    }

                    //reload lover rv

                    if (tmpObj.isPlayer) {
                        mainContext.globalAlpha = 1;
                        let targetReloads = {
                            primary: (tmpObj.primaryIndex == undefined ? 1 : ((items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed)),
                            secondary: (tmpObj.secondaryIndex == undefined ? 1 : ((items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed)),
                            turret: (2500 - tmpObj.reloads[53]) / 2500
                        };



                        if (!tmpObj.currentReloads) {
                            tmpObj.currentReloads = { // Initialize currentReloads if not already set
                                primary: targetReloads.primary,
                                secondary: targetReloads.secondary,
                                turret: targetReloads.turret
                            };
                        }
                        const lerpFactor = 0.3;
                        tmpObj.currentReloads.primary = (1 - lerpFactor) * tmpObj.currentReloads.primary + lerpFactor * targetReloads.primary;
                        tmpObj.currentReloads.secondary = (1 - lerpFactor) * tmpObj.currentReloads.secondary + lerpFactor * targetReloads.secondary;
                        tmpObj.currentReloads.turret = (1 - lerpFactor) * tmpObj.currentReloads.turret + lerpFactor * targetReloads.turret;

                        let primaryReloadProgress = tmpObj.primaryIndex !== undefined ? ((items.weapons[tmpObj.primaryIndex].speed - tmpObj.reloads[tmpObj.primaryIndex]) / items.weapons[tmpObj.primaryIndex].speed) : 1;
                        let secondaryReloadProgress = tmpObj.secondaryIndex !== undefined ? ((items.weapons[tmpObj.secondaryIndex].speed - tmpObj.reloads[tmpObj.secondaryIndex]) / items.weapons[tmpObj.secondaryIndex].speed) : 1;
                        const centerX = tmpObj.x - xOffset;
                        const centerY = tmpObj.y - yOffset;
                        const barRadius = 35;
                        const barWidth = 15;
                        const totalAngle = (Math.PI*2)/3; // Half circle
                        const secondaryStartAngle = -Math.PI / 2 + Math.PI / 3 + tmpObj.dir - Math.PI/2;
                        const secondaryEndAngle = secondaryStartAngle + (totalAngle * tmpObj.currentReloads.secondary);
                        const primaryStartAngle = Math.PI / 2 + tmpObj.dir - Math.PI/2;
                        const primaryEndAngle = primaryStartAngle + (totalAngle * tmpObj.currentReloads.primary);

                        const turretStartAngle = Math.PI + Math.PI / 4.5 + tmpObj.dir - Math.PI/2;
                        const turretEndAngle = turretStartAngle + (totalAngle/1.25 * tmpObj.currentReloads.turret);
                        function returncoolcolor(RainbowCycle) {
                            return `hsl(${RainbowCycle-50}, 85%, 50%, 30)`;
                        }

                        mainContext.save();
                        if (tmpObj.currentReloads.primary < 0.999) {
                            mainContext.beginPath();
                            mainContext.lineCap = 'round';
                            mainContext.arc(centerX, centerY, barRadius, primaryStartAngle, primaryEndAngle);
                            mainContext.lineWidth = 4;
                            mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.primary * 240);
                            mainContext.stroke();
                        }
                        if (tmpObj.currentReloads.secondary < 0.999) {
                            mainContext.beginPath();
                            mainContext.lineCap = 'round';
                            mainContext.arc(centerX, centerY, barRadius, secondaryStartAngle, secondaryEndAngle);
                            mainContext.lineWidth = 4;
                            mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.secondary * 240);
                            mainContext.stroke();
                        }
                        if (tmpObj.currentReloads.turret < 0.999) {
                            mainContext.beginPath();
                            mainContext.lineCap = 'round';
                            mainContext.arc(centerX, centerY, barRadius, turretStartAngle, turretEndAngle);
                            mainContext.lineWidth = 4;
                            mainContext.strokeStyle = returncoolcolor(tmpObj.currentReloads.turret * 240);
                            mainContext.stroke();
                        }
                        mainContext.restore();

                        if(tmpObj.name != "Trash Slave") {
                            // SHAME COUNT:
                            mainContext.globalAlpha = 1;
                            mainContext.font = "24px HammerSmith One";
                            mainContext.fillStyle = "#9900cc";
                            mainContext.strokeStyle = darkOutlineColor;
                            mainContext.textBaseline = "middle";
                            mainContext.textAlign = "center";
                            mainContext.lineWidth = 8;
                            mainContext.lineJoin = "round";
                            let tmpS = config.crownIconScale;
                            let tmpX = tmpObj.x - xOffset - tmpS / 2 + config.crownPad - 2;
                            mainContext.strokeText('[' + (tmpObj.skinIndex == 45 && tmpObj.shameTimer > 0 ? tmpObj.shameTimer : tmpObj.shameCount) + '/' + Math.round(tmpObj.pinge) + '/' + tmpObj.lastshamecount + ']', tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY + 175);
                            mainContext.fillText('[' + (tmpObj.skinIndex == 45 && tmpObj.shameTimer > 0 ? tmpObj.shameTimer : tmpObj.shameCount) + '/' + Math.round(tmpObj.pinge) + '/' + tmpObj.lastshamecount + ']', tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY + 175);
                        }

                        // PLAYER TRACER:
                        if (!tmpObj.isTeam(player)) {
                            let center = {
                                x: screenWidth / 2,
                                y: screenHeight / 2,
                            };
                            let alpha = Math.min(1, (UTILS.getDistance(0, 0, player.x - tmpObj.x, (player.y - tmpObj.y) * (16 / 9)) * 100) / (config.maxScreenHeight / 2) / center.y);
                            let dist = center.y * alpha / 2;
                            let tmpX = dist * Math.cos(UTILS.getDirect(tmpObj, player, 0, 0));
                            let tmpY = dist * Math.sin(UTILS.getDirect(tmpObj, player, 0, 0));
                            mainContext.save();
                            mainContext.translate((player.x - xOffset) + tmpX, (player.y - yOffset) + tmpY);
                            mainContext.rotate(tmpObj.aim2 + Math.PI / 2);
                            let by = 255 - (tmpObj.sid * 2);
                            mainContext.fillStyle = `rgb(${by}, ${by}, ${by})`;
                            mainContext.globalAlpha = alpha;
                            let renderTracer = function(s, ctx) {
                                ctx = ctx || mainContext;
                                let h = s * (Math.sqrt(3) / 2);
                                ctx.beginPath();
                                ctx.moveTo(0, -h / 1.5);
                                ctx.lineTo(-s / 2, h / 2);
                                ctx.lineTo(s / 2, h / 2);
                                ctx.lineTo(0, -h / 1.5);
                                ctx.fill();
                                ctx.closePath();
                            }
                            renderTracer(25, mainContext);
                            mainContext.restore();
                        }

                        if (getEl("predictType").value == "pre2") {
                            mainContext.lineWidth = 3;
                            mainContext.strokeStyle = "#fff";
                            mainContext.globalAlpha = 1;
                            mainContext.beginPath();
                            let render = {
                                x: tmpObj.x2 - xOffset,
                                y: tmpObj.y2 - yOffset
                            };
                            mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                            mainContext.lineTo(render.x, render.y);
                            mainContext.stroke();
                        } else if (getEl("predictType").value == "pre3") {
                            mainContext.lineWidth = 3;
                            mainContext.strokeStyle = "#cc5151";
                            mainContext.globalAlpha = 1;
                            mainContext.beginPath();
                            let render = {
                                x: tmpObj.x3 - xOffset,
                                y: tmpObj.y3 - yOffset
                            };
                            mainContext.moveTo(tmpObj.x - xOffset, tmpObj.y - yOffset);
                            mainContext.lineTo(render.x, render.y);
                            mainContext.stroke();
                        }

                    }
                }
            }
        }

        if (player) {

            // AUTOPUSH LINE:
            if (my.autoPush && my.pushData) {
                mainContext.lineWidth = 5;
                mainContext.globalAlpha = 1;
                mainContext.beginPath();
                var x1 = player.x - xOffset;
                var y1 = player.y - yOffset;
                var x2 = my.pushData.x2 - xOffset;
                var y2 = my.pushData.y2 - yOffset;
                var x3 = my.pushData.x - xOffset;
                var y3 = my.pushData.y - yOffset;

                mainContext.moveTo(x1, y1);
                mainContext.lineTo(x2, y2);
                mainContext.lineTo(x3, y3);
                mainContext.stroke();

                var deltaX = x3 - x1;
                var deltaY = y3 - y1;
                var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                var maxDistance = 100;
                var percentage = (distance / maxDistance) * 100;

                percentage = Math.min(100, Math.max(0, percentage));
                let spike;
                mainContext.fillStyle = "pink";
                mainContext.strokeStyle = "black";
                mainContext.lineWidth = 5;
                mainContext.font = "27px Times New Roman";
                let nearTrap = liztobj.filter(tmp => tmp.trap && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, near, 0, 2) <= (near.scale + tmp.getScale() + 5)).sort(function(a, b) {
                    return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                })[0];
                if(nearTrap)
                    spike = liztobj.filter(tmp => tmp.dmg && tmp.active && tmp.isTeamObject(player) && UTILS.getDist(tmp, nearTrap, 0, 0) <= (near.scale + nearTrap.scale + tmp.scale)).sort(function(a, b) {
                        return UTILS.getDist(a, near, 0, 2) - UTILS.getDist(b, near, 0, 2);
                    })[0];

                let xx = (player.x - xOffset + near.x - xOffset) / 2;
                let yy = (player.y - yOffset + near.y - yOffset) / 2;

                mainContext.moveTo(player.x - xOffset, player.y - yOffset);
                mainContext.strokeText(near.aim2, xx, yy);
                mainContext.fillText(near.aim2, xx, yy);
            }
        }

        mainContext.globalAlpha = 1;

        // RENDER ANIM TEXTS:
        textManager.update(delta, mainContext, xOffset, yOffset);

        // RENDER CHAT MESSAGES:
        for (let i = 0; i < players.length; ++i) {
            tmpObj = players[i];
            if (tmpObj.visible) {
                if (tmpObj.chatCountdown > 0) {
                    tmpObj.chatCountdown -= delta;
                    if (tmpObj.chatCountdown <= 0)
                        tmpObj.chatCountdown = 0;
                    mainContext.font = "32px HammerSmith One";
                    let tmpSize = mainContext.measureText(tmpObj.chatMessage);
                    mainContext.textBaseline = "middle";
                    mainContext.textAlign = "center";
                    let tmpX = tmpObj.x - xOffset;
                    let tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
                    let tmpH = 47;
                    let tmpW = tmpSize.width + 17;
                    mainContext.fillStyle = "rgba(0,0,0,0.2)";
                    mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                    mainContext.fill();
                    mainContext.fillStyle = "#fff";
                    mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
                }
                if (tmpObj.chat.count > 0) {
                    if (!useWasd) {
                        tmpObj.chat.count -= delta;
                        if (tmpObj.chat.count <= 0)
                            tmpObj.chat.count = 0;
                        mainContext.font = "32px HammerSmith One";
                        let tmpSize = mainContext.measureText(tmpObj.chat.message);
                        mainContext.textBaseline = "middle";
                        mainContext.textAlign = "center";
                        let tmpX = tmpObj.x - xOffset;
                        let tmpY = tmpObj.y - tmpObj.scale - yOffset + (90 * 2);
                        let tmpH = 47;
                        let tmpW = tmpSize.width + 17;
                        mainContext.fillStyle = "rgba(0,0,0,0.2)";
                        mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                        mainContext.fill();
                        mainContext.fillStyle = "#ffffff99";
                        mainContext.fillText(tmpObj.chat.message, tmpX, tmpY);
                    } else {
                        tmpObj.chat.count = 0;
                    }
                }
            }
        }

        if (allChats.length) {
            allChats.filter(ch => ch.active).forEach((ch) => {
                if (!ch.alive) {
                    if (ch.alpha <= 1) {
                        ch.alpha += delta / 250;
                        if (ch.alpha >= 1) {
                            ch.alpha = 1;
                            ch.alive = true;
                        }
                    }
                } else {
                    ch.alpha -= delta / 5000;
                    if (ch.alpha <= 0) {
                        ch.alpha = 0;
                        ch.active = false;
                    }
                }
                if (ch.active) {
                    mainContext.font = "20px Ubuntu";
                    let tmpSize = mainContext.measureText(ch.chat);
                    mainContext.textBaseline = "middle";
                    mainContext.textAlign = "center";
                    let tmpX = ch.x - xOffset;
                    let tmpY = ch.y - yOffset - 90;
                    let tmpH = 40;
                    let tmpW = tmpSize.width + 15;

                    mainContext.globalAlpha = ch.alpha;

                    mainContext.fillStyle = ch.owner.isTeam(player) ? "#8ecc51" : "#cc5151";
                    mainContext.strokeStyle = "rgb(25, 25, 25)";
                    mainContext.strokeText(ch.owner.name, tmpX, tmpY - 45);
                    mainContext.fillText(ch.owner.name, tmpX, tmpY - 45);

                    mainContext.lineWidth = 5;
                    mainContext.fillStyle = "#ccc";
                    mainContext.strokeStyle = "rgb(25, 25, 25)";

                    mainContext.roundRect(tmpX - tmpW / 2, tmpY - tmpH / 2, tmpW, tmpH, 6);
                    mainContext.stroke();
                    mainContext.fill();

                    mainContext.fillStyle = "#fff";
                    mainContext.strokeStyle = "#000";
                    mainContext.strokeText(ch.chat, tmpX, tmpY);
                    mainContext.fillText(ch.chat, tmpX, tmpY);
                    ch.y -= delta / 100;
                }
            });
        }

        mainContext.globalAlpha = 1;

        // RENDER MINIMAP:
        renderMinimap(delta);
    }

    // UPDATE & ANIMATE:
    window.requestAnimFrame = function() {
        return null;
    }
    window.rAF = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
            window.setTimeout(callback, 1000/9);
        };
    })();

    function doUpdate() {
        //rape modulus
        now = performance.now();
        delta = now - lastUpdate;
        lastUpdate = now;
        let timer = performance.now();
        let diff = timer - fpsTimer.last;
        if (diff >= 1000) {

            fpsTimer.ltime = fpsTimer.time * (1000 / diff);

            fpsTimer.last = timer;
            fpsTimer.time = 0;
        }
        fpsTimer.time++;

        getEl("pingFps").innerHTML = `${window.pingTime}ms | Fps: ${Math.round(fpsTimer.ltime)}`;
        getEl("packetStatus").innerHTML = secPacket;
        updateGame();
        rAF(doUpdate);
        ms.avg = Math.round((ms.min+ms.max)/2);
    }

    prepareMenuBackground();
    doUpdate();

    function toggleUseless(boolean) {
        getEl("instaType").disabled = boolean;
        getEl("antiBullType").disabled = boolean;
        getEl("predictType").disabled = boolean;
    }
    toggleUseless(useWasd);

    let changeDays = {};
    window.debug = function() {
        my.waitHit = 0;
        my.autoAim = false;
        instaC.isTrue = false;
        traps.inTrap = false;
        itemSprites = [];
        objSprites = [];
        gameObjectSprites = [];
    };
    window.wasdMode = function() {
        useWasd = !useWasd;
        toggleUseless(useWasd);
    };
    window.startGrind = function() {
        if (getEl("weaponGrind").checked) {
            for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
                checkPlace(player.getItemType(22), i);
            }
        }
    };
    // REMOVED!!! so they cant abuse :)
    let projects = [
        "adorable-eight-guppy",
        "galvanized-bittersweet-windshield"
    ];
    let botIDS = 0;
    window.connectFillBots = function() {
        botSkts = [];
        botIDS = 0;
        for (let i = 0; i < projects.length; i++) {
            let test = new WebSocket(`wss://${projects[i]}.glitch.me`);
            test.binaryType = "arraybuffer";

            test.onopen = function() {
                test.ssend = function(type) {
                    let data = Array.prototype.slice.call(arguments, 1);
                    let binary = window.msgpack.encode([type, data]);
                    test.send(binary);
                };
                for (let i = 0; i < 4; i++) {
                    window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                        action: "homepage"
                    }).then(function(token) {
                        let t = WS.url.split("wss://")[1].split("?")[0];
                        test.ssend("bots", "wss://" + t + "?token=re:" + encodeURIComponent(token), botIDS);
                        botSkts.push([test]);
                        botIDS++;
                    });
                }
            };
            test.onmessage = function(message) {
                let data = new Uint8Array(message.data);
                let parsed = window.msgpack.decode(data);
                let type = parsed[0];
                data = parsed[1];
            };
        }
    };
    window.destroyFillBots = function() {
        botSkts.forEach((socket) => {
            socket[0].close();
        });
        botSkts = [];
    };
    window.tryConnectBots = function() {
        for (let i = 0; i < (bots.length < 3 ? 3 : 4); i++) {
            window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
                action: "homepage"
            }).then(function(token) {
                // CONNECT SOCKET:
                botSpawn(token);
            });
        }
    };
    window.destroyBots = function() {
        bots.forEach((botyyyyy) => {
            botyyyyy.closeSocket = true;
        });
        bots = [];
    };
    window.resBuild = function() {
        if (gameObjects.length) {
            gameObjects.forEach((tmp) => {
                tmp.breakObj = false;
            });
            breakObjects = [];
        }
    };
    window.toggleBotsCircle = function() {
        player.circle = !player.circle;
    };
    window.toggleVisual = function() {
        config.anotherVisual = !config.anotherVisual;
        gameObjects.forEach((tmp) => {
            if (tmp.active) {
                tmp.dir = tmp.lastDir;
            }
        });
    };
    window.prepareUI = function(tmpObj) {
        resize();
        // CHAT STUFF:
        var chatBox = document.getElementById("chatBox");
        var chatHolder = document.getElementById("chatHolder");
        var suggestBox = document.createElement("div");
        suggestBox.id = "suggestBox";

        var prevChats = [];
        var prevChatsIndex = 0;

        function toggleChat() {
            if (!usingTouch) {
                if (chatHolder.style.display == "block") {
                    if (chatBox.value) {
                        sendChat(chatBox.value);
                    }
                    closeChat();
                } else {
                    storeMenu.style.display = "none";
                    allianceMenu.style.display = "none";
                    chatHolder.style.display = "block";
                    chatBox.focus();
                    resetMoveDir();
                }
            } else {
                setTimeout(function () {
                    var chatMessage = prompt("chat message");
                    if (chatMessage) {
                        sendChat(chatMessage);
                    }
                }, 1);
            }
            chatBox.value = "";
            (() => {
                prevChatsIndex = 0;
            })();
        }

        function closeChat() {
            chatBox.value = "";
            chatHolder.style.display = "none";
        }

        // ACTION BAR:
        UTILS.removeAllChildren(actionBar);

        for (let i = 0; i < (items.weapons.length + items.list.length); ++i) {
            (function (i) {
                UTILS.generateElement({
                    id: "actionBarItem" + i,
                    class: "actionBarItem",
                    style: "display:none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)",
                    onmouseout: function () {
                        showItemInfo();
                    },
                    parent: actionBar
                });
            })(i);
        }

        for (let i = 0; i < (items.list.length + items.weapons.length); ++i) {
            (function (i) {
                let tmpCanvas = document.createElement("canvas");
                tmpCanvas.width = tmpCanvas.height = 66;
                let tmpContext = tmpCanvas.getContext("2d");
                tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
                tmpContext.imageSmoothingEnabled = false;
                tmpContext.webkitImageSmoothingEnabled = false;
                tmpContext.mozImageSmoothingEnabled = false;

                if (items.weapons[i]) {
                    tmpContext.rotate((Math.PI));
                    let tmpSprite = new Image();
                    toolSprites[items.weapons[i].src] = tmpSprite;
                    tmpSprite.onload = function () {
                        this.isLoaded = true;
                        let tmpPad = 1 / (this.height / this.width);
                        let tmpMlt = (items.weapons[i].iPad || 1);
                        tmpContext.drawImage(this, -(tmpCanvas.width * tmpMlt * config.iconPad * tmpPad) / 2, -(tmpCanvas.height * tmpMlt * config.iconPad) / 2,
                                             tmpCanvas.width * tmpMlt * tmpPad * config.iconPad, tmpCanvas.height * tmpMlt * config.iconPad);
                        tmpContext.fillStyle = "rgba(0, 0, 70, 0.2)";
                        tmpContext.globalCompositeOperation = "source-atop";
                        tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height);
                        getEl('actionBarItem' + i).style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                    };
                    tmpSprite.src = "./../img/weapons/" + items.weapons[i].src + ".png";
                    let tmpUnit = getEl('actionBarItem' + i);
                    // tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                    //     showItemInfo(items.weapons[i], true);
                    // });
                    tmpUnit.onclick = UTILS.checkTrusted(function () {
                        selectWeapon(tmpObj.weapons[items.weapons[i].type]);
                    });
                    UTILS.hookTouchEvents(tmpUnit);
                } else {
                    let tmpSprite = getItemSprite(items.list[i - items.weapons.length], true);
                    let tmpScale = Math.min(tmpCanvas.width - config.iconPadding, tmpSprite.width);
                    tmpContext.globalAlpha = 1;
                    tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                    tmpContext.fillStyle = "rgba(0, 0, 70, 0.1)";
                    tmpContext.globalCompositeOperation = "source-atop";
                    tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale);
                    getEl('actionBarItem' + i).style.backgroundImage = "url(" + tmpCanvas.toDataURL() + ")";
                    let tmpUnit = getEl('actionBarItem' + i);
                    // tmpUnit.onmouseover = UTILS.checkTrusted(function () {
                    //     showItemInfo(items.list[i - items.weapons.length]);
                    // });
                    tmpUnit.onclick = UTILS.checkTrusted(function () {
                        selectToBuild(tmpObj.items[tmpObj.getItemType(i - items.weapons.length)]);
                    });
                    UTILS.hookTouchEvents(tmpUnit);
                }
            })(i);
        }
    };
    window.profineTest = function(data) {
        if (data) {
            // VALIDATE NAME:
            let name = data + "";
            name = name.slice(0, config.maxNameLength);

            return name;
        }
    }
}(1)
// Check the current URL
if (window.location.hostname.includes("moomoo.io") ||
    window.location.hostname.includes("sandbox.moomoo.io") ||
    window.location.hostname.includes("dev.moomoo.io")) {
    // The code will only run on the specified domains

    (() => {
        "use strict";

        const PACKET_LIMITS = {
            PER_MINUTE: 1000,
            PER_SECOND: 80,
        };

        const IGNORED_PACKET_TYPES = new Set(["pp", "rmd"]);
        const IGNORED_QUEUE_PACKETS = new Set(["5", "c", "33", "2", "7", "13c"]);

        /**
     * Class to manage anti-kick functionality
     */
        class AntiKick {
            constructor() {
                this.resetRateLimit();
            }

            /**
       * Reset packet rate limits
       */
            resetRateLimit() {
                // Packet history
                this.packetHistory = new Map();
                // Packet queue
                this.packetQueue = [];
                // Last packet sent time
                this.lastSent = Date.now();
            }

            /**
       * Check if the packet is rate-limited
       * @param {ArrayBuffer} data - Binary packet data
       * @returns {boolean} True if rate-limited, false otherwise
       */
            isRateLimited(data) {
                const binaryData = new Uint8Array(data);
                console.log({data})
                if (Date.now() - this.lastSent > PACKET_LIMITS.PER_MINUTE) {
                    this.resetRateLimit();
                }

                const packetType = binaryData[0];

                if (!IGNORED_PACKET_TYPES.has(packetType)) {
                    if (this.packetHistory.has(packetType) &&
                        (("2" === packetType || "33" === packetType) && this.packetHistory.get(packetType)[0] === binaryData[1])) {
                        return true;
                    }

                    if (this.packetQueue.length > PACKET_LIMITS.PER_SECOND) {
                        return IGNORED_QUEUE_PACKETS.has(packetType) || this.packetQueue.push(data);
                    }

                    this.packetQueue.push({ type: packetType, data: binaryData.slice(1) });
                    this.packetHistory.set(packetType, binaryData.slice(1));
                }

                return false;
            }
        }

        const antiKick = new AntiKick();

        // Override the send method of WebSocket
        WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
            /**
       * Apply the send method override
       * @param {function} target - WebSocket method to override
       * @param {object} thisArg - The WebSocket object
       * @param {ArrayBuffer} binary - Binary data to send
       * @returns {*} Result of the original send method
       */
            apply(target, thisArg, binary) {
                if (!thisArg.messageListenerSet) {
                    // Listen for messages to process the packet queue
                    thisArg.addEventListener("message", (event) => {

                        if (antiKick.packetQueue.length) {
                            const binaryData = new Uint8Array(event.data);
                            if (binaryData[0] === 51) {
                                thisArg.send(antiKick.packetQueue[0]);
                                antiKick.packetQueue.shift();
                            }
                        }
                    });
                    thisArg.messageListenerSet = true;
                }

                // Send the packet only if it's not rate-limited
                if (!antiKick.isRateLimited(binary)) {
                    return Reflect.apply(target, thisArg, binary);
                }
            },
        });
    })();
}
;(async () => {
    unsafeWindow.weaponVariantProgress = true

    document.addEventListener("DOMContentLoaded", () => {
        const style = document.createElement("style")
        style.innerText = `
		.weaponVariantBar {
			margin-top: 63px;
			height: 3px;
			border-radius: 4px;
		}

		@media only screen and (max-width: 896px) {
			.weaponVariantBar {
				margin-top: 41px;
			}
		}
		`

        document.head.appendChild(style)
    })

    let init = false,
        playerSID,
        weaponXP = {},
        weaponIndex,
        resources = {},
        pps = {},
        PPS = 0,
        lastPPSTime = 0
    await new Promise(async (resolve) => {
        let { send } = WebSocket.prototype

        WebSocket.prototype.send = function (...x) {
            send.apply(this, x)
            this.send = send
            this.iosend = function (...datas) {
                const [packet, ...data] = datas
                this.send(new Uint8Array(Array.from(msgpack.encode([packet, data]))))
            }
            if (!init) {
                init = true
                this.addEventListener("message", (e) => {
                    if (!e.origin.includes("moomoo.io") && unsafeWindow.privateServer) return
                    const [packet, data] = msgpack.decode(new Uint8Array(e.data))
                    switch (packet) {
                        case OLDPACKETCODE.RECEIVE["1"]:
                            playerSID = data[0]
                            break
                        case OLDPACKETCODE.RECEIVE["2"]:
                            if (data[1]) {
                                weaponXP = {}
                                const moofoll = localStorage.getItem("moofoll")
                                resources = {
                                    food: moofoll ? 100 : 0,
                                    stone: moofoll ? 100 : 0,
                                    wood: moofoll ? 100 : 0,
                                    points: moofoll ? 100 : 0
                                }
                                for (let i = 0; i < 16; i++) {
                                    waitForElm("#variantBar" + i).then((element) => {
                                        element.style.width = "0%"
                                    })
                                }
                            }
                        case OLDPACKETCODE.RECEIVE["6"]:
                            for (var i = 0; i < data[0].length; i += 8) {
                                if (data[0][i + 7] === playerSID) {
                                    if (data[0][i + 6] === 10) {
                                        PPS += 1
                                        pps[data[0][i]] = 1
                                    } else if (data[0][i + 6] === 11) {
                                        PPS += 1.5
                                        pps[data[0][i]] = 1.5
                                    } else if (data[0][i + 6] === 12) {
                                        PPS += 2
                                        pps[data[0][i]] = 2
                                    }
                                }
                            }
                            break
                        case OLDPACKETCODE.RECEIVE["12"]:
                            if (pps[data[0]] != null) {
                                PPS -= pps[data[0]]
                                delete pps[data[0]]
                            }
                            break
                        case OLDPACKETCODE.RECEIVE["33"]:
                            for (let i = 0; i < data[0].length; i += 13) {
                                if (data[0][i] === playerSID) {
                                    weaponIndex = data[0][i + 5]
                                    if (weaponXP[weaponIndex] < unsafeWindow.config.weaponVariants[data[0][i + 6]].xp) {
                                        weaponXP[weaponIndex] = unsafeWindow.config.weaponVariants[data[0][i + 6]].xp
                                        updateStyleWidth(weaponIndex)
                                    } else if (weaponXP[weaponIndex] >= unsafeWindow.config.weaponVariants[data[0][i + 6] + 1]?.xp) {
                                        weaponXP[weaponIndex] -= weaponXP[weaponIndex] - unsafeWindow.config.weaponVariants[data[0][i + 6] + 1].xp + 100
                                        updateStyleWidth(weaponIndex)
                                    }
                                    break
                                }
                            }
                            break
                        case OLDPACKETCODE.RECEIVE["9"]:
                            if (data[0] === "kills") break
                            const tmpIndex = weaponIndex
                            if (weaponXP[tmpIndex] == null) weaponXP[tmpIndex] = 0
                            const resDiff = data[1] - resources[data[0]]
                            if (resDiff > 0) {
                                if (data[0] === "points" && [Math.ceil(PPS), Math.floor(PPS)].includes(resDiff) && Date.now() - lastPPSTime > 800) {
                                    lastPPSTime = Date.now()
                                    resources[data[0]] = data[1]
                                    updateStyleWidth(tmpIndex)
                                    break
                                } else if (data[0] === "points" && resDiff >= 100) {
                                    resources[data[0]] = data[1]
                                    updateStyleWidth(tmpIndex)
                                    break
                                }
                                weaponXP[tmpIndex] += resDiff
                            }
                            resources[data[0]] = data[1]
                            updateStyleWidth(tmpIndex)
                            break
                    }
                })
            }
            resolve(this)
        }
    })

    function waitForElm(selector) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector))
            }

            const observer = new MutationObserver((mutations) => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector))
                    observer.disconnect()
                }
            })

            observer.observe(document.body, {
                childList: true,
                subtree: true
            })
        })
    }

    for (let i = 0; i < 16; i++) {
        waitForElm("#actionBarItem" + i).then((parent) => {
            const element = document.createElement("div")
            element.id = "variantBar" + i
            element.className = "weaponVariantBar"
            parent.appendChild(element)
        })
    }

    function updateStyleWidth(tmpIndex) {
        let tmpStyle
        let tmpWidth
        if (weaponXP[tmpIndex] >= 12000) {
            tmpStyle = "none"
            tmpWidth = 0
        } else if (weaponXP[tmpIndex] >= 7000) {
            tmpStyle = "rgb(255, 113, 111)"
            tmpWidth = ((weaponXP[tmpIndex] - 7000) / 5000) * 100
        } else if (weaponXP[tmpIndex] >= 3000) {
            tmpStyle = "rgb(134, 181, 255)"
            tmpWidth = ((weaponXP[tmpIndex] - 3000) / 4000) * 100
        } else if (weaponXP[tmpIndex] >= 0) {
            tmpStyle = "rgb(247, 207, 69)"
            tmpWidth = (weaponXP[tmpIndex] / 3000) * 100
        }
        document.getElementById("variantBar" + tmpIndex).style.width = tmpWidth + "%"
        document.getElementById("variantBar" + tmpIndex).style.backgroundColor = tmpStyle
    }
})()
;(async () => {
    unsafeWindow.reloadTimer = true

    let weaponSpeed = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 0, 700, 230, 700, 1500]
    let weaponSrc = [
        "hammer_1",
        "axe_1",
        "great_axe_1",
        "sword_1",
        "samurai_1",
        "spear_1",
        "bat_1",
        "dagger_1",
        "stick_1",
        "bow_1",
        "great_hammer_1",
        "shield_1",
        "crossbow_1",
        "crossbow_2",
        "grab_1",
        "musket_1"
    ]
    let myPlayer=null,
        mySID=null,
        inGame = false,
        reloads = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var now, delta, lastUpdate
    const reloadTimer1 = document.createElement("div")
    reloadTimer1.id = "reloadTimer1"
    reloadTimer1.className = "resourceDisplay"
    reloadTimer1.innerText = "0"

    const reloadTimer2 = document.createElement("div")
    reloadTimer2.id = "reloadTimer2"
    reloadTimer2.className = "resourceDisplay"
    reloadTimer2.innerText = "-"

    await new Promise(async (resolve) => {
        let { send } = WebSocket.prototype

        WebSocket.prototype.send = function (...x) {
            send.apply(this, x)
            this.send = send
            this.addEventListener("message", (e) => {
                if (!e.origin.includes("moomoo.io") && unsafeWindow.privateServer) return
                const [packet, data] = msgpack.decode(new Uint8Array(e.data))
                switch (packet) {
                    case OLDPACKETCODE.RECEIVE["1"]:
                        inGame = true
                        mySID = data[0]
                        console.log({mySID})
                        break
                    case OLDPACKETCODE.RECEIVE["11"]:
                        inGame = false
                        reloads = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        break
                    case OLDPACKETCODE.RECEIVE["7"]:
                        if (data[0] == mySID) reloads[data[2]] = weaponSpeed[data[2]]
                        break
                    case OLDPACKETCODE.RECEIVE["18"]:
                        if ([1000, 1200, 1400].includes(data[3])) {
                            let projectileID
                            switch (data[5]) {
                                case 0:
                                    projectileID = 9
                                    break
                                case 2:
                                    projectileID = 12
                                    break
                                case 3:
                                    projectileID = 13
                                    break
                                case 5:
                                    projectileID = 15
                                    break
                                default:
                                    projectileID = null
                            }
                            let x = data[0] - Math.cos(data[2]) * 35
                            let y = data[1] - Math.sin(data[2]) * 35
                            if (Math.sqrt((x -= myPlayer.x) * x + (y -= myPlayer.y) * y) <= 70) reloads[projectileID] = weaponSpeed[projectileID]
                        }
                        break
                }
            })
            resolve(this)
        }
    })

    function updateReload() {
        now = Date.now()
        delta = now - lastUpdate
        lastUpdate = now
        if (inGame && myPlayer) {
            if (myPlayer.buildIndex == -1) {
                reloads[myPlayer.weaponIndex] = Math.max(0, reloads[myPlayer.weaponIndex] - delta)
            }
            if (myPlayer.weapons[0] != null) {
                reloadTimer1.style.backgroundImage = `url(../img/weapons/${weaponSrc[myPlayer.weapons[0]]}.png)`
                reloadTimer1.innerText = reloads[myPlayer.weapons[0]]
            }
            if (myPlayer.weapons[1] != null) {
                reloadTimer2.style.backgroundImage = `url(../img/weapons/${weaponSrc[myPlayer.weapons[1]]}.png)`
                reloadTimer2.style.backgroundColor = "rgba(0, 0, 0, 0.25)"
                reloadTimer2.innerText = reloads[myPlayer.weapons[1]]
            } else {
                reloadTimer2.style.backgroundImage = null
                reloadTimer2.style.backgroundColor = null
                reloadTimer2.innerText = "-"
            }
        }
        unsafeWindow.requestAnimationFrame(updateReload)
    }
    lastUpdate = Date.now()
    unsafeWindow.requestAnimationFrame(updateReload)

    function waitForElm(selector) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector))
            }

            const observer = new MutationObserver((mutations) => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector))
                    observer.disconnect()
                }
            })

            observer.observe(document.body, {
                childList: true,
                subtree: true
            })
        })
    }

    const symbol = Symbol("minimapCounter")
    Object.defineProperty(Object.prototype, "minimapCounter", {
        get() {
            return this[symbol]
        },
        set(value) {
            this[symbol] = value
            if (this.isPlayer === true && this.sid === mySID) {
                myPlayer = this
            }
        },
        configurable: true
    })

    waitForElm("#topInfoHolder").then((topInfoHolder) => {
        const style = document.createElement("style")
        style.innerHTML = `
        #reloadTimer1 {
            right: 0px;
            margin-top: 65px;
            color: #fff;
            font-size: 28px;
            background-color: rgba(0, 0, 0, 0.25);
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }

        #reloadTimer2 {
            right: 0px;
            margin-top: 120px;
            color: #fff;
            font-size: 28px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }
        `
        document.head.appendChild(style)

        topInfoHolder.appendChild(reloadTimer1)
        topInfoHolder.appendChild(reloadTimer2)
    })
    return{
        get myPlayer(){
            return myPlayer
        },
        get mySID(){return mySID}
    }
})().then(e=>_set(e))
const pingDisplay = document.getElementById("pingDisplay");
pingDisplay.style.right = "15px";
pingDisplay.style.display = "block";

// Function to change text color like a rainbow
function rainbowColor() {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        pingDisplay.style.color = `hsl(${hue}, 100%, 50%)`;
    }, 5); // Adjust the interval for speed
}

// Call the function to start the rainbow effect
rainbowColor();
//
const credit = document.createElement("div");
credit.textContent = "Made by nvthencncn";
credit.style.position = "fixed";
credit.style.bottom = "10px";
credit.style.right = "10px";
credit.style.color = "white"; // color
credit.style.fontFamily = "Arial, sans-serif"; // font
credit.style.fontSize = "14px"; // font size
//
document.body.appendChild(credit);
ocument.getElementById('loadingText').innerHTML = '';
setTimeout(() => {
    document.getElementById('loadingText').innerHTML = '';
}, 710);
document.getElementById("mainMenu").style.backgroundSize = "cover";
document.getElementById("mainMenu").style.backgroundPosition = "center";
document.getElementById("mainMenu").style.width = "100%";
document.getElementById("mainMenu").style.height = "100vh";
document.getElementById("gameName").style.textShadow = "#000000 -2px -2px 10px, black 0px -5px 1px, white 0px -5px 10px";
document.getElementById("loadingText").innerText="";

function findID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.id == tmp);
}

function findSID(tmpObj, tmp) {
    return tmpObj.find((THIS) => THIS.sid == tmp);
}

function findPlayerByID(id) {
    return findID(players, id);
}

function findPlayerBySID(sid) {
    return findSID(players, sid);
}

function findAIBySID(sid) {
    return findSID(ais, sid);
}

function findObjectBySid(sid) {
    return findSID(gameObjects, sid);
}

function findProjectileBySid(sid) {
    return findSID(gameObjects, sid);
}

let gameName = getEl("gameName");
gameName.innerText = "!!";
let adCard = getEl("adCard");
adCard.remove();
let promoImageHolder = getEl("promoImgHolder");
promoImageHolder.remove();

let chatButton = getEl("chatButton");
chatButton.remove();
let gameCanvas = getEl("gameCanvas");
let mainContext = gameCanvas.getContext("2d");
let mapDisplay = getEl("mapDisplay");
let mapContext = mapDisplay.getContext("2d");
mapDisplay.width = 300;
mapDisplay.height = 300;
let storeMenu = getEl("storeMenu");
let storeHolder = getEl("storeHolder");
let upgradeHolder = getEl("upgradeHolder");
let upgradeCounter = getEl("upgradeCounter");
let chatBox = getEl("chatBox");
chatBox.autocomplete = "off";
chatBox.style.textAlign = "center";
chatBox.style.width = "18em";
let chatHolder = getEl("chatHolder");
let actionBar = getEl("actionBar");
let leaderboardData = getEl("leaderboardData");
let itemInfoHolder = getEl("itemInfoHolder");
let menuCardHolder = getEl("menuCardHolder");
let mainMenu = getEl("mainMenu");
getEl("mainMenu").style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.hQgq0pUmX6a5BI7TXgmm7QHaEK&pid=Api&P=0&h=220')";
let diedText = getEl("diedText");
let screenWidth;
let screenHeight;
let maxScreenWidth = config.maxScreenWidth;
let maxScreenHeight = config.maxScreenHeight;
let pixelDensity = 1;
let delta;
let now;
let lastUpdate = performance.now();
let camX;
let camY;
let tmpDir;
let mouseX = 0;
let mouseY = 0;
let allianceMenu = getEl("allianceMenu");
let waterMult = 1;
let waterPlus = 0;

let outlineColor = "#525252";
let darkOutlineColor = "#3d3f42";
let outlineWidth = 5.5;

let firstSetup = true;
let keys = {};
let moveKeys = {
    87: [0, -1],
    38: [0, -1],
    83: [0, 1],
    40: [0, 1],
    65: [-1, 0],
    37: [-1, 0],
    68: [1, 0],
    39: [1, 0],
};
let attackState = 0;
let inGame = false;

let macro = {};
let mills = {
    place: 0,
    placeSpawnPads: 0
};
let lastDir;

let lastLeaderboardData = [];

// ON LOAD:
let inWindow = true;
window.onblur = function() {
    inWindow = false;
};
window.onfocus = function() {
    inWindow = true;
    if (player && player.alive) {
        // resetMoveDir();
    }
};
let ms = {
    avg: 0,
    max: 0,
    min: 0,
    delay: 0
}
function pingSocketResponse() {
    let pingTime = window.pingTime;
    const pingDisplay = document.getElementById("pingDisplay")
    pingDisplay.innerText = "Ping: " + pingTime + " ms`";
    if (pingTime > ms.max || isNaN(ms.max)) {
        ms.max = pingTime;
    }
    if (pingTime < ms.min || isNaN(ms.min)) {
        ms.min = pingTime;
    }

    // if (pingTime >= 90) {
    //     doAutoQ = true;
    // } else {
    //     doAutoQ = false;
    // }
}

let placeVisible = [];

/** CLASS CODES */
// @name         Music Menu ✝ Shared by Pashka
// @namespace    Join our Discord — dsc.gg/moo-moo
// @version      1.0
// @description  Join our Discord — dsc.gg/moo-moo
// @author       Danil, Shared by Pashka
// @icon         https://r2.e-z.host/b178d1da-d695-49e8-a6c1-9a15c1ddf697/lfsn1c1t.png
// @match        https://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @license MIT
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    let musicMenuVisible = true;
    const musicMenu = document.createElement("div");
    musicMenu.id = "music-menu";
    document.body.appendChild(musicMenu);
    const music0Button = document.createElement("button");
    music0Button.textContent = "Biad";
    musicMenu.appendChild(music0Button);
    const music1Button = document.createElement("button");
    music1Button.textContent = "Falling";
    musicMenu.appendChild(music1Button);
    const music2Button = document.createElement("button");
    music2Button.textContent = "Lonely_Way";
    musicMenu.appendChild(music2Button);
    const music3Button = document.createElement("button");
    music3Button.textContent = "Rezz - Edge";
    musicMenu.appendChild(music3Button);
    const music4Button = document.createElement("button");
    music4Button.textContent = "Fale Music";
    musicMenu.appendChild(music4Button);
    music0Button.addEventListener("click", () => {
        playMusic("https://cdn.discordapp.com/attachments/1016399895885795368/1087483201666174976/Burn_It_All_Down_ft._PVRIS_Worlds_2021_-_League_of_Legends.mp3");
    });

    music1Button.addEventListener("click", () => {
        playMusic("https://cdn.discordapp.com/attachments/1016399895885795368/1087483669217812510/Rival_-_Falling_with_CRVN__NCS_Release_.mp3");
    });

    music2Button.addEventListener("click", () => {
        playMusic("https://cdn.discordapp.com/attachments/1016399895885795368/1087487659867385866/Rival_-_Lonely_Way_ft._Caravn__Official_Lyric_Video_.mp3");
    });

    music3Button.addEventListener("click", () => {
        playMusic("https://cdn.discordapp.com/attachments/1016399895885795368/1087487963790843944/REZZ_-_Edge.mp3");
    });

    music4Button.addEventListener("click", () => {
        playMusic("music.mp3");
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "m") {
            musicMenuVisible = !musicMenuVisible;
            if (musicMenuVisible) {
                musicMenu.classList.add("slide-in");
                musicMenu.classList.remove("slide-out");
            } else {
                musicMenu.classList.remove("slide-in");
                musicMenu.classList.add("slide-out");
            }
        }
    });
    function playMusic(src) {
        const audio = document.querySelector("#music");
        if (audio) {
            audio.pause();
            audio.remove();
        }
        const newAudio = document.createElement("audio");
        newAudio.id = "music";
        newAudio.src = src;
        newAudio.loop = true;
        newAudio.play();
        document.body.appendChild(newAudio);
    }
    GM_addStyle(`
#music-menu {
position: fixed;
top: 20px;
left: 20px;
background-color: #1c1c1c;
color: #fff;
border: 2px solid #7f7f7f;
padding: 20px;
display: block;
z-index: 999;
border-radius: 10px;
box-shadow: 0px 0px 20px #7f7f7f;
opacity: 0;
transition: opacity 0.5s, transform 0.5s;
transform: translateY(-100%);
font-family: 'Helvetica Neue', sans-serif;
font-size: 20px;
}
           #music-menu.slide-in {
        opacity: 1;
        transform: translateY(0);
    }

    #music-menu.slide-out {
        opacity: 0;
        transform: translateY(-100%);
    }

    #music-menu h2 {
        margin: 0 0 20px;
        font-size: 24px;
        text-align: center;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }

    #music-menu button {
        display: block;
        margin: 20px auto;
        background-color: #1abc9c;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }

    #music-menu button:hover {
        background-color: #16a085;
    }
`);
})();
let PrePlaceCount;
let nameColor = "#ffffff";
let enemyNameColor = "#ffffff";
let reloadBarColor = "";
let healthBarColor = "";
let shameBarColor = "";
let enemyHealthBarColor = "#782F44";
let damageTextColor = "#782F44";
let healTextColor = "#60478D";
let myObjectHealth = "";
let enemyObjectHealth = "#ff6363";
let autoPushLine = "#ffffff";

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 9) {
        const chatHolder = document.getElementById("menuChatDiv");
        if (chatHolder) {
            const currentDisplay = chatHolder.style.display;
            chatHolder.style.display = currentDisplay === "none" ? "block" : "none";
        }
    }
    if (event.keyCode === 192) {
        const chatHolder = document.getElementById("gameUI");
        if (chatHolder) {
            const currentDisplay = chatHolder.style.display;
            chatHolder.style.display = currentDisplay === "none" ? "block" : "none";
        }
    }
    if (event.keyCode === 99) {
        const chatHolder = document.getElementById("gameCanvas");
        if (chatHolder) {
            const currentDisplay = chatHolder.style.display;
            chatHolder.style.display = currentDisplay === "none" ? "block" : "none";
        }
    }
});
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function getRandomBrightRGBColor() {
    const r = Math.floor(Math.random() * 128) + 128; // Red component (between 128 and 255)
    const g = Math.floor(Math.random() * 128) + 128; // Green component (between 128 and 255)
    const b = Math.floor(Math.random() * 128) + 128; // Blue component (between 128 and 255)
    return `rgb(${r}, ${g}, ${b})`;
}
// Define a function to generate a random rainbowish color
function getRandomRainbowishColor() {
    const hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360 (for the entire color spectrum)
    const saturation = '100%'; // Full saturation for vibrant colors
    const lightness = '50%'; // Balanced lightness
    return `hsl(${hue}, ${saturation}, ${lightness})`;
}
// AUTO RELOAD
setInterval(() => window.follmoo && follmoo(), 10);
window.location.native_resolution = true;
var autoreloadloop;
var autoreloadenough = 0;
autoreloadloop = setInterval(function() {
    if (autoreloadenough < 200) {
        if (document.getElementById("loadingText").innerHTML == `disconnected<a href="javascript:window.location.href=window.location.href" class="ytLink">reload</a>`) {
            document.title = "Reloading";
            clearInterval(autoreloadloop);
            setTimeout(function() { document.title = "Moo Moo"; }, 1000)
            location.reload();
        }
        autoreloadenough++;
    }
    else if (autoreloadenough >= 300) {
        clearInterval(autoreloadloop);
        document.title = "Reloaded";
        setTimeout(function() { document.title = "Moo Moo"; }, 1000)
    }
}, 50);
let useHack = true;
let log = console.log;
let testMode = window.location.hostname == "127.0.0.1";
let imueheua = false;
let circleScale = 1.5
let namechanger = false;
let inantiantibull = false;
let spin = {
    degree: 45,
    toggle: false,
    angle: 0
}

//ANTI KICK MOTHER FUCKER
// SEND MESSAGE:
function receiveChat(sid, message) {
    if (/img/i.test(message)) return; // Anti img kick
    if (/iframe/i.test(message)) return;
    if (/ZOV/i.test(message)) return;
    let kawaii = false;
    let tmpPlayer = findPlayerBySID(sid);
    addMenuChText($tmpPlayer.name)[$tmpPlayer.sid], message, "white";
    tmpPlayer.chatMessage = message;
    tmpPlayer.chatCountdown = config.chatCountdown;
}
// BOOST 1 TICK \\
if (e.keyCode == 68) {
    storeEquip(0,1)
    setTimeout(() => {
        place(inv.boostPad);
        setTimeout(()=>{
            weapon('secondary');
            storeEquip(53, 0);
            hit(true);
            setTimeout(() => {
                weapon('primary');
                storeEquip(7, 0);
                setTimeout( () => {
                    storeEquip(6, 0);
                    setTimeout(() => {
                        hit(false);
                        storeEquip(11, 1);
                    }, 80)
                }, 255);
            }, 140);
        }, 1.5);
    }, 150);
};
//ANTI KICK MOTHER FUCKER
// SEND MESSAGE:
function receiveChat(sid, message) {
    if (/img/i.test(message)) return; // Anti img kick
    if (/iframe/i.test(message)) return;
    if (/ZOV/i.test(message)) return;
    let kawaii = false;
    let tmpPlayer = findPlayerBySID(sid);
    addMenuChText($tmpPlayer.name[$tmpPlayer.sid], message, "white");
    tmpPlayer.chatMessage = message;
    tmpPlayer.chatCountdown = config.chatCountdown;
}
if (!firstSetup) {
    waterMult += waterPlus * config.waveSpeed * delta;
    if (waterMult >= config.waveMax) {
        waterMult = config.waveMax;
        waterPlus = -1;
    } else if (waterMult <= 1) {
        waterMult = waterPlus = 1;
    }
    mainContext.globalAlpha = 1;
    mainContext.fillStyle = "#dbc666";
    renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding);
    mainContext.fillStyle = "#91b2db";
    renderWaterBodies(xOffset, yOffset, mainContext, (waterMult - 1) * 250);
}
let biomemap = false;
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");


function map() {
    if(getEl("biomemap").checked) {
        ctx.beginPath();
        for (let i = 0; i <= 1; i++) {
            $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
        }
    }
    window.requestAnimFrame(map);
}
map();
let keys1 = {};
addEventListener("keydown", function(event) {
    if (!keys[event.keyCode]) {
        keys[event.keyCode] = true;
        if (event.keyCode == 0) {
            biomemap = !biomemap;
        }
    }
});
window.addEventListener("keyup", function(event) {
    if (keys[event.keyCode]) {
        keys[event.keyCode] = false;
    }
});

let pingdisplay = false;
let canvas2 = document.getElementById("gameCanvas");
let ctx2 = canvas2.getContext("2d");

function display() {
    if(getEl("pingdisplay").checked) {
        ctx.beginPath();
        for (let i = 0; i <= 1; i++) {
            let ping = document.createElement("div");ё
            ping = document.getElementById("pingDisplay");
            ping.style.top = "13px";
            ping.style.fontSize = "15px";
            ping.style.display = "block";
            ping.style.left = "730px";
            document.body.append(ping);
        }
    }
    window.requestAnimFrame(display);
}
display();
let keys2 = {};
addEventListener("keydown", function(event) {
    if (!keys[event.keyCode]) {
        keys[event.keyCode] = true;
        if (event.keyCode == 0) {
            pingdisplay = !pingdisplay;
        }
    }
});
window.addEventListener("keyup", function(event) {
    if (keys[event.keyCode]) {
        keys[event.keyCode] = false;
    }
});

const localTexture = [{ creationDate: 1539776483046, description: "", groupId: "", id: "Redirect_1539776483046", name: "Halloween", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/GB4qvv0.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_23.png" } }, { destination: "https://i.imgur.com/A3HllcC.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_46.png" } }, { destination: "https://i.imgur.com/IB4iBZm.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_10.png" } }, { destination: "https://i.imgur.com/ABHSOd9.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_48.png" } }, { destination: "https://i.imgur.com/cvb9q8g.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_4.png" } }, { destination: "https://i.imgur.com/gGGkBnz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_27.png" } }, { destination: "https://i.imgur.com/GB4qvv0.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_23.png" } }, { destination: "https://i.imgur.com/A3HllcC.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_46.png" } }, { destination: "https://i.imgur.com/IB4iBZm.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_10.png" } }, { destination: "https://i.imgur.com/ABHSOd9.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_48.png" } }, { destination: "https://i.imgur.com/cvb9q8g.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_4.png" } }, { destination: "https://i.imgur.com/gGGkBnz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_27.png" } }, { destination: "https://i.imgur.com/GB4qvv0.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_23.png" } }, { destination: "https://i.imgur.com/A3HllcC.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_46.png" } }, { destination: "https://i.imgur.com/IB4iBZm.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_10.png" } }, { destination: "https://i.imgur.com/ABHSOd9.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_48.png" } }, { destination: "https://i.imgur.com/cvb9q8g.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_4.png" } }, { destination: "https://i.imgur.com/gGGkBnz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_27.png" } }, { destination: "https://i.imgur.com/GB4qvv0.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_23.png" } }, { destination: "https://i.imgur.com/A3HllcC.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_46.png" } }, { destination: "https://i.imgur.com/IB4iBZm.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_10.png" } }, { destination: "https://i.imgur.com/ABHSOd9.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_48.png" } }, { destination: "https://i.imgur.com/cvb9q8g.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_4.png" } }, { destination: "https://i.imgur.com/gGGkBnz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_27.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1537058120972, description: "", groupId: "", id: "Redirect_1537058120972", name: "Texture Pack Sandbox - Ruby", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_r.png" } }, { destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_r.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1537030341343, description: "", groupId: "", id: "Redirect_1537030341343", name: "Texture Pack Private - Ruby", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/grab_1_r.png" } }, { destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/grab_1_r.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1536927560373, description: "", groupId: "", id: "Redirect_1536927560373", name: "Texture Pack - Ruby", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_r.png" } }, { destination: "https://i.imgur.com/CDAmjux.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_r.png" } }, { destination: "https://i.imgur.com/UY7SV7j.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_r.png" } }, { destination: "https://i.imgur.com/tmUzurk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_r.png" } }, { destination: "https://i.imgur.com/oRXUfW8.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_r.png" } }, { destination: "https://i.imgur.com/6ayjbIz.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_r.png" } }, { destination: "https://i.imgur.com/vxLZW0S.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_r.png" } }, { destination: "https://i.imgur.com/UZ2HcQw.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_r.png" } }, { destination: "https://i.imgur.com/kr8H9g7.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_r.png" } }, { destination: "https://i.imgur.com/V9dzAbF.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_r.png" } }, { destination: "https://i.imgur.com/aEs3FSU.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_r.png" } }, { destination: "https://i.imgur.com/DRzBdFX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_g.png" } }, { destination: "https://i.imgur.com/7kbtWfk.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_d.png" } }, { destination: "https://i.imgur.com/wV42LEE.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/grab_1_r.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1530619393230, description: "", groupId: "", id: "Redirect_1530619393230", name: "Texture Pack Sandbox - Weapons - Part 2", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_d.png" } }, { destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_g.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1530619364482, description: "", groupId: "", id: "Redirect_1530619364482", name: "Texture Pack Sandbox - Weapons - Part 1", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_d.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_d.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1530619326443, description: "", groupId: "", id: "Redirect_1530619326443", name: "Texture Pack Sandbox - Hats", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_52.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_52.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1530619290416, description: "", groupId: "", id: "Redirect_1530619290416", name: "Texture Pack Sandbox - Animals", objectType: "rule", pairs: [{ destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animal" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/chicken_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/chicken_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/enemy.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/enemy.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1526664529663, description: "", groupId: "", id: "Redirect_1526664529663", name: "Texture Pack Private - Weapons - Part 2", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/spear_1_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/spear_1_d.png" } }, { destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/spear_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/spear_1_g.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1526664492125, description: "", groupId: "", id: "Redirect_1526664492125", name: "Texture Pack - Weapons - Part 2", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/TRqDlgX.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/OU5os0h.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/aAJyHBB.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_axe_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/WPWU8zC.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/Fg93gj3.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/great_hammer_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/4ZxIJQM.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/hSqLP3t.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/shield_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/h5jqSRp.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_d.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/wOTr8TG.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/sword_1_g.png" } }, { destination: "https://i.imgur.com/QKBc2ou.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/samurai_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_g.png" } }, { destination: "https://i.imgur.com/jKDdyvc.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_g.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1514047471157, description: "", groupId: "", id: "Redirect_1514047471157", name: "Texture Pack Private - Animals", objectType: "rule", pairs: [{ destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/bull_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/wolf_1.png" } }, { destination: "https://i.imgur.com/wANrStd.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/chicken_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/bull_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/wolf_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/chicken_1.png" } }, { destination: "https://i.imgur.com/MKOvEr6.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/animals/enemy.png" } }, { destination: "https://i.imgur.com/MKOvEr6.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/animals/enemy.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1514046266836, description: "", groupId: "", id: "Redirect_1514046266836", name: "Texture Pack - Animals", objectType: "rule", pairs: [{ destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/chicken_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_2.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/bull_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/wolf_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/cow_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/pig_1.png" } }, { destination: "", source: { key: "Url", operator: "Contains", value: ".././img/animals/chicken_1.png" } }, { destination: "https://i.imgur.com/MKOvEr6.png", source: { key: "Url", operator: "Contains", value: ".././img/animals/enemy.png" } }, { destination: "https://i.imgur.com/MKOvEr6.png", source: { key: "Url", operator: "Contains", value: ".././img/animals/enemy.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1509892380958, description: "", groupId: "", id: "Redirect_1509892380958", name: "Texture Pack Private - Weapons - Part 1", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/weapons/bat_1_d.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/weapons/bat_1_d.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1509804753627, description: "", groupId: "", id: "Redirect_1509804753627", name: "Texture Pack - Weapons - Part 1", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/DTd8Xl6.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_g.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/RnkmWgs.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/stick_1_d.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/ivLPh10.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_g.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_d.png" } }, { destination: "https://i.imgur.com/phXTNsa.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bat_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/ROTb7Ks.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/dagger_1_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/qu7HHT5.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/bow_1_d.png" } }, { destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/DVjCdwI.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/crossbow_2_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_d.png" } }, { destination: "https://i.imgur.com/HSWcyku.png", source: { key: "Url", operator: "Contains", value: ".././img/weapons/spear_1_d.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1508326116062, description: "", groupId: "", id: "Redirect_1508326116062", name: "Texture Pack Private - Hats", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: "http://dev.moomoo.io/img/hats/hat_52.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: "https://dev.moomoo.io/img/hats/hat_52.png" } }], ruleType: "Redirect", status: "Active" }, { creationDate: 1507417062355, description: "", groupId: "", id: "Redirect_1507417062355", name: "Texture Pack - Hats", objectType: "rule", pairs: [{ destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/pe3Yx3F.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_40.png" } }, { destination: "https://i.imgur.com/vAOzlyY.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_7.png" } }, { destination: "https://i.imgur.com/uYgDtcZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_16.png" } }, { destination: "https://i.imgur.com/gJY7sM6.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_9.png" } }, { destination: "https://i.imgur.com/JPMqgSc.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_31.png" } }, { destination: "https://i.imgur.com/4ddZert.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_21.png" } }, { destination: "https://i.imgur.com/sULkUZT.png", source: { key: "Url", operator: "Contains", value: ".././img/accessories/access_19.png" } }, { destination: "https://i.imgur.com/YRQ8Ybq.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_15.png" } }, { destination: "https://i.imgur.com/EwkbsHN.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_13.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11.png" } }, { destination: "https://i.imgur.com/in5H6vw.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_18.png" } }, { destination: "https://i.imgur.com/f5uhWCk.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_20.png" } }, { destination: "https://i.imgur.com/yfqME8H.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_p.png" } }, { destination: "https://i.imgur.com/V8JrIwv.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_11_top.png" } }, { destination: "https://i.imgur.com/s7Cxc9y.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_14_top.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/I0xGtyZ.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_26.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_52.png" } }, { destination: "https://i.imgur.com/hmJrVQz.png", source: { key: "Url", operator: "Contains", value: ".././img/hats/hat_52.png" } }], ruleType: "Redirect", status: "Active" }];
