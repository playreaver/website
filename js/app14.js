self.__BUILD_MANIFEST = function(a, s, c, e, t, i, n, o) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/dashboard"
            }, {
                source: "/dashboard/:path*"
            }, {
                source: "/:collectionSlug/rss.xml"
            }, {
                source: "/:collectionSlug/sitemap.xml"
            }, {
                source: "/robots.txt"
            }, {
                source: "/sitemap.xml"
            }],
            fallback: []
        },
        "/404": [c, e, "js/app17.js"],
        "/_error": ["js/app18.js"],
        "/_health-check": ["js/app19.js"],
        "/[domain]": [c, t, a, e, i, s, n, o, "js/app13.js"],
        "/[domain]/auth/accept-invitation": [a, s, "js/app20.js"],
        "/[domain]/auth/login": [a, s, "js/app21.js"],
        "/[domain]/[page]": [c, t, a, e, i, s, n, o, "js/app16.js"],
        "/[domain]/[page]/[...slug]": [c, t, a, e, i, s, n, o, "js/app22.js"],
        sortedPages: ["/404", "/_app", "/_error", "/_health-check", "/[domain]", "/[domain]/auth/accept-invitation", "/[domain]/auth/login", "/[domain]/[page]", "/[domain]/[page]/[...slug]"]
    }
}("js/app8.js", "js/app11.js", "js/app6.js", "js/app9.js", "js/app7.js", "js/app10.js", "js/app12.js", "css/app3.css"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
