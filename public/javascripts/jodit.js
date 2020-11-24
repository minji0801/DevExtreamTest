/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.4.25
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var o = t();
        for (var r in o)("object" == typeof exports ? exports : e)[r] = o[r]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function o(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) o.d(r, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return r
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "/build/", o(o.s = 72)
    }([function(e, t, o) {
        "use strict";
        o.r(t), o.d(t, "__extends", (function() {
            return n
        })), o.d(t, "__assign", (function() {
            return i
        })), o.d(t, "__rest", (function() {
            return a
        })), o.d(t, "__decorate", (function() {
            return s
        })), o.d(t, "__param", (function() {
            return l
        })), o.d(t, "__metadata", (function() {
            return c
        })), o.d(t, "__awaiter", (function() {
            return u
        })), o.d(t, "__generator", (function() {
            return d
        })), o.d(t, "__createBinding", (function() {
            return p
        })), o.d(t, "__exportStar", (function() {
            return f
        })), o.d(t, "__values", (function() {
            return h
        })), o.d(t, "__read", (function() {
            return m
        })), o.d(t, "__spread", (function() {
            return v
        })), o.d(t, "__spreadArrays", (function() {
            return g
        })), o.d(t, "__await", (function() {
            return y
        })), o.d(t, "__asyncGenerator", (function() {
            return b
        })), o.d(t, "__asyncDelegator", (function() {
            return _
        })), o.d(t, "__asyncValues", (function() {
            return w
        })), o.d(t, "__makeTemplateObject", (function() {
            return S
        })), o.d(t, "__importStar", (function() {
            return j
        })), o.d(t, "__importDefault", (function() {
            return k
        })), o.d(t, "__classPrivateFieldGet", (function() {
            return E
        })), o.d(t, "__classPrivateFieldSet", (function() {
            return x
        }));
        var r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                })(e, t)
        };

        function n(e, t) {
            function o() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }
        var i = function() {
            return (i = Object.assign || function(e) {
                for (var t, o = 1, r = arguments.length; r > o; o++)
                    for (var n in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        };

        function a(e, t) {
            var o = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (o[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (r = Object.getOwnPropertySymbols(e); r.length > n; n++) 0 > t.indexOf(r[n]) && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]])
            }
            return o
        }

        function s(e, t, o, r) {
            var n, i = arguments.length,
                a = 3 > i ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (3 > i ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
            return i > 3 && a && Object.defineProperty(t, o, a), a
        }

        function l(e, t) {
            return function(o, r) {
                t(o, r, e)
            }
        }

        function c(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function u(e, t, o, r) {
            return new(o || (o = Promise))((function(n, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                l((r = r.apply(e, t || [])).next())
            }))
        }

        function d(e, t) {
            var o, r, n, i, a = {
                label: 0,
                sent: function() {
                    if (1 & n[0]) throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (o) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                            switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                                case 0:
                                case 1:
                                    n = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!n || i[1] > n[0] && n[3] > i[1])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && n[1] > a.label) {
                                        a.label = n[1], n = i;
                                        break
                                    }
                                    if (n && n[2] > a.label) {
                                        a.label = n[2], a.ops.push(i);
                                        break
                                    }
                                    n[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            o = n = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        var p = Object.create ? function(e, t, o, r) {
            void 0 === r && (r = o), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        } : function(e, t, o, r) {
            void 0 === r && (r = o), e[r] = t[o]
        };

        function f(e, t) {
            for (var o in e) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || p(t, e, o)
        }

        function h(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                o = t && e[t],
                r = 0;
            if (o) return o.call(e);
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

        function m(e, t) {
            var o = "function" == typeof Symbol && e[Symbol.iterator];
            if (!o) return e;
            var r, n, i = o.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (o = i.return) && o.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
            return a
        }

        function v() {
            for (var e = [], t = 0; arguments.length > t; t++) e = e.concat(m(arguments[t]));
            return e
        }

        function g() {
            for (var e = 0, t = 0, o = arguments.length; o > t; t++) e += arguments[t].length;
            var r = Array(e),
                n = 0;
            for (t = 0; o > t; t++)
                for (var i = arguments[t], a = 0, s = i.length; s > a; a++, n++) r[n] = i[a];
            return r
        }

        function y(e) {
            return this instanceof y ? (this.v = e, this) : new y(e)
        }

        function b(e, t, o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, n = o.apply(e, t || []),
                i = [];
            return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r;

            function a(e) {
                n[e] && (r[e] = function(t) {
                    return new Promise((function(o, r) {
                        i.push([e, t, o, r]) > 1 || s(e, t)
                    }))
                })
            }

            function s(e, t) {
                try {
                    (o = n[e](t)).value instanceof y ? Promise.resolve(o.value.v).then(l, c) : u(i[0][2], o)
                } catch (e) {
                    u(i[0][3], e)
                }
                var o
            }

            function l(e) {
                s("next", e)
            }

            function c(e) {
                s("throw", e)
            }

            function u(e, t) {
                e(t), i.shift(), i.length && s(i[0][0], i[0][1])
            }
        }

        function _(e) {
            var t, o;
            return t = {}, r("next"), r("throw", (function(e) {
                throw e
            })), r("return"), t[Symbol.iterator] = function() {
                return this
            }, t;

            function r(r, n) {
                t[r] = e[r] ? function(t) {
                    return (o = !o) ? {
                        value: y(e[r](t)),
                        done: "return" === r
                    } : n ? n(t) : t
                } : n
            }
        }

        function w(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, o = e[Symbol.asyncIterator];
            return o ? o.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                return this
            }, t);

            function r(o) {
                t[o] = e[o] && function(t) {
                    return new Promise((function(r, n) {
                        ! function(e, t, o, r) {
                            Promise.resolve(r).then((function(t) {
                                e({
                                    value: t,
                                    done: o
                                })
                            }), t)
                        }(r, n, (t = e[o](t)).done, t.value)
                    }))
                }
            }
        }

        function S(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t, e
        }
        var C = Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        };

        function j(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && p(t, e, o);
            return C(t, e), t
        }

        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E(e, t) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }

        function x(e, t, o) {
            if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
            return t.set(e, o), o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(12), t), r.__exportStar(o(23), t), r.__exportStar(o(119), t), r.__exportStar(o(30), t), r.__exportStar(o(5), t), r.__exportStar(o(33), t), r.__exportStar(o(122), t), r.__exportStar(o(35), t), r.__exportStar(o(137), t), r.__exportStar(o(13), t), r.__exportStar(o(142), t), r.__exportStar(o(143), t), r.__exportStar(o(144), t), r.__exportStar(o(145), t), r.__exportStar(o(146), t), r.__exportStar(o(147), t), r.__exportStar(o(43), t), r.__exportStar(o(148), t), r.__exportStar(o(52), t), r.__exportStar(o(149), t), r.__exportStar(o(29), t), r.__exportStar(o(42), t), r.__exportStar(o(53), t), r.__exportStar(o(150), t), r.__exportStar(o(151), t), r.__exportStar(o(34), t), r.__exportStar(o(32), t), r.__exportStar(o(152), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Dom = void 0;
        var r = o(3),
            n = o(1),
            i = o(54),
            a = function() {
                function e() {}
                return e.detach = function(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }, e.wrapInline = function(t, o, r) {
                    var i, a = t,
                        s = t,
                        l = r.s.save(),
                        c = !1;
                    do {
                        c = !1, (i = a.previousSibling) && !e.isBlock(i, r.ew) && (c = !0, a = i)
                    } while (c);
                    do {
                        c = !1, (i = s.nextSibling) && !e.isBlock(i, r.ew) && (c = !0, s = i)
                    } while (c);
                    var u = n.isString(o) ? r.createInside.element(o) : o;
                    a.parentNode && a.parentNode.insertBefore(u, a);
                    for (var d = a; d && (d = a.nextSibling, u.appendChild(a), a !== s && d);) a = d;
                    return r.s.restore(l), u
                }, e.wrap = function(e, t, o) {
                    var r = o.s.save(),
                        i = n.isString(t) ? o.createInside.element(t) : t;
                    return e.parentNode ? (e.parentNode.insertBefore(i, e), i.appendChild(e), o.s.restore(r), i) : null
                }, e.unwrap = function(t) {
                    var o = t.parentNode;
                    if (o) {
                        for (; t.firstChild;) o.insertBefore(t.firstChild, t);
                        e.safeRemove(t)
                    }
                }, e.each = function(t, o) {
                    var r = t.firstChild;
                    if (r)
                        for (; r;) {
                            var n = e.next(r, Boolean, t);
                            if (!1 === o(r)) return !1;
                            if (r.parentNode && !e.each(r, o)) return !1;
                            r = n
                        }
                    return !0
                }, e.replace = function(e, t, o, r, i) {
                    void 0 === r && (r = !1), void 0 === i && (i = !1);
                    var a = n.isString(t) ? o.element(t) : t;
                    if (!i)
                        for (; e.firstChild;) a.appendChild(e.firstChild);
                    return r && n.toArray(e.attributes).forEach((function(e) {
                        a.setAttribute(e.name, e.value)
                    })), e.parentNode && e.parentNode.replaceChild(a, e), a
                }, e.isEmptyTextNode = function(t) {
                    return e.isText(t) && (!t.nodeValue || 0 === t.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP(), "").length)
                }, e.isEmpty = function(t, o) {
                    return void 0 === o && (o = /^(img|svg|canvas|input|textarea|form)$/), !t || (e.isText(t) ? null === t.nodeValue || 0 === n.trim(t.nodeValue).length : !o.test(t.nodeName.toLowerCase()) && e.each(t, (function(t) {
                        if (e.isText(t) && null !== t.nodeValue && 0 !== n.trim(t.nodeValue).length || e.isElement(t) && o.test(t.nodeName.toLowerCase())) return !1
                    })))
                }, e.isNode = function(e, t) {
                    return !!e && !("object" != typeof t || !t || "function" != typeof t.Node && "object" != typeof t.Node) && e instanceof t.Node
                }, e.isCell = function(t, o) {
                    return e.isNode(t, o) && /^(td|th)$/i.test(t.nodeName)
                }, e.isImage = function(t, o) {
                    return e.isNode(t, o) && /^(img|svg|picture|canvas)$/i.test(t.nodeName)
                }, e.isBlock = function(t, o) {
                    return t && "object" == typeof t && e.isNode(t, o) && r.IS_BLOCK.test(t.nodeName)
                }, e.isText = function(e) {
                    return Boolean(e && e.nodeType === Node.TEXT_NODE)
                }, e.isElement = function(e) {
                    return Boolean(e && e.nodeType === Node.ELEMENT_NODE)
                }, e.isHTMLElement = function(t, o) {
                    return e.isNode(t, o) && t instanceof o.HTMLElement
                }, e.isInlineBlock = function(t) {
                    return e.isElement(t) && !/^(BR|HR)$/i.test(t.tagName) && -1 !== ["inline", "inline-block"].indexOf(n.css(t, "display").toString())
                }, e.canSplitBlock = function(t, o) {
                    return t && t instanceof o.HTMLElement && e.isBlock(t, o) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && void 0 !== t.style && !/^(fixed|absolute)/i.test(t.style.position)
                }, e.prev = function(t, o, r, n) {
                    return void 0 === n && (n = !0), e.find(t, o, r, !1, "previousSibling", !!n && "lastChild")
                }, e.next = function(t, o, r, n) {
                    return void 0 === n && (n = !0), e.find(t, o, r, void 0, void 0, !!n && "firstChild")
                }, e.prevWithClass = function(t, o) {
                    return e.prev(t, (function(t) {
                        return e.isElement(t) && t.classList.contains(o)
                    }), t.parentNode)
                }, e.nextWithClass = function(t, o) {
                    return e.next(t, (function(t) {
                        return e.isElement(t) && t.classList.contains(o)
                    }), t.parentNode)
                }, e.find = function(t, o, r, n, i, a) {
                    if (void 0 === n && (n = !1), void 0 === i && (i = "nextSibling"), void 0 === a && (a = "firstChild"), n && o(t)) return t;
                    var s, l = t;
                    do {
                        if (o(s = l[i])) return s || null;
                        if (a && s && s[a]) {
                            var c = e.find(s[a], o, s, !0, i, a);
                            if (c) return c
                        }
                        s || (s = l.parentNode), l = s
                    } while (l && l !== r);
                    return null
                }, e.findWithCurrent = function(t, o, r, n, i) {
                    void 0 === n && (n = "nextSibling"), void 0 === i && (i = "firstChild");
                    var a = t;
                    do {
                        if (o(a)) return a || null;
                        if (i && a && a[i]) {
                            var s = e.findWithCurrent(a[i], o, a, n, i);
                            if (s) return s
                        }
                        for (; a && !a[n] && a !== r;) a = a.parentNode;
                        a && a[n] && a !== r && (a = a[n])
                    } while (a && a !== r);
                    return null
                }, e.getNormalSibling = function(t, o, r) {
                    void 0 === o && (o = !0), void 0 === r && (r = function(t) {
                        return !e.isEmptyTextNode(t)
                    });
                    for (var n = i.getSibling(t, o); n && !r(n);) n = i.getSibling(n, o);
                    return n && r(n) ? n : null
                }, e.up = function(e, t, o, r) {
                    void 0 === r && (r = !1);
                    var n = e;
                    if (!n) return null;
                    do {
                        if (t(n)) return n;
                        if (n === o || !n.parentNode) break;
                        n = n.parentNode
                    } while (n && n !== o);
                    return n === o && r && t(n) ? n : null
                }, e.closest = function(t, o, r) {
                    var i;
                    return i = n.isFunction(o) ? o : n.isArray(o) ? function(e) {
                        return e && o.includes(e.nodeName.toLowerCase())
                    } : function(e) {
                        return e && o === e.nodeName.toLowerCase()
                    }, e.up(t, i, r)
                }, e.appendChildFirst = function(e, t) {
                    var o = e.firstChild;
                    o ? o !== t && e.insertBefore(t, o) : e.appendChild(t)
                }, e.after = function(e, t) {
                    var o = e.parentNode;
                    o && (o.lastChild === e ? o.appendChild(t) : o.insertBefore(t, e.nextSibling))
                }, e.before = function(e, t) {
                    var o = e.parentNode;
                    o && o.insertBefore(t, e)
                }, e.prepend = function(e, t) {
                    e.insertBefore(t, e.firstChild)
                }, e.append = function(e, t) {
                    e.appendChild(t)
                }, e.moveContent = function(e, t, o) {
                    void 0 === o && (o = !1);
                    var r = (e.ownerDocument || document).createDocumentFragment();
                    n.toArray(e.childNodes).forEach((function(e) {
                        r.appendChild(e)
                    })), o && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r)
                }, e.all = function(t, o, r) {
                    void 0 === r && (r = !1);
                    var i = t.childNodes ? n.toArray(t.childNodes) : [];
                    return o(t) ? t : (r && (i = i.reverse()), i.forEach((function(t) {
                        e.all(t, o, r)
                    })), null)
                }, e.isOrContains = function(e, t, o) {
                    return void 0 === o && (o = !1), e === t ? !o : Boolean(t && e && this.up(t, (function(t) {
                        return t === e
                    }), e, !0))
                }, e.safeRemove = function(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, e.hide = function(e) {
                    e && (n.dataBind(e, "__old_display", e.style.display), e.style.display = "none")
                }, e.show = function(e) {
                    if (e) {
                        var t = n.dataBind(e, "__old_display");
                        "none" === e.style.display && (e.style.display = t || "")
                    }
                }, e.isTag = function(e, t) {
                    for (var o = n.asArray(t).map(String), r = 0; o.length > r; r += 1)
                        if (this.isElement(e) && e.tagName.toLowerCase() === o[r].toLowerCase()) return !0;
                    return !1
                }, e.findInline = function(t, o, r) {
                    var n = t,
                        i = null;
                    do {
                        if (!n) break;
                        if ((i = o ? n.previousSibling : n.nextSibling) || !n.parentNode || n.parentNode === r || !e.isInlineBlock(n.parentNode)) break;
                        n = n.parentNode
                    } while (!i);
                    for (; i && e.isInlineBlock(i) && (o ? i.lastChild : i.firstChild);) i = o ? i.lastChild : i.firstChild;
                    return i
                }, e
            }();
        t.Dom = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BASE_PATH = t.KEY_ALIASES = t.IS_MAC = t.SAFE_COUNT_CHANGE_CALL = t.INSERT_ONLY_TEXT = t.INSERT_AS_TEXT = t.INSERT_CLEAR_HTML = t.INSERT_AS_HTML = t.EMULATE_DBLCLICK_TIMEOUT = t.MARKER_CLASS = t.TEXT_HTML = t.TEXT_PLAIN = t.IS_IE = t.MODE_SPLIT = t.MODE_SOURCE = t.MODE_WYSIWYG = t.PARAGRAPH = t.BR = t.COMMAND_KEYS = t.ACCURACY = t.NEARBY = t.KEY_F3 = t.KEY_DELETE = t.KEY_DOWN = t.KEY_RIGHT = t.KEY_UP = t.KEY_LEFT = t.KEY_ESC = t.KEY_ENTER = t.KEY_TAB = t.KEY_BACKSPACE = t.MAY_BE_REMOVED_WITH_KEY = t.INSEPARABLE_TAGS = t.IS_INLINE = t.IS_BLOCK = t.SPACE_REG_EXP_END = t.SPACE_REG_EXP_START = t.SPACE_REG_EXP = t.INVISIBLE_SPACE_REG_EXP_START = t.INVISIBLE_SPACE_REG_EXP_END = t.INVISIBLE_SPACE_REG_EXP = t.INVISIBLE_SPACE = void 0, t.INVISIBLE_SPACE = "\ufeff", t.INVISIBLE_SPACE_REG_EXP = function() {
            return /[\uFEFF]/g
        }, t.INVISIBLE_SPACE_REG_EXP_END = function() {
            return /[\uFEFF]+$/g
        }, t.INVISIBLE_SPACE_REG_EXP_START = function() {
            return /^[\uFEFF]+/g
        }, t.SPACE_REG_EXP = function() {
            return /[\s\n\t\r\uFEFF\u200b]+/g
        }, t.SPACE_REG_EXP_START = function() {
            return /^[\s\n\t\r\uFEFF\u200b]+/g
        }, t.SPACE_REG_EXP_END = function() {
            return /[\s\n\t\r\uFEFF\u200b]+$/g
        }, t.IS_BLOCK = /^(ARTICLE|SCRIPT|IFRAME|JODIT|JODIT-MEDIA|PRE|DIV|P|LI|UL|OL|H[1-6]|BLOCKQUOTE|TR|TD|TH|TBODY|THEAD|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD|DL|DFN)$/i, t.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/i, t.INSEPARABLE_TAGS = ["img", "br", "video", "iframe", "script", "input", "textarea", "hr", "link", "jodit", "jodit-media"], t.MAY_BE_REMOVED_WITH_KEY = RegExp("^" + t.INSEPARABLE_TAGS.join("|") + "$", "i"), t.KEY_BACKSPACE = "Backspace", t.KEY_TAB = "Tab", t.KEY_ENTER = "Enter", t.KEY_ESC = "Escape", t.KEY_LEFT = "ArrowLeft", t.KEY_UP = "ArrowUp", t.KEY_RIGHT = "ArrowRight", t.KEY_DOWN = "ArrowDown", t.KEY_DELETE = "Delete", t.KEY_F3 = "F3", t.NEARBY = 5, t.ACCURACY = 10, t.COMMAND_KEYS = [t.KEY_BACKSPACE, t.KEY_DELETE, t.KEY_UP, t.KEY_DOWN, t.KEY_RIGHT, t.KEY_LEFT, t.KEY_ENTER, t.KEY_ESC, t.KEY_F3, t.KEY_TAB], t.BR = "br", t.PARAGRAPH = "p", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.IS_IE = "undefined" != typeof navigator && (-1 !== navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent)), t.TEXT_PLAIN = t.IS_IE ? "text" : "text/plain", t.TEXT_HTML = t.IS_IE ? "text" : "text/html", t.MARKER_CLASS = "jodit-selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.INSERT_AS_HTML = "insert_as_html", t.INSERT_CLEAR_HTML = "insert_clear_html", t.INSERT_AS_TEXT = "insert_as_text", t.INSERT_ONLY_TEXT = "insert_only_text", t.SAFE_COUNT_CHANGE_CALL = 10, t.IS_MAC = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t.KEY_ALIASES = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: t.IS_MAC ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
        }, t.BASE_PATH = function() {
            if ("undefined" == typeof document) return "";
            var e = document.currentScript,
                t = function(e) {
                    return e.replace(/\/[^/]+.js$/, "/")
                };
            if (e) return t(e.src);
            var o = document.querySelectorAll("script[src]");
            return o && o.length ? t(o[o.length - 1].src) : window.location.href
        }()
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.configFactory = t.OptionsDefault = t.Config = void 0;
        var r = o(0),
            n = o(3),
            i = o(2),
            a = o(1),
            s = o(17),
            l = function() {
                function e() {
                    this.iframe = !1, this.license = "", this.preset = "custom", this.presets = {
                        inline: {
                            inline: !0,
                            toolbar: !1,
                            toolbarInline: !0,
                            toolbarInlineForSelection: !0,
                            showXPathInStatusbar: !1,
                            showCharsCounter: !1,
                            showWordsCounter: !1,
                            showPlaceholder: !1
                        }
                    }, this.ownerDocument = "undefined" != typeof document ? document : null, this.ownerWindow = "undefined" != typeof window ? window : null, this.shadowRoot = null, this.zIndex = 0, this.readonly = !1, this.disabled = !1, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.toolbarButtonSize = "middle", this.allowTabNavigation = !1, this.inline = !1, this.theme = "default", this.saveModeInStorage = !1, this.spellcheck = !0, this.editorCssClass = !1, this.style = !1, this.triggerChangeEvent = !0, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = !1, this.tabIndex = -1, this.toolbar = !0, this.showTooltip = !0, this.showTooltipDelay = 1e3, this.useNativeTooltip = !1, this.enter = n.PARAGRAPH, this.enterBlock = "br" !== this.enter ? this.enter : n.PARAGRAPH, this.defaultMode = n.MODE_WYSIWYG, this.useSplitMode = !1, this.colors = {
                        greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"],
                        palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"],
                        full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"]
                    }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraPlugins = [], this.extraButtons = [], this.createAttributes = {}, this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "eraser", "|", "superscript", "subscript", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "file", "video", "table", "link", "|", "align", "undo", "redo", "\n", "selectall", "cut", "copy", "paste", "copyformat", "|", "hr", "symbol", "fullsize", "print", "preview", "find", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "eraser", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "\n", "undo", "redo", "|", "hr", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "eraser", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "\n", "link", "|", "align", "|", "undo", "redo", "|", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "eraser", "\n", "align", "|", "undo", "redo", "|", "dots"], this.events = {}, this.textIcons = !1, this.showBrowserColorPicker = !0
                }
                return Object.defineProperty(e, "defaultOptions", {
                    get: function() {
                        return e.__defaultOptions || (e.__defaultOptions = new e), e.__defaultOptions
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }();
        t.Config = l, t.OptionsDefault = function(e, t) {
            var o = this;
            void 0 === t && (t = l.defaultOptions);
            var r = this;
            if (r.plainOptions = e, void 0 !== e && "object" == typeof e) {
                var n = function(e, i) {
                    if ("preset" === i && void 0 !== t.presets[e.preset]) {
                        var s = t.presets[e.preset];
                        Object.keys(s).forEach(n.bind(o, s))
                    }
                    var l = t[i];
                    r[i] = "object" != typeof l || null === l || ["ownerWindow", "ownerDocument"].includes(i) || a.isArray(l) ? e[i] : a.extend(!0, {}, l, e[i])
                };
                Object.keys(e).forEach(n.bind(this, e))
            }
        }, l.prototype.controls = {
            image: {
                popup: function(e, t, o, n) {
                    var l = null;
                    t && !i.Dom.isText(t) && i.Dom.isHTMLElement(t, e.ew) && (i.Dom.isTag(t, "img") || a.$$("img", t).length) && (l = i.Dom.isTag(t, "img") ? t : a.$$("img", t)[0]);
                    var c = e.s.save();
                    return s.FileSelectorWidget(e, {
                        filebrowser: function(t) {
                            e.s.restore(c), t.files && t.files.forEach((function(o) {
                                return e.s.insertImage(t.baseurl + o, null, e.o.imageDefaultWidth)
                            })), n()
                        },
                        upload: !0,
                        url: function(t, o) {
                            return r.__awaiter(void 0, void 0, void 0, (function() {
                                var i;
                                return r.__generator(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e.s.restore(c), (i = l || e.createInside.element("img")).setAttribute("src", t), i.setAttribute("alt", o), l ? [3, 2] : [4, e.s.insertImage(i, null, e.o.imageDefaultWidth)];
                                        case 1:
                                            r.sent(), r.label = 2;
                                        case 2:
                                            return n(), [2]
                                    }
                                }))
                            }))
                        }
                    }, l, n)
                },
                tags: ["img"],
                tooltip: "Insert Image"
            },
            file: {
                popup: function(e, t, o, r) {
                    var n = function(t, o) {
                            void 0 === o && (o = ""), e.s.insertNode(e.createInside.fromHTML('<a href="' + t + '" title="' + o + '">' + (o || t) + "</a>"))
                        },
                        a = null;
                    return t && (i.Dom.isTag(t, "a") || i.Dom.closest(t, "a", e.editor)) && (a = i.Dom.isTag(t, "a") ? t : i.Dom.closest(t, "a", e.editor)), s.FileSelectorWidget(e, {
                        filebrowser: function(e) {
                            e.files && e.files.forEach((function(t) {
                                return n(e.baseurl + t)
                            })), r()
                        },
                        upload: !0,
                        url: function(e, t) {
                            a ? (a.setAttribute("href", e), a.setAttribute("title", t)) : n(e, t), r()
                        }
                    }, a, r, !1)
                },
                tags: ["a"],
                tooltip: "Insert file"
            }
        }, t.configFactory = function(e) {
            return new t.OptionsDefault(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(84), t), r.__exportStar(o(85), t), r.__exportStar(o(86), t), r.__exportStar(o(101), t), r.__exportStar(o(31), t), r.__exportStar(o(102), t), r.__exportStar(o(103), t), r.__exportStar(o(104), t), r.__exportStar(o(105), t), r.__exportStar(o(106), t), r.__exportStar(o(107), t), r.__exportStar(o(108), t), r.__exportStar(o(49), t), r.__exportStar(o(109), t), r.__exportStar(o(19), t), r.__exportStar(o(110), t), r.__exportStar(o(111), t), r.__exportStar(o(112), t), r.__exportStar(o(50), t), r.__exportStar(o(113), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Plugin = void 0;
        var r = o(0),
            n = o(8),
            i = o(9),
            a = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return t.e.on("afterInit", o.afterInit.bind(o, t)).on("beforeDestruct", o.destruct), o.setStatus(i.STATUSES.ready), o
                }
                return r.__extends(t, e), t.prototype.init = function(e) {}, t.prototype.destruct = function() {
                    var t, o;
                    this.isInDestruct || (this.setStatus(i.STATUSES.beforeDestruct), null === (o = null === (t = this.j) || void 0 === t ? void 0 : t.events) || void 0 === o || o.off("beforeDestruct", this.destruct), this.beforeDestruct(this.j), e.prototype.destruct.call(this))
                }, r.__decorate([n.default], t.prototype, "destruct", null), t
            }(i.ViewComponent);
        t.Plugin = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(20), t), r.__exportStar(o(15), t), r.__exportStar(o(24), t), r.__exportStar(o(56), t), r.__exportStar(o(57), t), r.__exportStar(o(160), t), r.__exportStar(o(36), t), r.__exportStar(o(55), t)
    }, function(e, t, o) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function n(e, t, o) {
            var n = o.value;
            if ("function" != typeof n) throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(r(n)));
            var i = !1;
            return {
                configurable: !0,
                get: function() {
                    if (i || this === e.prototype || this.hasOwnProperty(t) || "function" != typeof n) return n;
                    var o = n.bind(this);
                    return i = !0, Object.defineProperty(this, t, {
                        configurable: !0,
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            n = e, delete this[t]
                        }
                    }), i = !1, o
                },
                set: function(e) {
                    n = e
                }
            }
        }

        function i(e) {
            var t;
            return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? t = Reflect.ownKeys(e.prototype) : (t = Object.getOwnPropertyNames(e.prototype), "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e.prototype)))), t.forEach((function(t) {
                if ("constructor" !== t) {
                    var o = Object.getOwnPropertyDescriptor(e.prototype, t);
                    "function" == typeof o.value && Object.defineProperty(e.prototype, t, n(e, t, o))
                }
            })), e
        }

        function a() {
            return 1 === arguments.length ? i.apply(void 0, arguments) : n.apply(void 0, arguments)
        }
        o.r(t), o.d(t, "boundMethod", (function() {
            return n
        })), o.d(t, "boundClass", (function() {
            return i
        })), o.d(t, "default", (function() {
            return a
        }))
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(47), t), r.__exportStar(o(48), t), r.__exportStar(o(95), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PluginSystem = t.Uploader = t.ToolbarCollection = t.ToolbarEditorCollection = t.Table = t.StatusBar = t.Snapshot = t.Style = t.Select = t.ProgressBar = t.Observer = t.ImageEditor = t.Helpers = t.FileBrowser = t.ViewWithToolbar = t.View = t.Icon = t.UIBlock = t.UICheckbox = t.UITextArea = t.UIInput = t.UIForm = t.UIList = t.UIGroup = t.UISeparator = t.Popup = t.UIButton = t.UIElement = t.Create = t.Plugin = t.Dom = t.Dialog = t.Prompt = t.Confirm = t.Alert = t.ContextMenu = t.STATUSES = t.ViewComponent = t.Component = t.Ajax = t.Async = void 0;
        var r = o(0);
        r.__exportStar(o(22), t);
        var n = o(58);
        Object.defineProperty(t, "Async", {
            enumerable: !0,
            get: function() {
                return n.Async
            }
        });
        var i = o(37);
        Object.defineProperty(t, "Ajax", {
            enumerable: !0,
            get: function() {
                return i.Ajax
            }
        });
        var a = o(9);
        Object.defineProperty(t, "Component", {
            enumerable: !0,
            get: function() {
                return a.Component
            }
        }), Object.defineProperty(t, "ViewComponent", {
            enumerable: !0,
            get: function() {
                return a.ViewComponent
            }
        }), Object.defineProperty(t, "STATUSES", {
            enumerable: !0,
            get: function() {
                return a.STATUSES
            }
        });
        var s = o(59);
        Object.defineProperty(t, "ContextMenu", {
            enumerable: !0,
            get: function() {
                return s.ContextMenu
            }
        });
        var l = o(16);
        Object.defineProperty(t, "Alert", {
            enumerable: !0,
            get: function() {
                return l.Alert
            }
        }), Object.defineProperty(t, "Confirm", {
            enumerable: !0,
            get: function() {
                return l.Confirm
            }
        }), Object.defineProperty(t, "Prompt", {
            enumerable: !0,
            get: function() {
                return l.Prompt
            }
        }), Object.defineProperty(t, "Dialog", {
            enumerable: !0,
            get: function() {
                return l.Dialog
            }
        });
        var c = o(2);
        Object.defineProperty(t, "Dom", {
            enumerable: !0,
            get: function() {
                return c.Dom
            }
        });
        var u = o(6);
        Object.defineProperty(t, "Plugin", {
            enumerable: !0,
            get: function() {
                return u.Plugin
            }
        });
        var d = o(187);
        Object.defineProperty(t, "Create", {
            enumerable: !0,
            get: function() {
                return d.Create
            }
        });
        var p = o(7);
        Object.defineProperty(t, "UIElement", {
            enumerable: !0,
            get: function() {
                return p.UIElement
            }
        }), Object.defineProperty(t, "UIButton", {
            enumerable: !0,
            get: function() {
                return p.UIButton
            }
        }), Object.defineProperty(t, "Popup", {
            enumerable: !0,
            get: function() {
                return p.Popup
            }
        }), Object.defineProperty(t, "UISeparator", {
            enumerable: !0,
            get: function() {
                return p.UISeparator
            }
        }), Object.defineProperty(t, "UIGroup", {
            enumerable: !0,
            get: function() {
                return p.UIGroup
            }
        }), Object.defineProperty(t, "UIList", {
            enumerable: !0,
            get: function() {
                return p.UIList
            }
        }), Object.defineProperty(t, "UIForm", {
            enumerable: !0,
            get: function() {
                return p.UIForm
            }
        }), Object.defineProperty(t, "UIInput", {
            enumerable: !0,
            get: function() {
                return p.UIInput
            }
        }), Object.defineProperty(t, "UITextArea", {
            enumerable: !0,
            get: function() {
                return p.UITextArea
            }
        }), Object.defineProperty(t, "UICheckbox", {
            enumerable: !0,
            get: function() {
                return p.UICheckbox
            }
        }), Object.defineProperty(t, "UIBlock", {
            enumerable: !0,
            get: function() {
                return p.UIBlock
            }
        }), Object.defineProperty(t, "Icon", {
            enumerable: !0,
            get: function() {
                return p.Icon
            }
        });
        var f = o(60);
        Object.defineProperty(t, "View", {
            enumerable: !0,
            get: function() {
                return f.View
            }
        });
        var h = o(27);
        Object.defineProperty(t, "ViewWithToolbar", {
            enumerable: !0,
            get: function() {
                return h.ViewWithToolbar
            }
        });
        var m = o(188);
        Object.defineProperty(t, "FileBrowser", {
            enumerable: !0,
            get: function() {
                return m.FileBrowser
            }
        });
        var v = o(1);
        t.Helpers = v;
        var g = o(195);
        Object.defineProperty(t, "ImageEditor", {
            enumerable: !0,
            get: function() {
                return g.ImageEditor
            }
        });
        var y = o(198);
        Object.defineProperty(t, "Observer", {
            enumerable: !0,
            get: function() {
                return y.Observer
            }
        });
        var b = o(201);
        Object.defineProperty(t, "ProgressBar", {
            enumerable: !0,
            get: function() {
                return b.ProgressBar
            }
        });
        var _ = o(203);
        Object.defineProperty(t, "Select", {
            enumerable: !0,
            get: function() {
                return _.Select
            }
        }), Object.defineProperty(t, "Style", {
            enumerable: !0,
            get: function() {
                return _.Style
            }
        });
        var w = o(68);
        Object.defineProperty(t, "Snapshot", {
            enumerable: !0,
            get: function() {
                return w.Snapshot
            }
        });
        var S = o(206);
        Object.defineProperty(t, "StatusBar", {
            enumerable: !0,
            get: function() {
                return S.StatusBar
            }
        });
        var C = o(208);
        Object.defineProperty(t, "Table", {
            enumerable: !0,
            get: function() {
                return C.Table
            }
        });
        var j = o(63);
        Object.defineProperty(t, "ToolbarEditorCollection", {
            enumerable: !0,
            get: function() {
                return j.ToolbarEditorCollection
            }
        });
        var k = o(39);
        Object.defineProperty(t, "ToolbarCollection", {
            enumerable: !0,
            get: function() {
                return k.ToolbarCollection
            }
        }), r.__exportStar(o(209), t);
        var E = o(210);
        Object.defineProperty(t, "Uploader", {
            enumerable: !0,
            get: function() {
                return E.Uploader
            }
        });
        var x = o(44);
        Object.defineProperty(t, "PluginSystem", {
            enumerable: !0,
            get: function() {
                return x.PluginSystem
            }
        })
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.eventEmitter = t.getContainer = t.lang = t.modules = t.pluginSystem = t.uniqueUid = t.instances = void 0;
        var r = o(44),
            n = o(2),
            i = o(1),
            a = o(22);
        t.instances = {};
        var s = 1;
        t.uniqueUid = function() {
            return s += 10 * (Math.random() + 1), Math.round(s).toString(16)
        }, t.pluginSystem = new r.PluginSystem, t.modules = {}, t.lang = {};
        var l = new WeakMap;
        t.getContainer = function(e, t, o, r) {
            void 0 === o && (o = "div"), void 0 === r && (r = !1);
            var a = i.getClassName(t.prototype),
                s = l.get(e) || {};
            if (!s[a]) {
                var c = i.isViewObject(e) ? e : e.j,
                    u = c.c,
                    d = e.od.body;
                r && i.isJoditObject(e) && e.od !== e.ed && (u = e.createInside, d = "style" === o ? e.ed.head : e.ed.body);
                var p = u.element(o, {
                    className: "jodit jodit-" + i.kebabCase(a) + "-container jodit-box"
                });
                p.classList.add("jodit_theme_" + (c.o.theme || "default")), d.appendChild(p), s[a] = p, e.hookStatus("beforeDestruct", (function() {
                    n.Dom.safeRemove(p), delete s[a], Object.keys(s).length && l.delete(e)
                })), l.set(e, s)
            }
            return s[a]
        }, t.eventEmitter = new a.EventsNative
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(82), t), r.__exportStar(o(83), t), r.__exportStar(o(51), t), r.__exportStar(o(114), t), r.__exportStar(o(115), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(87), t), r.__exportStar(o(88), t), r.__exportStar(o(89), t), r.__exportStar(o(90), t), r.__exportStar(o(91), t), r.__exportStar(o(92), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(46), t), r.__exportStar(o(96), t), r.__exportStar(o(97), t), r.__exportStar(o(98), t), r.__exportStar(o(99), t), r.__exportStar(o(100), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(0).__exportStar(o(155), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Confirm = t.Prompt = t.Alert = t.Dialog = void 0;
        var r = o(26);
        Object.defineProperty(t, "Dialog", {
            enumerable: !0,
            get: function() {
                return r.Dialog
            }
        });
        var n = o(184);
        Object.defineProperty(t, "Alert", {
            enumerable: !0,
            get: function() {
                return n.Alert
            }
        });
        var i = o(185);
        Object.defineProperty(t, "Prompt", {
            enumerable: !0,
            get: function() {
                return i.Prompt
            }
        });
        var a = o(186);
        Object.defineProperty(t, "Confirm", {
            enumerable: !0,
            get: function() {
                return a.Confirm
            }
        })
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(153), t), r.__exportStar(o(174), t), r.__exportStar(o(176), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeButton = t.makeCollection = void 0;
        var r = o(1),
            n = o(39),
            i = o(63),
            a = o(64),
            s = o(65);
        t.makeCollection = function(e, t) {
            var o = r.isJoditObject(e) ? new i.ToolbarEditorCollection(e) : new n.ToolbarCollection(e);
            return e.o.textIcons && o.container.classList.add("jodit_text_icons"), t && (o.parentElement = t), e.o.toolbarButtonSize && (o.buttonSize = e.o.toolbarButtonSize), o
        }, t.makeButton = function(e, t, o) {
            if (void 0 === o && (o = null), r.isFunction(t.getContent)) return new s.ToolbarContent(e, t, o);
            var n = new a.ToolbarButton(e, t, o);
            return n.state.tabIndex = e.o.allowTabNavigation ? 0 : -1, n
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isString = void 0, t.isString = function(e) {
            return "string" == typeof e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIElement = void 0;
        var r = o(0),
            n = o(9),
            i = o(2),
            a = o(12),
            s = o(23),
            l = function(e) {
                function t(o, r) {
                    var i = e.call(this, o) || this;
                    return i.__parentElement = null, i.mods = {}, i.container = i.createContainer(r), Object.defineProperty(i.container, "component", {
                        value: i
                    }), a.getClassName(i) === a.getClassName(t.prototype) && i.setStatus(n.STATUSES.ready), i
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "parentElement", {
                    get: function() {
                        return this.__parentElement
                    },
                    set: function(e) {
                        var t = this;
                        this.__parentElement = e, e && e.hookStatus("beforeDestruct", (function() {
                            return t.destruct()
                        })), this.updateParentElement(this)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.updateParentElement = function(e) {
                    var t;
                    return null === (t = this.__parentElement) || void 0 === t || t.updateParentElement(e), this
                }, t.prototype.closest = function(e) {
                    for (var t = "object" == typeof e ? function(t) {
                            return t === e
                        } : function(t) {
                            return t instanceof e
                        }, o = this.__parentElement; o;) {
                        if (t(o)) return o;
                        o = o.parentElement
                    }
                    return null
                }, t.closestElement = function(e, t) {
                    var o = i.Dom.up(e, (function(e) {
                        if (e) {
                            var o = e.component;
                            return o && o instanceof t
                        }
                        return !1
                    }));
                    return o ? null == o ? void 0 : o.component : null
                }, t.prototype.setMod = function(e, t, o) {
                    if (void 0 === o && (o = this.container), e = e.toLowerCase(), this.mods[e] === t) return this;
                    var r = this.componentName + "_" + e,
                        n = o.classList;
                    return s.toArray(n).forEach((function(e) {
                        0 === e.indexOf(r) && n.remove(e)
                    })), null !== t && "" !== t && n.add(r + "_" + t.toString().toLowerCase()), this.mods[e] = t, this
                }, t.prototype.getClassName = function(e) {
                    return this.componentName + "__" + e
                }, t.prototype.update = function() {}, t.prototype.appendTo = function(e) {
                    return e.appendChild(this.container), this
                }, t.prototype.clearName = function(e) {
                    return e.replace(/[^a-zA-Z0-9]/g, "_")
                }, t.prototype.makeContainer = function(e) {
                    return this.j.c.div(this.componentName)
                }, t.prototype.createContainer = function(e) {
                    return this.makeContainer(e)
                }, t.prototype.destruct = function() {
                    return i.Dom.safeRemove(this.container), this.parentElement = null, e.prototype.destruct.call(this)
                }, t
            }(n.ViewComponent);
        t.UIElement = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ICON_LOADER = t.ITEM_CLASS = t.F_CLASS = void 0, t.F_CLASS = "jodit-filebrowser", t.ITEM_CLASS = t.F_CLASS + "__files-item", t.ICON_LOADER = '<i class="jodit-icon_loader"></i>'
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(93), t), r.__exportStar(o(94), t), r.__exportStar(o(45), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.toArray = t.splitArray = t.asArray = void 0;
        var r = o(116);
        Object.defineProperty(t, "asArray", {
            enumerable: !0,
            get: function() {
                return r.asArray
            }
        });
        var n = o(117);
        Object.defineProperty(t, "splitArray", {
            enumerable: !0,
            get: function() {
                return n.splitArray
            }
        });
        var i = o(118);
        Object.defineProperty(t, "toArray", {
            enumerable: !0,
            get: function() {
                return i.toArray
            }
        })
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(0).__exportStar(o(157), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIInput = void 0;
        var r = o(0);
        o(165);
        var n = o(20),
            i = o(1),
            a = o(2),
            s = o(166),
            l = function(e) {
                function t(t, o) {
                    var r, n = e.call(this, t, o) || this;
                    return n.options = o, n.__errorBox = n.j.c.span(n.getClassName("error")), n.validators = [], n.options.required && (i.attr(n.nativeInput, "required", !0), n.validators.push(s.required)), n.options.placeholder && i.attr(n.nativeInput, "placeholder", n.options.placeholder), null === (r = o.validators) || void 0 === r || r.forEach((function(e) {
                        var t = s[e];
                        t && n.validators.push(t)
                    })), n
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "error", {
                    set: function(e) {
                        this.setMod("has-error", !!e), e ? (this.__errorBox.innerText = this.j.i18n(e, this.j.i18n(this.options.label || "")), this.container.appendChild(this.__errorBox)) : a.Dom.safeRemove(this.__errorBox)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this.nativeInput.value
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.validate = function() {
                    var e = this;
                    return this.error = "", this.validators.every((function(t) {
                        return t(e)
                    }))
                }, t.prototype.createContainer = function(t) {
                    var o = e.prototype.createContainer.call(this);
                    if (this.nativeInput || (this.nativeInput = this.j.create.element("input")), this.nativeInput.classList.add(this.getClassName("input")), t.label) {
                        var r = this.j.c.span(this.getClassName("label"));
                        o.appendChild(r), r.innerText = this.j.i18n(t.label)
                    }
                    return o.appendChild(this.nativeInput), i.attr(this.nativeInput, "name", t.name), i.attr(this.nativeInput, "dir", this.j.o.direction || "auto"), i.attr(this.nativeInput, "type", t.type), i.attr(this.nativeInput, "data-ref", t.ref || t.name), i.attr(this.nativeInput, "ref", t.ref || t.name), o
                }, t.prototype.focus = function() {
                    this.nativeInput.focus()
                }, t
            }(n.UIElement);
        t.UIInput = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Dialog = void 0;
        var r = o(0);
        o(178);
        var n = o(8),
            i = o(4),
            a = o(3),
            s = o(1),
            l = o(27),
            c = o(2),
            u = o(9),
            d = o(11);
        i.Config.prototype.dialog = {
            extraButtons: [],
            resizable: !0,
            draggable: !0,
            buttons: ["dialog.close"],
            removeButtons: []
        }, i.Config.prototype.controls.dialog = {
            close: {
                icon: "cancel",
                exec: function(e) {
                    e.close()
                }
            }
        };
        var p = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                o.destination = document.body, o.destroyAfterClose = !1, o.moved = !1, o.iSetMaximization = !1, o.resizable = !1, o.draggable = !1, o.startX = 0, o.startY = 0, o.startPoint = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                }, o.lockSelect = function() {
                    o.container.classList.add("jodit-dialog__box-moved")
                }, o.unlockSelect = function() {
                    o.container.classList.remove("jodit-dialog__box-moved")
                }, o.onResize = function() {
                    o.options && o.o.resizable && !o.moved && o.isOpened && !o.offsetX && !o.offsetY && o.setPosition()
                }, o.isOpened = !1;
                var r = o;
                r.options = new i.OptionsDefault(s.extend(!0, {
                    toolbarButtonSize: "middle"
                }, i.Config.prototype.dialog, t)), c.Dom.safeRemove(r.container), r.container = o.c.fromHTML('<div style="z-index:' + r.o.zIndex + '" class="jodit jodit-dialog__box"><div class="jodit-dialog__overlay"></div><div class="jodit-dialog"><div class="jodit-dialog__header non-selected"><div class="jodit-dialog__header-title"></div><div class="jodit-dialog__header-toolbar"></div></div><div class="jodit-dialog__content"></div><div class="jodit-dialog__footer"></div>' + (r.o.resizable ? '<div class="jodit-dialog__resizer"></div>' : "") + "</div></div>"), s.attr(r.container, "role", "dialog"), Object.defineProperty(r.container, "component", {
                    value: o
                }), r.container.classList.add("jodit_theme_" + (o.o.theme || "default")), r.dialog = r.container.querySelector(".jodit-dialog"), r.resizer = r.container.querySelector(".jodit-dialog__resizer"), r.dialogbox_header = r.container.querySelector(".jodit-dialog__header>.jodit-dialog__header-title"), r.dialogbox_content = r.container.querySelector(".jodit-dialog__content"), r.dialogbox_footer = r.container.querySelector(".jodit-dialog__footer"), r.dialogbox_toolbar = r.container.querySelector(".jodit-dialog__header>.jodit-dialog__header-toolbar"), r.o.buttons && r.toolbar.build(s.splitArray(r.o.buttons)).appendTo(r.dialogbox_toolbar);
                var n = r.container.querySelector(".jodit-dialog__header");
                n && r.e.on(n, "mousedown", r.onHeaderMouseDown), r.o.resizable && r.e.on(r.resizer, "mousedown", r.onResizerMouseDown);
                var a = d.pluginSystem.get("fullsize");
                return s.isFunction(a) && a(r), r.setStatus(u.STATUSES.ready), o.e.on(o.ow, "keydown", o.onEsc).on(o.ow, "resize", o.onResize), o
            }
            return r.__extends(t, e), t.prototype.setElements = function(e, t) {
                var o = this,
                    r = [];
                s.asArray(t).forEach((function(t) {
                    if (s.isArray(t)) {
                        var n = o.c.div("jodit-dialog__column");
                        return r.push(n), e.appendChild(n), o.setElements(n, t)
                    }
                    var i;
                    i = s.isString(t) ? o.c.fromHTML(t) : s.hasContainer(t) ? t.container : t, r.push(i), i.parentNode !== e && e.appendChild(i)
                })), s.toArray(e.childNodes).forEach((function(t) {
                    -1 === r.indexOf(t) && e.removeChild(t)
                }))
            }, t.prototype.onMouseUp = function() {
                (this.draggable || this.resizable) && (this.e.off(this.ow, "mousemove", this.onMouseMove), this.draggable = !1, this.resizable = !1, this.unlockSelect(), this.e && (this.removeGlobalListeners(), this.e.fire(this, "endResize endMove")))
            }, t.prototype.onHeaderMouseDown = function(e) {
                var t = e.target;
                !this.o.draggable || t && t.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.x = s.css(this.dialog, "left"), this.startPoint.y = s.css(this.dialog, "top"), this.setMaxZIndex(), e.preventDefault(), this.lockSelect(), this.addGlobalListeners(), this.e && this.e.fire(this, "startMove"))
            }, t.prototype.onMouseMove = function(e) {
                this.draggable && this.o.draggable && (this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY), this.e && this.e.fire(this, "move", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault()), this.resizable && this.o.resizable && (this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY), this.e && this.e.fire(this, "resizeDialog", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation(), e.preventDefault())
            }, t.prototype.onEsc = function(e) {
                if (this.isOpened && e.key === a.KEY_ESC) {
                    var t = this.getMaxZIndexDialog();
                    t ? t.close() : this.close(), e.stopImmediatePropagation()
                }
            }, t.prototype.onResizerMouseDown = function(e) {
                this.resizable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.addGlobalListeners(), this.e && this.e.fire(this, "startResize")
            }, t.prototype.addGlobalListeners = function() {
                var e = this;
                e.e.on(e.ow, "mousemove", e.onMouseMove).on(e.container, "close_dialog", e.close).on(e.ow, "mouseup", e.onMouseUp)
            }, t.prototype.removeGlobalListeners = function() {
                var e = this;
                e.e.off(e.ow, "mousemove", e.onMouseMove).off(e.container, "close_dialog", e.close).off(e.ow, "mouseup", e.onMouseUp)
            }, t.prototype.setSize = function(e, t) {
                return e && s.css(this.dialog, "width", e), t && s.css(this.dialog, "height", t), this
            }, t.prototype.setPosition = function(e, t) {
                var o = this.ow.innerWidth / 2 - this.dialog.offsetWidth / 2,
                    r = this.ow.innerHeight / 2 - this.dialog.offsetHeight / 2;
                return 0 > o && (o = 0), 0 > r && (r = 0), void 0 !== e && void 0 !== t && (this.offsetX = e, this.offsetY = t, this.moved = Math.abs(e - o) > 100 || Math.abs(t - r) > 100), this.dialog.style.left = (e || o) + "px", this.dialog.style.top = (t || r) + "px", this
            }, t.prototype.setHeader = function(e) {
                return this.setElements(this.dialogbox_header, e), this
            }, t.prototype.setContent = function(e) {
                return this.setElements(this.dialogbox_content, e), this
            }, t.prototype.setFooter = function(e) {
                return this.setElements(this.dialogbox_footer, e), this.dialog.classList.toggle("jodit-dialog_footer_true", !!e), this
            }, t.prototype.getZIndex = function() {
                return parseInt(s.css(this.container, "zIndex"), 10) || 0
            }, t.prototype.getMaxZIndexDialog = function() {
                var e, t, o = 0,
                    r = this;
                return s.$$(".jodit-dialog__box", this.destination).forEach((function(n) {
                    e = n.component, t = parseInt(s.css(n, "zIndex"), 10), e.isOpened && !isNaN(t) && t > o && (r = e, o = t)
                })), r
            }, t.prototype.setMaxZIndex = function() {
                var e = 20000004,
                    t = 0;
                s.$$(".jodit-dialog__box", this.destination).forEach((function(o) {
                    t = parseInt(s.css(o, "zIndex"), 10), e = Math.max(isNaN(t) ? 0 : t, e)
                })), this.container.style.zIndex = (e + 1).toString()
            }, t.prototype.maximization = function(e) {
                return "boolean" != typeof e && (e = !this.container.classList.contains("jodit-dialog__box_fullsize")), this.container.classList.toggle("jodit-dialog__box_fullsize", e), [this.destination, this.destination.parentNode].forEach((function(t) {
                    t && t.classList && t.classList.toggle("jodit_fullsize-box_true", e)
                })), this.iSetMaximization = e, e
            }, t.prototype.open = function(e, t, o, r) {
                if (d.eventEmitter.fire("closeAllPopups hideHelpers"), !1 === this.e.fire(this, "beforeOpen")) return this;
                s.isBoolean(e) && (o = e), s.isBoolean(t) && (r = t), this.destroyAfterClose = !0 === o;
                var n = s.isBoolean(e) ? void 0 : e,
                    i = s.isBoolean(t) ? void 0 : t;
                return void 0 !== i && this.setHeader(i), n && this.setContent(n), this.container.classList.add("jodit-dialog_active"), this.isOpened = !0, this.setModal(r), this.destination.appendChild(this.container), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.o.fullsize && this.maximization(!0), this.e.fire("afterOpen", this), this
            }, t.prototype.setModal = function(e) {
                return this.container.classList.toggle("jodit-modal", Boolean(e)), this
            }, t.prototype.close = function(e) {
                var t, o, r;
                return this.isDestructed || !this.isOpened || (e && (e.stopImmediatePropagation(), e.preventDefault()), this.e && this.e.fire("beforeClose", this), c.Dom.safeRemove(this.container), null === (t = null == this ? void 0 : this.container) || void 0 === t || t.classList.remove("jodit-dialog_active"), this.isOpened = !1, this.iSetMaximization && this.maximization(!1), this.removeGlobalListeners(), this.destroyAfterClose && this.destruct(), null === (o = this.e) || void 0 === o || o.fire(this, "afterClose"), null === (r = this.e) || void 0 === r || r.fire(this.ow, "joditCloseDialog")), this
            }, t.prototype.destruct = function() {
                this.isInDestruct || (this.setStatus(u.STATUSES.beforeDestruct), this.isOpened && this.close(), this.events && (this.removeGlobalListeners(), this.events.on(this.ow, "keydown", this.onEsc).on(this.ow, "resize", this.onResize)), e.prototype.destruct.call(this))
            }, r.__decorate([n.default], t.prototype, "onMouseUp", null), r.__decorate([n.default], t.prototype, "onHeaderMouseDown", null), r.__decorate([n.default], t.prototype, "onMouseMove", null), r.__decorate([n.default], t.prototype, "onEsc", null), r.__decorate([n.default], t.prototype, "onResizerMouseDown", null), r.__decorate([n.default], t.prototype, "close", null), t
        }(l.ViewWithToolbar);
        t.Dialog = p
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ViewWithToolbar = void 0;
        var r = o(0);
        o(179);
        var n = o(60),
            i = o(1),
            a = o(2),
            s = o(18),
            l = o(9),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toolbar = s.makeCollection(t), t.defaultToolbarContainer = t.c.div("jodit-toolbar__box"), t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "toolbarContainer", {
                    get: function() {
                        return this.o.fullsize || !i.isString(this.o.toolbar) && !a.Dom.isHTMLElement(this.o.toolbar, this.ow) ? (this.o.toolbar && a.Dom.appendChildFirst(this.container, this.defaultToolbarContainer), this.defaultToolbarContainer) : i.resolveElement(this.o.toolbar, this.o.shadowRoot || this.od)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setPanel = function(e) {
                    this.o.toolbar = e, this.buildToolbar()
                }, t.prototype.buildToolbar = function() {
                    if (this.o.toolbar) {
                        var e = this.o.buttons ? i.splitArray(this.o.buttons) : [];
                        this.toolbar.setRemoveButtons(this.o.removeButtons).build(e.concat(this.o.extraButtons || [])).appendTo(this.toolbarContainer)
                    }
                }, t.prototype.destruct = function() {
                    this.isDestructed || (this.setStatus(l.STATUSES.beforeDestruct), this.toolbar.destruct(), e.prototype.destruct.call(this))
                }, t
            }(n.View);
        t.ViewWithToolbar = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getAllTypes = t.pasteInsertHtml = t.getDataTransfer = void 0;
        var r = o(1),
            n = o(2),
            i = o(3);
        t.getDataTransfer = function(e) {
            if (e.clipboardData) return e.clipboardData;
            try {
                return e.dataTransfer || new DataTransfer
            } catch (e) {
                return null
            }
        }, t.pasteInsertHtml = function(e, t, o) {
            if (!t.isInDestruct) {
                "drop" === (null == e ? void 0 : e.type) && t.s.insertCursorAtPoint(e.clientX, e.clientY);
                var i = t.e.fire("beforePasteInsert", o);
                !r.isVoid(i) && (r.isString(i) || r.isNumber(i) || n.Dom.isNode(i, t.ew)) && (o = i), r.isString(o) && (o = function(e) {
                    var t = (e = e.replace(/<meta[^>]+?>/g, "")).search(/<!--StartFragment-->/i); - 1 !== t && (e = e.substr(t + 20));
                    var o = e.search(/<!--EndFragment-->/i);
                    return -1 !== o && (e = e.substr(0, o)), e
                }(o)), t.s.insertHTML(o)
            }
        }, t.getAllTypes = function(e) {
            var t = e.types,
                o = "";
            if (r.isArray(t) || "domstringlist" === r.type(t))
                for (var n = 0; t.length > n; n += 1) o += t[n] + ";";
            else o = (t || i.TEXT_PLAIN).toString() + ";";
            return o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.JoditArray = void 0;
        var r = o(30);
        t.JoditArray = function(e) {
            var t = this;
            r.extend(!0, this, e), Object.defineProperty(this, "length", {
                value: e.length,
                enumerable: !1,
                configurable: !1
            }), Object.defineProperty(this, "toString", {
                value: function() {
                    for (var e = [], o = 0; t.length > o; o += 1) e[o] = t[o];
                    return e.toString()
                },
                enumerable: !1,
                configurable: !1
            });
            var o = Array.prototype;
            ["map", "forEach", "reduce", "push", "pop", "shift", "unshift", "slice", "splice"].forEach((function(e) {
                Object.defineProperty(t, e, {
                    value: o[e],
                    enumerable: !1,
                    configurable: !1
                })
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.extend = void 0;
        var r = o(42),
            n = o(29),
            i = o(5);
        t.extend = function e() {
            for (var t = [], o = 0; arguments.length > o; o++) t[o] = arguments[o];
            var a, s, l, c, u, d, p, f = t.length,
                h = t[0] || {},
                m = 1,
                v = !1;
            for ("boolean" == typeof h && (v = h, h = t[m] || {}, m += 1), "object" != typeof h && i.isFunction(h) && (h = {}), m === f && (h = this, m += 1); f > m; m += 1)
                if (null != (a = t[m]))
                    for (p = Object.keys(a), d = 0; p.length > d; d += 1) l = h[s = p[d]], h !== (c = a[s]) && (v && c && (i.isPlainObject(c) && !(c instanceof r.JoditObject) || Array.isArray(c) && !(c instanceof n.JoditArray)) ? (u = Array.isArray(c) ? l && Array.isArray(l) ? l : [] : l && i.isPlainObject(l) ? l : {}, h[s] = e(v, u, c)) : void 0 !== c && (h[s] = c));
            return h
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isFunction = void 0, t.isFunction = function(e) {
            return "function" == typeof e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.error = t.type = t.hasOwn = void 0;
        var r = {},
            n = r.toString;
        t.hasOwn = r.hasOwnProperty, ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment", "DOMStringList", "HTMLCollection"].forEach((function(e) {
            r["[object " + e + "]"] = e.toLowerCase()
        })), t.type = function(e) {
            return null === e ? "null" : "object" == typeof e || "function" == typeof e ? r[n.call(e)] || "object" : typeof e
        }, t.error = function(e) {
            return new TypeError(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(0).__exportStar(o(121), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resolveElement = t.cssPath = t.refs = t.getXPathByElement = t.$$ = void 0;
        var r = o(3),
            n = o(5),
            i = o(12),
            a = o(32),
            s = o(2),
            l = o(13),
            c = o(23),
            u = 1;

        function d(e, t) {
            var o;
            if (!/:scope/.test(e) || !r.IS_IE || t && t.nodeType === Node.DOCUMENT_NODE) o = t.querySelectorAll(e);
            else {
                var n = t.id,
                    i = n || "_selector_id_" + ("" + Math.random()).slice(2) + ++u;
                e = e.replace(/:scope/g, "#" + i), !n && t.setAttribute("id", i), o = t.parentNode.querySelectorAll(e), n || t.removeAttribute("id")
            }
            return [].slice.call(o)
        }
        t.$$ = d, t.getXPathByElement = function(e, o) {
            if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
            if (!e.parentNode || o === e) return "";
            if (e.id) return "//*[@id='" + e.id + "']";
            var r = [].filter.call(e.parentNode.childNodes, (function(t) {
                return t.nodeName === e.nodeName
            }));
            return t.getXPathByElement(e.parentNode, o) + "/" + e.nodeName.toLowerCase() + (r.length > 1 ? "[" + (c.toArray(r).indexOf(e) + 1) + "]" : "")
        }, t.refs = function(e) {
            return d("[ref],[data-ref]", e).reduce((function(e, t) {
                var o = i.attr(t, "-ref");
                return o && n.isString(o) && (e[l.camelCase(o)] = t, e[o] = t), e
            }), {})
        }, t.cssPath = function(e) {
            if (!s.Dom.isElement(e)) return null;
            for (var t = [], o = e; o && o.nodeType === Node.ELEMENT_NODE;) {
                var r = o.nodeName.toLowerCase();
                if (o.id) {
                    t.unshift(r += "#" + o.id);
                    break
                }
                var n = o,
                    i = 1;
                do {
                    (n = n.previousElementSibling) && n.nodeName.toLowerCase() === r && i++
                } while (n);
                t.unshift(r += ":nth-of-type(" + i + ")"), o = o.parentNode
            }
            return t.join(" > ")
        }, t.resolveElement = function(e, t) {
            var o = e;
            if (n.isString(e)) try {
                o = t.querySelector(e)
            } catch (t) {
                throw a.error('String "' + e + '" should be valid HTML selector')
            }
            if (!o || "object" != typeof o || !s.Dom.isElement(o) || !o.cloneNode) throw a.error('Element "' + e + '" should be string or HTMLElement instance');
            return o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(128), t), r.__exportStar(o(129), t), r.__exportStar(o(130), t), r.__exportStar(o(131), t), r.__exportStar(o(132), t), r.__exportStar(o(133), t), r.__exportStar(o(134), t), r.__exportStar(o(135), t), r.__exportStar(o(136), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(164), t), r.__exportStar(o(25), t), r.__exportStar(o(167), t), r.__exportStar(o(172), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Ajax = void 0;
        var r = o(0),
            n = o(4),
            i = o(1);
        n.Config.prototype.defaultAjaxOptions = {
            dataType: "json",
            method: "GET",
            url: "",
            data: null,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            headers: {
                "X-REQUESTED-WITH": "XMLHttpRequest"
            },
            withCredentials: !1,
            xhr: function() {
                return new XMLHttpRequest
            }
        };
        var a = function() {
            function e(e, t) {
                var o = this;
                this.jodit = e, this.success_response_codes = [200, 201, 202], this.resolved = !1, this.activated = !1, this.options = i.extend(!0, {}, n.Config.prototype.defaultAjaxOptions, t), this.o.xhr && (this.xhr = this.o.xhr()), e && e.events && e.e.on("beforeDestruct", (function() {
                    o.abort()
                }))
            }
            return e.prototype.__buildParams = function(e, t) {
                return i.isFunction(this.o.queryBuild) ? this.o.queryBuild.call(this, e, t) : i.isString(e) || this.j.ow.FormData && e instanceof this.j.ow.FormData ? e : i.buildQuery(e)
            }, Object.defineProperty(e.prototype, "o", {
                get: function() {
                    return this.options
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "j", {
                get: function() {
                    return this.jodit
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.abort = function() {
                try {
                    this.xhr.abort()
                } catch (e) {}
                return this
            }, e.prototype.send = function() {
                var e = this;
                return this.activated = !0, new Promise((function(t, o) {
                    var r = function(t) {
                        var o = null;
                        if ("json" === e.o.dataType && (o = JSON.parse(t)), !o) throw i.error("No JSON format");
                        return o
                    };
                    e.xhr.onabort = function() {
                        o(i.error(e.xhr.statusText))
                    }, e.xhr.onerror = function() {
                        o(i.error(e.xhr.statusText))
                    }, e.xhr.ontimeout = function() {
                        o(i.error(e.xhr.statusText))
                    }, e.xhr.onload = function() {
                        e.response = e.xhr.responseText, e.status = e.xhr.status, e.resolved = !0, t.call(e.xhr, r(e.response) || {})
                    }, e.xhr.onreadystatechange = function() {
                        if (e.xhr.readyState === XMLHttpRequest.DONE) {
                            var n = e.xhr.responseText;
                            e.response = n, e.status = e.xhr.status, e.resolved = !0, e.success_response_codes.indexOf(e.xhr.status) > -1 ? t.call(e.xhr, r(n)) : o.call(e.xhr, i.error(e.xhr.statusText || e.j.i18n("Connection error!")))
                        }
                    }, e.xhr.withCredentials = e.o.withCredentials || !1;
                    var n = e.prepareRequest(),
                        a = n.data;
                    e.xhr.open(n.method, n.url, !0), e.o.contentType && e.xhr.setRequestHeader && e.xhr.setRequestHeader("Content-type", e.o.contentType), e.o.headers && e.xhr.setRequestHeader && i.each(e.o.headers, (function(t, o) {
                        e.xhr.setRequestHeader(t, o)
                    })), setTimeout((function() {
                        e.xhr.send(a ? e.__buildParams(a) : void 0)
                    }), 0)
                }))
            }, e.prototype.prepareRequest = function() {
                if (!this.o.url) throw i.error("Need URL for AJAX request");
                var t = this.o.url,
                    o = this.o.data,
                    n = (this.o.method || "get").toLowerCase();
                if ("get" === n && o && i.isPlainObject(o)) {
                    var a = t.indexOf("?");
                    if (-1 !== a) {
                        var s = i.parseQuery(t);
                        t = t.substr(0, a) + "?" + i.buildQuery(r.__assign(r.__assign({}, s), o))
                    } else t += "?" + i.buildQuery(this.o.data)
                }
                var l = {
                    url: t,
                    method: n,
                    data: o
                };
                return e.log.splice(100), e.log.push(l), l
            }, e.prototype.destruct = function() {
                this.activated && !this.resolved && (this.abort(), this.resolved = !0)
            }, e.log = [], e
        }();
        t.Ajax = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(61), t), r.__exportStar(o(62), t), r.__exportStar(o(180), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ToolbarCollection = void 0;
        var r = o(0),
            n = o(8);
        o(181);
        var i = o(1),
            a = o(7),
            s = o(18),
            l = o(9),
            c = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.listenEvents = "updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart focus blur", o.update = o.j.async.debounce(o.immediateUpdate, (function() {
                        return o.j.defaultTimeout
                    })), o.initEvents(), o.setStatus(l.STATUSES.ready), o
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "firstButton", {
                    get: function() {
                        return this.buttons[0] || null
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.makeButton = function(e, t) {
                    return void 0 === t && (t = null), s.makeButton(this.j, e, t)
                }, t.prototype.shouldBeActive = function(e) {
                    return !(i.isJoditObject(this.j) && !this.j.editorIsActive) && (i.isFunction(e.control.isActive) ? e.control.isActive(this.j, e.control, e) : void 0)
                }, t.prototype.shouldBeDisabled = function(e) {
                    return !!this.j.o.disabled || !(!this.j.o.readonly || this.j.o.activeButtonsInReadOnly && this.j.o.activeButtonsInReadOnly.includes(e.control.name)) || (i.isFunction(e.control.isDisabled) && (t = e.control.isDisabled(this.j, e.control, e)), t);
                    var t
                }, t.prototype.getTarget = function(e) {
                    return e.target || null
                }, t.prototype.immediateUpdate = function() {
                    this.isDestructed || this.j.isLocked || (e.prototype.update.call(this), this.j.e.fire("afterUpdateToolbar"))
                }, t.prototype.setDirection = function(e) {
                    this.container.style.direction = e, this.container.setAttribute("dir", e)
                }, t.prototype.initEvents = function() {
                    this.j.e.on(this.listenEvents, this.update).on("afterSetMode focus", this.immediateUpdate)
                }, t.prototype.destruct = function() {
                    this.isDestructed || (this.j.e.off(this.listenEvents, this.update).off("afterSetMode focus", this.immediateUpdate), e.prototype.destruct.call(this))
                }, r.__decorate([n.default], t.prototype, "immediateUpdate", null), t
            }(a.UIList);
        t.ToolbarCollection = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DEFAULT_SOURCE_NAME = void 0;
        var r = o(0),
            n = o(1),
            i = o(37);
        t.DEFAULT_SOURCE_NAME = "default";
        var a = function() {
            function e(e, t) {
                var o = this;
                this.parent = e, this.options = t, this.__currentPermissions = null, this.ajaxInstances = [], this.getPathByUrl = function(e, t, r) {
                    var i = "getLocalFileByUrl";
                    return o.options[i].data.url = e, o.get(i, (function(e) {
                        o.o.isSuccess(e) ? t(e.data.path, e.data.name, e.data.source) : r(n.error(o.o.getMessage(e)))
                    }), r)
                }
            }
            return e.prototype.canI = function(e) {
                var t = "allow" + e;
                return null === this.__currentPermissions || void 0 === this.__currentPermissions[t] || this.__currentPermissions[t]
            }, Object.defineProperty(e.prototype, "o", {
                get: function() {
                    return this.options
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.get = function(e, t, o) {
                var r = n.extend(!0, {}, this.o.ajax, void 0 !== this.options[e] ? this.options[e] : this.o.ajax);
                r.prepareData && (r.data = r.prepareData.call(this, r.data));
                var a = new i.Ajax(this.parent, r),
                    s = a.send();
                return this.ajaxInstances.push(a), t && s.then(t), o && s.catch(o), s
            }, e.prototype.permissions = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var o = this;
                    return r.__generator(this, (function(r) {
                        return this.o.permissions ? (this.o.permissions.data.path = e, this.o.permissions.data.source = t, this.o.permissions.url ? [2, this.get("permissions").then((function(e) {
                            var t = o.o.permissions.process;
                            if (t || (t = o.o.ajax.process), t) {
                                var r = t.call(self, e);
                                r.data.permissions && (o.__currentPermissions = r.data.permissions)
                            }
                        }))] : [2, Promise.resolve()]) : [2, Promise.resolve()]
                    }))
                }))
            }, e.prototype.items = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    var o;
                    return r.__generator(this, (function(r) {
                        return (o = this.options).items ? (o.items.data.path = e, o.items.data.source = t, [2, this.get("items")]) : [2, Promise.reject("Set Items api options")]
                    }))
                }))
            }, e.prototype.tree = function(e, t) {
                return r.__awaiter(this, void 0, Promise, (function() {
                    return r.__generator(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e = n.normalizeRelativePath(e), [4, this.permissions(e, t)];
                            case 1:
                                return o.sent(), this.o.folder ? (this.o.folder.data.path = e, this.o.folder.data.source = t, [2, this.get("folder")]) : [2, Promise.reject("Set Folder Api options")]
                        }
                    }))
                }))
            }, e.prototype.createFolder = function(e, t, o) {
                var r = this.o.create;
                return r ? (r.data.source = o, r.data.path = t, r.data.name = e, this.get("create")) : Promise.reject("Set Create api options")
            }, e.prototype.move = function(e, t, o, r) {
                var n = r ? "fileMove" : "folderMove",
                    i = this.options[n];
                return i ? (i.data.from = e, i.data.path = t, i.data.source = o, this.get(n)) : Promise.reject("Set Move api options")
            }, e.prototype.fileRemove = function(e, t, o) {
                return this.o.fileRemove ? (this.o.fileRemove.data.path = e, this.o.fileRemove.data.name = t, this.o.fileRemove.data.source = o, this.get("fileRemove")) : Promise.reject("Set fileRemove api options")
            }, e.prototype.folderRemove = function(e, t, o) {
                return this.o.folderRemove ? (this.o.folderRemove.data.path = e, this.o.folderRemove.data.name = t, this.o.folderRemove.data.source = o, this.get("folderRemove")) : Promise.reject("Set folderRemove api options")
            }, e.prototype.folderRename = function(e, t, o, r) {
                return this.o.folderRename ? (this.o.folderRename.data.path = e, this.o.folderRename.data.name = t, this.o.folderRename.data.newname = o, this.o.folderRename.data.source = r, this.get("folderRename")) : Promise.reject("Set folderRename api options")
            }, e.prototype.fileRename = function(e, t, o, r) {
                return this.o.fileRename ? (this.o.fileRename.data.path = e, this.o.fileRename.data.name = t, this.o.fileRename.data.newname = o, this.o.fileRename.data.source = r, this.get("fileRename")) : Promise.reject("Set fileRename api options")
            }, e.prototype.crop = function(e, t, o, r, n) {
                return this.o.crop || (this.o.crop = {
                    data: {}
                }), void 0 === this.o.crop.data && (this.o.crop.data = {
                    action: "crop"
                }), this.o.crop.data.newname = r || o, n && (this.o.crop.data.box = n), this.o.crop.data.path = e, this.o.crop.data.name = o, this.o.crop.data.source = t, this.get("crop")
            }, e.prototype.resize = function(e, t, o, r, n) {
                return this.o.resize || (this.o.resize = {
                    data: {}
                }), void 0 === this.o.resize.data && (this.o.resize.data = {
                    action: "resize"
                }), this.o.resize.data.newname = r || o, n && (this.o.resize.data.box = n), this.o.resize.data.path = e, this.o.resize.data.name = o, this.o.resize.data.source = t, this.get("resize")
            }, e.prototype.destruct = function() {
                this.ajaxInstances.forEach((function(e) {
                    return e.destruct()
                })), this.ajaxInstances.length = 0
            }, e
        }();
        t.default = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clipboard = t.pluginKey = void 0;
        var r = o(3),
            n = o(1),
            i = o(28);
        t.pluginKey = "clipboard";
        var a = function() {
            function e() {}
            return e.prototype.init = function(e) {
                e.e.off("copy." + t.pluginKey + " cut." + t.pluginKey).on("copy." + t.pluginKey + " cut." + t.pluginKey, (function(o) {
                    var a, s = e.s.html,
                        l = i.getDataTransfer(o) || i.getDataTransfer(e.ew) || i.getDataTransfer(o.originalEvent);
                    l && (l.setData(r.TEXT_PLAIN, n.stripTags(s)), l.setData(r.TEXT_HTML, s)), e.buffer.set(t.pluginKey, s), e.e.fire("pasteStack", {
                        html: s,
                        action: e.o.defaultActionOnPaste
                    }), "cut" === o.type && (e.s.remove(), e.s.focus()), o.preventDefault(), null === (a = null == e ? void 0 : e.events) || void 0 === a || a.fire("afterCopy", s)
                }))
            }, e.prototype.destruct = function(e) {
                var o, r;
                null === (o = null == e ? void 0 : e.buffer) || void 0 === o || o.set(t.pluginKey, ""), null === (r = null == e ? void 0 : e.events) || void 0 === r || r.off("." + t.pluginKey)
            }, e
        }();
        t.clipboard = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.JoditObject = void 0;
        var r = o(30);
        t.JoditObject = function(e) {
            r.extend(!0, this, e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultLanguage = void 0;
        var r = o(5);
        t.defaultLanguage = function(e, t) {
            return void 0 === t && (t = "en"), "auto" !== e && r.isString(e) ? e : document.documentElement && document.documentElement.lang ? document.documentElement.lang : navigator.language ? navigator.language.substr(0, 2) : t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PluginSystem = void 0;
        var r = o(1),
            n = function() {
                function e() {
                    this.items = new Map
                }
                return e.prototype.add = function(e, t) {
                    this.items.set(e.toLowerCase(), t)
                }, e.prototype.get = function(e) {
                    return this.items.get(e.toLowerCase())
                }, e.prototype.remove = function(e) {
                    this.items.delete(e.toLowerCase())
                }, e.prototype.init = function(t) {
                    var o = this,
                        n = t.o.extraPlugins.map((function(e) {
                            return r.isString(e) ? {
                                name: e
                            } : e
                        })),
                        i = r.splitArray(t.o.disablePlugins).map((function(e) {
                            return e.toLowerCase()
                        })),
                        a = [],
                        s = {},
                        l = [],
                        c = {},
                        u = function(n, u) {
                            var d;
                            if (!(i.includes(u) || a.includes(u) || s[u])) {
                                var p = null === (d = n) || void 0 === d ? void 0 : d.requires;
                                if (!(p && r.isArray(p) && o.hasDisabledRequires(i, p))) {
                                    var f = e.makePluginInstance(t, n);
                                    o.initOrWait(t, u, f, a, s), l.push(f), c[u] = f
                                }
                            }
                        },
                        d = this.loadExtras(t, n);
                    return r.callPromise(d, (function() {
                        t.isInDestruct || (o.items.forEach(u), o.addListenerOnBeforeDestruct(t, l), t.__plugins = c)
                    }))
                }, e.prototype.hasDisabledRequires = function(e, t) {
                    return Boolean((null == t ? void 0 : t.length) && e.some((function(e) {
                        return t.includes(e)
                    })))
                }, e.makePluginInstance = function(e, t) {
                    return r.isFunction(t) ? new t(e) : t
                }, e.prototype.initOrWait = function(t, o, n, i, a) {
                    var s = function(o, n) {
                        if (n.hasStyle && e.loadStyle(t, o), r.isInitable(n)) {
                            var s = n.requires;
                            if ((null == s ? void 0 : s.length) && !s.every((function(e) {
                                    return i.includes(e)
                                }))) return a[o] = n, !1;
                            n.init(t), i.push(o)
                        } else i.push(o);
                        return !0
                    };
                    s(o, n), Object.keys(a).forEach((function(e) {
                        a[e] && s(e, n) && (a[e] = void 0, delete a[e])
                    }))
                }, e.prototype.addListenerOnBeforeDestruct = function(e, t) {
                    e.e.on("beforeDestruct", (function() {
                        t.forEach((function(t) {
                            r.isDestructable(t) && t.destruct(e)
                        })), t.length = 0, delete e.__plugins
                    }))
                }, e.prototype.load = function(t, o) {
                    return Promise.all(o.map((function(o) {
                        var n = o.url || e.getFullUrl(t, o.name, !0);
                        return r.appendScriptAsync(t, n).then((function(e) {
                            return {
                                v: e,
                                status: "fulfilled"
                            }
                        }), (function(e) {
                            return {
                                e: e,
                                status: "rejected"
                            }
                        }))
                    })))
                }, e.loadStyle = function(t, o) {
                    return r.appendStyleAsync(t, e.getFullUrl(t, o, !1))
                }, e.getFullUrl = function(e, t, o) {
                    return t = r.kebabCase(t), e.basePath + "plugins/" + t + "/" + t + "." + (o ? "js" : "css")
                }, e.prototype.loadExtras = function(e, t) {
                    var o = this;
                    if (t && t.length) try {
                        var r = t.filter((function(e) {
                            return !o.items.has(e.name)
                        }));
                        if (r.length) return this.load(e, r)
                    } catch (e) {}
                }, e
            }();
        t.PluginSystem = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EventHandlersStore = t.defaultNameSpace = void 0, t.defaultNameSpace = "JoditEventDefaultNamespace";
        var r = function() {
            function e() {
                this.__store = {}
            }
            return e.prototype.get = function(e, t) {
                if (void 0 !== this.__store[t]) return this.__store[t][e]
            }, e.prototype.indexOf = function(e, t, o) {
                var r = this.get(e, t);
                if (r)
                    for (var n = 0; r.length > n; n += 1)
                        if (r[n].originalCallback === o) return n;
                return !1
            }, e.prototype.namespaces = function(e) {
                void 0 === e && (e = !1);
                var o = Object.keys(this.__store);
                return e ? o.filter((function(e) {
                    return e !== t.defaultNameSpace
                })) : o
            }, e.prototype.events = function(e) {
                return this.__store[e] ? Object.keys(this.__store[e]) : []
            }, e.prototype.set = function(e, t, o, r) {
                void 0 === r && (r = !1), void 0 === this.__store[t] && (this.__store[t] = {}), void 0 === this.__store[t][e] && (this.__store[t][e] = []), r ? this.__store[t][e].unshift(o) : this.__store[t][e].push(o)
            }, e.prototype.clear = function() {
                this.__store = {}
            }, e
        }();
        t.EventHandlersStore = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.watch = t.getPropertyDescriptor = void 0;
        var r = o(0),
            n = o(1),
            i = o(22),
            a = o(9);

        function s(e, t) {
            var o;
            do {
                o = Object.getOwnPropertyDescriptor(e, t), e = Object.getPrototypeOf(e)
            } while (!o && e);
            return o
        }

        function l(e) {
            return function(t, o) {
                if (!n.isFunction(t[o])) throw n.error("Handler must be a Function");
                var l = function(a) {
                    var l = function(e) {
                        for (var t = [], n = 1; arguments.length > n; n++) t[n - 1] = arguments[n];
                        a.isInDestruct || a[o].apply(a, r.__spreadArrays([e], t))
                    };
                    n.splitArray(e).forEach((function(e) {
                        var o = e.split("."),
                            r = o[0],
                            c = a[r];
                        if (c instanceof i.ObserveObject) c.on("change." + e, l);
                        else if (n.isPlainObject(c) && o.length > 1) a[r] = i.ObserveObject.create(c, [r]), a[r].on("change." + e, l);
                        else {
                            var u = s(t, r);
                            Object.defineProperty(a, r, {
                                configurable: !0,
                                set: function(t) {
                                    var o = c;
                                    o !== t && (c = t, u && u.set && u.set.call(a, t), n.isPlainObject(c) && (c = i.ObserveObject.create(c, [r])).on("change." + e, l), l(r, o, c))
                                },
                                get: function() {
                                    return u && u.get ? u.get.call(a) : c
                                }
                            })
                        }
                    }))
                };
                n.isFunction(t.hookStatus) ? t.hookStatus(a.STATUSES.ready, l) : l(t)
            }
        }
        t.getPropertyDescriptor = s, t.watch = l, t.default = l
    }, function(e, t, o) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.STATUSES = void 0, (r = t.STATUSES || (t.STATUSES = {})).beforeInit = "beforeInit", r.ready = "ready", r.beforeDestruct = "beforeDestruct", r.destructed = "destructed"
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Component = void 0;
        var r = o(1),
            n = o(11),
            i = o(47),
            a = function() {
                function e() {
                    this.ownerWindow = window, this.__componentStatus = i.STATUSES.beforeInit, this.componentName = "jodit-" + r.kebabCase(r.getClassName(this)), this.uid = "jodit-uid-" + n.uniqueUid()
                }
                return Object.defineProperty(e.prototype, "ownerDocument", {
                    get: function() {
                        return this.ow.document
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "od", {
                    get: function() {
                        return this.ownerDocument
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "ow", {
                    get: function() {
                        return this.ownerWindow
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "componentStatus", {
                    get: function() {
                        return this.__componentStatus
                    },
                    set: function(e) {
                        this.setStatus(e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.setStatus = function(e) {
                    var t = this;
                    if (e !== this.__componentStatus) {
                        this.__componentStatus = e;
                        var o = this.onStatusLst && this.onStatusLst[e];
                        o && o.forEach((function(e) {
                            return e(t)
                        }))
                    }
                }, e.prototype.get = function(e, t) {
                    return r.get(e, t || this)
                }, Object.defineProperty(e.prototype, "isReady", {
                    get: function() {
                        return this.componentStatus === i.STATUSES.ready
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isDestructed", {
                    get: function() {
                        return this.componentStatus === i.STATUSES.destructed
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isInDestruct", {
                    get: function() {
                        return i.STATUSES.beforeDestruct === this.componentStatus || i.STATUSES.destructed === this.componentStatus
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.bindDestruct = function(e) {
                    var t = this;
                    return e.e.on(i.STATUSES.beforeDestruct, (function() {
                        !t.isInDestruct && t.destruct()
                    })), this
                }, e.prototype.destruct = function() {
                    this.setStatus(i.STATUSES.destructed)
                }, e.prototype.hookStatus = function(e, t) {
                    this.onStatusLst || (this.onStatusLst = {}), this.onStatusLst[e] || (this.onStatusLst[e] = []), this.onStatusLst[e].push(t)
                }, e.STATUSES = i.STATUSES, e
            }();
        t.Component = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isNumeric = void 0;
        var r = o(19);
        t.isNumeric = function(e) {
            if (r.isString(e)) {
                if (!e.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) return !1;
                e = parseFloat(e)
            }
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isWindow = void 0, t.isWindow = function(e) {
            return null !== e && e === e.window
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.get = void 0;
        var r = o(5);
        t.get = function(e, t) {
            if (!r.isString(e) || !e.length) return null;
            for (var o = t, n = 0, i = e.split("."); i.length > n; n++) {
                var a = i[n];
                if (r.isVoid(o[a])) return null;
                o = o[a]
            }
            return r.isVoid(o) ? null : o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.completeUrl = void 0, t.completeUrl = function(e) {
            return "file:" === window.location.protocol && /^\/\//.test(e) && (e = "https:" + e), e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseQuery = void 0, t.parseQuery = function(e) {
            for (var t = {}, o = e.substr(1).split("&"), r = 0; o.length > r; r += 1) {
                var n = o[r].split("=");
                t[decodeURIComponent(n[0])] = decodeURIComponent(n[1] || "")
            }
            return t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeCursorPosition = t.getNotSpaceSibling = t.getSibling = t.getNeighbor = void 0;
        var r = o(12),
            n = o(2),
            i = o(3),
            a = o(13);

        function s(e, t) {
            return t ? e.previousSibling : e.nextSibling
        }
        t.getNeighbor = function(e, t, o) {
            return r.call(t ? n.Dom.prev : n.Dom.next, e, (function(e) {
                return Boolean(e && (!n.Dom.isText(e) || a.trim((null == e ? void 0 : e.nodeValue) || "").length))
            }), o)
        }, t.getSibling = s, t.getNotSpaceSibling = function(e, t) {
            return n.Dom.getNormalSibling(e, t, (function(e) {
                var t;
                return !n.Dom.isEmptyTextNode(e) && Boolean(!n.Dom.isText(e) || (null === (t = e.nodeValue) || void 0 === t ? void 0 : t.length) && a.trim(e.nodeValue))
            }))
        }, t.normalizeCursorPosition = function(e, t) {
            for (var o = n.Dom.getNormalSibling(e, t), r = n.Dom.getNormalSibling(e, !t); n.Dom.isElement(o) && !n.Dom.isTag(o, i.INSEPARABLE_TAGS) && !r;) t || !o.firstChild ? o.appendChild(e) : n.Dom.before(o.firstChild, e), o = s(e, t), r = s(e, !t)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Icon = void 0;
        var r = o(1),
            n = function() {
                function e() {}
                return e.getIcon = function(t) {
                    return /^<svg/i.test(t) ? t : e.icons[t] || e.icons[t.replace(/-/g, "_")] || e.icons[t.toLowerCase()]
                }, e.exists = function(e) {
                    return void 0 !== this.getIcon(e)
                }, e.get = function(e, t) {
                    return void 0 === t && (t = "<span></span>"), this.getIcon(e) || t
                }, e.set = function(e, t) {
                    this.icons[e.replace("_", "-")] = t
                }, e.makeIcon = function(t, o) {
                    var n;
                    if (o) {
                        var i = o.name.replace(/[^a-zA-Z0-9]/g, "_");
                        if (o.iconURL) n = t.c.span(), r.css(n, "backgroundImage", "url(" + o.iconURL.replace("{basePath}", (null == t ? void 0 : t.basePath) || "") + ")");
                        else {
                            var a = t.e.fire("getIcon", o.name, o, i) || e.get(o.name, "");
                            a && (n = t.c.fromHTML(a.trim())).classList.add("jodit-icon_" + i)
                        }
                    }
                    return n && (n.classList.add("jodit-icon"), n.style.fill = o.fill), n
                }, e.icons = {}, e
            }();
        t.Icon = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UISeparator = void 0;
        var r = o(0),
            n = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t
            }(o(20).UIElement);
        t.UISeparator = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIGroup = void 0;
        var r = o(0);
        o(159);
        var n = o(20),
            i = o(14),
            a = o(1),
            s = function(e) {
                function t(t, o) {
                    var r = e.call(this, t) || this;
                    return r.elements = [], r.buttonSize = "middle", null == o || o.forEach((function(e) {
                        return e && r.append(e)
                    })), r
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "allChildren", {
                    get: function() {
                        for (var e = [], o = r.__spreadArrays(this.elements); o.length;) {
                            var n = o.pop();
                            a.isArray(n) ? o.push.apply(o, n) : n instanceof t ? o.push.apply(o, n.elements.reverse()) : n && e.push(n)
                        }
                        return e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.update = function() {
                    this.elements.forEach((function(e) {
                        return e.update()
                    })), this.setMod("size", this.buttonSize)
                }, t.prototype.append = function(e) {
                    this.elements.push(e), this.container.appendChild(e.container), e.parentElement = this, e.update()
                }, t.prototype.clear = function() {
                    this.elements.forEach((function(e) {
                        return e.destruct()
                    })), this.elements.length = 0
                }, t.prototype.destruct = function() {
                    return this.clear(), e.prototype.destruct.call(this)
                }, r.__decorate([i.watch("buttonSize")], t.prototype, "update", null), t
            }(n.UIElement);
        t.UIGroup = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Async = void 0;
        var r = o(0),
            n = o(1),
            i = function() {
                function e() {
                    this.timers = new Map, this.promisesRejections = new Set, this.isDestructed = !1
                }
                return e.prototype.setTimeout = function(e, t) {
                    for (var o = [], i = 2; arguments.length > i; i++) o[i - 2] = arguments[i];
                    if (this.isDestructed) return 0;
                    var a = {};
                    "number" != typeof t && (t = (a = t).timeout || 0), a.label && this.timers.has(a.label) && (n.clearTimeout(this.timers.get(a.label)), this.timers.delete(a.label));
                    var s = n.setTimeout.apply(void 0, r.__spreadArrays([e, t], o)),
                        l = a.label || s;
                    return this.timers.set(l, s), s
                }, e.prototype.clearTimeout = function(e) {
                    n.clearTimeout(e), this.timers.delete(e)
                }, e.prototype.debounce = function(e, t, o) {
                    var r = this;
                    void 0 === o && (o = !1);
                    var i = 0,
                        a = !1,
                        s = function() {
                            for (var t = [], o = 0; arguments.length > o; o++) t[o] = arguments[o];
                            a || (i = 0, e.apply(void 0, t), a = !0)
                        };
                    return function() {
                        for (var l = [], c = 0; arguments.length > c; c++) l[c] = arguments[c];
                        a = !1, t ? (!i && o && s.apply(void 0, l), n.clearTimeout(i), i = r.setTimeout((function() {
                            return s.apply(void 0, l)
                        }), n.isFunction(t) ? t() : t), r.timers.set(e, i)) : s.apply(void 0, l)
                    }
                }, e.prototype.throttle = function(e, t) {
                    var o, r, i, a = this,
                        s = null;
                    return function() {
                        for (var l = [], c = 0; arguments.length > c; c++) l[c] = arguments[c];
                        o = !0, i = l, t ? s || (r = function() {
                            o ? (e.apply(void 0, i), o = !1, s = a.setTimeout(r, n.isFunction(t) ? t() : t), a.timers.set(r, s)) : s = null
                        })() : e.apply(void 0, i)
                    }
                }, e.prototype.promise = function(e) {
                    var t = this,
                        o = function() {},
                        r = new Promise((function(r, n) {
                            return t.promisesRejections.add(n), o = n, e(r, n)
                        }));
                    return r.finally((function() {
                        t.promisesRejections.delete(o)
                    })), r
                }, e.prototype.promiseState = function(e) {
                    var t = this;
                    if (e.status) return e.status;
                    if (!Promise.race) return new Promise((function(o) {
                        e.then((function(e) {
                            return o("fulfilled"), e
                        }), (function(e) {
                            throw o("rejected"), e
                        })), t.setTimeout((function() {
                            o("pending")
                        }), 100)
                    }));
                    var o = {};
                    return Promise.race([e, o]).then((function(e) {
                        return e === o ? "pending" : "fulfilled"
                    }), (function() {
                        return "rejected"
                    }))
                }, e.prototype.clear = function() {
                    var e = this;
                    this.timers.forEach((function(t) {
                        n.clearTimeout(e.timers.get(t))
                    })), this.timers.clear(), this.promisesRejections.forEach((function(e) {
                        e()
                    })), this.promisesRejections.clear()
                }, e.prototype.destruct = function() {
                    this.clear(), this.isDestructed = !0
                }, e
            }();
        t.Async = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ContextMenu = void 0;
        var r = o(0);
        o(177);
        var n = o(24),
            i = o(15),
            a = o(5),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.show = function(t, o, r) {
                    var n = this,
                        s = this,
                        l = this.j.c.div("jodit-context-menu__actions");
                    a.isArray(r) && (r.forEach((function(e) {
                        if (e) {
                            var t = i.Button(n.jodit, e.icon || "empty", e.title);
                            n.jodit && t.setParentView(n.jodit), t.setMod("context", "menu"), t.onAction((function(t) {
                                var o;
                                return null === (o = e.exec) || void 0 === o || o.call(s, t), s.close(), !1
                            })), l.appendChild(t.container)
                        }
                    })), e.prototype.setContent.call(this, l).open((function() {
                        return {
                            left: t,
                            top: o,
                            width: 0,
                            height: 0
                        }
                    }), !0))
                }, t
            }(n.Popup);
        t.ContextMenu = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.View = void 0;
        var r = o(0),
            n = o(38),
            i = o(1),
            a = o(3),
            s = o(10),
            l = o(58),
            c = o(11),
            u = o(14),
            d = function(e) {
                function t(o, r) {
                    void 0 === r && (r = !1);
                    var i = e.call(this) || this;
                    return i.isJodit = r, i.isView = !0, i.components = new Set, i.version = "3.4.25", i.async = new l.Async, i.buffer = n.Storage.makeStorage(), i.OPTIONS = t.defaultOptions, i.__isFullSize = !1, i.__whoLocked = "", i.isLockedNotBy = function(e) {
                        return i.isLocked && i.__whoLocked !== e
                    }, i.__modulesInstances = new Map, i.id = (new Date).getTime().toString(), i.buffer = n.Storage.makeStorage(), i.initOptions(o), i.initOwners(), i.events = new s.EventsNative(i.od), i.create = new s.Create(i.od), i.container = i.c.div(), i.container.classList.add("jodit"), i.progressbar = new s.ProgressBar(i), i
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "basePath", {
                    get: function() {
                        return this.o.basePath ? this.o.basePath : a.BASE_PATH
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "defaultTimeout", {
                    get: function() {
                        return i.isVoid(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "c", {
                    get: function() {
                        return this.create
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "container", {
                    get: function() {
                        return this.__container
                    },
                    set: function(e) {
                        this.__container = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "e", {
                    get: function() {
                        return this.events
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "options", {
                    get: function() {
                        return this.__options
                    },
                    set: function(e) {
                        this.__options = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "o", {
                    get: function() {
                        return this.options
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.i18n = function(e) {
                    for (var t = [], o = 1; arguments.length > o; o++) t[o - 1] = arguments[o];
                    return i.i18n(e, t, this.options)
                }, t.prototype.toggleFullSize = function(e) {
                    void 0 === e && (e = !this.__isFullSize), e !== this.__isFullSize && (this.__isFullSize = e, this.events && this.e.fire("toggleFullSize", e))
                }, Object.defineProperty(t.prototype, "isLocked", {
                    get: function() {
                        return "" !== this.__whoLocked
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.lock = function(e) {
                    return void 0 === e && (e = "any"), !this.isLocked && (this.__whoLocked = e, !0)
                }, t.prototype.unlock = function() {
                    return !!this.isLocked && (this.__whoLocked = "", !0)
                }, Object.defineProperty(t.prototype, "isFullSize", {
                    get: function() {
                        return this.__isFullSize
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.getVersion = function() {
                    return this.version
                }, t.prototype.initOptions = function(e) {
                    this.options = r.__assign(r.__assign(r.__assign({}, this.options || {}), t.defaultOptions), e)
                }, t.prototype.initOwners = function() {}, t.prototype.getInstance = function(e, t) {
                    var o = c.modules[e],
                        r = this.__modulesInstances;
                    if (!i.isFunction(o)) throw i.error("Need real module name");
                    if (!r.has(e)) {
                        var n = o.prototype instanceof s.ViewComponent ? new o(this, t) : new o(t);
                        this.components.add(n), r.set(e, n)
                    }
                    return r.get(e)
                }, t.prototype.beforeDestruct = function() {
                    this.e.fire(s.STATUSES.beforeDestruct), this.components.forEach((function(e) {
                        i.isDestructable(e) && !e.isInDestruct && e.destruct()
                    })), this.components.clear()
                }, t.prototype.destruct = function() {
                    this.isDestructed || (this.async && this.async.destruct(), this.events && this.e.destruct(), this.buffer && this.buffer.clear(), s.Dom.safeRemove(this.container), e.prototype.destruct.call(this))
                }, r.__decorate([u.hook(s.STATUSES.beforeDestruct)], t.prototype, "beforeDestruct", null), t
            }(s.Component);
        t.View = d, d.defaultOptions = {
            extraButtons: [],
            textIcons: !1,
            removeButtons: [],
            zIndex: 100002,
            defaultTimeout: 100,
            fullsize: !1,
            showTooltip: !0,
            useNativeTooltip: !1,
            buttons: [],
            globalFullSize: !0
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MemoryStorageProvider = void 0;
        var r = function() {
            function e() {
                this.data = new Map
            }
            return e.prototype.set = function(e, t) {
                this.data.set(e, t)
            }, e.prototype.delete = function(e) {
                this.data.delete(e)
            }, e.prototype.get = function(e) {
                return this.data.get(e)
            }, e.prototype.exists = function(e) {
                return this.data.has(e)
            }, e.prototype.clear = function() {
                this.data.clear()
            }, e
        }();
        t.MemoryStorageProvider = r
    }, function(e, t, o) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LocalStorageProvider = t.canUsePersistentStorage = void 0, t.canUsePersistentStorage = function() {
            return void 0 === r && (r = function() {
                var e = "___Jodit___" + Math.random().toString();
                try {
                    localStorage.setItem(e, "1");
                    var t = "1" === localStorage.getItem(e);
                    return localStorage.removeItem(e), t
                } catch (e) {}
                return !1
            }()), r
        };
        var n = function() {
            function e(e) {
                this.rootKey = e
            }
            return e.prototype.set = function(e, t) {
                try {
                    var o = localStorage.getItem(this.rootKey),
                        r = o ? JSON.parse(o) : {};
                    r[e] = t, localStorage.setItem(this.rootKey, JSON.stringify(r))
                } catch (e) {}
            }, e.prototype.delete = function(e) {
                try {
                    localStorage.removeItem(this.rootKey)
                } catch (e) {}
            }, e.prototype.get = function(e) {
                try {
                    var t = localStorage.getItem(this.rootKey),
                        o = t ? JSON.parse(t) : {};
                    return void 0 !== o[e] ? o[e] : null
                } catch (e) {}
            }, e.prototype.exists = function(e) {
                return null !== this.get(e)
            }, e.prototype.clear = function() {
                try {
                    localStorage.removeItem(this.rootKey)
                } catch (e) {}
            }, e
        }();
        t.LocalStorageProvider = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ToolbarEditorCollection = void 0;
        var r = o(0),
            n = o(39),
            i = o(3),
            a = o(2),
            s = o(1),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.checkActiveStatus = function(e, o) {
                        var r = 0,
                            n = 0;
                        return Object.keys(e).forEach((function(i) {
                            var a = e[i];
                            s.isFunction(a) ? a(t.j, s.css(o, i).toString()) && (r += 1) : -1 !== a.indexOf(s.css(o, i).toString()) && (r += 1), n += 1
                        })), n === r
                    }, t
                }
                return r.__extends(t, e), t.prototype.shouldBeDisabled = function(t) {
                    var o = e.prototype.shouldBeDisabled.call(this, t);
                    if (void 0 !== o) return o;
                    var r = void 0 === t.control.mode ? i.MODE_WYSIWYG : t.control.mode;
                    return !(r === i.MODE_SPLIT || r === this.j.getRealMode())
                }, t.prototype.shouldBeActive = function(t) {
                    var o = this,
                        r = e.prototype.shouldBeActive.call(this, t);
                    if (void 0 !== r) return r;
                    var n = this.j.selection ? this.j.s.current() : null;
                    if (!n) return !1;
                    if (t.control.tags) {
                        var i = t.control.tags;
                        if (a.Dom.up(n, (function(e) {
                                if (e && -1 !== i.indexOf(e.nodeName.toLowerCase())) return !0
                            }), this.j.editor)) return !0
                    }
                    if (t.control.css) {
                        var s = t.control.css;
                        if (a.Dom.up(n, (function(e) {
                                if (e && !a.Dom.isText(e)) return o.checkActiveStatus(s, e)
                            }), this.j.editor)) return !0
                    }
                    return !1
                }, t.prototype.getTarget = function(e) {
                    return e.target || this.j.s.current() || null
                }, t
            }(n.ToolbarCollection);
        t.ToolbarEditorCollection = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ToolbarButton = void 0;
        var r = o(0);
        o(182);
        var n = o(15),
            i = o(14),
            a = o(2),
            s = o(24),
            l = o(18),
            c = o(1),
            u = o(10),
            d = function(e) {
                function t(t, o, i) {
                    void 0 === i && (i = null);
                    var a = e.call(this, t) || this;
                    return a.control = o, a.target = i, a.state = r.__assign(r.__assign({}, n.UIButtonState()), {
                        theme: "toolbar",
                        currentValue: "",
                        hasTrigger: !1
                    }), a.setParentView(t), t.e.on([a.button, a.trigger], "mousedown", (function(e) {
                        return e.preventDefault()
                    })), a.onAction(a.onClick), a.setStatus(u.STATUSES.ready), a.initFromControl(), a.initTooltip(), a.update(), a
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "toolbar", {
                    get: function() {
                        return this.closest(u.ToolbarCollection)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "button", {
                    get: function() {
                        return this.container.querySelector("button." + this.componentName + "__button")
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.update = function() {
                    var t = this.control,
                        o = this.state,
                        r = this.closest(u.ToolbarCollection);
                    r && (o.disabled = Boolean(r.shouldBeDisabled(this)), o.activated = Boolean(r.shouldBeActive(this))), c.isFunction(t.update) && t.update(this), e.prototype.update.call(this)
                }, t.prototype.onChangeActivated = function() {
                    c.attr(this.button, "aria-pressed", this.state.activated), e.prototype.onChangeActivated.call(this)
                }, t.prototype.onChangeText = function() {
                    c.isFunction(this.control.template) ? this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text)) : e.prototype.onChangeText.call(this), this.setMod("text-icons", Boolean(this.text.innerText.trim().length))
                }, t.prototype.onChangeTabIndex = function() {
                    c.attr(this.button, "tabIndex", this.state.tabIndex)
                }, t.prototype.createContainer = function() {
                    var t = this.componentName,
                        o = this.j.c.span(t),
                        r = e.prototype.createContainer.call(this);
                    return c.attr(o, "role", "listitem"), r.classList.remove(t), r.classList.add(t + "__button"), Object.defineProperty(r, "component", {
                        value: this
                    }), o.appendChild(r), this.trigger = this.j.c.fromHTML('<span role="trigger" class="' + t + '__trigger">' + u.Icon.get("chevron") + "</span>"), this.j.e.on(this.trigger, "click", this.onTriggerClick.bind(this)), o
                }, t.prototype.focus = function() {
                    var e;
                    null === (e = this.container.querySelector("button")) || void 0 === e || e.focus()
                }, t.prototype.onChangeHasTrigger = function() {
                    this.state.hasTrigger ? this.container.appendChild(this.trigger) : a.Dom.safeRemove(this.trigger), this.setMod("with-trigger", this.state.hasTrigger || null)
                }, t.prototype.onChangeDisabled = function() {
                    var e = this.state.disabled ? "disabled" : null;
                    c.attr(this.trigger, "disabled", e), c.attr(this.button, "disabled", e), c.attr(this.container, "disabled", e)
                }, t.prototype.initTooltip = function() {
                    var e = this;
                    this.j.o.textIcons || !this.j.o.showTooltip || this.j.o.useNativeTooltip || this.j.e.off(this.container, "mouseenter mouseleave").on(this.container, "mousemove", (function(t) {
                        e.state.tooltip && !e.state.disabled && e.j.e.fire("delayShowTooltip", (function() {
                            return {
                                x: t.clientX + 10,
                                y: t.clientY + 10
                            }
                        }), e.state.tooltip)
                    })).on(this.container, "mouseleave", (function() {
                        e.j.e.fire("hideTooltip")
                    }))
                }, t.prototype.initFromControl = function() {
                    var e = this.control,
                        t = this.state;
                    this.updateSize(), t.name = e.name;
                    var o = this.j.o.textIcons;
                    if (!0 === o || c.isFunction(o) && o(e.name) || e.template) t.icon = n.UIButtonState().icon, t.text = e.text || e.name;
                    else {
                        if (e.iconURL) t.icon.iconURL = e.iconURL;
                        else {
                            var r = e.icon || e.name;
                            t.icon.name = u.Icon.exists(r) ? r : ""
                        }
                        e.iconURL || t.icon.name || (t.text = e.text || e.name)
                    }
                    e.tooltip && (t.tooltip = this.j.i18n(e.tooltip)), t.hasTrigger = Boolean(e.list || e.popup && e.exec)
                }, t.prototype.onTriggerClick = function(e) {
                    var t = this,
                        o = this.control;
                    if (e.buffer = {
                            actionTrigger: this
                        }, o.list) return this.openControlList(o);
                    if (c.isFunction(o.popup)) {
                        var r = new s.Popup(this.j);
                        if (r.parentElement = this, !1 !== this.j.e.fire(c.camelCase("before-" + o.name + "-open-popup"), this.target, o, r)) {
                            var n = (this.toolbar ? this.toolbar.getTarget(this) : this.target) || null,
                                i = o.popup(this.j, n, o, r.close, this);
                            i && r.setContent(c.isString(i) ? this.j.c.fromHTML(i) : i).open((function() {
                                return c.position(t.container)
                            }))
                        }
                        this.j.e.fire(c.camelCase("after-" + o.name + "-open-popup"), r.container)
                    }
                }, t.prototype.openControlList = function(e) {
                    var t = this,
                        o = this.jodit.options.controls,
                        n = function(e) {
                            return o && o[e]
                        },
                        i = e.list,
                        a = new s.Popup(this.j),
                        u = l.makeCollection(this.j);
                    a.parentElement = this, u.parentElement = a, u.mode = "vertical";
                    var d = function(t, o) {
                        if (c.isString(o) && n(o)) return r.__assign({
                            name: o.toString()
                        }, n(o));
                        if (c.isString(t) && n(t)) return r.__assign(r.__assign({
                            name: t.toString()
                        }, n(t)), "object" == typeof o ? o : {});
                        var i = {
                            name: t.toString(),
                            template: e.childTemplate,
                            exec: e.exec,
                            data: e.data,
                            command: e.command,
                            isActive: e.isChildActive,
                            isDisabled: e.isChildDisabled,
                            mode: e.mode,
                            args: r.__spreadArrays(e.args ? e.args : [], [t, o])
                        };
                        return c.isString(o) && (i.text = o), i
                    };
                    u.build(c.isArray(i) ? i.map(d) : Object.keys(i).map((function(e) {
                        return d(e, i[e])
                    })), this.target), a.setContent(u.container).open((function() {
                        return c.position(t.container)
                    })), this.state.activated = !0, this.j.e.on(a, "afterClose", (function() {
                        t.state.activated = !1
                    }))
                }, t.prototype.onClick = function(e) {
                    var t, o, r, n, i = this.control;
                    if (c.isFunction(i.exec)) {
                        var a = (this.toolbar ? this.toolbar.getTarget(this) : this.target) || null;
                        if (!1 !== i.exec(this.j, a, {
                                control: i,
                                originalEvent: e,
                                button: this
                            })) return null === (o = null === (t = this.j) || void 0 === t ? void 0 : t.e) || void 0 === o || o.fire("synchro"), this.parentElement && this.parentElement.update(), void(null === (n = null === (r = this.j) || void 0 === r ? void 0 : r.e) || void 0 === n || n.fire("closeAllPopups afterExec"))
                    }
                    return i.list ? this.openControlList(i) : c.isFunction(i.popup) ? this.onTriggerClick(e) : void((i.command || i.name) && (c.call(c.isJoditObject(this.j) ? this.j.execCommand.bind(this.j) : this.j.od.execCommand.bind(this.j.od), i.command || i.name, !1, i.args && i.args[0]), this.j.e.fire("closeAllPopups")))
                }, r.__decorate([i.watch("state.hasTrigger")], t.prototype, "onChangeHasTrigger", null), t
            }(n.UIButton);
        t.ToolbarButton = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ToolbarContent = void 0;
        var r = o(0);
        o(183);
        var n = o(15),
            i = o(5),
            a = o(2),
            s = o(12),
            l = function(e) {
                function t(t, o, r) {
                    void 0 === r && (r = null);
                    var n = e.call(this, t) || this;
                    return n.control = o, n.target = r, n.container.classList.add(n.componentName + "_" + n.clearName(o.name)), s.attr(n.container, "role", "content"), n
                }
                return r.__extends(t, e), t.prototype.update = function() {
                    var t = this.control.getContent(this.j, this.control, this);
                    (i.isString(t) || t.parentNode !== this.container) && (a.Dom.detach(this.container), this.container.appendChild(i.isString(t) ? this.j.create.fromHTML(t) : t)), e.prototype.update.call(this)
                }, t.prototype.createContainer = function() {
                    return this.j.c.span(this.componentName)
                }, t
            }(n.UIButton);
        t.ToolbarContent = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeContextMenu = t.makeDataProvider = void 0;
        var r = o(40),
            n = o(59);
        t.makeDataProvider = function(e, t) {
            return new r.default(e, t)
        }, t.makeContextMenu = function(e) {
            return new n.ContextMenu(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nativeListeners = t.getItem = void 0;
        var r = o(0),
            n = o(1),
            i = o(21),
            a = o(193),
            s = o(2);
        t.getItem = function(e, t, o) {
            return void 0 === o && (o = "a"), s.Dom.closest(e, (function(e) {
                return s.Dom.isElement(e) && s.Dom.isTag(e, o)
            }), t)
        }, t.nativeListeners = function() {
            var e = this,
                o = !1,
                s = this;
            s.e.on(s.tree, "dragstart", (function(e) {
                var r = t.getItem(e.target, s.dialog.container);
                r && s.o.moveFolder && (o = r)
            })).on(s.tree, "drop", (function(e) {
                if ((s.o.moveFile || s.o.moveFolder) && o) {
                    var r = n.attr(o, "-path") || "";
                    if (!s.o.moveFolder && o.classList.contains(i.F_CLASS + "__tree-item")) return !1;
                    if (o.classList.contains(i.ITEM_CLASS) && (r += n.attr(o, "-name"), !s.o.moveFile)) return !1;
                    var a = t.getItem(e.target, s.dialog.container);
                    if (!a) return;
                    s.dataProvider.move(r, n.attr(a, "-path") || "", n.attr(a, "-source") || "", o.classList.contains(i.ITEM_CLASS)).then((function(e) {
                        s.o.isSuccess(e) ? s.loadTree() : s.status(s.o.getMessage(e))
                    }), s.status), o = !1
                }
            })).on(s.files, "contextmenu", a.default(s)).on(s.files, "click", (function(t) {
                n.ctrlKey(t) || (e.state.activeElements = [])
            })).on(s.files, "click", (function(e) {
                var o = t.getItem(e.target, s.dialog.container);
                if (o) {
                    var i = s.elementsMap[o.dataset.key || ""].item;
                    if (i) return s.state.activeElements = n.ctrlKey(e) ? r.__spreadArrays(s.state.activeElements, [i]) : [i], e.stopPropagation(), !1
                }
            })).on(s.files, "dragstart", (function(e) {
                if (s.o.moveFile) {
                    var r = t.getItem(e.target, s.dialog.container);
                    if (!r) return;
                    o = r
                }
            })).on(s.dialog.container, "drop", (function(e) {
                return e.preventDefault()
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Snapshot = void 0;
        var r = o(0),
            n = o(9),
            i = o(2),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isBlocked = !1, t
                }
                return r.__extends(t, e), t.equal = function(e, t) {
                    return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range)
                }, t.countNodesBeforeInParent = function(e) {
                    if (!e.parentNode) return 0;
                    var t, o = e.parentNode.childNodes,
                        r = 0,
                        n = null;
                    for (t = 0; o.length > t; t += 1) {
                        if (!n || i.Dom.isText(o[t]) && "" === o[t].textContent || i.Dom.isText(n) && i.Dom.isText(o[t]) || (r += 1), o[t] === e) return r;
                        n = o[t]
                    }
                    return 0
                }, t.strokeOffset = function(e, t) {
                    for (; i.Dom.isText(e);) i.Dom.isText(e = e.previousSibling) && null !== e.textContent && (t += e.textContent.length);
                    return t
                }, t.prototype.calcHierarchyLadder = function(e) {
                    var o = [];
                    if (!e || !e.parentNode || !i.Dom.isOrContains(this.j.editor, e)) return [];
                    for (; e && e !== this.j.editor;) e && o.push(t.countNodesBeforeInParent(e)), e = e.parentNode;
                    return o.reverse()
                }, t.prototype.getElementByLadder = function(e) {
                    var t, o = this.j.editor;
                    for (t = 0; o && e.length > t; t += 1) o = o.childNodes[e[t]];
                    return o
                }, t.prototype.make = function() {
                    var e = {
                        html: "",
                        range: {
                            startContainer: [],
                            startOffset: 0,
                            endContainer: [],
                            endOffset: 0
                        }
                    };
                    e.html = this.j.getNativeEditorValue();
                    var o = this.j.s.sel;
                    if (o && o.rangeCount) {
                        var r = o.getRangeAt(0),
                            n = this.calcHierarchyLadder(r.startContainer),
                            i = this.calcHierarchyLadder(r.endContainer),
                            a = t.strokeOffset(r.startContainer, r.startOffset),
                            s = t.strokeOffset(r.endContainer, r.endOffset);
                        n.length || r.startContainer === this.j.editor || (a = 0), i.length || r.endContainer === this.j.editor || (s = 0), e.range = {
                            startContainer: n,
                            startOffset: a,
                            endContainer: i,
                            endOffset: s
                        }
                    }
                    return e
                }, t.prototype.restore = function(e) {
                    this.isBlocked = !0, this.j.getNativeEditorValue() !== e.html && this.j.setEditorValue(e.html), this.restoreOnlySelection(e), this.isBlocked = !1
                }, t.prototype.restoreOnlySelection = function(e) {
                    try {
                        if (e.range) {
                            var t = this.j.ed.createRange();
                            t.setStart(this.getElementByLadder(e.range.startContainer), e.range.startOffset), t.setEnd(this.getElementByLadder(e.range.endContainer), e.range.endOffset), this.j.s.selectRange(t)
                        }
                    } catch (e) {
                        this.j.editor.lastChild && this.j.s.setCursorAfter(this.j.editor.lastChild)
                    }
                }, t.prototype.destruct = function() {
                    this.isBlocked = !1, e.prototype.destruct.call(this)
                }, t
            }(n.ViewComponent);
        t.Snapshot = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Style = void 0;
        var r = o(3),
            n = o(204),
            i = function() {
                function e(e) {
                    this.options = e
                }
                return Object.defineProperty(e.prototype, "element", {
                    get: function() {
                        return this.options.element || this.defaultTag
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "elementIsBlock", {
                    get: function() {
                        return Boolean(this.options.element && r.IS_BLOCK.test(this.options.element))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "defaultTag", {
                    get: function() {
                        return this.options.defaultTag ? this.options.defaultTag : this.elementIsBlock ? "p" : "span"
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "elementIsDefault", {
                    get: function() {
                        return this.element === this.defaultTag
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.apply = function(e) {
                    new n.ApplyStyle(e, this).apply()
                }, e
            }();
        t.Style = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.justify = t.alignElement = t.clearAlign = void 0;
        var r = o(4),
            n = o(10),
            i = o(1);
        r.Config.prototype.controls.align = {
            name: "left",
            tooltip: "Align",
            update: function(e) {
                var t = e.j,
                    o = e.control,
                    r = t.s.current();
                if (r) {
                    var a = n.Dom.closest(r, (function(e) {
                            return n.Dom.isBlock(e, t.ew)
                        }), t.editor) || t.editor,
                        s = i.css(a, "text-align").toString();
                    o.defaultValue && -1 !== o.defaultValue.indexOf(s) && (s = "left"), o.data && o.data.currentValue !== s && o.list && -1 !== o.list.indexOf(s) && (t.o.textIcons ? e.state.text = s : e.state.icon.name = s, o.data.currentValue = s)
                }
            },
            isActive: function(e, t) {
                var o = e.s.current();
                if (o && t.defaultValue) {
                    var r = n.Dom.closest(o, (function(t) {
                        return n.Dom.isBlock(t, e.ew)
                    }), e.editor) || e.editor;
                    return -1 === t.defaultValue.indexOf(i.css(r, "text-align").toString())
                }
                return !1
            },
            defaultValue: ["left", "start", "inherit"],
            data: {
                currentValue: "left"
            },
            list: ["center", "left", "right", "justify"]
        }, r.Config.prototype.controls.center = {
            command: "justifyCenter",
            css: {
                "text-align": "center"
            },
            tooltip: "Align Center"
        }, r.Config.prototype.controls.justify = {
            command: "justifyFull",
            css: {
                "text-align": "justify"
            },
            tooltip: "Align Justify"
        }, r.Config.prototype.controls.left = {
            command: "justifyLeft",
            css: {
                "text-align": "left"
            },
            tooltip: "Align Left"
        }, r.Config.prototype.controls.right = {
            command: "justifyRight",
            css: {
                "text-align": "right"
            },
            tooltip: "Align Right"
        }, t.clearAlign = function(e, t) {
            n.Dom.each(e, (function(e) {
                n.Dom.isHTMLElement(e, t.ew) && e.style.textAlign && (e.style.textAlign = "", e.style.cssText.trim().length || e.removeAttribute("style"))
            }))
        }, t.alignElement = function(e, o, r) {
            if (n.Dom.isNode(o, r.ew) && n.Dom.isElement(o)) switch (t.clearAlign(o, r), e.toLowerCase()) {
                case "justifyfull":
                    o.style.textAlign = "justify";
                    break;
                case "justifyright":
                    o.style.textAlign = "right";
                    break;
                case "justifyleft":
                    o.style.textAlign = "left";
                    break;
                case "justifycenter":
                    o.style.textAlign = "center"
            }
        }, t.justify = function(e) {
            var o = function(o) {
                return e.s.focus(), e.s.eachSelection((function(r) {
                    if (r) {
                        var i = n.Dom.up(r, (function(t) {
                            return n.Dom.isBlock(t, e.ew)
                        }), e.editor);
                        i || (i = n.Dom.wrapInline(r, e.o.enterBlock, e)), t.alignElement(o, i, e)
                    }
                })), !1
            };
            e.registerCommand("justifyfull", o), e.registerCommand("justifyright", o), e.registerCommand("justifyleft", o), e.registerCommand("justifycenter", o)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SourceEditor = void 0;
        var r = function() {
            function e(e, t, o, r) {
                this.jodit = e, this.container = t, this.toWYSIWYG = o, this.fromWYSIWYG = r, this.className = "", this.isReady = !1
            }
            return Object.defineProperty(e.prototype, "j", {
                get: function() {
                    return this.jodit
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.onReady = function() {
                this.replaceUndoManager(), this.isReady = !0, this.j.e.fire(this, "ready")
            }, e.prototype.onReadyAlways = function(e) {
                var t;
                this.isReady ? e() : null === (t = this.j.events) || void 0 === t || t.on(this, "ready", e)
            }, e
        }();
        t.SourceEditor = r
    }, function(e, t, o) {
        e.exports = o(73)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Jodit = void 0, o(74), "undefined" != typeof window && o(75);
        var r = o(81),
            n = o(212),
            i = o(14),
            a = o(3),
            s = o(10),
            l = o(232),
            c = o(323),
            u = o(4),
            d = o(404);
        Object.keys(a).forEach((function(e) {
            r.Jodit[e] = a[e]
        }));
        var p = function(e) {
            return "__esModule" !== e
        };
        Object.keys(c).filter(p).forEach((function(e) {
            s.Icon.set(e.replace("_", "-"), c[e])
        })), Object.keys(s).filter(p).forEach((function(e) {
            r.Jodit.modules[e] = s[e]
        })), d.keepModuleNames(r.Jodit.modules), Object.keys(i).filter(p).forEach((function(e) {
            r.Jodit.decorators[e] = i[e]
        })), ["Confirm", "Alert", "Prompt"].forEach((function(e) {
            r.Jodit[e] = s[e]
        })), Object.keys(l).filter(p).forEach((function(e) {
            r.Jodit.plugins.add(e, l[e])
        })), Object.keys(n.default).filter(p).forEach((function(e) {
            r.Jodit.lang[e] = n.default[e]
        })), r.Jodit.defaultOptions = u.Config.defaultOptions, u.OptionsDefault.prototype = r.Jodit.defaultOptions, t.Jodit = r.Jodit
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(76), o(77), Array.from || (Array.from = function(e) {
            if (e instanceof Set) {
                var t = [];
                return e.forEach((function(e) {
                    return t.push(e)
                })), t
            }
            return [].slice.call(e)
        }), Array.prototype.includes || (Array.prototype.includes = function(e) {
            return this.indexOf(e) > -1
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), r = 1; arguments.length > r; r++) {
                    var n = arguments[r];
                    if (null != n)
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (o[i] = n[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        }), Array.prototype.find || (Array.prototype.find = function(e) {
            return this.indexOf(e) > -1 ? e : void 0
        })
    }, function(e, t) {
        "document" in window.self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(e) {
            "use strict";
            if ("Element" in e) {
                var t = "classList",
                    o = e.Element.prototype,
                    r = Object,
                    n = String.prototype.trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    i = Array.prototype.indexOf || function(e) {
                        for (var t = 0, o = this.length; o > t; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    },
                    a = function(e, t) {
                        this.name = e, this.code = DOMException[e], this.message = t
                    },
                    s = function(e, t) {
                        if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return i.call(e, t)
                    },
                    l = function(e) {
                        for (var t = n.call(e.getAttribute("class") || ""), o = t ? t.split(/\s+/) : [], r = 0, i = o.length; i > r; r++) this.push(o[r]);
                        this._updateClassName = function() {
                            e.setAttribute("class", this.toString())
                        }
                    },
                    c = l.prototype = [],
                    u = function() {
                        return new l(this)
                    };
                if (a.prototype = Error.prototype, c.item = function(e) {
                        return this[e] || null
                    }, c.contains = function(e) {
                        return -1 !== s(this, e += "")
                    }, c.add = function() {
                        var e, t = arguments,
                            o = 0,
                            r = t.length,
                            n = !1;
                        do {
                            -1 === s(this, e = t[o] + "") && (this.push(e), n = !0)
                        } while (++o < r);
                        n && this._updateClassName()
                    }, c.remove = function() {
                        var e, t, o = arguments,
                            r = 0,
                            n = o.length,
                            i = !1;
                        do {
                            for (t = s(this, e = o[r] + ""); - 1 !== t;) this.splice(t, 1), i = !0, t = s(this, e)
                        } while (++r < n);
                        i && this._updateClassName()
                    }, c.toggle = function(e, t) {
                        var o = this.contains(e += ""),
                            r = o ? !0 !== t && "remove" : !1 !== t && "add";
                        return r && this[r](e), !0 === t || !1 === t ? t : !o
                    }, c.toString = function() {
                        return this.join(" ")
                    }, r.defineProperty) {
                    var d = {
                        get: u,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        r.defineProperty(o, t, d)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1, r.defineProperty(o, t, d))
                    }
                } else r.prototype.__defineGetter__ && o.__defineGetter__(t, u)
            }
        }(window.self), function() {
            "use strict";
            var e = document.createElement("_");
            if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                var t = function(e) {
                    var t = DOMTokenList.prototype[e];
                    DOMTokenList.prototype[e] = function(e) {
                        var o, r = arguments.length;
                        for (o = 0; r > o; o++) t.call(this, e = arguments[o])
                    }
                };
                t("add"), t("remove")
            }
            if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                var o = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e)
                }
            }
            e = null
        }())
    }, function(e, t, o) {
        "use strict";
        e.exports = o(78).polyfill()
    }, function(e, t, o) {
        (function(t, o) {
            e.exports = function() {
                "use strict";

                function e(e) {
                    return "function" == typeof e
                }
                var r = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    n = 0,
                    i = void 0,
                    a = void 0,
                    s = function(e, t) {
                        h[n] = e, h[n + 1] = t, 2 === (n += 2) && (a ? a(m) : _())
                    },
                    l = "undefined" != typeof window ? window : void 0,
                    c = l || {},
                    u = c.MutationObserver || c.WebKitMutationObserver,
                    d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function f() {
                    var e = setTimeout;
                    return function() {
                        return e(m, 1)
                    }
                }
                var h = new Array(1e3);

                function m() {
                    for (var e = 0; n > e; e += 2)(0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
                    n = 0
                }
                var v, g, y, b, _ = void 0;

                function w(e, t) {
                    var o = this,
                        r = new this.constructor(j);
                    void 0 === r[C] && L(r);
                    var n = o._state;
                    if (n) {
                        var i = arguments[n - 1];
                        s((function() {
                            return A(n, r, i, o._result)
                        }))
                    } else D(o, r, e, t);
                    return r
                }

                function S(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(j);
                    return x(t, e), t
                }
                d ? _ = function() {
                    return t.nextTick(m)
                } : u ? (g = 0, y = new u(m), b = document.createTextNode(""), y.observe(b, {
                    characterData: !0
                }), _ = function() {
                    b.data = g = ++g % 2
                }) : p ? ((v = new MessageChannel).port1.onmessage = m, _ = function() {
                    return v.port2.postMessage(0)
                }) : _ = void 0 === l ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                            i(m)
                        } : f()
                    } catch (e) {
                        return f()
                    }
                }() : f();
                var C = Math.random().toString(36).substring(2);

                function j() {}
                var k = void 0;

                function E(t, o, r) {
                    o.constructor === t.constructor && r === w && o.constructor.resolve === S ? function(e, t) {
                        1 === t._state ? T(e, t._result) : 2 === t._state ? P(e, t._result) : D(t, void 0, (function(t) {
                            return x(e, t)
                        }), (function(t) {
                            return P(e, t)
                        }))
                    }(t, o) : void 0 === r ? T(t, o) : e(r) ? function(e, t, o) {
                        s((function(e) {
                            var r = !1,
                                n = function(o, n, i, a) {
                                    try {
                                        o.call(n, (function(o) {
                                            r || (r = !0, t !== o ? x(e, o) : T(e, o))
                                        }), (function(t) {
                                            r || (r = !0, P(e, t))
                                        }))
                                    } catch (e) {
                                        return e
                                    }
                                }(o, t);
                            !r && n && (r = !0, P(e, n))
                        }), e)
                    }(t, o, r) : T(t, o)
                }

                function x(e, t) {
                    if (e === t) P(e, new TypeError("You cannot resolve a promise with itself"));
                    else if (n = typeof(r = t), null === r || "object" !== n && "function" !== n) T(e, t);
                    else {
                        var o = void 0;
                        try {
                            o = t.then
                        } catch (t) {
                            return void P(e, t)
                        }
                        E(e, t, o)
                    }
                    var r, n
                }

                function I(e) {
                    e._onerror && e._onerror(e._result), z(e)
                }

                function T(e, t) {
                    e._state === k && (e._result = t, e._state = 1, 0 !== e._subscribers.length && s(z, e))
                }

                function P(e, t) {
                    e._state === k && (e._state = 2, e._result = t, s(I, e))
                }

                function D(e, t, o, r) {
                    var n = e._subscribers,
                        i = n.length;
                    e._onerror = null, n[i] = t, n[i + 1] = o, n[i + 2] = r, 0 === i && e._state && s(z, e)
                }

                function z(e) {
                    var t = e._subscribers,
                        o = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, n = void 0, i = e._result, a = 0; t.length > a; a += 3) n = t[a + o], (r = t[a]) ? A(o, r, n, i) : n(i);
                        e._subscribers.length = 0
                    }
                }

                function A(t, o, r, n) {
                    var i = e(r),
                        a = void 0,
                        s = void 0,
                        l = !0;
                    if (i) {
                        try {
                            a = r(n)
                        } catch (e) {
                            l = !1, s = e
                        }
                        if (o === a) return void P(o, new TypeError("A promises callback cannot return that same promise."))
                    } else a = n;
                    o._state !== k || (i && l ? x(o, a) : !1 === l ? P(o, s) : 1 === t ? T(o, a) : 2 === t && P(o, a))
                }
                var M = 0;

                function L(e) {
                    e[C] = M++, e._state = void 0, e._result = void 0, e._subscribers = []
                }
                var O = function() {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(j), this.promise[C] || L(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && T(this.promise, this._result))) : P(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return e.prototype._enumerate = function(e) {
                            for (var t = 0; this._state === k && e.length > t; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function(e, t) {
                            var o = this._instanceConstructor,
                                r = o.resolve;
                            if (r === S) {
                                var n = void 0,
                                    i = void 0,
                                    a = !1;
                                try {
                                    n = e.then
                                } catch (e) {
                                    a = !0, i = e
                                }
                                if (n === w && e._state !== k) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof n) this._remaining--, this._result[t] = e;
                                else if (o === R) {
                                    var s = new o(j);
                                    a ? P(s, i) : E(s, e, n), this._willSettleAt(s, t)
                                } else this._willSettleAt(new o((function(t) {
                                    return t(e)
                                })), t)
                            } else this._willSettleAt(r(e), t)
                        }, e.prototype._settledAt = function(e, t, o) {
                            var r = this.promise;
                            r._state === k && (this._remaining--, 2 === e ? P(r, o) : this._result[t] = o), 0 === this._remaining && T(r, this._result)
                        }, e.prototype._willSettleAt = function(e, t) {
                            var o = this;
                            D(e, void 0, (function(e) {
                                return o._settledAt(1, t, e)
                            }), (function(e) {
                                return o._settledAt(2, t, e)
                            }))
                        }, e
                    }(),
                    R = function() {
                        function t(e) {
                            this[C] = M++, this._result = this._state = void 0, this._subscribers = [], j !== e && ("function" != typeof e && function() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof t ? function(e, t) {
                                try {
                                    t((function(t) {
                                        x(e, t)
                                    }), (function(t) {
                                        P(e, t)
                                    }))
                                } catch (t) {
                                    P(e, t)
                                }
                            }(this, e) : function() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return t.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, t.prototype.finally = function(t) {
                            var o = this,
                                r = o.constructor;
                            return e(t) ? o.then((function(e) {
                                return r.resolve(t()).then((function() {
                                    return e
                                }))
                            }), (function(e) {
                                return r.resolve(t()).then((function() {
                                    throw e
                                }))
                            })) : o.then(t, t)
                        }, t
                    }();
                return R.prototype.then = w, R.all = function(e) {
                    return new O(this, e).promise
                }, R.race = function(e) {
                    var t = this;
                    return r(e) ? new t((function(o, r) {
                        for (var n = e.length, i = 0; n > i; i++) t.resolve(e[i]).then(o, r)
                    })) : new t((function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    }))
                }, R.resolve = S, R.reject = function(e) {
                    var t = new this(j);
                    return P(t, e), t
                }, R._setScheduler = function(e) {
                    a = e
                }, R._setAsap = function(e) {
                    s = e
                }, R._asap = s, R.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== o) e = o;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return
                    }
                    e.Promise = R
                }, R.Promise = R, R
            }()
        }).call(this, o(79), o(80))
    }, function(e, t) {
        var o, r, n = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (o === setTimeout) return setTimeout(e, 0);
            if ((o === i || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
            try {
                return o(e, 0)
            } catch (t) {
                try {
                    return o.call(null, e, 0)
                } catch (t) {
                    return o.call(this, e, 0)
                }
            }
        }! function() {
            try {
                o = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                o = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var l, c = [],
            u = !1,
            d = -1;

        function p() {
            u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
        }

        function f() {
            if (!u) {
                var e = s(p);
                u = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++d < t;) l && l[d].run();
                    d = -1, t = c.length
                }
                l = null, u = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var o = 1; arguments.length > o; o++) t[o - 1] = arguments[o];
            c.push(new h(e, t)), 1 !== c.length || u || s(f)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
            return []
        }, n.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function() {
            return "/"
        }, n.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function() {
            return 0
        }
    }, function(e, t) {
        var o;
        o = function() {
            return this
        }();
        try {
            o = o || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (o = window)
        }
        e.exports = o
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Jodit = void 0;
        var r = o(0),
            n = o(4),
            i = o(3),
            a = o(10),
            s = o(1),
            l = o(38),
            c = o(27),
            u = o(11),
            d = o(14),
            p = o(8),
            Jodit = function(e) {
                function Jodit(t, o) {
                    var r = e.call(this, o, !0) || this;
                    r.isJodit = !0, r.__defaultStyleDisplayKey = "data-jodit-default-style-display", r.__defaultClassesKey = "data-jodit-default-classes", r.commands = {}, r.__selectionLocked = null, r.__wasReadOnly = !1, r.createInside = new a.Create((function() {
                        return r.ed
                    }), r.o.createAttributes), r.editorIsActive = !1, r.__mode = i.MODE_WYSIWYG, r.__callChangeCount = 0, r.elementToPlace = new Map;
                    try {
                        s.resolveElement(t, r.o.shadowRoot || r.od)
                    } catch (e) {
                        throw r.destruct(), e
                    }
                    r.setStatus(a.STATUSES.beforeInit), r.id = s.attr(s.resolveElement(t, r.o.shadowRoot || r.od), "id") || (new Date).getTime().toString(), u.instances[r.id] = r, r.storage = l.Storage.makeStorage(!0, r.id), r.attachEvents(r.o), r.e.on(r.ow, "resize", (function() {
                        r.e && r.e.fire("resize")
                    })), r.e.on("prepareWYSIWYGEditor", r.prepareWYSIWYGEditor), r.selection = new a.Select(r);
                    var n = r.beforeInitHook();
                    return s.callPromise(n, (function() {
                        r.e.fire("beforeInit", r);
                        var e = u.pluginSystem.init(r);
                        s.callPromise(e, (function() {
                            r.e.on("changePlace", (function() {
                                r.setReadOnly(r.o.readonly), r.setDisabled(r.o.disabled)
                            })), r.places.length = 0;
                            var e = r.addPlace(t, o);
                            u.instances[r.id] = r, s.callPromise(e, (function() {
                                r.e && r.e.fire("afterInit", r), r.afterInitHook(), r.setStatus(a.STATUSES.ready), r.e.fire("afterConstructor", r)
                            }))
                        }))
                    })), r
                }
                return r.__extends(Jodit, e), Object.defineProperty(Jodit.prototype, "text", {
                    get: function() {
                        if (this.editor) return this.editor.innerText || "";
                        var e = this.createInside.div();
                        return e.innerHTML = this.getElementValue(), e.innerText || ""
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "value", {
                    get: function() {
                        return this.getEditorValue()
                    },
                    set: function(e) {
                        this.setEditorValue(e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "defaultTimeout", {
                    get: function() {
                        return this.options && this.o.observer ? this.o.observer.timeout : n.Config.defaultOptions.observer.timeout
                    },
                    enumerable: !1,
                    configurable: !0
                }), Jodit.Array = function(e) {
                    return new s.JoditArray(e)
                }, Jodit.Object = function(e) {
                    return new s.JoditObject(e)
                }, Jodit.make = function(e, t) {
                    return new Jodit(e, t)
                }, Jodit.prototype.setPlaceField = function(e, t) {
                    this.currentPlace || (this.currentPlace = {}, this.places = [this.currentPlace]), this.currentPlace[e] = t
                }, Object.defineProperty(Jodit.prototype, "element", {
                    get: function() {
                        return this.currentPlace.element
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "editor", {
                    get: function() {
                        return this.currentPlace.editor
                    },
                    set: function(e) {
                        this.setPlaceField("editor", e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "container", {
                    get: function() {
                        return this.currentPlace.container
                    },
                    set: function(e) {
                        this.setPlaceField("container", e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "workplace", {
                    get: function() {
                        return this.currentPlace.workplace
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "statusbar", {
                    get: function() {
                        return this.currentPlace.statusbar
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "iframe", {
                    get: function() {
                        return this.currentPlace.iframe
                    },
                    set: function(e) {
                        this.setPlaceField("iframe", e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "observer", {
                    get: function() {
                        return this.currentPlace.observer
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "editorWindow", {
                    get: function() {
                        return this.currentPlace.editorWindow
                    },
                    set: function(e) {
                        this.setPlaceField("editorWindow", e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "ew", {
                    get: function() {
                        return this.editorWindow
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "editorDocument", {
                    get: function() {
                        return this.currentPlace.editorWindow.document
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "ed", {
                    get: function() {
                        return this.editorDocument
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "options", {
                    get: function() {
                        return this.currentPlace.options
                    },
                    set: function(e) {
                        this.setPlaceField("options", e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "s", {
                    get: function() {
                        return this.selection
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "uploader", {
                    get: function() {
                        return this.getInstance("Uploader", this.o.uploader)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "filebrowser", {
                    get: function() {
                        var e = this,
                            t = r.__assign({
                                defaultTimeout: e.defaultTimeout,
                                uploader: e.o.uploader,
                                language: e.o.language,
                                theme: e.o.theme,
                                defaultCallback: function(t) {
                                    t.files && t.files.length && t.files.forEach((function(o, r) {
                                        var n = t.baseurl + o;
                                        t.isImages && t.isImages[r] ? e.s.insertImage(n, null, e.o.imageDefaultWidth) : e.s.insertNode(e.createInside.fromHTML('<a href="' + n + '" title="' + n + '">' + n + "</a>"))
                                    }))
                                }
                            }, this.o.filebrowser);
                        return e.getInstance("FileBrowser", t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Jodit.prototype, "mode", {
                    get: function() {
                        return this.__mode
                    },
                    set: function(e) {
                        this.setMode(e)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Jodit.prototype.getNativeEditorValue = function() {
                    var e = this.e.fire("beforeGetNativeEditorValue");
                    return s.isString(e) ? e : this.editor ? this.editor.innerHTML : this.getElementValue()
                }, Jodit.prototype.setNativeEditorValue = function(e) {
                    this.e.fire("beforeSetNativeEditorValue", e) || this.editor && (this.editor.innerHTML = e)
                }, Jodit.prototype.getEditorValue = function(e) {
                    var t;
                    if (void 0 === e && (e = !0), void 0 !== (t = this.e.fire("beforeGetValueFromEditor"))) return t;
                    t = this.getNativeEditorValue().replace(i.INVISIBLE_SPACE_REG_EXP(), ""), e && (t = t.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, "")), "<br>" === t && (t = "");
                    var o = {
                        value: t
                    };
                    return this.e.fire("afterGetValueFromEditor", o), o.value
                }, Jodit.prototype.setEditorValue = function(e) {
                    var t = this.e.fire("beforeSetValueToEditor", e);
                    if (!1 !== t)
                        if (s.isString(t) && (e = t), this.editor) {
                            if (!s.isString(e) && !s.isVoid(e)) throw s.error("value must be string");
                            void 0 !== e && this.getNativeEditorValue() !== e && this.setNativeEditorValue(e), this.e.fire("postProcessSetEditorValue");
                            var o = this.getElementValue(),
                                r = this.getEditorValue();
                            if (o !== r && i.SAFE_COUNT_CHANGE_CALL > this.__callChangeCount) {
                                this.setElementValue(r), this.__callChangeCount += 1;
                                try {
                                    this.observer.upTick(), this.e.fire("change", r, o), this.e.fire(this.observer, "change", r, o)
                                } finally {
                                    this.__callChangeCount = 0
                                }
                            }
                        } else void 0 !== e && this.setElementValue(e)
                }, Jodit.prototype.getElementValue = function() {
                    return void 0 !== this.element.value ? this.element.value : this.element.innerHTML
                }, Jodit.prototype.setElementValue = function(e) {
                    if (!s.isString(e) && void 0 !== e) throw s.error("value must be string");
                    void 0 !== e ? this.element !== this.container && (void 0 !== this.element.value ? this.element.value = e : this.element.innerHTML = e) : e = this.getElementValue(), e !== this.getEditorValue() && this.setEditorValue(e)
                }, Jodit.prototype.registerCommand = function(e, t) {
                    var o = e.toLowerCase();
                    if (void 0 === this.commands[o] && (this.commands[o] = []), this.commands[o].push(t), !s.isFunction(t)) {
                        var r = this.o.commandToHotkeys[o] || this.o.commandToHotkeys[e] || t.hotkeys;
                        r && this.registerHotkeyToCommand(r, o)
                    }
                    return this
                }, Jodit.prototype.registerHotkeyToCommand = function(e, t) {
                    var o = this,
                        r = s.asArray(e).map(s.normalizeKeyAliases).map((function(e) {
                            return e + ".hotkey"
                        })).join(" ");
                    this.e.off(r).on(r, (function() {
                        return o.execCommand(t)
                    }))
                }, Jodit.prototype.execCommand = function(e, t, o) {
                    if (void 0 === t && (t = !1), void 0 === o && (o = null), !this.o.readonly || "selectall" === e) {
                        var r;
                        if (e = e.toLowerCase(), !1 !== (r = this.e.fire("beforeCommand", e, t, o)) && (r = this.execCustomCommands(e, t, o)), !1 !== r)
                            if (this.s.focus(), "selectall" === e) this.s.select(this.editor, !0);
                            else try {
                                r = this.ed.execCommand(e, t, o)
                            } catch (e) {}
                        return this.e.fire("afterCommand", e, t, o), this.setEditorValue(), r
                    }
                }, Jodit.prototype.execCustomCommands = function(e, t, o) {
                    var r, n;
                    if (void 0 === t && (t = !1), void 0 === o && (o = null), e = e.toLowerCase(), void 0 !== this.commands[e]) {
                        for (var i, a = 0; this.commands[e].length > a; a += 1) void 0 !== (n = (s.isFunction(r = this.commands[e][a]) ? r : r.exec).call(this, e, t, o)) && (i = n);
                        return i
                    }
                }, Jodit.prototype.lock = function(t) {
                    return void 0 === t && (t = "any"), !!e.prototype.lock.call(this, t) && (this.__selectionLocked = this.s.save(), this.s.clear(), this.editor.classList.add("jodit_disabled"), this.e.fire("lock", !0), !0)
                }, Jodit.prototype.unlock = function() {
                    return !!e.prototype.unlock.call(this) && (this.editor.classList.remove("jodit_disabled"), this.__selectionLocked && this.s.restore(this.__selectionLocked), this.e.fire("lock", !1), !0)
                }, Jodit.prototype.getMode = function() {
                    return this.mode
                }, Jodit.prototype.isEditorMode = function() {
                    return this.getRealMode() === i.MODE_WYSIWYG
                }, Jodit.prototype.getRealMode = function() {
                    if (this.getMode() !== i.MODE_SPLIT) return this.getMode();
                    var e = this.od.activeElement;
                    return e && (a.Dom.isOrContains(this.editor, e) || a.Dom.isOrContains(this.toolbar.container, e)) ? i.MODE_WYSIWYG : i.MODE_SOURCE
                }, Jodit.prototype.setMode = function(e) {
                    var t = this,
                        o = this.getMode(),
                        r = {
                            mode: parseInt(e.toString(), 10)
                        },
                        n = ["jodit-wysiwyg_mode", "jodit-source__mode", "jodit_split_mode"];
                    !1 !== this.e.fire("beforeSetMode", r) && (this.__mode = [i.MODE_SOURCE, i.MODE_WYSIWYG, i.MODE_SPLIT].includes(r.mode) ? r.mode : i.MODE_WYSIWYG, this.o.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), n.forEach((function(e) {
                        t.container.classList.remove(e)
                    })), this.container.classList.add(n[this.mode - 1]), o !== this.getMode() && this.e.fire("afterSetMode"))
                }, Jodit.prototype.toggleMode = function() {
                    var e = this.getMode();
                    [i.MODE_SOURCE, i.MODE_WYSIWYG, this.o.useSplitMode ? i.MODE_SPLIT : 9].includes(e + 1) ? e += 1 : e = i.MODE_WYSIWYG, this.setMode(e)
                }, Jodit.prototype.setDisabled = function(e) {
                    this.o.disabled = e;
                    var t = this.__wasReadOnly;
                    this.setReadOnly(e || t), this.__wasReadOnly = t, this.editor && (this.editor.setAttribute("aria-disabled", e.toString()), this.container.classList.toggle("jodit_disabled", e), this.e.fire("disabled", e))
                }, Jodit.prototype.getDisabled = function() {
                    return this.o.disabled
                }, Jodit.prototype.setReadOnly = function(e) {
                    this.__wasReadOnly !== e && (this.__wasReadOnly = e, this.o.readonly = e, e ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.e && this.e.fire("readonly", e))
                }, Jodit.prototype.getReadOnly = function() {
                    return this.o.readonly
                }, Jodit.prototype.beforeInitHook = function() {}, Jodit.prototype.afterInitHook = function() {}, Jodit.prototype.initOptions = function(e) {
                    this.options = n.configFactory(e)
                }, Jodit.prototype.initOwners = function() {
                    this.editorWindow = this.o.ownerWindow, this.ownerWindow = this.o.ownerWindow
                }, Jodit.prototype.addPlace = function(e, t) {
                    var o = this,
                        r = s.resolveElement(e, this.o.shadowRoot || this.od);
                    this.attachEvents(t), r.attributes && s.toArray(r.attributes).forEach((function(e) {
                        var r = e.name,
                            n = e.value;
                        void 0 === Jodit.defaultOptions[r] || t && void 0 !== t[r] || (-1 !== ["readonly", "disabled"].indexOf(r) && (n = "" === n || "true" === n), /^[0-9]+(\.)?([0-9]+)?$/.test(n.toString()) && (n = Number(n)), o.options[r] = n)
                    }));
                    var i = this.c.div("jodit-container");
                    i.classList.add("jodit"), i.classList.add("jodit-container"), i.classList.add("jodit_theme_" + (this.o.theme || "default")), i.setAttribute("contenteditable", "false");
                    var l = null;
                    this.o.inline && (-1 === ["TEXTAREA", "INPUT"].indexOf(r.nodeName) && (i = r, r.setAttribute(this.__defaultClassesKey, r.className.toString()), l = i.innerHTML, i.innerHTML = ""), i.classList.add("jodit_inline"), i.classList.add("jodit-container")), r !== i && (r.style.display && r.setAttribute(this.__defaultStyleDisplayKey, r.style.display), r.style.display = "none");
                    var c = this.c.div("jodit-workplace", {
                        contenteditable: !1
                    });
                    i.appendChild(c);
                    var u = new a.StatusBar(this, i);
                    r.parentNode && r !== i && r.parentNode.insertBefore(i, r);
                    var d = this.c.div("jodit-wysiwyg", {
                        contenteditable: !0,
                        "aria-disabled": !1,
                        tabindex: this.o.tabIndex
                    });
                    c.appendChild(d);
                    var p = {
                        editor: d,
                        element: r,
                        container: i,
                        workplace: c,
                        statusbar: u,
                        options: this.isReady ? n.configFactory(t) : this.options,
                        observer: new a.Observer(this),
                        editorWindow: this.ow
                    };
                    this.elementToPlace.set(d, p), this.setCurrentPlace(p), this.places.push(p), this.setNativeEditorValue(this.getElementValue());
                    var f = this.initEditor(l),
                        h = this.options;
                    return s.callPromise(f, (function() {
                        h.enableDragAndDropFileToEditor && h.uploader && (h.uploader.url || h.uploader.insertImageAsBase64URI) && o.uploader.bind(o.editor), o.elementToPlace.get(o.editor) || o.elementToPlace.set(o.editor, p), o.e.fire("afterAddPlace", p)
                    }))
                }, Jodit.prototype.setCurrentPlace = function(e) {
                    this.currentPlace !== e && (this.isEditorMode() || this.setMode(i.MODE_WYSIWYG), this.currentPlace = e, this.buildToolbar(), this.isReady && this.e.fire("changePlace", e))
                }, Jodit.prototype.initEditor = function(e) {
                    var t = this,
                        o = this.createEditor();
                    return s.callPromise(o, (function() {
                        if (!t.isInDestruct) {
                            t.element !== t.container ? t.setElementValue() : null !== e && t.setEditorValue(e);
                            var o = t.o.defaultMode;
                            if (t.o.saveModeInStorage) {
                                var r = t.storage.get("jodit_default_mode");
                                "string" == typeof r && (o = parseInt(r, 10))
                            }
                            t.setMode(o), t.o.readonly && (t.__wasReadOnly = !1, t.setReadOnly(!0)), t.o.disabled && t.setDisabled(!0);
                            try {
                                t.ed.execCommand("defaultParagraphSeparator", !1, t.o.enter.toLowerCase())
                            } catch (e) {}
                            try {
                                t.ed.execCommand("enableObjectResizing", !1, "false")
                            } catch (e) {}
                            try {
                                t.ed.execCommand("enableInlineTableEditing", !1, "false")
                            } catch (e) {}
                        }
                    }))
                }, Jodit.prototype.createEditor = function() {
                    var e = this,
                        t = this.editor,
                        o = this.e.fire("createEditor", this);
                    return s.callPromise(o, (function() {
                        if (!e.isInDestruct) {
                            if ((!1 === o || s.isPromise(o)) && a.Dom.safeRemove(t), e.o.editorCssClass && e.editor.classList.add(e.o.editorCssClass), e.o.style && s.css(e.editor, e.o.style), e.e.on("synchro", (function() {
                                    e.setEditorValue()
                                })).on("focus", (function() {
                                    e.editorIsActive = !0
                                })).on("blur", (function() {
                                    return e.editorIsActive = !1
                                })), e.prepareWYSIWYGEditor(), e.o.direction) {
                                var r = "rtl" === e.o.direction.toLowerCase() ? "rtl" : "ltr";
                                e.container.style.direction = r, e.container.setAttribute("dir", r), e.toolbar.setDirection(r)
                            }
                            e.o.triggerChangeEvent && e.e.on("change", e.async.debounce((function() {
                                e.e && e.e.fire(e.element, "change")
                            }), e.defaultTimeout))
                        }
                    }))
                }, Jodit.prototype.attachEvents = function(e) {
                    var t = this,
                        o = null == e ? void 0 : e.events;
                    o && Object.keys(o).forEach((function(e) {
                        return t.e.on(e, o[e])
                    }))
                }, Jodit.prototype.prepareWYSIWYGEditor = function() {
                    var e = this,
                        t = this.editor;
                    if (this.o.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.o.direction) {
                        var o = "rtl" === this.o.direction.toLowerCase() ? "rtl" : "ltr";
                        this.editor.style.direction = o, this.editor.setAttribute("dir", o)
                    }
                    this.e.on(t, "mousedown touchstart focus", (function() {
                        var o = e.elementToPlace.get(t);
                        o && e.setCurrentPlace(o)
                    })).on(t, "compositionend", (function() {
                        e.setEditorValue()
                    })).on(t, "selectionchange selectionstart keydown keyup keypress dblclick mousedown mouseup click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", (function(t) {
                        if (!e.o.readonly && !(t instanceof e.ew.KeyboardEvent && t.isComposing) && e.e && e.e.fire) {
                            if (!1 === e.e.fire(t.type, t)) return !1;
                            e.setEditorValue()
                        }
                    }))
                }, Jodit.prototype.destruct = function() {
                    var t = this;
                    if (!this.isInDestruct && (this.setStatus(a.STATUSES.beforeDestruct), this.elementToPlace.clear(), this.editor)) {
                        var o = this.getEditorValue();
                        this.storage.clear(), this.buffer.clear(), this.commands = {}, this.__selectionLocked = null, this.e.off(this.ow, "resize"), this.e.off(this.ow), this.e.off(this.od), this.e.off(this.od.body), this.places.forEach((function(e) {
                            var r = e.container,
                                n = e.workplace,
                                i = e.statusbar,
                                l = e.element,
                                c = e.iframe,
                                u = e.editor,
                                d = e.observer;
                            if (l !== r)
                                if (l.hasAttribute(t.__defaultStyleDisplayKey)) {
                                    var p = s.attr(l, t.__defaultStyleDisplayKey);
                                    p && (l.style.display = p, l.removeAttribute(t.__defaultStyleDisplayKey))
                                } else l.style.display = "";
                            else l.hasAttribute(t.__defaultClassesKey) && (l.className = s.attr(l, t.__defaultClassesKey) || "", l.removeAttribute(t.__defaultClassesKey));
                            l.hasAttribute("style") && !s.attr(l, "style") && l.removeAttribute("style"), !i.isInDestruct && i.destruct(), t.e.off(r), t.e.off(l), t.e.off(u), a.Dom.safeRemove(n), a.Dom.safeRemove(u), r !== l && a.Dom.safeRemove(r), a.Dom.safeRemove(c), r === l && (l.innerHTML = o), !d.isInDestruct && d.destruct()
                        })), this.places.length = 0, this.currentPlace = {}, delete u.instances[this.id], e.prototype.destruct.call(this)
                    }
                }, Jodit.plugins = u.pluginSystem, Jodit.modules = u.modules, Jodit.ns = u.modules, Jodit.decorators = {}, Jodit.instances = u.instances, Jodit.getContainer = u.getContainer, Jodit.lang = u.lang, Jodit.core = {
                    Plugin: a.Plugin
                }, r.__decorate([d.cache], Jodit.prototype, "uploader", null), r.__decorate([d.cache], Jodit.prototype, "filebrowser", null), r.__decorate([p.default], Jodit.prototype, "prepareWYSIWYGEditor", null), Jodit
            }(c.ViewWithToolbar);
        t.Jodit = Jodit
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.markDeprecated = t.cns = void 0;
        var r = o(0);
        t.cns = console, t.markDeprecated = function(e, o, n) {
            return void 0 === o && (o = [""]), void 0 === n && (n = null),
                function() {
                    for (var i = [], a = 0; arguments.length > a; a++) i[a] = arguments[a];
                    return t.cns.warn('Method "' + o[0] + '" deprecated.' + (o[1] ? ' Use "' + o[1] + '" instead' : "")), e.call.apply(e, r.__spreadArrays([n], i))
                }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.reset = t.callPromise = t.markOwner = t.attr = t.call = void 0;
        var r = o(5),
            n = o(51);

        function i(e, t, o) {
            if (!e || !r.isFunction(e.getAttribute)) return null;
            if (/^-/.test(t)) {
                var n = i(e, "data" + t);
                if (n) return n;
                t = t.substr(1)
            }
            if (void 0 !== o) {
                if (null !== o) return e.setAttribute(t, o.toString()), o.toString();
                e.hasAttribute(t) && e.removeAttribute(t)
            }
            return e.getAttribute(t)
        }
        t.call = function(e) {
            for (var t = [], o = 1; arguments.length > o; o++) t[o - 1] = arguments[o];
            return e.apply(void 0, t)
        }, t.attr = i, t.markOwner = function(e, t) {
            i(t, "data-editor_id", e.id), !t.component && Object.defineProperty(t, "jodit", {
                value: e
            })
        }, t.callPromise = function(e, t) {
            return r.isPromise(e) ? e.finally(t) : t()
        };
        var a = {};
        t.reset = function(e) {
            var t, o;
            if (!(e in a)) {
                var i = document.createElement("iframe");
                try {
                    if (i.src = "about:blank", document.body.appendChild(i), !i.contentWindow) return null;
                    var s = n.get(e, i.contentWindow),
                        l = n.get(e.split(".").slice(0, -1).join("."), i.contentWindow);
                    r.isFunction(s) && (a[e] = s.bind(l))
                } finally {
                    null === (t = i.parentNode) || void 0 === t || t.removeChild(i)
                }
            }
            return null !== (o = a[e]) && void 0 !== o ? o : null
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasBrowserColorPicker = void 0, t.hasBrowserColorPicker = function() {
            var e = !0;
            try {
                var t = document.createElement("input");
                t.type = "color", e = "color" === t.type && "number" != typeof t.selectionStart
            } catch (t) {
                e = !1
            }
            return e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isArray = void 0;
        var r = o(29);
        t.isArray = function(e) {
            return Array.isArray(e) || e instanceof r.JoditArray
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isFastEqual = t.isEqual = void 0;
        var r = o(13);
        t.isEqual = function(e, t) {
            return e === t || r.stringify(e) === r.stringify(t)
        }, t.isFastEqual = function(e, t) {
            return e === t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.camelCase = void 0, t.camelCase = function(e) {
            return e.replace(/([-_])(.)/g, (function(e, t, o) {
                return o.toUpperCase()
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stringify = void 0, t.stringify = function(e, t) {
            if (void 0 === t && (t = {}), "object" != typeof e) return e.toString ? e.toString() : e;
            var o = new Set(t.excludeKeys),
                r = new WeakMap;
            return JSON.stringify(e, (function(e, t) {
                if (!o.has(e)) {
                    if ("object" == typeof t && null !== t) {
                        if (r.get(t)) return "[refObject]";
                        r.set(t, !0)
                    }
                    return t
                }
            }), t.prettify)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.kebabCase = void 0, t.kebabCase = function(e) {
            return e.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase()
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.trimInv = t.trim = void 0;
        var r = o(3);
        t.trim = function(e) {
            return e.replace(r.SPACE_REG_EXP_END(), "").replace(r.SPACE_REG_EXP_START(), "")
        }, t.trimInv = function(e) {
            return e.replace(r.INVISIBLE_SPACE_REG_EXP_END(), "").replace(r.INVISIBLE_SPACE_REG_EXP_START(), "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ucfirst = void 0, t.ucfirst = function(e) {
            return e.length ? e[0].toUpperCase() + e.substr(1) : ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.i18n = t.sprintf = void 0;
        var r = o(4),
            n = o(43),
            i = o(1),
            a = o(11);
        t.sprintf = function(e, t) {
            if (!t || !t.length) return e;
            for (var o = /%([sd])/g, r = o.exec(e), n = e, i = 0; r && void 0 !== t[i];) n = n.replace(r[0], t[i].toString()), i += 1, r = o.exec(e);
            return n
        }, t.i18n = function(e, o, s) {
            if (!i.isString(e)) throw i.error("i18n: Need string in first argument");
            var l, c = Boolean(void 0 !== s && s.debugLanguage),
                u = function(e) {
                    return o && o.length ? t.sprintf(e, o) : e
                },
                d = n.defaultLanguage(r.Config.defaultOptions.language, r.Config.defaultOptions.language),
                p = n.defaultLanguage(null == s ? void 0 : s.language, d),
                f = function(t) {
                    if (t) {
                        if (i.isString(t[e])) return u(t[e]);
                        var o = e.toLowerCase();
                        if (i.isString(t[o])) return u(t[o]);
                        var r = i.ucfirst(e);
                        return i.isString(t[r]) ? u(t[r]) : void 0
                    }
                };
            l = void 0 !== a.lang[p] ? a.lang[p] : void 0 !== a.lang[d] ? a.lang[d] : a.lang.en;
            var h = null == s ? void 0 : s.i18n;
            if (h && h[p]) {
                var m = f(h[p]);
                if (m) return m
            }
            return f(l) || (a.lang.en && i.isString(a.lang.en[e]) && a.lang.en[e] ? u(a.lang.en[e]) : c ? "{" + e + "}" : u(e))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EventsNative = void 0;
        var r = o(0),
            n = o(45),
            i = o(1),
            a = function() {
                function e(e) {
                    var t = this;
                    this.__key = "__JoditEventsNativeNamespaces", this.doc = document, this.__stopped = [], this.prepareEvent = function(e) {
                        e.cancelBubble || (e.type.match(/^touch/) && e.changedTouches && e.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach((function(t) {
                            Object.defineProperty(e, t, {
                                value: e.changedTouches[0][t],
                                configurable: !0,
                                enumerable: !0
                            })
                        })), e.originalEvent || (e.originalEvent = e), "paste" === e.type && void 0 === e.clipboardData && t.doc.defaultView.clipboardData && Object.defineProperty(e, "clipboardData", {
                            get: function() {
                                return t.doc.defaultView.clipboardData
                            },
                            configurable: !0,
                            enumerable: !0
                        }))
                    }, this.currents = [], this.isDestructed = !1, e && (this.doc = e), this.__key += (new Date).getTime()
                }
                return e.prototype.eachEvent = function(e, t) {
                    var o = this;
                    e.split(/[\s,]+/).forEach((function(e) {
                        var r = e.split(".");
                        t.call(o, r[0], r[1] || n.defaultNameSpace)
                    }))
                }, e.prototype.getStore = function(e) {
                    if (!e) throw i.error("Need subject");
                    if (void 0 === e[this.__key]) {
                        var t = new n.EventHandlersStore;
                        Object.defineProperty(e, this.__key, {
                            enumerable: !1,
                            configurable: !0,
                            value: t
                        })
                    }
                    return e[this.__key]
                }, e.prototype.clearStore = function(e) {
                    void 0 !== e[this.__key] && delete e[this.__key]
                }, e.prototype.triggerNativeEvent = function(e, t) {
                    var o = this.doc.createEvent("HTMLEvents");
                    "string" == typeof t ? o.initEvent(t, !0, !0) : (o.initEvent(t.type, t.bubbles, t.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach((function(e) {
                        Object.defineProperty(o, e, {
                            value: t[e],
                            enumerable: !0
                        })
                    })), Object.defineProperty(o, "originalEvent", {
                        value: t,
                        enumerable: !0
                    })), e.dispatchEvent(o)
                }, e.prototype.removeStop = function(e) {
                    if (e) {
                        var t = this.__stopped.indexOf(e); - 1 !== t && this.__stopped.splice(t, 1)
                    }
                }, e.prototype.isStopped = function(e) {
                    return void 0 !== e && -1 !== this.__stopped.indexOf(e)
                }, Object.defineProperty(e.prototype, "current", {
                    get: function() {
                        return this.currents[this.currents.length - 1]
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.on = function(e, t, o, n) {
                    var a = this;
                    void 0 === n && (n = !1);
                    var s = i.isString(e) ? this : e,
                        l = i.isString(t) ? t : e,
                        c = o;
                    void 0 === c && i.isFunction(t) && (c = t);
                    var u = this.getStore(s);
                    if (!i.isString(l) || "" === l) throw i.error("Need events names");
                    if (!i.isFunction(c)) throw i.error("Need event handler");
                    if (i.isArray(s)) return s.forEach((function(e) {
                        a.on(e, l, c, n)
                    })), this;
                    var d = i.isFunction(s.addEventListener),
                        p = this,
                        f = function(e) {
                            for (var t = [], o = 1; arguments.length > o; o++) t[o - 1] = arguments[o];
                            return c && c.call.apply(c, r.__spreadArrays([this, e], t))
                        };
                    return d && (f = function(e) {
                        if (p.prepareEvent(e), c && !1 === c.call(this, e)) return e.preventDefault(), e.stopImmediatePropagation(), !1
                    }), this.eachEvent(l, (function(e, t) {
                        if ("" === e) throw i.error("Need event name");
                        if (!1 === u.indexOf(e, t, c) && (u.set(e, t, {
                                event: e,
                                originalCallback: c,
                                syntheticCallback: f
                            }, n), d)) {
                            var o = !!["touchstart", "touchend", "scroll", "mousewheel", "mousemove", "touchmove"].includes(e) && {
                                passive: !0
                            };
                            s.addEventListener(e, f, o)
                        }
                    })), this
                }, e.prototype.off = function(e, t, o) {
                    var r = this,
                        a = i.isString(e) ? this : e,
                        s = i.isString(t) ? t : e,
                        l = this.getStore(a),
                        c = o;
                    if (!i.isString(s) || !s) return l.namespaces().forEach((function(e) {
                        r.off(a, "." + e)
                    })), this.clearStore(a), this;
                    void 0 === c && i.isFunction(t) && (c = t);
                    var u = i.isFunction(a.removeEventListener),
                        d = function(e) {
                            u && a.removeEventListener(e.event, e.syntheticCallback, !1)
                        },
                        p = function(e, t) {
                            if ("" !== e) {
                                var o = l.get(e, t);
                                if (o && o.length)
                                    if (i.isFunction(c)) {
                                        var r = l.indexOf(e, t, c);
                                        !1 !== r && (d(o[r]), o.splice(r, 1))
                                    } else o.forEach(d), o.length = 0
                            } else l.events(t).forEach((function(e) {
                                "" !== e && p(e, t)
                            }))
                        };
                    return this.eachEvent(s, (function(e, t) {
                        t === n.defaultNameSpace ? l.namespaces().forEach((function(t) {
                            p(e, t)
                        })) : p(e, t)
                    })), this
                }, e.prototype.stopPropagation = function(e, t) {
                    var o = this,
                        r = i.isString(e) ? this : e,
                        a = i.isString(e) ? e : t;
                    if ("string" != typeof a) throw i.error("Need event names");
                    var s = this.getStore(r);
                    this.eachEvent(a, (function(e, t) {
                        var i = s.get(e, t);
                        i && o.__stopped.push(i), t === n.defaultNameSpace && s.namespaces(!0).forEach((function(t) {
                            return o.stopPropagation(r, e + "." + t)
                        }))
                    }))
                }, e.prototype.fire = function(e, t) {
                    for (var o, a, s = this, l = [], c = 2; arguments.length > c; c++) l[c - 2] = arguments[c];
                    var u = i.isString(e) ? this : e,
                        d = i.isString(e) ? e : t,
                        p = i.isString(e) ? r.__spreadArrays([t], l) : l,
                        f = i.isFunction(u.dispatchEvent);
                    if (!f && !i.isString(d)) throw i.error("Need events names");
                    var h = this.getStore(u);
                    return !i.isString(d) && f ? this.triggerNativeEvent(u, t) : this.eachEvent(d, (function(e, t) {
                        if (f) s.triggerNativeEvent(u, e);
                        else {
                            var i = h.get(e, t);
                            if (i) try {
                                r.__spreadArrays(i).every((function(t) {
                                    return !s.isStopped(i) && (s.currents.push(e), a = t.syntheticCallback.apply(u, p), s.currents.pop(), void 0 !== a && (o = a), !0)
                                }))
                            } finally {
                                s.removeStop(i)
                            }
                            t !== n.defaultNameSpace || f || h.namespaces().filter((function(e) {
                                return e !== t
                            })).forEach((function(t) {
                                var n = s.fire.apply(s, r.__spreadArrays([u, e + "." + t], p));
                                void 0 !== n && (o = n)
                            }))
                        }
                    })), o
                }, e.prototype.destruct = function() {
                    this.isDestructed && (this.isDestructed = !0, this.off(this), this.getStore(this).clear(), delete this[this.__key])
                }, e
            }();
        t.EventsNative = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObserveObject = void 0;
        var r = o(0),
            n = o(1),
            i = o(14),
            a = function() {
                function e(t, o, i) {
                    var a = this;
                    void 0 === o && (o = []), void 0 === i && (i = {}), this.__lockEvent = {}, this.__data = t, this.__prefix = o, this.__onEvents = i, Object.keys(t).forEach((function(o) {
                        var i = a.__prefix.concat(o).filter((function(e) {
                            return e.length
                        }));
                        Object.defineProperty(a, o, {
                            set: function(s) {
                                var l = t[o];
                                if (!n.isFastEqual(l, s)) {
                                    a.fire(["beforeChange", "beforeChange." + i.join(".")], o, s), n.isPlainObject(s) && (s = new e(s, i, a.__onEvents)), t[o] = s;
                                    var c = [];
                                    a.fire(r.__spreadArrays(["change"], i.reduce((function(e, t) {
                                        return c.push(t), e.push("change." + c.join(".")), e
                                    }), [])), i.join("."), l, s.valueOf ? s.valueOf() : s)
                                }
                            },
                            get: function() {
                                return t[o]
                            },
                            enumerable: !0,
                            configurable: !0
                        }), n.isPlainObject(t[o]) && (t[o] = new e(t[o], i, a.__onEvents))
                    }))
                }
                return e.prototype.valueOf = function() {
                    return this.__data
                }, e.prototype.toString = function() {
                    return JSON.stringify(this.valueOf())
                }, e.prototype.on = function(e, t) {
                    var o = this;
                    return n.isArray(e) ? (e.map((function(e) {
                        return o.on(e, t)
                    })), this) : (this.__onEvents[e] || (this.__onEvents[e] = []), this.__onEvents[e].push(t), this)
                }, e.prototype.fire = function(e) {
                    for (var t = this, o = [], i = 1; arguments.length > i; i++) o[i - 1] = arguments[i];
                    if (n.isArray(e)) e.map((function(e) {
                        return t.fire.apply(t, r.__spreadArrays([e], o))
                    }));
                    else try {
                        !this.__lockEvent[e] && this.__onEvents[e] && (this.__lockEvent[e] = !0, this.__onEvents[e].forEach((function(e) {
                            return e.call.apply(e, r.__spreadArrays([t], o))
                        })))
                    } finally {
                        this.__lockEvent[e] = !1
                    }
                }, e.create = function(t, o) {
                    return void 0 === o && (o = []), t instanceof e ? t : new e(t, o)
                }, r.__decorate([i.nonenumerable], e.prototype, "__data", void 0), r.__decorate([i.nonenumerable], e.prototype, "__prefix", void 0), r.__decorate([i.nonenumerable], e.prototype, "__onEvents", void 0), r.__decorate([i.nonenumerable], e.prototype, "__lockEvent", void 0), e
            }();
        t.ObserveObject = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ViewComponent = void 0;
        var r = o(0),
            n = function(e) {
                function t(t) {
                    var o = e.call(this) || this;
                    return o.setParentView(t), o
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "defaultTimeout", {
                    get: function() {
                        return this.j.defaultTimeout
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "j", {
                    get: function() {
                        return this.jodit
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.setParentView = function(e) {
                    return this.jodit = e, e.components.add(this), this
                }, t.prototype.destruct = function() {
                    return this.j.components.delete(this), e.prototype.destruct.call(this)
                }, t
            }(o(48).Component);
        t.ViewComponent = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.debounce = void 0;
        var r = o(1),
            n = o(9);
        t.debounce = function(e, t) {
            return void 0 === t && (t = !1),
                function(o, i) {
                    if (!r.isFunction(o[i])) throw r.error("Handler must be a Function");
                    o.hookStatus(n.STATUSES.ready, (function(o) {
                        var n = r.isViewObject(o) ? o : o.j,
                            a = r.isFunction(e) ? e(o) : e;
                        o[i] = n.async.debounce(o[i].bind(o), r.isNumber(a) ? a : n.defaultTimeout, t)
                    }))
                }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cache = void 0;
        var r = o(1);
        t.cache = function(e, t, o) {
            var n = o.get;
            if (!n) throw r.error("Getter property descriptor expected");
            o.get = function() {
                var e = n.call(this);
                return Object.defineProperty(this, t, {
                    configurable: o.configurable,
                    enumerable: o.enumerable,
                    writable: !1,
                    value: e
                }), e
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.wait = void 0;
        var r = o(1),
            n = o(9);
        t.wait = function(e) {
            return function(t, o) {
                if (!r.isFunction(t[o])) throw r.error("Handler must be a Function");
                t.hookStatus(n.STATUSES.ready, (function(t) {
                    var n = r.isViewObject(t) ? t.async : t.j.async,
                        i = t[o],
                        a = 0;
                    t[o] = function o() {
                        for (var r = [], s = 0; arguments.length > s; s++) r[s] = arguments[s];
                        n.clearTimeout(a), e(t) ? i.apply(t, r) : a = n.setTimeout((function() {
                            return o.apply(void 0, r)
                        }), 10)
                    }
                }))
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hook = void 0;
        var r = o(1);
        t.hook = function(e) {
            return function(t, o) {
                if (!r.isFunction(t[o])) throw r.error("Handler must be a Function");
                t.hookStatus(e, (function(e) {
                    t[o].call(e)
                }))
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nonenumerable = void 0, t.nonenumerable = function(e, t) {
            !1 !== (Object.getOwnPropertyDescriptor(e, t) || {}).enumerable && Object.defineProperty(e, t, {
                enumerable: !1,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !1,
                        writable: !0,
                        value: e
                    })
                }
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isBoolean = void 0, t.isBoolean = function(e) {
            return "boolean" == typeof e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isHTML = void 0;
        var r = o(19);
        t.isHTML = function(e) {
            return r.isString(e) && /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isHtmlFromWord = void 0, t.isHtmlFromWord = function(e) {
            return -1 !== e.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 !== e.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 !== e.search(/style="[^"]*mso-/) && -1 !== e.search(/<font/)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasContainer = t.isDestructable = t.isInitable = void 0;
        var r = o(31),
            n = o(2);
        t.isInitable = function(e) {
            return e && r.isFunction(e.init)
        }, t.isDestructable = function(e) {
            return e && r.isFunction(e.destruct)
        }, t.hasContainer = function(e) {
            return e && n.Dom.isElement(e.container)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isInt = void 0;
        var r = o(49),
            n = o(19);
        t.isInt = function(e) {
            return n.isString(e) && r.isNumeric(e) && (e = parseFloat(e)), "number" == typeof e && Number.isFinite(e) && !(e % 1)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isViewObject = t.isJoditObject = void 0;
        var r = o(31),
            n = o(11);
        t.isJoditObject = function(e) {
            return Boolean(e && e instanceof Object && r.isFunction(e.constructor) && ("undefined" != typeof Jodit && e instanceof Jodit || e.isJodit))
        }, t.isViewObject = function(e) {
            return Boolean(e && e instanceof Object && r.isFunction(e.constructor) && (e instanceof n.modules.View || e.isView))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isLicense = void 0;
        var r = o(19);
        t.isLicense = function(e) {
            return r.isString(e) && 23 === e.length && /^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isNumber = void 0, t.isNumber = function(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isPlainObject = void 0;
        var r = o(50),
            n = o(32);
        t.isPlainObject = function(e) {
            return !(!e || "object" != typeof e || e.nodeType || r.isWindow(e) || e.constructor && !n.hasOwn.call(e.constructor.prototype, "isPrototypeOf"))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isURL = void 0, t.isURL = function(e) {
            return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidName = void 0, t.isValidName = function(e) {
            return !!e.length && !/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isVoid = void 0, t.isVoid = function(e) {
            return null == e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isPromise = void 0, t.isPromise = function(e) {
            return e && "function" == typeof e.then
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getClassName = t.keepNames = void 0, t.keepNames = new Map, t.getClassName = function(e) {
            if (t.keepNames.has(e.constructor)) return t.keepNames.get(e.constructor);
            if (e.constructor.name) return e.constructor.name;
            var o = new RegExp(/^\s*function\s*(\S*)\s*\(/),
                r = e.constructor.toString().match(o);
            return r ? r[1] : ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LimitedStack = void 0;
        var r = function() {
            function e(e) {
                this.limit = e, this.stack = []
            }
            return e.prototype.push = function(e) {
                return this.stack.push(e), this.stack.length > this.limit && this.stack.shift(), this
            }, e.prototype.pop = function() {
                return this.stack.pop()
            }, e.prototype.find = function(e) {
                return this.stack.find(e)
            }, e
        }();
        t.LimitedStack = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.asArray = void 0;
        var r = o(5);
        t.asArray = function(e) {
            return r.isArray(e) ? e : [e]
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.splitArray = void 0;
        var r = o(5);
        t.splitArray = function(e) {
            return r.isString(e) ? e.split(/[,\s]+/) : e
        }
    }, function(e, t, o) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.toArray = void 0;
        var n = o(12);
        t.toArray = null !== (r = n.reset("Array.from")) && void 0 !== r ? r : Array.from
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(0).__exportStar(o(120), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clearTimeout = t.setTimeout = void 0;
        var r = o(0);
        t.setTimeout = function(e, t) {
            for (var o = [], n = 2; arguments.length > n; n++) o[n - 2] = arguments[n];
            return t ? window.setTimeout.apply(window, r.__spreadArrays([e, t], o)) : (e.call.apply(e, r.__spreadArrays([null], o)), 0)
        }, t.clearTimeout = function(e) {
            window.clearTimeout(e)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.colorToHex = void 0, t.colorToHex = function(e) {
            if ("rgba(0, 0, 0, 0)" === e || "" === e) return !1;
            if (!e) return "#000000";
            if ("#" === e.substr(0, 1)) return e;
            var t = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);
            if (!t) return "#000000";
            for (var o = parseInt(t[2], 10), r = parseInt(t[3], 10), n = (parseInt(t[4], 10) | r << 8 | o << 16).toString(16).toUpperCase(); 6 > n.length;) n = "0" + n;
            return t[1] + "#" + n
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(123), t), r.__exportStar(o(124), t), r.__exportStar(o(125), t), r.__exportStar(o(126), t), r.__exportStar(o(127), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.applyStyles = void 0;
        var r = o(2),
            n = o(34),
            i = o(13);

        function a(e) {
            return e.replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, "").replace(/mso-[a-z-]+:[\s]*[^";]+$/gi, "").replace(/border[a-z-]*:[\s]*[^;]+;/gi, "").replace(/([0-9.]+)(pt|cm)/gi, (function(e, t, o) {
                switch (o.toLowerCase()) {
                    case "pt":
                        return (1.328 * parseFloat(t)).toFixed(0) + "px";
                    case "cm":
                        return (.02645833 * parseFloat(t)).toFixed(0) + "px"
                }
                return e
            }))
        }
        t.applyStyles = function(e) {
            if (-1 === e.indexOf("<html ")) return e;
            e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, e.lastIndexOf("</html>") + "</html>".length);
            var t = document.createElement("iframe");
            t.style.display = "none", document.body.appendChild(t);
            var o = "",
                s = [];
            try {
                var l = t.contentDocument || (t.contentWindow ? t.contentWindow.document : null);
                if (l) {
                    l.open(), l.write(e), l.close(), l.styleSheets.length && (s = l.styleSheets[l.styleSheets.length - 1].cssRules);
                    for (var c = function(e) {
                            if ("" === s[e].selectorText) return "continue";
                            n.$$(s[e].selectorText, l.body).forEach((function(t) {
                                t.style.cssText = a(s[e].style.cssText + ";" + t.style.cssText)
                            }))
                        }, u = 0; s.length > u; u += 1) c(u);
                    r.Dom.each(l.body, (function(e) {
                        if (r.Dom.isElement(e)) {
                            var t = e,
                                o = t.style.cssText;
                            o && (t.style.cssText = a(o)), t.hasAttribute("lang") && t.removeAttribute("lang")
                        }
                    })), o = l.firstChild ? i.trim(l.body.innerHTML) : ""
                }
            } catch (e) {} finally {
                r.Dom.safeRemove(t)
            }
            return o && (e = o), i.trim(e.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, ""))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cleanFromWord = void 0;
        var r = o(2),
            n = o(13),
            i = o(23);
        t.cleanFromWord = function(e) {
            -1 !== e.indexOf("<html ") && (e = (e = e.substring(e.indexOf("<html "), e.length)).substring(0, e.lastIndexOf("</html>") + "</html>".length));
            var t = "";
            try {
                var o = document.createElement("div");
                o.innerHTML = e;
                var a = [];
                o.firstChild && r.Dom.all(o, (function(e) {
                    if (e) switch (e.nodeType) {
                        case Node.ELEMENT_NODE:
                            switch (e.nodeName) {
                                case "STYLE":
                                case "LINK":
                                case "META":
                                    a.push(e);
                                    break;
                                case "W:SDT":
                                case "W:SDTPR":
                                case "FONT":
                                    r.Dom.unwrap(e);
                                    break;
                                default:
                                    i.toArray(e.attributes).forEach((function(t) {
                                        -1 === ["src", "href", "rel", "content"].indexOf(t.name.toLowerCase()) && e.removeAttribute(t.name)
                                    }))
                            }
                            break;
                        case Node.TEXT_NODE:
                            break;
                        default:
                            a.push(e)
                    }
                })), a.forEach(r.Dom.safeRemove), t = o.innerHTML
            } catch (e) {}
            return t && (e = t), (e = e.split(/(\n)/).filter(n.trim).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.htmlspecialchars = void 0, t.htmlspecialchars = function(e) {
            var t = document.createElement("div");
            return t.textContent = e, t.innerHTML
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stripTags = void 0;
        var r = o(5),
            n = o(34),
            i = o(13),
            a = o(2);
        t.stripTags = function(e, t) {
            void 0 === t && (t = document);
            var o = t.createElement("div");
            return r.isString(e) ? o.innerHTML = e : o.appendChild(e), n.$$("DIV, P, BR, H1, H2, H3, H4, H5, H6, HR", o).forEach((function(e) {
                var o = e.parentNode;
                if (o) {
                    var r = e.nextSibling;
                    a.Dom.isText(r) && /^\s/.test(r.nodeValue || "") || r && o.insertBefore(t.createTextNode(" "), r)
                }
            })), i.trim(o.innerText) || ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nl2br = void 0, t.nl2br = function(e) {
            return e.replace(/([^>])([\n\r]+)/g, "$1<br/>$2")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeKeyAliases = void 0;
        var r = o(13),
            n = o(3);
        t.normalizeKeyAliases = function(e) {
            var t = {};
            return e.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map((function(e) {
                return r.trim(e.toLowerCase())
            })).map((function(e) {
                return n.KEY_ALIASES[e] || e
            })).sort().filter((function(e) {
                return !t[e] && "" !== e && (t[e] = !0)
            })).join("+")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeLicense = void 0, t.normalizeLicense = function(e, t) {
            void 0 === t && (t = 8);
            for (var o = []; e.length;) o.push(e.substr(0, t)), e = e.substr(t);
            return o[1] = o[1].replace(/./g, "*"), o[2] = o[2].replace(/./g, "*"), o.join("-")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeNode = void 0;
        var r = o(3),
            n = o(2);
        t.normalizeNode = function(e) {
            if (e) {
                if (n.Dom.isText(e) && null !== e.nodeValue && e.parentNode)
                    for (; n.Dom.isText(e.nextSibling);) null !== e.nextSibling.nodeValue && (e.nodeValue += e.nextSibling.nodeValue), e.nodeValue = e.nodeValue.replace(r.INVISIBLE_SPACE_REG_EXP(), ""), n.Dom.safeRemove(e.nextSibling);
                else t.normalizeNode(e.firstChild);
                t.normalizeNode(e.nextSibling)
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizePath = void 0;
        var r = o(13);
        t.normalizePath = function() {
            for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
            return e.filter((function(e) {
                return r.trim(e).length
            })).map((function(t, o) {
                return t = t.replace(/([^:])[\\/]+/g, "$1/"), o && (t = t.replace(/^\//, "")), o !== e.length - 1 && (t = t.replace(/\/$/, "")), t
            })).join("/")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeRelativePath = void 0, t.normalizeRelativePath = function(e) {
            return e.split("/").reduce((function(e, t) {
                switch (t) {
                    case "":
                    case ".":
                        break;
                    case "..":
                        e.pop();
                        break;
                    default:
                        e.push(t)
                }
                return e
            }), []).join("/") + (e.endsWith("/") ? "/" : "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeSize = void 0, t.normalizeSize = function(e) {
            return /^[0-9]+$/.test(e.toString()) ? e + "px" : e.toString()
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeUrl = void 0, t.normalizeUrl = function() {
            for (var e = [], t = 0; arguments.length > t; t++) e[t] = arguments[t];
            return e.filter((function(e) {
                return e.length
            })).map((function(e) {
                return e.replace(/\/$/, "")
            })).join("/").replace(/([^:])[\\/]+/g, "$1/")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeCssValue = void 0;
        var r = o(5),
            n = o(13),
            i = o(33);
        t.normalizeCssValue = function(e, t) {
            switch (n.kebabCase(e)) {
                case "font-weight":
                    switch (t.toString().toLowerCase()) {
                        case "700":
                        case "bold":
                            return 700;
                        case "400":
                        case "normal":
                            return 400;
                        case "900":
                        case "heavy":
                            return 900
                    }
                    return r.isNumeric(t) ? +t : t
            }
            return /color/i.test(e) && /^rgb/i.test(t.toString()) && i.colorToHex(t.toString()) || t
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeColor = void 0;
        var r = o(33),
            n = o(13);
        t.normalizeColor = function(e) {
            var t = ["#"],
                o = r.colorToHex(e);
            if (!o) return !1;
            if (3 === (o = (o = n.trim(o.toUpperCase())).substr(1)).length) {
                for (var i = 0; 3 > i; i += 1) t.push(o[i]), t.push(o[i]);
                return t.join("")
            }
            return o.length > 6 && (o = o.substr(0, 6)), "#" + o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(138), t), r.__exportStar(o(139), t), r.__exportStar(o(140), t), r.__exportStar(o(141), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getContentWidth = void 0, t.getContentWidth = function(e, t) {
            var o = function(e) {
                    return parseInt(e, 10)
                },
                r = t.getComputedStyle(e);
            return e.offsetWidth - o(r.getPropertyValue("padding-left") || "0") - o(r.getPropertyValue("padding-right") || "0")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.innerWidth = void 0, t.innerWidth = function(e, t) {
            var o = t.getComputedStyle(e);
            return e.clientWidth - (parseFloat(o.paddingLeft || "0") + parseFloat(o.paddingRight || "0"))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.offset = void 0, t.offset = function(e, o, r, n) {
            var i;
            void 0 === n && (n = !1);
            try {
                i = e.getBoundingClientRect()
            } catch (e) {
                i = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
            var a, s, l = r.body,
                c = r.documentElement || {
                    clientTop: 0,
                    clientLeft: 0,
                    scrollTop: 0,
                    scrollLeft: 0
                },
                u = r.defaultView || r.parentWindow,
                d = u.pageYOffset || c.scrollTop || l.scrollTop,
                p = u.pageXOffset || c.scrollLeft || l.scrollLeft,
                f = c.clientTop || l.clientTop || 0,
                h = c.clientLeft || l.clientLeft || 0,
                m = o.iframe;
            if (!n && o && o.options && o.o.iframe && m) {
                var v = t.offset(m, o, o.od, !0);
                a = i.top + v.top, s = i.left + v.left
            } else a = i.top + d - f, s = i.left + p - h;
            return {
                top: Math.round(a),
                left: Math.round(s),
                width: i.width,
                height: i.height
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.position = void 0;
        var r = o(5);
        t.position = function e(t, o, n) {
            void 0 === n && (n = !1);
            var i = t.getBoundingClientRect(),
                a = i.left,
                s = i.top;
            if (r.isJoditObject(o) && o.iframe && !n) {
                var l = e(o.iframe, o, !0);
                a += l.left, s += l.top
            }
            return {
                left: Math.round(a),
                top: Math.round(s),
                width: Math.round(t.offsetWidth),
                height: Math.round(t.offsetHeight)
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.loadNext = t.appendStyleAsync = t.appendScriptAsync = t.appendScript = void 0;
        var r = o(0),
            n = o(52),
            i = o(5),
            a = new Map,
            s = function(e) {
                return function(t, o) {
                    return r.__awaiter(void 0, void 0, Promise, (function() {
                        var n;
                        return r.__generator(this, (function(r) {
                            return a.has(o) ? [2, a.get(o)] : (n = e(t, o), a.set(o, n), [2, n])
                        }))
                    }))
                }
            };
        t.appendScript = function(e, t, o) {
            var r = e.c.element("script");
            return r.type = "text/javascript", i.isFunction(o) && !e.isInDestruct && e.e.on(r, "load", o), r.src || (r.src = n.completeUrl(t)), e.od.body.appendChild(r), {
                callback: o,
                element: r
            }
        }, t.appendScriptAsync = s((function(e, o) {
            return new Promise((function(r, n) {
                var i = t.appendScript(e, o, r).element;
                !e.isInDestruct && e.e.on(i, "error", n)
            }))
        })), t.appendStyleAsync = s((function(e, t) {
            return new Promise((function(o, r) {
                var i = e.c.element("link");
                i.rel = "stylesheet", i.media = "all", i.crossOrigin = "anonymous", !e.isInDestruct && e.e.on(i, "load", (function() {
                    return o(i)
                })).on(i, "error", r), i.href = n.completeUrl(t), e.o.shadowRoot ? e.o.shadowRoot.appendChild(i) : e.od.body.appendChild(i)
            }))
        })), t.loadNext = function(e, o, r) {
            return void 0 === r && (r = 0), i.isString(o[r]) ? t.appendScriptAsync(e, o[r]).then((function() {
                return t.loadNext(e, o, r + 1)
            })) : Promise.resolve()
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.browser = void 0, t.browser = function(e) {
            var t = navigator.userAgent.toLowerCase(),
                o = /(firefox)[\s/]([\w.]+)/.exec(t) || /(chrome)[\s/]([\w.]+)/.exec(t) || /(webkit)[\s/]([\w.]+)/.exec(t) || /(opera)(?:.*version)[\s/]([\w.]+)/.exec(t) || /(msie)[\s]([\w.]+)/.exec(t) || /(trident)\/([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") || [];
            return "version" === e ? o[2] : "webkit" === e ? "chrome" === o[1] || "webkit" === o[1] : "ff" === e ? "firefox" === o[1] : "msie" === e ? "trident" === o[1] || "msie" === o[1] : o[1] === e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convertMediaUrlToVideoEmbed = void 0;
        var r = o(5),
            n = o(53);
        t.convertMediaUrlToVideoEmbed = function(e, t, o) {
            if (void 0 === t && (t = 400), void 0 === o && (o = 345), !r.isURL(e)) return e;
            var i = document.createElement("a"),
                a = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
            i.href = e, t || (t = 400), o || (o = 345);
            var s = i.protocol || "";
            switch (i.hostname) {
                case "www.vimeo.com":
                case "vimeo.com":
                    return a.test(e) ? e.replace(a, '<iframe width="' + t + '" height="' + o + '" src="' + s + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e;
                case "youtube.com":
                case "www.youtube.com":
                case "youtu.be":
                case "www.youtu.be":
                    var l = i.search ? n.parseQuery(i.search) : {
                        v: i.pathname.substr(1)
                    };
                    return l.v ? '<iframe width="' + t + '" height="' + o + '" src="' + s + "//www.youtube.com/embed/" + l.v + '" frameborder="0" allowfullscreen></iframe>' : e
            }
            return e
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clearCenterAlign = t.css = void 0;
        var r = o(5),
            n = o(35),
            i = o(13);
        t.css = function(e, o, a, s) {
            void 0 === s && (s = !1);
            var l = /^left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size/i;
            if (r.isPlainObject(o) || void 0 !== a) {
                var c = function(e, o, i) {
                    !r.isVoid(i) && l.test(o) && r.isNumeric(i.toString()) && (i = parseInt(i.toString(), 10) + "px"), r.isVoid(i) || t.css(e, o, void 0, !0) === n.normalizeCssValue(o, i) || (e.style[o] = i)
                };
                if (r.isPlainObject(o))
                    for (var u = Object.keys(o), d = 0; u.length > d; d += 1) c(e, i.camelCase(u[d]), o[u[d]]);
                else c(e, i.camelCase(o), a);
                return ""
            }
            var p = i.kebabCase(o),
                f = e.ownerDocument || document,
                h = !!f && (f.defaultView || f.parentWindow),
                m = e.style[o],
                v = "";
            return void 0 !== m && "" !== m ? v = m : h && !s && (v = h.getComputedStyle(e).getPropertyValue(p)), l.test(o) && /^[-+]?[0-9.]+px$/.test(v.toString()) && (v = parseInt(v.toString(), 10)), n.normalizeCssValue(o, v)
        }, t.clearCenterAlign = function(e) {
            "block" === t.css(e, "display") && t.css(e, "display", ""), "auto" === e.style.marginLeft && "auto" === e.style.marginRight && (e.style.marginLeft = "", e.style.marginRight = "")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ctrlKey = void 0, t.ctrlKey = function(e) {
            if ("undefined" != typeof navigator && -1 !== navigator.userAgent.indexOf("Mac OS X")) {
                if (e.metaKey && !e.altKey) return !0
            } else if (e.ctrlKey && !e.altKey) return !0;
            return !1
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.dataBind = void 0;
        var r = o(9),
            n = o(5),
            i = new WeakMap;
        t.dataBind = function(e, t, o) {
            var a = i.get(e);
            if (!a) {
                i.set(e, a = {});
                var s = null;
                e instanceof r.ViewComponent && (s = e.j.e), n.isViewObject(e) && (s = e.e), s && s.on("beforeDestruct", (function() {
                    i.delete(e)
                }))
            }
            return void 0 === o ? a[t] : (a[t] = o, o)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.each = void 0;
        var r = o(5);
        t.each = function(e, t) {
            var o, n, i;
            if (r.isArray(e)) {
                for (o = e.length, i = 0; o > i; i += 1)
                    if (!1 === t.call(e[i], i, e[i])) return !1
            } else
                for (n = Object.keys(e), i = 0; n.length > i; i += 1)
                    if (!1 === t.call(e[n[i]], n[i], e[n[i]])) return !1;
            return !0
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.humanSizeToBytes = void 0, t.humanSizeToBytes = function(e) {
            if (/^[0-9.]+$/.test(e.toString())) return parseFloat(e);
            var t = e.substr(-2, 2).toUpperCase(),
                o = ["KB", "MB", "GB", "TB"],
                r = parseFloat(e.substr(0, e.length - 2));
            return -1 !== o.indexOf(t) ? r * Math.pow(1024, o.indexOf(t) + 1) : parseInt(e, 10)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.buildQuery = void 0;
        var r = o(5);
        t.buildQuery = function(e, o) {
            var n = [],
                i = encodeURIComponent;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = o ? o + "[" + a + "]" : a,
                        l = e[a];
                    n.push(r.isPlainObject(l) ? t.buildQuery(l, s) : i(s) + "=" + i(l))
                } return n.join("&")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.scrollIntoView = t.inView = void 0, t.inView = function(e, t, o) {
            var r = e.getBoundingClientRect(),
                n = e,
                i = r.top,
                a = r.height;
            do {
                if (n && n.parentNode) {
                    if ((r = (n = n.parentNode).getBoundingClientRect()).bottom < i) return !1;
                    if (r.top >= i + a) return !1
                }
            } while (n && n !== t && n.parentNode);
            return (o.documentElement && o.documentElement.clientHeight || 0) >= i
        }, t.scrollIntoView = function(e, o, r) {
            t.inView(e, o, r) || (o.clientHeight !== o.scrollHeight && (o.scrollTop = e.offsetTop), t.inView(e, o, r) || e.scrollIntoView())
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.val = void 0, t.val = function(e, t, o) {
            var r = e.querySelector(t);
            return r ? (o && (r.value = o), r.value) : ""
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ColorPickerWidget = void 0, o(154);
        var r = o(1),
            n = o(7),
            i = o(2);
        t.ColorPickerWidget = function(e, t, o) {
            var a = r.normalizeColor(o),
                s = e.c.div("jodit-color-picker"),
                l = e.o.textIcons ? "<span>" + e.i18n("palette") + "</span>" : n.Icon.get("palette"),
                c = function(e) {
                    var t = [];
                    return r.isPlainObject(e) ? Object.keys(e).forEach((function(o) {
                        t.push('<div class="jodit-color-picker__group jodit-color-picker__group-' + o + '">'), t.push(c(e[o])), t.push("</div>")
                    })) : r.isArray(e) && e.forEach((function(e) {
                        t.push("<a " + (a === e ? ' class="jodit_active" ' : "") + ' title="' + e + '" style="background-color:' + e + '" data-color="' + e + '" href="javascript:void(0)"></a>')
                    })), t.join("")
                };
            s.appendChild(e.c.fromHTML('<div class="jodit-color-picker__groups">' + c(e.o.colors) + "</div>")), s.appendChild(e.c.fromHTML('<div data-ref="extra" class="jodit-color-picker__extra"></div>'));
            var u = r.refs(s).extra;
            return e.o.showBrowserColorPicker && r.hasBrowserColorPicker() && (u.appendChild(e.c.fromHTML('<div class="jodit-color-picker__native">' + l + '<input type="color" value="#ffffff"/></div>')), e.e.on(s, "change", (function(e) {
                e.stopPropagation();
                var o = e.target;
                if (o && o.tagName && i.Dom.isTag(o, "input")) {
                    var n = o.value || "";
                    r.isFunction(t) && t(n), e.preventDefault()
                }
            }))), e.e.on(s, "mousedown touchend", (function(o) {
                o.stopPropagation();
                var n = o.target;
                if (n && n.tagName && !i.Dom.isTag(n, "svg") && !i.Dom.isTag(n, "path") || !n.parentNode || (n = i.Dom.closest(n.parentNode, "a", e.editor)), i.Dom.isTag(n, "a")) {
                    var a = r.attr(n, "-color") || "";
                    t && "function" == typeof t && t(a), o.preventDefault()
                }
            })), e.e.fire("afterGenerateColorPicker", s, u), s
        }
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Button = t.UIButton = t.UIButtonState = void 0;
        var r = o(0);
        o(156);
        var n = o(8),
            i = o(20),
            a = o(46),
            s = o(9),
            l = o(2),
            c = o(1),
            u = o(55),
            d = o(7);
        t.UIButtonState = function() {
            return {
                size: "middle",
                type: "button",
                name: "",
                status: "",
                disabled: !1,
                activated: !1,
                icon: {
                    name: "empty",
                    fill: "",
                    iconURL: ""
                },
                tooltip: "",
                text: "",
                tabIndex: void 0
            }
        };
        var p = function(e) {
            function o(r, n) {
                var i = e.call(this, r) || this;
                return i.isButton = !0, i.state = t.UIButtonState(), i.actionHandlers = [], i.updateSize(), i.onChangeSize(), i.onChangeStatus(), c.getClassName(i) === c.getClassName(o.prototype) && i.setStatus(s.STATUSES.ready), n && i.setState(n), i
            }
            return r.__extends(o, e), o.prototype.setState = function(e) {
                return Object.assign(this.state, e), this
            }, o.prototype.onChangeSize = function() {
                this.setMod("size", this.state.size)
            }, o.prototype.onChangeType = function() {
                c.attr(this.container, "type", this.state.type)
            }, o.prototype.updateSize = function() {
                var e = this.closest(d.UIList);
                e && (this.state.size = e.buttonSize)
            }, o.prototype.onChangeStatus = function() {
                this.setMod("status", this.state.status)
            }, o.prototype.onChangeText = function() {
                this.text.textContent = this.jodit.i18n(this.state.text)
            }, o.prototype.onChangeTextSetMode = function() {
                this.setMod("text-icons", Boolean(this.state.text.trim().length))
            }, o.prototype.onChangeDisabled = function() {
                c.attr(this.container, "disabled", this.state.disabled || null)
            }, o.prototype.onChangeActivated = function() {
                c.attr(this.container, "aria-pressed", this.state.activated)
            }, o.prototype.onChangeName = function() {
                this.container.classList.add(this.componentName + "_" + this.clearName(this.state.name)), c.attr(this.container, "data-ref", this.state.name), c.attr(this.container, "ref", this.state.name)
            }, o.prototype.onChangeTooltip = function() {
                this.get("j.o.useNativeTooltip") && c.attr(this.container, "title", this.state.tooltip), c.attr(this.container, "aria-labelledby", this.state.tooltip)
            }, o.prototype.onChangeTabIndex = function() {
                c.attr(this.container, "tabIndex", this.state.tabIndex)
            }, o.prototype.onChangeIcon = function() {
                var e = this.get("j.o.textIcons");
                if (!(!0 === e || c.isFunction(e) && e(this.state.name))) {
                    l.Dom.detach(this.icon);
                    var t = u.Icon.makeIcon(this.j, this.state.icon);
                    t && this.icon.appendChild(t)
                }
            }, o.prototype.focus = function() {
                this.container.focus()
            }, o.prototype.isFocused = function() {
                var e = this.od.activeElement;
                return Boolean(e && l.Dom.isOrContains(this.container, e))
            }, o.prototype.createContainer = function() {
                var e = this.componentName,
                    t = this.j.c.element("button", {
                        class: e,
                        type: "button",
                        role: "button",
                        ariaPressed: !1
                    });
                return this.icon = this.j.c.span(e + "__icon"), this.text = this.j.c.span(e + "__text"), t.appendChild(this.icon), t.appendChild(this.text), this.j.e.on(t, "click", this.onActionFire), t
            }, o.prototype.destruct = function() {
                return this.j.e.off(this.container), e.prototype.destruct.call(this)
            }, o.prototype.onAction = function(e) {
                return this.actionHandlers.push(e), this
            }, o.prototype.onActionFire = function(e) {
                var t = this;
                e.buffer = {
                    actionTrigger: this
                }, this.actionHandlers.forEach((function(o) {
                    return o.call(t, e)
                }))
            }, r.__decorate([a.default("state.size")], o.prototype, "onChangeSize", null), r.__decorate([a.default("state.type")], o.prototype, "onChangeType", null), r.__decorate([a.default("parentElement")], o.prototype, "updateSize", null), r.__decorate([a.default("state.status")], o.prototype, "onChangeStatus", null), r.__decorate([a.default("state.text")], o.prototype, "onChangeText", null), r.__decorate([a.default("state.text")], o.prototype, "onChangeTextSetMode", null), r.__decorate([a.default("state.disabled")], o.prototype, "onChangeDisabled", null), r.__decorate([a.default("state.activated")], o.prototype, "onChangeActivated", null), r.__decorate([a.default("state.name")], o.prototype, "onChangeName", null), r.__decorate([a.default("state.tooltip")], o.prototype, "onChangeTooltip", null), r.__decorate([a.default("state.tabIndex")], o.prototype, "onChangeTabIndex", null), r.__decorate([a.default("state.icon")], o.prototype, "onChangeIcon", null), r.__decorate([n.default], o.prototype, "onActionFire", null), o
        }(i.UIElement);
        t.UIButton = p, t.Button = function(e, t, o, r) {
            var n = new p(e);
            return n.state.tabIndex = e.o.allowTabNavigation ? 0 : -1, c.isString(t) ? (n.state.icon.name = t, n.state.name = t, r && (n.state.status = r), o && (n.state.text = o)) : n.setState(t), n
        }
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Popup = void 0;
        var r = o(0);
        o(158);
        var n = o(8),
            i = o(2),
            a = o(1),
            s = o(11),
            l = o(7),
            c = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    return o.isOpened = !1, o.strategy = "leftBottom", o.viewBound = function() {
                        return {
                            left: 0,
                            top: 0,
                            width: o.ow.innerWidth,
                            height: o.ow.innerHeight
                        }
                    }, o.childrenPopups = new Set, a.attr(o.container, "role", "popup"), o
                }
                return r.__extends(t, e), t.prototype.updateParentElement = function(o) {
                    var r = this;
                    return o !== this && o instanceof t && (this.childrenPopups.forEach((function(e) {
                        !o.closest(e) && e.isOpened && e.close()
                    })), this.childrenPopups.has(o) || this.j.e.on(o, "beforeClose", (function() {
                        r.childrenPopups.delete(o)
                    })), this.childrenPopups.add(o)), e.prototype.updateParentElement.call(this, o)
                }, t.prototype.setContent = function(e) {
                    i.Dom.detach(this.container);
                    var t, o = this.j.c.div(this.componentName + "__content");
                    return e instanceof l.UIElement ? (t = e.container, e.parentElement = this) : t = a.isString(e) ? this.j.c.fromHTML(e) : e, o.appendChild(t), this.container.appendChild(o), this.updatePosition(), this
                }, t.prototype.open = function(e, o) {
                    void 0 === o && (o = !1), a.markOwner(this.jodit, this.container), this.isOpened = !0, this.addGlobalListeners(), this.targetBound = o ? this.getKeepBound(e) : e;
                    var r = s.getContainer(this.jodit, t);
                    return r !== this.container.parentElement && r.appendChild(this.container), this.updatePosition(), this.j.e.fire(this, "afterOpen"), this
                }, t.prototype.getKeepBound = function(e) {
                    var t = this,
                        o = e(),
                        n = this.od.elementFromPoint(o.left, o.top);
                    if (!n) return e;
                    var s = i.Dom.isHTMLElement(n, this.ow) ? n : n.parentElement,
                        l = a.position(s, this.j);
                    return function() {
                        var o = e(),
                            n = a.position(s, t.j);
                        return r.__assign(r.__assign({}, o), {
                            top: o.top + (n.top - l.top),
                            left: o.left + (n.left - l.left)
                        })
                    }
                }, t.prototype.updatePosition = function() {
                    if (!this.isOpened) return this;
                    var e = this.calculatePosition(this.targetBound(), this.viewBound(), a.position(this.container, this.j)),
                        t = e[0];
                    return this.setMod("strategy", e[1]), a.css(this.container, {
                        left: t.left,
                        top: t.top
                    }), this.childrenPopups.forEach((function(e) {
                        return e.updatePosition()
                    })), this
                }, t.prototype.calculatePosition = function(e, o, r, n) {
                    void 0 === n && (n = this.strategy);
                    var i = {
                            left: e.left,
                            right: e.left - (r.width - e.width)
                        },
                        s = {
                            bottom: e.top + e.height,
                            top: e.top - r.height
                        },
                        l = Object.keys(i).reduce((function(e, t) {
                            return e.concat(Object.keys(s).map((function(e) {
                                return "" + t + a.ucfirst(e)
                            })))
                        }), []),
                        c = function(e) {
                            var t = a.kebabCase(e).split("-");
                            return {
                                left: i[t[0]],
                                top: s[t[1]],
                                width: r.width,
                                height: r.height
                            }
                        },
                        u = function(e) {
                            return t.boxInView(c(n), e) ? n : l.find((function(o) {
                                if (t.boxInView(c(o), e)) return o
                            })) || null
                        },
                        d = u(a.position(this.j.container, this.j));
                    return d && t.boxInView(c(d), o) || (d = u(o) || d || n), [c(d), d]
                }, t.boxInView = function(e, t) {
                    return !(-2 > e.top - t.top || -2 > e.left - t.left || -2 > t.top + t.height - (e.top + e.height) || -2 > t.left + t.width - (e.left + e.width))
                }, t.prototype.close = function() {
                    return this.isOpened ? (this.isOpened = !1, this.childrenPopups.forEach((function(e) {
                        return e.close()
                    })), this.j.e.fire(this, "beforeClose"), this.removeGlobalListeners(), i.Dom.safeRemove(this.container), this) : this
                }, t.prototype.closeOnOutsideClick = function(e) {
                    if (this.isOpened)
                        if (e.target) {
                            var o = l.UIElement.closestElement(e.target, t);
                            o && (this === o || o.closest(this)) || this.close()
                        } else this.close()
                }, t.prototype.addGlobalListeners = function() {
                    var e = this.updatePosition,
                        t = this.ow;
                    s.eventEmitter.on("closeAllPopups", this.close), this.j.e.on("closeAllPopups", this.close).on("escape", this.close).on("resize", e).on(this.container, "scroll mousewheel", e).on("mousedown touchstart", this.closeOnOutsideClick).on(t, "mousedown touchstart", this.closeOnOutsideClick).on(t, "scroll", e).on(t, "resize", e)
                }, t.prototype.removeGlobalListeners = function() {
                    var e = this.updatePosition,
                        t = this.ow;
                    s.eventEmitter.off("closeAllPopups", this.close), this.j.e.off("closeAllPopups", this.close).off("escape", this.close).off("resize", e).off(this.container, "scroll mousewheel", e).off("mousedown touchstart", this.closeOnOutsideClick).off(t, "mousedown touchstart", this.closeOnOutsideClick).off(t, "scroll", e).off(t, "resize", e)
                }, t.prototype.setZIndex = function(e) {
                    this.container.style.zIndex = e.toString()
                }, t.prototype.destruct = function() {
                    return this.close(), e.prototype.destruct.call(this)
                }, r.__decorate([n.default], t.prototype, "updatePosition", null), r.__decorate([n.default], t.prototype, "close", null), r.__decorate([n.default], t.prototype, "closeOnOutsideClick", null), t
            }(l.UIElement);
        t.Popup = c
    }, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIList = void 0;
        var r = o(0);
        o(161);
        var n = o(15),
            i = o(162),
            a = o(9),
            s = o(14),
            l = o(57),
            c = o(56),
            u = o(1),
            d = function(e) {
                function t(o) {
                    var r = e.call(this, o) || this;
                    return r.mode = "horizontal", r.removeButtons = [], r.onChangeMode(), u.getClassName(r) === u.getClassName(t.prototype) && r.setStatus(a.STATUSES.ready), r
                }
                return r.__extends(t, e), t.prototype.onChangeMode = function() {
                    this.setMod("mode", this.mode)
                }, t.prototype.addGroup = function() {
                    var e = new l.UIGroup(this.jodit);
                    return this.append(e), e
                }, Object.defineProperty(t.prototype, "buttons", {
                    get: function() {
                        return this.allChildren.filter((function(e) {
                            return e instanceof n.UIButton
                        }))
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.getButtonsNames = function() {
                    return this.buttons.map((function(e) {
                        return e instanceof n.UIButton && e.state.name || ""
                    })).filter((function(e) {
                        return "" !== e
                    }))
                }, t.prototype.setRemoveButtons = function(e) {
                    return this.removeButtons = e || [], this
                }, t.prototype.build = function(e, t) {
                    var o = this;
                    void 0 === t && (t = null), this.clear();
                    var r = !1,
                        n = this.addGroup();
                    return i.getStrongControlTypes(e, this.j.o.controls).filter((function(e) {
                        return !o.removeButtons.includes(e.name)
                    })).forEach((function(e) {
                        var i = null;
                        switch (e.name) {
                            case "\n":
                                n = o.addGroup();
                                break;
                            case "|":
                                r || (r = !0, i = new c.UISeparator(o.j));
                                break;
                            default:
                                r = !1, i = o.makeButton(e, t)
                        }
                        i && n.append(i)
                    })), this.update(), this
                }, t.prototype.makeButton = function(e, t) {
                    return new n.UIButton(this.j)
                }, r.__decorate([s.watch("mode")], t.prototype, "onChangeMode", null), t
            }(l.UIGroup);
        t.UIList = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getStrongControlTypes = void 0;
        var r = o(0),
            n = o(163),
            i = o(4),
            a = o(5);
        t.getStrongControlTypes = function(e, t) {
            return (a.isArray(e) ? e : Object.keys(e).map((function(t) {
                return r.__assign({
                    name: t
                }, e[t] || {})
            }))).map((function(e) {
                return n.getControlType(e, t || i.Config.defaultOptions.controls)
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getControlType = void 0;
        var r = o(0),
            n = o(1);
        t.getControlType = function(e, t) {
            var o;
            if (n.isString(e)) {
                var i = e.split(/\./),
                    a = t;
                i.length > 1 && void 0 !== t[i[0]] && (a = t[i[0]], e = i[1]), o = void 0 !== a[e] ? r.__assign({
                    name: e
                }, a[e]) : {
                    name: e,
                    command: e,
                    tooltip: e
                }
            } else void 0 !== t[(o = r.__assign({
                name: "empty"
            }, e)).name] && (o = r.__assign(r.__assign({}, t[o.name]), o));
            return o
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIForm = void 0;
        var r = o(0),
            n = o(7),
            i = o(25),
            a = o(12),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.submit = function() {
                    this.j.e.fire(this.container, "submit")
                }, t.prototype.validate = function() {
                    for (var e = 0, t = this.allChildren.filter((function(e) {
                            return e instanceof i.UIInput
                        })); t.length > e; e++)
                        if (!t[e].validate()) return !1;
                    return !0
                }, t.prototype.onSubmit = function(e) {
                    var t = this;
                    this.j.e.on(this.container, "submit", (function() {
                        var o = t.allChildren.filter((function(e) {
                            return e instanceof i.UIInput
                        }));
                        return !!t.validate() && (e(o.reduce((function(e, t) {
                            return e[t.options.name] = t.value, e
                        }), {})), !1)
                    }))
                }, t.prototype.createContainer = function() {
                    var e = this.j.c.element("form");
                    return e.classList.add(this.componentName), a.attr(e, "dir", this.j.o.direction || "auto"), e
                }, t
            }(n.UIGroup);
        t.UIForm = s
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.url = t.required = void 0;
        var r = o(1);
        t.required = function(e) {
            return !!r.trim(e.value).length || (e.error = "Please fill out this field", !1)
        }, t.url = function(e) {
            return !!r.isURL(r.trim(e.value)) || (e.error = "Please enter a web address", !1)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(168), t), r.__exportStar(o(170), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UITextArea = void 0;
        var r = o(0);
        o(169);
        var n = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.createContainer = function(t) {
                return this.nativeInput = this.j.create.element("textarea"), e.prototype.createContainer.call(this, t)
            }, t
        }(o(25).UIInput);
        t.UITextArea = n
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UICheckbox = void 0;
        var r = o(0);
        o(171);
        var n = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.makeContainer = function(e) {
                return this.j.c.element("label", {
                    className: this.componentName
                })
            }, t.prototype.createContainer = function(t) {
                return e.prototype.createContainer.call(this, r.__assign(r.__assign({}, t), {
                    type: "checkbox"
                }))
            }, t
        }(o(25).UIInput);
        t.UICheckbox = n
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIBlock = void 0;
        var r = o(0),
            n = o(7);
        o(173);
        var i = o(12),
            a = function(e) {
                function t(t, o, r) {
                    void 0 === r && (r = {
                        align: "left"
                    });
                    var n = e.call(this, t, o) || this;
                    return n.options = r, n.setMod("align", n.options.align || "left"), i.attr(n.container, "data-ref", r.ref), i.attr(n.container, "ref", r.ref), n
                }
                return r.__extends(t, e), t
            }(n.UIGroup);
        t.UIBlock = a
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TabsWidget = void 0, o(175);
        var r = o(1),
            n = o(7);
        t.TabsWidget = function(e, t, o) {
            var i = e.c.div("jodit-tabs"),
                a = e.c.div("jodit-tabs__wrapper"),
                s = e.c.div("jodit-tabs__buttons"),
                l = {},
                c = [],
                u = "",
                d = 0;
            if (i.appendChild(s), i.appendChild(a), t.forEach((function(i) {
                    var p = i.icon,
                        f = i.name,
                        h = i.content,
                        m = e.c.div("jodit-tab"),
                        v = n.Button(e, p || f, f);
                    u || (u = f), s.appendChild(v.container), c.push(v), v.container.classList.add("jodit-tabs__button", "jodit-tabs__button_columns_" + t.length), r.isFunction(h) ? m.appendChild(e.c.div("jodit-tab_empty")) : m.appendChild(h), a.appendChild(m), v.onAction((function() {
                        return c.forEach((function(e) {
                            e.state.activated = !1
                        })), r.$$(".jodit-tab", a).forEach((function(e) {
                            e.classList.remove("jodit-tab_active")
                        })), v.state.activated = !0, m.classList.add("jodit-tab_active"), r.isFunction(h) && h.call(e), o && (o.__activeTab = f), !1
                    })), l[f] = {
                        button: v,
                        tab: m
                    }, d += 1
                })), !d) return i;
            r.$$("a", s).forEach((function(e) {
                e.style.width = (100 / d).toFixed(10) + "%"
            }));
            var p = o && o.__activeTab && l[o.__activeTab] ? o.__activeTab : u;
            return l[p].button.state.activated = !0, l[p].tab.classList.add("jodit-tab_active"), i
        }
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FileSelectorWidget = void 0;
        var r = o(1),
            n = o(2),
            i = o(17),
            a = o(7);
        t.FileSelectorWidget = function(e, t, o, s, l) {
            var c;
            void 0 === l && (l = !0);
            var u = [];
            if (t.upload && e.o.uploader && (e.o.uploader.url || e.o.uploader.insertImageAsBase64URI)) {
                var d = e.c.fromHTML('<div class="jodit-drag-and-drop__file-box"><strong>' + e.i18n(l ? "Drop image" : "Drop file") + "</strong><span><br>" + e.i18n("or click") + '</span><input type="file" accept="' + (l ? "image/*" : "*") + '" tabindex="-1" dir="auto" multiple=""/></div>');
                e.uploader.bind(d, (function(o) {
                    var n = r.isFunction(t.upload) ? t.upload : e.o.uploader.defaultHandlerSuccess;
                    r.isFunction(n) && n.call(e, o), e.e.fire("closeAllPopups")
                }), (function(t) {
                    e.e.fire("errorMessage", t.message), e.e.fire("closeAllPopups")
                })), u.push({
                    icon: "upload",
                    name: "Upload",
                    content: d
                })
            }
            if (t.filebrowser && (e.o.filebrowser.ajax.url || e.o.filebrowser.items.url) && u.push({
                    icon: "folder",
                    name: "Browse",
                    content: function() {
                        s && s(), t.filebrowser && e.filebrowser.open(t.filebrowser, l)
                    }
                }), t.url) {
                var p = new a.UIButton(e, {
                        type: "submit",
                        status: "primary",
                        text: "Insert"
                    }),
                    f = new a.UIForm(e, [new a.UIInput(e, {
                        required: !0,
                        label: "URL",
                        name: "url",
                        type: "url",
                        placeholder: "http://"
                    }), new a.UIInput(e, {
                        name: "text",
                        label: "Alternative text"
                    }), new a.UIBlock(e, [p])]);
                c = null, o && !n.Dom.isText(o) && (n.Dom.isTag(o, "img") || r.$$("img", o).length) && (c = "IMG" === o.tagName ? o : r.$$("img", o)[0], r.val(f.container, "input[name=url]", r.attr(c, "src")), r.val(f.container, "input[name=text]", r.attr(c, "alt")), p.state.text = "Update"), o && n.Dom.isTag(o, "a") && (r.val(f.container, "input[name=url]", r.attr(o, "href")), r.val(f.container, "input[name=text]", r.attr(o, "title")), p.state.text = "Update"), f.onSubmit((function(o) {
                    r.isFunction(t.url) && t.url.call(e, o.url, o.text)
                })), u.push({
                    icon: "link",
                    name: "URL",
                    content: f.container
                })
            }
            return i.TabsWidget(e, u)
        }
    }, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Storage = t.StorageKey = void 0;
        var r = o(1),
            n = o(62),
            i = o(61);
        t.StorageKey = "Jodit_";
        var a = function() {
            function e(e, o) {
                this.provider = e, this.prefix = t.StorageKey, o && (this.prefix += o)
            }
            return e.prototype.set = function(e, t) {
                this.provider.set(r.camelCase(this.prefix + e), t)
            }, e.prototype.delete = function(e) {
                this.provider.delete(r.camelCase(this.prefix + e))
            }, e.prototype.get = function(e) {
                return this.provider.get(r.camelCase(this.prefix + e))
            }, e.prototype.exists = function(e) {
                return this.provider.exists(r.camelCase(this.prefix + e))
            }, e.prototype.clear = function() {
                return this.provider.clear()
            }, e.makeStorage = function(o, r) {
                var a;
                return void 0 === o && (o = !1), o && n.canUsePersistentStorage() && (a = new n.LocalStorageProvider(t.StorageKey + r)), a || (a = new i.MemoryStorageProvider), new e(a, r)
            }, e
        }();
        t.Storage = a
    }, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Alert = void 0;
        var r = o(26),
            n = o(1),
            i = o(2),
            a = o(7);
        t.Alert = function(e, t, o, s) {
            void 0 === s && (s = "jodit-dialog_alert"), n.isFunction(t) && (o = t, t = void 0);
            var l = new r.Dialog,
                c = l.c.div(s),
                u = a.Button(l, "ok", "Ok");
            return n.asArray(e).forEach((function(e) {
                c.appendChild(i.Dom.isNode(e, l.ow) ? e : l.c.fromHTML(e))
            })), u.onAction((function() {
                o && n.isFunction(o) && !1 === o(l) || l.close()
            })), l.setFooter([u]), l.open(c, t || "&nbsp;", !0, !0), u.focus(), l
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Prompt = void 0;
        var r = o(26),
            n = o(7),
            i = o(1);
        t.Prompt = function(e, t, o, a, s) {
            var l = new r.Dialog,
                c = n.Button(l, "cancel", "Cancel"),
                u = n.Button(l, "ok", "Ok"),
                d = l.c.element("form", {
                    class: "jodit-dialog_prompt"
                }),
                p = l.c.element("input", {
                    autofocus: !0,
                    class: "jodit-input"
                }),
                f = l.c.element("label");
            i.isFunction(t) && (o = t, t = void 0), a && i.attr(p, "placeholder", a), f.appendChild(l.c.text(e)), d.appendChild(f), d.appendChild(p), c.onAction(l.close);
            var h = function() {
                o && i.isFunction(o) && !1 === o(p.value) || l.close()
            };
            return u.onAction(h), l.e.on(d, "submit", (function() {
                return h(), !1
            })), l.setFooter([u, c]), l.open(d, t || "&nbsp;", !0, !0), p.focus(), void 0 !== s && s.length && (p.value = s, p.select()), l
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Confirm = void 0;
        var r = o(26),
            n = o(1),
            i = o(7);
        t.Confirm = function(e, t, o) {
            var a = new r.Dialog,
                s = a.c.fromHTML('<form class="jodit-dialog_prompt"></form>'),
                l = a.c.element("label");
            n.isFunction(t) && (o = t, t = void 0), l.appendChild(a.c.fromHTML(e)), s.appendChild(l);
            var c = i.Button(a, "cancel", "Cancel");
            c.onAction((function() {
                o && o(!1), a.close()
            }));
            var u = function() {
                    o && o(!0), a.close()
                },
                d = i.Button(a, "ok", "Yes");
            return d.onAction(u), a.e.on(s, "submit", (function() {
                return u(), !1
            })), a.setFooter([d, c]), a.open(s, t || "&nbsp;", !0, !0), d.focus(), a
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Create = void 0;
        var r = o(1),
            n = o(2),
            i = function() {
                function e(e, t) {
                    this.document = e, this.createAttributes = t, this.applyAttributes = function(e, t) {
                        r.each(t, (function(t, o) {
                            r.isPlainObject(o) && "style" === t ? r.css(e, o) : ("className" === t && (t = "class"), e.setAttribute(r.kebabCase(t), o.toString()))
                        }))
                    }
                }
                return Object.defineProperty(e.prototype, "doc", {
                    get: function() {
                        return r.isFunction(this.document) ? this.document() : this.document
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.element = function(e, t, o) {
                    var n = this,
                        i = this.doc.createElement(e.toLowerCase());
                    if (this.createAttributes) {
                        var a = this.createAttributes;
                        if (a && a[e.toLowerCase()]) {
                            var s = a[e.toLowerCase()];
                            r.isFunction(s) ? s(i) : r.isPlainObject(s) && this.applyAttributes(i, s)
                        }
                    }
                    return t && (r.isPlainObject(t) ? this.applyAttributes(i, t) : o = t), o && r.asArray(o).forEach((function(e) {
                        return i.appendChild("string" == typeof e ? n.fromHTML(e) : e)
                    })), i
                }, e.prototype.div = function(e, t, o) {
                    var r = this.element("div", t, o);
                    return e && (r.className = e), r
                }, e.prototype.span = function(e, t, o) {
                    var r = this.element("span", t, o);
                    return e && (r.className = e), r
                }, e.prototype.a = function(e, t, o) {
                    var r = this.element("a", t, o);
                    return e && (r.className = e), r
                }, e.prototype.text = function(e) {
                    return this.doc.createTextNode(e)
                }, e.prototype.fragment = function() {
                    return this.doc.createDocumentFragment()
                }, e.prototype.fromHTML = function(e, t) {
                    var o = this.div();
                    o.innerHTML = e.toString();
                    var i = o.firstChild === o.lastChild && o.firstChild ? o.firstChild : o;
                    if (n.Dom.safeRemove(i), t) {
                        var a = r.refs(i);
                        Object.keys(t).forEach((function(e) {
                            var o = a[e];
                            o && !1 === t[e] && n.Dom.hide(o)
                        }))
                    }
                    return i
                }, e
            }();
        t.Create = i
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FileBrowser = void 0;
        var r = o(0);
        o(189);
        var n = o(4),
            i = o(3),
            a = o(16),
            s = o(38),
            l = o(1),
            c = o(27);
        o(190);
        var u = o(2),
            d = o(22),
            p = o(191),
            f = o(21),
            h = o(66),
            m = o(8),
            v = o(192),
            g = o(67),
            y = o(194),
            b = o(40),
            _ = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    o.loader = o.c.div(f.F_CLASS + "__loader", f.ICON_LOADER), o.browser = o.c.div(f.F_CLASS + " non-selected"), o.status_line = o.c.div(f.F_CLASS + "__status"), o.tree = o.c.div(f.F_CLASS + "__tree"), o.files = o.c.div(f.F_CLASS + "__files"), o.state = d.ObserveObject.create({
                        currentPath: "",
                        currentSource: b.DEFAULT_SOURCE_NAME,
                        currentBaseUrl: "",
                        activeElements: [],
                        elements: [],
                        sources: {},
                        view: "tiles",
                        sortBy: "changed-desc",
                        filterWord: "",
                        onlyImages: !1
                    }), o.errorHandler = function(e) {
                        e instanceof Error ? o.status(o.i18n(e.message)) : o.status(o.o.getMessage(e))
                    }, o.close = function() {
                        o.dialog.close()
                    }, o.openImageEditor = function(e, t, r, n, i, a) {
                        return o.getInstance("ImageEditor", o.o).open(e, (function(e, s, c, u) {
                            ("resize" === s.action ? o.dataProvider.resize(r, n, t, e, s.box) : o.dataProvider.crop(r, n, t, e, s.box)).then((function(e) {
                                o.o.isSuccess(e) ? o.loadTree().then((function() {
                                    c(), i && i()
                                })) : (u(l.error(o.o.getMessage(e))), a && a(l.error(o.o.getMessage(e))))
                            })).catch((function(e) {
                                u(e), a && a(e)
                            }))
                        }))
                    }, o.elementsMap = {};
                    var r = o;
                    r.options = new n.OptionsDefault(l.extend(!0, {}, r.options, n.Config.defaultOptions.filebrowser, t)), r.storage = s.Storage.makeStorage(o.o.filebrowser.saveStateInStorage), r.dataProvider = h.makeDataProvider(r, r.options), r.dialog = new a.Dialog({
                        fullsize: r.o.fullsize,
                        theme: r.o.theme,
                        globalFullSize: r.o.globalFullSize,
                        language: o.o.language,
                        buttons: ["fullsize", "dialog.close"]
                    }), r.o.showFoldersPanel && r.browser.appendChild(r.tree), r.browser.appendChild(r.files), r.browser.appendChild(r.status_line), y.selfListeners.call(r), g.nativeListeners.call(r), v.stateListeners.call(r), r.dialog.setSize(r.o.width, r.o.height), ["getLocalFileByUrl", "crop", "resize", "create", "fileMove", "folderMove", "fileRename", "folderRename", "fileRemove", "folderRemove", "folder", "items", "permissions"].forEach((function(e) {
                        null !== o.options[e] && (o.options[e] = l.extend(!0, {}, o.o.ajax, o.options[e]))
                    }));
                    var i = o.storage.get(f.F_CLASS + "_view");
                    r.state.view = i && null === o.o.view ? "list" === i ? "list" : "tiles" : "list" === r.o.view ? "list" : "tiles", o.state.fire("change.view");
                    var c = r.storage.get(f.F_CLASS + "_sortby");
                    if (c) {
                        var u = c.split("-");
                        r.state.sortBy = ["changed", "name", "size"].includes(u[0]) ? c : "changed-desc"
                    } else r.state.sortBy = r.o.sortBy || "changed-desc";
                    return r.initUploader(r), o
                }
                return r.__extends(t, e), t.prototype.loadItems = function() {
                    return r.__awaiter(this, void 0, Promise, (function() {
                        var e = this;
                        return r.__generator(this, (function(t) {
                            return this.files.classList.add("jodit-filebrowser_active"), this.files.appendChild(this.loader.cloneNode(!0)), [2, this.dataProvider.items(this.state.currentPath, this.state.currentSource).then((function(t) {
                                var o = e.o.items.process;
                                if (o || (o = e.o.ajax.process), o) {
                                    var r = o.call(self, t);
                                    e.generateItemsList(r.data.sources), e.state.activeElements = []
                                }
                            })).catch((function(t) {
                                a.Alert(t.message).bindDestruct(e), e.errorHandler(t)
                            }))]
                        }))
                    }))
                }, t.prototype.loadTree = function() {
                    return r.__awaiter(this, void 0, Promise, (function() {
                        var e, t, o, n = this;
                        return r.__generator(this, (function(r) {
                            return e = function(e) {
                                throw e instanceof Error ? e : l.error(e)
                            }, this.uploader && (this.uploader.setPath(this.state.currentPath), this.uploader.setSource(this.state.currentSource)), this.tree.classList.add("jodit-filebrowser_active"), u.Dom.detach(this.tree), this.tree.appendChild(this.loader.cloneNode(!0)), t = this.loadItems(), this.o.showFoldersPanel ? (o = this.dataProvider.tree(this.state.currentPath, this.state.currentSource).then((function(e) {
                                var t = n.o.folder.process;
                                if (t || (t = n.o.ajax.process), t) {
                                    var o = t.call(self, e);
                                    n.state.sources = o.data.sources
                                }
                            })).catch((function(t) {
                                n.errorHandler(e(n.i18n("Error on load folders"))), e(t)
                            })), [2, Promise.all([o, t]).catch(l.error)]) : (this.tree.classList.remove("jodit-filebrowser_active"), [2, t.catch(l.error)])
                        }))
                    }))
                }, t.prototype.deleteFile = function(e, t) {
                    return r.__awaiter(this, void 0, Promise, (function() {
                        var o = this;
                        return r.__generator(this, (function(r) {
                            return [2, this.dataProvider.fileRemove(this.state.currentPath, e, t).then((function(t) {
                                if (o.o.remove && o.o.remove.process && (t = o.o.remove.process.call(o, t)), !o.o.isSuccess(t)) throw l.error(o.o.getMessage(t));
                                o.status(o.o.getMessage(t) || o.i18n('File "%s" was deleted', e), !0)
                            })).catch(this.status)]
                        }))
                    }))
                }, t.prototype.generateItemsList = function(e) {
                    var t = this,
                        o = [],
                        n = this.state;
                    l.each(e, (function(e, i) {
                        i.files && i.files.length && ("function" == typeof t.o.sort && i.files.sort((function(e, o) {
                            return t.o.sort(e, o, n.sortBy)
                        })), i.files.forEach((function(a) {
                            (function(e) {
                                return !n.filterWord.length || void 0 === t.o.filter || t.o.filter(e, n.filterWord)
                            })(a) && function(e) {
                                return !t.state.onlyImages || void 0 === e.isImage || e.isImage
                            }(a) && o.push(p.FileBrowserItem.create(r.__assign(r.__assign({}, a), {
                                sourceName: e,
                                source: i
                            })))
                        })))
                    })), this.state.elements = o
                }, t.prototype.onSelect = function(e) {
                    var t = this;
                    return function() {
                        if (t.state.activeElements.length) {
                            var o = [],
                                r = [];
                            t.state.activeElements.forEach((function(e) {
                                var t = e.fileURL;
                                t && (o.push(t), r.push(e.isImage || !1))
                            })), t.close();
                            var n = {
                                baseurl: "",
                                files: o,
                                isImages: r
                            };
                            l.isFunction(e) && e(n), t.close()
                        }
                        return !1
                    }
                }, t.prototype.isOpened = function() {
                    return this.dialog.isOpened && "none" !== this.browser.style.display
                }, t.prototype.status = function(e, t) {
                    var o = this;
                    l.isString(e) || (e = e.message), this.status_line.classList.remove("jodit-filebrowser_success"), this.status_line.classList.add("jodit-filebrowser_active");
                    var r = this.c.div();
                    r.textContent = e, this.status_line.appendChild(r), t && this.status_line.classList.add("jodit-filebrowser_success"), this.async.setTimeout((function() {
                        o.status_line.classList.remove("jodit-filebrowser_active"), u.Dom.detach(o.status_line)
                    }), {
                        timeout: this.o.howLongShowMsg,
                        label: "fileBrowser.status"
                    })
                }, t.prototype.open = function(e, t) {
                    var o = this;
                    return void 0 === e && (e = this.o.defaultCallback), void 0 === t && (t = !1), this.state.onlyImages = t, this.async.promise((function(t, r) {
                        if (!o.o.items || !o.o.items.url) throw l.error("Need set options.filebrowser.ajax.url");
                        var n = 0;
                        o.e.off(o.files, "dblclick").on(o.files, "dblclick", o.onSelect(e)).on(o.files, "touchstart", (function() {
                            var t = (new Date).getTime();
                            i.EMULATE_DBLCLICK_TIMEOUT > t - n && o.onSelect(e)(), n = t
                        })).off("select.filebrowser").on("select.filebrowser", o.onSelect(e));
                        var a = o.c.div();
                        o.toolbar.build(o.o.buttons).appendTo(a), o.dialog.open(o.browser, a), o.e.fire("sort.filebrowser", o.state.sortBy), o.loadTree().then(t, r)
                    }))
                }, t.prototype.initUploader = function(e) {
                    var t, o = this,
                        i = this,
                        a = l.extend(!0, {}, n.Config.defaultOptions.uploader, i.o.uploader, r.__assign({}, null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.uploader)),
                        s = function() {
                            return o.loadItems()
                        };
                    i.uploader = i.getInstance("Uploader", a), i.uploader.setPath(i.state.currentPath), i.uploader.setSource(i.state.currentSource), i.uploader.bind(i.browser, s, i.errorHandler), i.e.on("bindUploader.filebrowser", (function(e) {
                        i.uploader.bind(e, s, i.errorHandler)
                    }))
                }, t.prototype.destruct = function() {
                    this.isInDestruct || (this.dialog.destruct(), this.events && this.e.off(".filebrowser"), this.uploader && this.uploader.destruct(), e.prototype.destruct.call(this))
                }, r.__decorate([m.default], t.prototype, "status", null), r.__decorate([m.default], t.prototype, "open", null), t
            }(c.ViewWithToolbar);
        t.FileBrowser = _
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(1),
            i = o(21),
            a = o(7);
        r.Config.prototype.filebrowser = {
            extraButtons: [],
            filter: function(e, t) {
                return t = t.toLowerCase(), n.isString(e) ? -1 !== e.toLowerCase().indexOf(t) : n.isString(e.name) ? -1 !== e.name.toLowerCase().indexOf(t) : !n.isString(e.file) || -1 !== e.file.toLowerCase().indexOf(t)
            },
            sortBy: "changed-desc",
            sort: function(e, t, o) {
                var r = o.toLowerCase().split("-"),
                    i = r[0],
                    a = "asc" === r[1],
                    s = function(e, t) {
                        return t > e ? a ? -1 : 1 : e > t ? a ? 1 : -1 : 0
                    };
                if (n.isString(e)) return s(e.toLowerCase(), t.toLowerCase());
                if (void 0 === e[i] || "name" === i) return n.isString(e.name) ? s(e.name.toLowerCase(), t.name.toLowerCase()) : n.isString(e.file) ? s(e.file.toLowerCase(), t.file.toLowerCase()) : 0;
                switch (i) {
                    case "changed":
                        var l = new Date(e.changed).getTime(),
                            c = new Date(t.changed).getTime();
                        return a ? l - c : c - l;
                    case "size":
                        return l = n.humanSizeToBytes(e.size), c = n.humanSizeToBytes(t.size), a ? l - c : c - l
                }
                return 0
            },
            editImage: !0,
            preview: !0,
            showPreviewNavigation: !0,
            showSelectButtonInPreview: !0,
            contextMenu: !0,
            howLongShowMsg: 3e3,
            createNewFolder: !0,
            deleteFolder: !0,
            renameFolder: !0,
            moveFolder: !0,
            moveFile: !0,
            showFoldersPanel: !0,
            width: 859,
            height: 400,
            buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"],
            removeButtons: [],
            fullsize: !1,
            showTooltip: !0,
            view: null,
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && n.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            showFileName: !0,
            showFileSize: !0,
            showFileChangeTime: !0,
            saveStateInStorage: !0,
            getThumbTemplate: function(e, t, o) {
                var r = this.options,
                    n = r.showFileName,
                    a = r.showFileSize && e.size,
                    s = r.showFileChangeTime && e.time,
                    l = "";
                return void 0 !== e.file && (l = e.file), '<a\n\t\t\tdata-jodit-filebrowser-item="true"\n\t\t\tdata-is-file="' + (e.isImage ? 0 : 1) + '"\n\t\t\tdraggable="true"\n\t\t\tclass="' + i.ITEM_CLASS + '"\n\t\t\thref="' + e.fileURL + '"\n\t\t\tdata-source="' + o + '"\n\t\t\tdata-path="' + e.path + '"\n\t\t\tdata-name="' + l + '"\n\t\t\ttitle="' + l + '"\n\t\t\tdata-url="' + e.fileURL + '">\n\t\t\t\t<img\n\t\t\t\t\tdata-is-file="' + (e.isImage ? 0 : 1) + '"\n\t\t\t\t\tdata-src="' + e.fileURL + '"\n\t\t\t\t\tsrc="' + e.imageURL + '"\n\t\t\t\t\talt="' + l + '"\n\t\t\t\t\tloading="lazy"\n\t\t\t\t/>\n\t\t\t\t' + (n || a || s ? '<div class="' + i.ITEM_CLASS + '-info">' + (n ? '<span class="' + i.ITEM_CLASS + '-info-filename">' + l + "</span>" : "") + (a ? '<span class="' + i.ITEM_CLASS + '-info-filesize">' + e.size + "</span>" : "") + (s ? '<span class="' + i.ITEM_CLASS + '-info-filechanged">' + s + "</span>" : "") + "</div>" : "") + "\n\t\t\t</a>"
            },
            ajax: {
                url: "",
                async: !0,
                data: {},
                cache: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                method: "POST",
                processData: !0,
                dataType: "json",
                headers: {},
                prepareData: function(e) {
                    return e
                },
                process: function(e) {
                    return e
                }
            },
            create: {
                data: {
                    action: "folderCreate"
                }
            },
            getLocalFileByUrl: {
                data: {
                    action: "getLocalFileByUrl"
                }
            },
            resize: {
                data: {
                    action: "imageResize"
                }
            },
            crop: {
                data: {
                    action: "imageCrop"
                }
            },
            fileMove: {
                data: {
                    action: "fileMove"
                }
            },
            folderMove: {
                data: {
                    action: "folderMove"
                }
            },
            fileRename: {
                data: {
                    action: "fileRename"
                }
            },
            folderRename: {
                data: {
                    action: "folderRename"
                }
            },
            fileRemove: {
                data: {
                    action: "fileRemove"
                }
            },
            folderRemove: {
                data: {
                    action: "folderRemove"
                }
            },
            items: {
                data: {
                    action: "files"
                }
            },
            folder: {
                data: {
                    action: "folders"
                }
            },
            permissions: {
                data: {
                    action: "permissions"
                }
            }
        }, r.Config.prototype.controls.filebrowser = {
            upload: {
                icon: "plus",
                isInput: !0,
                isDisabled: function(e) {
                    return !e.dataProvider.canI("FileUpload")
                },
                getContent: function(e, t) {
                    var o = e.c.fromHTML('<span class="jodit-ui-button jodit__upload-button">\n\t\t\t\t\t\t' + a.Icon.get("plus") + '\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype="file"\n\t\t\t\t\t\t\taccept="' + (e.state.onlyImages ? "image/*" : "*") + '"\n\t\t\t\t\t\t\ttabindex="-1"\n\t\t\t\t\t\t\tdir="auto"\n\t\t\t\t\t\t\tmultiple=""\n\t\t\t\t\t\t\t' + (t.isDisabled && t.isDisabled(e, t) ? 'disabled="disabled"' : "") + "\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t</span>");
                    return e.e.fire("bindUploader.filebrowser", o), o
                }
            },
            remove: {
                icon: "bin",
                isDisabled: function(e) {
                    return !e.state.activeElements.length || !e.dataProvider.canI("FileRemove")
                },
                exec: function(e) {
                    e.e.fire("fileRemove.filebrowser")
                }
            },
            update: {
                exec: function(e) {
                    e.e.fire("update.filebrowser")
                }
            },
            select: {
                icon: "check",
                isDisabled: function(e) {
                    return !e.state.activeElements.length
                },
                exec: function(e) {
                    e.e.fire("select.filebrowser")
                }
            },
            edit: {
                icon: "pencil",
                isDisabled: function(e) {
                    var t = e.state.activeElements;
                    return 1 !== t.length || !t[0].isImage || !(e.dataProvider.canI("ImageCrop") || e.dataProvider.canI("ImageResize"))
                },
                exec: function(e) {
                    e.e.fire("edit.filebrowser")
                }
            },
            tiles: {
                icon: "th",
                isActive: function(e) {
                    return "tiles" === e.state.view
                },
                exec: function(e) {
                    e.e.fire("view.filebrowser", "tiles")
                }
            },
            list: {
                icon: "th-list",
                isActive: function(e) {
                    return "list" === e.state.view
                },
                exec: function(e) {
                    e.e.fire("view.filebrowser", "list")
                }
            },
            filter: {
                isInput: !0,
                getContent: function(e, t, o) {
                    var r = o.container.querySelector(".jodit-input");
                    if (r) return r;
                    var n = e.c.element("input", {
                        class: "jodit-input",
                        placeholder: e.i18n("Filter")
                    });
                    return n.value = e.state.filterWord, e.e.on(n, "keydown mousedown", e.async.debounce((function() {
                        e.e.fire("filter.filebrowser", n.value)
                    }), e.defaultTimeout)), n
                }
            },
            sort: {
                isInput: !0,
                getContent: function(e) {
                    var t = e.c.fromHTML('<select class="jodit-input jodit-select"><option value="changed-asc">' + e.i18n("Sort by changed") + ' (⬆)</option><option value="changed-desc">' + e.i18n("Sort by changed") + ' (⬇)</option><option value="name-asc">' + e.i18n("Sort by name") + ' (⬆)</option><option value="name-desc">' + e.i18n("Sort by name") + ' (⬇)</option><option value="size-asc">' + e.i18n("Sort by size") + ' (⬆)</option><option value="size-desc">' + e.i18n("Sort by size") + " (⬇)</option></select>");
                    return t.value = e.state.sortBy, e.e.on("sort.filebrowser", (function(e) {
                        t.value !== e && (t.value = e)
                    })).on(t, "change", (function() {
                        e.e.fire("sort.filebrowser", t.value)
                    })), t
                }
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FileBrowserItem = void 0;
        var r = o(1),
            n = function() {
                function e(e) {
                    this.data = e, r.extend(this, e)
                }
                return e.create = function(t) {
                    return new e(t)
                }, Object.defineProperty(e.prototype, "path", {
                    get: function() {
                        return r.normalizePath(this.data.source.path ? this.data.source.path + "/" : "/")
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "imageURL", {
                    get: function() {
                        var e = (new Date).getTime().toString(),
                            t = this.data,
                            o = t.source,
                            n = t.thumb || t.file;
                        return t.thumbIsAbsolute && n ? n : r.normalizeUrl(o.baseurl, o.path, n || "") + "?_tmst=" + e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "fileURL", {
                    get: function() {
                        var e = this.data.name,
                            t = this.data,
                            o = t.file,
                            n = t.source;
                        return void 0 !== o && (e = o), t.fileIsAbsolute && e ? e : r.normalizeUrl(n.baseurl, n.path, e || "")
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "time", {
                    get: function() {
                        var e = this.data.changed;
                        return e && ("number" == typeof e ? new Date(e).toLocaleString() : e) || ""
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "uniqueHashKey", {
                    get: function() {
                        var e = this.data;
                        return [e.sourceName, e.name, e.file, this.time, e.thumb].join("_").toLowerCase().replace(/[^0-9a-z\-.]/g, "-")
                    },
                    enumerable: !1,
                    configurable: !0
                }), e
            }();
        t.FileBrowserItem = n
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stateListeners = void 0;
        var r = o(21),
            n = o(2),
            i = o(35),
            a = o(7),
            s = r.ITEM_CLASS + "_active_true";
        t.stateListeners = function() {
            var e = this,
                t = this,
                o = t.state,
                l = t.files,
                c = t.create,
                u = t.options;
            o.on(["change.currentPath", "change.currentSource"], this.async.debounce((function() {
                e.loadTree()
            }), this.defaultTimeout)).on("beforeChange.activeElements", (function() {
                o.activeElements.forEach((function(t) {
                    var o = e.elementsMap[t.uniqueHashKey].elm;
                    o && o.classList.remove(s)
                }))
            })).on("change.activeElements", (function() {
                e.e.fire("changeSelection"), o.activeElements.forEach((function(t) {
                    var o = e.elementsMap[t.uniqueHashKey].elm;
                    o && o.classList.add(s)
                }))
            })).on("change.view", (function() {
                l.classList.remove(r.F_CLASS + "__files_view_tiles"), l.classList.remove(r.F_CLASS + "__files_view_list"), l.classList.add(r.F_CLASS + "__files_view_" + o.view), e.storage.set(r.F_CLASS + "_view", o.view)
            })).on("change.sortBy", (function() {
                e.storage.set(r.F_CLASS + "_sortby", o.sortBy)
            })).on("change.elements", this.async.debounce((function() {
                n.Dom.detach(l), o.elements.length ? o.elements.forEach((function(t) {
                    e.files.appendChild(function(t) {
                        var o = t.uniqueHashKey;
                        if (e.elementsMap[o]) return e.elementsMap[o].elm;
                        var r = c.fromHTML(u.getThumbTemplate.call(e, t, t.source, t.sourceName.toString()));
                        return r.dataset.key = o, e.elementsMap[o] = {
                            item: t,
                            elm: r
                        }, e.elementsMap[o].elm
                    }(t))
                })) : l.appendChild(c.div(r.F_CLASS + "_no_files", e.i18n("There are no files")))
            }), this.defaultTimeout)).on("change.sources", this.async.debounce((function() {
                n.Dom.detach(e.tree), Object.keys(o.sources).forEach((function(t) {
                    var n = o.sources[t];
                    if (t && "default" !== t && e.tree.appendChild(c.div(r.F_CLASS + "__source-title", t)), n.folders.forEach((function(o) {
                            var s, l = c.a(r.F_CLASS + "__tree-item", {
                                    draggable: "draggable",
                                    href: "javascript:void(0)",
                                    "data-path": i.normalizePath(n.path, o + "/"),
                                    "data-name": o,
                                    "data-source": t,
                                    "data-source-path": n.path
                                }, c.span(r.F_CLASS + "__tree-item-title", o)),
                                d = function(r) {
                                    return function(a) {
                                        e.e.fire(r + ".filebrowser", {
                                            name: o,
                                            path: i.normalizePath(n.path + "/"),
                                            source: t
                                        }), a.stopPropagation()
                                    }
                                };
                            e.e.on(l, "click", d("openFolder")), e.tree.appendChild(l), ".." !== o && "." !== o && (u.renameFolder && e.dataProvider.canI("FolderRename") && ((s = a.Button(e, {
                                icon: {
                                    name: "pencil"
                                },
                                name: "rename",
                                tooltip: "Rename",
                                size: "tiny"
                            })).onAction(d("renameFolder")), l.appendChild(s.container)), u.deleteFolder && e.dataProvider.canI("FolderRemove") && ((s = a.Button(e, {
                                icon: {
                                    name: "cancel"
                                },
                                name: "remove",
                                tooltip: "Delete",
                                size: "tiny"
                            })).onAction(d("removeFolder")), l.appendChild(s.container)))
                        })), u.createNewFolder && e.dataProvider.canI("FolderCreate")) {
                        var s = a.Button(e, "plus", "Add folder", "secondary");
                        s.onAction((function() {
                            e.e.fire("addFolder", {
                                path: i.normalizePath(n.path + "/"),
                                source: t
                            })
                        })), e.tree.appendChild(s.container)
                    }
                }))
            }), this.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0),
            n = o(16),
            i = o(2),
            a = o(21),
            s = o(1),
            l = o(66),
            c = o(7),
            u = o(67),
            d = a.F_CLASS + "_preview_",
            p = function(e, t) {
                return void 0 === e && (e = "next"), void 0 === t && (t = "right"), '<a href="javascript:void(0)" class="' + d + "navigation " + d + "navigation-" + e + '">' + c.Icon.get("angle-" + t) + "</a>"
            };
        t.default = function(e) {
            if (!e.o.contextMenu) return function() {};
            var t = l.makeContextMenu(e);
            return function(o) {
                var l = u.getItem(o.target, e.dialog.container);
                if (l) {
                    var c = l,
                        f = e.options,
                        h = function(e) {
                            return s.attr(c, e) || ""
                        };
                    return e.async.setTimeout((function() {
                        t.show(o.clientX, o.clientY, [!("1" === h("data-is-file") || !f.editImage || !e.dataProvider.canI("ImageResize") && !e.dataProvider.canI("ImageCrop")) && {
                            icon: "pencil",
                            title: "Edit",
                            exec: function() {
                                return e.openImageEditor(h("href"), h("data-name"), h("data-path"), h("data-source"))
                            }
                        }, !!e.dataProvider.canI("FileRename") && {
                            icon: "italic",
                            title: "Rename",
                            exec: function() {
                                return r.__awaiter(void 0, void 0, void 0, (function() {
                                    return r.__generator(this, (function(t) {
                                        return e.e.fire("fileRename.filebrowser", h("data-name"), h("data-path"), h("data-source")), [2]
                                    }))
                                }))
                            }
                        }, !!e.dataProvider.canI("FileRemove") && {
                            icon: "bin",
                            title: "Delete",
                            exec: function() {
                                return r.__awaiter(void 0, void 0, void 0, (function() {
                                    return r.__generator(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, e.deleteFile(h("data-name"), h("data-source"))];
                                            case 1:
                                                return t.sent(), e.state.activeElements = [], [4, e.loadTree()];
                                            case 2:
                                                return t.sent(), [2]
                                        }
                                    }))
                                }))
                            }
                        }, !!f.preview && {
                            icon: "eye",
                            title: "Preview",
                            exec: function() {
                                var t = new n.Dialog({
                                        fullsize: e.o.fullsize,
                                        language: e.o.language,
                                        buttons: ["fullsize", "dialog.close"]
                                    }),
                                    o = e.c.div(a.F_CLASS + "_preview", a.ICON_LOADER),
                                    r = e.c.div(a.F_CLASS + "_preview_box"),
                                    l = e.c.fromHTML(p()),
                                    u = e.c.fromHTML(p("prev", "left")),
                                    m = function(n) {
                                        var s = e.c.element("img");
                                        s.setAttribute("src", n);
                                        var d = function() {
                                            var n;
                                            e.isInDestruct || (e.e.off(s, "load"), i.Dom.detach(o), f.showPreviewNavigation && (i.Dom.prevWithClass(c, a.ITEM_CLASS) && o.appendChild(u), i.Dom.nextWithClass(c, a.ITEM_CLASS) && o.appendChild(l)), o.appendChild(r), r.appendChild(s), t.setPosition(), null === (n = null == e ? void 0 : e.events) || void 0 === n || n.fire("previewOpenedAndLoaded"))
                                        };
                                        e.e.on(s, "load", d), s.complete && d()
                                    };
                                e.e.on([l, u], "click", (function() {
                                    if (!(c = this.classList.contains(d + "navigation-next") ? i.Dom.nextWithClass(c, a.ITEM_CLASS) : i.Dom.prevWithClass(c, a.ITEM_CLASS))) throw s.error("Need element");
                                    i.Dom.detach(o), i.Dom.detach(r), o.innerHTML = a.ICON_LOADER, m(h("href"))
                                })), e.e.on("beforeDestruct", (function() {
                                    t.destruct()
                                })), t.container.classList.add(a.F_CLASS + "_preview_dialog"), t.setContent(o), t.setPosition(), t.open(), m(h("href")), e.events.on("beforeDestruct", (function() {
                                    t.destruct()
                                })).fire("previewOpened")
                            }
                        }, {
                            icon: "upload",
                            title: "Download",
                            exec: function() {
                                var t = h("href");
                                t && e.ow.open(t)
                            }
                        }])
                    }), e.defaultTimeout), null == e || e.e.on("beforeDestruct", (function() {
                        t.destruct()
                    })), o.stopPropagation(), o.preventDefault(), !1
                }
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.selfListeners = void 0;
        var r = o(16),
            n = o(5),
            i = o(1),
            a = o(40);
        t.selfListeners = function() {
            var e = this,
                t = this.state,
                o = this;
            o.e.on("view.filebrowser", (function(e) {
                e !== t.view && (t.view = e)
            })).on("sort.filebrowser", (function(e) {
                e !== t.sortBy && (t.sortBy = e, o.loadItems())
            })).on("filter.filebrowser", (function(e) {
                e !== t.filterWord && (t.filterWord = e, o.loadItems())
            })).on("openFolder.filebrowser", (function(e) {
                var t;
                t = ".." === e.name ? e.path.split("/").filter((function(e) {
                    return e.length
                })).slice(0, -1).join("/") : i.normalizePath(e.path, e.name), o.state.currentPath = t, o.state.currentSource = "." === e.name ? a.DEFAULT_SOURCE_NAME : e.source
            })).on("removeFolder.filebrowser", (function(e) {
                r.Confirm(o.i18n("Are you sure?"), o.i18n("Delete"), (function(t) {
                    t && o.dataProvider.folderRemove(e.path, e.name, e.source).then((function(e) {
                        var t;
                        if ((null === (t = o.o.folderRemove) || void 0 === t ? void 0 : t.process) && (e = o.o.folderRemove.process.call(o, e)), !o.o.isSuccess(e)) throw i.error(o.o.getMessage(e));
                        o.state.activeElements = [], o.status(o.o.getMessage(e), !0), o.loadTree()
                    })).catch(o.status)
                })).bindDestruct(o)
            })).on("renameFolder.filebrowser", (function(e) {
                r.Prompt(o.i18n("Enter new name"), o.i18n("Rename"), (function(t) {
                    if (!n.isValidName(t)) return o.status(o.i18n("Enter new name")), !1;
                    o.dataProvider.folderRename(e.path, e.name, t, e.source).then((function(e) {
                        if (o.o.folderRename && o.o.folderRename.process && (e = o.o.folderRename.process.call(o, e)), !o.o.isSuccess(e)) throw i.error(o.o.getMessage(e));
                        o.state.activeElements = [], o.status(o.o.getMessage(e), !0), o.loadTree()
                    })).catch(o.status)
                }), o.i18n("type name"), e.name).bindDestruct(o)
            })).on("addFolder.filebrowser", (function(e) {
                r.Prompt(o.i18n("Enter Directory name"), o.i18n("Create directory"), (function(t) {
                    o.dataProvider.createFolder(t, e.path, e.source).then((function(e) {
                        return o.o.isSuccess(e) ? o.loadTree() : o.status(o.o.getMessage(e)), e
                    }), o.status)
                }), o.i18n("type name")).bindDestruct(o)
            })).on("fileRemove.filebrowser", (function() {
                o.state.activeElements.length && r.Confirm(o.i18n("Are you sure?"), "", (function(e) {
                    if (e) {
                        var t = [];
                        o.state.activeElements.forEach((function(e) {
                            t.push(o.deleteFile(e.file || e.name || "", e.sourceName))
                        })), o.state.activeElements = [], Promise.all(t).then((function() {
                            return o.loadTree()
                        }))
                    }
                })).bindDestruct(o)
            })).on("edit.filebrowser", (function() {
                if (1 === o.state.activeElements.length) {
                    var t = e.state.activeElements[0];
                    o.openImageEditor(t.fileURL, t.file || "", t.path, t.sourceName)
                }
            })).on("fileRename.filebrowser", (function(t, a, s) {
                1 === o.state.activeElements.length && r.Prompt(o.i18n("Enter new name"), o.i18n("Rename"), (function(e) {
                    if (!n.isValidName(e)) return o.status(o.i18n("Enter new name")), !1;
                    o.dataProvider.fileRename(a, t, e, s).then((function(e) {
                        if (o.o.fileRename && o.o.fileRename.process && (e = o.o.fileRename.process.call(o, e)), !o.o.isSuccess(e)) throw i.error(o.o.getMessage(e));
                        o.state.activeElements = [], o.status(o.o.getMessage(e), !0), o.loadItems()
                    })).catch(o.status)
                }), o.i18n("type name"), t).bindDestruct(e)
            })).on("update.filebrowser", (function() {
                o.loadTree()
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ImageEditor = void 0;
        var r = o(0);
        o(196);
        var n = o(8),
            i = o(4),
            a = o(9),
            s = o(16),
            l = o(1),
            c = o(2),
            u = o(15),
            d = o(197);
        i.Config.prototype.imageeditor = {
            min_width: 20,
            min_height: 20,
            closeAfterSave: !1,
            width: "85%",
            height: "85%",
            crop: !0,
            resize: !0,
            resizeUseRatio: !0,
            resizeMinWidth: 20,
            resizeMinHeight: 20,
            cropUseRatio: !0,
            cropDefaultWidth: "70%",
            cropDefaultHeight: "70%"
        };
        var p = "jodit-image-editor",
            f = "resize",
            h = function(e) {
                function t(t) {
                    var o = e.call(this, t) || this;
                    o.resizeUseRatio = !0, o.cropUseRatio = !0, o.clicked = !1, o.start_x = 0, o.start_y = 0, o.top_x = 0, o.top_y = 0, o.width = 0, o.height = 0, o.activeTab = f, o.naturalWidth = 0, o.naturalHeight = 0, o.ratio = 0, o.new_h = 0, o.new_w = 0, o.diff_x = 0, o.diff_y = 0, o.cropBox = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    }, o.resizeBox = {
                        w: 0,
                        h: 0
                    }, o.calcValueByPercent = function(e, t) {
                        var o, r = t.toString(),
                            n = parseFloat(e.toString());
                        return (o = /^[-+]?[0-9]+(px)?$/.exec(r)) ? parseInt(r, 10) : (o = /^([-+]?[0-9.]+)%$/.exec(r)) ? Math.round(n * (parseFloat(o[1]) / 100)) : n || 0
                    }, o.calcCropBox = function() {
                        var e = .8 * o.crop_box.parentNode.offsetWidth,
                            t = .8 * o.crop_box.parentNode.offsetHeight,
                            r = e,
                            n = t;
                        e > o.naturalWidth && t > o.naturalHeight ? (r = o.naturalWidth, n = o.naturalHeight) : o.ratio > e / t ? (r = e, n = o.naturalHeight * (e / o.naturalWidth)) : (r = o.naturalWidth * (t / o.naturalHeight), n = t), l.css(o.crop_box, {
                            width: r,
                            height: n
                        })
                    }, o.showCrop = function() {
                        if (o.cropImage) {
                            o.calcCropBox();
                            var e = o.cropImage.offsetWidth || o.image.offsetWidth || o.image.naturalWidth;
                            o.new_w = o.calcValueByPercent(e, o.o.cropDefaultWidth);
                            var t = o.cropImage.offsetHeight || o.image.offsetHeight || o.image.naturalHeight;
                            o.new_h = o.cropUseRatio ? o.new_w / o.ratio : o.calcValueByPercent(t, o.o.cropDefaultHeight), l.css(o.cropHandler, {
                                backgroundImage: "url(" + l.attr(o.cropImage, "src") + ")",
                                width: o.new_w,
                                height: o.new_h,
                                left: e / 2 - o.new_w / 2,
                                top: t / 2 - o.new_h / 2
                            }), o.j.e.fire(o.cropHandler, "updatesize")
                        }
                    }, o.updateCropBox = function() {
                        if (o.cropImage) {
                            var e = o.cropImage.offsetWidth / o.naturalWidth,
                                t = o.cropImage.offsetHeight / o.naturalHeight;
                            o.cropBox.x = l.css(o.cropHandler, "left") / e, o.cropBox.y = l.css(o.cropHandler, "top") / t, o.cropBox.w = o.cropHandler.offsetWidth / e, o.cropBox.h = o.cropHandler.offsetHeight / t, o.sizes.textContent = o.cropBox.w.toFixed(0) + "x" + o.cropBox.h.toFixed(0)
                        }
                    }, o.updateResizeBox = function() {
                        o.resizeBox.w = o.image.offsetWidth || o.naturalWidth, o.resizeBox.h = o.image.offsetHeight || o.naturalHeight
                    }, o.setHandlers = function() {
                        var e = o,
                            t = l.refs(o.editor),
                            r = t.widthInput,
                            n = t.heightInput;
                        e.j.e.on([e.editor.querySelector(".jodit_bottomright"), e.cropHandler], "mousedown." + p, (function(t) {
                            e.target = t.target, t.preventDefault(), t.stopImmediatePropagation(), e.clicked = !0, e.start_x = t.clientX, e.start_y = t.clientY, "crop" === e.activeTab ? (e.top_x = l.css(e.cropHandler, "left"), e.top_y = l.css(e.cropHandler, "top"), e.width = e.cropHandler.offsetWidth, e.height = e.cropHandler.offsetHeight) : (e.width = e.image.offsetWidth, e.height = e.image.offsetHeight)
                        })).off(o.j.ow, "." + p + e.j.id).on(o.j.ow, "mousemove." + p + e.j.id, o.j.async.throttle((function(t) {
                            e.clicked && (e.diff_x = t.clientX - e.start_x, e.diff_y = t.clientY - e.start_y, e.activeTab === f && e.resizeUseRatio || "crop" === e.activeTab && e.cropUseRatio ? e.diff_x ? (e.new_w = e.width + e.diff_x, e.new_h = Math.round(e.new_w / e.ratio)) : (e.new_h = e.height + e.diff_y, e.new_w = Math.round(e.new_h * e.ratio)) : (e.new_w = e.width + e.diff_x, e.new_h = e.height + e.diff_y), e.activeTab === f ? (e.new_w > e.o.resizeMinWidth && (l.css(e.image, "width", e.new_w + "px"), r.value = e.new_w.toString()), e.new_h > e.o.resizeMinHeight && (l.css(e.image, "height", e.new_h + "px"), n.value = e.new_h.toString()), o.j.e.fire(e.resizeHandler, "updatesize")) : (e.target !== e.cropHandler ? (e.top_x + e.new_w > e.cropImage.offsetWidth && (e.new_w = e.cropImage.offsetWidth - e.top_x), e.top_y + e.new_h > e.cropImage.offsetHeight && (e.new_h = e.cropImage.offsetHeight - e.top_y), l.css(e.cropHandler, {
                                width: e.new_w,
                                height: e.new_h
                            })) : (e.top_x + e.diff_x + e.cropHandler.offsetWidth > e.cropImage.offsetWidth && (e.diff_x = e.cropImage.offsetWidth - e.top_x - e.cropHandler.offsetWidth), l.css(e.cropHandler, "left", e.top_x + e.diff_x), e.top_y + e.diff_y + e.cropHandler.offsetHeight > e.cropImage.offsetHeight && (e.diff_y = e.cropImage.offsetHeight - e.top_y - e.cropHandler.offsetHeight), l.css(e.cropHandler, "top", e.top_y + e.diff_y)), o.j.e.fire(e.cropHandler, "updatesize")), t.stopImmediatePropagation())
                        }), 5)).on(o.j.ow, "resize." + p, (function() {
                            o.j.e.fire(e.resizeHandler, "updatesize"), e.showCrop(), o.j.e.fire(e.cropHandler, "updatesize")
                        })).on(o.j.ow, "mouseup." + p + " " + e.j.id + " keydown." + p + e.j.id, (function(t) {
                            e.clicked && (e.clicked = !1, t.stopImmediatePropagation())
                        })), l.$$(".jodit-button-group", e.editor).forEach((function(t) {
                            var o = t.querySelector("input");
                            e.j.e.on(t, "click", (function() {
                                o.checked = !o.checked, e.j.e.fire(o, "change")
                            }))
                        })), e.j.e.on(o.editor, "click." + p, (function(t) {
                            var o = c.Dom.closest(t.target, (function(e) {
                                    return c.Dom.isElement(e) && e.classList.contains(p + "__slider-title")
                                }), e.editor),
                                r = null == o ? void 0 : o.parentElement;
                            if (r) {
                                l.$$("." + p + "__slider,." + p + "__area", e.editor).forEach((function(e) {
                                    return e.classList.remove(p + "_active")
                                })), r.classList.add(p + "_active"), e.activeTab = l.attr(r, "-area") || f;
                                var n = e.editor.querySelector("." + p + "__area." + p + "__area_" + e.activeTab);
                                n && n.classList.add(p + "_active"), "crop" === e.activeTab && e.showCrop()
                            }
                        })).on(r, "change." + p + " mousedown." + p + " keydown." + p, e.j.async.debounce((function() {
                            var t, i = parseInt(r.value, 10);
                            i > e.o.min_width && (l.css(e.image, "width", i + "px"), e.resizeUseRatio && (t = Math.round(i / e.ratio)) > e.o.min_height && (l.css(e.image, "height", t + "px"), n.value = t.toString())), o.j.e.fire(e.resizeHandler, "updatesize")
                        }), 200)).on(n, "change." + p + " mousedown." + p + " keydown." + p, e.j.async.debounce((function() {
                            if (!o.isDestructed) {
                                var t, i = parseInt(n.value, 10);
                                i > e.o.min_height && (l.css(e.image, "height", i + "px"), e.resizeUseRatio && (t = Math.round(i * e.ratio)) > e.o.min_width && (l.css(e.image, "width", t + "px"), r.value = t.toString())), o.j.e.fire(e.resizeHandler, "updatesize")
                            }
                        }), 200));
                        var i = l.refs(o.editor),
                            a = i.keepAspectRatioResize,
                            u = i.keepAspectRatioCrop;
                        a && a.addEventListener("change", (function() {
                            o.resizeUseRatio = a.checked
                        })), u && u.addEventListener("change", (function() {
                            o.cropUseRatio = u.checked
                        })), e.j.e.on(e.resizeHandler, "updatesize", (function() {
                            l.css(e.resizeHandler, {
                                top: 0,
                                left: 0,
                                width: (e.image.offsetWidth || e.naturalWidth) + "px",
                                height: (e.image.offsetHeight || e.naturalHeight) + "px"
                            }), o.updateResizeBox()
                        })).on(e.cropHandler, "updatesize", (function() {
                            if (e.cropImage) {
                                var t = l.css(e.cropHandler, "left"),
                                    o = l.css(e.cropHandler, "top"),
                                    r = e.cropHandler.offsetWidth,
                                    n = e.cropHandler.offsetHeight;
                                0 > t && (t = 0), 0 > o && (o = 0), t + r > e.cropImage.offsetWidth && (r = e.cropImage.offsetWidth - t, e.cropUseRatio && (n = r / e.ratio)), o + n > e.cropImage.offsetHeight && (n = e.cropImage.offsetHeight - o, e.cropUseRatio && (r = n * e.ratio)), l.css(e.cropHandler, {
                                    width: r,
                                    height: n,
                                    left: t,
                                    top: o,
                                    backgroundPosition: -t - 1 + "px " + (-o - 1) + "px",
                                    backgroundSize: e.cropImage.offsetWidth + "px " + e.cropImage.offsetHeight + "px"
                                }), e.updateCropBox()
                            }
                        })), Object.values(e.buttons).forEach((function(t) {
                            t.onAction((function() {
                                var i = {
                                    action: e.activeTab,
                                    box: "resize" === e.activeTab ? e.resizeBox : e.cropBox
                                };
                                switch (t) {
                                    case e.buttons.saveas:
                                        s.Prompt(e.j.i18n("Enter new name"), e.j.i18n("Save in new file"), (function(t) {
                                            if (!l.trim(t)) return s.Alert(e.j.i18n("The name should not be empty")).bindDestruct(o.j), !1;
                                            e.onSave(t, i, e.hide, (function(t) {
                                                s.Alert(t.message).bindDestruct(e.j)
                                            }))
                                        })).bindDestruct(o.j);
                                        break;
                                    case e.buttons.save:
                                        e.onSave(void 0, i, e.hide, (function(t) {
                                            s.Alert(t.message).bindDestruct(e.j)
                                        }));
                                        break;
                                    case e.buttons.reset:
                                        "resize" === e.activeTab ? (l.css(e.image, {
                                            width: null,
                                            height: null
                                        }), r.value = e.naturalWidth.toString(), n.value = e.naturalHeight.toString(), e.j.e.fire(e.resizeHandler, "updatesize")) : e.showCrop()
                                }
                            }))
                        }))
                    }, o.options = t && t.o && t.o.imageeditor ? t.o.imageeditor : i.Config.defaultOptions.imageeditor;
                    var r = o.options;
                    o.resizeUseRatio = r.resizeUseRatio, o.cropUseRatio = r.cropUseRatio, o.buttons = {
                        reset: u.Button(o.j, "update", "Reset"),
                        save: u.Button(o.j, "save", "Save"),
                        saveas: u.Button(o.j, "save", "Save as ...")
                    }, o.activeTab = r.resize ? "resize" : "crop", o.editor = d.form(o.j, o.options);
                    var n = l.refs(o.editor),
                        a = n.cropBox;
                    return o.resize_box = n.resizeBox, o.crop_box = a, o.sizes = o.editor.querySelector("." + p + "__area." + p + "__area_crop .jodit-image-editor__sizes"), o.resizeHandler = o.editor.querySelector("." + p + "__resizer"), o.cropHandler = o.editor.querySelector("." + p + "__croper"), o.dialog = new s.Dialog({
                        fullsize: o.j.o.fullsize,
                        globalFullSize: o.j.o.globalFullSize,
                        language: o.j.o.language,
                        buttons: ["fullsize", "dialog.close"]
                    }), o.dialog.setContent(o.editor), o.dialog.setSize(o.o.width, o.o.height), o.dialog.setHeader([o.buttons.reset, o.buttons.save, o.buttons.saveas]), o.setHandlers(), o
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "o", {
                    get: function() {
                        return this.options
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.hide = function() {
                    this.dialog.close()
                }, t.prototype.open = function(e, t) {
                    var o = this;
                    return this.j.async.promise((function(r) {
                        var n = (new Date).getTime();
                        o.image = o.j.c.element("img"), l.$$("img,.jodit-icon_loader", o.resize_box).forEach(c.Dom.safeRemove), l.$$("img,.jodit-icon_loader", o.crop_box).forEach(c.Dom.safeRemove), l.css(o.cropHandler, "background", "transparent"), o.onSave = t, o.resize_box.appendChild(o.j.c.element("i", {
                            class: "jodit-icon_loader"
                        })), o.crop_box.appendChild(o.j.c.element("i", {
                            class: "jodit-icon_loader"
                        })), /\?/.test(e) ? e += "&_tst=" + n : e += "?_tst=" + n, o.image.setAttribute("src", e), o.dialog.open();
                        var i = l.refs(o.editor),
                            a = i.widthInput,
                            s = i.heightInput,
                            u = function() {
                                o.isDestructed || (o.image.removeEventListener("load", u), o.naturalWidth = o.image.naturalWidth, o.naturalHeight = o.image.naturalHeight, a.value = o.naturalWidth.toString(), s.value = o.naturalHeight.toString(), o.ratio = o.naturalWidth / o.naturalHeight, o.resize_box.appendChild(o.image), o.cropImage = o.image.cloneNode(!0), o.crop_box.appendChild(o.cropImage), l.$$(".jodit-icon_loader", o.editor).forEach(c.Dom.safeRemove), "crop" === o.activeTab && o.showCrop(), o.j.e.fire(o.resizeHandler, "updatesize"), o.j.e.fire(o.cropHandler, "updatesize"), o.dialog.setPosition(), o.j.e.fire("afterImageEditor"), r(o.dialog))
                            };
                        o.image.addEventListener("load", u), o.image.complete && u()
                    }))
                }, t.prototype.destruct = function() {
                    this.isDestructed || (this.dialog && !this.dialog.isInDestruct && this.dialog.destruct(), c.Dom.safeRemove(this.editor), this.j.e && (this.j.e.off(this.ow, "." + p), this.j.e.off("." + p)), e.prototype.destruct.call(this))
                }, r.__decorate([n.default], t.prototype, "hide", null), r.__decorate([n.default], t.prototype, "open", null), t
            }(a.ViewComponent);
        t.ImageEditor = h
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.form = void 0;
        var r = o(7),
            n = "jodit-image-editor",
            i = r.Icon.get.bind(r.Icon),
            a = function(e, t) {
                return void 0 === t && (t = "jodti-image-editor_active"), e ? t : ""
            };
        t.form = function(e, t) {
            var o = e.i18n.bind(e),
                r = function(e, t, r) {
                    return void 0 === r && (r = !0), '<div class="jodit-form__group">\n\t\t<label>' + o(e) + '</label>\n\t\t<div class="jodit-button-group jodit-button_radio_group">\n\t\t\t<input ' + a(r, "checked") + ' data-ref="' + t + '" type="checkbox" class="jodit-input"/>\n\n\t\t\t<button type="button" data-yes="1" class="jodit-ui-button jodit-ui-button_status_success">' + o("Yes") + '</button>\n\n\t\t\t<button type="button" class="jodit-ui-button jodit-ui-button_status_danger">' + o("No") + "</button>\n\t\t</div>\n\t</div>"
                };
            return e.create.fromHTML('<form class="' + n + ' jodit-properties">\n\t\t<div class="jodit-grid jodit-grid_xs-column">\n\t\t\t<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">\n\t\t\t' + (t.resize ? '<div class="' + n + "__area " + n + "__area_resize " + n + '_active">\n\t\t\t\t\t\t\t<div data-ref="resizeBox" class="' + n + '__box"></div>\n\t\t\t\t\t\t\t<div class="' + n + '__resizer">\n\t\t\t\t\t\t\t\t<i class="jodit_bottomright"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>' : "") + "\n\t\t\t" + (t.crop ? '<div class="' + n + "__area " + n + "__area_crop " + a(!t.resize) + '">\n\t\t\t\t\t\t\t<div data-ref="cropBox" class="' + n + '__box">\n\t\t\t\t\t\t\t\t<div class="' + n + '__croper">\n\t\t\t\t\t\t\t\t\t<i class="jodit_bottomright"></i>\n\t\t\t\t\t\t\t\t\t<i class="' + n + '__sizes"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>' : "") + '\n\t\t\t</div>\n\t\t\t<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">\n\t\t\t' + (t.resize ? '<div data-area="resize" class="' + n + "__slider " + n + '_active">\n\t\t\t\t\t\t\t<div class="' + n + '__slider-title">\n\t\t\t\t\t\t\t\t' + i("resize") + "\n\t\t\t\t\t\t\t\t" + o("Resize") + '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="' + n + '__slider-content">\n\t\t\t\t\t\t\t\t<div class="jodit-form__group">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t' + o("Width") + '\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input type="number" data-ref="widthInput" class="jodit-input"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="jodit-form__group">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t' + o("Height") + '\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input type="number" data-ref="heightInput" class="jodit-input"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t' + r("Keep Aspect Ratio", "keepAspectRatioResize") + "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>" : "") + "\n\t\t\t" + (t.crop ? '<div data-area="crop" class="' + n + "__slider " + a(!t.resize) + '\'">\n\t\t\t\t\t\t\t<div class="' + n + '__slider-title">\n\t\t\t\t\t\t\t\t' + i("crop") + "\n\t\t\t\t\t\t\t\t" + o("Crop") + '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="' + n + '__slider-content">\n\t\t\t\t\t\t\t\t' + r("Keep Aspect Ratio", "keepAspectRatioCrop") + "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>" : "") + "\n\t\t\t</div>\n\t\t</div>\n\t</form>")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Observer = void 0;
        var r = o(0),
            n = o(4),
            i = o(9),
            a = o(68),
            s = o(199),
            l = o(200),
            c = o(14);
        n.Config.prototype.observer = {
            timeout: 100
        };
        var u = function(e) {
            function t(t) {
                var o = e.call(this, t) || this;
                return o.stack = new s.Stack, o.snapshot = new a.Snapshot(o.j), o.updateTick = 0, t.e.on("afterAddPlace.observer", (function() {
                    o.isInDestruct || (o.startValue = o.snapshot.make(), t.events.on("internalChange", (function() {
                        o.startValue = o.snapshot.make()
                    })).on(t.editor, ["changeSelection", "selectionstart", "selectionchange", "mousedown", "mouseup", "keydown", "keyup"].map((function(e) {
                        return e + ".observer"
                    })).join(" "), (function() {
                        o.startValue.html === o.j.getNativeEditorValue() && (o.startValue = o.snapshot.make())
                    })).on(o, "change.observer", o.onChange))
                })), o
            }
            return r.__extends(t, e), Object.defineProperty(t.prototype, "startValue", {
                get: function() {
                    return this.__startValue
                },
                set: function(e) {
                    this.__startValue = e
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.upTick = function() {
                this.updateTick += 1
            }, t.prototype.onChange = function() {
                this.snapshot.isBlocked || this.updateStack()
            }, t.prototype.updateStack = function(e) {
                void 0 === e && (e = !1);
                var t = this.snapshot.make();
                if (!a.Snapshot.equal(t, this.startValue)) {
                    var o = new l.Command(this.startValue, t, this, this.updateTick);
                    if (e) {
                        var r = this.stack.current();
                        r && this.updateTick === r.tick && this.stack.replace(o)
                    } else this.stack.push(o);
                    this.startValue = t, this.fireChangeStack()
                }
            }, t.prototype.redo = function() {
                this.stack.redo() && (this.startValue = this.snapshot.make(), this.fireChangeStack())
            }, t.prototype.undo = function() {
                this.stack.undo() && (this.startValue = this.snapshot.make(), this.fireChangeStack())
            }, t.prototype.clear = function() {
                this.startValue = this.snapshot.make(), this.stack.clear(), this.fireChangeStack()
            }, t.prototype.replaceSnapshot = function() {
                this.updateStack(!0)
            }, t.prototype.fireChangeStack = function() {
                var e;
                this.j && !this.j.isInDestruct && (null === (e = this.j.events) || void 0 === e || e.fire("changeStack"))
            }, t.prototype.destruct = function() {
                this.j.events && this.j.e.off(".observer"), this.snapshot.destruct(), e.prototype.destruct.call(this)
            }, r.__decorate([c.debounce()], t.prototype, "onChange", null), t
        }(i.ViewComponent);
        t.Observer = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Stack = void 0;
        var r = function() {
            function e() {
                this.commands = [], this.stackPosition = -1
            }
            return Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this.commands.length
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.clearRedo = function() {
                this.commands.length = this.stackPosition + 1
            }, e.prototype.clear = function() {
                this.commands.length = 0, this.stackPosition = -1
            }, e.prototype.push = function(e) {
                this.clearRedo(), this.commands.push(e), this.stackPosition += 1
            }, e.prototype.replace = function(e) {
                this.commands[this.stackPosition] = e
            }, e.prototype.current = function() {
                return this.commands[this.stackPosition]
            }, e.prototype.undo = function() {
                return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, !0)
            }, e.prototype.redo = function() {
                return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), !0)
            }, e.prototype.canUndo = function() {
                return this.stackPosition >= 0
            }, e.prototype.canRedo = function() {
                return this.commands.length - 1 > this.stackPosition
            }, e
        }();
        t.Stack = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Command = void 0;
        var r = function() {
            function e(e, t, o, r) {
                this.oldValue = e, this.newValue = t, this.observer = o, this.tick = r
            }
            return e.prototype.undo = function() {
                this.observer.snapshot.restore(this.oldValue)
            }, e.prototype.redo = function() {
                this.observer.snapshot.restore(this.newValue)
            }, e
        }();
        t.Command = r
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ProgressBar = void 0;
        var r = o(0);
        o(202);
        var n = o(9),
            i = o(2),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.progressBar = t.j.c.div("jodit-progressbar", t.j.c.div()), t
                }
                return r.__extends(t, e), t.prototype.show = function() {
                    return (this.j.workplace || this.j.container).appendChild(this.progressBar), this
                }, t.prototype.hide = function() {
                    return i.Dom.safeRemove(this.progressBar), this
                }, t.prototype.progress = function(e) {
                    return this.progressBar.style.width = e.toFixed(2) + "%", this
                }, t.prototype.destruct = function() {
                    return this.hide(), e.prototype.destruct.call(this)
                }, t
            }(n.ViewComponent);
        t.ProgressBar = a
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(69), t), r.__exportStar(o(205), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ApplyStyle = void 0;
        var r, n = o(0),
            i = o(8),
            a = o(5),
            s = o(2),
            l = o(1);
        ! function(e) {
            e.UNWRAP = "UNWRAP", e.WRAP = "WRAP"
        }(r || (r = {}));
        var c = function() {
            function e(e, t) {
                this.jodit = e, this.style = t
            }
            return e.prototype.apply = function() {
                var e = this.jodit.selection,
                    t = [];
                if (e.isCollapsed()) {
                    var o = this.jodit.createInside.element("font");
                    e.insertNode(o, !1, !1), e.setCursorIn(o), t = e.save(), this.applyToElement(o), s.Dom.unwrap(o)
                } else t = e.save(), l.normalizeNode(e.area.firstChild), e.wrapInTag(this.applyToElement);
                e.restore(t)
            }, e.prototype.applyToElement = function(e) {
                var t = this,
                    o = this.jodit.selection.area;
                if (!(this.checkSuitableParent(e) || this.checkSuitableChild(e) || this.checkClosestWrapper(e) || this.unwrapChildren(e)) && (this.mode || (this.mode = r.WRAP), this.mode === r.WRAP)) {
                    var n = e;
                    if (this.style.elementIsBlock) {
                        var i = /^(ul|ol|li|td|th|tr|tbody|table)$/i;
                        n = s.Dom.up(e, (function(e) {
                            return !(!e || !s.Dom.isBlock(e, t.jodit.s.win) || !i.test(t.style.element) && i.test(e.nodeName))
                        }), o) || this.wrapUnwrappedText(e)
                    }
                    var a = s.Dom.replace(n, this.style.element, this.jodit.createInside);
                    this.style.elementIsBlock && this.postProcessListElement(a), this.style.options.style && this.style.elementIsDefault && l.css(a, this.style.options.style)
                }
            }, e.prototype.checkSuitableParent = function(e) {
                var t = e.parentNode;
                return !(!t || s.Dom.next(e, this.isNormalNode, t) || s.Dom.prev(e, this.isNormalNode, t) || !this.isSuitableElement(t, !1) || t === this.jodit.s.area || s.Dom.isBlock(t, this.jodit.ew) && !this.style.elementIsBlock || (this.toggleStyles(t), 0))
            }, e.prototype.checkSuitableChild = function(e) {
                var t = e.firstChild;
                return t && this.jodit.s.isMarker(t) && (t = t.nextSibling), !(!t || s.Dom.next(t, this.isNormalNode, e) || s.Dom.prev(t, this.isNormalNode, e) || !this.isSuitableElement(t, !1) || (this.toggleStyles(t), 0))
            }, e.prototype.checkClosestWrapper = function(e) {
                var t = s.Dom.closest(e, this.isSuitableElement, this.jodit.editor);
                if (t) {
                    if (this.style.elementIsBlock) return this.toggleStyles(t), !0;
                    var o = this.jodit.s.createRange();
                    o.setStartBefore(t), o.setEndBefore(e);
                    var r = o.extractContents();
                    r.textContent && l.trim(r.textContent).length || !r.firstChild || s.Dom.unwrap(r.firstChild), t.parentNode && t.parentNode.insertBefore(r, t), o.setStartAfter(e), o.setEndAfter(t);
                    var n = o.extractContents();
                    return n.textContent && l.trim(n.textContent).length || !n.firstChild || s.Dom.unwrap(n.firstChild), s.Dom.after(t, n), this.toggleStyles(t), !0
                }
                return !1
            }, e.prototype.elementHasSameStyle = function(e, t) {
                return Boolean(a.isPlainObject(t) && !s.Dom.isTag(e, "font") && s.Dom.isHTMLElement(e, this.jodit.ew) && l.each(t, (function(t, o) {
                    var r = l.css(e, t, void 0, !0);
                    return !a.isVoid(r) && "" !== r && !a.isVoid(o) && l.normalizeCssValue(t, o).toString().toLowerCase() === r.toString().toLowerCase()
                })))
            }, e.prototype.isSuitableElement = function(e, t) {
                if (void 0 === t && (t = !0), !e) return !1;
                var o = this.style,
                    r = o.element,
                    n = o.elementIsDefault,
                    i = this.elementHasSameStyle(e, o.options.style),
                    a = e.nodeName.toLowerCase() === r;
                return (!n || !t) && a || i && this.isNormalNode(e)
            }, e.prototype.isNormalNode = function(e) {
                return Boolean(null !== e && !s.Dom.isEmptyTextNode(e) && !this.jodit.s.isMarker(e))
            }, e.prototype.toggleStyles = function(e) {
                var t = this,
                    o = this.style.options.style;
                o && e.nodeName.toLowerCase() === this.style.defaultTag && Object.keys(o).forEach((function(n) {
                    t.mode === r.UNWRAP || l.css(e, n) === l.normalizeCssValue(n, o[n]) ? (l.css(e, n, ""), void 0 === t.mode && (t.mode = r.UNWRAP)) : (l.css(e, n, o[n]), void 0 === t.mode && (t.mode = r.WRAP))
                }));
                var n = s.Dom.isBlock(e, this.jodit.ew),
                    i = !(n || l.attr(e, "style") && e.nodeName.toLowerCase() === this.style.defaultTag),
                    a = !i && n && e.nodeName.toLowerCase() === this.style.element;
                (i || a) && (s.Dom.unwrap(e), void 0 === this.mode && (this.mode = r.UNWRAP))
            }, e.prototype.unwrapChildren = function(e) {
                var t, o = this,
                    r = [];
                return e.firstChild && s.Dom.find(e.firstChild, (function(e) {
                    return e && o.isSuitableElement(e) ? (void 0 === t && (t = !0), r.push(e)) : void 0 === t && (t = !1), !1
                }), e, !0), r.forEach(s.Dom.unwrap), Boolean(t)
            }, e.prototype.wrapUnwrappedText = function(e) {
                var t = this.jodit.selection,
                    o = t.area,
                    r = t.win,
                    n = function(e, t) {
                        void 0 === t && (t = "previousSibling");
                        for (var n = e, i = e; i && (n = i, i = i[t] ? i[t] : i.parentNode && !s.Dom.isBlock(i.parentNode, r) && i.parentNode !== o ? i.parentNode : null, !s.Dom.isBlock(i, r)););
                        return n
                    },
                    i = n(e),
                    a = n(e, "nextSibling"),
                    l = this.jodit.s.createRange();
                l.setStartBefore(i), l.setEndAfter(a);
                var c = l.extractContents(),
                    u = this.jodit.createInside.element(this.style.element);
                return u.appendChild(c), l.insertNode(u), this.style.elementIsBlock && (this.postProcessListElement(u), s.Dom.isEmpty(u) && !s.Dom.isTag(u.firstElementChild, "br") && u.appendChild(this.jodit.createInside.element("br"))), u
            }, e.prototype.postProcessListElement = function(e) {
                if (/^(OL|UL)$/i.test(this.style.element) && !s.Dom.isTag(e.firstElementChild, "li")) {
                    var t = s.Dom.replace(e, "li", this.jodit.createInside),
                        o = s.Dom.wrap(t, this.style.element, this.jodit);
                    o && (e = o)
                }
            }, n.__decorate([i.default], e.prototype, "applyToElement", null), n.__decorate([i.default], e.prototype, "isSuitableElement", null), n.__decorate([i.default], e.prototype, "isNormalNode", null), e
        }();
        t.ApplyStyle = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Select = void 0;
        var r = o(0),
            n = o(8),
            i = o(3),
            a = o(3),
            s = o(2),
            l = o(1),
            c = o(69),
            u = function() {
                function e(e) {
                    var t = this;
                    this.jodit = e, this.isMarker = function(e) {
                        return s.Dom.isNode(e, t.win) && s.Dom.isElement(e) && s.Dom.isTag(e, "span") && e.hasAttribute("data-" + i.MARKER_CLASS)
                    }, this.eachSelection = function(e) {
                        var o = t.sel;
                        if (o && o.rangeCount) {
                            var r = o.getRangeAt(0),
                                n = [],
                                i = r.startOffset,
                                c = t.area.childNodes.length,
                                u = r.startContainer === t.area ? t.area.childNodes[c > i ? i : c - 1] : r.startContainer,
                                d = r.endContainer === t.area ? t.area.childNodes[r.endOffset - 1] : r.endContainer;
                            s.Dom.find(u, (function(e) {
                                return !e || e === t.area || s.Dom.isEmptyTextNode(e) || t.isMarker(e) || n.push(e), e === d || e && e.contains && e.contains(d)
                            }), t.area, !0, "nextSibling", !1);
                            var p = function(o) {
                                if (s.Dom.isOrContains(t.j.editor, o, !0)) {
                                    if (o.nodeName.match(/^(UL|OL)$/)) return l.toArray(o.childNodes).forEach(p);
                                    if (s.Dom.isTag(o, "li"))
                                        if (o.firstChild) o = o.firstChild;
                                        else {
                                            var r = t.j.createInside.text(a.INVISIBLE_SPACE);
                                            o.appendChild(r), o = r
                                        } e(o)
                                }
                            };
                            0 === n.length && s.Dom.isEmptyTextNode(u) && n.push(u), n.forEach(p)
                        }
                    }, e.e.on("removeMarkers", (function() {
                        t.removeMarkers()
                    }))
                }
                return Object.defineProperty(e.prototype, "j", {
                    get: function() {
                        return this.jodit
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.errorNode = function(e) {
                    if (!s.Dom.isNode(e, this.win)) throw l.error("Parameter node must be instance of Node")
                }, Object.defineProperty(e.prototype, "area", {
                    get: function() {
                        return this.j.editor
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "win", {
                    get: function() {
                        return this.j.ew
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "doc", {
                    get: function() {
                        return this.j.ed
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "sel", {
                    get: function() {
                        return this.j.o.shadowRoot ? this.j.o.shadowRoot.getSelection() : this.win.getSelection()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "range", {
                    get: function() {
                        var e = this.sel;
                        return e && e.rangeCount ? e.getRangeAt(0) : this.createRange()
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.createRange = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.doc.createRange();
                    return e && this.selectRange(t), t
                }, e.prototype.remove = function() {
                    var e = this.sel,
                        t = this.current();
                    if (e && t)
                        for (var o = 0; e.rangeCount > o; o += 1) e.getRangeAt(o).deleteContents(), e.getRangeAt(o).collapse(!0)
                }, e.prototype.clear = function() {
                    var e, t;
                    (null === (e = this.sel) || void 0 === e ? void 0 : e.rangeCount) && (null === (t = this.sel) || void 0 === t || t.removeAllRanges())
                }, e.prototype.removeNode = function(e) {
                    if (!s.Dom.isOrContains(this.j.editor, e, !0)) throw l.error("Selection.removeNode can remove only editor's children");
                    s.Dom.safeRemove(e), this.j.e.fire("afterRemoveNode", e)
                }, e.prototype.insertCursorAtPoint = function(e, t) {
                    var o = this;
                    this.removeMarkers();
                    try {
                        var r = this.createRange();
                        return function() {
                            if (o.doc.caretPositionFromPoint && (n = o.doc.caretPositionFromPoint(e, t))) r.setStart(n.offsetNode, n.offset);
                            else if (o.doc.caretRangeFromPoint) {
                                var n = o.doc.caretRangeFromPoint(e, t);
                                r.setStart(n.startContainer, n.startOffset)
                            }
                        }(), r.collapse(!0), this.selectRange(r), !0
                    } catch (e) {}
                    return !1
                }, e.prototype.removeMarkers = function() {
                    l.$$("span[data-" + i.MARKER_CLASS + "]", this.area).forEach(s.Dom.safeRemove)
                }, e.prototype.marker = function(e, t) {
                    void 0 === e && (e = !1);
                    var o = null;
                    t && (o = t.cloneRange()).collapse(e);
                    var r = this.j.createInside.span();
                    return r.id = i.MARKER_CLASS + "_" + +new Date + "_" + ("" + Math.random()).slice(2), r.style.lineHeight = "0", r.style.display = "none", r.setAttribute("data-" + i.MARKER_CLASS, e ? "start" : "end"), r.appendChild(this.j.createInside.text(i.INVISIBLE_SPACE)), o && s.Dom.isOrContains(this.area, e ? o.startContainer : o.endContainer) && o.insertNode(r), r
                }, e.prototype.restore = function(e) {
                    var t = this;
                    if (void 0 === e && (e = []), l.isArray(e)) {
                        var o = !1;
                        e.forEach((function(e) {
                            var r = t.area.querySelector("#" + e.endId),
                                n = t.area.querySelector("#" + e.startId);
                            if (n)
                                if (o = t.createRange(), e.collapsed || !r) {
                                    var i = n.previousSibling;
                                    s.Dom.isText(i) ? o.setStart(i, i.nodeValue ? i.nodeValue.length : 0) : o.setStartBefore(n), s.Dom.safeRemove(n), o.collapse(!0)
                                } else o.setStartAfter(n), s.Dom.safeRemove(n), o.setEndBefore(r), s.Dom.safeRemove(r)
                        })), o && this.selectRange(o)
                    }
                }, e.prototype.save = function() {
                    var e = this.sel;
                    if (!e || !e.rangeCount) return [];
                    var t, o, r, n = [],
                        i = e.rangeCount,
                        a = [];
                    for (t = 0; i > t; t += 1) a[t] = e.getRangeAt(t), a[t].collapsed ? (o = this.marker(!0, a[t]), n[t] = {
                        startId: o.id,
                        collapsed: !0,
                        startMarker: o.outerHTML
                    }) : (o = this.marker(!0, a[t]), r = this.marker(!1, a[t]), n[t] = {
                        startId: o.id,
                        endId: r.id,
                        collapsed: !1,
                        startMarker: o.outerHTML,
                        endMarker: r.outerHTML
                    });
                    for (e.removeAllRanges(), t = i - 1; t >= 0; --t) {
                        var s = this.doc.getElementById(n[t].startId);
                        if (s)
                            if (n[t].collapsed) a[t].setStartAfter(s), a[t].collapse(!0);
                            else if (a[t].setStartBefore(s), n[t].endId) {
                            var l = this.doc.getElementById(n[t].endId);
                            l && a[t].setEndAfter(l)
                        }
                        try {
                            e.addRange(a[t].cloneRange())
                        } catch (e) {}
                    }
                    return n
                }, e.prototype.focus = function() {
                    var e, t;
                    if (!this.isFocused()) {
                        this.j.iframe && "complete" === this.doc.readyState && this.j.iframe.focus(), this.win.focus(), this.area.focus();
                        var o = this.sel,
                            r = (null == o ? void 0 : o.rangeCount) ? null == o ? void 0 : o.getRangeAt(0) : null;
                        if (!r || !s.Dom.isOrContains(this.area, r.startContainer)) {
                            var n = this.createRange();
                            n.setStart(this.area, 0), n.collapse(!0), this.selectRange(n, !1)
                        }
                        return this.j.editorIsActive || null === (t = null === (e = this.j) || void 0 === e ? void 0 : e.events) || void 0 === t || t.fire("focus"), !0
                    }
                    return !1
                }, e.prototype.isCollapsed = function() {
                    for (var e = this.sel, t = 0; e && e.rangeCount > t; t += 1)
                        if (!e.getRangeAt(t).collapsed) return !1;
                    return !0
                }, e.prototype.isFocused = function() {
                    return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement
                }, e.prototype.current = function(e) {
                    if (void 0 === e && (e = !0), this.j.getRealMode() === i.MODE_WYSIWYG) {
                        var t = this.sel;
                        if (!t || 0 === t.rangeCount) return null;
                        var o = t.getRangeAt(0),
                            r = o.startContainer,
                            n = !1,
                            a = function(e) {
                                return n ? e.lastChild : e.firstChild
                            };
                        if (s.Dom.isTag(r, "br") && t.isCollapsed) return r;
                        if (!s.Dom.isText(r)) {
                            if ((r = o.startContainer.childNodes[o.startOffset]) || (r = o.startContainer.childNodes[o.startOffset - 1], n = !0), r && t.isCollapsed && !s.Dom.isText(r))
                                if (!n && s.Dom.isText(r.previousSibling)) r = r.previousSibling;
                                else if (e)
                                for (var l = a(r); l;) {
                                    if (l && s.Dom.isText(l)) {
                                        r = l;
                                        break
                                    }
                                    l = a(l)
                                }
                            if (r && !t.isCollapsed && !s.Dom.isText(r)) {
                                var c = r,
                                    u = r;
                                do {
                                    c = c.firstChild, u = u.lastChild
                                } while (c && u && !s.Dom.isText(c));
                                c === u && c && s.Dom.isText(c) && (r = c)
                            }
                        }
                        if (r && s.Dom.isOrContains(this.area, r)) return r
                    }
                    return null
                }, e.prototype.insertNode = function(e, t, o) {
                    var r;
                    void 0 === t && (t = !0), void 0 === o && (o = !0), this.errorNode(e), !this.isFocused() && this.j.isEditorMode() && this.focus();
                    var n = this.sel;
                    if (this.isCollapsed() || this.j.execCommand("Delete"), n && n.rangeCount) {
                        var i = n.getRangeAt(0);
                        s.Dom.isOrContains(this.area, i.commonAncestorContainer) ? s.Dom.isTag(i.startContainer, a.INSEPARABLE_TAGS) && i.collapsed ? null === (r = i.startContainer.parentNode) || void 0 === r || r.insertBefore(e, i.startContainer) : (i.deleteContents(), i.insertNode(e)) : this.area.appendChild(e)
                    } else this.area.appendChild(e);
                    t && (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.lastChild && this.setCursorAfter(e.lastChild) : this.setCursorAfter(e)), o && this.j.events && this.j.e.fire("synchro"), this.j.events && this.j.e.fire("afterInsertNode", e)
                }, e.prototype.insertHTML = function(e) {
                    if ("" !== e) {
                        var t, o = this.j.createInside.div(),
                            r = this.j.createInside.fragment();
                        if (!this.isFocused() && this.j.isEditorMode() && this.focus(), s.Dom.isNode(e, this.win) ? o.appendChild(e) : o.innerHTML = e.toString(), (this.j.isEditorMode() || !1 !== this.j.e.fire("insertHTML", o.innerHTML)) && (t = o.lastChild)) {
                            for (; o.firstChild;) t = o.firstChild, r.appendChild(o.firstChild);
                            this.insertNode(r, !1, !1), t ? this.setCursorAfter(t) : this.setCursorIn(r), this.j.e && this.j.e.fire("synchro")
                        }
                    }
                }, e.prototype.insertImage = function(e, t, o) {
                    void 0 === t && (t = null), void 0 === o && (o = null);
                    var r = l.isString(e) ? this.j.createInside.element("img") : e;
                    if (l.isString(e) && r.setAttribute("src", e), null !== o) {
                        var n = o.toString();
                        n && "auto" !== n && 0 > String(n).indexOf("px") && 0 > String(n).indexOf("%") && (n += "px"), l.css(r, "width", n)
                    }
                    t && "object" == typeof t && l.css(r, t);
                    var i = function() {
                        (r.offsetHeight > r.naturalHeight || r.offsetWidth > r.naturalWidth) && (r.style.width = "", r.style.height = ""), r.removeEventListener("load", i)
                    };
                    this.j.e.on(r, "load", i), r.complete && i();
                    var a = this.insertNode(r);
                    return this.j.e.fire("afterInsertImage", r), a
                }, e.prototype.cursorInTheEdge = function(e, t) {
                    var o, r, n = !e,
                        i = null === (o = this.sel) || void 0 === o ? void 0 : o.getRangeAt(0),
                        c = this.current(!1);
                    if (!i || !c || !s.Dom.isOrContains(t, c, !0)) return null;
                    var u = e ? i.startContainer : i.endContainer,
                        d = e ? i.startOffset : i.endOffset,
                        p = function(e) {
                            return e && !s.Dom.isTag(e, "br") && !s.Dom.isEmptyTextNode(e)
                        };
                    if (s.Dom.isText(u)) {
                        var f = (null === (r = u.nodeValue) || void 0 === r ? void 0 : r.length) ? u.nodeValue : "";
                        if (n && f.replace(a.INVISIBLE_SPACE_REG_EXP_END(), "").length > d) return !1;
                        var h = a.INVISIBLE_SPACE_REG_EXP_START().exec(f);
                        if (e && (h && d > h[0].length || !h && d > 0)) return !1
                    } else {
                        var m = l.toArray(u.childNodes);
                        if (n) {
                            if (m.slice(d).some(p)) return !1
                        } else if (m.slice(0, d).some(p)) return !1
                    }
                    return !l.call(e ? s.Dom.prev : s.Dom.next, c, p, t)
                }, e.prototype.cursorOnTheLeft = function(e) {
                    return this.cursorInTheEdge(!0, e)
                }, e.prototype.cursorOnTheRight = function(e) {
                    return this.cursorInTheEdge(!1, e)
                }, e.prototype.setCursorAfter = function(e) {
                    return this.setCursorNearWith(e, !1)
                }, e.prototype.setCursorBefore = function(e) {
                    return this.setCursorNearWith(e, !0)
                }, e.prototype.setCursorNearWith = function(e, t) {
                    var o, r, n = this;
                    if (this.errorNode(e), !s.Dom.up(e, (function(e) {
                            return e === n.area || e && e.parentNode === n.area
                        }), this.area)) throw l.error("Node element must be in editor");
                    var a = this.createRange(),
                        c = null;
                    return s.Dom.isText(e) ? t ? a.setStart(e, 0) : a.setEnd(e, null !== (r = null === (o = e.nodeValue) || void 0 === o ? void 0 : o.length) && void 0 !== r ? r : 0) : (c = this.j.createInside.text(i.INVISIBLE_SPACE), t ? a.setStartBefore(e) : a.setEndAfter(e), a.collapse(t), a.insertNode(c), a.selectNode(c)), a.collapse(t), this.selectRange(a), c
                }, e.prototype.setCursorIn = function(e, t) {
                    var o = this;
                    if (void 0 === t && (t = !1), this.errorNode(e), !s.Dom.up(e, (function(e) {
                            return e === o.area || e && e.parentNode === o.area
                        }), this.area)) throw l.error("Node element must be in editor");
                    var r = this.createRange(),
                        n = e,
                        a = e;
                    do {
                        if (s.Dom.isText(n)) break;
                        a = n, n = t ? n.firstChild : n.lastChild
                    } while (n);
                    if (!n) {
                        var c = this.j.createInside.text(i.INVISIBLE_SPACE);
                        /^(img|br|input)$/i.test(a.nodeName) ? n = a : (a.appendChild(c), a = c)
                    }
                    return r.selectNodeContents(n || a), r.collapse(t), this.selectRange(r), a
                }, e.prototype.selectRange = function(e, t) {
                    void 0 === t && (t = !0);
                    var o = this.sel;
                    t && !this.isFocused() && this.focus(), o && (o.removeAllRanges(), o.addRange(e)), this.j.e.fire("changeSelection")
                }, e.prototype.select = function(e, t) {
                    var o = this;
                    if (void 0 === t && (t = !1), this.errorNode(e), !s.Dom.up(e, (function(e) {
                            return e === o.area || e && e.parentNode === o.area
                        }), this.area)) throw l.error("Node element must be in editor");
                    var r = this.createRange();
                    r[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(r)
                }, Object.defineProperty(e.prototype, "html", {
                    get: function() {
                        var e = this.sel;
                        if (e && e.rangeCount > 0) {
                            var t = e.getRangeAt(0).cloneContents(),
                                o = this.j.createInside.div();
                            return o.appendChild(t), o.innerHTML
                        }
                        return ""
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.wrapInTag = function(e) {
                    var t = this;
                    if (l.$$("*[style*=font-size]", this.area).forEach((function(e) {
                            e.style && e.style.fontSize && e.setAttribute("data-font-size", e.style.fontSize.toString())
                        })), this.isCollapsed()) {
                        var o = this.j.createInside.element("font");
                        l.attr(o, "size", 7), this.insertNode(o, !1, !1)
                    } else this.doc.execCommand("fontsize", !1, "7");
                    l.$$("*[data-font-size]", this.area).forEach((function(e) {
                        var t = l.attr(e, "data-font-size");
                        e.style && t && (e.style.fontSize = t, e.removeAttribute("data-font-size"))
                    }));
                    var r = [];
                    return l.$$('font[size="7"]', this.area).forEach((function(o) {
                        try {
                            if (o.firstChild && o.firstChild === o.lastChild && t.isMarker(o.firstChild)) return;
                            l.isFunction(e) ? e(o) : r.push(s.Dom.replace(o, e, t.j.createInside))
                        } finally {
                            o.parentNode && s.Dom.unwrap(o)
                        }
                    })), r
                }, e.prototype.applyStyle = function(e, t) {
                    void 0 === t && (t = {}), new c.Style({
                        style: e,
                        element: t.element,
                        defaultTag: t.defaultTag
                    }).apply(this.j)
                }, e.prototype.splitSelection = function(e) {
                    if (!this.isCollapsed()) return null;
                    var t = this.createRange(),
                        o = this.range;
                    t.setStartBefore(e);
                    var r = this.cursorOnTheRight(e),
                        n = this.cursorOnTheLeft(e),
                        i = this.j.createInside.element("br"),
                        l = this.j.createInside.text(a.INVISIBLE_SPACE),
                        c = l.cloneNode();
                    try {
                        if (r || n) {
                            o.insertNode(i);
                            var u = function(e, t) {
                                for (var o = t(e); o;) {
                                    var r = t(o);
                                    if (!o || !s.Dom.isTag(o, "br") && !s.Dom.isEmptyTextNode(o)) break;
                                    s.Dom.safeRemove(o), o = r
                                }
                            };
                            u(i, (function(e) {
                                return e.nextSibling
                            })), u(i, (function(e) {
                                return e.previousSibling
                            })), s.Dom.after(i, c), s.Dom.before(i, l), r ? (t.setEndBefore(i), o.setEndBefore(i)) : (t.setEndAfter(i), o.setEndAfter(i))
                        } else t.setEnd(o.startContainer, o.startOffset);
                        var d = t.extractContents();
                        if (e.parentNode) try {
                            if (e.parentNode.insertBefore(d, e), r && (null == i ? void 0 : i.parentNode)) {
                                var p = this.createRange();
                                p.setStartBefore(i), this.selectRange(p)
                            }
                        } catch (e) {}
                        var f = function(e) {
                            var t, o, r;
                            (null === (t = null == e ? void 0 : e.parentNode) || void 0 === t ? void 0 : t.firstChild) === (null === (o = null == e ? void 0 : e.parentNode) || void 0 === o ? void 0 : o.lastChild) && (null === (r = null == e ? void 0 : e.parentNode) || void 0 === r || r.appendChild(i.cloneNode()))
                        };
                        f(l), f(c)
                    } finally {
                        s.Dom.safeRemove(l), s.Dom.safeRemove(c)
                    }
                    return e.previousElementSibling
                }, r.__decorate([n.default], e.prototype, "focus", null), r.__decorate([n.default], e.prototype, "setCursorAfter", null), r.__decorate([n.default], e.prototype, "setCursorBefore", null), r.__decorate([n.default], e.prototype, "setCursorIn", null), e
            }();
        t.Select = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.StatusBar = void 0;
        var r = o(0);
        o(207);
        var n = o(9),
            i = o(2),
            a = function(e) {
                function t(t, o) {
                    var r = e.call(this, t) || this;
                    return r.target = o, r.container = null, r.container = t.c.div("jodit-status-bar"), o.appendChild(r.container), r.hide(), r
                }
                return r.__extends(t, e), t.prototype.hide = function() {
                    this.container && this.container.classList.add("jodit_hidden")
                }, t.prototype.show = function() {
                    this.container && this.container.classList.remove("jodit_hidden")
                }, t.prototype.getHeight = function() {
                    var e, t;
                    return null !== (t = null === (e = this.container) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0
                }, t.prototype.findEmpty = function(e) {
                    var t;
                    void 0 === e && (e = !1);
                    var o = null === (t = this.container) || void 0 === t ? void 0 : t.querySelectorAll(".jodit-status-bar__item" + (e ? ".jodit-status-bar__item-right" : ""));
                    if (o)
                        for (var r = 0; o.length > r; r += 1)
                            if (!o[r].innerHTML.trim().length) return o[r]
                }, t.prototype.append = function(e, t) {
                    var o;
                    void 0 === t && (t = !1);
                    var r = this.findEmpty(t) || this.j.c.div("jodit-status-bar__item");
                    t && r.classList.add("jodit-status-bar__item-right"), r.appendChild(e), null === (o = this.container) || void 0 === o || o.appendChild(r), this.show(), this.j.e.fire("resize")
                }, t.prototype.destruct = function() {
                    this.setStatus(n.STATUSES.beforeDestruct), i.Dom.safeRemove(this.container), this.container = null, e.prototype.destruct.call(this)
                }, t
            }(n.ViewComponent);
        t.StatusBar = a
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Table = void 0;
        var r = o(0),
            n = o(3),
            i = o(2),
            a = o(1),
            s = o(9),
            l = o(11),
            c = o(14),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selected = new Set, t
                }
                return r.__extends(t, e), t.prototype.recalculateStyles = function() {
                    var e = l.getContainer(this.j, t, "style", !0),
                        o = [];
                    this.selected.forEach((function(e) {
                        var t = a.cssPath(e);
                        t && o.push(t)
                    })), e.innerHTML = o.length ? o.join(",") + "{" + this.jodit.options.table.selectionCellStyle + "}" : ""
                }, t.prototype.addSelection = function(e) {
                    this.selected.add(e), this.recalculateStyles();
                    var o = i.Dom.closest(e, "table", this.j.editor);
                    if (o) {
                        var r = t.selectedByTable.get(o) || new Set;
                        r.add(e), t.selectedByTable.set(o, r)
                    }
                }, t.prototype.removeSelection = function(e) {
                    this.selected.delete(e), this.recalculateStyles();
                    var o = i.Dom.closest(e, "table", this.j.editor);
                    if (o) {
                        var r = t.selectedByTable.get(o);
                        r && (r.delete(e), r.size || t.selectedByTable.delete(o))
                    }
                }, t.prototype.getAllSelectedCells = function() {
                    return a.toArray(this.selected)
                }, t.getSelectedCellsByTable = function(e) {
                    var o = t.selectedByTable.get(e);
                    return o ? a.toArray(o) : []
                }, t.prototype.destruct = function() {
                    return this.selected.clear(), e.prototype.destruct.call(this)
                }, t.getRowsCount = function(e) {
                    return e.rows.length
                }, t.getColumnsCount = function(e) {
                    return t.formalMatrix(e).reduce((function(e, t) {
                        return Math.max(e, t.length)
                    }), 0)
                }, t.formalMatrix = function(e, t) {
                    for (var o = [
                            []
                        ], r = a.toArray(e.rows), n = function(e, r) {
                            void 0 === o[r] && (o[r] = []);
                            for (var n, i, a = e.colSpan, s = e.rowSpan, l = 0; o[r][l];) l += 1;
                            for (i = 0; s > i; i += 1)
                                for (n = 0; a > n; n += 1) {
                                    if (void 0 === o[r + i] && (o[r + i] = []), t && !1 === t(e, r + i, l + n, a, s)) return !1;
                                    o[r + i][l + n] = e
                                }
                        }, i = 0; r.length > i; i += 1)
                        for (var s = a.toArray(r[i].cells), l = 0; s.length > l; l += 1)
                            if (!1 === n(s[l], i)) return o;
                    return o
                }, t.formalCoordinate = function(e, o, r) {
                    void 0 === r && (r = !1);
                    var n = 0,
                        i = 0,
                        a = 1,
                        s = 1;
                    return t.formalMatrix(e, (function(e, t, l, c, u) {
                        if (o === e) return n = t, i = l, a = c || 1, s = u || 1, r && (i += (c || 1) - 1, n += (u || 1) - 1), !1
                    })), [n, i, a, s]
                }, t.appendRow = function(e, o, r, n) {
                    var i;
                    if (o) i = o.cloneNode(!0), a.$$("td,th", o).forEach((function(e) {
                        var t = a.attr(e, "rowspan");
                        if (t && parseInt(t, 10) > 1) {
                            var o = parseInt(t, 10) - 1;
                            a.attr(e, "rowspan", o > 1 ? o : null)
                        }
                    })), a.$$("td,th", i).forEach((function(e) {
                        e.innerHTML = ""
                    }));
                    else {
                        var s = t.getColumnsCount(e);
                        i = n.element("tr");
                        for (var l = 0; s > l; l += 1) i.appendChild(n.element("td"))
                    }
                    r && o && o.nextSibling ? o.parentNode && o.parentNode.insertBefore(i, o.nextSibling) : !r && o ? o.parentNode && o.parentNode.insertBefore(i, o) : (a.$$(":scope>tbody", e)[0] || e).appendChild(i)
                }, t.removeRow = function(e, o) {
                    var r, n = t.formalMatrix(e),
                        s = e.rows[o];
                    a.each(n[o], (function(t, l) {
                        if (r = !1, 0 > o - 1 || n[o - 1][t] !== l)
                            if (n[o + 1] && n[o + 1][t] === l) {
                                if (l.parentNode === s && l.parentNode.nextSibling) {
                                    r = !0;
                                    for (var c = t + 1; n[o + 1][c] === l;) c += 1;
                                    var u = i.Dom.next(l.parentNode, (function(e) {
                                        return i.Dom.isTag(e, "tr")
                                    }), e);
                                    n[o + 1][c] ? u.insertBefore(l, n[o + 1][c]) : u.appendChild(l)
                                }
                            } else i.Dom.safeRemove(l);
                        else r = !0;
                        if (r && (l.parentNode === s || l !== n[o][t - 1])) {
                            var d = l.rowSpan;
                            a.attr(l, "rowspan", d - 1 > 1 ? (d - 1).toString() : null)
                        }
                    })), i.Dom.safeRemove(s)
                }, t.appendColumn = function(e, o, r, n) {
                    var i, s = t.formalMatrix(e);
                    for ((void 0 === o || 0 > o) && (o = t.getColumnsCount(e) - 1), i = 0; s.length > i; i += 1) {
                        var l = n.element("td"),
                            c = s[i][o],
                            u = !1;
                        r ? (s[i] && c && o + 1 >= s[i].length || c !== s[i][o + 1]) && (c.nextSibling ? c.parentNode && c.parentNode.insertBefore(l, c.nextSibling) : c.parentNode && c.parentNode.appendChild(l), u = !0) : (0 > o - 1 || s[i][o] !== s[i][o - 1] && s[i][o].parentNode) && (c.parentNode && c.parentNode.insertBefore(l, s[i][o]), u = !0), u || s[i][o].setAttribute("colspan", (parseInt(a.attr(s[i][o], "colspan") || "1", 10) + 1).toString())
                    }
                }, t.removeColumn = function(e, o) {
                    var r, n = t.formalMatrix(e);
                    a.each(n, (function(e, t) {
                        var s = t[o];
                        if (r = !1, 0 > o - 1 || n[e][o - 1] !== s ? t.length > o + 1 && n[e][o + 1] === s ? r = !0 : i.Dom.safeRemove(s) : r = !0, r && (0 > e - 1 || s !== n[e - 1][o])) {
                            var l = s.colSpan;
                            a.attr(s, "colspan", l - 1 > 1 ? (l - 1).toString() : null)
                        }
                    }))
                }, t.getSelectedBound = function(e, o) {
                    var r, n, i, a = [
                            [1 / 0, 1 / 0],
                            [0, 0]
                        ],
                        s = t.formalMatrix(e);
                    for (r = 0; s.length > r; r += 1)
                        for (n = 0; s[r] && s[r].length > n; n += 1) o.includes(s[r][n]) && (a[0][0] = Math.min(r, a[0][0]), a[0][1] = Math.min(n, a[0][1]), a[1][0] = Math.max(r, a[1][0]), a[1][1] = Math.max(n, a[1][1]));
                    for (r = a[0][0]; a[1][0] >= r; r += 1)
                        for (i = 1, n = a[0][1]; a[1][1] >= n; n += 1) {
                            for (; s[r] && s[r][n - i] && s[r][n] === s[r][n - i];) a[0][1] = Math.min(n - i, a[0][1]), a[1][1] = Math.max(n - i, a[1][1]), i += 1;
                            for (i = 1; s[r] && s[r][n + i] && s[r][n] === s[r][n + i];) a[0][1] = Math.min(n + i, a[0][1]), a[1][1] = Math.max(n + i, a[1][1]), i += 1;
                            for (i = 1; s[r - i] && s[r][n] === s[r - i][n];) a[0][0] = Math.min(r - i, a[0][0]), a[1][0] = Math.max(r - i, a[1][0]), i += 1;
                            for (i = 1; s[r + i] && s[r][n] === s[r + i][n];) a[0][0] = Math.min(r + i, a[0][0]), a[1][0] = Math.max(r + i, a[1][0]), i += 1
                        }
                    return a
                }, t.normalizeTable = function(e) {
                    var o, r, n, i, s = [],
                        l = t.formalMatrix(e);
                    for (r = 0; l[0].length > r; r += 1) {
                        for (n = 1e6, i = !1, o = 0; l.length > o; o += 1)
                            if (void 0 !== l[o][r]) {
                                if (2 > l[o][r].colSpan) {
                                    i = !0;
                                    break
                                }
                                n = Math.min(n, l[o][r].colSpan)
                            } if (!i)
                            for (o = 0; l.length > o; o += 1) void 0 !== l[o][r] && t.__mark(l[o][r], "colspan", l[o][r].colSpan - n + 1, s)
                    }
                    for (o = 0; l.length > o; o += 1) {
                        for (n = 1e6, i = !1, r = 0; l[o].length > r; r += 1)
                            if (void 0 !== l[o][r]) {
                                if (2 > l[o][r].rowSpan) {
                                    i = !0;
                                    break
                                }
                                n = Math.min(n, l[o][r].rowSpan)
                            } if (!i)
                            for (r = 0; l[o].length > r; r += 1) void 0 !== l[o][r] && t.__mark(l[o][r], "rowspan", l[o][r].rowSpan - n + 1, s)
                    }
                    for (o = 0; l.length > o; o += 1)
                        for (r = 0; l[o].length > r; r += 1) void 0 !== l[o][r] && (l[o][r].hasAttribute("rowspan") && 1 === l[o][r].rowSpan && l[o][r].removeAttribute("rowspan"), l[o][r].hasAttribute("colspan") && 1 === l[o][r].colSpan && l[o][r].removeAttribute("colspan"), l[o][r].hasAttribute("class") && !a.attr(l[o][r], "class") && l[o][r].removeAttribute("class"));
                    t.__unmark(s)
                }, t.mergeSelected = function(e, o) {
                    var r, s = [],
                        l = t.getSelectedBound(e, t.getSelectedCellsByTable(e)),
                        c = 0,
                        u = null,
                        p = 0,
                        f = 0,
                        h = 0,
                        m = [];
                    l && (l[0][0] - l[1][0] || l[0][1] - l[1][1]) && (t.formalMatrix(e, (function(e, n, i, v, g) {
                        if (!(l[0][0] > n || n > l[1][0] || l[0][1] > i || i > l[1][1])) {
                            if ((r = e).__i_am_already_was) return;
                            r.__i_am_already_was = !0, n === l[0][0] && r.style.width && (c += r.offsetWidth), "" !== a.trim(e.innerHTML.replace(/<br(\/)?>/g, "")) && s.push(e.innerHTML), v > 1 && (f += v - 1), g > 1 && (h += g - 1), u ? (t.__mark(r, "remove", 1, m), d(o).removeSelection(r)) : (u = e, p = i)
                        }
                    })), f = l[1][1] - l[0][1] + 1, h = l[1][0] - l[0][0] + 1, u && (f > 1 && t.__mark(u, "colspan", f, m), h > 1 && t.__mark(u, "rowspan", h, m), c && (t.__mark(u, "width", (c / e.offsetWidth * 100).toFixed(n.ACCURACY) + "%", m), p && t.setColumnWidthByDelta(e, p, 0, !0, m)), u.innerHTML = s.join("<br/>"), d(o).addSelection(u), delete u.__i_am_already_was, t.__unmark(m), t.normalizeTable(e), a.each(a.toArray(e.rows), (function(e, t) {
                        t.cells.length || i.Dom.safeRemove(t)
                    }))))
                }, t.splitHorizontal = function(e, o) {
                    var r, n, a, s, l, c = [];
                    t.getSelectedCellsByTable(e).forEach((function(u) {
                        (n = o.createInside.element("td")).appendChild(o.createInside.element("br")), a = o.createInside.element("tr"), r = t.formalCoordinate(e, u), 2 > u.rowSpan ? (t.formalMatrix(e, (function(e, o, n) {
                            r[0] === o && r[1] !== n && e !== u && t.__mark(e, "rowspan", e.rowSpan + 1, c)
                        })), i.Dom.after(i.Dom.closest(u, "tr", e), a), a.appendChild(n)) : (t.__mark(u, "rowspan", u.rowSpan - 1, c), t.formalMatrix(e, (function(t, o, n) {
                            o > r[0] && r[0] + u.rowSpan > o && r[1] > n && t.parentNode.rowIndex === o && (l = t), o > r[0] && t === u && (s = e.rows[o])
                        })), l ? i.Dom.after(l, n) : s.insertBefore(n, s.firstChild)), u.colSpan > 1 && t.__mark(n, "colspan", u.colSpan, c), t.__unmark(c), d(o).removeSelection(u)
                    })), this.normalizeTable(e)
                }, t.splitVertical = function(e, o) {
                    var r, a, s, l = [];
                    t.getSelectedCellsByTable(e).forEach((function(c) {
                        r = t.formalCoordinate(e, c), 2 > c.colSpan ? t.formalMatrix(e, (function(e, o, n) {
                            r[1] === n && r[0] !== o && e !== c && t.__mark(e, "colspan", e.colSpan + 1, l)
                        })) : t.__mark(c, "colspan", c.colSpan - 1, l), (a = o.createInside.element("td")).appendChild(o.createInside.element("br")), c.rowSpan > 1 && t.__mark(a, "rowspan", c.rowSpan, l);
                        var u = c.offsetWidth;
                        i.Dom.after(c, a), t.__mark(c, "width", (100 * (s = u / e.offsetWidth / 2)).toFixed(n.ACCURACY) + "%", l), t.__mark(a, "width", (100 * s).toFixed(n.ACCURACY) + "%", l), t.__unmark(l), d(o).removeSelection(c)
                    })), t.normalizeTable(e)
                }, t.setColumnWidthByDelta = function(e, o, r, i, a) {
                    var s, l = t.formalMatrix(e);
                    for (s = 0; l.length > s; s += 1) t.__mark(l[s][o], "width", ((l[s][o].offsetWidth + r) / e.offsetWidth * 100).toFixed(n.ACCURACY) + "%", a);
                    i || t.__unmark(a)
                }, t.__mark = function(e, t, o, r) {
                    r.push(e), e.__marked_value || (e.__marked_value = {}), e.__marked_value[t] = void 0 === o ? 1 : o
                }, t.__unmark = function(e) {
                    e.forEach((function(e) {
                        e.__marked_value && (a.each(e.__marked_value, (function(t, o) {
                            switch (t) {
                                case "remove":
                                    i.Dom.safeRemove(e);
                                    break;
                                case "rowspan":
                                    o > 1 ? e.setAttribute("rowspan", o.toString()) : e.removeAttribute("rowspan");
                                    break;
                                case "colspan":
                                    o > 1 ? e.setAttribute("colspan", o.toString()) : e.removeAttribute("colspan");
                                    break;
                                case "width":
                                    e.style.width = o.toString()
                            }
                            delete e.__marked_value[t]
                        })), delete e.__marked_value)
                    }))
                }, t.selectedByTable = new WeakMap, r.__decorate([c.debounce()], t.prototype, "recalculateStyles", null), t
            }(s.ViewComponent);
        t.Table = u;
        var d = function(e) {
            return e.getInstance("Table", e.o)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(64), t), r.__exportStar(o(65), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Uploader = void 0;
        var r = o(0);
        o(211);
        var n = o(4),
            i = o(3),
            a = o(37),
            s = o(1),
            l = o(2),
            c = o(9),
            u = o(11);
        n.Config.prototype.enableDragAndDropFileToEditor = !0, n.Config.prototype.uploader = {
            url: "",
            insertImageAsBase64URI: !1,
            imagesExtensions: ["jpg", "png", "jpeg", "gif"],
            headers: null,
            data: null,
            filesVariableName: function(e) {
                return "files[" + e + "]"
            },
            withCredentials: !1,
            pathVariableName: "path",
            format: "json",
            method: "POST",
            prepareData: function(e) {
                return e
            },
            isSuccess: function(e) {
                return e.success
            },
            getMessage: function(e) {
                return void 0 !== e.data.messages && s.isArray(e.data.messages) ? e.data.messages.join(" ") : ""
            },
            process: function(e) {
                return e.data
            },
            error: function(e) {
                this.j.e.fire("errorMessage", e.message, "error", 4e3)
            },
            defaultHandlerSuccess: function(e) {
                var t = this,
                    o = this.j;
                s.isJoditObject(o) && e.files && e.files.length && e.files.forEach((function(r, n) {
                    var i = e.isImages && e.isImages[n] ? ["img", "src"] : ["a", "href"],
                        a = i[0],
                        l = i[1],
                        c = o.createInside.element(a);
                    c.setAttribute(l, e.baseurl + r), "a" === a && (c.textContent = e.baseurl + r), s.isJoditObject(t.j) && ("img" === a ? t.j.s.insertImage(c, null, t.j.o.imageDefaultWidth) : t.j.s.insertNode(c))
                }))
            },
            defaultHandlerError: function(e) {
                this.j.e.fire("errorMessage", e.message)
            },
            contentType: function(e) {
                return (void 0 === this.j.ow.FormData || "string" == typeof e) && "application/x-www-form-urlencoded; charset=UTF-8"
            }
        };
        var d = function(e) {
            function t(t, o) {
                var r = e.call(this, t) || this;
                return r.path = "", r.source = "default", r.ajaxInstances = [], r.options = s.extend(!0, {}, n.Config.defaultOptions.uploader, s.isJoditObject(t) ? t.o.uploader : null, o), r
            }
            return r.__extends(t, e), t.dataURItoBlob = function(e) {
                for (var t = atob(e.split(",")[1]), o = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(t.length), n = new Uint8Array(r), i = 0; t.length > i; i += 1) n[i] = t.charCodeAt(i);
                return new Blob([n], {
                    type: o
                })
            }, Object.defineProperty(t.prototype, "o", {
                get: function() {
                    return this.options
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.buildData = function(e) {
                if (this.o.buildData && "function" == typeof this.o.buildData) return this.o.buildData.call(this, e);
                var t = this.j.ow.FormData;
                if (void 0 !== t) {
                    if (e instanceof t) return e;
                    if ("string" == typeof e) return e;
                    var o = new t;
                    return Object.keys(e).forEach((function(t) {
                        o.append(t, e[t])
                    })), o
                }
                return e
            }, t.prototype.send = function(e, t) {
                var o = this,
                    r = this.buildData(e),
                    n = function(e) {
                        var r = new a.Ajax(o.j || o, {
                            xhr: function() {
                                var e = new XMLHttpRequest;
                                return void 0 !== o.j.ow.FormData && e.upload ? e.upload.addEventListener("progress", (function(e) {
                                    if (e.lengthComputable) {
                                        var t = e.loaded / e.total;
                                        t *= 100, o.j.progressbar.show().progress(t), 100 > t || o.j.progressbar.hide()
                                    }
                                }), !1) : o.j.progressbar.hide(), e
                            },
                            method: o.o.method || "POST",
                            data: e,
                            url: o.o.url,
                            headers: o.o.headers,
                            queryBuild: o.o.queryBuild,
                            contentType: o.o.contentType.call(o, e),
                            dataType: o.o.format || "json",
                            withCredentials: o.o.withCredentials || !1
                        });
                        o.ajaxInstances.push(r);
                        var n = function() {
                            var e = o.ajaxInstances.indexOf(r); - 1 !== e && o.ajaxInstances.splice(e, 1)
                        };
                        return r.send().then((function(e) {
                            n(), t.call(o, e)
                        })).catch((function(e) {
                            n(), o.o.error.call(o, e)
                        }))
                    };
                return r instanceof Promise ? r.then(n).catch((function(e) {
                    o.o.error.call(o, e)
                })) : n(r)
            }, t.prototype.sendFiles = function(e, t, o, r) {
                var n = this;
                if (!e) return Promise.reject(s.error("Need files"));
                var i = this,
                    a = s.toArray(e);
                if (!a.length) return Promise.reject(s.error("Need files"));
                var l = [];
                if (this.o.insertImageAsBase64URI) {
                    var c, u = void 0,
                        d = function() {
                            if ((c = a[u]) && c.type) {
                                var e = c.type.match(/\/([a-z0-9]+)/i),
                                    o = e[1] ? e[1].toLowerCase() : "";
                                if (p.o.imagesExtensions.includes(o)) {
                                    var r = new FileReader;
                                    l.push(new Promise((function(e, o) {
                                        r.onerror = o, r.onloadend = function() {
                                            var o = {
                                                baseurl: "",
                                                files: [r.result],
                                                isImages: [!0]
                                            };
                                            "function" == typeof(t || i.options.defaultHandlerSuccess) && (t || i.options.defaultHandlerSuccess).call(i, o), e(o)
                                        }, r.readAsDataURL(c)
                                    }))), a[u] = null
                                }
                            }
                        },
                        p = this;
                    for (u = 0; a.length > u; u += 1) d()
                }
                if ((a = a.filter((function(e) {
                        return e
                    }))).length) {
                    var f = new FormData;
                    f.append(this.o.pathVariableName, i.path), f.append("source", i.source);
                    var h = void 0;
                    for (u = 0; a.length > u; u += 1)
                        if (h = a[u]) {
                            var m = h.type.match(/\/([a-z0-9]+)/i),
                                v = m && m[1] ? m[1].toLowerCase() : "",
                                g = a[u].name || Math.random().toString().replace(".", "");
                            if (v) {
                                var y = v;
                                ["jpeg", "jpg"].includes(y) && (y = "jpeg|jpg"), new RegExp(".(" + y + ")$", "i").test(g) || (g += "." + v)
                            }
                            f.append(this.o.filesVariableName(u), a[u], g)
                        } r && r(f), i.o.data && s.isPlainObject(i.o.data) && Object.keys(i.o.data).forEach((function(e) {
                        f.append(e, i.o.data[e])
                    })), i.o.prepareData.call(this, f), l.push(i.send(f, (function(e) {
                        if (n.o.isSuccess.call(i, e)) "function" == typeof(t || i.o.defaultHandlerSuccess) && (t || i.options.defaultHandlerSuccess).call(i, i.o.process.call(i, e));
                        else if (s.isFunction(o || i.o.defaultHandlerError)) return void(o || i.options.defaultHandlerError).call(i, s.error(i.o.getMessage.call(i, e)))
                    })).then((function() {
                        n.j.events && n.j.e.fire("filesWereUploaded")
                    })))
                }
                return Promise.all(l)
            }, t.prototype.setPath = function(e) {
                this.path = e
            }, t.prototype.setSource = function(e) {
                this.source = e
            }, t.prototype.bind = function(e, o, r) {
                var n = this,
                    a = this,
                    c = function(e) {
                        var c, d, p, f = e.clipboardData,
                            h = function(e) {
                                d && (e.append("extension", p), e.append("mimetype", d.type))
                            };
                        if (f && f.files && f.files.length) return n.sendFiles(f.files, o, r), !1;
                        if (i.IS_IE) {
                            if (f && (!f.types.length || f.types[0] !== i.TEXT_PLAIN)) {
                                var m = n.j.c.div("", {
                                    tabindex: -1,
                                    style: "left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;",
                                    contenteditable: !0
                                });
                                u.getContainer(n.j, t).appendChild(m);
                                var v = s.isJoditObject(n.j) ? n.j.s.save() : null;
                                m.focus(), n.j.async.setTimeout((function() {
                                    var e = m.firstChild;
                                    if (l.Dom.safeRemove(m), e && e.hasAttribute("src")) {
                                        var i = s.attr(e, "src") || "";
                                        v && s.isJoditObject(n.j) && n.j.s.restore(v), a.sendFiles([t.dataURItoBlob(i)], o, r)
                                    }
                                }), n.j.defaultTimeout)
                            }
                        } else if (f && f.items && f.items.length) {
                            var g = f.items;
                            for (c = 0; g.length > c; c += 1)
                                if ("file" === g[c].kind && "image/png" === g[c].type) {
                                    if (d = g[c].getAsFile()) {
                                        var y = d.type.match(/\/([a-z0-9]+)/i);
                                        p = y[1] ? y[1].toLowerCase() : "", n.sendFiles([d], o, r, h)
                                    }
                                    e.preventDefault();
                                    break
                                }
                        }
                    };
                this.j && this.j.editor !== e ? a.j.e.on(e, "paste", c) : a.j.e.on("beforePaste", c);
                var d = function(e) {
                    return Boolean(e.dataTransfer && e.dataTransfer.files && 0 !== e.dataTransfer.files.length)
                };
                a.j.e.on(e, "dragend dragover dragenter dragleave drop", (function(e) {
                    e.preventDefault()
                })).on(e, "dragover", (function(t) {
                    d(t) && (e.classList.contains("jodit_draghover") || e.classList.add("jodit_draghover"), t.preventDefault())
                })).on(e, "dragend", (function(t) {
                    d(t) && (e.classList.contains("jodit_draghover") && e.classList.remove("jodit_draghover"), t.preventDefault())
                })).on(e, "drop", (function(t) {
                    e.classList.remove("jodit_draghover"), d(t) && t.dataTransfer && t.dataTransfer.files && (t.preventDefault(), t.stopImmediatePropagation(), n.sendFiles(t.dataTransfer.files, o, r))
                }));
                var p = e.querySelector("input[type=file]");
                p && a.j.e.on(p, "change", (function() {
                    a.sendFiles(this.files, o, r).then((function() {
                        p.value = "", /safari/i.test(navigator.userAgent) || (p.type = "", p.type = "file")
                    }))
                }))
            }, t.prototype.uploadRemoteImage = function(e, t, o) {
                var r = this,
                    n = this;
                n.send({
                    action: "fileUploadRemote",
                    url: e
                }, (function(e) {
                    if (n.o.isSuccess.call(n, e)) "function" == typeof t ? t.call(n, r.o.process.call(r, e)) : r.o.defaultHandlerSuccess.call(n, r.o.process.call(r, e));
                    else if ("function" == typeof(o || n.o.defaultHandlerError)) return void(o || r.o.defaultHandlerError).call(n, s.error(n.o.getMessage.call(r, e)))
                }))
            }, t.prototype.destruct = function() {
                this.setStatus(c.STATUSES.beforeDestruct), this.ajaxInstances.forEach((function(e) {
                    try {
                        e.destruct()
                    } catch (e) {}
                })), e.prototype.destruct.call(this)
            }, t
        }(c.ViewComponent);
        t.Uploader = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(5),
            n = o(213),
            i = o(214),
            a = o(215),
            s = o(216),
            l = {
                ar: n,
                cs_cz: i,
                de: a,
                en: s,
                es: o(217),
                fr: o(218),
                he: o(219),
                hu: o(220),
                id: o(221),
                it: o(222),
                ja: o(223),
                ko: o(224),
                nl: o(225),
                pl: o(226),
                pt_br: o(227),
                ru: o(228),
                tr: o(229),
                zh_cn: o(230),
                zh_tw: o(231)
            },
            c = function(e) {
                return e.default || e
            },
            u = {};
        r.isArray(c(s)) && c(s).forEach((function(e, t) {
            u[t] = e
        })), Object.keys(l).forEach((function(e) {
            var t = c(l[e]);
            r.isArray(t) && (l[e] = {}, t.forEach((function(t, o) {
                l[e][u[o]] = t
            })))
        })), t.default = l
    }, function(e, t) {
        e.exports = {
            "Type something": "إبدأ في الكتابة...",
            "About Jodit": "حول جوديت",
            "Jodit Editor": "محرر جوديت",
            "Jodit User's Guide": "دليل مستخدم جوديت",
            "contains detailed help for using": "يحتوي على مساعدة مفصلة للاستخدام",
            "For information about the license, please go to our website:": "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:",
            "Buy full version": "شراء النسخة الكاملة",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.",
            Anchor: "مِرْساة",
            "Open in new tab": "فتح في نافذة جديدة",
            "Open editor in fullsize": "فتح المحرر في الحجم الكامل",
            "Clear Formatting": "مسح التنسيق",
            "Fill color or set the text color": "ملء اللون أو تعيين لون النص",
            Redo: "إعادة",
            Undo: "تراجع",
            Bold: "عريض",
            Italic: "مائل",
            "Insert Unordered List": "إدراج قائمة غير مرتبة",
            "Insert Ordered List": "إدراج قائمة مرتبة",
            "Align Center": "محاذاة للوسط",
            "Align Justify": "محاذاة مثبتة",
            "Align Left": "محاذاة لليسار",
            "Align Right": "محاذاة لليمين",
            "Insert Horizontal Line": "إدراج خط أفقي",
            "Insert Image": "إدراج صورة",
            "Insert file": "ادخال الملف",
            "Insert youtube/vimeo video": "إدراج فيديو يوتيوب/فيميو ",
            "Insert link": "إدراج رابط",
            "Font size": "حجم الخط",
            "Font family": "نوع الخط",
            "Insert format block": "إدراج كتلة تنسيق",
            Normal: "عادي",
            "Heading 1": "عنوان 1",
            "Heading 2": "عنوان 2",
            "Heading 3": "عنوان 3",
            "Heading 4": "عنوان 4",
            Quote: "إقتباس",
            Code: "كود",
            Insert: "إدراج",
            "Insert table": "إدراج جدول",
            "Decrease Indent": "تقليل المسافة البادئة",
            "Increase Indent": "زيادة المسافة البادئة",
            "Select Special Character": "تحديد أحرف خاصة",
            "Insert Special Character": "إدراج حرف خاص",
            "Paint format": "تنسيق الرسم",
            "Change mode": "تغيير الوضع",
            Margins: "هوامش",
            top: "أعلى",
            right: "يمين",
            bottom: "أسفل",
            left: "يسار",
            Styles: "الأنماط",
            Classes: "الطبقات",
            Align: "محاذاة",
            Right: "اليمين",
            Center: "الوسط",
            Left: "اليسار",
            "--Not Set--": "--غير مضبوط--",
            Src: "Src",
            Title: "العنوان",
            Alternative: "العنوان البديل",
            Link: "الرابط",
            "Open link in new tab": "افتح الرابط في نافذة جديدة",
            Image: "الصورة",
            file: "ملف",
            Advanced: "متقدم",
            "Image properties": "خصائص الصورة",
            Cancel: "إلغاء",
            Ok: "حسنا",
            "File Browser": "متصفح الملفات",
            "Error on load list": "حدث خطأ في تحميل القائمة ",
            "Error on load folders": "حدث خطأ في تحميل المجلدات",
            "Are you sure?": "هل أنت واثق؟",
            "Enter Directory name": "أدخل اسم المجلد",
            "Create directory": "إنشاء مجلد",
            "type name": "أكتب إسم",
            "Drop image": "إسقاط صورة",
            "Drop file": "إسقاط الملف",
            "or click": "أو أنقر",
            "Alternative text": "النص البديل",
            Upload: "رفع",
            Browse: "تصفح",
            Background: "الخلفية",
            Text: "نص",
            Top: "أعلى",
            Middle: "الوسط",
            Bottom: "الأسفل",
            "Insert column before": "إدراج عمود قبل",
            "Insert column after": "إدراج عمود بعد",
            "Insert row above": "إدراج صف أعلى",
            "Insert row below": "إدراج صف أسفل",
            "Delete table": "حذف الجدول",
            "Delete row": "حذف الصف",
            "Delete column": "حذف العمود",
            "Empty cell": "خلية فارغة",
            "Chars: %d": "%d حرف",
            "Words: %d": "%d كلام",
            "Strike through": "اضرب من خلال",
            Underline: "أكد",
            superscript: "حرف فوقي",
            subscript: "مخطوطة",
            "Cut selection": "قطع الاختيار",
            "Select all": "اختر الكل",
            Break: "استراحة",
            "Search for": "البحث عن",
            "Replace with": "استبدل ب",
            Replace: "محل",
            Paste: "معجون",
            "Choose Content to Paste": "اختر محتوى للصق",
            source: "مصدر",
            bold: "بالخط العريض",
            italic: "مائل",
            brush: "شغل",
            link: "صلة",
            undo: "إلغاء",
            redo: "كرر",
            table: "طاولة",
            image: "صورة",
            eraser: "نظيف",
            paragraph: "فقرة",
            fontsize: "حجم الخط",
            video: "فيديو",
            font: "الخط",
            about: "حول المحرر",
            print: "طباعة",
            symbol: "رمز",
            underline: "أكد",
            strikethrough: "شطب",
            indent: "المسافة البادئة",
            outdent: "نتوء",
            fullsize: "ملء الشاشة",
            shrink: "الحجم التقليدي",
            copyformat: "نسخ التنسيق",
            hr: "الخط",
            ul: "قائمة",
            ol: "قائمة مرقمة",
            cut: "قطع",
            selectall: "اختر الكل",
            "Embed code": "قانون",
            "Open link": "فتح الرابط",
            "Edit link": "تعديل الرابط",
            "No follow": "سمة Nofollow",
            Unlink: "إزالة الرابط",
            Update: "تحديث",
            pencil: "لتحرير",
            Eye: "مراجعة",
            " URL": "URL",
            Edit: "تحرير",
            "Horizontal align": "محاذاة أفقية",
            Filter: "فلتر",
            "Sort by changed": "عن طريق التغيير",
            "Sort by name": "بالاسم",
            "Sort by size": "حسب الحجم",
            "Add folder": "إضافة مجلد",
            Reset: "إعادة",
            Save: "احتفظ",
            "Save as ...": "حفظ باسم",
            Resize: "تغيير الحجم",
            Crop: "حجم القطع",
            Width: "عرض",
            Height: "ارتفاع",
            "Keep Aspect Ratio": "حافظ على النسب",
            Yes: "أن",
            No: "لا",
            Remove: "حذف",
            Select: "تميز",
            "Select %s": "تميز %s",
            "Vertical align": "محاذاة عمودية",
            Split: "انشق، مزق",
            Merge: "اذهب",
            "Add column": "أضف العمود",
            "Add row": "اضف سطر",
            "License: %s": "رخصة %s",
            Delete: "حذف",
            "Split vertical": "انقسام عمودي",
            "Split horizontal": "تقسيم أفقي",
            Border: "الحدود",
            "Your code is similar to HTML. Keep as HTML?": "يشبه الكود الخاص بك HTML. تبقي كما HTML؟",
            "Paste as HTML": "الصق ك HTML",
            Keep: "احتفظ",
            "Insert as Text": "إدراج كنص",
            "Insert only Text": "إدراج النص فقط",
            "You can only edit your own images. Download this image on the host?": "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟",
            "The image has been successfully uploaded to the host!": "تم تحميل الصورة بنجاح على الخادم!",
            palette: "لوحة",
            "There are no files": "لا توجد ملفات في هذا الدليل.",
            Rename: "إعادة تسمية",
            "Enter new name": "أدخل اسم جديد",
            preview: "معاينة",
            download: "تحميل",
            "Paste from clipboard": "لصق من الحافظة",
            "Your browser doesn't support direct access to the clipboard.": "متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.",
            "Copy selection": "نسخ التحديد",
            copy: "نسخ",
            "Border radius": "دائرة نصف قطرها الحدود",
            "Show all": "عرض كل",
            Apply: "تطبيق",
            "Please fill out this field": "يرجى ملء هذا المجال",
            "Please enter a web address": "يرجى إدخال عنوان ويب",
            Default: "الافتراضي",
            Circle: "دائرة",
            Dot: "نقطة",
            Quadrate: "المربعة",
            Find: "البحث",
            "Find Previous": "تجد السابقة",
            "Find Next": "تجد التالي",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "للصق المحتوى قادم من Microsoft Word/Excel الوثيقة. هل تريد أن تبقي شكل أو تنظيفه ؟ ",
            "Word Paste Detected": "كلمة لصق الكشف عن",
            Clean: "نظيفة"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Napiš něco",
            "About Jodit": "O Jodit",
            "Jodit Editor": "Editor Jodit",
            "Free Non-commercial Version": "Verze pro nekomerční použití",
            "Jodit User's Guide": "Jodit Uživatelská příručka",
            "contains detailed help for using": "obsahuje detailní nápovědu",
            "For information about the license, please go to our website:": "Pro informace o licenci, prosím, přejděte na naši stránku:",
            "Buy full version": "Koupit plnou verzi",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.",
            Anchor: "Anchor",
            "Open in new tab": "Otevřít v nové záložce",
            "Open editor in fullsize": "Otevřít v celoobrazovkovém režimu",
            "Clear Formatting": "Vyčistit formátování",
            "Fill color or set the text color": "Barva výplně a písma",
            Redo: "Vpřed",
            Undo: "Zpět",
            Bold: "Tučné",
            Italic: "Kurzíva",
            "Insert Unordered List": "Odrážky",
            "Insert Ordered List": "Číslovaný seznam",
            "Align Center": "Zarovnat na střed",
            "Align Justify": "Zarovnat do bloku",
            "Align Left": "Zarovnat vlevo",
            "Align Right": "Zarovnat vpravo",
            "Insert Horizontal Line": "Vložit horizontální linku",
            "Insert Image": "Vložit obrázek",
            "Insert file": "Vložit soubor",
            "Insert youtube/vimeo video": "Vložit video (YT/Vimeo)",
            "Insert link": "Vložit odkaz",
            "Font size": "Velikost písma",
            "Font family": "Typ písma",
            "Insert format block": "Formátovat blok",
            Normal: "Normální text",
            "Heading 1": "Nadpis 1",
            "Heading 2": "Nadpis 2",
            "Heading 3": "Nadpis 3",
            "Heading 4": "Nadpis 4",
            Quote: "Citát",
            Code: "Kód",
            Insert: "Vložit",
            "Insert table": "Vložit tabulku",
            "Decrease Indent": "Zmenšit odsazení",
            "Increase Indent": "Zvětšit odsazení",
            "Select Special Character": "Vybrat speciální symbol",
            "Insert Special Character": "Vložit speciální symbol",
            "Paint format": "Použít formát",
            "Change mode": "Změnit mód",
            Margins: "Okraje",
            top: "horní",
            right: "pravý",
            bottom: "spodní",
            left: "levý",
            Styles: "Styly",
            Classes: "Třídy",
            Align: "Zarovnání",
            Right: "Vpravo",
            Center: "Na střed",
            Left: "Vlevo",
            "--Not Set--": "--nenastaveno--",
            Src: "src",
            Title: "Titulek",
            Alternative: "Alternativní text (alt)",
            Link: "Link",
            "Open link in new tab": "Otevřít link v nové záložce",
            Image: "Obrázek",
            file: "soubor",
            Advanced: "Rozšířené",
            "Image properties": "Vlastnosti obrázku",
            Cancel: "Zpět",
            Ok: "Ok",
            "Your code is similar to HTML. Keep as HTML?": "Váš text se podobá HTML. Vložit ho jako HTML?",
            "Paste as HTML": "Vložit jako HTML",
            Keep: "Ponechat originál",
            Clean: "Vyčistit",
            "Insert as Text": "Vložit jako TEXT",
            "Insert only Text": "Vložit pouze TEXT",
            "Word Paste Detected": "Detekován fragment z Wordu nebo Excelu",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?",
            "File Browser": "Prohlížeč souborů",
            "Error on load list": "Chyba při načítání seznamu souborů",
            "Error on load folders": "Chyba při načítání složek",
            "Are you sure?": "Jste si jistý(á)?",
            "Enter Directory name": "Název složky",
            "Create directory": "Vytvořit složku",
            "type name": "název",
            "Drop image": "Přetáhněte sem obrázek",
            "Drop file": "Přetáhněte sem soubor",
            "or click": "nebo klikněte",
            "Alternative text": "Alternativní text",
            Browse: "Server",
            Upload: "Nahrát",
            Background: "Pozadí",
            Text: "Text",
            Top: "Nahoru",
            Middle: "Na střed",
            Bottom: "Dolu",
            "Insert column before": "Vložit sloupec před",
            "Insert column after": "Vložit sloupec za",
            "Insert row above": "Vložit řádek nad",
            "Insert row below": "Vložit řádek pod",
            "Delete table": "Vymazat tabulku",
            "Delete row": "Vymazat řádku",
            "Delete column": "Vymazat sloupec",
            "Empty cell": "Vyčistit buňku",
            source: "HTML",
            bold: "tučně",
            italic: "kurzíva",
            brush: "štětec",
            link: "odkaz",
            undo: "zpět",
            redo: "vpřed",
            table: "tabulka",
            image: "obrázek",
            eraser: "guma",
            paragraph: "odstavec",
            fontsize: "velikost písma",
            video: "video",
            font: "písmo",
            about: "о editoru",
            print: "tisk",
            symbol: "symbol",
            underline: "podtrženo",
            strikethrough: "přeškrtnuto",
            indent: "zvětšit odsazení",
            outdent: "zmenšit odsazení",
            fullsize: "celoobrazovkový režim",
            shrink: "smrsknout",
            copyformat: "Kopírovat formát",
            hr: "Linka",
            ul: "Odrážka",
            ol: "Číslovaný seznam",
            cut: "Vyjmout",
            selectall: "Označit vše",
            "Embed code": "Kód",
            "Open link": "Otevřít odkaz",
            "Edit link": "Upravit odkaz",
            "No follow": "Atribut no-follow",
            Unlink: "Odstranit odkaz",
            Eye: "Zobrazit",
            pencil: "Chcete-li upravit",
            Update: "Aktualizovat",
            " URL": "URL",
            Edit: "Editovat",
            "Horizontal align": "Horizontální zarovnání",
            Filter: "Filtr",
            "Sort by changed": "Dle poslední změny",
            "Sort by name": "Dle názvu",
            "Sort by size": "Dle velikosti",
            "Add folder": "Přidat složku",
            Reset: "Reset",
            Save: "Uložit",
            "Save as ...": "Uložit jako...",
            Resize: "Změnit rozměr",
            Crop: "Ořezat",
            Width: "Šířka",
            Height: "Výška",
            "Keep Aspect Ratio": "Ponechat poměr",
            Yes: "Ano",
            No: "Ne",
            Remove: "Vyjmout",
            Select: "Označit",
            "Chars: %d": "Znaky: %d",
            "Words: %d": "Slova: %d",
            All: "Vše",
            "Select %s": "Označit %s",
            "Select all": "Označit vše",
            "Vertical align": "Vertikální zarovnání",
            Split: "Rozdělit",
            "Split vertical": "Rozdělit vertikálně",
            "Split horizontal": "Rozdělit horizontálně",
            Merge: "Spojit",
            "Add column": "Přidat sloupec",
            "Add row": "Přidat řádek",
            Delete: "Vymazat",
            Border: "Okraj",
            "License: %s": "Licence: %s",
            "Strike through": "Přeškrtnuto",
            Underline: "Podtrženo",
            superscript: "Horní index",
            subscript: "Dolní index",
            "Cut selection": "Vyjmout označené",
            Break: "Zalomení",
            "Search for": "Najdi",
            "Replace with": "Nahradit za",
            Replace: "Vyměňte",
            Paste: "Vložit",
            "Choose Content to Paste": "Vyber obsah pro vložení",
            "You can only edit your own images. Download this image on the host?": "Můžete upravovat pouze své obrázky. Načíst obrázek?",
            "The image has been successfully uploaded to the host!": "Obrázek byl úspěšně nahrán!",
            palette: "paleta",
            "There are no files": "V tomto adresáři nejsou žádné soubory.",
            Rename: "přejmenovat",
            "Enter new name": "Zadejte nový název",
            preview: "náhled",
            download: "Stažení",
            "Paste from clipboard": "Vložit ze schránky",
            "Your browser doesn't support direct access to the clipboard.": "Váš prohlížeč nepodporuje přímý přístup do schránky.",
            "Copy selection": "Kopírovat výběr",
            copy: "kopírování",
            "Border radius": "Border radius",
            "Show all": "Zobrazit všechny",
            Apply: "Platí",
            "Please fill out this field": "Prosím, vyplňte toto pole",
            "Please enter a web address": "Prosím, zadejte webovou adresu",
            Default: "Výchozí",
            Circle: "Kruh",
            Dot: "Dot",
            Quadrate: "Quadrate",
            Find: "Najít",
            "Find Previous": "Najít Předchozí",
            "Find Next": "Najít Další"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Bitte geben Sie einen Text ein",
            Advanced: "Fortgeschritten",
            "About Jodit": "Über Jodit",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Das Jodit Benutzerhandbuch",
            "contains detailed help for using": "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.",
            "For information about the license, please go to our website:": "Für Lizenz-Informationen, besuchen Sie bitte unsere Webseite:",
            "Buy full version": "Vollversion kaufen",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.",
            Anchor: "Anker",
            "Open in new tab": "In neuer Registerkarte öffnen",
            "Open editor in fullsize": "Editor in voller Größe öffnen",
            "Clear Formatting": "Formatierung löschen",
            "Fill color or set the text color": "Füllfarbe oder Textfarbe ändern",
            Redo: "Wiederholen",
            Undo: "Rückgängig machen",
            Bold: "Fett",
            Italic: "Kursiv",
            "Insert Unordered List": "Ungeordnete Liste einfügen",
            "Insert Ordered List": "Sortierte Liste einfügen",
            "Align Center": "Mittig ausrichten",
            "Align Justify": "Blocksatz",
            "Align Left": "Links ausrichten",
            "Align Right": "Rechts ausrichten",
            "Insert Horizontal Line": "Horizontale Linie einfügen",
            "Insert Image": "Bild einfügen",
            "Insert file": "Datei einfügen",
            "Insert youtube/vimeo video": "Youtube/vimeo Video einfügen",
            "Insert link": "Link einfügen",
            "Font size": "Schriftgröße",
            "Font family": "Schriftfamilie",
            "Insert format block": "Formatblock einfügen",
            Normal: "Normal",
            "Heading 1": "Überschrift 1",
            "Heading 2": "Überschrift 2",
            "Heading 3": "Überschrift 3",
            "Heading 4": "Überschrift 4",
            Quote: "Zitat",
            Code: "Code",
            Insert: "Einfügen",
            "Insert table": "Tabelle einfügen",
            "Decrease Indent": "Einzug verkleinern",
            "Increase Indent": "Einzug vergrößern",
            "Select Special Character": "Sonderzeichen auswählen",
            "Insert Special Character": "Sonderzeichen einfügen",
            "Paint format": "Format kopieren",
            "Change mode": "Änderungsmodus",
            Margins: "Ränder",
            top: "Oben",
            right: "Rechts",
            bottom: "Unten",
            left: "Links",
            Styles: "CSS Stiel",
            Classes: "CSS Klassen",
            Align: "Ausrichten",
            Right: "Rechts",
            Center: "Zentriert",
            Left: "Links",
            "--Not Set--": "Keine",
            Src: "Pfad",
            Title: "Titel",
            Alternative: "Alternativer Text",
            Link: "Link",
            "Open link in new tab": "Link in neuem Tab öffnen",
            Image: "Bild",
            file: "Datei",
            Advansed: "Erweitert",
            "Image properties": "Bildeigenschaften",
            Cancel: "Abbrechen",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Es scheint als dass Sie HTML-Text einfügen möchten",
            "Paste as HTML": "Als HTML einfügen?",
            Keep: "Original speichern",
            Clean: "Säubern",
            "Insert as Text": "Als Text einfügen",
            "Word Paste Detected": "In Word formatierter Text erkannt",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?",
            "Insert only Text": "Nur Text einfügen",
            "File Browser": "Dateibrowser",
            "Error on load list": "Fehler beim Laden der Liste",
            "Error on load folders": "Fehler beim Laden der Ordner",
            "Are you sure?": "Sind Sie sicher?",
            "Enter Directory name": "Geben Sie den Verzeichnisnamen ein",
            "Create directory": "Verzeichnis erstellen",
            "type name": "Typname",
            "Drop image": "Bild hier hinziehen",
            "Drop file": "Datei löschen",
            "or click": "oder hier klicken",
            "Alternative text": "Alternativtext",
            Browse: "Auswählen",
            Upload: "Hochladen",
            Background: "Hintergrund",
            Text: "Text",
            Top: "Oben",
            Middle: "Mittig",
            Bottom: "Unten",
            "Insert column before": "Spalte einfügen vor",
            "Insert column after": "Spalte einfügen nach",
            "Insert row above": "Zeile einfügen oberhalb",
            "Insert row below": "Zeile unterhalb einfügen",
            "Delete table": "Tabelle löschen",
            "Delete row": "Zeile löschen",
            "Delete column": "Spalte löschen",
            "Empty cell": "Leere Zelle",
            Delete: "Löschen",
            "Strike through": "Durchschlagen",
            Underline: "Unterstreichen",
            Break: "Pause",
            "Search for": "Suche nach",
            "Replace with": "Ersetzen durch",
            Replace: "Ersetzen",
            Edit: "Bearbeiten",
            "Vertical align": "Vertikale Ausrichtung",
            "Horizontal align": "Horizontale Ausrichtung",
            Filter: "filter",
            "Sort by changed": "Sortieren nach geändert",
            "Sort by name": "Nach Name sortieren",
            "Sort by size": "Nach Größe sortiert",
            "Add folder": "Ordner hinzufügen",
            "Split vertical": "Split vertikal",
            "Split horizontal": "Split horizontally",
            Split: "Split",
            Merge: "Verschmelzen",
            "Add column": "Spalte hinzufügen",
            "Add row": "Zeile hinzufügen",
            Border: "Rand",
            "Embed code": "Code einbetten",
            Update: "Aktualisieren",
            superscript: "hochgestellt",
            subscript: "Index",
            "Cut selection": "Auswahl ausschneid",
            Paste: "Einfügen",
            "Choose Content to Paste": "Wählen Sie Inhalt zum Einfügen",
            "Chars: %d": "Zeichen: %d",
            "Words: %d": "Wörter: %d",
            All: "Wählen Sie Alle aus",
            "Select %s": "Markieren: %s",
            "Select all": "Wählen Sie Alle aus",
            source: "HTML",
            bold: "Fett gedruckt",
            italic: "kursiv",
            brush: "Bürste",
            link: "Verknüpfung",
            undo: "rückgängig machen",
            redo: "wiederholen",
            table: "Tabelle",
            image: "Bild",
            eraser: "Radiergummi",
            paragraph: "Absatz",
            fontsize: "Schriftgröße",
            video: "Video",
            font: "Schriftart",
            about: "Über",
            print: "drucken",
            symbol: "Symbol",
            underline: "unterstreichen",
            strikethrough: "durchgestrichen",
            indent: "Einzug",
            outdent: "Aussenseiter",
            fullsize: "Vollgröße",
            shrink: "schrumpfen",
            copyformat: "Format kopierenт",
            hr: "die Linie",
            ul: "Liste von",
            ol: "Nummerierte Liste",
            cut: "Schnitt",
            selectall: "Wählen Sie Alle aus",
            "Open link": "Link öffnen",
            "Edit link": "Link bearbeiten",
            "No follow": "Nofollow-Attribut",
            Unlink: "Link entfernen",
            Eye: "Ansehen",
            pencil: "Bearbeiten",
            " URL": "URL",
            Reset: "Wiederherstellen",
            Save: "Speichern",
            "Save as ...": "Speichern als",
            Resize: "Ändern Sie die Größe",
            Crop: "Größe anpassen",
            Width: "Breite",
            Height: "Höhe",
            "Keep Aspect Ratio": "Halten Sie Proportionen",
            Yes: "Ja",
            No: "Nein",
            Remove: "Entfernen",
            Select: "Markieren",
            "You can only edit your own images. Download this image on the host?": "Sie können nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?",
            "The image has been successfully uploaded to the host!": "Das Bild wurde erfolgreich auf den Server hochgeladen!null",
            palette: "Palette",
            "There are no files": "In diesem Verzeichnis befinden sich keine Dateien.",
            Rename: "umbenennen",
            "Enter new name": "Geben Sie einen neuen Namen ein",
            preview: "Vorschau",
            download: "Herunterladen",
            "Paste from clipboard": "Aus der Zwischenablage einfügen",
            "Your browser doesn't support direct access to the clipboard.": "Ihr browser unterstützt kein direkter Zugriff auf die Zwischenablage.",
            "Copy selection": "Auswahl kopieren",
            copy: "kopieren",
            "Border radius": "Border-radius",
            "Show all": "Alle anzeigen",
            Apply: "Bewerben",
            "Please fill out this field": "Bitte füllen Sie dieses Feld aus",
            "Please enter a web address": "Bitte geben Sie eine web-Adresse",
            Default: "Standard",
            Circle: "Kreis",
            Dot: "Dot",
            Quadrate: "Quadrate",
            Find: "Finden",
            "Find Previous": "Finden Frühere",
            "Find Next": "Weitersuchen"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "내용을 입력해주세요.",
            pencil: "Edit",
            Quadrate: "Square"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Escriba algo...",
            Advanced: "Avanzado",
            "About Jodit": "Acerca de Jodit",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Guía de usuario Jodit",
            "contains detailed help for using": "contiene ayuda detallada para el uso.",
            "For information about the license, please go to our website:": "Para información sobre la licencia, por favor visite nuestro sitio:",
            "Buy full version": "Compre la versión completa",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.",
            Anchor: "Anclar",
            "Open in new tab": "Abrir en nueva pestaña",
            "Open editor in fullsize": "Abrir editor en pantalla completa",
            "Clear Formatting": "Limpiar formato",
            "Fill color or set the text color": "Color de relleno o de letra",
            Redo: "Rehacer",
            Undo: "Deshacer",
            Bold: "Negrita",
            Italic: "Cursiva",
            "Insert Unordered List": "Insertar lista no ordenada",
            "Insert Ordered List": "Insertar lista ordenada",
            "Align Center": "Alinear Centrado",
            "Align Justify": "Alinear Justificado",
            "Align Left": "Alinear Izquierda",
            "Align Right": "Alinear Derecha",
            "Insert Horizontal Line": "Insertar línea horizontal",
            "Insert Image": "Insertar imagen",
            "Insert file": "Insertar archivo",
            "Insert youtube/vimeo video": "Insertar video de Youtube/vimeo",
            "Insert link": "Insertar vínculo",
            "Font size": "Tamaño de letra",
            "Font family": "Familia de letra",
            "Insert format block": "Insertar bloque",
            Normal: "Normal",
            "Heading 1": "Encabezado 1",
            "Heading 2": "Encabezado 2",
            "Heading 3": "Encabezado 3",
            "Heading 4": "Encabezado 4",
            Quote: "Cita",
            Code: "Código",
            Insert: "Insertar",
            "Insert table": "Insertar tabla",
            "Decrease Indent": "Disminuir sangría",
            "Increase Indent": "Aumentar sangría",
            "Select Special Character": "Seleccionar caracter especial",
            "Insert Special Character": "Insertar caracter especial",
            "Paint format": "Copiar formato",
            "Change mode": "Cambiar modo",
            Margins: "Márgenes",
            top: "arriba",
            right: "derecha",
            bottom: "abajo",
            left: "izquierda",
            Styles: "Estilos CSS",
            Classes: "Clases CSS",
            Align: "Alinear",
            Right: "Derecha",
            Center: "Centrado",
            Left: "Izquierda",
            "--Not Set--": "--No Establecido--",
            Src: "Fuente",
            Title: "Título",
            Alternative: "Texto Alternativo",
            Link: "Vínculo",
            "Open link in new tab": "Abrir vínculo en nueva pestaña",
            Image: "Imagen",
            file: "Archivo",
            Advansed: "Avanzado",
            "Image properties": "Propiedades de imagen",
            Cancel: "Cancelar",
            Ok: "Aceptar",
            "Your code is similar to HTML. Keep as HTML?": "El código es similar a HTML. ¿Mantener como HTML?",
            "Paste as HTML": "Pegar como HTML?",
            Keep: "Mantener",
            Clean: "Limpiar",
            "Insert as Text": "Insertar como texto",
            "Word Paste Detected": "Pegado desde Word detectado",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?",
            "Insert only Text": "Insertar solo texto",
            "File Browser": "Buscar archivo",
            "Error on load list": "Error al cargar la lista",
            "Error on load folders": "Error al cargar las carpetas",
            "Are you sure?": "¿Está seguro?",
            "Enter Directory name": "Entre nombre de carpeta",
            "Create directory": "Crear carpeta",
            "type name": "Entre el nombre",
            "Drop image": "Soltar imagen",
            "Drop file": "Soltar archivo",
            "or click": "o click",
            "Alternative text": "Texto alternativo",
            Browse: "Buscar",
            Upload: "Subir",
            Background: "Fondo",
            Text: "Texto",
            Top: "Arriba",
            Middle: "Centro",
            Bottom: "Abajo",
            "Insert column before": "Insertar columna antes",
            "Insert column after": "Interar columna después",
            "Insert row above": "Insertar fila arriba",
            "Insert row below": "Insertar fila debajo",
            "Delete table": "Borrar tabla",
            "Delete row": "Borrar fila",
            "Delete column": "Borrar columna",
            "Empty cell": "Vaciar celda",
            Delete: "Borrar",
            "Strike through": "Tachado",
            Underline: "Subrayado",
            Break: "Pausa",
            "Search for": "Buscar",
            "Replace with": "Reemplazar con",
            Replace: "Reemplazar",
            Edit: "Editar",
            "Vertical align": "Alineación vertical",
            "Horizontal align": "Alineación horizontal",
            Filter: "filtrar",
            "Sort by changed": "Ordenar por fecha modificación",
            "Sort by name": "Ordenar por nombre",
            "Sort by size": "Ordenar por tamaño",
            "Add folder": "Agregar carpeta",
            Split: "Dividir",
            "Split vertical": "Dividir vertical",
            "Split horizontal": "Dividir horizontal",
            Merge: "Mezclar",
            "Add column": "Agregar columna",
            "Add row": "Agregar fila",
            Border: "Borde",
            "Embed code": "Incluir código",
            Update: "Actualizar",
            superscript: "superíndice",
            subscript: "subíndice",
            "Cut selection": "Cortar selección",
            Paste: "Pegar",
            "Choose Content to Paste": "Seleccionar contenido para pegar",
            "Chars: %d": "Caracteres: %d",
            "Words: %d": "Palabras: %d",
            All: "Todo",
            "Select %s": "Seleccionar: %s",
            "Select all": "Seleccionar todo",
            source: "HTML",
            bold: "negrita",
            italic: "cursiva",
            brush: "Brocha",
            link: "Vínculo",
            undo: "deshacer",
            redo: "rehacer",
            table: "Tabla",
            image: "Imagen",
            eraser: "Borrar",
            paragraph: "Párrafo",
            fontsize: "Tamaño de letra",
            video: "Video",
            font: "Letra",
            about: "Acerca de",
            print: "Imprimir",
            symbol: "Símbolo",
            underline: "subrayar",
            strikethrough: "tachar",
            indent: "sangría",
            outdent: "quitar sangría",
            fullsize: "Tamaño completo",
            shrink: "encoger",
            copyformat: "Copiar formato",
            hr: "línea horizontal",
            ul: "lista sin ordenar",
            ol: "lista ordenada",
            cut: "Cortar",
            selectall: "Seleccionar todo",
            "Open link": "Abrir vínculo",
            "Edit link": "Editar vínculo",
            "No follow": "No seguir",
            Unlink: "Desvincular",
            Eye: "Ver",
            pencil: "Para editar",
            " URL": "URL",
            Reset: "Resetear",
            Save: "Guardar",
            "Save as ...": "Guardar como...",
            Resize: "Redimensionar",
            Crop: "Recortar",
            Width: "Ancho",
            Height: "Alto",
            "Keep Aspect Ratio": "Mantener relación de aspecto",
            Yes: "Si",
            No: "No",
            Remove: "Quitar",
            Select: "Seleccionar",
            "You can only edit your own images. Download this image on the host?": "Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?",
            "The image has been successfully uploaded to the host!": "¡La imagen se ha subido correctamente al servidor!",
            palette: "paleta",
            "There are no files": "No hay archivos en este directorio.",
            Rename: "renombrar",
            "Enter new name": "Ingresa un nuevo nombre",
            preview: "avance",
            download: "Descargar",
            "Paste from clipboard": "Pegar desde el portapapeles",
            "Your browser doesn't support direct access to the clipboard.": "Su navegador no soporta el acceso directo en el portapapeles.",
            "Copy selection": "Selección de copia",
            copy: "copia",
            "Border radius": "Radio frontera",
            "Show all": "Mostrar todos los",
            Apply: "Aplicar",
            "Please fill out this field": "Por favor, rellene este campo",
            "Please enter a web address": "Por favor, introduzca una dirección web",
            Default: "Predeterminado",
            Circle: "Círculo",
            Dot: "Punto",
            Quadrate: "Cuadro",
            "Lower Alpha": "Letra Minúscula",
            "Lower Greek": "Griego Minúscula",
            "Lower Roman": "Romano Minúscula",
            "Upper Alpha": "Letra Mayúscula",
            "Upper Roman": "Romano Mayúscula",
            Find: "Encontrar",
            "Find Previous": "Buscar Anterior",
            "Find Next": "Buscar Siguiente"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Ecrivez ici",
            "About Jodit": "A propos de Jodit",
            "Jodit Editor": "Editeur Jodit",
            "Jodit User's Guide": "Guide de l'utilisateur",
            "contains detailed help for using": "Aide détaillée à l'utilisation",
            "For information about the license, please go to our website:": "Consulter la licence sur notre site web:",
            "Buy full version": "Acheter la version complète",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.",
            Anchor: "Ancre",
            "Open in new tab": "Ouvrir dans un nouvel onglet",
            "Open editor in fullsize": "Ouvrir l'éditeur en pleine page",
            "Clear Formatting": "Supprimer le formattage",
            "Fill color or set the text color": "Modifier la couleur du fond ou du texte",
            Redo: "Refaire",
            Undo: "Défaire",
            Bold: "Gras",
            Italic: "Italique",
            "Insert Unordered List": "Liste non ordonnée",
            "Insert Ordered List": "Liste ordonnée",
            "Align Center": "Centrer",
            "Align Justify": "Justifier",
            "Align Left": "Aligner à gauche ",
            "Align Right": "Aligner à droite",
            "Insert Horizontal Line": "Insérer une ligne horizontale",
            "Insert Image": "Insérer une image",
            "Insert file": "Insérer un fichier",
            "Insert youtube/vimeo video": "Insérer une vidéo",
            "Insert link": "Insérer un lien",
            "Font size": "Taille des caractères",
            "Font family": "Famille des caractères",
            "Insert format block": "Bloc formatté",
            Normal: "Normal",
            "Heading 1": "Titre 1",
            "Heading 2": "Titre 2",
            "Heading 3": "Titre 3",
            "Heading 4": "Titre 4",
            Quote: "Citation",
            Code: "Code",
            Insert: "Insérer",
            "Insert table": "Insérer un tableau",
            "Decrease Indent": "Diminuer le retrait",
            "Increase Indent": "Retrait plus",
            "Select Special Character": "Sélectionnez un caractère spécial",
            "Insert Special Character": "Insérer un caractère spécial",
            "Paint format": "Cloner le format",
            "Change mode": "Mode wysiwyg <-> code html",
            Margins: "Marges",
            top: "haut",
            right: "droite",
            bottom: "Bas",
            left: "gauche",
            Styles: "Styles",
            Classes: "Classes",
            Align: "Alignement",
            Right: "Droite",
            Center: "Centre",
            Left: "Gauche",
            "--Not Set--": "--Non disponible--",
            Src: "Source",
            Title: "Titre",
            Alternative: "Alternative",
            Filter: "Filtre",
            Link: "Lien",
            "Open link in new tab": "Ouvrir le lien dans un nouvel onglet",
            Image: "Image",
            file: "fichier",
            Advanced: "Avancé",
            "Image properties": "Propriétés de l'image",
            Cancel: "Effacer",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?",
            "Paste as HTML": "Coller en HTML?",
            Keep: "Sauvegarder l'original",
            Clean: "Nettoyer",
            "Insert as Text": "Coller en tant que texte",
            "Word Paste Detected": "C'est peut-être un fragment de Word ou Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?",
            "Insert only Text": "Coller le texte seulement",
            "File Browser": "Explorateur de fichiers",
            "Error on load list": "Erreur de liste de chargement",
            "Error on load folders": "Erreur de dossier de chargement",
            "Are you sure?": "Etes-vous sûrs ?",
            "Enter Directory name": "Entrer le non de dossier",
            "Create directory": "Créer un dossier",
            "type name": "type de fichier",
            "Drop image": "Coller une image",
            "Drop file": "Déposer un fichier",
            "or click": "ou cliquer",
            "Alternative text": "Texte de remplacemement",
            Browse: "Chercher",
            Upload: "Charger",
            Background: "Arrière-plan",
            Text: "Texte",
            Top: "Haut",
            Middle: "Milieu",
            Bottom: "Bas",
            "Insert column before": "Insérer une colonne avant",
            "Insert column after": "Insérer une colonne après",
            "Insert row above": "Insérer une ligne en dessus",
            "Insert row below": "Insérer une ligne en dessous",
            "Delete table": "Supprimer le tableau",
            "Delete row": "Supprimer la ligne",
            "Delete column": "Supprimer la colonne",
            "Empty cell": "Vider la cellule",
            "Chars: %d": "Symboles: %d",
            "Words: %d": "Mots: %d",
            Split: "Split",
            "Split vertical": "Split vertical",
            "Split horizontal": "Split horizontal",
            "Strike through": "Frapper à travers",
            Underline: "Souligner",
            superscript: "exposant",
            subscript: "indice",
            "Cut selection": "Couper la sélection",
            "Select all": "Tout sélectionner",
            Break: "Pause",
            "Search for": "Rechercher",
            "Replace with": "Remplacer par",
            Replace: "Remplacer",
            Paste: "Coller",
            "Choose Content to Paste": "Choisissez le contenu à coller",
            source: "la source",
            bold: "graisseux",
            italic: "italique",
            brush: "verser",
            link: "lien",
            undo: "abolir",
            redo: "prêt",
            table: "graphique",
            image: "Image",
            eraser: "la gommen",
            paragraph: "clause",
            fontsize: "taille de police",
            video: "Video",
            font: "police",
            about: "à propos de l'éditeur",
            print: "impression",
            symbol: "caractère",
            underline: "souligné",
            strikethrough: "barré",
            indent: "indentation",
            outdent: "indifférent",
            fullsize: "taille réelle",
            shrink: "taille conventionnelle",
            copyformat: "Format de copie",
            hr: "la ligne",
            ul: "Liste des",
            ol: "Liste numérotée",
            cut: "Couper",
            selectall: "Sélectionner tout",
            "Open link": "Ouvrir le lien",
            "Edit link": "Modifier le lien",
            "No follow": "Attribut Nofollow",
            Unlink: "Supprimer le lien",
            Eye: "Voir",
            pencil: "Pour éditer",
            " URL": "URL",
            Reset: "Restaurer",
            Save: "Sauvegarder",
            "Save as ...": "Enregistrer sous",
            Resize: "Changer la taille",
            Crop: "Taille de garniture",
            Width: "Largeur",
            Height: "Hauteur",
            "Keep Aspect Ratio": "Garder les proportions",
            Yes: "Oui",
            No: "Non",
            Remove: "Supprimer",
            Select: "Mettre en évidence",
            "Select %s": "Mettre en évidence: %s",
            Update: "Mettre à jour",
            "Vertical align": "Alignement vertical",
            Merge: "aller",
            "Add column": "Ajouter une colonne",
            "Add row": "Ajouter une rangée",
            Delete: "Effacer",
            "Horizontal align": "Alignement horizontal",
            "Sort by changed": "Trier par modifié",
            "Sort by name": "Trier par nom",
            "Sort by size": "Classer par taille",
            "Add folder": "Ajouter le dossier",
            "You can only edit your own images. Download this image on the host?": "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?",
            "The image has been successfully uploaded to the host!": "L'image a été téléchargée avec succès sur le serveur!null",
            palette: "Palette",
            "There are no files": "Il n'y a aucun fichier dans ce répertoire.",
            Rename: "renommer",
            "Enter new name": "Entrez un nouveau nom",
            preview: "Aperçu",
            download: "Télécharger",
            "Paste from clipboard": "Coller à partir du presse-papiers",
            "Your browser doesn't support direct access to the clipboard.": "Votre navigateur ne prend pas en charge l'accès direct à la presse-papiers.",
            "Copy selection": "Copier la sélection",
            copy: "copie",
            "Border radius": "Rayon des frontières",
            "Show all": "Afficher tous les",
            Apply: "Appliquer",
            "Please fill out this field": "Veuillez remplir ce champ",
            "Please enter a web address": "Veuillez entrer une adresse web",
            Default: "Par défaut",
            Circle: "Cercle",
            Dot: "Dot",
            Quadrate: "Quadrate",
            Find: "Trouver",
            "Find Previous": "Trouvez Précédente",
            "Find Next": "Suivant"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "הקלד משהו...",
            Advanced: "מתקדם",
            "About Jodit": "About Jodit",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Jodit User's Guide",
            "contains detailed help for using": "contains detailed help for using.",
            "For information about the license, please go to our website:": "For information about the license, please go to our website:",
            "Buy full version": "Buy full version",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
            Anchor: "מקום עיגון",
            "Open in new tab": "פתח בכרטיסיה חדשה",
            "Open editor in fullsize": "פתח את העורך בחלון חדש",
            "Clear Formatting": "נקה עיצוב",
            "Fill color or set the text color": "שנה צבע טקסט או רקע",
            Redo: "בצע שוב",
            Undo: "בטל",
            Bold: "מודגש",
            Italic: "נטוי",
            "Insert Unordered List": "הכנס רשימת תבליטים",
            "Insert Ordered List": "הכנס רשימה ממוספרת",
            "Align Center": "מרכז",
            "Align Justify": "ישר ",
            "Align Left": "ישר לשמאל",
            "Align Right": "ישר לימין",
            "Insert Horizontal Line": "הכנס קו אופקי",
            "Insert Image": "הכנס תמונה",
            "Insert file": "הכנס קובץ",
            "Insert youtube/vimeo video": "הכנס סרטון וידאו מYouTube/Vimeo",
            "Insert link": "הכנס קישור",
            "Font size": "גודל גופן",
            "Font family": "גופן",
            "Insert format block": "מעוצב מראש",
            Normal: "רגיל",
            "Heading 1": "כותרת 1",
            "Heading 2": "כותרת 2",
            "Heading 3": "כותרת 3",
            "Heading 4": "כותרת 4",
            Quote: "ציטוט",
            Code: "קוד",
            Insert: "הכנס",
            "Insert table": "הכנס טבלה",
            "Decrease Indent": "הקטן כניסה",
            "Increase Indent": "הגדל כניסה",
            "Select Special Character": "בחר תו מיוחד",
            "Insert Special Character": "הכנס תו מיוחד",
            "Paint format": "העתק עיצוב",
            "Change mode": "החלף מצב",
            Margins: "ריווח",
            top: "עליון",
            right: "ימין",
            bottom: "תחתון",
            left: "שמאל",
            Styles: "עיצוב CSS",
            Classes: "מחלקת CSS",
            Align: "יישור",
            Right: "ימין",
            Center: "מרכז",
            Left: "שמאל",
            "--Not Set--": "--לא נקבע--",
            Src: "מקור",
            Title: "כותרת",
            Alternative: "כיתוב חלופי",
            Link: "קישור",
            "Open link in new tab": "פתח בכרטיסיה חדשה",
            Image: "תמונה",
            file: "קובץ",
            Advansed: "מתקדם",
            "Image properties": "מאפייני תמונה",
            Cancel: "ביטול",
            Ok: "אישור",
            "Your code is similar to HTML. Keep as HTML?": "הקוד דומה לHTML, האם להשאיר כHTML",
            "Paste as HTML": "הדבק כHTML",
            Keep: "השאר",
            Clean: "נקה",
            "Insert as Text": "הכנס כטקסט",
            "Word Paste Detected": 'זוהתה הדבקה מ"וורד"',
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו",
            "Insert only Text": "הכנס טקסט בלבד",
            "File Browser": "סייר הקבצים",
            "Error on load list": "שגיאה  בזמן טעינת רשימה",
            "Error on load folders": "שגיאה בזמן טעינת תקיות",
            "Are you sure?": "האם אתה בטוח?",
            "Enter Directory name": "הכנס שם תקיה",
            "Create directory": "צור תקיה",
            "type name": "סוג הקובץ",
            "Drop image": "הסר תמונה",
            "Drop file": "הסר קובץ",
            "or click": "או לחץ",
            "Alternative text": "כיתוב חלופי",
            Browse: "סייר",
            Upload: "העלה",
            Background: "רקע",
            Text: "טקסט",
            Top: "עליון",
            Middle: "מרכז",
            Bottom: "תחתון",
            "Insert column before": "הכנס עמודה לפני",
            "Insert column after": "הכנס עמודה אחרי",
            "Insert row above": "הכנס שורה מעל",
            "Insert row below": "הכנס שורה מתחת",
            "Delete table": "מחק טבלה",
            "Delete row": "מחק שורה",
            "Delete column": "מחק עמודה",
            "Empty cell": "רוקן תא",
            Delete: "מחק",
            "Strike through": "קו חוצה",
            Underline: "קו תחתון",
            Break: "שבירת שורה",
            "Search for": "חפש",
            "Replace with": "החלף ב",
            Replace: "להחליף",
            Edit: "ערוך",
            "Vertical align": "יישור אנכי",
            "Horizontal align": "יישור אופקי",
            Filter: "סנן",
            "Sort by changed": "מין לפי שינוי",
            "Sort by name": "מיין לפי שם",
            "Sort by size": "מיין לפי גודל",
            "Add folder": "הוסף תקייה",
            Split: "פיצול",
            "Split vertical": "פיצול אנכי",
            "Split horizontal": "פיצול אופקי",
            Merge: "מזג",
            "Add column": "הוסף עמודה",
            "Add row": "הוסף שורה",
            Border: "מסגרת",
            "Embed code": "הוסף קוד",
            Update: "עדכן",
            superscript: "superscript",
            subscript: "subscript",
            "Cut selection": "גזור בחירה",
            Paste: "הדבק",
            "Choose Content to Paste": "בחר תוכן להדבקה",
            "Chars: %d": "תווים: %d",
            "Words: %d": "מילים: %d",
            All: "הכל",
            "Select %s": "נבחר: %s",
            "Select all": "בחר הכל",
            source: "HTML",
            bold: "מודגש",
            italic: "נטוי",
            brush: "מברשת",
            link: "קישור",
            undo: "בטל",
            redo: "בצע שוב",
            table: "טבלה",
            image: "תמונה",
            eraser: "מחק",
            paragraph: "פסקה",
            fontsize: "גודל גופן",
            video: "וידאו",
            font: "גופן",
            about: "עלינו",
            print: "הדפס",
            symbol: "תו מיוחד",
            underline: "קו תחתון",
            strikethrough: "קו חוצה",
            indent: "הגדל כניסה",
            outdent: "הקטן כניסה",
            fullsize: "גודל מלא",
            shrink: "כווץ",
            copyformat: "העתק עיצוב",
            hr: "קו אופקי",
            ul: "רשימת תבליטים",
            ol: "רשימה ממוספרת",
            cut: "חתוך",
            selectall: "בחר הכל",
            "Open link": "פתח קישור",
            "Edit link": "ערוך קישור",
            "No follow": "ללא מעקב",
            Unlink: "בטל קישור",
            Eye: "הצג",
            pencil: "כדי לערוך",
            " URL": "כתובת",
            Reset: "אפס",
            Save: "שמור",
            "Save as ...": "שמור בשם...",
            Resize: "שנה גודל",
            Crop: "חתוך",
            Width: "רוחב",
            Height: "גובה",
            "Keep Aspect Ratio": "שמור יחס",
            Yes: "כן",
            No: "לא",
            Remove: "הסר",
            Select: "בחר",
            "You can only edit your own images. Download this image on the host?": "רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?",
            "The image has been successfully uploaded to the host!": "התמונה עלתה בהצלחה!",
            palette: "לוח",
            "There are no files": "אין קבצים בספריה זו.",
            Rename: "הונגרית",
            "Enter new name": "הזן שם חדש",
            preview: "תצוגה מקדימה",
            download: "הורד",
            "Paste from clipboard": "להדביק מהלוח",
            "Your browser doesn't support direct access to the clipboard.": "הדפדפן שלך לא תומך גישה ישירה ללוח.",
            "Copy selection": "העתק בחירה",
            copy: "העתק",
            "Border radius": "רדיוס הגבול",
            "Show all": "הצג את כל",
            Apply: "החל",
            "Please fill out this field": "נא למלא שדה זה",
            "Please enter a web address": "אנא הזן כתובת אינטרנט",
            Default: "ברירת המחדל",
            Circle: "מעגל",
            Dot: "נקודה",
            Quadrate: "הריבוע הזה",
            Find: "למצוא",
            "Find Previous": "מצא את הקודם",
            "Find Next": "חפש את הבא"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Írjon be valamit",
            Advanced: "Haladó",
            "About Jodit": "Joditról",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Ingyenes változat",
            "Jodit User's Guide": "Jodit útmutató",
            "contains detailed help for using": "további segítséget tartalmaz",
            "For information about the license, please go to our website:": "További licence információkért látogassa meg a weboldalunkat:",
            "Buy full version": "Teljes verzió megvásárlása",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.",
            Anchor: "Horgony",
            "Open in new tab": "Megnyitás új lapon",
            "Open editor in fullsize": "Megnyitás teljes méretben",
            "Clear Formatting": "Formázás törlése",
            "Fill color or set the text color": "Háttér/szöveg szín",
            Redo: "Újra",
            Undo: "Visszavon",
            Bold: "Félkövér",
            Italic: "Dőlt",
            "Insert Unordered List": "Pontozott lista",
            "Insert Ordered List": "Számozott lista",
            "Align Center": "Középre zárt",
            "Align Justify": "Sorkizárt",
            "Align Left": "Balra zárt",
            "Align Right": "Jobbra zárt",
            "Insert Horizontal Line": "Vízszintes vonal beszúrása",
            "Insert Image": "Kép beszúrás",
            "Insert file": "Fájl beszúrás",
            "Insert youtube/vimeo video": "Youtube videó beszúrása",
            "Insert link": "Link beszúrás",
            "Font size": "Betűméret",
            "Font family": "Betűtípus",
            "Insert format block": "Formázott blokk beszúrása",
            Normal: "Normál",
            "Heading 1": "Fejléc 1",
            "Heading 2": "Fejléc 2",
            "Heading 3": "Fejléc 3",
            "Heading 4": "Fejléc 4",
            Quote: "Idézet",
            Code: "Kód",
            Insert: "Beszúr",
            "Insert table": "Táblázat beszúrása",
            "Decrease Indent": "Behúzás csökkentése",
            "Increase Indent": "Behúzás növelése",
            "Select Special Character": "Speciális karakter kiválasztása",
            "Insert Special Character": "Speciális karakter beszúrása",
            "Paint format": "Kép formázása",
            "Change mode": "Nézet váltása",
            Print: "Nyomtatás",
            Margins: "Szegélyek",
            top: "felső",
            right: "jobb",
            bottom: "alsó",
            left: "bal",
            Styles: "CSS stílusok",
            Classes: "CSS osztályok",
            Align: "Igazítás",
            Right: "Jobbra",
            Center: "Középre",
            Left: "Balra",
            "--Not Set--": "Nincs",
            Src: "Forrás",
            Title: "Cím",
            Alternative: "Helyettesítő szöveg",
            Link: "Link",
            "Open link in new tab": "Link megnyitása új lapon",
            Image: "Kép",
            file: "Fájl",
            Advansed: "További beállítás",
            "Image properties": "Kép tulajdonságai",
            Cancel: "Mégsem",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?",
            "Paste as HTML": "Beszúrás HTML-ként",
            Keep: "Megtartás",
            Clean: "Elvetés",
            "Insert as Text": "Beszúrás szövegként",
            "Word Paste Detected": "Word-ből másolt szöveg",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?",
            "Insert only Text": "Csak szöveg beillesztése",
            "File Browser": "Fájl tallózó",
            "Error on load list": "Hiba a lista betöltése közben",
            "Error on load folders": "Hiba a mappák betöltése közben",
            "Are you sure?": "Biztosan ezt szeretné?",
            "Enter Directory name": "Írjon be egy mappanevet",
            "Create directory": "Mappa létrehozása",
            "type name": "írjon be bevet",
            "Drop image": "Húzza ide a képet",
            "Drop file": "Húzza ide a fájlt",
            "or click": "vagy kattintson",
            "Alternative text": "Helyettesítő szöveg",
            Browse: "Tallóz",
            Upload: "Feltölt",
            Background: "Háttér",
            Text: "Szöveg",
            Top: "Fent",
            Middle: "Középen",
            Bottom: "Lent",
            "Insert column before": "Oszlop beszúrás elé",
            "Insert column after": "Oszlop beszúrás utána",
            "Insert row above": "Sor beszúrás fölé",
            "Insert row below": "Sor beszúrás alá",
            "Delete table": "Táblázat törlése",
            "Delete row": "Sor törlése",
            "Delete column": "Oszlop törlése",
            "Empty cell": "Cella tartalmának törlése",
            Delete: "Törlés",
            "Strike through": "Áthúzott",
            Underline: "Aláhúzott",
            Break: "Szünet",
            "Search for": "Keresés",
            "Replace with": "Csere erre",
            Replace: "Cserélje ki",
            Edit: "Szerkeszt",
            "Vertical align": "Függőleges igazítás",
            "Horizontal align": "Vízszintes igazítás",
            Filter: "Szűrő",
            "Sort by changed": "Rendezés módosítás szerint",
            "Sort by name": "Rendezés név szerint",
            "Sort by size": "Rendezés méret szerint",
            "Add folder": "Mappa hozzáadás",
            "Split vertical": "Függőleges felosztás",
            "Split horizontal": "Vízszintes felosztás",
            Merge: "Összevonás",
            "Add column": "Oszlop hozzáadás",
            "Add row": "Sor hozzáadás",
            Border: "Szegély",
            "Embed code": "Beágyazott kód",
            Update: "Frissít",
            superscript: "Felső index",
            subscript: "Alsó index",
            "Cut selection": "Kivágás",
            Paste: "Beillesztés",
            "Choose Content to Paste": "Válasszon tartalmat a beillesztéshez",
            Split: "Felosztás",
            "Chars: %d": "Karakterek száma: %d",
            "Words: %d": "Szavak száma: %d",
            All: "Összes",
            "Select %s": "Kijelöl: %s",
            "Select all": "Összes kijelölése",
            source: "HTML",
            bold: "Félkövér",
            italic: "Dőlt",
            brush: "Ecset",
            link: "Link",
            undo: "Visszavon",
            redo: "Újra",
            table: "Táblázat",
            image: "Kép",
            eraser: "Törlés",
            paragraph: "Paragráfus",
            fontsize: "Betűméret",
            video: "Videó",
            font: "Betű",
            about: "Rólunk",
            print: "Nyomtat",
            symbol: "Szimbólum",
            underline: "Aláhúzott",
            strikethrough: "Áthúzott",
            indent: "Behúzás",
            outdent: "Aussenseiter",
            fullsize: "Teljes méret",
            shrink: "Összenyom",
            copyformat: "Formátum másolás",
            hr: "Egyenes vonal",
            ul: "Lista",
            ol: "Számozott lista",
            cut: "Kivág",
            selectall: "Összes kijelölése",
            "Open link": "Link megnyitása",
            "Edit link": "Link szerkesztése",
            "No follow": "Nincs követés",
            Unlink: "Link leválasztása",
            Eye: "felülvizsgálat",
            pencil: "Szerkesztés",
            " URL": "URL",
            Reset: "Visszaállít",
            Save: "Mentés",
            "Save as ...": "Mentés másként...",
            Resize: "Átméretezés",
            Crop: "Kivág",
            Width: "Szélesség",
            Height: "Magasság",
            "Keep Aspect Ratio": "Képarány megtartása",
            Yes: "Igen",
            No: "Nem",
            Remove: "Eltávolít",
            Select: "Kijelöl",
            "You can only edit your own images. Download this image on the host?": "Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?",
            "The image has been successfully uploaded to the host!": "Kép sikeresen feltöltve!",
            palette: "Palette",
            "There are no files": "Er zijn geen bestanden in deze map.",
            Rename: "átnevezés",
            "Enter new name": "Adja meg az új nevet",
            preview: "előnézet",
            download: "Letöltés",
            "Paste from clipboard": "Illessze be a vágólap",
            "Your browser doesn't support direct access to the clipboard.": "A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.",
            "Copy selection": "Másolás kiválasztása",
            copy: "másolás",
            "Border radius": "Határ sugár",
            "Show all": "Összes",
            Apply: "Alkalmazni",
            "Please fill out this field": "Kérjük, töltse ki ezt a mezőt,",
            "Please enter a web address": "Kérjük, írja be a webcímet",
            Default: "Alapértelmezett",
            Circle: "Kör",
            Dot: "Pont",
            Quadrate: "Quadrate",
            Find: "Találni",
            "Find Previous": "Megtalálja Előző",
            "Find Next": "Következő Keresése"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Ketik sesuatu",
            "About Jodit": "Tentang Jodit",
            "Jodit Editor": "Editor Jodit",
            "Free Non-commercial Version": "Versi Bebas Non-komersil",
            "Jodit User's Guide": "Panduan Pengguna Jodit",
            "contains detailed help for using": "mencakup detail bantuan penggunaan",
            "For information about the license, please go to our website:": "Untuk informasi tentang lisensi, silakan kunjungi website:",
            "Buy full version": "Beli versi lengkap",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.",
            Anchor: "Tautan",
            "Open in new tab": "Buka di tab baru",
            "Open editor in fullsize": "Buka editor dalam ukuran penuh",
            "Clear Formatting": "Hapus Pemformatan",
            "Fill color or set the text color": "Isi warna atau atur warna teks",
            Redo: "Ulangi",
            Undo: "Batalkan",
            Bold: "Tebal",
            Italic: "Miring",
            "Insert Unordered List": "Sisipkan Daftar Tidak Berurut",
            "Insert Ordered List": "Sisipkan Daftar Berurut",
            "Align Center": "Tengah",
            "Align Justify": "Penuh",
            "Align Left": "Kiri",
            "Align Right": "Kanan",
            "Insert Horizontal Line": "Sisipkan Garis Horizontal",
            "Insert Image": "Sisipkan Gambar",
            "Insert file": "Sisipkan Berkas",
            "Insert youtube/vimeo video": "Sisipkan video youtube/vimeo",
            "Insert link": "Sisipkan tautan",
            "Font size": "Ukuran font",
            "Font family": "Keluarga font",
            "Insert format block": "Sisipkan blok format",
            Normal: "Normal",
            "Heading 1": "Heading 1",
            "Heading 2": "Heading 2",
            "Heading 3": "Heading 3",
            "Heading 4": "Heading 4",
            Quote: "Kutip",
            Code: "Kode",
            Insert: "Sisipkan",
            "Insert table": "Sisipkan tabel",
            "Decrease Indent": "Kurangi Indentasi",
            "Increase Indent": "Tambah Indentasi",
            "Select Special Character": "Pilih Karakter Spesial",
            "Insert Special Character": "Sisipkan Karakter Spesial",
            "Paint format": "Formar warna",
            "Change mode": "Ubah mode",
            Margins: "Batas",
            top: "atas",
            right: "kanan",
            bottom: "bawah",
            left: "kiri",
            Styles: "Gaya",
            Classes: "Class",
            Align: "Rata",
            Right: "Kanan",
            Center: "Tengah",
            Left: "Kiri",
            "--Not Set--": "--Tidak diset--",
            Src: "Src",
            Title: "Judul",
            Alternative: "Teks alternatif",
            Link: "Tautan",
            "Open link in new tab": "Buka tautan di tab baru",
            Image: "Gambar",
            file: "berkas",
            Advanced: "Lanjutan",
            "Image properties": "Properti gambar",
            Cancel: "Batal",
            Ok: "Ya",
            "Your code is similar to HTML. Keep as HTML?": "Kode Anda cenderung ke HTML. Biarkan sebagai HTML?",
            "Paste as HTML": "Paste sebagai HTML",
            Keep: "Jaga",
            Clean: "Bersih",
            "Insert as Text": "Sisipkan sebagai teks",
            "Insert only Text": "Sisipkan hanya teks",
            "Word Paste Detected": "Terdeteksi paste dari Word",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?",
            "File Browser": "Penjelajah Berkas",
            "Error on load list": "Error ketika memuat list",
            "Error on load folders": "Error ketika memuat folder",
            "Are you sure?": "Apakah Anda yakin?",
            "Enter Directory name": "Masukkan nama Direktori",
            "Create directory": "Buat direktori",
            "type name": "ketik nama",
            "Drop image": "Letakkan gambar",
            "Drop file": "Letakkan berkas",
            "or click": "atau klik",
            "Alternative text": "Teks alternatif",
            Browse: "Jelajahi",
            Upload: "Unggah",
            Background: "Latar Belakang",
            Text: "Teks",
            Top: "Atas",
            Middle: "Tengah",
            Bottom: "Bawah",
            "Insert column before": "Sisipkan kolom sebelumnya",
            "Insert column after": "Sisipkan kolom setelahnya",
            "Insert row above": "Sisipkan baris di atasnya",
            "Insert row below": "Sisipkan baris di bawahnya",
            "Delete table": "Hapus tabel",
            "Delete row": "Hapus baris",
            "Delete column": "Hapus kolom",
            "Empty cell": "Kosongkan cell",
            source: "sumber",
            bold: "tebal",
            italic: "miring",
            brush: "sikat",
            link: "tautan",
            undo: "batalkan",
            redo: "ulangi",
            table: "tabel",
            image: "gambar",
            eraser: "penghapus",
            paragraph: "paragraf",
            fontsize: "ukuran font",
            video: "video",
            font: "font",
            about: "tentang",
            print: "cetak",
            symbol: "simbol",
            underline: "garis bawah",
            strikethrough: "coret",
            indent: "menjorok ke dalam",
            outdent: "menjorok ke luar",
            fullsize: "ukuran penuh",
            shrink: "menyusut",
            copyformat: "salin format",
            hr: "hr",
            ul: "ul",
            ol: "ol",
            cut: "potong",
            selectall: "Pilih semua",
            "Embed code": "Kode embed",
            "Open link": "Buka tautan",
            "Edit link": "Edit tautan",
            "No follow": "No follow",
            Unlink: "Hapus tautan",
            Eye: "Mata",
            pencil: "pensil",
            Update: "Perbarui",
            " URL": "URL",
            Edit: "Edit",
            "Horizontal align": "Perataan horizontal",
            Filter: "Filter",
            "Sort by changed": "Urutkan berdasarkan perubahan",
            "Sort by name": "Urutkan berdasarkan nama",
            "Sort by size": "Urutkan berdasarkan ukuran",
            "Add folder": "Tambah folder",
            Reset: "Reset",
            Save: "Simpan",
            "Save as ...": "Simpan sebagai...",
            Resize: "Ubah ukuran",
            Crop: "Crop",
            Width: "Lebar",
            Height: "Tinggi",
            "Keep Aspect Ratio": "Jaga aspek rasio",
            Yes: "Ya",
            No: "Tidak",
            Remove: "Copot",
            Select: "Pilih",
            "Chars: %d": "Karakter: %d",
            "Words: %d": "Kata: %d",
            All: "Semua",
            "Select %s": "Pilih %s",
            "Select all": "Pilih semua",
            "Vertical align": "Rata vertikal",
            Split: "Bagi",
            "Split vertical": "Bagi secara vertikal",
            "Split horizontal": "Bagi secara horizontal",
            Merge: "Gabungkan",
            "Add column": "Tambah kolom",
            "Add row": "tambah baris",
            Delete: "Hapus",
            Border: "Bingkai",
            "License: %s": "Lisensi: %s",
            "Strike through": "Coret",
            Underline: "Garis Bawah",
            superscript: "Superskrip",
            subscript: "Subskrip",
            "Cut selection": "Potong pilihan",
            Break: "Berhenti",
            "Search for": "Mencari",
            "Replace with": "Ganti dengan",
            Replace: "Mengganti",
            Paste: "Paste",
            "Choose Content to Paste": "Pilih konten untuk dipaste",
            "You can only edit your own images. Download this image on the host?": "Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?",
            "The image has been successfully uploaded to the host!": "Gambar telah sukses diunggah ke host!",
            palette: "palet",
            "There are no files": "Tidak ada berkas",
            Rename: "ganti nama",
            "Enter new name": "Masukkan nama baru",
            preview: "pratinjau",
            download: "Unduh",
            "Paste from clipboard": "Paste dari clipboard",
            "Your browser doesn't support direct access to the clipboard.": "Browser anda tidak mendukung akses langsung ke clipboard.",
            "Copy selection": "Copy seleksi",
            copy: "copy",
            "Border radius": "Border radius",
            "Show all": "Tampilkan semua",
            Apply: "Menerapkan",
            "Please fill out this field": "Silahkan mengisi kolom ini",
            "Please enter a web address": "Silahkan masukkan alamat web",
            Default: "Default",
            Circle: "Lingkaran",
            Dot: "Dot",
            Quadrate: "Kuadrat",
            Find: "Menemukan",
            "Find Previous": "Menemukan Sebelumnya",
            "Find Next": "Menemukan Berikutnya"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Scrivi qualcosa...",
            Advanced: "Avanzato",
            "About Jodit": "A proposito di Jodit",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Guida utente di Jodit",
            "contains detailed help for using": "contiene una guida dettagliata per l'uso.",
            "For information about the license, please go to our website:": "Per informazioni sulla licenza, si prega di visitare il nostro sito:",
            "Buy full version": "Acquista la versione completa",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.",
            Anchor: "Ancora",
            "Open in new tab": "Apri in una nuova scheda",
            "Open editor in fullsize": "Apri l'editor a schermo intero",
            "Clear Formatting": "Formato chiaro",
            "Fill color or set the text color": "Riempi colore o lettera",
            Redo: "Ripristina",
            Undo: "Annulla",
            Bold: "Grassetto",
            Italic: "Corsivo",
            "Insert Unordered List": "Inserisci lista non ordinata",
            "Insert Ordered List": "Inserisci l'elenco ordinato",
            "Align Center": "Allinea Centra",
            "Align Justify": "Allineare Giustificato",
            "Align Left": "Allinea a Sinistra",
            "Align Right": "Allinea a Destra",
            "Insert Horizontal Line": "Inserisci la linea orizzontale",
            "Insert Image": "Inserisci immagine",
            "Insert file": "Inserisci un file",
            "Insert youtube/vimeo video": "Inserisci video Youtube/Vimeo",
            "Insert link": "Inserisci il link",
            "Font size": "Dimensione del carattere",
            "Font family": "Tipo di font",
            "Insert format block": "Inserisci blocco",
            Normal: "Normale",
            "Heading 1": "Heading 1",
            "Heading 2": "Heading 2",
            "Heading 3": "Heading 3",
            "Heading 4": "Heading 4",
            Quote: "Citazione",
            Code: "Codice",
            Insert: "Inserisci",
            "Insert table": "Inserisci tabella",
            "Decrease Indent": "Riduci il rientro",
            "Increase Indent": "Aumenta il rientro",
            "Select Special Character": "Seleziona una funzione speciale",
            "Insert Special Character": "Inserisci un carattere speciale",
            "Paint format": "Copia formato",
            "Change mode": "Cambia modo",
            Margins: "Margini",
            top: "su",
            right: "destra",
            bottom: "giù",
            left: "sinistra",
            Styles: "Stili CSS",
            Classes: "Classi CSS",
            Align: "Allinea",
            Right: "Destra",
            Center: "Centro",
            Left: "Sinistra",
            "--Not Set--": "--Non Impostato--",
            Src: "Fonte",
            Title: "Titolo",
            Alternative: "Testo Alternativo",
            Link: "Link",
            "Open link in new tab": "Apri il link in una nuova scheda",
            Image: "Immagine",
            file: "Archivio",
            Advansed: "Avanzato",
            "Image properties": "Proprietà dell'immagine",
            Cancel: "Annulla",
            Ok: "Accetta",
            "Your code is similar to HTML. Keep as HTML?": "Il codice è simile all'HTML. Mantieni come HTML?",
            "Paste as HTML": "Incolla come HTML?",
            Keep: "Mantieni",
            Clean: "Pulisci",
            "Insert as Text": "Inserisci come testo",
            "Word Paste Detected": "Incollato da Word rilevato",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?",
            "Insert only Text": "Inserisci solo il testo",
            "File Browser": "Cerca il file",
            "Error on load list": "Errore durante il caricamento dell'elenco",
            "Error on load folders": "Errore durante il caricamento delle cartelle",
            "Are you sure?": "Sei sicuro?",
            "Enter Directory name": "Inserisci il nome della cartella",
            "Create directory": "Crea cartella",
            "type name": "Entre el nombre",
            "Drop image": "Rilascia l'immagine",
            "Drop file": "Rilascia file",
            "or click": "o click",
            "Alternative text": "Testo alternativo",
            Browse: "Sfoglia",
            Upload: "Carica",
            Background: "Sfondo",
            Text: "Testo",
            Top: "Su",
            Middle: "Centro",
            Bottom: "Sotto",
            "Insert column before": "Inserisci prima la colonna",
            "Insert column after": "Inserisci colonna dopo",
            "Insert row above": "Inserisci la riga sopra",
            "Insert row below": "Inserisci la riga sotto",
            "Delete table": "Elimina tabella",
            "Delete row": "Elimina riga",
            "Delete column": "Elimina colonna",
            "Empty cell": "Cella vuota",
            Delete: "Cancella",
            "Strike through": "Barrato",
            Underline: "Sottolineato",
            Break: "Pausa",
            "Search for": "Cerca",
            "Replace with": "Sostituisci con",
            Replace: "Sostituire",
            Edit: "Modifica",
            "Vertical align": "Allineamento verticala",
            "Horizontal align": "Allineamento orizzontale",
            Filter: "Filtro",
            "Sort by changed": "Ordina per data di modifica",
            "Sort by name": "Ordina per nome",
            "Sort by size": "Ordina per dimensione",
            "Add folder": "Aggiungi cartella",
            Split: "Dividere",
            "Split vertical": "Dividere verticalmente",
            "Split horizontal": "Diviso orizzontale",
            Merge: "Fondi",
            "Add column": "Aggiungi colonna",
            "Add row": "Aggiungi riga",
            Border: "Bordo",
            "Embed code": "Includi codice",
            Update: "Aggiornare",
            superscript: "indice",
            subscript: "deponente",
            "Cut selection": "Taglia la selezione",
            Paste: "Incolla",
            "Choose Content to Paste": "Seleziona il contenuto da incollare",
            "Chars: %d": "Caratteri: %d",
            "Words: %d": "Parole: %d",
            All: "Tutto",
            "Select %s": "Seleziona: %s",
            "Select all": "Seleziona tutto",
            source: "HTML",
            bold: "Grassetto",
            italic: "Corsivo",
            brush: "Pennello",
            link: "Link",
            undo: "Annulla",
            redo: "Ripristina",
            table: "Tabella",
            image: "Immagine",
            eraser: "Gomma",
            paragraph: "Paragrafo",
            fontsize: "Dimensione del carattere",
            video: "Video",
            font: "Font",
            about: "Approposito di",
            print: "Stampa",
            symbol: "Simbolo",
            underline: "Sottolineato",
            strikethrough: "Barrato",
            indent: "trattino",
            outdent: "annulla rientro",
            fullsize: "A grandezza normale",
            shrink: "comprimere",
            copyformat: "Copia il formato",
            hr: "linea orizzontale",
            ul: "lista non ordinata",
            ol: "lista ordinata",
            cut: "Taglia",
            selectall: "Seleziona tutto",
            "Open link": "Apri link",
            "Edit link": "Modifica link",
            "No follow": "Non seguire",
            Unlink: "Togli link",
            Eye: "Recensione",
            pencil: "Per modificare",
            " URL": " URL",
            Reset: "Reset",
            Save: "Salva",
            "Save as ...": "Salva con nome...",
            Resize: "Ridimensiona",
            Crop: "Tagliare",
            Width: "Larghezza",
            Height: "Altezza",
            "Keep Aspect Ratio": "Mantenere le proporzioni",
            Yes: "Si",
            No: "No",
            Remove: "Rimuovere",
            Select: "Seleziona",
            "You can only edit your own images. Download this image on the host?": "Puoi modificare solo le tue immagini. Scarica questa immagine sul server?",
            "The image has been successfully uploaded to the host!": "L'immagine è stata caricata con successo sul server!",
            palette: "tavolozza",
            "There are no files": "Non ci sono file in questa directory.",
            Rename: "ungherese",
            "Enter new name": "Inserisci un nuovo nome",
            preview: "anteprima",
            download: "Scaricare",
            "Paste from clipboard": "Incolla dagli appunti",
            "Your browser doesn't support direct access to the clipboard.": "Il tuo browser non supporta l'accesso diretto agli appunti.",
            "Copy selection": "Selezione di copia",
            copy: "copia",
            "Border radius": "Border radius",
            "Show all": "Mostra tutti",
            Apply: "Applicare",
            "Please fill out this field": "Si prega di compilare questo campo",
            "Please enter a web address": "Si prega di inserire un indirizzo web",
            Default: "Di Default",
            Circle: "Cerchio",
            Dot: "Dot",
            Quadrate: "Quadrate",
            Find: "Trovare",
            "Find Previous": "Trova Precedente",
            "Find Next": "Trova Successivo"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "なにかタイプしてください",
            Advanced: "高度な設定",
            "About Jodit": "Joditについて",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Jodit ユーザーズ・ガイド",
            "contains detailed help for using": "詳しい使い方",
            "For information about the license, please go to our website:": "ライセンス詳細についてはJodit Webサイトを確認ください：",
            "Buy full version": "フルバージョンを購入",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
            Anchor: "Anchor",
            "Open in new tab": "新しいタブで開く",
            "Open editor in fullsize": "エディターのサイズ（フル/ノーマル）",
            "Clear Formatting": "書式をクリア",
            "Fill color or set the text color": "テキストの色",
            Redo: "やり直し",
            Undo: "元に戻す",
            Bold: "太字",
            Italic: "斜体",
            "Insert Unordered List": "箇条書き",
            "Insert Ordered List": "番号付きリスト",
            "Align Center": "中央揃え",
            "Align Justify": "両端揃え",
            "Align Left": "左揃え",
            "Align Right": "右揃え",
            "Insert Horizontal Line": "区切り線を挿入",
            "Insert Image": "画像を挿入",
            "Insert file": "ファイルを挿入",
            "Insert youtube/vimeo video": "Youtube/Vimeo 動画",
            "Insert link": "リンクを挿入",
            "Font size": "フォントサイズ",
            "Font family": "フォント",
            "Insert format block": "テキストのスタイル",
            Normal: "指定なし",
            "Heading 1": "タイトル1",
            "Heading 2": "タイトル2",
            "Heading 3": "タイトル3",
            "Heading 4": "タイトル4",
            Quote: "引用",
            Code: "コード",
            Insert: "挿入",
            "Insert table": "表を挿入",
            "Decrease Indent": "インデント減",
            "Increase Indent": "インデント増",
            "Select Special Character": "特殊文字を選択",
            "Insert Special Character": "特殊文字を挿入",
            "Paint format": "書式を貼付け",
            "Change mode": "編集モード切替え",
            Margins: "マージン",
            top: "上",
            right: "右",
            bottom: "下",
            left: "左",
            Styles: "スタイル",
            Classes: "クラス",
            Align: "配置",
            Right: "右寄せ",
            Center: "中央寄せ",
            Left: "左寄せ",
            "--Not Set--": "指定なし",
            Src: "ソース",
            Title: "タイトル",
            Alternative: "代替テキスト",
            Link: "リンク",
            "Open link in new tab": "新しいタブで開く",
            Image: "画像",
            file: "ファイル",
            Advansed: "Advansed",
            "Image properties": "画像のプロパティー",
            Cancel: "キャンセル",
            Ok: "確定",
            "Your code is similar to HTML. Keep as HTML?": "HTMLコードを保持しますか？",
            "Paste as HTML": "HTMLで貼付け",
            Keep: "HTMLを保持",
            Clean: "Clean",
            "Insert as Text": "HTMLをテキストにする",
            "Word Paste Detected": "Word Paste Detected",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?",
            "Insert only Text": "テキストだけ",
            "File Browser": "File Browser",
            "Error on load list": "Error on load list",
            "Error on load folders": "Error on load folders",
            "Are you sure?": "Are you sure?",
            "Enter Directory name": "Enter Directory name",
            "Create directory": "Create directory",
            "type name": "type name",
            "Drop image": "ここに画像をドロップ",
            "Drop file": "ここにファイルをドロップ",
            "or click": "or クリック",
            "Alternative text": "代替テキスト",
            Browse: "ブラウズ",
            Upload: "アップロード",
            Background: "背景",
            Text: "文字",
            Top: "上",
            Middle: "中央",
            Bottom: "下",
            "Insert column before": "左に列を挿入",
            "Insert column after": "右に列を挿入",
            "Insert row above": "上に行を挿入",
            "Insert row below": "下に行を挿入",
            "Delete table": "表を削除",
            "Delete row": "行を削除",
            "Delete column": "列を削除",
            "Empty cell": "セルを空にする",
            "Chars: %d": "文字数: %d",
            "Words: %d": "単語数: %d",
            "Strike through": "取り消し線",
            Underline: "下線",
            superscript: "上付き文字",
            subscript: "下付き文字",
            "Cut selection": "切り取り",
            "Select all": "すべて選択",
            Break: "Pause",
            "Search for": "検索",
            "Replace with": "置換",
            Replace: "交換",
            Paste: "貼付け",
            "Choose Content to Paste": "選択した内容を貼付け",
            All: "全部",
            source: "source",
            bold: "bold",
            italic: "italic",
            brush: "brush",
            link: "link",
            undo: "undo",
            redo: "redo",
            table: "table",
            image: "image",
            eraser: "eraser",
            paragraph: "paragraph",
            fontsize: "fontsize",
            video: "video",
            font: "font",
            about: "about",
            print: "print",
            symbol: "symbol",
            underline: "underline",
            strikethrough: "strikethrough",
            indent: "indent",
            outdent: "outdent",
            fullsize: "fullsize",
            shrink: "shrink",
            copyformat: "copyformat",
            hr: "分割線",
            ul: "箇条書き",
            ol: "番号付きリスト",
            cut: "切り取り",
            selectall: "すべて選択",
            "Open link": "リンクを開く",
            "Edit link": "リンクを編集",
            "No follow": "No follow",
            Unlink: "リンク解除",
            Eye: "サイトを確認",
            " URL": "URL",
            Reset: "リセット",
            Save: "保存",
            "Save as ...": "Save as ...",
            Resize: "リサイズ",
            Crop: "Crop",
            Width: "幅",
            Height: "高さ",
            "Keep Aspect Ratio": "縦横比を保持",
            Yes: "はい",
            No: "いいえ",
            Remove: "移除",
            Select: "選択",
            "Select %s": "選択: %s",
            Update: "更新",
            "Vertical align": "垂直方向の配置",
            Merge: "セルの結合",
            "Add column": "列を追加",
            "Add row": "行を追加",
            Border: "境界線",
            "Embed code": "埋め込みコード",
            Delete: "削除",
            Edit: "編集",
            "Horizontal align": "水平方向の配置",
            Filter: "Filter",
            "Sort by changed": "Sort by changed",
            "Sort by name": "Sort by name",
            "Sort by size": "Sort by size",
            "Add folder": "Add folder",
            Split: "分割",
            "Split vertical": "セルの分割（垂直方向）",
            "Split horizontal": "セルの分割（水平方向）",
            "You can only edit your own images. Download this image on the host?": "You can only edit your own images. Download this image on the host?",
            "The image has been successfully uploaded to the host!": "The image has been successfully uploaded to the host!",
            palette: "パレット",
            pencil: "鉛筆",
            "There are no files": "There are no files",
            Rename: "Rename",
            "Enter new name": "Enter new name",
            preview: "プレビュー",
            download: "ダウンロード",
            "Paste from clipboard": "貼り付け",
            "Your browser doesn't support direct access to the clipboard.": "お使いのブラウザはクリップボードを使用できません",
            "Copy selection": "コピー",
            copy: "copy",
            "Border radius": "角の丸み",
            "Show all": "全て表示",
            Apply: "適用",
            "Please fill out this field": "まだこの分野",
            "Please enter a web address": "を入力してくださいウェブアドレス",
            Default: "デフォルト",
            Circle: "円",
            Dot: "恐竜",
            Quadrate: "Quadrate",
            Find: "見",
            "Find Previous": "探前",
            "Find Next": "由来"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "무엇이든 입력하세요",
            "About Jodit": "Jodit에 대하여",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Jodit 사용자 안내서",
            "contains detailed help for using": "자세한 도움말이 들어있어요",
            "For information about the license, please go to our website:": "라이센스에 관해서는 Jodit 웹 사이트를 방문해주세요：",
            "Buy full version": "풀 버전 구입하기",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "© XDSoft.net - Chupurnov Valeriy. 에게 저작권과 모든 권리가 있습니다.",
            Anchor: "Anchor",
            "Open in new tab": "새 탭에서 열기",
            "Open editor in fullsize": "전체 크기로 보기",
            "Clear Formatting": "서식 지우기",
            "Fill color or set the text color": "글씨 색상",
            Redo: "재실행",
            Undo: "실행 취소",
            Bold: "굵게",
            Italic: "기울임",
            "Insert Unordered List": "글머리 목록",
            "Insert Ordered List": "번호 목록",
            "Align Center": "가운데 정렬",
            "Align Justify": "양쪽 정렬",
            "Align Left": "왼쪽 정렬",
            "Align Right": "오른쪽 정렬",
            "Insert Horizontal Line": "수평 구분선 넣기",
            "Insert Image": "이미지 넣기",
            "Insert file": "파일 넣기",
            "Insert youtube/vimeo video": "Youtube/Vimeo 동영상",
            "Insert link": "링크 넣기",
            "Font size": "글꼴 크기",
            "Font family": "글꼴",
            "Insert format block": "블록 요소 넣기",
            Normal: "일반 텍스트",
            "Heading 1": "제목 1",
            "Heading 2": "제목 2",
            "Heading 3": "제목 3",
            "Heading 4": "제목 4",
            Quote: "인용",
            Code: "코드",
            Insert: "붙여 넣기",
            "Insert table": "테이블",
            "Decrease Indent": "들여쓰기 감소",
            "Increase Indent": "들여쓰기 증가",
            "Select Special Character": "특수문자 선택",
            "Insert Special Character": "특수문자 입력",
            "Paint format": "페인트 형식",
            "Change mode": "편집모드 변경",
            Margins: "마진",
            top: "위",
            right: "오른쪽",
            bottom: "아래",
            left: "왼쪽",
            Styles: "스타일",
            Classes: "클래스",
            Align: "정렬",
            Right: "오른쪽으로",
            Center: "가운데로",
            Left: "왼쪽으로",
            "--Not Set--": "--지정 안 함--",
            Src: "경로(src)",
            Title: "제목",
            Alternative: "대체 텍스트(alt)",
            Link: "링크",
            "Open link in new tab": "새 탭에서 열기",
            file: "파일",
            Advanced: "고급",
            "Image properties": "이미지 속성",
            Cancel: "취소",
            Ok: "확인",
            "Your code is similar to HTML. Keep as HTML?": "HTML 코드로 감지했어요. 코드인채로 붙여넣을까요?",
            "Paste as HTML": "HTML로 붙여넣기",
            Keep: "원본 유지",
            Clean: "지우기",
            "Insert as Text": "텍스트로 넣기",
            "Insert only Text": "텍스트만 넣기",
            "Word Paste Detected": "Word 붙여넣기 감지",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Microsoft Word/Excel 문서로 감지했어요. 서식을 유지한채로 붙여넣을까요?",
            "File Browser": "파일 탐색기",
            "Error on load list": "목록 불러오기 에러",
            "Error on load folders": "폴더 불러오기",
            "Are you sure?": "정말 진행할까요?",
            "Enter Directory name": "디렉토리 이름 입력",
            "Create directory": "디렉토리 생성",
            "type name": "이름 입력",
            "Drop image": "이미지 드래그",
            "Drop file": "파일 드래그",
            "or click": "혹은 클릭",
            "Alternative text": "대체 텍스트",
            Browse: "탐색",
            Upload: "업로드",
            Background: "배경",
            Text: "텍스트",
            Top: "위",
            Middle: "중앙",
            Bottom: "아래",
            "Insert column before": "이전 열에 삽입",
            "Insert column after": "다음 열에 삽입",
            "Insert row above": "위 행에 삽입",
            "Insert row below": "아래 행에 삽입",
            "Delete table": "테이블 삭제",
            "Delete row": "행 삭제",
            "Delete column": "열 삭제",
            "Empty cell": "빈 셀",
            source: "HTML 소스",
            bold: "볼드",
            italic: "이탤릭",
            brush: "브러시",
            link: "링크",
            undo: "실행 취소",
            redo: "재실행",
            table: "테이블",
            image: "이미지",
            eraser: "지우개",
            paragraph: "문단",
            fontsize: "글꼴 크기",
            video: "비디오",
            font: "글꼴",
            about: "편집기 정보",
            print: "프린트",
            symbol: "기호",
            underline: "밑줄",
            strikethrough: "취소선",
            indent: "들여쓰기",
            outdent: "내어쓰기",
            fullsize: "전체 화면",
            shrink: "일반 화면",
            copyformat: "복사 형식",
            hr: "구분선",
            ul: "글머리 목록",
            ol: "번호 목록",
            cut: "잘라내기",
            selectall: "모두 선택",
            "Embed code": "Embed 코드",
            "Open link": "링크 열기",
            "Edit link": "링크 편집",
            "No follow": "No follow",
            Unlink: "링크 제거",
            Eye: "사이트 확인",
            pencil: "연필",
            Update: "갱신",
            " URL": "URL",
            Edit: "편집",
            "Horizontal align": "수평 정렬",
            Filter: "필터",
            "Sort by changed": "변경일 정렬",
            "Sort by name": "이름 정렬",
            "Sort by size": "크기 정렬",
            "Add folder": "새 폴더",
            Reset: "초기화",
            Save: "저장",
            "Save as ...": "새로 저장하기 ...",
            Resize: "리사이즈",
            Crop: "크롭",
            Width: "가로 길이",
            Height: "세로 높이",
            "Keep Aspect Ratio": "비율 유지하기",
            Yes: "네",
            No: "아니오",
            Remove: "제거",
            Select: "선택",
            "Chars: %d": "문자수: %d",
            "Words: %d": "단어수: %d",
            All: "모두",
            "Select all": "모두 선택",
            "Select %s": "선택: %s",
            "Vertical align": "수직 정렬",
            Split: "분할",
            "Split vertical": "세로 셀 분할",
            "Split horizontal": "가로 셀 분할",
            Merge: "셀 병합",
            "Add column": "열 추가",
            "Add row": "행 추가",
            Delete: "삭제",
            Border: "외곽선",
            "License: %s": "라이센스: %s",
            "Strike through": "취소선",
            Underline: "밑줄",
            superscript: "윗첨자",
            subscript: "아래첨자",
            "Cut selection": "선택 잘라내기",
            Break: "구분자",
            "Search for": "검색",
            "Replace with": "대체하기",
            Replace: "대체",
            Paste: "붙여넣기",
            "Choose Content to Paste": "붙여넣을 내용 선택",
            "You can only edit your own images. Download this image on the host?": "외부 이미지는 편집할 수 없어요. 외부 이미지를 다운로드 할까요?",
            "The image has been successfully uploaded to the host!": "이미지를 무사히 업로드 했어요!",
            palette: "팔레트",
            "There are no files": "파일이 없어요",
            Rename: "이름 변경",
            "Enter new name": "새 이름 입력",
            preview: "리미보기",
            download: "다운로드",
            "Paste from clipboard": "클립보드 붙여넣기",
            "Your browser doesn't support direct access to the clipboard.": "사용중인 브라우저가 클립보드 접근을 지원하지 않아요.",
            "Copy selection": "선택 복사",
            copy: "복사",
            "Border radius": "둥근 테두리",
            "Show all": "모두 보기",
            Apply: "적용",
            "Please fill out this field": "이 분야",
            "Please enter a web address": "를 입력하십시오.웹 주소",
            Default: "기본",
            Circle: "원",
            Dot: "점",
            Quadrate: "정방형",
            Find: "찾기",
            "Find Previous": "이전 찾기",
            "Find Next": "다음 찾기"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Begin met typen..",
            Advanced: "Geavanceerd",
            "About Jodit": "Over Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Gratis niet-commerciële versie",
            "Jodit User's Guide": "Jodit gebruikershandleiding",
            "contains detailed help for using": "bevat gedetailleerde informatie voor gebruik.",
            "For information about the license, please go to our website:": "Voor informatie over de licentie, ga naar onze website:",
            "Buy full version": "Volledige versie kopen",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.",
            Anchor: "Anker",
            "Open in new tab": "Open in nieuwe tab",
            "Open editor in fullsize": "Editor in volledig scherm openen",
            "Clear Formatting": "Opmaak verwijderen",
            "Fill color or set the text color": "Vulkleur of tekstkleur aanpassen",
            Redo: "Opnieuw",
            Undo: "Ongedaan maken",
            Bold: "Vet",
            Italic: "Cursief",
            "Insert Unordered List": "Geordende list invoegen",
            "Insert Ordered List": "Ongeordende lijst invoegen",
            "Align Center": "Centreren",
            "Align Justify": "Uitlijnen op volledige breedte",
            "Align Left": "Links uitlijnen",
            "Align Right": "Rechts uitlijnen",
            "Insert Horizontal Line": "Horizontale lijn invoegen",
            "Insert Image": "Afbeelding invoegen",
            "Insert file": "Bestand invoegen",
            "Insert youtube/vimeo video": "Youtube/Vimeo video invoegen",
            "Insert link": "Link toevoegen",
            "Font size": "Tekstgrootte",
            "Font family": "Lettertype",
            "Insert format block": "Format blok invoegen",
            Normal: "Normaal",
            "Heading 1": "Koptekst 1",
            "Heading 2": "Koptekst 2",
            "Heading 3": "Koptekst 3",
            "Heading 4": "Koptekst 4",
            Quote: "Citaat",
            Code: "Code",
            Insert: "Invoegen",
            "Insert table": "Tabel invoegen",
            "Decrease Indent": "Inspringing verkleinen",
            "Increase Indent": "Inspringing vergroten",
            "Select Special Character": "Symbool selecteren",
            "Insert Special Character": "Symbool invoegen",
            "Paint format": "Opmaak kopieren",
            "Change mode": "Modus veranderen",
            Margins: "Marges",
            top: "Boven",
            right: "Rechts",
            bottom: "Onder",
            left: "Links",
            Styles: "CSS styles",
            Classes: "CSS classes",
            Align: "Uitlijning",
            Right: "Rechts",
            Center: "Gecentreerd",
            Left: "Links",
            "--Not Set--": "--Leeg--",
            Src: "Src",
            Title: "Titel",
            Alternative: "Alternatieve tekst",
            Link: "Link",
            "Open link in new tab": "Link in nieuwe tab openen",
            Image: "Afbeelding",
            file: "Bestand",
            Advansed: "Geavanceerd",
            "Image properties": "Afbeeldingseigenschappen",
            Cancel: "Annuleren",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Deze code lijkt op HTML. Als HTML behouden?",
            "Paste as HTML": "Invoegen als HTML",
            Keep: "Origineel behouden",
            Clean: "Opschonen",
            "Insert as Text": "Als tekst invoegen",
            "Word Paste Detected": "Word-tekst gedetecteerd",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?",
            "Insert only Text": "Als onopgemaakte tekst invoegen",
            "File Browser": "Bestandsbrowser",
            "Error on load list": "Fout bij het laden van de lijst",
            "Error on load folders": "Fout bij het laden van de mappenlijst",
            "Are you sure?": "Weet je het zeker?",
            "Enter Directory name": "Geef de map een naam",
            "Create directory": "Map aanmaken",
            "type name": "Type naam",
            "Drop image": "Sleep hier een afbeelding naartoe",
            "Drop file": "Sleep hier een bestand naartoe",
            "or click": "of klik",
            "Alternative text": "Alternatieve tekst",
            Browse: "Bladeren",
            Upload: "Uploaden",
            Background: "Achtergrond",
            Text: "Tekst",
            Top: "Boven",
            Middle: "Midden",
            Bottom: "Onder",
            "Insert column before": "Kolom invoegen (voor)",
            "Insert column after": "Kolom invoegen (na)",
            "Insert row above": "Rij invoegen (boven)",
            "Insert row below": "Rij invoegen (onder)",
            "Delete table": "Tabel verwijderen",
            "Delete row": "Rij verwijderen",
            "Delete column": "Kolom verwijderen",
            "Empty cell": "Cel leegmaken",
            Delete: "Verwijderen",
            "Strike through": "Doorstrepen",
            Underline: "Onderstrepen",
            Break: "Enter",
            "Search for": "Zoek naar",
            "Replace with": "Vervangen door",
            Replace: "Vervangen",
            Edit: "Bewerken",
            "Vertical align": "Verticaal uitlijnen",
            "Horizontal align": "Horizontaal uitlijnen",
            Filter: "Filteren",
            "Sort by changed": "Sorteren op wijzigingsdatum",
            "Sort by name": "Sorteren op naam",
            "Sort by size": "Sorteren op grootte",
            "Add folder": "Map toevoegen",
            Split: "Splitsen",
            "Split vertical": "Verticaal splitsen",
            "Split horizontal": "Horizontaal splitsen",
            Merge: "Samenvoegen",
            "Add column": "Kolom toevoegen",
            "Add row": "Rij toevoegen",
            Border: "Rand",
            "Embed code": "Embed code",
            Update: "Updaten",
            superscript: "Superscript",
            subscript: "Subscript",
            "Cut selection": "Selectie knippen",
            Paste: "Plakken",
            "Choose Content to Paste": "Kies content om te plakken",
            "Chars: %d": "Tekens: %d",
            "Words: %d": "Woorden: %d",
            All: "Alles",
            "Select %s": "Selecteer: %s",
            "Select all": "Selecteer alles",
            source: "Broncode",
            bold: "vet",
            italic: "cursief",
            brush: "kwast",
            link: "link",
            undo: "ongedaan maken",
            redo: "opnieuw",
            table: "tabel",
            image: "afbeelding",
            eraser: "gum",
            paragraph: "paragraaf",
            fontsize: "lettergrootte",
            video: "video",
            font: "lettertype",
            about: "over",
            print: "afdrukken",
            symbol: "symbool",
            underline: "onderstreept",
            strikethrough: "doorgestreept",
            indent: "inspringen",
            outdent: "minder inspringen",
            fullsize: "volledige grootte",
            shrink: "kleiner maken",
            copyformat: "opmaak kopiëren",
            hr: "horizontale lijn",
            ul: "lijst",
            ol: "genummerde lijst",
            cut: "knip",
            selectall: "alles selecteren",
            "Open link": "link openen",
            "Edit link": "link aanpassen",
            "No follow": "niet volgen",
            Unlink: "link verwijderen",
            Eye: "Recensie",
            pencil: "Om te bewerken",
            " URL": " URL",
            Reset: "Herstellen",
            Save: "Opslaan",
            "Save as ...": "Opslaan als ...",
            Resize: "Grootte aanpassen",
            Crop: "Bijknippen",
            Width: "Breedte",
            Height: "Hoogte",
            "Keep Aspect Ratio": "Verhouding behouden",
            Yes: "Ja",
            No: "Nee",
            Remove: "Verwijderen",
            Select: "Selecteren",
            "You can only edit your own images. Download this image on the host?": "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?",
            "The image has been successfully uploaded to the host!": "De afbeelding is succesvol geüploadet!",
            palette: "Palette",
            "There are no files": "Er zijn geen bestanden in deze map.",
            Rename: "Hongaars",
            "Enter new name": "Voer een nieuwe naam in",
            preview: "voorvertoning",
            download: "Download",
            "Paste from clipboard": "Plakken van klembord",
            "Your browser doesn't support direct access to the clipboard.": "Uw browser ondersteunt geen directe toegang tot het klembord.",
            "Copy selection": "Selectie kopiëren",
            copy: "kopiëren",
            "Border radius": "Border radius",
            "Show all": "Toon alle",
            Apply: "Toepassing",
            "Please fill out this field": "Vul dit veld",
            "Please enter a web address": "Voer een webadres",
            Default: "Standaard",
            Circle: "Cirkel",
            Dot: "Dot",
            Quadrate: "Quadrate",
            Find: "Zoeken",
            "Find Previous": "Vorige Zoeken",
            "Find Next": "Volgende Zoeken"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Napisz coś",
            Advanced: "Zaawansowane",
            "About Jodit": "O Jodit",
            "Jodit Editor": "Edytor Jodit",
            "Jodit User's Guide": "Instrukcja Jodit",
            "contains detailed help for using": "zawiera szczegółowe informacje dotyczące użytkowania.",
            "For information about the license, please go to our website:": "Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:",
            "Buy full version": "Zakup pełnej wersji",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.",
            Anchor: "Kotwica",
            "Open in new tab": "Otwórz w nowej zakładce",
            "Open editor in fullsize": "Otwórz edytor w pełnym rozmiarze",
            "Clear Formatting": "Wyczyść formatowanie",
            "Fill color or set the text color": "Kolor wypełnienia lub ustaw kolor tekstu",
            Redo: "Ponów",
            Undo: "Cofnij",
            Bold: "Pogrubienie",
            Italic: "Kursywa",
            "Insert Unordered List": "Wstaw listę wypunktowaną",
            "Insert Ordered List": "Wstaw listę numeryczną",
            "Align Center": "Wyśrodkuj",
            "Align Justify": "Wyjustuj",
            "Align Left": "Wyrównaj do lewej",
            "Align Right": "Wyrównaj do prawej",
            "Insert Horizontal Line": "Wstaw linię poziomą",
            "Insert Image": "Wstaw grafikę",
            "Insert file": "Wstaw plik",
            "Insert youtube/vimeo video": "Wstaw film Youtube/vimeo",
            "Insert link": "Wstaw link",
            "Font size": "Rozmiar tekstu",
            "Font family": "Krój czcionki",
            "Insert format block": "Wstaw formatowanie",
            Normal: "Normalne",
            "Heading 1": "Nagłówek 1",
            "Heading 2": "Nagłówek 2",
            "Heading 3": "Nagłówek 3",
            "Heading 4": "Nagłówek 4",
            Quote: "Cytat",
            Code: "Kod",
            Insert: "Wstaw",
            "Insert table": "Wstaw tabelę",
            "Decrease Indent": "Zmniejsz wcięcie",
            "Increase Indent": "Zwiększ wcięcie",
            "Select Special Character": "Wybierz znak specjalny",
            "Insert Special Character": "Wstaw znak specjalny",
            "Paint format": "Malarz formatów",
            "Change mode": "Zmień tryb",
            Margins: "Marginesy",
            top: "Górny",
            right: "Prawy",
            bottom: "Dolny",
            left: "Levy",
            Styles: "Style CSS",
            Classes: "Klasy CSS",
            Align: "Wyrównanie",
            Right: "Prawa",
            Center: "środek",
            Left: "Lewa",
            "--Not Set--": "brak",
            Src: "Źródło",
            Title: "Tytuł",
            Alternative: "Tekst alternatywny",
            Link: "Link",
            "Open link in new tab": "Otwórz w nowej zakładce",
            Image: "Grafika",
            file: "Plik",
            Advansed: "Zaawansowne",
            "Image properties": "Właściwości grafiki",
            Cancel: "Anuluj",
            Ok: "OK",
            "Your code is similar to HTML. Keep as HTML?": "Twój kod wygląda jak HTML. Zachować HTML?",
            "Paste as HTML": "Wkleić jako HTML?",
            Keep: "Oryginalny tekst",
            Clean: "Wyczyść",
            "Insert as Text": "Wstaw jako tekst",
            "Word Paste Detected": "Wykryto tekst w formacie Word",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ",
            "Insert only Text": "Wstaw tylko treść",
            "File Browser": "Przeglądarka plików",
            "Error on load list": "Błąd ładowania listy plików",
            "Error on load folders": "Błąd ładowania folderów",
            "Are you sure?": "Czy jesteś pewien?",
            "Enter Directory name": "Wprowadź nazwę folderu",
            "Create directory": "Utwórz folder",
            "type name": "wprowadź nazwę",
            "Drop image": "Upuść plik graficzny",
            "Drop file": "Upuść plik",
            "or click": "lub kliknij tu",
            "Alternative text": "Tekst alternatywny",
            Browse: "Przeglądaj",
            Upload: "Wczytaj",
            Background: "Tło",
            Text: "Treść",
            Top: "Góra",
            Middle: "Środek",
            Bottom: "Dół",
            "Insert column before": "Wstaw kolumnę przed",
            "Insert column after": "Wstaw kolumnę po",
            "Insert row above": "Wstaw wiersz przed",
            "Insert row below": "Wstaw wiersz po",
            "Delete table": "Usuń tabelę",
            "Delete row": "Usuń wiersz",
            "Delete column": "Usuń kolumnę",
            "Empty cell": "Wyczyść komórkę",
            Delete: "Usuń",
            "Strike through": "Przekreślenie",
            Underline: "Podkreślenie",
            Break: "Przerwa",
            "Search for": "Szukaj",
            "Replace with": "Zamień na",
            Replace: "Wymienić",
            Edit: "Edytuj",
            "Vertical align": "Wyrównywanie w pionie",
            "Horizontal align": "Wyrównywanie w poziomie",
            Filter: "Filtruj",
            "Sort by changed": "Sortuj wg zmiany",
            "Sort by name": "Sortuj wg nazwy",
            "Sort by size": "Sortuj wg rozmiaru",
            "Add folder": "Dodaj folder",
            "Split vertical": "Podziel w pionie",
            "Split horizontal": "Podziel w poziomie",
            Split: "Podziel",
            Merge: "Scal",
            "Add column": "Dodaj kolumnę",
            "Add row": "Dodaj wiersz",
            Border: "Obramowanie",
            "Embed code": "Wstaw kod",
            Update: "Aktualizuj",
            superscript: "indeks górny",
            subscript: "index dolny",
            "Cut selection": "Wytnij zaznaczenie",
            Paste: "Wklej",
            "Choose Content to Paste": "Wybierz zawartość do wklejenia",
            "Chars: %d": "Znaki: %d",
            "Words: %d": "Słowa: %d",
            All: "Wszystko",
            "Select %s": "Wybierz: %s",
            "Select all": "Wybierz wszystko",
            source: "HTML",
            bold: "pogrubienie",
            italic: "kursywa",
            brush: "pędzel",
            link: "link",
            undo: "cofnij",
            redo: "ponów",
            table: "tabela",
            image: "grafika",
            eraser: "wyczyść",
            paragraph: "akapit",
            fontsize: "rozmiar czcionki",
            video: "wideo",
            font: "czcionka",
            about: "O programie",
            print: "drukuj",
            symbol: "symbol",
            underline: "podkreślenie",
            strikethrough: "przekreślenie",
            indent: "wcięcie",
            outdent: "wycięcie",
            fullsize: "pełen rozmiar",
            shrink: "przytnij",
            copyformat: "format kopii",
            hr: "linia pozioma",
            ul: "lista",
            ol: "lista numerowana",
            cut: "wytnij",
            selectall: "zaznacz wszystko",
            "Open link": "otwórz link",
            "Edit link": "edytuj link",
            "No follow": "Atrybut no-follow",
            Unlink: "Usuń link",
            Eye: "szukaj",
            pencil: "edytuj",
            " URL": "URL",
            Reset: "wyczyść",
            Save: "zapisz",
            "Save as ...": "zapisz jako",
            Resize: "Zmień rozmiar",
            Crop: "Przytnij",
            Width: "Szerokość",
            Height: "Wysokość",
            "Keep Aspect Ratio": "Zachowaj proporcje",
            Yes: "Tak",
            No: "Nie",
            Remove: "Usuń",
            Select: "Wybierz",
            "You can only edit your own images. Download this image on the host?": "Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?",
            "The image has been successfully uploaded to the host!": "Grafika została pomyślnienie dodana na serwer",
            palette: "Paleta",
            "There are no files": "Brak plików.",
            Rename: "zmień nazwę",
            "Enter new name": "Wprowadź nową nazwę",
            preview: "podgląd",
            download: "pobierz",
            "Paste from clipboard": "Wklej ze schowka",
            "Your browser doesn't support direct access to the clipboard.": "Twoja przeglądarka nie obsługuje schowka",
            "Copy selection": "Kopiuj zaznaczenie",
            copy: "kopiuj",
            "Border radius": "Zaokrąglenie krawędzi",
            "Show all": "Pokaż wszystkie",
            Apply: "Zastosuj",
            "Please fill out this field": "Proszę wypełnić to pole",
            "Please enter a web address": "Proszę, wpisz adres sieci web",
            Default: "Domyślnie",
            Circle: "Koło",
            Dot: "Punkt",
            Quadrate: "Kwadrat",
            Find: "Znaleźć",
            "Find Previous": "Znaleźć Poprzednie",
            "Find Next": "Znajdź Dalej"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Escreva algo...",
            Advanced: "Avançado",
            "About Jodit": "Sobre o Jodit",
            "Jodit Editor": "Editor Jodit",
            "Jodit User's Guide": "Guia de usuário Jodit",
            "contains detailed help for using": "contém ajuda detalhada para o uso.",
            "For information about the license, please go to our website:": "Para informação sobre a licença, por favor visite nosso site:",
            "Buy full version": "Compre a versão completa",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.",
            Anchor: "Link",
            "Open in new tab": "Abrir em nova aba",
            "Open editor in fullsize": "Abrir editor em tela cheia",
            "Clear Formatting": "Limpar formatação",
            "Fill color or set the text color": "Cor de preenchimento ou cor do texto",
            Redo: "Refazer",
            Undo: "Desfazer",
            Bold: "Negrito",
            Italic: "Itálico",
            "Insert Unordered List": "Inserir lista não ordenada",
            "Insert Ordered List": "Inserir lista ordenada",
            "Align Center": "Centralizar",
            "Align Justify": "Justificar",
            "Align Left": "Alinhar à Esquerda",
            "Align Right": "Alinhar à Direita",
            "Insert Horizontal Line": "Inserir linha horizontal",
            "Insert Image": "Inserir imagem",
            "Insert file": "Inserir arquivo",
            "Insert youtube/vimeo video": "Inserir vídeo do Youtube/vimeo",
            "Insert link": "Inserir link",
            "Font size": "Tamanho da letra",
            "Font family": "Fonte",
            "Insert format block": "Inserir bloco",
            Normal: "Normal",
            "Heading 1": "Cabeçalho 1",
            "Heading 2": "Cabeçalho 2",
            "Heading 3": "Cabeçalho 3",
            "Heading 4": "Cabeçalho 4",
            Quote: "Citação",
            Code: "Código",
            Insert: "Inserir",
            "Insert table": "Inserir tabela",
            "Decrease Indent": "Diminuir recuo",
            "Increase Indent": "Aumentar recuo",
            "Select Special Character": "Selecionar caractere especial",
            "Insert Special Character": "Inserir caractere especial",
            "Paint format": "Copiar formato",
            "Change mode": "Mudar modo",
            Margins: "Margens",
            top: "cima",
            right: "direta",
            bottom: "baixo",
            left: "esquerda",
            Styles: "Estilos CSS",
            Classes: "Classes CSS",
            Align: "Alinhamento",
            Right: "Direita",
            Center: "Centro",
            Left: "Esquerda",
            "--Not Set--": "--Não Estabelecido--",
            Src: "Fonte",
            Title: "Título",
            Alternative: "Texto Alternativo",
            Link: "Link",
            "Open link in new tab": "Abrir link em nova aba",
            Image: "Imagem",
            file: "Arquivo",
            Advansed: "Avançado",
            "Image properties": "Propriedades da imagem",
            Cancel: "Cancelar",
            Ok: "Ok",
            "Your code is similar to HTML. Keep as HTML?": "Seu código é similar ao HTML. Manter como HTML?",
            "Paste as HTML": "Colar como HTML?",
            Keep: "Manter",
            Clean: "Limpar",
            "Insert as Text": "Inserir como Texto",
            "Word Paste Detected": "Colado do Word Detectado",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?",
            "Insert only Text": "Inserir somente o Texto",
            "File Browser": "Procurar arquivo",
            "Error on load list": "Erro ao carregar a lista",
            "Error on load folders": "Erro ao carregar as pastas",
            "Are you sure?": "Você tem certeza?",
            "Enter Directory name": "Escreva o nome da pasta",
            "Create directory": "Criar pasta",
            "type name": "Escreva seu nome",
            "Drop image": "Soltar imagem",
            "Drop file": "Soltar arquivo",
            "or click": "ou clique",
            "Alternative text": "Texto alternativo",
            Browse: "Explorar",
            Upload: "Upload",
            Background: "Fundo",
            Text: "Texto",
            Top: "Cima",
            Middle: "Meio",
            Bottom: "Baixo",
            "Insert column before": "Inserir coluna antes",
            "Insert column after": "Inserir coluna depois",
            "Insert row above": "Inserir linha acima",
            "Insert row below": "Inserir linha abaixo",
            "Delete table": "Excluir tabela",
            "Delete row": "Excluir linha",
            "Delete column": "Excluir coluna",
            "Empty cell": "Limpar célula",
            Delete: "Excluir",
            "Strike through": "Tachado",
            Underline: "Sublinhar",
            Break: "Pausa",
            "Search for": "Procurar por",
            "Replace with": "Substituir com",
            Replace: "Substituir",
            Edit: "Editar",
            "Vertical align": "Alinhamento vertical",
            "Horizontal align": "Alinhamento horizontal",
            Filter: "filtrar",
            "Sort by changed": "Ordenar por modificação",
            "Sort by name": "Ordenar por nome",
            "Sort by size": "Ordenar por tamanho",
            "Add folder": "Adicionar pasta",
            Split: "Dividir",
            "Split vertical": "Dividir vertical",
            "Split horizontal": "Dividir horizontal",
            Merge: "Mesclar",
            "Add column": "Adicionar coluna",
            "Add row": "Adicionar linha",
            Border: "Borda",
            "Embed code": "Incluir código",
            Update: "Atualizar",
            superscript: "sobrescrito",
            subscript: "subscrito",
            "Cut selection": "Cortar seleção",
            Paste: "Colar",
            "Choose Content to Paste": "Escolher conteúdo para colar",
            "Chars: %d": "Caracteres: %d",
            "Words: %d": "Palavras: %d",
            All: "Tudo",
            "Select %s": "Selecionar: %s",
            "Select all": "Selecionar tudo",
            source: "HTML",
            bold: "negrito",
            italic: "itálico",
            brush: "pincel",
            link: "link",
            undo: "desfazer",
            redo: "refazer",
            table: "tabela",
            image: "imagem",
            eraser: "apagar",
            paragraph: "parágrafo",
            fontsize: "tamanho da letra",
            video: "vídeo",
            font: "fonte",
            about: "Sobre de",
            print: "Imprimir",
            symbol: "Símbolo",
            underline: "sublinhar",
            strikethrough: "tachado",
            indent: "recuar",
            outdent: "diminuir recuo",
            fullsize: "Tamanho completo",
            shrink: "diminuir",
            copyformat: "Copiar formato",
            hr: "linha horizontal",
            ul: "lista não ordenada",
            ol: "lista ordenada",
            cut: "Cortar",
            selectall: "Selecionar tudo",
            "Open link": "Abrir link",
            "Edit link": "Editar link",
            "No follow": "Não siga",
            Unlink: "Remover link",
            Eye: "Visualizar",
            pencil: "Editar",
            " URL": "URL",
            Reset: "Resetar",
            Save: "Salvar",
            "Save as ...": "Salvar como...",
            Resize: "Redimensionar",
            Crop: "Recortar",
            Width: "Largura",
            Height: "Altura",
            "Keep Aspect Ratio": "Manter a proporção",
            Yes: "Sim",
            No: "Não",
            Remove: "Remover",
            Select: "Selecionar",
            "You can only edit your own images. Download this image on the host?": "Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?",
            "The image has been successfully uploaded to the host!": "A imagem foi enviada com sucesso para o servidor!",
            palette: "Palette",
            "There are no files": "Não há arquivos nesse diretório.",
            Rename: "Húngara",
            "Enter new name": "Digite um novo nome",
            preview: "preview",
            download: "Baixar",
            "Paste from clipboard": "Colar da área de transferência",
            "Your browser doesn't support direct access to the clipboard.": "O seu navegador não oferece suporte a acesso direto para a área de transferência.",
            "Copy selection": "Selecção de cópia",
            copy: "cópia",
            "Border radius": "Border radius",
            "Show all": "Mostrar todos os",
            Apply: "Aplicar",
            "Please fill out this field": "Por favor, preencha este campo",
            "Please enter a web address": "Por favor introduza um endereço web",
            Default: "Padrão",
            Circle: "Círculo",
            Dot: "Ponto",
            Quadrate: "Quadro",
            "Lower Alpha": "Letra Minúscula",
            "Lower Greek": "Grego Minúscula",
            "Lower Roman": "Romano Minúscula",
            "Upper Alpha": "Letra Maiúscula",
            "Upper Roman": "Romano Maiúscula",
            Find: "Encontrar",
            "Find Previous": "Encontrar Anteriores",
            "Find Next": "Localizar Próxima"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Напишите что-либо",
            "About Jodit": "О Jodit",
            "Jodit Editor": "Редактор Jodit",
            "Jodit User's Guide": "Jodit Руководство пользователя",
            "contains detailed help for using": "содержит детальную информацию по использованию",
            "For information about the license, please go to our website:": "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:",
            "Buy full version": "Купить полную версию",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.",
            Anchor: "Анкор",
            "Open in new tab": "Открывать ссылку в новой вкладке",
            "Open editor in fullsize": "Открыть редактор в полном размере",
            "Clear Formatting": "Очистить форматирование",
            "Fill color or set the text color": "Цвет заливки или цвет текста",
            Redo: "Повтор",
            Undo: "Отмена",
            Bold: "Жирный",
            Italic: "Наклонный",
            "Insert Unordered List": "Вставка маркированного списка",
            "Insert Ordered List": "Вставить нумерованный список",
            "Align Center": "Выровнять по центру",
            "Align Justify": "Выровнять по ширине",
            "Align Left": "Выровнять по левому краю",
            "Align Right": "Выровнять по правому краю",
            "Insert Horizontal Line": "Вставить горизонтальную линию",
            "Insert Image": "Вставить изображение",
            "Insert file": "Вставить файл",
            "Insert youtube/vimeo video": "Вставьте видео",
            "Insert link": "Вставить ссылку",
            "Font size": "Размер шрифта",
            "Font family": "Шрифт",
            "Insert format block": "Вставить блочный элемент",
            Normal: "Нормальный текст",
            "Heading 1": "Заголовок 1",
            "Heading 2": "Заголовок 2",
            "Heading 3": "Заголовок 3",
            "Heading 4": "Заголовок 4",
            Quote: "Цитата",
            Code: "Код",
            Insert: "Вставить",
            "Insert table": "Вставить таблицу",
            "Decrease Indent": "Уменьшить отступ",
            "Increase Indent": "Увеличить отступ",
            "Select Special Character": "Выберите специальный символ",
            "Insert Special Character": "Вставить специальный символ",
            "Paint format": "Формат краски",
            "Change mode": "Источник",
            Margins: "Отступы",
            top: "сверху",
            right: "справа",
            bottom: "снизу",
            left: "слева",
            Styles: "Стили",
            Classes: "Классы",
            Align: "Выравнивание",
            Right: "По правому краю",
            Center: "По центру",
            Left: "По левому краю",
            "--Not Set--": "--не устанавливать--",
            Src: "src",
            Title: "Заголовок",
            Alternative: "Альтернативный текст (alt)",
            Link: "Ссылка",
            "Open link in new tab": "Открывать ссылку в новом окне",
            file: "Файл",
            Advanced: "Расширенные",
            "Image properties": "Свойства изображения",
            Cancel: "Отмена",
            Ok: "Ок",
            "Your code is similar to HTML. Keep as HTML?": "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?",
            "Paste as HTML": "Вставить как HTML?",
            Keep: "Сохранить оригинал",
            Clean: "Почистить",
            "Insert as Text": "Вставить как текст",
            "Insert only Text": "Вставить только текст",
            "Word Paste Detected": "Возможно это фрагмент Word или Excel",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?",
            "File Browser": "Браузер файлов",
            "Error on load list": "Ошибка при загрузке списка изображений",
            "Error on load folders": "Ошибка при загрузке списка директорий",
            "Are you sure?": "Вы уверены?",
            "Enter Directory name": "Введите название директории",
            "Create directory": "Создать директорию",
            "type name": "введите название",
            "Drop image": "Перетащите сюда изображение",
            "Drop file": "Перетащите сюда файл",
            "or click": "или нажмите",
            "Alternative text": "Альтернативный текст",
            Browse: "Сервер",
            Upload: "Загрузка",
            Background: "Фон",
            Text: "Текст",
            Top: " К верху",
            Middle: "По середине",
            Bottom: "К низу",
            "Insert column before": "Вставить столбец до",
            "Insert column after": "Вставить столбец после",
            "Insert row above": "Вставить ряд выше",
            "Insert row below": "Вставить ряд ниже",
            "Delete table": "Удалить таблицу",
            "Delete row": "Удалять ряд",
            "Delete column": "Удалить столбец",
            "Empty cell": "Очистить ячейку",
            source: "HTML",
            bold: "жирный",
            italic: "курсив",
            brush: "заливка",
            link: "ссылка",
            undo: "отменить",
            redo: "повторить",
            table: "таблица",
            image: "Изображение",
            eraser: "очистить",
            paragraph: "параграф",
            fontsize: "размер шрифта",
            video: "видео",
            font: "шрифт",
            about: "о редакторе",
            print: "печать",
            symbol: "символ",
            underline: "подчеркнутый",
            strikethrough: "перечеркнутый",
            indent: "отступ",
            outdent: "выступ",
            fullsize: "во весь экран",
            shrink: "обычный размер",
            copyformat: "Копировать формат",
            hr: "линия",
            ul: "Список",
            ol: "Нумерованный список",
            cut: "Вырезать",
            selectall: "Выделить все",
            "Embed code": "Код",
            "Open link": "Открыть ссылку",
            "Edit link": "Редактировать ссылку",
            "No follow": "Атрибут nofollow",
            Unlink: "Убрать ссылку",
            Eye: "Просмотр",
            pencil: "Редактировать",
            Update: "Обновить",
            " URL": "URL",
            Edit: "Редактировать",
            "Horizontal align": "Горизонтальное выравнивание",
            Filter: "Фильтр",
            "Sort by changed": "По изменению",
            "Sort by name": "По имени",
            "Sort by size": "По размеру",
            "Add folder": "Добавить папку",
            Reset: "Восстановить",
            Save: "Сохранить",
            "Save as ...": "Сохранить как",
            Resize: "Изменить размер",
            Crop: "Обрезать размер",
            Width: "Ширина",
            Height: "Высота",
            "Keep Aspect Ratio": "Сохранять пропорции",
            Yes: "Да",
            No: "Нет",
            Remove: "Удалить",
            Select: "Выделить",
            "Chars: %d": "Символов: %d",
            "Words: %d": "Слов: %d",
            All: "Выделить все",
            "Select %s": "Выделить: %s",
            "Select all": "Выделить все",
            "Vertical align": "Вертикальное выравнивание",
            Split: "Разделить",
            "Split vertical": "Разделить по вертикали",
            "Split horizontal": "Разделить по горизонтали",
            Merge: "Объединить в одну",
            "Add column": "Добавить столбец",
            "Add row": "Добавить строку",
            Delete: "Удалить",
            Border: "Рамка",
            "License: %s": "Лицензия: %s",
            "Strike through": "Перечеркнуть",
            Underline: "Подчеркивание",
            superscript: "верхний индекс",
            subscript: "индекс",
            "Cut selection": "Вырезать",
            Break: "Разделитель",
            "Search for": "Найти",
            "Replace with": "Заменить на",
            Replace: "Заменить",
            Paste: "Вставить",
            "Choose Content to Paste": "Выбрать контент для вставки",
            "You can only edit your own images. Download this image on the host?": "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?",
            "The image has been successfully uploaded to the host!": "Изображение успешно загружено на сервер!",
            palette: "палитра",
            "There are no files": "В данном каталоге нет файлов",
            Rename: "Переименовать",
            "Enter new name": "Введите новое имя",
            preview: "Предпросмотр",
            download: "Скачать",
            "Paste from clipboard": "Вставить из буфера обмена",
            "Your browser doesn't support direct access to the clipboard.": "Ваш браузер не поддерживает прямой доступ к буферу обмена.",
            "Copy selection": "Скопировать выделенное",
            copy: "копия",
            "Border radius": "Радиус границы",
            "Show all": "Показать все",
            Apply: "Применить",
            "Please fill out this field": "Пожалуйста, заполните это поле",
            "Please enter a web address": "Пожалуйста, введите веб-адрес",
            Default: "По умолчанию",
            Circle: "Круг",
            Dot: "Точка",
            Quadrate: "Квадрат",
            Find: "Найти",
            "Find Previous": "Найти Предыдущие",
            "Find Next": "Найти Далее"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "Bir şeyler yaz",
            Advanced: "Gelişmiş",
            "About Jodit": "Jodit Hakkında",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "Jodit Kullanım Kılavuzu",
            "contains detailed help for using": "kullanım için detaylı bilgiler içerir",
            "For information about the license, please go to our website:": "Lisans hakkında bilgi için lütfen web sitemize gidin:",
            "Buy full version": "Tam versiyonunu satın al",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tüm hakları saklıdır.",
            Anchor: "Bağlantı",
            "Open in new tab": "Yeni sekmede aç",
            "Open editor in fullsize": "Editörü tam ekranda aç",
            "Clear Formatting": "Stili temizle",
            "Fill color or set the text color": "Renk doldur veya yazı rengi seç",
            Redo: "Yinele",
            Undo: "Geri Al",
            Bold: "Kalın",
            Italic: "İtalik",
            "Insert Unordered List": "Sırasız Liste Ekle",
            "Insert Ordered List": "Sıralı Liste Ekle",
            "Align Center": "Ortala",
            "Align Justify": "Kenarlara Yasla",
            "Align Left": "Sola Yasla",
            "Align Right": "Sağa Yasla",
            "Insert Horizontal Line": "Yatay Çizgi Ekle",
            "Insert Image": "Resim Ekle",
            "Insert file": "Dosya Ekle",
            "Insert youtube/vimeo video": "Youtube/Vimeo Videosu Ekle",
            "Insert link": "Bağlantı Ekle",
            "Font size": "Font Boyutu",
            "Font family": "Font Ailesi",
            "Insert format block": "Blok Ekle",
            Normal: "Normal",
            "Heading 1": "Başlık 1",
            "Heading 2": "Başlık 2",
            "Heading 3": "Başlık 3",
            "Heading 4": "Başlık 4",
            Quote: "Alıntı",
            Code: "Kod",
            Insert: "Ekle",
            "Insert table": "Tablo Ekle",
            "Decrease Indent": "Girintiyi Azalt",
            "Increase Indent": "Girintiyi Arttır",
            "Select Special Character": "Özel Karakter Seç",
            "Insert Special Character": "Özel Karakter Ekle",
            "Paint format": "Resim Biçimi",
            "Change mode": "Mod Değiştir",
            Margins: "Boşluklar",
            top: "Üst",
            right: "Sağ",
            bottom: "Alt",
            left: "Sol",
            Styles: "CSS Stilleri",
            Classes: "CSS Sınıfları",
            Align: "Hizalama",
            Right: "Sağ",
            Center: "Ortalı",
            Left: "Sol",
            "--Not Set--": "Belirsiz",
            Src: "Kaynak",
            Title: "Başlık",
            Alternative: "Alternatif Yazı",
            Link: "Link",
            "Open link in new tab": "Bağlantıyı yeni sekmede aç",
            Image: "Resim",
            file: "Dosya",
            Advansed: "Gelişmiş",
            "Image properties": "Resim özellikleri",
            Cancel: "İptal",
            Ok: "Tamam",
            "Your code is similar to HTML. Keep as HTML?": "Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?",
            "Paste as HTML": "HTML olarak yapıştır",
            Keep: "Sakla",
            Clean: "Temizle",
            "Insert as Text": "Yazı olarak ekle",
            "Word Paste Detected": "Word biçiminde yapıştırma algılandı",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?",
            "Insert only Text": "Sadece yazıyı ekle",
            "File Browser": "Dosya Listeleyici",
            "Error on load list": "Liste yüklenirken hata oluştu",
            "Error on load folders": "Klasörler yüklenirken hata oluştur",
            "Are you sure?": "Emin misiniz?",
            "Enter Directory name": "Dizin yolu giriniz",
            "Create directory": "Dizin oluştur",
            "type name": "İsim yaz",
            "Drop image": "Resim bırak",
            "Drop file": "Dosya bırak",
            "or click": "veya tıkla",
            "Alternative text": "Alternatif yazı",
            Browse: "Gözat",
            Upload: "Yükle",
            Background: "Arka plan",
            Text: "Yazı",
            Top: "Üst",
            Middle: "Orta",
            Bottom: "Aşağı",
            "Insert column before": "Öncesine kolon ekle",
            "Insert column after": "Sonrasına kolon ekle",
            "Insert row above": "Üstüne satır ekle",
            "Insert row below": "Altına satır ekle",
            "Delete table": "Tabloyu sil",
            "Delete row": "Satırı sil",
            "Delete column": "Kolonu sil",
            "Empty cell": "Hücreyi temizle",
            Delete: "Sil",
            "Strike through": "Üstü çizili",
            Underline: "Alt çizgi",
            Break: "Satır sonu",
            "Search for": "Ara",
            "Replace with": "Şununla değiştir",
            Replace: "Değiştir",
            Edit: "Düzenle",
            "Vertical align": "Dikey hizala",
            "Horizontal align": "Yatay hizala",
            Filter: "Filtre",
            "Sort by changed": "Değişime göre sırala",
            "Sort by name": "İsme göre sırala",
            "Sort by size": "Boyuta göre sırala",
            "Add folder": "Klasör ekle",
            Split: "Ayır",
            "Split vertical": "Dikey ayır",
            "Split horizontal": "Yatay ayır",
            Merge: "Birleştir",
            "Add column": "Kolon ekle",
            "Add row": "Satır ekle",
            Border: "Kenarlık",
            "Embed code": "Kod ekle",
            Update: "Güncelle",
            superscript: "Üst yazı",
            subscript: "Alt yazı",
            "Cut selection": "Seçilimi kes",
            Paste: "Yapıştır",
            "Choose Content to Paste": "Yapıştırılacak içerik seç",
            "Chars: %d": "Harfler: %d",
            "Words: %d": "Kelimeler: %d",
            All: "Tümü",
            "Select %s": "Seç: %s",
            "Select all": "Tümünü seç",
            source: "Kaynak",
            bold: "Kalın",
            italic: "italik",
            brush: "Fırça",
            link: "Bağlantı",
            undo: "Geri al",
            redo: "Yinele",
            table: "Tablo",
            image: "Resim",
            eraser: "Silgi",
            paragraph: "Paragraf",
            fontsize: "Font boyutu",
            video: "Video",
            font: "Font",
            about: "Hakkında",
            print: "Yazdır",
            symbol: "Sembol",
            underline: "Alt çizgi",
            strikethrough: "Üstü çizili",
            indent: "Girinti",
            outdent: "Çıkıntı",
            fullsize: "Tam ekran",
            shrink: "Küçült",
            copyformat: "Kopyalama Biçimi",
            hr: "Ayraç",
            ul: "Sırasız liste",
            ol: "Sıralı liste",
            cut: "Kes",
            selectall: "Tümünü seç",
            "Open link": "Bağlantıyı aç",
            "Edit link": "Bağlantıyı düzenle",
            "No follow": "Nofollow özelliği",
            Unlink: "Bağlantıyı kaldır",
            Eye: "Yorumu",
            pencil: "Düzenlemek için",
            " URL": "URL",
            Reset: "Sıfırla",
            Save: "Kaydet",
            "Save as ...": "Farklı kaydet",
            Resize: "Boyutlandır",
            Crop: "Kırp",
            Width: "Genişlik",
            Height: "Yükseklik",
            "Keep Aspect Ratio": "En boy oranını koru",
            Yes: "Evet",
            No: "Hayır",
            Remove: "Sil",
            Select: "Seç",
            "You can only edit your own images. Download this image on the host?": "Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?",
            "The image has been successfully uploaded to the host!": "Görsel başarıyla hostunuza yüklendi",
            palette: "Palet",
            "There are no files": "Bu dizinde dosya yok",
            Rename: "Yeniden isimlendir",
            "Enter new name": "Yeni isim girin",
            preview: "Ön izleme",
            download: "İndir",
            "Paste from clipboard": "Panodan yapıştır ",
            "Your browser doesn't support direct access to the clipboard.": "Tarayıcınız panoya doğrudan erişimi desteklemiyor.",
            "Copy selection": "Seçimi kopyala",
            copy: "Kopyala",
            "Border radius": "Sınır yarıçapı",
            "Show all": "Tümünü Göster",
            Apply: "Uygula",
            "Please fill out this field": "Lütfen bu alanı doldurun",
            "Please enter a web address": "Lütfen bir web adresi girin",
            Default: "Varsayılan",
            Circle: "Daire",
            Dot: "Nokta",
            Quadrate: "Kare",
            Find: "Bul",
            "Find Previous": "Öncekini Bul",
            "Find Next": "Sonrakini Bul"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "输入一些内容",
            Advanced: "高级",
            "About Jodit": "关于Jodit",
            "Jodit Editor": "Jodit Editor",
            "Free Non-commercial Version": "Free Non-commercial Version",
            "Jodit User's Guide": "开发者指南",
            "contains detailed help for using": "使用帮助",
            "For information about the license, please go to our website:": "有关许可证的信息，请访问我们的网站：",
            "Buy full version": "购买完整版本",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
            Anchor: "Anchor",
            "Open in new tab": "在新窗口打开",
            "Open editor in fullsize": "全屏编辑",
            "Clear Formatting": "清除样式",
            "Fill color or set the text color": "颜色",
            Redo: "重做",
            Undo: "撤销",
            Bold: "粗体",
            Italic: "斜体",
            "Insert Unordered List": "符号列表",
            "Insert Ordered List": "编号",
            "Align Center": "居中",
            "Align Justify": "对齐文本",
            "Align Left": "左对齐",
            "Align Right": "右对齐",
            "Insert Horizontal Line": "分割线",
            "Insert Image": "图片",
            "Insert file": "文件",
            "Insert youtube/vimeo video": "youtube/vimeo 视频",
            "Insert link": "链接",
            "Font size": "字号",
            "Font family": "字体",
            "Insert format block": "格式块",
            Normal: "文本",
            "Heading 1": "标题1",
            "Heading 2": "标题2",
            "Heading 3": "标题3",
            "Heading 4": "标题4",
            Quote: "引用",
            Code: "代码",
            Insert: "插入",
            "Insert table": "表格",
            "Decrease Indent": "减少缩进",
            "Increase Indent": "增加缩进",
            "Select Special Character": "选择特殊符号",
            "Insert Special Character": "特殊符号",
            "Paint format": "格式复制",
            "Change mode": "改变模式",
            Margins: "外边距（Margins）",
            top: "top",
            right: "right",
            bottom: "bottom",
            left: "left",
            Styles: "样式",
            Classes: "Classes",
            Align: "对齐方式",
            Right: "居右",
            Center: "居中",
            Left: "居左",
            "--Not Set--": "无",
            Src: "Src",
            Title: "Title",
            Alternative: "Alternative",
            Link: "Link",
            "Open link in new tab": "在新窗口打开链接",
            Image: "图片",
            file: "file",
            Advansed: "高级",
            "Image properties": "图片属性",
            Cancel: "取消",
            Ok: "确定",
            "Your code is similar to HTML. Keep as HTML?": "你粘贴的文本是一段html代码，是否保留源格式",
            "Paste as HTML": "html粘贴",
            Keep: "保留源格式",
            Clean: "匹配目标格式",
            "Insert as Text": "把html代码视为普通文本",
            "Word Paste Detected": "文本粘贴",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "正在粘贴 Word/Excel 的文本，是否保留源格式？",
            "Insert only Text": "只保留文本",
            "File Browser": "文件管理",
            "Error on load list": "加载list错误",
            "Error on load folders": "加载folders错误",
            "Are you sure?": "你确定吗？",
            "Enter Directory name": "输入路径",
            "Create directory": "创建路径",
            "type name": "type name",
            "Drop image": "拖动图片到此",
            "Drop file": "拖动文件到此",
            "or click": "或点击",
            "Alternative text": "Alternative text",
            Browse: "浏览",
            Upload: "上传",
            Background: "背景色",
            Text: "文字",
            Top: "顶部",
            Middle: "中间",
            Bottom: "底部",
            "Insert column before": "在之前插入列",
            "Insert column after": "在之后插入列",
            "Insert row above": "在之前插入行",
            "Insert row below": "在之后插入行",
            "Delete table": "删除表格",
            "Delete row": "删除行",
            "Delete column": "删除列",
            "Empty cell": "清除内容",
            "Chars: %d": "字符数: %d",
            "Words: %d": "单词数: %d",
            "Strike through": "删除线",
            Underline: "下划线",
            superscript: "上标",
            subscript: "下标",
            "Cut selection": "剪切",
            "Select all": "全选",
            Break: "Pause",
            "Search for": "查找",
            "Replace with": "替换为",
            Replace: "替换",
            Paste: "粘贴",
            "Choose Content to Paste": "选择内容并粘贴",
            All: "全部",
            source: "源码",
            bold: "粗体",
            italic: "斜体",
            brush: "颜色",
            link: "链接",
            undo: "撤销",
            redo: "重做",
            table: "表格",
            image: "图片",
            eraser: "橡皮擦",
            paragraph: "段落",
            fontsize: "字号",
            video: "视频",
            font: "字体",
            about: "关于",
            print: "打印",
            symbol: "符号",
            underline: "下划线",
            strikethrough: "上出现",
            indent: "增加缩进",
            outdent: "减少缩进",
            fullsize: "全屏",
            shrink: "收缩",
            copyformat: "复制格式",
            hr: "分割线",
            ul: "无序列表",
            ol: "顺序列表",
            cut: "剪切",
            selectall: "全选",
            "Open link": "打开链接",
            "Edit link": "编辑链接",
            "No follow": "No follow",
            Unlink: "Unlink",
            Eye: "回顧",
            " URL": "URL",
            Reset: "重置",
            Save: "保存",
            "Save as ...": "保存为",
            Resize: "调整大小",
            Crop: "Crop",
            Width: "宽",
            Height: "高",
            "Keep Aspect Ratio": "保存长宽比",
            Yes: "是",
            No: "不",
            Remove: "移除",
            Select: "选择",
            "Select %s": "选择: %s",
            Update: "更新",
            "Vertical align": "垂直对齐",
            Merge: "合并",
            "Add column": "添加列",
            "Add row": "添加行",
            Border: "边框",
            "Embed code": "嵌入代码",
            Delete: "删除",
            "Horizontal align": "水平对齐",
            Filter: "筛选",
            "Sort by changed": "修改时间排序",
            "Sort by name": "名称排序",
            "Sort by size": "大小排序",
            "Add folder": "新建文件夹",
            Split: "拆分",
            "Split vertical": "垂直拆分",
            "Split horizontal": "水平拆分",
            "You can only edit your own images. Download this image on the host?": "你只能编辑你自己的图片。Download this image on the host?",
            "The image has been successfully uploaded to the host!": "图片上传成功",
            palette: "调色板",
            pencil: "铅笔",
            "There are no files": "此目录中沒有文件。",
            Rename: "重命名",
            "Enter new name": "输入新名称",
            preview: "预览",
            download: "下载",
            "Paste from clipboard": "粘贴从剪贴板",
            "Your browser doesn't support direct access to the clipboard.": "你浏览器不支持直接访问的剪贴板。",
            "Copy selection": "复制的选择",
            copy: "复制",
            "Border radius": "边界半径",
            "Show all": "显示所有",
            Apply: "适用",
            "Please fill out this field": "请填写这个领域",
            "Please enter a web address": "请输入一个网址",
            Default: "默认的",
            Circle: "圆圈",
            Dot: "点",
            Quadrate: "方形",
            Find: "找到",
            "Find Previous": "找到以前的",
            "Find Next": "找到下一个"
        }
    }, function(e, t) {
        e.exports = {
            "Type something": "輸入一些內容",
            Advanced: "高級",
            "About Jodit": "關於Jodit",
            "Jodit Editor": "Jodit Editor",
            "Jodit User's Guide": "開發者指南",
            "contains detailed help for using": "使用幫助",
            "For information about the license, please go to our website:": "有關許可證的信息，請訪問我們的網站：",
            "Buy full version": "購買完整版本",
            "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
            Anchor: "Anchor",
            "Open in new tab": "在新窗口打開",
            "Open editor in fullsize": "全屏編輯",
            "Clear Formatting": "清除樣式",
            "Fill color or set the text color": "顏色",
            Redo: "重做",
            Undo: "撤銷",
            Bold: "粗體",
            Italic: "斜體",
            "Insert Unordered List": "符號列表",
            "Insert Ordered List": "編號",
            "Align Center": "居中",
            "Align Justify": "對齊文本",
            "Align Left": "左對齊",
            "Align Right": "右對齊",
            "Insert Horizontal Line": "分割線",
            "Insert Image": "圖片",
            "Insert file": "文件",
            "Insert youtube/vimeo video": "youtube/vimeo 影片",
            "Insert link": "鏈接",
            "Font size": "字號",
            "Font family": "字體",
            "Insert format block": "格式塊",
            Normal: "文本",
            "Heading 1": "標題1",
            "Heading 2": "標題2",
            "Heading 3": "標題3",
            "Heading 4": "標題4",
            Quote: "引用",
            Code: "代碼",
            Insert: "插入",
            "Insert table": "表格",
            "Decrease Indent": "減少縮進",
            "Increase Indent": "增加縮進",
            "Select Special Character": "選擇特殊符號",
            "Insert Special Character": "特殊符號",
            "Paint format": "格式複製",
            "Change mode": "改變模式",
            Margins: "外邊距（Margins）",
            top: "top",
            right: "right",
            bottom: "bottom",
            left: "left",
            Styles: "樣式",
            Classes: "Classes",
            Align: "對齊方式",
            Right: "居右",
            Center: "居中",
            Left: "居左",
            "--Not Set--": "無",
            Src: "Src",
            Title: "Title",
            Alternative: "替代",
            Link: "Link",
            "Open link in new tab": "在新窗口打開鏈接",
            Image: "圖片",
            file: "file",
            Advansed: "高級",
            "Image properties": "圖片屬性",
            Cancel: "取消",
            Ok: "確定",
            "Your code is similar to HTML. Keep as HTML?": "你黏貼的文本是一段html代碼，是否保留源格式",
            "Paste as HTML": "html黏貼",
            Keep: "保留源格式",
            Clean: "匹配目標格式",
            "Insert as Text": "把html代碼視為普通文本",
            "Word Paste Detected": "文本黏貼",
            "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "正在黏貼 Word/Excel 的文本，是否保留源格式？",
            "Insert only Text": "只保留文本",
            "File Browser": "文件管理",
            "Error on load list": "加載list錯誤",
            "Error on load folders": "加載folders錯誤",
            "Are you sure?": "你確定嗎？",
            "Enter Directory name": "輸入路徑",
            "Create directory": "創建路徑",
            "type name": "type name",
            "Drop image": "拖動圖片到此",
            "Drop file": "拖動文件到此",
            "or click": "或點擊",
            "Alternative text": "替代文字",
            Browse: "瀏覽",
            Upload: "上傳",
            Background: "背景色",
            Text: "文字",
            Top: "頂部",
            Middle: "中間",
            Bottom: "底部",
            "Insert column before": "在之前插入列",
            "Insert column after": "在之後插入列",
            "Insert row above": "在之前插入行",
            "Insert row below": "在之後插入行",
            "Delete table": "刪除表格",
            "Delete row": "刪除行",
            "Delete column": "刪除列",
            "Empty cell": "清除內容",
            "Chars: %d": "字符數: %d",
            "Words: %d": "單詞數: %d",
            "Strike through": "刪除線",
            Underline: "下劃線",
            superscript: "上標",
            subscript: "下標",
            "Cut selection": "剪切",
            "Select all": "全選",
            Break: "Pause",
            "Search for": "查找",
            "Replace with": "替換為",
            Replace: "แทนที่",
            Paste: "黏貼",
            "Choose Content to Paste": "選擇內容並黏貼",
            All: "全部",
            source: "源碼",
            bold: "粗體",
            italic: "斜體",
            brush: "顏色",
            link: "鏈接",
            undo: "撤銷",
            redo: "重做",
            table: "表格",
            image: "圖片",
            eraser: "橡皮擦",
            paragraph: "段落",
            fontsize: "字號",
            video: "影片",
            font: "字體",
            about: "關於",
            print: "打印",
            symbol: "符號",
            underline: "下劃線",
            strikethrough: "上出現",
            indent: "增加縮進",
            outdent: "減少縮進",
            fullsize: "全屏",
            shrink: "收縮",
            copyformat: "複製格式",
            hr: "分割線",
            ul: "無序列表",
            ol: "順序列表",
            cut: "剪切",
            selectall: "全選",
            "Open link": "打開鏈接",
            "Edit link": "編輯鏈接",
            "No follow": "No follow",
            Unlink: "取消連結",
            Eye: "回顧",
            " URL": "URL",
            Reset: "重置",
            Save: "保存",
            "Save as ...": "保存為",
            Resize: "調整大小",
            Crop: "Crop",
            Width: "寬",
            Height: "高",
            "Keep Aspect Ratio": "保存長寬比",
            Yes: "是",
            No: "不",
            Remove: "移除",
            Select: "選擇",
            "Select %s": "選擇: %s",
            Update: "更新",
            "Vertical align": "垂直對齊",
            Merge: "合併",
            "Add column": "添加列",
            "Add row": "添加行",
            Border: "邊框",
            "Embed code": "嵌入代碼",
            Delete: "刪除",
            "Horizontal align": "水平對齊",
            Filter: "篩選",
            "Sort by changed": "修改時間排序",
            "Sort by name": "名稱排序",
            "Sort by size": "大小排序",
            "Add folder": "新建文件夾",
            Split: "拆分",
            "Split vertical": "垂直拆分",
            "Split horizontal": "水平拆分",
            "You can only edit your own images. Download this image on the host?": "你只能編輯你自己的圖片。是否下載此圖片到本地?",
            "The image has been successfully uploaded to the host!": "圖片上傳成功",
            palette: "調色板",
            pencil: "鉛筆",
            "There are no files": "此目錄中沒有文件。",
            Rename: "重命名",
            "Enter new name": "輸入新名稱",
            preview: "預覽",
            download: "下載",
            "Paste from clipboard": "從剪貼板貼上",
            "Your browser doesn't support direct access to the clipboard.": "瀏覽器無法存取剪贴板。",
            "Copy selection": "複製已選取項目",
            copy: "複製",
            "Border radius": "邊框圓角",
            "Show all": "顯示所有",
            Apply: "應用",
            "Please fill out this field": "ได้โปรดกรอกช่องข้อมูลนี้",
            "Please enter a web address": "โปรดเติมที่อยู่บนเว็บ",
            Default: "ค่าปริยาย",
            Circle: "วงกลม",
            Dot: "จุด",
            Quadrate: "Quadrate",
            Find: "ค้นหา",
            "Find Previous": "ค้นหาก่อนหน้านี้",
            "Find Next": "ค้นหาถัดไป"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.xpath = t.tooltip = t.symbols = t.sticky = t.stat = t.source = t.resizeHandler = t.size = t.search = t.resizer = t.redoUndo = t.placeholder = t.orderedList = t.mobile = t.media = t.link = t.limit = t.justify = t.inlinePopup = t.hr = t.indent = t.iframe = t.hotkeys = t.fullsize = t.formatBlock = t.font = t.errorMessages = t.enter = t.DragAndDropElement = t.DragAndDrop = t.color = t.pasteStorage = t.paste = t.clipboard = t.WrapTextNodes = t.cleanHtml = t.bold = t.Delete = t.autofocus = t.about = t.addNewLine = void 0;
        var r = o(0),
            n = o(233);
        Object.defineProperty(t, "addNewLine", {
            enumerable: !0,
            get: function() {
                return n.addNewLine
            }
        });
        var i = o(235);
        Object.defineProperty(t, "about", {
            enumerable: !0,
            get: function() {
                return i.about
            }
        });
        var a = o(237);
        Object.defineProperty(t, "autofocus", {
            enumerable: !0,
            get: function() {
                return a.autofocus
            }
        });
        var s = o(238);
        Object.defineProperty(t, "Delete", {
            enumerable: !0,
            get: function() {
                return s.Delete
            }
        });
        var l = o(239);
        Object.defineProperty(t, "bold", {
            enumerable: !0,
            get: function() {
                return l.bold
            }
        });
        var c = o(240);
        Object.defineProperty(t, "cleanHtml", {
            enumerable: !0,
            get: function() {
                return c.cleanHtml
            }
        });
        var u = o(241);
        Object.defineProperty(t, "WrapTextNodes", {
            enumerable: !0,
            get: function() {
                return u.WrapTextNodes
            }
        });
        var d = o(242);
        Object.defineProperty(t, "clipboard", {
            enumerable: !0,
            get: function() {
                return d.clipboard
            }
        }), Object.defineProperty(t, "paste", {
            enumerable: !0,
            get: function() {
                return d.paste
            }
        }), Object.defineProperty(t, "pasteStorage", {
            enumerable: !0,
            get: function() {
                return d.pasteStorage
            }
        });
        var p = o(248);
        Object.defineProperty(t, "color", {
            enumerable: !0,
            get: function() {
                return p.color
            }
        });
        var f = o(249);
        Object.defineProperty(t, "DragAndDrop", {
            enumerable: !0,
            get: function() {
                return f.DragAndDrop
            }
        });
        var h = o(250);
        Object.defineProperty(t, "DragAndDropElement", {
            enumerable: !0,
            get: function() {
                return h.DragAndDropElement
            }
        });
        var m = o(251);
        Object.defineProperty(t, "enter", {
            enumerable: !0,
            get: function() {
                return m.enter
            }
        });
        var v = o(252);
        Object.defineProperty(t, "errorMessages", {
            enumerable: !0,
            get: function() {
                return v.errorMessages
            }
        });
        var g = o(254);
        Object.defineProperty(t, "font", {
            enumerable: !0,
            get: function() {
                return g.font
            }
        });
        var y = o(255);
        Object.defineProperty(t, "formatBlock", {
            enumerable: !0,
            get: function() {
                return y.formatBlock
            }
        });
        var b = o(256);
        Object.defineProperty(t, "fullsize", {
            enumerable: !0,
            get: function() {
                return b.fullsize
            }
        });
        var _ = o(258);
        Object.defineProperty(t, "hotkeys", {
            enumerable: !0,
            get: function() {
                return _.hotkeys
            }
        });
        var w = o(259);
        Object.defineProperty(t, "iframe", {
            enumerable: !0,
            get: function() {
                return w.iframe
            }
        }), r.__exportStar(o(260), t);
        var S = o(268);
        Object.defineProperty(t, "indent", {
            enumerable: !0,
            get: function() {
                return S.indent
            }
        });
        var C = o(269);
        Object.defineProperty(t, "hr", {
            enumerable: !0,
            get: function() {
                return C.hr
            }
        });
        var j = o(271);
        Object.defineProperty(t, "inlinePopup", {
            enumerable: !0,
            get: function() {
                return j.inlinePopup
            }
        });
        var k = o(70);
        Object.defineProperty(t, "justify", {
            enumerable: !0,
            get: function() {
                return k.justify
            }
        });
        var E = o(277);
        Object.defineProperty(t, "limit", {
            enumerable: !0,
            get: function() {
                return E.limit
            }
        });
        var x = o(278);
        Object.defineProperty(t, "link", {
            enumerable: !0,
            get: function() {
                return x.link
            }
        });
        var I = o(280);
        Object.defineProperty(t, "media", {
            enumerable: !0,
            get: function() {
                return I.media
            }
        });
        var T = o(281);
        Object.defineProperty(t, "mobile", {
            enumerable: !0,
            get: function() {
                return T.mobile
            }
        });
        var P = o(282);
        Object.defineProperty(t, "orderedList", {
            enumerable: !0,
            get: function() {
                return P.orderedList
            }
        });
        var D = o(283);
        Object.defineProperty(t, "placeholder", {
            enumerable: !0,
            get: function() {
                return D.placeholder
            }
        });
        var z = o(285);
        Object.defineProperty(t, "redoUndo", {
            enumerable: !0,
            get: function() {
                return z.redoUndo
            }
        });
        var A = o(286);
        Object.defineProperty(t, "resizer", {
            enumerable: !0,
            get: function() {
                return A.resizer
            }
        });
        var M = o(288);
        Object.defineProperty(t, "search", {
            enumerable: !0,
            get: function() {
                return M.search
            }
        });
        var L = o(290);
        Object.defineProperty(t, "size", {
            enumerable: !0,
            get: function() {
                return L.size
            }
        }), Object.defineProperty(t, "resizeHandler", {
            enumerable: !0,
            get: function() {
                return L.resizeHandler
            }
        });
        var O = o(295);
        Object.defineProperty(t, "source", {
            enumerable: !0,
            get: function() {
                return O.source
            }
        });
        var R = o(303);
        Object.defineProperty(t, "stat", {
            enumerable: !0,
            get: function() {
                return R.stat
            }
        });
        var B = o(304);
        Object.defineProperty(t, "sticky", {
            enumerable: !0,
            get: function() {
                return B.sticky
            }
        });
        var q = o(306);
        Object.defineProperty(t, "symbols", {
            enumerable: !0,
            get: function() {
                return q.symbols
            }
        }), r.__exportStar(o(309), t);
        var N = o(315);
        Object.defineProperty(t, "tooltip", {
            enumerable: !0,
            get: function() {
                return N.tooltip
            }
        }), o(317), o(319);
        var H = o(321);
        Object.defineProperty(t, "xpath", {
            enumerable: !0,
            get: function() {
                return H.xpath
            }
        })
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addNewLine = void 0;
        var r = o(0);
        o(234);
        var n = o(4),
            i = o(10),
            a = o(1);
        n.Config.prototype.addNewLine = !0, n.Config.prototype.addNewLineOnDBLClick = !0, n.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], n.Config.prototype.addNewLineDeltaShow = 20;
        var s = "addnewline",
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.line = t.j.c.fromHTML('<div role="button" tabIndex="-1" title="' + t.j.i18n("Break") + '" class="jodit-add-new-line"><span>' + i.Icon.get("enter") + "</span></div>"), t.isMatchedTag = function(e) {
                        return Boolean(e && t.j.o.addNewLineTagsTriggers.includes(e.nodeName.toLowerCase()))
                    }, t.preview = !1, t.lineInFocus = !1, t.isShown = !1, t.hideForce = function() {
                        t.isShown && (t.isShown = !1, t.j.async.clearTimeout(t.timeout), t.lineInFocus = !1, i.Dom.safeRemove(t.line))
                    }, t.hide = function() {
                        t.isShown && !t.lineInFocus && (t.timeout = t.j.async.setTimeout(t.hideForce, {
                            timeout: 500,
                            label: "add-new-line-hide"
                        }))
                    }, t.canGetFocus = function(e) {
                        return null !== e && i.Dom.isBlock(e, t.j.ew) && !/^(img|table|iframe|hr)$/i.test(e.nodeName)
                    }, t.onClickLine = function(e) {
                        var o = t.j,
                            r = o.createInside.element(o.o.enter);
                        t.preview && t.current && t.current.parentNode ? t.current.parentNode.insertBefore(r, t.current) : o.editor.appendChild(r), o.s.setCursorIn(r), a.scrollIntoView(r, o.editor, o.ed), o.e.fire("synchro"), t.hideForce(), e.preventDefault()
                    }, t.onDblClickEditor = function(e) {
                        var o = t.j;
                        if (!o.o.readonly && o.o.addNewLineOnDBLClick && e.target === o.editor && o.s.isCollapsed()) {
                            var r = a.offset(o.editor, o, o.ed),
                                n = e.pageY - o.ew.pageYOffset,
                                i = o.createInside.element(o.o.enter);
                            Math.abs(n - r.top) < Math.abs(n - (r.height + r.top)) && o.editor.firstChild ? o.editor.insertBefore(i, o.editor.firstChild) : o.editor.appendChild(i), o.s.setCursorIn(i), o.setEditorValue(), t.hideForce(), e.preventDefault()
                        }
                    }, t.onMouseMove = function(e) {
                        var o = t.j,
                            r = o.ed.elementFromPoint(e.clientX, e.clientY);
                        if (i.Dom.isHTMLElement(r, o.ew) && !i.Dom.isOrContains(t.line, r) && i.Dom.isOrContains(o.editor, r))
                            if (t.isMatchedTag(r) || (r = i.Dom.closest(r, t.isMatchedTag, o.editor)), r) {
                                if (t.isMatchedTag(r)) {
                                    var n = i.Dom.up(r, (function(e) {
                                        return i.Dom.isBlock(e, o.ew)
                                    }), o.editor);
                                    n && n !== o.editor && (r = n)
                                }
                                var s = a.position(r, t.j),
                                    l = !1,
                                    c = e.clientY;
                                t.j.iframe && (c += a.position(t.j.iframe, t.j, !0).top);
                                var u = t.j.o.addNewLineDeltaShow;
                                Math.abs(c - s.top) > u || (l = s.top, t.preview = !0), Math.abs(c - (s.top + s.height)) > u || (l = s.top + s.height, t.preview = !1), !1 === l || a.call(t.preview ? i.Dom.prev : i.Dom.next, r, t.canGetFocus, o.editor) ? (t.current = !1, t.hide()) : (t.line.style.top = l + "px", t.current = r, t.show())
                            } else t.hide()
                    }, t
                }
                return r.__extends(t, e), t.prototype.show = function() {
                    this.isShown || this.j.o.readonly || this.j.isLocked || (this.isShown = !0, this.j.async.clearTimeout(this.timeout), this.line.classList.toggle("jodit-add-new-line_after", !this.preview), this.j.container.appendChild(this.line), this.line.style.width = this.j.editor.clientWidth + "px")
                }, t.prototype.afterInit = function(e) {
                    var t = this;
                    e.o.addNewLine && (e.e.on(this.line, "mousemove", (function(e) {
                        e.stopPropagation()
                    })).on(this.line, "mousedown touchstart", this.onClickLine).on("change", this.hideForce).on(this.line, "mouseenter", (function() {
                        t.j.async.clearTimeout(t.timeout), t.lineInFocus = !0
                    })).on(this.line, "mouseleave", (function() {
                        t.lineInFocus = !1
                    })).on("changePlace", this.addEventListeners.bind(this)), this.addEventListeners())
                }, t.prototype.addEventListeners = function() {
                    var e = this.j;
                    e.e.off(e.editor, "." + s).off(e.container, "." + s).on([e.ow, e.ew, e.editor], "scroll." + s, this.hideForce).on(e.editor, "dblclick." + s, this.onDblClickEditor).on(e.editor, "click." + s, this.hide).on(e.container, "mouseleave." + s, this.hide).on(e.editor, "mousemove." + s, e.async.debounce(this.onMouseMove, 3 * e.defaultTimeout))
                }, t.prototype.beforeDestruct = function() {
                    this.j.async.clearTimeout(this.timeout), this.j.e.off(this.line), this.j.e.off("changePlace", this.addEventListeners), i.Dom.safeRemove(this.line), this.j.e.off([this.j.ow, this.j.ew, this.j.editor], "." + s).off(this.j.container, "." + s)
                }, t
            }(i.Plugin);
        t.addNewLine = l
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.about = void 0, o(236);
        var r = o(4),
            n = o(1),
            i = o(3),
            a = o(16);
        r.Config.prototype.controls.about = {
            exec: function(e) {
                var t = new a.Dialog({
                        language: e.o.language
                    }),
                    o = e.i18n.bind(e);
                t.setHeader(o("About Jodit")), t.setContent('<div class="jodit-about">\n\t\t\t\t\t<div>' + o("Jodit Editor") + " v." + e.getVersion() + "</div>\n\t\t\t\t\t<div>" + o("License: %s", n.isLicense(e.o.license) ? n.normalizeLicense(e.o.license) : "MIT") + '</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href="https://xdsoft.net/jodit/doc/" target="_blank">' + o("Jodit User's Guide") + "</a>\n\t\t\t\t\t\t" + o("contains detailed help for using") + "\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>" + o("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div>\n\t\t\t\t</div>"), t.open(!0), t.bindDestruct(e)
            },
            tooltip: "About Jodit",
            mode: i.MODE_SOURCE + i.MODE_WYSIWYG
        }, t.about = function() {}
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.autofocus = void 0;
        var r = o(4),
            n = o(2);
        r.Config.prototype.autofocus = !1, t.autofocus = function(e) {
            e.e.on("afterInit", (function() {
                e.o.autofocus && (e.defaultTimeout ? e.async.setTimeout(e.s.focus, 300) : e.s.focus())
            })), e.e.on("afterInit afterAddPlace", (function() {
                e.e.off(e.editor, "mousedown.autofocus").on(e.editor, "mousedown.autofocus", (function(t) {
                    e.isEditorMode() && t.target && n.Dom.isBlock(t.target, e.ew) && !t.target.childNodes.length && (e.editor === t.target ? e.s.focus() : e.s.setCursorIn(t.target))
                }))
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Delete = void 0;
        var r = o(0),
            n = o(6),
            i = o(2),
            a = o(3),
            s = o(1),
            l = o(54),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "root", {
                    get: function() {
                        return this.j.editor
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.afterInit = function(e) {
                    var t = this;
                    e.e.on("afterCommand", (function(e) {
                        "delete" === e && t.afterDeleteCommand()
                    })).on("keydown", (function(e) {
                        if (e.key === a.KEY_BACKSPACE || e.key === a.KEY_DELETE) return t.onDelete(e.key === a.KEY_BACKSPACE)
                    }), void 0, !0)
                }, t.prototype.beforeDestruct = function(e) {
                    e.e.off("afterCommand").off("keydown")
                }, t.prototype.afterDeleteCommand = function() {
                    var e = this.j,
                        t = e.s.current();
                    if (t && i.Dom.isTag(t.firstChild, "br") && e.s.removeNode(t.firstChild), !(s.trim(e.editor.textContent || "") || e.editor.querySelector("img") || t && i.Dom.closest(t, "table", e.editor))) {
                        e.editor.innerHTML = "";
                        var o = e.s.setCursorIn(e.editor);
                        e.s.removeNode(o)
                    }
                }, t.prototype.onDelete = function(e) {
                    var t, o = this.j.selection;
                    if (o.isFocused() || o.focus(), !(null === (t = o.sel) || void 0 === t ? void 0 : t.rangeCount) || this.checkNotCollapsed()) return !1;
                    var r = this.j,
                        n = o.range,
                        s = r.createInside.text(a.INVISIBLE_SPACE);
                    try {
                        if (n.insertNode(s), !i.Dom.isOrContains(r.editor, s)) return;
                        if (l.normalizeCursorPosition(s, e), this.checkRemoveInseparableElement(s, e) || this.checkRemoveChar(s, e) || this.checkTableCell(s, e) || this.checkRemoveEmptyParent(s, e) || this.checkRemoveEmptyNeighbor(s, e) || this.checkJoinTwoLists(s, e) || this.checkJoinNeighbors(s, e) || this.checkRewrapListItem(s, e)) return !1
                    } catch (e) {
                        throw e
                    } finally {
                        this.safeRemoveEmptyNode(s)
                    }
                    return !1
                }, t.prototype.checkNotCollapsed = function() {
                    var e = this.j;
                    if (!e.s.isCollapsed()) return e.execCommand("Delete"), !0
                }, t.prototype.checkRemoveChar = function(e, t) {
                    for (var o, r, n, c = t ? -1 : 1, u = l.getSibling(e, t), d = null, p = !1; u && (i.Dom.isText(u) || i.Dom.isInlineBlock(u));) {
                        for (; i.Dom.isInlineBlock(u);) u = t ? null == u ? void 0 : u.lastChild : null == u ? void 0 : u.firstChild;
                        if (!u) break;
                        if (null === (o = u.nodeValue) || void 0 === o ? void 0 : o.length) {
                            var f = u.nodeValue,
                                h = f.length,
                                m = t ? h - 1 : 0;
                            if (f[m] === a.INVISIBLE_SPACE)
                                for (; f[m] === a.INVISIBLE_SPACE;) m += c;
                            if (n = f[m], f[m + c] === a.INVISIBLE_SPACE) {
                                for (m += c; f[m] === a.INVISIBLE_SPACE;) m += c;
                                m += t ? 1 : -1
                            }
                            u.nodeValue = f.substr(t ? 0 : m + 1, t ? m : h)
                        }
                        if ((null === (r = u.nodeValue) || void 0 === r ? void 0 : r.length) || (d = u), !s.isVoid(n) && n !== a.INVISIBLE_SPACE) {
                            p = !0;
                            break
                        }
                        u = l.getSibling(u, t), d && (i.Dom.safeRemove(d), d = null)
                    }
                    return p && (this.removeEmptyInlineParent(e), this.addBRInsideEmptyBlock(e), this.j.s.setCursorBefore(e)), p || void 0
                }, t.prototype.removeEmptyInlineParent = function(e) {
                    for (var t = e.parentElement; t && i.Dom.isInlineBlock(t);) {
                        var o = t.parentElement;
                        i.Dom.isEmpty(t) && (i.Dom.after(t, e), i.Dom.safeRemove(t)), t = o
                    }
                }, t.prototype.addBRInsideEmptyBlock = function(e) {
                    e.parentElement !== this.root && i.Dom.isBlock(e.parentElement, this.j.ew) && i.Dom.each(e.parentElement, i.Dom.isEmptyTextNode) && i.Dom.after(e, this.j.createInside.element("br"))
                }, t.prototype.checkRemoveInseparableElement = function(e, t) {
                    var o = i.Dom.getNormalSibling(e, t);
                    if (i.Dom.isElement(o) && (i.Dom.isTag(o, a.INSEPARABLE_TAGS) || i.Dom.isEmpty(o) || "false" === s.attr(o, "contenteditable"))) return i.Dom.safeRemove(o), this.j.s.setCursorBefore(e), i.Dom.isTag(o, "br") && this.checkRemoveEmptyParent(e, t), !0
                }, t.prototype.checkTableCell = function(e, t) {
                    if (i.Dom.isCell(e.parentElement, this.j.ew)) return !0
                }, t.prototype.checkRemoveEmptyParent = function(e, t) {
                    var o = !1,
                        r = this.j.s,
                        n = r.setCursorBefore,
                        s = r.setCursorIn,
                        c = i.Dom.closest(e, i.Dom.isElement, this.root);
                    if (c && i.Dom.isEmpty(c)) {
                        var u = l.getNeighbor(e, t, this.root);
                        do {
                            if (!c || !i.Dom.isEmpty(c) || i.Dom.isCell(c, this.j.ew)) break;
                            i.Dom.after(c, e);
                            var d = i.Dom.closest(c, (function(e) {
                                return i.Dom.isElement(e) && e !== c
                            }), this.root);
                            i.Dom.safeRemove(c), o = !0, c = d
                        } while (c);
                        return !(!o || !this.checkJoinTwoLists(e, t)) || (!u || i.Dom.isText(u) || i.Dom.isTag(u, a.INSEPARABLE_TAGS) ? n(e) : s(u, !t), o || void 0)
                    }
                }, t.prototype.checkJoinTwoLists = function(e, t) {
                    var o = i.Dom.getNormalSibling(e, t),
                        r = i.Dom.getNormalSibling(e, !t);
                    if (!i.Dom.closest(e, i.Dom.isElement, this.root) && i.Dom.isTag(o, ["ul", "ol"]) && i.Dom.isTag(r, ["ul", "ol"]) && i.Dom.isTag(o.lastElementChild, "li") && i.Dom.isTag(r.firstElementChild, "li")) {
                        var n = this.j.s,
                            a = n.setCursorBefore,
                            l = n.setCursorAfter,
                            c = o.lastElementChild;
                        return s.call(t ? i.Dom.prepend : i.Dom.append, r.firstElementChild, e), this.checkJoinNeighbors(e, t), s.call(t ? i.Dom.append : i.Dom.prepend, c, e), s.call(t ? a : l, e), !0
                    }
                }, t.prototype.checkRemoveEmptyNeighbor = function(e, t) {
                    var o = i.Dom.closest(e, i.Dom.isElement, this.root);
                    if (o) {
                        var r = l.getNotSpaceSibling(o, t);
                        return r && i.Dom.isEmpty(r) ? (i.Dom.safeRemove(r), this.j.s.setCursorBefore(e), !0) : void 0
                    }
                }, t.prototype.checkJoinNeighbors = function(e, t) {
                    var o = i.Dom.closest(e, i.Dom.isElement, this.root);
                    if (o) {
                        var r = l.getNotSpaceSibling(o, t),
                            n = r;
                        if (this.j.s.setCursorBefore(e), this.j.s.cursorInTheEdge(t, o)) {
                            if (i.Dom.isTag(r, ["ul", "ol"]) && !i.Dom.isTag(o, ["ul", "ol"]) && (r = t ? r.lastElementChild : r.firstElementChild), o && r && n && i.Dom.isElement(r) && this.j.s.cursorInTheEdge(t, o)) {
                                i.Dom.moveContent(o, r, !t);
                                var a = void 0;
                                do {
                                    a = l.getSibling(n, !t), i.Dom.safeRemove(a)
                                } while (a !== o);
                                return this.j.s.setCursorBefore(e), !0
                            }
                            if (i.Dom.isTag(o, "li") && this.j.s.cursorInTheEdge(t, o)) {
                                s.call(t ? i.Dom.before : i.Dom.after, o, e);
                                var c = this.checkJoinNeighbors(e, t);
                                return s.call(t ? i.Dom.prepend : i.Dom.append, o, e), this.j.s.setCursorBefore(e), c
                            }
                        }
                    }
                }, t.prototype.checkRewrapListItem = function(e, t) {
                    var o;
                    if (t) {
                        var r = i.Dom.closest(e, i.Dom.isElement, this.root);
                        if (i.Dom.isTag(r, "li") && (null === (o = null == r ? void 0 : r.parentElement) || void 0 === o ? void 0 : o.firstElementChild) === r && this.j.s.cursorInTheEdge(!0, r)) {
                            var n = r.parentElement,
                                a = this.j.createInside.element(this.j.o.enterBlock);
                            return i.Dom.before(n, a), i.Dom.moveContent(r, a), i.Dom.safeRemove(r), i.Dom.isEmpty(n) && i.Dom.safeRemove(n), this.j.s.setCursorBefore(e), !0
                        }
                    }
                }, t.prototype.safeRemoveEmptyNode = function(e) {
                    var t, o, r = this.j.s.range;
                    r.startContainer === e && (e.previousSibling ? i.Dom.isText(e.previousSibling) ? r.setStart(e.previousSibling, null !== (o = null === (t = e.previousSibling.nodeValue) || void 0 === t ? void 0 : t.length) && void 0 !== o ? o : 0) : r.setStartAfter(e.previousSibling) : e.nextSibling && (i.Dom.isText(e.nextSibling) ? r.setStart(e.nextSibling, 0) : r.setStartBefore(e.nextSibling)), r.collapse(!0), this.j.s.selectRange(r)), i.Dom.safeRemove(e)
                }, t
            }(n.Plugin);
        t.Delete = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bold = void 0;
        var r = o(0),
            n = o(4),
            i = o(1);
        n.Config.prototype.controls.subscript = {
            tags: ["sub"],
            tooltip: "subscript"
        }, n.Config.prototype.controls.superscript = {
            tags: ["sup"],
            tooltip: "superscript"
        }, n.Config.prototype.controls.bold = {
            tagRegExp: /^(strong|b)$/i,
            tags: ["strong", "b"],
            css: {
                "font-weight": ["bold", "700"]
            },
            tooltip: "Bold"
        }, n.Config.prototype.controls.italic = {
            tagRegExp: /^(em|i)$/i,
            tags: ["em", "i"],
            css: {
                "font-style": "italic"
            },
            tooltip: "Italic"
        }, n.Config.prototype.controls.underline = {
            tagRegExp: /^(u)$/i,
            tags: ["u"],
            css: {
                "text-decoration": "underline"
            },
            tooltip: "Underline"
        }, n.Config.prototype.controls.strikethrough = {
            tagRegExp: /^(s)$/i,
            tags: ["s"],
            css: {
                "text-decoration": "line-through"
            },
            tooltip: "Strike through"
        }, t.bold = function(e) {
            var t = function(t) {
                var o = n.Config.defaultOptions.controls[t],
                    a = r.__assign({}, o.css),
                    s = {};
                return Object.keys(a).forEach((function(e) {
                    s[e] = i.isArray(a[e]) ? a[e][0] : a[e]
                })), e.s.applyStyle(s, {
                    element: o.tags ? o.tags[0] : void 0
                }), e.e.fire("synchro"), !1
            };
            e.registerCommand("bold", {
                exec: t,
                hotkeys: ["ctrl+b", "cmd+b"]
            }).registerCommand("italic", {
                exec: t,
                hotkeys: ["ctrl+i", "cmd+i"]
            }).registerCommand("underline", {
                exec: t,
                hotkeys: ["ctrl+u", "cmd+u"]
            }).registerCommand("strikethrough", {
                exec: t
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.cleanHtml = void 0;
        var r = o(0),
            n = o(4),
            i = o(3),
            a = o(10),
            s = o(1),
            l = o(6);
        n.Config.prototype.cleanHTML = {
            timeout: 300,
            removeEmptyElements: !0,
            fillEmptyParagraph: !0,
            replaceNBSP: !0,
            replaceOldTags: {
                i: "em",
                b: "strong"
            },
            allowTags: !1,
            denyTags: !1
        }, n.Config.prototype.controls.eraser = {
            command: "removeFormat",
            tooltip: "Clear Formatting"
        };
        var c = function(e) {
            function t() {
                var o = null !== e && e.apply(this, arguments) || this;
                return o.onChange = function() {
                    if (o.allowEdit()) {
                        var e = o.j,
                            t = e.s.current(),
                            r = e.o.cleanHTML.replaceOldTags;
                        if (r && t) {
                            var n = Object.keys(r);
                            if (e.s.isCollapsed()) {
                                var i = a.Dom.closest(t, n, e.editor);
                                if (i) {
                                    var s = e.s.save(),
                                        l = r[i.nodeName.toLowerCase()] || r[i.nodeName];
                                    a.Dom.replace(i, l, e.createInside, !0, !1), e.s.restore(s)
                                }
                            }
                        }
                        var c = null;
                        e.editor.firstChild && (c = e.editor.firstChild);
                        var u = [],
                            d = o.checkNode(c, t, u);
                        u.forEach(a.Dom.safeRemove), (u.length || d) && e.events && e.e.fire("syncho")
                    }
                }, o.checkNode = function(e, t, r) {
                    var n = !1;
                    if (!e) return n;
                    if (o.isRemovableNode(e, t)) return r.push(e), o.checkNode(e.nextSibling, t, r);
                    if (o.j.o.cleanHTML.fillEmptyParagraph && a.Dom.isBlock(e, o.j.ew) && a.Dom.isEmpty(e, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                        var i = o.j.createInside.element("br");
                        e.appendChild(i), n = !0
                    }
                    var s = o.allowTagsHash;
                    if (s && !0 !== s[e.nodeName]) {
                        var l = e.attributes;
                        if (l && l.length) {
                            for (var c = [], u = 0; l.length > u; u += 1) {
                                var d = s[e.nodeName][l[u].name];
                                (!d || !0 !== d && d !== l[u].value) && c.push(l[u].name)
                            }
                            c.length && (n = !0), c.forEach((function(t) {
                                e.removeAttribute(t)
                            }))
                        }
                    }
                    return n = o.checkNode(e.firstChild, t, r) || n, o.checkNode(e.nextSibling, t, r) || n
                }, o.allowTagsHash = t.getHash(o.j.o.cleanHTML.allowTags), o.denyTagsHash = t.getHash(o.j.o.cleanHTML.denyTags), o.onKeyUpCleanUp = function() {
                    var e = o.j;
                    if (o.allowEdit()) {
                        var t = e.s.current();
                        if (t) {
                            var r = a.Dom.up(t, (function(t) {
                                return a.Dom.isBlock(t, e.ew)
                            }), e.editor);
                            r && a.Dom.all(r, (function(o) {
                                o && a.Dom.isText(o) && null !== o.nodeValue && i.INVISIBLE_SPACE_REG_EXP().test(o.nodeValue) && 0 !== o.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP(), "").length && (o.nodeValue = o.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP(), ""), o === t && e.s.isCollapsed() && e.s.setCursorAfter(o))
                            }))
                        }
                    }
                }, o.beforeCommand = function(e) {
                    if ("removeformat" === e.toLowerCase()) return o.onRemoveFormat(), !1
                }, o.cleanNode = function(e, t) {
                    switch (void 0 === t && (t = !1), e.nodeType) {
                        case Node.ELEMENT_NODE:
                            a.Dom.each(e, (function(e) {
                                o.cleanNode(e, t)
                            })), a.Dom.isTag(e, "font") ? a.Dom.unwrap(e) : t || (s.toArray(e.attributes).forEach((function(t) {
                                -1 === ["src", "href", "rel", "content"].indexOf(t.name.toLowerCase()) && e.removeAttribute(t.name)
                            })), s.normalizeNode(e));
                            break;
                        case Node.TEXT_NODE:
                            !t && o.j.o.cleanHTML.replaceNBSP && a.Dom.isText(e) && null !== e.nodeValue && e.nodeValue.match(i.SPACE_REG_EXP()) && (e.nodeValue = e.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP(), "").replace(i.SPACE_REG_EXP(), " "));
                            break;
                        default:
                            a.Dom.safeRemove(e)
                    }
                }, o
            }
            return r.__extends(t, e), t.prototype.afterInit = function(e) {
                e.e.off(".cleanHtml").on("change.cleanHtml afterSetMode.cleanHtml afterInit.cleanHtml mousedown.cleanHtml keydown.cleanHtml", e.async.debounce(this.onChange, e.o.cleanHTML.timeout)).on("keyup.cleanHtml", this.onKeyUpCleanUp).on("beforeCommand.cleanHtml", this.beforeCommand)
            }, t.prototype.allowEdit = function() {
                return !(this.j.isInDestruct || !this.j.isEditorMode() || this.j.getReadOnly())
            }, t.getHash = function(e) {
                var t = /([^[]*)\[([^\]]+)]/,
                    o = /[\s]*,[\s]*/,
                    r = /^(.*)[\s]*=[\s]*(.*)$/,
                    n = {};
                return s.isString(e) ? (e.split(o).map((function(e) {
                    e = s.trim(e);
                    var i = t.exec(e),
                        a = {};
                    if (i) {
                        var l = i[2].split(o);
                        i[1] && (l.forEach((function(e) {
                            e = s.trim(e);
                            var t = r.exec(e);
                            t ? a[t[1]] = t[2] : a[e] = !0
                        })), n[i[1].toUpperCase()] = a)
                    } else n[e.toUpperCase()] = !0
                })), n) : !!e && (Object.keys(e).forEach((function(t) {
                    n[t.toUpperCase()] = e[t]
                })), n)
            }, t.prototype.onRemoveFormat = function() {
                var e = this,
                    t = this.j.selection,
                    o = t.current();
                if (o) {
                    for (var r = function(t) {
                            return t && a.Dom.up(t, a.Dom.isInlineBlock, e.j.editor)
                        }, n = r(o), s = n; s;)(s = r(s.parentNode)) && (n = s);
                    var l = t.isCollapsed(),
                        c = t.range,
                        u = null;
                    if (l || (u = c.extractContents()), n) {
                        var d = this.j.createInside.text(i.INVISIBLE_SPACE);
                        c.insertNode(d);
                        var p = a.Dom.isOrContains(n, d, !0);
                        if (a.Dom.safeRemove(d), c.collapse(!0), p && n.parentNode && n.parentNode !== u) {
                            var f = this.j.s.splitSelection(n);
                            this.j.s.setCursorAfter(f || n), a.Dom.isEmpty(n) && a.Dom.safeRemove(n)
                        }
                    }
                    u && t.insertNode(this.cleanFragment(u))
                }
            }, t.prototype.cleanFragment = function(e) {
                var t = this;
                return a.Dom.each(e, (function(e) {
                    a.Dom.isElement(e) && i.IS_INLINE.test(e.nodeName) && (t.cleanFragment(e), a.Dom.unwrap(e))
                })), e
            }, t.prototype.isRemovableNode = function(e, o) {
                var r = this,
                    n = this.allowTagsHash;
                return !(a.Dom.isText(e) || !(n && !n[e.nodeName] || this.denyTagsHash && this.denyTagsHash[e.nodeName])) || !(!(o && a.Dom.isTag(e, "br") && t.hasNotEmptyTextSibling(e)) || t.hasNotEmptyTextSibling(e, !0) || a.Dom.up(e, (function(e) {
                    return a.Dom.isBlock(e, r.j.ew)
                }), this.j.editor) === a.Dom.up(o, (function(e) {
                    return a.Dom.isBlock(e, r.j.ew)
                }), this.j.editor)) || this.j.o.cleanHTML.removeEmptyElements && null !== o && a.Dom.isElement(e) && null !== e.nodeName.match(i.IS_INLINE) && !this.j.s.isMarker(e) && 0 === s.trim(e.innerHTML).length && !a.Dom.isOrContains(e, o)
            }, t.hasNotEmptyTextSibling = function(e, t) {
                void 0 === t && (t = !1);
                for (var o = t ? e.nextSibling : e.previousSibling; o;) {
                    if (a.Dom.isElement(o) || !a.Dom.isEmptyTextNode(o)) return !0;
                    o = t ? o.nextSibling : o.previousSibling
                }
                return !1
            }, t.prototype.beforeDestruct = function() {
                this.j.e.off(".cleanHtml")
            }, t
        }(l.Plugin);
        t.cleanHtml = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WrapTextNodes = void 0;
        var r = o(0),
            n = o(8),
            i = o(6),
            a = o(2),
            s = o(5),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSuitableStart = function(e) {
                        return a.Dom.isText(e) && s.isString(e.nodeValue) && /[^\s]/.test(e.nodeValue) || t.isNotClosed(e) && !t.jodit.selection.isMarker(e)
                    }, t.isSuitable = function(e) {
                        return a.Dom.isText(e) || t.isNotClosed(e)
                    }, t.isNotClosed = function(e) {
                        return a.Dom.isElement(e) && !(a.Dom.isBlock(e, t.jodit.ew) || a.Dom.isTag(e, ["hr"]))
                    }, t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    "br" !== e.o.enter.toLowerCase() && e.e.on("afterInit.wtn postProcessSetEditorValue.wtn", this.postProcessSetEditorValue)
                }, t.prototype.beforeDestruct = function(e) {
                    e.e.off(".wtn")
                }, t.prototype.postProcessSetEditorValue = function() {
                    var e = this.jodit;
                    if (e.isEditorMode()) {
                        for (var t = e.editor.firstChild, o = !1, r = null; t;) {
                            if (this.isSuitableStart(t)) {
                                o || (r = e.s.save()), o = !0;
                                var n = e.createInside.element(e.o.enter);
                                for (a.Dom.before(t, n); t && this.isSuitable(t);) {
                                    var i = t.nextSibling;
                                    n.appendChild(t), t = i
                                }
                                n.normalize()
                            }
                            t = t && t.nextSibling
                        }
                        o && (e.s.restore(r), "afterInit" === e.e.current && e.e.fire("internalChange"))
                    }
                }, r.__decorate([n.default], t.prototype, "postProcessSetEditorValue", null), t
            }(i.Plugin);
        t.WrapTextNodes = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        o(243), r.__exportStar(o(41), t), r.__exportStar(o(244), t), r.__exportStar(o(245), t), o(247)
    }, function(e, t, o) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            i = o(4),
            a = o(3),
            s = o(16),
            l = o(28),
            c = o(41);
        i.Config.prototype.askBeforePasteHTML = !0, i.Config.prototype.processPasteHTML = !0, i.Config.prototype.askBeforePasteFromWord = !0, i.Config.prototype.processPasteFromWord = !0, i.Config.prototype.nl2brInPlainText = !0, i.Config.prototype.defaultActionOnPaste = a.INSERT_AS_HTML, i.Config.prototype.defaultActionOnPasteFromWord = null, i.Config.prototype.draggableTags = ["img", "a", "jodit-media", "jodit"], i.Config.prototype.controls.cut = {
            command: "cut",
            isDisabled: function(e) {
                return e.s.isCollapsed()
            },
            tooltip: "Cut selection"
        }, i.Config.prototype.controls.copy = {
            command: "copy",
            isDisabled: function(e) {
                return e.s.isCollapsed()
            },
            tooltip: "Copy selection"
        };
        var u = "pasteStorage";
        i.Config.prototype.controls.paste = {
            tooltip: "Paste from clipboard",
            exec: function(e, t, o) {
                var r = o.control;
                return n.__awaiter(this, void 0, void 0, (function() {
                    var t, o, i, d, p;
                    return n.__generator(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (r.name === u) return e.execCommand("showPasteStorage"), [2];
                                if (e.s.focus(), t = "", o = !0, !navigator.clipboard) return [3, 11];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 6, , 7]), [4, navigator.clipboard.read()];
                            case 2:
                                return (i = n.sent()) && i.length ? [4, i[0].getType(a.TEXT_PLAIN)] : [3, 5];
                            case 3:
                                return d = n.sent(), [4, new Response(d).text()];
                            case 4:
                                t = n.sent(), n.label = 5;
                            case 5:
                                return o = !1, [3, 7];
                            case 6:
                                return n.sent(), [3, 7];
                            case 7:
                                if (!o) return [3, 11];
                                n.label = 8;
                            case 8:
                                return n.trys.push([8, 10, , 11]), [4, navigator.clipboard.readText()];
                            case 9:
                                return t = n.sent(), o = !1, [3, 11];
                            case 10:
                                return n.sent(), [3, 11];
                            case 11:
                                return o && (t = e.buffer.get(c.pluginKey) || "", o = 0 === t.length), p = e.value, o ? (e.ed.execCommand("paste"), !(o = p === e.value) && e.e.fire("afterPaste")) : t.length ? (l.pasteInsertHtml(null, e, t), e.e.fire("afterPaste")) : o && s.Alert(e.i18n("Your browser doesn't support direct access to the clipboard."), (function() {
                                    e.s.focus()
                                })).bindDestruct(e), [2]
                        }
                    }))
                }))
            },
            list: (r = {}, r[u] = "Paste Storage", r),
            isChildDisabled: function(e) {
                return 2 > e.e.fire("pasteStorageList")
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.paste = void 0;
        var r = o(0),
            n = o(8),
            i = o(6),
            a = o(28),
            s = o(3),
            l = o(1),
            c = o(41),
            u = o(2),
            d = o(16),
            p = o(15),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pasteStack = new l.LimitedStack(20), t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    var t = this;
                    e.e.on("paste.paste", this.onPaste).on("pasteStack.paste", (function(e) {
                        return t.pasteStack.push(e)
                    })), e.o.nl2brInPlainText && this.j.e.on("processPaste.paste", this.onProcessPasteReplaceNl2Br)
                }, t.prototype.onPaste = function(e) {
                    try {
                        if (!1 === this.j.e.fire("beforePaste", e) || !1 === this.customPasteProcess(e)) return e.preventDefault(), !1;
                        this.defaultPasteProcess(e)
                    } finally {
                        this.j.e.fire("afterPaste", e)
                    }
                }, t.prototype.customPasteProcess = function(e) {
                    if (this.j.o.processPasteHTML)
                        for (var t = a.getDataTransfer(e), o = 0, r = [null == t ? void 0 : t.getData(s.TEXT_HTML), null == t ? void 0 : t.getData(s.TEXT_PLAIN)]; r.length > o; o++) {
                            var n = r[o];
                            if (l.isHTML(n) && (this.processWordHTML(e, n) || this.processHTML(e, n))) return !1
                        }
                }, t.prototype.defaultPasteProcess = function(e) {
                    var t = a.getDataTransfer(e),
                        o = (null == t ? void 0 : t.getData(s.TEXT_HTML)) || (null == t ? void 0 : t.getData(s.TEXT_PLAIN));
                    if (t && o && "" !== l.trim(o)) {
                        var r = this.j.e.fire("processPaste", e, o, a.getAllTypes(t));
                        void 0 !== r && (o = r), (l.isString(o) || u.Dom.isNode(o, this.j.ew)) && this.insertByType(e, o, this.j.o.defaultActionOnPaste), e.preventDefault(), e.stopPropagation()
                    }
                }, t.prototype.processWordHTML = function(e, t) {
                    var o = this;
                    return !(!this.j.o.processPasteFromWord || !l.isHtmlFromWord(t) || (this.j.o.askBeforePasteFromWord ? this.askInsertTypeDialog("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "Word Paste Detected", (function(r) {
                        o.insertFromWordByType(e, t, r)
                    })) : this.insertFromWordByType(e, t, this.j.o.defaultActionOnPasteFromWord || this.j.o.defaultActionOnPaste), 0))
                }, t.prototype.processHTML = function(e, t) {
                    var o = this;
                    if (this.j.o.askBeforePasteHTML) {
                        var r = this.pasteStack.find((function(e) {
                            var t = e.html;
                            return t == t
                        }));
                        return r ? (this.insertByType(e, t, r.action || this.j.o.defaultActionOnPaste), !0) : (this.askInsertTypeDialog("Your code is similar to HTML. Keep as HTML?", "Paste as HTML", (function(r) {
                            o.insertByType(e, t, r)
                        }), "Insert as Text"), !0)
                    }
                    return !1
                }, t.prototype.insertFromWordByType = function(e, t, o) {
                    var r;
                    switch (o) {
                        case s.INSERT_AS_HTML:
                            if (t = l.applyStyles(t), this.j.o.beautifyHTML) {
                                var n = null === (r = this.j.events) || void 0 === r ? void 0 : r.fire("beautifyHTML", t);
                                l.isString(n) && (t = n)
                            }
                            break;
                        case s.INSERT_AS_TEXT:
                            t = l.cleanFromWord(t);
                            break;
                        case s.INSERT_ONLY_TEXT:
                            t = l.stripTags(l.cleanFromWord(t))
                    }
                    a.pasteInsertHtml(e, this.j, t)
                }, t.prototype.insertByType = function(e, t, o) {
                    if (this.pasteStack.push({
                            html: t,
                            action: o
                        }), l.isString(t)) switch (this.j.buffer.set(c.pluginKey, t), o) {
                        case s.INSERT_CLEAR_HTML:
                            t = l.cleanFromWord(t);
                            break;
                        case s.INSERT_ONLY_TEXT:
                            t = l.stripTags(t);
                            break;
                        case s.INSERT_AS_TEXT:
                            t = l.htmlspecialchars(t)
                    }
                    a.pasteInsertHtml(e, this.j, t)
                }, t.prototype.askInsertTypeDialog = function(e, t, o, r, n) {
                    var i, a, c, u;
                    if (void 0 === r && (r = "Clean"), void 0 === n && (n = "Insert only Text"), !1 !== (null === (a = null === (i = this.j) || void 0 === i ? void 0 : i.e) || void 0 === a ? void 0 : a.fire("beforeOpenPasteDialog", e, t, o, r, n))) {
                        var f = d.Confirm('<div style="word-break: normal; white-space: normal">' + this.j.i18n(e) + "</div>", this.j.i18n(t));
                        f.bindDestruct(this.j), l.markOwner(this.j, f.container);
                        var h = p.Button(this.j, {
                                text: "Keep",
                                name: "keep",
                                status: "primary",
                                tabIndex: 0
                            }),
                            m = p.Button(this.j, {
                                text: r,
                                tabIndex: 0
                            }),
                            v = p.Button(this.j, {
                                text: n,
                                tabIndex: 0
                            }),
                            g = p.Button(this.j, {
                                text: "Cancel",
                                tabIndex: 0
                            });
                        return h.onAction((function() {
                            f.close(), o && o(s.INSERT_AS_HTML)
                        })), m.onAction((function() {
                            f.close(), o && o(s.INSERT_AS_TEXT)
                        })), v.onAction((function() {
                            f.close(), o && o(s.INSERT_ONLY_TEXT)
                        })), g.onAction((function() {
                            f.close()
                        })), f.setFooter([h, m, n ? v : "", g]), h.focus(), null === (u = null === (c = this.j) || void 0 === c ? void 0 : c.e) || void 0 === u || u.fire("afterOpenPasteDialog", f, e, t, o, r, n), f
                    }
                }, t.prototype.onProcessPasteReplaceNl2Br = function(e, t, o) {
                    if (o === s.TEXT_PLAIN + ";" && !l.isHTML(t)) return l.nl2br(t)
                }, t.prototype.useFakeDivBox = function(e) {
                    var t = this,
                        o = this.j.c.div("", {
                            tabindex: -1,
                            contenteditable: !0,
                            style: {
                                left: -9999,
                                top: 0,
                                width: 0,
                                height: "100%",
                                lineHeight: "140%",
                                overflow: "hidden",
                                position: "fixed",
                                zIndex: 2147483647,
                                wordBreak: "break-all"
                            }
                        });
                    this.j.container.appendChild(o);
                    var r = this.j.s.save();
                    o.focus();
                    var n = 0,
                        i = function() {
                            u.Dom.safeRemove(o), t.j.selection && t.j.s.restore(r)
                        },
                        a = function() {
                            if (n += 1, o.childNodes && o.childNodes.length > 0) {
                                var r = o.innerHTML;
                                return i(), void t.processHTML(e, r)
                            }
                            5 > n ? t.j.async.setTimeout(a, 20) : i()
                        };
                    a()
                }, t.prototype.beforeDestruct = function(e) {
                    e.e.off("paste.paste", this.onPaste)
                }, r.__decorate([n.default], t.prototype, "onPaste", null), r.__decorate([n.default], t.prototype, "onProcessPasteReplaceNl2Br", null), t
            }(i.Plugin);
        t.paste = f
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pasteStorage = void 0;
        var r = o(0);
        o(246);
        var n = o(3),
            i = o(16),
            a = o(6),
            s = o(2),
            l = o(1),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentIndex = 0, t.list = [], t.container = null, t.listBox = null, t.previewBox = null, t.dialog = null, t.paste = function() {
                        if (t.j.s.focus(), t.j.s.insertHTML(t.list[t.currentIndex]), 0 !== t.currentIndex) {
                            var e = t.list[0];
                            t.list[0] = t.list[t.currentIndex], t.list[t.currentIndex] = e
                        }
                        t.dialog && t.dialog.close(), t.j.setEditorValue(), t.j.e.fire("afterPaste")
                    }, t.onKeyDown = function(e) {
                        var o = t.currentIndex; - 1 !== [n.KEY_UP, n.KEY_DOWN, n.KEY_ENTER].indexOf(e.key) && (e.key === n.KEY_UP && (0 === o ? o = t.list.length - 1 : o -= 1), e.key === n.KEY_DOWN && (o === t.list.length - 1 ? o = 0 : o += 1), e.key !== n.KEY_ENTER ? (o !== t.currentIndex && t.selectIndex(o), e.stopImmediatePropagation(), e.preventDefault()) : t.paste())
                    }, t.selectIndex = function(e) {
                        t.listBox && l.toArray(t.listBox.childNodes).forEach((function(o, r) {
                            o.classList.remove("jodit_active"), e === r && t.previewBox && (o.classList.add("jodit_active"), t.previewBox.innerHTML = t.list[e], o.focus())
                        })), t.currentIndex = e
                    }, t.showDialog = function() {
                        2 > t.list.length || (t.dialog || t.createDialog(), t.listBox && (t.listBox.innerHTML = ""), t.previewBox && (t.previewBox.innerHTML = ""), t.list.forEach((function(e, o) {
                            var r = t.j.c.element("a");
                            r.textContent = o + 1 + ". " + e.replace(n.SPACE_REG_EXP(), ""), t.j.e.on(r, "keydown", t.onKeyDown), l.attr(r, "href", "javascript:void(0)"), l.attr(r, "data-index", o.toString()), l.attr(r, "tab-index", "-1"), t.listBox && t.listBox.appendChild(r)
                        })), t.dialog && t.dialog.open(), t.j.async.setTimeout((function() {
                            t.selectIndex(0)
                        }), 100))
                    }, t
                }
                return r.__extends(t, e), t.prototype.createDialog = function() {
                    var e = this;
                    this.dialog = new i.Dialog({
                        language: this.j.o.language
                    });
                    var t = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit-button"><span>' + this.j.i18n("Paste") + "</span></a>");
                    this.j.e.on(t, "click", this.paste);
                    var o = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit-button"><span>' + this.j.i18n("Cancel") + "</span></a>");
                    this.j.e.on(o, "click", this.dialog.close), this.container = this.j.c.div(), this.container.classList.add("jodit-paste-storage"), this.listBox = this.j.c.div(), this.previewBox = this.j.c.div(), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setHeader(this.j.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([t, o]), this.j.e.on(this.listBox, "click dblclick", (function(t) {
                        var o = t.target;
                        return s.Dom.isTag(o, "a") && o.hasAttribute("data-index") && e.selectIndex(parseInt(l.attr(o, "-index") || "0", 10)), "dblclick" === t.type && e.paste(), !1
                    }))
                }, t.prototype.afterInit = function() {
                    var e = this;
                    this.j.e.off("afterCopy.paste-storage").on("pasteStorageList.paste-storage", (function() {
                        return e.list.length
                    })).on("afterCopy.paste-storage", (function(t) {
                        -1 !== e.list.indexOf(t) && e.list.splice(e.list.indexOf(t), 1), e.list.unshift(t), e.list.length > 5 && (e.list.length = 5)
                    })), this.j.registerCommand("showPasteStorage", {
                        exec: this.showDialog,
                        hotkeys: ["ctrl+shift+v", "cmd+shift+v"]
                    })
                }, t.prototype.beforeDestruct = function() {
                    this.dialog && this.dialog.destruct(), this.j.e.off(".paste-storage"), s.Dom.safeRemove(this.previewBox), s.Dom.safeRemove(this.listBox), s.Dom.safeRemove(this.container), this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.list = []
                }, t
            }(a.Plugin);
        t.pasteStorage = c
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(2),
            i = o(1),
            a = "copyformat",
            s = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"],
            l = function(e, t, o, r) {
                var n = i.css(o, t);
                return n === r[t] && (n = o.parentNode && o !== e.editor && o.parentNode !== e.editor ? l(e, t, o.parentNode, r) : void 0), n
            };
        r.Config.prototype.controls.copyformat = {
            exec: function(e, t, o) {
                var r = o.button;
                if (t) {
                    if (e.buffer.exists(a)) e.buffer.delete(a), e.e.off(e.editor, "mouseup.copyformat");
                    else {
                        var c = {},
                            u = n.Dom.up(t, (function(e) {
                                return e && !n.Dom.isText(e)
                            }), e.editor) || e.editor,
                            d = e.createInside.span();
                        e.editor.appendChild(d), s.forEach((function(e) {
                            c[e] = i.css(d, e)
                        })), d !== e.editor && n.Dom.safeRemove(d);
                        var p = function(e, t, o) {
                            var r = {};
                            return t && s.forEach((function(n) {
                                r[n] = l(e, n, t, o), n.match(/border(Style|Color)/) && !r.borderWidth && (r[n] = void 0)
                            })), r
                        }(e, u, c);
                        e.e.on(e.editor, "mouseup.copyformat", (function() {
                            e.buffer.delete(a);
                            var t = e.s.current();
                            t && (n.Dom.isTag(t, "img") ? i.css(t, p) : e.s.applyStyle(p)), e.e.off(e.editor, "mouseup.copyformat")
                        })), e.buffer.set(a, !0)
                    }
                    r.update()
                }
            },
            isActive: function(e) {
                return e.buffer.exists(a)
            },
            tooltip: "Paint format"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.color = void 0;
        var r = o(4),
            n = o(10),
            i = o(1),
            a = o(17);
        r.Config.prototype.controls.brush = {
            update: function(e) {
                var t = i.dataBind(e, "color"),
                    o = e.j,
                    r = function(t, r) {
                        r && r !== i.css(o.editor, t).toString() && (e.state.icon.fill = r)
                    };
                if (t) {
                    var a = i.dataBind(e, "color");
                    r("color" === a ? a : "background-color", t)
                } else {
                    var s = o.s.current();
                    if (s && !e.state.disabled) {
                        var l = n.Dom.closest(s, (function(e) {
                            return n.Dom.isBlock(e, o.ew) || e && n.Dom.isElement(e)
                        }), o.editor) || o.editor;
                        r("color", i.css(l, "color").toString()), r("background-color", i.css(l, "background-color").toString())
                    }
                    e.state.icon.fill = "", e.state.activated = !1
                }
            },
            popup: function(e, t, o, r, s) {
                var l = "",
                    c = "",
                    u = [],
                    d = null;
                return t && t !== e.editor && n.Dom.isNode(t, e.ew) && (n.Dom.isElement(t) && e.s.isCollapsed() && !n.Dom.isTag(t, ["br", "hr"]) && (d = t), n.Dom.up(t, (function(t) {
                    if (n.Dom.isHTMLElement(t, e.ew)) {
                        var o = i.css(t, "color", void 0, !0),
                            r = i.css(t, "background-color", void 0, !0);
                        if (o) return l = o.toString(), !0;
                        if (r) return c = r.toString(), !0
                    }
                }), e.editor)), u = [{
                    name: "Background",
                    content: a.ColorPickerWidget(e, (function(t) {
                        d ? d.style.backgroundColor = t : e.execCommand("background", !1, t), i.dataBind(s, "color", t), i.dataBind(s, "color-mode", "background"), r()
                    }), c)
                }, {
                    name: "Text",
                    content: a.ColorPickerWidget(e, (function(t) {
                        d ? d.style.color = t : e.execCommand("forecolor", !1, t), i.dataBind(s, "color", t), i.dataBind(s, "color-mode", "color"), r()
                    }), l)
                }], "background" !== e.o.colorPickerDefaultTab && (u = u.reverse()), a.TabsWidget(e, u, d)
            },
            exec: function(e, t, o) {
                var r = o.button,
                    a = i.dataBind(r, "color-mode"),
                    s = i.dataBind(r, "color");
                if (!a) return !1;
                if (t && t !== e.editor && n.Dom.isNode(t, e.ew) && n.Dom.isElement(t)) switch (a) {
                    case "color":
                        t.style.color = s;
                        break;
                    case "background":
                        t.style.backgroundColor = s
                } else e.execCommand("background" === a ? a : "forecolor", !1, s)
            },
            tooltip: "Fill color or set the text color"
        }, t.color = function(e) {
            var t = function(t, o, r) {
                var n = i.normalizeColor(r);
                switch (t) {
                    case "background":
                        e.s.applyStyle({
                            backgroundColor: n || ""
                        });
                        break;
                    case "forecolor":
                        e.s.applyStyle({
                            color: n || ""
                        })
                }
                return e.setEditorValue(), !1
            };
            e.registerCommand("forecolor", t).registerCommand("background", t)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragAndDrop = void 0;
        var r = o(0),
            n = o(3),
            i = o(2),
            a = o(1),
            s = o(6),
            l = o(28),
            c = o(11),
            u = function(e) {
                function t() {
                    var o = null !== e && e.apply(this, arguments) || this;
                    return o.isFragmentFromEditor = !1, o.isCopyMode = !1, o.startDragPoint = {
                        x: 0,
                        y: 0
                    }, o.draggable = null, o.bufferRange = null, o.onDragEnd = function() {
                        o.draggable && (i.Dom.safeRemove(o.draggable), o.draggable = null), o.isCopyMode = !1
                    }, o.onDrag = function(e) {
                        o.draggable && (o.draggable.parentNode || c.getContainer(o.j, t).appendChild(o.draggable), o.j.e.fire("hidePopup"), a.css(o.draggable, {
                            left: e.clientX + 20,
                            top: e.clientY + 20
                        }), o.j.s.insertCursorAtPoint(e.clientX, e.clientY), e.preventDefault(), e.stopPropagation())
                    }, o.onDrop = function(e) {
                        if (!e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) {
                            if (!o.isFragmentFromEditor && !o.draggable) return o.j.e.fire("paste", e), e.preventDefault(), e.stopPropagation(), !1;
                            var t = o.j.s.sel,
                                r = o.bufferRange || (t && t.rangeCount ? t.getRangeAt(0) : null),
                                n = null;
                            if (!o.draggable && r) n = o.isCopyMode ? r.cloneContents() : r.extractContents();
                            else if (o.draggable)
                                if (o.isCopyMode) {
                                    var s = "1" === a.attr(o.draggable, "-is-file") ? ["a", "href"] : ["img", "src"],
                                        l = s[0],
                                        c = s[1];
                                    (n = o.j.createInside.element(l)).setAttribute(c, a.attr(o.draggable, "data-src") || a.attr(o.draggable, "src") || ""), "a" === l && (n.textContent = a.attr(n, c) || "")
                                } else n = a.dataBind(o.draggable, "target");
                            else o.getText(e) && (n = o.j.createInside.fromHTML(o.getText(e)));
                            t && t.removeAllRanges(), o.j.s.insertCursorAtPoint(e.clientX, e.clientY), n && (o.j.s.insertNode(n, !1, !1), r && n.firstChild && n.lastChild && (r.setStartBefore(n.firstChild), r.setEndAfter(n.lastChild), o.j.s.selectRange(r), o.j.e.fire("synchro")), i.Dom.isTag(n, "img") && o.j.events && o.j.e.fire("afterInsertImage", n)), e.preventDefault(), e.stopPropagation()
                        }
                        o.isFragmentFromEditor = !1
                    }, o.onDragStart = function(e) {
                        var t = e.target;
                        if (o.onDragEnd(), o.isFragmentFromEditor = i.Dom.isOrContains(o.j.editor, t, !0), o.isCopyMode = !o.isFragmentFromEditor || a.ctrlKey(e), o.isFragmentFromEditor) {
                            var r = o.j.s.sel,
                                n = r && r.rangeCount ? r.getRangeAt(0) : null;
                            n && (o.bufferRange = n.cloneRange())
                        } else o.bufferRange = null;
                        o.startDragPoint.x = e.clientX, o.startDragPoint.y = e.clientY, i.Dom.isElement(t) && t.classList.contains("jodit-filebrowser__files-item") && (t = t.querySelector("img")), i.Dom.isTag(t, "img") && (o.draggable = t.cloneNode(!0), a.dataBind(o.draggable, "target", t), a.css(o.draggable, {
                            "z-index": 1e14,
                            "pointer-events": "none",
                            position: "fixed",
                            display: "inlin-block",
                            left: o.startDragPoint.x,
                            top: o.startDragPoint.y,
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }))
                    }, o.getText = function(e) {
                        var t = l.getDataTransfer(e);
                        return t ? t.getData(n.TEXT_HTML) || t.getData(n.TEXT_PLAIN) : null
                    }, o
                }
                return r.__extends(t, e), t.prototype.afterInit = function() {
                    this.j.e.off(window, ".DragAndDrop").off(".DragAndDrop").off([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart).on(window, "dragover.DragAndDrop", this.onDrag).on([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart).on("drop.DragAndDrop", this.onDrop).on(window, "dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop", this.onDragEnd)
                }, t.prototype.beforeDestruct = function() {
                    this.onDragEnd(), this.j.e.off(window, ".DragAndDrop").off(".DragAndDrop").off([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart)
                }, t
            }(s.Plugin);
        t.DragAndDrop = u
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DragAndDropElement = void 0;
        var r = o(0),
            n = o(1),
            i = o(6),
            a = o(2),
            s = o(11),
            l = function(e) {
                function t() {
                    var o = null !== e && e.apply(this, arguments) || this;
                    return o.dragList = [], o.isCopyMode = !1, o.draggable = null, o.wasMoved = !1, o.diffStep = 10, o.startX = 0, o.startY = 0, o.onDragStart = function(e) {
                        var t = e.target,
                            r = null;
                        if (o.dragList.length) {
                            do {
                                o.dragList.includes(t.nodeName.toLowerCase()) && (!r || t.firstChild === r && t.lastChild === r) && (r = t), t = t.parentNode
                            } while (t && t !== o.j.editor);
                            r && (o.startX = e.clientX, o.startY = e.clientY, o.isCopyMode = n.ctrlKey(e), o.onDragEnd(), o.draggable = r.cloneNode(!0), n.dataBind(o.draggable, "target", r), o.j.e.on(o.j.editor, "mousemove touchmove", o.onDrag))
                        }
                    }, o.onDrag = o.j.async.throttle((function(e) {
                        if (o.draggable) {
                            var r = e.clientY;
                            Math.sqrt(Math.pow(e.clientX - o.startX, 2) + Math.pow(r - o.startY, 2)) < o.diffStep || (o.wasMoved = !0, o.j.e.fire("hidePopup hideResizer"), o.draggable.parentNode || (n.css(o.draggable, {
                                zIndex: 1e13,
                                pointerEvents: "none",
                                position: "fixed",
                                display: "inline-block",
                                left: e.clientX,
                                top: e.clientY,
                                width: o.draggable.offsetWidth,
                                height: o.draggable.offsetHeight
                            }), s.getContainer(o.j, t).appendChild(o.draggable)), n.css(o.draggable, {
                                left: e.clientX,
                                top: e.clientY
                            }), o.j.s.insertCursorAtPoint(e.clientX, e.clientY))
                        }
                    }), o.j.defaultTimeout), o.onDragEnd = function() {
                        o.isInDestruct || o.draggable && (a.Dom.safeRemove(o.draggable), o.draggable = null, o.wasMoved = !1, o.j.e.off(o.j.editor, "mousemove touchmove", o.onDrag))
                    }, o.onDrop = function() {
                        if (o.draggable && o.wasMoved) {
                            var e = n.dataBind(o.draggable, "target");
                            o.onDragEnd(), o.isCopyMode && (e = e.cloneNode(!0));
                            var t = e.parentElement;
                            o.j.s.insertNode(e, !0, !1), t && a.Dom.isEmpty(t) && a.Dom.safeRemove(t), a.Dom.isTag(e, "img") && o.j.e && o.j.e.fire("afterInsertImage", e), o.j.e.fire("synchro")
                        } else o.onDragEnd()
                    }, o
                }
                return r.__extends(t, e), t.prototype.afterInit = function() {
                    this.dragList = this.j.o.draggableTags ? n.splitArray(this.j.o.draggableTags).filter((function(e) {
                        return e
                    })).map((function(e) {
                        return e.toLowerCase()
                    })) : [], this.dragList.length && this.j.e.on(this.j.editor, "mousedown touchstart dragstart", this.onDragStart).on("mouseup touchend", this.onDrop).on([this.j.ew, this.ow], "mouseup touchend", this.onDragEnd)
                }, t.prototype.beforeDestruct = function() {
                    this.onDragEnd(), this.j.e.off(this.j.editor, "mousemove touchmove", this.onDrag).off(this.j.editor, "mousedown touchstart dragstart", this.onDragStart).off("mouseup touchend", this.onDrop).off(window, "mouseup touchend", this.onDragEnd)
                }, t
            }(i.Plugin);
        t.DragAndDropElement = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.enter = t.insertParagraph = void 0;
        var r = o(0),
            n = o(3),
            i = o(2),
            a = o(1),
            s = o(6),
            l = o(3);
        t.insertParagraph = function(e, t, o, r) {
            var n, s = e.createInside.element(o),
                l = e.createInside.element("br");
            s.appendChild(l), r && r.cssText && s.setAttribute("style", r.cssText), e.s.insertNode(s, !1, !1), e.s.setCursorBefore(l);
            var c = e.s.createRange();
            return c.setStartBefore("br" !== o.toLowerCase() ? l : s), c.collapse(!0), e.s.selectRange(c), i.Dom.safeRemove(t), a.scrollIntoView(s, e.editor, e.ed), null === (n = e.events) || void 0 === n || n.fire("synchro"), s
        };
        var c = function(e) {
            function o() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.brMode = !1, t.defaultTag = n.PARAGRAPH, t
            }
            return r.__extends(o, e), o.prototype.afterInit = function(e) {
                var t = this;
                this.defaultTag = e.o.enter.toLowerCase(), this.brMode = this.defaultTag === n.BR.toLowerCase(), e.o.enterBlock || (e.o.enterBlock = this.brMode ? n.PARAGRAPH : this.defaultTag), e.e.off(".enter").on("keydown.enter", (function(o) {
                    if (o.key === n.KEY_ENTER) {
                        var r = e.e.fire("beforeEnter", o);
                        return void 0 !== r ? r : (e.s.isCollapsed() || e.execCommand("Delete"), e.s.focus(), t.onEnter(o), !1)
                    }
                }))
            }, o.prototype.onEnter = function(e) {
                var o = this.j,
                    r = o.selection,
                    n = this.defaultTag,
                    a = r.current(!1);
                a && a !== o.editor || (a = o.createInside.text(l.INVISIBLE_SPACE), r.insertNode(a), r.select(a));
                var s = this.getBlockWrapper(a),
                    c = i.Dom.isTag(s, "li");
                if (!c && !this.checkBR(a, e.shiftKey)) return !1;
                if (s || this.hasPreviousBlock(a) || (s = this.wrapText(a)), !s || s === a) return t.insertParagraph(o, null, c ? "li" : n), !1;
                if (!this.checkUnsplittableBox(s)) return !1;
                if (c && i.Dom.isEmpty(s)) return this.enterInsideEmptyLIelement(s), !1;
                var u, d = s.tagName.toLowerCase() === this.defaultTag || c,
                    p = r.cursorOnTheRight(s),
                    f = r.cursorOnTheLeft(s);
                if (!d && (p || f)) return u = p ? r.setCursorAfter(s) : r.setCursorBefore(s), t.insertParagraph(o, u, this.defaultTag), void(f && !p && r.setCursorIn(s, !0));
                r.splitSelection(s)
            }, o.prototype.getBlockWrapper = function(e, t) {
                void 0 === t && (t = n.IS_BLOCK);
                var o = e,
                    r = this.j.editor;
                do {
                    if (!o || o === r) break;
                    if (t.test(o.nodeName)) return i.Dom.isTag(o, "li") ? o : this.getBlockWrapper(o.parentNode, /^li$/i) || o;
                    o = o.parentNode
                } while (o && o !== r);
                return null
            }, o.prototype.checkBR = function(e, t) {
                var o = i.Dom.closest(e, ["pre", "blockquote"], this.j.editor);
                if (this.brMode || t && !o || !t && o) {
                    var r = this.j.createInside.element("br");
                    return this.j.s.insertNode(r, !0), a.scrollIntoView(r, this.j.editor, this.j.ed), !1
                }
                return !0
            }, o.prototype.wrapText = function(e) {
                var t = this,
                    o = e;
                i.Dom.up(o, (function(e) {
                    e && e.hasChildNodes() && e !== t.j.editor && (o = e)
                }), this.j.editor);
                var r = i.Dom.wrapInline(o, this.j.o.enter, this.j);
                if (i.Dom.isEmpty(r)) {
                    var n = this.j.createInside.element("br");
                    r.appendChild(n), this.j.s.setCursorBefore(n)
                }
                return r
            }, o.prototype.hasPreviousBlock = function(e) {
                var t = this.j;
                return Boolean(i.Dom.prev(e, (function(e) {
                    return i.Dom.isBlock(e, t.ew) || i.Dom.isImage(e, t.ew)
                }), t.editor))
            }, o.prototype.checkUnsplittableBox = function(e) {
                var t = this.j,
                    o = t.selection;
                if (!i.Dom.canSplitBlock(e, t.ew)) {
                    var r = t.createInside.element("br");
                    return o.insertNode(r, !1), o.setCursorAfter(r), !1
                }
                return !0
            }, o.prototype.enterInsideEmptyLIelement = function(e) {
                var o = null,
                    r = i.Dom.closest(e, ["ol", "ul"], this.j.editor);
                if (r) {
                    if (i.Dom.prev(e, (function(e) {
                            return i.Dom.isTag(e, "li")
                        }), r))
                        if (i.Dom.next(e, (function(e) {
                                return i.Dom.isTag(e, "li")
                            }), r)) {
                            var n = this.j.s.createRange();
                            n.setStartBefore(r), n.setEndAfter(e);
                            var s = n.extractContents();
                            r.parentNode && r.parentNode.insertBefore(s, r), o = this.j.s.setCursorBefore(r)
                        } else o = this.j.s.setCursorAfter(r);
                    else o = this.j.s.setCursorBefore(r);
                    i.Dom.safeRemove(e), t.insertParagraph(this.j, o, this.defaultTag), a.$$("li", r).length || i.Dom.safeRemove(r)
                }
            }, o.prototype.beforeDestruct = function(e) {
                e.e.off("keydown.enter")
            }, o
        }(s.Plugin);
        t.enter = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.errorMessages = void 0, o(253);
        var r = o(4),
            n = o(2),
            i = o(1);
        r.Config.prototype.showMessageErrors = !0, r.Config.prototype.showMessageErrorTime = 3e3, r.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = function(e) {
            if (e.o.showMessageErrors) {
                var t, o = e.c.div("jodit_error_box_for_messages"),
                    r = function() {
                        t = 5, i.toArray(o.childNodes).forEach((function(r) {
                            i.css(o, "bottom", t + "px"), t += r.offsetWidth + e.o.showMessageErrorOffsetPx
                        }))
                    };
                e.e.on("beforeDestruct", (function() {
                    n.Dom.safeRemove(o)
                })).on("errorMessage", (function(t, i, a) {
                    e.workplace.appendChild(o);
                    var s = e.c.div("active " + (i || ""), t);
                    o.appendChild(s), r(), e.async.setTimeout((function() {
                        s.classList.remove("active"), e.async.setTimeout((function() {
                            n.Dom.safeRemove(s), r()
                        }), 300)
                    }), a || e.o.showMessageErrorTime)
                }))
            }
        }
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.font = void 0;
        var r = o(0),
            n = o(4),
            i = o(2),
            a = o(1);
        n.Config.prototype.defaultFontSizePoints = "px", n.Config.prototype.controls.fontsize = {
            command: "fontSize",
            data: {
                cssRule: "font-size"
            },
            list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"],
            exec: function(e, t, o) {
                var r, n = o.control,
                    i = "button" + n.command,
                    s = n.args && n.args[0] || a.dataBind(e, i);
                if (a.isVoid(s)) return !1;
                a.dataBind(e, i, s), "fontsize" === (null === (r = n.command) || void 0 === r ? void 0 : r.toLowerCase()) && (s = "" + s + e.o.defaultFontSizePoints), e.execCommand(n.command, !1, s || void 0)
            },
            childTemplate: function(e, t, o) {
                return "" + o + e.o.defaultFontSizePoints
            },
            tooltip: "Font size",
            isChildActive: function(e, t) {
                var o, r, n = e.s.current(),
                    s = (null === (o = t.data) || void 0 === o ? void 0 : o.cssRule) || "font-size",
                    l = (null === (r = t.data) || void 0 === r ? void 0 : r.normalize) || function(t) {
                        return /pt$/i.test(t) && "pt" === e.o.defaultFontSizePoints ? t.replace(/pt$/i, "") : t
                    };
                if (n) {
                    var c = i.Dom.closest(n, (function(t) {
                            return i.Dom.isBlock(t, e.ew) || t && i.Dom.isElement(t)
                        }), e.editor) || e.editor,
                        u = a.css(c, s);
                    return Boolean(u && t.args && l(t.args[0].toString()) === l(u.toString()))
                }
                return !1
            }
        }, n.Config.prototype.controls.font = r.__assign(r.__assign({}, n.Config.prototype.controls.fontsize), {
            command: "fontname",
            list: {
                // Font List
                "": "Default",
                "Helvetica,sans-serif": "Helvetica",
                "Arial,Helvetica,sans-serif": "Arial",
                "Georgia,serif": "Georgia",
                "Impact,Charcoal,sans-serif": "Impact",
                "Tahoma,Geneva,sans-serif": "Tahoma",
                "'Times New Roman',Times,serif": "Times New Roman",
                "Verdana,Geneva,sans-serif": "Verdana"
            },
            childTemplate: function(e, t, o) {
                return '<span style="font-family: ' + t + '!important;">' + o + "</span>"
            },
            data: {
                cssRule: "font-family",
                normalize: function(e) {
                    return e.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",")
                }
            },
            tooltip: "Font family"
        }), t.font = function(e) {
            var t = function(t, o, r) {
                switch (t) {
                    case "fontsize":
                        e.s.applyStyle({
                            fontSize: a.normalizeSize(r)
                        });
                        break;
                    case "fontname":
                        e.s.applyStyle({
                            fontFamily: r
                        })
                }
                return e.e.fire("synchro"), !1
            };
            e.registerCommand("fontsize", t).registerCommand("fontname", t)
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatBlock = void 0;
        var r = o(4),
            n = o(10),
            i = o(1);
        r.Config.prototype.controls.paragraph = {
            command: "formatBlock",
            update: function(e) {
                var t = e.j,
                    o = e.control,
                    r = t.s.current();
                if (r && t.o.textIcons) {
                    var i = (n.Dom.closest(r, (function(e) {
                            return n.Dom.isBlock(e, t.ew)
                        }), t.editor) || t.editor).nodeName.toLowerCase(),
                        a = o.list;
                    e && o.data && o.data.currentValue !== i && a && a[i] && (t.o.textIcons ? e.state.text = i : e.state.icon.name = i, o.data.currentValue = i)
                }
                return !1
            },
            exec: function(e, t, o) {
                var r = o.control,
                    n = "button" + r.command,
                    a = r.args && r.args[0] || i.dataBind(e, n);
                if (i.isVoid(a)) return !1;
                i.dataBind(e, n, a), e.execCommand(r.command, !1, a || void 0)
            },
            data: {
                currentValue: "left"
            },
            list: {
                p: "Normal",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3",
                h4: "Heading 4",
                blockquote: "Quote"
            },
            isChildActive: function(e, t) {
                var o = e.s.current();
                if (o) {
                    var r = n.Dom.closest(o, (function(t) {
                        return n.Dom.isBlock(t, e.ew)
                    }), e.editor);
                    return Boolean(r && r !== e.editor && void 0 !== t.args && r.nodeName.toLowerCase() === t.args[0])
                }
                return !1
            },
            isActive: function(e, t) {
                var o = e.s.current();
                if (o) {
                    var r = n.Dom.closest(o, (function(t) {
                        return n.Dom.isBlock(t, e.ew)
                    }), e.editor);
                    return Boolean(r && r !== e.editor && void 0 !== t.list && !n.Dom.isTag(r, "p") && void 0 !== t.list[r.nodeName.toLowerCase()])
                }
                return !1
            },
            childTemplate: function(e, t, o) {
                return "<" + t + ' style="margin:0;padding:0"><span>' + e.i18n(o) + "</span></" + t + ">"
            },
            tooltip: "Insert format block"
        }, t.formatBlock = function(e) {
            e.registerCommand("formatblock", (function(t, o, r) {
                return e.s.applyStyle(void 0, {
                    element: r
                }), e.setEditorValue(), !1
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fullsize = void 0, o(257);
        var r = o(4),
            n = o(3),
            i = o(1);
        r.Config.prototype.fullsize = !1, r.Config.prototype.globalFullSize = !0, r.Config.prototype.controls.fullsize = {
            exec: function(e) {
                e.toggleFullSize()
            },
            update: function(e) {
                var t = e.j,
                    o = t.isFullSize ? "shrink" : "fullsize";
                e.state.activated = t.isFullSize, t.o.textIcons ? e.state.text = o : e.state.icon.name = o
            },
            tooltip: "Open editor in fullsize",
            mode: n.MODE_SOURCE + n.MODE_WYSIWYG
        }, t.fullsize = function(e) {
            var t = !1,
                o = 0,
                r = 0,
                n = !1,
                a = function() {
                    e.events && (t ? (o = i.css(e.container, "height", void 0, !0), r = i.css(e.container, "width", void 0, !0), i.css(e.container, {
                        // FullSize 진입
                        // Class 삽입이 아닌 그냥 Style을 컨트롤 하는 부분
                        // Style은 한번 설정되면 삭제가 안됨, 덮어쓰기만 가능
                        // 아예 입력안하도록 변경
                        height: e.ow.innerHeight,
                        //width: e.ow.innerWidth
                    }), n = !0) : n && i.css(e.container, {
                        // FullSize 에서 다시 되돌아올 시 
                        height: o || "auto",
                        //width: r || "auto"
                    }))
                },
                s = function(o) {
                    var r;
                    if (e.container) {
                        if (void 0 === o && (o = !e.container.classList.contains("jodit_fullsize")), e.o.fullsize = o, t = o, e.container.classList.toggle("jodit_fullsize", o), e.toolbar && (i.isJoditObject(e) && e.toolbarContainer.appendChild(e.toolbar.container), i.css(e.toolbar.container, "width", "auto")), e.o.globalFullSize) {
                            for (var n = e.container.parentNode; n && n.nodeType !== Node.DOCUMENT_NODE;) n.classList.toggle("jodit_fullsize-box_true", o), n = n.parentNode;
                            a()
                        }
                        null === (r = e.events) || void 0 === r || r.fire("afterResize")
                    }
                };
            e.o.globalFullSize && e.e.on(e.ow, "resize", a), e.e.on("afterInit afterOpen", (function() {
                var t;
                e.toggleFullSize(null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.fullsize)
            })).on("toggleFullSize", s).on("beforeDestruct beforeClose", (function() {
                s(!1)
            })).on("beforeDestruct", (function() {
                e.events && e.e.off(e.ow, "resize", a)
            }))
        }
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hotkeys = void 0;
        var r = o(0),
            n = o(4),
            i = o(6),
            a = o(1),
            s = o(3);
        n.Config.prototype.commandToHotkeys = {
            removeFormat: ["ctrl+shift+m", "cmd+shift+m"],
            insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"],
            insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"],
            selectall: ["ctrl+a", "cmd+a"]
        };
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onKeyPress = function(e) {
                    var o = t.specialKeys[e.which],
                        r = (e.key || String.fromCharCode(e.which)).toLowerCase(),
                        n = [o || r];
                    return ["alt", "ctrl", "shift", "meta"].forEach((function(t) {
                        e[t + "Key"] && o !== t && n.push(t)
                    })), a.normalizeKeyAliases(n.join("+"))
                }, t.specialKeys = {
                    8: "backspace",
                    9: "tab",
                    10: "return",
                    13: "return",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    19: "pause",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "insert",
                    46: "del",
                    59: ";",
                    61: "=",
                    91: "meta",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12",
                    144: "numlock",
                    145: "scroll",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, t
            }
            return r.__extends(t, e), t.prototype.afterInit = function(e) {
                var t = this;
                Object.keys(e.o.commandToHotkeys).forEach((function(t) {
                    var o = e.o.commandToHotkeys[t];
                    o && e.registerHotkeyToCommand(o, t)
                }));
                var o = !1;
                e.e.off(".hotkeys").on([e.ow, e.ew], "keydown.hotkeys", (function(e) {
                    if (e.key === s.KEY_ESC) return t.j.e.fire("escape", e)
                })).on("keydown.hotkeys", (function(r) {
                    var n = t.onKeyPress(r);
                    if (!1 === t.j.e.fire(n + ".hotkey", r.type)) return o = !0, e.e.stopPropagation("keydown"), !1
                }), void 0, !0).on("keyup.hotkeys", (function() {
                    if (o) return o = !1, e.e.stopPropagation("keyup"), !1
                }), void 0, !0)
            }, t.prototype.beforeDestruct = function(e) {
                e.events && e.e.off(".hotkeys")
            }, t
        }(i.Plugin);
        t.hotkeys = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.iframe = void 0;
        var r = o(4),
            n = o(1),
            i = o(1),
            a = o(3);
        r.Config.prototype.iframeBaseUrl = "", r.Config.prototype.iframeTitle = "Jodit Editor", r.Config.prototype.iframeDoctype = "<!DOCTYPE html>", r.Config.prototype.iframeDefaultSrc = "about:blank", r.Config.prototype.iframeStyle = 'html{margin:0;padding:0;min-height: 100%;}body{box-sizing:border-box;font-size:13px;line-height:1.6;padding:10px;margin:0;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:auto;outline:none;}table{width:100%;border:none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', r.Config.prototype.iframeCSSLinks = [], r.Config.prototype.editHTMLDocumentMode = !1, t.iframe = function(e) {
            var t = e.options;
            e.e.on("afterSetMode", (function() {
                e.isEditorMode() && e.s.focus()
            })).on("generateDocumentStructure.iframe", (function(e, o) {
                var r = e || o.iframe.contentWindow.document;
                if (r.open(), r.write(t.iframeDoctype + '<html dir="' + t.direction + '" class="jodit" lang="' + n.defaultLanguage(t.language) + '"><head><title>' + t.iframeTitle + "</title>" + (t.iframeBaseUrl ? '<base href="' + t.iframeBaseUrl + '"/>' : "") + '</head><body class="jodit-wysiwyg"></body></html>'), r.close(), t.iframeCSSLinks && t.iframeCSSLinks.forEach((function(e) {
                        var t = r.createElement("link");
                        t.setAttribute("rel", "stylesheet"), t.setAttribute("href", e), r.head && r.head.appendChild(t)
                    })), t.iframeStyle) {
                    var i = r.createElement("style");
                    i.innerHTML = t.iframeStyle, r.head && r.head.appendChild(i)
                }
            })).on("createEditor", (function() {
                if (t.iframe) {
                    var o = e.c.element("iframe");
                    o.style.display = "block", o.src = "about:blank", o.className = "jodit-wysiwyg_iframe", o.setAttribute("allowtransparency", "true"), o.setAttribute("tabindex", t.tabIndex.toString()), o.setAttribute("frameborder", "0"), e.workplace.appendChild(o), e.iframe = o;
                    var r = e.e.fire("generateDocumentStructure.iframe", null, e);
                    return n.callPromise(r, (function() {
                        if (e.iframe) {
                            var o = e.iframe.contentWindow.document;
                            e.editorWindow = e.iframe.contentWindow;
                            var r = function() {
                                    n.attr(o.body, "contenteditable", e.getMode() !== a.MODE_SOURCE && !e.getReadOnly() || null)
                                },
                                s = function(e) {
                                    var t = /<body.*<\/body>/im,
                                        o = "{%%BODY%%}",
                                        r = t.exec(e);
                                    return r && (e = e.replace(t, o).replace(/<span([^>]*?)>(.*?)<\/span>/gim, "").replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, "").replace(o, r[0].replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, "$1").replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, "$1").replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, "")).replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, "$1$2$3$5").replace(/(<[^<]+?)\sclass="[\s]*"/gim, "$1").replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, "$1").replace(/(<[^<]+?)\sdir="[\s]*"/gim, "$1")), e
                                };
                            if (t.editHTMLDocumentMode) {
                                var l = e.element.tagName;
                                if ("TEXTAREA" !== l && "INPUT" !== l) throw i.error("If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA");
                                e.e.on("beforeGetNativeEditorValue", (function() {
                                    return s(e.o.iframeDoctype + o.documentElement.outerHTML)
                                })).on("beforeSetNativeEditorValue", (function(t) {
                                    return !e.isLocked && (/<(html|body)/i.test(t) ? s(o.documentElement.outerHTML) !== s(t) && (o.open(), o.write(e.o.iframeDoctype + s(t)), o.close(), e.editor = o.body, r(), e.e.fire("prepareWYSIWYGEditor")) : o.body.innerHTML = t, !0)
                                }))
                            }
                            if (e.editor = o.body, e.e.on("afterSetMode afterInit afterAddPlace", r), "auto" === t.height) {
                                o.documentElement && (o.documentElement.style.overflowY = "hidden");
                                var c = e.async.throttle((function() {
                                    e.editor && e.iframe && "auto" === t.height && n.css(e.iframe, "height", e.editor.offsetHeight)
                                }), e.defaultTimeout / 2);
                                e.e.on("change afterInit afterSetMode resize", c).on([e.iframe, e.ew, o.documentElement], "load", c).on(o, "readystatechange DOMContentLoaded", c)
                            }
                            return o.documentElement && e.e.on(o.documentElement, "mousedown touchend", (function() {
                                e.s.isFocused() || (e.s.focus(), e.editor === o.body && e.s.setCursorIn(o.body))
                            })).on(e.ew, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", (function(t) {
                                var o;
                                null === (o = e.events) || void 0 === o || o.fire(e.ow, t)
                            })), !1
                        }
                    }))
                }
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(261), t), r.__exportStar(o(267), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.imageProperties = void 0;
        var r = o(0);
        o(262);
        var n = o(8),
            i = o(4),
            a = o(10),
            s = o(1),
            l = o(17),
            c = o(15),
            u = o(263),
            d = o(14);
        i.Config.prototype.image = {
            dialogWidth: 600,
            openOnDblClick: !0,
            editSrc: !0,
            useImageEditor: !0,
            editTitle: !0,
            editAlt: !0,
            editLink: !0,
            editSize: !0,
            editBorderRadius: !0,
            editMargins: !0,
            editClass: !0,
            editStyle: !0,
            editId: !0,
            editAlign: !0,
            showPreview: !0,
            selectImageAfterClose: !0
        };
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    image: new Image,
                    get ratio() {
                        return this.image.naturalWidth / this.image.naturalHeight || 1
                    },
                    sizeIsLocked: !0,
                    marginIsLocked: !0
                }, t
            }
            return r.__extends(t, e), t.prototype.onChangeMarginIsLocked = function() {
                var e = this;
                if (this.form) {
                    var t = s.refs(this.form),
                        o = t.lockMargin;
                    [t.marginRight, t.marginBottom, t.marginLeft].forEach((function(t) {
                        s.attr(t, "disabled", e.state.marginIsLocked || null)
                    })), o.innerHTML = a.Icon.get(this.state.marginIsLocked ? "lock" : "unlock")
                }
            }, t.prototype.open = function() {
                return this.makeForm(), this.j.e.fire("hidePopup"), s.markOwner(this.j, this.dialog.container), this.state.marginIsLocked = !0, this.state.sizeIsLocked = !0, this.updateValues(), this.dialog.open().setModal(!0).setPosition(), !1
            }, t.prototype.makeForm = function() {
                var e = this;
                if (!this.dialog) {
                    this.dialog = new a.Dialog({
                        fullsize: this.j.o.fullsize,
                        globalFullSize: this.j.o.globalFullSize,
                        language: this.j.o.language,
                        buttons: ["fullsize", "dialog.close"]
                    });
                    var t = this.j,
                        o = t.o,
                        r = t.i18n.bind(t),
                        n = {
                            check: c.Button(t, "ok", "Apply"),
                            remove: c.Button(t, "bin", "Delete")
                        };
                    t.e.on(this.dialog, "afterClose", (function() {
                        e.state.image.parentNode && o.image.selectImageAfterClose && t.s.select(e.state.image)
                    })), n.remove.onAction((function() {
                        t.s.removeNode(e.state.image), e.dialog.close()
                    }));
                    var i = this.dialog;
                    i.setHeader(r("Image properties"));
                    var d = u.form(t);
                    this.form = d, i.setContent(d);
                    var p = s.refs(this.form).tabsBox;
                    p && p.appendChild(l.TabsWidget(t, [{
                        name: "Image",
                        content: u.mainTab(t)
                    }, {
                        name: "Advanced",
                        content: u.positionTab(t)
                    }])), n.check.onAction(this.onApply);
                    var f = s.refs(this.form),
                        h = f.editImage;
                    t.e.on(f.changeImage, "click", this.openImagePopup), o.image.useImageEditor && t.e.on(h, "click", this.openImageEditor);
                    var m = s.refs(d),
                        v = m.lockSize,
                        g = m.lockMargin,
                        y = m.imageWidth,
                        b = m.imageHeight;
                    v && t.e.on(v, "click", (function() {
                        e.state.sizeIsLocked = !e.state.sizeIsLocked, v.innerHTML = a.Icon.get(e.state.sizeIsLocked ? "lock" : "unlock"), t.e.fire(y, "change")
                    })), t.e.on(g, "click", (function() {
                        e.state.marginIsLocked = !e.state.marginIsLocked
                    }));
                    var _ = function(t) {
                        var o = parseInt(y.value, 10),
                            r = parseInt(b.value, 10);
                        t.target === y ? b.value = Math.round(o / e.state.ratio).toString() : y.value = Math.round(r * e.state.ratio).toString()
                    };
                    t.e.on([y, b], "change keydown mousedown paste", (function(o) {
                        e.state.sizeIsLocked && t.async.setTimeout(_.bind(e, o), {
                            timeout: t.defaultTimeout,
                            label: "image-properties-changeSize"
                        })
                    })), i.setFooter([n.remove, n.check]), i.setSize(this.j.o.image.dialogWidth)
                }
            }, t.prototype.updateValues = function() {
                var e = this,
                    t = this.j.o,
                    o = this.state.image,
                    r = s.refs(this.form),
                    n = r.marginTop,
                    i = r.marginRight,
                    l = r.marginBottom,
                    c = r.marginLeft,
                    u = r.imageSrc,
                    d = r.id,
                    p = r.classes,
                    f = r.align,
                    h = r.style,
                    m = r.imageTitle,
                    v = r.imageAlt,
                    g = r.borderRadius,
                    y = r.imageLink,
                    b = r.imageWidth,
                    _ = r.imageHeight,
                    w = r.imageLinkOpenInNewTab,
                    S = r.imageViewSrc,
                    C = r.lockSize;
                r.lockMargin.checked = e.state.marginIsLocked, C.checked = e.state.sizeIsLocked, u.value = s.attr(o, "src") || "", S && s.attr(S, "src", s.attr(o, "src") || ""),
                    function() {
                        m.value = s.attr(o, "title") || "", v.value = s.attr(o, "alt") || "";
                        var t = a.Dom.closest(o, "a", e.j.editor);
                        t ? (y.value = s.attr(t, "href") || "", w.checked = "_blank" === s.attr(t, "target")) : (y.value = "", w.checked = !1)
                    }(), b.value = o.offsetWidth.toString(), _.value = o.offsetHeight.toString(),
                    function() {
                        if (t.image.editMargins) {
                            var r = !0,
                                a = !1;
                            [n, i, l, c].forEach((function(e) {
                                var t = s.attr(e, "data-ref") || "",
                                    i = o.style.getPropertyValue(s.kebabCase(t));
                                if (!i) return a = !0, void(e.value = "");
                                /^[0-9]+(px)?$/.test(i) && (i = parseInt(i, 10)), e.value = i.toString() || "", (a && e.value || r && "marginTop" !== t && e.value !== n.value) && (r = !1)
                            })), e.state.marginIsLocked = r
                        }
                    }(), p.value = (s.attr(o, "class") || "").replace(/jodit_focused_image[\s]*/, ""), d.value = s.attr(o, "id") || "", g.value = (parseInt(o.style.borderRadius || "0", 10) || "0").toString(), o.style.cssFloat && -1 !== ["left", "right"].indexOf(o.style.cssFloat.toLowerCase()) ? f.value = s.css(o, "float") : "block" === s.css(o, "display") && "auto" === o.style.marginLeft && "auto" === o.style.marginRight && (f.value = "center"), h.value = s.attr(o, "style") || ""
            }, t.prototype.onApply = function() {
                var e = s.refs(this.form),
                    t = e.imageSrc,
                    o = e.borderRadius,
                    r = e.imageTitle,
                    n = e.imageAlt,
                    i = e.imageLink,
                    l = e.imageWidth,
                    c = e.imageHeight,
                    u = e.marginTop,
                    d = e.marginRight,
                    p = e.marginBottom,
                    f = e.marginLeft,
                    h = e.imageLinkOpenInNewTab,
                    m = e.align,
                    v = e.classes,
                    g = e.id,
                    y = this.j.o,
                    b = this.state.image;
                if (y.image.editStyle && s.attr(b, "style", e.style.value || null), !t.value) return a.Dom.safeRemove(b), void this.dialog.close();
                s.attr(b, "src", t.value), b.style.borderRadius = "0" !== o.value && /^[0-9]+$/.test(o.value) ? o.value + "px" : "", s.attr(b, "title", r.value || null), s.attr(b, "alt", n.value || null);
                var _ = a.Dom.closest(b, "a", this.j.editor);
                i.value ? (_ || (_ = a.Dom.wrap(b, "a", this.j)), s.attr(_, "href", i.value), s.attr(_, "target", h.checked ? "_blank" : null)) : _ && _.parentNode && _.parentNode.replaceChild(b, _);
                var w = function(e) {
                    return e = s.trim(e), /^[0-9]+$/.test(e) ? e + "px" : e
                };
                l.value === b.offsetWidth.toString() && c.value === b.offsetHeight.toString() || s.css(b, {
                    width: s.trim(l.value) ? w(l.value) : null,
                    height: s.trim(c.value) ? w(c.value) : null
                });
                var S = [u, d, p, f];
                y.image.editMargins && (this.state.marginIsLocked ? s.css(b, "margin", w(u.value)) : S.forEach((function(e) {
                    var t = s.attr(e, "data-ref") || "";
                    s.css(b, t, w(e.value))
                }))), y.image.editClass && s.attr(b, "class", v.value || null), y.image.editId && s.attr(b, "id", g.value || null), y.image.editAlign && (m.value ? ["right", "left"].includes(m.value.toLowerCase()) ? (s.css(b, "float", m.value), s.clearCenterAlign(b)) : s.css(b, {
                    float: "",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                }) : (s.css(b, "float") && -1 !== ["right", "left"].indexOf(s.css(b, "float").toString().toLowerCase()) && s.css(b, "float", ""), s.clearCenterAlign(b))), this.j.setEditorValue(), this.dialog.close()
            }, t.prototype.openImageEditor = function() {
                var e = this,
                    t = s.attr(this.state.image, "src") || "",
                    o = this.j.c.element("a"),
                    r = function() {
                        o.host === location.host || a.Confirm(e.j.i18n("You can only edit your own images. Download this image on the host?"), (function(t) {
                            t && e.j.uploader && e.j.uploader.uploadRemoteImage(o.href.toString(), (function(t) {
                                a.Alert(e.j.i18n("The image has been successfully uploaded to the host!"), (function() {
                                    s.isString(t.newfilename) && (s.attr(e.state.image, "src", t.baseurl + t.newfilename), e.updateValues())
                                })).bindDestruct(e.j)
                            }), (function(t) {
                                a.Alert(e.j.i18n("There was an error loading %s", t.message)).bindDestruct(e.j)
                            }))
                        })).bindDestruct(e.j)
                    };
                o.href = t, this.j.filebrowser.dataProvider.getPathByUrl(o.href.toString(), (function(r, n, i) {
                    e.j.filebrowser.openImageEditor(o.href, n, r, i, (function() {
                        var o = (new Date).getTime();
                        s.attr(e.state.image, "src", t + (-1 !== t.indexOf("?") ? "" : "?") + "&_tmp=" + o.toString()), e.updateValues()
                    }), (function(t) {
                        a.Alert(t.message).bindDestruct(e.j)
                    }))
                }), (function(t) {
                    a.Alert(t.message, r).bindDestruct(e.j)
                }))
            }, t.prototype.openImagePopup = function(e) {
                var t = this,
                    o = new a.Popup(this.j),
                    r = s.refs(this.form).changeImage;
                o.setZIndex(this.dialog.getZIndex() + 1), o.setContent(l.FileSelectorWidget(this.j, {
                    upload: function(e) {
                        e.files && e.files.length && s.attr(t.state.image, "src", e.baseurl + e.files[0]), t.updateValues(), o.close()
                    },
                    filebrowser: function(e) {
                        e && s.isArray(e.files) && e.files.length && (s.attr(t.state.image, "src", e.files[0]), o.close(), t.updateValues())
                    }
                }, this.state.image, o.close)).open((function() {
                    return s.position(r)
                })), e.stopPropagation()
            }, t.prototype.afterInit = function(e) {
                var t = this,
                    o = this;
                e.e.on("afterConstructor changePlace", (function() {
                    e.e.off(e.editor, ".imageproperties").on(e.editor, "dblclick.imageproperties", (function(t) {
                        var r = t.target;
                        a.Dom.isTag(r, "img") && (e.o.image.openOnDblClick ? (o.state.image = r, e.o.readonly || (t.stopImmediatePropagation(), t.preventDefault(), o.open())) : (t.stopImmediatePropagation(), e.s.select(r)))
                    }))
                })).on("openImageProperties.imageproperties", (function(e) {
                    t.state.image = e, t.open()
                }))
            }, t.prototype.beforeDestruct = function(e) {
                this.dialog && this.dialog.destruct(), e.e.off(e.editor, ".imageproperties").off(".imageproperties")
            }, r.__decorate([d.watch("state.marginIsLocked")], t.prototype, "onChangeMarginIsLocked", null), r.__decorate([n.default], t.prototype, "onApply", null), r.__decorate([n.default], t.prototype, "openImageEditor", null), r.__decorate([n.default], t.prototype, "openImagePopup", null), t
        }(a.Plugin);
        t.imageProperties = p
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(264), t), r.__exportStar(o(265), t), r.__exportStar(o(266), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.form = void 0;
        var r = o(7);
        t.form = function(e) {
            var t = e.o.image,
                o = t.showPreview,
                n = t.editSize,
                i = r.Icon.get.bind(r.Icon);
            return e.c.fromHTML('<form class="jodit-properties">\n\t\t<div class="jodit-grid jodit-grid_xs-column">\n\t\t\t<div class="jodit_col-lg-2-5 jodit_col-xs-5-5">\n\t\t\t\t<div class="jodit-properties_view_box">\n\t\t\t\t\t<div style="' + (o ? "" : "display:none") + '" class="jodit-properties_image_view">\n\t\t\t\t\t\t<img data-ref="imageViewSrc" src="" alt=""/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style="' + (n ? "" : "display:none") + '" class="jodit-form__group jodit-properties_image_sizes">\n\t\t\t\t\t\t<input data-ref="imageWidth" type="number" class="jodit-input"/>\n\t\t\t\t\t\t<a data-ref="lockSize" class="jodit-properties__lock">' + i("lock") + '</a>\n\t\t\t\t\t\t<input data-ref="imageHeight" type="number" class="imageHeight jodit-input"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div data-ref="tabsBox" class="jodit_col-lg-3-5 jodit_col-xs-5-5"></div>\n\t\t</div>\n\t</form>')
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.mainTab = void 0;
        var r = o(7);
        t.mainTab = function(e) {
            var t = e.o,
                o = e.i18n.bind(e),
                n = r.Icon.get.bind(r.Icon),
                i = t.filebrowser.ajax.url || t.uploader.url,
                a = t.image.useImageEditor;
            return e.c.fromHTML('<div style="' + (t.image.editSrc ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Src") + '</label>\n\t\t\t<div class="jodit-input_group">\n\t\t\t\t<input data-ref="imageSrc" class="jodit-input" type="text"/>\n\t\t\t\t<div\n\t\t\t\t\tclass="jodit-input_group-buttons"\n\t\t\t\t\tstyle="' + (i ? "" : "display: none") + '"\n\t\t\t\t>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tdata-ref="changeImage"\n\t\t\t\t\t\t\tclass="jodit-button"\n\t\t\t\t\t\t>' + n("image") + '</a>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tdata-ref="editImage"\n\t\t\t\t\t\t\tclass="jodit-button"\n\t\t\t\t\t\t\tstyle="' + (a ? "" : "display: none") + '"\n\t\t\t\t\t\t>' + n("crop") + '</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style="' + (t.image.editTitle ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Title") + '</label>\n\t\t\t<input data-ref="imageTitle" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div style="' + (t.image.editAlt ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Alternative") + '</label>\n\t\t\t<input data-ref="imageAlt" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div style="' + (t.image.editLink ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Link") + '</label>\n\t\t\t<input data-ref="imageLink" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div style="' + (t.image.editLink ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label class="jodit_vertical_middle">\n\t\t\t\t<input data-ref="imageLinkOpenInNewTab" type="checkbox" class="jodit-checkbox"/>\n\t\t\t\t<span>' + o("Open link in new tab") + "</span>\n\t\t\t</label>\n\t\t</div>")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.positionTab = void 0;
        var r = o(7);
        t.positionTab = function(e) {
            var t = e.o,
                o = e.i18n.bind(e),
                n = r.Icon.get.bind(r.Icon);
            return e.c.fromHTML('<div style="' + (t.image.editMargins ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Margins") + '</label>\n\t\t\t<div class="jodit-grid jodit_vertical_middle">\n\t\t\t\t<input class="jodit_col-lg-1-5 jodit-input" data-ref="marginTop" type="text" placeholder="' + o("top") + '"/>\n\t\t\t\t<a style="text-align: center;" data-ref="lockMargin" class="jodit-properties__lock jodit_col-lg-1-5">' + n("lock") + '</a>\n\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginRight" type="text" placeholder="' + o("right") + '"/>\n\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginBottom" type="text" placeholder="' + o("bottom") + '"/>\n\t\t\t\t<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginLeft" type="text" placeholder="' + o("left") + '"/>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style="' + (t.image.editStyle ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Styles") + '</label>\n\t\t\t<input data-ref="style" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div style="' + (t.image.editClass ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>' + o("Classes") + '</label>\n\t\t\t<input data-ref="classes" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div style="' + (t.image.editId ? "" : "display:none") + '" class="jodit-form__group">\n\t\t\t<label>Id</label>\n\t\t\t<input data-ref="id" type="text" class="jodit-input"/>\n\t\t</div>\n\t\t<div\n\t\t\tstyle="' + (t.image.editBorderRadius ? "" : "display:none") + '"\n\t\t\tclass="jodit-form__group"\n\t\t>\n\t\t\t<label>' + o("Border radius") + '</label>\n\t\t\t\t<input data-ref="borderRadius" type="number" class="jodit-input"/>\n\t\t</div>\n\t\t<div\n\t\t\tstyle="' + (t.image.editAlign ? "" : "display:none") + '"\n\t\t\tclass="jodit-form__group"\n\t\t>\n\t\t\t<label>' + o("Align") + '</label>\n\t\t\t<select data-ref="align" class="jodit-select">\n\t\t\t\t<option value="">' + o("--Not Set--") + '</option>\n\t\t\t\t<option value="left">' + o("Left") + '</option>\n\t\t\t\t<option value="center">' + o("Center") + '</option>\n\t\t\t\t<option value="right">' + o("Right") + "</option>\n\t\t\t</select>\n\t\t</div>")
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.imageProcessor = void 0;
        var r = o(1);
        t.imageProcessor = function(e) {
            e.e.on("change afterInit changePlace", e.async.debounce((function() {
                e.editor && r.$$("img", e.editor).forEach((function(t) {
                    t.__jodit_imageprocessor_binded || (t.__jodit_imageprocessor_binded = !0, t.complete || t.addEventListener("load", (function o() {
                        var r;
                        !e.isInDestruct && (null === (r = e.e) || void 0 === r || r.fire("resize")), t.removeEventListener("load", o)
                    })), e.e.on(t, "mousedown touchstart", (function() {
                        e.s.select(t)
                    })))
                }))
            }), e.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.indent = void 0;
        var r = o(4),
            n = o(3),
            i = o(2),
            a = o(1);
        r.Config.prototype.controls.indent = {
            tooltip: "Increase Indent"
        };
        var s = function(e) {
            return "rtl" === e ? "marginRight" : "marginLeft"
        };
        r.Config.prototype.controls.outdent = {
            isDisabled: function(e) {
                var t = e.s.current();
                if (t) {
                    var o = i.Dom.closest(t, (function(t) {
                            return i.Dom.isBlock(t, e.ew)
                        }), e.editor),
                        r = s(e.o.direction);
                    if (o && o.style && o.style[r]) return 0 >= parseInt(o.style[r], 10)
                }
                return !0
            },
            tooltip: "Decrease Indent"
        }, r.Config.prototype.indentMargin = 10, t.indent = function(e) {
            var t = s(e.o.direction),
                o = function(o) {
                    var r = [];
                    return e.s.eachSelection((function(s) {
                        var l = e.s.save(),
                            c = !!s && i.Dom.up(s, (function(t) {
                                return i.Dom.isBlock(t, e.ew)
                            }), e.editor),
                            u = e.o.enter;
                        if (!c && s && (c = i.Dom.wrapInline(s, u !== n.BR ? u : n.PARAGRAPH, e)), !c) return e.s.restore(l), !1;
                        var d = -1 !== r.indexOf(c);
                        if (c && c.style && !d) {
                            r.push(c);
                            var p = c.style[t] ? parseInt(c.style[t], 10) : 0;
                            c.style[t] = (p += e.o.indentMargin * ("outdent" === o ? -1 : 1)) > 0 ? p + "px" : "", a.attr(c, "style") || c.removeAttribute("style")
                        }
                        e.s.restore(l)
                    })), e.setEditorValue(), !1
                };
            e.registerCommand("indent", {
                exec: o,
                hotkeys: ["ctrl+]", "cmd+]"]
            }), e.registerCommand("outdent", {
                exec: o,
                hotkeys: ["ctrl+[", "cmd+["]
            })
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(0).__exportStar(o(270), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hr = void 0;
        var r = o(4),
            n = o(2);
        r.Config.prototype.controls.hr = {
            command: "insertHorizontalRule",
            tags: ["hr"],
            tooltip: "Insert Horizontal Line"
        }, t.hr = function(e) {
            e.registerCommand("insertHorizontalRule", (function() {
                var t = e.createInside.element("hr");
                e.s.insertNode(t, !1, !1);
                var o = n.Dom.closest(t.parentElement, (function(t) {
                    return n.Dom.isBlock(t, e.ew)
                }), e.editor);
                o && n.Dom.isEmpty(o) && o !== e.editor && (n.Dom.after(o, t), n.Dom.safeRemove(o));
                var r = n.Dom.next(t, (function(t) {
                    return n.Dom.isBlock(t, e.ew)
                }), e.editor, !1);
                return r || (r = e.createInside.element(e.o.enter), n.Dom.after(t, r)), e.s.setCursorIn(r), !1
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.inlinePopup = void 0;
        var r = o(0);
        o(272), o(273);
        var n = o(8),
            i = o(6),
            a = o(18),
            s = o(24),
            l = o(1),
            c = o(10),
            u = o(14),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = null, t.popup = new s.Popup(t.jodit), t.toolbar = a.makeCollection(t.jodit, t.popup), t.snapRange = null, t
                }
                return r.__extends(t, e), t.prototype.onClick = function(e) {
                    var t = this,
                        o = e.target,
                        r = Object.keys(this.j.o.popup),
                        n = c.Dom.isTag(o, "img") ? o : c.Dom.closest(o, r, this.j.editor);
                    n && this.canShowPopupForType(n.nodeName.toLowerCase()) && this.showPopup((function() {
                        return l.position(n, t.j)
                    }), n.nodeName.toLowerCase(), n)
                }, t.prototype.showPopup = function(e, t, o) {
                    if (t = t.toLowerCase(), !this.canShowPopupForType(t)) return !1;
                    if (this.type !== t || o !== this.previousTarget) {
                        this.previousTarget = o;
                        var r = this.j.o.popup[t];
                        this.toolbar.buttonSize = this.j.o.toolbarButtonSize, this.toolbar.build(l.isFunction(r) ? r(this.j) : r, o), this.popup.setContent(this.toolbar.container), this.type = t
                    }
                    return this.popup.open(e), !0
                }, t.prototype.hidePopup = function() {
                    this.popup.close()
                }, t.prototype.canShowPopupForType = function(e) {
                    var t = this.j.o.popup[e.toLowerCase()];
                    return !(this.j.o.readonly || !this.j.o.toolbarInline || !t || this.isExcludedTarget(e))
                }, t.prototype.isExcludedTarget = function(e) {
                    return l.splitArray(this.j.o.toolbarInlineDisableFor).map((function(e) {
                        return e.toLowerCase()
                    })).includes(e.toLowerCase())
                }, t.prototype.afterInit = function(e) {
                    var t = this;
                    this.j.e.on("getDiffButtons.mobile", (function(o) {
                        if (t.toolbar === o) return l.splitArray(e.o.buttons).filter((function(e) {
                            var o = l.isString(e) ? e : e.name;
                            return o && "|" !== o && "\n" !== o && !t.toolbar.getButtonsNames().includes(o)
                        }))
                    })).on("hidePopup", this.hidePopup).on("showPopup", (function(e, o, r) {
                        t.showPopup(o, r || (l.isString(e) ? e : e.nodeName), l.isString(e) ? void 0 : e)
                    })).on("click", this.onClick).on("mousedown keydown", this.onSelectionStart).on([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd)
                }, t.prototype.onSelectionStart = function() {
                    this.snapRange = this.j.s.range.cloneRange()
                }, t.prototype.onSelectionEnd = function() {
                    var e = this.snapRange,
                        t = this.j.s.range;
                    e && !t.collapsed && t.startContainer === e.startContainer && t.startOffset === e.startOffset && t.endContainer === e.endContainer && t.endOffset === e.endOffset || this.onSelectionChange()
                }, t.prototype.onSelectionChange = function() {
                    if (this.j.o.toolbarInlineForSelection) {
                        var e = "selection",
                            t = this.j.s.sel,
                            o = this.j.s.range;
                        (null == t ? void 0 : t.isCollapsed) || this.isSelectedTarget(o) || this.tableModule.getAllSelectedCells().length ? this.type === e && this.popup.isOpened && this.hidePopup() : this.j.s.current() && this.showPopup((function() {
                            return o.getBoundingClientRect()
                        }), e)
                    }
                }, t.prototype.isSelectedTarget = function(e) {
                    var t = e.startContainer;
                    return c.Dom.isElement(t) && t === e.endContainer && c.Dom.isTag(t.childNodes[e.startOffset], Object.keys(this.j.o.popup)) && e.startOffset === e.endOffset - 1
                }, Object.defineProperty(t.prototype, "tableModule", {
                    get: function() {
                        return this.j.getInstance("Table", this.j.o)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.beforeDestruct = function(e) {
                    e.e.off("showPopup").off("click", this.onClick).off([this.j.ew, this.j.ow], "mouseup", this.onSelectionEnd)
                }, r.__decorate([n.default], t.prototype, "onClick", null), r.__decorate([u.wait((function(e) {
                    return !e.j.isLocked
                }))], t.prototype, "showPopup", null), r.__decorate([n.default], t.prototype, "hidePopup", null), r.__decorate([n.default], t.prototype, "onSelectionStart", null), r.__decorate([n.default], t.prototype, "onSelectionEnd", null), r.__decorate([u.debounce((function(e) {
                    return e.defaultTimeout
                }))], t.prototype, "onSelectionChange", null), t
            }(i.Plugin);
        t.inlinePopup = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4);
        r.Config.prototype.toolbarInline = !0, r.Config.prototype.toolbarInlineForSelection = !1, r.Config.prototype.toolbarInlineDisableFor = [], r.Config.prototype.popup = {
            a: o(274).default,
            img: o(275).default,
            cells: o(276).default,
            jodit: [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t && e.s.removeNode(t)
                }
            }],
            "jodit-media": [{
                name: "bin",
                tooltip: "Delete",
                exec: function(e, t) {
                    t && e.s.removeNode(t)
                }
            }],
            selection: ["bold", "underline", "italic", "ul", "ol", "\n", "outdent", "indent", "fontsize", "brush", "cut", "\n", "paragraph", "link", "align", "dots"]
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(12);
        t.default = [{
            name: "eye",
            tooltip: "Open link",
            exec: function(e, t) {
                var o = r.attr(t, "href");
                t && o && e.ow.open(o)
            }
        }, {
            name: "link",
            tooltip: "Edit link",
            icon: "pencil"
        }, "unlink", "brush", "file"]
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(2),
            n = o(5),
            i = o(1);
        t.default = [{
            name: "delete",
            icon: "bin",
            tooltip: "Delete",
            exec: function(e, t) {
                t && e.s.removeNode(t)
            }
        }, {
            name: "pencil",
            exec: function(e, t) {
                "img" === t.tagName.toLowerCase() && e.e.fire("openImageProperties", t)
            },
            tooltip: "Edit"
        }, {
            name: "valign",
            list: ["Top", "Middle", "Bottom", "Normal"],
            tooltip: "Vertical align",
            exec: function(e, t, o) {
                var a = o.control;
                if (r.Dom.isTag(t, "img")) {
                    var s = a.args && n.isString(a.args[0]) ? a.args[0].toLowerCase() : "";
                    if (!s) return !1;
                    i.css(t, "vertical-align", "normal" === s ? "" : s), e.e.fire("recalcPositionPopup")
                }
            }
        }, {
            name: "left",
            childTemplate: function(e, t, o) {
                return o
            },
            list: ["Left", "Right", "Center", "Normal"],
            exec: function(e, t, o) {
                var a = o.control;
                if (r.Dom.isTag(t, "img")) {
                    var s = a.args && n.isString(a.args[0]) ? a.args[0].toLowerCase() : "";
                    if (!s) return !1;
                    "normal" !== s ? -1 !== ["right", "left"].indexOf(s) ? (i.css(t, "float", s), i.clearCenterAlign(t)) : (i.css(t, "float", ""), i.css(t, {
                        display: "block",
                        "margin-left": "auto",
                        "margin-right": "auto"
                    })) : (i.css(t, "float") && -1 !== ["right", "left"].indexOf(i.css(t, "float").toLowerCase()) && i.css(t, "float", ""), i.clearCenterAlign(t)), e.setEditorValue(), e.e.fire("recalcPositionPopup")
                }
            },
            tooltip: "Horizontal align"
        }]
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(5),
            n = o(1),
            i = o(17),
            a = function(e) {
                return e.args && r.isString(e.args[0]) ? e.args[0].toLowerCase() : ""
            };
        t.default = [{
            name: "brush",
            popup: function(e) {
                if (r.isJoditObject(e)) {
                    var t = e.getInstance("Table", e.o).getAllSelectedCells();
                    if (!t.length) return !1;
                    var o = n.css(t[0], "color"),
                        a = n.css(t[0], "background-color"),
                        s = n.css(t[0], "border-color"),
                        l = i.ColorPickerWidget(e, (function(o) {
                            t.forEach((function(e) {
                                n.css(e, "background-color", o)
                            })), e.setEditorValue()
                        }), a),
                        c = i.ColorPickerWidget(e, (function(o) {
                            t.forEach((function(e) {
                                n.css(e, "color", o)
                            })), e.setEditorValue()
                        }), o),
                        u = i.ColorPickerWidget(e, (function(o) {
                            t.forEach((function(e) {
                                n.css(e, "border-color", o)
                            })), e.setEditorValue()
                        }), s);
                    return i.TabsWidget(e, [{
                        name: "Background",
                        content: l
                    }, {
                        name: "Text",
                        content: c
                    }, {
                        name: "Border",
                        content: u
                    }])
                }
            },
            tooltip: "Background"
        }, {
            name: "valign",
            list: ["Top", "Middle", "Bottom", "Normal"],
            childTemplate: function(e, t, o) {
                return o
            },
            exec: function(e, t, o) {
                var r = a(o.control);
                e.getInstance("Table", e.o).getAllSelectedCells().forEach((function(e) {
                    n.css(e, "vertical-align", "normal" === r ? "" : r)
                }))
            },
            tooltip: "Vertical align"
        }, {
            name: "splitv",
            list: {
                tablesplitv: "Split vertical",
                tablesplitg: "Split horizontal"
            },
            tooltip: "Split"
        }, {
            name: "align",
            icon: "left"
        }, "\n", {
            name: "merge",
            command: "tablemerge",
            tooltip: "Merge"
        }, {
            name: "addcolumn",
            list: {
                tableaddcolumnbefore: "Insert column before",
                tableaddcolumnafter: "Insert column after"
            },
            exec: function(e, t, o) {
                var n = o.control;
                if (r.isJoditObject(e)) {
                    var i = a(n);
                    e.execCommand(i, !1, t)
                }
            },
            tooltip: "Add column"
        }, {
            name: "addrow",
            list: {
                tableaddrowbefore: "Insert row above",
                tableaddrowafter: "Insert row below"
            },
            exec: function(e, t, o) {
                var n = o.control;
                if (r.isJoditObject(e)) {
                    var i = a(n);
                    e.execCommand(i, !1, t)
                }
            },
            tooltip: "Add row"
        }, {
            name: "delete",
            icon: "bin",
            list: {
                tablebin: "Delete table",
                tablebinrow: "Delete row",
                tablebincolumn: "Delete column",
                tableempty: "Empty cell"
            },
            exec: function(e, t, o) {
                var n = o.control;
                if (r.isJoditObject(e)) {
                    var i = a(n);
                    e.execCommand(i, !1, t), e.e.fire("hidePopup")
                }
            },
            tooltip: "Delete"
        }]
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.limit = void 0;
        var r = o(0),
            n = o(8),
            i = o(4),
            a = o(6),
            s = o(3),
            l = o(1);
        i.Config.prototype.limitWords = !1, i.Config.prototype.limitChars = !1, i.Config.prototype.limitHTML = !1;
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.afterInit = function(e) {
                var t = this,
                    o = e.o;
                if (e && (o.limitWords || o.limitChars)) {
                    var r = null;
                    e.e.off(".limit").on("beforePaste.limit", (function() {
                        r = e.observer.snapshot.make()
                    })).on("keydown.limit keyup.limit beforeEnter.limit beforePaste.limit", this.checkPreventKeyPressOrPaste).on("change.limit", this.checkPreventChanging).on("afterPaste.limit", (function() {
                        if (t.shouldPreventInsertHTML() && r) return e.observer.snapshot.restore(r), !1
                    }))
                }
            }, t.prototype.shouldPreventInsertHTML = function(e, t) {
                if (void 0 === e && (e = null), void 0 === t && (t = ""), e && s.COMMAND_KEYS.includes(e.key)) return !1;
                var o = this.jodit,
                    r = o.o,
                    n = r.limitWords,
                    i = r.limitChars,
                    a = this.splitWords(t || (o.o.limitHTML ? o.value : o.text));
                return !(!n || n > a.length) || Boolean(i) && a.join("").length >= i
            }, t.prototype.checkPreventKeyPressOrPaste = function(e) {
                if (this.shouldPreventInsertHTML(e)) return !1
            }, t.prototype.checkPreventChanging = function(e, t) {
                var o = this.jodit,
                    r = o.o,
                    n = r.limitWords,
                    i = r.limitChars,
                    a = o.o.limitHTML ? e : l.stripTags(e),
                    s = this.splitWords(a);
                (n && s.length > n || Boolean(i) && s.join("").length > i) && (o.value = t)
            }, t.prototype.splitWords = function(e) {
                return e.replace(s.INVISIBLE_SPACE_REG_EXP(), "").split(s.SPACE_REG_EXP()).filter((function(e) {
                    return e.length
                }))
            }, t.prototype.beforeDestruct = function(e) {
                e.e.off(".limit")
            }, r.__decorate([n.default], t.prototype, "checkPreventKeyPressOrPaste", null), r.__decorate([n.default], t.prototype, "checkPreventChanging", null), t
        }(a.Plugin);
        t.limit = c
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.link = void 0;
        var r = o(4),
            n = o(2),
            i = o(1),
            a = o(279);
        r.Config.prototype.link = {
            formTemplate: a.formTemplate,
            followOnDblClick: !1,
            processVideoLink: !0,
            processPastedLink: !0,
            removeLinkAfterFormat: !0,
            noFollowCheckbox: !0,
            openInNewTabCheckbox: !0
        }, r.Config.prototype.controls.unlink = {
            exec: function(e, t) {
                var o = n.Dom.closest(t, "a", e.editor);
                o && n.Dom.unwrap(o), e.setEditorValue(), e.e.fire("hidePopup")
            },
            tooltip: "Unlink"
        }, r.Config.prototype.controls.link = {
            isActive: function(e) {
                var t = e.s.current();
                return Boolean(t && n.Dom.closest(t, "a", e.editor))
            },
            popup: function(e, t, o, r) {
                var a, s = e.i18n.bind(e),
                    l = e.o.link,
                    c = l.openInNewTabCheckbox,
                    u = l.noFollowCheckbox,
                    d = l.formClassName,
                    p = (0, l.formTemplate)(e),
                    f = i.isString(p) ? e.c.fromHTML(p, {
                        target_checkbox_box: c,
                        nofollow_checkbox_box: u
                    }) : p,
                    h = n.Dom.isElement(f) ? f : f.container,
                    m = i.refs(h),
                    v = m.insert,
                    g = m.unlink,
                    y = m.content_input_box,
                    b = m.target_checkbox,
                    _ = m.nofollow_checkbox,
                    w = m.url_input,
                    S = n.Dom.isImage(t, e.ew),
                    C = m.content_input;
                C || (C = e.c.element("input", {
                    type: "hidden",
                    ref: "content_input"
                })), d && h.classList.add(d), S && n.Dom.hide(y);
                var j = function() {
                    return a ? a.innerText : i.stripTags(e.s.range.cloneContents(), e.ed)
                };
                a = !(!t || !n.Dom.closest(t, "a", e.editor)) && n.Dom.closest(t, "a", e.editor), !S && t && (C.value = j()), a ? (w.value = i.attr(a, "href") || "", c && b && (b.checked = "_blank" === i.attr(a, "target")), u && _ && (_.checked = "nofollow" === i.attr(a, "rel")), v.textContent = s("Update")) : n.Dom.hide(g);
                var k = e.observer.snapshot.make();
                g && e.e.on(g, "click", (function(t) {
                    e.observer.snapshot.restore(k), a && n.Dom.unwrap(a), e.setEditorValue(), r(), t.preventDefault()
                }));
                var E = function() {
                    if (!w.value.trim().length) return w.focus(), w.classList.add("jodit_error"), !1;
                    var t;
                    e.observer.snapshot.restore(k);
                    var o = j() !== C.value.trim();
                    if (a) t = [a];
                    else if (e.s.isCollapsed()) {
                        var n = e.createInside.element("a");
                        e.s.insertNode(n), t = [n]
                    } else t = e.s.wrapInTag("a");
                    return t.forEach((function(e) {
                        e.setAttribute("href", w.value), S || (C.value.trim().length ? o && (e.textContent = C.value) : e.textContent = w.value), c && b && (b.checked ? e.setAttribute("target", "_blank") : e.removeAttribute("target")), u && _ && (_.checked ? e.setAttribute("rel", "nofollow") : e.removeAttribute("rel"))
                    })), e.setEditorValue(), r(), !1
                };
                return n.Dom.isElement(f) ? e.e.on(f, "submit", (function(e) {
                    return e.preventDefault(), e.stopImmediatePropagation(), E(), !1
                })) : f.onSubmit(E), f
            },
            tags: ["a"],
            tooltip: "Insert link"
        }, t.link = function(e) {
            e.o.link.followOnDblClick && e.e.on("afterInit changePlace", (function() {
                e.e.off("dblclick.link").on(e.editor, "dblclick.link", (function(e) {
                    if (n.Dom.isTag(e.target, "a")) {
                        var t = i.attr(e.target, "href");
                        t && (location.href = t, e.preventDefault())
                    }
                }))
            })), e.o.link.processPastedLink && e.e.on("processPaste.link", (function(t, o) {
                if (i.isURL(o)) {
                    if (e.o.link.processVideoLink) {
                        var r = i.convertMediaUrlToVideoEmbed(o);
                        if (r !== o) return e.createInside.fromHTML(r)
                    }
                    var n = e.createInside.element("a");
                    return n.setAttribute("href", o), n.textContent = o, n
                }
            })), e.o.link.removeLinkAfterFormat && e.e.on("afterCommand.link", (function(t) {
                var o, r;
                "removeFormat" === t && ((r = e.selection.current()) && !n.Dom.isTag(r, "a") && (r = n.Dom.closest(r, "a", e.editor)), n.Dom.isTag(r, "a") && (r.innerHTML === r.textContent ? o = e.createInside.text(r.innerHTML) : (o = e.createInside.element("span")).innerHTML = r.innerHTML, r.parentNode && (r.parentNode.replaceChild(o, r), e.s.setCursorIn(o, !0))))
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formTemplate = void 0;
        var r = o(36),
            n = o(15);
        t.formTemplate = function(e) {
            var t = e.o.link,
                o = t.openInNewTabCheckbox,
                i = t.noFollowCheckbox;
            return new r.UIForm(e, [new r.UIBlock(e, [new r.UIInput(e, {
                name: "url",
                type: "url",
                ref: "url_input",
                label: "URL",
                placeholder: "http://",
                required: !0
            })]), new r.UIBlock(e, [new r.UIInput(e, {
                name: "content",
                ref: "content_input",
                label: "Text"
            })], {
                ref: "content_input_box"
            }), o ? new r.UICheckbox(e, {
                name: "target",
                ref: "target_checkbox",
                label: "Open in new tab"
            }) : null, i ? new r.UICheckbox(e, {
                name: "nofollow",
                ref: "nofollow_checkbox",
                label: "No follow"
            }) : null, new r.UIBlock(e, [new n.UIButton(e, {
                name: "unlink",
                status: "default",
                text: "Unlink"
            }), new n.UIButton(e, {
                name: "insert",
                type: "submit",
                status: "primary",
                text: "Insert"
            })], {
                align: "full"
            })])
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.media = void 0;
        var r = o(4),
            n = o(3),
            i = o(1);
        r.Config.prototype.mediaFakeTag = "jodit-media", r.Config.prototype.mediaInFakeBlock = !0, r.Config.prototype.mediaBlocks = ["video", "audio"], t.media = function(e) {
            var t = "jodit_fake_wrapper",
                o = e.options,
                r = o.mediaFakeTag,
                a = o.mediaBlocks;
            o.mediaInFakeBlock && e.e.on("afterGetValueFromEditor", (function(e) {
                var o = new RegExp("<" + r + "[^>]+data-" + t + "[^>]+>(.+?)</" + r + ">", "ig");
                o.test(e.value) && (e.value = e.value.replace(o, "$1"))
            })).on("change afterInit afterSetMode changePlace", e.async.debounce((function() {
                e.isDestructed || e.getMode() === n.MODE_SOURCE || i.$$(a.join(","), e.editor).forEach((function(o) {
                    o["__" + t] || (o["__" + t] = !0, function(o) {
                        if (o.parentNode && i.attr(o.parentNode, "data-jodit_iframe_wrapper")) o = o.parentNode;
                        else {
                            var n = e.createInside.fromHTML("<" + r + ' data-jodit-temp="1" contenteditable="false" draggable="true" data-' + t + '="1"></' + r + ">");
                            n.style.display = "inline-block" === o.style.display ? "inline-block" : "block", n.style.width = o.offsetWidth + "px", n.style.height = o.offsetHeight + "px", o.parentNode && o.parentNode.insertBefore(n, o), n.appendChild(o), o = n
                        }
                        e.e.off(o, "mousedown.select touchstart.select").on(o, "mousedown.select touchstart.select", (function() {
                            e.s.setCursorAfter(o)
                        }))
                    }(o))
                }))
            }), e.defaultTimeout))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.mobile = void 0;
        var r = o(4),
            n = o(3),
            i = o(1),
            a = o(18),
            s = o(7);
        r.Config.prototype.mobileTapTimeout = 300, r.Config.prototype.toolbarAdaptive = !0, r.Config.prototype.controls.dots = {
            mode: n.MODE_SOURCE + n.MODE_WYSIWYG,
            popup: function(e, t, o, r, n) {
                var l = o.data;
                return void 0 === l && (l = {
                    toolbar: a.makeCollection(e),
                    rebuild: function() {
                        var t;
                        if (n) {
                            var o = e.e.fire("getDiffButtons.mobile", n.closest(s.UIList));
                            if (o && l) {
                                l.toolbar.build(i.splitArray(o));
                                var r = (null === (t = e.toolbar.firstButton) || void 0 === t ? void 0 : t.container.offsetWidth) || 36;
                                l.toolbar.container.style.width = 3 * (r + 4) + "px"
                            }
                        }
                    }
                }, o.data = l), l.rebuild(), l.toolbar
            },
            tooltip: "Show all"
        }, t.mobile = function(e) {
            var t = 0,
                o = i.splitArray(e.o.buttons);
            e.e.on("touchend", (function(o) {
                if (o.changedTouches && o.changedTouches.length) {
                    var r = (new Date).getTime();
                    r - t > e.o.mobileTapTimeout && (t = r, e.s.insertCursorAtPoint(o.changedTouches[0].clientX, o.changedTouches[0].clientY))
                }
            })).on("getDiffButtons.mobile", (function(t) {
                if (t === e.toolbar) return i.splitArray(e.o.buttons).filter((function(e) {
                    return !o.includes(e)
                }))
            })), e.o.toolbarAdaptive && e.e.on("resize afterInit recalcAdaptive changePlace afterAddPlace", (function() {
                if (e.o.toolbar) {
                    var t = e.container.offsetWidth,
                        r = i.splitArray(e.o.sizeLG > t ? e.o.sizeMD > t ? e.o.sizeSM > t ? e.o.buttonsXS : e.o.buttonsSM : e.o.buttonsMD : e.o.buttons);
                    r.toString() !== o.toString() && (o = r, e.e.fire("closeAllPopups"), e.toolbar.setRemoveButtons(e.o.removeButtons).build(o.concat(e.o.extraButtons)))
                }
            })).on(e.ow, "load", (function() {
                return e.e.fire("recalcAdaptive")
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.orderedList = void 0;
        var r = o(4),
            n = o(2),
            i = o(1),
            a = function(e, t, o) {
                var r = o.control,
                    n = "button" + r.command,
                    a = r.args && r.args[0] || i.dataBind(e, n);
                i.dataBind(e, n, a), e.execCommand(r.command, !1, a)
            };
        r.Config.prototype.controls.ul = {
            command: "insertUnorderedList",
            tags: ["ul"],
            tooltip: "Insert Unordered List",
            list: {
                default: "Default",
                circle: "Circle",
                disc: "Dot",
                square: "Quadrate"
            },
            exec: a
        }, r.Config.prototype.controls.ol = {
            command: "insertOrderedList",
            tags: ["ol"],
            tooltip: "Insert Ordered List",
            list: {
                default: "Default",
                "lower-alpha": "Lower Alpha",
                "lower-greek": "Lower Greek",
                "lower-roman": "Lower Roman",
                "upper-alpha": "Upper Alpha",
                "upper-roman": "Upper Roman"
            },
            exec: a
        }, t.orderedList = function(e) {
            var t = function(e) {
                    return /insert(un)?orderedlist/i.test(e)
                },
                o = function() {
                    return n.Dom.up(e.s.current(), (function(e) {
                        return e && /^UL|OL$/i.test(e.nodeName)
                    }), e.editor)
                },
                r = function(e, t) {
                    "default" !== t && t ? e.style.setProperty("list-style-type", t) : e.style.removeProperty("list-style-type")
                };
            e.e.on("beforeCommand", (function(e, i, a) {
                if (t(e) && a) {
                    var s = o();
                    if (s && ! function(e, t) {
                            var o = e.style.listStyleType;
                            return o === t || !o && "default" === t
                        }(s, a) && (n.Dom.isTag(s, "ul") && /unordered/i.test(e) || n.Dom.isTag(s, "ol") && !/unordered/i.test(e))) return r(s, a), !1
                }
            })).on("afterCommand", (function(a, s, l) {
                if (t(a)) {
                    var c = o();
                    if (c && r(c, l), c && n.Dom.isTag(c.parentNode, "p")) {
                        var u = e.s.save();
                        n.Dom.unwrap(c.parentNode), i.toArray(c.childNodes).forEach((function(e) {
                            n.Dom.isTag(e.lastChild, "br") && n.Dom.safeRemove(e.lastChild)
                        })), e.s.restore(u)
                    }
                    e.setEditorValue()
                }
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholder = void 0;
        var r = o(0);
        o(284);
        var n = o(4),
            i = o(3),
            a = o(1),
            s = o(2),
            l = o(6),
            c = o(3),
            u = o(14);
        n.Config.prototype.showPlaceholder = !0, n.Config.prototype.useInputsPlaceholder = !0, n.Config.prototype.placeholder = "Type something";
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.addNativeListeners = function() {
                    t.j.e.off(t.j.editor, "input.placeholder keydown.placeholder").on(t.j.editor, "input.placeholder keydown.placeholder", t.toggle)
                }, t.addEvents = function() {
                    var e = t.j;
                    e.o.useInputsPlaceholder && e.element.hasAttribute("placeholder") && (t.placeholderElm.innerHTML = a.attr(e.element, "placeholder") || ""), e.e.fire("placeholder", t.placeholderElm.innerHTML), e.e.off(".placeholder").on("changePlace.placeholder", t.addNativeListeners).on("change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder mousedown.placeholder afterSetMode.placeholder changePlace.placeholder", t.toggle).on(window, "load", t.toggle), t.addNativeListeners(), t.toggle()
                }, t
            }
            return r.__extends(t, e), t.prototype.afterInit = function(e) {
                var t = this;
                e.o.showPlaceholder && (this.placeholderElm = e.c.fromHTML('<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">' + e.i18n(e.o.placeholder) + "</span>"), "rtl" === e.o.direction && (this.placeholderElm.style.right = "0px", this.placeholderElm.style.direction = "rtl"), e.e.on("readonly", (function(e) {
                    e ? t.hide() : t.toggle()
                })).on("changePlace", this.addEvents), this.addEvents())
            }, t.prototype.show = function() {
                var e = this.j;
                if (!e.o.readonly) {
                    var t = 0,
                        o = 0,
                        r = e.s.current(),
                        n = r && s.Dom.closest(r, (function(t) {
                            return s.Dom.isBlock(t, e.ew)
                        }), e.editor) || e.editor,
                        i = e.ew.getComputedStyle(n);
                    if (e.workplace.appendChild(this.placeholderElm), s.Dom.isElement(e.editor.firstChild)) {
                        var l = e.ew.getComputedStyle(e.editor.firstChild);
                        t = parseInt(l.getPropertyValue("margin-top"), 10), o = parseInt(l.getPropertyValue("margin-left"), 10), this.placeholderElm.style.fontSize = parseInt(l.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = l.getPropertyValue("line-height")
                    } else this.placeholderElm.style.fontSize = parseInt(i.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = i.getPropertyValue("line-height");
                    a.css(this.placeholderElm, {
                        display: "block",
                        textAlign: i.getPropertyValue("text-align"),
                        marginTop: Math.max(parseInt(i.getPropertyValue("margin-top"), 10), t),
                        marginLeft: Math.max(parseInt(i.getPropertyValue("margin-left"), 10), o)
                    })
                }
            }, t.prototype.hide = function() {
                s.Dom.safeRemove(this.placeholderElm)
            }, t.prototype.toggle = function() {
                var e = this.j;
                e.editor && !e.isInDestruct && (e.getRealMode() === i.MODE_WYSIWYG && this.isEmpty(e.editor) ? this.show() : this.hide())
            }, t.prototype.isEmpty = function(e) {
                if (!e.firstChild) return !0;
                var t = e.firstChild;
                if (c.MAY_BE_REMOVED_WITH_KEY.test(t.nodeName) || /^(TABLE)$/i.test(t.nodeName)) return !1;
                var o = s.Dom.next(t, (function(e) {
                    return e && !s.Dom.isEmptyTextNode(e)
                }), e);
                return s.Dom.isText(t) && !o ? s.Dom.isEmptyTextNode(t) : !(o || !s.Dom.each(t, (function(e) {
                    return !s.Dom.isTag(e, ["ul", "li", "ol"]) && (s.Dom.isEmpty(e) || s.Dom.isTag(e, "br"))
                })))
            }, t.prototype.beforeDestruct = function(e) {
                this.hide(), e.e.off(".placeholder").off(window, "load", this.toggle)
            }, r.__decorate([u.debounce((function(e) {
                return e.defaultTimeout / 10
            }), !0)], t.prototype, "toggle", null), t
        }(l.Plugin);
        t.placeholder = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.redoUndo = void 0;
        var r = o(0),
            n = o(4),
            i = o(3),
            a = o(6);
        n.Config.prototype.controls.redo = {
            mode: i.MODE_SPLIT,
            isDisabled: function(e) {
                return !e.observer.stack.canRedo()
            },
            tooltip: "Redo"
        }, n.Config.prototype.controls.undo = {
            mode: i.MODE_SPLIT,
            isDisabled: function(e) {
                return !e.observer.stack.canUndo()
            },
            tooltip: "Undo"
        };
        var s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.beforeDestruct = function() {}, t.prototype.afterInit = function(e) {
                var t = function(t) {
                    return e.observer[t](), !1
                };
                e.registerCommand("redo", {
                    exec: t,
                    hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"]
                }), e.registerCommand("undo", {
                    exec: t,
                    hotkeys: ["ctrl+z", "cmd+z"]
                })
            }, t
        }(a.Plugin);
        t.redoUndo = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resizer = void 0;
        var r = o(0);
        o(287);
        var n = o(4),
            i = o(3),
            a = o(3),
            s = o(2),
            l = o(1),
            c = o(6),
            u = o(8),
            d = o(11);
        n.Config.prototype.useIframeResizer = !0, n.Config.prototype.useTableResizer = !0, n.Config.prototype.useImageResizer = !0, n.Config.prototype.resizer = {
            showSize: !0,
            hideSizeTimeout: 1e3,
            min_width: 10,
            min_height: 10
        };
        var p = "__jodit-resizer_binded",
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.LOCK_KEY = "resizer", t.element = null, t.isResized = !1, t.isShown = !1, t.start_x = 0, t.start_y = 0, t.width = 0, t.height = 0, t.ratio = 0, t.rect = t.j.c.fromHTML('<div class="jodit-resizer">\n\t\t\t\t<i class="jodit-resizer-topleft"></i>\n\t\t\t\t<i class="jodit-resizer-topright"></i>\n\t\t\t\t<i class="jodit-resizer-bottomright"></i>\n\t\t\t\t<i class="jodit-resizer-bottomleft"></i>\n\t\t\t\t<span>100x100</span>\n\t\t\t</div>'), t.sizeViewer = t.rect.getElementsByTagName("span")[0], t.onResize = function(e) {
                        if (t.isResized) {
                            var o = e.clientX - t.start_x,
                                r = e.clientY - t.start_y;
                            if (!t.element) return;
                            var n = t.handle.className,
                                i = 0,
                                a = 0;
                            s.Dom.isTag(t.element, "img") ? (o ? (i = t.width + (n.match(/left/) ? -1 : 1) * o, a = Math.round(i / t.ratio)) : (a = t.height + (n.match(/top/) ? -1 : 1) * r, i = Math.round(a * t.ratio)), i > l.innerWidth(t.j.editor, t.j.ow) && (i = l.innerWidth(t.j.editor, t.j.ow), a = Math.round(i / t.ratio))) : (i = t.width + (n.match(/left/) ? -1 : 1) * o, a = t.height + (n.match(/top/) ? -1 : 1) * r), i > t.j.o.resizer.min_width && l.css(t.element, "width", t.rect.parentNode.offsetWidth > i ? i : "100%"), a > t.j.o.resizer.min_height && l.css(t.element, "height", a), t.updateSize(), t.showSizeViewer(t.element.offsetWidth, t.element.offsetHeight), e.stopImmediatePropagation()
                        }
                    }, t.onClickOutside = function(e) {
                        t.isShown && (t.isResized ? (t.j.unlock(), t.isResized = !1, t.j.setEditorValue(), e.stopImmediatePropagation(), t.j.e.off(t.j.ow, "mousemove.resizer touchmove.resizer", t.onResize)) : t.hide())
                    }, t.onClickElement = function(e) {
                        t.element === e && t.isShown || (t.element = e, t.show(), s.Dom.isTag(t.element, "img") && !t.element.complete && t.j.e.on(t.element, "load", t.updateSize))
                    }, t.updateSize = function() {
                        if (!t.isInDestruct && t.isShown && t.element && t.rect) {
                            var e = l.offset(t.rect.parentNode || t.j.od.documentElement, t.j, t.j.od, !0),
                                o = l.offset(t.element, t.j, t.j.ed),
                                r = parseInt(t.rect.style.left || "0", 10),
                                n = parseInt(t.rect.style.top || "0", 10),
                                i = o.top - 1 - e.top,
                                a = o.left - 1 - e.left;
                            n === i && r === a && t.rect.offsetWidth === t.element.offsetWidth && t.rect.offsetHeight === t.element.offsetHeight || (l.css(t.rect, {
                                top: i,
                                left: a,
                                width: t.element.offsetWidth,
                                height: t.element.offsetHeight
                            }), t.j.events && (t.j.e.fire(t.element, "changesize"), isNaN(r) || t.j.e.fire("resize")))
                        }
                    }, t.hideSizeViewer = function() {
                        t.sizeViewer.style.opacity = "0"
                    }, t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    var t = this;
                    l.$$("i", this.rect).forEach((function(o) {
                        e.e.on(o, "mousedown.resizer touchstart.resizer", t.onClickHandle.bind(t, o))
                    })), d.eventEmitter.on("hideHelpers", this.hide), e.e.on("readonly", (function(e) {
                        e && t.hide()
                    })).on("afterInit changePlace", this.addEventListeners.bind(this)).on("afterGetValueFromEditor.resizer", (function(e) {
                        var t = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi;
                        t.test(e.value) && (e.value = e.value.replace(t, "$1"))
                    })).on("hideResizer", this.hide).on("change afterInit afterSetMode", e.async.debounce(this.onChangeEditor.bind(this), e.defaultTimeout)), this.addEventListeners(), this.onChangeEditor()
                }, t.prototype.addEventListeners = function() {
                    var e = this,
                        t = this.j;
                    t.e.off(t.editor, ".resizer").off(t.ow, ".resizer").on(t.editor, "keydown.resizer", (function(t) {
                        e.isShown && t.key === i.KEY_DELETE && e.element && !s.Dom.isTag(e.element, "table") && e.onDelete(t)
                    })).on(t.ow, "resize.resizer", this.updateSize).on(t.ow, "mouseup.resizer keydown.resizer touchend.resizer", this.onClickOutside).on([t.ow, t.editor], "scroll.resizer", (function() {
                        e.isShown && !e.isResized && e.hide()
                    }))
                }, t.prototype.onClickHandle = function(e, t) {
                    if (!this.element || !this.element.parentNode) return this.hide(), !1;
                    this.handle = e, t.preventDefault(), t.stopImmediatePropagation(), this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.ratio = this.width / this.height, this.isResized = !0, this.start_x = t.clientX, this.start_y = t.clientY, this.j.e.fire("hidePopup"), this.j.lock(this.LOCK_KEY), this.j.e.on(this.j.ow, "mousemove.resizer touchmove.resizer", this.onResize)
                }, t.prototype.onDelete = function(e) {
                    this.element && ("JODIT" !== this.element.tagName ? this.j.s.select(this.element) : (s.Dom.safeRemove(this.element), this.hide(), e.preventDefault()))
                }, t.prototype.onChangeEditor = function() {
                    var e = this,
                        t = this.j;
                    this.isShown && (this.element && this.element.parentNode ? this.updateSize() : this.hide()), t.isDestructed || l.$$("img, table, iframe", t.editor).forEach((function(o) {
                        t.getMode() !== i.MODE_SOURCE && !o[p] && (s.Dom.isTag(o, "iframe") && t.o.useIframeResizer || s.Dom.isTag(o, "img") && t.o.useImageResizer || s.Dom.isTag(o, "table") && t.o.useTableResizer) && (o[p] = !0, e.bind(o))
                    }))
                }, t.prototype.bind = function(e) {
                    var t, o = this;
                    if (s.Dom.isTag(e, "iframe")) {
                        var r = e;
                        l.attr(e.parentNode, "-jodit_iframe_wrapper") ? e = e.parentNode : (t = this.j.createInside.fromHTML('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>'), l.css(t, {
                            display: "inline-block" === e.style.display ? "inline-block" : "block",
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }), e.parentNode && e.parentNode.insertBefore(t, e), t.appendChild(e), e = t), this.j.e.off(e, "mousedown.select touchstart.select").on(e, "mousedown.select touchstart.select", (function() {
                            o.j.s.select(e)
                        })).off(e, "changesize").on(e, "changesize", (function() {
                            r.setAttribute("width", e.offsetWidth + "px"), r.setAttribute("height", e.offsetHeight + "px")
                        }))
                    }
                    this.j.e.on(e, "dragstart", this.hide).on(e, "mousedown", (function(t) {
                        a.IS_IE && s.Dom.isTag(e, "img") && t.preventDefault()
                    })).on(e, "click", (function() {
                        return o.onClickElement(e)
                    }))
                }, t.prototype.showSizeViewer = function(e, t) {
                    this.j.o.resizer.showSize && (this.sizeViewer.offsetWidth > e || this.sizeViewer.offsetHeight > t ? this.hideSizeViewer() : (this.sizeViewer.style.opacity = "1", this.sizeViewer.textContent = e + " x " + t, this.j.async.setTimeout(this.hideSizeViewer, {
                        timeout: this.j.o.resizer.hideSizeTimeout,
                        label: "hideSizeViewer"
                    })))
                }, t.prototype.show = function() {
                    this.j.o.readonly || this.isShown || (this.isShown = !0, this.rect.parentNode || (l.markOwner(this.j, this.rect), this.j.workplace.appendChild(this.rect)), this.j.isFullSize && (this.rect.style.zIndex = l.css(this.j.container, "zIndex").toString()), this.updateSize())
                }, t.prototype.hide = function() {
                    this.isResized = !1, this.isShown = !1, this.element = null, s.Dom.safeRemove(this.rect)
                }, t.prototype.beforeDestruct = function(e) {
                    this.hide(), d.eventEmitter.off("hideHelpers", this.hide), e.e.off(this.j.ow, ".resizer").off(".resizer")
                }, r.__decorate([u.default], t.prototype, "hide", null), t
            }(c.Plugin);
        t.resizer = f
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.search = void 0;
        var r = o(0);
        o(289);
        var n = o(4),
            i = o(3),
            a = o(3),
            s = o(2),
            l = o(6),
            c = o(7),
            u = o(1);
        n.Config.prototype.useSearch = !0, n.Config.prototype.controls.find = {
            tooltip: "Find",
            icon: "search",
            exec: function(e, t, o) {
                var r = o.control;
                switch (r.args && r.args[0]) {
                    case "findPrevious":
                        e.e.fire("searchPrevious");
                        break;
                    case "findNext":
                        e.e.fire("searchNext");
                        break;
                    case "replace":
                        e.execCommand("openReplaceDialog");
                        break;
                    default:
                        e.execCommand("openSearchDialog")
                }
            },
            list: {
                search: "Find",
                findNext: "Find Next",
                findPrevious: "Find Previous",
                replace: "Replace"
            },
            childTemplate: function(e, t, o) {
                return o
            }
        };
        var d = function(e) {
            function t() {
                var o = null !== e && e.apply(this, arguments) || this;
                return o.template = '<div class="jodit-search">\n\t\t\t<div class="jodit-search__box">\n\t\t\t\t<div class="jodit-search__inputs">\n\t\t\t\t\t<input data-ref="query" tabindex="0" placeholder="' + o.j.i18n("Search for") + '" type="text"/>\n\t\t\t\t\t<input data-ref="replace" tabindex="0" placeholder="' + o.j.i18n("Replace with") + '" type="text"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="jodit-search__counts">\n\t\t\t\t\t<span data-ref="counter-box">0/0</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="jodit-search__buttons">\n\t\t\t\t\t<button data-ref="next" tabindex="0" type="button">' + c.Icon.get("angle-down") + '</button>\n\t\t\t\t\t<button data-ref="prev" tabindex="0" type="button">' + c.Icon.get("angle-up") + '</button>\n\t\t\t\t\t<button data-ref="cancel" tabindex="0" type="button">' + c.Icon.get("cancel") + '</button>\n\t\t\t\t\t<button data-ref="replace-btn" tabindex="0" type="button" class="jodit-ui-button">' + o.j.i18n("Replace") + "</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>", o.isOpened = !1, o.selInfo = null, o.current = null, o.eachMap = function(e, t, r) {
                    s.Dom.findWithCurrent(e, (function(e) {
                        return !!e && t(e)
                    }), o.j.editor, r ? "nextSibling" : "previousSibling", r ? "firstChild" : "lastChild")
                }, o.updateCounters = function() {
                    if (o.isOpened) {
                        o.counterBox.style.display = o.queryInput.value.length ? "inline-block" : "none";
                        var e = o.calcCounts(o.queryInput.value, o.j.s.range);
                        o.counterBox.textContent = e.join("/")
                    }
                }, o.calcCounts = function(e, t) {
                    void 0 === t && (t = !1);
                    for (var r = [], n = 0, i = 0, a = !1, s = o.j.editor.firstChild; s && e.length;)
                        if (a = o.find(s, e, !0, 0, a || o.j.ed.createRange())) {
                            if (o.boundAlreadyWas(a, r)) break;
                            r.push(a), s = a.startContainer, i += 1, t && o.boundAlreadyWas(t, [a]) && (n = i)
                        } else s = null;
                    return [n, i]
                }, o.findAndReplace = function(e, t) {
                    var r = o.find(e, t, !0, 0, o.j.s.range);
                    if (r && r.startContainer && r.endContainer) {
                        var n = o.j.ed.createRange();
                        try {
                            if (r && r.startContainer && r.endContainer) {
                                n.setStart(r.startContainer, r.startOffset), n.setEnd(r.endContainer, r.endOffset), n.deleteContents();
                                var i = o.j.createInside.text(o.replaceInput.value);
                                n.insertNode(i), o.j.s.select(i), o.tryScrollToElement(i)
                            }
                        } catch (e) {}
                        return !0
                    }
                    return !1
                }, o.findAndSelect = function(e, t, r) {
                    var n = o.find(e, t, r, 0, o.j.s.range);
                    if (n && n.startContainer && n.endContainer) {
                        var i = o.j.ed.createRange();
                        try {
                            i.setStart(n.startContainer, n.startOffset), i.setEnd(n.endContainer, n.endOffset), o.j.s.selectRange(i)
                        } catch (e) {}
                        return o.tryScrollToElement(n.startContainer), o.current = n.startContainer, o.updateCounters(), !0
                    }
                    return !1
                }, o.find = function(e, r, n, i, a) {
                    if (e && r.length) {
                        var l = "",
                            c = {
                                startContainer: null,
                                startOffset: null,
                                endContainer: null,
                                endOffset: null
                            };
                        if (o.eachMap(e, (function(e) {
                                if (s.Dom.isText(e) && null !== e.nodeValue && e.nodeValue.length) {
                                    var d = e.nodeValue;
                                    n || e !== a.startContainer ? n && e === a.endContainer && (d = i ? d.substr(0, a.startOffset) : d.substr(a.endOffset)) : d = i ? d.substr(a.endOffset) : d.substr(0, a.startOffset);
                                    var p = n ? l + d : d + l,
                                        f = t.findSomePartOfString(r, p, n);
                                    if (!1 !== f) {
                                        var h = t.findSomePartOfString(r, d, n);
                                        !0 === h ? h = u.trim(r) : !1 === h && !0 === (h = t.findSomePartOfString(d, r, n)) && (h = u.trim(d));
                                        var m = t.getSomePartOfStringIndex(r, d, n) || 0;
                                        if ((n && !i || !n && i) && e.nodeValue.length - d.length > 0 && (m += e.nodeValue.length - d.length), null === c.startContainer && (c.startContainer = e, c.startOffset = m), !0 === f) return c.endContainer = e, c.endOffset = m, c.endOffset += h.length, !0;
                                        l = p
                                    } else l = "", c = {
                                        startContainer: null,
                                        startOffset: null,
                                        endContainer: null,
                                        endOffset: null
                                    }
                                } else s.Dom.isBlock(e, o.j.ew) && "" !== l && (l = n ? l + " " : " " + l);
                                return !1
                            }), n), c.startContainer && c.endContainer) return c;
                        if (!i) return o.current = n ? o.j.editor.firstChild : o.j.editor.lastChild, o.find(o.current, r, n, i + 1, a)
                    }
                    return !1
                }, o.open = function(e) {
                    void 0 === e && (e = !1), o.isOpened || (o.searchBox.classList.add("jodit-search_active"), o.isOpened = !0), o.j.e.fire("hidePopup"), o.searchBox.classList.toggle("jodit-search_replace", e), o.current = o.j.s.current(), o.selInfo = o.j.s.save();
                    var t = (o.j.s.sel || "").toString();
                    t && (o.queryInput.value = t), o.updateCounters(), t ? o.queryInput.select() : o.queryInput.focus()
                }, o.close = function() {
                    o.isOpened && (o.selInfo && (o.j.s.restore(o.selInfo), o.selInfo = null), o.searchBox.classList.remove("jodit-search_active"), o.isOpened = !1)
                }, o
            }
            return r.__extends(t, e), t.getSomePartOfStringIndex = function(e, t, o) {
                return void 0 === o && (o = !0), this.findSomePartOfString(e, t, o, !0)
            }, t.findSomePartOfString = function(e, t, o, r) {
                void 0 === o && (o = !0), void 0 === r && (r = !1), e = u.trim(e.toLowerCase().replace(i.SPACE_REG_EXP(), " ")), t = t.toLowerCase();
                for (var n = o ? 0 : t.length - 1, a = o ? 0 : e.length - 1, s = 0, l = null, c = o ? 1 : -1, d = []; void 0 !== t[n]; n += c) {
                    var p = e[a] === t[n];
                    if (p || null !== l && i.SPACE_REG_EXP().test(t[n]) ? (null !== l && o || (l = n), d.push(t[n]), p && (s += 1, a += c)) : (l = null, d.length = 0, s = 0, a = o ? 0 : e.length - 1), s === e.length) return !r || l
                }
                return r ? null != l && l : !!d.length && (o ? d.join("") : d.reverse().join(""))
            }, t.prototype.boundAlreadyWas = function(e, t) {
                return t.some((function(t) {
                    return t.startContainer === e.startContainer && t.endContainer === e.endContainer && t.startOffset === e.startOffset && t.endOffset === e.endOffset
                }), !1)
            }, t.prototype.tryScrollToElement = function(e) {
                var t = s.Dom.closest(e, s.Dom.isElement, this.j.editor);
                t || (t = s.Dom.prev(e, s.Dom.isElement, this.j.editor)), t && t !== this.j.editor && t.scrollIntoView()
            }, t.prototype.afterInit = function(e) {
                var t = this;
                if (e.o.useSearch) {
                    var o = this;
                    o.searchBox = e.c.fromHTML(o.template);
                    var r = u.refs(o.searchBox),
                        n = r.replace,
                        s = r.cancel,
                        l = r.next,
                        c = r.prev,
                        d = r.replaceBtn,
                        p = r.counterBox;
                    o.queryInput = r.query, o.replaceInput = n, o.closeButton = s, o.nextButton = l, o.prevButton = c, o.replaceButton = d, o.counterBox = p;
                    var f = function() {
                        e.workplace.appendChild(t.searchBox), e.e.off(t.j.container, "keydown.search").on(t.j.container, "keydown.search", (function(r) {
                            if (e.getRealMode() === a.MODE_WYSIWYG) switch (r.key) {
                                case i.KEY_ESC:
                                    t.close();
                                    break;
                                case i.KEY_F3:
                                    o.queryInput.value && (e.e.fire(r.shiftKey ? "searchPrevious" : "searchNext"), r.preventDefault())
                            }
                        }))
                    };
                    f(), e.e.on("changePlace", f).on(o.closeButton, "click", this.close).on(o.queryInput, "mousedown", (function() {
                        e.s.isFocused() && (e.s.removeMarkers(), o.selInfo = e.s.save())
                    })).on(o.replaceButton, "click", (function(r) {
                        o.findAndReplace(e.s.current() || e.editor.firstChild, o.queryInput.value), t.updateCounters(), r.preventDefault(), r.stopImmediatePropagation()
                    })).on([o.nextButton, o.prevButton], "click", (function(t) {
                        e.e.fire(o.nextButton === this ? "searchNext" : "searchPrevious"), t.preventDefault(), t.stopImmediatePropagation()
                    })).on(this.queryInput, "keydown", this.j.async.debounce((function(o) {
                        switch (o.key) {
                            case i.KEY_ENTER:
                                o.preventDefault(), o.stopImmediatePropagation(), e.e.fire("searchNext") && t.close();
                                break;
                            default:
                                t.updateCounters()
                        }
                    }), this.j.defaultTimeout)).on("beforeSetMode.search", (function() {
                        t.close()
                    })).on("keydown.search mousedown.search", (function() {
                        t.selInfo && (e.s.removeMarkers(), t.selInfo = null), t.isOpened && (t.current = t.j.s.current(), t.updateCounters())
                    })).on("searchNext.search searchPrevious.search", (function() {
                        return o.isOpened ? o.findAndSelect(e.s.current() || e.editor.firstChild, o.queryInput.value, "searchNext" === e.e.current) : o.open()
                    })).on("search.search", (function(t, o) {
                        void 0 === o && (o = !0), e.execCommand("search", t, o)
                    })), e.registerCommand("search", {
                        exec: function(t, r, n) {
                            return void 0 === n && (n = !0), o.findAndSelect(e.s.current() || e.editor.firstChild, r || "", n), !1
                        }
                    }), e.registerCommand("openSearchDialog", {
                        exec: function() {
                            return o.open(), !1
                        },
                        hotkeys: ["ctrl+f", "cmd+f"]
                    }), e.registerCommand("openReplaceDialog", {
                        exec: function() {
                            return e.o.readonly || o.open(!0), !1
                        },
                        hotkeys: ["ctrl+h", "cmd+h"]
                    })
                }
            }, t.prototype.beforeDestruct = function(e) {
                var t;
                s.Dom.safeRemove(this.searchBox), null === (t = e.events) || void 0 === t || t.off(".search")
            }, t
        }(l.Plugin);
        t.search = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        o(291), r.__exportStar(o(292), t), r.__exportStar(o(293), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4);
        // Editor 초기 세팅
         r.Config.prototype.minWidth = 200, r.Config.prototype.maxWidth = "100%", r.Config.prototype.allowResizeX = !1, r.Config.prototype.allowResizeY = !0, r.Config.prototype.height = "auto", r.Config.prototype.minHeight = 200, r.Config.prototype.maxHeight = "auto", r.Config.prototype.saveHeightInStorage = !1
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resizeHandler = void 0;
        var r = o(0),
            n = o(8),
            i = o(6),
            a = o(2),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isResized = !1, t.start = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    }, t.handle = t.j.c.div("jodit-editor__resize", '<a tabindex="-1" href="javascript:void(0)"></a>'), t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    var t = this;
                    "auto" !== e.o.height && (e.o.allowResizeX || e.o.allowResizeY) && (e.e.on("toggleFullSize.resizeHandler", (function() {
                        t.handle.style.display = e.isFullSize ? "none" : "block"
                    })).on(this.handle, "mousedown touchstart", this.onHandleResizeStart).on(e.ow, "mouseup touchsend", this.onHandleResizeEnd), e.container.appendChild(this.handle))
                }, t.prototype.onHandleResizeStart = function(e) {
                    this.isResized = !0, this.start.x = e.clientX, this.start.y = e.clientY, this.start.w = this.j.container.offsetWidth, this.start.h = this.j.container.offsetHeight, this.j.lock(), this.j.e.on(this.j.ow, "mousemove touchmove", this.onHandleResize), e.preventDefault()
                }, t.prototype.onHandleResize = function(e) {
                    this.isResized && (this.j.o.allowResizeY && this.j.e.fire("setHeight", this.start.h + e.clientY - this.start.y), this.j.o.allowResizeX && this.j.e.fire("setWidth", this.start.w + e.clientX - this.start.x), this.j.e.fire("resize"))
                }, t.prototype.onHandleResizeEnd = function() {
                    this.isResized && (this.isResized = !1, this.j.e.off(this.j.ow, "mousemove touchmove", this.onHandleResize), this.j.unlock())
                }, t.prototype.beforeDestruct = function(e) {
                    a.Dom.safeRemove(this.handle), this.j.e.off(this.j.ow, "mouseup touchsend", this.onHandleResizeEnd)
                }, t.requires = ["size"], r.__decorate([n.default], t)
            }(i.Plugin);
        t.resizeHandler = s
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.size = void 0;
        var r = o(0);
        o(294);
        var n = o(8),
            i = o(1),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.resizeWorkspaces = t.j.async.debounce(t.resizeWorkspaceImd, t.j.defaultTimeout, !0), t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    e.e.on("setHeight.size", this.setHeight).on("setWidth.size", this.setWidth).on("afterInit.size changePlace.size", this.initialize, void 0, !0).on(e.ow, "load.size", this.resizeWorkspaces).on("afterInit.size resize.size afterUpdateToolbar.size scroll.size afterResize.size toggleFullSize.size", this.resizeWorkspaces), this.initialize()
                }, t.prototype.initialize = function() {
                    var e = this.j;
                    if (!e.o.inline) {
                        var t = e.o.height;
                        if (e.o.saveHeightInStorage && "auto" !== t) {
                            var o = e.storage.get("height");
                            o && (t = o)
                        }
                        i.css(e.editor, {
                            minHeight: "100%"
                        }), i.css(e.container, {
                            minHeight: e.o.minHeight,
                            maxHeight: e.o.maxHeight,
                            minWidth: e.o.minWidth,
                            maxWidth: e.o.maxWidth
                        }), this.setHeight(t), this.setWidth(e.o.width)
                    }
                }, t.prototype.setHeight = function(e) {
                    if (i.isNumber(e)) {
                        var t = this.j.o,
                            o = t.minHeight,
                            r = t.maxHeight;
                        i.isNumber(o) && o > e && (e = o), i.isNumber(r) && e > r && (e = r)
                    }
                    i.css(this.j.container, "height", e), this.j.o.saveHeightInStorage && this.j.storage.set("height", e), this.resizeWorkspaceImd()
                }, t.prototype.setWidth = function(e) {
                    if (i.isNumber(e)) {
                        var t = this.j.o,
                            o = t.minWidth,
                            r = t.maxWidth;
                        i.isNumber(o) && o > e && (e = o), i.isNumber(r) && e > r && (e = r)
                    }
                    i.css(this.j.container, "width", e), this.resizeWorkspaceImd()
                }, t.prototype.getNotWorkHeight = function() {
                    var e, t;
                    return ((null === (e = this.j.toolbarContainer) || void 0 === e ? void 0 : e.offsetHeight) || 0) + ((null === (t = this.j.statusbar) || void 0 === t ? void 0 : t.getHeight()) || 0) + 2
                }, t.prototype.resizeWorkspaceImd = function() {
                    if (this.j && !this.j.isDestructed && this.j.o && !this.j.o.inline && this.j.container && this.j.container.parentNode) {
                        var e = (i.css(this.j.container, "minHeight") || 0) - this.getNotWorkHeight();
                        if (i.isNumber(e) && e > 0 && ([this.j.workplace, this.j.iframe, this.j.editor].map((function(t) {
                                t && i.css(t, "minHeight", e)
                            })), this.j.e.fire("setMinHeight", e)), i.isNumber(this.j.o.maxHeight)) {
                            var t = this.j.o.maxHeight - this.getNotWorkHeight();
                            [this.j.workplace, this.j.iframe, this.j.editor].map((function(e) {
                                e && i.css(e, "maxHeight", t)
                            })), this.j.e.fire("setMaxHeight", t)
                        }
                        this.j.container && i.css(this.j.workplace, "height", "auto" !== this.j.o.height || this.j.isFullSize ? this.j.container.offsetHeight - this.getNotWorkHeight() : "auto")
                    }
                }, t.prototype.beforeDestruct = function(e) {
                    this.j.e.off(this.j.ow, "load.size", this.resizeWorkspaces).off(".size")
                }, r.__decorate([n.default], t)
            }(o(6).Plugin);
        t.size = a
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        o(296), r.__exportStar(o(297), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(3),
            i = o(3);
        r.Config.prototype.beautifyHTML = !i.IS_IE, r.Config.prototype.useAceEditor = !0, r.Config.prototype.sourceEditor = "ace", r.Config.prototype.sourceEditorNativeOptions = {
            showGutter: !0,
            theme: "ace/theme/idle_fingers",
            mode: "ace/mode/html",
            wrap: !0,
            highlightActiveLine: !0
        }, r.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"], r.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js"], r.Config.prototype.controls.source = {
            mode: n.MODE_SPLIT,
            exec: function(e) {
                e.toggleMode()
            },
            isActive: function(e) {
                return e.getRealMode() === n.MODE_SOURCE
            },
            tooltip: "Change mode"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.source = void 0;
        var r = o(0);
        o(298);
        var n = o(3),
            i = o(3),
            a = o(6),
            s = o(2),
            l = o(1),
            c = o(299),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.__lock = !1, t.__oldMirrorValue = "", t.tempMarkerStart = "{start-jodit-selection}", t.tempMarkerStartReg = /{start-jodit-selection}/g, t.tempMarkerEnd = "{end-jodit-selection}", t.tempMarkerEndReg = /{end-jodit-selection}/g, t.selInfo = [], t.insertHTML = function(e) {
                        var o;
                        null === (o = t.sourceEditor) || void 0 === o || o.insertRaw(e), t.toWYSIWYG()
                    }, t.fromWYSIWYG = function(e) {
                        if (void 0 === e && (e = !1), !t.__lock || !0 === e) {
                            t.__lock = !0;
                            var o = t.j.getEditorValue(!1);
                            o !== t.getMirrorValue() && t.setMirrorValue(o), t.__lock = !1
                        }
                    }, t.toWYSIWYG = function() {
                        if (!t.__lock) {
                            var e = t.getMirrorValue();
                            e !== t.__oldMirrorValue && (t.__lock = !0, t.j.setEditorValue(e), t.__lock = !1, t.__oldMirrorValue = e)
                        }
                    }, t.getNormalPosition = function(e, t) {
                        for (var o = e; o > 0;) {
                            if ("<" === t[--o] && void 0 !== t[o + 1] && t[o + 1].match(/[\w/]+/i)) return o;
                            if (">" === t[o]) return e
                        }
                        return e
                    }, t.__clear = function(e) {
                        return e.replace(n.INVISIBLE_SPACE_REG_EXP(), "")
                    }, t.selectAll = function() {
                        var e;
                        null === (e = t.sourceEditor) || void 0 === e || e.selectAll()
                    }, t.onSelectAll = function(e) {
                        if ("selectall" === e.toLowerCase() && t.j.getRealMode() === i.MODE_SOURCE) return t.selectAll(), !1
                    }, t.getSelectionStart = function() {
                        var e, o;
                        return null !== (o = null === (e = t.sourceEditor) || void 0 === e ? void 0 : e.getSelectionStart()) && void 0 !== o ? o : 0
                    }, t.getSelectionEnd = function() {
                        var e, o;
                        return null !== (o = null === (e = t.sourceEditor) || void 0 === e ? void 0 : e.getSelectionEnd()) && void 0 !== o ? o : 0
                    }, t.saveSelection = function() {
                        if (t.j.getRealMode() === n.MODE_WYSIWYG) t.selInfo = t.j.s.save() || [], t.j.setEditorValue(), t.fromWYSIWYG(!0);
                        else {
                            if (t.selInfo.length = 0, t.j.o.editHTMLDocumentMode) return;
                            var e = t.getMirrorValue();
                            if (t.getSelectionStart() === t.getSelectionEnd()) {
                                var o = t.j.s.marker(!0);
                                t.selInfo[0] = {
                                    startId: o.id,
                                    collapsed: !0,
                                    startMarker: o.outerHTML
                                };
                                var r = t.getNormalPosition(t.getSelectionStart(), t.getMirrorValue());
                                t.setMirrorValue(e.substr(0, r) + t.__clear(t.selInfo[0].startMarker) + e.substr(r))
                            } else {
                                var i = t.j.s.marker(!0),
                                    a = t.j.s.marker(!1);
                                t.selInfo[0] = {
                                    startId: i.id,
                                    endId: a.id,
                                    collapsed: !1,
                                    startMarker: t.__clear(i.outerHTML),
                                    endMarker: t.__clear(a.outerHTML)
                                }, r = t.getNormalPosition(t.getSelectionStart(), e);
                                var s = t.getNormalPosition(t.getSelectionEnd(), e);
                                t.setMirrorValue(e.substr(0, r) + t.selInfo[0].startMarker + e.substr(r, s - r) + t.selInfo[0].endMarker + e.substr(s))
                            }
                            t.toWYSIWYG()
                        }
                    }, t.removeSelection = function() {
                        if (t.selInfo.length) {
                            if (t.j.getRealMode() === n.MODE_WYSIWYG) return t.__lock = !0, t.j.s.restore(t.selInfo), void(t.__lock = !1);
                            var e = t.getMirrorValue(),
                                o = 0,
                                r = 0;
                            try {
                                if (t.selInfo[0].startMarker && (e = e.replace(/<span[^>]+data-jodit-selection_marker="start"[^>]*>[<>]*?<\/span>/gim, t.tempMarkerStart)), t.selInfo[0].endMarker && (e = e.replace(/<span[^>]+data-jodit-selection_marker="end"[^>]*>[<>]*?<\/span>/gim, t.tempMarkerEnd)), !t.j.o.editHTMLDocumentMode && t.j.o.beautifyHTML) {
                                    var i = t.j.e.fire("beautifyHTML", e);
                                    l.isString(i) && (e = i)
                                }
                                r = o = e.indexOf(t.tempMarkerStart), e = e.replace(t.tempMarkerStartReg, ""), t.selInfo[0].collapsed && -1 !== o || (r = e.indexOf(t.tempMarkerEnd), -1 === o && (o = r)), e = e.replace(t.tempMarkerEndReg, "")
                            } finally {
                                e = e.replace(t.tempMarkerEndReg, "").replace(t.tempMarkerStartReg, "")
                            }
                            t.setMirrorValue(e), t.setMirrorSelectionRange(o, r), t.toWYSIWYG(), t.setFocusToMirror()
                        }
                    }, t.setMirrorSelectionRange = function(e, o) {
                        var r;
                        null === (r = t.sourceEditor) || void 0 === r || r.setSelectionRange(e, o)
                    }, t.onReadonlyReact = function() {
                        var e;
                        null === (e = t.sourceEditor) || void 0 === e || e.setReadOnly(t.j.o.readonly)
                    }, t
                }
                return r.__extends(t, e), t.prototype.getMirrorValue = function() {
                    var e;
                    return (null === (e = this.sourceEditor) || void 0 === e ? void 0 : e.getValue()) || ""
                }, t.prototype.setMirrorValue = function(e) {
                    var t;
                    null === (t = this.sourceEditor) || void 0 === t || t.setValue(e)
                }, t.prototype.setFocusToMirror = function() {
                    var e;
                    null === (e = this.sourceEditor) || void 0 === e || e.focus()
                }, t.prototype.initSourceEditor = function(e) {
                    var t, o = this;
                    if ("area" !== e.o.sourceEditor) {
                        var r = c.createSourceEditor(e.o.sourceEditor, e, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
                        r.onReadyAlways((function() {
                            var t, n;
                            null === (t = o.sourceEditor) || void 0 === t || t.destruct(), o.sourceEditor = r, o.fromWYSIWYG(!0), null === (n = e.events) || void 0 === n || n.fire("sourceEditorReady", e)
                        }))
                    } else null === (t = this.sourceEditor) || void 0 === t || t.onReadyAlways((function() {
                        var t;
                        o.fromWYSIWYG(!0), null === (t = e.events) || void 0 === t || t.fire("sourceEditorReady", e)
                    }))
                }, t.prototype.afterInit = function(e) {
                    var t = this;
                    if (this.mirrorContainer = e.c.div("jodit-source"), e.workplace.appendChild(this.mirrorContainer), e.e.on("afterAddPlace changePlace afterInit", (function() {
                            e.workplace.appendChild(t.mirrorContainer)
                        })), this.sourceEditor = c.createSourceEditor("area", e, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG), e.e.off("beforeSetMode.source afterSetMode.source").on("beforeSetMode.source", t.saveSelection).on("afterSetMode.source", t.removeSelection), this.onReadonlyReact(), e.e.on("insertHTML.source", (function(o) {
                            if (!e.o.readonly && !t.j.isEditorMode()) return t.insertHTML(o), !1
                        })).on("readonly.source", this.onReadonlyReact).on("placeholder.source", (function(e) {
                            var o;
                            null === (o = t.sourceEditor) || void 0 === o || o.setPlaceHolder(e)
                        })).on("beforeCommand.source", this.onSelectAll).on("change.source", this.fromWYSIWYG), e.e.on("beautifyHTML", (function(e) {
                            return e
                        })), e.o.beautifyHTML) {
                        var o = function() {
                            var t, o, r = e.ow.html_beautify;
                            return !(!r || e.isInDestruct || (null === (o = null === (t = e.events) || void 0 === t ? void 0 : t.off("beautifyHTML")) || void 0 === o || o.on("beautifyHTML", (function(e) {
                                return r(e)
                            })), 0))
                        };
                        o() || l.loadNext(e, e.o.beautifyHTMLCDNUrlsJS).then(o)
                    }
                    this.fromWYSIWYG(), this.initSourceEditor(e)
                }, t.prototype.beforeDestruct = function(e) {
                    this.sourceEditor && (this.sourceEditor.destruct(), delete this.sourceEditor), s.Dom.safeRemove(this.mirrorContainer)
                }, t
            }(a.Plugin);
        t.source = u
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createSourceEditor = void 0;
        var r = o(300);
        t.createSourceEditor = function(e, t, o, n, i) {
            var a;
            switch (e) {
                case "ace":
                    if (!t.o.shadowRoot) {
                        a = new r.AceEditor(t, o, n, i);
                        break
                    }
                    default:
                        a = new r.TextAreaEditor(t, o, n, i)
            }
            return a.init(t), a.onReadyAlways((function() {
                a.setReadOnly(t.o.readonly)
            })), a
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        r.__exportStar(o(301), t), r.__exportStar(o(302), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TextAreaEditor = void 0;
        var r = o(0),
            n = o(1),
            i = o(10),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.autosize = t.j.async.debounce((function() {
                        t.instance.style.height = "auto", t.instance.style.height = t.instance.scrollHeight + "px"
                    }), t.j.defaultTimeout), t
                }
                return r.__extends(t, e), t.prototype.init = function(e) {
                    var t = this;
                    this.instance = e.c.element("textarea", {
                        class: "jodit-source__mirror"
                    }), this.container.appendChild(this.instance), e.e.on(this.instance, "mousedown keydown touchstart input", e.async.debounce(this.toWYSIWYG, e.defaultTimeout)).on("setMinHeight.source", (function(e) {
                        n.css(t.instance, "minHeight", e)
                    })).on(this.instance, "change keydown mousedown touchstart input", this.autosize).on("afterSetMode.source", this.autosize).on(this.instance, "mousedown focus", (function(t) {
                        e.e.fire(t.type, t)
                    })), this.autosize(), this.onReady()
                }, t.prototype.destruct = function() {
                    i.Dom.safeRemove(this.instance)
                }, t.prototype.getValue = function() {
                    return this.instance.value
                }, t.prototype.setValue = function(e) {
                    this.instance.value = e
                }, t.prototype.insertRaw = function(e) {
                    var t = this.getValue();
                    if (0 > this.getSelectionStart()) this.setValue(t + e);
                    else {
                        var o = this.getSelectionStart(),
                            r = this.getSelectionEnd();
                        this.setValue(t.substring(0, o) + e + t.substring(r, t.length))
                    }
                }, t.prototype.getSelectionStart = function() {
                    return this.instance.selectionStart
                }, t.prototype.getSelectionEnd = function() {
                    return this.instance.selectionEnd
                }, t.prototype.setSelectionRange = function(e, t) {
                    void 0 === t && (t = e), this.instance.setSelectionRange(e, t)
                }, t.prototype.focus = function() {
                    this.instance.focus()
                }, t.prototype.setPlaceHolder = function(e) {
                    this.instance.setAttribute("placeholder", e)
                }, t.prototype.setReadOnly = function(e) {
                    e ? this.instance.setAttribute("readonly", "true") : this.instance.removeAttribute("readonly")
                }, t.prototype.selectAll = function() {
                    this.instance.select()
                }, t.prototype.replaceUndoManager = function() {
                    var e = this,
                        t = this.jodit.observer;
                    this.j.e.on(this.instance, "keydown", (function(o) {
                        if ((o.ctrlKey || o.metaKey) && "z" === o.key) return o.shiftKey ? t.redo() : t.undo(), e.setSelectionRange(e.getValue().length), !1
                    }))
                }, t
            }(o(71).SourceEditor);
        t.TextAreaEditor = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AceEditor = void 0;
        var r = o(0),
            n = o(3),
            i = o(1),
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.className = "jodit_ace_editor", t.proxyOnFocus = function(e) {
                        t.j.e.fire("focus", e)
                    }, t.proxyOnMouseDown = function(e) {
                        t.j.e.fire("mousedown", e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.aceExists = function() {
                    return void 0 !== this.j.ow.ace
                }, t.prototype.getLastColumnIndex = function(e) {
                    return this.instance.session.getLine(e).length
                }, t.prototype.getLastColumnIndices = function() {
                    for (var e = this.instance.session.getLength(), t = [], o = 0, r = 0; e > r; r++) o += this.getLastColumnIndex(r), r > 0 && (o += 1), t[r] = o;
                    return t
                }, t.prototype.getRowColumnIndices = function(e) {
                    var t = this.getLastColumnIndices();
                    if (t[0] >= e) return {
                        row: 0,
                        column: e
                    };
                    for (var o = 1, r = 1; t.length > r; r++) e > t[r] && (o = r + 1);
                    return {
                        row: o,
                        column: e - t[o - 1] - 1
                    }
                }, t.prototype.setSelectionRangeIndices = function(e, t) {
                    var o = this.getRowColumnIndices(e),
                        r = this.getRowColumnIndices(t);
                    this.instance.getSelection().setSelectionRange({
                        start: o,
                        end: r
                    })
                }, t.prototype.getIndexByRowColumn = function(e, t) {
                    return this.getLastColumnIndices()[e] - this.getLastColumnIndex(e) + t
                }, t.prototype.init = function(e) {
                    var t = this,
                        o = function() {
                            if (void 0 === t.instance && t.aceExists()) {
                                var o = t.j.c.div("jodit-source__mirror-fake");
                                t.container.appendChild(o), t.instance = e.ow.ace.edit(o), t.instance.setTheme(e.o.sourceEditorNativeOptions.theme), t.instance.renderer.setShowGutter(e.o.sourceEditorNativeOptions.showGutter), t.instance.getSession().setMode(e.o.sourceEditorNativeOptions.mode), t.instance.setHighlightActiveLine(e.o.sourceEditorNativeOptions.highlightActiveLine), t.instance.getSession().setUseWrapMode(!0), t.instance.setOption("indentedSoftWrap", !1), t.instance.setOption("wrap", e.o.sourceEditorNativeOptions.wrap), t.instance.getSession().setUseWorker(!1), t.instance.$blockScrolling = 1 / 0, t.instance.on("change", t.toWYSIWYG), t.instance.on("focus", t.proxyOnFocus), t.instance.on("mousedown", t.proxyOnMouseDown), e.getRealMode() !== n.MODE_WYSIWYG && t.setValue(t.getValue());
                                var r = t.j.async.debounce((function() {
                                    e.isInDestruct || (t.instance.setOption("maxLines", "auto" !== e.o.height ? e.workplace.offsetHeight / t.instance.renderer.lineHeight : 1 / 0), t.instance.resize())
                                }), 2 * t.j.defaultTimeout);
                                e.e.on("afterResize afterSetMode", r), r(), t.onReady()
                            }
                        };
                    e.e.on("afterSetMode", (function() {
                        e.getRealMode() !== n.MODE_SOURCE && e.getMode() !== n.MODE_SPLIT || (t.fromWYSIWYG(), o())
                    })), o(), this.aceExists() || i.loadNext(e, e.o.sourceEditorCDNUrlsJS).then((function() {
                        e.isInDestruct || o()
                    }))
                }, t.prototype.destruct = function() {
                    var e, t;
                    this.instance.off("change", this.toWYSIWYG), this.instance.off("focus", this.proxyOnFocus), this.instance.off("mousedown", this.proxyOnMouseDown), this.instance.destroy(), null === (t = null === (e = this.j) || void 0 === e ? void 0 : e.events) || void 0 === t || t.off("aceInited.source")
                }, t.prototype.setValue = function(e) {
                    if (!this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
                        var t = this.j.e.fire("beautifyHTML", e);
                        i.isString(t) && (e = t)
                    }
                    this.instance.setValue(e), this.instance.clearSelection()
                }, t.prototype.getValue = function() {
                    return this.instance.getValue()
                }, t.prototype.setReadOnly = function(e) {
                    this.instance.setReadOnly(e)
                }, t.prototype.focus = function() {
                    this.instance.focus()
                }, t.prototype.getSelectionStart = function() {
                    var e = this.instance.selection.getRange();
                    return this.getIndexByRowColumn(e.start.row, e.start.column)
                }, t.prototype.getSelectionEnd = function() {
                    var e = this.instance.selection.getRange();
                    return this.getIndexByRowColumn(e.end.row, e.end.column)
                }, t.prototype.selectAll = function() {
                    this.instance.selection.selectAll()
                }, t.prototype.insertRaw = function(e) {
                    var t = this.instance.selection.getCursor(),
                        o = this.instance.session.insert(t, e);
                    this.instance.selection.setRange({
                        start: t,
                        end: o
                    }, !1)
                }, t.prototype.setSelectionRange = function(e, t) {
                    this.setSelectionRangeIndices(e, t)
                }, t.prototype.setPlaceHolder = function(e) {}, t.prototype.replaceUndoManager = function() {
                    var e = this.jodit.observer;
                    this.instance.commands.addCommand({
                        name: "Undo",
                        bindKey: {
                            win: "Ctrl-Z",
                            mac: "Command-Z"
                        },
                        exec: function() {
                            e.undo()
                        }
                    }), this.instance.commands.addCommand({
                        name: "Redo",
                        bindKey: {
                            win: "Ctrl-Shift-Z",
                            mac: "Command-Shift-Z"
                        },
                        exec: function() {
                            e.redo()
                        }
                    })
                }, t
            }(o(71).SourceEditor);
        t.AceEditor = a
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stat = void 0;
        var r = o(0),
            n = o(4),
            i = o(3),
            a = o(6),
            s = o(2);
        n.Config.prototype.showCharsCounter = !0, n.Config.prototype.countHTMLChars = !1, n.Config.prototype.showWordsCounter = !0;
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.charCounter = null, t.wordCounter = null, t.reInit = function() {
                    t.j.o.showCharsCounter && t.charCounter && t.j.statusbar.append(t.charCounter, !0), t.j.o.showWordsCounter && t.wordCounter && t.j.statusbar.append(t.wordCounter, !0), t.j.e.off("change keyup", t.calc).on("change keyup", t.calc), t.calc()
                }, t.calc = t.j.async.throttle((function() {
                    var e = t.j.text;
                    if (t.j.o.showCharsCounter && t.charCounter) {
                        var o = t.j.o.countHTMLChars ? t.j.value : e.replace(i.SPACE_REG_EXP(), "");
                        t.charCounter.textContent = t.j.i18n("Chars: %d", o.length)
                    }
                    t.j.o.showWordsCounter && t.wordCounter && (t.wordCounter.textContent = t.j.i18n("Words: %d", e.replace(i.INVISIBLE_SPACE_REG_EXP(), "").split(i.SPACE_REG_EXP()).filter((function(e) {
                        return e.length
                    })).length))
                }), t.j.defaultTimeout), t
            }
            return r.__extends(t, e), t.prototype.afterInit = function() {
                this.charCounter = this.j.c.span(), this.wordCounter = this.j.c.span(), this.j.e.on("afterInit changePlace afterAddPlace", this.reInit), this.reInit()
            }, t.prototype.beforeDestruct = function() {
                s.Dom.safeRemove(this.charCounter), s.Dom.safeRemove(this.wordCounter), this.j.e.off("afterInit changePlace afterAddPlace", this.reInit), this.charCounter = null, this.wordCounter = null
            }, t
        }(a.Plugin);
        t.stat = l
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sticky = void 0;
        var r = o(0);
        o(305);
        var n = o(4),
            i = o(3),
            a = o(10),
            s = o(1);
        n.Config.prototype.toolbarSticky = !0, n.Config.prototype.toolbarDisableStickyForMobile = !0, n.Config.prototype.toolbarStickyOffset = 0;
        var l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.isToolbarSticked = !1, t.createDummy = function(e) {
                    i.IS_IE && !t.dummyBox && (t.dummyBox = t.j.c.div(), t.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), t.j.container.insertBefore(t.dummyBox, e))
                }, t.addSticky = function(e) {
                    t.isToolbarSticked || (t.createDummy(e), t.j.container.classList.add("jodit_sticky"), t.isToolbarSticked = !0), s.css(e, {
                        top: t.j.o.toolbarStickyOffset || null,
                        width: t.j.container.offsetWidth - 2
                    }), i.IS_IE && t.dummyBox && s.css(t.dummyBox, {
                        height: e.offsetHeight
                    })
                }, t.removeSticky = function(e) {
                    t.isToolbarSticked && (s.css(e, {
                        width: "",
                        top: ""
                    }), t.j.container.classList.remove("jodit_sticky"), t.isToolbarSticked = !1)
                }, t
            }
            return r.__extends(t, e), t.prototype.isMobile = function() {
                return this.j && this.j.options && this.j.container && this.j.o.sizeSM >= this.j.container.offsetWidth
            }, t.prototype.afterInit = function(e) {
                var t = this;
                e.e.on(e.ow, "scroll wheel mousewheel resize", (function() {
                    var o = e.ow.pageYOffset || e.od.documentElement && e.od.documentElement.scrollTop || 0,
                        r = s.offset(e.container, e, e.od, !0),
                        n = e.getMode() === i.MODE_WYSIWYG && o + e.o.toolbarStickyOffset > r.top && r.top + r.height > o + e.o.toolbarStickyOffset && !(e.o.toolbarDisableStickyForMobile && t.isMobile());
                    if (e.o.toolbarSticky && !0 === e.o.toolbar) {
                        var a = e.toolbarContainer;
                        a && (n ? t.addSticky(a) : t.removeSticky(a))
                    }
                    e.e.fire("toggleSticky", n)
                }))
            }, t.prototype.beforeDestruct = function(e) {
                this.dummyBox && a.Dom.safeRemove(this.dummyBox)
            }, t
        }(a.Plugin);
        t.sticky = l
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.symbols = void 0;
        var r = o(0);
        o(307), o(308);
        var n = o(3),
            i = o(10),
            a = o(12),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.countInRow = 17, t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    var t = this;
                    e.e.on("generateSpecialCharactersTable.symbols", (function() {
                        for (var o = e.c.fromHTML('<div class="jodit-symbols__container"><div class="jodit-symbols__container_table"><table><tbody></tbody></table></div><div class="jodit-symbols__container_preview"><div class="jodit-symbols__preview"></div></div></div>'), r = o.querySelector(".jodit-symbols__preview"), s = o.querySelector("table").tBodies[0], l = [], c = 0; e.o.specialCharacters.length > c;) {
                            for (var u = e.c.element("tr"), d = 0; t.countInRow > d && e.o.specialCharacters.length > c; d += 1, c += 1) {
                                var p = e.c.element("td"),
                                    f = e.c.fromHTML('<a\n\t\t\t\t\t\t\t\t\tdata-index="' + c + '"\n\t\t\t\t\t\t\t\t\tdata-index-j="' + d + '"\n\t\t\t\t\t\t\t\t\thref="javascript:void(0)"\n\t\t\t\t\t\t\t\t\trole="option"\n\t\t\t\t\t\t\t\t\ttabindex="-1"\n\t\t\t\t\t\t\t>' + e.o.specialCharacters[c] + "</a>");
                                l.push(f), p.appendChild(f), u.appendChild(p)
                            }
                            s.appendChild(u)
                        }
                        var h = t;
                        return e.e.on(l, "focus", (function() {
                            r.innerHTML = this.innerHTML
                        })).on(l, "mousedown", (function(t) {
                            i.Dom.isTag(this, "a") && (e.s.focus(), e.s.insertHTML(this.innerHTML), e.e.fire(this, "close_dialog"), t && t.preventDefault(), t && t.stopImmediatePropagation())
                        })).on(l, "mouseenter", (function() {
                            i.Dom.isTag(this, "a") && this.focus()
                        })).on(l, "keydown", (function(t) {
                            var o = t.target;
                            if (i.Dom.isTag(o, "a")) {
                                var r = parseInt(a.attr(o, "-index") || "0", 10),
                                    s = parseInt(a.attr(o, "data-index-j") || "0", 10),
                                    c = void 0;
                                switch (t.key) {
                                    case n.KEY_UP:
                                    case n.KEY_DOWN:
                                        void 0 === l[c = t.key === n.KEY_UP ? r - h.countInRow : r + h.countInRow] && (c = t.key === n.KEY_UP ? Math.floor(l.length / h.countInRow) * h.countInRow + s : s) > l.length - 1 && (c -= h.countInRow), l[c] && l[c].focus();
                                        break;
                                    case n.KEY_RIGHT:
                                    case n.KEY_LEFT:
                                        void 0 === l[c = t.key === n.KEY_LEFT ? r - 1 : r + 1] && (c = t.key === n.KEY_LEFT ? l.length - 1 : 0), l[c] && l[c].focus();
                                        break;
                                    case n.KEY_ENTER:
                                        e.e.fire(o, "mousedown"), t.stopImmediatePropagation(), t.preventDefault()
                                }
                            }
                        })), o
                    }))
                }, t.prototype.beforeDestruct = function(e) {
                    e.e.off("generateSpecialCharactersTable.symbols")
                }, t
            }(i.Plugin);
        t.symbols = s
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(16);
        r.Config.prototype.usePopupForSpecialCharacters = !1, r.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], r.Config.prototype.controls.symbol = {
            icon: "omega",
            hotkeys: ["ctrl+shift+i", "cmd+shift+i"],
            tooltip: "Insert Special Character",
            popup: function(e, t, o, r) {
                var i = e.e.fire("generateSpecialCharactersTable.symbols");
                if (i) {
                    if (e.o.usePopupForSpecialCharacters) {
                        var a = e.c.div();
                        return a.classList.add("jodit-symbols"), a.appendChild(i), e.e.on(i, "close_dialog", r), a
                    }
                    n.Alert(i, e.i18n("Select Special Character"), void 0, "jodit-symbols").bindDestruct(e);
                    var s = i.querySelector("a");
                    s && s.focus()
                }
            }
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(0);
        o(310), r.__exportStar(o(311), t), r.__exportStar(o(313), t), r.__exportStar(o(314), t)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(2),
            i = o(12),
            a = o(1);
        r.Config.prototype.table = {
            allowCellSelection: !0,
            selectionCellStyle: "border: 1px double #1e88e5 !important;",
            allowCellResize: !0,
            useExtraClassesOptions: !1
        }, r.Config.prototype.controls.table = {
            data: {
                cols: 10,
                rows: 10,
                classList: {
                    "table table-bordered": "Bootstrap Bordered",
                    "table table-striped": "Bootstrap Striped",
                    "table table-dark": "Bootstrap Dark"
                }
            },
            popup: function(e, t, o, r, s) {
                for (var l = o.data && o.data.rows ? o.data.rows : 10, c = o.data && o.data.cols ? o.data.cols : 10, u = e.c.fromHTML('<form class="jodit-form jodit-form__inserter"><div class="jodit-form__table-creator-box"><div class="jodit-form__container"></div><div class="jodit-form__options">' + function() {
                        if (!e.o.table.useExtraClassesOptions) return "";
                        var t = [];
                        if (o.data) {
                            var r = o.data.classList;
                            Object.keys(r).forEach((function(e) {
                                t.push('<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="' + e + '" type="checkbox"/>' + r[e] + "</label>")
                            }))
                        }
                        return t.join("")
                    }() + '</div></div><label class="jodit-form__center"><span>1</span> &times; <span>1</span></label></form>'), d = u.querySelectorAll("span")[0], p = u.querySelectorAll("span")[1], f = u.querySelector(".jodit-form__container"), h = u.querySelector(".jodit-form__options"), m = [], v = l * c, g = 0; v > g; g += 1) m[g] || m.push(e.c.element("span", {
                    dataIndex: g
                }));
                if (e.e.on(f, "mousemove", (function(e, t) {
                        var o = e.target;
                        if (n.Dom.isTag(o, "span")) {
                            for (var r = void 0 === t || isNaN(t) ? parseInt(i.attr(o, "-index") || "0", 10) : t || 0, a = Math.ceil((r + 1) / c), s = r % c + 1, l = 0; m.length > l; l += 1) m[l].className = l % c + 1 > s || a < Math.ceil((l + 1) / c) ? "" : "jodit_hovered";
                            p.textContent = s.toString(), d.textContent = a.toString()
                        }
                    })).on(f, "touchstart mousedown", (function(t) {
                        var o = t.target;
                        if (t.preventDefault(), t.stopImmediatePropagation(), n.Dom.isTag(o, "span")) {
                            var s = parseInt(i.attr(o, "-index") || "0", 10),
                                l = Math.ceil((s + 1) / c),
                                u = s % c + 1,
                                d = e.createInside,
                                p = d.element("tbody"),
                                f = d.element("table");
                            f.appendChild(p), f.style.width = "100%";
                            for (var m, v, g = null, y = 1; l >= y; y += 1) {
                                m = d.element("tr");
                                for (var b = 1; u >= b; b += 1) v = d.element("td"), g || (g = v), v.appendChild(d.element("br")), m.appendChild(d.text("\n")), m.appendChild(d.text("\t")), m.appendChild(v);
                                p.appendChild(d.text("\n")), p.appendChild(m)
                            }
                            var _ = e.s.current();
                            if (_ && e.s.isCollapsed()) {
                                var w = n.Dom.closest(_, (function(t) {
                                    return n.Dom.isBlock(t, e.ew)
                                }), e.editor);
                                w && w !== e.editor && !w.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/) && e.s.setCursorAfter(w)
                            }
                            a.$$("input[type=checkbox]:checked", h).forEach((function(e) {
                                e.value.split(/[\s]+/).forEach((function(e) {
                                    f.classList.add(e)
                                }))
                            })), e.s.insertNode(d.text("\n")), e.s.insertNode(f, !1), g && (e.s.setCursorIn(g), a.scrollIntoView(g, e.editor, e.ed)), r()
                        }
                    })), s && s.parentElement) {
                    for (g = 0; l > g; g += 1) {
                        for (var y = e.c.div(), b = 0; c > b; b += 1) y.appendChild(m[g * c + b]);
                        f.appendChild(y)
                    }
                    m[0] && (m[0].className = "hovered")
                }
                return u
            },
            tooltip: "Insert table"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.resizeCells = void 0;
        var r = o(0);
        o(312);
        var n = o(8),
            i = o(3),
            a = o(10),
            s = o(1),
            l = "table_processor_observer-resize",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectMode = !1, t.resizeDelta = 0, t.createResizeHandle = function() {
                        t.resizeHandler || (t.resizeHandler = t.j.c.div("jodit-table-resizer"), t.j.e.on(t.resizeHandler, "mousedown.table touchstart.table", t.onHandleMouseDown).on(t.resizeHandler, "mouseenter.table", (function() {
                            t.j.async.clearTimeout(t.hideTimeout)
                        })))
                    }, t.hideTimeout = 0, t.drag = !1, t.minX = 0, t.maxX = 0, t.startX = 0, t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "module", {
                    get: function() {
                        return this.j.getInstance("Table", this.j.o)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isRTL", {
                    get: function() {
                        return "rtl" === this.j.o.direction
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.showResizeHandle = function() {
                    this.j.async.clearTimeout(this.hideTimeout), this.j.workplace.appendChild(this.resizeHandler)
                }, t.prototype.hideResizeHandle = function() {
                    var e = this;
                    this.hideTimeout = this.j.async.setTimeout((function() {
                        a.Dom.safeRemove(e.resizeHandler)
                    }), {
                        timeout: this.j.defaultTimeout,
                        label: "hideResizer"
                    })
                }, t.prototype.onHandleMouseDown = function(e) {
                    var t = this;
                    if (!this.j.isLocked) {
                        this.drag = !0, this.j.e.on(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.startX = e.clientX, this.j.lock(l), this.resizeHandler.classList.add("jodit-table-resizer_moved");
                        var o, r = this.workTable.getBoundingClientRect();
                        if (this.minX = 0, this.maxX = 1e6, null !== this.wholeTable) r = this.workTable.parentNode.getBoundingClientRect(), this.minX = r.left, this.maxX = this.minX + r.width;
                        else {
                            var n = a.Table.formalCoordinate(this.workTable, this.workCell, !0);
                            a.Table.formalMatrix(this.workTable, (function(e, r, a) {
                                n[1] === a && (o = e.getBoundingClientRect(), t.minX = Math.max(o.left + i.NEARBY / 2, t.minX)), n[1] + (t.isRTL ? -1 : 1) === a && (o = e.getBoundingClientRect(), t.maxX = Math.min(o.left + o.width - i.NEARBY / 2, t.maxX))
                            }))
                        }
                        return !1
                    }
                }, t.prototype.onMouseMove = function(e) {
                    if (this.drag) {
                        this.j.e.fire("closeAllPopups");
                        var t = e.clientX,
                            o = s.offset(this.resizeHandler.parentNode || this.j.od.documentElement, this.j, this.j.od, !0);
                        this.minX > t && (t = this.minX), t > this.maxX && (t = this.maxX), this.resizeDelta = t - this.startX + (this.j.o.iframe ? o.left : 0), this.resizeHandler.style.left = t - (this.j.o.iframe ? 0 : o.left) + "px";
                        var r = this.j.s.sel;
                        r && r.removeAllRanges(), e.preventDefault && e.preventDefault()
                    }
                }, t.prototype.onMouseUp = function(e) {
                    (this.selectMode || this.drag) && (this.selectMode = !1, this.j.unlock()), this.resizeHandler && this.drag && (this.drag = !1, this.j.e.off(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.resizeHandler.classList.remove("jodit-table-resizer_moved"), this.startX !== e.clientX && (null === this.wholeTable ? this.resizeColumns() : this.resizeTable()), this.j.setEditorValue(), this.j.s.focus())
                }, t.prototype.resizeColumns = function() {
                    var e = this,
                        t = this.resizeDelta,
                        o = [];
                    a.Table.setColumnWidthByDelta(this.workTable, a.Table.formalCoordinate(this.workTable, this.workCell, !0)[1], t, !0, o);
                    var r = s.call(this.isRTL ? a.Dom.prev : a.Dom.next, this.workCell, (function(t) {
                        return a.Dom.isCell(t, e.j.ew)
                    }), this.workCell.parentNode);
                    a.Table.setColumnWidthByDelta(this.workTable, a.Table.formalCoordinate(this.workTable, r)[1], -t, !1, o)
                }, t.prototype.resizeTable = function() {
                    var e = this.resizeDelta * (this.isRTL ? -1 : 1),
                        t = this.workTable.offsetWidth,
                        o = s.getContentWidth(this.workTable.parentNode, this.j.ew),
                        r = !this.wholeTable;
                    if (this.isRTL ? !r : r) this.workTable.style.width = (t + e) / o * 100 + "%";
                    else {
                        var n = this.isRTL ? "marginRight" : "marginLeft",
                            i = parseInt(this.j.ew.getComputedStyle(this.workTable)[n] || "0", 10);
                        this.workTable.style.width = (t - e) / o * 100 + "%", this.workTable.style[n] = (i + e) / o * 100 + "%"
                    }
                }, t.prototype.setWorkCell = function(e, t) {
                    void 0 === t && (t = null), this.wholeTable = t, this.workCell = e, this.workTable = a.Dom.up(e, (function(e) {
                        return a.Dom.isTag(e, "table")
                    }), this.j.editor)
                }, t.prototype.calcHandlePosition = function(e, t, o, r) {
                    var n = this;
                    void 0 === o && (o = 0), void 0 === r && (r = 0);
                    var l = s.offset(t, this.j, this.j.ed);
                    if (o > i.NEARBY && l.width - i.NEARBY > o) this.hideResizeHandle();
                    else {
                        var c = s.offset(this.j.workplace, this.j, this.j.od, !0),
                            u = s.offset(e, this.j, this.j.ed);
                        if (this.resizeHandler.style.left = (o > i.NEARBY ? l.left + l.width : l.left) - c.left + r + "px", Object.assign(this.resizeHandler.style, {
                                height: u.height + "px",
                                top: u.top - c.top + "px"
                            }), this.showResizeHandle(), o > i.NEARBY) {
                            var d = s.call(this.isRTL ? a.Dom.prev : a.Dom.next, t, (function(e) {
                                return a.Dom.isCell(e, n.j.ew)
                            }), t.parentNode);
                            this.setWorkCell(t, !!d && null)
                        } else {
                            var p = s.call(this.isRTL ? a.Dom.next : a.Dom.prev, t, (function(e) {
                                return a.Dom.isCell(e, n.j.ew)
                            }), t.parentNode);
                            this.setWorkCell(p || t, !p || null)
                        }
                    }
                }, t.prototype.afterInit = function(e) {
                    var t = this;
                    e.o.table.allowCellResize && e.e.off(this.j.ow, ".resize-cells").off(".resize-cells").on("change.resize-cells afterCommand.resize-cells afterSetMode.resize-cells", (function() {
                        s.$$("table", e.editor).forEach(t.observe)
                    })).on(this.j.ow, "mouseup.resize-cells touchend.resize-cells", this.onMouseUp).on(this.j.ow, "scroll.resize-cells", (function() {
                        if (t.drag) {
                            var o = a.Dom.up(t.workCell, (function(e) {
                                return a.Dom.isTag(e, "table")
                            }), e.editor);
                            if (o) {
                                var r = o.getBoundingClientRect();
                                t.resizeHandler.style.top = r.top + "px"
                            }
                        }
                    })).on("beforeSetMode.resize-cells", (function() {
                        t.module.getAllSelectedCells().forEach((function(o) {
                            t.module.removeSelection(o), a.Table.normalizeTable(a.Dom.closest(o, "table", e.editor))
                        }))
                    }))
                }, t.prototype.observe = function(e) {
                    var t = this;
                    s.dataBind(e, l) || (s.dataBind(e, l, !0), this.j.e.on(e, "mouseleave.resize-cells", (function(e) {
                        t.resizeHandler && t.resizeHandler !== e.relatedTarget && t.hideResizeHandle()
                    })).on(e, "mousemove.resize-cells touchmove.resize-cells", (function(o) {
                        if (!t.j.isLocked) {
                            var r = a.Dom.up(o.target, (function(e) {
                                return a.Dom.isCell(e, t.j.ew)
                            }), e);
                            r && t.calcHandlePosition(e, r, o.offsetX)
                        }
                    })), this.createResizeHandle())
                }, t.prototype.beforeDestruct = function(e) {
                    e.events && (e.e.off(this.j.ow, ".resize-cells"), e.e.off(".resize-cells"))
                }, r.__decorate([n.default], t.prototype, "onHandleMouseDown", null), r.__decorate([n.default], t.prototype, "onMouseMove", null), r.__decorate([n.default], t.prototype, "onMouseUp", null), r.__decorate([n.default], t.prototype, "observe", null), t
            }(a.Plugin);
        t.resizeCells = c
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.selectCells = void 0;
        var r = o(0),
            n = o(8),
            i = o(6),
            a = o(10),
            s = o(1),
            l = o(70),
            c = o(3),
            u = "table_processor_observer",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectedCell = null, t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "module", {
                    get: function() {
                        return this.j.getInstance("Table", this.j.o)
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.afterInit = function(e) {
                    var t = this;
                    e.o.table.allowCellSelection && e.e.on(this.j.ow, "click.select-cells", this.onRemoveSelection).on("keydown.select-cells", (function(e) {
                        e.key === c.KEY_TAB && t.unselectCells()
                    })).on("beforeCommand.select-cells", this.onExecCommand).on("afterCommand.select-cells", this.onAfterCommand).on("change afterCommand afterSetMode click".split(" ").map((function(e) {
                        return e + ".select-cells"
                    })).join(" "), (function() {
                        s.$$("table", e.editor).forEach(t.observe)
                    }))
                }, t.prototype.observe = function(e) {
                    s.dataBind(e, u) || (this.onRemoveSelection(), s.dataBind(e, u, !0), this.j.e.on(e, "mousedown.select-cells touchstart.select-cells", this.onStartSelection.bind(this, e)).on(e, "mouseup.select-cells touchend.select-cells", this.onStopSelection.bind(this, e)))
                }, t.prototype.onStartSelection = function(e, t) {
                    var o = this;
                    if (!this.j.o.readonly) {
                        this.unselectCells();
                        var r = a.Dom.closest(t.target, ["td", "th"], e);
                        r && (r.firstChild || r.appendChild(this.j.createInside.element("br")), this.selectedCell = r, this.module.addSelection(r), this.j.e.on(e, "mousemove.select-cells touchmove.select-cells", this.onMove.bind(this, e)), this.j.e.fire("showPopup", e, (function() {
                            return s.position(r, o.j)
                        }), "cells"))
                    }
                }, t.prototype.onMove = function(e, t) {
                    var o = this;
                    if (!this.j.o.readonly && !this.j.isLockedNotBy(u)) {
                        var r = this.j.ed.elementFromPoint(t.clientX, t.clientY);
                        if (r) {
                            var n = a.Dom.closest(r, ["td", "th"], e);
                            if (n && this.selectedCell) {
                                n !== this.selectedCell && this.j.lock(u), this.unselectCells(e);
                                for (var i, s = a.Table.getSelectedBound(e, [n, this.selectedCell]), l = a.Table.formalMatrix(e), c = s[0][0]; s[1][0] >= c; c += 1)
                                    for (var d = s[0][1]; s[1][1] >= d; d += 1) this.module.addSelection(l[c][d]);
                                this.j.e.fire("hidePopup"), t.stopPropagation(), i = o.j.createInside.fromHTML('<div style="color:rgba(0,0,0,0.01);width:0;height:0">&nbsp;</div>'), n.appendChild(i), o.j.async.setTimeout((function() {
                                    var e;
                                    null === (e = i.parentNode) || void 0 === e || e.removeChild(i)
                                }), o.j.defaultTimeout / 5)
                            }
                        }
                    }
                }, t.prototype.onRemoveSelection = function(e) {
                    var t;
                    if (!(null === (t = null == e ? void 0 : e.buffer) || void 0 === t ? void 0 : t.actionTrigger) && !this.selectedCell && this.module.getAllSelectedCells().length) return this.j.unlock(), this.unselectCells(), void this.j.e.fire("hidePopup");
                    this.selectedCell = null
                }, t.prototype.onStopSelection = function(e, t) {
                    var o = this;
                    if (this.selectedCell) {
                        this.j.unlock();
                        var r = this.j.ed.elementFromPoint(t.clientX, t.clientY);
                        if (r) {
                            var n = a.Dom.closest(r, ["td", "th"], e);
                            if (n) {
                                var i = a.Dom.closest(n, "table", e);
                                if (!i || i === e) {
                                    var l = a.Table.getSelectedBound(e, [n, this.selectedCell]),
                                        c = a.Table.formalMatrix(e),
                                        u = c[l[1][0]][l[1][1]],
                                        d = c[l[0][0]][l[0][1]];
                                    this.j.e.fire("showPopup", e, (function() {
                                        var e = s.position(d, o.j),
                                            t = s.position(u, o.j);
                                        return {
                                            left: e.left,
                                            top: e.top,
                                            width: t.left - e.left + t.width,
                                            height: t.top - e.top + t.height
                                        }
                                    }), "cells"), s.$$("table", this.j.editor).forEach((function(e) {
                                        o.j.e.off(e, "mousemove.select-cells touchmove.select-cells")
                                    }))
                                }
                            }
                        }
                    }
                }, t.prototype.unselectCells = function(e, t) {
                    var o = this.module,
                        r = o.getAllSelectedCells();
                    r.length && r.forEach((function(e) {
                        t && t === e || o.removeSelection(e)
                    }))
                }, t.prototype.onExecCommand = function(e) {
                    if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e)) {
                        e = e.replace("table", "");
                        var t = this.module.getAllSelectedCells();
                        if (t.length) {
                            var o = t.shift();
                            if (!o) return;
                            var r = a.Dom.closest(o, "table", this.j.editor);
                            if (!r) return;
                            switch (e) {
                                case "splitv":
                                    a.Table.splitVertical(r, this.j);
                                    break;
                                case "splitg":
                                    a.Table.splitHorizontal(r, this.j);
                                    break;
                                case "merge":
                                    a.Table.mergeSelected(r, this.j);
                                    break;
                                case "empty":
                                    t.forEach((function(e) {
                                        return e.innerHTML = ""
                                    }));
                                    break;
                                case "bin":
                                    a.Dom.safeRemove(r);
                                    break;
                                case "binrow":
                                    a.Table.removeRow(r, o.parentNode.rowIndex);
                                    break;
                                case "bincolumn":
                                    a.Table.removeColumn(r, o.cellIndex);
                                    break;
                                case "addcolumnafter":
                                case "addcolumnbefore":
                                    a.Table.appendColumn(r, o.cellIndex, "addcolumnafter" === e, this.j.createInside);
                                    break;
                                case "addrowafter":
                                case "addrowbefore":
                                    a.Table.appendRow(r, o.parentNode, "addrowafter" === e, this.j.createInside)
                            }
                        }
                        return !1
                    }
                }, t.prototype.onAfterCommand = function(e) {
                    var t = this;
                    /^justify/.test(e) && this.module.getAllSelectedCells().forEach((function(o) {
                        return l.alignElement(e, o, t.j)
                    }))
                }, t.prototype.beforeDestruct = function(e) {
                    this.onRemoveSelection(), e.e.off(".select-cells")
                }, r.__decorate([n.default], t.prototype, "observe", null), r.__decorate([n.default], t.prototype, "onRemoveSelection", null), r.__decorate([n.default], t.prototype, "onStopSelection", null), r.__decorate([n.default], t.prototype, "onExecCommand", null), r.__decorate([n.default], t.prototype, "onAfterCommand", null), t
            }(i.Plugin);
        t.selectCells = d
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tableKeyboardNavigation = void 0;
        var r = o(3),
            n = o(2),
            i = o(10);
        t.tableKeyboardNavigation = function(e) {
            e.e.off(".tableKeyboardNavigation").on("keydown.tableKeyboardNavigation", (function(t) {
                var o, a;
                if ((t.key === r.KEY_TAB || t.key === r.KEY_LEFT || t.key === r.KEY_RIGHT || t.key === r.KEY_UP || t.key === r.KEY_DOWN) && (o = e.s.current(), a = n.Dom.up(o, (function(e) {
                        return e && e.nodeName && /^td|th$/i.test(e.nodeName)
                    }), e.editor))) {
                    var s = e.s.range;
                    if (t.key === r.KEY_TAB || o === a || (t.key !== r.KEY_LEFT && t.key !== r.KEY_UP || !(n.Dom.prev(o, (function(e) {
                            return t.key === r.KEY_UP ? n.Dom.isTag(e, "br") : !!e
                        }), a) || t.key !== r.KEY_UP && n.Dom.isText(o) && 0 !== s.startOffset)) && (t.key !== r.KEY_RIGHT && t.key !== r.KEY_DOWN || !(n.Dom.next(o, (function(e) {
                            return t.key === r.KEY_DOWN ? n.Dom.isTag(e, "br") : !!e
                        }), a) || t.key !== r.KEY_DOWN && n.Dom.isText(o) && o.nodeValue && s.startOffset !== o.nodeValue.length))) {
                        var l = n.Dom.up(a, (function(e) {
                                return e && /^table$/i.test(e.nodeName)
                            }), e.editor),
                            c = null;
                        switch (t.key) {
                            case r.KEY_TAB:
                            case r.KEY_LEFT:
                                var u = t.key === r.KEY_LEFT || t.shiftKey ? "prev" : "next";
                                (c = n.Dom[u](a, (function(e) {
                                    return e && /^td|th$/i.test(e.tagName)
                                }), l)) || (i.Table.appendRow(l, "next" !== u && l.querySelector("tr"), "next" === u, e.createInside), c = n.Dom[u](a, (function(t) {
                                    return t && n.Dom.isCell(t, e.ew)
                                }), l));
                                break;
                            case r.KEY_UP:
                            case r.KEY_DOWN:
                                var d = 0,
                                    p = 0,
                                    f = i.Table.formalMatrix(l, (function(e, t, o) {
                                        e === a && (d = t, p = o)
                                    }));
                                t.key === r.KEY_UP ? void 0 !== f[d - 1] && (c = f[d - 1][p]) : void 0 !== f[d + 1] && (c = f[d + 1][p])
                        }
                        if (c) {
                            if (c.firstChild) t.key === r.KEY_TAB ? e.s.select(c, !0) : e.s.setCursorIn(c, t.key === r.KEY_RIGHT || t.key === r.KEY_DOWN);
                            else {
                                var h = e.createInside.element("br");
                                c.appendChild(h), e.s.setCursorBefore(h)
                            }
                            return !1
                        }
                    }
                }
            }))
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tooltip = void 0;
        var r = o(0);
        o(316);
        var n = o(8),
            i = o(1),
            a = o(6),
            s = o(2),
            l = o(11),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isOpened = !1, t.delayShowTimeout = 0, t
                }
                return r.__extends(t, e), t.prototype.afterInit = function(e) {
                    var o = this;
                    this.container = e.c.div("jodit-tooltip"), l.getContainer(this.j, t).appendChild(this.container);
                    var r = 0;
                    e.e.off(".tooltip").on("showTooltip.tooltip", (function(t, n) {
                        e.async.clearTimeout(r), o.open(t, n)
                    })).on("delayShowTooltip.tooltip", this.delayOpen).on("escape.tooltip", this.close).on("hideTooltip.tooltip change.tooltip scroll.tooltip changePlace.tooltip hidePopup.tooltip closeAllPopups.tooltip", (function() {
                        o.j.async.clearTimeout(o.delayShowTimeout), r = e.async.setTimeout(o.close, o.j.defaultTimeout)
                    }))
                }, t.prototype.delayOpen = function(e, t) {
                    var o = this,
                        r = this.j.o.showTooltipDelay || this.j.defaultTimeout;
                    this.j.async.clearTimeout(this.delayShowTimeout), this.delayShowTimeout = this.j.async.setTimeout((function() {
                        return o.open(e, t)
                    }), {
                        timeout: r,
                        label: "tooltip"
                    })
                }, t.prototype.open = function(e, t) {
                    this.container.classList.add("jodit-tooltip_visible"), this.container.innerHTML = t, this.isOpened = !0, this.setPosition(e)
                }, t.prototype.setPosition = function(e) {
                    var t = e();
                    i.css(this.container, {
                        left: t.x,
                        top: t.y
                    })
                }, t.prototype.close = function() {
                    this.j.async.clearTimeout(this.delayShowTimeout), this.isOpened && (this.isOpened = !1, this.container.classList.remove("jodit-tooltip_visible"), i.css(this.container, {
                        left: -5e3
                    }))
                }, t.prototype.beforeDestruct = function(e) {
                    null == e || e.e.off(".tooltip"), this.close(), s.Dom.safeRemove(this.container)
                }, r.__decorate([n.default], t.prototype, "delayOpen", null), r.__decorate([n.default], t.prototype, "close", null), t
            }(a.Plugin);
        t.tooltip = c
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(318)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(17),
            i = o(1),
            a = o(36),
            s = o(15);
        r.Config.prototype.controls.video = {
            popup: function(e, t, o, r) {
                var l = new a.UIForm(e, [new a.UIBlock(e, [new a.UIInput(e, {
                        name: "url",
                        required: !0,
                        label: "URL",
                        placeholder: "https://",
                        validators: ["url"]
                    })]), new a.UIBlock(e, [s.Button(e, "", "Insert", "primary").onAction((function() {
                        return l.submit()
                    }))])]),
                    c = new a.UIForm(e, [new a.UIBlock(e, [new a.UITextArea(e, {
                        name: "code",
                        required: !0,
                        label: "Embed code"
                    })]), new a.UIBlock(e, [s.Button(e, "", "Insert", "primary").onAction((function() {
                        return c.submit()
                    }))])]),
                    u = [],
                    d = e.s.save(),
                    p = function(t) {
                        e.s.restore(d), e.s.insertHTML(t), r()
                    };
                return u.push({
                    icon: "link",
                    name: "Link",
                    content: l.container
                }, {
                    icon: "source",
                    name: "Code",
                    content: c.container
                }), l.onSubmit((function(e) {
                    p(i.convertMediaUrlToVideoEmbed(e.url))
                })), c.onSubmit((function(e) {
                    p(e.code)
                })), n.TabsWidget(e, u)
            },
            tags: ["iframe"],
            tooltip: "Insert youtube/vimeo video"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o(320)
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(4),
            n = o(1),
            i = o(11),
            a = o(2),
            s = o(3);
        r.Config.prototype.controls.print = {
            exec: function(e) {
                var t = e.create.element("iframe");
                Object.assign(t.style, {
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0,
                    border: 0
                }), i.getContainer(e, r.Config).appendChild(t);
                var o = function() {
                        e.e.off(e.ow, "mousemove", o), a.Dom.safeRemove(t)
                    },
                    s = t.contentWindow;
                s && (e.e.on(s, "onbeforeunload onafterprint", o).on(e.ow, "mousemove", o), e.o.iframe ? (e.e.fire("generateDocumentStructure.iframe", s.document, e), s.document.body.innerHTML = e.value) : (s.document.write('<!doctype html><html lang="' + n.defaultLanguage(e.o.language) + '"><head><title></title></head><body>' + e.value + "</body></html>"), s.document.close()), s.focus(), s.print())
            },
            mode: s.MODE_SOURCE + s.MODE_WYSIWYG,
            tooltip: "Print"
        }, r.Config.prototype.controls.preview = {
            icon: "eye",
            exec: function(e) {
                var t = e.getInstance("Dialog", {
                        language: e.o.language,
                        theme: e.o.theme
                    }),
                    o = e.c.div();
                if (n.css(o, {
                        padding: 16
                    }), e.iframe) {
                    var r = e.create.element("iframe");
                    n.css(r, {
                        minWidth: 800,
                        minHeight: 600,
                        border: 0
                    }), o.appendChild(r), t.open(o, e.i18n("Preview"));
                    var i = r.contentWindow;
                    i && (e.e.fire("generateDocumentStructure.iframe", i.document, e), i.document.body.innerHTML = e.value)
                } else o.innerHTML = e.value, t.open(o, e.i18n("Preview"));
                t.setModal(!0)
            },
            mode: s.MODE_SOURCE + s.MODE_WYSIWYG,
            tooltip: "Preview"
        }
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.xpath = void 0;
        var r = o(0);
        o(322);
        var n = o(4),
            i = o(3),
            a = o(10),
            s = o(2),
            l = o(1),
            c = o(6),
            u = o(18);
        n.Config.prototype.controls.selectall = {
            icon: "select-all",
            command: "selectall",
            tooltip: "Select all"
        }, n.Config.prototype.showXPathInStatusbar = !0;
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onContext = function(e, o) {
                    return t.menu || (t.menu = new a.ContextMenu(t.j)), t.menu.show(o.clientX, o.clientY, [{
                        icon: "bin",
                        title: e === t.j.editor ? "Clear" : "Remove",
                        exec: function() {
                            e !== t.j.editor ? s.Dom.safeRemove(e) : t.j.value = "", t.j.setEditorValue()
                        }
                    }, {
                        icon: "select-all",
                        title: "Select",
                        exec: function() {
                            t.j.s.select(e)
                        }
                    }]), !1
                }, t.onSelectPath = function(e, o) {
                    t.j.s.focus();
                    var r = l.attr(o.target, "-path") || "/";
                    if ("/" === r) return t.j.execCommand("selectall"), !1;
                    try {
                        var n = t.j.ed.evaluate(r, t.j.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                        if (n) return t.j.s.select(n), !1
                    } catch (e) {}
                    return t.j.s.select(e), !1
                }, t.tpl = function(e, o, r, n) {
                    var i = t.j.c.fromHTML('<span class="jodit-xpath__item"><a role="button" data-path="' + o + '" href="javascript:void(0)" title="' + n + '" tabindex="-1"\'>' + l.trim(r) + "</a></span>"),
                        a = i.firstChild;
                    return t.j.e.on(a, "click", t.onSelectPath.bind(t, e)).on(a, "contextmenu", t.onContext.bind(t, e)), i
                }, t.removeSelectAll = function() {
                    t.selectAllButton && (t.selectAllButton.destruct(), delete t.selectAllButton)
                }, t.appendSelectAll = function() {
                    t.removeSelectAll(), t.selectAllButton = u.makeButton(t.j, r.__assign({
                        name: "selectall"
                    }, t.j.o.controls.selectall)), t.selectAllButton.state.size = "tiny", t.container && t.container.insertBefore(t.selectAllButton.container, t.container.firstChild)
                }, t.calcPathImd = function() {
                    if (!t.isDestructed) {
                        var e, o, r, n = t.j.s.current();
                        t.container && (t.container.innerHTML = i.INVISIBLE_SPACE), n && s.Dom.up(n, (function(n) {
                            n && t.j.editor !== n && !s.Dom.isText(n) && (e = n.nodeName.toLowerCase(), o = l.getXPathByElement(n, t.j.editor).replace(/^\//, ""), r = t.tpl(n, o, e, t.j.i18n("Select %s", e)), t.container && t.container.insertBefore(r, t.container.firstChild))
                        }), t.j.editor), t.appendSelectAll()
                    }
                }, t.calcPath = t.j.async.debounce(t.calcPathImd, 2 * t.j.defaultTimeout), t
            }
            return r.__extends(t, e), t.prototype.afterInit = function() {
                var e = this;
                this.j.o.showXPathInStatusbar && (this.container = this.j.c.div("jodit-xpath"), this.j.e.off(".xpath").on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath", this.calcPath).on("afterSetMode.xpath afterInit.xpath changePlace.xpath", (function() {
                    e.j.o.showXPathInStatusbar && e.container && (e.j.statusbar.append(e.container), e.j.getRealMode() === i.MODE_WYSIWYG ? e.calcPath() : (e.container && (e.container.innerHTML = i.INVISIBLE_SPACE), e.appendSelectAll()))
                })), this.calcPath())
            }, t.prototype.beforeDestruct = function() {
                this.j && this.j.events && this.j.e.off(".xpath"), this.removeSelectAll(), this.menu && this.menu.destruct(), s.Dom.safeRemove(this.container), delete this.menu, delete this.container
            }, t
        }(c.Plugin);
        t.xpath = d
    }, function(e, t, o) {}, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.video = t.valign = t.upload = t.update = t.unlock = t.unlink = t.undo = t.underline = t.ul = t.th_list = t.th = t.table = t.superscript = t.subscript = t.strikethrough = t.splitv = t.splitg = t.source = t.shrink = t.select_all = t.search = t.save = t.right = t.resizer = t.resize = t.redo = t.print = t.plus = t.pencil = t.paste = t.paragraph = t.palette = t.outdent = t.omega = t.ol = t.ok = t.merge = t.menu = t.lock = t.link = t.left = t.justify = t.italic = t.info_circle = t.indent = t.image = t.hr = t.fullsize = t.fontsize = t.font = t.folder = t.file = t.eye = t.eraser = t.enter = t.chevron = t.dots = t.dedent = t.cut = t.crop = t.copy = t.copyformat = t.check_square = t.check = t.chain_broken = t.center = t.cancel = t.brush = t.bold = t.bin = t.attachment = t.arrows_h = t.arrows_alt = t.angle_up = t.angle_right = t.angle_left = t.angle_down = t.addrow = t.addcolumn = t.about = void 0;
        var r = o(324);
        t.about = r;
        var n = o(325);
        t.addcolumn = n;
        var i = o(326);
        t.addrow = i;
        var a = o(327);
        t.angle_down = a;
        var s = o(328);
        t.angle_left = s;
        var l = o(329);
        t.angle_right = l;
        var c = o(330);
        t.angle_up = c;
        var u = o(331);
        t.arrows_alt = u;
        var d = o(332);
        t.arrows_h = d;
        var p = o(333);
        t.attachment = p;
        var f = o(334);
        t.bin = f;
        var h = o(335);
        t.bold = h;
        var m = o(336);
        t.brush = m;
        var v = o(337);
        t.cancel = v;
        var g = o(338);
        t.center = g;
        var y = o(339);
        t.chain_broken = y;
        var b = o(340);
        t.check = b;
        var _ = o(341);
        t.check_square = _;
        var w = o(342);
        t.chevron = w;
        var S = o(343);
        t.copyformat = S;
        var C = o(344);
        t.crop = C;
        var j = o(345);
        t.copy = j;
        var k = o(346);
        t.cut = k;
        var E = o(347);
        t.dedent = E;
        var x = o(348);
        t.dots = x;
        var I = o(349);
        t.enter = I;
        var T = o(350);
        t.eraser = T;
        var P = o(351);
        t.eye = P;
        var D = o(352);
        t.file = D;
        var z = o(353);
        t.folder = z;
        var A = o(354);
        t.font = A;
        var M = o(355);
        t.fontsize = M;
        var L = o(356);
        t.fullsize = L;
        var O = o(357);
        t.hr = O;
        var R = o(358);
        t.image = R;
        var B = o(359);
        t.indent = B;
        var q = o(360);
        t.info_circle = q;
        var N = o(361);
        t.italic = N;
        var H = o(362);
        t.justify = H;
        var F = o(363);
        t.left = F;
        var U = o(364);
        t.link = U;
        var W = o(365);
        t.lock = W;
        var V = o(366);
        t.menu = V;
        var Y = o(367);
        t.merge = Y;
        var K = o(368);
        t.ok = K;
        var G = o(369);
        t.ol = G;
        var J = o(370);
        t.omega = J;
        var X = o(371);
        t.outdent = X;
        var $ = o(372);
        t.palette = $;
        var Z = o(373);
        t.paragraph = Z;
        var Q = o(374);
        t.paste = Q;
        var ee = o(375);
        t.pencil = ee;
        var te = o(376);
        t.plus = te;
        var oe = o(377);
        t.print = oe;
        var re = o(378);
        t.redo = re;
        var ne = o(379);
        t.resize = ne;
        var ie = o(380);
        t.resizer = ie;
        var ae = o(381);
        t.right = ae;
        var se = o(382);
        t.save = se;
        var le = o(383);
        t.search = le;
        var ce = o(384);
        t.select_all = ce;
        var ue = o(385);
        t.shrink = ue;
        var de = o(386);
        t.source = de;
        var pe = o(387);
        t.splitg = pe;
        var fe = o(388);
        t.splitv = fe;
        var he = o(389);
        t.strikethrough = he;
        var me = o(390);
        t.subscript = me;
        var ve = o(391);
        t.superscript = ve;
        var ge = o(392);
        t.table = ge;
        var ye = o(393);
        t.th = ye;
        var be = o(394);
        t.th_list = be;
        var _e = o(395);
        t.ul = _e;
        var we = o(396);
        t.underline = we;
        var Se = o(397);
        t.undo = Se;
        var Ce = o(398);
        t.unlink = Ce;
        var je = o(399);
        t.unlock = je;
        var ke = o(400);
        t.update = ke;
        var Ee = o(401);
        t.upload = Ee;
        var xe = o(402);
        t.valign = xe;
        var Ie = o(403);
        t.video = Ie
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 18.151 18.151" xmlns="http://www.w3.org/2000/svg"> <g> <g> <path stroke-width="0" d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/> <path stroke-width="0" d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/> <polygon stroke-width="0" points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "/> </g> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 432 432"> <g> <g> <polygon points="203.688,96 0,96 0,144 155.688,144 "/> <polygon points="155.719,288 0,288 0,336 203.719,336 "/> <rect x="252" y="96"/> <rect/> <rect x="252" y="288"/> <rect y="384"/> <path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"/> <polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 "/> </g> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <g stroke="none" stroke-width="1"> <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"/> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 10 10"> <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 16 16"> <path stroke-width="0" d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z"/> <path d="M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 24 24" > <circle cx="12" cy="12" r="2.2"/> <circle cx="12" cy="5" r="2.2"/> <circle cx="12" cy="19" r="2.2"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 128 128" xml:space="preserve"> <g> <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125 "/> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 24 24" > <path stroke-width="0" d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 312 312"> <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"/> <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"/> <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/> <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"/> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 32 32"> <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 270 270"> <path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' x="0px" y="0px" viewBox="0 0 459 459"> <g> <g> <path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z" /> </g> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path stroke-width="0" d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 24 24" > <g> <g transform="translate(-251.000000, -443.000000)"> <g transform="translate(215.000000, 119.000000)"/> <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/> </g> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/> </svg> '
    }, function(e, t) {
        e.exports = '<?xml version="1.0" ?> <svg viewBox="0 0 500 500" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path clip-rule="evenodd" d="M306.39,154.09c19.628,4.543,35.244,21.259,39.787,39.523 c1.551,8.54,8.998,14.989,17.904,14.989c9.991,0,18.168-8.175,18.168-18.17c0-13.083-10.991-32.98-25.985-47.881 c-14.719-14.537-32.252-24.802-46.695-24.802c-9.991,0-18.172,8.45-18.172,18.446C291.396,145.094,297.847,152.546,306.39,154.09z M56.629,392.312c-14.09,14.08-14.09,36.979,0,51.059c14.08,14.092,36.981,14.092,50.965,0l104.392-104.303 c24.347,15.181,53.062,23.991,83.953,23.991c87.857,0,158.995-71.142,158.995-158.999c0-87.854-71.138-158.995-158.995-158.995 c-87.856,0-158.995,71.141-158.995,158.995c0,30.802,8.819,59.606,23.992,83.953L56.629,392.312z M182.371,204.06 c0-62.687,50.875-113.568,113.568-113.568s113.569,50.881,113.569,113.568c0,62.694-50.876,113.569-113.569,113.569 S182.371,266.754,182.371,204.06z" fill-rule="evenodd"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 18 18"> <g fill-rule="evenodd" stroke="none" stroke-width="1"> <g transform="translate(-381.000000, -381.000000)"> <g transform="translate(381.000000, 381.000000)"> <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/> </g> </g> </g> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 48 48"> <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/><path d="M0 0h48v48h-48z" fill="none"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 48 48"> <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/> </svg> '
    }, function(e, t) {
        e.exports = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox="0 0 1792 1792"> <path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/> </svg> '
    }, function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.keepModuleNames = void 0;
        var r = o(12);
        t.keepModuleNames = function(e) {
            r.keepNames.set(e.UIButton, "UIButton"), r.keepNames.set(e.UIElement, "UIElement"), r.keepNames.set(e.UISeparator, "UISeparator"), r.keepNames.set(e.UIList, "UIList"), r.keepNames.set(e.UIGroup, "UIGroup"), r.keepNames.set(e.UIForm, "UIForm"), r.keepNames.set(e.UIInput, "UIInput"), r.keepNames.set(e.UITextArea, "UITextArea"), r.keepNames.set(e.UICheckbox, "UICheckbox"), r.keepNames.set(e.UIBlock, "UIBlock"), r.keepNames.set(e.Popup, "Popup"), r.keepNames.set(e.ContextMenu, "ContextMenu"), r.keepNames.set(e.ToolbarButton, "ToolbarButton"), r.keepNames.set(e.ToolbarContent, "ToolbarContent"), r.keepNames.set(e.ToolbarCollection, "ToolbarCollection"), r.keepNames.set(e.ToolbarEditorCollection, "ToolbarEditorCollection"), r.keepNames.set(e.Component, "Component"), r.keepNames.set(e.Table, "Table"), r.keepNames.set(e.Uploader, "Uploader"), r.keepNames.set(e.FileBrowser, "FileBrowser")
        }
    }])
}));