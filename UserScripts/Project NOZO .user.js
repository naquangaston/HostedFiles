// ==UserScript==
// @name        Project NOZO
// @namespace    -
// @version     1.2
// @description Made By Gaston#1799
// @author      Gaston#1799
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @match        *://tjmoomoo.ml/*
// @grant        none
// @require https://ksw2-center.glitch.me/users/fzb/antiinvis_1
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://code.jquery.com/ui/1.12.0/jquery-ui.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// ==/UserScript==
//setInterval(()=>{window['click']&&(click())},1000);
localStorage.moofoll=false
window.dmgMultO=.2
window.maxHealth=100
window. players={

}
changeHealth = function(e) {
    if (e > 0 && window.health >= window.maxHealth)
        return !1;
    e < 0 && window.skin && (e *= window.skin.dmgMult || 1),
        e < 0 && window.tail && (e *= window.tail.dmgMult || 1),
        e < 0 && (window.hitTime = Date.now())
}
document.onload=function(e){
    console.log('loaded')
}
window.oldH=100;
var goagain =1;
window.dps=0;
window. healths=[];
window.didHeal=1;
window.neardeath=0;
window.selects=[];
blocking=0
window.blocks=[];
setInterval(()=>{
if(!blocking&&myPlayer.weapon==11){Prime()}
},1000);
window. foodR=[];
window. woodR=[];
window. stoneR=[];
setInterval(()=>{localStorage.moofoll=false
    window. allresource=[];
    window. allnonresource=[];
    for(let _i in myobjs){
        if(myobjs[_i].resource&&getDistance(myobjs[_i].x,myobjs[_i].y,myPlayer.x,myPlayer.y)<1000){
            allresource.push([myobjs[_i],getDistance(myobjs[_i].x,myobjs[_i].y,myPlayer.x,myPlayer.y)])
        }else{allnonresource.push([myobjs[_i],getDistance(myobjs[_i].x,myobjs[_i].y,myPlayer.x,myPlayer.y)])}
    }
    if(allresource.length){
        allresource.sort((a,b)=>b[1]-a[1]).filter(test=>(test[0].data[1][5]==1)).filter(e=>{
            var t=true;
            foodR.forEach(item=>{
                if(item[0].x==e[0].x&&!!t&&e[0].y==item[0].y){
                    t=false
                }
            })
            return t
        }).forEach(e=>{foodR.push(e)})
        allresource.sort((a,b)=>b[1]-a[1]).filter(test=>(test[0].data[1][5]==0)).filter(e=>{
            var t=true;
            woodR.forEach(item=>{
                if(item[0].x==e[0].x&&!!t&&e[0].y==item[0].y){
                    t=false
                }
            })
            return t
        }).forEach(e=>{woodR.push(e)})
        allresource.sort((a,b)=>b[1]-a[1]).filter(test=>(test[0].data[1][5]==2)).filter(e=>{
            var t=true;
            stoneR.forEach(item=>{
                if(item[0].x==e[0].x&&!!t&&e[0].y==item[0].y){
                    t=false
                }
            })
            return t
        }).forEach(e=>{stoneR.push(e)})
    }
    try{window.nboj=blocks.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        for(let i in myobjs){
            let is=(()=>{return info2.EN?{far:getDistance(myPlayer.x,myPlayer.y,nearestEnemy[1],nearestEnemy[2])>500}:{ip:info2.EN}})();
            if(!info2.trapped&&getDistance(myobjs[i].x,myobjs[i].y,myPlayer.x,myPlayer.y)<150&&window.resb&&(is.ip==0||is.far)){
                hat(window.caninsta?40:6);
                atk(angleRadians(myPlayer,myobjs[i]));
            }
        }
       }catch(err){console.log(err)};
    window.hatC(0);
},0)
var pingtoggle=0;
function checkArea(){
    try{
        neardeath=0;
        if(window.Bots&&isCombat)
        for(let i in myobjs){
            if(!myobjs[i].resource&&myobjs[i].spike&&myobjs[i].pid!=myPlayer.id){
                let is=(()=>{return info2.EN?
                    {far:getDistance(myPlayer.x,myPlayer.y,myobjs[i].x,myobjs[i].y)>info2.range,dist:getDistance(myPlayer.x,myPlayer.y,myobjs[i].x,myobjs[i].y)}:
                {ip:info2.EN,dist:getDistance(myPlayer.x,myPlayer.y,myobjs[i].x,myobjs[i].y)}})();
                if(!info2.trapped&&(is.dist<info2.range+20)){
                    atk(angleRadians(myPlayer,myobjs[i]));
                    hat(40);
                    move(null);
                    Prime()
                    neardeath=1;
                }
            }
        }
    }
    catch(err){//myojs in not defined};
    }
}
setInterval(checkArea,150);
let hue = 0;
let replaceInterval = setInterval(() => {
    if (CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() { if (this.fillStyle == "#8ecc51") this.fillStyle = `hsl(${hue}, 100%, 50%)`; return oldFunc.call(this, ...arguments); })(CanvasRenderingContext2D.prototype.roundRect);
        clearInterval(replaceInterval);
    }}, 10);

function changeHue() {
    hue += Math.random() * 999999999999999999999999999;
}

setInterval(changeHue, 500);
var HP = 34,
    R1 = 0,
    R2 = 0,
    R3 = 0,
    R1C = "#00FF00",
    R2C = "#FF0000",
    R3C = "#0000FF",
    TeamD = "#cc5151",
    TeamO = "#8ecc51",
    HPDATA,
    Maxreload
wdone=1;
window.myobjs={};
$('#gameCanvas').css('cursor', 'url(http://cur.cursors-4u.net/user/use-1`/use153.cur), default');
function rnag(){
    autoaim = true;
    doNewSend(["5", [secondary, true]]);
    doNewSend(["7", [1]]);
    setTimeout(() => {
        doNewSend(["13c", [0, 53, 0]]);
        doNewSend(["6", [12]]);
        doNewSend(["13c", [0, 19, 1]]);
    }, 100);
    setTimeout(() => {
        doNewSend(["6", [15]]);
        doNewSend(["13c", [0, 21, 1]]);
    }, 200);
    setTimeout(() => {
        doNewSend(["7", [1]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 0, 0]]);
        if (myPlayer.y < 2400) {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 15, 0]]);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 31, 0]]);
        } else if (isEnemyNear == true) {
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 6, 0]]);
        } else {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
        }
        again=1
        setTimeout(()=>{doNewSend(["5", [primary, true]]);},info2.ss+100)
        autoaim = false;
    }, 300);
}
var toggles=0;
function looper(){
    if(window.again){
    try{if(eval(localStorage.ranged)&&Bots.IsSlave){setTimeout(()=>{localStorage.ranged=0},100);rnag()};}catch(rr){};
    }
    try{if(eval(localStorage.atking)&&Bots.IsSlave){toggles=!toggles;setTimeout(()=>{localStorage.atking=0},100);toggles?doNewSend(['c',[1]]):doNewSend(['c',[null]])};}catch(rr){};
    setTimeout(looper,0);
};
looper();
window.rnag=rnag;
Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
function gDir(dir){
    var side;
    var topL=[-2.90,-2.80,-2.70,-2.60,-2.50,-2.40,-2.30,-2.20,-2.10,-2.00,-1.90,-1.80,-1.70,-1.60];
    var topR=[-1.50,-1.40,-1.30,-1.20,-1.10,-1.00,-0.90,-0.80,-0.70,-0.60,-0.50,-0.40,-0.30,-0.20,-0.10];
    var botR=[0.00,0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.10,1.20,1.30,1.40,1.50]
    var botL=[1.60,1.70,1.80,1.90,2.00,2.10,2.20,2.30,2.40,2.50,2.60,2.70,2.80,2.90];
    if(moveDir.between(1.6,0)){console.log('Bottom right');side=topR};
    if(moveDir.between(1.6,3)){console.log('Bottom left');side=topL};
    if(moveDir.between(-1.5,-2.9)){console.log('Top left');side=botL};
    if(moveDir.between(-1.5,0)){console.log('Top right');side=botR};
    return side
}
function WIPS(){
    var topL=[-2.90,-2.80,-2.70,-2.60,-2.50,-2.40,-2.30,-2.20,-2.10,-2.00,-1.90,-1.80,-1.70,-1.60];
    var topR=[-1.50,-1.40,-1.30,-1.20,-1.10,-1.00,-0.90,-0.80,-0.70,-0.60,-0.50,-0.40,-0.30,-0.20,-0.10];
    var botR=[0.00,0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.10,1.20,1.30,1.40,1.50]
    var botL=[1.60,1.70,1.80,1.90,2.00,2.10,2.20,2.30,2.40,2.50,2.60,2.70,2.80,2.90];
    if(!wdone){return}
    var xs=[14365-myPlayer.x,14365-myPlayer.y];
    var sf=0,wheret
    if(!xs[1]<100&&!(xs[1]>14000)){
        if(xs[0]<100){console.log('Right side');sf=1;wheret=gDir(moveDir)}
        if(xs[0]>14000){console.log('Left Side');sf=1;wheret=gDir(moveDir)}
    }else if(!(xs[0]<100)&&!(xs[0]>14000)){
        if(xs[1]<100){console.log('Bottom side');sf=1;wheret=gDir(moveDir)}
        if(xs[1]>14000){console.log('Top Side');sf=1;wheret=gDir(moveDir)}
    }else{
        if(xs[0]<100&&xs[1]<100){console.log('Player BR');sf=0;wheret=(botL)}
        if(xs[0]>14000&&xs[1]>14000){console.log('Player TR');sf=0;wheret=(topL)}
        if(xs[0]<100&&xs[1]>14000){console.log('Player TR');sf=0;wheret=(topR)}
        if(xs[0]>14000&&xs[1]<100){console.log('Player BL');sf=0;wheret=(botR)}
    }
    if(sf){window.dirs=wheret;wheret=random(wheret);moveDir=wheret}else moveDir=random(dirs);//(console.log('NO side yet'),(window.dir1=random(window.arr1=[],(()=>{for(let i=moveDir/0.01745329251;i<(moveDir/0.01745329251)+45;i++){arr1.push(i)}})(),arr1),random([moveDir-tr(dir1)],[moveDir+tr(dir1)])));
    if(wdone){wdone=0;setTimeout(e=>{wdone=1},10000)}
}
window.WIPS=WIPS;
window. bottomSIde=[-0.78,-0.78,-0.79,-0.79,-0.79,-0.79,-0.79,-0.82,-0.82,-1.05,-1.05,-1.05,-1.31,-1.62,-1.62,-1.62];
window. topSide=[2.23,2.23,2.23,2.23,2.23,2.23,2.14,2.14,2.03,1.89,1.89,1.89,1.62,1.62,1.49,1.49,1.29,1.29,1.15,1.15];
window. leftSide=[-0.84,-0.83,-0.83,-0.83,-0.82,-0.63,-0.63,-0.48,-0.48,-0.19,-0.19,-0.19,0.15,0.15,0.36,0.36,0.57,0.57,0.59,0.5];
window. rigthSide=[-2.31,-2.35,-2.35,-2.49,-2.49,-2.82,-2.82,-2.82,-3.13,-3.13,2.97,2.97,2.84,2.84,2.65,2.48,2.48,2.48,2.43,2.43];
window.dirs=leftSide;
var HasRange
window. scores={}
moveDir=0;
function fillA(a,b,c=1){
    var d=[];
    for(let i=a;i<b;i+=c){d.push(i);}
    return d;
}
window.fillA=fillA
window.NUmbers=0;
setTimeout(()=>{
    Bots.tb=1;Bots.bt=1
    setInterval(()=>{Bots.afkM&&(
        (()=>{
            try{if (info2.si.id == 10) {
                if (info2.far) { Sec();atk(90**100) } else { Prime() }
            };}catch(err){}
            move(info2.info2.where);
        })()
    )},100)
    location.hash=='#crash'&&(doNewSend(['sp',[1]]),setTimeout(crash,5000));
    window.Sinsta=1;
    setInterval(()=>{
        Bots.aatk&&!info2.far&&myPlayer.accessory==11&&(acc(0));
        window.en4&&Bots.atk&&info2.NED>info2.range*2&&!info2.trapped&&info2.EN&&(h360())
    },0)
    en4=1;hs1=1;ab=0;
    window.autoFarm=1
    async function urmom(a){
        if(a)return;
        let woodDisplay=document.getElementById('woodDisplay').innerText*1
        let stoneDisplay=document.getElementById('stoneDisplay').innerText*1
        let foodDisplay=document.getElementById('foodDisplay').innerText*1
        if((woodDisplay)<100&&window.autoFarm){await Mine(1,500)}
        if((stoneDisplay)<100&&window.autoFarm){await Mine(1,500)}
        if((foodDisplay)<100&&window.autoFarm){await Mine(1,500)}
        window.Ismine
        setTimeout(urmom,100);
    }
    window.urmom=urmom;
    async function Mine(display,amount){
        var a,chaning=0,ht6=hit360,is=Bots.IsSlave;
        await new Promise((done,done2)=>{
            var _=setInterval(()=>{try{

                !amount&&(amount=110);
                //var a;
                display=display===0?['woodDisplay',window. woodR]:display==2?['stoneDisplay',window.stoneR]:display==1?['foodDisplay',window. foodR]:''
                if(display[1]){
                    console.log('Minning',amount,display[0]);
                    a=random(display[1])[0]
                    a.c=amount;a.b=document.getElementById(display[0]);a.h=ht6;hit360=1;
                    window.isMine=1;
                    console.log('Found resource')
                    Bots.Isslave=0
                    clearInterval(_);done()
                }}catch(err){}
            },0)
            })
        await new Promise((c,e)=>{
            try{
                let f=setInterval(()=>{
                    isMine=1;
                    if(info2.NED<400&&!chaning){chaning=1;a=random(display[1])[0]; a.c=amount;a.b=document.getElementById(display[0]);a.h=ht6}
                    if((a.b.innerText*1)>a.c||failsafe){failsafe=0;c('Done');clearInterval(f)};
                    if(getDistance(a.x,a.y,myPlayer.x,myPlayer.y)<info2.range){atk(a.dir);s();chaning=0}
                    else{move(angleRadians(myPlayer,a));atk();}
                },100)}catch(err){e(err);console.error(err)};
        }
                         );hit360=a.h;window.isMine=0;Bots.Isslave=is;return 1;
    }
    window.Mine=Mine;
    s=function(){move(null)}
},2000)
var hunting
window.AT={};
window.anyT=function(){
    if(window.animals.Near){
        AT.dist=getDistance(animals.Near.x,animals.Near.y,myPlayer.x,myPlayer.y);
        //aim(animals.Near.x,animals.Near.y)
        AT.dir=angleRadians(myPlayer,animals.Near)
        //chat(AT.dist+'.')
}
    if(Bots.hunt){
        if(window.animals.Near&&info2.far&&!isCombat){
            hunting=1;
            if(AT.dist<(!animals.Near.hostile?50:(180))){chat('Backing up');acc(11);atk(AT.dir);move(AT.dir+tr(180))}
            else
                if(AT.dist>(!animals.Near.hostile?100:(190))+(info2.range/2)){acc(11);move(AT.dir)}
            else (acc(0),atk(AT.dir),move(null));
        }else{hunting=0};
    }
}
var msg2="Your connecting has been lost and or changed"
let badin2=0;
let badin=setInterval(()=>{
    if(!navigator.onLine&&!badin2){badin2=1;}
    if(badin2&&navigator.onLine){alert(msg2);location.reload();clearInterval(badin)};
},100)
window.startM=(function () {
    "use strict";

    // Serializes a value to a MessagePack byte array.
    //
    // data: The value to serialize. This can be a scalar, array or object.
    // options: An object that defined additional options.
    // - multiple: Indicates whether multiple values in data are concatenated to multiple MessagePack arrays.
    // - invalidTypeReplacement: The value that is used to replace values of unsupported types, or a function that returnsa such a value, given the original value as parameter.
    function serialize(data, options) {
        if (options && options.multiple && !Array.isArray(data)) {
            throw new Error("Invalid argument type: Expected an Array to serialize multiple values.");
        }
        const pow32 = 0x100000000;   // 2^32
        let floatBuffer, floatView;
        let array = new Uint8Array(128);
        let length = 0;
        if (options && options.multiple) {
            for (let i = 0; i < data.length; i++) {
                append(data[i]);
            }
        }
        else {
            append(data);
        }
        return array.subarray(0, length);

        function append(data, isReplacement) {
            switch (typeof data) {
                case "undefined":
                    appendNull(data);
                    break;
                case "boolean":
                    appendBoolean(data);
                    break;
                case "number":
                    appendNumber(data);
                    break;
                case "string":
                    appendString(data);
                    break;
                case "object":
                    if (data === null)
                        appendNull(data);
                    else if (data instanceof Date)
                        appendDate(data);
                    else if (Array.isArray(data))
                        appendArray(data);
                    else if (data instanceof Uint8Array || data instanceof Uint8ClampedArray)
                        appendBinArray(data);
                    else if (data instanceof Int8Array || data instanceof Int16Array || data instanceof Uint16Array ||
                             data instanceof Int32Array || data instanceof Uint32Array ||
                             data instanceof Float32Array || data instanceof Float64Array)
                        appendArray(data);
                    else
                        appendObject(data);
                    break;
                default:
                    if (!isReplacement && options && options.invalidTypeReplacement) {
                        if (typeof options.invalidTypeReplacement === "function")
                            append(options.invalidTypeReplacement(data), true);
                        else
                            append(options.invalidTypeReplacement, true);
                    }
                    else {
                        throw new Error("Invalid argument type: The type '" + (typeof data) + "' cannot be serialized.");
                    }
            }
        }

        function appendNull(data) {
            appendByte(0xc0);
        }

        function appendBoolean(data) {
            appendByte(data ? 0xc3 : 0xc2);
        }

        function appendNumber(data) {
            if (isFinite(data) && Math.floor(data) === data) {
                // Integer
                if (data >= 0 && data <= 0x7f) {
                    appendByte(data);
                }
                else if (data < 0 && data >= -0x20) {
                    appendByte(data);
                }
                else if (data > 0 && data <= 0xff) {   // uint8
                    appendBytes([0xcc, data]);
                }
                else if (data >= -0x80 && data <= 0x7f) {   // int8
                    appendBytes([0xd0, data]);
                }
                else if (data > 0 && data <= 0xffff) {   // uint16
                    appendBytes([0xcd, data >>> 8, data]);
                }
                else if (data >= -0x8000 && data <= 0x7fff) {   // int16
                    appendBytes([0xd1, data >>> 8, data]);
                }
                else if (data > 0 && data <= 0xffffffff) {   // uint32
                    appendBytes([0xce, data >>> 24, data >>> 16, data >>> 8, data]);
                }
                else if (data >= -0x80000000 && data <= 0x7fffffff) {   // int32
                    appendBytes([0xd2, data >>> 24, data >>> 16, data >>> 8, data]);
                }
                else if (data > 0 && data <= 0xffffffffffffffff) {   // uint64
                    // Split 64 bit number into two 32 bit numbers because JavaScript only regards
                    // 32 bits for bitwise operations.
                    let hi = data / pow32;
                    let lo = data % pow32;
                    appendBytes([0xd3, hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
                }
                else if (data >= -0x8000000000000000 && data <= 0x7fffffffffffffff) {   // int64
                    appendByte(0xd3);
                    appendInt64(data);
                }
                else if (data < 0) {   // below int64
                    appendBytes([0xd3, 0x80, 0, 0, 0, 0, 0, 0, 0]);
                }
                else {   // above uint64
                    appendBytes([0xcf, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]);
                }
            }
            else {
                // Float
                if (!floatView) {
                    floatBuffer = new ArrayBuffer(8);
                    floatView = new DataView(floatBuffer);
                }
                floatView.setFloat64(0, data);
                appendByte(0xcb);
                appendBytes(new Uint8Array(floatBuffer));
            }
        }

        function appendString(data) {
            let bytes = encodeUtf8(data);
            let length = bytes.length;

            if (length <= 0x1f)
                appendByte(0xa0 + length);
            else if (length <= 0xff)
                appendBytes([0xd9, length]);
            else if (length <= 0xffff)
                appendBytes([0xda, length >>> 8, length]);
            else
                appendBytes([0xdb, length >>> 24, length >>> 16, length >>> 8, length]);

            appendBytes(bytes);
        }

        function appendArray(data) {
            let length = data.length;

            if (length <= 0xf)
                appendByte(0x90 + length);
            else if (length <= 0xffff)
                appendBytes([0xdc, length >>> 8, length]);
            else
                appendBytes([0xdd, length >>> 24, length >>> 16, length >>> 8, length]);

            for (let index = 0; index < length; index++) {
                append(data[index]);
            }
        }

        function appendBinArray(data) {
            let length = data.length;

            if (length <= 0xf)
                appendBytes([0xc4, length]);
            else if (length <= 0xffff)
                appendBytes([0xc5, length >>> 8, length]);
            else
                appendBytes([0xc6, length >>> 24, length >>> 16, length >>> 8, length]);

            appendBytes(data);
        }

        function appendObject(data) {
            let length = 0;
            for (let key in data) {
                if (data[key] !== undefined) {
                    length++;
                }
            }

            if (length <= 0xf)
                appendByte(0x80 + length);
            else if (length <= 0xffff)
                appendBytes([0xde, length >>> 8, length]);
            else
                appendBytes([0xdf, length >>> 24, length >>> 16, length >>> 8, length]);

            for (let key in data) {
                let value = data[key];
                if (value !== undefined) {
                    append(key);
                    append(value);
                }
            }
        }

        function appendDate(data) {
            let sec = data.getTime() / 1000;
            if (data.getMilliseconds() === 0 && sec >= 0 && sec < 0x100000000) {   // 32 bit seconds
                appendBytes([0xd6, 0xff, sec >>> 24, sec >>> 16, sec >>> 8, sec]);
            }
            else if (sec >= 0 && sec < 0x400000000) {   // 30 bit nanoseconds, 34 bit seconds
                let ns = data.getMilliseconds() * 1000000;
                appendBytes([0xd7, 0xff, ns >>> 22, ns >>> 14, ns >>> 6, ((ns << 2) >>> 0) | (sec / pow32), sec >>> 24, sec >>> 16, sec >>> 8, sec]);
            }
            else {   // 32 bit nanoseconds, 64 bit seconds, negative values allowed
                let ns = data.getMilliseconds() * 1000000;
                appendBytes([0xc7, 12, 0xff, ns >>> 24, ns >>> 16, ns >>> 8, ns]);
                appendInt64(sec);
            }
        }

        function appendByte(byte) {
            if (array.length < length + 1) {
                let newLength = array.length * 2;
                while (newLength < length + 1)
                    newLength *= 2;
                let newArray = new Uint8Array(newLength);
                newArray.set(array);
                array = newArray;
            }
            array[length] = byte;
            length++;
        }

        function appendBytes(bytes) {
            if (array.length < length + bytes.length) {
                let newLength = array.length * 2;
                while (newLength < length + bytes.length)
                    newLength *= 2;
                let newArray = new Uint8Array(newLength);
                newArray.set(array);
                array = newArray;
            }
            array.set(bytes, length);
            length += bytes.length;
        }

        function appendInt64(value) {
            // Split 64 bit number into two 32 bit numbers because JavaScript only regards 32 bits for
            // bitwise operations.
            let hi, lo;
            if (value >= 0) {
                // Same as uint64
                hi = value / pow32;
                lo = value % pow32;
            }
            else {
                // Split absolute value to high and low, then NOT and ADD(1) to restore negativity
                value++;
                hi = Math.abs(value) / pow32;
                lo = Math.abs(value) % pow32;
                hi = ~hi;
                lo = ~lo;
            }
            appendBytes([hi >>> 24, hi >>> 16, hi >>> 8, hi, lo >>> 24, lo >>> 16, lo >>> 8, lo]);
        }
    }

    // Deserializes a MessagePack byte array to a value.
    //
    // array: The MessagePack byte array to deserialize. This must be an Array or Uint8Array containing bytes, not a string.
    // options: An object that defined additional options.
    // - multiple: Indicates whether multiple concatenated MessagePack arrays are returned as an array.
    function deserialize(array, options) {
        const pow32 = 0x100000000;   // 2^32
        let pos = 0;
        if (array instanceof ArrayBuffer) {
            array = new Uint8Array(array);
        }
        if (typeof array !== "object" || typeof array.length === "undefined") {
            throw new Error("Invalid argument type: Expected a byte array (Array or Uint8Array) to deserialize.");
        }
        if (!array.length) {
            throw new Error("Invalid argument: The byte array to deserialize is empty.");
        }
        if (!(array instanceof Uint8Array)) {
            array = new Uint8Array(array);
        }
        let data;
        if (options && options.multiple) {
            // Read as many messages as are available
            data = [];
            while (pos < array.length) {
                data.push(read());
            }
        }
        else {
            // Read only one message and ignore additional data
            data = read();
        }
        return data;

        function read() {
            const byte = array[pos++];
            if (byte >= 0x00 && byte <= 0x7f) return byte;   // positive fixint
            if (byte >= 0x80 && byte <= 0x8f) return readMap(byte - 0x80);   // fixmap
            if (byte >= 0x90 && byte <= 0x9f) return readArray(byte - 0x90);   // fixarray
            if (byte >= 0xa0 && byte <= 0xbf) return readStr(byte - 0xa0);   // fixstr
            if (byte === 0xc0) return null;   // nil
            if (byte === 0xc1) throw new Error("Invalid byte code 0xc1 found.");   // never used
            if (byte === 0xc2) return false;   // false
            if (byte === 0xc3) return true;   // true
            if (byte === 0xc4) return readBin(-1, 1);   // bin 8
            if (byte === 0xc5) return readBin(-1, 2);   // bin 16
            if (byte === 0xc6) return readBin(-1, 4);   // bin 32
            if (byte === 0xc7) return readExt(-1, 1);   // ext 8
            if (byte === 0xc8) return readExt(-1, 2);   // ext 16
            if (byte === 0xc9) return readExt(-1, 4);   // ext 32
            if (byte === 0xca) return readFloat(4);   // float 32
            if (byte === 0xcb) return readFloat(8);   // float 64
            if (byte === 0xcc) return readUInt(1);   // uint 8
            if (byte === 0xcd) return readUInt(2);   // uint 16
            if (byte === 0xce) return readUInt(4);   // uint 32
            if (byte === 0xcf) return readUInt(8);   // uint 64
            if (byte === 0xd0) return readInt(1);   // int 8
            if (byte === 0xd1) return readInt(2);   // int 16
            if (byte === 0xd2) return readInt(4);   // int 32
            if (byte === 0xd3) return readInt(8);   // int 64
            if (byte === 0xd4) return readExt(1);   // fixext 1
            if (byte === 0xd5) return readExt(2);   // fixext 2
            if (byte === 0xd6) return readExt(4);   // fixext 4
            if (byte === 0xd7) return readExt(8);   // fixext 8
            if (byte === 0xd8) return readExt(16);   // fixext 16
            if (byte === 0xd9) return readStr(-1, 1);   // str 8
            if (byte === 0xda) return readStr(-1, 2);   // str 16
            if (byte === 0xdb) return readStr(-1, 4);   // str 32
            if (byte === 0xdc) return readArray(-1, 2);   // array 16
            if (byte === 0xdd) return readArray(-1, 4);   // array 32
            if (byte === 0xde) return readMap(-1, 2);   // map 16
            if (byte === 0xdf) return readMap(-1, 4);   // map 32
            if (byte >= 0xe0 && byte <= 0xff) return byte - 256;   // negative fixint
            console.debug("msgpack array:", array);
            throw new Error("Invalid byte value '" + byte + "' at index " + (pos - 1) + " in the MessagePack binary data (length " + array.length + "): Expecting a range of 0 to 255. This is not a byte array.");
        }

        function readInt(size) {
            let value = 0;
            let first = true;
            while (size-- > 0) {
                if (first) {
                    let byte = array[pos++];
                    value += byte & 0x7f;
                    if (byte & 0x80) {
                        value -= 0x80;   // Treat most-significant bit as -2^i instead of 2^i
                    }
                    first = false;
                }
                else {
                    value *= 256;
                    value += array[pos++];
                }
            }
            return value;
        }

        function readUInt(size) {
            let value = 0;
            while (size-- > 0) {
                value *= 256;
                value += array[pos++];
            }
            return value;
        }

        function readFloat(size) {
            let view = new DataView(array.buffer, pos + array.byteOffset, size);
            pos += size;
            if (size === 4)
                return view.getFloat32(0, false);
            if (size === 8)
                return view.getFloat64(0, false);
        }

        function readBin(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = array.subarray(pos, pos + size);
            pos += size;
            return data;
        }

        function readMap(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = {};
            while (size-- > 0) {
                let key = read();
                data[key] = read();
            }
            return data;
        }

        function readArray(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let data = [];
            while (size-- > 0) {
                data.push(read());
            }
            return data;
        }

        function readStr(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let start = pos;
            pos += size;
            return decodeUtf8(array, start, size);
        }

        function readExt(size, lengthSize) {
            if (size < 0) size = readUInt(lengthSize);
            let type = readUInt(1);
            let data = readBin(size);
            switch (type) {
                case 255:
                    return readExtDate(data);
            }
            return { type: type, data: data };
        }

        function readExtDate(data) {
            if (data.length === 4) {
                let sec = ((data[0] << 24) >>> 0) +
                    ((data[1] << 16) >>> 0) +
                    ((data[2] << 8) >>> 0) +
                    data[3];
                return new Date(sec * 1000);
            }
            if (data.length === 8) {
                let ns = ((data[0] << 22) >>> 0) +
                    ((data[1] << 14) >>> 0) +
                    ((data[2] << 6) >>> 0) +
                    (data[3] >>> 2);
                let sec = ((data[3] & 0x3) * pow32) +
                    ((data[4] << 24) >>> 0) +
                    ((data[5] << 16) >>> 0) +
                    ((data[6] << 8) >>> 0) +
                    data[7];
                return new Date(sec * 1000 + ns / 1000000);
            }
            if (data.length === 12) {
                let ns = ((data[0] << 24) >>> 0) +
                    ((data[1] << 16) >>> 0) +
                    ((data[2] << 8) >>> 0) +
                    data[3];
                pos -= 8;
                let sec = readInt(8);
                return new Date(sec * 1000 + ns / 1000000);
            }
            throw new Error("Invalid data length for a date value.");
        }
    }

    // Encodes a string to UTF-8 bytes.
    function encodeUtf8(str) {
        // Prevent excessive array allocation and slicing for all 7-bit characters
        let ascii = true, length = str.length;
        for (let x = 0; x < length; x++) {
            if (str.charCodeAt(x) > 127) {
                ascii = false;
                break;
            }
        }

        // Based on: https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
        let i = 0, bytes = new Uint8Array(str.length * (ascii ? 1 : 4));
        for (let ci = 0; ci !== length; ci++) {
            let c = str.charCodeAt(ci);
            if (c < 128) {
                bytes[i++] = c;
                continue;
            }
            if (c < 2048) {
                bytes[i++] = c >> 6 | 192;
            }
            else {
                if (c > 0xd7ff && c < 0xdc00) {
                    if (++ci >= length)
                        throw new Error("UTF-8 encode: incomplete surrogate pair");
                    let c2 = str.charCodeAt(ci);
                    if (c2 < 0xdc00 || c2 > 0xdfff)
                        throw new Error("UTF-8 encode: second surrogate character 0x" + c2.toString(16) + " at index " + ci + " out of range");
                    c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
                    bytes[i++] = c >> 18 | 240;
                    bytes[i++] = c >> 12 & 63 | 128;
                }
                else bytes[i++] = c >> 12 | 224;
                bytes[i++] = c >> 6 & 63 | 128;
            }
            bytes[i++] = c & 63 | 128;
        }
        return ascii ? bytes : bytes.subarray(0, i);
    }

    // Decodes a string from UTF-8 bytes.
    function decodeUtf8(bytes, start, length) {
        // Based on: https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
        let i = start, str = "";
        length += start;
        while (i < length) {
            let c = bytes[i++];
            if (c > 127) {
                if (c > 191 && c < 224) {
                    if (i >= length)
                        throw new Error("UTF-8 decode: incomplete 2-byte sequence");
                    c = (c & 31) << 6 | bytes[i++] & 63;
                }
                else if (c > 223 && c < 240) {
                    if (i + 1 >= length)
                        throw new Error("UTF-8 decode: incomplete 3-byte sequence");
                    c = (c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                }
                else if (c > 239 && c < 248) {
                    if (i + 2 >= length)
                        throw new Error("UTF-8 decode: incomplete 4-byte sequence");
                    c = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
                }
                else throw new Error("UTF-8 decode: unknown multibyte start 0x" + c.toString(16) + " at index " + (i - 1));
            }
            if (c <= 0xffff) str += String.fromCharCode(c);
            else if (c <= 0x10ffff) {
                c -= 0x10000;
                str += String.fromCharCode(c >> 10 | 0xd800)
                str += String.fromCharCode(c & 0x3FF | 0xdc00)
            }
            else throw new Error("UTF-8 decode: code point 0x" + c.toString(16) + " exceeds UTF-16 reach");
        }
        return str;
    }

    // The exported functions
    let msgpack = {
        serialize: serialize,
        deserialize: deserialize,

        // Compatibility with other libraries
        encode: serialize,
        decode: deserialize
    };

    // Environment detection
    if (typeof module === "object" && module && typeof module.exports === "object") {
        // Node.js
        module.exports = msgpack;
    }
    else {
        // Global object
        window[window.msgpackJsName || "msgpack"] = msgpack;
    }

});
window.OP=1;
window.startM();
window.hit360 = 0;
let normalDashPacket = new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]);
setInterval(() => {
    if (hit360) doNewSend(["2", [90 ** 100]]);
}, 0);
document.addEventListener('keydown', function (e) {
    if (e.key === "`") {
        $('#mainMenu').toggle();
        //if (ext == true) {$('#gameUI').hide(); $('#mainMenu').hide()};
        //if (ext == false) {$('#gameUI').show(); $('#mainMenu').hide()}; i forgot
        ext = !ext;
    };
    if (e.key == "0") { hit360 = !hit360; chat('360 hit:' + hit360) }
}); //spectator mode!
$("#consentBlock").css({display: "none"});
//$("#youtuberOf").css({display: "none"});
$("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});

window.onbeforeunload = null;

let mouseX;
let mouseY;
window.info2={};
let width;
let height;
var nearestEnemy;
var nearestEnemyAngle;
var isEnemyNear;
var instaSpeed = 270;
var primary;
var secondary;
var foodType;
var wallType;
var spikeType;
var millType;
var mineType;
var boostType;
var turretType;
var spawnpadType;
var autoaim = false;
var tick = 1;
var oldHat;
var oldAcc;
var enemiesNear;
var normalHat;
var normalAcc;
var ws;
var msgpack5 = msgpack;
var boostDir;
let myPlayer = {
    id: null,
    x: null,
    y: null,
    dir: null,
    object: null,
    weapon: null,
    clan: null,
    isLeader: null,
    hat: null,
    accessory: null,
    isSkull: null
};
var WingSpam1;
var WingSpam2;
var WingSpam3;
var WingSpam4;
var WingSpam = true;
function WingSpamFC1() {
    doNewSend(["13c", [0, 21, 1]]);
    clearTimeout(WingSpam1);
    WingSpam1 = setTimeout(function () { WingSpamFC2(); }, 100);
}
function WingSpamFC2() {
    doNewSend(["13c", [0, 18, 1]]);
    clearTimeout(WingSpam2);
    WingSpam3 = setTimeout(function () { WingSpamFC3(); }, 100);
}
function WingSpamFC3() {
    doNewSend(["13c", [0, 19, 1]]);
    clearTimeout(WingSpam3);
    WingSpam4 = setTimeout(function () { WingSpamFC4(); }, 100);
}
function WingSpamFC4() {
    doNewSend(["13c", [0, 13, 1]]);
    clearTimeout(WingSpam4);
    WingSpam1 = setTimeout(function () { WingSpamFC1(); }, 100);
}
var HatSpam1;
var HatSpam2;
var HatSpam3;
var HatSpam4;
var HatSpam5;
var HatSpam6;
var HatSpam7;
var HatSpam = true;
function HatSpamFC1() {
    doNewSend(["13c", [0, 53, 0]]);
    clearTimeout(HatSpam1);
    HatSpam2 = setTimeout(function () { HatSpamFC2(); }, 180);
}
function HatSpamFC2() {
    doNewSend(["13c", [0, 11, 0]]);
    clearTimeout(HatSpam2);
    HatSpam3 = setTimeout(function () { HatSpamFC3(); }, 417);
}
function HatSpamFC3() {
    doNewSend(["13c", [0, 7, 0]]);
    clearTimeout(HatSpam3);
    HatSpam4 = setTimeout(function () { HatSpamFC4(); }, 417);
}
function HatSpamFC4() {
    doNewSend(["13c", [0, 20, 0]]);
    clearTimeout(HatSpam4);
    HatSpam5 = setTimeout(function () { HatSpamFC5(); }, 417);
}
function HatSpamFC5() {
    doNewSend(["13c", [0, 26, 0]]);
    clearTimeout(HatSpam5);
    HatSpam6 = setTimeout(function () { HatSpamFC6(); }, 417);
}
function HatSpamFC6() {
    doNewSend(["13c", [0, 55, 0]]);
    clearTimeout(HatSpam6);
    HatSpam7 = setTimeout(function () { HatSpamFC7(); }, 417);
}
function HatSpamFC7() {
    doNewSend(["13c", [0, 21, 0]]);
    clearTimeout(HatSpam7);
    HatSpam1 = setTimeout(function () { HatSpamFC1(); }, 417);
}
var ClanSpam1;
var ClanSpam2;
var ClanSpam = true;
function ClanSpamFC1() {
    doNewSend(["9", [null]]);
    clearTimeout(ClanSpam1);
    ClanSpam1 = setTimeout(function () { ClanSpamFC2(); }, 500);
}
function ClanSpamFC2() {
    doNewSend(["8", [""]]);
    clearTimeout(ClanSpam2);
    ClanSpam1 = setTimeout(function () { ClanSpamFC1(); }, 500);
}
var AutoInsta = true;
var InAutoInstaProcess = false;
var WoIng = false;
var SecSpam = false;
var PriSpam = false;
setInterval(() => {
    if (PriSpam == true) {
        doNewSend(["5", [primary, true]]);
    }
})
setInterval(() => {
    if (SecSpam == true) {
        doNewSend(["5", [secondary, true]]);
    }
}, 0);
window.fini=1;
var ChatSpam1;
var ChatSpam2;
var ChatSpam3;
var ChatSpam4;
var ChatSpam5;
var ChatSpam6;
var ChatSpam7;
var ChatSpam8;
var ChatSpam9;
var ChatSpam10;
var ChatSpam11;
var ChatSpam12;
var ChatSpam13;
var ChatSpam14;
var ChatSpam15;
var ChatSpam16;
var ChatSpam = true;
let used={};
let msg=`HI
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
Gaston#1799_
your mom gay
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
Gaston#1799`.split('\n');
function random(arr){return arr[Math.floor(Math.random() * arr.length)];}
function gmsg(){
    let a=msg[Math.floor(Math.random() * msg.length)];;if(!used[a]){used[a]=1;setTimeout(()=>{used[a]=0},5000);return a}else{return gmsg();}
}
function ChatSpamFC1() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam1);
    ChatSpam1 = setTimeout(function () { ChatSpamFC2(); }, 2000);
}
function ChatSpamFC2() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam2);
    ChatSpam3 = setTimeout(function () { ChatSpamFC3(); }, 2000);
}
function ChatSpamFC3() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam3);
    ChatSpam4 = setTimeout(function () { ChatSpamFC4(); }, 2000);
}
function ChatSpamFC4() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam4);
    ChatSpam5 = setTimeout(function () { ChatSpamFC5(); }, 2000);
}
function ChatSpamFC5() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam5);
    ChatSpam6 = setTimeout(function () { ChatSpamFC6(); }, 2000);
}
function ChatSpamFC6() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam6);
    ChatSpam7 = setTimeout(function () { ChatSpamFC7(); }, 2000);
}
function ChatSpamFC7() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam7);
    ChatSpam8 = setTimeout(function () { ChatSpamFC8(); }, 2000);
}
function ChatSpamFC8() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam8);
    ChatSpam9 = setTimeout(function () { ChatSpamFC9(); }, 2000);
}
function ChatSpamFC9() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam9);
    ChatSpam10 = setTimeout(function () { ChatSpamFC10(); }, 2000);
}
function ChatSpamFC10() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam10);
    ChatSpam11 = setTimeout(function () { ChatSpamFC11(); }, 2000);
}
function ChatSpamFC11() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam11);
    ChatSpam12 = setTimeout(function () { ChatSpamFC12(); }, 2000);
}
function ChatSpamFC12() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam12);
    ChatSpam13 = setTimeout(function () { ChatSpamFC13(); }, 2000);
}
function ChatSpamFC13() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam13);
    ChatSpam14 = setTimeout(function () { ChatSpamFC14(); }, 2000);
}
function ChatSpamFC14() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam14);
    ChatSpam15 = setTimeout(function () { ChatSpamFC15(); }, 2000);
}
function ChatSpamFC15() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam15);
    ChatSpam16 = setTimeout(function () { ChatSpamFC16(); }, 2000);
}
function ChatSpamFC16() {
    doNewSend(["ch", [gmsg()]]);
    clearTimeout(ChatSpam16);
    ChatSpam1 = setTimeout(function () { ChatSpamFC1(); }, 2000);
}
let healSpeed = 54;true
var messageToggle = 0;
var clanToggle = 0;
let healToggle = 1;
let hatToggle = 1;
setInterval(() => {
    if(clanToggle == 1) {
        doNewSend(["9", [null]]);
        doNewSend(["8", [animate(false, 5)]])
    }
}, 200);

