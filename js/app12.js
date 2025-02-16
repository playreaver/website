(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[525], {
    1525: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return lt
            },
            default: function() {
                return ct
            }
        });
        var a = {};
        n.r(a),
        n.d(a, {
            getPostBySlug: function() {
                return A
            },
            getPostsByCategorySlug: function() {
                return C
            },
            getPostsBySiteId: function() {
                return R
            },
            getPostsByTagSlug: function() {
                return F
            },
            getTopicItems: function() {
                return B
            },
            noop: function() {
                return _
            },
            searchCollections: function() {
                return w
            }
        });
        var r = n(828)
          , i = n(5893)
          , o = n(7294)
          , s = n(387)
          , u = n(1980)
          , d = n(1799)
          , l = n(9396)
          , c = n(7568)
          , g = n(414)
          , p = n(4690)
          , v = n(1838)
          , f = n(6664)
          , y = n(1340)
          , m = n(5975)
          , h = (0,
        m.Z)({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.API_URL
        })
          , b = (0,
        f.Z)({
            queryFn: h,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , o = i.slug
                  , s = i.siteId;
                return {
                    body: (0,
                    p.Z)({
                        queryName: a,
                        select: "id slug name",
                        args: {
                            slug: {
                                value: o,
                                type: "String!"
                            },
                            siteId: {
                                value: s,
                                type: "ID!"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getTagBySlug),
                t
            }
        });
        var I = n(9534)
          , P = n(9669)
          , x = n.n(P)
          , S = n(2425);
        function Z(e) {
            var t = e.baseUrl;
            return function() {
                var e = (0,
                c.Z)((function(e) {
                    var n, a, r, i, o, s, u, d, l, c, p, v, f, y, m, h, b, P, Z, j, w;
                    return (0,
                    g.__generator)(this, (function(g) {
                        switch (g.label) {
                        case 0:
                            n = e.body,
                            a = e.path,
                            r = void 0 === a ? "" : a,
                            i = e.method,
                            o = void 0 === i ? "GET" : i,
                            s = e.headers,
                            u = (0,
                            I.Z)(e, ["body", "path", "method", "headers"]),
                            g.label = 1;
                        case 1:
                            return g.trys.push([1, 3, , 4]),
                            l = {},
                            d = Object.assign((l["Content-Type"] = "application/json",
                            l), s),
                            (p = {}).method = o,
                            p.headers = d,
                            p.data = n,
                            p.url = t + r,
                            c = p,
                            [4, x()(Object.assign(c, u))];
                        case 2:
                            return v = g.sent(),
                            f = v.data,
                            y = f.data,
                            m = f.errors,
                            (b = {}).data = y,
                            h = b,
                            m && (h.errors = (0,
                            S.I)(m[0])),
                            [2, h];
                        case 3:
                            return P = g.sent(),
                            j = (null === (Z = P.response) || void 0 === Z ? void 0 : Z.status) || 500,
                            [2, ((w = {}).data = null,
                            w.errors = [T({
                                code: j,
                                message: P.message
                            })],
                            w)];
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
        function T(e) {
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
        var j = Z({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.REST_API_ROOT
        })
          , w = (0,
        f.Z)({
            queryFn: j,
            query: function(e) {
                var t = e.queryKey
                  , n = e.pageParam
                  , a = (0,
                r.Z)(t, 2)
                  , i = (a[0],
                a[1])
                  , o = i.siteId
                  , s = i.options
                  , u = s.page
                  , d = s.perPage
                  , l = s.query
                  , c = "loadMore" === s.type ? n || 1 : u;
                if (!l)
                    return;
                return {
                    body: {
                        siteId: o,
                        page: c,
                        perPage: d,
                        query: l
                    },
                    method: "POST",
                    path: "/search/collections"
                }
            }
        });
        var E = "id\n    title \n    excerpt \n    authorId \n    authors\n    content\n    htmlContent\n    slug \n    tags{\n        id name slug\n    } \n    categories{\n        id name slug\n    } \n    status \n    thumbnailImage \n    bannerImage  \n    createdAt\n    visibilityType\n    updatedAt\n    publishedAt\n    additionalMeta\n    meta {\n        title\n        keywords\n        description \n        opengraph {\n            title description image\n        }\n        twitter {\n            card image title description\n        }\n    }"
          , N = (0,
        m.Z)({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.API_URL
        })
          , q = Z({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.REST_API_ROOT
        })
          , A = (0,
        f.Z)({
            queryFn: N,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , o = i.slug
                  , s = i.siteId
                  , u = i.token
                  , d = {};
                u && (d.authorization = "Bearer ".concat(u));
                return {
                    headers: d,
                    body: (0,
                    p.Z)({
                        queryName: a,
                        select: E,
                        args: {
                            slug: {
                                value: o,
                                type: "String!"
                            },
                            siteId: {
                                value: s,
                                type: "ID!"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                if (e.data) {
                    var n = e.data.getPostBySlug;
                    t.data = (0,
                    l.Z)((0,
                    d.Z)({}, n), {
                        content: n.content || n.freeContent,
                        createdAt: new Date(n.createdAt).toISOString(),
                        updatedAt: new Date(n.updatedAt).toISOString()
                    })
                }
                return t
            }
        })
          , R = (0,
        f.Z)({
            queryFn: N,
            query: function(e) {
                var t = e.queryKey
                  , n = e.pageParam
                  , a = (0,
                r.Z)(t, 2)
                  , i = a[0]
                  , o = a[1]
                  , s = o.siteId
                  , u = o.options
                  , d = void 0 === u ? {} : u
                  , l = d.perPage
                  , c = d.page
                  , g = d.type
                  , v = d.sort
                  , f = "loadMore" === g ? n || 1 : c;
                return {
                    body: (0,
                    p.Z)({
                        queryName: i,
                        select: E,
                        args: {
                            page: {
                                type: "Int",
                                value: f
                            },
                            perPage: {
                                type: "Int",
                                value: l
                            },
                            siteId: {
                                value: s,
                                type: "ID!"
                            },
                            sort: {
                                type: "PostSort",
                                value: v
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getPostsBySiteId),
                t
            }
        })
          , C = (0,
        f.Z)({
            queryFn: N,
            query: function(e) {
                var t = e.queryKey
                  , n = e.pageParam
                  , a = (0,
                r.Z)(t, 2)
                  , i = a[0]
                  , o = a[1]
                  , s = o.slug
                  , u = o.siteId
                  , d = o.options
                  , l = void 0 === d ? {} : d
                  , c = l.page
                  , g = l.perPage
                  , v = l.type
                  , f = l.sort
                  , y = "loadMore" === v ? n || 1 : c;
                return {
                    body: (0,
                    p.Z)({
                        queryName: i,
                        select: E,
                        args: {
                            page: {
                                type: "Int",
                                value: y
                            },
                            perPage: {
                                type: "Int",
                                value: g
                            },
                            siteId: {
                                value: u,
                                type: "ID!"
                            },
                            slug: {
                                value: s,
                                type: "String!"
                            },
                            sort: {
                                type: "PostSort",
                                value: f
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getPostsByCategorySlug),
                t
            }
        })
          , F = (0,
        f.Z)({
            queryFn: N,
            query: function(e) {
                var t = e.queryKey
                  , n = e.pageParam
                  , a = (0,
                r.Z)(t, 2)
                  , i = a[0]
                  , o = a[1]
                  , s = o.slug
                  , u = o.siteId
                  , d = o.options
                  , l = void 0 === d ? {} : d
                  , c = l.page
                  , g = l.perPage
                  , v = "loadMore" === l.type ? n || 1 : c;
                return {
                    body: (0,
                    p.Z)({
                        queryName: i,
                        select: E,
                        args: {
                            page: {
                                type: "Int",
                                value: v
                            },
                            perPage: {
                                type: "Int",
                                value: g
                            },
                            siteId: {
                                value: u,
                                type: "ID!"
                            },
                            slug: {
                                value: s,
                                type: "String!"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getPostsByTagSlug),
                t
            }
        })
          , B = (0,
        f.Z)({
            queryFn: q,
            query: function(e) {
                var t = e.queryKey
                  , n = e.pageParam
                  , a = (0,
                r.Z)(t, 2)
                  , i = (a[0],
                a[1])
                  , o = i.slug
                  , s = i.options
                  , u = void 0 === s ? {} : s
                  , c = (0,
                I.Z)(t[1], ["slug", "options"])
                  , g = u.page
                  , p = u.perPage
                  , v = u.type
                  , f = u.filter
                  , y = u.sort
                  , m = "string" === typeof y && y ? "?".concat(y) : ""
                  , h = "loadMore" === v ? n || 1 : g
                  , b = (0,
                l.Z)((0,
                d.Z)({}, c), {
                    filter: f,
                    page: h,
                    perPage: p
                });
                return {
                    method: "POST",
                    path: "/topics/by-slug/".concat(o, "/items").concat(m),
                    body: b
                }
            }
        });
        var _ = function() {
            return {}
        }
          , L = n(6492)
          , k = (function() {
            var e = (0,
            c.Z)((function(e, t) {
                var n, a, i, o;
                return (0,
                g.__generator)(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return n = {},
                        t.slug ? (a = e.fetchQuery(["getTagBySlug", t], b),
                        i = e.fetchQuery(["getPostsByTagSlug", t], F),
                        [4, Promise.all([a, i])]) : (console.error("Slug not found!!"),
                        [2, n]);
                    case 1:
                        return o = r.Z.apply(void 0, [s.sent(), 1]),
                        [2, o[0]]
                    }
                }
                ))
            }
            ))
        }(),
        n(9815))
          , D = n(9403)
          , M = n(9698)
          , U = (0,
        m.Z)({
            baseUrl: y.j ? v.Bp.NEXT_API_PATH : v.Bp.API_URL
        })
          , O = (0,
        f.Z)({
            queryFn: U,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1].ids;
                return {
                    body: (0,
                    p.Z)({
                        queryName: a,
                        select: "id name avatar",
                        args: {
                            filter: {
                                value: {
                                    ids: i
                                },
                                type: "MultipleUserFilter"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getMultipleUsers),
                t
            }
        });
        var G = function(e) {
            var t, n, a = (t = {
                ids: e
            },
            n = {
                enabled: !!(null === e || void 0 === e ? void 0 : e.length)
            },
            (0,
            L.a)(["getMultipleUsers", t], O, n)), r = a.data, i = (void 0 === r ? {} : r).data, o = void 0 === i ? [] : i, s = a.isLoading;
            return {
                getAuthor: function(e) {
                    return (0,
                    d.Z)({}, null === o || void 0 === o ? void 0 : o.find((function(t) {
                        return t.id === e
                    }
                    )))
                },
                getAuthors: function(e) {
                    var t = e.authors
                      , n = void 0 === t ? [] : t
                      , a = e.authorId;
                    return s || !(null === o || void 0 === o ? void 0 : o.length) ? [] : (null === n || void 0 === n ? void 0 : n.length) ? n.map((function(e) {
                        return null === o || void 0 === o ? void 0 : o.find((function(t) {
                            return t.id === e
                        }
                        ))
                    }
                    )).filter(Boolean) : [o.find((function(e) {
                        return e.id === a
                    }
                    ))].filter(Boolean)
                }
            }
        }
          , K = function(e) {
            var t, n = (0,
            L.a)(["getPostsBySiteId", e], R, {
                keepPreviousData: !0,
                enabled: "nextPrev" === e.type
            }), a = n.data, r = n.isLoading, i = n.isFetching, o = (0,
            D.N)(["getPostsBySiteId", e], R, {
                getNextPageParam: function(t, n) {
                    if (t.data.length === e.perPage)
                        return n.length + 1
                },
                enabled: "loadMore" === e.type
            }), s = o.data, u = o.fetchNextPage, d = o.hasNextPage, l = o.isFetchingNextPage;
            return {
                posts: "nextPrev" === e.type ? null === a || void 0 === a ? void 0 : a.data : null === s || void 0 === s || null === (t = s.pages) || void 0 === t ? void 0 : t.flatMap((function(e) {
                    return e.data
                }
                )),
                hasNextPage: d,
                fetchNextPage: u,
                isFetchingNextPage: l,
                isLoading: r || i
            }
        }
          , W = n(1163)
          , z = n.n(W)
          , H = n(5152)
          , Q = n.n(H)
          , X = n(5945)
          , J = function(e) {
            var t = e.name
              , n = e.value
              , a = e.state;
            if (!t)
                return (0,
                d.Z)({}, a, n);
            var i = t.split("/")
              , o = (0,
            r.Z)(i.slice(-1), 1)[0]
              , s = (0,
            d.Z)({}, a);
            return i.reduce((function(e, t) {
                var a = e.state
                  , r = e.payload;
                if (t === o)
                    return function(e) {
                        return "[object Object]" === Object.prototype.toString.call(e)
                    }(n) ? r[t] = (0,
                    d.Z)({}, a[t], n) : r[t] = n;
                var i = (0,
                d.Z)({}, a[t]);
                return {
                    payload: r[t] = i,
                    state: i
                }
            }
            ), {
                state: a,
                payload: s
            }),
            s
        }
          , Y = n(8228)
          , V = (0,
        m.Z)({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.API_URL
        })
          , $ = location.origin
          , ee = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                var t = e.token
                  , n = {
                    queryName: "createCheckoutSession",
                    args: {
                        checkoutSessionInput: {
                            type: "CheckoutSessionInput",
                            value: (0,
                            I.Z)(e, ["token"])
                        }
                    },
                    select: "url"
                }
                  , a = {};
                return t && (a.authorization = "Bearer ".concat(t)),
                {
                    body: (0,
                    p.Z)(n, !0),
                    headers: a
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.createCheckoutSession),
                t
            }
        })
          , te = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                return {
                    body: (0,
                    p.Z)({
                        queryName: "getUserMembership",
                        args: {},
                        select: "customerId planId subscriptionId cancellationEffectiveDate paymentSource { sourceMeta } status renewAt"
                    }),
                    headers: {
                        authorization: "Bearer ".concat(e)
                    }
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getUserMembership),
                t
            }
        })
          , ne = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                var t = e.priceId
                  , n = e.token
                  , a = {
                    queryName: "upgradeSubscription",
                    args: {
                        priceId: {
                            type: "String!",
                            value: t
                        }
                    }
                }
                  , r = {};
                return n && (r.authorization = "Bearer ".concat(n)),
                {
                    body: (0,
                    p.Z)(a, !0),
                    headers: r
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.upgradeSubscription),
                t
            }
        })
          , ae = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                var t = e.token
                  , n = (0,
                p.Z)({
                    queryName: "cancelSubscription",
                    args: {}
                }, !0)
                  , a = {};
                return t && (a.authorization = "Bearer ".concat(t)),
                {
                    body: n,
                    headers: a
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.cancelSubscription),
                t
            }
        })
          , re = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                var t = e.priceId
                  , n = e.token
                  , a = {
                    queryName: "previewProration",
                    args: {
                        priceId: {
                            type: "String!",
                            value: t
                        }
                    },
                    select: "subtotal total"
                }
                  , r = (0,
                p.Z)(a, !0)
                  , i = {};
                return n && (i.authorization = "Bearer ".concat(n)),
                {
                    body: r,
                    headers: i
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.previewProration),
                t
            }
        })
          , ie = (0,
        f.Z)({
            queryFn: V,
            query: function(e) {
                var t = e.token
                  , n = {
                    queryName: "createPortalSession",
                    args: {
                        returnUrl: {
                            type: "String!",
                            value: $
                        }
                    },
                    select: "url"
                }
                  , a = {};
                return t && (a.authorization = "Bearer ".concat(t)),
                {
                    body: (0,
                    p.Z)(n, !0),
                    headers: a
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.createPortalSession),
                t
            }
        })
          , oe = function() {
            var e = (0,
            X.NL)();
            return (0,
            Y.D)(ne, {
                onSuccess: function(t) {
                    t.data && (e.invalidateQueries(["getUserMembership"]),
                    z().push("#"))
                }
            })
        }
          , se = function() {
            var e = (0,
            X.NL)();
            return (0,
            Y.D)(ae, {
                onSuccess: function(t) {
                    t.data && (e.invalidateQueries(["getUserMembership"]),
                    z().push("#"))
                }
            })
        }
          , ue = function() {
            return (0,
            Y.D)(re)
        }
          , de = function() {
            return (0,
            Y.D)(ie, {
                onSuccess: function(e) {
                    var t = e.data;
                    t && z().push(t.url)
                }
            })
        }
          , le = n(9008)
          , ce = n.n(le)
          , ge = n(1664)
          , pe = n.n(ge)
          , ve = n(5935)
          , fe = n(913)
          , ye = n(6271)
          , me = Z({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.REST_API_ROOT
        });
        (0,
        f.Z)({
            queryFn: me,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = (n[0],
                n[1])
                  , i = a.topicId
                  , o = a.token;
                return {
                    method: "GET",
                    path: "/topics/".concat(i),
                    headers: {
                        authorization: "Bearer ".concat(o)
                    }
                }
            }
        }),
        (0,
        f.Z)({
            queryFn: me,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = (n[0],
                n[1])
                  , i = a.topicSlug
                  , o = a.siteId;
                return {
                    method: "POST",
                    path: "/topics/by-slug/".concat(i),
                    body: {
                        siteId: o
                    }
                }
            }
        }),
        (0,
        f.Z)({
            queryFn: me,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = (n[0],
                n[1])
                  , i = a.slug
                  , o = a.siteId;
                return {
                    path: i,
                    method: "POST",
                    body: {
                        siteId: o
                    }
                }
            }
        });
        var he = (0,
        f.Z)({
            queryFn: me,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = (n[0],
                n[1])
                  , i = a.pageSlug
                  , o = a.slug
                  , s = a.siteId;
                return {
                    path: "/topics/by-slug/".concat(i, "/items/by-slug/").concat(o),
                    method: "POST",
                    body: {
                        siteId: s
                    }
                }
            }
        });
        !function() {
            var e = (0,
            c.Z)((function(e, t) {
                return (0,
                g.__generator)(this, (function(n) {
                    return [2, e.fetchQuery(["getCollectionItemByItemSlug", t], he)]
                }
                ))
            }
            ))
        }();
        var be = function(e) {
            var t = e.type
              , n = {
                TOPIC: "getTopicItems",
                POST: function(e, t) {
                    var n = {
                        TAG: "getPostsByTagSlug",
                        POST: "getPostsBySiteId",
                        CATEGORY: "getPostsByCategorySlug"
                    };
                    return ["CATEGORY", "TAG"].includes(e) && "POST" === t ? n[e] : n[t]
                }(e.pageType, t),
                TAG: "getPostsByTagSlug",
                CATEGORY: "getPostsByCategorySlug",
                SEARCH: "searchCollections"
            }[e.type];
            return function(e) {
                var t, n = e.args, r = e.name, i = void 0 === r ? "noop" : r, s = n.options, u = a[i], c = !n.slug || !!n.slug, g = (0,
                L.a)([i, (0,
                l.Z)((0,
                d.Z)({}, n), {
                    type: "nextPrev"
                })], u, {
                    keepPreviousData: !0,
                    enabled: c && "nextPrev" === s.type
                }), p = g.data, v = (0,
                I.Z)(g, ["data"]), f = (0,
                D.N)([i, (0,
                l.Z)((0,
                d.Z)({}, n), {
                    type: "loadMore"
                })], u, {
                    getNextPageParam: function(e, t) {
                        var n;
                        if ((null === (n = e.data) || void 0 === n ? void 0 : n.length) === s.perPage)
                            return t.length + 1
                    },
                    enabled: c && "loadMore" === s.type
                }), y = f.data, m = f.hasNextPage, h = f.fetchNextPage, b = f.isFetchingNextPage, P = (0,
                I.Z)(f, ["data", "hasNextPage", "fetchNextPage", "isFetchingNextPage"]), x = "nextPrev" === s.type ? null === p || void 0 === p ? void 0 : p.data : null === y || void 0 === y || null === (t = y.pages) || void 0 === t ? void 0 : t.flatMap((function(e) {
                    return e.data
                }
                )).filter((function(e) {
                    return e
                }
                )), S = {
                    nextPrev: v,
                    loadMore: P
                }[s.type] || {}, Z = S.isLoading, T = S.isFetching, j = [];
                (null === x || void 0 === x ? void 0 : x.length) >= 1 && ["getPostsBySiteId", "getPostsByCategorySlug"].includes(i) && (j = (0,
                k.Z)(new Set(null === x || void 0 === x ? void 0 : x.flatMap((function(e) {
                    var t = e.authors
                      , n = void 0 === t ? [] : t
                      , a = e.authorId;
                    return !n && a ? [a] : a ? n.concat(a) : n
                }
                )))));
                var w = G(j)
                  , E = w.getAuthor
                  , N = w.getAuthors;
                return {
                    isFetching: T,
                    isLoading: Z,
                    hasNextPage: m,
                    data: (0,
                    o.useMemo)((function() {
                        return x ? x.map((function(e) {
                            return (0,
                            l.Z)((0,
                            d.Z)({}, e), {
                                author: E(e.authorId),
                                authors: N(e || {})
                            })
                        }
                        )) : []
                    }
                    ), [x]),
                    fetchNextPage: h,
                    isFetchingNextPage: b
                }
            }({
                name: n,
                args: e
            })
        }
          , Ie = n(6573)
          , Pe = n(747)
          , xe = n(8924)
          , Se = n.n(xe)
          , Ze = function(e) {
            return Se()(e, {
                whiteList: {},
                stripIgnoreTag: !0,
                stripIgnoreTagBody: ["script"]
            })
        };
        function Te(e, t) {
            return e.map((function(e) {
                var n = t[e];
                if ("string" === typeof n && n.trim())
                    return {
                        key: e,
                        value: n
                    }
            }
            )).filter((function(e) {
                return e
            }
            ))
        }
        var je = {
            init: function(e) {
                var t = this;
                return e.map((function(e) {
                    return e.key in t.resource ? t.resource[e.key](e.value) : null
                }
                )).filter((function(e) {
                    return e
                }
                )).join("\n")
            },
            resource: {
                GTM: function(e) {
                    return '<script type="text/javascript">\n        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=\n        "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,"script","dataLayer","'.concat(Ze(e), '");\n    <\/script>')
                },
                crisp: function(e) {
                    return '<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="'.concat(Ze(e), '";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();<\/script>')
                },
                hotjar: function(e) {
                    return "<script>\n    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:".concat(Ze(e), ",hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n<\/script>")
                },
                pixel: function(e) {
                    return "\x3c!-- Facebook Pixel Code --\x3e\n    <script>\n      !function(f,b,e,v,n,t,s)\n      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n      n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('init', '".concat(Ze(e), '\');\n      fbq(\'track\', \'PageView\');\n    <\/script>\n    <noscript>\n      <img height="1" width="1" style="display:none"\n           src="https://www.facebook.com/tr?id=').concat(Ze(e), '&ev=PageView&noscript=1"/>\n    </noscript>\n    \x3c!-- End Facebook Pixel Code --\x3e')
                },
                intercom: function(e) {
                    return '<script>\n        window.intercomSettings = {\n            app_id: "'.concat(Ze(e), "\"\n        };\n        (function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/").concat(Ze(e), "';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();\n    <\/script>")
                },
                googleAnalytics: function(e) {
                    return '\n        <script async src="https://www.googletagmanager.com/gtag/js?id='.concat(Ze(e), '"><\/script>\n        <script type="text/javascript">\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag("js", new Date());\n            gtag("config", "').concat(Ze(e), '");\n        <\/script>\n    ')
                },
                paddleVendorId: function(e) {
                    return "\n    \x3c!-- Paddle Integration Code --\x3e\n    <script defer>\n        (function() {\n            const interval = setInterval(() => {\n                if(window.Paddle){\n                    clearInterval(interval)\n                    Paddle.Setup({ vendor: ".concat(Ze(e), " });\n                }\n            }, 500);\n        })();\n    <\/script>\n    \x3c!-- End Paddle Integration Code --\x3e\n    ")
                },
                umami: function(e) {
                    return '\n        \x3c!-- Analytics Integration Code --\x3e\n            <script async src="'.concat(v.Aq, '" data-website-id="').concat(e, '"><\/script>\n        \x3c!-- End Analytics Integration Code --\x3e\n    ')
                }
            }
        };
        var we = n(4298)
          , Ee = n.n(we)
          , Ne = function(e) {
            var t = e.footerScripts
              , n = e.footerInit;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(ce(), {
                    children: t.map((function(e) {
                        return (0,
                        i.jsx)("script", {
                            defer: !0,
                            src: e
                        }, e)
                    }
                    ))
                }), n && (0,
                i.jsx)(Ee(), {
                    strategy: "lazyOnload",
                    id: "recursive",
                    children: n
                })]
            })
        }
          , qe = {
            FREE: "FREE",
            PAID: "PAID",
            PUBLIC: "PUBLIC"
        }
          , Ae = function(e, t, n) {
            return !n && ("REGULAR" === t && [qe.FREE, qe.PAID].includes(e))
        }
          , Re = n(3636);
        n(7720);
        Re.vc.autoAddCss = !1;
        var Ce = function(e) {
            var t, n, a, s, u, c, g, p, f, y, m, h, b = e.data, I = e.user, P = e.slugs, x = e.colors, S = e.siteId, Z = e.pageData, T = e.pageType, j = e.pageSlug, w = e.membership, E = e.ownerState, N = e.subscriptionAccess, q = e.subscriptionBanner, A = e.isAnalyticsEnabled, R = e.analyticsSiteId, C = (0,
            W.useRouter)(), F = (0,
            Pe.y)().getIcon, B = (0,
            o.useMemo)((function() {
                var e = (Z.global || {}).settings
                  , t = (void 0 === e ? {} : e).colors
                  , n = (0,
                ye.WK)({
                    siteData: Z
                });
                return n += (0,
                ye.FP)(x),
                q.enabled && q.data && (n += (0,
                ye.Mi)(q.data, t)),
                n
            }
            ), [Z, x, q]), _ = (0,
            o.useMemo)((function() {
                return (null === Z || void 0 === Z ? void 0 : Z.global) && Z.global.pagesRef ? new Map(Z.global.pagesRef) : new Map
            }
            ), [null === Z || void 0 === Z ? void 0 : Z.global]), L = (0,
            X.NL)().getQueryData(["pageURL"]), k = Z.visibilityType, D = (0,
            Ie.u8)({
                siteId: S,
                isCMS: !0,
                data: Z,
                excludes: ["nav", "tabs", "code", "heading", "imageSlider", "counterdown", "airtableGrid", "contentSlider", "airtableTable", "airtableDetails", "airtableJobBoard", "testimonialSlider", "moveToTop", "imageGallery", "paymentWidgets"]
            }), M = (D.footer,
            D.footerScripts), U = D.footerScriptsInit.join("\n").replace(/\\/gi, '"').replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&#x27;/gi, "'").replace(/_\|DORIK\|/gi, '"').replace(/&sbquo;/gi, "'").replace(/&gt;/gi, ">"), O = (Z.page || {}).advanced, G = void 0 === O ? {} : O, z = Z.global || {}, H = z.integrations, Q = z.advanced, J = void 0 === Q ? {} : Q, Y = J.headerInject, V = void 0 === Y ? "" : Y, $ = J.footerInject, ee = void 0 === $ ? "" : $, te = G.headerInject, ne = void 0 === te ? "" : te, ae = G.footerInject, re = void 0 === ae ? "" : ae, ie = (0,
            l.Z)((0,
            d.Z)({}, H), {
                umami: A && R
            }), oe = (0,
            r.Z)(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = Te(["googleAnalytics", "umami"], e)
                  , n = Te(["GTM"], e)
                  , a = Te(["crisp", "hotjar", "pixel", "intercom", "paddleVendorId"], e);
                return [je.init(t), je.init(a), je.init(n)]
            }(ie), 3), se = oe[0], ue = void 0 === se ? "" : se, de = oe[1], le = void 0 === de ? "" : de, ge = oe[2], me = void 0 === ge ? "" : ge, he = (null === Z || void 0 === Z || null === (t = Z.page) || void 0 === t || null === (n = t.settings) || void 0 === n || null === (a = n.general) || void 0 === a ? void 0 : a.lang) || (null === Z || void 0 === Z || null === (s = Z.global) || void 0 === s || null === (u = s.settings) || void 0 === u || null === (c = u.general) || void 0 === c ? void 0 : c.lang) || "en";
            (0,
            o.useEffect)((function() {
                document.documentElement.lang = he
            }
            ), [he]);
            var xe = (null === Z || void 0 === Z || null === (g = Z.page) || void 0 === g || null === (p = g.settings) || void 0 === p || null === (f = p.general) || void 0 === f ? void 0 : f.langDirection) || (null === Z || void 0 === Z || null === (y = Z.global) || void 0 === y || null === (m = y.settings) || void 0 === m || null === (h = m.general) || void 0 === h ? void 0 : h.langDirection) || "ltr";
            (0,
            o.useEffect)((function() {
                document.documentElement.dir = xe
            }
            ), [xe]);
            var Se = E.isFreeUser ? "FREE" : "CMS"
              , Ze = Ie.P6.grantPermission(null === I || void 0 === I ? void 0 : I.role, Se)
              , we = Ae(k, T, null === Z || void 0 === Z ? void 0 : Z.isPasswordEnable)
              , Ee = "https://".concat(C.query.domain);
            return (0,
            i.jsx)(Ie.t6, {
                value: {
                    Link: pe(),
                    router: C,
                    appName: "CMS",
                    useFlag: fe.useFlag,
                    getIcon: F,
                    pagesRef: _,
                    permission: Ze,
                    CDNDomain: v.v9
                },
                children: (0,
                i.jsxs)(Ie.Iu, {
                    value: {
                        data: b,
                        user: I,
                        slugs: P,
                        siteId: S,
                        pageType: T,
                        pageSlug: j,
                        membership: w,
                        useCollectionItems: be,
                        subscriptionAccess: N,
                        CDNDomain: v.v9,
                        getPaginatedPosts: K,
                        subscriptionBanner: q
                    },
                    children: [(0,
                    i.jsx)(Ie.h4, {
                        data: Z,
                        siteId: S,
                        pageURL: L,
                        postMeta: null === b || void 0 === b ? void 0 : b.additionalMeta,
                        permission: Ze,
                        renderHead: function(e) {
                            return (0,
                            i.jsxs)(ce(), {
                                children: [(0,
                                ve.ZP)(me), e, (0,
                                i.jsx)("style", {
                                    children: B
                                }), v.oy && (0,
                                i.jsx)("meta", {
                                    name: "robots",
                                    content: "noindex, nofollow"
                                }), (0,
                                ve.ZP)(ue + V + ne)]
                            })
                        }
                    }), (0,
                    i.jsx)(Ie.uT, {
                        data: Z,
                        siteURL: Ee,
                        permission: Ze,
                        role: null === I || void 0 === I ? void 0 : I.role,
                        appName: "CMS",
                        canRender: function() {
                            return !0
                        },
                        isPrivatePage: we,
                        visibilityType: k,
                        membership: (null === w || void 0 === w ? void 0 : w.data) || {}
                    }), (0,
                    ve.ZP)(le + ee + re), (0,
                    i.jsx)(Ne, {
                        footerInit: U,
                        footerScripts: M
                    })]
                })
            })
        }
          , Fe = (0,
        n(7352).e)("production")
          , Be = (0,
        m.Z)({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.API_URL
        })
          , _e = (0,
        f.Z)({
            queryFn: Be,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , o = i.siteId
                  , s = i.slug
                  , u = i.pageType
                  , d = i.cookie
                  , l = void 0 === d ? "" : d
                  , c = (0,
                p.Z)({
                    queryName: a,
                    select: "id name body slug pageType ref visibilityType isPasswordEnable shouldOpenLoginWindow",
                    args: {
                        slug: {
                            value: s,
                            type: "String!"
                        },
                        siteId: {
                            value: o,
                            type: "ID!"
                        },
                        pageType: {
                            value: u,
                            type: "PageTypeEnum!"
                        }
                    }
                })
                  , g = {};
                return g.cookie = l,
                {
                    body: c,
                    headers: g
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getPageBySlug),
                t
            }
        });
        (0,
        f.Z)({
            queryFn: Be,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1].siteId;
                return {
                    body: (0,
                    p.Z)({
                        queryName: a,
                        select: "id slug ref pageType",
                        args: {
                            filter: {
                                type: "PageFilterInput",
                                value: {
                                    siteId: i,
                                    pageType: "TEMPLATE"
                                }
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getPages),
                t
            }
        });
        var Le = (0,
        f.Z)({
            queryFn: Be,
            query: function(e) {
                var t = {
                    queryName: "loginWithPage",
                    args: {
                        loginWithPageInput: {
                            type: "LoginWithPageInput",
                            value: e
                        }
                    },
                    select: ""
                };
                return {
                    body: (0,
                    p.Z)(t, !0)
                }
            }
        })
          , ke = function(e) {
            var t = e.siteId
              , n = e.slug;
            return (0,
            L.a)(["getPageBySlug", e], _e, {
                enabled: !!t && !!n
            })
        }
          , De = Q()((function() {
            return n.e(865).then(n.bind(n, 5495)).then((function(e) {
                return e.Avatar
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [null]
                }
            },
            ssr: !1
        })
          , Me = Q()((function() {
            return n.e(865).then(n.bind(n, 5495)).then((function(e) {
                return e.Subscribe
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [null]
                }
            },
            ssr: !1
        })
          , Ue = Q()((function() {
            return n.e(865).then(n.bind(n, 5495)).then((function(e) {
                return e.PortalModal
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [null]
                }
            },
            ssr: !1
        })
          , Oe = Q()((function() {
            return n.e(865).then(n.bind(n, 5495)).then((function(e) {
                return e.PortalDesignProvider
            }
            ))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [null]
                }
            },
            ssr: !1
        })
          , Ge = location.origin
          , Ke = function(e, t) {
            return t || e
        }
          , We = function(e) {
            var t, n, a, r, s, c, g, p, f = (0,
            W.useRouter)(), m = (0,
            X.NL)(), h = (0,
            M.aC)(), b = h.isAuth, I = h.user, P = h.token, x = (0,
            u.W)(g, "portalDesign subscriptionAccess audiencePlan { prices { amount priceId status interval currency} oneTimePrices { priceId amount status currency} paymentType }").data, S = (null === x || void 0 === x ? void 0 : x.data) || {}, Z = S.id, T = S.siteType, j = S.domain, w = S.owner, E = S.domainType, N = S.dorikSitePrefix, q = S.subscriptionAccess, A = void 0 === q ? "ANYONE" : q, R = S.audiencePlan, C = void 0 === R ? {} : R, F = C.prices, B = C.oneTimePrices, _ = C.paymentType, k = void 0 === _ ? "" : _, D = (null === (t = null === B || void 0 === B ? void 0 : B.map((function(e) {
                return (0,
                l.Z)((0,
                d.Z)({}, e), {
                    interval: "life-time"
                })
            }
            ))) || void 0 === t ? void 0 : t.filter((function(e) {
                return "NEW" === e.status && e.amount
            }
            ))) || [], U = (null === F || void 0 === F ? void 0 : F.filter((function(e) {
                return "NEW" === e.status && e.amount
            }
            ))) || [], O = function(e) {
                var t = e.domainType
                  , n = e.domain
                  , a = e.siteType
                  , r = e.dorikSitePrefix;
                return "CUSTOM" === t ? n : r + ".".concat(Fe[a])
            }({
                domainType: E,
                domain: j,
                dorikSitePrefix: N,
                siteType: T
            }), G = (0,
            M.WR)({
                id: w
            }).data, K = function(e) {
                var t = e.token
                  , n = e.role;
                return (0,
                L.a)(["getUserMembership"], (function() {
                    return te(t)
                }
                ), {
                    enabled: !!t && "subscriber" === n
                })
            }({
                token: P,
                role: null === I || void 0 === I ? void 0 : I.role
            }), z = K.data, H = K.gettingMembership;
            "CANCELLED" === (null === z || void 0 === z || null === (n = z.data) || void 0 === n ? void 0 : n.status) && (p = U.find((function(e) {
                var t;
                return e.priceId === (null === z || void 0 === z || null === (t = z.data) || void 0 === t ? void 0 : t.planId)
            }
            )));
            var Q = ue()
              , V = Q.data
              , $ = Q.mutate
              , ne = Q.isLoading
              , ae = (0,
            o.useReducer)(Ke, {})
              , re = ae[0]
              , ie = ae[1]
              , le = (0,
            M.aU)(m).mutate
              , ce = (0,
            M.Io)(m)
              , ge = ce.mutate
              , pe = ce.isLoading
              , ve = oe()
              , fe = ve.mutate
              , ye = ve.isLoading
              , me = de()
              , he = me.mutate
              , be = me.isLoading
              , Ie = function(e) {
                var t = e.name
                  , n = e.value
                  , a = J({
                    name: t,
                    value: n,
                    state: re
                });
                ie(a)
            }
              , Pe = (0,
            o.useMemo)((function() {
                var e, t, n = y.j ? location.href.split("/").pop() : "", a = re[n] || {}, r = a.name, i = a.email;
                "signup" === n && (t = {
                    name: r,
                    role: "subscriber"
                });
                var o = (null === (e = re.general) || void 0 === e ? void 0 : e.redirectTo) || (y.j ? location.pathname : "");
                return {
                    email: i,
                    siteId: Z,
                    siteType: T,
                    tempUser: t,
                    redirectTo: o,
                    source: "PORTAL",
                    isCustomDomain: !1,
                    domain: O
                }
            }
            ), [re, Z, T, O])
              , xe = function() {
                var e = (0,
                W.useRouter)()
                  , t = (0,
                X.NL)();
                return (0,
                Y.D)(ee, {
                    onSuccess: function(n) {
                        var a = n.data;
                        if (n.errors,
                        a)
                            return t.invalidateQueries(["getUserMembership"]),
                            e.push(a.url)
                    }
                })
            }()
              , Se = xe.mutate
              , Ze = xe.isLoading
              , Te = (0,
            M.iM)(Pe)
              , je = Te.refetch
              , we = Te.isInitialLoading
              , Ee = se()
              , Ne = Ee.mutate
              , Re = Ee.isLoading
              , Be = null === F || void 0 === F ? void 0 : F.find((function(e) {
                return "NEW" === e.status && "year" === e.interval && 0 === e.amount
            }
            ))
              , _e = (null === z || void 0 === z ? void 0 : z.data) && (null === z || void 0 === z || null === (a = z.data) || void 0 === a ? void 0 : a.planId) === (null === Be || void 0 === Be ? void 0 : Be.priceId);
            (0,
            o.useEffect)((function() {
                var e, t = null === x || void 0 === x || null === (e = x.data) || void 0 === e ? void 0 : e.portalDesign;
                if (t) {
                    var n, a, r, i, o, s = JSON.parse(t);
                    if (b && "FREE" !== (null === z || void 0 === z || null === (n = z.data) || void 0 === n ? void 0 : n.planId) && "CANCELLED" !== (null === z || void 0 === z || null === (a = z.data) || void 0 === a ? void 0 : a.status))
                        i = "ONE-TIME" === (null === z || void 0 === z || null === (o = z.data) || void 0 === o ? void 0 : o.planId) ? D : U;
                    else
                        i = "RECURRING" === k ? U : D;
                    var u = i.slice()
                      , l = null === (r = u[0]) || void 0 === r ? void 0 : r.currency;
                    u.unshift({
                        interval: "free",
                        amount: 0,
                        priceId: "FREE",
                        currency: l
                    });
                    var c = (0,
                    d.Z)({
                        profile: I,
                        pricing: u,
                        cancelledPlan: p,
                        paymentType: k
                    }, s);
                    ie(c)
                }
            }
            ), [null === x || void 0 === x || null === (r = x.data) || void 0 === r ? void 0 : r.portalDesign, I, z]);
            var Le = {
                logout: le,
                isAuth: b,
                proration: V,
                portals: re,
                handleUpdateUser: function() {
                    var e, t, n = null === re || void 0 === re ? void 0 : re.profile;
                    n.name !== I.name && (e = n.name),
                    n.email !== I.email && (t = n.email),
                    ge({
                        name: e,
                        email: t,
                        token: P,
                        id: n.id
                    })
                },
                subscriptionAccess: A,
                handleSignupAndSignin: function() {
                    var e, t = y.j ? location.href.split("/").pop() : "", n = !re.signup.priceId || "FREE" === re.signup.priceId;
                    if ("signin" === t || n)
                        return je(),
                        void Ie({
                            name: "".concat(t),
                            value: {}
                        });
                    if ("signup" === t) {
                        var a = re.signup;
                        e = {
                            name: a.name,
                            email: a.email,
                            priceId: a.priceId
                        }
                    }
                    Se((0,
                    l.Z)((0,
                    d.Z)({
                        siteId: Z
                    }, e), {
                        cancelUrl: Ge,
                        successUrl: Ge
                    })),
                    Ie({
                        name: "".concat(t),
                        value: {}
                    })
                },
                changePortalsFormFileds: Ie,
                handleCancelSubscription: function() {
                    Ne({
                        token: P
                    })
                },
                handleUpdateSubscription: function() {
                    var e, t = null === (e = re.plan) || void 0 === e ? void 0 : e.priceId;
                    t && fe({
                        priceId: t,
                        token: P
                    })
                },
                handleCreatePortalSession: function() {
                    he({
                        token: P
                    })
                },
                handleOnClickUpgradeButton: function() {
                    var e;
                    if (!(null === z || void 0 === z ? void 0 : z.data) || "FREE" === z.data.planId || "CANCELLED" === z.data.status || _e)
                        return function() {
                            var e;
                            return Se({
                                token: P,
                                siteId: Z,
                                cancelUrl: Ge,
                                successUrl: Ge,
                                priceId: null === (e = re.plan) || void 0 === e ? void 0 : e.priceId
                            })
                        }();
                    f.push("#/portal/proration");
                    var t = null === re || void 0 === re || null === (e = re.plan) || void 0 === e ? void 0 : e.priceId;
                    t && $({
                        priceId: t,
                        token: P
                    })
                },
                membership: null === z || void 0 === z ? void 0 : z.data,
                loading: {
                    userUpdating: pe,
                    upgradingPlan: ye,
                    sendingMagicLink: we,
                    creatingCheckout: Ze,
                    gettingMembership: H,
                    previewingProration: ne,
                    cancelingSubscription: Re,
                    creatingPortalSession: be
                },
                CDN_ROOT: v.v9,
                isComplementaryPlanActive: _e
            }
              , We = !1
              , ze = Ae(e.pageData.visibilityType, e.pageType, e.pageData.isPasswordEnable);
            ["REGULAR", "POST", "TOPIC"].includes(e.pageType) && (We = function(e, t, n) {
                var a = t && "subscriber" !== t;
                return e !== qe.PUBLIC && !a && function() {
                    var a = (n || {}).planId
                      , r = "subscriber" === t
                      , i = a && a !== qe.FREE;
                    return e === qe.FREE && !r || e === qe.PAID && !i
                }()
            }(("REGULAR" === e.pageType ? e.pageData : e.data).visibilityType, null === I || void 0 === I ? void 0 : I.role, null === z || void 0 === z ? void 0 : z.data));
            var He = function(e) {
                return (null === e || void 0 === e ? void 0 : e.data) ? JSON.parse(e.data.body).content[0].content[0].content[0].content[0] : {}
            }(ke({
                siteId: Z,
                slug: We ? "subscription-banner" : "",
                pageType: "UTIL"
            }).data);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(Ce, (0,
                l.Z)((0,
                d.Z)({}, e), {
                    user: I,
                    colors: null === re || void 0 === re || null === (s = re.general) || void 0 === s ? void 0 : s.colors,
                    membership: (null === z || void 0 === z ? void 0 : z.data) || {},
                    subscriptionAccess: A,
                    ownerState: (0,
                    d.Z)({}, null === G || void 0 === G ? void 0 : G.data),
                    subscriptionBanner: {
                        isPrivatePage: ze,
                        enabled: We,
                        data: He,
                        bannerType: e.pageType
                    }
                })), re.general && (null === (c = re.floatingButton) || void 0 === c ? void 0 : c.visible) && "NOBODY" !== A ? (0,
                i.jsxs)(Oe, {
                    value: Le,
                    children: [b ? (0,
                    i.jsx)(De, {}) : (0,
                    i.jsx)(Me, {}), (0,
                    i.jsx)(Ue, {})]
                }) : null]
            })
        };
        var ze = function(e) {
            var t = e.slug
              , n = function(e) {
                var t = e.slug
                  , n = e.siteId;
                return (0,
                L.a)(["getTagBySlug", e], b, {
                    enabled: !!n && !!t
                })
            }({
                slug: t,
                siteId: e.siteId
            })
              , a = n.data;
            return (0,
            i.jsx)(We, (0,
            l.Z)((0,
            d.Z)({}, e), {
                data: (0,
                l.Z)((0,
                d.Z)({}, null === a || void 0 === a ? void 0 : a.data), {
                    slug: t
                })
            }))
        }
          , He = function(e) {
            var t = function(e) {
                var n = e.schemaType
                  , a = e.fields
                  , r = {
                    "@context": "https://schema.org",
                    "@type": n
                };
                for (var i in a)
                    if (Object.hasOwnProperty.call(a, i)) {
                        var o = a[i];
                        r[i] = (null === o || void 0 === o ? void 0 : o.schemaType) ? t(o) : o
                    }
                return r
            };
            return {
                __html: JSON.stringify(t(e))
            }
        }
          , Qe = function(e) {
            var t = e.jsonLD;
            return t ? (0,
            i.jsx)(ce(), {
                children: (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: He(t)
                })
            }) : null
        }
          , Xe = function(e) {
            return e = e.startsWith("http") ? e : "".concat(v.v9, "/").concat(e)
        };
        var Je = function(e) {
            var t, n, a, r = e.siteId, s = e.slug, u = e.pageData, c = function(e, t) {
                var n = (0,
                o.useState)({})
                  , a = n[0]
                  , r = n[1]
                  , i = (0,
                M.aC)().token
                  , s = (0,
                L.a)(["getPostBySlug", (0,
                l.Z)((0,
                d.Z)({}, e), {
                    token: i
                })], A, (0,
                d.Z)({
                    enabled: !!e.siteId || !!e.slug
                }, t)).data
                  , u = void 0 === s ? {} : s
                  , c = u.data
                  , g = u.errors
                  , p = (null === c || void 0 === c ? void 0 : c.authors) || []
                  , v = (0,
                k.Z)(new Set(p.concat(null === c || void 0 === c ? void 0 : c.authorId))).filter(Boolean)
                  , f = G(v)
                  , y = f.getAuthor
                  , m = f.getAuthors;
                if ((0,
                o.useEffect)((function() {
                    r((0,
                    d.Z)({}, a, c))
                }
                ), [c]),
                !g)
                    return (0,
                    l.Z)((0,
                    d.Z)({}, c, a), {
                        author: y(null === c || void 0 === c ? void 0 : c.authorId),
                        authors: m(c || {})
                    })
            }({
                slug: s,
                siteId: r
            }), g = (0,
            o.useMemo)((function() {
                if (c) {
                    var e = c.bannerImage
                      , t = c.thumbnailImage
                      , n = c.title
                      , a = c.updatedAt
                      , r = c.author
                      , i = r.name
                      , o = r.avatar
                      , s = c.createdAt
                      , u = t && Xe(t);
                    return {
                        schemaType: "Article",
                        fields: {
                            image: e && Xe(e),
                            headline: n,
                            dateModified: a,
                            thumbnailUrl: u,
                            datePublished: s,
                            author: {
                                schemaType: "Person",
                                fields: {
                                    name: i,
                                    url: o
                                }
                            }
                        }
                    }
                }
            }
            ), [c]);
            if (!c)
                return null;
            var p, v = null === u || void 0 === u || null === (t = u.page) || void 0 === t || null === (n = t.settings) || void 0 === n || null === (a = n.additionalMeta) || void 0 === a ? void 0 : a.schema;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(p = c,
                !JSON.parse((null === p || void 0 === p ? void 0 : p.additionalMeta) || "{}").schema && !v && (0,
                i.jsx)(Qe, {
                    jsonLD: g
                })), (0,
                i.jsx)(We, (0,
                l.Z)((0,
                d.Z)({}, e), {
                    data: c
                }))]
            })
        };
        var Ye = function(e) {
            return (0,
            i.jsx)(We, (0,
            d.Z)({}, e))
        }
          , Ve = (0,
        m.Z)({
            baseUrl: y.j ? v.Rm.NEXT_API_PATH : v.Rm.API_URL
        })
          , $e = (0,
        f.Z)({
            queryFn: Ve,
            query: function(e) {
                var t = e.queryKey
                  , n = (0,
                r.Z)(t, 2)
                  , a = n[0]
                  , i = n[1]
                  , o = i.slug
                  , s = i.siteId;
                return {
                    body: (0,
                    p.Z)({
                        queryName: a,
                        select: "id slug name",
                        args: {
                            slug: {
                                value: o,
                                type: "String!"
                            },
                            siteId: {
                                value: s,
                                type: "ID!"
                            }
                        }
                    })
                }
            },
            transformResponse: function(e) {
                var t = (0,
                d.Z)({}, e);
                return e.data && (t.data = e.data.getCategoryBySlug),
                t
            }
        });
        (function() {
            var e = (0,
            c.Z)((function(e, t) {
                var n, a, i, o;
                return (0,
                g.__generator)(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return n = {},
                        t.slug ? (a = e.fetchQuery(["getCategoryBySlug", t], $e),
                        i = e.fetchQuery(["getPostsByCategorySlug", t], C),
                        [4, Promise.all([a, i])]) : [2, n];
                    case 1:
                        return o = r.Z.apply(void 0, [s.sent(), 1]),
                        [2, o[0]]
                    }
                }
                ))
            }
            ))
        }
        )(),
        function() {
            var e = (0,
            c.Z)((function(e, t) {
                var n, a, r, i;
                return (0,
                g.__generator)(this, (function(o) {
                    return n = t.siteId,
                    a = t.slug,
                    r = {},
                    a && n ? (i = {},
                    [2, e.fetchQuery(["getCategoryBySlug", (i.siteId = n,
                    i.slug = a,
                    i)], $e)]) : [2, r]
                }
                ))
            }
            ))
        }();
        var et = function(e) {
            var t = e.slug
              , n = function(e) {
                var t = e.siteId
                  , n = e.slug;
                return (0,
                L.a)(["getCategoryBySlug", e], $e, {
                    enabled: !!t && !!n
                })
            }({
                slug: t,
                siteId: e.siteId
            })
              , a = n.data;
            return (null === a || void 0 === a ? void 0 : a.errors) ? null : (0,
            i.jsx)(We, (0,
            l.Z)((0,
            d.Z)({}, e), {
                data: (0,
                l.Z)((0,
                d.Z)({}, null === a || void 0 === a ? void 0 : a.data), {
                    slug: t
                })
            }))
        }
          , tt = function(e) {
            var t, n = e.siteId, a = e.slug, r = e.pageSlug, s = (t = {
                slug: a,
                siteId: n,
                pageSlug: r
            },
            (0,
            L.a)(["getCollectionItemByItemSlug", t], he)).data;
            (0,
            o.useMemo)((function() {
                if (null === s || void 0 === s ? void 0 : s.data) {
                    var e = s.data;
                    return {
                        schemaType: "Article",
                        fields: {
                            headline: e.name,
                            dateModified: e.updatedAt,
                            datePublished: e.createdAt
                        }
                    }
                }
            }
            ), [null === s || void 0 === s ? void 0 : s.data]);
            return (null === s || void 0 === s ? void 0 : s.errors) ? null : (0,
            i.jsx)(i.Fragment, {
                children: (0,
                i.jsx)(We, (0,
                l.Z)((0,
                d.Z)({}, e), {
                    data: null === s || void 0 === s ? void 0 : s.data
                }))
            })
        }
          , nt = n(7814)
          , at = n(6501)
          , rt = n(2926)
          , it = n(7536);
        var ot = function(e) {
            var t = e.siteId
              , n = e.pageSlug
              , a = e.pageRefetch
              , r = e.pageType
              , s = (0,
            it.cI)()
              , u = s.register
              , p = s.handleSubmit
              , v = s.watch
              , f = (0,
            Pe.y)().getIcon
              , y = v("password")
              , m = u("password")
              , h = (0,
            Y.D)(Le)
              , b = h.mutateAsync
              , I = h.isLoading
              , P = (0,
            o.useState)(!1)
              , x = P[0]
              , S = P[1]
              , Z = (0,
            o.useState)([])
              , T = Z[0]
              , j = Z[1]
              , w = function() {
                var e = (0,
                c.Z)((function(e) {
                    var i, o, s, u;
                    return (0,
                    g.__generator)(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            return i = e.password,
                            I ? [2] : [4, b(((s = {}).siteId = t,
                            s.password = i,
                            s.slug = n || "index",
                            s.pageType = r,
                            s))];
                        case 1:
                            return (null === (o = d.sent()) || void 0 === o ? void 0 : o.data) ? (j([]),
                            l = "Logged in successfully!",
                            c = "success",
                            (0,
                            at.ZP)(l, {
                                position: "bottom-center",
                                type: c
                            }),
                            a()) : (u = o.errors.map((function(e) {
                                var t, n, a;
                                return "object" === typeof (null === (t = e.extensions) || void 0 === t ? void 0 : t.message) ? Object.values(null === (a = e.extensions) || void 0 === a ? void 0 : a.message).join(",") : (null === (n = e.extensions) || void 0 === n ? void 0 : n.message) || e.message
                            }
                            )),
                            j((0,
                            k.Z)(u))),
                            [2]
                        }
                        var l, c
                    }
                    ))
                }
                ));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            o.useEffect)((function() {
                f({
                    prefix: "fas",
                    iconName: "eye"
                }),
                f({
                    prefix: "fas",
                    iconName: "eye-slash"
                }),
                f({
                    prefix: "fas",
                    iconName: "circle-xmark"
                }),
                f({
                    prefix: "fas",
                    iconName: "spinner"
                })
            }
            ), []),
            (0,
            i.jsx)("div", {
                className: "flex justify-center items-center h-screen font-sans",
                children: (0,
                i.jsxs)("div", {
                    className: "bg-white w-[450px] rounded ".concat(rt.card),
                    children: [(0,
                    i.jsx)("h2", {
                        className: "m-0 text-lg capitalize text-center mt-6 py-4 text-gray-600 border-0 border-b border-gray-300 border-solid font-normal tracking-wider",
                        children: "Password protected Link"
                    }), (0,
                    i.jsx)("form", {
                        onSubmit: p(w),
                        children: (0,
                        i.jsxs)("div", {
                            className: "grid p-8 gap-3",
                            children: [(0,
                            i.jsx)("label", {
                                className: "text-md text-sm text-[#171A21]",
                                children: "Enter Password"
                            }), (0,
                            i.jsxs)("div", {
                                className: "rounded-sm flex justify-between items-center border-1 border-solid border-[#E5EBF0] bg-[#F4F6F9] ",
                                children: [(0,
                                i.jsx)("input", (0,
                                l.Z)((0,
                                d.Z)({
                                    className: "outline-none text-sm text-gray-600 w-full border-0 bg-[#F4F6F9] p-2",
                                    type: x ? "text" : "password",
                                    placeholder: "Enter password to access"
                                }, u("password")), {
                                    onChange: function(e) {
                                        e.target.value = e.target.value.substring(0, 18),
                                        m.onChange(e)
                                    }
                                })), (0,
                                i.jsx)("span", {
                                    className: "text-gray-500 text-sm p-2",
                                    onClick: function(e) {
                                        e.stopPropagation(),
                                        S((function(e) {
                                            return !e
                                        }
                                        ))
                                    },
                                    children: (0,
                                    i.jsx)(nt.G, {
                                        icon: ["fas", x ? "eye" : "eye-slash"]
                                    })
                                })]
                            }), (0,
                            i.jsxs)("button", {
                                className: "py-3 text-white rounded bg-[#0062FF] hover:bg-blue-500 disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-100 border-0 cursor-pointer",
                                type: "submit",
                                disabled: !y,
                                children: [I && (0,
                                i.jsx)(nt.G, {
                                    spin: !0,
                                    icon: ["fas", "spinner"],
                                    style: {
                                        marginRight: 5
                                    }
                                }), "Submit Password"]
                            }), T.length ? (0,
                            i.jsx)("div", {
                                className: "border border-solid border-[#FFCCC7] text-[14px] bg-[#FFF1F0] p-3 text-gray-600 rounded-sm",
                                "data-testid": "errorBlock",
                                children: T.map((function(e) {
                                    return (0,
                                    i.jsxs)("li", {
                                        className: "list-none",
                                        children: [(0,
                                        i.jsx)("span", {
                                            className: "text-red-500 mx-2",
                                            children: (0,
                                            i.jsx)(nt.G, {
                                                icon: ["fas", "circle-xmark"]
                                            })
                                        }), (0,
                                        i.jsx)("span", {
                                            children: e
                                        })]
                                    }, e)
                                }
                                ))
                            }) : null]
                        })
                    })]
                })
            })
        }
          , st = function() {
            return (0,
            i.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                },
                children: [(0,
                i.jsx)("h3", {
                    style: {
                        fontSize: "24px"
                    },
                    children: "The page could not be loaded. Please try reloading..."
                }), (0,
                i.jsx)("button", {
                    style: {
                        padding: "15px 30px",
                        borderRadius: "4px",
                        backgroundColor: "dodgerblue",
                        border: "none",
                        outline: "none",
                        color: "#fff",
                        cursor: "pointer"
                    },
                    onClick: function() {
                        return window.location.reload()
                    },
                    children: "Reload"
                })]
            })
        }
          , ut = function() {
            return (0,
            i.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    textAlign: "center",
                    borderRadius: "8px",
                    padding: "50px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                },
                children: (0,
                i.jsx)("h3", {
                    style: {
                        fontSize: "24px",
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                        marginBottom: "20px",
                        fontWeight: 600
                    },
                    children: "This site is suspended!"
                })
            })
        }
          , dt = function() {
            var e = (0,
            Pe.y)().getIcon;
            return (0,
            o.useEffect)((function() {
                e({
                    prefix: "fas",
                    iconName: "spinner"
                })
            }
            ), []),
            (0,
            i.jsx)("div", {
                style: {
                    width: "100vw",
                    display: "grid",
                    height: "100vh",
                    color: "#3a30ba80",
                    placeItems: "center"
                },
                children: (0,
                i.jsx)(nt.G, {
                    icon: ["fas", "spinner"],
                    spin: !0,
                    size: "2xl"
                })
            })
        };
        var lt = !0
          , ct = function(e) {
            var t, n, a, d, l, c, g, p, v, f = e.host, y = e.pageType, m = e.pageSlug, h = (0,
            s.useRouter)().query, b = (void 0 === h ? {} : h).slug, I = (0,
            r.Z)(void 0 === b ? [] : b, 1)[0], P = (0,
            u.W)(f).data, x = ke({
                pageType: y,
                siteId: null === P || void 0 === P || null === (t = P.data) || void 0 === t ? void 0 : t.id,
                slug: m
            }), S = x.data, Z = x.refetch, T = x.isFetching, j = (0,
            o.useMemo)((function() {
                var e;
                if (!(null === S || void 0 === S ? void 0 : S.data))
                    return {};
                var t = S.data
                  , n = t.body
                  , a = t.visibilityType
                  , r = t.isPasswordEnable
                  , i = P.data.globalStyle;
                return {
                    visibilityType: a,
                    isPasswordEnable: r,
                    siteId: null === (e = P.data) || void 0 === e ? void 0 : e.id,
                    global: i && JSON.parse(i),
                    page: n ? JSON.parse(n) : void 0
                }
            }
            ), [S, P]);
            if ("SUSPENDED" === (null === P || void 0 === P || null === (n = P.data) || void 0 === n ? void 0 : n.status))
                return (0,
                i.jsx)(ut, {});
            if (!P || !S)
                return (0,
                i.jsx)(st, {});
            var w, E = function(e) {
                var t;
                return null !== (t = {
                    TAG: ze,
                    POST: Je,
                    TOPIC: tt,
                    CATEGORY: et
                }[e]) && void 0 !== t ? t : Ye
            }(null === S || void 0 === S || null === (a = S.data) || void 0 === a ? void 0 : a.ref), N = {
                postSlug: null === (d = P.data) || void 0 === d ? void 0 : d.postSlug,
                categorySlug: null === (l = P.data) || void 0 === l ? void 0 : l.categorySlug
            };
            return (null === S || void 0 === S ? void 0 : S.errors) ? null : T && !(null === S || void 0 === S || null === (c = S.data) || void 0 === c ? void 0 : c.body) ? (0,
            i.jsx)(dt, {}) : (null === S || void 0 === S || null === (g = S.data) || void 0 === g ? void 0 : g.isPasswordEnable) && (null === S || void 0 === S || null === (p = S.data) || void 0 === p ? void 0 : p.shouldOpenLoginWindow) ? (0,
            i.jsx)(ot, {
                pageSlug: m,
                siteId: P.data.id,
                pageRefetch: Z,
                pageType: null === S || void 0 === S || null === (w = S.data) || void 0 === w ? void 0 : w.pageType
            }) : (0,
            i.jsx)(E, {
                slugs: N,
                slug: I,
                pageData: j,
                pageSlug: m,
                siteId: P.data.id,
                pageType: (null === S || void 0 === S || null === (v = S.data) || void 0 === v ? void 0 : v.ref) || "REGULAR",
                analyticsSiteId: P.data.analyticsSiteId,
                isAnalyticsEnabled: P.data.isAnalyticsEnabled
            })
        }
    },
    2926: function(e) {
        e.exports = {
            card: "PasswordProtected_card__LZU3g"
        }
    }
}]);
