// ==UserScript==
// @name         Diep.io Bot
// @description  Diep.io Bot with features like auto-aim and bullet dodge. Use with care.
// @version      0.1
// @author       PD
// @namespace    *://diep.io/
// @match        *://diep.io/
// @grant        none
// ==/UserScript==
var _createClass = function() {
    function n(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}(),
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};

function _classCallCheck(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}! function a(o, s, u) {
function f(e, t) {
    if (!s[e]) {
        if (!o[e]) {
            var r = "function" == typeof require && require;
            if (!t && r) return r(e, !0);
            if (h) return h(e, !0);
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        var i = s[e] = {
            exports: {}
        };
        o[e][0].call(i.exports, function(t) {
            return f(o[e][1][t] || t)
        }, i, i.exports, a, o, s, u)
    }
    return s[e].exports
}
for (var h = "function" == typeof require && require, t = 0; t < u.length; t++) f(u[t]);
return f
}({
1: [function(t, e, r) {
    "use strict";
    r.byteLength = function(t) {
        var e = l(t),
            r = e[0],
            n = e[1];
        return 3 * (r + n) / 4 - n
    }, r.toByteArray = function(t) {
        var e, r, n = l(t),
            i = n[0],
            a = n[1],
            o = new h(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, i, a)),
            s = 0,
            u = 0 < a ? i - 4 : i;
        for (r = 0; r < u; r += 4) e = f[t.charCodeAt(r)] << 18 | f[t.charCodeAt(r + 1)] << 12 | f[t.charCodeAt(r + 2)] << 6 | f[t.charCodeAt(r + 3)], o[s++] = e >> 16 & 255, o[s++] = e >> 8 & 255, o[s++] = 255 & e;
        2 === a && (e = f[t.charCodeAt(r)] << 2 | f[t.charCodeAt(r + 1)] >> 4, o[s++] = 255 & e);
        1 === a && (e = f[t.charCodeAt(r)] << 10 | f[t.charCodeAt(r + 1)] << 4 | f[t.charCodeAt(r + 2)] >> 2, o[s++] = e >> 8 & 255, o[s++] = 255 & e);
        return o
    }, r.fromByteArray = function(t) {
        for (var e, r = t.length, n = r % 3, i = [], a = 0, o = r - n; a < o; a += 16383) i.push(u(t, a, o < a + 16383 ? o : a + 16383));
        1 == n ? (e = t[r - 1], i.push(s[e >> 2] + s[e << 4 & 63] + "==")) : 2 == n && (e = (t[r - 2] << 8) + t[r - 1], i.push(s[e >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="));
        return i.join("")
    };
    for (var s = [], f = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = n.length; i < a; ++i) s[i] = n[i], f[n.charCodeAt(i)] = i;

    function l(t) {
        var e = t.length;
        if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
    }

    function u(t, e, r) {
        for (var n, i, a = [], o = e; o < r; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), a.push(s[(i = n) >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
        return a.join("")
    }
    f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
}, {}],
2: [function(j, t, M) {
    (function(l) {
        "use strict";
        var n = j("base64-js"),
            a = j("ieee754"),
            t = "function" == typeof Symbol ? Symbol.for("nodejs.util.inspect.custom") : null;
        M.Buffer = l, M.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return l.alloc(+t)
        }, M.INSPECT_MAX_BYTES = 50;
        var r = 2147483647;

        function o(t) {
            if (r < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            var e = new Uint8Array(t);
            return Object.setPrototypeOf(e, l.prototype), e
        }

        function l(t, e, r) {
            if ("number" != typeof t) return i(t, e, r);
            if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
            return u(t)
        }

        function i(t, e, r) {
            if ("string" == typeof t) return function(t, e) {
                "string" == typeof e && "" !== e || (e = "utf8");
                if (!l.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                var r = 0 | c(t, e),
                    n = o(r),
                    i = n.write(t, e);
                i !== r && (n = n.slice(0, i));
                return n
            }(t, e);
            if (ArrayBuffer.isView(t)) return f(t);
            if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : _typeof(t)));
            if (_(t, ArrayBuffer) || t && _(t.buffer, ArrayBuffer)) return function(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var n;
                n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r);
                return Object.setPrototypeOf(n, l.prototype), n
            }(t, e, r);
            if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return l.from(n, e, r);
            var i = function(t) {
                if (l.isBuffer(t)) {
                    var e = 0 | h(t.length),
                        r = o(e);
                    return 0 === r.length || t.copy(r, 0, 0, e), r
                }
                if (void 0 !== t.length) return "number" != typeof t.length || K(t.length) ? o(0) : f(t);
                if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data)
            }(t);
            if (i) return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return l.from(t[Symbol.toPrimitive]("string"), e, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : _typeof(t)))
        }

        function s(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
            if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
        }

        function u(t) {
            return s(t), o(t < 0 ? 0 : 0 | h(t))
        }

        function f(t) {
            for (var e = t.length < 0 ? 0 : 0 | h(t.length), r = o(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
            return r
        }

        function h(t) {
            if (r <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
            return 0 | t
        }

        function c(t, e) {
            if (l.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || _(t, ArrayBuffer)) return t.byteLength;
            if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === t ? "undefined" : _typeof(t)));
            var r = t.length,
                n = 2 < arguments.length && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var i = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return x(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return B(t).length;
                default:
                    if (i) return n ? -1 : x(t).length;
                    e = ("" + e).toLowerCase(), i = !0
            }
        }

        function y(t, e, r) {
            var n = t[e];
            t[e] = t[r], t[r] = n
        }

        function p(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (i) return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" == typeof e && (e = l.from(e, n)), l.isBuffer(e)) return 0 === e.length ? -1 : d(t, e, r, n, i);
            if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : d(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function d(t, e, r, n, i) {
            var a, o = 1,
                s = t.length,
                u = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                s /= o = 2, u /= 2, r /= 2
            }

            function f(t, e) {
                return 1 === o ? t[e] : t.readUInt16BE(e * o)
            }
            if (i) {
                var h = -1;
                for (a = r; a < s; a++)
                    if (f(t, a) === f(e, -1 === h ? 0 : a - h)) {
                        if (-1 === h && (h = a), a - h + 1 === u) return h * o
                    } else - 1 !== h && (a -= a - h), h = -1
            } else
                for (s < r + u && (r = s - u), a = r; 0 <= a; a--) {
                    for (var l = !0, c = 0; c < u; c++)
                        if (f(t, a + c) !== f(e, c)) {
                            l = !1;
                            break
                        } if (l) return a
                }
            return -1
        }

        function v(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? i < (n = Number(n)) && (n = i) : n = i;
            var a = e.length;
            a / 2 < n && (n = a / 2);
            for (var o = 0; o < n; ++o) {
                var s = parseInt(e.substr(2 * o, 2), 16);
                if (K(s)) return o;
                t[r + o] = s
            }
            return o
        }

        function g(t, e, r, n) {
            return C(function(t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, n)
        }

        function k(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
        }

        function w(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r;) {
                var a, o, s, u, f = t[i],
                    h = null,
                    l = 239 < f ? 4 : 223 < f ? 3 : 191 < f ? 2 : 1;
                if (i + l <= r) switch (l) {
                    case 1:
                        f < 128 && (h = f);
                        break;
                    case 2:
                        128 == (192 & (a = t[i + 1])) && 127 < (u = (31 & f) << 6 | 63 & a) && (h = u);
                        break;
                    case 3:
                        a = t[i + 1], o = t[i + 2], 128 == (192 & a) && 128 == (192 & o) && 2047 < (u = (15 & f) << 12 | (63 & a) << 6 | 63 & o) && (u < 55296 || 57343 < u) && (h = u);
                        break;
                    case 4:
                        a = t[i + 1], o = t[i + 2], s = t[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (u = (15 & f) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && u < 1114112 && (h = u)
                }
                null === h ? (h = 65533, l = 1) : 65535 < h && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += l
            }
            return function(t) {
                var e = t.length;
                if (e <= T) return String.fromCharCode.apply(String, t);
                var r = "",
                    n = 0;
                for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += T));
                return r
            }(n)
        }
        M.kMaxLength = r, (l.TYPED_ARRAY_SUPPORT = function() {
            try {
                var t = new Uint8Array(1),
                    e = {
                        foo: function() {
                            return 42
                        }
                    };
                return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
            } catch (t) {
                return !1
            }
        }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(l.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this)) return this.buffer
            }
        }), Object.defineProperty(l.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (l.isBuffer(this)) return this.byteOffset
            }
        }), "undefined" != typeof Symbol && null != Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), l.poolSize = 8192, l.from = function(t, e, r) {
            return i(t, e, r)
        }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(t, e, r) {
            return function(t, e, r) {
                return s(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
            }(t, e, r)
        }, l.allocUnsafe = function(t) {
            return u(t)
        }, l.allocUnsafeSlow = function(t) {
            return u(t)
        }, l.isBuffer = function(t) {
            return null != t && !0 === t._isBuffer && t !== l.prototype
        }, l.compare = function(t, e) {
            if (_(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), _(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (t === e) return 0;
            for (var r = t.length, n = e.length, i = 0, a = Math.min(r, n); i < a; ++i)
                if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                } return r < n ? -1 : n < r ? 1 : 0
        }, l.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(t, e) {
            if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return l.alloc(0);
            var r;
            if (void 0 === e)
                for (r = e = 0; r < t.length; ++r) e += t[r].length;
            var n = l.allocUnsafe(e),
                i = 0;
            for (r = 0; r < t.length; ++r) {
                var a = t[r];
                if (_(a, Uint8Array) && (a = l.from(a)), !l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, i), i += a.length
            }
            return n
        }, l.byteLength = c, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this
        }, l.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
            return this
        }, l.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
            return this
        }, l.prototype.toLocaleString = l.prototype.toString = function() {
            var t = this.length;
            return 0 === t ? "" : 0 === arguments.length ? w(this, 0, t) : function(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t = t || "utf8";;) switch (t) {
                    case "hex":
                        return E(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, e, r);
                    case "ascii":
                        return b(this, e, r);
                    case "latin1":
                    case "binary":
                        return m(this, e, r);
                    case "base64":
                        return k(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }.apply(this, arguments)
        }, l.prototype.equals = function(t) {
            if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === l.compare(this, t)
        }, l.prototype.inspect = function() {
            var t = "",
                e = M.INSPECT_MAX_BYTES;
            return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
        }, t && (l.prototype[t] = l.prototype.inspect), l.prototype.compare = function(t, e, r, n, i) {
            if (_(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + (void 0 === t ? "undefined" : _typeof(t)));
            if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (i <= n && r <= e) return 0;
            if (i <= n) return -1;
            if (r <= e) return 1;
            if (this === t) return 0;
            for (var a = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (e >>>= 0), s = Math.min(a, o), u = this.slice(n, i), f = t.slice(e, r), h = 0; h < s; ++h)
                if (u[h] !== f[h]) {
                    a = u[h], o = f[h];
                    break
                } return a < o ? -1 : o < a ? 1 : 0
        }, l.prototype.includes = function(t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }, l.prototype.indexOf = function(t, e, r) {
            return p(this, t, e, r, !0)
        }, l.prototype.lastIndexOf = function(t, e, r) {
            return p(this, t, e, r, !1)
        }, l.prototype.write = function(t, e, r, n) {
            if (void 0 === e) n = "utf8", r = this.length, e = 0;
            else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || i < r) && (r = i), 0 < t.length && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n = n || "utf8";
            for (var a, o, s, u, f, h, l, c, y, p = !1;;) switch (n) {
                case "hex":
                    return v(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return c = e, y = r, C(x(t, (l = this).length - c), l, c, y);
                case "ascii":
                    return g(this, t, e, r);
                case "latin1":
                case "binary":
                    return g(this, t, e, r);
                case "base64":
                    return u = this, f = e, h = r, C(B(t), u, f, h);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return o = e, s = r, C(function(t, e) {
                        for (var r, n, i, a = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = t.charCodeAt(o), n = r >> 8, i = r % 256, a.push(i), a.push(n);
                        return a
                    }(t, (a = this).length - o), a, o, s);
                default:
                    if (p) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), p = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var T = 4096;

        function b(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n
        }

        function m(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n
        }

        function E(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || n < r) && (r = n);
            for (var i = "", a = e; a < r; ++a) i += N(t[a]);
            return i
        }

        function A(t, e, r) {
            for (var n = t.slice(e, r), i = "", a = 0; a < n.length; a += 2) i += String.fromCharCode(n[a] + 256 * n[a + 1]);
            return i
        }

        function P(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (r < t + e) throw new RangeError("Trying to access beyond buffer length")
        }

        function S(t, e, r, n, i, a) {
            if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (i < e || e < a) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range")
        }

        function O(t, e, r, n) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function U(t, e, r, n, i) {
            return e = +e, r >>>= 0, i || O(t, 0, r, 4), a.write(t, e, r, n, 23, 4), r + 4
        }

        function I(t, e, r, n, i) {
            return e = +e, r >>>= 0, i || O(t, 0, r, 8), a.write(t, e, r, n, 52, 8), r + 8
        }
        l.prototype.slice = function(t, e) {
            var r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t);
            var n = this.subarray(t, e);
            return Object.setPrototypeOf(n, l.prototype), n
        }, l.prototype.readUIntLE = function(t, e, r) {
            t >>>= 0, e >>>= 0, r || P(t, e, this.length);
            for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256);) n += this[t + a] * i;
            return n
        }, l.prototype.readUIntBE = function(t, e, r) {
            t >>>= 0, e >>>= 0, r || P(t, e, this.length);
            for (var n = this[t + --e], i = 1; 0 < e && (i *= 256);) n += this[t + --e] * i;
            return n
        }, l.prototype.readUInt8 = function(t, e) {
            return t >>>= 0, e || P(t, 1, this.length), this[t]
        }, l.prototype.readUInt16LE = function(t, e) {
            return t >>>= 0, e || P(t, 2, this.length), this[t] | this[t + 1] << 8
        }, l.prototype.readUInt16BE = function(t, e) {
            return t >>>= 0, e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, l.prototype.readUInt32LE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, l.prototype.readUInt32BE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, l.prototype.readIntLE = function(t, e, r) {
            t >>>= 0, e >>>= 0, r || P(t, e, this.length);
            for (var n = this[t], i = 1, a = 0; ++a < e && (i *= 256);) n += this[t + a] * i;
            return (i *= 128) <= n && (n -= Math.pow(2, 8 * e)), n
        }, l.prototype.readIntBE = function(t, e, r) {
            t >>>= 0, e >>>= 0, r || P(t, e, this.length);
            for (var n = e, i = 1, a = this[t + --n]; 0 < n && (i *= 256);) a += this[t + --n] * i;
            return (i *= 128) <= a && (a -= Math.pow(2, 8 * e)), a
        }, l.prototype.readInt8 = function(t, e) {
            return t >>>= 0, e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, l.prototype.readInt16LE = function(t, e) {
            t >>>= 0, e || P(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, l.prototype.readInt16BE = function(t, e) {
            t >>>= 0, e || P(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, l.prototype.readInt32LE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, l.prototype.readInt32BE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, l.prototype.readFloatLE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), a.read(this, t, !0, 23, 4)
        }, l.prototype.readFloatBE = function(t, e) {
            return t >>>= 0, e || P(t, 4, this.length), a.read(this, t, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(t, e) {
            return t >>>= 0, e || P(t, 8, this.length), a.read(this, t, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(t, e) {
            return t >>>= 0, e || P(t, 8, this.length), a.read(this, t, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(t, e, r, n) {
            t = +t, e >>>= 0, r >>>= 0, n || S(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
                a = 0;
            for (this[e] = 255 & t; ++a < r && (i *= 256);) this[e + a] = t / i & 255;
            return e + r
        }, l.prototype.writeUIntBE = function(t, e, r, n) {
            t = +t, e >>>= 0, r >>>= 0, n || S(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
                a = 1;
            for (this[e + i] = 255 & t; 0 <= --i && (a *= 256);) this[e + i] = t / a & 255;
            return e + r
        }, l.prototype.writeUInt8 = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
        }, l.prototype.writeUInt16LE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
        }, l.prototype.writeUInt16BE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
        }, l.prototype.writeUInt32LE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
        }, l.prototype.writeUInt32BE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
        }, l.prototype.writeIntLE = function(t, e, r, n) {
            if (t = +t, e >>>= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                S(this, t, e, r, i - 1, -i)
            }
            var a = 0,
                o = 1,
                s = 0;
            for (this[e] = 255 & t; ++a < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1), this[e + a] = (t / o >> 0) - s & 255;
            return e + r
        }, l.prototype.writeIntBE = function(t, e, r, n) {
            if (t = +t, e >>>= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                S(this, t, e, r, i - 1, -i)
            }
            var a = r - 1,
                o = 1,
                s = 0;
            for (this[e + a] = 255 & t; 0 <= --a && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1), this[e + a] = (t / o >> 0) - s & 255;
            return e + r
        }, l.prototype.writeInt8 = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, l.prototype.writeInt16LE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
        }, l.prototype.writeInt16BE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
        }, l.prototype.writeInt32LE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
        }, l.prototype.writeInt32BE = function(t, e, r) {
            return t = +t, e >>>= 0, r || S(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
        }, l.prototype.writeFloatLE = function(t, e, r) {
            return U(this, t, e, !0, r)
        }, l.prototype.writeFloatBE = function(t, e, r) {
            return U(this, t, e, !1, r)
        }, l.prototype.writeDoubleLE = function(t, e, r) {
            return I(this, t, e, !0, r)
        }, l.prototype.writeDoubleBE = function(t, e, r) {
            return I(this, t, e, !1, r)
        }, l.prototype.copy = function(t, e, r, n) {
            if (!l.isBuffer(t)) throw new TypeError("argument should be a Buffer");
            if (r = r || 0, n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < n && n < r && (n = r), n === r) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var i = n - r;
            if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
            else if (this === t && r < e && e < n)
                for (var a = i - 1; 0 <= a; --a) t[a + e] = this[a + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
            return i
        }, l.prototype.fill = function(t, e, r, n) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !l.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                if (1 === t.length) {
                    var i = t.charCodeAt(0);
                    ("utf8" === n && i < 128 || "latin1" === n) && (t = i)
                }
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            var a;
            if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof(t = t || 0))
                for (a = e; a < r; ++a) this[a] = t;
            else {
                var o = l.isBuffer(t) ? t : l.from(t, n),
                    s = o.length;
                if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (a = 0; a < r - e; ++a) this[a + e] = o[a % s]
            }
            return this
        };
        var e = /[^+/0-9A-Za-z-_]/g;

        function N(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function x(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, a = [], o = 0; o < n; ++o) {
                if (55295 < (r = t.charCodeAt(o)) && r < 57344) {
                    if (!i) {
                        if (56319 < r) {
                            -1 < (e -= 3) && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === n) {
                            -1 < (e -= 3) && a.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        -1 < (e -= 3) && a.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && -1 < (e -= 3) && a.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((e -= 1) < 0) break;
                    a.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    a.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return a
        }

        function B(t) {
            return n.toByteArray(function(t) {
                if ((t = (t = t.split("=")[0]).trim().replace(e, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function C(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
            return i
        }

        function _(t, e) {
            return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
        }

        function K(t) {
            return t != t
        }
    }).call(this, j("buffer").Buffer)
}, {
    "base64-js": 1,
    buffer: 2,
    ieee754: 3
}],
3: [function(t, e, r) {
    r.read = function(t, e, r, n, i) {
        var a, o, s = 8 * i - n - 1,
            u = (1 << s) - 1,
            f = u >> 1,
            h = -7,
            l = r ? i - 1 : 0,
            c = r ? -1 : 1,
            y = t[e + l];
        for (l += c, a = y & (1 << -h) - 1, y >>= -h, h += s; 0 < h; a = 256 * a + t[e + l], l += c, h -= 8);
        for (o = a & (1 << -h) - 1, a >>= -h, h += n; 0 < h; o = 256 * o + t[e + l], l += c, h -= 8);
        if (0 === a) a = 1 - f;
        else {
            if (a === u) return o ? NaN : 1 / 0 * (y ? -1 : 1);
            o += Math.pow(2, n), a -= f
        }
        return (y ? -1 : 1) * o * Math.pow(2, a - n)
    }, r.write = function(t, e, r, n, i, a) {
        var o, s, u, f = 8 * a - i - 1,
            h = (1 << f) - 1,
            l = h >> 1,
            c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            y = n ? 0 : a - 1,
            p = n ? 1 : -1,
            d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), 2 <= (e += 1 <= o + l ? c / u : c * Math.pow(2, 1 - l)) * u && (o++, u /= 2), h <= o + l ? (s = 0, o = h) : 1 <= o + l ? (s = (e * u - 1) * Math.pow(2, i), o += l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), o = 0)); 8 <= i; t[r + y] = 255 & s, y += p, s /= 256, i -= 8);
        for (o = o << i | s, f += i; 0 < f; t[r + y] = 255 & o, y += p, o /= 256, f -= 8);
        t[r + y - p] |= 128 * d
    }
}, {}],
4: [function(t, e, r) {
    var b = t("./data.js");

    function m(t) {
        return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)) + 1e-5
    }

    function E(t, e) {
        return t.x * e.x + t.y * e.y
    }

    function A(t) {
        var e = m(t);
        return O(t.x / e, t.y / e)
    }

    function P(t, e) {
        return O(e.x - t.x, e.y - t.y)
    }

    function v(t, e) {
        return A(P(t, e))
    }

    function S(t) {
        return O(t.dx, t.dy)
    }

    function O(t, e) {
        return {
            x: t,
            y: e
        }
    }

    function n(t) {
        _classCallCheck(this, n), this.w = t
    }
    AI = (_createClass(n, [{
        key: "getTarget",
        value: function(t) {
            var e = 0,
                r = this.ownTank;
            if (!r) return null;
            var n = v(r, t),
                i = null,
                a = !0,
                o = !1,
                s = void 0;
            try {
                for (var u, f = Object.keys(this.w.entities)[Symbol.iterator](); !(a = (u = f.next()).done); a = !0) {
                    var h = u.value,
                        l = 0,
                        c = this.w.entities[h],
                        y = P(r, c),
                        p = v(r, c),
                        d = 180 * Math.acos(.9999 * E(p, n)) / 3.14;
                    if (y < 300 && c.entityType === b.entityTypes.TANK) l = 1e7 - y;
                    else {
                        if (30 < d) continue;
                        if (c.entityType === b.entityTypes.TANK) l = 1e5 - d;
                        else if (c.entityType === b.entityTypes.UNKNOWN) l = 1e4 - d;
                        else {
                            if (c.entityType !== b.entityTypes.SHAPE) continue;
                            l = 1e3 - d
                        }
                    }
                    e < l && (e = l, i = h)
                }
            } catch (t) {
                o = !0, s = t
            } finally {
                try {
                    !a && f.return && f.return()
                } finally {
                    if (o) throw s
                }
            }
            return i
        }
    }, {
        key: "lookAtAngle",
        value: function(t, e, r) {
            var n = 2 < arguments.length && void 0 !== r ? r : 2500,
                i = this.ownTank;
            if (!i) return null;
            if (!t) return null;
            var a = v(i, t),
                o = e / 180 * Math.PI,
                s = E(O(Math.cos(o), -Math.sin(o)), a),
                u = E(O(Math.sin(o), Math.cos(o)), a);
            return isNaN(s) || isNaN(u) ? (console.log("No position data for target"), null) : O(i.x + s * n, i.y + u * n)
        }
    }, {
        key: "aimAt",
        value: function(t, e) {
            var r = this.ownTank;
            if (!r) return null;
            var n = P(r, e),
                i = m(n),
                a = t.min + (t.max - t.min) * Math.max(1 - i / t.range, 0),
                o = O(n.y / i, -n.x / i),
                s = E(o, S(e));
            if (.9 * a < s) return console.log("hit impossible"), null;
            var u = s / Math.sqrt(Math.pow(a, 2) - Math.pow(s, 2)) * i,
                f = {
                    x: e.x + u * o.x,
                    y: e.y + u * o.y
                };
            return isNaN(f.x) || isNaN(f.y) ? (console.log("No position data for target"), null) : (console.log("DIS: " + i.toFixed(2) + " BS " + a.toFixed(2) + " ES " + e.speed.toFixed(2) + " PS " + s.toFixed(2) + " EV " + [e.dx.toFixed(2), e.dy.toFixed(2)] + " PV " + [o.x.toFixed(2), o.y.toFixed(2)] + " O: " + u.toFixed(2)), f)
        }
    }, {
        key: "goto",
        value: function(t, e, r) {
            var n = 1 < arguments.length && void 0 !== e ? e : 55,
                i = !(2 < arguments.length && void 0 !== r) || r;
            if (!t) return null;
            var a = this.ownTank;
            if (!a) return null;
            var o = P(a, t),
                s = m(o),
                u = A(o),
                f = (i ? 1 : Math.min(s / 500, 1)) * n,
                h = O(f * u.x, f * u.y),
                l = P(S(a), h);
            if (isNaN(l.x) || isNaN(l.y)) return console.log("No position for target"), null;
            var c = 0,
                y = null,
                p = !0,
                d = !1,
                v = void 0;
            try {
                for (var g, k = Object.keys(b.directionAccelerations)[Symbol.iterator](); !(p = (g = k.next()).done); p = !0) {
                    var w = g.value,
                        T = E(b.directionAccelerations[w], l);
                    c < T && (c = T, y = w)
                }
            } catch (t) {
                d = !0, v = t
            } finally {
                try {
                    !p && k.return && k.return()
                } finally {
                    if (d) throw v
                }
            }
            return {
                key: b.directionKeys[y]
            }
        }
    }, {
        key: "ramInto",
        value: function(t, e, r, n) {
            var i = 1 < arguments.length && void 0 !== e ? e : 50,
                a = 2 < arguments.length && void 0 !== r ? r : 66,
                o = !(3 < arguments.length && void 0 !== n) || n;
            if (!t) return null;
            if (!this.ownTank) return null;
            var s = this.aimAt({
                    max: i,
                    min: i,
                    range: 10
                }, t),
                u = this.goto(s, a, !0),
                f = this.lookAtAngle(s, o ? 180 : 0),
                h = {};
            return Object.assign(h, u), Object.assign(h, f), h
        }
    }, {
        key: "huntDown",
        value: function(t, e, r, n, i) {
            if (!t) return null;
            var a = this.ownTank;
            if (!a) return null;
            var o = this.aimAt(e, t),
                s = this.aimAt({
                    max: r,
                    min: r,
                    range: 10
                }, t);
            s = s || t;
            var u = function(t, e) {
                return m(P(t, e))
            }(t, a);
            s = this.lookAtAngle(s, 0, u - i);
            var f = this.goto(s, n, !1),
                h = {};
            return Object.assign(h, f), Object.assign(h, o), h
        }
    }, {
        key: "dodgeBullets",
        value: function() {}
    }, {
        key: "ownTank",
        get: function() {
            var t = this.w.getLowestEntity(b.entityTypes.OWN_TANK);
            return t || (console.log("Cannot find own tank"), null)
        }
    }]), n), e.exports = {
        AI: AI
    }
}, {
    "./data.js": 6
}],
5: [function(t, e, r) {
    var n = t("./world.js").World,
        i = t("./data.js"),
        a = t("./tank.js"),
        o = t("./ai.js").AI;
    var s = (_createClass(u, [{
        key: "reset",
        value: function() {
            return this.w.clear(), this.buildManager.reset(), [{
                kind: i.outPacketKinds.INPUT,
                x: 0,
                y: 0,
                key: i.keyInput.SUICIDE
            }, {
                kind: i.outPacketKinds.CLEAR_DEATH
            }, {
                kind: i.outPacketKinds.SPAWN,
                name: "Baby Bot <3"
            }]
        }
    }, {
        key: "noTargetStrategy",
        value: function(t) {
            return Object.assign(t, {
                key: i.keyInput[Object.keys(i.directionKeys)[this.w.frame % 8]]
            }), t
        }
    }, {
        key: "universalStrategy",
        value: function(t) {
            var e = t.key || 0,
                r = this.w.getLowestEntity(i.entityTypes.TANK),
                n = this.tankConfig;
            return r ? (this.tankConfig.ramming ? Object.assign(t, this.ai.ramInto(r, n.avgTankSpeed, n.maxTankSpeed, n.reverseShoot)) : Object.assign(t, this.ai.huntDown(r, n.bulletProfile, n.avgTankSpeed, n.maxTankSpeed, n.keepDist)), t.key |= i.keyInput.LEFT_MOUSE) : t = this.noTargetStrategy(t), t.key |= e, t
        }
    }, {
        key: "worldUpdate",
        value: function(t) {
            this.w.eatUpdate(t)
        }
    }, {
        key: "getOutPackets",
        value: function(t) {
            var e = (0 < arguments.length && void 0 !== t ? t : null) || {
                kind: i.outPacketKinds.INPUT,
                key: 0,
                x: 0,
                y: 0
            };
            return this.spawned ? this.buildManager.initDone ? this.w.checkAliveAndOk() ? [this.universalStrategy(e)] : this.reset() : this.buildManager.maybeGetInitPackets(this.w) : (this.spawned = !0, this.reset())
        }
    }]), u);

    function u() {
        var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a.dragonConfig;
        if (_classCallCheck(this, u), !t) throw "Only sandbox is supported.";
        this.w = new n, this.ai = new o(this.w), this.tankConfig = e, this.buildManager = new a.TankBuildManager(this.tankConfig), this.spawned = !1
    }
    e.exports = {
        Bot: s
    }
}, {
    "./ai.js": 4,
    "./data.js": 6,
    "./tank.js": 11,
    "./world.js": 12
}],
6: [function(t, e, r) {
    var n = {
            objPosX: 3,
            objPosY: 1,
            objAngle: 2,
            agentPosX: 66,
            agentPosY: 23,
            agentPosX2: 18,
            agentPosY2: 44,
            fade: 64,
            opacity: 65,
            counter: 29,
            weirdBytes1: 19,
            weirdBytes2: 29,
            expPointsOthert: 20,
            maxHealth: 35,
            health: 37,
            timeAliveThis: 28,
            tankMass: 25,
            tankSpeed: 31,
            tankLevel: 38,
            expPointsThis: 39
        },
        i = {},
        a = !0,
        o = !1,
        s = void 0;
    try {
        for (var u, f = Object.keys(n)[Symbol.iterator](); !(a = (u = f.next()).done); a = !0) {
            var h = u.value;
            i[n[h]] = h
        }
    } catch (t) {
        o = !0, s = t
    } finally {
        try {
            !a && f.return && f.return()
        } finally {
            if (o) throw s
        }
    }
    var l = {
            LEFT_MOUSE: 1,
            UP: 2,
            LEFT: 4,
            DOWN: 8,
            RIGHT: 16,
            GOD_MODE: 32,
            SUICIDE: 64,
            RIGHT_MOUSE: 128,
            INSTANT_UPGRADE: 256,
            USE_GAMEPAD: 512,
            SWITCH_CLASS: 1024,
            TRUE_CONST: 2048
        },
        c = {
            UP: l.UP,
            RIGHT_UP: l.RIGHT | l.UP,
            RIGHT: l.RIGHT,
            RIGHT_DOWN: l.RIGHT | l.DOWN,
            DOWN: l.DOWN,
            LEFT_DOWN: l.LEFT | l.DOWN,
            LEFT: l.LEFT,
            LEFT_UP: l.LEFT | l.UP
        },
        y = (_createClass(p, [{
            key: "get",
            value: function(t) {
                return this.lookup[t]
            }
        }, {
            key: "find",
            value: function(t) {
                if (!this.reverse.hasOwnProperty(t)) throw t;
                return this.reverse[t]
            }
        }]), p);

    function p() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        _classCallCheck(this, p);
        var r = "function" === e ? e : function(t) {
            return t ^ e
        };
        this.table = t, this.length = t.length, this.lookup = {}, this.reverse = {};
        for (var n = 0; n < t.length; n++) this.lookup[r(n)] = t[n], this.reverse[t[n]] = r(n)
    }
    var d = new y([8, 7, 6, 5, 4, 3, 2, 1], 0),
        v = new y(["Tank", "Twin", "Triplet", "Triple Shot", "Quad Tank", "Octo Tank", "Sniper", "Machine Gun", "Flank Guard", "Tri-Angle", "Destroyer", "Overseer", "Overlord", "Twin-Flank", "Penta Shot", "Assassin", "Arena Closer", "Necromancer", "Triple Twin", "Hunter", "Gunner", "Stalker", "Ranger", "Booster", "Fighter", "Hybrid", "Manager", "Mothership", "Predator", "Sprayer", "", "Trapper", "Gunner Trapper", "Overtrapper", "Mega Trapper", "Tri-Trapper", "Smasher", "", "Landmine", "Auto Gunner", "Auto 5", "Auto 3", "Spread Shot", "Streamliner", "Auto Trapper", "Dominator", "Dominator", "Dominator", "Battleship", "Annihilator", "Auto Smasher", "Spike", "Factory", "", "Skimmer", "Rocketeer"], 0);
    e.exports = {
        updateKinds: {
            CREATE: 1,
            UPDATE: 2
        },
        inPacketKinds: {
            UPDATE: 0,
            UPDATE_COMPRESSED: 2,
            IGNORE: -1
        },
        entityTypes: {
            UNKNOWN: "UNKNOWN",
            TANK: "TANK",
            BULLET: "BULLET",
            SHAPE: "SHAPE",
            BOT: "BOT",
            OWN_TANK: "OWN_TANK",
            LEADER_TANK: "LEADER_TANK"
        },
        fieldIdToType: {
            1: "vi",
            2: "vi",
            3: "vi",
            23: "float",
            66: "float",
            18: "float",
            44: "float",
            64: "float",
            65: "float",
            29: "float",
            19: "vu",
            57: "vu",
            20: "float",
            35: "float",
            37: "float",
            28: "float",
            25: "vi",
            26: "float",
            27: "float",
            31: "float",
            38: "vi",
            39: "float",
            59: "float",
            63: "vu",
            67: "vu",
            53: "vu"
        },
        fieldIdToName: i,
        tankTable: v,
        statTable: d,
        outPacketKinds: {
            INIT: 0,
            INPUT: 1,
            SPAWN: 2,
            UPDATE_STAT: 3,
            UPDATE_TANK: 4,
            HEARTBEAT: 5,
            UNKNOWN: 6,
            EXT_FOUND: 7,
            CLEAR_DEATH: 8,
            TAKE_TANK: 9
        },
        keyInput: l,
        directionAccelerations: {
            UP: {
                x: 0,
                y: -1
            },
            RIGHT_UP: {
                x: .707,
                y: -.707
            },
            RIGHT: {
                x: 1,
                y: 0
            },
            RIGHT_DOWN: {
                x: .707,
                y: .707
            },
            DOWN: {
                x: 0,
                y: 1
            },
            LEFT_DOWN: {
                x: -.707,
                y: .707
            },
            LEFT: {
                x: -1,
                y: 0
            },
            LEFT_UP: {
                x: -.707,
                y: -.707
            }
        },
        directionKeys: c
    }
}, {}],
7: [function(u, f, t) {
    (function(r) {
        var e = u("./data.js"),
            t = new ArrayBuffer(4),
            n = new Uint8Array(t),
            i = new Uint32Array(t),
            a = new Float32Array(t),
            o = (_createClass(s, [{
                key: "i8",
                value: function(t) {
                    return this.buffer[this.length] = t, this.length += 1, this
                }
            }, {
                key: "i32",
                value: function(t) {
                    return i[0] = t, this.buffer.set(n, this.length), this.length += 4, this
                }
            }, {
                key: "float",
                value: function(t) {
                    return a[0] = t, this.buffer.set(n, this.length), this.length += 4, this
                }
            }, {
                key: "vu",
                value: function(t) {
                    do {
                        var e = t;
                        (t >>>= 7) && (e |= 128), this.buffer[this.length++] = e
                    } while (t);
                    return this
                }
            }, {
                key: "vi",
                value: function(t) {
                    var e = (2147483648 & t) >>> 31;
                    e && (t = ~t);
                    var r = t << 1 | e;
                    return this.vu(r), this
                }
            }, {
                key: "vf",
                value: function(t) {
                    return a[0] = t, this.vi(function(t) {
                        return (255 & t) << 24 | (65280 & t) << 8 | t >> 8 & 65280 | t >> 24 & 255
                    }(i[0])), this
                }
            }, {
                key: "string",
                value: function(t) {
                    if (t) {
                        var e = new Uint8Array(r.from(t));
                        this.buffer.set(e, this.length), this.length += e.length
                    }
                    return this.buffer[this.length++] = 0, this
                }
            }, {
                key: "out",
                value: function() {
                    return this.buffer.buffer.slice(0, this.length)
                }
            }, {
                key: "dump",
                value: function() {
                    return Array.from(this.buffer.subarray(0, this.length)).map(function(t) {
                        return t.toString(16).padStart(2, 0)
                    }).join(" ")
                }
            }, {
                key: "encodeOutbound",
                value: function(t) {
                    switch (t.kind) {
                        case e.outPacketKinds.INIT:
                            return this.encodeInit(t);
                        case e.outPacketKinds.INPUT:
                            return this.encodeInput(t);
                        case e.outPacketKinds.SPAWN:
                            return this.encodeSpawn(t);
                        case e.outPacketKinds.UPDATE_STAT:
                            return this.encodeUpdateStat(t);
                        case e.outPacketKinds.UPDATE_TANK:
                            return this.encodeUpdateTank(t);
                        case e.outPacketKinds.EXT_FOUND:
                            return !1;
                        default:
                            return t.data ? t.data : this.vu(t.kind).out()
                    }
                }
            }, {
                key: "encodeInput",
                value: function(t) {
                    return this.vu(t.kind).vu(t.key).vf(t.x).vf(t.y).out()
                }
            }, {
                key: "encodeInit",
                value: function(t) {
                    return this.vu(t.kind).string(t.build).string(t.unk1).string(t.partyId).string(t.unk2).out()
                }
            }, {
                key: "encodeSpawn",
                value: function(t) {
                    return this.vu(t.kind).string(t.name).out()
                }
            }, {
                key: "encodeUpdateStat",
                value: function(t) {
                    return this.vu(t.kind).vu(t.statId).vu(t.upto).out()
                }
            }, {
                key: "encodeUpdateTank",
                value: function(t) {
                    return this.vu(t.kind).vu(t.tankId).out()
                }
            }]), s);

        function s() {
            _classCallCheck(this, s), this.length = 0, this.buffer = new Uint8Array(4096)
        }
        f.exports = {
            Encoder: o
        }
    }).call(this, u("buffer").Buffer)
}, {
    "./data.js": 6,
    buffer: 2
}],
8: [function(t, e, r) {
    for (var n = t("./data.js"), i = t("./tank.js"), a = t("./parser.js").Parser, f = t("./encoder.js").Encoder, o = t("./bot.js").Bot, s = t("./injection.js").inject;;) {
        var u = window.prompt("Which tank to use? Select one from: " + Object.keys(i.tankTypes)) || "predator";
        if (i.tankTypes.hasOwnProperty(u)) break;
        window.alert("No such tank: " + u + " (not supported).")
    }
    var h = new o(!0, i.tankTypes[u]),
        l = !1;
    var c = s(function(t) {
        try {
            var e = new a(t);
            h.worldUpdate(e.parseInbound())
        } catch (t) {}
        return t
    }, function(t) {
        var e = new a(t).parseOutbound();
        return e.kind === n.outPacketKinds.INPUT ? l ? function(t, e) {
            var r = !0,
                n = !1,
                i = void 0;
            try {
                for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                    var s = a.value,
                        u = new f;
                    c.call(t, u.encodeOutbound(s))
                }
            } catch (t) {
                n = !0, i = t
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw i
                }
            }
            return null
        }(this, h.getOutPackets(e)) : t : e.kind === n.outPacketKinds.EXT_FOUND ? null : (e.kind === n.outPacketKinds.SPAWN && (l = !0, h.reset()), t)
    })
}, {
    "./bot.js": 5,
    "./data.js": 6,
    "./encoder.js": 7,
    "./injection.js": 9,
    "./parser.js": 10,
    "./tank.js": 11
}],
9: [function(t, e, r) {
    e.exports = {
        inject: function(n, i) {
            var a = new Set,
                o = window.WebSocket.prototype.send;
            return window.WebSocket.prototype.send = function(t) {
                var e = new Uint8Array(t);
                if (!a.has(this)) {
                    console.log("Hello: New WebSocket is being used."), a.add(this);
                    var r = this.onmessage;
                    this.onmessage = function(t) {
                        if (n && (t.data = n.call(this, new Uint8Array(t.data))), t.data) return r.call(this, t)
                    }
                }
                try {
                    i && (e = i.call(this, e))
                } catch (t) {
                    console.log(t)
                }
                if (e) return o.call(this, e)
            }, console.log("injection ok"), o
        }
    }
}, {}],
10: [function(t, e, r) {
    var n = t("./data.js"),
        i = new ArrayBuffer(4),
        a = new Uint8Array(i),
        o = new Uint32Array(i),
        s = new Float32Array(i),
        u = (_createClass(f, [{
            key: "i8",
            value: function() {
                var t = this.buffer[this.at++];
                return this.assertNotOOB(), t
            }
        }, {
            key: "endianSwap",
            value: function(t) {
                return (255 & t) << 24 | (65280 & t) << 8 | t >> 8 & 65280 | t >> 24 & 255
            }
        }, {
            key: "i32",
            value: function() {
                return a.set(this.buffer.subarray(this.at, this.at += 4)), this.assertNotOOB(), o[0]
            }
        }, {
            key: "float",
            value: function() {
                return a.set(this.buffer.subarray(this.at, this.at += 4)), this.assertNotOOB(), s[0]
            }
        }, {
            key: "vleft",
            value: function() {
                this.at--;
                for (var t = 1; 128 & this.buffer[this.at - 1] && t < 4;) this.at--, t++
            }
        }, {
            key: "vu",
            value: function() {
                for (var t = 0, e = 0; 128 & this.buffer[this.at];) t |= (127 & this.buffer[this.at++]) << e, e += 7;
                return t |= this.buffer[this.at++] << e, this.assertNotOOB(), t
            }
        }, {
            key: "vi",
            value: function() {
                var t = this.vu(),
                    e = 1 & t;
                return t >>= 1, e && (t = ~t), this.assertNotOOB(), t
            }
        }, {
            key: "vf",
            value: function() {
                return o[0] = this.endianSwap(this.vi()), this.assertNotOOB(), s[0]
            }
        }, {
            key: "string",
            value: function() {
                for (var t = ""; this.buffer[this.at];) t += String.fromCharCode(this.buffer[this.at]), this.at++;
                return this.at++, this.assertNotOOB(), t
            }
        }, {
            key: "getByteString",
            value: function(t, e) {
                for (var r = ""; t < e && t < this.buffer.length;) {
                    var n = this.buffer[t];
                    r += (n < 16 ? "0" : "") + n.toString(16) + " ", t++
                }
                return r
            }
        }, {
            key: "isEOF",
            value: function() {
                return this.at === this.buffer.length
            }
        }, {
            key: "raiseUnexpected",
            value: function(t, e) {
                var r = "Error at pos " + this.at + ": " + t;
                "tolerate" !== e && console.log(r);
                var n = new Error(r);
                throw n.payload = e, n
            }
        }, {
            key: "assertEOF",
            value: function() {
                this.isEOF() || this.raiseUnexpected("Expected end of packet.")
            }
        }, {
            key: "assertNotOOB",
            value: function() {
                this.at > this.buffer.length && this.raiseUnexpected("Unexpected end of packet.")
            }
        }, {
            key: "assertNoIntersectingKeys",
            value: function(t, e) {}
        }, {
            key: "parseOutbound",
            value: function() {
                var t = this.i8();
                switch (t) {
                    case n.outPacketKinds.INIT:
                        return this.parseInit();
                    case n.outPacketKinds.INPUT:
                        return this.parseInput();
                    case n.outPacketKinds.SPAWN:
                        return this.parseSpawn();
                    case n.outPacketKinds.UPDATE_STAT:
                        return this.parseUpdateStat();
                    case n.outPacketKinds.UPDATE_TANK:
                        return this.parseUpdateTank();
                    default:
                        return {
                            kind: t, data: this.buffer
                        }
                }
            }
        }, {
            key: "parseInput",
            value: function() {
                var t = {
                    kind: n.outPacketKinds.INPUT,
                    key: this.vu(),
                    x: this.vf(),
                    y: this.vf()
                };
                return this.isEOF() || console.log("Unexpected end of output 'input' packet."), this.assertEOF(), t
            }
        }, {
            key: "parseInit",
            value: function() {
                if (this.isEOF()) return {
                    kind: n.outPacketKinds.INIT
                };
                var t = {
                    kind: n.outPacketKinds.INIT,
                    build: this.string(),
                    unk1: this.string(),
                    partyId: this.string(),
                    unk2: this.string()
                };
                return this.assertEOF(), t
            }
        }, {
            key: "parseSpawn",
            value: function() {
                var t = {
                    kind: n.outPacketKinds.SPAWN,
                    name: this.string()
                };
                return this.assertEOF(), t
            }
        }, {
            key: "parseUpdateStat",
            value: function() {
                var t = {
                    kind: n.outPacketKinds.UPDATE_STAT,
                    statId: this.vu(),
                    upto: this.vu()
                };
                return this.assertEOF(), t
            }
        }, {
            key: "parseUpdateTank",
            value: function() {
                var t = {
                    kind: n.outPacketKinds.UPDATE_TANK,
                    tankId: this.vu()
                };
                return this.assertEOF(), t
            }
        }, {
            key: "parseInbound",
            value: function() {
                var t = this.i8();
                return t === n.inPacketKinds.UPDATE ? this.buffer.length < 2 ? this.ignorePacket("?") : this.updatePacket() : t === n.inPacketKinds.UPDATE_COMPRESSED ? this.updateCompressedPacket() : this.ignorePacket(t)
            }
        }, {
            key: "updatePacket",
            value: function() {
                var t = this.vu(),
                    e = {
                        kind: n.inPacketKinds.UPDATE,
                        updateId: t,
                        deletes: this.multiEntityDeletes(),
                        upcreates: this.multiEntityUpcreates()
                    };
                return this.assertEOF(), e
            }
        }, {
            key: "updateCompressedPacket",
            value: function() {
                this.raiseUnexpected("UPDATE_COMPRESSED not supported", "compressed")
            }
        }, {
            key: "ignorePacket",
            value: function(t) {
                return {
                    kind: n.inPacketKinds.IGNORE,
                    ignore_reason: t
                }
            }
        }, {
            key: "entityId",
            value: function() {
                var t = this.vu() + "#" + this.vu();
                return this.curEntityId = t
            }
        }, {
            key: "isMatch",
            value: function(t) {
                if (this.at + t.length > this.buffer.length) return !1;
                for (var e = 0; e < t.length; e++)
                    if (this.buffer[e + this.at] !== t[e]) return !1;
                return !0
            }
        }, {
            key: "moveToNextCreate",
            value: function() {
                for (; ++this.at < this.buffer.length;)
                    if (this.entityCreateTypeId() !== n.entityTypes.UNKNOWN && 0 === this.buffer[this.at - 1] && 1 === this.buffer[this.at - 2]) return this.vleft(), this.vleft(), this.vleft(), void this.vleft();
                this.assertEOF()
            }
        }, {
            key: "entityCreateTypeId",
            value: function() {
                return this.isMatch([2, 0, 5, 3, 0, 3]) ? n.entityTypes.TANK : this.isMatch([2, 0, 7, 0, 1]) ? n.entityTypes.BULLET : this.isMatch([2, 0, 5, 3, 0, 1]) ? n.entityTypes.SHAPE : n.entityTypes.UNKNOWN
            }
        }, {
            key: "fieldIdSpec",
            value: function() {
                return 1 ^ this.vu()
            }
        }, {
            key: "updateKind",
            value: function() {
                var t = this.vu(),
                    e = this.vu();
                return 1 === t && 0 === e ? n.updateKinds.CREATE : 0 === t && 1 === e ? n.updateKinds.UPDATE : (console.log(), void this.raiseUnexpected("Unknown update type: " + t + " " + e, 9 === e ? "tolerate" : null))
            }
        }, {
            key: "multiEntityDeletes",
            value: function() {
                for (var t = this.vu(), e = [], r = 0; r < t; r++) e.push(this.entityId());
                return e
            }
        }, {
            key: "multiEntityUpcreates",
            value: function() {
                for (var t = this.vu(), e = [], r = 0; r < t; r++) {
                    if (this.isEOF()) {
                        console.log("unexpected eof...");
                        break
                    }
                    e.push(this.entityUpcreate())
                }
                return this.assertEOF(), e
            }
        }, {
            key: "entityUpcreate",
            value: function() {
                var t = this.entityId(),
                    e = this.updateKind(),
                    r = {
                        entityId: t,
                        updateKind: e
                    };
                return e === n.updateKinds.CREATE ? Object.assign(r, this.entityCreate()) : e === n.updateKinds.UPDATE ? Object.assign(r, this.entityUpdate()) : this.raiseUnexpected("Internal error"), r
            }
        }, {
            key: "parseField",
            value: function(t) {
                n.fieldIdToType.hasOwnProperty(t) || this.raiseUnexpected("Unknown property field_id: " + t + " @ " + this.curEntityId, t);
                var e = n.fieldIdToType[t];
                if (!(e in this)) return this.raiseUnexpected("Internal error: method to parse field_type " + field_name + " not implemented"), {};
                var r = {};
                return r[n.fieldIdToName.hasOwnProperty(t) ? n.fieldIdToName[t] : "unk_" + e + "_" + t] = this[e](), r
            }
        }, {
            key: "entityUpdate",
            value: function() {
                for (var t = this.fieldIdSpec(), e = {};;) {
                    var r = this.parseField(t);
                    this.assertNoIntersectingKeys(e, r), Object.assign(e, r);
                    var n = this.fieldIdSpec();
                    if (0 === n) break;
                    t += n
                }
                return e
            }
        }, {
            key: "entityCreate",
            value: function() {
                var t = this.entityCreateTypeId();
                t === n.entityTypes.UNKNOWN && this.raiseUnexpected("Entity create: " + this.curEntityId + ", " + t + ".", "create");
                var e = {
                    entityType: t
                };
                return this.moveToNextCreate(), e
            }
        }]), f);

    function f(t) {
        _classCallCheck(this, f), this.at = 0, this.buffer = new Uint8Array(t), this.curEntityId = ""
    }

    function h(t) {
        var e = new ArrayBuffer(t.length),
            r = new Uint8Array(e),
            n = 0,
            i = !0,
            a = !1,
            o = void 0;
        try {
            for (var s, u = t[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                var f = s.value;
                r[n++] = f
            }
        } catch (t) {
            a = !0, o = t
        } finally {
            try {
                !i && u.return && u.return()
            } finally {
                if (a) throw o
            }
        }
        return e
    }
    e.exports = {
        Parser: u,
        byteStringToBuffer: function(t) {
            var e = t.split(" "),
                r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                    var u = o.value;
                    r.push(parseInt(u, 16))
                }
            } catch (t) {
                i = !0, a = t
            } finally {
                try {
                    !n && s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            return h(r)
        },
        bytesToBuffer: h
    }
}, {
    "./data.js": 6
}],
11: [function(t, e, r) {
    var d = t("./data.js"),
        n = {
            bulletProfile: {
                max: 111,
                min: 64,
                range: 1500
            },
            maxTankSpeed: 60,
            avgTankSpeed: 40,
            reverseShoot: !1,
            ramming: !1,
            stat: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            seq: [100],
            keepDist: 1100
        },
        i = {
            bulletProfile: {
                max: 111,
                min: 64,
                range: 1500
            },
            maxTankSpeed: 60,
            avgTankSpeed: 40,
            reverseShoot: !1,
            ramming: !1,
            stat: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            seq: [100, 78, 80],
            keepDist: 1100
        },
        a = {
            bulletProfile: {
                max: 55,
                min: 55,
                range: 1500
            },
            maxTankSpeed: 60,
            avgTankSpeed: 40,
            reverseShoot: !1,
            ramming: !1,
            stat: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 3, 2, 3, 2, 3],
            seq: [120, 122, 88],
            keepDist: 100
        },
        o = {
            bulletProfile: {
                max: 55,
                min: 55,
                range: 1500
            },
            maxTankSpeed: 60,
            avgTankSpeed: 40,
            reverseShoot: !1,
            ramming: !1,
            stat: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8],
            seq: [120, 122, 88],
            keepDist: 800
        },
        s = {
            bulletProfile: {
                max: 121,
                min: 74,
                range: 2e3
            },
            maxTankSpeed: 60,
            avgTankSpeed: 40,
            reverseShoot: !1,
            ramming: !1,
            stat: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
            seq: [100, 126, 74],
            isAC: !0,
            keepDist: 1500
        },
        u = {
            bulletProfile: {
                max: 30,
                min: 20,
                range: 500
            },
            maxTankSpeed: 66,
            avgTankSpeed: 50,
            reverseShoot: !0,
            ramming: !0,
            stat: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1],
            seq: [102, 124, 10]
        };
    var f = (_createClass(h, [{
        key: "reset",
        value: function() {
            this.initDone = !1, this.lvlPacketsSent = 0, this.initPacketsSent = 0, this.stage = 0, this.possibleOwn = {}, this.lastAngle = null, this.lastStamp = -1 / 0, this.numSamles = 0
        }
    }, {
        key: "maybeGetInitPackets",
        value: function(t) {
            switch (this.stage) {
                case 0:
                    if (33 <= this.numSamles) {
                        var e = [],
                            r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var a, o = Object.keys(this.possibleOwn)[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                                var s = a.value;
                                11 <= this.possibleOwn[s] && e.push(s)
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !r && o.return && o.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        if (1 !== e.length) throw console.log("Could not find the own tank id, this is fatal!", e), new Error("own tank inference...");
                        return t.entities[e[0]].entityType = d.entityTypes.OWN_TANK, this.stage = this.sanboxMode ? 1 : 4, this.getLVLPacket()
                    }
                    if (t.stamp > this.lastStamp) {
                        if (this.lastAngle) {
                            var u = function(t, e, r) {
                                    var n, i = [],
                                        a = !0,
                                        o = !1,
                                        s = void 0;
                                    try {
                                        for (var u, f = Object.keys(t.entities)[Symbol.iterator](); !(a = (u = f.next()).done); a = !0) {
                                            var h = u.value,
                                                l = t.entities[h];
                                            l.hasOwnProperty("objAngle") && Math.abs((n = l.objAngle * Math.PI / 180 - e, Math.atan2(Math.sin(n), Math.cos(n)))) < r && i.push(h)
                                        }
                                    } catch (t) {
                                        o = !0, s = t
                                    } finally {
                                        try {
                                            !a && f.return && f.return()
                                        } finally {
                                            if (o) throw s
                                        }
                                    }
                                    return i
                                }(t, this.lastAngle, 15 * Math.PI / 180),
                                f = !0,
                                h = !1,
                                l = void 0;
                            try {
                                for (var c, y = u[Symbol.iterator](); !(f = (c = y.next()).done); f = !0) {
                                    var p = c.value;
                                    this.possibleOwn[p] = (this.possibleOwn[p] || 0) + 1
                                }
                            } catch (t) {
                                h = !0, l = t
                            } finally {
                                try {
                                    !f && y.return && y.return()
                                } finally {
                                    if (h) throw l
                                }
                            }
                            this.numSamles++
                        }
                        return this.lastStamp = t.stamp + 2, this.lastAngle = 2 * Math.random() * Math.PI, [{
                            kind: d.outPacketKinds.INPUT,
                            key: d.keyInput.INSTANT_UPGRADE,
                            x: 1e6 * Math.cos(this.lastAngle),
                            y: 1e6 * Math.sin(this.lastAngle)
                        }]
                    }
                    return [];
                case 1:
                    return this.lvlPacketsSent > 121 - this.numSamles && this.stage++, this.lvlPacketsSent++, this.getLVLPacket();
                case 2:
                    return this.stage++, this.getStatUpdatePackets();
                case 3:
                    return this.stage++, this.getTankUpdatePackets();
                case 4:
                    return 3 < this.initPacketsSent && this.stage++, this.initPacketsSent++, this.getInitPacket();
                default:
                    return this.initDone = !0, []
            }
        }
    }, {
        key: "getLVLPacket",
        value: function() {
            return [{
                kind: d.outPacketKinds.INPUT,
                key: d.keyInput.INSTANT_UPGRADE,
                x: 0,
                y: 0
            }]
        }
    }, {
        key: "getInitPacket",
        value: function() {
            return [{
                kind: d.outPacketKinds.INPUT,
                key: d.keyInput.LEFT | d.keyInput.UP,
                x: 0,
                y: 0
            }]
        }
    }, {
        key: "getStatUpdatePackets",
        value: function() {
            var t = {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0
                },
                e = [],
                r = !0,
                n = !1,
                i = void 0;
            try {
                for (var a, o = this.config.stat[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                    var s = a.value;
                    if (t[s]++, 7 < t[s]) throw "this will not work :)";
                    e.push({
                        kind: d.outPacketKinds.UPDATE_STAT,
                        statId: 2 * d.statTable.find(s),
                        upto: 2 * t[s]
                    })
                }
            } catch (t) {
                n = !0, i = t
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw i
                }
            }
            return e
        }
    }, {
        key: "getTankUpdatePackets",
        value: function() {
            var t = [],
                e = !0,
                r = !1,
                n = void 0;
            try {
                for (var i, a = this.config.seq[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                    var o = i.value;
                    t.push({
                        kind: d.outPacketKinds.UPDATE_TANK,
                        tankId: o
                    })
                }
            } catch (t) {
                r = !0, n = t
            } finally {
                try {
                    !e && a.return && a.return()
                } finally {
                    if (r) throw n
                }
            }
            return this.config.isAC && t.push({
                kind: d.outPacketKinds.INPUT,
                key: d.keyInput.SWITCH_CLASS,
                x: 0,
                y: 0
            }), t
        }
    }]), h);

    function h(t) {
        var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        if (_classCallCheck(this, h), this.config = t, 33 !== this.config.stat.length) throw "Specify 33 upgrade stat points.";
        this.sanboxMode = e, this.reset()
    }
    var l = {
        dragon: a,
        fighter: o,
        sniper: n,
        predator: i,
        ram: u,
        ac: s
    };
    e.exports = {
        sniperConfig: n,
        predatorConfig: i,
        acConfig: s,
        aniRamConfig: u,
        dragonConfig: a,
        fighterConfig: o,
        tankTypes: l,
        TankBuildManager: f
    }
}, {
    "./data.js": 6
}],
12: [function(t, e, r) {
    var m = t("./data.js"),
        s = {
            entityTTL: 200,
            deleteDead: !0
        };

    function y(t) {
        return t.hasOwnProperty("x") && t.hasOwnProperty("y")
    }
    var n = (_createClass(i, [{
        key: "clear",
        value: function() {
            this.entities = {}, this.oldEntities = {}, this.typeInference = {
                "1#0": m.entityTypes.LEADER_TANK
            }, this.stamp = 0, this.frame = 0
        }
    }, {
        key: "checkAliveAndOk",
        value: function() {
            if (this.frame < 250) return !0;
            var t = this.getLowestEntity(m.entityTypes.OWN_TANK);
            return t && this.stamp - t.stamp < 100
        }
    }, {
        key: "eatUpdate",
        value: function(t) {
            if (t.kind === m.inPacketKinds.UPDATE) {
                this.frame++, this.stamp = t.updateId, this.oldEntities = JSON.parse(JSON.stringify(this.entities));
                var e = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var i, a = t.upcreates[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                        var o = i.value,
                            s = o.entityId;
                        if (o.updateKind === m.updateKinds.CREATE) this.entities.hasOwnProperty(s) ? Object.assign(this.entities[s], o) : this.entities[s] = o, this.typeInference[s] = o.entityType;
                        else {
                            if (o.updateKind !== m.updateKinds.UPDATE) continue;
                            this.entities.hasOwnProperty(s) ? Object.assign(this.entities[s], o) : (this.entities[s] = o, this.entities[s].entityType = this.typeInference.hasOwnProperty(s) ? this.typeInference[s] : m.entityTypes.UNKNOWN)
                        }
                        this.entities[o.entityId].stamp = this.stamp
                    }
                } catch (t) {
                    r = !0, n = t
                } finally {
                    try {
                        !e && a.return && a.return()
                    } finally {
                        if (r) throw n
                    }
                }
                var u = !0,
                    f = !1,
                    h = void 0;
                try {
                    for (var l, c = t.deletes[Symbol.iterator](); !(u = (l = c.next()).done); u = !0) {
                        var y = l.value;
                        delete this.entities[y]
                    }
                } catch (t) {
                    f = !0, h = t
                } finally {
                    try {
                        !u && c.return && c.return()
                    } finally {
                        if (f) throw h
                    }
                }
                this.gardener()
            }
        }
    }, {
        key: "getLowestEntity",
        value: function(t) {
            var e = this.getLowestEntityId(t);
            return e && this.entities[e]
        }
    }, {
        key: "getLowestEntityId",
        value: function(t) {
            var e = null,
                r = !0,
                n = !1,
                i = void 0;
            try {
                for (var a, o = Object.keys(this.entities)[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                    var s = a.value;
                    this.entities[s].entityType === t && (e = !e || s < e ? s : e)
                }
            } catch (t) {
                n = !0, i = t
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw i
                }
            }
            return e
        }
    }, {
        key: "gardener",
        value: function() {
            this.posUnify(), this.inferTypes(), this.deleteOld(), this.inferMovement()
        }
    }, {
        key: "posUnify",
        value: function() {
            var t = !0,
                e = !1,
                r = void 0;
            try {
                for (var n, i = Object.keys(this.entities)[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                    var a = n.value,
                        o = this.entities[a],
                        s = o.objPosX || o.agentPosX || o.agentPosX2;
                    s && (o.x = s);
                    var u = o.objPosY || o.agentPosY || o.agentPosY2;
                    u && (o.y = u)
                }
            } catch (t) {
                e = !0, r = t
            } finally {
                try {
                    !t && i.return && i.return()
                } finally {
                    if (e) throw r
                }
            }
        }
    }, {
        key: "inferTypes",
        value: function() {}
    }, {
        key: "inferOwnTank",
        value: function() {
            var t = [],
                e = !0,
                r = !1,
                n = void 0;
            try {
                for (var i, a = Object.keys(this.entities)[Symbol.iterator](); !(e = (i = a.next()).done); e = !0) {
                    var o = i.value;
                    this.entities[o].entityType === m.entityTypes.UNKNOWN && t.push(o)
                }
            } catch (t) {
                r = !0, n = t
            } finally {
                try {
                    !e && a.return && a.return()
                } finally {
                    if (r) throw n
                }
            }
            var s = [],
                u = !0,
                f = !1,
                h = void 0;
            try {
                for (var l, c = t[Symbol.iterator](); !(u = (l = c.next()).done); u = !0) {
                    var y = l.value,
                        p = !0,
                        d = !1,
                        v = void 0;
                    try {
                        for (var g, k = t[Symbol.iterator](); !(p = (g = k.next()).done); p = !0) {
                            var w = g.value;
                            w <= y || Math.sqrt(Math.pow(this.entities[y].x - this.entities[w].x, 2) + Math.pow(this.entities[y].y - this.entities[w].y, 2)) < 10 && s.push([y, w])
                        }
                    } catch (t) {
                        d = !0, v = t
                    } finally {
                        try {
                            !p && k.return && k.return()
                        } finally {
                            if (d) throw v
                        }
                    }
                }
            } catch (t) {
                f = !0, h = t
            } finally {
                try {
                    !u && c.return && c.return()
                } finally {
                    if (f) throw h
                }
            }
            if (1 !== s.length) return console.log("Could not infer own tank! " + s), void console.log(JSON.stringify(this.entities));
            var T = s[0][0],
                b = s[0][1];
            this.entities[T].entityType = m.entityTypes.OWN_TANK, this.entities[b].entityType = m.entityTypes.OWN_TANK
        }
    }, {
        key: "deleteOld",
        value: function() {
            var t = !0,
                e = !1,
                r = void 0;
            try {
                for (var n, i = Object.keys(this.entities)[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                    var a = n.value,
                        o = this.entities[a];
                    o.stamp + s.entityTTL < this.stamp ? delete this.entities[a] : s.config && 0 === o.health && delete this.entities[a]
                }
            } catch (t) {
                e = !0, r = t
            } finally {
                try {
                    !t && i.return && i.return()
                } finally {
                    if (e) throw r
                }
            }
        }
    }, {
        key: "inferMovement",
        value: function() {
            var t = !0,
                e = !1,
                r = void 0;
            try {
                for (var n, i = Object.keys(this.entities)[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                    var a = n.value;
                    if (this.oldEntities.hasOwnProperty(a)) {
                        var o = this.oldEntities[a],
                            s = this.entities[a];
                        if (y(o) && y(s)) {
                            var u = s.stamp - o.stamp + 1e-5,
                                f = (s.x - o.x) / u,
                                h = s.dx || f;
                            s.dx = 1 * f + 0 * h;
                            var l = (s.y - o.y) / u,
                                c = s.dy || l;
                            s.dy = 1 * l + 0 * c, s.speed = Math.sqrt(Math.pow(s.dx, 2) + Math.pow(s.dy, 2))
                        }
                    }
                }
            } catch (t) {
                e = !0, r = t
            } finally {
                try {
                    !t && i.return && i.return()
                } finally {
                    if (e) throw r
                }
            }
        }
    }]), i);

    function i() {
        _classCallCheck(this, i), this.clear()
    }
    var a = new n;
    a.entities = {
        "1#15": {
            entityId: "1#15",
            updateKind: 2,
            objAngle: 25,
            entityType: "UNKNOWN",
            stamp: 251,
            objPosY: 456,
            unk_vu_53: 1,
            y: 456,
            objPosX: -1030,
            x: -1030,
            dx: 0,
            dy: 0,
            speed: 0,
            expPointsOthert: 25,
            maxHealth: 54,
            health: 45.986595153808594,
            fade: 51.005001068115234
        },
        "1#14": {
            entityId: "1#14",
            updateKind: 2,
            agentPosY2: 456.77587890625,
            entityType: "UNKNOWN",
            stamp: 223,
            y: 456.77587890625,
            agentPosX2: -1030.7730712890625,
            x: -1030.7730712890625,
            dx: 0,
            dy: 0,
            speed: 0,
            tankMass: 2,
            unk_float_26: .5445544719696045,
            unk_float_27: 11.133333206176758,
            tankSpeed: 2.4751875400543213,
            tankLevel: 3,
            expPointsThis: 25,
            unk_float_59: 14.98133373260498
        }
    }, a.inferOwnTank(), e.exports = {
        World: n
    }
}, {
    "./data.js": 6
}]
}, {}, [8]);