setInterval(() => {
    if(messageToggle == 1) {
        doNewSend(["ch", [animate(true, 5)]])
    }
}, 200);

setInterval(() => {
    if(autoaim == true) {
        doNewSend(["2", [nearestEnemyAngle]]);
    }
}, 0);

setInterval(() => {
    if(hatToggle == 1) {
        if(oldHat != normalHat) {
            hat(normalHat);
            console.log("Tried. - Hat")
        }
        if(oldAcc != normalAcc) {
            acc(normalAcc);
            console.log("Tried. - Acc")
        }
        oldHat = normalHat;
        oldAcc = normalAcc
    }
}, 25);

function normal() {
    hat(normalHat);
    acc(normalAcc);
}
function aim(x, y){
    var cvs = document.getElementById("gameCanvas");
    cvs.dispatchEvent(new MouseEvent("mousemove", {
        clientX: x,
        clientY: y

    }));
}
let coreURL = new URL(window.location.href);
window.sessionStorage.force = coreURL.searchParams.get("fc");

document.msgpack = msgpack;
function n(){
    this.buffer = new Uint8Array([0]);
    this.buffer.__proto__ = new Uint8Array;
    this.type = 0;
}

WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m){
    if (!ws){
        document.ws = this;

        ws = this;
        socketFound(this);
    }
    this.oldSend(m);
};
var Pedro17={};
function socketFound(socket){
    socket.addEventListener('message', function(message){
        handleMessage(message);
    });
}
var info3={};
setInterval(()=>{
    if(info2.trapped){atk(angleRadians(myPlayer,info3))}
},1)
window.caninsta=1;
var didreload=0;
window.trapbreaking=0;
var trapid = null;
var trap_a = null;
var intrap = false;
var autobreak=1;
var havetrap = false;
var trapx;
var trapy;
var TrapAngle;
var aimtrap = false;
function handleMessage(m){
    let temp = msgpack5.decode(new Uint8Array(m.data));
    let data;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};

    if(item === "io-init") {
        let cvs = document.getElementById("gameCanvas");
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function() {
            width = cvs.clientWidth;
            height = cvs.clientHeight;
        });
        cvs.addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
    }

    if (item == "1" && myPlayer.id == null){
        myPlayer.id = data[1];
        (!localStorage.botids||!localStorage.botids.length)&&(localStorage.botids="")
        if(!localStorage.botids.includes(data[1])){
            localStorage.botids+=data[1]+'\n';
            localStorage.botids=localStorage.botids.match(/[0-9]+/).filter(id=>{
                return host&&host.id==id?0:1
            }).join('\n')
        }
    }
    try{ids=localStorage.botids.match(/[0-9]+/).map(eval)}catch(err){}
    if (item == "33") {
        enemiesNear = [];
        for (let g = 0x0; g < data[0x1]['length'] / 0xd; g++) {
            let h = data[0x1]['slice'](0xd * g, 0xd * g + 0xd);
            h[0x0] == myPlayer['id'] ? (myPlayer['x'] = h[0x1], myPlayer['y'] = h[0x2], myPlayer['dir'] = h[0x3], myPlayer['object'] = h[0x4], myPlayer['weapon'] = h[0x5], myPlayer['clan'] = h[0x7], myPlayer['isLeader'] = h[0x8], myPlayer['hat'] = h[0x9], myPlayer['accessory'] = h[0xa], myPlayer['isSkull'] = h[0xb], document['BINDS'] = {
                'BINDINGS': h['join'](',')
                , 'LOCATIONX': myPlayer['x']
                , 'LOCATIONY': myPlayer['y']
                , 'DIRECTION': myPlayer['dir']
                , 'WEAPON': myPlayer['weapon']
                , 'LEADERSTATUS': myPlayer['isLeader']
                , 'CLAN_TRIBE': myPlayer['clan']
                , 'ISSKULL': myPlayer['isSkull']
                , 'ACCESSORY': myPlayer['acc']
                , 'HAT': myPlayer['hat']
                , 'super': WebSocket
                , 'WEBSOCKET': ws
            }) : h[0x7] == myPlayer['clan'] && null !== h[0x7] || enemiesNear['push'](h);
        }
        /*for(let i = 0; i < data[1].length / 13; i++){
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id){
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null){
                enemiesNear.push(playerInfo);
            }
        }*/
    }
    //console.log(item)
    if(item=="16"&&autoU){myPlayer.age=data[1];myPlayer.upgradeL=data[2]/*upgrades given*/;console.log('age',data);doNewSend(['6',[items2[myPlayer.upgradeL-1]]]);}
    if(item=="9"&&data[1]=='kills'){chat(Pname+'-Kills:'+data[2]);window.stoped==0&&(setTimeout(Rec.t,5000));}
    if(item=='9'&&data[1]=='points'){var p=(scores.p0||0);scores.p0=data[2];scores.dif=scores.p0-p;window.NeedGold=0;scores.dif<700&&(window.NeedGold=1)}
    //if((item!='a'&&item!="33")&&data[0]!=myPlayer.id&&data[1]!=myPlayer.id){console.log(item,data)}
    if(item=='9'&&window[data[1]]!='kills'&&data[2]<20){if(!window[data[1]]){console.log('added',data[1],data); window[data[1]]=[];window[data[1]].push((myPlayer))}else{window[data[1]].push((myPlayer))}}
    if(item=='18'){
        if((angleRadians({x:data[1],y:data[2]},myPlayer).toFixed(1)*1)==data[3].toFixed(1)&&Bots.bt){hat(22);/*chat(random(['Cant hit me with that','Missed :)','EZ blocking','Try again next time']));*/console.log('Blocked');place(millType,angleRadians(myPlayer,{x:data[1],y:data[2]}));}
        if(Bots.sb&&(angleRadians({x:data[1],y:data[2]},myPlayer).toFixed(2)*1)==data[3]){console.log('Blocked');place(millType,angleRadians(myPlayer,{x:data[1],y:data[2]}));doNewSend(['2',[angleRadians(myPlayer,{x:data[1],y:data[2]})]]);Sec();}}
    /*if(item == "6"){
        for(let i = 0; i < data[1].length / 8; i++){
            let ObjectData = data[1].slice(8*i, 8*i+8);
            if(ObjectData[6] == 15 && ObjectData[7] != myPlayer.id){
                if(Math.sqrt(Math.pow((myPlayer.y-ObjectData[2]), 2) + Math.pow((myPlayer.x-ObjectData[1]), 2)) < 120){
                    for(let i=0;i<36;i++){
                        let angle = myPlayer.dir + toRad(i * 905342321);
                        place(boostType, angle)

                    }
                    if (myPlayer.weapon == 15){
                        doNewSend(["5", [primary, true]]);
                    }
                    if (myPlayer.weapon == 7){
                        doNewSend(["5", [secondary, true]]);
                    }

                    if (myPlayer.weapon == 6){
                        doNewSend(["5", [secondary, true]]);
                    }
                }
                havetrap = true;
                trapx = myPlayer.x;
                trapy = myPlayer.y;
                TrapAngle = Math.atan2(ObjectData[2]-myPlayer.y, ObjectData[1]-myPlayer.x);
                doNewSend(["13c", [0, 40, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["7", [1]]);
                aimtrap = true;
                hit360 = true;
            }
        }
    }
    /*if(havetrap == true) {
        if(myPlayer.x != trapx || myPlayer.y != trapy) {
            aimtrap = false;
              havetrap = false;
              doNewSend(["7", [1]]);
        place(spikeType, myPlayer.dir + toRad(0));
        place(spikeType, myPlayer.dir - toRad(90));
        place(spikeType, myPlayer.dir + toRad(180));
        place(spikeType, myPlayer.dir - toRad(270));
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
              if (myPlayer.weapon == 10){
           doNewSend(["5", [primary, true]]);
                  }
        }
    }*/
    if (item == "33") {
        enemiesNear = [];
        for (let g = 0x0; g < data[0x1]['length'] / 0xd; g++) {
            let h = data[0x1]['slice'](0xd * g, 0xd * g + 0xd);
            h[0x0] == myPlayer['id'] ? (myPlayer['x'] = h[0x1], myPlayer['y'] = h[0x2], myPlayer['dir'] = h[0x3], myPlayer['object'] = h[0x4], myPlayer['weapon'] = h[0x5], myPlayer['clan'] = h[0x7], myPlayer['isLeader'] = h[0x8], myPlayer['hat'] = h[0x9], myPlayer['accessory'] = h[0xa], myPlayer['isSkull'] = h[0xb], document['BINDS'] = {
                'BINDINGS': h['join'](',')
                , 'LOCATIONX': myPlayer['x']
                , 'LOCATIONY': myPlayer['y']
                , 'DIRECTION': myPlayer['dir']
                , 'WEAPON': myPlayer['weapon']
                , 'LEADERSTATUS': myPlayer['isLeader']
                , 'CLAN_TRIBE': myPlayer['clan']
                , 'ISSKULL': myPlayer['isSkull']
                , 'ACCESSORY': myPlayer['acc']
                , 'HAT': myPlayer['hat']
                , 'super': WebSocket
                , 'WEBSOCKET': ws
            }) : h[0x7] == myPlayer['clan'] && null !== h[0x7] || enemiesNear['push'](h);
        }
        window.skin=(accessories.filter(a=>{return a.id==myPlayer.accessory})||[])[0]
        /*for(let i = 0; i < data[1].length / 13; i++){
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id){
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
            } else if(playerInfo[7] != myPlayer.clan || playerInfo[7] === null){
                enemiesNear.push(playerInfo);
            }
        }*/
    }
    if (item == "ch" && data[1] != myPlayer.id && window.chatM) { chat(data[2]) }// i add chaty mirross to mine
    isEnemyNear = false;try { info2.EN = enemiesNear.length; info2.far = !!1;info2.far3=!![]; } catch (err) { };
    if(enemiesNear) {
        info2.e=[];
        if(typeof food !="undefined"){food.sort1=food.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];}
        if(typeof wood !="undefined"){wood.sort1=wood.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];}
        if(typeof stone !="undefined"){stone.sort1=stone.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];}
        nearestEnemy = enemiesNear.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        enemiesNear.forEach(e=>{info2.e.push(e[0])})
        info2.e=info2.e.join('\n')
        window.NT = []
        window.NTP
        window.muskets = [];
        enemiesNear.forEach(e => {
            if (e[9] == 51 && myPlayer.clan ? e[7] != myPlayer.clan : [7] == null) { NT.push(e) }
            if (e[5] == 15) { muskets.push(e) }
        })/*bruh*/
        NTP = playersort(53);/*i have to part that gets the closet plkay with turret */
        window.npb = playersort(7)/*i have to part that gets the closet plkay with bull */
        window.nearestEnemy = nearestEnemy;
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }
    Bots.IsSlave&&localStorage.enemyN&&(window.hostEnm=localStorage.enemyN.split('\n'));
    if(nearestEnemy) {
        if(Bots.IsHost){localStorage.enemyN=nearestEnemy.join('\n')}
        if(window.hostEnm&&Bots.IsSlave){nearestEnemy=window.hostEnm};
        info2.tank = 0;
        info2.NED = Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2));
        if (info2.NED > 500&&!info2.trap) { info2.tank = 1 }
        info2.where=nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19
                }
            };
        }
        try {
            info2.autoinsta1=info2.NED<info2.range-5
            if (Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2)) < 500) {
                info2.far2 = 0;
            }
            else info2.far2 = !0;
            if (Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2)) < info2.range + 90) {
                info2.far = !!0;
            }
            if (Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2)) < info2.range + 111) {
                info2.far3 = !!0;
            }
        } catch (err) { };
    }
    else{localStorage.enemyN&&(delete localStorage.enemyN);window.hostEnm&&(delete window.hostEnm,delete window.hostEna)};
    /*if(isEnemyNear == false && autoaim == false) {
        normalAcc = 11;
        if (myPlayer.y < 2400){
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
            normalHat = 31;
        } else {
	        normalHat = 12;
        }
    }
    if (!nearestEnemy) {
        nearestEnemyAngle = myPlayer.dir;
    }*/
    if(item=='11'&&!window.norespawn){
        failsafe=1;
        if(intrap == true) {
                intrap = false;
                info2.trapped=0;
                //clearInterval(trapbreaking)
                setTimeout(()=>{window.caninsta=1;window.canatk=1},info2.ps+100)
                clearInterval(trapbreaking);
        }
        setTimeout(()=>{
            failsafe=1;
            setTimeout(()=>{failsafe=1},500)
            doNewSend(["sp", [{
                name: (window.Pname)
                , moofoll: !0
                , skin: 0
            }]])
            setTimeout(async ()=>{failsafe=1;
                if((Bots.IsSlave||Bots.autoPlay)&&!SandBox){
                    //Bots.IsSlave=0;
                    var on=Object.keys(Bots).map(e=>[e,Bots[e]]).filter(e=>e[1]).map(e=>e[0]);
                    //on.forEach(e=>{Bots[e]=!!0})
                    await Mine(0,500)
                    await Mine(1,500)
                    await Mine(2,500)
                    //Bots.IsSlave=1;
                    //on.forEach(e=>{Bots[e]=!0})
                }
            },1000)
        },3000)
    }
    //if(!window.logger&&(item!='a'&&item!='33')){console.log(item,data,NUmbers++)}
    if(item == "6"){
        //console.log(data[1][7]==myPlayer.id,data)
        for(let i = 0; i < data[1].length / 8; i++){
            let objectInfo = data[1].slice(8*i, 8*i+8);
            var isspike=false;
            if(window.spikes){
                window.spikes.forEach(spikeID=>{
                    if(spikeID==objectInfo[6]){isspike=true;}
                })
            }
            console.log(isspike,objectInfo[6]);

            myobjs[objectInfo[0]]={pid:objectInfo[7],x:objectInfo[1],y:objectInfo[2],z:(
                !!1?objectInfo[7]==myPlayer.id:ids.indexOf(objectInfo[7])>-1
            ),data:['6',objectInfo],spike:isspike,resource:objectInfo[7]<0};
            if(objectInfo[6] == 15 && objectInfo[7] != myPlayer.id){
                trap_a = Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x);
                if(Math.sqrt(Math.pow((myPlayer.y-objectInfo[2]), 2) + Math.pow((myPlayer.x-objectInfo[1]), 2)) < 90){
                    info2.trapped=1;
                    let pit={x:objectInfo[1],y:objectInfo[2]};
                    intrap = true;
                    trapid = objectInfo[0];
                    clearInterval(trapbreaking);
                    hat(40);
                    acc(18);
                    var atk=(dir)=>{doNewSend(['c',[1,dir]]);doNewSend(['c',[null,dir]])};
                    window.trapbreaking=setInterval(() => {
                        if(autobreak == true && intrap == true&&!window.blocking&&Math.sqrt(Math.pow((myPlayer.y-objectInfo[2]), 2) + Math.pow((myPlayer.x-objectInfo[1]), 2)) < 90) {
                            try{info2.si.id == 10&&(Sec());}catch(err){Prime();}
                            //chat('Breaking Test:'+Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x))
                            doNewSend(['2',[Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x)]]);
                            hat(window.caninsta?40:6);
                            acc(18);
                            atk(Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x));
                        }else if(!window.blocking){clearInterval(trapbreaking);Prime();setTimeout(()=>{Prime();Prime();Prime();Prime();Prime();},100)};
                    },(function(){try{info2.si.id == 10&&(Sec());return 10}catch(err){Prime();return 10}})());
                }
            }
        }
    }
    if(item == "6sadas"){
        //console.log(data[1][7]==myPlayer.id,data)
        for(let i = 0; i < data[1].length / 8; i++){
            let objectInfo = data[1].slice(8*i, 8*i+8);
            var isspike=false;
            if(window.spikes){
                window.spikes.forEach(spikeID=>{
                    if(spikeID==objectInfo[6]){isspike=true;}
                })
            }
            //console.log(isspike,objectInfo[6]);
            myobjs[objectInfo[0]]={pid:objectInfo[7],x:objectInfo[1],y:objectInfo[2],z:objectInfo[7]==myPlayer.id,data:['6',objectInfo],spike:isspike,resource:objectInfo[7]<0};
            if(objectInfo[7]==myPlayer.id||objectInfo[1]==myPlayer.id&&objectInfo[6]==15){
                if(getDistance(objectInfo[1],objectInfo[2],myPlayer.x,myPlayer.y)>info2.range&&Bots.tinsta)(chat('Get-Trapped Insta'),insta(1,hit360,[data[1],data[2]]));
            }
            if(objectInfo[6] == 15 && objectInfo[7] != myPlayer.id){
                trap_a = Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x);
                if(Math.sqrt(Math.pow((myPlayer.y-objectInfo[2]), 2) + Math.pow((myPlayer.x-objectInfo[1]), 2)) < 90){
                    info2.trapped=1;
                    let pit={x:objectInfo[1],y:objectInfo[2]};
                    intrap = true;
                    trapid = objectInfo[0];
                    clearInterval(trapbreaking);
                    hat(40);
                    acc(18);
                    var atk=(dir)=>{doNewSend(['c',[1,dir]]);doNewSend(['c',[null,dir]])};
                    window.trapbreaking=setInterval(() => {
                        if(autobreak == true && intrap == true&&!window.blocking) {
                            try{info2.si.id == 10&&(Sec());}catch(err){Prime();}
                            //chat('Breaking Test:'+Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x))
                            doNewSend(['2',[Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x)]]);
                            hat(40);
                            acc(18);
                            atk(Math.atan2(objectInfo[2] - myPlayer.y, objectInfo[1] - myPlayer.x));
                        }else{clearInterval(trapbreaking);Prime();setTimeout(()=>{Prime();Prime();Prime();Prime();Prime();},100)};
                    },(function(){try{info2.si.id == 10&&(Sec());return 10}catch(err){Prime();return 10}})());
                }
            }
        }
    }
    if(item=='14'){
        chat(data);
        (pingtoggle=!pingtoggle,pingtoggle&&(chat(data)));
    }
    if (item == "12") {
        var item_=myobjs[data[1]];
        Math.sqrt(Math.pow((myPlayer.y-myobjs.y), 2) + Math.pow((myPlayer.x-myobjs.x), 2))
        Bots.upits2 && again && (Math.sqrt(Math.pow((myPlayer.y-myobjs.y), 2) + Math.pow((myPlayer.x-myobjs.x), 2)) <150) &&(cbats(0));
        try{delete myobjs[data[1]];}catch(err){};
        if(intrap == true) {
            if(trapid == data[1]) {
                Prime();
                intrap = false;
                for (let i=0;i<4;i++){
                    let angle = myPlayer.dir + toRad(i * 90);
                    place(boostType, angle)
                }
                info2.trapped=0;
                //clearInterval(trapbreaking)
                doNewSend(["13c", [0, 6, 0]]);
                doNewSend(["13c", [0, 11, 1]]);
                setTimeout(()=>{window.caninsta=1;window.canatk=1;},info2.ps+100)
                clearInterval(trapbreaking);Prime();setTimeout(()=>{Prime();Prime();Prime();Prime();Prime();},100)
                if(!didreload){again=0;weapons.reload();}
            }
        }
    }
    if(item=="18"&&data[1]==myPlayer.id){window.caninsta=0;setTimeout(()=>{window.caninsta=1;},info2.ss+100)}
    if(item=="7"&&data[1]==myPlayer.id){
        window.caninsta=0;
        window.canatk=0;window.canatk2=0;
        try{clearTimeout(window.timout)}catch(errr){}
        window.timeout=setTimeout(()=>{window.caninsta=1;window.canatk=1},(info2.current.id==primary?info2.ps:info2.ss));
        window.timeout=setTimeout(()=>{window.canatk2=1},(info2.current.id==primary?info2.ps:info2.ss)-10);
    }
    if(window.host){
        if(data[1]==window.host.id&&Bots.IsSlave&&item=='7'&&!window.Sinsta){
            atk(host.dir);
        }
    }
    if(window.isI&&item=="7"&&data[1]==myPlayer.id){window.isI=0;setTimeout(()=>{Sec();hat(53);setTimeout(()=>{doNewSend(['7',[1]]);weapons.reload();Cbiome();},100)},i2)}
    try{
        if(item=='h' && data[1]==nearestEnemy[0]&&data[2]<35&&window.lowT&&info2.NED<700){
            var oldhat=myPlayer.hat;
            hat(53);
            if(secondary!=11&&!secondary!=10&&!!0){
                Sec();
                atk(info2.where)
                setTimeout(()=>{Prime()},info2.ss+100)
            }
            setTimeout(()=>{hat(oldhat)},100)
        }
        if(item=='h' && data[1]==nearestEnemy[0]&&data[2]<50&&Bots.ssp&&info2.NED<120){
        place(spikeType, nearestEnemyAngle + toRad(45));
        place(spikeType, nearestEnemyAngle - toRad(45));
        place(spikeType, nearestEnemyAngle);
    }}catch(err){};
    /* bull spam
    if(item == "h" && data[1] == myPlayer.id) {
        if(data[2] < 56 && data[2] > 0 && holding == false && nearestEnemy && bullspam < 5) {
            if(myPlayer.hat != 6 && data[2] == 55) {}else {
                holding = true
                place(foodType, nearestEnemyAngle);
                place(foodType, nearestEnemyAngle);
                let lhat = myPlayer.hat
                let lacc = myPlayer.accessory
                if(myPlayer.hat != 7 && myPlayer.hat != 11) {
                    doNewSend(["13c", [0, 22, 0]]);
                }
                setTimeout( () => {
                }, 50);

                setTimeout( () => {
                    holding = false
                    bullspam =+ 1;
                    place(foodType, nearestEnemyAngle);
                    if (myPlayer.y < 2400){
                        hat(0)
                        hat(6)
                        hat(15);
                    } else if (myPlayer.y > 6850 && myPlayer.y < 7575){
                        hat(0)
                        hat(6)
                        hat(31)
                    } else {
                        hat(0)
                        hat(6)
                        hat(12);
                    }
                    acc(0)
                    acc(11);
                    if(lhat != 7 && lhat != 53){
                        hat(lhat)
                        acc(lacc)
                    }
                    else if(lhat == 7){
                        hat(lhat)
                        acc(lacc)
                    }
                }, 200);
            }
        }
    }*/
    if(item == "h" && data[1] == myPlayer.id){
        window.health=data[2]
        //changeHealth(data[2]-oldH)
        if(window.oldH>data[2]){
            window.hittime=Date.now();
            (healths.push(window.oldH-data[2]))
            healths.length>=10&&(healths=healths.splice(healths.length-10,healths.length));
            window.dps=(eval(healths.join('+')))/(healths.length);
            if(window.dps>10){

            }
            !window.tm&&(clearTimeout(window.tm));(window.tm=setTimeout(()=>{
                //clears dps after a cerasn time of no dmg taking
                healths=[];
                dps=NaN
                tm=null;
            },5000))
        }else
        if (window.hittime) {
            var o = Date.now() - window.hittime;
            window.hittime = 0,
                o <= 120 ? (window.shameCount++,
                            window.shameCount >= 8 && (window.shameTimer = 3e4,
                            window.shameCount = 0)) : (window.shameCount -= 2,
                            window.shameCount <= 0 && (window.shameCount = 0));
        }
        window.oldH=data[2];
    }
    if(item == "h"){
        let en=enemiesNear.sort(e=>{e[0]==data[1]})[0];
        ;!players[data[1]]&&(players[data[1]]={health:100,player:en,shameCount:0});
        if(players[data[1]].health<data[2]){
            players[data[1]].hittime=Date.now();
        }else if(players[data[1]].hittime){
            var o = Date.now() - players[data[1]].hittime;
            players[data[1]].hittime = 0,
                o <= 120 ? (players[data[1]].shameCount++,
                            players[data[1]].shameCount >= 8 && (players[data[1]].shameTimer = 3e4,
                            players[data[1]].shameCount = 0)) : (players[data[1]].shameCount -= 2,
                            players[data[1]].shameCount <= 0 && (players[data[1]].shameCount = 0));
            if(players[data[1]]<=0)(players[data[1]].health=100,players[data[1]].shameCount=0)
        }
        if(players[data[1]].shameCount<5){
            players[data[1]].mode='trap'
        }else players[data[1]].mode='insta'
        players[data[1]]["health"]=data[2]
    }
    if (item == "h" && data[1] == myPlayer.id && data[2] < (window.ashield ? 99 : 79) && data[2] > 0 && ab == 1 && !info2.far && myPlayer.hat == 11) {
        didHeal=1;
        Prime()
        if (window.ab2) {//insta anti
            hat(22);
            chat('AB-2')
            place(foodType);
            insta()
            setTimeout(e => {
                setTimeout(() => {
                    doNewSend(["13c", [0, 11, 0]]);
                    doNewSend(["13c", [0, 21, 1]]);
                    doNewSend(["c", [0]]);
                    autoaim = false;
                }, 0);
            }, info2.ss / 2)
        }
        else if (window.ab3) { place(foodType); stest(); chat('AB-3') }
        else {
            Prime(); chat('AB-1');//atk anti
            place(foodType);
            var i360=hit360
            hit360=0;
            var isa = autoaim
            isa ? autoaim = true : null;
            doNewSend(["5", [primary, true]]);
            doNewSend(["13c", [0, 7, 0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 21, 1]]);
            place(spikeType, nearestEnemyAngle + toRad(45));
            place(spikeType, nearestEnemyAngle - toRad(45));
            doNewSend(["c", [1]]);

            setTimeout(() => {
                doNewSend(["13c", [0, 53, 0]]);
            }, 50);

            setTimeout(() => {
                doNewSend(["13c", [0, 11, 0]]);
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["c", [0]]);
                isa ? autoaim = false : null;
                hit360=i360;
            }, 200);
        }
    } else
        if(item == "h" && data[1] == myPlayer.id){
            myPlayer.shield=0;
            info2.health = data[2];
            weapons.forEach(e=>{if(e.id==secondary&&e.shield){myPlayer.shield=1}})
            let closestenemyAngle=nearestEnemyAngle;
            if(data[2] < 61 && data[2] > 59 && myPlayer.hat !=6 && info2.new == 4) {
                hat(26);
                doNewSend(["ch", ["Nobull? Gaston says nice try!"]]);
                place(foodType);
            }else{
            if(info2.neh==7||info2.neh==11|info2.neh==10||info2.new==4||info2.new==15||info2.new==5){
                didHeal=1
                if(data[2] < 39 && OP==1){
                    place(foodType, Number.MAX_VALUE);
                    setTimeout( () => {
                        place(foodType, Number.MAX_VALUE);
                    }, 100);
                }
                else if(data[2] < 59 && OP==1){
                    //place(foodType, Number.MAX_VALUE);
                    setTimeout( () => {
                        place(foodType, Number.MAX_VALUE);
                    }, 200);
                }
                else if(data[2] < 100 && OP==1){
                    setTimeout( () => {
                        place(foodType, Number.MAX_VALUE);
                        //

                    }, 500);
                }
            }
            else{
                if(data[2]<info2.oldH){
                }
                didHeal=0
                if(data[2] < 100 && OP==1){
                    setTimeout( () => {didHeal=1;
                                       place(foodType, Number.MAX_VALUE);
                                       //
                                      }, 800);
                }else didHeal=1;
                if(data[2] < 90 && OP==1){
                    setTimeout( () => {didHeal=1;
                                       place(foodType, Number.MAX_VALUE);
                                      }, 700);
                }
                if(data[2] < 80 && OP==1){
                    setTimeout( () => {didHeal=1;
                                       place(foodType, Number.MAX_VALUE);
                                      }, 300);
                }
                if(data[2] < 70 && OP==1){
                    didHeal=1
                    setTimeout( () => {didHeal=1;
                                       place(foodType, Number.MAX_VALUE); didHeal=1;
                                      }, 150);
                }
                if(data[2] < 60 && OP==1&&didHeal){
                    setTimeout( () => {didHeal=1;
                                       place(foodType, closestenemyAngle);
                                      }, 300);
                }
                if(data[2] < 50 && OP==1&&didHeal){
                    place(foodType, null);
                    setTimeout( () => {
                        place(foodType, closestenemyAngle);didHeal=1;
                        place(foodType, closestenemyAngle);
                    }, 600);
                }
                if(data[2] < 40 && OP==1&&didHeal){
                    setTimeout( () => {
                        place(foodType, closestenemyAngle);didHeal=1;
                        place(foodType, closestenemyAngle);
                    }, 169);
                }
                if(data[2] < 30 && OP==1&&didHeal){
                    place(foodType, closestenemyAngle);
                    setTimeout( () => {
                        place(foodType, closestenemyAngle); didHeal=1;
                        place(foodType, closestenemyAngle);
                    }, 169);
                }
                if(data[2] < 20 && OP==1&&didHeal){
                    place(foodType, null);
                    place(foodType, Number.MAX_VALUE);didHeal=1;
                    place(foodType, Number.MAX_VALUE);
                    setTimeout( () => {
                        place(foodType, Number.MAX_VALUE);
                        place(foodType, Number.MAX_VALUE);
                        place(foodType, Number.MAX_VALUE);
                    }, 10);
                }
                if(data[2] < 10 && OP==1&&didHeal){
                    place(foodType, closestenemyAngle);
                    place(foodType, closestenemyAngle);didHeal=1;
                    place(foodType, closestenemyAngle);
                    setTimeout( () => {
                        place(foodType, Number.MAX_VALUE);
                        place(foodType, Number.MAX_VALUE);
                        place(foodType, Number.MAX_VALUE);

                    }, 115);
                }}}
        }else try{if(item == "h" &&data[2] < 96&&data[1]==nearestEnemy[0]&&window.instaT){!info2.far&&(insta(0));chat('Death by bull helmet')};}catch(err){};
    if(item=='h'&&(info2.health==40||info2.health==45||info2.health==50||info2.health==37||info2.health==47||info2.neh==7&&(info2.NED<142)||info2.ner&&((angleRadians({x:nearestEnemy[1],y:nearestEnemy[2]},myPlayer).toFixed(1)*1)==nearestEnemy[0x3].toFixed(1)))&&myPlayer.shield){
        //chat('You tried')
        hit360=1;
        window.blocking=1
        Sec();
        hat(22);
        setTimeout(()=>{
            window.blocking=0;
            hit360=0;
            Prime();
        },200)
    }
    update();
}
async function Place2(id,x,y){}
window.failsafe=0;
window.on=function(a,b,c){
    window.addEventListener(a,b,c)
}
window.once=window.on;
on('unload',(e)=>{
    localStorage.removeItem('woodDisplay')
    localStorage.removeItem('stoneDisplay')
    localStorage.removeItem('foodDisplay')
    localStorage.removeItem('scoreDisplay')
},0)
function Save(display=prompt(`1=wood,2=stone,3=food,4=gold`)){
    let b=hit360;
    //if(!localStorage['woodDisplay']){localStorage['woodDisplay']=''}
    if(eval(display)==1){localStorage['woodDisplay']=JSON.stringify(myPlayer)}
    if(eval(display)==2){localStorage['stoneDisplay']=JSON.stringify(myPlayer)}
    if(eval(display)==3){localStorage['foodDisplay']=JSON.stringify(myPlayer)}
    if(eval(display)==4){localStorage['scoreDisplay']=JSON.stringify(myPlayer)}
}
window.isMine
window.save=Save/*
async function Mine(display,amount){
    window.isMine=1;
    !amount&&(amount=110);
    var a;
    display=display==0?'woodDisplay':display==2?'stoneDisplay':display==1?'foodDisplay':''
    console.log('Minning',amount,display);
    a=eval(`a=${localStorage[display]}`);
    a.c=amount;a.b=document.getElementById(display);a.h=hit360;hit360=1;
    await new Promise((c,e)=>{
        try{let f=setInterval(()=>{
            isMine=1;
            if((a.b.innerText*1)>a.c||failsafe){failsafe=0;c('Done');clearInterval(f)};
            if(getDistance(a.x,a.y,myPlayer.x,myPlayer.y)<info2.range){atk(a.dir);s();}
            else{move(angleRadians(myPlayer,a));atk();}
        },100)}catch(err){e(err);console.error(err)};
    }
                     );hit360=a.h;window.isMine=0;return 1;}
window.Mine=Mine;*/
function doNewSend(sender){
    try{ ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));}catch(err){};
}
var items2=[-1]
function acc(id) {
    if(myPlayer.accessory!=id){
        storeBuy(id,1)
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, id, 1]]);}
}
function hat(id) {
    if(myPlayer.hat!=id){
        storeBuy(id,0)
        doNewSend(["13c", [0, id, 0]]);}
}
window.atk=function(angle=info2.where){
    if(myPlayer.hat==11){return}
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
}
//setInterval(() => window.follmoo && follmoo(), 10);
async function urmom(a=!window.autoFarm){
    if(a)return;
    let woodDisplay=document.getElementById('woodDisplay').innerText*1
    let stoneDisplay=document.getElementById('stoneDisplay').innerText*1
    let foodDisplay=document.getElementById('foodDisplay').innerText*1
    if((woodDisplay)<100&&window.autoFarm){await Mine(1,500)}
    if((stoneDisplay)<100&&window.autoFarm){await Mine(1,500)}
    if((foodDisplay)<100&&window.autoFarm){await Mine(1,500)}
    window.Ismine
    setTimeout(urmom,100);
}
window.urmom=urmom;
function place(id, angle = Math.atan2(mouseY - height / 2, mouseX - width / 2)) {
    doNewSend(["5", [id, null]]);
    doNewSend(["c", [1, angle]]);
    doNewSend(["c", [0, angle]]);
    doNewSend(["5", [myPlayer.weapon, true]]);
}
window.place=place;
function boostSpike() {
    boostDir = nearestEnemyAngle;
    place(spikeType, boostDir + toRad(90));
    place(spikeType, boostDir - toRad(90));
    place(boostType, boostDir);
    doNewSend(["33", [boostDir]]);
}


