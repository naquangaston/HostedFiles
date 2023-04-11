/*! For license information please see index.9d1782cc.js.LICENSE.txt */ 
! function() {
    var e = {
        2292: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        6537: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        1219: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2787: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        1253: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isMsWindow = void 0;
            var n = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
            t.isMsWindow = function(e) {
                if (function(e) {
                        return "MSInputMethodContext" in e && "msCrypto" in e
                    }(e) && void 0 !== e.msCrypto.subtle) {
                    var t = e.msCrypto,
                        r = t.getRandomValues,
                        i = t.subtle;
                    return n.map((function(e) {
                        return i[e]
                    })).concat(r).every((function(e) {
                        return "function" == typeof e
                    }))
                }
                return !1
            }
        },
        208: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(3384);
            r.__exportStar(n(2292), t), r.__exportStar(n(6537), t), r.__exportStar(n(1219), t), r.__exportStar(n(2787), t), r.__exportStar(n(1253), t)
        },
        3384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return g
                },
                __awaiter: function() {
                    return d
                },
                __classPrivateFieldGet: function() {
                    return k
                },
                __classPrivateFieldSet: function() {
                    return L
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return E
                },
                __importStar: function() {
                    return x
                },
                __makeTemplateObject: function() {
                    return S
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return v
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return m
                },
                __spreadArrays: function() {
                    return y
                },
                __values: function() {
                    return h
                }
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, o.apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function s(e, t, n, r) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }

            function c(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function d(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            }

            function l(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function f(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function p(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function h(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e
            }

            function y() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function b(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function a(e) {
                    i[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            o.push([e, t, n, r]) > 1 || s(e, t)
                        }))
                    })
                }

                function s(e, t) {
                    try {
                        (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(c, u) : d(o[0][2], n)
                    } catch (e) {
                        d(o[0][3], e)
                    }
                    var n
                }

                function c(e) {
                    s("next", e)
                }

                function u(e) {
                    s("throw", e)
                }

                function d(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function w(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : i ? i(t) : t
                    } : i
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, i) {
                            ! function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            }(r, i, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function S(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function x(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function k(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function L(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        7903: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EMPTY_DATA_SHA_256 = t.SHA_256_HMAC_ALGO = t.SHA_256_HASH = void 0, t.SHA_256_HASH = {
                name: "SHA-256"
            }, t.SHA_256_HMAC_ALGO = {
                name: "HMAC",
                hash: t.SHA_256_HASH
            }, t.EMPTY_DATA_SHA_256 = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85])
        },
        7523: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sha256 = void 0;
            var r = n(7579),
                i = n(5362),
                o = n(6528),
                a = n(5665),
                s = n(208),
                c = n(9222),
                u = function() {
                    function e(e) {
                        (0, a.supportsWebCrypto)((0, c.locateWindow)()) ? this.hash = new i.Sha256(e): (0, s.isMsWindow)((0, c.locateWindow)()) ? this.hash = new r.Sha256(e) : this.hash = new o.Sha256(e)
                    }
                    return e.prototype.update = function(e, t) {
                        this.hash.update(e, t)
                    }, e.prototype.digest = function() {
                        return this.hash.digest()
                    }, e
                }();
            t.Sha256 = u
        },
        7579: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sha256 = void 0;
            var r = n(8960),
                i = n(7903),
                o = n(9781),
                a = n(9222),
                s = function() {
                    function e(e) {
                        e ? (this.operation = function(e) {
                            return new Promise((function(t, n) {
                                var r = (0, a.locateWindow)().msCrypto.subtle.importKey("raw", c(e), i.SHA_256_HMAC_ALGO, !1, ["sign"]);
                                r.oncomplete = function() {
                                    r.result && t(r.result), n(new Error("ImportKey completed without importing key."))
                                }, r.onerror = function() {
                                    n(new Error("ImportKey failed to import key."))
                                }
                            }))
                        }(e).then((function(e) {
                            return (0, a.locateWindow)().msCrypto.subtle.sign(i.SHA_256_HMAC_ALGO, e)
                        })), this.operation.catch((function() {}))) : this.operation = Promise.resolve((0, a.locateWindow)().msCrypto.subtle.digest("SHA-256"))
                    }
                    return e.prototype.update = function(e) {
                        var t = this;
                        (0, r.isEmptyData)(e) || (this.operation = this.operation.then((function(n) {
                            return n.onerror = function() {
                                t.operation = Promise.reject(new Error("Error encountered updating hash"))
                            }, n.process(c(e)), n
                        })), this.operation.catch((function() {})))
                    }, e.prototype.digest = function() {
                        return this.operation.then((function(e) {
                            return new Promise((function(t, n) {
                                e.onerror = function() {
                                    n(new Error("Error encountered finalizing hash"))
                                }, e.oncomplete = function() {
                                    e.result && t(new Uint8Array(e.result)), n(new Error("Error encountered finalizing hash"))
                                }, e.finish()
                            }))
                        }))
                    }, e
                }();

            function c(e) {
                return "string" == typeof e ? (0, o.fromUtf8)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
            }
            t.Sha256 = s
        },
        6066: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WebCryptoSha256 = t.Ie11Sha256 = void 0, (0, n(4166).__exportStar)(n(7523), t);
            var r = n(7579);
            Object.defineProperty(t, "Ie11Sha256", {
                enumerable: !0,
                get: function() {
                    return r.Sha256
                }
            });
            var i = n(5362);
            Object.defineProperty(t, "WebCryptoSha256", {
                enumerable: !0,
                get: function() {
                    return i.Sha256
                }
            })
        },
        8960: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEmptyData = void 0, t.isEmptyData = function(e) {
                return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
            }
        },
        5362: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sha256 = void 0;
            var r = n(4747),
                i = n(7903),
                o = n(9222),
                a = function() {
                    function e(e) {
                        this.toHash = new Uint8Array(0), void 0 !== e && (this.key = new Promise((function(t, n) {
                            (0, o.locateWindow)().crypto.subtle.importKey("raw", (0, r.convertToBuffer)(e), i.SHA_256_HMAC_ALGO, !1, ["sign"]).then(t, n)
                        })), this.key.catch((function() {})))
                    }
                    return e.prototype.update = function(e) {
                        if (!(0, r.isEmptyData)(e)) {
                            var t = (0, r.convertToBuffer)(e),
                                n = new Uint8Array(this.toHash.byteLength + t.byteLength);
                            n.set(this.toHash, 0), n.set(t, this.toHash.byteLength), this.toHash = n
                        }
                    }, e.prototype.digest = function() {
                        var e = this;
                        return this.key ? this.key.then((function(t) {
                            return (0, o.locateWindow)().crypto.subtle.sign(i.SHA_256_HMAC_ALGO, t, e.toHash).then((function(e) {
                                return new Uint8Array(e)
                            }))
                        })) : (0, r.isEmptyData)(this.toHash) ? Promise.resolve(i.EMPTY_DATA_SHA_256) : Promise.resolve().then((function() {
                            return (0, o.locateWindow)().crypto.subtle.digest(i.SHA_256_HASH, e.toHash)
                        })).then((function(e) {
                            return Promise.resolve(new Uint8Array(e))
                        }))
                    }, e
                }();
            t.Sha256 = a
        },
        8611: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RawSha256 = void 0;
            var r = n(5824),
                i = function() {
                    function e() {
                        this.state = Int32Array.from(r.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
                    }
                    return e.prototype.update = function(e) {
                        if (this.finished) throw new Error("Attempted to update an already finished hash.");
                        var t = 0,
                            n = e.byteLength;
                        if (this.bytesHashed += n, 8 * this.bytesHashed > r.MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
                        for (; n > 0;) this.buffer[this.bufferLength++] = e[t++], n--, this.bufferLength === r.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0)
                    }, e.prototype.digest = function() {
                        if (!this.finished) {
                            var e = 8 * this.bytesHashed,
                                t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                                n = this.bufferLength;
                            if (t.setUint8(this.bufferLength++, 128), n % r.BLOCK_SIZE >= r.BLOCK_SIZE - 8) {
                                for (var i = this.bufferLength; i < r.BLOCK_SIZE; i++) t.setUint8(i, 0);
                                this.hashBuffer(), this.bufferLength = 0
                            }
                            for (i = this.bufferLength; i < r.BLOCK_SIZE - 8; i++) t.setUint8(i, 0);
                            t.setUint32(r.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0), t.setUint32(r.BLOCK_SIZE - 4, e), this.hashBuffer(), this.finished = !0
                        }
                        var o = new Uint8Array(r.DIGEST_LENGTH);
                        for (i = 0; i < 8; i++) o[4 * i] = this.state[i] >>> 24 & 255, o[4 * i + 1] = this.state[i] >>> 16 & 255, o[4 * i + 2] = this.state[i] >>> 8 & 255, o[4 * i + 3] = this.state[i] >>> 0 & 255;
                        return o
                    }, e.prototype.hashBuffer = function() {
                        for (var e = this.buffer, t = this.state, n = t[0], i = t[1], o = t[2], a = t[3], s = t[4], c = t[5], u = t[6], d = t[7], l = 0; l < r.BLOCK_SIZE; l++) {
                            if (l < 16) this.temp[l] = (255 & e[4 * l]) << 24 | (255 & e[4 * l + 1]) << 16 | (255 & e[4 * l + 2]) << 8 | 255 & e[4 * l + 3];
                            else {
                                var f = this.temp[l - 2],
                                    p = (f >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10,
                                    h = ((f = this.temp[l - 15]) >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3;
                                this.temp[l] = (p + this.temp[l - 7] | 0) + (h + this.temp[l - 16] | 0)
                            }
                            var v = (((s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (s & c ^ ~s & u) | 0) + (d + (r.KEY[l] + this.temp[l] | 0) | 0) | 0,
                                m = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & i ^ n & o ^ i & o) | 0;
                            d = u, u = c, c = s, s = a + v | 0, a = o, o = i, i = n, n = v + m | 0
                        }
                        t[0] += n, t[1] += i, t[2] += o, t[3] += a, t[4] += s, t[5] += c, t[6] += u, t[7] += d
                    }, e
                }();
            t.RawSha256 = i
        },
        5824: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MAX_HASHABLE_LENGTH = t.INIT = t.KEY = t.DIGEST_LENGTH = t.BLOCK_SIZE = void 0, t.BLOCK_SIZE = 64, t.DIGEST_LENGTH = 32, t.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), t.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], t.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1
        },
        6528: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(4166).__exportStar(n(7810), t)
        },
        7810: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Sha256 = void 0;
            var r = n(4166),
                i = n(5824),
                o = n(8611),
                a = n(4747),
                s = function() {
                    function e(e) {
                        if (this.hash = new o.RawSha256, e) {
                            this.outer = new o.RawSha256;
                            var t = function(e) {
                                    var t = (0, a.convertToBuffer)(e);
                                    if (t.byteLength > i.BLOCK_SIZE) {
                                        var n = new o.RawSha256;
                                        n.update(t), t = n.digest()
                                    }
                                    var r = new Uint8Array(i.BLOCK_SIZE);
                                    return r.set(t), r
                                }(e),
                                n = new Uint8Array(i.BLOCK_SIZE);
                            n.set(t);
                            for (var r = 0; r < i.BLOCK_SIZE; r++) t[r] ^= 54, n[r] ^= 92;
                            for (this.hash.update(t), this.outer.update(n), r = 0; r < t.byteLength; r++) t[r] = 0
                        }
                    }
                    return e.prototype.update = function(e) {
                        if (!(0, a.isEmptyData)(e) && !this.error) try {
                            this.hash.update((0, a.convertToBuffer)(e))
                        } catch (e) {
                            this.error = e
                        }
                    }, e.prototype.digestSync = function() {
                        if (this.error) throw this.error;
                        return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest()
                    }, e.prototype.digest = function() {
                        return r.__awaiter(this, void 0, void 0, (function() {
                            return r.__generator(this, (function(e) {
                                return [2, this.digestSync()]
                            }))
                        }))
                    }, e
                }();
            t.Sha256 = s
        },
        9781: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fromUtf8: function() {
                    return r
                },
                toUtf8: function() {
                    return i
                }
            });
            const r = e => "function" == typeof TextEncoder ? function(e) {
                    return (new TextEncoder).encode(e)
                }(e) : (e => {
                    const t = [];
                    for (let n = 0, r = e.length; n < r; n++) {
                        const r = e.charCodeAt(n);
                        if (r < 128) t.push(r);
                        else if (r < 2048) t.push(r >> 6 | 192, 63 & r | 128);
                        else if (n + 1 < e.length && 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                            const i = 65536 + ((1023 & r) << 10) + (1023 & e.charCodeAt(++n));
                            t.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                        } else t.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                    return Uint8Array.from(t)
                })(e),
                i = e => "function" == typeof TextDecoder ? function(e) {
                    return new TextDecoder("utf-8").decode(e)
                }(e) : (e => {
                    let t = "";
                    for (let n = 0, r = e.length; n < r; n++) {
                        const r = e[n];
                        if (r < 128) t += String.fromCharCode(r);
                        else if (192 <= r && r < 224) {
                            const i = e[++n];
                            t += String.fromCharCode((31 & r) << 6 | 63 & i)
                        } else if (240 <= r && r < 365) {
                            const i = "%" + [r, e[++n], e[++n], e[++n]].map((e => e.toString(16))).join("%");
                            t += decodeURIComponent(i)
                        } else t += String.fromCharCode((15 & r) << 12 | (63 & e[++n]) << 6 | 63 & e[++n])
                    }
                    return t
                })(e)
        },
        4166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return g
                },
                __awaiter: function() {
                    return d
                },
                __classPrivateFieldGet: function() {
                    return k
                },
                __classPrivateFieldSet: function() {
                    return L
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return E
                },
                __importStar: function() {
                    return x
                },
                __makeTemplateObject: function() {
                    return S
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return v
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return m
                },
                __spreadArrays: function() {
                    return y
                },
                __values: function() {
                    return h
                }
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, o.apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function s(e, t, n, r) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }

            function c(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function d(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            }

            function l(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function f(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function p(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function h(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e
            }

            function y() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function b(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function a(e) {
                    i[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            o.push([e, t, n, r]) > 1 || s(e, t)
                        }))
                    })
                }

                function s(e, t) {
                    try {
                        (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(c, u) : d(o[0][2], n)
                    } catch (e) {
                        d(o[0][3], e)
                    }
                    var n
                }

                function c(e) {
                    s("next", e)
                }

                function u(e) {
                    s("throw", e)
                }

                function d(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function w(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : i ? i(t) : t
                    } : i
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, i) {
                            ! function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            }(r, i, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function S(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function x(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function k(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function L(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        5665: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), n(5790).__exportStar(n(6483), t)
        },
        6483: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.supportsZeroByteGCM = t.supportsSubtleCrypto = t.supportsSecureRandom = t.supportsWebCrypto = void 0;
            var r = n(5790),
                i = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];

            function o(e) {
                return "object" == typeof e && "object" == typeof e.crypto && "function" == typeof e.crypto.getRandomValues
            }

            function a(e) {
                return e && i.every((function(t) {
                    return "function" == typeof e[t]
                }))
            }
            t.supportsWebCrypto = function(e) {
                return !(!o(e) || "object" != typeof e.crypto.subtle) && a(e.crypto.subtle)
            }, t.supportsSecureRandom = o, t.supportsSubtleCrypto = a, t.supportsZeroByteGCM = function(e) {
                return r.__awaiter(this, void 0, void 0, (function() {
                    var t;
                    return r.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!a(e)) return [2, !1];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 4, , 5]), [4, e.generateKey({
                                    name: "AES-GCM",
                                    length: 128
                                }, !1, ["encrypt"])];
                            case 2:
                                return t = n.sent(), [4, e.encrypt({
                                    name: "AES-GCM",
                                    iv: new Uint8Array(Array(12)),
                                    additionalData: new Uint8Array(Array(16)),
                                    tagLength: 128
                                }, t, new Uint8Array(0))];
                            case 3:
                                return [2, 16 === n.sent().byteLength];
                            case 4:
                                return n.sent(), [2, !1];
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }
        },
        5790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return g
                },
                __awaiter: function() {
                    return d
                },
                __classPrivateFieldGet: function() {
                    return k
                },
                __classPrivateFieldSet: function() {
                    return L
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return E
                },
                __importStar: function() {
                    return x
                },
                __makeTemplateObject: function() {
                    return S
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return v
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return m
                },
                __spreadArrays: function() {
                    return y
                },
                __values: function() {
                    return h
                }
            });
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var o = function() {
                return o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, o.apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function s(e, t, n, r) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }

            function c(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function d(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            }

            function l(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function f(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function p(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function h(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function m() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e
            }

            function y() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function b(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, i = n.apply(e, t || []),
                    o = [];
                return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function a(e) {
                    i[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            o.push([e, t, n, r]) > 1 || s(e, t)
                        }))
                    })
                }

                function s(e, t) {
                    try {
                        (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(c, u) : d(o[0][2], n)
                    } catch (e) {
                        d(o[0][3], e)
                    }
                    var n
                }

                function c(e) {
                    s("next", e)
                }

                function u(e) {
                    s("throw", e)
                }

                function d(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function w(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, i) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        } : i ? i(t) : t
                    } : i
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, i) {
                            ! function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            }(r, i, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function S(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function x(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function k(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function L(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        5955: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.convertToBuffer = void 0;
            var r = n(9653),
                i = "undefined" != typeof Buffer && Buffer.from ? function(e) {
                    return Buffer.from(e, "utf8")
                } : r.fromUtf8;
            t.convertToBuffer = function(e) {
                return e instanceof Uint8Array ? e : "string" == typeof e ? i(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
            }
        },
        4747: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uint32ArrayFrom = t.numToUint8 = t.isEmptyData = t.convertToBuffer = void 0;
            var r = n(5955);
            Object.defineProperty(t, "convertToBuffer", {
                enumerable: !0,
                get: function() {
                    return r.convertToBuffer
                }
            });
            var i = n(3958);
            Object.defineProperty(t, "isEmptyData", {
                enumerable: !0,
                get: function() {
                    return i.isEmptyData
                }
            });
            var o = n(5346);
            Object.defineProperty(t, "numToUint8", {
                enumerable: !0,
                get: function() {
                    return o.numToUint8
                }
            });
            var a = n(2570);
            Object.defineProperty(t, "uint32ArrayFrom", {
                enumerable: !0,
                get: function() {
                    return a.uint32ArrayFrom
                }
            })
        },
        3958: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEmptyData = void 0, t.isEmptyData = function(e) {
                return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
            }
        },
        5346: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.numToUint8 = void 0, t.numToUint8 = function(e) {
                return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])
            }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.uint32ArrayFrom = void 0, t.uint32ArrayFrom = function(e) {
                if (!Uint32Array.from) {
                    for (var t = new Uint32Array(e.length), n = 0; n < e.length;) t[n] = e[n], n += 1;
                    return t
                }
                return Uint32Array.from(e)
            }
        },
        9653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fromUtf8: function() {
                    return r
                },
                toUtf8: function() {
                    return i
                }
            });
            const r = e => "function" == typeof TextEncoder ? function(e) {
                    return (new TextEncoder).encode(e)
                }(e) : (e => {
                    const t = [];
                    for (let n = 0, r = e.length; n < r; n++) {
                        const r = e.charCodeAt(n);
                        if (r < 128) t.push(r);
                        else if (r < 2048) t.push(r >> 6 | 192, 63 & r | 128);
                        else if (n + 1 < e.length && 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                            const i = 65536 + ((1023 & r) << 10) + (1023 & e.charCodeAt(++n));
                            t.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                        } else t.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                    return Uint8Array.from(t)
                })(e),
                i = e => "function" == typeof TextDecoder ? function(e) {
                    return new TextDecoder("utf-8").decode(e)
                }(e) : (e => {
                    let t = "";
                    for (let n = 0, r = e.length; n < r; n++) {
                        const r = e[n];
                        if (r < 128) t += String.fromCharCode(r);
                        else if (192 <= r && r < 224) {
                            const i = e[++n];
                            t += String.fromCharCode((31 & r) << 6 | 63 & i)
                        } else if (240 <= r && r < 365) {
                            const i = "%" + [r, e[++n], e[++n], e[++n]].map((e => e.toString(16))).join("%");
                            t += decodeURIComponent(i)
                        } else t += String.fromCharCode((15 & r) << 12 | (63 & e[++n]) << 6 | 63 & e[++n])
                    }
                    return t
                })(e)
        },
        9222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                locateWindow: function() {
                    return i
                }
            });
            const r = {};

            function i() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : r
            }
        },
        3630: function(e) {
            e.exports = function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) n.d(r, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 90)
            }({
                17: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r = n(18),
                        i = function() {
                            function e() {}
                            return e.getFirstMatch = function(e, t) {
                                var n = t.match(e);
                                return n && n.length > 0 && n[1] || ""
                            }, e.getSecondMatch = function(e, t) {
                                var n = t.match(e);
                                return n && n.length > 1 && n[2] || ""
                            }, e.matchAndReturnConst = function(e, t, n) {
                                if (e.test(t)) return n
                            }, e.getWindowsVersionName = function(e) {
                                switch (e) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return
                                }
                            }, e.getMacOSVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), 10 === t[0]) switch (t[1]) {
                                    case 5:
                                        return "Leopard";
                                    case 6:
                                        return "Snow Leopard";
                                    case 7:
                                        return "Lion";
                                    case 8:
                                        return "Mountain Lion";
                                    case 9:
                                        return "Mavericks";
                                    case 10:
                                        return "Yosemite";
                                    case 11:
                                        return "El Capitan";
                                    case 12:
                                        return "Sierra";
                                    case 13:
                                        return "High Sierra";
                                    case 14:
                                        return "Mojave";
                                    case 15:
                                        return "Catalina";
                                    default:
                                        return
                                }
                            }, e.getAndroidVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                            }, e.getVersionPrecision = function(e) {
                                return e.split(".").length
                            }, e.compareVersions = function(t, n, r) {
                                void 0 === r && (r = !1);
                                var i = e.getVersionPrecision(t),
                                    o = e.getVersionPrecision(n),
                                    a = Math.max(i, o),
                                    s = 0,
                                    c = e.map([t, n], (function(t) {
                                        var n = a - e.getVersionPrecision(t),
                                            r = t + new Array(n + 1).join(".0");
                                        return e.map(r.split("."), (function(e) {
                                            return new Array(20 - e.length).join("0") + e
                                        })).reverse()
                                    }));
                                for (r && (s = a - Math.min(i, o)), a -= 1; a >= s;) {
                                    if (c[0][a] > c[1][a]) return 1;
                                    if (c[0][a] === c[1][a]) {
                                        if (a === s) return 0;
                                        a -= 1
                                    } else if (c[0][a] < c[1][a]) return -1
                                }
                            }, e.map = function(e, t) {
                                var n, r = [];
                                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                                return r
                            }, e.find = function(e, t) {
                                var n, r;
                                if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                for (n = 0, r = e.length; n < r; n += 1) {
                                    var i = e[n];
                                    if (t(i, n)) return i
                                }
                            }, e.assign = function(e) {
                                for (var t, n, r = e, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                                if (Object.assign) return Object.assign.apply(Object, [e].concat(o));
                                var s = function() {
                                    var e = o[t];
                                    "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                        r[t] = e[t]
                                    }))
                                };
                                for (t = 0, n = o.length; t < n; t += 1) s();
                                return e
                            }, e.getBrowserAlias = function(e) {
                                return r.BROWSER_ALIASES_MAP[e]
                            }, e.getBrowserTypeByAlias = function(e) {
                                return r.BROWSER_MAP[e] || ""
                            }, e
                        }();
                    t.default = i, e.exports = t.default
                },
                18: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    }, t.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    }, t.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    }, t.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    }, t.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r, i = (r = n(91)) && r.__esModule ? r : {
                            default: r
                        },
                        o = n(18);

                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    var s = function() {
                        function e() {}
                        var t, n;
                        return e.getParser = function(e, t) {
                            if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                            return new i.default(e, t)
                        }, e.parse = function(e) {
                            return new i.default(e).getResult()
                        }, t = e, n = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return o.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return o.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return o.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return o.PLATFORMS_MAP
                            }
                        }], null && a(t.prototype, null), n && a(t, n), e
                    }();
                    t.default = s, e.exports = t.default
                },
                91: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r = c(n(92)),
                        i = c(n(93)),
                        o = c(n(94)),
                        a = c(n(95)),
                        s = c(n(17));

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = function() {
                        function e(e, t) {
                            if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                            this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                        }
                        var t = e.prototype;
                        return t.getUA = function() {
                            return this._ua
                        }, t.test = function(e) {
                            return e.test(this._ua)
                        }, t.parseBrowser = function() {
                            var e = this;
                            this.parsedResult.browser = {};
                            var t = s.default.find(r.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                        }, t.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }, t.getBrowserName = function(e) {
                            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                        }, t.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }, t.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }, t.parseOS = function() {
                            var e = this;
                            this.parsedResult.os = {};
                            var t = s.default.find(i.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                        }, t.getOSName = function(e) {
                            var t = this.getOS().name;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.getOSVersion = function() {
                            return this.getOS().version
                        }, t.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }, t.getPlatformType = function(e) {
                            void 0 === e && (e = !1);
                            var t = this.getPlatform().type;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.parsePlatform = function() {
                            var e = this;
                            this.parsedResult.platform = {};
                            var t = s.default.find(o.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                        }, t.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }, t.getEngineName = function(e) {
                            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                        }, t.parseEngine = function() {
                            var e = this;
                            this.parsedResult.engine = {};
                            var t = s.default.find(a.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                        }, t.parse = function() {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                        }, t.getResult = function() {
                            return s.default.assign({}, this.parsedResult)
                        }, t.satisfies = function(e) {
                            var t = this,
                                n = {},
                                r = 0,
                                i = {},
                                o = 0;
                            if (Object.keys(e).forEach((function(t) {
                                    var a = e[t];
                                    "string" == typeof a ? (i[t] = a, o += 1) : "object" == typeof a && (n[t] = a, r += 1)
                                })), r > 0) {
                                var a = Object.keys(n),
                                    c = s.default.find(a, (function(e) {
                                        return t.isOS(e)
                                    }));
                                if (c) {
                                    var u = this.satisfies(n[c]);
                                    if (void 0 !== u) return u
                                }
                                var d = s.default.find(a, (function(e) {
                                    return t.isPlatform(e)
                                }));
                                if (d) {
                                    var l = this.satisfies(n[d]);
                                    if (void 0 !== l) return l
                                }
                            }
                            if (o > 0) {
                                var f = Object.keys(i),
                                    p = s.default.find(f, (function(e) {
                                        return t.isBrowser(e, !0)
                                    }));
                                if (void 0 !== p) return this.compareVersion(i[p])
                            }
                        }, t.isBrowser = function(e, t) {
                            void 0 === t && (t = !1);
                            var n = this.getBrowserName().toLowerCase(),
                                r = e.toLowerCase(),
                                i = s.default.getBrowserTypeByAlias(r);
                            return t && i && (r = i.toLowerCase()), r === n
                        }, t.compareVersion = function(e) {
                            var t = [0],
                                n = e,
                                r = !1,
                                i = this.getBrowserVersion();
                            if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(s.default.compareVersions(i, n, r)) > -1
                        }, t.isOS = function(e) {
                            return this.getOSName(!0) === String(e).toLowerCase()
                        }, t.isPlatform = function(e) {
                            return this.getPlatformType(!0) === String(e).toLowerCase()
                        }, t.isEngine = function(e) {
                            return this.getEngineName(!0) === String(e).toLowerCase()
                        }, t.is = function(e, t) {
                            return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                        }, t.some = function(e) {
                            var t = this;
                            return void 0 === e && (e = []), e.some((function(e) {
                                return t.is(e)
                            }))
                        }, e
                    }();
                    t.default = u, e.exports = t.default
                },
                92: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r, i = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        o = /version\/(\d+(\.?_?\d+)+)/i,
                        a = [{
                            test: [/googlebot/i],
                            describe: function(e) {
                                var t = {
                                        name: "Googlebot"
                                    },
                                    n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/opera/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/opr\/|opios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/SamsungBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Samsung Internet for Android"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/Whale/i],
                            describe: function(e) {
                                var t = {
                                        name: "NAVER Whale Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/MZBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "MZ Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/focus/i],
                            describe: function(e) {
                                var t = {
                                        name: "Focus"
                                    },
                                    n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/swing/i],
                            describe: function(e) {
                                var t = {
                                        name: "Swing"
                                    },
                                    n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/coast/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera Coast"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/opt\/\d+(?:.?_?\d+)+/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera Touch"
                                    },
                                    n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/yabrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Yandex Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/ucbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "UC Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/Maxthon|mxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Maxthon"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/epiphany/i],
                            describe: function(e) {
                                var t = {
                                        name: "Epiphany"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/puffin/i],
                            describe: function(e) {
                                var t = {
                                        name: "Puffin"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/sleipnir/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sleipnir"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/k-meleon/i],
                            describe: function(e) {
                                var t = {
                                        name: "K-Meleon"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/micromessenger/i],
                            describe: function(e) {
                                var t = {
                                        name: "WeChat"
                                    },
                                    n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/qqbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                    },
                                    n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/msie|trident/i],
                            describe: function(e) {
                                var t = {
                                        name: "Internet Explorer"
                                    },
                                    n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/\sedg\//i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/edg([ea]|ios)/i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/vivaldi/i],
                            describe: function(e) {
                                var t = {
                                        name: "Vivaldi"
                                    },
                                    n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/seamonkey/i],
                            describe: function(e) {
                                var t = {
                                        name: "SeaMonkey"
                                    },
                                    n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/sailfish/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sailfish"
                                    },
                                    n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/silk/i],
                            describe: function(e) {
                                var t = {
                                        name: "Amazon Silk"
                                    },
                                    n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/phantom/i],
                            describe: function(e) {
                                var t = {
                                        name: "PhantomJS"
                                    },
                                    n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/slimerjs/i],
                            describe: function(e) {
                                var t = {
                                        name: "SlimerJS"
                                    },
                                    n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var t = {
                                        name: "BlackBerry"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var t = {
                                        name: "WebOS Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var t = {
                                        name: "Bada"
                                    },
                                    n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var t = {
                                        name: "Tizen"
                                    },
                                    n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/qupzilla/i],
                            describe: function(e) {
                                var t = {
                                        name: "QupZilla"
                                    },
                                    n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Firefox"
                                    },
                                    n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/electron/i],
                            describe: function(e) {
                                var t = {
                                        name: "Electron"
                                    },
                                    n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/MiuiBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Miui"
                                    },
                                    n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/chromium/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chromium"
                                    },
                                    n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/chrome|crios|crmo/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chrome"
                                    },
                                    n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/GSA/i],
                            describe: function(e) {
                                var t = {
                                        name: "Google Search"
                                    },
                                    n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: function(e) {
                                var t = !e.test(/like android/i),
                                    n = e.test(/android/i);
                                return t && n
                            },
                            describe: function(e) {
                                var t = {
                                        name: "Android Browser"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/playstation 4/i],
                            describe: function(e) {
                                var t = {
                                        name: "PlayStation 4"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/safari|applewebkit/i],
                            describe: function(e) {
                                var t = {
                                        name: "Safari"
                                    },
                                    n = i.default.getFirstMatch(o, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/.*/i],
                            describe: function(e) {
                                var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return {
                                    name: i.default.getFirstMatch(t, e),
                                    version: i.default.getSecondMatch(t, e)
                                }
                            }
                        }];
                    t.default = a, e.exports = t.default
                },
                93: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r, i = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        o = n(18),
                        a = [{
                            test: [/Roku\/DVP/],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                return {
                                    name: o.OS_MAP.Roku,
                                    version: t
                                }
                            }
                        }, {
                            test: [/windows phone/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.WindowsPhone,
                                    version: t
                                }
                            }
                        }, {
                            test: [/windows /i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                    n = i.default.getWindowsVersionName(t);
                                return {
                                    name: o.OS_MAP.Windows,
                                    version: t,
                                    versionName: n
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function(e) {
                                var t = {
                                        name: o.OS_MAP.iOS
                                    },
                                    n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/macintosh/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                    n = i.default.getMacOSVersionName(t),
                                    r = {
                                        name: o.OS_MAP.MacOS,
                                        version: t
                                    };
                                return n && (r.versionName = n), r
                            }
                        }, {
                            test: [/(ipod|iphone|ipad)/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                return {
                                    name: o.OS_MAP.iOS,
                                    version: t
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = !e.test(/like android/i),
                                    n = e.test(/android/i);
                                return t && n
                            },
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                    n = i.default.getAndroidVersionName(t),
                                    r = {
                                        name: o.OS_MAP.Android,
                                        version: t
                                    };
                                return n && (r.versionName = n), r
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                    n = {
                                        name: o.OS_MAP.WebOS
                                    };
                                return t && t.length && (n.version = t), n
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                return {
                                    name: o.OS_MAP.BlackBerry,
                                    version: t
                                }
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.Bada,
                                    version: t
                                }
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.Tizen,
                                    version: t
                                }
                            }
                        }, {
                            test: [/linux/i],
                            describe: function() {
                                return {
                                    name: o.OS_MAP.Linux
                                }
                            }
                        }, {
                            test: [/CrOS/],
                            describe: function() {
                                return {
                                    name: o.OS_MAP.ChromeOS
                                }
                            }
                        }, {
                            test: [/PlayStation 4/],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                return {
                                    name: o.OS_MAP.PlayStation4,
                                    version: t
                                }
                            }
                        }];
                    t.default = a, e.exports = t.default
                },
                94: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r, i = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        o = n(18),
                        a = [{
                            test: [/googlebot/i],
                            describe: function() {
                                return {
                                    type: "bot",
                                    vendor: "Google"
                                }
                            }
                        }, {
                            test: [/huawei/i],
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                    n = {
                                        type: o.PLATFORMS_MAP.mobile,
                                        vendor: "Huawei"
                                    };
                                return t && (n.model = t), n
                            }
                        }, {
                            test: [/nexus\s*(?:7|8|9|10).*/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/ipad/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Apple",
                                    model: "iPad"
                                }
                            }
                        }, {
                            test: [/kftt build/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon",
                                    model: "Kindle Fire HD 7"
                                }
                            }
                        }, {
                            test: [/silk/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet,
                                    vendor: "Amazon"
                                }
                            }
                        }, {
                            test: [/tablet(?! pc)/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = e.test(/ipod|iphone/i),
                                    n = e.test(/like (ipod|iphone)/i);
                                return t && !n
                            },
                            describe: function(e) {
                                var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Apple",
                                    model: t
                                }
                            }
                        }, {
                            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Nexus"
                                }
                            }
                        }, {
                            test: [/[^-]mobi/i],
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "blackberry" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "BlackBerry"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "bada" === e.getBrowserName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows phone" === e.getBrowserName()
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Microsoft"
                                }
                            }
                        }, {
                            test: function(e) {
                                var t = Number(String(e.getOSVersion()).split(".")[0]);
                                return "android" === e.getOSName(!0) && t >= 3
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tablet
                                }
                            }
                        }, {
                            test: function(e) {
                                return "android" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.mobile
                                }
                            }
                        }, {
                            test: function(e) {
                                return "macos" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop,
                                    vendor: "Apple"
                                }
                            }
                        }, {
                            test: function(e) {
                                return "windows" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "linux" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.desktop
                                }
                            }
                        }, {
                            test: function(e) {
                                return "playstation 4" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tv
                                }
                            }
                        }, {
                            test: function(e) {
                                return "roku" === e.getOSName(!0)
                            },
                            describe: function() {
                                return {
                                    type: o.PLATFORMS_MAP.tv
                                }
                            }
                        }];
                    t.default = a, e.exports = t.default
                },
                95: function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var r, i = (r = n(17)) && r.__esModule ? r : {
                            default: r
                        },
                        o = n(18),
                        a = [{
                            test: function(e) {
                                return "microsoft edge" === e.getBrowserName(!0)
                            },
                            describe: function(e) {
                                if (/\sedg\//i.test(e)) return {
                                    name: o.ENGINE_MAP.Blink
                                };
                                var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                return {
                                    name: o.ENGINE_MAP.EdgeHTML,
                                    version: t
                                }
                            }
                        }, {
                            test: [/trident/i],
                            describe: function(e) {
                                var t = {
                                        name: o.ENGINE_MAP.Trident
                                    },
                                    n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: function(e) {
                                return e.test(/presto/i)
                            },
                            describe: function(e) {
                                var t = {
                                        name: o.ENGINE_MAP.Presto
                                    },
                                    n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: function(e) {
                                var t = e.test(/gecko/i),
                                    n = e.test(/like gecko/i);
                                return t && !n
                            },
                            describe: function(e) {
                                var t = {
                                        name: o.ENGINE_MAP.Gecko
                                    },
                                    n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }, {
                            test: [/(apple)?webkit\/537\.36/i],
                            describe: function() {
                                return {
                                    name: o.ENGINE_MAP.Blink
                                }
                            }
                        }, {
                            test: [/(apple)?webkit/i],
                            describe: function(e) {
                                var t = {
                                        name: o.ENGINE_MAP.WebKit
                                    },
                                    n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                return n && (t.version = n), t
                            }
                        }];
                    t.default = a, e.exports = t.default
                }
            })
        },
        9294: function(e, t, n) {
            ! function(e) {
                var t = {
                        contexts: [],
                        images: [],
                        sockets: [],
                        patterns: []
                    },
                    r = function() {
                        function t() {
                            if (!n) {
                                n = !0;
                                var e = document.body,
                                    t = document.body.firstChild,
                                    r = document.getElementById("fontdetectHelper") || document.createElement("div");
                                r.id = "fontdetectHelper", (i = document.createElement("span")).classList.add("diep-native"), i.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r.appendChild(i), e.insertBefore(r, t), r.style.position = "absolute", r.style.visibility = "hidden", r.style.top = "-200px", r.style.left = "-100000px", r.style.width = "100000px", r.style.height = "200px", r.style.fontSize = "100px"
                            }
                        }
                        var n = !1,
                            r = ["serif", "sans-serif", "monospace", "cursive", "fantasy"],
                            i = null;
                        return {
                            onFontLoaded: function(e, r, i, o) {
                                if (e) {
                                    var a = o && o.msInterval ? o.msInterval : 100,
                                        s = o && o.msTimeout ? o.msTimeout : 2e3;
                                    if (r || i) {
                                        if (n || t(), this.isFontLoaded(e)) return void(r && r(e));
                                        var c = this,
                                            u = (new Date).getTime(),
                                            d = setInterval((function() {
                                                if (c.isFontLoaded(e)) return clearInterval(d), void r(e);
                                                (new Date).getTime() - u > s && (clearInterval(d), i && i(e))
                                            }), a)
                                    }
                                }
                            },
                            isFontLoaded: function(e) {
                                var o = 0,
                                    a = 0;
                                n || t();
                                for (var s = 0; s < r.length; ++s) {
                                    if (i.style.fontFamily = '"' + e + '",' + r[s], o = i.offsetWidth, s > 0 && o != a) return !1;
                                    a = o
                                }
                                return !0
                            },
                            whichFont: function(t) {
                                for (var n = function(t, n) {
                                        return t instanceof Element ? e.getComputedStyle(t).getPropertyValue(n) : e.jQuery ? $(t).css(n) : ""
                                    }(t, "font-family"), i = n.split(","), o = i.shift(); o;) {
                                    o = o.replace(/^\s*['"]?\s*([^'"]*)\s*['"]?\s*$/, "$1");
                                    for (var a = 0; a < r.length; a++)
                                        if (o == r[a]) return o;
                                    if (this.isFontLoaded(o)) return o;
                                    o = i.shift()
                                }
                                return null
                            }
                        }
                    }(),
                    i = !1;

                function o(t) {
                    t.timeRemaining() < 0 || (wt(), e.requestIdleCallback(o))
                }
                void 0 === d && (d = {}), d.postRun = d.preRun || [], d.postRun.push((function() {
                    "requestIdleCallback" in e && e.requestIdleCallback(o)
                })), e.document.currentScript;
                var a = document.getElementById("textInput"),
                    s = document.getElementById("textInputContainer");

                function c(t) {
                    e.ui && (e.ui.loadingStatus = "Updating..."), setTimeout((function() {
                        e.location.reload(!0)
                    }), 2e3)
                }

                function u(e) {
                    if (null == e) return 0;
                    var t = 4 * e.length + 1,
                        n = Pt(t);
                    return M(e, n, t), n
                }
                var d = d || {};
                d.postRun = d.postRun || [], d.postRun.push((function() {
                    e.input = {
                        mouse: ft,
                        touch_joystick: lt,
                        keyDown: pt,
                        keyUp: ht,
                        blur: vt,
                        wheel: gt,
                        prevent_right_click: mt,
                        flushInputHooks: yt,
                        set_convar: function(e, t) {
                            var n = u(e.toString()),
                                r = u(t.toString()),
                                i = !!St(n, r);
                            return bt(n), bt(r), i
                        },
                        get_convar: function(e) {
                            var t = u(e.toString()),
                                n = xt(t);
                            return bt(t), n ? C(n) : null
                        },
                        execute: function(e) {
                            var t = u(e.toString());
                            Et(t), bt(t)
                        },
                        print_convar_help: kt,
                        should_prevent_unload: _t,
                        showMenu: function() {
                            it()
                        },
                        setRegion: function(e) {
                            var t = u(e.toString());
                            Lt(t), bt(t)
                        },
                        setGameMode: function(e) {
                            var t = u(e.toString());
                            Ct(t), bt(t)
                        },
                        connectLobby: function(e, t, n, r, i, o) {
                            var a = u(e.toString()),
                                s = u(t.toString()),
                                c = u(n.toString()),
                                d = u(r.toString()),
                                l = u(i.toString());
                            At(a, s, c, d, l, o), bt(a), bt(s), bt(c), bt(d), bt(l)
                        },
                        findLobbyFailed: function(e) {
                            let t = u(e.toString());
                            Mt(t), bt(e)
                        },
                        trySpawn: function(e) {
                            var t = u(e.toString());
                            st(t), bt(t)
                        },
                        increaseStat: function(e) {
                            ct(e)
                        },
                        getKillerIdentityId: function() {
                            var e = ut();
                            return e ? C(e) : null
                        },
                        sendIdentityToken: function(e) {
                            var t = u(e.toString());
                            dt(t), bt(t)
                        }
                    }
                })), d.noExitRuntime = !0, d.print = function(e, t) {
                    console.log(e)
                }, d.printErr = function(e) {
                    console.error(e)
                }, d.setStatus = function(e) {
                    console.log(e)
                }, d.totalDependencies = 0, d.monitorRunDependencies = function(e) {
                    console.log(e + " dependencies left")
                }, d.setStatus("Downloading d.js..."), "undefined" == typeof Worker && e.alert("Your browser doesn't support Web Workers. Please ensure you're using the latest available version. Try Chrome if you haven't yet."), /Chrome\/84\./.test(e.navigator.userAgent) && e.alert("Your browser version contains a bug that makes the game run very poorly.\nIt is recommended that you update to Chrome 85 or newer, or use Chrome Canary for best performance."), Function.prototype.toString;
                var l, f = Object.assign({}, d),
                    p = [],
                    h = "./this.program",
                    v = (e, t) => {
                        throw t
                    },
                    m = "";
                "undefined" != typeof document && document.currentScript && (m = document.currentScript.src), m = 0 !== m.indexOf("blob:") ? m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", l = (e, t, n) => {
                    var r = new XMLHttpRequest;
                    r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
                        200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
                    }, r.onerror = n, r.send(null)
                };
                var y, g = d.print || console.log.bind(console),
                    b = d.printErr || console.warn.bind(console);

                function w(e) {
                    w.shown || (w.shown = {}), w.shown[e] || (w.shown[e] = 1, b(e))
                }
                Object.assign(d, f), f = null, d.arguments && (p = d.arguments), d.thisProgram && (h = d.thisProgram), d.quit && (v = d.quit), d.wasmBinary && (y = d.wasmBinary);
                var _ = d.noExitRuntime || !0;
                "object" != typeof WebAssembly && ie("no native wasm support detected");
                var S, x = !1;

                function E(e, t) {
                    e || ie(t)
                }
                var k = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                function L(e, t, n) {
                    for (var r = t + n, i = t; e[i] && !(i >= r);) ++i;
                    if (i - t > 16 && e.buffer && k) return k.decode(e.subarray(t, i));
                    for (var o = ""; t < i;) {
                        var a = e[t++];
                        if (128 & a) {
                            var s = 63 & e[t++];
                            if (192 != (224 & a)) {
                                var c = 63 & e[t++];
                                if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | c : (7 & a) << 18 | s << 12 | c << 6 | 63 & e[t++]) < 65536) o += String.fromCharCode(a);
                                else {
                                    var u = a - 65536;
                                    o += String.fromCharCode(55296 | u >> 10, 56320 | 1023 & u)
                                }
                            } else o += String.fromCharCode((31 & a) << 6 | s)
                        } else o += String.fromCharCode(a)
                    }
                    return o
                }

                function C(e, t) {
                    return e ? L(F, e, t) : ""
                }

                function A(e, t, n, r) {
                    if (!(r > 0)) return 0;
                    for (var i = n, o = n + r - 1, a = 0; a < e.length; ++a) {
                        var s = e.charCodeAt(a);
                        if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a)), s <= 127) {
                            if (n >= o) break;
                            t[n++] = s
                        } else if (s <= 2047) {
                            if (n + 1 >= o) break;
                            t[n++] = 192 | s >> 6, t[n++] = 128 | 63 & s
                        } else if (s <= 65535) {
                            if (n + 2 >= o) break;
                            t[n++] = 224 | s >> 12, t[n++] = 128 | s >> 6 & 63, t[n++] = 128 | 63 & s
                        } else {
                            if (n + 3 >= o) break;
                            t[n++] = 240 | s >> 18, t[n++] = 128 | s >> 12 & 63, t[n++] = 128 | s >> 6 & 63, t[n++] = 128 | 63 & s
                        }
                    }
                    return t[n] = 0, n - i
                }

                function M(e, t, n) {
                    return A(e, F, t, n)
                }

                function P(e) {
                    for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++n)), r <= 127 ? ++t : t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4
                    }
                    return t
                }
                var I, R, F, T, z, O, N, j, U, q = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                function B(e, t) {
                    for (var n = e, r = n >> 1, i = r + t / 2; !(r >= i) && z[r];) ++r;
                    if ((n = r << 1) - e > 32 && q) return q.decode(F.subarray(e, n));
                    for (var o = "", a = 0; !(a >= t / 2); ++a) {
                        var s = T[e + 2 * a >> 1];
                        if (0 == s) break;
                        o += String.fromCharCode(s)
                    }
                    return o
                }

                function H(e, t, n) {
                    if (void 0 === n && (n = 2147483647), n < 2) return 0;
                    for (var r = t, i = (n -= 2) < 2 * e.length ? n / 2 : e.length, o = 0; o < i; ++o) {
                        var a = e.charCodeAt(o);
                        T[t >> 1] = a, t += 2
                    }
                    return T[t >> 1] = 0, t - r
                }

                function D(e) {
                    return 2 * e.length
                }

                function W(e, t) {
                    for (var n = 0, r = ""; !(n >= t / 4);) {
                        var i = O[e + 4 * n >> 2];
                        if (0 == i) break;
                        if (++n, i >= 65536) {
                            var o = i - 65536;
                            r += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                        } else r += String.fromCharCode(i)
                    }
                    return r
                }

                function G(e, t, n) {
                    if (void 0 === n && (n = 2147483647), n < 4) return 0;
                    for (var r = t, i = r + n - 4, o = 0; o < e.length; ++o) {
                        var a = e.charCodeAt(o);
                        if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++o)), O[t >> 2] = a, (t += 4) + 4 > i) break
                    }
                    return O[t >> 2] = 0, t - r
                }

                function V(e) {
                    for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        r >= 55296 && r <= 57343 && ++n, t += 4
                    }
                    return t
                }

                function u(e) {
                    var t = P(e) + 1,
                        n = Pt(t);
                    return n && A(e, R, n, t), n
                }

                function J(e, t) {
                    R.set(e, t)
                }
                d.INITIAL_MEMORY;
                var K = [],
                    Y = [],
                    X = [],
                    Z = [];
                var Q, ee, te = 0,
                    ne = null,
                    re = null;

                function ie(e) {
                    throw d.onAbort && d.onAbort(e), b(e = "Aborted(" + e + ")"), x = !0, S = 1, e += ". Build with -sASSERTIONS for more info.", new WebAssembly.RuntimeError(e)
                }

                function oe(e) {
                    return e.startsWith("data:application/octet-stream;base64,")
                }

                function ae(e) {
                    return e.startsWith("file://")
                }

                function se(e) {
                    try {
                        if (e == Q && y) return new Uint8Array(y);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (e) {
                        ie(e)
                    }
                }
                Q = n(4339).slice(1), console.log("Loading WASM", Q), oe(Q) || (ee = Q, Q = d.locateFile ? d.locateFile(ee, m) : m + ee);
                var ce = {
                    48468: function(e) {
                        var n = new WebSocket(C(e));
                        n.binaryType = "arraybuffer", n.events = [], n.onopen = function() {
                            n.events.push([2, 0, 0]), rt()
                        }, n.onerror = function() {
                            n.events.push([3, 0, 0]), rt()
                        }, n.onclose = function() {
                            n.events.push([4, 0, 0]), rt()
                        }, n.onmessage = function(e) {
                            var t = new Uint8Array(e.data),
                                r = Pt(t.length);
                            J(t, r), n.events.push([1, r, t.length]), rt()
                        };
                        for (var r = 0; r < t.sockets.length; ++r)
                            if (null == t.sockets[r]) return t.sockets[r] = n, r;
                        return t.sockets.push(n), t.sockets.length - 1
                    },
                    49129: function(e) {
                        var n = t.sockets[e];
                        n.onopen = n.onclose = n.onmessage = n.onerror = function() {};
                        for (var r = 0; r < n.events.length; ++r) bt(n.events[r][1]);
                        n.events = null;
                        try {
                            n.close()
                        } catch (e) {}
                        t.sockets[e] = null
                    },
                    49355: function(e) {
                        return 1 == t.sockets[e].readyState
                    },
                    49399: function(e, n, r) {
                        var i = t.sockets[e];
                        if (1 != i.readyState) return 0;
                        try {
                            i.send(R.subarray(n, n + r))
                        } catch (e) {
                            return 0
                        }
                        return 1
                    },
                    49536: function(e, n, r) {
                        var i = t.sockets[e];
                        if (0 == i.events.length) return 0;
                        var o = i.events.shift();
                        return N[n >> 2] = o[1], O[r >> 2] = o[2], o[0]
                    },
                    49688: function() {
                        document.querySelectorAll(".aa_holder").forEach((function(e) {
                            e.classList.add("force_hide")
                        }))
                    },
                    49801: function() {
                        document.querySelectorAll(".aa_holder").forEach((function(e) {
                            e.classList.remove("force_hide")
                        }))
                    },
                    49917: function(t) {
                        try {
                            var n = C(t);
                            document.querySelectorAll(".aa_holder").forEach((function(e) {
                                var t = e.id == n;
                                e.style.display = null, t ? e.classList.add("active") : e.classList.remove("active")
                            })), e.egAps && n.length > 0 && e.egAps.render(["div-gpt-ad-dep-1", "div-gpt-ad-dep-2", "div-gpt-ad-dep-3", "div-gpt-ad-dep-4"])
                        } catch (e) {
                            console.warn("Failed to update ads", e)
                        }
                    },
                    50408: function(e) {
                        C(e), setTimeout(c(), 1)
                    },
                    50468: function() {
                        c()
                    },
                    50482: function(t, n) {
                        e.powSolver && e.powSolver(C(n), t, (function(e) {
                            var t = u(e);
                            at(t), bt(t)
                        }))
                    },
                    50644: function(e, t) {
                        try {
                            new Function(C(t))()((function(t) {
                                ot(e, t)
                            }))
                        } catch (t) {
                            console.error(t), ot(e, 0)
                        }
                    },
                    50820: function() {
                        return e.navigator.getGamepads && null != e.navigator.getGamepads()[0] && "standard" == e.navigator.getGamepads()[0].mapping
                    },
                    50968: function() {
                        return e.isUsingTouchDevice()
                    },
                    51011: function(t) {
                        var n = e.navigator.getGamepads()[0].axes;
                        return t >= n.length ? 0 : n[t]
                    },
                    51120: function(t) {
                        var n = e.navigator.getGamepads()[0].buttons;
                        return !(t >= n.length) && n[t].pressed
                    },
                    51254: function() {
                        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement) document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
                        else {
                            var e = document.body;
                            if (!e) return;
                            e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()
                        }
                    },
                    51782: function() {
                        e.setTyping(!1), a.blur(), a.value = "", s.style.display = "none"
                    },
                    51897: function() {
                        return u(a.value)
                    },
                    51939: function(e) {
                        a.value = C(e)
                    },
                    51979: function(t, n, r, i, o) {
                        e.setTyping(!0), s.style.display = "block", s.style.position = "absolute", s.style.left = e.unscale(t) + "px", s.style.top = e.unscale(n) + "px", a.style.width = e.unscale(.96 * r) + "px", a.style.height = e.unscale(i) + "px", a.style.lineHeight = e.unscale(.9 * i) + "px", a.style.fontSize = e.unscale(.9 * i) + "px", a.style.paddingLeft = "5px", a.style.paddingRight = "5px", a.disabled = !o
                    },
                    52605: function() {
                        var e = document.getElementById("canvas");
                        document.activeElement && document.activeElement != e && "D-BASE" != document.activeElement.tagName.toUpperCase() && e.focus()
                    },
                    52787: function() {
                        setTimeout(c, 1)
                    },
                    52814: function() {
                        return u(e.location.search)
                    },
                    52863: function() {
                        return u(e.document.referrer)
                    },
                    52914: function() {
                        return e.top.location != e.location
                    },
                    52965: function() {
                        e.top.location = "http://diep.io/"
                    },
                    53010: function(e) {
                        for (var n = C(e), r = document.querySelector("img[data-path='" + n + "']"), i = 0; i < t.images.length; ++i)
                            if (null == t.images[i]) return t.images[i] = r, i;
                        return t.images.push(r), t.images.length - 1
                    },
                    53281: function(e, n, r, i) {
                        var o = t.images[e];
                        F[n >> 0] = 0 | o.complete, O[r >> 2] = o.width, O[i >> 2] = o.height
                    },
                    53396: function() {
                        return u(e.location.hash)
                    },
                    53443: function() {
                        alert("Invalid party ID")
                    },
                    53474: function() {
                        e.location.hash = ""
                    },
                    53505: function(t) {
                        ! function(t) {
                            var n = document.createElement("textarea");
                            n.classList.add("diep-native"), n.style.position = "fixed", n.style.top = 0, n.style.left = 0, n.style.width = "2em", n.style.height = "2em", n.style.margin = 0, n.style.padding = 0, n.style.border = "none", n.style.outline = "none", n.style.boxShadow = "none", n.style.background = "transparent", n.value = t, document.body.appendChild(n), n.focus(), n.select();
                            var r = !1;
                            try {
                                (r = document.execCommand("copy")) || console.log("execCommand copy failed")
                            } catch (e) {}
                            document.body.removeChild(n), r || e.prompt("Copy the following link to your clipboard:", t)
                        }(C(t))
                    },
                    53543: function() {
                        for (var e = document.createElement("canvas").getContext("2d"), n = 0; n < t.contexts.length; ++n)
                            if (null == t.contexts[n]) return t.contexts[n] = e, n;
                        return t.contexts.push(e), t.contexts.length - 1
                    },
                    53783: function(e) {
                        t.contexts[e] = null
                    },
                    53812: function(e) {
                        t.contexts[e].save()
                    },
                    53841: function(e) {
                        t.contexts[e].restore()
                    },
                    53873: function(e) {
                        t.contexts[e].setTransform(1, 0, 0, 1, 0, 0)
                    },
                    53926: function(e, n, r, i, o, a, s) {
                        t.contexts[e].setTransform(n, r, i, o, a, s)
                    },
                    53985: function(e, n, r, i, o) {
                        t.contexts[e].setTransform(n, r, i, o, 0, 0)
                    },
                    54042: function(e, n, r) {
                        var i = t.contexts[e].canvas;
                        i.width = n, i.height = r
                    },
                    54123: function(e, n, r) {
                        var i = t.contexts[e].canvas;
                        O[n >> 2] = i.width, O[r >> 2] = i.height
                    },
                    54230: function(e) {
                        t.contexts[e].fill()
                    },
                    54259: function(e) {
                        t.contexts[e].stroke()
                    },
                    54290: function(e) {
                        t.contexts[e].clip()
                    },
                    54319: function(e) {
                        t.contexts[e].beginPath()
                    },
                    54353: function(e) {
                        t.contexts[e].closePath()
                    },
                    54387: function(e) {
                        t.contexts[e].rect(0, 0, 1, 1)
                    },
                    54426: function(e) {
                        var n = t.contexts[e],
                            r = n.canvas;
                        n.clearRect(0, 0, r.width, r.height)
                    },
                    54533: function(e, n) {
                        t.contexts[e].fillRect(0, 0, 1 / n, n)
                    },
                    54582: function(e) {
                        t.contexts[e].strokeRect(0, 0, 1, 1)
                    },
                    54627: function(e, n, r, i) {
                        t.contexts[e].fillStyle = "rgb(" + n + "," + r + "," + i + ")"
                    },
                    54701: function(e, n, r, i) {
                        t.contexts[e].strokeStyle = "rgb(" + n + "," + r + "," + i + ")"
                    },
                    54777: function(e, n) {
                        t.contexts[e].globalAlpha *= n
                    },
                    54817: function(e, n) {
                        t.contexts[e].globalAlpha = n
                    },
                    54856: function(e, n, r) {
                        t.contexts[e].moveTo(n, r)
                    },
                    54893: function(e, n, r) {
                        t.contexts[e].lineTo(n, r)
                    },
                    54930: function(e, n, r, i) {
                        t.contexts[e].arc(0, 0, 1, n, r, i)
                    },
                    54977: function(e, n) {
                        t.contexts[e].lineWidth = n
                    },
                    55014: function(e, n) {
                        t.contexts[e].drawImage(t.contexts[n].canvas, 0, 0)
                    },
                    55077: function(e, n) {
                        var r = t.contexts[n].canvas;
                        t.contexts[e].drawImage(r, 0, 0, r.width, r.height, 0, 0, 1, 1)
                    },
                    55202: function(e, n, r, i, o, a) {
                        t.contexts[e].drawImage(t.contexts[n].canvas, r, i, o, a, 0, 0, 1, 1)
                    },
                    55287: function(e, n) {
                        var r = t.images[n];
                        r.complete && 0 != r.width && 0 != r.height && t.contexts[e].drawImage(r, 0, 0, r.width, r.height, 0, 0, 1, 1)
                    },
                    55463: function(e, n) {
                        t.contexts[e].fillText(C(n), 0, 0)
                    },
                    55518: function(e, n) {
                        t.contexts[e].strokeText(C(n), 0, 0)
                    },
                    55575: function(e, n) {
                        return t.contexts[e].measureText(C(n)).width
                    },
                    55640: function(e, n) {
                        t.contexts[e].font = (2048 * n | 0) / 2048 + "px Ubuntu"
                    },
                    55706: function(e) {
                        t.contexts[e].lineCap = "butt"
                    },
                    55745: function(e) {
                        t.contexts[e].lineCap = "round"
                    },
                    55785: function(e) {
                        t.contexts[e].lineCap = "square"
                    },
                    55826: function(e) {
                        t.contexts[e].lineJoin = "round"
                    },
                    55867: function(e) {
                        t.contexts[e].lineJoin = "bevel"
                    },
                    55908: function(e) {
                        t.contexts[e].lineJoin = "miter"
                    },
                    55949: function(e, n) {
                        t.contexts[e].miterLimit = n
                    },
                    55987: function(e) {
                        t.contexts[e].textBaseline = "top"
                    },
                    56030: function(e) {
                        t.contexts[e].textBaseline = "hanging"
                    },
                    56077: function(e) {
                        t.contexts[e].textBaseline = "middle"
                    },
                    56123: function(e) {
                        t.contexts[e].textBaseline = "alphabetic"
                    },
                    56173: function(e) {
                        t.contexts[e].textBaseline = "ideographic"
                    },
                    56224: function(e) {
                        t.contexts[e].textBaseline = "bottom"
                    },
                    56270: function(e) {
                        t.patterns[e] = null
                    },
                    56299: function() {
                        return !!CanvasRenderingContext2D.prototype.createPattern
                    },
                    56362: function(e, n) {
                        for (var r = t.contexts[e].createPattern(t.contexts[n].canvas, null), i = 0; i < t.patterns.length; ++i)
                            if (null == t.patterns[i]) return t.patterns[i] = r, i;
                        return t.patterns.push(r), t.patterns.length - 1
                    },
                    56619: function(e, n, r, i) {
                        t.contexts[e].fillStyle = t.patterns[n], t.contexts[e].fillRect(0, 0, r, i)
                    },
                    56711: function(e, n) {
                        var r = document.getElementById(C(e));
                        if (null == r) return -1;
                        for (var i = r.getContext("2d", {
                                alpha: !!n
                            }), o = 0; o < t.contexts.length; ++o)
                            if (null == t.contexts[o]) return t.contexts[o] = i, o;
                        return t.contexts.push(i), t.contexts.length - 1
                    },
                    57035: function() {
                        return i || (i = r.isFontLoaded("Ubuntu")), i
                    },
                    57137: function() {
                        e.localStorage.playwireAB || (e.localStorage.playwireAB = Math.random());
                        var t = document.getElementById("player");
                        t && t.parentNode && (t.parentNode.style.display = "none"), e.onBoltLoaded = function(t) {
                            if (console.log("Bolt loaded " + t), "player" == t) {
                                var n = e.Bolt;
                                n && (n.on(t, n.BOLT_AD_STARTED, (function() {
                                    console.log("Ad started")
                                })), n.on(t, n.BOLT_AD_ERROR, (function() {
                                    console.log("Ad error"), $t()
                                })), n.on(t, n.BOLT_AD_COMPLETE, (function() {
                                    console.log("Ad complete"), $t()
                                })))
                            }
                        }
                    },
                    57843: function() {
                        var t = e.Bolt;
                        if (!t) return !1;
                        var n = document.getElementById("player");
                        return !!n && (n.style.display = "block", n.parentNode && (n.parentNode.style.display = "block"), t.renderPlayer("player"), !0)
                    },
                    58114: function() {
                        var e = document.getElementById("player");
                        e && (e.innerHTML = "", e.style.display = "none", e.parentNode && (e.parentNode.style.display = "none"))
                    },
                    58298: function() {
                        document.getElementById("canvas").style.cursor = "default"
                    },
                    58362: function() {
                        document.getElementById("canvas").style.cursor = "pointer"
                    },
                    58426: function() {
                        document.getElementById("canvas").style.cursor = "text"
                    },
                    58487: function(t, n, r) {
                        e.localStorage[C(t)] = String.fromCharCode.apply(null, F.subarray(n, n + r))
                    },
                    58594: function(t, n) {
                        var r = e.localStorage[C(t)];
                        r || (r = "");
                        var i = Pt(r.length);
                        N[n >> 2] = r.length;
                        for (var o = 0; o < r.length; ++o) F[i + o] = r.charCodeAt(o);
                        return i
                    },
                    58816: function(e, t) {
                        return e % t
                    }
                };

                function ue(e) {
                    for (; e.length > 0;) {
                        var t = e.shift();
                        if ("function" != typeof t) {
                            var n = t.func;
                            "number" == typeof n ? void 0 === t.arg ? Ft.call(null, n) : (r = t.arg, Rt.apply(null, [n, r])) : n(void 0 === t.arg ? null : t.arg)
                        } else t(d)
                    }
                    var r
                }

                function de(e) {
                    if (e instanceof Tt || "unwind" == e) return S;
                    v(1, e)
                }

                function le(e) {
                    switch (e) {
                        case 1:
                            return 0;
                        case 2:
                            return 1;
                        case 4:
                            return 2;
                        case 8:
                            return 3;
                        default:
                            throw new TypeError("Unknown type size: " + e)
                    }
                }
                var fe = void 0;

                function pe(e) {
                    for (var t = "", n = e; F[n];) t += fe[F[n++]];
                    return t
                }
                var he = {},
                    ve = {},
                    me = {};

                function ye(e) {
                    if (void 0 === e) return "_unknown";
                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                    return t >= 48 && t <= 57 ? "_" + e : e
                }

                function ge(e, t) {
                    return e = ye(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
                }

                function be(e, t) {
                    var n = ge(t, (function(e) {
                        this.name = t, this.message = e;
                        var n = new Error(e).stack;
                        void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
                    }));
                    return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                        return void 0 === this.message ? this.name : this.name + ": " + this.message
                    }, n
                }
                var we = void 0;

                function _e(e) {
                    throw new we(e)
                }

                function Se(e, t, n = {}) {
                    if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    var r = t.name;
                    if (e || _e('type "' + r + '" must have a positive integer typeid pointer'), ve.hasOwnProperty(e)) {
                        if (n.ignoreDuplicateRegistrations) return;
                        _e("Cannot register type '" + r + "' twice")
                    }
                    if (ve[e] = t, delete me[e], he.hasOwnProperty(e)) {
                        var i = he[e];
                        delete he[e], i.forEach((e => e()))
                    }
                }
                var xe = [],
                    Ee = [{}, {
                        value: void 0
                    }, {
                        value: null
                    }, {
                        value: !0
                    }, {
                        value: !1
                    }];

                function ke(e) {
                    e > 4 && 0 == --Ee[e].refcount && (Ee[e] = void 0, xe.push(e))
                }
                var Le = e => (e || _e("Cannot use deleted val. handle = " + e), Ee[e].value),
                    Ce = e => {
                        switch (e) {
                            case void 0:
                                return 1;
                            case null:
                                return 2;
                            case !0:
                                return 3;
                            case !1:
                                return 4;
                            default:
                                var t = xe.length ? xe.pop() : Ee.length;
                                return Ee[t] = {
                                    refcount: 1,
                                    value: e
                                }, t
                        }
                    };

                function Ae(e) {
                    return this.fromWireType(N[e >> 2])
                }

                function Me(e, t) {
                    switch (t) {
                        case 2:
                            return function(e) {
                                return this.fromWireType(j[e >> 2])
                            };
                        case 3:
                            return function(e) {
                                return this.fromWireType(U[e >> 3])
                            };
                        default:
                            throw new TypeError("Unknown float type: " + e)
                    }
                }

                function $e(e, t, n) {
                    switch (t) {
                        case 0:
                            return n ? function(e) {
                                return R[e]
                            } : function(e) {
                                return F[e]
                            };
                        case 1:
                            return n ? function(e) {
                                return T[e >> 1]
                            } : function(e) {
                                return z[e >> 1]
                            };
                        case 2:
                            return n ? function(e) {
                                return O[e >> 2]
                            } : function(e) {
                                return N[e >> 2]
                            };
                        default:
                            throw new TypeError("Unknown integer type: " + e)
                    }
                }

                function Pe(e, t) {
                    var n, r, i = ve[e];
                    return void 0 === i && _e(t + " has unknown type " + (r = pe(n = It(e)), bt(n), r)), i
                }
                var Ie = {};

                function Re(e) {
                    var t = Ie[e];
                    return void 0 === t ? pe(e) : t
                }
                var Fe = [];

                function Te() {
                    return "object" == typeof globalThis ? globalThis : Function("return this")()
                }
                var ze, Oe = [],
                    Ne = [];

                function je(e, t, n) {
                    var r = function(e, t) {
                        var n;
                        for (Ne.length = 0, t >>= 2; n = F[e++];) {
                            var r = n < 105;
                            r && 1 & t && t++, Ne.push(r ? U[t++ >> 1] : O[t]), ++t
                        }
                        return Ne
                    }(t, n);
                    return ce[e].apply(null, r)
                }

                function Ue(e, t) {
                    if (!x)
                        if (t) e();
                        else try {
                            e()
                        } catch (e) {
                            de(e)
                        }
                }

                function qe(e, t) {
                    return setTimeout((function() {
                        Ue(e)
                    }), t)
                }
                ze = () => performance.now();
                var Be = {
                    mainLoop: {
                        running: !1,
                        scheduler: null,
                        method: "",
                        currentlyRunningMainloop: 0,
                        func: null,
                        arg: 0,
                        timingMode: 0,
                        timingValue: 0,
                        currentFrameNumber: 0,
                        queue: [],
                        pause: function() {
                            Be.mainLoop.scheduler = null, Be.mainLoop.currentlyRunningMainloop++
                        },
                        resume: function() {
                            Be.mainLoop.currentlyRunningMainloop++;
                            var e = Be.mainLoop.timingMode,
                                t = Be.mainLoop.timingValue,
                                n = Be.mainLoop.func;
                            Be.mainLoop.func = null, De(n, 0, !1, Be.mainLoop.arg, !0), He(e, t), Be.mainLoop.scheduler()
                        },
                        updateStatus: function() {
                            if (d.setStatus) {
                                var e = d.statusMessage || "Please wait...",
                                    t = Be.mainLoop.remainingBlockers,
                                    n = Be.mainLoop.expectedBlockers;
                                t ? t < n ? d.setStatus(e + " (" + (n - t) + "/" + n + ")") : d.setStatus(e) : d.setStatus("")
                            }
                        },
                        runIter: function(e) {
                            if (!x) {
                                if (d.preMainLoop && !1 === d.preMainLoop()) return;
                                Ue(e), d.postMainLoop && d.postMainLoop()
                            }
                        }
                    },
                    isFullscreen: !1,
                    pointerLock: !1,
                    moduleContextCreatedCallbacks: [],
                    workers: [],
                    init: function() {
                        if (d.preloadPlugins || (d.preloadPlugins = []), !Be.initted) {
                            Be.initted = !0;
                            try {
                                new Blob, Be.hasBlobConstructor = !0
                            } catch (e) {
                                Be.hasBlobConstructor = !1, g("warning: no blob constructor, cannot create blobs with mimetypes")
                            }
                            Be.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Be.hasBlobConstructor ? null : g("warning: no BlobBuilder"), Be.URLObject = void 0 !== e ? e.URL ? e.URL : e.webkitURL : void 0, d.noImageDecoding || void 0 !== Be.URLObject || (g("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), d.noImageDecoding = !0);
                            var t = {
                                canHandle: function(e) {
                                    return !d.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                                }
                            };
                            t.handle = function(e, t, n, r) {
                                var i = null;
                                if (Be.hasBlobConstructor) try {
                                    (i = new Blob([e], {
                                        type: Be.getMimetype(t)
                                    })).size !== e.length && (i = new Blob([new Uint8Array(e).buffer], {
                                        type: Be.getMimetype(t)
                                    }))
                                } catch (e) {
                                    w("Blob constructor present but fails: " + e + "; falling back to blob builder")
                                }
                                if (!i) {
                                    var o = new Be.BlobBuilder;
                                    o.append(new Uint8Array(e).buffer), i = o.getBlob()
                                }
                                var a = Be.URLObject.createObjectURL(i),
                                    s = new Image;
                                s.onload = () => {
                                    E(s.complete, "Image " + t + " could not be decoded");
                                    var r = document.createElement("canvas");
                                    r.width = s.width, r.height = s.height, r.getContext("2d").drawImage(s, 0, 0), et[t] = r, Be.URLObject.revokeObjectURL(a), n && n(e)
                                }, s.onerror = e => {
                                    g("Image " + a + " could not be decoded"), r && r()
                                }, s.src = a
                            }, d.preloadPlugins.push(t);
                            var n = {
                                canHandle: function(e) {
                                    return !d.noAudioDecoding && e.substr(-4) in {
                                        ".ogg": 1,
                                        ".wav": 1,
                                        ".mp3": 1
                                    }
                                },
                                handle: function(e, t, n, r) {
                                    var i = !1;

                                    function o(r) {
                                        i || (i = !0, tt[t] = r, n && n(e))
                                    }

                                    function a() {
                                        i || (i = !0, tt[t] = new Audio, r && r())
                                    }
                                    if (!Be.hasBlobConstructor) return a();
                                    try {
                                        var s = new Blob([e], {
                                            type: Be.getMimetype(t)
                                        })
                                    } catch (e) {
                                        return a()
                                    }
                                    var c = Be.URLObject.createObjectURL(s),
                                        u = new Audio;
                                    u.addEventListener("canplaythrough", (function() {
                                        o(u)
                                    }), !1), u.onerror = function(n) {
                                        i || (g("warning: browser could not fully decode audio " + t + ", trying slower base64 approach"), u.src = "data:audio/x-" + t.substr(-3) + ";base64," + function(e) {
                                            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", r = 0, i = 0, o = 0; o < e.length; o++)
                                                for (r = r << 8 | e[o], i += 8; i >= 6;) {
                                                    var a = r >> i - 6 & 63;
                                                    i -= 6, n += t[a]
                                                }
                                            return 2 == i ? (n += t[(3 & r) << 4], n += "==") : 4 == i && (n += t[(15 & r) << 2], n += "="), n
                                        }(e), o(u))
                                    }, u.src = c, qe((function() {
                                        o(u)
                                    }), 1e4)
                                }
                            };
                            d.preloadPlugins.push(n);
                            var r = d.canvas;
                            r && (r.requestPointerLock = r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock || r.msRequestPointerLock || function() {}, r.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, r.exitPointerLock = r.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", i, !1), document.addEventListener("mozpointerlockchange", i, !1), document.addEventListener("webkitpointerlockchange", i, !1), document.addEventListener("mspointerlockchange", i, !1), d.elementPointerLock && r.addEventListener("click", (function(e) {
                                !Be.pointerLock && d.canvas.requestPointerLock && (d.canvas.requestPointerLock(), e.preventDefault())
                            }), !1))
                        }

                        function i() {
                            Be.pointerLock = document.pointerLockElement === d.canvas || document.mozPointerLockElement === d.canvas || document.webkitPointerLockElement === d.canvas || document.msPointerLockElement === d.canvas
                        }
                    },
                    handledByPreloadPlugin: function(e, t, n, r) {
                        Be.init();
                        var i = !1;
                        return d.preloadPlugins.forEach((function(o) {
                            i || o.canHandle(t) && (o.handle(e, t, n, r), i = !0)
                        })), i
                    },
                    createContext: function(e, t, n, r) {
                        if (t && d.ctx && e == d.canvas) return d.ctx;
                        var i, o;
                        if (t) {
                            var a = {
                                antialias: !1,
                                alpha: !1,
                                majorVersion: 1
                            };
                            if (r)
                                for (var s in r) a[s] = r[s];
                            "undefined" != typeof GL && (o = GL.createContext(e, a)) && (i = GL.getContext(o).GLctx)
                        } else i = e.getContext("2d");
                        return i ? (n && (t || E("undefined" == typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), d.ctx = i, t && GL.makeContextCurrent(o), d.useWebGL = t, Be.moduleContextCreatedCallbacks.forEach((function(e) {
                            e()
                        })), Be.init()), i) : null
                    },
                    destroyContext: function(e, t, n) {},
                    fullscreenHandlersInstalled: !1,
                    lockPointer: void 0,
                    resizeCanvas: void 0,
                    requestFullscreen: function(e, t) {
                        Be.lockPointer = e, Be.resizeCanvas = t, void 0 === Be.lockPointer && (Be.lockPointer = !0), void 0 === Be.resizeCanvas && (Be.resizeCanvas = !1);
                        var n = d.canvas;

                        function r() {
                            Be.isFullscreen = !1;
                            var e = n.parentNode;
                            (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (n.exitFullscreen = Be.exitFullscreen, Be.lockPointer && n.requestPointerLock(), Be.isFullscreen = !0, Be.resizeCanvas ? Be.setFullscreenCanvasSize() : Be.updateCanvasDimensions(n)) : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), Be.resizeCanvas ? Be.setWindowedCanvasSize() : Be.updateCanvasDimensions(n)), d.onFullScreen && d.onFullScreen(Be.isFullscreen), d.onFullscreen && d.onFullscreen(Be.isFullscreen)
                        }
                        Be.fullscreenHandlersInstalled || (Be.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", r, !1), document.addEventListener("mozfullscreenchange", r, !1), document.addEventListener("webkitfullscreenchange", r, !1), document.addEventListener("MSFullscreenChange", r, !1));
                        var i = document.createElement("div");
                        n.parentNode.insertBefore(i, n), i.appendChild(n), i.requestFullscreen = i.requestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen || (i.webkitRequestFullscreen ? function() {
                            i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null) || (i.webkitRequestFullScreen ? function() {
                            i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null), i.requestFullscreen()
                    },
                    exitFullscreen: function() {
                        return !!Be.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
                    },
                    nextRAF: 0,
                    fakeRequestAnimationFrame: function(e) {
                        var t = Date.now();
                        if (0 === Be.nextRAF) Be.nextRAF = t + 1e3 / 60;
                        else
                            for (; t + 2 >= Be.nextRAF;) Be.nextRAF += 1e3 / 60;
                        var n = Math.max(Be.nextRAF - t, 0);
                        setTimeout(e, n)
                    },
                    requestAnimationFrame: function(e) {
                        "function" != typeof requestAnimationFrame ? (0, Be.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
                    },
                    safeSetTimeout: function(e) {
                        return qe(e)
                    },
                    safeRequestAnimationFrame: function(e) {
                        return Be.requestAnimationFrame((function() {
                            Ue(e)
                        }))
                    },
                    getMimetype: function(e) {
                        return {
                            jpg: "image/jpeg",
                            jpeg: "image/jpeg",
                            png: "image/png",
                            bmp: "image/bmp",
                            ogg: "audio/ogg",
                            wav: "audio/wav",
                            mp3: "audio/mpeg"
                        } [e.substr(e.lastIndexOf(".") + 1)]
                    },
                    getUserMedia: function(t) {
                        e.getUserMedia || (e.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), e.getUserMedia(t)
                    },
                    getMovementX: function(e) {
                        return e.movementX || e.mozMovementX || e.webkitMovementX || 0
                    },
                    getMovementY: function(e) {
                        return e.movementY || e.mozMovementY || e.webkitMovementY || 0
                    },
                    getMouseWheelDelta: function(e) {
                        var t = 0;
                        switch (e.type) {
                            case "DOMMouseScroll":
                                t = e.detail / 3;
                                break;
                            case "mousewheel":
                                t = e.wheelDelta / 120;
                                break;
                            case "wheel":
                                switch (t = e.deltaY, e.deltaMode) {
                                    case 0:
                                        t /= 100;
                                        break;
                                    case 1:
                                        t /= 3;
                                        break;
                                    case 2:
                                        t *= 80;
                                        break;
                                    default:
                                        throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                                }
                                break;
                            default:
                                throw "unrecognized mouse wheel event: " + e.type
                        }
                        return t
                    },
                    mouseX: 0,
                    mouseY: 0,
                    mouseMovementX: 0,
                    mouseMovementY: 0,
                    touches: {},
                    lastTouches: {},
                    calculateMouseEvent: function(t) {
                        if (Be.pointerLock) "mousemove" != t.type && "mozMovementX" in t ? Be.mouseMovementX = Be.mouseMovementY = 0 : (Be.mouseMovementX = Be.getMovementX(t), Be.mouseMovementY = Be.getMovementY(t)), "undefined" != typeof SDL ? (Be.mouseX = SDL.mouseX + Be.mouseMovementX, Be.mouseY = SDL.mouseY + Be.mouseMovementY) : (Be.mouseX += Be.mouseMovementX, Be.mouseY += Be.mouseMovementY);
                        else {
                            var n = d.canvas.getBoundingClientRect(),
                                r = d.canvas.width,
                                i = d.canvas.height,
                                o = void 0 !== e.scrollX ? e.scrollX : e.pageXOffset,
                                a = void 0 !== e.scrollY ? e.scrollY : e.pageYOffset;
                            if ("touchstart" === t.type || "touchend" === t.type || "touchmove" === t.type) {
                                var s = t.touch;
                                if (void 0 === s) return;
                                var c = s.pageX - (o + n.left),
                                    u = s.pageY - (a + n.top),
                                    l = {
                                        x: c *= r / n.width,
                                        y: u *= i / n.height
                                    };
                                if ("touchstart" === t.type) Be.lastTouches[s.identifier] = l, Be.touches[s.identifier] = l;
                                else if ("touchend" === t.type || "touchmove" === t.type) {
                                    var f = Be.touches[s.identifier];
                                    f || (f = l), Be.lastTouches[s.identifier] = f, Be.touches[s.identifier] = l
                                }
                                return
                            }
                            var p = t.pageX - (o + n.left),
                                h = t.pageY - (a + n.top);
                            p *= r / n.width, h *= i / n.height, Be.mouseMovementX = p - Be.mouseX, Be.mouseMovementY = h - Be.mouseY, Be.mouseX = p, Be.mouseY = h
                        }
                    },
                    resizeListeners: [],
                    updateResizeListeners: function() {
                        var e = d.canvas;
                        Be.resizeListeners.forEach((function(t) {
                            t(e.width, e.height)
                        }))
                    },
                    setCanvasSize: function(e, t, n) {
                        var r = d.canvas;
                        Be.updateCanvasDimensions(r, e, t), n || Be.updateResizeListeners()
                    },
                    windowedWidth: 0,
                    windowedHeight: 0,
                    setFullscreenCanvasSize: function() {
                        if ("undefined" != typeof SDL) {
                            var e = N[SDL.screen >> 2];
                            e |= 8388608, O[SDL.screen >> 2] = e
                        }
                        Be.updateCanvasDimensions(d.canvas), Be.updateResizeListeners()
                    },
                    setWindowedCanvasSize: function() {
                        if ("undefined" != typeof SDL) {
                            var e = N[SDL.screen >> 2];
                            e &= -8388609, O[SDL.screen >> 2] = e
                        }
                        Be.updateCanvasDimensions(d.canvas), Be.updateResizeListeners()
                    },
                    updateCanvasDimensions: function(e, t, n) {
                        t && n ? (e.widthNative = t, e.heightNative = n) : (t = e.widthNative, n = e.heightNative);
                        var r = t,
                            i = n;
                        if (d.forcedAspectRatio && d.forcedAspectRatio > 0 && (r / i < d.forcedAspectRatio ? r = Math.round(i * d.forcedAspectRatio) : i = Math.round(r / d.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                            var o = Math.min(screen.width / r, screen.height / i);
                            r = Math.round(r * o), i = Math.round(i * o)
                        }
                        Be.resizeCanvas ? (e.width != r && (e.width = r), e.height != i && (e.height = i), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != n && (e.height = n), void 0 !== e.style && (r != t || i != n ? (e.style.setProperty("width", r + "px", "important"), e.style.setProperty("height", i + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
                    }
                };

                function He(e, t) {
                    if (Be.mainLoop.timingMode = e, Be.mainLoop.timingValue = t, !Be.mainLoop.func) return 1;
                    if (Be.mainLoop.running || (Be.mainLoop.running = !0), 0 == e) Be.mainLoop.scheduler = function() {
                        var e = 0 | Math.max(0, Be.mainLoop.tickStartTime + t - ze());
                        setTimeout(Be.mainLoop.runner, e)
                    }, Be.mainLoop.method = "timeout";
                    else if (1 == e) Be.mainLoop.scheduler = function() {
                        Be.requestAnimationFrame(Be.mainLoop.runner)
                    }, Be.mainLoop.method = "rAF";
                    else if (2 == e) {
                        if ("undefined" == typeof setImmediate) {
                            var n = [],
                                r = "setimmediate";
                            addEventListener("message", (function(e) {
                                e.data !== r && e.data.target !== r || (e.stopPropagation(), n.shift()())
                            }), !0), setImmediate = function(e) {
                                n.push(e), postMessage(r, "*")
                            }
                        }
                        Be.mainLoop.scheduler = function() {
                            setImmediate(Be.mainLoop.runner)
                        }, Be.mainLoop.method = "immediate"
                    }
                    return 0
                }

                function De(e, t, n, r, i) {
                    E(!Be.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Be.mainLoop.func = e, Be.mainLoop.arg = r;
                    var o = Be.mainLoop.currentlyRunningMainloop;

                    function a() {
                        return !(o < Be.mainLoop.currentlyRunningMainloop)
                    }
                    if (Be.mainLoop.running = !1, Be.mainLoop.runner = function() {
                            if (!x)
                                if (Be.mainLoop.queue.length > 0) {
                                    var t = Date.now(),
                                        n = Be.mainLoop.queue.shift();
                                    if (n.func(n.arg), Be.mainLoop.remainingBlockers) {
                                        var r = Be.mainLoop.remainingBlockers,
                                            i = r % 1 == 0 ? r - 1 : Math.floor(r);
                                        n.counted ? Be.mainLoop.remainingBlockers = i : (i += .5, Be.mainLoop.remainingBlockers = (8 * r + i) / 9)
                                    }
                                    if (g('main loop blocker "' + n.name + '" took ' + (Date.now() - t) + " ms"), Be.mainLoop.updateStatus(), !a()) return;
                                    setTimeout(Be.mainLoop.runner, 0)
                                } else a() && (Be.mainLoop.currentFrameNumber = Be.mainLoop.currentFrameNumber + 1 | 0, 1 == Be.mainLoop.timingMode && Be.mainLoop.timingValue > 1 && Be.mainLoop.currentFrameNumber % Be.mainLoop.timingValue != 0 ? Be.mainLoop.scheduler() : (0 == Be.mainLoop.timingMode && (Be.mainLoop.tickStartTime = ze()), Be.mainLoop.runIter(e), a() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Be.mainLoop.scheduler())))
                        }, i || (t && t > 0 ? He(0, 1e3 / t) : He(1, 1), Be.mainLoop.scheduler()), n) throw "unwind"
                }
                var We = {};

                function Ge() {
                    if (!Ge.strings) {
                        var e = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                            _: h || "./this.program"
                        };
                        for (var t in We) void 0 === We[t] ? delete e[t] : e[t] = We[t];
                        var n = [];
                        for (var t in e) n.push(t + "=" + e[t]);
                        Ge.strings = n
                    }
                    return Ge.strings
                }
                var Ve = {
                    buffers: [null, [],
                        []
                    ],
                    printChar: function(e, t) {
                        var n = Ve.buffers[e];
                        0 === t || 10 === t ? ((1 === e ? g : b)(L(n, 0)), n.length = 0) : n.push(t)
                    },
                    varargs: void 0,
                    get: function() {
                        return Ve.varargs += 4, O[Ve.varargs - 4 >> 2]
                    },
                    getStr: function(e) {
                        return C(e)
                    }
                };

                function Je(e) {
                    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
                }
                var Ke = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    Ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                function Xe(e) {
                    try {
                        return e()
                    } catch (e) {
                        ie(e)
                    }
                }
                var Ze = {
                    State: {
                        Normal: 0,
                        Unwinding: 1,
                        Rewinding: 2,
                        Disabled: 3
                    },
                    state: 0,
                    StackSize: 4096,
                    currData: null,
                    handleSleepReturnValue: 0,
                    exportCallStack: [],
                    callStackNameToId: {},
                    callStackIdToName: {},
                    callStackId: 0,
                    asyncPromiseHandlers: null,
                    sleepCallbacks: [],
                    getCallStackId: function(e) {
                        var t = Ze.callStackNameToId[e];
                        return void 0 === t && (t = Ze.callStackId++, Ze.callStackNameToId[e] = t, Ze.callStackIdToName[t] = e), t
                    },
                    instrumentWasmExports: function(e) {
                        var t = {};
                        for (var n in e) ! function(n) {
                            var r = e[n];
                            t[n] = "function" == typeof r ? function() {
                                Ze.exportCallStack.push(n);
                                try {
                                    return r.apply(null, arguments)
                                } finally {
                                    if (!x) {
                                        var e = Ze.exportCallStack.pop();
                                        E(e === n), Ze.maybeStopUnwind()
                                    }
                                }
                            } : r
                        }(n);
                        return t
                    },
                    maybeStopUnwind: function() {
                        Ze.currData && Ze.state === Ze.State.Unwinding && 0 === Ze.exportCallStack.length && (Ze.state = Ze.State.Normal, Xe(d._asyncify_stop_unwind), "undefined" != typeof Fibers && Fibers.trampoline())
                    },
                    whenDone: function() {
                        return new Promise(((e, t) => {
                            Ze.asyncPromiseHandlers = {
                                resolve: e,
                                reject: t
                            }
                        }))
                    },
                    allocateData: function() {
                        var e = Pt(12 + Ze.StackSize);
                        return Ze.setDataHeader(e, e + 12, Ze.StackSize), Ze.setDataRewindFunc(e), e
                    },
                    setDataHeader: function(e, t, n) {
                        O[e >> 2] = t, O[e + 4 >> 2] = t + n
                    },
                    setDataRewindFunc: function(e) {
                        var t = Ze.exportCallStack[0],
                            n = Ze.getCallStackId(t);
                        O[e + 8 >> 2] = n
                    },
                    getDataRewindFunc: function(e) {
                        var t = O[e + 8 >> 2],
                            n = Ze.callStackIdToName[t];
                        return d.asm[n]
                    },
                    doRewind: function(e) {
                        return Ze.getDataRewindFunc(e)()
                    },
                    handleSleep: function(e) {
                        if (!x) {
                            if (Ze.state === Ze.State.Normal) {
                                var t = !1,
                                    n = !1;
                                e((e => {
                                    if (!x && (Ze.handleSleepReturnValue = e || 0, t = !0, n)) {
                                        Ze.state = Ze.State.Rewinding, Xe((() => d._asyncify_start_rewind(Ze.currData))), void 0 !== Be && Be.mainLoop.func && Be.mainLoop.resume();
                                        var r, i = !1;
                                        try {
                                            r = Ze.doRewind(Ze.currData)
                                        } catch (e) {
                                            r = e, i = !0
                                        }
                                        var o = !1;
                                        if (!Ze.currData) {
                                            var a = Ze.asyncPromiseHandlers;
                                            a && (Ze.asyncPromiseHandlers = null, (i ? a.reject : a.resolve)(r), o = !0)
                                        }
                                        if (i && !o) throw r
                                    }
                                })), n = !0, t || (Ze.state = Ze.State.Unwinding, Ze.currData = Ze.allocateData(), Xe((() => d._asyncify_start_unwind(Ze.currData))), void 0 !== Be && Be.mainLoop.func && Be.mainLoop.pause())
                            } else Ze.state === Ze.State.Rewinding ? (Ze.state = Ze.State.Normal, Xe(d._asyncify_stop_rewind), bt(Ze.currData), Ze.currData = null, Ze.sleepCallbacks.forEach((e => Ue(e)))) : ie("invalid state: " + Ze.state);
                            return Ze.handleSleepReturnValue
                        }
                    },
                    handleAsync: function(e) {
                        return Ze.handleSleep((t => {
                            e().then(t)
                        }))
                    }
                };
                ! function() {
                    for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
                    fe = e
                }(), we = d.BindingError = be(Error, "BindingError"), d.InternalError = be(Error, "InternalError"), d.count_emval_handles = function() {
                    for (var e = 0, t = 5; t < Ee.length; ++t) void 0 !== Ee[t] && ++e;
                    return e
                }, d.get_first_emval = function() {
                    for (var e = 5; e < Ee.length; ++e)
                        if (void 0 !== Ee[e]) return Ee[e];
                    return null
                }, d.requestFullscreen = function(e, t) {
                    Be.requestFullscreen(e, t)
                }, d.requestAnimationFrame = function(e) {
                    Be.requestAnimationFrame(e)
                }, d.setCanvasSize = function(e, t, n) {
                    Be.setCanvasSize(e, t, n)
                }, d.pauseMainLoop = function() {
                    Be.mainLoop.pause()
                }, d.resumeMainLoop = function() {
                    Be.mainLoop.resume()
                }, d.getUserMedia = function() {
                    Be.getUserMedia()
                }, d.createContext = function(e, t, n, r) {
                    return Be.createContext(e, t, n, r)
                };
                var Qe, et = {},
                    tt = {},
                    nt = {
                        i: function(e, t, n, r) {
                            ie("Assertion failed: " + C(e) + ", at: " + [t ? C(t) : "unknown filename", n, r ? C(r) : "unknown function"])
                        },
                        E: function(e, t, n, r, i) {},
                        M: function(e, t, n, r, i) {
                            var o = le(n);
                            Se(e, {
                                name: t = pe(t),
                                fromWireType: function(e) {
                                    return !!e
                                },
                                toWireType: function(e, t) {
                                    return t ? r : i
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: function(e) {
                                    var r;
                                    if (1 === n) r = R;
                                    else if (2 === n) r = T;
                                    else {
                                        if (4 !== n) throw new TypeError("Unknown boolean type size: " + t);
                                        r = O
                                    }
                                    return this.fromWireType(r[e >> o])
                                },
                                destructorFunction: null
                            })
                        },
                        L: function(e, t) {
                            Se(e, {
                                name: t = pe(t),
                                fromWireType: function(e) {
                                    var t = Le(e);
                                    return ke(e), t
                                },
                                toWireType: function(e, t) {
                                    return Ce(t)
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Ae,
                                destructorFunction: null
                            })
                        },
                        A: function(e, t, n) {
                            var r = le(n);
                            Se(e, {
                                name: t = pe(t),
                                fromWireType: function(e) {
                                    return e
                                },
                                toWireType: function(e, t) {
                                    return t
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Me(t, r),
                                destructorFunction: null
                            })
                        },
                        l: function(e, t, n, r, i) {
                            t = pe(t), -1 === i && (i = 4294967295);
                            var o = le(n),
                                a = e => e;
                            if (0 === r) {
                                var s = 32 - 8 * n;
                                a = e => e << s >>> s
                            }
                            var c = t.includes("unsigned");
                            Se(e, {
                                name: t,
                                fromWireType: a,
                                toWireType: c ? function(e, t) {
                                    return this.name, t >>> 0
                                } : function(e, t) {
                                    return this.name, t
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: $e(t, o, 0 !== r),
                                destructorFunction: null
                            })
                        },
                        g: function(e, t, n) {
                            var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];

                            function i(e) {
                                var t = N,
                                    n = t[e >>= 2],
                                    i = t[e + 1];
                                return new r(I, i, n)
                            }
                            Se(e, {
                                name: n = pe(n),
                                fromWireType: i,
                                argPackAdvance: 8,
                                readValueFromPointer: i
                            }, {
                                ignoreDuplicateRegistrations: !0
                            })
                        },
                        B: function(e, t) {
                            var n = "std::string" === (t = pe(t));
                            Se(e, {
                                name: t,
                                fromWireType: function(e) {
                                    var t, r = N[e >> 2];
                                    if (n)
                                        for (var i = e + 4, o = 0; o <= r; ++o) {
                                            var a = e + 4 + o;
                                            if (o == r || 0 == F[a]) {
                                                var s = C(i, a - i);
                                                void 0 === t ? t = s : (t += String.fromCharCode(0), t += s), i = a + 1
                                            }
                                        } else {
                                            var c = new Array(r);
                                            for (o = 0; o < r; ++o) c[o] = String.fromCharCode(F[e + 4 + o]);
                                            t = c.join("")
                                        }
                                    return bt(e), t
                                },
                                toWireType: function(e, t) {
                                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                    var r = "string" == typeof t;
                                    r || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || _e("Cannot pass non-string to std::string");
                                    var i = (n && r ? () => P(t) : () => t.length)(),
                                        o = Pt(4 + i + 1);
                                    if (N[o >> 2] = i, n && r) M(t, o + 4, i + 1);
                                    else if (r)
                                        for (var a = 0; a < i; ++a) {
                                            var s = t.charCodeAt(a);
                                            s > 255 && (bt(o), _e("String has UTF-16 code units that do not fit in 8 bits")), F[o + 4 + a] = s
                                        } else
                                            for (a = 0; a < i; ++a) F[o + 4 + a] = t[a];
                                    return null !== e && e.push(bt, o), o
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Ae,
                                destructorFunction: function(e) {
                                    bt(e)
                                }
                            })
                        },
                        w: function(e, t, n) {
                            var r, i, o, a, s;
                            n = pe(n), 2 === t ? (r = B, i = H, a = D, o = () => z, s = 1) : 4 === t && (r = W, i = G, a = V, o = () => N, s = 2), Se(e, {
                                name: n,
                                fromWireType: function(e) {
                                    for (var n, i = N[e >> 2], a = o(), c = e + 4, u = 0; u <= i; ++u) {
                                        var d = e + 4 + u * t;
                                        if (u == i || 0 == a[d >> s]) {
                                            var l = r(c, d - c);
                                            void 0 === n ? n = l : (n += String.fromCharCode(0), n += l), c = d + t
                                        }
                                    }
                                    return bt(e), n
                                },
                                toWireType: function(e, r) {
                                    "string" != typeof r && _e("Cannot pass non-string to C++ string type " + n);
                                    var o = a(r),
                                        c = Pt(4 + o + t);
                                    return N[c >> 2] = o >> s, i(r, c + 4, o + t), null !== e && e.push(bt, c), c
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: Ae,
                                destructorFunction: function(e) {
                                    bt(e)
                                }
                            })
                        },
                        N: function(e, t) {
                            Se(e, {
                                isVoid: !0,
                                name: t = pe(t),
                                argPackAdvance: 0,
                                fromWireType: function() {},
                                toWireType: function(e, t) {}
                            })
                        },
                        r: function(e, t, n) {
                            e = Le(e), t = Pe(t, "emval::as");
                            var r = [],
                                i = Ce(r);
                            return O[n >> 2] = i, t.toWireType(r, e)
                        },
                        q: function(e, t, n, r, i) {
                            return (e = Fe[e])(t = Le(t), n = Re(n), function(e) {
                                var t = [];
                                return O[e >> 2] = Ce(t), t
                            }(r), i)
                        },
                        o: function(e, t, n, r) {
                            (e = Fe[e])(t = Le(t), n = Re(n), null, r)
                        },
                        c: ke,
                        t: function(e, t) {
                            return (e = Le(e)) == Le(t)
                        },
                        p: function(e) {
                            return 0 === e ? Ce(Te()) : (e = Re(e), Ce(Te()[e]))
                        },
                        k: function(e, t) {
                            var n = function(e, t) {
                                    for (var n = new Array(e), r = 0; r < e; ++r) n[r] = Pe(O[(t >> 2) + r], "parameter " + r);
                                    return n
                                }(e, t),
                                r = n[0],
                                i = r.name + "_$" + n.slice(1).map((function(e) {
                                    return e.name
                                })).join("_") + "$",
                                o = Oe[i];
                            if (void 0 !== o) return o;
                            for (var a = ["retType"], s = [r], c = "", u = 0; u < e - 1; ++u) c += (0 !== u ? ", " : "") + "arg" + u, a.push("argType" + u), s.push(n[1 + u]);
                            var d, l, f = "return function " + ye("methodCaller_" + i) + "(handle, name, destructors, args) {\n",
                                p = 0;
                            for (u = 0; u < e - 1; ++u) f += "    var arg" + u + " = argType" + u + ".readValueFromPointer(args" + (p ? "+" + p : "") + ");\n", p += n[u + 1].argPackAdvance;
                            for (f += "    var rv = handle[name](" + c + ");\n", u = 0; u < e - 1; ++u) n[u + 1].deleteObject && (f += "    argType" + u + ".deleteObject(arg" + u + ");\n");
                            return r.isVoid || (f += "    return retType.toWireType(destructors, rv);\n"), f += "};\n", a.push(f), d = function(e, t) {
                                if (!(e instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
                                var n = ge(e.name || "unknownFunctionName", (function() {}));
                                n.prototype = e.prototype;
                                var r = new n,
                                    i = e.apply(r, t);
                                return i instanceof Object ? i : r
                            }(Function, a).apply(null, s), l = Fe.length, Fe.push(d), o = l, Oe[i] = o, o
                        },
                        n: function(e, t) {
                            return e = Le(e), t = Le(t), Ce(e[t])
                        },
                        h: function(e) {
                            e > 4 && (Ee[e].refcount += 1)
                        },
                        x: function() {
                            return Ce([])
                        },
                        f: function(e) {
                            return Ce(Re(e))
                        },
                        s: function() {
                            return Ce({})
                        },
                        m: function(e) {
                            ! function(e) {
                                for (; e.length;) {
                                    var t = e.pop();
                                    e.pop()(t)
                                }
                            }(Le(e)), ke(e)
                        },
                        j: function(e, t, n) {
                            e = Le(e), t = Le(t), n = Le(n), e[t] = n
                        },
                        d: function(e, t) {
                            var n = (e = Pe(e, "_emval_take_value")).readValueFromPointer(t);
                            return Ce(n)
                        },
                        b: function() {
                            ie("")
                        },
                        e: function(e, t, n) {
                            return je(e, t, n)
                        },
                        a: je,
                        z: function() {
                            throw "unwind"
                        },
                        O: function(e) {
                            _ = !1, Ot(e)
                        },
                        y: ze,
                        K: function(e, t, n) {
                            F.copyWithin(e, t, t + n)
                        },
                        u: function() {
                            return Math.random()
                        },
                        v: function(e) {
                            F.length, ie("OOM")
                        },
                        C: function(e, t, n) {
                            De((function() {
                                Ft.call(null, e)
                            }), t, n)
                        },
                        I: function(e, t) {
                            var n = 0;
                            return Ge().forEach((function(r, i) {
                                var o = t + n;
                                O[e + 4 * i >> 2] = o,
                                    function(e, t, n) {
                                        for (var r = 0; r < e.length; ++r) R[t++ >> 0] = e.charCodeAt(r);
                                        R[t >> 0] = 0
                                    }(r, o), n += r.length + 1
                            })), 0
                        },
                        J: function(e, t) {
                            var n = Ge();
                            O[e >> 2] = n.length;
                            var r = 0;
                            return n.forEach((function(e) {
                                r += e.length + 1
                            })), O[t >> 2] = r, 0
                        },
                        H: function(e) {
                            return 0
                        },
                        D: function(e, t, n, r, i) {},
                        G: function(e, t, n, r) {
                            for (var i = 0, o = 0; o < n; o++) {
                                var a = O[t >> 2],
                                    s = O[t + 4 >> 2];
                                t += 8;
                                for (var c = 0; c < s; c++) Ve.printChar(e, F[a + c]);
                                i += s
                            }
                            return O[r >> 2] = i, 0
                        },
                        F: function(e, t, n, r) {
                            return function(e, t, n, r) {
                                var i = O[r + 40 >> 2],
                                    o = {
                                        tm_sec: O[r >> 2],
                                        tm_min: O[r + 4 >> 2],
                                        tm_hour: O[r + 8 >> 2],
                                        tm_mday: O[r + 12 >> 2],
                                        tm_mon: O[r + 16 >> 2],
                                        tm_year: O[r + 20 >> 2],
                                        tm_wday: O[r + 24 >> 2],
                                        tm_yday: O[r + 28 >> 2],
                                        tm_isdst: O[r + 32 >> 2],
                                        tm_gmtoff: O[r + 36 >> 2],
                                        tm_zone: i ? C(i) : ""
                                    },
                                    a = C(n),
                                    s = {
                                        "%c": "%a %b %d %H:%M:%S %Y",
                                        "%D": "%m/%d/%y",
                                        "%F": "%Y-%m-%d",
                                        "%h": "%b",
                                        "%r": "%I:%M:%S %p",
                                        "%R": "%H:%M",
                                        "%T": "%H:%M:%S",
                                        "%x": "%m/%d/%y",
                                        "%X": "%H:%M:%S",
                                        "%Ec": "%c",
                                        "%EC": "%C",
                                        "%Ex": "%m/%d/%y",
                                        "%EX": "%H:%M:%S",
                                        "%Ey": "%y",
                                        "%EY": "%Y",
                                        "%Od": "%d",
                                        "%Oe": "%e",
                                        "%OH": "%H",
                                        "%OI": "%I",
                                        "%Om": "%m",
                                        "%OM": "%M",
                                        "%OS": "%S",
                                        "%Ou": "%u",
                                        "%OU": "%U",
                                        "%OV": "%V",
                                        "%Ow": "%w",
                                        "%OW": "%W",
                                        "%Oy": "%y"
                                    };
                                for (var c in s) a = a.replace(new RegExp(c, "g"), s[c]);
                                var u = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                                function l(e, t, n) {
                                    for (var r = "number" == typeof e ? e.toString() : e || ""; r.length < t;) r = n[0] + r;
                                    return r
                                }

                                function f(e, t) {
                                    return l(e, t, "0")
                                }

                                function p(e, t) {
                                    function n(e) {
                                        return e < 0 ? -1 : e > 0 ? 1 : 0
                                    }
                                    var r;
                                    return 0 === (r = n(e.getFullYear() - t.getFullYear())) && 0 === (r = n(e.getMonth() - t.getMonth())) && (r = n(e.getDate() - t.getDate())), r
                                }

                                function h(e) {
                                    switch (e.getDay()) {
                                        case 0:
                                            return new Date(e.getFullYear() - 1, 11, 29);
                                        case 1:
                                            return e;
                                        case 2:
                                            return new Date(e.getFullYear(), 0, 3);
                                        case 3:
                                            return new Date(e.getFullYear(), 0, 2);
                                        case 4:
                                            return new Date(e.getFullYear(), 0, 1);
                                        case 5:
                                            return new Date(e.getFullYear() - 1, 11, 31);
                                        case 6:
                                            return new Date(e.getFullYear() - 1, 11, 30)
                                    }
                                }

                                function v(e) {
                                    var t = function(e, t) {
                                            for (var n = new Date(e.getTime()); t > 0;) {
                                                var r = Je(n.getFullYear()),
                                                    i = n.getMonth(),
                                                    o = (r ? Ke : Ye)[i];
                                                if (!(t > o - n.getDate())) return n.setDate(n.getDate() + t), n;
                                                t -= o - n.getDate() + 1, n.setDate(1), i < 11 ? n.setMonth(i + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1))
                                            }
                                            return n
                                        }(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                        n = new Date(t.getFullYear(), 0, 4),
                                        r = new Date(t.getFullYear() + 1, 0, 4),
                                        i = h(n),
                                        o = h(r);
                                    return p(i, t) <= 0 ? p(o, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
                                }
                                var m = {
                                    "%a": function(e) {
                                        return u[e.tm_wday].substring(0, 3)
                                    },
                                    "%A": function(e) {
                                        return u[e.tm_wday]
                                    },
                                    "%b": function(e) {
                                        return d[e.tm_mon].substring(0, 3)
                                    },
                                    "%B": function(e) {
                                        return d[e.tm_mon]
                                    },
                                    "%C": function(e) {
                                        return f((e.tm_year + 1900) / 100 | 0, 2)
                                    },
                                    "%d": function(e) {
                                        return f(e.tm_mday, 2)
                                    },
                                    "%e": function(e) {
                                        return l(e.tm_mday, 2, " ")
                                    },
                                    "%g": function(e) {
                                        return v(e).toString().substring(2)
                                    },
                                    "%G": function(e) {
                                        return v(e)
                                    },
                                    "%H": function(e) {
                                        return f(e.tm_hour, 2)
                                    },
                                    "%I": function(e) {
                                        var t = e.tm_hour;
                                        return 0 == t ? t = 12 : t > 12 && (t -= 12), f(t, 2)
                                    },
                                    "%j": function(e) {
                                        return f(e.tm_mday + function(e, t) {
                                            for (var n = 0, r = 0; r <= t; n += e[r++]);
                                            return n
                                        }(Je(e.tm_year + 1900) ? Ke : Ye, e.tm_mon - 1), 3)
                                    },
                                    "%m": function(e) {
                                        return f(e.tm_mon + 1, 2)
                                    },
                                    "%M": function(e) {
                                        return f(e.tm_min, 2)
                                    },
                                    "%n": function() {
                                        return "\n"
                                    },
                                    "%p": function(e) {
                                        return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                                    },
                                    "%S": function(e) {
                                        return f(e.tm_sec, 2)
                                    },
                                    "%t": function() {
                                        return "\t"
                                    },
                                    "%u": function(e) {
                                        return e.tm_wday || 7
                                    },
                                    "%U": function(e) {
                                        var t = e.tm_yday + 7 - e.tm_wday;
                                        return f(Math.floor(t / 7), 2)
                                    },
                                    "%V": function(e) {
                                        var t = Math.floor((e.tm_yday + 7 - (e.tm_wday + 6) % 7) / 7);
                                        if ((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t) {
                                            if (53 == t) {
                                                var n = (e.tm_wday + 371 - e.tm_yday) % 7;
                                                4 == n || 3 == n && Je(e.tm_year) || (t = 1)
                                            }
                                        } else {
                                            t = 52;
                                            var r = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                                            (4 == r || 5 == r && Je(e.tm_year % 400 - 1)) && t++
                                        }
                                        return f(t, 2)
                                    },
                                    "%w": function(e) {
                                        return e.tm_wday
                                    },
                                    "%W": function(e) {
                                        var t = e.tm_yday + 7 - (e.tm_wday + 6) % 7;
                                        return f(Math.floor(t / 7), 2)
                                    },
                                    "%y": function(e) {
                                        return (e.tm_year + 1900).toString().substring(2)
                                    },
                                    "%Y": function(e) {
                                        return e.tm_year + 1900
                                    },
                                    "%z": function(e) {
                                        var t = e.tm_gmtoff,
                                            n = t >= 0;
                                        return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60, (n ? "+" : "-") + String("0000" + t).slice(-4)
                                    },
                                    "%Z": function(e) {
                                        return e.tm_zone
                                    },
                                    "%%": function() {
                                        return "%"
                                    }
                                };
                                for (var c in a = a.replace(/%%/g, "\0\0"), m) a.includes(c) && (a = a.replace(new RegExp(c, "g"), m[c](o)));
                                var y = (g = a = a.replace(/\0\0/g, "%"), b = P(g) + 1, w = new Array(b), A(g, w, 0, w.length), w);
                                var g, b, w;
                                return y.length > t ? 0 : (J(y, e), y.length - 1)
                            }(e, t, n, r)
                        }
                    },
                    rt = (function() {
                        var e = {
                            a: nt
                        };

                        function t(e, t) {
                            var n, r, i = e.exports;
                            i = Ze.instrumentWasmExports(i), d.asm = i, n = d.asm.P.buffer, I = n, d.HEAP8 = R = new Int8Array(n), d.HEAP16 = T = new Int16Array(n), d.HEAP32 = O = new Int32Array(n), d.HEAPU8 = F = new Uint8Array(n), d.HEAPU16 = z = new Uint16Array(n), d.HEAPU32 = N = new Uint32Array(n), d.HEAPF32 = j = new Float32Array(n), d.HEAPF64 = U = new Float64Array(n), d.asm.xa, r = d.asm.Q, Y.unshift(r),
                                function(e) {
                                    if (te--, d.monitorRunDependencies && d.monitorRunDependencies(te), 0 == te && (null !== ne && (clearInterval(ne), ne = null), re)) {
                                        var t = re;
                                        re = null, t()
                                    }
                                }()
                        }

                        function n(e) {
                            t(e.instance)
                        }

                        function r(t) {
                            return function() {
                                if (!y) {
                                    if ("function" == typeof fetch && !ae(Q)) return fetch(Q, {
                                        credentials: "same-origin"
                                    }).then((function(e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + Q + "'";
                                        return e.arrayBuffer()
                                    })).catch((function() {
                                        return se(Q)
                                    }));
                                    if (l) return new Promise((function(e, t) {
                                        l(Q, (function(t) {
                                            e(new Uint8Array(t))
                                        }), t)
                                    }))
                                }
                                return Promise.resolve().then((function() {
                                    return se(Q)
                                }))
                            }().then((function(t) {
                                return WebAssembly.instantiate(t, e)
                            })).then((function(e) {
                                return e
                            })).then(t, (function(e) {
                                b("failed to asynchronously prepare wasm: " + e), ie(e)
                            }))
                        }
                        if (te++, d.monitorRunDependencies && d.monitorRunDependencies(te), d.instantiateWasm) try {
                            var i = d.instantiateWasm(e, t);
                            return Ze.instrumentWasmExports(i)
                        } catch (e) {
                            return b("Module.instantiateWasm callback failed with error: " + e), !1
                        }
                        y || "function" != typeof WebAssembly.instantiateStreaming || oe(Q) || ae(Q) || "function" != typeof fetch ? r(n) : fetch(Q, {
                            credentials: "same-origin"
                        }).then((function(t) {
                            return WebAssembly.instantiateStreaming(t, e).then(n, (function(e) {
                                return b("wasm streaming compile failed: " + e), b("falling back to ArrayBuffer instantiation"), r(n)
                            }))
                        }))
                    }(), d.___wasm_call_ctors = function() {
                        return (d.___wasm_call_ctors = d.asm.Q).apply(null, arguments)
                    }, d._cp5_check_ws = function() {
                        return (rt = d._cp5_check_ws = d.asm.R).apply(null, arguments)
                    }),
                    it = d._show_menu = function() {
                        return (it = d._show_menu = d.asm.S).apply(null, arguments)
                    },
                    ot = d._game_js_challenge_response = function() {
                        return (ot = d._game_js_challenge_response = d.asm.T).apply(null, arguments)
                    },
                    at = d._game_pow_solve_result = function() {
                        return (at = d._game_pow_solve_result = d.asm.U).apply(null, arguments)
                    },
                    st = d._try_spawn = function() {
                        return (st = d._try_spawn = d.asm.V).apply(null, arguments)
                    },
                    ct = d._increase_stat = function() {
                        return (ct = d._increase_stat = d.asm.W).apply(null, arguments)
                    },
                    ut = d._get_killer_identity_id = function() {
                        return (ut = d._get_killer_identity_id = d.asm.X).apply(null, arguments)
                    },
                    dt = d._send_identity_token = function() {
                        return (dt = d._send_identity_token = d.asm.Y).apply(null, arguments)
                    },
                    lt = d._touch_joystick = function() {
                        return (lt = d._touch_joystick = d.asm.Z).apply(null, arguments)
                    },
                    ft = d._set_mouse_pos = function() {
                        return (ft = d._set_mouse_pos = d.asm._).apply(null, arguments)
                    },
                    pt = d._set_key_down = function() {
                        return (pt = d._set_key_down = d.asm.$).apply(null, arguments)
                    },
                    ht = d._set_key_up = function() {
                        return (ht = d._set_key_up = d.asm.aa).apply(null, arguments)
                    },
                    vt = d._reset_keys = function() {
                        return (vt = d._reset_keys = d.asm.ba).apply(null, arguments)
                    },
                    mt = d._prevent_right_click = function() {
                        return (mt = d._prevent_right_click = d.asm.ca).apply(null, arguments)
                    },
                    yt = d._flush_input_hooks = function() {
                        return (yt = d._flush_input_hooks = d.asm.da).apply(null, arguments)
                    },
                    gt = d._mouse_wheel = function() {
                        return (gt = d._mouse_wheel = d.asm.ea).apply(null, arguments)
                    },
                    bt = d._free = function() {
                        return (bt = d._free = d.asm.fa).apply(null, arguments)
                    },
                    wt = d._cp5_idle = function() {
                        return (wt = d._cp5_idle = d.asm.ga).apply(null, arguments)
                    },
                    _t = (d._cp5_destroy = function() {
                        return (d._cp5_destroy = d.asm.ha).apply(null, arguments)
                    }, d._has_tank = function() {
                        return (_t = d._has_tank = d.asm.ia).apply(null, arguments)
                    }),
                    St = d._set_convar = function() {
                        return (St = d._set_convar = d.asm.ja).apply(null, arguments)
                    },
                    xt = d._get_convar = function() {
                        return (xt = d._get_convar = d.asm.ka).apply(null, arguments)
                    },
                    Et = d._execute = function() {
                        return (Et = d._execute = d.asm.la).apply(null, arguments)
                    },
                    kt = d._print_convar_help = function() {
                        return (kt = d._print_convar_help = d.asm.ma).apply(null, arguments)
                    },
                    Lt = (d._main = function() {
                        return (d._main = d.asm.na).apply(null, arguments)
                    }, d._set_region = function() {
                        return (Lt = d._set_region = d.asm.oa).apply(null, arguments)
                    }),
                    Ct = d._set_game_mode = function() {
                        return (Ct = d._set_game_mode = d.asm.pa).apply(null, arguments)
                    },
                    At = d._connect_lobby = function() {
                        return (At = d._connect_lobby = d.asm.qa).apply(null, arguments)
                    },
                    Mt = d._find_lobby_failed = function() {
                        return (Mt = d._find_lobby_failed = d.asm.ra).apply(null, arguments)
                    },
                    $t = (d._videoads_loaded = function() {
                        return (d._videoads_loaded = d.asm.sa).apply(null, arguments)
                    }, d._videoads_done = function() {
                        return ($t = d._videoads_done = d.asm.ta).apply(null, arguments)
                    }),
                    Pt = d._malloc = function() {
                        return (Pt = d._malloc = d.asm.ua).apply(null, arguments)
                    },
                    It = d.___getTypeName = function() {
                        return (It = d.___getTypeName = d.asm.va).apply(null, arguments)
                    },
                    Rt = (d.___embind_register_native_and_builtin_types = function() {
                        return (d.___embind_register_native_and_builtin_types = d.asm.wa).apply(null, arguments)
                    }, d.dynCall_vi = function() {
                        return (Rt = d.dynCall_vi = d.asm.ya).apply(null, arguments)
                    }),
                    Ft = d.dynCall_v = function() {
                        return (Ft = d.dynCall_v = d.asm.za).apply(null, arguments)
                    };

                function Tt(e) {
                    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                }

                function zt(e) {
                    function t() {
                        Qe || (Qe = !0, d.calledRun = !0, x || (ue(Y), ue(X), d.onRuntimeInitialized && d.onRuntimeInitialized(), Nt && function(e) {
                            var t = d._main;
                            try {
                                Ot(t(0, 0))
                            } catch (e) {
                                return de(e)
                            }
                        }(), function() {
                            if (d.postRun)
                                for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) e = d.postRun.shift(), Z.unshift(e);
                            var e;
                            ue(Z)
                        }()))
                    }
                    e = e || p, te > 0 || (function() {
                        if (d.preRun)
                            for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) e = d.preRun.shift(), K.unshift(e);
                        var e;
                        ue(K)
                    }(), te > 0 || (d.setStatus ? (d.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            d.setStatus("")
                        }), 1), t()
                    }), 1)) : t()))
                }

                function Ot(e, t) {
                    var n;
                    S = e, S = n = e, _ || (d.onExit && d.onExit(n), x = !0), v(n, new Tt(n))
                }
                if (d._asyncify_start_unwind = function() {
                        return (d._asyncify_start_unwind = d.asm.Aa).apply(null, arguments)
                    }, d._asyncify_stop_unwind = function() {
                        return (d._asyncify_stop_unwind = d.asm.Ba).apply(null, arguments)
                    }, d._asyncify_start_rewind = function() {
                        return (d._asyncify_start_rewind = d.asm.Ca).apply(null, arguments)
                    }, d._asyncify_stop_rewind = function() {
                        return (d._asyncify_stop_rewind = d.asm.Da).apply(null, arguments)
                    }, re = function e() {
                        Qe || zt(), Qe || (re = e)
                    }, d.run = zt, d.preInit)
                    for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); d.preInit.length > 0;) d.preInit.pop()();
                var Nt = !0;
                d.noInitialRun && (Nt = !1), zt()
            }(window)
        },
        5035: function(e, t, n) {
            let r = new Worker(new URL(n.p + n.u(572), n.b)),
                i = 0,
                o = {};
            window.powSolver = function(e, t, n) {
                let a = i++;
                r.postMessage([a, "solve", e, t, !!localStorage.pow_perf]), o[a] = n
            }, r.onmessage = function(e) {
                let t = e.data,
                    n = t[0];
                o[n].apply(null, t.slice(1))
            }
        },
        4339: function(e, t, n) {
            "use strict";
            e.exports = n.p + "17a82752618a6e1c6396.wasm"
        },
        5911: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0aff28faa2b3abc8e49a.svg"
        },
        5883: function(e, t, n) {
            "use strict";
            e.exports = n.p + "54426acb27779ea944ea.svg"
        },
        2987: function(e, t, n) {
            "use strict";
            e.exports = n.p + "546246c1c6beb7a31c61.svg"
        },
        8439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "da55e778c0af59e1b7ba.svg"
        },
        9198: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2b96179241e072f75ba9.svg"
        },
        9580: function(e, t, n) {
            "use strict";
            e.exports = n.p + "05678adf08163469d01f.png"
        },
        2633: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"/></svg>'
        },
        7969: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"/></svg>'
        },
        389: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M560 128l-32 .0001c-8.875 0-16 7.125-16 15.1v80h-32V176c0-8.875-7.125-16-16-16H416v-64L464 96C472.9 96 480 88.88 480 80v-32C480 39.12 472.9 32 464 32h-32C423.1 32 416 39.12 416 48V64l-48 .0002c-8.875 0-16 7.125-16 16v48H224v-48c0-8.875-7.125-16-16-16L160 64V48C160 39.12 152.9 32 144 32h-32C103.1 32 96 39.12 96 48v32C96 88.88 103.1 96 112 96L160 96v64H112c-8.875 0-16 7.125-16 16v48H64V144c0-8.875-7.125-15.1-16-15.1l-32-.0001c-8.875 0-16 7.125-16 15.1v128c0 8.875 7.125 16 16 16H64v80c0 8.875 7.125 16 16 16l48 0v80c0 8.875 7.125 16 16 16l96 0c8.875 0 16-7.125 16-15.1v-31.1c0-8.875-7.125-16-16-16H192v-32h192v32h-48c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 15.1 16 15.1l96 0c8.875 0 16-7.125 16-16v-80l48 0c8.875 0 16-7.125 16-16v-80h48c8.875 0 16-7.125 16-16v-128C576 135.1 568.9 128 560 128zM224 320H160V224h64V320zM416 320h-64V224h64V320z"/></svg>'
        },
        3279: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"/></svg>'
        },
        5570: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M118.6 370.7l-67.88 67.88L96.01 483.9c37.5 37.5 98.26 37.5 135.8 0l90.51-90.51l97.63-19.5c6.501-1.375 8.876-9.625 4-13.88C335.9 283.4 202.4 286.1 118.6 370.7zM201 284.9C216.5 217.1 200.3 143.6 152 88.08C147.8 83.2 139.5 85.58 138.1 91.95l-19.5 97.76L28.13 280.2c-37.5 37.5-37.5 98.26 0 135.8l67.88-67.88C126.4 317.7 162.6 296.7 201 284.9zM511.9 45.2V42.07c1.375-21.5-14.63-40-36.38-41.88c-16.63-1.625-31.75 6.1-39.13 21c-9.876-9.501-24.25-13.75-38.38-9.5c-13.38 3.75-23.63 14-27.5 26.88c-10.88-7.126-25-8.626-37.75-3.25c-12.75 5.751-21.13 17.25-23.38 29.75c-11.5-5.376-25.63-5.376-37.5 1.625c-11.75 6.751-18.88 18.88-19.75 31.38C240.3 93.58 226.1 94.83 215 102.8C211.8 105.2 209 107.1 206.6 111.1c28.38 51.13 37.75 110 28.38 166.4c56.38-9.376 115.3-.3766 166.5 28.13c1.625-1.625 3.375-3.25 4.875-5.25c8.001-11.25 9.252-25 4.751-36.88c12.75-.8751 25-8.002 31.63-19.75c7.126-11.88 7.376-26 1.625-37.5c12.88-2.25 24.38-10.25 30.13-23c5.75-12.88 4.125-26.88-2.875-37.88c12.5-3.75 23-13.75 27.13-27.13c4.25-14.13 .0004-28.5-8.875-38.38C502.4 73.45 511.3 60.58 511.9 45.2z"/></svg>'
        },
        522: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"/></svg>'
        },
        6830: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M437.2 403.5L319.1 215L319.1 64h7.1c13.25 0 23.1-10.75 23.1-24l-.0002-16c0-13.25-10.75-24-23.1-24H120C106.8 0 96.01 10.75 96.01 24l-.0002 16c0 13.25 10.75 24 23.1 24h7.1L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5zM137.1 320l48.15-77.63C189.8 237.3 191.9 230.8 191.9 224l.0651-160h63.99l-.06 160c0 6.875 2.25 13.25 5.875 18.38L309.9 320H137.1z"/></svg>'
        },
        3865: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"/></svg>'
        },
        6608: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'
        },
        4571: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/></svg>'
        },
        7213: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M416 352l-288 .013V336C128 327.1 120.9 320 112 320h-32C71.12 320 64 327.1 64 336v16.01L32 352c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96C448 366.4 433.6 352 416 352zM192 218.8V320h64V218.8c46.13-13.75 80.01-56.16 80.01-106.8c0-61.88-50.13-111.1-112-111.1S111.1 50.12 111.1 111.1C111.1 162.6 145.9 205 192 218.8zM200 48C213.2 48 224 58.75 224 72S213.2 96 200 96S176 85.25 176 72S186.8 48 200 48z"/></svg>'
        },
        1804: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M72 48C85.25 48 96 58.75 96 72V120C96 133.3 85.25 144 72 144V232H128C128 218.7 138.7 208 152 208H200C213.3 208 224 218.7 224 232V280C224 293.3 213.3 304 200 304H152C138.7 304 128 293.3 128 280H72V384C72 388.4 75.58 392 80 392H128C128 378.7 138.7 368 152 368H200C213.3 368 224 378.7 224 392V440C224 453.3 213.3 464 200 464H152C138.7 464 128 453.3 128 440H80C49.07 440 24 414.9 24 384V144C10.75 144 0 133.3 0 120V72C0 58.75 10.75 48 24 48H72zM160 96C160 78.33 174.3 64 192 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96zM288 256C288 238.3 302.3 224 320 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H320C302.3 288 288 273.7 288 256zM288 416C288 398.3 302.3 384 320 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H320C302.3 448 288 433.7 288 416z"/></svg>'
        },
        9345: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"/></svg>'
        },
        4370: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/></svg>'
        },
        6114: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77L256 444.8z"/></svg>'
        },
        6159: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>'
        },
        5040: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M110.1 227.6c-6.25-6.248-16.37-6.248-22.62 0l-18.75 18.75c-5.498 5.373-6.249 13.87-1.999 20.25l53.37 79.99l-53.5 53.5l-29.25-14.62c-5.375-2.748-11.75-1.623-16 2.625l-17.25 17.25c-5.5 5.375-5.5 14.25 0 19.62l82.87 82.87c5.375 5.5 14.25 5.5 19.62 0l17.25-17.25c4.25-4.25 5.375-10.62 2.625-16l-14.62-29.25l53.5-53.5l79.99 53.41c6.375 4.25 14.87 3.5 20.25-2l18.75-18.79c6.25-6.25 6.25-16.37 0-22.62L110.1 227.6zM493.7 .1497l-93.74 15.88L171.9 244.1l95.99 95.99l228.1-228.1l15.87-93.75C513.3 7.781 504.2-1.35 493.7 .1497z"/></svg>'
        },
        8125: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M309.4 389.4l79.1-80.01L93.38 13.39L15.26 .1367c-8.875-1.25-16.37 6.251-15.12 15.13l13.25 78.13L309.4 389.4zM507.2 462.1l-59.25-59.26l31.62-59.01c3.375-6.251 2.25-13.88-2.75-18.88L459.2 307.4c-6.25-6.251-16.37-6.251-22.62 0L307.3 436.8c-6.25 6.251-6.25 16.42 0 22.54l17.58 17.63c4.1 5.001 12.62 6.125 18.87 2.75l58.1-31.63l59.25 59.26c6.25 6.251 16.5 6.251 22.75 0l22.5-22.5C513.5 478.6 513.5 468.3 507.2 462.1zM498.6 93.4l13.25-78.13c1.25-8.876-6.25-16.38-15.12-15.13l-78.12 13.25l-139.1 140l79.1 80.01L498.6 93.4zM153.4 278.7L100 332L75.3 307.3c-6.25-6.251-16.42-6.251-22.54 0l-17.62 17.58c-4.1 5.001-6.125 12.63-2.75 18.88l31.62 59.01L4.768 462.1c-6.25 6.251-6.25 16.5 0 22.75l22.5 22.5c6.25 6.251 16.5 6.251 22.75 0l59.25-59.26l58.1 31.63c6.25 3.375 13.87 2.25 18.87-2.75l17.5-17.63c6.25-6.251 6.25-16.42 0-22.54l-24.63-24.71l53.37-53.38L153.4 278.7z"/></svg>'
        },
        9207: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"/></svg>'
        },
        3664: function(e) {
            "use strict";
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/></svg>'
        },
        5974: function() {},
        9082: function() {}
    },
    t = {};

function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = t[r] = {
        exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.exports
}
n.m = e, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, {
            a: t
        }), t
    }, n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.u = function(e) {
        return e + ".0440d338.js"
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/", n.b = document.baseURI || self.location.href,
    function() {
        "use strict";
        const e = window,
            t = e.ShadowRoot && (void 0 === e.ShadyCSS || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
            r = Symbol(),
            i = new WeakMap;
        class o {
            constructor(e, t, n) {
                if (this._$cssResult$ = !0, n !== r) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e, this.t = t
            }
            get styleSheet() {
                let e = this.o;
                const n = this.t;
                if (t && void 0 === e) {
                    const t = void 0 !== n && 1 === n.length;
                    t && (e = i.get(n)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), t && i.set(n, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        const a = e => new o("string" == typeof e ? e : e + "", void 0, r),
            s = (e, ...t) => {
                const n = 1 === e.length ? e[0] : t.reduce(((t, n, r) => t + (e => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                })(n) + e[r + 1]), e[0]);
                return new o(n, e, r)
            },
            c = t ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                let t = "";
                for (const n of e.cssRules) t += n.cssText;
                return a(t)
            })(e) : e;
        var u;
        const d = window,
            l = d.trustedTypes,
            f = l ? l.emptyScript : "",
            p = d.reactiveElementPolyfillSupport,
            h = {
                toAttribute(e, t) {
                    switch (t) {
                        case Boolean:
                            e = e ? f : null;
                            break;
                        case Object:
                        case Array:
                            e = null == e ? e : JSON.stringify(e)
                    }
                    return e
                },
                fromAttribute(e, t) {
                    let n = e;
                    switch (t) {
                        case Boolean:
                            n = null !== e;
                            break;
                        case Number:
                            n = null === e ? null : Number(e);
                            break;
                        case Object:
                        case Array:
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                n = null
                            }
                    }
                    return n
                }
            },
            v = (e, t) => t !== e && (t == t || e == e),
            m = {
                attribute: !0,
                type: String,
                converter: h,
                reflect: !1,
                hasChanged: v
            };
        class y extends HTMLElement {
            constructor() {
                super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
            }
            static addInitializer(e) {
                var t;
                null !== (t = this.h) && void 0 !== t || (this.h = []), this.h.push(e)
            }
            static get observedAttributes() {
                this.finalize();
                const e = [];
                return this.elementProperties.forEach(((t, n) => {
                    const r = this._$Ep(n, t);
                    void 0 !== r && (this._$Ev.set(r, n), e.push(r))
                })), e
            }
            static createProperty(e, t = m) {
                if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                    const n = "symbol" == typeof e ? Symbol() : "__" + e,
                        r = this.getPropertyDescriptor(e, n, t);
                    void 0 !== r && Object.defineProperty(this.prototype, e, r)
                }
            }
            static getPropertyDescriptor(e, t, n) {
                return {
                    get() {
                        return this[t]
                    },
                    set(r) {
                        const i = this[e];
                        this[t] = r, this.requestUpdate(e, i, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) || m
            }
            static finalize() {
                if (this.hasOwnProperty("finalized")) return !1;
                this.finalized = !0;
                const e = Object.getPrototypeOf(this);
                if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                    const e = this.properties,
                        t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                    for (const n of t) this.createProperty(n, e[n])
                }
                return this.elementStyles = this.finalizeStyles(this.styles), !0
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const n = new Set(e.flat(1 / 0).reverse());
                    for (const e of n) t.unshift(c(e))
                } else void 0 !== e && t.push(c(e));
                return t
            }
            static _$Ep(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            u() {
                var e;
                this._$E_ = new Promise((e => this.enableUpdating = e)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((e => e(this)))
            }
            addController(e) {
                var t, n;
                (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
            }
            removeController(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach(((e, t) => {
                    this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                }))
            }
            createRenderRoot() {
                var n;
                const r = null !== (n = this.shadowRoot) && void 0 !== n ? n : this.attachShadow(this.constructor.shadowRootOptions);
                return ((n, r) => {
                    t ? n.adoptedStyleSheets = r.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : r.forEach((t => {
                        const r = document.createElement("style"),
                            i = e.litNonce;
                        void 0 !== i && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r)
                    }))
                })(r, this.constructor.elementStyles), r
            }
            connectedCallback() {
                var e;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            attributeChangedCallback(e, t, n) {
                this._$AK(e, n)
            }
            _$EO(e, t, n = m) {
                var r;
                const i = this.constructor._$Ep(e, n);
                if (void 0 !== i && !0 === n.reflect) {
                    const o = (void 0 !== (null === (r = n.converter) || void 0 === r ? void 0 : r.toAttribute) ? n.converter : h).toAttribute(t, n.type);
                    this._$El = e, null == o ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null
                }
            }
            _$AK(e, t) {
                var n;
                const r = this.constructor,
                    i = r._$Ev.get(e);
                if (void 0 !== i && this._$El !== i) {
                    const e = r.getPropertyOptions(i),
                        o = "function" == typeof e.converter ? {
                            fromAttribute: e.converter
                        } : void 0 !== (null === (n = e.converter) || void 0 === n ? void 0 : n.fromAttribute) ? e.converter : h;
                    this._$El = i, this[i] = o.fromAttribute(t, e.type), this._$El = null
                }
            }
            requestUpdate(e, t, n) {
                let r = !0;
                void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || v)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.scheduleUpdate();
                return null != e && await e, !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var e;
                if (!this.isUpdatePending) return;
                this.hasUpdated, this._$Ei && (this._$Ei.forEach(((e, t) => this[t] = e)), this._$Ei = void 0);
                let t = !1;
                const n = this._$AL;
                try {
                    t = this.shouldUpdate(n), t ? (this.willUpdate(n), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                        var t;
                        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                    })), this.update(n)) : this._$Ek()
                } catch (e) {
                    throw t = !1, this._$Ek(), e
                }
                t && this._$AE(n)
            }
            willUpdate(e) {}
            _$AE(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach((e => {
                    var t;
                    return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
            }
            _$Ek() {
                this._$AL = new Map, this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this._$EC && (this._$EC.forEach(((e, t) => this._$EO(t, this[t], e))), this._$EC = void 0), this._$Ek()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        var g;
        y.finalized = !0, y.elementProperties = new Map, y.elementStyles = [], y.shadowRootOptions = {
            mode: "open"
        }, null == p || p({
            ReactiveElement: y
        }), (null !== (u = d.reactiveElementVersions) && void 0 !== u ? u : d.reactiveElementVersions = []).push("1.4.1");
        const b = window,
            w = b.trustedTypes,
            _ = w ? w.createPolicy("lit-html", {
                createHTML: e => e
            }) : void 0,
            S = `lit$${(Math.random()+"").slice(9)}$`,
            x = "?" + S,
            E = `<${x}>`,
            k = document,
            L = (e = "") => k.createComment(e),
            C = e => null === e || "object" != typeof e && "function" != typeof e,
            A = Array.isArray,
            M = e => A(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
            $ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            P = /-->/g,
            I = />/g,
            R = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
            F = /'/g,
            T = /"/g,
            z = /^(?:script|style|textarea|title)$/i,
            O = e => (t, ...n) => ({
                _$litType$: e,
                strings: t,
                values: n
            }),
            N = O(1),
            j = (O(2), Symbol.for("lit-noChange")),
            U = Symbol.for("lit-nothing"),
            q = new WeakMap,
            B = k.createTreeWalker(k, 129, null, !1),
            H = (e, t) => {
                const n = e.length - 1,
                    r = [];
                let i, o = 2 === t ? "<svg>" : "",
                    a = $;
                for (let t = 0; t < n; t++) {
                    const n = e[t];
                    let s, c, u = -1,
                        d = 0;
                    for (; d < n.length && (a.lastIndex = d, c = a.exec(n), null !== c);) d = a.lastIndex, a === $ ? "!--" === c[1] ? a = P : void 0 !== c[1] ? a = I : void 0 !== c[2] ? (z.test(c[2]) && (i = RegExp("</" + c[2], "g")), a = R) : void 0 !== c[3] && (a = R) : a === R ? ">" === c[0] ? (a = null != i ? i : $, u = -1) : void 0 === c[1] ? u = -2 : (u = a.lastIndex - c[2].length, s = c[1], a = void 0 === c[3] ? R : '"' === c[3] ? T : F) : a === T || a === F ? a = R : a === P || a === I ? a = $ : (a = R, i = void 0);
                    const l = a === R && e[t + 1].startsWith("/>") ? " " : "";
                    o += a === $ ? n + E : u >= 0 ? (r.push(s), n.slice(0, u) + "$lit$" + n.slice(u) + S + l) : n + S + (-2 === u ? (r.push(void 0), t) : l)
                }
                const s = o + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return [void 0 !== _ ? _.createHTML(s) : s, r]
            };
        class D {
            constructor({
                strings: e,
                _$litType$: t
            }, n) {
                let r;
                this.parts = [];
                let i = 0,
                    o = 0;
                const a = e.length - 1,
                    s = this.parts,
                    [c, u] = H(e, t);
                if (this.el = D.createElement(c, n), B.currentNode = this.el.content, 2 === t) {
                    const e = this.el.content,
                        t = e.firstChild;
                    t.remove(), e.append(...t.childNodes)
                }
                for (; null !== (r = B.nextNode()) && s.length < a;) {
                    if (1 === r.nodeType) {
                        if (r.hasAttributes()) {
                            const e = [];
                            for (const t of r.getAttributeNames())
                                if (t.endsWith("$lit$") || t.startsWith(S)) {
                                    const n = u[o++];
                                    if (e.push(t), void 0 !== n) {
                                        const e = r.getAttribute(n.toLowerCase() + "$lit$").split(S),
                                            t = /([.?@])?(.*)/.exec(n);
                                        s.push({
                                            type: 1,
                                            index: i,
                                            name: t[2],
                                            strings: e,
                                            ctor: "." === t[1] ? K : "?" === t[1] ? X : "@" === t[1] ? Z : J
                                        })
                                    } else s.push({
                                        type: 6,
                                        index: i
                                    })
                                } for (const t of e) r.removeAttribute(t)
                        }
                        if (z.test(r.tagName)) {
                            const e = r.textContent.split(S),
                                t = e.length - 1;
                            if (t > 0) {
                                r.textContent = w ? w.emptyScript : "";
                                for (let n = 0; n < t; n++) r.append(e[n], L()), B.nextNode(), s.push({
                                    type: 2,
                                    index: ++i
                                });
                                r.append(e[t], L())
                            }
                        }
                    } else if (8 === r.nodeType)
                        if (r.data === x) s.push({
                            type: 2,
                            index: i
                        });
                        else {
                            let e = -1;
                            for (; - 1 !== (e = r.data.indexOf(S, e + 1));) s.push({
                                type: 7,
                                index: i
                            }), e += S.length - 1
                        } i++
                }
            }
            static createElement(e, t) {
                const n = k.createElement("template");
                return n.innerHTML = e, n
            }
        }

        function W(e, t, n = e, r) {
            var i, o, a, s;
            if (t === j) return t;
            let c = void 0 !== r ? null === (i = n._$Cl) || void 0 === i ? void 0 : i[r] : n._$Cu;
            const u = C(t) ? void 0 : t._$litDirective$;
            return (null == c ? void 0 : c.constructor) !== u && (null === (o = null == c ? void 0 : c._$AO) || void 0 === o || o.call(c, !1), void 0 === u ? c = void 0 : (c = new u(e), c._$AT(e, n, r)), void 0 !== r ? (null !== (a = (s = n)._$Cl) && void 0 !== a ? a : s._$Cl = [])[r] = c : n._$Cu = c), void 0 !== c && (t = W(e, c._$AS(e, t.values), c, r)), t
        }
        class G {
            constructor(e, t) {
                this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            p(e) {
                var t;
                const {
                    el: {
                        content: n
                    },
                    parts: r
                } = this._$AD, i = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : k).importNode(n, !0);
                B.currentNode = i;
                let o = B.nextNode(),
                    a = 0,
                    s = 0,
                    c = r[0];
                for (; void 0 !== c;) {
                    if (a === c.index) {
                        let t;
                        2 === c.type ? t = new V(o, o.nextSibling, this, e) : 1 === c.type ? t = new c.ctor(o, c.name, c.strings, this, e) : 6 === c.type && (t = new Q(o, this, e)), this.v.push(t), c = r[++s]
                    }
                    a !== (null == c ? void 0 : c.index) && (o = B.nextNode(), a++)
                }
                return i
            }
            m(e) {
                let t = 0;
                for (const n of this.v) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
            }
        }
        class V {
            constructor(e, t, n, r) {
                var i;
                this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$C_ = null === (i = null == r ? void 0 : r.isConnected) || void 0 === i || i
            }
            get _$AU() {
                var e, t;
                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$C_
            }
            get parentNode() {
                let e = this._$AA.parentNode;
                const t = this._$AM;
                return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t = this) {
                e = W(this, e, t), C(e) ? e === U || null == e || "" === e ? (this._$AH !== U && this._$AR(), this._$AH = U) : e !== this._$AH && e !== j && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.k(e) : M(e) ? this.O(e) : this.$(e)
            }
            S(e, t = this._$AB) {
                return this._$AA.parentNode.insertBefore(e, t)
            }
            k(e) {
                this._$AH !== e && (this._$AR(), this._$AH = this.S(e))
            }
            $(e) {
                this._$AH !== U && C(this._$AH) ? this._$AA.nextSibling.data = e : this.k(k.createTextNode(e)), this._$AH = e
            }
            T(e) {
                var t;
                const {
                    values: n,
                    _$litType$: r
                } = e, i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = D.createElement(r.h, this.options)), r);
                if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.m(n);
                else {
                    const e = new G(i, this),
                        t = e.p(this.options);
                    e.m(n), this.k(t), this._$AH = e
                }
            }
            _$AC(e) {
                let t = q.get(e.strings);
                return void 0 === t && q.set(e.strings, t = new D(e)), t
            }
            O(e) {
                A(this._$AH) || (this._$AH = [], this._$AR());
                const t = this._$AH;
                let n, r = 0;
                for (const i of e) r === t.length ? t.push(n = new V(this.S(L()), this.S(L()), this, this.options)) : n = t[r], n._$AI(i), r++;
                r < t.length && (this._$AR(n && n._$AB.nextSibling, r), t.length = r)
            }
            _$AR(e = this._$AA.nextSibling, t) {
                var n;
                for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t); e && e !== this._$AB;) {
                    const t = e.nextSibling;
                    e.remove(), e = t
                }
            }
            setConnected(e) {
                var t;
                void 0 === this._$AM && (this._$C_ = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
            }
        }
        class J {
            constructor(e, t, n, r, i) {
                this.type = 1, this._$AH = U, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = U
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e, t = this, n, r) {
                const i = this.strings;
                let o = !1;
                if (void 0 === i) e = W(this, e, t, 0), o = !C(e) || e !== this._$AH && e !== j, o && (this._$AH = e);
                else {
                    const r = e;
                    let a, s;
                    for (e = i[0], a = 0; a < i.length - 1; a++) s = W(this, r[n + a], t, a), s === j && (s = this._$AH[a]), o || (o = !C(s) || s !== this._$AH[a]), s === U ? e = U : e !== U && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                }
                o && !r && this.P(e)
            }
            P(e) {
                e === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
            }
        }
        class K extends J {
            constructor() {
                super(...arguments), this.type = 3
            }
            P(e) {
                this.element[this.name] = e === U ? void 0 : e
            }
        }
        const Y = w ? w.emptyScript : "";
        class X extends J {
            constructor() {
                super(...arguments), this.type = 4
            }
            P(e) {
                e && e !== U ? this.element.setAttribute(this.name, Y) : this.element.removeAttribute(this.name)
            }
        }
        class Z extends J {
            constructor(e, t, n, r, i) {
                super(e, t, n, r, i), this.type = 5
            }
            _$AI(e, t = this) {
                var n;
                if ((e = null !== (n = W(this, e, t, 0)) && void 0 !== n ? n : U) === j) return;
                const r = this._$AH,
                    i = e === U && r !== U || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                    o = e !== U && (r === U || i);
                i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), this._$AH = e
            }
            handleEvent(e) {
                var t, n;
                "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class Q {
            constructor(e, t, n) {
                this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                W(this, e)
            }
        }
        const ee = {
                A: "$lit$",
                M: S,
                C: x,
                L: 1,
                R: H,
                D: G,
                V: M,
                I: W,
                H: V,
                N: J,
                U: X,
                B: Z,
                F: K,
                W: Q
            },
            te = b.litHtmlPolyfillSupport;
        var ne, re;
        null == te || te(D, V), (null !== (g = b.litHtmlVersions) && void 0 !== g ? g : b.litHtmlVersions = []).push("2.3.1");
        class ie extends y {
            constructor() {
                super(...arguments), this.renderOptions = {
                    host: this
                }, this._$Do = void 0
            }
            createRenderRoot() {
                var e, t;
                const n = super.createRenderRoot();
                return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = n.firstChild), n
            }
            update(e) {
                const t = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ((e, t, n) => {
                    var r, i;
                    const o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : t;
                    let a = o._$litPart$;
                    if (void 0 === a) {
                        const e = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
                        o._$litPart$ = a = new V(t.insertBefore(L(), e), e, void 0, null != n ? n : {})
                    }
                    return a._$AI(e), a
                })(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var e;
                super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
            }
            disconnectedCallback() {
                var e;
                super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
            }
            render() {
                return j
            }
        }
        ie.finalized = !0, ie._$litElement$ = !0, null === (ne = globalThis.litElementHydrateSupport) || void 0 === ne || ne.call(globalThis, {
            LitElement: ie
        });
        const oe = globalThis.litElementPolyfillSupport;
        null == oe || oe({
            LitElement: ie
        }), (null !== (re = globalThis.litElementVersions) && void 0 !== re ? re : globalThis.litElementVersions = []).push("3.2.2");
        const ae = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
                const {
                    kind: n,
                    elements: r
                } = t;
                return {
                    kind: n,
                    elements: r,
                    finisher(t) {
                        customElements.define(e, t)
                    }
                }
            })(e, t),
            se = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? {
                ...t,
                finisher(n) {
                    n.createProperty(t.key, e)
                }
            } : {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: t.key,
                initializer() {
                    "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
                },
                finisher(n) {
                    n.createProperty(t.key, e)
                }
            };

        function ce(e) {
            return (t, n) => void 0 !== n ? ((e, t, n) => {
                t.constructor.createProperty(n, e)
            })(e, t, n) : se(e, t)
        }

        function ue(e, t) {
            return (({
                finisher: e,
                descriptor: t
            }) => (n, r) => {
                var i;
                if (void 0 === r) {
                    const r = null !== (i = n.originalKey) && void 0 !== i ? i : n.key,
                        o = null != t ? {
                            kind: "method",
                            placement: "prototype",
                            key: r,
                            descriptor: t(n.key)
                        } : {
                            ...n,
                            key: r
                        };
                    return null != e && (o.finisher = function(t) {
                        e(t, r)
                    }), o
                } {
                    const i = n.constructor;
                    void 0 !== t && Object.defineProperty(n, r, t(r)), null == e || e(i, r)
                }
            })({
                descriptor: n => {
                    const r = {
                        get() {
                            var t, n;
                            return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    if (t) {
                        const t = "symbol" == typeof n ? Symbol() : "__" + n;
                        r.get = function() {
                            var n, r;
                            return void 0 === this[t] && (this[t] = null !== (r = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(e)) && void 0 !== r ? r : null), this[t]
                        }
                    }
                    return r
                }
            })
        }
        var de;
        null === (de = window.HTMLSlotElement) || void 0 === de || de.prototype.assignedElements;
        const le = e => (...t) => ({
            _$litDirective$: e,
            values: t
        });
        class fe {
            constructor(e) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(e, t, n) {
                this._$Ct = e, this._$AM = t, this._$Ci = n
            }
            _$AS(e, t) {
                return this.update(e, t)
            }
            update(e, t) {
                return this.render(...t)
            }
        }
        const pe = le(class extends fe {
                constructor(e) {
                    var t;
                    if (super(e), 1 !== e.type || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return Object.keys(e).reduce(((t, n) => {
                        const r = e[n];
                        return null == r ? t : t + `${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`
                    }), "")
                }
                update(e, [t]) {
                    const {
                        style: n
                    } = e.element;
                    if (void 0 === this.vt) {
                        this.vt = new Set;
                        for (const e in t) this.vt.add(e);
                        return this.render(t)
                    }
                    this.vt.forEach((e => {
                        null == t[e] && (this.vt.delete(e), e.includes("-") ? n.removeProperty(e) : n[e] = "")
                    }));
                    for (const e in t) {
                        const r = t[e];
                        null != r && (this.vt.add(e), e.includes("-") ? n.setProperty(e, r) : n[e] = r)
                    }
                    return j
                }
            }),
            he = (e, t, n) => {
                for (const n of t)
                    if (n[0] === e) return (0, n[1])();
                return null == n ? void 0 : n()
            };
        var ve = function(e, t) {
            return ve = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }, ve(e, t)
        };

        function me(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            ve(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var ye = function() {
            return ye = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, ye.apply(this, arguments)
        };

        function ge(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        }

        function be(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        }

        function we(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }

        function _e(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function Se(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function xe(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        Object.create, Object.create;
        var Ee, ke = n(6066);
        ! function(e) {
            e.ENV = "env", e.CONFIG = "shared config entry"
        }(Ee || (Ee = {}));
        for (var Le = function(e) {
                if ("function" == typeof e) return e;
                var t = Promise.resolve(e);
                return function() {
                    return t
                }
            }, Ce = function(e) {
                var t, n = e.endpoint,
                    r = e.urlParser;
                return ye(ye({}, e), {
                    tls: null === (t = e.tls) || void 0 === t || t,
                    endpoint: Le("string" == typeof n ? r(n) : n),
                    isCustomEndpoint: !0,
                    useDualstackEndpoint: Le(e.useDualstackEndpoint)
                })
            }, Ae = function() {
                function e(e) {
                    this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? "".concat(e.protocol, ":") : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? "/".concat(e.path) : e.path : "/"
                }
                return e.isInstance = function(e) {
                    if (!e) return !1;
                    var t = e;
                    return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers
                }, e.prototype.clone = function() {
                    var t, n = new e(ye(ye({}, this), {
                        headers: ye({}, this.headers)
                    }));
                    return n.query && (n.query = (t = n.query, Object.keys(t).reduce((function(e, n) {
                        var r, i = t[n];
                        return ye(ye({}, e), ((r = {})[n] = Array.isArray(i) ? xe([], Se(i), !1) : i, r))
                    }), {}))), n
                }, e
            }(), Me = function() {
                function e(e) {
                    this.statusCode = e.statusCode, this.headers = e.headers || {}, this.body = e.body
                }
                return e.isInstance = function(e) {
                    if (!e) return !1;
                    var t = e;
                    return "number" == typeof t.statusCode && "object" == typeof t.headers
                }, e
            }(), $e = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, Pe)
            }, Pe = function(e) {
                return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
            }, Ie = function() {
                function e(e) {
                    var t = this;
                    "function" == typeof e ? this.configProvider = function() {
                        return be(t, void 0, void 0, (function() {
                            return we(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, e()];
                                    case 1:
                                        return [2, t.sent() || {}]
                                }
                            }))
                        }))
                    } : this.config = null != e ? e : {}
                }
                return e.prototype.destroy = function() {}, e.prototype.handle = function(e, t) {
                    var n = (void 0 === t ? {} : t).abortSignal;
                    return be(this, void 0, void 0, (function() {
                        var t, r, i, o, a, s, c, u, d, l, f, p;
                        return we(this, (function(h) {
                            switch (h.label) {
                                case 0:
                                    return this.config || !this.configProvider ? [3, 2] : (t = this, [4, this.configProvider()]);
                                case 1:
                                    t.config = h.sent(), h.label = 2;
                                case 2:
                                    return r = this.config.requestTimeout, (null == n ? void 0 : n.aborted) ? ((i = new Error("Request aborted")).name = "AbortError", [2, Promise.reject(i)]) : (o = e.path, e.query && (a = function(e) {
                                        var t, n, r = [];
                                        try {
                                            for (var i = _e(Object.keys(e).sort()), o = i.next(); !o.done; o = i.next()) {
                                                var a = o.value,
                                                    s = e[a];
                                                if (a = $e(a), Array.isArray(s))
                                                    for (var c = 0, u = s.length; c < u; c++) r.push("".concat(a, "=").concat($e(s[c])));
                                                else {
                                                    var d = a;
                                                    (s || "string" == typeof s) && (d += "=".concat($e(s))), r.push(d)
                                                }
                                            }
                                        } catch (e) {
                                            t = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                o && !o.done && (n = i.return) && n.call(i)
                                            } finally {
                                                if (t) throw t.error
                                            }
                                        }
                                        return r.join("&")
                                    }(e.query), a && (o += "?".concat(a))), s = e.port, c = e.method, u = "".concat(e.protocol, "//").concat(e.hostname).concat(s ? ":".concat(s) : "").concat(o), d = "GET" === c || "HEAD" === c ? void 0 : e.body, l = {
                                        body: d,
                                        headers: new Headers(e.headers),
                                        method: c
                                    }, "undefined" != typeof AbortController && (l.signal = n), f = new Request(u, l), p = [fetch(f).then((function(e) {
                                        var t, n, r = e.headers,
                                            i = {};
                                        try {
                                            for (var o = _e(r.entries()), a = o.next(); !a.done; a = o.next()) {
                                                var s = a.value;
                                                i[s[0]] = s[1]
                                            }
                                        } catch (e) {
                                            t = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                a && !a.done && (n = o.return) && n.call(o)
                                            } finally {
                                                if (t) throw t.error
                                            }
                                        }
                                        return void 0 !== e.body ? {
                                            response: new Me({
                                                headers: i,
                                                statusCode: e.status,
                                                body: e.body
                                            })
                                        } : e.blob().then((function(t) {
                                            return {
                                                response: new Me({
                                                    headers: i,
                                                    statusCode: e.status,
                                                    body: t
                                                })
                                            }
                                        }))
                                    })), (v = r, void 0 === v && (v = 0), new Promise((function(e, t) {
                                        v && setTimeout((function() {
                                            var e = new Error("Request did not complete within ".concat(v, " ms"));
                                            e.name = "TimeoutError", t(e)
                                        }), v)
                                    })))], n && p.push(new Promise((function(e, t) {
                                        n.onabort = function() {
                                            var e = new Error("Request aborted");
                                            e.name = "AbortError", t(e)
                                        }
                                    }))), [2, Promise.race(p)])
                            }
                            var v
                        }))
                    }))
                }, e
            }(), Re = {}, Fe = new Array(64), Te = 0, ze = "A".charCodeAt(0), Oe = "Z".charCodeAt(0); Te + ze <= Oe; Te++) {
            var Ne = String.fromCharCode(Te + ze);
            Re[Ne] = Te, Fe[Te] = Ne
        }
        for (Te = 0, ze = "a".charCodeAt(0), Oe = "z".charCodeAt(0); Te + ze <= Oe; Te++) {
            Ne = String.fromCharCode(Te + ze);
            var je = Te + 26;
            Re[Ne] = je, Fe[je] = Ne
        }
        for (Te = 0; Te < 10; Te++) Re[Te.toString(10)] = Te + 52, Ne = Te.toString(10), je = Te + 52, Re[Ne] = je, Fe[je] = Ne;

        function Ue(e) {
            var t = e.length / 4 * 3;
            "==" === e.slice(-2) ? t -= 2 : "=" === e.slice(-1) && t--;
            for (var n = new ArrayBuffer(t), r = new DataView(n), i = 0; i < e.length; i += 4) {
                for (var o = 0, a = 0, s = i, c = i + 3; s <= c; s++)
                    if ("=" !== e[s]) {
                        if (!(e[s] in Re)) throw new TypeError("Invalid character ".concat(e[s], " in base64 string."));
                        o |= Re[e[s]] << 6 * (c - s), a += 6
                    } else o >>= 6;
                var u = i / 4 * 3;
                o >>= a % 8;
                for (var d = Math.floor(a / 8), l = 0; l < d; l++) {
                    var f = 8 * (d - l - 1);
                    r.setUint8(u + l, (o & 255 << f) >> f)
                }
            }
            return new Uint8Array(n)
        }

        function qe(e) {
            for (var t = "", n = 0; n < e.length; n += 3) {
                for (var r = 0, i = 0, o = n, a = Math.min(n + 3, e.length); o < a; o++) r |= e[o] << 8 * (a - o - 1), i += 8;
                var s = Math.ceil(i / 6);
                r <<= 6 * s - i;
                for (var c = 1; c <= s; c++) {
                    var u = 6 * (s - c);
                    t += Fe[(r & 63 << u) >> u]
                }
                t += "==".slice(0, 4 - s)
            }
            return t
        }
        Re["+"] = 62, Fe[62] = "+", Re["/"] = 63, Fe[63] = "/";
        var Be, He = function(e) {
            return "function" == typeof Blob && e instanceof Blob ? function(e) {
                return be(this, void 0, void 0, (function() {
                    var t, n;
                    return we(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, De(e)];
                            case 1:
                                return t = r.sent(), n = Ue(t), [2, new Uint8Array(n)]
                        }
                    }))
                }))
            }(e) : function(e) {
                return be(this, void 0, void 0, (function() {
                    var t, n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                t = new Uint8Array(0), n = e.getReader(), r = !1, c.label = 1;
                            case 1:
                                return r ? [3, 3] : [4, n.read()];
                            case 2:
                                return i = c.sent(), o = i.done, (a = i.value) && (s = t, (t = new Uint8Array(s.length + a.length)).set(s), t.set(a, s.length)), r = o, [3, 1];
                            case 3:
                                return [2, t]
                        }
                    }))
                }))
            }(e)
        };

        function De(e) {
            return new Promise((function(t, n) {
                var r = new FileReader;
                r.onloadend = function() {
                    var e;
                    if (2 !== r.readyState) return n(new Error("Reader aborted too early"));
                    var i = null !== (e = r.result) && void 0 !== e ? e : "",
                        o = i.indexOf(","),
                        a = o > -1 ? o + 1 : i.length;
                    t(i.substring(a))
                }, r.onabort = function() {
                    return n(new Error("Read aborted"))
                }, r.onerror = function() {
                    return n(r.error)
                }, r.readAsDataURL(e)
            }))
        }! function(e) {
            e.STANDARD = "standard", e.ADAPTIVE = "adaptive"
        }(Be || (Be = {}));
        var We, Ge = Be.STANDARD,
            Ve = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
            Je = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
            Ke = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"],
            Ye = [500, 502, 503, 504],
            Xe = function(e) {
                var t, n;
                return 429 === (null === (t = e.$metadata) || void 0 === t ? void 0 : t.httpStatusCode) || Je.includes(e.name) || 1 == (null === (n = e.$retryable) || void 0 === n ? void 0 : n.throttling)
            },
            Ze = function() {
                function e(e) {
                    var t, n, r, i, o;
                    this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = null !== (t = null == e ? void 0 : e.beta) && void 0 !== t ? t : .7, this.minCapacity = null !== (n = null == e ? void 0 : e.minCapacity) && void 0 !== n ? n : 1, this.minFillRate = null !== (r = null == e ? void 0 : e.minFillRate) && void 0 !== r ? r : .5, this.scaleConstant = null !== (i = null == e ? void 0 : e.scaleConstant) && void 0 !== i ? i : .4, this.smooth = null !== (o = null == e ? void 0 : e.smooth) && void 0 !== o ? o : .8;
                    var a = this.getCurrentTimeInSeconds();
                    this.lastThrottleTime = a, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
                }
                return e.prototype.getCurrentTimeInSeconds = function() {
                    return Date.now() / 1e3
                }, e.prototype.getSendToken = function() {
                    return be(this, void 0, void 0, (function() {
                        return we(this, (function(e) {
                            return [2, this.acquireTokenBucket(1)]
                        }))
                    }))
                }, e.prototype.acquireTokenBucket = function(e) {
                    return be(this, void 0, void 0, (function() {
                        var t;
                        return we(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.enabled ? (this.refillTokenBucket(), e > this.currentCapacity ? (t = (e - this.currentCapacity) / this.fillRate * 1e3, [4, new Promise((function(e) {
                                        return setTimeout(e, t)
                                    }))]) : [3, 2]) : [2];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return this.currentCapacity = this.currentCapacity - e, [2]
                            }
                        }))
                    }))
                }, e.prototype.refillTokenBucket = function() {
                    var e = this.getCurrentTimeInSeconds();
                    if (this.lastTimestamp) {
                        var t = (e - this.lastTimestamp) * this.fillRate;
                        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e
                    } else this.lastTimestamp = e
                }, e.prototype.updateClientSendingRate = function(e) {
                    var t;
                    if (this.updateMeasuredRate(), Xe(e)) {
                        var n = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
                        this.lastMaxRate = n, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(n), this.enableTokenBucket()
                    } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
                    var r = Math.min(t, 2 * this.measuredTxRate);
                    this.updateTokenBucketRate(r)
                }, e.prototype.calculateTimeWindow = function() {
                    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3))
                }, e.prototype.cubicThrottle = function(e) {
                    return this.getPrecise(e * this.beta)
                }, e.prototype.cubicSuccess = function(e) {
                    return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
                }, e.prototype.enableTokenBucket = function() {
                    this.enabled = !0
                }, e.prototype.updateTokenBucketRate = function(e) {
                    this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
                }, e.prototype.updateMeasuredRate = function() {
                    var e = this.getCurrentTimeInSeconds(),
                        t = Math.floor(2 * e) / 2;
                    if (this.requestCount++, t > this.lastTxRateBucket) {
                        var n = this.requestCount / (t - this.lastTxRateBucket);
                        this.measuredTxRate = this.getPrecise(n * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = t
                    }
                }, e.prototype.getPrecise = function(e) {
                    return parseFloat(e.toFixed(8))
                }, e
            }(),
            Qe = new Uint8Array(16);

        function et() {
            if (!We && !(We = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return We(Qe)
        }
        for (var tt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, nt = function(e) {
                return "string" == typeof e && tt.test(e)
            }, rt = [], it = 0; it < 256; ++it) rt.push((it + 256).toString(16).substr(1));
        var ot = function(e, t, n) {
                var r = (e = e || {}).random || (e.rng || et)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                    n = n || 0;
                    for (var i = 0; i < 16; ++i) t[n + i] = r[i];
                    return t
                }
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (rt[e[t + 0]] + rt[e[t + 1]] + rt[e[t + 2]] + rt[e[t + 3]] + "-" + rt[e[t + 4]] + rt[e[t + 5]] + "-" + rt[e[t + 6]] + rt[e[t + 7]] + "-" + rt[e[t + 8]] + rt[e[t + 9]] + "-" + rt[e[t + 10]] + rt[e[t + 11]] + rt[e[t + 12]] + rt[e[t + 13]] + rt[e[t + 14]] + rt[e[t + 15]]).toLowerCase();
                    if (!nt(n)) throw TypeError("Stringified UUID is invalid");
                    return n
                }(r)
            },
            at = function(e, t) {
                return Math.floor(Math.min(2e4, Math.random() * Math.pow(2, t) * e))
            },
            st = function(e) {
                return !!e && (function(e) {
                    return void 0 !== e.$retryable
                }(e) || function(e) {
                    return Ve.includes(e.name)
                }(e) || Xe(e) || function(e) {
                    var t;
                    return Ke.includes(e.name) || Ye.includes((null === (t = e.$metadata) || void 0 === t ? void 0 : t.httpStatusCode) || 0)
                }(e))
            },
            ct = function() {
                function e(e, t) {
                    var n, r, i, o, a, s, c, u, d;
                    this.maxAttemptsProvider = e, this.mode = Be.STANDARD, this.retryDecider = null !== (n = null == t ? void 0 : t.retryDecider) && void 0 !== n ? n : st, this.delayDecider = null !== (r = null == t ? void 0 : t.delayDecider) && void 0 !== r ? r : at, this.retryQuota = null !== (i = null == t ? void 0 : t.retryQuota) && void 0 !== i ? i : (o = 1, a = 5, s = 10, c = 500, u = function(e) {
                        return "TimeoutError" === e.name ? s : a
                    }, d = function(e) {
                        return u(e) <= c
                    }, Object.freeze({
                        hasRetryTokens: d,
                        retrieveRetryTokens: function(e) {
                            if (!d(e)) throw new Error("No retry token available");
                            var t = u(e);
                            return c -= t, t
                        },
                        releaseRetryTokens: function(e) {
                            c += null != e ? e : o, c = Math.min(c, 500)
                        }
                    }))
                }
                return e.prototype.shouldRetry = function(e, t, n) {
                    return t < n && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e)
                }, e.prototype.getMaxAttempts = function() {
                    return be(this, void 0, void 0, (function() {
                        var e;
                        return we(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, this.maxAttemptsProvider()];
                                case 1:
                                    return e = t.sent(), [3, 3];
                                case 2:
                                    return t.sent(), e = 3, [3, 3];
                                case 3:
                                    return [2, e]
                            }
                        }))
                    }))
                }, e.prototype.retry = function(e, t, n) {
                    return be(this, void 0, void 0, (function() {
                        var r, i, o, a, s, c, u, d;
                        return we(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return i = 0, o = 0, [4, this.getMaxAttempts()];
                                case 1:
                                    a = l.sent(), s = t.request, Ae.isInstance(s) && (s.headers["amz-sdk-invocation-id"] = ot()), c = function() {
                                        var c, d, l, f, p, h;
                                        return we(this, (function(v) {
                                            switch (v.label) {
                                                case 0:
                                                    return v.trys.push([0, 4, , 7]), Ae.isInstance(s) && (s.headers["amz-sdk-request"] = "attempt=".concat(i + 1, "; max=").concat(a)), (null == n ? void 0 : n.beforeRequest) ? [4, n.beforeRequest()] : [3, 2];
                                                case 1:
                                                    v.sent(), v.label = 2;
                                                case 2:
                                                    return [4, e(t)];
                                                case 3:
                                                    return c = v.sent(), d = c.response, l = c.output, (null == n ? void 0 : n.afterRequest) && n.afterRequest(d), u.retryQuota.releaseRetryTokens(r), l.$metadata.attempts = i + 1, l.$metadata.totalRetryDelay = o, [2, {
                                                        value: {
                                                            response: d,
                                                            output: l
                                                        }
                                                    }];
                                                case 4:
                                                    return f = v.sent(), p = ut(f), i++, u.shouldRetry(p, i, a) ? (r = u.retryQuota.retrieveRetryTokens(p), h = u.delayDecider(Xe(p) ? 500 : 100, i), o += h, [4, new Promise((function(e) {
                                                        return setTimeout(e, h)
                                                    }))]) : [3, 6];
                                                case 5:
                                                    return v.sent(), [2, "continue"];
                                                case 6:
                                                    throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = i, p.$metadata.totalRetryDelay = o, p;
                                                case 7:
                                                    return [2]
                                            }
                                        }))
                                    }, u = this, l.label = 2;
                                case 2:
                                    return [5, c()];
                                case 3:
                                    return "object" == typeof(d = l.sent()) ? [2, d.value] : [3, 2];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e
            }(),
            ut = function(e) {
                return e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : "string" == typeof e ? new Error(e) : new Error("AWS SDK error wrapper for ".concat(e))
            },
            dt = function(e) {
                function t(t, n) {
                    var r = this,
                        i = null != n ? n : {},
                        o = i.rateLimiter,
                        a = ge(i, ["rateLimiter"]);
                    return (r = e.call(this, t, a) || this).rateLimiter = null != o ? o : new Ze, r.mode = Be.ADAPTIVE, r
                }
                return me(t, e), t.prototype.retry = function(t, n) {
                    return be(this, void 0, void 0, (function() {
                        var r = this;
                        return we(this, (function(i) {
                            return [2, e.prototype.retry.call(this, t, n, {
                                beforeRequest: function() {
                                    return be(r, void 0, void 0, (function() {
                                        return we(this, (function(e) {
                                            return [2, this.rateLimiter.getSendToken()]
                                        }))
                                    }))
                                },
                                afterRequest: function(e) {
                                    r.rateLimiter.updateClientSendingRate(e)
                                }
                            })]
                        }))
                    }))
                }, t
            }(ct),
            lt = function(e) {
                var t, n = Le(null !== (t = e.maxAttempts) && void 0 !== t ? t : 3);
                return ye(ye({}, e), {
                    maxAttempts: n,
                    retryStrategy: function() {
                        return be(void 0, void 0, void 0, (function() {
                            return we(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e.retryStrategy ? [2, e.retryStrategy] : [4, Le(e.retryMode)()];
                                    case 1:
                                        return t.sent() === Be.ADAPTIVE ? [2, new dt(n)] : [2, new ct(n)]
                                }
                            }))
                        }))
                    }
                })
            },
            ft = {
                name: "retryMiddleware",
                tags: ["RETRY"],
                step: "finalizeRequest",
                priority: "high",
                override: !0
            },
            pt = function(e) {
                return {
                    applyToStack: function(t) {
                        t.add(function(e) {
                            return function(t, n) {
                                return function(r) {
                                    return be(void 0, void 0, void 0, (function() {
                                        var i;
                                        return we(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, e.retryStrategy()];
                                                case 1:
                                                    return (null == (i = o.sent()) ? void 0 : i.mode) && (n.userAgent = xe(xe([], Se(n.userAgent || []), !1), [
                                                        ["cfg/retry-mode", i.mode]
                                                    ], !1)), [2, i.retry(t, r)]
                                            }
                                        }))
                                    }))
                                }
                            }
                        }(e), ft)
                    }
                }
            },
            ht = function(e) {
                if ("string" == typeof e) {
                    for (var t = e.length, n = t - 1; n >= 0; n--) {
                        var r = e.charCodeAt(n);
                        r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2)
                    }
                    return t
                }
                if ("number" == typeof e.byteLength) return e.byteLength;
                if ("number" == typeof e.size) return e.size;
                throw new Error("Body Length computation failed for ".concat(e))
            },
            vt = n(3630),
            mt = n.n(vt),
            yt = function(e) {
                var t = e.serviceId,
                    n = e.clientVersion;
                return function() {
                    return be(void 0, void 0, void 0, (function() {
                        var e, r, i, o, a, s, c, u, d;
                        return we(this, (function(l) {
                            return e = "undefined" != typeof window && (null === (i = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === i ? void 0 : i.userAgent) ? mt().parse(window.navigator.userAgent) : void 0, r = [
                                ["aws-sdk-js", n],
                                ["os/".concat((null === (o = null == e ? void 0 : e.os) || void 0 === o ? void 0 : o.name) || "other"), null === (a = null == e ? void 0 : e.os) || void 0 === a ? void 0 : a.version],
                                ["lang/js"],
                                ["md/browser", "".concat(null !== (c = null === (s = null == e ? void 0 : e.browser) || void 0 === s ? void 0 : s.name) && void 0 !== c ? c : "unknown", "_").concat(null !== (d = null === (u = null == e ? void 0 : e.browser) || void 0 === u ? void 0 : u.version) && void 0 !== d ? d : "unknown")]
                            ], t && r.push(["api/".concat(t), n]), [2, r]
                        }))
                    }))
                }
            },
            gt = function(e) {
                return "function" == typeof TextEncoder ? function(e) {
                    return (new TextEncoder).encode(e)
                }(e) : function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                        var i = e.charCodeAt(n);
                        if (i < 128) t.push(i);
                        else if (i < 2048) t.push(i >> 6 | 192, 63 & i | 128);
                        else if (n + 1 < e.length && 55296 == (64512 & i) && 56320 == (64512 & e.charCodeAt(n + 1))) {
                            var o = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n));
                            t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
                        } else t.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                    }
                    return Uint8Array.from(t)
                }(e)
            },
            bt = function(e) {
                return "function" == typeof TextDecoder ? function(e) {
                    return new TextDecoder("utf-8").decode(e)
                }(e) : function(e) {
                    for (var t = "", n = 0, r = e.length; n < r; n++) {
                        var i = e[n];
                        if (i < 128) t += String.fromCharCode(i);
                        else if (192 <= i && i < 224) {
                            var o = e[++n];
                            t += String.fromCharCode((31 & i) << 6 | 63 & o)
                        } else if (240 <= i && i < 365) {
                            var a = "%" + [i, e[++n], e[++n], e[++n]].map((function(e) {
                                return e.toString(16)
                            })).join("%");
                            t += decodeURIComponent(a)
                        } else t += String.fromCharCode((15 & i) << 12 | (63 & e[++n]) << 6 | 63 & e[++n])
                    }
                    return t
                }(e)
            },
            wt = function(e) {
                var t, n = new URL(e),
                    r = n.hostname,
                    i = n.pathname,
                    o = n.port,
                    a = n.protocol,
                    s = n.search;
                return s && (t = function(e) {
                    var t, n, r = {};
                    if (e = e.replace(/^\?/, "")) try {
                        for (var i = _e(e.split("&")), o = i.next(); !o.done; o = i.next()) {
                            var a = Se(o.value.split("="), 2),
                                s = a[0],
                                c = a[1],
                                u = void 0 === c ? null : c;
                            s = decodeURIComponent(s), u && (u = decodeURIComponent(u)), s in r ? Array.isArray(r[s]) ? r[s].push(u) : r[s] = [r[s], u] : r[s] = u
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return r
                }(s)), {
                    hostname: r,
                    port: o ? parseInt(o) : void 0,
                    protocol: a,
                    path: i,
                    query: t
                }
            },
            _t = function() {
                var e = [],
                    t = [],
                    n = new Set,
                    r = function(n) {
                        return e.forEach((function(e) {
                            n.add(e.middleware, ye({}, e))
                        })), t.forEach((function(e) {
                            n.addRelativeTo(e.middleware, ye({}, e))
                        })), n
                    },
                    i = function(e) {
                        var t = [];
                        return e.before.forEach((function(e) {
                            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, xe([], Se(i(e)), !1))
                        })), t.push(e), e.after.reverse().forEach((function(e) {
                            0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push.apply(t, xe([], Se(i(e)), !1))
                        })), t
                    },
                    o = {
                        add: function(t, r) {
                            void 0 === r && (r = {});
                            var i = r.name,
                                o = r.override,
                                a = ye({
                                    step: "initialize",
                                    priority: "normal",
                                    middleware: t
                                }, r);
                            if (i) {
                                if (n.has(i)) {
                                    if (!o) throw new Error("Duplicate middleware name '".concat(i, "'"));
                                    var s = e.findIndex((function(e) {
                                            return e.name === i
                                        })),
                                        c = e[s];
                                    if (c.step !== a.step || c.priority !== a.priority) throw new Error('"'.concat(i, '" middleware with ').concat(c.priority, " priority in ").concat(c.step, " step cannot be ") + "overridden by same-name middleware with ".concat(a.priority, " priority in ").concat(a.step, " step."));
                                    e.splice(s, 1)
                                }
                                n.add(i)
                            }
                            e.push(a)
                        },
                        addRelativeTo: function(e, r) {
                            var i = r.name,
                                o = r.override,
                                a = ye({
                                    middleware: e
                                }, r);
                            if (i) {
                                if (n.has(i)) {
                                    if (!o) throw new Error("Duplicate middleware name '".concat(i, "'"));
                                    var s = t.findIndex((function(e) {
                                            return e.name === i
                                        })),
                                        c = t[s];
                                    if (c.toMiddleware !== a.toMiddleware || c.relation !== a.relation) throw new Error('"'.concat(i, '" middleware ').concat(c.relation, ' "').concat(c.toMiddleware, '" middleware cannot be overridden ') + "by same-name middleware ".concat(a.relation, ' "').concat(a.toMiddleware, '" middleware.'));
                                    t.splice(s, 1)
                                }
                                n.add(i)
                            }
                            t.push(a)
                        },
                        clone: function() {
                            return r(_t())
                        },
                        use: function(e) {
                            e.applyToStack(o)
                        },
                        remove: function(r) {
                            return "string" == typeof r ? function(r) {
                                var i = !1,
                                    o = function(e) {
                                        return !e.name || e.name !== r || (i = !0, n.delete(r), !1)
                                    };
                                return e = e.filter(o), t = t.filter(o), i
                            }(r) : function(r) {
                                var i = !1,
                                    o = function(e) {
                                        return e.middleware !== r || (i = !0, e.name && n.delete(e.name), !1)
                                    };
                                return e = e.filter(o), t = t.filter(o), i
                            }(r)
                        },
                        removeByTag: function(r) {
                            var i = !1,
                                o = function(e) {
                                    var t = e.tags,
                                        o = e.name;
                                    return !t || !t.includes(r) || (o && n.delete(o), i = !0, !1)
                                };
                            return e = e.filter(o), t = t.filter(o), i
                        },
                        concat: function(e) {
                            var t = r(_t());
                            return t.use(e), t
                        },
                        applyToStack: r,
                        resolve: function(n, r) {
                            var o, a;
                            try {
                                for (var s = _e(function() {
                                        var n = [],
                                            r = [],
                                            o = {};
                                        e.forEach((function(e) {
                                            var t = ye(ye({}, e), {
                                                before: [],
                                                after: []
                                            });
                                            t.name && (o[t.name] = t), n.push(t)
                                        })), t.forEach((function(e) {
                                            var t = ye(ye({}, e), {
                                                before: [],
                                                after: []
                                            });
                                            t.name && (o[t.name] = t), r.push(t)
                                        })), r.forEach((function(e) {
                                            if (e.toMiddleware) {
                                                var t = o[e.toMiddleware];
                                                if (void 0 === t) throw new Error("".concat(e.toMiddleware, " is not found when adding ").concat(e.name || "anonymous", " middleware ").concat(e.relation, " ").concat(e.toMiddleware));
                                                "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e)
                                            }
                                        }));
                                        var a, s = (a = n, a.sort((function(e, t) {
                                            return St[t.step] - St[e.step] || xt[t.priority || "normal"] - xt[e.priority || "normal"]
                                        }))).map(i).reduce((function(e, t) {
                                            return e.push.apply(e, xe([], Se(t), !1)), e
                                        }), []);
                                        return s.map((function(e) {
                                            return e.middleware
                                        }))
                                    }().reverse()), c = s.next(); !c.done; c = s.next()) n = (0, c.value)(n, r)
                            } catch (e) {
                                o = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (a = s.return) && a.call(s)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return n
                        }
                    };
                return o
            },
            St = {
                initialize: 5,
                serialize: 4,
                build: 3,
                finalizeRequest: 2,
                deserialize: 1
            },
            xt = {
                high: 3,
                normal: 2,
                low: 1
            },
            Et = function() {
                function e(e) {
                    this.middlewareStack = _t(), this.config = e
                }
                return e.prototype.send = function(e, t, n) {
                    var r = "function" != typeof t ? t : void 0,
                        i = "function" == typeof t ? t : n,
                        o = e.resolveMiddleware(this.middlewareStack, this.config, r);
                    if (!i) return o(e).then((function(e) {
                        return e.output
                    }));
                    o(e).then((function(e) {
                        return i(null, e.output)
                    }), (function(e) {
                        return i(e)
                    })).catch((function() {}))
                }, e.prototype.destroy = function() {
                    this.config.requestHandler.destroy && this.config.requestHandler.destroy()
                }, e
            }(),
            kt = function() {
                this.middlewareStack = _t()
            },
            Lt = "***SensitiveInformation***",
            Ct = function(e) {
                if (null != e) {
                    if ("boolean" == typeof e) return e;
                    throw new TypeError("Expected boolean, got ".concat(typeof e))
                }
            },
            At = function(e) {
                if (null != e) {
                    if ("number" == typeof e) return e;
                    throw new TypeError("Expected number, got ".concat(typeof e))
                }
            },
            Mt = Math.ceil(Math.pow(2, 127) * (2 - Math.pow(2, -23))),
            $t = function(e) {
                var t = At(e);
                if (void 0 !== t && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > Mt) throw new TypeError("Expected 32-bit float, got ".concat(e));
                return t
            },
            Pt = function(e) {
                if (null != e) {
                    if (Number.isInteger(e) && !Number.isNaN(e)) return e;
                    throw new TypeError("Expected integer, got ".concat(typeof e))
                }
            },
            It = function(e) {
                return Rt(e, 32)
            },
            Rt = function(e, t) {
                var n = Pt(e);
                if (void 0 !== n && Ft(n, t) !== n) throw new TypeError("Expected ".concat(t, "-bit integer, got ").concat(e));
                return n
            },
            Ft = function(e, t) {
                switch (t) {
                    case 32:
                        return Int32Array.of(e)[0];
                    case 16:
                        return Int16Array.of(e)[0];
                    case 8:
                        return Int8Array.of(e)[0]
                }
            },
            Tt = function(e, t) {
                if (null == e) {
                    if (t) throw new TypeError("Expected a non-null value for ".concat(t));
                    throw new TypeError("Expected a non-null value")
                }
                return e
            },
            zt = function(e) {
                if (null != e) {
                    if ("object" == typeof e && !Array.isArray(e)) return e;
                    throw new TypeError("Expected object, got ".concat(typeof e))
                }
            },
            Ot = function(e) {
                if (null != e) {
                    if ("string" == typeof e) return e;
                    throw new TypeError("Expected string, got ".concat(typeof e))
                }
            },
            Nt = function(e) {
                if (null != e) {
                    var t = zt(e),
                        n = Object.entries(t).filter((function(e) {
                            var t = Se(e, 2);
                            return null != (t[0], t[1])
                        })).map((function(e) {
                            var t = Se(e, 2),
                                n = t[0];
                            return t[1], n
                        }));
                    if (0 === n.length) throw new TypeError("Unions must have exactly one non-null member");
                    if (n.length > 1) throw new TypeError("Unions must have exactly one non-null member. Keys ".concat(n, " were not null."));
                    return t
                }
            },
            jt = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
            Ut = function(e) {
                var t = e.match(jt);
                if (null === t || t[0].length !== e.length) throw new TypeError("Expected real number, got implicit NaN");
                return parseFloat(e)
            },
            qt = function(e) {
                return "string" == typeof e ? Bt(e) : At(e)
            },
            Bt = function(e) {
                switch (e) {
                    case "NaN":
                        return NaN;
                    case "Infinity":
                        return 1 / 0;
                    case "-Infinity":
                        return -1 / 0;
                    default:
                        throw new Error("Unable to parse float value: ".concat(e))
                }
            },
            Ht = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            Dt = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
            Wt = function(e) {
                if (null != e) {
                    if ("string" != typeof e) throw new TypeError("RFC-3339 date-times must be expressed as strings");
                    var t = Dt.exec(e);
                    if (!t) throw new TypeError("Invalid RFC-3339 date-time value");
                    var n = Se(t, 8),
                        r = (n[0], n[1]),
                        i = n[2],
                        o = n[3],
                        a = n[4],
                        s = n[5],
                        c = n[6],
                        u = n[7],
                        d = function(e) {
                            return function(e) {
                                return Rt(e, 16)
                            }("string" == typeof e ? Ut(e) : e)
                        }(Zt(r)),
                        l = Yt(i, "month", 1, 12),
                        f = Yt(o, "day", 1, 31);
                    return Gt(d, l, f, {
                        hours: a,
                        minutes: s,
                        seconds: c,
                        fractionalMilliseconds: u
                    })
                }
            },
            Gt = function(e, t, n, r) {
                var i = t - 1;
                return Jt(e, i, n), new Date(Date.UTC(e, i, n, Yt(r.hours, "hour", 0, 23), Yt(r.minutes, "minute", 0, 59), Yt(r.seconds, "seconds", 0, 60), Xt(r.fractionalMilliseconds)))
            },
            Vt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Jt = function(e, t, n) {
                var r = Vt[t];
                if (1 === t && Kt(e) && (r = 29), n > r) throw new TypeError("Invalid day for ".concat(Ht[t], " in ").concat(e, ": ").concat(n))
            },
            Kt = function(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            },
            Yt = function(e, t, n, r) {
                var i = function(e) {
                    return function(e) {
                        return Rt(e, 8)
                    }("string" == typeof e ? Ut(e) : e)
                }(Zt(e));
                if (i < n || i > r) throw new TypeError("".concat(t, " must be between ").concat(n, " and ").concat(r, ", inclusive"));
                return i
            },
            Xt = function(e) {
                return null == e ? 0 : 1e3 * function(e) {
                    return $t("string" == typeof e ? Ut(e) : e)
                }("0." + e)
            },
            Zt = function(e) {
                for (var t = 0; t < e.length - 1 && "0" === e.charAt(t);) t++;
                return 0 === t ? e : e.slice(t)
            },
            Qt = function(e) {
                switch (e) {
                    case "standard":
                    case "cross-region":
                        return {
                            retryMode: "standard", connectionTimeout: 3100
                        };
                    case "in-region":
                        return {
                            retryMode: "standard", connectionTimeout: 1100
                        };
                    case "mobile":
                        return {
                            retryMode: "standard", connectionTimeout: 3e4
                        };
                    default:
                        return {}
                }
            },
            en = function(e) {
                function t(n) {
                    var r = e.call(this, n.message) || this;
                    return Object.setPrototypeOf(r, t.prototype), r.name = n.name, r.$fault = n.$fault, r.$metadata = n.$metadata, r
                }
                return me(t, e), t
            }(Error),
            tn = function(e, t) {
                void 0 === t && (t = {}), Object.entries(t).filter((function(e) {
                    return void 0 !== Se(e, 2)[1]
                })).forEach((function(t) {
                    var n = Se(t, 2),
                        r = n[0],
                        i = n[1];
                    null != e[r] && "" !== e[r] || (e[r] = i)
                }));
                var n = e.message || e.Message || "UnknownError";
                return e.message = n, delete e.Message, e
            };

        function nn(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }
        var rn, on = function() {
            var e = Object.getPrototypeOf(this).constructor,
                t = Function.bind.apply(String, xe([null], Se(arguments), !1)),
                n = new t;
            return Object.setPrototypeOf(n, e.prototype), n
        };
        on.prototype = Object.create(String.prototype, {
                constructor: {
                    value: on,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Object.setPrototypeOf(on, String),
            function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                me(t, e), t.prototype.deserializeJSON = function() {
                    return JSON.parse(e.prototype.toString.call(this))
                }, t.prototype.toJSON = function() {
                    return e.prototype.toString.call(this)
                }, t.fromObject = function(e) {
                    return e instanceof t ? e : new t(e instanceof String || "string" == typeof e ? e : JSON.stringify(e))
                }
            }(on), rn = function(e) {
                function t(n, r) {
                    void 0 === r && (r = !0);
                    var i = e.call(this, n) || this;
                    return i.tryNextLink = r, i.name = "ProviderError", Object.setPrototypeOf(i, t.prototype), i
                }
                return me(t, e), t.from = function(e, t) {
                    return void 0 === t && (t = !0), Object.assign(new this(e.message, t), e)
                }, t
            }(Error), me((function e(t, n) {
                void 0 === n && (n = !0);
                var r = rn.call(this, t, n) || this;
                return r.tryNextLink = n, r.name = "CredentialsProviderError", Object.setPrototypeOf(r, e.prototype), r
            }), rn);
        var an = ["in-region", "cross-region", "mobile", "standard", "legacy"],
            sn = function(e) {
                var t, n, r, i, o, a = (void 0 === e ? {} : e).defaultsMode;
                return t = function() {
                        return be(void 0, void 0, void 0, (function() {
                            var e, t;
                            return we(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return "function" != typeof a ? [3, 2] : [4, a()];
                                    case 1:
                                        return t = n.sent(), [3, 3];
                                    case 2:
                                        t = a, n.label = 3;
                                    case 3:
                                        switch (null == (e = t) ? void 0 : e.toLowerCase()) {
                                            case "auto":
                                                return [2, Promise.resolve(cn() ? "mobile" : "standard")];
                                            case "mobile":
                                            case "in-region":
                                            case "cross-region":
                                            case "standard":
                                            case "legacy":
                                                return [2, Promise.resolve(null == e ? void 0 : e.toLocaleLowerCase())];
                                            case void 0:
                                                return [2, Promise.resolve("legacy")];
                                            default:
                                                throw new Error('Invalid parameter for "defaultsMode", expect '.concat(an.join(", "), ", got ").concat(e))
                                        }
                                        return [2]
                                }
                            }))
                        }))
                    }, !1, o = function() {
                        return be(void 0, void 0, void 0, (function() {
                            return we(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        r || (r = t()), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, r];
                                    case 2:
                                        return n = e.sent(), i = !0, !1, [3, 4];
                                    case 3:
                                        return r = void 0, [7];
                                    case 4:
                                        return [2, n]
                                }
                            }))
                        }))
                    },
                    function(e) {
                        return be(void 0, void 0, void 0, (function() {
                            return we(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return i && !(null == e ? void 0 : e.forceRefresh) ? [3, 2] : [4, o()];
                                    case 1:
                                        n = t.sent(), t.label = 2;
                                    case 2:
                                        return [2, n]
                                }
                            }))
                        }))
                    }
            },
            cn = function() {
                var e, t, n = "undefined" != typeof window && (null === (e = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent) ? mt().parse(window.navigator.userAgent) : void 0,
                    r = null === (t = null == n ? void 0 : n.platform) || void 0 === t ? void 0 : t.type;
                return "tablet" === r || "mobile" === r
            },
            un = {
                step: "build",
                tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
                name: "contentLengthMiddleware",
                override: !0
            },
            dn = function(e) {
                return {
                    applyToStack: function(t) {
                        t.add(function(e) {
                            var t = this;
                            return function(n) {
                                return function(r) {
                                    return be(t, void 0, void 0, (function() {
                                        var t, i, o, a, s;
                                        return we(this, (function(c) {
                                            if (t = r.request, Ae.isInstance(t) && (i = t.body, o = t.headers, i && -1 === Object.keys(o).map((function(e) {
                                                    return e.toLowerCase()
                                                })).indexOf("content-length"))) try {
                                                a = e(i), t.headers = ye(ye({}, t.headers), ((s = {})["content-length"] = String(a), s))
                                            } catch (e) {}
                                            return [2, n(ye(ye({}, r), {
                                                request: t
                                            }))]
                                        }))
                                    }))
                                }
                            }
                        }(e.bodyLengthChecker), un)
                    }
                }
            },
            ln = {
                name: "hostHeaderMiddleware",
                step: "build",
                priority: "low",
                tags: ["HOST"],
                override: !0
            },
            fn = function(e) {
                return {
                    applyToStack: function(t) {
                        t.add(function(e) {
                            return function(t) {
                                return function(n) {
                                    return be(void 0, void 0, void 0, (function() {
                                        var r, i;
                                        return we(this, (function(o) {
                                            return Ae.isInstance(n.request) ? (r = n.request, (void 0 === (i = (e.requestHandler.metadata || {}).handlerProtocol) ? "" : i).indexOf("h2") >= 0 && !r.headers[":authority"] ? (delete r.headers.host, r.headers[":authority"] = "") : r.headers.host || (r.headers.host = r.hostname), [2, t(n)]) : [2, t(n)]
                                        }))
                                    }))
                                }
                            }
                        }(e), ln)
                    }
                }
            },
            pn = {
                name: "loggerMiddleware",
                tags: ["LOGGER"],
                step: "initialize",
                override: !0
            },
            hn = function(e) {
                return {
                    applyToStack: function(e) {
                        e.add((function(e, t) {
                            return function(n) {
                                return be(void 0, void 0, void 0, (function() {
                                    var r, i, o, a, s, c, u, d, l;
                                    return we(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return r = t.clientName, i = t.commandName, o = t.inputFilterSensitiveLog, a = t.logger, s = t.outputFilterSensitiveLog, [4, e(n)];
                                            case 1:
                                                return c = f.sent(), a ? ("function" == typeof a.info && (u = c.output, d = u.$metadata, l = ge(u, ["$metadata"]), a.info({
                                                    clientName: r,
                                                    commandName: i,
                                                    input: o(n.input),
                                                    output: s(l),
                                                    metadata: d
                                                })), [2, c]) : [2, c]
                                        }
                                    }))
                                }))
                            }
                        }), pn)
                    }
                }
            };

        function vn(e) {
            return ye(ye({}, e), {
                customUserAgent: "string" == typeof e.customUserAgent ? [
                    [e.customUserAgent]
                ] : e.customUserAgent
            })
        }
        var mn = "user-agent",
            yn = "x-amz-user-agent",
            gn = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
            bn = function(e) {
                var t = Se(e, 2),
                    n = t[0],
                    r = t[1],
                    i = n.indexOf("/"),
                    o = n.substring(0, i),
                    a = n.substring(i + 1);
                return "api" === o && (a = a.toLowerCase()), [o, a, r].filter((function(e) {
                    return e && e.length > 0
                })).map((function(e) {
                    return null == e ? void 0 : e.replace(gn, "_")
                })).join("/")
            },
            wn = {
                name: "getUserAgentMiddleware",
                step: "build",
                priority: "low",
                tags: ["SET_USER_AGENT", "USER_AGENT"],
                override: !0
            },
            _n = function(e) {
                return {
                    applyToStack: function(t) {
                        var n;
                        t.add((n = e, function(e, t) {
                            return function(r) {
                                return be(void 0, void 0, void 0, (function() {
                                    var i, o, a, s, c, u, d, l, f;
                                    return we(this, (function(p) {
                                        switch (p.label) {
                                            case 0:
                                                return i = r.request, Ae.isInstance(i) ? (o = i.headers, a = (null === (l = null == t ? void 0 : t.userAgent) || void 0 === l ? void 0 : l.map(bn)) || [], [4, n.defaultUserAgentProvider()]) : [2, e(r)];
                                            case 1:
                                                return s = p.sent().map(bn), c = (null === (f = null == n ? void 0 : n.customUserAgent) || void 0 === f ? void 0 : f.map(bn)) || [], u = xe(xe(xe([], Se(s), !1), Se(a), !1), Se(c), !1).join(" "), d = xe(xe([], Se(s.filter((function(e) {
                                                    return e.startsWith("aws-sdk-")
                                                }))), !1), Se(c), !1).join(" "), "browser" !== n.runtime ? (d && (o[yn] = o[yn] ? "".concat(o[mn], " ").concat(d) : d), o[mn] = u) : o[yn] = u, [2, e(ye(ye({}, r), {
                                                    request: i
                                                }))]
                                        }
                                    }))
                                }))
                            }
                        }), wn)
                    }
                }
            };
        ! function() {
            function e(e, t) {
                this.active = !0, this.watchIndex = null, this.abortController = new AbortController, this.messageHandlers = [], this.errorHandlers = [], this.delay = 0, this.cb = e, this.opts = Object.assign({
                    cancelOnError: !0,
                    cancelOnNoWatchIndex: !0,
                    noWatchIndexDelay: 2e3,
                    watchIndex: void 0
                }, t), void 0 !== this.opts.watchIndex && null !== this.opts.watchIndex && this.parseWatchResponse(this.opts.watchIndex), this.repeat()
            }
            e.prototype.repeat = function() {
                var e;
                return be(this, void 0, void 0, (function() {
                    var t, n;
                    return we(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.active ? this.delay ? [4, this.wait()] : [3, 2] : [3, 6];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return r.trys.push([2, 4, , 5]), [4, this.cb(this.abortController.signal, null !== (e = this.watchIndex) && void 0 !== e ? e : void 0)];
                            case 3:
                                return t = r.sent(), this.handleMessage(t), this.parseWatchResponse(t.watch), [3, 5];
                            case 4:
                                return (n = r.sent()) instanceof DOMException && "AbortError" == n.name ? [2] : (this.opts.cancelOnError && this.cancel(), this.handleErrors(n), [3, 5]);
                            case 5:
                                return [3, 0];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.wait = function() {
                return be(this, void 0, void 0, (function() {
                    var e;
                    return we(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.delay, this.delay = 0, [4, new Promise((function(t) {
                                    return setTimeout(t, e)
                                }))];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.onMessage = function(e) {
                this.messageHandlers.push(e)
            }, e.prototype.onError = function(e) {
                this.errorHandlers.push(e)
            }, e.prototype.cancel = function() {
                this.abortController.abort(), this.active = !1
            }, e.prototype.start = function() {
                this.active || (this.abortController = new AbortController, this.active = !0, this.repeat())
            }, e.prototype.removeMessageHandler = function(e) {
                var t = this.messageHandlers.indexOf(e); - 1 != t && this.messageHandlers.splice(t, 1)
            }, e.prototype.handleMessage = function(e) {
                this.messageHandlers.forEach((function(t) {
                    return t(e)
                }))
            }, e.prototype.handleErrors = function(e) {
                this.errorHandlers.forEach((function(t) {
                    return t(e)
                })), 0 == this.errorHandlers.length && console.error("Unhandled repeating request error", e)
            }, e.prototype.parseWatchResponse = function(e) {
                (null == e ? void 0 : e.index) ? this.watchIndex = e.index: this.opts.cancelOnNoWatchIndex ? (console.error("Blocking request has no watch response"), this.cancel()) : this.delay = this.opts.noWatchIndexDelay
            }
        }();
        var Sn, xn, En, kn, Ln, Cn, An, Mn, $n, Pn, In, Rn, Fn, Tn, zn, On, Nn, jn, Un, qn, Bn, Hn, Dn, Wn, Gn, Vn, Jn, Kn, Yn = function(e) {
                function t(t) {
                    var n, r, i, o, a, s, c, u, d, l, f, p, h, v, m, y, g, b = this,
                        w = function(e) {
                            var n, r, i, o, a = null !== (n = t.endpoint) && void 0 !== n ? n : null;
                            if (null === a) {
                                try {
                                    a = null !== "https://matchmaker.api.rivet.gg/v1" ? "https://matchmaker.api.rivet.gg/v1" : null
                                } catch (e) {}
                                null === a && (a = "https://matchmaker.api.rivet.gg/v1")
                            }
                            var s = null !== (r = e.token) && void 0 !== r ? r : null;
                            if (null === s) try {
                                s = null !== (o = null !== (i = process.env.RIVET_MATCHMAKER_TOKEN) && void 0 !== i ? i : process.env.RIVET_TOKEN) && void 0 !== o ? o : null
                            } catch (e) {}
                            return Object.assign(Object.assign({}, e), {
                                endpoint: a,
                                token: s
                            })
                        }((m = sn(n = t), y = function() {
                            return m().then(Qt)
                        }, g = function(e) {
                            var t, n, r;
                            return {
                                apiVersion: "2022-6-2",
                                disableHostPrefix: null !== (t = null == e ? void 0 : e.disableHostPrefix) && void 0 !== t && t,
                                logger: null !== (n = null == e ? void 0 : e.logger) && void 0 !== n ? n : {},
                                urlParser: null !== (r = null == e ? void 0 : e.urlParser) && void 0 !== r ? r : wt
                            }
                        }(n), ye(ye(ye({}, g), n), {
                            runtime: "browser",
                            defaultsMode: m,
                            base64Decoder: null !== (r = null == n ? void 0 : n.base64Decoder) && void 0 !== r ? r : Ue,
                            base64Encoder: null !== (i = null == n ? void 0 : n.base64Encoder) && void 0 !== i ? i : qe,
                            bodyLengthChecker: null !== (o = null == n ? void 0 : n.bodyLengthChecker) && void 0 !== o ? o : ht,
                            defaultUserAgentProvider: null !== (a = null == n ? void 0 : n.defaultUserAgentProvider) && void 0 !== a ? a : yt({
                                clientVersion: "0.0.6"
                            }),
                            maxAttempts: null !== (s = null == n ? void 0 : n.maxAttempts) && void 0 !== s ? s : 3,
                            requestHandler: null !== (c = null == n ? void 0 : n.requestHandler) && void 0 !== c ? c : new Ie(y),
                            retryMode: null !== (u = null == n ? void 0 : n.retryMode) && void 0 !== u ? u : function() {
                                return be(void 0, void 0, void 0, (function() {
                                    return we(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, y()];
                                            case 1:
                                                return [2, e.sent().retryMode || Ge]
                                        }
                                    }))
                                }))
                            },
                            sha256: null !== (d = null == n ? void 0 : n.sha256) && void 0 !== d ? d : ke.Sha256,
                            streamCollector: null !== (l = null == n ? void 0 : n.streamCollector) && void 0 !== l ? l : He,
                            useDualstackEndpoint: null !== (f = null == n ? void 0 : n.useDualstackEndpoint) && void 0 !== f ? f : function() {
                                return Promise.resolve(!1)
                            },
                            useFipsEndpoint: null !== (p = null == n ? void 0 : n.useFipsEndpoint) && void 0 !== p ? p : function() {
                                return Promise.resolve(!1)
                            },
                            utf8Decoder: null !== (h = null == n ? void 0 : n.utf8Decoder) && void 0 !== h ? h : gt,
                            utf8Encoder: null !== (v = null == n ? void 0 : n.utf8Encoder) && void 0 !== v ? v : bt
                        })));
                    t.hasOwnProperty("requestHandler") || (w.requestHandler = function(e, t) {
                        var n = this;
                        if (void 0 === e && (e = void 0), void 0 === t && (t = {
                                credentials: "omit"
                            }), "undefined" == typeof window) throw new Error("Using browser handler middleware in a non-browser environment");
                        return {
                            handle: function(r, i) {
                                return be(n, void 0, void 0, (function() {
                                    var n, o, a, s, c, u, d, l;
                                    return we(this, (function(f) {
                                        switch (f.label) {
                                            case 0:
                                                return "string" != typeof e ? [3, 1] : (n = e, [3, 4]);
                                            case 1:
                                                return "function" != typeof e ? [3, 4] : (o = e()) instanceof Promise ? [4, o] : [3, 3];
                                            case 2:
                                                return n = f.sent(), [3, 4];
                                            case 3:
                                                n = o, f.label = 4;
                                            case 4:
                                                return r.headers = Object.fromEntries(Object.entries(r.headers).filter((function(e) {
                                                    var t = Se(e, 1)[0];
                                                    return !t.startsWith("amz-") && !t.startsWith("x-amz-")
                                                }))), e && (r.headers.Authorization = "Bearer ".concat(n)), r.body || ("GET" == r.method || "HEAD" == r.method ? r.body = void 0 : "POST" == r.method && (r.body = "{}")), a = r.query ? Object.entries(r.query) : [], s = a.map((function(e) {
                                                    var t = Se(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return "".concat(n, "=").concat(encodeURIComponent(r instanceof Array ? r.join(",") : r))
                                                })).join("&"), c = "".concat(r.protocol, "//").concat(r.hostname).concat(r.port ? ":".concat(r.port) : "").concat(r.path).concat(s ? "?".concat(s) : ""), [4, window.fetch(c, Object.assign(r, t, {
                                                    signal: i.abortSignal
                                                }))];
                                            case 5:
                                                return u = f.sent(), d = {}, l = {
                                                    statusCode: u.status
                                                }, [4, u.clone().blob()];
                                            case 6:
                                                return [2, (d.response = (l.body = f.sent(), l.headers = Array.from(u.headers.entries()).reduce((function(e, t) {
                                                    var n = Se(t, 2),
                                                        r = n[0],
                                                        i = n[1];
                                                    return e[r] = i, e
                                                }), {}), l), d)]
                                        }
                                    }))
                                }))
                            }
                        }
                    }(w.token));
                    var _ = Ce(w),
                        S = vn(lt(_));
                    return (b = e.call(this, S) || this).config = S, b.middlewareStack.use(pt(b.config)), b.middlewareStack.use(dn(b.config)), b.middlewareStack.use(fn(b.config)), b.middlewareStack.use(hn(b.config)), b.middlewareStack.use(_n(b.config)), b
                }
                return me(t, e), t.prototype.destroy = function() {
                    e.prototype.destroy.call(this)
                }, t
            }(Et),
            Xn = function(e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }
                return me(t, e), t
            }(en);
        ! function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Sn || (Sn = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.hcaptcha ? t.hcaptcha(e.hcaptcha) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.hcaptcha ? {
                    hcaptcha: Sn.filterSensitiveLog(e.hcaptcha)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(xn || (xn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.captcha && {
                    captcha: xn.filterSensitiveLog(e.captcha)
                })
            }
        }(En || (En = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.token && {
                    token: Lt
                })
            }
        }(kn || (kn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ln || (Ln = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Cn || (Cn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(An || (An = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.player && {
                    player: kn.filterSensitiveLog(e.player)
                })
            }
        }(Mn || (Mn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.lobby && {
                    lobby: Mn.filterSensitiveLog(e.lobby)
                })
            }
        }($n || ($n = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.captcha && {
                    captcha: xn.filterSensitiveLog(e.captcha)
                })
            }
        }(Pn || (Pn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.lobby && {
                    lobby: Mn.filterSensitiveLog(e.lobby)
                })
            }
        }(In || (In = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Rn || (Rn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Fn || (Fn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Tn || (Tn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(zn || (zn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(On || (On = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Nn || (Nn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(jn || (jn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Un || (Un = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(qn || (qn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Bn || (Bn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Hn || (Hn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Dn || (Dn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Wn || (Wn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.playerToken && {
                    playerToken: Lt
                })
            }
        }(Gn || (Gn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Vn || (Vn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.playerToken && {
                    playerToken: Lt
                })
            }
        }(Jn || (Jn = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Kn || (Kn = {}));
        var Zn = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "BadRequestError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "BadRequestError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            Qn = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "ForbiddenError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "ForbiddenError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            er = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "InternalError",
                        $fault: "server"
                    }, n)) || this;
                    return r.name = "InternalError", r.$fault = "server", r.$retryable = {}, Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            tr = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "NotFoundError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "NotFoundError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            nr = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "RateLimitError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "RateLimitError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            rr = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "UnauthorizedError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "UnauthorizedError", r.$fault = "client", r.$retryable = {}, Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(Xn),
            ir = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            or = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            ar = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            sr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            cr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            ur = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            dr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            lr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Rr(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = Fr(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, fr(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, pr(n, t)];
                            case 6:
                                return [4, hr(n, t)];
                            case 8:
                                return [4, vr(n, t)];
                            case 10:
                                return [4, mr(n, t)];
                            case 12:
                                return [4, yr(n, t)];
                            case 14:
                                throw a = n.body, i = new Xn({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Pr(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            fr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new Zn(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            pr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new Qn(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            hr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new er(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            vr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new tr(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            mr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new nr(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            yr = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = xr(r.metadata, t)), i = new rr(ye({
                            $metadata: Pr(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            gr = function(e, t) {
                return xn.visit(e, {
                    hcaptcha: function(e) {
                        return {
                            hcaptcha: br(e, t)
                        }
                    },
                    _: function(e, t) {
                        return {
                            name: t
                        }
                    }
                })
            },
            br = function(e, t) {
                return ye({}, void 0 !== e.clientResponse && null !== e.clientResponse && {
                    client_response: e.clientResponse
                })
            },
            wr = function(e, t) {
                return e.filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : e
                }))
            },
            _r = function(e, t) {
                return e.filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : e
                }))
            },
            Sr = function(e, t) {
                var n = (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : function(e, t) {
                        return {
                            datacenterCoord: void 0 !== e.datacenter_coord && null !== e.datacenter_coord ? Er(e.datacenter_coord, t) : void 0,
                            datacenterDistanceFromClient: void 0 !== e.datacenter_distance_from_client && null !== e.datacenter_distance_from_client ? kr(e.datacenter_distance_from_client, t) : void 0,
                            providerDisplayName: Ot(e.provider_display_name),
                            regionDisplayName: Ot(e.region_display_name),
                            regionId: Ot(e.region_id)
                        }
                    }(e, t)
                }));
                return n
            },
            xr = function(e, t) {
                return e
            },
            Er = function(e, t) {
                return {
                    latitude: qt(e.latitude),
                    longitude: qt(e.longitude)
                }
            },
            kr = function(e, t) {
                return {
                    kilometers: qt(e.kilometers),
                    miles: qt(e.miles)
                }
            },
            Lr = function(e, t) {
                return {
                    lobbyId: Ot(e.lobby_id),
                    player: void 0 !== e.player && null !== e.player ? Cr(e.player, t) : void 0,
                    ports: void 0 !== e.ports && null !== e.ports ? Mr(e.ports, t) : void 0,
                    region: void 0 !== e.region && null !== e.region ? $r(e.region, t) : void 0
                }
            },
            Cr = function(e, t) {
                return {
                    token: Ot(e.token)
                }
            },
            Ar = function(e, t) {
                return {
                    max: It(e.max),
                    min: It(e.min)
                }
            },
            Mr = function(e, t) {
                return Object.entries(e).reduce((function(e, t) {
                    var n, r = Se(t, 2),
                        i = r[0],
                        o = r[1];
                    return null === o ? e : ye(ye({}, e), ((n = {})[i] = function(e, t) {
                        return {
                            host: Ot(e.host),
                            hostname: Ot(e.hostname),
                            isTls: Ct(e.is_tls),
                            port: It(e.port),
                            portRange: void 0 !== e.port_range && null !== e.port_range ? Ar(e.port_range) : void 0
                        }
                    }(o), n))
                }), {})
            },
            $r = function(e, t) {
                return {
                    displayName: Ot(e.display_name),
                    regionId: Ot(e.region_id)
                }
            },
            Pr = function(e) {
                var t;
                return {
                    httpStatusCode: e.statusCode,
                    requestId: null !== (t = e.headers["x-amzn-requestid"]) && void 0 !== t ? t : e.headers["x-amzn-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }
            },
            Ir = function(e, t) {
                return void 0 === e && (e = new Uint8Array), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array)
            },
            Rr = function(e, t) {
                return function(e, t) {
                    return Ir(e, t).then((function(e) {
                        return t.utf8Encoder(e)
                    }))
                }(e, t).then((function(e) {
                    return e.length ? JSON.parse(e) : {}
                }))
            },
            Fr = function(e, t) {
                var n, r = function(e) {
                        var t = e;
                        return t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t
                    },
                    i = (n = e.headers, "x-amzn-errortype", Object.keys(n).find((function(e) {
                        return e.toLowerCase() === "x-amzn-errortype".toLowerCase()
                    })));
                return void 0 !== i ? r(e.headers[i]) : void 0 !== t.code ? r(t.code) : void 0 !== t.__type ? r(t.__type) : ""
            },
            Tr = {
                name: "deserializerMiddleware",
                step: "deserialize",
                tags: ["DESERIALIZER"],
                override: !0
            },
            zr = {
                name: "serializerMiddleware",
                step: "serialize",
                tags: ["SERIALIZER"],
                override: !0
            };

        function Or(e, t, n) {
            return {
                applyToStack: function(r) {
                    r.add(function(e, t) {
                        return function(n, r) {
                            return function(r) {
                                return be(void 0, void 0, void 0, (function() {
                                    var i, o, a;
                                    return we(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, n(r)];
                                            case 1:
                                                i = s.sent().response, s.label = 2;
                                            case 2:
                                                return s.trys.push([2, 4, , 5]), [4, t(i, e)];
                                            case 3:
                                                return o = s.sent(), [2, {
                                                    response: i,
                                                    output: o
                                                }];
                                            case 4:
                                                throw a = s.sent(), Object.defineProperty(a, "$response", {
                                                    value: i
                                                }), a;
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        }
                    }(e, n), Tr), r.add(function(e, t) {
                        return function(n, r) {
                            return function(r) {
                                return be(void 0, void 0, void 0, (function() {
                                    var i;
                                    return we(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, t(r.input, e)];
                                            case 1:
                                                return i = o.sent(), [2, n(ye(ye({}, r), {
                                                    request: i
                                                }))]
                                        }
                                    }))
                                }))
                            }
                        }
                    }(e, t), zr)
                }
            }
        }
        var Nr, jr, Ur, qr, Br, Hr, Dr, Wr, Gr, Vr, Jr, Kr, Yr, Xr, Zr, Qr, ei, ti, ni, ri, ii, oi, ai, si, ci, ui, di, li, fi, pi, hi, vi, mi, yi, gi, bi, wi, _i, Si, xi, Ei, ki, Li, Ci, Ai, Mi, $i, Pi, Ii, Ri, Fi, Ti, zi, Oi, Ni, ji, Ui, qi, Bi, Hi, Di, Wi, Gi, Vi, Ji, Ki, Yi, Xi, Zi, Qi, eo, to, no, ro, io, oo, ao, so, co, uo, lo, fo, po, ho, vo, mo, yo, go, bo, wo, _o, So, xo, Eo, ko, Lo, Co, Ao, Mo, $o, Po, Io, Ro, Fo, To, zo, Oo, No, jo, Uo, qo, Bo, Ho, Do, Wo, Go, Vo, Jo, Ko, Yo, Xo, Zo, Qo, ea, ta, na, ra, ia, oa, aa, sa = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "FindLobbyCommand",
                            inputFilterSensitiveLog: En.filterSensitiveLog,
                            outputFilterSensitiveLog: $n.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = ye({
                                            "content-type": "application/json"
                                        }, !(null == (f = e.origin) || "" === f || Object.getOwnPropertyNames(f).includes("length") && 0 == f.length || Object.getOwnPropertyNames(f).includes("size") && 0 == f.size) && {
                                            origin: e.origin
                                        }), u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/lobbies/find", d = JSON.stringify(ye(ye(ye(ye({}, void 0 !== e.captcha && null !== e.captcha && {
                                            captcha: gr(e.captcha, t)
                                        }), void 0 !== e.gameModes && null !== e.gameModes && {
                                            game_modes: wr(e.gameModes)
                                        }), void 0 !== e.preventAutoCreateLobby && null !== e.preventAutoCreateLobby && {
                                            prevent_auto_create_lobby: e.preventAutoCreateLobby
                                        }), void 0 !== e.regions && null !== e.regions && {
                                            regions: _r(e.regions)
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                                var f
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ir(e, t)] : (n = {
                                            $metadata: Pr(e),
                                            lobby: void 0
                                        }, i = Tt, o = zt, [4, Rr(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).lobby && null !== r.lobby && (n.lobby = Lr(r.lobby, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            ca = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "JoinLobbyCommand",
                            inputFilterSensitiveLog: Pn.filterSensitiveLog,
                            outputFilterSensitiveLog: In.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/lobbies/join", d = JSON.stringify(ye(ye({}, void 0 !== e.captcha && null !== e.captcha && {
                                            captcha: gr(e.captcha, t)
                                        }), void 0 !== e.lobbyId && null !== e.lobbyId && {
                                            lobby_id: e.lobbyId
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, or(e, t)] : (n = {
                                            $metadata: Pr(e),
                                            lobby: void 0
                                        }, i = Tt, o = zt, [4, Rr(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).lobby && null !== r.lobby && (n.lobby = Lr(r.lobby, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            ua = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "ListLobbiesCommand",
                            inputFilterSensitiveLog: Rn.filterSensitiveLog,
                            outputFilterSensitiveLog: jn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o, a, s, c;
                            return we(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return e = u.sent(), n = e.hostname, r = e.protocol, i = void 0 === r ? "https" : r, o = e.port, a = e.path, s = {
                                            "content-type": "application/json"
                                        }, c = "".concat((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a || "") + "/lobbies/list", [2, new Ae({
                                            protocol: i,
                                            hostname: n,
                                            port: o,
                                            method: "GET",
                                            headers: s,
                                            path: c,
                                            body: ""
                                        })]
                                }
                            }))
                        }))
                    }(0, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ar(e, t)] : (n = {
                                            $metadata: Pr(e),
                                            gameModes: void 0,
                                            lobbies: void 0,
                                            regions: void 0
                                        }, i = Tt, o = zt, [4, Rr(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).game_modes && null !== r.game_modes && (n.gameModes = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : function(e, t) {
                                                    return {
                                                        gameModeId: Ot(e.game_mode_id)
                                                    }
                                                }(e)
                                            }))
                                        }(r.game_modes)), void 0 !== r.lobbies && null !== r.lobbies && (n.lobbies = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : function(e, t) {
                                                    return {
                                                        gameModeId: Ot(e.game_mode_id),
                                                        lobbyId: Ot(e.lobby_id),
                                                        maxPlayersDirect: It(e.max_players_direct),
                                                        maxPlayersNormal: It(e.max_players_normal),
                                                        maxPlayersParty: It(e.max_players_party),
                                                        regionId: Ot(e.region_id),
                                                        totalPlayerCount: It(e.total_player_count)
                                                    }
                                                }(e)
                                            }))
                                        }(r.lobbies)), void 0 !== r.regions && null !== r.regions && (n.regions = Sr(r.regions, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            da = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "ListRegionsCommand",
                            inputFilterSensitiveLog: Un.filterSensitiveLog,
                            outputFilterSensitiveLog: qn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o, a, s, c;
                            return we(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return e = u.sent(), n = e.hostname, r = e.protocol, i = void 0 === r ? "https" : r, o = e.port, a = e.path, s = {
                                            "content-type": "application/json"
                                        }, c = "".concat((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a || "") + "/regions", [2, new Ae({
                                            protocol: i,
                                            hostname: n,
                                            port: o,
                                            method: "GET",
                                            headers: s,
                                            path: c,
                                            body: ""
                                        })]
                                }
                            }))
                        }))
                    }(0, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, sr(e, t)] : (n = {
                                            $metadata: Pr(e),
                                            regions: void 0
                                        }, i = Tt, o = zt, [4, Rr(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).regions && null !== r.regions && (n.regions = Sr(r.regions, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            la = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "LobbyReadyCommand",
                            inputFilterSensitiveLog: Bn.filterSensitiveLog,
                            outputFilterSensitiveLog: Hn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o, a, s, c;
                            return we(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return e = u.sent(), n = e.hostname, r = e.protocol, i = void 0 === r ? "https" : r, o = e.port, a = e.path, s = {
                                            "content-type": "application/json"
                                        }, c = "".concat((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a || "") + "/lobbies/ready", [2, new Ae({
                                            protocol: i,
                                            hostname: n,
                                            port: o,
                                            method: "POST",
                                            headers: s,
                                            path: c,
                                            body: ""
                                        })]
                                }
                            }))
                        }))
                    }(0, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, cr(e, t)] : (n = {
                                            $metadata: Pr(e)
                                        }, [4, Ir(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            fa = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "PlayerConnectedCommand",
                            inputFilterSensitiveLog: Gn.filterSensitiveLog,
                            outputFilterSensitiveLog: Vn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/players/connected", d = JSON.stringify(ye({}, void 0 !== e.playerToken && null !== e.playerToken && {
                                            player_token: e.playerToken
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ur(e, t)] : (n = {
                                            $metadata: Pr(e)
                                        }, [4, Ir(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            pa = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "PlayerDisconnectedCommand",
                            inputFilterSensitiveLog: Jn.filterSensitiveLog,
                            outputFilterSensitiveLog: Kn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/players/disconnected", d = JSON.stringify(ye({}, void 0 !== e.playerToken && null !== e.playerToken && {
                                            player_token: e.playerToken
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, dr(e, t)] : (n = {
                                            $metadata: Pr(e)
                                        }, [4, Ir(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            ha = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "MatchmakerServiceClient",
                            commandName: "SetLobbyClosedCommand",
                            inputFilterSensitiveLog: Dn.filterSensitiveLog,
                            outputFilterSensitiveLog: Wn.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/lobbies/closed", d = JSON.stringify(ye({}, void 0 !== e.isClosed && null !== e.isClosed && {
                                            is_closed: e.isClosed
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "PUT",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, lr(e, t)] : (n = {
                                            $metadata: Pr(e)
                                        }, [4, Ir(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            va = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return me(t, e), t.prototype.findLobby = function(e, t, n) {
                    var r = new sa(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.joinLobby = function(e, t, n) {
                    var r = new ca(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listLobbies = function(e, t, n) {
                    var r = new ua(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listRegions = function(e, t, n) {
                    var r = new da(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.lobbyReady = function(e, t, n) {
                    var r = new la(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.playerConnected = function(e, t, n) {
                    var r = new fa(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.playerDisconnected = function(e, t, n) {
                    var r = new pa(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.setLobbyClosed = function(e, t, n) {
                    var r = new ha(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t
            }(Yn),
            ma = function(e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return Object.setPrototypeOf(r, t.prototype), r
                }
                return me(t, e), t
            }(en);
        ! function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Nr || (Nr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(jr || (jr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ur || (Ur = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(qr || (qr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Br || (Br = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Hr || (Hr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Dr || (Dr = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.idle ? t.idle(e.idle) : void 0 !== e.matchmakerFindingLobby ? t.matchmakerFindingLobby(e.matchmakerFindingLobby) : void 0 !== e.matchmakerLobby ? t.matchmakerLobby(e.matchmakerLobby) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.idle ? {
                    idle: qr.filterSensitiveLog(e.idle)
                } : void 0 !== e.matchmakerFindingLobby ? {
                    matchmakerFindingLobby: Br.filterSensitiveLog(e.matchmakerFindingLobby)
                } : void 0 !== e.matchmakerLobby ? {
                    matchmakerLobby: Dr.filterSensitiveLog(e.matchmakerLobby)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(Wr || (Wr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Gr || (Gr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.activity && {
                    activity: Wr.filterSensitiveLog(e.activity)
                })
            }
        }(Vr || (Vr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Jr || (Jr = {})),
        function(e) {
            e.AWAY = "away", e.OFFLINE = "offline", e.ONLINE = "online"
        }(Kr || (Kr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Yr || (Yr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.party && {
                    party: Vr.filterSensitiveLog(e.party)
                })
            }
        }(Xr || (Xr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Zr || (Zr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Qr || (Qr = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ei || (ei = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ti || (ti = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.idle ? t.idle(e.idle) : void 0 !== e.matchmakerPending ? t.matchmakerPending(e.matchmakerPending) : void 0 !== e.matchmakerFindingLobby ? t.matchmakerFindingLobby(e.matchmakerFindingLobby) : void 0 !== e.matchmakerLobby ? t.matchmakerLobby(e.matchmakerLobby) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.idle ? {
                    idle: Zr.filterSensitiveLog(e.idle)
                } : void 0 !== e.matchmakerPending ? {
                    matchmakerPending: ti.filterSensitiveLog(e.matchmakerPending)
                } : void 0 !== e.matchmakerFindingLobby ? {
                    matchmakerFindingLobby: Qr.filterSensitiveLog(e.matchmakerFindingLobby)
                } : void 0 !== e.matchmakerLobby ? {
                    matchmakerLobby: ei.filterSensitiveLog(e.matchmakerLobby)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(ni || (ni = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.identity && {
                    identity: Xr.filterSensitiveLog(e.identity)
                }), e.state && {
                    state: ni.filterSensitiveLog(e.state)
                })
            }
        }(ri || (ri = {})),
        function(e) {
            e.JOIN = "join", e.NONE = "none", e.VIEW = "view"
        }(ii || (ii = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(oi || (oi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.activity && {
                    activity: Wr.filterSensitiveLog(e.activity)
                }), e.members && {
                    members: e.members.map((function(e) {
                        return ri.filterSensitiveLog(e)
                    }))
                })
            }
        }(ai || (ai = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(si || (si = {})),
        function(e) {
            e.CLOSED = "closed", e.OPEN = "open"
        }(ci || (ci = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ui || (ui = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(di || (di = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                }), e.parties && {
                    parties: e.parties.map((function(e) {
                        return ai.filterSensitiveLog(e)
                    }))
                }), e.suggestedPlayers && {
                    suggestedPlayers: e.suggestedPlayers.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(li || (li = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identityLinkToken && {
                    identityLinkToken: Lt
                })
            }
        }(fi || (fi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(pi || (pi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identityLinkToken && {
                    identityLinkToken: Lt
                })
            }
        }(hi || (hi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(vi || (vi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(mi || (mi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(yi || (yi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(gi || (gi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(bi || (bi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(wi || (wi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xr.filterSensitiveLog(e.identity)
                })
            }
        }(_i || (_i = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xr.filterSensitiveLog(e.identity)
                })
            }
        }(Si || (Si = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(xi || (xi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ei || (Ei = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye(ye({}, e), e.sender && {
                    sender: Xr.filterSensitiveLog(e.sender)
                }), e.party && {
                    party: Vr.filterSensitiveLog(e.party)
                }), e.inviteToken && {
                    inviteToken: Lt
                })
            }
        }(ki || (ki = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xr.filterSensitiveLog(e.identity)
                })
            }
        }(Li || (Li = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.sender && {
                    sender: Xr.filterSensitiveLog(e.sender)
                })
            }
        }(Ci || (Ci = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xr.filterSensitiveLog(e.identity)
                })
            }
        }(Ai || (Ai = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.sender && {
                    sender: Xr.filterSensitiveLog(e.sender)
                })
            }
        }(Mi || (Mi = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.text ? t.text(e.text) : void 0 !== e.chatCreate ? t.chatCreate(e.chatCreate) : void 0 !== e.identityFollow ? t.identityFollow(e.identityFollow) : void 0 !== e.groupJoin ? t.groupJoin(e.groupJoin) : void 0 !== e.groupLeave ? t.groupLeave(e.groupLeave) : void 0 !== e.partyInvite ? t.partyInvite(e.partyInvite) : void 0 !== e.partyJoinRequest ? t.partyJoinRequest(e.partyJoinRequest) : void 0 !== e.partyJoin ? t.partyJoin(e.partyJoin) : void 0 !== e.partyLeave ? t.partyLeave(e.partyLeave) : void 0 !== e.partyActivityChange ? t.partyActivityChange(e.partyActivityChange) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.text ? {
                    text: Mi.filterSensitiveLog(e.text)
                } : void 0 !== e.chatCreate ? {
                    chatCreate: wi.filterSensitiveLog(e.chatCreate)
                } : void 0 !== e.identityFollow ? {
                    identityFollow: xi.filterSensitiveLog(e.identityFollow)
                } : void 0 !== e.groupJoin ? {
                    groupJoin: _i.filterSensitiveLog(e.groupJoin)
                } : void 0 !== e.groupLeave ? {
                    groupLeave: Si.filterSensitiveLog(e.groupLeave)
                } : void 0 !== e.partyInvite ? {
                    partyInvite: ki.filterSensitiveLog(e.partyInvite)
                } : void 0 !== e.partyJoinRequest ? {
                    partyJoinRequest: Ci.filterSensitiveLog(e.partyJoinRequest)
                } : void 0 !== e.partyJoin ? {
                    partyJoin: Li.filterSensitiveLog(e.partyJoin)
                } : void 0 !== e.partyLeave ? {
                    partyLeave: Ai.filterSensitiveLog(e.partyLeave)
                } : void 0 !== e.partyActivityChange ? {
                    partyActivityChange: Ei.filterSensitiveLog(e.partyActivityChange)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }($i || ($i = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.body && {
                    body: $i.filterSensitiveLog(e.body)
                })
            }
        }(Pi || (Pi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.identityA && {
                    identityA: Xr.filterSensitiveLog(e.identityA)
                }), e.identityB && {
                    identityB: Xr.filterSensitiveLog(e.identityB)
                })
            }
        }(Ii || (Ii = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ri || (Ri = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Fi || (Fi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.party && {
                    party: Vr.filterSensitiveLog(e.party)
                })
            }
        }(Ti || (Ti = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.group ? t.group(e.group) : void 0 !== e.party ? t.party(e.party) : void 0 !== e.direct ? t.direct(e.direct) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.group ? {
                    group: Fi.filterSensitiveLog(e.group)
                } : void 0 !== e.party ? {
                    party: Ti.filterSensitiveLog(e.party)
                } : void 0 !== e.direct ? {
                    direct: Ii.filterSensitiveLog(e.direct)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(zi || (zi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.topic && {
                    topic: zi.filterSensitiveLog(e.topic)
                }), e.tailMessage && {
                    tailMessage: Pi.filterSensitiveLog(e.tailMessage)
                })
            }
        }(Oi || (Oi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.thread && {
                    thread: Oi.filterSensitiveLog(e.thread)
                })
            }
        }(Ni || (Ni = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ji || (ji = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ui || (Ui = {})),
        function(e) {
            e.ACCEPTED = "accepted", e.INACTIVE = "inactive", e.PENDING = "pending"
        }(qi || (qi = {})),
        function(e) {
            e.AVERAGE = "average", e.MAX = "max", e.MIN = "min", e.SUM = "sum"
        }(Bi || (Bi = {})),
        function(e) {
            e.DURACTION_SECOND = "duration_second", e.DURATION_HUNDREDTH_SECOND = "duration_hundredth_second", e.DURATION_MINUTE = "duration_minute", e.FLOAT_1 = "float_1", e.FLOAT_2 = "float_2", e.FLOAT_3 = "float_3", e.INTEGER = "integer"
        }(Hi || (Hi = {})),
        function(e) {
            e.ASC = "asc", e.DESC = "desc"
        }(Di || (Di = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Wi || (Wi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Gi || (Gi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Vi || (Vi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ji || (Ji = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.email && {
                    email: Lt
                })
            }
        }(Ki || (Ki = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.email ? t.email(e.email) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.email ? {
                    email: Ki.filterSensitiveLog(e.email)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(Yi || (Yi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.party && {
                    party: ai.filterSensitiveLog(e.party)
                }), e.linkedAccounts && {
                    linkedAccounts: Lt
                })
            }
        }(Xi || (Xi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xi.filterSensitiveLog(e.identity)
                })
            }
        }(Zi || (Zi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.token && {
                    token: Lt
                })
            }
        }(Qi || (Qi = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(eo || (eo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(to || (to = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(no || (no = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.player && {
                    player: Qi.filterSensitiveLog(e.player)
                })
            }
        }(ro || (ro = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.lobby && {
                    lobby: ro.filterSensitiveLog(e.lobby)
                })
            }
        }(io || (io = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.party && {
                    party: ai.filterSensitiveLog(e.party)
                })
            }
        }(oo || (oo = {})),
        function(e) {
            e.visit = function(e, t) {
                return void 0 !== e.chatMessage ? t.chatMessage(e.chatMessage) : void 0 !== e.chatRead ? t.chatRead(e.chatRead) : void 0 !== e.partyUpdate ? t.partyUpdate(e.partyUpdate) : void 0 !== e.identityUpdate ? t.identityUpdate(e.identityUpdate) : void 0 !== e.matchmakerLobbyJoin ? t.matchmakerLobbyJoin(e.matchmakerLobbyJoin) : void 0 !== e.chatThreadRemove ? t.chatThreadRemove(e.chatThreadRemove) : t._(e.$unknown[0], e.$unknown[1])
            }, e.filterSensitiveLog = function(e) {
                var t;
                return void 0 !== e.chatMessage ? {
                    chatMessage: Ni.filterSensitiveLog(e.chatMessage)
                } : void 0 !== e.chatRead ? {
                    chatRead: ji.filterSensitiveLog(e.chatRead)
                } : void 0 !== e.partyUpdate ? {
                    partyUpdate: oo.filterSensitiveLog(e.partyUpdate)
                } : void 0 !== e.identityUpdate ? {
                    identityUpdate: Zi.filterSensitiveLog(e.identityUpdate)
                } : void 0 !== e.matchmakerLobbyJoin ? {
                    matchmakerLobbyJoin: io.filterSensitiveLog(e.matchmakerLobbyJoin)
                } : void 0 !== e.chatThreadRemove ? {
                    chatThreadRemove: Ui.filterSensitiveLog(e.chatThreadRemove)
                } : void 0 !== e.$unknown ? ((t = {})[e.$unknown[0]] = "UNKNOWN", t) : void 0
            }
        }(ao || (ao = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(so || (so = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.kind && {
                    kind: ao.filterSensitiveLog(e.kind)
                })
            }
        }(co || (co = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.events && {
                    events: e.events.map((function(e) {
                        return co.filterSensitiveLog(e)
                    }))
                })
            }
        }(uo || (uo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(lo || (lo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(fo || (fo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identityLinkToken && {
                    identityLinkToken: Lt
                })
            }
        }(po || (po = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.identityToken && {
                    identityToken: Lt
                }), e.identity && {
                    identity: Xi.filterSensitiveLog(e.identity)
                })
            }
        }(ho || (ho = {})),
        function(e) {
            e.CANCELLED = "cancelled", e.COMPLETE = "complete", e.INCOMPLETE = "incomplete"
        }(vo || (vo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.currentIdentity && {
                    currentIdentity: Xr.filterSensitiveLog(e.currentIdentity)
                }), e.newIdentity && {
                    newIdentity: ho.filterSensitiveLog(e.newIdentity)
                })
            }
        }(mo || (mo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(yo || (yo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(go || (go = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(bo || (bo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xi.filterSensitiveLog(e.identity)
                })
            }
        }(wo || (wo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(_o || (_o = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identity && {
                    identity: Xi.filterSensitiveLog(e.identity)
                })
            }
        }(So || (So = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(xo || (xo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.party && {
                    party: Vr.filterSensitiveLog(e.party)
                })
            }
        }(Eo || (Eo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Eo.filterSensitiveLog(e)
                    }))
                })
            }
        }(ko || (ko = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Lo || (Lo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(Co || (Co = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ao || (Ao = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(Mo || (Mo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }($o || ($o = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(Po || (Po = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Io || (Io = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(Ro || (Ro = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Fo || (Fo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(To || (To = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(zo || (zo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Oo || (Oo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(No || (No = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(jo || (jo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Uo || (Uo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(qo || (qo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.identities && {
                    identities: e.identities.map((function(e) {
                        return Xr.filterSensitiveLog(e)
                    }))
                })
            }
        }(Bo || (Bo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ho || (Ho = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Do || (Do = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Wo || (Wo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye({}, e), e.existingIdentityToken && {
                    existingIdentityToken: Lt
                })
            }
        }(Go || (Go = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye(ye(ye({}, e), e.identityToken && {
                    identityToken: Lt
                }), e.identity && {
                    identity: Xi.filterSensitiveLog(e.identity)
                })
            }
        }(Vo || (Vo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Jo || (Jo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Ko || (Ko = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Yo || (Yo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Xo || (Xo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Zo || (Zo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(Qo || (Qo = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ea || (ea = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ta || (ta = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(na || (na = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ra || (ra = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(ia || (ia = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(oa || (oa = {})),
        function(e) {
            e.filterSensitiveLog = function(e) {
                return ye({}, e)
            }
        }(aa || (aa = {}));
        var ya = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "BadRequestError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "BadRequestError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            ga = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "ForbiddenError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "ForbiddenError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            ba = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "InternalError",
                        $fault: "server"
                    }, n)) || this;
                    return r.name = "InternalError", r.$fault = "server", r.$retryable = {}, Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            wa = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "NotFoundError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "NotFoundError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            _a = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "RateLimitError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "RateLimitError", r.$fault = "client", Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            Sa = function(e) {
                function t(n) {
                    var r = e.call(this, ye({
                        name: "UnauthorizedError",
                        $fault: "client"
                    }, n)) || this;
                    return r.name = "UnauthorizedError", r.$fault = "client", r.$retryable = {}, Object.setPrototypeOf(r, t.prototype), r.code = n.code, r.metadata = n.metadata, r
                }
                return me(t, e), t
            }(ma),
            xa = function() {
                function e(e, t) {
                    this.active = !0, this.watchIndex = null, this.abortController = new AbortController, this.messageHandlers = [], this.errorHandlers = [], this.delay = 0, this.cb = e, this.opts = Object.assign({
                        cancelOnError: !0,
                        cancelOnNoWatchIndex: !0,
                        noWatchIndexDelay: 2e3,
                        watchIndex: void 0,
                        pauseOnCreation: !1
                    }, t), void 0 !== this.opts.watchIndex && null !== this.opts.watchIndex && this.parseWatchResponse(this.opts.watchIndex), this.opts.pauseOnCreation || this.repeat()
                }
                return e.prototype.repeat = function() {
                    var e;
                    return be(this, void 0, void 0, (function() {
                        var t, n;
                        return we(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.active ? this.delay ? [4, this.wait()] : [3, 2] : [3, 6];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return r.trys.push([2, 4, , 5]), [4, this.cb(this.abortController.signal, null !== (e = this.watchIndex) && void 0 !== e ? e : void 0)];
                                case 3:
                                    return t = r.sent(), this.handleMessage(t), this.parseWatchResponse(t.watch), [3, 5];
                                case 4:
                                    return (n = r.sent()) instanceof DOMException && "AbortError" == n.name ? [2] : (this.opts.cancelOnError && this.cancel(), this.handleErrors(n), [3, 5]);
                                case 5:
                                    return [3, 0];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.wait = function() {
                    return be(this, void 0, void 0, (function() {
                        var e;
                        return we(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.delay, this.delay = 0, [4, new Promise((function(t) {
                                        return setTimeout(t, e)
                                    }))];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.onMessage = function(e) {
                    this.messageHandlers.push(e)
                }, e.prototype.onError = function(e) {
                    this.errorHandlers.push(e)
                }, e.prototype.cancel = function() {
                    this.abortController.abort(), this.active = !1
                }, e.prototype.start = function() {
                    this.active || (this.abortController = new AbortController, this.active = !0, this.repeat())
                }, e.prototype.removeMessageHandler = function(e) {
                    var t = this.messageHandlers.indexOf(e); - 1 != t && this.messageHandlers.splice(t, 1)
                }, e.prototype.handleMessage = function(e) {
                    this.messageHandlers.forEach((function(t) {
                        return t(e)
                    }))
                }, e.prototype.handleErrors = function(e) {
                    this.errorHandlers.forEach((function(t) {
                        return t(e)
                    })), 0 == this.errorHandlers.length && console.error("Unhandled repeating request error", e)
                }, e.prototype.parseWatchResponse = function(e) {
                    (null == e ? void 0 : e.index) ? this.watchIndex = e.index: this.opts.cancelOnNoWatchIndex ? (console.error("Blocking request has no watch response"), this.cancel()) : this.delay = this.opts.noWatchIndexDelay
                }, e
            }();

        function Ea(e, t) {
            var n = this;
            if (void 0 === e && (e = void 0), void 0 === t && (t = {
                    credentials: "omit"
                }), "undefined" == typeof window) throw new Error("Using browser handler middleware in a non-browser environment");
            return {
                handle: function(r, i) {
                    return be(n, void 0, void 0, (function() {
                        var n, o, a, s, c, u, d, l;
                        return we(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return "string" != typeof e ? [3, 1] : (n = e, [3, 4]);
                                case 1:
                                    return "function" != typeof e ? [3, 4] : (o = e()) instanceof Promise ? [4, o] : [3, 3];
                                case 2:
                                    return n = f.sent(), [3, 4];
                                case 3:
                                    n = o, f.label = 4;
                                case 4:
                                    return r.headers = Object.fromEntries(Object.entries(r.headers).filter((function(e) {
                                        var t = Se(e, 1)[0];
                                        return !t.startsWith("amz-") && !t.startsWith("x-amz-")
                                    }))), e && (r.headers.Authorization = "Bearer ".concat(n)), r.body || ("GET" == r.method || "HEAD" == r.method ? r.body = void 0 : "POST" == r.method && (r.body = "{}")), a = r.query ? Object.entries(r.query) : [], s = a.flatMap((function(e) {
                                        var t = Se(e, 2),
                                            n = t[0],
                                            r = t[1];
                                        return r instanceof Array ? r.map((function(e) {
                                            return "".concat(n, "=").concat(encodeURIComponent(e))
                                        })) : ["".concat(n, "=").concat(encodeURIComponent(r))]
                                    })).join("&"), c = "".concat(r.protocol, "//").concat(r.hostname).concat(r.port ? ":".concat(r.port) : "").concat(r.path).concat(s ? "?".concat(s) : ""), [4, window.fetch(c, Object.assign(r, t, {
                                        signal: i.abortSignal
                                    }))];
                                case 5:
                                    return u = f.sent(), d = {}, l = {
                                        statusCode: u.status
                                    }, [4, u.clone().blob()];
                                case 6:
                                    return [2, (d.response = (l.body = f.sent(), l.headers = Array.from(u.headers.entries()).reduce((function(e, t) {
                                        var n = Se(t, 2),
                                            r = n[0],
                                            i = n[1];
                                        return e[r] = i, e
                                    }), {}), l), d)]
                            }
                        }))
                    }))
                }
            }
        }
        var ka = function(e) {
                function t(t) {
                    var n, r, i, o, a, s, c, u, d, l, f, p, h, v, m, y, g, b = this,
                        w = function(e) {
                            var n, r, i, o, a = null !== (n = t.endpoint) && void 0 !== n ? n : null;
                            if (null === a) {
                                try {
                                    a = null !== "https://identity.api.rivet.gg/v1" ? "https://identity.api.rivet.gg/v1" : null
                                } catch (e) {}
                                null === a && (a = "https://identity.api.rivet.gg/v1")
                            }
                            var s = null !== (r = e.token) && void 0 !== r ? r : null;
                            if (null === s) try {
                                s = null !== (o = null !== (i = process.env.RIVET_IDENTITY_TOKEN) && void 0 !== i ? i : process.env.RIVET_TOKEN) && void 0 !== o ? o : null
                            } catch (e) {}
                            return Object.assign(Object.assign({}, e), {
                                endpoint: a,
                                token: s
                            })
                        }((m = sn(n = t), y = function() {
                            return m().then(Qt)
                        }, g = function(e) {
                            var t, n, r;
                            return {
                                apiVersion: "2022-5-28",
                                disableHostPrefix: null !== (t = null == e ? void 0 : e.disableHostPrefix) && void 0 !== t && t,
                                logger: null !== (n = null == e ? void 0 : e.logger) && void 0 !== n ? n : {},
                                urlParser: null !== (r = null == e ? void 0 : e.urlParser) && void 0 !== r ? r : wt
                            }
                        }(n), ye(ye(ye({}, g), n), {
                            runtime: "browser",
                            defaultsMode: m,
                            base64Decoder: null !== (r = null == n ? void 0 : n.base64Decoder) && void 0 !== r ? r : Ue,
                            base64Encoder: null !== (i = null == n ? void 0 : n.base64Encoder) && void 0 !== i ? i : qe,
                            bodyLengthChecker: null !== (o = null == n ? void 0 : n.bodyLengthChecker) && void 0 !== o ? o : ht,
                            defaultUserAgentProvider: null !== (a = null == n ? void 0 : n.defaultUserAgentProvider) && void 0 !== a ? a : yt({
                                clientVersion: "0.0.14"
                            }),
                            maxAttempts: null !== (s = null == n ? void 0 : n.maxAttempts) && void 0 !== s ? s : 3,
                            requestHandler: null !== (c = null == n ? void 0 : n.requestHandler) && void 0 !== c ? c : new Ie(y),
                            retryMode: null !== (u = null == n ? void 0 : n.retryMode) && void 0 !== u ? u : function() {
                                return be(void 0, void 0, void 0, (function() {
                                    return we(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, y()];
                                            case 1:
                                                return [2, e.sent().retryMode || Ge]
                                        }
                                    }))
                                }))
                            },
                            sha256: null !== (d = null == n ? void 0 : n.sha256) && void 0 !== d ? d : ke.Sha256,
                            streamCollector: null !== (l = null == n ? void 0 : n.streamCollector) && void 0 !== l ? l : He,
                            useDualstackEndpoint: null !== (f = null == n ? void 0 : n.useDualstackEndpoint) && void 0 !== f ? f : function() {
                                return Promise.resolve(!1)
                            },
                            useFipsEndpoint: null !== (p = null == n ? void 0 : n.useFipsEndpoint) && void 0 !== p ? p : function() {
                                return Promise.resolve(!1)
                            },
                            utf8Decoder: null !== (h = null == n ? void 0 : n.utf8Decoder) && void 0 !== h ? h : gt,
                            utf8Encoder: null !== (v = null == n ? void 0 : n.utf8Encoder) && void 0 !== v ? v : bt
                        })));
                    t.hasOwnProperty("requestHandler") || (w.requestHandler = Ea(w.token));
                    var _ = Ce(w),
                        S = vn(lt(_));
                    return (b = e.call(this, S) || this).config = S, b.middlewareStack.use(pt(b.config)), b.middlewareStack.use(dn(b.config)), b.middlewareStack.use(fn(b.config)), b.middlewareStack.use(hn(b.config)), b.middlewareStack.use(_n(b.config)), b
                }
                return me(t, e), t.prototype.destroy = function() {
                    e.prototype.destroy.call(this)
                }, t
            }(Et),
            La = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ca = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Aa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ma = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            $a = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Pa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ia = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ra = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Fa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ta = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            za = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Oa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Na = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            ja = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ua = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            qa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ba = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ha = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Da = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Wa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ga = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Va = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ja = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ka = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Ya = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Xa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Za = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i, o, a, s;
                    return we(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return r = [ye({}, e)], s = {}, [4, Ec(e.body, t)];
                            case 1:
                                switch (n = ye.apply(void 0, r.concat([(s.body = c.sent(), s)])), o = "UnknownError", o = kc(e, n.body)) {
                                    case "BadRequestError":
                                    case "rivet.error#BadRequestError":
                                        return [3, 2];
                                    case "ForbiddenError":
                                    case "rivet.error#ForbiddenError":
                                        return [3, 4];
                                    case "InternalError":
                                    case "rivet.error#InternalError":
                                        return [3, 6];
                                    case "NotFoundError":
                                    case "rivet.error#NotFoundError":
                                        return [3, 8];
                                    case "RateLimitError":
                                    case "rivet.error#RateLimitError":
                                        return [3, 10];
                                    case "UnauthorizedError":
                                    case "rivet.error#UnauthorizedError":
                                        return [3, 12]
                                }
                                return [3, 14];
                            case 2:
                                return [4, Qa(n, t)];
                            case 3:
                            case 5:
                            case 7:
                            case 9:
                            case 11:
                            case 13:
                                throw c.sent();
                            case 4:
                                return [4, es(n, t)];
                            case 6:
                                return [4, ts(n, t)];
                            case 8:
                                return [4, ns(n, t)];
                            case 10:
                                return [4, rs(n, t)];
                            case 12:
                                return [4, is(n, t)];
                            case 14:
                                throw a = n.body, i = new ma({
                                    name: a.code || a.Code || o,
                                    $fault: "client",
                                    $metadata: Sc(e)
                                }), tn(i, a)
                        }
                    }))
                }))
            },
            Qa = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new ya(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            es = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new ga(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            ts = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new ba(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            ns = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new wa(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            rs = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new _a(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            is = function(e, t) {
                return be(void 0, void 0, void 0, (function() {
                    var n, r, i;
                    return we(this, (function(o) {
                        return n = {}, void 0 !== (r = e.body).code && null !== r.code && (n.code = Ot(r.code)), void 0 !== r.message && null !== r.message && (n.message = Ot(r.message)), void 0 !== r.metadata && null !== r.metadata && (n.metadata = Ts(r.metadata, t)), i = new Sa(ye({
                            $metadata: Sc(e)
                        }, n)), [2, tn(i, e.body)]
                    }))
                }))
            },
            os = function(e, t) {
                return ye(ye(ye({}, void 0 !== e.message && null !== e.message && {
                    message: e.message
                }), void 0 !== e.mutualMetadata && null !== e.mutualMetadata && {
                    mutual_metadata: as(e.mutualMetadata, t)
                }), void 0 !== e.publicMetadata && null !== e.publicMetadata && {
                    public_metadata: as(e.publicMetadata, t)
                })
            },
            as = function(e, t) {
                return e
            },
            ss = function(e, t) {
                return {
                    thread: void 0 !== e.thread && null !== e.thread ? Cs(e.thread, t) : void 0
                }
            },
            cs = function(e, t) {
                return {
                    readTs: void 0 !== e.read_ts && null !== e.read_ts ? Tt(Wt(e.read_ts)) : void 0,
                    threadId: Ot(e.thread_id)
                }
            },
            us = function(e, t) {
                return {
                    threadId: Ot(e.thread_id)
                }
            },
            ds = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Zs(e.identity, t) : void 0
                }
            },
            ls = function(e, t) {
                return void 0 !== e.chat_message && null !== e.chat_message ? {
                    chatMessage: ss(e.chat_message, t)
                } : void 0 !== e.chat_read && null !== e.chat_read ? {
                    chatRead: cs(e.chat_read)
                } : void 0 !== e.chat_thread_remove && null !== e.chat_thread_remove ? {
                    chatThreadRemove: us(e.chat_thread_remove)
                } : void 0 !== e.identity_update && null !== e.identity_update ? {
                    identityUpdate: ds(e.identity_update, t)
                } : void 0 !== e.matchmaker_lobby_join && null !== e.matchmaker_lobby_join ? {
                    matchmakerLobbyJoin: fs(e.matchmaker_lobby_join, t)
                } : void 0 !== e.party_update && null !== e.party_update ? {
                    partyUpdate: hs(e.party_update, t)
                } : {
                    $unknown: Object.entries(e)[0]
                }
            },
            fs = function(e, t) {
                return {
                    lobby: void 0 !== e.lobby && null !== e.lobby ? ec(e.lobby, t) : void 0
                }
            },
            ps = function(e, t) {
                return {
                    description: Ot(e.description),
                    thumbnailUrl: Ot(e.thumbnail_url),
                    title: Ot(e.title),
                    url: Ot(e.url)
                }
            },
            hs = function(e, t) {
                return {
                    party: void 0 !== e.party && null !== e.party ? wc(e.party, t) : void 0
                }
            },
            vs = function(e, t) {
                return {
                    body: void 0 !== e.body && null !== e.body ? ms(Nt(e.body), t) : void 0,
                    chatMessageId: Ot(e.chat_message_id),
                    sendTs: void 0 !== e.send_ts && null !== e.send_ts ? Tt(Wt(e.send_ts)) : void 0,
                    threadId: Ot(e.thread_id)
                }
            },
            ms = function(e, t) {
                return void 0 !== e.chat_create && null !== e.chat_create ? {
                    chatCreate: ys(e.chat_create, t)
                } : void 0 !== e.group_join && null !== e.group_join ? {
                    groupJoin: gs(e.group_join, t)
                } : void 0 !== e.group_leave && null !== e.group_leave ? {
                    groupLeave: bs(e.group_leave, t)
                } : void 0 !== e.identity_follow && null !== e.identity_follow ? {
                    identityFollow: ws(e.identity_follow, t)
                } : void 0 !== e.party_activity_change && null !== e.party_activity_change ? {
                    partyActivityChange: _s(e.party_activity_change, t)
                } : void 0 !== e.party_invite && null !== e.party_invite ? {
                    partyInvite: Ss(e.party_invite, t)
                } : void 0 !== e.party_join && null !== e.party_join ? {
                    partyJoin: xs(e.party_join, t)
                } : void 0 !== e.party_join_request && null !== e.party_join_request ? {
                    partyJoinRequest: Es(e.party_join_request, t)
                } : void 0 !== e.party_leave && null !== e.party_leave ? {
                    partyLeave: ks(e.party_leave, t)
                } : void 0 !== e.text && null !== e.text ? {
                    text: Ls(e.text, t)
                } : {
                    $unknown: Object.entries(e)[0]
                }
            },
            ys = function(e, t) {
                return {}
            },
            gs = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Js(e.identity, t) : void 0
                }
            },
            bs = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Js(e.identity, t) : void 0
                }
            },
            ws = function(e, t) {
                return {}
            },
            _s = function(e, t) {
                return {}
            },
            Ss = function(e, t) {
                return {
                    inviteToken: Ot(e.invite_token),
                    party: void 0 !== e.party && null !== e.party ? dc(e.party, t) : void 0,
                    sender: void 0 !== e.sender && null !== e.sender ? Js(e.sender, t) : void 0
                }
            },
            xs = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Js(e.identity, t) : void 0
                }
            },
            Es = function(e, t) {
                return {
                    sender: void 0 !== e.sender && null !== e.sender ? Js(e.sender, t) : void 0
                }
            },
            ks = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Js(e.identity, t) : void 0
                }
            },
            Ls = function(e, t) {
                return {
                    body: Ot(e.body),
                    sender: void 0 !== e.sender && null !== e.sender ? Js(e.sender, t) : void 0
                }
            },
            Cs = function(e, t) {
                return {
                    createTs: void 0 !== e.create_ts && null !== e.create_ts ? Tt(Wt(e.create_ts)) : void 0,
                    external: void 0 !== e.external && null !== e.external ? As(e.external, t) : void 0,
                    lastReadTs: void 0 !== e.last_read_ts && null !== e.last_read_ts ? Tt(Wt(e.last_read_ts)) : void 0,
                    tailMessage: void 0 !== e.tail_message && null !== e.tail_message ? vs(e.tail_message, t) : void 0,
                    threadId: Ot(e.thread_id),
                    topic: void 0 !== e.topic && null !== e.topic ? Ms(Nt(e.topic), t) : void 0,
                    unreadCount: Pt(e.unread_count)
                }
            },
            As = function(e, t) {
                return {
                    chat: Ot(e.chat)
                }
            },
            Ms = function(e, t) {
                return void 0 !== e.direct && null !== e.direct ? {
                    direct: $s(e.direct, t)
                } : void 0 !== e.group && null !== e.group ? {
                    group: Ps(e.group, t)
                } : void 0 !== e.party && null !== e.party ? {
                    party: Is(e.party, t)
                } : {
                    $unknown: Object.entries(e)[0]
                }
            },
            $s = function(e, t) {
                return {
                    identityA: void 0 !== e.identity_a && null !== e.identity_a ? Js(e.identity_a, t) : void 0,
                    identityB: void 0 !== e.identity_b && null !== e.identity_b ? Js(e.identity_b, t) : void 0
                }
            },
            Ps = function(e, t) {
                return {
                    group: void 0 !== e.group && null !== e.group ? Bs(e.group, t) : void 0
                }
            },
            Is = function(e, t) {
                return {
                    party: void 0 !== e.party && null !== e.party ? dc(e.party, t) : void 0
                }
            },
            Rs = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : Ot(e)
                }))
            },
            Fs = function(e, t) {
                return {
                    index: Ot(e.index)
                }
            },
            Ts = function(e, t) {
                return e
            },
            zs = function(e, t) {
                return {
                    bannerUrl: Ot(e.banner_url),
                    displayName: Ot(e.display_name),
                    gameId: Ot(e.game_id),
                    logoUrl: Ot(e.logo_url),
                    nameId: Ot(e.name_id)
                }
            },
            Os = function(e, t) {
                return {
                    aggregation: Ot(e.aggregation),
                    displayName: Ot(e.display_name),
                    format: Ot(e.format),
                    iconId: Ot(e.icon_id),
                    postfixPlural: Ot(e.postfix_plural),
                    postfixSingular: Ot(e.postfix_singular),
                    prefixPlural: Ot(e.prefix_plural),
                    prefixSingular: Ot(e.prefix_singular),
                    priority: It(e.priority),
                    recordId: Ot(e.record_id),
                    sorting: Ot(e.sorting)
                }
            },
            Ns = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : function(e, t) {
                        return {
                            config: void 0 !== e.config && null !== e.config ? Os(e.config) : void 0,
                            overallValue: (n = e.overall_value, "string" == typeof n ? Bt(n) : $t(n))
                        };
                        var n
                    }(e)
                }))
            },
            js = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : Us(e, t)
                }))
            },
            Us = function(e, t) {
                return {
                    game: void 0 !== e.game && null !== e.game ? zs(e.game) : void 0,
                    stats: void 0 !== e.stats && null !== e.stats ? Ns(e.stats) : void 0
                }
            },
            qs = function(e, t) {
                return {
                    chat: Ot(e.chat),
                    profile: Ot(e.profile)
                }
            },
            Bs = function(e, t) {
                return {
                    avatarUrl: Ot(e.avatar_url),
                    displayName: Ot(e.display_name),
                    external: void 0 !== e.external && null !== e.external ? qs(e.external) : void 0,
                    groupId: Ot(e.group_id),
                    isDeveloper: Ct(e.is_developer)
                }
            },
            Hs = function(e, t) {
                return {
                    avatarUrl: Ot(e.avatar_url),
                    bio: Ot(e.bio),
                    displayName: Ot(e.display_name),
                    external: void 0 !== e.external && null !== e.external ? qs(e.external) : void 0,
                    groupId: Ot(e.group_id),
                    isCurrentIdentityMember: Ct(e.is_current_identity_member),
                    isDeveloper: Ct(e.is_developer),
                    memberCount: It(e.member_count),
                    publicity: Ot(e.publicity)
                }
            },
            Ds = function(e, t) {
                return {
                    email: Ot(e.email)
                }
            },
            Ws = function(e, t) {
                return {
                    chat: Ot(e.chat),
                    profile: Ot(e.profile),
                    settings: Ot(e.settings)
                }
            },
            Gs = function(e, t) {
                return {
                    game: void 0 !== e.game && null !== e.game ? zs(e.game) : void 0,
                    message: Ot(e.message),
                    mutualMetadata: void 0 !== e.mutual_metadata && null !== e.mutual_metadata ? _c(e.mutual_metadata, t) : void 0,
                    publicMetadata: void 0 !== e.public_metadata && null !== e.public_metadata ? _c(e.public_metadata, t) : void 0
                }
            },
            Vs = function(e, t) {
                var n = (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : function(e, t) {
                        return {
                            group: void 0 !== e.group && null !== e.group ? Bs(e.group, t) : void 0
                        }
                    }(e, t)
                }));
                return n
            },
            Js = function(e, t) {
                return {
                    accountNumber: It(e.account_number),
                    avatarUrl: Ot(e.avatar_url),
                    displayName: Ot(e.display_name),
                    external: void 0 !== e.external && null !== e.external ? Ws(e.external) : void 0,
                    identityId: Ot(e.identity_id),
                    isRegistered: Ct(e.is_registered),
                    party: void 0 !== e.party && null !== e.party ? dc(e.party, t) : void 0,
                    presence: void 0 !== e.presence && null !== e.presence ? Xs(e.presence, t) : void 0
                }
            },
            Ks = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : Js(e, t)
                }))
            },
            Ys = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : function(e, t) {
                        return void 0 !== e.email && null !== e.email ? {
                            email: Ds(e.email)
                        } : {
                            $unknown: Object.entries(e)[0]
                        }
                    }(Nt(e))
                }))
            },
            Xs = function(e, t) {
                return {
                    gameActivity: void 0 !== e.game_activity && null !== e.game_activity ? Gs(e.game_activity, t) : void 0,
                    status: Ot(e.status),
                    updateTs: void 0 !== e.update_ts && null !== e.update_ts ? Tt(Wt(e.update_ts)) : void 0
                }
            },
            Zs = function(e, t) {
                return {
                    accountNumber: It(e.account_number),
                    avatarUrl: Ot(e.avatar_url),
                    bio: Ot(e.bio),
                    devState: Ot(e.dev_state),
                    displayName: Ot(e.display_name),
                    external: void 0 !== e.external && null !== e.external ? Ws(e.external) : void 0,
                    followerCount: It(e.follower_count),
                    following: Ct(e.following),
                    followingCount: It(e.following_count),
                    games: void 0 !== e.games && null !== e.games ? js(e.games, t) : void 0,
                    groups: void 0 !== e.groups && null !== e.groups ? Vs(e.groups, t) : void 0,
                    identityId: Ot(e.identity_id),
                    isAdmin: Ct(e.is_admin),
                    isFollowingMe: Ct(e.is_following_me),
                    isGameLinked: Ct(e.is_game_linked),
                    isMutualFollowing: Ct(e.is_mutual_following),
                    isRegistered: Ct(e.is_registered),
                    joinTs: void 0 !== e.join_ts && null !== e.join_ts ? Tt(Wt(e.join_ts)) : void 0,
                    linkedAccounts: void 0 !== e.linked_accounts && null !== e.linked_accounts ? Ys(e.linked_accounts) : void 0,
                    party: void 0 !== e.party && null !== e.party ? wc(e.party, t) : void 0,
                    presence: void 0 !== e.presence && null !== e.presence ? Xs(e.presence, t) : void 0
                }
            },
            Qs = function(e, t) {
                return {
                    accountNumber: It(e.account_number),
                    avatarUrl: Ot(e.avatar_url),
                    displayName: Ot(e.display_name),
                    external: void 0 !== e.external && null !== e.external ? Ws(e.external) : void 0,
                    following: Ct(e.following),
                    identityId: Ot(e.identity_id),
                    isFollowingMe: Ct(e.is_following_me),
                    isMutualFollowing: Ct(e.is_mutual_following),
                    isRegistered: Ct(e.is_registered),
                    party: void 0 !== e.party && null !== e.party ? dc(e.party, t) : void 0,
                    presence: void 0 !== e.presence && null !== e.presence ? Xs(e.presence, t) : void 0
                }
            },
            ec = function(e, t) {
                return {
                    lobbyId: Ot(e.lobby_id),
                    player: void 0 !== e.player && null !== e.player ? tc(e.player, t) : void 0,
                    ports: void 0 !== e.ports && null !== e.ports ? rc(e.ports, t) : void 0,
                    region: void 0 !== e.region && null !== e.region ? ic(e.region, t) : void 0
                }
            },
            tc = function(e, t) {
                return {
                    token: Ot(e.token)
                }
            },
            nc = function(e, t) {
                return {
                    max: It(e.max),
                    min: It(e.min)
                }
            },
            rc = function(e, t) {
                return Object.entries(e).reduce((function(e, t) {
                    var n, r = Se(t, 2),
                        i = r[0],
                        o = r[1];
                    return null === o ? e : ye(ye({}, e), ((n = {})[i] = function(e, t) {
                        return {
                            host: Ot(e.host),
                            hostname: Ot(e.hostname),
                            isTls: Ct(e.is_tls),
                            port: It(e.port),
                            portRange: void 0 !== e.port_range && null !== e.port_range ? nc(e.port_range) : void 0
                        }
                    }(o), n))
                }), {})
            },
            ic = function(e, t) {
                return {
                    displayName: Ot(e.display_name),
                    regionId: Ot(e.region_id)
                }
            },
            oc = function(e, t) {
                return void 0 !== e.idle && null !== e.idle ? {
                    idle: ac(e.idle, t)
                } : void 0 !== e.matchmaker_finding_lobby && null !== e.matchmaker_finding_lobby ? {
                    matchmakerFindingLobby: sc(e.matchmaker_finding_lobby, t)
                } : void 0 !== e.matchmaker_lobby && null !== e.matchmaker_lobby ? {
                    matchmakerLobby: cc(e.matchmaker_lobby, t)
                } : {
                    $unknown: Object.entries(e)[0]
                }
            },
            ac = function(e, t) {
                return {}
            },
            sc = function(e, t) {
                return {
                    game: void 0 !== e.game && null !== e.game ? zs(e.game) : void 0
                }
            },
            cc = function(e, t) {
                return {
                    game: void 0 !== e.game && null !== e.game ? zs(e.game) : void 0,
                    lobby: void 0 !== e.lobby && null !== e.lobby ? lc(e.lobby, t) : void 0
                }
            },
            uc = function(e, t) {
                return {
                    chat: Ot(e.chat)
                }
            },
            dc = function(e, t) {
                return {
                    activity: void 0 !== e.activity && null !== e.activity ? oc(Nt(e.activity), t) : void 0,
                    createTs: void 0 !== e.create_ts && null !== e.create_ts ? Tt(Wt(e.create_ts)) : void 0,
                    external: void 0 !== e.external && null !== e.external ? uc(e.external) : void 0,
                    partyId: Ot(e.party_id)
                }
            },
            lc = function(e, t) {
                return {
                    lobbyId: Ot(e.lobby_id)
                }
            },
            fc = function(e, t) {
                return void 0 !== e.idle && null !== e.idle ? {
                    idle: pc(e.idle, t)
                } : void 0 !== e.matchmaker_finding_lobby && null !== e.matchmaker_finding_lobby ? {
                    matchmakerFindingLobby: hc(e.matchmaker_finding_lobby, t)
                } : void 0 !== e.matchmaker_lobby && null !== e.matchmaker_lobby ? {
                    matchmakerLobby: vc(e.matchmaker_lobby, t)
                } : void 0 !== e.matchmaker_pending && null !== e.matchmaker_pending ? {
                    matchmakerPending: mc(e.matchmaker_pending, t)
                } : {
                    $unknown: Object.entries(e)[0]
                }
            },
            pc = function(e, t) {
                return {}
            },
            hc = function(e, t) {
                return {}
            },
            vc = function(e, t) {
                return {
                    playerId: Ot(e.player_id)
                }
            },
            mc = function(e, t) {
                return {}
            },
            yc = function(e, t) {
                return (e || []).filter((function(e) {
                    return null != e
                })).map((function(e) {
                    return null === e ? null : gc(e, t)
                }))
            },
            gc = function(e, t) {
                return {
                    identity: void 0 !== e.identity && null !== e.identity ? Js(e.identity, t) : void 0,
                    isLeader: Ct(e.is_leader),
                    joinTs: void 0 !== e.join_ts && null !== e.join_ts ? Tt(Wt(e.join_ts)) : void 0,
                    state: void 0 !== e.state && null !== e.state ? fc(Nt(e.state), t) : void 0
                }
            },
            bc = function(e, t) {
                return {
                    groups: Ot(e.groups),
                    mutualFollowers: Ot(e.mutual_followers),
                    public: Ot(e.public)
                }
            },
            wc = function(e, t) {
                return {
                    activity: void 0 !== e.activity && null !== e.activity ? oc(Nt(e.activity), t) : void 0,
                    createTs: void 0 !== e.create_ts && null !== e.create_ts ? Tt(Wt(e.create_ts)) : void 0,
                    external: void 0 !== e.external && null !== e.external ? uc(e.external) : void 0,
                    members: void 0 !== e.members && null !== e.members ? yc(e.members, t) : void 0,
                    partyId: Ot(e.party_id),
                    partySize: It(e.party_size),
                    publicity: void 0 !== e.publicity && null !== e.publicity ? bc(e.publicity) : void 0,
                    threadId: Ot(e.thread_id)
                }
            },
            _c = function(e, t) {
                return e
            },
            Sc = function(e) {
                var t;
                return {
                    httpStatusCode: e.statusCode,
                    requestId: null !== (t = e.headers["x-amzn-requestid"]) && void 0 !== t ? t : e.headers["x-amzn-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }
            },
            xc = function(e, t) {
                return void 0 === e && (e = new Uint8Array), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array)
            },
            Ec = function(e, t) {
                return function(e, t) {
                    return xc(e, t).then((function(e) {
                        return t.utf8Encoder(e)
                    }))
                }(e, t).then((function(e) {
                    return e.length ? JSON.parse(e) : {}
                }))
            },
            kc = function(e, t) {
                var n, r = function(e) {
                        var t = e;
                        return t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t
                    },
                    i = (n = e.headers, "x-amzn-errortype", Object.keys(n).find((function(e) {
                        return e.toLowerCase() === "x-amzn-errortype".toLowerCase()
                    })));
                return void 0 !== i ? r(e.headers[i]) : void 0 !== t.code ? r(t.code) : void 0 !== t.__type ? r(t.__type) : ""
            },
            Lc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "CancelGameLinkCommand",
                            inputFilterSensitiveLog: fi.filterSensitiveLog,
                            outputFilterSensitiveLog: pi.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/game-links/cancel", d = JSON.stringify(ye({}, void 0 !== e.identityLinkToken && null !== e.identityLinkToken && {
                                            identity_link_token: e.identityLinkToken
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, La(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Cc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "CompleteGameLinkCommand",
                            inputFilterSensitiveLog: hi.filterSensitiveLog,
                            outputFilterSensitiveLog: vi.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/game-links/complete", d = JSON.stringify(ye({}, void 0 !== e.identityLinkToken && null !== e.identityLinkToken && {
                                            identity_link_token: e.identityLinkToken
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ca(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Ac = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "CompleteIdentityAvatarUploadCommand",
                            inputFilterSensitiveLog: mi.filterSensitiveLog,
                            outputFilterSensitiveLog: yi.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/avatar-upload/{upload_id}/complete", void 0 === e.uploadId) throw new Error("No value provided for input HTTP label: uploadId.");
                                        if ((d = e.uploadId).length <= 0) throw new Error("Empty value provided for input HTTP label: uploadId.");
                                        return u = u.replace("{upload_id}", nn(d)), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Aa(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Mc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "FollowIdentityCommand",
                            inputFilterSensitiveLog: lo.filterSensitiveLog,
                            outputFilterSensitiveLog: fo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/follow", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ma(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            $c = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "GetGameLinkCommand",
                            inputFilterSensitiveLog: po.filterSensitiveLog,
                            outputFilterSensitiveLog: mo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/game-links", d = ye(ye({}, void 0 !== e.identityLinkToken && {
                                            identity_link_token: e.identityLinkToken
                                        }), void 0 !== e.watchIndex && {
                                            watch_index: e.watchIndex
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, $a(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            currentIdentity: void 0,
                                            game: void 0,
                                            newIdentity: void 0,
                                            status: void 0,
                                            watch: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).current_identity && null !== r.current_identity && (n.currentIdentity = Js(r.current_identity, t)), void 0 !== r.game && null !== r.game && (n.game = zs(r.game)), void 0 !== r.new_identity && null !== r.new_identity && (n.newIdentity = function(e, t) {
                                            return {
                                                identity: void 0 !== e.identity && null !== e.identity ? Zs(e.identity, t) : void 0,
                                                identityToken: Ot(e.identity_token),
                                                identityTokenExpireTs: void 0 !== e.identity_token_expire_ts && null !== e.identity_token_expire_ts ? Tt(Wt(e.identity_token_expire_ts)) : void 0
                                            }
                                        }(r.new_identity, t)), void 0 !== r.status && null !== r.status && (n.status = Ot(r.status)), void 0 !== r.watch && null !== r.watch && (n.watch = Fs(r.watch)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Pc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "GetIdentityHandlesCommand",
                            inputFilterSensitiveLog: yo.filterSensitiveLog,
                            outputFilterSensitiveLog: go.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/batch/handle", d = ye({}, void 0 !== e.identityIds && {
                                            identity_ids: (e.identityIds || []).map((function(e) {
                                                return e
                                            }))
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Pa(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Ic = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "GetIdentityProfileCommand",
                            inputFilterSensitiveLog: bo.filterSensitiveLog,
                            outputFilterSensitiveLog: wo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d, l;
                            return we(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = f.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/profile", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), l = ye({}, void 0 !== e.watchIndex && {
                                            watch_index: e.watchIndex
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: l,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ia(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            identity: void 0,
                                            watch: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).identity && null !== r.identity && (n.identity = Zs(r.identity, t)), void 0 !== r.watch && null !== r.watch && (n.watch = Fs(r.watch)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Rc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "GetIdentitySelfProfileCommand",
                            inputFilterSensitiveLog: _o.filterSensitiveLog,
                            outputFilterSensitiveLog: So.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/profile", d = ye({}, void 0 !== e.watchIndex && {
                                            watch_index: e.watchIndex
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ra(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            identity: void 0,
                                            watch: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).identity && null !== r.identity && (n.identity = Zs(r.identity, t)), void 0 !== r.watch && null !== r.watch && (n.watch = Fs(r.watch)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Fc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "GetIdentitySummariesCommand",
                            inputFilterSensitiveLog: xo.filterSensitiveLog,
                            outputFilterSensitiveLog: ko.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/batch/summary", d = ye({}, void 0 !== e.identityIds && {
                                            identity_ids: (e.identityIds || []).map((function(e) {
                                                return e
                                            }))
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Fa(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).identities && null !== r.identities && (n.identities = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : Qs(e, t)
                                            }))
                                        }(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Tc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ListActivitiesCommand",
                            inputFilterSensitiveLog: Nr.filterSensitiveLog,
                            outputFilterSensitiveLog: li.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/activities", d = ye({}, void 0 !== e.watchIndex && {
                                            watch_index: e.watchIndex
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ta(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            games: void 0,
                                            identities: void 0,
                                            parties: void 0,
                                            suggestedGroups: void 0,
                                            suggestedPlayers: void 0,
                                            watch: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).games && null !== r.games && (n.games = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : zs(e)
                                            }))
                                        }(r.games)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), void 0 !== r.parties && null !== r.parties && (n.parties = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : wc(e, t)
                                            }))
                                        }(r.parties, t)), void 0 !== r.suggested_groups && null !== r.suggested_groups && (n.suggestedGroups = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : Hs(e, t)
                                            }))
                                        }(r.suggested_groups, t)), void 0 !== r.suggested_players && null !== r.suggested_players && (n.suggestedPlayers = Ks(r.suggested_players, t)), void 0 !== r.watch && null !== r.watch && (n.watch = Fs(r.watch)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            zc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ListFollowersCommand",
                            inputFilterSensitiveLog: Lo.filterSensitiveLog,
                            outputFilterSensitiveLog: Co.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d, l;
                            return we(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = f.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/followers", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), l = ye(ye({}, void 0 !== e.anchor && {
                                            anchor: e.anchor
                                        }), void 0 !== e.limit && {
                                            limit: e.limit.toString()
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: l,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, za(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            anchor: void 0,
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).anchor && null !== r.anchor && (n.anchor = Ot(r.anchor)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Oc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ListFollowingCommand",
                            inputFilterSensitiveLog: Ao.filterSensitiveLog,
                            outputFilterSensitiveLog: Mo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d, l;
                            return we(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = f.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/following", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), l = ye(ye({}, void 0 !== e.anchor && {
                                            anchor: e.anchor
                                        }), void 0 !== e.limit && {
                                            limit: e.limit.toString()
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: l,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Oa(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            anchor: void 0,
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).anchor && null !== r.anchor && (n.anchor = Ot(r.anchor)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Nc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ListFriendsCommand",
                            inputFilterSensitiveLog: $o.filterSensitiveLog,
                            outputFilterSensitiveLog: Po.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/friends", d = ye(ye({}, void 0 !== e.anchor && {
                                            anchor: e.anchor
                                        }), void 0 !== e.limit && {
                                            limit: e.limit.toString()
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Na(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            anchor: void 0,
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).anchor && null !== r.anchor && (n.anchor = Ot(r.anchor)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            jc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ListMutualFriendsCommand",
                            inputFilterSensitiveLog: Io.filterSensitiveLog,
                            outputFilterSensitiveLog: Ro.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d, l;
                            return we(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = f.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/mutual-friends", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), l = ye(ye({}, void 0 !== e.anchor && {
                                            anchor: e.anchor
                                        }), void 0 !== e.limit && {
                                            limit: e.limit.toString()
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: l,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, ja(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            anchor: void 0,
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).anchor && null !== r.anchor && (n.anchor = Ot(r.anchor)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Uc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "PrepareGameLinkCommand",
                            inputFilterSensitiveLog: oa.filterSensitiveLog,
                            outputFilterSensitiveLog: aa.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o, a, s, c;
                            return we(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return e = u.sent(), n = e.hostname, r = e.protocol, i = void 0 === r ? "https" : r, o = e.port, a = e.path, s = {
                                            "content-type": "application/json"
                                        }, c = "".concat((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a || "") + "/game-links", [2, new Ae({
                                            protocol: i,
                                            hostname: n,
                                            port: o,
                                            method: "POST",
                                            headers: s,
                                            path: c,
                                            body: ""
                                        })]
                                }
                            }))
                        }))
                    }(0, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ua(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            expireTs: void 0,
                                            identityLinkToken: void 0,
                                            identityLinkUrl: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).expire_ts && null !== r.expire_ts && (n.expireTs = Tt(Wt(r.expire_ts))), void 0 !== r.identity_link_token && null !== r.identity_link_token && (n.identityLinkToken = Ot(r.identity_link_token)), void 0 !== r.identity_link_url && null !== r.identity_link_url && (n.identityLinkUrl = Ot(r.identity_link_url)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            qc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "PrepareIdentityAvatarUploadCommand",
                            inputFilterSensitiveLog: Fo.filterSensitiveLog,
                            outputFilterSensitiveLog: zo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/avatar-upload/prepare", d = JSON.stringify(ye(ye(ye({}, void 0 !== e.contentLength && null !== e.contentLength && {
                                            content_length: e.contentLength
                                        }), void 0 !== e.mime && null !== e.mime && {
                                            mime: e.mime
                                        }), void 0 !== e.path && null !== e.path && {
                                            path: e.path
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, qa(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            presignedRequest: void 0,
                                            uploadId: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).presigned_request && null !== r.presigned_request && (n.presignedRequest = function(e, t) {
                                            return {
                                                path: Ot(e.path),
                                                url: Ot(e.url)
                                            }
                                        }(r.presigned_request)), void 0 !== r.upload_id && null !== r.upload_id && (n.uploadId = Ot(r.upload_id)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Bc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "RemoveIdentityGameActivityCommand",
                            inputFilterSensitiveLog: Oo.filterSensitiveLog,
                            outputFilterSensitiveLog: No.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var e, n, r, i, o, a, s, c;
                            return we(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return e = u.sent(), n = e.hostname, r = e.protocol, i = void 0 === r ? "https" : r, o = e.port, a = e.path, s = {
                                            "content-type": "application/json"
                                        }, c = "".concat((null == a ? void 0 : a.endsWith("/")) ? a.slice(0, -1) : a || "") + "/identities/self/activity", [2, new Ae({
                                            protocol: i,
                                            hostname: n,
                                            port: o,
                                            method: "DELETE",
                                            headers: s,
                                            path: c,
                                            body: ""
                                        })]
                                }
                            }))
                        }))
                    }(0, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ba(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Hc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ReportIdentityCommand",
                            inputFilterSensitiveLog: jo.filterSensitiveLog,
                            outputFilterSensitiveLog: Uo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d, l;
                            return we(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = f.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                                "content-type": "application/json"
                                            }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/report", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), l = JSON.stringify(ye({}, void 0 !== e.reason && null !== e.reason && {
                                            reason: e.reason
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: l
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ha(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Dc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "SearchIdentitiesCommand",
                            inputFilterSensitiveLog: qo.filterSensitiveLog,
                            outputFilterSensitiveLog: Bo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/search", d = ye(ye(ye({}, void 0 !== e.query && {
                                            query: e.query
                                        }), void 0 !== e.anchor && {
                                            anchor: e.anchor
                                        }), void 0 !== e.limit && {
                                            limit: e.limit.toString()
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Da(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            anchor: void 0,
                                            identities: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).anchor && null !== r.anchor && (n.anchor = Ot(r.anchor)), void 0 !== r.identities && null !== r.identities && (n.identities = Ks(r.identities, t)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Wc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "SetIdentityGameActivityCommand",
                            inputFilterSensitiveLog: Do.filterSensitiveLog,
                            outputFilterSensitiveLog: Wo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/activity", d = JSON.stringify(ye({}, void 0 !== e.gameActivity && null !== e.gameActivity && {
                                            game_activity: os(e.gameActivity, t)
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Wa(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Gc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "SetupIdentityCommand",
                            inputFilterSensitiveLog: Go.filterSensitiveLog,
                            outputFilterSensitiveLog: Vo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities", d = JSON.stringify(ye({}, void 0 !== e.existingIdentityToken && null !== e.existingIdentityToken && {
                                            existing_identity_token: e.existingIdentityToken
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ga(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            gameId: void 0,
                                            identity: void 0,
                                            identityToken: void 0,
                                            identityTokenExpireTs: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).game_id && null !== r.game_id && (n.gameId = Ot(r.game_id)), void 0 !== r.identity && null !== r.identity && (n.identity = Zs(r.identity, t)), void 0 !== r.identity_token && null !== r.identity_token && (n.identityToken = Ot(r.identity_token)), void 0 !== r.identity_token_expire_ts && null !== r.identity_token_expire_ts && (n.identityTokenExpireTs = Tt(Wt(r.identity_token_expire_ts))), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Vc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "SignupForBetaCommand",
                            inputFilterSensitiveLog: Jo.filterSensitiveLog,
                            outputFilterSensitiveLog: Ko.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/beta-signup", d = JSON.stringify(ye(ye(ye(ye(ye({}, void 0 !== e.companyName && null !== e.companyName && {
                                            company_name: e.companyName
                                        }), void 0 !== e.companySize && null !== e.companySize && {
                                            company_size: e.companySize
                                        }), void 0 !== e.goals && null !== e.goals && {
                                            goals: e.goals
                                        }), void 0 !== e.name && null !== e.name && {
                                            name: e.name
                                        }), void 0 !== e.preferredTools && null !== e.preferredTools && {
                                            preferred_tools: e.preferredTools
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Va(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Jc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "UnfollowIdentityCommand",
                            inputFilterSensitiveLog: Yo.filterSensitiveLog,
                            outputFilterSensitiveLog: Xo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        if (n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/{identity_id}/follow", void 0 === e.identityId) throw new Error("No value provided for input HTTP label: identityId.");
                                        if ((d = e.identityId).length <= 0) throw new Error("Empty value provided for input HTTP label: identityId.");
                                        return u = u.replace("{identity_id}", nn(d)), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "DELETE",
                                            headers: c,
                                            path: u,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ja(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Kc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "UpdateIdentityProfileCommand",
                            inputFilterSensitiveLog: Zo.filterSensitiveLog,
                            outputFilterSensitiveLog: Qo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/profile", d = JSON.stringify(ye(ye(ye({}, void 0 !== e.accountNumber && null !== e.accountNumber && {
                                            account_number: e.accountNumber
                                        }), void 0 !== e.bio && null !== e.bio && {
                                            bio: e.bio
                                        }), void 0 !== e.displayName && null !== e.displayName && {
                                            display_name: e.displayName
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ka(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Yc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "UpdateIdentityStatusCommand",
                            inputFilterSensitiveLog: ea.filterSensitiveLog,
                            outputFilterSensitiveLog: ta.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/status", d = JSON.stringify(ye({}, void 0 !== e.status && null !== e.status && {
                                            status: e.status
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n;
                            return we(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Ya(e, t)] : (n = {
                                            $metadata: Sc(e)
                                        }, [4, xc(e.body, t)]);
                                    case 1:
                                        return r.sent(), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Xc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "ValidateIdentityProfileCommand",
                            inputFilterSensitiveLog: na.filterSensitiveLog,
                            outputFilterSensitiveLog: ia.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {
                                            "content-type": "application/json"
                                        }, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/identities/self/profile/validate", d = JSON.stringify(ye(ye(ye({}, void 0 !== e.accountNumber && null !== e.accountNumber && {
                                            account_number: e.accountNumber
                                        }), void 0 !== e.bio && null !== e.bio && {
                                            bio: e.bio
                                        }), void 0 !== e.displayName && null !== e.displayName && {
                                            display_name: e.displayName
                                        })), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "POST",
                                            headers: c,
                                            path: u,
                                            body: d
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Xa(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            errors: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).errors && null !== r.errors && (n.errors = function(e, t) {
                                            return (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : function(e, t) {
                                                    return {
                                                        path: void 0 !== e.path && null !== e.path ? Rs(e.path) : void 0
                                                    }
                                                }(e)
                                            }))
                                        }(r.errors)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Zc = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.input = t, n
                }
                return me(t, e), t.prototype.resolveMiddleware = function(e, t, n) {
                    this.middlewareStack.use(Or(t, this.serialize, this.deserialize));
                    var r = e.concat(this.middlewareStack),
                        i = {
                            logger: t.logger,
                            clientName: "IdentityServiceClient",
                            commandName: "WatchEventsCommand",
                            inputFilterSensitiveLog: gi.filterSensitiveLog,
                            outputFilterSensitiveLog: uo.filterSensitiveLog
                        },
                        o = t.requestHandler;
                    return r.resolve((function(e) {
                        return o.handle(e.request, n || {})
                    }), i)
                }, t.prototype.serialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o, a, s, c, u, d;
                            return we(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, t.endpoint()];
                                    case 1:
                                        return n = l.sent(), r = n.hostname, i = n.protocol, o = void 0 === i ? "https" : i, a = n.port, s = n.path, c = {}, u = "".concat((null == s ? void 0 : s.endsWith("/")) ? s.slice(0, -1) : s || "") + "/events/live", d = ye({}, void 0 !== e.watchIndex && {
                                            watch_index: e.watchIndex
                                        }), [2, new Ae({
                                            protocol: o,
                                            hostname: r,
                                            port: a,
                                            method: "GET",
                                            headers: c,
                                            path: u,
                                            query: d,
                                            body: void 0
                                        })]
                                }
                            }))
                        }))
                    }(e, t)
                }, t.prototype.deserialize = function(e, t) {
                    return function(e, t) {
                        return be(void 0, void 0, void 0, (function() {
                            var n, r, i, o;
                            return we(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return 200 !== e.statusCode && e.statusCode >= 300 ? [2, Za(e, t)] : (n = {
                                            $metadata: Sc(e),
                                            events: void 0,
                                            watch: void 0
                                        }, i = Tt, o = zt, [4, Ec(e.body, t)]);
                                    case 1:
                                        return void 0 !== (r = i.apply(void 0, [o.apply(void 0, [a.sent()]), "body"])).events && null !== r.events && (n.events = function(e, t) {
                                            var n = (e || []).filter((function(e) {
                                                return null != e
                                            })).map((function(e) {
                                                return null === e ? null : function(e, t) {
                                                    return {
                                                        kind: void 0 !== e.kind && null !== e.kind ? ls(Nt(e.kind), t) : void 0,
                                                        notification: void 0 !== e.notification && null !== e.notification ? ps(e.notification) : void 0,
                                                        ts: void 0 !== e.ts && null !== e.ts ? Tt(Wt(e.ts)) : void 0
                                                    }
                                                }(e, t)
                                            }));
                                            return n
                                        }(r.events, t)), void 0 !== r.watch && null !== r.watch && (n.watch = Fs(r.watch)), [2, Promise.resolve(n)]
                                }
                            }))
                        }))
                    }(e, t)
                }, t
            }(kt),
            Qc = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return me(t, e), t.prototype.cancelGameLink = function(e, t, n) {
                    var r = new Lc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.completeGameLink = function(e, t, n) {
                    var r = new Cc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.completeIdentityAvatarUpload = function(e, t, n) {
                    var r = new Ac(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.followIdentity = function(e, t, n) {
                    var r = new Mc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.getGameLink = function(e, t, n) {
                    var r = new $c(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.getIdentityHandles = function(e, t, n) {
                    var r = new Pc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.getIdentityProfile = function(e, t, n) {
                    var r = new Ic(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.getIdentitySelfProfile = function(e, t, n) {
                    var r = new Rc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.getIdentitySummaries = function(e, t, n) {
                    var r = new Fc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listActivities = function(e, t, n) {
                    var r = new Tc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listFollowers = function(e, t, n) {
                    var r = new zc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listFollowing = function(e, t, n) {
                    var r = new Oc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listFriends = function(e, t, n) {
                    var r = new Nc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.listMutualFriends = function(e, t, n) {
                    var r = new jc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.prepareGameLink = function(e, t, n) {
                    var r = new Uc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.prepareIdentityAvatarUpload = function(e, t, n) {
                    var r = new qc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.removeIdentityGameActivity = function(e, t, n) {
                    var r = new Bc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.reportIdentity = function(e, t, n) {
                    var r = new Hc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.searchIdentities = function(e, t, n) {
                    var r = new Dc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.setIdentityGameActivity = function(e, t, n) {
                    var r = new Wc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.setupIdentity = function(e, t, n) {
                    var r = new Gc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.signupForBeta = function(e, t, n) {
                    var r = new Vc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.unfollowIdentity = function(e, t, n) {
                    var r = new Jc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.updateIdentityProfile = function(e, t, n) {
                    var r = new Kc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.updateIdentityStatus = function(e, t, n) {
                    var r = new Yc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.validateIdentityProfile = function(e, t, n) {
                    var r = new Xc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t.prototype.watchEvents = function(e, t, n) {
                    var r = new Zc(e);
                    if ("function" == typeof t) this.send(r, t);
                    else {
                        if ("function" != typeof n) return this.send(r, t);
                        if ("object" != typeof t) throw new Error("Expect http options but get ".concat(typeof t));
                        this.send(r, t || {}, n)
                    }
                }, t
            }(ka),
            eu = function() {
                function e() {
                    this.config = {}
                }
                return e.prototype.withToken = function(e) {
                    return this.config.token = e, this
                }, e.prototype.withEndpoint = function(e) {
                    return this.config.endpoint = e, this
                }, e.prototype.withService = function(e) {
                    return this.config.service = e, this
                }, e.prototype.onIdentityUpdate = function(e) {
                    return this.config.identityUpdateHandler = e, this
                }, e.prototype.onChatMessage = function(e) {
                    return this.config.chatMessageHandler = e, this
                }, e.prototype.onPartyUpdate = function(e) {
                    return this.config.partyUpdateHandler = e, this
                }, e.prototype.onMatchmakerLobbyJoin = function(e) {
                    return this.config.matchmakerLobbyJoinHandler = e, this
                }, e.prototype.onNotification = function(e) {
                    return this.config.notificationHandler = e, this
                }, e.prototype.onError = function(e) {
                    return this.config.errorHandler = e, this
                }, e.prototype.build = function() {
                    return be(this, void 0, void 0, (function() {
                        var e, t, n, r, i;
                        return we(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return void 0 !== this.config.service ? [3, 2] : [4, new Qc({
                                        endpoint: this.config.endpoint,
                                        token: this.config.token
                                    }).setupIdentity({
                                        existingIdentityToken: ru()
                                    })];
                                case 1:
                                    t = o.sent(), n = t.identityToken, r = t.gameId, iu(n), this.config.token = n, e = r, this.config.service = new Qc({
                                        endpoint: this.config.endpoint,
                                        token: n
                                    }), o.label = 2;
                                case 2:
                                    return (i = new tu(this.config, e)).initiate(), [2, i]
                            }
                        }))
                    }))
                }, e
            }(),
            tu = function() {
                function e(e, t) {
                    this.service = e.service, this.token = e.token, this.endpoint = e.endpoint, this.gameId = t, this.identityUpdateHandler = e.identityUpdateHandler, this.chatMessageHandler = e.chatMessageHandler, this.partyUpdateHandler = e.partyUpdateHandler, this.matchmakerLobbyJoinHandler = e.matchmakerLobbyJoinHandler, this.errorHandler = e.errorHandler
                }
                return e.prototype.initiate = function() {
                    var e = this;
                    void 0 !== this.identityUpdateHandler && this.service.getIdentitySelfProfile({}).then((function(t) {
                        e.identityUpdateHandler(t.identity)
                    })).catch(this.handleError.bind(this)), void 0 === this.chatMessageHandler && void 0 === this.matchmakerLobbyJoinHandler && void 0 === this.partyUpdateHandler && void 0 === this.identityUpdateHandler || (this.eventStream && this.eventStream.cancel(), this.eventStream = new xa((function(t, n) {
                        return be(e, void 0, void 0, (function() {
                            return we(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.service.watchEvents({
                                            watchIndex: n
                                        }, {
                                            abortSignal: t
                                        })];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            }))
                        }))
                    })), this.eventStream.onMessage((function(t) {
                        var n, r;
                        try {
                            for (var i = _e(t.events), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value;
                                a.notification && void 0 !== e.notificationHandler && e.notificationHandler(a.notification, a.kind), a.kind.chatMessage ? void 0 !== e.chatMessageHandler && e.chatMessageHandler(a.kind.chatMessage.thread) : a.kind.matchmakerLobbyJoin ? void 0 !== e.matchmakerLobbyJoinHandler && e.matchmakerLobbyJoinHandler(a.kind.matchmakerLobbyJoin.lobby) : a.kind.partyUpdate ? void 0 !== e.partyUpdateHandler && e.partyUpdateHandler(a.kind.partyUpdate.party) : a.kind.identityUpdate && void 0 !== e.identityUpdateHandler && e.identityUpdateHandler(a.kind.identityUpdate.identity)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    })), this.eventStream.onError(this.handleError.bind(this)))
                }, e.prototype.switchIdentity = function(e) {
                    this.destroy(), iu(e), this.token = e, this.service = new Qc({
                        endpoint: this.endpoint,
                        token: e
                    }), this.initiate()
                }, e.prototype.logout = function() {
                    "undefined" != typeof window && window.localStorage.removeItem("rivet:token")
                }, e.prototype.startGameLink = function(e, t) {
                    return be(this, void 0, void 0, (function() {
                        var n, r, i, o = this;
                        return we(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.service.prepareGameLink({})];
                                case 1:
                                    return n = a.sent(), [3, 3];
                                case 2:
                                    return r = a.sent(), (null != t ? t : this.handleError)(r), [2];
                                case 3:
                                    return this.existingGameLinkingContext && this.existingGameLinkingContext.cancel(), i = new xa((function(e, t) {
                                        return be(o, void 0, void 0, (function() {
                                            return we(this, (function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return [4, this.service.getGameLink({
                                                            identityLinkToken: n.identityLinkToken,
                                                            watchIndex: t
                                                        }, {
                                                            abortSignal: e
                                                        })];
                                                    case 1:
                                                        return [2, r.sent()]
                                                }
                                            }))
                                        }))
                                    })), i.onMessage((function(t) {
                                        t.status != vo.COMPLETE && t.status != vo.CANCELLED || (i.cancel(), t.status == vo.COMPLETE && o.switchIdentity(t.newIdentity.identityToken), e(t))
                                    })), i.onError(null != t ? t : this.handleError.bind(this)), [2, new nu(n, i)]
                            }
                        }))
                    }))
                }, e.prototype.destroy = function() {
                    this.eventStream && this.eventStream.cancel(), this.existingGameLinkingContext && this.existingGameLinkingContext.cancel()
                }, e.prototype.handleError = function(e) {
                    void 0 !== this.errorHandler ? this.errorHandler(e) : console.error(e)
                }, e
            }(),
            nu = function() {
                function e(e, t) {
                    this.response = e, this.gameLinkStream = t
                }
                return e.prototype.cancel = function() {
                    this.gameLinkStream.cancel()
                }, e
            }();

        function ru() {
            var e;
            if ("undefined" != typeof window) return null !== (e = window.localStorage.getItem("rivet:token")) && void 0 !== e ? e : void 0
        }

        function iu(e) {
            "undefined" != typeof window && window.localStorage.setItem("rivet:token", e)
        }

        function ou(e, t, n) {
            return e ? t() : null == n ? void 0 : n()
        }
        var au, su = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const cu = [{
                id: "local-lcl",
                name: "Local",
                icon: n(5911)
            }, {
                id: "lnd-sfo",
                name: "San Francisco",
                icon: n(9198)
            }, {
                id: "lnd-fra",
                name: "Frankfurt",
                icon: n(2987)
            }, {
                id: "lnd-atl",
                name: "Atlanta",
                icon: n(9198)
            }, {
                id: "lnd-syd",
                name: "Sydney",
                icon: n(5883)
            }, {
                id: "lnd-tok",
                name: "Tokyo",
                icon: n(8439)
            }],
            uu = s`
:host {
    pointer-events: none;
    user-select: none;
}

.screen {
    position: fixed;
    left: 0;
    right: 0;
    transform-origin: top left;
}

#debug-actions {
    position: absolute;
    left: 20px;
    top: 20px;
    width: calc(75px * 3);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    opacity: 0.5;
}

#debug-actions d-button {
    width: 75px;
    height: 50px;
}
`;
        let du = au = class extends ie {
            constructor() {
                let e;
                super(), this.screen = "loading", this.screenHistory = [], this.loadingTitle = "Loading...", this.loadingSubtitle = "", this.loadingError = !1, this.username = "", this.spawnLevel = 0, this.selectedGameMode = "", this.gameModes = [], this.selectedRegion = "", this.regions = [], this.playerAttributes = {
                    pointsLeft: 0,
                    attributes: []
                }, this.uiScreenSizeZoom = 1, this.screenSizeZoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.insetWidth = window.innerWidth, this.insetHeight = window.innerHeight, this.disconnected = !1, this.debugUi = !1, this.reportedIdentities = new Set, this.lastFriendUpdate = Date.now(), this.players = [], this.uiHidden = !1, this.managerCtx = {
                    friends: [],
                    notifications: [],
                    players: new Map,
                    requestingPlayers: !1,
                    linkStatus: vo.INCOMPLETE,
                    linkExpired: !1
                }, this.matchmaker = new va({
                    token: null
                }), this.matchmaker.listRegions({}).then((e => {
                    this.regions = e.regions.map((e => cu.find((t => e.regionId == t.id)))).filter((e => !!e))
                })).catch((e => {
                    console.error("Failed to list regions", e), window.input && window.input.findLobbyFailed("Whoops, something may be wrong with our servers!")
                })), this.identityConnectedPromise = new Promise((t => e = t)), (new eu).withEndpoint("https://identity.api.rivet.gg/v1").withToken(null).onIdentityUpdate((t => {
                    var n;
                    console.log("Identity connected", t), this.managerCtx.identity = t, this.requestUpdate("managerCtx"), this.username || (this.username = null === (n = this.managerCtx.identity) || void 0 === n ? void 0 : n.displayName), e()
                })).onNotification(((e, t) => {
                    this.managerCtx.notifications.push({
                        notification: e,
                        eventKind: t
                    })
                })).onError((e => {
                    console.error(e)
                })).build().then((e => {
                    this.identityManager = e, this.beaconIdentityService = new Qc({
                        endpoint: this.identityManager.endpoint,
                        token: this.identityManager.token,
                        requestHandler: Ea(this.identityManager.token, {
                            keepalive: !0
                        })
                    }), this.activitiesStream && this.activitiesStream.cancel(), this.activitiesStream = new xa((async (e, t) => await this.identityManager.service.listActivities({
                        watchIndex: t
                    }, {
                        abortSignal: e
                    }))), this.activitiesStream.onMessage((e => {
                        this.managerCtx.friends = e.identities, this.lastFriendUpdate = Date.now()
                    })), this.activitiesStream.onError((e => {
                        console.warn("Activities stream error", e)
                    }))
                })), document.addEventListener("visibilitychange", (() => {
                    "hidden" == document.visibilityState ? this.onInactive() : "visible" == document.visibilityState && this.onActive()
                }), !1), window.addEventListener("pagehide", this.onInactive.bind(this), !1)
            }
            updated(e) {
                if (super.updated(e), e.has("screen") && (window.leftJoystick && window.rightJoystick && (window.leftJoystick.setVisible("game" == this.screen), window.rightJoystick.setVisible("game" == this.screen)), window.gameWrapper && ("game" != this.screen ? window.gameWrapper.showBannerAd("banner") : window.gameWrapper.hideBannerAd())), e.has("players") && !this.managerCtx.requestingPlayers) {
                    let e = new Set(this.players.filter((e => !this.managerCtx.players.has(e.identityId))));
                    e.size && (this.managerCtx.requestingPlayers = !0, this.identityManager.service.getIdentitySummaries({
                        identityIds: Array.from(e).map((e => e.identityId)).filter(Boolean)
                    }).then((e => {
                        for (let t of e.identities) this.managerCtx.players.set(t.identityId, t);
                        this.requestUpdate("managerCtx")
                    })).catch(console.error).finally((() => {
                        this.managerCtx.requestingPlayers = !1
                    })))
                }
                e.has("disconnected") && this.disconnected && this.onInactive()
            }
            willUpdate(e) {
                e.has("edgeInsets") && (this.edgeInsetsUnscaled = {
                    top: this.edgeInsets.top / this.uiScreenSizeZoom,
                    bottom: this.edgeInsets.bottom / this.uiScreenSizeZoom,
                    left: this.edgeInsets.left / this.uiScreenSizeZoom,
                    right: this.edgeInsets.right / this.uiScreenSizeZoom
                })
            }
            onActive() {
                this.lobbyId && ("ffa" == this.selectedGameMode || "maze" == this.selectedGameMode ? this.identityManager.service.setIdentityGameActivity({
                    gameActivity: {
                        message: "Playing Diep.io"
                    }
                }) : this.identityManager.service.setIdentityGameActivity({
                    gameActivity: {
                        message: "Playing Diep.io",
                        mutualMetadata: {
                            lobbyId: this.lobbyId,
                            gameMode: this.selectedGameMode,
                            region: this.selectedRegion
                        }
                    }
                }))
            }
            onInactive() {
                var e, t, n, r;
                this.beaconIdentityService && (null === (r = null === (n = null === (t = null === (e = this.managerCtx) || void 0 === e ? void 0 : e.identity) || void 0 === t ? void 0 : t.presence) || void 0 === n ? void 0 : n.gameActivity) || void 0 === r ? void 0 : r.game.gameId) == this.identityManager.gameId && this.beaconIdentityService.removeIdentityGameActivity({})
            }
            async onGameLink() {
                this.managerCtx.linkExpired = !1, this.gameLinkingContext = await this.identityManager.startGameLink((async e => {
                    this.managerCtx.linkStatus = e.status, e.status == vo.COMPLETE && window.input.sendIdentityToken(e.newIdentity.identityToken), this.requestUpdate()
                }), (e => {
                    "TOKEN_EXPIRED" == (null == e ? void 0 : e.code) && (this.managerCtx.linkExpired = !0, this.requestUpdate())
                }));
                let e = this.gameLinkingContext.response;
                this.managerCtx.linkStatus = vo.INCOMPLETE, this.managerCtx.identityLinkToken = e.identityLinkToken, this.managerCtx.identityLinkUrl = e.identityLinkUrl, window.open(e.identityLinkUrl, "_blank"), this.toggleScreen("link")
            }
            cancelGameLink() {
                console.log("canceled game link"), this.gameLinkingContext && this.gameLinkingContext.cancel()
            }
            toggleScreen(e) {
                this.screen == e ? (this.screen = this.screenHistory.pop(), "friends" != this.screen && "users" != this.screen && "report" != this.screen && document.querySelectorAll(".aa_holder").forEach((e => {
                    e.classList.remove("force_hide")
                }))) : (this.screenHistory.push(this.screen), this.screen = e, "friends" != this.screen && "users" != this.screen && "report" != this.screen || document.querySelectorAll(".aa_holder").forEach((e => {
                    e.classList.add("force_hide")
                })))
            }
            toggleReport(e) {
                "report" != this.screen && (this.reportingIdentityId = e), this.toggleScreen("report")
            }
            render() {
                if (this.uiHidden) return null;
                let e = pe({
                    position: "absolute",
                    transform: `scale(${this.uiScreenSizeZoom.toFixed(5)})`,
                    width: `${this.insetWidth.toFixed(2)}px`,
                    height: `${this.insetHeight.toFixed(2)}px`,
                    left: `${this.edgeInsets.left.toFixed(2)}px`,
                    top: `${this.edgeInsets.top.toFixed(2)}px`
                });
                return N`
        ${he(this.screen,[["loading",()=>N`<d-loading
                        class="screen"
                        style=${e}
                        .loadingTitle=${this.loadingTitle}
                        .loadingSubtitle=${this.loadingSubtitle}
                        .loadingError=${this.loadingError}
                    ></d-loading>`],["captcha",()=>N`<d-captcha
                        class="screen"
                        style=${e}
                        .sitekey=${this.captchaSiteKey}
                        .callback=${this.captchaCallback}
                    ></d-captcha>`],["home",()=>N`<d-home
                        class="screen"
                        style=${e}
                        .identityManager=${this.identityManager}
                        .managerCtx=${this.managerCtx}
                        .username=${this.username}
                        .spawnLevel=${this.spawnLevel}
                        .selectedGameMode=${this.selectedGameMode}
                        .gameModes=${this.gameModes}
                        .selectedRegion=${this.selectedRegion}
                        .regions=${this.regions}
                        @game-link=${this.onGameLink.bind(this)}
                    ></d-home>`],["game",()=>N`<d-game
                        class="screen"
                        style=${e}
                        .managerCtx=${this.managerCtx}
                        .playerCount=${this.players.length}
                        .selectedGameMode=${this.selectedGameMode}
                        .playerAttributes=${this.playerAttributes}
                        .screenSizeZoom=${au.singleton.screenSizeZoom}
                    ></d-game>`],["stats",()=>N`<d-stats
                        .identityManager=${this.identityManager}
                        .managerCtx=${this.managerCtx}
                        class="screen"
                        style=${e}
                    ></d-stats>`],["report",()=>N`<d-report
                        .identityManager=${this.identityManager}
                        .reportingIdentity=${this.managerCtx.players.get(this.reportingIdentityId)}
                    ></d-report>`],["link",()=>N`<d-link
                        .identityManager=${this.identityManager}
                        .managerCtx=${this.managerCtx}
                        .linkStatus=${this.managerCtx.linkStatus}
                        .expired=${this.managerCtx.linkExpired}
                    ></d-link>`],["friends",()=>N`<d-friends
                        .identityManager=${this.identityManager}
                        .managerCtx=${this.managerCtx}
                        .lastFriendUpdate=${this.lastFriendUpdate}
                        .gameModes=${this.gameModes}
                    ></d-friends>`],["users",()=>N`<d-users
                        .identityManager=${this.identityManager}
                        .players=${this.players}
                        .fetchedPlayerCount=${this.managerCtx.players.size}
                        .managerCtx=${this.managerCtx}
                    ></d-users>`]])}
        ${ou(this.debugUi,(()=>N`<div id="debug-actions">
                <d-button
                    .trigger=${()=>window.gameWrapper.showBannerAd("banner")}
                    >Show Banner</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.hideBannerAd()}
                    >Hide Banner</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.showInterstitialAd("interstitial")}
                    >Show Interstitial</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.showRewardAd("reward")}
                    >Show Reward</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.hapticFeedback()}
                    >Haptic</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.shareContent({text:"Hello, world!"})}
                    >Share</d-button
                >
                <d-button
                    .trigger=${()=>window.gameWrapper.promptRating("Rate?")}
                    >Prompt Rating</d-button
                >
            </div>`))}
    `
            }
            findLobby(e) {
                this.handleFindPromise((t => this.matchmaker.findLobby({
                    gameModes: [e],
                    captcha: t
                })))
            }
            findLobbyWithRegion(e, t) {
                this.handleFindPromise((n => this.matchmaker.findLobby({
                    gameModes: [e],
                    regions: [t],
                    captcha: n
                })))
            }
            joinLobby(e, t) {
                this.handleFindPromise((n => (t && "string" == typeof t && this.gameModes.some((e => e.id == t)) && (this.selectedGameMode = localStorage.gamemode = t), this.matchmaker.joinLobby({
                    lobbyId: e,
                    captcha: n
                }))))
            }
            handleFindPromise(e, t) {
                this.screen = "loading", this.loadingTitle = "Loading...", this.loadingSubtitle = "", this.loadingError = !1, e(t).then((async e => {
                    await this.identityConnectedPromise;
                    let t = e.lobby;
                    if (e.lobby) {
                        let e = t.ports.default;
                        this.host = e.host, this.lobbyId = t.lobbyId, this.onActive(), window.input.connectLobby(t.lobbyId, t.region.regionId, t.player.token, this.identityManager.token, this.host, e.isTls)
                    } else console.error("Failed to find lobby, no lobby in response")
                })).catch((t => {
                    if ("CAPTCHA_CAPTCHA_REQUIRED" == t.code) this.screen = "captcha", this.captchaSiteKey = t.metadata.hcaptcha.site_id, this.captchaCallback = t => {
                        console.log("Received captcha response", t), this.handleFindPromise(e, {
                            hcaptcha: {
                                clientResponse: t
                            }
                        })
                    };
                    else {
                        console.error("Failed to find lobby", t);
                        let e = "Whoops, something may be wrong with our servers!";
                        t.code && (e += `\n(${t.code.toLowerCase()})`), window.input.findLobbyFailed(e)
                    }
                }))
            }
            shouldFirePrimary() {
                return !!this.game && this.game.firingPrimary
            }
            shouldFireSecondary() {
                return !!this.game && this.game.firingSecondary
            }
        };

        function lu(e, t, n) {
            return Math.min(Math.max(e, n), t)
        }
        du.styles = uu, su([ce()], du.prototype, "screen", void 0), su([ce()], du.prototype, "loadingTitle", void 0), su([ce()], du.prototype, "loadingSubtitle", void 0), su([ce()], du.prototype, "loadingError", void 0), su([ce()], du.prototype, "captchaSiteKey", void 0), su([ce()], du.prototype, "username", void 0), su([ce()], du.prototype, "spawnLevel", void 0), su([ce()], du.prototype, "selectedGameMode", void 0), su([ce()], du.prototype, "gameModes", void 0), su([ce()], du.prototype, "selectedRegion", void 0), su([ce()], du.prototype, "regions", void 0), su([ce()], du.prototype, "playerAttributes", void 0), su([ce()], du.prototype, "uiScreenSizeZoom", void 0), su([ce()], du.prototype, "screenSizeZoom", void 0), su([ce()], du.prototype, "width", void 0), su([ce()], du.prototype, "height", void 0), su([ce()], du.prototype, "insetWidth", void 0), su([ce()], du.prototype, "insetHeight", void 0), su([ce()], du.prototype, "disconnected", void 0), su([ce({
            hasChanged(e, t) {
                return !t || e.top != t.top || e.bottom != t.bottom || e.left != t.left || e.right != t.right
            }
        })], du.prototype, "edgeInsets", void 0), su([ce()], du.prototype, "edgeInsetsUnscaled", void 0), su([ce()], du.prototype, "debugUi", void 0), su([ue("d-game")], du.prototype, "game", void 0), su([ce({
            type: Number
        })], du.prototype, "lastFriendUpdate", void 0), su([ce()], du.prototype, "players", void 0), su([ce()], du.prototype, "uiHidden", void 0), su([ce()], du.prototype, "managerCtx", void 0), du = au = su([ae("d-base")], du);
        class fu extends Error {
            constructor(e) {
                super(`Failed to parse color: "${e}"`)
            }
        }
        var pu = fu;

        function hu(e) {
            if ("string" != typeof e) throw new pu(e);
            if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
            let t = e.trim();
            t = Su.test(e) ? function(e) {
                const t = e.toLowerCase().trim(),
                    n = mu[function(e) {
                        let t = 5381,
                            n = e.length;
                        for (; n;) t = 33 * t ^ e.charCodeAt(--n);
                        return (t >>> 0) % 2341
                    }(t)];
                if (!n) throw new pu(e);
                return `#${n}`
            }(e) : e;
            const n = gu.exec(t);
            if (n) {
                const e = Array.from(n).slice(1);
                return [...e.slice(0, 3).map((e => parseInt(yu(e, 2), 16))), parseInt(yu(e[3] || "f", 2), 16) / 255]
            }
            const r = bu.exec(t);
            if (r) {
                const e = Array.from(r).slice(1);
                return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
            }
            const i = wu.exec(t);
            if (i) {
                const e = Array.from(i).slice(1);
                return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
            }
            const o = _u.exec(t);
            if (o) {
                const [t, n, r, i] = Array.from(o).slice(1).map(parseFloat);
                if (lu(0, 100, n) !== n) throw new pu(e);
                if (lu(0, 100, r) !== r) throw new pu(e);
                return [...Eu(t, n, r), i || 1]
            }
            throw new pu(e)
        }
        const vu = e => parseInt(e.replace(/_/g, ""), 36),
            mu = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
                const n = vu(t.substring(0, 3)),
                    r = vu(t.substring(3)).toString(16);
                let i = "";
                for (let e = 0; e < 6 - r.length; e++) i += "0";
                return e[n] = `${i}${r}`, e
            }), {}),
            yu = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
            gu = new RegExp(`^#${yu("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
            bu = new RegExp(`^#${yu("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
            wu = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${yu(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
            _u = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
            Su = /^[a-z]+$/i,
            xu = e => Math.round(255 * e),
            Eu = (e, t, n) => {
                let r = n / 100;
                if (0 === t) return [r, r, r].map(xu);
                const i = (e % 360 + 360) % 360 / 60,
                    o = (1 - Math.abs(2 * r - 1)) * (t / 100),
                    a = o * (1 - Math.abs(i % 2 - 1));
                let s = 0,
                    c = 0,
                    u = 0;
                i >= 0 && i < 1 ? (s = o, c = a) : i >= 1 && i < 2 ? (s = a, c = o) : i >= 2 && i < 3 ? (c = o, u = a) : i >= 3 && i < 4 ? (c = a, u = o) : i >= 4 && i < 5 ? (s = a, u = o) : i >= 5 && i < 6 && (s = o, u = a);
                const d = r - o / 2;
                return [s + d, c + d, u + d].map(xu)
            };

        function ku(e, t, n) {
            const r = (e, t) => 3 === t ? e : e / 255,
                [i, o, a, s] = hu(e).map(r),
                [c, u, d, l] = hu(t).map(r),
                f = l - s,
                p = 2 * n - 1,
                h = ((p * f == -1 ? p : p + f / (1 + p * f)) + 1) / 2,
                v = 1 - h;
            return m = 255 * (o * v + u * h), y = 255 * (a * v + d * h), g = l * n + s * (1 - n), `rgba(${lu(0,255,255*(i*v+c*h)).toFixed()}, ${lu(0,255,m).toFixed()}, ${lu(0,255,y).toFixed()}, ${parseFloat(lu(0,1,g).toFixed(3))})`;
            var m, y, g
        }
        const Lu = le(class extends fe {
                constructor(e) {
                    var t;
                    if (super(e), 1 !== e.type || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
                }
                update(e, [t]) {
                    var n, r;
                    if (void 0 === this.nt) {
                        this.nt = new Set, void 0 !== e.strings && (this.st = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
                        for (const e in t) t[e] && !(null === (n = this.st) || void 0 === n ? void 0 : n.has(e)) && this.nt.add(e);
                        return this.render(t)
                    }
                    const i = e.element.classList;
                    this.nt.forEach((e => {
                        e in t || (i.remove(e), this.nt.delete(e))
                    }));
                    for (const e in t) {
                        const n = !!t[e];
                        n === this.nt.has(e) || (null === (r = this.st) || void 0 === r ? void 0 : r.has(e)) || (n ? (i.add(e), this.nt.add(e)) : (i.remove(e), this.nt.delete(e)))
                    }
                    return j
                }
            }),
            Cu = ["#43fff9", "#82ff43", "#ff4343", "#FFDE43", "#437fff", "#8543ff", "#f943ff", "#fcad76"];

        function Au(e) {
            return e < 0 ? "#777777" : Cu[e % Cu.length]
        }

        function Mu(e) {
            let t = "";
            for (let n = 1; n <= e; n++)
                for (let e = -n; e <= n; e++)
                    for (let r = -n; r <= n; r++) 0 == e && 0 == r || (t.length > 0 && (t += ", "), t += `${e}px ${r}px 0 black`);
            return t
        }

        function $u(e) {
            return a(Mu(e))
        }
        var Pu = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Iu = s`
#base {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    pointer-events: var(--pointer-events);
    cursor: pointer;

    overflow: hidden;
}

#base.stylized {
    background: var(--bg);
    background-size: cover;
    background-position: center;

    border: var(--border) solid #444444;
    border-radius: var(--border);

    text-shadow: var(--text-border);
}

a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    color: inherit;
}

#base.stylized:hover {
    background: var(--bg-hover);
    background-size: cover;
    background-position: center;
}

#base.stylized.active,
#base.stylized.pressed {
    background: var(--bg-active);
    background-size: cover;
    background-position: center;
}

#highlight {
    position: absolute;
    top: 58%;
    bottom: 0;
    left: 0;
    right: 0;

    background: black;
    opacity: var(--highlight-opacity, 0.2);
}

#base.active #highlight,
#base.pressed #highlight {
    top: 0;
    bottom: 42%;
}

#content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;

    padding: var(
        --padding,
        var(--padding-top) var(--padding-right) var(--padding-bottom)
            var(--padding-left)
    );
}

#wipe {
    position: absolute;
    left: 0;
    height: 100%;
    width: 35%;
    left: 0;
    transform: translate(-170%) skew(-30deg);
    transform-origin: top-right;

    background: white;
    opacity: 0.3;
    z-index: 2;

    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}

#base:hover #wipe {
    animation-name: wipe;
}

@keyframes wipe {
    0% {
        left: 0;
        transform: translate(-170%) skew(-30deg);
    }
    100% {
        left: 100%;
        transform: translate(50%) skew(-30deg);
        opacity: 0;
    }
}
`;
        let Ru = class extends ie {
            constructor() {
                super(...arguments), this.active = !1, this.pressed = !1, this.disabled = !1, this.ghostDisabled = !1, this.bg = Au(0), this.border = 5, this.textBorder = 1, this.plain = !1
            }
            onPointerDown(e) {
                0 === e.button && (!window.gameWrapper || this.disabled || this.ghostDisabled || window.gameWrapper.hapticFeedback("light"), !this.active && this.change && this.change(!0), this.active = !0)
            }
            onPointerUp(e) {
                0 === e.button && (this.active && this.trigger && this.trigger(), this.active && this.change && this.change(!1), this.href && "mouse" != e.pointerType && open(this.href, "_blank"), this.active = !1, e.preventDefault())
            }
            onPointerCancel(e) {
                this.active && this.change && this.change(!1), this.active = !1
            }
            render() {
                let e = !this.plain,
                    t = ku(this.bg, "white", .4),
                    n = this.bgSrc && `url("${this.bgSrc}")`,
                    r = Lu({
                        stylized: e,
                        active: this.active,
                        pressed: this.pressed
                    }),
                    i = pe({
                        "--pointer-events": this.disabled || this.ghostDisabled ? "none" : "all",
                        "--border": `${this.border}px`,
                        "--bg": null != n ? n : t,
                        "--bg-hover": null != n ? n : ku(t, "white", .2),
                        "--bg-active": null != n ? n : ku(t, "black", .2),
                        "--text-border": Mu(this.textBorder)
                    }),
                    o = N`
        ${ou(e,(()=>N`
                <div id="highlight"></div>
                <div id="wipe"></div>
            `))}
        <div id="content">
            <slot></slot>
        </div>
    `;
                return this.href ? N`<a
            id="base"
            class=${r}
            style=${i}
            href=${this.href}
            target="_blank"
            @pointerdown=${this.onPointerDown.bind(this)}
            @pointerup=${this.onPointerUp.bind(this)}
            @pointercancel=${this.onPointerCancel.bind(this)}
            @pointerleave=${this.onPointerCancel.bind(this)}
            >${o}</a
        >` : N`<div
            id="base"
            class=${r}
            style=${i}
            @pointerdown=${this.onPointerDown.bind(this)}
            @pointerup=${this.onPointerUp.bind(this)}
            @pointercancel=${this.onPointerCancel.bind(this)}
            @pointerleave=${this.onPointerCancel.bind(this)}
        >
            ${o}
        </div>`
            }
        };
        Ru.styles = Iu, Pu([ce()], Ru.prototype, "trigger", void 0), Pu([ce()], Ru.prototype, "change", void 0), Pu([ce()], Ru.prototype, "href", void 0), Pu([ce()], Ru.prototype, "active", void 0), Pu([ce()], Ru.prototype, "pressed", void 0), Pu([ce({
            type: Boolean,
            attribute: "disabled"
        })], Ru.prototype, "disabled", void 0), Pu([ce({
            type: Boolean,
            attribute: "ghost-disabled"
        })], Ru.prototype, "ghostDisabled", void 0), Pu([ce()], Ru.prototype, "bg", void 0), Pu([ce({
            attribute: "bg-src"
        })], Ru.prototype, "bgSrc", void 0), Pu([ce()], Ru.prototype, "border", void 0), Pu([ce({
            attribute: "text-border"
        })], Ru.prototype, "textBorder", void 0), Pu([ce({
            type: Boolean,
            attribute: "plain"
        })], Ru.prototype, "plain", void 0), Ru = Pu([ae("d-button")], Ru);
        class Fu extends fe {
            constructor(e) {
                if (super(e), this.it = U, 2 !== e.type) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
            }
            render(e) {
                if (e === U || null == e) return this._t = void 0, this.it = e;
                if (e === j) return e;
                if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
                if (e === this.it) return this._t;
                this.it = e;
                const t = [e];
                return t.raw = t, this._t = {
                    _$litType$: this.constructor.resultType,
                    strings: t,
                    values: []
                }
            }
        }
        Fu.directiveName = "unsafeHTML", Fu.resultType = 1;
        const Tu = le(Fu);
        var zu = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Ou = /(.*)<path d="(.*)"\/>(.*)/gm,
            Nu = s`
#icon {
    width: var(--size);
    height: var(--size);
}

#icon svg {
    overflow: visible;
    width: var(--size);
    height: var(--size);
}

#icon svg #bg {
    stroke: black;
    stroke-width: var(--stroke-width);
}

#icon svg #fg {
    fill: white;
}
`;
        let ju = class extends ie {
            constructor() {
                super(...arguments), this.icon = n(5570), this.size = 16, this.border = 1
            }
            render() {
                let e = this.icon.replace(Ou, '$1<path id="bg" d="$2"/><path id="fg" d="$2"/>$3'),
                    t = 2 * this.border / this.size * 512,
                    n = pe({
                        "--size": `${this.size.toFixed(2)}px`,
                        "--stroke-width": `${t.toFixed(2)}px`
                    });
                return N`<div id="icon" style=${n}>${Tu(e)}</div>`
            }
        };
        ju.styles = Nu, zu([ce()], ju.prototype, "icon", void 0), zu([ce({
            type: Number
        })], ju.prototype, "size", void 0), zu([ce({
            type: Number
        })], ju.prototype, "border", void 0), ju = zu([ae("d-icon")], ju);
        var Uu = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const qu = s`
:host {
    font-size: 32px;
}

#base {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;
    pointer-events: all;
}

#content {
    flex: 1 1 auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0;
}

#content #link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

#content #avatar {
    width: var(--avatar-size, 48px);
    height: var(--avatar-size, 48px);
    margin-right: calc(var(--avatar-size, 48px) * 0.2);
    border-radius: 20%;
}

#content #description {
    display: flex;
    flex-direction: column;
}

#content #description #name {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    overflow-wrap: anywhere;

    color: var(--color, #ececec);
    font-weight: 600;
    font-size: inherit;
    text-shadow: var(--text-border);
}

#content #nickname {
    margin: 0;
    overflow-wrap: anywhere;

    color: var(--color, #ececec);
    font-weight: 600;
    font-size: 0.7em;
    text-shadow: var(--text-border);
}

#base.no-wrap #content #description #name {
    /*TODO: Figure out how to overflow with flexbox instead*/
    display: block;
    overflow: hidden;
    min-width: 0;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#content #description #name #number {
    flex: 0 0 auto;
    opacity: 0.8;
}

[name='actions']::slotted(*) {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 11px;
}
`;
        let Bu = class extends ie {
            constructor() {
                super(...arguments), this.noWrap = !1
            }
            render() {
                let e = ("0000" + this.identity.accountNumber).slice(-4),
                    t = Lu({
                        "no-wrap": this.noWrap
                    });
                return N`<div id="base" class=${t}>
        <div id="content">
            <a
                id="link"
                href=${this.identity.external.profile}
                target="_blank"
            ></a>
            <img id="avatar" src=${this.identity.avatarUrl} />
            <div id="description">
                <h1 id="name">
                    <span>${this.identity.displayName}</span
                    ><span id="number">#${e}</span>
                </h1>
                ${ou(""!==this.nickname,(()=>ou(this.nickname&&this.nickname.trim()!=this.identity.displayName.trim(),(()=>N`<h2 id="nickname">
                                    ${this.nickname}
                                </h2>`))),(()=>N`<h2 id="nickname">An unnamed tank</h2>`))}
            </div>
        </div>
        <slot name="actions"></slot>
    </div>`
            }
        };
        Bu.styles = qu, Uu([ce({
            type: Object
        })], Bu.prototype, "identity", void 0), Uu([ce({
            type: Boolean,
            attribute: "no-wrap"
        })], Bu.prototype, "noWrap", void 0), Uu([ce({
            type: String,
            attribute: "nickname"
        })], Bu.prototype, "nickname", void 0), Bu = Uu([ae("d-identity-tile")], Bu);
        class Hu {
            constructor(e, t, n, r) {
                this.baseElement = e, this.buttonElement = t, this.dragStart = null, this.touchId = null, this.active = !1, this.value = {
                    x: 0,
                    y: 0
                };
                let i = this;

                function o(e) {
                    i.active = !0, t.style.transition = "0s", e.preventDefault(), e.changedTouches ? i.dragStart = {
                        x: e.changedTouches[0].clientX,
                        y: e.changedTouches[0].clientY
                    } : i.dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }, e.changedTouches && (i.touchId = e.changedTouches[0].identifier)
                }

                function a(e) {
                    if (!i.active) return;
                    e.preventDefault();
                    let o = null;
                    if (e.changedTouches) {
                        for (let t = 0; t < e.changedTouches.length; t++) i.touchId == e.changedTouches[t].identifier && (o = t, e.clientX = e.changedTouches[t].clientX, e.clientY = e.changedTouches[t].clientY);
                        if (null == o) return
                    }
                    const a = e.clientX - i.dragStart.x,
                        s = e.clientY - i.dragStart.y,
                        c = Math.atan2(s, a),
                        u = Math.min(n, Math.hypot(a, s)),
                        d = u * Math.cos(c),
                        l = u * Math.sin(c);
                    t.style.transform = `translate3d(${d}px, ${l}px, 0px)`;
                    const f = u < r ? 0 : n / (n - r) * (u - r),
                        p = f * Math.cos(c),
                        h = f * Math.sin(c),
                        v = parseFloat((p / n).toFixed(4)),
                        m = parseFloat((h / n).toFixed(4));
                    i.value = {
                        x: v,
                        y: m
                    }
                }

                function s(e) {
                    i.active && (e.preventDefault(), e.changedTouches && i.touchId != e.changedTouches[0].identifier || (t.style.transition = ".2s", t.style.transform = "translate3d(0px, 0px, 0px)", i.value = {
                        x: 0,
                        y: 0
                    }, i.touchId = null, i.active = !1))
                }
                t.addEventListener("mousedown", o), t.addEventListener("touchstart", o), document.addEventListener("mousemove", a, {
                    passive: !1
                }), document.addEventListener("touchmove", a, {
                    passive: !1
                }), document.addEventListener("mouseup", s), document.addEventListener("touchend", s)
            }
            setVisible(e) {
                this.baseElement.style.display = e ? "block" : "none"
            }
        }

        function Du() {
            return !/android/i.test(navigator.userAgent)
        }
        var Wu = (window.localStorage.retinaResolution ? "true" == window.localStorage.retinaResolution : Du()) ? window.devicePixelRatio : 1,
            Gu = document.getElementById("canvas"),
            Vu = !1;

        function Ju(e) {
            e.preventDefault && e.preventDefault()
        }

        function Ku(e) {
            Ju(e = e || window.event), window.input && window.input.wheel(e.wheelDelta / -120 || e.detail || 0)
        }

        function Yu() {
            window.input && window.input.flushInputHooks && window.input.flushInputHooks()
        }
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", Ku, !1) : document.body.onmousewheel = Ku;
        var Xu = null;
        Gu.ontouchstart = function(e) {
            if (Yu(), Ju(e), window.input)
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var n = e.changedTouches[t];
                    null != Xu && n.identifier != Xu || (Xu = n.identifier, window.input.mouse(n.clientX * Wu, n.clientY * Wu), window.input.keyDown(1))
                }
        }, Gu.ontouchmove = function(e) {
            if (Ju(e), window.input)
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var n = e.changedTouches[t];
                    n.identifier == Xu && window.input.mouse(n.clientX * Wu, n.clientY * Wu)
                }
        }, Gu.ontouchend = Gu.ontouchcancel = function(e) {
            if (Yu(), Ju(e), window.input)
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var n = e.changedTouches[t];
                    n.identifier == Xu && (Xu = null, window.input.mouse(n.clientX * Wu, n.clientY * Wu), window.input.keyUp(1))
                }
        }, Gu.onmousemove = function(e) {
            e = e || window.event, window.input && window.input.mouse(e.clientX * Wu, e.clientY * Wu)
        }, Gu.onmousedown = function(e) {
            Yu(), e = e || window.event, window.input && (Ju(e), e.which || void 0 === e.button || (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), e.which >= 1 && e.which <= 3 && window.input.keyDown(e.which))
        }, Gu.onmouseup = function(e) {
            Yu(), e = e || window.event, window.input && (Ju(e), e.which || void 0 === e.button || (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), e.which >= 1 && e.which <= 3 && window.input.keyUp(e.which))
        }, window.onkeydown = function(e) {
            Yu(), e = e || window.event, window.input && (e.keyCode >= 112 && e.keyCode <= 130 && 113 != e.keyCode || (window.input.keyDown(e.keyCode), 9 == e.keyCode && Ju(e), Qu() || e.ctrlKey || e.metaKey || Ju(e)))
        }, window.onkeyup = function(e) {
            Yu(), e = e || window.event, window.input && (e.keyCode >= 112 && e.keyCode <= 130 && 113 != e.keyCode || (window.input.keyUp(e.keyCode), 9 == e.keyCode && Ju(e), Qu() || e.ctrlKey || e.metaKey || Ju(e)))
        }, Gu.onclick = window.onclick = function(e) {
            Yu()
        }, Gu.ondragstart = function(e) {
            Ju(e = e || window.event)
        }, window.onblur = function(e) {
            e = e || window.event, window.input && window.input.blur()
        }, Gu.oncontextmenu = function(e) {
            e = e || window.event, window.input && window.input.prevent_right_click && !window.input.prevent_right_click() || Ju(e)
        };
        let Zu = !1;

        function Qu() {
            return Vu || "D-BASE" == document.activeElement.tagName.toUpperCase()
        }

        function ed() {
            Gu.width = window.innerWidth * Wu, Gu.height = window.innerHeight * Wu
        }
        document.body.addEventListener("touchstart", (() => {
            console.log("Received initial touch"), Zu = !0, nd()
        }), {
            passive: !0,
            once: !0
        }), window.isUsingTouchDevice = function() {
            const e = window.navigator.userAgent.toLowerCase();
            return !!window.gameWrapper || Zu || e.match(/(android)/) || e.match(/(iemobile)/) || e.match(/iphone/i) || e.match(/ipad/i) || e.match(/ipod/i) || e.match(/blackberry/i) || e.match(/bada/i)
        }, window.setTyping = function(e) {
            Vu = e
        }, window.scale = function(e) {
            return e * Wu
        }, window.unscale = function(e) {
            return e / Wu
        }, window.onerror = function(e, t, n, r, i) {
            if (window.onerror = null, i && (i = i.toString()), "undefined" != typeof Uint8Array && "undefined" != typeof WebSocket && "undefined" != typeof CanvasRenderingContext2D && document.createElement("canvas").getContext("2d") && (null == t || -1 != t.indexOf("//diep.io")) && !(null != t && -1 == t.indexOf(".js") || (null != t && setTimeout((function() {
                    alert("The game crashed, refreshing page to recover from error"), window.onbeforeunload = null, window.location.reload(!0)
                }), 1e3), null == i && 0 == n && 0 == r || null != i && -1 != i.indexOf("renoTransGloRef")))) {
                var o = JSON.stringify({
                    message: e,
                    source: t,
                    lineno: n,
                    colno: r,
                    error: i
                });
                console.log("Uncaught error: " + o)
            }
        }, window.onbeforeunload = function() {
            if (window.input && window.input.should_prevent_unload && window.input.should_prevent_unload()) return "Are you sure you wanna quit?"
        }, window.addEventListener("gamepadconnected", (function(e) {
            console.log("Gamepad connected: " + e.id)
        })), window.addEventListener("resize", ed), ed();
        let td = !1;

        function nd() {
            if (td) return;
            td = !0, document.addEventListener("touchmove", (e => e.preventDefault()), {
                passive: !1
            });
            const e = e => {
                const t = document.createElement("div"),
                    n = document.createElement("div");
                if (t.appendChild(n), document.body.appendChild(t), t.classList.add("diep-native"), t.style.position = "absolute", t.style.display = "none", t.style.bottom = "67px", t.style.width = "140px", t.style.height = "140px", t.style.backgroundColor = "rgba(0, 0, 0, .2)", t.style.borderRadius = "50%", t.style.pointerEvents = "none", t.style[e] = "67px", "right" === e) {
                    const r = 70,
                        i = (e, n) => {
                            const i = document.createElement("div");
                            i.style.position = "absolute", i.style.backgroundColor = "rgba(0, 0, 0, .15)", i.style.borderRadius = "20px";
                            const o = Math.round(.6 * r),
                                a = Math.round(.08 * r),
                                s = r - a / 2 + "px";
                            e ? (i.style.width = `${o}px`, i.style.height = `${a}px`, i.style.top = s) : (i.style.width = `${a}px`, i.style.height = `${o}px`, i.style.left = s), i.style[n] = `${Math.round(.1*r)}px`, t.appendChild(i)
                        };
                    i(!0, "left"), i(!0, "right"), i(!1, "top"), i(!1, "bottom");
                    const o = document.createElement("div"),
                        a = Math.round(14);
                    o.style.width = `${a}px`, o.style.height = `${a}px`, o.style.left = r - a / 2 + "px", o.style.top = r - a / 2 + "px", o.style.position = "absolute", o.style.backgroundColor = "rgba(0, 0, 0, .15)", o.style.borderRadius = "100%", t.appendChild(o), n.setAttribute("id", `${e}-joystick`), n.style.width = "74px", n.style.height = "74px", n.style.position = "absolute"
                }
                return n.setAttribute("id", `${e}-joystick`), n.style.pointerEvents = "all", n.style.width = "74px", n.style.height = "74px", n.style.position = "absolute", n.style.left = "33px", n.style.bottom = "33px", n.style.backgroundColor = "blue", n.style.backgroundColor = "rgba(0, 0, 0, .3)", n.style.borderRadius = "50%", new Hu(t, n, Math.round(1.8 * 37), 0)
            };

            function t() {
                if (window.input) {
                    const [e, t, n, r] = [window.leftJoystick.value.x, window.leftJoystick.value.y, window.rightJoystick.value.x, window.rightJoystick.value.y].map((e => 100 * e));
                    window.input.touch_joystick(e, t, n, r)
                }
                window.requestAnimationFrame(t)
            }
            window.leftJoystick = e("left"), window.rightJoystick = e("right"), setTimeout((() => {
                window.requestAnimationFrame(t)
            }), 1e3)
        }
        window.isUsingTouchDevice() && nd(), n(5035);
        var rd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        let id = ["Are you really human?", "Please verify you're a human", "Beep beep boop boop anti bot prevention", "You shall not pass (unless you are human)", "I spy with my little eye", "Please validate you are not the Terminator", "Give yourself a pinch to make sure you're human", "A box for the multi-boxers"];
        const od = s`
#base {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title {
    font-size: 45px;
    text-shadow: ${$u(3)};
    margin-bottom: 50px;
}

#captcha-holder {
    pointer-events: all;
}
`;
        let ad = class extends ie {
            constructor() {
                super(...arguments), this.titleText = id[Math.floor(Math.random() * id.length)]
            }
            updated(e) {
                e.has("sitekey") && (window.hcaptcha || (du.singleton.screen = "loading", du.singleton.loadingTitle = "Cannot Present Captcha", du.singleton.loadingSubtitle = "Your ad blocker may be preventing us from checking that you're not a bot", du.singleton.loadingError = !0), console.log("Rendering captcha", this.sitekey), window.hcaptcha.render(this.captchaHolder, {
                    sitekey: this.sitekey,
                    callback: this.callback,
                    "error-callback": e => {
                        du.singleton.screen = "loading", du.singleton.loadingTitle = "Captcha Error", du.singleton.loadingSubtitle = e + "", du.singleton.loadingError = !0
                    }
                }))
            }
            render() {
                return N`
        <div id="base">
            <div id="title">${this.titleText}</div>
            <div id="captcha-holder"></div>
        </div>
    `
            }
        };

        function* sd(e, t) {
            if (void 0 !== e) {
                let n = 0;
                for (const r of e) yield t(r, n++)
            }
        }
        ad.styles = od, rd([ce()], ad.prototype, "sitekey", void 0), rd([ce()], ad.prototype, "callback", void 0), rd([ue("#captcha-holder")], ad.prototype, "captchaHolder", void 0), ad = rd([ae("d-captcha")], ad);
        var cd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const ud = s`
#base {
    --border-width: 8px;

    position: relative;
    width: var(--size);
    height: var(--size);

    pointer-events: all;
    border-radius: calc(var(--size) / 2);
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
}

#highlight {
    position: absolute;
    left: var(--border-width);
    right: var(--border-width);
    top: var(--border-width);
    bottom: var(--border-width);

    overflow: hidden;
    border-radius: calc(var(--size) / 2);
    background: var(--bg);
}

#base:not(.max-level):hover #highlight {
    background: var(--bg-hover);
}

#base.active #highlight {
    background: var(--bg-active);
}

#highlight #shade {
    position: absolute;
    top: 45%;
    width: 100%;
    height: 200%;
    transform: scaleY(0.3);
    transform-origin: top center;

    border-radius: calc(var(--size) / 2);
    background: black;
    opacity: 0.2;
}

#base.active #highlight {
    transform: scaleY(-1);
}

#base.active #highlight #shade {
    top: 40%;
}

.ring {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: visible;
}

.max-level .ring {
    animation: ring-rotate 7s linear infinite;
}

@keyframes ring-rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

#title {
    position: absolute;
    left: var(--border-width);
    right: var(--border-width);
    top: 50%;
    transform: translateY(-50%);

    font-size: 9px;
    text-align: center;
    text-shadow: ${$u(1)};
}

#ripple {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: calc(var(--border-width) * -1);
    right: calc(var(--border-width) * -1);
    top: calc(var(--border-width) * -1);
    bottom: calc(var(--border-width) * -1);

    border-radius: calc((var(--size) + var(--border-width) * 2) / 2);
    border: var(--border-width) solid var(--bg);

    pointer-events: none;
    opacity: 0;
    z-index: 100;
}

.touch-animate #ripple {
    display: block;
    animation: ripple-out 0.5s cubic-bezier(0.33, 1, 0.68, 1) 1;
}

@keyframes ripple-out {
    0% {
        opacity: 1;
    }

    100% {
        transform: scale(2);
        border-width: 0;
        opacity: 0;
    }
}
`;
        let dd = class extends ie {
            constructor() {
                super(...arguments), this.size = 70, this.active = !1, this.touchAnimate = !1, this.touchAnimateTimerId = null
            }
            get isMaxLevel() {
                return this.playerAttribute.slotsFilled >= this.playerAttribute.totalSlots
            }
            get ringSize() {
                return this.size - 8
            }
            onPointerDown(e) {
                window.gameWrapper && window.gameWrapper.hapticFeedback("light"), this.isMaxLevel || (this.active = !0)
            }
            onPointerUp(e) {
                this.active = !1, !this.isMaxLevel && this.playerAttribute.slotsFilled < this.playerAttribute.totalSlots && (window.input.increaseStat(this.playerAttribute.index), this.touchAnimate = !1, setTimeout((() => this.touchAnimate = !0), 0), clearTimeout(this.touchAnimateTimerId), this.touchAnimateTimerId = setTimeout((() => this.touchAnimate = !1), 1e3)), e.preventDefault()
            }
            onPointerCancel(e) {
                this.active = !1
            }
            render() {
                let e = Au(this.playerAttribute.index),
                    t = this.isMaxLevel ? Au(-1) : ku(e, "white", .4),
                    n = ku(e, "black", .65),
                    r = ku(e, "white", .4),
                    i = Lu({
                        active: this.active,
                        "touch-animate": this.touchAnimate,
                        "max-level": this.isMaxLevel
                    }),
                    o = pe({
                        "--size": `${this.size.toFixed(2)}px`,
                        "--bg": t,
                        "--bg-hover": ku(t, "white", .2),
                        "--bg-active": ku(t, "black", .2)
                    });
                return N`
        <div
            id="base"
            class=${i}
            style=${o}
            @pointerdown=${this.onPointerDown.bind(this)}
            @pointerup=${this.onPointerUp.bind(this)}
            @pointercancel=${this.onPointerCancel.bind(this)}
            @pointerleave=${this.onPointerCancel.bind(this)}
        >
            <div id="highlight"><div id="shade"></div></div>
            <div id="ripple"></div>
            ${sd(function*(e,t,n=1){const r=void 0===t?0:e;null!=t||(t=e);for(let e=r;n>0?e<t:t<e;e+=n)yield e}(this.playerAttribute.totalSlots),(e=>this.renderSegment(e,e<this.playerAttribute.slotsFilled,r,n)))}
            <div id="title">${this.playerAttribute.name}</div>
        </div>
    `
            }
            renderSegment(e, t, n, r) {
                let i = Math.PI * this.ringSize,
                    o = 8 / 360 * i,
                    a = 1 / this.playerAttribute.totalSlots * i - 2 * o,
                    s = i - a,
                    c = `${a.toFixed(2)},${s.toFixed(2)}`,
                    u = -(1 / this.playerAttribute.totalSlots * e * i + o);
                return N`
        <svg
            class="ring"
            width="${this.ringSize}px"
            height="${this.ringSize}px"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="${this.ringSize}px"
                height="${this.ringSize}px"
                fill="none"
                rx="${this.ringSize}"
                ry="${this.ringSize}"
                stroke="${t?n:r}"
                stroke-width="5"
                stroke-dasharray="${c}"
                stroke-dashoffset="${u.toFixed(2)}"
                stroke-linecap="round"
            />
        </svg>
    `
            }
        };
        dd.styles = ud, cd([ce()], dd.prototype, "size", void 0), cd([ce()], dd.prototype, "playerAttribute", void 0), cd([ce()], dd.prototype, "active", void 0), cd([ce()], dd.prototype, "touchAnimate", void 0), cd([ce()], dd.prototype, "touchAnimateTimerId", void 0), dd = cd([ae("d-player-attr")], dd);
        var ld = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const fd = s`
#player-attrs {
    position: absolute;
    bottom: 115px;
    width: 100%;

    transition: bottom 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

#player-attrs.hidden {
    bottom: calc(-85px - var(--sab));
}

#points-left {
    transform: rotate(-22deg);
    color: white;
    font-size: 22px;
    width: 0;
    margin-left: 5px;
    text-shadow: ${$u(2)};
}

#attr-row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    flex-wrap: wrap;
}

#attr-row > d-player-attr:not(:first-child) {
    margin-right: 7px;
}

#control-buttons {
    position: absolute;
    left: 10px;
    top: 10px;

    display: flex;
    flex-direction: row;

    opacity: 0.8;
}

#control-buttons > d-button {
    width: 40px;
    height: 40px;
}

#control-buttons > d-button > d-icon {
    width: 15px;
    height: 15px;
}

#control-buttons > d-button:not(:last-child) {
    margin-right: 2px;
}

#user-list-toggle {
    position: absolute;
    display: block;
    font-size: 16px;

    --padding-top: 3px;
    --padding-bottom: 3px;
    --padding-left: 10px;
    --padding-right: 10px;
}

@media (max-height: 648px) {
    #user-list-toggle {
        bottom: 20%;
    }
}
`;
        let pd = class extends ie {
            constructor() {
                super(...arguments), this.playerCount = 0, this.screenSizeZoom = 0, this.firingPrimary = !0, this.firingSecondary = !0
            }
            connectedCallback() {
                super.connectedCallback(), this.handleKeyDown = this.onWindowKeyDown.bind(this), window.addEventListener("keydown", this.handleKeyDown)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), window.removeEventListener("keydown", this.handleKeyDown)
            }
            toggleFiring(e) {
                0 == e && (this.firingPrimary = !this.firingPrimary), 1 == e && (this.firingSecondary = !this.firingSecondary), this.firingPrimary || this.firingSecondary || (0 == e && (this.firingSecondary = !0), 1 == e && (this.firingPrimary = !0))
            }
            toggleKey(e, t) {
                console.log(arguments), t ? window.input.keyDown(e) : window.input.keyUp(e)
            }
            onWindowKeyDown(e) {
                "Tab" == e.key && du.singleton.toggleScreen("users")
            }
            render() {
                let e = window.isUsingTouchDevice(),
                    t = du.singleton.screenSizeZoom / du.singleton.uiScreenSizeZoom,
                    r = pe({
                        bottom: (e ? 20 : 200) * t + "px",
                        right: (e ? 200 : 20) * t + "px"
                    });
                return N`${ou(e,(()=>N`
                <div id="control-buttons">
                    <d-button
                        bg=${Au(-1)}
                        border="1"
                        .pressed=${this.firingPrimary}
                        .trigger=${this.toggleFiring.bind(this,0)}
                        ><d-icon
                            icon=${n(2633)}
                        ></d-icon
                    ></d-button>
                    <d-button
                        bg=${Au(-1)}
                        border="1"
                        .pressed=${this.firingSecondary}
                        .trigger=${this.toggleFiring.bind(this,1)}
                        ><d-icon
                            icon=${n(7969)}
                        ></d-icon
                    ></d-button>

                    <d-button
                        bg=${Au(-1)}
                        border="1"
                        .change=${this.toggleKey.bind(this,89)}
                        ><d-icon
                            icon=${n(1804)}
                        ></d-icon
                    ></d-button>

                    ${ou("dom"==this.selectedGameMode,(()=>N`
                            <d-button
                                bg=${Au(-1)}
                                border="1"
                                .change=${this.toggleKey.bind(this,72)}
                                ><d-icon
                                    icon=${n(7213)}
                                ></d-icon
                            ></d-button>
                        `))}
                    ${ou("sandbox"==this.selectedGameMode,(()=>N`
                            <d-button
                                bg=${Au(-1)}
                                border="1"
                                .change=${this.toggleKey.bind(this,75)}
                                ><d-icon
                                    icon=${n(3279)}
                                ></d-icon
                            ></d-button>
                            <d-button
                                bg=${Au(-1)}
                                border="1"
                                .change=${this.toggleKey.bind(this,79)}
                                ><d-icon
                                    icon=${n(6159)}
                                ></d-icon
                            ></d-button>
                            <d-button
                                bg=${Au(-1)}
                                border="1"
                                .change=${this.toggleKey.bind(this,186)}
                                ><d-icon
                                    icon=${n(4571)}
                                ></d-icon
                            ></d-button>
                            <d-button
                                bg=${Au(-1)}
                                border="1"
                                .change=${this.toggleKey.bind(this,220)}
                                ><d-icon
                                    icon=${n(4370)}
                                ></d-icon
                            ></d-button>
                        `))}
                </div>

                <div
                    id="player-attrs"
                    class=${Lu({hidden:0==this.playerAttributes.pointsLeft})}
                >
                    <div id="attr-row">
                        <div id="points-left">
                            x${this.playerAttributes.pointsLeft}
                        </div>
                        ${sd(this.playerAttributes.attributes,(e=>N`
                                <d-player-attr
                                    .playerAttribute=${e}
                                ></d-player-attr>
                            `))}
                    </div>
                </div>
            `))}
        <d-button
            id="user-list-toggle"
            style=${r}
            .bg=${Au(-1)}
            .trigger=${du.singleton.toggleScreen.bind(du.singleton,"users")}
            border="2"
        >
            ${this.playerCount} Player${1!=this.playerCount?"s":null}
        </d-button>`
            }
        };
        pd.styles = fd, ld([ce()], pd.prototype, "selectedGameMode", void 0), ld([ce()], pd.prototype, "playerAttributes", void 0), ld([ce()], pd.prototype, "managerCtx", void 0), ld([ce({
            type: Number
        })], pd.prototype, "playerCount", void 0), ld([ce({
            type: Number
        })], pd.prototype, "screenSizeZoom", void 0), ld([ce()], pd.prototype, "firingPrimary", void 0), ld([ce()], pd.prototype, "firingSecondary", void 0), pd = ld([ae("d-game")], pd);
        const {
            H: hd
        } = ee, vd = () => document.createComment(""), md = (e, t, n) => {
            var r;
            const i = e._$AA.parentNode,
                o = void 0 === t ? e._$AB : t._$AA;
            if (void 0 === n) {
                const t = i.insertBefore(vd(), o),
                    r = i.insertBefore(vd(), o);
                n = new hd(t, r, e, e.options)
            } else {
                const t = n._$AB.nextSibling,
                    a = n._$AM,
                    s = a !== e;
                if (s) {
                    let t;
                    null === (r = n._$AQ) || void 0 === r || r.call(n, e), n._$AM = e, void 0 !== n._$AP && (t = e._$AU) !== a._$AU && n._$AP(t)
                }
                if (t !== o || s) {
                    let e = n._$AA;
                    for (; e !== t;) {
                        const t = e.nextSibling;
                        i.insertBefore(e, o), e = t
                    }
                }
            }
            return n
        }, yd = (e, t, n = e) => (e._$AI(t, n), e), gd = {}, bd = e => {
            var t;
            null === (t = e._$AP) || void 0 === t || t.call(e, !1, !0);
            let n = e._$AA;
            const r = e._$AB.nextSibling;
            for (; n !== r;) {
                const e = n.nextSibling;
                n.remove(), n = e
            }
        }, wd = (e, t, n) => {
            const r = new Map;
            for (let i = t; i <= n; i++) r.set(e[i], i);
            return r
        }, _d = le(class extends fe {
            constructor(e) {
                if (super(e), 2 !== e.type) throw Error("repeat() can only be used in text expressions")
            }
            ht(e, t, n) {
                let r;
                void 0 === n ? n = t : void 0 !== t && (r = t);
                const i = [],
                    o = [];
                let a = 0;
                for (const t of e) i[a] = r ? r(t, a) : a, o[a] = n(t, a), a++;
                return {
                    values: o,
                    keys: i
                }
            }
            render(e, t, n) {
                return this.ht(e, t, n).values
            }
            update(e, [t, n, r]) {
                var i;
                const o = e._$AH,
                    {
                        values: a,
                        keys: s
                    } = this.ht(t, n, r);
                if (!Array.isArray(o)) return this.ut = s, a;
                const c = null !== (i = this.ut) && void 0 !== i ? i : this.ut = [],
                    u = [];
                let d, l, f = 0,
                    p = o.length - 1,
                    h = 0,
                    v = a.length - 1;
                for (; f <= p && h <= v;)
                    if (null === o[f]) f++;
                    else if (null === o[p]) p--;
                else if (c[f] === s[h]) u[h] = yd(o[f], a[h]), f++, h++;
                else if (c[p] === s[v]) u[v] = yd(o[p], a[v]), p--, v--;
                else if (c[f] === s[v]) u[v] = yd(o[f], a[v]), md(e, u[v + 1], o[f]), f++, v--;
                else if (c[p] === s[h]) u[h] = yd(o[p], a[h]), md(e, o[f], o[p]), p--, h++;
                else if (void 0 === d && (d = wd(s, h, v), l = wd(c, f, p)), d.has(c[f]))
                    if (d.has(c[p])) {
                        const t = l.get(s[h]),
                            n = void 0 !== t ? o[t] : null;
                        if (null === n) {
                            const t = md(e, o[f]);
                            yd(t, a[h]), u[h] = t
                        } else u[h] = yd(n, a[h]), md(e, o[f], n), o[t] = null;
                        h++
                    } else bd(o[p]), p--;
                else bd(o[f]), f++;
                for (; h <= v;) {
                    const t = md(e, u[v + 1]);
                    yd(t, a[h]), u[h++] = t
                }
                for (; f <= p;) {
                    const e = o[f++];
                    null !== e && bd(e)
                }
                return this.ut = s, ((e, t = gd) => {
                    e._$AH = t
                })(e, u), j
            }
        });
        var Sd, xd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        ! function(e) {
            e[e.GameMode = 0] = "GameMode", e[e.Region = 1] = "Region"
        }(Sd || (Sd = {}));
        const Ed = {
                ffa: n(5040),
                survival: n(6114),
                teams: n(8125),
                "4teams": n(8125),
                moba: n(8125),
                dom: n(522),
                tag: n(9207),
                ships: n(389),
                maze: n(9345),
                sandbox: n(6830),
                event: n(3865)
            },
            kd = 864e5,
            Ld = [{
                id: "ships",
                name: "Mothership"
            }, {
                id: "tag",
                name: "Tag"
            }, {
                id: "ships",
                name: "Mothership"
            }, {
                id: "dom",
                name: "Domination"
            }],
            Cd = s`
.icon.flag {
    border-radius: calc(var(--icon-size) / 4);
    background-size: cover;
    background-position: center;
    border: 2px solid black;
}

/* Menu */
#menu {
    --option-spacing: 20px;

    position: absolute;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);

    justify-content: center;
}

#menu-grid {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
}

#menu-grid > .option {
    margin-bottom: var(--option-spacing);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#menu-grid > .option:not(:nth-child(4n)):not(:last-child) {
    margin-right: var(--option-spacing);
}

#menu-grid > .option .title {
    margin-bottom: 5px;

    font-size: 18px;
    text-shadow: ${$u(2)};
}

#menu-grid > .option d-button {
    width: 230px;
    height: 60px;
}

#menu-grid .option-body {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 26px;
}

#menu-grid .option-body .icon {
    --icon-size: 26px;
    margin-left: 11px;
    width: var(--icon-size);
    height: var(--icon-size);
    border-width: 3px;
}

#menu-grid .option-body .label {
    flex: 1 0;
    text-align: center;
    text-shadow: ${$u(2)};
}

/* Submenu */
#submenu {
    --option-width: 160px;
    --option-height: 50px;
    --option-spacing: 5px;

    position: absolute;
    left: 50%;
    width: calc((var(--option-width) + var(--option-spacing)) * 4);
    transform: translateX(-50%);
}

#submenu-title {
    height: 32px;
    font-size: 20px;
    text-shadow: ${$u(2)};
    text-align: center;
}

#submenu-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

#submenu-grid > .option {
    width: var(--option-width);
    height: var(--option-height);
    margin-bottom: var(--option-spacing);
}

#submenu-grid .option-body {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 16px;
}

#submenu-grid .option-body .icon {
    --icon-size: 18px;
    margin-left: 8px;
    width: var(--icon-size);
    height: var(--icon-size);
}

#submenu-grid .option-body .label {
    flex: 1 0;
    text-align: center;
}

#submenu-grid > .option:not(:nth-child(4n)):not(:last-child) {
    margin-right: var(--option-spacing);
}

/* Activate Animation */
/* TODO: Handle touch events */
.activatable {
    transition: transform 0.2s, opacity 0.2s;
}

.activatable:not(.active) {
    opacity: 0;
}

.activatable:not(.active) d-button {
    pointer-events: none;
}

#menu:not(.active) {
    transform: translateX(-50%) scale(1.3);
}

#submenu:not(.active) {
    transform: translateX(-50%) scale(0.7);
}
`;
        let Ad = class extends ie {
            constructor() {
                super(...arguments), this.selectedGameMode = "", this.gameModes = [], this.selectedRegion = "", this.regions = [], this.menuGroups = [{
                    id: Sd.GameMode,
                    title: "Game Mode"
                }, {
                    id: Sd.Region,
                    title: "Region"
                }], this.selectedSubmenu = 0, this.showSubmenu = !1
            }
            get selectedMenuGroup() {
                return this.menuGroups[this.selectedSubmenu]
            }
            getGroupLabel(e) {
                switch (e) {
                    case Sd.GameMode:
                        if ("event" === this.selectedGameMode) {
                            const e = Ld[Math.floor(Date.now() / kd) % Ld.length];
                            if (e) return e.name
                        }
                        let e = this.gameModes.find((e => e.id == this.selectedGameMode));
                        return e ? e.name : "";
                    case Sd.Region:
                        let t = this.regions.find((e => e.id == this.selectedRegion));
                        return t ? t.name : ""
                }
            }
            getGroupColor(e) {
                switch (e) {
                    case Sd.GameMode:
                        return "#" + this.gameModes.find((e => e.id == this.selectedGameMode)).colorRaw.toString(16).padStart(6, "0");
                    case Sd.Region:
                        return Au(this.regions.findIndex((e => e.id == this.selectedRegion)))
                }
            }
            renderGroupIcon(e) {
                switch (e) {
                    case Sd.GameMode:
                        return N`<d-icon
                class="icon"
                .icon=${Ed[this.selectedGameMode]}
                size="26"
                border="2"
            ></d-icon>`;
                    case Sd.Region:
                        return N`<div
                class="icon flag"
                style=${pe({"background-image":`url(${this.regions.find((e=>e.id==this.selectedRegion)).icon})`})}
            ></div>`
                }
            }
            onSelectSubmenu(e) {
                this.selectedSubmenu = e, this.showSubmenu = !0
            }
            onSelectSubmenuOption(e) {
                switch (this.showSubmenu = !1, this.selectedMenuGroup.id) {
                    case Sd.GameMode:
                        window.input.setGameMode(this.gameModes[e].id);
                        break;
                    case Sd.Region:
                        window.input.setRegion(this.regions[e].id)
                }
            }
            render() {
                return N`
        <div id="base">
            <div
                id="menu"
                class=${Lu({activatable:!0,active:!this.showSubmenu})}
            >
                <div id="menu-grid">
                    ${_d(this.menuGroups,(e=>e.id),((e,t)=>N`
                                <div class="option">
                                    <div class="title">${e.title}</div>
                                    <d-button
                                        .bg=${this.getGroupColor(e.id)}
                                        .ghostDisabled=${this.showSubmenu}
                                        .trigger=${this.onSelectSubmenu.bind(this,t)}
                                    >
                                        <div class="option-body">
                                            ${this.renderGroupIcon(e.id)}
                                            <div class="label">
                                                ${this.getGroupLabel(e.id)}
                                            </div>
                                        </div>
                                    </d-button>
                                </div>
                            `))}
                </div>
            </div>

            <div
                id="submenu"
                class=${Lu({activatable:!0,active:this.showSubmenu})}
            >
                <div id="submenu-title">
                    ${this.selectedMenuGroup.title}
                </div>
                ${he(this.selectedMenuGroup.id,[[Sd.GameMode,this.renderGameModeMenu.bind(this)],[Sd.Region,this.renderRegionMenu.bind(this)]])}
            </div>
        </div>
    `
            }
            renderGameModeMenu() {
                return this.renderSubmenuGrid(this.gameModes.map((e => "event" === e.id ? {
                    id: "event",
                    label: Ld[Math.floor(Date.now() / kd) % Ld.length].name,
                    color: "#" + e.colorRaw.toString(16).padStart(6, "0"),
                    icon: Ed[e.id],
                    flag: !1,
                    pressed: e.id == this.selectedGameMode
                } : {
                    id: e.id,
                    label: e.name,
                    color: "#" + e.colorRaw.toString(16).padStart(6, "0"),
                    icon: Ed[e.id],
                    flag: !1,
                    pressed: e.id == this.selectedGameMode
                })))
            }
            renderRegionMenu() {
                return this.renderSubmenuGrid(this.regions.map((e => ({
                    id: e.id,
                    label: e.name,
                    icon: e.icon,
                    flag: !0,
                    pressed: e.id == this.selectedRegion
                }))))
            }
            renderSubmenuGrid(e) {
                return N`
        <div id="submenu-grid">
            ${_d(e,(e=>e.id),((e,t)=>{var n;return N`<d-button
                        class="option"
                        border="4"
                        .bg=${null!==(n=e.cssColor)&&void 0!==n?n:Au(t)}
                        .ghostDisabled=${!this.showSubmenu}
                        .pressed=${e.pressed}
                        .trigger=${this.onSelectSubmenuOption.bind(this,t)}
                    >
                        <div class="option-body">
                            ${ou(e.flag,(()=>N`<div
                                        class="icon flag"
                                        style=${pe({"background-image":`url(${e.icon})`})}
                                    ></div>`),(()=>N`<d-icon
                                        class="icon"
                                        .icon=${e.icon}
                                        size="18"
                                    ></d-icon>`))}
                            <div class="label">${e.label}</div>
                        </div>
                    </d-button>`}))}
        </div>
    `
            }
        };
        Ad.styles = Cd, xd([ce()], Ad.prototype, "selectedGameMode", void 0), xd([ce()], Ad.prototype, "gameModes", void 0), xd([ce()], Ad.prototype, "selectedRegion", void 0), xd([ce()], Ad.prototype, "regions", void 0), xd([ce()], Ad.prototype, "menuGroups", void 0), xd([ce()], Ad.prototype, "selectedSubmenu", void 0), xd([ce()], Ad.prototype, "showSubmenu", void 0), Ad = xd([ae("d-menu")], Ad);
        var Md = n.p + "f902960a94878ee0da67.png",
            $d = n.p + "f34e9a284a36ff72c6d6.svg",
            Pd = n.p + "d31f74329e8db22ebb06.svg",
            Id = n.p + "bd71b4c4c295651f1aa9.svg",
            Rd = n.p + "758891189f3856f2a984.svg",
            Fd = n.p + "f1335e1a14bd0fbb3691.svg",
            Td = n.p + "076db16f1acfbf295ae4.jpg";
        let zd = document.querySelector(":root");

        function Od() {
            let e = Nd("sat") + (window.gameWrapper ? window.gameWrapper.insetTop : 0),
                t = Nd("sab") + (window.gameWrapper ? window.gameWrapper.insetBottom : 0),
                n = Nd("sal") + (window.gameWrapper ? window.gameWrapper.insetLeft : 0),
                r = Nd("sar") + (window.gameWrapper ? window.gameWrapper.insetRight : 0),
                i = 1920,
                o = 1080;
            window.innerHeight < 500 && (i = 1600, o = 600);
            let a = Math.max(window.innerWidth / i, window.innerHeight / o);
            a *= parseFloat(localStorage.uiScale || 1), a = Math.floor(25 * a) / 25, du.singleton && (du.singleton.uiScreenSizeZoom = a, du.singleton.screenSizeZoom = Math.max(window.innerWidth / 1920, window.innerHeight / 1080), du.singleton.width = window.innerWidth / a, du.singleton.height = window.innerHeight / a, du.singleton.insetWidth = (window.innerWidth - n - r) / a, du.singleton.insetHeight = (window.innerHeight - e - t) / a, du.singleton.edgeInsets = {
                top: e,
                bottom: t,
                left: n,
                right: r
            }), zd.style.setProperty("--inset-top", e + "px"), zd.style.setProperty("--inset-bottom", t + "px"), zd.style.setProperty("--inset-left", n + "px"), zd.style.setProperty("--inset-right", r + "px"), zd.style.setProperty("--ssz", a.toFixed(2)), window.innerWidth < 1020 * a ? document.querySelector(".aa.left").style.setProperty("display", "none") : document.querySelector(".aa.left").style.removeProperty("display"), window.innerHeight < 760 * a ? document.querySelector(".aa.bottom").style.setProperty("display", "none") : document.querySelector(".aa.bottom").style.removeProperty("display")
        }

        function Nd(e) {
            let t = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--" + e));
            return isFinite(t) ? t : 0
        }
        var jd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Ud = [{
                imgSrc: Pd,
                color: "#FF0000",
                url: "https://www.youtube.com/channel/UCVtlkiQcG3iJPXtqynyNVoQ?sub_confirmation=1"
            }, {
                imgSrc: Id,
                color: "#FA005A",
                url: "https://diepio.gamepedia.com/Diep.io_Wiki"
            }, {
                imgSrc: Rd,
                color: "#5865F2",
                url: "https://discord.gg/vJVqhTf"
            }, {
                imgSrc: Fd,
                color: "#FF4500",
                url: "https://www.reddit.com/r/diepio/"
            }],
            qd = n(3664);
        var Bd;
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Settings = 1] = "Settings", e[e.Support = 2] = "Support"
        }(Bd || (Bd = {}));
        const Hd = s`
d-menu {
    position: absolute;
    width: 100%;
    top: 20px;

    animation: menu-intro 1s cubic-bezier(0.25, 1, 0.5, 1) 0;
    animation-iteration-count: 1;

    transition: top 0.2s;
}

d-menu.hide {
    top: -90px;
}

@keyframes menu-intro {
    0% {
        top: -90px;
    }
    100% {
        top: 20px;
    }
}

#username {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: username-intro 1s cubic-bezier(0.25, 1, 0.5, 1) 0;
    animation-iteration-count: 1;

    transition: top 0.2s;
}

#logo {
    position: relative;
    height: 145px;
    margin-bottom: 25px;

    opacity: 1;
    overflow: visible;
    background: red;

    transition: height 0.2s, margin-bottom 0.2s, opacity 0.2s;
}

#logo #logo-inner {
    position: absolute;
    height: 145px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

#username.keyboard-shift {
    top: 25%;
}

#username.keyboard-shift #logo {
    height: 0;
    margin-bottom: 0;
    opacity: 0;
}

@keyframes button-intro {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

#username-intro {
    text-align: center;
    font-size: 26px;
    margin-bottom: 5px;
    text-shadow: ${$u(2)};
}

#username-spawn-level {
    text-align: center;
    font-size: 18px;
    margin-top: 5px;
    text-shadow: ${$u(1)};
}

#username-row {
    height: 56px;

    display: flex;
    flex-direction: row;
}

#username-row #username-input {
    width: 300px;
    margin: 0 10px 0 0;
    margin-right: 10px;
    font-family: Ubuntu;

    padding: 0;
    border: 5px solid black;
    outline: none;

    font-size: 46px;
    line-height: 45px;
    pointer-events: all;

    animation-duration: 0.15s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}

#username-row #username-input:focus {
    animation-name: username-input-focus;
}

@keyframes username-input-focus {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

#username-row d-button {
    width: 100px;
    font-size: 26px;
}

#page-blocker {
    position: absolute;
    left: calc(var(--inset-left) / var(--ssz) * -1);
    right: calc(var(--inset-right) / var(--ssz) * -1);
    top: calc(var(--inset-top) / var(--ssz) * -1);
    bottom: calc(var(--inset-bottom) / var(--ssz) * -1);
    pointer-events: all;

    background: rgba(0, 0, 0, 0.25);
    z-index: 10;
}

.modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    transform: translate(-50%, -50%);
    padding: 12px;

    border-radius: 10px;
    background: #333333;
    border: 2px solid #282828;

    z-index: 20;

    animation: modal-intro 0.2s cubic-bezier(0.25, 1, 0.5, 1) 0;
    animation-iteration-count: 1;
}

.modal > h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 15px;
    text-shadow: ${$u(2)};
}

.modal > #requires-reload {
    margin-bottom: 15px;
}

@keyframes modal-intro {
    0% {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}

#settings {
    display: flex;
    flex-direction: column;

    pointer-events: all;
}

#settings-items {
    margin-bottom: 10px;
}

#settings .settings-item {
    height: 52px;

    display: flex;
    flex-direction: row;
    align-items: center;
}

#settings .settings-item .title {
    flex: 1;
    font-weight: bold;
    margin-left: 5px;
    font-size: 20px;
}

#settings .settings-item .value {
    margin-right: 10px;
    text-align: right;
}

#settings .settings-item .bool {
    width: 80px;
    height: 38px;
    margin-left: 4px;
}

#settings .settings-item .plus,
#settings .settings-item .minus {
    width: 38px;
    height: 38px;
    margin-left: 4px;
}

#settings > d-button {
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 0;
    --padding-right: 6px;

    font-size: 18px;
}

#settings > d-button:not(:last-child) {
    margin-bottom: 10px;
}

#support {
    display: flex;
    flex-direction: column;

    pointer-events: all;
}

#support > d-button {
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 0;
    --padding-right: 6px;

    font-size: 18px;
}

#support > d-button:not(:last-child) {
    margin-bottom: 10px;
}

#links-bottom-left,
#links-bottom-right,
#links-bottom-center {
    position: absolute;
    bottom: 20px;
    z-index: 100;

    display: flex;
    flex-direction: column;
}

#links-bottom-left {
    left: 20px;
}

#links-bottom-right {
    right: 20px;
    align-items: flex-end;
}

#links-bottom-center {
    width: 100%;
    left: 50%;
    align-items: center;
    transform: translateX(-50%);
}

#identity {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 18px;
    top: 18px;
    z-index: 100;
}

#identity d-identity-tile {
    margin-bottom: 10px;
    font-size: 28px;
    --avatar-size: 40px;
}

#identity #register {
    font-size: 18px;
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 16px;
    --padding-right: 16px;
}

#identity #friends {
    display: block;
    margin-bottom: 9px;
    --padding-top: 9px;
    --padding-bottom: 8px;
    --padding-left: 20px;
    --padding-right: 20px;
}

#identity #friends .button-body {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 18px;
}

#identity #friends .button-body .icon {
    --icon-size: 18px;
    margin-right: 11px;
    width: var(--icon-size);
    height: var(--icon-size);
    border-width: 2px;
}

#identity #friends .button-body .label {
    flex: 1 0;
    text-align: center;
    text-shadow: ${$u(1)};
}

#event {
    --highlight-opacity: 0.05;

    margin-bottom: 10px;
    width: 150px;
    height: 125px;
}

/*#event #content {
    background: url("${a(Td)}");
    background-size: contain;
}*/

#updated {
    font-size: 24px;
    margin-bottom: 12px;
    text-shadow: ${$u(2)};
}

.link-list {
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 16px;
    --padding-right: 16px;

    display: flex;
    flex-direction: row;

    font-size: 18px;
}

.link-list > *:not(:last-child) {
    margin-right: 8px;
}

.link-list > .store-icon {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    pointer-events: all;
}

#social-links > .social-icon {
    --padding: 0;

    width: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
}

#social-links > .social-icon img {
    height: 20px;
    width: auto;
}

#social-links > .icon-button {
    width: 55px;
}

@media (max-height: 960px) {
    #links-bottom-left.shift-for-ads {
        left: 320px;
    }
}
`;
        let Dd = class extends ie {
            constructor() {
                super(...arguments), this.username = "", this.spawnLevel = 0, this.selectedGameMode = "", this.gameModes = [], this.selectedRegion = "", this.regions = [], this.usernameFocused = !1, this.page = Bd.Default, this.settingsShowReload = !1, this.showingInterstitialAd = !1
            }
            firstUpdated() {
                window.gameWrapper || window.isUsingTouchDevice() || this.usernameInput.focus()
            }
            connectedCallback() {
                super.connectedCallback(), window.gameWrapper && window.gameWrapper.showBannerAd("banner")
            }
            disconnectedCallback() {
                super.disconnectedCallback()
            }
            onSpawn() {
                if (window.gameWrapper) {
                    let e = Date.now(),
                        t = localStorage.lastInterstitialAdShowTs && parseInt(localStorage.lastInterstitialAdShowTs);
                    !t || e - t > 15e4 ? (localStorage.lastInterstitialAdShowTs = e, console.log("Showing interstitial ad"), this.showingInterstitialAd = !0, window.gameWrapper.showInterstitialAd("interstitial", (() => {
                        this.showingInterstitialAd = !1, this.spawnComplete()
                    }))) : this.spawnComplete()
                } else this.spawnComplete()
            }
            spawnComplete() {
                console.log("Spawn complete"), this.showingInterstitialAd = !1, window.input.trySpawn(this.usernameInput.value || ""), (new Image).src = "https://sb.scorecardresearch.com/p?c1=2&c2=22419751&cv=3.6.0&cj=1", fetch(`${window.location.protocol}//${du.singleton.host}/pv`, {})
            }
            onKeyDown(e) {
                "Enter" == e.key && (this.onSpawn(), e.preventDefault())
            }
            resetSettings() {
                for (let e of Wd) "bool" in e.kind ? (localStorage[e.key] = e.kind.bool.default, e.kind.bool.onChange(e.kind.bool.default)) : "number" in e.kind && (localStorage[e.key] = e.kind.number.default, e.kind.number.onChange(e.kind.number.default));
                this.settingsShowReload = !1, this.requestUpdate()
            }
            async swapAccountOrLink() {
                var e;
                (null === (e = this.managerCtx.identity) || void 0 === e ? void 0 : e.isRegistered) ? (this.identityManager.logout(), window.location.reload()) : this.dispatchEvent(new Event("game-link"))
            }
            render() {
                let e = window.gameWrapper && this.usernameFocused;
                return N`
        <d-menu
            class=${Lu({hide:e})}
            .username=${this.username}
            .selectedGameMode=${this.selectedGameMode}
            .gameModes=${this.gameModes}
            .selectedRegion=${this.selectedRegion}
            .regions=${this.regions}
        ></d-menu>

        ${ou(this.managerCtx.identity,(()=>N`<div id="identity">
                <d-identity-tile .identity=${this.managerCtx.identity}>
                </d-identity-tile
                ><d-button
                    id="friends"
                    .bg=${Au(0)}
                    .trigger=${du.singleton.toggleScreen.bind(du.singleton,"friends")}
                >
                    <div class="button-body">
                        <d-icon
                            class="icon"
                            .icon=${qd}
                            size="18"
                            border="2"
                        ></d-icon>
                        <div class="label">
                            ${this.managerCtx.friends.length}
                            Friend${1!=this.managerCtx.friends.length?"s":null}
                            Online
                        </div>
                    </div></d-button
                ><d-button
                    id="register"
                    bg=${Au(-1)}
                    .trigger=${this.swapAccountOrLink.bind(this)}
                    >${ou(this.managerCtx.identity.isRegistered,(()=>"Logout"),(()=>"Register Now"))}</d-button
                >
            </div>`))}

        <div
            id="links-bottom-left"
            class=${Lu({"shift-for-ads":!window.gameWrapper})}
        >
            <!--<d-button
                id="event"
                href="https://discord.gg/vJVqhTf"
                bg-src="${Td}"
            ></d-button>-->
            ${ou(!window.gameWrapper,(()=>N`
                    <div id="store-links" class="link-list">
                        <d-button
                            class="store-icon"
                            href="https://play.google.com/store/apps/details?id=com.miniclip.diep.io"
                            style="width: 161px; height: 62px; margin: -10px -10px; margin-right: 2px; background-image: url(${Md})"
                            plain
                        ></d-button>
                        <d-button
                            class="store-icon"
                            href="https://itunes.apple.com/app/diep.io/id1114751883?mt=8&at=1l3vajp"
                            style="width: 145px; height: 42px; background-image: url(${$d})"
                            plain
                        ></d-button>
                    </div>
                `))}
        </div>

        <div
            id=${window.gameWrapper?"links-bottom-center":"links-bottom-right"}
        >
            <div id="updated">Updated January 9th, 2023</div>
            <div id="social-links" class="link-list">
                <d-button
                    class="icon-button"
                    bg=${Au(-1)}
                    .trigger=${()=>this.page=Bd.Support}
                    >?</d-button
                >
                <d-button
                    class="icon-button"
                    bg=${Au(-1)}
                    .trigger=${()=>this.page=Bd.Settings}
                    ><d-icon
                        .icon=${n(6608)}
                    ></d-icon
                ></d-button>
                <d-button href="changelog.html" bg=${Au(0)}
                    >Changelog</d-button
                >
                <d-button href="https://iogames.space" bg=${Au(1)}
                    >io games</d-button
                >
                <d-button
                    bg=${Au(2)}
                    href="https://shop.addictinggames.com/collections/diep-io"
                    >Merch</d-button
                >
                ${_d(Ud,(e=>N`
                        <d-button
                            .href=${e.url}
                            class="social-icon"
                            .bg=${e.color}
                            ><img src="${e.imgSrc}"
                        /></d-button>
                    `))}
            </div>
        </div>

        ${ou(this.page!=Bd.Default,(()=>N`<div id="page-blocker"></div>`))}
        ${he(this.page,[[Bd.Default,this.renderUsername.bind(this,e)],[Bd.Support,this.renderSupport.bind(this)],[Bd.Settings,this.renderSettings.bind(this)]])}
    `
            }
            renderUsername(e) {
                return N`
        <div
            id="username"
            class=${Lu({"keyboard-shift":e})}
        >
            <div id="logo">
                <img
                    id="logo-inner"
                    src=${n(9580)}
                />
            </div>
            <div id="username-intro">This is the tale of...</div>
            <div id="username-row">
                <input
                    id="username-input"
                    type="text"
                    .value=${this.username}
                    @pointerdown=${()=>this.usernameInput.focus()}
                    @keydown=${this.onKeyDown.bind(this)}
                    @focus=${()=>this.usernameFocused=!0}
                    @blur=${()=>this.usernameFocused=!1}
                />
                <d-button
                    .bg=${this.showingInterstitialAd?Au(-1):Au(0)}
                    text-border="2"
                    .trigger=${this.onSpawn.bind(this)}
                    >${this.showingInterstitialAd?"Please wait...":"Play"}
                </d-button>
            </div>
            ${ou(this.spawnLevel>1,(()=>N`<div id="username-spawn-level">
                        You will spawn at level ${this.spawnLevel}
                    </div>`))}
        </div>
    `
            }
            renderSupport() {
                return N`
        <div id="support" class="modal">
            <h1>Support</h1>
            <d-button href="tos.txt" bg=${Au(-1)}
                >Terms of Service</d-button
            >
            <d-button href="pp.txt" bg=${Au(-1)}
                >Privacy Policy</d-button
            >
            <d-button
                href="https://addictinggameshelp.zendesk.com/hc/en-us/requests/new"
                bg=${Au(-1)}
                >Support Request</d-button
            >
            <d-button
                bg=${Au(2)}
                .trigger=${()=>this.page=Bd.Default}
                >Close</d-button
            >
        </div>
    `
            }
            renderSettings() {
                return N`
        <div id="settings" class="modal">
            <h1>Settings</h1>
            <div id="settings-items">
                ${_d(Wd,(e=>e.key),(e=>this.renderSettingEntry(e)))}
            </div>
            <div id="requires-reload">* = requires reload</div>
            <d-button
                bg=${Au(-1)}
                .trigger=${this.resetSettings.bind(this)}
                >Reset</d-button
            >
            ${this.settingsShowReload?N`<d-button
                        bg=${Au(2)}
                        .trigger=${()=>location.reload()}
                        >Reload</d-button
                  >`:null}
            <d-button
                bg=${Au(2)}
                .trigger=${()=>{this.settingsShowReload=!1,this.page=Bd.Default}}
                >Close</d-button
            >
        </div>
    `
            }
            renderSettingEntry(e) {
                return N`
        <div class="settings-item">
            <div class="title">
                ${e.title}${e.requiresReload?"*":""}
            </div>
            ${ou("bool"in e.kind,(()=>this.renderSettingEntryBool(e)))}
            ${ou("number"in e.kind,(()=>this.renderSettingEntryNumber(e)))}
        </div>
    `
            }
            renderSettingEntryBool(e) {
                let t = e.kind.bool,
                    n = "true" == (localStorage[e.key] || t.default.toString());
                return N`
        <d-button
            class="bool"
            border="4"
            .bg=${Au(n?0:-1)}
            .trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let r=!n;localStorage[e.key]=r.toString(),t.onChange(r),this.requestUpdate()}}
            >${n?"ON":"OFF"}</d-button
        >
    `
            }
            renderSettingEntryNumber(e) {
                let t = e.kind.number,
                    n = parseFloat(localStorage[e.key] || t.default),
                    r = Math.round(n / t.interval) * t.interval;
                return N`
        <div class="value">${r.toFixed(t.toFixed)}</div>
        <d-button
            class="minus"
            border="4"
            .trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let n=Math.max(r-t.interval,t.min);localStorage[e.key]=n,t.onChange(n),this.requestUpdate()}}
            >-</d-button
        >
        <d-button
            class="plus"
            border="4"
            .trigger=${()=>{e.requiresReload&&(this.settingsShowReload=!0);let n=Math.min(r+t.interval,t.max);localStorage[e.key]=n,t.onChange(n),this.requestUpdate()}}
            >+</d-button
        >
    `
            }
        };
        Dd.styles = Hd, jd([ce()], Dd.prototype, "username", void 0), jd([ce()], Dd.prototype, "spawnLevel", void 0), jd([ce()], Dd.prototype, "selectedGameMode", void 0), jd([ce()], Dd.prototype, "gameModes", void 0), jd([ce()], Dd.prototype, "selectedRegion", void 0), jd([ce()], Dd.prototype, "regions", void 0), jd([ce()], Dd.prototype, "usernameFocused", void 0), jd([ce()], Dd.prototype, "page", void 0), jd([ue("#username-input")], Dd.prototype, "usernameInput", void 0), jd([ce()], Dd.prototype, "settingsShowReload", void 0), jd([ce({
            type: Boolean
        })], Dd.prototype, "showingInterstitialAd", void 0), jd([ce()], Dd.prototype, "managerCtx", void 0), Dd = jd([ae("d-home")], Dd);
        const Wd = [{
            title: "Retina Resolution",
            requiresReload: !0,
            key: "retinaResolution",
            kind: {
                bool: {
                    default: Du(),
                    onChange() {}
                }
            }
        }, {
            title: "UI Scale",
            key: "uiScale",
            kind: {
                number: {
                    default: 1,
                    interval: .1,
                    min: .2,
                    max: 5,
                    toFixed: 1,
                    onChange() {
                        Od()
                    }
                }
            }
        }];
        var Gd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Vd = s`
#base {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title {
    font-size: 45px;
    text-shadow: ${$u(3)};
}

#title > span {
    position: relative;
    display: inline-block;
    animation: bounce 2s infinite;
}

#subtitle {
    margin-top: 20px;
    font-size: 25px;
    white-space: pre-line;
    text-shadow: ${$u(1)};
    max-width: 500px;
    text-align: center;
}

#actions {
    display: flex;
    flex-direction: row;
    margin-top: 16px;
}

#actions d-button {
    --padding: 8px 16px;

    font-size: 20px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}

@keyframes bounce {
    0%,
    40%,
    100% {
        transform: none;
    }
    20% {
        transform: translateY(-15px);
    }
}
`;
        let Jd = class extends ie {
            constructor() {
                super(...arguments), this.loadingTitle = "", this.loadingSubtitle = "", this.loadingError = !1
            }
            tryAgain() {
                location.reload()
            }
            render() {
                let e = "Failed to join party".length,
                    t = [];
                for (let n = 0; n < e; n++) {
                    let e = (.1 * n).toFixed(2),
                        r = this.loadingTitle.charAt(n),
                        i = n >= this.loadingTitle.length,
                        o = 0 == r.replace(/\s*/g, "").length,
                        a = pe({
                            "animation-delay": `${e}s`,
                            width: i ? "0" : null,
                            opacity: i ? "0" : "1"
                        });
                    t.push(N`<span style=${a}
                >${ou(o,(()=>N`&nbsp;`),(()=>N`${r}`))}</span
            >`)
                }
                return N`
        <div id="base">
            <div id="title">${sd(t,(e=>e))}</div>
            ${ou(this.loadingSubtitle.length>0,(()=>N`<div id="subtitle">${this.loadingSubtitle}</div>`))}
            ${ou(this.loadingError,(()=>N`
                    <div id="actions">
                        <d-button
                            .bg=${Au(-1)}
                            .trigger=${this.tryAgain.bind(this)}
                            >Reconnect</d-button
                        >
                        <!-- <d-button .bg=${Au(-1)} .trigger=${this.tryAgain.bind(this)}>Support</d-button> -->
                    </div>
                `))}
        </div>
    `
            }
        };
        Jd.styles = Vd, Gd([ce()], Jd.prototype, "loadingTitle", void 0), Gd([ce()], Jd.prototype, "loadingSubtitle", void 0), Gd([ce()], Jd.prototype, "loadingError", void 0), Jd = Gd([ae("d-loading")], Jd);
        var Kd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Yd = s`
#actions {
    position: absolute;
    left: 50%;
    top: calc(50% + 100px);
    transform: translateX(-50%);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: button-intro 1.5s cubic-bezier(0.25, 1, 0.5, 1) 0;
    animation-iteration-count: 1;
}

#actions d-button {
    width: 150px;
    height: 45px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}

@keyframes button-intro {
    0%,
    33% {
        opacity: 0;
        transform: translateX(-50%) scale(0.5);
    }
    100% {
        opacity: 1;
        transform: translateX(-50%);
    }
}
`;
        let Xd = class extends ie {
            firstUpdated(e) {
                super.firstUpdated(e);
                let t = window.input.getKillerIdentityId(),
                    n = this.managerCtx.players.get(t),
                    r = t == this.managerCtx.identity.identityId,
                    i = du.singleton.reportedIdentities.has(t);
                console.debug("killer", t, !!n, r, i)
            }
            onContinue() {
                window.input.showMenu()
            }
            report(e) {
                du.singleton.toggleReport(e)
            }
            follow(e) {
                if (!this.managerCtx.players.has(e)) return;
                let t = this.managerCtx.players.get(e);
                t.following = !t.following, t.following ? this.identityManager.service.followIdentity({
                    identityId: e
                }).catch(console.error) : this.identityManager.service.unfollowIdentity({
                    identityId: e
                }).catch(console.error), this.requestUpdate()
            }
            render() {
                let e = window.input.getKillerIdentityId(),
                    t = this.managerCtx.players.get(e),
                    n = e == this.managerCtx.identity.identityId,
                    r = du.singleton.reportedIdentities.has(e);
                return N`
        <div id="actions">
            ${ou(t&&!n,(()=>N`<d-button
                    id="report"
                    .bg=${Au(1)}
                    .trigger=${this.follow.bind(this,e)}
                >
                    ${t.following?"Unfollow":"Follow"}
                </d-button>`))}
            <d-button
                id="continue"
                .bg=${Au(0)}
                .trigger=${this.onContinue.bind(this)}
            >
                Continue
            </d-button>
            ${ou(0!=e.length&&!n&&!r,(()=>N`<d-button
                    id="follow"
                    .bg=${Au(2)}
                    .trigger=${this.report.bind(this,e)}
                >
                    Report
                </d-button>`))}
        </div>
    `
            }
        };
        Xd.styles = Yd, Kd([ce()], Xd.prototype, "managerCtx", void 0), Xd = Kd([ae("d-stats")], Xd);
        var Zd = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const Qd = s`
#base {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-color: #55555555;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: all;
}

#title {
    font-size: 40px;
    text-align: center;
    margin: 0 0 15px 0;

    text-shadow: ${$u(3)};
}

p {
    margin-top: 0;
}

textarea {
    width: 450px;
    height: 200px;
    resize: none;
    margin: 10px 0 20px 0;
    padding: 4px 10px;
    outline: none;
    font-size: 16px;
    border: 3px solid #555555;
    border-radius: 6px;
    font-family: Ubuntu;
}

#actions {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#actions d-button {
    --padding-top: 4px;
    --padding-bottom: 4px;
    --padding-left: 16px;
    --padding-right: 16px;

    font-size: 18px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}
`;
        let el = class extends ie {
            constructor() {
                super(...arguments), this.complete = !1, this.requesting = !1
            }
            close() {
                du.singleton.toggleReport()
            }
            async submit() {
                this.reportingIdentity ? this.requesting || (this.requesting = !0, await this.identityManager.service.reportIdentity({
                    identityId: this.reportingIdentity.identityId,
                    reason: this.reasonInput.value.substring(0, 300)
                }), du.singleton.reportedIdentities.add(this.reportingIdentity.identityId), this.complete = !0) : console.warn("no report subject")
            }
            onInputKeydown(e) {
                e.stopPropagation()
            }
            render() {
                return N`
        <div id="base">
            ${ou(this.complete,this.renderThankYou.bind(this),this.renderReport.bind(this))}
        </div>
    `
            }
            renderReport() {
                return N`<h2 id="title">
            Report
            ${this.reportingIdentity?this.reportingIdentity.displayName:"user"}?
        </h2>
        <textarea
            id="reason-input"
            maxlength="300"
            placeholder="Report reason (optional, 300 characters)"
            @keydown=${this.onInputKeydown.bind(this)}
        ></textarea>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Cancel</d-button
            ><d-button
                bg=${Au(2)}
                border="3"
                .trigger=${this.submit.bind(this)}
                >Report</d-button
            >
        </div>`
            }
            renderThankYou() {
                return N`<h2 id="title">Thank you</h2>
        <p>Your report will be handled appropriately.</p>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>`
            }
        };
        el.styles = Qd, Zd([ce()], el.prototype, "complete", void 0), Zd([ce()], el.prototype, "reportingIdentity", void 0), Zd([ue("#reason-input")], el.prototype, "reasonInput", void 0), el = Zd([ae("d-report")], el);
        var tl = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const nl = s`
#base {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-color: #55555555;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: all;
}

#title {
    font-size: 40px;
    text-align: center;
    margin: 0 0 15px 0;

    text-shadow: ${$u(3)};
}

p {
    margin-top: 0;
    max-width: 520px;
    text-align: center;
}

textarea {
    width: 450px;
    height: 200px;
    resize: none;
    margin: 10px 0 20px 0;
    padding: 4px 10px;
    outline: none;
    font-size: 16px;
    border: 3px solid #555555;
    border-radius: 6px;
    font-family: Ubuntu;
}

#actions {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#actions d-button {
    --padding-top: 4px;
    --padding-bottom: 4px;
    --padding-left: 16px;
    --padding-right: 16px;

    font-size: 18px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}
`;
        let rl = class extends ie {
            constructor() {
                super(...arguments), this.expired = !1
            }
            close() {
                du.singleton.toggleScreen("link")
            }
            cancel() {
                du.singleton.cancelGameLink(), this.close()
            }
            render() {
                return N`
        <div id="base">
            ${ou(this.expired,this.renderExpired.bind(this),(()=>he(this.managerCtx.linkStatus,[[vo.INCOMPLETE,this.renderIncomplete.bind(this)],[vo.COMPLETE,this.renderComplete.bind(this)],[vo.CANCELLED,this.renderCancelled.bind(this)]])))}
        </div>
    `
            }
            renderIncomplete() {
                return N`<h2 id="title">Registering...</h2>
        <p>
            Complete the registration process in the new tab. If you don't
            see a new tab, click the button below.
        </p>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.cancel.bind(this)}
                >Cancel</d-button
            >
            <d-button
                bg=${Au(0)}
                border="3"
                .href=${this.managerCtx.identityLinkUrl}
                >Click Here</d-button
            >
        </div>`
            }
            renderComplete() {
                return N`<h2 id="title">Sign in complete</h2>
        <p>Enjoy!</p>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>`
            }
            renderCancelled() {
                return N`<h2 id="title">Sign in cancelled</h2>
        <p>The sign in process was cancelled.</p>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>`
            }
            renderExpired() {
                return N`<h2 id="title">Sign in expired</h2>
        <p>
            The sign in process expired. Use the register button to try
            again.
        </p>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>`
            }
        };
        rl.styles = nl, tl([ce()], rl.prototype, "managerCtx", void 0), tl([ce()], rl.prototype, "linkStatus", void 0), tl([ce({
            type: Boolean
        })], rl.prototype, "expired", void 0), rl = tl([ae("d-link")], rl);
        var il = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const ol = s`
#base {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    padding: 40px 0;
    box-sizing: border-box;
    background-color: #55555555;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#title {
    font-size: 40px;
    text-align: center;
    margin: 0 0 15px 0;

    text-shadow: ${$u(3)};
}

p {
    margin-top: 0;
    max-width: 520px;
    text-align: center;
}

#friends {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    pointer-events: all;
    overflow-y: auto;
}

#friends d-identity-tile {
    width: 100%;
    display: block;
    pointer-events: all;
    --avatar-size: 36px;
    font-size: 24px;
}

#friends d-identity-tile:not(:last-child) {
    margin-bottom: 12px;
}

#friends d-identity-tile d-button {
    font-size: 18px;
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 16px;
    --padding-right: 16px;
}

d-identity-tile d-button .button-body {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

d-identity-tile d-button .button-body .icon {
    --icon-size: 18px;
    margin-left: 6px;
    width: var(--icon-size);
    height: var(--icon-size);
    border-width: 1px;
}

d-identity-tile d-button .icon.flag {
    border-radius: calc(var(--icon-size) / 4);
    background-size: cover;
    background-position: center;
    border: 1px solid black;
}

d-identity-tile d-button .button-body .label {
    flex: 1 0;
    text-align: center;
    text-shadow: ${$u(1)};
}

#actions {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#actions d-button {
    --padding-top: 4px;
    --padding-bottom: 4px;
    --padding-left: 16px;
    --padding-right: 16px;

    font-size: 18px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}
`;
        let al = class extends ie {
            constructor() {
                super(...arguments), this.lastFriendUpdate = 0, this.gameModes = []
            }
            close() {
                du.singleton.toggleScreen("friends")
            }
            joinFriend(e, t) {
                du.singleton.joinLobby(e, t)
            }
            render() {
                return N`<div id="base">
        <h2 id="title">Friends</h2>

        ${ou(0!=this.managerCtx.friends.length,(()=>N`<div id="friends">
                    ${_d(this.managerCtx.friends,(e=>e.identityId),(e=>this.renderFriend(e)))}
                </div>`),(()=>N`<p>No friends online :(</p>`))}
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>
    </div>`
            }
            renderFriend(e) {
                var t;
                let n, r, i, o, a = e.presence.gameActivity,
                    s = (null === (t = null == a ? void 0 : a.game) || void 0 === t ? void 0 : t.gameId) == this.identityManager.gameId,
                    c = !1;
                if (s && a.mutualMetadata) {
                    let e = a.mutualMetadata.region;
                    o = a.mutualMetadata.lobbyId, i = a.mutualMetadata.gameMode, e && i && (n = cu.find((t => t.id == e)), r = Au(this.gameModes.findIndex((e => e.id == i))), o && (c = !0))
                }
                return N`<d-identity-tile .identity=${e}
        ><div slot="actions">
            ${ou(c,(()=>N`<d-button
                    bg=${r}
                    border="3"
                    .trigger=${this.joinFriend.bind(this,o,i)}
                    ><div class="button-body">
                        <div class="label">Join</div>
                        <div
                            class="icon flag"
                            style=${pe({"background-image":`url(${n.icon})`})}
                        ></div>
                        <d-icon
                            class="icon"
                            .icon=${Ed[i]}
                        ></d-icon></div
                ></d-button>`),(()=>N`<d-button bg=${Au(-1)} disabled border="3"
                    >${s?"Can't join game mode":"Not playing Diep"}</d-button
                >`))}
        </div>
    </d-identity-tile>`
            }
        };
        al.styles = ol, il([ce()], al.prototype, "managerCtx", void 0), il([ce({
            type: Number
        })], al.prototype, "lastFriendUpdate", void 0), il([ce()], al.prototype, "gameModes", void 0), al = il([ae("d-friends")], al);
        var sl = function(e, t, n, r) {
            var i, o = arguments.length,
                a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        };
        const cl = s`
#base {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    padding: 40px 0;
    box-sizing: border-box;
    background-color: #55555555;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#title {
    font-size: 40px;
    text-align: center;
    margin: 0 0 15px 0;

    text-shadow: ${$u(3)};
}

p {
    margin-top: 0;
    max-width: 520px;
    text-align: center;
}

#players {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    pointer-events: all;
    overflow-y: auto;
}

#players d-identity-tile {
    width: 100%;
    display: block;
    pointer-events: all;
    --avatar-size: 36px;
    font-size: 24px;
}

#players d-identity-tile:not(:last-child) {
    margin-bottom: 12px;
}

#players d-identity-tile d-button {
    font-size: 18px;
    --padding-top: 6px;
    --padding-bottom: 6px;
    --padding-left: 16px;
    --padding-right: 16px;
}

#players d-identity-tile d-button:not(:last-child) {
    margin-right: 6px;
}

#actions {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#actions d-button {
    --padding-top: 4px;
    --padding-bottom: 4px;
    --padding-left: 16px;
    --padding-right: 16px;

    font-size: 18px;
}

#actions d-button:not(:last-child) {
    margin-right: 10px;
}
`;
        let ul = class extends ie {
            constructor() {
                super(...arguments), this.players = [], this.fetchedPlayerCount = 0
            }
            connectedCallback() {
                super.connectedCallback(), this.handleKeyDown = this.onWindowKeyDown.bind(this), window.addEventListener("keydown", this.handleKeyDown)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), window.removeEventListener("keydown", this.handleKeyDown)
            }
            onWindowKeyDown(e) {
                "Tab" == e.key && du.singleton.toggleScreen("users")
            }
            close() {
                du.singleton.toggleScreen("users")
            }
            report(e) {
                du.singleton.toggleReport(e)
            }
            follow(e) {
                if (!this.managerCtx.players.has(e)) return;
                let t = this.managerCtx.players.get(e);
                t.following = !t.following, t.following ? this.identityManager.service.followIdentity({
                    identityId: e
                }).catch(console.error) : this.identityManager.service.unfollowIdentity({
                    identityId: e
                }).catch(console.error), this.requestUpdate()
            }
            render() {
                return N`<div id="base">
        <h2 id="title">Players</h2>

        <div id="players">
            ${_d(this.players,(e=>e.identityId),(e=>this.renderPlayer(e)))}
        </div>
        <div id="actions">
            <d-button
                bg=${Au(-1)}
                border="3"
                .trigger=${this.close.bind(this)}
                >Close</d-button
            >
        </div>
    </div>`
            }
            renderPlayer(e) {
                if (!this.managerCtx.players.has(e.identityId)) return;
                let t = this.managerCtx.players.get(e.identityId),
                    n = du.singleton.reportedIdentities.has(t.identityId);
                return N`<d-identity-tile
        .identity=${t}
        .nickname=${e.name}
        >${ou(t.identityId!=this.managerCtx.identity.identityId,(()=>N`<div slot="actions">
                <d-button
                    bg=${Au(0)}
                    border="2"
                    .trigger=${this.follow.bind(this,t.identityId)}
                    >${t.following?"Unfollow":"Follow"}</d-button
                >
                ${ou(!n,(()=>N`<d-button
                        bg=${Au(2)}
                        border="2"
                        .trigger=${this.report.bind(this,t.identityId)}
                        >Report</d-button
                    >`))}
            </div>`))}
    </d-identity-tile>`
            }
        };
        ul.styles = cl, sl([ce()], ul.prototype, "managerCtx", void 0), sl([ce()], ul.prototype, "players", void 0), sl([ce({
            type: Number
        })], ul.prototype, "fetchedPlayerCount", void 0), ul = sl([ae("d-users")], ul), window.addEventListener("resize", Od), Od(), window.addEventListener("DOMContentLoaded", (() => {
            let e = new du;
            e.classList.add("diep-native"), du.singleton = window.ui = e, Od(), document.body.appendChild(e)
        })), n(9294)
    }()
}();