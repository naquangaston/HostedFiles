// ==UserScript==
// @name         AutoStuff diep
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  [dark theme][auto build][music player][works with other mods][FPS counter]
// @author       You
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant GM_addStyle
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_obf.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/ResourceLoader_.js
// @require https://cdn.jsdelivr.net/gh/naquangaston/HostedFiles@master/JS_Formatter_.js
// @require http://code.createjs.com/easeljs-0.5.0.min.js
// @run-at document-start
// ==/UserScript==
GM_deleteValue('Settings')
Settings = GM_getValue("Settings") || {};
letFill=true
infothingy={}
inf={}
var setting=function(){
    const _z = [
        ["\"on\"", "\"on\""],
        []
    ]
    const _K = ["\u0062\u0072", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0066\u0072\u0065\u0065\u007a\u0065", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u006e\u0061\u006d\u0065", "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0061\u0070\u0070\u0065\u006e\u0064", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0069\u0064", "\u006c\u0065\u006e\u0067\u0074\u0068"];
    class element {
        static get br() {
            return new element(_K[0x0000])
        }
        constructor(name, obj) {
            this[_K[0x000F]] = (function() {
                for (let _P in arguments[0x0001]) {
                    arguments[0x0000][_K[0x000B]](_P, arguments[0x0001][_P])
                }
                return arguments[0x0000]
            })(document[_K[0x0005]](arguments[0x0000]), arguments[0x0001])
        }
        style(obj) {
            for (let __ in obj) {
                this[_K[0x000A]].style[__] = obj[__]
            }
            return this
        }
        append(target) {
            this[_K[0x0010]].append(target[_K[0x000F]] || target);
            return this
        }
        appendTo(target) {
            (target[_K[0x000C]] || target)[_K[0x0009]](this[_K[0x000D]]);
            return this
        }
        on(event, a) {
            this[_K[0x000F]][_z[0x0000][0] + _z[0x0000][1] + event + String()] = a;
            return this
        }
        set(prop, value) {
            this.element[prop] = value;
            return this
        }
        remove() {
            this.element.remove();
            return this
        }
        get() {
            return this.element[arguments[0x0000]]
        }
        get children() {
            return new(class $ {
                constructor(arr) {
                    for (var i = 0x0000; i < arr[_K[0x0012]]; i += 0x0001) {
                        this[i] = arr[i]
                    }
                    Object[_K[0x000E]](this, _K[0x0001], {
                        get: function() {
                            return arr[_K[0x0012]]
                        },
                    })
                    Object[_K[0x0002]](this)
                }
                item(i) {
                    return this[i] != null ? this[i] : null
                }
                namedItem(name) {
                    for (var i = 0x0000; i < this[_K[0x0001]]; i += 0x0001) {
                        if (this[i][_K[0x0011]] === name || this[i][_K[0x0004]] === name) {
                            return this[i]
                        }
                    }
                    return null
                }
                get toArray() {
                    return [...this]
                }
            })([...this.element.children])
        }
    }
    return class setting {
        constructor({
            type,
            default_,
            name,
            command
        }) {
            default_ = Settings[name]|| default_
            var type_ = ""
            switch (type) {
                case 'toggle':
                    type_ = "checkbox";
                    break;
                case "color":
                    type_ = "color";
                    break;
            }
            var label = (new element("label")).set('for', name).set('innerText', name + ': ')
            var input_ = new element("input", {
                type: type_,
                id: name,
                name: command
            }).set('onchange', function(e) {
                var value = e.target.value
                Settings[name] = {
                    value
                }
                execute(`${command} ${value}`)
            })
            if (default_) {
                if(type_=="checkbox")input_.set('checked',default_);
                input_.set('value', default_)
            }
            this.input = input_;
            this.label = label;
        }
    }
}()

var brun=false;_upgrade='';keysDown={}
isRightMB=false;
fighterMode=false;
;(function(){
    class CustomLogging {
        /**
     *
     * @param {String} title Title of the custom log
     */
        constructor(title) {
            this.title = {
                body: title || "---",
                color: "darkgrey",
                size: "1rem"
            };

            this.body = {
                color: "#008f68",
                size: "1rem"
            };
        }
        setTitleBody(title) {
            this.title.body = title
        }

        setTitleStyle({ color, size }) {
            if (color !== undefined) this.title.color = color;
            if (size !== undefined) this.title.size = size;
        }

        setBodyStyle({ color, size }) {
            if (color !== undefined) this.body.color = color;
            if (size !== undefined) this.body.size = size;
        }
        /**
     *
     * @param {String} body the text body of the log
     */
        log(body = "") {
            // the second line is now the body because the first references the content after the first %c for the title
            console.log(
                `%c${this.title.body} | %c${body}`,
                `color: ${this.title.color}; font-weight: bold; font-size: ${this.title.size
                };`,
                `color: ${this.body.color}; font-weight: bold; font-size: ${this.body.size
                }; text-shadow: 0 0 5px rgba(0,0,0,0.2);`
            );
        }
    }
    Object.assign(this || arguments[0], { CustomLog: CustomLogging})})(globalRoot)
fireing=false;
function Fire_(v){
    fireing!=v&&(input.keyDown(69),input.keyUp(69))
    fireing=v
}
Fire=Fire_
var Fire=Fire;
!function(){const _0=[];const _Z=['\u006c\u0065\u006e\u0067\u0074\u0068','\u0070\u0072\u006f\u0074\u006f\u0074\u0079\u0070\u0065.\u006d\u0061\u0070\u0041\u0073\u0079\u006e\u0063','\u006c\u0065\u006e\u0067\u0074\u0068','\u0070\u0072\u006f\u0074\u006f\u0074\u0079\u0070\u0065.\u0066\u006f\u0072\u0045\u0061\u0063\u0068\u0041\u0073\u0079\u006e\u0063','\u006c\u0065\u006e\u0067\u0074\u0068','\u006c\u0065\u006e\u0067\u0074\u0068'];window['\u0047\u004d\u005f\u0067\u0065\u0074\u0056\u0061\u006c\u0075\u0065']=GM_getValue,window['\u0047\u004d\u005f\u0073\u0065\u0074\u0056\u0061\u006c\u0075\u0065']=GM_setValue,window['\u0047\u004d\u005f\u0069\u006e\u0066\u006f']= GM_info,Array[_Z[0x0003]]= async function(e = function(){}){for (let a = 0x0000; a < this[_Z[0x0000]]; a++)await e(this[a], a, this[_Z[0x0000]]);return null},Array[_Z[0x0001]]= async function(e = function(){}){for (let a = 0x0000; a < this[_Z[0x0005]]; a++)this[a]= await e(this[a], a, this[_Z[0x0000]]);return this}}();

var stats={7:-.4}
function rotatePoint_(point, center, angle){
    angle = (angle ) * (Math.PI/180); // Convert to radians
    var rotatedX = Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y-center.y) + center.x;
    var rotatedY = Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y;
    return new createjs.Point(rotatedX,rotatedY);
}
rotatePoint=rotatePoint_
var rotatePoint=rotatePoint
;(async function(noads=false) {
    upgrade=''
    //'use strict';
    function getTag(str) {
        return function(tagsReg, metaTag, getT) {
            console.log({tagsReg,metaTag,getT})
            return (function(info, str) {
                console.log({info,str})
                return str.forEach(tag => {
                    !info[tag[1]] && (info[tag[1]] = []), info[tag[1]].push(tag[2])
                }), info
            })({}, (console.log({m:str.match(/\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+/gi)}),str.match(metaTag)[0].match(tagsReg).map(e => e.match(getT))))
        }(/(\/{2}[ ]+@(\w+)[ ]+([^\n]+))/gi, /\/{2} ={2}UserScript={2}\n(\/{2}[ ]+@([\w\-_$]+)[ ]+([^\n]+)[\n ]+)+\/{2} ={2}\/UserScript={2}/gi, /\/{2}[ ]+@(\w+)[ ]+([^\n]+)/)
    }
    async function loadGfork(url){
        var id=(url.match(/\d+/gi)||[])[0]
        if(!id.length) throw "Invalid script id/url"
        var toEval=await LoadScr(`https://greasyfork.org/en/scripts/${id}.js`)
        var info=getTag(toEval)
        }
    //loadGfork('https://greasyfork.org/en/scripts/458131-diepbox-by-cazka-edit-by-gaston-1799')
    async function LoadScr(url,update){
        let l=new URL(url)
        var lc=GM_getValue('scrs')||{}
        var parse=lc.scrs&&lc.srcr[l.host]&&(lc)||{}
        var scrH=l.host;
        var p=l.pathname.split('/')
        var t=p[p.length-1]
        //fetch(url).then(e=>e.text()).then(code=>{})
        var e=parse[t]
        if(!e||update){
            e={};e[p.filter(e=>e.length).join(' ')]={url,code:await fetch(url).then(e=>e.text())}
        }
        parse[t]=e;
        GM_setValue('scrs',parse)
        return e
    }
    //Socket
    realSend = window.WebSocket.prototype.send;
    ;(function () {
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

    })();
    document.msgpack = msgpack;
    function n(){
        this.buffer = new Uint8Array([0]);
        this.buffer.__proto__ = new Uint8Array;
        this.type = 0;
    }
    const URLRegex = /^wss?:\/\/[a-z0-9]{4}\.s\.m28n\.net\/$/g; // wss://XXXX.s.m28n.net
    function decodeUTF8(bytes) {
        // From: https://gist.github.com/pascaldekloe/62546103a1576803dade9269ccf76330
        var s = '';
        var i = 0;
        while (i < bytes.length) {
            var c = bytes[i++];
            if (c > 127) {
                if (c > 191 && c < 224) {
                    if (i >= bytes.length) throw 'UTF-8 decode: incomplete 2-byte sequence';
                    c = (c & 31) << 6 | bytes[i] & 63;
                } else if (c > 223 && c < 240) {
                    if (i + 1 >= bytes.length) throw 'UTF-8 decode: incomplete 3-byte sequence';
                    c = (c & 15) << 12 | (bytes[i] & 63) << 6 | bytes[++i] & 63;
                } else if (c > 239 && c < 248) {
                    if (i+2 >= bytes.length) throw 'UTF-8 decode: incomplete 4-byte sequence';
                    c = (c & 7) << 18 | (bytes[i] & 63) << 12 | (bytes[++i] & 63) << 6 | bytes[++i] & 63;
                } else throw 'UTF-8 decode: unknown multibyte start 0x' + c.toString(16) + ' at index ' + (i - 1);
                ++i;
            }

            if (c <= 0xffff) s += String.fromCharCode(c);
            else if (c <= 0x10ffff) {
                c -= 0x10000;
                s += String.fromCharCode(c >> 10 | 0xd800)
                s += String.fromCharCode(c & 0x3FF | 0xdc00)
            } else throw 'UTF-8 decode: code point 0x' + c.toString(16) + ' exceeds UTF-16 reach';
        }
        return s;
    }
    function ugrAde(){
        var info={}
        ;[...`Level 15

Sniper: Y = 12

Level 30

Assassin: Y = 30

Overseer: Y = 22

Hunter: Y = 38

Trapper: Y = 62

Level 45

Ranger: Y = 44

Stalker: Y = 42

Overlord: Y = 24

Necromancer: Y = 34

Manager: Y = 52

X Hunter: Y = 56

Predator: Y = 60

Gunner Trapper: Y = 64

Overtrapper: Y = 66

Mega Trapper: Y = 68

Tri-Trapper: Y = 70

Twin Class
Level 15

Twin: Y = 2

Level 30

Quad Tank: Y = 8

Twin Flank: Y = 26

Triple Shot: Y = 6

Level 45

Triplet: Y = 4

Penta Shot: Y = 28

Triple Twin: Y = 36

Octo Tank: Y = 10

Machine Gun Class
Level 15

Machine Gun: Y = 14

Level 30

Destroyer: Y = 20

Gunner: Y = 40

Level 45

Hybrid: Y = 50

Sprayer: Y = 58

Auto Gunner Y = 78

Flank Guard Class
Level 15

Flank Guard: Y = 16

Level 30

Tri-Angle: Y = 18

Quad Tank: Y = 8

Twin Flank: Y = 26

Auto 3: Y = 82

Level 45

Triple Twin: Y = 36

Octo Tank: Y = 10

Booster: Y = 46

Fighter: Y = 48

Auto 5: Y = 80

Smasher Class
Level 30

Smasher Y = 72

Level 45

Mega Smasher Y = 74

Landmine Y = 76`.match(/[\w+ =\d:]+ Y [\w+ =\d]+/gi)].map(e=>[e.match(/([\w ]+):? Y = (\d+)/i)[1],e.match(/([\w ]+):? Y = (\d+)/i)[2]]).forEach(e=>{info[e[0]]=e[1]})
    }
    WebSocket.prototype.oldSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(m){

        if (typeof ws=='undefined'){
            document.ws = this;
            console.log('Mspack',{m})
            ws = this;
            //socketFound(this);
        }
        this.oldSend(m);
    };
    function socketFound(socket){
        socket.addEventListener('message', function(message){
            handleMessage(message);
        });
    }
    function handleMessage(m){
        let temp = decodeUTF8(new Uint8Array(m.data));
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
        //console.log({item,data})
    }
    function doNewSend(sender){
        try{ ws.send(new Uint8Array(Array.from(msgpack5.encode(sender))));}catch(err){};
    }
    window.doNewSend = doNewSend
    console.log('Info:',GM_info)
    var setValue=GM_setValue
    var getValue=GM_getValue
    function RemoveAds(){return [...document.getElementsByTagName('iframe')].forEach(frame=>frame.remove())}
    function Mysrc() {
        var mhieght = 100
        function isLetter(t) { return !!(t || this).match(/[A-Z_$a-z]/gi) } function isOpen(t) { return !!(t || this).match(/[\(\{\[]/gi) } function isClose(t) { return !!(t || this).match(/[\]\}\)]/gi) } function isNumber(t) { return !!(t || this).match(/[0-9]/gi) } function isLine(t) { return !!(t || this).match(/[\r\n]/gi) } function isLetter(t) { return !!(t || this).match(/[A-Z_$a-z]/gi) } function isBlank(t) { return !!(t || this).match(/ /gi) } function isSyn(t) { return !!(t || this).match(/[\+\*=%&\-]/gi) } function isStr(t) { return !!(t || this).match(/[`'"]/gi) } (function () { function t(t, n) { var e = 0, i = "", o = [typeof String(), "function", "function"]; if (!([o.indexOf(typeof this), o.indexOf(typeof t)].filter(t => !(t < 0)).length ? 1 : 0)) throw console.log([o.indexOf(typeof this), o.indexOf(typeof t)]), "Cant format given code"; var r = (Array.isArray(t || this) ? (t || this).join(n) : (o.indexOf(typeof t) < 0 ? this : t).toString().split("  ").join("").split("{").join("{\n").split("}").join("\n}").split("\n\n").join("\n")).split(""); r.length; for (let t = 0; t < r.length; t++) { const n = r[t], o = r[t + 1], c = r[t - 1], s = Number((t / r.length * 100).toFixed(2)); "\\" != c && ("{" == n && (e++, console.log(s, "%", e)), "}" == n && (e--, console.log(s, "%", e))), e < 0 && (e = 0), "\n" == n ? (console.log(s, "%", e), i += "}" == o ? n + " ".repeat(e ? e - 1 : e) : n + " ".repeat(e)) : i += n } return i } function n(t) { return (t || this).constructor.name.includes("AsyncFunction") } var e = function () { const t = arguments; return function (n) { return (n || this)[t[2][0]][t[2][1]][t[2][2]](t[2][3]) } }([], [""], ["constructor", "name", "includes", "AsyncFunction"], [""], [], {}); function i(t, n = null, e = "") { return this.split(...function () { return arguments[0] ? [t, n] : [t] }(n)).join(e) } function o() { return !this.toString().includes(".") } function r(t = []) { return (t.length ? t : this)[Math.floor(Math.random() * (t.length ? t : this).length)] } function c(t = []) { for (let n = (t.length ? t : this).length - 1; n > 0; n--) { const e = Math.floor(Math.random() * (n + 1)), i = (t.length ? t : this)[n]; (t.length ? t : this)[n] = (t.length ? t : this)[e], (t.length ? t : this)[e] = i } return t.length ? t : this } Function.prototype.formate = t, Function.prototype.isAsync = n, Function.prototype.isAsync = e, Number.prototype.isWhole = o, Array.prototype.random = r, Array.prototype.shuffle = c, String.prototype.split_replace = i, Object.assign(Object.prototype, { isNumber: isNumber, isLetter: isLetter, isOpen: isOpen, isClose: isClose, isBlank: isBlank, isLine: isLine, getType: function (t) { return null == typeof (t || this) ? "undefined" : (t || this).constructor.name }, type_: function () { const t = arguments[0] || this; var n = [isLetter, isNumber, isOpen, isClose, isBlank]; return n.filter(n => !!n(t)).map(t => n.map(t => t.name).indexOf(t.name))[0] } }), Object.assign(this, { formate: t, isAsync: n, isWhole: o, random: r, shuffle: c, split_replace: i, getError: function (t, ...n) { try { t(...n) } catch (t) { return t } } }), Object.assign(this, { debug: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.debug("[" + n + "]", ...t) }, error: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.error("[" + n + "]", ...t) }, info: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.info("[" + n + "]", ...t) }, log: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.log("[" + n + "]", ...t) }, warn: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.warn("[" + n + "]", ...t) }, dir: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.dir("[" + n + "]", ...t) }, dirxml: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.dirxml("[" + n + "]", ...t) }, table: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.table("[" + n + "]", ...t) }, trace: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.trace("[" + n + "]", ...t) }, group: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.group("[" + n + "]", ...t) }, groupCollapsed: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.groupCollapsed("[" + n + "]", ...t) }, groupEnd: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.groupEnd("[" + n + "]", ...t) }, clear: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.clear("[" + n + "]", ...t) }, count: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.count("[" + n + "]", ...t) }, countReset: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.countReset("[" + n + "]", ...t) }, assert: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.assert("[" + n + "]", ...t) }, profile: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.profile("[" + n + "]", ...t) }, profileEnd: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.profileEnd("[" + n + "]", ...t) }, time: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.time("[" + n + "]", ...t) }, timeLog: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.timeLog("[" + n + "]", ...t) }, timeEnd: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.timeEnd("[" + n + "]", ...t) }, timeStamp: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.timeStamp("[" + n + "]", ...t) }, context: function (...t) { var n = Date().match(/[\d:]+/gi)[2]; console.context("[" + n + "]", ...t) } }), console.log("exteral.js is loaded") }).apply("undefined" == typeof exports ? this.Device ? exports : "undefined" == typeof window ? this : globalThis || self || window || top : this);
        class MyHTMLCollection {
            constructor(arr) {
                for (var i = 0; i < arr.length; i += 1) {
                    this[i] = arr[i];
                }
                // length is readonly
                Object.defineProperty(this, 'length', {
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
        }

        /**
 *
 * @param {string} label the value of the attr
 * @param {string} item the attr name to look for in the element leave blank to guess
 * @param {HTMLElement} doc the base element to start searching
 * @returns {HTMLElement|HTMLCollection|false}
 */
        function abc(label, item = 'aria-label', doc = document.body) {
            var res = [];
            function part2(e) {
                var found = false
                if (!item) {
                    [...(e.attributes || [])].map(e => {
                        const { name, value } = e;
                        return { name, value }
                    }).filter(e => e.value == label).length ? (res.push(e), found = 1) : null
                } else if (e.getAttribute(item) == label) {
                    res.push(e); found = 1;
                }
                if (e.children.length && !found) {
                    e = e.children;
                    e.forEach = [].forEach;
                    e.forEach(e2 => {
                        part2(e2);
                    })
                }
            };
            part2(doc);
            return res.length == 1 ? res[0] : new MyHTMLCollection(res) || false;
        }
        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function checkCookie() {
            let user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 365);
                }
            }
        }
        class Cookie {
            /**
   *
   * @param {string} cname name of cookie
   * @param {string} cvalue Value of the cookie
   * @param {string|number} exdays days untill cookie expires
   */
            SetCookie(cname, cvalue, exdays) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            /**
   *
   * @param {string} cname name of cookie to get
   * @returns {string}
   */
            GetCookie(cname) {
                let name = cname + "=";
                let ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            /**
   *
   * @param {string} cname the name of the cookie to check
   * @returns {boolean} true/false if the cookie already exist
   */
            exist(cname) { return !!(this.getCookie(cname) != "" ? 1 : 0) }
        }
        const chooseFile = document.getElementById("chooseFile");
        const \u0067\u0065\u0074\u004d\u0065\u0074\u0061\u0064\u0061\u0074\u0061\u0046\u006f\u0072\u0046\u0069\u006c\u0065\u004c\u0069\u0073\u0074 = (\u0066\u0069\u006c\u0065\u004c\u0069\u0073\u0074) => {
            var \u006c\u0069\u0073\u0074 = []
            for (const \u0066\u0069\u006c\u0065 of \u0066\u0069\u006c\u0065\u004c\u0069\u0073\u0074) {
                // Not \u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064 in \u0053\u0061\u0066\u0061\u0072\u0069 for iOS.
                const \u006e\u0061\u006d\u0065 = \u0066\u0069\u006c\u0065.\u006e\u0061\u006d\u0065 ? \u0066\u0069\u006c\u0065.\u006e\u0061\u006d\u0065 : 'NOT \u0053\u0055\u0050\u0050\u004f\u0052\u0054\u0045\u0044';
                // Not \u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064 in \u0046\u0069\u0072\u0065\u0066\u006f\u0078 for \u0041\u006e\u0064\u0072\u006f\u0069\u0064 or \u004f\u0070\u0065\u0072\u0061 for \u0041\u006e\u0064\u0072\u006f\u0069\u0064.
                const \u0074\u0079\u0070\u0065 = \u0066\u0069\u006c\u0065.\u0074\u0079\u0070\u0065 ? \u0066\u0069\u006c\u0065.\u0074\u0079\u0070\u0065 : 'NOT \u0053\u0055\u0050\u0050\u004f\u0052\u0054\u0045\u0044';
                // \u0055\u006e\u006b\u006e\u006f\u0077\u006e \u0063\u0072\u006f\u0073\u0073-\u0062\u0072\u006f\u0077\u0073\u0065\u0072 \u0073\u0075\u0070\u0070\u006f\u0072\u0074.
                const \u0073\u0069\u007a\u0065 = \u0066\u0069\u006c\u0065.\u0073\u0069\u007a\u0065 ? \u0066\u0069\u006c\u0065.\u0073\u0069\u007a\u0065 : 'NOT \u0053\u0055\u0050\u0050\u004f\u0052\u0054\u0045\u0044';
                \u006c\u0069\u0073\u0074.\u0070\u0075\u0073\u0068({ \u0066\u0069\u006c\u0065, \u006e\u0061\u006d\u0065, \u0074\u0079\u0070\u0065, \u0073\u0069\u007a\u0065 })
            }
            return \u006c\u0069\u0073\u0074;
        }
        /**
 * used the same at the foreach method but is async
 * @param {Function} f
 * @returns
 */
        Array.prototype.forEachAsync = async function forEachAsync(f = function () { }) { for (let i = 0; i < this.length; i++) { await f(this[i], i, this.length) } return null; }
        /**
 * same as map method but async
 * @param {Function} f
 * @returns
 */
        Array.prototype.mapAsync = async function mapAsync(f = function () { }) { var _this = this; for (let i = 0; i < _this.length; i++) { _this[i] = await f(_this[i], i, _this.length) } return _this }
        async function GetFiles(input, cb, filter = function () { return (true) }) {
            class FileArray {
                constructor() {
                    this.files = [];
                }
                push(...newlet) { this.files.push(...newlet) }
            }
            var collection = new FileArray();
            const files = getMetadataForFileList([...((input ? input.files ? input.files : 0 : 0) || chooseFile.files)]);
            collection.files = await files.filter(filter).mapAsync(async (b, index, total) => {
                const { file, name, type, size } = b; console.log('Unloading:' + name, '\nFiles left', total - index)
                const fileReader = new FileReader();
                var d = await new Promise((a) => {
                    var span = document.createElement('span'); span.className = 'file'; span.innerHTML = name; span.id = name;
                    var span_ = document.createElement('span'); span_.className = 'progress'; span_.innerHTML = '0%'; span_.id = name + '%'
                    function handleEvent(event) {
                        var textContent = [name, `${event.type}:`, ((event.loaded / event.total) * 100).toFixed(2) + '%'];
                        document.getElementById('TextAl').innerHTML = textContent[0]; document.getElementById("myBar").style.width = textContent[2];
                        console.log(...textContent);
                        if (event.type == 'error') {
                            console.error(event.target.error);
                        }
                        if (event.type === "load") {
                            var data = fileReader.result;
                            //Files_.append(document.createElement('br'))
                            a(data)
                        }
                    };
                    function \u0061\u0064\u0064\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072\u0073(\u0072\u0065\u0061\u0064\u0065\u0072) {
                        \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u006c\u006f\u0061\u0064\u0073\u0074\u0061\u0072\u0074', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074); \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u006c\u006f\u0061\u0064', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074); \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u006c\u006f\u0061\u0064\u0065\u006e\u0064', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074); \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074); \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u0065\u0072\u0072\u006f\u0072', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074); \u0072\u0065\u0061\u0064\u0065\u0072.\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072('\u0061\u0062\u006f\u0072\u0074', \u0068\u0061\u006e\u0064\u006c\u0065\u0045\u0076\u0065\u006e\u0074);
                        }
                        addListeners(fileReader); fileReader.readAsDataURL(file);
                    })
                    var _ = d.split(',')
                    var sp = d.match(/(data):([-\w]+\/[-\w]+);(\w+)/); dt = _
                    if (type == "NOT SUPPORTED") {
                        var ext = name.split('.').pop().split('(')[0]; var err = new Error(type + ' file extentsion:\n"' + ext + '" is not a supported file extentsion'); err.name = type; console.warn(err);
                    }
                    return { file, name, type, size, data: dt, ecode: sp, b }
                });
                if (typeof cb == typeof function () { }) (cb(collection))
                return { files: collection }
            }
                                                                   //Changed the name to better reflect the functionality
                                                                   var index = 0;
                                                                   var Song = document.getElementById('Songs_');
            const audioObj = new Audio();
            var mySongs = [];
            audioObj.volume = .3
            var space = '&nbsp;'
            function play_all() {
                var obj = mySongs[index]
                audioObj.src = obj.sound;
                document.title = obj.name;
                function con() {
                    obj = mySongs[index]
                    audioObj.src = obj.sound;
                    document.title = obj.name;
                }
                audioObj.onended = function () {
                    audioObj.src = null;
                    index++;
                    con();
                }
            }
            var methods = [
                ['Shuffle', () => (mySongs.shuffle(), audioObj.pause(), play_all())],
                ["play all", play_all],
                ["Skip", () => { audioObj.currentTime = audioObj.duration - 0.1 }],
                ["Previous", () => { index -= 2; audioObj.currentTime = audioObj.duration - 0.1 }],
                ["play", () => audioObj.play()],
                ["pause", () => audioObj.pause()],
                ["loop", function (target) { (audioObj.loop = !audioObj.loop); target.innerText = 'loop:' + (audioObj.loop ? 'on' : 'off') }],
                ["volume", () => { audioObj.volume = prompt("Enter volume", "50") / 100 }]
            ];
            methods.forEach(e => {
                var f = (typeof e[1] == 'function' ? e[1] : function () { alert(`The "${e[0]}" button is W.I.P`) });
                var button = document.createElement('button')
                button.innerText = e[0]; button.onclick = f
                Song.append(button)
                console.log(button)
            })
            audioObj.oncanplaythrough = (e => {
                audioObj.play()
                let audio = audioObj
                var context = new AudioContext();
                var src = context.createMediaElementSource(audio);
                var analyser = context.createAnalyser();

                var canvas = document.getElementById("canvas");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                var ctx = canvas.getContext("2d");

                src.connect(analyser);
                analyser.connect(context.destination);

                analyser.fftSize = 256;

                var bufferLength = analyser.frequencyBinCount;
                console.log(bufferLength);

                var dataArray = new Uint8Array(bufferLength);

                var WIDTH = canvas.width;
                var HEIGHT = canvas.height;

                var barWidth = (WIDTH / bufferLength) * 2.5;
                var barHeight;
                var x = 0;

                function renderFrame() {
                    requestAnimationFrame(renderFrame);

                    x = 0;

                    analyser.getByteFrequencyData(dataArray);

                    ctx.fillStyle = "#000";
                    ctx.fillRect(0, 0, WIDTH, HEIGHT);

                    for (var i = 0; i < bufferLength; i++) {
                        barHeight = dataArray[i];

                        var r = (barHeight + (25 * (i / bufferLength))) - mhieght;
                        var g = 250 * (i / bufferLength);
                        var b = 50;

                        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                        x += barWidth + 1;
                    }
                }

                audio.play();
                renderFrame()
            });
            chooseFile.addEventListener('change', _e => {
                GetFiles(false, false, file => file.type.includes('audio')).then(_ => {
                    _.files.files.forEach(e => {
                        var a = document.createElement('span'); a.innerHTML = e.name; a.href = ""; a.onclick = function (_event) { audioObj.pause(); audioObj.src = e.ecode.input; }
                        //Songs_2.append(document.createElement('br')); Song.append(a)
                        mySongs.push({ name: e.name, sound: e.ecode.input })
                    })
                }, console.error)
            });
        }
        var upgrading = false,loaded=false,AutoUpgrad = true,DidiU,noads=false,did_=false,loggedkk = false,st=GM_info,playerAlive =true,wasalive = true;down={};
        AutoSpawn = true
        window.window=window
        function ad(listener,f,autoDelete=false,cap){
            var _=addEventListener(listener,(...__)=>{f(...__);if(autoDelete)removeEventListener(_)},!!cap)
            return _
        }
        function add_Property(obj,writable=false){if(this.constructor.name!=globalThis.constructor.name){const {name}=obj;if(!name)throw "obj name must be defined";else return Object.defineProperty(this, name,{value: obj,writable})}else{throw "This function ment to be used as a global method not an regular funcion"}}
        function Define_Property(name,obj){if(this.constructor.name!=globalThis.constructor.name)return Object.defineProperty(this, name, obj);else{throw "This function ment to be used as a global method not an regular funcion"}}
        function apply(f,_this,...args){return f.apply(_this,args)}
        class VideoPlayer {
            /**
     *
     * @param {string} id video id
     * @param {string} list playlist id
     * @param {number} index set playlist index
     * @param {number} time Time in ms that the video startsz are
     * @param {HTMLElement} node what is to apend to
     */
            constructor(node) {
                var iframe=document.createElement("iframe")
                /**
     * @description Used to generate video from youtube url not embed
     * @param {string} url
     */
                function update_url(stuff = {}) {const array = Object.keys(stuff).map(e => { e, stuff[e] });console.log(stuff);var search = [];for (let item in stuff) {if (['v', 'id'].includes(item)) { this.id = stuff[item] } else { search.push(`${item}=${stuff[item]}`) }}this.url = `https://www.youtube.com/embed/${this.id}?${search.join('&')}&autoplay=1&controls=1#ignore`;this.iframe.src = this.url}
                function Gen_f_url(url) {var info = {};var _ = new URL(url);url.split('/').pop().split('?').pop().split('&').forEach(element => {var __ = element.split('=');info[__[0]] = [__[1]][0]});console.log(info);this.update_url(info)}
                apply(Define_Property,this,'iframe',{get:function(){return iframe}})
                this.Define_Property('iframe',{get:function(){return iframe}})
                apply(add_Property,this,Gen_f_url)
                apply(add_Property,this,update_url)
                //this.Gen_f_url=Gen_f_url;
                this.iframe.id = "ytplayer"
                this.iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                this.iframe.type = "text/html"
                this.iframe.src = this.url;
                if (node && node.nodeType != 9) {
                    node.prepend(this.iframe)
                }
            }
            prepend(node) {
                if (node && node.nodeType != 9) {
                    node.prepend(this.iframe)
                } else throw "Invalid node type"
            }
            append(node) {
                if (node && node.nodeType != 9) {
                    node.append(this.iframe)
                } else throw "Invalid node type"
            }
            set Index(index) {
                this.index = index || 0
            }
            get Index() {
                return this.index
            }
            set Video_id(id) {
                this.id = id || ""
            }
            get Video_id() {
                return this.id
            }
            set Playlist(playlist) {
                this.playlist = playlist
            }
            get Playlist() {
                return this.playlist
            }
        }
        const {win1,win2,win3,win4,hh,jj,dd}=[null,null,null,null,function(item,val){localStorage.setItem(item,val)},function(item){return localStorage.getItem(item)},function (names) {let unique = {};names.forEach(function(i) {if(!unique[i]) {unique[i] = true;}});return Object.keys(unique)}]
        function sleep(ms){return new Promise((r,j)=>{setTimeout(r,ms)})}
        function checkWin(myWindow=this.win1) {return !myWindow?false:myWindow.closed?false:true}
        function startwin(win,name=null,reopen,c){
            var win_
            name==null&&(name=win);
            console.log('attemp the close',win)
            try{if(reopen)window[win].close()}catch
                (err){window[win]=null;console.warn('attemp the close',win,'Fail')}
            try{if(!checkWin(window[win]))(window[win]=win_=open(c,'PROFILES',`width=256,height=305`),console.log('Making',win,'in',name),console.log(window[win])
                                           ,console.log('writing defalt styles','to',win,name),
                                           win_.document.write(`
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        .stat {
            height: 100%;
            width: 10%;
						transition:width 2s
        }

        .stats {
            height: 10px;
            width: 50%;
        }

        body {
            color: white;
            -ms-overflow-style: none;
            /* IE and Edge */
            scrollbar-width: none;
            /* Firefox */
            background-color: rgb(54, 57, 63);
            overflow-x: hidden;
        }

        img,
        button,
        .menu {
            border: 2px solid red;
            border-radius: 8px;
            border-style: solid;
            border-width: medium;
        }

        button {
            color: rgb(27, 51, 99)
        }

        input {
            /*border-width: 1px;*/
            border: 2px dashed rgb(87, 167, 12);
            color: white;
            background: rgba(0, 0, 0, 0)
        }

        .name {
            color: red
        }

        .Status {
            color: blue
        }

        .server_nick {
            color: white
        }

        body::-webkit-scrollbar {
            display: none;
        }

        .hidden {
            display: none;
        }

        .dropdown {
            display: inline-block;
            position: relative;
        }

        #Songs_2 {
            max-height: 444px;
        }

        #thefile {
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 100;
        }

        #canvas {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        audio {
            position: fixed;
            left: 10px;
            bottom: 10px;
            width: calc(100% - 20px);
        }

        .center {
            width: 100%;
            color: red;
            align-items: center;
        }

        input[type=button] {
            border: 2px solid rgb(255, 255, 255);
            color: white;
        }

        * {
            box-sizing: border-box;
        }

        #myInput {
            background-image: url('/css/searchicon.png');
            background-position: 10px 12px;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
            border: 1px solid #ddd;
            margin-bottom: 12px;
        }

        #myUL {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        #myUL li div {
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li a {
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li div {
            cursor: pointer;
            border: 1px solid #ddd;
            margin-top: -1px;
            /* Prevent double borders */
            background-color: rgba(238, 238, 238, 0.192);
            ;
            padding: 12px;
            text-decoration: none;
            font-size: 18px;
            color: black;
            display: block
        }

        #myUL li a:hover:not(.header) {
            background-color: rgb(238, 238, 238);
        }
        #myUL li div div input[type=button]:hover:not(.header) {
            background-color: rgb(238, 238, 238);
            color:black;
        }
    </style>
</head>

<body>
    <a> </a>
    <h2>play custom songs</h2>
    <input type="file" multiple id="chooseFile"><br><br>
    <div id="myProgress">
        <div id="myBar"><span id="TextAl"></span></div>
    </div>
    <br>
    <div id="Files_"></div>
    <div id="Songs_"></div>
    <div id="Songs_2"></div>
    <canvas id="canvas"></canvas>
    <hr>
    <script>    </script>
    <div class="menu" id="menu">
        <h2>Menu-</h2>
    </div>
    <br>
    <hr><br>
    <div class="menu" id="Builds_">
        <style>
            .regen {
                background: #EEB690;
            }

            .health {
                background: #EC6CF0;
            }

            .body {
                background: #9A6CF0;
            }

            .bspeed {
                background: #6C96F0;
            }

            .pen {
                background: #F0D96C;
            }

            .dmg {
                background: #F06C6C;
            }

            .reloads {
                background: rgb(152, 240, 108)
            }

            .speed {
                background: #6CF0EC
            }
        </style>
        <h2>Builds-</h2>
        <div id="stats_show">
            <div><span class="statname">Regen:<span class='regen_'></span></span>
                <div class="stats">
                    <div class="stat regen"></div>
                </div>
            </div>
            <div><span class="statname">Health:<span class='health_'></span></span>
                <div class="stats">
                    <div class="stat health"></div>
                </div>
            </div>
            <div><span class="statname">Body damage:<span class='body_'></span></span>
                <div class="stats">
                    <div class="stat body"></div>
                </div>
            </div>
            <div><span class="statname">Butllet speed:<span class='bspeed_'></span></span>
                <div class="stats">
                    <div class="stat bspeed"></div>
                </div>
            </div>
            <div><span class="statname">Bullet penatration:<span class='pen_'></span></span>
                <div class="stats">
                    <div class="stat pen"></div>
                </div>
            </div>
            <div><span class="statname">Bullet damage:<span class='dmg_'></span></span>
                <div class="stats">
                    <div class="stat dmg"></div>
                </div>
            </div>
            <div><span class="statname">Reload speed:<span class='reloads_'></span></span>
                <div class="stats">
                    <div class="stat reloads"></div>
                </div>
            </div>
						<div><span class="statname">Movement speed:<span class='speed_'></span></span>
                <div class="stats">
                    <div class="stat speed"></div>
                </div>
            </div>
        </div>
        <hr>
        <input id="search_" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"><br><br>
        <ul id="myUL">
        </ul>
    </div>
    <script>

    function myFunction() {
    //console.log(this); return
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search_");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        try{
            a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        }catch(err){console.log(a)}
    }
};${Mysrc.toString()}
    </script>
</body>

</html>
`));
                else (globalRoot[name]=open('','PROFILES',`width=256,height=305`),globalRoot[name].window.document.body.innerHTML='',
                      globalRoot[name].window.document.head.innerHTML='')}catch(err){}
            globalRoot[name]=globalRoot[win];
            console.log('complete win')
            return win_
        }
        var _myWin=startwin("myWin_")
        globalRoot._myWin=_myWin
        addEventListener("beforeunload",function(){_myWin.close()})
        globalRoot.startwin_=startwin
        globalRoot.checkWin_=checkWin
        class Build {
            buildSet(_build) {
                this.Build = _build
                var count = 0;
                this.BuildPath = "";
                var reg = _build.regen
                var health = _build.health
                var bodydmg = _build.body
                var bspeed = _build.bspeed
                var bpen = _build.pen
                var bdmg = _build.dmg
                var rspeed = _build.reloads
                var speed = _build.speed
                //start with bullet speed dmg and pen reload
                for (let i = 0; i <= 7; i++) {
                    if (i < bdmg&&count<34) { this.BuildPath += "6"; count++ }
                    if (i < bspeed&&count<34) { this.BuildPath += "4"; count++ }
                    if (i < bpen&&count<34) { this.BuildPath += "5"; count++ }
                    if (i < rspeed&&count<34) { this.BuildPath += "7"; count++ }
                }
                for (let i = 0; i <= 7; i++) {
                    if (i < speed&&count<34) { this.BuildPath += "8"; count++ }
                }
                for (let i = 0; i <= 7; i++) {
                    if (i < reg&&count<34) { this.BuildPath += "1"; count++ }
                    if (i < health&&count<34) { this.BuildPath += "2"; count++ }
                    if (i < bodydmg&&count<34) { this.BuildPath += "3"; count++ }

                }
            }
        }
        console.log('Loading builds')
        otherStuff={"toggles":[{"name":"net_predict_movement","bool":"true","for":"Enable clientside prediction for movement"},{"name":"ren_achievements","bool":"true","for":"Render achievements"},{"name":"ren_background","bool":"true","for":"Render background[6]"},{"name":"ren_cache_grid","bool":"true","for":"Cache grid on separate canvas"},{"name":"ren_context_reinitialization","bool":"true","for":"Reinitialize contexts if FPS is too low[7]"},{"name":"ren_debug_collisions","bool":"false","for":"Render collidable debug info[8]"},{"name":"ren_debug_info","bool":"false","for":"Render some debug info on the server stats test"},{"name":"ren_fps","bool":"false","for":"Render FPS"},{"name":"ren_health_bars","bool":"true","for":"Render health bars"},{"name":"ren_names","bool":"true","for":"Render names"},{"name":"ren_pattern_grid","bool":"true","for":"Use canvas createPattern for grid, it's faster but looks slightly worse"},{"name":"ren_raw_health_values","bool":"false","for":"Render raw health bar values"},{"name":"ren_scoreboard","bool":"true","for":"Render scoreboard"},{"name":"ren_scoreboard_names","bool":"true","for":"Render scoreboard names"},{"name":"ren_solid_background","bool":"true","for":"Render background as solid color, without the grid"},{"name":"ren_stats","bool":"true","for":"Render stat upgrades"},{"name":"ren_stroke_soft_color","bool":"true","for":"Renders strokes as a darker shade of fill color"},{"name":"ren_ui","bool":"true","for":"Render UI layer"},{"name":"ren_upgrades","bool":"true","for":"Render class upgrades"},{"name":"ui_prevent_right_click","bool":"true","for":"Prevent right click from triggering context menu"}],"colors":[{"name":"net_replace_color","index":"0","default":"0x555555","for":"Smasher and Dominator Bases"},{"name":"net_replace_color","index":"1","default":"0x999999","for":"Barrels, Spawners, Launchers and Auto Turrets"},{"name":"net_replace_color","index":"2","default":"0x00B1DE","for":"Body (You)"},{"name":"net_replace_color","index":"3","default":"0x00B1DE","for":"Blue Team"},{"name":"net_replace_color","index":"4","default":"0xF14E54","for":"Red Team"},{"name":"net_replace_color","index":"5","default":"0xBE7FF5","for":"Purple Team"},{"name":"net_replace_color","index":"6","default":"0x00F46C","for":"Green Team"},{"name":"net_replace_color","index":"6","default":"0xD68163","for":"Green Team (Making Green Team Brown, like it was formerly)"},{"name":"net_replace_color","index":"7","default":"0x89FF69","for":"Shiny Polygons (Green Square, Green Triangle, Green Pentagon)"},{"name":"net_replace_color","index":"8","default":"0xFFE869","for":"Square"},{"name":"net_replace_color","index":"9","default":"0xFC7677","for":"Triangle"},{"name":"net_replace_color","index":"10","default":"0x768DFC","for":"Pentagon"},{"name":"net_replace_color","index":"11","default":"0xFF77DC","for":"Crashers"},{"name":"net_replace_color","index":"12","default":"0xFFE869","for":"Arena Closers/Neutral Dominators/Defender Ammo"},{"name":"net_replace_color","index":"13","default":"0x44FFA0","for":"Scoreboard"},{"name":"net_replace_color","index":"14","default":"0xBBBBBB","for":"Maze Walls"},{"name":"net_replace_color","index":"15","default":"0xF14E54","for":"Others (FFA)"},{"name":"net_replace_color","index":"16","default":"0xFBC477","for":"Summoned Squares (Necromancer)"},{"name":"net_replace_color","index":"17","default":"0xC0C0C0","for":"Fallen Bosses"},{"name":"ren_background_color","default":"0xCDCDCD","for":"Base color for the background"},{"name":"ren_border_color","default":"0x000000","for":"The area outside the map (overlayed on top of the inside the map color, semi-transparent)"},{"name":"ren_minimap_background_color","default":"0xCDCDCD","for":"Minimap"},{"name":"ren_minimap_border_color","default":"0x555555","for":"Minimap Border"},{"name":"ren_health_fill_color","default":"0x85E37D","for":"Health Bar"},{"name":"ren_health_background_color","default":"0x555555","for":"Health Bar Background"},{"name":"ren_xp_bar_fill_color","default":"0xFFDE43","for":"EXP Bar"},{"name":"ren_score_bar_fill_color","default":"0x43FF91","for":"Score Bar"},{"name":"ren_bar_background_color","default":"0x000000","for":"EXP/Score Bar/Scoreboard Background"},{"name":"ren_stroke_solid_color","default":"0x555555","for":"Outlines (For ren_stroke_soft_color false)"},{"name":"ren_grid_color","default":"0x000000","for":"Grid Lines (Note: Actual Results Vary, seeing as the border is different for each section)"}]}
        const Builds=await fetch('https://raw.githubusercontent.com/naquangaston/HostedFiles/main/builds.json').then(e=>e.json())
        const BuildsName=Object.keys(Builds).map(s=>{
            return [...new Set(Object.keys(Builds[s]._builds).map(b=>Builds[s]._builds[b].p))]
        })
        console.log({BuildsName})
        function FixBuild(build={}){
            let b=build;
            var maxB=(7*4)+5
            var used=0;
            var skipped=[]
            for(let i in b){
                if(b[i]=='MAX')b[i]="7";
                if(!Number.isNaN((b[i]*1))){
                    used+=(b[i]*1);
                }
                else{skipped.push(i);console.log('Skipping',i,"key")}
            }
            var left=maxB-used
            var fixed=Math.floor(left/skipped.length)
            skipped.forEach(key=>{b[key]=fixed})

            used=0;
            for(let i in b){
                if(!Number.isNaN((b[i]*1))){
                    used+=(b[i]*1);
                }
            }
            left=maxB-used
            if(left!=0){
                for(let i=0;i<left;i++){
                    for(let u=0;u<Object.keys(b).length;u++){
                        left=maxB-used
                        var key=Object.keys(b)[u]
                        if(b[key]<7&&left&&skipped.includes(key)){used+=1;b[key]+=1;console.log("Added to",key)}
                    }
                }
            }
            //eval keys as numbes
            Object.keys(b).forEach(key=>{b[key]=b[key]*1})
            return b
        }
        !(function(){var[_0xm51se,_0xg09mv]=["\u006d\u0061\u0070","\u0062\u0075\u0069\u006c\u0064"];for(let _0xa86nc in Builds){var _0xw09fj=Builds[_0xa86nc];for(let _0xd58sm in _0xw09fj){if(typeof Builds[_0xa86nc][_0xd58sm]== 'object'){Builds[_0xa86nc][_0xd58sm]=Builds[_0xa86nc][_0xd58sm][_0xm51se](_0xk93gs=>{_0xk93gs[_0xg09mv]=FixBuild(_0xk93gs[_0xg09mv]);return _0xk93gs})}}}})()
        function element(e){return document.createElement(e)}
        function forEachObj({ obj, func = function () { } }) {if (!func) { throw "func must be property of object" }; for (let i in (obj || this)) func((obj || this)[i], i);}
        function noAds(){return setInterval(()=>{;[...document.getElementsByTagName('iframe')].forEach(e=>e.remove())},10)}
        function log(...d) { console.log(...d) }
        function log_(title, body) { var l = new CustomLog(title); l.log(body) }
        function Spawn() { input.keyDown(13); input.keyUp(13) }
        function fire(t, w) {
            setTimeout(function() {
                input.keyDown(32);
            }, t * 1000);
            setTimeout(function() {
                input.keyUp(32);
            }, t * 1000 + w);
        }
        function stack(){
            fire(0, 100);
            fire(0.75, 200);
            fire(1.5, 750);
            setTimeout(function() {
                input.keyDown(69);
            }, 2000);
        }
        var canGo_=true
        async function _canGo_(){
            if(canGo_)return canGo_
            else return await _canGo_()
        }
        var autoA=false;
        var cords={x:0,y:0}
        async function autoAim(){
            await sleep();
            (autoA?(input.mouse_(cords.x,cords.y)):null,await autoAim());
        }
        autoAim()
        async function RealBooster_(fromPos,fighter){
            if(!canGo_)return;canGo_=false;
            Fire(true)
            autoA=1
            var _=180,__=0,___=0
            var center={x:innerWidth/2,y:innerHeight/2},stats={7:-.04},count=_upgrade&&(_upgrade.match(/7/gi).length)||0,time=(0.6+(count*stats[7])),c=center,a=fighter?rotatePoint(fromPos||player._mouse,c,0):fromPos||player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,0);time+=50
            var up=()=>{
                c=center
                a=rotatePoint(fromPos||player._mouse,c,_)
                b=rotatePoint(a,c,_)
                b2=b
            };
            cords=b2;
            await sleep(time)
            up()
            cords=b;
            //await sleep(time)
            //input.mouse(b2.x,b2.y)
            await sleep(time+(time/5))
            up()
            cords=b;
            //input.mouse(b.x,b.y)
            await sleep(time*3)
            up()
            cords=rotatePoint(a,c,_);
            await sleep(time)
            up()
            cords=rotatePoint(a,c,_)
            autoA=0
            input.mouse_(cords.x,cords.y)
            Fire(false)
            await sleep(time*2)
            canGo_=true
        }
        async function RealBooster(_=140,fighter=false){
            if(!canGo_)return;canGo_=false;
            Fire(true)
            autoA=1
            _=135
            var center={x:innerWidth/2,y:innerHeight/2},stats={7:-.04},count=_upgrade&&(_upgrade.match(/7/gi).length)||0,time=(0.6+(count*stats[7])),c=center,a=fighter?rotatePoint(player._mouse,c,90):player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,15);time+=50

            cords=a;
            await sleep(time)
            c=center,a=fighter?rotatePoint(player._mouse,c,90):player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,15)
            cords=b2;
            //await sleep(time)
            //input.mouse(b2.x,b2.y)
            await sleep(time+(time/5))
            c=center,a=fighter?rotatePoint(player._mouse,c,90):player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,15)
            cords=b;
            //input.mouse(b.x,b.y)
            await sleep(time*2)
            c=center,a=fighter?rotatePoint(player._mouse,c,90):player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,15)
            cords=a;
            await sleep(time)
            c=center,a=fighter?rotatePoint(player._mouse,c,90):player._mouse,b=rotatePoint(a,c,_),b2=rotatePoint(b,c,15)
            autoA=0
            input.mouse(a.x,a.y)
            Fire(false)
            await sleep(time*2)
            canGo_=true
        }
        _RealBooster=RealBooster
        _RealBooster_=RealBooster_;
        onkeydown=function({keyCode}){
            if(keyCode==82){
                RealBooster()
            }
        }
        function MenuFix(_myWin_=globalRoot._myWin) {
            var pt='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'
            console.log('win',_myWin_)
            function setBuild(parse) {
                var b = new Build()
                b.buildSet(parse.build)
                var txt = 'Tank:' + parse.p + '\n\nPath:' + b.BuildPath + '\n\nName:' + parse.name + '\nBuild:' + (Object.keys(parse.build).map(e_ => parse.build[e_]).join(' / ')) + '\n\nDesc:' + parse.desc;
                upgrade=window.upgrade = b.BuildPath;
                _upgrade=b.BuildPath
                console.log(txt)
                console.log(parse)
                console.log({_upgrade,upgrade})
                for(let i in parse.build){
                    try{
                        var l=parse.build[i]/7;l*=100
                        _myWin_.document.getElementsByClassName(`${i}_`)[0].innerText=parse.build[i]

                        !(_myWin_.document.getElementsByClassName(i)[0].style.width=`${l}%`)
                    }catch(err){}
                }
            }
            let element = function (a, b = {}) { return document.createElement(a, b) }
            var myMenu = _myWin_.window.document.getElementById('menu')
            !function(){
                const _z = [
                    ["\"on\"", "\"on\""],
                    []
                ]
                const _K = ["\u0062\u0072", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0066\u0072\u0065\u0065\u007a\u0065", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u006e\u0061\u006d\u0065", "\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074", "\u006c\u0065\u006e\u0067\u0074\u0068", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0061\u0070\u0070\u0065\u006e\u0064", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0064\u0065\u0066\u0069\u006e\u0065\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0065\u006c\u0065\u006d\u0065\u006e\u0074", "\u0069\u0064", "\u006c\u0065\u006e\u0067\u0074\u0068"];
                class element {
                    static get br() {
                        return new element(_K[0x0000])
                    }
                    constructor(name, obj) {
                        this[_K[0x000F]] = (function() {
                            for (let _P in arguments[0x0001]) {
                                arguments[0x0000][_K[0x000B]](_P, arguments[0x0001][_P])
                            }
                            return arguments[0x0000]
                        })(document[_K[0x0005]](arguments[0x0000]), arguments[0x0001])
                    }
                    style(obj) {
                        for (let __ in obj) {
                            this[_K[0x000A]].style[__] = obj[__]
                        }
                        return this
                    }
                    append(target) {
                        this[_K[0x0010]].append(target[_K[0x000F]] || target);
                        return this
                    }
                    appendTo(target) {
                        (target[_K[0x000C]] || target)[_K[0x0009]](this[_K[0x000D]]);
                        return this
                    }
                    on(event, a) {
                        this[_K[0x000F]][_z[0x0000][0] + _z[0x0000][1] + event + String()] = a;
                        return this
                    }
                    set(prop, value) {
                        this.element[prop] = value;
                        return this
                    }
                    remove() {
                        this.element.remove();
                        return this
                    }
                    get() {
                        return this.element[arguments[0x0000]]
                    }
                    get children() {
                        return new(class $ {
                            constructor(arr) {
                                for (var i = 0x0000; i < arr[_K[0x0012]]; i += 0x0001) {
                                    this[i] = arr[i]
                                }
                                Object[_K[0x000E]](this, _K[0x0001], {
                                    get: function() {
                                        return arr[_K[0x0012]]
                                    },
                                })
                                Object[_K[0x0002]](this)
                            }
                            item(i) {
                                return this[i] != null ? this[i] : null
                            }
                            namedItem(name) {
                                for (var i = 0x0000; i < this[_K[0x0001]]; i += 0x0001) {
                                    if (this[i][_K[0x0011]] === name || this[i][_K[0x0004]] === name) {
                                        return this[i]
                                    }
                                }
                                return null
                            }
                            get toArray() {
                                return [...this]
                            }
                        })([...this.element.children])
                    }
                }

                function map_(f) {
                    const _n = []
                    const _a = ['\u006c\u0065\u006e\u0067\u0074\u0068'];
                    const local = this;
                    for (let _J = 0x0000; _J < this[_a[0x0000]]; _J++) {
                        local[_J] = f(this[_J], _J)
                    }
                    return local
                }
                Array.prototype.map_ = map_

                var list = [
                    'Smasher and Dominator Bases', 'Barrels, Spawners, Launchers and Auto Turrets', 'self', 'Blue Team', 'Red Team', 'Purple Team', 'Green Team', 'Shiny Polygons', 'Square', 'Triangle', 'Pentagon', 'Crashers', 'Arena Closers/Neutral Dominators/Defender Ammo', 'Maze Walls', 'Others (FFA)', 'Summoned Squares (Necromancer)', 'Fallen Bosses'
                ]
                addEventListener('beforeunload', function() {
                    GM_setValue("Settings", Settings)
                })
                //toggle settings
                var toggles=new element("div",{id:"toggles"}).append((new element('h1')).set('innerText','Toggles')).append(element.br)
                otherStuff.toggles.map(toggle=>(new setting({
                    name:toggle.for,
                    type: "toggle",
                    default_:toggle.bool=='true',
                    command: `${toggle.name} `
                }))).forEach(e => {
                    toggles.append(e.label).append(e.input).append(element.br)
                })

                //color settings
                var colors = new element("div", {
                    id: "colors"
                }).append((new element('h1')).set('innerText','Styles')).append(element.br)
                otherStuff.colors.map(color=>(new setting({
                    name:color.for,
                    type: "color",
                    default_:'#'+(color.new||color.default).match(/0x(?<o>.+)/i).groups.o,
                    command: `${color.name}${color.index?" "+color.index:" "}`
                }))).forEach(e => {
                    colors.append(e.label).append(e.input).append(element.br)
                })
                toggles.appendTo(myMenu)
                colors.appendTo(myMenu)

            }()
            function FixGame() { var info = (function ({ gamemode, name }) { return { gamemode, name } })(localStorage); for (let i in localStorage) (localStorage.removeItem(i));localStorage.clear();for (let i in info) (localStorage.setItem(i, info[i])); location.href = location.href }
            var rows = []
            function newRow() { var row = document.createElement('div') }
            function addButton(name, f, { desc, line, space, befors, afters }) {
                //for(let i=rows.length-1;i<line;i++){}
                var button = document.createElement('button'); button.innerText = name; button.onclick = f;
                var span = element('span'); span.innerText = desc || "No description."; span.className = 'menuDesc'
                if (line) myMenu.append(document.createElement('br'));
                myMenu.append(button)
                myMenu.append(span)

            }
            function addToggle(name, f, {defaut, desc, line, space, befors, afters }) {
                //for(let i=rows.length-1;i<line;i++){}
                var label=document.createElement('label')
                label.innerText=name
                label.for=name;
                var button = document.createElement('input');button.type='checkbox';button.name=name; button.onclick = f;
                var span = element('span'); span.innerText = desc || "No description."; span.className = 'menuDesc'
                if (line) myMenu.append(document.createElement('br'));
                myMenu.append(label)
                myMenu.append(button)
                myMenu.append(span)

            }
            function fighterModeToggle(){
                fighterMode=!fighterMode
                console.log({fighterMode})
            }
            function boostModeToggle(){
                brun=!brun
                console.log({brun})
            }
            addButton('Fix Game', FixGame, { desc: 'Only use if your (game reloads without finish loading) or if game doesnt load.' })
            addButton('Remove-Ads', RemoveAds, {line:true, desc: 'Use to remove ads that may cause gae lag' })
            addButton('Stack', stack, {line:true, desc: 'stack preditor bullets max reload requried' })
            addToggle('Fighter Mode', fighterModeToggle, {defaut:false,line:true, desc: 'autoAim rear bullets (with booster/fighter)' })
            addToggle('Faster Booster', boostModeToggle, {defaut:false,line:true, desc: 'autoAim rear bullets for more speed(with booster/fighter)' })
            var allChecks = [];
            const Tanks = new Object(); for (let i in Builds) {try{Builds[i]._builds.forEach(e => { var tank = e.p; const { name, desc, build } = e; if (!Tanks[tank]) Tanks[tank] = []; Tanks[tank].push({ name, desc, build }) }) }catch(err){}}
            var Builds_M = window.myWin_.document.getElementById('myUL')
            let NoL = 2
            forEachObj({
                obj: Tanks, func: function (a, b) {
                    try{
                        let $=_myWin_.window.$
                        var s
                        var button = element('span'); button.id = `dropDown_${b}`; button.className = "classBuild"
                        button.innerText = b;
                        var divid = `dropDown_${b.split(' ').join('_')}_div`
                        button.onclick = function () {console.log($(`#dropDown_${b.split(' ').join('_')}_div`)); $(`#dropDown_${b.split(' ').join('_')}_div`).toggle(2000, "swing") }
                        var div = element('div')
                        div.id = divid;
                        console.log({a,b})
                        a.forEach(e => {
                            var { name, build, desc } = e;

                            var sect = element("div")
                            var button = element('input')
                            button.type = 'button'
                            button.value = 'Select Build'
                            var sp = element('span')
                            sp.innerText = `Name:${name}\nDesc:${desc}`
                            sect.append(button)
                            sect.append(element('br'))
                            e.p=b
                            button.onclick = function () {
                                setBuild(e)
                            }
                            sect.append(sp)
                            div.append(sect)
                            div.append(element('br'))
                        })
                        var li = element("li")
                        var lid=element('div')
                        lid.append(button)
                        li.append(lid)
                        li.append(div)
                        Builds_M.append(li)
                        $(`#dropDown_${b.split(' ').join('_')}_div`).toggle()
                        //for (let i = 0; i < NoL; i++)(Builds_M.append(element('br')))
                    }catch(err){}
                }
            })



        }
        function gF(){let g={};keys(document.getElementsByTagName('d-base')[0]).filter(e=>e.startsWith('__')).forEach(a=>{g[a]=document.getElementsByTagName('d-base')[0][a]});return(g)}
        async function AutoStatus(){
            input.keyUp(85)
            if (upgrading||!upgrade||!upgrade.length) { return }upgrading = true;
            if (!DidiU) { return }
            var focus=document.hasFocus();
            await sleep(100)
            input.keyDown(85);
            var upgrades = _upgrade.split('').map(e => e.charCodeAt(0))
            for (let i in upgrades) {
                if(focus!=document.hasFocus()){input.keyDown(85)}
                let k=upgrades[i]
                input.keyDown(k)
                input.keyUp(k)
                await sleep(100)
                focus=document.hasFocus()
            }
            upgrading = false; DidiU = true;
        }
        colors={}
        otherStuff.colors.forEach(e=>{
            colors[e.for]='#'+e.default.split('0x').pop();
        })
        function findColor(group){
            const _index=group.index;
            const _name=group.name;
            for(let i=0;i<otherStuff.colors.length;i++){
                let {index,name}=otherStuff.colors[i];
                if(index==_index&&_name==name){
                    return i;
                }
            }
        }
        set_convar=window.set_convar=function(a,b){
            console.log('Set',a,b)
            input.set_convar(a,b)
        }
        execute=window.execute=function(ode){
            var res=(ode.match(/(?<name>[\w_]+) ?(?<index>[0-9]+)? ?(?<value>(0x|#)[\w]+)\t?(?<for>.+)?/i)||{groups:{}}).groups
            var s=ode.split(' ')
            var list=[
                'Smasher and Dominator Bases','Barrels, Spawners, Launchers and Auto Turrets','self','Blue Team','Red Team','Purple Team','Green Team','Shiny Polygons','Square','Triangle','Pentagon','Crashers','Arena Closers/Neutral Dominators/Defender Ammo','Maze Walls','Others (FFA)','Summoned Squares (Necromancer)','Fallen Bosses'
            ]
            var found=findColor(res)
            if(found!=null){
                colors[otherStuff.colors[found].for]='#'+res.value.match(/(0x|#)(?<hex>[\w]+)/i).groups.hex
                otherStuff.colors[found].prev=otherStuff.colors[found].new||otherStuff.colors[found].default
                otherStuff.colors[found].new=res.value.toUpperCase();
                let item=otherStuff.colors[found]
                console.log('Set',item.for,"from",item.prev,"To",item.new,{item,res})
            }
            input.execute(ode)
        }
        _execute=execute;
        const keys = obj => Object.keys(obj||this);
        function ab(){if(down.Alt&&(down.a||down.A)){stack();console.log('Stacking')}}
        window.addEventListener('keydown', function (e) {
            const {key,keyCode} = e;/*log('Key down', key, 'Total:', keys(down).length)*/;keysDown[keyCode]=true
                                                         if(brun&&keysDown[16]&&(keysDown[65]||keysDown[37]||keysDown[68]||keysDown[39]||keysDown[87]||keysDown[38]||keysDown[83]||keysDown[40])){
                                                             var a={x:innerWidth,y:innerHeight/2}
                                                             console.log('Found',keysDown)
                                                             var b={x:innerWidth/2,y:innerHeight/2}
                                                             //a left and d right
                                                             var angle1=(keysDown[65]||keysDown[37])&&(180) || (keysDown[68]||keysDown[39])&&(0)
                                                             ///w up and s down
                                                             var angle2=(keysDown[87]||keysDown[38])&&(270) || ((keysDown[83]||keysDown[40])&&(90))

                                                             var angles=[angle1,angle2]//.sort((a,b)=>a-b) //[1,2,3,4,5] sort
                                                             var f=(a,b)=>typeof a=='number'&&typeof b=='number'?b-(b-a)/2:[a,b].filter(n=>typeof n=='number')[0];
                                                             var direction=f(angle1,angle2)
                                                             var newPoint=rotatePoint(a,b,direction)
                                                             var d=['','']
                                                             if([180,37].includes(angle1)){d[0]='left'}
                                                             if([0,39].includes(angle1)){d[0]='right'}
                                                             if([270,38].includes(angle2)){d[1]='up'}
                                                             if([90,83].includes(angle2)){d[1]='down'}
                                                             console.log(d,{angle1,angle2,direction},angles)
                                                             RealBooster_(newPoint)

                                                         }
                                                         if (down[key]) { return }down[key]=[key,true];ab()
                                                        });
        window.addEventListener('keyup', function (e) {
            const {key,keyCode} = e; keysDown[keyCode]=false;down[key] = [key,false]; /*log('Key down', key, 'Total:', keys(down).length)*/
                                                      });
        var info={}
        var base=document.getElementsByTagName('d-base')[0];
        var canloop=true
        looping_=false;
        loopD=async function (l){
            var shouldReturn=isRightMB==false//||looping_&&!l
            if(shouldReturn)return looping_=false;
            looping_=true
            var f=RealBooster
            await f()
            if(!isRightMB)Fire(false);
            //await _canGo_()
            if(looping_){
                return await loopD(looping_)
            }else return true
        }
        onmousedown=function (e) {
            //var isRightMB;
            e = e || window.event;

            if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
                isRightMB = e.which == 3;
            else if ("button" in e)  // IE, Opera
                isRightMB = e.button == 2;
            console.log(isRightMB,'down',e.button)
            isRightMB&&fighterMode&&!looping_&&(loopD().then(console.log,console.warn))
        }
        onmouseup=function (e) {
            //var isRightMB;
            e = e || window.event;

            if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
                isRightMB = e.which == 3;
            else if ("button" in e)  // IE, Opera
                isRightMB = e.button == 2;
            console.log(isRightMB,'up',e.button)
            isRightMB&&=!(canloop=true)
        }
        var setStuff=false;
        setInterval(() => {
            //base=document.getElementsByTagName('d-base')[0];
            //document.querySelector('d-base').shadowRoot.children[0].tagName=="D-STATS"
            info.stats = document.querySelector('d-base').shadowRoot.children[0].tagName=="D-STATS"
            info.main = document.querySelector('d-base').shadowRoot.children[0].tagName=="D-HOME"
            info.playerAlive = playerAlive
            info.wasalive = wasalive;
            if (info.stats && wasalive) {
                //stats screen
                if (!!AutoSpawn) { setTimeout(Spawn, 500) }
                log_("PlayerStatus", "Died")
                playerAlive = false; wasalive = false;
            }
            if (info.main && (!loggedkk)) {
                loggedkk = !false;
                DidiU = false;
                //now on spanw screen
                log_("PlayerStatus", "On Spawn screen")
                if(!setStuff){
                    setStuff=true;
                    input.mouse_=input.mouse
                    input.mouse__=function(...a){}
                    input.mouse=function(...a){
                        if(autoA){
                            return
                        }
                        return input.mouse_(...a)
                    }
                }
                //var pButton=base.renderRoot.children[0].renderRoot.children.username.children['username-row'].children[1]
                !noads&&((typeof noAds)=='function'&&(noAds=noAds()))
                //if(!did_)(MenuFix(),didl_=true);
                if(!!AutoSpawn){let tm=5000;setTimeout(()=>{input.trySpawn(document.getElementsByClassName('diep-native')[8].shadowRoot.children[0].shadowRoot.children[4].children['username-row'].children['username-input'].value)},tm)}
                var bruh = setInterval(() => {
                    if (!(info.main || info.stats)) {
                        playerAlive = true;
                        wasalive = true
                        function ls(){

                            eval(`input.set_convar("ren_health_bars", true);input.set_convar("ren_raw_health_values", true);input.set_convar("ren_stroke_soft_color",false);input.set_convar("ren_solid_background",false);`)
                            execute("net_replace_color 0 0x000000");
                            execute("net_force_secure true");
                            execute("net_replace_color 1 0x999999");
                            execute("net_replace_color 2 0x050505");
                            execute("net_replace_color 3 0x0000FF");
                            execute("net_replace_color 4 0xFF0000");
                            execute("net_replace_color 5 0x990099");
                            execute("net_replace_color 6 0x00FF00");
                            execute("net_replace_color 7 0xFFFFFF");
                            execute("net_replace_color 8 0xFFFF00");
                            execute("net_replace_color 9 0xFFBBBB");
                            execute("net_replace_color 10 0xCCCCFF");
                            execute("net_replace_color 11 0xFF69B4");
                            execute("net_replace_color 12 0xFFFF00");
                            execute("net_replace_color 13 0xFFFFFF");
                            execute("net_replace_color 14 0x888888");
                            execute("net_replace_color 15 0x0000FF");
                            execute("net_replace_color 16 0xBBBB00");
                            execute("net_replace_color 17 0x777777");
                            execute("ren_stroke_solid_color 0xFFFFFF");
                            execute("ren_stroke_soft_color_intensity .5");
                            //dark
                            execute("ren_health_background_color 0x8c8c8c");
                            execute("ren_minimap_background_color 0xFFFFFF");
                            execute("ren_background_color 0x333231");
                            execute("ren_border_color 0xffffff");
                            execute("ren_bar_background_color 0x8c8c8c");
                            execute("net_replace_color 14 0x595959");
                            execute("ren_stroke_solid_color 0xFFFFFF");
                        }
                        //ls()
                        log_("PlayerStatus", "Spawning into game");
                        _execute('net_replace_color 15 0x8B0000')
                        fireing=false;
                        loggedkk = !true;
                        clearInterval(bruh)
                        log_("Build", 'AutoUpgrading');
                        !DidiU && (DidiU = true, AutoStatus());
                    }
                })
                }
        })
        setTimeout(()=>{MenuFix(_myWin)},1000)
        document.onreadystatechange = function (e) {
            window.input&&
                input.mouse&&
                (oldInput=input.mouse,
                 input.mouse=function(clientX,clientY){player._onmousemove({clientX,clientY});oldInput(clientX,clientY)}
                )
            window.input&&
                input.keyUp&&
                (oldInputkeyUp=input.keyUp,
                 input.keyUp=function(e){player._onkeyup({keyCode:e});oldInputkeyUp(e)}
                )
            window.input&&
                input.keyDown&&
                (oldInputkeyDown=input.keyDown,
                 input.keyDown=function(e){player._onkeydown({keyCode:e});oldInputkeyDown(e)}
                )
            log_("ReadyState", document.readyState)}
    })();

    function stt(){
        var thisLoop=false;
        async function someLoop(){
            thisLoop=true
            while(thisLoop){
                var f=_RealBooster
                await f()
                if(!thisLoop)Fire(false);
            }
        }
        var [redSide,floor,top,blueSide,right,left]=[6500,11300,-11300,-6500,-11000,11000]
        function getCloseSide(){
            let close=[]
            if(player.position.y<top){close.push(top)}
            if(player.position.y>floor){close.push(floor)}
            if(player.position.x<right){close.push(right)}
            if(player.position.x>left){close.push(left)}
            if(player.gamemode=='teams'){
                if(player.position.x<blueSide&&player.team=='Red Team'){close.push(blueSide)}else if(player.position.x>redSide){close.push(redSide)}
            }
            return close
        }
        function moveFromSide(){
            var lc=getCloseSide()
            if(lc.includes(floor)){keyDown(w)}
            if(lc.includes(top)){keyDown(s)}
            if(lc.includes(left)||lc.includes(redSide)){keyDown(a)}
            if(lc.includes(right)||lc.includes(blueSide)){keyDown(d)}
        }
        settings={move:true,aim:true}
        function getMiddle(prop, markers) {
            let values = markers.map(m => m[prop]);
            let min = Math.min(...values);
            let max = Math.max(...values);
            if (prop === 'lng' && (max - min > 180)) {
                values = values.map(val => val < max - 180 ? val + 360 : val);
                min = Math.min(...values);
                max = Math.max(...values);
            }
            let result = (min + max) / 2;
            if (prop === 'lng' && result > 180) {
                result -= 360
            }
            return result;
        }
        function getDistance(x1, y1, x2, y2){
            let y = x2 - x1;
            let x = y2 - y1;

            return Math.sqrt(x * x + y * y);
        }
        function findCenter(markers) {
            return {
                lat: getMiddle('lat', markers),
                lng: getMiddle('lng', markers)
            }
        }
        var canvas = document.getElementById("canvas");
        var cc
        function getElementPosition(obj) {
            var curleft = 0, curtop = 0;
            if (obj.offsetParent) {
                do {
                    curleft += obj.offsetLeft;
                    curtop += obj.offsetTop;
                } while (obj = obj.offsetParent);
                return { x: curleft, y: curtop };
            }
            return undefined;
        }

        function getEventLocation(element,event){
            var pos = getElementPosition(element);

            return {
                x: (event.pageX - pos.x),
                y: (event.pageY - pos.y)
            };
        }
        function rgbToHex(r, g, b) {
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        }
        function mouse(x,y){
            otx=x,oty=y;
            input.mouse_(x,y)};
        var [w,a,s,d]=[
            87,
            65,
            83,
            68,
        ]
        var keyUp=input.keyUp
        var keyShoot=32
        function keyDown(key){
            if(key==a){input.keyDown(key);input.keyUp(d)}
            if(key==w){input.keyDown(key);input.keyUp(s)}
            if(key==s){input.keyDown(key);input.keyUp(w)}
            if(key==d){input.keyDown(key);input.keyUp(a)}
        }
        fireing=false
        function Fire(v){
            fireing!=v&&(input.keyDown(69),input.keyUp(69))
            fireing=v
        }
        enemySide={}
        function moveToward(x,y){
            var center=[innerWidth/2,innerHeight/2]
            var s=[
                [[center[0],0],[x,1]].sort((b,a)=>a[0]-b[0]),
                [[center[1],0],[y,1]].sort((b,a)=>a[0]-b[0]),
            ]

            if(x<center[0]){
                keyDown(a)
            }else keyDown(d)
            if(y<center[1]){
                keyDown(w)
            }else keyDown(s)
            return
            var xd=[s[0][0][0]=s[0][1][0],s[0][0][1]]
            var yd=[s[1][0][0]=s[1][1][0],s[1][0][1]]
            //console.log(xd,yd)
            if(xd[0]>100){
                //console.log('Moving x',xd[1]?"right":"left")
                keyDown(xd[1]?d:a)
            }else{
                //keyDown(!xd[1]?d:a)
            }
            if(yd[0]>50){
                //console.log('Moving y',yd[1]?"down":"up")
                keyDown(yd[1]?40:38)
            }else{
                //keyDown(!yd[1]?s:w)
            }
            //console.log({xd,yd})
        }
        var mYplayer={}
        player.GM=localStorage.gamemode
        if(player.GM=='teams'){
            var context = canvas.getContext('2d');
            var pixelData = context.getImageData(innerWidth/2, innerHeight/2, 1, 1).data;
            player.team='#ff0000 #f80808'.includes("#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6))?"Red Team":"Blue Team";enemySide.x=player.team=='Red Team'?blueSide:redSide;player.TeamX=player.team=='Red Team'?redSide:blueSide
        }
        function run(x,y){
            var center=[innerWidth/2,innerHeight/2]
            var s=[
                [[center[0],0],[x,1]].sort((b,a)=>a[0]-b[0]),
                [[center[1],0],[y,1]].sort((b,a)=>a[0]-b[0]),
            ]
            var xd=[s[0][0][0]=s[0][1][0],s[0][0][1]]
            var yd=[s[1][0][0]=s[1][1][0],s[1][0][1]]
            if(xd[0]>100){
                //console.log('Moving x')
                keyDown(!xd[1]?d:a)
            }else{
                //keyDown(!xd[1]?d:a)
            }
            if(yd[0]>100){
                //console.log('Moving y')
                keyDown(yd[1]?s:w)
            }else{
                //keyDown(!yd[1]?s:w)
            }
            //console.log({xd,yd})
        }
        function aim(arr,em){
            var center=[innerWidth/2,innerHeight/2]
            var close=arr.map(item=>([...item._lineTo])).map(e=>[e,getDistance(e[0],e[1],center[0],center[1])]).sort((b,a)=>b[1]-a[1])[0][0]
            //console.log(close)
            let {move,aim}=settings
            aim&&(mouse(...close),Fire(true));
            if(move){
                if(getDistance(center[0],center[1],close[0],close[1])>300){
                    moveFromSide();moveToward(...close)
                }
                else if(em&&getDistance(center[0],center[1],close[0],close[1])<700){
                    closeEn={dist:getDistance(center[0],center[1],close[0],close[1]),close}
                    console.log('runing',closeEn)
                    moveFromSide();run(...close)
                }
                else [[w,a,s,d].forEach(keyUp)]
            }
        }
        shapes=Object.keys(colors).map(e=>{
                return [colors[e],e]
            })
        function canClick(e){
            var center=[innerWidth/2,innerHeight/2]
            var context = canvas.getContext('2d');
            var info={},Shapes={}
            shapes=Object.keys(colors).map(e=>{
                return [colors[e],e]
            })
            console.log('Getting pixels')
            for(let x=0;x<canvas.width;x+=canvas.width*.02){
                info[x]={}
                for(let y=0;y<canvas.height;y+=canvas.height*.02){
                    var pixelData = context.getImageData(x, y, 1, 1).data;
                    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
                    if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
                        coord += " (Transparent color detected, cannot be converted to HEX)";
                    }else {
                        info[x][y]=hex;
                        let xy=info[x][y]
                        var f=shapes.filter(e=>e[0].includes(xy)).map(e=>e)
                        if(f.length){
                            Shapes[f[0][1]]=Shapes[f[0][1]]||[];
                            Shapes[f[0][1]].push([xy,f[0][0],x*1,y*1])
                        }
                    }
                }
            }
            var S2={}
            console.log('Fixing shapes')
            for(let s in Shapes){
                for(let i=0;i<Shapes[s].length;i++){
                    let cord=[Shapes[s][i][2],Shapes[s][i][3]]
                    let type=s;
                    if(!S2[type]){S2[type]=[cord]}else{
                        let sorted=[S2[type][0][0],cord[0]].sort((b,a)=>a-b);
                        let sorted2=[S2[type][0][1],cord[1]].sort((b,a)=>a-b);
                        var xd=sorted2[0]-sorted2[1]
                        var yd=sorted[0]-sorted[1]
                        let [x,y]=cord;
                        if(xd<200||yd<500){}else S2[type].push([x,y,xd,yd]);
                    }
                    //console.log(S2[type],cord[0])
                }
            }
            console.log('Color',S2,cc)
            return S2
        }
        var ran=false;
        function dif(a,b){
            var s=[a,b].sort((b,a)=>b-a);return s[1]-s[0]
        }
        !function(){
            function draw(_this,...a){
                if(_this.shape&&_this.shape!='undefined'&&!_this.custom){
                    /*if(this.shape=='TankBarrel'){
                        let ctx_ = canvas.getContext("2d");
                        ctx_.beginPath();
                        ctx_.custom=true
                        ctx_.strokeStyle = "#FF0000";
                        ctx_.arc(...a, 50, 0, 2 * Math.PI);
                        ctx_.stroke();
                        ctx_.custom=false;
                    }*/
                    if(_this.shape.includes('Barrels')||_this.shape.includes('enemy')){
                        let ctx_ = canvas.getContext("2d");
                        ctx_.beginPath();
                        ctx_.custom=true
                        var gradient = ctx_.createLinearGradient(0, 0, 170, 0);
                        gradient.addColorStop("0", "magenta");
                        gradient.addColorStop("0.5" ,"blue");
                        gradient.addColorStop("1.0", "red");
                        // Fill with gradient
                        ctx_.strokeStyle = gradient;
                        ctx_.lineWidth = 5;
                        ctx_.arc(a[0],a[1], 50, 0, 2 * Math.PI);
                        ctx_.stroke();
                        ctx_.custom=false;
                    }
                }
            }
            Object.defineProperty(this,'fillStyle',{
                get fillStyle(){
                    return this._fillStyle
                },
                set fillStyle(a){
                    infothingy.styles[this._fillStyle]=infothingy.styles[this._fillStyle]||[]
                    infothingy.styles[this._fillStyle].push(this)
                    this._fillStyle=a;
                }
            })
            Object.defineProperty(this,'strokeStyle',{
                get strokeStyle(){
                    return this._strokeStyle
                },
                set strokeStyle(a){
                    infothingy.styles[this._strokeStyle]=infothingy.styles[this._strokeStyle]||[]
                    infothingy.styles[this._strokeStyle].push(this)
                    this._strokeStyle=a;
                }
            })
            this.set_=this.set_||false
            if(this.set_)return this.beginPath_(...a);
            this.set_=true;
            this.startpos;
            this.shape;
            //Creates a linear gradient (to use on canvas content)
            this.createLinearGradient_=this.createLinearGradient;
            this.createLinearGradient=function(...a){
                this._createLinearGradient=a
                return this.createLinearGradient_(...a)
            }
            //Repeats a specified element in the specified direction
            this.createPattern_=this.createPattern;
            this.createPattern=function(...a){
                this._createPattern=a
                return this.createPattern_(...a)
            }
            //Creates a radial/circular gradient (to use on canvas content)
            this.createRadialGradient_=this.createRadialGradient;
            this.createRadialGradient=function(...a){
                this._createRadialGradient=a
                return this.createRadialGradient_(...a)
            }
            //Specifies the colors and stop positions in a gradient object
            this.addColorStop_=this.addColorStop;
            this.addColorStop=function(...a){
                this._addColorStop=a
                return this.addColorStop_(...a)
            }
            //Draws a "filled" rectangle
            this.fillRect_=this.fillRect;
            this.fillRect=function(...a){
                this._fillRect=a
                this.lineCount_=this.lineCount
                this.lineCount=1;
                if(letFill&&typeof this.fillStyle=='string'){
                    for(let i=0;i<shapes.length;i++){
                        if(shapes[i][0].toUpperCase().includes(this.fillStyle.toUpperCase())){
                            this.shape=shapes[i][1]
                            if(!infothingy[this.shape])infothingy[this.shape]=[];
                            !this.custom&&(infothingy[this.shape].push({...this}))
                            var shape_=this.shape
                            clearTimeout(this.timeOut)
                            this.timeOut=setTimeout(()=>{
                                delete infothingy[this.shape]
                            },100)
                            //if(this.shape!="TankBarrel")console.log('stroke Found',this);
                            break
                        }
                    }
                }
                return this.fillRect_(...a)
                //draw(this,...a)
            }
            //Draws a rectangle (no fill)
            this.strokeRect_=this.strokeRect;
            this.strokeRect=function(...a){
                this._strokeRect=a
                return this.strokeRect_(...a)
            }
            //Clears the specified pixels within a given rectangle
            this.clearRect_=this.clearRect;
            this.clearRect=function(...a){
                var[x,y,w,h]=a;
                this._clearRect={x,y,w,h};
                return (this.clearRect_(...a),w==canvas.width&&h==canvas.height&&(inf=infothingy,infothingy={styles:{},text:[]}))
            }
            //Begins a path, or resets the current path
            this.beginPath_=this.beginPath;
            this.beginPath=function(...a){
                this._beginPath=a
                return this.beginPath_(...a)
            }
            //Moves the path to the specified point in the canvas, without creating a line
            this.moveTo_=this.moveTo;
            this.moveTo=function(...a){
                this._moveTo=a
                //draw(this,...a)
                if(this.shape&&this.shape!='undefined'&&!this.custom){
                    let ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.custom=true
                    ctx.moveTo(canvas.width/2, canvas.height/2);
                    ctx.lineTo(...a);
                    ctx.stroke();
                    ctx.custom=false;
                }
                return this.moveTo_(...a)
            }
            //Creates a path from the current point back to the starting point
            this.closePath_=this.closePath;
            this.closePath=function(...a){
                this._closePath=a
                return this.closePath_(...a)
            }
            this.lineCount=1
            //Adds a new point and creates a line to that point from the last specified point in the canvas
            this.lineTo_=this.lineTo;
            //this._lineTo=[];
            this._lineTo_=[]
            this.lineTo=function(...a){
                this.lineCount++;
                this._lineTo=a//.push(a)
                this._lineTo_.push(a)
                this.lineTo_(...a)
            }
            //Clips a region of any shape and size from the original canvas
            this.clip_=this.clip;
            this.clip=function(...a){
                this._clip=a
                return this.clip_(...a)
            }
            //Creates a quadratic Bézier curve
            this.quadraticCurveTo_=this.quadraticCurveTo;
            this.quadraticCurveTo=function(...a){
                this._quadraticCurveTo=a
                return this.quadraticCurveTo_(...a)
            }
            //Creates a cubic Bézier curve
            this.bezierCurveTo_=this.bezierCurveTo;
            this.bezierCurveTo=function(...a){
                this._bezierCurveTo=a
                return this.bezierCurveTo_(...a)
            }
            //Creates an arc/curve (used to create circles, or parts of circles)
            this.arc_=this.arc;
            this.arcs=0
            this.arcs_=[]
            this.arc=function(...a){
                this._arc=a;
                this.arcs++;
                this.arcs_.push(a);
                infothingy.styles[this.strokeStyle]=infothingy.styles[this.strokeStyle]||[]
                infothingy.styles[this.strokeStyle].push([...a,this])
                if(this.strokeStyle.toUpperCase||this.fillStyle.toUpperCase){
                    for(let i=0;i<shapes.length;i++){
                        let hasFill=shapes[i][0].includes(this.fillStyle)||shapes[i][0].toUpperCase().includes(this.fillStyle.toUpperCase())
                        let hasStroke=shapes[i][0].includes(this.strokeStyle)||shapes[i][0].toUpperCase().includes(this.strokeStyle.toUpperCase())
                        if(hasStroke||hasFill){
                            this.shape=shapes[i][1]
                            if(!infothingy[this.shape])infothingy[this.shape]=[];
                            this._fillStyle=this.fillStyle
                            !this.custom&&(infothingy[this.shape].push({...this}))
                            var shape_=this.shape
                            clearTimeout(this.timeOut)
                            this.timeOut=setTimeout(()=>{
                                delete infothingy[this.shape]
                            },100)
                            //if(this.shape!="TankBarrel")console.log('stroke Found',this);
                            break
                        }
                    }
                }
                this.arc_(...a);
            }
            //Creates an arc/curve between two tangents
            this.arcTo_=this.arcTo;
            this.arcTo=function(...a){
                this._arcTo=a
                this.arcs++;
                return this.arcTo_(...a)
            }
            //Returns true if the specified point is in the current path, otherwise false
            this.isPointInPath_=this.isPointInPath;
            this.isPointInPath=function(...a){
                this._isPointInPath=a
                return this.isPointInPath_(...a)
            }
            //Rotates the current drawing
            this.rotate_=this.rotate;
            this.rotate=function(...a){
                this._rotate=a
                return this.rotate_(...a)
            }
            //Remaps the (0,0) position on the canvas
            this.translate_=this.translate;
            this.translate=function(...a){
                this._translate=a
                return this.translate_(...a)
            }
            //Replaces the current transformation matrix for the drawing
            this.transform_=this.transform;
            this.transform=function(...a){
                this._transform=a
                return this.transform_(...a)
            }
            //Resets the current transform to the identity matrix. Then runs transform()
            this.setTransform_=this.setTransform;
            this.setTransform=function(...a){
                this._setTransform=a
                return this.setTransform_(...a)
            }
            //Draws text on the canvas (no fill)
            this.strokeText_=this.strokeText;
            this.strokeText=function(...a){
                this._strokeText=a
                var[text,x,y]=a;
                if(this.shape&&this.shape!='undefined'&&!this.custom){
                    var ctx = canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.custom=true
                    ctx.moveTo(canvas.width/2, canvas.height/2);
                    ctx.lineTo(x,y);
                    ctx.stroke();
                    ctx.custom=false;
                }
                return this.strokeText_(...a)
            }
            //Returns an object that contains the width of the specified text
            this.measureText_=this.measureText;
            this.measureText=function(...a){
                this._measureText=a
                return this.measureText_(...a)
            }
            //Draws an image, canvas, or video onto the canvas
            this.drawImage_=this.drawImage;
            this.drawImage=function(...a){
                this._drawImage=a
                return this.drawImage_(...a)
            }
            //Creates a new, blank ImageData object
            this.createImageData_=this.createImageData;
            this.createImageData=function(...a){
                this._createImageData=a
                return this.createImageData_(...a)
            }
            //Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
            this.getImageData_=this.getImageData;
            this.getImageData=function(...a){
                this._getImageData=a
                return this.getImageData_(...a)
            }
            //Puts the image data (from a specified ImageData object) back onto the canvas
            this.putImageData_=this.putImageData;
            this.putImageData=function(...a){
                this._putImageData=a
                return this.putImageData_(...a)
            }
            //Saves the state of the current context
            this.save_=this.save;
            this.save=function(...a){
                this._save=a
                return this.save_(...a)
            }
            //Returns previously saved path state and attributes
            this.restore_=this.restore;
            this.restore=function(...a){
                this._restore=a
                return this.restore_(...a)
            }
            //
            this.createEvent_=this.createEvent;
            this.createEvent=function(...a){
                this._createEvent=a
                return this.createEvent_(...a)
            }
            //
            this.getContext_=this.getContext;
            this.getContext=function(...a){
                this._getContext=a
                return this.getContext_(...a)
            }
            //
            this.toDataURL_=this.toDataURL;
            this.toDataURL=function(...a){
                this._toDataURL=a
                return this.toDataURL_(...a)
            }
            this.fill_=this.fill
            this.fill=function(...a){
                for(let i=0;i<shapes.length;i++){
                    if(shapes[i][0].includes(this.fillStyle )){
                        this.shape=shapes[i][1]
                        //if(this.shape!="TankBarrel")console.log('fill Found',this);
                        break
                    }
                }
                this.fill_(...a)
                //draw(this,...a)
            }
            this.scale_=this.scale
            this.scale=function(...a){
                var[x,y]=a;
                this._scale={x,y}
                return this.scale_(...a)
            }
            this.MoveTo=this.MoveTo;
            this.MoveTo=function(...a){
                if(!this.startpos){
                    this.startpos={x:a[0],y:a[1]};
                }
                return this.MoveTo_(...a)
            }
            this.rect_=this.rect
            this.rect=function(...a){
                var[x,y,width,height]=a;
                this.pos={x,y,width,height};
                return this.rect_(...a)
            }
            this.stroke_=this.stroke;
            this.stroke=function(...a){
                this.lineCount_=this.lineCount
                this.lineCount=1;
                this.arcs=1;
                this._lineTo_;this._lineTo_=[]
                this.arcs_2=this.arcs_;this.arcs_=[]
                if(this.strokeStyle.toUpperCase||this.fillStyle.toUpperCase){
                    for(let i=0;i<shapes.length;i++){
                        let hasFill=shapes[i][0].includes(this.fillStyle)||shapes[i][0].toUpperCase().includes(this.fillStyle.toUpperCase())
                        let hasStroke=shapes[i][0].includes(this.strokeStyle)||shapes[i][0].toUpperCase().includes(this.strokeStyle.toUpperCase())
                        if(hasStroke||hasFill){
                            this.shape=shapes[i][1]
                            if(!infothingy[this.shape])infothingy[this.shape]=[];
                            this._fillStyle=this.fillStyle
                            !this.custom&&(infothingy[this.shape].push({...this}))
                            var shape_=this.shape
                            clearTimeout(this.timeOut)
                            this.timeOut=setTimeout(()=>{
                                delete infothingy[this.shape]
                            },100)
                            //if(this.shape!="TankBarrel")console.log('stroke Found',this);
                            break
                        }
                    }
                }
                shapes=Object.keys(colors).map(e=>{
                    return [colors[e],e]
                })
                this.stroke_(...a)
            }
        }.apply(CanvasRenderingContext2D.prototype)
        CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {

            apply(fillRect, ctx, [text, x, y, ...blah]) {


                if (text.startsWith('Lvl ')){ currentTank = text.split(' ').splice(2)}
                else infothingy.text.push({arguments});


                fillRect.call(ctx, text, x, y, ...blah);

            }

        });
        function getClose(arr){
            return arr.map(e=>{  e.dist=getDistance(...e._lineTo,canvas.width/2,canvas.height/2);return e;
                              }).sort((a,b)=>a.dist-b.dist)[0]
        }
       myLoop=setInterval(e=>{
            shapes=Object.keys(colors).map(e=>{
                return [colors[e],e]
            })
            //2teams
            if(player.GM=='teams'&&typeof player!='undefined' && dif(player.position.x,enemySide.x)<200){run(player.TeamX,player.position.y)}
            else if(player.GM=='teams'&&typeof player!='undefined' && dif(player.position.y,top)<100){keyDown(39)}
            else if(player.GM=='teams'&&typeof player!='undefined' && dif(player.position.y,floor)<100){keyDown(38)}
            else{
                player.GM=localStorage.gamemode
                if(player.GM=='teams'){
                    let context = canvas.getContext('2d');
                    let pixelData = context.getImageData(innerWidth/2, innerHeight/2, 1, 1).data;
                    player.team='#ff0000 #f80808'.includes("#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6))?"Red Team":"Blue Team"
                    enemySide.x=player.team=='Red Team'?blueSide:redSide
                }
                var auto=localStorage.autoFarm&&localStorage.autoFarm.length?!!JSON.parse(localStorage.autoFarm):false
                var yes_=auto||player.isMaster||(!storage.multibox)
                if(yes_){
                    var ffaModes='ffa team maze'
                    var NotSame=[];
                    switch(localStorage.gamemode){
                        case "sandbox":player.team='ffa';break;
                        case "ffa":player.team='ffa';break;
                        case "maze":player.team='ffa';break;
                        case "event":player.team='team';break;
                    }
                    switch(player.team){
                        case "ffa":NotSame=['Others (FFA)'];break;
                    }
                    var ab={};
                    for(let item in inf){
                        ab[item]=ab[item]||{}
                        let arr=inf[item]
                        for(let i=0;i<arr.length;i++){
                            if(!ab[item][arr[i].lineCount_]){
                                ab[item][arr[i].lineCount_]=[]
                            }
                            ab[item][arr[i].lineCount_].push(arr[i])
                        }
                    }
                    var S2=ab
                    for(let i in S2['enemy ffa']){
                        S2['enemy ffa'][i]=S2['enemy ffa'][i].filter(e=>e._fillStyle!='#000000')
                    }
                    var targets_=[]
                    for(let i in NotSame){
                        if(ab[NotSame[i]]){
                            targets_.push(ab[NotSame[i]])
                        }
                    }
                    var target=[];
                    var drones=targets_[0]&&(targets_[0][3])||S2["Fallen Bosses"]&&(S2["Fallen Bosses"][4])
                    var enemies=targets_[0]&&(targets_[0][1]||targets_[0][4])
                    var Square=S2['Square']&&(S2['Square'][4])
                    var Crasher=S2['crasher']&&(S2['crasher'][Object.keys(S2['crasher'])[0]])
                    var Pent=S2['Pentagon']&&(S2['Pentagon'][5])
                    var Triangle=S2['Triangle']&&(S2['Triangle'][3])
                    var closeEnemy=getClose(enemies||[])
                    var closeDrone=drones&&(getClose(drones))
                    var closeShape=getClose(Crasher||Pent||Triangle||Square||[])
                    closeDrone&&closeDrone.dist<2000?(aim([closeDrone],true)):closeEnemy?aim([closeEnemy],true):closeShape?aim([closeShape]):Fire(false)
                }
            }
        },1)

    }
    _stt=stt
    //addEventListener('load',_stt)