var repeater = function(key, action, interval) {
    let _isKeyDown = false;
    let _intervalId = undefined;

    return {
        start(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = true;
                if(_intervalId === undefined) {
                    _intervalId = setInterval(() => {
                        action();
                        if(!_isKeyDown){
                            clearInterval(_intervalId);
                            _intervalId = undefined;
                            console.log("claered");
                        }
                    }, interval);
                }
            }
        },

        stop(keycode) {
            if(keycode == key && document.activeElement.id.toLowerCase() !== 'chatbox') {
                _isKeyDown = false;
            }
        }
    };


}
setInterval(()=>{(PriSpam&&(Prime),SecSpam&&(Sec()))},1)
const healer = repeater(81, () => {place(foodType)}, 0);
const boostPlacer = repeater(70, () => {place(boostType)}, 0);
const spikePlacer = repeater(86, () => {place(spikeType)}, 0);
const millPlacer = repeater(78, () => {place(millType)}, 0);
const turretPlacer = repeater(72, () => {place(turretType)}, 0);
const boostSpiker = repeater(71, boostSpike, 0);
document.addEventListener('keydown', (e) => {
    spikePlacer.start(e.keyCode);
    healer.start(e.keyCode);
    boostPlacer.start(e.keyCode);
    boostSpiker.start(e.keyCode);
    millPlacer.start(e.keyCode);
    turretPlacer.start(e.keyCode);
    if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(turretType, myPlayer.dir + toRad(45));
        place(turretType, myPlayer.dir - toRad(45));
    }
    if (e.keyCode == 78 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        place(millType, myPlayer.dir + toRad(90));
        place(millType, myPlayer.dir + toRad(270));
        place(millType, myPlayer.dir + toRad(0));
    }
    if(e.keyCode == 82 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        again=0;
        chat('NOZO insta');
        autoprimary = true;
        autosecondary = false;
        autoaim = true;
        autoprimary = true;
        autosecondary = false;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["5", [primary, true]]);
        doNewSend(["7", [1]]);
        doNewSend(["13c", [1, 7, 0]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [1, 21, 1]]);
        doNewSend(["13c", [0, 21, 1]]);
        setTimeout( () => {
            autoprimary = false;
            autosecondary = true;
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, 100);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["7", [1]]);
            doNewSend(["5", [secondary, true]]);
            doNewSend(["13c", [0, 21, 1]]);
            if (myPlayer.y < 2400){
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                doNewSend(["13c", [0, 31, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 0]]);
            }
            autosecondary = false;
            autoaim = false;
            setTimeout(weapons.reload,111)
        }, 215);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [1, 11, 1]]);
            doNewSend(["13c", [0, 11, 1]]);

        },1600);
    }
    if (e.keyCode == 32 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        place(spikeType, myPlayer.dir + toRad(43));
        place(spikeType, myPlayer.dir - toRad(43));
        doNewSend(["c", [1]]);
        setTimeout(() => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
        }, 100);
        setTimeout(() => {
            doNewSend(["c", [0]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
            autoaim = false;
        }, 200);
    }
    if (e.keyCode == 76 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [secondary, true]]);
        doNewSend(["7", [1]]);
        setTimeout(() => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["6", [12]]);
            doNewSend(["13c", [0, 19, 1]]);
        }, 100);
        setTimeout(() => {
            doNewSend(["6", [15]]);
            doNewSend(["13c", [0, 21, 1]]);
        }, 200);
        setTimeout(() => {
            doNewSend(["7", [1]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
            doNewSend(["5", [primary, true]]);
            autoaim = false;
        }, 300);
    }
    if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        autoaim = true;
        doNewSend(["5", [primary, true]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["7", [1]]);
        setTimeout(() => {
            doNewSend(["6", [5]]);
            place(spikeType, null);
        }, 90);
        setTimeout(() => {
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["13c", [0, 21, 1]]);
        }, 200);
        setTimeout(() => {
            doNewSend(["5", [primary, true]]);
            doNewSend(["7", [1]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
            autoaim = false;
        }, 300);
    }
    if (e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["13c", [0, 53, 0]]);
    }
    if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["13c", [0, 40, 0]]);
    }
    if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 18, 1]]);
        doNewSend(["13c", [0, 7, 0]]);
    }
    if (e.keyCode == 81 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 21, 1]]);
        doNewSend(["13c", [0, 6, 0]]);
    }
    if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 19, 1]]);
        doNewSend(["13c", [0, 20, 0]]);
    }
    if (e.keyCode == 192 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 11, 0]]);
        doNewSend(["13c", [0, 21, 1]]);
    }
    if (e.keyCode == 16 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["13c", [0, 0, 0]]);
        if (myPlayer.y < 2400) {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 15, 0]]);
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 31, 0]]);
        } else if (isEnemyNear == true) {
            doNewSend(["13c", [0, 21, 1]]);
            doNewSend(["13c", [0, 6, 0]]);
        } else {
            doNewSend(["13c", [0, 11, 1]]);
            doNewSend(["13c", [0, 12, 0]]);
        }
    }
    if (e.keyCode == 97 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (WingSpam) {
            WingSpam1 = setTimeout(function () { WingSpamFC1(); }, 0);
            doNewSend(["ch", ["Wing Spam: ON"]]);
        } else {
            clearTimeout(WingSpam1);
            clearTimeout(WingSpam2);
            clearTimeout(WingSpam3);
            clearTimeout(WingSpam4);
            doNewSend(["ch", ["Wing Spam: OFF"]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
        }
        WingSpam = !WingSpam;
    }
    if (e.keyCode == 98 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (HatSpam) {
            HatSpam1 = setTimeout(function () { HatSpamFC1(); }, 0);
            doNewSend(["ch", ["Hat Spam: ON"]]);
        } else {
            clearTimeout(HatSpam1);
            clearTimeout(HatSpam2);
            clearTimeout(HatSpam3);
            clearTimeout(HatSpam4);
            clearTimeout(HatSpam5);
            clearTimeout(HatSpam6);
            clearTimeout(HatSpam7);
            doNewSend(["ch", ["Hat Spam: OFF"]]);
            doNewSend(["13c", [0, 0, 1]]);
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
        }
        HatSpam = !HatSpam;
    }
    if (e.keyCode == 40 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (ClanSpam) {
            ClanSpam1 = setTimeout(function () { ClanSpamFC1(); }, 0);
        } else {
            clearTimeout(ClanSpam1);
            clearTimeout(ClanSpam2);
        }
        ClanSpam = !ClanSpam;
    }
    if (e.keyCode == 38 && document.activeElement.id.toLowerCase() !== 'chatbox') {
        if (ChatSpam) {
            ChatSpam1 = setTimeout(function () { ChatSpamFC1(); }, 0);
        } else {
            clearTimeout(ChatSpam1);
            clearTimeout(ChatSpam2);
            clearTimeout(ChatSpam3);
            clearTimeout(ChatSpam4);
            clearTimeout(ChatSpam5);
            clearTimeout(ChatSpam6);
            clearTimeout(ChatSpam7);
            clearTimeout(ChatSpam8);
            clearTimeout(ChatSpam9);
            clearTimeout(ChatSpam10);
            clearTimeout(ChatSpam11);
            clearTimeout(ChatSpam12);
            clearTimeout(ChatSpam13);
            clearTimeout(ChatSpam14);
            clearTimeout(ChatSpam15);
            clearTimeout(ChatSpam16);
        }
        ChatSpam = !ChatSpam;
    }
})

document.addEventListener('keyup', (e) => {
    spikePlacer.stop(e.keyCode);
    boostPlacer.stop(e.keyCode);
    millPlacer.stop(e.keyCode);
    boostSpiker.stop(e.keyCode);
    turretPlacer.stop(e.keyCode);
    healer.stop(e.keyCode);
})


function isElementVisible(e) {
    return e?(e.offsetParent !== null):false;
}

function playersort(hat) {
    var a = []; enemiesNear.forEach(e => {
        e[9] == hat && (a.push(e))
    }); return a.length ? a.sort((a, b) => dist(a, myPlayer) - dist(b, myPlayer))[0] : 0;
}

function toRad(angle) {
    return angle * 0.01745329251;
}

function dist(a, b){
    return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) );
}

