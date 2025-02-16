"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[698], {
    6664: function(e, t, n) {
        var r = n(7568)
          , a = n(9815)
          , o = n(414);
        t.Z = function(e) {
            var t = e.query
              , n = e.queryFn
              , u = e.transformResponse;
            return (0,
            r.Z)((function() {
                var e, r, s, i, c = arguments;
                return (0,
                o.__generator)(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = c.length,
                        r = new Array(e),
                        s = 0; s < e; s++)
                            r[s] = c[s];
                        return [4, n(t.apply(void 0, (0,
                        a.Z)(r)))];
                    case 1:
                        return i = o.sent(),
                        "function" === typeof u ? [2, u(i)] : [2, i]
                    }
                }
                ))
            }
            ))
        }
    },
    5975: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = n(7568)
          , a = n(1799)
          , o = n(9534)
          , u = n(414)
          , s = n(9669)
          , i = n.n(s)
          , c = n(2425);
        function d(e) {
            var t = e.baseUrl;
            return function() {
                var e = (0,
                r.Z)((function(e) {
                    var n, r, s, d, v, y, m, f, p, g, h, I, S, Z, D, b, q;
                    return (0,
                    u.__generator)(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            n = e.body,
                            r = e.headers,
                            s = (0,
                            o.Z)(e, ["body", "headers"]),
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]),
                            v = {},
                            d = Object.assign((v["Content-Type"] = "application/json",
                            v), r),
                            m = {},
                            [4, i().post(t, n, (0,
                            a.Z)((m.headers = d,
                            m), s))];
                        case 2:
                            return y = u.sent(),
                            f = y.data,
                            p = f.data,
                            g = f.errors,
                            (I = {}).data = p,
                            h = I,
                            g && (h.errors = (0,
                            c.I)(g[0])),
                            [2, h];
                        case 3:
                            return S = u.sent(),
                            D = (null === (Z = S.response) || void 0 === Z ? void 0 : Z.status) || 500,
                            b = {},
                            console.log((b.error = S,
                            b)),
                            [2, ((q = {}).data = null,
                            q.errors = [l({
                                code: D,
                                message: S.message
                            })],
                            q)];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
        function l(e) {
            var t = e.message
              , n = e.code;
            return {
                message: "Internal Server Error",
                extensions: {
                    message: t,
                    error: !0,
                    code: String(n)
                }
            }
        }
        i().defaults.timeout = 3e4
    },
    9698: function(e, t, n) {
        n.d(t, {
            vb: function() {
                return _
            },
            aC: function() {
                return w
            },
            WR: function() {
                return k
            },
            Cx: function() {
                return R
            },
            aU: function() {
                return T
            },
            iM: function() {
                return U
            },
            Io: function() {
                return E
            }
        });
        var r = n(1799)
          , a = n(9396)
          , o = n(7294)
          , u = n(1163)
          , s = n.n(u)
          , i = n(1980)
          , c = n(8228)
          , d = n(5945)
          , l = n(6492)
          , v = n(9534)
          , y = n(828)
          , m = n(4690)
          , f = n(1838)
          , p = n(6664)
          , g = n(1340)
          , h = (0,
        n(5975).Z)({
            baseUrl: g.j ? f.Bp.NEXT_API_PATH : f.Bp.API_URL
        })
          , I = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = {
                    queryName: "refreshToken",
                    args: {
                        siteId: {
                            value: e.siteId,
                            type: "ID"
                        },
                        ownerId: {
                            value: e.ownerId,
                            type: "ID!"
                        },
                        platform: {
                            value: "cms",
                            type: "Platform"
                        }
                    },
                    select: "token expiresAt success message user { id email role name}"
                };
                return {
                    body: (0,
                    m.Z)(t, !0)
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.refreshToken),
                t
            }
        })
          , S = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = {
                    queryName: "acceptInvitation",
                    args: {
                        token: {
                            value: e,
                            type: "String!"
                        }
                    },
                    select: "user { id email role name } token message success expiresAt"
                };
                return {
                    body: (0,
                    m.Z)(t, !0)
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.acceptInvitation),
                t
            }
        })
          , Z = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = {
                    queryName: "loginWith",
                    args: {
                        siteId: {
                            type: "ID!",
                            value: e.siteId
                        },
                        provider: {
                            type: "String",
                            value: e.provider
                        },
                        platform: {
                            type: "Platform!",
                            value: "cms"
                        },
                        passthrough: {
                            type: "String",
                            value: e.passthrough
                        },
                        ownerId: {
                            type: "ID!",
                            value: e.ownerId
                        },
                        source: {
                            type: "SourceEnum",
                            value: "PORTAL"
                        }
                    },
                    select: "user {id email role name} token message success expiresAt"
                };
                return {
                    body: (0,
                    m.Z)(t, !0)
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.loginWith),
                t
            }
        })
          , D = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                y.Z)(t, 2)
                  , r = n[0]
                  , a = n[1]
                  , o = a.siteId
                  , u = a.redirectTo
                  , s = a.domain
                  , i = a.tempUser
                  , c = a.email
                  , d = a.siteType
                  , l = {
                    queryName: r,
                    args: {
                        siteId: {
                            type: "ID!",
                            value: o
                        },
                        email: {
                            type: "String!",
                            value: c
                        },
                        domain: {
                            type: "String!",
                            value: s
                        },
                        platform: {
                            type: "Platform!",
                            value: "cms"
                        },
                        passthrough: {
                            type: "String",
                            value: a.passthrough
                        },
                        isCustomDomain: {
                            type: "Boolean",
                            value: !1
                        },
                        siteType: {
                            type: "String!",
                            value: d
                        },
                        redirectTo: {
                            type: "String",
                            value: u
                        },
                        user: {
                            type: "TempUserInput",
                            value: i
                        },
                        source: {
                            type: "SourceEnum",
                            value: "PORTAL"
                        }
                    },
                    select: "status message success"
                };
                return {
                    body: (0,
                    m.Z)(l)
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.sendMagicLink),
                t
            }
        })
          , b = (0,
        p.Z)({
            queryFn: h,
            query: function() {
                return {
                    body: (0,
                    m.Z)({
                        queryName: "logout",
                        args: {}
                    }, !0)
                }
            }
        })
          , q = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = e.id
                  , n = e.token
                  , r = {
                    queryName: "updateUser",
                    args: {
                        id: {
                            type: "ID!",
                            value: t
                        },
                        updateUserInput: {
                            type: "UpdateUserInput",
                            value: (0,
                            v.Z)(e, ["id", "token"])
                        }
                    },
                    select: "user {name email id} token expiresAt message success"
                };
                return {
                    body: (0,
                    m.Z)(r, !0),
                    headers: {
                        authorization: "Bearer ".concat(n)
                    }
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.updateUser),
                t
            }
        })
          , N = (0,
        p.Z)({
            queryFn: h,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                y.Z)(t, 2)
                  , r = {
                    queryName: n[0],
                    args: {
                        owner: {
                            type: "ID!",
                            value: n[1].id
                        }
                    },
                    select: "isFreeUser"
                };
                return {
                    body: (0,
                    m.Z)(r)
                }
            },
            transformResponse: function(e) {
                var t = (0,
                r.Z)({}, e);
                return e.data && (t.data = e.data.getUserStatsPublic),
                t
            }
        })
          , R = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return (0,
            c.D)(Z, {
                onSuccess: function(n) {
                    var r = n.data;
                    (null === r || void 0 === r ? void 0 : r.success) && (e.setQueryData(["auth"], r),
                    localStorage.setItem("authData", JSON.stringify(r)),
                    s().push("".concat(location.origin).concat(t)))
                }
            })
        }
          , _ = function() {
            var e = (0,
            d.NL)();
            return (0,
            c.D)(S, {
                onSuccess: function(t) {
                    var n = t.data;
                    (null === n || void 0 === n ? void 0 : n.success) && (e.setQueryData(["auth"], n),
                    localStorage.setItem("authData", JSON.stringify(n)))
                }
            })
        }
          , A = function(e) {
            return (0,
            c.D)(I, {
                onSuccess: function(t) {
                    var n = t.data;
                    (null === n || void 0 === n ? void 0 : n.success) ? (localStorage.setItem("authData", JSON.stringify(n)),
                    e.setQueryData(["auth"], n)) : (localStorage.removeItem("authData"),
                    e.setQueryData(["auth"], {}))
                }
            })
        }
          , U = function(e) {
            return (0,
            l.a)(["sendMagicLink", e], D, {
                enabled: !1,
                onSuccess: function(e) {
                    var t = e.data
                      , n = document.querySelector(".magic-link-response");
                    if (n) {
                        var r = (null === t || void 0 === t ? void 0 : t.success) ? "green" : "red";
                        n.style.color = r,
                        n.textContent = null === t || void 0 === t ? void 0 : t.message
                    }
                }
            })
        }
          , w = function() {
            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = n.skip, s = void 0 !== u && u, c = (0,
            d.NL)(), l = c.getQueryData(["auth"]), v = A(c), y = v.mutate, m = v.isLoading, f = (0,
            i.W)(), p = f.data, g = f.isLoading, h = null === p || void 0 === p || null === (e = p.data) || void 0 === e ? void 0 : e.id, I = null === p || void 0 === p || null === (t = p.data) || void 0 === t ? void 0 : t.owner, S = !!(null === l || void 0 === l ? void 0 : l.user), Z = !(null === l || void 0 === l ? void 0 : l.expiresAt) || 1e3 * l.expiresAt < Date.now();
            return (0,
            o.useEffect)((function() {
                !s && S && Z && h && I && y({
                    siteId: h,
                    ownerId: I
                })
            }
            ), [Z, y, h, s, S, I]),
            (0,
            o.useEffect)((function() {
                c.setQueryData(["auth"], JSON.parse(localStorage.getItem("authData") || "{}"))
            }
            ), []),
            (0,
            a.Z)((0,
            r.Z)({
                isTokenExpired: Z,
                isAuth: !!(null === l || void 0 === l ? void 0 : l.success)
            }, l), {
                isLoading: g || m
            })
        }
          , T = function(e) {
            return (0,
            c.D)(b, {
                onSuccess: function(t) {
                    e.invalidateQueries(["getUserMembership"]),
                    t && (e.setQueryData(["auth"], {}),
                    localStorage.removeItem("authData"))
                }
            })
        }
          , E = function(e) {
            return (0,
            c.D)(q, {
                onSuccess: function(t) {
                    var n = t.data;
                    n.success && (e.setQueryData(["auth"], n),
                    s().push("#"))
                }
            })
        }
          , k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (0,
            l.a)(["getUserStatsPublic", e], N, {
                enabled: !!(null === e || void 0 === e ? void 0 : e.id)
            })
        }
    },
    1980: function(e, t, n) {
        n.d(t, {
            W: function() {
                return p
            }
        });
        var r = n(1163)
          , a = n(7352)
          , o = n(5945)
          , u = n(6492)
          , s = n(1799)
          , i = n(828)
          , c = n(4690)
          , d = n(1838)
          , l = n(6664)
          , v = n(1340)
          , y = (0,
        n(5975).Z)({
            baseUrl: v.j ? d.Rm.NEXT_API_PATH : d.Rm.API_URL
        })
          , m = (0,
        l.Z)({
            queryFn: y,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                i.Z)(t, 2)
                  , r = n[0]
                  , a = n[1]
                  , o = a.domain
                  , u = a.customDomain
                  , s = a.select
                  , d = void 0 === s ? "" : s;
                return {
                    body: (0,
                    c.Z)({
                        queryName: r,
                        select: "id status name domain owner domainType dorikSitePrefix postSlug categorySlug siteType globalStyle isURLRedirectEnabled isAnalyticsEnabled analyticsSiteId owner " + d,
                        args: {
                            domain: {
                                value: o,
                                type: "String!"
                            },
                            customDomain: {
                                value: u,
                                type: "Boolean!"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                s.Z)({}, e);
                return e.data && (t.data = e.data.getSiteByDomain),
                t
            }
        })
          , f = (0,
        a.e)("production")
          , p = function(e, t) {
            var n = (0,
            o.NL)()
              , s = (0,
            r.useRouter)().query.domain || d._o;
            a.jU && (s && window.localStorage.setItem("__SIMULATE_DOMAIN", s),
            s = window.localStorage.getItem("__SIMULATE_DOMAIN")),
            e = a.jU ? window.location.host : n.getQueryData(["host"]);
            var i = f.resolveHost(e || "", s)
              , c = i.domain
              , l = i.isCustomDomain;
            return (0,
            u.a)(["getSiteByDomain", {
                domain: c,
                customDomain: l,
                select: t
            }], m)
        }
    },
    2425: function(e, t, n) {
        n.d(t, {
            I: function() {
                return o
            }
        });
        var r = n(1799)
          , a = n(9815)
          , o = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return t.reduce((function(e, t) {
                    return t.apply(void 0, (0,
                    a.Z)(e))
                }
                ), [e])
            }
        }((function(e) {
            var t = e.code
              , n = e.extensions;
            return [{
                message: e.message,
                extensions: (0,
                r.Z)({
                    code: t
                }, n)
            }]
        }
        ), (function(e) {
            var t = e.extensions
              , n = e.message;
            return [{
                extensions: (0,
                r.Z)({
                    message: n
                }, t)
            }]
        }
        ), (function(e) {
            var t = e.extensions
              , n = t.code
              , r = t.message
              , a = r;
            return 422 === Number(n) && "[object Object]" === Object.prototype.toString.call(r) && (a = Object.values(r).join(",")),
            [{
                extensions: {
                    code: n,
                    message: {
                        401: r,
                        404: r,
                        500: r,
                        422: a,
                        BAD_USER_INPUT: "Input is not valid",
                        INTERNAL_SERVER_ERROR: "Internal Server Error"
                    }[n]
                }
            }]
        }
        ))
    }
}]);
