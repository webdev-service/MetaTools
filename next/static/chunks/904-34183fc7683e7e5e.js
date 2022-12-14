(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [904], {
        1551: function (t, e, n) {
            "use strict";

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(l = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); l = !0);
                        } catch (s) {
                            a = !0, o = s
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i, l = (i = n(7294)) && i.__esModule ? i : {
                    default: i
                },
                a = n(1003),
                s = n(880),
                u = n(9246);

            function f(t, e) {
                if (null == t) return {};
                var n, r, o = function (t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }
            var c = {};

            function h(t, e, n, r) {
                if (t && a.isLocalURL(e)) {
                    t.prefetch(e, n, r).catch((function (t) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
                    c[e + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var p = l.default.forwardRef((function (t, e) {
                var n, r = t.legacyBehavior,
                    i = void 0 === r ? !0 !== Boolean(!1) : r,
                    p = t.href,
                    d = t.as,
                    y = t.children,
                    g = t.prefetch,
                    w = t.passHref,
                    m = t.replace,
                    v = t.shallow,
                    b = t.scroll,
                    x = t.locale,
                    A = t.onClick,
                    S = t.onMouseEnter,
                    k = f(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter"]);
                n = y, i && "string" === typeof n && (n = l.default.createElement("a", null, n));
                var E, O = !1 !== g,
                    C = s.useRouter(),
                    T = l.default.useMemo((function () {
                        var t = o(a.resolveHref(C, p, !0), 2),
                            e = t[0],
                            n = t[1];
                        return {
                            href: e,
                            as: d ? a.resolveHref(C, d) : n || e
                        }
                    }), [C, p, d]),
                    j = T.href,
                    R = T.as,
                    z = l.default.useRef(j),
                    H = l.default.useRef(R);
                i && (E = l.default.Children.only(n));
                var P = i ? E && "object" === typeof E && E.ref : e,
                    L = o(u.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    W = L[0],
                    I = L[1],
                    M = L[2],
                    q = l.default.useCallback((function (t) {
                        H.current === R && z.current === j || (M(), H.current = R, z.current = j), W(t), P && ("function" === typeof P ? P(t) : "object" === typeof P && (P.current = t))
                    }), [R, P, j, M, W]);
                l.default.useEffect((function () {
                    var t = I && O && a.isLocalURL(j),
                        e = "undefined" !== typeof x ? x : C && C.locale,
                        n = c[j + "%" + R + (e ? "%" + e : "")];
                    t && !n && h(C, j, R, {
                        locale: e
                    })
                }), [R, j, I, x, O, C]);
                var _ = {
                    ref: q,
                    onClick: function (t) {
                        i || "function" !== typeof A || A(t), i && E.props && "function" === typeof E.props.onClick && E.props.onClick(t), t.defaultPrevented || function (t, e, n, r, o, i, l, s) {
                            ("A" !== t.currentTarget.nodeName.toUpperCase() || ! function (t) {
                                var e = t.currentTarget.target;
                                return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                            }(t) && a.isLocalURL(n)) && (t.preventDefault(), e[o ? "replace" : "push"](n, r, {
                                shallow: i,
                                locale: s,
                                scroll: l
                            }))
                        }(t, C, j, R, m, v, b, x)
                    },
                    onMouseEnter: function (t) {
                        i || "function" !== typeof S || S(t), i && E.props && "function" === typeof E.props.onMouseEnter && E.props.onMouseEnter(t), a.isLocalURL(j) && h(C, j, R, {
                            priority: !0
                        })
                    }
                };
                if (!i || w || "a" === E.type && !("href" in E.props)) {
                    var B = "undefined" !== typeof x ? x : C && C.locale,
                        D = C && C.isLocaleDomain && a.getDomainLocale(R, B, C && C.locales, C && C.domainLocales);
                    _.href = D || a.addBasePath(a.addLocale(R, B, C && C.defaultLocale))
                }
                return i ? l.default.cloneElement(E, _) : l.default.createElement("a", Object.assign({}, k, _), n)
            }));
            e.default = p, ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        9246: function (t, e, n) {
            "use strict";

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(l = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); l = !0);
                        } catch (s) {
                            a = !0, o = s
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(t, e) || function (t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function (t) {
                var e = t.rootRef,
                    n = t.rootMargin,
                    r = t.disabled || !a,
                    f = i.useRef(),
                    c = o(i.useState(!1), 2),
                    h = c[0],
                    p = c[1],
                    d = o(i.useState(e ? e.current : null), 2),
                    y = d[0],
                    g = d[1],
                    w = i.useCallback((function (t) {
                        f.current && (f.current(), f.current = void 0), r || h || t && t.tagName && (f.current = function (t, e, n) {
                            var r = function (t) {
                                    var e, n = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        r = u.find((function (t) {
                                            return t.root === n.root && t.margin === n.margin
                                        }));
                                    r ? e = s.get(r) : (e = s.get(n), u.push(n));
                                    if (e) return e;
                                    var o = new Map,
                                        i = new IntersectionObserver((function (t) {
                                            t.forEach((function (t) {
                                                var e = o.get(t.target),
                                                    n = t.isIntersecting || t.intersectionRatio > 0;
                                                e && n && e(n)
                                            }))
                                        }), t);
                                    return s.set(n, e = {
                                        id: n,
                                        observer: i,
                                        elements: o
                                    }), e
                                }(n),
                                o = r.id,
                                i = r.observer,
                                l = r.elements;
                            return l.set(t, e), i.observe(t),
                                function () {
                                    if (l.delete(t), i.unobserve(t), 0 === l.size) {
                                        i.disconnect(), s.delete(o);
                                        var e = u.findIndex((function (t) {
                                            return t.root === o.root && t.margin === o.margin
                                        }));
                                        e > -1 && u.splice(e, 1)
                                    }
                                }
                        }(t, (function (t) {
                            return t && p(t)
                        }), {
                            root: y,
                            rootMargin: n
                        }))
                    }), [r, y, n, h]),
                    m = i.useCallback((function () {
                        p(!1)
                    }), []);
                return i.useEffect((function () {
                    if (!a && !h) {
                        var t = l.requestIdleCallback((function () {
                            return p(!0)
                        }));
                        return function () {
                            return l.cancelIdleCallback(t)
                        }
                    }
                }), [h]), i.useEffect((function () {
                    e && g(e.current)
                }), [e]), [w, h, m]
            };
            var i = n(7294),
                l = n(4686),
                a = "undefined" !== typeof IntersectionObserver;
            var s = new Map,
                u = [];
            ("function" === typeof e.default || "object" === typeof e.default && null !== e.default) && (Object.assign(e.default, e), t.exports = e.default)
        },
        1664: function (t, e, n) {
            t.exports = n(1551)
        },
        9716: function () {
            ! function () {
                "use strict";

                function t(r) {
                    if (!r) throw new Error("No options passed to Waypoint constructor");
                    if (!r.element) throw new Error("No element option passed to Waypoint constructor");
                    if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
                    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, r), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                        name: this.options.group,
                        axis: this.axis
                    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
                }
                var e = 0,
                    n = {};
                t.prototype.queueTrigger = function (t) {
                    this.group.queueTrigger(this, t)
                }, t.prototype.trigger = function (t) {
                    this.enabled && this.callback && this.callback.apply(this, t)
                }, t.prototype.destroy = function () {
                    this.context.remove(this), this.group.remove(this), delete n[this.key]
                }, t.prototype.disable = function () {
                    return this.enabled = !1, this
                }, t.prototype.enable = function () {
                    return this.context.refresh(), this.enabled = !0, this
                }, t.prototype.next = function () {
                    return this.group.next(this)
                }, t.prototype.previous = function () {
                    return this.group.previous(this)
                }, t.invokeAll = function (t) {
                    var e = [];
                    for (var r in n) e.push(n[r]);
                    for (var o = 0, i = e.length; i > o; o++) e[o][t]()
                }, t.destroyAll = function () {
                    t.invokeAll("destroy")
                }, t.disableAll = function () {
                    t.invokeAll("disable")
                }, t.enableAll = function () {
                    for (var e in t.Context.refreshAll(), n) n[e].enabled = !0;
                    return this
                }, t.refreshAll = function () {
                    t.Context.refreshAll()
                }, t.viewportHeight = function () {
                    return window.innerHeight || document.documentElement.clientHeight
                }, t.viewportWidth = function () {
                    return document.documentElement.clientWidth
                }, t.adapters = [], t.defaults = {
                    context: window,
                    continuous: !0,
                    enabled: !0,
                    group: "default",
                    horizontal: !1,
                    offset: 0
                }, t.offsetAliases = {
                    "bottom-in-view": function () {
                        return this.context.innerHeight() - this.adapter.outerHeight()
                    },
                    "right-in-view": function () {
                        return this.context.innerWidth() - this.adapter.outerWidth()
                    }
                }, window.Waypoint = t
            }(),
            function () {
                "use strict";

                function t(t) {
                    window.setTimeout(t, 1e3 / 60)
                }

                function e(t) {
                    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                        x: this.adapter.scrollLeft(),
                        y: this.adapter.scrollTop()
                    }, this.waypoints = {
                        vertical: {},
                        horizontal: {}
                    }, t.waypointContextKey = this.key, r[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
                }
                var n = 0,
                    r = {},
                    o = window.Waypoint,
                    i = window.onload;
                e.prototype.add = function (t) {
                    var e = t.options.horizontal ? "horizontal" : "vertical";
                    this.waypoints[e][t.key] = t, this.refresh()
                }, e.prototype.checkEmpty = function () {
                    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                        n = this.element == this.element.window;
                    t && e && !n && (this.adapter.off(".waypoints"), delete r[this.key])
                }, e.prototype.createThrottledResizeHandler = function () {
                    function t() {
                        e.handleResize(), e.didResize = !1
                    }
                    var e = this;
                    this.adapter.on("resize.waypoints", (function () {
                        e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
                    }))
                }, e.prototype.createThrottledScrollHandler = function () {
                    function t() {
                        e.handleScroll(), e.didScroll = !1
                    }
                    var e = this;
                    this.adapter.on("scroll.waypoints", (function () {
                        (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
                    }))
                }, e.prototype.handleResize = function () {
                    o.Context.refreshAll()
                }, e.prototype.handleScroll = function () {
                    var t = {},
                        e = {
                            horizontal: {
                                newScroll: this.adapter.scrollLeft(),
                                oldScroll: this.oldScroll.x,
                                forward: "right",
                                backward: "left"
                            },
                            vertical: {
                                newScroll: this.adapter.scrollTop(),
                                oldScroll: this.oldScroll.y,
                                forward: "down",
                                backward: "up"
                            }
                        };
                    for (var n in e) {
                        var r = e[n],
                            o = r.newScroll > r.oldScroll ? r.forward : r.backward;
                        for (var i in this.waypoints[n]) {
                            var l = this.waypoints[n][i];
                            if (null !== l.triggerPoint) {
                                var a = r.oldScroll < l.triggerPoint,
                                    s = r.newScroll >= l.triggerPoint;
                                (a && s || !a && !s) && (l.queueTrigger(o), t[l.group.id] = l.group)
                            }
                        }
                    }
                    for (var u in t) t[u].flushTriggers();
                    this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.innerHeight = function () {
                    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
                }, e.prototype.remove = function (t) {
                    delete this.waypoints[t.axis][t.key], this.checkEmpty()
                }, e.prototype.innerWidth = function () {
                    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
                }, e.prototype.destroy = function () {
                    var t = [];
                    for (var e in this.waypoints)
                        for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
                    for (var r = 0, o = t.length; o > r; r++) t[r].destroy()
                }, e.prototype.refresh = function () {
                    var t, e = this.element == this.element.window,
                        n = e ? void 0 : this.adapter.offset(),
                        r = {};
                    for (var i in this.handleScroll(), t = {
                            horizontal: {
                                contextOffset: e ? 0 : n.left,
                                contextScroll: e ? 0 : this.oldScroll.x,
                                contextDimension: this.innerWidth(),
                                oldScroll: this.oldScroll.x,
                                forward: "right",
                                backward: "left",
                                offsetProp: "left"
                            },
                            vertical: {
                                contextOffset: e ? 0 : n.top,
                                contextScroll: e ? 0 : this.oldScroll.y,
                                contextDimension: this.innerHeight(),
                                oldScroll: this.oldScroll.y,
                                forward: "down",
                                backward: "up",
                                offsetProp: "top"
                            }
                        }) {
                        var l = t[i];
                        for (var a in this.waypoints[i]) {
                            var s, u, f, c, h = this.waypoints[i][a],
                                p = h.options.offset,
                                d = h.triggerPoint,
                                y = 0,
                                g = null == d;
                            h.element !== h.element.window && (y = h.adapter.offset()[l.offsetProp]), "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p), h.options.offset.indexOf("%") > -1 && (p = Math.ceil(l.contextDimension * p / 100))), s = l.contextScroll - l.contextOffset, h.triggerPoint = Math.floor(y + s - p), u = d < l.oldScroll, f = h.triggerPoint >= l.oldScroll, c = !u && !f, !g && (u && f) ? (h.queueTrigger(l.backward), r[h.group.id] = h.group) : (!g && c || g && l.oldScroll >= h.triggerPoint) && (h.queueTrigger(l.forward), r[h.group.id] = h.group)
                        }
                    }
                    return o.requestAnimationFrame((function () {
                        for (var t in r) r[t].flushTriggers()
                    })), this
                }, e.findOrCreateByElement = function (t) {
                    return e.findByElement(t) || new e(t)
                }, e.refreshAll = function () {
                    for (var t in r) r[t].refresh()
                }, e.findByElement = function (t) {
                    return r[t.waypointContextKey]
                }, window.onload = function () {
                    i && i(), e.refreshAll()
                }, o.requestAnimationFrame = function (e) {
                    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
                }, o.Context = e
            }(),
            function () {
                "use strict";

                function t(t, e) {
                    return t.triggerPoint - e.triggerPoint
                }

                function e(t, e) {
                    return e.triggerPoint - t.triggerPoint
                }

                function n(t) {
                    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
                }
                var r = {
                        vertical: {},
                        horizontal: {}
                    },
                    o = window.Waypoint;
                n.prototype.add = function (t) {
                    this.waypoints.push(t)
                }, n.prototype.clearTriggerQueues = function () {
                    this.triggerQueues = {
                        up: [],
                        down: [],
                        left: [],
                        right: []
                    }
                }, n.prototype.flushTriggers = function () {
                    for (var n in this.triggerQueues) {
                        var r = this.triggerQueues[n],
                            o = "up" === n || "left" === n;
                        r.sort(o ? e : t);
                        for (var i = 0, l = r.length; l > i; i += 1) {
                            var a = r[i];
                            (a.options.continuous || i === r.length - 1) && a.trigger([n])
                        }
                    }
                    this.clearTriggerQueues()
                }, n.prototype.next = function (e) {
                    this.waypoints.sort(t);
                    var n = o.Adapter.inArray(e, this.waypoints);
                    return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
                }, n.prototype.previous = function (e) {
                    this.waypoints.sort(t);
                    var n = o.Adapter.inArray(e, this.waypoints);
                    return n ? this.waypoints[n - 1] : null
                }, n.prototype.queueTrigger = function (t, e) {
                    this.triggerQueues[e].push(t)
                }, n.prototype.remove = function (t) {
                    var e = o.Adapter.inArray(t, this.waypoints);
                    e > -1 && this.waypoints.splice(e, 1)
                }, n.prototype.first = function () {
                    return this.waypoints[0]
                }, n.prototype.last = function () {
                    return this.waypoints[this.waypoints.length - 1]
                }, n.findOrCreate = function (t) {
                    return r[t.axis][t.name] || new n(t)
                }, o.Group = n
            }(),
            function () {
                "use strict";

                function t(t) {
                    return t === t.window
                }

                function e(e) {
                    return t(e) ? e : e.defaultView
                }

                function n(t) {
                    this.element = t, this.handlers = {}
                }
                var r = window.Waypoint;
                n.prototype.innerHeight = function () {
                    return t(this.element) ? this.element.innerHeight : this.element.clientHeight
                }, n.prototype.innerWidth = function () {
                    return t(this.element) ? this.element.innerWidth : this.element.clientWidth
                }, n.prototype.off = function (t, e) {
                    function n(t, e, n) {
                        for (var r = 0, o = e.length - 1; o > r; r++) {
                            var i = e[r];
                            n && n !== i || t.removeEventListener(i)
                        }
                    }
                    var r = t.split("."),
                        o = r[0],
                        i = r[1],
                        l = this.element;
                    if (i && this.handlers[i] && o) n(l, this.handlers[i][o], e), this.handlers[i][o] = [];
                    else if (o)
                        for (var a in this.handlers) n(l, this.handlers[a][o] || [], e), this.handlers[a][o] = [];
                    else if (i && this.handlers[i]) {
                        for (var s in this.handlers[i]) n(l, this.handlers[i][s], e);
                        this.handlers[i] = {}
                    }
                }, n.prototype.offset = function () {
                    if (!this.element.ownerDocument) return null;
                    var t = this.element.ownerDocument.documentElement,
                        n = e(this.element.ownerDocument),
                        r = {
                            top: 0,
                            left: 0
                        };
                    return this.element.getBoundingClientRect && (r = this.element.getBoundingClientRect()), {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }
                }, n.prototype.on = function (t, e) {
                    var n = t.split("."),
                        r = n[0],
                        o = n[1] || "__default",
                        i = this.handlers[o] = this.handlers[o] || {};
                    (i[r] = i[r] || []).push(e), this.element.addEventListener(r, e)
                }, n.prototype.outerHeight = function (e) {
                    var n, r = this.innerHeight();
                    return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginTop, 10), r += parseInt(n.marginBottom, 10)), r
                }, n.prototype.outerWidth = function (e) {
                    var n, r = this.innerWidth();
                    return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginLeft, 10), r += parseInt(n.marginRight, 10)), r
                }, n.prototype.scrollLeft = function () {
                    var t = e(this.element);
                    return t ? t.pageXOffset : this.element.scrollLeft
                }, n.prototype.scrollTop = function () {
                    var t = e(this.element);
                    return t ? t.pageYOffset : this.element.scrollTop
                }, n.extend = function () {
                    function t(t, e) {
                        if ("object" == typeof t && "object" == typeof e)
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t
                    }
                    for (var e = Array.prototype.slice.call(arguments), n = 1, r = e.length; r > n; n++) t(e[0], e[n]);
                    return e[0]
                }, n.inArray = function (t, e, n) {
                    return null == e ? -1 : e.indexOf(t, n)
                }, n.isEmptyObject = function (t) {
                    for (var e in t) return !1;
                    return !0
                }, r.adapters.push({
                    name: "noframework",
                    Adapter: n
                }), r.Adapter = n
            }()
        }
    }
]);