function animate(space, chance) {
    let result = '';
    let characters;
    if(space) {
        characters = 'ProjectNOZO';
    } else {
        characters = 'P.G';
    }
    if(space) {
        characters = characters.padStart((30 - characters.length) / 2 + characters.length)
        characters = characters.padEnd(30);
    }
    let count = 0;
    for (let i = 0; i < characters.length; i++ ) {
        if(Math.floor(Math.random() * chance) == 1 && characters.charAt(i) != "-" && count < 2 && characters.charAt(i) != " ") {
            result += "";
            count++
        } else {
            result += characters.charAt(i);
        }
    }
    return result;
}
window.crash = function () {
    document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["!Crash"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["!crash2"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["!crash3"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["4"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["5"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["6"]]); document.ws.oldSend(new Uint8Array([135, 102, 37, 116, 94, 162, 44, 210, 28, 223, 1, 13, 113, 180]))
    doNewSend(["ch", ["7"]]);
}
document.title = "Project NOZO"
window.aim = aim
document.addEventListener("mousedown", buttonPress, false);
document.addEventListener("mouseup", e => {
    localStorage.down = 0;
}, false);
function buttonPress(e) {
    if (e.button == 2) {
        doNewSend(["13c", [0, 40, 0]]);
        doNewSend(["13c", [0, 11, 1]]);
        setTimeout(() => {
            doNewSend(["13c", [0, 0, 0]]);
            if (myPlayer.y < 2400) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 31, 0]]);
            } else if (isEnemyNear == true) {
                doNewSend(["13c", [0, 21, 1]]);
                doNewSend(["13c", [0, 6, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 1]]);
                doNewSend(["13c", [0, 12, 0]]);
            }
        }, 100);
    } else { localStorage.down = 1 }
}
window.info2 = {}
window.Bots = {
    atk: false,
    boost: false,
    insta: false
};
var pos=[1,0]
function Boost() {
    place(boostType, info2.where)
}
window.Test2 = function (dist = 250) {
    try { return Math.sqrt(Math.pow((myPlayer.y - nearestEnemy[2]), 2) + Math.pow((myPlayer.x - nearestEnemy[1]), 2)) < dist; } catch (errr) { return 0 }
}
window.weapons = [{ id: 0, type: 0, name: "tool hammer", desc: "tool for gathering all resources", src: "hammer_1", length: 140, width: 140, xeOff: -3, yOff: 18, dmg: 25, range: 65, gather: 1, speed: 300 }, { id: 1, type: 0, age: 2, name: "hand axe", desc: "gathers resources at a higher rate", src: "axe_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 30, spdMult: 1, range: 70, gather: 2, speed: 400 }, { id: 2, type: 0, age: 8, pre: 1, name: "great axe", desc: "deal more damage and gather more resources", src: "great_axe_1", length: 140, width: 140, xOff: -8, yOff: 25, dmg: 35, spdMult: 1, range: 75, gather: 4, speed: 400 }, { id: 3, type: 0, age: 2, name: "short sword", desc: "increased attack power but slower move speed", src: "sword_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 46, dmg: 35, spdMult: .85, range: 110, gather: 1, speed: 300 }, { id: 4, type: 0, age: 8, pre: 3, name: "katana", desc: "greater range and damage", src: "samurai_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 59, dmg: 40, spdMult: .8, range: 118, gather: 1, speed: 300 }, { id: 5, type: 0, age: 2, name: "polearm", desc: "long range melee weapon", src: "spear_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 53, dmg: 45, knock: .2, spdMult: .82, range: 142, gather: 1, speed: 700 }, { id: 6, type: 0, age: 2, name: "bat", desc: "fast long range melee weapon", src: "bat_1", iPad: 1.3, length: 110, width: 180, xOff: -8, yOff: 53, dmg: 20, knock: .7, range: 110, gather: 1, speed: 300 }, { id: 7, type: 0, age: 2, name: "daggers", desc: "really fast short range weapon", src: "dagger_1", iPad: .8, length: 110, width: 110, xOff: 18, yOff: 0, dmg: 20, knock: .1, range: 65, gather: 1, hitSlow: .1, spdMult: 1.13, speed: 100 }, { id: 8, type: 0, age: 2, name: "stick", desc: "great for gathering but very weak", src: "stick_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 1, spdMult: 1, range: 70, gather: 7, speed: 400 }, { id: 9, type: 1, age: 6, name: "hunting bow", desc: "bow used for ranged combat and hunting", src: "bow_1", req: ["wood", 4], length: 120, width: 120, xOff: -6, yOff: 0, projectile: 0, spdMult: .75, speed: 600 }, { id: 10, type: 1, age: 6, name: "great hammer", desc: "hammer used for destroying structures", src: "great_hammer_1", length: 140, width: 140, xOff: -9, yOff: 25, dmg: 10, spdMult: .88, range: 75, sDmg: 7.5, gather: 1, speed: 400, hatid: 40 }, { id: 11, type: 1, age: 6, name: "wooden shield", desc: "blocks projectiles and reduces melee damage", src: "shield_1", length: 120, width: 120, shield: .2, xOff: 6, yOff: 0, spdMult: .7, speed: 0 }, { id: 12, type: 1, age: 8, pre: 9, name: "crossbow", desc: "deals more damage and has greater range", src: "crossbow_1", req: ["wood", 5], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 2, spdMult: .7, speed: 700, hatid: 20 }, { id: 13, type: 1, age: 9, pre: 12, name: "repeater crossbow", desc: "high firerate crossbow with reduced damage", src: "crossbow_2", req: ["wood", 10], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 3, spdMult: .7, speed: 300, hatid: 20 }, { id: 14, type: 1, age: 6, name: "mc grabby", desc: "steals resources from enemies", src: "grab_1", length: 130, width: 210, xOff: -8, yOff: 53, dmg: 0, steal: 250, knock: .2, spdMult: 1.05, range: 125, gather: 0, speed: 700 }, { id: 15, type: 1, age: 9, pre: 12, name: "musket", desc: "slow firerate but high damage and range", src: "musket_1", req: ["stone", 10], aboveHand: !0, rec: .35, armS: .6, hndS: .3, hndD: 1.6, length: 205, width: 205, xOff: 25, yOff: 0, projectile: 5, hideProjectile: !0, spdMult: .6, speed: 1500, hatid: 20 }], activeObjects = [{ name: "apple", desc: "restores 20 health when consumed", req: ["food", 10], consume: function (e) { return e.changeHealth(20, e) }, scale: 22, holdOffset: 15 }, { age: 3, name: "cookie", desc: "restores 40 health when consumed", req: ["food", 15], consume: function (e) { return e.changeHealth(40, e) }, scale: 27, holdOffset: 15 }, { age: 7, name: "pizza", desc: "restores 30 health and another 50 over 5 seconds", req: ["food", 30], consume: function (e) { return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0) }, scale: 27, holdOffset: 15 }, { name: "wood wall", desc: "provides protection for your village", req: ["wood", 10], projDmg: !0, health: 380, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 3, name: "stone wall", desc: "provides improved protection for your village", req: ["stone", 25], health: 900, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 7, pre: 1, name: "castle wall", desc: "provides powerful protection for your village", req: ["stone", 35], health: 1500, scale: 52, holdOffset: 20, placeOffset: -5 }, { name: "spikes", desc: "damages enemies when they touch them", req: ["wood", 20, "stone", 5], health: 400, dmg: 20, scale: 49, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 5, name: "greater spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 10], health: 500, dmg: 35, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 1, name: "poison spikes", desc: "poisons enemies when they touch them", req: ["wood", 35, "stone", 15], health: 600, dmg: 30, pDmg: 5, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 2, name: "spinning spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 20], health: 500, dmg: 45, turnSpeed: .003, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { name: "windmill", desc: "generates gold over time", req: ["wood", 50, "stone", 10], health: 400, pps: 1, turnSpeed: .0016, spritePadding: 25, iconLineMult: 12, scale: 45, holdOffset: 20, placeOffset: 5 }, { age: 5, pre: 1, name: "faster windmill", desc: "generates more gold over time", req: ["wood", 60, "stone", 20], health: 500, pps: 1.5, turnSpeed: .0025, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 8, pre: 1, name: "power mill", desc: "generates more gold over time", req: ["wood", 100, "stone", 50], health: 800, pps: 2, turnSpeed: .005, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 5, type: 2, name: "mine", desc: "allows you to mine stone", req: ["wood", 20, "stone", 100], iconLineMult: 12, scale: 65, holdOffset: 20, placeOffset: 0 }, { age: 5, type: 0, name: "sapling", desc: "allows you to farm wood", req: ["wood", 150], iconLineMult: 12, colDiv: .5, scale: 110, holdOffset: 50, placeOffset: -15 }, { age: 4, name: "pit trap", desc: "pit that traps enemies if they walk over it", req: ["wood", 30, "stone", 30], trap: !0, ignoreCollision: !0, hideFromEnemy: !0, health: 500, colDiv: .2, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 4, name: "boost pad", desc: "provides boost when stepped on", req: ["stone", 20, "wood", 5], ignoreCollision: !0, boostSpeed: 1.5, health: 150, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, doUpdate: !0, name: "turret", desc: "defensive structure that shoots at enemies", req: ["wood", 200, "stone", 150], health: 800, projectile: 1, shootRange: 700, shootRate: 2200, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "platform", desc: "platform to shoot over walls and cross over water", req: ["wood", 20], ignoreCollision: !0, zIndex: 1, health: 300, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "healing pad", desc: "standing on it will slowly heal you", req: ["wood", 30, "food", 10], ignoreCollision: !0, healCol: 15, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 9, name: "spawn pad", desc: "you will spawn here when you die but it will dissapear", req: ["wood", 100, "stone", 100], health: 400, ignoreCollision: !0, spawnPoint: !0, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "blocker", desc: "blocks building in radius", req: ["wood", 30, "stone", 25], ignoreCollision: !0, blocker: 300, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "teleporter", desc: "teleports you to a random point on the map", req: ["wood", 60, "stone", 60], ignoreCollision: !0, teleport: !0, health: 200, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }];
window.info2 = {};
let Sec=window.Sec = function () { doNewSend(["5", [secondary, true]]); }
let Prime=window.Prime = function () { doNewSend(["5", [primary, true]]); }
window.DidB = 1;
window.didchech = 0;
window.doNewSend = doNewSend
window.testI = function () {
    Prime()
    autoaim = 1;
    doNewSend(["13c", [0, 0, 1]]);
    setTimeout(() => {
        doNewSend(["2", [nearestEnemyAngle]]);
        doNewSend(["7", [1]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [0, 18, 1]]);
    }, 20);
    setTimeout(e => {
        doNewSend(["2", [nearestEnemyAngle]]);
        Sec()
        doNewSend(["13c", [0, 53, 0]]);
        autoaim = 0;
        for (let i = 0; i < 430; i++) {
            doNewSend(["5", [secondary, true]]);
        }
        setTimeout(e => { weapons.reload(); doNewSend(["7", [1]]); }, 200)
    })
}
function Cbiome() {
    if (didchech) { return }
    //console.log('used',this)
    didchech = 1;
    setTimeout(e => { didchech = 0 }, 200)
    doNewSend(["13c", [0, 0, 1]]);
    doNewSend(["13c", [0, 0, 0]]);
    if (myPlayer.y < 2400) {
        doNewSend(["13c", [0, 11, 1]]);
        doNewSend(["13c", [0, 15, 0]]);
    } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
        doNewSend(["13c", [0, 11, 1]]);
        doNewSend(["13c", [0, 31, 0]]);
    } else if (isEnemyNear == true) {
        doNewSend(["13c", [0, 11, 1]]);
        doNewSend(["13c", [0, 6, 0]]);
    }
    else if (info2.NA && info2.AD < (info2.range + 100)) {
        doNewSend(["13c", [0, 21, 1]]);
        doNewSend(["13c", [0, 6, 0]]);
    }
    else {
        doNewSend(["13c", [0, 11, 1]]);
        doNewSend(["13c", [0, 12, 0]]);
    }
}
window.itype=1
window.i2=50
window.i3=100
window.SandBox = window.location.href.includes('box');
window.catk=1;
window.insta = function (e = 1, hit = hit360,data,sp=1,aim2=autoaim) {
    var info1 = info2
    if (!again) return;
    if(nearestEnemy[9]==11){chat('Imagine using that hat');return};
    if(nearestEnemy[5]==11){chat('Ew shIeld.!?!?!');return};
    if (again&&!sp==!0?1:!info2.far&&!info2.trapped&&window.catk&&window.caninsta) {
        fin1=0;
        hit360=0;
        didreload=0;
        chat('NOZO insta');
        again=0;
        autoprimary = true;
        autosecondary = false;
        autoaim = true;
        autoprimary = true;
        autosecondary = false;
        doNewSend(["13c", [0, 0, 1]]);
        doNewSend(["5", [primary, true]]);
        doNewSend(["7", [1]]);
        doNewSend(["13c", [1, 7, 0]]);
        doNewSend(["13c", [0, 7, 0]]);
        doNewSend(["13c", [1, 21, 1]]);
        doNewSend(["13c", [0, 21, 1]]);
        setTimeout( () => {
            autoprimary = false;
            autosecondary = true;
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [1, 53, 0]]);
            doNewSend(["13c", [0, 53, 0]]);
            doNewSend(["5", [secondary, true]]);
        }, 100);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["7", [1]]);
            doNewSend(["5", [secondary, true]]);
            doNewSend(["13c", [0, 21, 1]]);
            if (myPlayer.y < 2400){
                doNewSend(["13c", [0, 15, 0]]);
            } else if (myPlayer.y > 6850 && myPlayer.y < 7550){
                doNewSend(["13c", [0, 31, 0]]);
            } else {
                doNewSend(["13c", [0, 11, 0]]);
            }
            autosecondary = false;
            autoaim = false;
            fini=1;
            hit360=hit;
            !intrap&&setTimeout(weapons.reload,150)
        }, 215);
        setTimeout( () => {
            doNewSend(["13c", [0, 0, 0]]);
            doNewSend(["13c", [0, 6, 0]]);
            doNewSend(["13c", [1, 11, 1]]);
            doNewSend(["13c", [0, 11, 1]]);
        },1600);
    }
}
function chat(m) { doNewSend(["ch", [m]]); }
accessories = [{ id: 12, name: "Snowball", price: 1e3, scale: 105, xOff: 18, desc: "no effect" }, { id: 9, name: "Tree Cape", price: 1e3, scale: 90, desc: "no effect" }, { id: 10, name: "Stone Cape", price: 1e3, scale: 90, desc: "no effect" }, { id: 3, name: "Cookie Cape", price: 1500, scale: 90, desc: "no effect" }, { id: 8, name: "Cow Cape", price: 2e3, scale: 90, desc: "no effect" }, { id: 11, name: "Monkey Tail", price: 2e3, scale: 97, xOff: 25, desc: "Super speed but reduced damage", spdMult: 1.35, dmgMult: .2 }, { id: 17, name: "Apple Basket", price: 3e3, scale: 80, xOff: 12, desc: "slowly regenerates health over time", healthRegen: 1 }, { id: 6, name: "Winter Cape", price: 3e3, scale: 90, desc: "no effect" }, { id: 4, name: "Skull Cape", price: 4e3, scale: 90, desc: "no effect" }, { id: 5, name: "Dash Cape", price: 5e3, scale: 90, desc: "no effect" }, { id: 2, name: "Dragon Cape", price: 6e3, scale: 90, desc: "no effect" }, { id: 1, name: "Super Cape", price: 8e3, scale: 90, desc: "no effect" }, { id: 7, name: "Troll Cape", price: 8e3, scale: 90, desc: "no effect" }, { id: 14, name: "Thorns", price: 1e4, scale: 115, xOff: 20, desc: "no effect" }, { id: 15, name: "Blockades", price: 1e4, scale: 95, xOff: 15, desc: "no effect" }, { id: 20, name: "Devils Tail", price: 1e4, scale: 95, xOff: 20, desc: "no effect" }, { id: 16, name: "Sawblade", price: 12e3, scale: 90, spin: !0, xOff: 0, desc: "deal damage to players that damage you", dmg: .15 }, { id: 13, name: "Angel Wings", price: 15e3, scale: 138, xOff: 22, desc: "slowly regenerates health over time", healthRegen: 3 }, { id: 19, name: "Shadow Wings", price: 15e3, scale: 138, xOff: 22, desc: "increased movement speed", spdMult: 1.1 }, { id: 18, name: "Blood Wings", price: 2e4, scale: 178, xOff: 26, desc: "restores health when you deal damage", healD: .2 }, { id: 21, name: "Corrupt X Wings", price: 2e4, scale: 178, xOff: 26, desc: "deal damage to players that damage you", dmg: .25 }], hats = [{ id: 45, name: "Shame!", dontSell: !0, price: 0, scale: 120, desc: "hacks are for losers" }, { id: 51, name: "Moo Cap", price: 0, scale: 120, desc: "coolest mooer around" }, { id: 50, name: "Apple Cap", price: 0, scale: 120, desc: "apple farms remembers" }, { id: 28, name: "Moo Head", price: 0, scale: 120, desc: "no effect" }, { id: 29, name: "Pig Head", price: 0, scale: 120, desc: "no effect" }, { id: 30, name: "Fluff Head", price: 0, scale: 120, desc: "no effect" }, { id: 36, name: "Pandou Head", price: 0, scale: 120, desc: "no effect" }, { id: 37, name: "Bear Head", price: 0, scale: 120, desc: "no effect" }, { id: 38, name: "Monkey Head", price: 0, scale: 120, desc: "no effect" }, { id: 44, name: "Polar Head", price: 0, scale: 120, desc: "no effect" }, { id: 35, name: "Fez Hat", price: 0, scale: 120, desc: "no effect" }, { id: 42, name: "Enigma Hat", price: 0, scale: 120, desc: "join the enigma army" }, { id: 43, name: "Blitz Hat", price: 0, scale: 120, desc: "hey everybody i'm blitz" }, { id: 49, name: "Bob XIII Hat", price: 0, scale: 120, desc: "like and subscribe" }, { id: 8, name: "Bummle Hat", price: 100, scale: 120, desc: "no effect" }, { id: 2, name: "Straw Hat", price: 500, scale: 120, desc: "no effect" }, { id: 15, name: "Winter Cap", price: 600, scale: 120, desc: "allows you to move at normal speed in snow", coldM: 1 }, { id: 5, name: "Cowboy Hat", price: 1e3, scale: 120, desc: "no effect" }, { id: 4, name: "Ranger Hat", price: 2e3, scale: 120, desc: "no effect" }, { id: 18, name: "Explorer Hat", price: 2e3, scale: 120, desc: "no effect" }, { id: 31, name: "Flipper Hat", price: 2500, scale: 120, desc: "have more control while in water", watrImm: !0 }, { id: 1, name: "Marksman Cap", price: 3e3, scale: 120, desc: "increases arrow speed and range", aMlt: 1.3 }, { id: 10, name: "Bush Gear", price: 3e3, scale: 160, desc: "allows you to disguise yourself as a bush" }, { id: 48, name: "Halo", price: 3e3, scale: 120, desc: "no effect" }, { id: 6, name: "Soldier Helmet", price: 4e3, scale: 120, desc: "reduces damage taken but slows movement", spdMult: .94, dmgMult: .75 }, { id: 23, name: "Anti Venom Gear", price: 4e3, scale: 120, desc: "makes you immune to poison", poisonRes: 1 }, { id: 13, name: "Medic Gear", price: 5e3, scale: 110, desc: "slowly regenerates health over time", healthRegen: 3 }, { id: 9, name: "Miners Helmet", price: 5e3, scale: 120, desc: "earn 1 extra gold per resource", extraGold: 1 }, { id: 32, name: "Musketeer Hat", price: 5e3, scale: 120, desc: "reduces cost of projectiles", projCost: .5 }, { id: 7, name: "Bull Helmet", price: 6e3, scale: 120, desc: "increases damage done but drains health", healthRegen: -5, dmgMult: 1.5, spdMult: .96 }, { id: 22, name: "Emp Helmet", price: 6e3, scale: 120, desc: "turrets won't attack but you move slower", antiTurret: 1, spdMult: .7 }, { id: 12, name: "Booster Hat", price: 6e3, scale: 120, desc: "increases your movement speed", spdMult: 1.16 }, { id: 26, name: "Barbarian Armor", price: 8e3, scale: 120, desc: "knocks back enemies that attack you", dmgK: .6 }, { id: 21, name: "Plague Mask", price: 1e4, scale: 120, desc: "melee attacks deal poison damage", poisonDmg: 5, poisonTime: 6 }, { id: 46, name: "Bull Mask", price: 1e4, scale: 120, desc: "bulls won't target you unless you attack them", bullRepel: 1 }, { id: 14, name: "Windmill Hat", topSprite: !0, price: 1e4, scale: 120, desc: "generates points while worn", pps: 1.5 }, { id: 11, name: "Spike Gear", topSprite: !0, price: 1e4, scale: 120, desc: "deal damage to players that damage you", dmg: .45 }, { id: 53, name: "Turret Gear", topSprite: !0, price: 1e4, scale: 120, desc: "you become a walking turret", turret: { proj: 1, range: 700, rate: 2500 }, spdMult: .5 }, { id: 20, name: "Samurai Armor", price: 12e3, scale: 120, desc: "increased attack speed and fire rate", atkSpd: .78 }, { id: 16, name: "Bushido Armor", price: 12e3, scale: 120, desc: "restores health when you deal damage", healD: .4 }, { id: 27, name: "Scavenger Gear", price: 15e3, scale: 120, desc: "earn double points for each kill", kScrM: 2 }, { id: 40, name: "Tank Gear", price: 15e3, scale: 120, desc: "increased damage to buildings but slower movement", spdMult: .3, bDmg: 3.3 }, { id: 52, name: "Thief Gear", price: 15e3, scale: 120, desc: "steal half of a players gold when you kill them", goldSteal: .5 }], objects = [{ id: 0, name: "food", layer: 0 }, { id: 1, name: "walls", place: !0, limit: 30, layer: 0 }, { id: 2, name: "spikes", place: !0, limit: 15, layer: 0 }, { id: 3, name: "mill", place: !0, limit: 7, layer: 1 }, { id: 4, name: "mine", place: !0, limit: 1, layer: 0 }, { id: 5, name: "trap", place: !0, limit: 6, layer: -1 }, { id: 6, name: "booster", place: !0, limit: 12, layer: -1 }, { id: 7, name: "turret", place: !0, limit: 2, layer: 1 }, { id: 8, name: "watchtower", place: !0, limit: 12, layer: 1 }, { id: 9, name: "buff", place: !0, limit: 4, layer: -1 }, { id: 10, name: "spawn", place: !0, limit: 1, layer: -1 }, { id: 11, name: "sapling", place: !0, limit: 2, layer: 0 }, { id: 12, name: "blocker", place: !0, limit: 3, layer: -1 }, { id: 13, name: "teleporter", place: !0, limit: 1, layer: -1 }], weapons = [{ id: 0, type: 0, name: "tool hammer", desc: "tool for gathering all resources", src: "hammer_1", length: 140, width: 140, xOff: -3, yOff: 18, dmg: 25, range: 65, gather: 1, speed: 300 }, { id: 1, type: 0, age: 2, name: "hand axe", desc: "gathers resources at a higher rate", src: "axe_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 30, spdMult: 1, range: 70, gather: 2, speed: 400 }, { id: 2, type: 0, age: 8, pre: 1, name: "great axe", desc: "deal more damage and gather more resources", src: "great_axe_1", length: 140, width: 140, xOff: -8, yOff: 25, dmg: 35, spdMult: 1, range: 75, gather: 4, speed: 400 }, { id: 3, type: 0, age: 2, name: "short sword", desc: "increased attack power but slower move speed", src: "sword_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 46, dmg: 35, spdMult: .85, range: 110, gather: 1, speed: 300 }, { id: 4, type: 0, age: 8, pre: 3, name: "katana", desc: "greater range and damage", src: "samurai_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 59, dmg: 40, spdMult: .8, range: 118, gather: 1, speed: 300 }, { id: 5, type: 0, age: 2, name: "polearm", desc: "long range melee weapon", src: "spear_1", iPad: 1.3, length: 130, width: 210, xOff: -8, yOff: 53, dmg: 45, knock: .2, spdMult: .82, range: 142, gather: 1, speed: 700 }, { id: 6, type: 0, age: 2, name: "bat", desc: "fast long range melee weapon", src: "bat_1", iPad: 1.3, length: 110, width: 180, xOff: -8, yOff: 53, dmg: 20, knock: .7, range: 110, gather: 1, speed: 300 }, { id: 7, type: 0, age: 2, name: "daggers", desc: "really fast short range weapon", src: "dagger_1", iPad: .8, length: 110, width: 110, xOff: 18, yOff: 0, dmg: 20, knock: .1, range: 65, gather: 1, hitSlow: .1, spdMult: 1.13, speed: 100 }, { id: 8, type: 0, age: 2, name: "stick", desc: "great for gathering but very weak", src: "stick_1", length: 140, width: 140, xOff: 3, yOff: 24, dmg: 1, spdMult: 1, range: 70, gather: 7, speed: 400 }, { id: 9, type: 1, age: 6, name: "hunting bow", desc: "bow used for ranged combat and hunting", src: "bow_1", req: ["wood", 4], length: 120, width: 120, xOff: -6, yOff: 0, projectile: 0, spdMult: .75, speed: 600 }, { id: 10, type: 1, age: 6, name: "great hammer", desc: "hammer used for destroying structures", src: "great_hammer_1", length: 140, width: 140, xOff: -9, yOff: 25, dmg: 10, spdMult: .88, range: 75, sDmg: 7.5, gather: 1, speed: 400, hatid: 40 }, { id: 11, type: 1, age: 6, name: "wooden shield", desc: "blocks projectiles and reduces melee damage", src: "shield_1", length: 120, width: 120, shield: .2, xOff: 6, yOff: 0, spdMult: .7 }, { id: 12, type: 1, age: 8, pre: 9, name: "crossbow", desc: "deals more damage and has greater range", src: "crossbow_1", req: ["wood", 5], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 2, spdMult: .7, speed: 700, hatid: 20 }, { id: 13, type: 1, age: 9, pre: 12, name: "repeater crossbow", desc: "high firerate crossbow with reduced damage", src: "crossbow_2", req: ["wood", 10], aboveHand: !0, armS: .75, length: 120, width: 120, xOff: -4, yOff: 0, projectile: 3, spdMult: .7, speed: 300, hatid: 20 }, { id: 14, type: 1, age: 6, name: "mc grabby", desc: "steals resources from enemies", src: "grab_1", length: 130, width: 210, xOff: -8, yOff: 53, dmg: 0, steal: 250, knock: .2, spdMult: 1.05, range: 125, gather: 0, speed: 700 }, { id: 15, type: 1, age: 9, pre: 12, name: "musket", desc: "slow firerate but high damage and range", src: "musket_1", req: ["stone", 10], aboveHand: !0, rec: .35, armS: .6, hndS: .3, hndD: 1.6, length: 205, width: 205, xOff: 25, yOff: 0, projectile: 5, hideProjectile: !0, spdMult: .6, speed: 1500, hatid: 20 }], activeObjects = [{ name: "apple", desc: "restores 20 health when consumed", req: ["food", 10], consume: function (e) { return e.changeHealth(20, e) }, scale: 22, holdOffset: 15 }, { age: 3, name: "cookie", desc: "restores 40 health when consumed", req: ["food", 15], consume: function (e) { return e.changeHealth(40, e) }, scale: 27, holdOffset: 15 }, { age: 7, name: "pizza", desc: "restores 30 health and another 50 over 5 seconds", req: ["food", 30], consume: function (e) { return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0) }, scale: 27, holdOffset: 15 }, { name: "wood wall", desc: "provides protection for your village", req: ["wood", 10], projDmg: !0, health: 380, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 3, name: "stone wall", desc: "provides improved protection for your village", req: ["stone", 25], health: 900, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 7, pre: 1, name: "castle wall", desc: "provides powerful protection for your village", req: ["stone", 35], health: 1500, scale: 52, holdOffset: 20, placeOffset: -5 }, { name: "spikes", desc: "damages enemies when they touch them", req: ["wood", 20, "stone", 5], health: 400, dmg: 20, scale: 49, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 5, name: "greater spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 10], health: 500, dmg: 35, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 1, name: "poison spikes", desc: "poisons enemies when they touch them", req: ["wood", 35, "stone", 15], health: 600, dmg: 30, pDmg: 5, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { age: 9, pre: 2, name: "spinning spikes", desc: "damages enemies when they touch them", req: ["wood", 30, "stone", 20], health: 500, dmg: 45, turnSpeed: .003, scale: 52, spritePadding: -23, holdOffset: 8, placeOffset: -5 }, { name: "windmill", desc: "generates gold over time", req: ["wood", 50, "stone", 10], health: 400, pps: 1, turnSpeed: .0016, spritePadding: 25, iconLineMult: 12, scale: 45, holdOffset: 20, placeOffset: 5 }, { age: 5, pre: 1, name: "faster windmill", desc: "generates more gold over time", req: ["wood", 60, "stone", 20], health: 500, pps: 1.5, turnSpeed: .0025, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 8, pre: 1, name: "power mill", desc: "generates more gold over time", req: ["wood", 100, "stone", 50], health: 800, pps: 2, turnSpeed: .005, spritePadding: 25, iconLineMult: 12, scale: 47, holdOffset: 20, placeOffset: 5 }, { age: 5, type: 2, name: "mine", desc: "allows you to mine stone", req: ["wood", 20, "stone", 100], iconLineMult: 12, scale: 65, holdOffset: 20, placeOffset: 0 }, { age: 5, type: 0, name: "sapling", desc: "allows you to farm wood", req: ["wood", 150], iconLineMult: 12, colDiv: .5, scale: 110, holdOffset: 50, placeOffset: -15 }, { age: 4, name: "pit trap", desc: "pit that traps enemies if they walk over it", req: ["wood", 30, "stone", 30], trap: !0, ignoreCollision: !0, hideFromEnemy: !0, health: 500, colDiv: .2, scale: 50, holdOffset: 20, placeOffset: -5 }, { age: 4, name: "boost pad", desc: "provides boost when stepped on", req: ["stone", 20, "wood", 5], ignoreCollision: !0, boostSpeed: 1.5, health: 150, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, doUpdate: !0, name: "turret", desc: "defensive structure that shoots at enemies", req: ["wood", 200, "stone", 150], health: 800, projectile: 1, shootRange: 700, shootRate: 2200, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "platform", desc: "platform to shoot over walls and cross over water", req: ["wood", 20], ignoreCollision: !0, zIndex: 1, health: 300, scale: 43, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "healing pad", desc: "standing on it will slowly heal you", req: ["wood", 30, "food", 10], ignoreCollision: !0, healCol: 15, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 9, name: "spawn pad", desc: "you will spawn here when you die but it will dissapear", req: ["wood", 100, "stone", 100], health: 400, ignoreCollision: !0, spawnPoint: !0, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "blocker", desc: "blocks building in radius", req: ["wood", 30, "stone", 25], ignoreCollision: !0, blocker: 300, health: 400, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }, { age: 7, name: "teleporter", desc: "teleports you to a random point on the map", req: ["wood", 60, "stone", 60], ignoreCollision: !0, teleport: !0, health: 200, colDiv: .7, scale: 45, holdOffset: 20, placeOffset: -5 }];
function Ball() { accessories.forEach(e => { buy(e, 1) }); hats.forEach(e=>{buy(e,1)}); }
buy = function (e, e2 = 0) { storeBuy(e.id, e2); }
window.chat = chat;
window.again = 1;
/*Auto reloading*/
var aureload=setInterval(() => {
    try{loadingText.innerText.includes('disconnected') && (location.href=location.href,clearInterval(aureload));
    if (gameUI.innerText == `













			Leaderboard
















		Ã®Â£â€œ


		Ã®Â£â€˜


		Ã®Â¢Â¯





			Hats
			Accessories








`) {
        window.location.href=window.location.href;clearInterval(aureload)
    }
        }catch(err){};
}, 1000)
weapons.reload = function () {
    Prime();
    chat('Gaston#1779 reloading');
    !intrap&&
    setTimeout(e => {
        chat('reloading 2');
        Sec();
        !intrap&&setTimeout(e => {
            chat('Done');
            Prime();
            !intrap&&setTimeout(e => {
                didreload=1;
                again = 1; window.Inv && (doNewSend(['5', ['length', !0]]))
            }, 300)
        }, info2.ss + 50)
    }, info2.ps + 50)
}
window.shameCount=0;
function update() {
    window.nearestEnemyAngle = nearestEnemyAngle
    for (let i = 0; i < 9; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            primary = i;
        }
    }
    for (let i = 9; i < 16; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            secondary = i;
        }
    }
    for (let i = 16; i < 19; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            foodType = i - 16;
            window.ft=foodType
        }
    }
    for (let i = 22; i < 26; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            spikeType = i - 16;
        }
    }
    for (let i = 26; i < 29; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            millType = i - 16; window.millType = millType
        }
    }
    for (let i = 31; i < 33; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString()))) {
            boostType = i - 16;
        }
    }
    for (let i = 33; i < 39; i++) {
        if (isElementVisible(document.getElementById("actionBarItem" + i.toString())) && i != 36) {
            turretType = i - 16;
        }
    }
    window.primary=primary;window.secondary=secondary;
    window.turretType=turretType;window.millType=millType;
    Mymod();
}
function cSs() { var _0x2de4 = ['\x20\x20\x20\x20top:\x2010px;', 'does', 'styleSheet', '\x20\x20\x20\x20color:\x20#FFF700\x20!important;', 'getElementById', '1fSDlqT', '8zvYNMf', '\x20\x20.actionBarItem\x20{', 'diedText', '\x20\x20\x20\x20bottom:\x2010px;', 'href', '\x20\x20\x20\x20width:700px;', '\x20\x20\x20\x20-webkit-transform:\x20translateX(26px);', '\x20\x20#followText\x20{', '\x20\x20\x20\x20color:\x20#ff6500;', '\x20\x20\x20\x20color:\x20#000000;', 'innerText', 'YTID', '\x20\x20\x20\x20color:\x20#A20000;', '\x20\x20\x20\x20height:\x2065px;', '\x20\x20\x20\x20border-radius:\x2010px\x20!important;', 'isplayer', '\x20\x20\x20\x20margin-top:\x20250%;', '\x20\x20\x20\x20background:\x20black;', '\x20\x20\x20\x20justify-content:\x20center;', '\x20\x20\x20\x20color:\x20#00FFFF!important;', '\x20\x20#allianceInput:hover\x20{', '\x20\x20\x20\x20display:\x20inline-flex;', '#downloadButtonContainer', 'match', 'error', '\x20\x20\x20\x20color:\x20#fff;', '\x20\x20.menuHeader:first-child\x20{', '301967CoSLgV', 'frameborder', '\x20\x20#ageBarBody\x20{', '://www.youtube.com/watch?v=-Mypt378fkc', '#cdm-zone-02', 'every', 'onkeyup', 'block', '\x20\x20.material-icons\x20{\x20', '\x20\x20.uiElement\x20{', '\x20\x20#pre-content-container\x20{', '6718zqNWBD', '\x20\x20\x20\x20background:\x20#ff8007;', '\x20\x20#youtubeFollow,\x20', '\x20\x20\x20\x20top:\x2010.7%;', '\x20\x20\x20\x20color:\x20#FF8C00;', '\x20\x20input:focus\x20+\x20.slider\x20{', '\x20\x20.resourceDisplay\x20{', 'parentNode', 'home-header', 'keys', '\x20\x20\x20\x20margin-bottom:\x203px;', 'cent', 'greasyfork', 'after', 'rgba(212,\x2032,\x2032,\x201)', 'test', '#insert', '\x20\x20\x20\x20vertical-align:middle;', 'setup3', 'appendChild', '233401ndlDIJ', '\x20\x20\x20\x20color:\x20#51FF00\x20!important;', '\x20\x20.storeItem,\x20', 'log', '\x20\x20.joinAlBtn\x20{', '\x20\x20\x20\x20padding:\x200px\x2070px;', 'Ã¢ÂÅ’ÃŽÂ£LIMIÃŽ ÃŽâ€TÃŽÂ£DÃ¢ÂÅ’', '\x20\x20.menuHeader\x20{', '\x20\x20\x20\x20transition:\x20color\x20.5s;', 'site', 'head', 'push', '#linksContainer1', '.menuHeader', 'surviv', '\x20\x20#allianceHolder,\x20', '\x20\x20\x20\x20background:\x20#4ACA1A;', '\x20\x20\x20\x20max-height:\x20500px;', '\x20\x20\x20\x20background:\x20url(https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif);', 'offsetParent', 'onclick', '\x20\x20.partyWrap\x20{', '\x20\x20\x20\x20background:\x20rgba(0,0,0,0.6);', '\x20\x20\x20\x20color:\x20#FFFFFF\x20!important;', 'default_list', '\x20\x20\x20\x20transition:\x201s;', '#linksContainer2\x20.menuLink', '?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=RDJsG8fl0VfkQ', '\x20\x20#featuredYoutube\x20{', 'countReset', '\x20\x20\x20\x20min-height:\x2080px;', '\x20\x20\x20\x20left:\x200;', '\x20\x20\x20\x20background-size:\x2055px\x2055px;', 'newsboxContent', 'charAt', '\x20\x20#linksContainer2\x20>\x20*\x20{', 'narwhale', '\x20\x20\x20\x20height:\x2010000%;', '\x20\x20#nameInput::placeholder\x20{', '\x20\x20\x20\x20color:\x20#eee;', '\x20\x20\x20\x20top:\x2067.5%;', '\x20\x20\x20\x20cursor:\x20pointer;', 'button', 'domain', '\x20\x20\x20\x20top:\x2037.5%;', 'insert\x20song\x20here', '156px', '\x20\x20#linksContainer2,\x20', 'split', 'H_B2', '\x20\x20\x20\x20color:\x20#ccc;', 'classname', 'onsubmit', 'createTextNode', 'moomoo', '\x20\x20\x20\x20margin-bottom:\x2030px;', '\x20\x20#nameInput\x20{', '\x20\x20\x20\x20text-align:\x20center;', '\x20\x20\x20\x20border-bottom-right-radius:\x200px;', '\x20\x20\x20\x20top:\x2030.25%;', '\x20\x20#moddedMenu:hover\x20.text\x20{', '\x20\x20.menuButton:hover:before\x20{', '\x20\x20\x20\x20color:\x20#cc0000;', 'https://www.youtube.com/watch?v=', '\x20\x20\x20\x20font-size:\x2031px;', '0\x201px\x200\x20rgba(60,\x20100,\x20231,\x201),\x200\x202px\x200\x20rgba(60,\x20100,\x20231,\x201),\x200\x203px\x200\x20rgba(60,\x20100,\x20231,\x201),\x200\x204px\x200\x20rgba(60,\x20100,\x20231,\x201),\x200\x205px\x200\x20rgba(57,\x20149,\x20171,\x201),\x200\x206px\x200\x20rgba(57,\x20149,\x20171,\x201),\x200\x207px\x200\x20rgba(57,\x20149,\x20171,\x201),\x200\x208px\x200\x20rgba(57,\x20149,\x20171,\x201),\x200\x209px\x200\x20rgba(57,\x20149,\x20171,\x201)', 'bottom', 'RDJsG8fl0VfkQ', 'roblox', 'controls', '\x20\x20\x20\x20color:\x20#F1F41D\x20!important;', 'paper-io', '\x20\x20\x20\x20width:\x2065px;', '\x20\x20.five\x20>\x20.text\x20{', 'length', '-30px', 'Ã°Ââ€”Å¡Ã°Ââ€”Â¶Ã°ÂËœÆ’Ã°Ââ€”Â²\x20Ã°Ââ€”ÂµÃ°Ââ€”Â¶Ã°Ââ€”Âº\x20Ã¢â€“Â¶\x20Ã°Å¸ÂÂ³\x20a\x20name', '\x20\x20#featuredYoutube\x20>\x20a.ytLink,\x20', '#H_B', '\x20\x20#allianceInput::placeholder,\x20', '\x20\x20\x20\x20background-color:\x20transparent;', '#twitterFollow', '\x20\x20\x20\x20background:\x20url(\x27https://ak.picdn.net/shutterstock/videos/822988/thumb/3.jpg\x27);', 'cssText', '\x20\x20\x20\x20border:\x205px\x20solid\x20#ffe600;', 'nameInput', 'floor', '\x20\x20\x20\x20transform-origin:0\x200\x20;', 'target', '\x20\x20\x20\x20margin-bottom:\x2010px;', 'pendto', 'starblast', 'mainui-ads', '\x20\x20\x20\x20transform:\x20translateX(-20%)\x20skewX(45deg);', 'rgba(0,0,0,0)', '#youtubeFollow', 'Toggle\x20player', '\x20\x20\x20\x20background:\x20#ec0e0ed6;', '\x20\x20#topInfoHolder,\x20#itemInfoHolder,\x20#mapDisplay,\x20#chatBox\x20\x20{\x20', '#followText', 'clear', 'join', 'Failed', 'home-top-sites', 'adCard', '\x20\x20.six\x20>\x20.text\x20{', 'New\x20player\x20list', '#mobileDownloadButtonContainer', '\x20\x20\x20\x20color:\x20#eeeeee;', '#guideCard', 'canclear', '\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.5)\x20!important;', '#nameInput', 'type', '\x20\x20\x20\x20width:\x2022%;', '\x20\x20#moddedMenu:hover\x20{', 'allow', '\x20\x20::-webkit-scrollbar-thumb\x20{', '\x20\x20\x20\x20border-radius:\x2010px;', '\x20\x20.skinColorItem\x20{', '\x20\x20#altServer\x20>\x20a\x20>\x20i\x20{', 'string', '\x20\x20\x20\x20color:\x20#FFFF00\x20!important;', '.menuHeader:nth-child(5)', '\x20\x20\x20\x20left:\x200%;', '\x20\x20\x20\x20background-color:\x20#FF8C00;', '\x20\x20\x20\x20border:\x203px\x20solid\x20#006EC4;', '\x20\x20\x20\x20font-family:\x20fantasy;', 'arras', '\x20\x20\x20\x20-webkit-text-stroke:\x200.3px\x20#fff;', '\x20\x20\x20\x20left:\x2010px;', '\x20\x20\x20\x20width:\x20130%;\x20', '\x20\x20\x20\x20border-radius:\x2050px\x20!important;', 'input', '\x20\x20\x20\x20display:\x20none!important;', 'forEach', 'innerHTML', '\x20\x20.allianceItem\x20{', '\x20\x20#storeHolder,\x20', '\x20\x20\x20\x20display:\x20none;', 'getElementsByTagName', 'red', 'now', '\x20\x20\x20\x20transform:\x20rotate(90deg);', '42630BFWRKS', 'autoplay;\x20encrypted-media', 'Done\x20setting\x20up', '\x20\x20\x20\x20color:\x20#FF8C00\x20!important;', '\x20\x20\x20\x20-ms-transform:\x20translateX(26px);', 'set', '\x20\x20\x20\x20border-radius:\x200px\x20!important;', '\x20\x20#aBox\x20{', '\x20\x20.slider\x20{', 'undefined', '\x20\x20\x20\x20right:\x2010px;', '\x20\x20\x20\x20margin-top:\x200px;', 'lid', '\x20\x20\x20\x20border-bottom:\x203px\x20solid\x20#eee;', 'documentElement', 'Ã°Å¸Å½Â®Ã°ÂÂÂÃ°ÂÂâ€¹Ã°ÂÂâ‚¬Ã°ÂÂËœÃ°Å¸Å½Â®', '\x20\x20\x20\x20padding-bottom:\x2010px;', '\x20\x20.ytLink\x20{', '\x20\x20\x20\x20box-shadow:\x200\x200\x201px\x20#FF8C00;', '\x20\x20\x20\x20font-size:\x2020px;', 'parent', '\x20\x20\x20\x20color:\x20transparent;', '\x20\x20.seven\x20>\x20.text\x20{', 'https://www.youtube.com/embed/', '\x20\x20::-webkit-scrollbar-thumb:active\x20{', '\x20\x20\x20\x20left:\x200px;', '\x20\x20.menuButton\x20{', '\x0aiframe.script\x20{\x0aborder:\x202px\x20solid\x20red;\x0aborder-radius:\x208px;\x0aborder-style:\x20solid;\x0aborder-width:\x20medium;\x0a}\x0abutton.script{\x0aborder:\x202px\x20solid\x20red;\x0aborder-radius:\x208px;\x0aborder-style:\x20solid;\x0aborder-width:\x20medium;\x0abackground:black;\x0acolor:white\x0a}\x0ainput.script::placeholder{color:red}\x0ainput.script{\x0aborder:\x202px\x20solid\x20red;\x0aborder-radius:\x208px;\x0aborder-style:\x20solid;\x0aborder-width:\x20medium;\x0aborder-width:0px;\x0acolor:black;\x0abackground:\x20rgba(0,\x200,\x200,\x200)\x0a}', '\x20\x20\x20\x20width:\x2023px;', 'center', '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(255,136,0,1);', 'display', 'splix', '\x20\x20\x20\x20bottom:\x2076%;', '\x20\x20\x20\x20border:\x203px\x20solid\x20#000;', '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(0,0,0,0.9);', '#gameName', 'none', '\x20\x20#allianceInput,\x20', '\x20\x20\x20\x20transition:\x20.4s;', '\x20\x20.allianceButtonM\x20{', 'script', 'count', '\x20\x20#moddedMenu:hover\x20>\x20.titleMM\x20{', '\x20\x20\x20\x20transform:translateX(-112%)\x20skewX(45deg);', '\x20\x20input:checked\x20+\x20.slider\x20{', 'H_B', '\x20\x20#promoImg\x20{', 'getElementsByClassName', '\x20\x20\x20\x20position:\x20absolute;', '\x20\x20.text\x20>\x20b\x20{\x20', 'css', '\x20\x20\x20\x20background:\x20#2dff00;', '\x20\x20\x20\x20height:\x2045.0%;', '\x20\x20\x20\x20z-index:\x20-1;', 'value', '\x20\x20\x20\x20transform:\x20translateX(10px);', '\x20\x20\x20\x20-webkit-text-stroke:\x20transparent;', '\x20\x20\x20\x20width:\x20250px;', 'warn', '\x20\x20\x20\x20opacity:\x201;', '#diedText', '\x20\x20a\x20{', 'src', 'createElement', '\x20\x20\x20\x20-webkit-text-stroke:\x20transparent\x20!important;', '\x20\x20#moddedMenu\x20{', 'onunload', '\x20\x20\x20\x20background:\x20#fff;', '\x20\x20.slider:before\x20{', '\x20\x20.allianceItem:hover,\x20', '\x20\x20margin-top:\x2030px;', '.menuLink', '\x20\x20\x20\x20border:\x205px\x20solid\x20#00FF9E;', '\x20\x20\x20\x20border-bottom:\x203px\x20solid\x20#8B00FF;', '\x20\x20\x20\x20border-radius:\x205px;', 'text/css', 'list', 'background-color', 'waiting', 'getItem', '\x20\x20\x20\x20width:\x2010px;', 'random', '310408aBfTPE', 'centy', '\x20\x20\x20\x20padding:\x2010px;', '\x20\x20a:hover\x20{', '\x20\x20\x20\x20top:\x2047.5%;', 'centy3', '\x20\x20.allianceButtonM:hover,', 'remove', '\x20\x20\x20\x20display:\x20block;', '\x20\x20#promoHolderImg\x20>\x20img\x20{', '#serverBrowser', '\x20\x20\x20\x20top:\x2087.5%;', '\x20\x20.allianceButtonM,\x20', '\x20\x20\x20\x20font-size:\x2032px;', '\x20\x20.ytLink:hover\x20{', '#ad-block-left', '\x20\x20\x20\x20border-radius:\x2050%;', '\x20\x20\x20\x20transition:\x200.5s;', 'slither', '\x20\x20#followText,\x20', 'color', '-Mypt378fkc', 'enterGame', 'setItem', 'test4', 'includes', '\x20\x20#downloadButtonContainer,\x20', '\x20\x20.joinAlBtn:hover\x20{', '\x20\x20\x20\x20width:\x20300px;', '\x20\x20\x20\x20width:\x20100%;', '\x20\x20\x20\x20color:\x20#17FF00!important;', '43978kyrOvd', '\x20\x20\x20\x20font-size:\x2018px;', '\x20\x20\x20\x20background-color:\x20orange;', '\x20\x20.storeTab:hover,\x20', '\x20\x20#moddedMenu:hover\x20.switch\x20{', '\x20\x20.titleMM\x20{', '.menuHeader:nth-child(6)', '\x20\x20\x20\x20border-right:\x2020px\x20solid\x20#FF0000;', '\x20\x20\x20\x20transition:\x20transform\x20.5s;', '\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6)\x20!important;', 'placeholder', '\x20\x20\x20\x20height:\x2023px;', '\x20\x20#allianceInput:hover::placeholder{', '\x20\x20\x20\x20border:\x202px\x20solid\x20#000000;', '\x20\x20.storeTab,\x20', '\x20\x20::-webkit-scrollbar\x20{', 'w/o', '\x20\x20\x20\x20color:\x20#A200FF;', 'style', '\x20\x20.three\x20>\x20.text\x20{', 'script-links', '?wmode=opaque&autohide=1&autoplay=1&enablejsapi=1&list=', 'className', '\x20\x20}', '\x20\x20#chatBox::placeholder\x20{', '\x20\x20\x20\x20color:\x20#00FF9E;', '\x20\x20\x20\x20margin:\x2010px;', '153610bKzpur', '\x20\x20#linksContainer2\x20{', '\x20\x20.two\x20>\x20.text\x20{', '\x20\x20.one\x20>\x20.text\x20{', '\x20\x20#twitterFollow,\x20', '\x20\x20\x20\x20top:\x200;', 'insert', '\x20\x20select\x20{', '\x20\x20\x20\x20height:180px;', '\x20\x20\x20\x20background:\x20#000000;', '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(255,235,59,1);', '\x20\x20#guideCard\x20{', '\x20\x20\x20\x20-webkit-transition:\x20.4s;', '\x20\x20\x20\x20top:\x2077.5%;', 'ad-spawn', '\x20\x20\x20\x20font-size:\x2024px;']; var _0x587f = function (_0xb1ea8, _0x5d8d68) { _0xb1ea8 = _0xb1ea8 - 0x159; var _0x2de415 = _0x2de4[_0xb1ea8]; return _0x2de415; }; var _0x44d661 = _0x587f; (function (_0x1c361a, _0x3d6a03) { var _0x338dc7 = _0x587f; while (!![]) { try { var _0x2791d1 = -parseInt(_0x338dc7(0x2b2)) + parseInt(_0x338dc7(0x176)) + -parseInt(_0x338dc7(0x195)) + parseInt(_0x338dc7(0x278)) + -parseInt(_0x338dc7(0x15a)) * -parseInt(_0x338dc7(0x297)) + parseInt(_0x338dc7(0x15b)) * -parseInt(_0x338dc7(0x181)) + -parseInt(_0x338dc7(0x225)); if (_0x2791d1 === _0x3d6a03) break; else _0x1c361a['push'](_0x1c361a['shift']()); } catch (_0x2a645d) { _0x1c361a['push'](_0x1c361a['shift']()); } } }(_0x2de4, 0x2a3a8), console[_0x44d661(0x260)](started = performance[_0x44d661(0x223)]())); var llength = _0x44d661(0x1d8)[_0x44d661(0x1df)], default_s; window[_0x44d661(0x1ad)] = 'RDJsG8fl0VfkQ'; function setplayer_(_0x18255c) { var _0x42d830 = _0x44d661, _0x53d9e4 = _0x18255c[_0x42d830(0x264)], _0x50af75 = setElement(new Player(_0x53d9e4)[_0x42d830(0x22a)]), _0x2a67cc = _0x53d9e4[_0x42d830(0x1c5)]('list')[0x1]; return [_0x50af75, _0x2a67cc, _0x53d9e4]; } function getP(_0x159d91) { var _0x3b9378 = _0x44d661, _0x3305ec = _0x159d91[_0x3b9378(0x1c5)]('&'), _0x2199fa = _0x3305ec[0x0], _0xafb29d = _0x3305ec[0x1], _0x4df65e = _0x3305ec[0x2]; return _0xafb29d ? _0xafb29d[_0x3b9378(0x1c5)]('=')[0x1] : window['default_list']; } function getlink(_0xbbff76) { var _0x16f401 = setElement(_0xbbff76), _0x4c1012 = getP(_0xbbff76); return setup(_0x16f401, _0x4c1012); } function setup(_0x3a1844, _0x47b8ad) { var _0x533c80 = _0x44d661; if (!_0x3a1844) return; if (!_0x47b8ad) return; return _0x533c80(0x1d4) + _0x3a1844 + _0x533c80(0x2ac) + _0x47b8ad; } function setplayer(_0x1eac6e) { var _0x1327fc = _0x44d661; _0x1eac6e[_0x1327fc(0x264)] = setup(setElement(new Player(_0x1eac6e[_0x1327fc(0x264)])['set']), _0x1eac6e['src'][_0x1327fc(0x1c5)](_0x1327fc(0x272))[0x1]); } function makeid(_0x4d6ae5) { var _0x1a2d94 = _0x44d661, _0x2846ab = '', _0x5c3774 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', _0x2ffdcf = _0x5c3774[_0x1a2d94(0x1df)]; for (var _0x4d5f2b = 0x0; _0x4d5f2b < _0x4d6ae5; _0x4d5f2b++) { _0x2846ab += _0x5c3774[_0x1a2d94(0x1b7)](Math[_0x1a2d94(0x1eb)](Math[_0x1a2d94(0x277)]() * _0x2ffdcf)); } return _0x2846ab; } setElement = function (_0x5d7d96) { var _0x1caaab = _0x44d661, _0x417116 = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, _0x5d1d4b = String(_0x5d7d96)[_0x1caaab(0x172)](_0x417116); return console[_0x1caaab(0x198)](_0x5d1d4b), _0x5d1d4b && _0x5d1d4b[0x7][_0x1caaab(0x1df)] == 0xb ? _0x5d1d4b[0x7] : ![]; }, Player = function (_0x379e0f) { var _0x306487 = _0x44d661; if (!_0x379e0f) return; var _0xc248fc = makeid(length), _0x67416e = setElement(_0x379e0f), _0x4378fb = setup(_0x67416e, _0xc248fc); this[_0x306487(0x22a)] = _0x4378fb; }; var isalready = eval(localStorage['getItem']('isplayer')) == null ? !![] : eval(localStorage[_0x44d661(0x275)](_0x44d661(0x16a))); isalready = isalready == ![], window['onunload'] = function () { var _0x2f4920 = _0x44d661; localStorage[_0x2f4920(0x28f)]('isplayer', ![]); }; if (0x1) { localStorage[_0x44d661(0x28f)](_0x44d661(0x16a), !![]), iframe = '<iframe\x20id=\x22msc\x22\x20src=\x22https://www.youtube.com/embed/${id}?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG\x22\x20frameborder=\x220\x22\x20allow=\x22autoplay;\x20encrypted-media\x22\x20allowfullscreen></iframe>'; function toggled(_0x38461b) { var _0x1a2519 = _0x44d661, _0x2e1725 = [_0x38461b['style'][_0x1a2519(0x244)] == _0x1a2519(0x24a), _0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)] == _0x1a2519(0x17d)]; !_0x2e1725[0x0] && !_0x2e1725[0x1] && (_0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)] = _0x1a2519(0x17d)); var _0x4df713 = [_0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)] == _0x1a2519(0x24a), _0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)] == _0x1a2519(0x17d)]; console[_0x1a2519(0x198)](_0x4df713); _0x4df713[0x0] && (_0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)] = _0x1a2519(0x17d));; _0x4df713[0x1] && (_0x38461b[_0x1a2519(0x2a9)]['display'] = _0x1a2519(0x24a));; return _0x38461b[_0x1a2519(0x2a9)][_0x1a2519(0x244)]; }; ta = document[_0x44d661(0x221)]('*'); var toadd = [], allEqual = (_0x40ea4f, _0x29a675) => _0x40ea4f[_0x44d661(0x17b)](_0x4a6911 => { return console['log'](_0x4a6911 === _0x29a675), _0x4a6911 === _0x29a675; }), allEqual2 = _0x4d092d => _0x4d092d[_0x44d661(0x17b)](_0x5d67b6 => _0x5d67b6 === _0x4d092d[0x0]); ta[_0x44d661(0x272)] = function (_0x1574f1, _0x2c9ac4, _0x5def47) { var _0x376f2c = _0x44d661, _0x351bfa = [], _0x439156 = {}, _0x1d3957 = []; return todo = document[_0x376f2c(0x221)](_0x5def47 || '*'), todo['forEach'] = [][_0x376f2c(0x21c)], todo[_0x376f2c(0x21c)](_0x38bc38 => { var _0x446a61 = _0x376f2c; _0x1d3957 = [], typeof _0x1574f1 == _0x446a61(0x20e) ? _0x439156['i'] = _0x1574f1 == _0x38bc38['id'] : _0x439156['i'] = !![], typeof _0x2c9ac4 == _0x446a61(0x20e) ? _0x439156['c'] = _0x2c9ac4 == _0x38bc38[_0x446a61(0x2ad)] : _0x439156['c'] = !![], _0x1d3957 = [_0x439156['c'], _0x439156['i']], _0x1d3957 = allEqual(_0x1d3957, !![]), _0x1d3957 && (_0x351bfa[_0x446a61(0x1a0)](_0x38bc38), console[_0x446a61(0x24f)]()); }), console[_0x376f2c(0x1b2)](), _0x351bfa; }; function isHidden(_0x1fbce5) { var _0x4a83d3 = _0x44d661; if (_0x1fbce5) return _0x1fbce5[_0x4a83d3(0x1a8)] === null; } id = function (_0xd3bf03) { var _0x2838cd = _0x44d661; return document[_0x2838cd(0x159)](_0xd3bf03); }, dd = function (_0x23a071) { var _0x1ca22c = _0x44d661; let _0x3692fc = {}; return _0x23a071[_0x1ca22c(0x21c)](function (_0x40f467) { !_0x3692fc[_0x40f467] && (_0x3692fc[_0x40f467] = !![]); }), Object[_0x1ca22c(0x18a)](_0x3692fc); }, clas = function (_0x323187) { var _0x5150f3 = _0x44d661; return document[_0x5150f3(0x255)](_0x323187); }; var vcent = location[_0x44d661(0x15f)]['includes'](_0x44d661(0x1cb)) ? ![] : location[_0x44d661(0x15f)]['includes']('narwhale') ? ![] : location['href'][_0x44d661(0x291)](_0x44d661(0x1f0)) ? ![] : location[_0x44d661(0x15f)][_0x44d661(0x291)]('surviv') ? ![] : location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x1d9)) ? ![] : document[_0x44d661(0x1c0)][_0x44d661(0x291)]('slither') ? !![] : document[_0x44d661(0x1c0)]['includes']('greasyfork') ? ![] : document[_0x44d661(0x1c0)][_0x44d661(0x291)]('agar') ? !![] : document[_0x44d661(0x1c0)][_0x44d661(0x291)](_0x44d661(0x1dc)) ? !![] : document['domain'][_0x44d661(0x291)](_0x44d661(0x245)) ? !![] : 0x0, canclear, pendto; idlenght = _0x44d661(0x28d)[_0x44d661(0x1df)], CE = function (_0x320ca6, _0x4464f6, _0x50dfeb) { var _0x13039d = _0x44d661, _0x7b478 = document[_0x13039d(0x265)](_0x320ca6); _0x7b478[_0x13039d(0x1c8)] = _0x50dfeb; if (_0x4464f6) { _0x4464f6[_0x13039d(0x1df)] && (_0x7b478['id'] = _0x4464f6);; }; return _0x7b478; }, setElement(URL), playlist = function (_0x1126aa, ..._0x482bcb) { var _0x4b1208 = _0x44d661; console[_0x4b1208(0x198)]('1', getlink(_0x1126aa)); var _0x5f3cae = setElement(_0x1126aa); if (_0x5f3cae && idlenght == _0x5f3cae[_0x4b1208(0x1df)]) null; else _0x5f3cae = ![], console[_0x4b1208(0x198)]('id', _0x4b1208(0x2c3), 'not', _0x4b1208(0x172), 'length'); if (!_0x5f3cae) _0x5f3cae = localStorage['getItem'](_0x4b1208(0x231)); if (_0x482bcb && llength == _0x482bcb['length']) null; else _0x482bcb = ![], console[_0x4b1208(0x198)](_0x4b1208(0x272), _0x4b1208(0x2c3), 'not', 'match', 'length'); if (!_0x482bcb) _0x482bcb = localStorage[_0x4b1208(0x275)](_0x4b1208(0x272)); music_frame['src'] = setup(_0x5f3cae, _0x482bcb); }; function imsub() { playlist(); };; fix = _0x26152c => { var _0x27ccbb = _0x44d661; return _0x26152c = setElement(_0x26152c), document[_0x27ccbb(0x166)] = _0x26152c, _0x27ccbb(0x23c) + _0x26152c + _0x27ccbb(0x1b0); }; function fix2(_0x42e89d, _0x286134) { var _0x1316cc = _0x44d661; return localStorage[_0x1316cc(0x275)](_0x42e89d) ? [!![], localStorage[_0x1316cc(0x275)](_0x42e89d)] : [![], localStorage[_0x1316cc(0x28f)](_0x42e89d, _0x286134)]; }; hh = function (_0x16b67e, _0x5c6bcd) { var _0x31259d = _0x44d661; localStorage[_0x31259d(0x28f)](_0x16b67e, _0x5c6bcd); }, jj = function (_0x23d93e) { var _0x5cd71a = _0x44d661; return localStorage[_0x5cd71a(0x275)](_0x23d93e); }, frame = CE('iframe', 'music_frame'), inputm = CE(_0x44d661(0x21a), 'insert'), frame[_0x44d661(0x25c)], inputm[_0x44d661(0x1c9)] = imsub, inputm[_0x44d661(0x17c)] = function (_0x4e206e) { var _0x13a15b = _0x44d661; function _0x32d9c8(_0x6435ea) { var _0x525c6c = _0x587f, _0x2ffe86 = _0x6435ea[_0x525c6c(0x1c5)]('&'), _0x3c417f = _0x2ffe86[0x0], _0x1e7a6f = _0x2ffe86[0x1], _0x3e5665 = _0x2ffe86[0x2]; return _0x1e7a6f ? _0x1e7a6f['split']('=')[0x1] : window['default_list']; } function _0x2d19d5(_0x333a9f) { var _0x11cf87 = setElement(_0x333a9f), _0x300d25 = _0x32d9c8(_0x333a9f); return _0x27b047(_0x11cf87, _0x300d25); } function _0x27b047(_0x27bf66, _0x31a62e) { var _0x52c980 = _0x587f; if (!_0x27bf66) return; if (!_0x31a62e) return; return _0x52c980(0x23c) + _0x27bf66 + '?list=' + _0x31a62e; } var _0x2bee61 = _0x2d19d5(_0x4e206e[_0x13a15b(0x1ed)][_0x13a15b(0x25c)]); console[_0x13a15b(0x198)](_0x2bee61), localStorage['setItem']('LP', _0x2bee61), frame['src'] = _0x2bee61; }; !eval(fix2(_0x44d661(0x290), !![]))[0x0] ? (inputm[_0x44d661(0x2a1)] = fix(_0x44d661(0x179)), alert(_0x44d661(0x190)), frame[_0x44d661(0x264)] = localStorage[_0x44d661(0x275)]('LP') || inputm['placeholder']) : (fix2('RS', 'https://www.youtube.com/watch?v=-Mypt378fkc'), frame['src'] = fix(jj('RS')));; var br = CE('br'); canclear && (pendto[_0x44d661(0x21d)] = '');; listn = CE(_0x44d661(0x21a), 'list'), listn['placeholder'] = 'enter\x20Plist\x20id'; var hb = CE('button', _0x44d661(0x253)); fix2(_0x44d661(0x272), 'RDJsG8fl0VfkQ'), fix2(_0x44d661(0x231), '-Mypt378fkc'); var hb2 = CE(_0x44d661(0x1bf), _0x44d661(0x1c6)); hb2[_0x44d661(0x165)] = _0x44d661(0x1ff), frame['setAttribute'](_0x44d661(0x1da), 0x1), hb['innerText'] = _0x44d661(0x1f5), set = function (_0x2a8229, _0x31f83f, _0x53af5d) { _0x2a8229['setAttribute'](_0x31f83f, _0x53af5d); }; var test3 = [{ 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x18d)), 'cent': !![], 'clear': ![], 'parent': function () { var _0x3704d8 = _0x44d661; return (document['getElementById'](_0x3704d8(0x1fc)) || document[_0x3704d8(0x159)]('script-list-sort') || document['getElementById'](_0x3704d8(0x2ab)))[_0x3704d8(0x188)]; } }, { 'site': location[_0x44d661(0x15f)]['includes'](_0x44d661(0x1cb)), 'cent': ![], 'clear': !![], 'parent': function () { var _0x25ed4e = _0x44d661; return setTimeout(function () { setTimeout(function () { var _0x2d452b = _0x587f; document['getElementById'](_0x2d452b(0x1ea))[_0x2d452b(0x2a1)] = _0x2d452b(0x1e1), document['getElementById']('desktopInstructions')[_0x2d452b(0x27f)](), document[_0x2d452b(0x159)]('youtuberOf')[_0x2d452b(0x27f)](), document[_0x2d452b(0x159)](_0x2d452b(0x15d))[_0x2d452b(0x21d)] = _0x2d452b(0x19b), $(_0x2d452b(0x262))[_0x2d452b(0x258)]({ 'background-color': 'rgba(0,\x200,\x200,\x200.74)' }), $(_0x2d452b(0x262))[_0x2d452b(0x258)]({ 'color': _0x2d452b(0x18f) }), document['getElementById'](_0x2d452b(0x28e))[_0x2d452b(0x21d)] = _0x2d452b(0x234), $(_0x2d452b(0x249))['css']({ 'color': '#000000', 'text-shadow': _0x2d452b(0x1d6), 'text-align': 'center', 'font-size': _0x2d452b(0x1c3), 'margin-bottom': _0x2d452b(0x1e0) }); var _0x190fdb = $(_0x2d452b(0x1af))['html'](), _0x5f0bb = [_0x2d452b(0x200), _0x2d452b(0x1f8), '#smallLinks', _0x2d452b(0x1a1), _0x2d452b(0x1e6), _0x2d452b(0x1f4), _0x2d452b(0x17a), '#youtuberOf', '#promoImg', _0x2d452b(0x171), _0x2d452b(0x1a2), _0x2d452b(0x26d), _0x2d452b(0x210), _0x2d452b(0x29d), '.menuText'], _0x146afc = '#rightCardHolder\x20{display:\x20block!important}', _0x3e42a1 = document[_0x2d452b(0x19f)] || document['getElementsByTagName'](_0x2d452b(0x19f))[0x0], _0x4db71d = document[_0x2d452b(0x265)](_0x2d452b(0x2a9)); _0x4db71d[_0x2d452b(0x206)] = _0x2d452b(0x271), _0x4db71d['styleSheet'] ? _0x4db71d[_0x2d452b(0x2c4)][_0x2d452b(0x1e8)] = _0x146afc : _0x4db71d[_0x2d452b(0x194)](document['createTextNode'](_0x146afc)), promoImgHolder['remove'](), function () { var _0x2bfc43 = _0x2d452b, _0x5a5605 = [_0x2bfc43(0x2b6), _0x2bfc43(0x183), _0x2bfc43(0x292), _0x2bfc43(0x28b), _0x2bfc43(0x254), _0x2bfc43(0x220), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1e2), _0x2bfc43(0x263), _0x2bfc43(0x20f), _0x2bfc43(0x238), _0x2bfc43(0x230), _0x2bfc43(0x289), _0x2bfc43(0x2ae), _0x2bfc43(0x27b), _0x2bfc43(0x196), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1b1), _0x2bfc43(0x26c), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1c4), _0x2bfc43(0x1aa), '\x20\x20\x20\x20background:\x20rgba(0,0,0,0.6);', _0x2bfc43(0x248), _0x2bfc43(0x20b), _0x2bfc43(0x27a), _0x2bfc43(0x238), '\x20\x20\x20\x20position:\x20absolute;', _0x2bfc43(0x174), '\x20\x20}', '', _0x2bfc43(0x1aa), _0x2bfc43(0x1b3), '\x20\x20\x20\x20min-width:\x20160px;', _0x2bfc43(0x2c2), _0x2bfc43(0x22f), _0x2bfc43(0x2ae), '', _0x2bfc43(0x162), '\x20\x20\x20\x20min-height:\x20200px;', _0x2bfc43(0x15e), _0x2bfc43(0x217), '\x20\x20}', '', '\x20\x20#linksContainer2\x20{', _0x2bfc43(0x15e), _0x2bfc43(0x22f), _0x2bfc43(0x23a), '\x20\x20}', '', '\x20\x20.menuCard\x20{', _0x2bfc43(0x1ab), _0x2bfc43(0x20b), '\x20\x20\x20\x20border:\x2010px\x20solid\x20rgba(0,0,0,0.9);', '\x20\x20\x20\x20box-shadow:\x20none;', '\x20\x20\x20\x20overflow:auto;', _0x2bfc43(0x2ba), _0x2bfc43(0x2ae), '', _0x2bfc43(0x2a6), _0x2bfc43(0x276), '\x20\x20\x20\x20border-right:\x202px\x20solid\x20#ec0e0ed6;', '\x20\x20}', '', _0x2bfc43(0x20a), '\x20\x20\x20\x20border:\x202px\x20solid\x20#ffeb3b;', _0x2bfc43(0x2ae), '', '\x20\x20::-webkit-scrollbar-thumb:hover\x20{', _0x2bfc43(0x1f6), _0x2bfc43(0x2ae), '', _0x2bfc43(0x23d), _0x2bfc43(0x16c), _0x2bfc43(0x2a4), _0x2bfc43(0x2ae), '', _0x2bfc43(0x19c), _0x2bfc43(0x2c1), _0x2bfc43(0x201), _0x2bfc43(0x18b), _0x2bfc43(0x232), _0x2bfc43(0x2ae), '', _0x2bfc43(0x175), _0x2bfc43(0x1cc), _0x2bfc43(0x2ae), '', '\x20\x20.menuText\x20{', _0x2bfc43(0x298), _0x2bfc43(0x1c7), _0x2bfc43(0x1ee), _0x2bfc43(0x2ae), '', _0x2bfc43(0x236), _0x2bfc43(0x185), '\x20\x20\x20\x20font-size:\x2024px;', '\x20\x20\x20\x20text-decoration:\x20none;', _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', _0x2bfc43(0x23f), _0x2bfc43(0x174), _0x2bfc43(0x1e5), _0x2bfc43(0x1e9), '\x20\x20\x20\x20position:\x20relative;', _0x2bfc43(0x170), _0x2bfc43(0x19a), _0x2bfc43(0x214), _0x2bfc43(0x19d), '\x20\x20\x20\x20overflow:\x20hidden;', _0x2bfc43(0x295), _0x2bfc43(0x16d), _0x2bfc43(0x2ae), '', '\x20\x20.menuButton:hover\x20{', '\x20\x20\x20\x20font-family:\x20monospace;', _0x2bfc43(0x1ac), '\x20\x20\x20\x20border:\x205px\x20solid\x20#ff0000;', _0x2bfc43(0x1be), _0x2bfc43(0x1e5), _0x2bfc43(0x2ae), '', '\x20\x20.menuButton:before\x20{', '\x20\x20\x20\x20content:\x20\x27\x27;', '\x20\x20\x20\x20position:\x20absolute;', _0x2bfc43(0x2b7), _0x2bfc43(0x1b4), _0x2bfc43(0x218), _0x2bfc43(0x1ba), _0x2bfc43(0x259), _0x2bfc43(0x29e), _0x2bfc43(0x25b), _0x2bfc43(0x1ec), _0x2bfc43(0x251), _0x2bfc43(0x29f), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1d2), _0x2bfc43(0x1ac), _0x2bfc43(0x1f2), _0x2bfc43(0x2ae), '', '\x20\x20.menuCard\x20span\x20{', _0x2bfc43(0x2b1), '\x20\x20}', '', _0x2bfc43(0x281), _0x2bfc43(0x294), '\x20\x20\x20\x20height:\x2094px;', '\x20\x20}', '', _0x2bfc43(0x2bd), '\x20\x20\x20\x20max-height:\x20282px;', '\x20\x20}', '', _0x2bfc43(0x20c), '\x20\x20\x20\x20transition:\x201s;', _0x2bfc43(0x241), _0x2bfc43(0x2a2), _0x2bfc43(0x247), _0x2bfc43(0x2ae), '', _0x2bfc43(0x2b9), _0x2bfc43(0x2bb), _0x2bfc43(0x270), _0x2bfc43(0x213), '\x20\x20\x20\x20margin-bottom:\x2010px;', '\x20\x20\x20\x20color:\x20#fff;', '\x20\x20\x20\x20transition:\x200.5s;', _0x2bfc43(0x2ae), '', '\x20\x20select:hover\x20{', _0x2bfc43(0x182), '\x20\x20\x20\x20border:\x203px\x20solid\x20#B20E0E;', '\x20\x20}', '', _0x2bfc43(0x180), _0x2bfc43(0x21b), _0x2bfc43(0x2ae), '', _0x2bfc43(0x15c), _0x2bfc43(0x2a0), _0x2bfc43(0x2bc), '\x20\x20\x20\x20border-radius:\x2015px\x20!important;', _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', '\x20\x20.actionBarItem:hover\x20{', _0x2bfc43(0x204), _0x2bfc43(0x243), _0x2bfc43(0x219), _0x2bfc43(0x2ae), '', _0x2bfc43(0x17f), _0x2bfc43(0x2a0), '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(234,0,255,1);', '\x20\x20\x20\x20border-radius:\x2050px\x20!important;', _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', '\x20\x20.uiElement:hover\x20{', _0x2bfc43(0x204), '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(0,95,255,1);', _0x2bfc43(0x22b), _0x2bfc43(0x2ae), '', _0x2bfc43(0x187), _0x2bfc43(0x2a0), '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(255,255,0,0.9);', _0x2bfc43(0x219), _0x2bfc43(0x2a8), _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1f7), '\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6)\x20!important;', _0x2bfc43(0x248), _0x2bfc43(0x169), '\x20\x20\x20\x20color:\x20#FF0000;', _0x2bfc43(0x2ae), '', '\x20\x20#itemInfoHolder\x20{\x20', _0x2bfc43(0x25e), '\x20\x20}', '', _0x2bfc43(0x17e), _0x2bfc43(0x164), _0x2bfc43(0x1d5), _0x2bfc43(0x216), _0x2bfc43(0x2ae), '', _0x2bfc43(0x20d), '\x20\x20\x20\x20font-size:\x2030px\x20!important;', _0x2bfc43(0x266), '\x20\x20}', '', _0x2bfc43(0x178), _0x2bfc43(0x1e7), '\x20\x20\x20\x20border:\x201px\x20solid\x20#fff', '\x20\x20}', '', '\x20\x20#ageBar\x20{', _0x2bfc43(0x2a0), '\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(0,0,0,0.9);', '\x20\x20\x20\x20height:\x205px;', _0x2bfc43(0x235), _0x2bfc43(0x2ae), '', _0x2bfc43(0x15c), _0x2bfc43(0x1dd), _0x2bfc43(0x168), '\x20\x20\x20\x20background-position:\x20center;\x20', _0x2bfc43(0x1b5), _0x2bfc43(0x2ae), '', _0x2bfc43(0x22c), '\x20\x20\x20\x20color:\x20#FF8C00!important;', _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', _0x2bfc43(0x2af), _0x2bfc43(0x296), '\x20\x20}', '', '\x20\x20#chatBox:hover\x20{', '\x20\x20\x20\x20background:\x20rgba(0,0,0,0.5)!important;', _0x2bfc43(0x2ae), '', '\x20\x20#chatBox:hover::placeholder\x20{', _0x2bfc43(0x16e), _0x2bfc43(0x2ae), '', _0x2bfc43(0x286), _0x2bfc43(0x1d3), '\x20\x20}', '', _0x2bfc43(0x1cd), _0x2bfc43(0x269), _0x2bfc43(0x26e), _0x2bfc43(0x289), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1bb), _0x2bfc43(0x2b0), '\x20\x20\x20\x20transition:\x200.5s;', '\x20\x20}', '', '\x20\x20#nameInput:hover\x20{', _0x2bfc43(0x1a5), _0x2bfc43(0x174), _0x2bfc43(0x2ae), '', '\x20\x20#nameInput:hover::placeholder\x20{', '\x20\x20\x20\x20background:\x20#4ACA1A;', _0x2bfc43(0x174), '\x20\x20}', '', _0x2bfc43(0x2b3), _0x2bfc43(0x1a6), _0x2bfc43(0x25f), '\x20\x20}', '', _0x2bfc43(0x1b8), '\x20\x20\x20\x20display:table-cell;', _0x2bfc43(0x192), _0x2bfc43(0x1ce), _0x2bfc43(0x160), '\x20\x20}', '\x20\x20', _0x2bfc43(0x2a5), _0x2bfc43(0x21f), _0x2bfc43(0x1a4), _0x2bfc43(0x24b), _0x2bfc43(0x24d), _0x2bfc43(0x1ab), _0x2bfc43(0x248), _0x2bfc43(0x2ae), '', _0x2bfc43(0x197), _0x2bfc43(0x2a5), _0x2bfc43(0x284), _0x2bfc43(0x1e4), _0x2bfc43(0x21e), _0x2bfc43(0x228), _0x2bfc43(0x2ae), '', '\x20\x20.storeItem,\x20', _0x2bfc43(0x2a5), _0x2bfc43(0x284), _0x2bfc43(0x1e4), '\x20\x20.allianceItem,\x20', _0x2bfc43(0x199), _0x2bfc43(0x2c5), _0x2bfc43(0x2ae), '', '\x20\x20.storeItem:hover,\x20', _0x2bfc43(0x29a), _0x2bfc43(0x27e), _0x2bfc43(0x26b), _0x2bfc43(0x293), _0x2bfc43(0x1db), _0x2bfc43(0x2ae), '', '\x20\x20#allianceInput,\x20', _0x2bfc43(0x185), _0x2bfc43(0x2ae), '\x20\x20', _0x2bfc43(0x16f), '\x20\x20\x20\x20background:\x20rgba(0,0,0,0.5);', '\x20\x20\x20\x20color:\x20#fc9f9f;', '\x20\x20}', '', _0x2bfc43(0x2a3), '\x20\x20\x20\x20color:\x20#fc9f9f;', _0x2bfc43(0x2ae), '', '\x20\x20#linksContainer2\x20>\x20*:first-child\x20{', _0x2bfc43(0x26f), _0x2bfc43(0x2ae), '', _0x2bfc43(0x267), '\x20\x20\x20\x20position:\x20absolute;', _0x2bfc43(0x1d0), _0x2bfc43(0x23e), '\x20\x20\x20\x20width:\x203%;', _0x2bfc43(0x25a), _0x2bfc43(0x1a7), '\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(100,0,255,0.9);', '\x20\x20\x20\x20border-top-right-radius:\x2030px;', _0x2bfc43(0x1cf), '\x20\x20\x20\x20transition:\x201s;', '\x20\x20\x20\x20z-index:\x20999;', _0x2bfc43(0x2ae), '', _0x2bfc43(0x208), _0x2bfc43(0x207), _0x2bfc43(0x2ae), '', _0x2bfc43(0x29c), _0x2bfc43(0x167), '\x20\x20\x20\x20border-bottom:\x203px\x20solid\x20#0030ff;', _0x2bfc43(0x285), _0x2bfc43(0x224), '\x20\x20\x20\x20white-space:\x20nowrap;', _0x2bfc43(0x16b), _0x2bfc43(0x1ae), _0x2bfc43(0x2ae), '', _0x2bfc43(0x250), '\x20\x20\x20\x20transform:\x20rotate(0deg)\x20translate(0,-1580%)', _0x2bfc43(0x2ae), '', '', '\x20\x20.text\x20{', _0x2bfc43(0x246), _0x2bfc43(0x256), _0x2bfc43(0x1bc), _0x2bfc43(0x238), _0x2bfc43(0x211), '\x20\x20\x20\x20display:\x20none;', '\x20\x20\x20\x20transition:\x201s;', '\x20\x20}', '', _0x2bfc43(0x257), '\x20\x20\x20\x20font-size:\x2020px;', _0x2bfc43(0x163), _0x2bfc43(0x2ae), '', '\x20\x20b:hover\x20{\x20', '\x20\x20\x20\x20color:\x20#ff0000;', _0x2bfc43(0x2ae), '', _0x2bfc43(0x2b5), '\x20\x20\x20\x20top:\x205.5%;', '\x20\x20}', '', _0x2bfc43(0x2b4), _0x2bfc43(0x184), _0x2bfc43(0x2ae), '', _0x2bfc43(0x2aa), _0x2bfc43(0x1c1), '\x20\x20}', '', '\x20\x20.four\x20>\x20.text\x20{', _0x2bfc43(0x27c), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1de), '\x20\x20\x20\x20top:\x2057.5%;', _0x2bfc43(0x2ae), '', _0x2bfc43(0x1fe), _0x2bfc43(0x1bd), '\x20\x20}', '', _0x2bfc43(0x23b), _0x2bfc43(0x2bf), _0x2bfc43(0x2ae), '', '\x20\x20.eight\x20>\x20.text\x20{', _0x2bfc43(0x283), '\x20\x20}', '', '', '', _0x2bfc43(0x29b), _0x2bfc43(0x261), _0x2bfc43(0x2ae), '', _0x2bfc43(0x1d1), _0x2bfc43(0x280), _0x2bfc43(0x2ae), '', '', _0x2bfc43(0x22d), _0x2bfc43(0x256), '\x20\x20\x20\x20cursor:\x20pointer;', '\x20\x20\x20\x20background-color:\x20#888;', _0x2bfc43(0x2be), '\x20\x20\x20\x20transition:\x20.4s;', _0x2bfc43(0x2ae), '', _0x2bfc43(0x26a), '\x20\x20\x20\x20position:\x20absolute;', _0x2bfc43(0x299), _0x2bfc43(0x2be), _0x2bfc43(0x24c), _0x2bfc43(0x2ae), '', _0x2bfc43(0x252), _0x2bfc43(0x212), _0x2bfc43(0x2ae), '\x20\x20', _0x2bfc43(0x186), _0x2bfc43(0x237), _0x2bfc43(0x2ae), '', '\x20\x20input:checked\x20+\x20.slider:before\x20{', _0x2bfc43(0x161), _0x2bfc43(0x229), _0x2bfc43(0x25d), '\x20\x20}', '', '\x20\x20.slider.round\x20{', '\x20\x20\x20\x20border-radius:\x2034px;', _0x2bfc43(0x2ae), '', '\x20\x20.slider.round:before\x20{', _0x2bfc43(0x288), _0x2bfc43(0x2ae)][_0x2bfc43(0x1fa)]('\x0a'); if (typeof GM_addStyle != _0x2bfc43(0x22e)) GM_addStyle(_0x5a5605); else { if (typeof PRO_addStyle != _0x2bfc43(0x22e)) PRO_addStyle(_0x5a5605); else { if (typeof addStyle != _0x2bfc43(0x22e)) addStyle(_0x5a5605); else { var _0x104756 = document['createElement'](_0x2bfc43(0x2a9)); _0x104756[_0x2bfc43(0x206)] = _0x2bfc43(0x271), _0x104756[_0x2bfc43(0x194)](document[_0x2bfc43(0x1ca)](_0x5a5605)); var _0x2355ee = document[_0x2bfc43(0x221)](_0x2bfc43(0x19f)); _0x2355ee[_0x2bfc43(0x1df)] > 0x0 ? _0x2355ee[0x0][_0x2bfc43(0x194)](_0x104756) : document[_0x2bfc43(0x233)][_0x2bfc43(0x194)](_0x104756); } } } }(); }, 0x64); }, 0x3e8), id(_0x25ed4e(0x1fd)); }, 'css': [['#adCard', _0x44d661(0x273), _0x44d661(0x1f3)], ['#insert', _0x44d661(0x273), _0x44d661(0x1f3)], [_0x44d661(0x1e3), _0x44d661(0x28c), _0x44d661(0x222)], [_0x44d661(0x282), 'background-color', _0x44d661(0x1f3)], [_0x44d661(0x202), _0x44d661(0x273), _0x44d661(0x1f3)], ['#setupCard', _0x44d661(0x273), 'rgba(0,0,0,0)'], ['#nameInput', _0x44d661(0x273), _0x44d661(0x1f3)], [_0x44d661(0x205), _0x44d661(0x28c), 'rgb(254,\x2028,\x2073)']] }, { 'site': location[_0x44d661(0x15f)]['includes'](_0x44d661(0x28a)), 'cent': !![], 'clear': !![], 'parent': function () { return id('login'); } }, { 'site': location['href']['includes'](_0x44d661(0x1b9)), 'cent': ![], 'clear': ![], 'parent': function () { return id('adZone'); } }, { 'site': location[_0x44d661(0x15f)]['includes'](_0x44d661(0x1f0)), 'cent': ![], 'clear': ![], 'parent': function () { return id('content'); } }, { 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x1a3)), 'cent': !![], 'clear': !![], 'parent': function () { return id('ad-block-left'); }, 'css': [[_0x44d661(0x1e3), _0x44d661(0x273), _0x44d661(0x1f3)], [_0x44d661(0x191), 'background-color', _0x44d661(0x1f3)], ['#H_B', _0x44d661(0x28c), _0x44d661(0x222)], [_0x44d661(0x287), _0x44d661(0x273), _0x44d661(0x1f3)]] }, { 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x1d9)), 'cent': ![], 'clear': ![], 'parent': function () { var _0x57858d = _0x44d661; return clas(_0x57858d(0x189))[0x0]; } }, { 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)]('agar'), 'cent': !![], 'clear': !![], 'parent': function () { var _0x35108a = _0x44d661; return id(_0x35108a(0x1f1)); } }, { 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x1dc)), 'cent': !![], 'clear': !![], 'parent': function () { var _0x54e41b = _0x44d661; return id(_0x54e41b(0x1d7)); } }, { 'site': location[_0x44d661(0x15f)][_0x44d661(0x291)](_0x44d661(0x245)), 'cent': !![], 'clear': !![], 'parent': function () { var _0x4659e8 = _0x44d661; return id(_0x4659e8(0x1b6)); } }, { 'site': location[_0x44d661(0x15f)]['includes'](_0x44d661(0x215)), 'cent': !![], 'clear': !![], 'parent': function () { var _0x53458e = _0x44d661; return id(_0x53458e(0x2c0))['remove'](), id('arras-io_336x280')[_0x53458e(0x27f)](), document[_0x53458e(0x255)]('referral')[0x0]; } }], a; window['br'] = document[_0x44d661(0x265)]('br'), hb['onclick'] = function () { var _0x1e7770 = _0x44d661, _0x1bbcb5; try { toggled(centy2); } catch (_0x573d40) { console['log'](_0x1e7770(0x1fb), 0x2, _0x573d40); }; try { toggled(centy); } catch (_0x1d0227) { console[_0x1e7770(0x198)]('Failed', 0x1, _0x1d0227); } }, hb2[_0x44d661(0x1a9)] = setup2; function add_styles() { var _0x5e7925 = _0x44d661; insert[_0x5e7925(0x2ad)] = _0x5e7925(0x24e), H_B[_0x5e7925(0x2ad)] = 'script', H_B2['className'] = 'script', frame[_0x5e7925(0x2ad)] = _0x5e7925(0x24e), frame[_0x5e7925(0x18e)](br); if (typeof GM_addStyle != _0x5e7925(0x22e)) GM_addStyle(css); else { if (typeof PRO_addStyle != _0x5e7925(0x22e)) PRO_addStyle(css); else { if (typeof addStyle != _0x5e7925(0x22e)) addStyle(css); else { var _0x5e7d7f = document[_0x5e7925(0x265)](_0x5e7925(0x2a9)); _0x5e7d7f[_0x5e7925(0x206)] = _0x5e7925(0x271), _0x5e7d7f[_0x5e7925(0x194)](document[_0x5e7925(0x1ca)](_0x5e7925(0x240))); var _0x372d48 = document['getElementsByTagName'](_0x5e7925(0x19f)); _0x372d48[_0x5e7925(0x1df)] > 0x0 ? _0x372d48[0x0][_0x5e7925(0x194)](_0x5e7d7f) : document['documentElement']['appendChild'](_0x5e7d7f); } } } } function style(_0x1abb02, _0x227d8b, _0x57999a) { var _0x534ad7 = _0x44d661; $(_0x1abb02)[_0x534ad7(0x258)](_0x227d8b, _0x57999a); }; function setup2() { var _0x4aaaaf = _0x44d661, _0x359c89 = setplayer_(music_frame); document['getElementById'](_0x4aaaaf(0x2b8))[_0x4aaaaf(0x25c)] = _0x359c89[0x0], imsub(); } function place(_0x136ec6, _0x2cb46b) { var _0xa683b0 = _0x44d661; try { _0x136ec6[_0xa683b0(0x2a1)] = _0x2cb46b; } catch (_0x154d54) { } } window[_0x44d661(0x193)] = function setup3(_0x42b153) { var _0x338e94 = _0x44d661; set(frame, _0x338e94(0x209), _0x338e94(0x226)), set(frame, _0x338e94(0x177), '0'); var _0x3d4699 = pendto, _0x3fa101 = CE(_0x338e94(0x242), _0x338e94(0x27d)); canclear && (pendto[_0x338e94(0x21d)] = ''), vcent ? (clearInterval(a), a = setInterval(function () { var _0x1595a9 = _0x338e94; console[_0x1595a9(0x198)](_0x1595a9(0x274)); try { if (pendto) { clearInterval(a); var _0x4549ad = pendto; frame[_0x1595a9(0x264)] = localStorage['getItem']('LP'), window[_0x1595a9(0x268)] = function (_0x1837d9) { localStorage['setItem']('LP', frame['src']); }, console[_0x1595a9(0x198)](pendto); var _0x5bff0c = CE(_0x1595a9(0x242), _0x1595a9(0x279)); pendto[_0x1595a9(0x194)](_0x5bff0c), pendto = centy, pendto[_0x1595a9(0x194)](br), pendto['appendChild'](frame), pendto['appendChild'](br), pendto['appendChild'](br), pendto['appendChild'](inputm), pendto['appendChild'](br), pendto[_0x1595a9(0x194)](br), clearInterval(a), _0x3fa101[_0x1595a9(0x194)](br), _0x3fa101[_0x1595a9(0x194)](hb), _0x3fa101[_0x1595a9(0x194)](br), _0x3fa101[_0x1595a9(0x194)](hb2), _0x4549ad[_0x1595a9(0x194)](_0x3fa101), console[_0x1595a9(0x198)]('Done\x20setting\x20up'), console[_0x1595a9(0x198)](started - performance[_0x1595a9(0x223)]()), add_styles(); } } catch (_0x2dbab7) { console['error'](_0x2dbab7); } }, 0x0)) : (clearInterval(a), a = setInterval(function () { var _0x49599 = _0x338e94; try { if (pendto) { clearInterval(a); var _0x20dc05 = pendto; pendto = CE('div', 'centy2'), pendto[_0x49599(0x194)](br), pendto[_0x49599(0x194)](frame), frame[_0x49599(0x264)] = localStorage['getItem']('LP'), window['onunload'] = function (_0x102ec9) { var _0x3bbea8 = _0x49599; localStorage[_0x3bbea8(0x28f)]('LP', frame[_0x3bbea8(0x264)]); }, pendto[_0x49599(0x194)](br), pendto['appendChild'](br), pendto[_0x49599(0x194)](inputm), _0x20dc05[_0x49599(0x194)](pendto), _0x20dc05[_0x49599(0x194)](br), _0x20dc05['appendChild'](hb), _0x20dc05['appendChild'](br), _0x20dc05['appendChild'](hb2), console['log'](_0x49599(0x227)), console[_0x49599(0x198)](started - performance[_0x49599(0x223)]()), add_styles(); } } catch (_0x5eebeb) { console[_0x49599(0x173)](_0x5eebeb); } }, 0x0)), setTimeout(function () { var _0x61a60a = _0x338e94; _0x42b153 && _0x42b153[_0x61a60a(0x21c)](_0x5d0137 => { style(_0x5d0137[0x0], _0x5d0137[0x1], _0x5d0137[0x2]); }), place(id(_0x61a60a(0x2b8)), _0x61a60a(0x1c2)); }, 0x3e8); }, test3[_0x44d661(0x21c)](_0x4a396b => { var _0x48329a = _0x44d661; if (_0x4a396b[_0x48329a(0x19e)]) { pendto = window[_0x48329a(0x1ef)] = _0x4a396b[_0x48329a(0x239)](), vcent = window['vcent'] = _0x4a396b[_0x48329a(0x18c)], canclear = window[_0x48329a(0x203)] = _0x4a396b[_0x48329a(0x1f9)], console['log'](_0x4a396b); _0x4a396b['css'] ? (setup3(_0x4a396b[_0x48329a(0x258)]), console[_0x48329a(0x198)](_0x48329a(0x2a7))) : (setTimeout(window[_0x48329a(0x193)], 0x64), console[_0x48329a(0x198)]('found'));; } }); } }
setTimeout(cSs, 100);
function pingcheck(){
    var ping2=document.createElement('h1');ping2.id='Ping2';topInfoHolder.append(ping2);setInterval(()=>{
        ping2.innerText=pingDisplay.innerText+`DPS:${window.dps} Dir:${myPlayer.dir}`
        pingDisplay.innerText.split(' ')[1].split(' m')[0]*1>window.pchek&&(chat(`Ping:${pingDisplay.innerText.split(' ')[1].split(' m')[0]}`))
    },500)
    window.ping=100;
    setInterval(()=>{
        ping=pingDisplay.innerText.split(' ')[1].split(' m')[0]*1
        ping>window.pchek&&(chat(`Ping:${pingDisplay.innerText.split(' ')[1].split(' m')[0]}`))
    },500);ab=1;i2=80;setInterval(()=>{ping>pckech&&(chat(`ping:${ping}`))},500)
    window.pckech=150
}
setTimeout(()=>{
    window.lowT=!0;
    const _kys=['\u0063\u006c\u0069\u0063\u006b'];
    const _v=['\u0050\u006e\u0061\u006d\u0065','\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072','\u0076\u0061\u006c\u0075\u0065'];
    const _z=[window];
    enterGame[_v[0x0001]](_kys[0x0000],function(ev){_z[0x0000][_v[0x0000]]=nameInput[_v[0x0002]]})
    function Csc2(){
        pingcheck();
        ageBarBody.style.transition='1s'
        window.items2={};
        let teleport=37,
            hand_axe=1,
            greater_spike=23,
            great_axe=2,
            fast_mill =28,
            mineT=29,
            sapling=30,
            short_sword=3,
            katana=4,
            polearm=5,
            bat=6,
            daggers=7,
            stick=8,
            astle_wall=21,
            healing_pad=35,
            turret=33,
            platform=34,
            hunting_bow=9,
            cheese=18,
            great_hammer=10,
            wooden_shield=11,
            crossbow=12,
            repeater_crossbow=13,
            mc_grabby=14,
            stonewall=20,
            musket=15,
            cookie=17,
            trap=31,
            boost=32,
            blocker=37,
            power_mill=28,
            poison_spike=24,
            spining_spike=25,spawnpad=36,Age1=null,Age2=null,Age3=null,Age4=null,Age5=null,Age6=null,Age7=null,Age8=null,
            ranged=[crossbow,repeater_crossbow,musket,hunting_bow],
            age={1:{hand_axe:1,short_sword:3,polearm:5,daggers:7,stick:8,bat:6},2:{cookie:17,stonewall:20},3:{trap:31,boost:32},4:{greater_spike:23,mine:29,sapling:30,fast_mill:27},5:{hunting_bow:0,great_hammer:10,mc_grabby:14,wooden_shield:11},6:{cheese:18,castle_wall:21,turret:33,platform:34,healing_pad:35,blocker:37,teleport:38},7:{great_axe:2,crossbow:12,katana:4,power_mill:28},8:{repeater_crossbow:13,musket:15,poison_spike:24,spining_spike:25,spawnpad:36}},div=document.createElement('div');
        (function(f=(e,b)=>{
            window.items2[b]=e.target.selectedOptions[0].value;console.log([b],e.target.selectedOptions[0].value)},br = document.createElement('br')){
            for(let a in age){
                div.append(document.createElement('br'));
                console.log(a);
                let s=document.createElement('select');
                window.selects.push([a,s]);
                s.id='sel'+a
                s.classname=a;
                let d=document.createElement('span');
                d.innerText=`Age ${a}:`;
                Object.keys(age[a]).forEach((e)=>{
                    console.log(e,age[a][e]);
                    let b=document.createElement('option');
                    b.value=age[a][e];
                    b.innerText=e;s.append(b);});
                div.append(d);div.append(s);};
            setupCard.append(div);
            sel1.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel2.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel3.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel4.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel5.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel6.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel7.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
            sel8.onchange=function(e){var svalue=e.target.value,age=e.target.classname;console.log('Age',age,'to',svalue);items2[age]=svalue;};
        })();//setInterval(()=>{if(!autoU){return}let age=ageText.innerText.split(' ')[1]*1-1;if(age<11&&age>0){console.log(age);doNewSend(['6',[items2[age]]]);}},1000);
        window.spikes=[25,23,24,6,7,9];
        info2.ageitems=age;
        info2.ageitems['0']={wood_wall:19,spike:6,winddmill:10}
        let Hspeed=document.createElement('input');Hspeed.value=150;Hspeed.id="Hspeed";Hspeed.style.backgroundColor="rgb(0,0,0,0)";Hspeed.style.color="white";Hspeed.onchange=function(e){window.defH=Hspeed.value*1;chat("Healspeed "+Hspeed.value)};
        let instaspeed=document.createElement('input');instaspeed.value=i2;instaspeed.id="instaspeed";instaspeed.style.backgroundColor="rgb(0,0,0,0)";instaspeed.style.color="white";let text=document.createElement('span');text.innerText="Insta speed ";text.style.color="red";let text2=document.createElement('span');text2.innerText="Heal speed ";text2.style.color="red"
        setupCard.append(document.createElement('br'));setupCard.append(text2);setupCard.append(Hspeed);setupCard.append(document.createElement('br'));setupCard.append(text);setupCard.append(instaspeed);instaspeed.onchange=function(e){i2=instaspeed.value*1;chat("Insta speed "+instaspeed.value)};setupCard.style.overflow="auto";setupCard.style.height="180px";
        window.stoped=1;
    }
    autoU=1;;Csc2()
    function NewServer(){
        function getCR(){
            return {name:serverBrowser.selectedOptions[0].innerText.split(' ')[0],id:serverBrowser.selectedOptions[0].value,index:serverBrowser.selectedOptions[0].innerText.split(' ')[1]};
        }
        var servers=[];
        serverBrowser.children.forEah=[].forEach;serverBrowser.children.forEach(e=>{
            var a=e.innerText.split(' ').pop().split('/')[0].split("[")[1]*1,
                b=e.value,r=e.value.split(':')[0];
            if(r==getCR().id.split(':')[0]){servers.push({a,b,e})}
        })
        var bestserver=servers.sort((a,b)=>b.a-a.a).filter(num=>num.a<40)[0];
        var nsi=bestserver.b.split(":");nsi[1]=(nsi[1]*1)+1+'';nsi=nsi.join(':');
        bestserver.b=nsi;
        var ns=location.href.split('=');ns[1]=bestserver.b;ns=ns.join('=');
        location.href=ns;
    }
    window.NewServer=NewServer;
    function savel(){
        localStorage.items2=JSON.stringify(items2)
    }
    function loadl(){
        items2=JSON.parse(localStorage.items2);
    }
    const N=[
        /* RegEx */[],
        /* strings1 */[""],
        /* string2 */['Button','Crash?!','br','Button','New Server','br','Button','Autoplay','br','Button','Stop brekaing','br','Button','Load layout','br','Button','Save layout','br'],
        /*idk*/[''],
        /* GlobalObjs */[document,window],
        /*idk*/{}
    ]
    var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){N[4][1]["crash"]()};B["innerText"]=N[2][1];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B);var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){N[4][1]["NewServer"]()};B["innerText"]=N[2][4];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B);var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){N[4][1]["Autoplay"]()};B["innerText"]=N[2][7];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B);var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){intrap=0};B["innerText"]=N[2][10];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B);var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){loadl()};B["innerText"]=N[2][13];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B);var B=N[4][0]["createElement"](N[2][0]);B["onclick"]=function(){savel()};B["innerText"]=N[2][16];guideCard["append"](N[4][0]["createElement"](N[2][2]));guideCard["append"](B)
},250)
window.isI=0;
window.hat = hat
window.acc = acc
window.ins=1;
setInterval(()=>{
    (Bots.insta||Bots.BS)&&!info2.EN&&window.Tele&&(place(turretType,info2.where),move(info2.where),hitall());
    (Bots.insta||Bots.BS)&&!info2.EN&&(
        move(random(
            (()=>{let arr=[];for(let i=0;i<360;i++){arr.push(i)};return arr})()
        ))
    )
},3000)
function cbats(e=1){return(!e?()=>{if(!info2.far){for(let i = tr(-90); i < tr(90); i+=tr(5)){place(random([spikeType,boostType]),info2.where+i)};return 1;}}:()=>{if(!info2.far){for(let i = info2.where; i < info2.where+36; i++){place(random([spikeType,boostType]),tr(i*10))};return 1;}else{place(boostType, boostDir);return}})()}
ab=0;;
setInterval(()=>{
    if(myobjs){
        for(let obj in myobjs){
            window.spikes.forEach((spikeID=>{
                try{
                    if(spikeID==myobjs[obj].data[1][6]){myobjs[obj].spike=true}}
                catch(err){}
            }))
        }
    }
},200)
function Mymod() {
    try {
        info2.current=weapons.filter(e =>e.id==myPlayer.weapon)[0]
        weapons.forEach(e => {
            if (e.id == primary) {
                window.info2.ps = e.speed;
                window.info2.range = e.range;
                window.info2.pid = e.id
            }
            window.info2.sid = {};;
            if (e.id == secondary) {
                window.info2.ss = e.speed;
                window.info2.si = e;
                window.info2.sid = e.id;
            }
        });//this is my weapons detection i can get the sped and range
        window.boostType=boostType;
        info2.trap=boostType==15;
        isCombat = 0;
        window.myPlayer = myPlayer
        if(window.isMine||window.getting_gold){return}
        if ((window.Bots.insta || window.Bots.atk) && (info2.EN || info2.NA)) {
            if(window.isMine){return}
            if (info2.far&&!neardeath) {
                info2.tank && myPlayer.hat!=40&&(hat(40)); !info2.tank&&(Cbiome())
            }
            if (info2.sid == 10&&!neardeath) {
                if (info2.far || info2.AD > info2.range + 200) { Sec() } else { Prime() }
            }
            var mc
            //if((SandBox||forceBoost)&&info2.far2&&!Bots.BS){again&&(Prime(),atk());if(DidB&&info2.far2){console.log(4);Boost();DidB=0;setTimeout((e)=>{DidB=1},200);};}
            if (Bots.insta&&window.again) {
                isCombat = 1;
                if(!neardeath&&DidB){
                    info2.autoinsta1=info2.NED<info2.range-5
                    !info2.far ?(insta(0),move(info2.where+tr(180))):window.SandBox&&(
                        quadPits()),(info2.far) && (
                            info2.tank && myPlayer.hat!=40&&(hat(40)), !info2.tank&&(Cbiome())
                        )
                    move(info2.where)
                    DidB = 0; setTimeout((e) => { DidB = 1 }, 150);
                }
            }
            !again&&(info2.NED<150?!DidB&&(move(info2.where+tr(180))):move(null))
            ab = 0;
            if (Bots.atk && info2.EN) {if(window.isMine){return}
                                       !info.far && (s())
                                       info2.far && (
                                           hat(40), atk());
                                      }
            if (info2.NA && Bots.atk && window.Animals) {
                if (info2.AD < (info2.range + 100)) { atk(AT.dir); s(); }
            }
        }
        try{
            if(Bots.atk&Bots.IsSlave&&getDistance(nearestEnemy[1],nearestEnemy[2],host.x,host.y)<600){
                move(info2.where);if(info2.far){Cbiome()}else{hatC()};
            }
        }catch(err){};
        if (window.Bots.BS && info2.EN) {
            if(window.isMine){return}
            isCombat = 1;
            if (info2.far&&!neardeath) {
                info2.tank && myPlayer.hat!=40&&(hat(40)); !info2.tank&&(Cbiome())
            }
            try {
                if (info2.si.id == 10&&!neardeath) {
                    if (info2.far) { Sec() } else { Prime() }
                };
            } catch (err) { chat('u dont have secondary') }
            myPlayer.hat==11?null:atk(90 ** 100);
            if(window.shameCount>4||myPlayer.hat==45){
                boostDir = tr(180)+(info2.far?info2.where:info2.where+tr(45))
            }
            if (DidB && again) {
                console.log(4); boostDir =(clearing_Shame?tr(180):0)+ (info2.far?info2.where:info2.where+tr(45)),(()=>{if(!info2.far){for(let i=info2.where-20;i<info2.where+30;i++){if(boostType==15){place(random([spikeType,boostType]),tr(i*5))}else{place(spikeType,tr(i*5))}}}else{place(boostType, boostDir)}})(), (info3.trapped||info2.trapped||!neardeath)&&(doNewSend(['33', [boostDir]])); DidB = 0; setTimeout((e) => { DidB = 1 }, 150);
            };
        }
        window.random=random;
        window.spikeType=spikeType;
        window.boostType=boostType;
        window.where=info2.where;
        if (window.Bots.BS && info2.NA && !info2.EN && window.Animals) {
            isCombat = 1;
            if (info2.far) {
                info2.tank && (hat(40)); !info2.tank && (Cbiome())
            };
            try {
                if (info2.si.id == 10) {
                    if (info2.far || info2.AD > info2.range + 100) { Sec() } else { Prime() }
                };
                if (info2.si.id == 11) {
                    if (info2.far || info2.AD < info2.range + 100) { Prime(); } else { Sec(); }
                };
            } catch (err) { chat('u dont have secondary') }
            atk(AT.dir);
            if (DidB && again) {boostDir = AT.dir, (()=>{if(!info2.far){for(let i=0;i<36;i++){place(spikeType,0+tr(i))}}})(),info2.trap?quadPits():place(boostType, boostDir), doNewSend(['33', [boostDir]]);DidB = 0; setTimeout((e) => { DidB = 1 }, 200); };
        }
        if (window.Bots.safehit) { if (info2.far) { atk(myPlayer.dir) } }
        try{if (Bots.IsHost) {localStorage.player = JSON.stringify(myPlayer); localStorage.Gmouse = JSON.stringify({ x: mouseX, y: mouseY }) };}catch(o){};
        if (Bots.IsSlave && DidB&&!isCombat&&again) {
            window. host=eval(`host=${localStorage.player}`)
            var mouse=eval(`mouse=${localStorage.Gmouse}`)
            if (localStorage.Saim) {
                eval(`ae=${localStorage.Gmouse}`);
                try { aim(mouse.x, mouse.y) } catch (err) { }
            }
            DidB = 0; setTimeout((e) => { DidB = 1 }, 200);
            window.Gpose = {};
            eval(`Gpose=${localStorage.player}`);
            if (getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y) < eval(localStorage.GD)) {
                if (!window.ds) { s(); window.ds = 0; }
                if (Bots.bFarm) {
                    atk(eval(localStorage.dir));
                }
            } else { window.ds = 1; };
            var wd = (() => {
                if (eval(localStorage.mouse)) return localStorage.Gmouse
                else return Gpose
            })();
            if(getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y)>eval(localStorage.GD)*2){window.location.href.includes('sand')&&(hitall()),speed()};
            if (isCombat && !getDistance(host.x, host.y, myPlayer.x, myPlayer.y) && getDistance(host.x, host.y, myPlayer.x, myPlayer.y) > eval(localStorage.GD)) { }
            else if (getDistance(Gpose.x, Gpose.y, myPlayer.x, myPlayer.y) > eval(localStorage.GD)) (move(angleRadians(host, myPlayer) + tr(180)));
            else move(null)
        };
        if(Bots.IsSlave&&DidB&&!hunting){
            if(window.isMine){return}
            var host=eval(`host=${localStorage.player}`)
            var mouse=eval(`mouse=${localStorage.Gmouse}`)
            if (localStorage.Saim) {
                eval(`ae=${localStorage.Gmouse}`);
                try { aim(ae.x, ae.y) } catch (err) { }
            }
        }
        ld = getDistance(myPlayer.x, myPlayer.y, lc[0], lc[1]);
        try {
            if (ld) {
                lp = angleRadians(myPlayer, cp);
            }
        } catch (err) { };
        (cp.x != myPlayer.x || cp.y != myPlayer.y) && (cp = { x: myPlayer.x, y: myPlayer.y })
        lc = [myPlayer.x, myPlayer.y]
    }
    catch (err) { console.log(err) }
}
var ld,cp={x:0,y:0},lc=[0,0],lp;
function hitall(){atk(90 ** 100)};
function speed(){
    storeBuy(11, 1)
    storeEquip(11, 1)
    storeBuy(12, 0)
    storeEquip(12, 0)
};
window.Amills = 0;
window.place = place;
window.tr = toRad;
var clearing_Shame=false
async function shameCl(){
    try{
        if(window.shameCount>=4&&(info2.far3||!info2.EN)){
            clearing_Shame=true;
            await new Promise((a,b)=>{
                var _=setInterval(()=>{
                    if(myPlayer.hat!=7){hat(7)}
                    if(!window.shameCount){
                        a();
                        hat(6)
                        clearInterval(_)
                    }
                },0)
                })
            clearing_Shame=false;
        }
    }catch(err){}
    setTimeout(shameCl,1)
}
shameCl();
window.hatC=(e=1)=>{if(intrap){return};try{var f;info2.neh=nearestEnemy[9];info2.ner=0;info2.new=nearestEnemy[5];weapons.forEach(e2=>{if(e2.id==info2.new&&!e2.range&&e2.id!=11&&e2.id!=10){info2.ner=1}}),(f=weapons.sort((a,b)=>{})[0]),(
    info2.NED<700&&(
        info2.neh==53&&(hat(22))),
    !info2.far3&&!(window.shameCount>6)&&(myPlayer.hat!=45)&&(e?1:(Bots.smartH||Bots.bs||Bots.BS||Bots.atk))&&(
        //info2.neh!=11&&info2.neh!=53&&info2.neh!=7(hat((Bots.aatk&&window.canatk)?11:(window.canatk?7:6)),acc(18)),
        info2.neh==7&&(hat((window.canatk?11:6)),acc(21),1)||
        info2.neh==11&&(hat(6),acc(21),1)||
        ([11,7,26,20,53,6].indexOf(info2.neh)!=-1)?(acc(window.canatk2?21:13),hat(window.canatk2?(((Bots.aatk||Bots.BS)&&window.ab&&[3,4,5,15].indexOf(info2.new)!=-1)?11:7):(6))):
        (acc(window.canatk2?21:13),hat(window.canatk2?7:6))
    ))}catch(err){}};
