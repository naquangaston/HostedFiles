// ==UserScript==
// @name        Diep.io Clones (Eng)
// @description Allows you to command more than one tank
// @author      https://greasyfork.org/ru/users/393261-фелкис
// @version     Full - 1
// @include     http://*.io/*
// @include     https://*.io/*
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-start
// @namespace https://greasyfork.org/users/393261
// ==/UserScript==

//Keybindings
//V (Hold) - Disabling script while holding, but your clones keep performing your last actions

//Why this one? there's guy with 1.6 version!
// 1) Well, I have tried to reduce lag caused by script as much as it's possible for me
// 2) Looks like that only I have to add keybind "V" to disable script while playing, so now you both have power and tactical superiority

//Other
//To thank me you could add "[Java]" tag to your player name, let others know that you're cool programmer :)

//Diep.io keybind packages
var KeycodesTrick;
//KeycodesTrick = [87,65,83,68,13,32,16,69,67,49,50,51,52,53,54,55,56,77,85,72,75,79] //Full (All keys enabled, but it's laggy a some)
KeycodesTrick = [87,65,83,68,13,32,16,69,67,49,50,51,52,53,54,55,56,77,85,72] //NoSand (All keys expect sandbox)
//KeycodesTrick = [87,65,83,68,13,32,16,69,67,49,50,51,52,53,54,55,56,77,85] //Everymode (Disabled "H" key)
//KeycodesTrick = [87,65,83,68,13,32,16,69,67,49,50,51,52,53,54,55,56] //Enough (Disabled "U" and "M" key)
//KeycodesTrick = [87,65,83,68,13,32,16,69,67] //NoUpgrades (Disabled keys to upgrade the tank)
//KeycodesTrick = [87,65,83,68,13,69,67] //NoMouse (Disabled Shift and Emptyspace keys)
//KeycodesTrick = [87,65,83,68,13] //Minimal (Only W,A,S,D and Enter, disabled "E" and "C")

var KeycodesState = [];
var MouseState = [];
GM_setValue("Keys86",false);

//Connecting the keyboard
document.addEventListener("keyup",function(key){
    if (document.hasFocus()){
        key = key.keyCode || key.which;
        GM_setValue("Keys"+key,false);
        KeycodesState[key] = false;
    };
});
document.addEventListener("keydown",function(key){
    if (document.hasFocus()){
        key = key.keyCode || key.which;
        GM_setValue("Keys"+key,true);
        KeycodesState[key] = true;
    };
});

//Connecting the mouse
document.addEventListener("mouseup",function(but){
    if (document.hasFocus()){
        GM_setValue("Click"+but.button,false);
        MouseState[but.button] = false;
    };
});
document.addEventListener("mousedown",function(but){
    if (document.hasFocus()){
        GM_setValue("Click"+but.button,true);
        MouseState[but.button] = true;
    };
});
document.addEventListener("mousemove",function(mouse){
    if (document.hasFocus()){
        GM_setValue("GlobalX",mouse.clientX/window.innerWidth);
        GM_setValue("GlobalY",mouse.clientY/window.innerHeight);
    };
});

//Trickrate, I have considered that 25ms is the best.
function Trick(){
    if (!GM_getValue("Keys"+86) && !document.hasFocus()){
        //Sync keyboard
        KeycodesTrick.forEach(function(key){
            var GState = GM_getValue("Keys"+key);
            if (KeycodesState[key] != GState){
                KeycodesState[key] = GState;
                var Reply = document.createEvent("Event");
                if (GState) {
                    Reply.initEvent("keydown",true,true);
                    Reply.keyCode = key;
                } else {
                    Reply.initEvent("keyup",true,true);
                    Reply.keyCode = key;
                };
                window.dispatchEvent(Reply);
            };
        });
        //Sync mouse
        if (typeof canvas != undefined){
            var LocalX = GM_getValue("GlobalX")*window.innerWidth;
            var LocalY = GM_getValue("GlobalY")*window.innerHeight;
            if (isFinite(LocalX)&&isFinite(LocalY)){
                MouseState.forEach(function(state,but){
                    var GMouseState = GM_getValue("Click"+but);
                    if (GMouseState != state){
                        MouseState[but] = GMouseState;
                        if (GMouseState){
                            canvas.dispatchEvent(new MouseEvent('mousedown',{'clientX':LocalX,'clientY':LocalY,'button':0,'mozPressure':1.0}));
                        } else {
                            canvas.dispatchEvent(new MouseEvent('mouseup',{'clientX':LocalX,'clientY':LocalY,'button':0,'mozPressure':1.0}));
                        };
                    };
                });
                canvas.dispatchEvent(new MouseEvent('mousemove',{'clientX':LocalX,'clientY':LocalY}));
            };
        };
    };
    setTimeout(Trick,25);
};

alert("The multiscreen script have been loaded!")
setTimeout(Trick,25);