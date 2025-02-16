(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[820], {
    2904: function(n, t, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_error", function() {
            return e(3154)
        }
        ])
    },
    3154: function(n, t, e) {
        "use strict";
        e.r(t),
        e.d(t, {
            default: function() {
                return d
            }
        });
        var r = e(7568)
          , o = e(414)
          , u = e(5893)
          , i = e(4487)
          , s = e(2343)
          , a = e(4244);
        async function c(n) {
            const {req: t, res: e, err: r} = n
              , o = e && e.statusCode || n.statusCode;
            return o && o < 500 ? Promise.resolve() : n.pathname ? ((0,
            i.$e)((n => {
                t && n.setSDKProcessingMetadata({
                    request: t
                }),
                (0,
                i.Tb)(r || `_error.js called with falsy error (${r})`, {
                    mechanism: {
                        type: "instrument",
                        handled: !1,
                        data: {
                            function: "_error.getInitialProps"
                        }
                    }
                })
            }
            )),
            void (await async function() {
                try {
                    a.X && s.kg.log("Flushing events..."),
                    await (0,
                    i.yl)(2e3),
                    a.X && s.kg.log("Done flushing events")
                } catch (n) {
                    a.X && s.kg.log("Error while flushing events:\n", n)
                }
            }())) : Promise.resolve()
        }
        var f = e(2918)
          , l = function(n) {
            return (0,
            u.jsx)(f.default, {
                statusCode: n.statusCode
            })
        };
        l.getInitialProps = function() {
            var n = (0,
            r.Z)((function(n) {
                return (0,
                o.__generator)(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, c(n)];
                    case 1:
                        return t.sent(),
                        [2, f.default.getInitialProps(n)]
                    }
                }
                ))
            }
            ));
            return function(t) {
                return n.apply(this, arguments)
            }
        }();
        var d = l
    },
    2918: function(n, t, e) {
        n.exports = e(9185)
    },
    7568: function(n, t, e) {
        "use strict";
        function r(n, t, e, r, o, u, i) {
            try {
                var s = n[u](i)
                  , a = s.value
            } catch (c) {
                return void e(c)
            }
            s.done ? t(a) : Promise.resolve(a).then(r, o)
        }
        function o(n) {
            return function() {
                var t = this
                  , e = arguments;
                return new Promise((function(o, u) {
                    var i = n.apply(t, e);
                    function s(n) {
                        r(i, o, u, s, a, "next", n)
                    }
                    function a(n) {
                        r(i, o, u, s, a, "throw", n)
                    }
                    s(void 0)
                }
                ))
            }
        }
        e.d(t, {
            Z: function() {
                return o
            }
        })
    }
}, function(n) {
    n.O(0, [774, 888, 179], (function() {
        return t = 2904,
        n(n.s = t);
        var t
    }
    ));
    var t = n.O();
    _N_E = t
}
]);