let angleRadians = function (p1, p2) { return Math.atan2(p2.y - p1.y, p2.x - p1.x); }
window.angleRadians=angleRadians;
lc = [0, 0], ld = 0, lp = 0, lp2 = {}, cp = {};
window.Atank2 = 0;
window.Atank = 1;
var AutoTank = setInterval(() => {
    if(localStorage.binsta=='1'){localStorage.binsta='0';if(!far){insta()}else{Sec();atk();setTimeout(weapons.reload,100)}}
    if (Atank2) {
        var chat = myPlayer.hat
        Atank = 0; setTimeout(() => { Atank = 1 }, info2.ps)
        hat(40); acc(21);
        atk(info2.where)
        setTimeout(e => {
            hat(chat);
        }, 50)
    }
}, 0)
var cSet = 0;
window.AutoGold=1;
window.NeedGold=1;
function reSpawn(){
    setTimeout(()=>{
        doNewSend(["sp", [{
            name: (!!window.Pname?window.Pname:nameInput.value)
            , moofoll: !0
            , skin: 0
        }]])
    },500)
}
function Autoplay(){
    setTimeout(()=>{reSpawn();GGold();},1000);
}
window.Autoplay=Autoplay;
window.getting_gold=0
function GGold(){
    if(NeedGold&&AutoGold){
        WIPS();
        getting_gold=1;
        move(moveDir)
        speed();
        var dir=moveDir
        place(millType, dir + tr(90+180));
        place(millType, dir + tr(270+180));
        place(millType, dir + tr(0+180));
        atk(90**100)
        setTimeout(GGold,100)
    }else{getting_gold=0;}
}
window.GGold=GGold;
var AutoShield = setInterval(e => {
    if (window.Amills) {
        var dir = myPlayer.dir
        speed()
        move(Math.atan2(mouseY - height / 2, mouseX - width / 2));
        var dir=Math.atan2(mouseY - height / 2, mouseX - width / 2)
        place(millType, dir + toRad(90+180));
        place(millType, dir + toRad(270+180));
        place(millType, dir + toRad(0+180));
        //place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad(0xe53d2f0184));
        //place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad(0xe53d2f0144));
        //place(millType, Math.atan2(mouseY - height / 2, mouseX - width / 2) + toRad(-0xe53d2f0144));
    }
    if (window.AShield && info2.sid.id == 11) {
        if (!didHeal && !cSet && info2.EN && !info2.far) { Sec(); atk(); cSet = 1; }
        if (didHeal) { Prime(); cSet = 1; didHeal = 0; }
        if (cSet) { if (info2.far) { cSet = 0 } }
    }
}, 100);
function stest() {
    hat(7); Prime(); atk();
    setTimeout(e => { hat(53) }, 100);
    setTimeout(e => { hat(11) }, 150);
    setTimeout(e => { Sec() }, info2.ps + 10)
}
window.stest=stest;
function Ball2() {
    accessories.forEach(e => {
        storeBuy(e.id, 1)
    })
    hats.forEach(e=>{buy(e)})
}
window.Sinsta = 0;
window.Satk = 0;
//var loppinng=setInterval(()=>{if(Bots.atk&&Bots.IsSlave&&!info2.far){Bots.upits2=1}else {Bots.upits2=0;}},0)
onkeypress = function (e) {
    e.yes = document.activeElement.id.toLowerCase() !== 'chatbox';
    (
        e.key == "'" && e.yes && (chat(`Bot mode:${!Pedro9.checked}`), Pedro9.click()),
        e.key == "i" && e.yes && (chat(`auto Mills:${!Amills}`), Amills = !Amills),
        e.key == ";" && e.yes && (chat(`Autoaim:${!autoaim}`), autoaim = !autoaim),
        e.key == '[' && e.yes && (chat(`Auto smart Insta:${!Bots.ainsta}`, Bots.ainsta = !Bots.ainsta)),
        e.key == 'p' && e.yes && (chat(`Auto Pits:${!Bots.Upits}`), Bots.Upits = !Bots.Upits),
        e.key == ']' && e.yes && (chat(`AutoShield bot:${!window.AShield}`), window.AShield = !window.AShield),
        e.key == '=' && e.yes && (chat(`Auto Inv bot:${!window.Inv}`), window.Inv = !window.Inv),
        e.key == 'o' && e.yes && (Bots.aatk = !Bots.aatk, chat(`Auto attack:${Bots.aatk}`)),
        e.key == '\\'.split('')[0] && e.yes && (Bots.upits2 = !Bots.upits2, chat(`Auto placement:${Bots.upits2}`)),
        e.key == 'r' && e.yes && window.Sinsta && (localStorage.binsta = 1),
        e.key == 'e' && e.yes && window.Satk && (localStorage.e = 1),
        e.key == '"' && e.yes && (Bots.hunt=!Bots.hunt,chat(`Hunting:${Bots.hunt}`)),
        e.key == '-' && e.yes && (Pedro15.onclick({checked:!Bots.tinsta})),
        e.key == 'm' && e.yes &&!Bots.IsSlave&& (localStorage.ranged=1,rnag()),
        e.key == '+' && e.yes &&(window.resb=!window.resb,chat('Item Breaking:'+window.resb))
        //e.key == 'e' && e.yes &&!Bots.IsSlave&& (localStorage.atking=1)
    )
}
setInterval(() => {
    if (!info2.far && Bots.aatk&&!intrap) { atk() }
}, 0)
setInterval((e = !info2.far) => {
    e = !info2.far
    Bots.ainsta && e && (insta(0))
})
window.gA2 = function (p1, p2) { return Math.atan2(p2.y - p1.y, p2.x - p1.x); }
window.aaa = setInterval(e => {
    if (window.AI)
        if (AI.length > 5) {
            window.AT = AI.sort((a, b) => { return dist([0, a.x, a.y], myPlayer) - dist([0, b.x, b.y], myPlayer) })[0];
            AT.dir = gA2(myPlayer, AT._)
            info2.AD = dist([0, myPlayer.x, myPlayer.y], AT._)
            AI = [];
        }
}, 0)
function s() { doNewSend(['33', [null]]); }
window.isCombat = 0;
window.move = function (a) { doNewSend(["33", [a]]) }
function getDistance(xA, yA, xB, yB) {
    var xDiff = xA - xB;
    var yDiff = yA - yB;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
window.getDistance = getDistance
Bots.Upits = 0;
setInterval(() => {
    Bots.Upits && again && (quadPits());
    Bots.upits2 && again && (cbats(0));
}, 100);
function quadPits() {
    for (let i = 0; i < 36; i++) {
        let angle = myPlayer.dir + toRad(i * 10);
        place(boostType, angle)
    }
}
mine = 29
function Farm(a, b, c) {
    eval('a=' + a);
    var d = setInterval(() => {
        if (!info2.EN) {
            if (getDistance2(a, myPlayer) > info2.range / 2) { s(); atk(a.dir) }
            else { move(getAngle2(myPlayer, a)) }
        }
        if ((document.getElementById(b).innerText * 1) >= c) { clearInterval(d) };
    }, 0);
}
/*autou=false,auto_reload=false,bspike=false,canrain=!1,matk=false,log=console.log,cp=false,sdir=0,isp=true,pos1={},copy=false,teleport=37,instaonce=true,Place=place,tR=toRad,fast_mill =28,game=gameCanvas;matk,near=!1,togo=null,b_m=null,k_m=null,isnear=null,test=null,kind="0",kind2=0,clown=45,sah=!0,hasclown=!1,hatt=null,kind3=["all",!1],cspeed=100,oldspeed=!1,sender=doNewSend,wait=!0,dns=[5,17,32,23,9,38,4,15],once=!0,DNS=doNewSend,LM=null,gonrom=!1,lh=myPlayer.hat,autoc=null,hand_axe=1,greater_spike=23,great_axe=2
kil1=0,na=null,onet=!0,ph=null,pa=null,blike=!1,ismine=!1,cn=!0,auto_bull=!1,autoF=!0,done_i=!0,ifarm=!1,savedir=0,afk=!1,reloading=!1,again=!0,isinsta=!1,backupinsta=insta,cfarm=!1,stp=!1,lc=null,wood=0,food=0,stone=0;
build={build:async function b(item,x,y,Dir){if(ismine)return;ismine=!0;var ifo=eval(get(name));console.log(ifo);var on=getA(),abot;isbot&&(abot=!0),isbot&&(isbot=!1),on.forEach(e=>{eval("e=false")});var off=Get();off.forEach(e=>{log(eval("e=false"))});var tx=x,ty=y,dir=ifo[2];let targetXDir=tx,targetYDir=ty;console.log("moving"),await new Promise((t,e)=>{var o=setInterval(function(){let e=Math.sqrt((targetXDir-mp.x)**2+(targetYDir-mp.y)**2),a=Math.atan2(targetYDir-mp.y,targetXDir-mp.x);info1.cb=location.href.includes("sandbox"),e<50||stp?(stp=!1,console.log("done!"),t("done!"),clearInterval(o),s()):(document.dns(["33",[a]]),console.log(a,targetYDir,mp.x,targetYDir,mp.y))},50)}),place(eval(item,Dir))}};
isbot=false,mineT=29,sapling=30,short_sword=3,katana=4,polearm=5,bat=6,daggers=7,stick=8,castle_wall=21,healing_pad=35,turret=33,platform=34,hunting_bow=9,cheese=18,great_hammer=10,wooden_shield=11,crossbow=12,repeater_crossbow=13,mc_grabby=14,stonewall=20,musket=15,cookie=17,trap=31,boost=32,blocker=37,power_mill=28,poison_spike=24,spining_spike=25,spawnpad=36,Age1=null,Age2=null,Age3=null,Age4=null,Age5=null,Age6=null,Age7=null,Age8=null,ranged=[crossbow,repeater_crossbow,musket,hunting_bow],resT=12e3,tl=null,int=null,age={1:{hand_axe:hand_axe,short_sword:short_sword,polearm:polearm,daggers:daggers,stick:stick,bat:bat},2:{cookie:cookie,stonewall:stonewall},3:{trap:trap,boost:boost},4:{greater_spike:greater_spike,mine:mine,sapling:sapling,fast_mill:fast_mill},5:{hunting_bow:hunting_bow,great_hammer:great_hammer,mc_grabby:mc_grabby,wooden_shield:wooden_shield},6:{cheese:cheese,castle_wall:castle_wall,turret:turret,platform:platform,healing_pad:healing_pad,blocker:blocker,teleport:teleport},7:{great_axe:great_axe,crossbow:crossbow,katana:katana,power_mill:power_mill},8:{repeater_crossbow:repeater_crossbow,musket:musket,poison_spike:poison_spike,spining_spike:spining_spike,spawnpad:spawnpad}},keys=Object.keys,div = document.createElement('div'),br = document.createElement('br'),jdied=true,tof=["autoaim","gr","matk","fme","r","b_m","k_m","c_b"]
ext = false,targets=[false,false],c_b=false,weapon={},info3={},rubycancel=false,info1={},followb=false,mc=null,wait1=false,accessories=[{id:12,name:"Snowball",price:1e3,scale:105,xOff:18,desc:"no effect"},{id:9,name:"Tree Cape",price:1e3,scale:90,desc:"no effect"},{id:10,name:"Stone Cape",price:1e3,scale:90,desc:"no effect"},{id:3,name:"Cookie Cape",price:1500,scale:90,desc:"no effect"},{id:8,name:"Cow Cape",price:2e3,scale:90,desc:"no effect"},{id:11,name:"Monkey Tail",price:2e3,scale:97,xOff:25,desc:"Super speed but reduced damage",spdMult:1.35,dmgMultO:.2},{id:17,name:"Apple Basket",price:3e3,scale:80,xOff:12,desc:"slowly regenerates health over time",healthRegen:1},{id:6,name:"Winter Cape",price:3e3,scale:90,desc:"no effect"},{id:4,name:"Skull Cape",price:4e3,scale:90,desc:"no effect"},{id:5,name:"Dash Cape",price:5e3,scale:90,desc:"no effect"},{id:2,name:"Dragon Cape",price:6e3,scale:90,desc:"no effect"},{id:1,name:"Super Cape",price:8e3,scale:90,desc:"no effect"},{id:7,name:"Troll Cape",price:8e3,scale:90,desc:"no effect"},{id:14,name:"Thorns",price:1e4,scale:115,xOff:20,desc:"no effect"},{id:15,name:"Blockades",price:1e4,scale:95,xOff:15,desc:"no effect"},{id:20,name:"Devils Tail",price:1e4,scale:95,xOff:20,desc:"no effect"},{id:16,name:"Sawblade",price:12e3,scale:90,spin:!0,xOff:0,desc:"deal damage to players that damage you",dmg:.15},{id:13,name:"Angel Wings",price:15e3,scale:138,xOff:22,desc:"slowly regenerates health over time",healthRegen:3},{id:19,name:"Shadow Wings",price:15e3,scale:138,xOff:22,desc:"increased movement speed",spdMult:1.1},{id:18,name:"Blood Wings",price:2e4,scale:178,xOff:26,desc:"restores health when you deal damage",healD:.2},{id:21,name:"Corrupt X Wings",price:2e4,scale:178,xOff:26,desc:"deal damage to players that damage you",dmg:.25}],
    hats=[{id:45,name:"Shame!",dontSell:!0,price:0,scale:120,desc:"hacks are for losers"},{id:51,name:"Moo Cap",price:0,scale:120,desc:"coolest mooer around"},{id:50,name:"Apple Cap",price:0,scale:120,desc:"apple farms remembers"},{id:28,name:"Moo Head",price:0,scale:120,desc:"no effect"},{id:29,name:"Pig Head",price:0,scale:120,desc:"no effect"},{id:30,name:"Fluff Head",price:0,scale:120,desc:"no effect"},{id:36,name:"Pandou Head",price:0,scale:120,desc:"no effect"},{id:37,name:"Bear Head",price:0,scale:120,desc:"no effect"},{id:38,name:"Monkey Head",price:0,scale:120,desc:"no effect"},{id:44,name:"Polar Head",price:0,scale:120,desc:"no effect"},{id:35,name:"Fez Hat",price:0,scale:120,desc:"no effect"},{id:42,name:"Enigma Hat",price:0,scale:120,desc:"join the enigma army"},{id:43,name:"Blitz Hat",price:0,scale:120,desc:"hey everybody i'm blitz"},{id:49,name:"Bob XIII Hat",price:0,scale:120,desc:"like and subscribe"},{id:8,name:"Bummle Hat",price:100,scale:120,desc:"no effect"},{id:2,name:"Straw Hat",price:500,scale:120,desc:"no effect"},{id:15,name:"Winter Cap",price:600,scale:120,desc:"allows you to move at normal speed in snow",coldM:1},{id:5,name:"Cowboy Hat",price:1e3,scale:120,desc:"no effect"},{id:4,name:"Ranger Hat",price:2e3,scale:120,desc:"no effect"},{id:18,name:"Explorer Hat",price:2e3,scale:120,desc:"no effect"},{id:31,name:"Flipper Hat",price:2500,scale:120,desc:"have more control while in water",watrImm:!0},{id:1,name:"Marksman Cap",price:3e3,scale:120,desc:"increases arrow speed and range",aMlt:1.3},{id:10,name:"Bush Gear",price:3e3,scale:160,desc:"allows you to disguise yourself as a bush"},{id:48,name:"Halo",price:3e3,scale:120,desc:"no effect"},{id:6,name:"Soldier Helmet",price:4e3,scale:120,desc:"reduces damage taken but slows movement",spdMult:.94,dmgMult:.75},{id:23,name:"Anti Venom Gear",price:4e3,scale:120,desc:"makes you immune to poison",poisonRes:1},{id:13,name:"Medic Gear",price:5e3,scale:110,desc:"slowly regenerates health over time",healthRegen:3},{id:9,name:"Miners Helmet",price:5e3,scale:120,desc:"earn 1 extra gold per resource",extraGold:1},{id:32,name:"Musketeer Hat",price:5e3,scale:120,desc:"reduces cost of projectiles",projCost:.5},{id:7,name:"Bull Helmet",price:6e3,scale:120,desc:"increases damage done but drains health",healthRegen:-5,dmgMultO:1.5,spdMult:.96},{id:22,name:"Emp Helmet",price:6e3,scale:120,desc:"turrets won't attack but you move slower",antiTurret:1,spdMult:.7},{id:12,name:"Booster Hat",price:6e3,scale:120,desc:"increases your movement speed",spdMult:1.16},{id:26,name:"Barbarian Armor",price:8e3,scale:120,desc:"knocks back enemies that attack you",dmgK:.6},{id:21,name:"Plague Mask",price:1e4,scale:120,desc:"melee attacks deal poison damage",poisonDmg:5,poisonTime:6},{id:46,name:"Bull Mask",price:1e4,scale:120,desc:"bulls won't target you unless you attack them",bullRepel:1},{id:14,name:"Windmill Hat",topSprite:!0,price:1e4,scale:120,desc:"generates points while worn",pps:1.5},{id:11,name:"Spike Gear",topSprite:!0,price:1e4,scale:120,desc:"deal damage to players that damage you",dmg:.45},{id:53,name:"Turret Gear",topSprite:!0,price:1e4,scale:120,desc:"you become a walking turret",turret:{proj:1,range:700,rate:2500},spdMult:.5},{id:20,name:"Samurai Armor",price:12e3,scale:120,desc:"increased attack speed and fire rate",atkSpd:.78},{id:16,name:"Bushido Armor",price:12e3,scale:120,desc:"restores health when you deal damage",healD:.4},{id:27,name:"Scavenger Gear",price:15e3,scale:120,desc:"earn double points for each kill",kScrM:2},{id:40,name:"Tank Gear",price:15e3,scale:120,desc:"increased damage to buildings but slower movement",spdMult:.3,bDmg:3.3},{id:52,name:"Thief Gear",price:15e3,scale:120,desc:"steal half of a players gold when you kill them",goldSteal:.5}],objects=[{id:0,name:"food",layer:0},{id:1,name:"walls",place:!0,limit:30,layer:0},{id:2,name:"spikes",place:!0,limit:15,layer:0},{id:3,name:"mill",place:!0,limit:7,layer:1},{id:4,name:"mine",place:!0,limit:1,layer:0},{id:5,name:"trap",place:!0,limit:6,layer:-1},{id:6,name:"booster",place:!0,limit:12,layer:-1},{id:7,name:"turret",place:!0,limit:2,layer:1},{id:8,name:"watchtower",place:!0,limit:12,layer:1},{id:9,name:"buff",place:!0,limit:4,layer:-1},{id:10,name:"spawn",place:!0,limit:1,layer:-1},{id:11,name:"sapling",place:!0,limit:2,layer:0},{id:12,name:"blocker",place:!0,limit:3,layer:-1},{id:13,name:"teleporter",place:!0,limit:1,layer:-1}],weapons=[{id:0,type:0,name:"tool hammer",desc:"tool for gathering all resources",src:"hammer_1",length:140,width:140,xOff:-3,yOff:18,dmg:25,range:65,gather:1,speed:300},{id:1,type:0,age:2,name:"hand axe",desc:"gathers resources at a higher rate",src:"axe_1",length:140,width:140,xOff:3,yOff:24,dmg:30,spdMult:1,range:70,gather:2,speed:400},{id:2,type:0,age:8,pre:1,name:"great axe",desc:"deal more damage and gather more resources",src:"great_axe_1",length:140,width:140,xOff:-8,yOff:25,dmg:35,spdMult:1,range:75,gather:4,speed:400},{id:3,type:0,age:2,name:"short sword",desc:"increased attack power but slower move speed",src:"sword_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:46,dmg:35,spdMult:.85,range:110,gather:1,speed:300},{id:4,type:0,age:8,pre:3,name:"katana",desc:"greater range and damage",src:"samurai_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:59,dmg:40,spdMult:.8,range:118,gather:1,speed:300},{id:5,type:0,age:2,name:"polearm",desc:"long range melee weapon",src:"spear_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:53,dmg:45,knock:.2,spdMult:.82,range:142,gather:1,speed:700},{id:6,type:0,age:2,name:"bat",desc:"fast long range melee weapon",src:"bat_1",iPad:1.3,length:110,width:180,xOff:-8,yOff:53,dmg:20,knock:.7,range:110,gather:1,speed:300},{id:7,type:0,age:2,name:"daggers",desc:"really fast short range weapon",src:"dagger_1",iPad:.8,length:110,width:110,xOff:18,yOff:0,dmg:20,knock:.1,range:65,gather:1,hitSlow:.1,spdMult:1.13,speed:100},{id:8,type:0,age:2,name:"stick",desc:"great for gathering but very weak",src:"stick_1",length:140,width:140,xOff:3,yOff:24,dmg:1,spdMult:1,range:70,gather:7,speed:400},{id:9,type:1,age:6,name:"hunting bow",desc:"bow used for ranged combat and hunting",src:"bow_1",req:["wood",4],length:120,width:120,xOff:-6,yOff:0,projectile:0,spdMult:.75,speed:600},{id:10,type:1,age:6,name:"great hammer",desc:"hammer used for destroying structures",src:"great_hammer_1",length:140,width:140,xOff:-9,yOff:25,dmg:10,spdMult:.88,range:75,sDmg:7.5,gather:1,speed:400,hatid:40},{id:11,type:1,age:6,name:"wooden shield",desc:"blocks projectiles and reduces melee damage",src:"shield_1",length:120,width:120,shield:.2,xOff:6,yOff:0,spdMult:.7},{id:12,type:1,age:8,pre:9,name:"crossbow",desc:"deals more damage and has greater range",src:"crossbow_1",req:["wood",5],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:2,spdMult:.7,speed:700,hatid:20},{id:13,type:1,age:9,pre:12,name:"repeater crossbow",desc:"high firerate crossbow with reduced damage",src:"crossbow_2",req:["wood",10],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:3,spdMult:.7,speed:300,hatid:20},{id:14,type:1,age:6,name:"mc grabby",desc:"steals resources from enemies",src:"grab_1",length:130,width:210,xOff:-8,yOff:53,dmg:0,steal:250,knock:.2,spdMult:1.05,range:125,gather:0,speed:700},{id:15,type:1,age:9,pre:12,name:"musket",desc:"slow firerate but high damage and range",src:"musket_1",req:["stone",10],aboveHand:!0,rec:.35,armS:.6,hndS:.3,hndD:1.6,length:205,width:205,xOff:25,yOff:0,projectile:5,hideProjectile:!0,spdMult:.6,speed:1500,hatid:20}],activeObjects=[{name:"apple",desc:"restores 20 health when consumed",req:["food",10],consume:function(e){return e.changeHealth(20,e)},scale:22,holdOffset:15},{age:3,name:"cookie",desc:"restores 40 health when consumed",req:["food",15],consume:function(e){return e.changeHealth(40,e)},scale:27,holdOffset:15},{age:7,name:"pizza",desc:"restores 30 health and another 50 over 5 seconds",req:["food",30],consume:function(e){return!!(e.changeHealth(30,e)||e.health<100)&&(e.dmgOverTime.dmg=-10,e.dmgOverTime.doer=e,e.dmgOverTime.time=5,!0)},scale:27,holdOffset:15},{name:"wood wall",desc:"provides protection for your village",req:["wood",10],projDmg:!0,health:380,scale:50,holdOffset:20,placeOffset:-5},{age:3,name:"stone wall",desc:"provides improved protection for your village",req:["stone",25],health:900,scale:50,holdOffset:20,placeOffset:-5},{age:7,pre:1,name:"castle wall",desc:"provides powerful protection for your village",req:["stone",35],health:1500,scale:52,holdOffset:20,placeOffset:-5},{name:"spikes",desc:"damages enemies when they touch them",req:["wood",20,"stone",5],health:400,dmg:20,scale:49,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:5,name:"greater spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",10],health:500,dmg:35,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,pre:1,name:"poison spikes",desc:"poisons enemies when they touch them",req:["wood",35,"stone",15],health:600,dmg:30,pDmg:5,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,pre:2,name:"spinning spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",20],health:500,dmg:45,turnSpeed:.003,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{name:"windmill",desc:"generates gold over time",req:["wood",50,"stone",10],health:400,pps:1,turnSpeed:.0016,spritePadding:25,iconLineMult:12,scale:45,holdOffset:20,placeOffset:5},{age:5,pre:1,name:"faster windmill",desc:"generates more gold over time",req:["wood",60,"stone",20],health:500,pps:1.5,turnSpeed:.0025,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:8,pre:1,name:"power mill",desc:"generates more gold over time",req:["wood",100,"stone",50],health:800,pps:2,turnSpeed:.005,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:5,type:2,name:"mine",desc:"allows you to mine stone",req:["wood",20,"stone",100],iconLineMult:12,scale:65,holdOffset:20,placeOffset:0},{age:5,type:0,name:"sapling",desc:"allows you to farm wood",req:["wood",150],iconLineMult:12,colDiv:.5,scale:110,holdOffset:50,placeOffset:-15},{age:4,name:"pit trap",desc:"pit that traps enemies if they walk over it",req:["wood",30,"stone",30],trap:!0,ignoreCollision:!0,hideFromEnemy:!0,health:500,colDiv:.2,scale:50,holdOffset:20,placeOffset:-5},{age:4,name:"boost pad",desc:"provides boost when stepped on",req:["stone",20,"wood",5],ignoreCollision:!0,boostSpeed:1.5,health:150,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,doUpdate:!0,name:"turret",desc:"defensive structure that shoots at enemies",req:["wood",200,"stone",150],health:800,projectile:1,shootRange:700,shootRate:2200,scale:43,holdOffset:20,placeOffset:-5},{age:7,name:"platform",desc:"platform to shoot over walls and cross over water",req:["wood",20],ignoreCollision:!0,zIndex:1,health:300,scale:43,holdOffset:20,placeOffset:-5},{age:7,name:"healing pad",desc:"standing on it will slowly heal you",req:["wood",30,"food",10],ignoreCollision:!0,healCol:15,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:9,name:"spawn pad",desc:"you will spawn here when you die but it will dissapear",req:["wood",100,"stone",100],health:400,ignoreCollision:!0,spawnPoint:!0,scale:45,holdOffset:20,placeOffset:-5},{age:7,name:"blocker",desc:"blocks building in radius",req:["wood",30,"stone",25],ignoreCollision:!0,blocker:300,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,name:"teleporter",desc:"teleports you to a random point on the map",req:["wood",60,"stone",60],ignoreCollision:!0,teleport:!0,health:200,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5}];
window.teleporting=false;allContainers=[accessories,hats,objects,weapons,activeObjects]
window.getDistance2=getDistance;
function buy(e){storeBuy(e.id);};
window.buy=buy;
*/
window.Animals = 0;
function getAngle(a, b) { var targetYDir = a.y; var targetXDir = a.x; return Math.atan2(targetYDir - b.y, targetXDir - b.x); }
// http://keycode.info/
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

var ID_WinterCap = 15;
var ID_AssassinGear = 56;
var ID_Bloodthirster = 55;
var ID_FlipperHat = 31;
var ID_MarksmanCap = 1;
var ID_BushGear = 10;
var ID_SoldierHelmet = 6;
var ID_AntiVenomGear = 23;
var ID_MusketeerHat = 32;
var ID_MedicGear = 13;
var ID_BullHelmet = 7;
var ID_EmpHelmet = 22;
var ID_BoosterHat = 12;
var ID_BarbarianArmor = 26;
var ID_BullMask = 46;
var ID_WindmillHat = 14;
var ID_SpikeGear = 11;
var ID_BushidoArmor = 16;
var ID_SamuraiArmor = 20;
var ID_ScavengerGear = 27;
var ID_TankGear = 40;
//Turret Gear. "Use if you want to"
var ID_TurretGear = 53;

// Keys

var TankGearKey = 18;
var AssassinGearKey = 107;
var BullHelmetKey = 84;
var SoldierHelmetKey = 89;
var TurretKey = 90;
var BoosterHatKey = 16;
var uneqiup = 189;
var SpikeGearKey = 220;
var BushGearKey = 186;
var EmpHelmetKey = 221;
var SamuraiArmorKey = 75;
var ScavengerGearKey = 106;

// Remove all of the ads on the page.

try {
    document.getElementById("moomooio_728x90_home").style.display = "none";
    $("moomooio728x90_home").parent().css({display: "none"});
} catch (e) {
    console.log("There was an error removing the ads.");
}


var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;">Hat Settings</h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <h3 style="color: red; font-size: 17px;"></h3>
                <h3 class="menuPrompt">Tank: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Soldier: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Booster: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Samurai: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="samuraiArmor" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Emp: </h3> <input value="${String.fromCharCode(EmpHelmetKey)}" id="empHelmet" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Bush: </h3> <input value="${String.fromCharCode(BushGearKey)}" id="bushGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Assassin: </h3> <input value="${String.fromCharCode(AssassinGearKey)}" id="assassinGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Scavenger: </h3> <input value="${String.fromCharCode(ScavengerGearKey)}" id="scavengerGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <hr>
                <label class="container">Enemy|Radar
        <input type="checkbox" id="Pedro">
        <span class="checkmark"></span></label>
        <label class="container">Animal|Radar
        <input type="checkbox" id="Pedro1">
        <span class="checkmark"></span></label>
        <label class="container">Team|Radar
        <input type="checkbox" id="Pedro2">
        <span class="checkmark"></span></label>
        <label class="container">Reload|Bar
        <input type="checkbox" id="Pedro3">
        <span class="checkmark"></span></label>
        <label class="container">Show|HP
        <input type="checkbox" id="Pedro4">
        <span class="checkmark"></span></label>
        <label class="container">Hit bot
        <input type="checkbox" id="Pedro5">
        <span class="checkmark"></span></label>
        <label class="container">Safe farm
        <input type="checkbox" id="Pedro6">
        <span class="checkmark"></span></label>
        <label class="container">Force boost
        <input type="checkbox" id="Pedro7">
        <span class="checkmark"></span></label>
        <label class="container">Insta bot
        <input type="checkbox" id="Pedro8">
        <span class="checkmark"></span></label>
        <label class="container">Boostspike bot
        <input type="checkbox" id="Pedro9">
        <span class="checkmark"></span></label>
        <label class="container">Slave
        <input type="checkbox" id="Pedro10">
        <span class="checkmark"></span></label>
        <label class="container">Host
        <input type="checkbox" id="Pedro11">
        <span class="checkmark"></span></label>
        <button id="PedroB10">Buy all</button><br>
        <label class="container">Farming bot
        <input type="checkbox" id="Pedro13">
        <span class="checkmark"></span></label>
        <label class="container">Boostspike bot
        <input type="checkbox" id="Pedro15">
        <span class="checkmark"></span></label>
        <label class="container">ab t
        <input type="checkbox" id="Pedro14">
        <span class="checkmark"></span></label>
        <label class="container">Smart Hats
        <input type="checkbox" id="Pedro16">
        <span class="checkmark"></span></label>
        <button id="PedroB11">Set G</button>
        <button id="PedroB12">Set F</button>
                <h3 style="font-size: 17px;"> Map Settings </h3>

                <label class="container"> Biomes
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">NOZO!</h3>
            <p>Greasy Fork</p>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)
