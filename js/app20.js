(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[545], {
    2220: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[domain]/auth/accept-invitation", function() {
            return t(5641)
        }
        ])
    },
    4256: function(e, n, t) {
        "use strict";
        t.d(n, {
            l: function() {
                return r
            }
        });
        var s = t(5893)
          , i = t(1163)
          , r = function(e) {
            var n, t = e.user, r = (0,
            i.useRouter)();
            return (0,
            s.jsx)("div", {
                className: "flex justify-center items-center w-screen h-screen bg-[#00000073] fixed inset-0",
                children: (0,
                s.jsxs)("div", {
                    className: "w-96 p-4 shadow-md flex flex-col bg-white rounded-lg",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        s.jsx)("svg", {
                            className: "w-3 h-3 bg-red-500 mr-3 text-white rounded-full p-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        }), (0,
                        s.jsx)("p", {
                            className: "text-[#000000e0] font-light",
                            children: (null === (n = t.data) || void 0 === n ? void 0 : n.message) || "Unfortunately we could not log you in. Please try again!"
                        })]
                    }), (0,
                    s.jsx)("button", {
                        onClick: function() {
                            return r.push("/")
                        },
                        className: "outline-none px-4 py-2 bg-[#3a30ba] border-0 hover:cursor-pointe text-white rounded self-end hover:cursor-pointer",
                        children: "Try Again"
                    })]
                })
            })
        }
    },
    5641: function(e, n, t) {
        "use strict";
        t.r(n);
        var s = t(5893)
          , i = t(1163)
          , r = t(7294)
          , o = t(4256)
          , u = t(9698)
          , c = t(747)
          , a = t(7814);
        n.default = function() {
            var e, n = (0,
            i.useRouter)(), t = (0,
            c.y)().getIcon, l = (0,
            u.vb)(), d = l.mutate, f = l.data, h = l.isSuccess, v = n.query.token, p = null === (null === f || void 0 === f ? void 0 : f.data) || !1 === (null === f || void 0 === f || null === (e = f.data) || void 0 === e ? void 0 : e.success);
            return (0,
            r.useEffect)((function() {
                t({
                    prefix: "fas",
                    iconName: "spinner"
                })
            }
            ), []),
            (0,
            r.useEffect)((function() {
                v && d(v)
            }
            ), [d, v]),
            (0,
            r.useEffect)((function() {
                if (h) {
                    var e = f.data || {}
                      , t = e.success;
                    e.message;
                    if (t)
                        return void n.push("/")
                }
            }
            ), [h, null === f || void 0 === f ? void 0 : f.data, n]),
            p ? (0,
            s.jsx)(o.l, {
                user: f
            }) : (0,
            s.jsx)("div", {
                style: {
                    width: "100vw",
                    height: "100vh",
                    display: "grid",
                    color: "#3a30ba80",
                    placeItems: "center"
                },
                children: (0,
                s.jsx)(a.G, {
                    icon: ["fas", "spinner"],
                    spin: !0,
                    size: "2xl"
                })
            })
        }
    }
}, function(e) {
    e.O(0, [258, 698, 774, 888, 179], (function() {
        return n = 2220,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
