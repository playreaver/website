"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[710], {
    6271: function(n, t, e) {
        e.d(t, {
            FP: function() {
                return Bo
            },
            Mi: function() {
                return zo
            },
            WK: function() {
                return jo
            }
        });
        var i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof e.g < "u" ? e.g : typeof self < "u" ? self : {};
        function o(n) {
            return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
        }
        var r = Object.prototype;
        var a = function(n) {
            var t = n && n.constructor;
            return n === ("function" == typeof t && t.prototype || r)
        };
        var l = function(n, t) {
            return function(e) {
                return n(t(e))
            }
        }(Object.keys, Object)
          , s = a
          , c = l
          , d = Object.prototype.hasOwnProperty;
        var p = function(n) {
            if (!s(n))
                return c(n);
            var t = [];
            for (var e in Object(n))
                d.call(n, e) && "constructor" != e && t.push(e);
            return t
        }
          , u = "object" == typeof i && i && i.Object === Object && i
          , f = u
          , g = "object" == typeof self && self && self.Object === Object && self
          , h = f || g || Function("return this")()
          , m = h.Symbol
          , $ = m
          , b = Object.prototype
          , y = b.hasOwnProperty
          , v = b.toString
          , w = $ ? $.toStringTag : void 0;
        var x = function(n) {
            var t = y.call(n, w)
              , e = n[w];
            try {
                n[w] = void 0;
                var i = !0
            } catch {}
            var o = v.call(n);
            return i && (t ? n[w] = e : delete n[w]),
            o
        }
          , S = Object.prototype.toString;
        var k = x
          , C = function(n) {
            return S.call(n)
        }
          , A = m ? m.toStringTag : void 0;
        var z = function(n) {
            return null == n ? void 0 === n ? "[object Undefined]" : "[object Null]" : A && A in Object(n) ? k(n) : C(n)
        };
        var B = function(n) {
            var t = typeof n;
            return null != n && ("object" == t || "function" == t)
        };
        const j = o(B);
        var E = z
          , I = B;
        var T = function(n) {
            if (!I(n))
                return !1;
            var t = E(n);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
          , _ = h["__core-js_shared__"]
          , L = function() {
            var n = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
            return n ? "Symbol(src)_1." + n : ""
        }();
        var O = function(n) {
            return !!L && L in n
        }
          , R = Function.prototype.toString;
        var M = function(n) {
            if (null != n) {
                try {
                    return R.call(n)
                } catch {}
                try {
                    return n + ""
                } catch {}
            }
            return ""
        }
          , N = T
          , U = O
          , V = B
          , F = M
          , D = /^\[object .+?Constructor\]$/
          , P = Function.prototype
          , G = Object.prototype
          , H = P.toString
          , W = G.hasOwnProperty
          , Y = RegExp("^" + H.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var q = function(n) {
            return !(!V(n) || U(n)) && (N(n) ? Y : D).test(F(n))
        }
          , J = function(n, t) {
            return null == n ? void 0 : n[t]
        };
        var Z = function(n, t) {
            var e = J(n, t);
            return q(e) ? e : void 0
        }
          , X = Z(h, "DataView")
          , K = Z(h, "Map")
          , Q = Z(h, "Promise")
          , nn = Z(h, "Set")
          , tn = Z(h, "WeakMap")
          , en = z
          , on = M
          , rn = "[object Map]"
          , an = "[object Promise]"
          , ln = "[object Set]"
          , sn = "[object WeakMap]"
          , cn = "[object DataView]"
          , dn = on(X)
          , pn = on(K)
          , un = on(Q)
          , fn = on(nn)
          , gn = on(tn)
          , hn = en;
        (X && hn(new X(new ArrayBuffer(1))) != cn || K && hn(new K) != rn || Q && hn(Q.resolve()) != an || nn && hn(new nn) != ln || tn && hn(new tn) != sn) && (hn = function(n) {
            var t = en(n)
              , e = "[object Object]" == t ? n.constructor : void 0
              , i = e ? on(e) : "";
            if (i)
                switch (i) {
                case dn:
                    return cn;
                case pn:
                    return rn;
                case un:
                    return an;
                case fn:
                    return ln;
                case gn:
                    return sn
                }
            return t
        }
        );
        var mn = hn;
        var $n = function(n) {
            return null != n && "object" == typeof n
        }
          , bn = z
          , yn = $n;
        var vn = function(n) {
            return yn(n) && "[object Arguments]" == bn(n)
        }
          , wn = $n
          , xn = Object.prototype
          , Sn = xn.hasOwnProperty
          , kn = xn.propertyIsEnumerable
          , Cn = vn(function() {
            return arguments
        }()) ? vn : function(n) {
            return wn(n) && Sn.call(n, "callee") && !kn.call(n, "callee")
        }
          , An = Cn
          , zn = Array.isArray;
        var Bn = function(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && n <= 9007199254740991
        }
          , jn = T
          , En = Bn;
        var In = function(n) {
            return null != n && En(n.length) && !jn(n)
        }
          , Tn = {
            exports: {}
        };
        var _n = function() {
            return !1
        };
        !function(n, t) {
            var e = h
              , i = _n
              , o = t && !t.nodeType && t
              , r = o && n && !n.nodeType && n
              , a = r && r.exports === o ? e.Buffer : void 0
              , l = (a ? a.isBuffer : void 0) || i;
            n.exports = l
        }(Tn, Tn.exports);
        var Ln = Tn.exports
          , On = z
          , Rn = Bn
          , Mn = $n
          , Nn = {};
        Nn["[object Float32Array]"] = Nn["[object Float64Array]"] = Nn["[object Int8Array]"] = Nn["[object Int16Array]"] = Nn["[object Int32Array]"] = Nn["[object Uint8Array]"] = Nn["[object Uint8ClampedArray]"] = Nn["[object Uint16Array]"] = Nn["[object Uint32Array]"] = !0,
        Nn["[object Arguments]"] = Nn["[object Array]"] = Nn["[object ArrayBuffer]"] = Nn["[object Boolean]"] = Nn["[object DataView]"] = Nn["[object Date]"] = Nn["[object Error]"] = Nn["[object Function]"] = Nn["[object Map]"] = Nn["[object Number]"] = Nn["[object Object]"] = Nn["[object RegExp]"] = Nn["[object Set]"] = Nn["[object String]"] = Nn["[object WeakMap]"] = !1;
        var Un = function(n) {
            return Mn(n) && Rn(n.length) && !!Nn[On(n)]
        };
        var Vn = function(n) {
            return function(t) {
                return n(t)
            }
        }
          , Fn = {
            exports: {}
        };
        !function(n, t) {
            var e = u
              , i = t && !t.nodeType && t
              , o = i && n && !n.nodeType && n
              , r = o && o.exports === i && e.process
              , a = function() {
                try {
                    return o && o.require && o.require("util").types || r && r.binding && r.binding("util")
                } catch {}
            }();
            n.exports = a
        }(Fn, Fn.exports);
        var Dn = Fn.exports
          , Pn = Un
          , Gn = Vn
          , Hn = Dn && Dn.isTypedArray
          , Wn = Hn ? Gn(Hn) : Pn
          , Yn = p
          , qn = mn
          , Jn = An
          , Zn = zn
          , Xn = In
          , Kn = Ln
          , Qn = a
          , nt = Wn
          , tt = Object.prototype.hasOwnProperty;
        const et = o((function(n) {
            if (null == n)
                return !0;
            if (Xn(n) && (Zn(n) || "string" == typeof n || "function" == typeof n.splice || Kn(n) || nt(n) || Jn(n)))
                return !n.length;
            var t = qn(n);
            if ("[object Map]" == t || "[object Set]" == t)
                return !n.size;
            if (Qn(n))
                return !Yn(n).length;
            for (var e in n)
                if (tt.call(n, e))
                    return !1;
            return !0
        }
        ));
        var it = function(n, t, e, i) {
            var o = -1
              , r = null == n ? 0 : n.length;
            for (i && r && (e = n[++o]); ++o < r; )
                e = t(e, n[o], o, n);
            return e
        };
        var ot = function(n) {
            return function(t) {
                return null == n ? void 0 : n[t]
            }
        }({
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss",
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\u010e": "D",
            "\u0110": "D",
            "\u010f": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011a": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011b": "e",
            "\u011c": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011d": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u012e": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\u012f": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013b": "L",
            "\u013d": "L",
            "\u013f": "L",
            "\u0141": "L",
            "\u013a": "l",
            "\u013c": "l",
            "\u013e": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014a": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014b": "n",
            "\u014c": "O",
            "\u014e": "O",
            "\u0150": "O",
            "\u014d": "o",
            "\u014f": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015a": "S",
            "\u015c": "S",
            "\u015e": "S",
            "\u0160": "S",
            "\u015b": "s",
            "\u015d": "s",
            "\u015f": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016a": "U",
            "\u016c": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016b": "u",
            "\u016d": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u017a": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017f": "s"
        });
        var rt = z
          , at = $n;
        var lt = function(n, t) {
            for (var e = -1, i = null == n ? 0 : n.length, o = Array(i); ++e < i; )
                o[e] = t(n[e], e, n);
            return o
        }
          , st = zn
          , ct = function(n) {
            return "symbol" == typeof n || at(n) && "[object Symbol]" == rt(n)
        }
          , dt = m ? m.prototype : void 0
          , pt = dt ? dt.toString : void 0;
        var ut = function n(t) {
            if ("string" == typeof t)
                return t;
            if (st(t))
                return lt(t, n) + "";
            if (ct(t))
                return pt ? pt.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -Infinity ? "-0" : e
        }
          , ft = ut;
        var gt = function(n) {
            return null == n ? "" : ft(n)
        }
          , ht = ot
          , mt = gt
          , $t = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
          , bt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
        var yt = function(n) {
            return (n = mt(n)) && n.replace($t, ht).replace(bt, "")
        }
          , vt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var wt = function(n) {
            return n.match(vt) || []
        }
          , xt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var St = function(n) {
            return xt.test(n)
        }
          , kt = "\\ud800-\\udfff"
          , Ct = "\\u2700-\\u27bf"
          , At = "a-z\\xdf-\\xf6\\xf8-\\xff"
          , zt = "A-Z\\xc0-\\xd6\\xd8-\\xde"
          , Bt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
          , jt = "[" + Bt + "]"
          , Et = "\\d+"
          , It = "[" + Ct + "]"
          , Tt = "[" + At + "]"
          , _t = "[^" + kt + Bt + Et + Ct + At + zt + "]"
          , Lt = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Ot = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , Rt = "[" + zt + "]"
          , Mt = "(?:" + Tt + "|" + _t + ")"
          , Nt = "(?:" + Rt + "|" + _t + ")"
          , Ut = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?"
          , Vt = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?"
          , Ft = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?"
          , Dt = "[\\ufe0e\\ufe0f]?"
          , Pt = Dt + Ft + ("(?:\\u200d(?:" + ["[^" + kt + "]", Lt, Ot].join("|") + ")" + Dt + Ft + ")*")
          , Gt = "(?:" + [It, Lt, Ot].join("|") + ")" + Pt
          , Ht = RegExp([Rt + "?" + Tt + "+" + Ut + "(?=" + [jt, Rt, "$"].join("|") + ")", Nt + "+" + Vt + "(?=" + [jt, Rt + Mt, "$"].join("|") + ")", Rt + "?" + Mt + "+" + Ut, Rt + "+" + Vt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Et, Gt].join("|"), "g");
        var Wt = wt
          , Yt = St
          , qt = gt
          , Jt = function(n) {
            return n.match(Ht) || []
        };
        var Zt = it
          , Xt = yt
          , Kt = function(n, t, e) {
            return n = qt(n),
            void 0 === (t = e ? void 0 : t) ? Yt(n) ? Jt(n) : Wt(n) : n.match(t) || []
        }
          , Qt = RegExp("['\u2019]", "g");
        const ne = o(function(n) {
            return function(t) {
                return Zt(Kt(Xt(t).replace(Qt, "")), n, "")
            }
        }((function(n, t, e) {
            return n + (e ? "-" : "") + t.toLowerCase()
        }
        )))
          , te = "dorik"
          , ee = n => j(n) && "key"in n && "value"in n
          , ie = n => `var(${n.key})`
          , oe = n => n.filter((n => n)).map((n => `${n.key}: ${n.value};`)).join("\n")
          , re = n => ee(n) ? ie(n) : n
          , ae = (n, t, e="") => {
            const i = ["mobile", "tablet", "desktop"]
              , o = i.indexOf(t)
              , r = {};
            return e.split(" ").forEach((t => {
                const e = i.slice(o).reduce(( (e, i) => {
                    if (e)
                        return e;
                    const [o,r] = t.split("/");
                    let a = ( (t, e) => {
                        var i, o;
                        const r = "desktop" === t ? null == n ? void 0 : n.style : null == (o = null == (i = null == n ? void 0 : n.media) ? void 0 : i[t]) ? void 0 : o.style;
                        return null == r ? void 0 : r[e]
                    }
                    )(i, o);
                    return r && Array.isArray(a) ? new Map(a).get(r) : a
                }
                ), null);
                r[t] = e
            }
            )),
            r
        }
          , le = Object.keys
          , se = {
            textShadow: {
                x: "0px",
                y: "0px",
                blur: "0px",
                color: "#000000"
            },
            boxShadow: {
                x: "0px",
                y: "0px",
                blur: "0px",
                spread: "0px",
                color: "#000000",
                type: ""
            }
        }
          , ce = {
            compoundProps: {
                border: "leadingProps",
                margin: "leadingProps",
                padding: "leadingProps",
                filter: "filterDeclaration",
                transform: "functionKeyed",
                color: "colorVar",
                fill: "colorVar",
                backgroundColor: "colorVar",
                boxShadow: "inlineValues",
                textShadow: "inlineValues",
                textDecoration: "inlineValues"
            },
            customProps: ["size"],
            colorVar: (n, t) => (t = ee(t) ? ie(t) : t,
            `${ne(n)}: ${t};\n`),
            css(n, t, e, i) {
                if ("" === t || null == t)
                    return "";
                if (this.hasOwnProperty(n) && i)
                    return this[n](t, e, i);
                if (le(this.compoundProps).includes(n))
                    return this[this.compoundProps[n]].bind(this)(n, t);
                if (this.customProps.includes(n)) {
                    let e = "";
                    return "object" == typeof t ? (Object.entries(t).forEach(( ([n,t]) => {
                        e += `${n}:${t};`
                    }
                    )),
                    e) : ("string" == typeof t && (e += `${n}:${t};`),
                    e)
                }
                return this.simpleStyle(n, t)
            },
            simpleStyle: (n, t) => (n = n.startsWith("_") ? n.slice(1) : n,
            `  ${ne(n)}: ${t}; \n`),
            mapToCss: (n, t) => t.map(( ([t,e]) => {
                if (e)
                    return e = ee(e) ? ie(e) : e,
                    `  ${n}-${t}: ${e};`
            }
            )).join("\n"),
            leadingProps(n, t) {
                return this.mapToCss(ne(n), t) + "\n"
            },
            functionKeyed(n, t) {
                const e = (t = Object.entries(t)).map(( ([n,t]) => t && `${n}(${t})`)).join(" ").trim();
                return e && `  ${ne(n)}: ${e};\n`
            },
            filterDeclaration(n, t) {
                const e = {};
                return Object.entries({
                    grayscale: "0%",
                    sepia: "0%",
                    blur: "0px",
                    brightness: "100%",
                    "hue-rotate": "0deg",
                    saturate: "100%",
                    opacity: "100%",
                    contrast: "100%",
                    invert: "0%"
                }).map(( ([n,i]) => {
                    e[n] = t[n] || i
                }
                )),
                this.functionKeyed(n, e)
            },
            inlineValues(n, t, e) {
                let i;
                const o = "function" == typeof e && e(n)
                  , r = Object.assign({}, se[n], o, t);
                return "color"in r && (r.color = ee(r.color) ? ie(r.color) : r.color),
                i = !1 === t._enabled || "none" === t.type ? "none" : Object.entries(r).filter(( ([n]) => "_" !== n.charAt(0))).map(( ([n,t]) => t)).join(" "),
                `${ne(n)}: ${i};\n`
            },
            backgroundImage({image: n, gradient: t, advancedGradient: e}, i, o) {
                const r = []
                  , a = o("__backgroundType")
                  , l = o("__gradientType")
                  , s = ["advanced", "simple", "library"].includes(l) && "image" !== a ? "gradient" : a;
                if ("image" === s && n && r.push(`url(${pe(n)})`),
                "gradient" === s) {
                    const n = "advanced" === l ? null == e ? void 0 : e.gradientString : t && this.backgroundGradient(t);
                    n && r.push(n)
                }
                if (!s) {
                    const i = (null == e ? void 0 : e.gradientString) || t && this.backgroundGradient(t) || n && `url(${pe(n)})`;
                    i && r.push(i)
                }
                return r.length ? `background-image: ${r.join(", ")};` : ""
            },
            backgroundGradient(n) {
                const t = new Map(n)
                  , e = t.get("radialDirection");
                let[i,o] = t.get("start")
                  , [r,a] = t.get("end");
                const l = t.get("direction")
                  , s = t.get("shape")
                  , c = t.get("type");
                let d = l;
                i = ee(i) ? ie(i) : i,
                r = ee(r) ? ie(r) : r,
                "radial" === c && (d = `${s} at ${e}`);
                let p = "";
                return p += "linear" === c ? "linear-gradient(" : "radial-gradient(",
                p += `${d}, ${i} ${o}, ${r} ${a}`,
                p += ")",
                p
            },
            xboxShadow(n) {
                const t = {
                    ...se.boxShadow,
                    ...n
                };
                return `box-shadow: ${"none" !== t.type ? Object.values(t).join(" ") : "none"};\n`
            }
        }
          , de = /\(|\)|'|"/g
          , pe = n => n.replace(de, (n => `\\${n}`));
        function ue(n={}, t, e) {
            let i = "";
            function o(t) {
                return n[t]
            }
            return Object.entries(n).forEach(( ([n,r]) => {
                const a = t && !1 === t[n];
                i += a ? "" : ce.css(n, r, e, o)
            }
            )),
            i
        }
        const fe = n => {
            var t, e;
            return {
                backgroundImage: [void 0, "image", "gradient"].includes(null == (t = n.style) ? void 0 : t.__backgroundType),
                backgroundColor: [void 0, "color", "image", "gradient"].includes(null == (e = n.style) ? void 0 : e.__backgroundType)
            }
        }
          , ge = ({pseudo: n, item: t}) => {
            var e, i;
            switch (n) {
            case "before":
            case "after":
                return {
                    backgroundImage: "gradient-overlay" === (null == (e = null == t ? void 0 : t.attr) ? void 0 : e.__class__overlayType),
                    backgroundColor: "color-overlay" === (null == (i = null == t ? void 0 : t.attr) ? void 0 : i.__class__overlayType)
                };
            case "hover":
                return fe(t);
            default:
                return null
            }
        }
        ;
        class he {
            constructor(n) {
                this.item = n
            }
            get className() {
                const {id: n, type: t, symbolId: e} = this.item;
                return e ? `.symbol--${e}` : `.${te}-${t}-${n}`
            }
            parseStyle(n="style", t) {
                const e = n.split("/").reduce(( (n, t) => n && n.hasOwnProperty(t) ? n[t] : null), this.item);
                if (e)
                    return ue(e, t)
            }
            combined(n="style", t=this.className) {
                return `\n            ${this.getGeneralStyle(n, t)}\n            ${this.getPseudoStyles(n, t)}\n            ${this.getMediaStyles(n, t)}\n        `
            }
            getGeneralStyle(n="style", t=this.className) {
                var e;
                let i;
                "style" === n && (i = fe(this.item)),
                n.startsWith("video/pseudoClass/before/style") && (i = ge({
                    pseudo: "before",
                    item: null == (e = this.item) ? void 0 : e.video
                }));
                const o = this.parseStyle(n, i);
                return o ? `${t} {\n                ${o}\n            }` : ""
            }
            getPseudoStyles(n="style", t=this.className) {
                const {pseudoClass: e={}} = this.item;
                return Object.keys(e).map((e => {
                    const i = this.parseStyle(`pseudoClass/${e}/${n}`, ge({
                        pseudo: e,
                        item: this.item
                    }));
                    if (i)
                        return `${t}:${e} {\n                ${i}\n            }`
                }
                )).join("\n")
            }
            getMediaStyles(n="style", t=this.className) {
                return [{
                    path: `media/tablet/${n}`,
                    maxSize: "1023px"
                }, {
                    path: `media/mobile/${n}`,
                    maxSize: "767px"
                }].map((n => ({
                    ...n,
                    style: this.parseStyle(n.path)
                }))).filter((n => n.style)).map((n => `@media all and (max-width: ${n.maxSize}) {\n                    ${t} {\n                        ${n.style}\n                    }\n                }`)).join("\n")
            }
            getCustomMediaStyles(n="style", t=this.className, e) {
                return [{
                    path: `media/tablet/${n}`,
                    maxSize: "1023px"
                }, {
                    path: `media/mobile/${n}`,
                    maxSize: "767px"
                }].map((n => n)).map(( ({path: n, maxSize: t}) => [n.split("/").reduce(( (n, t) => n && n.hasOwnProperty(t) ? n[t] : null), this.item), t])).map(( ([n,i]) => `@media all and (max-width: ${i}) {\n                    ${t} {\n                        ${e(n)}\n                    }\n                }`)).join("\n")
            }
            setItem(n) {
                this.item = n
            }
        }
        const me = ({className: n, icon: t}) => {
            if (!t)
                return "";
            const {size: e, color: i, gap: o, stroke: r} = t;
            return new he({
                style: {
                    fontSize: e,
                    color: i,
                    gap: o,
                    stroke: r
                }
            }).combined("style", n)
        }
        ;
        const $e = n => n.symbolId ? `.symbol--${n.symbolId}` : `.${te}-${n.type}-${n.id}`
          , be = n => {
            const {settings: {filterSetting: {enableFilter: t}={}, sortSetting: {sortEnable: e}={}}={}} = n;
            let i = "";
            return (t || e) && (i += (n => {
                const t = new he(n)
                  , e = $e(n);
                return `\n    \n    ${e} .filter-section {\n        width: 100%;\n        max-width: 200px;\n    }\n\n    ${e} .cms-filter-section{\n        width: 100%;\n        display: flex;\n        gap: 15px;\n        justify-content: space-between;\n        align-items: end;\n    }\n     ${e} .cms-filter-wrap{\n        display: flex;\n        gap: 15px;\n        align-items: end;\n    }\n    ${t.combined("filterStyle/wrapperStyle/style", `${e} .cms-filter-section`)}\n`
            }
            )(n)),
            t && (i += (n => {
                const {filterStyle: {datePickerStyle: t={}, rangeStyle: {trackRailStyle: e={}, inputGap: i}={}}={}} = n
                  , o = new he(n)
                  , r = $e(n)
                  , a = `#date-range-wrap-${n.id}.open`
                  , l = `${r} .range-slider-container`
                  , s = `${r} input[type='range']`
                  , c = `${r} .rail`
                  , d = `${r} .track`
                  , p = `${l} .value-display`
                  , u = `${l} .range-input-number-label`
                  , f = `${l} input[type='number']`
                  , g = `${s}::-webkit-slider-thumb`
                  , h = `${s}::-moz-range-thumb`
                  , m = `\n    ${a} .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), \n    ${a} .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)){\n        box-shadow: -10px 0 0 ${re(t.background || "#569ff7")} ; \n    }\n        \n    ${a} .flatpickr-day.selected,\n    ${a} .flatpickr-day.startRange,\n    ${a} .flatpickr-day.endRange, \n    ${a} .flatpickr-day.inRange {\n        color: ${re(t.color)};\n        border-color: ${re(t.background)};\n        background-color: ${re(t.background)};\n    }\n    `
                  , $ = o.combined("filterStyle/datePickerStyle/style", `${r} .cms-filter-section input[data-input-type='custom-date-picker']`)
                  , b = o.combined("filterStyle/rangeStyle/containerStyle", l)
                  , y = o.combined("filterStyle/rangeStyle/inputLabelStyle", u)
                  , v = o.combined("filterStyle/rangeStyle/inputStyle", f)
                  , w = o.combined("filterStyle/rangeStyle/thumbStyle", g)
                  , x = o.combined("filterStyle/rangeStyle/thumbStyle", h);
                return `\n    \n\n    /*SELECT DATE PICKER STYLE*/\n    ${r} .cms-filter-section input[data-input-type='custom-date-picker']{\n        width: 100%;\n        height: 40px;\n        padding: 0 10px;\n        @media screen and (max-width: 991px){\n            max-width: 160px;\n        }\n        @media screen and (min-width: 992px){\n            min-width: 220px;\n        }\n    }\n    ${$}\n    ${m}\n\n     /*RANGE SLIDER STYLE*/\n     ${l} {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        max-width: 30rem; \n        gap: 15px;\n        margin-bottom: 5px;\n\n    }\n    ${b}\n    ${p} {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: ${i || "15px"};\n    }\n    ${l} .slider-container {\n        position: relative;\n    }\n    ${u}{\n        font-size: 14px;\n        margin-bottom: 5px;\n        text-align: center;\n\n    }\n    ${y}\n    ${f}{\n        width: 100%;\n        height: 30px;\n        padding: 0 5px;\n        border: 1px solid #D9D9D9;\n        border-radius: 1px 1px 1px 1px;\n        color: #30303D;\n        font-size: 14px;\n        text-align: center;\n    }\n    ${v}\n    ${c}{\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 100%;\n        background-color:  ${re(e.railColor || "#e5e7eb")};\n        height: ${e.trackRailHeight || "10px"};\n        border-radius: 9999px;\n    }\n    ${d}{\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        height:  ${e.trackRailHeight || "10px"};\n        border-radius: 9999px;\n        background-color:  ${re(e.trackColor || "#2914FF")};\n    }\n    ${s} {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 100%;\n        height: ${e.trackRailHeight || "10px"};\n        appearance: none;\n        background: transparent;\n        pointer-events: none;\n    }\n    ${s}:focus {\n        outline: none;\n    }\n    ${g} {\n       -webkit-appearance: none;\n        aspect-ratio: 1 / 1;\n        width: 20px;\n        background: #2914FF;\n        border-radius: 50%;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    ${h} {\n        aspect-ratio: 1 / 1;\n        width: 20px;\n        background: #2914FF;\n        border-radius: 50%;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    ${w}\n    ${x}\n`
            }
            )(n)),
            e && (i += (n => {
                var t, e, i, o;
                const {filterStyle: {sortStyle: r={}}={}} = n
                  , a = new he(n)
                  , l = $e(n)
                  , s = a.combined("filterStyle/sortStyle/style", `${l} .custom-sort-field .dropdown-btn`)
                  , c = a.combined("filterStyle/sortStyle/dropdownStyle", `${l} .custom-sort-field .dropdown-content`)
                  , d = a.combined("filterStyle/sortStyle/dropdownListStyle", `${l} .custom-sort-field .dropdown-content a`);
                return `\n    \n    /*SELECT SORT STYLE*/\n    ${l} .custom-sort-field .dropdown-btn {\n        width: 40px;\n        height: 40px;\n        border-radius: 5px;\n        border: none;\n        cursor: pointer;\n        transition: all .3s;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    ${l} .custom-sort-field .dropdown-btn.active{\n        background-color: ${re((null == (t = r.activeStyle) ? void 0 : t.backgroundColor) || "#3498DB")};\n        color: ${re((null == (e = r.activeStyle) ? void 0 : e.color) || "#ffffff")};\n    }\n    ${l} .dropdown-btn:hover, .dropdown-btn:focus {\n        background-color: #2980B9;\n        color: #ffffff;\n    }\n    ${s}\n\n    ${l} .dropdown {\n        position: relative;\n        display: inline-block;\n    }\n    ${l} .dropdown-content {\n        z-index: 1;\n        display: none;\n        overflow: auto;\n        min-width: 204px;\n        position: absolute;\n        top: 28px;\n        list-style: none;\n        padding: 0;\n        background-color: #f1f1f1;\n        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    }\n    ${c}\n\n    ${l} .dropdown-content.show { \n        display: block;\n    }\n    ${l} .dropdown-content a {\n        color: black;\n        display: block;\n        padding: 4px 12px;\n        text-decoration: none;\n    }\n    ${l} .dropdown-content a:hover {\n        background-color: #ddd;\n    }\n    ${l} .dropdown-content li.active a{\n        background-color: ${re((null == (i = r.activeStyle) ? void 0 : i.backgroundColor) || "#3498DB")};\n        color: ${re((null == (o = r.activeStyle) ? void 0 : o.color) || "#fff")};\n    }\n    ${d}\n`
            }
            )(n)),
            i
        }
        ;
        function ye(n) {
            var t;
            const e = new he(n)
              , {className: i} = e
              , {media: o={}, settings: r={}, _elType: a} = n
              , {reverseColumn: l} = r
              , s = `${i} .button-section`
              , c = `${s} button`
              , d = e.combined("paginationStyle/style", c)
              , p = e.combined("paginationStyle/wrapperStyle", s)
              , u = `${i} .empty-data-section`
              , f = e.combined("emptyDataStyles/style", u)
              , g = "100%" === (null == (t = n.wrapper) ? void 0 : t.width);
            let h = "";
            if (h += `${i} {\n        --nav-padding:${g ? "30px" : "15px"};\n    }`,
            h += '[class*="close-btn-"]{\n        display: none;\n    }',
            r.columnGap) {
                const n = parseInt(r.columnGap)
                  , t = n > 0 ? `calc(-${r.columnGap} / 2)` : 0
                  , e = n > 0 ? `calc(${r.columnGap} / 2)` : 0;
                h += `${i}.flex {\n            margin-left: ${t};\n            margin-right: ${t};\n        }\n        ${i} [class*=col-] {\n            padding-left: ${e};\n            padding-right: ${e};\n        }\n`
            }
            return [["tablet", "1023px"], ["mobile", "767px"]].map(( ([n,t]) => {
                var e, r;
                l && (h += `@media screen and (max-width: ${t}) {\n                            ${i} {\n                                flex-direction: row-reverse;\n                                flex-wrap:wrap-reverse;\n                            }\n                        }\n`);
                const a = null == (r = null == (e = o[n]) ? void 0 : e.settings) ? void 0 : r.columnGap;
                if (a) {
                    const n = parseInt(a) > 0
                      , e = n ? `calc(-${a} / 2)` : 0
                      , o = n ? `calc(${a} / 2)` : 0;
                    h += `@media screen and (max-width: ${t}) {\n                ${i}.flex {\n                    margin-left: ${e};\n                    margin-right: ${e};\n                }\n                ${i} [class*=col-] {\n                    padding-left: ${o};\n                    padding-right: ${o};\n                }\n             }\n`
                }
            }
            )),
            r.popup && (h += (n => {
                const {settings: t={}, attr: e={}} = {
                    ...n
                }
                  , i = new he(n)
                  , o = `.${te}-popup-${n.id}`
                  , r = `.close-btn-${e.id}`
                  , a = `.row-${e.id}-overlay`
                  , l = `${o}.modal-${e.id}-visible`
                  , s = i.combined("row/closeButton", r)
                  , c = i.combined("row/popupStyle", `${o}`);
                return t.popup ? `\n    \n    .builder-popup-row-indicator{\n        height: 15px;\n        margin-left: -15px;\n        margin-right: -15px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==');\n        background-repeat: repeat;\n    }\n    .builder-popup-row-indicator span {\n        font-size: 12px;\n        font-weight: bold;\n        display: inline-block;\n        background-color: #fff;\n        padding: 0 10px;\n    }\n    .builder-popup-row{\n        border: 1px dashed #888;\n    }\n    ${a}{\n        position: fixed;\n        top: 0;\n        left:0;\n        right: 0;\n        bottom: 0;\n        background: rgba(0,0,0,.5);\n        z-index: 99999;\n    }\n    ${o}{\n        position: fixed;\n        width: 70%;\n        height: 70%;\n        top: 50%;\n        left: 50%;\n        opacity: 0;\n        overflow: hidden;\n        visibility: hidden;\n        transition: all .5s ease-in-out;\n        transform: translate(-50%, -50%) scale(0);\n    }\n    ${c}\n    ${o} .popup-row{\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        margin: 0;\n        overflow-y: auto;\n    }\n    ${l}{\n        opacity: 1;\n        z-index: 9999;\n        visibility: visible;\n        transform: translate(-50%, -50%) scale(1);\n      }\n      ${o} .popup-row::-webkit-scrollbar{\n          width: 5px;\n      }\n      ${o} .popup-row::-webkit-scrollbar-track{\n          background: transparent;\n      }\n      ${o} .popup-row::-webkit-scrollbar-thumb{\n          background: rgba(0,0,0,.15);\n      }\n      \n      ${r}{\n        position: absolute;\n        width: 35px;\n        height: 35px;\n        align-items: center;\n        justify-content: center;\n        top: 5px;\n        right: 5px;\n        border: 0;\n        color: #888;\n        border-radius: 5px;\n        font-weight: 500;\n        cursor: pointer;\n        z-index: 999;\n        transition: all .4s;\n        \n      }\n      ${r}.btn-visible {\n          display: flex;\n      }\n      ${s}\n      ${null != t && t.popupPreview ? "\n        .empty-popup-row{\n            padding: 20px;\n            text-align: center;\n            color: #aaa;\n            background: #888;\n        }" : ""}\n\n\n    ` : ""
            }
            )(n)),
            "CMSROW" === a && (h += `\n            .dummy-column {\n                position: relative;\n            }\n            .dummy-column:after {\n                content: '';\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                top: 0;\n                left: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n            .dummy-column .connectBtn {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                z-index: 99;\n                padding: 6px 12px;\n                background: blue;\n                color: #fff;\n                border-radius: 5px;\n                border: 1px solid blue;\n            }\n\n            ${p}\n            ${d}\n            ${f}\n        `,
            h += be(n)),
            h
        }
        function ve(n) {
            if (!n)
                return "";
            let t = "";
            const {icon: e={}} = n;
            t += e.size ? `font-size: ${e.size};` : "",
            t += e.color ? `color: ${ee(e.color) ? ie(e.color) : e.color};` : "";
            const i = function(n) {
                if (!n || !n.flexDirection)
                    return "right";
                switch (n.flexDirection) {
                case "row-reverse":
                    return "left";
                case "column":
                    return "bottom";
                default:
                    return "right"
                }
            }(n.style);
            return t += e.gap ? `margin-${i}: ${e.gap};` : "",
            t
        }
        const we = (n, t="width") => 0 !== parseInt(n) ? `${t}: ${n ?? "16px"};` : "display: none;";
        const xe = n => ({
            ...n("desktop"),
            media: {
                tablet: n("tablet"),
                mobile: n("mobile")
            }
        });
        function Se(n, t) {
            try {
                return t(n)
            } catch (e) {
                if (e instanceof TypeError) {
                    if (ke.test(e))
                        return null;
                    if (Ce.test(e))
                        return
                }
                throw e
            }
        }
        var ke = /^null | null$|^[^(]* null /i
          , Ce = /^undefined | undefined$|^[^(]* undefined /i;
        Se.default = Se;
        const Ae = o(Se);
        function ze(n={}) {
            let t = "";
            return t += n.size ? `font-size: ${n.size};` : "",
            t += n.color ? `color: ${ee(n.color) ? ie(n.color) : n.color};` : "",
            t
        }
        function Be(n) {
            if (!n)
                return "";
            return `${{
                left: "margin-right",
                center: "margin",
                right: "margin-left"
            }[n]}: ${{
                left: "auto",
                center: "0 auto",
                right: "auto"
            }[n]};`
        }
        function je(n) {
            const t = new he(n)
              , {layout: e} = n.widget.settings || {}
              , {className: i} = t
              , o = ( ({tags: n, prefix: t, className: e, styles: i}) => n.map((n => i.combined(...( ({tag: n, prefix: t, className: e}) => {
                const [i,o=i] = n.split("=");
                return [`${t}/${o}/style`, `${e} ${i}`]
            }
            )({
                tag: n,
                prefix: t,
                className: e
            })))).join("\n"))({
                tags: [".post--image=image", ".post--footer=footer", ".post--button=button", ".post--heading=heading", ".post--content=content", ".post--container=container", ".post--categories=categories", ".pagination button=pagination"],
                className: i,
                styles: t,
                prefix: "widget"
            });
            return `\n\t${i} {\n\t    width: 100%;\n        display: grid;\n        grid-template-columns: ${"grid" !== e ? "1fr" : "repeat(var(--count,1), 1fr)"} ;\n\t}\n\n\t${i} .post--container {\n        flex-direction:${"grid" !== e ? "row" : "column"};\n\t}\n\n    ${i} p, h3  {\n        margin:0;\n    }\n\n    ${i} a {\n        text-decoration:none;\n        color:inherit;\n    }\n\n    ${i} .post--container, ${i} article {\n        display: flex;\n        align-items: flex-start;\n    }\n\n    ${i} article {\n        flex-direction: column;\n        width:100%;\n    }\n\n    ${i} article > * {\n        width:100%;\n    }\n\n    ${i} article > button {\n        width:auto;\n    }\n    \n    ${i} .pagination {\n        display:flex;\n        grid-column-start: 1;\n        justify-content:var(--pg-position);\n        grid-column-end: ${"grid" !== e ? "-1" : "calc(var(--count) + 1)"} ;\n    }\n\n    ${i} .pagination button {\n        background:transparent;\n    }\n\n    ${i} .pagination button:disabled {\n        cursor: not-allowed;\n        background:#ddd;\n    }\n\n    ${i} .post--footer {\n        width:100%;\n    }\n    \n    ${i} .categories--container {\n        align-self:var(--tags-align);\n        width:auto;\n    }\n\n    ${i} .post--image {\n        display:block;\n        object-fit:cover;\n        width: ${"grid" !== e ? "50%" : "100%"}\n    }\n\n\t${o}\n\t`
        }
        const Ee = (n, t) => `\n    .rte-hr-wrapper {\n                width: ${n.width};\n                height: ${t - 5}px;\n                overflow: hidden;\n                display: inline-block;\n            }\n            .rte-hr-wrapper:before {\n                content: '${"-".repeat(200)}';\n                position: relative;\n                display: block;\n                top: -5px;\n                color: transparent;\n                font-size: ${n.height};\n                text-decoration-style: wavy;\n                text-decoration-color: red;\n                text-decoration-line: underline;\n                text-decoration-color: ${n.backgroundColor};\n            }\n`
          , Ie = n => `\n    .rte-hr-wrapper {\n                line-height: 1.6em;\n                width: 100%;\n            }\n            .rte-hr-wrapper:before {\n                display: inline-block;\n                content: "***";\n                color: ${n.color};\n                font-size: 30px;\n                height: 30px;\n                letter-spacing: 0.2em;\n            }\n`;
        const Te = 100
          , _e = {
            MOBILE: "mobile",
            TABLET: "tablet",
            DESKTOP: "desktop"
        }
          , Le = (n, t) => {
            const e = [[]];
            let i = 0;
            return n.forEach((n => {
                const o = ( (n, t) => {
                    const {flexBasis: e} = ae(n, t, "flexBasis")
                      , i = parseFloat(e || Te);
                    return Math.min(i, Te)
                }
                )(n, t);
                i += o,
                Math.ceil(i) > Te && (e.push([]),
                i = o),
                e[e.length - 1].push(o)
            }
            )),
            e
        }
          , Oe = /(?<value>.*?)(?<unit>\D*$)/i
          , Re = ({parentContainer: n, media: t=""}) => {
            const {content: e=[]} = n
              , {gap: i} = ae(n, t, "gap");
            return ( (n, t) => {
                const e = Oe.exec(t || "0px")
                  , {value: i, unit: o="px"} = e.groups;
                return n.flatMap((n => {
                    const t = n.length;
                    if (t <= 1)
                        return n.fill("0px");
                    const e = (t - 1) * i / t;
                    return n.fill(`${Number(e.toFixed(2))}${o}`)
                }
                ))
            }
            )(Le(e, t), i)
        }
          , Me = (n, t) => {
            const {width: e, "margin/left": i="0px", "margin/right": o="0px"} = ae(n, t, "width margin/left margin/right")
              , r = e || "var(--max-width, 100%)"
              , a = `(100% - ${r}) / 2`;
            return {
                style: {
                    marginLeft: `calc(${a} + ${i})`,
                    marginRight: `calc(${a} + ${o})`,
                    width: `calc(${r} - ${i} - ${o})`
                }
            }
        }
          , Ne = n => {
            const t = $e(n)
              , e = xe(Me.bind(null, n));
            let i = "";
            return i += `${t}${t} {\n        --nav-padding: 15px;\n    }\n`,
            i += new he(e).combined("style", `${t}${t}`),
            i
        }
        ;
        const Ue = n => `\n  ${n} {\n    overflow:hidden;\n  }\n\n  /* justified style */\n  ${n} .justified {\n    display: inline-flex;\n    flex-wrap: wrap;\n    justify-content:center;\n    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));\n    width: calc(100% + var(--gap));\n  }\n\n  /* justified figure style */\n  ${n} .justified figure {\n    margin: var(--gap) 0 0 var(--gap);\n    position:relative;\n  }\n`
          , Ve = n => `\n  /* mesonry style */\n  ${n} .mesonry {\n    display: inline-flex;\n    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));\n    width: calc(100% + var(--gap));\n  }\n\n  /* mesonry image container */ \n  ${n} .mesonry .mesonry--image-container {\n    margin: var(--gap) 0 0 var(--gap);\n    display:flex;\n    flex-direction:column;\n  }\n\n  /* mesonry figure style */\n  ${n} .mesonry .mesonry--image-container figure{\n    margin:0;\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n    \n  ${n} .mesonry .mesonry--image-container figure:not(:last-child),\n  ${n} .mesonry .mesonry--image-container a:not(:last-child) {\n    margin-bottom:var(--gap);\n  }\n\n  /* mesonry image style */\n  ${n} .mesonry .mesonry--image-container figure > img {\n    max-width: 100%;\n    display: block;\n    grid-row: 1 / -1;\n    grid-column: 1;\n    height:auto;\n  }\n`;
        const Fe = n => `\n  ${n} {\n    overflow:hidden;\n  }\n\n  /* justified style */\n  ${n} .justified {\n    display: inline-flex;\n    flex-wrap: wrap;\n    justify-content:center;\n    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));\n    width: calc(100% + var(--gap));\n  }\n\n  /* justified figure style */\n  ${n} .justified figure {\n    margin: var(--gap) 0 0 var(--gap);\n    position:relative;\n  }\n`
          , De = n => `\n  /* mesonry style */\n  ${n} .mesonry {\n    display: inline-flex;\n    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));\n    width: calc(100% + var(--gap));\n  }\n\n  /* mesonry image container */ \n  ${n} .mesonry .mesonry--image-container {\n    margin: var(--gap) 0 0 var(--gap);\n    display:flex;\n    flex-direction:column;\n  }\n\n  /* mesonry figure style */\n  ${n} .mesonry .mesonry--image-container figure{\n    margin:0;\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n    \n  ${n} .mesonry .mesonry--image-container figure:not(:last-child),\n  ${n} .mesonry .mesonry--image-container a:not(:last-child) {\n    margin-bottom:var(--gap);\n  }\n\n  /* mesonry image style */\n  ${n} .mesonry .mesonry--image-container figure > img,\n  ${n} .mesonry .mesonry--image-container figure a > img {\n    max-width: 100%;\n    display: block;\n    grid-row: 1 / -1;\n    grid-column: 1;\n    height:auto;\n  }\n`
          , Pe = ({className: n}) => `\n  /* gallery pagination */\n  ${n} .pagination {\n    gap: 24px;\n    display:flex;\n    justify-content:center;\n  }\n\n\n  ${n} .pagination button {\n      height:40px;\n      width:40px;\n      border:none;\n      display:flex;\n      align-items:center;\n      border-radius:50%;\n      justify-content:center;\n  }\n\n  ${n} .pagination .wrapper.disabled {\n      cursor: not-allowed;\n  }\n\n  ${n} .pagination button:disabled  {\n      pointer-events: none;\n      opacity: calc(var(--opacity,5)/10);\n  }\n\n  ${n} .pagination svg {\n      width:32px;\n      height:32px;\n      display:block;\n  }\n  `;
        const Ge = n => {
            const t = `${$e(n)} .custom-details`;
            return `\n    \n    ${new he(n).combined("airtable/wrapperStyle", t)}\n    ${t} .left-section,\n    ${t} .right-section{\n        display: flex;\n        gap: 10px;\n    }\n`
        }
          , He = n => {
            const t = $e(n)
              , e = new he(n)
              , {airtable: {sidebarStyle: i={}}} = n
              , o = `${t} .wrapper`
              , r = e.combined("airtable/wrapperStyle", o)
              , a = e.combined("airtable/sidebarContent/style", `${o} .sidebar .sidebar-content`);
            return `\n    ${o}{\n        display: flex;\n    }\n    ${r}\n    \n    ${o} .main{\n        width: calc(100% - ${i.width || "30%"});\n        padding-right: 20px;\n    }\n    ${o} .main .title-section{\n        display: flex;\n        align-items: center;\n        gap: 10px;\n    }\n    ${o} .main .job-type p{\n        border-radius: 5px;\n    }\n    ${o} .main .job-tags{\n        display: flex;\n        gap: 10px;\n        margin: 15px 0;\n    }\n    \n    ${o} .sidebar{\n        width: 30%;\n        padding-left: 20px;\n        border-style: solid;\n        border-left-width: 2px;\n        border-color: #ddd;\n    }\n\n    ${a}\n\n    ${o} .sidebar .post-date{\n        display: flex;\n        align-items: center;\n        gap: 5px;\n    }\n    @media screen and (max-width:767px) {\n        ${o}{\n            display: block;\n        }\n        ${o} .main,\n        ${o} .sidebar{\n            width: auto !important;\n        }\n    }\n`
        }
          , We = n => {
            const t = `${$e(n)} .single-blog-post`;
            return `\n    ${t} .header-section{\n        display: flex;\n        justify-content: space-between;\n        align-items: end;\n    }\n    ${new he(n).combined("airtable/wrapperStyle", t)}\n    ${t} .left-section,\n    ${t} .right-section{\n        display: flex;\n        gap: 10px;\n    }\n`
        }
          , Ye = n => {
            const t = $e(n)
              , e = new he(n)
              , {airtable: {sidebarStyle: i={}}} = n
              , o = `${t} .profile-details`
              , r = `${t} .wrapper`
              , a = `${t} .profile-header`
              , l = `${t} .profile-img`;
            return `\n    ${o} .contact-info-section{\n        display: flex;\n        gap: 40px;\n    }\n    ${e.combined("airtable/wrapperStyle", o)}\n    ${r}{\n        display: flex;\n    }\n    ${r} .main{\n        width: calc(100% - ${i.width || "30%"});\n        padding-right: 20px;\n    }\n    ${r} .sidebar{\n        width: 30%;\n        padding-left: 20px;\n        border-style: solid;\n        border-left-width: 2px;\n        border-color: #ddd;\n    }\n    ${o} .profile-bg{\n       width: 100%;\n       height: 180px;\n       background-size: cover;\n       background-position: center;\n    }\n    ${a} .left-section{\n        display: flex;\n        align-items: end;\n        margin-left\n        \n    }\n    \n    ${a}{\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: end;\n    }\n    ${l}{\n        margin-right: 24px;\n    }\n    \n    @media screen and (max-width:767px) {\n        ${r}{\n            display: block;\n        }\n        ${r} .main,\n        ${r} .sidebar{\n            width: auto !important;\n        }\n    }\n   \n`
        }
          , qe = n => {
            const t = $e(n)
              , e = new he(n)
              , {airtable: {sidebarStyle: i={}}} = n
              , o = `${t} .wrapper`;
            return `\n    ${o}{\n        display: flex;\n    }\n    ${e.combined("airtable/wrapperStyle", o)}\n    \n    ${o} .main{\n        width: calc(100% - ${i.width || "30%"});\n        padding-right: 20px;\n    }\n    ${o} .sidebar{\n        width: 30%;\n        padding-left: 20px;\n        border-style: solid;\n        border-left-width: 2px;\n        border-color: #ddd;\n    }\n\n    @media screen and (max-width:767px) {\n        ${o}{\n            display: block;\n        }\n        ${o} .main,\n        ${o} .sidebar{\n            width: auto !important;\n        }\n    }\n    \n`
        }
        ;
        const Je = n => Number(null == n ? void 0 : n.itemPerRow)
          , Ze = n => {
            const {airtable: {gridSetting: t}} = n;
            return `\n    /*GRID LAYOUT CSS*/\n    ${$e(n)} .airtable-content {\n        width: 100%;\n        display: grid;\n        grid-template-columns: repeat(${Je(t) || 2}, 1fr);\n        grid-gap: var(--gap);\n        overflow-wrap: anywhere;\n    }`
        }
          , Xe = n => {
            const t = new he(n)
              , e = $e(n);
            return `\n    /*JOB BOARD LAYOUT CSS*/\n    ${e} .job-board .el-ib {\n        display: inline-block;\n    }\n    ${e} .job-board .theme-design {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    ${e} .theme-design .left-item,\n    ${e} .theme-design .right-item{\n        display: flex;\n    }\n    ${e} .theme-design .right-item{\n        width: 35%;\n        justify-content: end;\n        align-items: center;\n    }\n    ${e} .theme-design .left-item{\n        width: 60%\n    }\n    ${e} .theme-design .tags-section{\n        width: 100%;\n    }\n    ${e} .left-item .image-section{\n        width: 15%;\n    }\n    \n    ${e} .right-item .button-section{\n        width: 40%;\n    }\n    \n    ${e} .theme-design .tags-section,\n    ${e} .theme-design .content-section,\n    ${e} .theme-design .image-section{\n        margin-right: var(--gap);\n    }\n  \n    \n    ${t.combined("airtable/jobBoardStyle", `${e} .job-board .theme-design`)}\n    \n    \n    @media screen and (max-width:767px){\n        ${e} .theme-design .left-item,\n        ${e} .theme-design .right-item{\n            width:  100%;\n            display: block;\n        }\n        ${e} .left-item .image-section,\n        ${e} .right-item .button-section{\n            width: 100%;\n        }\n        ${e} .theme-design .tags-section,\n        ${e} .theme-design .content-section,\n        ${e} .theme-design .image-section{\n            margin-bottom: var(--gap);\n        }\n    }\n    \n`
        }
          , Ke = n => {
            const {airtable: {stripeBG: {backgroundStripe: t, stripeBGColor: e}={}}} = n
              , i = new he(n)
              , o = $e(n)
              , r = `${o} table`
              , a = `${o} .airtable-table th `
              , l = `${o} .airtable-table tbody `
              , s = `${o} .airtable-table thead tr`
              , c = `${o} .airtable-table td`;
            return `\n        /*Table LAYOUT CSS*/\n        \n\n        ${o} .airtable-tableWrapper{\n            position: relative;\n            overflow-x: auto;\n        }\n        ${o} .airtable-table{\n            width: 100%;\n            border-collapse: collapse;\n        }\n\n        ${o} .airtable-table td{\n            border: none;\n            border-bottom-style: solid;\n        }\n\n        ${o} .airtable-table tr:hover {\n            background-color: rgba(0,0,0, .05);\n        }\n        ${i.combined("airtable/tableStyle/style", r)}\n        ${i.combined("airtable/tableStyle/headerWrapStyle", s)}\n        ${i.combined("airtable/tableStyle/headerStyle", a)}\n        ${i.combined("airtable/tableStyle/contentWrapStyle", l)}\n        ${t ? `\n            ${o} .airtable-table tr:nth-child(even){\n                background-color: ${e || "rgba(0,0,0, .05)"};\n            }\n        ` : ""}\n        ${i.combined("airtable/tableStyle/contentStyle", c)}\n`
        }
        ;
        function Qe(n) {
            var t, e;
            const i = new he(n)
              , o = $e(n)
              , r = `${o} .dorik-img`
              , a = `${o} .dorik-title`
              , l = `${o} .closeBtn`
              , s = `${o} .dorik-text`
              , c = `${o} .airtable-row`
              , d = `${o} .popup-container`
              , p = `${o} .airtable-section`
              , u = `${o} .airtable-content`
              , f = `${o} .airtable-content .sidebar`
              , g = `${o} .load-more-button`
              , h = `${o} .load-more-button .load-btn`
              , {media: {mobile: m, tablet: $}={}, airtable: {items: b=[], defaultItems: y=[], popupSidebar: v={}, popupItems: w=[], popupSidebarItems: x=[], filterSetting: {filterItems: S}={}}} = n
              , k = null == (t = null == m ? void 0 : m.airtable) ? void 0 : t.gridSetting
              , C = null == (e = null == $ ? void 0 : $.airtable) ? void 0 : e.gridSetting;
            const A = i.combined("airtable/titleStyle", a)
              , z = i.combined("airtable/paragraphStyle", s)
              , B = i.combined("airtable/buttonStyle", h)
              , j = i.combined("airtable/buttonWrapper", g)
              , E = i.combined("airtable/imageStyle", r)
              , I = i.combined("airtable/style", c)
              , T = i.combined("airtable/popupSidebar/style", f)
              , _ = i.combined("airtable/popupMain", `${u} .popup-main`)
              , L = i.combined("airtable/popupCloseBtnStyle", l)
              , O = i.combined("airtable/popupStyle", d)
              , R = null == b ? void 0 : b.map((n => new he(n).combined("style", `${o} .${n.elType || "text"}-${n.id}`)))
              , M = [...b, ...y].map((n => "img" !== n.elType ? "" : new he(n).combined("imagesStyle", `${o} .images-${n.id}`)))
              , N = [...b, ...y].map((n => "btn" !== n.elType ? "" : new he(n).combined("buttonStyle", `${o} .button-${n.id}`)))
              , U = [...b, ...y].map((n => "line" !== n.elType ? "" : new he(n).combined("lineStyle", `${o} .wrapper-${n.elType}-${n.id}`)))
              , V = null == y ? void 0 : y.map((n => new he(n).combined("style", `${o} .${n.elType || "text"}-${n.id}`)))
              , F = [...w, ...x].map((n => new he(n).combined("style", `${o} .${n.elType || "text"}-${n.id}`)))
              , D = [...w, ...x].map((n => "btn" !== n.elType ? "" : new he(n).combined("buttonStyle", `${o} .button-${n.id}`)));
            return `\n        \n        ${(n => `\n/*DEFAULT STYLE*/\n ${n} {\n    line-height: 1;\n }\n\n${n} .tag{\n    margin-right: 5px;\n    margin-bottom: 5px;\n    padding: 0 5px;\n    border: 1px solid #888;\n    border-radius: 4px;\n}\n${n} .btn{\n    padding: 6px 12px;\n    border: 1px solid blue;\n    border-radius: 5px;\n    background: blue;\n    color: #fff;\n}\n${n} img {\n    width: inherit;\n    height: inherit;\n    object-fit: inherit;\n}\n${n} hr{\n    width: 100%;\n    height: 1px;\n    background: red;\n}\n\n`)(o)}\n        ${(n => {
                const {airtable: {filterStyle: {radioButtonStyle: t={}, searchStyle: e={}, rangeStyle: {trackRailStyle: i={}, inputGap: o}={}}={}}} = n
                  , r = new he(n)
                  , a = $e(n)
                  , l = `${a} .header-section .search input`
                  , s = `${a} [type='radio']`
                  , c = `${a} [type='radio']:checked`
                  , d = `${a} [type='radio']:not(:checked)`
                  , p = `${a} .nav.list-select button`
                  , u = `${a} .nav.list-select button.active`
                  , f = `${a} select.select-field`
                  , g = `${a} .filter-label`
                  , h = `${a} .range-slider-container`
                  , m = `${a} input[type='range']`
                  , $ = `${a} .rail`
                  , b = `${a} .track`
                  , y = `${h} .value-display`
                  , v = `${h} .range-input-number-label`
                  , w = `${h} input[type='number']`
                  , x = `${m}::-webkit-slider-thumb`
                  , S = `${m}::-moz-range-thumb`
                  , k = r.combined("airtable/filterStyle/navStyle", p)
                  , C = r.combined("airtable/filterStyle/style", `${a} .filter-content`)
                  , A = r.combined("airtable/filterStyle/searchStyle", l)
                  , z = r.combined("airtable/filterStyle/navActiveStyle", u)
                  , B = r.combined("airtable/filterStyle/selectBtnStyle", f)
                  , j = r.combined("airtable/filterStyle/labelStyle", g)
                  , E = r.combined("airtable/filterStyle/rangeStyle/containerStyle", h)
                  , I = r.combined("airtable/filterStyle/rangeStyle/inputLabelStyle", v)
                  , T = r.combined("airtable/filterStyle/rangeStyle/inputStyle", w)
                  , _ = r.combined("airtable/filterStyle/rangeStyle/thumbStyle", x)
                  , L = r.combined("airtable/filterStyle/rangeStyle/thumbStyle", S);
                return `\n    \n    ${a} .filter-section {\n        width: 100%;\n        max-width: 200px;\n    }\n\n    /*LABEL STYLE*/\n    ${g}{\n        margin: 0;\n        text-align: center;\n    }\n    ${j}\n    \n    /*RADIO INPUT STYLE*/\n    ${a} .radio-select li:not(:last-child){\n        margin-bottom: var(--radio-btn-gap)\n    }\n    ${s}{\n        position: absolute;\n        left: -99999px;\n    }\n    ${s} + label {\n        position: relative;\n        padding-left: 30px;\n        cursor: pointer;\n        display: inline-block;\n        margin-bottom: 5px;\n        -webkit-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n    }\n    ${s} + label:before {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 16px;\n        height: 16px;\n        border: 1px solid;\n        border-radius: 50%;\n        background: #fff;\n    }\n    ${s} + label:after,\n    ${s} + label:after {\n        content: '';\n        width: 12px;\n        height: 12px;\n        position: absolute;\n        top: 50%;\n        left: 3px;\n        transform: translateY(-50%);\n        border-radius: 100%;\n        -webkit-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n    }\n    ${d} + label:after {\n        opacity: 0;\n        -webkit-transform: translateY(-50%) scale(0);\n        transform: translateY(-50%) scale(0);\n    }\n    \n    ${c} + label:after {\n        opacity: 1;\n        -webkit-transform: translateY(-50%) scale(1);\n        transform: translateY(-50%) scale(1);\n    }\n\n    ${c} + label,\n    ${d} + label{\n        color: ${t.labelColor};\n        font-size: ${t.fontSize};\n        \n    }\n\n    ${c} + label:before,\n    ${d} + label:before{\n        border-color: ${t.borderColor}  \n    }\n\n    ${c} + label:after,\n    ${d} + label:after{\n        background: ${t.activeBG}\n    }\n    ${c} + label {\n        color: ${t.activeBG};\n        \n    }\n\n\n    /*SEARCH INPUT STYLE*/\n    ${a} .header-section .search input{\n        width: 100%;\n        height: 40px;\n        padding: 0 10px;\n    }\n    ${A}\n    ${a} .header-section .search{\n        width: 100%;\n        height: 40px;\n        position: relative;\n        border-radius: ${e.borderRadius || 0};\n        overflow: hidden;\n    }\n    ${a} .header-section .search-icon{\n        position: absolute;\n        width: 50px;\n        height: 100%;\n        top: 50%;\n        right: 0;\n        text-align: center;\n        transform: translateY(-50%);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: ${e._border};\n        color: ${e.color};\n    }\n\n    \n\n    /*NAV BUTTON STYLE*/\n    ${a} .nav{\n        list-style: none;\n        padding-left: 0;\n        margin: 0;\n        \n    }\n    ${a} .nav.item-flex{\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: var(--nav-item-gap);\n    }\n    \n    ${a} .nav-item{\n        width: 100%;\n        margin-bottom: 10px;\n        padding: 6px 12px;\n        background: #fff;\n        border-radius: 5px;\n        text-transform: capitalize;\n        transition: all .3s;\n    }\n    ${a} .nav-item:not(.active):hover{\n        background: #eee;\n    }\n    \n    ${a} .nav.item-flex button{\n       width: auto;\n    }\n    \n    ${k}\n    ${z}\n\n    /*SELECT TAB STYLE*/\n    ${a} .header-section select{\n        min-width: 180px;\n    }\n    ${C}\n    ${a} select{\n        width: 100%;\n        height: 40px;\n        padding: 0 10px;\n    }\n    \n    ${B}\n\n    /*RANGE SLIDER STYLE*/\n     ${h} {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        max-width: 30rem; \n        gap: 15px;\n        margin-bottom: 15px;\n\n    }\n    ${E}\n    ${y} {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: ${o || "15px"};\n    }\n    ${h} .slider-container {\n        position: relative;\n    }\n    ${v}{\n        font-size: 14px;\n        margin-bottom: 15px;\n        text-align: center;\n\n    }\n    ${I}\n    ${w}{\n        width: 100%;\n        height: 30px;\n        padding: 0 5px;\n        border: 1px solid #D9D9D9;\n        border-radius: 1px 1px 1px 1px;\n        color: #30303D;\n        font-size: 14px;\n        text-align: center;\n    }\n    ${T}\n    ${$}{\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 100%;\n        background-color:  ${i.railColor || "#e5e7eb"};\n        height: ${i.trackRailHeight || "10px"};\n        border-radius: 9999px;\n    }\n    ${b}{\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        height:  ${i.trackRailHeight || "10px"};\n        border-radius: 9999px;\n        background-color:  ${i.trackColor || "#2914FF"};\n    }\n    ${m} {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 100%;\n        height: ${i.trackRailHeight || "10px"};\n        appearance: none;\n        background: transparent;\n        pointer-events: none;\n    }\n    ${m}:focus {\n        outline: none;\n    }\n    ${x} {\n       -webkit-appearance: none;\n        aspect-ratio: 1 / 1;\n        width: 20px;\n        background: #2914FF;\n        border-radius: 50%;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    ${S} {\n        aspect-ratio: 1 / 1;\n        width: 20px;\n        background: #2914FF;\n        border-radius: 50%;\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    ${_}\n    ${L}\n`
            }
            )(n)}\n\n        /*HEADING AND FILTER FILEDS CSS*/\n        ${o} .header-section{\n            display: flex;\n            margin-bottom: 20px;\n            flex-direction: column;\n        }\n        ${o} .header-section .inline-items{\n            display: flex;\n            justify-content: space-between;\n            flex-direction: row-reverse;\n        }\n        \n        \n        /*COMMON LAYOUT CSS*/\n        ${A} \n        ${z} \n        \n        ${E}\n\n        ${h}{\n            text-decoration: none;\n            display: inline-block;\n        }\n        \n        ${u}{\n            width: 100%;\n        }\n\n        ${p}{\n            display: flex;\n            flex-direction: row;\n            align-items: flex-start;\n            gap: 15px;\n        }\n        ${c}{\n            position: relative;\n        }\n        \n        ${I}\n        \n        /*POPUP CSS*/\n        ${(n => `\n${n} .overlay {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    z-index: 99;\n    transform: scale(0);\n    background: rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n}\n\n${n} .overlay.modal-active {\n    opacity: 1;\n    transform: scale(1);\n}\n${n} .popup-container {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    overflow: auto;\n    transition: all 0.4s;\n    background-color: #fff;\n    transform: translate(-50%, -50%) scale(0.6);\n}\n${n}  .popup-container::-webkit-scrollbar{\n    width: 5px;\n}\n${n} .popup-container::-webkit-scrollbar-track{\n    background: transparent;\n}\n${n} .popup-container::-webkit-scrollbar-thumb{\n    background: rgba(0,0,0,.15);\n}\n\n${n} .sidebar{\n    border-left-style: solid;\n}\n${n} .modal-active .popup-container {\n    transform: translate(-50%, -50%) scale(1);\n}\n${n} .closeBtn {\n    position: absolute;\n    font-size: 20px;\n    right: 0px;\n    top: 0px;\n    color: #343030;\n    padding: 2px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: 400;\n    z-index: 99;\n    transition: all .3s;\n}\n${n} .closeBtn:hover{\n    background-color: #efefef;\n}\n`)(o)}\n        ${o} .popup-section{\n            display: grid;\n            grid-template-columns: calc(100% - ${v.width}) auto;\n            gap: 15px;\n\n        }\n        \n        ${O}\n        ${_}\n\n        ${T}\n        ${L}\n        \n        ${o} .sidebar{\n            padding-left: 15px;\n        }\n        \n        ${(n => {
                const {airtable: {layoutConfiguration: t={}}} = n
                  , e = {
                    grid: Ze,
                    "job board": Xe,
                    table: Ke
                }[t.layout];
                return e ? e(n) : ""
            }
            )(n)}\n        \n        /*COMMON INDIVIDUAL EL CSS*/\n        ${(n => `\n\n${n} .load-more-button{\n    margin-top: 30px;\n    text-align: center;\n}\n${n} .load-more-button .load-btn{\n    color: #fff;\n    border: none;\n    padding: 12px;\n    font-weight: 600;\n    border-radius: 5px;\n    transition: all .3s;\n    background: #3030f3;\n}\n${n} .load-more-button .load-btn:hover{\n    background: #161698;\n}\n`)(o)}\n        ${j}\n        ${B} \n        ${(null == F ? void 0 : F.join("\n")) || ""}\n        ${(null == V ? void 0 : V.join("\n")) || ""}\n        ${(null == R ? void 0 : R.join("\n")) || ""}\n        ${(null == M ? void 0 : M.join("\n")) || ""}\n        ${(null == N ? void 0 : N.join("\n")) || ""}\n        ${(null == U ? void 0 : U.join("\n")) || ""}\n        ${(null == D ? void 0 : D.join("\n")) || ""}\n        \n        \n        ${o} .item-click-overlay{\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            z-index: 2;\n            cursor: pointer;\n        }\n        @media screen and (max-width: 1023px) {\n            ${u} {\n                grid-template-columns: repeat(${Je(C) || 1}, 1fr)\n            }\n            ${o} .header-section .inline-items{\n                display: block;\n            }\n            ${o} .header-section select{\n                max-width: initial;\n                margin-left: 0;\n                margin-top: 10px;\n            }\n        }\n        @media screen and (max-width:767px){\n            ${u} {\n                grid-template-columns: repeat(${Je(k) || 1}, 1fr)\n            }\n            .popup-section{\n                flex-direction: column;\n            }\n            .sidebar{\n                margin-top: 20px;\n                border-left: none;\n            }\n            \n            \n        }\n        @media screen and (min-width: 1024px) {\n            ${o} .header-section .filter-content{\n                margin-left: 15px;\n            }\n        }\n`
        }
        const ni = ["nav", "icon", "line", "image", "video", "button", "heading", "iconText", "customForm"];
        const ti = n => {
            const {content: t} = n;
            if ("container" !== n.type)
                return "\n";
            const e = `:where(${$e(n)}) {\n        position: relative;\n    }`;
            if (!Array.isArray(t))
                return e;
            return `${e}\n${t.map((n => "moveToTop" === n.type || "container" === n.type ? "" : `:where(${$e(n)}) {\n            position: relative;\n        }`)).filter(Boolean).join("\n")}`
        }
          , ei = n => n.map(( ([n,t]) => [n, t = /^(-?\d*\.?\d+)(.*)$/.test(t) && "0px"]));
        const ii = {
            nav: function(n) {
                var t, e, i, o;
                const {style: r, btn: a={}, settings: l, links: s={}, toggle: c={}, dropdown: d={}} = n
                  , p = c["hamburger-tab"]
                  , u = new he(n)
                  , {className: f} = u
                  , g = ({from: n, wrapperClass: t, itemClass: e, iconClass: i}) => {
                    const {gap: o, align: a, icon: l} = n
                      , s = function(n, t="row") {
                        if (!n)
                            return "";
                        return `${{
                            row: "justify-content",
                            column: "align-items"
                        }[t]}: ${{
                            left: "flex-start",
                            center: "center",
                            right: "flex-end"
                        }[n]};`
                    }(a)
                      , [c="",d=""] = function(n, t="row") {
                        if (!n)
                            return "";
                        const e = {
                            row: "margin-right",
                            column: "margin-bottom"
                        }[t];
                        return [`${e}: ${n};`, `${e}: 0;`]
                    }(o, null == r ? void 0 : r.flexDirection)
                      , {iconGap: u="", iconStyles: f="", iconPosition: g=""} = function(n) {
                        const t = {}
                          , e = new he(n).parseStyle();
                        if (t.iconStyles = e || "",
                        null != n && n.position) {
                            const e = `flex-direction: ${{
                                left: "row",
                                right: "row-reverse"
                            }[n.position]};`;
                            t.iconPosition = e
                        }
                        if (null != n && n.gap) {
                            const e = `${{
                                left: "margin-right",
                                right: "margin-left"
                            }[(null == n ? void 0 : n.position) || "left"]}: ${n.gap};`;
                            t.iconGap = e
                        }
                        return t
                    }(l)
                      , h = null != r && r.transition ? `transition: ${r.transition};` : "";
                    return `\n            ${s ? `${t} {\n                ${s}\n            }` : ""}\n            ${c || h || g ? `${e} {\n                    ${c}\n                    ${h}\n                    ${g}\n                }` : ""}\n            ${c ? `@media all and (max-width:  ${p ? "1023px" : "767px"}) {\n            ${e} {\n                margin-right: auto;\n                ${c.replace("right", "bottom")}\n            }\n        }` : ""}\n            ${d ? `${t} > li:last-child > a {\n                ${d}\n            }` : ""}\n            ${f || u ? `${i} {\n                    ${f}\n                    ${u}\n                }` : ""}\n        `
                }
                  , h = u.combined("brand/style", `${f} .${te}-navbar--brand`);
                let m = u.combined("toggle/style", `${f} .${te}-navbar--toggle`);
                m += `\n    @media screen and (max-width: ${p ? "1023px" : "767px"}){\n          ${f} .${te}-navbar--toggle {\n              align-items:center;\n              display:flex;\n          }\n      }\n `;
                const $ = function({className: n, item: t={}}) {
                    var e, i, o, r, a, l, s, c, d;
                    const p = {
                        style: {
                            fontSize: null == (i = null == (e = t.toggle) ? void 0 : e.style) ? void 0 : i.fontSize
                        },
                        media: {
                            mobile: {
                                style: {
                                    fontSize: null == (l = null == (a = null == (r = null == (o = t.media) ? void 0 : o.mobile) ? void 0 : r.toggle) ? void 0 : a.style) ? void 0 : l.fontSize
                                }
                            },
                            tablet: {
                                style: {
                                    fontSize: null == (d = null == (c = null == (s = t.media) ? void 0 : s.tablet) ? void 0 : c.toggle) ? void 0 : d.style.fontSize
                                }
                            }
                        }
                    }
                      , u = ["mobile", "tablet"].reduce(( (n, t) => {
                        const {fontSize: e} = ae(p, t, "fontSize");
                        return n.media[t] = {
                            style: {
                                width: e,
                                height: e
                            }
                        },
                        n
                    }
                    ), {
                        media: {}
                    });
                    let f = new he(u).combined("style", `${n} .${te}-navbar--toggle .icon svg`);
                    return f += `${n} .${te}-navbar--toggle  span {\n      display: contents;\n  }`,
                    f
                }({
                    item: n,
                    className: f
                })
                  , b = null == (t = null == s ? void 0 : s.items) ? void 0 : t.map((n => {
                    const t = `${f} .${te}-nav--link-${n.id} .${te}-nav--link-icon`;
                    let e = me({
                        icon: n.icon,
                        className: t
                    });
                    return n.nested && (e += ( (n=[]) => n.map(( (n, t) => {
                        const e = `${f} .${te}-nav--dropdown .dropdown-item:nth-child(${t + 1}) .icon`;
                        return me({
                            icon: n.icon,
                            className: e
                        })
                    }
                    )).join("\n"))(n.nested)),
                    e
                }
                )).join("\n")
                  , y = `${f} .${te}-nav--link`
                  , v = u.combined("links/style", y);
                let w = g({
                    from: s,
                    itemClass: y,
                    wrapperClass: `${f} .${te}-nav--links`,
                    iconClass: `${f} .${te}-nav--link-icon`
                });
                b && (w += b);
                const x = `\n        ${f} .is-dropdown {\n            position: relative;\n        }\n        ${f} .is-dropdown:hover .${te}-nav--dropdown {\n            opacity: 1;\n            top: 100%;\n            visibility: visible;\n        }\n\n        ${f} .dropdown-item .dropdown-text {\n            flex: 1 0;\n        }\n\n        ${f} .dropdown-icon-gap {\n            display: inline-block;\n            width: ${(null == (e = null == d ? void 0 : d.icon) ? void 0 : e.gap) ?? null};\n        }\n\n        ${f} .${te}-nav--dropdown {\n            padding: 0;\n            background: #ffffff;\n            white-space: nowrap;\n            transition: all 0.2s;\n            list-style-type: none;\n        }\n        ${f} .${te}-nav--dropdown.expended {\n            display: grid;\n        }\n\n        @media screen and (min-width: ${p ? "1024px" : "768px"}) {\n            ${f} .${te}-nav--dropdown {\n                left: 0;\n                top: 100%;\n                opacity: 0;\n                display: grid;\n                z-index: 99999;\n                visibility: hidden;\n                position: absolute;\n                box-shadow: rgb(43 53 86 / 15%) 0px 5px 20px 0px;\n            }\n        }\n    `
                  , S = `${f} .${te}-nav--dropdown`
                  , k = `${f} .dropdown-item a`;
                let C = `${k} {\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        flex-direction: ${"right" === (null == (i = d.icon) ? void 0 : i.position) ? "row-reverse" : "row"};\n    }`;
                C += u.combined("dropdown/itemStyle", k);
                const A = u.combined("dropdown/style", S)
                  , z = `${f} .${te}-nav--btn`
                  , B = u.combined("btn/style", z)
                  , j = g({
                    from: a,
                    itemClass: z,
                    wrapperClass: `${f} .${te}-nav--btns`,
                    iconClass: `${f} .${te}-nav--btn-icon`
                })
                  , E = null == (o = null == a ? void 0 : a.items) ? void 0 : o.map((n => {
                    const t = {};
                    Object.entries(n).forEach(( ([n,e]) => {
                        if (n.startsWith("style/")) {
                            const i = n.replace("style/", "");
                            t[i] = e
                        }
                    }
                    ));
                    const e = Object.assign({}, t, n.style)
                      , i = new he({
                        style: e
                    })
                      , o = `${f} .${te}-nav--btn-${n.id}`;
                    return `\n            ${i.getGeneralStyle("style", o)}\n            ${me({
                        className: `${o} .${te}-nav--btn-icon`,
                        icon: n.icon
                    })}\n        `
                }
                ))
                  , I = null != l && l.stickyBG ? `${f}-wrapper.sticky,\n            ${f}-wrapper.expended {\n                background-color: ${ee(l.stickyBG) ? ie(l.stickyBG) : l.stickyBG};\n            }` : ""
                  , T = "\n        @media screen and (max-width: 767px){\n            .dorik-navbar--wrapper,\n            .dorik-navbar--wrapper:not(.sticky){\n                margin-right: 0;\n                margin-left: 0;\n                padding-left: 0;\n                padding-right: 0;\n            }\n        }\n        ";
                return p ? `\n                ${T}\n                ${I}\n                /* Brand Style */\n                ${h}\n                ${f} .${te}-navbar--brand img {\n                    width: 100%;\n                }\n                /* Toggle Button*/\n                ${m}\n                ${$}\n                /* Links */\n                ${w}\n                ${v}\n                /* Buttons */\n                ${j}\n                ${B}\n                ${(null == E ? void 0 : E.join("\n")) || ""}\n                ${z},${y} {\n                    margin-bottom:0;\n                }\n\n                /* Dropdown */\n                ${x}\n                ${A}\n                ${C}\n\n                @media screen and (min-width: 768px) and (max-width:1023px){\n                    ${w}\n                    ${f} .${te}-nav--link{\n                        margin-right: 0px !important;\n                    }\n                    ${j}\n                    ${f} .${te}-nav--btn{\n                        margin-right: 0px !important;\n                    }\n                }\n\n                @media screen and (max-width:1023px){\n                    ${f} .${te}-nav--dropdown {\n                        position:relative;\n                        opacity:1;\n                        place-content:center;\n                    }\n\n                    ${z},${y} {\n                        margin: 8px 0;\n                    }\n                    ${w}\n                }\n            ` : `\n                ${T}\n                ${I}\n                /* Brand Style */\n                ${h}\n                ${f} .${te}-navbar--brand img {\n                    width: 100%;\n                }\n                /* Toggle Button*/\n                ${m}\n                ${$}\n                /* Links */\n                ${w}\n                ${v}\n                /* Buttons */\n                ${j}\n                ${B}\n                ${(null == E ? void 0 : E.join("\n")) || ""}\n\n                /* DROPDOWN */\n                ${x}\n                ${A}\n                ${C}\n\n                @media screen and (max-width:767px){\n                    ${f} .${te}-nav--dropdown {\n                        opacity:1;\n                        position:relative;\n                        place-content:center;\n                        padding: 0;\n                    }\n                }\n                \n                @media screen and (min-width: 768px) and (max-width: 1023px) {\n                    ${f} .${te}-navbar--collapse{\n                        flex-basis: auto;\n                        align-items: center;\n                        display: flex !important;\n                        justify-content: flex-end;\n                    }\n                    ${m}\n                    ${f} .${te}-navbar--navs{\n                        flex: 1;\n                        display: flex;\n                        align-items: center;\n                        justify-content: flex-end;\n                        padding-top: 0;\n                    }\n                    ${w}\n                    ${f} .${te}-nav--links{\n                        justify-content: flex-end;\n                        flex-direction: row;\n                        padding-right: 30px !important;\n                    }\n\n                    ${w}\n                    ${f} .${te}-nav--link{\n                        display: inline-flex;\n                        text-decoration: none;\n\n                    }\n\n                    ${j}\n                    ${f} .${te}-nav--btns{\n                        display: flex;\n                        flex-direction: row;\n                    }\n                    ${j}\n                }\n                @media screen and (min-width: 768px){\n                    ${z},${y} {\n                        margin-bottom: 0;\n                    }\n                    ${f} .${te}-navbar--toggle {\n                        display: none;\n                    }\n                }\n            `
            },
            row: ye,
            text: function(n) {
                var t;
                const {className: e} = new he(n);
                return `\n\t${e} {\n\t   ${null != (t = n.style) && t.__hasClip ? "\n   -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;  \n    " : ""}\n\t}\n\t`
            },
            icon: function(n) {
                var t, e, i;
                let o = ""
                  , r = (null == (i = null == (e = null == (t = n.pseudoClass) ? void 0 : t.hover) ? void 0 : e.icon) ? void 0 : i.color) || null;
                const {icon: a} = n
                  , l = $e(n)
                  , s = function(n={}) {
                    let t = "";
                    return t += n.size ? `font-size: ${n.size};` : "",
                    t += n.color ? `color: ${ee(n.color) ? ie(n.color) : n.color};` : "",
                    t += "line-height: 1em",
                    t
                }(a);
                return s && (o += `${l} :is(.icon, .icon svg) {\n            ${s}\n        }`),
                r && (o += ` ${l}:hover :is(.icon, .icon svg) {\n            color: ${ee(r) ? ie(r) : r};\n        }`),
                o
            },
            tags: function(n) {
                const t = new he(n)
                  , e = $e(n)
                  , i = `${e} ul`
                  , o = `${e} ul .tag`;
                return `\n        \n        ${i}{\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: start;\n            flex-wrap: wrap;\n        }\n        ${t.combined("tags/style", i)}\n        ${o}{\n            margin: 0 var(--gap) var(--gap) 0;\n        }\n        ${t.combined("tags/tagStyle", o)}\n\n    `
            },
            tabs: function(n) {
                var t;
                const {tabs: e={}} = n
                  , i = new he(n)
                  , {className: o} = i
                  , r = `${o} .accordion-tabs`
                  , a = `${o} .tabs-allowed`
                  , l = `${r} .tabs-tab-list`
                  , s = `${r} .tabs-panel`
                  , c = `${l} li .tabs-trigger`
                  , d = `${s} .accordion-trigger`
                  , p = e.panelStyle._border.split(" ").shift()
                  , u = e.activeStyle.borderBottomColor
                  , f = (e.items || []).map(( (n, t) => {
                    const e = `${o} li:nth-child(${t + 1}) .icon.icon.icon.icon`;
                    return me({
                        icon: n.icon,
                        className: e
                    })
                }
                )).join("\n");
                return `\n        ${l} {\n          display: flex;\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        }\n\n        ${l} li {\n          margin: 0;\n        }\n\n        ${i.combined("tabs/tabsStyle", c)}\n        ${i.combined("tabs/tabsStyle", d)}\n\n        ${c} {\n          border-bottom: none;\n          display: none;\n          margin: 0 5px 0 1px;\n          text-decoration: none;\n        }\n\n        ${i.combined("tabs/activeStyle", `${c}.is-selected`)}\n        ${i.combined("tabs/activeStyle", `${c}.is-selected:hover`)}\n        ${i.combined("tabs/activeStyle", `${c}.is-selected:active`)}\n\n        ${c}.is-selected,${c}.is-selected:hover,${c}.is-selected:active{\n          border-bottom-width:${p};\n          border-bottom-color:${ee(u) ? ie(u) : u};\n        }\n\n        ${i.combined("tabs/activeStyle", `${s}.is-open .accordion-trigger`)}\n        ${i.combined("tabs/activeStyle", `${s}.is-open .accordion-trigger:hover`)}\n        ${i.combined("tabs/activeStyle", `${s}.is-open .accordion-trigger:active`)}\n\n        ${s}.is-open .accordion-trigger:hover,\n        ${s}.is-open .accordion-trigger:active{\n          border-bottom-color:${ee(u) ? ie(u) : u};\n        }\n\n        ${c}:active {\n          outline: none;\n        }\n\n        ${s} .accordion-trigger:focus,\n        ${s} .accordion-trigger:active{\n          outline:none;\n        }\n\n        ${s} {\n          display: block;\n          margin: 0;\n          padding: 0;\n        }\n\n        ${s}:not(:first-of-type) {\n          border-top: ${e.panelStyle._border};\n        }\n\n\n        ${i.combined("tabs/contentStyle", `${s} .content`)}\n\n        ${s}.is-hidden .content {\n          display: none;\n        }\n\n        ${s}:active,\n        ${s}:focus {\n          outline: none;\n        }\n\n        ${o} .is-initialized.tabs-allowed .tabs-panel {\n          display: inherit;\n        }\n\n        ${d} {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          cursor: pointer;\n        }\n\n        ${d} .accordion-trigger-icon {\n          pointer-events: none;\n        }\n\n        ${a} .tabs-panel.fake-panel {\n          display: none;\n        }\n\n        @media (min-width: ${e.options.breakpoint}) {\n          ${a} .tabs-panel .accordion-trigger {\n              display: none;\n          }\n          ${a} .tabs-tab-list li .tabs-trigger {\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              flex-direction: ${(null == (t = null == n ? void 0 : n.style) ? void 0 : t.flexDirection) ?? "row"} ;\n\n          }\n          ${a} .tabs-panel {\n              display: none;\n          }\n          ${a} .tabs-panel.is-hidden {\n              display: none;\n          }\n          ${a} .tabs-panel.is-open {\n              display: block;\n          }\n          ${a} .tabs-panel.fake-content {\n            display: none;\n          }\n          ${a} .tabs-panel {\n              border-top: ${e.panelStyle._border};\n          }\n          ${a} .tabs-tab-list {\n              margin-bottom: -${p};\n          }\n        }\n\n        ${d} .accordion-trigger-icon {\n          display: inline-block;\n          float: right;\n          width: 22px;\n          height: 22px;\n        }\n\n\n        ${d} .accordion-trigger-icon svg {\n          margin: 0;\n        }\n\n        ${s} [aria-expanded="true"] .vert {\n          display: none;\n        }\n\n        ${d} .accordion-trigger-icon .label--open,\n        ${d} .accordion-trigger-icon .label--close {\n          display: block;\n          border: 0;\n          clip: rect(0 0 0 0);\n          height: 1px;\n          margin: -1px;\n          overflow: hidden;\n          padding: 0;\n          position: absolute;\n          width: 1px;\n        }\n\n        ${d} .accordion-trigger-icon .label--close {\n          display: none;\n        }\n\n        ${s}.is-open .accordion-trigger .accordion-trigger-icon .label--open {\n          display: none;\n        }\n\n        ${s}.is-open .accordion-trigger .accordion-trigger-icon .label--close {\n          display: block;\n        }\n\n        ${c} .icon {\n          display: flex;\n          ${ve(n)}\n        }\n\n        ${f}\n  `
            },
            links: function(n) {
                var t, e, i, o;
                const {links: r={}, style: a} = n
                  , {icon: l} = r
                  , s = new he(n)
                  , {className: c} = s
                  , d = `${c} .${te}-list--link`
                  , p = s.combined("links/style", d);
                let u;
                u = null != a && a.justifyContent || null != a && a.alignItems ? "" : function(n, t="row") {
                    if (!n)
                        return "";
                    return `${{
                        row: "justify-content",
                        column: "align-items"
                    }[t]}: ${{
                        left: "flex-start",
                        center: "center",
                        right: "flex-end"
                    }[n]};`
                }(r.align, null == a ? void 0 : a.flexDirection);
                const [f,g] = function(n, t="row") {
                    if (!n)
                        return "";
                    const e = {
                        row: "margin-right",
                        column: "margin-bottom"
                    }[t];
                    return [`${e}: ${n};`, `${e}: 0;`]
                }(r.gap, null == a ? void 0 : a.flexDirection)
                  , {iconStyles: h="", iconPosition: m="", iconGap: $=""} = function(n) {
                    const t = {}
                      , e = et(null == n ? void 0 : n.style) ? "" : ue(n.style);
                    if (t.iconStyles = e,
                    null != n && n.position) {
                        const e = `flex-direction: ${{
                            left: "row",
                            right: "row-reverse"
                        }[n.position]};`;
                        t.iconPosition = e
                    }
                    if (null != n && n.gap) {
                        const e = `${{
                            left: "margin-right",
                            right: "margin-left"
                        }[(null == n ? void 0 : n.position) || "left"]}: ${n.gap};`;
                        t.iconGap = e
                    }
                    return t
                }(l)
                  , b = u ? `${c} {\n            ${u}\n        }` : ""
                  , y = null != a && a.transition ? `transition: ${a.transition};` : ""
                  , v = f || m || y ? `${d} {\n                ${f}\n                ${y}\n                ${m}\n            }` : ""
                  , w = g ? `${c} .${te}-list--item:last-child .${te}-list--link {\n            ${g}\n        }` : ""
                  , x = h || $ ? `${c} .${te}-list--icon {\n                ${h}\n                ${$}\n            }` : "";
                let S = s.getMediaStyles("links/icon/style", `${c} .${te}-list--icon:first-child svg`)
                  , k = r.items.map((n => {
                    var t, e, i, o;
                    return `${c} .icon_${n.id} {\n                ${we(null == (t = n.icon) ? void 0 : t.size, "font-size")}\n                color: ${ee(null == (e = n.icon) ? void 0 : e.color) ? ie(null == (i = n.icon) ? void 0 : i.color) : (null == (o = n.icon) ? void 0 : o.color) || "inherit"};\n            }`
                }
                )).filter((n => n));
                const C = `${c} .icon_cms_link_id {\n        font-size: ${(null == (t = n.icon) ? void 0 : t.size) || null};\n        color: ${ee(null == (e = n.icon) ? void 0 : e.color) ? ie(null == (i = n.icon) ? void 0 : i.color) : (null == (o = n.icon) ? void 0 : o.color) || null};\n    }`;
                return `\n        ${b}\n        ${p}\n        ${v}\n        ${w}\n        ${x}\n        ${("dynamic" === r.linkType ? [C] : k).join("\n")}\n        ${S}\n        \n    `
            },
            lists: function(n) {
                var t, e;
                const {lists: i={}, style: o} = n
                  , {icon: r} = i
                  , a = new he(n)
                  , {className: l} = a
                  , s = `${l} .${te}-list--lists`
                  , c = `${l} .${te}-list--icon`
                  , d = `${l} .${te}-list--text`
                  , p = `${l} .${te}-list--gap `
                  , u = a.combined("lists/style", s)
                  , f = a.combined("lists/icon/style", c)
                  , g = a.combined("lists/textStyle/style", d)
                  , h = a.getGeneralStyle("lists/divider/style", p);
                let m;
                const $ = i.items.filter((n => n.iconColor)).map((n => `\n        ${l} .${te}-li-${n.id} .${te}-list--icon {\n            color: ${ee(n.iconColor) ? ie(n.iconColor) : n.iconColor};\n        }\n        `)).join("\n");
                m = null != o && o.justifyContent || null != o && o.alignItems ? "" : function(n, t="row") {
                    if (!n)
                        return "";
                    return [`${{
                        row: "justify-content",
                        column: "align-items"
                    }[t]}: ${{
                        left: "flex-start",
                        center: "center",
                        right: "flex-end"
                    }[n]}; ${{
                        row: "align-items: stretch"
                    }[t]}`]
                }(null == i ? void 0 : i.align, null == o ? void 0 : o.flexDirection);
                const [b,y] = function(n, t="row") {
                    if (!n)
                        return "";
                    const e = parseInt(n) / 2 + "px"
                      , [i,o] = {
                        row: ["margin-right", "margin-left"],
                        column: ["margin-bottom", "margin-top"]
                    }[t];
                    return [`\n        ${i}: ${e};\n        ${o}: ${e};\n    `]
                }(i.gap, null == o ? void 0 : o.flexDirection)
                  , [v,w] = function(n, t="row") {
                    if (!n)
                        return "";
                    const e = {
                        row: "border-right-width",
                        column: "border-bottom-width"
                    }[t];
                    return [`${e}: ${n}; ${{
                        row: "",
                        column: "width: 100%;"
                    }[t]}`, `${e}: 0;`]
                }(null == (t = null == i ? void 0 : i.divider) ? void 0 : t.dividerSize, null == o ? void 0 : o.flexDirection)
                  , {iconStyles: x="", iconPosition: S="", iconGap: k=""} = function(n) {
                    const t = {}
                      , e = et(null == n ? void 0 : n.style) ? "" : ue(n.style);
                    if (t.iconStyles = e,
                    null != n && n.position) {
                        const e = `flex-direction: ${{
                            left: "row",
                            right: "row-reverse"
                        }[n.position]};`;
                        t.iconPosition = e
                    }
                    if (null != n && n.gap) {
                        const e = `${{
                            left: "margin-right",
                            right: "margin-left"
                        }[(null == n ? void 0 : n.position) || "left"]}: ${n.gap};`;
                        t.iconGap = e
                    }
                    return t
                }(r)
                  , C = `${l} {\n            ${m}\n            ${"row" === (null == o ? void 0 : o.flexDirection) ? "align-items: stretch;" : ""}\n        }`
                  , A = null != o && o.transition ? `transition: ${o.transition};` : ""
                  , z = S || A ? `${s} {\n                ${A}\n                ${S}\n            }` : ""
                  , B = b ? `${l} .dorik-list--gap {\n            border-width: 0;\n            ${v}\n            ${b}\n        }` : ""
                  , j = y ? `${l} .${te}-list--item:last-child .${te}-list--lists {\n            ${y}\n        }` : ""
                  , E = w ? `${l} .${te}-list--gap:last-child {\n            display:none;\n        }` : ""
                  , I = k ? `${l} .${te}-list--icon {\n                ${k}\n            }` : "";
                let T = i.items.filter((n => {
                    var t;
                    return null == (t = n.icon) ? void 0 : t.size
                }
                )).map((n => `${l} .icon_${n.id}.icon_${n.id}  {\n                width: ${n.icon.size};\n                height: ${n.icon.size};\n            }`));
                return `\n        ${C}\n        ${u}\n        ${s}{\n            text-align: ${(null == r ? void 0 : r.position) || "left"};\n        }\n        ${z}\n        ${j}\n        ${f}\n        ${I}\n        ${$}\n        \n        ${l} .${te}-list--icon svg {\n            ${we(null == (e = null == r ? void 0 : r.style) ? void 0 : e.fontSize)}\n        }\n        ${T.join("\n")}\n        ${l} .${te}-list--lists{\n            display: flex;\n        }\n        ${l} .${te}-list--item{\n            flex-direction: row;\n        }\n        ${l} .${te}-list--item p {\n            display: inline;\n        }\n        ${B}\n        ${c}{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        ${g}\n\n        ${h}\n        ${E}\n    `
            },
            button: function(n) {
                var t, e, i;
                const o = $e(n);
                let r = (null == (i = null == (e = null == (t = n.pseudoClass) ? void 0 : t.hover) ? void 0 : e.icon) ? void 0 : i.color) || null
                  , a = n.style.transition || null;
                return `${o} :is(.icon, .icon svg) {\n        ${ve(n)}\n        transition: ${a}\n        \n    }\n    ${o}:hover :is(.icon, .icon svg) {\n        color: ${ee(r) ? ie(r) : r};\n    }`
            },
            iframe: function(n) {
                const {settings: t={}, attr: e={}} = n
                  , {height: i, width: o} = e;
                let r = "";
                return "ignore" !== t.aspectRatio && i && o ? r += `padding-bottom: ${i / o * 100}%;` : r += `\n            height: ${i}px;\n            padding-bottom: unset;\n        `,
                `${$e(n)} {\n        ${r}\n        max-width: 100%;\n    }`
            },
            column: function(n) {
                const t = n.attr.WordBreakAll ? "overflow-wrap: break-word;" : ""
                  , e = Ae(n, (n => n.style.justifyContent))
                  , i = $e(n);
                let o = "";
                return o += `${i} {\n        ${t}\n    }`,
                o += `${i}.linked-column{cursor: pointer}`,
                e && "normal" !== e && (o += `${i} {\n            display: flex;\n            flex-direction: column;\n        }`),
                o
            },
            search: function(n) {
                const t = new he(n)
                  , e = $e(n)
                  , {searchIcon: i} = n.search.button
                  , o = ze(i)
                  , r = ["button", "input"].map((n => t.combined(...(n => {
                    const [t,i=t] = n.split("=");
                    return [`search/${i}/style`, `${e} ${t}`]
                }
                )(n)))).join("\n");
                return `${e} input {\n      border: none;\n      flex-grow: 1;\n      background: none;\n    }\n\n    ${e} input:focus {\n\t\t  outline:none;\n    }\n\n    ${e} {\n      display: flex;\n      overflow: hidden;\n    }\n\n    ${e} button {\n      border: none;\n      background: none;\n      display:flex;\n      align-items:center;\n      --gap:${null == i ? void 0 : i.gap};\n      gap: var(--gap,1px);\n      border-left: var(--border-left);\n    }\n\n    ${e} .icon {\n      ${i ? o : ""}\n  }\n\t\n    ${r}\n\t`
            },
            section: function(n) {
                const t = new he(n)
                  , {className: e} = t
                  , [i] = e.split(" ")
                  , o = `${e} ${i}--video-overlay`;
                return `\n \n\n      ${t.combined("video/pseudoClass/before/style", o)}\n      .ai-overlay{\n        position: absolute;\n        inset: 0;\n        display: flex;\n        z-index: 999;\n        align-items: center;\n        background: rgba(0,0,0,.3);\n        justify-content: center;\n\n      }\n  `
            },
            heading: function(n) {
                var t;
                const e = new he(n)
                  , {className: i} = e
                  , o = e.combined("dynamicText/style", `${i} .dorik-heading__dynamic`);
                return `\n\n      ${i} {\n        ${null != (t = n.style) && t.__hasClip ? "\n   -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;  \n    " : ""}\n      }\n\n      ${i} p{\n        display:inline;\n      }\n      \n      ${i} .dorik-heading__dynamic {\n        display:inline\n      }\n\n      ${i} .dorik-heading__dynamic span {\n        display:inline-block;\n      }\n      \n      ${o}\n  `
            },
            iconText: function(n) {
                let t = "";
                const {icon: e} = n
                  , i = $e(n)
                  , o = ze(e)
                  , r = function(n={}, t) {
                    let e = ""
                      , i = `padding-${t}`;
                    return e += n.gap ? `${i}: ${n.gap};` : "",
                    e
                }(e, function(n) {
                    if (!n || !n.flexDirection)
                        return "left";
                    switch (n.flexDirection) {
                    case "row-reverse":
                        return "right";
                    case "column":
                        return "top";
                    default:
                        return "left"
                    }
                }(n.style));
                return t += `${i} {\n        display: flex;\n    }`,
                t += `${i} .icon_text p{\n        margin: 0;\n    }`,
                o && (t += `${i} .icon {\n            ${o}\n        }`),
                r && (t += `${i} > .icon_text {\n            ${r}\n        }`),
                t
            },
            moveToTop: function(n) {
                var t, e, i, o, r, a;
                const l = new he(n)
                  , {className: s} = l
                  , c = `${s}`
                  , d = l.combined("moveToTop/style", c)
                  , p = l.combined("moveToTop/buttonStyle", s)
                  , u = n.style.transition || null
                  , f = (null == (e = null == (t = n.pseudoClass.hover.moveToTop) ? void 0 : t.icon) ? void 0 : e.color) || null;
                return `\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n           opacity: 1;\n        }\n      }\n    @keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        100% {\n           opacity: 0;\n        }\n      }\n\n    ${s}{\n        z-index: 99;\n        cursor:pointer;\n        overflow:hidden;\n        display: flex;\n        justify-content :center;\n    }\n    ${s}.builder-preview{\n        position: fixed;\n    }\n    ${s}.back-to-top-btn{\n        opacity: 0;\n        visibility: visible;\n        position: fixed;\n        pointer-events:none;\n    }\n    ${s}.back-to-top-btn.showBtn{\n        animation: fadeIn 1.5s;\n        opacity: 1;\n        visibility: visible;\n        pointer-events: auto;\n    }\n    ${s}.back-to-top-btn.fadeOut{\n        animation: fadeOut 1s;\n    }\n    ${d}\n    ${p}\n    ${s} :is(.icon, .icon svg) {\n        ${ve(n.moveToTop)}\n        transition: ${u}\n    }\n    ${s}:hover :is(.icon, .icon svg) {\n        color: ${ee(f) ? ie(f) : f};\n    }\n    @media screen and (max-width: 1023px) {\n        ${s} .icon {\n            ${ve(null == (o = null == (i = null == n ? void 0 : n.media) ? void 0 : i.tablet) ? void 0 : o.moveToTop)}\n        }\n    }\n    @media screen and (max-width:767px){\n        ${s} .icon {\n            ${ve(null == (a = null == (r = null == n ? void 0 : n.media) ? void 0 : r.mobile) ? void 0 : a.moveToTop)}\n        }\n    }\n    \n`
            },
            container: function(n) {
                const t = $e(n)
                  , e = new he(n)
                  , i = e.combined("style", t)
                  , [o] = t.split(" ")
                  , r = `${t} ${o}--video-overlay`
                  , a = e.combined("video/pseudoClass/before/style", r);
                let l = "";
                return "root" === n.holder && (l += Ne(n),
                l += `:where(${t}) {\n        margin:0 auto;\n        ${n.style.width ? "max-width: unset;" : ""}\n      }`),
                `\n            ${a}\n            ${i}\n\n            ${(n => {
                    const {content: t} = n;
                    if (!Array.isArray(t))
                        return "\n";
                    const e = [_e.DESKTOP, _e.TABLET, _e.MOBILE].reduce(( (t, e) => (t[e] = Re({
                        media: e,
                        parentContainer: n
                    }),
                    t)), {});
                    return t.filter((n => "container" === n.type)).map(( (n, t) => {
                        const i = $e(n)
                          , o = xe((i => ({
                            style: {
                                width: `calc(${ae(n, i, "flexBasis").flexBasis || "100%"} - ${e[i][t]})`,
                                flexBasis: "auto"
                            }
                        })));
                        return new he(o).combined("style", `${i}${i}`)
                    }
                    )).join("\n")
                }
                )(n)}\n            ${l}\n        `
            },
            accordion: function(n) {
                const {accordions: t={}} = n
                  , e = new he(n)
                  , i = t.gap ? `margin-bottom:${t.gap}` : ""
                  , o = $e(n)
                  , r = `${o} details`
                  , a = `${o} summary`
                  , l = `${o} .details-content p`
                  , s = `${o} .details-content li`
                  , c = e.combined("accordions/headingStyle", a)
                  , d = e.combined("accordions/paragraphStyle", l)
                  , p = e.combined("accordions/paragraphStyle", s);
                return `\n      \n\n      ${r} {\n        ${ue(t.accordionsWrapperStyle)}\n        overflow:hidden;\n        transition: height 1s ease;\n        ${i}\n      }\n\n      ${r}:last-child {\n        margin-bottom:0;\n      }\n\n      ${a} {  \n        cursor: pointer;\n        list-style: none;\n        outline: none;\n      }\n\n      ${c}\n\n      ${a}::-webkit-details-marker {\n        display: none;\n      }\n\n      ${a}::before {\n        padding-left: 10px;      \n        font-size: inherit;\n        content: '+';\n        float: right;\n      }\n\n      ${r}[open] summary::before {\n        padding-left: 10px;\n        font-size: inherit;\n        content: '-';\n      }\n\n      ${d}\n      ${p}\n`
            },
            customForm: function(n) {
                var t, e, i, o;
                const r = new he(n)
                  , {customForm: a, pseudoClass: l} = n
                  , {field: s, button: c, items: d} = a
                  , {className: p} = r
                  , u = `${p} .customform-field-wrapper`
                  , f = `${p} .customform-field-radio > div`
                  , g = `${p} .customform-field-checkbox > div`
                  , h = `${p} .form-field-label`
                  , m = `${p} .form-field-input`
                  , $ = `${p} .customform-button`
                  , b = Be(c.buttonAlign)
                  , y = r.combined("customForm/fieldGroup", u)
                  , v = r.combined("customForm/label/style", h)
                  , w = r.combined("customForm/field/style", m)
                  , x = r.combined("customForm/button/style", $)
                  , S = d.filter((n => n.columnWidth)).map((n => n.columnWidth))
                  , k = [...new Set(S)].map((n => function(n, t) {
                    const e = Math.ceil(n * t / 100);
                    return `\n            ${u}.customform-column-${e} {\n                grid-column: span ${e} / span ${e};\n            }\n        `
                }(6, n)))
                  , C = (null == (o = null == (i = null == (e = null == (t = null == l ? void 0 : l.hover) ? void 0 : t.customForm) ? void 0 : e.button) ? void 0 : i.icon) ? void 0 : o.color) || null;
                return `\n  \n  ${p} {\n      width:100%;\n      display:grid;\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n\n    ${u} {\n      grid-column: span 6 / span 6;\n    }\n\n    ${k.join("\n")}\n\n  ${u} {\n    display: flex;\n    flex-direction: column;\n  }\n\n  ${m}::placeholder {\n    color: ${ee(s.placeholderColor) ? ie(s.placeholderColor) : s.placeholderColor};\n    opacity:1;\n  }\n\n  ${m}.textarea {\n    height:${s.textareaHeight}\n  }\n\n  ${p} .radio-input,\n  ${p} .radio-label,\n  ${p} .checkbox-input,\n  ${p} .checkbox-label,\n  ${p} .acceptance input{\n    margin-right:10px;\n  }\n\n  ${f},\n  ${g} {\n    display:flex;\n    flex-direction:column;\n  }\n\n  ${f}.inline,\n  ${g}.inline {\n    flex-direction:row;\n  }\n\n  ${f} > div,\n  ${g} > div,\n  ${p} .acceptance,\n  ${$} {\n    display:flex;\n    align-items:center;\n  }\n\n  ${v}\n\n  ${w}\n\n  ${m} {\n    background-color: ${s.style.backgroundColor || "transparent"}\n  }\n\n  ${y}\n  \n  ${x}\n\n  ${p} .acceptance .acceptance-label > p {\n    margin:0;\n  }\n\n  ${h} .required-mark,\n  ${p} .acceptance .required-mark {\n    margin-left:5px;\n    color: ${ee(s.requiredText.color) ? ie(s.requiredText.color) : s.requiredText.color};\n  }\n\n  ${$} {\n    ${b}\n  }\n\n  ${$} .icon-text-spacer{\n      width:${c.icon.gap || 0}\n  }\n\n  ${$} :is(.icon, .icon svg) {\n    color: ${ee(c.icon.color) ? ie(c.icon.color) : c.icon.color || null};\n    font-size: ${c.icon.size || "16px"};\n  }\n\n  ${$}:hover :is(.icon, .icon svg){\n    color: ${ee(C) ? ie(C) : C};\n  }\n\n  @media all and (max-width:767px){\n      ${u} {\n        grid-column: span 6 / span 6 !important;\n      }\n      ${p} input[type="date"], input[type="time"] {\n        width: 100%;\n        box-sizing: border-box;\n      }\n    }\n\n  `
            },
            blogWidget: je,
            cmsRow: ye,
            socialIcon: function(n) {
                var t;
                const {style: e={}, socialIcons: i={}, pseudoClass: o={}} = n
                  , r = new he(n)
                  , {className: a} = r
                  , l = `${a} li svg`
                  , s = (c = e.flexDirection,
                d = i.gap,
                `${{
                    row: "margin-right",
                    column: "margin-bottom"
                }[c || "row"]}:${d}`);
                var c, d;
                const p = r.combined("socialIcons/iconStyle", l);
                return `\n\n${a} {\n    flex-wrap:wrap;\n}\n\n${l} {\n    ${function(n={}) {
                    var t, e;
                    leti = "";
                    return null != (t = n.iconStyle) && t.size || (i += n.size ? `width: ${n.size};\n            height: ${n.size};` : ""),
                    null != (e = n.iconStyle) && e.fill || (i += n.color ? `fill: ${ee(n.color) ? ie(n.color) : n.color};` : ""),
                    i
                }(i)}\n}\n\n ${l}:hover {\n    ${function(n={}) {
                    var t;
                    let e = "";
                    return null != (t = n.iconStyle) && t.fill || (e += n.color ? `fill: ${ee(n.color) ? ie(n.color) : n.color};` : ""),
                    e
                }(null == (t = null == o ? void 0 : o.hover) ? void 0 : t.socialIcons)}\n}\n\n ${p}\n\n\n\n ${a} li:not(:last-child){\n    ${s};\n}\n`
            },
            postContent: function(n) {
                var t, e, i, o, r, a, l, s, c, d, p;
                const u = new he(n)
                  , {className: f} = u
                  , g = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li.cdx-nested-list__item=li", "ul", "ol=ul", "mark.cdx-marker=marker", "u.cdx-underline=underline", "code.inline-code=code", "blockquote=quote", "blockquote p=quote/paragraph", "blockquote span=quote/caption", "figure=image/figure", "figure img=image", "figure figcaption=image/caption", "a.buttonTool=buttonTool", "div.html--raw=raw", "table th=table/header", "table td=table/content", ".rte-hr=delimiter", ".grandParent-hr=delimiterWrap", "div.table-of-content=tableOfContent", "div.table-of-content li a=tableOfContent/list", "div.table-of-content p.caption=tableOfContent/caption", ".nestedlist=ul"].map((n => u.combined(...(n => {
                    const [t,e=t] = n.split("=");
                    return [`post/${e}/style`, `${f} ${t}`]
                }
                )(n)))).join("\n")
                  , {ul: h, li: m, tableOfContent: $} = n.post
                  , b = (n => {
                    switch (n) {
                    case "square":
                        return "\u25aa";
                    case "disclosure-closed":
                        return "\u25b6";
                    case "disc":
                    default:
                        return "\u2022";
                    case "circle":
                        return "\u25e6"
                    }
                }
                )(null == (e = null == (t = null == n ? void 0 : n.style) ? void 0 : t.__vars) ? void 0 : e["--listType"])
                  , y = () => {
                    var n, t;
                    return `\n            display:flex;\n            flex-wrap:wrap;\n            flex-direction:${(null == (n = null == h ? void 0 : h.style) ? void 0 : n.flexDirection) || "column"};\n            gap:${null == (t = null == h ? void 0 : h.style) ? void 0 : t.gap};\n        `
                }
                ;
                return `\n    ${f} ul, ${f} ol {\n        margin:0;\n        padding:0;\n        display:flex;\n        flex-direction:column;\n        list-style-position: inside;\n    }\n\n    ${f} ul {\n        list-style-type:var(--list-type,none);\n    }\n    \n    ${f} blockquote span {\n        margin-top:var(--quote-gap);\n        display:block;\n    }\n    \n    ${f} blockquote {\n        margin:0;\n        padding:40px;\n        border-left:var(--quote-bar)\n    }\n    ${f} table{\n        width: 100%;\n        border-collapse: collapse;\n    }\n    \n    ${f} table tr:hover {\n        background-color: rgba(0,0,0, .05);\n    }\n\n    ${f} figure {\n        padding:0;\n        margin:0;\n        text-align:var(--image-align,left)\n    }\n    ${f} a.buttonTool {\n        all: unset;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 6px 0px;\n        cursor: pointer;\n        height:auto !important;\n        width: var(--button-width) !important;\n    }\n    ${f} .buttonToolWrapper {\n        display:flex;\n        justify-content: var(--button-align);\n    }\n    ${f} .linkable_heading .cpy_icon{\n        float: left;\n        padding-right: 4px;\n        margin-left: -20px;\n    }\n    ${f} .linkable_heading .cpy_icon svg{\n        vertical-align: middle;\n        visibility: hidden;\n    }\n    ${f} .linkable_heading:hover svg{\n        visibility: visible;\n    }\n\n    ${(n => {
                    var t;
                    const {className: e, styles: i={}, type: o="starLine"} = n
                      , r = 1 * (null == (t = i.height) ? void 0 : t.slice(0, -2)) || 16
                      , a = r + 1.5 * r;
                    return `\n        ${e}{\n            border: none;\n            display: ${"waveLine" === o || "starLine" === o ? "none" : "inline-block"};\n            visibility: ${"breakLine" === o && "hidden"};\n            background-color: red;\n            width: 100%;\n            height: 2px;\n        }\n        .grandParent-hr {\n            text-align: center;\n        }\n        ${(n => {
                        switch (n) {
                        case "waveLine":
                            return Ee(i, a);
                        case "starLine":
                            return Ie(i)
                        }
                    }
                    )(o)}\n    `
                }
                )({
                    className: `${f} .rte-hr`,
                    styles: null == (o = null == (i = n.post) ? void 0 : i.delimiter) ? void 0 : o.style,
                    type: null == (l = null == (a = null == (r = n.post) ? void 0 : r.delimiter) ? void 0 : a.settings) ? void 0 : l.type
                })}\n    \n    ${f} .table-of-content a{\n        text-decoration: inherit;\n        color: inherit;\n    }\n    ${f} .table-of-content ul {\n        list-style-type:var(--content-list-type,disc);\n        gap: ${(null == (s = null == $ ? void 0 : $.style) ? void 0 : s.gap) || "0px"};\n        background: transparent;\n    }\n    ${f} .table-of-content .caption{\n        margin: 0;\n    }\n    ${f} .table-of-content .pl20{\n        padding-left: 20px;    \n    }\n    ${f} .table-of-content .pl40{\n        padding-left: 40px;    \n    }\n\n    ${f} .nestedlist {\n        display: flex;\n        gap:0;\n    }\n    ${f} .cdx-nested-list {\n        margin: 0;\n        padding: 0;\n        outline: none;\n        counter-reset: item;\n        list-style: none;\n        ${y()}\n    }\n    ${f} .cdx-nested-list__item {\n        line-height: ${(null == (c = null == m ? void 0 : m.style) ? void 0 : c.lineHeight) || "1.6em"};\n        display: flex;\n        margin-left: 10px\n    }\n    ${f} .cdx-nested-list__item::before {\n        counter-increment:item;\n        margin-right: 5px;\n        white-space: nowrap;\n    }\n    ${f} .cdx-nested-list__item-content {\n        word-break: break-word;\n    }\n    ${f} ol .cdx-nested-list__item::before {\n        content: counters(item, ".") ". ";\n    }\n    ${f} ul .cdx-nested-list__item::before {\n        content: "${b}";\n    }\n    ${f} .cdx-nested-list__item-body {\n        ${y()}\n    }\n\t ${g}\n    ${( ({className: n, backgroundStripe: t, stripeBGColor: e="rgba(0,0,0, .05)"}={}) => t ? `\n            ${n} table tr:nth-child(even){\n                background-color: ${ee(e) ? ie(e) : e};\n               \n            }\n        ` : "")({
                    className: f,
                    ...null == (p = null == (d = null == n ? void 0 : n.post) ? void 0 : d.table) ? void 0 : p.config
                })}\n    `
            },
            progressbar: function(n) {
                var t, e, i, o;
                const {progressbar: r} = n
                  , {animation: a, progressContainerStyle: l} = r
                  , s = new he(n)
                  , {className: c} = s
                  , d = `${c} label`
                  , p = `${c} .tooltip`
                  , u = `${c} .tooltip .triangle`
                  , f = `${c} .progressbar`
                  , g = `${c} .progress-horizontal`
                  , h = `${c} .progress-horizontal:after`
                  , m = s.combined("style", c)
                  , $ = s.combined("progressbar/progressStyle", g)
                  , b = s.combined("progressbar/progressLoad", h)
                  , y = s.combined("progressbar/progressContainerStyle", f)
                  , v = s.combined("progressbar/labelStyle", d)
                  , w = s.combined("progressbar/tooltipStyle", p)
                  , x = null == (t = null == r ? void 0 : r.items) ? void 0 : t.map((n => {
                    const t = {
                        left: `${n.value || 50}%`
                    };
                    return n.value < 3 ? t.left = "3%" : n.value > 96 && (t.left = "96%"),
                    new he({
                        style: t
                    }).getGeneralStyle("style", `${c} .${te}-progress-${n.id} .tooltip`)
                }
                ))
                  , S = null == (e = null == r ? void 0 : r.items) ? void 0 : e.map((n => {
                    const t = {
                        width: `${n.value || 50}%`
                    };
                    return new he({
                        style: t
                    }).getGeneralStyle("style", `${c} .${te}-progress-${n.id}:after`)
                }
                ))
                  , k = null == (i = null == r ? void 0 : r.items) ? void 0 : i.map((n => {
                    let t = "rgba(255,255,255,.4)";
                    if (a.stripe) {
                        return new he({
                            style: {
                                "background-image": `linear-gradient(\n                45deg\n                ,${t} 25%,transparent 25%,transparent 50%,${t} 50%,${t} 75%,transparent 75%,transparent);`,
                                backgroundSize: "40px 40px"
                            }
                        }).getGeneralStyle("style", `${c} .${te}-progress-${n.id}:after`)
                    }
                }
                ))
                  , C = null == (o = null == r ? void 0 : r.items) ? void 0 : o.map((n => {
                    const t = {
                        left: "50%"
                    };
                    return n.value < 3 ? t.left = "20%" : n.value > 96 && (t.left = "73%"),
                    new he({
                        style: t
                    }).getGeneralStyle("style", `${c} .${te}-progress-${n.id} .tooltip .triangle`)
                }
                ));
                return `\n    \n    ${m}\n    ${g}{\n        position: relative;\n    }\n    ${$}\n\n    ${h}{\n        content: '';\n        animation-name:progresss-stripes-${n.id};\n        animation-duration: 2s;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n    ${b}\n    ${S.join("\n") || ""}\n    ${k.join("\n") || ""}\n\n    ${v}\n    ${d}{\n        display: ${"middle" === (null == l ? void 0 : l.flexDirection) ? "none" : "block"};\n    }\n    ${p}{\n        display: 'inline-block';\n        position: absolute;\n        max-width: 200px;\n        top: -45px;\n        transition: all 0.3s;\n        transform: translateX(-50%);\n    }\n    ${w}\n    ${u}{\n        display: inline-block;\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        background: inherit;\n        left: 50%;\n        bottom: 0;\n        z-index: -1;\n        transform: rotate(-45deg) translateX(-50%);\n    }\n\n    ${f}{\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin: 0 0 var(--gap) 0;\n    }\n    ${f}:last-child{\n        margin-bottom: 0;\n    }\n    ${y}\n    ${d}.label-onBar{\n        position: absolute;\n        top: 50%;\n        left: 0;\n        z-index: 9;\n        transform: translateY(-50%);\n        display: ${"middle" === (null == l ? void 0 : l.flexDirection) ? "block" : "none"};\n    }\n    \n    ${( () => {
                    const t = {
                        borderColor: `${r.tooltipStyle.backgroundColor} transparent transparent transparent`
                    };
                    return new he({
                        style: t
                    }).getGeneralStyle("style", `${c} .${te}-progress-${n.id} .tooltip:before`)
                }
                )()}\n    ${x.join("\n") || ""}\n    ${C.join("\n")}\n\n    ${( () => {
                    if (null != a && a.animate)
                        return `@keyframes progresss-stripes-${n.id} {\n            0% {\n                background-position: 40px 0;\n            }\n            100% {\n                background-position: 0 0;\n            }\n        }`
                }
                )() || ""}\n    `
            },
            counterdown: function(n) {
                const {counter: t={}} = n
                  , e = new he(n)
                  , i = $e(n)
                  , o = `${i} .counter-wrapper`
                  , r = `${o} .counter-value`
                  , a = `${o} .counter-text`
                  , l = `${i} .counter--separator`
                  , s = function(n) {
                    return `align-items:${{
                        row: "baseline",
                        column: "center"
                    }[n]};`
                }(t.counterWrapperStyle.flexDirection)
                  , c = function(n) {
                    return `margin-right:${{
                        row: "5px",
                        column: ""
                    }[n]};`
                }(t.counterWrapperStyle.flexDirection)
                  , d = Be(t.align)
                  , p = e.combined("counter/countStyle", r)
                  , u = e.combined("counter/separatorStyle/line", `${l}__line`)
                  , f = e.combined("counter/separatorStyle/colon", `${l}__colon`)
                  , g = e.combined("counter/textStyle", a)
                  , h = e.combined("style", i);
                return `\n  \n\n  ${i} .wrapper {\n    display:flex;\n    justify-content:space-evenly;\n    align-items:center;\n    overflow:hidden;\n    ${d || ""}\n  }\n\n  ${i} .finish-text{\n    text-align: center;\n    font-size:${t.textStyle.fontSize};\n    color:${ee(t.textStyle.color) ? ie(t.textStyle.color) : t.textStyle.color};\n  }\n\n  ${h}\n  \n  ${o} {\n    display: flex;\n    justify-content: center;\n    ${s}\n    position: relative;\n    padding: 0;\n    line-height:1.3;\n    ${ue(t.counterWrapperStyle)}\n  }\n\n  ${o} > *:first-child{\n    ${c}\n  }\n  \n  ${i} .getTime {\n    display:none;\n  }\n  \n  ${p}\n  \n  ${g}\n  \n  ${l} {\n    display:flex;\n    align-self:stretch;\n    align-items: center;\n  }\n  \n  ${l}__line {\n    background:${ee(t.separatorStyle.bgColor) ? ie(t.separatorStyle.bgColor) : t.separatorStyle.bgColor};\n  }\n\n  ${u}\n\n  ${l}__colon {\n    color:${ee(t.separatorStyle.bgColor) ? ie(t.separatorStyle.bgColor) : t.separatorStyle.bgColor};\n  }\n  \n  ${f}\n\n  @media all and (max-width:767px){\n  ${o} {\n    flex-direction:column;\n    align-items: center;\n    }\n  }\n\n  `
            },
            imageSlider: function(n) {
                const t = new he(n)
                  , {className: e} = t
                  , {slider: {caption: i, img: o}} = n
                  , r = `${e} .splide__slide figure img`
                  , a = `${e} .splide__slide figure`
                  , l = `${e} .splide__slide figure figcaption`
                  , s = "overlay" === i.type
                  , c = t.combined("slider/img/style", r)
                  , d = t.combined("slider/caption/style", l);
                return `\n    ${e} {\n        max-width: 100%\n    }\n      \n      \t/* splide slide style */\n\t${e} .splide__slide a {\n\t\ttext-decoration:none;\n\t}\n\n\t/* splide figure style */\n\t${e} .splide__slide figure {\n\t\tpadding:0;\n\t\tmargin:0;\n\t\tposition:relative;\n\t\twidth:100%;\n\t\theight:100%;\n\t}\n\n\t/* image combined style */\n\t${c}\n    ${( () => {
                    var n;
                    const t = null == (n = null == o ? void 0 : o.style) ? void 0 : n.borderRadius;
                    return t ? `${a} {\n          border-radius: ${t};\n          overflow: hidden;\n      }` : ""
                }
                )()}\n\n\t ${l} {\n\t\tposition: absolute;\n\t\tbottom:0;\n\t\tleft:0;\n\t\twidth:100%;\n\t}\n\t\n\t/* caption combined style */\n\t ${d}\n\n\t/* overlay style */\n\t ${s ? `\n  ${l} {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    width:100%;\n    height:100%;\n    opacity:0;\n    z-index:-1;\n  }\n  ` : ""}\n\n    /* image hover style */\n    ${s ? `\n  ${e} .splide__slide figure:hover > figcaption {\n    z-index:1;\n    opacity:1;\n    display:grid;\n    place-content:center;\n  }\n  ` : ""}\n\n\t`
            },
            contactForm: function(n) {
                const {form: t={}} = n
                  , e = new he(n)
                  , {className: i} = e
                  , o = `${i} button`
                  , r = e.combined("form/buttonStyle", o);
                let a = "";
                return et(t.buttonWrapperStyle) || (a += `${i} .form-button {\n            ${ue(t.buttonWrapperStyle)}\n        }`),
                `\n        ${a}\n\n        ${i} .form-control {\n            width: 100%;\n            ${ue(t.fieldStyle)}\n            ${t.gap ? `margin-bottom: ${t.gap};` : ""}\n        }\n\n        ${i} label {\n            display: inline-block;\n            ${ue(t.labelStyle)}\n        }\n\n        ${r}\n    `
            },
            searchWidget: je,
            imageGallery: n => {
                var t;
                return "advanced" === (null == (t = n.lightBox) ? void 0 : t.type) ? function(n) {
                    const t = new he(n)
                      , {settings: {galleryType: e, hideOnMobile: i}, imageGallery: {caption: o, img: r}, style: a} = n
                      , l = t.className
                      , s = `${l} figure figcaption`
                      , c = `${l} .${e} figure img`
                      , d = `${l} .gallery-tab`
                      , p = `${l} .gallery-tab li button`
                      , u = `${l} .dorik-btn`
                      , f = `${l} .gallery-tab li button.active`
                      , g = `${l} .${e} figure`
                      , h = "overlay" === o.type
                      , m = t.combined("imageGallery/img/style", c)
                      , $ = t.combined("imageGallery/caption/style", s)
                      , b = t.combined("imageGallery/buttonStyle", u)
                      , y = t.combined("imageGallery/pagination/style", `${l} .pagination button`)
                      , v = t.combined("imageGallery/tabStyle/buttonStyle", p)
                      , w = t.combined("imageGallery/tabStyle/activeBtnStyle", f)
                      , x = t.combined("imageGallery/tabStyle", d)
                      , S = ( () => {
                        var n;
                        const t = null == (n = null == r ? void 0 : r.style) ? void 0 : n.borderRadius;
                        return t ? `${g} {\n            border-radius: ${t};\n            overflow: hidden;\n        }` : ""
                    }
                    )()
                      , k = Pe({
                        className: l
                    })
                      , C = h ? `\n      ${s} {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        width:100%;\n        height:100%;\n        opacity:0;\n        z-index:-1;\n      }\n      ` : ""
                      , A = h ? `\n      ${l} .${e} figure:hover > figcaption {\n        z-index:1;\n        opacity:1;\n        display:grid;\n        place-content:center;\n      }\n      ` : ""
                      , z = !h && i ? `\n    @media screen and (max-width:767px){\n      ${l} .${e} figure figcaption {\n        display:none;\n      }\n    }\n    ` : "";
                    return `\n    ${l} a {\n      text-decoration:none;\n    }\n      \n    /** image combined style */\n    ${m}\n    ${S}\n    \n    /** caption combined style */\n     ${$}\n\n     ${s} {\n      transition:opacity ${a.transition};\n     }\n\n     ${l} .${e} figure {\n       position: relative;\n       cursor:pointer;\n     }\n\n     /* overlay style */\n     ${C}\n\n    ${(n => {
                        switch (n) {
                        case "justified":
                            return Fe(l);
                        case "mesonry":
                            return De(l)
                        }
                    }
                    )(e)}\n\n    /* image hover style */\n    ${A}\n\n    ${z}\n\n    /* ==========TAB STYLE=============== */\n    ${d}{\n      list-style: none;\n      padding-left: 0;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin: 0 0 30px 0;  \n    }\n\n    ${x}\n    ${d} li{\n      margin-right: var(--btn-gap);\n      margin-left: var(--btn-gap);\n    }\n    ${d} button{\n      cursor: pointer;\n    }\n    ${p}{\n      color: #FFFFFF;\n      fontSize: 18px;\n      padding: 12px 20px;\n      border: 0px solid #517dd8;\n      border-radius: 5px;\n      background-color: #517dd8;\n    }\n    ${v}\n    ${f}{\n      color: #FFFFFF;\n      background-color: #228324;\n    }\n    ${w}\n    \n\n    /* gallery btn */\n    ${b}\n\n    /* pagination style */\n    ${k}\n    ${y}\n  `
                }(n) : function(n) {
                    const t = new he(n)
                      , {settings: {galleryType: e, hideOnMobile: i}, imageGallery: {caption: o, img: r}, style: a} = n
                      , l = t.className
                      , s = `${l} figure figcaption`
                      , c = `${l} .show-image-modal`
                      , d = `${l} .hide-image-modal`
                      , p = `${l} .${e} figure img`
                      , u = `${l} .gallery-tab`
                      , f = `${l} .gallery-tab li button`
                      , g = `${l} .dorik-btn`
                      , h = `${l} .gallery-tab li button.active`
                      , m = `${l} .${e} figure`
                      , $ = "overlay" === o.type
                      , b = t.combined("imageGallery/img/style", p)
                      , y = t.combined("imageGallery/caption/style", s)
                      , v = t.combined("imageGallery/buttonStyle", g)
                      , w = t.combined("imageGallery/tabStyle/buttonStyle", f)
                      , x = t.combined("imageGallery/tabStyle/activeBtnStyle", h)
                      , S = t.combined("imageGallery/tabStyle", u)
                      , k = ( () => {
                        var n;
                        const t = null == (n = null == r ? void 0 : r.style) ? void 0 : n.borderRadius;
                        return t ? `${m} {\n          border-radius: ${t};\n          overflow: hidden;\n      }` : ""
                    }
                    )()
                      , C = $ ? `\n      ${s} {\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        width:100%;\n        height:100%;\n        opacity:0;\n        z-index:-1;\n      }\n      ` : ""
                      , A = $ ? `\n      ${l} .${e} figure:hover > figcaption {\n        z-index:1;\n        opacity:1;\n        display:grid;\n        place-content:center;\n      }\n      ` : ""
                      , z = !$ && i ? `\n    @media screen and (max-width:767px){\n      ${l} .${e} figure figcaption {\n        display:none;\n      }\n    }\n    ` : "";
                    return `\n    ${l} a {\n      text-decoration:none;\n    }\n      \n    /** image combined style */\n    ${b}\n    \n    ${k}\n    /** caption combined style */\n     ${y}\n\n     ${s} {\n      transition:opacity ${a.transition};\n     }\n\n     ${l} .${e} figure {\n       position: relative;\n       cursor:pointer;\n     }\n\n     /* overlay style */\n     ${C}\n\n    ${(n => {
                        switch (n) {
                        case "justified":
                            return Ue(l);
                        case "mesonry":
                            return Ve(l)
                        }
                    }
                    )(e)}\n\n    /* image hover style */\n    ${A}\n\n    /* modal show button */\n    ${c} {\n      background-color: black;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 10000;\n      display: grid;\n      place-items: center; \n    }\n\n    /* modal hide button */\n    ${c} .hide-button {\n      position: absolute;\n      top: 5px;\n      right: 20px;\n      border: none;\n      cursor: pointer;\n      padding: 5px;\n      background:transparent;\n      color:white;\n      font-size:35px;\n    }\n\n      ${c} img {\n      max-width:90%;\n      max-height:90vh;\n    }\n\n    ${c} .hide-button:hover {\n      color:red;\n    }\n    \n    ${d} {\n      display:none;\n    }\n\n    ${z}\n\n    /* ==========TAB STYLE=============== */\n    ${u}{\n      list-style: none;\n      padding-left: 0;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin: 0 0 30px 0;  \n    }\n\n    ${S}\n    ${u} li{\n      margin-right: var(--btn-gap);\n      margin-left: var(--btn-gap);\n    }\n    ${u} button{\n      cursor: pointer;\n    }\n    ${f}{\n      color: #FFFFFF;\n      fontSize: 18px;\n      padding: 12px 20px;\n      border: 0px solid #517dd8;\n      border-radius: 5px;\n      background-color: #517dd8;\n    }\n    ${w}\n    ${h}{\n      color: #FFFFFF;\n      background-color: #228324;\n    }\n    ${x}\n    \n\n    /* gallery btn */\n    ${v}\n\n  `
                }(n)
            }
            ,
            subscription: function(n) {
                var t, e, i, o, r, a, l, s;
                const {form: c={}} = n
                  , d = c.gap ? "vertical" === c.type ? `margin-bottom: ${c.gap};` : `flex: 1; margin-right: ${c.gap};` : ""
                  , p = (null == (r = null == (o = null == (i = null == (e = null == (t = n.pseudoClass) ? void 0 : t.hover) ? void 0 : e.form) ? void 0 : i.button) ? void 0 : o.icon) ? void 0 : r.color) || null
                  , u = new he(n)
                  , {className: f} = u
                  , g = f + " .form-control"
                  , h = `${f} button`
                  , m = u.combined("form/buttonStyle", h);
                let $ = "";
                return $ += `@media screen and (min-width: 768px) {\n    ${f + " .fields-wrapper"} {\n            display: flex;\n            align-items: flex-end;\n            flex-direction: ${"vertical" !== c.type ? "row" : "column"};\n        }\n    }`,
                c.fieldsHeight && ($ += `${g} {\n            height: ${c.fieldsHeight};\n        }`),
                c.buttonPosition ? $ += `${g} {\n            ${"horizontal" === c.type ? "align-self: auto;" : "width:100%"}\n        }` : $ += `${g} {\n            ${"horizontal" === c.type ? "align-self: auto;" : ""}\n        }`,
                null != (a = c.button) && a.icon && ($ += `\n            ${h} .icon {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                ${ve(c.button)}\n            }\n        `),
                `\n    ${$}\n\n    ${f} .form-group {\n        ${d}\n        width: 100%;\n    }\n\n    @media screen and (max-width: 767px) {\n        ${f} .form-group {\n            margin-bottom: 10px;\n        }\n        ${f} button {\n            width: 100%;\n        }\n    }\n\n    ${f} .hidden {\n        display: none;\n    }\n\n    ${f} .form-group:last-child {\n        margin: 0;\n    }\n\n    ${f} .form-label {\n        display: block;\n        ${ue(c.labelStyle)}\n    }\n\n    ${h} .button-content {\n        display: flex;\n        flex-direction: ${(null == (s = null == (l = c.button) ? void 0 : l.style) ? void 0 : s.flexDirection) ?? "row"} ;\n        justify-content: center;\n        align-items: center;\n    }\n\n    ${g} {\n        ${ue(c.fieldStyle)}\n        width: 100%;\n    }\n\n    ${m}\n\n    ${h}{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: ${c.fieldsHeight || "auto"};\n        ${c.buttonPosition ? "horizontal" === c.type ? "align-self: auto;" : "width:100%;" : ""}\n    }\n\n    ${h}:hover :is(.icon, .icon svg) {\n        color: ${ee(p) ? ie(p) : p}\n    }\n\n    `
            },
            contentSlider: function(n) {
                const t = new he(n)
                  , {className: e} = t
                  , {settings: {space: i}, slider: {contents: o}} = n
                  , r = t.combined("slider/slide/style", `${e} .content__slider`)
                  , a = t.combined("slider/title/style", `${e} .content__slider--description h3`)
                  , l = t.combined("slider/paragraph/style", `${e} .content__slider--description .content`)
                  , s = t.combined("slider/button/style", `${e} .content__slider--description button`)
                  , c = t.combined("slider/img/style", `${e} .content__slider img`);
                return `\n    ${e} {\n        max-width: 100%\n    }\n    \n    ${e} p {\n        margin:0;\n    }\n\n\t${e} .content__slider--wrapper,\n\t${e} .content__slider {\n\t\tdisplay:flex;\n\t}\n\n\t${e} .content__slider--wrapper {\n\t\theight:100%;\n\t}\n\n\t${e} .content__slider {\n\t\talign-items:center;\n        flex:1;\n\t}\n\n\t${e}  .content__slider--description {\n        flex:1;\n\t}\n\n\t${r}\n\n\t${e} .spacer {\n\t\twidth:${i};\n\t\tflex-shrink:0;\n\t}\n\n\t${a}\n\n\t${l}\n\n\n\t${s}\n\n\t${c}\n\n\t${o.map((n => new he(n).getGeneralStyle("style", `${e} .wrapper-${n.id}`))).join("\n")}\n\n\t`
            },
            counterCircle: function(n) {
                var t, e, i, o, r, a, l, s;
                const {counterCircle: c, media: {mobile: d, tablet: p}={}} = n
                  , {progressLoad: u, progressStyle: f, duration: g="5000"} = c
                  , h = new he(n)
                  , {className: m} = h
                  , $ = `${m} .content`
                  , b = `${m} .counter-wrapper`
                  , y = `${m} .counter-bar`
                  , v = `${m} .progress-counter`
                  , w = `${m} .counter-bar.pie .progress-counter`
                  , x = `${m} .counter-bar.square .progress-counter`
                  , S = `${m} .progress-counter .overlay`
                  , k = `${m} .progress-counter .title`
                  , C = `${m} .title`
                  , A = `${m} .progress-counter .left, ${m} .progress-counter .right`
                  , z = null == (e = null == (t = null == c ? void 0 : c.circleStyle) ? void 0 : t.Size) ? void 0 : e.width
                  , B = re(null == u ? void 0 : u.backgroundColor)
                  , j = re(null == f ? void 0 : f.backgroundColor)
                  , E = null == (r = null == (o = null == (i = null == d ? void 0 : d.counterCircle) ? void 0 : i.circleStyle) ? void 0 : o.Size) ? void 0 : r.width
                  , I = null == (s = null == (l = null == (a = null == p ? void 0 : p.counterCircle) ? void 0 : a.circleStyle) ? void 0 : l.Size) ? void 0 : s.width
                  , T = h.combined("style", m)
                  , _ = h.combined("counterCircle/circleStyle/Size", v)
                  , L = h.combined("counterCircle/circleContainerStyle", y)
                  , O = h.combined("counterCircle/circleValue", `${k}`)
                  , R = h.combined("counterCircle/circleValue", `${C}`)
                  , M = h.combined("counterCircle/contentStyle", $)
                  , N = h.combined("counterCircle/circleWrapperStyle", b)
                  , U = c.items.map((t => {
                    let e = parseFloat(t.value);
                    return e >= 50 ? ` @keyframes load1-${n.id}-${t.id} {\n                0% {transform: rotate(0deg);}\n            \n                100% {transform: rotate(180deg);}\n            }\n            \n            @keyframes load2-${n.id}-${t.id} {\n                0% {z-index: 9;transform: rotate(180deg);}\n            \n                100% {\n                    z-index: 9;transform: rotate(${3.6 * e}deg);}\n            }` : `\n            ${S}.overlay-${t.id} {\n                z-index: 10 !important;\n            }\n            @keyframes load1-${n.id}-${t.id} {\n                0% {transform: rotate(0deg);}\n            \n                100% {transform: rotate(${3.6 * e}deg);}\n            }\n            \n            @keyframes load2-${n.id}-${t.id} {\n                0% {z-index: 9;transform: rotate(0deg);}\n            \n                100% {\n                    z-index: 9;transform: rotate(${3.6 * e}deg);}\n            }`
                }
                ))
                  , V = c.items.map((t => {
                    let e = `load1-${n.id}-${t.id}`;
                    const i = t.value > 50 ? g / 2 : g;
                    return new he({
                        style: {
                            animation: `${e} ${i}ms linear forwards`
                        }
                    }).getGeneralStyle("style", `${v} .left-${t.id}.animate`)
                }
                ))
                  , F = c.items.map((t => {
                    let e = `load2-${n.id}-${t.id}`;
                    const i = t.value > 50 ? g / 2 : g;
                    return new he({
                        style: {
                            animation: `${e} ${i}ms linear forwards  ${i}ms`
                        }
                    }).getGeneralStyle("style", `${v} .right-${t.id}.animate`)
                }
                ));
                return `\n    \n    ${T}\n    ${N}\n    .counter-bar{\n        display: flex;\n        gap: var(--gap);\n    }\n    ${b}{\n        display: inline-block;\n        min-width: ${z};\n    }\n    \n    ${v} {\n        border-radius: 50%;\n        overflow: hidden;\n        position: relative;\n        display: inline-block;\n        background: ${j};\n    }\n    ${x}{\n        border-radius: 0;\n    }\n    ${M}\n    \n    ${y}{\n        display: flex;\n        flex-wrap: wrap;\n    }\n    ${L}\n    \n    ${_}\n    \n    ${k} {\n        position: absolute;\n        width: calc(100% - var(--border-size));\n        height: calc(100% - var(--border-size));\n        top: 50%;\n        left: 50%;\n        border-radius: 50%;\n        transform: translate(-50%, -50%);\n        background: green;\n        z-index:11;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    ${O}\n    ${R}\n    ${w} .title{\n        background-color: transparent !important;\n    }\n    \n    ${S} {\n        width: 50%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1;\n        background-color: ${j};\n        border-radius: ${z} 0px 0px ${z};\n    }\n    \n    ${A} {\n        width: 50%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: ${B};\n        border-radius: ${z} 0px 0px ${z};\n        border-right: 0;\n        transform-origin: right;\n    }\n\n    ${V.join("\n") || ""}\n    ${F.join("\n") || ""}\n    ${U.join("\n") || ""}\n\n\n\n    @media screen and (max-width: 1023px) {\n        ${A},  ${S} {\n            border-radius: ${I || z} 0px 0px ${I || z};\n        }\n    }\n    @media screen and (max-width:767px){\n        ${A},  ${S} {\n            border-radius: ${E || z} 0px 0px ${E || z};\n        }\n    }\n\n\n    \n    `
            },
            paymentWidgets: function(n) {
                var t, e, i;
                const o = $e(n)
                  , r = (null == (i = null == (e = null == (t = n.pseudoClass) ? void 0 : t.hover) ? void 0 : e.icon) ? void 0 : i.color) || null;
                return `\n    ${o} :is(.icon, .icon svg) {\n        ${ve(n)}\n    }\n\n    ${o}:hover :is(.icon, .icon svg) {\n        color: ${ee(r) ? ie(r) : r};\n    }\n    \n    `
            },
            airtableGrid: Qe,
            airtableTable: Qe,
            airtableDetails: function(n) {
                const t = new he(n)
                  , e = $e(n)
                  , i = `${e} .dorik-img`
                  , o = `${e} .dorik-title`
                  , r = `${e} .dorik-text`
                  , a = `${e} .airtable-row`
                  , l = `${e} .airtable-section`
                  , s = `${e} .airtable-content`
                  , c = `${e} .load-more-button`
                  , d = `${e} .wrapper .sidebar`
                  , p = `${e} .wrapper .main`
                  , {airtable: {items: u=[], defaultSidebarItems: f=[], sidebarItems: g=[], defaultItems: h=[]}} = n
                  , m = [...g, ...f, ...h, ...u]
                  , $ = t.combined("airtable/titleStyle", o)
                  , b = t.combined("airtable/paragraphStyle", r)
                  , y = t.combined("airtable/buttonWrapper", c)
                  , v = t.combined("airtable/imageStyle", i)
                  , w = t.combined("airtable/style", a)
                  , x = t.combined("airtable/sidebarStyle", d)
                  , S = t.combined("airtable/mainSection", p)
                  , k = null == m ? void 0 : m.map((n => new he(n).combined("style", `${e} .${n.elType || "text"}-${n.id}`)))
                  , C = null == m ? void 0 : m.map((n => "img" !== n.elType ? "" : new he(n).combined("imagesStyle", `${e} .images-${n.id}`)))
                  , A = null == m ? void 0 : m.map((n => "btn" !== n.elType ? "" : new he(n).combined("buttonStyle", `${e} .button-${n.id}`)))
                  , z = [...u, ...h].map((n => "line" !== n.elType ? "" : new he(n).combined("lineStyle", `${e} .wrapper-${n.elType}-${n.id}`)))
                  , B = null == h ? void 0 : h.map((n => new he(n).combined("style", `${e} .${n.elType || "text"}-${n.id}`)));
                return `\n        \n        ${e} .tag{\n            margin-right: 5px;\n            margin-bottom: 5px;\n            padding: 0 5px;\n            border: 1px solid #888;\n            border-radius: 4px;\n        }\n        ${e} .btn{\n            padding: 6px 12px;\n            border: 1px solid blue;\n            border-radius: 5px;\n            background: blue;\n            color: #fff;\n        }\n        ${e} img {\n            width: inherit;\n            height: inherit;\n            object-fit: inherit;\n        }\n        ${e}{\n            overflow-wrap: anywhere;\n        }\n        \n        /*COMMON LAYOUT CSS*/\n        ${$} \n        ${b} \n        ${v}\n        ${s}{\n            width: 100%;\n        }\n        ${l}{\n            display: flex;\n            flex-direction: row;\n            align-items: flex-start;\n            gap: 15px;\n        }\n        ${a}{\n            position: relative;\n        }\n        \n        ${w}\n        \n        \n        ${(n => {
                    const {airtable: {configuration: t={}}} = n
                      , e = {
                        custom: Ge,
                        jobDetails: He,
                        singleBlogPost: We,
                        profileDetails: Ye,
                        projectDetails: qe
                    }[t.layout];
                    return e ? e(n) : ""
                }
                )(n)}\n        ${S}\n        ${x}\n        \n        /*COMMON INDIVIDUAL EL CSS*/\n        ${y}\n        ${(null == B ? void 0 : B.join("\n")) || ""}\n        ${(null == k ? void 0 : k.join("\n")) || ""}\n        ${(null == C ? void 0 : C.join("\n")) || ""}\n        ${(null == A ? void 0 : A.join("\n")) || ""}\n        ${(null == z ? void 0 : z.join("\n")) || ""}\n        \n`
            },
            airtableJobBoard: Qe,
            testimonialSlider: function(n) {
                var t, e, i, o, r, a;
                const l = new he(n)
                  , {className: s} = l
                  , {settings: {__layout: c, position: d, gapFromImg: p, gapFromTitle: u, textAlign: f}, slider: {slide: {style: {boxShadow: g}}}} = n
                  , h = `${s} .testimonial__content--img, ${s} .testimonial__info--img`
                  , m = l.combined("slider/slide/style", `${s} .testimonial`)
                  , $ = l.combined("slider/img/style", h)
                  , b = ( (n, t, e) => {
                    switch (n) {
                    case "inline":
                    case "stacked":
                        return {
                            "flex-start": "left",
                            center: "center",
                            "flex-end": "right"
                        }[t];
                    case "left":
                        return "left";
                    case "right":
                        return "right";
                    default:
                        return {
                            "flex-start": "left",
                            center: "center",
                            "flex-end": "right"
                        }[e] || "left"
                    }
                }
                )(c, f, null == (i = null == (e = null == (t = n.slider) ? void 0 : t.slide) ? void 0 : e.style) ? void 0 : i.alignItems)
                  , y = ( (n, t, e) => {
                    switch (n) {
                    case "inline":
                    case "stacked":
                        return t;
                    case "left":
                        return "flex-start";
                    case "right":
                        return "flex-end";
                    default:
                        return e
                    }
                }
                )(c, f, null == (a = null == (r = null == (o = n.slider) ? void 0 : o.slide) ? void 0 : r.style) ? void 0 : a.alignItems)
                  , v = ( (n, t, e) => `${t} .testimonial__separator {\n            ${["above", "bellow", "stacked"].includes(n) ? "height" : "width"}:${e};\n            flex-shrink:0;\n    }`)(c, s, p)
                  , w = ( (n={}) => Object.values(n).reduce(( (n, t) => {
                    const e = isNaN(parseFloat(t)) ? 0 : parseFloat(t);
                    return Math.max(n, e)
                }
                ), 0))(g);
                return `\n        ${s} {\n            max-width: 100%\n        }\n        \n\t\t${s} .testimonial, ${s} .testimonial__content, ${s} .testimonial__info {\n\t\t\tdisplay:flex;\n            flex-grow: 1;\n\t\t}\n\t\t${s} .testimonial {\n\t\t\tflex-direction:${(n => {
                    switch (n) {
                    case "left":
                        return "row-reverse";
                    case "above":
                        return "column-reverse";
                    case "bellow":
                        return "column";
                    default:
                        return "row"
                    }
                }
                )(c)};\n            margin:${w}px;\n\t\t}\n\n\t\t${s} .testimonial p,\n        ${s} .testimonial .content {\n\t\t\tmargin:0;\n\t\t\ttext-align:${b};\n\t\t}\n\n\t\t${s} .testimonial__info--text p {\n\t\t\ttext-align:${"inline" === c && "center" === f ? "left" : b};\n\t\t}\n\n\t\t${s} .spacer {\n\t\t\theight:${u};\n\t\t}\n\n\t\t${m}\n\n\n\t\t${s} .testimonial__content {\n\t\t\tflex-direction:${( (n, t) => "inline" !== n && "stacked" !== n || "top" !== t ? "column" : "column-reverse")(c, d)};\n\t\t\talign-items:${y || ""};\n\n\t\t}\n\n\t\t${s} .testimonial__info {\n\t\t\tflex-direction:${"stacked" === c ? "column" : "row"};\n\t\t\talign-items:center;\n\t\t}\n\n\t\t${l.combined("slider/paragraph/style", `${s} .testimonial__content .content`)}\n\n\t\t ${l.combined("slider/name/style", `${s} .testimonial__info p:first-child`)}\n\n\t\t ${l.combined("slider/title/style", `${s} .testimonial__info p:last-child`)}\n\n        ${v}\n\n\t\t ${h} {\n\t\t\twidth:100px;\n\t\t\theight:100px;\n\t\t\tobject-fit:cover;\n\t\t\tborder-radius:50px;\n\t\t\tflex-shrink:0;\n\t\t}\n\n\t\t ${$}\n\n        `
            },
            subscriptionBanner: function(n) {
                let t = "";
                const {banner: {button: e, text: i}} = n
                  , o = $e(n);
                return t += `${o} {\n        min-height:230px;\n        display: flex;\n        flex-direction: column;\n        justify-content:center;\n        align-items:center;\n        gap:20px;\n        padding:20px;\n    }`,
                t += `${o} .banner-heading{\n        text-align:center;\n        margin:0;\n        color:${i.style.color};\n    }`,
                t += `${o} .banner-button{\n        margin:0;\n        border:none;\n        border-radius: 5px;\n        padding: 8px 25px; \n        color:${e.style.color};\n        background-color:${e.style.bgcolor}\n    }`,
                t += `${o} .subscription-footer{\n        margin:0;\n        color:${i.style.color};\n        display:flex;\n        align-items:center\n     \n    }`,
                t += `${o} .subscription-footer button{\n        margin-left: 10px\n    }`,
                t += `\n        @media (min-width: 320px) {\n            ${o} .subscription-footer {\n                flex-direction: column;\n            }\n        }\n        @media (min-width: 768px) {\n            ${o} .subscription-footer {\n                flex-direction: row;\n            }\n        }\n    `,
                t
            }
        };
        function oi({item: n}) {
            const t = ii[n.type]
              , e = t && t(n) || ""
              , i = function(n) {
                var t, e, i, o;
                const r = new he(n)
                  , {className: a} = r;
                let l = "";
                const s = ni.includes(n.type) ? `${a}-wrapper` : a
                  , c = (null == (e = null == (t = null == n ? void 0 : n.media) ? void 0 : t.tablet) ? void 0 : e.containerItem) || (null == (o = null == (i = null == n ? void 0 : n.media) ? void 0 : i.mobile) ? void 0 : o.containerItem);
                return (n.containerItem || c) && (l += r.combined("containerItem/style", `${s}${s}${s}`)),
                `${l}\n${ti(n)}`
            }(n)
              , o = function(n) {
                const t = $e(n)
                  , e = t.slice(1);
                let i = "";
                const o = [...ni].includes(n.type) ? `:where([class*="${e}-wrapper"]:not([class*="${e}-wrapper"] *))` : ""
                  , r = "nav" === n.type;
                if (o) {
                    const e = (t, e={}) => {
                        var i;
                        const {isWrapper: o} = e
                          , a = null == (i = ae(n, t, "margin")) ? void 0 : i.margin;
                        return {
                            style: {
                                margin: o ? r ? null == a ? void 0 : a.map(( ([n,t]) => [n, `${t} !important`])) : a : ei(a || [])
                            }
                        }
                    }
                      , a = xe((n => e(n, {
                        isWrapper: !0
                    })));
                    i += new he(a).combined("style", `${o}`);
                    const l = xe(e);
                    i += `\n${new he(l).combined("style", `${t}${t}${t}`)}`
                }
                return i
            }(n);
            return `${e}\n${i}\n${o}`
        }
        for (var ri = {}, ai = {
            byteLength: function(n) {
                var t = fi(n)
                  , e = t[0]
                  , i = t[1];
                return 3 * (e + i) / 4 - i
            },
            toByteArray: function(n) {
                var t, e, i = fi(n), o = i[0], r = i[1], a = new ci(function(n, t, e) {
                    return 3 * (t + e) / 4 - e
                }(0, o, r)), l = 0, s = r > 0 ? o - 4 : o;
                for (e = 0; e < s; e += 4)
                    t = si[n.charCodeAt(e)] << 18 | si[n.charCodeAt(e + 1)] << 12 | si[n.charCodeAt(e + 2)] << 6 | si[n.charCodeAt(e + 3)],
                    a[l++] = t >> 16 & 255,
                    a[l++] = t >> 8 & 255,
                    a[l++] = 255 & t;
                return 2 === r && (t = si[n.charCodeAt(e)] << 2 | si[n.charCodeAt(e + 1)] >> 4,
                a[l++] = 255 & t),
                1 === r && (t = si[n.charCodeAt(e)] << 10 | si[n.charCodeAt(e + 1)] << 4 | si[n.charCodeAt(e + 2)] >> 2,
                a[l++] = t >> 8 & 255,
                a[l++] = 255 & t),
                a
            },
            fromByteArray: function(n) {
                for (var t, e = n.length, i = e % 3, o = [], r = 16383, a = 0, l = e - i; a < l; a += r)
                    o.push(hi(n, a, a + r > l ? l : a + r));
                return 1 === i ? (t = n[e - 1],
                o.push(li[t >> 2] + li[t << 4 & 63] + "==")) : 2 === i && (t = (n[e - 2] << 8) + n[e - 1],
                o.push(li[t >> 10] + li[t >> 4 & 63] + li[t << 2 & 63] + "=")),
                o.join("")
            }
        }, li = [], si = [], ci = typeof Uint8Array < "u" ? Uint8Array : Array, di = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pi = 0, ui = di.length; pi < ui; ++pi)
            li[pi] = di[pi],
            si[di.charCodeAt(pi)] = pi;
        function fi(n) {
            var t = n.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var e = n.indexOf("=");
            return -1 === e && (e = t),
            [e, e === t ? 0 : 4 - e % 4]
        }
        function gi(n) {
            return li[n >> 18 & 63] + li[n >> 12 & 63] + li[n >> 6 & 63] + li[63 & n]
        }
        function hi(n, t, e) {
            for (var i, o = [], r = t; r < e; r += 3)
                i = (n[r] << 16 & 16711680) + (n[r + 1] << 8 & 65280) + (255 & n[r + 2]),
                o.push(gi(i));
            return o.join("")
        }
        si[45] = 62,
        si[95] = 63;
        var mi = {
            read: function(n, t, e, i, o) {
                var r, a, l = 8 * o - i - 1, s = (1 << l) - 1, c = s >> 1, d = -7, p = e ? o - 1 : 0, u = e ? -1 : 1, f = n[t + p];
                for (p += u,
                r = f & (1 << -d) - 1,
                f >>= -d,
                d += l; d > 0; r = 256 * r + n[t + p],
                p += u,
                d -= 8)
                    ;
                for (a = r & (1 << -d) - 1,
                r >>= -d,
                d += i; d > 0; a = 256 * a + n[t + p],
                p += u,
                d -= 8)
                    ;
                if (0 === r)
                    r = 1 - c;
                else {
                    if (r === s)
                        return a ? NaN : 1 / 0 * (f ? -1 : 1);
                    a += Math.pow(2, i),
                    r -= c
                }
                return (f ? -1 : 1) * a * Math.pow(2, r - i)
            },
            write: function(n, t, e, i, o, r) {
                var a, l, s, c = 8 * r - o - 1, d = (1 << c) - 1, p = d >> 1, u = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = i ? 0 : r - 1, g = i ? 1 : -1, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t),
                isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0,
                a = d) : (a = Math.floor(Math.log(t) / Math.LN2),
                t * (s = Math.pow(2, -a)) < 1 && (a--,
                s *= 2),
                (t += a + p >= 1 ? u / s : u * Math.pow(2, 1 - p)) * s >= 2 && (a++,
                s /= 2),
                a + p >= d ? (l = 0,
                a = d) : a + p >= 1 ? (l = (t * s - 1) * Math.pow(2, o),
                a += p) : (l = t * Math.pow(2, p - 1) * Math.pow(2, o),
                a = 0)); o >= 8; n[e + f] = 255 & l,
                f += g,
                l /= 256,
                o -= 8)
                    ;
                for (a = a << o | l,
                c += o; c > 0; n[e + f] = 255 & a,
                f += g,
                a /= 256,
                c -= 8)
                    ;
                n[e + f - g] |= 128 * h
            }
        };
        !function(n) {
            const t = ai
              , e = mi
              , i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            n.Buffer = a,
            n.SlowBuffer = function(n) {
                return +n != n && (n = 0),
                a.alloc(+n)
            }
            ,
            n.INSPECT_MAX_BYTES = 50;
            const o = 2147483647;
            function r(n) {
                if (n > o)
                    throw new RangeError('The value "' + n + '" is invalid for option "size"');
                const t = new Uint8Array(n);
                return Object.setPrototypeOf(t, a.prototype),
                t
            }
            function a(n, t, e) {
                if ("number" == typeof n) {
                    if ("string" == typeof t)
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    return c(n)
                }
                return l(n, t, e)
            }
            function l(n, t, e) {
                if ("string" == typeof n)
                    return function(n, t) {
                        if (("string" != typeof t || "" === t) && (t = "utf8"),
                        !a.isEncoding(t))
                            throw new TypeError("Unknown encoding: " + t);
                        const e = 0 | f(n, t);
                        let i = r(e);
                        const o = i.write(n, t);
                        return o !== e && (i = i.slice(0, o)),
                        i
                    }(n, t);
                if (ArrayBuffer.isView(n))
                    return function(n) {
                        if (Y(n, Uint8Array)) {
                            const t = new Uint8Array(n);
                            return p(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return d(n)
                    }(n);
                if (null == n)
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n);
                if (Y(n, ArrayBuffer) || n && Y(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(n, SharedArrayBuffer) || n && Y(n.buffer, SharedArrayBuffer)))
                    return p(n, t, e);
                if ("number" == typeof n)
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                const i = n.valueOf && n.valueOf();
                if (null != i && i !== n)
                    return a.from(i, t, e);
                const o = function(n) {
                    if (a.isBuffer(n)) {
                        const t = 0 | u(n.length)
                          , e = r(t);
                        return 0 === e.length || n.copy(e, 0, 0, t),
                        e
                    }
                    if (void 0 !== n.length)
                        return "number" != typeof n.length || q(n.length) ? r(0) : d(n);
                    if ("Buffer" === n.type && Array.isArray(n.data))
                        return d(n.data)
                }(n);
                if (o)
                    return o;
                if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof n[Symbol.toPrimitive])
                    return a.from(n[Symbol.toPrimitive]("string"), t, e);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n)
            }
            function s(n) {
                if ("number" != typeof n)
                    throw new TypeError('"size" argument must be of type number');
                if (n < 0)
                    throw new RangeError('The value "' + n + '" is invalid for option "size"')
            }
            function c(n) {
                return s(n),
                r(n < 0 ? 0 : 0 | u(n))
            }
            function d(n) {
                const t = n.length < 0 ? 0 : 0 | u(n.length)
                  , e = r(t);
                for (let i = 0; i < t; i += 1)
                    e[i] = 255 & n[i];
                return e
            }
            function p(n, t, e) {
                if (t < 0 || n.byteLength < t)
                    throw new RangeError('"offset" is outside of buffer bounds');
                if (n.byteLength < t + (e || 0))
                    throw new RangeError('"length" is outside of buffer bounds');
                let i;
                return i = void 0 === t && void 0 === e ? new Uint8Array(n) : void 0 === e ? new Uint8Array(n,t) : new Uint8Array(n,t,e),
                Object.setPrototypeOf(i, a.prototype),
                i
            }
            function u(n) {
                if (n >= o)
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                return 0 | n
            }
            function f(n, t) {
                if (a.isBuffer(n))
                    return n.length;
                if (ArrayBuffer.isView(n) || Y(n, ArrayBuffer))
                    return n.byteLength;
                if ("string" != typeof n)
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n);
                const e = n.length
                  , i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === e)
                    return 0;
                let o = !1;
                for (; ; )
                    switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                        return G(n).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return H(n).length;
                    default:
                        if (o)
                            return i ? -1 : G(n).length;
                        t = ("" + t).toLowerCase(),
                        o = !0
                    }
            }
            function g(n, t, e) {
                let i = !1;
                if ((void 0 === t || t < 0) && (t = 0),
                t > this.length || ((void 0 === e || e > this.length) && (e = this.length),
                e <= 0) || (e >>>= 0) <= (t >>>= 0))
                    return "";
                for (n || (n = "utf8"); ; )
                    switch (n) {
                    case "hex":
                        return B(this, t, e);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, e);
                    case "ascii":
                        return A(this, t, e);
                    case "latin1":
                    case "binary":
                        return z(this, t, e);
                    case "base64":
                        return S(this, t, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return j(this, t, e);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + n);
                        n = (n + "").toLowerCase(),
                        i = !0
                    }
            }
            function h(n, t, e) {
                const i = n[t];
                n[t] = n[e],
                n[e] = i
            }
            function m(n, t, e, i, o) {
                if (0 === n.length)
                    return -1;
                if ("string" == typeof e ? (i = e,
                e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648),
                q(e = +e) && (e = o ? 0 : n.length - 1),
                e < 0 && (e = n.length + e),
                e >= n.length) {
                    if (o)
                        return -1;
                    e = n.length - 1
                } else if (e < 0) {
                    if (!o)
                        return -1;
                    e = 0
                }
                if ("string" == typeof t && (t = a.from(t, i)),
                a.isBuffer(t))
                    return 0 === t.length ? -1 : $(n, t, e, i, o);
                if ("number" == typeof t)
                    return t &= 255,
                    "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(n, t, e) : Uint8Array.prototype.lastIndexOf.call(n, t, e) : $(n, [t], e, i, o);
                throw new TypeError("val must be string, number or Buffer")
            }
            function $(n, t, e, i, o) {
                let r, a = 1, l = n.length, s = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (n.length < 2 || t.length < 2)
                        return -1;
                    a = 2,
                    l /= 2,
                    s /= 2,
                    e /= 2
                }
                function c(n, t) {
                    return 1 === a ? n[t] : n.readUInt16BE(t * a)
                }
                if (o) {
                    let i = -1;
                    for (r = e; r < l; r++)
                        if (c(n, r) === c(t, -1 === i ? 0 : r - i)) {
                            if (-1 === i && (i = r),
                            r - i + 1 === s)
                                return i * a
                        } else
                            -1 !== i && (r -= r - i),
                            i = -1
                } else
                    for (e + s > l && (e = l - s),
                    r = e; r >= 0; r--) {
                        let e = !0;
                        for (let i = 0; i < s; i++)
                            if (c(n, r + i) !== c(t, i)) {
                                e = !1;
                                break
                            }
                        if (e)
                            return r
                    }
                return -1
            }
            function b(n, t, e, i) {
                e = Number(e) || 0;
                const o = n.length - e;
                i ? (i = Number(i)) > o && (i = o) : i = o;
                const r = t.length;
                let a;
                for (i > r / 2 && (i = r / 2),
                a = 0; a < i; ++a) {
                    const i = parseInt(t.substr(2 * a, 2), 16);
                    if (q(i))
                        return a;
                    n[e + a] = i
                }
                return a
            }
            function y(n, t, e, i) {
                return W(G(t, n.length - e), n, e, i)
            }
            function v(n, t, e, i) {
                return W(function(n) {
                    const t = [];
                    for (let e = 0; e < n.length; ++e)
                        t.push(255 & n.charCodeAt(e));
                    return t
                }(t), n, e, i)
            }
            function w(n, t, e, i) {
                return W(H(t), n, e, i)
            }
            function x(n, t, e, i) {
                return W(function(n, t) {
                    let e, i, o;
                    const r = [];
                    for (let a = 0; a < n.length && !((t -= 2) < 0); ++a)
                        e = n.charCodeAt(a),
                        i = e >> 8,
                        o = e % 256,
                        r.push(o),
                        r.push(i);
                    return r
                }(t, n.length - e), n, e, i)
            }
            function S(n, e, i) {
                return 0 === e && i === n.length ? t.fromByteArray(n) : t.fromByteArray(n.slice(e, i))
            }
            function k(n, t, e) {
                e = Math.min(n.length, e);
                const i = [];
                let o = t;
                for (; o < e; ) {
                    const t = n[o];
                    let r = null
                      , a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (o + a <= e) {
                        let e, i, l, s;
                        switch (a) {
                        case 1:
                            t < 128 && (r = t);
                            break;
                        case 2:
                            e = n[o + 1],
                            128 === (192 & e) && (s = (31 & t) << 6 | 63 & e,
                            s > 127 && (r = s));
                            break;
                        case 3:
                            e = n[o + 1],
                            i = n[o + 2],
                            128 === (192 & e) && 128 === (192 & i) && (s = (15 & t) << 12 | (63 & e) << 6 | 63 & i,
                            s > 2047 && (s < 55296 || s > 57343) && (r = s));
                            break;
                        case 4:
                            e = n[o + 1],
                            i = n[o + 2],
                            l = n[o + 3],
                            128 === (192 & e) && 128 === (192 & i) && 128 === (192 & l) && (s = (15 & t) << 18 | (63 & e) << 12 | (63 & i) << 6 | 63 & l,
                            s > 65535 && s < 1114112 && (r = s))
                        }
                    }
                    null === r ? (r = 65533,
                    a = 1) : r > 65535 && (r -= 65536,
                    i.push(r >>> 10 & 1023 | 55296),
                    r = 56320 | 1023 & r),
                    i.push(r),
                    o += a
                }
                return function(n) {
                    const t = n.length;
                    if (t <= C)
                        return String.fromCharCode.apply(String, n);
                    let e = ""
                      , i = 0;
                    for (; i < t; )
                        e += String.fromCharCode.apply(String, n.slice(i, i += C));
                    return e
                }(i)
            }
            n.kMaxLength = o,
            a.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const n = new Uint8Array(1)
                      , t = {
                        foo: function() {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(t, Uint8Array.prototype),
                    Object.setPrototypeOf(n, t),
                    42 === n.foo()
                } catch {
                    return !1
                }
            }(),
            !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
            Object.defineProperty(a.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this))
                        return this.buffer
                }
            }),
            Object.defineProperty(a.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this))
                        return this.byteOffset
                }
            }),
            a.poolSize = 8192,
            a.from = function(n, t, e) {
                return l(n, t, e)
            }
            ,
            Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(a, Uint8Array),
            a.alloc = function(n, t, e) {
                return function(n, t, e) {
                    return s(n),
                    n <= 0 ? r(n) : void 0 !== t ? "string" == typeof e ? r(n).fill(t, e) : r(n).fill(t) : r(n)
                }(n, t, e)
            }
            ,
            a.allocUnsafe = function(n) {
                return c(n)
            }
            ,
            a.allocUnsafeSlow = function(n) {
                return c(n)
            }
            ,
            a.isBuffer = function(n) {
                return null != n && !0 === n._isBuffer && n !== a.prototype
            }
            ,
            a.compare = function(n, t) {
                if (Y(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)),
                Y(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                !a.isBuffer(n) || !a.isBuffer(t))
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (n === t)
                    return 0;
                let e = n.length
                  , i = t.length;
                for (let o = 0, r = Math.min(e, i); o < r; ++o)
                    if (n[o] !== t[o]) {
                        e = n[o],
                        i = t[o];
                        break
                    }
                return e < i ? -1 : i < e ? 1 : 0
            }
            ,
            a.isEncoding = function(n) {
                switch (String(n).toLowerCase()) {
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
            }
            ,
            a.concat = function(n, t) {
                if (!Array.isArray(n))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === n.length)
                    return a.alloc(0);
                let e;
                if (void 0 === t)
                    for (t = 0,
                    e = 0; e < n.length; ++e)
                        t += n[e].length;
                const i = a.allocUnsafe(t);
                let o = 0;
                for (e = 0; e < n.length; ++e) {
                    let t = n[e];
                    if (Y(t, Uint8Array))
                        o + t.length > i.length ? (a.isBuffer(t) || (t = a.from(t)),
                        t.copy(i, o)) : Uint8Array.prototype.set.call(i, t, o);
                    else {
                        if (!a.isBuffer(t))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        t.copy(i, o)
                    }
                    o += t.length
                }
                return i
            }
            ,
            a.byteLength = f,
            a.prototype._isBuffer = !0,
            a.prototype.swap16 = function() {
                const n = this.length;
                if (n % 2 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < n; t += 2)
                    h(this, t, t + 1);
                return this
            }
            ,
            a.prototype.swap32 = function() {
                const n = this.length;
                if (n % 4 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < n; t += 4)
                    h(this, t, t + 3),
                    h(this, t + 1, t + 2);
                return this
            }
            ,
            a.prototype.swap64 = function() {
                const n = this.length;
                if (n % 8 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < n; t += 8)
                    h(this, t, t + 7),
                    h(this, t + 1, t + 6),
                    h(this, t + 2, t + 5),
                    h(this, t + 3, t + 4);
                return this
            }
            ,
            a.prototype.toString = function() {
                const n = this.length;
                return 0 === n ? "" : 0 === arguments.length ? k(this, 0, n) : g.apply(this, arguments)
            }
            ,
            a.prototype.toLocaleString = a.prototype.toString,
            a.prototype.equals = function(n) {
                if (!a.isBuffer(n))
                    throw new TypeError("Argument must be a Buffer");
                return this === n || 0 === a.compare(this, n)
            }
            ,
            a.prototype.inspect = function() {
                let t = "";
                const e = n.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(),
                this.length > e && (t += " ... "),
                "<Buffer " + t + ">"
            }
            ,
            i && (a.prototype[i] = a.prototype.inspect),
            a.prototype.compare = function(n, t, e, i, o) {
                if (Y(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)),
                !a.isBuffer(n))
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof n);
                if (void 0 === t && (t = 0),
                void 0 === e && (e = n ? n.length : 0),
                void 0 === i && (i = 0),
                void 0 === o && (o = this.length),
                t < 0 || e > n.length || i < 0 || o > this.length)
                    throw new RangeError("out of range index");
                if (i >= o && t >= e)
                    return 0;
                if (i >= o)
                    return -1;
                if (t >= e)
                    return 1;
                if (this === n)
                    return 0;
                let r = (o >>>= 0) - (i >>>= 0)
                  , l = (e >>>= 0) - (t >>>= 0);
                const s = Math.min(r, l)
                  , c = this.slice(i, o)
                  , d = n.slice(t, e);
                for (let a = 0; a < s; ++a)
                    if (c[a] !== d[a]) {
                        r = c[a],
                        l = d[a];
                        break
                    }
                return r < l ? -1 : l < r ? 1 : 0
            }
            ,
            a.prototype.includes = function(n, t, e) {
                return -1 !== this.indexOf(n, t, e)
            }
            ,
            a.prototype.indexOf = function(n, t, e) {
                return m(this, n, t, e, !0)
            }
            ,
            a.prototype.lastIndexOf = function(n, t, e) {
                return m(this, n, t, e, !1)
            }
            ,
            a.prototype.write = function(n, t, e, i) {
                if (void 0 === t)
                    i = "utf8",
                    e = this.length,
                    t = 0;
                else if (void 0 === e && "string" == typeof t)
                    i = t,
                    e = this.length,
                    t = 0;
                else {
                    if (!isFinite(t))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0,
                    isFinite(e) ? (e >>>= 0,
                    void 0 === i && (i = "utf8")) : (i = e,
                    e = void 0)
                }
                const o = this.length - t;
                if ((void 0 === e || e > o) && (e = o),
                n.length > 0 && (e < 0 || t < 0) || t > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                let r = !1;
                for (; ; )
                    switch (i) {
                    case "hex":
                        return b(this, n, t, e);
                    case "utf8":
                    case "utf-8":
                        return y(this, n, t, e);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return v(this, n, t, e);
                    case "base64":
                        return w(this, n, t, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, n, t, e);
                    default:
                        if (r)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                        r = !0
                    }
            }
            ,
            a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            const C = 4096;
            function A(n, t, e) {
                let i = "";
                e = Math.min(n.length, e);
                for (let o = t; o < e; ++o)
                    i += String.fromCharCode(127 & n[o]);
                return i
            }
            function z(n, t, e) {
                let i = "";
                e = Math.min(n.length, e);
                for (let o = t; o < e; ++o)
                    i += String.fromCharCode(n[o]);
                return i
            }
            function B(n, t, e) {
                const i = n.length;
                (!t || t < 0) && (t = 0),
                (!e || e < 0 || e > i) && (e = i);
                let o = "";
                for (let r = t; r < e; ++r)
                    o += J[n[r]];
                return o
            }
            function j(n, t, e) {
                const i = n.slice(t, e);
                let o = "";
                for (let r = 0; r < i.length - 1; r += 2)
                    o += String.fromCharCode(i[r] + 256 * i[r + 1]);
                return o
            }
            function E(n, t, e) {
                if (n % 1 !== 0 || n < 0)
                    throw new RangeError("offset is not uint");
                if (n + t > e)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function I(n, t, e, i, o, r) {
                if (!a.isBuffer(n))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < r)
                    throw new RangeError('"value" argument is out of bounds');
                if (e + i > n.length)
                    throw new RangeError("Index out of range")
            }
            function T(n, t, e, i, o) {
                V(t, i, o, n, e, 7);
                let r = Number(t & BigInt(4294967295));
                n[e++] = r,
                r >>= 8,
                n[e++] = r,
                r >>= 8,
                n[e++] = r,
                r >>= 8,
                n[e++] = r;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return n[e++] = a,
                a >>= 8,
                n[e++] = a,
                a >>= 8,
                n[e++] = a,
                a >>= 8,
                n[e++] = a,
                e
            }
            function _(n, t, e, i, o) {
                V(t, i, o, n, e, 7);
                let r = Number(t & BigInt(4294967295));
                n[e + 7] = r,
                r >>= 8,
                n[e + 6] = r,
                r >>= 8,
                n[e + 5] = r,
                r >>= 8,
                n[e + 4] = r;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return n[e + 3] = a,
                a >>= 8,
                n[e + 2] = a,
                a >>= 8,
                n[e + 1] = a,
                a >>= 8,
                n[e] = a,
                e + 8
            }
            function L(n, t, e, i, o, r) {
                if (e + i > n.length)
                    throw new RangeError("Index out of range");
                if (e < 0)
                    throw new RangeError("Index out of range")
            }
            function O(n, t, i, o, r) {
                return t = +t,
                i >>>= 0,
                r || L(n, 0, i, 4),
                e.write(n, t, i, o, 23, 4),
                i + 4
            }
            function R(n, t, i, o, r) {
                return t = +t,
                i >>>= 0,
                r || L(n, 0, i, 8),
                e.write(n, t, i, o, 52, 8),
                i + 8
            }
            a.prototype.slice = function(n, t) {
                const e = this.length;
                (n = ~~n) < 0 ? (n += e) < 0 && (n = 0) : n > e && (n = e),
                (t = void 0 === t ? e : ~~t) < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e),
                t < n && (t = n);
                const i = this.subarray(n, t);
                return Object.setPrototypeOf(i, a.prototype),
                i
            }
            ,
            a.prototype.readUintLE = a.prototype.readUIntLE = function(n, t, e) {
                n >>>= 0,
                t >>>= 0,
                e || E(n, t, this.length);
                let i = this[n]
                  , o = 1
                  , r = 0;
                for (; ++r < t && (o *= 256); )
                    i += this[n + r] * o;
                return i
            }
            ,
            a.prototype.readUintBE = a.prototype.readUIntBE = function(n, t, e) {
                n >>>= 0,
                t >>>= 0,
                e || E(n, t, this.length);
                let i = this[n + --t]
                  , o = 1;
                for (; t > 0 && (o *= 256); )
                    i += this[n + --t] * o;
                return i
            }
            ,
            a.prototype.readUint8 = a.prototype.readUInt8 = function(n, t) {
                return n >>>= 0,
                t || E(n, 1, this.length),
                this[n]
            }
            ,
            a.prototype.readUint16LE = a.prototype.readUInt16LE = function(n, t) {
                return n >>>= 0,
                t || E(n, 2, this.length),
                this[n] | this[n + 1] << 8
            }
            ,
            a.prototype.readUint16BE = a.prototype.readUInt16BE = function(n, t) {
                return n >>>= 0,
                t || E(n, 2, this.length),
                this[n] << 8 | this[n + 1]
            }
            ,
            a.prototype.readUint32LE = a.prototype.readUInt32LE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + 16777216 * this[n + 3]
            }
            ,
            a.prototype.readUint32BE = a.prototype.readUInt32BE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                16777216 * this[n] + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3])
            }
            ,
            a.prototype.readBigUInt64LE = Z((function(n) {
                F(n >>>= 0, "offset");
                const t = this[n]
                  , e = this[n + 7];
                (void 0 === t || void 0 === e) && D(n, this.length - 8);
                const i = t + 256 * this[++n] + 65536 * this[++n] + this[++n] * 2 ** 24
                  , o = this[++n] + 256 * this[++n] + 65536 * this[++n] + e * 2 ** 24;
                return BigInt(i) + (BigInt(o) << BigInt(32))
            }
            )),
            a.prototype.readBigUInt64BE = Z((function(n) {
                F(n >>>= 0, "offset");
                const t = this[n]
                  , e = this[n + 7];
                (void 0 === t || void 0 === e) && D(n, this.length - 8);
                const i = t * 2 ** 24 + 65536 * this[++n] + 256 * this[++n] + this[++n]
                  , o = this[++n] * 2 ** 24 + 65536 * this[++n] + 256 * this[++n] + e;
                return (BigInt(i) << BigInt(32)) + BigInt(o)
            }
            )),
            a.prototype.readIntLE = function(n, t, e) {
                n >>>= 0,
                t >>>= 0,
                e || E(n, t, this.length);
                let i = this[n]
                  , o = 1
                  , r = 0;
                for (; ++r < t && (o *= 256); )
                    i += this[n + r] * o;
                return o *= 128,
                i >= o && (i -= Math.pow(2, 8 * t)),
                i
            }
            ,
            a.prototype.readIntBE = function(n, t, e) {
                n >>>= 0,
                t >>>= 0,
                e || E(n, t, this.length);
                let i = t
                  , o = 1
                  , r = this[n + --i];
                for (; i > 0 && (o *= 256); )
                    r += this[n + --i] * o;
                return o *= 128,
                r >= o && (r -= Math.pow(2, 8 * t)),
                r
            }
            ,
            a.prototype.readInt8 = function(n, t) {
                return n >>>= 0,
                t || E(n, 1, this.length),
                128 & this[n] ? -1 * (255 - this[n] + 1) : this[n]
            }
            ,
            a.prototype.readInt16LE = function(n, t) {
                n >>>= 0,
                t || E(n, 2, this.length);
                const e = this[n] | this[n + 1] << 8;
                return 32768 & e ? 4294901760 | e : e
            }
            ,
            a.prototype.readInt16BE = function(n, t) {
                n >>>= 0,
                t || E(n, 2, this.length);
                const e = this[n + 1] | this[n] << 8;
                return 32768 & e ? 4294901760 | e : e
            }
            ,
            a.prototype.readInt32LE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24
            }
            ,
            a.prototype.readInt32BE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]
            }
            ,
            a.prototype.readBigInt64LE = Z((function(n) {
                F(n >>>= 0, "offset");
                const t = this[n]
                  , e = this[n + 7];
                (void 0 === t || void 0 === e) && D(n, this.length - 8);
                const i = this[n + 4] + 256 * this[n + 5] + 65536 * this[n + 6] + (e << 24);
                return (BigInt(i) << BigInt(32)) + BigInt(t + 256 * this[++n] + 65536 * this[++n] + this[++n] * 2 ** 24)
            }
            )),
            a.prototype.readBigInt64BE = Z((function(n) {
                F(n >>>= 0, "offset");
                const t = this[n]
                  , e = this[n + 7];
                (void 0 === t || void 0 === e) && D(n, this.length - 8);
                const i = (t << 24) + 65536 * this[++n] + 256 * this[++n] + this[++n];
                return (BigInt(i) << BigInt(32)) + BigInt(this[++n] * 2 ** 24 + 65536 * this[++n] + 256 * this[++n] + e)
            }
            )),
            a.prototype.readFloatLE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                e.read(this, n, !0, 23, 4)
            }
            ,
            a.prototype.readFloatBE = function(n, t) {
                return n >>>= 0,
                t || E(n, 4, this.length),
                e.read(this, n, !1, 23, 4)
            }
            ,
            a.prototype.readDoubleLE = function(n, t) {
                return n >>>= 0,
                t || E(n, 8, this.length),
                e.read(this, n, !0, 52, 8)
            }
            ,
            a.prototype.readDoubleBE = function(n, t) {
                return n >>>= 0,
                t || E(n, 8, this.length),
                e.read(this, n, !1, 52, 8)
            }
            ,
            a.prototype.writeUintLE = a.prototype.writeUIntLE = function(n, t, e, i) {
                if (n = +n,
                t >>>= 0,
                e >>>= 0,
                !i) {
                    I(this, n, t, e, Math.pow(2, 8 * e) - 1, 0)
                }
                let o = 1
                  , r = 0;
                for (this[t] = 255 & n; ++r < e && (o *= 256); )
                    this[t + r] = n / o & 255;
                return t + e
            }
            ,
            a.prototype.writeUintBE = a.prototype.writeUIntBE = function(n, t, e, i) {
                if (n = +n,
                t >>>= 0,
                e >>>= 0,
                !i) {
                    I(this, n, t, e, Math.pow(2, 8 * e) - 1, 0)
                }
                let o = e - 1
                  , r = 1;
                for (this[t + o] = 255 & n; --o >= 0 && (r *= 256); )
                    this[t + o] = n / r & 255;
                return t + e
            }
            ,
            a.prototype.writeUint8 = a.prototype.writeUInt8 = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 1, 255, 0),
                this[t] = 255 & n,
                t + 1
            }
            ,
            a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 2, 65535, 0),
                this[t] = 255 & n,
                this[t + 1] = n >>> 8,
                t + 2
            }
            ,
            a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 2, 65535, 0),
                this[t] = n >>> 8,
                this[t + 1] = 255 & n,
                t + 2
            }
            ,
            a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 4, 4294967295, 0),
                this[t + 3] = n >>> 24,
                this[t + 2] = n >>> 16,
                this[t + 1] = n >>> 8,
                this[t] = 255 & n,
                t + 4
            }
            ,
            a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 4, 4294967295, 0),
                this[t] = n >>> 24,
                this[t + 1] = n >>> 16,
                this[t + 2] = n >>> 8,
                this[t + 3] = 255 & n,
                t + 4
            }
            ,
            a.prototype.writeBigUInt64LE = Z((function(n, t=0) {
                return T(this, n, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }
            )),
            a.prototype.writeBigUInt64BE = Z((function(n, t=0) {
                return _(this, n, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }
            )),
            a.prototype.writeIntLE = function(n, t, e, i) {
                if (n = +n,
                t >>>= 0,
                !i) {
                    const i = Math.pow(2, 8 * e - 1);
                    I(this, n, t, e, i - 1, -i)
                }
                let o = 0
                  , r = 1
                  , a = 0;
                for (this[t] = 255 & n; ++o < e && (r *= 256); )
                    n < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                    this[t + o] = (n / r >> 0) - a & 255;
                return t + e
            }
            ,
            a.prototype.writeIntBE = function(n, t, e, i) {
                if (n = +n,
                t >>>= 0,
                !i) {
                    const i = Math.pow(2, 8 * e - 1);
                    I(this, n, t, e, i - 1, -i)
                }
                let o = e - 1
                  , r = 1
                  , a = 0;
                for (this[t + o] = 255 & n; --o >= 0 && (r *= 256); )
                    n < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                    this[t + o] = (n / r >> 0) - a & 255;
                return t + e
            }
            ,
            a.prototype.writeInt8 = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 1, 127, -128),
                n < 0 && (n = 255 + n + 1),
                this[t] = 255 & n,
                t + 1
            }
            ,
            a.prototype.writeInt16LE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 2, 32767, -32768),
                this[t] = 255 & n,
                this[t + 1] = n >>> 8,
                t + 2
            }
            ,
            a.prototype.writeInt16BE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 2, 32767, -32768),
                this[t] = n >>> 8,
                this[t + 1] = 255 & n,
                t + 2
            }
            ,
            a.prototype.writeInt32LE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 4, 2147483647, -2147483648),
                this[t] = 255 & n,
                this[t + 1] = n >>> 8,
                this[t + 2] = n >>> 16,
                this[t + 3] = n >>> 24,
                t + 4
            }
            ,
            a.prototype.writeInt32BE = function(n, t, e) {
                return n = +n,
                t >>>= 0,
                e || I(this, n, t, 4, 2147483647, -2147483648),
                n < 0 && (n = 4294967295 + n + 1),
                this[t] = n >>> 24,
                this[t + 1] = n >>> 16,
                this[t + 2] = n >>> 8,
                this[t + 3] = 255 & n,
                t + 4
            }
            ,
            a.prototype.writeBigInt64LE = Z((function(n, t=0) {
                return T(this, n, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }
            )),
            a.prototype.writeBigInt64BE = Z((function(n, t=0) {
                return _(this, n, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }
            )),
            a.prototype.writeFloatLE = function(n, t, e) {
                return O(this, n, t, !0, e)
            }
            ,
            a.prototype.writeFloatBE = function(n, t, e) {
                return O(this, n, t, !1, e)
            }
            ,
            a.prototype.writeDoubleLE = function(n, t, e) {
                return R(this, n, t, !0, e)
            }
            ,
            a.prototype.writeDoubleBE = function(n, t, e) {
                return R(this, n, t, !1, e)
            }
            ,
            a.prototype.copy = function(n, t, e, i) {
                if (!a.isBuffer(n))
                    throw new TypeError("argument should be a Buffer");
                if (e || (e = 0),
                !i && 0 !== i && (i = this.length),
                t >= n.length && (t = n.length),
                t || (t = 0),
                i > 0 && i < e && (i = e),
                i === e || 0 === n.length || 0 === this.length)
                    return 0;
                if (t < 0)
                    throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length)
                    throw new RangeError("Index out of range");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                n.length - t < i - e && (i = n.length - t + e);
                const o = i - e;
                return this === n && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, e, i) : Uint8Array.prototype.set.call(n, this.subarray(e, i), t),
                o
            }
            ,
            a.prototype.fill = function(n, t, e, i) {
                if ("string" == typeof n) {
                    if ("string" == typeof t ? (i = t,
                    t = 0,
                    e = this.length) : "string" == typeof e && (i = e,
                    e = this.length),
                    void 0 !== i && "string" != typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !a.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i);
                    if (1 === n.length) {
                        const t = n.charCodeAt(0);
                        ("utf8" === i && t < 128 || "latin1" === i) && (n = t)
                    }
                } else
                    "number" == typeof n ? n &= 255 : "boolean" == typeof n && (n = Number(n));
                if (t < 0 || this.length < t || this.length < e)
                    throw new RangeError("Out of range index");
                if (e <= t)
                    return this;
                let o;
                if (t >>>= 0,
                e = void 0 === e ? this.length : e >>> 0,
                n || (n = 0),
                "number" == typeof n)
                    for (o = t; o < e; ++o)
                        this[o] = n;
                else {
                    const r = a.isBuffer(n) ? n : a.from(n, i)
                      , l = r.length;
                    if (0 === l)
                        throw new TypeError('The value "' + n + '" is invalid for argument "value"');
                    for (o = 0; o < e - t; ++o)
                        this[o + t] = r[o % l]
                }
                return this
            }
            ;
            const M = {};
            function N(n, t, e) {
                M[n] = class extends e {
                    constructor() {
                        super(),
                        Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }),
                        this.name = `${this.name} [${n}]`,
                        this.stack,
                        delete this.name
                    }
                    get code() {
                        return n
                    }
                    set code(n) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${n}]: ${this.message}`
                    }
                }
            }
            function U(n) {
                let t = ""
                  , e = n.length;
                const i = "-" === n[0] ? 1 : 0;
                for (; e >= i + 4; e -= 3)
                    t = `_${n.slice(e - 3, e)}${t}`;
                return `${n.slice(0, e)}${t}`
            }
            function V(n, t, e, i, o, r) {
                if (n > e || n < t) {
                    const i = "bigint" == typeof t ? "n" : "";
                    let o;
                    throw o = r > 3 ? 0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${8 * (r + 1)}${i}` : `>= -(2${i} ** ${8 * (r + 1) - 1}${i}) and < 2 ** ${8 * (r + 1) - 1}${i}` : `>= ${t}${i} and <= ${e}${i}`,
                    new M.ERR_OUT_OF_RANGE("value",o,n)
                }
                !function(n, t, e) {
                    F(t, "offset"),
                    (void 0 === n[t] || void 0 === n[t + e]) && D(t, n.length - (e + 1))
                }(i, o, r)
            }
            function F(n, t) {
                if ("number" != typeof n)
                    throw new M.ERR_INVALID_ARG_TYPE(t,"number",n)
            }
            function D(n, t, e) {
                throw Math.floor(n) !== n ? (F(n, e),
                new M.ERR_OUT_OF_RANGE(e || "offset","an integer",n)) : t < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS : new M.ERR_OUT_OF_RANGE(e || "offset",`>= ${e ? 1 : 0} and <= ${t}`,n)
            }
            N("ERR_BUFFER_OUT_OF_BOUNDS", (function(n) {
                return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }
            ), RangeError),
            N("ERR_INVALID_ARG_TYPE", (function(n, t) {
                return `The "${n}" argument must be of type number. Received type ${typeof t}`
            }
            ), TypeError),
            N("ERR_OUT_OF_RANGE", (function(n, t, e) {
                let i = `The value of "${n}" is out of range.`
                  , o = e;
                return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? o = U(String(e)) : "bigint" == typeof e && (o = String(e),
                (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (o = U(o)),
                o += "n"),
                i += ` It must be ${t}. Received ${o}`,
                i
            }
            ), RangeError);
            const P = /[^+/0-9A-Za-z-_]/g;
            function G(n, t) {
                let e;
                t = t || 1 / 0;
                const i = n.length;
                let o = null;
                const r = [];
                for (let a = 0; a < i; ++a) {
                    if (e = n.charCodeAt(a),
                    e > 55295 && e < 57344) {
                        if (!o) {
                            if (e > 56319) {
                                (t -= 3) > -1 && r.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === i) {
                                (t -= 3) > -1 && r.push(239, 191, 189);
                                continue
                            }
                            o = e;
                            continue
                        }
                        if (e < 56320) {
                            (t -= 3) > -1 && r.push(239, 191, 189),
                            o = e;
                            continue
                        }
                        e = 65536 + (o - 55296 << 10 | e - 56320)
                    } else
                        o && (t -= 3) > -1 && r.push(239, 191, 189);
                    if (o = null,
                    e < 128) {
                        if ((t -= 1) < 0)
                            break;
                        r.push(e)
                    } else if (e < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        r.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        r.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        r.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return r
            }
            function H(n) {
                return t.toByteArray(function(n) {
                    if ((n = (n = n.split("=")[0]).trim().replace(P, "")).length < 2)
                        return "";
                    for (; n.length % 4 !== 0; )
                        n += "=";
                    return n
                }(n))
            }
            function W(n, t, e, i) {
                let o;
                for (o = 0; o < i && !(o + e >= t.length || o >= n.length); ++o)
                    t[o + e] = n[o];
                return o
            }
            function Y(n, t) {
                return n instanceof t || null != n && null != n.constructor && null != n.constructor.name && n.constructor.name === t.name
            }
            function q(n) {
                return n !== n
            }
            const J = function() {
                const n = "0123456789abcdef"
                  , t = new Array(256);
                for (let e = 0; e < 16; ++e) {
                    const i = 16 * e;
                    for (let o = 0; o < 16; ++o)
                        t[i + o] = n[e] + n[o]
                }
                return t
            }();
            function Z(n) {
                return typeof BigInt > "u" ? X : n
            }
            function X() {
                throw new Error("BigInt not supported")
            }
        }(ri);
        var $i = {
            exports: {}
        }
          , bi = {}
          , yi = {
            exports: {}
        }
          , vi = {};
        function wi() {
            var n = {
                "align-content": !1,
                "align-items": !1,
                "align-self": !1,
                "alignment-adjust": !1,
                "alignment-baseline": !1,
                all: !1,
                "anchor-point": !1,
                animation: !1,
                "animation-delay": !1,
                "animation-direction": !1,
                "animation-duration": !1,
                "animation-fill-mode": !1,
                "animation-iteration-count": !1,
                "animation-name": !1,
                "animation-play-state": !1,
                "animation-timing-function": !1,
                azimuth: !1,
                "backface-visibility": !1,
                background: !0,
                "background-attachment": !0,
                "background-clip": !0,
                "background-color": !0,
                "background-image": !0,
                "background-origin": !0,
                "background-position": !0,
                "background-repeat": !0,
                "background-size": !0,
                "baseline-shift": !1,
                binding: !1,
                bleed: !1,
                "bookmark-label": !1,
                "bookmark-level": !1,
                "bookmark-state": !1,
                border: !0,
                "border-bottom": !0,
                "border-bottom-color": !0,
                "border-bottom-left-radius": !0,
                "border-bottom-right-radius": !0,
                "border-bottom-style": !0,
                "border-bottom-width": !0,
                "border-collapse": !0,
                "border-color": !0,
                "border-image": !0,
                "border-image-outset": !0,
                "border-image-repeat": !0,
                "border-image-slice": !0,
                "border-image-source": !0,
                "border-image-width": !0,
                "border-left": !0,
                "border-left-color": !0,
                "border-left-style": !0,
                "border-left-width": !0,
                "border-radius": !0,
                "border-right": !0,
                "border-right-color": !0,
                "border-right-style": !0,
                "border-right-width": !0,
                "border-spacing": !0,
                "border-style": !0,
                "border-top": !0,
                "border-top-color": !0,
                "border-top-left-radius": !0,
                "border-top-right-radius": !0,
                "border-top-style": !0,
                "border-top-width": !0,
                "border-width": !0,
                bottom: !1,
                "box-decoration-break": !0,
                "box-shadow": !0,
                "box-sizing": !0,
                "box-snap": !0,
                "box-suppress": !0,
                "break-after": !0,
                "break-before": !0,
                "break-inside": !0,
                "caption-side": !1,
                chains: !1,
                clear: !0,
                clip: !1,
                "clip-path": !1,
                "clip-rule": !1,
                color: !0,
                "color-interpolation-filters": !0,
                "column-count": !1,
                "column-fill": !1,
                "column-gap": !1,
                "column-rule": !1,
                "column-rule-color": !1,
                "column-rule-style": !1,
                "column-rule-width": !1,
                "column-span": !1,
                "column-width": !1,
                columns: !1,
                contain: !1,
                content: !1,
                "counter-increment": !1,
                "counter-reset": !1,
                "counter-set": !1,
                crop: !1,
                cue: !1,
                "cue-after": !1,
                "cue-before": !1,
                cursor: !1,
                direction: !1,
                display: !0,
                "display-inside": !0,
                "display-list": !0,
                "display-outside": !0,
                "dominant-baseline": !1,
                elevation: !1,
                "empty-cells": !1,
                filter: !1,
                flex: !1,
                "flex-basis": !1,
                "flex-direction": !1,
                "flex-flow": !1,
                "flex-grow": !1,
                "flex-shrink": !1,
                "flex-wrap": !1,
                float: !1,
                "float-offset": !1,
                "flood-color": !1,
                "flood-opacity": !1,
                "flow-from": !1,
                "flow-into": !1,
                font: !0,
                "font-family": !0,
                "font-feature-settings": !0,
                "font-kerning": !0,
                "font-language-override": !0,
                "font-size": !0,
                "font-size-adjust": !0,
                "font-stretch": !0,
                "font-style": !0,
                "font-synthesis": !0,
                "font-variant": !0,
                "font-variant-alternates": !0,
                "font-variant-caps": !0,
                "font-variant-east-asian": !0,
                "font-variant-ligatures": !0,
                "font-variant-numeric": !0,
                "font-variant-position": !0,
                "font-weight": !0,
                grid: !1,
                "grid-area": !1,
                "grid-auto-columns": !1,
                "grid-auto-flow": !1,
                "grid-auto-rows": !1,
                "grid-column": !1,
                "grid-column-end": !1,
                "grid-column-start": !1,
                "grid-row": !1,
                "grid-row-end": !1,
                "grid-row-start": !1,
                "grid-template": !1,
                "grid-template-areas": !1,
                "grid-template-columns": !1,
                "grid-template-rows": !1,
                "hanging-punctuation": !1,
                height: !0,
                hyphens: !1,
                icon: !1,
                "image-orientation": !1,
                "image-resolution": !1,
                "ime-mode": !1,
                "initial-letters": !1,
                "inline-box-align": !1,
                "justify-content": !1,
                "justify-items": !1,
                "justify-self": !1,
                left: !1,
                "letter-spacing": !0,
                "lighting-color": !0,
                "line-box-contain": !1,
                "line-break": !1,
                "line-grid": !1,
                "line-height": !1,
                "line-snap": !1,
                "line-stacking": !1,
                "line-stacking-ruby": !1,
                "line-stacking-shift": !1,
                "line-stacking-strategy": !1,
                "list-style": !0,
                "list-style-image": !0,
                "list-style-position": !0,
                "list-style-type": !0,
                margin: !0,
                "margin-bottom": !0,
                "margin-left": !0,
                "margin-right": !0,
                "margin-top": !0,
                "marker-offset": !1,
                "marker-side": !1,
                marks: !1,
                mask: !1,
                "mask-box": !1,
                "mask-box-outset": !1,
                "mask-box-repeat": !1,
                "mask-box-slice": !1,
                "mask-box-source": !1,
                "mask-box-width": !1,
                "mask-clip": !1,
                "mask-image": !1,
                "mask-origin": !1,
                "mask-position": !1,
                "mask-repeat": !1,
                "mask-size": !1,
                "mask-source-type": !1,
                "mask-type": !1,
                "max-height": !0,
                "max-lines": !1,
                "max-width": !0,
                "min-height": !0,
                "min-width": !0,
                "move-to": !1,
                "nav-down": !1,
                "nav-index": !1,
                "nav-left": !1,
                "nav-right": !1,
                "nav-up": !1,
                "object-fit": !1,
                "object-position": !1,
                opacity: !1,
                order: !1,
                orphans: !1,
                outline: !1,
                "outline-color": !1,
                "outline-offset": !1,
                "outline-style": !1,
                "outline-width": !1,
                overflow: !1,
                "overflow-wrap": !1,
                "overflow-x": !1,
                "overflow-y": !1,
                padding: !0,
                "padding-bottom": !0,
                "padding-left": !0,
                "padding-right": !0,
                "padding-top": !0,
                page: !1,
                "page-break-after": !1,
                "page-break-before": !1,
                "page-break-inside": !1,
                "page-policy": !1,
                pause: !1,
                "pause-after": !1,
                "pause-before": !1,
                perspective: !1,
                "perspective-origin": !1,
                pitch: !1,
                "pitch-range": !1,
                "play-during": !1,
                position: !1,
                "presentation-level": !1,
                quotes: !1,
                "region-fragment": !1,
                resize: !1,
                rest: !1,
                "rest-after": !1,
                "rest-before": !1,
                richness: !1,
                right: !1,
                rotation: !1,
                "rotation-point": !1,
                "ruby-align": !1,
                "ruby-merge": !1,
                "ruby-position": !1,
                "shape-image-threshold": !1,
                "shape-outside": !1,
                "shape-margin": !1,
                size: !1,
                speak: !1,
                "speak-as": !1,
                "speak-header": !1,
                "speak-numeral": !1,
                "speak-punctuation": !1,
                "speech-rate": !1,
                stress: !1,
                "string-set": !1,
                "tab-size": !1,
                "table-layout": !1,
                "text-align": !0,
                "text-align-last": !0,
                "text-combine-upright": !0,
                "text-decoration": !0,
                "text-decoration-color": !0,
                "text-decoration-line": !0,
                "text-decoration-skip": !0,
                "text-decoration-style": !0,
                "text-emphasis": !0,
                "text-emphasis-color": !0,
                "text-emphasis-position": !0,
                "text-emphasis-style": !0,
                "text-height": !0,
                "text-indent": !0,
                "text-justify": !0,
                "text-orientation": !0,
                "text-overflow": !0,
                "text-shadow": !0,
                "text-space-collapse": !0,
                "text-transform": !0,
                "text-underline-position": !0,
                "text-wrap": !0,
                top: !1,
                transform: !1,
                "transform-origin": !1,
                "transform-style": !1,
                transition: !1,
                "transition-delay": !1,
                "transition-duration": !1,
                "transition-property": !1,
                "transition-timing-function": !1,
                "unicode-bidi": !1,
                "vertical-align": !1,
                visibility: !1,
                "voice-balance": !1,
                "voice-duration": !1,
                "voice-family": !1,
                "voice-pitch": !1,
                "voice-range": !1,
                "voice-rate": !1,
                "voice-stress": !1,
                "voice-volume": !1,
                volume: !1,
                "white-space": !1,
                widows: !1,
                width: !0,
                "will-change": !1,
                "word-break": !0,
                "word-spacing": !0,
                "word-wrap": !0,
                "wrap-flow": !1,
                "wrap-through": !1,
                "writing-mode": !1,
                "z-index": !1
            };
            return n
        }
        var xi = /javascript\s*\:/gim;
        vi.whiteList = wi(),
        vi.getDefaultWhiteList = wi,
        vi.onAttr = function(n, t, e) {}
        ,
        vi.onIgnoreAttr = function(n, t, e) {}
        ,
        vi.safeAttrValue = function(n, t) {
            return xi.test(t) ? "" : t
        }
        ;
        var Si = {
            indexOf: function(n, t) {
                var e, i;
                if (Array.prototype.indexOf)
                    return n.indexOf(t);
                for (e = 0,
                i = n.length; e < i; e++)
                    if (n[e] === t)
                        return e;
                return -1
            },
            forEach: function(n, t, e) {
                var i, o;
                if (Array.prototype.forEach)
                    return n.forEach(t, e);
                for (i = 0,
                o = n.length; i < o; i++)
                    t.call(e, n[i], i, n)
            },
            trim: function(n) {
                return String.prototype.trim ? n.trim() : n.replace(/(^\s*)|(\s*$)/g, "")
            },
            trimRight: function(n) {
                return String.prototype.trimRight ? n.trimRight() : n.replace(/(\s*$)/g, "")
            }
        };
        var ki = vi
          , Ci = function(n, t) {
            ";" !== (n = Si.trimRight(n))[n.length - 1] && (n += ";");
            var e = n.length
              , i = !1
              , o = 0
              , r = 0
              , a = "";
            function l() {
                if (!i) {
                    var e = Si.trim(n.slice(o, r))
                      , l = e.indexOf(":");
                    if (-1 !== l) {
                        var s = Si.trim(e.slice(0, l))
                          , c = Si.trim(e.slice(l + 1));
                        if (s) {
                            var d = t(o, a.length, s, c, e);
                            d && (a += d + "; ")
                        }
                    }
                }
                o = r + 1
            }
            for (; r < e; r++) {
                var s = n[r];
                if ("/" === s && "*" === n[r + 1]) {
                    var c = n.indexOf("*/", r + 2);
                    if (-1 === c)
                        break;
                    o = (r = c + 1) + 1,
                    i = !1
                } else
                    "(" === s ? i = !0 : ")" === s ? i = !1 : ";" === s ? i || l() : "\n" === s && l()
            }
            return Si.trim(a)
        };
        function Ai(n) {
            return null == n
        }
        function zi(n) {
            (n = function(n) {
                var t = {};
                for (var e in n)
                    t[e] = n[e];
                return t
            }(n || {})).whiteList = n.whiteList || ki.whiteList,
            n.onAttr = n.onAttr || ki.onAttr,
            n.onIgnoreAttr = n.onIgnoreAttr || ki.onIgnoreAttr,
            n.safeAttrValue = n.safeAttrValue || ki.safeAttrValue,
            this.options = n
        }
        zi.prototype.process = function(n) {
            if (!(n = (n = n || "").toString()))
                return "";
            var t = this.options
              , e = t.whiteList
              , i = t.onAttr
              , o = t.onIgnoreAttr
              , r = t.safeAttrValue;
            return Ci(n, (function(n, t, a, l, s) {
                var c = e[a]
                  , d = !1;
                if (!0 === c ? d = c : "function" == typeof c ? d = c(l) : c instanceof RegExp && (d = c.test(l)),
                !0 !== d && (d = !1),
                l = r(a, l)) {
                    var p, u = {
                        position: t,
                        sourcePosition: n,
                        source: s,
                        isWhite: d
                    };
                    if (d)
                        return Ai(p = i(a, l, u)) ? a + ":" + l : p;
                    if (!Ai(p = o(a, l, u)))
                        return p
                }
            }
            ))
        }
        ;
        var Bi = zi;
        !function(n, t) {
            var e = vi
              , i = Bi;
            for (var o in (t = n.exports = function(n, t) {
                return new i(t).process(n)
            }
            ).FilterCSS = i,
            e)
                t[o] = e[o];
            typeof window < "u" && (window.filterCSS = n.exports)
        }(yi, yi.exports);
        var ji = yi.exports
          , Ei = {
            indexOf: function(n, t) {
                var e, i;
                if (Array.prototype.indexOf)
                    return n.indexOf(t);
                for (e = 0,
                i = n.length; e < i; e++)
                    if (n[e] === t)
                        return e;
                return -1
            },
            forEach: function(n, t, e) {
                var i, o;
                if (Array.prototype.forEach)
                    return n.forEach(t, e);
                for (i = 0,
                o = n.length; i < o; i++)
                    t.call(e, n[i], i, n)
            },
            trim: function(n) {
                return String.prototype.trim ? n.trim() : n.replace(/(^\s*)|(\s*$)/g, "")
            },
            spaceIndex: function(n) {
                var t = /\s|\n|\t/.exec(n);
                return t ? t.index : -1
            }
        }
          , Ii = ji.FilterCSS
          , Ti = ji.getDefaultWhiteList
          , _i = Ei;
        function Li() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                figcaption: [],
                figure: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                summary: [],
                sup: [],
                strong: [],
                strike: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
            }
        }
        var Oi = new Ii;
        function Ri(n) {
            return n.replace(Mi, "&lt;").replace(Ni, "&gt;")
        }
        var Mi = /</g
          , Ni = />/g
          , Ui = /"/g
          , Vi = /&quot;/g
          , Fi = /&#([a-zA-Z0-9]*);?/gim
          , Di = /&colon;?/gim
          , Pi = /&newline;?/gim
          , Gi = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi
          , Hi = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi
          , Wi = /u\s*r\s*l\s*\(.*/gi;
        function Yi(n) {
            return n.replace(Ui, "&quot;")
        }
        function qi(n) {
            return n.replace(Vi, '"')
        }
        function Ji(n) {
            return n.replace(Fi, (function(n, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
            }
            ))
        }
        function Zi(n) {
            return n.replace(Di, ":").replace(Pi, " ")
        }
        function Xi(n) {
            for (var t = "", e = 0, i = n.length; e < i; e++)
                t += n.charCodeAt(e) < 32 ? " " : n.charAt(e);
            return _i.trim(t)
        }
        function Ki(n) {
            return n = Xi(n = Zi(n = Ji(n = qi(n))))
        }
        function Qi(n) {
            return n = Ri(n = Yi(n))
        }
        bi.whiteList = {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        },
        bi.getDefaultWhiteList = Li,
        bi.onTag = function(n, t, e) {}
        ,
        bi.onIgnoreTag = function(n, t, e) {}
        ,
        bi.onTagAttr = function(n, t, e) {}
        ,
        bi.onIgnoreTagAttr = function(n, t, e) {}
        ,
        bi.safeAttrValue = function(n, t, e, i) {
            if (e = Ki(e),
            "href" === t || "src" === t) {
                if ("#" === (e = _i.trim(e)))
                    return "#";
                if ("http://" !== e.substr(0, 7) && "https://" !== e.substr(0, 8) && "mailto:" !== e.substr(0, 7) && "tel:" !== e.substr(0, 4) && "data:image/" !== e.substr(0, 11) && "ftp://" !== e.substr(0, 6) && "./" !== e.substr(0, 2) && "../" !== e.substr(0, 3) && "#" !== e[0] && "/" !== e[0])
                    return ""
            } else if ("background" === t) {
                if (Gi.lastIndex = 0,
                Gi.test(e))
                    return ""
            } else if ("style" === t) {
                if (Hi.lastIndex = 0,
                Hi.test(e) || (Wi.lastIndex = 0,
                Wi.test(e) && (Gi.lastIndex = 0,
                Gi.test(e))))
                    return "";
                !1 !== i && (e = (i = i || Oi).process(e))
            }
            return e = Qi(e)
        }
        ,
        bi.escapeHtml = Ri,
        bi.escapeQuote = Yi,
        bi.unescapeQuote = qi,
        bi.escapeHtmlEntities = Ji,
        bi.escapeDangerHtml5Entities = Zi,
        bi.clearNonPrintableCharacter = Xi,
        bi.friendlyAttrValue = Ki,
        bi.escapeAttrValue = Qi,
        bi.onIgnoreTagStripAll = function() {
            return ""
        }
        ,
        bi.StripTagBody = function(n, t) {
            "function" != typeof t && (t = function() {}
            );
            var e = !Array.isArray(n)
              , i = []
              , o = !1;
            return {
                onIgnoreTag: function(r, a, l) {
                    if (function(t) {
                        return !!e || -1 !== _i.indexOf(n, t)
                    }(r)) {
                        if (l.isClosing) {
                            var s = "[/removed]"
                              , c = l.position + s.length;
                            return i.push([!1 !== o ? o : l.position, c]),
                            o = !1,
                            s
                        }
                        return o || (o = l.position),
                        "[removed]"
                    }
                    return t(r, a, l)
                },
                remove: function(n) {
                    var t = ""
                      , e = 0;
                    return _i.forEach(i, (function(i) {
                        t += n.slice(e, i[0]),
                        e = i[1]
                    }
                    )),
                    t += n.slice(e)
                }
            }
        }
        ,
        bi.stripCommentTag = function(n) {
            for (var t = "", e = 0; e < n.length; ) {
                var i = n.indexOf("\x3c!--", e);
                if (-1 === i) {
                    t += n.slice(e);
                    break
                }
                t += n.slice(e, i);
                var o = n.indexOf("--\x3e", i);
                if (-1 === o)
                    break;
                e = o + 3
            }
            return t
        }
        ,
        bi.stripBlankChar = function(n) {
            var t = n.split("");
            return (t = t.filter((function(n) {
                var t = n.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
            }
            ))).join("")
        }
        ,
        bi.cssFilter = Oi,
        bi.getDefaultCSSWhiteList = Ti;
        var no = {}
          , to = Ei;
        function eo(n) {
            var t, e = to.spaceIndex(n);
            return t = -1 === e ? n.slice(1, -1) : n.slice(1, e + 1),
            "/" === (t = to.trim(t).toLowerCase()).slice(0, 1) && (t = t.slice(1)),
            "/" === t.slice(-1) && (t = t.slice(0, -1)),
            t
        }
        function io(n) {
            return "</" === n.slice(0, 2)
        }
        var oo = /[^a-zA-Z0-9\\_:.-]/gim;
        function ro(n, t) {
            for (; t < n.length; t++) {
                var e = n[t];
                if (" " !== e)
                    return "=" === e ? t : -1
            }
        }
        function ao(n, t) {
            for (; t < n.length; t++) {
                var e = n[t];
                if (" " !== e)
                    return "'" === e || '"' === e ? t : -1
            }
        }
        function lo(n, t) {
            for (; t > 0; t--) {
                var e = n[t];
                if (" " !== e)
                    return "=" === e ? t : -1
            }
        }
        function so(n) {
            return function(n) {
                return '"' === n[0] && '"' === n[n.length - 1] || "'" === n[0] && "'" === n[n.length - 1]
            }(n) ? n.substr(1, n.length - 2) : n
        }
        no.parseTag = function(n, t, e) {
            var i = ""
              , o = 0
              , r = !1
              , a = !1
              , l = 0
              , s = n.length
              , c = ""
              , d = "";
            n: for (l = 0; l < s; l++) {
                var p = n.charAt(l);
                if (!1 === r) {
                    if ("<" === p) {
                        r = l;
                        continue
                    }
                } else if (!1 === a) {
                    if ("<" === p) {
                        i += e(n.slice(o, l)),
                        r = l,
                        o = l;
                        continue
                    }
                    if (">" === p || l === s - 1) {
                        i += e(n.slice(o, r)),
                        c = eo(d = n.slice(r, l + 1)),
                        i += t(r, i.length, c, d, io(d)),
                        o = l + 1,
                        r = !1;
                        continue
                    }
                    if ('"' === p || "'" === p)
                        for (var u = 1, f = n.charAt(l - u); "" === f.trim() || "=" === f; ) {
                            if ("=" === f) {
                                a = p;
                                continue n
                            }
                            f = n.charAt(l - ++u)
                        }
                } else if (p === a) {
                    a = !1;
                    continue
                }
            }
            return o < s && (i += e(n.substr(o))),
            i
        }
        ,
        no.parseAttr = function(n, t) {
            var e = 0
              , i = 0
              , o = []
              , r = !1
              , a = n.length;
            function l(n, e) {
                if (!((n = (n = to.trim(n)).replace(oo, "").toLowerCase()).length < 1)) {
                    var i = t(n, e || "");
                    i && o.push(i)
                }
            }
            for (var s = 0; s < a; s++) {
                var c, d = n.charAt(s);
                if (!1 !== r || "=" !== d)
                    if (!1 === r || s !== i)
                        if (/\s|\n|\t/.test(d)) {
                            if (n = n.replace(/\s|\n|\t/g, " "),
                            !1 === r) {
                                if (-1 === (c = ro(n, s))) {
                                    l(to.trim(n.slice(e, s))),
                                    r = !1,
                                    e = s + 1;
                                    continue
                                }
                                s = c - 1;
                                continue
                            }
                            if (-1 === (c = lo(n, s - 1))) {
                                l(r, so(to.trim(n.slice(e, s)))),
                                r = !1,
                                e = s + 1;
                                continue
                            }
                        } else
                            ;
                    else {
                        if (-1 === (c = n.indexOf(d, s + 1)))
                            break;
                        l(r, to.trim(n.slice(i + 1, c))),
                        r = !1,
                        e = (s = c) + 1
                    }
                else
                    r = n.slice(e, s),
                    e = s + 1,
                    i = '"' === n.charAt(e) || "'" === n.charAt(e) ? e : ao(n, s + 1)
            }
            return e < n.length && (!1 === r ? l(n.slice(e)) : l(r, so(to.trim(n.slice(e))))),
            to.trim(o.join(" "))
        }
        ;
        var co = ji.FilterCSS
          , po = bi
          , uo = no
          , fo = uo.parseTag
          , go = uo.parseAttr
          , ho = Ei;
        function mo(n) {
            return null == n
        }
        function $o(n) {
            (n = function(n) {
                var t = {};
                for (var e in n)
                    t[e] = n[e];
                return t
            }(n || {})).stripIgnoreTag && (n.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),
            n.onIgnoreTag = po.onIgnoreTagStripAll),
            n.whiteList || n.allowList ? n.whiteList = function(n) {
                var t = {};
                for (var e in n)
                    Array.isArray(n[e]) ? t[e.toLowerCase()] = n[e].map((function(n) {
                        return n.toLowerCase()
                    }
                    )) : t[e.toLowerCase()] = n[e];
                return t
            }(n.whiteList || n.allowList) : n.whiteList = po.whiteList,
            n.onTag = n.onTag || po.onTag,
            n.onTagAttr = n.onTagAttr || po.onTagAttr,
            n.onIgnoreTag = n.onIgnoreTag || po.onIgnoreTag,
            n.onIgnoreTagAttr = n.onIgnoreTagAttr || po.onIgnoreTagAttr,
            n.safeAttrValue = n.safeAttrValue || po.safeAttrValue,
            n.escapeHtml = n.escapeHtml || po.escapeHtml,
            this.options = n,
            !1 === n.css ? this.cssFilter = !1 : (n.css = n.css || {},
            this.cssFilter = new co(n.css))
        }
        $o.prototype.process = function(n) {
            if (!(n = (n = n || "").toString()))
                return "";
            var t = this.options
              , e = t.whiteList
              , i = t.onTag
              , o = t.onIgnoreTag
              , r = t.onTagAttr
              , a = t.onIgnoreTagAttr
              , l = t.safeAttrValue
              , s = t.escapeHtml
              , c = this.cssFilter;
            t.stripBlankChar && (n = po.stripBlankChar(n)),
            t.allowCommentTag || (n = po.stripCommentTag(n));
            var d = !1;
            t.stripIgnoreTagBody && (d = po.StripTagBody(t.stripIgnoreTagBody, o),
            o = d.onIgnoreTag);
            var p = fo(n, (function(n, t, d, p, u) {
                var f = {
                    sourcePosition: n,
                    position: t,
                    isClosing: u,
                    isWhite: Object.prototype.hasOwnProperty.call(e, d)
                }
                  , g = i(d, p, f);
                if (!mo(g))
                    return g;
                if (f.isWhite) {
                    if (f.isClosing)
                        return "</" + d + ">";
                    var h = function(n) {
                        var t = ho.spaceIndex(n);
                        if (-1 === t)
                            return {
                                html: "",
                                closing: "/" === n[n.length - 2]
                            };
                        var e = "/" === (n = ho.trim(n.slice(t + 1, -1)))[n.length - 1];
                        return e && (n = ho.trim(n.slice(0, -1))),
                        {
                            html: n,
                            closing: e
                        }
                    }(p)
                      , m = e[d]
                      , $ = go(h.html, (function(n, t) {
                        var e = -1 !== ho.indexOf(m, n)
                          , i = r(d, n, t, e);
                        return mo(i) ? e ? (t = l(d, n, t, c)) ? n + '="' + t + '"' : n : mo(i = a(d, n, t, e)) ? void 0 : i : i
                    }
                    ));
                    return p = "<" + d,
                    $ && (p += " " + $),
                    h.closing && (p += " /"),
                    p += ">"
                }
                return mo(g = o(d, p, f)) ? s(p) : g
            }
            ), s);
            return d && (p = d.remove(p)),
            p
        }
        ;
        var bo = $o;
        !function(n, t) {
            var e = bi
              , i = no
              , o = bo;
            function r(n, t) {
                return new o(t).process(n)
            }
            (t = n.exports = r).filterXSS = r,
            t.FilterXSS = o,
            function() {
                for (var n in e)
                    t[n] = e[n];
                for (var o in i)
                    t[o] = i[o]
            }(),
            typeof window < "u" && (window.filterXSS = n.exports),
            typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = n.exports)
        }($i, $i.exports);
        const yo = o($i.exports)
          , vo = [{
            id: 300,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M500 0v448.944c-44.604 35.874-102.608 57.157-148.309 48.1-64.963-12.743-116.219-89.592-180.468-151.709C106.974 283.218 29.733 235.57 7.174 167.081-10.185 114.38 4.921 50.141 42.082 0H500z" fill="currentColor"/></svg>'
        }, {
            id: 301,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M293.24 500c80.786 0 153.64-32.398 206.676-85.156.112-.111.112-138.364 0-414.76-276.41-.097-414.664-.097-414.76 0C32.842 52.957 0 127.054 0 207.244 0 368.93 131.288 500 293.24 500zm0-124.4c-93.133 0-168.633-75.375-168.633-168.355 0-92.98 75.5-168.355 168.634-168.355 93.134 0 168.634 75.375 168.634 168.355 0 92.98-75.5 168.355-168.634 168.355z" fill="currentColor" fill-rule="nonzero"/></svg>'
        }, {
            id: 302,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M.38 0h499.002v500C220.606 311.333 65.583 203.667 34.312 177 9.03 153-2.28 94 .38 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 303,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M293 500c80.81 0 153.993-35.093 207-88V0L85.612.023C32.71 53.03 0 126.195 0 207c0 161.82 131.18 293 293 293z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 304,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M500 0v435l-191.049 65-190.942-63.437L0 270.484V65.2L46.328 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 305,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path d="M274.576 0L168.188 106.99c-19.334 19.443-19.402 50.831-.151 70.358l.1.101c.11.113.222.224.333.336 19.251 19.154 50.385 19.076 69.54-.175l106.266-106.8L416 0h14.491L323.912 107.18c-19.141 19.25-19.399 50.205-.723 69.77l.572.588.1.102.333.335c19.251 19.155 50.385 19.077 69.54-.174L500 71V0v85.84l-70.168 71.076L323.034 263.18c-19.25 19.154-19.329 50.288-.175 69.538l.336.334.1.099c19.527 19.25 50.915 19.183 70.359-.152L500 227.25V415c-52.477 52.378-124.729 84.356-204.578 84.99L293 500C131.18 500 0 368.82 0 207 0 126.195 34.098 53.006 87 0h187.576z"/><path d="M321.647 107.95L429 0h71v73L393.552 179.617c-19.511 19.542-51.17 19.567-70.711.056a49.987 49.987 0 01-.275-.276l-1.068-1.083c-19.255-19.527-19.188-50.919.15-70.364z" opacity=".846"/><path d="M165.71 106.51L272 0h146l-72.18 71.767-107.037 107.591c-19.475 19.577-51.134 19.659-70.71.183a49.982 49.982 0 01-.335-.336l-2.235-2.267c-19.282-19.55-19.19-50.992.207-70.429z" opacity=".95"/><path d="M392.33 335.56L500 228l-.038-143.543-71.488 72.421-107.582 107.039c-19.576 19.477-19.656 51.135-.18 70.71.113.114.226.226.34.338l.836.825c19.558 19.284 51.01 19.181 70.443-.23z" opacity=".946"/></g></svg>'
        }, {
            id: 306,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path d="M293 500c80.81 0 153.979-32.714 206.986-85.621L500 0H86C33.098 53.006 0 126.195 0 207c0 72.234 74.119 120.913 112 173 48 66 91.415 120 181 120z" opacity=".705"/><path d="M293 500c80.81 0 153.979-32.714 206.986-85.621.005-110.425.008-193.244.008-248.457 0-22.385-38.704-27.69-64.994-48.922-17.014-13.74-17-26-42-57S308.63.01 212.945.016C184.65.018 142.334.012 86 0 33.098 53.006 0 126.195 0 207c0 72.18 74.291 117.694 112 173 45 66 91.361 120 181 120z"/></g></svg>'
        }, {
            id: 307,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M200 0h300v300c0 110.457-89.543 200-200 200H0V200C0 89.543 89.543 0 200 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 308,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><path d="M0 0h500v500c-155.605-50.938-274.605-117.605-357-200C60.605 217.605 12.938 117.605 0 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 309,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><g fill="currentColor"><path d="M499.002 0l.008 429.848c-12.13 4.048-24.19 8.035-36.072 12.026-14.499-58.642-34.095-148.59-115.9-197.241-81.664-48.505-204.646-58.7-283.266 26.784C102.74 374 131.964 463.948 194.145 490.152c14.335 6.063 30.42 8.752 48.04 8.847-17.85-.044-34.136-2.73-48.633-8.864-62.284-26.253-91.557-116.37-130.588-219.146-39.239-102.592-88.65-218.03-45.052-258.806C23.412 7.016 30.384 3.037 38.66.017L499.002 0z"/><path d="M349 245c82.486 49.024 100.389 137.96 115 197-111.721 37.236-206.02 74.661-268.877 48.091-62.647-26.383-92.99-116.345-132.249-219.632C142.084 184.39 266.724 196.163 349 245z" opacity=".807"/></g></svg>'
        }, {
            id: 310,
            position: "corner",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path d="M364.148 181.525a135.244 135.244 0 004.376-34.231c0-74.155-59.754-134.27-133.465-134.27-41.87 0-79.237 19.396-103.707 49.744 9.087 1.72 18.48 4.33 27.903 7.843 37.64 14.035 75.279 70.176 112.918 93.598 30.487 18.687 60.975 16.482 91.463 17.3z" fill-rule="nonzero" opacity=".845"/><path d="M64.87 70.702c18.896-14.064 56.234-14.45 94.024-.387 37.79 14.063 75.58 70.317 113.37 93.785 37.79 23.117 75.581 14.327 113.371 18.722 37.79 4.395 75.58 23.732 94.476 32.785l18.895 9.405V-.002H0c30.65 56.511 52.274 80.08 64.87 70.704z" fill-rule="nonzero" opacity=".845"/><path d="M399.198 457.957c37.182-12.652 63.948-48.041 63.948-89.72 0-52.295-42.14-94.69-94.124-94.69-13.143 0-25.658 2.71-37.02 7.606-9.137 35 49.07 69.908 45.038 104.922-4.104 35.645 10.942 57.37 21.857 71.494z" fill-rule="nonzero" opacity=".802"/><path d="M397.482 63.769c14 18.998 41.998 56.994 27.998 94.99-13.999 37.997-69.996 75.993-93.357 113.99-23.011 37.996 45.76 75.87 41.385 113.866-4.375 37.996 12.967 60.207 23.939 74.256 8.644 8.696 42.388 21.515 101.23 38.455V.33C421.88 29.957 388.148 51.103 397.481 63.769z" fill-rule="nonzero" opacity=".922"/><path d="M361.552 218.437c8.062 6.251 13.374 8.59 15.937 7.014 8.09-7.678 14.73-14.358 19.92-20.04a245.695 245.695 0 0014.94-18.037c-7.295-2.123-15.263-3.793-23.904-5.01-8.641-1.217-16.941-1.55-24.9-1.002-9.39 18.465-10.054 30.823-1.993 37.075z"/></g></svg>'
        }, {
            id: 8,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 109.785l64-19.602c64-19.969 192-58.62 320-39.294 128 19.325 256 98.466 384 98.191 128 .275 256-78.866 384-88.345 128-9.846 256 49.05 384 53.927 128 5.245 256-44.448 320-68.65l64-24.571V0H0v109.785z" fill="currentColor" /></svg>'
        }, {
            id: 9,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 111.471l8.267 5.325c8.133 5.126 25.066 16.074 41.066 2.637C65.6 105.997 82.667 69.172 98.667 66.335c16.266-2.637 32 29.212 49.333 47.774 16.133 18.76 32 23.737 49.333 29.211 16 5.474 32 10.45 49.334 2.638 15.866-8.112 32-29.013 49.333-37.124 15.733-7.813 32-2.837 48-10.65 17.067-8.111 33.333-29.012 49.333-23.886 16.934 5.324 33.334 37.173 49.334 34.536C459.467 105.997 476 69.172 492 63.698c16.667-5.474 33.333 21.398 49.333 31.849 16.667 10.45 33.334 5.474 49.334 7.962C607.2 105.997 624 116.945 640 124.759c16.4 8.11 33.333 13.087 49.333 10.599 16.267-2.488 33.334-13.436 49.334-29.212 16.266-16.073 32-36.974 49.333-37.123 16.133.149 32 21.05 49.333 31.848 16 10.6 32 10.6 49.334-5.324 15.866-15.925 32-47.774 49.333-53.098 15.733-5.126 32 15.775 48 21.249 17.067 5.474 33.333-5.474 49.333 0 16.934 5.474 33.334 26.375 49.334 31.849 16.8 5.474 33.333-5.474 49.333-15.925 16.667-10.45 33.333-21.398 49.333-13.287 16.667 7.813 33.334 34.686 49.334 26.574C1247.2 85.096 1264 42.3 1280 45.136c16.4 2.637 33.333 50.41 49.333 71.66 16.267 21.05 33.334 16.074 49.334 5.275 16.266-10.6 32-26.524 49.333-26.524 16.133 0 32 15.924 49.333 5.324 16-10.798 32-47.624 49.334-50.46 15.866-2.638 32 29.211 49.333 31.849 15.733 2.836 32-24.036 48-39.811 17.067-16.074 33.333-21.05 49.333 0 16.934 21.249 33.334 69.022 49.334 74.347 16.8 5.126 33.333-31.7 49.333-58.423 16.667-26.524 33.333-42.449 49.333-23.887 16.667 18.761 33.334 71.511 49.334 90.272 16.533 18.562 33.333 2.638 41.333-5.325l8-7.962V0H0v111.471z" opacity=".204"/><path d="M0 88.434l8.267 4.224c8.133 4.066 25.066 12.752 41.066 2.092C65.6 84.091 82.667 54.876 98.667 52.626c16.266-2.092 32 23.174 49.333 37.9 16.133 14.884 32 18.832 49.333 23.175 16 4.342 32 8.29 49.334 2.092 15.866-6.435 32-23.017 49.333-29.452 15.733-6.198 32-2.25 48-8.448 17.067-6.435 33.333-23.017 49.333-18.95 16.934 4.224 33.334 29.49 49.334 27.398C459.467 84.091 476 54.876 492 50.534c16.667-4.343 33.333 16.976 49.333 25.266 16.667 8.291 33.334 4.343 49.334 6.317C607.2 84.091 624 92.777 640 98.975c16.4 6.435 33.333 10.383 49.333 8.409 16.267-1.974 33.334-10.66 49.334-23.175 16.266-12.751 32-29.333 49.333-29.451 16.133.118 32 16.7 49.333 25.267 16 8.409 32 8.409 49.334-4.225 15.866-12.633 32-37.9 49.333-42.124 15.733-4.066 32 12.515 48 16.858 17.067 4.342 33.333-4.343 49.333 0 16.934 4.342 33.334 20.924 49.334 25.266 16.8 4.343 33.333-4.342 49.333-12.633 16.667-8.29 33.333-16.976 49.333-10.541 16.667 6.198 33.334 27.517 49.334 21.082C1247.2 67.51 1264 33.558 1280 35.808c16.4 2.092 33.333 39.992 49.333 56.85 16.267 16.7 33.334 12.752 49.334 4.185 16.266-8.41 32-21.043 49.333-21.043 16.133 0 32 12.634 49.333 4.225 16-8.567 32-37.782 49.334-40.032 15.866-2.093 32 23.174 49.333 25.266 15.733 2.25 32-19.068 48-31.583 17.067-12.752 33.333-16.7 49.333 0 16.934 16.858 33.334 54.758 49.334 58.982C1739.467 96.724 1756 67.51 1772 46.31c16.667-21.042 33.333-33.676 49.333-18.95 16.667 14.884 33.334 56.732 49.334 71.616C1887.2 113.7 1904 101.067 1912 94.75l8-6.316V0H0v88.434z"/></g></svg>'
        }, {
            id: 10,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 90c19.465 5.127 55.407 14.597 107.828 28.412 117.946 20.722 145.6 45.44 358.836 22.202C679.9 116.488 1067.056 23.682 1280.292 23.238c213.236.444 426.472 62.61 533.09 94.73L1920 149.495V0H0v90z" fill="currentColor" /></svg>'
        }, {
            id: 11,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 78.545L40 63.38c40-15.165 120-45.494 200-40.47 80 5.402 160 45.209 240 55.635 80 10.425 160-10.426 240 5.023 80 14.88 160 66.06 240 55.635 80-10.426 160-80.562 240-85.964 80-5.024 160 55.635 240 80.94 80 24.927 160 15.45 240 5.024 53.333-6.95 133.333-35.574 240-85.87V0H0v78.545z" opacity=".203"/><path d="M0 61.265l40-11.829C80 37.608 160 13.951 240 17.87c80 4.214 160 35.264 240 43.396 80 8.132 160-8.132 240 3.918 80 11.606 160 51.527 240 43.395 80-8.132 160-62.838 240-67.052 80-3.918 160 43.395 240 63.134 80 19.443 160 12.05 240 3.918 53.333-5.421 133.333-27.747 240-66.978V0H0v61.265z"/></g></svg>'
        }, {
            id: 12,
            position: "top",
            content: '<svg viewBox="0 0 1920 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M929 75c-18.105-22.632-30-32.143-49-33.929-46.667 0-340 .596-880 1.786V0h1920v42.857c-540-1.19-833.333-1.786-880-1.786-19 1.786-30.895 11.297-49 33.929-20 25-30.333 50-31 75-.667-25-11-50-31-75z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 13,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115"  preserveAspectRatio="none"><path d="M959 115L1920 0H0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 14,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115" preserveAspectRatio="none"><path d="M959 115c320.067 0 640.4-38.333 961-115H0c319.267 76.667 638.933 115 959 115z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 15,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115" preserveAspectRatio="none"><path d="M1920 0v115h-701l-86-90-86 90h-1l-86-90-86 90h-1l-86-90-86 90H0V0h1920z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 16,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 114" preserveAspectRatio="none"><path d="M1920 0l.002 38.708A56.43 56.43 0 011923 56.915c0 31.334-25.52 56.735-57 56.735-24.536 0-45.452-15.431-53.485-37.075-7.962 21.644-28.694 37.075-53.015 37.075-24.306 0-45.027-15.411-53-37.034-7.973 21.623-28.694 37.034-53 37.034-24.321 0-45.053-15.431-53.016-37.075-8.032 21.644-28.948 37.075-53.484 37.075s-45.452-15.431-53.485-37.075c-7.962 21.644-28.694 37.075-53.015 37.075s-45.053-15.431-53.016-37.075c-8.032 21.644-28.948 37.075-53.484 37.075-24.552 0-45.478-15.45-53.5-37.117-8.022 21.666-28.948 37.117-53.5 37.117-24.536 0-45.452-15.431-53.485-37.075-7.962 21.644-28.694 37.075-53.015 37.075-24.306 0-45.027-15.411-53-37.034-7.973 21.623-28.694 37.034-53 37.034-24.848 0-45.949-16.106-53.515-38.49-7.63 22.384-28.917 38.49-53.985 38.49-24.536 0-45.452-15.431-53.485-37.075-7.962 21.644-28.694 37.075-53.015 37.075s-45.053-15.431-53.016-37.075C739.452 98.219 718.536 113.65 694 113.65c-24.552 0-45.478-15.45-53.5-37.117-8.022 21.666-28.948 37.117-53.5 37.117-24.536 0-45.452-15.431-53.485-37.075-7.962 21.644-28.694 37.075-53.015 37.075-24.306 0-45.027-15.411-53-37.034-7.973 21.623-28.694 37.034-53 37.034-24.321 0-45.053-15.431-53.016-37.075-8.032 21.644-28.948 37.075-53.484 37.075s-45.452-15.431-53.485-37.075c-7.962 21.644-28.694 37.075-53.015 37.075s-45.053-15.431-53.016-37.075C100.452 98.219 79.536 113.65 55 113.65c-25.127 0-46.457-16.183-54.043-38.649L0 75v-3.138a56.554 56.554 0 01-2-14.947c0-5.174.696-10.186 2-14.948V0h1920z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 17,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path opacity=".1" d="M0 0h1920v150L960 59 0 150z"/><path opacity=".204" d="M0 0h1920v150L960 32 0 150z"/><path d="M0 0h1920v150L960 0 0 150z"/></g></svg>'
        }, {
            id: 18,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 82.489l8.267 3.94c8.133 3.793 25.066 11.895 41.066 1.952C65.6 78.438 82.667 51.187 98.667 49.088c16.266-1.952 32 21.617 49.333 35.352 16.133 13.884 32 17.566 49.333 21.617 16 4.05 32 7.733 49.334 1.952 15.866-6.003 32-21.47 49.333-27.472 15.733-5.782 32-2.1 48-7.88 17.067-6.003 33.333-21.47 49.333-17.677 16.934 3.94 33.334 27.509 49.334 25.557 16.8-2.1 33.333-29.35 49.333-33.4 16.667-4.051 33.333 15.834 49.333 23.568 16.667 7.733 33.334 4.05 49.334 5.892C607.2 78.437 624 86.539 640 92.32c16.4 6.003 33.333 9.685 49.333 7.844 16.267-1.841 33.334-9.943 49.334-21.617 16.266-11.894 32-27.36 49.333-27.471 16.133.11 32 15.577 49.333 23.568 16 7.844 32 7.844 49.334-3.94 15.866-11.785 32-35.353 49.333-39.293 15.733-3.793 32 11.674 48 15.724 17.067 4.051 33.333-4.05 49.333 0 16.934 4.051 33.334 19.518 49.334 23.569 16.8 4.05 33.333-4.051 49.333-11.785 16.667-7.733 33.333-15.834 49.333-9.832 16.667 5.782 33.334 25.667 49.334 19.665C1247.2 62.97 1264 31.3 1280 33.4c16.4 1.951 33.333 37.304 49.333 53.028 16.267 15.577 33.334 11.895 49.334 3.903 16.266-7.843 32-19.627 49.333-19.627 16.133 0 32 11.784 49.333 3.94 16-7.991 32-35.242 49.334-37.341 15.866-1.952 32 21.616 49.333 23.568 15.733 2.1 32-17.786 48-29.46 17.067-11.895 33.333-15.577 49.333 0 16.934 15.724 33.334 51.077 49.334 55.017 16.8 3.793 33.333-23.458 49.333-43.233 16.667-19.628 33.333-31.412 49.333-17.676 16.667 13.883 33.334 52.918 49.334 66.801 16.533 13.736 33.333 1.952 41.333-3.94l8-5.892V0H0v82.489z"/><path d="M2400 122.618l-12.4 5.857c-12.2 5.639-37.6 17.682-61.6 2.902-24.4-14.78-50-55.288-74-58.408-24.4-2.901-48 32.132-74 52.55-24.2 20.638-48 26.112-74 32.133-24 6.021-48 11.495-74 2.901-23.8-8.922-48-31.913-74-40.836-23.6-8.594-48-3.12-72-11.714-25.6-8.923-50-31.914-74-26.276-25.4 5.857-50 40.891-74 37.99-25.2-3.12-50-43.628-74-49.65-25-6.02-50 23.539-74 35.034-25 11.496-50 6.022-74 8.759-24.8 2.737-50 14.78-74 23.374-24.6 8.923-50 14.397-74 11.66-24.4-2.737-50-14.78-74-32.133-24.4-17.681-48-40.672-74-40.836-24.2.164-48 23.155-74 35.034-24 11.66-48 11.66-74-5.858-23.8-17.517-48-52.55-74-58.408-23.6-5.638-48 17.353-72 23.375-25.6 6.021-50-6.022-74 0-25.4 6.021-50 29.012-74 35.033-25.2 6.022-50-6.021-74-17.517-25-11.495-50-23.538-74-14.615-25 8.594-50 38.154-74 29.231-24.8-8.594-50-55.67-74-52.55-24.6 2.9-50 55.451-74 78.825-24.4 23.156-50 17.682-74 5.803-24.4-11.66-48-29.177-74-29.177-24.2 0-48 17.517-74 5.858-24-11.88-48-52.387-74-55.507-23.8-2.901-48 32.132-74 35.034-23.6 3.12-48-26.44-72-43.793-25.6-17.68-50-23.155-74 0-25.4 23.375-50 75.925-74 81.782-25.2 5.639-50-34.87-74-64.265-25-29.176-50-46.693-74-26.275-25 20.637-50 78.662-74 99.299-24.8 20.418-50 2.901-62-5.857l-12-8.759V0h2880v122.618z" opacity=".148"/><path d="M2221 0v85.855c-6.779 5.548-13.602 12.305-20.538 19.131-11.772 4.046-28.382 7.333-44.29-1.477-21.374-11.645-43.801-43.56-64.826-46.018-21.376-2.286-42.05 25.316-64.827 41.403-20.094 15.41-39.873 20.09-61.276 24.576-3.057-1.42-6.137-2.687-9.243-3.753-23.6-8.594-48-3.12-72-11.714-25.6-8.923-50-31.914-74-26.276-5.654 1.304-11.268 4.054-16.845 7.508-8.076-.586-16.16-1.555-24.192-4.142-22.427-7.03-43.803-25.144-64.828-20.702-9.04 1.875-17.963 7.544-26.783 13.46-5.15-3.686-10.27-6.508-15.352-7.783-14.515-3.496-29.03 5.002-43.349 14.995-14.978-10.546-29.739-26.602-44.17-29.858-21.9-4.744-43.802 18.545-64.827 27.602-21.9 9.057-43.802 4.744-64.827 6.9-21.726 2.157-43.802 11.645-64.827 18.417-21.55 7.03-43.802 11.343-64.827 9.186-11.389-1.149-23.076-4.38-34.69-9.214-17.023-13.11-33.9-26.646-51.743-30.849-14.028-9.398-28.165-17.342-43.221-17.427-21.2.129-42.05 18.243-64.827 27.602-21.025 9.186-42.05 9.186-64.827-4.615-20.85-13.801-42.05-41.403-64.828-46.018-20.674-4.442-42.05 13.672-63.074 18.416-22.427 4.744-43.803-4.744-64.828 0-22.251 4.744-43.802 22.858-64.827 27.602-22.076 4.744-43.802-4.744-64.827-13.801-21.9-9.057-43.802-18.545-64.827-11.515-8.39 2.593-16.78 7.611-25.12 12.42-5.217.2-10.399 1.149-15.534 3.058-5.9 2.028-11.8 5.224-17.687 8.806a25.17 25.17 0 01-6.486-1.254C582.101 73.751 560.025 36.66 539 39.118c-10.393 1.102-20.95 11.302-31.452 23.635-9.296-8.331-18.507-14.279-27.548-13.104-19.39 2.287-39.277 35.42-58.584 60.798-4.062-1.29-8.091-2.881-12.07-4.652-21.376-9.187-42.05-22.988-64.827-22.988-21.2 0-42.05 13.801-64.827 4.615-21.025-9.359-42.05-41.274-64.827-43.733-20.85-2.285-42.05 25.317-64.827 27.603-4.415.525-8.86-.124-13.328-1.603-7.814-6.678-15.757-11.947-23.89-13.754-8.63-6.379-17.273-13.564-25.858-19.146-22.426-13.93-43.802-18.244-64.827 0C12.123 45.076 2.252 58.017-7.493 70.166-17.008 62.28-26.535 53.537-36 46.693c-25.6-17.68-50-23.155-74 0l-.686.639c-20.843-20.99-41.648-32.755-61.66-17.444-19.15 14.217-38.3 50.956-56.864 70.831-9.704-11.551-19.31-24.897-28.79-36.509-14.735-17.196-29.47-30.343-44-34.058V0h2523z" opacity=".148"/></g></svg>'
        }, {
            id: 19,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 57.59c-171.821 47.008-300.354 63.396-385.598 49.162-127.867-21.35-255.734-64.051-383.6-49.773-127.868 13.744-255.734 85.802-383.601 92.474-127.867 6.672-255.734-49.373-383.6-78.33C255.733 42.702 127.866 42.702 63.932 42.702L0 37V0h1920v57.59z" opacity=".149"/><path d="M0 57.59c171.821 47.008 300.354 63.396 385.598 49.162 127.867-21.35 255.734-64.051 383.6-49.773 127.868 13.744 255.734 85.802 383.601 92.474 127.867 6.672 255.734-49.373 383.6-78.33 127.867-28.422 255.734-28.422 319.668-28.422H1920V0H0v57.59z" opacity=".296"/><path d="M0 38c171.821 31.032 300.354 41.85 385.598 32.457 127.867-14.092 255.734-42.274 383.6-32.85 127.868 9.07 255.734 56.629 383.601 61.032 127.867 4.404 255.734-32.586 383.6-51.697 127.867-18.76 255.734-18.76 319.668-18.76H1920V0H0v38z"/></g></svg>'
        }, {
            id: 20,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 0v21.154l-45.333 10.578c-31.795 7.206-84.077 19.323-143.225 30.767-27.663-3.5-56.846-6.693-86.109-9.037-91.066-7.658-182.666-7.658-273.333 11.45-40.286 8.243-80.572 20.286-120.747 31.204-51.422-1.507-102.713-2.777-153.92-.921-40.879 1.469-81.573 5.156-122.212 10.326-50.698-11.362-101.433-25.07-152.454-29.158C731.467 68.706 640 91.608 548 114.51l-5.45 1.374c-25.653 6.463-51.388 12.866-77.153 18.348-63.504-20.855-127.247-49.89-190.73-67.264-92-24.658-183.2-24.658-228.934-24.658l-12.776-.001L0 22.902V0h1920z" opacity=".299"/><path d="M1920 91.608l-45.733-7.658c-45.734-7.372-136.934-23.117-228.934-30.488-91.066-7.658-182.666-7.658-273.333 11.45-92 18.823-184 57.47-274.667 57.255-91.6.215-182.666-38.432-274.666-45.804C731.467 68.706 640 91.608 548 114.51c-90.8 22.902-182.667 45.804-273.333 30.56C182.8 129.54 92 76.58 45.333 49.597L0 22.902V0h1920v91.608z" opacity=".145"/><path d="M0 72.675L45.733 66.6c45.734-5.848 136.934-18.339 228.934-24.187 91.066-6.075 182.666-6.075 273.333 9.084C640 66.43 732 97.09 822.667 96.92c91.6.17 182.666-30.49 274.666-36.337C1188.533 54.506 1280 72.675 1372 90.844c90.8 18.169 182.667 36.338 273.333 24.244 91.867-12.32 182.667-54.336 229.334-75.741L1920 18.169V0H0v72.675z"/></g></svg>'
        }, {
            id: 21,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path d="M0 0h1920v43H0zM960 150l127-107H833z"/></g></svg>'
        }, {
            id: 22,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 120l160-13.375C320 93.75 640 66.25 960 53.375 1280 40 1600 40 1760 40h160V0H0v120z" opacity=".301"/><path d="M0 150l160-16.719c160-16.094 480-50.469 800-66.562C1280 50 1600 50 1760 50h160V0H0v150z" opacity=".15"/><path d="M0 90l160-10.031c160-9.656 480-30.281 800-39.938C1280 30 1600 30 1760 30h160V0H0v90z"/></g></svg>'
        }, {
            id: 23,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 20.429l-80 23.813c-80 24.068-240 71.31-400 68.118-160-3.192-320-58.095-480-57.904-160-.191-320 54.712-480 78.333-160 23.62-320 17.237-400 13.598l-80-3.384V0h1920v20.429z" opacity=".101"/><path d="M1920 17.024l-80 19.844c-80 20.057-240 59.425-400 56.765-160-2.66-320-48.413-480-48.253-160-.16-320 45.593-480 65.277-160 19.684-320 14.364-400 11.332l-80-2.82V0h1920v17.024z" opacity=".295"/><path d="M1920 12.938l-80 15.082c-80 15.243-240 45.163-400 43.141-160-2.022-320-36.793-480-36.672-160-.121-320 34.65-480 49.61S160 95.016 80 92.712L0 90.569V0h1920v12.938z"/></g></svg>'
        }, {
            id: 24,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 0h1920v1L0 150z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 25,
            position: "top",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 0h1920v1.273L1331 150 0 1.273z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 26,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 40.215l64 19.602c64 19.969 192 58.62 320 39.294C512 79.786 640 .645 768 .92c128-.275 256 78.866 384 88.345 128 9.846 256-49.05 384-53.927 128-5.245 256 44.448 320 68.65l64 24.571V150H0V40.215z" fill="currentColor" fill-rule="nonzero"/></svg>'
        }, {
            id: 27,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 60c19.465-5.127 55.407-14.597 107.828-28.412 117.946-20.722 145.6-45.44 358.836-22.202 213.236 24.126 600.392 116.932 813.628 117.376 213.236-.444 426.472-62.61 533.09-94.73L1920 .505V150H0V60z" fill="currentColor" fill-rule="nonzero"/></svg>'
        }, {
            id: 28,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 38.529l8.267-5.325c8.133-5.126 25.066-16.074 41.066-2.637C65.6 44.003 82.667 80.828 98.667 83.665c16.266 2.637 32-29.212 49.333-47.774 16.133-18.76 32-23.737 49.333-29.211 16-5.474 32-10.45 49.334-2.638 15.866 8.112 32 29.013 49.333 37.124 15.733 7.813 32 2.837 48 10.65 17.067 8.111 33.333 29.012 49.333 23.886 16.934-5.324 33.334-37.173 49.334-34.536C459.467 44.003 476 80.828 492 86.302c16.667 5.474 33.333-21.398 49.333-31.849 16.667-10.45 33.334-5.474 49.334-7.962C607.2 44.003 624 33.055 640 25.241c16.4-8.11 33.333-13.087 49.333-10.599 16.267 2.488 33.334 13.436 49.334 29.212 16.266 16.073 32 36.974 49.333 37.123 16.133-.149 32-21.05 49.333-31.848 16-10.6 32-10.6 49.334 5.324 15.866 15.925 32 47.774 49.333 53.098 15.733 5.126 32-15.775 48-21.249 17.067-5.474 33.333 5.474 49.333 0 16.934-5.474 33.334-26.375 49.334-31.849 16.8-5.474 33.333 5.474 49.333 15.925 16.667 10.45 33.333 21.398 49.333 13.287 16.667-7.813 33.334-34.686 49.334-26.574C1247.2 64.904 1264 107.7 1280 104.864c16.4-2.637 33.333-50.41 49.333-71.66 16.267-21.05 33.334-16.074 49.334-5.275 16.266 10.6 32 26.524 49.333 26.524 16.133 0 32-15.924 49.333-5.324 16 10.798 32 47.624 49.334 50.46 15.866 2.638 32-29.211 49.333-31.849 15.733-2.836 32 24.036 48 39.811 17.067 16.074 33.333 21.05 49.333 0 16.934-21.249 33.334-69.022 49.334-74.347 16.8-5.126 33.333 31.7 49.333 58.423 16.667 26.524 33.333 42.449 49.333 23.887 16.667-18.761 33.334-71.511 49.334-90.272C1887.2 6.68 1904 22.604 1912 30.567l8 7.962V150H0V38.529z" opacity=".204"/><path d="M0 61.566l8.267-4.224C16.4 53.276 33.333 44.59 49.333 55.25 65.6 65.909 82.667 95.124 98.667 97.374c16.266 2.092 32-23.174 49.333-37.9 16.133-14.884 32-18.832 49.333-23.175 16-4.342 32-8.29 49.334-2.092 15.866 6.435 32 23.017 49.333 29.452 15.733 6.198 32 2.25 48 8.448 17.067 6.435 33.333 23.017 49.333 18.95 16.934-4.224 33.334-29.49 49.334-27.398C459.467 65.909 476 95.124 492 99.466c16.667 4.343 33.333-16.976 49.333-25.266 16.667-8.291 33.334-4.343 49.334-6.317C607.2 65.909 624 57.223 640 51.025c16.4-6.435 33.333-10.383 49.333-8.409 16.267 1.974 33.334 10.66 49.334 23.175 16.266 12.751 32 29.333 49.333 29.451 16.133-.118 32-16.7 49.333-25.267 16-8.409 32-8.409 49.334 4.225 15.866 12.633 32 37.9 49.333 42.124 15.733 4.066 32-12.515 48-16.858 17.067-4.342 33.333 4.343 49.333 0 16.934-4.342 33.334-20.924 49.334-25.266 16.8-4.343 33.333 4.342 49.333 12.633 16.667 8.29 33.333 16.976 49.333 10.541 16.667-6.198 33.334-27.517 49.334-21.082 16.533 6.198 33.333 40.15 49.333 37.9 16.4-2.092 33.333-39.992 49.333-56.85 16.267-16.7 33.334-12.752 49.334-4.185 16.266 8.41 32 21.043 49.333 21.043 16.133 0 32-12.634 49.333-4.225 16 8.567 32 37.782 49.334 40.032 15.866 2.093 32-23.174 49.333-25.266 15.733-2.25 32 19.068 48 31.583 17.067 12.752 33.333 16.7 49.333 0 16.934-16.858 33.334-54.758 49.334-58.982 16.8-4.066 33.333 25.148 49.333 46.349 16.667 21.042 33.333 33.676 49.333 18.95 16.667-14.884 33.334-56.732 49.334-71.616C1887.2 36.3 1904 48.933 1912 55.25l8 6.316V150H0V61.566z"/></g></svg>'
        }, {
            id: 29,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 71.455L40 86.62c40 15.165 120 45.494 200 40.47 80-5.402 160-45.209 240-55.635 80-10.425 160 10.426 240-5.023 80-14.88 160-66.06 240-55.635 80 10.426 160 80.562 240 85.964 80 5.024 160-55.635 240-80.94 80-24.927 160-15.45 240-5.024 53.333 6.95 133.333 35.574 240 85.87V150H0V71.455z" opacity=".203"/><path d="M0 88.735l40 11.829c40 11.828 120 35.485 200 31.567 80-4.214 160-35.264 240-43.396 80-8.132 160 8.132 240-3.918 80-11.606 160-51.527 240-43.395 80 8.132 160 62.838 240 67.052 80 3.918 160-43.395 240-63.134 80-19.443 160-12.05 240-3.918 53.333 5.421 133.333 27.747 240 66.978V150H0V88.735z"/></g></svg>'
        }, {
            id: 30,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M929 75c-18.105 22.632-30 32.143-49 33.929-46.667 0-340-.596-880-1.786V150h1920v-42.857c-540 1.19-833.333 1.786-880 1.786-19-1.786-30.895-11.297-49-33.929-20-25-30.333-50-31-75-.667 25-11 50-31 75z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 31,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115" preserveAspectRatio="none"><path d="M959 0c320.067 0 640.4 38.333 961 115H0C319.267 38.333 638.933 0 959 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 32,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115" preserveAspectRatio="none"><path d="M1920 115V0h-701l-86 90-86-90h-1l-86 90-86-90h-1l-86 90-86-90H0v115h1920z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 33,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 114" preserveAspectRatio="none"><path d="M1920 114l.002-38.708A56.43 56.43 0 001923 57.085c0-31.334-25.52-56.735-57-56.735-24.536 0-45.452 15.431-53.485 37.075C1804.553 15.781 1783.821.35 1759.5.35c-24.306 0-45.027 15.411-53 37.034-7.973-21.623-28.694-37.034-53-37.034-24.321 0-45.053 15.431-53.016 37.075C1592.452 15.781 1571.536.35 1547 .35s-45.452 15.431-53.485 37.075C1485.553 15.781 1464.821.35 1440.5.35s-45.053 15.431-53.016 37.075C1379.452 15.781 1358.536.35 1334 .35c-24.552 0-45.478 15.45-53.5 37.117C1272.478 15.8 1251.552.35 1227 .35c-24.536 0-45.452 15.431-53.485 37.075C1165.553 15.781 1144.821.35 1120.5.35c-24.306 0-45.027 15.411-53 37.034-7.973-21.623-28.694-37.034-53-37.034-24.848 0-45.949 16.106-53.515 38.49C953.355 16.456 932.068.35 907 .35c-24.536 0-45.452 15.431-53.485 37.075C845.553 15.781 824.821.35 800.5.35s-45.053 15.431-53.016 37.075C739.452 15.781 718.536.35 694 .35c-24.552 0-45.478 15.45-53.5 37.117C632.478 15.8 611.552.35 587 .35c-24.536 0-45.452 15.431-53.485 37.075C525.553 15.781 504.821.35 480.5.35c-24.306 0-45.027 15.411-53 37.034C419.526 15.761 398.805.35 374.5.35c-24.321 0-45.053 15.431-53.016 37.075C313.452 15.781 292.536.35 268 .35s-45.452 15.431-53.485 37.075C206.553 15.781 185.821.35 161.5.35s-45.053 15.431-53.016 37.075C100.452 15.781 79.536.35 55 .35 29.873.35 8.543 16.533.957 38.999L0 39v3.138a56.554 56.554 0 00-2 14.947c0 5.174.696 10.186 2 14.948V114h1920z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 34,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path opacity=".1" d="M0 150h1920V0L960 91 0 0z"/><path opacity=".204" d="M0 150h1920V0L960 118 0 0z"/><path d="M0 150h1920V0L960 150 0 0z"/></g></svg>'
        }, {
            id: 35,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 92.41c-171.821-47.008-300.354-63.396-385.598-49.162-127.867 21.35-255.734 64.051-383.6 49.773C1022.933 79.277 895.067 7.219 767.2.547 639.334-6.125 511.467 49.92 383.6 78.877c-127.867 28.422-255.734 28.422-319.668 28.422L0 113v37h1920V92.41z" opacity=".149"/><path d="M0 92.41c171.821-47.008 300.354-63.396 385.598-49.162 127.867 21.35 255.734 64.051 383.6 49.773C897.067 79.277 1024.933 7.219 1152.8.547c127.867-6.672 255.734 49.373 383.6 78.33 127.867 28.422 255.734 28.422 319.668 28.422H1920V150H0V92.41z" opacity=".296"/><path d="M0 112c171.821-31.032 300.354-41.85 385.598-32.457 127.867 14.092 255.734 42.274 383.6 32.85 127.868-9.07 255.734-56.629 383.601-61.032 127.867-4.404 255.734 32.586 383.6 51.697 127.867 18.76 255.734 18.76 319.668 18.76H1920V150H0v-38z"/></g></svg>'
        }, {
            id: 36,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="evenodd"><path d="M0 150h1920v-43H0zM960 0l127 107H833z"/></g></svg>'
        }, {
            id: 37,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 129.571l-80-23.813c-80-24.068-240-71.31-400-68.118-160 3.192-320 58.095-480 57.904-160 .191-320-54.712-480-78.333C320-6.409 160-.026 80 3.613L0 6.997V150h1920v-20.429z" opacity=".101"/><path d="M1920 132.976l-80-19.844c-80-20.057-240-59.425-400-56.765-160 2.66-320 48.413-480 48.253-160 .16-320-45.593-480-65.277C320 19.659 160 24.979 80 28.01l-80 2.82V150h1920v-17.024z" opacity=".295"/><path d="M1920 137.062l-80-15.082c-80-15.243-240-45.163-400-43.141-160 2.022-320 36.793-480 36.672-160 .121-320-34.65-480-49.61S160 54.984 80 57.288L0 59.431V150h1920v-12.938z"/></g></svg>'
        }, {
            id: 38,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 150h1920v-1L0 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 39,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><path d="M0 150h1920v-1.273L1331 0 0 148.727z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 40,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 115" preserveAspectRatio="none"><path d="M959 0l961 115H0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, {
            id: 41,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 30l160 13.375C320 56.25 640 83.75 960 96.625 1280 110 1600 110 1760 110h160v40H0V30z" opacity=".301"/><path d="M0 0l160 16.719C320 32.812 640 67.187 960 83.28 1280 100 1600 100 1760 100h160v50H0V0z" opacity=".15"/><path d="M0 60l160 10.031c160 9.656 480 30.281 800 39.938C1280 120 1600 120 1760 120h160v30H0V60z"/></g></svg>'
        }, {
            id: 42,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M0 67.511l8.267-3.94c8.133-3.793 25.066-11.895 41.066-1.952 16.267 9.943 33.334 37.194 49.334 39.293 16.266 1.952 32-21.617 49.333-35.352 16.133-13.884 32-17.566 49.333-21.617 16-4.05 32-7.733 49.334-1.952 15.866 6.003 32 21.47 49.333 27.472 15.733 5.782 32 2.1 48 7.88 17.067 6.003 33.333 21.47 49.333 17.677 16.934-3.94 33.334-27.509 49.334-25.557 16.8 2.1 33.333 29.35 49.333 33.4 16.667 4.051 33.333-15.834 49.333-23.568 16.667-7.733 33.334-4.05 49.334-5.892C607.2 71.563 624 63.461 640 57.68c16.4-6.003 33.333-9.685 49.333-7.844 16.267 1.841 33.334 9.943 49.334 21.617 16.266 11.894 32 27.36 49.333 27.471 16.133-.11 32-15.577 49.333-23.568 16-7.844 32-7.844 49.334 3.94 15.866 11.785 32 35.353 49.333 39.293 15.733 3.793 32-11.674 48-15.724 17.067-4.051 33.333 4.05 49.333 0 16.934-4.051 33.334-19.518 49.334-23.569 16.8-4.05 33.333 4.051 49.333 11.785 16.667 7.733 33.333 15.834 49.333 9.832 16.667-5.782 33.334-25.667 49.334-19.665C1247.2 87.03 1264 118.7 1280 116.6c16.4-1.951 33.333-37.304 49.333-53.028 16.267-15.577 33.334-11.895 49.334-3.903 16.266 7.843 32 19.627 49.333 19.627 16.133 0 32-11.784 49.333-3.94 16 7.991 32 35.242 49.334 37.341 15.866 1.952 32-21.616 49.333-23.568 15.733-2.1 32 17.786 48 29.46 17.067 11.895 33.333 15.577 49.333 0 16.934-15.724 33.334-51.077 49.334-55.017 16.8-3.793 33.333 23.458 49.333 43.233 16.667 19.628 33.333 31.412 49.333 17.676 16.667-13.883 33.334-52.918 49.334-66.801C1887.2 43.943 1904 55.727 1912 61.619l8 5.892V150H0V67.511z"/><path d="M2400 27.382l-12.4-5.857c-12.2-5.639-37.6-17.682-61.6-2.902-24.4 14.78-50 55.288-74 58.408-24.4 2.901-48-32.132-74-52.55-24.2-20.638-48-26.112-74-32.133-24-6.021-48-11.495-74-2.901-23.8 8.922-48 31.913-74 40.836-23.6 8.594-48 3.12-72 11.714-25.6 8.923-50 31.914-74 26.276-25.4-5.857-50-40.891-74-37.99-25.2 3.12-50 43.628-74 49.65-25 6.02-50-23.539-74-35.034-25-11.496-50-6.022-74-8.759-24.8-2.737-50-14.78-74-23.374-24.6-8.923-50-14.397-74-11.66-24.4 2.737-50 14.78-74 32.133-24.4 17.681-48 40.672-74 40.836-24.2-.164-48-23.155-74-35.034-24-11.66-48-11.66-74 5.858-23.8 17.517-48 52.55-74 58.408-23.6 5.638-48-17.353-72-23.375-25.6-6.021-50 6.022-74 0-25.4-6.021-50-29.012-74-35.033-25.2-6.022-50 6.021-74 17.517-25 11.495-50 23.538-74 14.615-25-8.594-50-38.154-74-29.231-24.8 8.594-50 55.67-74 52.55-24.6-2.9-50-55.451-74-78.825-24.4-23.156-50-17.682-74-5.803-24.4 11.66-48 29.177-74 29.177-24.2 0-48-17.517-74-5.858-24 11.88-48 52.387-74 55.507-23.8 2.901-48-32.132-74-35.034-23.6-3.12-48 26.44-72 43.793-25.6 17.68-50 23.155-74 0-25.4-23.375-50-75.925-74-81.782-25.2-5.639-50 34.87-74 64.265-25 29.176-50 46.693-74 26.275-25-20.637-50-78.662-74-99.299-24.8-20.418-50-2.901-62 5.857l-12 8.759V150h2880V27.382z" opacity=".148"/><path d="M2221 150V64.145c-6.779-5.548-13.602-12.305-20.538-19.131-11.772-4.046-28.382-7.333-44.29 1.477-21.374 11.645-43.801 43.56-64.826 46.018-21.376 2.286-42.05-25.316-64.827-41.403-20.094-15.41-39.873-20.09-61.276-24.576-3.057 1.42-6.137 2.687-9.243 3.753-23.6 8.594-48 3.12-72 11.714-25.6 8.923-50 31.914-74 26.276-5.654-1.304-11.268-4.054-16.845-7.508-8.076.586-16.16 1.555-24.192 4.142-22.427 7.03-43.803 25.144-64.828 20.702-9.04-1.875-17.963-7.544-26.783-13.46-5.15 3.686-10.27 6.508-15.352 7.783-14.515 3.496-29.03-5.002-43.349-14.995-14.978 10.546-29.739 26.602-44.17 29.858-21.9 4.744-43.802-18.545-64.827-27.602-21.9-9.057-43.802-4.744-64.827-6.9-21.726-2.157-43.802-11.645-64.827-18.417-21.55-7.03-43.802-11.343-64.827-9.186-11.389 1.149-23.076 4.38-34.69 9.214-17.023 13.11-33.9 26.646-51.743 30.849-14.028 9.398-28.165 17.342-43.221 17.427-21.2-.129-42.05-18.243-64.827-27.602-21.025-9.186-42.05-9.186-64.827 4.615-20.85 13.801-42.05 41.403-64.828 46.018-20.674 4.442-42.05-13.672-63.074-18.416-22.427-4.744-43.803 4.744-64.828 0-22.251-4.744-43.802-22.858-64.827-27.602-22.076-4.744-43.802 4.744-64.827 13.801-21.9 9.057-43.802 18.545-64.827 11.515-8.39-2.593-16.78-7.611-25.12-12.42-5.217-.2-10.399-1.149-15.534-3.058-5.9-2.028-11.8-5.224-17.687-8.806a25.17 25.17 0 00-6.486 1.254c-21.726 6.77-43.802 43.862-64.827 41.403-10.393-1.102-20.95-11.302-31.452-23.635-9.296 8.331-18.507 14.279-27.548 13.104-19.39-2.287-39.277-35.42-58.584-60.798-4.062 1.29-8.091 2.881-12.07 4.652-21.376 9.187-42.05 22.988-64.827 22.988-21.2 0-42.05-13.801-64.827-4.615-21.025 9.359-42.05 41.274-64.827 43.733-20.85 2.285-42.05-25.317-64.827-27.603-4.415-.525-8.86.124-13.328 1.603-7.814 6.678-15.757 11.947-23.89 13.754-8.63 6.379-17.273 13.564-25.858 19.146-22.426 13.93-43.802 18.244-64.827 0-10.012-8.287-19.883-21.228-29.628-33.377C-17.008 87.72-26.535 96.463-36 103.307c-25.6 17.68-50 23.155-74 0l-.686-.639c-20.843 20.99-41.648 32.755-61.66 17.444-19.15-14.217-38.3-50.956-56.864-70.831-9.704 11.551-19.31 24.897-28.79 36.509-14.735 17.196-29.47 30.343-44 34.058V150h2523z" opacity=".148"/></g></svg>'
        }, {
            id: 43,
            position: "bottom",
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" preserveAspectRatio="none"><g fill="currentColor" fill-rule="nonzero"><path d="M1920 150v-21.154l-45.333-10.578c-31.795-7.206-84.077-19.323-143.225-30.767-27.663 3.5-56.846 6.693-86.109 9.037-91.066 7.658-182.666 7.658-273.333-11.45-40.286-8.243-80.572-20.286-120.747-31.204-51.422 1.507-102.713 2.777-153.92.921-40.879-1.469-81.573-5.156-122.212-10.326-50.698 11.362-101.433 25.07-152.454 29.158C731.467 81.294 640 58.392 548 35.49l-5.45-1.374c-25.653-6.463-51.388-12.866-77.153-18.348-63.504 20.855-127.247 49.89-190.73 67.264-92 24.658-183.2 24.658-228.934 24.658l-12.776.001L0 127.098V150h1920z" opacity=".299"/><path d="M1920 58.392l-45.733 7.658c-45.734 7.372-136.934 23.117-228.934 30.488-91.066 7.658-182.666 7.658-273.333-11.45-92-18.823-184-57.47-274.667-57.255-91.6-.215-182.666 38.432-274.666 45.804C731.467 81.294 640 58.392 548 35.49 457.2 12.589 365.333-10.313 274.667 4.93 182.8 20.46 92 73.42 45.333 100.403L0 127.098V150h1920V58.392z" opacity=".145"/><path d="M0 77.325L45.733 83.4c45.734 5.848 136.934 18.339 228.934 24.187 91.066 6.075 182.666 6.075 273.333-9.084C640 83.57 732 52.91 822.667 53.08c91.6-.17 182.666 30.49 274.666 36.337C1188.533 95.494 1280 77.325 1372 59.156c90.8-18.169 182.667-36.338 273.333-24.244 91.867 12.32 182.667 54.336 229.334 75.741L1920 131.831V150H0V77.325z"/></g></svg>'
        }];
        const wo = ({frame: n, position: t, globalColors: e}) => {
            const i = n.width || ("corner" === t ? "250px" : "100%")
              , o = n.height || ("corner" === t ? "250px" : "150px");
            return `\n        ${function({position: n, frame: t}) {
                if ("corner" === n) {
                    const {cornerPosition: n="top-right"} = t;
                    if ("top-left" === n)
                        return "\n                top: 0;\n                left: 0;\n            ";
                    if ("top-right" === n)
                        return "\n                top: 0;\n                right: 0;\n            ";
                    if ("bottom-left" === n)
                        return "\n                bottom: 0;\n                left: 0;\n            ";
                    if ("bottom-right" === n)
                        return "\n                bottom: 0;\n                right: 0;\n            "
                }
                return "top" === n ? "\n            top: 0;\n            left: 0;\n            right: 0;\n          " : "\n            left: 0;\n            right: 0;\n            bottom: 0;\n          "
            }({
                position: t,
                frame: n
            })}\n        position: absolute;\n        ${n.flip ? "transform:" + n.flip : ""};\n        background-repeat: no-repeat;\n        background-image: ${( (n, t) => {
                const e = vo.find((t => t.id === n.frameId));
                leti = e ? e.content : "";
                if (e && n.color) {
                    const o = ee(n.color) ? ( ({globalColors: n, frame: t}) => {
                        const e = n.find(( ({key: n}) => n == t.color.key));
                        return (null == e ? void 0 : e.value) || t.color.value
                    }
                    )({
                        frame: n,
                        globalColors: t
                    }) : n.color;
                    i = e.content.replace(/fill=".*?"/, `fill="${yo(o)}"`)
                }
                return "url(data:image/svg+xml;base64," + ri.Buffer.from(i).toString("base64") + ")"
            }
            )(n, e)};\n        width: ${i};\n        height: ${o};\n        background-size: ${i} ${o};\n`
        }
          , xo = n => /^(?:\s*[\w-]+\s*:\s*[^;:]+;\s*)+$/gim.test(n.replace(/\n/g, ""));
        function So(n={}, t, e) {
            let i = "";
            function o(t) {
                return n[t]
            }
            return Object.entries(n).filter(( ([n]) => !n.includes("__"))).forEach(( ([n,r]) => {
                const a = t && !1 === t[n];
                i += a ? "" : ce.css(n, r, e, o)
            }
            )),
            i
        }
        function ko(n, t, e, i) {
            let o = "";
            if (!et(n.style)) {
                if (n.style.__vars) {
                    const e = function(n) {
                        function t() {
                            return Object.entries(n).map(( ([n,t]) => `--${ne(n)}: ${t};\n`)).join("")
                        }
                        return {
                            getCSS: t
                        }
                    }(n.style.__vars);
                    o += `${t} {\n                ${e.getCSS()}\n            }\n`
                }
                const r = {
                    ...e,
                    ...fe(n)
                };
                o += `${t} {\n            ${So(n.style, r, i)}\n        }\n    `
            }
            return et(n.pseudoClass) || Object.keys(n.pseudoClass).forEach((e => {
                et(n.pseudoClass[e].style) || (o += `${t}:${e} {\n                ${So(n.pseudoClass[e].style, ge({
                    pseudo: e,
                    item: n
                }), i)}\n            }`)
            }
            )),
            et(n.wrapper) || (o += `${t}-wrapper {\n${So(n.wrapper)}\n}\n`),
            o
        }
        const Co = (n, t, e) => {
            var i, o, r;
            const {media: a, settings: l, symbols: s} = n
              , c = (null == (o = null == (i = null == t ? void 0 : t.settings) ? void 0 : i.general) ? void 0 : o.langDirection) || (null == (r = null == l ? void 0 : l.general) ? void 0 : r.langDirection) || "ltr";
            let d = "";
            if (l) {
                const {colors: n=[], gradients: t=[], customFonts: e=[], defaultFonts: i=[]} = l;
                d += `\n        /* CUSTOM FONTS*/\n        ${(n => null == n ? void 0 : n.map((n => {
                    lett = Object.entries(n.src || {}).map(( ([n,t]) => t && `url('${t}') format('${"ttf" === n ? "truetype" : n}')`)).filter((n => n));
                    return `\n        @font-face {\n            font-family: '${n.label}';\n            src: ${t};\n            font-weight: ${n.weight || 400};\n            font-style: ${n.style || "normal"};\n            font-display: swap;\n        }`
                }
                )))([...e]).join("\n") || ""}\n        `,
                d += `:root {\n            ${oe(n)}\n            ${oe(t)}\n        }`
            }
            if (d += ko(n, "body"),
            n.heading && Object.entries(n.heading).forEach(( ([n,t]) => {
                d += ko(t, n)
            }
            )),
            n.tags && (d += function(n) {
                const t = ["h1", "h2", "h3", "h4", "h5", "h6"]
                  , e = (n, t="") => n.map((n => `${t}:has(${n})`)).join(", ")
                  , i = n => `a:not(${e(n)})`;
                return Object.entries(n).map(( ([o,r]) => {
                    let a = {
                        a: i(t),
                        heading: e(t, "a")
                    }[o] || o;
                    return null != n && n.heading || (a = "a"),
                    `${a} {\n                ${ue(r.style)}\n            }`
                }
                )).join("\n")
            }(n.tags)),
            a && Object.entries({
                tablet: "1023px",
                mobile: "767px"
            }).forEach(( ([n,t]) => {
                if (!et(a[n])) {
                    d += `@media screen and (max-width: ${t}) {\n                    ${ko(a[n], "body")}\n                }\n`;
                    const e = a[n].heading;
                    if (e) {
                        const n = Object.entries(e).map(( ([n,t]) => ko(t, n))).join("\n");
                        d += `@media screen and (max-width: ${t}) {\n                        ${n}\n                    }`
                    }
                }
            }
            )),
            l) {
                const {containerWidth: n, columnGap: t} = l
                  , e = `:where([class*=${te}-container]:not([class*=${te}-container] *))`;
                d += n ? `\n            @media all and (min-width: 1280px) {\n                .container {\n                    width: ${n};\n                }\n                \n                ${e} {\n                    --max-width: ${n};\n                }\n                \n                ${e} .dorik-container--global-container-width {\n                    max-width: ${n} !important;\n                }\n            }` : `\n            @media all and (min-width: 1280px) {\n                \n                ${e} {\n                    --max-width: 1140px;\n                }\n                \n                ${e} .dorik-container--global-container-width {\n                    max-width: 1140px;\n                }\n            }`,
                t && (d += `.flex {\n                margin-left: calc(-${t} / 2);\n                margin-right: calc(-${t} / 2);\n            }\n            [class*="col-"] {\n                padding-left: calc(${t} / 2);\n                padding-right: calc(${t} / 2);\n            }`)
            }
            if (s) {
                const n = Ao(Object.values(s).map((n => ({
                    ...n.data,
                    symbolId: n.id
                }))));
                d += n
            }
            return c && e && (d += `\n            html {\n                direction:${c}\n            }\n        `),
            d
        }
        ;
        function Ao(n) {
            return n.map((n => {
                if (!n)
                    return "";
                let t = "";
                const {content: e, ...i} = n;
                return t += zo(i),
                Array.isArray(e) && (t += Ao(e)),
                t
            }
            )).join("\n")
        }
        function zo(n, t=[]) {
            let e = "";
            const {advanced: i={}} = n
              , {customStyle: o={}} = i
              , {style: r={}} = n.settings || {}
              , a = null != n && n.symbolId ? `.symbol--${n.symbolId}` : `.${te}-${n.type}-${n.id}`;
            function l(t) {
                return n.style[t]
            }
            return e += `\n/*${n.name}*/\n`,
            e += ko(n, a, r, l),
            e += function({style: n, className: t}) {
                return Object.entries(n).filter(( ([n,t]) => t.trim())).map(( ([n,e]) => {
                    if (e = e.replace(/\s+/gm, " "),
                    n.startsWith("&")) {
                        const i = `${t + n.slice(1)} { ${e} }`;
                        return xo(e || "") ? i : ""
                    }
                    {
                        const n = `${t} { ${e} }`;
                        return xo(e || "") ? n : ""
                    }
                }
                )).join("\n")
            }({
                className: a,
                style: o
            }),
            et(n.media) || (e += function(n, t, e) {
                let i = "";
                return Object.entries({
                    tablet: "1023px",
                    mobile: "767px"
                }).forEach(( ([o,r]) => {
                    et(n[o]) || (i += `@media screen and (max-width: ${r}) {\n                ${ko(n[o], t, null, e)}\n            }`)
                }
                )),
                i
            }(n.media, a, l)),
            e += oi({
                item: n,
                getRootStyle: l
            }),
            "section" === n.type && "frames"in n && Object.entries(n.frames).filter(( ([n,t]) => t.frameId)).map(( ([n,i]) => {
                e += `${a}-frame-${n} {\n            ${wo({
                    frame: i,
                    position: n,
                    globalColors: t
                })}\n        }`
            }
            )),
            e
        }
        const Bo = n => function(n={}) {
            const t = {
                portalButton: ".portal--button",
                banner: ".portal--banner"
            }
              , {primary: e, secondary: i, buttonText: o} = n;
            return `\n\t.portal--modal .ant-modal-content{\n\t\tborder-radius:5px;\n\t}\n\t.portals {\n\t\tbackground: blue;\n\t}\n\n\tdiv.portal {\n\t\twidth:100%;\n\t\tbackground:#fff;\n\t\tborder-radius: 8px;\n\t\tpadding: 8px 16px;\n\t\ttext-align:center;\n\t\t--primary-color:${e};\n\t\t--secondary-color:${i};\n\t\t--button-text:${o};\n\t}\n\n\t.portal--links {\n\t\twidth:90%;\n\t\tpadding:40px 32px;\n\t}\n\n\t.portal--plan h4,\n\t.portal--profile h4 {\n\t\tmargin-top:-20px;\n\t}\n\n\t.portal--plan .button--cancel {\n\t\tcursor:pointer;\n\t\tcolor:red !important;\n\t}\n\n\t.portal--logo {\n\t\tdisplay: flex;\n\t\tmargin-top:8px;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t.portal--logo img {\n\t\theight: 64px;\n\t\twidth: 64px;\n\t\tpadding:4px;\n\t\tborder-radius: 50%;\n\t\tobject-fit: contain;\n\t}\n\n\t.portal--logo h4 {\n\t\tfont-style: normal;\n\t\tfont-weight: 500;\n\t\tfont-size: 20px;\n\t\tline-height: 28px;\n\t\ttext-align: center;\n\t\tcolor: ${e};\n\t\tmargin-top: 16px;\n\t\tfont-weight:bolder;\n\t}\n\n\t.portal  hr {\n\t\tmargin-bottom:16px;\n\t}\n\n\t.portal .portal--close,\n\t.portal .portal--back {\n\t\ttop: 16px;\n\t\tright: 20px;\n\t\tfont-size: 18px;\n\t\tcursor:pointer;\n\t\tposition: absolute;\n\t}\n\n\t.portal .portal--back {\n\t\tleft:20px;\n\t}\n\n\t.portal .ant-form-item-control-input-content,\n\t.portal label,\n\t.portal p{\n\t\tcolor: ${i};\n\t}\n\n\t\n\n\t.portal .portal--title {\n\t\tmargin-bottom:24px;\n\t}\n\n\t.portal--plan__item,.portal--info__item {\n\t\tpadding: 8px 24px;\n\t\tborder: 1px solid #D1D5DB;\n\t\tborder-radius: 8px;\n\t\tmargin-bottom:8px;\n\t\tcursor:pointer;\n\t\tcolor: ${i};\n\t}\n\n\t.portal--meta {\n\tdisplay: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\tmargin-bottom:24px;\n\tmargin-top:8px;\n\t}\n\n\t.portal--meta h4, .portal--meta button {\n\t\tpadding:0;\n\t\tmargin:0;\n\t\tcolor:var(--primary-color);\n\t}\n\t\n\t.portal--meta h4 {\n\t\tmargin-top:8px;\n\t\tcolor: #111827;\n\t\tfont-style: normal;\n\t\tfont-weight: 500;\n\t\tfont-size: 20px;\n\t\tline-height: 28px;\n\t}\n\n\t.portal--meta__img {\n\t\tbackground: #F9FAFB;\n\t\tborder-radius: 32px;\n\t\twidth: 64px;\n\t\theight: 64px;\n\t}\n\t\n\t.portal--meta button {\n\t\tborder:none;\n\t\tcolor: #9CA3AF;\n\t\tcursor:pointer;\n\t\tbackground:transparent;\n\t}\n\n\t.portal--info__item {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n\n\t.portal--plan__item.active {\n\t\tborder-color:var(--primary-color);\n\t}\n\n\n\t.portal--info__item button {\n\t\tpadding:0;\n\t}\n\n\t.portal .envelope {\n\t\theight: 48px;\n\t\twidth: 48px;\n\t\tdisplay: grid;\n\t\tplace-content: center;\n\t\tbackground: #CCE7FF;\n\t\tborder-radius: 24px;\n\t\tcolor: #0062FF;\n\t\tmargin:16px auto 24px;\n\t}\n\n\t.portal--plan__item > div{\n\t\tdisplay:flex;\n\t\tjustify-content:space-between;\n\t}\n\n\t.portal--plan__item .ant-badge-status-dot {\n\t\twidth:4px;\n\t\theight:4px;\n\t\tmargin-left:8px;\n\t}\n\n\t.portal--info__item > div{\n\t\tdisplay:flex;\n\t\tflex-direction:column;\n\t\talign-items:flex-start;\n\t}\n\n\t/* Portal buttons*/\n\t${t.portalButton}.subscribe,\n\t${t.portalButton}.avatar {\n\t\tz-index:1;\n\t\tright:16px;\n\t\tbottom:16px;\n\t\tposition:fixed;\n\t\theight:56px !important;\n\t\tbackground:${e} !important;\n\t\tcolor:${o} !important;\n\t}\n\n\t${t.portalButton}.avatar {\n\t\twidth:56px;\n\t}\n\n\t${t.portalButton}.subscribe svg {\n\t\tmargin-right:8px;\n\t}\n\n\t${t.portalButton}.subscribe span {\n\t\tdisplay:flex;\n\t\talign-items:center;\n\t}\n\n\tdiv.portal button[type="submit"] {\n\t\tdisplay:block !important;\n\t\tbackground:var(--primary-color);\n\t\tcolor:var(--button-text);\n\t}\n\n\tdiv.portal .ant-btn-link {\n\t\tpadding:0;\n\t\tcolor:${e};\n\t}\n\n\tdiv.portal button[type="submit"],\n\t${t.portalButton} {\n\t\tborder-color:transparent;\n\t}\n\n\t/* Banner Style */\n\t${t.banner} {\n\t\tmargin: 16px 0;\n\t\tbackground: #3a30ba;\n\t\tborder-radius: 5px;\n\t\tpadding: 20px 39px;\n\t\ttext-align: center;\n\t}\n\n\t${t.banner} p,\n\t${t.banner} h3 {\n\t\tmargin: 0;\n\t\tcolor: white;\n\t}\n\n\t${t.banner} > button {\n\t\tmargin: 16px;\n\t\tborder: 1px solid;\n\t\tbackground: white;\n\t\tpadding: 8px 16px;\n\t\tborder-radius: 5px;\n\t}\n\n\t${t.banner} p button {\n\t\tpadding: 0;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\ttext-decoration:underline;\n\t\tmargin-left:8px;\n\t}\n\t`
        }(n)
          , jo = ({renderer: n, siteData: t}) => {
            try {
                const {page: e, global: i} = t
                  , {settings: {colors: o, columnGap: r}={}, symbols: a={}} = i || {};
                let l = "";
                return l += i ? Co(i, e, n) : "",
                l += Eo({
                    data: e,
                    globalColors: o,
                    symbols: a,
                    columnGap: r
                }),
                l
            } catch (e) {
                throw console.error(`Style generation error: ${e}`),
                new Error("Style generation failed.")
            }
        }
          , Eo = ({data: n, symbols: t, columnGap: e, globalColors: i}) => {
            let o = "";
            const r = n => {
                var a;
                if (!n)
                    return;
                const {symbolId: l} = n
                  , s = l ? {
                    ...null == (a = t[l]) ? void 0 : a.data,
                    symbolId: l
                } : n;
                Array.isArray(n.content) && (s.content = n.content.filter(Boolean).map((n => {
                    var e;
                    return n.symbolId ? {
                        ...null == (e = t[n.symbolId]) ? void 0 : e.data,
                        symbolId: n.symbolId
                    } : n
                }
                )),
                "section" === s.type && (s.content = s.content.map(( (n="30px") => t => {
                    if ("container" === t.type) {
                        const {style: e={}} = t;
                        return {
                            ...t,
                            holder: "root",
                            style: {
                                ...e,
                                gap: e.gap || n
                            }
                        }
                    }
                    return t
                }
                )(e)))),
                o += zo(s, i),
                (n => {
                    Array.isArray(n) && n.forEach(r)
                }
                )(s.content)
            }
            ;
            return r(n),
            o
        }
    }
}]);