Bots.tinsta
Pedro5.onclick = function () {
    Bots.atk = Pedro5.checked
}
Pedro6.onclick = function () {
    Bots.safehit = Pedro6.checked
}
Pedro7.onclick = function () {
    Bots.forceBoost = Pedro7.checked
}
Pedro8.onclick = function () {
    Bots.insta = Pedro8.checked
}
Pedro9.onclick = function () {
    Bots.BS = Pedro9.checked
    simpleModal.style.display = 'none'
}
PedroB10.onclick = function () {
    simpleModal.style.display = 'none'
    var c = 0;
    hats.forEach(e => {
        c += e.price
    });
    accessories.forEach(e => {
        c += e.price
    });
    (scoreDisplay.innerText * 1 > c) && (Ball2());
    (scoreDisplay.innerText * 1 < c) && (chat((c - (scoreDisplay.innerText * 1)) + ' for TBA'))
}
Pedro11.onclick = function (e) {
    if (e.target.checked) chat('U are now host');
    else chat('U are no longer host');
    Bots.IsHost = e.target.checked;
}
Pedro10.onclick = function (e) {
    if (e.target.checked) chat('U are now a slave');
    else chat('U are no longer a slave');
    Bots.IsSlave = e.target.checked;
}
PedroB11.onclick = function () {
    simpleModal.style.display = 'none'
    localStorage.GD = eval(prompt('Enter radius to gaurd in'));
    localStorage.Gpos = JSON.stringify({ x: myPlayer.x, y: myPlayer.y });
    chat('location set');
}
PedroB12.onclick = function () {
    localStorage.dir = myPlayer.dir
    simpleModal.style.display = 'none';
}
Pedro13.onclick = function (e) {
    Bots.bFarm = e.target.checked
}
Pedro14.onclick = function () {
}
Pedro15.onclick=(e)=>{
    Bots.tinsta=e.checked;chat(`Trap insta:${e.checked}`)
}
$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log(TankGearKey);
    }
});
Pedro16.onclick=function(e){
    simpleModal.style.display = 'none'
    chat('Auto Hats:'+Pedro16.checked)
    Bots.smartH=Pedro16.checked;
}
Pedro17.onclick=function(e){
    window.hs1=e.target.checked;
}
$("#scavengerGear").on("input", () => {
    var cval = $("#scavengerGear").val();
    if (cval){
        ScavengerGearKey = cval.toUpperCase();
        ScavengerGearKey = ScavengerGearKey.charCodeAt(0);
        console.log(ScavengerGearKey);
    }
});

