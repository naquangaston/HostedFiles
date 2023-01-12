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
// @run-at document-start
// ==/UserScript==

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
var fireing=false;
unsafeWindow.GM_getValue=GM_getValue
unsafeWindow.GM_setValue=GM_setValue
unsafeWindow.GM_info = GM_info
Array.prototype.forEachAsync = async function(e = function() {}) {
    for (let a = 0; a < this.length; a++) await e(this[a], a, this.length);
    return null
}, Array.prototype.mapAsync = async function(e = function() {}) {
    for (let a = 0; a < this.length; a++) this[a] = await e(this[a], a, this.length);
    return this
};
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
    loadGfork('https://greasyfork.org/en/scripts/458131-diepbox-by-cazka-edit-by-gaston-1799')
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
        unsafeWindow.unsafeWindow=unsafeWindow
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
        const Builds={"Basic Tank":{branch:"Basic Tank",_builds:[{p:"Basic Tank",name:"Ram Trolling",build:{regen:"7",health:"7",body:"7",bspeed:"X",pen:"X",dmg:"X",reloads:"X",speed:"7"},desc:"Strong against ram tanks in full health."},{p:"Basic Tank",name:"Simple but Strong",build:{regen:"3",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"0"},desc:"None"},{p:"Basic Tank",name:"Bully",build:{regen:"2",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"3"},desc:"None"},{p:"Basic Tank",name:"Advanced Pursuit",build:{regen:"2",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"5",speed:"3"},desc:"None"},{p:"Basic Tank",name:"Mechanism",build:{regen:"1",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Basic Tank",name:"The Mighty",build:{regen:"1",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"6",reloads:"7",speed:"2"},desc:"Not recommended for newbies. Dodge or block bullets, and keep distance unless the foe isn't focused fire (like Spreadshot)"}]},"Twin Branch":{branch:"Twin Branch",_builds:[{p:"Twin",name:"Brick Wall Build",build:{regen:"7",health:"7",body:"0",bspeed:"5",pen:"0",dmg:"7",reloads:"0",speed:"7"},desc:"Health is important for survival, especially if you don't want to get killed by rammers. This build supports the damage of a sniper, the health of a rammer, and the speed of a Fighter all in one. This is good also for bullet spammer tanks like Octo Tank, Spread Shot, and Penta Shot!"},{p:"Twin",name:"Pyrex Cannon",build:{regen:"2",health:"2",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"None"},{p:"Twin",name:"Prometheus",build:{regen:"3",health:"2",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Twin",name:"Rather Nice",build:{regen:"2",health:"1",body:"1",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Twin",name:"Two Glass Cannons",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Build 0/0/0/7/7/7/7/5 also works."},{p:"Twin",name:"Doubled Rough Play",build:{regen:"0",health:"1",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"This build works out at Level 45, it could out penetrate or overwhelm almost any tank in Maze mode, including Destroyer classes and close up Assassin or Hunter branch tanks. Just watch out for Auto 5s or Auto Gunners with high bullet speed, skilled Overlords and other tanks using the same drones, and sometimes Trapper classes, especially Auto Trappers (though Trapper classes can't be a problem at times due to the slow bullet speed, and the fact that your bullets may push the traps away and hit the opponent, so for most of the time, you will be fine, just avoid Auto Trappers)."},{p:"Twin",name:"Master Spark",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"6",reloads:"7",speed:"7"},desc:"None"},{p:"Twin",name:"Fine Build",build:{regen:"0",health:"0",body:"0",bspeed:"2",pen:"7",dmg:"6",reloads:"4",speed:"2"},desc:"None"},{p:"Twin",name:"Basic Bullet",build:{regen:"4",health:"4",body:"0",bspeed:"4",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"It works for most upgrades of the twin. One point from Health regen to max health"},{p:"Twin",name:"Bullet Ram",build:{regen:"2",health:"2",body:"1",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Trades Bullet speed for movement speed, and in turn creates a bullet wall in front of the tank. Bullets move slightly faster than the tank, so they collect in a mass in front. Mainly a Defense build, as chasing opponents is hard without bullet speed. Great in Maze; It can act as a shield when going down long corridors and can create a hard to bypass wall when hiding behind a corner. Great against rammers, allowing you to escape with ease if your not cornered. Even when you are it is almost impossible for a rammer to reach your tank if you face directly at them. Not the best against Glass builds though, so watch out for that. It's also great against bullet spammers like gunners and sprayers. It has some trouble dealing with strong drones, so don't get cornered unless you can out maneuver them. Snipers aren't much of a problem if you know where they are, but an ambush can definitely cause problems. Not the best against destroyers, but can get you away in a pinch. Not the best against balanced triplets and twins, though it can still be a pretty even match. The health and regen is pretty fluid; you can change it to whatever you prefer and get similar results."},{p:"Octo Tank",name:"Octo tag",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"Intended for tag mode"},{p:"Octo Tank",name:"Heavy Boulder",build:{regen:"6",health:"7",body:"7",bspeed:"2",pen:"3",dmg:"2",reloads:"1",speed:"5"},desc:"Made by Redostonecraft, this provides a balanced build for Octo Tanks with emphasis on survivability."},{p:"Octo Tank",name:"The Hurricane",build:{regen:"0",health:"5",body:"0",bspeed:"1",pen:"7",dmg:"7",reloads:"6",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Bullet Storm",build:{regen:"2",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Octo Tank",name:"Octo Hurricane",build:{regen:"2",health:"3",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Dangerous Thunderstorm",build:{regen:"3",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"2"},desc:"None"},{p:"Octo Tank",name:"Glass Octo",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"None"},{p:"Octo Tank",name:"Hurricane Justin",build:{regen:"0",health:"5",body:"3",bspeed:"1",pen:"6",dmg:"6",reloads:"7",speed:"5"},desc:"A hurricane-style build that my friend Justin uses. Customizable, switch high bullet damage and penetration for max health and body damage for an anti-rammer that would surprise Boosters and Smashers, or put more points into penetration and damage for a glass fortress that will keep enemies out and provide nice crowd control in Teams or Domination."},{p:"Octo Tank",name:"Blizzard",build:{regen:"0",health:"0",body:"5",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Somewhat Glass Tank",build:{regen:"0",health:"5",body:"0",bspeed:"6",pen:"5",dmg:"6",reloads:"6",speed:"5"},desc:"None"},{p:"Octo Tank",name:"Hurricane",build:{regen:"5",health:"0",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"4",speed:"7"},desc:"None"},{p:"Octo Tank",name:"The Tropical Storm",build:{regen:"1",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Octo Tank",name:"OctoTrool",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"FLAREÂ´s octo tank",build:{regen:"1",health:"3",body:"0",bspeed:"1",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"if you want you can swap the health and bullet speed points around. designed for chasing down smaller tanks and creates cover in TDM modes for other players"},{p:"Octo Tank",name:"Octo Farmer",build:{regen:"0",health:"2",body:"0",bspeed:"7",pen:"4",dmg:"7",reloads:"7",speed:"6"},desc:"A (glassy) build suitable for peaceful farming of points, especially near the Pentagon Nest. Caution that confrontations are to be avoided. Suitable for use in modes with a base/safety zone, where one can flee to upon danger. Not recommended for modes where fighting against other tanks are unavoidable."},{p:"Octo Tank",name:"Rammer Hell",build:{regen:"0",health:"6",body:"5",bspeed:"3",pen:"6",dmg:"6",reloads:"6",speed:"1"},desc:"I recommend that you have one other teammate in your range if you are on 4-team, 2-team, or any other team mode, because this build doesn't guarantee protection, like everything else. If you are in any other mode though, try working up your skill for this build by battling with lvl 20-30 tanks, because this build is, again, a little hard to manage."},{p:"Octo Tank",name:"The Wall",build:{regen:"6",health:"6",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"Not very offensive, but keeps you and your teammates safe(ish)"},{p:"Octo Tank",name:"Modified Tropical Storm",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"The max bullet speed, penetration and damage + max reload makes this tank great at trapping and overwhelming opponents, while splitting the rest of the upgrades between health regen and max health makes this tank significantly less fragile than many other glass tanks. Just make sure to stay alert so you don't get ambushed."},{p:"Triple Twin",name:"Shieldrusher",build:{regen:"1",health:"3",body:"1",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Have on Autofire and rush into the enemy. They will die with the massive amounts of bullets."},{p:"Triple Twin",name:"Gunzerker",build:{regen:"2",health:"5",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"Flexible enough, can soak some damage, attack with focused fire, or defend with a hurricane or bullets."},{p:"Triple Twin",name:"Mega Killer",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Triple Twin",name:"Dangerous Thunderstorm III: The Glass Lightning",build:{regen:"4",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"4"},desc:"None"},{p:"Triple Twin",name:"Max Score",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Triple Twin",name:"Catcher",build:{regen:"2",health:"0",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Triple Twin",name:"Devilish Glass Cannon",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"7",speed:"7"},desc:"None"},{p:"Triple Twin",name:"Aquila",build:{regen:"0",health:"0",body:"1",bspeed:"4",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Triple Twin",name:"Bullet HELL",build:{regen:"1",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"4"},desc:"None"},{p:"Triple Twin",name:"Da De Destruction",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Penta Shot",name:"pentarmor",build:{regen:"0",health:"6",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"if you are good with it you are almost invincible! sacrifice bullet speed for health and you have a a powerful tank (specifically in maze) you can protect yourself with the bullet storm almost no projectile can pass it (exept destroyer branch but with the huge penta shot recoil you can dodge them easily) you can kill any rammer beacause of youre huge damage and health with this build you can easily get 500k or more"},{p:"Penta Shot",name:"Armageddon",build:{regen:"1",health:"4",body:"0",bspeed:"6",pen:"6",dmg:"7",reloads:"5",speed:"4"},desc:"Powerful CC"},{p:"Penta Shot",name:"Pressure",build:{regen:"1",health:"2",body:"1",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"While it has maxed out bullet stats, a point of movement is added when fleeing is needed. Body damage can also be dealt if rammers strike up(unlikely)."},{p:"Penta Shot",name:"FFA King of all trades",build:{regen:"1",health:"1",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Health and regeneration and fast as a rammer, a defensive tank build that can truly defend itself from most tanks in the game! Just watch out for triplets and factories! (Field tested)"},{p:"Penta Shot",name:"Bullet Slammer",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Penta Shot",name:"Glass Nightmare",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Penta Shot",name:"Dangerous Thunderstorm II",build:{regen:"3",health:"3",body:"3",bspeed:"5",pen:"7",dmg:"6",reloads:"6",speed:"0"},desc:"None"},{p:"Penta Shot",name:"Cloud",build:{regen:"2",health:"5",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Penta Shot",name:"DIE DIE DIE",build:{regen:"1",health:"2",body:"1",bspeed:"7",pen:"6",dmg:"7",reloads:"7",speed:"2"},desc:"They're dead"},{p:"Penta Shot",name:"All balanced",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"There is no escape for this if you have a Penta Shot."},{p:"Spread Shot",name:"dwagon",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"got 4 mill very OP"},{p:"Spread Shot",name:"Blitzkrieg",build:{regen:"1",health:"4",body:"0",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"Good Spread Shot build for attacking and winning quickly (as the name implies). Works best for 2 Teams, though it can still work well in 4 Teams if you make sure to team up with someone. When using this build, focus on one target at a time and make good use of guerilla tactics (e.g., sneak attacks and quick rushes). If your health goes below one third, get to safety and regen. Optionally, you can take the one point in regen and put it in bullet speed instead. though this is only recommended if you have some bullet spammers who can shield you. With the right technique, you'll be able to take on most tanks in the game. Using this build in 2 Teams, I can often get a score over 200k."},{p:"Spread Shot",name:"Max Efficiency",build:{regen:"2",health:"0",body:"3",bspeed:"5",pen:"7",dmg:"7",reloads:"6",speed:"3"},desc:"None"},{p:"Spread Shot",name:"Offensive Shield",build:{regen:"5",health:"4",body:"0",bspeed:"1",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"None"},{p:"Spread Shot",name:"Grapeshot",build:{regen:"0",health:"2",body:"3",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Spread Shot",name:"Glass Endeka",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Spread Shot",name:"Dangerous Thunderstorm: The Storm for the Midnight Moon",build:{regen:"2",health:"3",body:"2",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"1"},desc:"None"},{p:"Triplet",name:"Troll build\\rocket build",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"7",speed:"5"},desc:"when facing on a direction, the other cannons act like a thruster, so like the big version of rocketeer bullets"},{p:"Triplet",name:"EAT BULLET",build:{regen:"2",health:"4",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"5",speed:"5"},desc:"None"},{p:"Triplet",name:"spam",build:{regen:"0",health:"0",body:"0",bspeed:"5 or 7",pen:"7",dmg:"7",reloads:"7",speed:"5 or 7"},desc:"None"},{p:"Triplet",name:"Bullet Drill",build:{regen:"0",health:"0 or 1",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6 or 5"},desc:"This build pierces through Octo's and Penta's bullets wall(and Trapper class walls), with enough Movement Speed to outmaneuver their bullets and hit them hard with yours. You can also 1v1 a Destroyer-class tank and rammers with ease. Just don't get too close, run away if necessary, and remember that you can use the bullets to boost your speed to help you either chase an enemy or run away. You can also take a point from Movement Speed and put it to Max Health if you need to take out Spread Shot, Streamliner, Skimmer, or Rocketeer. Works best in Teams Game Mode with teammate who can either watch your back, or another bullet spammer who can distract the enemy. I managed to get 500k points with this build in 2 Teams! Also works in Domination."},{p:"Triplet",name:"Rammer Exterminator",build:{regen:"3",health:"2",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Triplet",name:"Glass Triceratops",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Triplet",name:"Bullet Trident",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Triplet",name:"Unstoppable",build:{regen:"1",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Triplet",name:"Reaper",build:{regen:"0",health:"4",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Triplet",name:"Bullet Wall",build:{regen:"3",health:"2",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Triplet",name:"The Survivor",build:{regen:"2",health:"2",body:"3",bspeed:"5",pen:"5",dmg:"5",reloads:"7",speed:"4"},desc:"Pretty good against Fallen Booster and for surviving"},{p:"Triplet",name:"Turret",build:{regen:"1",health:"2",body:"3",bspeed:"7",pen:"7",dmg:"6",reloads:"7",speed:"0"},desc:"The turret focuses on attacking enemies and is more of a quick defence tank. It focuses on its bullets stats."},{p:"Triplet",name:"Well Rounded",build:{regen:"4",health:"4",body:"4",bspeed:"4",pen:"4",dmg:"4",reloads:"4",speed:"4"},desc:"Well Rounded works well in FFA and Maze, due to it having decent health,\n regen, strength, and speed all at once. The last 33rd upgrade is of your choosing."},{p:"Battleship",name:"Swarmer",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Charge drone classes with autofire off, and suddenly turn autofire on. Kill others at a distance. Sorry for the terseness :)"},{p:"Battleship",name:"Glass Fume Spawner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"6"},desc:"None"},{p:"Battleship",name:"Quality Over Quantity",build:{regen:"0",health:"5",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"3",speed:"5"},desc:"None"},{p:"Battleship",name:"Gamebreaker",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Battleship",name:"Small but Deadly",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"}]},"Sniper Branch":{branch:"Sniper Branch",_builds:[{p:"Sniper",name:"Brick Wall Build",build:{regen:"7",health:"7",body:"0",bspeed:"5",pen:"0",dmg:"7",reloads:"0",speed:"7"},desc:"Health is important for survival, especially if you don't want to get killed by rammers. This build supports the damage of a sniper, the health of a rammer, and the speed of a Fighter all in one. This is good also for bullet spammer tanks like Octo Tank, Spread Shot, and Penta Shot!"},{p:"Sniper",name:"OP Sniper",build:{regen:"X",health:"X",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"X",speed:"X"},desc:"This build is meant for when you die as a level 45, as you have just the right amount of upgrades. The bullets will be small, so they don't seem dangerous, but can easily 2-shot someone who's not paying attention! Works best in Domination, as players will be distracted while they're shooting dominators. Can get you to level 45 as fast as 20 seconds!"},{p:"Sniper",name:"Glass Sniper",build:{regen:"1",health:"1",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Sniper",name:"Assault Rifle",build:{regen:"1",health:"1",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Ranger",name:"GABERRR's RGSB",build:{regen:"1",health:"1",body:"0",bspeed:"7",pen:"6",dmg:"6",reloads:"6",speed:"6"},desc:"RGSB = ranged glass sniping build. This build can dominate pretty much any Game mode other than maze Since it gets cornered too easily by rammers in the maze and isnt very viable However I've almost Topped the Leaderboard in FFA Twice with it and gotten on the leaderboard 3 times with it. The bullets are wicked fast (As to Be able to shoot Players at the edge of your FOV the ranger's Is the highest in the game so leading players from that distance is difficult Without maxed Bullet speed) and pack alot of punch meaning that if you are a talented sniper, You could potentially get your all time high score with this. Also has just enough health, regen and speed to escape any threat and usually Not get one shotted Except by Some rammers and Anhailators if you dont play smart. This build and this tank in general is not for beginners since it really isn't forgiving although the high speed and little bit of health mean that it is better than pure glass snipers"},{p:"Ranger",name:"Ranged DPS",build:{regen:"0",health:"0",body:"0",bspeed:"MAX",pen:"MAX",dmg:"MAX",reloads:"MAX",speed:"5"},desc:"Soften your enemy to make them retreat ---- or kill them . Puncture any enemy projectile except trap , drone , and destroyer class bullet. Beware of booster coming from top/bottom of your screen."},{p:"Ranger",name:"Quick Firing",build:{regen:"0",health:"1",body:"0",bspeed:"Max",pen:"2",dmg:"Max",reloads:"Max",speed:"5"},desc:"Well, this...Quick Fire Speed is well, yeah!"},{p:"Ranger",name:"Gotta Snipe âem all!",build:{regen:"3",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"6"},desc:"None"},{p:"Ranger",name:"Guerilla",build:{regen:"1",health:"1",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Ranger",name:"S.E.T.O.D (Sneaky Evil Tank of Diep.io)",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"3"},desc:"None"},{p:"Ranger",name:"Sharp Shooter",build:{regen:"1",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"1",speed:"6"},desc:"None"},{p:"Ranger",name:"You canât see me but I can see you!",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Ranger",name:"Radar Rat",build:{regen:"2",health:"2",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Stalker",name:"Troll Build",build:{regen:"0/1",health:"3/5",body:"0/2",bspeed:"6/7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Stalker",name:"Hi. Bye.",build:{regen:"0",health:"6",body:"6",bspeed:"6",pen:"5",dmg:"X",reloads:"3",speed:"0"},desc:"Build for scaring people near the pentagon nest. Avoid anything that looks like a rammer. Then, when someone comes near, ram them. If you fail or they run away but low health, remember, you can shoot."},{p:"Stalker",name:"TDM Karma Chameleon",build:{regen:"0",health:"7",body:"7",bspeed:"5",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"let's be honest, a sniper without any movement speed just isn't viable in FFA / maze, you would just get ran over by factories. However, In TDM this build works like a charm. it is essentially a bolt action sniper (No reload but maxed out bullet penn / damage) combined with an anti ram build (Maxed health / regen). You dont have to stay too close to your base but Id reccomend not venturing too far past the halfway mark unless your team is raiding since your mobility sucks. However, it does the 2 things that stalker does best - picks off low health passerby's with its bullets and acts as a landmine so you can do both. Play this build a few times before giving up on it since it takes some getting used to and knowing when and when not to lean into a rammer's ram since if you dont lean into a rammers ram, they will get away but if you lean into any smasher branch's ram youll die. generally, you can lean into a booster / ram build annihilators ram. Retreat back to base after kills / low health when you can since rammers remember your position and zoom back to take you out."},{p:"Stalker",name:"Snipreme",build:{regen:"3",health:"6",body:"3",bspeed:"6",pen:"6",dmg:"6",reloads:"0",speed:"3"},desc:"Sneak into enemies and attack with a bit of body damage!"},{p:"Stalker",name:"Claymore Directional Mine",build:{regen:"7",health:"7",body:"7",bspeed:"1",pen:"4",dmg:"0",reloads:"0",speed:"7"},desc:"Boost and ram, or hide like a Landmine. Bullet speed and penetration is to make it seem more like an orthodox sniper. Or you can place some of the points from bullet speed and penetration into reload and zoom around a bit more."},{p:"Stalker",name:"Surprise Attack!",build:{regen:"3",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Stalker",name:"Ghost",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"5",dmg:"0",reloads:"0",speed:"7"},desc:"None"},{p:"Stalker",name:"Sneaky",build:{regen:"7",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"3",speed:"0"},desc:"None"},{p:"Predator",name:"The Real Sniper",build:{regen:"7",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"3",speed:"0"},desc:"None"},{p:"Predator",name:"The Shotgun",build:{regen:"1",health:"7",body:"0",bspeed:"7",pen:"7",dmg:"6",reloads:"5",speed:"0"},desc:"None"},{p:"Predator",name:"Balanced Bolt-Action Sniper",build:{regen:"4",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"4"},desc:"None"},{p:"Predator",name:"MLG Triple-Quickscoper",build:{regen:"0",health:"1",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Streamliner",name:"The Streamliner",build:{regen:"3",health:"MAX",body:"6",bspeed:"2",pen:"3",dmg:"MAX",reloads:"3",speed:"2"},desc:"The perfect build for a streamliner. Works best in gamemodes like 2 teams, and domination."},{p:"Streamliner",name:"AmongUsImposter's Streamliner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"7",reloads:"7",speed:"6"},desc:"This build is designed for placing maximum damage to any far away tanks you see. Be especially cautious of rammers getting too close and overseer/overlord drones. This tank is most effective in far distance combat, making it a substantial threat in domination."},{p:"Streamliner",name:'"Security, Sweep the area!"',build:{regen:"2",health:"3",body:"3",bspeed:"6",pen:"4",dmg:"5",reloads:"6",speed:"4"},desc:"Made by ÐÐ°ÑÑÐµÑ. This can be used to sweep the area to avoid pesky Stalkers in Domination mode."},{p:"Streamliner",name:"Bullet Whip",build:{regen:"0",health:"0",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Streamliner",name:"Dominator Dominator",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"6",speed:"7"},desc:"Commonly used by Î Ïmaniac in Domination mode. Works well alongside offensive Skimmer and Penta Shot builds. Max speed is used for evading the bullets of Destroyer and Gunner Dominators, as well as weaving in-between masses of bullets and outplaying Smasher-branch tanks that would normally spell death for the Streamliner."},{p:"Streamliner",name:"Get Dunked On",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Streamliner",name:"Gatling Gun",build:{regen:"1",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"6",reloads:"6",speed:"5"},desc:"A build for taking down the Fallen Booster, use your movement speed to move faster than the boss and fire high damage bullets at it. You trade one point from reload and bullet damage and two points from bullet speed for health stats to have better armor in case you get damaged during the fight. This build is not just for killing the Fallen Booster, you may also stand a chance against the Guardian if you are skilled enough. Be careful when moving forward as that will slow down your bullet speed."},{p:"Streamliner",name:"Mobile Laser",build:{regen:"1",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"4"},desc:"None"},{p:"Streamliner",name:"Stun Gun",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"2"},desc:"None"},{p:"Streamliner",name:"Xtremely Powerful",build:{regen:"4",health:"5",body:"0",bspeed:"6",pen:"6",dmg:"6",reloads:"6",speed:"0"},desc:"None"},{p:"Streamliner",name:"Avada Kedavra",build:{regen:"1",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"5"},desc:"None"},{p:"Streamliner",name:"Efficient Survivor",build:{regen:"0",health:"0",body:"5",bspeed:"6",pen:"6",dmg:"6",reloads:"6",speed:"4"},desc:"None"},{p:"Overlord",name:"Mighty",build:{regen:"0",health:"5",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"4",speed:"7"},desc:"This build has health and good bullets. Survive and shoot."},{p:"Overlord",name:"yeet",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"5",reloads:"7",speed:"X"},desc:"used for overlord and is very effective to rammers"},{p:"Overlord",name:"ÐÐ°ÑÑÐµÑ's Overlord Build",build:{regen:"3",health:"3",body:"3",bspeed:"5",pen:"5",dmg:"5",reloads:"5",speed:"4"},desc:"Overlords are useful for PvP. Use this as your advantage!"},{p:"Overlord",name:"Hybrid Power",build:{regen:"0",health:"6",body:"6",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"With this build, you will never have to worry about the common Overlord's greatest enemy, rammers. In fact, you can probably take out most rammers with half health. Works best in tdm, because you can retreat to base to regen."},{p:"Overlord",name:"Overdude",build:{regen:"3",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"5"},desc:"None"},{p:"Overlord",name:"That one 1M Overlord",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"This build has fast high damage drones and movement speed to pursue your opponents. With good HP and speed, this build not only kills but survives."},{p:"Overlord",name:"Overlord Killer",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"A build meant specifically for killing Overlords and/or Any glass build tanks and playing in Maze Mode. It's only real weakness is rammers, due to kinda low movement speed."},{p:"Overlord",name:"OverPro",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"A build you can use as overlord to be the best and get #1"},{p:"Overlord",name:"The Milestoner",build:{regen:"0",health:"2",body:"3",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Overlord",name:"4TDM Killer",build:{regen:"0",health:"2",body:"3",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"I have 3 body damage, because it increase your chance to defeat a rammer, because you have small body damage and it decreases oponentÂ´s bullet damage. I had with this build in 30 min 260k"},{p:"Overlord",name:"The blind overseer/overlord",build:{regen:"7",health:"7",body:"7",bspeed:"5",pen:"0",dmg:"0",reloads:"0",speed:"7"},desc:"Because of your fast drones, players might think that you are glass, so they either run or ram, but you are a fast, rapid rammer, so go and ram them and feel the victory as you trick your best friend into thinking you are a glass."},{p:"Overlord",name:"Max Power of Overlord",build:{regen:"4",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"4"},desc:"None"},{p:"Overlord",name:"God of Deathly Fleets",build:{regen:"1",health:"1",body:"3",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Overlord",name:"Anti-This",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Overlord",name:"Killer Tank",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"3",speed:"5"},desc:"None"},{p:"Overlord",name:"Imperial Killer",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Overlord",name:"Craigâs Overlord",build:{regen:"4",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"4"},desc:"A strong all around Overlord, my best is 480k."},{p:"Overlord",name:"Exterminator s",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Overlord",name:"Anti-Rammer",build:{regen:"0",health:"6",body:"6",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"None"},{p:"Overlord",name:"The Team Player",build:{regen:"3",health:"3",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"4"},desc:"A great all-round overseer. Stay away from Bullet Slammers and Bullet Spammers. - TekkerGods"},{p:"Overlord",name:"Sith Emperor",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"2",speed:"5"},desc:"Hunt down your opponents with this tank and kill them. Kill them now. Dew it."},{p:"Overlord",name:"Speed Leveler",build:{regen:"1",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"6",reloads:"2",speed:"5"},desc:"Great for leveling. Grab 1 point of damage, max speed, max penetration then bullet speed. Grab 1 level in regen, finish off damage then dump the rest into health."},{p:"Overlord",name:"The Mill",build:{regen:"3",health:"1",body:"1",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"I have gotten three 1,000,000+ scores with this build!"},{p:"Overlord",name:"Best build according to overlord",build:{regen:"1",health:"1",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"Since overlords depends all on its drones, you can use this build to make the drones have the full capability to both attack and defend yourself. You must add at least 3 skill points for movement speed for both farming and escaping/dodging fast rammers. Hope you will like and enjoy my build!!!"},{p:"Overlord",name:"Rammers will fear u",build:{regen:"5",health:"7",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"It's good to destroy a maxed rammer booster, and its good to rid you of battleships"},{p:"Overlord",name:"Speed and Power Overlord",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"Speed is essential. So is power. But we want to kill as many tanks in a short time as possible, so health regen is important."},{p:"Overlord",name:"The Ripper",build:{regen:"2",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"Just my personal build. I use this one a lot. What'd ya think?"},{p:"Overlord",name:"Super Anti-Rammers",build:{regen:"0",health:"4",body:"5",bspeed:"6",pen:"6",dmg:"6",reloads:"0",speed:"6"},desc:"This Build Is like anti-Rammers but you sacrifice a few points on Speed, Penetration, Damage, Max Health and body Damage for six points on movement speed. But please, Try it before you judge it."},{p:"Overlord",name:"Troll Lord",build:{regen:"2",health:"7",body:"7",bspeed:"7",pen:"5",dmg:"5",reloads:"0",speed:"0"},desc:"This thing is crazy! When rammers try to ram you, use your drones to lower its health then go broke for it, if it's glass cannon you're facing, ram them or do the same process"},{p:"Overlord",name:"Two is enough",build:{regen:"1",health:"1",body:"1",bspeed:"7",pen:"7",dmg:"7",reloads:"2",speed:"7"},desc:"Very well-balanced!"},{p:"Overlord",name:"Well Rounded Overlord",build:{regen:"0",health:"2",body:"3",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Overlord",name:"Death",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"This build has good regen so it survives longer. It's for any tank, really, but I prefer Overlord with it"},{p:"Overlord",name:"Death",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"This build has good regen so it survives longer. It's for any tank, really, but I prefer Overlord with it."},{p:"Overlord",name:"Beatdown",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"7",reloads:"6",speed:"7"},desc:"This is used for targeting all kinds of tanks. Be careful of Boosters and high skill Smashers."},{p:"Manager",name:"Invisible Surprise",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"1",reloads:"3",speed:"7"},desc:"None"},{p:"Manager",name:"The REAL diepio Manager",build:{regen:"1",health:"6",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"5"},desc:"None"},{p:"Manager",name:"LEGO Movie Micro-Manager",build:{regen:"0",health:"7",body:"5",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"None"},{p:"Manager",name:"Sidestriker",build:{regen:"3",health:"0",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Manager",name:"Anti-rammer troll",build:{regen:"0",health:"6",body:"6",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"This build is designed for TDM, as you can troll by sending your drones out purposely too far, to bait somewhat low health rammers in, and ram them. However, another idea is to max out health and body damage, but bullet speed/damage is 6."},{p:"Necromancer",name:"Kaboom!",build:{regen:"5",health:"X",body:"X",bspeed:"5",pen:"2",dmg:"X",reloads:"0",speed:"0"},desc:"It looks like a normal necromancer. Run from ranged tanks, when you see a rammer, use the squares to deal small damage, and then ram them. Works well against destroyer rammers."},{p:"Necromancer",name:"Fallen Necromancer",build:{regen:"1",health:"5",body:"5",bspeed:"5",pen:"X",dmg:"X",reloads:"3",speed:"0"},desc:"This necromancer has become necro. (bad pun) Fool your enemies with this hybrid build."},{p:"Necromancer",name:"Sauronâs Successor",build:{regen:"0",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"4"},desc:"Ursuulâs preferred Necromancer Build. It allows for sufficient offensive maneuverability as well as having extra points left over for comfortable health padding."},{p:"Necromancer",name:"Anookuâs Improved Build",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Necromancer",name:"Square Swarm",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Necromancer",name:"Revenge",build:{regen:"3",health:"4",body:"0",bspeed:"6",pen:"6",dmg:"6",reloads:"6",speed:"0"},desc:"3/4/0/6/6/6/6/0 (+2 left over)"},{p:"Necromancer",name:"Anookuâs Build",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"None"},{p:"Necromancer",name:"Fragile but Untouchable",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Necromancer",name:"Evil Entity",build:{regen:"0",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"3"},desc:"None"},{p:"Necromancer",name:"Anookuâs Balanced Build",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"6"},desc:"A very good overall build that balances Movement Speed and Reload. Despite the lack of Max Health and Health Regen, it allows you to chase prey as well as run away from dangerous tanks due to the movement speed. This build also comes with 34 solid drones, which is more than most Necromancers have. Very useful for offense, and with so many drones, also has decent defense."},{p:"Necromancer",name:"OP Necromancer",build:{regen:"4",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"3"},desc:"Powerful, strong Necromancer build with high health and damage."},{p:"Necromancer",name:"Rougemancer",build:{regen:"3",health:"3",body:"0",bspeed:"X",pen:"3",dmg:"X",reloads:"X",speed:"X"},desc:"None"},{p:"Battleship",name:"Baller's Battleship",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"The favorite Battleship build of its best player, Baller Factory."},{p:"Battleship",name:"Swarmer",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Charge drone classes with autofire off, and suddenly turn autofire on. Kill others at a distance. Sorry for the terseness :)"},{p:"Battleship",name:"Glass Fume Spawner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"6"},desc:"None"},{p:"Battleship",name:"Quality Over Quantity",build:{regen:"0",health:"5",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"3",speed:"5"},desc:"None"},{p:"Battleship",name:"Gamebreaker",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Battleship",name:"Small but Deadly",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Factory",name:"Wall of invincibility",build:{regen:"2",health:"3",body:"0",bspeed:"5",pen:"6",dmg:"7",reloads:"6",speed:"4"},desc:"Have the gun drones shoot in front of you. Make sure they are always in front of you. They will act as a wall against incoming foes. It is wise this strategy is used in a team because the factory does not have a personal turret."},{p:"Factory",name:"Drone Storm",build:{regen:"2",health:"3",body:"2",bspeed:"7",pen:"4",dmg:"4",reloads:"7",speed:"4"},desc:"None"},{p:"Factory",name:"Universal Domination",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"This is a great build for any Factory. It focuses on using your drones to protect yourself while also having a health backup."},{p:"Factory",name:"Glass Canon",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"None"},{p:"Factory",name:"The Perfect Counter",build:{regen:"0",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"3"},desc:"None"},{p:"Factory",name:"Shooting Star of Death",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Factory",name:"Minion Master",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Factory",name:"Anti - Anti Rammer",build:{regen:"4",health:"4",body:"6",bspeed:"6",pen:"5",dmg:"5",reloads:"2",speed:"0"},desc:'Opposing both team "rammer" and "anti rammer". If you hate both.'},{p:"Factory",name:"Bad Company",build:{regen:"0",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"4",speed:"7"},desc:"If you enjoy Factory, you're going to like Bad Company. Bad Company is a great alternative to the Glass Cannon. The lower drone speed and reload makes up for in survivability. It is easy for beginners and has an awesome name. Even professional Diep.io players would enjoy this build. :D"},{p:"Factory",name:"Bang Boom Slam",build:{regen:"5",health:"7",body:"6",bspeed:"7",pen:"3",dmg:"0",reloads:"0",speed:"5"},desc:"This build is good for trolling. You look like a bullet spammer, but when the opponent gets close, you ram them and they die, unless this opponent is a smasher."},{p:"Tri-Trapper",name:"Wall-Builder",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"In a Team-Based game mode, this tank can be used to get behind slower tanks to set up walls to prevent retreat. The high Bullet Speed is important for allow you to keep your distance since this is a glass-cannon type of build."},{p:"Tri-Trapper",name:"anti-rammer",build:{regen:"3",health:"7",body:"7",bspeed:"0",pen:"x",dmg:"7",reloads:"x",speed:"0"},desc:"None"},{p:"Tri-Trapper",name:"Defensive Support",build:{regen:"0",health:"7",body:"0",bspeed:"4",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Tri-Trapper",name:"Regenerating fortress",build:{regen:"7",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"Traps are close together with 0 bullet speed, and should regenerate the few bullets that slip through."},{p:"Tri-Trapper",name:"Ultimate Defense",build:{regen:"5",health:"7",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Tri-Trapper",name:"Hive queen",build:{regen:"0",health:"4",body:"4",bspeed:"4",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"let the tanks hide in your hive, but don't let it alone! It's easy to create hive, just press C+E"},{p:"Tri-Trapper",name:"Paladin",build:{regen:"4",health:"4",body:"0",bspeed:"4",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"perfect shield size for protecting teammates with out weakening the shield too much, and is able to soak up a couple hits that break through."},{p:"Tri-Trapper",name:"Safe Haven",build:{regen:"6",health:"6",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"A Fortress/Safe Haven with Balanced Health/Regen"},{p:"Gunner Trapper",name:"Glass Double Pinner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Gunner Trapper",name:"Bunker",build:{regen:"2",health:"5",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Gunner Trapper",name:"BB Gun",build:{regen:"2",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"6",speed:"2"},desc:"None"},{p:"Gunner Trapper",name:"Pulverizer",build:{regen:"0",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Mega Trapper",name:"Ultra Trapper",build:{regen:"0",health:"5",body:"5",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"2"},desc:"This is an anti-ram build for the Mega Trapper. In addition to the traps you lay, you also lay a trap for anyone who dares to touch you."},{p:"Mega Trapper",name:"Great Wall of China",build:{regen:"4",health:"1",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Mega Trapper",name:"Glass Setter",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"Just cut off any players with your humongous traps, also, this is great protection."},{p:"Mega Trapper",name:"Get Close and u Dead!",build:{regen:"0",health:"2",body:"3",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"None"},{p:"Auto Trapper",name:"Slow & steady gets the kill",build:{regen:"2",health:"5",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:'Very slow but can definitely hold its own defensively against almost every other tank in the game. on maze, this is known as "the bunker build" since you can essentially barricade yourself in a dead end and survive almost indefinitely unless a team of like 4 tanks decide to take you on. In TDM, can hold the middle of the map very well and in FFA, Pretty okay as well'},{p:"Auto Trapper",name:"Temporary Team Base",build:{regen:"5",health:"5",body:"0",bspeed:"5",pen:"6",dmg:"5",reloads:"7",speed:"0"},desc:"During Team-based gamemodes, your teammates will often be on the verge of death. This is where you come in. You have a wall of traps set up to absorb enemy fire, your turret can locate enemies while they come close, alerting your teammates inside the fortress to fire away. High health is crutial to making sure the fortress stays up."},{p:"Auto Trapper",name:"Wall Turret",build:{regen:"1",health:"1",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Auto Trapper",name:"Fortress",build:{regen:"5",health:"7",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Auto Trapper",name:"Defensive Blaster",build:{regen:"3",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"It will kill rammers and bullet spammers easily!"},{p:"Overtrapper",name:"Shame On You!",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"5",speed:"7"},desc:"This build may seem ridiculous, and it is. Itâs meant to inflict confusion, paranoia, and utter terror on its prey, and the greatest of disgraces among its victims for getting rammed by an Overtrapper."},{p:"Overtrapper",name:"Easy Overtrapper",build:{regen:"1",health:"2",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:'By "Easy", it doesn\'t mean easy to kill, it means Easy to Use. Try it and see for yourself, is it an easy to use build?'},{p:"Overtrapper",name:"Base Overtrapper",build:{regen:"2",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"This Build is especially good in game modes with teams, as it can place traps quickly and defend the area with the drones."},{p:"Overtrapper",name:"The REAL Trapper",build:{regen:"1",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"None"},{p:"Overtrapper",name:"The Weird Trapper",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"4",speed:"4"},desc:"This build gives great mobility, excellent bullet damage and speed, as well as some health boosts."}]},"Machine Gun Branch":{branch:"Machine Gun Branch",_builds:[{p:"Machine Gun",name:"heal glass",build:{regen:"5",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"Good for tanks that shoot a lot."},{p:"Machine Gun",name:"Supa Fast Machine Gun",build:{regen:"1",health:"1",body:"1",bspeed:"7",pen:"2",dmg:"7",reloads:"7",speed:"7"},desc:"You can go very fast with this setup!"},{p:"Machine Gun",name:"Glass Machine Gun",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Machine Gun",name:"Barrage",build:{regen:"3",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Machine Gun",name:"Alt Glass Machine Gun (With More hp)",build:{regen:"0",health:"4",body:"0",bspeed:"5",pen:"6",dmg:"6",reloads:"6",speed:"6"},desc:"Benefits More Hp but decreases Bullet Speed, Penetration, Damage by a bit, This is only for Dodgers, Also you can do 0/3/0/6/6/6/6/6, Be careful of Landmines, stalkers and managers (if with High Body damage and Max Health) and dont be off guard Because Destroyer Branch can Kill you."},{p:"Destroyer",name:"destroyer",build:{regen:"4",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"5"},desc:"None"},{p:"Destroyer",name:"Jelly Fish",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"5",speed:"7"},desc:"None"},{p:"Hybrid",name:'GABERRR\'s Balanced "Nirvana" hybrid build',build:{regen:"0",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"4",speed:"4"},desc:"Enough health and movement speed to sneak up on your bullet spamming prey while not worrying about taking a few hits, enough reload to get 2 shots at an enemy instead of one, maxed out bullet speed, damage and penetration to maximize the amount of tanks you can 1 shot, enough health to survive a Sniper long enough to make it back to base in TDM or make it to a hiding spot to regen in maze, This build truly has it all and is perfect for beginners who usually die when trying glass cannon hybrid, As well as more intermediate players who have trouble aiming and hitting targets consistently. Works best in 4TDM / 2 TDM but also works in maze; And keep in mind that you just need to make the first shot you get on a glass overlord count or else they will overpower you. but if u make the first shot your good ;). I like hybrid more than annihilator personally since although the bullet is weaker and the drones are too weak to Kill enemies most times, They do a very good job of preventing crashers from hitting you meaning that you can stick around the middle of the map Where you are most likely to find your bullet spamming prey without having to 1) put points into health regen, the most overrated stat in the game, 2) go back to base to regenerate health more often and 3) Have to spend half the game fighting off crashers with your big bullet and giving away your strategic position every time you shoot it (Although ur drones will give away your strategic position occasionally, they are much less likely to do so than a GIGANTIC BULLET)"},{p:"Hybrid",name:"DeathBringer",build:{regen:"1",health:"6",body:"6",bspeed:"4",pen:"4",dmg:"6",reloads:"0",speed:"6"},desc:"Sneaky and powerful, one-shot your enemies and has protective drones!"},{p:"Hybrid",name:"Anti Rammer Hybrid",build:{regen:"0",health:"7",body:"7",bspeed:"7",pen:"6",dmg:"6",reloads:"0",speed:"0"},desc:"Will destroy anybody who runs into you. You can 1 shot people. Best in 4TDM."},{p:"Hybrid",name:"Balanced",build:{regen:"0",health:"3",body:"5",bspeed:"7",pen:"6",dmg:"5",reloads:"0",speed:"7"},desc:"With Bullet Penetration and Bullet damage, you one-shot level 45 tanks with 7 points in health. Having 5 body damage halves damage done to you by bullets and allows you to use you recoil to ram others. This build is a representation of its name Hybrid; You can shoot and you can ram. It is recommended to flee when you are low on health due to this tank's lack of health regen."},{p:"Hybrid",name:"Penta Hunter",build:{regen:"0",health:"3",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"This is a build to kill the Penta Shot. Note: You could also fight other bullet spammers with this build."},{p:"Hybrid",name:"Difficult but powerful",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Hybrid",name:"Glass 0800",build:{regen:"2",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"6"},desc:"None"},{p:"Hybrid",name:"Middle Roman Conqueror",build:{regen:"3",health:"5",body:"1",bspeed:"6",pen:"7",dmg:"7",reloads:"2",speed:"2"},desc:"None"},{p:"Hybrid",name:"0800 Hybrid",build:{regen:"3",health:"2",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"4",speed:"4"},desc:"None"},{p:"Hybrid",name:"Anti-Rammer Tank",build:{regen:"0",health:"6",body:"7",bspeed:"7",pen:"7",dmg:"6",reloads:"0",speed:"0"},desc:"Use build 0/6/7/5/7/6/2/0 if you want more reload."},{p:"Hybrid",name:"AntiRed",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Hybrid",name:"Confusing the Boosters",build:{regen:"0",health:"7",body:"7",bspeed:"0",pen:"6",dmg:"6",reloads:"0",speed:"7"},desc:"None"},{p:"Hybrid",name:"Lagbreakerâs build",build:{regen:"3",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"6",reloads:"4",speed:"7"},desc:"None"},{p:"Hybrid",name:"EASY KILL",build:{regen:"0",health:"3",body:"4",bspeed:"7",pen:"7",dmg:"6",reloads:"5",speed:"1"},desc:"None"},{p:"Hybrid",name:"Lightning Bruiser",build:{regen:"1",health:"7",body:"7",bspeed:"4",pen:"7",dmg:"7",reloads:"0",speed:"0"},desc:"Able to do everything. Tanky, offensive, rammer, and speedy with its recoil"},{p:"Hybrid",name:"Rammer Destroyer",build:{regen:"1",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"Tank made for beating Rammers"},{p:"Hybrid",name:"The Hybrid Emperor",build:{regen:"2",health:"6",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"2"},desc:"None"},{p:"Hybrid",name:"a round fellow Classic: Hybrid",build:{regen:"3",health:"6",body:"0",bspeed:"6",pen:"6",dmg:"6",reloads:"0",speed:"6"},desc:"A versatile, flexible build for guerilla-style survival purposes!"},{p:"Annihilator",name:"TinyGrub's Annihilator",build:{regen:"1",health:"1",body:"1",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"4"},desc:"Aim and fire you bullets. I made it so that there's room for mistakes, due to high reload. You can one-shot almost anything. Anything that doesn't get one shot will die due to reload."},{p:"Annihilator",name:"Aggressive",build:{regen:"0",health:"1",body:"2",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"Movement speed and max reload make the tank fast enough to avoid drones in most situations. Max health and body damage make you durable enough to survive and provide some protection against rammers that try to charge you despite your bullets. Best in team game modes where you can retreat to regen. If you don't get cornered and are skilled enough at maneuvering, there are very few tanks that can kill you before you either kill them or get away."},{p:"Annihilator",name:"Rammer Troller Build",build:{regen:"0",health:"7",body:"7",bspeed:"0",pen:"6",dmg:"6",reloads:"0",speed:"7"},desc:"When rammers get close, shoot them and run into them. They will die. NOTICE: Only use bullet against rammers! Use ramming against bullet tanks!"},{p:"Annihilator",name:"Overlord Troll",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"6",reloads:"7",speed:"7"},desc:"Troll overlords. When they send their drones out to attack you, boost into the overlord's face and shoot it."},{p:"Annihilator",name:"Hybrid Annihilator",build:{regen:"1",health:"5",body:"5",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"The Hybrid Annihilator is an Annihilator build that allows for versatility in the battlefield along with high health stats, quick regeneration, basic ramming capabilities, and absorbing 50% of damage from all projectiles."},{p:"Annihilator",name:"Double Hitter",build:{regen:"0",health:"7",body:"7",bspeed:"0",pen:"7",dmg:"7",reloads:"5",speed:"0"},desc:"The point is: You can both ram AND shoot to kill. If someone sees your deadly bullet, then they try to ram you, but you kill them and the other way around."},{p:"Annihilator",name:"Reversed ramming",build:{regen:"0",health:"5",body:"2",bspeed:"1",pen:"6",dmg:"5",reloads:"7",speed:"7"},desc:"This takes alot of practice to master and it may not even work, but you have to make people think you are a ram anni because if they do, they dont care about getting hit by your bullets. Damage and penetration often 1/2 shots tanks"},{p:"Annihilator",name:"big boy",build:{regen:"0",health:"7",body:"5",bspeed:"0",pen:"7",dmg:"7",reloads:"0",speed:"7"},desc:"a tank based on HOI4"},{p:"Annihilator",name:"Invincible Cannon",build:{regen:"0",health:"7",body:"2",bspeed:"5",pen:"7",dmg:"7",reloads:"5",speed:"0"},desc:"None"},{p:"Annihilator",name:"Rammer (Annihilator)",build:{regen:"5",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"7",speed:"7"},desc:"None"},{p:"Annihilator",name:"The Magic Shot",build:{regen:"4",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"4",speed:"0"},desc:"None"},{p:"Annihilator",name:"ULTRA BUILD (Chicago style)",build:{regen:"0",health:"5",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Annihilator",name:"Silent Murderer",build:{regen:"1",health:"5",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"0"},desc:"None"},{p:"Annihilator",name:"Terminator",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"All-out offense with decently high mobility."},{p:"Annihilator",name:"One Shot",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Annihilator",name:"The Power of NEO",build:{regen:"3",health:"5",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"6",speed:"0"},desc:"The power of NEO, Design B"},{p:"Annihilator",name:"Defender",build:{regen:"0",health:"7",body:"7",bspeed:"7",pen:"6",dmg:"6",reloads:"0",speed:"0"},desc:"Good foram and cannon"},{p:"Annihilator",name:"a round fellow Classic: Hybrid",build:{regen:"3",health:"6",body:"0",bspeed:"6",pen:"6",dmg:"6",reloads:"0",speed:"6"},desc:"A versatile, flexible build for guerilla-style survival purposes!"},{p:"Skimmer",name:"Health skimmer",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:'Chase after people with auto fire on. For stealth, turn auto fire off. 1 - shot kill lvl 40s or below. Use propulsion bullets to "skim" their health.'},{p:"Skimmer",name:"R.P.G",build:{regen:"5",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"None"},{p:"Skimmer",name:"Multiple Launch Rocket System",build:{regen:"0",health:"2",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Skimmer",name:"One shot Kill",build:{regen:"0",health:"3",body:"3",bspeed:"1",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Gunner",name:"Weakling",build:{regen:"3",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"6",reloads:"7",speed:"0"},desc:"None"},{p:"Sprayer",name:"Advanced Pursuit",build:{regen:"2",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"6",speed:"3"},desc:"None"},{p:"Sprayer",name:"Anti-Melee",build:{regen:"3",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"Can completely repel all melee builds, but is weak against drone classes."},{p:"Sprayer",name:"Fragile Bullet Spammer",build:{regen:"3",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Sprayer",name:"Bullet Diffusion System 9000",build:{regen:"0",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Sprayer",name:"Glass Machinery",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"None"},{p:"Sprayer",name:"Go Away",build:{regen:"1",health:"3",body:"0",bspeed:"7",pen:"7",dmg:"6",reloads:"7",speed:"2"},desc:"None"},{p:"Auto Gunner",name:"Tracker",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"6"},desc:"The build allows you to track your enemies down (the Auto Turret shows tanks that are off-screen) and kill them easily. As a Gunner, it still has its weakness: low penetration. Thatâs why you should avoid the Twin branch (except if they are low on health). Surprisingly, you can out-trade Destroyers and Hybrids, both the bullet damage ones and the rammer ones. Other tank types should be no problem because of your speed and bullet rain. Itâs recommend to stay with Machine Gun until level 45 but you can go Gunner at level 30. Useful in all game modes but best in FFA."},{p:"Auto Gunner",name:"OK KO",build:{regen:"4",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Auto Gunner",name:"Minigunner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Rocketeer",name:"Defensive Rocketeer",build:{regen:"0",health:"3",body:"2",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"This build is for anyone who dies early with Rocketeer because of rammers, high FOV tanks, teamers, etc. Regen isn't necessary, as it's not that important. Max health and body damage get 5 points just for a little backup if rammers get by you. 0 bullet speed because Rocketeer's bullets are fast enough anyway, and those 7 points are better off somewhere else. Damage and penetration get 7 points each, so when you hit other tanks you can provide maximum damage (even though Rocketeer does a lot of damage already, it's deadly with the extra penetration and damage). 7 points into reload so you can provide maximum bullets to increase your chance of hitting the tank, and possibly overwhelming them to the point where they retreat. 7 points into movement speed for dodging bullets, retreating quickly (very rarely happens with Rockeeer, though), and dodging rammers. This build is a defensive build, so don't expect to go on a killing streak with this build."},{p:"Rocketeer",name:"Anti-Overlord/Defensive Rocketeer",build:{regen:"0",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"This build is for anyone who hates the always getting killed by Overseers/Overlords. *Note this build is only for Rocketeer*. You don't need health regen, body damage, or regen for this build. I also left bullet speed out because Rocketeer already has fast bullets, so adding speed is unnecessary. Damage and penetration are maxed so Rocketeer can do maximum damage when hitting other tanks (especially overlords). Movement Speed is necessary as overlords have good FOV, so you can somewhat dodge the drones and hit the overlord when the drones aren't there to protect it. Reload is also necessary because you need to get the maximum amount of \"bullets\" going the tank's way. I also put the extra 5 in max health because the other categories were not necessary to put the 5 points in. I hope you like this build, because it works for me when I play with Rocketeer."},{p:"Rocketeer",name:"Rocket Man (Cloak's Build)",build:{regen:"4",health:"6",body:"1",bspeed:"0",pen:"5",dmg:"5",reloads:"7",speed:"5"},desc:"Max reload affects rocket bullet output, so you won't need bullet speed with max reload! Spam those rockets like mad and destroy those forsaken spammers once and for all. An absolute beast in 2 Teams and Domination, but the Overlord will shut you down every single time.\nMachine Gun upgrade excellent for farming, upgrade to Destroyer situationally (for mobility, anti-rammer, offense, attack Dominators, Alpha Pentagon) because terrible for farming. upgrade to Rocketeer ASAP.\nSuggested stat point upgrading: [6]x3, [5]x4, [7]x7, [8]x5, [2]x2, [6]x2, [5]x1, [1]x2, [2]x1, [1]x2, [3]x1.\nWeakness: overwhelm drones and dodgy tanks.\n\nUpdate: Removed some Move Speed in favor of Regen, because being robust favored over dodging. Relocated one point from Max HP to Body Dam for damage reduction; very effective with higher Regen stat."},{p:"Rocketeer",name:"Poppyâs Build",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"This is a build that targets Overseer, Trapper and Triple Shot upgrades. To counter the innate weakness against rammers, movement speed is maxed. I advise you to use it in team-oriented modes. Stay away from Rangers and Predators."},{p:"Rocketeer",name:"Jackal's 1 Mil Rocketeer Build",build:{regen:"0",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"I managed to get 1 Mil points using this build on 4 Teams. Pairs Best with an Octo Tank."},{p:"Rocketeer",name:"Launcher",build:{regen:"4",health:"4",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"4"},desc:"Fire powerful shots with max reload, Bullet speed not required."},{p:"Rocketeer",name:"The Real Rocket",build:{regen:"0",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Just kill everyone"}]},"Flank Guard Branch":{branch:"Flank Guard Branch",_builds:[{p:"Flank Guard",name:"Brick Wall Build",build:{regen:"7",health:"7",body:"0",bspeed:"5",pen:"0",dmg:"7",reloads:"0",speed:"7"},desc:"Health is important for survival, especially if you don't want to get killed by rammers. This build supports the damage of a sniper, the health of a rammer, and the speed of a Fighter all in one. This is good also for bullet spammer tanks like Octo Tank, Spread Shot, and Penta Shot!"},{p:"Flank Guard",name:"The Troll Build",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"5",speed:"7"},desc:"None"},{p:"Flank Guard",name:"TINA KILLA",build:{regen:"7",health:"2",body:"0",bspeed:"6",pen:"6",dmg:"6",reloads:"6",speed:"0"},desc:"None"},{p:"Tri-Angle",name:"Fast Child",build:{regen:"3",health:"2",body:"0",bspeed:"MAX",pen:"MAX",dmg:"MAX",reloads:"MAX",speed:"0"},desc:"None"},{p:"Tri-Angle",name:"Tri-Angles ONLY",build:{regen:"2",health:"3",body:"0",bspeed:"4",pen:"MAX",dmg:"MAX",reloads:"MAX",speed:"3"},desc:"A good build for bullet tri-angle branch."},{p:"Tri-Angle",name:"Maze Cop",build:{regen:"3",health:"7",body:"0",bspeed:"7",pen:"2",dmg:"2",reloads:"5",speed:"7"},desc:"wanna be strict but on the laws side on diep.io? well go and use this teamer and witch hunter killing build\nUse health regen to repair yourself\nUse max health to be a idestructible piece of machinery\nUse bullet speed to attack far away enemies\nUse bullet penetration to attack multiple things at once!!\nUse bullet damage to have really dangerous bullets!!!!!!!\nUse reload to quickly fire a wave of bullets at enemies\nUse movement speed to move at enimies quick and escape deadly multiboxers"},{p:"Tri-Angle",name:"Dragon Rammer",build:{regen:"0",health:"7",body:"5",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"If played right able to kill some spammers and able to kill Overlord Drones. I usually use it and end up on Leaderboard but lack of speed will allow spammers and drones to hit you when on low health so my advice is to build up some builds in the front let the bullet count their attacks and ram them but shoot down health while maintaining a close distance"},{p:"Tri-Angle",name:"Speedy Rammer",build:{regen:"5",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"7",speed:"7"},desc:"None"},{p:"Tri-Angle",name:"Go Home Booster, Youâre Drunk",build:{regen:"0",health:"7",body:"7",bspeed:"0",pen:"3",dmg:"2",reloads:"7",speed:"7"},desc:"None"},{p:"Auto 5",name:"GABERRR'S Counter ram auto 5",build:{regen:"2",health:"7<",body:"6",bspeed:"3",pen:"3",dmg:"3",reloads:"3",speed:"6"},desc:"CRA-5 means Counter ram auto 5. so you play this build by when you see a body damage ramming booster / destroyer / low health smasher branch tank you immdiately retreat and they think your playing glass cannon auto 5 and instinctively chase after you. You continue to retreat and they will come to you. your turrets will wear them down enough in the chase so when they finally ram you you kill them. works almost every time since nobody expects a counter ram auto 5. ive taken down 50K destroyers with this. Can also take a blow from bullet build anhailator and retreat from danger if necessary. I usually playu oit in TDM but should work fine in FFA as well, Although if you play it over and over on a server, people will catch on, people have a very hard time distinguishing it from regular auto 5 and therefore, it tricks boosters and destroyers and usually kills them. Very useful and fun to play troll build that youâll be playing over and over again. And practically nobody uses it so yeah. Youâve got the element of suprise, By GABERRR"},{p:"Auto 5",name:"XP Farmer",build:{regen:"2",health:"2",body:"2",bspeed:"3",pen:"4",dmg:"8",reloads:"5",speed:"7"},desc:"Made by ÐÐ°ÑÑÐµÑ. An XP Farmer to use while AFK. High speed is recommended in order to flee to safety."},{p:"Auto 5",name:"The worst build",build:{regen:"5",health:"0",body:"7",bspeed:"7",pen:"0",dmg:"0",reloads:"7",speed:"7"},desc:"A ramming auto tank. Hah. With fast! Puny bullets and fast movement speed! This tank might suck, but some players definitely can get surprised!"},{p:"Auto 5",name:"Healthy Auto Sniper",build:{regen:"4",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"0",speed:"4"},desc:"This build uses reload points to trade for a more survival-based build."},{p:"Auto 5",name:"Pressured Lockdown!",build:{regen:"0",health:"6",body:"1",bspeed:"7",pen:"7",dmg:"7",reloads:"2",speed:"3"},desc:"None"},{p:"Auto 5",name:"Seismic",build:{regen:"3",health:"1",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"5",speed:"4"},desc:"None"},{p:"Auto 5",name:"Auto Turret",build:{regen:"2",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"1"},desc:"None"},{p:"Auto 5",name:"5 Snipers",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Auto 5",name:"Middle Holder Teams",build:{regen:"1",health:"5",body:"2",bspeed:"6",pen:"6",dmg:"6",reloads:"6",speed:"1"},desc:"Hold the middle and keep other team from leveling. Run from any fight. Get kills by accident or by defense."},{p:"Auto 5",name:"The Moving Fort",build:{regen:"0",health:"7",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"This build is good for when you're defending a fleet of tanks. If you're assaulting an enemy, do not brute force it as it leads to your downfall. Also, bring tanks which can penetrate bullets so that you won't get hit by the enemy as easily."},{p:"Booster",name:"wierdmagedeon!!",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"6",speed:"6"},desc:"used for a slightly different rammer build, also works for smasher by replacing reload with 2 points in the others, 1 point in anything else will also happen."},{p:"Booster",name:"Half N Half",build:{regen:"0",health:"5-6",body:"5-6",bspeed:"0",pen:"5-6",dmg:"5-6",reloads:"5",speed:"6"},desc:"A dangerous half ram half bullet bullet build. The HNH can be used to trick enemies into thinking your one type. Although not as fast as most booster a build, its mixture of ram and bullets can make your next victim half pepperoni half bbq chicken pizza. Yum!"},{p:"Booster",name:"Half N Half V2",build:{regen:"0",health:"5",body:"5",bspeed:"1",pen:"6",dmg:"6",reloads:"5",speed:"5"},desc:"A dangerous half ram half bullet bullet build. The HNH can be used to trick enemies into thinking your one type. Although not as fast as most booster a build, its mixture of ram and bullets can make your next victim half pepperoni half bbq chicken pizza. Yum!"},{p:"Booster",name:"Fallen Booster",build:{regen:"0",health:"7",body:"7",bspeed:"5",pen:"0",dmg:"0",reloads:"7",speed:"7"},desc:"A build that replicates the Fallen Booster."},{p:"Booster",name:"Glass Booster",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"With fast high damage bullets, this build kills quick but dies quick. Weak against bullet spammers."},{p:"Booster",name:"Outta Here!!!",build:{regen:"0",health:"0",body:"0",bspeed:"Max",pen:"",dmg:"0",reloads:"Max",speed:"Max"},desc:"None"},{p:"Booster",name:"Accelerator",build:{regen:"3",health:"3",body:"4",bspeed:"1",pen:"4",dmg:"5",reloads:"7",speed:"7"},desc:"A fast, powerful build which allows the players to wear off enemy health. The one bullet speed is used for being able to shoot other boosters while chasing them. Also, with a bit of body damage, HP, and Regen, it is able to be a part rammer. You could also just do 3/3/4/0/4/4/7/7 and add the remaining points of your choice."},{p:"Booster",name:"Classic Rammer",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"5",speed:"7"},desc:"None"},{p:"Booster",name:"Speedy",build:{regen:"2",health:"2",body:"0",bspeed:"4",pen:"4",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Booster",name:"Speed Ram",build:{regen:"5",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"7",speed:"7"},desc:"None"},{p:"Booster",name:"Boosted Ramming",build:{regen:"7",health:"7",body:"7",bspeed:"0",pen:"0",dmg:"0",reloads:"5",speed:"7"},desc:"None"},{p:"Booster",name:"Invincible Hulk",build:{regen:"2",health:"7",body:"0",bspeed:"0",pen:"6",dmg:"6",reloads:"7",speed:"5"},desc:"None"},{p:"Booster",name:"The Armored Bugatti Of Death",build:{regen:"3",health:"7",body:"7",bspeed:"0",pen:"2",dmg:"0",reloads:"7",speed:"7"},desc:"None"},{p:"Booster",name:"Bullet Storm",build:{regen:"3",health:"4",body:"0",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Booster",name:"Cheetah Simulator",build:{regen:"0",health:"5",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Booster",name:"Eagle",build:{regen:"0",health:"3",body:"0",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Used for hunting down tanks, to kill bullet spammers you have to find blind spots, as long as it is played carefully it can destroy anything."},{p:"Booster",name:"Fast Rammer",build:{regen:"7",health:"7",body:"7",bspeed:"5",pen:"0",dmg:"0",reloads:"7",speed:"0"},desc:"None"},{p:"Booster",name:"Flying Goat",build:{regen:"6",health:"5",body:"7",bspeed:"0",pen:"0",dmg:"7",reloads:"1",speed:"7"},desc:"Boosters always remind me of goats: fast, frisky, and sometimes annoying."},{p:"Booster",name:"Gun Them Down!",build:{regen:"2",health:"2",body:"0",bspeed:"3",pen:"7",dmg:"6",reloads:"6",speed:"7"},desc:"None"},{p:"Booster",name:"Ram and Slam",build:{regen:"3",health:"7",body:"3",bspeed:"0",pen:"2",dmg:"4",reloads:"7",speed:"7"},desc:"Ram peaple with bullets and your self!"},{p:"Booster",name:"Kill, Rest, Repeat",build:{regen:"0",health:"3",body:"0",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"A fast build that chases after tanks and pecks them with it's low speed high damage bullets"},{p:"Booster",name:"Ram N' Spam",build:{regen:"6",health:"6",body:"5",bspeed:"0",pen:"2",dmg:"7",reloads:"5",speed:"2"},desc:"A slower build for the booster which is capable of both ramming other tanks and using a semi-bullet shield. Avoid engaging faster tanks, heavily bullet-shielded tanks, and smashers as they will kill you. Also approach bullet spammers with caution as they probably have a greater firepower than yourself."},{p:"Booster",name:"The Trolling Booster",build:{regen:"4",health:"7",body:"7",bspeed:"0",pen:"1",dmg:"0",reloads:"7",speed:"7"},desc:"When you ram into another ramming Booster the 1 penetration will let you survive by a bit"},{p:"Fighter",name:"Fighter's Bullet Umbrella",build:{regen:"0",health:"1",body:"2",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"Basically modified sea serpent, it rams its bullets into its enemies from a few squares' longer distance. 2 bullet speed allows for easier destroyer kills as well as a bullet shield in front of itself to block enemy projectiles. This also mitigates decreased health points. A vertical ambush using this tank will kill almost all bullet spammers and snipers. A friend of mine got to 1m FFA using it."},{p:"Fighter",name:"fight em bois",build:{regen:"1",health:"max",body:"0",bspeed:"5",pen:"4",dmg:"max",reloads:"max",speed:"3"},desc:"good for clearing polygons for your team so they do not have to TANK dmg"},{p:"Fighter",name:"Papa Power Alt.",build:{regen:"0",health:"2",body:"3",bspeed:"2",pen:"7",dmg:"6",reloads:"7",speed:"6"},desc:"With this build, you are able to have a considerate amount of health, and still be fast enough to chase people down. The two bullet speed will be just enough to catch running tanks, while still allowing you to have a bullet cloud."},{p:"Fighter",name:"Falcon 9",build:{regen:"2",health:"1",body:"2",bspeed:"2",pen:"7",dmg:"7",reloads:"5",speed:"7"},desc:"None"},{p:"Fighter",name:"Papa Power",build:{regen:"0",health:"1",body:"2",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Fighter",name:"Tag Killer",build:{regen:"0",health:"0",body:"6",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"Body Damage increases your damage resistance. The slow bullet speed may fool enemies into thinking you're a rammer, which you kinda are. Maxed bullets are obviously important, and movement speed allows you to chase down and kill enemies quickly - very useful for Tag Mode. Points can be swapped between Body Damage and Movement Speed."},{p:"Fighter",name:"anti-overlord",build:{regen:"0",health:"5",body:"2",bspeed:"0",pen:"5",dmg:"7",reloads:"7",speed:"7"},desc:"A fighter build made specifically for destroying overlords. Effective if used by many fighters."},{p:"Fighter",name:"Glass Cannon",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Fighter",name:"Sea Serpent",build:{regen:"0",health:"2",body:"3",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Fighter",name:"The Killer Tank!",build:{regen:"2",health:"2",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Fighter",name:"Ambrosia",build:{regen:"1",health:"3",body:"0",bspeed:"3",pen:"6",dmg:"6",reloads:"7",speed:"7"},desc:"None"},{p:"Fighter",name:"Swift Slaughterer",build:{regen:"1",health:"3",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"},{p:"Fighter",name:"Dragon",build:{regen:"0",health:"5",body:"7",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Fighter",name:"The falcon",build:{regen:"0",health:"5",body:"6",bspeed:"5",pen:"6",dmg:"5",reloads:"7",speed:"5"},desc:"anti-rammers. Very effective for trolling"},{p:"Fighter",name:"Flanker",build:{regen:"3",health:"4",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"Good at catching tanks like the Quad tank or those with low penetration builds off guard. If things go awry, it can take some hits and move quickly in order to ensure a safe getaway."},{p:"Fighter",name:"Mockingjay",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"7",speed:"7"},desc:"uhhh... Glass Cannon!"},{p:"Fighter",name:"Vandal",build:{regen:"3",health:"3",body:"2",bspeed:"2",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"Balanced Fighter build. You don't have to do bullet speed but I think it'd help in certain situations, but if you'd like, you could move it into movement speed."},{p:"Fighter",name:"Oort Cloud",build:{regen:"0",health:"4",body:"4",bspeed:"0",pen:"7",dmg:"6",reloads:"6",speed:"6"},desc:"This build tested by me is a slight ballance of the rammer and glass cannon builds. The max bullet penetration ensures a direct hit. Without a worry of dying, health points and body damage are added to this build, but if you want more health, skip the body damage to maximise your health and maximise bullet damage or movement speed"},{p:"Octo Tank",name:"Sunshine",build:{regen:"5",health:"7",body:"7",bspeed:"7",pen:"0",dmg:"0",reloads:"7",speed:"0"},desc:"you see all these storms and hurricanes. so gloomy! well not anymore! :) bullets are now like rays of sunshine! spreading happiness everywhere! max hp and body damage, don't touch the sun."},{p:"Octo Tank",name:"bullets",build:{regen:"7",health:"7",body:"0",bspeed:"5",pen:"?",dmg:"7",reloads:"7",speed:"?"},desc:"Sturdy,High DPS and fast bullets"},{p:"Octo Tank",name:"KayAyeAre's 100k",build:{regen:"1",health:"1",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"Used by KayAyeAre to get to a score of 100k. Hope you enjoy this build."},{p:"Octo Tank",name:"Hurricane Survival",build:{regen:"3",health:"5",body:"0",bspeed:"1",pen:"6",dmg:"6",reloads:"7",speed:"5"},desc:"A modified version of Hurricane Justin to ensure a health padding. Uses the 3 points from Body Damage into Health Regeneration. Great for Teams mode."},{p:"Octo Tank",name:"Heavy Boulder",build:{regen:"6",health:"7",body:"7",bspeed:"2",pen:"3",dmg:"2",reloads:"1",speed:"5"},desc:"Made by Redostonecraft, this provides a balanced build for Octo Tanks with emphasis on survivability."},{p:"Octo Tank",name:"The Hurricane",build:{regen:"0",health:"5",body:"0",bspeed:"1",pen:"7",dmg:"7",reloads:"6",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Bullet Storm",build:{regen:"2",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"3"},desc:"None"},{p:"Octo Tank",name:"Octo Hurricane",build:{regen:"2",health:"3",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Dangerous Thunderstorm",build:{regen:"3",health:"3",body:"0",bspeed:"6",pen:"7",dmg:"6",reloads:"6",speed:"2"},desc:"None"},{p:"Octo Tank",name:"Glass Octo",build:{regen:"0",health:"0",body:"0",bspeed:"6",pen:"7",dmg:"7",reloads:"7",speed:"6"},desc:"None"},{p:"Octo Tank",name:"Hurricane Justin",build:{regen:"0",health:"5",body:"3",bspeed:"1",pen:"6",dmg:"6",reloads:"7",speed:"5"},desc:"A hurricane-style build that my friend Justin uses. Customizable, switch high bullet damage and penetration for max health and body damage for an anti-rammer that would surprise Boosters and Smashers, or put more points into penetration and damage for a glass fortress that will keep enemies out and provide nice crowd control in Teams or Domination."},{p:"Octo Tank",name:"Blizzard",build:{regen:"0",health:"0",body:"5",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"Somewhat Glass Tank",build:{regen:"0",health:"5",body:"0",bspeed:"6",pen:"5",dmg:"6",reloads:"6",speed:"5"},desc:"None"},{p:"Octo Tank",name:"Hurricane",build:{regen:"5",health:"0",body:"0",bspeed:"3",pen:"7",dmg:"7",reloads:"4",speed:"7"},desc:"None"},{p:"Octo Tank",name:"The Tropical Storm",build:{regen:"1",health:"4",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Octo Tank",name:"OctoTrool",build:{regen:"0",health:"0",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"None"},{p:"Octo Tank",name:"FLAREÂ´s octo tank",build:{regen:"1",health:"3",body:"0",bspeed:"1",pen:"7",dmg:"7",reloads:"7",speed:"7"},desc:"if you want you can swap the health and bullet speed points around. designed for chasing down smaller tanks and creates cover in TDM modes for other players"},{p:"Octo Tank",name:"Octo Farmer",build:{regen:"0",health:"2",body:"0",bspeed:"7",pen:"4",dmg:"7",reloads:"7",speed:"6"},desc:"A (glassy) build suitable for peaceful farming of points, especially near the Pentagon Nest. Caution that confrontations are to be avoided. Suitable for use in modes with a base/safety zone, where one can flee to upon danger. Not recommended for modes where fighting against other tanks are unavoidable."},{p:"Octo Tank",name:"Rammer Hell",build:{regen:"0",health:"6",body:"5",bspeed:"3",pen:"6",dmg:"6",reloads:"6",speed:"1"},desc:"I recommend that you have one other teammate in your range if you are on 4-team, 2-team, or any other team mode, because this build doesn't guarantee protection, like everything else. If you are in any other mode though, try working up your skill for this build by battling with lvl 20-30 tanks, because this build is, again, a little hard to manage."},{p:"Octo Tank",name:"The Wall",build:{regen:"6",health:"6",body:"0",bspeed:"0",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"Not very offensive, but keeps you and your teammates safe(ish)"},{p:"Octo Tank",name:"Absolute Bullet Hell",build:{regen:"2",health:"4 or 5",body:"1 or 0",bspeed:"7",pen:"2",dmg:"7",reloads:"7",speed:"3/0 with more health"},desc:"This build is a build that allows for a lot of ranged damage sacrificing body damage and sometimes movement speed. It works really good staying in one spot with automatic spin and shooting"},{p:"Auto Gunner",name:"CQC Run n' Gun",build:{regen:"4",health:"4",body:"0",bspeed:"4",pen:"4",dmg:"4",reloads:"7",speed:"6"},desc:"This build is strategically made for flanking an enemy with ok mobility or give support fire on the move. The 4 on speed, penetration, and damage, with 7 of reload, on the 4 mini cannons and the autocannon, you would be having a good volume of fire. The 4 on health and regen is to make sure you're not a glass cannon with the tank, and the 0 body damage is because you should use the guns instead of ramming."},{p:"Auto Gunner",name:"Tracker",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"6",speed:"6"},desc:"The build allows you to track your enemies down (the Auto Turret shows tanks that are off-screen) and kill them easily. As a Gunner, it still has its weakness: low penetration. Thatâs why you should avoid the Twin branch (except if they are low on health). Surprisingly, you can out-trade Destroyers and Hybrids, both the bullet damage ones and the rammer ones. Other tank types should be no problem because of your speed and bullet rain. Itâs recommend to stay with Machine Gun until level 45 but you can go Gunner at level 30. Useful in all game modes but best in FFA."},{p:"Auto Gunner",name:"OK KO",build:{regen:"4",health:"3",body:"0",bspeed:"5",pen:"7",dmg:"7",reloads:"7",speed:"0"},desc:"None"},{p:"Auto Gunner",name:"Minigunner",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"None"}]},"Smasher Branch":{branch:"Smasher Branch",_builds:[{p:"Smasher",name:"Intimidation",build:{regen:"6",health:"7",body:"10",speed:"10"},desc:"Made by ÐÐ°ÑÑÐµÑ. Act as if you're AFK. Then smash the user as he/she attempts to kill you. Higher speed is recommended as you can catch up to the tank incase it tries to flee."},{p:"Smasher",name:"smasher build",build:{regen:"3",health:"10",body:"10",speed:"10"},desc:"it is for tanks without cannons as it can easily ram players\nMax Health and body damage are needed to make the tank super buffed\n\nMovement speed without it your tank is super vulnerable and horrible at ramming"},{p:"Smasher",name:"Speedy",build:{regen:"3",health:"10",body:"10",speed:"10"},desc:"None"},{p:"Smasher",name:"Balanced Power",build:{regen:"8",health:"8",body:"8",speed:"8"},desc:"8, 8, 8, 8 (+1 Stats Point)"},{p:"Smasher",name:"Ball O' Steel",build:{regen:"10",health:"10",body:"10",speed:"3"},desc:"This actually works for both Landmine and Spike, not just Smasher."},{p:"Landmine",name:"Speedy/Super Sonic Invisibility",build:{regen:"3",health:"10",body:"10",speed:"10"},desc:"None"},{p:"Landmine",name:"Troll",build:{regen:"5",health:"10",body:"10",speed:"8"},desc:"None"},{p:"Landmine",name:"Chaser",build:{regen:"5",health:"7",body:"10",speed:"10"},desc:"None"},{p:"Landmine",name:"See No Evil",build:{regen:"5",health:"6",body:"10",speed:"10"},desc:"You can hear, you can speak, you can't see."},{p:"Landmine",name:"trollolo",build:{regen:"7",health:"7",body:"9",speed:"10"},desc:"be invisible, in pentagon nest while there are no alphagons- no people. When a not-spike approaches, troll=)"},{p:"Auto Smasher",name:"Glass cannon",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"5"},desc:"Just for fun :P I dare someone to try this ð"},{p:"Auto Smasher",name:"Compass",build:{regen:"5",health:"9",body:"10",speed:"9"},desc:"None"},{p:"Spike",name:"Speed Spike",build:{regen:"3",health:"10",body:"10",speed:"10"},desc:"None"},{p:"Spike",name:"Regen Rammer",build:{regen:"10",health:"7",body:"6",speed:"10"},desc:"Maximum speed and regen! As spike gives you +2 body damage, you still have a slight edge against non-smasher rammers (8 vs 7 body damage) also it regens super fast so you have more attempts to ram. works best in tag when you're on the minority team"},{p:"Spike",name:"Nuckalâs ATV",build:{regen:"3",health:"10",body:"10",speed:"10"},desc:"None"},{p:"Spike",name:"Spiky Spiker",build:{regen:"8",health:"8",body:"9",speed:"8"},desc:"None"},{p:"Spike",name:"Killer Spike",build:{regen:"6",health:"10",body:"10",speed:"7"},desc:"None"},{p:"Spike",name:"Spikes R Us",build:{regen:"5",health:"9",body:"9",speed:"10"},desc:"Good for FFA or Maze where you are given VERY little time to take a breather"},{p:"Spike",name:"Living shield",build:{regen:"10",health:"10",body:"6",speed:"7"},desc:"Useful in team modes. Follow your teammate and cover him from enemy bullets with your tank. In case of drone using enemies, you can approach them so that they'll attack you and not your fragile teammate. Maxed out health stats will allow you to receive that damage with no sweat in most cases."},{p:"Spike",name:"Balanced",build:{regen:"5",health:"4",body:"4",bspeed:"4",pen:"5",dmg:"4",reloads:"3",speed:"4"},desc:"None"}]},"Tank of your choice":{branch:"Tank of your choice",_builds:[{p:"Tank of your choice",name:"lol",build:{regen:"0",health:"0 to 3",body:"0 to 2",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"0 to 5"},desc:"you look like a noob that don't know how to upgrade when you are a basic tank. You can use this point to trick other people. a tank is already strong enough to take out a slow rammer or tier 4 glass cannon in lv45 so do be afraid using this."},{p:"Tank of your choice",name:"tank",build:{regen:"max",health:"max",body:"0",bspeed:"0",pen:"0",dmg:"max",reloads:"max",speed:"0"},desc:"destroy stronger enemies quick but watch out for quicker builds, better for starters"},{p:"Tank of your choice",name:"D-fense",build:{regen:"MAX",health:"MAX",body:"2",bspeed:"1",pen:"MAX",dmg:"MAX",reloads:"1",speed:"1"},desc:"Good thing for auto tanks. :)"},{p:"Tank of your choice",name:"Da bullets",build:{regen:"3",health:"3",body:"0",bspeed:"6",pen:"x",dmg:"x",reloads:"x",speed:"0"},desc:"This build is good for anyone who wants bullets. Apply this build on tanks with high reload, if you want to apply this build on a destroyer branch switch the numbers of the reload with the bullet speed."},{p:"Tank of your choice",name:"Ultra damage",build:{regen:"3",health:"4",body:"4",bspeed:"3",pen:"3",dmg:"x",reloads:"x",speed:"3"},desc:"The ultra damage build is good for constantly damaging another tank, while slowly moving in to body slam them. if you use this build, try to target sniper branches. Do not pick a fight with tanks like penta shot or octo tank. this build is good for applying with tri-angle branches."},{p:"Tank of your choice",name:"Full-on",build:{regen:"0",health:"0",body:"0",bspeed:"MAX",pen:"MAX",dmg:"MAX",reloads:"MAX",speed:"0"},desc:"You can change any of the stats with 0 on them! It's recommended to not use a tank from the smasher tree."},{p:"Tank of your choice",name:"The Bullet Giver",build:{regen:"Max",health:"Max",body:"5",bspeed:"0",pen:"0",dmg:"Max",reloads:"Max",speed:"0"},desc:"Something that gives you nightmares!"},{p:"Tank of your choice",name:"Well Rounded",build:{regen:"4",health:"4",body:"3 (Lower priority)",bspeed:"4",pen:"4",dmg:"4",reloads:"4",speed:"4"},desc:"Use any tank."},{p:"Tank of your choice",name:"The Terminator",build:{regen:"1",health:"2",body:"0",bspeed:"7",pen:"7",dmg:"7",reloads:"7",speed:"2"},desc:"This is a build that works for pretty much any tank."},{p:"Tank of your choice",name:"Outta Here",build:{regen:"0",health:"0",body:"0",bspeed:"7",pen:"6",dmg:"0",reloads:"7",speed:"7"},desc:"This build is useful for ramming- it's your choice to use it or not."}]}};
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
            addButton('Fix Game', FixGame, { desc: 'Only use if your (game reloads without finish loading) or if game doesnt load.' })
            addButton('Remove-Ads', RemoveAds, {line:true, desc: 'Use to remove ads that may cause gae lag' })
            addButton('Stack', stack, {line:true, desc: 'stack preditor bullets max reload requried' })
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
        set_convar=window.set_convar=function(a,b){

        }
        execute=window.execute=function(ode){
            var s=ode.split(' ')
            var list=[
                'Smasher and Dominator Bases','Barrels, Spawners, Launchers and Auto Turrets','self','Blue Team','Red Team','Purple Team','Green Team','Shiny Polygons','Square','Triangle','Pentagon','Crashers','Arena Closers/Neutral Dominators/Defender Ammo','Maze Walls','Others (FFA)','Summoned Squares (Necromancer)','Fallen Bosses'
            ]
            console.log('Set',list[s[1]],s[2],s)
            try{colors[list[s[1]]]=`#${s[2].split('').splice(2).join('')}`.toLowerCase();input.execute(ode)}catch(err){if(s.length!=3)(input.execute(ode))}
        }
        const keys = obj => Object.keys(obj||this);
        function ab(){if(down.Alt&&(down.a||down.A)){stack();console.log('Stacking')}}
        window.addEventListener('keydown', function (e) { const key = e.key; if (down[key]) { return }down[key]=[key,true];ab()/*log('Key down', key, 'Total:', keys(down).length)*/});
        window.addEventListener('keyup', function (e) { const key = e.key; if (down[key]) { return } down[key] = [key,false]; /*log('Key down', key, 'Total:', keys(down).length)*/ });
        var info={}
        var base=document.getElementsByTagName('d-base')[0];
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
                        execute("net_replace_color 1 0x000000");
                        execute("net_replace_color 2 0x000000");
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
                        player.isMaster&&(ls())
                        log_("PlayerStatus", "Spawning into game");

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
            input.mouse(x,y)};
        var [w,a,s,d]=[
            38,
            37,
            40,
            39,
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
            var xd=[s[0][0][0]=s[0][1][0],s[0][0][1]]
            var yd=[s[1][0][0]=s[1][1][0],s[1][0][1]]
            console.log(xd,yd)
            if(xd[0]>100){
                console.log('Moving x',xd[1]?"right":"left")
                keyDown(xd[1]?d:a)
            }else{
                //keyDown(!xd[1]?d:a)
            }
            if(yd[0]>50){
                console.log('Moving y',yd[1]?"down":"up")
                keyDown(yd[1]?40:38)
            }else{
                //keyDown(!yd[1]?s:w)
            }
            console.log({xd,yd})
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
                console.log('Moving x')
                keyDown(!xd[1]?d:a)
            }else{
                //keyDown(!xd[1]?d:a)
            }
            if(yd[0]>100){
                console.log('Moving y')
                keyDown(yd[1]?s:w)
            }else{
                //keyDown(!yd[1]?s:w)
            }
            console.log({xd,yd})
        }
        function aim(arr,em){
            var center=[innerWidth/2,innerHeight/2]
            var close=arr.map(e=>[e,getDistance(e[0],e[1],center[0],center[1])]).sort((b,a)=>b[1]-a[1])[0][0]
            console.log(close)
            let {move,aim}=settings
            aim&&(mouse(...close),Fire(true));
            if(move){
                if(getDistance(center[0],center[1],close[0],close[1])>300){
                    moveFromSide();moveToward(...close)
                }
                else if(em&&getDistance(center[0],center[1],close[0],close[1])<300){
                    moveFromSide();run(...close)
                }
                else [[w,a,s,d].forEach(keyUp)]
            }
        }
        function canClick(e){
            var center=[innerWidth/2,innerHeight/2]
            var context = canvas.getContext('2d');
            var info={},Shapes={}
            var shapes=[
                ['##000000','TankBarrel'],
                ['#898989','LeaderDir'],['#0000ff','enemy ffa'],
                ['#ffe46b #bfae4e #ffe869 #ffff00 #ccf #fbb','Square'],
                ['#fc7676 #bd585a #e76c6d #ffbbbb','Triangle'],
                ['#fcc276 #bd9158','Summoned'],
                ['#f177dd #b459a5','crasher'],
                ['#c0c0c0 #969696','Fallen'],
                ['#768cfc #5869bd #ccccff','Pent'],
                ['#8aff69 #6cbe55','Green Square'],
                ['#00b0e1 #0083a8 #29aacc #4cc9ea #33afd0','Blue Team'],
                ['#f04f54 #b33b3f #f14e54','Red Team'],
                ['#00e06c #00a851','Green Team'],
                ['#be7ff5 #8f5fb7','Purple Team'],
                ...Object.keys(colors).map(e=>{
                    return [colors[e],e]
                })
            ]
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
        myLoop=setInterval(e=>{
            //2teams
            if(player.GM=='teams'){
            if(typeof player!='undefined' && dif(player.position.x,enemySide.x)<200){return run(player.TeamX,player.position.y)}
            if(typeof player!='undefined' && dif(player.position.y,top)<100){return keyDown(39)}
            if(typeof player!='undefined' && dif(player.position.y,floor)<100){return keyDown(38)}}
            player.GM=localStorage.gamemode
            if(player.GM=='teams'){
                let context = canvas.getContext('2d');
                let pixelData = context.getImageData(innerWidth/2, innerHeight/2, 1, 1).data;
                player.team='#ff0000 #f80808'.includes("#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6))?"Red Team":"Blue Team"
                enemySide.x=player.team=='Red Team'?blueSide:redSide
            }
            if(player.isMaster||storage.multibox)return;
            var S2=canClick.apply(canvas);
            var target=[];
            var enemy=Object.keys(S2).filter(key=>(
                key!=player.team&&key.includes('team'))
                                             ||
                                             (player.GM!='teams'?key.includes('ffa'):!key.includes('ffa')&&key.includes('enemy'))
                                            ).map(e=>((S2[e]&&S2[e].length&&S2[e])||[]))[0]
            var shps=[S2['Green Square'],[...(S2['Pent']||[]),...(S2['crasher']||[])],S2['Triangle'],S2['Square']].filter(e=>e&&e.length)[0]
            if(enemy&&enemy.length&&[...(S2.TankBarrel||[])].filter(b=>30<getDistance(b[0],b[1],innerWidth/2,innerHeight/2)).length){aim(S2.TankBarrel,true);Fire(true)}
            else if(shps&&shps.length){aim(shps);Fire(true)}
            else Fire(false);
        },250)

    }
    _stt=stt
