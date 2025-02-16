(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[599], {
    6220: function(e, n, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[domain]/auth/login", function() {
            return i(9692)
        }
        ])
    },
    4256: function(e, n, i) {
        "use strict";
        i.d(n, {
            l: function() {
                return o
            }
        });
        var t = i(5893)
          , r = i(1163)
          , o = function(e) {
            var n, i = e.user, o = (0,
            r.useRouter)();
            return (0,
            t.jsx)("div", {
                className: "flex justify-center items-center w-screen h-screen bg-[#00000073] fixed inset-0",
                children: (0,
                t.jsxs)("div", {
                    className: "w-96 p-4 shadow-md flex flex-col bg-white rounded-lg",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        t.jsx)("svg", {
                            className: "w-3 h-3 bg-red-500 mr-3 text-white rounded-full p-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        }), (0,
                        t.jsx)("p", {
                            className: "text-[#000000e0] font-light",
                            children: (null === (n = i.data) || void 0 === n ? void 0 : n.message) || "Unfortunately we could not log you in. Please try again!"
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: function() {
                            return o.push("/")
                        },
                        className: "outline-none px-4 py-2 bg-[#3a30ba] border-0 hover:cursor-pointe text-white rounded self-end hover:cursor-pointer",
                        children: "Try Again"
                    })]
                })
            })
        }
    },
    9692: function(e, n, i) {
        "use strict";
        i.r(n);
        var t = i(5893)
          , r = i(7294)
          , o = i(747)
          , s = i(1163)
          , l = i(1980)
          , u = i(9698)
          , d = i(5945)
          , a = i(4256)
          , c = i(7814);
        n.default = function() {
            var e, n, i, f = (0,
            s.useRouter)(), v = (0,
            o.y)().getIcon, h = (0,
            d.NL)(), x = f.query, p = x.magic_link, w = x.redirectTo, g = (0,
            l.W)().data, m = (0,
            u.Cx)(h, w), _ = m.mutate, N = m.data;
            (0,
            r.useEffect)((function() {
                v({
                    prefix: "fas",
                    iconName: "spinner"
                })
            }
            ), []);
            var j = null === g || void 0 === g || null === (e = g.data) || void 0 === e ? void 0 : e.id
              , k = null === g || void 0 === g || null === (n = g.data) || void 0 === n ? void 0 : n.owner
              , b = null === (null === N || void 0 === N ? void 0 : N.data) || !1 === (null === N || void 0 === N || null === (i = N.data) || void 0 === i ? void 0 : i.success);
            return (0,
            r.useEffect)((function() {
                p && j && k && _({
                    siteId: j,
                    ownerId: k,
                    provider: "magic_link",
                    passthrough: p
                })
            }
            ), [p, j, k, _]),
            b ? (0,
            t.jsx)(a.l, {
                user: N
            }) : (0,
            t.jsx)("div", {
                style: {
                    width: "100vw",
                    display: "grid",
                    height: "100vh",
                    color: "#3a30ba80",
                    placeItems: "center"
                },
                children: (0,
                t.jsx)(c.G, {
                    icon: ["fas", "spinner"],
                    spin: !0,
                    size: "2xl"
                })
            })
        }
    }
}, function(e) {
    e.O(0, [258, 698, 774, 888, 179], (function() {
        return n = 6220,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