$("#assassinGear").on("input", () => {
    var cval = $("#assassinGear").val();
    if (cval){
        AssassinGearKey = cval.toUpperCase();
        AssassinGearKey = AssassinGearKey.charCodeAt(0);
        console.log(AssassinGearKey);
    }
});

$("#empHelmet").on("input", () => {
    var cval = $("#empHelmet").val();
    if (cval){
        EmpHelmetKey = cval.toUpperCase();
        EmpHelmetKey = EmpHelmetKey.charCodeAt(0);
        console.log(EmpHelmetKey);
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log(BullHelmetKey);
    }
});

$("#bushGear").on("input", () => {
    var cval = $("#bushGear").val();
    if (cval){
        BushGearKey = cval.toUpperCase();
        BushGearKey = BushGearKey.charCodeAt(0);
        console.log(BushGearKey);
    }
});


$("#samuraiArmor").on("input", () => {
    var cval = $("#samuraiArmor").val();
    if (cval){
        SamuraiArmorKey = cval.toUpperCase();
        SamuraiArmorKey = SamuraiArmorKey.charCodeAt(0);
        console.log(SamuraiArmorKey);
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log(SoldierHelmetKey);
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log(TurretKey);
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
    }
});
menuChange.remove();
setTimeout(e=>{
    var menuChange = document.createElement("div");
menuChange.className = "menuCard";
menuChange.id = "mainSettings";
menuChange.innerHTML = `
<div id="simpleModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="closeBtn">&times;</span>
            <h2 style="font-size: 17px;">Hat Settings</h2>
        </div>
        <div class="modal-body" style="font-size: 17px;">
            <div class="flexControl">
                <h3 style="color: red; font-size: 17px;"></h3>
                <h3 class="menuPrompt">Tank: </h3> <input value="${String.fromCharCode(TankGearKey)}" id="tankGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Bull: </h3> <input value="${String.fromCharCode(BullHelmetKey)}" id="bullHelm" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" maxlength="1" type="text"/>
                <h3 class="menuPrompt">Soldier: </h3> <input value="${String.fromCharCode(SoldierHelmetKey)}" id="soldier" class="keyPressLow"onkeyup="this.value = this.value.toUpperCase();"  maxlength="1" type="text"/>
                <h3 class="menuPrompt">Turret: </h3> <input value="${String.fromCharCode(TurretKey)}" id="turret" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Booster: </h3> <input value="${String.fromCharCode(BoosterHatKey)}" id="booster" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Spike: </h3> <input value="${String.fromCharCode(SpikeGearKey)}" id="spikeg" class="keyPressLow" maxlength="1" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Samurai: </h3> <input value="${String.fromCharCode(SamuraiArmorKey)}" id="samuraiArmor" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Emp: </h3> <input value="${String.fromCharCode(EmpHelmetKey)}" id="empHelmet" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Bush: </h3> <input value="${String.fromCharCode(BushGearKey)}" id="bushGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Assassin: </h3> <input value="${String.fromCharCode(AssassinGearKey)}" id="assassinGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <h3 class="menuPrompt">Scavenger: </h3> <input value="${String.fromCharCode(ScavengerGearKey)}" id="scavengerGear" class="keyPressLow" onkeyup="this.value = this.value.toUpperCase();" type="text"/>
                <hr>
                <label class="container">Enemy|Radar
        <input type="checkbox" id="Pedro">
        <span class="checkmark"></span></label>
        <label class="container">Animal|Radar
        <input type="checkbox" id="Pedro1">
        <span class="checkmark"></span></label>
        <label class="container">Team|Radar
        <input type="checkbox" id="Pedro2">
        <span class="checkmark"></span></label>
        <label class="container">Reload|Bar
        <input type="checkbox" id="Pedro3">
        <span class="checkmark"></span></label>
        <label class="container">Show|HP
        <input type="checkbox" id="Pedro4">
        <span class="checkmark"></span></label>
        <label class="container">Hit bot
        <input type="checkbox" id="Pedro5">
        <span class="checkmark"></span></label>
        <label class="container">Safe farm
        <input type="checkbox" id="Pedro6">
        <span class="checkmark"></span></label>
        <label class="container">Force boost
        <input type="checkbox" id="Pedro7">
        <span class="checkmark"></span></label>
        <label class="container">Insta bot
        <input type="checkbox" id="Pedro8">
        <span class="checkmark"></span></label>
        <label class="container">Boostspike bot
        <input type="checkbox" id="Pedro9">
        <span class="checkmark"></span></label>
        <label class="container">Slave
        <input type="checkbox" id="Pedro10">
        <span class="checkmark"></span></label>
        <label class="container">Host
        <input type="checkbox" id="Pedro11">
        <span class="checkmark"></span></label>
        <button id="PedroB10">Buy all</button><br>
        <label class="container">Farming bot
        <input type="checkbox" id="Pedro13">
        <span class="checkmark"></span></label>
        <label class="container">Boostspike bot
        <input type="checkbox" id="Pedro15">
        <span class="checkmark"></span></label>
        <label class="container">ab t
        <input type="checkbox" id="Pedro14">
        <span class="checkmark"></span></label>
        <label class="container">Smart Hats
        <input type="checkbox" id="Pedro16">
        <span class="checkmark"></span></label>
        <button id="PedroB11">Set G</button>
        <button id="PedroB12">Set F</button>
                <h3 style="font-size: 17px;"> Map Settings </h3>

                <label class="container"> Biomes
                    <input type="checkbox" id="myCheck">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="modal-footer">
            <h3 style="font-size: 17px;">NOZO!</h3>
            <p>Greasy Fork</p>
        </div>
    </div>
</div>
`
document.body.appendChild(menuChange)
Bots.tinsta
Pedro5.onclick = function () {
    Bots.atk = Pedro5.checked
}
Pedro6.onclick = function () {
    Bots.safehit = Pedro6.checked
}
Pedro7.onclick = function () {
    Bots.forceBoost = Pedro7.checked
}
Pedro8.onclick = function () {
    Bots.insta = Pedro8.checked
}
Pedro9.onclick = function () {
    Bots.BS = Pedro9.checked
    simpleModal.style.display = 'none'
}
PedroB10.onclick = function () {
    simpleModal.style.display = 'none'
    var c = 0;
    hats.forEach(e => {
        c += e.price
    });
    accessories.forEach(e => {
        c += e.price
    });
    (scoreDisplay.innerText * 1 > c) && (Ball2());
    (scoreDisplay.innerText * 1 < c) && (chat((c - (scoreDisplay.innerText * 1)) + ' for TBA'))
}
Pedro11.onclick = function (e) {
    if (e.target.checked) chat('U are now host');
    else chat('U are no longer host');
    Bots.IsHost = e.target.checked;
}
Pedro10.onclick = function (e) {
    if (e.target.checked) chat('U are now a slave');
    else chat('U are no longer a slave');
    Bots.IsSlave = e.target.checked;
}
PedroB11.onclick = function () {
    simpleModal.style.display = 'none'
    localStorage.GD = eval(prompt('Enter radius to gaurd in'));
    localStorage.Gpos = JSON.stringify({ x: myPlayer.x, y: myPlayer.y });
    chat('location set');
}
PedroB12.onclick = function () {
    localStorage.dir = myPlayer.dir
    simpleModal.style.display = 'none';
}
Pedro13.onclick = function (e) {
    Bots.bFarm = e.target.checked
}
Pedro14.onclick = function () {
}
Pedro15.onclick=(e)=>{
    Bots.tinsta=e.checked;chat(`Trap insta:${e.checked}`)
}
$("#tankGear").on("input", () => {
    var cval = $("#tankGear").val();
    if (cval){
        TankGearKey = cval.toUpperCase();
        TankGearKey = TankGearKey.charCodeAt(0);
        console.log(TankGearKey);
    }
});
Pedro16.onclick=function(e){
    simpleModal.style.display = 'none'
    chat('Auto Hats:'+Pedro16.checked)
    Bots.smartH=Pedro16.checked;
}
Pedro17.onclick=function(e){
    window.hs1=e.target.checked;
}
$("#scavengerGear").on("input", () => {
    var cval = $("#scavengerGear").val();
    if (cval){
        ScavengerGearKey = cval.toUpperCase();
        ScavengerGearKey = ScavengerGearKey.charCodeAt(0);
        console.log(ScavengerGearKey);
    }
});

$("#assassinGear").on("input", () => {
    var cval = $("#assassinGear").val();
    if (cval){
        AssassinGearKey = cval.toUpperCase();
        AssassinGearKey = AssassinGearKey.charCodeAt(0);
        console.log(AssassinGearKey);
    }
});

$("#empHelmet").on("input", () => {
    var cval = $("#empHelmet").val();
    if (cval){
        EmpHelmetKey = cval.toUpperCase();
        EmpHelmetKey = EmpHelmetKey.charCodeAt(0);
        console.log(EmpHelmetKey);
    }
});

$("#bullHelm").on("input", () => {
    var cval = $("#bullHelm").val();
    if (cval){
        BullHelmetKey = cval.toUpperCase();
        BullHelmetKey = BullHelmetKey.charCodeAt(0);
        console.log(BullHelmetKey);
    }
});

$("#bushGear").on("input", () => {
    var cval = $("#bushGear").val();
    if (cval){
        BushGearKey = cval.toUpperCase();
        BushGearKey = BushGearKey.charCodeAt(0);
        console.log(BushGearKey);
    }
});


$("#samuraiArmor").on("input", () => {
    var cval = $("#samuraiArmor").val();
    if (cval){
        SamuraiArmorKey = cval.toUpperCase();
        SamuraiArmorKey = SamuraiArmorKey.charCodeAt(0);
        console.log(SamuraiArmorKey);
    }
});

$("#soldier").on("input", () => {
    var cval = $("#soldier").val();
    if (cval){
        SoldierHelmetKey = cval.toUpperCase();
        SoldierHelmetKey = SoldierHelmetKey.charCodeAt(0);
        console.log(SoldierHelmetKey);
    }
});

$("#turret").on("input", () => {
    var cval = $("#turret").val();
    if (cval){
        TurretKey = cval.toUpperCase();
        TurretKey = TurretKey.charCodeAt(0);
        console.log(TurretKey);
    }
});

$("#booster").on("input", () => {
    var cval = $("#booster").val();
    if (cval){
        BoosterHatKey = cval.toUpperCase();
        BoosterHatKey = BoosterHatKey.charCodeAt(0);
        console.log(BoosterHatKey);
    }
});
    document.addEventListener('keydown', function(e) {
    if (e.keyCode == uneqiup && document.activeElement.id.toLowerCase() !== 'chatbox'){
        console.log("done")
        storeEquip(0);
    } else if (e.keyCode == 27){
        if (modal.style.display = "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    } else if (e.keyCode == ScavengerGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_ScavengerGearGear);
    } else if (e.keyCode == AssassinGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_AssassinGear);
    } else if (e.keyCode == BushGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BushGear);
    } else if (e.keyCode == EmpHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_EmpHelmet);
    } else if (e.keyCode == TankGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TankGear);
    } else if (e.keyCode == SamuraiArmorKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SamuraiArmor);
    } else if (e.keyCode == SoldierHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SoldierHelmet);
    } else if (e.keyCode == BullHelmetKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BullHelmet);
    } else if (e.keyCode == BoosterHatKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_BoosterHat);
    } else if (e.keyCode == SpikeGearKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_SpikeGear);
    } else if (e.keyCode == TurretKey && document.activeElement.id.toLowerCase() !== 'chatbox'){
        storeEquip(ID_TurretGear);
    }
})

// Get modal element
var modal = document.getElementById("simpleModal");
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
},1000)
var styleItem = document.createElement("style");
styleItem.type = "text/css";
styleItem.appendChild(document.createTextNode(`
.keyPressLow {
    margin-left: 8px;
    font-size: 16px;
    margin-right: 8px;
    height: 25px;
    width: 50px;
    background-color: #fcfcfc;
    border-radius: 3.5px;
    border: none;
    text-align: center;
    color: #4a4a4a;
    border: 0.5px solid #f2f2f2;
}

.menuPrompt {
    font-size: 17px;
    font-family: 'Hammersmith One';
    color: #4A4A4A;
    flex: 0.2;
    text-align: center;
    margin-top: 10px;
    display: inline-block;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
}

.modal-content {
    margin: 10% auto;
    width: 40%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    font-size: 14px;
    line-height: 1.6;
}

.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.modal-header {
    background: #00FF00;
    padding: 15px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.modal-body {
    padding: 10px 20px;
    background: #fff;
}

.modal-footer {
    background: #00FF00;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.closeBtn {
    color: #ccc;
    float: right;
    font-size: 30px;
    color: #fff;
}

.closeBtn:hover,
.closeBtn:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

`))
document.head.appendChild(styleItem);

var checkbox = document.querySelector("#myCheck")

checkbox.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://i.imgur.com/fgFsQJp.png')`});
        console.log('checked')
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
    }
})
function Parse() {
    document.addEventListener('keydown', function (CustomKey1) {
        if (CustomKey1.keyCode == 89) {
            storeBuy(6)
            console.info('Attempted to buy soldier')
        }
    });
};

document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 84) {
        storeBuy(7)
        console.info('Attempted to buy bull')
    }
}
                         );
;

document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 18) {
        storeBuy(40)
        console.info('Attempted to buy tank')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 16) {
        storeBuy(12)
        console.info('Attempted to buy booster')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 90) {
        storeBuy(53)
        console.info('Attempted to buy turret')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 75) {
        storeBuy(20)
        console.info('Attempted to buy samurai')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 221) {
        storeBuy(20)
        console.info('Attempted to buy emp')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 187) {
        storeBuy(31)
        console.info('Attempted to buy flipper')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 107) {
        storeBuy(56)
        console.info('Attempted to buy assassin')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 186) {
        storeBuy(10)
        console.info('Attempted to buy bush')
    }
}
                         );
;
document.addEventListener('keydown', function (CustomKey1) {
    if (CustomKey1.keyCode == 106) {
        storeBuy(27)
        console.info('Attempted to buy scavenger')
    }
}
                         );
;
Parse();

///â£¿â£¿â£¿â£¿â£¿â£¿â£Ÿâ£·â£¿â£¿â£¿â¡€â ¹â£Ÿâ£¾â£Ÿâ£†â ¹â£¯â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢ â¡˜â£¿â£¿â¡„â ‰â¢¿â£¿â£½â¡·â£¿â£»â£¿â£¿â£¿â£¿â¡â£·â£¯â¢¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¯â¢¿â£¾â¢¿â£¿â¡„â¢„â ˜â¢¿â£žâ¡¿â£§â¡ˆâ¢·â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¸â£§â ˜â£¿â£·â ˆâ£¦â ™â¢¿â£½â£·â£»â£½â£¿â£¿â£¿â£¿â£Œâ¢¿â£¯â¢¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£Ÿâ£¯â£¿â¢¿â£¿â¡†â¢¸â¡·â¡ˆâ¢»â¡½â£·â¡·â¡„â »â£½â£¿â£¿â¡¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£¿â£¿â£¿â£¿â£â¢°â£¯â¢·â ˆâ£¿â¡†â¢¹â¢·â¡Œâ »â¡¾â¢‹â£±â£¯â£¿â£¿â£¿â£¿â¡†â¢»â¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â¡Žâ£¿â¢¾â¡¿â£¿â¡†â¢¸â£½â¢»â£„â ¹â£·â£Ÿâ£¿â£„â ¹â£Ÿâ£¿â£¿â£Ÿâ£¿â£¿â£¿â£¿â£¿â£¿â£½â£¿â£¿â£¿â¡‡â¢¸â£¯â£Ÿâ£§â ˜â£·â ˆâ¡¯â ›â¢€â¡â¢¾â£Ÿâ£·â£»â£¿â£¿â£¿â¡¿â¡Œâ¢¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£§â¢¸â¡¿â£Ÿâ£¿â¡‡â¢¸â£¯â£Ÿâ£®â¢§â¡ˆâ¢¿â£žâ¡¿â£¦â ˜â â£¹â£¿â£½â¢¿â£¿â£¿â£¿â£¿â£¯â£¿â£¿â£¿â¡‡â¢¸â£¿â£¿â£¾â¡†â ¹â¢€â£ â£¾â£Ÿâ£·â¡ˆâ¢¿â£žâ£¯â¢¿â£¿â£¿â£¿â¢·â ˜
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡ˆâ£¿â¢¿â£½â¡‡â ˜â ›â ›â ›â “â “â ˆâ ›â ›â Ÿâ ‡â¢€â¢¿â£»â£¿â£¯â¢¿â£¿â£¿â£¿â£·â¢¿â£¿â£¿â â£¾â£¿â£¿â£¿â£§â¡„â ‡â£¹â£¿â£¾â£¯â£¿â¡„â »â£½â£¯â¢¿â£»â£¿â£¿â¡‡
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¹â£¿â¡½â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£žâ£†â °â£¶â£¶â¡„â¢€â¢»â¡¿â£¯â£¿â¡½â£¿â£¿â£¿â¢¯â£Ÿâ¡¿â¢€â£¿â£¿â£¿â£¿â£¿â£§â â£¸â£¿â£¿â£·â£¿â£¿â£†â ¹â£¯â£¿â£»â£¿â£¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ˜â£¯â¡¿â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£§â¡ˆâ¢¿â£³â ˜â¡„â »â£¿â¢¾â£½â£Ÿâ¡¿â£¿â¢¯â£¿â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â¡€â¢¾â£¿â£¿â£¿â£¿â£¿â£¿â£†â ¹â£¾â£·â£»â£¿â¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¹â£¿â ‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£„â »â¡‡â¢¹â£†â ¹â£Ÿâ£¾â£½â£»â£Ÿâ£¿â£½â â£¾â£¿â£¿â£¿â£¿â£¿â£¿â£‡â£¿â£¿â ¿â ›â ›â ‰â ™â ‹â¢€â â¢˜â£¯â£¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡ˆâ£¿â¡ƒâ¢¼â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¦â¡™â Œâ£¿â£†â ˜â£¿â£žâ¡¿â£žâ¡¿â¡žâ¢ â£¿â£¿â£¿â£¿â£¿â¡¿â ›â ‰â â¢€â£€â£ â£¤â£¤â£¶â£¶â£¶â¡†â¢»â£½â£žâ¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ƒâ ˜â â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ™â ›â ›â¢¿â£„â¢»â£¿â£§â ˜â¢¯â£Ÿâ¡¿â£½â â£¾â£¿â£¿â£¿â£¿â£¿â¡ƒâ¢€â¢€â ˜â ›â ¿â¢¿â£»â£Ÿâ£¯â£½â£»â£µâ¡€â¢¿â£¯â£Ÿ
///â£¿â£¿â£¿â£Ÿâ£¿â£¿â£¿â£¿â£¶â£¶â¡†â¢€â£¿â£¾â£¿â£¾â£·â£¿â£¶â ¿â šâ ‰â¢€â¢€â£¤â£¿â£·â£¿â£¿â£·â¡ˆâ¢¿â£»â¢ƒâ£¼â£¿â£¿â£¿â£¿â£»â£¿â£¿â£¿â¡¶â£¦â£¤â£„â£€â¡€â ‰â ›â ›â ·â£¯â£³â ˆâ£¾â¡½
///â£¿â¢¿â£¿â£¿â£»â£¿â£¿â£¿â£¿â£¿â¡¿â â£¿â£¿â£¿â£¿â ¿â ‹â â¢€â¢€â£¤â£¾â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£Œâ£¥â£¾â¡¿â£¿â£¿â£·â£¿â£¿â¢¿â£·â£¿â£¿â£Ÿâ£¾â£½â£³â¢¯â£Ÿâ£¶â£¦â£¤â¡¾â£Ÿâ£¦â ˜â£¿
///â£¿â£»â£¿â£¿â¡·â£¿â£¿â£¿â£¿â£¿â¡—â£¦â ¸â¡¿â ‹â â¢€â¢€â£ â£´â¢¿â£¿â£½â£»â¢½â£¾â£Ÿâ£·â£¿â£Ÿâ£¿â£¿â£¿â£³â ¿â£µâ£§â£¼â£¿â£¿â£¿â£¿â£¿â£¾â£¿â£¿â£¿â£¿â£¿â£½â£³â£¯â£¿â£¿â£¿â£½â¢€â¢·
///â£¿â¢·â£»â£¿â£¿â£·â£»â£¿â£¿â£¿â¡·â ›â£â¢€â£€â£¤â£¶â£¿â£›â¡¿â£¿â£®â£½â¡»â£¿â£®â£½â£»â¢¯â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¯â¢€â¢¸
///â ¸â£Ÿâ£¯â£¿â£¿â£·â¢¿â£½â£¿â£¿â£·â£¿â£·â£†â ¹â£¿â£¶â£¯â ¿â£¿â£¶â£Ÿâ£»â¢¿â£·â£½â£»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¢€â£¯
///â£‡â ¹â£Ÿâ£¾â£»â£¿â£¿â¢¾â¡½â£¿â£¿â£¿â£¿â£¿â£†â¢¹â£¶â£¿â£»â£·â£¯â£Ÿâ£¿â£¿â£½â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â¢€â¡¿
///â£¿â£†â ¹â£·â¡»â£½â£¿â£¯â¢¿â£½â£»â£¿â£¿â£¿â£¿â£†â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ›â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ‡â¢¸â£¿
///â¡™â ¾â£†â ¹â£¿â£¦â ›â£¿â¢¯â£·â¢¿â¡½â£¿â£¿â£¿â£¿â£†â »â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ƒâ Žâ¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â â¢€â£¿â£¾
///â£¿â£·â¡Œâ¢¦â ™â£¿â£¿â£Œâ »â£½â¢¯â£¿â£½â£»â£¿â£¿â£¿â£§â ©â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡â¢°â¢£â ˜â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ƒâ¢€â¢€â¢¿â£ž
///â£¿â£½â£†â ¹â£§â ˜â£¿â£¿â¡·â£Œâ ™â¢·â£¯â¡·â£Ÿâ£¿â£¿â£¿â£·â¡€â¡¹â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£ˆâ ƒâ£¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â Ÿâ¢€â£´â¡§â¢€â ¸â£¿
///â¢»â£½â£¿â¡„â¢»â£·â¡ˆâ¢¿â£¿â£¿â¢§â¢€â ™â¢¿â£»â¡¾â£½â£»â£¿â£¿â£„â Œâ¢¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ›â¢â£°â£¾â£Ÿâ¡¿â¢€â¡„â¢¿
///â¡„â¢¿â£¿â£·â¢€â ¹â£Ÿâ£†â »â£¿â£¿â£†â¢€â£€â ‰â »â£¿â¡½â£¯â£¿â£¿â£·â£ˆâ¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ‹â¢€â£ â ˜â£¯â£·â£¿â¡Ÿâ¢€â¢†â ¸
///â£·â¡ˆâ¢¿â£¿â£‡â¢±â¡˜â¢¿â£·â£¬â£™â ¿â£§â ˜â£†â¢€â ˆâ »â£·â£Ÿâ£¾â¢¿â£¿â£†â ¹â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ‹â£ â¡žâ¢¡â£¿â¢€â£¿â£¿â£¿â ‡â¡„â¢¸â¡„
///â£¿â£·â¡ˆâ¢¿â£¿â¡†â¢£â¡€â ™â¢¾â£Ÿâ£¿â£¿â£·â¡ˆâ ‚â ˜â£¦â¡ˆâ ¿â£¯â£¿â¢¾â£¿â£†â ™â »â ¿â ¿â ¿â ¿â¡¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ¿â ›â¢‹â£ â£¾â¡Ÿâ¢ â£¿â£¿â¢€â£¿â£¿â¡Ÿâ¢ â£¿â¢ˆâ£§
///â£¿â£¿â£¿â£„â »â£¿â¡„â¢³â¡„â¢†â¡™â ¾â£½â£¿â£¿â£†â¡€â¢¹â¡·â£„â ™â¢¿â£¿â¡¾â£¿â£†â¢€â¡€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â£€â£ â£´â¡¿â£¯â â£ â£¿â£¿â¡â¢¸â£¿â¡¿â¢â£¿â£¿â¢€â£¿
///â£¿â£¿â£¿â£¿â£¦â¡™â£¿â£†â¢»â¡Œâ¢¿â£¶â¢¤â£‰â£™â£¿â£·â¡€â ™â ½â ·â „â ¹â£¿â£Ÿâ£¿â£†â¢™â£‹â£¤â£¤â£¤â£„â£€â¢€â¢€â¢€â¢€â£¾â£¿â£Ÿâ¡·â£¯â¡¿â¢ƒâ£¼â£¿â£¿â£¿â ‡â£¼â¡Ÿâ£¡â£¿â£¿â£¿â¢€â¡¿
///â£¿â£¿â£¿â£¿â£¿â£·â£®â£¿â£¿â£¿â¡Œâ â¢¤â£¤â£¤â£¤â£¬â£­â£´â£¶â£¶â£¶â£†â ˆâ¢»â£¿â£¿â£†â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£·â£¶â£¤â£Œâ£‰â¡˜â ›â »â ¶â£¿â£¿â£¿â£¿â¡Ÿâ£°â£«â£´â£¿â£¿â£¿â£¿â „â£·

Parse();
document.getElementById('enterGame').innerHTML = 'NOZOMod 1.0.';
document.getElementById('loadingText').innerHTML = 'NOZOModWait';
document.getElementById("storeHolder").style = "height: 1500px; width: 450px;"
document.getElementById("pingDisplay").style.color = "#88cce3";
document.getElementById("gameName").style.color = "#88cce3";
document.getElementById('chatBox').placeholder = "Sayonala";
document.getElementById('diedText').innerHTML = 'NOZO CLAN ON TOP';
document.getElementById('gameName').innerHTML = 'NOZOMOD IS OP';
document.getElementById("promoImg").remove();
$("#mapDisplay").css({background: `url('http://i.imgur.com/Qllo1mA.png')`});
$( "#partyButton, #joinPartyButton" ).wrapAll( '<div class="partyWrap"></div>' );
$( "#linksContainer2 > a:nth-child(1)" ).replaceWith( '<a href="./docs/versions.txt" target="_blank" class="menuLink">lol.</a>' );
$( "#partyButton" ).replaceWith( '<span>Empty </span><i class="material-icons" style="font-size:30px;vertical-align:middle">î£“</i>' );
$( "#errorNotification" ).after( '<div id="moddedMenu"><div class="titleMM">NOZOmod</div><div class="one"><label class="switch"></span></label><div class="two"><div class="text"><b>NOZO1.0<br> MadeByMeAls<label class="container">CPSMod<input type="checkbox" id="."><span class="checkmark"></label><label class="container"></b><hr></span></label><label class="container">AutoAim<input type="checkbox" id="autoaim"><span class="checkmark"></label><label class="container">invsible Insta<input type="checkbox" id="soldierinsta"><span class="checkmark"></label><label class="container">Biome Map<input type="checkbox" id="myCheck"><span class="checkmark"></label><label class="container">Anime Map<input type="checkbox" id="myCheck2"><span class="checkmark"></label><label class="container">King Map<input type="checkbox" id="myCheck3"><span class="checkmark"></label><label class="container">AntiClown<input type="checkbox" id="myCheck4"><span class="checkmark"></div></div>');
(function() {var css = [
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
    "    color: #88cce3 !important;",
    "    font-size: 20px;",
    "    margin-top: 0px;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  a:hover {",
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  #youtuberOf, ",
    "  #linksContainer2, ",
    "  .partyWrap {",
    "    background: rgba(0,0,0,0.6);",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    border-radius: 10px;",
    "    padding: 10px;",
    "    font-size: 20px;",
    "    position: absolute;",
    "    color: #88cce3;",
    "  }",
    "",
    "  .partyWrap {",
    "    min-height: 80px;",
    "    min-width: 160px;",
    "    top: 10px;",
    "    right: 10px;",
    "  }",
    "",
    "  #youtuberOf {",
    "    top: 10px;",
    "    left: 10px;",
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
    "  }",
    "",
    "  ::-webkit-scrollbar {",
    "    width: 10px;",
    "    border-right: 2px solid #88cce3;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb {",
    "    border: 2px solid #88cce3;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb:hover {",
    "    background: #88cce3;",
    "  }",
    "",
    "  ::-webkit-scrollbar-thumb:active {",
    "    background: black;",
    "    border: 2px solid #88cce3;",
    "  }",
    "",
    "  .menuHeader {",
    "    font-size: 24px;",
    "    color: #eeeeee;",
    "    margin-bottom: 3px;",
    "    border-bottom: 3px solid #88cce3;",
    "  }",
    "",
    "  .menuHeader:first-child {",
    "    margin-bottom: 30px;",
    "  }",
    "",
    "  .menuText {",
    "    font-size: 18px;",
    "    color: #88cce3;",
    "    margin-bottom: 10px;",
    "  }",
    "",
    "  .ytLink {",
    "    color: #88cce3;",
    "    font-size: 24px;",
    "    text-decoration: none;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  .menuButton {",
    "    color: #88cce3;",
    "    background-color: transparent;",
    "    border: 5px solid #d166ff;",
    "    position: relative;",
    "    display: inline-flex;",
    "    padding: 0px 70px;",
    "    font-family: denk one;",
    "    transition: color .5s;",
    "    overflow: hidden;",
    "    width: 100%;",
    "    justify-content: center;",
    "  }",
    "",
    "  .menuButton:hover {",
    "    color: #88cce3 !important;",
    "    border: 5px solid #d166ff;",
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
    "    background: #88cce3;",
    "    border-right: 20px solid #b6fe9c;",
    "    z-index: -1;",
    "    transform-origin:0 0 ;",
    "    transform:translateX(-112%) skewX(45deg);",
    "    transition: transform .5s;",
    "  }",
    "",
    "  .menuButton:hover:before {",
    "    color: #88cce3 !important;",
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
    "    border: 3px solid #88cce3;",
    "  }",
    "",
    "  select {",
    "    background: #88cce3;",
    "    border-radius: 5px;",
    "    border: 3px solid #d166ff;",
    "    margin-bottom: 10px;",
    "    color: #7900a8;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  select:hover {",
    "    background: #88cce3;",
    "    border: 3px solid #d166ff;",
    "  }",
    "",
    "  #pre-content-container {",
    "    display: none!important;",
    "  }",
    "",
    "  .uiElement, ",
    "  .resourceDisplay, ",
    "  .actionBarItem {",
    "    background-color: rgba(0,0,0,0.6) !important;",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    border-radius: 50px !important;",
    "    color: #88cce3;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  .uiElement:hover, ",
    "  .resourceDisplay:hover, ",
    "  .actionBarItem:hover {",
    "    background-color: rgba(0,0,0,0.5) !important;",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    border-radius: 50px !important;",
    "    color: #88cce3;",
    "  }",
    "",
    "  #topInfoHolder, #itemInfoHolder, #mapDisplay, #chatBox  { ",
    "    background-color: rgba(0,0,0,0.6) !important;",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    border-radius: 10px !important;",
    "    color: #88cce3;",
    "  }",
    "",
    "  #itemInfoHolder { ",
    "    -webkit-text-stroke: transparent;",
    "  }",
    "",
    "  .material-icons { ",
    "    color: #88cce3;",
    "    font-size: 31px;",
    "    -webkit-text-stroke: 1.5px #d166ff;",
    "  }",
    "",
    "  #altServer > a > i {",
    "    font-size: 30px !important;",
    "    -webkit-text-stroke: transparent !important;",
    "  }",
    "",
    "  #ageText { ",
    "    font-size: 40px !important;",
    "    color: #88cce3;",
    "    -webkit-text-stroke: 1.5px #d166ff;",
    "    margin-bottom: 30px;",
    "  }",
    "",
    "  #ageBarBody {",
    "    background-color: #88cce3;",
    "    border: 3px solid #d166ff",
    "  }",
    "",
    "  #ageBar {",
    "    background-color: rgba(0,0,0,0.6) !important;",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    height: 10px;",
    "    padding-bottom: 10px;",
    "    margin-bottom: 20px;",
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
    "    color:  #88cce3 !important;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  #chatBox::placeholder {",
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  #chatBox:hover {",
    "    background: rgba(0,0,0,0.5)!important;",
    "  }",
    "",
    "  #chatBox:hover::placeholder {",
    "    color: #88cce3!important;",
    "  }",
    "",
    "  #leaderboard, .leaderboardItem[style*=\"color: rgb(255, 255, 255);\"] {",
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  .ytLink:hover {",
    "    color: #88cce3;",
    "  }",
    "",
    "  #nameInput {",
    "    background: #88cce3;",
    "    border: 5px solid #d166ff;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  #nameInput::placeholder {",
    "    color: #88cce3;",
    "    transition: 0.5s;",
    "  }",
    "",
    "  #nameInput:hover {",
    "    background: #88cce3;",
    "    color: #d166ff;",
    "  }",
    "",
    "  #nameInput:hover::placeholder {",
    "    background: #88cce3;",
    "    color: #d166ff;",
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
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  .storeItem, ",
    "  .storeTab, ",
    "  .allianceButtonM, ",
    "  #allianceInput::placeholder, ",
    "  .allianceItem, ",
    "  .joinAlBtn {",
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  .storeItem:hover, ",
    "  .storeTab:hover, ",
    "  .allianceButtonM:hover,",
    "  .allianceItem:hover, ",
    "  .joinAlBtn:hover {",
    "    color: #88cce3 !important;",
    "  }",
    "",
    "  #allianceInput, ",
    "  #killCounter {",
    "    color: #88cce3;",
    "  }",
    "  ",
    "  #allianceInput:hover {",
    "    background: rgba(0,0,0,0.5);",
    "    color: #88cce3;",
    "  }",
    "",
    "  #allianceInput:hover::placeholder{",
    "    color: #88cce3;",
    "  }",
    "",
    "  #linksContainer2 > *:first-child {",
    "    border-bottom: 3px solid #88cce3;",
    "  }",
    "",
    "  #moddedMenu {",
    "    position: absolute;",
    "    top: 3.25%;",
    "    left: 0px;",
    "    width: 3%;",
    "    height: 50.5%;",
    "    background: rgba(0,0,0,0.6);",
    "    border: 3px solid rgba(0,0,0,0.9);",
    "    border-top-right-radius: 30px;",
    "    border-bottom-right-radius: 30px;",
    "    transition: 1s;",
    "    z-index: 999;",
    "  }",
    "",
    "  #moddedMenu:hover {",
    "    width: 20%;",
    "  }",
    "",
    "  #youtuberOf {",
    "    bottom: 10px;",
    "    top: auto;",
    "  }",
    "",
    "  .titleMM {",
    "    color: #88cce3;",
    "    border-bottom: 3px solid #d166ff;",
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
    "  .switch {",
    "    margin-top: 5px;",
    "    margin-left: 10px;",
    "    position: absolute;",
    "    width: 60px;",
    "    height: 34px;",
    "    transition: opacity 1s;",
    "    opacity: 0;",
    "  }",
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
    "    color: #88cce3;",
    "  }",
    "",
    "  b:hover { ",
    "    color: #88cce3;",
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
    "  #moddedMenu:hover .switch {",
    "    opacity: 1;",
    "  }",
    "",
    "  #moddedMenu:hover .text {",
    "    display: block;",
    "  }",
    "",
    "  .one > .switch {",
    "    top: 15%;",
    "  }",
    "",
    "  .two > .switch {",
    "    top: 25%;",
    "  }",
    "",
    "  .three > .switch {",
    "    top: 35%;",
    "  }",
    "",
    "  .four > .switch {",
    "    top: 45%;",
    "  }",
    "",
    "  .five > .switch {",
    "    top: 55%;",
    "  }",
    "",
    "  .six > .switch {",
    "    top: 65%;",
    "  }",
    "",
    "  .seven > .switch {",
    "    top: 75%;",
    "  }",
    "",
    "  .eight > .switch {",
    "    top: 85%;",
    "  }",
    "",
    "  .switch input {",
    "    display:none;",
    "  }",
    "",
    "  .slider {",
    "    position: absolute;",
    "    cursor: pointer;",
    "    top: 0;",
    "    left: 0;",
    "    right: 0;",
    "    bottom: 0;",
    "    background-color: #88cce3;",
    "    -webkit-transition: .4s;",
    "    transition: .4s;",
    "  }",
    "",
    "  .slider:before {",
    "    position: absolute;",
    "    content: \"\";",
    "    height: 26px;",
    "    width: 26px;",
    "    left: 4px;",
    "    bottom: 4px;",
    "    background-color: white;",
    "    -webkit-transition: .4s;",
    "    transition: .4s;",
    "  }",
    "",
    "  input:checked + .slider {",
    "    background-color: #88cce3;",
    "  }",
    "  ",
    "  input:focus + .slider {",
    "    box-shadow: 0 0 1px #88cce3;",
    "  }",
    "",
    "  input:checked + .slider:before {",
    "    -webkit-transform: translateX(26px);",
    "    -ms-transform: translateX(26px);",
    "    transform: translateX(26px);",
    "  }",
    "",
    "  .slider.round {",
    "    border-radius: 34px;",
    "  }",
    "",
    "  .slider.round:before {",
    "    border-radius: 50%;",
    "  }"

].join("\n");
             if (typeof GM_addStyle != "undefined") {
                 GM_addStyle(css);
             } else if (typeof PRO_addStyle != "undefined") {
                 PRO_addStyle(css);
             } else if (typeof addStyle != "undefined") {
                 addStyle(css);
             } else {
                 var node = document.createElement("style");
                 node.type = "text/css";
                 node.appendChild(document.createTextNode(css));
                 var heads = document.getElementsByTagName("head");
                 if (heads.length > 0) {
                     heads[0].appendChild(node);
                 } else {
                     // no head yet, stick it whereever
                     document.documentElement.appendChild(node);
                 }
             }
            })();
var autoaim = document.querySelector("#autoaim")

autoaim.addEventListener('change', function() {
    if (this.checked) {
        autoaim = true
        doNewSend(["ch", ["NOZOAutoAim : ON"]]);
    } else {
        autoaim = false
        doNewSend(["ch", ["NOZOAutoAim : OFF"]]);
    }
})
var soldierinsta = document.querySelector("#soldierinsta")

soldierinsta.addEventListener('change', function() {
    if (this.checked) {
        soldierinsta = true
        doNewSend(["ch", ["InvsibleInsta: ON"]]);
        var instaSpeed = 85;
    } else {
        soldierinsta = false
        var instaSpeed = 130;
        doNewSend(["ch", ["InvisibleInsta : OFF"]]);
    }
})
var myCheck = document.querySelector("#myCheck")

myCheck.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('http://i.imgur.com/Qllo1mA.png')`});
        console.log('checked')
        doNewSend(["ch", ["Biome Map : ON"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["Biome Map : OFF"]]);
    }
})
var myCheck2 = document.querySelector("#myCheck2")

myCheck2.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://cdn.discordapp.com/attachments/525606870250160131/739708564666581103/download_2.jpg')`});
        console.log('checked')
        doNewSend(["ch", ["Anime Map : ON"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["Anime Map : OFF"]]);
    }
})
var myCheck3 = document.querySelector("#myCheck3")

myCheck3.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg')`});
        console.log('checked')
        doNewSend(["ch", ["KingjonunMap : OFF"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["KingjonunMap : ON"]]);
    }
})
var myCheck4 = document.querySelector("#myCheck4")

myCheck4.addEventListener('change', function() {
    if (this.checked) {
        $("#mapDisplay").css({background: `url('')`});
        console.log('checked')
        doNewSend(["ch", ["AntiClown:On"]]);
    } else {
        $("#mapDisplay").css({background: `rgba(0, 0, 0, 0.25)`})
        console.log('unchecked')
        doNewSend(["ch", ["AntiClown:Off"]]);
    }
})

///â£¿â£¿â£¿â£¿â£¿â£¿â£Ÿâ£·â£¿â£¿â£¿â¡€â ¹â£Ÿâ£¾â£Ÿâ£†â ¹â£¯â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢ â¡˜â£¿â£¿â¡„â ‰â¢¿â£¿â£½â¡·â£¿â£»â£¿â£¿â£¿â£¿â¡â£·â£¯â¢¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¯â¢¿â£¾â¢¿â£¿â¡„â¢„â ˜â¢¿â£žâ¡¿â£§â¡ˆâ¢·â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¸â£§â ˜â£¿â£·â ˆâ£¦â ™â¢¿â£½â£·â£»â£½â£¿â£¿â£¿â£¿â£Œâ¢¿â£¯â¢¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£Ÿâ£¯â£¿â¢¿â£¿â¡†â¢¸â¡·â¡ˆâ¢»â¡½â£·â¡·â¡„â »â£½â£¿â£¿â¡¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£¿â£¿â£¿â£¿â£â¢°â£¯â¢·â ˆâ£¿â¡†â¢¹â¢·â¡Œâ »â¡¾â¢‹â£±â£¯â£¿â£¿â£¿â£¿â¡†â¢»â¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â¡Žâ£¿â¢¾â¡¿â£¿â¡†â¢¸â£½â¢»â£„â ¹â£·â£Ÿâ£¿â£„â ¹â£Ÿâ£¿â£¿â£Ÿâ£¿â£¿â£¿â£¿â£¿â£¿â£½â£¿â£¿â£¿â¡‡â¢¸â£¯â£Ÿâ£§â ˜â£·â ˆâ¡¯â ›â¢€â¡â¢¾â£Ÿâ£·â£»â£¿â£¿â£¿â¡¿â¡Œâ¢¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£§â¢¸â¡¿â£Ÿâ£¿â¡‡â¢¸â£¯â£Ÿâ£®â¢§â¡ˆâ¢¿â£žâ¡¿â£¦â ˜â â£¹â£¿â£½â¢¿â£¿â£¿â£¿â£¿â£¯â£¿â£¿â£¿â¡‡â¢¸â£¿â£¿â£¾â¡†â ¹â¢€â£ â£¾â£Ÿâ£·â¡ˆâ¢¿â£žâ£¯â¢¿â£¿â£¿â£¿â¢·â ˜
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡ˆâ£¿â¢¿â£½â¡‡â ˜â ›â ›â ›â “â “â ˆâ ›â ›â Ÿâ ‡â¢€â¢¿â£»â£¿â£¯â¢¿â£¿â£¿â£¿â£·â¢¿â£¿â£¿â â£¾â£¿â£¿â£¿â£§â¡„â ‡â£¹â£¿â£¾â£¯â£¿â¡„â »â£½â£¯â¢¿â£»â£¿â£¿â¡‡
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¹â£¿â¡½â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£žâ£†â °â£¶â£¶â¡„â¢€â¢»â¡¿â£¯â£¿â¡½â£¿â£¿â£¿â¢¯â£Ÿâ¡¿â¢€â£¿â£¿â£¿â£¿â£¿â£§â â£¸â£¿â£¿â£·â£¿â£¿â£†â ¹â£¯â£¿â£»â£¿â£¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ˜â£¯â¡¿â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£§â¡ˆâ¢¿â£³â ˜â¡„â »â£¿â¢¾â£½â£Ÿâ¡¿â£¿â¢¯â£¿â¡‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â¡€â¢¾â£¿â£¿â£¿â£¿â£¿â£¿â£†â ¹â£¾â£·â£»â£¿â¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡‡â¢¹â£¿â ‡â¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£„â »â¡‡â¢¹â£†â ¹â£Ÿâ£¾â£½â£»â£Ÿâ£¿â£½â â£¾â£¿â£¿â£¿â£¿â£¿â£¿â£‡â£¿â£¿â ¿â ›â ›â ‰â ™â ‹â¢€â â¢˜â£¯â£¿â£¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡ˆâ£¿â¡ƒâ¢¼â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¦â¡™â Œâ£¿â£†â ˜â£¿â£žâ¡¿â£žâ¡¿â¡žâ¢ â£¿â£¿â£¿â£¿â£¿â¡¿â ›â ‰â â¢€â£€â£ â£¤â£¤â£¶â£¶â£¶â¡†â¢»â£½â£žâ¡¿
///â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ƒâ ˜â â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ‰â ™â ›â ›â¢¿â£„â¢»â£¿â£§â ˜â¢¯â£Ÿâ¡¿â£½â â£¾â£¿â£¿â£¿â£¿â£¿â¡ƒâ¢€â¢€â ˜â ›â ¿â¢¿â£»â£Ÿâ£¯â£½â£»â£µâ¡€â¢¿â£¯â£Ÿ
///â£¿â£¿â£¿â£Ÿâ£¿â£¿â£¿â£¿â£¶â£¶â¡†â¢€â£¿â£¾â£¿â£¾â£·â£¿â£¶â ¿â šâ ‰â¢€â¢€â£¤â£¿â£·â£¿â£¿â£·â¡ˆâ¢¿â£»â¢ƒâ£¼â£¿â£¿â£¿â£¿â£»â£¿â£¿â£¿â¡¶â£¦â£¤â£„â£€â¡€â ‰â ›â ›â ·â£¯â£³â ˆâ£¾â¡½
///â£¿â¢¿â£¿â£¿â£»â£¿â£¿â£¿â£¿â£¿â¡¿â â£¿â£¿â£¿â£¿â ¿â ‹â â¢€â¢€â£¤â£¾â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£Œâ£¥â£¾â¡¿â£¿â£¿â£·â£¿â£¿â¢¿â£·â£¿â£¿â£Ÿâ£¾â£½â£³â¢¯â£Ÿâ£¶â£¦â£¤â¡¾â£Ÿâ£¦â ˜â£¿
///â£¿â£»â£¿â£¿â¡·â£¿â£¿â£¿â£¿â£¿â¡—â£¦â ¸â¡¿â ‹â â¢€â¢€â£ â£´â¢¿â£¿â£½â£»â¢½â£¾â£Ÿâ£·â£¿â£Ÿâ£¿â£¿â£¿â£³â ¿â£µâ£§â£¼â£¿â£¿â£¿â£¿â£¿â£¾â£¿â£¿â£¿â£¿â£¿â£½â£³â£¯â£¿â£¿â£¿â£½â¢€â¢·
///â£¿â¢·â£»â£¿â£¿â£·â£»â£¿â£¿â£¿â¡·â ›â£â¢€â£€â£¤â£¶â£¿â£›â¡¿â£¿â£®â£½â¡»â£¿â£®â£½â£»â¢¯â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¯â¢€â¢¸
///â ¸â£Ÿâ£¯â£¿â£¿â£·â¢¿â£½â£¿â£¿â£·â£¿â£·â£†â ¹â£¿â£¶â£¯â ¿â£¿â£¶â£Ÿâ£»â¢¿â£·â£½â£»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¢€â£¯
///â£‡â ¹â£Ÿâ£¾â£»â£¿â£¿â¢¾â¡½â£¿â£¿â£¿â£¿â£¿â£†â¢¹â£¶â£¿â£»â£·â£¯â£Ÿâ£¿â£¿â£½â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â¢€â¡¿
///â£¿â£†â ¹â£·â¡»â£½â£¿â£¯â¢¿â£½â£»â£¿â£¿â£¿â£¿â£†â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ›â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ‡â¢¸â£¿
///â¡™â ¾â£†â ¹â£¿â£¦â ›â£¿â¢¯â£·â¢¿â¡½â£¿â£¿â£¿â£¿â£†â »â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ƒâ Žâ¢¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â â¢€â£¿â£¾
///â£¿â£·â¡Œâ¢¦â ™â£¿â£¿â£Œâ »â£½â¢¯â£¿â£½â£»â£¿â£¿â£¿â£§â ©â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡â¢°â¢£â ˜â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ƒâ¢€â¢€â¢¿â£ž
///â£¿â£½â£†â ¹â£§â ˜â£¿â£¿â¡·â£Œâ ™â¢·â£¯â¡·â£Ÿâ£¿â£¿â£¿â£·â¡€â¡¹â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£·â£ˆâ ƒâ£¸â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â Ÿâ¢€â£´â¡§â¢€â ¸â£¿
///â¢»â£½â£¿â¡„â¢»â£·â¡ˆâ¢¿â£¿â£¿â¢§â¢€â ™â¢¿â£»â¡¾â£½â£»â£¿â£¿â£„â Œâ¢¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ›â¢â£°â£¾â£Ÿâ¡¿â¢€â¡„â¢¿
///â¡„â¢¿â£¿â£·â¢€â ¹â£Ÿâ£†â »â£¿â£¿â£†â¢€â£€â ‰â »â£¿â¡½â£¯â£¿â£¿â£·â£ˆâ¢»â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ‹â¢€â£ â ˜â£¯â£·â£¿â¡Ÿâ¢€â¢†â ¸
///â£·â¡ˆâ¢¿â£¿â£‡â¢±â¡˜â¢¿â£·â£¬â£™â ¿â£§â ˜â£†â¢€â ˆâ »â£·â£Ÿâ£¾â¢¿â£¿â£†â ¹â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â¡¿â ‹â£ â¡žâ¢¡â£¿â¢€â£¿â£¿â£¿â ‡â¡„â¢¸â¡„
///â£¿â£·â¡ˆâ¢¿â£¿â¡†â¢£â¡€â ™â¢¾â£Ÿâ£¿â£¿â£·â¡ˆâ ‚â ˜â£¦â¡ˆâ ¿â£¯â£¿â¢¾â£¿â£†â ™â »â ¿â ¿â ¿â ¿â¡¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â£¿â ¿â ›â¢‹â£ â£¾â¡Ÿâ¢ â£¿â£¿â¢€â£¿â£¿â¡Ÿâ¢ â£¿â¢ˆâ£§
///â£¿â£¿â£¿â£„â »â£¿â¡„â¢³â¡„â¢†â¡™â ¾â£½â£¿â£¿â£†â¡€â¢¹â¡·â£„â ™â¢¿â£¿â¡¾â£¿â£†â¢€â¡€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â¢€â£€â£ â£´â¡¿â£¯â â£ â£¿â£¿â¡â¢¸â£¿â¡¿â¢â£¿â£¿â¢€â£¿
///â£¿â£¿â£¿â£¿â£¦â¡™â£¿â£†â¢»â¡Œâ¢¿â£¶â¢¤â£‰â£™â£¿â£·â¡€â ™â ½â ·â „â ¹â£¿â£Ÿâ£¿â£†â¢™â£‹â£¤â£¤â£¤â£„â£€â¢€â¢€â¢€â¢€â£¾â£¿â£Ÿâ¡·â£¯â¡¿â¢ƒâ£¼â£¿â£¿â£¿â ‡â£¼â¡Ÿâ£¡â£¿â£¿â£¿â¢€â¡¿
///â£¿â£¿â£¿â£¿â£¿â£·â£®â£¿â£¿â£¿â¡Œâ â¢¤â£¤â£¤â£¤â£¬â£­â£´â£¶â£¶â£¶â£†â ˆâ¢»â£¿â£¿â£†â¢»â£¿â£¿â£¿â£¿â£¿â£¿â£·â£¶â£¤â£Œâ£‰â¡˜â ›â »â ¶â£¿â£¿â£¿â£¿â¡Ÿâ£°â£«â£´â£¿â£¿â£¿â£¿â „â£·